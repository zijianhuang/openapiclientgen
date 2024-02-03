import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateMediaCapturePipelineResponse {
		MediaCapturePipeline?: MediaCapturePipeline;
	}
	export interface CreateMediaCapturePipelineResponseFormProperties {
	}
	export function CreateCreateMediaCapturePipelineResponseFormGroup() {
		return new FormGroup<CreateMediaCapturePipelineResponseFormProperties>({
		});

	}


	/** A media pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object. */
	export interface MediaCapturePipeline {
		MediaPipelineId?: string;
		MediaPipelineArn?: string;
		SourceType?: MediaPipelineSourceType;
		SourceArn?: string;
		Status?: MediaPipelineStatus;
		SinkType?: MediaPipelineSinkType;
		SinkArn?: string;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
	}

	/** A media pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object. */
	export interface MediaCapturePipelineFormProperties {
		MediaPipelineId: FormControl<string | null | undefined>,
		MediaPipelineArn: FormControl<string | null | undefined>,
		SourceType: FormControl<MediaPipelineSourceType | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		Status: FormControl<MediaPipelineStatus | null | undefined>,
		SinkType: FormControl<MediaPipelineSinkType | null | undefined>,
		SinkArn: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMediaCapturePipelineFormGroup() {
		return new FormGroup<MediaCapturePipelineFormProperties>({
			MediaPipelineId: new FormControl<string | null | undefined>(undefined),
			MediaPipelineArn: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<MediaPipelineSourceType | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MediaPipelineStatus | null | undefined>(undefined),
			SinkType: new FormControl<MediaPipelineSinkType | null | undefined>(undefined),
			SinkArn: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MediaPipelineSourceType { ChimeSdkMeeting = 'ChimeSdkMeeting' }

	export enum MediaPipelineStatus { Initializing = 'Initializing', InProgress = 'InProgress', Failed = 'Failed', Stopping = 'Stopping', Stopped = 'Stopped', Paused = 'Paused' }

	export enum MediaPipelineSinkType { S3Bucket = 'S3Bucket' }


	/** The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>. */
	export interface ChimeSdkMeetingConfiguration {
		SourceConfiguration?: SourceConfiguration;
		ArtifactsConfiguration?: ArtifactsConfiguration;
	}

	/** The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>. */
	export interface ChimeSdkMeetingConfigurationFormProperties {
	}
	export function CreateChimeSdkMeetingConfigurationFormGroup() {
		return new FormGroup<ChimeSdkMeetingConfigurationFormProperties>({
		});

	}


	/** Source configuration for a specified media pipeline. */
	export interface SourceConfiguration {
		SelectedVideoStreams?: SelectedVideoStreams;
	}

	/** Source configuration for a specified media pipeline. */
	export interface SourceConfigurationFormProperties {
	}
	export function CreateSourceConfigurationFormGroup() {
		return new FormGroup<SourceConfigurationFormProperties>({
		});

	}


	/** The video streams for a specified media pipeline. The total number of video streams can't exceed 25. */
	export interface SelectedVideoStreams {
		AttendeeIds?: Array<string>;
		ExternalUserIds?: Array<string>;
	}

	/** The video streams for a specified media pipeline. The total number of video streams can't exceed 25. */
	export interface SelectedVideoStreamsFormProperties {
	}
	export function CreateSelectedVideoStreamsFormGroup() {
		return new FormGroup<SelectedVideoStreamsFormProperties>({
		});

	}


	/** The configuration for the artifacts. */
	export interface ArtifactsConfiguration {

		/** Required */
		Audio: AudioArtifactsConfiguration;

		/** Required */
		Video: VideoArtifactsConfiguration;

		/** Required */
		Content: ContentArtifactsConfiguration;
		CompositedVideo?: CompositedVideoArtifactsConfiguration;
	}

	/** The configuration for the artifacts. */
	export interface ArtifactsConfigurationFormProperties {
	}
	export function CreateArtifactsConfigurationFormGroup() {
		return new FormGroup<ArtifactsConfigurationFormProperties>({
		});

	}


	/** The audio artifact configuration object. */
	export interface AudioArtifactsConfiguration {

		/** Required */
		MuxType: AudioMuxType;
	}

	/** The audio artifact configuration object. */
	export interface AudioArtifactsConfigurationFormProperties {

		/** Required */
		MuxType: FormControl<AudioMuxType | null | undefined>,
	}
	export function CreateAudioArtifactsConfigurationFormGroup() {
		return new FormGroup<AudioArtifactsConfigurationFormProperties>({
			MuxType: new FormControl<AudioMuxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AudioMuxType { AudioOnly = 'AudioOnly', AudioWithActiveSpeakerVideo = 'AudioWithActiveSpeakerVideo', AudioWithCompositedVideo = 'AudioWithCompositedVideo' }


	/** The video artifact configuration object. */
	export interface VideoArtifactsConfiguration {

		/** Required */
		State: ArtifactsState;
		MuxType?: VideoMuxType;
	}

	/** The video artifact configuration object. */
	export interface VideoArtifactsConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
		MuxType: FormControl<VideoMuxType | null | undefined>,
	}
	export function CreateVideoArtifactsConfigurationFormGroup() {
		return new FormGroup<VideoArtifactsConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
			MuxType: new FormControl<VideoMuxType | null | undefined>(undefined),
		});

	}

	export enum ArtifactsState { Enabled = 'Enabled', Disabled = 'Disabled' }

	export enum VideoMuxType { VideoOnly = 'VideoOnly' }


	/** The content artifact object. */
	export interface ContentArtifactsConfiguration {

		/** Required */
		State: ArtifactsState;
		MuxType?: ContentMuxType;
	}

	/** The content artifact object. */
	export interface ContentArtifactsConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
		MuxType: FormControl<ContentMuxType | null | undefined>,
	}
	export function CreateContentArtifactsConfigurationFormGroup() {
		return new FormGroup<ContentArtifactsConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
			MuxType: new FormControl<ContentMuxType | null | undefined>(undefined),
		});

	}

	export enum ContentMuxType { ContentOnly = 'ContentOnly' }


	/** Specifies the configuration for compositing video artifacts. */
	export interface CompositedVideoArtifactsConfiguration {
		Layout?: LayoutOption;
		Resolution?: ResolutionOption;

		/** Required */
		GridViewConfiguration: GridViewConfiguration;
	}

	/** Specifies the configuration for compositing video artifacts. */
	export interface CompositedVideoArtifactsConfigurationFormProperties {
		Layout: FormControl<LayoutOption | null | undefined>,
		Resolution: FormControl<ResolutionOption | null | undefined>,
	}
	export function CreateCompositedVideoArtifactsConfigurationFormGroup() {
		return new FormGroup<CompositedVideoArtifactsConfigurationFormProperties>({
			Layout: new FormControl<LayoutOption | null | undefined>(undefined),
			Resolution: new FormControl<ResolutionOption | null | undefined>(undefined),
		});

	}

	export enum LayoutOption { GridView = 'GridView' }

	export enum ResolutionOption { HD = 'HD', FHD = 'FHD' }


	/** Specifies the type of grid layout. */
	export interface GridViewConfiguration {

		/** Required */
		ContentShareLayout: ContentShareLayoutOption;
		PresenterOnlyConfiguration?: PresenterOnlyConfiguration;
		ActiveSpeakerOnlyConfiguration?: ActiveSpeakerOnlyConfiguration;
		HorizontalLayoutConfiguration?: HorizontalLayoutConfiguration;
		VerticalLayoutConfiguration?: VerticalLayoutConfiguration;
		VideoAttribute?: VideoAttribute;
		CanvasOrientation?: CanvasOrientation;
	}

	/** Specifies the type of grid layout. */
	export interface GridViewConfigurationFormProperties {

		/** Required */
		ContentShareLayout: FormControl<ContentShareLayoutOption | null | undefined>,
		CanvasOrientation: FormControl<CanvasOrientation | null | undefined>,
	}
	export function CreateGridViewConfigurationFormGroup() {
		return new FormGroup<GridViewConfigurationFormProperties>({
			ContentShareLayout: new FormControl<ContentShareLayoutOption | null | undefined>(undefined, [Validators.required]),
			CanvasOrientation: new FormControl<CanvasOrientation | null | undefined>(undefined),
		});

	}

	export enum ContentShareLayoutOption { PresenterOnly = 'PresenterOnly', Horizontal = 'Horizontal', Vertical = 'Vertical', ActiveSpeakerOnly = 'ActiveSpeakerOnly' }


	/** Defines the configuration for a presenter-only video tile. */
	export interface PresenterOnlyConfiguration {
		PresenterPosition?: PresenterPosition;
	}

	/** Defines the configuration for a presenter-only video tile. */
	export interface PresenterOnlyConfigurationFormProperties {
		PresenterPosition: FormControl<PresenterPosition | null | undefined>,
	}
	export function CreatePresenterOnlyConfigurationFormGroup() {
		return new FormGroup<PresenterOnlyConfigurationFormProperties>({
			PresenterPosition: new FormControl<PresenterPosition | null | undefined>(undefined),
		});

	}

	export enum PresenterPosition { TopLeft = 'TopLeft', TopRight = 'TopRight', BottomLeft = 'BottomLeft', BottomRight = 'BottomRight' }


	/** Defines the configuration for an <code>ActiveSpeakerOnly</code> video tile. */
	export interface ActiveSpeakerOnlyConfiguration {
		ActiveSpeakerPosition?: PresenterPosition;
	}

	/** Defines the configuration for an <code>ActiveSpeakerOnly</code> video tile. */
	export interface ActiveSpeakerOnlyConfigurationFormProperties {
		ActiveSpeakerPosition: FormControl<PresenterPosition | null | undefined>,
	}
	export function CreateActiveSpeakerOnlyConfigurationFormGroup() {
		return new FormGroup<ActiveSpeakerOnlyConfigurationFormProperties>({
			ActiveSpeakerPosition: new FormControl<PresenterPosition | null | undefined>(undefined),
		});

	}


	/** Defines the configuration settings for the horizontal layout. */
	export interface HorizontalLayoutConfiguration {
		TileOrder?: TileOrder;
		TilePosition?: HorizontalTilePosition;
		TileCount?: number | null;
		TileAspectRatio?: string;
	}

	/** Defines the configuration settings for the horizontal layout. */
	export interface HorizontalLayoutConfigurationFormProperties {
		TileOrder: FormControl<TileOrder | null | undefined>,
		TilePosition: FormControl<HorizontalTilePosition | null | undefined>,
		TileCount: FormControl<number | null | undefined>,
		TileAspectRatio: FormControl<string | null | undefined>,
	}
	export function CreateHorizontalLayoutConfigurationFormGroup() {
		return new FormGroup<HorizontalLayoutConfigurationFormProperties>({
			TileOrder: new FormControl<TileOrder | null | undefined>(undefined),
			TilePosition: new FormControl<HorizontalTilePosition | null | undefined>(undefined),
			TileCount: new FormControl<number | null | undefined>(undefined),
			TileAspectRatio: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TileOrder { JoinSequence = 'JoinSequence', SpeakerSequence = 'SpeakerSequence' }

	export enum HorizontalTilePosition { Top = 'Top', Bottom = 'Bottom' }


	/** Defines the configuration settings for a vertial layout. */
	export interface VerticalLayoutConfiguration {
		TileOrder?: TileOrder;
		TilePosition?: VerticalTilePosition;
		TileCount?: number | null;
		TileAspectRatio?: string;
	}

	/** Defines the configuration settings for a vertial layout. */
	export interface VerticalLayoutConfigurationFormProperties {
		TileOrder: FormControl<TileOrder | null | undefined>,
		TilePosition: FormControl<VerticalTilePosition | null | undefined>,
		TileCount: FormControl<number | null | undefined>,
		TileAspectRatio: FormControl<string | null | undefined>,
	}
	export function CreateVerticalLayoutConfigurationFormGroup() {
		return new FormGroup<VerticalLayoutConfigurationFormProperties>({
			TileOrder: new FormControl<TileOrder | null | undefined>(undefined),
			TilePosition: new FormControl<VerticalTilePosition | null | undefined>(undefined),
			TileCount: new FormControl<number | null | undefined>(undefined),
			TileAspectRatio: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VerticalTilePosition { Left = 'Left', Right = 'Right' }


	/** Defines the settings for a video tile. */
	export interface VideoAttribute {
		CornerRadius?: number | null;
		BorderColor?: BorderColor;
		HighlightColor?: BorderColor;
		BorderThickness?: number | null;
	}

	/** Defines the settings for a video tile. */
	export interface VideoAttributeFormProperties {
		CornerRadius: FormControl<number | null | undefined>,
		BorderColor: FormControl<BorderColor | null | undefined>,
		HighlightColor: FormControl<BorderColor | null | undefined>,
		BorderThickness: FormControl<number | null | undefined>,
	}
	export function CreateVideoAttributeFormGroup() {
		return new FormGroup<VideoAttributeFormProperties>({
			CornerRadius: new FormControl<number | null | undefined>(undefined),
			BorderColor: new FormControl<BorderColor | null | undefined>(undefined),
			HighlightColor: new FormControl<BorderColor | null | undefined>(undefined),
			BorderThickness: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BorderColor { Black = 'Black', Blue = 'Blue', Red = 'Red', Green = 'Green', White = 'White', Yellow = 'Yellow' }

	export enum CanvasOrientation { Landscape = 'Landscape', Portrait = 'Portrait' }


	/** A key/value pair that grants users access to meeting resources. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key/value pair that grants users access to meeting resources. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface UnauthorizedClientException {
	}
	export interface UnauthorizedClientExceptionFormProperties {
	}
	export function CreateUnauthorizedClientExceptionFormGroup() {
		return new FormGroup<UnauthorizedClientExceptionFormProperties>({
		});

	}

	export interface ThrottledClientException {
	}
	export interface ThrottledClientExceptionFormProperties {
	}
	export function CreateThrottledClientExceptionFormGroup() {
		return new FormGroup<ThrottledClientExceptionFormProperties>({
		});

	}

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ServiceFailureException {
	}
	export interface ServiceFailureExceptionFormProperties {
	}
	export function CreateServiceFailureExceptionFormGroup() {
		return new FormGroup<ServiceFailureExceptionFormProperties>({
		});

	}

	export interface CreateMediaConcatenationPipelineResponse {
		MediaConcatenationPipeline?: MediaConcatenationPipeline;
	}
	export interface CreateMediaConcatenationPipelineResponseFormProperties {
	}
	export function CreateCreateMediaConcatenationPipelineResponseFormGroup() {
		return new FormGroup<CreateMediaConcatenationPipelineResponseFormProperties>({
		});

	}


	/** Concatenates audio and video data from one or more data streams. */
	export interface MediaConcatenationPipeline {
		MediaPipelineId?: string;
		MediaPipelineArn?: string;
		Sources?: Array<ConcatenationSource>;
		Sinks?: Array<ConcatenationSink>;
		Status?: MediaPipelineStatus;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** Concatenates audio and video data from one or more data streams. */
	export interface MediaConcatenationPipelineFormProperties {
		MediaPipelineId: FormControl<string | null | undefined>,
		MediaPipelineArn: FormControl<string | null | undefined>,
		Status: FormControl<MediaPipelineStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMediaConcatenationPipelineFormGroup() {
		return new FormGroup<MediaConcatenationPipelineFormProperties>({
			MediaPipelineId: new FormControl<string | null | undefined>(undefined),
			MediaPipelineArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MediaPipelineStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The source type and media pipeline configuration settings in a configuration object. */
	export interface ConcatenationSource {

		/** Required */
		Type: ConcatenationSourceType;

		/** Required */
		MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfiguration;
	}

	/** The source type and media pipeline configuration settings in a configuration object. */
	export interface ConcatenationSourceFormProperties {

		/** Required */
		Type: FormControl<ConcatenationSourceType | null | undefined>,
	}
	export function CreateConcatenationSourceFormGroup() {
		return new FormGroup<ConcatenationSourceFormProperties>({
			Type: new FormControl<ConcatenationSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConcatenationSourceType { MediaCapturePipeline = 'MediaCapturePipeline' }


	/** The source configuration object of a media capture pipeline. */
	export interface MediaCapturePipelineSourceConfiguration {

		/** Required */
		MediaPipelineArn: string;

		/** Required */
		ChimeSdkMeetingConfiguration: ChimeSdkMeetingConcatenationConfiguration;
	}

	/** The source configuration object of a media capture pipeline. */
	export interface MediaCapturePipelineSourceConfigurationFormProperties {

		/** Required */
		MediaPipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaCapturePipelineSourceConfigurationFormGroup() {
		return new FormGroup<MediaCapturePipelineSourceConfigurationFormProperties>({
			MediaPipelineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration object of the Amazon Chime SDK meeting concatenation for a specified media pipeline. */
	export interface ChimeSdkMeetingConcatenationConfiguration {

		/** Required */
		ArtifactsConfiguration: ArtifactsConcatenationConfiguration;
	}

	/** The configuration object of the Amazon Chime SDK meeting concatenation for a specified media pipeline. */
	export interface ChimeSdkMeetingConcatenationConfigurationFormProperties {
	}
	export function CreateChimeSdkMeetingConcatenationConfigurationFormGroup() {
		return new FormGroup<ChimeSdkMeetingConcatenationConfigurationFormProperties>({
		});

	}


	/** The configuration for the artifacts concatenation. */
	export interface ArtifactsConcatenationConfiguration {

		/** Required */
		Audio: AudioConcatenationConfiguration;

		/** Required */
		Video: VideoConcatenationConfiguration;

		/** Required */
		Content: ContentConcatenationConfiguration;

		/** Required */
		DataChannel: DataChannelConcatenationConfiguration;

		/** Required */
		TranscriptionMessages: TranscriptionMessagesConcatenationConfiguration;

		/** Required */
		MeetingEvents: MeetingEventsConcatenationConfiguration;

		/** Required */
		CompositedVideo: CompositedVideoConcatenationConfiguration;
	}

	/** The configuration for the artifacts concatenation. */
	export interface ArtifactsConcatenationConfigurationFormProperties {
	}
	export function CreateArtifactsConcatenationConfigurationFormGroup() {
		return new FormGroup<ArtifactsConcatenationConfigurationFormProperties>({
		});

	}


	/** The audio artifact concatenation configuration object. */
	export interface AudioConcatenationConfiguration {

		/** Required */
		State: AudioArtifactsConcatenationState;
	}

	/** The audio artifact concatenation configuration object. */
	export interface AudioConcatenationConfigurationFormProperties {

		/** Required */
		State: FormControl<AudioArtifactsConcatenationState | null | undefined>,
	}
	export function CreateAudioConcatenationConfigurationFormGroup() {
		return new FormGroup<AudioConcatenationConfigurationFormProperties>({
			State: new FormControl<AudioArtifactsConcatenationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AudioArtifactsConcatenationState { Enabled = 'Enabled' }


	/** The configuration object of a video concatenation pipeline. */
	export interface VideoConcatenationConfiguration {

		/** Required */
		State: ArtifactsState;
	}

	/** The configuration object of a video concatenation pipeline. */
	export interface VideoConcatenationConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
	}
	export function CreateVideoConcatenationConfigurationFormGroup() {
		return new FormGroup<VideoConcatenationConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The composited content configuration object for a specified media pipeline.  */
	export interface ContentConcatenationConfiguration {

		/** Required */
		State: ArtifactsState;
	}

	/** The composited content configuration object for a specified media pipeline.  */
	export interface ContentConcatenationConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
	}
	export function CreateContentConcatenationConfigurationFormGroup() {
		return new FormGroup<ContentConcatenationConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The content configuration object's data channel. */
	export interface DataChannelConcatenationConfiguration {

		/** Required */
		State: ArtifactsState;
	}

	/** The content configuration object's data channel. */
	export interface DataChannelConcatenationConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
	}
	export function CreateDataChannelConcatenationConfigurationFormGroup() {
		return new FormGroup<DataChannelConcatenationConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration object for concatenating transcription messages. */
	export interface TranscriptionMessagesConcatenationConfiguration {

		/** Required */
		State: ArtifactsState;
	}

	/** The configuration object for concatenating transcription messages. */
	export interface TranscriptionMessagesConcatenationConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
	}
	export function CreateTranscriptionMessagesConcatenationConfigurationFormGroup() {
		return new FormGroup<TranscriptionMessagesConcatenationConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration object for an event concatenation pipeline. */
	export interface MeetingEventsConcatenationConfiguration {

		/** Required */
		State: ArtifactsState;
	}

	/** The configuration object for an event concatenation pipeline. */
	export interface MeetingEventsConcatenationConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
	}
	export function CreateMeetingEventsConcatenationConfigurationFormGroup() {
		return new FormGroup<MeetingEventsConcatenationConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The composited video configuration object for a specified media pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>. */
	export interface CompositedVideoConcatenationConfiguration {

		/** Required */
		State: ArtifactsState;
	}

	/** The composited video configuration object for a specified media pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>. */
	export interface CompositedVideoConcatenationConfigurationFormProperties {

		/** Required */
		State: FormControl<ArtifactsState | null | undefined>,
	}
	export function CreateCompositedVideoConcatenationConfigurationFormGroup() {
		return new FormGroup<CompositedVideoConcatenationConfigurationFormProperties>({
			State: new FormControl<ArtifactsState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The data sink of the configuration object. */
	export interface ConcatenationSink {

		/** Required */
		Type: MediaPipelineSinkType;

		/** Required */
		S3BucketSinkConfiguration: S3BucketSinkConfiguration;
	}

	/** The data sink of the configuration object. */
	export interface ConcatenationSinkFormProperties {

		/** Required */
		Type: FormControl<MediaPipelineSinkType | null | undefined>,
	}
	export function CreateConcatenationSinkFormGroup() {
		return new FormGroup<ConcatenationSinkFormProperties>({
			Type: new FormControl<MediaPipelineSinkType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration settings for the S3 bucket. */
	export interface S3BucketSinkConfiguration {

		/** Required */
		Destination: string;
	}

	/** The configuration settings for the S3 bucket. */
	export interface S3BucketSinkConfigurationFormProperties {

		/** Required */
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketSinkConfigurationFormGroup() {
		return new FormGroup<S3BucketSinkConfigurationFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMediaInsightsPipelineResponse {

		/** Required */
		MediaInsightsPipeline: MediaInsightsPipeline;
	}
	export interface CreateMediaInsightsPipelineResponseFormProperties {
	}
	export function CreateCreateMediaInsightsPipelineResponseFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelineResponseFormProperties>({
		});

	}


	/** A media pipeline that streams call analytics data. */
	export interface MediaInsightsPipeline {
		MediaPipelineId?: string;
		MediaPipelineArn?: string;
		MediaInsightsPipelineConfigurationArn?: string;
		Status?: MediaPipelineStatus;
		KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration;
		MediaInsightsRuntimeMetadata?: MediaInsightsRuntimeMetadata;
		KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration;
		S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration;
		CreatedTimestamp?: Date;
	}

	/** A media pipeline that streams call analytics data. */
	export interface MediaInsightsPipelineFormProperties {
		MediaPipelineId: FormControl<string | null | undefined>,
		MediaPipelineArn: FormControl<string | null | undefined>,
		MediaInsightsPipelineConfigurationArn: FormControl<string | null | undefined>,
		Status: FormControl<MediaPipelineStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMediaInsightsPipelineFormGroup() {
		return new FormGroup<MediaInsightsPipelineFormProperties>({
			MediaPipelineId: new FormControl<string | null | undefined>(undefined),
			MediaPipelineArn: new FormControl<string | null | undefined>(undefined),
			MediaInsightsPipelineConfigurationArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MediaPipelineStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The runtime configuration settings for the Kinesis video stream source. */
	export interface KinesisVideoStreamSourceRuntimeConfiguration {

		/** Required */
		Streams: Array<StreamConfiguration>;

		/** Required */
		MediaEncoding: MediaEncoding;

		/** Required */
		MediaSampleRate: number;
	}

	/** The runtime configuration settings for the Kinesis video stream source. */
	export interface KinesisVideoStreamSourceRuntimeConfigurationFormProperties {

		/** Required */
		MediaEncoding: FormControl<MediaEncoding | null | undefined>,

		/** Required */
		MediaSampleRate: FormControl<number | null | undefined>,
	}
	export function CreateKinesisVideoStreamSourceRuntimeConfigurationFormGroup() {
		return new FormGroup<KinesisVideoStreamSourceRuntimeConfigurationFormProperties>({
			MediaEncoding: new FormControl<MediaEncoding | null | undefined>(undefined, [Validators.required]),
			MediaSampleRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration settings for a stream. */
	export interface StreamConfiguration {

		/** Required */
		StreamArn: string;
		FragmentNumber?: string;

		/** Required */
		StreamChannelDefinition: StreamChannelDefinition;
	}

	/** The configuration settings for a stream. */
	export interface StreamConfigurationFormProperties {

		/** Required */
		StreamArn: FormControl<string | null | undefined>,
		FragmentNumber: FormControl<string | null | undefined>,
	}
	export function CreateStreamConfigurationFormGroup() {
		return new FormGroup<StreamConfigurationFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FragmentNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a streaming channel. */
	export interface StreamChannelDefinition {

		/** Required */
		NumberOfChannels: number;
		ChannelDefinitions?: Array<ChannelDefinition>;
	}

	/** Defines a streaming channel. */
	export interface StreamChannelDefinitionFormProperties {

		/** Required */
		NumberOfChannels: FormControl<number | null | undefined>,
	}
	export function CreateStreamChannelDefinitionFormGroup() {
		return new FormGroup<StreamChannelDefinitionFormProperties>({
			NumberOfChannels: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines an audio channel in a Kinesis video stream. */
	export interface ChannelDefinition {

		/** Required */
		ChannelId: number;
		ParticipantRole?: ParticipantRole;
	}

	/** Defines an audio channel in a Kinesis video stream. */
	export interface ChannelDefinitionFormProperties {

		/** Required */
		ChannelId: FormControl<number | null | undefined>,
		ParticipantRole: FormControl<ParticipantRole | null | undefined>,
	}
	export function CreateChannelDefinitionFormGroup() {
		return new FormGroup<ChannelDefinitionFormProperties>({
			ChannelId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ParticipantRole: new FormControl<ParticipantRole | null | undefined>(undefined),
		});

	}

	export enum ParticipantRole { AGENT = 'AGENT', CUSTOMER = 'CUSTOMER' }

	export enum MediaEncoding { pcm = 'pcm' }

	export interface MediaInsightsRuntimeMetadata {
	}
	export interface MediaInsightsRuntimeMetadataFormProperties {
	}
	export function CreateMediaInsightsRuntimeMetadataFormGroup() {
		return new FormGroup<MediaInsightsRuntimeMetadataFormProperties>({
		});

	}


	/** A structure that contains the runtime settings for recording a Kinesis video stream. */
	export interface KinesisVideoStreamRecordingSourceRuntimeConfiguration {

		/** Required */
		Streams: Array<RecordingStreamConfiguration>;

		/** Required */
		FragmentSelector: FragmentSelector;
	}

	/** A structure that contains the runtime settings for recording a Kinesis video stream. */
	export interface KinesisVideoStreamRecordingSourceRuntimeConfigurationFormProperties {
	}
	export function CreateKinesisVideoStreamRecordingSourceRuntimeConfigurationFormGroup() {
		return new FormGroup<KinesisVideoStreamRecordingSourceRuntimeConfigurationFormProperties>({
		});

	}


	/** A structure that holds the settings for recording media. */
	export interface RecordingStreamConfiguration {
		StreamArn?: string;
	}

	/** A structure that holds the settings for recording media. */
	export interface RecordingStreamConfigurationFormProperties {
		StreamArn: FormControl<string | null | undefined>,
	}
	export function CreateRecordingStreamConfigurationFormGroup() {
		return new FormGroup<RecordingStreamConfigurationFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, say a stream contains fragments with the following start timestamps:</p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p>A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04.</p> */
	export interface FragmentSelector {

		/** Required */
		FragmentSelectorType: FragmentSelectorType;

		/** Required */
		TimestampRange: TimestampRange;
	}

	/** <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, say a stream contains fragments with the following start timestamps:</p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p>A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04.</p> */
	export interface FragmentSelectorFormProperties {

		/** Required */
		FragmentSelectorType: FormControl<FragmentSelectorType | null | undefined>,
	}
	export function CreateFragmentSelectorFormGroup() {
		return new FormGroup<FragmentSelectorFormProperties>({
			FragmentSelectorType: new FormControl<FragmentSelectorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FragmentSelectorType { ProducerTimestamp = 'ProducerTimestamp', ServerTimestamp = 'ServerTimestamp' }


	/** The range of timestamps to return. */
	export interface TimestampRange {

		/** Required */
		StartTimestamp: Date;

		/** Required */
		EndTimestamp: Date;
	}

	/** The range of timestamps to return. */
	export interface TimestampRangeFormProperties {

		/** Required */
		StartTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		EndTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTimestampRangeFormGroup() {
		return new FormGroup<TimestampRangeFormProperties>({
			StartTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that holds the settings for transmitting media files to the Amazon S3 bucket. If specified, the settings in this structure override any settings in <code>S3RecordingSinkConfiguration</code>. */
	export interface S3RecordingSinkRuntimeConfiguration {

		/** Required */
		Destination: string;

		/** Required */
		RecordingFileFormat: RecordingFileFormat;
	}

	/** A structure that holds the settings for transmitting media files to the Amazon S3 bucket. If specified, the settings in this structure override any settings in <code>S3RecordingSinkConfiguration</code>. */
	export interface S3RecordingSinkRuntimeConfigurationFormProperties {

		/** Required */
		Destination: FormControl<string | null | undefined>,

		/** Required */
		RecordingFileFormat: FormControl<RecordingFileFormat | null | undefined>,
	}
	export function CreateS3RecordingSinkRuntimeConfigurationFormGroup() {
		return new FormGroup<S3RecordingSinkRuntimeConfigurationFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecordingFileFormat: new FormControl<RecordingFileFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordingFileFormat { Wav = 'Wav', Opus = 'Opus' }

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface CreateMediaInsightsPipelineConfigurationResponse {
		MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
	}
	export interface CreateMediaInsightsPipelineConfigurationResponseFormProperties {
	}
	export function CreateCreateMediaInsightsPipelineConfigurationResponseFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelineConfigurationResponseFormProperties>({
		});

	}


	/** A structure that contains the configuration settings for a media insights pipeline. */
	export interface MediaInsightsPipelineConfiguration {
		MediaInsightsPipelineConfigurationName?: string;
		MediaInsightsPipelineConfigurationArn?: string;
		ResourceAccessRoleArn?: string;
		RealTimeAlertConfiguration?: RealTimeAlertConfiguration;
		Elements?: Array<MediaInsightsPipelineConfigurationElement>;
		MediaInsightsPipelineConfigurationId?: string;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** A structure that contains the configuration settings for a media insights pipeline. */
	export interface MediaInsightsPipelineConfigurationFormProperties {
		MediaInsightsPipelineConfigurationName: FormControl<string | null | undefined>,
		MediaInsightsPipelineConfigurationArn: FormControl<string | null | undefined>,
		ResourceAccessRoleArn: FormControl<string | null | undefined>,
		MediaInsightsPipelineConfigurationId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMediaInsightsPipelineConfigurationFormGroup() {
		return new FormGroup<MediaInsightsPipelineConfigurationFormProperties>({
			MediaInsightsPipelineConfigurationName: new FormControl<string | null | undefined>(undefined),
			MediaInsightsPipelineConfigurationArn: new FormControl<string | null | undefined>(undefined),
			ResourceAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			MediaInsightsPipelineConfigurationId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A structure that contains the configuration settings for real-time alerts. */
	export interface RealTimeAlertConfiguration {
		Disabled?: boolean | null;
		Rules?: Array<RealTimeAlertRule>;
	}

	/** A structure that contains the configuration settings for real-time alerts. */
	export interface RealTimeAlertConfigurationFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRealTimeAlertConfigurationFormGroup() {
		return new FormGroup<RealTimeAlertConfigurationFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the words or phrases that trigger an alert. */
	export interface RealTimeAlertRule {

		/** Required */
		Type: RealTimeAlertRuleType;
		KeywordMatchConfiguration?: KeywordMatchConfiguration;
		SentimentConfiguration?: SentimentConfiguration;
		IssueDetectionConfiguration?: IssueDetectionConfiguration;
	}

	/** Specifies the words or phrases that trigger an alert. */
	export interface RealTimeAlertRuleFormProperties {

		/** Required */
		Type: FormControl<RealTimeAlertRuleType | null | undefined>,
	}
	export function CreateRealTimeAlertRuleFormGroup() {
		return new FormGroup<RealTimeAlertRuleFormProperties>({
			Type: new FormControl<RealTimeAlertRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RealTimeAlertRuleType { KeywordMatch = 'KeywordMatch', Sentiment = 'Sentiment', IssueDetection = 'IssueDetection' }


	/** A structure that contains the settings for a keyword match task. */
	export interface KeywordMatchConfiguration {

		/** Required */
		RuleName: string;

		/** Required */
		Keywords: Array<string>;
		Negate?: boolean | null;
	}

	/** A structure that contains the settings for a keyword match task. */
	export interface KeywordMatchConfigurationFormProperties {

		/** Required */
		RuleName: FormControl<string | null | undefined>,
		Negate: FormControl<boolean | null | undefined>,
	}
	export function CreateKeywordMatchConfigurationFormGroup() {
		return new FormGroup<KeywordMatchConfigurationFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A structure that contains the configuration settings for a sentiment analysis task. */
	export interface SentimentConfiguration {

		/** Required */
		RuleName: string;

		/** Required */
		SentimentType: SentimentType;

		/** Required */
		TimePeriod: number;
	}

	/** A structure that contains the configuration settings for a sentiment analysis task. */
	export interface SentimentConfigurationFormProperties {

		/** Required */
		RuleName: FormControl<string | null | undefined>,

		/** Required */
		SentimentType: FormControl<SentimentType | null | undefined>,

		/** Required */
		TimePeriod: FormControl<number | null | undefined>,
	}
	export function CreateSentimentConfigurationFormGroup() {
		return new FormGroup<SentimentConfigurationFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SentimentType: new FormControl<SentimentType | null | undefined>(undefined, [Validators.required]),
			TimePeriod: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SentimentType { NEGATIVE = 'NEGATIVE' }


	/** A structure that contains the configuration settings for an issue detection task. */
	export interface IssueDetectionConfiguration {

		/** Required */
		RuleName: string;
	}

	/** A structure that contains the configuration settings for an issue detection task. */
	export interface IssueDetectionConfigurationFormProperties {

		/** Required */
		RuleName: FormControl<string | null | undefined>,
	}
	export function CreateIssueDetectionConfigurationFormGroup() {
		return new FormGroup<IssueDetectionConfigurationFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An element in a media insights pipeline configuration. */
	export interface MediaInsightsPipelineConfigurationElement {

		/** Required */
		Type: MediaInsightsPipelineConfigurationElementType;
		AmazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfiguration;
		AmazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfiguration;
		KinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfiguration;
		S3RecordingSinkConfiguration?: S3RecordingSinkConfiguration;
		VoiceAnalyticsProcessorConfiguration?: VoiceAnalyticsProcessorConfiguration;
		LambdaFunctionSinkConfiguration?: LambdaFunctionSinkConfiguration;
		SqsQueueSinkConfiguration?: SqsQueueSinkConfiguration;
		SnsTopicSinkConfiguration?: SnsTopicSinkConfiguration;
	}

	/** An element in a media insights pipeline configuration. */
	export interface MediaInsightsPipelineConfigurationElementFormProperties {

		/** Required */
		Type: FormControl<MediaInsightsPipelineConfigurationElementType | null | undefined>,
	}
	export function CreateMediaInsightsPipelineConfigurationElementFormGroup() {
		return new FormGroup<MediaInsightsPipelineConfigurationElementFormProperties>({
			Type: new FormControl<MediaInsightsPipelineConfigurationElementType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MediaInsightsPipelineConfigurationElementType { AmazonTranscribeCallAnalyticsProcessor = 'AmazonTranscribeCallAnalyticsProcessor', VoiceAnalyticsProcessor = 'VoiceAnalyticsProcessor', AmazonTranscribeProcessor = 'AmazonTranscribeProcessor', KinesisDataStreamSink = 'KinesisDataStreamSink', LambdaFunctionSink = 'LambdaFunctionSink', SqsQueueSink = 'SqsQueueSink', SnsTopicSink = 'SnsTopicSink', S3RecordingSink = 'S3RecordingSink' }


	/** A structure that contains the configuration settings for an Amazon Transcribe call analytics processor. */
	export interface AmazonTranscribeCallAnalyticsProcessorConfiguration {

		/** Required */
		LanguageCode: CallAnalyticsLanguageCode;
		VocabularyName?: string;
		VocabularyFilterName?: string;
		VocabularyFilterMethod?: VocabularyFilterMethod;
		LanguageModelName?: string;
		EnablePartialResultsStabilization?: boolean | null;
		PartialResultsStability?: PartialResultsStability;
		ContentIdentificationType?: ContentType;
		ContentRedactionType?: ContentType;
		PiiEntityTypes?: string;
		FilterPartialResults?: boolean | null;
		PostCallAnalyticsSettings?: PostCallAnalyticsSettings;
		CallAnalyticsStreamCategories?: Array<string>;
	}

	/** A structure that contains the configuration settings for an Amazon Transcribe call analytics processor. */
	export interface AmazonTranscribeCallAnalyticsProcessorConfigurationFormProperties {

		/** Required */
		LanguageCode: FormControl<CallAnalyticsLanguageCode | null | undefined>,
		VocabularyName: FormControl<string | null | undefined>,
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyFilterMethod: FormControl<VocabularyFilterMethod | null | undefined>,
		LanguageModelName: FormControl<string | null | undefined>,
		EnablePartialResultsStabilization: FormControl<boolean | null | undefined>,
		PartialResultsStability: FormControl<PartialResultsStability | null | undefined>,
		ContentIdentificationType: FormControl<ContentType | null | undefined>,
		ContentRedactionType: FormControl<ContentType | null | undefined>,
		PiiEntityTypes: FormControl<string | null | undefined>,
		FilterPartialResults: FormControl<boolean | null | undefined>,
	}
	export function CreateAmazonTranscribeCallAnalyticsProcessorConfigurationFormGroup() {
		return new FormGroup<AmazonTranscribeCallAnalyticsProcessorConfigurationFormProperties>({
			LanguageCode: new FormControl<CallAnalyticsLanguageCode | null | undefined>(undefined, [Validators.required]),
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterMethod: new FormControl<VocabularyFilterMethod | null | undefined>(undefined),
			LanguageModelName: new FormControl<string | null | undefined>(undefined),
			EnablePartialResultsStabilization: new FormControl<boolean | null | undefined>(undefined),
			PartialResultsStability: new FormControl<PartialResultsStability | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<ContentType | null | undefined>(undefined),
			ContentRedactionType: new FormControl<ContentType | null | undefined>(undefined),
			PiiEntityTypes: new FormControl<string | null | undefined>(undefined),
			FilterPartialResults: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CallAnalyticsLanguageCode { 'en-US' = 'en-US', 'en-GB' = 'en-GB', 'es-US' = 'es-US', 'fr-CA' = 'fr-CA', 'fr-FR' = 'fr-FR', 'en-AU' = 'en-AU', 'it-IT' = 'it-IT', 'de-DE' = 'de-DE', 'pt-BR' = 'pt-BR' }

	export enum VocabularyFilterMethod { remove = 'remove', mask = 'mask', tag = 'tag' }

	export enum PartialResultsStability { high = 'high', medium = 'medium', low = 'low' }

	export enum ContentType { PII = 'PII' }


	/** <p>Allows you to specify additional settings for your Call Analytics post-call request, including output locations for your redacted transcript, which IAM role to use, and which encryption key to use.</p> <p> <code>DataAccessRoleArn</code> and <code>OutputLocation</code> are required fields.</p> <p> <code>PostCallAnalyticsSettings</code> provides the same insights as a Call Analytics post-call transcription. For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html">Post-call analytics with real-time transcriptions</a> in the <i>Amazon Transcribe Developer Guide</i>.</p> */
	export interface PostCallAnalyticsSettings {

		/** Required */
		OutputLocation: string;

		/** Required */
		DataAccessRoleArn: string;
		ContentRedactionOutput?: ContentRedactionOutput;
		OutputEncryptionKMSKeyId?: string;
	}

	/** <p>Allows you to specify additional settings for your Call Analytics post-call request, including output locations for your redacted transcript, which IAM role to use, and which encryption key to use.</p> <p> <code>DataAccessRoleArn</code> and <code>OutputLocation</code> are required fields.</p> <p> <code>PostCallAnalyticsSettings</code> provides the same insights as a Call Analytics post-call transcription. For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-post-call.html">Post-call analytics with real-time transcriptions</a> in the <i>Amazon Transcribe Developer Guide</i>.</p> */
	export interface PostCallAnalyticsSettingsFormProperties {

		/** Required */
		OutputLocation: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		ContentRedactionOutput: FormControl<ContentRedactionOutput | null | undefined>,
		OutputEncryptionKMSKeyId: FormControl<string | null | undefined>,
	}
	export function CreatePostCallAnalyticsSettingsFormGroup() {
		return new FormGroup<PostCallAnalyticsSettingsFormProperties>({
			OutputLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContentRedactionOutput: new FormControl<ContentRedactionOutput | null | undefined>(undefined),
			OutputEncryptionKMSKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContentRedactionOutput { redacted = 'redacted', redacted_and_unredacted = 'redacted_and_unredacted' }


	/** A structure that contains the configuration settings for an Amazon Transcribe processor. */
	export interface AmazonTranscribeProcessorConfiguration {
		LanguageCode?: CallAnalyticsLanguageCode;
		VocabularyName?: string;
		VocabularyFilterName?: string;
		VocabularyFilterMethod?: VocabularyFilterMethod;
		ShowSpeakerLabel?: boolean | null;
		EnablePartialResultsStabilization?: boolean | null;
		PartialResultsStability?: PartialResultsStability;
		ContentIdentificationType?: ContentType;
		ContentRedactionType?: ContentType;
		PiiEntityTypes?: string;
		LanguageModelName?: string;
		FilterPartialResults?: boolean | null;
		IdentifyLanguage?: boolean | null;
		LanguageOptions?: string;
		PreferredLanguage?: CallAnalyticsLanguageCode;
		VocabularyNames?: string;
		VocabularyFilterNames?: string;
	}

	/** A structure that contains the configuration settings for an Amazon Transcribe processor. */
	export interface AmazonTranscribeProcessorConfigurationFormProperties {
		LanguageCode: FormControl<CallAnalyticsLanguageCode | null | undefined>,
		VocabularyName: FormControl<string | null | undefined>,
		VocabularyFilterName: FormControl<string | null | undefined>,
		VocabularyFilterMethod: FormControl<VocabularyFilterMethod | null | undefined>,
		ShowSpeakerLabel: FormControl<boolean | null | undefined>,
		EnablePartialResultsStabilization: FormControl<boolean | null | undefined>,
		PartialResultsStability: FormControl<PartialResultsStability | null | undefined>,
		ContentIdentificationType: FormControl<ContentType | null | undefined>,
		ContentRedactionType: FormControl<ContentType | null | undefined>,
		PiiEntityTypes: FormControl<string | null | undefined>,
		LanguageModelName: FormControl<string | null | undefined>,
		FilterPartialResults: FormControl<boolean | null | undefined>,
		IdentifyLanguage: FormControl<boolean | null | undefined>,
		LanguageOptions: FormControl<string | null | undefined>,
		PreferredLanguage: FormControl<CallAnalyticsLanguageCode | null | undefined>,
		VocabularyNames: FormControl<string | null | undefined>,
		VocabularyFilterNames: FormControl<string | null | undefined>,
	}
	export function CreateAmazonTranscribeProcessorConfigurationFormGroup() {
		return new FormGroup<AmazonTranscribeProcessorConfigurationFormProperties>({
			LanguageCode: new FormControl<CallAnalyticsLanguageCode | null | undefined>(undefined),
			VocabularyName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterName: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterMethod: new FormControl<VocabularyFilterMethod | null | undefined>(undefined),
			ShowSpeakerLabel: new FormControl<boolean | null | undefined>(undefined),
			EnablePartialResultsStabilization: new FormControl<boolean | null | undefined>(undefined),
			PartialResultsStability: new FormControl<PartialResultsStability | null | undefined>(undefined),
			ContentIdentificationType: new FormControl<ContentType | null | undefined>(undefined),
			ContentRedactionType: new FormControl<ContentType | null | undefined>(undefined),
			PiiEntityTypes: new FormControl<string | null | undefined>(undefined),
			LanguageModelName: new FormControl<string | null | undefined>(undefined),
			FilterPartialResults: new FormControl<boolean | null | undefined>(undefined),
			IdentifyLanguage: new FormControl<boolean | null | undefined>(undefined),
			LanguageOptions: new FormControl<string | null | undefined>(undefined),
			PreferredLanguage: new FormControl<CallAnalyticsLanguageCode | null | undefined>(undefined),
			VocabularyNames: new FormControl<string | null | undefined>(undefined),
			VocabularyFilterNames: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains the configuration settings for a Kinesis Data Stream sink. */
	export interface KinesisDataStreamSinkConfiguration {
		InsightsTarget?: string;
	}

	/** A structure that contains the configuration settings for a Kinesis Data Stream sink. */
	export interface KinesisDataStreamSinkConfigurationFormProperties {
		InsightsTarget: FormControl<string | null | undefined>,
	}
	export function CreateKinesisDataStreamSinkConfigurationFormGroup() {
		return new FormGroup<KinesisDataStreamSinkConfigurationFormProperties>({
			InsightsTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure that holds the settings for transmitting media to the Amazon S3 bucket. These values are used as defaults if <code>S3RecordingSinkRuntimeConfiguration</code> is not specified. */
	export interface S3RecordingSinkConfiguration {
		Destination?: string;
		RecordingFileFormat?: RecordingFileFormat;
	}

	/** The structure that holds the settings for transmitting media to the Amazon S3 bucket. These values are used as defaults if <code>S3RecordingSinkRuntimeConfiguration</code> is not specified. */
	export interface S3RecordingSinkConfigurationFormProperties {
		Destination: FormControl<string | null | undefined>,
		RecordingFileFormat: FormControl<RecordingFileFormat | null | undefined>,
	}
	export function CreateS3RecordingSinkConfigurationFormGroup() {
		return new FormGroup<S3RecordingSinkConfigurationFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
			RecordingFileFormat: new FormControl<RecordingFileFormat | null | undefined>(undefined),
		});

	}


	/** The configuration settings for a voice analytics processor. */
	export interface VoiceAnalyticsProcessorConfiguration {
		SpeakerSearchStatus?: ArtifactsState;
		VoiceToneAnalysisStatus?: ArtifactsState;
	}

	/** The configuration settings for a voice analytics processor. */
	export interface VoiceAnalyticsProcessorConfigurationFormProperties {
		SpeakerSearchStatus: FormControl<ArtifactsState | null | undefined>,
		VoiceToneAnalysisStatus: FormControl<ArtifactsState | null | undefined>,
	}
	export function CreateVoiceAnalyticsProcessorConfigurationFormGroup() {
		return new FormGroup<VoiceAnalyticsProcessorConfigurationFormProperties>({
			SpeakerSearchStatus: new FormControl<ArtifactsState | null | undefined>(undefined),
			VoiceToneAnalysisStatus: new FormControl<ArtifactsState | null | undefined>(undefined),
		});

	}


	/** A structure that contains the configuration settings for an AWS Lambda function's data sink. */
	export interface LambdaFunctionSinkConfiguration {
		InsightsTarget?: string;
	}

	/** A structure that contains the configuration settings for an AWS Lambda function's data sink. */
	export interface LambdaFunctionSinkConfigurationFormProperties {
		InsightsTarget: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionSinkConfigurationFormGroup() {
		return new FormGroup<LambdaFunctionSinkConfigurationFormProperties>({
			InsightsTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration settings for the SQS sink. */
	export interface SqsQueueSinkConfiguration {
		InsightsTarget?: string;
	}

	/** The configuration settings for the SQS sink. */
	export interface SqsQueueSinkConfigurationFormProperties {
		InsightsTarget: FormControl<string | null | undefined>,
	}
	export function CreateSqsQueueSinkConfigurationFormGroup() {
		return new FormGroup<SqsQueueSinkConfigurationFormProperties>({
			InsightsTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration settings for the SNS topic sink. */
	export interface SnsTopicSinkConfiguration {
		InsightsTarget?: string;
	}

	/** The configuration settings for the SNS topic sink. */
	export interface SnsTopicSinkConfigurationFormProperties {
		InsightsTarget: FormControl<string | null | undefined>,
	}
	export function CreateSnsTopicSinkConfigurationFormGroup() {
		return new FormGroup<SnsTopicSinkConfigurationFormProperties>({
			InsightsTarget: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMediaLiveConnectorPipelineResponse {
		MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
	}
	export interface CreateMediaLiveConnectorPipelineResponseFormProperties {
	}
	export function CreateCreateMediaLiveConnectorPipelineResponseFormGroup() {
		return new FormGroup<CreateMediaLiveConnectorPipelineResponseFormProperties>({
		});

	}


	/** The connector pipeline. */
	export interface MediaLiveConnectorPipeline {
		Sources?: Array<LiveConnectorSourceConfiguration>;
		Sinks?: Array<LiveConnectorSinkConfiguration>;
		MediaPipelineId?: string;
		MediaPipelineArn?: string;
		Status?: MediaPipelineStatus;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** The connector pipeline. */
	export interface MediaLiveConnectorPipelineFormProperties {
		MediaPipelineId: FormControl<string | null | undefined>,
		MediaPipelineArn: FormControl<string | null | undefined>,
		Status: FormControl<MediaPipelineStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMediaLiveConnectorPipelineFormGroup() {
		return new FormGroup<MediaLiveConnectorPipelineFormProperties>({
			MediaPipelineId: new FormControl<string | null | undefined>(undefined),
			MediaPipelineArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MediaPipelineStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The data source configuration object of a streaming media pipeline. */
	export interface LiveConnectorSourceConfiguration {

		/** Required */
		SourceType: MediaPipelineSourceType;

		/** Required */
		ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfiguration;
	}

	/** The data source configuration object of a streaming media pipeline. */
	export interface LiveConnectorSourceConfigurationFormProperties {

		/** Required */
		SourceType: FormControl<MediaPipelineSourceType | null | undefined>,
	}
	export function CreateLiveConnectorSourceConfigurationFormGroup() {
		return new FormGroup<LiveConnectorSourceConfigurationFormProperties>({
			SourceType: new FormControl<MediaPipelineSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The media pipeline's configuration object. */
	export interface ChimeSdkMeetingLiveConnectorConfiguration {

		/** Required */
		Arn: string;

		/** Required */
		MuxType: LiveConnectorMuxType;
		CompositedVideo?: CompositedVideoArtifactsConfiguration;
		SourceConfiguration?: SourceConfiguration;
	}

	/** The media pipeline's configuration object. */
	export interface ChimeSdkMeetingLiveConnectorConfigurationFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		MuxType: FormControl<LiveConnectorMuxType | null | undefined>,
	}
	export function CreateChimeSdkMeetingLiveConnectorConfigurationFormGroup() {
		return new FormGroup<ChimeSdkMeetingLiveConnectorConfigurationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MuxType: new FormControl<LiveConnectorMuxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LiveConnectorMuxType { AudioWithCompositedVideo = 'AudioWithCompositedVideo', AudioWithActiveSpeakerVideo = 'AudioWithActiveSpeakerVideo' }


	/** The media pipeline's sink configuration settings. */
	export interface LiveConnectorSinkConfiguration {

		/** Required */
		SinkType: LiveConnectorSinkType;

		/** Required */
		RTMPConfiguration: LiveConnectorRTMPConfiguration;
	}

	/** The media pipeline's sink configuration settings. */
	export interface LiveConnectorSinkConfigurationFormProperties {

		/** Required */
		SinkType: FormControl<LiveConnectorSinkType | null | undefined>,
	}
	export function CreateLiveConnectorSinkConfigurationFormGroup() {
		return new FormGroup<LiveConnectorSinkConfigurationFormProperties>({
			SinkType: new FormControl<LiveConnectorSinkType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LiveConnectorSinkType { RTMP = 'RTMP' }


	/** The media pipeline's RTMP configuration object. */
	export interface LiveConnectorRTMPConfiguration {

		/** Required */
		Url: string;
		AudioChannels?: AudioChannelsOption;
		AudioSampleRate?: string;
	}

	/** The media pipeline's RTMP configuration object. */
	export interface LiveConnectorRTMPConfigurationFormProperties {

		/** Required */
		Url: FormControl<string | null | undefined>,
		AudioChannels: FormControl<AudioChannelsOption | null | undefined>,
		AudioSampleRate: FormControl<string | null | undefined>,
	}
	export function CreateLiveConnectorRTMPConfigurationFormGroup() {
		return new FormGroup<LiveConnectorRTMPConfigurationFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AudioChannels: new FormControl<AudioChannelsOption | null | undefined>(undefined),
			AudioSampleRate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AudioChannelsOption { Stereo = 'Stereo', Mono = 'Mono' }

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface GetMediaCapturePipelineResponse {
		MediaCapturePipeline?: MediaCapturePipeline;
	}
	export interface GetMediaCapturePipelineResponseFormProperties {
	}
	export function CreateGetMediaCapturePipelineResponseFormGroup() {
		return new FormGroup<GetMediaCapturePipelineResponseFormProperties>({
		});

	}

	export interface GetMediaInsightsPipelineConfigurationResponse {
		MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
	}
	export interface GetMediaInsightsPipelineConfigurationResponseFormProperties {
	}
	export function CreateGetMediaInsightsPipelineConfigurationResponseFormGroup() {
		return new FormGroup<GetMediaInsightsPipelineConfigurationResponseFormProperties>({
		});

	}

	export interface GetMediaPipelineResponse {
		MediaPipeline?: MediaPipeline;
	}
	export interface GetMediaPipelineResponseFormProperties {
	}
	export function CreateGetMediaPipelineResponseFormGroup() {
		return new FormGroup<GetMediaPipelineResponseFormProperties>({
		});

	}


	/** A pipeline consisting of a media capture, media concatenation, or live-streaming pipeline. */
	export interface MediaPipeline {
		MediaCapturePipeline?: MediaCapturePipeline;
		MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
		MediaConcatenationPipeline?: MediaConcatenationPipeline;
		MediaInsightsPipeline?: MediaInsightsPipeline;
	}

	/** A pipeline consisting of a media capture, media concatenation, or live-streaming pipeline. */
	export interface MediaPipelineFormProperties {
	}
	export function CreateMediaPipelineFormGroup() {
		return new FormGroup<MediaPipelineFormProperties>({
		});

	}

	export interface ListMediaCapturePipelinesResponse {
		MediaCapturePipelines?: Array<MediaCapturePipelineSummary>;
		NextToken?: string;
	}
	export interface ListMediaCapturePipelinesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMediaCapturePipelinesResponseFormGroup() {
		return new FormGroup<ListMediaCapturePipelinesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary data of a media capture pipeline. */
	export interface MediaCapturePipelineSummary {
		MediaPipelineId?: string;
		MediaPipelineArn?: string;
	}

	/** The summary data of a media capture pipeline. */
	export interface MediaCapturePipelineSummaryFormProperties {
		MediaPipelineId: FormControl<string | null | undefined>,
		MediaPipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaCapturePipelineSummaryFormGroup() {
		return new FormGroup<MediaCapturePipelineSummaryFormProperties>({
			MediaPipelineId: new FormControl<string | null | undefined>(undefined),
			MediaPipelineArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMediaInsightsPipelineConfigurationsResponse {
		MediaInsightsPipelineConfigurations?: Array<MediaInsightsPipelineConfigurationSummary>;
		NextToken?: string;
	}
	export interface ListMediaInsightsPipelineConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMediaInsightsPipelineConfigurationsResponseFormGroup() {
		return new FormGroup<ListMediaInsightsPipelineConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the media insights pipeline configuration. */
	export interface MediaInsightsPipelineConfigurationSummary {
		MediaInsightsPipelineConfigurationName?: string;
		MediaInsightsPipelineConfigurationId?: string;
		MediaInsightsPipelineConfigurationArn?: string;
	}

	/** A summary of the media insights pipeline configuration. */
	export interface MediaInsightsPipelineConfigurationSummaryFormProperties {
		MediaInsightsPipelineConfigurationName: FormControl<string | null | undefined>,
		MediaInsightsPipelineConfigurationId: FormControl<string | null | undefined>,
		MediaInsightsPipelineConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaInsightsPipelineConfigurationSummaryFormGroup() {
		return new FormGroup<MediaInsightsPipelineConfigurationSummaryFormProperties>({
			MediaInsightsPipelineConfigurationName: new FormControl<string | null | undefined>(undefined),
			MediaInsightsPipelineConfigurationId: new FormControl<string | null | undefined>(undefined),
			MediaInsightsPipelineConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMediaPipelinesResponse {
		MediaPipelines?: Array<MediaPipelineSummary>;
		NextToken?: string;
	}
	export interface ListMediaPipelinesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMediaPipelinesResponseFormGroup() {
		return new FormGroup<ListMediaPipelinesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the media pipeline. */
	export interface MediaPipelineSummary {
		MediaPipelineId?: string;
		MediaPipelineArn?: string;
	}

	/** The summary of the media pipeline. */
	export interface MediaPipelineSummaryFormProperties {
		MediaPipelineId: FormControl<string | null | undefined>,
		MediaPipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaPipelineSummaryFormGroup() {
		return new FormGroup<MediaPipelineSummaryFormProperties>({
			MediaPipelineId: new FormControl<string | null | undefined>(undefined),
			MediaPipelineArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface UpdateMediaInsightsPipelineConfigurationResponse {
		MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
	}
	export interface UpdateMediaInsightsPipelineConfigurationResponseFormProperties {
	}
	export function CreateUpdateMediaInsightsPipelineConfigurationResponseFormGroup() {
		return new FormGroup<UpdateMediaInsightsPipelineConfigurationResponseFormProperties>({
		});

	}

	export enum ActiveSpeakerPosition { TopLeft = 'TopLeft', TopRight = 'TopRight', BottomLeft = 'BottomLeft', BottomRight = 'BottomRight' }

	export enum ArtifactsConcatenationState { Enabled = 'Enabled', Disabled = 'Disabled' }

	export enum ConcatenationSinkType { S3Bucket = 'S3Bucket' }

	export interface CreateMediaCapturePipelineRequest {

		/** Required */
		SourceType: MediaPipelineSourceType;

		/** Required */
		SourceArn: string;

		/** Required */
		SinkType: MediaPipelineSinkType;

		/** Required */
		SinkArn: string;
		ClientRequestToken?: string;
		ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
		Tags?: Array<Tag>;
	}
	export interface CreateMediaCapturePipelineRequestFormProperties {

		/** Required */
		SourceType: FormControl<MediaPipelineSourceType | null | undefined>,

		/** Required */
		SourceArn: FormControl<string | null | undefined>,

		/** Required */
		SinkType: FormControl<MediaPipelineSinkType | null | undefined>,

		/** Required */
		SinkArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaCapturePipelineRequestFormGroup() {
		return new FormGroup<CreateMediaCapturePipelineRequestFormProperties>({
			SourceType: new FormControl<MediaPipelineSourceType | null | undefined>(undefined, [Validators.required]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SinkType: new FormControl<MediaPipelineSinkType | null | undefined>(undefined, [Validators.required]),
			SinkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMediaConcatenationPipelineRequest {

		/** Required */
		Sources: Array<ConcatenationSource>;

		/** Required */
		Sinks: Array<ConcatenationSink>;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateMediaConcatenationPipelineRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaConcatenationPipelineRequestFormGroup() {
		return new FormGroup<CreateMediaConcatenationPipelineRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMediaInsightsPipelineConfigurationRequest {

		/** Required */
		MediaInsightsPipelineConfigurationName: string;

		/** Required */
		ResourceAccessRoleArn: string;
		RealTimeAlertConfiguration?: RealTimeAlertConfiguration;

		/** Required */
		Elements: Array<MediaInsightsPipelineConfigurationElement>;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
	}
	export interface CreateMediaInsightsPipelineConfigurationRequestFormProperties {

		/** Required */
		MediaInsightsPipelineConfigurationName: FormControl<string | null | undefined>,

		/** Required */
		ResourceAccessRoleArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaInsightsPipelineConfigurationRequestFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelineConfigurationRequestFormProperties>({
			MediaInsightsPipelineConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMediaInsightsPipelineRequest {

		/** Required */
		MediaInsightsPipelineConfigurationArn: string;
		KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration;
		MediaInsightsRuntimeMetadata?: MediaInsightsRuntimeMetadata;
		KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration;
		S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration;
		Tags?: Array<Tag>;
		ClientRequestToken?: string;
	}
	export interface CreateMediaInsightsPipelineRequestFormProperties {

		/** Required */
		MediaInsightsPipelineConfigurationArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaInsightsPipelineRequestFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelineRequestFormProperties>({
			MediaInsightsPipelineConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMediaLiveConnectorPipelineRequest {

		/** Required */
		Sources: Array<LiveConnectorSourceConfiguration>;

		/** Required */
		Sinks: Array<LiveConnectorSinkConfiguration>;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateMediaLiveConnectorPipelineRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaLiveConnectorPipelineRequestFormGroup() {
		return new FormGroup<CreateMediaLiveConnectorPipelineRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMediaCapturePipelineRequest {
	}
	export interface DeleteMediaCapturePipelineRequestFormProperties {
	}
	export function CreateDeleteMediaCapturePipelineRequestFormGroup() {
		return new FormGroup<DeleteMediaCapturePipelineRequestFormProperties>({
		});

	}

	export interface DeleteMediaInsightsPipelineConfigurationRequest {
	}
	export interface DeleteMediaInsightsPipelineConfigurationRequestFormProperties {
	}
	export function CreateDeleteMediaInsightsPipelineConfigurationRequestFormGroup() {
		return new FormGroup<DeleteMediaInsightsPipelineConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteMediaPipelineRequest {
	}
	export interface DeleteMediaPipelineRequestFormProperties {
	}
	export function CreateDeleteMediaPipelineRequestFormGroup() {
		return new FormGroup<DeleteMediaPipelineRequestFormProperties>({
		});

	}

	export interface GetMediaCapturePipelineRequest {
	}
	export interface GetMediaCapturePipelineRequestFormProperties {
	}
	export function CreateGetMediaCapturePipelineRequestFormGroup() {
		return new FormGroup<GetMediaCapturePipelineRequestFormProperties>({
		});

	}

	export interface GetMediaInsightsPipelineConfigurationRequest {
	}
	export interface GetMediaInsightsPipelineConfigurationRequestFormProperties {
	}
	export function CreateGetMediaInsightsPipelineConfigurationRequestFormGroup() {
		return new FormGroup<GetMediaInsightsPipelineConfigurationRequestFormProperties>({
		});

	}

	export interface GetMediaPipelineRequest {
	}
	export interface GetMediaPipelineRequestFormProperties {
	}
	export function CreateGetMediaPipelineRequestFormGroup() {
		return new FormGroup<GetMediaPipelineRequestFormProperties>({
		});

	}

	export enum HighlightColor { Black = 'Black', Blue = 'Blue', Red = 'Red', Green = 'Green', White = 'White', Yellow = 'Yellow' }

	export interface ListMediaCapturePipelinesRequest {
	}
	export interface ListMediaCapturePipelinesRequestFormProperties {
	}
	export function CreateListMediaCapturePipelinesRequestFormGroup() {
		return new FormGroup<ListMediaCapturePipelinesRequestFormProperties>({
		});

	}

	export interface ListMediaInsightsPipelineConfigurationsRequest {
	}
	export interface ListMediaInsightsPipelineConfigurationsRequestFormProperties {
	}
	export function CreateListMediaInsightsPipelineConfigurationsRequestFormGroup() {
		return new FormGroup<ListMediaInsightsPipelineConfigurationsRequestFormProperties>({
		});

	}

	export interface ListMediaPipelinesRequest {
	}
	export interface ListMediaPipelinesRequestFormProperties {
	}
	export function CreateListMediaPipelinesRequestFormGroup() {
		return new FormGroup<ListMediaPipelinesRequestFormProperties>({
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

	export enum LiveConnectorSourceType { ChimeSdkMeeting = 'ChimeSdkMeeting' }

	export enum MediaPipelineStatusUpdate { Pause = 'Pause', Resume = 'Resume' }

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMediaInsightsPipelineConfigurationRequest {

		/** Required */
		ResourceAccessRoleArn: string;
		RealTimeAlertConfiguration?: RealTimeAlertConfiguration;

		/** Required */
		Elements: Array<MediaInsightsPipelineConfigurationElement>;
	}
	export interface UpdateMediaInsightsPipelineConfigurationRequestFormProperties {

		/** Required */
		ResourceAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMediaInsightsPipelineConfigurationRequestFormGroup() {
		return new FormGroup<UpdateMediaInsightsPipelineConfigurationRequestFormProperties>({
			ResourceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMediaInsightsPipelineStatusRequest {

		/** Required */
		UpdateStatus: MediaPipelineStatusUpdate;
	}
	export interface UpdateMediaInsightsPipelineStatusRequestFormProperties {

		/** Required */
		UpdateStatus: FormControl<MediaPipelineStatusUpdate | null | undefined>,
	}
	export function CreateUpdateMediaInsightsPipelineStatusRequestFormGroup() {
		return new FormGroup<UpdateMediaInsightsPipelineStatusRequestFormProperties>({
			UpdateStatus: new FormControl<MediaPipelineStatusUpdate | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VoiceAnalyticsConfigurationStatus { Enabled = 'Enabled', Disabled = 'Disabled' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a media pipeline.
		 * Post sdk-media-capture-pipelines
		 * @return {void} 
		 */
		CreateMediaCapturePipeline(requestBody: CreateMediaCapturePipelinePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sdk-media-capture-pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of media pipelines.
		 * Get sdk-media-capture-pipelines
		 * @param {string} next_token The token used to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call. Valid Range: 1 - 99.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMediaCapturePipelinesResponse} Success
		 */
		ListMediaCapturePipelines(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMediaCapturePipelinesResponse> {
			return this.http.get<ListMediaCapturePipelinesResponse>(this.baseUri + 'sdk-media-capture-pipelines?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a media concatenation pipeline.
		 * Post sdk-media-concatenation-pipelines
		 * @return {void} 
		 */
		CreateMediaConcatenationPipeline(requestBody: CreateMediaConcatenationPipelinePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sdk-media-concatenation-pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a media insights pipeline.
		 * Post media-insights-pipelines
		 * @return {void} 
		 */
		CreateMediaInsightsPipeline(requestBody: CreateMediaInsightsPipelinePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'media-insights-pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * A structure that contains the static configurations for a media insights pipeline.
		 * Post media-insights-pipeline-configurations
		 * @return {void} 
		 */
		CreateMediaInsightsPipelineConfiguration(requestBody: CreateMediaInsightsPipelineConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'media-insights-pipeline-configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the available media insights pipeline configurations.
		 * Get media-insights-pipeline-configurations
		 * @param {string} next_token The token used to return the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMediaInsightsPipelineConfigurationsResponse} Success
		 */
		ListMediaInsightsPipelineConfigurations(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMediaInsightsPipelineConfigurationsResponse> {
			return this.http.get<ListMediaInsightsPipelineConfigurationsResponse>(this.baseUri + 'media-insights-pipeline-configurations?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a media live connector pipeline in an Amazon Chime SDK meeting.
		 * Post sdk-media-live-connector-pipelines
		 * @return {void} 
		 */
		CreateMediaLiveConnectorPipeline(requestBody: CreateMediaLiveConnectorPipelinePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sdk-media-live-connector-pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the media pipeline.
		 * Delete sdk-media-capture-pipelines/{mediaPipelineId}
		 * @param {string} mediaPipelineId The ID of the media pipeline being deleted. 
		 * @return {void} 
		 */
		DeleteMediaCapturePipeline(mediaPipelineId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sdk-media-capture-pipelines/' + (mediaPipelineId == null ? '' : encodeURIComponent(mediaPipelineId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an existing media pipeline.
		 * Get sdk-media-capture-pipelines/{mediaPipelineId}
		 * @param {string} mediaPipelineId The ID of the pipeline that you want to get.
		 * @return {GetMediaCapturePipelineResponse} Success
		 */
		GetMediaCapturePipeline(mediaPipelineId: string): Observable<GetMediaCapturePipelineResponse> {
			return this.http.get<GetMediaCapturePipelineResponse>(this.baseUri + 'sdk-media-capture-pipelines/' + (mediaPipelineId == null ? '' : encodeURIComponent(mediaPipelineId)), {});
		}

		/**
		 * Deletes the specified configuration settings.
		 * Delete media-insights-pipeline-configurations/{identifier}
		 * @param {string} identifier The unique identifier of the resource to be deleted. Valid values include the name and ARN of the media insights pipeline configuration.
		 * @return {void} 
		 */
		DeleteMediaInsightsPipelineConfiguration(identifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'media-insights-pipeline-configurations/' + (identifier == null ? '' : encodeURIComponent(identifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the configuration settings for a media insights pipeline.
		 * Get media-insights-pipeline-configurations/{identifier}
		 * @param {string} identifier The unique identifier of the requested resource. Valid values include the name and ARN of the media insights pipeline configuration.
		 * @return {GetMediaInsightsPipelineConfigurationResponse} Success
		 */
		GetMediaInsightsPipelineConfiguration(identifier: string): Observable<GetMediaInsightsPipelineConfigurationResponse> {
			return this.http.get<GetMediaInsightsPipelineConfigurationResponse>(this.baseUri + 'media-insights-pipeline-configurations/' + (identifier == null ? '' : encodeURIComponent(identifier)), {});
		}

		/**
		 * Updates the media insights pipeline's configuration settings.
		 * Put media-insights-pipeline-configurations/{identifier}
		 * @param {string} identifier The unique identifier for the resource to be updated. Valid values include the name and ARN of the media insights pipeline configuration.
		 * @return {UpdateMediaInsightsPipelineConfigurationResponse} Success
		 */
		UpdateMediaInsightsPipelineConfiguration(identifier: string, requestBody: UpdateMediaInsightsPipelineConfigurationPutBody): Observable<UpdateMediaInsightsPipelineConfigurationResponse> {
			return this.http.put<UpdateMediaInsightsPipelineConfigurationResponse>(this.baseUri + 'media-insights-pipeline-configurations/' + (identifier == null ? '' : encodeURIComponent(identifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the media pipeline.
		 * Delete sdk-media-pipelines/{mediaPipelineId}
		 * @param {string} mediaPipelineId The ID of the media pipeline to delete.
		 * @return {void} 
		 */
		DeleteMediaPipeline(mediaPipelineId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sdk-media-pipelines/' + (mediaPipelineId == null ? '' : encodeURIComponent(mediaPipelineId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an existing media pipeline.
		 * Get sdk-media-pipelines/{mediaPipelineId}
		 * @param {string} mediaPipelineId The ID of the pipeline that you want to get.
		 * @return {GetMediaPipelineResponse} Success
		 */
		GetMediaPipeline(mediaPipelineId: string): Observable<GetMediaPipelineResponse> {
			return this.http.get<GetMediaPipelineResponse>(this.baseUri + 'sdk-media-pipelines/' + (mediaPipelineId == null ? '' : encodeURIComponent(mediaPipelineId)), {});
		}

		/**
		 * Returns a list of media pipelines.
		 * Get sdk-media-pipelines
		 * @param {string} next_token The token used to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call. Valid Range: 1 - 99.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMediaPipelinesResponse} Success
		 */
		ListMediaPipelines(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMediaPipelinesResponse> {
			return this.http.get<ListMediaPipelinesResponse>(this.baseUri + 'sdk-media-pipelines?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags available for a media pipeline.
		 * Get tags#arn
		 * @param {string} arn The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's region, resource ID, and pipeline ID.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * The ARN of the media pipeline that you want to tag. Consists of the pipeline's endpoint region, resource ID, and pipeline ID.
		 * Post tags#operation=tag-resource
		 * @return {void} 
		 */
		TagResource(operation: TagResourceOperation, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=tag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes any tags from a media pipeline.
		 * Post tags#operation=untag-resource
		 * @return {void} 
		 */
		UntagResource(operation: UntagResourceOperation, requestBody: UntagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=untag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the status of a media insights pipeline.
		 * Put media-insights-pipeline-status/{identifier}
		 * @param {string} identifier The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline.
		 * @return {void} Success
		 */
		UpdateMediaInsightsPipelineStatus(identifier: string, requestBody: UpdateMediaInsightsPipelineStatusPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'media-insights-pipeline-status/' + (identifier == null ? '' : encodeURIComponent(identifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateMediaCapturePipelinePostBody {

		/**
		 * Source type from which the media artifacts are captured. A Chime SDK Meeting is the only supported source.
		 * Required
		 */
		SourceType: MediaPipelineSourceType;

		/**
		 * ARN of the source from which the media artifacts are captured.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SourceArn: string;

		/**
		 * Destination type to which the media artifacts are saved. You must use an S3 bucket.
		 * Required
		 */
		SinkType: MediaPipelineSinkType;

		/**
		 * The ARN of the sink type.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SinkArn: string;

		/**
		 * The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media pipeline request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken?: string | null;

		/** The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>. */
		ChimeSdkMeetingConfiguration?: CreateMediaCapturePipelinePostBodyChimeSdkMeetingConfiguration;

		/**
		 * The tag key-value pairs.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateMediaCapturePipelinePostBodyFormProperties {

		/**
		 * Source type from which the media artifacts are captured. A Chime SDK Meeting is the only supported source.
		 * Required
		 */
		SourceType: FormControl<MediaPipelineSourceType | null | undefined>,

		/**
		 * ARN of the source from which the media artifacts are captured.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SourceArn: FormControl<string | null | undefined>,

		/**
		 * Destination type to which the media artifacts are saved. You must use an S3 bucket.
		 * Required
		 */
		SinkType: FormControl<MediaPipelineSinkType | null | undefined>,

		/**
		 * The ARN of the sink type.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SinkArn: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media pipeline request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaCapturePipelinePostBodyFormGroup() {
		return new FormGroup<CreateMediaCapturePipelinePostBodyFormProperties>({
			SourceType: new FormControl<MediaPipelineSourceType | null | undefined>(undefined, [Validators.required]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
			SinkType: new FormControl<MediaPipelineSinkType | null | undefined>(undefined, [Validators.required]),
			SinkArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateMediaCapturePipelinePostBodyChimeSdkMeetingConfiguration {
		SourceConfiguration?: SourceConfiguration;
		ArtifactsConfiguration?: ArtifactsConfiguration;
	}
	export interface CreateMediaCapturePipelinePostBodyChimeSdkMeetingConfigurationFormProperties {
	}
	export function CreateCreateMediaCapturePipelinePostBodyChimeSdkMeetingConfigurationFormGroup() {
		return new FormGroup<CreateMediaCapturePipelinePostBodyChimeSdkMeetingConfigurationFormProperties>({
		});

	}

	export interface CreateMediaConcatenationPipelinePostBody {

		/**
		 * An object that specifies the sources for the media concatenation pipeline.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Sources: Array<ConcatenationSource>;

		/**
		 * An object that specifies the data sinks for the media concatenation pipeline.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Sinks: Array<ConcatenationSink>;

		/**
		 * The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media concatenation pipeline request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken?: string | null;

		/**
		 * The tags associated with the media concatenation pipeline.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateMediaConcatenationPipelinePostBodyFormProperties {

		/**
		 * The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media concatenation pipeline request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaConcatenationPipelinePostBodyFormGroup() {
		return new FormGroup<CreateMediaConcatenationPipelinePostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateMediaInsightsPipelinePostBody {

		/**
		 * The ARN of the pipeline's configuration.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		MediaInsightsPipelineConfigurationArn: string;

		/** The runtime configuration settings for the Kinesis video stream source. */
		KinesisVideoStreamSourceRuntimeConfiguration?: CreateMediaInsightsPipelinePostBodyKinesisVideoStreamSourceRuntimeConfiguration;

		/** The runtime metadata for the media insights pipeline. Consists of a key-value map of strings. */
		MediaInsightsRuntimeMetadata?: {[id: string]: string };

		/** A structure that contains the runtime settings for recording a Kinesis video stream. */
		KinesisVideoStreamRecordingSourceRuntimeConfiguration?: CreateMediaInsightsPipelinePostBodyKinesisVideoStreamRecordingSourceRuntimeConfiguration;

		/** A structure that holds the settings for transmitting media files to the Amazon S3 bucket. If specified, the settings in this structure override any settings in <code>S3RecordingSinkConfiguration</code>. */
		S3RecordingSinkRuntimeConfiguration?: CreateMediaInsightsPipelinePostBodyS3RecordingSinkRuntimeConfiguration;

		/**
		 * The tags assigned to the media insights pipeline.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * The unique identifier for the media insights pipeline request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken?: string | null;
	}
	export interface CreateMediaInsightsPipelinePostBodyFormProperties {

		/**
		 * The ARN of the pipeline's configuration.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		MediaInsightsPipelineConfigurationArn: FormControl<string | null | undefined>,

		/** The runtime metadata for the media insights pipeline. Consists of a key-value map of strings. */
		MediaInsightsRuntimeMetadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The unique identifier for the media insights pipeline request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaInsightsPipelinePostBodyFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelinePostBodyFormProperties>({
			MediaInsightsPipelineConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
			MediaInsightsRuntimeMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateMediaInsightsPipelinePostBodyKinesisVideoStreamSourceRuntimeConfiguration {
		Streams?: Array<StreamConfiguration>;
		MediaEncoding?: MediaEncoding;
		MediaSampleRate?: number | null;
	}
	export interface CreateMediaInsightsPipelinePostBodyKinesisVideoStreamSourceRuntimeConfigurationFormProperties {
		MediaEncoding: FormControl<MediaEncoding | null | undefined>,
		MediaSampleRate: FormControl<number | null | undefined>,
	}
	export function CreateCreateMediaInsightsPipelinePostBodyKinesisVideoStreamSourceRuntimeConfigurationFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelinePostBodyKinesisVideoStreamSourceRuntimeConfigurationFormProperties>({
			MediaEncoding: new FormControl<MediaEncoding | null | undefined>(undefined),
			MediaSampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateMediaInsightsPipelinePostBodyKinesisVideoStreamRecordingSourceRuntimeConfiguration {
		Streams?: Array<RecordingStreamConfiguration>;
		FragmentSelector?: FragmentSelector;
	}
	export interface CreateMediaInsightsPipelinePostBodyKinesisVideoStreamRecordingSourceRuntimeConfigurationFormProperties {
	}
	export function CreateCreateMediaInsightsPipelinePostBodyKinesisVideoStreamRecordingSourceRuntimeConfigurationFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelinePostBodyKinesisVideoStreamRecordingSourceRuntimeConfigurationFormProperties>({
		});

	}

	export interface CreateMediaInsightsPipelinePostBodyS3RecordingSinkRuntimeConfiguration {
		Destination?: string;
		RecordingFileFormat?: RecordingFileFormat;
	}
	export interface CreateMediaInsightsPipelinePostBodyS3RecordingSinkRuntimeConfigurationFormProperties {
		Destination: FormControl<string | null | undefined>,
		RecordingFileFormat: FormControl<RecordingFileFormat | null | undefined>,
	}
	export function CreateCreateMediaInsightsPipelinePostBodyS3RecordingSinkRuntimeConfigurationFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelinePostBodyS3RecordingSinkRuntimeConfigurationFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
			RecordingFileFormat: new FormControl<RecordingFileFormat | null | undefined>(undefined),
		});

	}

	export interface CreateMediaInsightsPipelineConfigurationPostBody {

		/**
		 * The name of the media insights pipeline configuration.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		MediaInsightsPipelineConfigurationName: string;

		/**
		 * The ARN of the role used by the service to access Amazon Web Services resources, including <code>Transcribe</code> and <code>Transcribe Call Analytics</code>, on the caller’s behalf.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceAccessRoleArn: string;

		/** A structure that contains the configuration settings for real-time alerts. */
		RealTimeAlertConfiguration?: CreateMediaInsightsPipelineConfigurationPostBodyRealTimeAlertConfiguration;

		/**
		 * The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream.
		 * Required
		 */
		Elements: Array<MediaInsightsPipelineConfigurationElement>;

		/**
		 * The tags assigned to the media insights pipeline configuration.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * The unique identifier for the media insights pipeline configuration request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken?: string | null;
	}
	export interface CreateMediaInsightsPipelineConfigurationPostBodyFormProperties {

		/**
		 * The name of the media insights pipeline configuration.
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		MediaInsightsPipelineConfigurationName: FormControl<string | null | undefined>,

		/**
		 * The ARN of the role used by the service to access Amazon Web Services resources, including <code>Transcribe</code> and <code>Transcribe Call Analytics</code>, on the caller’s behalf.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceAccessRoleArn: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for the media insights pipeline configuration request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaInsightsPipelineConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelineConfigurationPostBodyFormProperties>({
			MediaInsightsPipelineConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('^[0-9a-zA-Z._-]+')]),
			ResourceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface CreateMediaInsightsPipelineConfigurationPostBodyRealTimeAlertConfiguration {
		Disabled?: boolean | null;
		Rules?: Array<RealTimeAlertRule>;
	}
	export interface CreateMediaInsightsPipelineConfigurationPostBodyRealTimeAlertConfigurationFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateMediaInsightsPipelineConfigurationPostBodyRealTimeAlertConfigurationFormGroup() {
		return new FormGroup<CreateMediaInsightsPipelineConfigurationPostBodyRealTimeAlertConfigurationFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateMediaLiveConnectorPipelinePostBody {

		/**
		 * The media live connector pipeline's data sources.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Sources: Array<LiveConnectorSourceConfiguration>;

		/**
		 * The media live connector pipeline's data sinks.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Sinks: Array<LiveConnectorSinkConfiguration>;

		/**
		 * The token assigned to the client making the request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken?: string | null;

		/**
		 * The tags associated with the media live connector pipeline.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateMediaLiveConnectorPipelinePostBodyFormProperties {

		/**
		 * The token assigned to the client making the request.
		 * Max length: 64
		 * Min length: 2
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaLiveConnectorPipelinePostBodyFormGroup() {
		return new FormGroup<CreateMediaLiveConnectorPipelinePostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[-_a-zA-Z0-9]*')]),
		});

	}

	export interface UpdateMediaInsightsPipelineConfigurationPutBody {

		/**
		 * The ARN of the role used by the service to access Amazon Web Services resources.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceAccessRoleArn: string;

		/** A structure that contains the configuration settings for real-time alerts. */
		RealTimeAlertConfiguration?: UpdateMediaInsightsPipelineConfigurationPutBodyRealTimeAlertConfiguration;

		/**
		 * The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream..
		 * Required
		 */
		Elements: Array<MediaInsightsPipelineConfigurationElement>;
	}
	export interface UpdateMediaInsightsPipelineConfigurationPutBodyFormProperties {

		/**
		 * The ARN of the role used by the service to access Amazon Web Services resources.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMediaInsightsPipelineConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateMediaInsightsPipelineConfigurationPutBodyFormProperties>({
			ResourceAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
		});

	}

	export interface UpdateMediaInsightsPipelineConfigurationPutBodyRealTimeAlertConfiguration {
		Disabled?: boolean | null;
		Rules?: Array<RealTimeAlertRule>;
	}
	export interface UpdateMediaInsightsPipelineConfigurationPutBodyRealTimeAlertConfigurationFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMediaInsightsPipelineConfigurationPutBodyRealTimeAlertConfigurationFormGroup() {
		return new FormGroup<UpdateMediaInsightsPipelineConfigurationPutBodyRealTimeAlertConfigurationFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TagResourceOperation { 'tag-resource' = 'tag-resource' }

	export interface TagResourcePostBody {

		/**
		 * The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's endpoint region, resource ID, and pipeline ID.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * The tags associated with the specified media pipeline.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's endpoint region, resource ID, and pipeline ID.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
		});

	}

	export enum UntagResourceOperation { 'untag-resource' = 'untag-resource' }

	export interface UntagResourcePostBody {

		/**
		 * The ARN of the pipeline that you want to untag.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * The key/value pairs in the tag that you want to remove.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The ARN of the pipeline that you want to untag.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
		});

	}

	export interface UpdateMediaInsightsPipelineStatusPutBody {

		/**
		 * The requested status of the media insights pipeline.
		 * Required
		 */
		UpdateStatus: MediaPipelineStatusUpdate;
	}
	export interface UpdateMediaInsightsPipelineStatusPutBodyFormProperties {

		/**
		 * The requested status of the media insights pipeline.
		 * Required
		 */
		UpdateStatus: FormControl<MediaPipelineStatusUpdate | null | undefined>,
	}
	export function CreateUpdateMediaInsightsPipelineStatusPutBodyFormGroup() {
		return new FormGroup<UpdateMediaInsightsPipelineStatusPutBodyFormProperties>({
			UpdateStatus: new FormControl<MediaPipelineStatusUpdate | null | undefined>(undefined, [Validators.required]),
		});

	}

}

