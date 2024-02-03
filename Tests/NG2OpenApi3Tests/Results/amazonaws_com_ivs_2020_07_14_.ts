import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetChannelResponse {
		channels?: Array<Channel>;
		errors?: Array<BatchError>;
	}
	export interface BatchGetChannelResponseFormProperties {
	}
	export function CreateBatchGetChannelResponseFormGroup() {
		return new FormGroup<BatchGetChannelResponseFormProperties>({
		});

	}


	/** Object specifying a channel. */
	export interface Channel {
		arn?: string;
		authorized?: boolean | null;
		ingestEndpoint?: string;
		insecureIngest?: boolean | null;
		latencyMode?: ChannelLatencyMode;
		name?: string;
		playbackUrl?: string;
		preset?: TranscodePreset;
		recordingConfigurationArn?: string;
		tags?: Tags;
		type?: ChannelType;
	}

	/** Object specifying a channel. */
	export interface ChannelFormProperties {
		arn: FormControl<string | null | undefined>,
		authorized: FormControl<boolean | null | undefined>,
		ingestEndpoint: FormControl<string | null | undefined>,
		insecureIngest: FormControl<boolean | null | undefined>,
		latencyMode: FormControl<ChannelLatencyMode | null | undefined>,
		name: FormControl<string | null | undefined>,
		playbackUrl: FormControl<string | null | undefined>,
		preset: FormControl<TranscodePreset | null | undefined>,
		recordingConfigurationArn: FormControl<string | null | undefined>,
		type: FormControl<ChannelType | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			authorized: new FormControl<boolean | null | undefined>(undefined),
			ingestEndpoint: new FormControl<string | null | undefined>(undefined),
			insecureIngest: new FormControl<boolean | null | undefined>(undefined),
			latencyMode: new FormControl<ChannelLatencyMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			playbackUrl: new FormControl<string | null | undefined>(undefined),
			preset: new FormControl<TranscodePreset | null | undefined>(undefined),
			recordingConfigurationArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

	export enum ChannelLatencyMode { NORMAL = 'NORMAL', LOW = 'LOW' }

	export enum TranscodePreset { HIGHER_BANDWIDTH_DELIVERY = 'HIGHER_BANDWIDTH_DELIVERY', CONSTRAINED_BANDWIDTH_DELIVERY = 'CONSTRAINED_BANDWIDTH_DELIVERY' }

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export enum ChannelType { BASIC = 'BASIC', STANDARD = 'STANDARD', ADVANCED_SD = 'ADVANCED_SD', ADVANCED_HD = 'ADVANCED_HD' }


	/** Error related to a specific channel, specified by its ARN. */
	export interface BatchError {
		arn?: string;
		code?: string;
		message?: string;
	}

	/** Error related to a specific channel, specified by its ARN. */
	export interface BatchErrorFormProperties {
		arn: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateBatchErrorFormGroup() {
		return new FormGroup<BatchErrorFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetStreamKeyResponse {
		errors?: Array<BatchError>;
		streamKeys?: Array<StreamKey>;
	}
	export interface BatchGetStreamKeyResponseFormProperties {
	}
	export function CreateBatchGetStreamKeyResponseFormGroup() {
		return new FormGroup<BatchGetStreamKeyResponseFormProperties>({
		});

	}


	/** Object specifying a stream key. */
	export interface StreamKey {
		arn?: string;
		channelArn?: string;
		tags?: Tags;
		value?: string;
	}

	/** Object specifying a stream key. */
	export interface StreamKeyFormProperties {
		arn: FormControl<string | null | undefined>,
		channelArn: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateStreamKeyFormGroup() {
		return new FormGroup<StreamKeyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			channelArn: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchStartViewerSessionRevocationResponse {
		errors?: Array<BatchStartViewerSessionRevocationError>;
	}
	export interface BatchStartViewerSessionRevocationResponseFormProperties {
	}
	export function CreateBatchStartViewerSessionRevocationResponseFormGroup() {
		return new FormGroup<BatchStartViewerSessionRevocationResponseFormProperties>({
		});

	}


	/** Error for a request in the batch for BatchStartViewerSessionRevocation. Each error is related to a specific channel-ARN and viewer-ID pair. */
	export interface BatchStartViewerSessionRevocationError {

		/** Required */
		channelArn: string;
		code?: string;
		message?: string;

		/** Required */
		viewerId: string;
	}

	/** Error for a request in the batch for BatchStartViewerSessionRevocation. Each error is related to a specific channel-ARN and viewer-ID pair. */
	export interface BatchStartViewerSessionRevocationErrorFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Required */
		viewerId: FormControl<string | null | undefined>,
	}
	export function CreateBatchStartViewerSessionRevocationErrorFormGroup() {
		return new FormGroup<BatchStartViewerSessionRevocationErrorFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			viewerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A viewer session to revoke in the call to <a>BatchStartViewerSessionRevocation</a>. */
	export interface BatchStartViewerSessionRevocationViewerSession {

		/** Required */
		channelArn: string;

		/** Required */
		viewerId: string;
		viewerSessionVersionsLessThanOrEqualTo?: number | null;
	}

	/** A viewer session to revoke in the call to <a>BatchStartViewerSessionRevocation</a>. */
	export interface BatchStartViewerSessionRevocationViewerSessionFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,

		/** Required */
		viewerId: FormControl<string | null | undefined>,
		viewerSessionVersionsLessThanOrEqualTo: FormControl<number | null | undefined>,
	}
	export function CreateBatchStartViewerSessionRevocationViewerSessionFormGroup() {
		return new FormGroup<BatchStartViewerSessionRevocationViewerSessionFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			viewerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			viewerSessionVersionsLessThanOrEqualTo: new FormControl<number | null | undefined>(undefined),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface PendingVerification {
	}
	export interface PendingVerificationFormProperties {
	}
	export function CreatePendingVerificationFormGroup() {
		return new FormGroup<PendingVerificationFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface CreateChannelResponse {
		channel?: Channel;
		streamKey?: StreamKey;
	}
	export interface CreateChannelResponseFormProperties {
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateRecordingConfigurationResponse {
		recordingConfiguration?: RecordingConfiguration;
	}
	export interface CreateRecordingConfigurationResponseFormProperties {
	}
	export function CreateCreateRecordingConfigurationResponseFormGroup() {
		return new FormGroup<CreateRecordingConfigurationResponseFormProperties>({
		});

	}


	/** An object representing a configuration to record a channel stream. */
	export interface RecordingConfiguration {

		/** Required */
		arn: string;

		/** Required */
		destinationConfiguration: DestinationConfiguration;
		name?: string;
		recordingReconnectWindowSeconds?: number | null;
		renditionConfiguration?: RenditionConfiguration;

		/** Required */
		state: RecordingConfigurationState;
		tags?: Tags;
		thumbnailConfiguration?: ThumbnailConfiguration;
	}

	/** An object representing a configuration to record a channel stream. */
	export interface RecordingConfigurationFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		recordingReconnectWindowSeconds: FormControl<number | null | undefined>,

		/** Required */
		state: FormControl<RecordingConfigurationState | null | undefined>,
	}
	export function CreateRecordingConfigurationFormGroup() {
		return new FormGroup<RecordingConfigurationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			recordingReconnectWindowSeconds: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<RecordingConfigurationState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration. */
	export interface DestinationConfiguration {
		s3?: S3DestinationConfiguration;
	}

	/** A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration. */
	export interface DestinationConfigurationFormProperties {
	}
	export function CreateDestinationConfigurationFormGroup() {
		return new FormGroup<DestinationConfigurationFormProperties>({
		});

	}


	/** A complex type that describes an S3 location where recorded videos will be stored. */
	export interface S3DestinationConfiguration {

		/** Required */
		bucketName: string;
	}

	/** A complex type that describes an S3 location where recorded videos will be stored. */
	export interface S3DestinationConfigurationFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationConfigurationFormGroup() {
		return new FormGroup<S3DestinationConfigurationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object that describes which renditions should be recorded for a stream. */
	export interface RenditionConfiguration {
		renditionSelection?: RenditionConfigurationRenditionSelection;
		renditions?: Array<RenditionConfigurationRendition>;
	}

	/** Object that describes which renditions should be recorded for a stream. */
	export interface RenditionConfigurationFormProperties {
		renditionSelection: FormControl<RenditionConfigurationRenditionSelection | null | undefined>,
	}
	export function CreateRenditionConfigurationFormGroup() {
		return new FormGroup<RenditionConfigurationFormProperties>({
			renditionSelection: new FormControl<RenditionConfigurationRenditionSelection | null | undefined>(undefined),
		});

	}

	export enum RenditionConfigurationRenditionSelection { ALL = 'ALL', NONE = 'NONE', CUSTOM = 'CUSTOM' }

	export enum RenditionConfigurationRendition { FULL_HD = 'FULL_HD', HD = 'HD', SD = 'SD', LOWEST_RESOLUTION = 'LOWEST_RESOLUTION' }

	export enum RecordingConfigurationState { CREATING = 'CREATING', CREATE_FAILED = 'CREATE_FAILED', ACTIVE = 'ACTIVE' }


	/** An object representing a configuration of thumbnails for recorded video. */
	export interface ThumbnailConfiguration {
		recordingMode?: RecordingMode;
		resolution?: RenditionConfigurationRendition;
		storage?: Array<ThumbnailConfigurationStorage>;
		targetIntervalSeconds?: number | null;
	}

	/** An object representing a configuration of thumbnails for recorded video. */
	export interface ThumbnailConfigurationFormProperties {
		recordingMode: FormControl<RecordingMode | null | undefined>,
		resolution: FormControl<RenditionConfigurationRendition | null | undefined>,
		targetIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateThumbnailConfigurationFormGroup() {
		return new FormGroup<ThumbnailConfigurationFormProperties>({
			recordingMode: new FormControl<RecordingMode | null | undefined>(undefined),
			resolution: new FormControl<RenditionConfigurationRendition | null | undefined>(undefined),
			targetIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RecordingMode { DISABLED = 'DISABLED', INTERVAL = 'INTERVAL' }

	export enum ThumbnailConfigurationStorage { SEQUENTIAL = 'SEQUENTIAL', LATEST = 'LATEST' }

	export enum ThumbnailConfigurationResolution { FULL_HD = 'FULL_HD', HD = 'HD', SD = 'SD', LOWEST_RESOLUTION = 'LOWEST_RESOLUTION' }

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateStreamKeyResponse {
		streamKey?: StreamKey;
	}
	export interface CreateStreamKeyResponseFormProperties {
	}
	export function CreateCreateStreamKeyResponseFormGroup() {
		return new FormGroup<CreateStreamKeyResponseFormProperties>({
		});

	}

	export interface DeletePlaybackKeyPairResponse {
	}
	export interface DeletePlaybackKeyPairResponseFormProperties {
	}
	export function CreateDeletePlaybackKeyPairResponseFormGroup() {
		return new FormGroup<DeletePlaybackKeyPairResponseFormProperties>({
		});

	}

	export interface GetChannelResponse {
		channel?: Channel;
	}
	export interface GetChannelResponseFormProperties {
	}
	export function CreateGetChannelResponseFormGroup() {
		return new FormGroup<GetChannelResponseFormProperties>({
		});

	}

	export interface GetPlaybackKeyPairResponse {
		keyPair?: PlaybackKeyPair;
	}
	export interface GetPlaybackKeyPairResponseFormProperties {
	}
	export function CreateGetPlaybackKeyPairResponseFormGroup() {
		return new FormGroup<GetPlaybackKeyPairResponseFormProperties>({
		});

	}


	/** A key pair used to sign and validate a playback authorization token. */
	export interface PlaybackKeyPair {
		arn?: string;
		fingerprint?: string;
		name?: string;
		tags?: Tags;
	}

	/** A key pair used to sign and validate a playback authorization token. */
	export interface PlaybackKeyPairFormProperties {
		arn: FormControl<string | null | undefined>,
		fingerprint: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlaybackKeyPairFormGroup() {
		return new FormGroup<PlaybackKeyPairFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRecordingConfigurationResponse {
		recordingConfiguration?: RecordingConfiguration;
	}
	export interface GetRecordingConfigurationResponseFormProperties {
	}
	export function CreateGetRecordingConfigurationResponseFormGroup() {
		return new FormGroup<GetRecordingConfigurationResponseFormProperties>({
		});

	}

	export interface GetStreamResponse {
		stream?: Stream;
	}
	export interface GetStreamResponseFormProperties {
	}
	export function CreateGetStreamResponseFormGroup() {
		return new FormGroup<GetStreamResponseFormProperties>({
		});

	}


	/** Specifies a live video stream that has been ingested and distributed. */
	export interface Stream {
		channelArn?: string;
		health?: StreamHealth;
		playbackUrl?: string;
		startTime?: Date;
		state?: StreamState;
		streamId?: string;
		viewerCount?: number | null;
	}

	/** Specifies a live video stream that has been ingested and distributed. */
	export interface StreamFormProperties {
		channelArn: FormControl<string | null | undefined>,
		health: FormControl<StreamHealth | null | undefined>,
		playbackUrl: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		state: FormControl<StreamState | null | undefined>,
		streamId: FormControl<string | null | undefined>,
		viewerCount: FormControl<number | null | undefined>,
	}
	export function CreateStreamFormGroup() {
		return new FormGroup<StreamFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined),
			health: new FormControl<StreamHealth | null | undefined>(undefined),
			playbackUrl: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<StreamState | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
			viewerCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StreamHealth { HEALTHY = 'HEALTHY', STARVING = 'STARVING', UNKNOWN = 'UNKNOWN' }

	export enum StreamState { LIVE = 'LIVE', OFFLINE = 'OFFLINE' }

	export interface ChannelNotBroadcasting {
	}
	export interface ChannelNotBroadcastingFormProperties {
	}
	export function CreateChannelNotBroadcastingFormGroup() {
		return new FormGroup<ChannelNotBroadcastingFormProperties>({
		});

	}

	export interface GetStreamKeyResponse {
		streamKey?: StreamKey;
	}
	export interface GetStreamKeyResponseFormProperties {
	}
	export function CreateGetStreamKeyResponseFormGroup() {
		return new FormGroup<GetStreamKeyResponseFormProperties>({
		});

	}

	export interface GetStreamSessionResponse {
		streamSession?: StreamSession;
	}
	export interface GetStreamSessionResponseFormProperties {
	}
	export function CreateGetStreamSessionResponseFormGroup() {
		return new FormGroup<GetStreamSessionResponseFormProperties>({
		});

	}


	/** Object that captures the Amazon IVS configuration that the customer provisioned, the ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events it encountered. */
	export interface StreamSession {
		channel?: Channel;
		endTime?: Date;
		ingestConfiguration?: IngestConfiguration;
		recordingConfiguration?: RecordingConfiguration;
		startTime?: Date;
		streamId?: string;
		truncatedEvents?: Array<StreamEvent>;
	}

	/** Object that captures the Amazon IVS configuration that the customer provisioned, the ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events it encountered. */
	export interface StreamSessionFormProperties {
		endTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		streamId: FormControl<string | null | undefined>,
	}
	export function CreateStreamSessionFormGroup() {
		return new FormGroup<StreamSessionFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object specifying the ingest configuration set up by the broadcaster, usually in an encoder. */
	export interface IngestConfiguration {
		audio?: AudioConfiguration;
		video?: VideoConfiguration;
	}

	/** Object specifying the ingest configuration set up by the broadcaster, usually in an encoder. */
	export interface IngestConfigurationFormProperties {
	}
	export function CreateIngestConfigurationFormGroup() {
		return new FormGroup<IngestConfigurationFormProperties>({
		});

	}


	/** Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health. */
	export interface AudioConfiguration {
		channels?: number | null;
		codec?: string;
		sampleRate?: number | null;
		targetBitrate?: number | null;
	}

	/** Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health. */
	export interface AudioConfigurationFormProperties {
		channels: FormControl<number | null | undefined>,
		codec: FormControl<string | null | undefined>,
		sampleRate: FormControl<number | null | undefined>,
		targetBitrate: FormControl<number | null | undefined>,
	}
	export function CreateAudioConfigurationFormGroup() {
		return new FormGroup<AudioConfigurationFormProperties>({
			channels: new FormControl<number | null | undefined>(undefined),
			codec: new FormControl<string | null | undefined>(undefined),
			sampleRate: new FormControl<number | null | undefined>(undefined),
			targetBitrate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Object specifying a stream’s video configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health. */
	export interface VideoConfiguration {
		avcLevel?: string;
		avcProfile?: string;
		codec?: string;
		encoder?: string;
		targetBitrate?: number | null;
		targetFramerate?: number | null;
		videoHeight?: number | null;
		videoWidth?: number | null;
	}

	/** Object specifying a stream’s video configuration, as set up by the broadcaster (usually in an encoder). This is part of the <a>IngestConfiguration</a> object and used for monitoring stream health. */
	export interface VideoConfigurationFormProperties {
		avcLevel: FormControl<string | null | undefined>,
		avcProfile: FormControl<string | null | undefined>,
		codec: FormControl<string | null | undefined>,
		encoder: FormControl<string | null | undefined>,
		targetBitrate: FormControl<number | null | undefined>,
		targetFramerate: FormControl<number | null | undefined>,
		videoHeight: FormControl<number | null | undefined>,
		videoWidth: FormControl<number | null | undefined>,
	}
	export function CreateVideoConfigurationFormGroup() {
		return new FormGroup<VideoConfigurationFormProperties>({
			avcLevel: new FormControl<string | null | undefined>(undefined),
			avcProfile: new FormControl<string | null | undefined>(undefined),
			codec: new FormControl<string | null | undefined>(undefined),
			encoder: new FormControl<string | null | undefined>(undefined),
			targetBitrate: new FormControl<number | null | undefined>(undefined),
			targetFramerate: new FormControl<number | null | undefined>(undefined),
			videoHeight: new FormControl<number | null | undefined>(undefined),
			videoWidth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon IVS</a>. */
	export interface StreamEvent {
		eventTime?: Date;
		name?: string;
		type?: string;
	}

	/** Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon IVS</a>. */
	export interface StreamEventFormProperties {
		eventTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateStreamEventFormGroup() {
		return new FormGroup<StreamEventFormProperties>({
			eventTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportPlaybackKeyPairResponse {
		keyPair?: PlaybackKeyPair;
	}
	export interface ImportPlaybackKeyPairResponseFormProperties {
	}
	export function CreateImportPlaybackKeyPairResponseFormGroup() {
		return new FormGroup<ImportPlaybackKeyPairResponseFormProperties>({
		});

	}

	export interface ListChannelsResponse {

		/** Required */
		channels: Array<ChannelSummary>;
		nextToken?: string;
	}
	export interface ListChannelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a channel. */
	export interface ChannelSummary {
		arn?: string;
		authorized?: boolean | null;
		insecureIngest?: boolean | null;
		latencyMode?: ChannelLatencyMode;
		name?: string;
		preset?: TranscodePreset;
		recordingConfigurationArn?: string;
		tags?: Tags;
		type?: ChannelType;
	}

	/** Summary information about a channel. */
	export interface ChannelSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		authorized: FormControl<boolean | null | undefined>,
		insecureIngest: FormControl<boolean | null | undefined>,
		latencyMode: FormControl<ChannelLatencyMode | null | undefined>,
		name: FormControl<string | null | undefined>,
		preset: FormControl<TranscodePreset | null | undefined>,
		recordingConfigurationArn: FormControl<string | null | undefined>,
		type: FormControl<ChannelType | null | undefined>,
	}
	export function CreateChannelSummaryFormGroup() {
		return new FormGroup<ChannelSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			authorized: new FormControl<boolean | null | undefined>(undefined),
			insecureIngest: new FormControl<boolean | null | undefined>(undefined),
			latencyMode: new FormControl<ChannelLatencyMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preset: new FormControl<TranscodePreset | null | undefined>(undefined),
			recordingConfigurationArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

	export interface ListPlaybackKeyPairsResponse {

		/** Required */
		keyPairs: Array<PlaybackKeyPairSummary>;
		nextToken?: string;
	}
	export interface ListPlaybackKeyPairsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaybackKeyPairsResponseFormGroup() {
		return new FormGroup<ListPlaybackKeyPairsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a playback key pair. */
	export interface PlaybackKeyPairSummary {
		arn?: string;
		name?: string;
		tags?: Tags;
	}

	/** Summary information about a playback key pair. */
	export interface PlaybackKeyPairSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlaybackKeyPairSummaryFormGroup() {
		return new FormGroup<PlaybackKeyPairSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecordingConfigurationsResponse {
		nextToken?: string;

		/** Required */
		recordingConfigurations: Array<RecordingConfigurationSummary>;
	}
	export interface ListRecordingConfigurationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecordingConfigurationsResponseFormGroup() {
		return new FormGroup<ListRecordingConfigurationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a RecordingConfiguration. */
	export interface RecordingConfigurationSummary {

		/** Required */
		arn: string;

		/** Required */
		destinationConfiguration: DestinationConfiguration;
		name?: string;

		/** Required */
		state: RecordingConfigurationState;
		tags?: Tags;
	}

	/** Summary information about a RecordingConfiguration. */
	export interface RecordingConfigurationSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<RecordingConfigurationState | null | undefined>,
	}
	export function CreateRecordingConfigurationSummaryFormGroup() {
		return new FormGroup<RecordingConfigurationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RecordingConfigurationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStreamKeysResponse {
		nextToken?: string;

		/** Required */
		streamKeys: Array<StreamKeySummary>;
	}
	export interface ListStreamKeysResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamKeysResponseFormGroup() {
		return new FormGroup<ListStreamKeysResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a stream key. */
	export interface StreamKeySummary {
		arn?: string;
		channelArn?: string;
		tags?: Tags;
	}

	/** Summary information about a stream key. */
	export interface StreamKeySummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateStreamKeySummaryFormGroup() {
		return new FormGroup<StreamKeySummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			channelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamSessionsResponse {
		nextToken?: string;

		/** Required */
		streamSessions: Array<StreamSessionSummary>;
	}
	export interface ListStreamSessionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamSessionsResponseFormGroup() {
		return new FormGroup<ListStreamSessionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a stream session. */
	export interface StreamSessionSummary {
		endTime?: Date;
		hasErrorEvent?: boolean | null;
		startTime?: Date;
		streamId?: string;
	}

	/** Summary information about a stream session. */
	export interface StreamSessionSummaryFormProperties {
		endTime: FormControl<Date | null | undefined>,
		hasErrorEvent: FormControl<boolean | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		streamId: FormControl<string | null | undefined>,
	}
	export function CreateStreamSessionSummaryFormGroup() {
		return new FormGroup<StreamSessionSummaryFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			hasErrorEvent: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamsResponse {
		nextToken?: string;

		/** Required */
		streams: Array<StreamSummary>;
	}
	export interface ListStreamsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsResponseFormGroup() {
		return new FormGroup<ListStreamsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a stream. */
	export interface StreamSummary {
		channelArn?: string;
		health?: StreamHealth;
		startTime?: Date;
		state?: StreamState;
		streamId?: string;
		viewerCount?: number | null;
	}

	/** Summary information about a stream. */
	export interface StreamSummaryFormProperties {
		channelArn: FormControl<string | null | undefined>,
		health: FormControl<StreamHealth | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		state: FormControl<StreamState | null | undefined>,
		streamId: FormControl<string | null | undefined>,
		viewerCount: FormControl<number | null | undefined>,
	}
	export function CreateStreamSummaryFormGroup() {
		return new FormGroup<StreamSummaryFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined),
			health: new FormControl<StreamHealth | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<StreamState | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
			viewerCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		tags: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartViewerSessionRevocationResponse {
	}
	export interface StartViewerSessionRevocationResponseFormProperties {
	}
	export function CreateStartViewerSessionRevocationResponseFormGroup() {
		return new FormGroup<StartViewerSessionRevocationResponseFormProperties>({
		});

	}

	export interface StopStreamResponse {
	}
	export interface StopStreamResponseFormProperties {
	}
	export function CreateStopStreamResponseFormGroup() {
		return new FormGroup<StopStreamResponseFormProperties>({
		});

	}

	export interface StreamUnavailable {
	}
	export interface StreamUnavailableFormProperties {
	}
	export function CreateStreamUnavailableFormGroup() {
		return new FormGroup<StreamUnavailableFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateChannelResponse {

		/** Object specifying a channel. */
		channel?: Channel;
	}
	export interface UpdateChannelResponseFormProperties {
	}
	export function CreateUpdateChannelResponseFormGroup() {
		return new FormGroup<UpdateChannelResponseFormProperties>({
		});

	}

	export interface BatchGetChannelRequest {

		/** Required */
		arns: Array<string>;
	}
	export interface BatchGetChannelRequestFormProperties {
	}
	export function CreateBatchGetChannelRequestFormGroup() {
		return new FormGroup<BatchGetChannelRequestFormProperties>({
		});

	}

	export interface BatchGetStreamKeyRequest {

		/** Required */
		arns: Array<string>;
	}
	export interface BatchGetStreamKeyRequestFormProperties {
	}
	export function CreateBatchGetStreamKeyRequestFormGroup() {
		return new FormGroup<BatchGetStreamKeyRequestFormProperties>({
		});

	}

	export interface BatchStartViewerSessionRevocationRequest {

		/** Required */
		viewerSessions: Array<BatchStartViewerSessionRevocationViewerSession>;
	}
	export interface BatchStartViewerSessionRevocationRequestFormProperties {
	}
	export function CreateBatchStartViewerSessionRevocationRequestFormGroup() {
		return new FormGroup<BatchStartViewerSessionRevocationRequestFormProperties>({
		});

	}

	export interface CreateChannelRequest {
		authorized?: boolean | null;
		insecureIngest?: boolean | null;
		latencyMode?: ChannelLatencyMode;
		name?: string;
		preset?: TranscodePreset;
		recordingConfigurationArn?: string;
		tags?: Tags;
		type?: ChannelType;
	}
	export interface CreateChannelRequestFormProperties {
		authorized: FormControl<boolean | null | undefined>,
		insecureIngest: FormControl<boolean | null | undefined>,
		latencyMode: FormControl<ChannelLatencyMode | null | undefined>,
		name: FormControl<string | null | undefined>,
		preset: FormControl<TranscodePreset | null | undefined>,
		recordingConfigurationArn: FormControl<string | null | undefined>,
		type: FormControl<ChannelType | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			authorized: new FormControl<boolean | null | undefined>(undefined),
			insecureIngest: new FormControl<boolean | null | undefined>(undefined),
			latencyMode: new FormControl<ChannelLatencyMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preset: new FormControl<TranscodePreset | null | undefined>(undefined),
			recordingConfigurationArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

	export interface CreateRecordingConfigurationRequest {

		/** Required */
		destinationConfiguration: DestinationConfiguration;
		name?: string;
		recordingReconnectWindowSeconds?: number | null;
		renditionConfiguration?: RenditionConfiguration;
		tags?: Tags;
		thumbnailConfiguration?: ThumbnailConfiguration;
	}
	export interface CreateRecordingConfigurationRequestFormProperties {
		name: FormControl<string | null | undefined>,
		recordingReconnectWindowSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateRecordingConfigurationRequestFormGroup() {
		return new FormGroup<CreateRecordingConfigurationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			recordingReconnectWindowSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateStreamKeyRequest {

		/** Required */
		channelArn: string;
		tags?: Tags;
	}
	export interface CreateStreamKeyRequestFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamKeyRequestFormGroup() {
		return new FormGroup<CreateStreamKeyRequestFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteChannelRequest {

		/** Required */
		arn: string;
	}
	export interface DeleteChannelRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteChannelRequestFormGroup() {
		return new FormGroup<DeleteChannelRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePlaybackKeyPairRequest {

		/** Required */
		arn: string;
	}
	export interface DeletePlaybackKeyPairRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePlaybackKeyPairRequestFormGroup() {
		return new FormGroup<DeletePlaybackKeyPairRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRecordingConfigurationRequest {

		/** Required */
		arn: string;
	}
	export interface DeleteRecordingConfigurationRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecordingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteRecordingConfigurationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteStreamKeyRequest {

		/** Required */
		arn: string;
	}
	export interface DeleteStreamKeyRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStreamKeyRequestFormGroup() {
		return new FormGroup<DeleteStreamKeyRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetChannelRequest {

		/** Required */
		arn: string;
	}
	export interface GetChannelRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelRequestFormGroup() {
		return new FormGroup<GetChannelRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPlaybackKeyPairRequest {

		/** Required */
		arn: string;
	}
	export interface GetPlaybackKeyPairRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetPlaybackKeyPairRequestFormGroup() {
		return new FormGroup<GetPlaybackKeyPairRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRecordingConfigurationRequest {

		/** Required */
		arn: string;
	}
	export interface GetRecordingConfigurationRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetRecordingConfigurationRequestFormGroup() {
		return new FormGroup<GetRecordingConfigurationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStreamKeyRequest {

		/** Required */
		arn: string;
	}
	export interface GetStreamKeyRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetStreamKeyRequestFormGroup() {
		return new FormGroup<GetStreamKeyRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStreamRequest {

		/** Required */
		channelArn: string;
	}
	export interface GetStreamRequestFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateGetStreamRequestFormGroup() {
		return new FormGroup<GetStreamRequestFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStreamSessionRequest {

		/** Required */
		channelArn: string;
		streamId?: string;
	}
	export interface GetStreamSessionRequestFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,
		streamId: FormControl<string | null | undefined>,
	}
	export function CreateGetStreamSessionRequestFormGroup() {
		return new FormGroup<GetStreamSessionRequestFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportPlaybackKeyPairRequest {
		name?: string;

		/** Required */
		publicKeyMaterial: string;
		tags?: Tags;
	}
	export interface ImportPlaybackKeyPairRequestFormProperties {
		name: FormControl<string | null | undefined>,

		/** Required */
		publicKeyMaterial: FormControl<string | null | undefined>,
	}
	export function CreateImportPlaybackKeyPairRequestFormGroup() {
		return new FormGroup<ImportPlaybackKeyPairRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			publicKeyMaterial: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListChannelsRequest {
		filterByName?: string;
		filterByRecordingConfigurationArn?: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListChannelsRequestFormProperties {
		filterByName: FormControl<string | null | undefined>,
		filterByRecordingConfigurationArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
			filterByName: new FormControl<string | null | undefined>(undefined),
			filterByRecordingConfigurationArn: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPlaybackKeyPairsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListPlaybackKeyPairsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaybackKeyPairsRequestFormGroup() {
		return new FormGroup<ListPlaybackKeyPairsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecordingConfigurationsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListRecordingConfigurationsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecordingConfigurationsRequestFormGroup() {
		return new FormGroup<ListRecordingConfigurationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamKeysRequest {

		/** Required */
		channelArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListStreamKeysRequestFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamKeysRequestFormGroup() {
		return new FormGroup<ListStreamKeysRequestFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStreamSessionsRequest {

		/** Required */
		channelArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListStreamSessionsRequestFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamSessionsRequestFormGroup() {
		return new FormGroup<ListStreamSessionsRequestFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object specifying the stream attribute on which to filter. */
	export interface StreamFilters {
		health?: StreamHealth;
	}

	/** Object specifying the stream attribute on which to filter. */
	export interface StreamFiltersFormProperties {
		health: FormControl<StreamHealth | null | undefined>,
	}
	export function CreateStreamFiltersFormGroup() {
		return new FormGroup<StreamFiltersFormProperties>({
			health: new FormControl<StreamHealth | null | undefined>(undefined),
		});

	}

	export interface ListStreamsRequest {
		filterBy?: StreamFilters;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListStreamsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsRequestFormGroup() {
		return new FormGroup<ListStreamsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface PutMetadataRequest {

		/** Required */
		channelArn: string;

		/** Required */
		metadata: string;
	}
	export interface PutMetadataRequestFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreatePutMetadataRequestFormGroup() {
		return new FormGroup<PutMetadataRequestFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartViewerSessionRevocationRequest {

		/** Required */
		channelArn: string;

		/** Required */
		viewerId: string;
		viewerSessionVersionsLessThanOrEqualTo?: number | null;
	}
	export interface StartViewerSessionRevocationRequestFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,

		/** Required */
		viewerId: FormControl<string | null | undefined>,
		viewerSessionVersionsLessThanOrEqualTo: FormControl<number | null | undefined>,
	}
	export function CreateStartViewerSessionRevocationRequestFormGroup() {
		return new FormGroup<StartViewerSessionRevocationRequestFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			viewerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			viewerSessionVersionsLessThanOrEqualTo: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StopStreamRequest {

		/** Required */
		channelArn: string;
	}
	export interface StopStreamRequestFormProperties {

		/** Required */
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateStopStreamRequestFormGroup() {
		return new FormGroup<StopStreamRequestFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: Tags;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateChannelRequest {

		/** Required */
		arn: string;
		authorized?: boolean | null;
		insecureIngest?: boolean | null;
		latencyMode?: ChannelLatencyMode;
		name?: string;
		preset?: TranscodePreset;
		recordingConfigurationArn?: string;
		type?: ChannelType;
	}
	export interface UpdateChannelRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		authorized: FormControl<boolean | null | undefined>,
		insecureIngest: FormControl<boolean | null | undefined>,
		latencyMode: FormControl<ChannelLatencyMode | null | undefined>,
		name: FormControl<string | null | undefined>,
		preset: FormControl<TranscodePreset | null | undefined>,
		recordingConfigurationArn: FormControl<string | null | undefined>,
		type: FormControl<ChannelType | null | undefined>,
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorized: new FormControl<boolean | null | undefined>(undefined),
			insecureIngest: new FormControl<boolean | null | undefined>(undefined),
			latencyMode: new FormControl<ChannelLatencyMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preset: new FormControl<TranscodePreset | null | undefined>(undefined),
			recordingConfigurationArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Performs <a>GetChannel</a> on multiple ARNs simultaneously.
		 * Post BatchGetChannel
		 * @return {BatchGetChannelResponse} Success
		 */
		BatchGetChannel(requestBody: BatchGetChannelPostBody): Observable<BatchGetChannelResponse> {
			return this.http.post<BatchGetChannelResponse>(this.baseUri + 'BatchGetChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.
		 * Post BatchGetStreamKey
		 * @return {BatchGetStreamKeyResponse} Success
		 */
		BatchGetStreamKey(requestBody: BatchGetStreamKeyPostBody): Observable<BatchGetStreamKeyResponse> {
			return this.http.post<BatchGetStreamKeyResponse>(this.baseUri + 'BatchGetStreamKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs <a>StartViewerSessionRevocation</a> on multiple channel ARN and viewer ID pairs simultaneously.
		 * Post BatchStartViewerSessionRevocation
		 * @return {BatchStartViewerSessionRevocationResponse} Success
		 */
		BatchStartViewerSessionRevocation(requestBody: BatchStartViewerSessionRevocationPostBody): Observable<BatchStartViewerSessionRevocationResponse> {
			return this.http.post<BatchStartViewerSessionRevocationResponse>(this.baseUri + 'BatchStartViewerSessionRevocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new channel and an associated stream key to start streaming.
		 * Post CreateChannel
		 * @return {CreateChannelResponse} Success
		 */
		CreateChannel(requestBody: CreateChannelPostBody): Observable<CreateChannelResponse> {
			return this.http.post<CreateChannelResponse>(this.baseUri + 'CreateChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p> <p> <b>Known issue:</b> In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the <code>state</code> of the recording configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)</p> <p> <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.</p>
		 * Post CreateRecordingConfiguration
		 * @return {CreateRecordingConfigurationResponse} Success
		 */
		CreateRecordingConfiguration(requestBody: CreateRecordingConfigurationPostBody): Observable<CreateRecordingConfigurationResponse> {
			return this.http.post<CreateRecordingConfigurationResponse>(this.baseUri + 'CreateRecordingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> <p>Note that <a>CreateChannel</a> creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use <a>DeleteStreamKey</a> and then CreateStreamKey.</p>
		 * Post CreateStreamKey
		 * @return {CreateStreamKeyResponse} Success
		 */
		CreateStreamKey(requestBody: CreateStreamKeyPostBody): Observable<CreateStreamKeyResponse> {
			return this.http.post<CreateStreamKeyResponse>(this.baseUri + 'CreateStreamKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified channel and its associated stream keys.</p> <p>If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call <a>StopStream</a>, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then call DeleteChannel. (See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html"> Using EventBridge with Amazon IVS</a>.) </p>
		 * Post DeleteChannel
		 * @return {void} 
		 */
		DeleteChannel(requestBody: DeleteChannelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
		 * Post DeletePlaybackKeyPair
		 * @return {DeletePlaybackKeyPairResponse} Success
		 */
		DeletePlaybackKeyPair(requestBody: DeletePlaybackKeyPairPostBody): Observable<DeletePlaybackKeyPairResponse> {
			return this.http.post<DeletePlaybackKeyPairResponse>(this.baseUri + 'DeletePlaybackKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the recording configuration for the specified ARN.</p> <p>If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use <a>UpdateChannel</a> to set the <code>recordingConfigurationArn</code> field to an empty string, then use DeleteRecordingConfiguration.</p>
		 * Post DeleteRecordingConfiguration
		 * @return {void} 
		 */
		DeleteRecordingConfiguration(requestBody: DeleteRecordingConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteRecordingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the stream key for the specified ARN, so it can no longer be used to stream.
		 * Post DeleteStreamKey
		 * @return {void} 
		 */
		DeleteStreamKey(requestBody: DeleteStreamKeyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DeleteStreamKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.
		 * Post GetChannel
		 * @return {GetChannelResponse} Success
		 */
		GetChannel(requestBody: GetChannelPostBody): Observable<GetChannelResponse> {
			return this.http.post<GetChannelResponse>(this.baseUri + 'GetChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
		 * Post GetPlaybackKeyPair
		 * @return {GetPlaybackKeyPairResponse} Success
		 */
		GetPlaybackKeyPair(requestBody: GetPlaybackKeyPairPostBody): Observable<GetPlaybackKeyPairResponse> {
			return this.http.post<GetPlaybackKeyPairResponse>(this.baseUri + 'GetPlaybackKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the recording configuration for the specified ARN.
		 * Post GetRecordingConfiguration
		 * @return {GetRecordingConfigurationResponse} Success
		 */
		GetRecordingConfiguration(requestBody: GetRecordingConfigurationPostBody): Observable<GetRecordingConfigurationResponse> {
			return this.http.post<GetRecordingConfigurationResponse>(this.baseUri + 'GetRecordingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the active (live) stream on a specified channel.
		 * Post GetStream
		 * @return {GetStreamResponse} Success
		 */
		GetStream(requestBody: GetStreamPostBody): Observable<GetStreamResponse> {
			return this.http.post<GetStreamResponse>(this.baseUri + 'GetStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets stream-key information for a specified ARN.
		 * Post GetStreamKey
		 * @return {GetStreamKeyResponse} Success
		 */
		GetStreamKey(requestBody: GetStreamKeyPostBody): Observable<GetStreamKeyResponse> {
			return this.http.post<GetStreamKeyResponse>(this.baseUri + 'GetStreamKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets metadata on a specified stream.
		 * Post GetStreamSession
		 * @return {GetStreamSessionResponse} Success
		 */
		GetStreamSession(requestBody: GetStreamSessionPostBody): Observable<GetStreamSessionResponse> {
			return this.http.post<GetStreamSessionResponse>(this.baseUri + 'GetStreamSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
		 * Post ImportPlaybackKeyPair
		 * @return {ImportPlaybackKeyPairResponse} Success
		 */
		ImportPlaybackKeyPair(requestBody: ImportPlaybackKeyPairPostBody): Observable<ImportPlaybackKeyPairResponse> {
			return this.http.post<ImportPlaybackKeyPairResponse>(this.baseUri + 'ImportPlaybackKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).
		 * Post ListChannels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListChannelsPostBody): Observable<ListChannelsResponse> {
			return this.http.post<ListChannelsResponse>(this.baseUri + 'ListChannels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
		 * Post ListPlaybackKeyPairs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPlaybackKeyPairsResponse} Success
		 */
		ListPlaybackKeyPairs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPlaybackKeyPairsPostBody): Observable<ListPlaybackKeyPairsResponse> {
			return this.http.post<ListPlaybackKeyPairsResponse>(this.baseUri + 'ListPlaybackKeyPairs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.
		 * Post ListRecordingConfigurations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRecordingConfigurationsResponse} Success
		 */
		ListRecordingConfigurations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRecordingConfigurationsPostBody): Observable<ListRecordingConfigurationsResponse> {
			return this.http.post<ListRecordingConfigurationsResponse>(this.baseUri + 'ListRecordingConfigurations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets summary information about stream keys for the specified channel.
		 * Post ListStreamKeys
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListStreamKeysResponse} Success
		 */
		ListStreamKeys(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListStreamKeysPostBody): Observable<ListStreamKeysResponse> {
			return this.http.post<ListStreamKeysResponse>(this.baseUri + 'ListStreamKeys?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.
		 * Post ListStreamSessions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListStreamSessionsResponse} Success
		 */
		ListStreamSessions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListStreamSessionsPostBody): Observable<ListStreamSessionsResponse> {
			return this.http.post<ListStreamSessionsResponse>(this.baseUri + 'ListStreamSessions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.
		 * Post ListStreams
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListStreamsResponse} Success
		 */
		ListStreams(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListStreamsPostBody): Observable<ListStreamsResponse> {
			return this.http.post<ListStreamsResponse>(this.baseUri + 'ListStreams?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about Amazon Web Services tags for the specified ARN.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to be retrieved. The ARN must be URL-encoded.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds or updates tags for the Amazon Web Services resource with the specified ARN.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn ARN of the resource for which tags are to be added or updated. The ARN must be URL-encoded.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.
		 * Post PutMetadata
		 * @return {void} 
		 */
		PutMetadata(requestBody: PutMetadataPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'PutMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts the process of revoking the viewer session associated with a specified channel ARN and viewer ID. Optionally, you can provide a version to revoke viewer sessions less than and including that version. For instructions on associating a viewer ID with a viewer session, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a>.
		 * Post StartViewerSessionRevocation
		 * @return {StartViewerSessionRevocationResponse} Success
		 */
		StartViewerSessionRevocation(requestBody: StartViewerSessionRevocationPostBody): Observable<StartViewerSessionRevocationResponse> {
			return this.http.post<StartViewerSessionRevocationResponse>(this.baseUri + 'StartViewerSessionRevocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> <note> <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the <code>streamKey</code> attached to the channel.</p> </note>
		 * Post StopStream
		 * @return {StopStreamResponse} Success
		 */
		StopStream(requestBody: StopStreamPostBody): Observable<StopStreamResponse> {
			return this.http.post<StopStreamResponse>(this.baseUri + 'StopStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the resource with the specified ARN.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn ARN of the resource for which tags are to be removed. The ARN must be URL-encoded.
		 * @param {Array<string>} tagKeys Array of tags to be removed. Array of maps, each of the form s<code>tring:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a channel's configuration. Live channels cannot be updated. You must stop the ongoing stream, update the channel, and restart the stream for the changes to take effect.
		 * Post UpdateChannel
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(requestBody: UpdateChannelPostBody): Observable<UpdateChannelResponse> {
			return this.http.post<UpdateChannelResponse>(this.baseUri + 'UpdateChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchGetChannelPostBody {

		/**
		 * Array of ARNs, one per channel.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		arns: Array<string>;
	}
	export interface BatchGetChannelPostBodyFormProperties {
	}
	export function CreateBatchGetChannelPostBodyFormGroup() {
		return new FormGroup<BatchGetChannelPostBodyFormProperties>({
		});

	}

	export interface BatchGetStreamKeyPostBody {

		/**
		 * Array of ARNs, one per stream key.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		arns: Array<string>;
	}
	export interface BatchGetStreamKeyPostBodyFormProperties {
	}
	export function CreateBatchGetStreamKeyPostBodyFormGroup() {
		return new FormGroup<BatchGetStreamKeyPostBodyFormProperties>({
		});

	}

	export interface BatchStartViewerSessionRevocationPostBody {

		/**
		 * Array of viewer sessions, one per channel-ARN and viewer-ID pair.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		viewerSessions: Array<BatchStartViewerSessionRevocationViewerSession>;
	}
	export interface BatchStartViewerSessionRevocationPostBodyFormProperties {
	}
	export function CreateBatchStartViewerSessionRevocationPostBodyFormGroup() {
		return new FormGroup<BatchStartViewerSessionRevocationPostBodyFormProperties>({
		});

	}

	export interface CreateChannelPostBody {

		/** Whether the channel is private (enabled for playback authorization). Default: <code>false</code>. */
		authorized?: boolean | null;

		/** Whether the channel allows insecure RTMP ingest. Default: <code>false</code>. */
		insecureIngest?: boolean | null;

		/** Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.) Default: <code>LOW</code>. */
		latencyMode?: ChannelLatencyMode | null;

		/**
		 * Channel name.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/** Optional transcode preset for the channel. This is selectable only for <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty string (<code>""</code>). */
		preset?: TranscodePreset | null;

		/**
		 * Recording-configuration ARN. Default: "" (empty string, recording is disabled).
		 * Max length: 128
		 * Min length: 0
		 */
		recordingConfigurationArn?: string | null;

		/** Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. */
		tags?: {[id: string]: string };

		/** <p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately.</i> Some types generate multiple qualities (renditions) from the original input; this automatically gives viewers the best experience for their devices and network conditions. Some types provide transcoded video; transcoding allows higher playback quality across a range of download speeds. Default: <code>STANDARD</code>. Valid values:</p> <ul> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input quality to viewers. The viewer’s video-quality choice is limited to the original input. Input resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p. Original audio is passed through.</p> </li> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default when you create a channel.</p> </li> <li> <p> <code>ADVANCED_SD</code>: Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at SD quality (480p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.</p> </li> <li> <p> <code>ADVANCED_HD</code>: Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at HD quality (720p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.</p> </li> </ul> <p>Optional <i>transcode presets</i> (available for the <code>ADVANCED</code> types) allow you to trade off available download bandwidth and video quality, to optimize the viewing experience. There are two presets:</p> <ul> <li> <p> <i>Constrained bandwidth delivery</i> uses a lower bitrate for each quality level. Use it if you have low download bandwidth and/or simple video content (e.g., talking heads)</p> </li> <li> <p> <i>Higher bandwidth delivery</i> uses a higher bitrate for each quality level. Use it if you have high download bandwidth and/or complex video content (e.g., flashes and quick scene changes).</p> </li> </ul> */
		type?: ChannelType | null;
	}
	export interface CreateChannelPostBodyFormProperties {

		/** Whether the channel is private (enabled for playback authorization). Default: <code>false</code>. */
		authorized: FormControl<boolean | null | undefined>,

		/** Whether the channel allows insecure RTMP ingest. Default: <code>false</code>. */
		insecureIngest: FormControl<boolean | null | undefined>,

		/** Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.) Default: <code>LOW</code>. */
		latencyMode: FormControl<ChannelLatencyMode | null | undefined>,

		/**
		 * Channel name.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Optional transcode preset for the channel. This is selectable only for <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty string (<code>""</code>). */
		preset: FormControl<TranscodePreset | null | undefined>,

		/**
		 * Recording-configuration ARN. Default: "" (empty string, recording is disabled).
		 * Max length: 128
		 * Min length: 0
		 */
		recordingConfigurationArn: FormControl<string | null | undefined>,

		/** Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately.</i> Some types generate multiple qualities (renditions) from the original input; this automatically gives viewers the best experience for their devices and network conditions. Some types provide transcoded video; transcoding allows higher playback quality across a range of download speeds. Default: <code>STANDARD</code>. Valid values:</p> <ul> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input quality to viewers. The viewer’s video-quality choice is limited to the original input. Input resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p. Original audio is passed through.</p> </li> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default when you create a channel.</p> </li> <li> <p> <code>ADVANCED_SD</code>: Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at SD quality (480p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.</p> </li> <li> <p> <code>ADVANCED_HD</code>: Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at HD quality (720p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.</p> </li> </ul> <p>Optional <i>transcode presets</i> (available for the <code>ADVANCED</code> types) allow you to trade off available download bandwidth and video quality, to optimize the viewing experience. There are two presets:</p> <ul> <li> <p> <i>Constrained bandwidth delivery</i> uses a lower bitrate for each quality level. Use it if you have low download bandwidth and/or simple video content (e.g., talking heads)</p> </li> <li> <p> <i>Higher bandwidth delivery</i> uses a higher bitrate for each quality level. Use it if you have high download bandwidth and/or complex video content (e.g., flashes and quick scene changes).</p> </li> </ul> */
		type: FormControl<ChannelType | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			authorized: new FormControl<boolean | null | undefined>(undefined),
			insecureIngest: new FormControl<boolean | null | undefined>(undefined),
			latencyMode: new FormControl<ChannelLatencyMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			preset: new FormControl<TranscodePreset | null | undefined>(undefined),
			recordingConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

	export interface CreateRecordingConfigurationPostBody {

		/**
		 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
		 * Required
		 */
		destinationConfiguration: CreateRecordingConfigurationPostBodyDestinationConfiguration;

		/**
		 * Recording-configuration name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/**
		 * If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.
		 * Minimum: 0
		 * Maximum: 300
		 */
		recordingReconnectWindowSeconds?: number | null;

		/** Object that describes which renditions should be recorded for a stream. */
		renditionConfiguration?: CreateRecordingConfigurationPostBodyRenditionConfiguration;

		/** Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. */
		tags?: {[id: string]: string };

		/** An object representing a configuration of thumbnails for recorded video. */
		thumbnailConfiguration?: CreateRecordingConfigurationPostBodyThumbnailConfiguration;
	}
	export interface CreateRecordingConfigurationPostBodyFormProperties {

		/**
		 * Recording-configuration name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. Default: 0.
		 * Minimum: 0
		 * Maximum: 300
		 */
		recordingReconnectWindowSeconds: FormControl<number | null | undefined>,

		/** Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRecordingConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateRecordingConfigurationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			recordingReconnectWindowSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(300)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRecordingConfigurationPostBodyDestinationConfiguration {
		s3?: S3DestinationConfiguration;
	}
	export interface CreateRecordingConfigurationPostBodyDestinationConfigurationFormProperties {
	}
	export function CreateCreateRecordingConfigurationPostBodyDestinationConfigurationFormGroup() {
		return new FormGroup<CreateRecordingConfigurationPostBodyDestinationConfigurationFormProperties>({
		});

	}

	export interface CreateRecordingConfigurationPostBodyRenditionConfiguration {
		renditionSelection?: RenditionConfigurationRenditionSelection;
		renditions?: Array<RenditionConfigurationRendition>;
	}
	export interface CreateRecordingConfigurationPostBodyRenditionConfigurationFormProperties {
		renditionSelection: FormControl<RenditionConfigurationRenditionSelection | null | undefined>,
	}
	export function CreateCreateRecordingConfigurationPostBodyRenditionConfigurationFormGroup() {
		return new FormGroup<CreateRecordingConfigurationPostBodyRenditionConfigurationFormProperties>({
			renditionSelection: new FormControl<RenditionConfigurationRenditionSelection | null | undefined>(undefined),
		});

	}

	export interface CreateRecordingConfigurationPostBodyThumbnailConfiguration {
		recordingMode?: RecordingMode;
		resolution?: RenditionConfigurationRendition;
		storage?: Array<ThumbnailConfigurationStorage>;
		targetIntervalSeconds?: number | null;
	}
	export interface CreateRecordingConfigurationPostBodyThumbnailConfigurationFormProperties {
		recordingMode: FormControl<RecordingMode | null | undefined>,
		resolution: FormControl<RenditionConfigurationRendition | null | undefined>,
		targetIntervalSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateRecordingConfigurationPostBodyThumbnailConfigurationFormGroup() {
		return new FormGroup<CreateRecordingConfigurationPostBodyThumbnailConfigurationFormProperties>({
			recordingMode: new FormControl<RecordingMode | null | undefined>(undefined),
			resolution: new FormControl<RenditionConfigurationRendition | null | undefined>(undefined),
			targetIntervalSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateStreamKeyPostBody {

		/**
		 * ARN of the channel for which to create the stream key.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: string;

		/** Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. */
		tags?: {[id: string]: string };
	}
	export interface CreateStreamKeyPostBodyFormProperties {

		/**
		 * ARN of the channel for which to create the stream key.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: FormControl<string | null | undefined>,

		/** Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateStreamKeyPostBodyFormGroup() {
		return new FormGroup<CreateStreamKeyPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeleteChannelPostBody {

		/**
		 * ARN of the channel to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: string;
	}
	export interface DeleteChannelPostBodyFormProperties {

		/**
		 * ARN of the channel to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteChannelPostBodyFormGroup() {
		return new FormGroup<DeleteChannelPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface DeletePlaybackKeyPairPostBody {

		/**
		 * ARN of the key pair to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: string;
	}
	export interface DeletePlaybackKeyPairPostBodyFormProperties {

		/**
		 * ARN of the key pair to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePlaybackKeyPairPostBodyFormGroup() {
		return new FormGroup<DeletePlaybackKeyPairPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:playback-key/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface DeleteRecordingConfigurationPostBody {

		/**
		 * ARN of the recording configuration to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		arn: string;
	}
	export interface DeleteRecordingConfigurationPostBodyFormProperties {

		/**
		 * ARN of the recording configuration to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecordingConfigurationPostBodyFormGroup() {
		return new FormGroup<DeleteRecordingConfigurationPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface DeleteStreamKeyPostBody {

		/**
		 * ARN of the stream key to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: string;
	}
	export interface DeleteStreamKeyPostBodyFormProperties {

		/**
		 * ARN of the stream key to be deleted.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStreamKeyPostBodyFormGroup() {
		return new FormGroup<DeleteStreamKeyPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:stream-key/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetChannelPostBody {

		/**
		 * ARN of the channel for which the configuration is to be retrieved.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: string;
	}
	export interface GetChannelPostBodyFormProperties {

		/**
		 * ARN of the channel for which the configuration is to be retrieved.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelPostBodyFormGroup() {
		return new FormGroup<GetChannelPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetPlaybackKeyPairPostBody {

		/**
		 * ARN of the key pair to be returned.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: string;
	}
	export interface GetPlaybackKeyPairPostBodyFormProperties {

		/**
		 * ARN of the key pair to be returned.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetPlaybackKeyPairPostBodyFormGroup() {
		return new FormGroup<GetPlaybackKeyPairPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:playback-key/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetRecordingConfigurationPostBody {

		/**
		 * ARN of the recording configuration to be retrieved.
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		arn: string;
	}
	export interface GetRecordingConfigurationPostBodyFormProperties {

		/**
		 * ARN of the recording configuration to be retrieved.
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetRecordingConfigurationPostBodyFormGroup() {
		return new FormGroup<GetRecordingConfigurationPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetStreamPostBody {

		/**
		 * Channel ARN for stream to be accessed.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: string;
	}
	export interface GetStreamPostBodyFormProperties {

		/**
		 * Channel ARN for stream to be accessed.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateGetStreamPostBodyFormGroup() {
		return new FormGroup<GetStreamPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetStreamKeyPostBody {

		/**
		 * ARN for the stream key to be retrieved.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: string;
	}
	export interface GetStreamKeyPostBodyFormProperties {

		/**
		 * ARN for the stream key to be retrieved.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetStreamKeyPostBodyFormGroup() {
		return new FormGroup<GetStreamKeyPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:stream-key/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface GetStreamSessionPostBody {

		/**
		 * ARN of the channel resource
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: string;

		/**
		 * Unique identifier for a live or previously live stream in the specified channel. If no <code>streamId</code> is provided, this returns the most recent stream session for the channel, if it exists.
		 * Max length: 26
		 * Min length: 26
		 */
		streamId?: string | null;
	}
	export interface GetStreamSessionPostBodyFormProperties {

		/**
		 * ARN of the channel resource
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for a live or previously live stream in the specified channel. If no <code>streamId</code> is provided, this returns the most recent stream session for the channel, if it exists.
		 * Max length: 26
		 * Min length: 26
		 */
		streamId: FormControl<string | null | undefined>,
	}
	export function CreateGetStreamSessionPostBodyFormGroup() {
		return new FormGroup<GetStreamSessionPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
			streamId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(26), Validators.maxLength(26), Validators.pattern('^st-[a-zA-Z0-9]+$')]),
		});

	}

	export interface ImportPlaybackKeyPairPostBody {

		/**
		 * Playback-key-pair name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/**
		 * The public portion of a customer-generated key pair.
		 * Required
		 */
		publicKeyMaterial: string;

		/** Any tags provided with the request are added to the playback key pair tags. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. */
		tags?: {[id: string]: string };
	}
	export interface ImportPlaybackKeyPairPostBodyFormProperties {

		/**
		 * Playback-key-pair name. The value does not need to be unique.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The public portion of a customer-generated key pair.
		 * Required
		 */
		publicKeyMaterial: FormControl<string | null | undefined>,

		/** Any tags provided with the request are added to the playback key pair tags. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateImportPlaybackKeyPairPostBodyFormGroup() {
		return new FormGroup<ImportPlaybackKeyPairPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			publicKeyMaterial: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ListChannelsPostBody {

		/**
		 * Filters the channel list to match the specified name.
		 * Max length: 128
		 * Min length: 0
		 */
		filterByName?: string | null;

		/**
		 * Filters the channel list to match the specified recording-configuration ARN.
		 * Max length: 128
		 * Min length: 0
		 */
		filterByRecordingConfigurationArn?: string | null;

		/**
		 * Maximum number of channels to return. Default: 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first channel to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListChannelsPostBodyFormProperties {

		/**
		 * Filters the channel list to match the specified name.
		 * Max length: 128
		 * Min length: 0
		 */
		filterByName: FormControl<string | null | undefined>,

		/**
		 * Filters the channel list to match the specified recording-configuration ARN.
		 * Max length: 128
		 * Min length: 0
		 */
		filterByRecordingConfigurationArn: FormControl<string | null | undefined>,

		/**
		 * Maximum number of channels to return. Default: 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first channel to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsPostBodyFormGroup() {
		return new FormGroup<ListChannelsPostBodyFormProperties>({
			filterByName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			filterByRecordingConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
		});

	}

	export interface ListPlaybackKeyPairsPostBody {

		/**
		 * Maximum number of key pairs to return. Default: your service quota or 100, whichever is smaller.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first key pair to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListPlaybackKeyPairsPostBodyFormProperties {

		/**
		 * Maximum number of key pairs to return. Default: your service quota or 100, whichever is smaller.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first key pair to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaybackKeyPairsPostBodyFormGroup() {
		return new FormGroup<ListPlaybackKeyPairsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
		});

	}

	export interface ListRecordingConfigurationsPostBody {

		/**
		 * Maximum number of recording configurations to return. Default: your service quota or 100, whichever is smaller.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first recording configuration to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListRecordingConfigurationsPostBodyFormProperties {

		/**
		 * Maximum number of recording configurations to return. Default: your service quota or 100, whichever is smaller.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first recording configuration to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecordingConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListRecordingConfigurationsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
		});

	}

	export interface ListStreamKeysPostBody {

		/**
		 * Channel ARN used to filter the list.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: string;

		/**
		 * Maximum number of streamKeys to return. Default: 1.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/**
		 * The first stream key to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListStreamKeysPostBodyFormProperties {

		/**
		 * Channel ARN used to filter the list.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: FormControl<string | null | undefined>,

		/**
		 * Maximum number of streamKeys to return. Default: 1.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first stream key to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamKeysPostBodyFormGroup() {
		return new FormGroup<ListStreamKeysPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
		});

	}

	export interface ListStreamSessionsPostBody {

		/**
		 * Channel ARN used to filter the list.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: string;

		/**
		 * Maximum number of streams to return. Default: 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListStreamSessionsPostBodyFormProperties {

		/**
		 * Channel ARN used to filter the list.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: FormControl<string | null | undefined>,

		/**
		 * Maximum number of streams to return. Default: 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamSessionsPostBodyFormGroup() {
		return new FormGroup<ListStreamSessionsPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
		});

	}

	export interface ListStreamsPostBody {

		/** Object specifying the stream attribute on which to filter. */
		filterBy?: ListStreamsPostBodyFilterBy;

		/**
		 * Maximum number of streams to return. Default: 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListStreamsPostBodyFormProperties {

		/**
		 * Maximum number of streams to return. Default: 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
		 * Max length: 1024
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsPostBodyFormGroup() {
		return new FormGroup<ListStreamsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('^[a-zA-Z0-9+/=_-]*$')]),
		});

	}

	export interface ListStreamsPostBodyFilterBy {
		health?: StreamHealth;
	}
	export interface ListStreamsPostBodyFilterByFormProperties {
		health: FormControl<StreamHealth | null | undefined>,
	}
	export function CreateListStreamsPostBodyFilterByFormGroup() {
		return new FormGroup<ListStreamsPostBodyFilterByFormProperties>({
			health: new FormControl<StreamHealth | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutMetadataPostBody {

		/**
		 * ARN of the channel into which metadata is inserted. This channel must have an active stream.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: string;

		/**
		 * Metadata to insert into the stream. Maximum: 1 KB per request.
		 * Required
		 * Min length: 1
		 */
		metadata: string;
	}
	export interface PutMetadataPostBodyFormProperties {

		/**
		 * ARN of the channel into which metadata is inserted. This channel must have an active stream.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: FormControl<string | null | undefined>,

		/**
		 * Metadata to insert into the stream. Maximum: 1 KB per request.
		 * Required
		 * Min length: 1
		 */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreatePutMetadataPostBodyFormGroup() {
		return new FormGroup<PutMetadataPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface StartViewerSessionRevocationPostBody {

		/**
		 * The ARN of the channel associated with the viewer session to revoke.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: string;

		/**
		 * The ID of the viewer associated with the viewer session to revoke. Do not use this field for personally identifying, confidential, or sensitive information.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		viewerId: string;

		/**
		 * An optional filter on which versions of the viewer session to revoke. All versions less than or equal to the specified version will be revoked. Default: 0.
		 * Minimum: 0
		 */
		viewerSessionVersionsLessThanOrEqualTo?: number | null;
	}
	export interface StartViewerSessionRevocationPostBodyFormProperties {

		/**
		 * The ARN of the channel associated with the viewer session to revoke.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the viewer associated with the viewer session to revoke. Do not use this field for personally identifying, confidential, or sensitive information.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		viewerId: FormControl<string | null | undefined>,

		/**
		 * An optional filter on which versions of the viewer session to revoke. All versions less than or equal to the specified version will be revoked. Default: 0.
		 * Minimum: 0
		 */
		viewerSessionVersionsLessThanOrEqualTo: FormControl<number | null | undefined>,
	}
	export function CreateStartViewerSessionRevocationPostBodyFormGroup() {
		return new FormGroup<StartViewerSessionRevocationPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
			viewerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			viewerSessionVersionsLessThanOrEqualTo: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface StopStreamPostBody {

		/**
		 * ARN of the channel for which the stream is to be stopped.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: string;
	}
	export interface StopStreamPostBodyFormProperties {

		/**
		 * ARN of the channel for which the stream is to be stopped.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateStopStreamPostBodyFormGroup() {
		return new FormGroup<StopStreamPostBodyFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
		});

	}

	export interface UpdateChannelPostBody {

		/**
		 * ARN of the channel to be updated.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: string;

		/** Whether the channel is private (enabled for playback authorization). */
		authorized?: boolean | null;

		/** Whether the channel allows insecure RTMP ingest. Default: <code>false</code>. */
		insecureIngest?: boolean | null;

		/** Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.) */
		latencyMode?: ChannelLatencyMode | null;

		/**
		 * Channel name.
		 * Max length: 128
		 * Min length: 0
		 */
		name?: string | null;

		/** Optional transcode preset for the channel. This is selectable only for <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty string (<code>""</code>). */
		preset?: TranscodePreset | null;

		/**
		 * Recording-configuration ARN. If this is set to an empty string, recording is disabled. A value other than an empty string indicates that recording is enabled
		 * Max length: 128
		 * Min length: 0
		 */
		recordingConfigurationArn?: string | null;

		/** <p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately.</i> Some types generate multiple qualities (renditions) from the original input; this automatically gives viewers the best experience for their devices and network conditions. Some types provide transcoded video; transcoding allows higher playback quality across a range of download speeds. Default: <code>STANDARD</code>. Valid values:</p> <ul> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input quality to viewers. The viewer’s video-quality choice is limited to the original input. Input resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p. Original audio is passed through.</p> </li> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default when you create a channel.</p> </li> <li> <p> <code>ADVANCED_SD</code>: Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at SD quality (480p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.</p> </li> <li> <p> <code>ADVANCED_HD</code>: Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at HD quality (720p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.</p> </li> </ul> <p>Optional <i>transcode presets</i> (available for the <code>ADVANCED</code> types) allow you to trade off available download bandwidth and video quality, to optimize the viewing experience. There are two presets:</p> <ul> <li> <p> <i>Constrained bandwidth delivery</i> uses a lower bitrate for each quality level. Use it if you have low download bandwidth and/or simple video content (e.g., talking heads)</p> </li> <li> <p> <i>Higher bandwidth delivery</i> uses a higher bitrate for each quality level. Use it if you have high download bandwidth and/or complex video content (e.g., flashes and quick scene changes).</p> </li> </ul> */
		type?: ChannelType | null;
	}
	export interface UpdateChannelPostBodyFormProperties {

		/**
		 * ARN of the channel to be updated.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/** Whether the channel is private (enabled for playback authorization). */
		authorized: FormControl<boolean | null | undefined>,

		/** Whether the channel allows insecure RTMP ingest. Default: <code>false</code>. */
		insecureIngest: FormControl<boolean | null | undefined>,

		/** Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.) */
		latencyMode: FormControl<ChannelLatencyMode | null | undefined>,

		/**
		 * Channel name.
		 * Max length: 128
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Optional transcode preset for the channel. This is selectable only for <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty string (<code>""</code>). */
		preset: FormControl<TranscodePreset | null | undefined>,

		/**
		 * Recording-configuration ARN. If this is set to an empty string, recording is disabled. A value other than an empty string indicates that recording is enabled
		 * Max length: 128
		 * Min length: 0
		 */
		recordingConfigurationArn: FormControl<string | null | undefined>,

		/** <p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable input resolution or bitrate, the stream probably will disconnect immediately.</i> Some types generate multiple qualities (renditions) from the original input; this automatically gives viewers the best experience for their devices and network conditions. Some types provide transcoded video; transcoding allows higher playback quality across a range of download speeds. Default: <code>STANDARD</code>. Valid values:</p> <ul> <li> <p> <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input quality to viewers. The viewer’s video-quality choice is limited to the original input. Input resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for resolutions between 480p and 1080p. Original audio is passed through.</p> </li> <li> <p> <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Transcoding allows higher playback quality across a range of download speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is transcoded only for renditions 360p and below; above that, audio is passed through. This is the default when you create a channel.</p> </li> <li> <p> <code>ADVANCED_SD</code>: Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at SD quality (480p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.</p> </li> <li> <p> <code>ADVANCED_HD</code>: Video is transcoded; multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5 Mbps; output is capped at HD quality (720p). You can select an optional transcode preset (see below). Audio for all renditions is transcoded, and an audio-only rendition is available.</p> </li> </ul> <p>Optional <i>transcode presets</i> (available for the <code>ADVANCED</code> types) allow you to trade off available download bandwidth and video quality, to optimize the viewing experience. There are two presets:</p> <ul> <li> <p> <i>Constrained bandwidth delivery</i> uses a lower bitrate for each quality level. Use it if you have low download bandwidth and/or simple video content (e.g., talking heads)</p> </li> <li> <p> <i>Higher bandwidth delivery</i> uses a higher bitrate for each quality level. Use it if you have high download bandwidth and/or complex video content (e.g., flashes and quick scene changes).</p> </li> </ul> */
		type: FormControl<ChannelType | null | undefined>,
	}
	export function CreateUpdateChannelPostBodyFormGroup() {
		return new FormGroup<UpdateChannelPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^arn:aws:[is]vs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$')]),
			authorized: new FormControl<boolean | null | undefined>(undefined),
			insecureIngest: new FormControl<boolean | null | undefined>(undefined),
			latencyMode: new FormControl<ChannelLatencyMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-_]*$')]),
			preset: new FormControl<TranscodePreset | null | undefined>(undefined),
			recordingConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(128), Validators.pattern('^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$')]),
			type: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

}

