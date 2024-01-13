import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Placeholder documentation for BatchUpdateScheduleResponse */
	export interface BatchUpdateScheduleResponse {

		/** List of actions that have been created in the schedule. */
		Creates?: BatchScheduleActionCreateResult;

		/** List of actions that have been deleted from the schedule. */
		Deletes?: BatchScheduleActionDeleteResult;
	}

	/** Placeholder documentation for BatchUpdateScheduleResponse */
	export interface BatchUpdateScheduleResponseFormProperties {
	}
	export function CreateBatchUpdateScheduleResponseFormGroup() {
		return new FormGroup<BatchUpdateScheduleResponseFormProperties>({
		});

	}


	/** List of actions that have been created in the schedule. */
	export interface BatchScheduleActionCreateResult {

		/**
		 * Placeholder documentation for __listOfScheduleAction
		 * Required
		 */
		ScheduleActions: Array<ScheduleAction>;
	}

	/** List of actions that have been created in the schedule. */
	export interface BatchScheduleActionCreateResultFormProperties {
	}
	export function CreateBatchScheduleActionCreateResultFormGroup() {
		return new FormGroup<BatchScheduleActionCreateResultFormProperties>({
		});

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

	/** Contains information on a single schedule action. */
	export interface ScheduleActionFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		ActionName: FormControl<string | null | undefined>,
	}
	export function CreateScheduleActionFormGroup() {
		return new FormGroup<ScheduleActionFormProperties>({
			ActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Holds the settings for a single schedule action. */
	export interface ScheduleActionSettings {

		/** Settings for the action to insert a user-defined ID3 tag in each HLS segment */
		HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

		/** Settings for the action to emit HLS metadata */
		HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;

		/** Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
		InputSwitchSettings?: InputSwitchScheduleActionSettings;

		/** Settings for the action to set pause state of a channel. */
		PauseStateSettings?: PauseStateScheduleActionSettings;

		/** Settings for a SCTE-35 return_to_network message. */
		Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

		/** Settings for a SCTE-35 splice_insert message. */
		Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

		/** Settings for a SCTE-35 time_signal. */
		Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

		/** Settings for the action to activate a static image. */
		StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

		/** Settings for the action to deactivate the image in a specific layer. */
		StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;
	}

	/** Holds the settings for a single schedule action. */
	export interface ScheduleActionSettingsFormProperties {
	}
	export function CreateScheduleActionSettingsFormGroup() {
		return new FormGroup<ScheduleActionSettingsFormProperties>({
		});

	}


	/** Settings for the action to insert a user-defined ID3 tag in each HLS segment */
	export interface HlsId3SegmentTaggingScheduleActionSettings {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Tag: string;
	}

	/** Settings for the action to insert a user-defined ID3 tag in each HLS segment */
	export interface HlsId3SegmentTaggingScheduleActionSettingsFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Tag: FormControl<string | null | undefined>,
	}
	export function CreateHlsId3SegmentTaggingScheduleActionSettingsFormGroup() {
		return new FormGroup<HlsId3SegmentTaggingScheduleActionSettingsFormProperties>({
			Tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for the action to emit HLS metadata */
	export interface HlsTimedMetadataScheduleActionSettings {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Id3: string;
	}

	/** Settings for the action to emit HLS metadata */
	export interface HlsTimedMetadataScheduleActionSettingsFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Id3: FormControl<string | null | undefined>,
	}
	export function CreateHlsTimedMetadataScheduleActionSettingsFormGroup() {
		return new FormGroup<HlsTimedMetadataScheduleActionSettingsFormProperties>({
			Id3: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
	export interface InputSwitchScheduleActionSettings {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		InputAttachmentNameReference: string;

		/** Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
		InputClippingSettings?: InputClippingSettings;

		/** Placeholder documentation for __listOf__string */
		UrlPath?: Array<string>;
	}

	/** Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
	export interface InputSwitchScheduleActionSettingsFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		InputAttachmentNameReference: FormControl<string | null | undefined>,
	}
	export function CreateInputSwitchScheduleActionSettingsFormGroup() {
		return new FormGroup<InputSwitchScheduleActionSettingsFormProperties>({
			InputAttachmentNameReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
	export interface InputClippingSettings {

		/**
		 * Documentation update needed
		 * Required
		 */
		InputTimecodeSource: InputClippingSettingsInputTimecodeSource;

		/** Settings to identify the start of the clip. */
		StartTimecode?: StartTimecode;

		/** Settings to identify the end of the clip. */
		StopTimecode?: StopTimecode;
	}

	/** Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
	export interface InputClippingSettingsFormProperties {

		/**
		 * Documentation update needed
		 * Required
		 */
		InputTimecodeSource: FormControl<InputClippingSettingsInputTimecodeSource | null | undefined>,
	}
	export function CreateInputClippingSettingsFormGroup() {
		return new FormGroup<InputClippingSettingsFormProperties>({
			InputTimecodeSource: new FormControl<InputClippingSettingsInputTimecodeSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputClippingSettingsInputTimecodeSource { ZEROBASED = 0, EMBEDDED = 1 }


	/** Settings to identify the start of the clip. */
	export interface StartTimecode {

		/** Placeholder documentation for __string */
		Timecode?: string | null;
	}

	/** Settings to identify the start of the clip. */
	export interface StartTimecodeFormProperties {

		/** Placeholder documentation for __string */
		Timecode: FormControl<string | null | undefined>,
	}
	export function CreateStartTimecodeFormGroup() {
		return new FormGroup<StartTimecodeFormProperties>({
			Timecode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to identify the end of the clip. */
	export interface StopTimecode {

		/** If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode. */
		LastFrameClippingBehavior?: StopTimecodeLastFrameClippingBehavior | null;

		/** Placeholder documentation for __string */
		Timecode?: string | null;
	}

	/** Settings to identify the end of the clip. */
	export interface StopTimecodeFormProperties {

		/** If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode. */
		LastFrameClippingBehavior: FormControl<StopTimecodeLastFrameClippingBehavior | null | undefined>,

		/** Placeholder documentation for __string */
		Timecode: FormControl<string | null | undefined>,
	}
	export function CreateStopTimecodeFormGroup() {
		return new FormGroup<StopTimecodeFormProperties>({
			LastFrameClippingBehavior: new FormControl<StopTimecodeLastFrameClippingBehavior | null | undefined>(undefined),
			Timecode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StopTimecodeLastFrameClippingBehavior { EXCLUDE_LAST_FRAME = 0, INCLUDE_LAST_FRAME = 1 }


	/** Settings for the action to set pause state of a channel. */
	export interface PauseStateScheduleActionSettings {

		/** Placeholder documentation for __listOfPipelinePauseStateSettings */
		Pipelines?: Array<PipelinePauseStateSettings>;
	}

	/** Settings for the action to set pause state of a channel. */
	export interface PauseStateScheduleActionSettingsFormProperties {
	}
	export function CreatePauseStateScheduleActionSettingsFormGroup() {
		return new FormGroup<PauseStateScheduleActionSettingsFormProperties>({
		});

	}


	/** Settings for pausing a pipeline. */
	export interface PipelinePauseStateSettings {

		/**
		 * Pipeline ID
		 * Required
		 */
		PipelineId: PipelinePauseStateSettingsPipelineId;
	}

	/** Settings for pausing a pipeline. */
	export interface PipelinePauseStateSettingsFormProperties {

		/**
		 * Pipeline ID
		 * Required
		 */
		PipelineId: FormControl<PipelinePauseStateSettingsPipelineId | null | undefined>,
	}
	export function CreatePipelinePauseStateSettingsFormGroup() {
		return new FormGroup<PipelinePauseStateSettingsFormProperties>({
			PipelineId: new FormControl<PipelinePauseStateSettingsPipelineId | null | undefined>(undefined, [Validators.required]),
		});

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

	/** Settings for a SCTE-35 return_to_network message. */
	export interface Scte35ReturnToNetworkScheduleActionSettingsFormProperties {

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SpliceEventId: FormControl<number | null | undefined>,
	}
	export function CreateScte35ReturnToNetworkScheduleActionSettingsFormGroup() {
		return new FormGroup<Scte35ReturnToNetworkScheduleActionSettingsFormProperties>({
			SpliceEventId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(4294967295)]),
		});

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

	/** Settings for a SCTE-35 splice_insert message. */
	export interface Scte35SpliceInsertScheduleActionSettingsFormProperties {

		/**
		 * Placeholder documentation for __longMin0Max8589934591
		 * Minimum: 0
		 * Maximum: 8589934591
		 */
		Duration: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SpliceEventId: FormControl<number | null | undefined>,
	}
	export function CreateScte35SpliceInsertScheduleActionSettingsFormGroup() {
		return new FormGroup<Scte35SpliceInsertScheduleActionSettingsFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(8589934591)]),
			SpliceEventId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(4294967295)]),
		});

	}


	/** Settings for a SCTE-35 time_signal. */
	export interface Scte35TimeSignalScheduleActionSettings {

		/**
		 * Placeholder documentation for __listOfScte35Descriptor
		 * Required
		 */
		Scte35Descriptors: Array<Scte35Descriptor>;
	}

	/** Settings for a SCTE-35 time_signal. */
	export interface Scte35TimeSignalScheduleActionSettingsFormProperties {
	}
	export function CreateScte35TimeSignalScheduleActionSettingsFormGroup() {
		return new FormGroup<Scte35TimeSignalScheduleActionSettingsFormProperties>({
		});

	}


	/** Holds one set of SCTE-35 Descriptor Settings. */
	export interface Scte35Descriptor {

		/**
		 * SCTE-35 Descriptor settings.
		 * Required
		 */
		Scte35DescriptorSettings: Scte35DescriptorSettings;
	}

	/** Holds one set of SCTE-35 Descriptor Settings. */
	export interface Scte35DescriptorFormProperties {
	}
	export function CreateScte35DescriptorFormGroup() {
		return new FormGroup<Scte35DescriptorFormProperties>({
		});

	}


	/** SCTE-35 Descriptor settings. */
	export interface Scte35DescriptorSettings {

		/**
		 * Corresponds to SCTE-35 segmentation_descriptor.
		 * Required
		 */
		SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor;
	}

	/** SCTE-35 Descriptor settings. */
	export interface Scte35DescriptorSettingsFormProperties {
	}
	export function CreateScte35DescriptorSettingsFormGroup() {
		return new FormGroup<Scte35DescriptorSettingsFormProperties>({
		});

	}


	/** Corresponds to SCTE-35 segmentation_descriptor. */
	export interface Scte35SegmentationDescriptor {

		/** Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element. */
		DeliveryRestrictions?: Scte35DeliveryRestrictions;

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

	/** Corresponds to SCTE-35 segmentation_descriptor. */
	export interface Scte35SegmentationDescriptorFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentNum: FormControl<number | null | undefined>,

		/**
		 * Corresponds to SCTE-35 segmentation_event_cancel_indicator. SEGMENTATION_EVENT_NOT_CANCELED corresponds to 0 in the SCTE-35 specification and indicates that this is an insertion request. SEGMENTATION_EVENT_CANCELED corresponds to 1 in the SCTE-35 specification and indicates that this is a cancelation request, in which case complete this field and the existing event ID to cancel.
		 * Required
		 */
		SegmentationCancelIndicator: FormControl<Scte35SegmentationDescriptorSegmentationCancelIndicator | null | undefined>,

		/**
		 * Placeholder documentation for __longMin0Max1099511627775
		 * Minimum: 0
		 * Maximum: 1099511627775
		 */
		SegmentationDuration: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __longMin0Max4294967295
		 * Required
		 * Minimum: 0
		 * Maximum: 4294967295
		 */
		SegmentationEventId: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentationTypeId: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		SegmentationUpid: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentationUpidType: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SegmentsExpected: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SubSegmentNum: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		SubSegmentsExpected: FormControl<number | null | undefined>,
	}
	export function CreateScte35SegmentationDescriptorFormGroup() {
		return new FormGroup<Scte35SegmentationDescriptorFormProperties>({
			SegmentNum: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			SegmentationCancelIndicator: new FormControl<Scte35SegmentationDescriptorSegmentationCancelIndicator | null | undefined>(undefined, [Validators.required]),
			SegmentationDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1099511627775)]),
			SegmentationEventId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(4294967295)]),
			SegmentationTypeId: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			SegmentationUpid: new FormControl<string | null | undefined>(undefined),
			SegmentationUpidType: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			SegmentsExpected: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			SubSegmentNum: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			SubSegmentsExpected: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
		});

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

	/** Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element. */
	export interface Scte35DeliveryRestrictionsFormProperties {

		/**
		 * Corresponds to the archive_allowed parameter. A value of ARCHIVE_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.
		 * Required
		 */
		ArchiveAllowedFlag: FormControl<Scte35DeliveryRestrictionsArchiveAllowedFlag | null | undefined>,

		/**
		 * Corresponds to the device_restrictions parameter in a segmentation_descriptor. If you include one of the "restriction" flags then you must include all four of them.
		 * Required
		 */
		DeviceRestrictions: FormControl<Scte35DeliveryRestrictionsDeviceRestrictions | null | undefined>,

		/**
		 * Corresponds to the no_regional_blackout_flag parameter. A value of REGIONAL_BLACKOUT corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.
		 * Required
		 */
		NoRegionalBlackoutFlag: FormControl<Scte35DeliveryRestrictionsNoRegionalBlackoutFlag | null | undefined>,

		/**
		 * Corresponds to the web_delivery_allowed_flag parameter. A value of WEB_DELIVERY_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.
		 * Required
		 */
		WebDeliveryAllowedFlag: FormControl<Scte35DeliveryRestrictionsWebDeliveryAllowedFlag | null | undefined>,
	}
	export function CreateScte35DeliveryRestrictionsFormGroup() {
		return new FormGroup<Scte35DeliveryRestrictionsFormProperties>({
			ArchiveAllowedFlag: new FormControl<Scte35DeliveryRestrictionsArchiveAllowedFlag | null | undefined>(undefined, [Validators.required]),
			DeviceRestrictions: new FormControl<Scte35DeliveryRestrictionsDeviceRestrictions | null | undefined>(undefined, [Validators.required]),
			NoRegionalBlackoutFlag: new FormControl<Scte35DeliveryRestrictionsNoRegionalBlackoutFlag | null | undefined>(undefined, [Validators.required]),
			WebDeliveryAllowedFlag: new FormControl<Scte35DeliveryRestrictionsWebDeliveryAllowedFlag | null | undefined>(undefined, [Validators.required]),
		});

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

	/** Settings for the action to activate a static image. */
	export interface StaticImageActivateScheduleActionSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Duration: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeIn: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeOut: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Height: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ImageX: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ImageY: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		Layer: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		Opacity: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Width: FormControl<number | null | undefined>,
	}
	export function CreateStaticImageActivateScheduleActionSettingsFormGroup() {
		return new FormGroup<StaticImageActivateScheduleActionSettingsFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FadeIn: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FadeOut: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Height: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ImageX: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ImageY: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Layer: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(7)]),
			Opacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			Width: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

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

	/** Input Location */
	export interface InputLocationFormProperties {

		/** Placeholder documentation for __string */
		PasswordParam: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Uri: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateInputLocationFormGroup() {
		return new FormGroup<InputLocationFormProperties>({
			PasswordParam: new FormControl<string | null | undefined>(undefined),
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Settings for the action to deactivate the image in a specific layer. */
	export interface StaticImageDeactivateScheduleActionSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FadeOut: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		Layer: FormControl<number | null | undefined>,
	}
	export function CreateStaticImageDeactivateScheduleActionSettingsFormGroup() {
		return new FormGroup<StaticImageDeactivateScheduleActionSettingsFormProperties>({
			FadeOut: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Layer: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(7)]),
		});

	}


	/** Settings to specify when an action should occur. Only one of the options must be selected. */
	export interface ScheduleActionStartSettings {

		/** Start time for the action. */
		FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;

		/** Settings to specify if an action follows another. */
		FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;

		/** Settings to configure an action so that it occurs as soon as possible. */
		ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;
	}

	/** Settings to specify when an action should occur. Only one of the options must be selected. */
	export interface ScheduleActionStartSettingsFormProperties {
	}
	export function CreateScheduleActionStartSettingsFormGroup() {
		return new FormGroup<ScheduleActionStartSettingsFormProperties>({
		});

	}


	/** Start time for the action. */
	export interface FixedModeScheduleActionStartSettings {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Time: string;
	}

	/** Start time for the action. */
	export interface FixedModeScheduleActionStartSettingsFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Time: FormControl<string | null | undefined>,
	}
	export function CreateFixedModeScheduleActionStartSettingsFormGroup() {
		return new FormGroup<FixedModeScheduleActionStartSettingsFormProperties>({
			Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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

	/** Settings to specify if an action follows another. */
	export interface FollowModeScheduleActionStartSettingsFormProperties {

		/**
		 * Follow reference point.
		 * Required
		 */
		FollowPoint: FormControl<FollowModeScheduleActionStartSettingsFollowPoint | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		ReferenceActionName: FormControl<string | null | undefined>,
	}
	export function CreateFollowModeScheduleActionStartSettingsFormGroup() {
		return new FormGroup<FollowModeScheduleActionStartSettingsFormProperties>({
			FollowPoint: new FormControl<FollowModeScheduleActionStartSettingsFollowPoint | null | undefined>(undefined, [Validators.required]),
			ReferenceActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FollowModeScheduleActionStartSettingsFollowPoint { END = 0, START = 1 }


	/** Settings to configure an action so that it occurs as soon as possible. */
	export interface ImmediateModeScheduleActionStartSettings {
	}

	/** Settings to configure an action so that it occurs as soon as possible. */
	export interface ImmediateModeScheduleActionStartSettingsFormProperties {
	}
	export function CreateImmediateModeScheduleActionStartSettingsFormGroup() {
		return new FormGroup<ImmediateModeScheduleActionStartSettingsFormProperties>({
		});

	}


	/** List of actions that have been deleted from the schedule. */
	export interface BatchScheduleActionDeleteResult {

		/**
		 * Placeholder documentation for __listOfScheduleAction
		 * Required
		 */
		ScheduleActions: Array<ScheduleAction>;
	}

	/** List of actions that have been deleted from the schedule. */
	export interface BatchScheduleActionDeleteResultFormProperties {
	}
	export function CreateBatchScheduleActionDeleteResultFormGroup() {
		return new FormGroup<BatchScheduleActionDeleteResultFormProperties>({
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

	export interface UnprocessableEntityException {
	}
	export interface UnprocessableEntityExceptionFormProperties {
	}
	export function CreateUnprocessableEntityExceptionFormGroup() {
		return new FormGroup<UnprocessableEntityExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
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

	export interface BadGatewayException {
	}
	export interface BadGatewayExceptionFormProperties {
	}
	export function CreateBadGatewayExceptionFormGroup() {
		return new FormGroup<BadGatewayExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface GatewayTimeoutException {
	}
	export interface GatewayTimeoutExceptionFormProperties {
	}
	export function CreateGatewayTimeoutExceptionFormGroup() {
		return new FormGroup<GatewayTimeoutExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}


	/** Placeholder documentation for CreateChannelResponse */
	export interface CreateChannelResponse {

		/** Placeholder documentation for Channel */
		Channel?: Channel;
	}

	/** Placeholder documentation for CreateChannelResponse */
	export interface CreateChannelResponseFormProperties {
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
		});

	}


	/** Placeholder documentation for Channel */
	export interface Channel {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for Channel */
	export interface ChannelFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** The log level the user wants for their channel. */
		LogLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for ChannelState */
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}

	export enum ChannelChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }


	/** Placeholder documentation for OutputDestination */
	export interface OutputDestination {

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfMediaPackageOutputDestinationSettings */
		MediaPackageSettings?: Array<MediaPackageOutputDestinationSettings>;

		/** Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex */
		MultiplexSettings?: MultiplexProgramChannelDestinationSettings;

		/** Placeholder documentation for __listOfOutputDestinationSettings */
		Settings?: Array<OutputDestinationSettings>;
	}

	/** Placeholder documentation for OutputDestination */
	export interface OutputDestinationFormProperties {

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateOutputDestinationFormGroup() {
		return new FormGroup<OutputDestinationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MediaPackage Output Destination Settings */
	export interface MediaPackageOutputDestinationSettings {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		ChannelId?: string | null;
	}

	/** MediaPackage Output Destination Settings */
	export interface MediaPackageOutputDestinationSettingsFormProperties {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		ChannelId: FormControl<string | null | undefined>,
	}
	export function CreateMediaPackageOutputDestinationSettingsFormGroup() {
		return new FormGroup<MediaPackageOutputDestinationSettingsFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

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

	/** Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex */
	export interface MultiplexProgramChannelDestinationSettingsFormProperties {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		MultiplexId: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		ProgramName: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexProgramChannelDestinationSettingsFormGroup() {
		return new FormGroup<MultiplexProgramChannelDestinationSettingsFormProperties>({
			MultiplexId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			ProgramName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

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

	/** Placeholder documentation for OutputDestinationSettings */
	export interface OutputDestinationSettingsFormProperties {

		/** Placeholder documentation for __string */
		PasswordParam: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		StreamName: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Url: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateOutputDestinationSettingsFormGroup() {
		return new FormGroup<OutputDestinationSettingsFormProperties>({
			PasswordParam: new FormControl<string | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ChannelEgressEndpoint */
	export interface ChannelEgressEndpoint {

		/** Placeholder documentation for __string */
		SourceIp?: string | null;
	}

	/** Placeholder documentation for ChannelEgressEndpoint */
	export interface ChannelEgressEndpointFormProperties {

		/** Placeholder documentation for __string */
		SourceIp: FormControl<string | null | undefined>,
	}
	export function CreateChannelEgressEndpointFormGroup() {
		return new FormGroup<ChannelEgressEndpointFormProperties>({
			SourceIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encoder Settings */
	export interface EncoderSettings {

		/**
		 * Placeholder documentation for __listOfAudioDescription
		 * Required
		 */
		AudioDescriptions: Array<AudioDescription>;

		/** Avail Blanking */
		AvailBlanking?: AvailBlanking;

		/** Avail Configuration */
		AvailConfiguration?: AvailConfiguration;

		/** Blackout Slate */
		BlackoutSlate?: BlackoutSlate;

		/** Placeholder documentation for __listOfCaptionDescription */
		CaptionDescriptions?: Array<CaptionDescription>;

		/** Global Configuration */
		GlobalConfiguration?: GlobalConfiguration;

		/** Nielsen Configuration */
		NielsenConfiguration?: NielsenConfiguration;

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

	/** Encoder Settings */
	export interface EncoderSettingsFormProperties {
	}
	export function CreateEncoderSettingsFormGroup() {
		return new FormGroup<EncoderSettingsFormProperties>({
		});

	}


	/** Audio Description */
	export interface AudioDescription {

		/** Audio Normalization Settings */
		AudioNormalizationSettings?: AudioNormalizationSettings;

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
		CodecSettings?: AudioCodecSettings;

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
		RemixSettings?: RemixSettings;

		/** Placeholder documentation for __string */
		StreamName?: string | null;
	}

	/** Audio Description */
	export interface AudioDescriptionFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		AudioSelectorName: FormControl<string | null | undefined>,

		/** Audio Type */
		AudioType: FormControl<AudioDescriptionAudioType | null | undefined>,

		/** Audio Description Audio Type Control */
		AudioTypeControl: FormControl<AudioDescriptionAudioTypeControl | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin3Max3
		 * Max length: 3
		 * Min length: 3
		 */
		LanguageCode: FormControl<string | null | undefined>,

		/** Audio Description Language Code Control */
		LanguageCodeControl: FormControl<AudioDescriptionAudioTypeControl | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateAudioDescriptionFormGroup() {
		return new FormGroup<AudioDescriptionFormProperties>({
			AudioSelectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AudioType: new FormControl<AudioDescriptionAudioType | null | undefined>(undefined),
			AudioTypeControl: new FormControl<AudioDescriptionAudioTypeControl | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			LanguageCodeControl: new FormControl<AudioDescriptionAudioTypeControl | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Audio Normalization Settings */
	export interface AudioNormalizationSettingsFormProperties {

		/** Audio Normalization Algorithm */
		Algorithm: FormControl<AudioNormalizationSettingsAlgorithm | null | undefined>,

		/** Audio Normalization Algorithm Control */
		AlgorithmControl: FormControl<AudioNormalizationSettingsAlgorithmControl | null | undefined>,

		/** Placeholder documentation for __doubleMinNegative59Max0 */
		TargetLkfs: FormControl<number | null | undefined>,
	}
	export function CreateAudioNormalizationSettingsFormGroup() {
		return new FormGroup<AudioNormalizationSettingsFormProperties>({
			Algorithm: new FormControl<AudioNormalizationSettingsAlgorithm | null | undefined>(undefined),
			AlgorithmControl: new FormControl<AudioNormalizationSettingsAlgorithmControl | null | undefined>(undefined),
			TargetLkfs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AudioNormalizationSettingsAlgorithm { ITU_1770_1 = 0, ITU_1770_2 = 1 }

	export enum AudioNormalizationSettingsAlgorithmControl { CORRECT_AUDIO = 0 }

	export enum AudioDescriptionAudioType { CLEAN_EFFECTS = 0, HEARING_IMPAIRED = 1, UNDEFINED = 2, VISUAL_IMPAIRED_COMMENTARY = 3 }

	export enum AudioDescriptionAudioTypeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Audio Codec Settings */
	export interface AudioCodecSettings {

		/** Aac Settings */
		AacSettings?: AacSettings;

		/** Ac3 Settings */
		Ac3Settings?: Ac3Settings;

		/** Eac3 Settings */
		Eac3Settings?: Eac3Settings;

		/** Mp2 Settings */
		Mp2Settings?: Mp2Settings;

		/** Pass Through Settings */
		PassThroughSettings?: PassThroughSettings;
	}

	/** Audio Codec Settings */
	export interface AudioCodecSettingsFormProperties {
	}
	export function CreateAudioCodecSettingsFormGroup() {
		return new FormGroup<AudioCodecSettingsFormProperties>({
		});

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

	/** Aac Settings */
	export interface AacSettingsFormProperties {

		/** Placeholder documentation for __double */
		Bitrate: FormControl<number | null | undefined>,

		/** Aac Coding Mode */
		CodingMode: FormControl<AacSettingsCodingMode | null | undefined>,

		/** Aac Input Type */
		InputType: FormControl<AacSettingsInputType | null | undefined>,

		/** Aac Profile */
		Profile: FormControl<AacSettingsProfile | null | undefined>,

		/** Aac Rate Control Mode */
		RateControlMode: FormControl<AacSettingsRateControlMode | null | undefined>,

		/** Aac Raw Format */
		RawFormat: FormControl<AacSettingsRawFormat | null | undefined>,

		/** Placeholder documentation for __double */
		SampleRate: FormControl<number | null | undefined>,

		/** Aac Spec */
		Spec: FormControl<AacSettingsSpec | null | undefined>,

		/** Aac Vbr Quality */
		VbrQuality: FormControl<AacSettingsVbrQuality | null | undefined>,
	}
	export function CreateAacSettingsFormGroup() {
		return new FormGroup<AacSettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodingMode: new FormControl<AacSettingsCodingMode | null | undefined>(undefined),
			InputType: new FormControl<AacSettingsInputType | null | undefined>(undefined),
			Profile: new FormControl<AacSettingsProfile | null | undefined>(undefined),
			RateControlMode: new FormControl<AacSettingsRateControlMode | null | undefined>(undefined),
			RawFormat: new FormControl<AacSettingsRawFormat | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			Spec: new FormControl<AacSettingsSpec | null | undefined>(undefined),
			VbrQuality: new FormControl<AacSettingsVbrQuality | null | undefined>(undefined),
		});

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

	/** Ac3 Settings */
	export interface Ac3SettingsFormProperties {

		/** Placeholder documentation for __double */
		Bitrate: FormControl<number | null | undefined>,

		/** Ac3 Bitstream Mode */
		BitstreamMode: FormControl<Ac3SettingsBitstreamMode | null | undefined>,

		/** Ac3 Coding Mode */
		CodingMode: FormControl<Ac3SettingsCodingMode | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max31
		 * Minimum: 1
		 * Maximum: 31
		 */
		Dialnorm: FormControl<number | null | undefined>,

		/** Ac3 Drc Profile */
		DrcProfile: FormControl<Ac3SettingsDrcProfile | null | undefined>,

		/** Ac3 Lfe Filter */
		LfeFilter: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** Ac3 Metadata Control */
		MetadataControl: FormControl<AudioDescriptionAudioTypeControl | null | undefined>,
	}
	export function CreateAc3SettingsFormGroup() {
		return new FormGroup<Ac3SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BitstreamMode: new FormControl<Ac3SettingsBitstreamMode | null | undefined>(undefined),
			CodingMode: new FormControl<Ac3SettingsCodingMode | null | undefined>(undefined),
			Dialnorm: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(31)]),
			DrcProfile: new FormControl<Ac3SettingsDrcProfile | null | undefined>(undefined),
			LfeFilter: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			MetadataControl: new FormControl<AudioDescriptionAudioTypeControl | null | undefined>(undefined),
		});

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

	/** Eac3 Settings */
	export interface Eac3SettingsFormProperties {

		/** Eac3 Attenuation Control */
		AttenuationControl: FormControl<Eac3SettingsAttenuationControl | null | undefined>,

		/** Placeholder documentation for __double */
		Bitrate: FormControl<number | null | undefined>,

		/** Eac3 Bitstream Mode */
		BitstreamMode: FormControl<Eac3SettingsBitstreamMode | null | undefined>,

		/** Eac3 Coding Mode */
		CodingMode: FormControl<Eac3SettingsCodingMode | null | undefined>,

		/** Eac3 Dc Filter */
		DcFilter: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max31
		 * Minimum: 1
		 * Maximum: 31
		 */
		Dialnorm: FormControl<number | null | undefined>,

		/** Eac3 Drc Line */
		DrcLine: FormControl<Eac3SettingsDrcLine | null | undefined>,

		/** Eac3 Drc Rf */
		DrcRf: FormControl<Eac3SettingsDrcLine | null | undefined>,

		/** Eac3 Lfe Control */
		LfeControl: FormControl<Eac3SettingsLfeControl | null | undefined>,

		/** Eac3 Lfe Filter */
		LfeFilter: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** Placeholder documentation for __double */
		LoRoCenterMixLevel: FormControl<number | null | undefined>,

		/** Placeholder documentation for __double */
		LoRoSurroundMixLevel: FormControl<number | null | undefined>,

		/** Placeholder documentation for __double */
		LtRtCenterMixLevel: FormControl<number | null | undefined>,

		/** Placeholder documentation for __double */
		LtRtSurroundMixLevel: FormControl<number | null | undefined>,

		/** Eac3 Metadata Control */
		MetadataControl: FormControl<AudioDescriptionAudioTypeControl | null | undefined>,

		/** Eac3 Passthrough Control */
		PassthroughControl: FormControl<Eac3SettingsPassthroughControl | null | undefined>,

		/** Eac3 Phase Control */
		PhaseControl: FormControl<Eac3SettingsPhaseControl | null | undefined>,

		/** Eac3 Stereo Downmix */
		StereoDownmix: FormControl<Eac3SettingsStereoDownmix | null | undefined>,

		/** Eac3 Surround Ex Mode */
		SurroundExMode: FormControl<Eac3SettingsSurroundExMode | null | undefined>,

		/** Eac3 Surround Mode */
		SurroundMode: FormControl<Eac3SettingsSurroundExMode | null | undefined>,
	}
	export function CreateEac3SettingsFormGroup() {
		return new FormGroup<Eac3SettingsFormProperties>({
			AttenuationControl: new FormControl<Eac3SettingsAttenuationControl | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BitstreamMode: new FormControl<Eac3SettingsBitstreamMode | null | undefined>(undefined),
			CodingMode: new FormControl<Eac3SettingsCodingMode | null | undefined>(undefined),
			DcFilter: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			Dialnorm: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(31)]),
			DrcLine: new FormControl<Eac3SettingsDrcLine | null | undefined>(undefined),
			DrcRf: new FormControl<Eac3SettingsDrcLine | null | undefined>(undefined),
			LfeControl: new FormControl<Eac3SettingsLfeControl | null | undefined>(undefined),
			LfeFilter: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			LoRoCenterMixLevel: new FormControl<number | null | undefined>(undefined),
			LoRoSurroundMixLevel: new FormControl<number | null | undefined>(undefined),
			LtRtCenterMixLevel: new FormControl<number | null | undefined>(undefined),
			LtRtSurroundMixLevel: new FormControl<number | null | undefined>(undefined),
			MetadataControl: new FormControl<AudioDescriptionAudioTypeControl | null | undefined>(undefined),
			PassthroughControl: new FormControl<Eac3SettingsPassthroughControl | null | undefined>(undefined),
			PhaseControl: new FormControl<Eac3SettingsPhaseControl | null | undefined>(undefined),
			StereoDownmix: new FormControl<Eac3SettingsStereoDownmix | null | undefined>(undefined),
			SurroundExMode: new FormControl<Eac3SettingsSurroundExMode | null | undefined>(undefined),
			SurroundMode: new FormControl<Eac3SettingsSurroundExMode | null | undefined>(undefined),
		});

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

	/** Mp2 Settings */
	export interface Mp2SettingsFormProperties {

		/** Placeholder documentation for __double */
		Bitrate: FormControl<number | null | undefined>,

		/** Mp2 Coding Mode */
		CodingMode: FormControl<Mp2SettingsCodingMode | null | undefined>,

		/** Placeholder documentation for __double */
		SampleRate: FormControl<number | null | undefined>,
	}
	export function CreateMp2SettingsFormGroup() {
		return new FormGroup<Mp2SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodingMode: new FormControl<Mp2SettingsCodingMode | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Mp2SettingsCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1 }


	/** Pass Through Settings */
	export interface PassThroughSettings {
	}

	/** Pass Through Settings */
	export interface PassThroughSettingsFormProperties {
	}
	export function CreatePassThroughSettingsFormGroup() {
		return new FormGroup<PassThroughSettingsFormProperties>({
		});

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

	/** Remix Settings */
	export interface RemixSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1Max16
		 * Minimum: 1
		 * Maximum: 16
		 */
		ChannelsIn: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max8
		 * Minimum: 1
		 * Maximum: 8
		 */
		ChannelsOut: FormControl<number | null | undefined>,
	}
	export function CreateRemixSettingsFormGroup() {
		return new FormGroup<RemixSettingsFormProperties>({
			ChannelsIn: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(16)]),
			ChannelsOut: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(8)]),
		});

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

	/** Audio Channel Mapping */
	export interface AudioChannelMappingFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Required
		 * Minimum: 0
		 * Maximum: 7
		 */
		OutputChannel: FormControl<number | null | undefined>,
	}
	export function CreateAudioChannelMappingFormGroup() {
		return new FormGroup<AudioChannelMappingFormProperties>({
			OutputChannel: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(7)]),
		});

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

	/** Input Channel Level */
	export interface InputChannelLevelFormProperties {

		/**
		 * Placeholder documentation for __integerMinNegative60Max6
		 * Required
		 * Minimum: -60
		 * Maximum: 6
		 */
		Gain: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Required
		 * Minimum: 0
		 * Maximum: 15
		 */
		InputChannel: FormControl<number | null | undefined>,
	}
	export function CreateInputChannelLevelFormGroup() {
		return new FormGroup<InputChannelLevelFormProperties>({
			Gain: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-60), Validators.max(6)]),
			InputChannel: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(15)]),
		});

	}


	/** Avail Blanking */
	export interface AvailBlanking {

		/** Input Location */
		AvailBlankingImage?: InputLocation;

		/** Avail Blanking State */
		State?: Ac3SettingsLfeFilter | null;
	}

	/** Avail Blanking */
	export interface AvailBlankingFormProperties {

		/** Avail Blanking State */
		State: FormControl<Ac3SettingsLfeFilter | null | undefined>,
	}
	export function CreateAvailBlankingFormGroup() {
		return new FormGroup<AvailBlankingFormProperties>({
			State: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
		});

	}


	/** Avail Configuration */
	export interface AvailConfiguration {

		/** Avail Settings */
		AvailSettings?: AvailSettings;
	}

	/** Avail Configuration */
	export interface AvailConfigurationFormProperties {
	}
	export function CreateAvailConfigurationFormGroup() {
		return new FormGroup<AvailConfigurationFormProperties>({
		});

	}


	/** Avail Settings */
	export interface AvailSettings {

		/** Scte35 Splice Insert */
		Scte35SpliceInsert?: Scte35SpliceInsert;

		/** Scte35 Time Signal Apos */
		Scte35TimeSignalApos?: Scte35TimeSignalApos;
	}

	/** Avail Settings */
	export interface AvailSettingsFormProperties {
	}
	export function CreateAvailSettingsFormGroup() {
		return new FormGroup<AvailSettingsFormProperties>({
		});

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

	/** Scte35 Splice Insert */
	export interface Scte35SpliceInsertFormProperties {

		/**
		 * Placeholder documentation for __integerMinNegative1000Max1000
		 * Minimum: -1000
		 * Maximum: 1000
		 */
		AdAvailOffset: FormControl<number | null | undefined>,

		/** Scte35 Splice Insert No Regional Blackout Behavior */
		NoRegionalBlackoutFlag: FormControl<Scte35SpliceInsertNoRegionalBlackoutFlag | null | undefined>,

		/** Scte35 Splice Insert Web Delivery Allowed Behavior */
		WebDeliveryAllowedFlag: FormControl<Scte35SpliceInsertNoRegionalBlackoutFlag | null | undefined>,
	}
	export function CreateScte35SpliceInsertFormGroup() {
		return new FormGroup<Scte35SpliceInsertFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000), Validators.max(1000)]),
			NoRegionalBlackoutFlag: new FormControl<Scte35SpliceInsertNoRegionalBlackoutFlag | null | undefined>(undefined),
			WebDeliveryAllowedFlag: new FormControl<Scte35SpliceInsertNoRegionalBlackoutFlag | null | undefined>(undefined),
		});

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

	/** Scte35 Time Signal Apos */
	export interface Scte35TimeSignalAposFormProperties {

		/**
		 * Placeholder documentation for __integerMinNegative1000Max1000
		 * Minimum: -1000
		 * Maximum: 1000
		 */
		AdAvailOffset: FormControl<number | null | undefined>,

		/** Scte35 Apos No Regional Blackout Behavior */
		NoRegionalBlackoutFlag: FormControl<Scte35SpliceInsertNoRegionalBlackoutFlag | null | undefined>,

		/** Scte35 Apos Web Delivery Allowed Behavior */
		WebDeliveryAllowedFlag: FormControl<Scte35SpliceInsertNoRegionalBlackoutFlag | null | undefined>,
	}
	export function CreateScte35TimeSignalAposFormGroup() {
		return new FormGroup<Scte35TimeSignalAposFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000), Validators.max(1000)]),
			NoRegionalBlackoutFlag: new FormControl<Scte35SpliceInsertNoRegionalBlackoutFlag | null | undefined>(undefined),
			WebDeliveryAllowedFlag: new FormControl<Scte35SpliceInsertNoRegionalBlackoutFlag | null | undefined>(undefined),
		});

	}


	/** Blackout Slate */
	export interface BlackoutSlate {

		/** Input Location */
		BlackoutSlateImage?: InputLocation;

		/** Blackout Slate Network End Blackout */
		NetworkEndBlackout?: Ac3SettingsLfeFilter | null;

		/** Input Location */
		NetworkEndBlackoutImage?: InputLocation;

		/**
		 * Placeholder documentation for __stringMin34Max34
		 * Max length: 34
		 * Min length: 34
		 */
		NetworkId?: string | null;

		/** Blackout Slate State */
		State?: Ac3SettingsLfeFilter | null;
	}

	/** Blackout Slate */
	export interface BlackoutSlateFormProperties {

		/** Blackout Slate Network End Blackout */
		NetworkEndBlackout: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin34Max34
		 * Max length: 34
		 * Min length: 34
		 */
		NetworkId: FormControl<string | null | undefined>,

		/** Blackout Slate State */
		State: FormControl<Ac3SettingsLfeFilter | null | undefined>,
	}
	export function CreateBlackoutSlateFormGroup() {
		return new FormGroup<BlackoutSlateFormProperties>({
			NetworkEndBlackout: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			NetworkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34)]),
			State: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
		});

	}


	/** Caption Description */
	export interface CaptionDescription {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		CaptionSelectorName: string;

		/** Caption Destination Settings */
		DestinationSettings?: CaptionDestinationSettings;

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

	/** Caption Description */
	export interface CaptionDescriptionFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		CaptionSelectorName: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		LanguageCode: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		LanguageDescription: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCaptionDescriptionFormGroup() {
		return new FormGroup<CaptionDescriptionFormProperties>({
			CaptionSelectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			LanguageDescription: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Caption Destination Settings */
	export interface CaptionDestinationSettings {

		/** Arib Destination Settings */
		AribDestinationSettings?: AribDestinationSettings;

		/** Burn In Destination Settings */
		BurnInDestinationSettings?: BurnInDestinationSettings;

		/** Dvb Sub Destination Settings */
		DvbSubDestinationSettings?: DvbSubDestinationSettings;

		/** Embedded Destination Settings */
		EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

		/** Embedded Plus Scte20 Destination Settings */
		EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;

		/** Rtmp Caption Info Destination Settings */
		RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;

		/** Scte20 Plus Embedded Destination Settings */
		Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;

		/** Scte27 Destination Settings */
		Scte27DestinationSettings?: Scte27DestinationSettings;

		/** Smpte Tt Destination Settings */
		SmpteTtDestinationSettings?: SmpteTtDestinationSettings;

		/** Teletext Destination Settings */
		TeletextDestinationSettings?: TeletextDestinationSettings;

		/** Ttml Destination Settings */
		TtmlDestinationSettings?: TtmlDestinationSettings;

		/** Webvtt Destination Settings */
		WebvttDestinationSettings?: WebvttDestinationSettings;
	}

	/** Caption Destination Settings */
	export interface CaptionDestinationSettingsFormProperties {
	}
	export function CreateCaptionDestinationSettingsFormGroup() {
		return new FormGroup<CaptionDestinationSettingsFormProperties>({
		});

	}


	/** Arib Destination Settings */
	export interface AribDestinationSettings {
	}

	/** Arib Destination Settings */
	export interface AribDestinationSettingsFormProperties {
	}
	export function CreateAribDestinationSettingsFormGroup() {
		return new FormGroup<AribDestinationSettingsFormProperties>({
		});

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
		Font?: InputLocation;

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

	/** Burn In Destination Settings */
	export interface BurnInDestinationSettingsFormProperties {

		/** Burn In Alignment */
		Alignment: FormControl<BurnInDestinationSettingsAlignment | null | undefined>,

		/** Burn In Background Color */
		BackgroundColor: FormControl<BurnInDestinationSettingsBackgroundColor | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		BackgroundOpacity: FormControl<number | null | undefined>,

		/** Burn In Font Color */
		FontColor: FormControl<BurnInDestinationSettingsFontColor | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		FontOpacity: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin96Max600
		 * Minimum: 96
		 * Maximum: 600
		 */
		FontResolution: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		FontSize: FormControl<string | null | undefined>,

		/** Burn In Outline Color */
		OutlineColor: FormControl<BurnInDestinationSettingsFontColor | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max10
		 * Minimum: 0
		 * Maximum: 10
		 */
		OutlineSize: FormControl<number | null | undefined>,

		/** Burn In Shadow Color */
		ShadowColor: FormControl<BurnInDestinationSettingsBackgroundColor | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		ShadowOpacity: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ShadowXOffset: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ShadowYOffset: FormControl<number | null | undefined>,

		/** Burn In Teletext Grid Control */
		TeletextGridControl: FormControl<BurnInDestinationSettingsTeletextGridControl | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		XPosition: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		YPosition: FormControl<number | null | undefined>,
	}
	export function CreateBurnInDestinationSettingsFormGroup() {
		return new FormGroup<BurnInDestinationSettingsFormProperties>({
			Alignment: new FormControl<BurnInDestinationSettingsAlignment | null | undefined>(undefined),
			BackgroundColor: new FormControl<BurnInDestinationSettingsBackgroundColor | null | undefined>(undefined),
			BackgroundOpacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			FontColor: new FormControl<BurnInDestinationSettingsFontColor | null | undefined>(undefined),
			FontOpacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			FontResolution: new FormControl<number | null | undefined>(undefined, [Validators.min(96), Validators.max(600)]),
			FontSize: new FormControl<string | null | undefined>(undefined),
			OutlineColor: new FormControl<BurnInDestinationSettingsFontColor | null | undefined>(undefined),
			OutlineSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10)]),
			ShadowColor: new FormControl<BurnInDestinationSettingsBackgroundColor | null | undefined>(undefined),
			ShadowOpacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			ShadowXOffset: new FormControl<number | null | undefined>(undefined),
			ShadowYOffset: new FormControl<number | null | undefined>(undefined),
			TeletextGridControl: new FormControl<BurnInDestinationSettingsTeletextGridControl | null | undefined>(undefined),
			XPosition: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			YPosition: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

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
		Font?: InputLocation;

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

	/** Dvb Sub Destination Settings */
	export interface DvbSubDestinationSettingsFormProperties {

		/** Dvb Sub Destination Alignment */
		Alignment: FormControl<BurnInDestinationSettingsAlignment | null | undefined>,

		/** Dvb Sub Destination Background Color */
		BackgroundColor: FormControl<BurnInDestinationSettingsBackgroundColor | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		BackgroundOpacity: FormControl<number | null | undefined>,

		/** Dvb Sub Destination Font Color */
		FontColor: FormControl<BurnInDestinationSettingsFontColor | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		FontOpacity: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin96Max600
		 * Minimum: 96
		 * Maximum: 600
		 */
		FontResolution: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		FontSize: FormControl<string | null | undefined>,

		/** Dvb Sub Destination Outline Color */
		OutlineColor: FormControl<BurnInDestinationSettingsFontColor | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max10
		 * Minimum: 0
		 * Maximum: 10
		 */
		OutlineSize: FormControl<number | null | undefined>,

		/** Dvb Sub Destination Shadow Color */
		ShadowColor: FormControl<BurnInDestinationSettingsBackgroundColor | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max255
		 * Minimum: 0
		 * Maximum: 255
		 */
		ShadowOpacity: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ShadowXOffset: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ShadowYOffset: FormControl<number | null | undefined>,

		/** Dvb Sub Destination Teletext Grid Control */
		TeletextGridControl: FormControl<BurnInDestinationSettingsTeletextGridControl | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		XPosition: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		YPosition: FormControl<number | null | undefined>,
	}
	export function CreateDvbSubDestinationSettingsFormGroup() {
		return new FormGroup<DvbSubDestinationSettingsFormProperties>({
			Alignment: new FormControl<BurnInDestinationSettingsAlignment | null | undefined>(undefined),
			BackgroundColor: new FormControl<BurnInDestinationSettingsBackgroundColor | null | undefined>(undefined),
			BackgroundOpacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			FontColor: new FormControl<BurnInDestinationSettingsFontColor | null | undefined>(undefined),
			FontOpacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			FontResolution: new FormControl<number | null | undefined>(undefined, [Validators.min(96), Validators.max(600)]),
			FontSize: new FormControl<string | null | undefined>(undefined),
			OutlineColor: new FormControl<BurnInDestinationSettingsFontColor | null | undefined>(undefined),
			OutlineSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10)]),
			ShadowColor: new FormControl<BurnInDestinationSettingsBackgroundColor | null | undefined>(undefined),
			ShadowOpacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			ShadowXOffset: new FormControl<number | null | undefined>(undefined),
			ShadowYOffset: new FormControl<number | null | undefined>(undefined),
			TeletextGridControl: new FormControl<BurnInDestinationSettingsTeletextGridControl | null | undefined>(undefined),
			XPosition: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			YPosition: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Embedded Destination Settings */
	export interface EmbeddedDestinationSettings {
	}

	/** Embedded Destination Settings */
	export interface EmbeddedDestinationSettingsFormProperties {
	}
	export function CreateEmbeddedDestinationSettingsFormGroup() {
		return new FormGroup<EmbeddedDestinationSettingsFormProperties>({
		});

	}


	/** Embedded Plus Scte20 Destination Settings */
	export interface EmbeddedPlusScte20DestinationSettings {
	}

	/** Embedded Plus Scte20 Destination Settings */
	export interface EmbeddedPlusScte20DestinationSettingsFormProperties {
	}
	export function CreateEmbeddedPlusScte20DestinationSettingsFormGroup() {
		return new FormGroup<EmbeddedPlusScte20DestinationSettingsFormProperties>({
		});

	}


	/** Rtmp Caption Info Destination Settings */
	export interface RtmpCaptionInfoDestinationSettings {
	}

	/** Rtmp Caption Info Destination Settings */
	export interface RtmpCaptionInfoDestinationSettingsFormProperties {
	}
	export function CreateRtmpCaptionInfoDestinationSettingsFormGroup() {
		return new FormGroup<RtmpCaptionInfoDestinationSettingsFormProperties>({
		});

	}


	/** Scte20 Plus Embedded Destination Settings */
	export interface Scte20PlusEmbeddedDestinationSettings {
	}

	/** Scte20 Plus Embedded Destination Settings */
	export interface Scte20PlusEmbeddedDestinationSettingsFormProperties {
	}
	export function CreateScte20PlusEmbeddedDestinationSettingsFormGroup() {
		return new FormGroup<Scte20PlusEmbeddedDestinationSettingsFormProperties>({
		});

	}


	/** Scte27 Destination Settings */
	export interface Scte27DestinationSettings {
	}

	/** Scte27 Destination Settings */
	export interface Scte27DestinationSettingsFormProperties {
	}
	export function CreateScte27DestinationSettingsFormGroup() {
		return new FormGroup<Scte27DestinationSettingsFormProperties>({
		});

	}


	/** Smpte Tt Destination Settings */
	export interface SmpteTtDestinationSettings {
	}

	/** Smpte Tt Destination Settings */
	export interface SmpteTtDestinationSettingsFormProperties {
	}
	export function CreateSmpteTtDestinationSettingsFormGroup() {
		return new FormGroup<SmpteTtDestinationSettingsFormProperties>({
		});

	}


	/** Teletext Destination Settings */
	export interface TeletextDestinationSettings {
	}

	/** Teletext Destination Settings */
	export interface TeletextDestinationSettingsFormProperties {
	}
	export function CreateTeletextDestinationSettingsFormGroup() {
		return new FormGroup<TeletextDestinationSettingsFormProperties>({
		});

	}


	/** Ttml Destination Settings */
	export interface TtmlDestinationSettings {

		/** Ttml Destination Style Control */
		StyleControl?: TtmlDestinationSettingsStyleControl | null;
	}

	/** Ttml Destination Settings */
	export interface TtmlDestinationSettingsFormProperties {

		/** Ttml Destination Style Control */
		StyleControl: FormControl<TtmlDestinationSettingsStyleControl | null | undefined>,
	}
	export function CreateTtmlDestinationSettingsFormGroup() {
		return new FormGroup<TtmlDestinationSettingsFormProperties>({
			StyleControl: new FormControl<TtmlDestinationSettingsStyleControl | null | undefined>(undefined),
		});

	}

	export enum TtmlDestinationSettingsStyleControl { PASSTHROUGH = 0, USE_CONFIGURED = 1 }


	/** Webvtt Destination Settings */
	export interface WebvttDestinationSettings {
	}

	/** Webvtt Destination Settings */
	export interface WebvttDestinationSettingsFormProperties {
	}
	export function CreateWebvttDestinationSettingsFormGroup() {
		return new FormGroup<WebvttDestinationSettingsFormProperties>({
		});

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
		InputLossBehavior?: InputLossBehavior;

		/** Global Configuration Output Locking Mode */
		OutputLockingMode?: GlobalConfigurationOutputLockingMode | null;

		/** Global Configuration Output Timing Source */
		OutputTimingSource?: GlobalConfigurationOutputTimingSource | null;

		/** Global Configuration Low Framerate Inputs */
		SupportLowFramerateInputs?: Ac3SettingsLfeFilter | null;
	}

	/** Global Configuration */
	export interface GlobalConfigurationFormProperties {

		/**
		 * Placeholder documentation for __integerMinNegative60Max60
		 * Minimum: -60
		 * Maximum: 60
		 */
		InitialAudioGain: FormControl<number | null | undefined>,

		/** Global Configuration Input End Action */
		InputEndAction: FormControl<GlobalConfigurationInputEndAction | null | undefined>,

		/** Global Configuration Output Locking Mode */
		OutputLockingMode: FormControl<GlobalConfigurationOutputLockingMode | null | undefined>,

		/** Global Configuration Output Timing Source */
		OutputTimingSource: FormControl<GlobalConfigurationOutputTimingSource | null | undefined>,

		/** Global Configuration Low Framerate Inputs */
		SupportLowFramerateInputs: FormControl<Ac3SettingsLfeFilter | null | undefined>,
	}
	export function CreateGlobalConfigurationFormGroup() {
		return new FormGroup<GlobalConfigurationFormProperties>({
			InitialAudioGain: new FormControl<number | null | undefined>(undefined, [Validators.min(-60), Validators.max(60)]),
			InputEndAction: new FormControl<GlobalConfigurationInputEndAction | null | undefined>(undefined),
			OutputLockingMode: new FormControl<GlobalConfigurationOutputLockingMode | null | undefined>(undefined),
			OutputTimingSource: new FormControl<GlobalConfigurationOutputTimingSource | null | undefined>(undefined),
			SupportLowFramerateInputs: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
		});

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
		InputLossImageSlate?: InputLocation;

		/** Input Loss Image Type */
		InputLossImageType?: InputLossBehaviorInputLossImageType | null;

		/**
		 * Placeholder documentation for __integerMin0Max1000000
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		RepeatFrameMsec?: number | null;
	}

	/** Input Loss Behavior */
	export interface InputLossBehaviorFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max1000000
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		BlackFrameMsec: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin6Max6
		 * Max length: 6
		 * Min length: 6
		 */
		InputLossImageColor: FormControl<string | null | undefined>,

		/** Input Loss Image Type */
		InputLossImageType: FormControl<InputLossBehaviorInputLossImageType | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max1000000
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		RepeatFrameMsec: FormControl<number | null | undefined>,
	}
	export function CreateInputLossBehaviorFormGroup() {
		return new FormGroup<InputLossBehaviorFormProperties>({
			BlackFrameMsec: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000000)]),
			InputLossImageColor: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(6)]),
			InputLossImageType: new FormControl<InputLossBehaviorInputLossImageType | null | undefined>(undefined),
			RepeatFrameMsec: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000000)]),
		});

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

	/** Nielsen Configuration */
	export interface NielsenConfigurationFormProperties {

		/** Placeholder documentation for __string */
		DistributorId: FormControl<string | null | undefined>,

		/** State of Nielsen PCM to ID3 tagging */
		NielsenPcmToId3Tagging: FormControl<Ac3SettingsLfeFilter | null | undefined>,
	}
	export function CreateNielsenConfigurationFormGroup() {
		return new FormGroup<NielsenConfigurationFormProperties>({
			DistributorId: new FormControl<string | null | undefined>(undefined),
			NielsenPcmToId3Tagging: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
		});

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

	/** Output groups for this Live Event. Output groups contain information about where streams should be distributed. */
	export interface OutputGroupFormProperties {

		/**
		 * Placeholder documentation for __stringMax32
		 * Max length: 32
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOutputGroupFormGroup() {
		return new FormGroup<OutputGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32)]),
		});

	}


	/** Output Group Settings */
	export interface OutputGroupSettings {

		/** Archive Group Settings */
		ArchiveGroupSettings?: ArchiveGroupSettings;

		/** Frame Capture Group Settings */
		FrameCaptureGroupSettings?: FrameCaptureGroupSettings;

		/** Hls Group Settings */
		HlsGroupSettings?: HlsGroupSettings;

		/** Media Package Group Settings */
		MediaPackageGroupSettings?: MediaPackageGroupSettings;

		/** Ms Smooth Group Settings */
		MsSmoothGroupSettings?: MsSmoothGroupSettings;

		/** Multiplex Group Settings */
		MultiplexGroupSettings?: MultiplexGroupSettings;

		/** Rtmp Group Settings */
		RtmpGroupSettings?: RtmpGroupSettings;

		/** Udp Group Settings */
		UdpGroupSettings?: UdpGroupSettings;
	}

	/** Output Group Settings */
	export interface OutputGroupSettingsFormProperties {
	}
	export function CreateOutputGroupSettingsFormGroup() {
		return new FormGroup<OutputGroupSettingsFormProperties>({
		});

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

	/** Archive Group Settings */
	export interface ArchiveGroupSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		RolloverInterval: FormControl<number | null | undefined>,
	}
	export function CreateArchiveGroupSettingsFormGroup() {
		return new FormGroup<ArchiveGroupSettingsFormProperties>({
			RolloverInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Reference to an OutputDestination ID defined in the channel */
	export interface OutputLocationRef {

		/** Placeholder documentation for __string */
		DestinationRefId?: string | null;
	}

	/** Reference to an OutputDestination ID defined in the channel */
	export interface OutputLocationRefFormProperties {

		/** Placeholder documentation for __string */
		DestinationRefId: FormControl<string | null | undefined>,
	}
	export function CreateOutputLocationRefFormGroup() {
		return new FormGroup<OutputLocationRefFormProperties>({
			DestinationRefId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Frame Capture Group Settings */
	export interface FrameCaptureGroupSettings {

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;
	}

	/** Frame Capture Group Settings */
	export interface FrameCaptureGroupSettingsFormProperties {
	}
	export function CreateFrameCaptureGroupSettingsFormGroup() {
		return new FormGroup<FrameCaptureGroupSettingsFormProperties>({
		});

	}


	/** Hls Group Settings */
	export interface HlsGroupSettings {

		/** Placeholder documentation for __listOfHlsAdMarkers */
		AdMarkers?: Array<HlsAdMarkers>;

		/** Placeholder documentation for __string */
		BaseUrlContent?: string | null;

		/** Placeholder documentation for __string */
		BaseUrlContent1?: string | null;

		/** Placeholder documentation for __string */
		BaseUrlManifest?: string | null;

		/** Placeholder documentation for __string */
		BaseUrlManifest1?: string | null;

		/** Placeholder documentation for __listOfCaptionLanguageMapping */
		CaptionLanguageMappings?: Array<CaptionLanguageMapping>;

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
		HlsCdnSettings?: HlsCdnSettings;

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
		KeyProviderSettings?: KeyProviderSettings;

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

	/** Hls Group Settings */
	export interface HlsGroupSettingsFormProperties {

		/** Placeholder documentation for __string */
		BaseUrlContent: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		BaseUrlContent1: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		BaseUrlManifest: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		BaseUrlManifest1: FormControl<string | null | undefined>,

		/** Hls Caption Language Setting */
		CaptionLanguageSetting: FormControl<HlsGroupSettingsCaptionLanguageSetting | null | undefined>,

		/** Hls Client Cache */
		ClientCache: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** Hls Codec Specification */
		CodecSpecification: FormControl<HlsGroupSettingsCodecSpecification | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin32Max32
		 * Max length: 32
		 * Min length: 32
		 */
		ConstantIv: FormControl<string | null | undefined>,

		/** Hls Directory Structure */
		DirectoryStructure: FormControl<HlsGroupSettingsDirectoryStructure | null | undefined>,

		/** Hls Encryption Type */
		EncryptionType: FormControl<HlsGroupSettingsEncryptionType | null | undefined>,

		/** State of HLS ID3 Segment Tagging */
		HlsId3SegmentTagging: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment. */
		IFrameOnlyPlaylists: FormControl<HlsGroupSettingsIFrameOnlyPlaylists | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin3
		 * Minimum: 3
		 */
		IndexNSegments: FormControl<number | null | undefined>,

		/** Input Loss Action For Hls Out */
		InputLossAction: FormControl<HlsGroupSettingsInputLossAction | null | undefined>,

		/** Hls Iv In Manifest */
		IvInManifest: FormControl<HlsGroupSettingsIvInManifest | null | undefined>,

		/** Hls Iv Source */
		IvSource: FormControl<HlsGroupSettingsIvSource | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		KeepSegments: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		KeyFormat: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		KeyFormatVersions: FormControl<string | null | undefined>,

		/** Hls Manifest Compression */
		ManifestCompression: FormControl<HlsGroupSettingsManifestCompression | null | undefined>,

		/** Hls Manifest Duration Format */
		ManifestDurationFormat: FormControl<HlsGroupSettingsManifestDurationFormat | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		MinSegmentLength: FormControl<number | null | undefined>,

		/** Hls Mode */
		Mode: FormControl<HlsGroupSettingsMode | null | undefined>,

		/** Hls Output Selection */
		OutputSelection: FormControl<HlsGroupSettingsOutputSelection | null | undefined>,

		/** Hls Program Date Time */
		ProgramDateTime: FormControl<HlsGroupSettingsIvInManifest | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max3600
		 * Minimum: 0
		 * Maximum: 3600
		 */
		ProgramDateTimePeriod: FormControl<number | null | undefined>,

		/** Hls Redundant Manifest */
		RedundantManifest: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		SegmentLength: FormControl<number | null | undefined>,

		/** Hls Segmentation Mode */
		SegmentationMode: FormControl<HlsGroupSettingsSegmentationMode | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		SegmentsPerSubdirectory: FormControl<number | null | undefined>,

		/** Hls Stream Inf Resolution */
		StreamInfResolution: FormControl<HlsGroupSettingsIvInManifest | null | undefined>,

		/** Hls Timed Metadata Id3 Frame */
		TimedMetadataId3Frame: FormControl<HlsGroupSettingsTimedMetadataId3Frame | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimedMetadataId3Period: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimestampDeltaMilliseconds: FormControl<number | null | undefined>,

		/** Hls Ts File Mode */
		TsFileMode: FormControl<HlsGroupSettingsTsFileMode | null | undefined>,
	}
	export function CreateHlsGroupSettingsFormGroup() {
		return new FormGroup<HlsGroupSettingsFormProperties>({
			BaseUrlContent: new FormControl<string | null | undefined>(undefined),
			BaseUrlContent1: new FormControl<string | null | undefined>(undefined),
			BaseUrlManifest: new FormControl<string | null | undefined>(undefined),
			BaseUrlManifest1: new FormControl<string | null | undefined>(undefined),
			CaptionLanguageSetting: new FormControl<HlsGroupSettingsCaptionLanguageSetting | null | undefined>(undefined),
			ClientCache: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			CodecSpecification: new FormControl<HlsGroupSettingsCodecSpecification | null | undefined>(undefined),
			ConstantIv: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32)]),
			DirectoryStructure: new FormControl<HlsGroupSettingsDirectoryStructure | null | undefined>(undefined),
			EncryptionType: new FormControl<HlsGroupSettingsEncryptionType | null | undefined>(undefined),
			HlsId3SegmentTagging: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			IFrameOnlyPlaylists: new FormControl<HlsGroupSettingsIFrameOnlyPlaylists | null | undefined>(undefined),
			IndexNSegments: new FormControl<number | null | undefined>(undefined, [Validators.min(3)]),
			InputLossAction: new FormControl<HlsGroupSettingsInputLossAction | null | undefined>(undefined),
			IvInManifest: new FormControl<HlsGroupSettingsIvInManifest | null | undefined>(undefined),
			IvSource: new FormControl<HlsGroupSettingsIvSource | null | undefined>(undefined),
			KeepSegments: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			KeyFormat: new FormControl<string | null | undefined>(undefined),
			KeyFormatVersions: new FormControl<string | null | undefined>(undefined),
			ManifestCompression: new FormControl<HlsGroupSettingsManifestCompression | null | undefined>(undefined),
			ManifestDurationFormat: new FormControl<HlsGroupSettingsManifestDurationFormat | null | undefined>(undefined),
			MinSegmentLength: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Mode: new FormControl<HlsGroupSettingsMode | null | undefined>(undefined),
			OutputSelection: new FormControl<HlsGroupSettingsOutputSelection | null | undefined>(undefined),
			ProgramDateTime: new FormControl<HlsGroupSettingsIvInManifest | null | undefined>(undefined),
			ProgramDateTimePeriod: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(3600)]),
			RedundantManifest: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			SegmentLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			SegmentationMode: new FormControl<HlsGroupSettingsSegmentationMode | null | undefined>(undefined),
			SegmentsPerSubdirectory: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			StreamInfResolution: new FormControl<HlsGroupSettingsIvInManifest | null | undefined>(undefined),
			TimedMetadataId3Frame: new FormControl<HlsGroupSettingsTimedMetadataId3Frame | null | undefined>(undefined),
			TimedMetadataId3Period: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			TimestampDeltaMilliseconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			TsFileMode: new FormControl<HlsGroupSettingsTsFileMode | null | undefined>(undefined),
		});

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

	/** Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description. */
	export interface CaptionLanguageMappingFormProperties {

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Required
		 * Minimum: 1
		 * Maximum: 4
		 */
		CaptionChannel: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin3Max3
		 * Required
		 * Max length: 3
		 * Min length: 3
		 */
		LanguageCode: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin1
		 * Required
		 * Min length: 1
		 */
		LanguageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCaptionLanguageMappingFormGroup() {
		return new FormGroup<CaptionLanguageMappingFormProperties>({
			CaptionChannel: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(4)]),
			LanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
			LanguageDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum HlsGroupSettingsCaptionLanguageSetting { INSERT = 0, NONE = 1, OMIT = 2 }

	export enum HlsGroupSettingsCodecSpecification { RFC_4281 = 0, RFC_6381 = 1 }

	export enum HlsGroupSettingsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }

	export enum HlsGroupSettingsEncryptionType { AES128 = 0, SAMPLE_AES = 1 }


	/** Hls Cdn Settings */
	export interface HlsCdnSettings {

		/** Hls Akamai Settings */
		HlsAkamaiSettings?: HlsAkamaiSettings;

		/** Hls Basic Put Settings */
		HlsBasicPutSettings?: HlsBasicPutSettings;

		/** Hls Media Store Settings */
		HlsMediaStoreSettings?: HlsMediaStoreSettings;

		/** Hls Webdav Settings */
		HlsWebdavSettings?: HlsWebdavSettings;
	}

	/** Hls Cdn Settings */
	export interface HlsCdnSettingsFormProperties {
	}
	export function CreateHlsCdnSettingsFormGroup() {
		return new FormGroup<HlsCdnSettingsFormProperties>({
		});

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

	/** Hls Akamai Settings */
	export interface HlsAkamaiSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration: FormControl<number | null | undefined>,

		/** Hls Akamai Http Transfer Mode */
		HttpTransferMode: FormControl<HlsAkamaiSettingsHttpTransferMode | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		Salt: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Token: FormControl<string | null | undefined>,
	}
	export function CreateHlsAkamaiSettingsFormGroup() {
		return new FormGroup<HlsAkamaiSettingsFormProperties>({
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(600)]),
			HttpTransferMode: new FormControl<HlsAkamaiSettingsHttpTransferMode | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RestartDelay: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(15)]),
			Salt: new FormControl<string | null | undefined>(undefined),
			Token: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Hls Basic Put Settings */
	export interface HlsBasicPutSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay: FormControl<number | null | undefined>,
	}
	export function CreateHlsBasicPutSettingsFormGroup() {
		return new FormGroup<HlsBasicPutSettingsFormProperties>({
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(600)]),
			NumRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RestartDelay: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(15)]),
		});

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

	/** Hls Media Store Settings */
	export interface HlsMediaStoreSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration: FormControl<number | null | undefined>,

		/** Hls Media Store Storage Class */
		MediaStoreStorageClass: FormControl<HlsMediaStoreSettingsMediaStoreStorageClass | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay: FormControl<number | null | undefined>,
	}
	export function CreateHlsMediaStoreSettingsFormGroup() {
		return new FormGroup<HlsMediaStoreSettingsFormProperties>({
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(600)]),
			MediaStoreStorageClass: new FormControl<HlsMediaStoreSettingsMediaStoreStorageClass | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RestartDelay: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(15)]),
		});

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

	/** Hls Webdav Settings */
	export interface HlsWebdavSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max600
		 * Minimum: 0
		 * Maximum: 600
		 */
		FilecacheDuration: FormControl<number | null | undefined>,

		/** Hls Webdav Http Transfer Mode */
		HttpTransferMode: FormControl<HlsAkamaiSettingsHttpTransferMode | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max15
		 * Minimum: 0
		 * Maximum: 15
		 */
		RestartDelay: FormControl<number | null | undefined>,
	}
	export function CreateHlsWebdavSettingsFormGroup() {
		return new FormGroup<HlsWebdavSettingsFormProperties>({
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(600)]),
			HttpTransferMode: new FormControl<HlsAkamaiSettingsHttpTransferMode | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RestartDelay: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(15)]),
		});

	}

	export enum HlsGroupSettingsIFrameOnlyPlaylists { DISABLED = 0, STANDARD = 1 }

	export enum HlsGroupSettingsInputLossAction { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }

	export enum HlsGroupSettingsIvInManifest { EXCLUDE = 0, INCLUDE = 1 }

	export enum HlsGroupSettingsIvSource { EXPLICIT = 0, FOLLOWS_SEGMENT_NUMBER = 1 }


	/** Key Provider Settings */
	export interface KeyProviderSettings {

		/** Static Key Settings */
		StaticKeySettings?: StaticKeySettings;
	}

	/** Key Provider Settings */
	export interface KeyProviderSettingsFormProperties {
	}
	export function CreateKeyProviderSettingsFormGroup() {
		return new FormGroup<KeyProviderSettingsFormProperties>({
		});

	}


	/** Static Key Settings */
	export interface StaticKeySettings {

		/** Input Location */
		KeyProviderServer?: InputLocation;

		/**
		 * Placeholder documentation for __stringMin32Max32
		 * Required
		 * Max length: 32
		 * Min length: 32
		 */
		StaticKeyValue: string;
	}

	/** Static Key Settings */
	export interface StaticKeySettingsFormProperties {

		/**
		 * Placeholder documentation for __stringMin32Max32
		 * Required
		 * Max length: 32
		 * Min length: 32
		 */
		StaticKeyValue: FormControl<string | null | undefined>,
	}
	export function CreateStaticKeySettingsFormGroup() {
		return new FormGroup<StaticKeySettingsFormProperties>({
			StaticKeyValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(32)]),
		});

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

	/** Media Package Group Settings */
	export interface MediaPackageGroupSettingsFormProperties {
	}
	export function CreateMediaPackageGroupSettingsFormGroup() {
		return new FormGroup<MediaPackageGroupSettingsFormProperties>({
		});

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

	/** Ms Smooth Group Settings */
	export interface MsSmoothGroupSettingsFormProperties {

		/** Placeholder documentation for __string */
		AcquisitionPointId: FormControl<string | null | undefined>,

		/** Smooth Group Audio Only Timecode Control */
		AudioOnlyTimecodeControl: FormControl<MsSmoothGroupSettingsAudioOnlyTimecodeControl | null | undefined>,

		/** Smooth Group Certificate Mode */
		CertificateMode: FormControl<MsSmoothGroupSettingsCertificateMode | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		ConnectionRetryInterval: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		EventId: FormControl<string | null | undefined>,

		/** Smooth Group Event Id Mode */
		EventIdMode: FormControl<MsSmoothGroupSettingsEventIdMode | null | undefined>,

		/** Smooth Group Event Stop Behavior */
		EventStopBehavior: FormControl<MsSmoothGroupSettingsEventStopBehavior | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		FilecacheDuration: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FragmentLength: FormControl<number | null | undefined>,

		/** Input Loss Action For Ms Smooth Out */
		InputLossAction: FormControl<HlsGroupSettingsInputLossAction | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RestartDelay: FormControl<number | null | undefined>,

		/** Smooth Group Segmentation Mode */
		SegmentationMode: FormControl<HlsGroupSettingsSegmentationMode | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		SendDelayMs: FormControl<number | null | undefined>,

		/** Smooth Group Sparse Track Type */
		SparseTrackType: FormControl<MsSmoothGroupSettingsSparseTrackType | null | undefined>,

		/** Smooth Group Stream Manifest Behavior */
		StreamManifestBehavior: FormControl<MsSmoothGroupSettingsStreamManifestBehavior | null | undefined>,

		/** Placeholder documentation for __string */
		TimestampOffset: FormControl<string | null | undefined>,

		/** Smooth Group Timestamp Offset Mode */
		TimestampOffsetMode: FormControl<MsSmoothGroupSettingsTimestampOffsetMode | null | undefined>,
	}
	export function CreateMsSmoothGroupSettingsFormGroup() {
		return new FormGroup<MsSmoothGroupSettingsFormProperties>({
			AcquisitionPointId: new FormControl<string | null | undefined>(undefined),
			AudioOnlyTimecodeControl: new FormControl<MsSmoothGroupSettingsAudioOnlyTimecodeControl | null | undefined>(undefined),
			CertificateMode: new FormControl<MsSmoothGroupSettingsCertificateMode | null | undefined>(undefined),
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			EventId: new FormControl<string | null | undefined>(undefined),
			EventIdMode: new FormControl<MsSmoothGroupSettingsEventIdMode | null | undefined>(undefined),
			EventStopBehavior: new FormControl<MsSmoothGroupSettingsEventStopBehavior | null | undefined>(undefined),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FragmentLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			InputLossAction: new FormControl<HlsGroupSettingsInputLossAction | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RestartDelay: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			SegmentationMode: new FormControl<HlsGroupSettingsSegmentationMode | null | undefined>(undefined),
			SendDelayMs: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			SparseTrackType: new FormControl<MsSmoothGroupSettingsSparseTrackType | null | undefined>(undefined),
			StreamManifestBehavior: new FormControl<MsSmoothGroupSettingsStreamManifestBehavior | null | undefined>(undefined),
			TimestampOffset: new FormControl<string | null | undefined>(undefined),
			TimestampOffsetMode: new FormControl<MsSmoothGroupSettingsTimestampOffsetMode | null | undefined>(undefined),
		});

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

	/** Multiplex Group Settings */
	export interface MultiplexGroupSettingsFormProperties {
	}
	export function CreateMultiplexGroupSettingsFormGroup() {
		return new FormGroup<MultiplexGroupSettingsFormProperties>({
		});

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

	/** Rtmp Group Settings */
	export interface RtmpGroupSettingsFormProperties {

		/** Authentication Scheme */
		AuthenticationScheme: FormControl<RtmpGroupSettingsAuthenticationScheme | null | undefined>,

		/** Rtmp Cache Full Behavior */
		CacheFullBehavior: FormControl<RtmpGroupSettingsCacheFullBehavior | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin30
		 * Minimum: 30
		 */
		CacheLength: FormControl<number | null | undefined>,

		/** Rtmp Caption Data */
		CaptionData: FormControl<RtmpGroupSettingsCaptionData | null | undefined>,

		/** Input Loss Action For Rtmp Out */
		InputLossAction: FormControl<HlsGroupSettingsInputLossAction | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RestartDelay: FormControl<number | null | undefined>,
	}
	export function CreateRtmpGroupSettingsFormGroup() {
		return new FormGroup<RtmpGroupSettingsFormProperties>({
			AuthenticationScheme: new FormControl<RtmpGroupSettingsAuthenticationScheme | null | undefined>(undefined),
			CacheFullBehavior: new FormControl<RtmpGroupSettingsCacheFullBehavior | null | undefined>(undefined),
			CacheLength: new FormControl<number | null | undefined>(undefined, [Validators.min(30)]),
			CaptionData: new FormControl<RtmpGroupSettingsCaptionData | null | undefined>(undefined),
			InputLossAction: new FormControl<HlsGroupSettingsInputLossAction | null | undefined>(undefined),
			RestartDelay: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

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

	/** Udp Group Settings */
	export interface UdpGroupSettingsFormProperties {

		/** Input Loss Action For Udp Out */
		InputLossAction: FormControl<UdpGroupSettingsInputLossAction | null | undefined>,

		/** Udp Timed Metadata Id3 Frame */
		TimedMetadataId3Frame: FormControl<HlsGroupSettingsTimedMetadataId3Frame | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		TimedMetadataId3Period: FormControl<number | null | undefined>,
	}
	export function CreateUdpGroupSettingsFormGroup() {
		return new FormGroup<UdpGroupSettingsFormProperties>({
			InputLossAction: new FormControl<UdpGroupSettingsInputLossAction | null | undefined>(undefined),
			TimedMetadataId3Frame: new FormControl<HlsGroupSettingsTimedMetadataId3Frame | null | undefined>(undefined),
			TimedMetadataId3Period: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum UdpGroupSettingsInputLossAction { DROP_PROGRAM = 0, DROP_TS = 1, EMIT_PROGRAM = 2 }


	/** Output settings. There can be multiple outputs within a group. */
	export interface Output {

		/** Placeholder documentation for __listOf__string */
		AudioDescriptionNames?: Array<string>;

		/** Placeholder documentation for __listOf__string */
		CaptionDescriptionNames?: Array<string>;

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

	/** Output settings. There can be multiple outputs within a group. */
	export interface OutputFormProperties {

		/**
		 * Placeholder documentation for __stringMin1Max255
		 * Max length: 255
		 * Min length: 1
		 */
		OutputName: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		VideoDescriptionName: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			OutputName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			VideoDescriptionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output Settings */
	export interface OutputSettings {

		/** Archive Output Settings */
		ArchiveOutputSettings?: ArchiveOutputSettings;

		/** Frame Capture Output Settings */
		FrameCaptureOutputSettings?: FrameCaptureOutputSettings;

		/** Hls Output Settings */
		HlsOutputSettings?: HlsOutputSettings;

		/** Media Package Output Settings */
		MediaPackageOutputSettings?: MediaPackageOutputSettings;

		/** Ms Smooth Output Settings */
		MsSmoothOutputSettings?: MsSmoothOutputSettings;

		/** Multiplex Output Settings */
		MultiplexOutputSettings?: MultiplexOutputSettings;

		/** Rtmp Output Settings */
		RtmpOutputSettings?: RtmpOutputSettings;

		/** Udp Output Settings */
		UdpOutputSettings?: UdpOutputSettings;
	}

	/** Output Settings */
	export interface OutputSettingsFormProperties {
	}
	export function CreateOutputSettingsFormGroup() {
		return new FormGroup<OutputSettingsFormProperties>({
		});

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

	/** Archive Output Settings */
	export interface ArchiveOutputSettingsFormProperties {

		/** Placeholder documentation for __string */
		Extension: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		NameModifier: FormControl<string | null | undefined>,
	}
	export function CreateArchiveOutputSettingsFormGroup() {
		return new FormGroup<ArchiveOutputSettingsFormProperties>({
			Extension: new FormControl<string | null | undefined>(undefined),
			NameModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Archive Container Settings */
	export interface ArchiveContainerSettings {

		/** M2ts Settings */
		M2tsSettings?: M2tsSettings;
	}

	/** Archive Container Settings */
	export interface ArchiveContainerSettingsFormProperties {
	}
	export function CreateArchiveContainerSettingsFormGroup() {
		return new FormGroup<ArchiveContainerSettingsFormProperties>({
		});

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
		DvbNitSettings?: DvbNitSettings;

		/** DVB Service Description Table (SDT) */
		DvbSdtSettings?: DvbSdtSettings;

		/** Placeholder documentation for __string */
		DvbSubPids?: string | null;

		/** DVB Time and Date Table (SDT) */
		DvbTdtSettings?: DvbTdtSettings;

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

	/** M2ts Settings */
	export interface M2tsSettingsFormProperties {

		/** M2ts Absent Input Audio Behavior */
		AbsentInputAudioBehavior: FormControl<M2tsSettingsAbsentInputAudioBehavior | null | undefined>,

		/** M2ts Arib */
		Arib: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** Placeholder documentation for __string */
		AribCaptionsPid: FormControl<string | null | undefined>,

		/** M2ts Arib Captions Pid Control */
		AribCaptionsPidControl: FormControl<M2tsSettingsAribCaptionsPidControl | null | undefined>,

		/** M2ts Audio Buffer Model */
		AudioBufferModel: FormControl<M2tsSettingsAudioBufferModel | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		AudioFramesPerPes: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		AudioPids: FormControl<string | null | undefined>,

		/** M2ts Audio Stream Type */
		AudioStreamType: FormControl<M2tsSettingsAudioBufferModel | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Bitrate: FormControl<number | null | undefined>,

		/** M2ts Buffer Model */
		BufferModel: FormControl<M2tsSettingsBufferModel | null | undefined>,

		/** M2ts Cc Descriptor */
		CcDescriptor: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** Placeholder documentation for __string */
		DvbSubPids: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		DvbTeletextPid: FormControl<string | null | undefined>,

		/** M2ts Ebif Control */
		Ebif: FormControl<M2tsSettingsEbif | null | undefined>,

		/** M2ts Audio Interval */
		EbpAudioInterval: FormControl<M2tsSettingsEbpAudioInterval | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		EbpLookaheadMs: FormControl<number | null | undefined>,

		/** M2ts Ebp Placement */
		EbpPlacement: FormControl<M2tsSettingsEbpPlacement | null | undefined>,

		/** Placeholder documentation for __string */
		EcmPid: FormControl<string | null | undefined>,

		/** M2ts Es Rate In Pes */
		EsRateInPes: FormControl<HlsGroupSettingsIvInManifest | null | undefined>,

		/** Placeholder documentation for __string */
		EtvPlatformPid: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		EtvSignalPid: FormControl<string | null | undefined>,

		/** Placeholder documentation for __doubleMin0 */
		FragmentTime: FormControl<number | null | undefined>,

		/** M2ts Klv */
		Klv: FormControl<M2tsSettingsEbif | null | undefined>,

		/** Placeholder documentation for __string */
		KlvDataPids: FormControl<string | null | undefined>,

		/** M2ts Nielsen Id3 Behavior */
		NielsenId3Behavior: FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>,

		/** Placeholder documentation for __doubleMin0 */
		NullPacketBitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PatInterval: FormControl<number | null | undefined>,

		/** M2ts Pcr Control */
		PcrControl: FormControl<M2tsSettingsPcrControl | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max500
		 * Minimum: 0
		 * Maximum: 500
		 */
		PcrPeriod: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		PcrPid: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PmtInterval: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		PmtPid: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNum: FormControl<number | null | undefined>,

		/** M2ts Rate Mode */
		RateMode: FormControl<AacSettingsRateControlMode | null | undefined>,

		/** Placeholder documentation for __string */
		Scte27Pids: FormControl<string | null | undefined>,

		/** M2ts Scte35 Control */
		Scte35Control: FormControl<M2tsSettingsEbif | null | undefined>,

		/** Placeholder documentation for __string */
		Scte35Pid: FormControl<string | null | undefined>,

		/** M2ts Segmentation Markers */
		SegmentationMarkers: FormControl<M2tsSettingsSegmentationMarkers | null | undefined>,

		/** M2ts Segmentation Style */
		SegmentationStyle: FormControl<M2tsSettingsSegmentationStyle | null | undefined>,

		/** Placeholder documentation for __doubleMin1 */
		SegmentationTime: FormControl<number | null | undefined>,

		/** M2ts Timed Metadata Behavior */
		TimedMetadataBehavior: FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>,

		/** Placeholder documentation for __string */
		TimedMetadataPid: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		VideoPid: FormControl<string | null | undefined>,
	}
	export function CreateM2tsSettingsFormGroup() {
		return new FormGroup<M2tsSettingsFormProperties>({
			AbsentInputAudioBehavior: new FormControl<M2tsSettingsAbsentInputAudioBehavior | null | undefined>(undefined),
			Arib: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			AribCaptionsPid: new FormControl<string | null | undefined>(undefined),
			AribCaptionsPidControl: new FormControl<M2tsSettingsAribCaptionsPidControl | null | undefined>(undefined),
			AudioBufferModel: new FormControl<M2tsSettingsAudioBufferModel | null | undefined>(undefined),
			AudioFramesPerPes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			AudioPids: new FormControl<string | null | undefined>(undefined),
			AudioStreamType: new FormControl<M2tsSettingsAudioBufferModel | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			BufferModel: new FormControl<M2tsSettingsBufferModel | null | undefined>(undefined),
			CcDescriptor: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			DvbSubPids: new FormControl<string | null | undefined>(undefined),
			DvbTeletextPid: new FormControl<string | null | undefined>(undefined),
			Ebif: new FormControl<M2tsSettingsEbif | null | undefined>(undefined),
			EbpAudioInterval: new FormControl<M2tsSettingsEbpAudioInterval | null | undefined>(undefined),
			EbpLookaheadMs: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			EbpPlacement: new FormControl<M2tsSettingsEbpPlacement | null | undefined>(undefined),
			EcmPid: new FormControl<string | null | undefined>(undefined),
			EsRateInPes: new FormControl<HlsGroupSettingsIvInManifest | null | undefined>(undefined),
			EtvPlatformPid: new FormControl<string | null | undefined>(undefined),
			EtvSignalPid: new FormControl<string | null | undefined>(undefined),
			FragmentTime: new FormControl<number | null | undefined>(undefined),
			Klv: new FormControl<M2tsSettingsEbif | null | undefined>(undefined),
			KlvDataPids: new FormControl<string | null | undefined>(undefined),
			NielsenId3Behavior: new FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>(undefined),
			NullPacketBitrate: new FormControl<number | null | undefined>(undefined),
			PatInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			PcrControl: new FormControl<M2tsSettingsPcrControl | null | undefined>(undefined),
			PcrPeriod: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(500)]),
			PcrPid: new FormControl<string | null | undefined>(undefined),
			PmtInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			PmtPid: new FormControl<string | null | undefined>(undefined),
			ProgramNum: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			RateMode: new FormControl<AacSettingsRateControlMode | null | undefined>(undefined),
			Scte27Pids: new FormControl<string | null | undefined>(undefined),
			Scte35Control: new FormControl<M2tsSettingsEbif | null | undefined>(undefined),
			Scte35Pid: new FormControl<string | null | undefined>(undefined),
			SegmentationMarkers: new FormControl<M2tsSettingsSegmentationMarkers | null | undefined>(undefined),
			SegmentationStyle: new FormControl<M2tsSettingsSegmentationStyle | null | undefined>(undefined),
			SegmentationTime: new FormControl<number | null | undefined>(undefined),
			TimedMetadataBehavior: new FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>(undefined),
			TimedMetadataPid: new FormControl<string | null | undefined>(undefined),
			TransportStreamId: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			VideoPid: new FormControl<string | null | undefined>(undefined),
		});

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

	/** DVB Network Information Table (NIT) */
	export interface DvbNitSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max65536
		 * Required
		 * Minimum: 0
		 * Maximum: 65536
		 */
		NetworkId: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		NetworkName: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin25Max10000
		 * Minimum: 25
		 * Maximum: 10000
		 */
		RepInterval: FormControl<number | null | undefined>,
	}
	export function CreateDvbNitSettingsFormGroup() {
		return new FormGroup<DvbNitSettingsFormProperties>({
			NetworkId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(65536)]),
			NetworkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			RepInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(25), Validators.max(10000)]),
		});

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

	/** DVB Service Description Table (SDT) */
	export interface DvbSdtSettingsFormProperties {

		/** Dvb Sdt Output Sdt */
		OutputSdt: FormControl<DvbSdtSettingsOutputSdt | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin25Max2000
		 * Minimum: 25
		 * Maximum: 2000
		 */
		RepInterval: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Max length: 256
		 * Min length: 1
		 */
		ServiceName: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin1Max256
		 * Max length: 256
		 * Min length: 1
		 */
		ServiceProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDvbSdtSettingsFormGroup() {
		return new FormGroup<DvbSdtSettingsFormProperties>({
			OutputSdt: new FormControl<DvbSdtSettingsOutputSdt | null | undefined>(undefined),
			RepInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(25), Validators.max(2000)]),
			ServiceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			ServiceProviderName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

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

	/** DVB Time and Date Table (SDT) */
	export interface DvbTdtSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1000Max30000
		 * Minimum: 1000
		 * Maximum: 30000
		 */
		RepInterval: FormControl<number | null | undefined>,
	}
	export function CreateDvbTdtSettingsFormGroup() {
		return new FormGroup<DvbTdtSettingsFormProperties>({
			RepInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(30000)]),
		});

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

	/** Frame Capture Output Settings */
	export interface FrameCaptureOutputSettingsFormProperties {

		/** Placeholder documentation for __string */
		NameModifier: FormControl<string | null | undefined>,
	}
	export function CreateFrameCaptureOutputSettingsFormGroup() {
		return new FormGroup<FrameCaptureOutputSettingsFormProperties>({
			NameModifier: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Hls Output Settings */
	export interface HlsOutputSettingsFormProperties {

		/** Hls H265 Packaging Type */
		H265PackagingType: FormControl<HlsOutputSettingsH265PackagingType | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		NameModifier: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		SegmentModifier: FormControl<string | null | undefined>,
	}
	export function CreateHlsOutputSettingsFormGroup() {
		return new FormGroup<HlsOutputSettingsFormProperties>({
			H265PackagingType: new FormControl<HlsOutputSettingsH265PackagingType | null | undefined>(undefined),
			NameModifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			SegmentModifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HlsOutputSettingsH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/** Hls Settings */
	export interface HlsSettings {

		/** Audio Only Hls Settings */
		AudioOnlyHlsSettings?: AudioOnlyHlsSettings;

		/** Fmp4 Hls Settings */
		Fmp4HlsSettings?: Fmp4HlsSettings;

		/** Standard Hls Settings */
		StandardHlsSettings?: StandardHlsSettings;
	}

	/** Hls Settings */
	export interface HlsSettingsFormProperties {
	}
	export function CreateHlsSettingsFormGroup() {
		return new FormGroup<HlsSettingsFormProperties>({
		});

	}


	/** Audio Only Hls Settings */
	export interface AudioOnlyHlsSettings {

		/** Placeholder documentation for __string */
		AudioGroupId?: string | null;

		/** Input Location */
		AudioOnlyImage?: InputLocation;

		/** Audio Only Hls Track Type */
		AudioTrackType?: AudioOnlyHlsSettingsAudioTrackType | null;

		/** Audio Only Hls Segment Type */
		SegmentType?: AudioOnlyHlsSettingsSegmentType | null;
	}

	/** Audio Only Hls Settings */
	export interface AudioOnlyHlsSettingsFormProperties {

		/** Placeholder documentation for __string */
		AudioGroupId: FormControl<string | null | undefined>,

		/** Audio Only Hls Track Type */
		AudioTrackType: FormControl<AudioOnlyHlsSettingsAudioTrackType | null | undefined>,

		/** Audio Only Hls Segment Type */
		SegmentType: FormControl<AudioOnlyHlsSettingsSegmentType | null | undefined>,
	}
	export function CreateAudioOnlyHlsSettingsFormGroup() {
		return new FormGroup<AudioOnlyHlsSettingsFormProperties>({
			AudioGroupId: new FormControl<string | null | undefined>(undefined),
			AudioTrackType: new FormControl<AudioOnlyHlsSettingsAudioTrackType | null | undefined>(undefined),
			SegmentType: new FormControl<AudioOnlyHlsSettingsSegmentType | null | undefined>(undefined),
		});

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

	/** Fmp4 Hls Settings */
	export interface Fmp4HlsSettingsFormProperties {

		/** Placeholder documentation for __string */
		AudioRenditionSets: FormControl<string | null | undefined>,

		/** Fmp4 Nielsen Id3 Behavior */
		NielsenId3Behavior: FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>,

		/** Fmp4 Timed Metadata Behavior */
		TimedMetadataBehavior: FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>,
	}
	export function CreateFmp4HlsSettingsFormGroup() {
		return new FormGroup<Fmp4HlsSettingsFormProperties>({
			AudioRenditionSets: new FormControl<string | null | undefined>(undefined),
			NielsenId3Behavior: new FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>(undefined),
			TimedMetadataBehavior: new FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>(undefined),
		});

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

	/** Standard Hls Settings */
	export interface StandardHlsSettingsFormProperties {

		/** Placeholder documentation for __string */
		AudioRenditionSets: FormControl<string | null | undefined>,
	}
	export function CreateStandardHlsSettingsFormGroup() {
		return new FormGroup<StandardHlsSettingsFormProperties>({
			AudioRenditionSets: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Settings information for the .m3u8 container */
	export interface M3u8SettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		AudioFramesPerPes: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		AudioPids: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		EcmPid: FormControl<string | null | undefined>,

		/** M3u8 Nielsen Id3 Behavior */
		NielsenId3Behavior: FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PatInterval: FormControl<number | null | undefined>,

		/** M3u8 Pcr Control */
		PcrControl: FormControl<M2tsSettingsPcrControl | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max500
		 * Minimum: 0
		 * Maximum: 500
		 */
		PcrPeriod: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		PcrPid: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max1000
		 * Minimum: 0
		 * Maximum: 1000
		 */
		PmtInterval: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		PmtPid: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNum: FormControl<number | null | undefined>,

		/** M3u8 Scte35 Behavior */
		Scte35Behavior: FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>,

		/** Placeholder documentation for __string */
		Scte35Pid: FormControl<string | null | undefined>,

		/** M3u8 Timed Metadata Behavior */
		TimedMetadataBehavior: FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>,

		/** Placeholder documentation for __string */
		TimedMetadataPid: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		VideoPid: FormControl<string | null | undefined>,
	}
	export function CreateM3u8SettingsFormGroup() {
		return new FormGroup<M3u8SettingsFormProperties>({
			AudioFramesPerPes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			AudioPids: new FormControl<string | null | undefined>(undefined),
			EcmPid: new FormControl<string | null | undefined>(undefined),
			NielsenId3Behavior: new FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>(undefined),
			PatInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			PcrControl: new FormControl<M2tsSettingsPcrControl | null | undefined>(undefined),
			PcrPeriod: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(500)]),
			PcrPid: new FormControl<string | null | undefined>(undefined),
			PmtInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			PmtPid: new FormControl<string | null | undefined>(undefined),
			ProgramNum: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			Scte35Behavior: new FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>(undefined),
			Scte35Pid: new FormControl<string | null | undefined>(undefined),
			TimedMetadataBehavior: new FormControl<M2tsSettingsNielsenId3Behavior | null | undefined>(undefined),
			TimedMetadataPid: new FormControl<string | null | undefined>(undefined),
			TransportStreamId: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			VideoPid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Media Package Output Settings */
	export interface MediaPackageOutputSettings {
	}

	/** Media Package Output Settings */
	export interface MediaPackageOutputSettingsFormProperties {
	}
	export function CreateMediaPackageOutputSettingsFormGroup() {
		return new FormGroup<MediaPackageOutputSettingsFormProperties>({
		});

	}


	/** Ms Smooth Output Settings */
	export interface MsSmoothOutputSettings {

		/** Ms Smooth H265 Packaging Type */
		H265PackagingType?: HlsOutputSettingsH265PackagingType | null;

		/** Placeholder documentation for __string */
		NameModifier?: string | null;
	}

	/** Ms Smooth Output Settings */
	export interface MsSmoothOutputSettingsFormProperties {

		/** Ms Smooth H265 Packaging Type */
		H265PackagingType: FormControl<HlsOutputSettingsH265PackagingType | null | undefined>,

		/** Placeholder documentation for __string */
		NameModifier: FormControl<string | null | undefined>,
	}
	export function CreateMsSmoothOutputSettingsFormGroup() {
		return new FormGroup<MsSmoothOutputSettingsFormProperties>({
			H265PackagingType: new FormControl<HlsOutputSettingsH265PackagingType | null | undefined>(undefined),
			NameModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Multiplex Output Settings */
	export interface MultiplexOutputSettings {

		/**
		 * Reference to an OutputDestination ID defined in the channel
		 * Required
		 */
		Destination: OutputLocationRef;
	}

	/** Multiplex Output Settings */
	export interface MultiplexOutputSettingsFormProperties {
	}
	export function CreateMultiplexOutputSettingsFormGroup() {
		return new FormGroup<MultiplexOutputSettingsFormProperties>({
		});

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

	/** Rtmp Output Settings */
	export interface RtmpOutputSettingsFormProperties {

		/** Rtmp Output Certificate Mode */
		CertificateMode: FormControl<MsSmoothGroupSettingsCertificateMode | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ConnectionRetryInterval: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		NumRetries: FormControl<number | null | undefined>,
	}
	export function CreateRtmpOutputSettingsFormGroup() {
		return new FormGroup<RtmpOutputSettingsFormProperties>({
			CertificateMode: new FormControl<MsSmoothGroupSettingsCertificateMode | null | undefined>(undefined),
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NumRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

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
		FecOutputSettings?: FecOutputSettings;
	}

	/** Udp Output Settings */
	export interface UdpOutputSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max10000
		 * Minimum: 0
		 * Maximum: 10000
		 */
		BufferMsec: FormControl<number | null | undefined>,
	}
	export function CreateUdpOutputSettingsFormGroup() {
		return new FormGroup<UdpOutputSettingsFormProperties>({
			BufferMsec: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
		});

	}


	/** Udp Container Settings */
	export interface UdpContainerSettings {

		/** M2ts Settings */
		M2tsSettings?: M2tsSettings;
	}

	/** Udp Container Settings */
	export interface UdpContainerSettingsFormProperties {
	}
	export function CreateUdpContainerSettingsFormGroup() {
		return new FormGroup<UdpContainerSettingsFormProperties>({
		});

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

	/** Fec Output Settings */
	export interface FecOutputSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin4Max20
		 * Minimum: 4
		 * Maximum: 20
		 */
		ColumnDepth: FormControl<number | null | undefined>,

		/** Fec Output Include Fec */
		IncludeFec: FormControl<FecOutputSettingsIncludeFec | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max20
		 * Minimum: 1
		 * Maximum: 20
		 */
		RowLength: FormControl<number | null | undefined>,
	}
	export function CreateFecOutputSettingsFormGroup() {
		return new FormGroup<FecOutputSettingsFormProperties>({
			ColumnDepth: new FormControl<number | null | undefined>(undefined, [Validators.min(4), Validators.max(20)]),
			IncludeFec: new FormControl<FecOutputSettingsIncludeFec | null | undefined>(undefined),
			RowLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

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

	/** Timecode Config */
	export interface TimecodeConfigFormProperties {

		/**
		 * Timecode Config Source
		 * Required
		 */
		Source: FormControl<TimecodeConfigSource | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max1000000
		 * Minimum: 1
		 * Maximum: 1000000
		 */
		SyncThreshold: FormControl<number | null | undefined>,
	}
	export function CreateTimecodeConfigFormGroup() {
		return new FormGroup<TimecodeConfigFormProperties>({
			Source: new FormControl<TimecodeConfigSource | null | undefined>(undefined, [Validators.required]),
			SyncThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000000)]),
		});

	}

	export enum TimecodeConfigSource { EMBEDDED = 0, SYSTEMCLOCK = 1, ZEROBASED = 2 }


	/** Video settings for this stream. */
	export interface VideoDescription {

		/** Video Codec Settings */
		CodecSettings?: VideoCodecSettings;

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

	/** Video settings for this stream. */
	export interface VideoDescriptionFormProperties {

		/** Placeholder documentation for __integer */
		Height: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** Video Description Respond To Afd */
		RespondToAfd: FormControl<VideoDescriptionRespondToAfd | null | undefined>,

		/** Video Description Scaling Behavior */
		ScalingBehavior: FormControl<VideoDescriptionScalingBehavior | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		Sharpness: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		Width: FormControl<number | null | undefined>,
	}
	export function CreateVideoDescriptionFormGroup() {
		return new FormGroup<VideoDescriptionFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RespondToAfd: new FormControl<VideoDescriptionRespondToAfd | null | undefined>(undefined),
			ScalingBehavior: new FormControl<VideoDescriptionScalingBehavior | null | undefined>(undefined),
			Sharpness: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video Codec Settings */
	export interface VideoCodecSettings {

		/** Frame Capture Settings */
		FrameCaptureSettings?: FrameCaptureSettings;

		/** H264 Settings */
		H264Settings?: H264Settings;

		/** H265 Settings */
		H265Settings?: H265Settings;
	}

	/** Video Codec Settings */
	export interface VideoCodecSettingsFormProperties {
	}
	export function CreateVideoCodecSettingsFormGroup() {
		return new FormGroup<VideoCodecSettingsFormProperties>({
		});

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

	/** Frame Capture Settings */
	export interface FrameCaptureSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1Max3600000
		 * Required
		 * Minimum: 1
		 * Maximum: 3600000
		 */
		CaptureInterval: FormControl<number | null | undefined>,

		/** Frame Capture Interval Unit */
		CaptureIntervalUnits: FormControl<FrameCaptureSettingsCaptureIntervalUnits | null | undefined>,
	}
	export function CreateFrameCaptureSettingsFormGroup() {
		return new FormGroup<FrameCaptureSettingsFormProperties>({
			CaptureInterval: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3600000)]),
			CaptureIntervalUnits: new FormControl<FrameCaptureSettingsCaptureIntervalUnits | null | undefined>(undefined),
		});

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
		ColorSpaceSettings?: H264ColorSpaceSettings;

		/** H264 Entropy Encoding */
		EntropyEncoding?: H264SettingsEntropyEncoding | null;

		/** H264 Filter Settings */
		FilterSettings?: H264FilterSettings;

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

	/** H264 Settings */
	export interface H264SettingsFormProperties {

		/** H264 Adaptive Quantization */
		AdaptiveQuantization: FormControl<H264SettingsAdaptiveQuantization | null | undefined>,

		/** Afd Signaling */
		AfdSignaling: FormControl<H264SettingsAfdSignaling | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1000
		 * Minimum: 1000
		 */
		Bitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max100
		 * Minimum: 0
		 * Maximum: 100
		 */
		BufFillPct: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		BufSize: FormControl<number | null | undefined>,

		/** H264 Color Metadata */
		ColorMetadata: FormControl<H264SettingsColorMetadata | null | undefined>,

		/** H264 Entropy Encoding */
		EntropyEncoding: FormControl<H264SettingsEntropyEncoding | null | undefined>,

		/** Fixed Afd */
		FixedAfd: FormControl<H264SettingsFixedAfd | null | undefined>,

		/** H264 Flicker Aq */
		FlickerAq: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** H264 Force Field Pictures */
		ForceFieldPictures: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** H264 Framerate Control */
		FramerateControl: FormControl<H264SettingsFramerateControl | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FramerateDenominator: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		FramerateNumerator: FormControl<number | null | undefined>,

		/** H264 Gop BReference */
		GopBReference: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		GopClosedCadence: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max7
		 * Minimum: 0
		 * Maximum: 7
		 */
		GopNumBFrames: FormControl<number | null | undefined>,

		/** Placeholder documentation for __double */
		GopSize: FormControl<number | null | undefined>,

		/** H264 Gop Size Units */
		GopSizeUnits: FormControl<H264SettingsGopSizeUnits | null | undefined>,

		/** H264 Level */
		Level: FormControl<H264SettingsLevel | null | undefined>,

		/** H264 Look Ahead Rate Control */
		LookAheadRateControl: FormControl<H264SettingsLookAheadRateControl | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1000
		 * Minimum: 1000
		 */
		MaxBitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max30
		 * Minimum: 0
		 * Maximum: 30
		 */
		MinIInterval: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max6
		 * Minimum: 1
		 * Maximum: 6
		 */
		NumRefFrames: FormControl<number | null | undefined>,

		/** H264 Par Control */
		ParControl: FormControl<H264SettingsFramerateControl | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParDenominator: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ParNumerator: FormControl<number | null | undefined>,

		/** H264 Profile */
		Profile: FormControl<H264SettingsProfile | null | undefined>,

		/** H264 Quality Level */
		QualityLevel: FormControl<H264SettingsQualityLevel | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max10
		 * Minimum: 1
		 * Maximum: 10
		 */
		QvbrQualityLevel: FormControl<number | null | undefined>,

		/** H264 Rate Control Mode */
		RateControlMode: FormControl<H264SettingsRateControlMode | null | undefined>,

		/** H264 Scan Type */
		ScanType: FormControl<H264SettingsScanType | null | undefined>,

		/** H264 Scene Change Detect */
		SceneChangeDetect: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max32
		 * Minimum: 1
		 * Maximum: 32
		 */
		Slices: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max128
		 * Minimum: 0
		 * Maximum: 128
		 */
		Softness: FormControl<number | null | undefined>,

		/** H264 Spatial Aq */
		SpatialAq: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** H264 Sub Gop Length */
		SubgopLength: FormControl<H264SettingsSubgopLength | null | undefined>,

		/** H264 Syntax */
		Syntax: FormControl<H264SettingsSyntax | null | undefined>,

		/** H264 Temporal Aq */
		TemporalAq: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** H264 Timecode Insertion Behavior */
		TimecodeInsertion: FormControl<H264SettingsTimecodeInsertion | null | undefined>,
	}
	export function CreateH264SettingsFormGroup() {
		return new FormGroup<H264SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<H264SettingsAdaptiveQuantization | null | undefined>(undefined),
			AfdSignaling: new FormControl<H264SettingsAfdSignaling | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(1000)]),
			BufFillPct: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			BufSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ColorMetadata: new FormControl<H264SettingsColorMetadata | null | undefined>(undefined),
			EntropyEncoding: new FormControl<H264SettingsEntropyEncoding | null | undefined>(undefined),
			FixedAfd: new FormControl<H264SettingsFixedAfd | null | undefined>(undefined),
			FlickerAq: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			ForceFieldPictures: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			FramerateControl: new FormControl<H264SettingsFramerateControl | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			GopBReference: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			GopNumBFrames: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(7)]),
			GopSize: new FormControl<number | null | undefined>(undefined),
			GopSizeUnits: new FormControl<H264SettingsGopSizeUnits | null | undefined>(undefined),
			Level: new FormControl<H264SettingsLevel | null | undefined>(undefined),
			LookAheadRateControl: new FormControl<H264SettingsLookAheadRateControl | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(1000)]),
			MinIInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(30)]),
			NumRefFrames: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(6)]),
			ParControl: new FormControl<H264SettingsFramerateControl | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			Profile: new FormControl<H264SettingsProfile | null | undefined>(undefined),
			QualityLevel: new FormControl<H264SettingsQualityLevel | null | undefined>(undefined),
			QvbrQualityLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			RateControlMode: new FormControl<H264SettingsRateControlMode | null | undefined>(undefined),
			ScanType: new FormControl<H264SettingsScanType | null | undefined>(undefined),
			SceneChangeDetect: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(32)]),
			Softness: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(128)]),
			SpatialAq: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			SubgopLength: new FormControl<H264SettingsSubgopLength | null | undefined>(undefined),
			Syntax: new FormControl<H264SettingsSyntax | null | undefined>(undefined),
			TemporalAq: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			TimecodeInsertion: new FormControl<H264SettingsTimecodeInsertion | null | undefined>(undefined),
		});

	}

	export enum H264SettingsAdaptiveQuantization { HIGH = 0, HIGHER = 1, LOW = 2, MAX = 3, MEDIUM = 4, OFF = 5 }

	export enum H264SettingsAfdSignaling { AUTO = 0, FIXED = 1, NONE = 2 }

	export enum H264SettingsColorMetadata { IGNORE = 0, INSERT = 1 }


	/** H264 Color Space Settings */
	export interface H264ColorSpaceSettings {

		/** Passthrough applies no color space conversion to the output */
		ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

		/** Rec601 Settings */
		Rec601Settings?: Rec601Settings;

		/** Rec709 Settings */
		Rec709Settings?: Rec709Settings;
	}

	/** H264 Color Space Settings */
	export interface H264ColorSpaceSettingsFormProperties {
	}
	export function CreateH264ColorSpaceSettingsFormGroup() {
		return new FormGroup<H264ColorSpaceSettingsFormProperties>({
		});

	}


	/** Passthrough applies no color space conversion to the output */
	export interface ColorSpacePassthroughSettings {
	}

	/** Passthrough applies no color space conversion to the output */
	export interface ColorSpacePassthroughSettingsFormProperties {
	}
	export function CreateColorSpacePassthroughSettingsFormGroup() {
		return new FormGroup<ColorSpacePassthroughSettingsFormProperties>({
		});

	}


	/** Rec601 Settings */
	export interface Rec601Settings {
	}

	/** Rec601 Settings */
	export interface Rec601SettingsFormProperties {
	}
	export function CreateRec601SettingsFormGroup() {
		return new FormGroup<Rec601SettingsFormProperties>({
		});

	}


	/** Rec709 Settings */
	export interface Rec709Settings {
	}

	/** Rec709 Settings */
	export interface Rec709SettingsFormProperties {
	}
	export function CreateRec709SettingsFormGroup() {
		return new FormGroup<Rec709SettingsFormProperties>({
		});

	}

	export enum H264SettingsEntropyEncoding { CABAC = 0, CAVLC = 1 }


	/** H264 Filter Settings */
	export interface H264FilterSettings {

		/** Temporal Filter Settings */
		TemporalFilterSettings?: TemporalFilterSettings;
	}

	/** H264 Filter Settings */
	export interface H264FilterSettingsFormProperties {
	}
	export function CreateH264FilterSettingsFormGroup() {
		return new FormGroup<H264FilterSettingsFormProperties>({
		});

	}


	/** Temporal Filter Settings */
	export interface TemporalFilterSettings {

		/** Temporal Filter Post Filter Sharpening */
		PostFilterSharpening?: TemporalFilterSettingsPostFilterSharpening | null;

		/** Temporal Filter Strength */
		Strength?: TemporalFilterSettingsStrength | null;
	}

	/** Temporal Filter Settings */
	export interface TemporalFilterSettingsFormProperties {

		/** Temporal Filter Post Filter Sharpening */
		PostFilterSharpening: FormControl<TemporalFilterSettingsPostFilterSharpening | null | undefined>,

		/** Temporal Filter Strength */
		Strength: FormControl<TemporalFilterSettingsStrength | null | undefined>,
	}
	export function CreateTemporalFilterSettingsFormGroup() {
		return new FormGroup<TemporalFilterSettingsFormProperties>({
			PostFilterSharpening: new FormControl<TemporalFilterSettingsPostFilterSharpening | null | undefined>(undefined),
			Strength: new FormControl<TemporalFilterSettingsStrength | null | undefined>(undefined),
		});

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
		ColorSpaceSettings?: H265ColorSpaceSettings;

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

	/** H265 Settings */
	export interface H265SettingsFormProperties {

		/** H265 Adaptive Quantization */
		AdaptiveQuantization: FormControl<H264SettingsAdaptiveQuantization | null | undefined>,

		/** Afd Signaling */
		AfdSignaling: FormControl<H264SettingsAfdSignaling | null | undefined>,

		/** H265 Alternative Transfer Function */
		AlternativeTransferFunction: FormControl<H265SettingsAlternativeTransferFunction | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin100000Max40000000
		 * Minimum: 100000
		 * Maximum: 40000000
		 */
		Bitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin100000Max80000000
		 * Minimum: 100000
		 * Maximum: 80000000
		 */
		BufSize: FormControl<number | null | undefined>,

		/** H265 Color Metadata */
		ColorMetadata: FormControl<H264SettingsColorMetadata | null | undefined>,

		/** Fixed Afd */
		FixedAfd: FormControl<H264SettingsFixedAfd | null | undefined>,

		/** H265 Flicker Aq */
		FlickerAq: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max3003
		 * Required
		 * Minimum: 1
		 * Maximum: 3003
		 */
		FramerateDenominator: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Required
		 * Minimum: 1
		 */
		FramerateNumerator: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		GopClosedCadence: FormControl<number | null | undefined>,

		/** Placeholder documentation for __double */
		GopSize: FormControl<number | null | undefined>,

		/** H265 Gop Size Units */
		GopSizeUnits: FormControl<H264SettingsGopSizeUnits | null | undefined>,

		/** H265 Level */
		Level: FormControl<H265SettingsLevel | null | undefined>,

		/** H265 Look Ahead Rate Control */
		LookAheadRateControl: FormControl<H264SettingsLookAheadRateControl | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin100000Max40000000
		 * Minimum: 100000
		 * Maximum: 40000000
		 */
		MaxBitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max30
		 * Minimum: 0
		 * Maximum: 30
		 */
		MinIInterval: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParDenominator: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		ParNumerator: FormControl<number | null | undefined>,

		/** H265 Profile */
		Profile: FormControl<H265SettingsProfile | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max10
		 * Minimum: 1
		 * Maximum: 10
		 */
		QvbrQualityLevel: FormControl<number | null | undefined>,

		/** H265 Rate Control Mode */
		RateControlMode: FormControl<H265SettingsRateControlMode | null | undefined>,

		/** H265 Scan Type */
		ScanType: FormControl<H265SettingsScanType | null | undefined>,

		/** H265 Scene Change Detect */
		SceneChangeDetect: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max16
		 * Minimum: 1
		 * Maximum: 16
		 */
		Slices: FormControl<number | null | undefined>,

		/** H265 Tier */
		Tier: FormControl<H265SettingsTier | null | undefined>,

		/** H265 Timecode Insertion Behavior */
		TimecodeInsertion: FormControl<H264SettingsTimecodeInsertion | null | undefined>,
	}
	export function CreateH265SettingsFormGroup() {
		return new FormGroup<H265SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<H264SettingsAdaptiveQuantization | null | undefined>(undefined),
			AfdSignaling: new FormControl<H264SettingsAfdSignaling | null | undefined>(undefined),
			AlternativeTransferFunction: new FormControl<H265SettingsAlternativeTransferFunction | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(100000), Validators.max(40000000)]),
			BufSize: new FormControl<number | null | undefined>(undefined, [Validators.min(100000), Validators.max(80000000)]),
			ColorMetadata: new FormControl<H264SettingsColorMetadata | null | undefined>(undefined),
			FixedAfd: new FormControl<H264SettingsFixedAfd | null | undefined>(undefined),
			FlickerAq: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3003)]),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			GopSize: new FormControl<number | null | undefined>(undefined),
			GopSizeUnits: new FormControl<H264SettingsGopSizeUnits | null | undefined>(undefined),
			Level: new FormControl<H265SettingsLevel | null | undefined>(undefined),
			LookAheadRateControl: new FormControl<H264SettingsLookAheadRateControl | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(100000), Validators.max(40000000)]),
			MinIInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(30)]),
			ParDenominator: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ParNumerator: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Profile: new FormControl<H265SettingsProfile | null | undefined>(undefined),
			QvbrQualityLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			RateControlMode: new FormControl<H265SettingsRateControlMode | null | undefined>(undefined),
			ScanType: new FormControl<H265SettingsScanType | null | undefined>(undefined),
			SceneChangeDetect: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(16)]),
			Tier: new FormControl<H265SettingsTier | null | undefined>(undefined),
			TimecodeInsertion: new FormControl<H264SettingsTimecodeInsertion | null | undefined>(undefined),
		});

	}

	export enum H265SettingsAlternativeTransferFunction { INSERT = 0, OMIT = 1 }


	/** H265 Color Space Settings */
	export interface H265ColorSpaceSettings {

		/** Passthrough applies no color space conversion to the output */
		ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;

		/** Hdr10 Settings */
		Hdr10Settings?: Hdr10Settings;

		/** Rec601 Settings */
		Rec601Settings?: Rec601Settings;

		/** Rec709 Settings */
		Rec709Settings?: Rec709Settings;
	}

	/** H265 Color Space Settings */
	export interface H265ColorSpaceSettingsFormProperties {
	}
	export function CreateH265ColorSpaceSettingsFormGroup() {
		return new FormGroup<H265ColorSpaceSettingsFormProperties>({
		});

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

	/** Hdr10 Settings */
	export interface Hdr10SettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max32768
		 * Minimum: 0
		 * Maximum: 32768
		 */
		MaxCll: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max32768
		 * Minimum: 0
		 * Maximum: 32768
		 */
		MaxFall: FormControl<number | null | undefined>,
	}
	export function CreateHdr10SettingsFormGroup() {
		return new FormGroup<Hdr10SettingsFormProperties>({
			MaxCll: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(32768)]),
			MaxFall: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(32768)]),
		});

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
		AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;

		/** Placeholder documentation for __string */
		InputAttachmentName?: string | null;

		/** Placeholder documentation for __string */
		InputId?: string | null;

		/** Live Event input parameters. There can be multiple inputs in a single Live Event. */
		InputSettings?: InputSettings;
	}

	/** Placeholder documentation for InputAttachment */
	export interface InputAttachmentFormProperties {

		/** Placeholder documentation for __string */
		InputAttachmentName: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		InputId: FormControl<string | null | undefined>,
	}
	export function CreateInputAttachmentFormGroup() {
		return new FormGroup<InputAttachmentFormProperties>({
			InputAttachmentName: new FormControl<string | null | undefined>(undefined),
			InputId: new FormControl<string | null | undefined>(undefined),
		});

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

	/** The settings for Automatic Input Failover. */
	export interface AutomaticInputFailoverSettingsFormProperties {

		/**
		 * Input preference when deciding which input to make active when a previously failed input has recovered.
		 * If \"EQUAL_INPUT_PREFERENCE\", then the active input will stay active as long as it is healthy.
		 * If \"PRIMARY_INPUT_PREFERRED\", then always switch back to the primary input when it is healthy.
		 */
		InputPreference: FormControl<AutomaticInputFailoverSettingsInputPreference | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		SecondaryInputId: FormControl<string | null | undefined>,
	}
	export function CreateAutomaticInputFailoverSettingsFormGroup() {
		return new FormGroup<AutomaticInputFailoverSettingsFormProperties>({
			InputPreference: new FormControl<AutomaticInputFailoverSettingsInputPreference | null | undefined>(undefined),
			SecondaryInputId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutomaticInputFailoverSettingsInputPreference { EQUAL_INPUT_PREFERENCE = 0, PRIMARY_INPUT_PREFERRED = 1 }


	/** Live Event input parameters. There can be multiple inputs in a single Live Event. */
	export interface InputSettings {

		/** Placeholder documentation for __listOfAudioSelector */
		AudioSelectors?: Array<AudioSelector>;

		/** Placeholder documentation for __listOfCaptionSelector */
		CaptionSelectors?: Array<CaptionSelector>;

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
		NetworkInputSettings?: NetworkInputSettings;

		/** Smpte2038 Data Preference */
		Smpte2038DataPreference?: InputSettingsSmpte2038DataPreference | null;

		/** Input Source End Behavior */
		SourceEndBehavior?: InputSettingsSourceEndBehavior | null;

		/** Specifies a particular video stream within an input source. An input may have only a single video selector. */
		VideoSelector?: VideoSelector;
	}

	/** Live Event input parameters. There can be multiple inputs in a single Live Event. */
	export interface InputSettingsFormProperties {

		/** Input Deblock Filter */
		DeblockFilter: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/** Input Denoise Filter */
		DenoiseFilter: FormControl<Ac3SettingsLfeFilter | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max5
		 * Minimum: 1
		 * Maximum: 5
		 */
		FilterStrength: FormControl<number | null | undefined>,

		/** Input Filter */
		InputFilter: FormControl<InputSettingsInputFilter | null | undefined>,

		/** Smpte2038 Data Preference */
		Smpte2038DataPreference: FormControl<InputSettingsSmpte2038DataPreference | null | undefined>,

		/** Input Source End Behavior */
		SourceEndBehavior: FormControl<InputSettingsSourceEndBehavior | null | undefined>,
	}
	export function CreateInputSettingsFormGroup() {
		return new FormGroup<InputSettingsFormProperties>({
			DeblockFilter: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			DenoiseFilter: new FormControl<Ac3SettingsLfeFilter | null | undefined>(undefined),
			FilterStrength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			InputFilter: new FormControl<InputSettingsInputFilter | null | undefined>(undefined),
			Smpte2038DataPreference: new FormControl<InputSettingsSmpte2038DataPreference | null | undefined>(undefined),
			SourceEndBehavior: new FormControl<InputSettingsSourceEndBehavior | null | undefined>(undefined),
		});

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
		SelectorSettings?: AudioSelectorSettings;
	}

	/** Audio Selector */
	export interface AudioSelectorFormProperties {

		/**
		 * Placeholder documentation for __stringMin1
		 * Required
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAudioSelectorFormGroup() {
		return new FormGroup<AudioSelectorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** Audio Selector Settings */
	export interface AudioSelectorSettings {

		/** Audio Language Selection */
		AudioLanguageSelection?: AudioLanguageSelection;

		/** Audio Pid Selection */
		AudioPidSelection?: AudioPidSelection;

		/** Audio Track Selection */
		AudioTrackSelection?: AudioTrackSelection;
	}

	/** Audio Selector Settings */
	export interface AudioSelectorSettingsFormProperties {
	}
	export function CreateAudioSelectorSettingsFormGroup() {
		return new FormGroup<AudioSelectorSettingsFormProperties>({
		});

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

	/** Audio Language Selection */
	export interface AudioLanguageSelectionFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		LanguageCode: FormControl<string | null | undefined>,

		/** Audio Language Selection Policy */
		LanguageSelectionPolicy: FormControl<AudioLanguageSelectionLanguageSelectionPolicy | null | undefined>,
	}
	export function CreateAudioLanguageSelectionFormGroup() {
		return new FormGroup<AudioLanguageSelectionFormProperties>({
			LanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageSelectionPolicy: new FormControl<AudioLanguageSelectionLanguageSelectionPolicy | null | undefined>(undefined),
		});

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

	/** Audio Pid Selection */
	export interface AudioPidSelectionFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max8191
		 * Required
		 * Minimum: 0
		 * Maximum: 8191
		 */
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateAudioPidSelectionFormGroup() {
		return new FormGroup<AudioPidSelectionFormProperties>({
			Pid: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(8191)]),
		});

	}


	/** Audio Track Selection */
	export interface AudioTrackSelection {

		/**
		 * Placeholder documentation for __listOfAudioTrack
		 * Required
		 */
		Tracks: Array<AudioTrack>;
	}

	/** Audio Track Selection */
	export interface AudioTrackSelectionFormProperties {
	}
	export function CreateAudioTrackSelectionFormGroup() {
		return new FormGroup<AudioTrackSelectionFormProperties>({
		});

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

	/** Audio Track */
	export interface AudioTrackFormProperties {

		/**
		 * Placeholder documentation for __integerMin1
		 * Required
		 * Minimum: 1
		 */
		Track: FormControl<number | null | undefined>,
	}
	export function CreateAudioTrackFormGroup() {
		return new FormGroup<AudioTrackFormProperties>({
			Track: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

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
		SelectorSettings?: CaptionSelectorSettings;
	}

	/** Output groups for this Live Event. Output groups contain information about where streams should be distributed. */
	export interface CaptionSelectorFormProperties {

		/** Placeholder documentation for __string */
		LanguageCode: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __stringMin1
		 * Required
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCaptionSelectorFormGroup() {
		return new FormGroup<CaptionSelectorFormProperties>({
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** Caption Selector Settings */
	export interface CaptionSelectorSettings {

		/** Arib Source Settings */
		AribSourceSettings?: AribSourceSettings;

		/** Dvb Sub Source Settings */
		DvbSubSourceSettings?: DvbSubSourceSettings;

		/** Embedded Source Settings */
		EmbeddedSourceSettings?: EmbeddedSourceSettings;

		/** Scte20 Source Settings */
		Scte20SourceSettings?: Scte20SourceSettings;

		/** Scte27 Source Settings */
		Scte27SourceSettings?: Scte27SourceSettings;

		/** Teletext Source Settings */
		TeletextSourceSettings?: TeletextSourceSettings;
	}

	/** Caption Selector Settings */
	export interface CaptionSelectorSettingsFormProperties {
	}
	export function CreateCaptionSelectorSettingsFormGroup() {
		return new FormGroup<CaptionSelectorSettingsFormProperties>({
		});

	}


	/** Arib Source Settings */
	export interface AribSourceSettings {
	}

	/** Arib Source Settings */
	export interface AribSourceSettingsFormProperties {
	}
	export function CreateAribSourceSettingsFormGroup() {
		return new FormGroup<AribSourceSettingsFormProperties>({
		});

	}


	/** Dvb Sub Source Settings */
	export interface DvbSubSourceSettings {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Pid?: number | null;
	}

	/** Dvb Sub Source Settings */
	export interface DvbSubSourceSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateDvbSubSourceSettingsFormGroup() {
		return new FormGroup<DvbSubSourceSettingsFormProperties>({
			Pid: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

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

	/** Embedded Source Settings */
	export interface EmbeddedSourceSettingsFormProperties {

		/** Embedded Convert608 To708 */
		Convert608To708: FormControl<EmbeddedSourceSettingsConvert608To708 | null | undefined>,

		/** Embedded Scte20 Detection */
		Scte20Detection: FormControl<EmbeddedSourceSettingsScte20Detection | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Minimum: 1
		 * Maximum: 4
		 */
		Source608ChannelNumber: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max5
		 * Minimum: 1
		 * Maximum: 5
		 */
		Source608TrackNumber: FormControl<number | null | undefined>,
	}
	export function CreateEmbeddedSourceSettingsFormGroup() {
		return new FormGroup<EmbeddedSourceSettingsFormProperties>({
			Convert608To708: new FormControl<EmbeddedSourceSettingsConvert608To708 | null | undefined>(undefined),
			Scte20Detection: new FormControl<EmbeddedSourceSettingsScte20Detection | null | undefined>(undefined),
			Source608ChannelNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(4)]),
			Source608TrackNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
		});

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

	/** Scte20 Source Settings */
	export interface Scte20SourceSettingsFormProperties {

		/** Scte20 Convert608 To708 */
		Convert608To708: FormControl<EmbeddedSourceSettingsConvert608To708 | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1Max4
		 * Minimum: 1
		 * Maximum: 4
		 */
		Source608ChannelNumber: FormControl<number | null | undefined>,
	}
	export function CreateScte20SourceSettingsFormGroup() {
		return new FormGroup<Scte20SourceSettingsFormProperties>({
			Convert608To708: new FormControl<EmbeddedSourceSettingsConvert608To708 | null | undefined>(undefined),
			Source608ChannelNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(4)]),
		});

	}


	/** Scte27 Source Settings */
	export interface Scte27SourceSettings {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Pid?: number | null;
	}

	/** Scte27 Source Settings */
	export interface Scte27SourceSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1
		 * Minimum: 1
		 */
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateScte27SourceSettingsFormGroup() {
		return new FormGroup<Scte27SourceSettingsFormProperties>({
			Pid: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Teletext Source Settings */
	export interface TeletextSourceSettings {

		/** Placeholder documentation for __string */
		PageNumber?: string | null;
	}

	/** Teletext Source Settings */
	export interface TeletextSourceSettingsFormProperties {

		/** Placeholder documentation for __string */
		PageNumber: FormControl<string | null | undefined>,
	}
	export function CreateTeletextSourceSettingsFormGroup() {
		return new FormGroup<TeletextSourceSettingsFormProperties>({
			PageNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputSettingsInputFilter { AUTO = 0, DISABLED = 1, FORCED = 2 }


	/** Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection. */
	export interface NetworkInputSettings {

		/** Hls Input Settings */
		HlsInputSettings?: HlsInputSettings;

		/** Network Input Server Validation */
		ServerValidation?: NetworkInputSettingsServerValidation | null;
	}

	/** Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection. */
	export interface NetworkInputSettingsFormProperties {

		/** Network Input Server Validation */
		ServerValidation: FormControl<NetworkInputSettingsServerValidation | null | undefined>,
	}
	export function CreateNetworkInputSettingsFormGroup() {
		return new FormGroup<NetworkInputSettingsFormProperties>({
			ServerValidation: new FormControl<NetworkInputSettingsServerValidation | null | undefined>(undefined),
		});

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

	/** Hls Input Settings */
	export interface HlsInputSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Bandwidth: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		BufferSegments: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		Retries: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0
		 * Minimum: 0
		 */
		RetryInterval: FormControl<number | null | undefined>,
	}
	export function CreateHlsInputSettingsFormGroup() {
		return new FormGroup<HlsInputSettingsFormProperties>({
			Bandwidth: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			BufferSegments: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Retries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RetryInterval: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

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
		SelectorSettings?: VideoSelectorSettings;
	}

	/** Specifies a particular video stream within an input source. An input may have only a single video selector. */
	export interface VideoSelectorFormProperties {

		/** Video Selector Color Space */
		ColorSpace: FormControl<VideoSelectorColorSpace | null | undefined>,

		/** Video Selector Color Space Usage */
		ColorSpaceUsage: FormControl<VideoSelectorColorSpaceUsage | null | undefined>,
	}
	export function CreateVideoSelectorFormGroup() {
		return new FormGroup<VideoSelectorFormProperties>({
			ColorSpace: new FormControl<VideoSelectorColorSpace | null | undefined>(undefined),
			ColorSpaceUsage: new FormControl<VideoSelectorColorSpaceUsage | null | undefined>(undefined),
		});

	}

	export enum VideoSelectorColorSpace { FOLLOW = 0, REC_601 = 1, REC_709 = 2 }

	export enum VideoSelectorColorSpaceUsage { FALLBACK = 0, FORCE = 1 }


	/** Video Selector Settings */
	export interface VideoSelectorSettings {

		/** Video Selector Pid */
		VideoSelectorPid?: VideoSelectorPid;

		/** Video Selector Program Id */
		VideoSelectorProgramId?: VideoSelectorProgramId;
	}

	/** Video Selector Settings */
	export interface VideoSelectorSettingsFormProperties {
	}
	export function CreateVideoSelectorSettingsFormGroup() {
		return new FormGroup<VideoSelectorSettingsFormProperties>({
		});

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

	/** Video Selector Pid */
	export interface VideoSelectorPidFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max8191
		 * Minimum: 0
		 * Maximum: 8191
		 */
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateVideoSelectorPidFormGroup() {
		return new FormGroup<VideoSelectorPidFormProperties>({
			Pid: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(8191)]),
		});

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

	/** Video Selector Program Id */
	export interface VideoSelectorProgramIdFormProperties {

		/**
		 * Placeholder documentation for __integerMin0Max65536
		 * Minimum: 0
		 * Maximum: 65536
		 */
		ProgramId: FormControl<number | null | undefined>,
	}
	export function CreateVideoSelectorProgramIdFormGroup() {
		return new FormGroup<VideoSelectorProgramIdFormProperties>({
			ProgramId: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65536)]),
		});

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

	/** Placeholder documentation for InputSpecification */
	export interface InputSpecificationFormProperties {

		/** codec in increasing order of complexity */
		Codec: FormControl<InputSpecificationCodec | null | undefined>,

		/** Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
		MaximumBitrate: FormControl<InputSpecificationMaximumBitrate | null | undefined>,

		/**
		 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution: FormControl<InputSpecificationResolution | null | undefined>,
	}
	export function CreateInputSpecificationFormGroup() {
		return new FormGroup<InputSpecificationFormProperties>({
			Codec: new FormControl<InputSpecificationCodec | null | undefined>(undefined),
			MaximumBitrate: new FormControl<InputSpecificationMaximumBitrate | null | undefined>(undefined),
			Resolution: new FormControl<InputSpecificationResolution | null | undefined>(undefined),
		});

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

	/** Runtime details of a pipeline when a channel is running. */
	export interface PipelineDetailFormProperties {

		/** Placeholder documentation for __string */
		ActiveInputAttachmentName: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		ActiveInputSwitchActionName: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		PipelineId: FormControl<string | null | undefined>,
	}
	export function CreatePipelineDetailFormGroup() {
		return new FormGroup<PipelineDetailFormProperties>({
			ActiveInputAttachmentName: new FormControl<string | null | undefined>(undefined),
			ActiveInputSwitchActionName: new FormControl<string | null | undefined>(undefined),
			PipelineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8, UPDATING = 9, UPDATE_FAILED = 10 }


	/** Placeholder documentation for Tags */
	export interface Tags {
	}

	/** Placeholder documentation for Tags */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

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
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}


	/** Placeholder documentation for CreateInputResponse */
	export interface CreateInputResponse {

		/** Placeholder documentation for Input */
		Input?: Input;
	}

	/** Placeholder documentation for CreateInputResponse */
	export interface CreateInputResponseFormProperties {
	}
	export function CreateCreateInputResponseFormGroup() {
		return new FormGroup<CreateInputResponseFormProperties>({
		});

	}


	/** Placeholder documentation for Input */
	export interface Input {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AttachedChannels?: Array<string>;

		/** Placeholder documentation for __listOfInputDestination */
		Destinations?: Array<InputDestination>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** A standard input has two sources and a single pipeline input only has one. */
		InputClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings>;

		/**
		 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
		 * change the source url of the input dynamically using an input switch action. However, the only input type
		 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
		 */
		InputSourceType?: InputInputSourceType | null;

		/** Placeholder documentation for __listOfMediaConnectFlow */
		MediaConnectFlows?: Array<MediaConnectFlow>;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for __listOf__string */
		SecurityGroups?: Array<string>;

		/** Placeholder documentation for __listOfInputSource */
		Sources?: Array<InputSource>;

		/** Placeholder documentation for InputState */
		State?: InputState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for InputType */
		Type?: InputType | null;
	}

	/** Placeholder documentation for Input */
	export interface InputFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** A standard input has two sources and a single pipeline input only has one. */
		InputClass: FormControl<ChannelChannelClass | null | undefined>,

		/**
		 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
		 * change the source url of the input dynamically using an input switch action. However, the only input type
		 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
		 */
		InputSourceType: FormControl<InputInputSourceType | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for InputState */
		State: FormControl<InputState | null | undefined>,

		/** Placeholder documentation for InputType */
		Type: FormControl<InputType | null | undefined>,
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InputClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			InputSourceType: new FormControl<InputInputSourceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InputState | null | undefined>(undefined),
			Type: new FormControl<InputType | null | undefined>(undefined),
		});

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
		Vpc?: InputDestinationVpc;
	}

	/** The settings for a PUSH type input. */
	export interface InputDestinationFormProperties {

		/** Placeholder documentation for __string */
		Ip: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Port: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateInputDestinationFormGroup() {
		return new FormGroup<InputDestinationFormProperties>({
			Ip: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for a VPC type input destination. */
	export interface InputDestinationVpc {

		/** Placeholder documentation for __string */
		AvailabilityZone?: string | null;

		/** Placeholder documentation for __string */
		NetworkInterfaceId?: string | null;
	}

	/** The properties for a VPC type input destination. */
	export interface InputDestinationVpcFormProperties {

		/** Placeholder documentation for __string */
		AvailabilityZone: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		NetworkInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateInputDestinationVpcFormGroup() {
		return new FormGroup<InputDestinationVpcFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for an input device. */
	export interface InputDeviceSettings {

		/** Placeholder documentation for __string */
		Id?: string | null;
	}

	/** Settings for an input device. */
	export interface InputDeviceSettingsFormProperties {

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInputDeviceSettingsFormGroup() {
		return new FormGroup<InputDeviceSettingsFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputInputSourceType { STATIC = 0, DYNAMIC = 1 }


	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlow {

		/** Placeholder documentation for __string */
		FlowArn?: string | null;
	}

	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlowFormProperties {

		/** Placeholder documentation for __string */
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaConnectFlowFormGroup() {
		return new FormGroup<MediaConnectFlowFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

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

	/** The settings for a PULL type input. */
	export interface InputSourceFormProperties {

		/** Placeholder documentation for __string */
		PasswordParam: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Url: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateInputSourceFormGroup() {
		return new FormGroup<InputSourceFormProperties>({
			PasswordParam: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputState { CREATING = 0, DETACHED = 1, ATTACHED = 2, DELETING = 3, DELETED = 4 }

	export enum InputType { UDP_PUSH = 0, RTP_PUSH = 1, RTMP_PUSH = 2, RTMP_PULL = 3, URL_PULL = 4, MP4_FILE = 5, MEDIACONNECT = 6, INPUT_DEVICE = 7 }


	/** Endpoint settings for a PUSH type input. */
	export interface InputDestinationRequest {

		/** Placeholder documentation for __string */
		StreamName?: string | null;
	}

	/** Endpoint settings for a PUSH type input. */
	export interface InputDestinationRequestFormProperties {

		/** Placeholder documentation for __string */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateInputDestinationRequestFormGroup() {
		return new FormGroup<InputDestinationRequestFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlowRequest {

		/** Placeholder documentation for __string */
		FlowArn?: string | null;
	}

	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlowRequestFormProperties {

		/** Placeholder documentation for __string */
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaConnectFlowRequestFormGroup() {
		return new FormGroup<MediaConnectFlowRequestFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Settings for for a PULL type input. */
	export interface InputSourceRequestFormProperties {

		/** Placeholder documentation for __string */
		PasswordParam: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Url: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateInputSourceRequestFormGroup() {
		return new FormGroup<InputSourceRequestFormProperties>({
			PasswordParam: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for CreateInputSecurityGroupResponse */
	export interface CreateInputSecurityGroupResponse {

		/** An Input Security Group */
		SecurityGroup?: InputSecurityGroup;
	}

	/** Placeholder documentation for CreateInputSecurityGroupResponse */
	export interface CreateInputSecurityGroupResponseFormProperties {
	}
	export function CreateCreateInputSecurityGroupResponseFormGroup() {
		return new FormGroup<CreateInputSecurityGroupResponseFormProperties>({
		});

	}


	/** An Input Security Group */
	export interface InputSecurityGroup {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOf__string */
		Inputs?: Array<string>;

		/** Placeholder documentation for InputSecurityGroupState */
		State?: InputSecurityGroupState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for __listOfInputWhitelistRule */
		WhitelistRules?: Array<InputWhitelistRule>;
	}

	/** An Input Security Group */
	export interface InputSecurityGroupFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for InputSecurityGroupState */
		State: FormControl<InputSecurityGroupState | null | undefined>,
	}
	export function CreateInputSecurityGroupFormGroup() {
		return new FormGroup<InputSecurityGroupFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InputSecurityGroupState | null | undefined>(undefined),
		});

	}

	export enum InputSecurityGroupState { IDLE = 0, IN_USE = 1, UPDATING = 2, DELETED = 3 }


	/** Whitelist rule */
	export interface InputWhitelistRule {

		/** Placeholder documentation for __string */
		Cidr?: string | null;
	}

	/** Whitelist rule */
	export interface InputWhitelistRuleFormProperties {

		/** Placeholder documentation for __string */
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateInputWhitelistRuleFormGroup() {
		return new FormGroup<InputWhitelistRuleFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An IPv4 CIDR to whitelist. */
	export interface InputWhitelistRuleCidr {

		/** Placeholder documentation for __string */
		Cidr?: string | null;
	}

	/** An IPv4 CIDR to whitelist. */
	export interface InputWhitelistRuleCidrFormProperties {

		/** Placeholder documentation for __string */
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateInputWhitelistRuleCidrFormGroup() {
		return new FormGroup<InputWhitelistRuleCidrFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for CreateMultiplexResponse */
	export interface CreateMultiplexResponse {

		/** The multiplex object. */
		Multiplex?: Multiplex;
	}

	/** Placeholder documentation for CreateMultiplexResponse */
	export interface CreateMultiplexResponseFormProperties {
	}
	export function CreateCreateMultiplexResponseFormGroup() {
		return new FormGroup<CreateMultiplexResponseFormProperties>({
		});

	}


	/** The multiplex object. */
	export interface Multiplex {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string>;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** The multiplex object. */
	export interface MultiplexFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ProgramCount: FormControl<number | null | undefined>,

		/** The current state of the multiplex. */
		State: FormControl<MultiplexState | null | undefined>,
	}
	export function CreateMultiplexFormGroup() {
		return new FormGroup<MultiplexFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			ProgramCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<MultiplexState | null | undefined>(undefined),
		});

	}


	/** Multiplex output destination settings */
	export interface MultiplexOutputDestination {

		/** Multiplex MediaConnect output destination settings. */
		MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings;
	}

	/** Multiplex output destination settings */
	export interface MultiplexOutputDestinationFormProperties {
	}
	export function CreateMultiplexOutputDestinationFormGroup() {
		return new FormGroup<MultiplexOutputDestinationFormProperties>({
		});

	}


	/** Multiplex MediaConnect output destination settings. */
	export interface MultiplexMediaConnectOutputDestinationSettings {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		EntitlementArn?: string | null;
	}

	/** Multiplex MediaConnect output destination settings. */
	export interface MultiplexMediaConnectOutputDestinationSettingsFormProperties {

		/**
		 * Placeholder documentation for __stringMin1
		 * Min length: 1
		 */
		EntitlementArn: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexMediaConnectOutputDestinationSettingsFormGroup() {
		return new FormGroup<MultiplexMediaConnectOutputDestinationSettingsFormProperties>({
			EntitlementArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

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

	/** Contains configuration for a Multiplex event */
	export interface MultiplexSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1000Max3000
		 * Minimum: 1000
		 * Maximum: 3000
		 */
		MaximumVideoBufferDelayMilliseconds: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Required
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max100000000
		 * Minimum: 0
		 * Maximum: 100000000
		 */
		TransportStreamReservedBitrate: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexSettingsFormGroup() {
		return new FormGroup<MultiplexSettingsFormProperties>({
			MaximumVideoBufferDelayMilliseconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(3000)]),
			TransportStreamBitrate: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1000000), Validators.max(100000000)]),
			TransportStreamId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(65535)]),
			TransportStreamReservedBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000000)]),
		});

	}

	export enum MultiplexState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/** Placeholder documentation for CreateMultiplexProgramResponse */
	export interface CreateMultiplexProgramResponse {

		/** The multiplex program object. */
		MultiplexProgram?: MultiplexProgram;
	}

	/** Placeholder documentation for CreateMultiplexProgramResponse */
	export interface CreateMultiplexProgramResponseFormProperties {
	}
	export function CreateCreateMultiplexProgramResponseFormGroup() {
		return new FormGroup<CreateMultiplexProgramResponseFormProperties>({
		});

	}


	/** The multiplex program object. */
	export interface MultiplexProgram {

		/** Placeholder documentation for __string */
		ChannelId?: string | null;

		/** Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings;

		/** Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

		/** Placeholder documentation for __string */
		ProgramName?: string | null;
	}

	/** The multiplex program object. */
	export interface MultiplexProgramFormProperties {

		/** Placeholder documentation for __string */
		ChannelId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		ProgramName: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexProgramFormGroup() {
		return new FormGroup<MultiplexProgramFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined),
		});

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
		ServiceDescriptor?: MultiplexProgramServiceDescriptor;

		/** The video configuration for each program in a multiplex. */
		VideoSettings?: MultiplexVideoSettings;
	}

	/** Multiplex Program settings configuration. */
	export interface MultiplexProgramSettingsFormProperties {

		/**
		 * Indicates which pipeline is preferred by the multiplex for program ingest.
		 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
		 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
		 * it will not switch back to the other pipeline based on it recovering to a healthy state,
		 * it will only switch if the active pipeline becomes unhealthy.
		 */
		PreferredChannelPipeline: FormControl<MultiplexProgramSettingsPreferredChannelPipeline | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNumber: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexProgramSettingsFormGroup() {
		return new FormGroup<MultiplexProgramSettingsFormProperties>({
			PreferredChannelPipeline: new FormControl<MultiplexProgramSettingsPreferredChannelPipeline | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(65535)]),
		});

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

	/** Transport stream service descriptor configuration for the Multiplex program. */
	export interface MultiplexProgramServiceDescriptorFormProperties {

		/**
		 * Placeholder documentation for __stringMax256
		 * Required
		 * Max length: 256
		 */
		ProviderName: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __stringMax256
		 * Required
		 * Max length: 256
		 */
		ServiceName: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexProgramServiceDescriptorFormGroup() {
		return new FormGroup<MultiplexProgramServiceDescriptorFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
			ServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

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
		StatmuxSettings?: MultiplexStatmuxVideoSettings;
	}

	/** The video configuration for each program in a multiplex. */
	export interface MultiplexVideoSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		ConstantBitrate: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexVideoSettingsFormGroup() {
		return new FormGroup<MultiplexVideoSettingsFormProperties>({
			ConstantBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(100000), Validators.max(100000000)]),
		});

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

	/** Statmux rate control settings */
	export interface MultiplexStatmuxVideoSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		MaximumBitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin100000Max100000000
		 * Minimum: 100000
		 * Maximum: 100000000
		 */
		MinimumBitrate: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexStatmuxVideoSettingsFormGroup() {
		return new FormGroup<MultiplexStatmuxVideoSettingsFormProperties>({
			MaximumBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(100000), Validators.max(100000000)]),
			MinimumBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(100000), Validators.max(100000000)]),
		});

	}


	/** Packet identifiers map for a given Multiplex program. */
	export interface MultiplexProgramPacketIdentifiersMap {

		/** Placeholder documentation for __listOf__integer */
		AudioPids?: Array<number>;

		/** Placeholder documentation for __listOf__integer */
		DvbSubPids?: Array<number>;

		/** Placeholder documentation for __integer */
		DvbTeletextPid?: number | null;

		/** Placeholder documentation for __integer */
		EtvPlatformPid?: number | null;

		/** Placeholder documentation for __integer */
		EtvSignalPid?: number | null;

		/** Placeholder documentation for __listOf__integer */
		KlvDataPids?: Array<number>;

		/** Placeholder documentation for __integer */
		PcrPid?: number | null;

		/** Placeholder documentation for __integer */
		PmtPid?: number | null;

		/** Placeholder documentation for __integer */
		PrivateMetadataPid?: number | null;

		/** Placeholder documentation for __listOf__integer */
		Scte27Pids?: Array<number>;

		/** Placeholder documentation for __integer */
		Scte35Pid?: number | null;

		/** Placeholder documentation for __integer */
		TimedMetadataPid?: number | null;

		/** Placeholder documentation for __integer */
		VideoPid?: number | null;
	}

	/** Packet identifiers map for a given Multiplex program. */
	export interface MultiplexProgramPacketIdentifiersMapFormProperties {

		/** Placeholder documentation for __integer */
		DvbTeletextPid: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		EtvPlatformPid: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		EtvSignalPid: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		PcrPid: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		PmtPid: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		PrivateMetadataPid: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		Scte35Pid: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		TimedMetadataPid: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		VideoPid: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexProgramPacketIdentifiersMapFormGroup() {
		return new FormGroup<MultiplexProgramPacketIdentifiersMapFormProperties>({
			DvbTeletextPid: new FormControl<number | null | undefined>(undefined),
			EtvPlatformPid: new FormControl<number | null | undefined>(undefined),
			EtvSignalPid: new FormControl<number | null | undefined>(undefined),
			PcrPid: new FormControl<number | null | undefined>(undefined),
			PmtPid: new FormControl<number | null | undefined>(undefined),
			PrivateMetadataPid: new FormControl<number | null | undefined>(undefined),
			Scte35Pid: new FormControl<number | null | undefined>(undefined),
			TimedMetadataPid: new FormControl<number | null | undefined>(undefined),
			VideoPid: new FormControl<number | null | undefined>(undefined),
		});

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
		Destinations?: Array<OutputDestination>;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for DeleteChannelResponse */
	export interface DeleteChannelResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** The log level the user wants for their channel. */
		LogLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for ChannelState */
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateDeleteChannelResponseFormGroup() {
		return new FormGroup<DeleteChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DeleteInputResponse */
	export interface DeleteInputResponse {
	}

	/** Placeholder documentation for DeleteInputResponse */
	export interface DeleteInputResponseFormProperties {
	}
	export function CreateDeleteInputResponseFormGroup() {
		return new FormGroup<DeleteInputResponseFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteInputSecurityGroupResponse */
	export interface DeleteInputSecurityGroupResponse {
	}

	/** Placeholder documentation for DeleteInputSecurityGroupResponse */
	export interface DeleteInputSecurityGroupResponseFormProperties {
	}
	export function CreateDeleteInputSecurityGroupResponseFormGroup() {
		return new FormGroup<DeleteInputSecurityGroupResponseFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteMultiplexResponse */
	export interface DeleteMultiplexResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string>;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for DeleteMultiplexResponse */
	export interface DeleteMultiplexResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ProgramCount: FormControl<number | null | undefined>,

		/** The current state of the multiplex. */
		State: FormControl<MultiplexState | null | undefined>,
	}
	export function CreateDeleteMultiplexResponseFormGroup() {
		return new FormGroup<DeleteMultiplexResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			ProgramCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<MultiplexState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DeleteMultiplexProgramResponse */
	export interface DeleteMultiplexProgramResponse {

		/** Placeholder documentation for __string */
		ChannelId?: string | null;

		/** Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings;

		/** Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

		/** Placeholder documentation for __string */
		ProgramName?: string | null;
	}

	/** Placeholder documentation for DeleteMultiplexProgramResponse */
	export interface DeleteMultiplexProgramResponseFormProperties {

		/** Placeholder documentation for __string */
		ChannelId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		ProgramName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMultiplexProgramResponseFormGroup() {
		return new FormGroup<DeleteMultiplexProgramResponseFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined),
		});

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
		ResourceSpecification?: ReservationResourceSpecification;

		/** Placeholder documentation for __string */
		Start?: string | null;

		/** Current reservation state */
		State?: DeleteReservationResponseState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}

	/** Placeholder documentation for DeleteReservationResponse */
	export interface DeleteReservationResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		Count: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		CurrencyCode: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		Duration: FormControl<number | null | undefined>,

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits: FormControl<DeleteReservationResponseDurationUnits | null | undefined>,

		/** Placeholder documentation for __string */
		End: FormControl<string | null | undefined>,

		/** Placeholder documentation for __double */
		FixedPrice: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingDescription: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingId: FormControl<string | null | undefined>,

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType: FormControl<DeleteReservationResponseOfferingType | null | undefined>,

		/** Placeholder documentation for __string */
		Region: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		ReservationId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Start: FormControl<string | null | undefined>,

		/** Current reservation state */
		State: FormControl<DeleteReservationResponseState | null | undefined>,

		/** Placeholder documentation for __double */
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateDeleteReservationResponseFormGroup() {
		return new FormGroup<DeleteReservationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<DeleteReservationResponseDurationUnits | null | undefined>(undefined),
			End: new FormControl<string | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<DeleteReservationResponseOfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ReservationId: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DeleteReservationResponseState | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

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

	/** Resource configuration (codec, resolution, bitrate, ...) */
	export interface ReservationResourceSpecificationFormProperties {

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO' */
		Codec: FormControl<ReservationResourceSpecificationCodec | null | undefined>,

		/** Maximum bitrate in megabits per second */
		MaximumBitrate: FormControl<InputSpecificationMaximumBitrate | null | undefined>,

		/** Maximum framerate in frames per second (Outputs only) */
		MaximumFramerate: FormControl<ReservationResourceSpecificationMaximumFramerate | null | undefined>,

		/**
		 * Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution: FormControl<ReservationResourceSpecificationResolution | null | undefined>,

		/** Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL' */
		ResourceType: FormControl<ReservationResourceSpecificationResourceType | null | undefined>,

		/** Special features, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION' */
		SpecialFeature: FormControl<ReservationResourceSpecificationSpecialFeature | null | undefined>,

		/** Video quality, e.g. 'STANDARD' (Outputs only) */
		VideoQuality: FormControl<ReservationResourceSpecificationVideoQuality | null | undefined>,
	}
	export function CreateReservationResourceSpecificationFormGroup() {
		return new FormGroup<ReservationResourceSpecificationFormProperties>({
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			Codec: new FormControl<ReservationResourceSpecificationCodec | null | undefined>(undefined),
			MaximumBitrate: new FormControl<InputSpecificationMaximumBitrate | null | undefined>(undefined),
			MaximumFramerate: new FormControl<ReservationResourceSpecificationMaximumFramerate | null | undefined>(undefined),
			Resolution: new FormControl<ReservationResourceSpecificationResolution | null | undefined>(undefined),
			ResourceType: new FormControl<ReservationResourceSpecificationResourceType | null | undefined>(undefined),
			SpecialFeature: new FormControl<ReservationResourceSpecificationSpecialFeature | null | undefined>(undefined),
			VideoQuality: new FormControl<ReservationResourceSpecificationVideoQuality | null | undefined>(undefined),
		});

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

	/** Placeholder documentation for DeleteScheduleResponse */
	export interface DeleteScheduleResponseFormProperties {
	}
	export function CreateDeleteScheduleResponseFormGroup() {
		return new FormGroup<DeleteScheduleResponseFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeChannelResponse */
	export interface DescribeChannelResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for DescribeChannelResponse */
	export interface DescribeChannelResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** The log level the user wants for their channel. */
		LogLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for ChannelState */
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateDescribeChannelResponseFormGroup() {
		return new FormGroup<DescribeChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeInputResponse */
	export interface DescribeInputResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AttachedChannels?: Array<string>;

		/** Placeholder documentation for __listOfInputDestination */
		Destinations?: Array<InputDestination>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** A standard input has two sources and a single pipeline input only has one. */
		InputClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings>;

		/**
		 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
		 * change the source url of the input dynamically using an input switch action. However, the only input type
		 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
		 */
		InputSourceType?: InputInputSourceType | null;

		/** Placeholder documentation for __listOfMediaConnectFlow */
		MediaConnectFlows?: Array<MediaConnectFlow>;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for __listOf__string */
		SecurityGroups?: Array<string>;

		/** Placeholder documentation for __listOfInputSource */
		Sources?: Array<InputSource>;

		/** Placeholder documentation for InputState */
		State?: InputState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for InputType */
		Type?: InputType | null;
	}

	/** Placeholder documentation for DescribeInputResponse */
	export interface DescribeInputResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** A standard input has two sources and a single pipeline input only has one. */
		InputClass: FormControl<ChannelChannelClass | null | undefined>,

		/**
		 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
		 * change the source url of the input dynamically using an input switch action. However, the only input type
		 * to support a dynamic url at this time is MP4_FILE. By default all input sources are static.
		 */
		InputSourceType: FormControl<InputInputSourceType | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for InputState */
		State: FormControl<InputState | null | undefined>,

		/** Placeholder documentation for InputType */
		Type: FormControl<InputType | null | undefined>,
	}
	export function CreateDescribeInputResponseFormGroup() {
		return new FormGroup<DescribeInputResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InputClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			InputSourceType: new FormControl<InputInputSourceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InputState | null | undefined>(undefined),
			Type: new FormControl<InputType | null | undefined>(undefined),
		});

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
		HdDeviceSettings?: InputDeviceHdSettings;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __string */
		MacAddress?: string | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings;

		/** Placeholder documentation for __string */
		SerialNumber?: string | null;

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: DescribeInputDeviceResponseType | null;
	}

	/** Placeholder documentation for DescribeInputDeviceResponse */
	export interface DescribeInputDeviceResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** The state of the connection between the input device and AWS. */
		ConnectionState: FormControl<DescribeInputDeviceResponseConnectionState | null | undefined>,

		/** The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState: FormControl<DescribeInputDeviceResponseDeviceSettingsSyncState | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		MacAddress: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		SerialNumber: FormControl<string | null | undefined>,

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type: FormControl<DescribeInputDeviceResponseType | null | undefined>,
	}
	export function CreateDescribeInputDeviceResponseFormGroup() {
		return new FormGroup<DescribeInputDeviceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<DescribeInputDeviceResponseConnectionState | null | undefined>(undefined),
			DeviceSettingsSyncState: new FormControl<DescribeInputDeviceResponseDeviceSettingsSyncState | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DescribeInputDeviceResponseType | null | undefined>(undefined),
		});

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

	/** Settings that describe the active source from the input device, and the video characteristics of that source. */
	export interface InputDeviceHdSettingsFormProperties {

		/** The source at the input device that is currently active. */
		ActiveInput: FormControl<InputDeviceHdSettingsActiveInput | null | undefined>,

		/** The source to activate (use) from the input device. */
		ConfiguredInput: FormControl<InputDeviceHdSettingsConfiguredInput | null | undefined>,

		/** The state of the input device. */
		DeviceState: FormControl<InputDeviceHdSettingsDeviceState | null | undefined>,

		/** Placeholder documentation for __double */
		Framerate: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		Height: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		MaxBitrate: FormControl<number | null | undefined>,

		/** The scan type of the video source. */
		ScanType: FormControl<H264SettingsScanType | null | undefined>,

		/** Placeholder documentation for __integer */
		Width: FormControl<number | null | undefined>,
	}
	export function CreateInputDeviceHdSettingsFormGroup() {
		return new FormGroup<InputDeviceHdSettingsFormProperties>({
			ActiveInput: new FormControl<InputDeviceHdSettingsActiveInput | null | undefined>(undefined),
			ConfiguredInput: new FormControl<InputDeviceHdSettingsConfiguredInput | null | undefined>(undefined),
			DeviceState: new FormControl<InputDeviceHdSettingsDeviceState | null | undefined>(undefined),
			Framerate: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			ScanType: new FormControl<H264SettingsScanType | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InputDeviceHdSettingsActiveInput { HDMI = 0, SDI = 1 }

	export enum InputDeviceHdSettingsConfiguredInput { AUTO = 0, HDMI = 1, SDI = 2 }

	export enum InputDeviceHdSettingsDeviceState { IDLE = 0, STREAMING = 1 }


	/** The network settings for the input device. */
	export interface InputDeviceNetworkSettings {

		/** Placeholder documentation for __listOf__string */
		DnsAddresses?: Array<string>;

		/** Placeholder documentation for __string */
		Gateway?: string | null;

		/** Placeholder documentation for __string */
		IpAddress?: string | null;

		/** Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address. */
		IpScheme?: InputDeviceNetworkSettingsIpScheme | null;

		/** Placeholder documentation for __string */
		SubnetMask?: string | null;
	}

	/** The network settings for the input device. */
	export interface InputDeviceNetworkSettingsFormProperties {

		/** Placeholder documentation for __string */
		Gateway: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		IpAddress: FormControl<string | null | undefined>,

		/** Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address. */
		IpScheme: FormControl<InputDeviceNetworkSettingsIpScheme | null | undefined>,

		/** Placeholder documentation for __string */
		SubnetMask: FormControl<string | null | undefined>,
	}
	export function CreateInputDeviceNetworkSettingsFormGroup() {
		return new FormGroup<InputDeviceNetworkSettingsFormProperties>({
			Gateway: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			IpScheme: new FormControl<InputDeviceNetworkSettingsIpScheme | null | undefined>(undefined),
			SubnetMask: new FormControl<string | null | undefined>(undefined),
		});

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
		Inputs?: Array<string>;

		/** Placeholder documentation for InputSecurityGroupState */
		State?: InputSecurityGroupState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for __listOfInputWhitelistRule */
		WhitelistRules?: Array<InputWhitelistRule>;
	}

	/** Placeholder documentation for DescribeInputSecurityGroupResponse */
	export interface DescribeInputSecurityGroupResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for InputSecurityGroupState */
		State: FormControl<InputSecurityGroupState | null | undefined>,
	}
	export function CreateDescribeInputSecurityGroupResponseFormGroup() {
		return new FormGroup<DescribeInputSecurityGroupResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InputSecurityGroupState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeMultiplexResponse */
	export interface DescribeMultiplexResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string>;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for DescribeMultiplexResponse */
	export interface DescribeMultiplexResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ProgramCount: FormControl<number | null | undefined>,

		/** The current state of the multiplex. */
		State: FormControl<MultiplexState | null | undefined>,
	}
	export function CreateDescribeMultiplexResponseFormGroup() {
		return new FormGroup<DescribeMultiplexResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			ProgramCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<MultiplexState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeMultiplexProgramResponse */
	export interface DescribeMultiplexProgramResponse {

		/** Placeholder documentation for __string */
		ChannelId?: string | null;

		/** Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings;

		/** Packet identifiers map for a given Multiplex program. */
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

		/** Placeholder documentation for __string */
		ProgramName?: string | null;
	}

	/** Placeholder documentation for DescribeMultiplexProgramResponse */
	export interface DescribeMultiplexProgramResponseFormProperties {

		/** Placeholder documentation for __string */
		ChannelId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		ProgramName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMultiplexProgramResponseFormGroup() {
		return new FormGroup<DescribeMultiplexProgramResponseFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined),
		});

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
		ResourceSpecification?: ReservationResourceSpecification;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}

	/** Placeholder documentation for DescribeOfferingResponse */
	export interface DescribeOfferingResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		CurrencyCode: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		Duration: FormControl<number | null | undefined>,

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits: FormControl<DeleteReservationResponseDurationUnits | null | undefined>,

		/** Placeholder documentation for __double */
		FixedPrice: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingDescription: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingId: FormControl<string | null | undefined>,

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType: FormControl<DeleteReservationResponseOfferingType | null | undefined>,

		/** Placeholder documentation for __string */
		Region: FormControl<string | null | undefined>,

		/** Placeholder documentation for __double */
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateDescribeOfferingResponseFormGroup() {
		return new FormGroup<DescribeOfferingResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<DeleteReservationResponseDurationUnits | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<DeleteReservationResponseOfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

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
		ResourceSpecification?: ReservationResourceSpecification;

		/** Placeholder documentation for __string */
		Start?: string | null;

		/** Current reservation state */
		State?: DeleteReservationResponseState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}

	/** Placeholder documentation for DescribeReservationResponse */
	export interface DescribeReservationResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		Count: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		CurrencyCode: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		Duration: FormControl<number | null | undefined>,

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits: FormControl<DeleteReservationResponseDurationUnits | null | undefined>,

		/** Placeholder documentation for __string */
		End: FormControl<string | null | undefined>,

		/** Placeholder documentation for __double */
		FixedPrice: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingDescription: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingId: FormControl<string | null | undefined>,

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType: FormControl<DeleteReservationResponseOfferingType | null | undefined>,

		/** Placeholder documentation for __string */
		Region: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		ReservationId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Start: FormControl<string | null | undefined>,

		/** Current reservation state */
		State: FormControl<DeleteReservationResponseState | null | undefined>,

		/** Placeholder documentation for __double */
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateDescribeReservationResponseFormGroup() {
		return new FormGroup<DescribeReservationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<DeleteReservationResponseDurationUnits | null | undefined>(undefined),
			End: new FormControl<string | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<DeleteReservationResponseOfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ReservationId: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DeleteReservationResponseState | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeScheduleResponse */
	export interface DescribeScheduleResponse {

		/** Placeholder documentation for __string */
		NextToken?: string | null;

		/** Placeholder documentation for __listOfScheduleAction */
		ScheduleActions?: Array<ScheduleAction>;
	}

	/** Placeholder documentation for DescribeScheduleResponse */
	export interface DescribeScheduleResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduleResponseFormGroup() {
		return new FormGroup<DescribeScheduleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListChannelsResponse */
	export interface ListChannelsResponse {

		/** Placeholder documentation for __listOfChannelSummary */
		Channels?: Array<ChannelSummary>;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}

	/** Placeholder documentation for ListChannelsResponse */
	export interface ListChannelsResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ChannelSummary */
	export interface ChannelSummary {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

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
		Tags?: Tags;
	}

	/** Placeholder documentation for ChannelSummary */
	export interface ChannelSummaryFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** The log level the user wants for their channel. */
		LogLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for ChannelState */
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateChannelSummaryFormGroup() {
		return new FormGroup<ChannelSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListInputDevicesResponse */
	export interface ListInputDevicesResponse {

		/** Placeholder documentation for __listOfInputDeviceSummary */
		InputDevices?: Array<InputDeviceSummary>;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}

	/** Placeholder documentation for ListInputDevicesResponse */
	export interface ListInputDevicesResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputDevicesResponseFormGroup() {
		return new FormGroup<ListInputDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		HdDeviceSettings?: InputDeviceHdSettings;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __string */
		MacAddress?: string | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings;

		/** Placeholder documentation for __string */
		SerialNumber?: string | null;

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: DescribeInputDeviceResponseType | null;
	}

	/** Details of the input device. */
	export interface InputDeviceSummaryFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** The state of the connection between the input device and AWS. */
		ConnectionState: FormControl<DescribeInputDeviceResponseConnectionState | null | undefined>,

		/** The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState: FormControl<DescribeInputDeviceResponseDeviceSettingsSyncState | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		MacAddress: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		SerialNumber: FormControl<string | null | undefined>,

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type: FormControl<DescribeInputDeviceResponseType | null | undefined>,
	}
	export function CreateInputDeviceSummaryFormGroup() {
		return new FormGroup<InputDeviceSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<DescribeInputDeviceResponseConnectionState | null | undefined>(undefined),
			DeviceSettingsSyncState: new FormControl<DescribeInputDeviceResponseDeviceSettingsSyncState | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DescribeInputDeviceResponseType | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListInputSecurityGroupsResponse */
	export interface ListInputSecurityGroupsResponse {

		/** Placeholder documentation for __listOfInputSecurityGroup */
		InputSecurityGroups?: Array<InputSecurityGroup>;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}

	/** Placeholder documentation for ListInputSecurityGroupsResponse */
	export interface ListInputSecurityGroupsResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputSecurityGroupsResponseFormGroup() {
		return new FormGroup<ListInputSecurityGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListInputsResponse */
	export interface ListInputsResponse {

		/** Placeholder documentation for __listOfInput */
		Inputs?: Array<Input>;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}

	/** Placeholder documentation for ListInputsResponse */
	export interface ListInputsResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputsResponseFormGroup() {
		return new FormGroup<ListInputsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListMultiplexProgramsResponse */
	export interface ListMultiplexProgramsResponse {

		/** Placeholder documentation for __listOfMultiplexProgramSummary */
		MultiplexPrograms?: Array<MultiplexProgramSummary>;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}

	/** Placeholder documentation for ListMultiplexProgramsResponse */
	export interface ListMultiplexProgramsResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMultiplexProgramsResponseFormGroup() {
		return new FormGroup<ListMultiplexProgramsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for MultiplexProgramSummary */
	export interface MultiplexProgramSummary {

		/** Placeholder documentation for __string */
		ChannelId?: string | null;

		/** Placeholder documentation for __string */
		ProgramName?: string | null;
	}

	/** Placeholder documentation for MultiplexProgramSummary */
	export interface MultiplexProgramSummaryFormProperties {

		/** Placeholder documentation for __string */
		ChannelId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		ProgramName: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexProgramSummaryFormGroup() {
		return new FormGroup<MultiplexProgramSummaryFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListMultiplexesResponse */
	export interface ListMultiplexesResponse {

		/** Placeholder documentation for __listOfMultiplexSummary */
		Multiplexes?: Array<MultiplexSummary>;

		/** Placeholder documentation for __string */
		NextToken?: string | null;
	}

	/** Placeholder documentation for ListMultiplexesResponse */
	export interface ListMultiplexesResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMultiplexesResponseFormGroup() {
		return new FormGroup<ListMultiplexesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for MultiplexSummary */
	export interface MultiplexSummary {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains summary configuration for a Multiplex event. */
		MultiplexSettings?: MultiplexSettingsSummary;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for MultiplexSummary */
	export interface MultiplexSummaryFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ProgramCount: FormControl<number | null | undefined>,

		/** The current state of the multiplex. */
		State: FormControl<MultiplexState | null | undefined>,
	}
	export function CreateMultiplexSummaryFormGroup() {
		return new FormGroup<MultiplexSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			ProgramCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<MultiplexState | null | undefined>(undefined),
		});

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

	/** Contains summary configuration for a Multiplex event. */
	export interface MultiplexSettingsSummaryFormProperties {

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexSettingsSummaryFormGroup() {
		return new FormGroup<MultiplexSettingsSummaryFormProperties>({
			TransportStreamBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(1000000), Validators.max(100000000)]),
		});

	}


	/** Placeholder documentation for ListOfferingsResponse */
	export interface ListOfferingsResponse {

		/** Placeholder documentation for __string */
		NextToken?: string | null;

		/** Placeholder documentation for __listOfOffering */
		Offerings?: Array<Offering>;
	}

	/** Placeholder documentation for ListOfferingsResponse */
	export interface ListOfferingsResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingsResponseFormGroup() {
		return new FormGroup<ListOfferingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		ResourceSpecification?: ReservationResourceSpecification;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}

	/** Reserved resources available for purchase */
	export interface OfferingFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		CurrencyCode: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		Duration: FormControl<number | null | undefined>,

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits: FormControl<DeleteReservationResponseDurationUnits | null | undefined>,

		/** Placeholder documentation for __double */
		FixedPrice: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingDescription: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingId: FormControl<string | null | undefined>,

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType: FormControl<DeleteReservationResponseOfferingType | null | undefined>,

		/** Placeholder documentation for __string */
		Region: FormControl<string | null | undefined>,

		/** Placeholder documentation for __double */
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateOfferingFormGroup() {
		return new FormGroup<OfferingFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<DeleteReservationResponseDurationUnits | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<DeleteReservationResponseOfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListReservationsResponse */
	export interface ListReservationsResponse {

		/** Placeholder documentation for __string */
		NextToken?: string | null;

		/** Placeholder documentation for __listOfReservation */
		Reservations?: Array<Reservation>;
	}

	/** Placeholder documentation for ListReservationsResponse */
	export interface ListReservationsResponseFormProperties {

		/** Placeholder documentation for __string */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReservationsResponseFormGroup() {
		return new FormGroup<ListReservationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		ResourceSpecification?: ReservationResourceSpecification;

		/** Placeholder documentation for __string */
		Start?: string | null;

		/** Current reservation state */
		State?: DeleteReservationResponseState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for __double */
		UsagePrice?: number | null;
	}

	/** Reserved resources available to use */
	export interface ReservationFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		Count: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		CurrencyCode: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		Duration: FormControl<number | null | undefined>,

		/** Units for duration, e.g. 'MONTHS' */
		DurationUnits: FormControl<DeleteReservationResponseDurationUnits | null | undefined>,

		/** Placeholder documentation for __string */
		End: FormControl<string | null | undefined>,

		/** Placeholder documentation for __double */
		FixedPrice: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingDescription: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		OfferingId: FormControl<string | null | undefined>,

		/** Offering type, e.g. 'NO_UPFRONT' */
		OfferingType: FormControl<DeleteReservationResponseOfferingType | null | undefined>,

		/** Placeholder documentation for __string */
		Region: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		ReservationId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Start: FormControl<string | null | undefined>,

		/** Current reservation state */
		State: FormControl<DeleteReservationResponseState | null | undefined>,

		/** Placeholder documentation for __double */
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateReservationFormGroup() {
		return new FormGroup<ReservationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<DeleteReservationResponseDurationUnits | null | undefined>(undefined),
			End: new FormControl<string | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<DeleteReservationResponseOfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ReservationId: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DeleteReservationResponseState | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListTagsForResourceResponse */
	export interface ListTagsForResourceResponse {

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for ListTagsForResourceResponse */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** Placeholder documentation for PurchaseOfferingResponse */
	export interface PurchaseOfferingResponse {

		/** Reserved resources available to use */
		Reservation?: Reservation;
	}

	/** Placeholder documentation for PurchaseOfferingResponse */
	export interface PurchaseOfferingResponseFormProperties {
	}
	export function CreatePurchaseOfferingResponseFormGroup() {
		return new FormGroup<PurchaseOfferingResponseFormProperties>({
		});

	}


	/** Placeholder documentation for StartChannelResponse */
	export interface StartChannelResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for StartChannelResponse */
	export interface StartChannelResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** The log level the user wants for their channel. */
		LogLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for ChannelState */
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateStartChannelResponseFormGroup() {
		return new FormGroup<StartChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for StartMultiplexResponse */
	export interface StartMultiplexResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string>;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for StartMultiplexResponse */
	export interface StartMultiplexResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ProgramCount: FormControl<number | null | undefined>,

		/** The current state of the multiplex. */
		State: FormControl<MultiplexState | null | undefined>,
	}
	export function CreateStartMultiplexResponseFormGroup() {
		return new FormGroup<StartMultiplexResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			ProgramCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<MultiplexState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for StopChannelResponse */
	export interface StopChannelResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/** Placeholder documentation for __listOfChannelEgressEndpoint */
		EgressEndpoints?: Array<ChannelEgressEndpoint>;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __listOfPipelineDetail */
		PipelineDetails?: Array<PipelineDetail>;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for ChannelState */
		State?: ChannelState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for StopChannelResponse */
	export interface StopChannelResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** The log level the user wants for their channel. */
		LogLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for ChannelState */
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateStopChannelResponseFormGroup() {
		return new FormGroup<StopChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for StopMultiplexResponse */
	export interface StopMultiplexResponse {

		/** Placeholder documentation for __string */
		Arn?: string | null;

		/** Placeholder documentation for __listOf__string */
		AvailabilityZones?: Array<string>;

		/** Placeholder documentation for __listOfMultiplexOutputDestination */
		Destinations?: Array<MultiplexOutputDestination>;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __integer */
		PipelinesRunningCount?: number | null;

		/** Placeholder documentation for __integer */
		ProgramCount?: number | null;

		/** The current state of the multiplex. */
		State?: MultiplexState | null;

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for StopMultiplexResponse */
	export interface StopMultiplexResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __integer */
		PipelinesRunningCount: FormControl<number | null | undefined>,

		/** Placeholder documentation for __integer */
		ProgramCount: FormControl<number | null | undefined>,

		/** The current state of the multiplex. */
		State: FormControl<MultiplexState | null | undefined>,
	}
	export function CreateStopMultiplexResponseFormGroup() {
		return new FormGroup<StopMultiplexResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			ProgramCount: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<MultiplexState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for UpdateChannelResponse */
	export interface UpdateChannelResponse {

		/** Placeholder documentation for Channel */
		Channel?: Channel;
	}

	/** Placeholder documentation for UpdateChannelResponse */
	export interface UpdateChannelResponseFormProperties {
	}
	export function CreateUpdateChannelResponseFormGroup() {
		return new FormGroup<UpdateChannelResponseFormProperties>({
		});

	}


	/** Placeholder documentation for UpdateChannelClassResponse */
	export interface UpdateChannelClassResponse {

		/** Placeholder documentation for Channel */
		Channel?: Channel;
	}

	/** Placeholder documentation for UpdateChannelClassResponse */
	export interface UpdateChannelClassResponseFormProperties {
	}
	export function CreateUpdateChannelClassResponseFormGroup() {
		return new FormGroup<UpdateChannelClassResponseFormProperties>({
		});

	}


	/** Placeholder documentation for UpdateInputResponse */
	export interface UpdateInputResponse {

		/** Placeholder documentation for Input */
		Input?: Input;
	}

	/** Placeholder documentation for UpdateInputResponse */
	export interface UpdateInputResponseFormProperties {
	}
	export function CreateUpdateInputResponseFormGroup() {
		return new FormGroup<UpdateInputResponseFormProperties>({
		});

	}


	/** Settings for an input device. */
	export interface InputDeviceRequest {

		/** Placeholder documentation for __string */
		Id?: string | null;
	}

	/** Settings for an input device. */
	export interface InputDeviceRequestFormProperties {

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInputDeviceRequestFormGroup() {
		return new FormGroup<InputDeviceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

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
		HdDeviceSettings?: InputDeviceHdSettings;

		/** Placeholder documentation for __string */
		Id?: string | null;

		/** Placeholder documentation for __string */
		MacAddress?: string | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** The network settings for the input device. */
		NetworkSettings?: InputDeviceNetworkSettings;

		/** Placeholder documentation for __string */
		SerialNumber?: string | null;

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type?: DescribeInputDeviceResponseType | null;
	}

	/** Placeholder documentation for UpdateInputDeviceResponse */
	export interface UpdateInputDeviceResponseFormProperties {

		/** Placeholder documentation for __string */
		Arn: FormControl<string | null | undefined>,

		/** The state of the connection between the input device and AWS. */
		ConnectionState: FormControl<DescribeInputDeviceResponseConnectionState | null | undefined>,

		/** The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
		DeviceSettingsSyncState: FormControl<DescribeInputDeviceResponseDeviceSettingsSyncState | null | undefined>,

		/** Placeholder documentation for __string */
		Id: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		MacAddress: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		SerialNumber: FormControl<string | null | undefined>,

		/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
		Type: FormControl<DescribeInputDeviceResponseType | null | undefined>,
	}
	export function CreateUpdateInputDeviceResponseFormGroup() {
		return new FormGroup<UpdateInputDeviceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<DescribeInputDeviceResponseConnectionState | null | undefined>(undefined),
			DeviceSettingsSyncState: new FormControl<DescribeInputDeviceResponseDeviceSettingsSyncState | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DescribeInputDeviceResponseType | null | undefined>(undefined),
		});

	}


	/** The source to activate (use) from the input device. */
	export enum InputDeviceConfiguredInput { AUTO = 0, HDMI = 1, SDI = 2 }


	/** Placeholder documentation for UpdateInputSecurityGroupResponse */
	export interface UpdateInputSecurityGroupResponse {

		/** An Input Security Group */
		SecurityGroup?: InputSecurityGroup;
	}

	/** Placeholder documentation for UpdateInputSecurityGroupResponse */
	export interface UpdateInputSecurityGroupResponseFormProperties {
	}
	export function CreateUpdateInputSecurityGroupResponseFormGroup() {
		return new FormGroup<UpdateInputSecurityGroupResponseFormProperties>({
		});

	}


	/** Placeholder documentation for UpdateMultiplexResponse */
	export interface UpdateMultiplexResponse {

		/** The multiplex object. */
		Multiplex?: Multiplex;
	}

	/** Placeholder documentation for UpdateMultiplexResponse */
	export interface UpdateMultiplexResponseFormProperties {
	}
	export function CreateUpdateMultiplexResponseFormGroup() {
		return new FormGroup<UpdateMultiplexResponseFormProperties>({
		});

	}


	/** Placeholder documentation for UpdateMultiplexProgramResponse */
	export interface UpdateMultiplexProgramResponse {

		/** The multiplex program object. */
		MultiplexProgram?: MultiplexProgram;
	}

	/** Placeholder documentation for UpdateMultiplexProgramResponse */
	export interface UpdateMultiplexProgramResponseFormProperties {
	}
	export function CreateUpdateMultiplexProgramResponseFormGroup() {
		return new FormGroup<UpdateMultiplexProgramResponseFormProperties>({
		});

	}


	/** Placeholder documentation for UpdateReservationResponse */
	export interface UpdateReservationResponse {

		/** Reserved resources available to use */
		Reservation?: Reservation;
	}

	/** Placeholder documentation for UpdateReservationResponse */
	export interface UpdateReservationResponseFormProperties {
	}
	export function CreateUpdateReservationResponseFormGroup() {
		return new FormGroup<UpdateReservationResponseFormProperties>({
		});

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

	/** A list of schedule actions to create (in a request) or that have been created (in a response). */
	export interface BatchScheduleActionCreateRequestFormProperties {
	}
	export function CreateBatchScheduleActionCreateRequestFormGroup() {
		return new FormGroup<BatchScheduleActionCreateRequestFormProperties>({
		});

	}


	/** A list of schedule actions to delete. */
	export interface BatchScheduleActionDeleteRequest {

		/**
		 * Placeholder documentation for __listOf__string
		 * Required
		 */
		ActionNames: Array<string>;
	}

	/** A list of schedule actions to delete. */
	export interface BatchScheduleActionDeleteRequestFormProperties {
	}
	export function CreateBatchScheduleActionDeleteRequestFormGroup() {
		return new FormGroup<BatchScheduleActionDeleteRequestFormProperties>({
		});

	}


	/** List of actions to create and list of actions to delete. */
	export interface BatchUpdateScheduleRequest {

		/** A list of schedule actions to create (in a request) or that have been created (in a response). */
		Creates?: BatchScheduleActionCreateRequest;

		/** A list of schedule actions to delete. */
		Deletes?: BatchScheduleActionDeleteRequest;
	}

	/** List of actions to create and list of actions to delete. */
	export interface BatchUpdateScheduleRequestFormProperties {
	}
	export function CreateBatchUpdateScheduleRequestFormGroup() {
		return new FormGroup<BatchUpdateScheduleRequestFormProperties>({
		});

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
		Destinations?: Array<OutputDestination>;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

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
		Tags?: Tags;
	}

	/** A request to create a channel */
	export interface CreateChannelRequestFormProperties {

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** The log level the user wants for their channel. */
		LogLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RequestId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Reserved: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			LogLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Reserved: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Settings for a private VPC Input.
	 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
	 * This property requires setting the roleArn property on Input creation.
	 * Not compatible with the inputSecurityGroups property.
	 */
	export interface InputVpcRequest {

		/** Placeholder documentation for __listOf__string */
		SecurityGroupIds?: Array<string>;

		/**
		 * Placeholder documentation for __listOf__string
		 * Required
		 */
		SubnetIds: Array<string>;
	}

	/**
	 * Settings for a private VPC Input.
	 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
	 * This property requires setting the roleArn property on Input creation.
	 * Not compatible with the inputSecurityGroups property.
	 */
	export interface InputVpcRequestFormProperties {
	}
	export function CreateInputVpcRequestFormGroup() {
		return new FormGroup<InputVpcRequestFormProperties>({
		});

	}


	/** The name of the input */
	export interface CreateInputRequest {

		/** Placeholder documentation for __listOfInputDestinationRequest */
		Destinations?: Array<InputDestinationRequest>;

		/** Placeholder documentation for __listOfInputDeviceSettings */
		InputDevices?: Array<InputDeviceSettings>;

		/** Placeholder documentation for __listOf__string */
		InputSecurityGroups?: Array<string>;

		/** Placeholder documentation for __listOfMediaConnectFlowRequest */
		MediaConnectFlows?: Array<MediaConnectFlowRequest>;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RequestId?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for __listOfInputSourceRequest */
		Sources?: Array<InputSourceRequest>;

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for InputType */
		Type?: InputType | null;

		/**
		 * Settings for a private VPC Input.
		 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
		 * This property requires setting the roleArn property on Input creation.
		 * Not compatible with the inputSecurityGroups property.
		 */
		Vpc?: InputVpcRequest;
	}

	/** The name of the input */
	export interface CreateInputRequestFormProperties {

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RequestId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for InputType */
		Type: FormControl<InputType | null | undefined>,
	}
	export function CreateCreateInputRequestFormGroup() {
		return new FormGroup<CreateInputRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InputType | null | undefined>(undefined),
		});

	}


	/** The IPv4 CIDRs to whitelist for this Input Security Group */
	export interface CreateInputSecurityGroupRequest {

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for __listOfInputWhitelistRuleCidr */
		WhitelistRules?: Array<InputWhitelistRuleCidr>;
	}

	/** The IPv4 CIDRs to whitelist for this Input Security Group */
	export interface CreateInputSecurityGroupRequestFormProperties {
	}
	export function CreateCreateInputSecurityGroupRequestFormGroup() {
		return new FormGroup<CreateInputSecurityGroupRequestFormProperties>({
		});

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

	/** A request to create a program in a multiplex. */
	export interface CreateMultiplexProgramRequestFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		ProgramName: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMultiplexProgramRequestFormGroup() {
		return new FormGroup<CreateMultiplexProgramRequestFormProperties>({
			ProgramName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		Tags?: Tags;
	}

	/** A request to create a multiplex. */
	export interface CreateMultiplexRequestFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMultiplexRequestFormGroup() {
		return new FormGroup<CreateMultiplexRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Placeholder documentation for CreateTagsRequest */
	export interface CreateTagsRequest {

		/** Placeholder documentation for Tags */
		Tags?: Tags;
	}

	/** Placeholder documentation for CreateTagsRequest */
	export interface CreateTagsRequestFormProperties {
	}
	export function CreateCreateTagsRequestFormGroup() {
		return new FormGroup<CreateTagsRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteChannelRequest */
	export interface DeleteChannelRequest {
	}

	/** Placeholder documentation for DeleteChannelRequest */
	export interface DeleteChannelRequestFormProperties {
	}
	export function CreateDeleteChannelRequestFormGroup() {
		return new FormGroup<DeleteChannelRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteInputRequest */
	export interface DeleteInputRequest {
	}

	/** Placeholder documentation for DeleteInputRequest */
	export interface DeleteInputRequestFormProperties {
	}
	export function CreateDeleteInputRequestFormGroup() {
		return new FormGroup<DeleteInputRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteInputSecurityGroupRequest */
	export interface DeleteInputSecurityGroupRequest {
	}

	/** Placeholder documentation for DeleteInputSecurityGroupRequest */
	export interface DeleteInputSecurityGroupRequestFormProperties {
	}
	export function CreateDeleteInputSecurityGroupRequestFormGroup() {
		return new FormGroup<DeleteInputSecurityGroupRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteMultiplexProgramRequest */
	export interface DeleteMultiplexProgramRequest {
	}

	/** Placeholder documentation for DeleteMultiplexProgramRequest */
	export interface DeleteMultiplexProgramRequestFormProperties {
	}
	export function CreateDeleteMultiplexProgramRequestFormGroup() {
		return new FormGroup<DeleteMultiplexProgramRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteMultiplexRequest */
	export interface DeleteMultiplexRequest {
	}

	/** Placeholder documentation for DeleteMultiplexRequest */
	export interface DeleteMultiplexRequestFormProperties {
	}
	export function CreateDeleteMultiplexRequestFormGroup() {
		return new FormGroup<DeleteMultiplexRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteReservationRequest */
	export interface DeleteReservationRequest {
	}

	/** Placeholder documentation for DeleteReservationRequest */
	export interface DeleteReservationRequestFormProperties {
	}
	export function CreateDeleteReservationRequestFormGroup() {
		return new FormGroup<DeleteReservationRequestFormProperties>({
		});

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

	/** Placeholder documentation for DeleteScheduleRequest */
	export interface DeleteScheduleRequestFormProperties {
	}
	export function CreateDeleteScheduleRequestFormGroup() {
		return new FormGroup<DeleteScheduleRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteTagsRequest */
	export interface DeleteTagsRequest {
	}

	/** Placeholder documentation for DeleteTagsRequest */
	export interface DeleteTagsRequestFormProperties {
	}
	export function CreateDeleteTagsRequestFormGroup() {
		return new FormGroup<DeleteTagsRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeChannelRequest */
	export interface DescribeChannelRequest {
	}

	/** Placeholder documentation for DescribeChannelRequest */
	export interface DescribeChannelRequestFormProperties {
	}
	export function CreateDescribeChannelRequestFormGroup() {
		return new FormGroup<DescribeChannelRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeInputDeviceRequest */
	export interface DescribeInputDeviceRequest {
	}

	/** Placeholder documentation for DescribeInputDeviceRequest */
	export interface DescribeInputDeviceRequestFormProperties {
	}
	export function CreateDescribeInputDeviceRequestFormGroup() {
		return new FormGroup<DescribeInputDeviceRequestFormProperties>({
		});

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

	/** Placeholder documentation for DescribeInputRequest */
	export interface DescribeInputRequestFormProperties {
	}
	export function CreateDescribeInputRequestFormGroup() {
		return new FormGroup<DescribeInputRequestFormProperties>({
		});

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

	/** Placeholder documentation for DescribeInputSecurityGroupRequest */
	export interface DescribeInputSecurityGroupRequestFormProperties {
	}
	export function CreateDescribeInputSecurityGroupRequestFormGroup() {
		return new FormGroup<DescribeInputSecurityGroupRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeMultiplexProgramRequest */
	export interface DescribeMultiplexProgramRequest {
	}

	/** Placeholder documentation for DescribeMultiplexProgramRequest */
	export interface DescribeMultiplexProgramRequestFormProperties {
	}
	export function CreateDescribeMultiplexProgramRequestFormGroup() {
		return new FormGroup<DescribeMultiplexProgramRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeMultiplexRequest */
	export interface DescribeMultiplexRequest {
	}

	/** Placeholder documentation for DescribeMultiplexRequest */
	export interface DescribeMultiplexRequestFormProperties {
	}
	export function CreateDescribeMultiplexRequestFormGroup() {
		return new FormGroup<DescribeMultiplexRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeOfferingRequest */
	export interface DescribeOfferingRequest {
	}

	/** Placeholder documentation for DescribeOfferingRequest */
	export interface DescribeOfferingRequestFormProperties {
	}
	export function CreateDescribeOfferingRequestFormGroup() {
		return new FormGroup<DescribeOfferingRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeReservationRequest */
	export interface DescribeReservationRequest {
	}

	/** Placeholder documentation for DescribeReservationRequest */
	export interface DescribeReservationRequestFormProperties {
	}
	export function CreateDescribeReservationRequestFormGroup() {
		return new FormGroup<DescribeReservationRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeScheduleRequest */
	export interface DescribeScheduleRequest {
	}

	/** Placeholder documentation for DescribeScheduleRequest */
	export interface DescribeScheduleRequestFormProperties {
	}
	export function CreateDescribeScheduleRequestFormGroup() {
		return new FormGroup<DescribeScheduleRequestFormProperties>({
		});

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

	/** Configurable settings for the input device. */
	export interface InputDeviceConfigurableSettingsFormProperties {

		/** The source to activate (use) from the input device. */
		ConfiguredInput: FormControl<InputDeviceHdSettingsConfiguredInput | null | undefined>,

		/** Placeholder documentation for __integer */
		MaxBitrate: FormControl<number | null | undefined>,
	}
	export function CreateInputDeviceConfigurableSettingsFormGroup() {
		return new FormGroup<InputDeviceConfigurableSettingsFormProperties>({
			ConfiguredInput: new FormControl<InputDeviceHdSettingsConfiguredInput | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
		});

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

	/** Placeholder documentation for ListChannelsRequest */
	export interface ListChannelsRequestFormProperties {
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
		});

	}


	/** Placeholder documentation for ListInputDevicesRequest */
	export interface ListInputDevicesRequest {
	}

	/** Placeholder documentation for ListInputDevicesRequest */
	export interface ListInputDevicesRequestFormProperties {
	}
	export function CreateListInputDevicesRequestFormGroup() {
		return new FormGroup<ListInputDevicesRequestFormProperties>({
		});

	}


	/** Placeholder documentation for ListInputSecurityGroupsRequest */
	export interface ListInputSecurityGroupsRequest {
	}

	/** Placeholder documentation for ListInputSecurityGroupsRequest */
	export interface ListInputSecurityGroupsRequestFormProperties {
	}
	export function CreateListInputSecurityGroupsRequestFormGroup() {
		return new FormGroup<ListInputSecurityGroupsRequestFormProperties>({
		});

	}


	/** Placeholder documentation for ListInputsRequest */
	export interface ListInputsRequest {
	}

	/** Placeholder documentation for ListInputsRequest */
	export interface ListInputsRequestFormProperties {
	}
	export function CreateListInputsRequestFormGroup() {
		return new FormGroup<ListInputsRequestFormProperties>({
		});

	}


	/** Placeholder documentation for ListMultiplexProgramsRequest */
	export interface ListMultiplexProgramsRequest {
	}

	/** Placeholder documentation for ListMultiplexProgramsRequest */
	export interface ListMultiplexProgramsRequestFormProperties {
	}
	export function CreateListMultiplexProgramsRequestFormGroup() {
		return new FormGroup<ListMultiplexProgramsRequestFormProperties>({
		});

	}


	/** Placeholder documentation for ListMultiplexesRequest */
	export interface ListMultiplexesRequest {
	}

	/** Placeholder documentation for ListMultiplexesRequest */
	export interface ListMultiplexesRequestFormProperties {
	}
	export function CreateListMultiplexesRequestFormGroup() {
		return new FormGroup<ListMultiplexesRequestFormProperties>({
		});

	}


	/** Placeholder documentation for ListOfferingsRequest */
	export interface ListOfferingsRequest {
	}

	/** Placeholder documentation for ListOfferingsRequest */
	export interface ListOfferingsRequestFormProperties {
	}
	export function CreateListOfferingsRequestFormGroup() {
		return new FormGroup<ListOfferingsRequestFormProperties>({
		});

	}


	/** Placeholder documentation for ListReservationsRequest */
	export interface ListReservationsRequest {
	}

	/** Placeholder documentation for ListReservationsRequest */
	export interface ListReservationsRequestFormProperties {
	}
	export function CreateListReservationsRequestFormGroup() {
		return new FormGroup<ListReservationsRequestFormProperties>({
		});

	}


	/** Placeholder documentation for ListTagsForResourceRequest */
	export interface ListTagsForResourceRequest {
	}

	/** Placeholder documentation for ListTagsForResourceRequest */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

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
		Tags?: Tags;
	}

	/** Placeholder documentation for PurchaseOfferingRequest */
	export interface PurchaseOfferingRequestFormProperties {

		/**
		 * Placeholder documentation for __integerMin1
		 * Required
		 * Minimum: 1
		 */
		Count: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RequestId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		Start: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOfferingRequestFormGroup() {
		return new FormGroup<PurchaseOfferingRequestFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			Name: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Placeholder documentation for StartChannelRequest */
	export interface StartChannelRequestFormProperties {
	}
	export function CreateStartChannelRequestFormGroup() {
		return new FormGroup<StartChannelRequestFormProperties>({
		});

	}


	/** Placeholder documentation for StartMultiplexRequest */
	export interface StartMultiplexRequest {
	}

	/** Placeholder documentation for StartMultiplexRequest */
	export interface StartMultiplexRequestFormProperties {
	}
	export function CreateStartMultiplexRequestFormGroup() {
		return new FormGroup<StartMultiplexRequestFormProperties>({
		});

	}


	/** Placeholder documentation for StopChannelRequest */
	export interface StopChannelRequest {
	}

	/** Placeholder documentation for StopChannelRequest */
	export interface StopChannelRequestFormProperties {
	}
	export function CreateStopChannelRequestFormGroup() {
		return new FormGroup<StopChannelRequestFormProperties>({
		});

	}


	/** Placeholder documentation for StopMultiplexRequest */
	export interface StopMultiplexRequest {
	}

	/** Placeholder documentation for StopMultiplexRequest */
	export interface StopMultiplexRequestFormProperties {
	}
	export function CreateStopMultiplexRequestFormGroup() {
		return new FormGroup<StopMultiplexRequestFormProperties>({
		});

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
		Destinations?: Array<OutputDestination>;
	}

	/** Channel class that the channel should be updated to. */
	export interface UpdateChannelClassRequestFormProperties {

		/**
		 * A standard channel has two encoding pipelines and a single pipeline channel only has one.
		 * Required
		 */
		ChannelClass: FormControl<ChannelChannelClass | null | undefined>,
	}
	export function CreateUpdateChannelClassRequestFormGroup() {
		return new FormGroup<UpdateChannelClassRequestFormProperties>({
			ChannelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to update a channel. */
	export interface UpdateChannelRequest {

		/** Placeholder documentation for __listOfOutputDestination */
		Destinations?: Array<OutputDestination>;

		/** Encoder Settings */
		EncoderSettings?: EncoderSettings;

		/** Placeholder documentation for __listOfInputAttachment */
		InputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		InputSpecification?: InputSpecification;

		/** The log level the user wants for their channel. */
		LogLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;
	}

	/** A request to update a channel. */
	export interface UpdateChannelRequestFormProperties {

		/** The log level the user wants for their channel. */
		LogLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
			LogLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update an input device. */
	export interface UpdateInputDeviceRequest {

		/** Configurable settings for the input device. */
		HdDeviceSettings?: InputDeviceConfigurableSettings;

		/** Placeholder documentation for __string */
		Name?: string | null;
	}

	/** A request to update an input device. */
	export interface UpdateInputDeviceRequestFormProperties {

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputDeviceRequestFormGroup() {
		return new FormGroup<UpdateInputDeviceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update an input. */
	export interface UpdateInputRequest {

		/** Placeholder documentation for __listOfInputDestinationRequest */
		Destinations?: Array<InputDestinationRequest>;

		/** Placeholder documentation for __listOfInputDeviceRequest */
		InputDevices?: Array<InputDeviceRequest>;

		/** Placeholder documentation for __listOf__string */
		InputSecurityGroups?: Array<string>;

		/** Placeholder documentation for __listOfMediaConnectFlowRequest */
		MediaConnectFlows?: Array<MediaConnectFlowRequest>;

		/** Placeholder documentation for __string */
		Name?: string | null;

		/** Placeholder documentation for __string */
		RoleArn?: string | null;

		/** Placeholder documentation for __listOfInputSourceRequest */
		Sources?: Array<InputSourceRequest>;
	}

	/** A request to update an input. */
	export interface UpdateInputRequestFormProperties {

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputRequestFormGroup() {
		return new FormGroup<UpdateInputRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow. */
	export interface UpdateInputSecurityGroupRequest {

		/** Placeholder documentation for Tags */
		Tags?: Tags;

		/** Placeholder documentation for __listOfInputWhitelistRuleCidr */
		WhitelistRules?: Array<InputWhitelistRuleCidr>;
	}

	/** The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow. */
	export interface UpdateInputSecurityGroupRequestFormProperties {
	}
	export function CreateUpdateInputSecurityGroupRequestFormGroup() {
		return new FormGroup<UpdateInputSecurityGroupRequestFormProperties>({
		});

	}


	/** A request to update a program in a multiplex. */
	export interface UpdateMultiplexProgramRequest {

		/** Multiplex Program settings configuration. */
		MultiplexProgramSettings?: MultiplexProgramSettings;
	}

	/** A request to update a program in a multiplex. */
	export interface UpdateMultiplexProgramRequestFormProperties {
	}
	export function CreateUpdateMultiplexProgramRequestFormGroup() {
		return new FormGroup<UpdateMultiplexProgramRequestFormProperties>({
		});

	}


	/** A request to update a multiplex. */
	export interface UpdateMultiplexRequest {

		/** Contains configuration for a Multiplex event */
		MultiplexSettings?: MultiplexSettings;

		/** Placeholder documentation for __string */
		Name?: string | null;
	}

	/** A request to update a multiplex. */
	export interface UpdateMultiplexRequestFormProperties {

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMultiplexRequestFormGroup() {
		return new FormGroup<UpdateMultiplexRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update a reservation */
	export interface UpdateReservationRequest {

		/** Placeholder documentation for __string */
		Name?: string | null;
	}

	/** Request to update a reservation */
	export interface UpdateReservationRequestFormProperties {

		/** Placeholder documentation for __string */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReservationRequestFormGroup() {
		return new FormGroup<UpdateReservationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

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
		DescribeSchedule(channelId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeScheduleResponse> {
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
		ListChannels(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChannelsResponse> {
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
		ListInputs(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInputsResponse> {
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
		ListInputSecurityGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInputSecurityGroupsResponse> {
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
		ListMultiplexes(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMultiplexesResponse> {
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
		ListMultiplexPrograms(maxResults: number | null | undefined, multiplexId: string, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListMultiplexProgramsResponse> {
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
		ListInputDevices(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInputDevicesResponse> {
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
		ListOfferings(channelClass: string | null | undefined, channelConfiguration: string | null | undefined, codec: string | null | undefined, duration: string | null | undefined, maxResults: number | null | undefined, maximumBitrate: string | null | undefined, maximumFramerate: string | null | undefined, nextToken: string | null | undefined, resolution: string | null | undefined, resourceType: string | null | undefined, specialFeature: string | null | undefined, videoQuality: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListOfferingsResponse> {
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
		ListReservations(channelClass: string | null | undefined, codec: string | null | undefined, maxResults: number | null | undefined, maximumBitrate: string | null | undefined, maximumFramerate: string | null | undefined, nextToken: string | null | undefined, resolution: string | null | undefined, resourceType: string | null | undefined, specialFeature: string | null | undefined, videoQuality: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListReservationsResponse> {
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
		creates?: BatchUpdateSchedulePutBodyCreates;

		/** A list of schedule actions to delete. */
		deletes?: BatchUpdateSchedulePutBodyDeletes;
	}
	export interface BatchUpdateSchedulePutBodyFormProperties {
	}
	export function CreateBatchUpdateSchedulePutBodyFormGroup() {
		return new FormGroup<BatchUpdateSchedulePutBodyFormProperties>({
		});

	}

	export interface BatchUpdateSchedulePutBodyCreates {

		/** Placeholder documentation for __listOfScheduleAction */
		ScheduleActions?: Array<ScheduleAction>;
	}
	export interface BatchUpdateSchedulePutBodyCreatesFormProperties {
	}
	export function CreateBatchUpdateSchedulePutBodyCreatesFormGroup() {
		return new FormGroup<BatchUpdateSchedulePutBodyCreatesFormProperties>({
		});

	}

	export interface BatchUpdateSchedulePutBodyDeletes {

		/** Placeholder documentation for __listOf__string */
		ActionNames?: Array<string>;
	}
	export interface BatchUpdateSchedulePutBodyDeletesFormProperties {
	}
	export function CreateBatchUpdateSchedulePutBodyDeletesFormGroup() {
		return new FormGroup<BatchUpdateSchedulePutBodyDeletesFormProperties>({
		});

	}

	export interface CreateChannelPostBody {

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		channelClass?: ChannelChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;

		/** Encoder Settings */
		encoderSettings?: CreateChannelPostBodyEncoderSettings;

		/** Placeholder documentation for __listOfInputAttachment */
		inputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		inputSpecification?: CreateChannelPostBodyInputSpecification;

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
		tags?: {[id: string]: string };
	}
	export interface CreateChannelPostBodyFormProperties {

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		channelClass: FormControl<ChannelChannelClass | null | undefined>,

		/** The log level the user wants for their channel. */
		logLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		requestId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		reserved: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		roleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			channelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined),
			logLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			reserved: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBodyEncoderSettings {

		/** Placeholder documentation for __listOfAudioDescription */
		AudioDescriptions?: Array<AudioDescription>;

		/** Avail Blanking */
		AvailBlanking?: AvailBlanking;

		/** Avail Configuration */
		AvailConfiguration?: AvailConfiguration;

		/** Blackout Slate */
		BlackoutSlate?: BlackoutSlate;

		/** Placeholder documentation for __listOfCaptionDescription */
		CaptionDescriptions?: Array<CaptionDescription>;

		/** Global Configuration */
		GlobalConfiguration?: GlobalConfiguration;

		/** Nielsen Configuration */
		NielsenConfiguration?: NielsenConfiguration;

		/** Placeholder documentation for __listOfOutputGroup */
		OutputGroups?: Array<OutputGroup>;

		/** Timecode Config */
		TimecodeConfig?: TimecodeConfig;

		/** Placeholder documentation for __listOfVideoDescription */
		VideoDescriptions?: Array<VideoDescription>;
	}
	export interface CreateChannelPostBodyEncoderSettingsFormProperties {
	}
	export function CreateCreateChannelPostBodyEncoderSettingsFormGroup() {
		return new FormGroup<CreateChannelPostBodyEncoderSettingsFormProperties>({
		});

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
	export interface CreateChannelPostBodyInputSpecificationFormProperties {

		/** codec in increasing order of complexity */
		Codec: FormControl<InputSpecificationCodec | null | undefined>,

		/** Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
		MaximumBitrate: FormControl<InputSpecificationMaximumBitrate | null | undefined>,

		/**
		 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution: FormControl<InputSpecificationResolution | null | undefined>,
	}
	export function CreateCreateChannelPostBodyInputSpecificationFormGroup() {
		return new FormGroup<CreateChannelPostBodyInputSpecificationFormProperties>({
			Codec: new FormControl<InputSpecificationCodec | null | undefined>(undefined),
			MaximumBitrate: new FormControl<InputSpecificationMaximumBitrate | null | undefined>(undefined),
			Resolution: new FormControl<InputSpecificationResolution | null | undefined>(undefined),
		});

	}

	export interface CreateInputPostBody {

		/** Placeholder documentation for __listOfInputDestinationRequest */
		destinations?: Array<InputDestinationRequest>;

		/** Placeholder documentation for __listOfInputDeviceSettings */
		inputDevices?: Array<InputDeviceSettings>;

		/** Placeholder documentation for __listOf__string */
		inputSecurityGroups?: Array<string>;

		/** Placeholder documentation for __listOfMediaConnectFlowRequest */
		mediaConnectFlows?: Array<MediaConnectFlowRequest>;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		requestId?: string | null;

		/** Placeholder documentation for __string */
		roleArn?: string | null;

		/** Placeholder documentation for __listOfInputSourceRequest */
		sources?: Array<InputSourceRequest>;

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string };

		/** Placeholder documentation for InputType */
		type?: InputType | null;

		/**
		 * Settings for a private VPC Input.
		 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
		 * This property requires setting the roleArn property on Input creation.
		 * Not compatible with the inputSecurityGroups property.
		 */
		vpc?: CreateInputPostBodyVpc;
	}
	export interface CreateInputPostBodyFormProperties {

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		requestId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		roleArn: FormControl<string | null | undefined>,

		/** Placeholder documentation for Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Placeholder documentation for InputType */
		type: FormControl<InputType | null | undefined>,
	}
	export function CreateCreateInputPostBodyFormGroup() {
		return new FormGroup<CreateInputPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<InputType | null | undefined>(undefined),
		});

	}

	export interface CreateInputPostBodyVpc {

		/** Placeholder documentation for __listOf__string */
		SecurityGroupIds?: Array<string>;

		/** Placeholder documentation for __listOf__string */
		SubnetIds?: Array<string>;
	}
	export interface CreateInputPostBodyVpcFormProperties {
	}
	export function CreateCreateInputPostBodyVpcFormGroup() {
		return new FormGroup<CreateInputPostBodyVpcFormProperties>({
		});

	}

	export interface CreateInputSecurityGroupPostBody {

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string };

		/** Placeholder documentation for __listOfInputWhitelistRuleCidr */
		whitelistRules?: Array<InputWhitelistRuleCidr>;
	}
	export interface CreateInputSecurityGroupPostBodyFormProperties {

		/** Placeholder documentation for Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateInputSecurityGroupPostBodyFormGroup() {
		return new FormGroup<CreateInputSecurityGroupPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
		tags?: {[id: string]: string };
	}
	export interface CreateMultiplexPostBodyFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,

		/** Placeholder documentation for Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateMultiplexPostBodyFormGroup() {
		return new FormGroup<CreateMultiplexPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
	export interface CreateMultiplexPostBodyMultiplexSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1000Max3000
		 * Minimum: 1000
		 * Maximum: 3000
		 */
		MaximumVideoBufferDelayMilliseconds: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max100000000
		 * Minimum: 0
		 * Maximum: 100000000
		 */
		TransportStreamReservedBitrate: FormControl<number | null | undefined>,
	}
	export function CreateCreateMultiplexPostBodyMultiplexSettingsFormGroup() {
		return new FormGroup<CreateMultiplexPostBodyMultiplexSettingsFormProperties>({
			MaximumVideoBufferDelayMilliseconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(3000)]),
			TransportStreamBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(1000000), Validators.max(100000000)]),
			TransportStreamId: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			TransportStreamReservedBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000000)]),
		});

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
	export interface CreateMultiplexProgramPostBodyFormProperties {

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		programName: FormControl<string | null | undefined>,

		/**
		 * Placeholder documentation for __string
		 * Required
		 */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMultiplexProgramPostBodyFormGroup() {
		return new FormGroup<CreateMultiplexProgramPostBodyFormProperties>({
			programName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		ServiceDescriptor?: MultiplexProgramServiceDescriptor;

		/** The video configuration for each program in a multiplex. */
		VideoSettings?: MultiplexVideoSettings;
	}
	export interface CreateMultiplexProgramPostBodyMultiplexProgramSettingsFormProperties {

		/**
		 * Indicates which pipeline is preferred by the multiplex for program ingest.
		 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
		 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
		 * it will not switch back to the other pipeline based on it recovering to a healthy state,
		 * it will only switch if the active pipeline becomes unhealthy.
		 */
		PreferredChannelPipeline: FormControl<MultiplexProgramSettingsPreferredChannelPipeline | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNumber: FormControl<number | null | undefined>,
	}
	export function CreateCreateMultiplexProgramPostBodyMultiplexProgramSettingsFormGroup() {
		return new FormGroup<CreateMultiplexProgramPostBodyMultiplexProgramSettingsFormProperties>({
			PreferredChannelPipeline: new FormControl<MultiplexProgramSettingsPreferredChannelPipeline | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
		});

	}

	export interface CreateTagsPostBody {

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string };
	}
	export interface CreateTagsPostBodyFormProperties {

		/** Placeholder documentation for Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateTagsPostBodyFormGroup() {
		return new FormGroup<CreateTagsPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBody {

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;

		/** Encoder Settings */
		encoderSettings?: UpdateChannelPutBodyEncoderSettings;

		/** Placeholder documentation for __listOfInputAttachment */
		inputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		inputSpecification?: UpdateChannelPutBodyInputSpecification;

		/** The log level the user wants for their channel. */
		logLevel?: ChannelLogLevel | null;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		roleArn?: string | null;
	}
	export interface UpdateChannelPutBodyFormProperties {

		/** The log level the user wants for their channel. */
		logLevel: FormControl<ChannelLogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFormProperties>({
			logLevel: new FormControl<ChannelLogLevel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBodyEncoderSettings {

		/** Placeholder documentation for __listOfAudioDescription */
		AudioDescriptions?: Array<AudioDescription>;

		/** Avail Blanking */
		AvailBlanking?: AvailBlanking;

		/** Avail Configuration */
		AvailConfiguration?: AvailConfiguration;

		/** Blackout Slate */
		BlackoutSlate?: BlackoutSlate;

		/** Placeholder documentation for __listOfCaptionDescription */
		CaptionDescriptions?: Array<CaptionDescription>;

		/** Global Configuration */
		GlobalConfiguration?: GlobalConfiguration;

		/** Nielsen Configuration */
		NielsenConfiguration?: NielsenConfiguration;

		/** Placeholder documentation for __listOfOutputGroup */
		OutputGroups?: Array<OutputGroup>;

		/** Timecode Config */
		TimecodeConfig?: TimecodeConfig;

		/** Placeholder documentation for __listOfVideoDescription */
		VideoDescriptions?: Array<VideoDescription>;
	}
	export interface UpdateChannelPutBodyEncoderSettingsFormProperties {
	}
	export function CreateUpdateChannelPutBodyEncoderSettingsFormGroup() {
		return new FormGroup<UpdateChannelPutBodyEncoderSettingsFormProperties>({
		});

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
	export interface UpdateChannelPutBodyInputSpecificationFormProperties {

		/** codec in increasing order of complexity */
		Codec: FormControl<InputSpecificationCodec | null | undefined>,

		/** Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently. */
		MaximumBitrate: FormControl<InputSpecificationMaximumBitrate | null | undefined>,

		/**
		 * Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines
		 */
		Resolution: FormControl<InputSpecificationResolution | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyInputSpecificationFormGroup() {
		return new FormGroup<UpdateChannelPutBodyInputSpecificationFormProperties>({
			Codec: new FormControl<InputSpecificationCodec | null | undefined>(undefined),
			MaximumBitrate: new FormControl<InputSpecificationMaximumBitrate | null | undefined>(undefined),
			Resolution: new FormControl<InputSpecificationResolution | null | undefined>(undefined),
		});

	}

	export interface UpdateInputPutBody {

		/** Placeholder documentation for __listOfInputDestinationRequest */
		destinations?: Array<InputDestinationRequest>;

		/** Placeholder documentation for __listOfInputDeviceRequest */
		inputDevices?: Array<InputDeviceRequest>;

		/** Placeholder documentation for __listOf__string */
		inputSecurityGroups?: Array<string>;

		/** Placeholder documentation for __listOfMediaConnectFlowRequest */
		mediaConnectFlows?: Array<MediaConnectFlowRequest>;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		roleArn?: string | null;

		/** Placeholder documentation for __listOfInputSourceRequest */
		sources?: Array<InputSourceRequest>;
	}
	export interface UpdateInputPutBodyFormProperties {

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputPutBodyFormGroup() {
		return new FormGroup<UpdateInputPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInputSecurityGroupPutBody {

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string };

		/** Placeholder documentation for __listOfInputWhitelistRuleCidr */
		whitelistRules?: Array<InputWhitelistRuleCidr>;
	}
	export interface UpdateInputSecurityGroupPutBodyFormProperties {

		/** Placeholder documentation for Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateInputSecurityGroupPutBodyFormGroup() {
		return new FormGroup<UpdateInputSecurityGroupPutBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateMultiplexPutBody {

		/** Contains configuration for a Multiplex event */
		multiplexSettings?: UpdateMultiplexPutBodyMultiplexSettings;

		/** Placeholder documentation for __string */
		name?: string | null;
	}
	export interface UpdateMultiplexPutBodyFormProperties {

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMultiplexPutBodyFormGroup() {
		return new FormGroup<UpdateMultiplexPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface UpdateMultiplexPutBodyMultiplexSettingsFormProperties {

		/**
		 * Placeholder documentation for __integerMin1000Max3000
		 * Minimum: 1000
		 * Maximum: 3000
		 */
		MaximumVideoBufferDelayMilliseconds: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin1000000Max100000000
		 * Minimum: 1000000
		 * Maximum: 100000000
		 */
		TransportStreamBitrate: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		TransportStreamId: FormControl<number | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max100000000
		 * Minimum: 0
		 * Maximum: 100000000
		 */
		TransportStreamReservedBitrate: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMultiplexPutBodyMultiplexSettingsFormGroup() {
		return new FormGroup<UpdateMultiplexPutBodyMultiplexSettingsFormProperties>({
			MaximumVideoBufferDelayMilliseconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(3000)]),
			TransportStreamBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(1000000), Validators.max(100000000)]),
			TransportStreamId: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			TransportStreamReservedBitrate: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000000)]),
		});

	}

	export interface UpdateMultiplexProgramPutBody {

		/** Multiplex Program settings configuration. */
		multiplexProgramSettings?: UpdateMultiplexProgramPutBodyMultiplexProgramSettings;
	}
	export interface UpdateMultiplexProgramPutBodyFormProperties {
	}
	export function CreateUpdateMultiplexProgramPutBodyFormGroup() {
		return new FormGroup<UpdateMultiplexProgramPutBodyFormProperties>({
		});

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
		ServiceDescriptor?: MultiplexProgramServiceDescriptor;

		/** The video configuration for each program in a multiplex. */
		VideoSettings?: MultiplexVideoSettings;
	}
	export interface UpdateMultiplexProgramPutBodyMultiplexProgramSettingsFormProperties {

		/**
		 * Indicates which pipeline is preferred by the multiplex for program ingest.
		 * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
		 * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
		 * it will not switch back to the other pipeline based on it recovering to a healthy state,
		 * it will only switch if the active pipeline becomes unhealthy.
		 */
		PreferredChannelPipeline: FormControl<MultiplexProgramSettingsPreferredChannelPipeline | null | undefined>,

		/**
		 * Placeholder documentation for __integerMin0Max65535
		 * Minimum: 0
		 * Maximum: 65535
		 */
		ProgramNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMultiplexProgramPutBodyMultiplexProgramSettingsFormGroup() {
		return new FormGroup<UpdateMultiplexProgramPutBodyMultiplexProgramSettingsFormProperties>({
			PreferredChannelPipeline: new FormControl<MultiplexProgramSettingsPreferredChannelPipeline | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
		});

	}

	export interface UpdateReservationPutBody {

		/** Placeholder documentation for __string */
		name?: string | null;
	}
	export interface UpdateReservationPutBodyFormProperties {

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReservationPutBodyFormGroup() {
		return new FormGroup<UpdateReservationPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInputDevicePutBody {

		/** Configurable settings for the input device. */
		hdDeviceSettings?: UpdateInputDevicePutBodyHdDeviceSettings;

		/** Placeholder documentation for __string */
		name?: string | null;
	}
	export interface UpdateInputDevicePutBodyFormProperties {

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputDevicePutBodyFormGroup() {
		return new FormGroup<UpdateInputDevicePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInputDevicePutBodyHdDeviceSettings {

		/** The source to activate (use) from the input device. */
		ConfiguredInput?: InputDeviceHdSettingsConfiguredInput | null;

		/** Placeholder documentation for __integer */
		MaxBitrate?: number | null;
	}
	export interface UpdateInputDevicePutBodyHdDeviceSettingsFormProperties {

		/** The source to activate (use) from the input device. */
		ConfiguredInput: FormControl<InputDeviceHdSettingsConfiguredInput | null | undefined>,

		/** Placeholder documentation for __integer */
		MaxBitrate: FormControl<number | null | undefined>,
	}
	export function CreateUpdateInputDevicePutBodyHdDeviceSettingsFormGroup() {
		return new FormGroup<UpdateInputDevicePutBodyHdDeviceSettingsFormProperties>({
			ConfiguredInput: new FormControl<InputDeviceHdSettingsConfiguredInput | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
		});

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
		tags?: {[id: string]: string };
	}
	export interface PurchaseOfferingPostBodyFormProperties {

		/**
		 * Placeholder documentation for __integerMin1
		 * Required
		 * Minimum: 1
		 */
		count: FormControl<number | null | undefined>,

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		requestId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		start: FormControl<string | null | undefined>,

		/** Placeholder documentation for Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePurchaseOfferingPostBodyFormGroup() {
		return new FormGroup<PurchaseOfferingPostBodyFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelClassPutBody {

		/**
		 * A standard channel has two encoding pipelines and a single pipeline channel only has one.
		 * Required
		 */
		channelClass: ChannelChannelClass;

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;
	}
	export interface UpdateChannelClassPutBodyFormProperties {

		/**
		 * A standard channel has two encoding pipelines and a single pipeline channel only has one.
		 * Required
		 */
		channelClass: FormControl<ChannelChannelClass | null | undefined>,
	}
	export function CreateUpdateChannelClassPutBodyFormGroup() {
		return new FormGroup<UpdateChannelClassPutBodyFormProperties>({
			channelClass: new FormControl<ChannelChannelClass | null | undefined>(undefined, [Validators.required]),
		});

	}

}

