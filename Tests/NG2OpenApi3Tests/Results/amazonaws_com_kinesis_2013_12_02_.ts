import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the input for <code>AddTagsToStream</code>. */
	export interface AddTagsToStreamInput {
		StreamName?: string;

		/** Required */
		Tags: TagMap;
		StreamARN?: string;
	}

	/** Represents the input for <code>AddTagsToStream</code>. */
	export interface AddTagsToStreamInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToStreamInputFormGroup() {
		return new FormGroup<AddTagsToStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface InvalidArgumentException {
	}
	export interface InvalidArgumentExceptionFormProperties {
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}


	/** Represents the input for <code>CreateStream</code>. */
	export interface CreateStreamInput {

		/** Required */
		StreamName: string;
		ShardCount?: number | null;
		StreamModeDetails?: StreamModeDetails;
	}

	/** Represents the input for <code>CreateStream</code>. */
	export interface CreateStreamInputFormProperties {

		/** Required */
		StreamName: FormControl<string | null | undefined>,
		ShardCount: FormControl<number | null | undefined>,
	}
	export function CreateCreateStreamInputFormGroup() {
		return new FormGroup<CreateStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShardCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams.  */
	export interface StreamModeDetails {

		/** Required */
		StreamMode: StreamMode;
	}

	/**  Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams.  */
	export interface StreamModeDetailsFormProperties {

		/** Required */
		StreamMode: FormControl<StreamMode | null | undefined>,
	}
	export function CreateStreamModeDetailsFormGroup() {
		return new FormGroup<StreamModeDetailsFormProperties>({
			StreamMode: new FormControl<StreamMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StreamMode { PROVISIONED = 'PROVISIONED', ON_DEMAND = 'ON_DEMAND' }


	/** Represents the input for <a>DecreaseStreamRetentionPeriod</a>. */
	export interface DecreaseStreamRetentionPeriodInput {
		StreamName?: string;

		/** Required */
		RetentionPeriodHours: number;
		StreamARN?: string;
	}

	/** Represents the input for <a>DecreaseStreamRetentionPeriod</a>. */
	export interface DecreaseStreamRetentionPeriodInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		RetentionPeriodHours: FormControl<number | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDecreaseStreamRetentionPeriodInputFormGroup() {
		return new FormGroup<DecreaseStreamRetentionPeriodInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			RetentionPeriodHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for <a>DeleteStream</a>. */
	export interface DeleteStreamInput {
		StreamName?: string;
		EnforceConsumerDeletion?: boolean | null;
		StreamARN?: string;
	}

	/** Represents the input for <a>DeleteStream</a>. */
	export interface DeleteStreamInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		EnforceConsumerDeletion: FormControl<boolean | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStreamInputFormGroup() {
		return new FormGroup<DeleteStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			EnforceConsumerDeletion: new FormControl<boolean | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeregisterStreamConsumerInput {
		StreamARN?: string;
		ConsumerName?: string;
		ConsumerARN?: string;
	}
	export interface DeregisterStreamConsumerInputFormProperties {
		StreamARN: FormControl<string | null | undefined>,
		ConsumerName: FormControl<string | null | undefined>,
		ConsumerARN: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterStreamConsumerInputFormGroup() {
		return new FormGroup<DeregisterStreamConsumerInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined),
			ConsumerName: new FormControl<string | null | undefined>(undefined),
			ConsumerARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLimitsOutput {

		/** Required */
		ShardLimit: number;

		/** Required */
		OpenShardCount: number;

		/** Required */
		OnDemandStreamCount: number;

		/** Required */
		OnDemandStreamCountLimit: number;
	}
	export interface DescribeLimitsOutputFormProperties {

		/** Required */
		ShardLimit: FormControl<number | null | undefined>,

		/** Required */
		OpenShardCount: FormControl<number | null | undefined>,

		/** Required */
		OnDemandStreamCount: FormControl<number | null | undefined>,

		/** Required */
		OnDemandStreamCountLimit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLimitsOutputFormGroup() {
		return new FormGroup<DescribeLimitsOutputFormProperties>({
			ShardLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OpenShardCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OnDemandStreamCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OnDemandStreamCountLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLimitsInput {
	}
	export interface DescribeLimitsInputFormProperties {
	}
	export function CreateDescribeLimitsInputFormGroup() {
		return new FormGroup<DescribeLimitsInputFormProperties>({
		});

	}


	/** Represents the output for <code>DescribeStream</code>. */
	export interface DescribeStreamOutput {

		/** Required */
		StreamDescription: StreamDescription;
	}

	/** Represents the output for <code>DescribeStream</code>. */
	export interface DescribeStreamOutputFormProperties {
	}
	export function CreateDescribeStreamOutputFormGroup() {
		return new FormGroup<DescribeStreamOutputFormProperties>({
		});

	}


	/** Represents the output for <a>DescribeStream</a>. */
	export interface StreamDescription {

		/** Required */
		StreamName: string;

		/** Required */
		StreamARN: string;

		/** Required */
		StreamStatus: StreamStatus;
		StreamModeDetails?: StreamModeDetails;

		/** Required */
		Shards: Array<Shard>;

		/** Required */
		HasMoreShards: boolean;

		/** Required */
		RetentionPeriodHours: number;

		/** Required */
		StreamCreationTimestamp: Date;

		/** Required */
		EnhancedMonitoring: Array<EnhancedMetrics>;
		EncryptionType?: EncryptionType;
		KeyId?: string;
	}

	/** Represents the output for <a>DescribeStream</a>. */
	export interface StreamDescriptionFormProperties {

		/** Required */
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		StreamStatus: FormControl<StreamStatus | null | undefined>,

		/** Required */
		HasMoreShards: FormControl<boolean | null | undefined>,

		/** Required */
		RetentionPeriodHours: FormControl<number | null | undefined>,

		/** Required */
		StreamCreationTimestamp: FormControl<Date | null | undefined>,
		EncryptionType: FormControl<EncryptionType | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
	}
	export function CreateStreamDescriptionFormGroup() {
		return new FormGroup<StreamDescriptionFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamStatus: new FormControl<StreamStatus | null | undefined>(undefined, [Validators.required]),
			HasMoreShards: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			RetentionPeriodHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StreamCreationTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EncryptionType: new FormControl<EncryptionType | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StreamStatus { CREATING = 'CREATING', DELETING = 'DELETING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING' }


	/** A uniquely identified group of data records in a Kinesis data stream. */
	export interface Shard {

		/** Required */
		ShardId: string;
		ParentShardId?: string;
		AdjacentParentShardId?: string;

		/** Required */
		HashKeyRange: HashKeyRange;

		/** Required */
		SequenceNumberRange: SequenceNumberRange;
	}

	/** A uniquely identified group of data records in a Kinesis data stream. */
	export interface ShardFormProperties {

		/** Required */
		ShardId: FormControl<string | null | undefined>,
		ParentShardId: FormControl<string | null | undefined>,
		AdjacentParentShardId: FormControl<string | null | undefined>,
	}
	export function CreateShardFormGroup() {
		return new FormGroup<ShardFormProperties>({
			ShardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParentShardId: new FormControl<string | null | undefined>(undefined),
			AdjacentParentShardId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers. */
	export interface HashKeyRange {

		/** Required */
		StartingHashKey: string;

		/** Required */
		EndingHashKey: string;
	}

	/** The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers. */
	export interface HashKeyRangeFormProperties {

		/** Required */
		StartingHashKey: FormControl<string | null | undefined>,

		/** Required */
		EndingHashKey: FormControl<string | null | undefined>,
	}
	export function CreateHashKeyRangeFormGroup() {
		return new FormGroup<HashKeyRangeFormProperties>({
			StartingHashKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndingHashKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The range of possible sequence numbers for the shard. */
	export interface SequenceNumberRange {

		/** Required */
		StartingSequenceNumber: string;
		EndingSequenceNumber?: string;
	}

	/** The range of possible sequence numbers for the shard. */
	export interface SequenceNumberRangeFormProperties {

		/** Required */
		StartingSequenceNumber: FormControl<string | null | undefined>,
		EndingSequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateSequenceNumberRangeFormGroup() {
		return new FormGroup<SequenceNumberRangeFormProperties>({
			StartingSequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndingSequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents enhanced metrics types. */
	export interface EnhancedMetrics {
		ShardLevelMetrics?: Array<MetricsName>;
	}

	/** Represents enhanced metrics types. */
	export interface EnhancedMetricsFormProperties {
	}
	export function CreateEnhancedMetricsFormGroup() {
		return new FormGroup<EnhancedMetricsFormProperties>({
		});

	}

	export enum MetricsName { IncomingBytes = 'IncomingBytes', IncomingRecords = 'IncomingRecords', OutgoingBytes = 'OutgoingBytes', OutgoingRecords = 'OutgoingRecords', WriteProvisionedThroughputExceeded = 'WriteProvisionedThroughputExceeded', ReadProvisionedThroughputExceeded = 'ReadProvisionedThroughputExceeded', IteratorAgeMilliseconds = 'IteratorAgeMilliseconds', ALL = 'ALL' }

	export enum EncryptionType { NONE = 'NONE', KMS = 'KMS' }


	/** Represents the input for <code>DescribeStream</code>. */
	export interface DescribeStreamInput {
		StreamName?: string;
		Limit?: number | null;
		ExclusiveStartShardId?: string;
		StreamARN?: string;
	}

	/** Represents the input for <code>DescribeStream</code>. */
	export interface DescribeStreamInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		ExclusiveStartShardId: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamInputFormGroup() {
		return new FormGroup<DescribeStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			ExclusiveStartShardId: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStreamConsumerOutput {

		/** Required */
		ConsumerDescription: ConsumerDescription;
	}
	export interface DescribeStreamConsumerOutputFormProperties {
	}
	export function CreateDescribeStreamConsumerOutputFormGroup() {
		return new FormGroup<DescribeStreamConsumerOutputFormProperties>({
		});

	}


	/** An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>. */
	export interface ConsumerDescription {

		/** Required */
		ConsumerName: string;

		/** Required */
		ConsumerARN: string;

		/** Required */
		ConsumerStatus: ConsumerStatus;

		/** Required */
		ConsumerCreationTimestamp: Date;

		/** Required */
		StreamARN: string;
	}

	/** An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>. */
	export interface ConsumerDescriptionFormProperties {

		/** Required */
		ConsumerName: FormControl<string | null | undefined>,

		/** Required */
		ConsumerARN: FormControl<string | null | undefined>,

		/** Required */
		ConsumerStatus: FormControl<ConsumerStatus | null | undefined>,

		/** Required */
		ConsumerCreationTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateConsumerDescriptionFormGroup() {
		return new FormGroup<ConsumerDescriptionFormProperties>({
			ConsumerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsumerARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsumerStatus: new FormControl<ConsumerStatus | null | undefined>(undefined, [Validators.required]),
			ConsumerCreationTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConsumerStatus { CREATING = 'CREATING', DELETING = 'DELETING', ACTIVE = 'ACTIVE' }

	export interface DescribeStreamConsumerInput {
		StreamARN?: string;
		ConsumerName?: string;
		ConsumerARN?: string;
	}
	export interface DescribeStreamConsumerInputFormProperties {
		StreamARN: FormControl<string | null | undefined>,
		ConsumerName: FormControl<string | null | undefined>,
		ConsumerARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamConsumerInputFormGroup() {
		return new FormGroup<DescribeStreamConsumerInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined),
			ConsumerName: new FormControl<string | null | undefined>(undefined),
			ConsumerARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStreamSummaryOutput {

		/** Required */
		StreamDescriptionSummary: StreamDescriptionSummary;
	}
	export interface DescribeStreamSummaryOutputFormProperties {
	}
	export function CreateDescribeStreamSummaryOutputFormGroup() {
		return new FormGroup<DescribeStreamSummaryOutputFormProperties>({
		});

	}


	/** Represents the output for <a>DescribeStreamSummary</a>  */
	export interface StreamDescriptionSummary {

		/** Required */
		StreamName: string;

		/** Required */
		StreamARN: string;

		/** Required */
		StreamStatus: StreamStatus;
		StreamModeDetails?: StreamModeDetails;

		/** Required */
		RetentionPeriodHours: number;

		/** Required */
		StreamCreationTimestamp: Date;

		/** Required */
		EnhancedMonitoring: Array<EnhancedMetrics>;
		EncryptionType?: EncryptionType;
		KeyId?: string;

		/** Required */
		OpenShardCount: number;
		ConsumerCount?: number | null;
	}

	/** Represents the output for <a>DescribeStreamSummary</a>  */
	export interface StreamDescriptionSummaryFormProperties {

		/** Required */
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		StreamStatus: FormControl<StreamStatus | null | undefined>,

		/** Required */
		RetentionPeriodHours: FormControl<number | null | undefined>,

		/** Required */
		StreamCreationTimestamp: FormControl<Date | null | undefined>,
		EncryptionType: FormControl<EncryptionType | null | undefined>,
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		OpenShardCount: FormControl<number | null | undefined>,
		ConsumerCount: FormControl<number | null | undefined>,
	}
	export function CreateStreamDescriptionSummaryFormGroup() {
		return new FormGroup<StreamDescriptionSummaryFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamStatus: new FormControl<StreamStatus | null | undefined>(undefined, [Validators.required]),
			RetentionPeriodHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StreamCreationTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EncryptionType: new FormControl<EncryptionType | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			OpenShardCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ConsumerCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeStreamSummaryInput {
		StreamName?: string;
		StreamARN?: string;
	}
	export interface DescribeStreamSummaryInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamSummaryInputFormGroup() {
		return new FormGroup<DescribeStreamSummaryInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>. */
	export interface EnhancedMonitoringOutput {
		StreamName?: string;
		CurrentShardLevelMetrics?: Array<MetricsName>;
		DesiredShardLevelMetrics?: Array<MetricsName>;
		StreamARN?: string;
	}

	/** Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>. */
	export interface EnhancedMonitoringOutputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateEnhancedMonitoringOutputFormGroup() {
		return new FormGroup<EnhancedMonitoringOutputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for <a>DisableEnhancedMonitoring</a>. */
	export interface DisableEnhancedMonitoringInput {
		StreamName?: string;

		/** Required */
		ShardLevelMetrics: Array<MetricsName>;
		StreamARN?: string;
	}

	/** Represents the input for <a>DisableEnhancedMonitoring</a>. */
	export interface DisableEnhancedMonitoringInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateDisableEnhancedMonitoringInputFormGroup() {
		return new FormGroup<DisableEnhancedMonitoringInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for <a>EnableEnhancedMonitoring</a>. */
	export interface EnableEnhancedMonitoringInput {
		StreamName?: string;

		/** Required */
		ShardLevelMetrics: Array<MetricsName>;
		StreamARN?: string;
	}

	/** Represents the input for <a>EnableEnhancedMonitoring</a>. */
	export interface EnableEnhancedMonitoringInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateEnableEnhancedMonitoringInputFormGroup() {
		return new FormGroup<EnableEnhancedMonitoringInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output for <a>GetRecords</a>. */
	export interface GetRecordsOutput {

		/** Required */
		Records: Array<Record>;
		NextShardIterator?: string;
		MillisBehindLatest?: number | null;
		ChildShards?: Array<ChildShard>;
	}

	/** Represents the output for <a>GetRecords</a>. */
	export interface GetRecordsOutputFormProperties {
		NextShardIterator: FormControl<string | null | undefined>,
		MillisBehindLatest: FormControl<number | null | undefined>,
	}
	export function CreateGetRecordsOutputFormGroup() {
		return new FormGroup<GetRecordsOutputFormProperties>({
			NextShardIterator: new FormControl<string | null | undefined>(undefined),
			MillisBehindLatest: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob. */
	export interface Record {

		/** Required */
		SequenceNumber: string;
		ApproximateArrivalTimestamp?: Date;

		/** Required */
		Data: string;

		/** Required */
		PartitionKey: string;
		EncryptionType?: EncryptionType;
	}

	/** The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob. */
	export interface RecordFormProperties {

		/** Required */
		SequenceNumber: FormControl<string | null | undefined>,
		ApproximateArrivalTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		Data: FormControl<string | null | undefined>,

		/** Required */
		PartitionKey: FormControl<string | null | undefined>,
		EncryptionType: FormControl<EncryptionType | null | undefined>,
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
			SequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApproximateArrivalTimestamp: new FormControl<Date | null | undefined>(undefined),
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PartitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionType: new FormControl<EncryptionType | null | undefined>(undefined),
		});

	}


	/** Output parameter of the GetRecords API. The existing child shard of the current shard. */
	export interface ChildShard {

		/** Required */
		ShardId: string;

		/** Required */
		ParentShards: Array<string>;

		/**
		 * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
		 * Required
		 */
		HashKeyRange: HashKeyRange;
	}

	/** Output parameter of the GetRecords API. The existing child shard of the current shard. */
	export interface ChildShardFormProperties {

		/** Required */
		ShardId: FormControl<string | null | undefined>,
	}
	export function CreateChildShardFormGroup() {
		return new FormGroup<ChildShardFormProperties>({
			ShardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input for <a>GetRecords</a>. */
	export interface GetRecordsInput {

		/** Required */
		ShardIterator: string;
		Limit?: number | null;
		StreamARN?: string;
	}

	/** Represents the input for <a>GetRecords</a>. */
	export interface GetRecordsInputFormProperties {

		/** Required */
		ShardIterator: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateGetRecordsInputFormGroup() {
		return new FormGroup<GetRecordsInputFormProperties>({
			ShardIterator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionedThroughputExceededException {
	}
	export interface ProvisionedThroughputExceededExceptionFormProperties {
	}
	export function CreateProvisionedThroughputExceededExceptionFormGroup() {
		return new FormGroup<ProvisionedThroughputExceededExceptionFormProperties>({
		});

	}

	export interface ExpiredIteratorException {
	}
	export interface ExpiredIteratorExceptionFormProperties {
	}
	export function CreateExpiredIteratorExceptionFormGroup() {
		return new FormGroup<ExpiredIteratorExceptionFormProperties>({
		});

	}

	export interface KMSDisabledException {
	}
	export interface KMSDisabledExceptionFormProperties {
	}
	export function CreateKMSDisabledExceptionFormGroup() {
		return new FormGroup<KMSDisabledExceptionFormProperties>({
		});

	}

	export interface KMSInvalidStateException {
	}
	export interface KMSInvalidStateExceptionFormProperties {
	}
	export function CreateKMSInvalidStateExceptionFormGroup() {
		return new FormGroup<KMSInvalidStateExceptionFormProperties>({
		});

	}

	export interface KMSAccessDeniedException {
	}
	export interface KMSAccessDeniedExceptionFormProperties {
	}
	export function CreateKMSAccessDeniedExceptionFormGroup() {
		return new FormGroup<KMSAccessDeniedExceptionFormProperties>({
		});

	}

	export interface KMSNotFoundException {
	}
	export interface KMSNotFoundExceptionFormProperties {
	}
	export function CreateKMSNotFoundExceptionFormGroup() {
		return new FormGroup<KMSNotFoundExceptionFormProperties>({
		});

	}

	export interface KMSOptInRequired {
	}
	export interface KMSOptInRequiredFormProperties {
	}
	export function CreateKMSOptInRequiredFormGroup() {
		return new FormGroup<KMSOptInRequiredFormProperties>({
		});

	}

	export interface KMSThrottlingException {
	}
	export interface KMSThrottlingExceptionFormProperties {
	}
	export function CreateKMSThrottlingExceptionFormGroup() {
		return new FormGroup<KMSThrottlingExceptionFormProperties>({
		});

	}


	/** Represents the output for <code>GetShardIterator</code>. */
	export interface GetShardIteratorOutput {
		ShardIterator?: string;
	}

	/** Represents the output for <code>GetShardIterator</code>. */
	export interface GetShardIteratorOutputFormProperties {
		ShardIterator: FormControl<string | null | undefined>,
	}
	export function CreateGetShardIteratorOutputFormGroup() {
		return new FormGroup<GetShardIteratorOutputFormProperties>({
			ShardIterator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for <code>GetShardIterator</code>. */
	export interface GetShardIteratorInput {
		StreamName?: string;

		/** Required */
		ShardId: string;

		/** Required */
		ShardIteratorType: ShardIteratorType;
		StartingSequenceNumber?: string;
		Timestamp?: Date;
		StreamARN?: string;
	}

	/** Represents the input for <code>GetShardIterator</code>. */
	export interface GetShardIteratorInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		ShardId: FormControl<string | null | undefined>,

		/** Required */
		ShardIteratorType: FormControl<ShardIteratorType | null | undefined>,
		StartingSequenceNumber: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateGetShardIteratorInputFormGroup() {
		return new FormGroup<GetShardIteratorInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			ShardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShardIteratorType: new FormControl<ShardIteratorType | null | undefined>(undefined, [Validators.required]),
			StartingSequenceNumber: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShardIteratorType { AT_SEQUENCE_NUMBER = 'AT_SEQUENCE_NUMBER', AFTER_SEQUENCE_NUMBER = 'AFTER_SEQUENCE_NUMBER', TRIM_HORIZON = 'TRIM_HORIZON', LATEST = 'LATEST', AT_TIMESTAMP = 'AT_TIMESTAMP' }


	/** Represents the input for <a>IncreaseStreamRetentionPeriod</a>. */
	export interface IncreaseStreamRetentionPeriodInput {
		StreamName?: string;

		/** Required */
		RetentionPeriodHours: number;
		StreamARN?: string;
	}

	/** Represents the input for <a>IncreaseStreamRetentionPeriod</a>. */
	export interface IncreaseStreamRetentionPeriodInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		RetentionPeriodHours: FormControl<number | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateIncreaseStreamRetentionPeriodInputFormGroup() {
		return new FormGroup<IncreaseStreamRetentionPeriodInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			RetentionPeriodHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListShardsOutput {
		Shards?: Array<Shard>;
		NextToken?: string;
	}
	export interface ListShardsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListShardsOutputFormGroup() {
		return new FormGroup<ListShardsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListShardsInput {
		StreamName?: string;
		NextToken?: string;
		ExclusiveStartShardId?: string;
		MaxResults?: number | null;
		StreamCreationTimestamp?: Date;
		ShardFilter?: ShardFilter;
		StreamARN?: string;
	}
	export interface ListShardsInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ExclusiveStartShardId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StreamCreationTimestamp: FormControl<Date | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateListShardsInputFormGroup() {
		return new FormGroup<ListShardsInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ExclusiveStartShardId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StreamCreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request parameter used to filter out the response of the <code>ListShards</code> API. */
	export interface ShardFilter {

		/** Required */
		Type: ShardFilterType;
		ShardId?: string;
		Timestamp?: Date;
	}

	/** The request parameter used to filter out the response of the <code>ListShards</code> API. */
	export interface ShardFilterFormProperties {

		/** Required */
		Type: FormControl<ShardFilterType | null | undefined>,
		ShardId: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateShardFilterFormGroup() {
		return new FormGroup<ShardFilterFormProperties>({
			Type: new FormControl<ShardFilterType | null | undefined>(undefined, [Validators.required]),
			ShardId: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ShardFilterType { AFTER_SHARD_ID = 'AFTER_SHARD_ID', AT_TRIM_HORIZON = 'AT_TRIM_HORIZON', FROM_TRIM_HORIZON = 'FROM_TRIM_HORIZON', AT_LATEST = 'AT_LATEST', AT_TIMESTAMP = 'AT_TIMESTAMP', FROM_TIMESTAMP = 'FROM_TIMESTAMP' }

	export interface ExpiredNextTokenException {
	}
	export interface ExpiredNextTokenExceptionFormProperties {
	}
	export function CreateExpiredNextTokenExceptionFormGroup() {
		return new FormGroup<ExpiredNextTokenExceptionFormProperties>({
		});

	}

	export interface ListStreamConsumersOutput {
		Consumers?: Array<Consumer>;
		NextToken?: string;
	}
	export interface ListStreamConsumersOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamConsumersOutputFormGroup() {
		return new FormGroup<ListStreamConsumersOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>. */
	export interface Consumer {

		/** Required */
		ConsumerName: string;

		/** Required */
		ConsumerARN: string;

		/** Required */
		ConsumerStatus: ConsumerStatus;

		/** Required */
		ConsumerCreationTimestamp: Date;
	}

	/** An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>. */
	export interface ConsumerFormProperties {

		/** Required */
		ConsumerName: FormControl<string | null | undefined>,

		/** Required */
		ConsumerARN: FormControl<string | null | undefined>,

		/** Required */
		ConsumerStatus: FormControl<ConsumerStatus | null | undefined>,

		/** Required */
		ConsumerCreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateConsumerFormGroup() {
		return new FormGroup<ConsumerFormProperties>({
			ConsumerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsumerARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsumerStatus: new FormControl<ConsumerStatus | null | undefined>(undefined, [Validators.required]),
			ConsumerCreationTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStreamConsumersInput {

		/** Required */
		StreamARN: string;
		NextToken?: string;
		MaxResults?: number | null;
		StreamCreationTimestamp?: Date;
	}
	export interface ListStreamConsumersInputFormProperties {

		/** Required */
		StreamARN: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		StreamCreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateListStreamConsumersInputFormGroup() {
		return new FormGroup<ListStreamConsumersInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			StreamCreationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the output for <code>ListStreams</code>. */
	export interface ListStreamsOutput {

		/** Required */
		StreamNames: Array<string>;

		/** Required */
		HasMoreStreams: boolean;
		NextToken?: string;
		StreamSummaries?: Array<StreamSummary>;
	}

	/** Represents the output for <code>ListStreams</code>. */
	export interface ListStreamsOutputFormProperties {

		/** Required */
		HasMoreStreams: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsOutputFormGroup() {
		return new FormGroup<ListStreamsOutputFormProperties>({
			HasMoreStreams: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a stream. */
	export interface StreamSummary {

		/** Required */
		StreamName: string;

		/** Required */
		StreamARN: string;

		/** Required */
		StreamStatus: StreamStatus;

		/** Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data streams. */
		StreamModeDetails?: StreamModeDetails;
		StreamCreationTimestamp?: Date;
	}

	/** The summary of a stream. */
	export interface StreamSummaryFormProperties {

		/** Required */
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		StreamStatus: FormControl<StreamStatus | null | undefined>,
		StreamCreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStreamSummaryFormGroup() {
		return new FormGroup<StreamSummaryFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamStatus: new FormControl<StreamStatus | null | undefined>(undefined, [Validators.required]),
			StreamCreationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the input for <code>ListStreams</code>. */
	export interface ListStreamsInput {
		Limit?: number | null;
		ExclusiveStartStreamName?: string;
		NextToken?: string;
	}

	/** Represents the input for <code>ListStreams</code>. */
	export interface ListStreamsInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		ExclusiveStartStreamName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsInputFormGroup() {
		return new FormGroup<ListStreamsInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			ExclusiveStartStreamName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output for <code>ListTagsForStream</code>. */
	export interface ListTagsForStreamOutput {

		/** Required */
		Tags: Array<Tag>;

		/** Required */
		HasMoreTags: boolean;
	}

	/** Represents the output for <code>ListTagsForStream</code>. */
	export interface ListTagsForStreamOutputFormProperties {

		/** Required */
		HasMoreTags: FormControl<boolean | null | undefined>,
	}
	export function CreateListTagsForStreamOutputFormGroup() {
		return new FormGroup<ListTagsForStreamOutputFormProperties>({
			HasMoreTags: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata assigned to the stream, consisting of a key-value pair. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** Metadata assigned to the stream, consisting of a key-value pair. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for <code>ListTagsForStream</code>. */
	export interface ListTagsForStreamInput {
		StreamName?: string;
		ExclusiveStartTagKey?: string;
		Limit?: number | null;
		StreamARN?: string;
	}

	/** Represents the input for <code>ListTagsForStream</code>. */
	export interface ListTagsForStreamInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		ExclusiveStartTagKey: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForStreamInputFormGroup() {
		return new FormGroup<ListTagsForStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			ExclusiveStartTagKey: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for <code>MergeShards</code>. */
	export interface MergeShardsInput {
		StreamName?: string;

		/** Required */
		ShardToMerge: string;

		/** Required */
		AdjacentShardToMerge: string;
		StreamARN?: string;
	}

	/** Represents the input for <code>MergeShards</code>. */
	export interface MergeShardsInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		ShardToMerge: FormControl<string | null | undefined>,

		/** Required */
		AdjacentShardToMerge: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateMergeShardsInputFormGroup() {
		return new FormGroup<MergeShardsInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			ShardToMerge: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AdjacentShardToMerge: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}


	/** Represents the output for <code>PutRecord</code>. */
	export interface PutRecordOutput {

		/** Required */
		ShardId: string;

		/** Required */
		SequenceNumber: string;
		EncryptionType?: EncryptionType;
	}

	/** Represents the output for <code>PutRecord</code>. */
	export interface PutRecordOutputFormProperties {

		/** Required */
		ShardId: FormControl<string | null | undefined>,

		/** Required */
		SequenceNumber: FormControl<string | null | undefined>,
		EncryptionType: FormControl<EncryptionType | null | undefined>,
	}
	export function CreatePutRecordOutputFormGroup() {
		return new FormGroup<PutRecordOutputFormProperties>({
			ShardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionType: new FormControl<EncryptionType | null | undefined>(undefined),
		});

	}


	/** Represents the input for <code>PutRecord</code>. */
	export interface PutRecordInput {
		StreamName?: string;

		/** Required */
		Data: string;

		/** Required */
		PartitionKey: string;
		ExplicitHashKey?: string;
		SequenceNumberForOrdering?: string;
		StreamARN?: string;
	}

	/** Represents the input for <code>PutRecord</code>. */
	export interface PutRecordInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		Data: FormControl<string | null | undefined>,

		/** Required */
		PartitionKey: FormControl<string | null | undefined>,
		ExplicitHashKey: FormControl<string | null | undefined>,
		SequenceNumberForOrdering: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordInputFormGroup() {
		return new FormGroup<PutRecordInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PartitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExplicitHashKey: new FormControl<string | null | undefined>(undefined),
			SequenceNumberForOrdering: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  <code>PutRecords</code> results. */
	export interface PutRecordsOutput {
		FailedRecordCount?: number | null;

		/** Required */
		Records: Array<PutRecordsResultEntry>;
		EncryptionType?: EncryptionType;
	}

	/**  <code>PutRecords</code> results. */
	export interface PutRecordsOutputFormProperties {
		FailedRecordCount: FormControl<number | null | undefined>,
		EncryptionType: FormControl<EncryptionType | null | undefined>,
	}
	export function CreatePutRecordsOutputFormGroup() {
		return new FormGroup<PutRecordsOutputFormProperties>({
			FailedRecordCount: new FormControl<number | null | undefined>(undefined),
			EncryptionType: new FormControl<EncryptionType | null | undefined>(undefined),
		});

	}


	/** Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result. */
	export interface PutRecordsResultEntry {
		SequenceNumber?: string;
		ShardId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result. */
	export interface PutRecordsResultEntryFormProperties {
		SequenceNumber: FormControl<string | null | undefined>,
		ShardId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordsResultEntryFormGroup() {
		return new FormGroup<PutRecordsResultEntryFormProperties>({
			SequenceNumber: new FormControl<string | null | undefined>(undefined),
			ShardId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A <code>PutRecords</code> request. */
	export interface PutRecordsInput {

		/** Required */
		Records: Array<PutRecordsRequestEntry>;
		StreamName?: string;
		StreamARN?: string;
	}

	/** A <code>PutRecords</code> request. */
	export interface PutRecordsInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordsInputFormGroup() {
		return new FormGroup<PutRecordsInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output for <code>PutRecords</code>. */
	export interface PutRecordsRequestEntry {

		/** Required */
		Data: string;
		ExplicitHashKey?: string;

		/** Required */
		PartitionKey: string;
	}

	/** Represents the output for <code>PutRecords</code>. */
	export interface PutRecordsRequestEntryFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
		ExplicitHashKey: FormControl<string | null | undefined>,

		/** Required */
		PartitionKey: FormControl<string | null | undefined>,
	}
	export function CreatePutRecordsRequestEntryFormGroup() {
		return new FormGroup<PutRecordsRequestEntryFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExplicitHashKey: new FormControl<string | null | undefined>(undefined),
			PartitionKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterStreamConsumerOutput {

		/** Required */
		Consumer: Consumer;
	}
	export interface RegisterStreamConsumerOutputFormProperties {
	}
	export function CreateRegisterStreamConsumerOutputFormGroup() {
		return new FormGroup<RegisterStreamConsumerOutputFormProperties>({
		});

	}

	export interface RegisterStreamConsumerInput {

		/** Required */
		StreamARN: string;

		/** Required */
		ConsumerName: string;
	}
	export interface RegisterStreamConsumerInputFormProperties {

		/** Required */
		StreamARN: FormControl<string | null | undefined>,

		/** Required */
		ConsumerName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterStreamConsumerInputFormGroup() {
		return new FormGroup<RegisterStreamConsumerInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsumerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input for <code>RemoveTagsFromStream</code>. */
	export interface RemoveTagsFromStreamInput {
		StreamName?: string;

		/** Required */
		TagKeys: Array<string>;
		StreamARN?: string;
	}

	/** Represents the input for <code>RemoveTagsFromStream</code>. */
	export interface RemoveTagsFromStreamInputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromStreamInputFormGroup() {
		return new FormGroup<RemoveTagsFromStreamInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input for <code>SplitShard</code>. */
	export interface SplitShardInput {
		StreamName?: string;

		/** Required */
		ShardToSplit: string;

		/** Required */
		NewStartingHashKey: string;
		StreamARN?: string;
	}

	/** Represents the input for <code>SplitShard</code>. */
	export interface SplitShardInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		ShardToSplit: FormControl<string | null | undefined>,

		/** Required */
		NewStartingHashKey: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateSplitShardInputFormGroup() {
		return new FormGroup<SplitShardInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			ShardToSplit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewStartingHashKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartStreamEncryptionInput {
		StreamName?: string;

		/** Required */
		EncryptionType: EncryptionType;

		/** Required */
		KeyId: string;
		StreamARN?: string;
	}
	export interface StartStreamEncryptionInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		EncryptionType: FormControl<EncryptionType | null | undefined>,

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateStartStreamEncryptionInputFormGroup() {
		return new FormGroup<StartStreamEncryptionInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			EncryptionType: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopStreamEncryptionInput {
		StreamName?: string;

		/** Required */
		EncryptionType: EncryptionType;

		/** Required */
		KeyId: string;
		StreamARN?: string;
	}
	export interface StopStreamEncryptionInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		EncryptionType: FormControl<EncryptionType | null | undefined>,

		/** Required */
		KeyId: FormControl<string | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateStopStreamEncryptionInputFormGroup() {
		return new FormGroup<StopStreamEncryptionInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			EncryptionType: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateShardCountOutput {
		StreamName?: string;
		CurrentShardCount?: number | null;
		TargetShardCount?: number | null;
		StreamARN?: string;
	}
	export interface UpdateShardCountOutputFormProperties {
		StreamName: FormControl<string | null | undefined>,
		CurrentShardCount: FormControl<number | null | undefined>,
		TargetShardCount: FormControl<number | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateShardCountOutputFormGroup() {
		return new FormGroup<UpdateShardCountOutputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			CurrentShardCount: new FormControl<number | null | undefined>(undefined),
			TargetShardCount: new FormControl<number | null | undefined>(undefined),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateShardCountInput {
		StreamName?: string;

		/** Required */
		TargetShardCount: number;

		/** Required */
		ScalingType: ScalingType;
		StreamARN?: string;
	}
	export interface UpdateShardCountInputFormProperties {
		StreamName: FormControl<string | null | undefined>,

		/** Required */
		TargetShardCount: FormControl<number | null | undefined>,

		/** Required */
		ScalingType: FormControl<ScalingType | null | undefined>,
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateShardCountInputFormGroup() {
		return new FormGroup<UpdateShardCountInputFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
			TargetShardCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ScalingType: new FormControl<ScalingType | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScalingType { UNIFORM_SCALING = 'UNIFORM_SCALING' }

	export interface UpdateStreamModeInput {

		/** Required */
		StreamARN: string;

		/** Required */
		StreamModeDetails: StreamModeDetails;
	}
	export interface UpdateStreamModeInputFormProperties {

		/** Required */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamModeInputFormGroup() {
		return new FormGroup<UpdateStreamModeInputFormProperties>({
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds or updates tags for the specified Kinesis data stream. You can assign up to 50 tags to a data stream.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If tags have already been assigned to the stream, <code>AddTagsToStream</code> overwrites any existing tags that correspond to the specified tag keys.</p> <p> <a>AddTagsToStream</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.AddTagsToStream
		 * @return {void} Success
		 */
		AddTagsToStream(requestBody: AddTagsToStreamInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.AddTagsToStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a Kinesis data stream. A stream captures and transports data records that are continuously emitted from different data sources or <i>producers</i>. Scale-out within a stream is explicitly supported by means of shards, which are uniquely identified groups of data records in a stream.</p> <p>You can create your data stream using either on-demand or provisioned capacity mode. Data streams with an on-demand mode require no capacity planning and automatically scale to handle gigabytes of write and read throughput per minute. With the on-demand mode, Kinesis Data Streams automatically manages the shards in order to provide the necessary throughput. For the data streams with a provisioned mode, you must specify the number of shards for the data stream. Each shard can support reads up to five transactions per second, up to a maximum data read total of 2 MiB per second. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second. If the amount of data input increases or decreases, you can add or remove shards.</p> <p>The stream name identifies the stream. The name is scoped to the Amazon Web Services account used by the application. It is also scoped by Amazon Web Services Region. That is, two streams in two different accounts can have the same name, and two streams in the same account, but in two different Regions, can have the same name.</p> <p> <code>CreateStream</code> is an asynchronous operation. Upon receiving a <code>CreateStream</code> request, Kinesis Data Streams immediately returns and sets the stream status to <code>CREATING</code>. After the stream is created, Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. You should perform read and write operations only on an <code>ACTIVE</code> stream. </p> <p>You receive a <code>LimitExceededException</code> when making a <code>CreateStream</code> request when you try to do one of the following:</p> <ul> <li> <p>Have more than five streams in the <code>CREATING</code> state at any point in time.</p> </li> <li> <p>Create more shards than are authorized for your account.</p> </li> </ul> <p>For the default shard limit for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To increase this limit, <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact Amazon Web Services Support</a>.</p> <p>You can use <a>DescribeStreamSummary</a> to check the stream status, which is returned in <code>StreamStatus</code>.</p> <p> <a>CreateStream</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.CreateStream
		 * @return {void} Success
		 */
		CreateStream(requestBody: CreateStreamInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.CreateStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Decreases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The minimum value of a stream's retention period is 24 hours.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>This operation may result in lost data. For example, if the stream's retention period is 48 hours and is decreased to 24 hours, any data already in the stream that is older than 24 hours is inaccessible.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod
		 * @return {void} Success
		 */
		DecreaseStreamRetentionPeriod(requestBody: DecreaseStreamRetentionPeriodInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a Kinesis data stream and all its shards and data. You must shut down any applications that are operating on the stream before you delete the stream. If an application attempts to operate on a deleted stream, it receives the exception <code>ResourceNotFoundException</code>.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If the stream is in the <code>ACTIVE</code> state, you can delete it. After a <code>DeleteStream</code> request, the specified stream is in the <code>DELETING</code> state until Kinesis Data Streams completes the deletion.</p> <p> <b>Note:</b> Kinesis Data Streams might continue to accept data read and write operations, such as <a>PutRecord</a>, <a>PutRecords</a>, and <a>GetRecords</a>, on a stream in the <code>DELETING</code> state until the stream deletion is complete.</p> <p>When you delete a stream, any shards in that stream are also deleted, and any tags are dissociated from the stream.</p> <p>You can use the <a>DescribeStreamSummary</a> operation to check the state of the stream, which is returned in <code>StreamStatus</code>.</p> <p> <a>DeleteStream</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DeleteStream
		 * @return {void} Success
		 */
		DeleteStream(requestBody: DeleteStreamInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DeleteStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>To deregister a consumer, provide its ARN. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to deregister, you can use the <a>ListStreamConsumers</a> operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its name and ARN.</p> <p>This operation has a limit of five transactions per second per stream.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer
		 * @return {void} Success
		 */
		DeregisterStreamConsumer(requestBody: DeregisterStreamConsumerInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the shard limits and usage for the account.</p> <p>If you update your account limits, the old limits might be returned for a few minutes.</p> <p>This operation has a limit of one transaction per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DescribeLimits
		 * @return {DescribeLimitsOutput} Success
		 */
		DescribeLimits(requestBody: DescribeLimitsInput): Observable<DescribeLimitsOutput> {
			return this.http.post<DescribeLimitsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DescribeLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified Kinesis data stream.</p> <note> <p>This API has been revised. It's highly recommended that you use the <a>DescribeStreamSummary</a> API to get a summarized description of the specified Kinesis data stream and the <a>ListShards</a> API to list the shards in a specified data stream and obtain information about each shard. </p> </note> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>The information returned includes the stream name, Amazon Resource Name (ARN), creation time, enhanced metric configuration, and shard map. The shard map is an array of shard objects. For each shard object, there is the hash key and sequence number ranges that the shard spans, and the IDs of any earlier shards that played in a role in creating the shard. Every record ingested in the stream is identified by a sequence number, which is assigned when the record is put into the stream.</p> <p>You can limit the number of shards returned by each call. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-retrieve-shards.html">Retrieving Shards from a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>There are no guarantees about the chronological order shards returned. To process shards in chronological order, use the ID of the parent shard to track the lineage to the oldest shard.</p> <p>This operation has a limit of 10 transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DescribeStream
		 * @param {string} Limit Pagination limit
		 * @param {string} ExclusiveStartShardId Pagination token
		 * @return {DescribeStreamOutput} Success
		 */
		DescribeStream(Limit: string | null | undefined, ExclusiveStartShardId: string | null | undefined, requestBody: DescribeStreamInput): Observable<DescribeStreamOutput> {
			return this.http.post<DescribeStreamOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DescribeStream?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&ExclusiveStartShardId=' + (ExclusiveStartShardId == null ? '' : encodeURIComponent(ExclusiveStartShardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>To get the description of a registered consumer, provide the ARN of the consumer. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to describe, you can use the <a>ListStreamConsumers</a> operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream.</p> <p>This operation has a limit of 20 transactions per second per stream.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer
		 * @return {DescribeStreamConsumerOutput} Success
		 */
		DescribeStreamConsumer(requestBody: DescribeStreamConsumerInput): Observable<DescribeStreamConsumerOutput> {
			return this.http.post<DescribeStreamConsumerOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a summarized description of the specified Kinesis data stream without the shard list.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>The information returned includes the stream name, Amazon Resource Name (ARN), status, record retention period, approximate creation time, monitoring, encryption details, and open shard count. </p> <p> <a>DescribeStreamSummary</a> has a limit of 20 transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.DescribeStreamSummary
		 * @return {DescribeStreamSummaryOutput} Success
		 */
		DescribeStreamSummary(requestBody: DescribeStreamSummaryInput): Observable<DescribeStreamSummaryOutput> {
			return this.http.post<DescribeStreamSummaryOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables enhanced monitoring.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>
		 * Post #X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring
		 * @return {EnhancedMonitoringOutput} Success
		 */
		DisableEnhancedMonitoring(requestBody: DisableEnhancedMonitoringInput): Observable<EnhancedMonitoringOutput> {
			return this.http.post<EnhancedMonitoringOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables enhanced Kinesis data stream monitoring for shard-level metrics.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>
		 * Post #X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring
		 * @return {EnhancedMonitoringOutput} Success
		 */
		EnableEnhancedMonitoring(requestBody: EnableEnhancedMonitoringInput): Observable<EnhancedMonitoringOutput> {
			return this.http.post<EnhancedMonitoringOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets data records from a Kinesis data stream's shard.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter in addition to the <code>ShardIterator</code> parameter.</p> </note> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading data records sequentially. If there are no records available in the portion of the shard that the iterator points to, <a>GetRecords</a> returns an empty list. It might take multiple calls to get to a portion of the shard that contains records.</p> <p>You can scale by provisioning multiple shards per stream while considering service limits (for more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>). Your application should have one thread per shard, each reading continuously from its stream. To read from a stream continually, call <a>GetRecords</a> in a loop. Use <a>GetShardIterator</a> to get the shard iterator to specify in the first <a>GetRecords</a> call. <a>GetRecords</a> returns a new shard iterator in <code>NextShardIterator</code>. Specify the shard iterator returned in <code>NextShardIterator</code> in subsequent calls to <a>GetRecords</a>. If the shard has been closed, the shard iterator can't return more data and <a>GetRecords</a> returns <code>null</code> in <code>NextShardIterator</code>. You can terminate the loop when the shard is closed, or when the shard iterator reaches the record with the sequence number or other attribute that marks it as the last record to process.</p> <p>Each data record can be up to 1 MiB in size, and each shard can read up to 2 MiB per second. You can ensure that your calls don't exceed the maximum supported size or throughput by using the <code>Limit</code> parameter to specify the maximum number of records that <a>GetRecords</a> can return. Consider your average record size when determining this limit. The maximum number of records that can be returned per call is 10,000.</p> <p>The size of the data returned by <a>GetRecords</a> varies depending on the utilization of the shard. It is recommended that consumer applications retrieve records via the <code>GetRecords</code> command using the 5 TPS limit to remain caught up. Retrieving records less frequently can lead to consumer applications falling behind. The maximum size of data that <a>GetRecords</a> can return is 10 MiB. If a call returns this amount of data, subsequent calls made within the next 5 seconds throw <code>ProvisionedThroughputExceededException</code>. If there is insufficient provisioned throughput on the stream, subsequent calls made within the next 1 second throw <code>ProvisionedThroughputExceededException</code>. <a>GetRecords</a> doesn't return any data when it throws an exception. For this reason, we recommend that you wait 1 second between calls to <a>GetRecords</a>. However, it's possible that the application will get exceptions for longer than 1 second.</p> <p>To detect whether the application is falling behind in processing, you can use the <code>MillisBehindLatest</code> response attribute. You can also monitor the stream using CloudWatch metrics and other mechanisms (see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring.html">Monitoring</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>).</p> <p>Each Amazon Kinesis record includes a value, <code>ApproximateArrivalTimestamp</code>, that is set when a stream successfully receives and stores a record. This is commonly referred to as a server-side time stamp, whereas a client-side time stamp is set when a data producer creates or sends the record to a stream (a data producer is any data source putting data records into a stream, for example with <a>PutRecords</a>). The time stamp has millisecond precision. There are no guarantees about the time stamp accuracy, or that the time stamp is always increasing. For example, records in a shard or across a stream might have time stamps that are out of order.</p> <p>This operation has a limit of five transactions per second per shard.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.GetRecords
		 * @return {GetRecordsOutput} Success
		 */
		GetRecords(requestBody: GetRecordsInput): Observable<GetRecordsOutput> {
			return this.http.post<GetRecordsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.GetRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets an Amazon Kinesis shard iterator. A shard iterator expires 5 minutes after it is returned to the requester.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>A shard iterator specifies the shard position from which to start reading data records sequentially. The position is specified using the sequence number of a data record in a shard. A sequence number is the identifier associated with every record ingested in the stream, and is assigned when a record is put into the stream. Each stream has one or more shards.</p> <p>You must specify the shard iterator type. For example, you can set the <code>ShardIteratorType</code> parameter to read exactly from the position denoted by a specific sequence number by using the <code>AT_SEQUENCE_NUMBER</code> shard iterator type. Alternatively, the parameter can read right after the sequence number by using the <code>AFTER_SEQUENCE_NUMBER</code> shard iterator type, using sequence numbers returned by earlier calls to <a>PutRecord</a>, <a>PutRecords</a>, <a>GetRecords</a>, or <a>DescribeStream</a>. In the request, you can specify the shard iterator type <code>AT_TIMESTAMP</code> to read records from an arbitrary point in time, <code>TRIM_HORIZON</code> to cause <code>ShardIterator</code> to point to the last untrimmed record in the shard in the system (the oldest data record in the shard), or <code>LATEST</code> so that you always read the most recent data in the shard. </p> <p>When you read repeatedly from a stream, use a <a>GetShardIterator</a> request to get the first shard iterator for use in your first <a>GetRecords</a> request and for subsequent reads use the shard iterator returned by the <a>GetRecords</a> request in <code>NextShardIterator</code>. A new shard iterator is returned by every <a>GetRecords</a> request in <code>NextShardIterator</code>, which you use in the <code>ShardIterator</code> parameter of the next <a>GetRecords</a> request. </p> <p>If a <a>GetShardIterator</a> request is made too often, you receive a <code>ProvisionedThroughputExceededException</code>. For more information about throughput limits, see <a>GetRecords</a>, and <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If the shard is closed, <a>GetShardIterator</a> returns a valid iterator for the last sequence number of the shard. A shard can be closed as a result of using <a>SplitShard</a> or <a>MergeShards</a>.</p> <p> <a>GetShardIterator</a> has a limit of five transactions per second per account per open shard.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.GetShardIterator
		 * @return {GetShardIteratorOutput} Success
		 */
		GetShardIterator(requestBody: GetShardIteratorInput): Observable<GetShardIteratorOutput> {
			return this.http.post<GetShardIteratorOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.GetShardIterator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Increases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours (365 days).</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If you choose a longer stream retention period, this operation increases the time period during which records that have not yet expired are accessible. However, it does not make previous, expired data (older than the stream's previous retention period) accessible after the operation has been called. For example, if a stream's retention period is set to 24 hours and is increased to 168 hours, any data that is older than 24 hours remains inaccessible to consumer applications.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod
		 * @return {void} Success
		 */
		IncreaseStreamRetentionPeriod(requestBody: IncreaseStreamRetentionPeriodInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the shards in a stream and provides information about each shard. This operation has a limit of 1000 transactions per second per data stream.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>This action does not list expired shards. For information about expired shards, see <a href="https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-after-resharding.html#kinesis-using-sdk-java-resharding-data-routing">Data Routing, Data Persistence, and Shard State after a Reshard</a>. </p> <important> <p>This API is a new operation that is used by the Amazon Kinesis Client Library (KCL). If you have a fine-grained IAM policy that only allows specific operations, you must update your policy to allow calls to this API. For more information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html">Controlling Access to Amazon Kinesis Data Streams Resources Using IAM</a>.</p> </important>
		 * Post #X-Amz-Target=Kinesis_20131202.ListShards
		 * @return {ListShardsOutput} Success
		 */
		ListShards(requestBody: ListShardsInput): Observable<ListShardsOutput> {
			return this.http.post<ListShardsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.ListShards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the consumers registered to receive data from a stream using enhanced fan-out, and provides information about each consumer.</p> <p>This operation has a limit of 5 transactions per second per stream.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.ListStreamConsumers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStreamConsumersOutput} Success
		 */
		ListStreamConsumers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListStreamConsumersInput): Observable<ListStreamConsumersOutput> {
			return this.http.post<ListStreamConsumersOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.ListStreamConsumers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your Kinesis data streams.</p> <p>The number of streams may be too large to return from a single call to <code>ListStreams</code>. You can limit the number of returned streams using the <code>Limit</code> parameter. If you do not specify a value for the <code>Limit</code> parameter, Kinesis Data Streams uses the default limit, which is currently 100.</p> <p>You can detect if there are more streams available to list by using the <code>HasMoreStreams</code> flag from the returned output. If there are more streams available, you can request more streams by using the name of the last stream returned by the <code>ListStreams</code> request in the <code>ExclusiveStartStreamName</code> parameter in a subsequent request to <code>ListStreams</code>. The group of stream names returned by the subsequent request is then added to the list. You can continue this process until all the stream names have been collected in the list. </p> <p> <a>ListStreams</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.ListStreams
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStreamsOutput} Success
		 */
		ListStreams(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListStreamsInput): Observable<ListStreamsOutput> {
			return this.http.post<ListStreamsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.ListStreams?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the tags for the specified Kinesis data stream. This operation has a limit of five transactions per second per account.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>
		 * Post #X-Amz-Target=Kinesis_20131202.ListTagsForStream
		 * @return {ListTagsForStreamOutput} Success
		 */
		ListTagsForStream(requestBody: ListTagsForStreamInput): Observable<ListTagsForStreamOutput> {
			return this.http.post<ListTagsForStreamOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.ListTagsForStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Merges two adjacent shards in a Kinesis data stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. This API is only supported for the data streams with the provisioned capacity mode. Two shards are considered adjacent if the union of the hash key ranges for the two shards form a contiguous set with no gaps. For example, if you have two shards, one with a hash key range of 276...381 and the other with a hash key range of 382...454, then you could merge these two shards into a single shard that would have a hash key range of 276...454. After the merge, the single child shard receives data for all hash key values covered by the two parent shards.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p> <code>MergeShards</code> is called when there is a need to reduce the overall capacity of a stream because of excess capacity that is not being used. You must specify the shard to be merged and the adjacent shard for a stream. For more information about merging shards, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-merge.html">Merge Two Shards</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>If the stream is in the <code>ACTIVE</code> state, you can call <code>MergeShards</code>. If a stream is in the <code>CREATING</code>, <code>UPDATING</code>, or <code>DELETING</code> state, <code>MergeShards</code> returns a <code>ResourceInUseException</code>. If the specified stream does not exist, <code>MergeShards</code> returns a <code>ResourceNotFoundException</code>. </p> <p>You can use <a>DescribeStreamSummary</a> to check the state of the stream, which is returned in <code>StreamStatus</code>.</p> <p> <code>MergeShards</code> is an asynchronous operation. Upon receiving a <code>MergeShards</code> request, Amazon Kinesis Data Streams immediately returns a response and sets the <code>StreamStatus</code> to <code>UPDATING</code>. After the operation is completed, Kinesis Data Streams sets the <code>StreamStatus</code> to <code>ACTIVE</code>. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state. </p> <p>You use <a>DescribeStreamSummary</a> and the <a>ListShards</a> APIs to determine the shard IDs that are specified in the <code>MergeShards</code> request. </p> <p>If you try to operate on too many streams in parallel using <a>CreateStream</a>, <a>DeleteStream</a>, <code>MergeShards</code>, or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p> <p> <code>MergeShards</code> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.MergeShards
		 * @return {void} Success
		 */
		MergeShards(requestBody: MergeShardsInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.MergeShards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Writes a single data record into an Amazon Kinesis data stream. Call <code>PutRecord</code> to send data into the stream for real-time ingestion and subsequent processing, one record at a time. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>You must specify the name of the stream that captures, stores, and transports the data; a partition key; and the data blob itself.</p> <p>The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.</p> <p>The partition key is used by Kinesis Data Streams to distribute data across shards. Kinesis Data Streams segregates the data records that belong to a stream into multiple shards, using the partition key associated with each data record to determine the shard to which a given data record belongs.</p> <p>Partition keys are Unicode strings, with a maximum length limit of 256 characters for each key. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards using the hash key ranges of the shards. You can override hashing the partition key to determine the shard by explicitly specifying a hash value using the <code>ExplicitHashKey</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p> <code>PutRecord</code> returns the shard ID of where the data record was placed and the sequence number that was assigned to the data record.</p> <p>Sequence numbers increase over time and are specific to a shard within a stream, not across all shards within a stream. To guarantee strictly increasing ordering, write serially to a shard and use the <code>SequenceNumberForOrdering</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <important> <p>After you write a record to a stream, you cannot modify that record or its order within the stream.</p> </important> <p>If a <code>PutRecord</code> request cannot be processed because of insufficient provisioned throughput on the shard involved in the request, <code>PutRecord</code> throws <code>ProvisionedThroughputExceededException</code>. </p> <p>By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.PutRecord
		 * @return {PutRecordOutput} Success
		 */
		PutRecord(requestBody: PutRecordInput): Observable<PutRecordOutput> {
			return this.http.post<PutRecordOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.PutRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Writes multiple data records into a Kinesis data stream in a single call (also referred to as a <code>PutRecords</code> request). Use this operation to send data into the stream for data ingestion and processing. </p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Each <code>PutRecords</code> request can support up to 500 records. Each record in the request can be as large as 1 MiB, up to a limit of 5 MiB for the entire request, including partition keys. Each shard can support writes up to 1,000 records per second, up to a maximum data write total of 1 MiB per second.</p> <p>You must specify the name of the stream that captures, stores, and transports the data; and an array of request <code>Records</code>, with each record in the array requiring a partition key and data blob. The record size limit applies to the total size of the partition key and data blob.</p> <p>The data blob can be any type of data; for example, a segment from a log file, geographic/location data, website clickstream data, and so on.</p> <p>The partition key is used by Kinesis Data Streams as input to a hash function that maps the partition key and associated data to a specific shard. An MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>Each record in the <code>Records</code> array may include an optional parameter, <code>ExplicitHashKey</code>, which overrides the partition key to shard mapping. This parameter allows a data producer to determine explicitly the shard where the record is stored. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>The <code>PutRecords</code> response includes an array of response <code>Records</code>. Each record in the response array directly correlates with a record in the request array using natural ordering, from the top to the bottom of the request and response. The response <code>Records</code> array always includes the same number of records as the request array.</p> <p>The response <code>Records</code> array includes both successfully and unsuccessfully processed records. Kinesis Data Streams attempts to process all records in each <code>PutRecords</code> request. A single record failure does not stop the processing of subsequent records. As a result, PutRecords doesn't guarantee the ordering of records. If you need to read records in the same order they are written to the stream, use <a>PutRecord</a> instead of <code>PutRecords</code>, and write to the same shard.</p> <p>A successfully processed record includes <code>ShardId</code> and <code>SequenceNumber</code> values. The <code>ShardId</code> parameter identifies the shard in the stream where the record is stored. The <code>SequenceNumber</code> parameter is an identifier assigned to the put record, unique to all records in the stream.</p> <p>An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error and can be one of the following values: <code>ProvisionedThroughputExceededException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the <code>ProvisionedThroughputExceededException</code> exception including the account ID, stream name, and shard ID of the record that was throttled. For more information about partially successful responses, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-add-data-to-stream.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <important> <p>After you write a record to a stream, you cannot modify that record or its order within the stream.</p> </important> <p>By default, data records are accessible for 24 hours from the time that they are added to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.PutRecords
		 * @return {PutRecordsOutput} Success
		 */
		PutRecords(requestBody: PutRecordsInput): Observable<PutRecordsOutput> {
			return this.http.post<PutRecordsOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.PutRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a consumer with a Kinesis data stream. When you use this operation, the consumer you register can then call <a>SubscribeToShard</a> to receive data from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every shard you subscribe to. This rate is unaffected by the total number of consumers that read from the same stream.</p> <p>You can register up to 20 consumers per stream. A given consumer can only be registered with one stream at a time.</p> <p>For an example of how to use this operations, see <a href="/streams/latest/dev/building-enhanced-consumers-api.html">Enhanced Fan-Out Using the Kinesis Data Streams API</a>.</p> <p>The use of this operation has a limit of five transactions per second per account. Also, only 5 consumers can be created simultaneously. In other words, you cannot have more than 5 consumers in a <code>CREATING</code> status at the same time. Registering a 6th consumer while there are 5 in a <code>CREATING</code> status results in a <code>LimitExceededException</code>.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer
		 * @return {RegisterStreamConsumerOutput} Success
		 */
		RegisterStreamConsumer(requestBody: RegisterStreamConsumerInput): Observable<RegisterStreamConsumerOutput> {
			return this.http.post<RegisterStreamConsumerOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes tags from the specified Kinesis data stream. Removed tags are deleted and cannot be recovered after this operation successfully completes.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>If you specify a tag that does not exist, it is ignored.</p> <p> <a>RemoveTagsFromStream</a> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream
		 * @return {void} Success
		 */
		RemoveTagsFromStream(requestBody: RemoveTagsFromStreamInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Splits a shard into two new shards in the Kinesis data stream, to increase the stream's capacity to ingest and transport data. <code>SplitShard</code> is called when there is a need to increase the overall capacity of a stream because of an expected increase in the volume of data records being ingested. This API is only supported for the data streams with the provisioned capacity mode.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>You can also use <code>SplitShard</code> when a shard appears to be approaching its maximum utilization; for example, the producers sending data into the specific shard are suddenly sending more than previously anticipated. You can also call <code>SplitShard</code> to increase stream capacity, so that more Kinesis Data Streams applications can simultaneously read data from the stream for real-time processing. </p> <p>You must specify the shard to be split and the new hash key, which is the position in the shard where the shard gets split in two. In many cases, the new hash key might be the average of the beginning and ending hash key, but it can be any hash key value in the range being mapped into the shard. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-split.html">Split a Shard</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>.</p> <p>You can use <a>DescribeStreamSummary</a> and the <a>ListShards</a> APIs to determine the shard ID and hash key values for the <code>ShardToSplit</code> and <code>NewStartingHashKey</code> parameters that are specified in the <code>SplitShard</code> request.</p> <p> <code>SplitShard</code> is an asynchronous operation. Upon receiving a <code>SplitShard</code> request, Kinesis Data Streams immediately returns a response and sets the stream status to <code>UPDATING</code>. After the operation is completed, Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state. </p> <p>You can use <a>DescribeStreamSummary</a> to check the status of the stream, which is returned in <code>StreamStatus</code>. If the stream is in the <code>ACTIVE</code> state, you can call <code>SplitShard</code>. </p> <p>If the specified stream does not exist, <a>DescribeStreamSummary</a> returns a <code>ResourceNotFoundException</code>. If you try to create more shards than are authorized for your account, you receive a <code>LimitExceededException</code>. </p> <p>For the default shard limit for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Kinesis Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To increase this limit, <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact Amazon Web Services Support</a>.</p> <p>If you try to operate on too many streams simultaneously using <a>CreateStream</a>, <a>DeleteStream</a>, <a>MergeShards</a>, and/or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p> <p> <code>SplitShard</code> has a limit of five transactions per second per account.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.SplitShard
		 * @return {void} Success
		 */
		SplitShard(requestBody: SplitShardInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.SplitShard', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables or updates server-side encryption using an Amazon Web Services KMS key for a specified stream. </p> <p>Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is <code>UPDATING</code>. Once the status of the stream is <code>ACTIVE</code>, encryption begins for records written to the stream. </p> <p>API Limits: You can successfully apply a new Amazon Web Services KMS key for server-side encryption 25 times in a rolling 24-hour period.</p> <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from <code>PutRecord</code> or <code>PutRecords</code>.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note>
		 * Post #X-Amz-Target=Kinesis_20131202.StartStreamEncryption
		 * @return {void} Success
		 */
		StartStreamEncryption(requestBody: StartStreamEncryptionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.StartStreamEncryption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disables server-side encryption for a specified stream. </p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Stopping encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Stopping encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is <code>UPDATING</code>. Once the status of the stream is <code>ACTIVE</code>, records written to the stream are no longer encrypted by Kinesis Data Streams. </p> <p>API Limits: You can successfully disable server-side encryption 25 times in a rolling 24-hour period. </p> <p>Note: It can take up to 5 seconds after the stream is in an <code>ACTIVE</code> status before all records written to the stream are no longer subject to encryption. After you disabled encryption, you can verify that encryption is not applied by inspecting the API response from <code>PutRecord</code> or <code>PutRecords</code>.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.StopStreamEncryption
		 * @return {void} Success
		 */
		StopStreamEncryption(requestBody: StopStreamEncryptionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.StopStreamEncryption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the shard count of the specified stream to the specified number of shards. This API is only supported for the data streams with the provisioned capacity mode.</p> <note> <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input parameter rather than the <code>StreamName</code> input parameter.</p> </note> <p>Updating the shard count is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is <code>UPDATING</code>.</p> <p>To update the shard count, Kinesis Data Streams performs splits or merges on individual shards. This can cause short-lived shards to be created, in addition to the final shards. These short-lived shards count towards your total shard limit for your account in the Region.</p> <p>When using this operation, we recommend that you specify a target shard count that is a multiple of 25% (25%, 50%, 75%, 100%). You can specify any target value within your shard limit. However, if you specify a target that isn't a multiple of 25%, the scaling action might take longer to complete. </p> <p>This operation has the following default limits. By default, you cannot do the following:</p> <ul> <li> <p>Scale more than ten times per rolling 24-hour period per stream</p> </li> <li> <p>Scale up to more than double your current shard count for a stream</p> </li> <li> <p>Scale down below half your current shard count for a stream</p> </li> <li> <p>Scale up to more than 10000 shards in a stream</p> </li> <li> <p>Scale a stream with more than 10000 shards down unless the result is less than 10000 shards</p> </li> <li> <p>Scale up to more than the shard limit for your account</p> </li> </ul> <p>For the default limits for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer Guide</i>. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the <a href="https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase&amp;limitType=service-code-kinesis">limits form</a>.</p>
		 * Post #X-Amz-Target=Kinesis_20131202.UpdateShardCount
		 * @return {UpdateShardCountOutput} Success
		 */
		UpdateShardCount(requestBody: UpdateShardCountInput): Observable<UpdateShardCountOutput> {
			return this.http.post<UpdateShardCountOutput>(this.baseUri + '#X-Amz-Target=Kinesis_20131202.UpdateShardCount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you can choose between an <b>on-demand</b> capacity mode and a <b>provisioned</b> capacity mode for your data stream.
		 * Post #X-Amz-Target=Kinesis_20131202.UpdateStreamMode
		 * @return {void} Success
		 */
		UpdateStreamMode(requestBody: UpdateStreamModeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Kinesis_20131202.UpdateStreamMode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AddTagsToStreamX_Amz_Target { 'Kinesis_20131202.AddTagsToStream' = 'Kinesis_20131202.AddTagsToStream' }

	export enum CreateStreamX_Amz_Target { 'Kinesis_20131202.CreateStream' = 'Kinesis_20131202.CreateStream' }

	export enum DecreaseStreamRetentionPeriodX_Amz_Target { 'Kinesis_20131202.DecreaseStreamRetentionPeriod' = 'Kinesis_20131202.DecreaseStreamRetentionPeriod' }

	export enum DeleteStreamX_Amz_Target { 'Kinesis_20131202.DeleteStream' = 'Kinesis_20131202.DeleteStream' }

	export enum DeregisterStreamConsumerX_Amz_Target { 'Kinesis_20131202.DeregisterStreamConsumer' = 'Kinesis_20131202.DeregisterStreamConsumer' }

	export enum DescribeLimitsX_Amz_Target { 'Kinesis_20131202.DescribeLimits' = 'Kinesis_20131202.DescribeLimits' }

	export enum DescribeStreamX_Amz_Target { 'Kinesis_20131202.DescribeStream' = 'Kinesis_20131202.DescribeStream' }

	export enum DescribeStreamConsumerX_Amz_Target { 'Kinesis_20131202.DescribeStreamConsumer' = 'Kinesis_20131202.DescribeStreamConsumer' }

	export enum DescribeStreamSummaryX_Amz_Target { 'Kinesis_20131202.DescribeStreamSummary' = 'Kinesis_20131202.DescribeStreamSummary' }

	export enum DisableEnhancedMonitoringX_Amz_Target { 'Kinesis_20131202.DisableEnhancedMonitoring' = 'Kinesis_20131202.DisableEnhancedMonitoring' }

	export enum EnableEnhancedMonitoringX_Amz_Target { 'Kinesis_20131202.EnableEnhancedMonitoring' = 'Kinesis_20131202.EnableEnhancedMonitoring' }

	export enum GetRecordsX_Amz_Target { 'Kinesis_20131202.GetRecords' = 'Kinesis_20131202.GetRecords' }

	export enum GetShardIteratorX_Amz_Target { 'Kinesis_20131202.GetShardIterator' = 'Kinesis_20131202.GetShardIterator' }

	export enum IncreaseStreamRetentionPeriodX_Amz_Target { 'Kinesis_20131202.IncreaseStreamRetentionPeriod' = 'Kinesis_20131202.IncreaseStreamRetentionPeriod' }

	export enum ListShardsX_Amz_Target { 'Kinesis_20131202.ListShards' = 'Kinesis_20131202.ListShards' }

	export enum ListStreamConsumersX_Amz_Target { 'Kinesis_20131202.ListStreamConsumers' = 'Kinesis_20131202.ListStreamConsumers' }

	export enum ListStreamsX_Amz_Target { 'Kinesis_20131202.ListStreams' = 'Kinesis_20131202.ListStreams' }

	export enum ListTagsForStreamX_Amz_Target { 'Kinesis_20131202.ListTagsForStream' = 'Kinesis_20131202.ListTagsForStream' }

	export enum MergeShardsX_Amz_Target { 'Kinesis_20131202.MergeShards' = 'Kinesis_20131202.MergeShards' }

	export enum PutRecordX_Amz_Target { 'Kinesis_20131202.PutRecord' = 'Kinesis_20131202.PutRecord' }

	export enum PutRecordsX_Amz_Target { 'Kinesis_20131202.PutRecords' = 'Kinesis_20131202.PutRecords' }

	export enum RegisterStreamConsumerX_Amz_Target { 'Kinesis_20131202.RegisterStreamConsumer' = 'Kinesis_20131202.RegisterStreamConsumer' }

	export enum RemoveTagsFromStreamX_Amz_Target { 'Kinesis_20131202.RemoveTagsFromStream' = 'Kinesis_20131202.RemoveTagsFromStream' }

	export enum SplitShardX_Amz_Target { 'Kinesis_20131202.SplitShard' = 'Kinesis_20131202.SplitShard' }

	export enum StartStreamEncryptionX_Amz_Target { 'Kinesis_20131202.StartStreamEncryption' = 'Kinesis_20131202.StartStreamEncryption' }

	export enum StopStreamEncryptionX_Amz_Target { 'Kinesis_20131202.StopStreamEncryption' = 'Kinesis_20131202.StopStreamEncryption' }

	export enum UpdateShardCountX_Amz_Target { 'Kinesis_20131202.UpdateShardCount' = 'Kinesis_20131202.UpdateShardCount' }

	export enum UpdateStreamModeX_Amz_Target { 'Kinesis_20131202.UpdateStreamMode' = 'Kinesis_20131202.UpdateStreamMode' }

}

