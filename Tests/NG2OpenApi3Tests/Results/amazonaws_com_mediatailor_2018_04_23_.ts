import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ConfigureLogsForChannelResponse {
		ChannelName?: string;
		LogTypes?: Array<LogType>;
	}
	export interface ConfigureLogsForChannelResponseFormProperties {
		ChannelName: FormControl<string | null | undefined>,
	}
	export function CreateConfigureLogsForChannelResponseFormGroup() {
		return new FormGroup<ConfigureLogsForChannelResponseFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogType { AS_RUN = 'AS_RUN' }

	export interface ConfigureLogsForPlaybackConfigurationResponse {

		/** Required */
		PercentEnabled: number;
		PlaybackConfigurationName?: string;
	}
	export interface ConfigureLogsForPlaybackConfigurationResponseFormProperties {

		/** Required */
		PercentEnabled: FormControl<number | null | undefined>,
		PlaybackConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateConfigureLogsForPlaybackConfigurationResponseFormGroup() {
		return new FormGroup<ConfigureLogsForPlaybackConfigurationResponseFormProperties>({
			PercentEnabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PlaybackConfigurationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelResponse {
		Arn?: string;
		ChannelName?: string;
		ChannelState?: ChannelState;
		CreationTime?: Date;
		FillerSlate?: SlateSource;
		LastModifiedTime?: Date;
		Outputs?: Array<ResponseOutputItem>;
		PlaybackMode?: string;
		Tags?: __mapOf__string;
		Tier?: string;
	}
	export interface CreateChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelName: FormControl<string | null | undefined>,
		ChannelState: FormControl<ChannelState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		PlaybackMode: FormControl<string | null | undefined>,
		Tier: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelState: new FormControl<ChannelState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			PlaybackMode: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelState { RUNNING = 'RUNNING', STOPPED = 'STOPPED' }


	/** Slate VOD source configuration. */
	export interface SlateSource {
		SourceLocationName?: string;
		VodSourceName?: string;
	}

	/** Slate VOD source configuration. */
	export interface SlateSourceFormProperties {
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateSlateSourceFormGroup() {
		return new FormGroup<SlateSourceFormProperties>({
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output item response. */
	export interface ResponseOutputItem {
		DashPlaylistSettings?: DashPlaylistSettings;
		HlsPlaylistSettings?: HlsPlaylistSettings;

		/** Required */
		ManifestName: string;

		/** Required */
		PlaybackUrl: string;

		/** Required */
		SourceGroup: string;
	}

	/** The output item response. */
	export interface ResponseOutputItemFormProperties {

		/** Required */
		ManifestName: FormControl<string | null | undefined>,

		/** Required */
		PlaybackUrl: FormControl<string | null | undefined>,

		/** Required */
		SourceGroup: FormControl<string | null | undefined>,
	}
	export function CreateResponseOutputItemFormGroup() {
		return new FormGroup<ResponseOutputItemFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlaybackUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Dash manifest configuration parameters. */
	export interface DashPlaylistSettings {
		ManifestWindowSeconds?: number | null;
		MinBufferTimeSeconds?: number | null;
		MinUpdatePeriodSeconds?: number | null;
		SuggestedPresentationDelaySeconds?: number | null;
	}

	/** Dash manifest configuration parameters. */
	export interface DashPlaylistSettingsFormProperties {
		ManifestWindowSeconds: FormControl<number | null | undefined>,
		MinBufferTimeSeconds: FormControl<number | null | undefined>,
		MinUpdatePeriodSeconds: FormControl<number | null | undefined>,
		SuggestedPresentationDelaySeconds: FormControl<number | null | undefined>,
	}
	export function CreateDashPlaylistSettingsFormGroup() {
		return new FormGroup<DashPlaylistSettingsFormProperties>({
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
			MinBufferTimeSeconds: new FormControl<number | null | undefined>(undefined),
			MinUpdatePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			SuggestedPresentationDelaySeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** HLS playlist configuration parameters. */
	export interface HlsPlaylistSettings {
		AdMarkupType?: Array<AdMarkupType>;
		ManifestWindowSeconds?: number | null;
	}

	/** HLS playlist configuration parameters. */
	export interface HlsPlaylistSettingsFormProperties {
		ManifestWindowSeconds: FormControl<number | null | undefined>,
	}
	export function CreateHlsPlaylistSettingsFormGroup() {
		return new FormGroup<HlsPlaylistSettingsFormProperties>({
			ManifestWindowSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AdMarkupType { DATERANGE = 'DATERANGE', SCTE35_ENHANCED = 'SCTE35_ENHANCED' }

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}


	/** The output configuration for this channel. */
	export interface RequestOutputItem {
		DashPlaylistSettings?: DashPlaylistSettings;
		HlsPlaylistSettings?: HlsPlaylistSettings;

		/** Required */
		ManifestName: string;

		/** Required */
		SourceGroup: string;
	}

	/** The output configuration for this channel. */
	export interface RequestOutputItemFormProperties {

		/** Required */
		ManifestName: FormControl<string | null | undefined>,

		/** Required */
		SourceGroup: FormControl<string | null | undefined>,
	}
	export function CreateRequestOutputItemFormGroup() {
		return new FormGroup<RequestOutputItemFormProperties>({
			ManifestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLiveSourceResponse {
		Arn?: string;
		CreationTime?: Date;
		HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
		LastModifiedTime?: Date;
		LiveSourceName?: string;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
	}
	export interface CreateLiveSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LiveSourceName: FormControl<string | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLiveSourceResponseFormGroup() {
		return new FormGroup<CreateLiveSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HTTP package configuration properties for the requested VOD source. */
	export interface HttpPackageConfiguration {

		/** Required */
		Path: string;

		/** Required */
		SourceGroup: string;

		/** Required */
		Type: Type;
	}

	/** The HTTP package configuration properties for the requested VOD source. */
	export interface HttpPackageConfigurationFormProperties {

		/** Required */
		Path: FormControl<string | null | undefined>,

		/** Required */
		SourceGroup: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateHttpPackageConfigurationFormGroup() {
		return new FormGroup<HttpPackageConfigurationFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Type { DASH = 'DASH', HLS = 'HLS' }

	export interface CreatePrefetchScheduleResponse {
		Arn?: string;
		Consumption?: PrefetchConsumption;
		Name?: string;
		PlaybackConfigurationName?: string;
		Retrieval?: PrefetchRetrieval;
		StreamId?: string;
	}
	export interface CreatePrefetchScheduleResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlaybackConfigurationName: FormControl<string | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePrefetchScheduleResponseFormGroup() {
		return new FormGroup<CreatePrefetchScheduleResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlaybackConfigurationName: new FormControl<string | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks. */
	export interface PrefetchConsumption {
		AvailMatchingCriteria?: Array<AvailMatchingCriteria>;

		/** Required */
		EndTime: Date;
		StartTime?: Date;
	}

	/** A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks. */
	export interface PrefetchConsumptionFormProperties {

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreatePrefetchConsumptionFormGroup() {
		return new FormGroup<PrefetchConsumptionFormProperties>({
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>MediaTailor only places (consumes) prefetched ads if the ad break meets the criteria defined by the dynamic variables. This gives you granular control over which ad break to place the prefetched ads into.</p> <p>As an example, let's say that you set <code>DynamicVariable</code> to <code>scte.event_id</code> and <code>Operator</code> to <code>EQUALS</code>, and your playback configuration has an ADS URL of <code>https://my.ads.server.com/path?&amp;podId=[scte.avail_num]&amp;event=[scte.event_id]&amp;duration=[session.avail_duration_secs]</code>. And the prefetch request to the ADS contains these values <code>https://my.ads.server.com/path?&amp;podId=3&amp;event=my-awesome-event&amp;duration=30</code>. MediaTailor will only insert the prefetched ads into the ad break if has a SCTE marker with an event id of <code>my-awesome-event</code>, since it must match the event id that MediaTailor uses to query the ADS.</p> <p>You can specify up to five <code>AvailMatchingCriteria</code>. If you specify multiple <code>AvailMatchingCriteria</code>, MediaTailor combines them to match using a logical <code>AND</code>. You can model logical <code>OR</code> combinations by creating multiple prefetch schedules.</p> */
	export interface AvailMatchingCriteria {

		/** Required */
		DynamicVariable: string;

		/** Required */
		Operator: Operator;
	}

	/** <p>MediaTailor only places (consumes) prefetched ads if the ad break meets the criteria defined by the dynamic variables. This gives you granular control over which ad break to place the prefetched ads into.</p> <p>As an example, let's say that you set <code>DynamicVariable</code> to <code>scte.event_id</code> and <code>Operator</code> to <code>EQUALS</code>, and your playback configuration has an ADS URL of <code>https://my.ads.server.com/path?&amp;podId=[scte.avail_num]&amp;event=[scte.event_id]&amp;duration=[session.avail_duration_secs]</code>. And the prefetch request to the ADS contains these values <code>https://my.ads.server.com/path?&amp;podId=3&amp;event=my-awesome-event&amp;duration=30</code>. MediaTailor will only insert the prefetched ads into the ad break if has a SCTE marker with an event id of <code>my-awesome-event</code>, since it must match the event id that MediaTailor uses to query the ADS.</p> <p>You can specify up to five <code>AvailMatchingCriteria</code>. If you specify multiple <code>AvailMatchingCriteria</code>, MediaTailor combines them to match using a logical <code>AND</code>. You can model logical <code>OR</code> combinations by creating multiple prefetch schedules.</p> */
	export interface AvailMatchingCriteriaFormProperties {

		/** Required */
		DynamicVariable: FormControl<string | null | undefined>,

		/** Required */
		Operator: FormControl<Operator | null | undefined>,
	}
	export function CreateAvailMatchingCriteriaFormGroup() {
		return new FormGroup<AvailMatchingCriteriaFormProperties>({
			DynamicVariable: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<Operator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Operator { EQUALS = 'EQUALS' }


	/** A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server. */
	export interface PrefetchRetrieval {
		DynamicVariables?: __mapOf__string;

		/** Required */
		EndTime: Date;
		StartTime?: Date;
	}

	/** A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server. */
	export interface PrefetchRetrievalFormProperties {

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreatePrefetchRetrievalFormGroup() {
		return new FormGroup<PrefetchRetrievalFormProperties>({
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateProgramResponse {
		AdBreaks?: Array<AdBreak>;
		Arn?: string;
		ChannelName?: string;
		ClipRange?: ClipRange;
		CreationTime?: Date;
		DurationMillis?: number | null;
		LiveSourceName?: string;
		ProgramName?: string;
		ScheduledStartTime?: Date;
		SourceLocationName?: string;
		VodSourceName?: string;
	}
	export interface CreateProgramResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
		LiveSourceName: FormControl<string | null | undefined>,
		ProgramName: FormControl<string | null | undefined>,
		ScheduledStartTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProgramResponseFormGroup() {
		return new FormGroup<CreateProgramResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined),
			ScheduledStartTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ad break configuration parameters. */
	export interface AdBreak {
		AdBreakMetadata?: Array<KeyValuePair>;
		MessageType?: MessageType;
		OffsetMillis?: number | null;
		Slate?: SlateSource;
		SpliceInsertMessage?: SpliceInsertMessage;
		TimeSignalMessage?: TimeSignalMessage;
	}

	/** Ad break configuration parameters. */
	export interface AdBreakFormProperties {
		MessageType: FormControl<MessageType | null | undefined>,
		OffsetMillis: FormControl<number | null | undefined>,
	}
	export function CreateAdBreakFormGroup() {
		return new FormGroup<AdBreakFormProperties>({
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			OffsetMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** For <code>SCTE35_ENHANCED</code> output, defines a key and corresponding value. MediaTailor generates these pairs within the <code>EXT-X-ASSET</code>tag. */
	export interface KeyValuePair {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** For <code>SCTE35_ENHANCED</code> output, defines a key and corresponding value. MediaTailor generates these pairs within the <code>EXT-X-ASSET</code>tag. */
	export interface KeyValuePairFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuePairFormGroup() {
		return new FormGroup<KeyValuePairFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessageType { SPLICE_INSERT = 'SPLICE_INSERT', TIME_SIGNAL = 'TIME_SIGNAL' }


	/** Splice insert message configuration. */
	export interface SpliceInsertMessage {
		AvailNum?: number | null;
		AvailsExpected?: number | null;
		SpliceEventId?: number | null;
		UniqueProgramId?: number | null;
	}

	/** Splice insert message configuration. */
	export interface SpliceInsertMessageFormProperties {
		AvailNum: FormControl<number | null | undefined>,
		AvailsExpected: FormControl<number | null | undefined>,
		SpliceEventId: FormControl<number | null | undefined>,
		UniqueProgramId: FormControl<number | null | undefined>,
	}
	export function CreateSpliceInsertMessageFormGroup() {
		return new FormGroup<SpliceInsertMessageFormProperties>({
			AvailNum: new FormControl<number | null | undefined>(undefined),
			AvailsExpected: new FormControl<number | null | undefined>(undefined),
			SpliceEventId: new FormControl<number | null | undefined>(undefined),
			UniqueProgramId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The SCTE-35 <code>time_signal</code> message can be sent with one or more <code>segmentation_descriptor</code> messages. A <code>time_signal</code> message can be sent only if a single <code>segmentation_descriptor</code> message is sent.</p> <p>The <code>time_signal</code> message contains only the <code>splice_time</code> field which is constructed using a given presentation timestamp. When sending a <code>time_signal</code> message, the <code>splice_command_type</code> field in the <code>splice_info_section</code> message is set to 6 (0x06).</p> <p>See the <code>time_signal()</code> table of the 2022 SCTE-35 specification for more information.</p> */
	export interface TimeSignalMessage {
		SegmentationDescriptors?: Array<SegmentationDescriptor>;
	}

	/** <p>The SCTE-35 <code>time_signal</code> message can be sent with one or more <code>segmentation_descriptor</code> messages. A <code>time_signal</code> message can be sent only if a single <code>segmentation_descriptor</code> message is sent.</p> <p>The <code>time_signal</code> message contains only the <code>splice_time</code> field which is constructed using a given presentation timestamp. When sending a <code>time_signal</code> message, the <code>splice_command_type</code> field in the <code>splice_info_section</code> message is set to 6 (0x06).</p> <p>See the <code>time_signal()</code> table of the 2022 SCTE-35 specification for more information.</p> */
	export interface TimeSignalMessageFormProperties {
	}
	export function CreateTimeSignalMessageFormGroup() {
		return new FormGroup<TimeSignalMessageFormProperties>({
		});

	}


	/** <p>The <code>segmentation_descriptor</code> message can contain advanced metadata fields, like content identifiers, to convey a wide range of information about the ad break. MediaTailor writes the ad metadata in the egress manifest as part of the <code>EXT-X-DATERANGE</code> or <code>EventStream</code> ad marker's SCTE-35 data.</p> <p> <code>segmentation_descriptor</code> messages must be sent with the <code>time_signal</code> message type.</p> <p>See the <code>segmentation_descriptor()</code> table of the 2022 SCTE-35 specification for more information.</p> */
	export interface SegmentationDescriptor {
		SegmentNum?: number | null;
		SegmentationEventId?: number | null;
		SegmentationTypeId?: number | null;
		SegmentationUpid?: string;
		SegmentationUpidType?: number | null;
		SegmentsExpected?: number | null;
		SubSegmentNum?: number | null;
		SubSegmentsExpected?: number | null;
	}

	/** <p>The <code>segmentation_descriptor</code> message can contain advanced metadata fields, like content identifiers, to convey a wide range of information about the ad break. MediaTailor writes the ad metadata in the egress manifest as part of the <code>EXT-X-DATERANGE</code> or <code>EventStream</code> ad marker's SCTE-35 data.</p> <p> <code>segmentation_descriptor</code> messages must be sent with the <code>time_signal</code> message type.</p> <p>See the <code>segmentation_descriptor()</code> table of the 2022 SCTE-35 specification for more information.</p> */
	export interface SegmentationDescriptorFormProperties {
		SegmentNum: FormControl<number | null | undefined>,
		SegmentationEventId: FormControl<number | null | undefined>,
		SegmentationTypeId: FormControl<number | null | undefined>,
		SegmentationUpid: FormControl<string | null | undefined>,
		SegmentationUpidType: FormControl<number | null | undefined>,
		SegmentsExpected: FormControl<number | null | undefined>,
		SubSegmentNum: FormControl<number | null | undefined>,
		SubSegmentsExpected: FormControl<number | null | undefined>,
	}
	export function CreateSegmentationDescriptorFormGroup() {
		return new FormGroup<SegmentationDescriptorFormProperties>({
			SegmentNum: new FormControl<number | null | undefined>(undefined),
			SegmentationEventId: new FormControl<number | null | undefined>(undefined),
			SegmentationTypeId: new FormControl<number | null | undefined>(undefined),
			SegmentationUpid: new FormControl<string | null | undefined>(undefined),
			SegmentationUpidType: new FormControl<number | null | undefined>(undefined),
			SegmentsExpected: new FormControl<number | null | undefined>(undefined),
			SubSegmentNum: new FormControl<number | null | undefined>(undefined),
			SubSegmentsExpected: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Clip range configuration for the VOD source associated with the program. */
	export interface ClipRange {

		/** Required */
		EndOffsetMillis: number;
	}

	/** Clip range configuration for the VOD source associated with the program. */
	export interface ClipRangeFormProperties {

		/** Required */
		EndOffsetMillis: FormControl<number | null | undefined>,
	}
	export function CreateClipRangeFormGroup() {
		return new FormGroup<ClipRangeFormProperties>({
			EndOffsetMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Program transition configuration. */
	export interface Transition {
		DurationMillis?: number | null;

		/** Required */
		RelativePosition: RelativePosition;
		RelativeProgram?: string;
		ScheduledStartTimeMillis?: number | null;

		/** Required */
		Type: string;
	}

	/** Program transition configuration. */
	export interface TransitionFormProperties {
		DurationMillis: FormControl<number | null | undefined>,

		/** Required */
		RelativePosition: FormControl<RelativePosition | null | undefined>,
		RelativeProgram: FormControl<string | null | undefined>,
		ScheduledStartTimeMillis: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateTransitionFormGroup() {
		return new FormGroup<TransitionFormProperties>({
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			RelativePosition: new FormControl<RelativePosition | null | undefined>(undefined, [Validators.required]),
			RelativeProgram: new FormControl<string | null | undefined>(undefined),
			ScheduledStartTimeMillis: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RelativePosition { BEFORE_PROGRAM = 'BEFORE_PROGRAM', AFTER_PROGRAM = 'AFTER_PROGRAM' }

	export interface CreateSourceLocationResponse {
		AccessConfiguration?: AccessConfiguration;
		Arn?: string;
		CreationTime?: Date;
		DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
		HttpConfiguration?: HttpConfiguration;
		LastModifiedTime?: Date;
		SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
	}
	export interface CreateSourceLocationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceLocationResponseFormGroup() {
		return new FormGroup<CreateSourceLocationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Access configuration parameters. */
	export interface AccessConfiguration {
		AccessType?: AccessType;
		SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration;
	}

	/** Access configuration parameters. */
	export interface AccessConfigurationFormProperties {
		AccessType: FormControl<AccessType | null | undefined>,
	}
	export function CreateAccessConfigurationFormGroup() {
		return new FormGroup<AccessConfigurationFormProperties>({
			AccessType: new FormControl<AccessType | null | undefined>(undefined),
		});

	}

	export enum AccessType { S3_SIGV4 = 'S3_SIGV4', SECRETS_MANAGER_ACCESS_TOKEN = 'SECRETS_MANAGER_ACCESS_TOKEN' }


	/** AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>. */
	export interface SecretsManagerAccessTokenConfiguration {
		HeaderName?: string;
		SecretArn?: string;
		SecretStringKey?: string;
	}

	/** AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>. */
	export interface SecretsManagerAccessTokenConfigurationFormProperties {
		HeaderName: FormControl<string | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		SecretStringKey: FormControl<string | null | undefined>,
	}
	export function CreateSecretsManagerAccessTokenConfigurationFormGroup() {
		return new FormGroup<SecretsManagerAccessTokenConfigurationFormProperties>({
			HeaderName: new FormControl<string | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			SecretStringKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used. */
	export interface DefaultSegmentDeliveryConfiguration {
		BaseUrl?: string;
	}

	/** The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used. */
	export interface DefaultSegmentDeliveryConfigurationFormProperties {
		BaseUrl: FormControl<string | null | undefined>,
	}
	export function CreateDefaultSegmentDeliveryConfigurationFormGroup() {
		return new FormGroup<DefaultSegmentDeliveryConfigurationFormProperties>({
			BaseUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HTTP configuration for the source location. */
	export interface HttpConfiguration {

		/** Required */
		BaseUrl: string;
	}

	/** The HTTP configuration for the source location. */
	export interface HttpConfigurationFormProperties {

		/** Required */
		BaseUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpConfigurationFormGroup() {
		return new FormGroup<HttpConfigurationFormProperties>({
			BaseUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The segment delivery configuration settings. */
	export interface SegmentDeliveryConfiguration {
		BaseUrl?: string;
		Name?: string;
	}

	/** The segment delivery configuration settings. */
	export interface SegmentDeliveryConfigurationFormProperties {
		BaseUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSegmentDeliveryConfigurationFormGroup() {
		return new FormGroup<SegmentDeliveryConfigurationFormProperties>({
			BaseUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVodSourceResponse {
		Arn?: string;
		CreationTime?: Date;
		HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
		LastModifiedTime?: Date;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
		VodSourceName?: string;
	}
	export interface CreateVodSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVodSourceResponseFormGroup() {
		return new FormGroup<CreateVodSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteChannelResponse {
	}
	export interface DeleteChannelResponseFormProperties {
	}
	export function CreateDeleteChannelResponseFormGroup() {
		return new FormGroup<DeleteChannelResponseFormProperties>({
		});

	}

	export interface DeleteChannelPolicyResponse {
	}
	export interface DeleteChannelPolicyResponseFormProperties {
	}
	export function CreateDeleteChannelPolicyResponseFormGroup() {
		return new FormGroup<DeleteChannelPolicyResponseFormProperties>({
		});

	}

	export interface DeleteLiveSourceResponse {
	}
	export interface DeleteLiveSourceResponseFormProperties {
	}
	export function CreateDeleteLiveSourceResponseFormGroup() {
		return new FormGroup<DeleteLiveSourceResponseFormProperties>({
		});

	}

	export interface DeletePlaybackConfigurationResponse {
	}
	export interface DeletePlaybackConfigurationResponseFormProperties {
	}
	export function CreateDeletePlaybackConfigurationResponseFormGroup() {
		return new FormGroup<DeletePlaybackConfigurationResponseFormProperties>({
		});

	}

	export interface DeletePrefetchScheduleResponse {
	}
	export interface DeletePrefetchScheduleResponseFormProperties {
	}
	export function CreateDeletePrefetchScheduleResponseFormGroup() {
		return new FormGroup<DeletePrefetchScheduleResponseFormProperties>({
		});

	}

	export interface DeleteProgramResponse {
	}
	export interface DeleteProgramResponseFormProperties {
	}
	export function CreateDeleteProgramResponseFormGroup() {
		return new FormGroup<DeleteProgramResponseFormProperties>({
		});

	}

	export interface DeleteSourceLocationResponse {
	}
	export interface DeleteSourceLocationResponseFormProperties {
	}
	export function CreateDeleteSourceLocationResponseFormGroup() {
		return new FormGroup<DeleteSourceLocationResponseFormProperties>({
		});

	}

	export interface DeleteVodSourceResponse {
	}
	export interface DeleteVodSourceResponseFormProperties {
	}
	export function CreateDeleteVodSourceResponseFormGroup() {
		return new FormGroup<DeleteVodSourceResponseFormProperties>({
		});

	}

	export interface DescribeChannelResponse {
		Arn?: string;
		ChannelName?: string;
		ChannelState?: ChannelState;
		CreationTime?: Date;
		FillerSlate?: SlateSource;
		LastModifiedTime?: Date;

		/** Required */
		LogConfiguration: LogConfigurationForChannel;
		Outputs?: Array<ResponseOutputItem>;
		PlaybackMode?: string;
		Tags?: __mapOf__string;
		Tier?: string;
	}
	export interface DescribeChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelName: FormControl<string | null | undefined>,
		ChannelState: FormControl<ChannelState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		PlaybackMode: FormControl<string | null | undefined>,
		Tier: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChannelResponseFormGroup() {
		return new FormGroup<DescribeChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelState: new FormControl<ChannelState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			PlaybackMode: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The log configuration for the channel. */
	export interface LogConfigurationForChannel {
		LogTypes?: Array<LogType>;
	}

	/** The log configuration for the channel. */
	export interface LogConfigurationForChannelFormProperties {
	}
	export function CreateLogConfigurationForChannelFormGroup() {
		return new FormGroup<LogConfigurationForChannelFormProperties>({
		});

	}

	export interface DescribeLiveSourceResponse {
		Arn?: string;
		CreationTime?: Date;
		HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
		LastModifiedTime?: Date;
		LiveSourceName?: string;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
	}
	export interface DescribeLiveSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LiveSourceName: FormControl<string | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLiveSourceResponseFormGroup() {
		return new FormGroup<DescribeLiveSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProgramResponse {
		AdBreaks?: Array<AdBreak>;
		Arn?: string;
		ChannelName?: string;
		ClipRange?: ClipRange;
		CreationTime?: Date;
		DurationMillis?: number | null;
		LiveSourceName?: string;
		ProgramName?: string;
		ScheduledStartTime?: Date;
		SourceLocationName?: string;
		VodSourceName?: string;
	}
	export interface DescribeProgramResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
		LiveSourceName: FormControl<string | null | undefined>,
		ProgramName: FormControl<string | null | undefined>,
		ScheduledStartTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProgramResponseFormGroup() {
		return new FormGroup<DescribeProgramResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined),
			ScheduledStartTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSourceLocationResponse {
		AccessConfiguration?: AccessConfiguration;
		Arn?: string;
		CreationTime?: Date;
		DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
		HttpConfiguration?: HttpConfiguration;
		LastModifiedTime?: Date;
		SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
	}
	export interface DescribeSourceLocationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSourceLocationResponseFormGroup() {
		return new FormGroup<DescribeSourceLocationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeVodSourceResponse {
		Arn?: string;
		CreationTime?: Date;
		HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
		LastModifiedTime?: Date;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
		VodSourceName?: string;
	}
	export interface DescribeVodSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVodSourceResponseFormGroup() {
		return new FormGroup<DescribeVodSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChannelPolicyResponse {
		Policy?: string;
	}
	export interface GetChannelPolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelPolicyResponseFormGroup() {
		return new FormGroup<GetChannelPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChannelScheduleResponse {
		Items?: Array<ScheduleEntry>;
		NextToken?: string;
	}
	export interface GetChannelScheduleResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetChannelScheduleResponseFormGroup() {
		return new FormGroup<GetChannelScheduleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for a schedule. */
	export interface ScheduleEntry {
		ApproximateDurationSeconds?: number | null;
		ApproximateStartTime?: Date;

		/** Required */
		Arn: string;

		/** Required */
		ChannelName: string;
		LiveSourceName?: string;

		/** Required */
		ProgramName: string;
		ScheduleAdBreaks?: Array<ScheduleAdBreak>;
		ScheduleEntryType?: ScheduleEntryType;

		/** Required */
		SourceLocationName: string;
		VodSourceName?: string;
	}

	/** The properties for a schedule. */
	export interface ScheduleEntryFormProperties {
		ApproximateDurationSeconds: FormControl<number | null | undefined>,
		ApproximateStartTime: FormControl<Date | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,
		LiveSourceName: FormControl<string | null | undefined>,

		/** Required */
		ProgramName: FormControl<string | null | undefined>,
		ScheduleEntryType: FormControl<ScheduleEntryType | null | undefined>,

		/** Required */
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateScheduleEntryFormGroup() {
		return new FormGroup<ScheduleEntryFormProperties>({
			ApproximateDurationSeconds: new FormControl<number | null | undefined>(undefined),
			ApproximateStartTime: new FormControl<Date | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleEntryType: new FormControl<ScheduleEntryType | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schedule's ad break properties. */
	export interface ScheduleAdBreak {
		ApproximateDurationSeconds?: number | null;
		ApproximateStartTime?: Date;
		SourceLocationName?: string;
		VodSourceName?: string;
	}

	/** The schedule's ad break properties. */
	export interface ScheduleAdBreakFormProperties {
		ApproximateDurationSeconds: FormControl<number | null | undefined>,
		ApproximateStartTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateScheduleAdBreakFormGroup() {
		return new FormGroup<ScheduleAdBreakFormProperties>({
			ApproximateDurationSeconds: new FormControl<number | null | undefined>(undefined),
			ApproximateStartTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleEntryType { PROGRAM = 'PROGRAM', FILLER_SLATE = 'FILLER_SLATE' }

	export interface GetPlaybackConfigurationResponse {
		AdDecisionServerUrl?: string;
		AvailSuppression?: AvailSuppression;
		Bumper?: Bumper;
		CdnConfiguration?: CdnConfiguration;
		ConfigurationAliases?: ConfigurationAliasesResponse;
		DashConfiguration?: DashConfiguration;
		HlsConfiguration?: HlsConfiguration;
		LivePreRollConfiguration?: LivePreRollConfiguration;
		LogConfiguration?: LogConfiguration;
		ManifestProcessingRules?: ManifestProcessingRules;
		Name?: string;
		PersonalizationThresholdSeconds?: number | null;
		PlaybackConfigurationArn?: string;
		PlaybackEndpointPrefix?: string;
		SessionInitializationEndpointPrefix?: string;
		SlateAdUrl?: string;
		Tags?: __mapOf__string;
		TranscodeProfileName?: string;
		VideoContentSourceUrl?: string;
	}
	export interface GetPlaybackConfigurationResponseFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,
		PlaybackConfigurationArn: FormControl<string | null | undefined>,
		PlaybackEndpointPrefix: FormControl<string | null | undefined>,
		SessionInitializationEndpointPrefix: FormControl<string | null | undefined>,
		SlateAdUrl: FormControl<string | null | undefined>,
		TranscodeProfileName: FormControl<string | null | undefined>,
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetPlaybackConfigurationResponseFormGroup() {
		return new FormGroup<GetPlaybackConfigurationResponseFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			PlaybackConfigurationArn: new FormControl<string | null | undefined>(undefined),
			PlaybackEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SessionInitializationEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>. */
	export interface AvailSuppression {
		FillPolicy?: FillPolicy;
		Mode?: Mode;
		Value?: string;
	}

	/** The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>. */
	export interface AvailSuppressionFormProperties {
		FillPolicy: FormControl<FillPolicy | null | undefined>,
		Mode: FormControl<Mode | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAvailSuppressionFormGroup() {
		return new FormGroup<AvailSuppressionFormProperties>({
			FillPolicy: new FormControl<FillPolicy | null | undefined>(undefined),
			Mode: new FormControl<Mode | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FillPolicy { FULL_AVAIL_ONLY = 'FULL_AVAIL_ONLY', PARTIAL_AVAIL = 'PARTIAL_AVAIL' }

	export enum Mode { OFF = 'OFF', BEHIND_LIVE_EDGE = 'BEHIND_LIVE_EDGE', AFTER_LIVE_EDGE = 'AFTER_LIVE_EDGE' }


	/** The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>. */
	export interface Bumper {
		EndUrl?: string;
		StartUrl?: string;
	}

	/** The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>. */
	export interface BumperFormProperties {
		EndUrl: FormControl<string | null | undefined>,
		StartUrl: FormControl<string | null | undefined>,
	}
	export function CreateBumperFormGroup() {
		return new FormGroup<BumperFormProperties>({
			EndUrl: new FormControl<string | null | undefined>(undefined),
			StartUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
	export interface CdnConfiguration {
		AdSegmentUrlPrefix?: string;
		ContentSegmentUrlPrefix?: string;
	}

	/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
	export interface CdnConfigurationFormProperties {
		AdSegmentUrlPrefix: FormControl<string | null | undefined>,
		ContentSegmentUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCdnConfigurationFormGroup() {
		return new FormGroup<CdnConfigurationFormProperties>({
			AdSegmentUrlPrefix: new FormControl<string | null | undefined>(undefined),
			ContentSegmentUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The predefined aliases for dynamic variables. */
	export interface ConfigurationAliasesResponse {
	}

	/** The predefined aliases for dynamic variables. */
	export interface ConfigurationAliasesResponseFormProperties {
	}
	export function CreateConfigurationAliasesResponseFormGroup() {
		return new FormGroup<ConfigurationAliasesResponseFormProperties>({
		});

	}


	/** The configuration for DASH content. */
	export interface DashConfiguration {
		ManifestEndpointPrefix?: string;
		MpdLocation?: string;
		OriginManifestType?: OriginManifestType;
	}

	/** The configuration for DASH content. */
	export interface DashConfigurationFormProperties {
		ManifestEndpointPrefix: FormControl<string | null | undefined>,
		MpdLocation: FormControl<string | null | undefined>,
		OriginManifestType: FormControl<OriginManifestType | null | undefined>,
	}
	export function CreateDashConfigurationFormGroup() {
		return new FormGroup<DashConfigurationFormProperties>({
			ManifestEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			MpdLocation: new FormControl<string | null | undefined>(undefined),
			OriginManifestType: new FormControl<OriginManifestType | null | undefined>(undefined),
		});

	}

	export enum OriginManifestType { SINGLE_PERIOD = 'SINGLE_PERIOD', MULTI_PERIOD = 'MULTI_PERIOD' }


	/** The configuration for HLS content. */
	export interface HlsConfiguration {
		ManifestEndpointPrefix?: string;
	}

	/** The configuration for HLS content. */
	export interface HlsConfigurationFormProperties {
		ManifestEndpointPrefix: FormControl<string | null | undefined>,
	}
	export function CreateHlsConfigurationFormGroup() {
		return new FormGroup<HlsConfigurationFormProperties>({
			ManifestEndpointPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for pre-roll ad insertion. */
	export interface LivePreRollConfiguration {
		AdDecisionServerUrl?: string;
		MaxDurationSeconds?: number | null;
	}

	/** The configuration for pre-roll ad insertion. */
	export interface LivePreRollConfigurationFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		MaxDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateLivePreRollConfigurationFormGroup() {
		return new FormGroup<LivePreRollConfigurationFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			MaxDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Returns Amazon CloudWatch log settings for a playback configuration. */
	export interface LogConfiguration {

		/** Required */
		PercentEnabled: number;
	}

	/** Returns Amazon CloudWatch log settings for a playback configuration. */
	export interface LogConfigurationFormProperties {

		/** Required */
		PercentEnabled: FormControl<number | null | undefined>,
	}
	export function CreateLogConfigurationFormGroup() {
		return new FormGroup<LogConfigurationFormProperties>({
			PercentEnabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor. */
	export interface ManifestProcessingRules {
		AdMarkerPassthrough?: AdMarkerPassthrough;
	}

	/** The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor. */
	export interface ManifestProcessingRulesFormProperties {
	}
	export function CreateManifestProcessingRulesFormGroup() {
		return new FormGroup<ManifestProcessingRulesFormProperties>({
		});

	}


	/** <p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p> */
	export interface AdMarkerPassthrough {
		Enabled?: boolean | null;
	}

	/** <p>For HLS, when set to <code>true</code>, MediaTailor passes through <code>EXT-X-CUE-IN</code>, <code>EXT-X-CUE-OUT</code>, and <code>EXT-X-SPLICEPOINT-SCTE35</code> ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if <code>EXT-X-CUE-OUT</code> has a value of <code>60</code>, but no ads are filled for that ad break, MediaTailor will not set the value to <code>0</code>.</p> */
	export interface AdMarkerPassthroughFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdMarkerPassthroughFormGroup() {
		return new FormGroup<AdMarkerPassthroughFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetPrefetchScheduleResponse {
		Arn?: string;
		Consumption?: PrefetchConsumption;
		Name?: string;
		PlaybackConfigurationName?: string;
		Retrieval?: PrefetchRetrieval;
		StreamId?: string;
	}
	export interface GetPrefetchScheduleResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlaybackConfigurationName: FormControl<string | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateGetPrefetchScheduleResponseFormGroup() {
		return new FormGroup<GetPrefetchScheduleResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlaybackConfigurationName: new FormControl<string | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAlertsResponse {
		Items?: Array<Alert>;
		NextToken?: string;
	}
	export interface ListAlertsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlertsResponseFormGroup() {
		return new FormGroup<ListAlertsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alert configuration parameters. */
	export interface Alert {

		/** Required */
		AlertCode: string;

		/** Required */
		AlertMessage: string;
		Category?: AlertCategory;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		RelatedResourceArns: Array<string>;

		/** Required */
		ResourceArn: string;
	}

	/** Alert configuration parameters. */
	export interface AlertFormProperties {

		/** Required */
		AlertCode: FormControl<string | null | undefined>,

		/** Required */
		AlertMessage: FormControl<string | null | undefined>,
		Category: FormControl<AlertCategory | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
			AlertCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AlertMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Category: new FormControl<AlertCategory | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AlertCategory { SCHEDULING_ERROR = 'SCHEDULING_ERROR', PLAYBACK_WARNING = 'PLAYBACK_WARNING', INFO = 'INFO' }

	export interface ListChannelsResponse {
		Items?: Array<Channel>;
		NextToken?: string;
	}
	export interface ListChannelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration parameters for a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>. */
	export interface Channel {

		/** Required */
		Arn: string;

		/** Required */
		ChannelName: string;

		/** Required */
		ChannelState: string;
		CreationTime?: Date;
		FillerSlate?: SlateSource;
		LastModifiedTime?: Date;

		/** Required */
		LogConfiguration: LogConfigurationForChannel;

		/** Required */
		Outputs: Array<ResponseOutputItem>;

		/** Required */
		PlaybackMode: string;
		Tags?: __mapOf__string;

		/** Required */
		Tier: string;
	}

	/** The configuration parameters for a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>. */
	export interface ChannelFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		ChannelName: FormControl<string | null | undefined>,

		/** Required */
		ChannelState: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		PlaybackMode: FormControl<string | null | undefined>,

		/** Required */
		Tier: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChannelState: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			PlaybackMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListLiveSourcesResponse {
		Items?: Array<LiveSource>;
		NextToken?: string;
	}
	export interface ListLiveSourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLiveSourcesResponseFormGroup() {
		return new FormGroup<ListLiveSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Live source configuration parameters. */
	export interface LiveSource {

		/** Required */
		Arn: string;
		CreationTime?: Date;

		/** Required */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;
		LastModifiedTime?: Date;

		/** Required */
		LiveSourceName: string;

		/** Required */
		SourceLocationName: string;
		Tags?: __mapOf__string;
	}

	/** Live source configuration parameters. */
	export interface LiveSourceFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		LiveSourceName: FormControl<string | null | undefined>,

		/** Required */
		SourceLocationName: FormControl<string | null | undefined>,
	}
	export function CreateLiveSourceFormGroup() {
		return new FormGroup<LiveSourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LiveSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceLocationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPlaybackConfigurationsResponse {
		Items?: Array<PlaybackConfiguration>;
		NextToken?: string;
	}
	export interface ListPlaybackConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPlaybackConfigurationsResponseFormGroup() {
		return new FormGroup<ListPlaybackConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>. */
	export interface PlaybackConfiguration {
		AdDecisionServerUrl?: string;
		AvailSuppression?: AvailSuppression;
		Bumper?: Bumper;
		CdnConfiguration?: CdnConfiguration;
		ConfigurationAliases?: ConfigurationAliasesResponse;
		DashConfiguration?: DashConfiguration;
		HlsConfiguration?: HlsConfiguration;
		LivePreRollConfiguration?: LivePreRollConfiguration;
		LogConfiguration?: LogConfiguration;
		ManifestProcessingRules?: ManifestProcessingRules;
		Name?: string;
		PersonalizationThresholdSeconds?: number | null;
		PlaybackConfigurationArn?: string;
		PlaybackEndpointPrefix?: string;
		SessionInitializationEndpointPrefix?: string;
		SlateAdUrl?: string;
		Tags?: __mapOf__string;
		TranscodeProfileName?: string;
		VideoContentSourceUrl?: string;
	}

	/** A playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>. */
	export interface PlaybackConfigurationFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,
		PlaybackConfigurationArn: FormControl<string | null | undefined>,
		PlaybackEndpointPrefix: FormControl<string | null | undefined>,
		SessionInitializationEndpointPrefix: FormControl<string | null | undefined>,
		SlateAdUrl: FormControl<string | null | undefined>,
		TranscodeProfileName: FormControl<string | null | undefined>,
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePlaybackConfigurationFormGroup() {
		return new FormGroup<PlaybackConfigurationFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			PlaybackConfigurationArn: new FormControl<string | null | undefined>(undefined),
			PlaybackEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SessionInitializationEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPrefetchSchedulesResponse {
		Items?: Array<PrefetchSchedule>;
		NextToken?: string;
	}
	export interface ListPrefetchSchedulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrefetchSchedulesResponseFormGroup() {
		return new FormGroup<ListPrefetchSchedulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>. */
	export interface PrefetchSchedule {

		/** Required */
		Arn: string;

		/** Required */
		Consumption: PrefetchConsumption;

		/** Required */
		Name: string;

		/** Required */
		PlaybackConfigurationName: string;

		/** Required */
		Retrieval: PrefetchRetrieval;
		StreamId?: string;
	}

	/** A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>. */
	export interface PrefetchScheduleFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PlaybackConfigurationName: FormControl<string | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreatePrefetchScheduleFormGroup() {
		return new FormGroup<PrefetchScheduleFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlaybackConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSourceLocationsResponse {
		Items?: Array<SourceLocation>;
		NextToken?: string;
	}
	export interface ListSourceLocationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSourceLocationsResponseFormGroup() {
		return new FormGroup<ListSourceLocationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>. */
	export interface SourceLocation {
		AccessConfiguration?: AccessConfiguration;

		/** Required */
		Arn: string;
		CreationTime?: Date;
		DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

		/** Required */
		HttpConfiguration: HttpConfiguration;
		LastModifiedTime?: Date;
		SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;

		/** Required */
		SourceLocationName: string;
		Tags?: __mapOf__string;
	}

	/** A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>. */
	export interface SourceLocationFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		SourceLocationName: FormControl<string | null | undefined>,
	}
	export function CreateSourceLocationFormGroup() {
		return new FormGroup<SourceLocationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface ListVodSourcesResponse {
		Items?: Array<VodSource>;
		NextToken?: string;
	}
	export interface ListVodSourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVodSourcesResponseFormGroup() {
		return new FormGroup<ListVodSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VOD source configuration parameters. */
	export interface VodSource {

		/** Required */
		Arn: string;
		CreationTime?: Date;

		/** Required */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;
		LastModifiedTime?: Date;

		/** Required */
		SourceLocationName: string;
		Tags?: __mapOf__string;

		/** Required */
		VodSourceName: string;
	}

	/** VOD source configuration parameters. */
	export interface VodSourceFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		SourceLocationName: FormControl<string | null | undefined>,

		/** Required */
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateVodSourceFormGroup() {
		return new FormGroup<VodSourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VodSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutChannelPolicyResponse {
	}
	export interface PutChannelPolicyResponseFormProperties {
	}
	export function CreatePutChannelPolicyResponseFormGroup() {
		return new FormGroup<PutChannelPolicyResponseFormProperties>({
		});

	}

	export interface PutPlaybackConfigurationResponse {
		AdDecisionServerUrl?: string;
		AvailSuppression?: AvailSuppression;
		Bumper?: Bumper;
		CdnConfiguration?: CdnConfiguration;
		ConfigurationAliases?: ConfigurationAliasesResponse;
		DashConfiguration?: DashConfiguration;
		HlsConfiguration?: HlsConfiguration;
		LivePreRollConfiguration?: LivePreRollConfiguration;
		LogConfiguration?: LogConfiguration;
		ManifestProcessingRules?: ManifestProcessingRules;
		Name?: string;
		PersonalizationThresholdSeconds?: number | null;
		PlaybackConfigurationArn?: string;
		PlaybackEndpointPrefix?: string;
		SessionInitializationEndpointPrefix?: string;
		SlateAdUrl?: string;
		Tags?: __mapOf__string;
		TranscodeProfileName?: string;
		VideoContentSourceUrl?: string;
	}
	export interface PutPlaybackConfigurationResponseFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,
		PlaybackConfigurationArn: FormControl<string | null | undefined>,
		PlaybackEndpointPrefix: FormControl<string | null | undefined>,
		SessionInitializationEndpointPrefix: FormControl<string | null | undefined>,
		SlateAdUrl: FormControl<string | null | undefined>,
		TranscodeProfileName: FormControl<string | null | undefined>,
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationResponseFormGroup() {
		return new FormGroup<PutPlaybackConfigurationResponseFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			PlaybackConfigurationArn: new FormControl<string | null | undefined>(undefined),
			PlaybackEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SessionInitializationEndpointPrefix: new FormControl<string | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartChannelResponse {
	}
	export interface StartChannelResponseFormProperties {
	}
	export function CreateStartChannelResponseFormGroup() {
		return new FormGroup<StartChannelResponseFormProperties>({
		});

	}

	export interface StopChannelResponse {
	}
	export interface StopChannelResponseFormProperties {
	}
	export function CreateStopChannelResponseFormGroup() {
		return new FormGroup<StopChannelResponseFormProperties>({
		});

	}

	export interface UpdateChannelResponse {
		Arn?: string;
		ChannelName?: string;
		ChannelState?: ChannelState;
		CreationTime?: Date;
		FillerSlate?: SlateSource;
		LastModifiedTime?: Date;
		Outputs?: Array<ResponseOutputItem>;
		PlaybackMode?: string;
		Tags?: __mapOf__string;
		Tier?: string;
	}
	export interface UpdateChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelName: FormControl<string | null | undefined>,
		ChannelState: FormControl<ChannelState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		PlaybackMode: FormControl<string | null | undefined>,
		Tier: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelResponseFormGroup() {
		return new FormGroup<UpdateChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ChannelState: new FormControl<ChannelState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			PlaybackMode: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLiveSourceResponse {
		Arn?: string;
		CreationTime?: Date;
		HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
		LastModifiedTime?: Date;
		LiveSourceName?: string;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
	}
	export interface UpdateLiveSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LiveSourceName: FormControl<string | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLiveSourceResponseFormGroup() {
		return new FormGroup<UpdateLiveSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProgramResponse {
		AdBreaks?: Array<AdBreak>;
		Arn?: string;
		ChannelName?: string;
		ClipRange?: ClipRange;
		CreationTime?: Date;
		DurationMillis?: number | null;
		LiveSourceName?: string;
		ProgramName?: string;
		ScheduledStartTime?: Date;
		SourceLocationName?: string;
		VodSourceName?: string;
	}
	export interface UpdateProgramResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
		LiveSourceName: FormControl<string | null | undefined>,
		ProgramName: FormControl<string | null | undefined>,
		ScheduledStartTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProgramResponseFormGroup() {
		return new FormGroup<UpdateProgramResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined),
			ScheduledStartTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Program transition configuration. */
	export interface UpdateProgramTransition {
		DurationMillis?: number | null;
		ScheduledStartTimeMillis?: number | null;
	}

	/** Program transition configuration. */
	export interface UpdateProgramTransitionFormProperties {
		DurationMillis: FormControl<number | null | undefined>,
		ScheduledStartTimeMillis: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProgramTransitionFormGroup() {
		return new FormGroup<UpdateProgramTransitionFormProperties>({
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			ScheduledStartTimeMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceLocationResponse {
		AccessConfiguration?: AccessConfiguration;
		Arn?: string;
		CreationTime?: Date;
		DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
		HttpConfiguration?: HttpConfiguration;
		LastModifiedTime?: Date;
		SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
	}
	export interface UpdateSourceLocationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceLocationResponseFormGroup() {
		return new FormGroup<UpdateSourceLocationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVodSourceResponse {
		Arn?: string;
		CreationTime?: Date;
		HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
		LastModifiedTime?: Date;
		SourceLocationName?: string;
		Tags?: __mapOf__string;
		VodSourceName?: string;
	}
	export interface UpdateVodSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVodSourceResponseFormGroup() {
		return new FormGroup<UpdateVodSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The predefined aliases for dynamic variables. */
	export interface ConfigurationAliasesRequest {
	}

	/** The predefined aliases for dynamic variables. */
	export interface ConfigurationAliasesRequestFormProperties {
	}
	export function CreateConfigurationAliasesRequestFormGroup() {
		return new FormGroup<ConfigurationAliasesRequestFormProperties>({
		});

	}

	export interface ConfigureLogsForChannelRequest {

		/** Required */
		ChannelName: string;

		/** Required */
		LogTypes: Array<LogType>;
	}
	export interface ConfigureLogsForChannelRequestFormProperties {

		/** Required */
		ChannelName: FormControl<string | null | undefined>,
	}
	export function CreateConfigureLogsForChannelRequestFormGroup() {
		return new FormGroup<ConfigureLogsForChannelRequestFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configures Amazon CloudWatch log settings for a playback configuration. */
	export interface ConfigureLogsForPlaybackConfigurationRequest {

		/** Required */
		PercentEnabled: number;

		/** Required */
		PlaybackConfigurationName: string;
	}

	/** Configures Amazon CloudWatch log settings for a playback configuration. */
	export interface ConfigureLogsForPlaybackConfigurationRequestFormProperties {

		/** Required */
		PercentEnabled: FormControl<number | null | undefined>,

		/** Required */
		PlaybackConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateConfigureLogsForPlaybackConfigurationRequestFormGroup() {
		return new FormGroup<ConfigureLogsForPlaybackConfigurationRequestFormProperties>({
			PercentEnabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PlaybackConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlaybackMode { LOOP = 'LOOP', LINEAR = 'LINEAR' }

	export enum Tier { BASIC = 'BASIC', STANDARD = 'STANDARD' }

	export interface CreateChannelRequest {
		FillerSlate?: SlateSource;

		/** Required */
		Outputs: Array<RequestOutputItem>;

		/** Required */
		PlaybackMode: PlaybackMode;
		Tags?: __mapOf__string;
		Tier?: Tier;
	}
	export interface CreateChannelRequestFormProperties {

		/** Required */
		PlaybackMode: FormControl<PlaybackMode | null | undefined>,
		Tier: FormControl<Tier | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			PlaybackMode: new FormControl<PlaybackMode | null | undefined>(undefined, [Validators.required]),
			Tier: new FormControl<Tier | null | undefined>(undefined),
		});

	}

	export interface CreateLiveSourceRequest {

		/** Required */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;
		Tags?: __mapOf__string;
	}
	export interface CreateLiveSourceRequestFormProperties {
	}
	export function CreateCreateLiveSourceRequestFormGroup() {
		return new FormGroup<CreateLiveSourceRequestFormProperties>({
		});

	}

	export interface CreatePrefetchScheduleRequest {

		/** Required */
		Consumption: PrefetchConsumption;

		/** Required */
		Retrieval: PrefetchRetrieval;
		StreamId?: string;
	}
	export interface CreatePrefetchScheduleRequestFormProperties {
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePrefetchScheduleRequestFormGroup() {
		return new FormGroup<CreatePrefetchScheduleRequestFormProperties>({
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule. */
	export interface ScheduleConfiguration {
		ClipRange?: ClipRange;

		/** Required */
		Transition: Transition;
	}

	/** Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule. */
	export interface ScheduleConfigurationFormProperties {
	}
	export function CreateScheduleConfigurationFormGroup() {
		return new FormGroup<ScheduleConfigurationFormProperties>({
		});

	}

	export interface CreateProgramRequest {
		AdBreaks?: Array<AdBreak>;
		LiveSourceName?: string;

		/** Required */
		ScheduleConfiguration: ScheduleConfiguration;

		/** Required */
		SourceLocationName: string;
		VodSourceName?: string;
	}
	export interface CreateProgramRequestFormProperties {
		LiveSourceName: FormControl<string | null | undefined>,

		/** Required */
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProgramRequestFormGroup() {
		return new FormGroup<CreateProgramRequestFormProperties>({
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSourceLocationRequest {
		AccessConfiguration?: AccessConfiguration;
		DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

		/** Required */
		HttpConfiguration: HttpConfiguration;
		SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
		Tags?: __mapOf__string;
	}
	export interface CreateSourceLocationRequestFormProperties {
	}
	export function CreateCreateSourceLocationRequestFormGroup() {
		return new FormGroup<CreateSourceLocationRequestFormProperties>({
		});

	}

	export interface CreateVodSourceRequest {

		/** Required */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;
		Tags?: __mapOf__string;
	}
	export interface CreateVodSourceRequestFormProperties {
	}
	export function CreateCreateVodSourceRequestFormGroup() {
		return new FormGroup<CreateVodSourceRequestFormProperties>({
		});

	}


	/** The configuration for DASH PUT operations. */
	export interface DashConfigurationForPut {
		MpdLocation?: string;
		OriginManifestType?: OriginManifestType;
	}

	/** The configuration for DASH PUT operations. */
	export interface DashConfigurationForPutFormProperties {
		MpdLocation: FormControl<string | null | undefined>,
		OriginManifestType: FormControl<OriginManifestType | null | undefined>,
	}
	export function CreateDashConfigurationForPutFormGroup() {
		return new FormGroup<DashConfigurationForPutFormProperties>({
			MpdLocation: new FormControl<string | null | undefined>(undefined),
			OriginManifestType: new FormControl<OriginManifestType | null | undefined>(undefined),
		});

	}

	export interface DeleteChannelPolicyRequest {
	}
	export interface DeleteChannelPolicyRequestFormProperties {
	}
	export function CreateDeleteChannelPolicyRequestFormGroup() {
		return new FormGroup<DeleteChannelPolicyRequestFormProperties>({
		});

	}

	export interface DeleteChannelRequest {
	}
	export interface DeleteChannelRequestFormProperties {
	}
	export function CreateDeleteChannelRequestFormGroup() {
		return new FormGroup<DeleteChannelRequestFormProperties>({
		});

	}

	export interface DeleteLiveSourceRequest {
	}
	export interface DeleteLiveSourceRequestFormProperties {
	}
	export function CreateDeleteLiveSourceRequestFormGroup() {
		return new FormGroup<DeleteLiveSourceRequestFormProperties>({
		});

	}

	export interface DeletePlaybackConfigurationRequest {
	}
	export interface DeletePlaybackConfigurationRequestFormProperties {
	}
	export function CreateDeletePlaybackConfigurationRequestFormGroup() {
		return new FormGroup<DeletePlaybackConfigurationRequestFormProperties>({
		});

	}

	export interface DeletePrefetchScheduleRequest {
	}
	export interface DeletePrefetchScheduleRequestFormProperties {
	}
	export function CreateDeletePrefetchScheduleRequestFormGroup() {
		return new FormGroup<DeletePrefetchScheduleRequestFormProperties>({
		});

	}

	export interface DeleteProgramRequest {
	}
	export interface DeleteProgramRequestFormProperties {
	}
	export function CreateDeleteProgramRequestFormGroup() {
		return new FormGroup<DeleteProgramRequestFormProperties>({
		});

	}

	export interface DeleteSourceLocationRequest {
	}
	export interface DeleteSourceLocationRequestFormProperties {
	}
	export function CreateDeleteSourceLocationRequestFormGroup() {
		return new FormGroup<DeleteSourceLocationRequestFormProperties>({
		});

	}

	export interface DeleteVodSourceRequest {
	}
	export interface DeleteVodSourceRequestFormProperties {
	}
	export function CreateDeleteVodSourceRequestFormGroup() {
		return new FormGroup<DeleteVodSourceRequestFormProperties>({
		});

	}

	export interface DescribeChannelRequest {
	}
	export interface DescribeChannelRequestFormProperties {
	}
	export function CreateDescribeChannelRequestFormGroup() {
		return new FormGroup<DescribeChannelRequestFormProperties>({
		});

	}

	export interface DescribeLiveSourceRequest {
	}
	export interface DescribeLiveSourceRequestFormProperties {
	}
	export function CreateDescribeLiveSourceRequestFormGroup() {
		return new FormGroup<DescribeLiveSourceRequestFormProperties>({
		});

	}

	export interface DescribeProgramRequest {
	}
	export interface DescribeProgramRequestFormProperties {
	}
	export function CreateDescribeProgramRequestFormGroup() {
		return new FormGroup<DescribeProgramRequestFormProperties>({
		});

	}

	export interface DescribeSourceLocationRequest {
	}
	export interface DescribeSourceLocationRequestFormProperties {
	}
	export function CreateDescribeSourceLocationRequestFormGroup() {
		return new FormGroup<DescribeSourceLocationRequestFormProperties>({
		});

	}

	export interface DescribeVodSourceRequest {
	}
	export interface DescribeVodSourceRequestFormProperties {
	}
	export function CreateDescribeVodSourceRequestFormGroup() {
		return new FormGroup<DescribeVodSourceRequestFormProperties>({
		});

	}

	export interface GetChannelPolicyRequest {
	}
	export interface GetChannelPolicyRequestFormProperties {
	}
	export function CreateGetChannelPolicyRequestFormGroup() {
		return new FormGroup<GetChannelPolicyRequestFormProperties>({
		});

	}

	export interface GetChannelScheduleRequest {
	}
	export interface GetChannelScheduleRequestFormProperties {
	}
	export function CreateGetChannelScheduleRequestFormGroup() {
		return new FormGroup<GetChannelScheduleRequestFormProperties>({
		});

	}

	export interface GetPlaybackConfigurationRequest {
	}
	export interface GetPlaybackConfigurationRequestFormProperties {
	}
	export function CreateGetPlaybackConfigurationRequestFormGroup() {
		return new FormGroup<GetPlaybackConfigurationRequestFormProperties>({
		});

	}

	export interface GetPrefetchScheduleRequest {
	}
	export interface GetPrefetchScheduleRequestFormProperties {
	}
	export function CreateGetPrefetchScheduleRequestFormGroup() {
		return new FormGroup<GetPrefetchScheduleRequestFormProperties>({
		});

	}

	export interface ListAlertsRequest {
	}
	export interface ListAlertsRequestFormProperties {
	}
	export function CreateListAlertsRequestFormGroup() {
		return new FormGroup<ListAlertsRequestFormProperties>({
		});

	}

	export interface ListChannelsRequest {
	}
	export interface ListChannelsRequestFormProperties {
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
		});

	}

	export interface ListLiveSourcesRequest {
	}
	export interface ListLiveSourcesRequestFormProperties {
	}
	export function CreateListLiveSourcesRequestFormGroup() {
		return new FormGroup<ListLiveSourcesRequestFormProperties>({
		});

	}

	export interface ListPlaybackConfigurationsRequest {
	}
	export interface ListPlaybackConfigurationsRequestFormProperties {
	}
	export function CreateListPlaybackConfigurationsRequestFormGroup() {
		return new FormGroup<ListPlaybackConfigurationsRequestFormProperties>({
		});

	}

	export interface ListPrefetchSchedulesRequest {
		MaxResults?: number | null;
		NextToken?: string;
		StreamId?: string;
	}
	export interface ListPrefetchSchedulesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateListPrefetchSchedulesRequestFormGroup() {
		return new FormGroup<ListPrefetchSchedulesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSourceLocationsRequest {
	}
	export interface ListSourceLocationsRequestFormProperties {
	}
	export function CreateListSourceLocationsRequestFormGroup() {
		return new FormGroup<ListSourceLocationsRequestFormProperties>({
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

	export interface ListVodSourcesRequest {
	}
	export interface ListVodSourcesRequestFormProperties {
	}
	export function CreateListVodSourcesRequestFormGroup() {
		return new FormGroup<ListVodSourcesRequestFormProperties>({
		});

	}

	export interface PutChannelPolicyRequest {

		/** Required */
		Policy: string;
	}
	export interface PutChannelPolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutChannelPolicyRequestFormGroup() {
		return new FormGroup<PutChannelPolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutPlaybackConfigurationRequest {
		AdDecisionServerUrl?: string;
		AvailSuppression?: AvailSuppression;
		Bumper?: Bumper;
		CdnConfiguration?: CdnConfiguration;
		ConfigurationAliases?: ConfigurationAliasesRequest;
		DashConfiguration?: DashConfigurationForPut;
		LivePreRollConfiguration?: LivePreRollConfiguration;
		ManifestProcessingRules?: ManifestProcessingRules;

		/** Required */
		Name: string;
		PersonalizationThresholdSeconds?: number | null;
		SlateAdUrl?: string;
		Tags?: __mapOf__string;
		TranscodeProfileName?: string;
		VideoContentSourceUrl?: string;
	}
	export interface PutPlaybackConfigurationRequestFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,
		SlateAdUrl: FormControl<string | null | undefined>,
		TranscodeProfileName: FormControl<string | null | undefined>,
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationRequestFormGroup() {
		return new FormGroup<PutPlaybackConfigurationRequestFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartChannelRequest {
	}
	export interface StartChannelRequestFormProperties {
	}
	export function CreateStartChannelRequestFormGroup() {
		return new FormGroup<StartChannelRequestFormProperties>({
		});

	}

	export interface StopChannelRequest {
	}
	export interface StopChannelRequestFormProperties {
	}
	export function CreateStopChannelRequestFormGroup() {
		return new FormGroup<StopChannelRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: __mapOf__string;
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
		FillerSlate?: SlateSource;

		/** Required */
		Outputs: Array<RequestOutputItem>;
	}
	export interface UpdateChannelRequestFormProperties {
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
		});

	}

	export interface UpdateLiveSourceRequest {

		/** Required */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;
	}
	export interface UpdateLiveSourceRequestFormProperties {
	}
	export function CreateUpdateLiveSourceRequestFormGroup() {
		return new FormGroup<UpdateLiveSourceRequestFormProperties>({
		});

	}


	/** Schedule configuration parameters. */
	export interface UpdateProgramScheduleConfiguration {
		ClipRange?: ClipRange;
		Transition?: UpdateProgramTransition;
	}

	/** Schedule configuration parameters. */
	export interface UpdateProgramScheduleConfigurationFormProperties {
	}
	export function CreateUpdateProgramScheduleConfigurationFormGroup() {
		return new FormGroup<UpdateProgramScheduleConfigurationFormProperties>({
		});

	}

	export interface UpdateProgramRequest {
		AdBreaks?: Array<AdBreak>;

		/** Required */
		ScheduleConfiguration: UpdateProgramScheduleConfiguration;
	}
	export interface UpdateProgramRequestFormProperties {
	}
	export function CreateUpdateProgramRequestFormGroup() {
		return new FormGroup<UpdateProgramRequestFormProperties>({
		});

	}

	export interface UpdateSourceLocationRequest {
		AccessConfiguration?: AccessConfiguration;
		DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;

		/** Required */
		HttpConfiguration: HttpConfiguration;
		SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
	}
	export interface UpdateSourceLocationRequestFormProperties {
	}
	export function CreateUpdateSourceLocationRequestFormGroup() {
		return new FormGroup<UpdateSourceLocationRequestFormProperties>({
		});

	}

	export interface UpdateVodSourceRequest {

		/** Required */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;
	}
	export interface UpdateVodSourceRequestFormProperties {
	}
	export function CreateUpdateVodSourceRequestFormGroup() {
		return new FormGroup<UpdateVodSourceRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Configures Amazon CloudWatch log settings for a channel.
		 * Put configureLogs/channel
		 * @return {ConfigureLogsForChannelResponse} Success
		 */
		ConfigureLogsForChannel(requestBody: ConfigureLogsForChannelPutBody): Observable<ConfigureLogsForChannelResponse> {
			return this.http.put<ConfigureLogsForChannelResponse>(this.baseUri + 'configureLogs/channel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Amazon CloudWatch log settings for a playback configuration.
		 * Put configureLogs/playbackConfiguration
		 * @return {ConfigureLogsForPlaybackConfigurationResponse} Success
		 */
		ConfigureLogsForPlaybackConfiguration(requestBody: ConfigureLogsForPlaybackConfigurationPutBody): Observable<ConfigureLogsForPlaybackConfigurationResponse> {
			return this.http.put<ConfigureLogsForPlaybackConfigurationResponse>(this.baseUri + 'configureLogs/playbackConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.
		 * Post channel/{ChannelName}
		 * @param {string} ChannelName The name of the channel.
		 * @return {CreateChannelResponse} Success
		 */
		CreateChannel(ChannelName: string, requestBody: CreateChannelPostBody): Observable<CreateChannelResponse> {
			return this.http.post<CreateChannelResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.
		 * Delete channel/{ChannelName}
		 * @param {string} ChannelName The name of the channel.
		 * @return {DeleteChannelResponse} Success
		 */
		DeleteChannel(ChannelName: string): Observable<DeleteChannelResponse> {
			return this.http.delete<DeleteChannelResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)), {});
		}

		/**
		 * Describes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.
		 * Get channel/{ChannelName}
		 * @param {string} ChannelName The name of the channel.
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(ChannelName: string): Observable<DescribeChannelResponse> {
			return this.http.get<DescribeChannelResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)), {});
		}

		/**
		 * Updates a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.
		 * Put channel/{ChannelName}
		 * @param {string} ChannelName The name of the channel.
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(ChannelName: string, requestBody: UpdateChannelPutBody): Observable<UpdateChannelResponse> {
			return this.http.put<UpdateChannelResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The live source configuration.
		 * Post sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}
		 * @param {string} LiveSourceName The name of the live source.
		 * @param {string} SourceLocationName The name of the source location.
		 * @return {CreateLiveSourceResponse} Success
		 */
		CreateLiveSource(LiveSourceName: string, SourceLocationName: string, requestBody: CreateLiveSourcePostBody): Observable<CreateLiveSourceResponse> {
			return this.http.post<CreateLiveSourceResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/liveSource/' + (LiveSourceName == null ? '' : encodeURIComponent(LiveSourceName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The live source to delete.
		 * Delete sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}
		 * @param {string} LiveSourceName The name of the live source.
		 * @param {string} SourceLocationName The name of the source location associated with this Live Source.
		 * @return {DeleteLiveSourceResponse} Success
		 */
		DeleteLiveSource(LiveSourceName: string, SourceLocationName: string): Observable<DeleteLiveSourceResponse> {
			return this.http.delete<DeleteLiveSourceResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/liveSource/' + (LiveSourceName == null ? '' : encodeURIComponent(LiveSourceName)), {});
		}

		/**
		 * The live source to describe.
		 * Get sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}
		 * @param {string} LiveSourceName The name of the live source.
		 * @param {string} SourceLocationName The name of the source location associated with this Live Source.
		 * @return {DescribeLiveSourceResponse} Success
		 */
		DescribeLiveSource(LiveSourceName: string, SourceLocationName: string): Observable<DescribeLiveSourceResponse> {
			return this.http.get<DescribeLiveSourceResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/liveSource/' + (LiveSourceName == null ? '' : encodeURIComponent(LiveSourceName)), {});
		}

		/**
		 * Updates a live source's configuration.
		 * Put sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}
		 * @param {string} LiveSourceName The name of the live source.
		 * @param {string} SourceLocationName The name of the source location associated with this Live Source.
		 * @return {UpdateLiveSourceResponse} Success
		 */
		UpdateLiveSource(LiveSourceName: string, SourceLocationName: string, requestBody: UpdateLiveSourcePutBody): Observable<UpdateLiveSourceResponse> {
			return this.http.put<UpdateLiveSourceResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/liveSource/' + (LiveSourceName == null ? '' : encodeURIComponent(LiveSourceName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.
		 * Post prefetchSchedule/{PlaybackConfigurationName}/{Name}
		 * @param {string} Name The name to assign to the schedule request.
		 * @param {string} PlaybackConfigurationName The name to assign to the playback configuration.
		 * @return {CreatePrefetchScheduleResponse} Success
		 */
		CreatePrefetchSchedule(Name: string, PlaybackConfigurationName: string, requestBody: CreatePrefetchSchedulePostBody): Observable<CreatePrefetchScheduleResponse> {
			return this.http.post<CreatePrefetchScheduleResponse>(this.baseUri + 'prefetchSchedule/' + (PlaybackConfigurationName == null ? '' : encodeURIComponent(PlaybackConfigurationName)) + '/' + (Name == null ? '' : encodeURIComponent(Name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a prefetch schedule for a specific playback configuration. If you call <code>DeletePrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.
		 * Delete prefetchSchedule/{PlaybackConfigurationName}/{Name}
		 * @param {string} Name The name of the prefetch schedule. If the action is successful, the service sends back an HTTP 204 response with an empty HTTP body.
		 * @param {string} PlaybackConfigurationName The name of the playback configuration for this prefetch schedule.
		 * @return {void} 
		 */
		DeletePrefetchSchedule(Name: string, PlaybackConfigurationName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'prefetchSchedule/' + (PlaybackConfigurationName == null ? '' : encodeURIComponent(PlaybackConfigurationName)) + '/' + (Name == null ? '' : encodeURIComponent(Name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.
		 * Get prefetchSchedule/{PlaybackConfigurationName}/{Name}
		 * @param {string} Name The name of the prefetch schedule. The name must be unique among all prefetch schedules that are associated with the specified playback configuration.
		 * @param {string} PlaybackConfigurationName Returns information about the prefetch schedule for a specific playback configuration. If you call <code>GetPrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code.
		 * @return {GetPrefetchScheduleResponse} Success
		 */
		GetPrefetchSchedule(Name: string, PlaybackConfigurationName: string): Observable<GetPrefetchScheduleResponse> {
			return this.http.get<GetPrefetchScheduleResponse>(this.baseUri + 'prefetchSchedule/' + (PlaybackConfigurationName == null ? '' : encodeURIComponent(PlaybackConfigurationName)) + '/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Creates a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.
		 * Post channel/{ChannelName}/program/{ProgramName}
		 * @param {string} ChannelName The name of the channel for this Program.
		 * @param {string} ProgramName The name of the Program.
		 * @return {CreateProgramResponse} Success
		 */
		CreateProgram(ChannelName: string, ProgramName: string, requestBody: CreateProgramPostBody): Observable<CreateProgramResponse> {
			return this.http.post<CreateProgramResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/program/' + (ProgramName == null ? '' : encodeURIComponent(ProgramName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.
		 * Delete channel/{ChannelName}/program/{ProgramName}
		 * @param {string} ChannelName The name of the channel.
		 * @param {string} ProgramName The name of the program.
		 * @return {DeleteProgramResponse} Success
		 */
		DeleteProgram(ChannelName: string, ProgramName: string): Observable<DeleteProgramResponse> {
			return this.http.delete<DeleteProgramResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/program/' + (ProgramName == null ? '' : encodeURIComponent(ProgramName)), {});
		}

		/**
		 * Describes a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.
		 * Get channel/{ChannelName}/program/{ProgramName}
		 * @param {string} ChannelName The name of the channel associated with this Program.
		 * @param {string} ProgramName The name of the program.
		 * @return {DescribeProgramResponse} Success
		 */
		DescribeProgram(ChannelName: string, ProgramName: string): Observable<DescribeProgramResponse> {
			return this.http.get<DescribeProgramResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/program/' + (ProgramName == null ? '' : encodeURIComponent(ProgramName)), {});
		}

		/**
		 * Updates a program within a channel.
		 * Put channel/{ChannelName}/program/{ProgramName}
		 * @param {string} ChannelName The name of the channel for this Program.
		 * @param {string} ProgramName The name of the Program.
		 * @return {UpdateProgramResponse} Success
		 */
		UpdateProgram(ChannelName: string, ProgramName: string, requestBody: UpdateProgramPutBody): Observable<UpdateProgramResponse> {
			return this.http.put<UpdateProgramResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/program/' + (ProgramName == null ? '' : encodeURIComponent(ProgramName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.
		 * Post sourceLocation/{SourceLocationName}
		 * @param {string} SourceLocationName The name associated with the source location.
		 * @return {CreateSourceLocationResponse} Success
		 */
		CreateSourceLocation(SourceLocationName: string, requestBody: CreateSourceLocationPostBody): Observable<CreateSourceLocationResponse> {
			return this.http.post<CreateSourceLocationResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.
		 * Delete sourceLocation/{SourceLocationName}
		 * @param {string} SourceLocationName The name of the source location.
		 * @return {DeleteSourceLocationResponse} Success
		 */
		DeleteSourceLocation(SourceLocationName: string): Observable<DeleteSourceLocationResponse> {
			return this.http.delete<DeleteSourceLocationResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)), {});
		}

		/**
		 * Describes a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.
		 * Get sourceLocation/{SourceLocationName}
		 * @param {string} SourceLocationName The name of the source location.
		 * @return {DescribeSourceLocationResponse} Success
		 */
		DescribeSourceLocation(SourceLocationName: string): Observable<DescribeSourceLocationResponse> {
			return this.http.get<DescribeSourceLocationResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)), {});
		}

		/**
		 * Updates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.
		 * Put sourceLocation/{SourceLocationName}
		 * @param {string} SourceLocationName The name of the source location.
		 * @return {UpdateSourceLocationResponse} Success
		 */
		UpdateSourceLocation(SourceLocationName: string, requestBody: UpdateSourceLocationPutBody): Observable<UpdateSourceLocationResponse> {
			return this.http.put<UpdateSourceLocationResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The VOD source configuration parameters.
		 * Post sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}
		 * @param {string} SourceLocationName The name of the source location for this VOD source.
		 * @param {string} VodSourceName The name associated with the VOD source.&gt;
		 * @return {CreateVodSourceResponse} Success
		 */
		CreateVodSource(SourceLocationName: string, VodSourceName: string, requestBody: CreateVodSourcePostBody): Observable<CreateVodSourceResponse> {
			return this.http.post<CreateVodSourceResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/vodSource/' + (VodSourceName == null ? '' : encodeURIComponent(VodSourceName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The video on demand (VOD) source to delete.
		 * Delete sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}
		 * @param {string} SourceLocationName The name of the source location associated with this VOD Source.
		 * @param {string} VodSourceName The name of the VOD source.
		 * @return {DeleteVodSourceResponse} Success
		 */
		DeleteVodSource(SourceLocationName: string, VodSourceName: string): Observable<DeleteVodSourceResponse> {
			return this.http.delete<DeleteVodSourceResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/vodSource/' + (VodSourceName == null ? '' : encodeURIComponent(VodSourceName)), {});
		}

		/**
		 * Provides details about a specific video on demand (VOD) source in a specific source location.
		 * Get sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}
		 * @param {string} SourceLocationName The name of the source location associated with this VOD Source.
		 * @param {string} VodSourceName The name of the VOD Source.
		 * @return {DescribeVodSourceResponse} Success
		 */
		DescribeVodSource(SourceLocationName: string, VodSourceName: string): Observable<DescribeVodSourceResponse> {
			return this.http.get<DescribeVodSourceResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/vodSource/' + (VodSourceName == null ? '' : encodeURIComponent(VodSourceName)), {});
		}

		/**
		 * Updates a VOD source's configuration.
		 * Put sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}
		 * @param {string} SourceLocationName The name of the source location associated with this VOD Source.
		 * @param {string} VodSourceName The name of the VOD source.
		 * @return {UpdateVodSourceResponse} Success
		 */
		UpdateVodSource(SourceLocationName: string, VodSourceName: string, requestBody: UpdateVodSourcePutBody): Observable<UpdateVodSourceResponse> {
			return this.http.put<UpdateVodSourceResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/vodSource/' + (VodSourceName == null ? '' : encodeURIComponent(VodSourceName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The channel policy to delete.
		 * Delete channel/{ChannelName}/policy
		 * @param {string} ChannelName The name of the channel associated with this channel policy.
		 * @return {DeleteChannelPolicyResponse} Success
		 */
		DeleteChannelPolicy(ChannelName: string): Observable<DeleteChannelPolicyResponse> {
			return this.http.delete<DeleteChannelPolicyResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/policy', {});
		}

		/**
		 * Returns the channel's IAM policy. IAM policies are used to control access to your channel.
		 * Get channel/{ChannelName}/policy
		 * @param {string} ChannelName The name of the channel associated with this Channel Policy.
		 * @return {GetChannelPolicyResponse} Success
		 */
		GetChannelPolicy(ChannelName: string): Observable<GetChannelPolicyResponse> {
			return this.http.get<GetChannelPolicyResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/policy', {});
		}

		/**
		 * Creates an IAM policy for the channel. IAM policies are used to control access to your channel.
		 * Put channel/{ChannelName}/policy
		 * @param {string} ChannelName The channel name associated with this Channel Policy.
		 * @return {PutChannelPolicyResponse} Success
		 */
		PutChannelPolicy(ChannelName: string, requestBody: PutChannelPolicyPutBody): Observable<PutChannelPolicyResponse> {
			return this.http.put<PutChannelPolicyResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.
		 * Delete playbackConfiguration/{Name}
		 * @param {string} Name The name of the playback configuration.
		 * @return {void} 
		 */
		DeletePlaybackConfiguration(Name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'playbackConfiguration/' + (Name == null ? '' : encodeURIComponent(Name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.
		 * Get playbackConfiguration/{Name}
		 * @param {string} Name The identifier for the playback configuration.
		 * @return {GetPlaybackConfigurationResponse} Success
		 */
		GetPlaybackConfiguration(Name: string): Observable<GetPlaybackConfigurationResponse> {
			return this.http.get<GetPlaybackConfigurationResponse>(this.baseUri + 'playbackConfiguration/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Retrieves information about your channel's schedule.
		 * Get channel/{ChannelName}/schedule
		 * @param {string} ChannelName The name of the channel associated with this Channel Schedule.
		 * @param {string} durationMinutes The duration in minutes of the channel schedule.
		 * @param {number} maxResults The maximum number of channel schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channel schedules, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * @param {string} nextToken <p>(Optional) If the playback configuration has more than <code>MaxResults</code> channel schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>GetChannelScheduleRequest</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p>If the previous response didn't include a <code>NextToken</code> element, there are no more channel schedules to get.</p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetChannelScheduleResponse} Success
		 */
		GetChannelSchedule(ChannelName: string, durationMinutes: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetChannelScheduleResponse> {
			return this.http.get<GetChannelScheduleResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/schedule&durationMinutes=' + (durationMinutes == null ? '' : encodeURIComponent(durationMinutes)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the alerts that are associated with a MediaTailor channel assembly resource.
		 * Get alerts#resourceArn
		 * @param {number} maxResults The maximum number of alerts that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> alerts, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * @param {string} nextToken Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAlertsResponse} Success
		 */
		ListAlerts(maxResults: number | null | undefined, nextToken: string | null | undefined, resourceArn: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAlertsResponse> {
			return this.http.get<ListAlertsResponse>(this.baseUri + 'alerts#resourceArn?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves information about the channels that are associated with the current AWS account.
		 * Get channels
		 * @param {number} maxResults The maximum number of channels that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> channels, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * @param {string} nextToken Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'channels?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the live sources contained in a source location. A source represents a piece of content.
		 * Get sourceLocation/{SourceLocationName}/liveSources
		 * @param {number} maxResults The maximum number of live sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> live sources, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * @param {string} nextToken Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
		 * @param {string} SourceLocationName The name of the source location associated with this Live Sources list.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLiveSourcesResponse} Success
		 */
		ListLiveSources(maxResults: number | null | undefined, nextToken: string | null | undefined, SourceLocationName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLiveSourcesResponse> {
			return this.http.get<ListLiveSourcesResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/liveSources?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves existing playback configurations. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with Configurations in AWS Elemental MediaTailor</a>.
		 * Get playbackConfigurations
		 * @param {number} MaxResults The maximum number of playback configurations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> playback configurations, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * @param {string} NextToken Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
		 * @return {ListPlaybackConfigurationsResponse} Success
		 */
		ListPlaybackConfigurations(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListPlaybackConfigurationsResponse> {
			return this.http.get<ListPlaybackConfigurationsResponse>(this.baseUri + 'playbackConfigurations?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the prefetch schedules for a playback configuration.
		 * Post prefetchSchedule/{PlaybackConfigurationName}
		 * @param {string} PlaybackConfigurationName Retrieves the prefetch schedule(s) for a specific playback configuration.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPrefetchSchedulesResponse} Success
		 */
		ListPrefetchSchedules(PlaybackConfigurationName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPrefetchSchedulesPostBody): Observable<ListPrefetchSchedulesResponse> {
			return this.http.post<ListPrefetchSchedulesResponse>(this.baseUri + 'prefetchSchedule/' + (PlaybackConfigurationName == null ? '' : encodeURIComponent(PlaybackConfigurationName)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the source locations for a channel. A source location defines the host server URL, and contains a list of sources.
		 * Get sourceLocations
		 * @param {number} maxResults  The maximum number of source locations that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> source locations, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * @param {string} nextToken Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSourceLocationsResponse} Success
		 */
		ListSourceLocations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSourceLocationsResponse> {
			return this.http.get<ListSourceLocationsResponse>(this.baseUri + 'sourceLocations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * A list of tags that are associated with this resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) associated with this resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * The resource to tag. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) associated with the resource.
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the VOD sources contained in a source location. A source represents a piece of content.
		 * Get sourceLocation/{SourceLocationName}/vodSources
		 * @param {number} maxResults  The maximum number of VOD sources that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> VOD sources, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * @param {string} nextToken Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
		 * @param {string} SourceLocationName The name of the source location associated with this VOD Source list.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVodSourcesResponse} Success
		 */
		ListVodSources(maxResults: number | null | undefined, nextToken: string | null | undefined, SourceLocationName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVodSourcesResponse> {
			return this.http.get<ListVodSourcesResponse>(this.baseUri + 'sourceLocation/' + (SourceLocationName == null ? '' : encodeURIComponent(SourceLocationName)) + '/vodSources?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.
		 * Put playbackConfiguration
		 * @return {PutPlaybackConfigurationResponse} Success
		 */
		PutPlaybackConfiguration(requestBody: PutPlaybackConfigurationPutBody): Observable<PutPlaybackConfigurationResponse> {
			return this.http.put<PutPlaybackConfigurationResponse>(this.baseUri + 'playbackConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.
		 * Put channel/{ChannelName}/start
		 * @param {string} ChannelName The name of the channel.
		 * @return {StartChannelResponse} Success
		 */
		StartChannel(ChannelName: string): Observable<StartChannelResponse> {
			return this.http.put<StartChannelResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/start', null, {});
		}

		/**
		 * Stops a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.
		 * Put channel/{ChannelName}/stop
		 * @param {string} ChannelName The name of the channel.
		 * @return {StopChannelResponse} Success
		 */
		StopChannel(ChannelName: string): Observable<StopChannelResponse> {
			return this.http.put<StopChannelResponse>(this.baseUri + 'channel/' + (ChannelName == null ? '' : encodeURIComponent(ChannelName)) + '/stop', null, {});
		}

		/**
		 * The resource to untag.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource to untag.
		 * @param {Array<string>} tagKeys The tag keys associated with the resource.
		 * @return {void} 
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface ConfigureLogsForChannelPutBody {

		/**
		 * The name of the channel.
		 * Required
		 */
		ChannelName: string;

		/**
		 * The types of logs to collect.
		 * Required
		 */
		LogTypes: Array<LogType>;
	}
	export interface ConfigureLogsForChannelPutBodyFormProperties {

		/**
		 * The name of the channel.
		 * Required
		 */
		ChannelName: FormControl<string | null | undefined>,
	}
	export function CreateConfigureLogsForChannelPutBodyFormGroup() {
		return new FormGroup<ConfigureLogsForChannelPutBodyFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConfigureLogsForPlaybackConfigurationPutBody {

		/**
		 * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: <code>0</code> - <code>100</code> </p>
		 * Required
		 */
		PercentEnabled: number;

		/**
		 * The name of the playback configuration.
		 * Required
		 */
		PlaybackConfigurationName: string;
	}
	export interface ConfigureLogsForPlaybackConfigurationPutBodyFormProperties {

		/**
		 * <p>The percentage of session logs that MediaTailor sends to your Cloudwatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to <code>60</code>, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/debug-log-mode.html">debug log mode</a>.</p> <p>Valid values: <code>0</code> - <code>100</code> </p>
		 * Required
		 */
		PercentEnabled: FormControl<number | null | undefined>,

		/**
		 * The name of the playback configuration.
		 * Required
		 */
		PlaybackConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateConfigureLogsForPlaybackConfigurationPutBodyFormGroup() {
		return new FormGroup<ConfigureLogsForPlaybackConfigurationPutBodyFormProperties>({
			PercentEnabled: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PlaybackConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateChannelPostBody {

		/** Slate VOD source configuration. */
		FillerSlate?: CreateChannelPostBodyFillerSlate;

		/**
		 * An object that represents an object in the CreateChannel request.
		 * Required
		 */
		Outputs: Array<RequestOutputItem>;

		/**
		 * <p>The type of playback mode to use for this channel.</p> <p> <code>LINEAR</code> - The programs in the schedule play once back-to-back in the schedule.</p> <p> <code>LOOP</code> - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.</p>
		 * Required
		 */
		PlaybackMode: PlaybackMode;

		/** The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags?: {[id: string]: string };

		/** The tier of the channel. */
		Tier?: Tier | null;
	}
	export interface CreateChannelPostBodyFormProperties {

		/**
		 * <p>The type of playback mode to use for this channel.</p> <p> <code>LINEAR</code> - The programs in the schedule play once back-to-back in the schedule.</p> <p> <code>LOOP</code> - The programs in the schedule play back-to-back in an endless loop. When the last program in the schedule stops playing, playback loops back to the first program in the schedule.</p>
		 * Required
		 */
		PlaybackMode: FormControl<PlaybackMode | null | undefined>,

		/** The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The tier of the channel. */
		Tier: FormControl<Tier | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			PlaybackMode: new FormControl<PlaybackMode | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Tier: new FormControl<Tier | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBodyFillerSlate {
		SourceLocationName?: string;
		VodSourceName?: string;
	}
	export interface CreateChannelPostBodyFillerSlateFormProperties {
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFillerSlateFormGroup() {
		return new FormGroup<CreateChannelPostBodyFillerSlateFormProperties>({
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBody {

		/** Slate VOD source configuration. */
		FillerSlate?: UpdateChannelPutBodyFillerSlate;

		/**
		 * An object that represents an object in the CreateChannel request.
		 * Required
		 */
		Outputs: Array<RequestOutputItem>;
	}
	export interface UpdateChannelPutBodyFormProperties {
	}
	export function CreateUpdateChannelPutBodyFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateChannelPutBodyFillerSlate {
		SourceLocationName?: string;
		VodSourceName?: string;
	}
	export interface UpdateChannelPutBodyFillerSlateFormProperties {
		SourceLocationName: FormControl<string | null | undefined>,
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyFillerSlateFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFillerSlateFormProperties>({
			SourceLocationName: new FormControl<string | null | undefined>(undefined),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLiveSourcePostBody {

		/**
		 * The VOD source's HTTP package configuration settings.
		 * Required
		 */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;

		/** The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags?: {[id: string]: string };
	}
	export interface CreateLiveSourcePostBodyFormProperties {

		/** The tags to assign to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateLiveSourcePostBodyFormGroup() {
		return new FormGroup<CreateLiveSourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateLiveSourcePutBody {

		/**
		 * The VOD source's HTTP package configuration settings.
		 * Required
		 */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;
	}
	export interface UpdateLiveSourcePutBodyFormProperties {
	}
	export function CreateUpdateLiveSourcePutBodyFormGroup() {
		return new FormGroup<UpdateLiveSourcePutBodyFormProperties>({
		});

	}

	export interface CreatePrefetchSchedulePostBody {

		/**
		 * A complex type that contains settings that determine how and when that MediaTailor places prefetched ads into upcoming ad breaks.
		 * Required
		 */
		Consumption: CreatePrefetchSchedulePostBodyConsumption;

		/**
		 * A complex type that contains settings governing when MediaTailor prefetches ads, and which dynamic variables that MediaTailor includes in the request to the ad decision server.
		 * Required
		 */
		Retrieval: CreatePrefetchSchedulePostBodyRetrieval;

		/** An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>. */
		StreamId?: string | null;
	}
	export interface CreatePrefetchSchedulePostBodyFormProperties {

		/** An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration. If <code>StreamId</code> is specified, MediaTailor returns all of the prefetch schedules with an exact match on <code>StreamId</code>. If not specified, MediaTailor returns all of the prefetch schedules for the playback configuration, regardless of <code>StreamId</code>. */
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePrefetchSchedulePostBodyFormGroup() {
		return new FormGroup<CreatePrefetchSchedulePostBodyFormProperties>({
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePrefetchSchedulePostBodyConsumption {
		AvailMatchingCriteria?: Array<AvailMatchingCriteria>;
		EndTime?: Date;
		StartTime?: Date;
	}
	export interface CreatePrefetchSchedulePostBodyConsumptionFormProperties {
		EndTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreatePrefetchSchedulePostBodyConsumptionFormGroup() {
		return new FormGroup<CreatePrefetchSchedulePostBodyConsumptionFormProperties>({
			EndTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreatePrefetchSchedulePostBodyRetrieval {
		DynamicVariables?: __mapOf__string;
		EndTime?: Date;
		StartTime?: Date;
	}
	export interface CreatePrefetchSchedulePostBodyRetrievalFormProperties {
		EndTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreatePrefetchSchedulePostBodyRetrievalFormGroup() {
		return new FormGroup<CreatePrefetchSchedulePostBodyRetrievalFormProperties>({
			EndTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateProgramPostBody {

		/** The ad break configuration settings. */
		AdBreaks?: Array<AdBreak>;

		/** The name of the LiveSource for this Program. */
		LiveSourceName?: string | null;

		/**
		 * Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.
		 * Required
		 */
		ScheduleConfiguration: CreateProgramPostBodyScheduleConfiguration;

		/**
		 * The name of the source location.
		 * Required
		 */
		SourceLocationName: string;

		/** The name that's used to refer to a VOD source. */
		VodSourceName?: string | null;
	}
	export interface CreateProgramPostBodyFormProperties {

		/** The name of the LiveSource for this Program. */
		LiveSourceName: FormControl<string | null | undefined>,

		/**
		 * The name of the source location.
		 * Required
		 */
		SourceLocationName: FormControl<string | null | undefined>,

		/** The name that's used to refer to a VOD source. */
		VodSourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProgramPostBodyFormGroup() {
		return new FormGroup<CreateProgramPostBodyFormProperties>({
			LiveSourceName: new FormControl<string | null | undefined>(undefined),
			SourceLocationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VodSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProgramPostBodyScheduleConfiguration {
		ClipRange?: ClipRange;
		Transition?: Transition;
	}
	export interface CreateProgramPostBodyScheduleConfigurationFormProperties {
	}
	export function CreateCreateProgramPostBodyScheduleConfigurationFormGroup() {
		return new FormGroup<CreateProgramPostBodyScheduleConfigurationFormProperties>({
		});

	}

	export interface UpdateProgramPutBody {

		/** The ad break configuration settings. */
		AdBreaks?: Array<AdBreak>;

		/**
		 * Schedule configuration parameters.
		 * Required
		 */
		ScheduleConfiguration: UpdateProgramPutBodyScheduleConfiguration;
	}
	export interface UpdateProgramPutBodyFormProperties {
	}
	export function CreateUpdateProgramPutBodyFormGroup() {
		return new FormGroup<UpdateProgramPutBodyFormProperties>({
		});

	}

	export interface UpdateProgramPutBodyScheduleConfiguration {
		ClipRange?: ClipRange;
		Transition?: UpdateProgramTransition;
	}
	export interface UpdateProgramPutBodyScheduleConfigurationFormProperties {
	}
	export function CreateUpdateProgramPutBodyScheduleConfigurationFormGroup() {
		return new FormGroup<UpdateProgramPutBodyScheduleConfigurationFormProperties>({
		});

	}

	export interface CreateSourceLocationPostBody {

		/** Access configuration parameters. */
		AccessConfiguration?: CreateSourceLocationPostBodyAccessConfiguration;

		/** The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used. */
		DefaultSegmentDeliveryConfiguration?: CreateSourceLocationPostBodyDefaultSegmentDeliveryConfiguration;

		/**
		 * The HTTP configuration for the source location.
		 * Required
		 */
		HttpConfiguration: CreateSourceLocationPostBodyHttpConfiguration;

		/** A list of the segment delivery configurations associated with this resource. */
		SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;

		/** The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags?: {[id: string]: string };
	}
	export interface CreateSourceLocationPostBodyFormProperties {

		/** The tags to assign to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSourceLocationPostBodyFormGroup() {
		return new FormGroup<CreateSourceLocationPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSourceLocationPostBodyAccessConfiguration {
		AccessType?: AccessType;
		SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration;
	}
	export interface CreateSourceLocationPostBodyAccessConfigurationFormProperties {
		AccessType: FormControl<AccessType | null | undefined>,
	}
	export function CreateCreateSourceLocationPostBodyAccessConfigurationFormGroup() {
		return new FormGroup<CreateSourceLocationPostBodyAccessConfigurationFormProperties>({
			AccessType: new FormControl<AccessType | null | undefined>(undefined),
		});

	}

	export interface CreateSourceLocationPostBodyDefaultSegmentDeliveryConfiguration {
		BaseUrl?: string;
	}
	export interface CreateSourceLocationPostBodyDefaultSegmentDeliveryConfigurationFormProperties {
		BaseUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceLocationPostBodyDefaultSegmentDeliveryConfigurationFormGroup() {
		return new FormGroup<CreateSourceLocationPostBodyDefaultSegmentDeliveryConfigurationFormProperties>({
			BaseUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSourceLocationPostBodyHttpConfiguration {
		BaseUrl?: string;
	}
	export interface CreateSourceLocationPostBodyHttpConfigurationFormProperties {
		BaseUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateSourceLocationPostBodyHttpConfigurationFormGroup() {
		return new FormGroup<CreateSourceLocationPostBodyHttpConfigurationFormProperties>({
			BaseUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceLocationPutBody {

		/** Access configuration parameters. */
		AccessConfiguration?: UpdateSourceLocationPutBodyAccessConfiguration;

		/** The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used. */
		DefaultSegmentDeliveryConfiguration?: UpdateSourceLocationPutBodyDefaultSegmentDeliveryConfiguration;

		/**
		 * The HTTP configuration for the source location.
		 * Required
		 */
		HttpConfiguration: UpdateSourceLocationPutBodyHttpConfiguration;

		/** A list of the segment delivery configurations associated with this resource. */
		SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
	}
	export interface UpdateSourceLocationPutBodyFormProperties {
	}
	export function CreateUpdateSourceLocationPutBodyFormGroup() {
		return new FormGroup<UpdateSourceLocationPutBodyFormProperties>({
		});

	}

	export interface UpdateSourceLocationPutBodyAccessConfiguration {
		AccessType?: AccessType;
		SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration;
	}
	export interface UpdateSourceLocationPutBodyAccessConfigurationFormProperties {
		AccessType: FormControl<AccessType | null | undefined>,
	}
	export function CreateUpdateSourceLocationPutBodyAccessConfigurationFormGroup() {
		return new FormGroup<UpdateSourceLocationPutBodyAccessConfigurationFormProperties>({
			AccessType: new FormControl<AccessType | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceLocationPutBodyDefaultSegmentDeliveryConfiguration {
		BaseUrl?: string;
	}
	export interface UpdateSourceLocationPutBodyDefaultSegmentDeliveryConfigurationFormProperties {
		BaseUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceLocationPutBodyDefaultSegmentDeliveryConfigurationFormGroup() {
		return new FormGroup<UpdateSourceLocationPutBodyDefaultSegmentDeliveryConfigurationFormProperties>({
			BaseUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceLocationPutBodyHttpConfiguration {
		BaseUrl?: string;
	}
	export interface UpdateSourceLocationPutBodyHttpConfigurationFormProperties {
		BaseUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceLocationPutBodyHttpConfigurationFormGroup() {
		return new FormGroup<UpdateSourceLocationPutBodyHttpConfigurationFormProperties>({
			BaseUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVodSourcePostBody {

		/**
		 * The VOD source's HTTP package configuration settings.
		 * Required
		 */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;

		/** The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags?: {[id: string]: string };
	}
	export interface CreateVodSourcePostBodyFormProperties {

		/** The tags to assign to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateVodSourcePostBodyFormGroup() {
		return new FormGroup<CreateVodSourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateVodSourcePutBody {

		/**
		 * The VOD source's HTTP package configuration settings.
		 * Required
		 */
		HttpPackageConfigurations: Array<HttpPackageConfiguration>;
	}
	export interface UpdateVodSourcePutBodyFormProperties {
	}
	export function CreateUpdateVodSourcePutBodyFormGroup() {
		return new FormGroup<UpdateVodSourcePutBodyFormProperties>({
		});

	}

	export interface PutChannelPolicyPutBody {

		/**
		 * Adds an IAM role that determines the permissions of your channel.
		 * Required
		 */
		Policy: string;
	}
	export interface PutChannelPolicyPutBodyFormProperties {

		/**
		 * Adds an IAM role that determines the permissions of your channel.
		 * Required
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutChannelPolicyPutBodyFormGroup() {
		return new FormGroup<PutChannelPolicyPutBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPrefetchSchedulesPostBody {

		/**
		 * The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> prefetch schedules, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** <p>(Optional) If the playback configuration has more than <code>MaxResults</code> prefetch schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p> For the first <code>ListPrefetchSchedulesRequest</code> request, omit this value.</p> <p> For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p> If the previous response didn't include a <code>NextToken</code> element, there are no more prefetch schedules to get.</p> */
		NextToken?: string | null;

		/** An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams. */
		StreamId?: string | null;
	}
	export interface ListPrefetchSchedulesPostBodyFormProperties {

		/**
		 * The maximum number of prefetch schedules that you want MediaTailor to return in response to the current request. If there are more than <code>MaxResults</code> prefetch schedules, use the value of <code>NextToken</code> in the response to get the next page of results.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** <p>(Optional) If the playback configuration has more than <code>MaxResults</code> prefetch schedules, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p> For the first <code>ListPrefetchSchedulesRequest</code> request, omit this value.</p> <p> For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p> <p> If the previous response didn't include a <code>NextToken</code> element, there are no more prefetch schedules to get.</p> */
		NextToken: FormControl<string | null | undefined>,

		/** An optional filtering parameter whereby MediaTailor filters the prefetch schedules to include only specific streams. */
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateListPrefetchSchedulesPostBodyFormGroup() {
		return new FormGroup<ListPrefetchSchedulesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to assign to the resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to assign to the resource. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutPlaybackConfigurationPutBody {

		/** The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters. */
		AdDecisionServerUrl?: string | null;

		/** The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>. */
		AvailSuppression?: PutPlaybackConfigurationPutBodyAvailSuppression;

		/** The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>. */
		Bumper?: PutPlaybackConfigurationPutBodyBumper;

		/** The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. */
		CdnConfiguration?: PutPlaybackConfigurationPutBodyCdnConfiguration;

		/** The predefined aliases for dynamic variables. */
		ConfigurationAliases?: {[id: string]: __mapOf__string };

		/** The configuration for DASH PUT operations. */
		DashConfiguration?: PutPlaybackConfigurationPutBodyDashConfiguration;

		/** The configuration for pre-roll ad insertion. */
		LivePreRollConfiguration?: PutPlaybackConfigurationPutBodyLivePreRollConfiguration;

		/** The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor. */
		ManifestProcessingRules?: PutPlaybackConfigurationPutBodyManifestProcessingRules;

		/**
		 * The identifier for the playback configuration.
		 * Required
		 */
		Name: string;

		/**
		 * Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.
		 * Minimum: 1
		 */
		PersonalizationThresholdSeconds?: number | null;

		/** The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. */
		SlateAdUrl?: string | null;

		/** The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags?: {[id: string]: string };

		/** The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support. */
		TranscodeProfileName?: string | null;

		/** The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters. */
		VideoContentSourceUrl?: string | null;
	}
	export interface PutPlaybackConfigurationPutBodyFormProperties {

		/** The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters. */
		AdDecisionServerUrl: FormControl<string | null | undefined>,

		/** The predefined aliases for dynamic variables. */
		ConfigurationAliases: FormControl<{[id: string]: __mapOf__string } | null | undefined>,

		/**
		 * The identifier for the playback configuration.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.
		 * Minimum: 1
		 */
		PersonalizationThresholdSeconds: FormControl<number | null | undefined>,

		/** The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. */
		SlateAdUrl: FormControl<string | null | undefined>,

		/** The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html">Tagging AWS Elemental MediaTailor Resources</a>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support. */
		TranscodeProfileName: FormControl<string | null | undefined>,

		/** The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters. */
		VideoContentSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			ConfigurationAliases: new FormControl<{[id: string]: __mapOf__string } | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PersonalizationThresholdSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			SlateAdUrl: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			TranscodeProfileName: new FormControl<string | null | undefined>(undefined),
			VideoContentSourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyAvailSuppression {
		FillPolicy?: FillPolicy;
		Mode?: Mode;
		Value?: string;
	}
	export interface PutPlaybackConfigurationPutBodyAvailSuppressionFormProperties {
		FillPolicy: FormControl<FillPolicy | null | undefined>,
		Mode: FormControl<Mode | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyAvailSuppressionFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyAvailSuppressionFormProperties>({
			FillPolicy: new FormControl<FillPolicy | null | undefined>(undefined),
			Mode: new FormControl<Mode | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyBumper {
		EndUrl?: string;
		StartUrl?: string;
	}
	export interface PutPlaybackConfigurationPutBodyBumperFormProperties {
		EndUrl: FormControl<string | null | undefined>,
		StartUrl: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyBumperFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyBumperFormProperties>({
			EndUrl: new FormControl<string | null | undefined>(undefined),
			StartUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyCdnConfiguration {
		AdSegmentUrlPrefix?: string;
		ContentSegmentUrlPrefix?: string;
	}
	export interface PutPlaybackConfigurationPutBodyCdnConfigurationFormProperties {
		AdSegmentUrlPrefix: FormControl<string | null | undefined>,
		ContentSegmentUrlPrefix: FormControl<string | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyCdnConfigurationFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyCdnConfigurationFormProperties>({
			AdSegmentUrlPrefix: new FormControl<string | null | undefined>(undefined),
			ContentSegmentUrlPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyDashConfiguration {
		MpdLocation?: string;
		OriginManifestType?: OriginManifestType;
	}
	export interface PutPlaybackConfigurationPutBodyDashConfigurationFormProperties {
		MpdLocation: FormControl<string | null | undefined>,
		OriginManifestType: FormControl<OriginManifestType | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyDashConfigurationFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyDashConfigurationFormProperties>({
			MpdLocation: new FormControl<string | null | undefined>(undefined),
			OriginManifestType: new FormControl<OriginManifestType | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyLivePreRollConfiguration {
		AdDecisionServerUrl?: string;
		MaxDurationSeconds?: number | null;
	}
	export interface PutPlaybackConfigurationPutBodyLivePreRollConfigurationFormProperties {
		AdDecisionServerUrl: FormControl<string | null | undefined>,
		MaxDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePutPlaybackConfigurationPutBodyLivePreRollConfigurationFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyLivePreRollConfigurationFormProperties>({
			AdDecisionServerUrl: new FormControl<string | null | undefined>(undefined),
			MaxDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutPlaybackConfigurationPutBodyManifestProcessingRules {
		AdMarkerPassthrough?: AdMarkerPassthrough;
	}
	export interface PutPlaybackConfigurationPutBodyManifestProcessingRulesFormProperties {
	}
	export function CreatePutPlaybackConfigurationPutBodyManifestProcessingRulesFormGroup() {
		return new FormGroup<PutPlaybackConfigurationPutBodyManifestProcessingRulesFormProperties>({
		});

	}

}

