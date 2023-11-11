import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Placeholder documentation for BatchUpdateScheduleResponse */
	export interface BatchUpdateScheduleResponse {

		/** List of actions that have been created in the schedule. */
		Creates?: BatchScheduleActionCreateResult | null;

		/** List of actions that have been deleted from the schedule. */
		Deletes?: BatchScheduleActionDeleteResult | null;
	}


	/** List of actions that have been created in the schedule. */
	export interface BatchScheduleActionCreateResult {

		/**
		 * Placeholder documentation for __listOfScheduleAction
		 * Required
		 */
		ScheduleActions: Array<ScheduleAction>;
	}


	/** Contains information on a single schedule action. */
	export interface ScheduleAction {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		ActionName: string;

		/**
		 * Holds the settings for a single schedule action.
		 * Required
		 */
		ScheduleActionSettings: ScheduleActionSettings;

		/**
		 * Settings to specify when an action should occur. Only one of the options must be selected.
		 * Required
		 */
		ScheduleActionStartSettings: ScheduleActionStartSettings;
	}


	/** Holds the settings for a single schedule action. */
	export interface ScheduleActionSettings {

		/** Settings for the action to insert a user-defined ID3 tag in each HLS segment */
		HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings | null;

		/** Settings for the action to emit HLS metadata */
		HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings | null;

		/** Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
		InputSwitchSettings?: InputSwitchScheduleActionSettings | null;

		/** Settings for the action to set pause state of a channel. */
		PauseStateSettings?: PauseStateScheduleActionSettings | null;

		/** Settings for a SCTE-35 return_to_network message. */
		Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings | null;

		/** Settings for a SCTE-35 splice_insert message. */
		Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings | null;

		/** Settings for a SCTE-35 time_signal. */
		Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings | null;

		/** Settings for the action to activate a static image. */
		StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings | null;

		/** Settings for the action to deactivate the image in a specific layer. */
		StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings | null;
	}


	/** Settings for the action to insert a user-defined ID3 tag in each HLS segment */
	export interface HlsId3SegmentTaggingScheduleActionSettings {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Tag: string;
	}


	/** Settings for the action to emit HLS metadata */
	export interface HlsTimedMetadataScheduleActionSettings {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Id3: string;
	}


	/** Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
	export interface InputSwitchScheduleActionSettings {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		InputAttachmentNameReference: string;

		/** Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
		InputClippingSettings?: InputClippingSettings | null;

		/** Placeholder documentation for __listOf__string */
		UrlPath?: Array<string> | null;
	}


	/** Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
	export interface InputClippingSettings {

		/**
		 * Documentation update needed
		 * Required
		 */
		InputTimecodeSource: InputClippingSettingsInputTimecodeSource;

		/** Settings to identify the start of the clip. */
		StartTimecode?: StartTimecode | null;

		/** Settings to identify the end of the clip. */
		StopTimecode?: StopTimecode | null;
	}

	export enum InputClippingSettingsInputTimecodeSource { ZEROBASED = 0, EMBEDDED = 1 }


	/** Settings to identify the start of the clip. */
	export interface StartTimecode {

		/** Placeholder documentation for __string */
		Timecode?: string | null;
	}


	/** Settings to identify the end of the clip. */
	export interface StopTimecode {

		/** If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode. */
		LastFrameClippingBehavior?: StopTimecodeLastFrameClippingBehavior | null;

		/** Placeholder documentation for __string */
		Timecode?: string | null;
	}

	export enum StopTimecodeLastFrameClippingBehavior { EXCLUDE_LAST_FRAME = 0, INCLUDE_LAST_FRAME = 1 }


	/** Settings for the action to set pause state of a channel. */
	export interface PauseStateScheduleActionSettings {

		/** Placeholder documentation for __listOfPipelinePauseStateSettings */
		Pipelines?: Array<PipelinePauseStateSettings> | null;
	}


	/** Settings for pausing a pipeline. */
	export interface PipelinePauseStateSettings {

		/**
		 * Pipeline ID
		 * Required
		 */
		PipelineId: PipelinePauseStateSettingsPipelineId;
	}

	export enum PipelinePauseStateSettingsPipelineId { PIPELINE_0 = 0, PIPELINE_1 = 1 }


	/** Settings for a SCTE-35 return_to_network message. */
	export interface Scte35ReturnToNetworkScheduleActionSettings {

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SpliceEventId: number;
	}


	/** Settings for a SCTE-35 splice_insert message. */
	export interface Scte35SpliceInsertScheduleActionSettings {

		/**
		 * Placeholder documentation for __longMin0Max8589934591
		 * Minimum: 0
		 * Maximum: 8589934591
		 */
		Duration?: number | null;

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SpliceEventId: number;
	}


	/** Settings for a SCTE-35 time_signal. */
	export interface Scte35TimeSignalScheduleActionSettings {

		/**
		 * Placeholder documentation for __listOfScte35Descriptor
		 * Required
		 */
		Scte35Descriptors: Array<Scte35Descriptor>;
	}


	/** Holds one set of SCTE-35 Descriptor Settings. */
	export interface Scte35Descriptor {

		/**
		 * SCTE-35 Descriptor settings.
		 * Required
		 */
		Scte35DescriptorSettings: Scte35DescriptorSettings;
	}


	/** SCTE-35 Descriptor settings. */
	export interface Scte35DescriptorSettings {

		/**
		 * Corresponds to SCTE-35 segmentation_descriptor.
		 * Required
		 */
		SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor;
	}


	/** Corresponds to SCTE-35 segmentation_descriptor. */
	export interface Scte35SegmentationDescriptor {

		/** Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element. */
		DeliveryRestrictions?: Scte35DeliveryRestrictions | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentNum?: number | null;

		/**
		 * Corresponds to SCTE-35 segmentation_event_cancel_indicator. SEGMENTATION_EVENT_NOT_CANCELED corresponds to 0 in the SCTE-35 specification and indicates that this is an insertion request. SEGMENTATION_EVENT_CANCELED corresponds to 1 in the SCTE-35 specification and indicates that this is a cancelation request, in which case complete this field and the existing event ID to cancel.
		 * Required
		 */
		SegmentationCancelIndicator: Scte35SegmentationDescriptorSegmentationCancelIndicator;

		/**
		 * Placeholder documentation for __longMin0Max1099511627775
		 * Minimum: 0
		 * Maximum: 1099511627775
		 */
		SegmentationDuration?: number | null;

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SegmentationEventId: number;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentationTypeId?: number | null;

		/** Placeholder documentation for __string */
		SegmentationUpid?: string | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentationUpidType?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentsExpected?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SubSegmentNum?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SubSegmentsExpected?: number | null;
	}


	/** Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element. */
	export interface Scte35DeliveryRestrictions {

		/**
		 * Corresponds to the archive_allowed parameter. A value of ARCHIVE_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.
		 * Required
		 */
		ArchiveAllowedFlag: Scte35DeliveryRestrictionsArchiveAllowedFlag;

		/**
		 * Corresponds to the device_restrictions parameter in a segmentation_descriptor. If you include one of the "restriction" flags then you must include all four of them.
		 * Required
		 */
		DeviceRestrictions: Scte35DeliveryRestrictionsDeviceRestrictions;

		/**
		 * Corresponds to the no_regional_blackout_flag parameter. A value of REGIONAL_BLACKOUT corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.
		 * Required
		 */
		NoRegionalBlackoutFlag: Scte35DeliveryRestrictionsNoRegionalBlackoutFlag;

		/**
		 * Corresponds to the web_delivery_allowed_flag parameter. A value of WEB_DELIVERY_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.
		 * Required
		 */
		WebDeliveryAllowedFlag: Scte35DeliveryRestrictionsWebDeliveryAllowedFlag;
	}

	export enum Scte35DeliveryRestrictionsArchiveAllowedFlag { ARCHIVE_NOT_ALLOWED = 0, ARCHIVE_ALLOWED = 1 }

	export enum Scte35DeliveryRestrictionsDeviceRestrictions { NONE = 0, RESTRICT_GROUP0 = 1, RESTRICT_GROUP1 = 2, RESTRICT_GROUP2 = 3 }

	export enum Scte35DeliveryRestrictionsNoRegionalBlackoutFlag { REGIONAL_BLACKOUT = 0, NO_REGIONAL_BLACKOUT = 1 }

	export enum Scte35DeliveryRestrictionsWebDeliveryAllowedFlag { WEB_DELIVERY_NOT_ALLOWED = 0, WEB_DELIVERY_ALLOWED = 1 }

	export enum Scte35SegmentationDescriptorSegmentationCancelIndicator { SEGMENTATION_EVENT_NOT_CANCELED = 0, SEGMENTATION_EVENT_CANCELED = 1 }


	/** Settings for the action to activate a static image. */
	export interface StaticImageActivateScheduleActionSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Duration?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeIn?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeOut?: number | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Height?: number | null;

		/**
		 * Input Location
		 * Required
		 */
		Image: InputLocation;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ImageX?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ImageY?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		Layer?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		Opacity?: number | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Width?: number | null;
	}


	/** Input Location */
	export interface InputLocation {

		/** Placeholder documentation for __string */
		PasswordParam?: string | null;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Uri: string;

		/** Placeholder documentation for __string */
		Username?: string | null;
	}


	/** Settings for the action to deactivate the image in a specific layer. */
	export interface StaticImageDeactivateScheduleActionSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeOut?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		Layer?: number | null;
	}


	/** Settings to specify when an action should occur. Only one of the options must be selected. */
	export interface ScheduleActionStartSettings {

		/** Start time for the action. */
		FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings | null;

		/** Settings to specify if an action follows another. */
		FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings | null;

		/** Settings to configure an action so that it occurs as soon as possible. */
		ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings | null;
	}


	/** Start time for the action. */
	export interface FixedModeScheduleActionStartSettings {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Time: string;
	}


	/** Settings to specify if an action follows another. */
	export interface FollowModeScheduleActionStartSettings {

		/**
		 * Follow reference point.
		 * Required
		 */
		FollowPoint: FollowModeScheduleActionStartSettingsFollowPoint;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		ReferenceActionName: string;
	}

	export enum FollowModeScheduleActionStartSettingsFollowPoint { END = 0, START = 1 }


	/** Settings to configure an action so that it occurs as soon as possible. */
	export interface ImmediateModeScheduleActionStartSettings {
	}


	/** List of actions that have been deleted from the schedule. */
	export interface BatchScheduleActionDeleteResult {

		/**
		 * Placeholder documentation for __listOfScheduleAction
		 * Required
		 */
		ScheduleActions: Array<ScheduleAction>;
	}

	export interface BadRequestException {
	}

	export interface UnprocessableEntityException {
	}

	export interface InternalServerErrorException {
	}

	export interface ForbiddenException {
	}

	export interface BadGatewayException {
	}

	export interface NotFoundException {
	}

	export interface GatewayTimeoutException {
	}

	export interface TooManyRequestsException {
	}


	/** Placeholder documentation for CreateChannelResponse */
	export interface CreateChannelResponse {

		/** Placeholder documentation for Channel */
		Channel?: Channel | null;
	}


	/** Placeholder documentation for Channel */
	export interface Channel {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint> | null;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification | null;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail> | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}

	export enum ChannelChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }


	/** Placeholder documentation for OutputDestination */
	export interface OutputDestination {

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfMediaPackageOutputDestinationSettings */
		MediaPackageSettings?: Array<MediaPackageOutputDestinationSettings> | null;

		/** Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex */
		MultiplexSettings?: MultiplexProgramChannelDestinationSettings | null;

		/** Placeholder documentation for __listOfOutputDestinationSettings */
		Settings?: Array<OutputDestinationSettings> | null;
	}


	/** MediaPackage Output Destination Settings */
	export interface MediaPackageOutputDestinationSettings {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		ChannelId?: string | null;
	}


	/** Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex */
	export interface MultiplexProgramChannelDestinationSettings {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		MultiplexId?: string | null;

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		ProgramName?: string | null;
	}


	/** Placeholder documentation for OutputDestinationSettings */
	export interface OutputDestinationSettings {

		/** Placeholder documentation for __string */
		PasswordParam?: string | null;

		/** Placeholder documentation for __string */
		StreamName?: string | null;

		/** Placeholder documentation for __string */
		Url?: string | null;

		/** Placeholder documentation for __string */
		Username?: string | null;
	}


	/** Placeholder documentation for ChannelEgressEndpoint */
	export interface ChannelEgressEndpoint {

		/** Placeholder documentation for __string */
		SourceIp?: string | null;
	}


	/** Encoder Settings */
	export interface EncoderSettings {

		/**
		 * Placeholder documentation for __listOfAudioDescription
		 * Required
		 */
		AudioDescriptions: Array<AudioDescription>;

		/** Avail Blanking */
		AvailBlanking?: AvailBlanking | null;

		/** Avail Configuration */
		AvailConfiguration?: AvailConfiguration | null;

		/** Blackout Slate */
		BlackoutSlate?: BlackoutSlate | null;

		/** Placeholder documentation for __listOfCaptionDescription */
		CaptionDescriptions?: Array<CaptionDescription> | null;

		/** Global Configuration */
		GlobalConfiguration?: GlobalConfiguration | null;

		/** Nielsen Configuration */
		NielsenConfiguration?: NielsenConfiguration | null;

		/**
		 * Placeholder documentation for __listOfOutputGroup
		 * Required
		 */
		OutputGroups: Array<OutputGroup>;

		/**
		 * Timecode Config
		 * Required
		 */
		TimecodeConfig: TimecodeConfig;

		/**
		 * Placeholder documentation for __listOfVideoDescription
		 * Required
		 */
		VideoDescriptions: Array<VideoDescription>;
	}


	/** Audio Description */
	export interface AudioDescription {

		/** Audio Normalization Settings */
		AudioNormalizationSettings?: AudioNormalizationSettings | null;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		AudioSelectorName: string;

		/** Audio Type */
		AudioType?: AudioDescriptionAudioType | null;

		/** Audio Description Audio Type Control */
		AudioTypeControl?: AudioDescriptionAudioTypeControl | null;

		/** Audio Codec Settings */
		CodecSettings?: AudioCodecSettings | null;

		/**
		 * Placeholder documentation for __stringMin3Max3
		 * Max length: 3
		 * Min length: 3
		 */
		LanguageCode?: string | null;

		/** Audio Description Language Code Control */
		LanguageCodeControl?: AudioDescriptionAudioTypeControl | null;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Name: string;

		/** Remix Settings */
		RemixSettings?: RemixSettings | null;

		/** Placeholder documentation for __string */
		StreamName?: string | null;
	}


	/** Audio Normalization Settings */
	export interface AudioNormalizationSettings {

		/** Audio Normalization Algorithm */
		Algorithm?: AudioNormalizationSettingsAlgorithm | null;

		/** Audio Normalization Algorithm Control */
		AlgorithmControl?: AudioNormalizationSettingsAlgorithmControl | null;

		/** Placeholder documentation for __doubleMinNegative59Max0 */
		TargetLkfs?: number | null;
	}

	export enum AudioNormalizationSettingsAlgorithm { ITU_1770_1 = 0, ITU_1770_2 = 1 }

	export enum AudioNormalizationSettingsAlgorithmControl { CORRECT_AUDIO = 0 }

	export enum AudioDescriptionAudioType { CLEAN_EFFECTS = 0, HEARING_IMPAIRED = 1, UNDEFINED = 2, VISUAL_IMPAIRED_COMMENTARY = 3 }

	export enum AudioDescriptionAudioTypeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Audio Codec Settings */
	export interface AudioCodecSettings {

		/** Aac Settings */
		AacSettings?: AacSettings | null;

		/** Ac3 Settings */
		Ac3Settings?: Ac3Settings | null;

		/** Eac3 Settings */
		Eac3Settings?: Eac3Settings | null;

		/** Mp2 Settings */
		Mp2Settings?: Mp2Settings | null;

		/** Pass Through Settings */
		PassThroughSettings?: PassThroughSettings | null;
	}


	/** Aac Settings */
	export interface AacSettings {

		/** Placeholder documentation for __double */
		Bitrate?: number | null;

		/** Aac Coding Mode */
		CodingMode?: AacSettingsCodingMode | null;

		/** Aac Input Type */
		InputType?: AacSettingsInputType | null;

		/** Aac Profile */
		Profile?: AacSettingsProfile | null;

		/** Aac Rate Control Mode */
		RateControlMode?: AacSettingsRateControlMode | null;

		/** Aac Raw Format */
		RawFormat?: AacSettingsRawFormat | null;

		/** Placeholder documentation for __double */
		SampleRate?: number | null;

		/** Aac Spec */
		Spec?: AacSettingsSpec | null;

		/** Aac Vbr Quality */
		VbrQuality?: AacSettingsVbrQuality | null;
	}

	export enum AacSettingsCodingMode { AD_RECEIVER_MIX = 0, CODING_MODE_1_0 = 1, CODING_MODE_1_1 = 2, CODING_MODE_2_0 = 3, CODING_MODE_5_1 = 4 }

	export enum AacSettingsInputType { BROADCASTER_MIXED_AD = 0, NORMAL = 1 }

	export enum AacSettingsProfile { HEV1 = 0, HEV2 = 1, LC = 2 }

	export enum AacSettingsRateControlMode { CBR = 0, VBR = 1 }

	export enum AacSettingsRawFormat { LATM_LOAS = 0, NONE = 1 }

	export enum AacSettingsSpec { MPEG2 = 0, MPEG4 = 1 }

	export enum AacSettingsVbrQuality { HIGH = 0, LOW = 1, MEDIUM_HIGH = 2, MEDIUM_LOW = 3 }


	/** Ac3 Settings */
	export interface Ac3Settings {

		/** Placeholder documentation for __double */
		Bitrate?: number | null;

		/** Ac3 Bitstream Mode */
		BitstreamMode?: Ac3SettingsBitstreamMode | null;

		/** Ac3 Coding Mode */
		CodingMode?: Ac3SettingsCodingMode | null;

		/**
		 * Placeholder documentation for __integerMin1Max31
		 * Minimum: 1
		 * Maximum: 31
		 */
		Dialnorm?: number | null;

		/** Ac3 Drc Profile */
		DrcProfile?: Ac3SettingsDrcProfile | null;

		/** Ac3 Lfe Filter */
		LfeFilter?: Ac3SettingsLfeFilter | null;

		/** Ac3 Metadata Control */
		MetadataControl?: AudioDescriptionAudioTypeControl | null;
	}

	export enum Ac3SettingsBitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, DIALOGUE = 2, EMERGENCY = 3, HEARING_IMPAIRED = 4, MUSIC_AND_EFFECTS = 5, VISUALLY_IMPAIRED = 6, VOICE_OVER = 7 }

	export enum Ac3SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_1_1 = 1, CODING_MODE_2_0 = 2, CODING_MODE_3_2_LFE = 3 }

	export enum Ac3SettingsDrcProfile { FILM_STANDARD = 0, NONE = 1 }

	export enum Ac3SettingsLfeFilter { DISABLED = 0, ENABLED = 1 }


	/** Eac3 Settings */
	export interface Eac3Settings {

		/** Eac3 Attenuation Control */
		AttenuationControl?: Eac3SettingsAttenuationControl | null;

		/** Placeholder documentation for __double */
		Bitrate?: number | null;

		/** Eac3 Bitstream Mode */
		BitstreamMode?: Eac3SettingsBitstreamMode | null;

		/** Eac3 Coding Mode */
		CodingMode?: Eac3SettingsCodingMode | null;

		/** Eac3 Dc Filter */
		DcFilter?: Ac3SettingsLfeFilter | null;

		/**
		 * Placeholder documentation for __integerMin1Max31
		 * Minimum: 1
		 * Maximum: 31
		 */
		Dialnorm?: number | null;

		/** Eac3 Drc Line */
		DrcLine?: Eac3SettingsDrcLine | null;

		/** Eac3 Drc Rf */
		DrcRf?: Eac3SettingsDrcLine | null;

		/** Eac3 Lfe Control */
		LfeControl?: Eac3SettingsLfeControl | null;

		/** Eac3 Lfe Filter */
		LfeFilter?: Ac3SettingsLfeFilter | null;

		/** Placeholder documentation for __double */
		LoRoCenterMixLevel?: number | null;

		/** Placeholder documentation for __double */
		LoRoSurroundMixLevel?: number | null;

		/** Placeholder documentation for __double */
		LtRtCenterMixLevel?: number | null;

		/** Placeholder documentation for __double */
		LtRtSurroundMixLevel?: number | null;

		/** Eac3 Metadata Control */
		MetadataControl?: AudioDescriptionAudioTypeControl | null;

		/** Eac3 Passthrough Control */
		PassthroughControl?: Eac3SettingsPassthroughControl | null;

		/** Eac3 Phase Control */
		PhaseControl?: Eac3SettingsPhaseControl | null;

		/** Eac3 Stereo Downmix */
		StereoDownmix?: Eac3SettingsStereoDownmix | null;

		/** Eac3 Surround Ex Mode */
		SurroundExMode?: Eac3SettingsSurroundExMode | null;

		/** Eac3 Surround Mode */
		SurroundMode?: Eac3SettingsSurroundExMode | null;
	}

	export enum Eac3SettingsAttenuationControl { ATTENUATE_3_DB = 0, NONE = 1 }

	export enum Eac3SettingsBitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, EMERGENCY = 2, HEARING_IMPAIRED = 3, VISUALLY_IMPAIRED = 4 }

	export enum Eac3SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_3_2 = 2 }

	export enum Eac3SettingsDrcLine { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }

	export enum Eac3SettingsLfeControl { LFE = 0, NO_LFE = 1 }

	export enum Eac3SettingsPassthroughControl { NO_PASSTHROUGH = 0, WHEN_POSSIBLE = 1 }

	export enum Eac3SettingsPhaseControl { NO_SHIFT = 0, SHIFT_90_DEGREES = 1 }

	export enum Eac3SettingsStereoDownmix { DPL2 = 0, LO_RO = 1, LT_RT = 2, NOT_INDICATED = 3 }

	export enum Eac3SettingsSurroundExMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }


	/** Mp2 Settings */
	export interface Mp2Settings {

		/** Placeholder documentation for __double */
		Bitrate?: number | null;

		/** Mp2 Coding Mode */
		CodingMode?: Mp2SettingsCodingMode | null;

		/** Placeholder documentation for __double */
		SampleRate?: number | null;
	}

	export enum Mp2SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1 }


	/** Pass Through Settings */
	export interface PassThroughSettings {
	}


	/** Remix Settings */
	export interface RemixSettings {

		/**
		 * Placeholder documentation for __listOfAudioChannelMapping
		 * Required
		 */
		ChannelMappings: Array<AudioChannelMapping>;

		/**
		 * Placeholder documentation for __integerMin1Max16
		 * Minimum: 1
		 * Maximum: 16
		 */
		ChannelsIn?: number | null;

		/**
		 * Placeholder documentation for __integerMin1Max8
		 * Minimum: 1
		 * Maximum: 8
		 */
		ChannelsOut?: number | null;
	}


	/** Audio Channel Mapping */
	export interface AudioChannelMapping {

		/**
		 * Placeholder documentation for __listOfInputChannelLevel
		 * Required
		 */
		InputChannelLevels: Array<InputChannelLevel>;

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Required
		 * Minimum: 0
		 * Maximum: 7
		 */
		OutputChannel: number;
	}


	/** Input Channel Level */
	export interface InputChannelLevel {

		/**
		 * Placeholder documentation for __integerMinNegative60Max6
		 * Required
		 * Minimum: -60
		 * Maximum: 6
		 */
		Gain: number;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Required
		 * Minimum: 0
		 * Maximum: 15
		 */
		InputChannel: number;
	}


	/** Avail Blanking */
	export interface AvailBlanking {

		/** Input Location */
		AvailBlankingImage?: InputLocation | null;

		/** Avail Blanking State */
		State?: Ac3SettingsLfeFilter | null;
	}


	/** Avail Configuration */
	export interface AvailConfiguration {

		/** Avail Settings */
		AvailSettings?: AvailSettings | null;
	}


	/** Avail Settings */
	export interface AvailSettings {

		/** Scte35 Splice Insert */
		Scte35SpliceInsert?: Scte35SpliceInsert | null;

		/** Scte35 Time Signal Apos */
		Scte35TimeSignalApos?: Scte35TimeSignalApos | null;
	}


	/** Scte35 Splice Insert */
	export interface Scte35SpliceInsert {

		/**
		 * Placeholder documentation for __integerMinNegative1000Max1000
		 * Minimum: -1000
		 * Maximum: 1000
		 */
		AdAvailOffset?: number | null;

		/** Scte35 Splice Insert No Regional Blackout Behavior */
		NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutFlag | null;

		/** Scte35 Splice Insert Web Delivery Allowed Behavior */
		WebDeliveryAllowedFlag?: Scte35SpliceInsertNoRegionalBlackoutFlag | null;
	}

	export enum Scte35SpliceInsertNoRegionalBlackoutFlag { FOLLOW = 0, IGNORE = 1 }


	/** Scte35 Time Signal Apos */
	export interface Scte35TimeSignalApos {

		/**
		 * Placeholder documentation for __integerMinNegative1000Max1000
		 * Minimum: -1000
		 * Maximum: 1000
		 */
		AdAvailOffset?: number | null;

		/** Scte35 Apos No Regional Blackout Behavior */
		NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutFlag | null;

		/** Scte35 Apos Web Delivery Allowed Behavior */
		WebDeliveryAllowedFlag?: Scte35SpliceInsertNoRegionalBlackoutFlag | null;
	}


	/** Blackout Slate */
	export interface BlackoutSlate {

		/** Input Location */
		BlackoutSlateImage?: InputLocation | null;

		/** Blackout Slate Network End Blackout */
		NetworkEndBlackout?: Ac3SettingsLfeFilter | null;

		/** Input Location */
		NetworkEndBlackoutImage?: InputLocation | null;

		/**
		 * Placeholder documentation for __stringMin34Max34
		 * Max length: 34
		 * Min length: 34
		 */
		NetworkId?: string | null;

		/** Blackout Slate State */
		State?: Ac3SettingsLfeFilter | null;
	}


	/** Caption Description */
	export interface CaptionDescription {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		CaptionSelectorName: string;

		/** Caption Destination Settings */
		DestinationSettings?: CaptionDestinationSettings | null;

		/** Placeholder documentation for __string */
		LanguageCode?: string | null;

		/** Placeholder documentation for __string */
		LanguageDescription?: string | null;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Name: string;
	}


	/** Caption Destination Settings */
	export interface CaptionDestinationSettings {

		/** Arib Destination Settings */
		AribDestinationSettings?: AribDestinationSettings | null;

		/** Burn In Destination Settings */
		BurnInDestinationSettings?: BurnInDestinationSettings | null;

		/** Dvb Sub Destination Settings */
		DvbSubDestinationSettings?: DvbSubDestinationSettings | null;

		/** Embedded Destination Settings */
		EmbeddedDestinationSettings?: EmbeddedDestinationSettings | null;

		/** Embedded Plus Scte20 Destination Settings */
		EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings | null;

		/** Rtmp Caption Info Destination Settings */
		RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings | null;

		/** Scte20 Plus Embedded Destination Settings */
		Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings | null;

		/** Scte27 Destination Settings */
		Scte27DestinationSettings?: Scte27DestinationSettings | null;

		/** Smpte Tt Destination Settings */
		SmpteTtDestinationSettings?: SmpteTtDestinationSettings | null;

		/** Teletext Destination Settings */
		TeletextDestinationSettings?: TeletextDestinationSettings | null;

		/** Ttml Destination Settings */
		TtmlDestinationSettings?: TtmlDestinationSettings | null;

		/** Webvtt Destination Settings */
		WebvttDestinationSettings?: WebvttDestinationSettings | null;
	}


	/** Arib Destination Settings */
	export interface AribDestinationSettings {
	}


	/** Burn In Destination Settings */
	export interface BurnInDestinationSettings {

		/** Burn In Alignment */
		Alignment?: BurnInDestinationSettingsAlignment | null;

		/** Burn In Background Color */
		BackgroundColor?: BurnInDestinationSettingsBackgroundColor | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		BackgroundOpacity?: number | null;

		/** Input Location */
		Font?: InputLocation | null;

		/** Burn In Font Color */
		FontColor?: BurnInDestinationSettingsFontColor | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		FontOpacity?: number | null;

		/**
		 * Placeholder documentation for __integerMin96Max600
		 * Minimum: 96
		 * Maximum: 600
		 */
		FontResolution?: number | null;

		/** Placeholder documentation for __string */
		FontSize?: string | null;

		/** Burn In Outline Color */
		OutlineColor?: BurnInDestinationSettingsFontColor | null;

		/**
		 * Placeholder documentation for __integerMin0Max10
		 * Minimum: 0
		 * Maximum: 10
		 */
		OutlineSize?: number | null;

		/** Burn In Shadow Color */
		ShadowColor?: BurnInDestinationSettingsBackgroundColor | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		ShadowOpacity?: number | null;

		/** Placeholder documentation for __integer */
		ShadowXOffset?: number | null;

		/** Placeholder documentation for __integer */
		ShadowYOffset?: number | null;

		/** Burn In Teletext Grid Control */
		TeletextGridControl?: BurnInDestinationSettingsTeletextGridControl | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		XPosition?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		YPosition?: number | null;
	}

	export enum BurnInDestinationSettingsAlignment { CENTERED = 0, LEFT = 1, SMART = 2 }

	export enum BurnInDestinationSettingsBackgroundColor { BLACK = 0, NONE = 1, WHITE = 2 }

	export enum BurnInDestinationSettingsFontColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }

	export enum BurnInDestinationSettingsTeletextGridControl { FIXED = 0, SCALED = 1 }


	/** Dvb Sub Destination Settings */
	export interface DvbSubDestinationSettings {

		/** Dvb Sub Destination Alignment */
		Alignment?: BurnInDestinationSettingsAlignment | null;

		/** Dvb Sub Destination Background Color */
		BackgroundColor?: BurnInDestinationSettingsBackgroundColor | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		BackgroundOpacity?: number | null;

		/** Input Location */
		Font?: InputLocation | null;

		/** Dvb Sub Destination Font Color */
		FontColor?: BurnInDestinationSettingsFontColor | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		FontOpacity?: number | null;

		/**
		 * Placeholder documentation for __integerMin96Max600
		 * Minimum: 96
		 * Maximum: 600
		 */
		FontResolution?: number | null;

		/** Placeholder documentation for __string */
		FontSize?: string | null;

		/** Dvb Sub Destination Outline Color */
		OutlineColor?: BurnInDestinationSettingsFontColor | null;

		/**
		 * Placeholder documentation for __integerMin0Max10
		 * Minimum: 0
		 * Maximum: 10
		 */
		OutlineSize?: number | null;

		/** Dvb Sub Destination Shadow Color */
		ShadowColor?: BurnInDestinationSettingsBackgroundColor | null;

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		ShadowOpacity?: number | null;

		/** Placeholder documentation for __integer */
		ShadowXOffset?: number | null;

		/** Placeholder documentation for __integer */
		ShadowYOffset?: number | null;

		/** Dvb Sub Destination Teletext Grid Control */
		TeletextGridControl?: BurnInDestinationSettingsTeletextGridControl | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		XPosition?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		YPosition?: number | null;
	}


	/** Embedded Destination Settings */
	export interface EmbeddedDestinationSettings {
	}


	/** Embedded Plus Scte20 Destination Settings */
	export interface EmbeddedPlusScte20DestinationSettings {
	}


	/** Rtmp Caption Info Destination Settings */
	export interface RtmpCaptionInfoDestinationSettings {
	}


	/** Scte20 Plus Embedded Destination Settings */
	export interface Scte20PlusEmbeddedDestinationSettings {
	}


	/** Scte27 Destination Settings */
	export interface Scte27DestinationSettings {
	}


	/** Smpte Tt Destination Settings */
	export interface SmpteTtDestinationSettings {
	}


	/** Teletext Destination Settings */
	export interface TeletextDestinationSettings {
	}


	/** Ttml Destination Settings */
	export interface TtmlDestinationSettings {

		/** Ttml Destination Style Control */
		StyleControl?: TtmlDestinationSettingsStyleControl | null;
	}

	export enum TtmlDestinationSettingsStyleControl { PASSTHROUGH = 0, USE_CONFIGURED = 1 }


	/** Webvtt Destination Settings */
	export interface WebvttDestinationSettings {
	}


	/** Global Configuration */
	export interface GlobalConfiguration {

		/**
		 * Placeholder documentation for __integerMinNegative60Max60
		 * Minimum: -60
		 * Maximum: 60
		 */
		InitialAudioGain?: number | null;

		/** Global Configuration Input End Action */
		InputEndAction?: GlobalConfigurationInputEndAction | null;

		/** Input Loss Behavior */
		InputLossBehavior?: InputLossBehavior | null;

		/** Global Configuration Output Locking Mode */
		OutputLockingMode?: GlobalConfigurationOutputLockingMode | null;

		/** Global Configuration Output Timing Source */
		OutputTimingSource?: GlobalConfigurationOutputTimingSource | null;

		/** Global Configuration Low Framerate Inputs */
		SupportLowFramerateInputs?: Ac3SettingsLfeFilter | null;
	}

	export enum GlobalConfigurationInputEndAction { NONE = 0, SWITCH_AND_LOOP_INPUTS = 1 }


	/** Input Loss Behavior */
	export interface InputLossBehavior {

		/**
		 * Placeholder documentation for __integerMin0Max1000000
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		BlackFrameMsec?: number | null;

		/**
		 * Placeholder documentation for __stringMin6Max6
		 * Max length: 6
		 * Min length: 6
		 */
		InputLossImageColor?: string | null;

		/** Input Location */
		InputLossImageSlate?: InputLocation | null;

		/** Input Loss Image Type */
		InputLossImageType?: InputLossBehaviorInputLossImageType | null;

		/**
		 * Placeholder documentation for __integerMin0Max1000000
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		RepeatFrameMsec?: number | null;
	}

	export enum InputLossBehaviorInputLossImageType { COLOR = 0, SLATE = 1 }

	export enum GlobalConfigurationOutputLockingMode { EPOCH_LOCKING = 0, PIPELINE_LOCKING = 1 }

	export enum GlobalConfigurationOutputTimingSource { INPUT_CLOCK = 0, SYSTEM_CLOCK = 1 }


	/** Nielsen Configuration */
	export interface NielsenConfiguration {

		/** Placeholder documentation for __string */
		DistributorId?: string | null;

		/** State of Nielsen PCM to ID3 tagging */
		NielsenPcmToId3Tagging?: Ac3SettingsLfeFilter | null;
	}


	/** Output groups for this Live Event. Output groups contain information about where streams should be distributed. */
	export interface OutputGroup {

		/**
		 * Placeholder documentation for __stringMax32
		 * Max length: 32
		 */
		Name?: string | null;

		/**
		 * Output Group Settings
		 * Required
		 */
		OutputGroupSettings: OutputGroupSettings;

		/**
		 * Placeholder documentation for __listOfOutput
		 * Required
		 */
		Outputs: Array<Output>;
	}


	/** Output Group Settings */
	export interface OutputGroupSettings {

		/** Archive Group Settings */
		ArchiveGroupSettings?: ArchiveGroupSettings | null;

		/** Frame Capture Group Settings */
		FrameCaptureGroupSettings?: FrameCaptureGroupSettings | null;

		/** Hls Group Settings */
		HlsGroupSettings?: HlsGroupSettings | null;

		/** Media Package Group Settings */
		MediaPackageGroupSettings?: MediaPackageGroupSettings | null;

		/** Ms Smooth Group Settings */
		MsSmoothGroupSettings?: MsSmoothGroupSettings | null;

		/** Multiplex Group Settings */
		MultiplexGroupSettings?: MultiplexGroupSettings | null;

		/** Rtmp Group Settings */
		RtmpGroupSettings?: RtmpGroupSettings | null;

		/** Udp Group Settings */
		UdpGroupSettings?: UdpGroupSettings | null;
	}


	/** Archive Group Settings */
	export interface ArchiveGroupSettings {

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		RolloverInterval?: number | null;
	}


	/** Reference to an OutputDestination ID defined in the channel */
	export interface OutputLocationRef {

		/** Placeholder documentation for __string */
		DestinationRefId?: string | null;
	}


	/** Frame Capture Group Settings */
	export interface FrameCaptureGroupSettings {

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;
	}


	/** Hls Group Settings */
	export interface HlsGroupSettings {

		/** Placeholder documentation for __listOfHlsAdMarkers */
		AdMarkers?: Array<HlsAdMarkers> | null;

		/** Placeholder documentation for __string */
		BaseUrlContent?: string | null;

		/** Placeholder documentation for __string */
		BaseUrlContent1?: string | null;

		/** Placeholder documentation for __string */
		BaseUrlManifest?: string | null;

		/** Placeholder documentation for __string */
		BaseUrlManifest1?: string | null;

		/** Placeholder documentation for __listOfCaptionLanguageMapping */
		CaptionLanguageMappings?: Array<CaptionLanguageMapping> | null;

		/** Hls Caption Language Setting */
		CaptionLanguageSetting?: HlsGroupSettingsCaptionLanguageSetting | null;

		/** Hls Client Cache */
		ClientCache?: Ac3SettingsLfeFilter | null;

		/** Hls Codec Specification */
		CodecSpecification?: HlsGroupSettingsCodecSpecification | null;

		/**
		 * Placeholder documentation for __stringMin32Max32
		 * Max length: 32
		 * Min length: 32
		 */
		ConstantIv?: string | null;

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;

		/** Hls Directory Structure */
		DirectoryStructure?: HlsGroupSettingsDirectoryStructure | null;

		/** Hls Encryption Type */
		EncryptionType?: HlsGroupSettingsEncryptionType | null;

		/** Hls Cdn Settings */
		HlsCdnSettings?: HlsCdnSettings | null;

		/** State of HLS ID3 Segment Tagging */
		HlsId3SegmentTagging?: Ac3SettingsLfeFilter | null;

		/** When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment. */
		IFrameOnlyPlaylists?: HlsGroupSettingsIFrameOnlyPlaylists | null;

		/**
		 * Placeholder documentation for __integerMin3
		 * Minimum: 3
		 */
		IndexNSegments?: number | null;

		/** Input Loss Action For Hls Out */
		InputLossAction?: HlsGroupSettingsInputLossAction | null;

		/** Hls Iv In Manifest */
		IvInManifest?: HlsGroupSettingsIvInManifest | null;

		/** Hls Iv Source */
		IvSource?: HlsGroupSettingsIvSource | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		KeepSegments?: number | null;

		/** Placeholder documentation for __string */
		KeyFormat?: string | null;

		/** Placeholder documentation for __string */
		KeyFormatVersions?: string | null;

		/** Key Provider Settings */
		KeyProviderSettings?: KeyProviderSettings | null;

		/** Hls Manifest Compression */
		ManifestCompression?: HlsGroupSettingsManifestCompression | null;

		/** Hls Manifest Duration Format */
		ManifestDurationFormat?: HlsGroupSettingsManifestDurationFormat | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		MinSegmentLength?: number | null;

		/** Hls Mode */
		Mode?: HlsGroupSettingsMode | null;

		/** Hls Output Selection */
		OutputSelection?: HlsGroupSettingsOutputSelection | null;

		/** Hls Program Date Time */
		ProgramDateTime?: HlsGroupSettingsIvInManifest | null;

		/**
		 * Placeholder documentation for __integerMin0Max3600
		 * Minimum: 0
		 * Maximum: 3600
		 */
		ProgramDateTimePeriod?: number | null;

		/** Hls Redundant Manifest */
		RedundantManifest?: Ac3SettingsLfeFilter | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		SegmentLength?: number | null;

		/** Hls Segmentation Mode */
		SegmentationMode?: HlsGroupSettingsSegmentationMode | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		SegmentsPerSubdirectory?: number | null;

		/** Hls Stream Inf Resolution */
		StreamInfResolution?: HlsGroupSettingsIvInManifest | null;

		/** Hls Timed Metadata Id3 Frame */
		TimedMetadataId3Frame?: HlsGroupSettingsTimedMetadataId3Frame | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimedMetadataId3Period?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimestampDeltaMilliseconds?: number | null;

		/** Hls Ts File Mode */
		TsFileMode?: HlsGroupSettingsTsFileMode | null;
	}


	/** Hls Ad Markers */
	export enum HlsAdMarkers { ADOBE = 0, ELEMENTAL = 1, ELEMENTAL_SCTE35 = 2 }


	/** Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description. */
	export interface CaptionLanguageMapping {

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Required
		 * Minimum: 1
		 * Maximum: 4
		 */
		CaptionChannel: number;

		/**
		 * Placeholder documentation for __stringMin3Max3
		 * Required
		 * Max length: 3
		 * Min length: 3
		 */
		LanguageCode: string;

		/**
		 * Placeholder documentation for __stringMin1
		 * Required
		 * Min length: 1
		 */
		LanguageDescription: string;
	}

	export enum HlsGroupSettingsCaptionLanguageSetting { INSERT = 0, NONE = 1, OMIT = 2 }

	export enum HlsGroupSettingsCodecSpecification { RFC_4281 = 0, RFC_6381 = 1 }

	export enum HlsGroupSettingsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }

	export enum HlsGroupSettingsEncryptionType { AES128 = 0, SAMPLE_AES = 1 }


	/** Hls Cdn Settings */
	export interface HlsCdnSettings {

		/** Hls Akamai Settings */
		HlsAkamaiSettings?: HlsAkamaiSettings | null;

		/** Hls Basic Put Settings */
		HlsBasicPutSettings?: HlsBasicPutSettings | null;

		/** Hls Media Store Settings */
		HlsMediaStoreSettings?: HlsMediaStoreSettings | null;

		/** Hls Webdav Settings */
		HlsWebdavSettings?: HlsWebdavSettings | null;
	}


	/** Hls Akamai Settings */
	export interface HlsAkamaiSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration?: number | null;

		/** Hls Akamai Http Transfer Mode */
		HttpTransferMode?: HlsAkamaiSettingsHttpTransferMode | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay?: number | null;

		/** Placeholder documentation for __string */
		Salt?: string | null;

		/** Placeholder documentation for __string */
		Token?: string | null;
	}

	export enum HlsAkamaiSettingsHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/** Hls Basic Put Settings */
	export interface HlsBasicPutSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay?: number | null;
	}


	/** Hls Media Store Settings */
	export interface HlsMediaStoreSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration?: number | null;

		/** Hls Media Store Storage Class */
		MediaStoreStorageClass?: HlsMediaStoreSettingsMediaStoreStorageClass | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay?: number | null;
	}

	export enum HlsMediaStoreSettingsMediaStoreStorageClass { TEMPORAL = 0 }


	/** Hls Webdav Settings */
	export interface HlsWebdavSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration?: number | null;

		/** Hls Webdav Http Transfer Mode */
		HttpTransferMode?: HlsAkamaiSettingsHttpTransferMode | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay?: number | null;
	}

	export enum HlsGroupSettingsIFrameOnlyPlaylists { DISABLED = 0, STANDARD = 1 }

	export enum HlsGroupSettingsInputLossAction { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }

	export enum HlsGroupSettingsIvInManifest { EXCLUDE = 0, INCLUDE = 1 }

	export enum HlsGroupSettingsIvSource { EXPLICIT = 0, FOLLOWS_SEGMENT_NUMBER = 1 }


	/** Key Provider Settings */
	export interface KeyProviderSettings {

		/** Static Key Settings */
		StaticKeySettings?: StaticKeySettings | null;
	}


	/** Static Key Settings */
	export interface StaticKeySettings {

		/** Input Location */
		KeyProviderServer?: InputLocation | null;

		/**
		 * Placeholder documentation for __stringMin32Max32
		 * Required
		 * Max length: 32
		 * Min length: 32
		 */
		StaticKeyValue: string;
	}

	export enum HlsGroupSettingsManifestCompression { GZIP = 0, NONE = 1 }

	export enum HlsGroupSettingsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }

	export enum HlsGroupSettingsMode { LIVE = 0, VOD = 1 }

	export enum HlsGroupSettingsOutputSelection { MANIFESTS_AND_SEGMENTS = 0, SEGMENTS_ONLY = 1 }

	export enum HlsGroupSettingsSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }

	export enum HlsGroupSettingsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }

	export enum HlsGroupSettingsTsFileMode { SEGMENTED_FILES = 0, SINGLE_FILE = 1 }


	/** Media Package Group Settings */
	export interface MediaPackageGroupSettings {

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;
	}


	/** Ms Smooth Group Settings */
	export interface MsSmoothGroupSettings {

		/** Placeholder documentation for __string */
		AcquisitionPointId?: string | null;

		/** Smooth Group Audio Only Timecode Control */
		AudioOnlyTimecodeControl?: MsSmoothGroupSettingsAudioOnlyTimecodeControl | null;

		/** Smooth Group Certificate Mode */
		CertificateMode?: MsSmoothGroupSettingsCertificateMode | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval?: number | null;

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;

		/** Placeholder documentation for __string */
		EventId?: string | null;

		/** Smooth Group Event Id Mode */
		EventIdMode?: MsSmoothGroupSettingsEventIdMode | null;

		/** Smooth Group Event Stop Behavior */
		EventStopBehavior?: MsSmoothGroupSettingsEventStopBehavior | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FilecacheDuration?: number | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FragmentLength?: number | null;

		/** Input Loss Action For Ms Smooth Out */
		InputLossAction?: HlsGroupSettingsInputLossAction | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RestartDelay?: number | null;

		/** Smooth Group Segmentation Mode */
		SegmentationMode?: HlsGroupSettingsSegmentationMode | null;

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		SendDelayMs?: number | null;

		/** Smooth Group Sparse Track Type */
		SparseTrackType?: MsSmoothGroupSettingsSparseTrackType | null;

		/** Smooth Group Stream Manifest Behavior */
		StreamManifestBehavior?: MsSmoothGroupSettingsStreamManifestBehavior | null;

		/** Placeholder documentation for __string */
		TimestampOffset?: string | null;

		/** Smooth Group Timestamp Offset Mode */
		TimestampOffsetMode?: MsSmoothGroupSettingsTimestampOffsetMode | null;
	}

	export enum MsSmoothGroupSettingsAudioOnlyTimecodeControl { PASSTHROUGH = 0, USE_CONFIGURED_CLOCK = 1 }

	export enum MsSmoothGroupSettingsCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }

	export enum MsSmoothGroupSettingsEventIdMode { NO_EVENT_ID = 0, USE_CONFIGURED = 1, USE_TIMESTAMP = 2 }

	export enum MsSmoothGroupSettingsEventStopBehavior { NONE = 0, SEND_EOS = 1 }

	export enum MsSmoothGroupSettingsSparseTrackType { NONE = 0, SCTE_35 = 1, SCTE_35_WITHOUT_SEGMENTATION = 2 }

	export enum MsSmoothGroupSettingsStreamManifestBehavior { DO_NOT_SEND = 0, SEND = 1 }

	export enum MsSmoothGroupSettingsTimestampOffsetMode { USE_CONFIGURED_OFFSET = 0, USE_EVENT_START_DATE = 1 }


	/** Multiplex Group Settings */
	export interface MultiplexGroupSettings {
	}


	/** Rtmp Group Settings */
	export interface RtmpGroupSettings {

		/** Authentication Scheme */
		AuthenticationScheme?: RtmpGroupSettingsAuthenticationScheme | null;

		/** Rtmp Cache Full Behavior */
		CacheFullBehavior?: RtmpGroupSettingsCacheFullBehavior | null;

		/**
		 * Placeholder documentation for __integerMin30
		 * Minimum: 30
		 */
		CacheLength?: number | null;

		/** Rtmp Caption Data */
		CaptionData?: RtmpGroupSettingsCaptionData | null;

		/** Input Loss Action For Rtmp Out */
		InputLossAction?: HlsGroupSettingsInputLossAction | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RestartDelay?: number | null;
	}

	export enum RtmpGroupSettingsAuthenticationScheme { AKAMAI = 0, COMMON = 1 }

	export enum RtmpGroupSettingsCacheFullBehavior { DISCONNECT_IMMEDIATELY = 0, WAIT_FOR_SERVER = 1 }

	export enum RtmpGroupSettingsCaptionData { ALL = 0, FIELD1_608 = 1, FIELD1_AND_FIELD2_608 = 2 }


	/** Udp Group Settings */
	export interface UdpGroupSettings {

		/** Input Loss Action For Udp Out */
		InputLossAction?: UdpGroupSettingsInputLossAction | null;

		/** Udp Timed Metadata Id3 Frame */
		TimedMetadataId3Frame?: HlsGroupSettingsTimedMetadataId3Frame | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimedMetadataId3Period?: number | null;
	}

	export enum UdpGroupSettingsInputLossAction { DROP_PROGRAM = 0, DROP_TS = 1, EMIT_PROGRAM = 2 }


	/** Output settings. There can be multiple outputs within a group. */
	export interface Output {

		/** Placeholder documentation for __listOf__string */
		AudioDescriptionNames?: Array<string> | null;

		/** Placeholder documentation for __listOf__string */
		CaptionDescriptionNames?: Array<string> | null;

		/**
		 * Placeholder documentation for __stringMin1Max255
		 * Max length: 255
		 * Min length: 1
		 */
		OutputName?: string | null;

		/**
		 * Output Settings
		 * Required
		 */
		OutputSettings: OutputSettings;

		/** Placeholder documentation for __string */
		VideoDescriptionName?: string | null;
	}


	/** Output Settings */
	export interface OutputSettings {

		/** Archive Output Settings */
		ArchiveOutputSettings?: ArchiveOutputSettings | null;

		/** Frame Capture Output Settings */
		FrameCaptureOutputSettings?: FrameCaptureOutputSettings | null;

		/** Hls Output Settings */
		HlsOutputSettings?: HlsOutputSettings | null;

		/** Media Package Output Settings */
		MediaPackageOutputSettings?: MediaPackageOutputSettings | null;

		/** Ms Smooth Output Settings */
		MsSmoothOutputSettings?: MsSmoothOutputSettings | null;

		/** Multiplex Output Settings */
		MultiplexOutputSettings?: MultiplexOutputSettings | null;

		/** Rtmp Output Settings */
		RtmpOutputSettings?: RtmpOutputSettings | null;

		/** Udp Output Settings */
		UdpOutputSettings?: UdpOutputSettings | null;
	}


	/** Archive Output Settings */
	export interface ArchiveOutputSettings {

		/**
		 * Archive Container Settings
		 * Required
		 */
		ContainerSettings: ArchiveContainerSettings;

		/** Placeholder documentation for __string */
		Extension?: string | null;

		/** Placeholder documentation for __string */
		NameModifier?: string | null;
	}


	/** Archive Container Settings */
	export interface ArchiveContainerSettings {

		/** M2ts Settings */
		M2tsSettings?: M2tsSettings | null;
	}


	/** M2ts Settings */
	export interface M2tsSettings {

		/** M2ts Absent Input Audio Behavior */
		AbsentInputAudioBehavior?: M2tsSettingsAbsentInputAudioBehavior | null;

		/** M2ts Arib */
		Arib?: Ac3SettingsLfeFilter | null;

		/** Placeholder documentation for __string */
		AribCaptionsPid?: string | null;

		/** M2ts Arib Captions Pid Control */
		AribCaptionsPidControl?: M2tsSettingsAribCaptionsPidControl | null;

		/** M2ts Audio Buffer Model */
		AudioBufferModel?: M2tsSettingsAudioBufferModel | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		AudioFramesPerPes?: number | null;

		/** Placeholder documentation for __string */
		AudioPids?: string | null;

		/** M2ts Audio Stream Type */
		AudioStreamType?: M2tsSettingsAudioBufferModel | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Bitrate?: number | null;

		/** M2ts Buffer Model */
		BufferModel?: M2tsSettingsBufferModel | null;

		/** M2ts Cc Descriptor */
		CcDescriptor?: Ac3SettingsLfeFilter | null;

		/** DVB Network Information Table (NIT) */
		DvbNitSettings?: DvbNitSettings | null;

		/** DVB Service Description Table (SDT) */
		DvbSdtSettings?: DvbSdtSettings | null;

		/** Placeholder documentation for __string */
		DvbSubPids?: string | null;

		/** DVB Time and Date Table (SDT) */
		DvbTdtSettings?: DvbTdtSettings | null;

		/** Placeholder documentation for __string */
		DvbTeletextPid?: string | null;

		/** M2ts Ebif Control */
		Ebif?: M2tsSettingsEbif | null;

		/** M2ts Audio Interval */
		EbpAudioInterval?: M2tsSettingsEbpAudioInterval | null;

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		EbpLookaheadMs?: number | null;

		/** M2ts Ebp Placement */
		EbpPlacement?: M2tsSettingsEbpPlacement | null;

		/** Placeholder documentation for __string */
		EcmPid?: string | null;

		/** M2ts Es Rate In Pes */
		EsRateInPes?: HlsGroupSettingsIvInManifest | null;

		/** Placeholder documentation for __string */
		EtvPlatformPid?: string | null;

		/** Placeholder documentation for __string */
		EtvSignalPid?: string | null;

		/** Placeholder documentation for __doubleMin0 */
		FragmentTime?: number | null;

		/** M2ts Klv */
		Klv?: M2tsSettingsEbif | null;

		/** Placeholder documentation for __string */
		KlvDataPids?: string | null;

		/** M2ts Nielsen Id3 Behavior */
		NielsenId3Behavior?: M2tsSettingsNielsenId3Behavior | null;

		/** Placeholder documentation for __doubleMin0 */
		NullPacketBitrate?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PatInterval?: number | null;

		/** M2ts Pcr Control */
		PcrControl?: M2tsSettingsPcrControl | null;

		/**
		 * Placeholder documentation for __integerMin0Max500
		 * Minimum: 0
		 * Maximum: 500
		 */
		PcrPeriod?: number | null;

		/** Placeholder documentation for __string */
		PcrPid?: string | null;

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PmtInterval?: number | null;

		/** Placeholder documentation for __string */
		PmtPid?: string | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNum?: number | null;

		/** M2ts Rate Mode */
		RateMode?: AacSettingsRateControlMode | null;

		/** Placeholder documentation for __string */
		Scte27Pids?: string | null;

		/** M2ts Scte35 Control */
		Scte35Control?: M2tsSettingsEbif | null;

		/** Placeholder documentation for __string */
		Scte35Pid?: string | null;

		/** M2ts Segmentation Markers */
		SegmentationMarkers?: M2tsSettingsSegmentationMarkers | null;

		/** M2ts Segmentation Style */
		SegmentationStyle?: M2tsSettingsSegmentationStyle | null;

		/** Placeholder documentation for __doubleMin1 */
		SegmentationTime?: number | null;

		/** M2ts Timed Metadata Behavior */
		TimedMetadataBehavior?: M2tsSettingsNielsenId3Behavior | null;

		/** Placeholder documentation for __string */
		TimedMetadataPid?: string | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId?: number | null;

		/** Placeholder documentation for __string */
		VideoPid?: string | null;
	}

	export enum M2tsSettingsAbsentInputAudioBehavior { DROP = 0, ENCODE_SILENCE = 1 }

	export enum M2tsSettingsAribCaptionsPidControl { AUTO = 0, USE_CONFIGURED = 1 }

	export enum M2tsSettingsAudioBufferModel { ATSC = 0, DVB = 1 }

	export enum M2tsSettingsBufferModel { MULTIPLEX = 0, NONE = 1 }


	/** DVB Network Information Table (NIT) */
	export interface DvbNitSettings {

		/**
		 * Placeholder documentation for __integerMin0Max65536
		 * Required
		 * Minimum: 0
		 * Maximum: 65536
		 */
		NetworkId: number;

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		NetworkName: string;

		/**
		 * Placeholder documentation for __integerMin25Max10000
		 * Minimum: 25
		 * Maximum: 10000
		 */
		RepInterval?: number | null;
	}


	/** DVB Service Description Table (SDT) */
	export interface DvbSdtSettings {

		/** Dvb Sdt Output Sdt */
		OutputSdt?: DvbSdtSettingsOutputSdt | null;

		/**
		 * Placeholder documentation for __integerMin25Max2000
		 * Minimum: 25
		 * Maximum: 2000
		 */
		RepInterval?: number | null;

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Max length: 256
		 * Min length: 1
		 */
		ServiceName?: string | null;

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Max length: 256
		 * Min length: 1
		 */
		ServiceProviderName?: string | null;
	}

	export enum DvbSdtSettingsOutputSdt { SDT_FOLLOW = 0, SDT_FOLLOW_IF_PRESENT = 1, SDT_MANUAL = 2, SDT_NONE = 3 }


	/** DVB Time and Date Table (SDT) */
	export interface DvbTdtSettings {

		/**
		 * Placeholder documentation for __integerMin1000Max30000
		 * Minimum: 1000
		 * Maximum: 30000
		 */
		RepInterval?: number | null;
	}

	export enum M2tsSettingsEbif { NONE = 0, PASSTHROUGH = 1 }

	export enum M2tsSettingsEbpAudioInterval { VIDEO_AND_FIXED_INTERVALS = 0, VIDEO_INTERVAL = 1 }

	export enum M2tsSettingsEbpPlacement { VIDEO_AND_AUDIO_PIDS = 0, VIDEO_PID = 1 }

	export enum M2tsSettingsNielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }

	export enum M2tsSettingsPcrControl { CONFIGURED_PCR_PERIOD = 0, PCR_EVERY_PES_PACKET = 1 }

	export enum M2tsSettingsSegmentationMarkers { EBP = 0, EBP_LEGACY = 1, NONE = 2, PSI_SEGSTART = 3, RAI_ADAPT = 4, RAI_SEGSTART = 5 }

	export enum M2tsSettingsSegmentationStyle { MAINTAIN_CADENCE = 0, RESET_CADENCE = 1 }


	/** Frame Capture Output Settings */
	export interface FrameCaptureOutputSettings {

		/** Placeholder documentation for __string */
		NameModifier?: string | null;
	}


	/** Hls Output Settings */
	export interface HlsOutputSettings {

		/** Hls H265 Packaging Type */
		H265PackagingType?: HlsOutputSettingsH265PackagingType | null;

		/**
		 * Hls Settings
		 * Required
		 */
		HlsSettings: HlsSettings;

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		NameModifier?: string | null;

		/** Placeholder documentation for __string */
		SegmentModifier?: string | null;
	}

	export enum HlsOutputSettingsH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/** Hls Settings */
	export interface HlsSettings {

		/** Audio Only Hls Settings */
		AudioOnlyHlsSettings?: AudioOnlyHlsSettings | null;

		/** Fmp4 Hls Settings */
		Fmp4HlsSettings?: Fmp4HlsSettings | null;

		/** Standard Hls Settings */
		StandardHlsSettings?: StandardHlsSettings | null;
	}


	/** Audio Only Hls Settings */
	export interface AudioOnlyHlsSettings {

		/** Placeholder documentation for __string */
		AudioGroupId?: string | null;

		/** Input Location */
		AudioOnlyImage?: InputLocation | null;

		/** Audio Only Hls Track Type */
		AudioTrackType?: AudioOnlyHlsSettingsAudioTrackType | null;

		/** Audio Only Hls Segment Type */
		SegmentType?: AudioOnlyHlsSettingsSegmentType | null;
	}

	export enum AudioOnlyHlsSettingsAudioTrackType { ALTERNATE_AUDIO_AUTO_SELECT = 0, ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2, AUDIO_ONLY_VARIANT_STREAM = 3 }

	export enum AudioOnlyHlsSettingsSegmentType { AAC = 0, FMP4 = 1 }


	/** Fmp4 Hls Settings */
	export interface Fmp4HlsSettings {

		/** Placeholder documentation for __string */
		AudioRenditionSets?: string | null;

		/** Fmp4 Nielsen Id3 Behavior */
		NielsenId3Behavior?: M2tsSettingsNielsenId3Behavior | null;

		/** Fmp4 Timed Metadata Behavior */
		TimedMetadataBehavior?: M2tsSettingsNielsenId3Behavior | null;
	}


	/** Standard Hls Settings */
	export interface StandardHlsSettings {

		/** Placeholder documentation for __string */
		AudioRenditionSets?: string | null;

		/**
		 * Settings information for the .m3u8 container
		 * Required
		 */
		M3u8Settings: M3u8Settings;
	}


	/** Settings information for the .m3u8 container */
	export interface M3u8Settings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		AudioFramesPerPes?: number | null;

		/** Placeholder documentation for __string */
		AudioPids?: string | null;

		/** Placeholder documentation for __string */
		EcmPid?: string | null;

		/** M3u8 Nielsen Id3 Behavior */
		NielsenId3Behavior?: M2tsSettingsNielsenId3Behavior | null;

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PatInterval?: number | null;

		/** M3u8 Pcr Control */
		PcrControl?: M2tsSettingsPcrControl | null;

		/**
		 * Placeholder documentation for __integerMin0Max500
		 * Minimum: 0
		 * Maximum: 500
		 */
		PcrPeriod?: number | null;

		/** Placeholder documentation for __string */
		PcrPid?: string | null;

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PmtInterval?: number | null;

		/** Placeholder documentation for __string */
		PmtPid?: string | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNum?: number | null;

		/** M3u8 Scte35 Behavior */
		Scte35Behavior?: M2tsSettingsNielsenId3Behavior | null;

		/** Placeholder documentation for __string */
		Scte35Pid?: string | null;

		/** M3u8 Timed Metadata Behavior */
		TimedMetadataBehavior?: M2tsSettingsNielsenId3Behavior | null;

		/** Placeholder documentation for __string */
		TimedMetadataPid?: string | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId?: number | null;

		/** Placeholder documentation for __string */
		VideoPid?: string | null;
	}


	/** Media Package Output Settings */
	export interface MediaPackageOutputSettings {
	}


	/** Ms Smooth Output Settings */
	export interface MsSmoothOutputSettings {

		/** Ms Smooth H265 Packaging Type */
		H265PackagingType?: HlsOutputSettingsH265PackagingType | null;

		/** Placeholder documentation for __string */
		NameModifier?: string | null;
	}


	/** Multiplex Output Settings */
	export interface MultiplexOutputSettings {

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;
	}


	/** Rtmp Output Settings */
	export interface RtmpOutputSettings {

		/** Rtmp Output Certificate Mode */
		CertificateMode?: MsSmoothGroupSettingsCertificateMode | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ConnectionRetryInterval?: number | null;

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries?: number | null;
	}


	/** Udp Output Settings */
	export interface UdpOutputSettings {

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		BufferMsec?: number | null;

		/**
		 * Udp Container Settings
		 * Required
		 */
		ContainerSettings: UdpContainerSettings;

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;

		/** Fec Output Settings */
		FecOutputSettings?: FecOutputSettings | null;
	}


	/** Udp Container Settings */
	export interface UdpContainerSettings {

		/** M2ts Settings */
		M2tsSettings?: M2tsSettings | null;
	}


	/** Fec Output Settings */
	export interface FecOutputSettings {

		/**
		 * Placeholder documentation for __integerMin4Max20
		 * Minimum: 4
		 * Maximum: 20
		 */
		ColumnDepth?: number | null;

		/** Fec Output Include Fec */
		IncludeFec?: FecOutputSettingsIncludeFec | null;

		/**
		 * Placeholder documentation for __integerMin1Max20
		 * Minimum: 1
		 * Maximum: 20
		 */
		RowLength?: number | null;
	}

	export enum FecOutputSettingsIncludeFec { COLUMN = 0, COLUMN_AND_ROW = 1 }


	/** Timecode Config */
	export interface TimecodeConfig {

		/**
		 * Timecode Config Source
		 * Required
		 */
		Source: TimecodeConfigSource;

		/**
		 * Placeholder documentation for __integerMin1Max1000000
		 * Minimum: 1
		 * Maximum: 1000000
		 */
		SyncThreshold?: number | null;
	}

	export enum TimecodeConfigSource { EMBEDDED = 0, SYSTEMCLOCK = 1, ZEROBASED = 2 }


	/** Video settings for this stream. */
	export interface VideoDescription {

		/** Video Codec Settings */
		CodecSettings?: VideoCodecSettings | null;

		/** Placeholder documentation for __integer */
		Height?: number | null;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Name: string;

		/** Video Description Respond To Afd */
		RespondToAfd?: VideoDescriptionRespondToAfd | null;

		/** Video Description Scaling Behavior */
		ScalingBehavior?: VideoDescriptionScalingBehavior | null;

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		Sharpness?: number | null;

		/** Placeholder documentation for __integer */
		Width?: number | null;
	}


	/** Video Codec Settings */
	export interface VideoCodecSettings {

		/** Frame Capture Settings */
		FrameCaptureSettings?: FrameCaptureSettings | null;

		/** H264 Settings */
		H264Settings?: H264Settings | null;

		/** H265 Settings */
		H265Settings?: H265Settings | null;
	}


	/** Frame Capture Settings */
	export interface FrameCaptureSettings {

		/**
		 * Placeholder documentation for __integerMin1Max3600000
		 * Required
		 * Minimum: 1
		 * Maximum: 3600000
		 */
		CaptureInterval: number;

		/** Frame Capture Interval Unit */
		CaptureIntervalUnits?: FrameCaptureSettingsCaptureIntervalUnits | null;
	}

	export enum FrameCaptureSettingsCaptureIntervalUnits { MILLISECONDS = 0, SECONDS = 1 }


	/** H264 Settings */
	export interface H264Settings {

		/** H264 Adaptive Quantization */
		AdaptiveQuantization?: H264SettingsAdaptiveQuantization | null;

		/** Afd Signaling */
		AfdSignaling?: H264SettingsAfdSignaling | null;

		/**
		 * Placeholder documentation for __integerMin1000
		 * Minimum: 1000
		 */
		Bitrate?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		BufFillPct?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		BufSize?: number | null;

		/** H264 Color Metadata */
		ColorMetadata?: H264SettingsColorMetadata | null;

		/** H264 Color Space Settings */
		ColorSpaceSettings?: H264ColorSpaceSettings | null;

		/** H264 Entropy Encoding */
		EntropyEncoding?: H264SettingsEntropyEncoding | null;

		/** H264 Filter Settings */
		FilterSettings?: H264FilterSettings | null;

		/** Fixed Afd */
		FixedAfd?: H264SettingsFixedAfd | null;

		/** H264 Flicker Aq */
		FlickerAq?: Ac3SettingsLfeFilter | null;

		/** H264 Force Field Pictures */
		ForceFieldPictures?: Ac3SettingsLfeFilter | null;

		/** H264 Framerate Control */
		FramerateControl?: H264SettingsFramerateControl | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FramerateDenominator?: number | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FramerateNumerator?: number | null;

		/** H264 Gop BReference */
		GopBReference?: Ac3SettingsLfeFilter | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		GopClosedCadence?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		GopNumBFrames?: number | null;

		/** Placeholder documentation for __double */
		GopSize?: number | null;

		/** H264 Gop Size Units */
		GopSizeUnits?: H264SettingsGopSizeUnits | null;

		/** H264 Level */
		Level?: H264SettingsLevel | null;

		/** H264 Look Ahead Rate Control */
		LookAheadRateControl?: H264SettingsLookAheadRateControl | null;

		/**
		 * Placeholder documentation for __integerMin1000
		 * Minimum: 1000
		 */
		MaxBitrate?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max30
		 * Minimum: 0
		 * Maximum: 30
		 */
		MinIInterval?: number | null;

		/**
		 * Placeholder documentation for __integerMin1Max6
		 * Minimum: 1
		 * Maximum: 6
		 */
		NumRefFrames?: number | null;

		/** H264 Par Control */
		ParControl?: H264SettingsFramerateControl | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParDenominator?: number | null;

		/** Placeholder documentation for __integer */
		ParNumerator?: number | null;

		/** H264 Profile */
		Profile?: H264SettingsProfile | null;

		/** H264 Quality Level */
		QualityLevel?: H264SettingsQualityLevel | null;

		/**
		 * Placeholder documentation for __integerMin1Max10
		 * Minimum: 1
		 * Maximum: 10
		 */
		QvbrQualityLevel?: number | null;

		/** H264 Rate Control Mode */
		RateControlMode?: H264SettingsRateControlMode | null;

		/** H264 Scan Type */
		ScanType?: H264SettingsScanType | null;

		/** H264 Scene Change Detect */
		SceneChangeDetect?: Ac3SettingsLfeFilter | null;

		/**
		 * Placeholder documentation for __integerMin1Max32
		 * Minimum: 1
		 * Maximum: 32
		 */
		Slices?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max128
		 * Minimum: 0
		 * Maximum: 128
		 */
		Softness?: number | null;

		/** H264 Spatial Aq */
		SpatialAq?: Ac3SettingsLfeFilter | null;

		/** H264 Sub Gop Length */
		SubgopLength?: H264SettingsSubgopLength | null;

		/** H264 Syntax */
		Syntax?: H264SettingsSyntax | null;

		/** H264 Temporal Aq */
		TemporalAq?: Ac3SettingsLfeFilter | null;

		/** H264 Timecode Insertion Behavior */
		TimecodeInsertion?: H264SettingsTimecodeInsertion | null;
	}

	export enum H264SettingsAdaptiveQuantization { HIGH = 0, HIGHER = 1, LOW = 2, MAX = 3, MEDIUM = 4, OFF = 5 }

	export enum H264SettingsAfdSignaling { AUTO = 0, FIXED = 1, NONE = 2 }

	export enum H264SettingsColorMetadata { IGNORE = 0, INSERT = 1 }


	/** H264 Color Space Settings */
	export interface H264ColorSpaceSettings {

		/** Passthrough applies no color space conversion to the output */
		ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings | null;

		/** Rec601 Settings */
		Rec601Settings?: Rec601Settings | null;

		/** Rec709 Settings */
		Rec709Settings?: Rec709Settings | null;
	}


	/** Passthrough applies no color space conversion to the output */
	export interface ColorSpacePassthroughSettings {
	}


	/** Rec601 Settings */
	export interface Rec601Settings {
	}


	/** Rec709 Settings */
	export interface Rec709Settings {
	}

	export enum H264SettingsEntropyEncoding { CABAC = 0, CAVLC = 1 }


	/** H264 Filter Settings */
	export interface H264FilterSettings {

		/** Temporal Filter Settings */
		TemporalFilterSettings?: TemporalFilterSettings | null;
	}


	/** Temporal Filter Settings */
	export interface TemporalFilterSettings {

		/** Temporal Filter Post Filter Sharpening */
		PostFilterSharpening?: TemporalFilterSettingsPostFilterSharpening | null;

		/** Temporal Filter Strength */
		Strength?: TemporalFilterSettingsStrength | null;
	}

	export enum TemporalFilterSettingsPostFilterSharpening { AUTO = 0, DISABLED = 1, ENABLED = 2 }

	export enum TemporalFilterSettingsStrength { AUTO = 0, STRENGTH_1 = 1, STRENGTH_2 = 2, STRENGTH_3 = 3, STRENGTH_4 = 4, STRENGTH_5 = 5, STRENGTH_6 = 6, STRENGTH_7 = 7, STRENGTH_8 = 8, STRENGTH_9 = 9, STRENGTH_10 = 10, STRENGTH_11 = 11, STRENGTH_12 = 12, STRENGTH_13 = 13, STRENGTH_14 = 14, STRENGTH_15 = 15, STRENGTH_16 = 16 }

	export enum H264SettingsFixedAfd { AFD_0000 = 0, AFD_0010 = 1, AFD_0011 = 2, AFD_0100 = 3, AFD_1000 = 4, AFD_1001 = 5, AFD_1010 = 6, AFD_1011 = 7, AFD_1101 = 8, AFD_1110 = 9, AFD_1111 = 10 }

	export enum H264SettingsFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }

	export enum H264SettingsGopSizeUnits { FRAMES = 0, SECONDS = 1 }

	export enum H264SettingsLevel { H264_LEVEL_1 = 0, H264_LEVEL_1_1 = 1, H264_LEVEL_1_2 = 2, H264_LEVEL_1_3 = 3, H264_LEVEL_2 = 4, H264_LEVEL_2_1 = 5, H264_LEVEL_2_2 = 6, H264_LEVEL_3 = 7, H264_LEVEL_3_1 = 8, H264_LEVEL_3_2 = 9, H264_LEVEL_4 = 10, H264_LEVEL_4_1 = 11, H264_LEVEL_4_2 = 12, H264_LEVEL_5 = 13, H264_LEVEL_5_1 = 14, H264_LEVEL_5_2 = 15, H264_LEVEL_AUTO = 16 }

	export enum H264SettingsLookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }

	export enum H264SettingsProfile { BASELINE = 0, HIGH = 1, HIGH_10BIT = 2, HIGH_422 = 3, HIGH_422_10BIT = 4, MAIN = 5 }

	export enum H264SettingsQualityLevel { ENHANCED_QUALITY = 0, STANDARD_QUALITY = 1 }

	export enum H264SettingsRateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2, VBR = 3 }

	export enum H264SettingsScanType { INTERLACED = 0, PROGRESSIVE = 1 }

	export enum H264SettingsSubgopLength { DYNAMIC = 0, FIXED = 1 }

	export enum H264SettingsSyntax { DEFAULT = 0, RP2027 = 1 }

	export enum H264SettingsTimecodeInsertion { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/** H265 Settings */
	export interface H265Settings {

		/** H265 Adaptive Quantization */
		AdaptiveQuantization?: H264SettingsAdaptiveQuantization | null;

		/** Afd Signaling */
		AfdSignaling?: H264SettingsAfdSignaling | null;

		/** H265 Alternative Transfer Function */
		AlternativeTransferFunction?: H265SettingsAlternativeTransferFunction | null;

		/**
		 * Placeholder documentation for __integerMin100000Max40000000
		 * Minimum: 100000
		 * Maximum: 40000000
		 */
		Bitrate?: number | null;

		/**
		 * Placeholder documentation for __integerMin100000Max80000000
		 * Minimum: 100000
		 * Maximum: 80000000
		 */
		BufSize?: number | null;

		/** H265 Color Metadata */
		ColorMetadata?: H264SettingsColorMetadata | null;

		/** H265 Color Space Settings */
		ColorSpaceSettings?: H265ColorSpaceSettings | null;

		/** Fixed Afd */
		FixedAfd?: H264SettingsFixedAfd | null;

		/** H265 Flicker Aq */
		FlickerAq?: Ac3SettingsLfeFilter | null;

		/**
		 * Placeholder documentation for __integerMin1Max3003
		 * Required
		 * Minimum: 1
		 * Maximum: 3003
		 */
		FramerateDenominator: number;

		/**
		 * Placeholder documentation for __integerMin1
		 * Required
		 * Minimum: 1
		 */
		FramerateNumerator: number;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		GopClosedCadence?: number | null;

		/** Placeholder documentation for __double */
		GopSize?: number | null;

		/** H265 Gop Size Units */
		GopSizeUnits?: H264SettingsGopSizeUnits | null;

		/** H265 Level */
		Level?: H265SettingsLevel | null;

		/** H265 Look Ahead Rate Control */
		LookAheadRateControl?: H264SettingsLookAheadRateControl | null;

		/**
		 * Placeholder documentation for __integerMin100000Max40000000
		 * Minimum: 100000
		 * Maximum: 40000000
		 */
		MaxBitrate?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max30
		 * Minimum: 0
		 * Maximum: 30
		 */
		MinIInterval?: number | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParDenominator?: number | null;

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParNumerator?: number | null;

		/** H265 Profile */
		Profile?: H265SettingsProfile | null;

		/**
		 * Placeholder documentation for __integerMin1Max10
		 * Minimum: 1
		 * Maximum: 10
		 */
		QvbrQualityLevel?: number | null;

		/** H265 Rate Control Mode */
		RateControlMode?: H265SettingsRateControlMode | null;

		/** H265 Scan Type */
		ScanType?: H265SettingsScanType | null;

		/** H265 Scene Change Detect */
		SceneChangeDetect?: Ac3SettingsLfeFilter | null;

		/**
		 * Placeholder documentation for __integerMin1Max16
		 * Minimum: 1
		 * Maximum: 16
		 */
		Slices?: number | null;

		/** H265 Tier */
		Tier?: H265SettingsTier | null;

		/** H265 Timecode Insertion Behavior */
		TimecodeInsertion?: H264SettingsTimecodeInsertion | null;
	}

	export enum H265SettingsAlternativeTransferFunction { INSERT = 0, OMIT = 1 }


	/** H265 Color Space Settings */
	export interface H265ColorSpaceSettings {

		/** Passthrough applies no color space conversion to the output */
		ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings | null;

		/** Hdr10 Settings */
		Hdr10Settings?: Hdr10Settings | null;

		/** Rec601 Settings */
		Rec601Settings?: Rec601Settings | null;

		/** Rec709 Settings */
		Rec709Settings?: Rec709Settings | null;
	}


	/** Hdr10 Settings */
	export interface Hdr10Settings {

		/**
		 * Placeholder documentation for __integerMin0Max32768
		 * Minimum: 0
		 * Maximum: 32768
		 */
		MaxCll?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max32768
		 * Minimum: 0
		 * Maximum: 32768
		 */
		MaxFall?: number | null;
	}

	export enum H265SettingsLevel { H265_LEVEL_1 = 0, H265_LEVEL_2 = 1, H265_LEVEL_2_1 = 2, H265_LEVEL_3 = 3, H265_LEVEL_3_1 = 4, H265_LEVEL_4 = 5, H265_LEVEL_4_1 = 6, H265_LEVEL_5 = 7, H265_LEVEL_5_1 = 8, H265_LEVEL_5_2 = 9, H265_LEVEL_6 = 10, H265_LEVEL_6_1 = 11, H265_LEVEL_6_2 = 12, H265_LEVEL_AUTO = 13 }

	export enum H265SettingsProfile { MAIN = 0, MAIN_10BIT = 1 }

	export enum H265SettingsRateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2 }

	export enum H265SettingsScanType { PROGRESSIVE = 0 }

	export enum H265SettingsTier { HIGH = 0, MAIN = 1 }

	export enum VideoDescriptionRespondToAfd { NONE = 0, PASSTHROUGH = 1, RESPOND = 2 }

	export enum VideoDescriptionScalingBehavior { DEFAULT = 0, STRETCH_TO_OUTPUT = 1 }


	/** Placeholder documentation for InputAttachment */
	export interface InputAttachment {

		/** The settings for Automatic Input Failover. */
		AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings | null;

		/** Placeholder documentation for __string */
		InputAttachmentName?: string | null;

		/** Placeholder documentation for __string */
		InputId?: string | null;

		/** Live Event input parameters. There can be multiple inputs in a single Live Event. */
		InputSettings?: InputSettings | null;
	}


	/** The settings for Automatic Input Failover. */
	export interface AutomaticInputFailoverSettings {

		/**
		 * Input preference when deciding which input to make active when a previously failed input has recovered.
		 * If \"EQUAL_INPUT_PREFERENCE\", then the active input will stay active as long as it is healthy.
		 * If \"PRIMARY_INPUT_PREFERRED\", then always switch back to the primary input when it is healthy.
		 */
		InputPreference?: AutomaticInputFailoverSettingsInputPreference | null;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		SecondaryInputId: string;
	}

	export enum AutomaticInputFailoverSettingsInputPreference { EQUAL_INPUT_PREFERENCE = 0, PRIMARY_INPUT_PREFERRED = 1 }


	/** Live Event input parameters. There can be multiple inputs in a single Live Event. */
	export interface InputSettings {

		/** Placeholder documentation for __listOfAudioSelector */
		AudioSelectors?: Array<AudioSelector> | null;

		/** Placeholder documentation for __listOfCaptionSelector */
		CaptionSelectors?: Array<CaptionSelector> | null;

		/** Input Deblock Filter */
		DeblockFilter?: Ac3SettingsLfeFilter | null;

		/** Input Denoise Filter */
		DenoiseFilter?: Ac3SettingsLfeFilter | null;

		/**
		 * Placeholder documentation for __integerMin1Max5
		 * Minimum: 1
		 * Maximum: 5
		 */
		FilterStrength?: number | null;

		/** Input Filter */
		InputFilter?: InputSettingsInputFilter | null;

		/** Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection. */
		NetworkInputSettings?: NetworkInputSettings | null;

		/** Smpte2038 Data Preference */
		Smpte2038DataPreference?: InputSettingsSmpte2038DataPreference | null;

		/** Input Source End Behavior */
		SourceEndBehavior?: InputSettingsSourceEndBehavior | null;

		/** Specifies a particular video stream within an input source. An input may have only a single video selector. */
		VideoSelector?: VideoSelector | null;
	}


	/** Audio Selector */
	export interface AudioSelector {

		/**
		 * Placeholder documentation for __stringMin1
		 * Required
		 * Min length: 1
		 */
		Name: string;

		/** Audio Selector Settings */
		SelectorSettings?: AudioSelectorSettings | null;
	}


	/** Audio Selector Settings */
	export interface AudioSelectorSettings {

		/** Audio Language Selection */
		AudioLanguageSelection?: AudioLanguageSelection | null;

		/** Audio Pid Selection */
		AudioPidSelection?: AudioPidSelection | null;

		/** Audio Track Selection */
		AudioTrackSelection?: AudioTrackSelection | null;
	}


	/** Audio Language Selection */
	export interface AudioLanguageSelection {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		LanguageCode: string;

		/** Audio Language Selection Policy */
		LanguageSelectionPolicy?: AudioLanguageSelectionLanguageSelectionPolicy | null;
	}

	export enum AudioLanguageSelectionLanguageSelectionPolicy { LOOSE = 0, STRICT = 1 }


	/** Audio Pid Selection */
	export interface AudioPidSelection {

		/**
		 * Placeholder documentation for __integerMin0Max8191
		 * Required
		 * Minimum: 0
		 * Maximum: 8191
		 */
		Pid: number;
	}


	/** Audio Track Selection */
	export interface AudioTrackSelection {

		/**
		 * Placeholder documentation for __listOfAudioTrack
		 * Required
		 */
		Tracks: Array<AudioTrack>;
	}


	/** Audio Track */
	export interface AudioTrack {

		/**
		 * Placeholder documentation for __integerMin1
		 * Required
		 * Minimum: 1
		 */
		Track: number;
	}


	/** Output groups for this Live Event. Output groups contain information about where streams should be distributed. */
	export interface CaptionSelector {

		/** Placeholder documentation for __string */
		LanguageCode?: string | null;

		/**
		 * Placeholder documentation for __stringMin1
		 * Required
		 * Min length: 1
		 */
		Name: string;

		/** Caption Selector Settings */
		SelectorSettings?: CaptionSelectorSettings | null;
	}


	/** Caption Selector Settings */
	export interface CaptionSelectorSettings {

		/** Arib Source Settings */
		AribSourceSettings?: AribSourceSettings | null;

		/** Dvb Sub Source Settings */
		DvbSubSourceSettings?: DvbSubSourceSettings | null;

		/** Embedded Source Settings */
		EmbeddedSourceSettings?: EmbeddedSourceSettings | null;

		/** Scte20 Source Settings */
		Scte20SourceSettings?: Scte20SourceSettings | null;

		/** Scte27 Source Settings */
		Scte27SourceSettings?: Scte27SourceSettings | null;

		/** Teletext Source Settings */
		TeletextSourceSettings?: TeletextSourceSettings | null;
	}


	/** Arib Source Settings */
	export interface AribSourceSettings {
	}


	/** Dvb Sub Source Settings */
	export interface DvbSubSourceSettings {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Pid?: number | null;
	}


	/** Embedded Source Settings */
	export interface EmbeddedSourceSettings {

		/** Embedded Convert608 To708 */
		Convert608To708?: EmbeddedSourceSettingsConvert608To708 | null;

		/** Embedded Scte20 Detection */
		Scte20Detection?: EmbeddedSourceSettingsScte20Detection | null;

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Minimum: 1
		 * Maximum: 4
		 */
		Source608ChannelNumber?: number | null;

		/**
		 * Placeholder documentation for __integerMin1Max5
		 * Minimum: 1
		 * Maximum: 5
		 */
		Source608TrackNumber?: number | null;
	}

	export enum EmbeddedSourceSettingsConvert608To708 { DISABLED = 0, UPCONVERT = 1 }

	export enum EmbeddedSourceSettingsScte20Detection { AUTO = 0, OFF = 1 }


	/** Scte20 Source Settings */
	export interface Scte20SourceSettings {

		/** Scte20 Convert608 To708 */
		Convert608To708?: EmbeddedSourceSettingsConvert608To708 | null;

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Minimum: 1
		 * Maximum: 4
		 */
		Source608ChannelNumber?: number | null;
	}


	/** Scte27 Source Settings */
	export interface Scte27SourceSettings {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Pid?: number | null;
	}


	/** Teletext Source Settings */
	export interface TeletextSourceSettings {

		/** Placeholder documentation for __string */
		PageNumber?: string | null;
	}

	export enum InputSettingsInputFilter { AUTO = 0, DISABLED = 1, FORCED = 2 }


	/** Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection. */
	export interface NetworkInputSettings {

		/** Hls Input Settings */
		HlsInputSettings?: HlsInputSettings | null;

		/** Network Input Server Validation */
		ServerValidation?: NetworkInputSettingsServerValidation | null;
	}


	/** Hls Input Settings */
	export interface HlsInputSettings {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Bandwidth?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		BufferSegments?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Retries?: number | null;

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RetryInterval?: number | null;
	}

	export enum NetworkInputSettingsServerValidation { CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME = 0, CHECK_CRYPTOGRAPHY_ONLY = 1 }

	export enum InputSettingsSmpte2038DataPreference { IGNORE = 0, PREFER = 1 }

	export enum InputSettingsSourceEndBehavior { CONTINUE = 0, LOOP = 1 }


	/** Specifies a particular video stream within an input source. An input may have only a single video selector. */
	export interface VideoSelector {

		/** Video Selector Color Space */
		ColorSpace?: VideoSelectorColorSpace | null;

		/** Video Selector Color Space Usage */
		ColorSpaceUsage?: VideoSelectorColorSpaceUsage | null;

		/** Video Selector Settings */
		SelectorSettings?: VideoSelectorSettings | null;
	}

	export enum VideoSelectorColorSpace { FOLLOW = 0, REC_601 = 1, REC_709 = 2 }

	export enum VideoSelectorColorSpaceUsage { FALLBACK = 0, FORCE = 1 }


	/** Video Selector Settings */
	export interface VideoSelectorSettings {

		/** Video Selector Pid */
		VideoSelectorPid?: VideoSelectorPid | null;

		/** Video Selector Program Id */
		VideoSelectorProgramId?: VideoSelectorProgramId | null;
	}


	/** Video Selector Pid */
	export interface VideoSelectorPid {

		/**
		 * Placeholder documentation for __integerMin0Max8191
		 * Minimum: 0
		 * Maximum: 8191
		 */
		Pid?: number | null;
	}


	/** Video Selector Program Id */
	export interface VideoSelectorProgramId {

		/**
		 * Placeholder documentation for __integerMin0Max65536
		 * Minimum: 0
		 * Maximum: 65536
		 */
		ProgramId?: number | null;
	}


	/** Placeholder documentation for InputSpecification */
	export interface InputSpecification {

		/** codec in increasing order of complexity */
		Codec?: InputSpecificationCodec | null;

		/** Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
		MaximumBitrate?: InputSpecificationMaximumBitrate | null;

		/**
		 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution?: InputSpecificationResolution | null;
	}

	export enum InputSpecificationCodec { MPEG2 = 0, AVC = 1, HEVC = 2 }

	export enum InputSpecificationMaximumBitrate { MAX_10_MBPS = 0, MAX_20_MBPS = 1, MAX_50_MBPS = 2 }

	export enum InputSpecificationResolution { SD = 0, HD = 1, UHD = 2 }

	export enum ChannelLogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }


	/** Runtime details of a pipeline when a channel is running. */
	export interface PipelineDetail {

		/** Placeholder documentation for __string */
		ActiveInputAttachmentName?: string | null;

		/** Placeholder documentation for __string */
		ActiveInputSwitchActionName?: string | null;

		/** Placeholder documentation for __string */
		PipelineId?: string | null;
	}

	export enum ChannelState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/** Placeholder documentation for Tags */
	export interface Tags {
	}


	/** codec in increasing order of complexity */
	export enum InputCodec { MPEG2 = 0, AVC = 1, HEVC = 2 }


	/** Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
	export enum InputMaximumBitrate { MAX_10_MBPS = 0, MAX_20_MBPS = 1, MAX_50_MBPS = 2 }


	/**
	 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
	 */
	export enum InputResolution { SD = 0, HD = 1, UHD = 2 }

	export interface ConflictException {
	}


	/** Placeholder documentation for CreateInputResponse */
	export interface CreateInputResponse {

		/** Placeholder documentation for Input */
		Input?: Input | null;
	}


	/** Placeholder documentation for Input */
	export interface Input {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AttachedChannels?: Array<string> | null;

		/** Placeholder documentation for __listOfInputDestination */
		Destinations?: Array<InputDestination> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** A standard input has two sources and a single pipeline input only has one. */
		InputClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings> | null;

		/**
		 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
		 * change the source url of the input dynamically using an input switch action. However, the only input type
		 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
		 */
		InputSourceType?: InputInputSourceType | null;

		/** Placeholder documentation for __listOfMediaConnectFlow */
		MediaConnectFlows?: Array<MediaConnectFlow> | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for __listOf__string */
		SecurityGroups?: Array<string> | null;

		/** Placeholder documentation for __listOfInputSource */
		Sources?: Array<InputSource> | null;

		/** Placeholder documentation for InputState */
		State?: InputState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for InputType */
		Type?: InputType | null;
	}


	/** The settings for a PUSH type input. */
	export interface InputDestination {

		/** Placeholder documentation for __string */
		Ip?: string | null;

		/** Placeholder documentation for __string */
		Port?: string | null;

		/** Placeholder documentation for __string */
		Url?: string | null;

		/** The properties for a VPC type input destination. */
		Vpc?: InputDestinationVpc | null;
	}


	/** The properties for a VPC type input destination. */
	export interface InputDestinationVpc {

		/** Placeholder documentation for __string */
		AvailabilityZone?: string | null;

		/** Placeholder documentation for __string */
		NetworkInterfaceId?: string | null;
	}


	/** Settings for an input device. */
	export interface InputDeviceSettings {

		/** Placeholder documentation for __string */
		Id?: string | null;
	}

	export enum InputInputSourceType { STATIC = 0, DYNAMIC = 1 }


	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlow {

		/** Placeholder documentation for __string */
		FlowArn?: string | null;
	}


	/** The settings for a PULL type input. */
	export interface InputSource {

		/** Placeholder documentation for __string */
		PasswordParam?: string | null;

		/** Placeholder documentation for __string */
		Url?: string | null;

		/** Placeholder documentation for __string */
		Username?: string | null;
	}

	export enum InputState { CREATING = 0, DETACHED = 1, ATTACHED = 2, DELETING = 3, DELETED = 4 }

	export enum InputType { UDP_PUSH = 0, RTP_PUSH = 1, RTMP_PUSH = 2, RTMP_PULL = 3, URL_PULL = 4, MP4_FILE = 5, MEDIACONNECT = 6, INPUT_DEVICE = 7 }


	/** Endpoint settings for a PUSH type input. */
	export interface InputDestinationRequest {

		/** Placeholder documentation for __string */
		StreamName?: string | null;
	}


	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlowRequest {

		/** Placeholder documentation for __string */
		FlowArn?: string | null;
	}


	/** Settings for for a PULL type input. */
	export interface InputSourceRequest {

		/** Placeholder documentation for __string */
		PasswordParam?: string | null;

		/** Placeholder documentation for __string */
		Url?: string | null;

		/** Placeholder documentation for __string */
		Username?: string | null;
	}


	/** Placeholder documentation for CreateInputSecurityGroupResponse */
	export interface CreateInputSecurityGroupResponse {

		/** An Input Security Group */
		SecurityGroup?: InputSecurityGroup | null;
	}


	/** An Input Security Group */
	export interface InputSecurityGroup {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOf__string */
		Inputs?: Array<string> | null;

		/** Placeholder documentation for InputSecurityGroupState */
		State?: InputSecurityGroupState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for __listOfInputWhitelistRule */
		WhitelistRules?: Array<InputWhitelistRule> | null;
	}

	export enum InputSecurityGroupState { IDLE = 0, IN_USE = 1, UPDATING = 2, DELETED = 3 }


	/** Whitelist rule */
	export interface InputWhitelistRule {

		/** Placeholder documentation for __string */
		Cidr?: string | null;
	}


	/** An IPv4 CIDR to whitelist. */
	export interface InputWhitelistRuleCidr {

		/** Placeholder documentation for __string */
		Cidr?: string | null;
	}


	/** Placeholder documentation for CreateMultiplexResponse */
	export interface CreateMultiplexResponse {

		/** The multiplex object. */
		Multiplex?: Multiplex | null;
	}


	/** The multiplex object. */
	export interface Multiplex {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string> | null;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Multiplex output destination settings */
	export interface MultiplexOutputDestination {

		/** Multiplex MediaConnect output destination settings. */
		MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings | null;
	}


	/** Multiplex MediaConnect output destination settings. */
	export interface MultiplexMediaConnectOutputDestinationSettings {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		EntitlementArn?: string | null;
	}


	/** Contains configuration for a Multiplex event */
	export interface MultiplexSettings {

		/**
		 * Placeholder documentation for __integerMin1000Max3000
		 * Minimum: 1000
		 * Maximum: 3000
		 */
		MaximumVideoBufferDelayMilliseconds?: number | null;

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Required
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate: number;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId: number;

		/**
		 * Placeholder documentation for __integerMin0Max100000000
		 * Minimum: 0
		 * Maximum: 100000000
		 */
		TransportStreamReservedBitrate?: number | null;
	}

	export enum MultiplexState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/** Placeholder documentation for CreateMultiplexProgramResponse */
	export interface CreateMultiplexProgramResponse {

		/** The multiplex program object. */
		MultiplexProgram?: MultiplexProgram | null;
	}


	/** The multiplex program object. */
	export interface MultiplexProgram {

		/** Placeholder documentation for __string */
		ChannelId?: string | null;

		/** Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings | null;

		/** Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap | null;

		/** Placeholder documentation for __string */
		ProgramName?: string | null;
	}


	/** Multiplex Program settings configuration. */
	export interface MultiplexProgramSettings {

		/**
		 * Indicates which pipeline is preferred by the multiplex for program ingest.
		 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
		 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
		 * it will not switch back to the other pipeline based on it recovering to a healthy state,
		 * it will only switch if the active pipeline becomes unhealthy.
		 */
		PreferredChannelPipeline?: MultiplexProgramSettingsPreferredChannelPipeline | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNumber: number;

		/** Transport stream service descriptor configuration for the Multiplex program. */
		ServiceDescriptor?: MultiplexProgramServiceDescriptor | null;

		/** The video configuration for each program in a multiplex. */
		VideoSettings?: MultiplexVideoSettings | null;
	}

	export enum MultiplexProgramSettingsPreferredChannelPipeline { CURRENTLY_ACTIVE = 0, PIPELINE_0 = 1, PIPELINE_1 = 2 }


	/** Transport stream service descriptor configuration for the Multiplex program. */
	export interface MultiplexProgramServiceDescriptor {

		/**
		 * Placeholder documentation for __stringMax256
		 * Required
		 * Max length: 256
		 */
		ProviderName: string;

		/**
		 * Placeholder documentation for __stringMax256
		 * Required
		 * Max length: 256
		 */
		ServiceName: string;
	}


	/** The video configuration for each program in a multiplex. */
	export interface MultiplexVideoSettings {

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		ConstantBitrate?: number | null;

		/** Statmux rate control settings */
		StatmuxSettings?: MultiplexStatmuxVideoSettings | null;
	}


	/** Statmux rate control settings */
	export interface MultiplexStatmuxVideoSettings {

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		MaximumBitrate?: number | null;

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		MinimumBitrate?: number | null;
	}


	/** Packet identifiers map for a given Multiplex program. */
	export interface MultiplexProgramPacketIdentifiersMap {

		/** Placeholder documentation for __listOf__integer */
		AudioPids?: Array<number> | null;

		/** Placeholder documentation for __listOf__integer */
		DvbSubPids?: Array<number> | null;

		/** Placeholder documentation for __integer */
		DvbTeletextPid?: number | null;

		/** Placeholder documentation for __integer */
		EtvPlatformPid?: number | null;

		/** Placeholder documentation for __integer */
		EtvSignalPid?: number | null;

		/** Placeholder documentation for __listOf__integer */
		KlvDataPids?: Array<number> | null;

		/** Placeholder documentation for __integer */
		PcrPid?: number | null;

		/** Placeholder documentation for __integer */
		PmtPid?: number | null;

		/** Placeholder documentation for __integer */
		PrivateMetadataPid?: number | null;

		/** Placeholder documentation for __listOf__integer */
		Scte27Pids?: Array<number> | null;

		/** Placeholder documentation for __integer */
		Scte35Pid?: number | null;

		/** Placeholder documentation for __integer */
		TimedMetadataPid?: number | null;

		/** Placeholder documentation for __integer */
		VideoPid?: number | null;
	}


	/**
	 * Indicates which pipeline is preferred by the multiplex for program ingest.
	 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
	 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
	 * it will not switch back to the other pipeline based on it recovering to a healthy state,
	 * it will only switch if the active pipeline becomes unhealthy.
	 */
	export enum PreferredChannelPipeline { CURRENTLY_ACTIVE = 0, PIPELINE_0 = 1, PIPELINE_1 = 2 }


	/** Placeholder documentation for DeleteChannelResponse */
	export interface DeleteChannelResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint> | null;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification | null;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail> | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for DeleteInputResponse */
	export interface DeleteInputResponse {
	}


	/** Placeholder documentation for DeleteInputSecurityGroupResponse */
	export interface DeleteInputSecurityGroupResponse {
	}


	/** Placeholder documentation for DeleteMultiplexResponse */
	export interface DeleteMultiplexResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string> | null;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for DeleteMultiplexProgramResponse */
	export interface DeleteMultiplexProgramResponse {

		/** Placeholder documentation for __string */
		ChannelId?: string | null;

		/** Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings | null;

		/** Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap | null;

		/** Placeholder documentation for __string */
		ProgramName?: string | null;
	}


	/** Placeholder documentation for DeleteReservationResponse */
	export interface DeleteReservationResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __integer */
		Count?: number | null;

		/** Placeholder documentation for __string */
		CurrencyCode?: string | null;

		/** Placeholder documentation for __integer */
		Duration?: number | null;

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits?: DeleteReservationResponseDurationUnits | null;

		/** Placeholder documentation for __string */
		End?: string | null;

		/** Placeholder documentation for __double */
		FixedPrice?: number | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		OfferingDescription?: string | null;

		/** Placeholder documentation for __string */
		OfferingId?: string | null;

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: DeleteReservationResponseOfferingType | null;

		/** Placeholder documentation for __string */
		Region?: string | null;

		/** Placeholder documentation for __string */
		ReservationId?: string | null;

		/** Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification | null;

		/** Placeholder documentation for __string */
		Start?: string | null;

		/** Current reservation state */
		State?: DeleteReservationResponseState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}

	export enum DeleteReservationResponseDurationUnits { MONTHS = 0 }

	export enum DeleteReservationResponseOfferingType { NO_UPFRONT = 0 }


	/** Resource configuration (codec, resolution, bitrate, ...) */
	export interface ReservationResourceSpecification {

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO' */
		Codec?: ReservationResourceSpecificationCodec | null;

		/** Maximum bitrate in megabits per second */
		MaximumBitrate?: InputSpecificationMaximumBitrate | null;

		/** Maximum framerate in frames per second (Outputs only) */
		MaximumFramerate?: ReservationResourceSpecificationMaximumFramerate | null;

		/**
		 * Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution?: ReservationResourceSpecificationResolution | null;

		/** Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL' */
		ResourceType?: ReservationResourceSpecificationResourceType | null;

		/** Special features, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION' */
		SpecialFeature?: ReservationResourceSpecificationSpecialFeature | null;

		/** Video quality, e.g. 'STANDARD' (Outputs only) */
		VideoQuality?: ReservationResourceSpecificationVideoQuality | null;
	}

	export enum ReservationResourceSpecificationCodec { MPEG2 = 0, AVC = 1, HEVC = 2, AUDIO = 3 }

	export enum ReservationResourceSpecificationMaximumFramerate { MAX_30_FPS = 0, MAX_60_FPS = 1 }

	export enum ReservationResourceSpecificationResolution { SD = 0, HD = 1, FHD = 2, UHD = 3 }

	export enum ReservationResourceSpecificationResourceType { INPUT = 0, OUTPUT = 1, MULTIPLEX = 2, CHANNEL = 3 }

	export enum ReservationResourceSpecificationSpecialFeature { ADVANCED_AUDIO = 0, AUDIO_NORMALIZATION = 1 }

	export enum ReservationResourceSpecificationVideoQuality { STANDARD = 0, ENHANCED = 1, PREMIUM = 2 }

	export enum DeleteReservationResponseState { ACTIVE = 0, EXPIRED = 1, CANCELED = 2, DELETED = 3 }


	/** Placeholder documentation for DeleteScheduleResponse */
	export interface DeleteScheduleResponse {
	}


	/** Placeholder documentation for DescribeChannelResponse */
	export interface DescribeChannelResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint> | null;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification | null;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail> | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for DescribeInputResponse */
	export interface DescribeInputResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AttachedChannels?: Array<string> | null;

		/** Placeholder documentation for __listOfInputDestination */
		Destinations?: Array<InputDestination> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** A standard input has two sources and a single pipeline input only has one. */
		InputClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings> | null;

		/**
		 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
		 * change the source url of the input dynamically using an input switch action. However, the only input type
		 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
		 */
		InputSourceType?: InputInputSourceType | null;

		/** Placeholder documentation for __listOfMediaConnectFlow */
		MediaConnectFlows?: Array<MediaConnectFlow> | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for __listOf__string */
		SecurityGroups?: Array<string> | null;

		/** Placeholder documentation for __listOfInputSource */
		Sources?: Array<InputSource> | null;

		/** Placeholder documentation for InputState */
		State?: InputState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for InputType */
		Type?: InputType | null;
	}


	/** Placeholder documentation for DescribeInputDeviceResponse */
	export interface DescribeInputDeviceResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** The state of the connection between the input device and AWS. */
		ConnectionState?: DescribeInputDeviceResponseConnectionState | null;

		/** The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState?: DescribeInputDeviceResponseDeviceSettingsSyncState | null;

		/** Settings that describe the active source from the input device, and the video characteristics of that source. */
		HdDeviceSettings?: InputDeviceHdSettings | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __string */
		MacAddress?: string | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings | null;

		/** Placeholder documentation for __string */
		SerialNumber?: string | null;

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: DescribeInputDeviceResponseType | null;
	}

	export enum DescribeInputDeviceResponseConnectionState { DISCONNECTED = 0, CONNECTED = 1 }

	export enum DescribeInputDeviceResponseDeviceSettingsSyncState { SYNCED = 0, SYNCING = 1 }


	/** Settings that describe the active source from the input device, and the video characteristics of that source. */
	export interface InputDeviceHdSettings {

		/** The source at the input device that is currently active. */
		ActiveInput?: InputDeviceHdSettingsActiveInput | null;

		/** The source to activate (use) from the input device. */
		ConfiguredInput?: InputDeviceHdSettingsConfiguredInput | null;

		/** The state of the input device. */
		DeviceState?: InputDeviceHdSettingsDeviceState | null;

		/** Placeholder documentation for __double */
		Framerate?: number | null;

		/** Placeholder documentation for __integer */
		Height?: number | null;

		/** Placeholder documentation for __integer */
		MaxBitrate?: number | null;

		/** The scan type of the video source. */
		ScanType?: H264SettingsScanType | null;

		/** Placeholder documentation for __integer */
		Width?: number | null;
	}

	export enum InputDeviceHdSettingsActiveInput { HDMI = 0, SDI = 1 }

	export enum InputDeviceHdSettingsConfiguredInput { AUTO = 0, HDMI = 1, SDI = 2 }

	export enum InputDeviceHdSettingsDeviceState { IDLE = 0, STREAMING = 1 }


	/** The network settings for the input device. */
	export interface InputDeviceNetworkSettings {

		/** Placeholder documentation for __listOf__string */
		DnsAddresses?: Array<string> | null;

		/** Placeholder documentation for __string */
		Gateway?: string | null;

		/** Placeholder documentation for __string */
		IpAddress?: string | null;

		/** Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address. */
		IpScheme?: InputDeviceNetworkSettingsIpScheme | null;

		/** Placeholder documentation for __string */
		SubnetMask?: string | null;
	}

	export enum InputDeviceNetworkSettingsIpScheme { STATIC = 0, DHCP = 1 }

	export enum DescribeInputDeviceResponseType { HD = 0 }


	/** Placeholder documentation for DescribeInputSecurityGroupResponse */
	export interface DescribeInputSecurityGroupResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOf__string */
		Inputs?: Array<string> | null;

		/** Placeholder documentation for InputSecurityGroupState */
		State?: InputSecurityGroupState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for __listOfInputWhitelistRule */
		WhitelistRules?: Array<InputWhitelistRule> | null;
	}


	/** Placeholder documentation for DescribeMultiplexResponse */
	export interface DescribeMultiplexResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string> | null;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for DescribeMultiplexProgramResponse */
	export interface DescribeMultiplexProgramResponse {

		/** Placeholder documentation for __string */
		ChannelId?: string | null;

		/** Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings | null;

		/** Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap | null;

		/** Placeholder documentation for __string */
		ProgramName?: string | null;
	}


	/** Placeholder documentation for DescribeOfferingResponse */
	export interface DescribeOfferingResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __string */
		CurrencyCode?: string | null;

		/** Placeholder documentation for __integer */
		Duration?: number | null;

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits?: DeleteReservationResponseDurationUnits | null;

		/** Placeholder documentation for __double */
		FixedPrice?: number | null;

		/** Placeholder documentation for __string */
		OfferingDescription?: string | null;

		/** Placeholder documentation for __string */
		OfferingId?: string | null;

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: DeleteReservationResponseOfferingType | null;

		/** Placeholder documentation for __string */
		Region?: string | null;

		/** Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification | null;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}


	/** Placeholder documentation for DescribeReservationResponse */
	export interface DescribeReservationResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __integer */
		Count?: number | null;

		/** Placeholder documentation for __string */
		CurrencyCode?: string | null;

		/** Placeholder documentation for __integer */
		Duration?: number | null;

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits?: DeleteReservationResponseDurationUnits | null;

		/** Placeholder documentation for __string */
		End?: string | null;

		/** Placeholder documentation for __double */
		FixedPrice?: number | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		OfferingDescription?: string | null;

		/** Placeholder documentation for __string */
		OfferingId?: string | null;

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: DeleteReservationResponseOfferingType | null;

		/** Placeholder documentation for __string */
		Region?: string | null;

		/** Placeholder documentation for __string */
		ReservationId?: string | null;

		/** Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification | null;

		/** Placeholder documentation for __string */
		Start?: string | null;

		/** Current reservation state */
		State?: DeleteReservationResponseState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}


	/** Placeholder documentation for DescribeScheduleResponse */
	export interface DescribeScheduleResponse {

		/** Placeholder documentation for __string */
		NextToken?: string | null;

		/** Placeholder documentation for __listOfScheduleAction */
		ScheduleActions?: Array<ScheduleAction> | null;
	}


	/** Placeholder documentation for ListChannelsResponse */
	export interface ListChannelsResponse {

		/** Placeholder documentation for __listOfChannelSummary */
		Channels?: Array<ChannelSummary> | null;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}


	/** Placeholder documentation for ChannelSummary */
	export interface ChannelSummary {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification | null;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for ListInputDevicesResponse */
	export interface ListInputDevicesResponse {

		/** Placeholder documentation for __listOfInputDeviceSummary */
		InputDevices?: Array<InputDeviceSummary> | null;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}


	/** Details of the input device. */
	export interface InputDeviceSummary {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** The state of the connection between the input device and AWS. */
		ConnectionState?: DescribeInputDeviceResponseConnectionState | null;

		/** The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState?: DescribeInputDeviceResponseDeviceSettingsSyncState | null;

		/** Settings that describe the active source from the input device, and the video characteristics of that source. */
		HdDeviceSettings?: InputDeviceHdSettings | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __string */
		MacAddress?: string | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings | null;

		/** Placeholder documentation for __string */
		SerialNumber?: string | null;

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: DescribeInputDeviceResponseType | null;
	}


	/** Placeholder documentation for ListInputSecurityGroupsResponse */
	export interface ListInputSecurityGroupsResponse {

		/** Placeholder documentation for __listOfInputSecurityGroup */
		InputSecurityGroups?: Array<InputSecurityGroup> | null;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}


	/** Placeholder documentation for ListInputsResponse */
	export interface ListInputsResponse {

		/** Placeholder documentation for __listOfInput */
		Inputs?: Array<Input> | null;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}


	/** Placeholder documentation for ListMultiplexProgramsResponse */
	export interface ListMultiplexProgramsResponse {

		/** Placeholder documentation for __listOfMultiplexProgramSummary */
		MultiplexPrograms?: Array<MultiplexProgramSummary> | null;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}


	/** Placeholder documentation for MultiplexProgramSummary */
	export interface MultiplexProgramSummary {

		/** Placeholder documentation for __string */
		ChannelId?: string | null;

		/** Placeholder documentation for __string */
		ProgramName?: string | null;
	}


	/** Placeholder documentation for ListMultiplexesResponse */
	export interface ListMultiplexesResponse {

		/** Placeholder documentation for __listOfMultiplexSummary */
		Multiplexes?: Array<MultiplexSummary> | null;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}


	/** Placeholder documentation for MultiplexSummary */
	export interface MultiplexSummary {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains summary configuration for a Multiplex event. */
		MultiplexSettings?: MultiplexSettingsSummary | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Contains summary configuration for a Multiplex event. */
	export interface MultiplexSettingsSummary {

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate?: number | null;
	}


	/** Placeholder documentation for ListOfferingsResponse */
	export interface ListOfferingsResponse {

		/** Placeholder documentation for __string */
		NextToken?: string | null;

		/** Placeholder documentation for __listOfOffering */
		Offerings?: Array<Offering> | null;
	}


	/** Reserved resources available for purchase */
	export interface Offering {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __string */
		CurrencyCode?: string | null;

		/** Placeholder documentation for __integer */
		Duration?: number | null;

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits?: DeleteReservationResponseDurationUnits | null;

		/** Placeholder documentation for __double */
		FixedPrice?: number | null;

		/** Placeholder documentation for __string */
		OfferingDescription?: string | null;

		/** Placeholder documentation for __string */
		OfferingId?: string | null;

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: DeleteReservationResponseOfferingType | null;

		/** Placeholder documentation for __string */
		Region?: string | null;

		/** Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification | null;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}


	/** Placeholder documentation for ListReservationsResponse */
	export interface ListReservationsResponse {

		/** Placeholder documentation for __string */
		NextToken?: string | null;

		/** Placeholder documentation for __listOfReservation */
		Reservations?: Array<Reservation> | null;
	}


	/** Reserved resources available to use */
	export interface Reservation {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __integer */
		Count?: number | null;

		/** Placeholder documentation for __string */
		CurrencyCode?: string | null;

		/** Placeholder documentation for __integer */
		Duration?: number | null;

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits?: DeleteReservationResponseDurationUnits | null;

		/** Placeholder documentation for __string */
		End?: string | null;

		/** Placeholder documentation for __double */
		FixedPrice?: number | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		OfferingDescription?: string | null;

		/** Placeholder documentation for __string */
		OfferingId?: string | null;

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType?: DeleteReservationResponseOfferingType | null;

		/** Placeholder documentation for __string */
		Region?: string | null;

		/** Placeholder documentation for __string */
		ReservationId?: string | null;

		/** Resource configuration (codec, resolution, bitrate, ...) */
		ResourceSpecification?: ReservationResourceSpecification | null;

		/** Placeholder documentation for __string */
		Start?: string | null;

		/** Current reservation state */
		State?: DeleteReservationResponseState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}


	/** Placeholder documentation for ListTagsForResourceResponse */
	export interface ListTagsForResourceResponse {

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for PurchaseOfferingResponse */
	export interface PurchaseOfferingResponse {

		/** Reserved resources available to use */
		Reservation?: Reservation | null;
	}


	/** Placeholder documentation for StartChannelResponse */
	export interface StartChannelResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint> | null;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification | null;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail> | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for StartMultiplexResponse */
	export interface StartMultiplexResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string> | null;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for StopChannelResponse */
	export interface StopChannelResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint> | null;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification | null;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail> | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for StopMultiplexResponse */
	export interface StopMultiplexResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string> | null;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination> | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for UpdateChannelResponse */
	export interface UpdateChannelResponse {

		/** Placeholder documentation for Channel */
		Channel?: Channel | null;
	}


	/** Placeholder documentation for UpdateChannelClassResponse */
	export interface UpdateChannelClassResponse {

		/** Placeholder documentation for Channel */
		Channel?: Channel | null;
	}


	/** Placeholder documentation for UpdateInputResponse */
	export interface UpdateInputResponse {

		/** Placeholder documentation for Input */
		Input?: Input | null;
	}


	/** Settings for an input device. */
	export interface InputDeviceRequest {

		/** Placeholder documentation for __string */
		Id?: string | null;
	}


	/** Placeholder documentation for UpdateInputDeviceResponse */
	export interface UpdateInputDeviceResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** The state of the connection between the input device and AWS. */
		ConnectionState?: DescribeInputDeviceResponseConnectionState | null;

		/** The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState?: DescribeInputDeviceResponseDeviceSettingsSyncState | null;

		/** Settings that describe the active source from the input device, and the video characteristics of that source. */
		HdDeviceSettings?: InputDeviceHdSettings | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __string */
		MacAddress?: string | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings | null;

		/** Placeholder documentation for __string */
		SerialNumber?: string | null;

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: DescribeInputDeviceResponseType | null;
	}


	/** The source to activate (use) from the input device. */
	export enum InputDeviceConfiguredInput { AUTO = 0, HDMI = 1, SDI = 2 }


	/** Placeholder documentation for UpdateInputSecurityGroupResponse */
	export interface UpdateInputSecurityGroupResponse {

		/** An Input Security Group */
		SecurityGroup?: InputSecurityGroup | null;
	}


	/** Placeholder documentation for UpdateMultiplexResponse */
	export interface UpdateMultiplexResponse {

		/** The multiplex object. */
		Multiplex?: Multiplex | null;
	}


	/** Placeholder documentation for UpdateMultiplexProgramResponse */
	export interface UpdateMultiplexProgramResponse {

		/** The multiplex program object. */
		MultiplexProgram?: MultiplexProgram | null;
	}


	/** Placeholder documentation for UpdateReservationResponse */
	export interface UpdateReservationResponse {

		/** Reserved resources available to use */
		Reservation?: Reservation | null;
	}


	/** Aac Coding Mode */
	export enum AacCodingMode { AD_RECEIVER_MIX = 0, CODING_MODE_1_0 = 1, CODING_MODE_1_1 = 2, CODING_MODE_2_0 = 3, CODING_MODE_5_1 = 4 }


	/** Aac Input Type */
	export enum AacInputType { BROADCASTER_MIXED_AD = 0, NORMAL = 1 }


	/** Aac Profile */
	export enum AacProfile { HEV1 = 0, HEV2 = 1, LC = 2 }


	/** Aac Rate Control Mode */
	export enum AacRateControlMode { CBR = 0, VBR = 1 }


	/** Aac Raw Format */
	export enum AacRawFormat { LATM_LOAS = 0, NONE = 1 }


	/** Aac Spec */
	export enum AacSpec { MPEG2 = 0, MPEG4 = 1 }


	/** Aac Vbr Quality */
	export enum AacVbrQuality { HIGH = 0, LOW = 1, MEDIUM_HIGH = 2, MEDIUM_LOW = 3 }


	/** Ac3 Bitstream Mode */
	export enum Ac3BitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, DIALOGUE = 2, EMERGENCY = 3, HEARING_IMPAIRED = 4, MUSIC_AND_EFFECTS = 5, VISUALLY_IMPAIRED = 6, VOICE_OVER = 7 }


	/** Ac3 Coding Mode */
	export enum Ac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_1_1 = 1, CODING_MODE_2_0 = 2, CODING_MODE_3_2_LFE = 3 }


	/** Ac3 Drc Profile */
	export enum Ac3DrcProfile { FILM_STANDARD = 0, NONE = 1 }


	/** Ac3 Lfe Filter */
	export enum Ac3LfeFilter { DISABLED = 0, ENABLED = 1 }


	/** Ac3 Metadata Control */
	export enum Ac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Afd Signaling */
	export enum AfdSignaling { AUTO = 0, FIXED = 1, NONE = 2 }


	/** Audio Type */
	export enum AudioType { CLEAN_EFFECTS = 0, HEARING_IMPAIRED = 1, UNDEFINED = 2, VISUAL_IMPAIRED_COMMENTARY = 3 }


	/** Audio Description Language Code Control */
	export enum AudioDescriptionLanguageCodeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Audio Language Selection Policy */
	export enum AudioLanguageSelectionPolicy { LOOSE = 0, STRICT = 1 }


	/** Audio Normalization Algorithm */
	export enum AudioNormalizationAlgorithm { ITU_1770_1 = 0, ITU_1770_2 = 1 }


	/** Audio Normalization Algorithm Control */
	export enum AudioNormalizationAlgorithmControl { CORRECT_AUDIO = 0 }


	/** Audio Only Hls Segment Type */
	export enum AudioOnlyHlsSegmentType { AAC = 0, FMP4 = 1 }


	/** Audio Only Hls Track Type */
	export enum AudioOnlyHlsTrackType { ALTERNATE_AUDIO_AUTO_SELECT = 0, ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2, AUDIO_ONLY_VARIANT_STREAM = 3 }


	/** Authentication Scheme */
	export enum AuthenticationScheme { AKAMAI = 0, COMMON = 1 }


	/**
	 * Input preference when deciding which input to make active when a previously failed input has recovered.
	 * If \"EQUAL_INPUT_PREFERENCE\", then the active input will stay active as long as it is healthy.
	 * If \"PRIMARY_INPUT_PREFERRED\", then always switch back to the primary input when it is healthy.
	 */
	export enum InputPreference { EQUAL_INPUT_PREFERENCE = 0, PRIMARY_INPUT_PREFERRED = 1 }


	/** Avail Blanking State */
	export enum AvailBlankingState { DISABLED = 0, ENABLED = 1 }


	/** A list of schedule actions to create (in a request) or that have been created (in a response). */
	export interface BatchScheduleActionCreateRequest {

		/**
		 * Placeholder documentation for __listOfScheduleAction
		 * Required
		 */
		ScheduleActions: Array<ScheduleAction>;
	}


	/** A list of schedule actions to delete. */
	export interface BatchScheduleActionDeleteRequest {

		/**
		 * Placeholder documentation for __listOf__string
		 * Required
		 */
		ActionNames: Array<string>;
	}


	/** List of actions to create and list of actions to delete. */
	export interface BatchUpdateScheduleRequest {

		/** A list of schedule actions to create (in a request) or that have been created (in a response). */
		Creates?: BatchScheduleActionCreateRequest | null;

		/** A list of schedule actions to delete. */
		Deletes?: BatchScheduleActionDeleteRequest | null;
	}


	/** Blackout Slate Network End Blackout */
	export enum BlackoutSlateNetworkEndBlackout { DISABLED = 0, ENABLED = 1 }


	/** Blackout Slate State */
	export enum BlackoutSlateState { DISABLED = 0, ENABLED = 1 }


	/** Burn In Alignment */
	export enum BurnInAlignment { CENTERED = 0, LEFT = 1, SMART = 2 }


	/** Burn In Background Color */
	export enum BurnInBackgroundColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/** Burn In Font Color */
	export enum BurnInFontColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/** Burn In Outline Color */
	export enum BurnInOutlineColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/** Burn In Shadow Color */
	export enum BurnInShadowColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/** Burn In Teletext Grid Control */
	export enum BurnInTeletextGridControl { FIXED = 0, SCALED = 1 }


	/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
	export enum ChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }


	/** The log level the user wants for their channel. */
	export enum LogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }


	/** A request to create a channel */
	export interface CreateChannelRequest {

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification | null;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RequestId?: string | null;

		/** Placeholder documentation for __string */
		Reserved?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/**
	 * Settings for a private VPC Input.
	 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
	 * This property requires setting the roleArn property on Input creation.
	 * Not compatible with the inputSecurityGroups property.
	 */
	export interface InputVpcRequest {

		/** Placeholder documentation for __listOf__string */
		SecurityGroupIds?: Array<string> | null;

		/**
		 * Placeholder documentation for __listOf__string
		 * Required
		 */
		SubnetIds: Array<string>;
	}


	/** The name of the input */
	export interface CreateInputRequest {

		/** Placeholder documentation for __listOfInputDestinationRequest */
		Destinations?: Array<InputDestinationRequest> | null;

		/** Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings> | null;

		/** Placeholder documentation for __listOf__string */
		InputSecurityGroups?: Array<string> | null;

		/** Placeholder documentation for __listOfMediaConnectFlowRequest */
		MediaConnectFlows?: Array<MediaConnectFlowRequest> | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RequestId?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for __listOfInputSourceRequest */
		Sources?: Array<InputSourceRequest> | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for InputType */
		Type?: InputType | null;

		/**
		 * Settings for a private VPC Input.
		 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
		 * This property requires setting the roleArn property on Input creation.
		 * Not compatible with the inputSecurityGroups property.
		 */
		Vpc?: InputVpcRequest | null;
	}


	/** The IPv4 CIDRs to whitelist for this Input Security Group */
	export interface CreateInputSecurityGroupRequest {

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for __listOfInputWhitelistRuleCidr */
		WhitelistRules?: Array<InputWhitelistRuleCidr> | null;
	}


	/** A request to create a program in a multiplex. */
	export interface CreateMultiplexProgramRequest {

		/**
		 * Multiplex Program settings configuration.
		 * Required
		 */
		MultiplexProgramSettings: MultiplexProgramSettings;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		ProgramName: string;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		RequestId: string;
	}


	/** A request to create a multiplex. */
	export interface CreateMultiplexRequest {

		/**
		 * Placeholder documentation for __listOf__string
		 * Required
		 */
		AvailabilityZones: Array<string>;

		/**
		 * Contains configuration for a Multiplex event
		 * Required
		 */
		MultiplexSettings: MultiplexSettings;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Name: string;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		RequestId: string;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for CreateTagsRequest */
	export interface CreateTagsRequest {

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Placeholder documentation for DeleteChannelRequest */
	export interface DeleteChannelRequest {
	}


	/** Placeholder documentation for DeleteInputRequest */
	export interface DeleteInputRequest {
	}


	/** Placeholder documentation for DeleteInputSecurityGroupRequest */
	export interface DeleteInputSecurityGroupRequest {
	}


	/** Placeholder documentation for DeleteMultiplexProgramRequest */
	export interface DeleteMultiplexProgramRequest {
	}


	/** Placeholder documentation for DeleteMultiplexRequest */
	export interface DeleteMultiplexRequest {
	}


	/** Placeholder documentation for DeleteReservationRequest */
	export interface DeleteReservationRequest {
	}


	/** Units for duration, e.g. 'MONTHS' */
	export enum OfferingDurationUnits { MONTHS = 0 }


	/** Offering type, e.g. 'NO_UPFRONT' */
	export enum OfferingType { NO_UPFRONT = 0 }


	/** Current reservation state */
	export enum ReservationState { ACTIVE = 0, EXPIRED = 1, CANCELED = 2, DELETED = 3 }


	/** Placeholder documentation for DeleteScheduleRequest */
	export interface DeleteScheduleRequest {
	}


	/** Placeholder documentation for DeleteTagsRequest */
	export interface DeleteTagsRequest {
	}


	/** Placeholder documentation for DescribeChannelRequest */
	export interface DescribeChannelRequest {
	}


	/** Placeholder documentation for DescribeInputDeviceRequest */
	export interface DescribeInputDeviceRequest {
	}


	/** The state of the connection between the input device and AWS. */
	export enum InputDeviceConnectionState { DISCONNECTED = 0, CONNECTED = 1 }


	/** The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
	export enum DeviceSettingsSyncState { SYNCED = 0, SYNCING = 1 }


	/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
	export enum InputDeviceType { HD = 0 }


	/** Placeholder documentation for DescribeInputRequest */
	export interface DescribeInputRequest {
	}


	/** A standard input has two sources and a single pipeline input only has one. */
	export enum InputClass { STANDARD = 0, SINGLE_PIPELINE = 1 }


	/**
	 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
	 * change the source url of the input dynamically using an input switch action. However, the only input type
	 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
	 */
	export enum InputSourceType { STATIC = 0, DYNAMIC = 1 }


	/** Placeholder documentation for DescribeInputSecurityGroupRequest */
	export interface DescribeInputSecurityGroupRequest {
	}


	/** Placeholder documentation for DescribeMultiplexProgramRequest */
	export interface DescribeMultiplexProgramRequest {
	}


	/** Placeholder documentation for DescribeMultiplexRequest */
	export interface DescribeMultiplexRequest {
	}


	/** Placeholder documentation for DescribeOfferingRequest */
	export interface DescribeOfferingRequest {
	}


	/** Placeholder documentation for DescribeReservationRequest */
	export interface DescribeReservationRequest {
	}


	/** Placeholder documentation for DescribeScheduleRequest */
	export interface DescribeScheduleRequest {
	}


	/** Dvb Sdt Output Sdt */
	export enum DvbSdtOutputSdt { SDT_FOLLOW = 0, SDT_FOLLOW_IF_PRESENT = 1, SDT_MANUAL = 2, SDT_NONE = 3 }


	/** Dvb Sub Destination Alignment */
	export enum DvbSubDestinationAlignment { CENTERED = 0, LEFT = 1, SMART = 2 }


	/** Dvb Sub Destination Background Color */
	export enum DvbSubDestinationBackgroundColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/** Dvb Sub Destination Font Color */
	export enum DvbSubDestinationFontColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/** Dvb Sub Destination Outline Color */
	export enum DvbSubDestinationOutlineColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/** Dvb Sub Destination Shadow Color */
	export enum DvbSubDestinationShadowColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/** Dvb Sub Destination Teletext Grid Control */
	export enum DvbSubDestinationTeletextGridControl { FIXED = 0, SCALED = 1 }


	/** Eac3 Attenuation Control */
	export enum Eac3AttenuationControl { ATTENUATE_3_DB = 0, NONE = 1 }


	/** Eac3 Bitstream Mode */
	export enum Eac3BitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, EMERGENCY = 2, HEARING_IMPAIRED = 3, VISUALLY_IMPAIRED = 4 }


	/** Eac3 Coding Mode */
	export enum Eac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_3_2 = 2 }


	/** Eac3 Dc Filter */
	export enum Eac3DcFilter { DISABLED = 0, ENABLED = 1 }


	/** Eac3 Drc Line */
	export enum Eac3DrcLine { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }


	/** Eac3 Drc Rf */
	export enum Eac3DrcRf { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }


	/** Eac3 Lfe Control */
	export enum Eac3LfeControl { LFE = 0, NO_LFE = 1 }


	/** Eac3 Lfe Filter */
	export enum Eac3LfeFilter { DISABLED = 0, ENABLED = 1 }


	/** Eac3 Metadata Control */
	export enum Eac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Eac3 Passthrough Control */
	export enum Eac3PassthroughControl { NO_PASSTHROUGH = 0, WHEN_POSSIBLE = 1 }


	/** Eac3 Phase Control */
	export enum Eac3PhaseControl { NO_SHIFT = 0, SHIFT_90_DEGREES = 1 }


	/** Eac3 Stereo Downmix */
	export enum Eac3StereoDownmix { DPL2 = 0, LO_RO = 1, LT_RT = 2, NOT_INDICATED = 3 }


	/** Eac3 Surround Ex Mode */
	export enum Eac3SurroundExMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }


	/** Eac3 Surround Mode */
	export enum Eac3SurroundMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }


	/** Embedded Convert608 To708 */
	export enum EmbeddedConvert608To708 { DISABLED = 0, UPCONVERT = 1 }


	/** Embedded Scte20 Detection */
	export enum EmbeddedScte20Detection { AUTO = 0, OFF = 1 }


	/** Fec Output Include Fec */
	export enum FecOutputIncludeFec { COLUMN = 0, COLUMN_AND_ROW = 1 }


	/** Fixed Afd */
	export enum FixedAfd { AFD_0000 = 0, AFD_0010 = 1, AFD_0011 = 2, AFD_0100 = 3, AFD_1000 = 4, AFD_1001 = 5, AFD_1010 = 6, AFD_1011 = 7, AFD_1101 = 8, AFD_1110 = 9, AFD_1111 = 10 }


	/** Fmp4 Nielsen Id3 Behavior */
	export enum Fmp4NielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** Fmp4 Timed Metadata Behavior */
	export enum Fmp4TimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** Follow reference point. */
	export enum FollowPoint { END = 0, START = 1 }


	/** Frame Capture Interval Unit */
	export enum FrameCaptureIntervalUnit { MILLISECONDS = 0, SECONDS = 1 }


	/** Global Configuration Low Framerate Inputs */
	export enum GlobalConfigurationLowFramerateInputs { DISABLED = 0, ENABLED = 1 }


	/** H264 Adaptive Quantization */
	export enum H264AdaptiveQuantization { HIGH = 0, HIGHER = 1, LOW = 2, MAX = 3, MEDIUM = 4, OFF = 5 }


	/** H264 Color Metadata */
	export enum H264ColorMetadata { IGNORE = 0, INSERT = 1 }


	/** H264 Entropy Encoding */
	export enum H264EntropyEncoding { CABAC = 0, CAVLC = 1 }


	/** H264 Flicker Aq */
	export enum H264FlickerAq { DISABLED = 0, ENABLED = 1 }


	/** H264 Force Field Pictures */
	export enum H264ForceFieldPictures { DISABLED = 0, ENABLED = 1 }


	/** H264 Framerate Control */
	export enum H264FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** H264 Gop BReference */
	export enum H264GopBReference { DISABLED = 0, ENABLED = 1 }


	/** H264 Gop Size Units */
	export enum H264GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/** H264 Level */
	export enum H264Level { H264_LEVEL_1 = 0, H264_LEVEL_1_1 = 1, H264_LEVEL_1_2 = 2, H264_LEVEL_1_3 = 3, H264_LEVEL_2 = 4, H264_LEVEL_2_1 = 5, H264_LEVEL_2_2 = 6, H264_LEVEL_3 = 7, H264_LEVEL_3_1 = 8, H264_LEVEL_3_2 = 9, H264_LEVEL_4 = 10, H264_LEVEL_4_1 = 11, H264_LEVEL_4_2 = 12, H264_LEVEL_5 = 13, H264_LEVEL_5_1 = 14, H264_LEVEL_5_2 = 15, H264_LEVEL_AUTO = 16 }


	/** H264 Look Ahead Rate Control */
	export enum H264LookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }


	/** H264 Par Control */
	export enum H264ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** H264 Profile */
	export enum H264Profile { BASELINE = 0, HIGH = 1, HIGH_10BIT = 2, HIGH_422 = 3, HIGH_422_10BIT = 4, MAIN = 5 }


	/** H264 Quality Level */
	export enum H264QualityLevel { ENHANCED_QUALITY = 0, STANDARD_QUALITY = 1 }


	/** H264 Rate Control Mode */
	export enum H264RateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2, VBR = 3 }


	/** H264 Scan Type */
	export enum H264ScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/** H264 Scene Change Detect */
	export enum H264SceneChangeDetect { DISABLED = 0, ENABLED = 1 }


	/** H264 Spatial Aq */
	export enum H264SpatialAq { DISABLED = 0, ENABLED = 1 }


	/** H264 Sub Gop Length */
	export enum H264SubGopLength { DYNAMIC = 0, FIXED = 1 }


	/** H264 Syntax */
	export enum H264Syntax { DEFAULT = 0, RP2027 = 1 }


	/** H264 Temporal Aq */
	export enum H264TemporalAq { DISABLED = 0, ENABLED = 1 }


	/** H264 Timecode Insertion Behavior */
	export enum H264TimecodeInsertionBehavior { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/** H265 Adaptive Quantization */
	export enum H265AdaptiveQuantization { HIGH = 0, HIGHER = 1, LOW = 2, MAX = 3, MEDIUM = 4, OFF = 5 }


	/** H265 Alternative Transfer Function */
	export enum H265AlternativeTransferFunction { INSERT = 0, OMIT = 1 }


	/** H265 Color Metadata */
	export enum H265ColorMetadata { IGNORE = 0, INSERT = 1 }


	/** H265 Flicker Aq */
	export enum H265FlickerAq { DISABLED = 0, ENABLED = 1 }


	/** H265 Gop Size Units */
	export enum H265GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/** H265 Level */
	export enum H265Level { H265_LEVEL_1 = 0, H265_LEVEL_2 = 1, H265_LEVEL_2_1 = 2, H265_LEVEL_3 = 3, H265_LEVEL_3_1 = 4, H265_LEVEL_4 = 5, H265_LEVEL_4_1 = 6, H265_LEVEL_5 = 7, H265_LEVEL_5_1 = 8, H265_LEVEL_5_2 = 9, H265_LEVEL_6 = 10, H265_LEVEL_6_1 = 11, H265_LEVEL_6_2 = 12, H265_LEVEL_AUTO = 13 }


	/** H265 Look Ahead Rate Control */
	export enum H265LookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }


	/** H265 Profile */
	export enum H265Profile { MAIN = 0, MAIN_10BIT = 1 }


	/** H265 Rate Control Mode */
	export enum H265RateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2 }


	/** H265 Scan Type */
	export enum H265ScanType { PROGRESSIVE = 0 }


	/** H265 Scene Change Detect */
	export enum H265SceneChangeDetect { DISABLED = 0, ENABLED = 1 }


	/** H265 Tier */
	export enum H265Tier { HIGH = 0, MAIN = 1 }


	/** H265 Timecode Insertion Behavior */
	export enum H265TimecodeInsertionBehavior { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/** Hls Akamai Http Transfer Mode */
	export enum HlsAkamaiHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/** Hls Caption Language Setting */
	export enum HlsCaptionLanguageSetting { INSERT = 0, NONE = 1, OMIT = 2 }


	/** Hls Client Cache */
	export enum HlsClientCache { DISABLED = 0, ENABLED = 1 }


	/** Hls Codec Specification */
	export enum HlsCodecSpecification { RFC_4281 = 0, RFC_6381 = 1 }


	/** Hls Directory Structure */
	export enum HlsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }


	/** Hls Encryption Type */
	export enum HlsEncryptionType { AES128 = 0, SAMPLE_AES = 1 }


	/** State of HLS ID3 Segment Tagging */
	export enum HlsId3SegmentTaggingState { DISABLED = 0, ENABLED = 1 }


	/** When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment. */
	export enum IFrameOnlyPlaylistType { DISABLED = 0, STANDARD = 1 }


	/** Input Loss Action For Hls Out */
	export enum InputLossActionForHlsOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/** Hls Iv In Manifest */
	export enum HlsIvInManifest { EXCLUDE = 0, INCLUDE = 1 }


	/** Hls Iv Source */
	export enum HlsIvSource { EXPLICIT = 0, FOLLOWS_SEGMENT_NUMBER = 1 }


	/** Hls Manifest Compression */
	export enum HlsManifestCompression { GZIP = 0, NONE = 1 }


	/** Hls Manifest Duration Format */
	export enum HlsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }


	/** Hls Mode */
	export enum HlsMode { LIVE = 0, VOD = 1 }


	/** Hls Output Selection */
	export enum HlsOutputSelection { MANIFESTS_AND_SEGMENTS = 0, SEGMENTS_ONLY = 1 }


	/** Hls Program Date Time */
	export enum HlsProgramDateTime { EXCLUDE = 0, INCLUDE = 1 }


	/** Hls Redundant Manifest */
	export enum HlsRedundantManifest { DISABLED = 0, ENABLED = 1 }


	/** Hls Segmentation Mode */
	export enum HlsSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }


	/** Hls Stream Inf Resolution */
	export enum HlsStreamInfResolution { EXCLUDE = 0, INCLUDE = 1 }


	/** Hls Timed Metadata Id3 Frame */
	export enum HlsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/** Hls Ts File Mode */
	export enum HlsTsFileMode { SEGMENTED_FILES = 0, SINGLE_FILE = 1 }


	/** Hls H265 Packaging Type */
	export enum HlsH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/** Hls Media Store Storage Class */
	export enum HlsMediaStoreStorageClass { TEMPORAL = 0 }


	/** Hls Webdav Http Transfer Mode */
	export enum HlsWebdavHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/** Documentation update needed */
	export enum InputTimecodeSource { ZEROBASED = 0, EMBEDDED = 1 }


	/** Input Deblock Filter */
	export enum InputDeblockFilter { DISABLED = 0, ENABLED = 1 }


	/** Input Denoise Filter */
	export enum InputDenoiseFilter { DISABLED = 0, ENABLED = 1 }


	/** The source at the input device that is currently active. */
	export enum InputDeviceActiveInput { HDMI = 0, SDI = 1 }


	/** Configurable settings for the input device. */
	export interface InputDeviceConfigurableSettings {

		/** The source to activate (use) from the input device. */
		ConfiguredInput?: InputDeviceHdSettingsConfiguredInput | null;

		/** Placeholder documentation for __integer */
		MaxBitrate?: number | null;
	}


	/** The state of the input device. */
	export enum InputDeviceState { IDLE = 0, STREAMING = 1 }


	/** The scan type of the video source. */
	export enum InputDeviceScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/** Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address. */
	export enum InputDeviceIpScheme { STATIC = 0, DHCP = 1 }


	/** Input Filter */
	export enum InputFilter { AUTO = 0, DISABLED = 1, FORCED = 2 }


	/** Input Loss Action For Ms Smooth Out */
	export enum InputLossActionForMsSmoothOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/** Input Loss Action For Rtmp Out */
	export enum InputLossActionForRtmpOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/** Input Loss Action For Udp Out */
	export enum InputLossActionForUdpOut { DROP_PROGRAM = 0, DROP_TS = 1, EMIT_PROGRAM = 2 }


	/** Input Loss Image Type */
	export enum InputLossImageType { COLOR = 0, SLATE = 1 }


	/** Smpte2038 Data Preference */
	export enum Smpte2038DataPreference { IGNORE = 0, PREFER = 1 }


	/** Input Source End Behavior */
	export enum InputSourceEndBehavior { CONTINUE = 0, LOOP = 1 }


	/** If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode. */
	export enum LastFrameClippingBehavior { EXCLUDE_LAST_FRAME = 0, INCLUDE_LAST_FRAME = 1 }


	/** Placeholder documentation for ListChannelsRequest */
	export interface ListChannelsRequest {
	}


	/** Placeholder documentation for ListInputDevicesRequest */
	export interface ListInputDevicesRequest {
	}


	/** Placeholder documentation for ListInputSecurityGroupsRequest */
	export interface ListInputSecurityGroupsRequest {
	}


	/** Placeholder documentation for ListInputsRequest */
	export interface ListInputsRequest {
	}


	/** Placeholder documentation for ListMultiplexProgramsRequest */
	export interface ListMultiplexProgramsRequest {
	}


	/** Placeholder documentation for ListMultiplexesRequest */
	export interface ListMultiplexesRequest {
	}


	/** Placeholder documentation for ListOfferingsRequest */
	export interface ListOfferingsRequest {
	}


	/** Placeholder documentation for ListReservationsRequest */
	export interface ListReservationsRequest {
	}


	/** Placeholder documentation for ListTagsForResourceRequest */
	export interface ListTagsForResourceRequest {
	}


	/** M2ts Absent Input Audio Behavior */
	export enum M2tsAbsentInputAudioBehavior { DROP = 0, ENCODE_SILENCE = 1 }


	/** M2ts Arib */
	export enum M2tsArib { DISABLED = 0, ENABLED = 1 }


	/** M2ts Arib Captions Pid Control */
	export enum M2tsAribCaptionsPidControl { AUTO = 0, USE_CONFIGURED = 1 }


	/** M2ts Audio Buffer Model */
	export enum M2tsAudioBufferModel { ATSC = 0, DVB = 1 }


	/** M2ts Audio Interval */
	export enum M2tsAudioInterval { VIDEO_AND_FIXED_INTERVALS = 0, VIDEO_INTERVAL = 1 }


	/** M2ts Audio Stream Type */
	export enum M2tsAudioStreamType { ATSC = 0, DVB = 1 }


	/** M2ts Buffer Model */
	export enum M2tsBufferModel { MULTIPLEX = 0, NONE = 1 }


	/** M2ts Cc Descriptor */
	export enum M2tsCcDescriptor { DISABLED = 0, ENABLED = 1 }


	/** M2ts Ebif Control */
	export enum M2tsEbifControl { NONE = 0, PASSTHROUGH = 1 }


	/** M2ts Ebp Placement */
	export enum M2tsEbpPlacement { VIDEO_AND_AUDIO_PIDS = 0, VIDEO_PID = 1 }


	/** M2ts Es Rate In Pes */
	export enum M2tsEsRateInPes { EXCLUDE = 0, INCLUDE = 1 }


	/** M2ts Klv */
	export enum M2tsKlv { NONE = 0, PASSTHROUGH = 1 }


	/** M2ts Nielsen Id3 Behavior */
	export enum M2tsNielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** M2ts Pcr Control */
	export enum M2tsPcrControl { CONFIGURED_PCR_PERIOD = 0, PCR_EVERY_PES_PACKET = 1 }


	/** M2ts Rate Mode */
	export enum M2tsRateMode { CBR = 0, VBR = 1 }


	/** M2ts Scte35 Control */
	export enum M2tsScte35Control { NONE = 0, PASSTHROUGH = 1 }


	/** M2ts Segmentation Markers */
	export enum M2tsSegmentationMarkers { EBP = 0, EBP_LEGACY = 1, NONE = 2, PSI_SEGSTART = 3, RAI_ADAPT = 4, RAI_SEGSTART = 5 }


	/** M2ts Segmentation Style */
	export enum M2tsSegmentationStyle { MAINTAIN_CADENCE = 0, RESET_CADENCE = 1 }


	/** M2ts Timed Metadata Behavior */
	export enum M2tsTimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** M3u8 Nielsen Id3 Behavior */
	export enum M3u8NielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** M3u8 Pcr Control */
	export enum M3u8PcrControl { CONFIGURED_PCR_PERIOD = 0, PCR_EVERY_PES_PACKET = 1 }


	/** M3u8 Scte35 Behavior */
	export enum M3u8Scte35Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** M3u8 Timed Metadata Behavior */
	export enum M3u8TimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** Mp2 Coding Mode */
	export enum Mp2CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1 }


	/** Smooth Group Audio Only Timecode Control */
	export enum SmoothGroupAudioOnlyTimecodeControl { PASSTHROUGH = 0, USE_CONFIGURED_CLOCK = 1 }


	/** Smooth Group Certificate Mode */
	export enum SmoothGroupCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }


	/** Smooth Group Event Id Mode */
	export enum SmoothGroupEventIdMode { NO_EVENT_ID = 0, USE_CONFIGURED = 1, USE_TIMESTAMP = 2 }


	/** Smooth Group Event Stop Behavior */
	export enum SmoothGroupEventStopBehavior { NONE = 0, SEND_EOS = 1 }


	/** Smooth Group Segmentation Mode */
	export enum SmoothGroupSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }


	/** Smooth Group Sparse Track Type */
	export enum SmoothGroupSparseTrackType { NONE = 0, SCTE_35 = 1, SCTE_35_WITHOUT_SEGMENTATION = 2 }


	/** Smooth Group Stream Manifest Behavior */
	export enum SmoothGroupStreamManifestBehavior { DO_NOT_SEND = 0, SEND = 1 }


	/** Smooth Group Timestamp Offset Mode */
	export enum SmoothGroupTimestampOffsetMode { USE_CONFIGURED_OFFSET = 0, USE_EVENT_START_DATE = 1 }


	/** Ms Smooth H265 Packaging Type */
	export enum MsSmoothH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/** Network Input Server Validation */
	export enum NetworkInputServerValidation { CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME = 0, CHECK_CRYPTOGRAPHY_ONLY = 1 }


	/** State of Nielsen PCM to ID3 tagging */
	export enum NielsenPcmToId3TaggingState { DISABLED = 0, ENABLED = 1 }


	/** Pipeline ID */
	export enum PipelineId { PIPELINE_0 = 0, PIPELINE_1 = 1 }


	/** Placeholder documentation for PurchaseOfferingRequest */
	export interface PurchaseOfferingRequest {

		/**
		 * Placeholder documentation for __integerMin1
		 * Required
		 * Minimum: 1
		 */
		Count: number;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RequestId?: string | null;

		/** Placeholder documentation for __string */
		Start?: string | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;
	}


	/** Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO' */
	export enum ReservationCodec { MPEG2 = 0, AVC = 1, HEVC = 2, AUDIO = 3 }


	/** Maximum bitrate in megabits per second */
	export enum ReservationMaximumBitrate { MAX_10_MBPS = 0, MAX_20_MBPS = 1, MAX_50_MBPS = 2 }


	/** Maximum framerate in frames per second (Outputs only) */
	export enum ReservationMaximumFramerate { MAX_30_FPS = 0, MAX_60_FPS = 1 }


	/**
	 * Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines
	 */
	export enum ReservationResolution { SD = 0, HD = 1, FHD = 2, UHD = 3 }


	/** Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL' */
	export enum ReservationResourceType { INPUT = 0, OUTPUT = 1, MULTIPLEX = 2, CHANNEL = 3 }


	/** Special features, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION' */
	export enum ReservationSpecialFeature { ADVANCED_AUDIO = 0, AUDIO_NORMALIZATION = 1 }


	/** Video quality, e.g. 'STANDARD' (Outputs only) */
	export enum ReservationVideoQuality { STANDARD = 0, ENHANCED = 1, PREMIUM = 2 }


	/** Rtmp Cache Full Behavior */
	export enum RtmpCacheFullBehavior { DISCONNECT_IMMEDIATELY = 0, WAIT_FOR_SERVER = 1 }


	/** Rtmp Caption Data */
	export enum RtmpCaptionData { ALL = 0, FIELD1_608 = 1, FIELD1_AND_FIELD2_608 = 2 }


	/** Rtmp Output Certificate Mode */
	export enum RtmpOutputCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }


	/** Scte20 Convert608 To708 */
	export enum Scte20Convert608To708 { DISABLED = 0, UPCONVERT = 1 }


	/** Scte35 Apos No Regional Blackout Behavior */
	export enum Scte35AposNoRegionalBlackoutBehavior { FOLLOW = 0, IGNORE = 1 }


	/** Scte35 Apos Web Delivery Allowed Behavior */
	export enum Scte35AposWebDeliveryAllowedBehavior { FOLLOW = 0, IGNORE = 1 }


	/** Corresponds to the archive_allowed parameter. A value of ARCHIVE_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
	export enum Scte35ArchiveAllowedFlag { ARCHIVE_NOT_ALLOWED = 0, ARCHIVE_ALLOWED = 1 }


	/** Corresponds to the device_restrictions parameter in a segmentation_descriptor. If you include one of the "restriction" flags then you must include all four of them. */
	export enum Scte35DeviceRestrictions { NONE = 0, RESTRICT_GROUP0 = 1, RESTRICT_GROUP1 = 2, RESTRICT_GROUP2 = 3 }


	/** Corresponds to the no_regional_blackout_flag parameter. A value of REGIONAL_BLACKOUT corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
	export enum Scte35NoRegionalBlackoutFlag { REGIONAL_BLACKOUT = 0, NO_REGIONAL_BLACKOUT = 1 }


	/** Corresponds to the web_delivery_allowed_flag parameter. A value of WEB_DELIVERY_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them. */
	export enum Scte35WebDeliveryAllowedFlag { WEB_DELIVERY_NOT_ALLOWED = 0, WEB_DELIVERY_ALLOWED = 1 }


	/** Corresponds to SCTE-35 segmentation_event_cancel_indicator. SEGMENTATION_EVENT_NOT_CANCELED corresponds to 0 in the SCTE-35 specification and indicates that this is an insertion request. SEGMENTATION_EVENT_CANCELED corresponds to 1 in the SCTE-35 specification and indicates that this is a cancelation request, in which case complete this field and the existing event ID to cancel. */
	export enum Scte35SegmentationCancelIndicator { SEGMENTATION_EVENT_NOT_CANCELED = 0, SEGMENTATION_EVENT_CANCELED = 1 }


	/** Scte35 Splice Insert No Regional Blackout Behavior */
	export enum Scte35SpliceInsertNoRegionalBlackoutBehavior { FOLLOW = 0, IGNORE = 1 }


	/** Scte35 Splice Insert Web Delivery Allowed Behavior */
	export enum Scte35SpliceInsertWebDeliveryAllowedBehavior { FOLLOW = 0, IGNORE = 1 }


	/** Placeholder documentation for StartChannelRequest */
	export interface StartChannelRequest {
	}


	/** Placeholder documentation for StartMultiplexRequest */
	export interface StartMultiplexRequest {
	}


	/** Placeholder documentation for StopChannelRequest */
	export interface StopChannelRequest {
	}


	/** Placeholder documentation for StopMultiplexRequest */
	export interface StopMultiplexRequest {
	}


	/** Temporal Filter Post Filter Sharpening */
	export enum TemporalFilterPostFilterSharpening { AUTO = 0, DISABLED = 1, ENABLED = 2 }


	/** Temporal Filter Strength */
	export enum TemporalFilterStrength { AUTO = 0, STRENGTH_1 = 1, STRENGTH_2 = 2, STRENGTH_3 = 3, STRENGTH_4 = 4, STRENGTH_5 = 5, STRENGTH_6 = 6, STRENGTH_7 = 7, STRENGTH_8 = 8, STRENGTH_9 = 9, STRENGTH_10 = 10, STRENGTH_11 = 11, STRENGTH_12 = 12, STRENGTH_13 = 13, STRENGTH_14 = 14, STRENGTH_15 = 15, STRENGTH_16 = 16 }


	/** Ttml Destination Style Control */
	export enum TtmlDestinationStyleControl { PASSTHROUGH = 0, USE_CONFIGURED = 1 }


	/** Udp Timed Metadata Id3 Frame */
	export enum UdpTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/** Channel class that the channel should be updated to. */
	export interface UpdateChannelClassRequest {

		/**
		 * A standard channel has two encoding pipelines and a single pipeline channel only has one.
		 * Required
		 */
		ChannelClass: ChannelChannelClass;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;
	}


	/** A request to update a channel. */
	export interface UpdateChannelRequest {

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination> | null;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification | null;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;
	}


	/** A request to update an input device. */
	export interface UpdateInputDeviceRequest {

		/** Configurable settings for the input device. */
		HdDeviceSettings?: InputDeviceConfigurableSettings | null;

		/** Placeholder documentation for __string */
		Name?: string | null;
	}


	/** A request to update an input. */
	export interface UpdateInputRequest {

		/** Placeholder documentation for __listOfInputDestinationRequest */
		Destinations?: Array<InputDestinationRequest> | null;

		/** Placeholder documentation for __listOfInputDeviceRequest */
		InputDevices?: Array<InputDeviceRequest> | null;

		/** Placeholder documentation for __listOf__string */
		InputSecurityGroups?: Array<string> | null;

		/** Placeholder documentation for __listOfMediaConnectFlowRequest */
		MediaConnectFlows?: Array<MediaConnectFlowRequest> | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for __listOfInputSourceRequest */
		Sources?: Array<InputSourceRequest> | null;
	}


	/** The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow. */
	export interface UpdateInputSecurityGroupRequest {

		/** Placeholder documentation for Tags */
		Tags?: Tags | null;

		/** Placeholder documentation for __listOfInputWhitelistRuleCidr */
		WhitelistRules?: Array<InputWhitelistRuleCidr> | null;
	}


	/** A request to update a program in a multiplex. */
	export interface UpdateMultiplexProgramRequest {

		/** Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings | null;
	}


	/** A request to update a multiplex. */
	export interface UpdateMultiplexRequest {

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings | null;

		/** Placeholder documentation for __string */
		Name?: string | null;
	}


	/** Request to update a reservation */
	export interface UpdateReservationRequest {

		/** Placeholder documentation for __string */
		Name?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Update a channel schedule
		 * Put prod/channels/{channelId}/schedule
		 * @param {string} channelId Id of the channel whose schedule is being updated.
		 * @return {BatchUpdateScheduleResponse} Success
		 */
		BatchUpdateSchedule(channelId: string, requestBody: BatchUpdateSchedulePutBody): Observable<BatchUpdateScheduleResponse> {
			return this.http.put<BatchUpdateScheduleResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/schedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete all schedule actions on a channel.
		 * Delete prod/channels/{channelId}/schedule
		 * @param {string} channelId Id of the channel whose schedule is being deleted.
		 * @return {DeleteScheduleResponse} Success
		 */
		DeleteSchedule(channelId: string): Observable<DeleteScheduleResponse> {
			return this.http.delete<DeleteScheduleResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/schedule', {});
		}

		/**
		 * Get a channel schedule
		 * Get prod/channels/{channelId}/schedule
		 * @param {string} channelId Id of the channel whose schedule is being updated.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScheduleResponse} Success
		 */
		DescribeSchedule(channelId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<DescribeScheduleResponse> {
			return this.http.get<DescribeScheduleResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/schedule&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new channel
		 * Post prod/channels
		 * @return {void} 
		 */
		CreateChannel(requestBody: CreateChannelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/channels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Produces list of channels that have been created
		 * Get prod/channels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'prod/channels?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Create an input
		 * Post prod/inputs
		 * @return {void} 
		 */
		CreateInput(requestBody: CreateInputPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/inputs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Produces list of inputs that have been created
		 * Get prod/inputs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInputsResponse} Success
		 */
		ListInputs(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListInputsResponse> {
			return this.http.get<ListInputsResponse>(this.baseUri + 'prod/inputs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a Input Security Group
		 * Post prod/inputSecurityGroups
		 * @return {CreateInputSecurityGroupResponse} Success
		 */
		CreateInputSecurityGroup(requestBody: CreateInputSecurityGroupPostBody): Observable<CreateInputSecurityGroupResponse> {
			return this.http.post<CreateInputSecurityGroupResponse>(this.baseUri + 'prod/inputSecurityGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Produces a list of Input Security Groups for an account
		 * Get prod/inputSecurityGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInputSecurityGroupsResponse} Success
		 */
		ListInputSecurityGroups(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListInputSecurityGroupsResponse> {
			return this.http.get<ListInputSecurityGroupsResponse>(this.baseUri + 'prod/inputSecurityGroups?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Create a new multiplex.
		 * Post prod/multiplexes
		 * @return {void} 
		 */
		CreateMultiplex(requestBody: CreateMultiplexPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/multiplexes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of the existing multiplexes.
		 * Get prod/multiplexes
		 * @param {number} maxResults The maximum number of items to return.
		 * @param {string} nextToken The token to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMultiplexesResponse} Success
		 */
		ListMultiplexes(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListMultiplexesResponse> {
			return this.http.get<ListMultiplexesResponse>(this.baseUri + 'prod/multiplexes?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Create a new program in the multiplex.
		 * Post prod/multiplexes/{multiplexId}/programs
		 * @param {string} multiplexId ID of the multiplex where the program is to be created.
		 * @return {void} 
		 */
		CreateMultiplexProgram(multiplexId: string, requestBody: CreateMultiplexProgramPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the programs that currently exist for a specific multiplex.
		 * Get prod/multiplexes/{multiplexId}/programs
		 * @param {number} maxResults The maximum number of items to return.
		 * @param {string} multiplexId The ID of the multiplex that the programs belong to.
		 * @param {string} nextToken The token to retrieve the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMultiplexProgramsResponse} Success
		 */
		ListMultiplexPrograms(maxResults: number, multiplexId: string, nextToken: string, MaxResults: string, NextToken: string): Observable<ListMultiplexProgramsResponse> {
			return this.http.get<ListMultiplexProgramsResponse>(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Create tags for a resource
		 * Post prod/tags/{resource_arn}
		 * @return {void} 
		 */
		CreateTags(resource_arn: string, requestBody: CreateTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Produces list of tags that have been created for a resource
		 * Get prod/tags/{resource_arn}
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'prod/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Starts deletion of channel. The associated outputs are also deleted.
		 * Delete prod/channels/{channelId}
		 * @param {string} channelId Unique ID of the channel.
		 * @return {DeleteChannelResponse} Success
		 */
		DeleteChannel(channelId: string): Observable<DeleteChannelResponse> {
			return this.http.delete<DeleteChannelResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)), {});
		}

		/**
		 * Gets details about a channel
		 * Get prod/channels/{channelId}
		 * @param {string} channelId channel ID
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(channelId: string): Observable<DescribeChannelResponse> {
			return this.http.get<DescribeChannelResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)), {});
		}

		/**
		 * Updates a channel.
		 * Put prod/channels/{channelId}
		 * @param {string} channelId channel ID
		 * @return {UpdateChannelResponse} Success
		 */
		UpdateChannel(channelId: string, requestBody: UpdateChannelPutBody): Observable<UpdateChannelResponse> {
			return this.http.put<UpdateChannelResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the input end point
		 * Delete prod/inputs/{inputId}
		 * @param {string} inputId Unique ID of the input
		 * @return {DeleteInputResponse} Success
		 */
		DeleteInput(inputId: string): Observable<DeleteInputResponse> {
			return this.http.delete<DeleteInputResponse>(this.baseUri + 'prod/inputs/' + (inputId == null ? '' : encodeURIComponent(inputId)), {});
		}

		/**
		 * Produces details about an input
		 * Get prod/inputs/{inputId}
		 * @param {string} inputId Unique ID of the input
		 * @return {DescribeInputResponse} Success
		 */
		DescribeInput(inputId: string): Observable<DescribeInputResponse> {
			return this.http.get<DescribeInputResponse>(this.baseUri + 'prod/inputs/' + (inputId == null ? '' : encodeURIComponent(inputId)), {});
		}

		/**
		 * Updates an input.
		 * Put prod/inputs/{inputId}
		 * @param {string} inputId Unique ID of the input.
		 * @return {UpdateInputResponse} Success
		 */
		UpdateInput(inputId: string, requestBody: UpdateInputPutBody): Observable<UpdateInputResponse> {
			return this.http.put<UpdateInputResponse>(this.baseUri + 'prod/inputs/' + (inputId == null ? '' : encodeURIComponent(inputId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Input Security Group
		 * Delete prod/inputSecurityGroups/{inputSecurityGroupId}
		 * @param {string} inputSecurityGroupId The Input Security Group to delete
		 * @return {DeleteInputSecurityGroupResponse} Success
		 */
		DeleteInputSecurityGroup(inputSecurityGroupId: string): Observable<DeleteInputSecurityGroupResponse> {
			return this.http.delete<DeleteInputSecurityGroupResponse>(this.baseUri + 'prod/inputSecurityGroups/' + (inputSecurityGroupId == null ? '' : encodeURIComponent(inputSecurityGroupId)), {});
		}

		/**
		 * Produces a summary of an Input Security Group
		 * Get prod/inputSecurityGroups/{inputSecurityGroupId}
		 * @param {string} inputSecurityGroupId The id of the Input Security Group to describe
		 * @return {DescribeInputSecurityGroupResponse} Success
		 */
		DescribeInputSecurityGroup(inputSecurityGroupId: string): Observable<DescribeInputSecurityGroupResponse> {
			return this.http.get<DescribeInputSecurityGroupResponse>(this.baseUri + 'prod/inputSecurityGroups/' + (inputSecurityGroupId == null ? '' : encodeURIComponent(inputSecurityGroupId)), {});
		}

		/**
		 * Update an Input Security Group's Whilelists.
		 * Put prod/inputSecurityGroups/{inputSecurityGroupId}
		 * @param {string} inputSecurityGroupId The id of the Input Security Group to update.
		 * @return {UpdateInputSecurityGroupResponse} Success
		 */
		UpdateInputSecurityGroup(inputSecurityGroupId: string, requestBody: UpdateInputSecurityGroupPutBody): Observable<UpdateInputSecurityGroupResponse> {
			return this.http.put<UpdateInputSecurityGroupResponse>(this.baseUri + 'prod/inputSecurityGroups/' + (inputSecurityGroupId == null ? '' : encodeURIComponent(inputSecurityGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a multiplex. The multiplex must be idle.
		 * Delete prod/multiplexes/{multiplexId}
		 * @param {string} multiplexId The ID of the multiplex.
		 * @return {void} 
		 */
		DeleteMultiplex(multiplexId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets details about a multiplex.
		 * Get prod/multiplexes/{multiplexId}
		 * @param {string} multiplexId The ID of the multiplex.
		 * @return {DescribeMultiplexResponse} Success
		 */
		DescribeMultiplex(multiplexId: string): Observable<DescribeMultiplexResponse> {
			return this.http.get<DescribeMultiplexResponse>(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)), {});
		}

		/**
		 * Updates a multiplex.
		 * Put prod/multiplexes/{multiplexId}
		 * @param {string} multiplexId ID of the multiplex to update.
		 * @return {UpdateMultiplexResponse} Success
		 */
		UpdateMultiplex(multiplexId: string, requestBody: UpdateMultiplexPutBody): Observable<UpdateMultiplexResponse> {
			return this.http.put<UpdateMultiplexResponse>(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a program from a multiplex.
		 * Delete prod/multiplexes/{multiplexId}/programs/{programName}
		 * @param {string} multiplexId The ID of the multiplex that the program belongs to.
		 * @param {string} programName The multiplex program name.
		 * @return {DeleteMultiplexProgramResponse} Success
		 */
		DeleteMultiplexProgram(multiplexId: string, programName: string): Observable<DeleteMultiplexProgramResponse> {
			return this.http.delete<DeleteMultiplexProgramResponse>(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs/' + (programName == null ? '' : encodeURIComponent(programName)), {});
		}

		/**
		 * Get the details for a program in a multiplex.
		 * Get prod/multiplexes/{multiplexId}/programs/{programName}
		 * @param {string} multiplexId The ID of the multiplex that the program belongs to.
		 * @param {string} programName The name of the program.
		 * @return {DescribeMultiplexProgramResponse} Success
		 */
		DescribeMultiplexProgram(multiplexId: string, programName: string): Observable<DescribeMultiplexProgramResponse> {
			return this.http.get<DescribeMultiplexProgramResponse>(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs/' + (programName == null ? '' : encodeURIComponent(programName)), {});
		}

		/**
		 * Update a program in a multiplex.
		 * Put prod/multiplexes/{multiplexId}/programs/{programName}
		 * @param {string} multiplexId The ID of the multiplex of the program to update.
		 * @param {string} programName The name of the program to update.
		 * @return {UpdateMultiplexProgramResponse} Success
		 */
		UpdateMultiplexProgram(multiplexId: string, programName: string, requestBody: UpdateMultiplexProgramPutBody): Observable<UpdateMultiplexProgramResponse> {
			return this.http.put<UpdateMultiplexProgramResponse>(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/programs/' + (programName == null ? '' : encodeURIComponent(programName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an expired reservation.
		 * Delete prod/reservations/{reservationId}
		 * @param {string} reservationId Unique reservation ID, e.g. '1234567'
		 * @return {DeleteReservationResponse} Success
		 */
		DeleteReservation(reservationId: string): Observable<DeleteReservationResponse> {
			return this.http.delete<DeleteReservationResponse>(this.baseUri + 'prod/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)), {});
		}

		/**
		 * Get details for a reservation.
		 * Get prod/reservations/{reservationId}
		 * @param {string} reservationId Unique reservation ID, e.g. '1234567'
		 * @return {DescribeReservationResponse} Success
		 */
		DescribeReservation(reservationId: string): Observable<DescribeReservationResponse> {
			return this.http.get<DescribeReservationResponse>(this.baseUri + 'prod/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)), {});
		}

		/**
		 * Update reservation.
		 * Put prod/reservations/{reservationId}
		 * @param {string} reservationId Unique reservation ID, e.g. '1234567'
		 * @return {UpdateReservationResponse} Success
		 */
		UpdateReservation(reservationId: string, requestBody: UpdateReservationPutBody): Observable<UpdateReservationResponse> {
			return this.http.put<UpdateReservationResponse>(this.baseUri + 'prod/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags for a resource
		 * Delete prod/tags/{resource_arn}#tagKeys
		 * @param {Array<string>} tagKeys An array of tag keys to delete
		 * @return {void} 
		 */
		DeleteTags(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'prod/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the details for the input device
		 * Get prod/inputDevices/{inputDeviceId}
		 * @param {string} inputDeviceId The unique ID of this input device. For example, hd-123456789abcdef.
		 * @return {DescribeInputDeviceResponse} Success
		 */
		DescribeInputDevice(inputDeviceId: string): Observable<DescribeInputDeviceResponse> {
			return this.http.get<DescribeInputDeviceResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)), {});
		}

		/**
		 * Updates the parameters for the input device.
		 * Put prod/inputDevices/{inputDeviceId}
		 * @param {string} inputDeviceId The unique ID of the input device. For example, hd-123456789abcdef.
		 * @return {UpdateInputDeviceResponse} Success
		 */
		UpdateInputDevice(inputDeviceId: string, requestBody: UpdateInputDevicePutBody): Observable<UpdateInputDeviceResponse> {
			return this.http.put<UpdateInputDeviceResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get details for an offering.
		 * Get prod/offerings/{offeringId}
		 * @param {string} offeringId Unique offering ID, e.g. '87654321'
		 * @return {DescribeOfferingResponse} Success
		 */
		DescribeOffering(offeringId: string): Observable<DescribeOfferingResponse> {
			return this.http.get<DescribeOfferingResponse>(this.baseUri + 'prod/offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)), {});
		}

		/**
		 * List input devices
		 * Get prod/inputDevices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInputDevicesResponse} Success
		 */
		ListInputDevices(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListInputDevicesResponse> {
			return this.http.get<ListInputDevicesResponse>(this.baseUri + 'prod/inputDevices?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List offerings available for purchase.
		 * Get prod/offerings
		 * @param {string} channelClass Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
		 * @param {string} channelConfiguration Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
		 * @param {string} codec Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'
		 * @param {string} duration Filter by offering duration, e.g. '12'
		 * @param {string} maximumBitrate Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
		 * @param {string} maximumFramerate Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
		 * @param {string} resolution Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
		 * @param {string} resourceType Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
		 * @param {string} specialFeature Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
		 * @param {string} videoQuality Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOfferingsResponse} Success
		 */
		ListOfferings(channelClass: string, channelConfiguration: string, codec: string, duration: string, maxResults: number, maximumBitrate: string, maximumFramerate: string, nextToken: string, resolution: string, resourceType: string, specialFeature: string, videoQuality: string, MaxResults: string, NextToken: string): Observable<ListOfferingsResponse> {
			return this.http.get<ListOfferingsResponse>(this.baseUri + 'prod/offerings?channelClass=' + (channelClass == null ? '' : encodeURIComponent(channelClass)) + '&channelConfiguration=' + (channelConfiguration == null ? '' : encodeURIComponent(channelConfiguration)) + '&codec=' + (codec == null ? '' : encodeURIComponent(codec)) + '&duration=' + (duration == null ? '' : encodeURIComponent(duration)) + '&maxResults=' + maxResults + '&maximumBitrate=' + (maximumBitrate == null ? '' : encodeURIComponent(maximumBitrate)) + '&maximumFramerate=' + (maximumFramerate == null ? '' : encodeURIComponent(maximumFramerate)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resolution=' + (resolution == null ? '' : encodeURIComponent(resolution)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&specialFeature=' + (specialFeature == null ? '' : encodeURIComponent(specialFeature)) + '&videoQuality=' + (videoQuality == null ? '' : encodeURIComponent(videoQuality)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * List purchased reservations.
		 * Get prod/reservations
		 * @param {string} channelClass Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
		 * @param {string} codec Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'
		 * @param {string} maximumBitrate Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
		 * @param {string} maximumFramerate Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
		 * @param {string} resolution Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
		 * @param {string} resourceType Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
		 * @param {string} specialFeature Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
		 * @param {string} videoQuality Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReservationsResponse} Success
		 */
		ListReservations(channelClass: string, codec: string, maxResults: number, maximumBitrate: string, maximumFramerate: string, nextToken: string, resolution: string, resourceType: string, specialFeature: string, videoQuality: string, MaxResults: string, NextToken: string): Observable<ListReservationsResponse> {
			return this.http.get<ListReservationsResponse>(this.baseUri + 'prod/reservations?channelClass=' + (channelClass == null ? '' : encodeURIComponent(channelClass)) + '&codec=' + (codec == null ? '' : encodeURIComponent(codec)) + '&maxResults=' + maxResults + '&maximumBitrate=' + (maximumBitrate == null ? '' : encodeURIComponent(maximumBitrate)) + '&maximumFramerate=' + (maximumFramerate == null ? '' : encodeURIComponent(maximumFramerate)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resolution=' + (resolution == null ? '' : encodeURIComponent(resolution)) + '&resourceType=' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '&specialFeature=' + (specialFeature == null ? '' : encodeURIComponent(specialFeature)) + '&videoQuality=' + (videoQuality == null ? '' : encodeURIComponent(videoQuality)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Purchase an offering and create a reservation.
		 * Post prod/offerings/{offeringId}/purchase
		 * @param {string} offeringId Offering to purchase, e.g. '87654321'
		 * @return {void} 
		 */
		PurchaseOffering(offeringId: string, requestBody: PurchaseOfferingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/purchase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts an existing channel
		 * Post prod/channels/{channelId}/start
		 * @param {string} channelId A request to start a channel
		 * @return {StartChannelResponse} Success
		 */
		StartChannel(channelId: string): Observable<StartChannelResponse> {
			return this.http.post<StartChannelResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/start', null, {});
		}

		/**
		 * Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.
		 * Post prod/multiplexes/{multiplexId}/start
		 * @param {string} multiplexId The ID of the multiplex.
		 * @return {void} 
		 */
		StartMultiplex(multiplexId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/start', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a running channel
		 * Post prod/channels/{channelId}/stop
		 * @param {string} channelId A request to stop a running channel
		 * @return {StopChannelResponse} Success
		 */
		StopChannel(channelId: string): Observable<StopChannelResponse> {
			return this.http.post<StopChannelResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/stop', null, {});
		}

		/**
		 * Stops a running multiplex. If the multiplex isn't running, this action has no effect.
		 * Post prod/multiplexes/{multiplexId}/stop
		 * @param {string} multiplexId The ID of the multiplex.
		 * @return {void} 
		 */
		StopMultiplex(multiplexId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/multiplexes/' + (multiplexId == null ? '' : encodeURIComponent(multiplexId)) + '/stop', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Changes the class of the channel.
		 * Put prod/channels/{channelId}/channelClass
		 * @param {string} channelId Channel Id of the channel whose class should be updated.
		 * @return {UpdateChannelClassResponse} Success
		 */
		UpdateChannelClass(channelId: string, requestBody: UpdateChannelClassPutBody): Observable<UpdateChannelClassResponse> {
			return this.http.put<UpdateChannelClassResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/channelClass', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchUpdateSchedulePutBody {

		/** A list of schedule actions to create (in a request) or that have been created (in a response). */
		creates?: BatchUpdateSchedulePutBodyCreates | null;

		/** A list of schedule actions to delete. */
		deletes?: BatchUpdateSchedulePutBodyDeletes | null;
	}

	export interface BatchUpdateSchedulePutBodyCreates {

		/** Placeholder documentation for __listOfScheduleAction */
		ScheduleActions?: Array<ScheduleAction> | null;
	}

	export interface BatchUpdateSchedulePutBodyDeletes {

		/** Placeholder documentation for __listOf__string */
		ActionNames?: Array<string> | null;
	}

	export interface CreateChannelPostBody {

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		channelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination> | null;

		/** Encoder Settings */
		encoderSettings?: CreateChannelPostBodyEncoderSettings | null;

		/** Placeholder documentation for __listOfInputAttachment */
		inputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		inputSpecification?: CreateChannelPostBodyInputSpecification | null;

		/** The log level the user wants for their channel. */
		logLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		requestId?: string | null;

		/** Placeholder documentation for __string */
		reserved?: string | null;

		/** Placeholder documentation for __string */
		roleArn?: string | null;

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateChannelPostBodyEncoderSettings {

		/** Placeholder documentation for __listOfAudioDescription */
		AudioDescriptions?: Array<AudioDescription> | null;

		/** Avail Blanking */
		AvailBlanking?: AvailBlanking | null;

		/** Avail Configuration */
		AvailConfiguration?: AvailConfiguration | null;

		/** Blackout Slate */
		BlackoutSlate?: BlackoutSlate | null;

		/** Placeholder documentation for __listOfCaptionDescription */
		CaptionDescriptions?: Array<CaptionDescription> | null;

		/** Global Configuration */
		GlobalConfiguration?: GlobalConfiguration | null;

		/** Nielsen Configuration */
		NielsenConfiguration?: NielsenConfiguration | null;

		/** Placeholder documentation for __listOfOutputGroup */
		OutputGroups?: Array<OutputGroup> | null;

		/** Timecode Config */
		TimecodeConfig?: TimecodeConfig | null;

		/** Placeholder documentation for __listOfVideoDescription */
		VideoDescriptions?: Array<VideoDescription> | null;
	}

	export interface CreateChannelPostBodyInputSpecification {

		/** codec in increasing order of complexity */
		Codec?: InputSpecificationCodec | null;

		/** Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
		MaximumBitrate?: InputSpecificationMaximumBitrate | null;

		/**
		 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution?: InputSpecificationResolution | null;
	}

	export interface CreateInputPostBody {

		/** Placeholder documentation for __listOfInputDestinationRequest */
		destinations?: Array<InputDestinationRequest> | null;

		/** Placeholder documentation for __listOfInputDeviceSettings */
		inputDevices?: Array<InputDeviceSettings> | null;

		/** Placeholder documentation for __listOf__string */
		inputSecurityGroups?: Array<string> | null;

		/** Placeholder documentation for __listOfMediaConnectFlowRequest */
		mediaConnectFlows?: Array<MediaConnectFlowRequest> | null;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		requestId?: string | null;

		/** Placeholder documentation for __string */
		roleArn?: string | null;

		/** Placeholder documentation for __listOfInputSourceRequest */
		sources?: Array<InputSourceRequest> | null;

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string } | null;

		/** Placeholder documentation for InputType */
		type?: InputType | null;

		/**
		 * Settings for a private VPC Input.
		 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
		 * This property requires setting the roleArn property on Input creation.
		 * Not compatible with the inputSecurityGroups property.
		 */
		vpc?: CreateInputPostBodyVpc | null;
	}

	export interface CreateInputPostBodyVpc {

		/** Placeholder documentation for __listOf__string */
		SecurityGroupIds?: Array<string> | null;

		/** Placeholder documentation for __listOf__string */
		SubnetIds?: Array<string> | null;
	}

	export interface CreateInputSecurityGroupPostBody {

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string } | null;

		/** Placeholder documentation for __listOfInputWhitelistRuleCidr */
		whitelistRules?: Array<InputWhitelistRuleCidr> | null;
	}

	export interface CreateMultiplexPostBody {

		/**
		 * Placeholder documentation for __listOf__string
		 * Required
		 */
		availabilityZones: Array<string>;

		/**
		 * Contains configuration for a Multiplex event
		 * Required
		 */
		multiplexSettings: CreateMultiplexPostBodyMultiplexSettings;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		name: string;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		requestId: string;

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateMultiplexPostBodyMultiplexSettings {

		/**
		 * Placeholder documentation for __integerMin1000Max3000
		 * Minimum: 1000
		 * Maximum: 3000
		 */
		MaximumVideoBufferDelayMilliseconds?: number | null;

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max100000000
		 * Minimum: 0
		 * Maximum: 100000000
		 */
		TransportStreamReservedBitrate?: number | null;
	}

	export interface CreateMultiplexProgramPostBody {

		/**
		 * Multiplex Program settings configuration.
		 * Required
		 */
		multiplexProgramSettings: CreateMultiplexProgramPostBodyMultiplexProgramSettings;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		programName: string;

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		requestId: string;
	}

	export interface CreateMultiplexProgramPostBodyMultiplexProgramSettings {

		/**
		 * Indicates which pipeline is preferred by the multiplex for program ingest.
		 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
		 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
		 * it will not switch back to the other pipeline based on it recovering to a healthy state,
		 * it will only switch if the active pipeline becomes unhealthy.
		 */
		PreferredChannelPipeline?: MultiplexProgramSettingsPreferredChannelPipeline | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNumber?: number | null;

		/** Transport stream service descriptor configuration for the Multiplex program. */
		ServiceDescriptor?: MultiplexProgramServiceDescriptor | null;

		/** The video configuration for each program in a multiplex. */
		VideoSettings?: MultiplexVideoSettings | null;
	}

	export interface CreateTagsPostBody {

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string } | null;
	}

	export interface UpdateChannelPutBody {

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination> | null;

		/** Encoder Settings */
		encoderSettings?: UpdateChannelPutBodyEncoderSettings | null;

		/** Placeholder documentation for __listOfInputAttachment */
		inputAttachments?: Array<InputAttachment> | null;

		/** Placeholder documentation for InputSpecification */
		inputSpecification?: UpdateChannelPutBodyInputSpecification | null;

		/** The log level the user wants for their channel. */
		logLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		roleArn?: string | null;
	}

	export interface UpdateChannelPutBodyEncoderSettings {

		/** Placeholder documentation for __listOfAudioDescription */
		AudioDescriptions?: Array<AudioDescription> | null;

		/** Avail Blanking */
		AvailBlanking?: AvailBlanking | null;

		/** Avail Configuration */
		AvailConfiguration?: AvailConfiguration | null;

		/** Blackout Slate */
		BlackoutSlate?: BlackoutSlate | null;

		/** Placeholder documentation for __listOfCaptionDescription */
		CaptionDescriptions?: Array<CaptionDescription> | null;

		/** Global Configuration */
		GlobalConfiguration?: GlobalConfiguration | null;

		/** Nielsen Configuration */
		NielsenConfiguration?: NielsenConfiguration | null;

		/** Placeholder documentation for __listOfOutputGroup */
		OutputGroups?: Array<OutputGroup> | null;

		/** Timecode Config */
		TimecodeConfig?: TimecodeConfig | null;

		/** Placeholder documentation for __listOfVideoDescription */
		VideoDescriptions?: Array<VideoDescription> | null;
	}

	export interface UpdateChannelPutBodyInputSpecification {

		/** codec in increasing order of complexity */
		Codec?: InputSpecificationCodec | null;

		/** Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
		MaximumBitrate?: InputSpecificationMaximumBitrate | null;

		/**
		 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution?: InputSpecificationResolution | null;
	}

	export interface UpdateInputPutBody {

		/** Placeholder documentation for __listOfInputDestinationRequest */
		destinations?: Array<InputDestinationRequest> | null;

		/** Placeholder documentation for __listOfInputDeviceRequest */
		inputDevices?: Array<InputDeviceRequest> | null;

		/** Placeholder documentation for __listOf__string */
		inputSecurityGroups?: Array<string> | null;

		/** Placeholder documentation for __listOfMediaConnectFlowRequest */
		mediaConnectFlows?: Array<MediaConnectFlowRequest> | null;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		roleArn?: string | null;

		/** Placeholder documentation for __listOfInputSourceRequest */
		sources?: Array<InputSourceRequest> | null;
	}

	export interface UpdateInputSecurityGroupPutBody {

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string } | null;

		/** Placeholder documentation for __listOfInputWhitelistRuleCidr */
		whitelistRules?: Array<InputWhitelistRuleCidr> | null;
	}

	export interface UpdateMultiplexPutBody {

		/** Contains configuration for a Multiplex event */
		multiplexSettings?: UpdateMultiplexPutBodyMultiplexSettings | null;

		/** Placeholder documentation for __string */
		name?: string | null;
	}

	export interface UpdateMultiplexPutBodyMultiplexSettings {

		/**
		 * Placeholder documentation for __integerMin1000Max3000
		 * Minimum: 1000
		 * Maximum: 3000
		 */
		MaximumVideoBufferDelayMilliseconds?: number | null;

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId?: number | null;

		/**
		 * Placeholder documentation for __integerMin0Max100000000
		 * Minimum: 0
		 * Maximum: 100000000
		 */
		TransportStreamReservedBitrate?: number | null;
	}

	export interface UpdateMultiplexProgramPutBody {

		/** Multiplex Program settings configuration. */
		multiplexProgramSettings?: UpdateMultiplexProgramPutBodyMultiplexProgramSettings | null;
	}

	export interface UpdateMultiplexProgramPutBodyMultiplexProgramSettings {

		/**
		 * Indicates which pipeline is preferred by the multiplex for program ingest.
		 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
		 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
		 * it will not switch back to the other pipeline based on it recovering to a healthy state,
		 * it will only switch if the active pipeline becomes unhealthy.
		 */
		PreferredChannelPipeline?: MultiplexProgramSettingsPreferredChannelPipeline | null;

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNumber?: number | null;

		/** Transport stream service descriptor configuration for the Multiplex program. */
		ServiceDescriptor?: MultiplexProgramServiceDescriptor | null;

		/** The video configuration for each program in a multiplex. */
		VideoSettings?: MultiplexVideoSettings | null;
	}

	export interface UpdateReservationPutBody {

		/** Placeholder documentation for __string */
		name?: string | null;
	}

	export interface UpdateInputDevicePutBody {

		/** Configurable settings for the input device. */
		hdDeviceSettings?: UpdateInputDevicePutBodyHdDeviceSettings | null;

		/** Placeholder documentation for __string */
		name?: string | null;
	}

	export interface UpdateInputDevicePutBodyHdDeviceSettings {

		/** The source to activate (use) from the input device. */
		ConfiguredInput?: InputDeviceHdSettingsConfiguredInput | null;

		/** Placeholder documentation for __integer */
		MaxBitrate?: number | null;
	}

	export interface PurchaseOfferingPostBody {

		/**
		 * Placeholder documentation for __integerMin1
		 * Required
		 * Minimum: 1
		 */
		count: number;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		requestId?: string | null;

		/** Placeholder documentation for __string */
		start?: string | null;

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string } | null;
	}

	export interface UpdateChannelClassPutBody {

		/**
		 * A standard channel has two encoding pipelines and a single pipeline channel only has one.
		 * Required
		 */
		channelClass: ChannelChannelClass;

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination> | null;
	}

}

