import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Placeholder documentation for AcceptInputDeviceTransferResponse */
	export interface AcceptInputDeviceTransferResponse {
	}

	/** Placeholder documentation for AcceptInputDeviceTransferResponse */
	export interface AcceptInputDeviceTransferResponseFormProperties {
	}
	export function CreateAcceptInputDeviceTransferResponseFormGroup() {
		return new FormGroup<AcceptInputDeviceTransferResponseFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}


	/** Placeholder documentation for BatchDeleteResponse */
	export interface BatchDeleteResponse {
		Failed?: Array<BatchFailedResultModel>;
		Successful?: Array<BatchSuccessfulResultModel>;
	}

	/** Placeholder documentation for BatchDeleteResponse */
	export interface BatchDeleteResponseFormProperties {
	}
	export function CreateBatchDeleteResponseFormGroup() {
		return new FormGroup<BatchDeleteResponseFormProperties>({
		});

	}


	/** Details from a failed operation */
	export interface BatchFailedResultModel {
		Arn?: string;
		Code?: string;
		Id?: string;
		Message?: string;
	}

	/** Details from a failed operation */
	export interface BatchFailedResultModelFormProperties {
		Arn: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBatchFailedResultModelFormGroup() {
		return new FormGroup<BatchFailedResultModelFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details from a successful operation */
	export interface BatchSuccessfulResultModel {
		Arn?: string;
		Id?: string;
		State?: string;
	}

	/** Details from a successful operation */
	export interface BatchSuccessfulResultModelFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateBatchSuccessfulResultModelFormGroup() {
		return new FormGroup<BatchSuccessfulResultModelFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for BatchStartResponse */
	export interface BatchStartResponse {
		Failed?: Array<BatchFailedResultModel>;
		Successful?: Array<BatchSuccessfulResultModel>;
	}

	/** Placeholder documentation for BatchStartResponse */
	export interface BatchStartResponseFormProperties {
	}
	export function CreateBatchStartResponseFormGroup() {
		return new FormGroup<BatchStartResponseFormProperties>({
		});

	}


	/** Placeholder documentation for BatchStopResponse */
	export interface BatchStopResponse {
		Failed?: Array<BatchFailedResultModel>;
		Successful?: Array<BatchSuccessfulResultModel>;
	}

	/** Placeholder documentation for BatchStopResponse */
	export interface BatchStopResponseFormProperties {
	}
	export function CreateBatchStopResponseFormGroup() {
		return new FormGroup<BatchStopResponseFormProperties>({
		});

	}


	/** Placeholder documentation for BatchUpdateScheduleResponse */
	export interface BatchUpdateScheduleResponse {
		Creates?: BatchScheduleActionCreateResult;
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

		/** Required */
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

		/** Required */
		ActionName: string;

		/** Required */
		ScheduleActionSettings: ScheduleActionSettings;

		/** Required */
		ScheduleActionStartSettings: ScheduleActionStartSettings;
	}

	/** Contains information on a single schedule action. */
	export interface ScheduleActionFormProperties {

		/** Required */
		ActionName: FormControl<string | null | undefined>,
	}
	export function CreateScheduleActionFormGroup() {
		return new FormGroup<ScheduleActionFormProperties>({
			ActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Holds the settings for a single schedule action. */
	export interface ScheduleActionSettings {
		HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;
		HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;
		InputPrepareSettings?: InputPrepareScheduleActionSettings;
		InputSwitchSettings?: InputSwitchScheduleActionSettings;
		MotionGraphicsImageActivateSettings?: MotionGraphicsActivateScheduleActionSettings;
		MotionGraphicsImageDeactivateSettings?: MotionGraphicsDeactivateScheduleActionSettings;
		PauseStateSettings?: PauseStateScheduleActionSettings;
		Scte35InputSettings?: Scte35InputScheduleActionSettings;
		Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;
		Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;
		Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;
		StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;
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
		Tag?: string;
		Id3?: string;
	}

	/** Settings for the action to insert a user-defined ID3 tag in each HLS segment */
	export interface HlsId3SegmentTaggingScheduleActionSettingsFormProperties {
		Tag: FormControl<string | null | undefined>,
		Id3: FormControl<string | null | undefined>,
	}
	export function CreateHlsId3SegmentTaggingScheduleActionSettingsFormGroup() {
		return new FormGroup<HlsId3SegmentTaggingScheduleActionSettingsFormProperties>({
			Tag: new FormControl<string | null | undefined>(undefined),
			Id3: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for the action to emit HLS metadata */
	export interface HlsTimedMetadataScheduleActionSettings {

		/** Required */
		Id3: string;
	}

	/** Settings for the action to emit HLS metadata */
	export interface HlsTimedMetadataScheduleActionSettingsFormProperties {

		/** Required */
		Id3: FormControl<string | null | undefined>,
	}
	export function CreateHlsTimedMetadataScheduleActionSettingsFormGroup() {
		return new FormGroup<HlsTimedMetadataScheduleActionSettingsFormProperties>({
			Id3: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Action to prepare an input for a future immediate input switch. */
	export interface InputPrepareScheduleActionSettings {
		InputAttachmentNameReference?: string;
		InputClippingSettings?: InputClippingSettings;
		UrlPath?: Array<string>;
	}

	/** Action to prepare an input for a future immediate input switch. */
	export interface InputPrepareScheduleActionSettingsFormProperties {
		InputAttachmentNameReference: FormControl<string | null | undefined>,
	}
	export function CreateInputPrepareScheduleActionSettingsFormGroup() {
		return new FormGroup<InputPrepareScheduleActionSettingsFormProperties>({
			InputAttachmentNameReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
	export interface InputClippingSettings {

		/** Required */
		InputTimecodeSource: InputTimecodeSource;
		StartTimecode?: StartTimecode;
		StopTimecode?: StopTimecode;
	}

	/** Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file. */
	export interface InputClippingSettingsFormProperties {

		/** Required */
		InputTimecodeSource: FormControl<InputTimecodeSource | null | undefined>,
	}
	export function CreateInputClippingSettingsFormGroup() {
		return new FormGroup<InputClippingSettingsFormProperties>({
			InputTimecodeSource: new FormControl<InputTimecodeSource | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Documentation update needed */
	export enum InputTimecodeSource { ZEROBASED = 0, EMBEDDED = 1 }


	/** Settings to identify the start of the clip. */
	export interface StartTimecode {
		Timecode?: string;
	}

	/** Settings to identify the start of the clip. */
	export interface StartTimecodeFormProperties {
		Timecode: FormControl<string | null | undefined>,
	}
	export function CreateStartTimecodeFormGroup() {
		return new FormGroup<StartTimecodeFormProperties>({
			Timecode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to identify the end of the clip. */
	export interface StopTimecode {
		LastFrameClippingBehavior?: LastFrameClippingBehavior;
		Timecode?: string;
	}

	/** Settings to identify the end of the clip. */
	export interface StopTimecodeFormProperties {
		LastFrameClippingBehavior: FormControl<LastFrameClippingBehavior | null | undefined>,
		Timecode: FormControl<string | null | undefined>,
	}
	export function CreateStopTimecodeFormGroup() {
		return new FormGroup<StopTimecodeFormProperties>({
			LastFrameClippingBehavior: new FormControl<LastFrameClippingBehavior | null | undefined>(undefined),
			Timecode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode. */
	export enum LastFrameClippingBehavior { EXCLUDE_LAST_FRAME = 0, INCLUDE_LAST_FRAME = 1 }


	/** Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
	export interface InputSwitchScheduleActionSettings {

		/** Required */
		InputAttachmentNameReference: string;
		InputClippingSettings?: InputClippingSettings;
		UrlPath?: Array<string>;
	}

	/** Settings for the "switch input" action: to switch from ingesting one input to ingesting another input. */
	export interface InputSwitchScheduleActionSettingsFormProperties {

		/** Required */
		InputAttachmentNameReference: FormControl<string | null | undefined>,
	}
	export function CreateInputSwitchScheduleActionSettingsFormGroup() {
		return new FormGroup<InputSwitchScheduleActionSettingsFormProperties>({
			InputAttachmentNameReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to specify the rendering of motion graphics into the video stream. */
	export interface MotionGraphicsActivateScheduleActionSettings {
		Duration?: number | null;
		PasswordParam?: string;
		Url?: string;
		Username?: string;
	}

	/** Settings to specify the rendering of motion graphics into the video stream. */
	export interface MotionGraphicsActivateScheduleActionSettingsFormProperties {
		Duration: FormControl<number | null | undefined>,
		PasswordParam: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateMotionGraphicsActivateScheduleActionSettingsFormGroup() {
		return new FormGroup<MotionGraphicsActivateScheduleActionSettingsFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined),
			PasswordParam: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to specify the ending of rendering motion graphics into the video stream. */
	export interface MotionGraphicsDeactivateScheduleActionSettings {
	}

	/** Settings to specify the ending of rendering motion graphics into the video stream. */
	export interface MotionGraphicsDeactivateScheduleActionSettingsFormProperties {
	}
	export function CreateMotionGraphicsDeactivateScheduleActionSettingsFormGroup() {
		return new FormGroup<MotionGraphicsDeactivateScheduleActionSettingsFormProperties>({
		});

	}


	/** Settings for the action to set pause state of a channel. */
	export interface PauseStateScheduleActionSettings {
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

		/** Required */
		PipelineId: PipelineId;
	}

	/** Settings for pausing a pipeline. */
	export interface PipelinePauseStateSettingsFormProperties {

		/** Required */
		PipelineId: FormControl<PipelineId | null | undefined>,
	}
	export function CreatePipelinePauseStateSettingsFormGroup() {
		return new FormGroup<PipelinePauseStateSettingsFormProperties>({
			PipelineId: new FormControl<PipelineId | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pipeline ID */
	export enum PipelineId { PIPELINE_0 = 0, PIPELINE_1 = 1 }


	/** Scte35Input Schedule Action Settings */
	export interface Scte35InputScheduleActionSettings {
		InputAttachmentNameReference?: string;

		/** Required */
		Mode: Scte35InputMode;
	}

	/** Scte35Input Schedule Action Settings */
	export interface Scte35InputScheduleActionSettingsFormProperties {
		InputAttachmentNameReference: FormControl<string | null | undefined>,

		/** Required */
		Mode: FormControl<Scte35InputMode | null | undefined>,
	}
	export function CreateScte35InputScheduleActionSettingsFormGroup() {
		return new FormGroup<Scte35InputScheduleActionSettingsFormProperties>({
			InputAttachmentNameReference: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<Scte35InputMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Whether the SCTE-35 input should be the active input or a fixed input. */
	export enum Scte35InputMode { FIXED = 0, FOLLOW_ACTIVE = 1 }


	/** Settings for a SCTE-35 return_to_network message. */
	export interface Scte35ReturnToNetworkScheduleActionSettings {

		/** Required */
		SpliceEventId: number;
	}

	/** Settings for a SCTE-35 return_to_network message. */
	export interface Scte35ReturnToNetworkScheduleActionSettingsFormProperties {

		/** Required */
		SpliceEventId: FormControl<number | null | undefined>,
	}
	export function CreateScte35ReturnToNetworkScheduleActionSettingsFormGroup() {
		return new FormGroup<Scte35ReturnToNetworkScheduleActionSettingsFormProperties>({
			SpliceEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for a SCTE-35 splice_insert message. */
	export interface Scte35SpliceInsertScheduleActionSettings {
		Duration?: number | null;

		/** Required */
		SpliceEventId: number;
	}

	/** Settings for a SCTE-35 splice_insert message. */
	export interface Scte35SpliceInsertScheduleActionSettingsFormProperties {
		Duration: FormControl<number | null | undefined>,

		/** Required */
		SpliceEventId: FormControl<number | null | undefined>,
	}
	export function CreateScte35SpliceInsertScheduleActionSettingsFormGroup() {
		return new FormGroup<Scte35SpliceInsertScheduleActionSettingsFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined),
			SpliceEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for a SCTE-35 time_signal. */
	export interface Scte35TimeSignalScheduleActionSettings {

		/** Required */
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

		/** Required */
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

		/** Required */
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
		DeliveryRestrictions?: Scte35DeliveryRestrictions;
		SegmentNum?: number | null;

		/** Required */
		SegmentationCancelIndicator: Scte35SegmentationCancelIndicator;
		SegmentationDuration?: number | null;

		/** Required */
		SegmentationEventId: number;
		SegmentationTypeId?: number | null;
		SegmentationUpid?: string;
		SegmentationUpidType?: number | null;
		SegmentsExpected?: number | null;
		SubSegmentNum?: number | null;
		SubSegmentsExpected?: number | null;
	}

	/** Corresponds to SCTE-35 segmentation_descriptor. */
	export interface Scte35SegmentationDescriptorFormProperties {
		SegmentNum: FormControl<number | null | undefined>,

		/** Required */
		SegmentationCancelIndicator: FormControl<Scte35SegmentationCancelIndicator | null | undefined>,
		SegmentationDuration: FormControl<number | null | undefined>,

		/** Required */
		SegmentationEventId: FormControl<number | null | undefined>,
		SegmentationTypeId: FormControl<number | null | undefined>,
		SegmentationUpid: FormControl<string | null | undefined>,
		SegmentationUpidType: FormControl<number | null | undefined>,
		SegmentsExpected: FormControl<number | null | undefined>,
		SubSegmentNum: FormControl<number | null | undefined>,
		SubSegmentsExpected: FormControl<number | null | undefined>,
	}
	export function CreateScte35SegmentationDescriptorFormGroup() {
		return new FormGroup<Scte35SegmentationDescriptorFormProperties>({
			SegmentNum: new FormControl<number | null | undefined>(undefined),
			SegmentationCancelIndicator: new FormControl<Scte35SegmentationCancelIndicator | null | undefined>(undefined, [Validators.required]),
			SegmentationDuration: new FormControl<number | null | undefined>(undefined),
			SegmentationEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SegmentationTypeId: new FormControl<number | null | undefined>(undefined),
			SegmentationUpid: new FormControl<string | null | undefined>(undefined),
			SegmentationUpidType: new FormControl<number | null | undefined>(undefined),
			SegmentsExpected: new FormControl<number | null | undefined>(undefined),
			SubSegmentNum: new FormControl<number | null | undefined>(undefined),
			SubSegmentsExpected: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element. */
	export interface Scte35DeliveryRestrictions {

		/** Required */
		ArchiveAllowedFlag: Scte35ArchiveAllowedFlag;

		/** Required */
		DeviceRestrictions: Scte35DeviceRestrictions;

		/** Required */
		NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlag;

		/** Required */
		WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlag;
	}

	/** Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element. */
	export interface Scte35DeliveryRestrictionsFormProperties {

		/** Required */
		ArchiveAllowedFlag: FormControl<Scte35ArchiveAllowedFlag | null | undefined>,

		/** Required */
		DeviceRestrictions: FormControl<Scte35DeviceRestrictions | null | undefined>,

		/** Required */
		NoRegionalBlackoutFlag: FormControl<Scte35NoRegionalBlackoutFlag | null | undefined>,

		/** Required */
		WebDeliveryAllowedFlag: FormControl<Scte35WebDeliveryAllowedFlag | null | undefined>,
	}
	export function CreateScte35DeliveryRestrictionsFormGroup() {
		return new FormGroup<Scte35DeliveryRestrictionsFormProperties>({
			ArchiveAllowedFlag: new FormControl<Scte35ArchiveAllowedFlag | null | undefined>(undefined, [Validators.required]),
			DeviceRestrictions: new FormControl<Scte35DeviceRestrictions | null | undefined>(undefined, [Validators.required]),
			NoRegionalBlackoutFlag: new FormControl<Scte35NoRegionalBlackoutFlag | null | undefined>(undefined, [Validators.required]),
			WebDeliveryAllowedFlag: new FormControl<Scte35WebDeliveryAllowedFlag | null | undefined>(undefined, [Validators.required]),
		});

	}


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


	/** Settings for the action to activate a static image. */
	export interface StaticImageActivateScheduleActionSettings {
		Duration?: number | null;
		FadeIn?: number | null;
		FadeOut?: number | null;
		Height?: number | null;

		/** Required */
		Image: InputLocation;
		ImageX?: number | null;
		ImageY?: number | null;
		Layer?: number | null;
		Opacity?: number | null;
		Width?: number | null;
	}

	/** Settings for the action to activate a static image. */
	export interface StaticImageActivateScheduleActionSettingsFormProperties {
		Duration: FormControl<number | null | undefined>,
		FadeIn: FormControl<number | null | undefined>,
		FadeOut: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		ImageX: FormControl<number | null | undefined>,
		ImageY: FormControl<number | null | undefined>,
		Layer: FormControl<number | null | undefined>,
		Opacity: FormControl<number | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateStaticImageActivateScheduleActionSettingsFormGroup() {
		return new FormGroup<StaticImageActivateScheduleActionSettingsFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined),
			FadeIn: new FormControl<number | null | undefined>(undefined),
			FadeOut: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			ImageX: new FormControl<number | null | undefined>(undefined),
			ImageY: new FormControl<number | null | undefined>(undefined),
			Layer: new FormControl<number | null | undefined>(undefined),
			Opacity: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Input Location */
	export interface InputLocation {
		PasswordParam?: string;

		/** Required */
		Uri: string;
		Username?: string;
	}

	/** Input Location */
	export interface InputLocationFormProperties {
		PasswordParam: FormControl<string | null | undefined>,

		/** Required */
		Uri: FormControl<string | null | undefined>,
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
		FadeOut?: number | null;
		Layer?: number | null;
	}

	/** Settings for the action to deactivate the image in a specific layer. */
	export interface StaticImageDeactivateScheduleActionSettingsFormProperties {
		FadeOut: FormControl<number | null | undefined>,
		Layer: FormControl<number | null | undefined>,
	}
	export function CreateStaticImageDeactivateScheduleActionSettingsFormGroup() {
		return new FormGroup<StaticImageDeactivateScheduleActionSettingsFormProperties>({
			FadeOut: new FormControl<number | null | undefined>(undefined),
			Layer: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings to specify when an action should occur. Only one of the options must be selected. */
	export interface ScheduleActionStartSettings {
		FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;
		FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;
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

		/** Required */
		Time: string;
	}

	/** Start time for the action. */
	export interface FixedModeScheduleActionStartSettingsFormProperties {

		/** Required */
		Time: FormControl<string | null | undefined>,
	}
	export function CreateFixedModeScheduleActionStartSettingsFormGroup() {
		return new FormGroup<FixedModeScheduleActionStartSettingsFormProperties>({
			Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings to specify if an action follows another. */
	export interface FollowModeScheduleActionStartSettings {

		/** Required */
		FollowPoint: FollowPoint;

		/** Required */
		ReferenceActionName: string;
	}

	/** Settings to specify if an action follows another. */
	export interface FollowModeScheduleActionStartSettingsFormProperties {

		/** Required */
		FollowPoint: FormControl<FollowPoint | null | undefined>,

		/** Required */
		ReferenceActionName: FormControl<string | null | undefined>,
	}
	export function CreateFollowModeScheduleActionStartSettingsFormGroup() {
		return new FormGroup<FollowModeScheduleActionStartSettingsFormProperties>({
			FollowPoint: new FormControl<FollowPoint | null | undefined>(undefined, [Validators.required]),
			ReferenceActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Follow reference point. */
	export enum FollowPoint { END = 0, START = 1 }


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

		/** Required */
		ScheduleActions: Array<ScheduleAction>;
	}

	/** List of actions that have been deleted from the schedule. */
	export interface BatchScheduleActionDeleteResultFormProperties {
	}
	export function CreateBatchScheduleActionDeleteResultFormGroup() {
		return new FormGroup<BatchScheduleActionDeleteResultFormProperties>({
		});

	}


	/** Placeholder documentation for CancelInputDeviceTransferResponse */
	export interface CancelInputDeviceTransferResponse {
	}

	/** Placeholder documentation for CancelInputDeviceTransferResponse */
	export interface CancelInputDeviceTransferResponseFormProperties {
	}
	export function CreateCancelInputDeviceTransferResponseFormGroup() {
		return new FormGroup<CancelInputDeviceTransferResponseFormProperties>({
		});

	}


	/** Placeholder documentation for ClaimDeviceResponse */
	export interface ClaimDeviceResponse {
	}

	/** Placeholder documentation for ClaimDeviceResponse */
	export interface ClaimDeviceResponseFormProperties {
	}
	export function CreateClaimDeviceResponseFormGroup() {
		return new FormGroup<ClaimDeviceResponseFormProperties>({
		});

	}


	/** Placeholder documentation for CreateChannelResponse */
	export interface CreateChannelResponse {
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
		Arn?: string;
		CdiInputSpecification?: CdiInputSpecification;
		ChannelClass?: ChannelClass;
		Destinations?: Array<OutputDestination>;
		EgressEndpoints?: Array<ChannelEgressEndpoint>;
		EncoderSettings?: EncoderSettings;
		Id?: string;
		InputAttachments?: Array<InputAttachment>;
		InputSpecification?: InputSpecification;
		LogLevel?: LogLevel;
		Maintenance?: MaintenanceStatus;
		Name?: string;
		PipelineDetails?: Array<PipelineDetail>;
		PipelinesRunningCount?: number | null;
		RoleArn?: string;
		State?: ChannelState;
		Tags?: Tags;
		Vpc?: VpcOutputSettingsDescription;
	}

	/** Placeholder documentation for Channel */
	export interface ChannelFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelClass: FormControl<ChannelClass | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for CdiInputSpecification */
	export interface CdiInputSpecification {
		Resolution?: CdiInputResolution;
	}

	/** Placeholder documentation for CdiInputSpecification */
	export interface CdiInputSpecificationFormProperties {
		Resolution: FormControl<CdiInputResolution | null | undefined>,
	}
	export function CreateCdiInputSpecificationFormGroup() {
		return new FormGroup<CdiInputSpecificationFormProperties>({
			Resolution: new FormControl<CdiInputResolution | null | undefined>(undefined),
		});

	}


	/**
	 * Maximum CDI input resolution; SD is 480i and 576i up to 30 frames-per-second (fps), HD is 720p up to 60 fps / 1080i up to 30 fps, FHD is 1080p up to 60 fps, UHD is 2160p up to 60 fps
	 */
	export enum CdiInputResolution { SD = 0, HD = 1, FHD = 2, UHD = 3 }


	/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
	export enum ChannelClass { STANDARD = 0, SINGLE_PIPELINE = 1 }


	/** Placeholder documentation for OutputDestination */
	export interface OutputDestination {
		Id?: string;
		MediaPackageSettings?: Array<MediaPackageOutputDestinationSettings>;
		MultiplexSettings?: MultiplexProgramChannelDestinationSettings;
		Settings?: Array<OutputDestinationSettings>;
	}

	/** Placeholder documentation for OutputDestination */
	export interface OutputDestinationFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateOutputDestinationFormGroup() {
		return new FormGroup<OutputDestinationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MediaPackage Output Destination Settings */
	export interface MediaPackageOutputDestinationSettings {
		ChannelId?: string;
	}

	/** MediaPackage Output Destination Settings */
	export interface MediaPackageOutputDestinationSettingsFormProperties {
		ChannelId: FormControl<string | null | undefined>,
	}
	export function CreateMediaPackageOutputDestinationSettingsFormGroup() {
		return new FormGroup<MediaPackageOutputDestinationSettingsFormProperties>({
			ChannelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex */
	export interface MultiplexProgramChannelDestinationSettings {
		MultiplexId?: string;
		ProgramName?: string;
	}

	/** Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex */
	export interface MultiplexProgramChannelDestinationSettingsFormProperties {
		MultiplexId: FormControl<string | null | undefined>,
		ProgramName: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexProgramChannelDestinationSettingsFormGroup() {
		return new FormGroup<MultiplexProgramChannelDestinationSettingsFormProperties>({
			MultiplexId: new FormControl<string | null | undefined>(undefined),
			ProgramName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for OutputDestinationSettings */
	export interface OutputDestinationSettings {
		PasswordParam?: string;
		StreamName?: string;
		Url?: string;
		Username?: string;
	}

	/** Placeholder documentation for OutputDestinationSettings */
	export interface OutputDestinationSettingsFormProperties {
		PasswordParam: FormControl<string | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
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
		SourceIp?: string;
	}

	/** Placeholder documentation for ChannelEgressEndpoint */
	export interface ChannelEgressEndpointFormProperties {
		SourceIp: FormControl<string | null | undefined>,
	}
	export function CreateChannelEgressEndpointFormGroup() {
		return new FormGroup<ChannelEgressEndpointFormProperties>({
			SourceIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encoder Settings */
	export interface EncoderSettings {

		/** Required */
		AudioDescriptions: Array<AudioDescription>;
		AvailBlanking?: AvailBlanking;
		AvailConfiguration?: AvailConfiguration;
		BlackoutSlate?: BlackoutSlate;
		CaptionDescriptions?: Array<CaptionDescription>;
		FeatureActivations?: FeatureActivations;
		GlobalConfiguration?: GlobalConfiguration;
		MotionGraphicsConfiguration?: MotionGraphicsConfiguration;
		NielsenConfiguration?: NielsenConfiguration;

		/** Required */
		OutputGroups: Array<OutputGroup>;

		/** Required */
		TimecodeConfig: TimecodeConfig;

		/** Required */
		VideoDescriptions: Array<VideoDescription>;
		ThumbnailConfiguration?: ThumbnailConfiguration;
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
		AudioNormalizationSettings?: AudioNormalizationSettings;

		/** Required */
		AudioSelectorName: string;
		AudioType?: AudioType;
		AudioTypeControl?: AudioDescriptionAudioTypeControl;
		AudioWatermarkingSettings?: AudioWatermarkSettings;
		CodecSettings?: AudioCodecSettings;
		LanguageCode?: string;
		LanguageCodeControl?: AudioDescriptionAudioTypeControl;

		/** Required */
		Name: string;
		RemixSettings?: RemixSettings;
		StreamName?: string;
	}

	/** Audio Description */
	export interface AudioDescriptionFormProperties {

		/** Required */
		AudioSelectorName: FormControl<string | null | undefined>,
		AudioType: FormControl<AudioType | null | undefined>,
		AudioTypeControl: FormControl<AudioDescriptionAudioTypeControl | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
		LanguageCodeControl: FormControl<AudioDescriptionAudioTypeControl | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateAudioDescriptionFormGroup() {
		return new FormGroup<AudioDescriptionFormProperties>({
			AudioSelectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AudioType: new FormControl<AudioType | null | undefined>(undefined),
			AudioTypeControl: new FormControl<AudioDescriptionAudioTypeControl | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			LanguageCodeControl: new FormControl<AudioDescriptionAudioTypeControl | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Audio Normalization Settings */
	export interface AudioNormalizationSettings {
		Algorithm?: AudioNormalizationAlgorithm;
		AlgorithmControl?: AudioNormalizationAlgorithmControl;
		TargetLkfs?: number | null;
	}

	/** Audio Normalization Settings */
	export interface AudioNormalizationSettingsFormProperties {
		Algorithm: FormControl<AudioNormalizationAlgorithm | null | undefined>,
		AlgorithmControl: FormControl<AudioNormalizationAlgorithmControl | null | undefined>,
		TargetLkfs: FormControl<number | null | undefined>,
	}
	export function CreateAudioNormalizationSettingsFormGroup() {
		return new FormGroup<AudioNormalizationSettingsFormProperties>({
			Algorithm: new FormControl<AudioNormalizationAlgorithm | null | undefined>(undefined),
			AlgorithmControl: new FormControl<AudioNormalizationAlgorithmControl | null | undefined>(undefined),
			TargetLkfs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Audio Normalization Algorithm */
	export enum AudioNormalizationAlgorithm { ITU_1770_1 = 0, ITU_1770_2 = 1 }


	/** Audio Normalization Algorithm Control */
	export enum AudioNormalizationAlgorithmControl { CORRECT_AUDIO = 0 }


	/** Audio Type */
	export enum AudioType { CLEAN_EFFECTS = 0, HEARING_IMPAIRED = 1, UNDEFINED = 2, VISUAL_IMPAIRED_COMMENTARY = 3 }


	/** Audio Description Audio Type Control */
	export enum AudioDescriptionAudioTypeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Audio Watermark Settings */
	export interface AudioWatermarkSettings {
		NielsenWatermarksSettings?: NielsenWatermarksSettings;
	}

	/** Audio Watermark Settings */
	export interface AudioWatermarkSettingsFormProperties {
	}
	export function CreateAudioWatermarkSettingsFormGroup() {
		return new FormGroup<AudioWatermarkSettingsFormProperties>({
		});

	}


	/** Nielsen Watermarks Settings */
	export interface NielsenWatermarksSettings {
		NielsenCbetSettings?: NielsenCBET;
		NielsenDistributionType?: NielsenWatermarksDistributionTypes;
		NielsenNaesIiNwSettings?: NielsenNaesIiNw;
	}

	/** Nielsen Watermarks Settings */
	export interface NielsenWatermarksSettingsFormProperties {
		NielsenDistributionType: FormControl<NielsenWatermarksDistributionTypes | null | undefined>,
	}
	export function CreateNielsenWatermarksSettingsFormGroup() {
		return new FormGroup<NielsenWatermarksSettingsFormProperties>({
			NielsenDistributionType: new FormControl<NielsenWatermarksDistributionTypes | null | undefined>(undefined),
		});

	}


	/** Nielsen CBET */
	export interface NielsenCBET {

		/** Required */
		CbetCheckDigitString: string;

		/** Required */
		CbetStepaside: NielsenWatermarksCbetStepaside;

		/** Required */
		Csid: string;
	}

	/** Nielsen CBET */
	export interface NielsenCBETFormProperties {

		/** Required */
		CbetCheckDigitString: FormControl<string | null | undefined>,

		/** Required */
		CbetStepaside: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,

		/** Required */
		Csid: FormControl<string | null | undefined>,
	}
	export function CreateNielsenCBETFormGroup() {
		return new FormGroup<NielsenCBETFormProperties>({
			CbetCheckDigitString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CbetStepaside: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined, [Validators.required]),
			Csid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Nielsen Watermarks Cbet Stepaside */
	export enum NielsenWatermarksCbetStepaside { DISABLED = 0, ENABLED = 1 }


	/** Nielsen Watermarks Distribution Types */
	export enum NielsenWatermarksDistributionTypes { FINAL_DISTRIBUTOR = 0, PROGRAM_CONTENT = 1 }


	/** Nielsen Naes Ii Nw */
	export interface NielsenNaesIiNw {

		/** Required */
		CheckDigitString: string;

		/** Required */
		Sid: number;
		Timezone?: NielsenWatermarkTimezones;
	}

	/** Nielsen Naes Ii Nw */
	export interface NielsenNaesIiNwFormProperties {

		/** Required */
		CheckDigitString: FormControl<string | null | undefined>,

		/** Required */
		Sid: FormControl<number | null | undefined>,
		Timezone: FormControl<NielsenWatermarkTimezones | null | undefined>,
	}
	export function CreateNielsenNaesIiNwFormGroup() {
		return new FormGroup<NielsenNaesIiNwFormProperties>({
			CheckDigitString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Sid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Timezone: new FormControl<NielsenWatermarkTimezones | null | undefined>(undefined),
		});

	}


	/** Nielsen Watermark Timezones */
	export enum NielsenWatermarkTimezones { AMERICA_PUERTO_RICO = 0, US_ALASKA = 1, US_ARIZONA = 2, US_CENTRAL = 3, US_EASTERN = 4, US_HAWAII = 5, US_MOUNTAIN = 6, US_PACIFIC = 7, US_SAMOA = 8, UTC = 9 }


	/** Audio Codec Settings */
	export interface AudioCodecSettings {
		AacSettings?: AacSettings;
		Ac3Settings?: Ac3Settings;
		Eac3AtmosSettings?: Eac3AtmosSettings;
		Eac3Settings?: Eac3Settings;
		Mp2Settings?: Mp2Settings;
		PassThroughSettings?: PassThroughSettings;
		WavSettings?: WavSettings;
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
		Bitrate?: number | null;
		CodingMode?: AacCodingMode;
		InputType?: AacInputType;
		Profile?: AacProfile;
		RateControlMode?: AacRateControlMode;
		RawFormat?: AacRawFormat;
		SampleRate?: number | null;
		Spec?: AacSpec;
		VbrQuality?: AacVbrQuality;
	}

	/** Aac Settings */
	export interface AacSettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		CodingMode: FormControl<AacCodingMode | null | undefined>,
		InputType: FormControl<AacInputType | null | undefined>,
		Profile: FormControl<AacProfile | null | undefined>,
		RateControlMode: FormControl<AacRateControlMode | null | undefined>,
		RawFormat: FormControl<AacRawFormat | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
		Spec: FormControl<AacSpec | null | undefined>,
		VbrQuality: FormControl<AacVbrQuality | null | undefined>,
	}
	export function CreateAacSettingsFormGroup() {
		return new FormGroup<AacSettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodingMode: new FormControl<AacCodingMode | null | undefined>(undefined),
			InputType: new FormControl<AacInputType | null | undefined>(undefined),
			Profile: new FormControl<AacProfile | null | undefined>(undefined),
			RateControlMode: new FormControl<AacRateControlMode | null | undefined>(undefined),
			RawFormat: new FormControl<AacRawFormat | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			Spec: new FormControl<AacSpec | null | undefined>(undefined),
			VbrQuality: new FormControl<AacVbrQuality | null | undefined>(undefined),
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


	/** Ac3 Settings */
	export interface Ac3Settings {
		Bitrate?: number | null;
		BitstreamMode?: Ac3BitstreamMode;
		CodingMode?: Ac3CodingMode;
		Dialnorm?: number | null;
		DrcProfile?: Ac3DrcProfile;
		LfeFilter?: NielsenWatermarksCbetStepaside;
		MetadataControl?: AudioDescriptionAudioTypeControl;
	}

	/** Ac3 Settings */
	export interface Ac3SettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		BitstreamMode: FormControl<Ac3BitstreamMode | null | undefined>,
		CodingMode: FormControl<Ac3CodingMode | null | undefined>,
		Dialnorm: FormControl<number | null | undefined>,
		DrcProfile: FormControl<Ac3DrcProfile | null | undefined>,
		LfeFilter: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		MetadataControl: FormControl<AudioDescriptionAudioTypeControl | null | undefined>,
	}
	export function CreateAc3SettingsFormGroup() {
		return new FormGroup<Ac3SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BitstreamMode: new FormControl<Ac3BitstreamMode | null | undefined>(undefined),
			CodingMode: new FormControl<Ac3CodingMode | null | undefined>(undefined),
			Dialnorm: new FormControl<number | null | undefined>(undefined),
			DrcProfile: new FormControl<Ac3DrcProfile | null | undefined>(undefined),
			LfeFilter: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			MetadataControl: new FormControl<AudioDescriptionAudioTypeControl | null | undefined>(undefined),
		});

	}


	/** Ac3 Bitstream Mode */
	export enum Ac3BitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, DIALOGUE = 2, EMERGENCY = 3, HEARING_IMPAIRED = 4, MUSIC_AND_EFFECTS = 5, VISUALLY_IMPAIRED = 6, VOICE_OVER = 7 }


	/** Ac3 Coding Mode */
	export enum Ac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_1_1 = 1, CODING_MODE_2_0 = 2, CODING_MODE_3_2_LFE = 3 }


	/** Ac3 Drc Profile */
	export enum Ac3DrcProfile { FILM_STANDARD = 0, NONE = 1 }


	/** Eac3 Atmos Settings */
	export interface Eac3AtmosSettings {
		Bitrate?: number | null;
		CodingMode?: Eac3AtmosCodingMode;
		Dialnorm?: number | null;
		DrcLine?: Eac3AtmosDrcLine;
		DrcRf?: Eac3AtmosDrcLine;
		HeightTrim?: number | null;
		SurroundTrim?: number | null;
	}

	/** Eac3 Atmos Settings */
	export interface Eac3AtmosSettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		CodingMode: FormControl<Eac3AtmosCodingMode | null | undefined>,
		Dialnorm: FormControl<number | null | undefined>,
		DrcLine: FormControl<Eac3AtmosDrcLine | null | undefined>,
		DrcRf: FormControl<Eac3AtmosDrcLine | null | undefined>,
		HeightTrim: FormControl<number | null | undefined>,
		SurroundTrim: FormControl<number | null | undefined>,
	}
	export function CreateEac3AtmosSettingsFormGroup() {
		return new FormGroup<Eac3AtmosSettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodingMode: new FormControl<Eac3AtmosCodingMode | null | undefined>(undefined),
			Dialnorm: new FormControl<number | null | undefined>(undefined),
			DrcLine: new FormControl<Eac3AtmosDrcLine | null | undefined>(undefined),
			DrcRf: new FormControl<Eac3AtmosDrcLine | null | undefined>(undefined),
			HeightTrim: new FormControl<number | null | undefined>(undefined),
			SurroundTrim: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Eac3 Atmos Coding Mode */
	export enum Eac3AtmosCodingMode { CODING_MODE_5_1_4 = 0, CODING_MODE_7_1_4 = 1, CODING_MODE_9_1_6 = 2 }


	/** Eac3 Atmos Drc Line */
	export enum Eac3AtmosDrcLine { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }


	/** Eac3 Settings */
	export interface Eac3Settings {
		AttenuationControl?: Eac3AttenuationControl;
		Bitrate?: number | null;
		BitstreamMode?: Eac3BitstreamMode;
		CodingMode?: Eac3CodingMode;
		DcFilter?: NielsenWatermarksCbetStepaside;
		Dialnorm?: number | null;
		DrcLine?: Eac3AtmosDrcLine;
		DrcRf?: Eac3AtmosDrcLine;
		LfeControl?: Eac3LfeControl;
		LfeFilter?: NielsenWatermarksCbetStepaside;
		LoRoCenterMixLevel?: number | null;
		LoRoSurroundMixLevel?: number | null;
		LtRtCenterMixLevel?: number | null;
		LtRtSurroundMixLevel?: number | null;
		MetadataControl?: AudioDescriptionAudioTypeControl;
		PassthroughControl?: Eac3PassthroughControl;
		PhaseControl?: Eac3PhaseControl;
		StereoDownmix?: Eac3StereoDownmix;
		SurroundExMode?: Eac3SurroundExMode;
		SurroundMode?: Eac3SurroundExMode;
	}

	/** Eac3 Settings */
	export interface Eac3SettingsFormProperties {
		AttenuationControl: FormControl<Eac3AttenuationControl | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		BitstreamMode: FormControl<Eac3BitstreamMode | null | undefined>,
		CodingMode: FormControl<Eac3CodingMode | null | undefined>,
		DcFilter: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		Dialnorm: FormControl<number | null | undefined>,
		DrcLine: FormControl<Eac3AtmosDrcLine | null | undefined>,
		DrcRf: FormControl<Eac3AtmosDrcLine | null | undefined>,
		LfeControl: FormControl<Eac3LfeControl | null | undefined>,
		LfeFilter: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		LoRoCenterMixLevel: FormControl<number | null | undefined>,
		LoRoSurroundMixLevel: FormControl<number | null | undefined>,
		LtRtCenterMixLevel: FormControl<number | null | undefined>,
		LtRtSurroundMixLevel: FormControl<number | null | undefined>,
		MetadataControl: FormControl<AudioDescriptionAudioTypeControl | null | undefined>,
		PassthroughControl: FormControl<Eac3PassthroughControl | null | undefined>,
		PhaseControl: FormControl<Eac3PhaseControl | null | undefined>,
		StereoDownmix: FormControl<Eac3StereoDownmix | null | undefined>,
		SurroundExMode: FormControl<Eac3SurroundExMode | null | undefined>,
		SurroundMode: FormControl<Eac3SurroundExMode | null | undefined>,
	}
	export function CreateEac3SettingsFormGroup() {
		return new FormGroup<Eac3SettingsFormProperties>({
			AttenuationControl: new FormControl<Eac3AttenuationControl | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BitstreamMode: new FormControl<Eac3BitstreamMode | null | undefined>(undefined),
			CodingMode: new FormControl<Eac3CodingMode | null | undefined>(undefined),
			DcFilter: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			Dialnorm: new FormControl<number | null | undefined>(undefined),
			DrcLine: new FormControl<Eac3AtmosDrcLine | null | undefined>(undefined),
			DrcRf: new FormControl<Eac3AtmosDrcLine | null | undefined>(undefined),
			LfeControl: new FormControl<Eac3LfeControl | null | undefined>(undefined),
			LfeFilter: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			LoRoCenterMixLevel: new FormControl<number | null | undefined>(undefined),
			LoRoSurroundMixLevel: new FormControl<number | null | undefined>(undefined),
			LtRtCenterMixLevel: new FormControl<number | null | undefined>(undefined),
			LtRtSurroundMixLevel: new FormControl<number | null | undefined>(undefined),
			MetadataControl: new FormControl<AudioDescriptionAudioTypeControl | null | undefined>(undefined),
			PassthroughControl: new FormControl<Eac3PassthroughControl | null | undefined>(undefined),
			PhaseControl: new FormControl<Eac3PhaseControl | null | undefined>(undefined),
			StereoDownmix: new FormControl<Eac3StereoDownmix | null | undefined>(undefined),
			SurroundExMode: new FormControl<Eac3SurroundExMode | null | undefined>(undefined),
			SurroundMode: new FormControl<Eac3SurroundExMode | null | undefined>(undefined),
		});

	}


	/** Eac3 Attenuation Control */
	export enum Eac3AttenuationControl { ATTENUATE_3_DB = 0, NONE = 1 }


	/** Eac3 Bitstream Mode */
	export enum Eac3BitstreamMode { COMMENTARY = 0, COMPLETE_MAIN = 1, EMERGENCY = 2, HEARING_IMPAIRED = 3, VISUALLY_IMPAIRED = 4 }


	/** Eac3 Coding Mode */
	export enum Eac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_3_2 = 2 }


	/** Eac3 Lfe Control */
	export enum Eac3LfeControl { LFE = 0, NO_LFE = 1 }


	/** Eac3 Passthrough Control */
	export enum Eac3PassthroughControl { NO_PASSTHROUGH = 0, WHEN_POSSIBLE = 1 }


	/** Eac3 Phase Control */
	export enum Eac3PhaseControl { NO_SHIFT = 0, SHIFT_90_DEGREES = 1 }


	/** Eac3 Stereo Downmix */
	export enum Eac3StereoDownmix { DPL2 = 0, LO_RO = 1, LT_RT = 2, NOT_INDICATED = 3 }


	/** Eac3 Surround Ex Mode */
	export enum Eac3SurroundExMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }


	/** Mp2 Settings */
	export interface Mp2Settings {
		Bitrate?: number | null;
		CodingMode?: Mp2CodingMode;
		SampleRate?: number | null;
	}

	/** Mp2 Settings */
	export interface Mp2SettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		CodingMode: FormControl<Mp2CodingMode | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
	}
	export function CreateMp2SettingsFormGroup() {
		return new FormGroup<Mp2SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodingMode: new FormControl<Mp2CodingMode | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Mp2 Coding Mode */
	export enum Mp2CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1 }


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


	/** Wav Settings */
	export interface WavSettings {
		BitDepth?: number | null;
		CodingMode?: WavCodingMode;
		SampleRate?: number | null;
	}

	/** Wav Settings */
	export interface WavSettingsFormProperties {
		BitDepth: FormControl<number | null | undefined>,
		CodingMode: FormControl<WavCodingMode | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
	}
	export function CreateWavSettingsFormGroup() {
		return new FormGroup<WavSettingsFormProperties>({
			BitDepth: new FormControl<number | null | undefined>(undefined),
			CodingMode: new FormControl<WavCodingMode | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Wav Coding Mode */
	export enum WavCodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_4_0 = 2, CODING_MODE_8_0 = 3 }


	/** Remix Settings */
	export interface RemixSettings {

		/** Required */
		ChannelMappings: Array<AudioChannelMapping>;
		ChannelsIn?: number | null;
		ChannelsOut?: number | null;
	}

	/** Remix Settings */
	export interface RemixSettingsFormProperties {
		ChannelsIn: FormControl<number | null | undefined>,
		ChannelsOut: FormControl<number | null | undefined>,
	}
	export function CreateRemixSettingsFormGroup() {
		return new FormGroup<RemixSettingsFormProperties>({
			ChannelsIn: new FormControl<number | null | undefined>(undefined),
			ChannelsOut: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Audio Channel Mapping */
	export interface AudioChannelMapping {

		/** Required */
		InputChannelLevels: Array<InputChannelLevel>;

		/** Required */
		OutputChannel: number;
	}

	/** Audio Channel Mapping */
	export interface AudioChannelMappingFormProperties {

		/** Required */
		OutputChannel: FormControl<number | null | undefined>,
	}
	export function CreateAudioChannelMappingFormGroup() {
		return new FormGroup<AudioChannelMappingFormProperties>({
			OutputChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input Channel Level */
	export interface InputChannelLevel {

		/** Required */
		Gain: number;

		/** Required */
		InputChannel: number;
	}

	/** Input Channel Level */
	export interface InputChannelLevelFormProperties {

		/** Required */
		Gain: FormControl<number | null | undefined>,

		/** Required */
		InputChannel: FormControl<number | null | undefined>,
	}
	export function CreateInputChannelLevelFormGroup() {
		return new FormGroup<InputChannelLevelFormProperties>({
			Gain: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			InputChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Avail Blanking */
	export interface AvailBlanking {
		AvailBlankingImage?: InputLocation;
		State?: NielsenWatermarksCbetStepaside;
	}

	/** Avail Blanking */
	export interface AvailBlankingFormProperties {
		State: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
	}
	export function CreateAvailBlankingFormGroup() {
		return new FormGroup<AvailBlankingFormProperties>({
			State: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
		});

	}


	/** Avail Configuration */
	export interface AvailConfiguration {
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
		Esam?: Esam;
		Scte35SpliceInsert?: Scte35SpliceInsert;
		Scte35TimeSignalApos?: Scte35TimeSignalApos;
	}

	/** Avail Settings */
	export interface AvailSettingsFormProperties {
	}
	export function CreateAvailSettingsFormGroup() {
		return new FormGroup<AvailSettingsFormProperties>({
		});

	}


	/** Esam */
	export interface Esam {

		/** Required */
		AcquisitionPointId: string;
		AdAvailOffset?: number | null;
		PasswordParam?: string;

		/** Required */
		PoisEndpoint: string;
		Username?: string;
		ZoneIdentity?: string;
	}

	/** Esam */
	export interface EsamFormProperties {

		/** Required */
		AcquisitionPointId: FormControl<string | null | undefined>,
		AdAvailOffset: FormControl<number | null | undefined>,
		PasswordParam: FormControl<string | null | undefined>,

		/** Required */
		PoisEndpoint: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		ZoneIdentity: FormControl<string | null | undefined>,
	}
	export function CreateEsamFormGroup() {
		return new FormGroup<EsamFormProperties>({
			AcquisitionPointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AdAvailOffset: new FormControl<number | null | undefined>(undefined),
			PasswordParam: new FormControl<string | null | undefined>(undefined),
			PoisEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined),
			ZoneIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements. */
	export interface Scte35SpliceInsert {
		AdAvailOffset?: number | null;
		NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior;
		WebDeliveryAllowedFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior;
	}

	/** Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements. */
	export interface Scte35SpliceInsertFormProperties {
		AdAvailOffset: FormControl<number | null | undefined>,
		NoRegionalBlackoutFlag: FormControl<Scte35SpliceInsertNoRegionalBlackoutBehavior | null | undefined>,
		WebDeliveryAllowedFlag: FormControl<Scte35SpliceInsertNoRegionalBlackoutBehavior | null | undefined>,
	}
	export function CreateScte35SpliceInsertFormGroup() {
		return new FormGroup<Scte35SpliceInsertFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined),
			NoRegionalBlackoutFlag: new FormControl<Scte35SpliceInsertNoRegionalBlackoutBehavior | null | undefined>(undefined),
			WebDeliveryAllowedFlag: new FormControl<Scte35SpliceInsertNoRegionalBlackoutBehavior | null | undefined>(undefined),
		});

	}


	/** Scte35 Splice Insert No Regional Blackout Behavior */
	export enum Scte35SpliceInsertNoRegionalBlackoutBehavior { FOLLOW = 0, IGNORE = 1 }


	/** Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks. */
	export interface Scte35TimeSignalApos {
		AdAvailOffset?: number | null;
		NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior;
		WebDeliveryAllowedFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior;
	}

	/** Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks. */
	export interface Scte35TimeSignalAposFormProperties {
		AdAvailOffset: FormControl<number | null | undefined>,
		NoRegionalBlackoutFlag: FormControl<Scte35SpliceInsertNoRegionalBlackoutBehavior | null | undefined>,
		WebDeliveryAllowedFlag: FormControl<Scte35SpliceInsertNoRegionalBlackoutBehavior | null | undefined>,
	}
	export function CreateScte35TimeSignalAposFormGroup() {
		return new FormGroup<Scte35TimeSignalAposFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined),
			NoRegionalBlackoutFlag: new FormControl<Scte35SpliceInsertNoRegionalBlackoutBehavior | null | undefined>(undefined),
			WebDeliveryAllowedFlag: new FormControl<Scte35SpliceInsertNoRegionalBlackoutBehavior | null | undefined>(undefined),
		});

	}


	/** Blackout Slate */
	export interface BlackoutSlate {
		BlackoutSlateImage?: InputLocation;
		NetworkEndBlackout?: NielsenWatermarksCbetStepaside;
		NetworkEndBlackoutImage?: InputLocation;
		NetworkId?: string;
		State?: NielsenWatermarksCbetStepaside;
	}

	/** Blackout Slate */
	export interface BlackoutSlateFormProperties {
		NetworkEndBlackout: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		NetworkId: FormControl<string | null | undefined>,
		State: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
	}
	export function CreateBlackoutSlateFormGroup() {
		return new FormGroup<BlackoutSlateFormProperties>({
			NetworkEndBlackout: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			NetworkId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
		});

	}


	/** Caption Description */
	export interface CaptionDescription {
		Accessibility?: AccessibilityType;

		/** Required */
		CaptionSelectorName: string;
		DestinationSettings?: CaptionDestinationSettings;
		LanguageCode?: string;
		LanguageDescription?: string;

		/** Required */
		Name: string;
	}

	/** Caption Description */
	export interface CaptionDescriptionFormProperties {
		Accessibility: FormControl<AccessibilityType | null | undefined>,

		/** Required */
		CaptionSelectorName: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
		LanguageDescription: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCaptionDescriptionFormGroup() {
		return new FormGroup<CaptionDescriptionFormProperties>({
			Accessibility: new FormControl<AccessibilityType | null | undefined>(undefined),
			CaptionSelectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			LanguageDescription: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Accessibility Type */
	export enum AccessibilityType { DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES = 0, IMPLEMENTS_ACCESSIBILITY_FEATURES = 1 }


	/** Caption Destination Settings */
	export interface CaptionDestinationSettings {
		AribDestinationSettings?: AribDestinationSettings;
		BurnInDestinationSettings?: BurnInDestinationSettings;
		DvbSubDestinationSettings?: DvbSubDestinationSettings;
		EbuTtDDestinationSettings?: EbuTtDDestinationSettings;
		EmbeddedDestinationSettings?: EmbeddedDestinationSettings;
		EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;
		RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;
		Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;
		Scte27DestinationSettings?: Scte27DestinationSettings;
		SmpteTtDestinationSettings?: SmpteTtDestinationSettings;
		TeletextDestinationSettings?: TeletextDestinationSettings;
		TtmlDestinationSettings?: TtmlDestinationSettings;
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
		Alignment?: BurnInAlignment;
		BackgroundColor?: BurnInBackgroundColor;
		BackgroundOpacity?: number | null;
		Font?: InputLocation;
		FontColor?: BurnInFontColor;
		FontOpacity?: number | null;
		FontResolution?: number | null;
		FontSize?: string;
		OutlineColor?: BurnInFontColor;
		OutlineSize?: number | null;
		ShadowColor?: BurnInBackgroundColor;
		ShadowOpacity?: number | null;
		ShadowXOffset?: number | null;
		ShadowYOffset?: number | null;
		TeletextGridControl?: BurnInTeletextGridControl;
		XPosition?: number | null;
		YPosition?: number | null;
	}

	/** Burn In Destination Settings */
	export interface BurnInDestinationSettingsFormProperties {
		Alignment: FormControl<BurnInAlignment | null | undefined>,
		BackgroundColor: FormControl<BurnInBackgroundColor | null | undefined>,
		BackgroundOpacity: FormControl<number | null | undefined>,
		FontColor: FormControl<BurnInFontColor | null | undefined>,
		FontOpacity: FormControl<number | null | undefined>,
		FontResolution: FormControl<number | null | undefined>,
		FontSize: FormControl<string | null | undefined>,
		OutlineColor: FormControl<BurnInFontColor | null | undefined>,
		OutlineSize: FormControl<number | null | undefined>,
		ShadowColor: FormControl<BurnInBackgroundColor | null | undefined>,
		ShadowOpacity: FormControl<number | null | undefined>,
		ShadowXOffset: FormControl<number | null | undefined>,
		ShadowYOffset: FormControl<number | null | undefined>,
		TeletextGridControl: FormControl<BurnInTeletextGridControl | null | undefined>,
		XPosition: FormControl<number | null | undefined>,
		YPosition: FormControl<number | null | undefined>,
	}
	export function CreateBurnInDestinationSettingsFormGroup() {
		return new FormGroup<BurnInDestinationSettingsFormProperties>({
			Alignment: new FormControl<BurnInAlignment | null | undefined>(undefined),
			BackgroundColor: new FormControl<BurnInBackgroundColor | null | undefined>(undefined),
			BackgroundOpacity: new FormControl<number | null | undefined>(undefined),
			FontColor: new FormControl<BurnInFontColor | null | undefined>(undefined),
			FontOpacity: new FormControl<number | null | undefined>(undefined),
			FontResolution: new FormControl<number | null | undefined>(undefined),
			FontSize: new FormControl<string | null | undefined>(undefined),
			OutlineColor: new FormControl<BurnInFontColor | null | undefined>(undefined),
			OutlineSize: new FormControl<number | null | undefined>(undefined),
			ShadowColor: new FormControl<BurnInBackgroundColor | null | undefined>(undefined),
			ShadowOpacity: new FormControl<number | null | undefined>(undefined),
			ShadowXOffset: new FormControl<number | null | undefined>(undefined),
			ShadowYOffset: new FormControl<number | null | undefined>(undefined),
			TeletextGridControl: new FormControl<BurnInTeletextGridControl | null | undefined>(undefined),
			XPosition: new FormControl<number | null | undefined>(undefined),
			YPosition: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Burn In Alignment */
	export enum BurnInAlignment { CENTERED = 0, LEFT = 1, SMART = 2 }


	/** Burn In Background Color */
	export enum BurnInBackgroundColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/** Burn In Font Color */
	export enum BurnInFontColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/** Burn In Teletext Grid Control */
	export enum BurnInTeletextGridControl { FIXED = 0, SCALED = 1 }


	/** Dvb Sub Destination Settings */
	export interface DvbSubDestinationSettings {
		Alignment?: BurnInAlignment;
		BackgroundColor?: BurnInBackgroundColor;
		BackgroundOpacity?: number | null;
		Font?: InputLocation;
		FontColor?: BurnInFontColor;
		FontOpacity?: number | null;
		FontResolution?: number | null;
		FontSize?: string;
		OutlineColor?: BurnInFontColor;
		OutlineSize?: number | null;
		ShadowColor?: BurnInBackgroundColor;
		ShadowOpacity?: number | null;
		ShadowXOffset?: number | null;
		ShadowYOffset?: number | null;
		TeletextGridControl?: BurnInTeletextGridControl;
		XPosition?: number | null;
		YPosition?: number | null;
	}

	/** Dvb Sub Destination Settings */
	export interface DvbSubDestinationSettingsFormProperties {
		Alignment: FormControl<BurnInAlignment | null | undefined>,
		BackgroundColor: FormControl<BurnInBackgroundColor | null | undefined>,
		BackgroundOpacity: FormControl<number | null | undefined>,
		FontColor: FormControl<BurnInFontColor | null | undefined>,
		FontOpacity: FormControl<number | null | undefined>,
		FontResolution: FormControl<number | null | undefined>,
		FontSize: FormControl<string | null | undefined>,
		OutlineColor: FormControl<BurnInFontColor | null | undefined>,
		OutlineSize: FormControl<number | null | undefined>,
		ShadowColor: FormControl<BurnInBackgroundColor | null | undefined>,
		ShadowOpacity: FormControl<number | null | undefined>,
		ShadowXOffset: FormControl<number | null | undefined>,
		ShadowYOffset: FormControl<number | null | undefined>,
		TeletextGridControl: FormControl<BurnInTeletextGridControl | null | undefined>,
		XPosition: FormControl<number | null | undefined>,
		YPosition: FormControl<number | null | undefined>,
	}
	export function CreateDvbSubDestinationSettingsFormGroup() {
		return new FormGroup<DvbSubDestinationSettingsFormProperties>({
			Alignment: new FormControl<BurnInAlignment | null | undefined>(undefined),
			BackgroundColor: new FormControl<BurnInBackgroundColor | null | undefined>(undefined),
			BackgroundOpacity: new FormControl<number | null | undefined>(undefined),
			FontColor: new FormControl<BurnInFontColor | null | undefined>(undefined),
			FontOpacity: new FormControl<number | null | undefined>(undefined),
			FontResolution: new FormControl<number | null | undefined>(undefined),
			FontSize: new FormControl<string | null | undefined>(undefined),
			OutlineColor: new FormControl<BurnInFontColor | null | undefined>(undefined),
			OutlineSize: new FormControl<number | null | undefined>(undefined),
			ShadowColor: new FormControl<BurnInBackgroundColor | null | undefined>(undefined),
			ShadowOpacity: new FormControl<number | null | undefined>(undefined),
			ShadowXOffset: new FormControl<number | null | undefined>(undefined),
			ShadowYOffset: new FormControl<number | null | undefined>(undefined),
			TeletextGridControl: new FormControl<BurnInTeletextGridControl | null | undefined>(undefined),
			XPosition: new FormControl<number | null | undefined>(undefined),
			YPosition: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Ebu Tt DDestination Settings */
	export interface EbuTtDDestinationSettings {
		CopyrightHolder?: string;
		FillLineGap?: NielsenWatermarksCbetStepaside;
		FontFamily?: string;
		StyleControl?: EbuTtDDestinationStyleControl;
	}

	/** Ebu Tt DDestination Settings */
	export interface EbuTtDDestinationSettingsFormProperties {
		CopyrightHolder: FormControl<string | null | undefined>,
		FillLineGap: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		FontFamily: FormControl<string | null | undefined>,
		StyleControl: FormControl<EbuTtDDestinationStyleControl | null | undefined>,
	}
	export function CreateEbuTtDDestinationSettingsFormGroup() {
		return new FormGroup<EbuTtDDestinationSettingsFormProperties>({
			CopyrightHolder: new FormControl<string | null | undefined>(undefined),
			FillLineGap: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			FontFamily: new FormControl<string | null | undefined>(undefined),
			StyleControl: new FormControl<EbuTtDDestinationStyleControl | null | undefined>(undefined),
		});

	}


	/** Ebu Tt DDestination Style Control */
	export enum EbuTtDDestinationStyleControl { EXCLUDE = 0, INCLUDE = 1 }


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
		StyleControl?: TtmlDestinationStyleControl;
	}

	/** Ttml Destination Settings */
	export interface TtmlDestinationSettingsFormProperties {
		StyleControl: FormControl<TtmlDestinationStyleControl | null | undefined>,
	}
	export function CreateTtmlDestinationSettingsFormGroup() {
		return new FormGroup<TtmlDestinationSettingsFormProperties>({
			StyleControl: new FormControl<TtmlDestinationStyleControl | null | undefined>(undefined),
		});

	}


	/** Ttml Destination Style Control */
	export enum TtmlDestinationStyleControl { PASSTHROUGH = 0, USE_CONFIGURED = 1 }


	/** Webvtt Destination Settings */
	export interface WebvttDestinationSettings {
		StyleControl?: WebvttDestinationStyleControl;
	}

	/** Webvtt Destination Settings */
	export interface WebvttDestinationSettingsFormProperties {
		StyleControl: FormControl<WebvttDestinationStyleControl | null | undefined>,
	}
	export function CreateWebvttDestinationSettingsFormGroup() {
		return new FormGroup<WebvttDestinationSettingsFormProperties>({
			StyleControl: new FormControl<WebvttDestinationStyleControl | null | undefined>(undefined),
		});

	}


	/** Webvtt Destination Style Control */
	export enum WebvttDestinationStyleControl { NO_STYLE_DATA = 0, PASSTHROUGH = 1 }


	/** Feature Activations */
	export interface FeatureActivations {
		InputPrepareScheduleActions?: NielsenWatermarksCbetStepaside;
	}

	/** Feature Activations */
	export interface FeatureActivationsFormProperties {
		InputPrepareScheduleActions: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
	}
	export function CreateFeatureActivationsFormGroup() {
		return new FormGroup<FeatureActivationsFormProperties>({
			InputPrepareScheduleActions: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
		});

	}


	/** Global Configuration */
	export interface GlobalConfiguration {
		InitialAudioGain?: number | null;
		InputEndAction?: GlobalConfigurationInputEndAction;
		InputLossBehavior?: InputLossBehavior;
		OutputLockingMode?: GlobalConfigurationOutputLockingMode;
		OutputTimingSource?: GlobalConfigurationOutputTimingSource;
		SupportLowFramerateInputs?: NielsenWatermarksCbetStepaside;
	}

	/** Global Configuration */
	export interface GlobalConfigurationFormProperties {
		InitialAudioGain: FormControl<number | null | undefined>,
		InputEndAction: FormControl<GlobalConfigurationInputEndAction | null | undefined>,
		OutputLockingMode: FormControl<GlobalConfigurationOutputLockingMode | null | undefined>,
		OutputTimingSource: FormControl<GlobalConfigurationOutputTimingSource | null | undefined>,
		SupportLowFramerateInputs: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
	}
	export function CreateGlobalConfigurationFormGroup() {
		return new FormGroup<GlobalConfigurationFormProperties>({
			InitialAudioGain: new FormControl<number | null | undefined>(undefined),
			InputEndAction: new FormControl<GlobalConfigurationInputEndAction | null | undefined>(undefined),
			OutputLockingMode: new FormControl<GlobalConfigurationOutputLockingMode | null | undefined>(undefined),
			OutputTimingSource: new FormControl<GlobalConfigurationOutputTimingSource | null | undefined>(undefined),
			SupportLowFramerateInputs: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
		});

	}


	/** Global Configuration Input End Action */
	export enum GlobalConfigurationInputEndAction { NONE = 0, SWITCH_AND_LOOP_INPUTS = 1 }


	/** Input Loss Behavior */
	export interface InputLossBehavior {
		BlackFrameMsec?: number | null;
		InputLossImageColor?: string;
		InputLossImageSlate?: InputLocation;
		InputLossImageType?: InputLossImageType;
		RepeatFrameMsec?: number | null;
	}

	/** Input Loss Behavior */
	export interface InputLossBehaviorFormProperties {
		BlackFrameMsec: FormControl<number | null | undefined>,
		InputLossImageColor: FormControl<string | null | undefined>,
		InputLossImageType: FormControl<InputLossImageType | null | undefined>,
		RepeatFrameMsec: FormControl<number | null | undefined>,
	}
	export function CreateInputLossBehaviorFormGroup() {
		return new FormGroup<InputLossBehaviorFormProperties>({
			BlackFrameMsec: new FormControl<number | null | undefined>(undefined),
			InputLossImageColor: new FormControl<string | null | undefined>(undefined),
			InputLossImageType: new FormControl<InputLossImageType | null | undefined>(undefined),
			RepeatFrameMsec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Input Loss Image Type */
	export enum InputLossImageType { COLOR = 0, SLATE = 1 }


	/** Global Configuration Output Locking Mode */
	export enum GlobalConfigurationOutputLockingMode { EPOCH_LOCKING = 0, PIPELINE_LOCKING = 1 }


	/** Global Configuration Output Timing Source */
	export enum GlobalConfigurationOutputTimingSource { INPUT_CLOCK = 0, SYSTEM_CLOCK = 1 }


	/** Motion Graphics Configuration */
	export interface MotionGraphicsConfiguration {
		MotionGraphicsInsertion?: NielsenWatermarksCbetStepaside;

		/** Required */
		MotionGraphicsSettings: MotionGraphicsSettings;
	}

	/** Motion Graphics Configuration */
	export interface MotionGraphicsConfigurationFormProperties {
		MotionGraphicsInsertion: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
	}
	export function CreateMotionGraphicsConfigurationFormGroup() {
		return new FormGroup<MotionGraphicsConfigurationFormProperties>({
			MotionGraphicsInsertion: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
		});

	}


	/** Motion Graphics Settings */
	export interface MotionGraphicsSettings {
		HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
	}

	/** Motion Graphics Settings */
	export interface MotionGraphicsSettingsFormProperties {
	}
	export function CreateMotionGraphicsSettingsFormGroup() {
		return new FormGroup<MotionGraphicsSettingsFormProperties>({
		});

	}


	/** Html Motion Graphics Settings */
	export interface HtmlMotionGraphicsSettings {
	}

	/** Html Motion Graphics Settings */
	export interface HtmlMotionGraphicsSettingsFormProperties {
	}
	export function CreateHtmlMotionGraphicsSettingsFormGroup() {
		return new FormGroup<HtmlMotionGraphicsSettingsFormProperties>({
		});

	}


	/** Nielsen Configuration */
	export interface NielsenConfiguration {
		DistributorId?: string;
		NielsenPcmToId3Tagging?: NielsenWatermarksCbetStepaside;
	}

	/** Nielsen Configuration */
	export interface NielsenConfigurationFormProperties {
		DistributorId: FormControl<string | null | undefined>,
		NielsenPcmToId3Tagging: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
	}
	export function CreateNielsenConfigurationFormGroup() {
		return new FormGroup<NielsenConfigurationFormProperties>({
			DistributorId: new FormControl<string | null | undefined>(undefined),
			NielsenPcmToId3Tagging: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
		});

	}


	/** Output groups for this Live Event. Output groups contain information about where streams should be distributed. */
	export interface OutputGroup {
		Name?: string;

		/** Required */
		OutputGroupSettings: OutputGroupSettings;

		/** Required */
		Outputs: Array<Output>;
	}

	/** Output groups for this Live Event. Output groups contain information about where streams should be distributed. */
	export interface OutputGroupFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOutputGroupFormGroup() {
		return new FormGroup<OutputGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output Group Settings */
	export interface OutputGroupSettings {
		ArchiveGroupSettings?: ArchiveGroupSettings;
		FrameCaptureGroupSettings?: FrameCaptureGroupSettings;
		HlsGroupSettings?: HlsGroupSettings;
		MediaPackageGroupSettings?: MediaPackageGroupSettings;
		MsSmoothGroupSettings?: MsSmoothGroupSettings;
		MultiplexGroupSettings?: MultiplexGroupSettings;
		RtmpGroupSettings?: RtmpGroupSettings;
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
		ArchiveCdnSettings?: ArchiveCdnSettings;

		/** Required */
		Destination: OutputLocationRef;
		RolloverInterval?: number | null;
	}

	/** Archive Group Settings */
	export interface ArchiveGroupSettingsFormProperties {
		RolloverInterval: FormControl<number | null | undefined>,
	}
	export function CreateArchiveGroupSettingsFormGroup() {
		return new FormGroup<ArchiveGroupSettingsFormProperties>({
			RolloverInterval: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Archive Cdn Settings */
	export interface ArchiveCdnSettings {
		ArchiveS3Settings?: ArchiveS3Settings;
	}

	/** Archive Cdn Settings */
	export interface ArchiveCdnSettingsFormProperties {
	}
	export function CreateArchiveCdnSettingsFormGroup() {
		return new FormGroup<ArchiveCdnSettingsFormProperties>({
		});

	}


	/** Archive S3 Settings */
	export interface ArchiveS3Settings {
		CannedAcl?: S3CannedAcl;
	}

	/** Archive S3 Settings */
	export interface ArchiveS3SettingsFormProperties {
		CannedAcl: FormControl<S3CannedAcl | null | undefined>,
	}
	export function CreateArchiveS3SettingsFormGroup() {
		return new FormGroup<ArchiveS3SettingsFormProperties>({
			CannedAcl: new FormControl<S3CannedAcl | null | undefined>(undefined),
		});

	}


	/** S3 Canned Acl */
	export enum S3CannedAcl { AUTHENTICATED_READ = 0, BUCKET_OWNER_FULL_CONTROL = 1, BUCKET_OWNER_READ = 2, PUBLIC_READ = 3 }


	/** Reference to an OutputDestination ID defined in the channel */
	export interface OutputLocationRef {
		DestinationRefId?: string;
	}

	/** Reference to an OutputDestination ID defined in the channel */
	export interface OutputLocationRefFormProperties {
		DestinationRefId: FormControl<string | null | undefined>,
	}
	export function CreateOutputLocationRefFormGroup() {
		return new FormGroup<OutputLocationRefFormProperties>({
			DestinationRefId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Frame Capture Group Settings */
	export interface FrameCaptureGroupSettings {

		/** Required */
		Destination: OutputLocationRef;
		FrameCaptureCdnSettings?: FrameCaptureCdnSettings;
	}

	/** Frame Capture Group Settings */
	export interface FrameCaptureGroupSettingsFormProperties {
	}
	export function CreateFrameCaptureGroupSettingsFormGroup() {
		return new FormGroup<FrameCaptureGroupSettingsFormProperties>({
		});

	}


	/** Frame Capture Cdn Settings */
	export interface FrameCaptureCdnSettings {
		FrameCaptureS3Settings?: FrameCaptureS3Settings;
	}

	/** Frame Capture Cdn Settings */
	export interface FrameCaptureCdnSettingsFormProperties {
	}
	export function CreateFrameCaptureCdnSettingsFormGroup() {
		return new FormGroup<FrameCaptureCdnSettingsFormProperties>({
		});

	}


	/** Frame Capture S3 Settings */
	export interface FrameCaptureS3Settings {
		CannedAcl?: S3CannedAcl;
	}

	/** Frame Capture S3 Settings */
	export interface FrameCaptureS3SettingsFormProperties {
		CannedAcl: FormControl<S3CannedAcl | null | undefined>,
	}
	export function CreateFrameCaptureS3SettingsFormGroup() {
		return new FormGroup<FrameCaptureS3SettingsFormProperties>({
			CannedAcl: new FormControl<S3CannedAcl | null | undefined>(undefined),
		});

	}


	/** Hls Group Settings */
	export interface HlsGroupSettings {
		AdMarkers?: Array<HlsAdMarkers>;
		BaseUrlContent?: string;
		BaseUrlContent1?: string;
		BaseUrlManifest?: string;
		BaseUrlManifest1?: string;
		CaptionLanguageMappings?: Array<CaptionLanguageMapping>;
		CaptionLanguageSetting?: HlsCaptionLanguageSetting;
		ClientCache?: NielsenWatermarksCbetStepaside;
		CodecSpecification?: HlsCodecSpecification;
		ConstantIv?: string;

		/** Required */
		Destination: OutputLocationRef;
		DirectoryStructure?: HlsDirectoryStructure;
		DiscontinuityTags?: HlsDiscontinuityTags;
		EncryptionType?: HlsEncryptionType;
		HlsCdnSettings?: HlsCdnSettings;
		HlsId3SegmentTagging?: NielsenWatermarksCbetStepaside;
		IFrameOnlyPlaylists?: IFrameOnlyPlaylistType;
		IncompleteSegmentBehavior?: HlsIncompleteSegmentBehavior;
		IndexNSegments?: number | null;
		InputLossAction?: InputLossActionForHlsOut;
		IvInManifest?: EbuTtDDestinationStyleControl;
		IvSource?: HlsIvSource;
		KeepSegments?: number | null;
		KeyFormat?: string;
		KeyFormatVersions?: string;
		KeyProviderSettings?: KeyProviderSettings;
		ManifestCompression?: HlsManifestCompression;
		ManifestDurationFormat?: HlsManifestDurationFormat;
		MinSegmentLength?: number | null;
		Mode?: HlsMode;
		OutputSelection?: HlsOutputSelection;
		ProgramDateTime?: EbuTtDDestinationStyleControl;
		ProgramDateTimeClock?: HlsProgramDateTimeClock;
		ProgramDateTimePeriod?: number | null;
		RedundantManifest?: NielsenWatermarksCbetStepaside;
		SegmentLength?: number | null;
		SegmentationMode?: HlsSegmentationMode;
		SegmentsPerSubdirectory?: number | null;
		StreamInfResolution?: EbuTtDDestinationStyleControl;
		TimedMetadataId3Frame?: HlsTimedMetadataId3Frame;
		TimedMetadataId3Period?: number | null;
		TimestampDeltaMilliseconds?: number | null;
		TsFileMode?: HlsTsFileMode;
	}

	/** Hls Group Settings */
	export interface HlsGroupSettingsFormProperties {
		BaseUrlContent: FormControl<string | null | undefined>,
		BaseUrlContent1: FormControl<string | null | undefined>,
		BaseUrlManifest: FormControl<string | null | undefined>,
		BaseUrlManifest1: FormControl<string | null | undefined>,
		CaptionLanguageSetting: FormControl<HlsCaptionLanguageSetting | null | undefined>,
		ClientCache: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		CodecSpecification: FormControl<HlsCodecSpecification | null | undefined>,
		ConstantIv: FormControl<string | null | undefined>,
		DirectoryStructure: FormControl<HlsDirectoryStructure | null | undefined>,
		DiscontinuityTags: FormControl<HlsDiscontinuityTags | null | undefined>,
		EncryptionType: FormControl<HlsEncryptionType | null | undefined>,
		HlsId3SegmentTagging: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		IFrameOnlyPlaylists: FormControl<IFrameOnlyPlaylistType | null | undefined>,
		IncompleteSegmentBehavior: FormControl<HlsIncompleteSegmentBehavior | null | undefined>,
		IndexNSegments: FormControl<number | null | undefined>,
		InputLossAction: FormControl<InputLossActionForHlsOut | null | undefined>,
		IvInManifest: FormControl<EbuTtDDestinationStyleControl | null | undefined>,
		IvSource: FormControl<HlsIvSource | null | undefined>,
		KeepSegments: FormControl<number | null | undefined>,
		KeyFormat: FormControl<string | null | undefined>,
		KeyFormatVersions: FormControl<string | null | undefined>,
		ManifestCompression: FormControl<HlsManifestCompression | null | undefined>,
		ManifestDurationFormat: FormControl<HlsManifestDurationFormat | null | undefined>,
		MinSegmentLength: FormControl<number | null | undefined>,
		Mode: FormControl<HlsMode | null | undefined>,
		OutputSelection: FormControl<HlsOutputSelection | null | undefined>,
		ProgramDateTime: FormControl<EbuTtDDestinationStyleControl | null | undefined>,
		ProgramDateTimeClock: FormControl<HlsProgramDateTimeClock | null | undefined>,
		ProgramDateTimePeriod: FormControl<number | null | undefined>,
		RedundantManifest: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		SegmentLength: FormControl<number | null | undefined>,
		SegmentationMode: FormControl<HlsSegmentationMode | null | undefined>,
		SegmentsPerSubdirectory: FormControl<number | null | undefined>,
		StreamInfResolution: FormControl<EbuTtDDestinationStyleControl | null | undefined>,
		TimedMetadataId3Frame: FormControl<HlsTimedMetadataId3Frame | null | undefined>,
		TimedMetadataId3Period: FormControl<number | null | undefined>,
		TimestampDeltaMilliseconds: FormControl<number | null | undefined>,
		TsFileMode: FormControl<HlsTsFileMode | null | undefined>,
	}
	export function CreateHlsGroupSettingsFormGroup() {
		return new FormGroup<HlsGroupSettingsFormProperties>({
			BaseUrlContent: new FormControl<string | null | undefined>(undefined),
			BaseUrlContent1: new FormControl<string | null | undefined>(undefined),
			BaseUrlManifest: new FormControl<string | null | undefined>(undefined),
			BaseUrlManifest1: new FormControl<string | null | undefined>(undefined),
			CaptionLanguageSetting: new FormControl<HlsCaptionLanguageSetting | null | undefined>(undefined),
			ClientCache: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			CodecSpecification: new FormControl<HlsCodecSpecification | null | undefined>(undefined),
			ConstantIv: new FormControl<string | null | undefined>(undefined),
			DirectoryStructure: new FormControl<HlsDirectoryStructure | null | undefined>(undefined),
			DiscontinuityTags: new FormControl<HlsDiscontinuityTags | null | undefined>(undefined),
			EncryptionType: new FormControl<HlsEncryptionType | null | undefined>(undefined),
			HlsId3SegmentTagging: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			IFrameOnlyPlaylists: new FormControl<IFrameOnlyPlaylistType | null | undefined>(undefined),
			IncompleteSegmentBehavior: new FormControl<HlsIncompleteSegmentBehavior | null | undefined>(undefined),
			IndexNSegments: new FormControl<number | null | undefined>(undefined),
			InputLossAction: new FormControl<InputLossActionForHlsOut | null | undefined>(undefined),
			IvInManifest: new FormControl<EbuTtDDestinationStyleControl | null | undefined>(undefined),
			IvSource: new FormControl<HlsIvSource | null | undefined>(undefined),
			KeepSegments: new FormControl<number | null | undefined>(undefined),
			KeyFormat: new FormControl<string | null | undefined>(undefined),
			KeyFormatVersions: new FormControl<string | null | undefined>(undefined),
			ManifestCompression: new FormControl<HlsManifestCompression | null | undefined>(undefined),
			ManifestDurationFormat: new FormControl<HlsManifestDurationFormat | null | undefined>(undefined),
			MinSegmentLength: new FormControl<number | null | undefined>(undefined),
			Mode: new FormControl<HlsMode | null | undefined>(undefined),
			OutputSelection: new FormControl<HlsOutputSelection | null | undefined>(undefined),
			ProgramDateTime: new FormControl<EbuTtDDestinationStyleControl | null | undefined>(undefined),
			ProgramDateTimeClock: new FormControl<HlsProgramDateTimeClock | null | undefined>(undefined),
			ProgramDateTimePeriod: new FormControl<number | null | undefined>(undefined),
			RedundantManifest: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			SegmentLength: new FormControl<number | null | undefined>(undefined),
			SegmentationMode: new FormControl<HlsSegmentationMode | null | undefined>(undefined),
			SegmentsPerSubdirectory: new FormControl<number | null | undefined>(undefined),
			StreamInfResolution: new FormControl<EbuTtDDestinationStyleControl | null | undefined>(undefined),
			TimedMetadataId3Frame: new FormControl<HlsTimedMetadataId3Frame | null | undefined>(undefined),
			TimedMetadataId3Period: new FormControl<number | null | undefined>(undefined),
			TimestampDeltaMilliseconds: new FormControl<number | null | undefined>(undefined),
			TsFileMode: new FormControl<HlsTsFileMode | null | undefined>(undefined),
		});

	}


	/** Hls Ad Markers */
	export enum HlsAdMarkers { ADOBE = 0, ELEMENTAL = 1, ELEMENTAL_SCTE35 = 2 }


	/** Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description. */
	export interface CaptionLanguageMapping {

		/** Required */
		CaptionChannel: number;

		/** Required */
		LanguageCode: string;

		/** Required */
		LanguageDescription: string;
	}

	/** Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description. */
	export interface CaptionLanguageMappingFormProperties {

		/** Required */
		CaptionChannel: FormControl<number | null | undefined>,

		/** Required */
		LanguageCode: FormControl<string | null | undefined>,

		/** Required */
		LanguageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCaptionLanguageMappingFormGroup() {
		return new FormGroup<CaptionLanguageMappingFormProperties>({
			CaptionChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Hls Caption Language Setting */
	export enum HlsCaptionLanguageSetting { INSERT = 0, NONE = 1, OMIT = 2 }


	/** Hls Codec Specification */
	export enum HlsCodecSpecification { RFC_4281 = 0, RFC_6381 = 1 }


	/** Hls Directory Structure */
	export enum HlsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }


	/** Hls Discontinuity Tags */
	export enum HlsDiscontinuityTags { INSERT = 0, NEVER_INSERT = 1 }


	/** Hls Encryption Type */
	export enum HlsEncryptionType { AES128 = 0, SAMPLE_AES = 1 }


	/** Hls Cdn Settings */
	export interface HlsCdnSettings {
		HlsAkamaiSettings?: HlsAkamaiSettings;
		HlsBasicPutSettings?: HlsBasicPutSettings;
		HlsMediaStoreSettings?: HlsMediaStoreSettings;
		HlsS3Settings?: HlsS3Settings;
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
		ConnectionRetryInterval?: number | null;
		FilecacheDuration?: number | null;
		HttpTransferMode?: HlsAkamaiHttpTransferMode;
		NumRetries?: number | null;
		RestartDelay?: number | null;
		Salt?: string;
		Token?: string;
	}

	/** Hls Akamai Settings */
	export interface HlsAkamaiSettingsFormProperties {
		ConnectionRetryInterval: FormControl<number | null | undefined>,
		FilecacheDuration: FormControl<number | null | undefined>,
		HttpTransferMode: FormControl<HlsAkamaiHttpTransferMode | null | undefined>,
		NumRetries: FormControl<number | null | undefined>,
		RestartDelay: FormControl<number | null | undefined>,
		Salt: FormControl<string | null | undefined>,
		Token: FormControl<string | null | undefined>,
	}
	export function CreateHlsAkamaiSettingsFormGroup() {
		return new FormGroup<HlsAkamaiSettingsFormProperties>({
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined),
			HttpTransferMode: new FormControl<HlsAkamaiHttpTransferMode | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined),
			RestartDelay: new FormControl<number | null | undefined>(undefined),
			Salt: new FormControl<string | null | undefined>(undefined),
			Token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hls Akamai Http Transfer Mode */
	export enum HlsAkamaiHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/** Hls Basic Put Settings */
	export interface HlsBasicPutSettings {
		ConnectionRetryInterval?: number | null;
		FilecacheDuration?: number | null;
		NumRetries?: number | null;
		RestartDelay?: number | null;
	}

	/** Hls Basic Put Settings */
	export interface HlsBasicPutSettingsFormProperties {
		ConnectionRetryInterval: FormControl<number | null | undefined>,
		FilecacheDuration: FormControl<number | null | undefined>,
		NumRetries: FormControl<number | null | undefined>,
		RestartDelay: FormControl<number | null | undefined>,
	}
	export function CreateHlsBasicPutSettingsFormGroup() {
		return new FormGroup<HlsBasicPutSettingsFormProperties>({
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined),
			RestartDelay: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Hls Media Store Settings */
	export interface HlsMediaStoreSettings {
		ConnectionRetryInterval?: number | null;
		FilecacheDuration?: number | null;
		MediaStoreStorageClass?: HlsMediaStoreStorageClass;
		NumRetries?: number | null;
		RestartDelay?: number | null;
	}

	/** Hls Media Store Settings */
	export interface HlsMediaStoreSettingsFormProperties {
		ConnectionRetryInterval: FormControl<number | null | undefined>,
		FilecacheDuration: FormControl<number | null | undefined>,
		MediaStoreStorageClass: FormControl<HlsMediaStoreStorageClass | null | undefined>,
		NumRetries: FormControl<number | null | undefined>,
		RestartDelay: FormControl<number | null | undefined>,
	}
	export function CreateHlsMediaStoreSettingsFormGroup() {
		return new FormGroup<HlsMediaStoreSettingsFormProperties>({
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined),
			MediaStoreStorageClass: new FormControl<HlsMediaStoreStorageClass | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined),
			RestartDelay: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Hls Media Store Storage Class */
	export enum HlsMediaStoreStorageClass { TEMPORAL = 0 }


	/** Hls S3 Settings */
	export interface HlsS3Settings {
		CannedAcl?: S3CannedAcl;
	}

	/** Hls S3 Settings */
	export interface HlsS3SettingsFormProperties {
		CannedAcl: FormControl<S3CannedAcl | null | undefined>,
	}
	export function CreateHlsS3SettingsFormGroup() {
		return new FormGroup<HlsS3SettingsFormProperties>({
			CannedAcl: new FormControl<S3CannedAcl | null | undefined>(undefined),
		});

	}


	/** Hls Webdav Settings */
	export interface HlsWebdavSettings {
		ConnectionRetryInterval?: number | null;
		FilecacheDuration?: number | null;
		HttpTransferMode?: HlsAkamaiHttpTransferMode;
		NumRetries?: number | null;
		RestartDelay?: number | null;
	}

	/** Hls Webdav Settings */
	export interface HlsWebdavSettingsFormProperties {
		ConnectionRetryInterval: FormControl<number | null | undefined>,
		FilecacheDuration: FormControl<number | null | undefined>,
		HttpTransferMode: FormControl<HlsAkamaiHttpTransferMode | null | undefined>,
		NumRetries: FormControl<number | null | undefined>,
		RestartDelay: FormControl<number | null | undefined>,
	}
	export function CreateHlsWebdavSettingsFormGroup() {
		return new FormGroup<HlsWebdavSettingsFormProperties>({
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined),
			HttpTransferMode: new FormControl<HlsAkamaiHttpTransferMode | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined),
			RestartDelay: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment. */
	export enum IFrameOnlyPlaylistType { DISABLED = 0, STANDARD = 1 }


	/** Hls Incomplete Segment Behavior */
	export enum HlsIncompleteSegmentBehavior { AUTO = 0, SUPPRESS = 1 }


	/** Input Loss Action For Hls Out */
	export enum InputLossActionForHlsOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/** Hls Iv Source */
	export enum HlsIvSource { EXPLICIT = 0, FOLLOWS_SEGMENT_NUMBER = 1 }


	/** Key Provider Settings */
	export interface KeyProviderSettings {
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
		KeyProviderServer?: InputLocation;

		/** Required */
		StaticKeyValue: string;
	}

	/** Static Key Settings */
	export interface StaticKeySettingsFormProperties {

		/** Required */
		StaticKeyValue: FormControl<string | null | undefined>,
	}
	export function CreateStaticKeySettingsFormGroup() {
		return new FormGroup<StaticKeySettingsFormProperties>({
			StaticKeyValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Hls Manifest Compression */
	export enum HlsManifestCompression { GZIP = 0, NONE = 1 }


	/** Hls Manifest Duration Format */
	export enum HlsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }


	/** Hls Mode */
	export enum HlsMode { LIVE = 0, VOD = 1 }


	/** Hls Output Selection */
	export enum HlsOutputSelection { MANIFESTS_AND_SEGMENTS = 0, SEGMENTS_ONLY = 1, VARIANT_MANIFESTS_AND_SEGMENTS = 2 }


	/** Hls Program Date Time Clock */
	export enum HlsProgramDateTimeClock { INITIALIZE_FROM_OUTPUT_TIMECODE = 0, SYSTEM_CLOCK = 1 }


	/** Hls Segmentation Mode */
	export enum HlsSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }


	/** Hls Timed Metadata Id3 Frame */
	export enum HlsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/** Hls Ts File Mode */
	export enum HlsTsFileMode { SEGMENTED_FILES = 0, SINGLE_FILE = 1 }


	/** Media Package Group Settings */
	export interface MediaPackageGroupSettings {

		/** Required */
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
		AcquisitionPointId?: string;
		AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl;
		CertificateMode?: SmoothGroupCertificateMode;
		ConnectionRetryInterval?: number | null;

		/** Required */
		Destination: OutputLocationRef;
		EventId?: string;
		EventIdMode?: SmoothGroupEventIdMode;
		EventStopBehavior?: SmoothGroupEventStopBehavior;
		FilecacheDuration?: number | null;
		FragmentLength?: number | null;
		InputLossAction?: InputLossActionForHlsOut;
		NumRetries?: number | null;
		RestartDelay?: number | null;
		SegmentationMode?: HlsSegmentationMode;
		SendDelayMs?: number | null;
		SparseTrackType?: SmoothGroupSparseTrackType;
		StreamManifestBehavior?: SmoothGroupStreamManifestBehavior;
		TimestampOffset?: string;
		TimestampOffsetMode?: SmoothGroupTimestampOffsetMode;
	}

	/** Ms Smooth Group Settings */
	export interface MsSmoothGroupSettingsFormProperties {
		AcquisitionPointId: FormControl<string | null | undefined>,
		AudioOnlyTimecodeControl: FormControl<SmoothGroupAudioOnlyTimecodeControl | null | undefined>,
		CertificateMode: FormControl<SmoothGroupCertificateMode | null | undefined>,
		ConnectionRetryInterval: FormControl<number | null | undefined>,
		EventId: FormControl<string | null | undefined>,
		EventIdMode: FormControl<SmoothGroupEventIdMode | null | undefined>,
		EventStopBehavior: FormControl<SmoothGroupEventStopBehavior | null | undefined>,
		FilecacheDuration: FormControl<number | null | undefined>,
		FragmentLength: FormControl<number | null | undefined>,
		InputLossAction: FormControl<InputLossActionForHlsOut | null | undefined>,
		NumRetries: FormControl<number | null | undefined>,
		RestartDelay: FormControl<number | null | undefined>,
		SegmentationMode: FormControl<HlsSegmentationMode | null | undefined>,
		SendDelayMs: FormControl<number | null | undefined>,
		SparseTrackType: FormControl<SmoothGroupSparseTrackType | null | undefined>,
		StreamManifestBehavior: FormControl<SmoothGroupStreamManifestBehavior | null | undefined>,
		TimestampOffset: FormControl<string | null | undefined>,
		TimestampOffsetMode: FormControl<SmoothGroupTimestampOffsetMode | null | undefined>,
	}
	export function CreateMsSmoothGroupSettingsFormGroup() {
		return new FormGroup<MsSmoothGroupSettingsFormProperties>({
			AcquisitionPointId: new FormControl<string | null | undefined>(undefined),
			AudioOnlyTimecodeControl: new FormControl<SmoothGroupAudioOnlyTimecodeControl | null | undefined>(undefined),
			CertificateMode: new FormControl<SmoothGroupCertificateMode | null | undefined>(undefined),
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined),
			EventId: new FormControl<string | null | undefined>(undefined),
			EventIdMode: new FormControl<SmoothGroupEventIdMode | null | undefined>(undefined),
			EventStopBehavior: new FormControl<SmoothGroupEventStopBehavior | null | undefined>(undefined),
			FilecacheDuration: new FormControl<number | null | undefined>(undefined),
			FragmentLength: new FormControl<number | null | undefined>(undefined),
			InputLossAction: new FormControl<InputLossActionForHlsOut | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined),
			RestartDelay: new FormControl<number | null | undefined>(undefined),
			SegmentationMode: new FormControl<HlsSegmentationMode | null | undefined>(undefined),
			SendDelayMs: new FormControl<number | null | undefined>(undefined),
			SparseTrackType: new FormControl<SmoothGroupSparseTrackType | null | undefined>(undefined),
			StreamManifestBehavior: new FormControl<SmoothGroupStreamManifestBehavior | null | undefined>(undefined),
			TimestampOffset: new FormControl<string | null | undefined>(undefined),
			TimestampOffsetMode: new FormControl<SmoothGroupTimestampOffsetMode | null | undefined>(undefined),
		});

	}


	/** Smooth Group Audio Only Timecode Control */
	export enum SmoothGroupAudioOnlyTimecodeControl { PASSTHROUGH = 0, USE_CONFIGURED_CLOCK = 1 }


	/** Smooth Group Certificate Mode */
	export enum SmoothGroupCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }


	/** Smooth Group Event Id Mode */
	export enum SmoothGroupEventIdMode { NO_EVENT_ID = 0, USE_CONFIGURED = 1, USE_TIMESTAMP = 2 }


	/** Smooth Group Event Stop Behavior */
	export enum SmoothGroupEventStopBehavior { NONE = 0, SEND_EOS = 1 }


	/** Smooth Group Sparse Track Type */
	export enum SmoothGroupSparseTrackType { NONE = 0, SCTE_35 = 1, SCTE_35_WITHOUT_SEGMENTATION = 2 }


	/** Smooth Group Stream Manifest Behavior */
	export enum SmoothGroupStreamManifestBehavior { DO_NOT_SEND = 0, SEND = 1 }


	/** Smooth Group Timestamp Offset Mode */
	export enum SmoothGroupTimestampOffsetMode { USE_CONFIGURED_OFFSET = 0, USE_EVENT_START_DATE = 1 }


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
		AdMarkers?: Array<RtmpAdMarkers>;
		AuthenticationScheme?: AuthenticationScheme;
		CacheFullBehavior?: RtmpCacheFullBehavior;
		CacheLength?: number | null;
		CaptionData?: RtmpCaptionData;
		InputLossAction?: InputLossActionForHlsOut;
		RestartDelay?: number | null;
	}

	/** Rtmp Group Settings */
	export interface RtmpGroupSettingsFormProperties {
		AuthenticationScheme: FormControl<AuthenticationScheme | null | undefined>,
		CacheFullBehavior: FormControl<RtmpCacheFullBehavior | null | undefined>,
		CacheLength: FormControl<number | null | undefined>,
		CaptionData: FormControl<RtmpCaptionData | null | undefined>,
		InputLossAction: FormControl<InputLossActionForHlsOut | null | undefined>,
		RestartDelay: FormControl<number | null | undefined>,
	}
	export function CreateRtmpGroupSettingsFormGroup() {
		return new FormGroup<RtmpGroupSettingsFormProperties>({
			AuthenticationScheme: new FormControl<AuthenticationScheme | null | undefined>(undefined),
			CacheFullBehavior: new FormControl<RtmpCacheFullBehavior | null | undefined>(undefined),
			CacheLength: new FormControl<number | null | undefined>(undefined),
			CaptionData: new FormControl<RtmpCaptionData | null | undefined>(undefined),
			InputLossAction: new FormControl<InputLossActionForHlsOut | null | undefined>(undefined),
			RestartDelay: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Rtmp Ad Markers */
	export enum RtmpAdMarkers { ON_CUE_POINT_SCTE35 = 0 }


	/** Authentication Scheme */
	export enum AuthenticationScheme { AKAMAI = 0, COMMON = 1 }


	/** Rtmp Cache Full Behavior */
	export enum RtmpCacheFullBehavior { DISCONNECT_IMMEDIATELY = 0, WAIT_FOR_SERVER = 1 }


	/** Rtmp Caption Data */
	export enum RtmpCaptionData { ALL = 0, FIELD1_608 = 1, FIELD1_AND_FIELD2_608 = 2 }


	/** Udp Group Settings */
	export interface UdpGroupSettings {
		InputLossAction?: InputLossActionForUdpOut;
		TimedMetadataId3Frame?: HlsTimedMetadataId3Frame;
		TimedMetadataId3Period?: number | null;
	}

	/** Udp Group Settings */
	export interface UdpGroupSettingsFormProperties {
		InputLossAction: FormControl<InputLossActionForUdpOut | null | undefined>,
		TimedMetadataId3Frame: FormControl<HlsTimedMetadataId3Frame | null | undefined>,
		TimedMetadataId3Period: FormControl<number | null | undefined>,
	}
	export function CreateUdpGroupSettingsFormGroup() {
		return new FormGroup<UdpGroupSettingsFormProperties>({
			InputLossAction: new FormControl<InputLossActionForUdpOut | null | undefined>(undefined),
			TimedMetadataId3Frame: new FormControl<HlsTimedMetadataId3Frame | null | undefined>(undefined),
			TimedMetadataId3Period: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Input Loss Action For Udp Out */
	export enum InputLossActionForUdpOut { DROP_PROGRAM = 0, DROP_TS = 1, EMIT_PROGRAM = 2 }


	/** Output settings. There can be multiple outputs within a group. */
	export interface Output {
		AudioDescriptionNames?: Array<string>;
		CaptionDescriptionNames?: Array<string>;
		OutputName?: string;

		/** Required */
		OutputSettings: OutputSettings;
		VideoDescriptionName?: string;
	}

	/** Output settings. There can be multiple outputs within a group. */
	export interface OutputFormProperties {
		OutputName: FormControl<string | null | undefined>,
		VideoDescriptionName: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			OutputName: new FormControl<string | null | undefined>(undefined),
			VideoDescriptionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output Settings */
	export interface OutputSettings {
		ArchiveOutputSettings?: ArchiveOutputSettings;
		FrameCaptureOutputSettings?: FrameCaptureOutputSettings;
		HlsOutputSettings?: HlsOutputSettings;
		MediaPackageOutputSettings?: MediaPackageOutputSettings;
		MsSmoothOutputSettings?: MsSmoothOutputSettings;
		MultiplexOutputSettings?: MultiplexOutputSettings;
		RtmpOutputSettings?: RtmpOutputSettings;
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

		/** Required */
		ContainerSettings: ArchiveContainerSettings;
		Extension?: string;
		NameModifier?: string;
	}

	/** Archive Output Settings */
	export interface ArchiveOutputSettingsFormProperties {
		Extension: FormControl<string | null | undefined>,
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
		M2tsSettings?: M2tsSettings;
		RawSettings?: RawSettings;
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
		AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior;
		Arib?: NielsenWatermarksCbetStepaside;
		AribCaptionsPid?: string;
		AribCaptionsPidControl?: M2tsAribCaptionsPidControl;
		AudioBufferModel?: M2tsAudioBufferModel;
		AudioFramesPerPes?: number | null;
		AudioPids?: string;
		AudioStreamType?: M2tsAudioBufferModel;
		Bitrate?: number | null;
		BufferModel?: M2tsBufferModel;
		CcDescriptor?: NielsenWatermarksCbetStepaside;
		DvbNitSettings?: DvbNitSettings;
		DvbSdtSettings?: DvbSdtSettings;
		DvbSubPids?: string;
		DvbTdtSettings?: DvbTdtSettings;
		DvbTeletextPid?: string;
		Ebif?: M2tsEbifControl;
		EbpAudioInterval?: M2tsAudioInterval;
		EbpLookaheadMs?: number | null;
		EbpPlacement?: M2tsEbpPlacement;
		EcmPid?: string;
		EsRateInPes?: EbuTtDDestinationStyleControl;
		EtvPlatformPid?: string;
		EtvSignalPid?: string;
		FragmentTime?: number | null;
		Klv?: M2tsEbifControl;
		KlvDataPids?: string;
		NielsenId3Behavior?: M2tsNielsenId3Behavior;
		NullPacketBitrate?: number | null;
		PatInterval?: number | null;
		PcrControl?: M2tsPcrControl;
		PcrPeriod?: number | null;
		PcrPid?: string;
		PmtInterval?: number | null;
		PmtPid?: string;
		ProgramNum?: number | null;
		RateMode?: AacRateControlMode;
		Scte27Pids?: string;
		Scte35Control?: M2tsEbifControl;
		Scte35Pid?: string;
		SegmentationMarkers?: M2tsSegmentationMarkers;
		SegmentationStyle?: M2tsSegmentationStyle;
		SegmentationTime?: number | null;
		TimedMetadataBehavior?: M2tsNielsenId3Behavior;
		TimedMetadataPid?: string;
		TransportStreamId?: number | null;
		VideoPid?: string;
		Scte35PrerollPullupMilliseconds?: number | null;
	}

	/** M2ts Settings */
	export interface M2tsSettingsFormProperties {
		AbsentInputAudioBehavior: FormControl<M2tsAbsentInputAudioBehavior | null | undefined>,
		Arib: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		AribCaptionsPid: FormControl<string | null | undefined>,
		AribCaptionsPidControl: FormControl<M2tsAribCaptionsPidControl | null | undefined>,
		AudioBufferModel: FormControl<M2tsAudioBufferModel | null | undefined>,
		AudioFramesPerPes: FormControl<number | null | undefined>,
		AudioPids: FormControl<string | null | undefined>,
		AudioStreamType: FormControl<M2tsAudioBufferModel | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		BufferModel: FormControl<M2tsBufferModel | null | undefined>,
		CcDescriptor: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		DvbSubPids: FormControl<string | null | undefined>,
		DvbTeletextPid: FormControl<string | null | undefined>,
		Ebif: FormControl<M2tsEbifControl | null | undefined>,
		EbpAudioInterval: FormControl<M2tsAudioInterval | null | undefined>,
		EbpLookaheadMs: FormControl<number | null | undefined>,
		EbpPlacement: FormControl<M2tsEbpPlacement | null | undefined>,
		EcmPid: FormControl<string | null | undefined>,
		EsRateInPes: FormControl<EbuTtDDestinationStyleControl | null | undefined>,
		EtvPlatformPid: FormControl<string | null | undefined>,
		EtvSignalPid: FormControl<string | null | undefined>,
		FragmentTime: FormControl<number | null | undefined>,
		Klv: FormControl<M2tsEbifControl | null | undefined>,
		KlvDataPids: FormControl<string | null | undefined>,
		NielsenId3Behavior: FormControl<M2tsNielsenId3Behavior | null | undefined>,
		NullPacketBitrate: FormControl<number | null | undefined>,
		PatInterval: FormControl<number | null | undefined>,
		PcrControl: FormControl<M2tsPcrControl | null | undefined>,
		PcrPeriod: FormControl<number | null | undefined>,
		PcrPid: FormControl<string | null | undefined>,
		PmtInterval: FormControl<number | null | undefined>,
		PmtPid: FormControl<string | null | undefined>,
		ProgramNum: FormControl<number | null | undefined>,
		RateMode: FormControl<AacRateControlMode | null | undefined>,
		Scte27Pids: FormControl<string | null | undefined>,
		Scte35Control: FormControl<M2tsEbifControl | null | undefined>,
		Scte35Pid: FormControl<string | null | undefined>,
		SegmentationMarkers: FormControl<M2tsSegmentationMarkers | null | undefined>,
		SegmentationStyle: FormControl<M2tsSegmentationStyle | null | undefined>,
		SegmentationTime: FormControl<number | null | undefined>,
		TimedMetadataBehavior: FormControl<M2tsNielsenId3Behavior | null | undefined>,
		TimedMetadataPid: FormControl<string | null | undefined>,
		TransportStreamId: FormControl<number | null | undefined>,
		VideoPid: FormControl<string | null | undefined>,
		Scte35PrerollPullupMilliseconds: FormControl<number | null | undefined>,
	}
	export function CreateM2tsSettingsFormGroup() {
		return new FormGroup<M2tsSettingsFormProperties>({
			AbsentInputAudioBehavior: new FormControl<M2tsAbsentInputAudioBehavior | null | undefined>(undefined),
			Arib: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			AribCaptionsPid: new FormControl<string | null | undefined>(undefined),
			AribCaptionsPidControl: new FormControl<M2tsAribCaptionsPidControl | null | undefined>(undefined),
			AudioBufferModel: new FormControl<M2tsAudioBufferModel | null | undefined>(undefined),
			AudioFramesPerPes: new FormControl<number | null | undefined>(undefined),
			AudioPids: new FormControl<string | null | undefined>(undefined),
			AudioStreamType: new FormControl<M2tsAudioBufferModel | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BufferModel: new FormControl<M2tsBufferModel | null | undefined>(undefined),
			CcDescriptor: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			DvbSubPids: new FormControl<string | null | undefined>(undefined),
			DvbTeletextPid: new FormControl<string | null | undefined>(undefined),
			Ebif: new FormControl<M2tsEbifControl | null | undefined>(undefined),
			EbpAudioInterval: new FormControl<M2tsAudioInterval | null | undefined>(undefined),
			EbpLookaheadMs: new FormControl<number | null | undefined>(undefined),
			EbpPlacement: new FormControl<M2tsEbpPlacement | null | undefined>(undefined),
			EcmPid: new FormControl<string | null | undefined>(undefined),
			EsRateInPes: new FormControl<EbuTtDDestinationStyleControl | null | undefined>(undefined),
			EtvPlatformPid: new FormControl<string | null | undefined>(undefined),
			EtvSignalPid: new FormControl<string | null | undefined>(undefined),
			FragmentTime: new FormControl<number | null | undefined>(undefined),
			Klv: new FormControl<M2tsEbifControl | null | undefined>(undefined),
			KlvDataPids: new FormControl<string | null | undefined>(undefined),
			NielsenId3Behavior: new FormControl<M2tsNielsenId3Behavior | null | undefined>(undefined),
			NullPacketBitrate: new FormControl<number | null | undefined>(undefined),
			PatInterval: new FormControl<number | null | undefined>(undefined),
			PcrControl: new FormControl<M2tsPcrControl | null | undefined>(undefined),
			PcrPeriod: new FormControl<number | null | undefined>(undefined),
			PcrPid: new FormControl<string | null | undefined>(undefined),
			PmtInterval: new FormControl<number | null | undefined>(undefined),
			PmtPid: new FormControl<string | null | undefined>(undefined),
			ProgramNum: new FormControl<number | null | undefined>(undefined),
			RateMode: new FormControl<AacRateControlMode | null | undefined>(undefined),
			Scte27Pids: new FormControl<string | null | undefined>(undefined),
			Scte35Control: new FormControl<M2tsEbifControl | null | undefined>(undefined),
			Scte35Pid: new FormControl<string | null | undefined>(undefined),
			SegmentationMarkers: new FormControl<M2tsSegmentationMarkers | null | undefined>(undefined),
			SegmentationStyle: new FormControl<M2tsSegmentationStyle | null | undefined>(undefined),
			SegmentationTime: new FormControl<number | null | undefined>(undefined),
			TimedMetadataBehavior: new FormControl<M2tsNielsenId3Behavior | null | undefined>(undefined),
			TimedMetadataPid: new FormControl<string | null | undefined>(undefined),
			TransportStreamId: new FormControl<number | null | undefined>(undefined),
			VideoPid: new FormControl<string | null | undefined>(undefined),
			Scte35PrerollPullupMilliseconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** M2ts Absent Input Audio Behavior */
	export enum M2tsAbsentInputAudioBehavior { DROP = 0, ENCODE_SILENCE = 1 }


	/** M2ts Arib Captions Pid Control */
	export enum M2tsAribCaptionsPidControl { AUTO = 0, USE_CONFIGURED = 1 }


	/** M2ts Audio Buffer Model */
	export enum M2tsAudioBufferModel { ATSC = 0, DVB = 1 }


	/** M2ts Buffer Model */
	export enum M2tsBufferModel { MULTIPLEX = 0, NONE = 1 }


	/** DVB Network Information Table (NIT) */
	export interface DvbNitSettings {

		/** Required */
		NetworkId: number;

		/** Required */
		NetworkName: string;
		RepInterval?: number | null;
	}

	/** DVB Network Information Table (NIT) */
	export interface DvbNitSettingsFormProperties {

		/** Required */
		NetworkId: FormControl<number | null | undefined>,

		/** Required */
		NetworkName: FormControl<string | null | undefined>,
		RepInterval: FormControl<number | null | undefined>,
	}
	export function CreateDvbNitSettingsFormGroup() {
		return new FormGroup<DvbNitSettingsFormProperties>({
			NetworkId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NetworkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RepInterval: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DVB Service Description Table (SDT) */
	export interface DvbSdtSettings {
		OutputSdt?: DvbSdtOutputSdt;
		RepInterval?: number | null;
		ServiceName?: string;
		ServiceProviderName?: string;
	}

	/** DVB Service Description Table (SDT) */
	export interface DvbSdtSettingsFormProperties {
		OutputSdt: FormControl<DvbSdtOutputSdt | null | undefined>,
		RepInterval: FormControl<number | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		ServiceProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDvbSdtSettingsFormGroup() {
		return new FormGroup<DvbSdtSettingsFormProperties>({
			OutputSdt: new FormControl<DvbSdtOutputSdt | null | undefined>(undefined),
			RepInterval: new FormControl<number | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dvb Sdt Output Sdt */
	export enum DvbSdtOutputSdt { SDT_FOLLOW = 0, SDT_FOLLOW_IF_PRESENT = 1, SDT_MANUAL = 2, SDT_NONE = 3 }


	/** DVB Time and Date Table (SDT) */
	export interface DvbTdtSettings {
		RepInterval?: number | null;
	}

	/** DVB Time and Date Table (SDT) */
	export interface DvbTdtSettingsFormProperties {
		RepInterval: FormControl<number | null | undefined>,
	}
	export function CreateDvbTdtSettingsFormGroup() {
		return new FormGroup<DvbTdtSettingsFormProperties>({
			RepInterval: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** M2ts Ebif Control */
	export enum M2tsEbifControl { NONE = 0, PASSTHROUGH = 1 }


	/** M2ts Audio Interval */
	export enum M2tsAudioInterval { VIDEO_AND_FIXED_INTERVALS = 0, VIDEO_INTERVAL = 1 }


	/** M2ts Ebp Placement */
	export enum M2tsEbpPlacement { VIDEO_AND_AUDIO_PIDS = 0, VIDEO_PID = 1 }


	/** M2ts Nielsen Id3 Behavior */
	export enum M2tsNielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** M2ts Pcr Control */
	export enum M2tsPcrControl { CONFIGURED_PCR_PERIOD = 0, PCR_EVERY_PES_PACKET = 1 }


	/** M2ts Segmentation Markers */
	export enum M2tsSegmentationMarkers { EBP = 0, EBP_LEGACY = 1, NONE = 2, PSI_SEGSTART = 3, RAI_ADAPT = 4, RAI_SEGSTART = 5 }


	/** M2ts Segmentation Style */
	export enum M2tsSegmentationStyle { MAINTAIN_CADENCE = 0, RESET_CADENCE = 1 }


	/** Raw Settings */
	export interface RawSettings {
	}

	/** Raw Settings */
	export interface RawSettingsFormProperties {
	}
	export function CreateRawSettingsFormGroup() {
		return new FormGroup<RawSettingsFormProperties>({
		});

	}


	/** Frame Capture Output Settings */
	export interface FrameCaptureOutputSettings {
		NameModifier?: string;
	}

	/** Frame Capture Output Settings */
	export interface FrameCaptureOutputSettingsFormProperties {
		NameModifier: FormControl<string | null | undefined>,
	}
	export function CreateFrameCaptureOutputSettingsFormGroup() {
		return new FormGroup<FrameCaptureOutputSettingsFormProperties>({
			NameModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hls Output Settings */
	export interface HlsOutputSettings {
		H265PackagingType?: HlsH265PackagingType;

		/** Required */
		HlsSettings: HlsSettings;
		NameModifier?: string;
		SegmentModifier?: string;
	}

	/** Hls Output Settings */
	export interface HlsOutputSettingsFormProperties {
		H265PackagingType: FormControl<HlsH265PackagingType | null | undefined>,
		NameModifier: FormControl<string | null | undefined>,
		SegmentModifier: FormControl<string | null | undefined>,
	}
	export function CreateHlsOutputSettingsFormGroup() {
		return new FormGroup<HlsOutputSettingsFormProperties>({
			H265PackagingType: new FormControl<HlsH265PackagingType | null | undefined>(undefined),
			NameModifier: new FormControl<string | null | undefined>(undefined),
			SegmentModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hls H265 Packaging Type */
	export enum HlsH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/** Hls Settings */
	export interface HlsSettings {
		AudioOnlyHlsSettings?: AudioOnlyHlsSettings;
		Fmp4HlsSettings?: Fmp4HlsSettings;
		FrameCaptureHlsSettings?: FrameCaptureHlsSettings;
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
		AudioGroupId?: string;
		AudioOnlyImage?: InputLocation;
		AudioTrackType?: AudioOnlyHlsTrackType;
		SegmentType?: AudioOnlyHlsSegmentType;
	}

	/** Audio Only Hls Settings */
	export interface AudioOnlyHlsSettingsFormProperties {
		AudioGroupId: FormControl<string | null | undefined>,
		AudioTrackType: FormControl<AudioOnlyHlsTrackType | null | undefined>,
		SegmentType: FormControl<AudioOnlyHlsSegmentType | null | undefined>,
	}
	export function CreateAudioOnlyHlsSettingsFormGroup() {
		return new FormGroup<AudioOnlyHlsSettingsFormProperties>({
			AudioGroupId: new FormControl<string | null | undefined>(undefined),
			AudioTrackType: new FormControl<AudioOnlyHlsTrackType | null | undefined>(undefined),
			SegmentType: new FormControl<AudioOnlyHlsSegmentType | null | undefined>(undefined),
		});

	}


	/** Audio Only Hls Track Type */
	export enum AudioOnlyHlsTrackType { ALTERNATE_AUDIO_AUTO_SELECT = 0, ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2, AUDIO_ONLY_VARIANT_STREAM = 3 }


	/** Audio Only Hls Segment Type */
	export enum AudioOnlyHlsSegmentType { AAC = 0, FMP4 = 1 }


	/** Fmp4 Hls Settings */
	export interface Fmp4HlsSettings {
		AudioRenditionSets?: string;
		NielsenId3Behavior?: M2tsNielsenId3Behavior;
		TimedMetadataBehavior?: M2tsNielsenId3Behavior;
	}

	/** Fmp4 Hls Settings */
	export interface Fmp4HlsSettingsFormProperties {
		AudioRenditionSets: FormControl<string | null | undefined>,
		NielsenId3Behavior: FormControl<M2tsNielsenId3Behavior | null | undefined>,
		TimedMetadataBehavior: FormControl<M2tsNielsenId3Behavior | null | undefined>,
	}
	export function CreateFmp4HlsSettingsFormGroup() {
		return new FormGroup<Fmp4HlsSettingsFormProperties>({
			AudioRenditionSets: new FormControl<string | null | undefined>(undefined),
			NielsenId3Behavior: new FormControl<M2tsNielsenId3Behavior | null | undefined>(undefined),
			TimedMetadataBehavior: new FormControl<M2tsNielsenId3Behavior | null | undefined>(undefined),
		});

	}


	/** Frame Capture Hls Settings */
	export interface FrameCaptureHlsSettings {
	}

	/** Frame Capture Hls Settings */
	export interface FrameCaptureHlsSettingsFormProperties {
	}
	export function CreateFrameCaptureHlsSettingsFormGroup() {
		return new FormGroup<FrameCaptureHlsSettingsFormProperties>({
		});

	}


	/** Standard Hls Settings */
	export interface StandardHlsSettings {
		AudioRenditionSets?: string;

		/** Required */
		M3u8Settings: M3u8Settings;
	}

	/** Standard Hls Settings */
	export interface StandardHlsSettingsFormProperties {
		AudioRenditionSets: FormControl<string | null | undefined>,
	}
	export function CreateStandardHlsSettingsFormGroup() {
		return new FormGroup<StandardHlsSettingsFormProperties>({
			AudioRenditionSets: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings information for the .m3u8 container */
	export interface M3u8Settings {
		AudioFramesPerPes?: number | null;
		AudioPids?: string;
		EcmPid?: string;
		NielsenId3Behavior?: M2tsNielsenId3Behavior;
		PatInterval?: number | null;
		PcrControl?: M2tsPcrControl;
		PcrPeriod?: number | null;
		PcrPid?: string;
		PmtInterval?: number | null;
		PmtPid?: string;
		ProgramNum?: number | null;
		Scte35Behavior?: M2tsNielsenId3Behavior;
		Scte35Pid?: string;
		TimedMetadataBehavior?: M2tsNielsenId3Behavior;
		TimedMetadataPid?: string;
		TransportStreamId?: number | null;
		VideoPid?: string;
	}

	/** Settings information for the .m3u8 container */
	export interface M3u8SettingsFormProperties {
		AudioFramesPerPes: FormControl<number | null | undefined>,
		AudioPids: FormControl<string | null | undefined>,
		EcmPid: FormControl<string | null | undefined>,
		NielsenId3Behavior: FormControl<M2tsNielsenId3Behavior | null | undefined>,
		PatInterval: FormControl<number | null | undefined>,
		PcrControl: FormControl<M2tsPcrControl | null | undefined>,
		PcrPeriod: FormControl<number | null | undefined>,
		PcrPid: FormControl<string | null | undefined>,
		PmtInterval: FormControl<number | null | undefined>,
		PmtPid: FormControl<string | null | undefined>,
		ProgramNum: FormControl<number | null | undefined>,
		Scte35Behavior: FormControl<M2tsNielsenId3Behavior | null | undefined>,
		Scte35Pid: FormControl<string | null | undefined>,
		TimedMetadataBehavior: FormControl<M2tsNielsenId3Behavior | null | undefined>,
		TimedMetadataPid: FormControl<string | null | undefined>,
		TransportStreamId: FormControl<number | null | undefined>,
		VideoPid: FormControl<string | null | undefined>,
	}
	export function CreateM3u8SettingsFormGroup() {
		return new FormGroup<M3u8SettingsFormProperties>({
			AudioFramesPerPes: new FormControl<number | null | undefined>(undefined),
			AudioPids: new FormControl<string | null | undefined>(undefined),
			EcmPid: new FormControl<string | null | undefined>(undefined),
			NielsenId3Behavior: new FormControl<M2tsNielsenId3Behavior | null | undefined>(undefined),
			PatInterval: new FormControl<number | null | undefined>(undefined),
			PcrControl: new FormControl<M2tsPcrControl | null | undefined>(undefined),
			PcrPeriod: new FormControl<number | null | undefined>(undefined),
			PcrPid: new FormControl<string | null | undefined>(undefined),
			PmtInterval: new FormControl<number | null | undefined>(undefined),
			PmtPid: new FormControl<string | null | undefined>(undefined),
			ProgramNum: new FormControl<number | null | undefined>(undefined),
			Scte35Behavior: new FormControl<M2tsNielsenId3Behavior | null | undefined>(undefined),
			Scte35Pid: new FormControl<string | null | undefined>(undefined),
			TimedMetadataBehavior: new FormControl<M2tsNielsenId3Behavior | null | undefined>(undefined),
			TimedMetadataPid: new FormControl<string | null | undefined>(undefined),
			TransportStreamId: new FormControl<number | null | undefined>(undefined),
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
		H265PackagingType?: HlsH265PackagingType;
		NameModifier?: string;
	}

	/** Ms Smooth Output Settings */
	export interface MsSmoothOutputSettingsFormProperties {
		H265PackagingType: FormControl<HlsH265PackagingType | null | undefined>,
		NameModifier: FormControl<string | null | undefined>,
	}
	export function CreateMsSmoothOutputSettingsFormGroup() {
		return new FormGroup<MsSmoothOutputSettingsFormProperties>({
			H265PackagingType: new FormControl<HlsH265PackagingType | null | undefined>(undefined),
			NameModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Multiplex Output Settings */
	export interface MultiplexOutputSettings {

		/** Required */
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
		CertificateMode?: SmoothGroupCertificateMode;
		ConnectionRetryInterval?: number | null;

		/** Required */
		Destination: OutputLocationRef;
		NumRetries?: number | null;
	}

	/** Rtmp Output Settings */
	export interface RtmpOutputSettingsFormProperties {
		CertificateMode: FormControl<SmoothGroupCertificateMode | null | undefined>,
		ConnectionRetryInterval: FormControl<number | null | undefined>,
		NumRetries: FormControl<number | null | undefined>,
	}
	export function CreateRtmpOutputSettingsFormGroup() {
		return new FormGroup<RtmpOutputSettingsFormProperties>({
			CertificateMode: new FormControl<SmoothGroupCertificateMode | null | undefined>(undefined),
			ConnectionRetryInterval: new FormControl<number | null | undefined>(undefined),
			NumRetries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Udp Output Settings */
	export interface UdpOutputSettings {
		BufferMsec?: number | null;

		/** Required */
		ContainerSettings: UdpContainerSettings;

		/** Required */
		Destination: OutputLocationRef;
		FecOutputSettings?: FecOutputSettings;
	}

	/** Udp Output Settings */
	export interface UdpOutputSettingsFormProperties {
		BufferMsec: FormControl<number | null | undefined>,
	}
	export function CreateUdpOutputSettingsFormGroup() {
		return new FormGroup<UdpOutputSettingsFormProperties>({
			BufferMsec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Udp Container Settings */
	export interface UdpContainerSettings {
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
		ColumnDepth?: number | null;
		IncludeFec?: FecOutputIncludeFec;
		RowLength?: number | null;
	}

	/** Fec Output Settings */
	export interface FecOutputSettingsFormProperties {
		ColumnDepth: FormControl<number | null | undefined>,
		IncludeFec: FormControl<FecOutputIncludeFec | null | undefined>,
		RowLength: FormControl<number | null | undefined>,
	}
	export function CreateFecOutputSettingsFormGroup() {
		return new FormGroup<FecOutputSettingsFormProperties>({
			ColumnDepth: new FormControl<number | null | undefined>(undefined),
			IncludeFec: new FormControl<FecOutputIncludeFec | null | undefined>(undefined),
			RowLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Fec Output Include Fec */
	export enum FecOutputIncludeFec { COLUMN = 0, COLUMN_AND_ROW = 1 }


	/** Timecode Config */
	export interface TimecodeConfig {

		/** Required */
		Source: TimecodeConfigSource;
		SyncThreshold?: number | null;
	}

	/** Timecode Config */
	export interface TimecodeConfigFormProperties {

		/** Required */
		Source: FormControl<TimecodeConfigSource | null | undefined>,
		SyncThreshold: FormControl<number | null | undefined>,
	}
	export function CreateTimecodeConfigFormGroup() {
		return new FormGroup<TimecodeConfigFormProperties>({
			Source: new FormControl<TimecodeConfigSource | null | undefined>(undefined, [Validators.required]),
			SyncThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Timecode Config Source */
	export enum TimecodeConfigSource { EMBEDDED = 0, SYSTEMCLOCK = 1, ZEROBASED = 2 }


	/** Video settings for this stream. */
	export interface VideoDescription {
		CodecSettings?: VideoCodecSettings;
		Height?: number | null;

		/** Required */
		Name: string;
		RespondToAfd?: VideoDescriptionRespondToAfd;
		ScalingBehavior?: VideoDescriptionScalingBehavior;
		Sharpness?: number | null;
		Width?: number | null;
	}

	/** Video settings for this stream. */
	export interface VideoDescriptionFormProperties {
		Height: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		RespondToAfd: FormControl<VideoDescriptionRespondToAfd | null | undefined>,
		ScalingBehavior: FormControl<VideoDescriptionScalingBehavior | null | undefined>,
		Sharpness: FormControl<number | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateVideoDescriptionFormGroup() {
		return new FormGroup<VideoDescriptionFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RespondToAfd: new FormControl<VideoDescriptionRespondToAfd | null | undefined>(undefined),
			ScalingBehavior: new FormControl<VideoDescriptionScalingBehavior | null | undefined>(undefined),
			Sharpness: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video Codec Settings */
	export interface VideoCodecSettings {
		FrameCaptureSettings?: FrameCaptureSettings;
		H264Settings?: H264Settings;
		H265Settings?: H265Settings;
		Mpeg2Settings?: Mpeg2Settings;
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
		CaptureInterval?: number | null;
		CaptureIntervalUnits?: FrameCaptureIntervalUnit;
		TimecodeBurninSettings?: TimecodeBurninSettings;
	}

	/** Frame Capture Settings */
	export interface FrameCaptureSettingsFormProperties {
		CaptureInterval: FormControl<number | null | undefined>,
		CaptureIntervalUnits: FormControl<FrameCaptureIntervalUnit | null | undefined>,
	}
	export function CreateFrameCaptureSettingsFormGroup() {
		return new FormGroup<FrameCaptureSettingsFormProperties>({
			CaptureInterval: new FormControl<number | null | undefined>(undefined),
			CaptureIntervalUnits: new FormControl<FrameCaptureIntervalUnit | null | undefined>(undefined),
		});

	}


	/** Frame Capture Interval Unit */
	export enum FrameCaptureIntervalUnit { MILLISECONDS = 0, SECONDS = 1 }


	/** Timecode Burnin Settings */
	export interface TimecodeBurninSettings {

		/** Required */
		FontSize: TimecodeBurninFontSize;

		/** Required */
		Position: TimecodeBurninPosition;
		Prefix?: string;
	}

	/** Timecode Burnin Settings */
	export interface TimecodeBurninSettingsFormProperties {

		/** Required */
		FontSize: FormControl<TimecodeBurninFontSize | null | undefined>,

		/** Required */
		Position: FormControl<TimecodeBurninPosition | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateTimecodeBurninSettingsFormGroup() {
		return new FormGroup<TimecodeBurninSettingsFormProperties>({
			FontSize: new FormControl<TimecodeBurninFontSize | null | undefined>(undefined, [Validators.required]),
			Position: new FormControl<TimecodeBurninPosition | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Timecode Burnin Font Size */
	export enum TimecodeBurninFontSize { EXTRA_SMALL_10 = 0, LARGE_48 = 1, MEDIUM_32 = 2, SMALL_16 = 3 }


	/** Timecode Burnin Position */
	export enum TimecodeBurninPosition { BOTTOM_CENTER = 0, BOTTOM_LEFT = 1, BOTTOM_RIGHT = 2, MIDDLE_CENTER = 3, MIDDLE_LEFT = 4, MIDDLE_RIGHT = 5, TOP_CENTER = 6, TOP_LEFT = 7, TOP_RIGHT = 8 }


	/** H264 Settings */
	export interface H264Settings {
		AdaptiveQuantization?: H264AdaptiveQuantization;
		AfdSignaling?: AfdSignaling;
		Bitrate?: number | null;
		BufFillPct?: number | null;
		BufSize?: number | null;
		ColorMetadata?: H264ColorMetadata;
		ColorSpaceSettings?: H264ColorSpaceSettings;
		EntropyEncoding?: H264EntropyEncoding;
		FilterSettings?: H264FilterSettings;
		FixedAfd?: FixedAfd;
		FlickerAq?: NielsenWatermarksCbetStepaside;
		ForceFieldPictures?: NielsenWatermarksCbetStepaside;
		FramerateControl?: H264FramerateControl;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		GopBReference?: NielsenWatermarksCbetStepaside;
		GopClosedCadence?: number | null;
		GopNumBFrames?: number | null;
		GopSize?: number | null;
		GopSizeUnits?: H264GopSizeUnits;
		Level?: H264Level;
		LookAheadRateControl?: H264LookAheadRateControl;
		MaxBitrate?: number | null;
		MinIInterval?: number | null;
		NumRefFrames?: number | null;
		ParControl?: H264FramerateControl;
		ParDenominator?: number | null;
		ParNumerator?: number | null;
		Profile?: H264Profile;
		QualityLevel?: H264QualityLevel;
		QvbrQualityLevel?: number | null;
		RateControlMode?: H264RateControlMode;
		ScanType?: H264ScanType;
		SceneChangeDetect?: NielsenWatermarksCbetStepaside;
		Slices?: number | null;
		Softness?: number | null;
		SpatialAq?: NielsenWatermarksCbetStepaside;
		SubgopLength?: H264SubGopLength;
		Syntax?: H264Syntax;
		TemporalAq?: NielsenWatermarksCbetStepaside;
		TimecodeInsertion?: H264TimecodeInsertionBehavior;
		TimecodeBurninSettings?: TimecodeBurninSettings;
	}

	/** H264 Settings */
	export interface H264SettingsFormProperties {
		AdaptiveQuantization: FormControl<H264AdaptiveQuantization | null | undefined>,
		AfdSignaling: FormControl<AfdSignaling | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		BufFillPct: FormControl<number | null | undefined>,
		BufSize: FormControl<number | null | undefined>,
		ColorMetadata: FormControl<H264ColorMetadata | null | undefined>,
		EntropyEncoding: FormControl<H264EntropyEncoding | null | undefined>,
		FixedAfd: FormControl<FixedAfd | null | undefined>,
		FlickerAq: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		ForceFieldPictures: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		FramerateControl: FormControl<H264FramerateControl | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		GopBReference: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		GopClosedCadence: FormControl<number | null | undefined>,
		GopNumBFrames: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		GopSizeUnits: FormControl<H264GopSizeUnits | null | undefined>,
		Level: FormControl<H264Level | null | undefined>,
		LookAheadRateControl: FormControl<H264LookAheadRateControl | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MinIInterval: FormControl<number | null | undefined>,
		NumRefFrames: FormControl<number | null | undefined>,
		ParControl: FormControl<H264FramerateControl | null | undefined>,
		ParDenominator: FormControl<number | null | undefined>,
		ParNumerator: FormControl<number | null | undefined>,
		Profile: FormControl<H264Profile | null | undefined>,
		QualityLevel: FormControl<H264QualityLevel | null | undefined>,
		QvbrQualityLevel: FormControl<number | null | undefined>,
		RateControlMode: FormControl<H264RateControlMode | null | undefined>,
		ScanType: FormControl<H264ScanType | null | undefined>,
		SceneChangeDetect: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		Slices: FormControl<number | null | undefined>,
		Softness: FormControl<number | null | undefined>,
		SpatialAq: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		SubgopLength: FormControl<H264SubGopLength | null | undefined>,
		Syntax: FormControl<H264Syntax | null | undefined>,
		TemporalAq: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		TimecodeInsertion: FormControl<H264TimecodeInsertionBehavior | null | undefined>,
	}
	export function CreateH264SettingsFormGroup() {
		return new FormGroup<H264SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<H264AdaptiveQuantization | null | undefined>(undefined),
			AfdSignaling: new FormControl<AfdSignaling | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BufFillPct: new FormControl<number | null | undefined>(undefined),
			BufSize: new FormControl<number | null | undefined>(undefined),
			ColorMetadata: new FormControl<H264ColorMetadata | null | undefined>(undefined),
			EntropyEncoding: new FormControl<H264EntropyEncoding | null | undefined>(undefined),
			FixedAfd: new FormControl<FixedAfd | null | undefined>(undefined),
			FlickerAq: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			ForceFieldPictures: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			FramerateControl: new FormControl<H264FramerateControl | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			GopBReference: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined),
			GopNumBFrames: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			GopSizeUnits: new FormControl<H264GopSizeUnits | null | undefined>(undefined),
			Level: new FormControl<H264Level | null | undefined>(undefined),
			LookAheadRateControl: new FormControl<H264LookAheadRateControl | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MinIInterval: new FormControl<number | null | undefined>(undefined),
			NumRefFrames: new FormControl<number | null | undefined>(undefined),
			ParControl: new FormControl<H264FramerateControl | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			Profile: new FormControl<H264Profile | null | undefined>(undefined),
			QualityLevel: new FormControl<H264QualityLevel | null | undefined>(undefined),
			QvbrQualityLevel: new FormControl<number | null | undefined>(undefined),
			RateControlMode: new FormControl<H264RateControlMode | null | undefined>(undefined),
			ScanType: new FormControl<H264ScanType | null | undefined>(undefined),
			SceneChangeDetect: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined),
			Softness: new FormControl<number | null | undefined>(undefined),
			SpatialAq: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			SubgopLength: new FormControl<H264SubGopLength | null | undefined>(undefined),
			Syntax: new FormControl<H264Syntax | null | undefined>(undefined),
			TemporalAq: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			TimecodeInsertion: new FormControl<H264TimecodeInsertionBehavior | null | undefined>(undefined),
		});

	}


	/** H264 Adaptive Quantization */
	export enum H264AdaptiveQuantization { AUTO = 0, HIGH = 1, HIGHER = 2, LOW = 3, MAX = 4, MEDIUM = 5, OFF = 6 }


	/** Afd Signaling */
	export enum AfdSignaling { AUTO = 0, FIXED = 1, NONE = 2 }


	/** H264 Color Metadata */
	export enum H264ColorMetadata { IGNORE = 0, INSERT = 1 }


	/** H264 Color Space Settings */
	export interface H264ColorSpaceSettings {
		ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
		Rec601Settings?: Rec601Settings;
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


	/** H264 Entropy Encoding */
	export enum H264EntropyEncoding { CABAC = 0, CAVLC = 1 }


	/** H264 Filter Settings */
	export interface H264FilterSettings {
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
		PostFilterSharpening?: TemporalFilterPostFilterSharpening;
		Strength?: TemporalFilterStrength;
	}

	/** Temporal Filter Settings */
	export interface TemporalFilterSettingsFormProperties {
		PostFilterSharpening: FormControl<TemporalFilterPostFilterSharpening | null | undefined>,
		Strength: FormControl<TemporalFilterStrength | null | undefined>,
	}
	export function CreateTemporalFilterSettingsFormGroup() {
		return new FormGroup<TemporalFilterSettingsFormProperties>({
			PostFilterSharpening: new FormControl<TemporalFilterPostFilterSharpening | null | undefined>(undefined),
			Strength: new FormControl<TemporalFilterStrength | null | undefined>(undefined),
		});

	}


	/** Temporal Filter Post Filter Sharpening */
	export enum TemporalFilterPostFilterSharpening { AUTO = 0, DISABLED = 1, ENABLED = 2 }


	/** Temporal Filter Strength */
	export enum TemporalFilterStrength { AUTO = 0, STRENGTH_1 = 1, STRENGTH_2 = 2, STRENGTH_3 = 3, STRENGTH_4 = 4, STRENGTH_5 = 5, STRENGTH_6 = 6, STRENGTH_7 = 7, STRENGTH_8 = 8, STRENGTH_9 = 9, STRENGTH_10 = 10, STRENGTH_11 = 11, STRENGTH_12 = 12, STRENGTH_13 = 13, STRENGTH_14 = 14, STRENGTH_15 = 15, STRENGTH_16 = 16 }


	/** Fixed Afd */
	export enum FixedAfd { AFD_0000 = 0, AFD_0010 = 1, AFD_0011 = 2, AFD_0100 = 3, AFD_1000 = 4, AFD_1001 = 5, AFD_1010 = 6, AFD_1011 = 7, AFD_1101 = 8, AFD_1110 = 9, AFD_1111 = 10 }


	/** H264 Framerate Control */
	export enum H264FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** H264 Gop Size Units */
	export enum H264GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/** H264 Level */
	export enum H264Level { H264_LEVEL_1 = 0, H264_LEVEL_1_1 = 1, H264_LEVEL_1_2 = 2, H264_LEVEL_1_3 = 3, H264_LEVEL_2 = 4, H264_LEVEL_2_1 = 5, H264_LEVEL_2_2 = 6, H264_LEVEL_3 = 7, H264_LEVEL_3_1 = 8, H264_LEVEL_3_2 = 9, H264_LEVEL_4 = 10, H264_LEVEL_4_1 = 11, H264_LEVEL_4_2 = 12, H264_LEVEL_5 = 13, H264_LEVEL_5_1 = 14, H264_LEVEL_5_2 = 15, H264_LEVEL_AUTO = 16 }


	/** H264 Look Ahead Rate Control */
	export enum H264LookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }


	/** H264 Profile */
	export enum H264Profile { BASELINE = 0, HIGH = 1, HIGH_10BIT = 2, HIGH_422 = 3, HIGH_422_10BIT = 4, MAIN = 5 }


	/** H264 Quality Level */
	export enum H264QualityLevel { ENHANCED_QUALITY = 0, STANDARD_QUALITY = 1 }


	/** H264 Rate Control Mode */
	export enum H264RateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2, VBR = 3 }


	/** H264 Scan Type */
	export enum H264ScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/** H264 Sub Gop Length */
	export enum H264SubGopLength { DYNAMIC = 0, FIXED = 1 }


	/** H264 Syntax */
	export enum H264Syntax { DEFAULT = 0, RP2027 = 1 }


	/** H264 Timecode Insertion Behavior */
	export enum H264TimecodeInsertionBehavior { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/** H265 Settings */
	export interface H265Settings {
		AdaptiveQuantization?: H264AdaptiveQuantization;
		AfdSignaling?: AfdSignaling;
		AlternativeTransferFunction?: H265AlternativeTransferFunction;
		Bitrate?: number | null;
		BufSize?: number | null;
		ColorMetadata?: H264ColorMetadata;
		ColorSpaceSettings?: H265ColorSpaceSettings;
		FilterSettings?: H265FilterSettings;
		FixedAfd?: FixedAfd;
		FlickerAq?: NielsenWatermarksCbetStepaside;

		/** Required */
		FramerateDenominator: number;

		/** Required */
		FramerateNumerator: number;
		GopClosedCadence?: number | null;
		GopSize?: number | null;
		GopSizeUnits?: H264GopSizeUnits;
		Level?: H265Level;
		LookAheadRateControl?: H264LookAheadRateControl;
		MaxBitrate?: number | null;
		MinIInterval?: number | null;
		ParDenominator?: number | null;
		ParNumerator?: number | null;
		Profile?: H265Profile;
		QvbrQualityLevel?: number | null;
		RateControlMode?: H265RateControlMode;
		ScanType?: H264ScanType;
		SceneChangeDetect?: NielsenWatermarksCbetStepaside;
		Slices?: number | null;
		Tier?: H265Tier;
		TimecodeInsertion?: H264TimecodeInsertionBehavior;
		TimecodeBurninSettings?: TimecodeBurninSettings;
	}

	/** H265 Settings */
	export interface H265SettingsFormProperties {
		AdaptiveQuantization: FormControl<H264AdaptiveQuantization | null | undefined>,
		AfdSignaling: FormControl<AfdSignaling | null | undefined>,
		AlternativeTransferFunction: FormControl<H265AlternativeTransferFunction | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		BufSize: FormControl<number | null | undefined>,
		ColorMetadata: FormControl<H264ColorMetadata | null | undefined>,
		FixedAfd: FormControl<FixedAfd | null | undefined>,
		FlickerAq: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,

		/** Required */
		FramerateDenominator: FormControl<number | null | undefined>,

		/** Required */
		FramerateNumerator: FormControl<number | null | undefined>,
		GopClosedCadence: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		GopSizeUnits: FormControl<H264GopSizeUnits | null | undefined>,
		Level: FormControl<H265Level | null | undefined>,
		LookAheadRateControl: FormControl<H264LookAheadRateControl | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MinIInterval: FormControl<number | null | undefined>,
		ParDenominator: FormControl<number | null | undefined>,
		ParNumerator: FormControl<number | null | undefined>,
		Profile: FormControl<H265Profile | null | undefined>,
		QvbrQualityLevel: FormControl<number | null | undefined>,
		RateControlMode: FormControl<H265RateControlMode | null | undefined>,
		ScanType: FormControl<H264ScanType | null | undefined>,
		SceneChangeDetect: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		Slices: FormControl<number | null | undefined>,
		Tier: FormControl<H265Tier | null | undefined>,
		TimecodeInsertion: FormControl<H264TimecodeInsertionBehavior | null | undefined>,
	}
	export function CreateH265SettingsFormGroup() {
		return new FormGroup<H265SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<H264AdaptiveQuantization | null | undefined>(undefined),
			AfdSignaling: new FormControl<AfdSignaling | null | undefined>(undefined),
			AlternativeTransferFunction: new FormControl<H265AlternativeTransferFunction | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BufSize: new FormControl<number | null | undefined>(undefined),
			ColorMetadata: new FormControl<H264ColorMetadata | null | undefined>(undefined),
			FixedAfd: new FormControl<FixedAfd | null | undefined>(undefined),
			FlickerAq: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			GopSizeUnits: new FormControl<H264GopSizeUnits | null | undefined>(undefined),
			Level: new FormControl<H265Level | null | undefined>(undefined),
			LookAheadRateControl: new FormControl<H264LookAheadRateControl | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MinIInterval: new FormControl<number | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			Profile: new FormControl<H265Profile | null | undefined>(undefined),
			QvbrQualityLevel: new FormControl<number | null | undefined>(undefined),
			RateControlMode: new FormControl<H265RateControlMode | null | undefined>(undefined),
			ScanType: new FormControl<H264ScanType | null | undefined>(undefined),
			SceneChangeDetect: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined),
			Tier: new FormControl<H265Tier | null | undefined>(undefined),
			TimecodeInsertion: new FormControl<H264TimecodeInsertionBehavior | null | undefined>(undefined),
		});

	}


	/** H265 Alternative Transfer Function */
	export enum H265AlternativeTransferFunction { INSERT = 0, OMIT = 1 }


	/** H265 Color Space Settings */
	export interface H265ColorSpaceSettings {
		ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
		DolbyVision81Settings?: DolbyVision81Settings;
		Hdr10Settings?: Hdr10Settings;
		Rec601Settings?: Rec601Settings;
		Rec709Settings?: Rec709Settings;
	}

	/** H265 Color Space Settings */
	export interface H265ColorSpaceSettingsFormProperties {
	}
	export function CreateH265ColorSpaceSettingsFormGroup() {
		return new FormGroup<H265ColorSpaceSettingsFormProperties>({
		});

	}


	/** Dolby Vision81 Settings */
	export interface DolbyVision81Settings {
	}

	/** Dolby Vision81 Settings */
	export interface DolbyVision81SettingsFormProperties {
	}
	export function CreateDolbyVision81SettingsFormGroup() {
		return new FormGroup<DolbyVision81SettingsFormProperties>({
		});

	}


	/** Hdr10 Settings */
	export interface Hdr10Settings {
		MaxCll?: number | null;
		MaxFall?: number | null;
	}

	/** Hdr10 Settings */
	export interface Hdr10SettingsFormProperties {
		MaxCll: FormControl<number | null | undefined>,
		MaxFall: FormControl<number | null | undefined>,
	}
	export function CreateHdr10SettingsFormGroup() {
		return new FormGroup<Hdr10SettingsFormProperties>({
			MaxCll: new FormControl<number | null | undefined>(undefined),
			MaxFall: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** H265 Filter Settings */
	export interface H265FilterSettings {
		TemporalFilterSettings?: TemporalFilterSettings;
	}

	/** H265 Filter Settings */
	export interface H265FilterSettingsFormProperties {
	}
	export function CreateH265FilterSettingsFormGroup() {
		return new FormGroup<H265FilterSettingsFormProperties>({
		});

	}


	/** H265 Level */
	export enum H265Level { H265_LEVEL_1 = 0, H265_LEVEL_2 = 1, H265_LEVEL_2_1 = 2, H265_LEVEL_3 = 3, H265_LEVEL_3_1 = 4, H265_LEVEL_4 = 5, H265_LEVEL_4_1 = 6, H265_LEVEL_5 = 7, H265_LEVEL_5_1 = 8, H265_LEVEL_5_2 = 9, H265_LEVEL_6 = 10, H265_LEVEL_6_1 = 11, H265_LEVEL_6_2 = 12, H265_LEVEL_AUTO = 13 }


	/** H265 Profile */
	export enum H265Profile { MAIN = 0, MAIN_10BIT = 1 }


	/** H265 Rate Control Mode */
	export enum H265RateControlMode { CBR = 0, MULTIPLEX = 1, QVBR = 2 }


	/** H265 Tier */
	export enum H265Tier { HIGH = 0, MAIN = 1 }


	/** Mpeg2 Settings */
	export interface Mpeg2Settings {
		AdaptiveQuantization?: Mpeg2AdaptiveQuantization;
		AfdSignaling?: AfdSignaling;
		ColorMetadata?: H264ColorMetadata;
		ColorSpace?: Mpeg2ColorSpace;
		DisplayAspectRatio?: Mpeg2DisplayRatio;
		FilterSettings?: Mpeg2FilterSettings;
		FixedAfd?: FixedAfd;

		/** Required */
		FramerateDenominator: number;

		/** Required */
		FramerateNumerator: number;
		GopClosedCadence?: number | null;
		GopNumBFrames?: number | null;
		GopSize?: number | null;
		GopSizeUnits?: H264GopSizeUnits;
		ScanType?: H264ScanType;
		SubgopLength?: H264SubGopLength;
		TimecodeInsertion?: Mpeg2TimecodeInsertionBehavior;
		TimecodeBurninSettings?: TimecodeBurninSettings;
	}

	/** Mpeg2 Settings */
	export interface Mpeg2SettingsFormProperties {
		AdaptiveQuantization: FormControl<Mpeg2AdaptiveQuantization | null | undefined>,
		AfdSignaling: FormControl<AfdSignaling | null | undefined>,
		ColorMetadata: FormControl<H264ColorMetadata | null | undefined>,
		ColorSpace: FormControl<Mpeg2ColorSpace | null | undefined>,
		DisplayAspectRatio: FormControl<Mpeg2DisplayRatio | null | undefined>,
		FixedAfd: FormControl<FixedAfd | null | undefined>,

		/** Required */
		FramerateDenominator: FormControl<number | null | undefined>,

		/** Required */
		FramerateNumerator: FormControl<number | null | undefined>,
		GopClosedCadence: FormControl<number | null | undefined>,
		GopNumBFrames: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		GopSizeUnits: FormControl<H264GopSizeUnits | null | undefined>,
		ScanType: FormControl<H264ScanType | null | undefined>,
		SubgopLength: FormControl<H264SubGopLength | null | undefined>,
		TimecodeInsertion: FormControl<Mpeg2TimecodeInsertionBehavior | null | undefined>,
	}
	export function CreateMpeg2SettingsFormGroup() {
		return new FormGroup<Mpeg2SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<Mpeg2AdaptiveQuantization | null | undefined>(undefined),
			AfdSignaling: new FormControl<AfdSignaling | null | undefined>(undefined),
			ColorMetadata: new FormControl<H264ColorMetadata | null | undefined>(undefined),
			ColorSpace: new FormControl<Mpeg2ColorSpace | null | undefined>(undefined),
			DisplayAspectRatio: new FormControl<Mpeg2DisplayRatio | null | undefined>(undefined),
			FixedAfd: new FormControl<FixedAfd | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined),
			GopNumBFrames: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			GopSizeUnits: new FormControl<H264GopSizeUnits | null | undefined>(undefined),
			ScanType: new FormControl<H264ScanType | null | undefined>(undefined),
			SubgopLength: new FormControl<H264SubGopLength | null | undefined>(undefined),
			TimecodeInsertion: new FormControl<Mpeg2TimecodeInsertionBehavior | null | undefined>(undefined),
		});

	}


	/** Mpeg2 Adaptive Quantization */
	export enum Mpeg2AdaptiveQuantization { AUTO = 0, HIGH = 1, LOW = 2, MEDIUM = 3, OFF = 4 }


	/** Mpeg2 Color Space */
	export enum Mpeg2ColorSpace { AUTO = 0, PASSTHROUGH = 1 }


	/** Mpeg2 Display Ratio */
	export enum Mpeg2DisplayRatio { DISPLAYRATIO16X9 = 0, DISPLAYRATIO4X3 = 1 }


	/** Mpeg2 Filter Settings */
	export interface Mpeg2FilterSettings {
		TemporalFilterSettings?: TemporalFilterSettings;
	}

	/** Mpeg2 Filter Settings */
	export interface Mpeg2FilterSettingsFormProperties {
	}
	export function CreateMpeg2FilterSettingsFormGroup() {
		return new FormGroup<Mpeg2FilterSettingsFormProperties>({
		});

	}


	/** Mpeg2 Timecode Insertion Behavior */
	export enum Mpeg2TimecodeInsertionBehavior { DISABLED = 0, GOP_TIMECODE = 1 }


	/** Video Description Respond To Afd */
	export enum VideoDescriptionRespondToAfd { NONE = 0, PASSTHROUGH = 1, RESPOND = 2 }


	/** Video Description Scaling Behavior */
	export enum VideoDescriptionScalingBehavior { DEFAULT = 0, STRETCH_TO_OUTPUT = 1 }


	/** Thumbnail Configuration */
	export interface ThumbnailConfiguration {

		/** Required */
		State: ThumbnailState;
	}

	/** Thumbnail Configuration */
	export interface ThumbnailConfigurationFormProperties {

		/** Required */
		State: FormControl<ThumbnailState | null | undefined>,
	}
	export function CreateThumbnailConfigurationFormGroup() {
		return new FormGroup<ThumbnailConfigurationFormProperties>({
			State: new FormControl<ThumbnailState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Thumbnail State */
	export enum ThumbnailState { AUTO = 0, DISABLED = 1 }


	/** Placeholder documentation for InputAttachment */
	export interface InputAttachment {
		AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;
		InputAttachmentName?: string;
		InputId?: string;
		InputSettings?: InputSettings;
	}

	/** Placeholder documentation for InputAttachment */
	export interface InputAttachmentFormProperties {
		InputAttachmentName: FormControl<string | null | undefined>,
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
		ErrorClearTimeMsec?: number | null;
		FailoverConditions?: Array<FailoverCondition>;
		InputPreference?: InputPreference;

		/** Required */
		SecondaryInputId: string;
	}

	/** The settings for Automatic Input Failover. */
	export interface AutomaticInputFailoverSettingsFormProperties {
		ErrorClearTimeMsec: FormControl<number | null | undefined>,
		InputPreference: FormControl<InputPreference | null | undefined>,

		/** Required */
		SecondaryInputId: FormControl<string | null | undefined>,
	}
	export function CreateAutomaticInputFailoverSettingsFormGroup() {
		return new FormGroup<AutomaticInputFailoverSettingsFormProperties>({
			ErrorClearTimeMsec: new FormControl<number | null | undefined>(undefined),
			InputPreference: new FormControl<InputPreference | null | undefined>(undefined),
			SecondaryInputId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings. */
	export interface FailoverCondition {
		FailoverConditionSettings?: FailoverConditionSettings;
	}

	/** Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings. */
	export interface FailoverConditionFormProperties {
	}
	export function CreateFailoverConditionFormGroup() {
		return new FormGroup<FailoverConditionFormProperties>({
		});

	}


	/** Settings for one failover condition. */
	export interface FailoverConditionSettings {
		AudioSilenceSettings?: AudioSilenceFailoverSettings;
		InputLossSettings?: InputLossFailoverSettings;
		VideoBlackSettings?: VideoBlackFailoverSettings;
	}

	/** Settings for one failover condition. */
	export interface FailoverConditionSettingsFormProperties {
	}
	export function CreateFailoverConditionSettingsFormGroup() {
		return new FormGroup<FailoverConditionSettingsFormProperties>({
		});

	}


	/** Placeholder documentation for AudioSilenceFailoverSettings */
	export interface AudioSilenceFailoverSettings {

		/** Required */
		AudioSelectorName: string;
		AudioSilenceThresholdMsec?: number | null;
	}

	/** Placeholder documentation for AudioSilenceFailoverSettings */
	export interface AudioSilenceFailoverSettingsFormProperties {

		/** Required */
		AudioSelectorName: FormControl<string | null | undefined>,
		AudioSilenceThresholdMsec: FormControl<number | null | undefined>,
	}
	export function CreateAudioSilenceFailoverSettingsFormGroup() {
		return new FormGroup<AudioSilenceFailoverSettingsFormProperties>({
			AudioSelectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AudioSilenceThresholdMsec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** MediaLive will perform a failover if content is not detected in this input for the specified period. */
	export interface InputLossFailoverSettings {
		InputLossThresholdMsec?: number | null;
	}

	/** MediaLive will perform a failover if content is not detected in this input for the specified period. */
	export interface InputLossFailoverSettingsFormProperties {
		InputLossThresholdMsec: FormControl<number | null | undefined>,
	}
	export function CreateInputLossFailoverSettingsFormGroup() {
		return new FormGroup<InputLossFailoverSettingsFormProperties>({
			InputLossThresholdMsec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for VideoBlackFailoverSettings */
	export interface VideoBlackFailoverSettings {
		BlackDetectThreshold?: number | null;
		VideoBlackThresholdMsec?: number | null;
	}

	/** Placeholder documentation for VideoBlackFailoverSettings */
	export interface VideoBlackFailoverSettingsFormProperties {
		BlackDetectThreshold: FormControl<number | null | undefined>,
		VideoBlackThresholdMsec: FormControl<number | null | undefined>,
	}
	export function CreateVideoBlackFailoverSettingsFormGroup() {
		return new FormGroup<VideoBlackFailoverSettingsFormProperties>({
			BlackDetectThreshold: new FormControl<number | null | undefined>(undefined),
			VideoBlackThresholdMsec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Input preference when deciding which input to make active when a previously failed input has recovered.
	 * If \"EQUAL_INPUT_PREFERENCE\", then the active input will stay active as long as it is healthy.
	 * If \"PRIMARY_INPUT_PREFERRED\", then always switch back to the primary input when it is healthy.
	 */
	export enum InputPreference { EQUAL_INPUT_PREFERENCE = 0, PRIMARY_INPUT_PREFERRED = 1 }


	/** Live Event input parameters. There can be multiple inputs in a single Live Event. */
	export interface InputSettings {
		AudioSelectors?: Array<AudioSelector>;
		CaptionSelectors?: Array<CaptionSelector>;
		DeblockFilter?: NielsenWatermarksCbetStepaside;
		DenoiseFilter?: NielsenWatermarksCbetStepaside;
		FilterStrength?: number | null;
		InputFilter?: InputFilter;
		NetworkInputSettings?: NetworkInputSettings;
		Scte35Pid?: number | null;
		Smpte2038DataPreference?: Smpte2038DataPreference;
		SourceEndBehavior?: InputSourceEndBehavior;
		VideoSelector?: VideoSelector;
	}

	/** Live Event input parameters. There can be multiple inputs in a single Live Event. */
	export interface InputSettingsFormProperties {
		DeblockFilter: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		DenoiseFilter: FormControl<NielsenWatermarksCbetStepaside | null | undefined>,
		FilterStrength: FormControl<number | null | undefined>,
		InputFilter: FormControl<InputFilter | null | undefined>,
		Scte35Pid: FormControl<number | null | undefined>,
		Smpte2038DataPreference: FormControl<Smpte2038DataPreference | null | undefined>,
		SourceEndBehavior: FormControl<InputSourceEndBehavior | null | undefined>,
	}
	export function CreateInputSettingsFormGroup() {
		return new FormGroup<InputSettingsFormProperties>({
			DeblockFilter: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			DenoiseFilter: new FormControl<NielsenWatermarksCbetStepaside | null | undefined>(undefined),
			FilterStrength: new FormControl<number | null | undefined>(undefined),
			InputFilter: new FormControl<InputFilter | null | undefined>(undefined),
			Scte35Pid: new FormControl<number | null | undefined>(undefined),
			Smpte2038DataPreference: new FormControl<Smpte2038DataPreference | null | undefined>(undefined),
			SourceEndBehavior: new FormControl<InputSourceEndBehavior | null | undefined>(undefined),
		});

	}


	/** Audio Selector */
	export interface AudioSelector {

		/** Required */
		Name: string;
		SelectorSettings?: AudioSelectorSettings;
	}

	/** Audio Selector */
	export interface AudioSelectorFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAudioSelectorFormGroup() {
		return new FormGroup<AudioSelectorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audio Selector Settings */
	export interface AudioSelectorSettings {
		AudioHlsRenditionSelection?: AudioHlsRenditionSelection;
		AudioLanguageSelection?: AudioLanguageSelection;
		AudioPidSelection?: AudioPidSelection;
		AudioTrackSelection?: AudioTrackSelection;
	}

	/** Audio Selector Settings */
	export interface AudioSelectorSettingsFormProperties {
	}
	export function CreateAudioSelectorSettingsFormGroup() {
		return new FormGroup<AudioSelectorSettingsFormProperties>({
		});

	}


	/** Audio Hls Rendition Selection */
	export interface AudioHlsRenditionSelection {

		/** Required */
		GroupId: string;

		/** Required */
		Name: string;
	}

	/** Audio Hls Rendition Selection */
	export interface AudioHlsRenditionSelectionFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAudioHlsRenditionSelectionFormGroup() {
		return new FormGroup<AudioHlsRenditionSelectionFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audio Language Selection */
	export interface AudioLanguageSelection {

		/** Required */
		LanguageCode: string;
		LanguageSelectionPolicy?: AudioLanguageSelectionPolicy;
	}

	/** Audio Language Selection */
	export interface AudioLanguageSelectionFormProperties {

		/** Required */
		LanguageCode: FormControl<string | null | undefined>,
		LanguageSelectionPolicy: FormControl<AudioLanguageSelectionPolicy | null | undefined>,
	}
	export function CreateAudioLanguageSelectionFormGroup() {
		return new FormGroup<AudioLanguageSelectionFormProperties>({
			LanguageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageSelectionPolicy: new FormControl<AudioLanguageSelectionPolicy | null | undefined>(undefined),
		});

	}


	/** Audio Language Selection Policy */
	export enum AudioLanguageSelectionPolicy { LOOSE = 0, STRICT = 1 }


	/** Audio Pid Selection */
	export interface AudioPidSelection {

		/** Required */
		Pid: number;
	}

	/** Audio Pid Selection */
	export interface AudioPidSelectionFormProperties {

		/** Required */
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateAudioPidSelectionFormGroup() {
		return new FormGroup<AudioPidSelectionFormProperties>({
			Pid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audio Track Selection */
	export interface AudioTrackSelection {

		/** Required */
		Tracks: Array<AudioTrack>;
		DolbyEDecode?: AudioDolbyEDecode;
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

		/** Required */
		Track: number;
	}

	/** Audio Track */
	export interface AudioTrackFormProperties {

		/** Required */
		Track: FormControl<number | null | undefined>,
	}
	export function CreateAudioTrackFormGroup() {
		return new FormGroup<AudioTrackFormProperties>({
			Track: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audio Dolby EDecode */
	export interface AudioDolbyEDecode {

		/** Required */
		ProgramSelection: DolbyEProgramSelection;
	}

	/** Audio Dolby EDecode */
	export interface AudioDolbyEDecodeFormProperties {

		/** Required */
		ProgramSelection: FormControl<DolbyEProgramSelection | null | undefined>,
	}
	export function CreateAudioDolbyEDecodeFormGroup() {
		return new FormGroup<AudioDolbyEDecodeFormProperties>({
			ProgramSelection: new FormControl<DolbyEProgramSelection | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Dolby EProgram Selection */
	export enum DolbyEProgramSelection { ALL_CHANNELS = 0, PROGRAM_1 = 1, PROGRAM_2 = 2, PROGRAM_3 = 3, PROGRAM_4 = 4, PROGRAM_5 = 5, PROGRAM_6 = 6, PROGRAM_7 = 7, PROGRAM_8 = 8 }


	/** Caption Selector */
	export interface CaptionSelector {
		LanguageCode?: string;

		/** Required */
		Name: string;
		SelectorSettings?: CaptionSelectorSettings;
	}

	/** Caption Selector */
	export interface CaptionSelectorFormProperties {
		LanguageCode: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCaptionSelectorFormGroup() {
		return new FormGroup<CaptionSelectorFormProperties>({
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Caption Selector Settings */
	export interface CaptionSelectorSettings {
		AncillarySourceSettings?: AncillarySourceSettings;
		AribSourceSettings?: AribSourceSettings;
		DvbSubSourceSettings?: DvbSubSourceSettings;
		EmbeddedSourceSettings?: EmbeddedSourceSettings;
		Scte20SourceSettings?: Scte20SourceSettings;
		Scte27SourceSettings?: Scte27SourceSettings;
		TeletextSourceSettings?: TeletextSourceSettings;
	}

	/** Caption Selector Settings */
	export interface CaptionSelectorSettingsFormProperties {
	}
	export function CreateCaptionSelectorSettingsFormGroup() {
		return new FormGroup<CaptionSelectorSettingsFormProperties>({
		});

	}


	/** Ancillary Source Settings */
	export interface AncillarySourceSettings {
		SourceAncillaryChannelNumber?: number | null;
	}

	/** Ancillary Source Settings */
	export interface AncillarySourceSettingsFormProperties {
		SourceAncillaryChannelNumber: FormControl<number | null | undefined>,
	}
	export function CreateAncillarySourceSettingsFormGroup() {
		return new FormGroup<AncillarySourceSettingsFormProperties>({
			SourceAncillaryChannelNumber: new FormControl<number | null | undefined>(undefined),
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
		OcrLanguage?: DvbSubOcrLanguage;
		Pid?: number | null;
	}

	/** Dvb Sub Source Settings */
	export interface DvbSubSourceSettingsFormProperties {
		OcrLanguage: FormControl<DvbSubOcrLanguage | null | undefined>,
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateDvbSubSourceSettingsFormGroup() {
		return new FormGroup<DvbSubSourceSettingsFormProperties>({
			OcrLanguage: new FormControl<DvbSubOcrLanguage | null | undefined>(undefined),
			Pid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Dvb Sub Ocr Language */
	export enum DvbSubOcrLanguage { DEU = 0, ENG = 1, FRA = 2, NLD = 3, POR = 4, SPA = 5 }


	/** Embedded Source Settings */
	export interface EmbeddedSourceSettings {
		Convert608To708?: EmbeddedConvert608To708;
		Scte20Detection?: EmbeddedScte20Detection;
		Source608ChannelNumber?: number | null;
		Source608TrackNumber?: number | null;
	}

	/** Embedded Source Settings */
	export interface EmbeddedSourceSettingsFormProperties {
		Convert608To708: FormControl<EmbeddedConvert608To708 | null | undefined>,
		Scte20Detection: FormControl<EmbeddedScte20Detection | null | undefined>,
		Source608ChannelNumber: FormControl<number | null | undefined>,
		Source608TrackNumber: FormControl<number | null | undefined>,
	}
	export function CreateEmbeddedSourceSettingsFormGroup() {
		return new FormGroup<EmbeddedSourceSettingsFormProperties>({
			Convert608To708: new FormControl<EmbeddedConvert608To708 | null | undefined>(undefined),
			Scte20Detection: new FormControl<EmbeddedScte20Detection | null | undefined>(undefined),
			Source608ChannelNumber: new FormControl<number | null | undefined>(undefined),
			Source608TrackNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Embedded Convert608 To708 */
	export enum EmbeddedConvert608To708 { DISABLED = 0, UPCONVERT = 1 }


	/** Embedded Scte20 Detection */
	export enum EmbeddedScte20Detection { AUTO = 0, OFF = 1 }


	/** Scte20 Source Settings */
	export interface Scte20SourceSettings {
		Convert608To708?: EmbeddedConvert608To708;
		Source608ChannelNumber?: number | null;
	}

	/** Scte20 Source Settings */
	export interface Scte20SourceSettingsFormProperties {
		Convert608To708: FormControl<EmbeddedConvert608To708 | null | undefined>,
		Source608ChannelNumber: FormControl<number | null | undefined>,
	}
	export function CreateScte20SourceSettingsFormGroup() {
		return new FormGroup<Scte20SourceSettingsFormProperties>({
			Convert608To708: new FormControl<EmbeddedConvert608To708 | null | undefined>(undefined),
			Source608ChannelNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Scte27 Source Settings */
	export interface Scte27SourceSettings {
		OcrLanguage?: DvbSubOcrLanguage;
		Pid?: number | null;
	}

	/** Scte27 Source Settings */
	export interface Scte27SourceSettingsFormProperties {
		OcrLanguage: FormControl<DvbSubOcrLanguage | null | undefined>,
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateScte27SourceSettingsFormGroup() {
		return new FormGroup<Scte27SourceSettingsFormProperties>({
			OcrLanguage: new FormControl<DvbSubOcrLanguage | null | undefined>(undefined),
			Pid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Teletext Source Settings */
	export interface TeletextSourceSettings {
		OutputRectangle?: CaptionRectangle;
		PageNumber?: string;
	}

	/** Teletext Source Settings */
	export interface TeletextSourceSettingsFormProperties {
		PageNumber: FormControl<string | null | undefined>,
	}
	export function CreateTeletextSourceSettingsFormGroup() {
		return new FormGroup<TeletextSourceSettingsFormProperties>({
			PageNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Caption Rectangle */
	export interface CaptionRectangle {

		/** Required */
		Height: number;

		/** Required */
		LeftOffset: number;

		/** Required */
		TopOffset: number;

		/** Required */
		Width: number;
	}

	/** Caption Rectangle */
	export interface CaptionRectangleFormProperties {

		/** Required */
		Height: FormControl<number | null | undefined>,

		/** Required */
		LeftOffset: FormControl<number | null | undefined>,

		/** Required */
		TopOffset: FormControl<number | null | undefined>,

		/** Required */
		Width: FormControl<number | null | undefined>,
	}
	export function CreateCaptionRectangleFormGroup() {
		return new FormGroup<CaptionRectangleFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			LeftOffset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TopOffset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input Filter */
	export enum InputFilter { AUTO = 0, DISABLED = 1, FORCED = 2 }


	/** Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection. */
	export interface NetworkInputSettings {
		HlsInputSettings?: HlsInputSettings;
		ServerValidation?: NetworkInputServerValidation;
	}

	/** Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection. */
	export interface NetworkInputSettingsFormProperties {
		ServerValidation: FormControl<NetworkInputServerValidation | null | undefined>,
	}
	export function CreateNetworkInputSettingsFormGroup() {
		return new FormGroup<NetworkInputSettingsFormProperties>({
			ServerValidation: new FormControl<NetworkInputServerValidation | null | undefined>(undefined),
		});

	}


	/** Hls Input Settings */
	export interface HlsInputSettings {
		Bandwidth?: number | null;
		BufferSegments?: number | null;
		Retries?: number | null;
		RetryInterval?: number | null;
		Scte35Source?: HlsScte35SourceType;
	}

	/** Hls Input Settings */
	export interface HlsInputSettingsFormProperties {
		Bandwidth: FormControl<number | null | undefined>,
		BufferSegments: FormControl<number | null | undefined>,
		Retries: FormControl<number | null | undefined>,
		RetryInterval: FormControl<number | null | undefined>,
		Scte35Source: FormControl<HlsScte35SourceType | null | undefined>,
	}
	export function CreateHlsInputSettingsFormGroup() {
		return new FormGroup<HlsInputSettingsFormProperties>({
			Bandwidth: new FormControl<number | null | undefined>(undefined),
			BufferSegments: new FormControl<number | null | undefined>(undefined),
			Retries: new FormControl<number | null | undefined>(undefined),
			RetryInterval: new FormControl<number | null | undefined>(undefined),
			Scte35Source: new FormControl<HlsScte35SourceType | null | undefined>(undefined),
		});

	}


	/** Hls Scte35 Source Type */
	export enum HlsScte35SourceType { MANIFEST = 0, SEGMENTS = 1 }


	/** Network Input Server Validation */
	export enum NetworkInputServerValidation { CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME = 0, CHECK_CRYPTOGRAPHY_ONLY = 1 }


	/** Smpte2038 Data Preference */
	export enum Smpte2038DataPreference { IGNORE = 0, PREFER = 1 }


	/** Input Source End Behavior */
	export enum InputSourceEndBehavior { CONTINUE = 0, LOOP = 1 }


	/** Specifies a particular video stream within an input source. An input may have only a single video selector. */
	export interface VideoSelector {
		ColorSpace?: VideoSelectorColorSpace;
		ColorSpaceSettings?: VideoSelectorColorSpaceSettings;
		ColorSpaceUsage?: VideoSelectorColorSpaceUsage;
		SelectorSettings?: VideoSelectorSettings;
	}

	/** Specifies a particular video stream within an input source. An input may have only a single video selector. */
	export interface VideoSelectorFormProperties {
		ColorSpace: FormControl<VideoSelectorColorSpace | null | undefined>,
		ColorSpaceUsage: FormControl<VideoSelectorColorSpaceUsage | null | undefined>,
	}
	export function CreateVideoSelectorFormGroup() {
		return new FormGroup<VideoSelectorFormProperties>({
			ColorSpace: new FormControl<VideoSelectorColorSpace | null | undefined>(undefined),
			ColorSpaceUsage: new FormControl<VideoSelectorColorSpaceUsage | null | undefined>(undefined),
		});

	}


	/** Video Selector Color Space */
	export enum VideoSelectorColorSpace { FOLLOW = 0, HDR10 = 1, HLG_2020 = 2, REC_601 = 3, REC_709 = 4 }


	/** Video Selector Color Space Settings */
	export interface VideoSelectorColorSpaceSettings {
		Hdr10Settings?: Hdr10Settings;
	}

	/** Video Selector Color Space Settings */
	export interface VideoSelectorColorSpaceSettingsFormProperties {
	}
	export function CreateVideoSelectorColorSpaceSettingsFormGroup() {
		return new FormGroup<VideoSelectorColorSpaceSettingsFormProperties>({
		});

	}


	/** Video Selector Color Space Usage */
	export enum VideoSelectorColorSpaceUsage { FALLBACK = 0, FORCE = 1 }


	/** Video Selector Settings */
	export interface VideoSelectorSettings {
		VideoSelectorPid?: VideoSelectorPid;
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
		Pid?: number | null;
	}

	/** Video Selector Pid */
	export interface VideoSelectorPidFormProperties {
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateVideoSelectorPidFormGroup() {
		return new FormGroup<VideoSelectorPidFormProperties>({
			Pid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video Selector Program Id */
	export interface VideoSelectorProgramId {
		ProgramId?: number | null;
	}

	/** Video Selector Program Id */
	export interface VideoSelectorProgramIdFormProperties {
		ProgramId: FormControl<number | null | undefined>,
	}
	export function CreateVideoSelectorProgramIdFormGroup() {
		return new FormGroup<VideoSelectorProgramIdFormProperties>({
			ProgramId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for InputSpecification */
	export interface InputSpecification {
		Codec?: InputCodec;
		MaximumBitrate?: InputMaximumBitrate;
		Resolution?: InputResolution;
	}

	/** Placeholder documentation for InputSpecification */
	export interface InputSpecificationFormProperties {
		Codec: FormControl<InputCodec | null | undefined>,
		MaximumBitrate: FormControl<InputMaximumBitrate | null | undefined>,
		Resolution: FormControl<InputResolution | null | undefined>,
	}
	export function CreateInputSpecificationFormGroup() {
		return new FormGroup<InputSpecificationFormProperties>({
			Codec: new FormControl<InputCodec | null | undefined>(undefined),
			MaximumBitrate: new FormControl<InputMaximumBitrate | null | undefined>(undefined),
			Resolution: new FormControl<InputResolution | null | undefined>(undefined),
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


	/** The log level the user wants for their channel. */
	export enum LogLevel { ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3, DISABLED = 4 }


	/** Placeholder documentation for MaintenanceStatus */
	export interface MaintenanceStatus {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceDeadline?: string;
		MaintenanceScheduledDate?: string;
		MaintenanceStartTime?: string;
	}

	/** Placeholder documentation for MaintenanceStatus */
	export interface MaintenanceStatusFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceDeadline: FormControl<string | null | undefined>,
		MaintenanceScheduledDate: FormControl<string | null | undefined>,
		MaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceStatusFormGroup() {
		return new FormGroup<MaintenanceStatusFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceDeadline: new FormControl<string | null | undefined>(undefined),
			MaintenanceScheduledDate: new FormControl<string | null | undefined>(undefined),
			MaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The currently selected maintenance day. */
	export enum MaintenanceDay { MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, THURSDAY = 3, FRIDAY = 4, SATURDAY = 5, SUNDAY = 6 }


	/** Runtime details of a pipeline when a channel is running. */
	export interface PipelineDetail {
		ActiveInputAttachmentName?: string;
		ActiveInputSwitchActionName?: string;
		ActiveMotionGraphicsActionName?: string;
		ActiveMotionGraphicsUri?: string;
		PipelineId?: string;
	}

	/** Runtime details of a pipeline when a channel is running. */
	export interface PipelineDetailFormProperties {
		ActiveInputAttachmentName: FormControl<string | null | undefined>,
		ActiveInputSwitchActionName: FormControl<string | null | undefined>,
		ActiveMotionGraphicsActionName: FormControl<string | null | undefined>,
		ActiveMotionGraphicsUri: FormControl<string | null | undefined>,
		PipelineId: FormControl<string | null | undefined>,
	}
	export function CreatePipelineDetailFormGroup() {
		return new FormGroup<PipelineDetailFormProperties>({
			ActiveInputAttachmentName: new FormControl<string | null | undefined>(undefined),
			ActiveInputSwitchActionName: new FormControl<string | null | undefined>(undefined),
			ActiveMotionGraphicsActionName: new FormControl<string | null | undefined>(undefined),
			ActiveMotionGraphicsUri: new FormControl<string | null | undefined>(undefined),
			PipelineId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ChannelState */
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


	/**
	 * The properties for a private VPC Output
	 */
	export interface VpcOutputSettingsDescription {
		AvailabilityZones?: Array<string>;
		NetworkInterfaceIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
	}

	/**
	 * The properties for a private VPC Output
	 */
	export interface VpcOutputSettingsDescriptionFormProperties {
	}
	export function CreateVpcOutputSettingsDescriptionFormGroup() {
		return new FormGroup<VpcOutputSettingsDescriptionFormProperties>({
		});

	}


	/** Placeholder documentation for CreateInputResponse */
	export interface CreateInputResponse {
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
		Arn?: string;
		AttachedChannels?: Array<string>;
		Destinations?: Array<InputDestination>;
		Id?: string;
		InputClass?: ChannelClass;
		InputDevices?: Array<InputDeviceSettings>;
		InputPartnerIds?: Array<string>;
		InputSourceType?: InputSourceType;
		MediaConnectFlows?: Array<MediaConnectFlow>;
		Name?: string;
		RoleArn?: string;
		SecurityGroups?: Array<string>;
		Sources?: Array<InputSource>;
		State?: InputState;
		Tags?: Tags;
		Type?: InputType;
	}

	/** Placeholder documentation for Input */
	export interface InputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		InputClass: FormControl<ChannelClass | null | undefined>,
		InputSourceType: FormControl<InputSourceType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<InputState | null | undefined>,
		Type: FormControl<InputType | null | undefined>,
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InputClass: new FormControl<ChannelClass | null | undefined>(undefined),
			InputSourceType: new FormControl<InputSourceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InputState | null | undefined>(undefined),
			Type: new FormControl<InputType | null | undefined>(undefined),
		});

	}


	/** The settings for a PUSH type input. */
	export interface InputDestination {
		Ip?: string;
		Port?: string;
		Url?: string;
		Vpc?: InputDestinationVpc;
	}

	/** The settings for a PUSH type input. */
	export interface InputDestinationFormProperties {
		Ip: FormControl<string | null | undefined>,
		Port: FormControl<string | null | undefined>,
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
		AvailabilityZone?: string;
		NetworkInterfaceId?: string;
	}

	/** The properties for a VPC type input destination. */
	export interface InputDestinationVpcFormProperties {
		AvailabilityZone: FormControl<string | null | undefined>,
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
		Id?: string;
	}

	/** Settings for an input device. */
	export interface InputDeviceSettingsFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInputDeviceSettingsFormGroup() {
		return new FormGroup<InputDeviceSettingsFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * There are two types of input sources, static and dynamic. If an input source is dynamic you can
	 * change the source url of the input dynamically using an input switch action. Currently, two input types
	 * support a dynamic url at this time, MP4_FILE and TS_FILE. By default all input sources are static.
	 */
	export enum InputSourceType { STATIC = 0, DYNAMIC = 1 }


	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlow {
		FlowArn?: string;
	}

	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlowFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaConnectFlowFormGroup() {
		return new FormGroup<MediaConnectFlowFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for a PULL type input. */
	export interface InputSource {
		PasswordParam?: string;
		Url?: string;
		Username?: string;
	}

	/** The settings for a PULL type input. */
	export interface InputSourceFormProperties {
		PasswordParam: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateInputSourceFormGroup() {
		return new FormGroup<InputSourceFormProperties>({
			PasswordParam: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for InputState */
	export enum InputState { CREATING = 0, DETACHED = 1, ATTACHED = 2, DELETING = 3, DELETED = 4 }


	/** The different types of inputs that AWS Elemental MediaLive supports. */
	export enum InputType { UDP_PUSH = 0, RTP_PUSH = 1, RTMP_PUSH = 2, RTMP_PULL = 3, URL_PULL = 4, MP4_FILE = 5, MEDIACONNECT = 6, INPUT_DEVICE = 7, AWS_CDI = 8, TS_FILE = 9 }


	/** Endpoint settings for a PUSH type input. */
	export interface InputDestinationRequest {
		StreamName?: string;
	}

	/** Endpoint settings for a PUSH type input. */
	export interface InputDestinationRequestFormProperties {
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateInputDestinationRequestFormGroup() {
		return new FormGroup<InputDestinationRequestFormProperties>({
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlowRequest {
		FlowArn?: string;
	}

	/** The settings for a MediaConnect Flow. */
	export interface MediaConnectFlowRequestFormProperties {
		FlowArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaConnectFlowRequestFormGroup() {
		return new FormGroup<MediaConnectFlowRequestFormProperties>({
			FlowArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for for a PULL type input. */
	export interface InputSourceRequest {
		PasswordParam?: string;
		Url?: string;
		Username?: string;
	}

	/** Settings for for a PULL type input. */
	export interface InputSourceRequestFormProperties {
		PasswordParam: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
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
		Arn?: string;
		Id?: string;
		Inputs?: Array<string>;
		State?: InputSecurityGroupState;
		Tags?: Tags;
		WhitelistRules?: Array<InputWhitelistRule>;
	}

	/** An Input Security Group */
	export interface InputSecurityGroupFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		State: FormControl<InputSecurityGroupState | null | undefined>,
	}
	export function CreateInputSecurityGroupFormGroup() {
		return new FormGroup<InputSecurityGroupFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InputSecurityGroupState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for InputSecurityGroupState */
	export enum InputSecurityGroupState { IDLE = 0, IN_USE = 1, UPDATING = 2, DELETED = 3 }


	/** Whitelist rule */
	export interface InputWhitelistRule {
		Cidr?: string;
	}

	/** Whitelist rule */
	export interface InputWhitelistRuleFormProperties {
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateInputWhitelistRuleFormGroup() {
		return new FormGroup<InputWhitelistRuleFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An IPv4 CIDR to whitelist. */
	export interface InputWhitelistRuleCidr {
		Cidr?: string;
	}

	/** An IPv4 CIDR to whitelist. */
	export interface InputWhitelistRuleCidrFormProperties {
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateInputWhitelistRuleCidrFormGroup() {
		return new FormGroup<InputWhitelistRuleCidrFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for CreateMultiplexResponse */
	export interface CreateMultiplexResponse {
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
		Arn?: string;
		AvailabilityZones?: Array<string>;
		Destinations?: Array<MultiplexOutputDestination>;
		Id?: string;
		MultiplexSettings?: MultiplexSettings;
		Name?: string;
		PipelinesRunningCount?: number | null;
		ProgramCount?: number | null;
		State?: MultiplexState;
		Tags?: Tags;
	}

	/** The multiplex object. */
	export interface MultiplexFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		ProgramCount: FormControl<number | null | undefined>,
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
		EntitlementArn?: string;
	}

	/** Multiplex MediaConnect output destination settings. */
	export interface MultiplexMediaConnectOutputDestinationSettingsFormProperties {
		EntitlementArn: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexMediaConnectOutputDestinationSettingsFormGroup() {
		return new FormGroup<MultiplexMediaConnectOutputDestinationSettingsFormProperties>({
			EntitlementArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains configuration for a Multiplex event */
	export interface MultiplexSettings {
		MaximumVideoBufferDelayMilliseconds?: number | null;

		/** Required */
		TransportStreamBitrate: number;

		/** Required */
		TransportStreamId: number;
		TransportStreamReservedBitrate?: number | null;
	}

	/** Contains configuration for a Multiplex event */
	export interface MultiplexSettingsFormProperties {
		MaximumVideoBufferDelayMilliseconds: FormControl<number | null | undefined>,

		/** Required */
		TransportStreamBitrate: FormControl<number | null | undefined>,

		/** Required */
		TransportStreamId: FormControl<number | null | undefined>,
		TransportStreamReservedBitrate: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexSettingsFormGroup() {
		return new FormGroup<MultiplexSettingsFormProperties>({
			MaximumVideoBufferDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			TransportStreamBitrate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TransportStreamId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TransportStreamReservedBitrate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The current state of the multiplex. */
	export enum MultiplexState { CREATING = 0, CREATE_FAILED = 1, IDLE = 2, STARTING = 3, RUNNING = 4, RECOVERING = 5, STOPPING = 6, DELETING = 7, DELETED = 8 }


	/** Placeholder documentation for CreateMultiplexProgramResponse */
	export interface CreateMultiplexProgramResponse {
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
		ChannelId?: string;
		MultiplexProgramSettings?: MultiplexProgramSettings;
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
		PipelineDetails?: Array<MultiplexProgramPipelineDetail>;
		ProgramName?: string;
	}

	/** The multiplex program object. */
	export interface MultiplexProgramFormProperties {
		ChannelId: FormControl<string | null | undefined>,
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
		PreferredChannelPipeline?: PreferredChannelPipeline;

		/** Required */
		ProgramNumber: number;
		ServiceDescriptor?: MultiplexProgramServiceDescriptor;
		VideoSettings?: MultiplexVideoSettings;
	}

	/** Multiplex Program settings configuration. */
	export interface MultiplexProgramSettingsFormProperties {
		PreferredChannelPipeline: FormControl<PreferredChannelPipeline | null | undefined>,

		/** Required */
		ProgramNumber: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexProgramSettingsFormGroup() {
		return new FormGroup<MultiplexProgramSettingsFormProperties>({
			PreferredChannelPipeline: new FormControl<PreferredChannelPipeline | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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


	/** Transport stream service descriptor configuration for the Multiplex program. */
	export interface MultiplexProgramServiceDescriptor {

		/** Required */
		ProviderName: string;

		/** Required */
		ServiceName: string;
	}

	/** Transport stream service descriptor configuration for the Multiplex program. */
	export interface MultiplexProgramServiceDescriptorFormProperties {

		/** Required */
		ProviderName: FormControl<string | null | undefined>,

		/** Required */
		ServiceName: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexProgramServiceDescriptorFormGroup() {
		return new FormGroup<MultiplexProgramServiceDescriptorFormProperties>({
			ProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The video configuration for each program in a multiplex. */
	export interface MultiplexVideoSettings {
		ConstantBitrate?: number | null;
		StatmuxSettings?: MultiplexStatmuxVideoSettings;
	}

	/** The video configuration for each program in a multiplex. */
	export interface MultiplexVideoSettingsFormProperties {
		ConstantBitrate: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexVideoSettingsFormGroup() {
		return new FormGroup<MultiplexVideoSettingsFormProperties>({
			ConstantBitrate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statmux rate control settings */
	export interface MultiplexStatmuxVideoSettings {
		MaximumBitrate?: number | null;
		MinimumBitrate?: number | null;
		Priority?: number | null;
	}

	/** Statmux rate control settings */
	export interface MultiplexStatmuxVideoSettingsFormProperties {
		MaximumBitrate: FormControl<number | null | undefined>,
		MinimumBitrate: FormControl<number | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexStatmuxVideoSettingsFormGroup() {
		return new FormGroup<MultiplexStatmuxVideoSettingsFormProperties>({
			MaximumBitrate: new FormControl<number | null | undefined>(undefined),
			MinimumBitrate: new FormControl<number | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Packet identifiers map for a given Multiplex program. */
	export interface MultiplexProgramPacketIdentifiersMap {
		AudioPids?: Array<number> | null;
		DvbSubPids?: Array<number> | null;
		DvbTeletextPid?: number | null;
		EtvPlatformPid?: number | null;
		EtvSignalPid?: number | null;
		KlvDataPids?: Array<number> | null;
		PcrPid?: number | null;
		PmtPid?: number | null;
		PrivateMetadataPid?: number | null;
		Scte27Pids?: Array<number> | null;
		Scte35Pid?: number | null;
		TimedMetadataPid?: number | null;
		VideoPid?: number | null;
	}

	/** Packet identifiers map for a given Multiplex program. */
	export interface MultiplexProgramPacketIdentifiersMapFormProperties {
		DvbTeletextPid: FormControl<number | null | undefined>,
		EtvPlatformPid: FormControl<number | null | undefined>,
		EtvSignalPid: FormControl<number | null | undefined>,
		PcrPid: FormControl<number | null | undefined>,
		PmtPid: FormControl<number | null | undefined>,
		PrivateMetadataPid: FormControl<number | null | undefined>,
		Scte35Pid: FormControl<number | null | undefined>,
		TimedMetadataPid: FormControl<number | null | undefined>,
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


	/** The current source for one of the pipelines in the multiplex. */
	export interface MultiplexProgramPipelineDetail {
		ActiveChannelPipeline?: string;
		PipelineId?: string;
	}

	/** The current source for one of the pipelines in the multiplex. */
	export interface MultiplexProgramPipelineDetailFormProperties {
		ActiveChannelPipeline: FormControl<string | null | undefined>,
		PipelineId: FormControl<string | null | undefined>,
	}
	export function CreateMultiplexProgramPipelineDetailFormGroup() {
		return new FormGroup<MultiplexProgramPipelineDetailFormProperties>({
			ActiveChannelPipeline: new FormControl<string | null | undefined>(undefined),
			PipelineId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for CreatePartnerInputResponse */
	export interface CreatePartnerInputResponse {
		Input?: Input;
	}

	/** Placeholder documentation for CreatePartnerInputResponse */
	export interface CreatePartnerInputResponseFormProperties {
	}
	export function CreateCreatePartnerInputResponseFormGroup() {
		return new FormGroup<CreatePartnerInputResponseFormProperties>({
		});

	}


	/** Placeholder documentation for DeleteChannelResponse */
	export interface DeleteChannelResponse {
		Arn?: string;
		CdiInputSpecification?: CdiInputSpecification;
		ChannelClass?: ChannelClass;
		Destinations?: Array<OutputDestination>;
		EgressEndpoints?: Array<ChannelEgressEndpoint>;
		EncoderSettings?: EncoderSettings;
		Id?: string;
		InputAttachments?: Array<InputAttachment>;
		InputSpecification?: InputSpecification;
		LogLevel?: LogLevel;
		Maintenance?: MaintenanceStatus;
		Name?: string;
		PipelineDetails?: Array<PipelineDetail>;
		PipelinesRunningCount?: number | null;
		RoleArn?: string;
		State?: ChannelState;
		Tags?: Tags;
		Vpc?: VpcOutputSettingsDescription;
	}

	/** Placeholder documentation for DeleteChannelResponse */
	export interface DeleteChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelClass: FormControl<ChannelClass | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateDeleteChannelResponseFormGroup() {
		return new FormGroup<DeleteChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
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
		Arn?: string;
		AvailabilityZones?: Array<string>;
		Destinations?: Array<MultiplexOutputDestination>;
		Id?: string;
		MultiplexSettings?: MultiplexSettings;
		Name?: string;
		PipelinesRunningCount?: number | null;
		ProgramCount?: number | null;
		State?: MultiplexState;
		Tags?: Tags;
	}

	/** Placeholder documentation for DeleteMultiplexResponse */
	export interface DeleteMultiplexResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		ProgramCount: FormControl<number | null | undefined>,
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
		ChannelId?: string;
		MultiplexProgramSettings?: MultiplexProgramSettings;
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
		PipelineDetails?: Array<MultiplexProgramPipelineDetail>;
		ProgramName?: string;
	}

	/** Placeholder documentation for DeleteMultiplexProgramResponse */
	export interface DeleteMultiplexProgramResponseFormProperties {
		ChannelId: FormControl<string | null | undefined>,
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
		Arn?: string;
		Count?: number | null;
		CurrencyCode?: string;
		Duration?: number | null;
		DurationUnits?: OfferingDurationUnits;
		End?: string;
		FixedPrice?: number | null;
		Name?: string;
		OfferingDescription?: string;
		OfferingId?: string;
		OfferingType?: OfferingType;
		Region?: string;
		RenewalSettings?: RenewalSettings;
		ReservationId?: string;
		ResourceSpecification?: ReservationResourceSpecification;
		Start?: string;
		State?: ReservationState;
		Tags?: Tags;
		UsagePrice?: number | null;
	}

	/** Placeholder documentation for DeleteReservationResponse */
	export interface DeleteReservationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Count: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		DurationUnits: FormControl<OfferingDurationUnits | null | undefined>,
		End: FormControl<string | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OfferingDescription: FormControl<string | null | undefined>,
		OfferingId: FormControl<string | null | undefined>,
		OfferingType: FormControl<OfferingType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ReservationId: FormControl<string | null | undefined>,
		Start: FormControl<string | null | undefined>,
		State: FormControl<ReservationState | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateDeleteReservationResponseFormGroup() {
		return new FormGroup<DeleteReservationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<OfferingDurationUnits | null | undefined>(undefined),
			End: new FormControl<string | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<OfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ReservationId: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReservationState | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Units for duration, e.g. 'MONTHS' */
	export enum OfferingDurationUnits { MONTHS = 0 }


	/** Offering type, e.g. 'NO_UPFRONT' */
	export enum OfferingType { NO_UPFRONT = 0 }


	/** The Renewal settings for Reservations */
	export interface RenewalSettings {
		AutomaticRenewal?: ReservationAutomaticRenewal;
		RenewalCount?: number | null;
	}

	/** The Renewal settings for Reservations */
	export interface RenewalSettingsFormProperties {
		AutomaticRenewal: FormControl<ReservationAutomaticRenewal | null | undefined>,
		RenewalCount: FormControl<number | null | undefined>,
	}
	export function CreateRenewalSettingsFormGroup() {
		return new FormGroup<RenewalSettingsFormProperties>({
			AutomaticRenewal: new FormControl<ReservationAutomaticRenewal | null | undefined>(undefined),
			RenewalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Automatic Renewal Status for Reservation */
	export enum ReservationAutomaticRenewal { DISABLED = 0, ENABLED = 1, UNAVAILABLE = 2 }


	/** Resource configuration (codec, resolution, bitrate, ...) */
	export interface ReservationResourceSpecification {
		ChannelClass?: ChannelClass;
		Codec?: ReservationCodec;
		MaximumBitrate?: InputMaximumBitrate;
		MaximumFramerate?: ReservationMaximumFramerate;
		Resolution?: CdiInputResolution;
		ResourceType?: ReservationResourceType;
		SpecialFeature?: ReservationSpecialFeature;
		VideoQuality?: ReservationVideoQuality;
	}

	/** Resource configuration (codec, resolution, bitrate, ...) */
	export interface ReservationResourceSpecificationFormProperties {
		ChannelClass: FormControl<ChannelClass | null | undefined>,
		Codec: FormControl<ReservationCodec | null | undefined>,
		MaximumBitrate: FormControl<InputMaximumBitrate | null | undefined>,
		MaximumFramerate: FormControl<ReservationMaximumFramerate | null | undefined>,
		Resolution: FormControl<CdiInputResolution | null | undefined>,
		ResourceType: FormControl<ReservationResourceType | null | undefined>,
		SpecialFeature: FormControl<ReservationSpecialFeature | null | undefined>,
		VideoQuality: FormControl<ReservationVideoQuality | null | undefined>,
	}
	export function CreateReservationResourceSpecificationFormGroup() {
		return new FormGroup<ReservationResourceSpecificationFormProperties>({
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			Codec: new FormControl<ReservationCodec | null | undefined>(undefined),
			MaximumBitrate: new FormControl<InputMaximumBitrate | null | undefined>(undefined),
			MaximumFramerate: new FormControl<ReservationMaximumFramerate | null | undefined>(undefined),
			Resolution: new FormControl<CdiInputResolution | null | undefined>(undefined),
			ResourceType: new FormControl<ReservationResourceType | null | undefined>(undefined),
			SpecialFeature: new FormControl<ReservationSpecialFeature | null | undefined>(undefined),
			VideoQuality: new FormControl<ReservationVideoQuality | null | undefined>(undefined),
		});

	}


	/** Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO' */
	export enum ReservationCodec { MPEG2 = 0, AVC = 1, HEVC = 2, AUDIO = 3, LINK = 4 }


	/** Maximum framerate in frames per second (Outputs only) */
	export enum ReservationMaximumFramerate { MAX_30_FPS = 0, MAX_60_FPS = 1 }


	/** Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL' */
	export enum ReservationResourceType { INPUT = 0, OUTPUT = 1, MULTIPLEX = 2, CHANNEL = 3 }


	/** Special features, 'ADVANCED_AUDIO' 'AUDIO_NORMALIZATION' 'MGHD' or 'MGUHD' */
	export enum ReservationSpecialFeature { ADVANCED_AUDIO = 0, AUDIO_NORMALIZATION = 1, MGHD = 2, MGUHD = 3 }


	/** Video quality, e.g. 'STANDARD' (Outputs only) */
	export enum ReservationVideoQuality { STANDARD = 0, ENHANCED = 1, PREMIUM = 2 }


	/** Current reservation state */
	export enum ReservationState { ACTIVE = 0, EXPIRED = 1, CANCELED = 2, DELETED = 3 }


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
		Arn?: string;
		CdiInputSpecification?: CdiInputSpecification;
		ChannelClass?: ChannelClass;
		Destinations?: Array<OutputDestination>;
		EgressEndpoints?: Array<ChannelEgressEndpoint>;
		EncoderSettings?: EncoderSettings;
		Id?: string;
		InputAttachments?: Array<InputAttachment>;
		InputSpecification?: InputSpecification;
		LogLevel?: LogLevel;
		Maintenance?: MaintenanceStatus;
		Name?: string;
		PipelineDetails?: Array<PipelineDetail>;
		PipelinesRunningCount?: number | null;
		RoleArn?: string;
		State?: ChannelState;
		Tags?: Tags;
		Vpc?: VpcOutputSettingsDescription;
	}

	/** Placeholder documentation for DescribeChannelResponse */
	export interface DescribeChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelClass: FormControl<ChannelClass | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateDescribeChannelResponseFormGroup() {
		return new FormGroup<DescribeChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeInputResponse */
	export interface DescribeInputResponse {
		Arn?: string;
		AttachedChannels?: Array<string>;
		Destinations?: Array<InputDestination>;
		Id?: string;
		InputClass?: ChannelClass;
		InputDevices?: Array<InputDeviceSettings>;
		InputPartnerIds?: Array<string>;
		InputSourceType?: InputSourceType;
		MediaConnectFlows?: Array<MediaConnectFlow>;
		Name?: string;
		RoleArn?: string;
		SecurityGroups?: Array<string>;
		Sources?: Array<InputSource>;
		State?: InputState;
		Tags?: Tags;
		Type?: InputType;
	}

	/** Placeholder documentation for DescribeInputResponse */
	export interface DescribeInputResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		InputClass: FormControl<ChannelClass | null | undefined>,
		InputSourceType: FormControl<InputSourceType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<InputState | null | undefined>,
		Type: FormControl<InputType | null | undefined>,
	}
	export function CreateDescribeInputResponseFormGroup() {
		return new FormGroup<DescribeInputResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			InputClass: new FormControl<ChannelClass | null | undefined>(undefined),
			InputSourceType: new FormControl<InputSourceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InputState | null | undefined>(undefined),
			Type: new FormControl<InputType | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeInputDeviceResponse */
	export interface DescribeInputDeviceResponse {
		Arn?: string;
		ConnectionState?: InputDeviceConnectionState;
		DeviceSettingsSyncState?: DeviceSettingsSyncState;
		DeviceUpdateStatus?: DeviceUpdateStatus;
		HdDeviceSettings?: InputDeviceHdSettings;
		Id?: string;
		MacAddress?: string;
		Name?: string;
		NetworkSettings?: InputDeviceNetworkSettings;
		SerialNumber?: string;
		Type?: InputDeviceType;
		UhdDeviceSettings?: InputDeviceUhdSettings;
		Tags?: Tags;
		AvailabilityZone?: string;
	}

	/** Placeholder documentation for DescribeInputDeviceResponse */
	export interface DescribeInputDeviceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ConnectionState: FormControl<InputDeviceConnectionState | null | undefined>,
		DeviceSettingsSyncState: FormControl<DeviceSettingsSyncState | null | undefined>,
		DeviceUpdateStatus: FormControl<DeviceUpdateStatus | null | undefined>,
		Id: FormControl<string | null | undefined>,
		MacAddress: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		Type: FormControl<InputDeviceType | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInputDeviceResponseFormGroup() {
		return new FormGroup<DescribeInputDeviceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<InputDeviceConnectionState | null | undefined>(undefined),
			DeviceSettingsSyncState: new FormControl<DeviceSettingsSyncState | null | undefined>(undefined),
			DeviceUpdateStatus: new FormControl<DeviceUpdateStatus | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InputDeviceType | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The state of the connection between the input device and AWS. */
	export enum InputDeviceConnectionState { DISCONNECTED = 0, CONNECTED = 1 }


	/** The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration. */
	export enum DeviceSettingsSyncState { SYNCED = 0, SYNCING = 1 }


	/** The status of software on the input device. */
	export enum DeviceUpdateStatus { UP_TO_DATE = 0, NOT_UP_TO_DATE = 1, UPDATING = 2 }


	/** Settings that describe the active source from the input device, and the video characteristics of that source. */
	export interface InputDeviceHdSettings {
		ActiveInput?: InputDeviceActiveInput;
		ConfiguredInput?: InputDeviceConfiguredInput;
		DeviceState?: InputDeviceState;
		Framerate?: number | null;
		Height?: number | null;
		MaxBitrate?: number | null;
		ScanType?: H264ScanType;
		Width?: number | null;
		LatencyMs?: number | null;
	}

	/** Settings that describe the active source from the input device, and the video characteristics of that source. */
	export interface InputDeviceHdSettingsFormProperties {
		ActiveInput: FormControl<InputDeviceActiveInput | null | undefined>,
		ConfiguredInput: FormControl<InputDeviceConfiguredInput | null | undefined>,
		DeviceState: FormControl<InputDeviceState | null | undefined>,
		Framerate: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		ScanType: FormControl<H264ScanType | null | undefined>,
		Width: FormControl<number | null | undefined>,
		LatencyMs: FormControl<number | null | undefined>,
	}
	export function CreateInputDeviceHdSettingsFormGroup() {
		return new FormGroup<InputDeviceHdSettingsFormProperties>({
			ActiveInput: new FormControl<InputDeviceActiveInput | null | undefined>(undefined),
			ConfiguredInput: new FormControl<InputDeviceConfiguredInput | null | undefined>(undefined),
			DeviceState: new FormControl<InputDeviceState | null | undefined>(undefined),
			Framerate: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			ScanType: new FormControl<H264ScanType | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
			LatencyMs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The source at the input device that is currently active. */
	export enum InputDeviceActiveInput { HDMI = 0, SDI = 1 }


	/** The source to activate (use) from the input device. */
	export enum InputDeviceConfiguredInput { AUTO = 0, HDMI = 1, SDI = 2 }


	/** The state of the input device. */
	export enum InputDeviceState { IDLE = 0, STREAMING = 1 }


	/** The network settings for the input device. */
	export interface InputDeviceNetworkSettings {
		DnsAddresses?: Array<string>;
		Gateway?: string;
		IpAddress?: string;
		IpScheme?: InputDeviceIpScheme;
		SubnetMask?: string;
	}

	/** The network settings for the input device. */
	export interface InputDeviceNetworkSettingsFormProperties {
		Gateway: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		IpScheme: FormControl<InputDeviceIpScheme | null | undefined>,
		SubnetMask: FormControl<string | null | undefined>,
	}
	export function CreateInputDeviceNetworkSettingsFormGroup() {
		return new FormGroup<InputDeviceNetworkSettingsFormProperties>({
			Gateway: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			IpScheme: new FormControl<InputDeviceIpScheme | null | undefined>(undefined),
			SubnetMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address. */
	export enum InputDeviceIpScheme { STATIC = 0, DHCP = 1 }


	/** The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD". */
	export enum InputDeviceType { HD = 0, UHD = 1 }


	/** Settings that describe the active source from the input device, and the video characteristics of that source. */
	export interface InputDeviceUhdSettings {
		ActiveInput?: InputDeviceActiveInput;
		ConfiguredInput?: InputDeviceConfiguredInput;
		DeviceState?: InputDeviceState;
		Framerate?: number | null;
		Height?: number | null;
		MaxBitrate?: number | null;
		ScanType?: H264ScanType;
		Width?: number | null;
		LatencyMs?: number | null;
	}

	/** Settings that describe the active source from the input device, and the video characteristics of that source. */
	export interface InputDeviceUhdSettingsFormProperties {
		ActiveInput: FormControl<InputDeviceActiveInput | null | undefined>,
		ConfiguredInput: FormControl<InputDeviceConfiguredInput | null | undefined>,
		DeviceState: FormControl<InputDeviceState | null | undefined>,
		Framerate: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		ScanType: FormControl<H264ScanType | null | undefined>,
		Width: FormControl<number | null | undefined>,
		LatencyMs: FormControl<number | null | undefined>,
	}
	export function CreateInputDeviceUhdSettingsFormGroup() {
		return new FormGroup<InputDeviceUhdSettingsFormProperties>({
			ActiveInput: new FormControl<InputDeviceActiveInput | null | undefined>(undefined),
			ConfiguredInput: new FormControl<InputDeviceConfiguredInput | null | undefined>(undefined),
			DeviceState: new FormControl<InputDeviceState | null | undefined>(undefined),
			Framerate: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			ScanType: new FormControl<H264ScanType | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
			LatencyMs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeInputDeviceThumbnailResponse */
	export interface DescribeInputDeviceThumbnailResponse {
		Body?: string;
	}

	/** Placeholder documentation for DescribeInputDeviceThumbnailResponse */
	export interface DescribeInputDeviceThumbnailResponseFormProperties {
		Body: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInputDeviceThumbnailResponseFormGroup() {
		return new FormGroup<DescribeInputDeviceThumbnailResponseFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeInputSecurityGroupResponse */
	export interface DescribeInputSecurityGroupResponse {
		Arn?: string;
		Id?: string;
		Inputs?: Array<string>;
		State?: InputSecurityGroupState;
		Tags?: Tags;
		WhitelistRules?: Array<InputWhitelistRule>;
	}

	/** Placeholder documentation for DescribeInputSecurityGroupResponse */
	export interface DescribeInputSecurityGroupResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
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
		Arn?: string;
		AvailabilityZones?: Array<string>;
		Destinations?: Array<MultiplexOutputDestination>;
		Id?: string;
		MultiplexSettings?: MultiplexSettings;
		Name?: string;
		PipelinesRunningCount?: number | null;
		ProgramCount?: number | null;
		State?: MultiplexState;
		Tags?: Tags;
	}

	/** Placeholder documentation for DescribeMultiplexResponse */
	export interface DescribeMultiplexResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		ProgramCount: FormControl<number | null | undefined>,
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
		ChannelId?: string;
		MultiplexProgramSettings?: MultiplexProgramSettings;
		PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
		PipelineDetails?: Array<MultiplexProgramPipelineDetail>;
		ProgramName?: string;
	}

	/** Placeholder documentation for DescribeMultiplexProgramResponse */
	export interface DescribeMultiplexProgramResponseFormProperties {
		ChannelId: FormControl<string | null | undefined>,
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
		Arn?: string;
		CurrencyCode?: string;
		Duration?: number | null;
		DurationUnits?: OfferingDurationUnits;
		FixedPrice?: number | null;
		OfferingDescription?: string;
		OfferingId?: string;
		OfferingType?: OfferingType;
		Region?: string;
		ResourceSpecification?: ReservationResourceSpecification;
		UsagePrice?: number | null;
	}

	/** Placeholder documentation for DescribeOfferingResponse */
	export interface DescribeOfferingResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		DurationUnits: FormControl<OfferingDurationUnits | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		OfferingDescription: FormControl<string | null | undefined>,
		OfferingId: FormControl<string | null | undefined>,
		OfferingType: FormControl<OfferingType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateDescribeOfferingResponseFormGroup() {
		return new FormGroup<DescribeOfferingResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<OfferingDurationUnits | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<OfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeReservationResponse */
	export interface DescribeReservationResponse {
		Arn?: string;
		Count?: number | null;
		CurrencyCode?: string;
		Duration?: number | null;
		DurationUnits?: OfferingDurationUnits;
		End?: string;
		FixedPrice?: number | null;
		Name?: string;
		OfferingDescription?: string;
		OfferingId?: string;
		OfferingType?: OfferingType;
		Region?: string;
		RenewalSettings?: RenewalSettings;
		ReservationId?: string;
		ResourceSpecification?: ReservationResourceSpecification;
		Start?: string;
		State?: ReservationState;
		Tags?: Tags;
		UsagePrice?: number | null;
	}

	/** Placeholder documentation for DescribeReservationResponse */
	export interface DescribeReservationResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Count: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		DurationUnits: FormControl<OfferingDurationUnits | null | undefined>,
		End: FormControl<string | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OfferingDescription: FormControl<string | null | undefined>,
		OfferingId: FormControl<string | null | undefined>,
		OfferingType: FormControl<OfferingType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ReservationId: FormControl<string | null | undefined>,
		Start: FormControl<string | null | undefined>,
		State: FormControl<ReservationState | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateDescribeReservationResponseFormGroup() {
		return new FormGroup<DescribeReservationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<OfferingDurationUnits | null | undefined>(undefined),
			End: new FormControl<string | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<OfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ReservationId: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReservationState | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeScheduleResponse */
	export interface DescribeScheduleResponse {
		NextToken?: string;
		ScheduleActions?: Array<ScheduleAction>;
	}

	/** Placeholder documentation for DescribeScheduleResponse */
	export interface DescribeScheduleResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduleResponseFormGroup() {
		return new FormGroup<DescribeScheduleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeAccountConfigurationResponse */
	export interface DescribeAccountConfigurationResponse {
		AccountConfiguration?: AccountConfiguration;
	}

	/** Placeholder documentation for DescribeAccountConfigurationResponse */
	export interface DescribeAccountConfigurationResponseFormProperties {
	}
	export function CreateDescribeAccountConfigurationResponseFormGroup() {
		return new FormGroup<DescribeAccountConfigurationResponseFormProperties>({
		});

	}


	/** Placeholder documentation for AccountConfiguration */
	export interface AccountConfiguration {
		KmsKeyId?: string;
	}

	/** Placeholder documentation for AccountConfiguration */
	export interface AccountConfigurationFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAccountConfigurationFormGroup() {
		return new FormGroup<AccountConfigurationFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for DescribeThumbnailsResponse */
	export interface DescribeThumbnailsResponse {
		ThumbnailDetails?: Array<ThumbnailDetail>;
	}

	/** Placeholder documentation for DescribeThumbnailsResponse */
	export interface DescribeThumbnailsResponseFormProperties {
	}
	export function CreateDescribeThumbnailsResponseFormGroup() {
		return new FormGroup<DescribeThumbnailsResponseFormProperties>({
		});

	}


	/** Thumbnail details for one pipeline of a running channel. */
	export interface ThumbnailDetail {
		PipelineId?: string;
		Thumbnails?: Array<Thumbnail>;
	}

	/** Thumbnail details for one pipeline of a running channel. */
	export interface ThumbnailDetailFormProperties {
		PipelineId: FormControl<string | null | undefined>,
	}
	export function CreateThumbnailDetailFormGroup() {
		return new FormGroup<ThumbnailDetailFormProperties>({
			PipelineId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a single thumbnail */
	export interface Thumbnail {
		Body?: string;
		ContentType?: string;
		ThumbnailType?: ThumbnailType;
		TimeStamp?: Date;
	}

	/** Details of a single thumbnail */
	export interface ThumbnailFormProperties {
		Body: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
		ThumbnailType: FormControl<ThumbnailType | null | undefined>,
		TimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateThumbnailFormGroup() {
		return new FormGroup<ThumbnailFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			ThumbnailType: new FormControl<ThumbnailType | null | undefined>(undefined),
			TimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Thumbnail type. */
	export enum ThumbnailType { UNSPECIFIED = 0, CURRENT_ACTIVE = 1 }


	/** Placeholder documentation for ListChannelsResponse */
	export interface ListChannelsResponse {
		Channels?: Array<ChannelSummary>;
		NextToken?: string;
	}

	/** Placeholder documentation for ListChannelsResponse */
	export interface ListChannelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ChannelSummary */
	export interface ChannelSummary {
		Arn?: string;
		CdiInputSpecification?: CdiInputSpecification;
		ChannelClass?: ChannelClass;
		Destinations?: Array<OutputDestination>;
		EgressEndpoints?: Array<ChannelEgressEndpoint>;
		Id?: string;
		InputAttachments?: Array<InputAttachment>;
		InputSpecification?: InputSpecification;
		LogLevel?: LogLevel;
		Maintenance?: MaintenanceStatus;
		Name?: string;
		PipelinesRunningCount?: number | null;
		RoleArn?: string;
		State?: ChannelState;
		Tags?: Tags;
		Vpc?: VpcOutputSettingsDescription;
	}

	/** Placeholder documentation for ChannelSummary */
	export interface ChannelSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelClass: FormControl<ChannelClass | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateChannelSummaryFormGroup() {
		return new FormGroup<ChannelSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListInputDeviceTransfersResponse */
	export interface ListInputDeviceTransfersResponse {
		InputDeviceTransfers?: Array<TransferringInputDeviceSummary>;
		NextToken?: string;
	}

	/** Placeholder documentation for ListInputDeviceTransfersResponse */
	export interface ListInputDeviceTransfersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputDeviceTransfersResponseFormGroup() {
		return new FormGroup<ListInputDeviceTransfersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the input device that is being transferred. */
	export interface TransferringInputDeviceSummary {
		Id?: string;
		Message?: string;
		TargetCustomerId?: string;
		TransferType?: InputDeviceTransferType;
	}

	/** Details about the input device that is being transferred. */
	export interface TransferringInputDeviceSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		TargetCustomerId: FormControl<string | null | undefined>,
		TransferType: FormControl<InputDeviceTransferType | null | undefined>,
	}
	export function CreateTransferringInputDeviceSummaryFormGroup() {
		return new FormGroup<TransferringInputDeviceSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			TargetCustomerId: new FormControl<string | null | undefined>(undefined),
			TransferType: new FormControl<InputDeviceTransferType | null | undefined>(undefined),
		});

	}


	/** The type of device transfer. INCOMING for an input device that is being transferred to you, OUTGOING for an input device that you are transferring to another AWS account. */
	export enum InputDeviceTransferType { OUTGOING = 0, INCOMING = 1 }


	/** Placeholder documentation for ListInputDevicesResponse */
	export interface ListInputDevicesResponse {
		InputDevices?: Array<InputDeviceSummary>;
		NextToken?: string;
	}

	/** Placeholder documentation for ListInputDevicesResponse */
	export interface ListInputDevicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputDevicesResponseFormGroup() {
		return new FormGroup<ListInputDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the input device. */
	export interface InputDeviceSummary {
		Arn?: string;
		ConnectionState?: InputDeviceConnectionState;
		DeviceSettingsSyncState?: DeviceSettingsSyncState;
		DeviceUpdateStatus?: DeviceUpdateStatus;
		HdDeviceSettings?: InputDeviceHdSettings;
		Id?: string;
		MacAddress?: string;
		Name?: string;
		NetworkSettings?: InputDeviceNetworkSettings;
		SerialNumber?: string;
		Type?: InputDeviceType;
		UhdDeviceSettings?: InputDeviceUhdSettings;
		Tags?: Tags;
		AvailabilityZone?: string;
	}

	/** Details of the input device. */
	export interface InputDeviceSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		ConnectionState: FormControl<InputDeviceConnectionState | null | undefined>,
		DeviceSettingsSyncState: FormControl<DeviceSettingsSyncState | null | undefined>,
		DeviceUpdateStatus: FormControl<DeviceUpdateStatus | null | undefined>,
		Id: FormControl<string | null | undefined>,
		MacAddress: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		Type: FormControl<InputDeviceType | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateInputDeviceSummaryFormGroup() {
		return new FormGroup<InputDeviceSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<InputDeviceConnectionState | null | undefined>(undefined),
			DeviceSettingsSyncState: new FormControl<DeviceSettingsSyncState | null | undefined>(undefined),
			DeviceUpdateStatus: new FormControl<DeviceUpdateStatus | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InputDeviceType | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListInputSecurityGroupsResponse */
	export interface ListInputSecurityGroupsResponse {
		InputSecurityGroups?: Array<InputSecurityGroup>;
		NextToken?: string;
	}

	/** Placeholder documentation for ListInputSecurityGroupsResponse */
	export interface ListInputSecurityGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputSecurityGroupsResponseFormGroup() {
		return new FormGroup<ListInputSecurityGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListInputsResponse */
	export interface ListInputsResponse {
		Inputs?: Array<Input>;
		NextToken?: string;
	}

	/** Placeholder documentation for ListInputsResponse */
	export interface ListInputsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputsResponseFormGroup() {
		return new FormGroup<ListInputsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListMultiplexProgramsResponse */
	export interface ListMultiplexProgramsResponse {
		MultiplexPrograms?: Array<MultiplexProgramSummary>;
		NextToken?: string;
	}

	/** Placeholder documentation for ListMultiplexProgramsResponse */
	export interface ListMultiplexProgramsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMultiplexProgramsResponseFormGroup() {
		return new FormGroup<ListMultiplexProgramsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for MultiplexProgramSummary */
	export interface MultiplexProgramSummary {
		ChannelId?: string;
		ProgramName?: string;
	}

	/** Placeholder documentation for MultiplexProgramSummary */
	export interface MultiplexProgramSummaryFormProperties {
		ChannelId: FormControl<string | null | undefined>,
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
		Multiplexes?: Array<MultiplexSummary>;
		NextToken?: string;
	}

	/** Placeholder documentation for ListMultiplexesResponse */
	export interface ListMultiplexesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMultiplexesResponseFormGroup() {
		return new FormGroup<ListMultiplexesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for MultiplexSummary */
	export interface MultiplexSummary {
		Arn?: string;
		AvailabilityZones?: Array<string>;
		Id?: string;
		MultiplexSettings?: MultiplexSettingsSummary;
		Name?: string;
		PipelinesRunningCount?: number | null;
		ProgramCount?: number | null;
		State?: MultiplexState;
		Tags?: Tags;
	}

	/** Placeholder documentation for MultiplexSummary */
	export interface MultiplexSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		ProgramCount: FormControl<number | null | undefined>,
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
		TransportStreamBitrate?: number | null;
	}

	/** Contains summary configuration for a Multiplex event. */
	export interface MultiplexSettingsSummaryFormProperties {
		TransportStreamBitrate: FormControl<number | null | undefined>,
	}
	export function CreateMultiplexSettingsSummaryFormGroup() {
		return new FormGroup<MultiplexSettingsSummaryFormProperties>({
			TransportStreamBitrate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListOfferingsResponse */
	export interface ListOfferingsResponse {
		NextToken?: string;
		Offerings?: Array<Offering>;
	}

	/** Placeholder documentation for ListOfferingsResponse */
	export interface ListOfferingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOfferingsResponseFormGroup() {
		return new FormGroup<ListOfferingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved resources available for purchase */
	export interface Offering {
		Arn?: string;
		CurrencyCode?: string;
		Duration?: number | null;
		DurationUnits?: OfferingDurationUnits;
		FixedPrice?: number | null;
		OfferingDescription?: string;
		OfferingId?: string;
		OfferingType?: OfferingType;
		Region?: string;
		ResourceSpecification?: ReservationResourceSpecification;
		UsagePrice?: number | null;
	}

	/** Reserved resources available for purchase */
	export interface OfferingFormProperties {
		Arn: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		DurationUnits: FormControl<OfferingDurationUnits | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		OfferingDescription: FormControl<string | null | undefined>,
		OfferingId: FormControl<string | null | undefined>,
		OfferingType: FormControl<OfferingType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateOfferingFormGroup() {
		return new FormGroup<OfferingFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<OfferingDurationUnits | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<OfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListReservationsResponse */
	export interface ListReservationsResponse {
		NextToken?: string;
		Reservations?: Array<Reservation>;
	}

	/** Placeholder documentation for ListReservationsResponse */
	export interface ListReservationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReservationsResponseFormGroup() {
		return new FormGroup<ListReservationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved resources available to use */
	export interface Reservation {
		Arn?: string;
		Count?: number | null;
		CurrencyCode?: string;
		Duration?: number | null;
		DurationUnits?: OfferingDurationUnits;
		End?: string;
		FixedPrice?: number | null;
		Name?: string;
		OfferingDescription?: string;
		OfferingId?: string;
		OfferingType?: OfferingType;
		Region?: string;
		RenewalSettings?: RenewalSettings;
		ReservationId?: string;
		ResourceSpecification?: ReservationResourceSpecification;
		Start?: string;
		State?: ReservationState;
		Tags?: Tags;
		UsagePrice?: number | null;
	}

	/** Reserved resources available to use */
	export interface ReservationFormProperties {
		Arn: FormControl<string | null | undefined>,
		Count: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		DurationUnits: FormControl<OfferingDurationUnits | null | undefined>,
		End: FormControl<string | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OfferingDescription: FormControl<string | null | undefined>,
		OfferingId: FormControl<string | null | undefined>,
		OfferingType: FormControl<OfferingType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ReservationId: FormControl<string | null | undefined>,
		Start: FormControl<string | null | undefined>,
		State: FormControl<ReservationState | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
	}
	export function CreateReservationFormGroup() {
		return new FormGroup<ReservationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			DurationUnits: new FormControl<OfferingDurationUnits | null | undefined>(undefined),
			End: new FormControl<string | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OfferingDescription: new FormControl<string | null | undefined>(undefined),
			OfferingId: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<OfferingType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ReservationId: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReservationState | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for ListTagsForResourceResponse */
	export interface ListTagsForResourceResponse {
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
		Reservation?: Reservation;
	}

	/** Placeholder documentation for PurchaseOfferingResponse */
	export interface PurchaseOfferingResponseFormProperties {
	}
	export function CreatePurchaseOfferingResponseFormGroup() {
		return new FormGroup<PurchaseOfferingResponseFormProperties>({
		});

	}


	/** Placeholder documentation for RebootInputDeviceResponse */
	export interface RebootInputDeviceResponse {
	}

	/** Placeholder documentation for RebootInputDeviceResponse */
	export interface RebootInputDeviceResponseFormProperties {
	}
	export function CreateRebootInputDeviceResponseFormGroup() {
		return new FormGroup<RebootInputDeviceResponseFormProperties>({
		});

	}


	/** Placeholder documentation for RejectInputDeviceTransferResponse */
	export interface RejectInputDeviceTransferResponse {
	}

	/** Placeholder documentation for RejectInputDeviceTransferResponse */
	export interface RejectInputDeviceTransferResponseFormProperties {
	}
	export function CreateRejectInputDeviceTransferResponseFormGroup() {
		return new FormGroup<RejectInputDeviceTransferResponseFormProperties>({
		});

	}


	/** Placeholder documentation for UpdateAccountConfigurationResponse */
	export interface UpdateAccountConfigurationResponse {
		AccountConfiguration?: AccountConfiguration;
	}

	/** Placeholder documentation for UpdateAccountConfigurationResponse */
	export interface UpdateAccountConfigurationResponseFormProperties {
	}
	export function CreateUpdateAccountConfigurationResponseFormGroup() {
		return new FormGroup<UpdateAccountConfigurationResponseFormProperties>({
		});

	}


	/** Placeholder documentation for StartChannelResponse */
	export interface StartChannelResponse {
		Arn?: string;
		CdiInputSpecification?: CdiInputSpecification;
		ChannelClass?: ChannelClass;
		Destinations?: Array<OutputDestination>;
		EgressEndpoints?: Array<ChannelEgressEndpoint>;
		EncoderSettings?: EncoderSettings;
		Id?: string;
		InputAttachments?: Array<InputAttachment>;
		InputSpecification?: InputSpecification;
		LogLevel?: LogLevel;
		Maintenance?: MaintenanceStatus;
		Name?: string;
		PipelineDetails?: Array<PipelineDetail>;
		PipelinesRunningCount?: number | null;
		RoleArn?: string;
		State?: ChannelState;
		Tags?: Tags;
		Vpc?: VpcOutputSettingsDescription;
	}

	/** Placeholder documentation for StartChannelResponse */
	export interface StartChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelClass: FormControl<ChannelClass | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateStartChannelResponseFormGroup() {
		return new FormGroup<StartChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for StartInputDeviceMaintenanceWindowResponse */
	export interface StartInputDeviceMaintenanceWindowResponse {
	}

	/** Placeholder documentation for StartInputDeviceMaintenanceWindowResponse */
	export interface StartInputDeviceMaintenanceWindowResponseFormProperties {
	}
	export function CreateStartInputDeviceMaintenanceWindowResponseFormGroup() {
		return new FormGroup<StartInputDeviceMaintenanceWindowResponseFormProperties>({
		});

	}


	/** Placeholder documentation for StartMultiplexResponse */
	export interface StartMultiplexResponse {
		Arn?: string;
		AvailabilityZones?: Array<string>;
		Destinations?: Array<MultiplexOutputDestination>;
		Id?: string;
		MultiplexSettings?: MultiplexSettings;
		Name?: string;
		PipelinesRunningCount?: number | null;
		ProgramCount?: number | null;
		State?: MultiplexState;
		Tags?: Tags;
	}

	/** Placeholder documentation for StartMultiplexResponse */
	export interface StartMultiplexResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		ProgramCount: FormControl<number | null | undefined>,
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
		Arn?: string;
		CdiInputSpecification?: CdiInputSpecification;
		ChannelClass?: ChannelClass;
		Destinations?: Array<OutputDestination>;
		EgressEndpoints?: Array<ChannelEgressEndpoint>;
		EncoderSettings?: EncoderSettings;
		Id?: string;
		InputAttachments?: Array<InputAttachment>;
		InputSpecification?: InputSpecification;
		LogLevel?: LogLevel;
		Maintenance?: MaintenanceStatus;
		Name?: string;
		PipelineDetails?: Array<PipelineDetail>;
		PipelinesRunningCount?: number | null;
		RoleArn?: string;
		State?: ChannelState;
		Tags?: Tags;
		Vpc?: VpcOutputSettingsDescription;
	}

	/** Placeholder documentation for StopChannelResponse */
	export interface StopChannelResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ChannelClass: FormControl<ChannelClass | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<ChannelState | null | undefined>,
	}
	export function CreateStopChannelResponseFormGroup() {
		return new FormGroup<StopChannelResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PipelinesRunningCount: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ChannelState | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for StopMultiplexResponse */
	export interface StopMultiplexResponse {
		Arn?: string;
		AvailabilityZones?: Array<string>;
		Destinations?: Array<MultiplexOutputDestination>;
		Id?: string;
		MultiplexSettings?: MultiplexSettings;
		Name?: string;
		PipelinesRunningCount?: number | null;
		ProgramCount?: number | null;
		State?: MultiplexState;
		Tags?: Tags;
	}

	/** Placeholder documentation for StopMultiplexResponse */
	export interface StopMultiplexResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PipelinesRunningCount: FormControl<number | null | undefined>,
		ProgramCount: FormControl<number | null | undefined>,
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


	/** Placeholder documentation for TransferInputDeviceResponse */
	export interface TransferInputDeviceResponse {
	}

	/** Placeholder documentation for TransferInputDeviceResponse */
	export interface TransferInputDeviceResponseFormProperties {
	}
	export function CreateTransferInputDeviceResponseFormGroup() {
		return new FormGroup<TransferInputDeviceResponseFormProperties>({
		});

	}


	/** Placeholder documentation for UpdateChannelResponse */
	export interface UpdateChannelResponse {
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
		Id?: string;
	}

	/** Settings for an input device. */
	export interface InputDeviceRequestFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInputDeviceRequestFormGroup() {
		return new FormGroup<InputDeviceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for UpdateInputDeviceResponse */
	export interface UpdateInputDeviceResponse {
		Arn?: string;
		ConnectionState?: InputDeviceConnectionState;
		DeviceSettingsSyncState?: DeviceSettingsSyncState;
		DeviceUpdateStatus?: DeviceUpdateStatus;
		HdDeviceSettings?: InputDeviceHdSettings;
		Id?: string;
		MacAddress?: string;
		Name?: string;
		NetworkSettings?: InputDeviceNetworkSettings;
		SerialNumber?: string;
		Type?: InputDeviceType;
		UhdDeviceSettings?: InputDeviceUhdSettings;
		Tags?: Tags;
		AvailabilityZone?: string;
	}

	/** Placeholder documentation for UpdateInputDeviceResponse */
	export interface UpdateInputDeviceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		ConnectionState: FormControl<InputDeviceConnectionState | null | undefined>,
		DeviceSettingsSyncState: FormControl<DeviceSettingsSyncState | null | undefined>,
		DeviceUpdateStatus: FormControl<DeviceUpdateStatus | null | undefined>,
		Id: FormControl<string | null | undefined>,
		MacAddress: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		Type: FormControl<InputDeviceType | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputDeviceResponseFormGroup() {
		return new FormGroup<UpdateInputDeviceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<InputDeviceConnectionState | null | undefined>(undefined),
			DeviceSettingsSyncState: new FormControl<DeviceSettingsSyncState | null | undefined>(undefined),
			DeviceUpdateStatus: new FormControl<DeviceUpdateStatus | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InputDeviceType | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for UpdateInputSecurityGroupResponse */
	export interface UpdateInputSecurityGroupResponse {
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
		Reservation?: Reservation;
	}

	/** Placeholder documentation for UpdateReservationResponse */
	export interface UpdateReservationResponseFormProperties {
	}
	export function CreateUpdateReservationResponseFormGroup() {
		return new FormGroup<UpdateReservationResponseFormProperties>({
		});

	}


	/** Ac3 Lfe Filter */
	export enum Ac3LfeFilter { DISABLED = 0, ENABLED = 1 }


	/** Ac3 Metadata Control */
	export enum Ac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Placeholder documentation for AcceptInputDeviceTransferRequest */
	export interface AcceptInputDeviceTransferRequest {
	}

	/** Placeholder documentation for AcceptInputDeviceTransferRequest */
	export interface AcceptInputDeviceTransferRequestFormProperties {
	}
	export function CreateAcceptInputDeviceTransferRequestFormGroup() {
		return new FormGroup<AcceptInputDeviceTransferRequestFormProperties>({
		});

	}


	/** Audio Description Language Code Control */
	export enum AudioDescriptionLanguageCodeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Avail Blanking State */
	export enum AvailBlankingState { DISABLED = 0, ENABLED = 1 }


	/** A request to delete resources */
	export interface BatchDeleteRequest {
		ChannelIds?: Array<string>;
		InputIds?: Array<string>;
		InputSecurityGroupIds?: Array<string>;
		MultiplexIds?: Array<string>;
	}

	/** A request to delete resources */
	export interface BatchDeleteRequestFormProperties {
	}
	export function CreateBatchDeleteRequestFormGroup() {
		return new FormGroup<BatchDeleteRequestFormProperties>({
		});

	}


	/** A list of schedule actions to create (in a request) or that have been created (in a response). */
	export interface BatchScheduleActionCreateRequest {

		/** Required */
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

		/** Required */
		ActionNames: Array<string>;
	}

	/** A list of schedule actions to delete. */
	export interface BatchScheduleActionDeleteRequestFormProperties {
	}
	export function CreateBatchScheduleActionDeleteRequestFormGroup() {
		return new FormGroup<BatchScheduleActionDeleteRequestFormProperties>({
		});

	}


	/** A request to start resources */
	export interface BatchStartRequest {
		ChannelIds?: Array<string>;
		MultiplexIds?: Array<string>;
	}

	/** A request to start resources */
	export interface BatchStartRequestFormProperties {
	}
	export function CreateBatchStartRequestFormGroup() {
		return new FormGroup<BatchStartRequestFormProperties>({
		});

	}


	/** A request to stop resources */
	export interface BatchStopRequest {
		ChannelIds?: Array<string>;
		MultiplexIds?: Array<string>;
	}

	/** A request to stop resources */
	export interface BatchStopRequestFormProperties {
	}
	export function CreateBatchStopRequestFormGroup() {
		return new FormGroup<BatchStopRequestFormProperties>({
		});

	}


	/** List of actions to create and list of actions to delete. */
	export interface BatchUpdateScheduleRequest {
		Creates?: BatchScheduleActionCreateRequest;
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


	/** Burn In Outline Color */
	export enum BurnInOutlineColor { BLACK = 0, BLUE = 1, GREEN = 2, RED = 3, WHITE = 4, YELLOW = 5 }


	/** Burn In Shadow Color */
	export enum BurnInShadowColor { BLACK = 0, NONE = 1, WHITE = 2 }


	/** Placeholder documentation for CancelInputDeviceTransferRequest */
	export interface CancelInputDeviceTransferRequest {
	}

	/** Placeholder documentation for CancelInputDeviceTransferRequest */
	export interface CancelInputDeviceTransferRequestFormProperties {
	}
	export function CreateCancelInputDeviceTransferRequestFormGroup() {
		return new FormGroup<CancelInputDeviceTransferRequestFormProperties>({
		});

	}


	/** A request to claim an AWS Elemental device that you have purchased from a third-party vendor. */
	export interface ClaimDeviceRequest {
		Id?: string;
	}

	/** A request to claim an AWS Elemental device that you have purchased from a third-party vendor. */
	export interface ClaimDeviceRequestFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateClaimDeviceRequestFormGroup() {
		return new FormGroup<ClaimDeviceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for MaintenanceCreateSettings */
	export interface MaintenanceCreateSettings {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceStartTime?: string;
	}

	/** Placeholder documentation for MaintenanceCreateSettings */
	export interface MaintenanceCreateSettingsFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceCreateSettingsFormGroup() {
		return new FormGroup<MaintenanceCreateSettingsFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The properties for a private VPC Output
	 * When this property is specified, the output egress addresses will be created in a user specified VPC
	 */
	export interface VpcOutputSettings {
		PublicAddressAllocationIds?: Array<string>;
		SecurityGroupIds?: Array<string>;

		/** Required */
		SubnetIds: Array<string>;
	}

	/**
	 * The properties for a private VPC Output
	 * When this property is specified, the output egress addresses will be created in a user specified VPC
	 */
	export interface VpcOutputSettingsFormProperties {
	}
	export function CreateVpcOutputSettingsFormGroup() {
		return new FormGroup<VpcOutputSettingsFormProperties>({
		});

	}


	/** A request to create a channel */
	export interface CreateChannelRequest {
		CdiInputSpecification?: CdiInputSpecification;
		ChannelClass?: ChannelClass;
		Destinations?: Array<OutputDestination>;
		EncoderSettings?: EncoderSettings;
		InputAttachments?: Array<InputAttachment>;
		InputSpecification?: InputSpecification;
		LogLevel?: LogLevel;
		Maintenance?: MaintenanceCreateSettings;
		Name?: string;
		RequestId?: string;
		Reserved?: string;
		RoleArn?: string;
		Tags?: Tags;
		Vpc?: VpcOutputSettings;
	}

	/** A request to create a channel */
	export interface CreateChannelRequestFormProperties {
		ChannelClass: FormControl<ChannelClass | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Reserved: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
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
		SecurityGroupIds?: Array<string>;

		/** Required */
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
		Destinations?: Array<InputDestinationRequest>;
		InputDevices?: Array<InputDeviceSettings>;
		InputSecurityGroups?: Array<string>;
		MediaConnectFlows?: Array<MediaConnectFlowRequest>;
		Name?: string;
		RequestId?: string;
		RoleArn?: string;
		Sources?: Array<InputSourceRequest>;
		Tags?: Tags;
		Type?: InputType;
		Vpc?: InputVpcRequest;
	}

	/** The name of the input */
	export interface CreateInputRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
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
		Tags?: Tags;
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

		/** Required */
		MultiplexProgramSettings: MultiplexProgramSettings;

		/** Required */
		ProgramName: string;

		/** Required */
		RequestId: string;
	}

	/** A request to create a program in a multiplex. */
	export interface CreateMultiplexProgramRequestFormProperties {

		/** Required */
		ProgramName: FormControl<string | null | undefined>,

		/** Required */
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

		/** Required */
		AvailabilityZones: Array<string>;

		/** Required */
		MultiplexSettings: MultiplexSettings;

		/** Required */
		Name: string;

		/** Required */
		RequestId: string;
		Tags?: Tags;
	}

	/** A request to create a multiplex. */
	export interface CreateMultiplexRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMultiplexRequestFormGroup() {
		return new FormGroup<CreateMultiplexRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create a partner input */
	export interface CreatePartnerInputRequest {
		RequestId?: string;
		Tags?: Tags;
	}

	/** A request to create a partner input */
	export interface CreatePartnerInputRequestFormProperties {
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePartnerInputRequestFormGroup() {
		return new FormGroup<CreatePartnerInputRequestFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for CreateTagsRequest */
	export interface CreateTagsRequest {
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


	/** The HTTP Accept header. Indicates the requested type fothe thumbnail. */
	export enum AcceptHeader { 'image/jpeg' = 0 }


	/** Placeholder documentation for DescribeInputDeviceThumbnailRequest */
	export interface DescribeInputDeviceThumbnailRequest {
	}

	/** Placeholder documentation for DescribeInputDeviceThumbnailRequest */
	export interface DescribeInputDeviceThumbnailRequestFormProperties {
	}
	export function CreateDescribeInputDeviceThumbnailRequestFormGroup() {
		return new FormGroup<DescribeInputDeviceThumbnailRequestFormProperties>({
		});

	}


	/** Specifies the media type of the thumbnail. */
	export enum ContentType { 'image/jpeg' = 0 }


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


	/** Eac3 Atmos Drc Rf */
	export enum Eac3AtmosDrcRf { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }


	/** Eac3 Dc Filter */
	export enum Eac3DcFilter { DISABLED = 0, ENABLED = 1 }


	/** Eac3 Drc Line */
	export enum Eac3DrcLine { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }


	/** Eac3 Drc Rf */
	export enum Eac3DrcRf { FILM_LIGHT = 0, FILM_STANDARD = 1, MUSIC_LIGHT = 2, MUSIC_STANDARD = 3, NONE = 4, SPEECH = 5 }


	/** Eac3 Lfe Filter */
	export enum Eac3LfeFilter { DISABLED = 0, ENABLED = 1 }


	/** Eac3 Metadata Control */
	export enum Eac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Eac3 Surround Mode */
	export enum Eac3SurroundMode { DISABLED = 0, ENABLED = 1, NOT_INDICATED = 2 }


	/** Ebu Tt DFill Line Gap Control */
	export enum EbuTtDFillLineGapControl { DISABLED = 0, ENABLED = 1 }


	/** Feature Activations Input Prepare Schedule Actions */
	export enum FeatureActivationsInputPrepareScheduleActions { DISABLED = 0, ENABLED = 1 }


	/** Fmp4 Nielsen Id3 Behavior */
	export enum Fmp4NielsenId3Behavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** Fmp4 Timed Metadata Behavior */
	export enum Fmp4TimedMetadataBehavior { NO_PASSTHROUGH = 0, PASSTHROUGH = 1 }


	/** Placeholder documentation for DescribeAccountConfigurationRequest */
	export interface DescribeAccountConfigurationRequest {
	}

	/** Placeholder documentation for DescribeAccountConfigurationRequest */
	export interface DescribeAccountConfigurationRequestFormProperties {
	}
	export function CreateDescribeAccountConfigurationRequestFormGroup() {
		return new FormGroup<DescribeAccountConfigurationRequestFormProperties>({
		});

	}


	/** Placeholder documentation for DescribeThumbnailsRequest */
	export interface DescribeThumbnailsRequest {
	}

	/** Placeholder documentation for DescribeThumbnailsRequest */
	export interface DescribeThumbnailsRequestFormProperties {
	}
	export function CreateDescribeThumbnailsRequestFormGroup() {
		return new FormGroup<DescribeThumbnailsRequestFormProperties>({
		});

	}


	/** Global Configuration Low Framerate Inputs */
	export enum GlobalConfigurationLowFramerateInputs { DISABLED = 0, ENABLED = 1 }


	/** H264 Flicker Aq */
	export enum H264FlickerAq { DISABLED = 0, ENABLED = 1 }


	/** H264 Force Field Pictures */
	export enum H264ForceFieldPictures { DISABLED = 0, ENABLED = 1 }


	/** H264 Gop BReference */
	export enum H264GopBReference { DISABLED = 0, ENABLED = 1 }


	/** H264 Par Control */
	export enum H264ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** H264 Scene Change Detect */
	export enum H264SceneChangeDetect { DISABLED = 0, ENABLED = 1 }


	/** H264 Spatial Aq */
	export enum H264SpatialAq { DISABLED = 0, ENABLED = 1 }


	/** H264 Temporal Aq */
	export enum H264TemporalAq { DISABLED = 0, ENABLED = 1 }


	/** H265 Adaptive Quantization */
	export enum H265AdaptiveQuantization { AUTO = 0, HIGH = 1, HIGHER = 2, LOW = 3, MAX = 4, MEDIUM = 5, OFF = 6 }


	/** H265 Color Metadata */
	export enum H265ColorMetadata { IGNORE = 0, INSERT = 1 }


	/** H265 Flicker Aq */
	export enum H265FlickerAq { DISABLED = 0, ENABLED = 1 }


	/** H265 Gop Size Units */
	export enum H265GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/** H265 Look Ahead Rate Control */
	export enum H265LookAheadRateControl { HIGH = 0, LOW = 1, MEDIUM = 2 }


	/** H265 Scan Type */
	export enum H265ScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/** H265 Scene Change Detect */
	export enum H265SceneChangeDetect { DISABLED = 0, ENABLED = 1 }


	/** H265 Timecode Insertion Behavior */
	export enum H265TimecodeInsertionBehavior { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/** Hls Client Cache */
	export enum HlsClientCache { DISABLED = 0, ENABLED = 1 }


	/** State of HLS ID3 Segment Tagging */
	export enum HlsId3SegmentTaggingState { DISABLED = 0, ENABLED = 1 }


	/** Hls Iv In Manifest */
	export enum HlsIvInManifest { EXCLUDE = 0, INCLUDE = 1 }


	/** Hls Program Date Time */
	export enum HlsProgramDateTime { EXCLUDE = 0, INCLUDE = 1 }


	/** Hls Redundant Manifest */
	export enum HlsRedundantManifest { DISABLED = 0, ENABLED = 1 }


	/** Hls Stream Inf Resolution */
	export enum HlsStreamInfResolution { EXCLUDE = 0, INCLUDE = 1 }


	/** Hls Webdav Http Transfer Mode */
	export enum HlsWebdavHttpTransferMode { CHUNKED = 0, NON_CHUNKED = 1 }


	/** Input Deblock Filter */
	export enum InputDeblockFilter { DISABLED = 0, ENABLED = 1 }


	/** Input Denoise Filter */
	export enum InputDenoiseFilter { DISABLED = 0, ENABLED = 1 }


	/** Configurable settings for the input device. */
	export interface InputDeviceConfigurableSettings {
		ConfiguredInput?: InputDeviceConfiguredInput;
		MaxBitrate?: number | null;
		LatencyMs?: number | null;
	}

	/** Configurable settings for the input device. */
	export interface InputDeviceConfigurableSettingsFormProperties {
		ConfiguredInput: FormControl<InputDeviceConfiguredInput | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		LatencyMs: FormControl<number | null | undefined>,
	}
	export function CreateInputDeviceConfigurableSettingsFormGroup() {
		return new FormGroup<InputDeviceConfigurableSettingsFormProperties>({
			ConfiguredInput: new FormControl<InputDeviceConfiguredInput | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			LatencyMs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The scan type of the video source. */
	export enum InputDeviceScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/** Input Loss Action For Ms Smooth Out */
	export enum InputLossActionForMsSmoothOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


	/** Input Loss Action For Rtmp Out */
	export enum InputLossActionForRtmpOut { EMIT_OUTPUT = 0, PAUSE_OUTPUT = 1 }


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


	/** Placeholder documentation for ListInputDeviceTransfersRequest */
	export interface ListInputDeviceTransfersRequest {
	}

	/** Placeholder documentation for ListInputDeviceTransfersRequest */
	export interface ListInputDeviceTransfersRequestFormProperties {
	}
	export function CreateListInputDeviceTransfersRequestFormGroup() {
		return new FormGroup<ListInputDeviceTransfersRequestFormProperties>({
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


	/** M2ts Arib */
	export enum M2tsArib { DISABLED = 0, ENABLED = 1 }


	/** M2ts Audio Stream Type */
	export enum M2tsAudioStreamType { ATSC = 0, DVB = 1 }


	/** M2ts Cc Descriptor */
	export enum M2tsCcDescriptor { DISABLED = 0, ENABLED = 1 }


	/** M2ts Es Rate In Pes */
	export enum M2tsEsRateInPes { EXCLUDE = 0, INCLUDE = 1 }


	/** M2ts Klv */
	export enum M2tsKlv { NONE = 0, PASSTHROUGH = 1 }


	/** M2ts Rate Mode */
	export enum M2tsRateMode { CBR = 0, VBR = 1 }


	/** M2ts Scte35 Control */
	export enum M2tsScte35Control { NONE = 0, PASSTHROUGH = 1 }


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


	/** Placeholder documentation for MaintenanceUpdateSettings */
	export interface MaintenanceUpdateSettings {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceScheduledDate?: string;
		MaintenanceStartTime?: string;
	}

	/** Placeholder documentation for MaintenanceUpdateSettings */
	export interface MaintenanceUpdateSettingsFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceScheduledDate: FormControl<string | null | undefined>,
		MaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceUpdateSettingsFormGroup() {
		return new FormGroup<MaintenanceUpdateSettingsFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceScheduledDate: new FormControl<string | null | undefined>(undefined),
			MaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Motion Graphics Insertion */
	export enum MotionGraphicsInsertion { DISABLED = 0, ENABLED = 1 }


	/** Mpeg2 Color Metadata */
	export enum Mpeg2ColorMetadata { IGNORE = 0, INSERT = 1 }


	/** Mpeg2 Gop Size Units */
	export enum Mpeg2GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/** Mpeg2 Scan Type */
	export enum Mpeg2ScanType { INTERLACED = 0, PROGRESSIVE = 1 }


	/** Mpeg2 Sub Gop Length */
	export enum Mpeg2SubGopLength { DYNAMIC = 0, FIXED = 1 }


	/** Smooth Group Segmentation Mode */
	export enum SmoothGroupSegmentationMode { USE_INPUT_SEGMENTATION = 0, USE_SEGMENT_DURATION = 1 }


	/** Ms Smooth H265 Packaging Type */
	export enum MsSmoothH265PackagingType { HEV1 = 0, HVC1 = 1 }


	/** State of Nielsen PCM to ID3 tagging */
	export enum NielsenPcmToId3TaggingState { DISABLED = 0, ENABLED = 1 }


	/** Placeholder documentation for PurchaseOfferingRequest */
	export interface PurchaseOfferingRequest {

		/** Required */
		Count: number;
		Name?: string;
		RenewalSettings?: RenewalSettings;
		RequestId?: string;
		Start?: string;
		Tags?: Tags;
	}

	/** Placeholder documentation for PurchaseOfferingRequest */
	export interface PurchaseOfferingRequestFormProperties {

		/** Required */
		Count: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Start: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseOfferingRequestFormGroup() {
		return new FormGroup<PurchaseOfferingRequestFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Whether or not to force reboot the input device. */
	export enum RebootInputDeviceForce { NO = 0, YES = 1 }


	/** A request to reboot an AWS Elemental device. */
	export interface RebootInputDeviceRequest {
		Force?: RebootInputDeviceForce;
	}

	/** A request to reboot an AWS Elemental device. */
	export interface RebootInputDeviceRequestFormProperties {
		Force: FormControl<RebootInputDeviceForce | null | undefined>,
	}
	export function CreateRebootInputDeviceRequestFormGroup() {
		return new FormGroup<RebootInputDeviceRequestFormProperties>({
			Force: new FormControl<RebootInputDeviceForce | null | undefined>(undefined),
		});

	}


	/** Placeholder documentation for RejectInputDeviceTransferRequest */
	export interface RejectInputDeviceTransferRequest {
	}

	/** Placeholder documentation for RejectInputDeviceTransferRequest */
	export interface RejectInputDeviceTransferRequestFormProperties {
	}
	export function CreateRejectInputDeviceTransferRequestFormGroup() {
		return new FormGroup<RejectInputDeviceTransferRequestFormProperties>({
		});

	}


	/** Maximum bitrate in megabits per second */
	export enum ReservationMaximumBitrate { MAX_10_MBPS = 0, MAX_20_MBPS = 1, MAX_50_MBPS = 2 }


	/**
	 * Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines
	 */
	export enum ReservationResolution { SD = 0, HD = 1, FHD = 2, UHD = 3 }


	/** Rtmp Output Certificate Mode */
	export enum RtmpOutputCertificateMode { SELF_SIGNED = 0, VERIFY_AUTHENTICITY = 1 }


	/** Scte20 Convert608 To708 */
	export enum Scte20Convert608To708 { DISABLED = 0, UPCONVERT = 1 }


	/** Scte27 Ocr Language */
	export enum Scte27OcrLanguage { DEU = 0, ENG = 1, FRA = 2, NLD = 3, POR = 4, SPA = 5 }


	/** Scte35 Apos No Regional Blackout Behavior */
	export enum Scte35AposNoRegionalBlackoutBehavior { FOLLOW = 0, IGNORE = 1 }


	/** Scte35 Apos Web Delivery Allowed Behavior */
	export enum Scte35AposWebDeliveryAllowedBehavior { FOLLOW = 0, IGNORE = 1 }


	/** Scte35 Splice Insert Web Delivery Allowed Behavior */
	export enum Scte35SpliceInsertWebDeliveryAllowedBehavior { FOLLOW = 0, IGNORE = 1 }


	/** List of account configuration parameters to update. */
	export interface UpdateAccountConfigurationRequest {
		AccountConfiguration?: AccountConfiguration;
	}

	/** List of account configuration parameters to update. */
	export interface UpdateAccountConfigurationRequestFormProperties {
	}
	export function CreateUpdateAccountConfigurationRequestFormGroup() {
		return new FormGroup<UpdateAccountConfigurationRequestFormProperties>({
		});

	}


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


	/** Placeholder documentation for StartInputDeviceMaintenanceWindowRequest */
	export interface StartInputDeviceMaintenanceWindowRequest {
	}

	/** Placeholder documentation for StartInputDeviceMaintenanceWindowRequest */
	export interface StartInputDeviceMaintenanceWindowRequestFormProperties {
	}
	export function CreateStartInputDeviceMaintenanceWindowRequestFormGroup() {
		return new FormGroup<StartInputDeviceMaintenanceWindowRequestFormProperties>({
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


	/** A request to transfer an input device. */
	export interface TransferInputDeviceRequest {
		TargetCustomerId?: string;
		TargetRegion?: string;
		TransferMessage?: string;
	}

	/** A request to transfer an input device. */
	export interface TransferInputDeviceRequestFormProperties {
		TargetCustomerId: FormControl<string | null | undefined>,
		TargetRegion: FormControl<string | null | undefined>,
		TransferMessage: FormControl<string | null | undefined>,
	}
	export function CreateTransferInputDeviceRequestFormGroup() {
		return new FormGroup<TransferInputDeviceRequestFormProperties>({
			TargetCustomerId: new FormControl<string | null | undefined>(undefined),
			TargetRegion: new FormControl<string | null | undefined>(undefined),
			TransferMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Udp Timed Metadata Id3 Frame */
	export enum UdpTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/** Channel class that the channel should be updated to. */
	export interface UpdateChannelClassRequest {

		/** Required */
		ChannelClass: ChannelClass;
		Destinations?: Array<OutputDestination>;
	}

	/** Channel class that the channel should be updated to. */
	export interface UpdateChannelClassRequestFormProperties {

		/** Required */
		ChannelClass: FormControl<ChannelClass | null | undefined>,
	}
	export function CreateUpdateChannelClassRequestFormGroup() {
		return new FormGroup<UpdateChannelClassRequestFormProperties>({
			ChannelClass: new FormControl<ChannelClass | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to update a channel. */
	export interface UpdateChannelRequest {
		CdiInputSpecification?: CdiInputSpecification;
		Destinations?: Array<OutputDestination>;
		EncoderSettings?: EncoderSettings;
		InputAttachments?: Array<InputAttachment>;
		InputSpecification?: InputSpecification;
		LogLevel?: LogLevel;
		Maintenance?: MaintenanceUpdateSettings;
		Name?: string;
		RoleArn?: string;
	}

	/** A request to update a channel. */
	export interface UpdateChannelRequestFormProperties {
		LogLevel: FormControl<LogLevel | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update an input device. */
	export interface UpdateInputDeviceRequest {
		HdDeviceSettings?: InputDeviceConfigurableSettings;
		Name?: string;
		UhdDeviceSettings?: InputDeviceConfigurableSettings;
		AvailabilityZone?: string;
	}

	/** A request to update an input device. */
	export interface UpdateInputDeviceRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputDeviceRequestFormGroup() {
		return new FormGroup<UpdateInputDeviceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update an input. */
	export interface UpdateInputRequest {
		Destinations?: Array<InputDestinationRequest>;
		InputDevices?: Array<InputDeviceRequest>;
		InputSecurityGroups?: Array<string>;
		MediaConnectFlows?: Array<MediaConnectFlowRequest>;
		Name?: string;
		RoleArn?: string;
		Sources?: Array<InputSourceRequest>;
	}

	/** A request to update an input. */
	export interface UpdateInputRequestFormProperties {
		Name: FormControl<string | null | undefined>,
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
		Tags?: Tags;
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
		MultiplexSettings?: MultiplexSettings;
		Name?: string;
	}

	/** A request to update a multiplex. */
	export interface UpdateMultiplexRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMultiplexRequestFormGroup() {
		return new FormGroup<UpdateMultiplexRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update a reservation */
	export interface UpdateReservationRequest {
		Name?: string;
		RenewalSettings?: RenewalSettings;
	}

	/** Request to update a reservation */
	export interface UpdateReservationRequestFormProperties {
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
		 * Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.
		 * Post prod/inputDevices/{inputDeviceId}/accept
		 * @param {string} inputDeviceId The unique ID of the input device to accept. For example, hd-123456789abcdef.
		 * @return {AcceptInputDeviceTransferResponse} Success
		 */
		AcceptInputDeviceTransfer(inputDeviceId: string): Observable<AcceptInputDeviceTransferResponse> {
			return this.http.post<AcceptInputDeviceTransferResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)) + '/accept', null, {});
		}

		/**
		 * Starts delete of resources.
		 * Post prod/batch/delete
		 * @return {BatchDeleteResponse} Success
		 */
		BatchDelete(requestBody: BatchDeletePostBody): Observable<BatchDeleteResponse> {
			return this.http.post<BatchDeleteResponse>(this.baseUri + 'prod/batch/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts existing resources
		 * Post prod/batch/start
		 * @return {BatchStartResponse} Success
		 */
		BatchStart(requestBody: BatchStartPostBody): Observable<BatchStartResponse> {
			return this.http.post<BatchStartResponse>(this.baseUri + 'prod/batch/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops running resources
		 * Post prod/batch/stop
		 * @return {BatchStopResponse} Success
		 */
		BatchStop(requestBody: BatchStopPostBody): Observable<BatchStopResponse> {
			return this.http.post<BatchStopResponse>(this.baseUri + 'prod/batch/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Cancel an input device transfer that you have requested.
		 * Post prod/inputDevices/{inputDeviceId}/cancel
		 * @param {string} inputDeviceId The unique ID of the input device to cancel. For example, hd-123456789abcdef.
		 * @return {CancelInputDeviceTransferResponse} Success
		 */
		CancelInputDeviceTransfer(inputDeviceId: string): Observable<CancelInputDeviceTransferResponse> {
			return this.http.post<CancelInputDeviceTransferResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)) + '/cancel', null, {});
		}

		/**
		 * Send a request to claim an AWS Elemental device that you have purchased from a third-party vendor. After the request succeeds, you will own the device.
		 * Post prod/claimDevice
		 * @return {ClaimDeviceResponse} Success
		 */
		ClaimDevice(requestBody: ClaimDevicePostBody): Observable<ClaimDeviceResponse> {
			return this.http.post<ClaimDeviceResponse>(this.baseUri + 'prod/claimDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Create a partner input
		 * Post prod/inputs/{inputId}/partners
		 * @param {string} inputId Unique ID of the input.
		 * @return {void} 
		 */
		CreatePartnerInput(inputId: string, requestBody: CreatePartnerInputPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/inputs/' + (inputId == null ? '' : encodeURIComponent(inputId)) + '/partners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create tags for a resource
		 * Post prod/tags/{resource_arn}
		 * @return {void} 
		 */
		CreateTags(resource_arn: string, requestBody: CreateTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'prod/tags/{resource_arn}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Produces list of tags that have been created for a resource
		 * Get prod/tags/{resource_arn}
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'prod/tags/{resource_arn}', {});
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
			return this.http.delete(this.baseUri + 'prod/tags/{resource_arn}#tagKeys?' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
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
		 * Get the latest thumbnail data for the input device.
		 * Get prod/inputDevices/{inputDeviceId}/thumbnailData#accept
		 * @param {string} inputDeviceId The unique ID of this input device. For example, hd-123456789abcdef.
		 * @return {DescribeInputDeviceThumbnailResponse} Success
		 */
		DescribeInputDeviceThumbnail(inputDeviceId: string): Observable<DescribeInputDeviceThumbnailResponse> {
			return this.http.get<DescribeInputDeviceThumbnailResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)) + '/thumbnailData#accept', {});
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
		 * Get account configuration
		 * Get prod/accountConfiguration
		 * @return {DescribeAccountConfigurationResponse} Success
		 */
		DescribeAccountConfiguration(): Observable<DescribeAccountConfigurationResponse> {
			return this.http.get<DescribeAccountConfigurationResponse>(this.baseUri + 'prod/accountConfiguration', {});
		}

		/**
		 * Update account configuration
		 * Put prod/accountConfiguration
		 * @return {UpdateAccountConfigurationResponse} Success
		 */
		UpdateAccountConfiguration(requestBody: UpdateAccountConfigurationPutBody): Observable<UpdateAccountConfigurationResponse> {
			return this.http.put<UpdateAccountConfigurationResponse>(this.baseUri + 'prod/accountConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe the latest thumbnails data.
		 * Get prod/channels/{channelId}/thumbnails#pipelineId&thumbnailType
		 * @param {string} channelId Unique ID of the channel
		 * @param {string} pipelineId Pipeline ID ("0" or "1")
		 * @param {string} thumbnailType thumbnail type
		 * @return {DescribeThumbnailsResponse} Success
		 */
		DescribeThumbnails(channelId: string, pipelineId: string, thumbnailType: string): Observable<DescribeThumbnailsResponse> {
			return this.http.get<DescribeThumbnailsResponse>(this.baseUri + 'prod/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/thumbnails#pipelineId&thumbnailType&pipelineId=' + (pipelineId == null ? '' : encodeURIComponent(pipelineId)) + '&thumbnailType=' + (thumbnailType == null ? '' : encodeURIComponent(thumbnailType)), {});
		}

		/**
		 * List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.
		 * Get prod/inputDeviceTransfers#transferType
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInputDeviceTransfersResponse} Success
		 */
		ListInputDeviceTransfers(maxResults: number | null | undefined, nextToken: string | null | undefined, transferType: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListInputDeviceTransfersResponse> {
			return this.http.get<ListInputDeviceTransfersResponse>(this.baseUri + 'prod/inputDeviceTransfers#transferType?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&transferType=' + (transferType == null ? '' : encodeURIComponent(transferType)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
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
		 * @param {string} codec Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
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
		 * @param {string} codec Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
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
		 * Send a reboot command to the specified input device. The device will begin rebooting within a few seconds of sending the command. When the reboot is complete, the device’s connection status will change to connected.
		 * Post prod/inputDevices/{inputDeviceId}/reboot
		 * @param {string} inputDeviceId The unique ID of the input device to reboot. For example, hd-123456789abcdef.
		 * @return {RebootInputDeviceResponse} Success
		 */
		RebootInputDevice(inputDeviceId: string, requestBody: RebootInputDevicePostBody): Observable<RebootInputDeviceResponse> {
			return this.http.post<RebootInputDeviceResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)) + '/reboot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reject the transfer of the specified input device to your AWS account.
		 * Post prod/inputDevices/{inputDeviceId}/reject
		 * @param {string} inputDeviceId The unique ID of the input device to reject. For example, hd-123456789abcdef.
		 * @return {RejectInputDeviceTransferResponse} Success
		 */
		RejectInputDeviceTransfer(inputDeviceId: string): Observable<RejectInputDeviceTransferResponse> {
			return this.http.post<RejectInputDeviceTransferResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)) + '/reject', null, {});
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
		 * Start a maintenance window for the specified input device. Starting a maintenance window will give the device up to two hours to install software. If the device was streaming prior to the maintenance, it will resume streaming when the software is fully installed. Devices automatically install updates while they are powered on and their MediaLive channels are stopped. A maintenance window allows you to update a device without having to stop MediaLive channels that use the device. The device must remain powered on and connected to the internet for the duration of the maintenance.
		 * Post prod/inputDevices/{inputDeviceId}/startInputDeviceMaintenanceWindow
		 * @param {string} inputDeviceId The unique ID of the input device to start a maintenance window for. For example, hd-123456789abcdef.
		 * @return {StartInputDeviceMaintenanceWindowResponse} Success
		 */
		StartInputDeviceMaintenanceWindow(inputDeviceId: string): Observable<StartInputDeviceMaintenanceWindowResponse> {
			return this.http.post<StartInputDeviceMaintenanceWindowResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)) + '/startInputDeviceMaintenanceWindow', null, {});
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
		 * Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.
		 * Post prod/inputDevices/{inputDeviceId}/transfer
		 * @param {string} inputDeviceId The unique ID of this input device. For example, hd-123456789abcdef.
		 * @return {TransferInputDeviceResponse} Success
		 */
		TransferInputDevice(inputDeviceId: string, requestBody: TransferInputDevicePostBody): Observable<TransferInputDeviceResponse> {
			return this.http.post<TransferInputDeviceResponse>(this.baseUri + 'prod/inputDevices/' + (inputDeviceId == null ? '' : encodeURIComponent(inputDeviceId)) + '/transfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export interface BatchDeletePostBody {

		/** Placeholder documentation for __listOf__string */
		channelIds?: Array<string>;

		/** Placeholder documentation for __listOf__string */
		inputIds?: Array<string>;

		/** Placeholder documentation for __listOf__string */
		inputSecurityGroupIds?: Array<string>;

		/** Placeholder documentation for __listOf__string */
		multiplexIds?: Array<string>;
	}
	export interface BatchDeletePostBodyFormProperties {
	}
	export function CreateBatchDeletePostBodyFormGroup() {
		return new FormGroup<BatchDeletePostBodyFormProperties>({
		});

	}

	export interface BatchStartPostBody {

		/** Placeholder documentation for __listOf__string */
		channelIds?: Array<string>;

		/** Placeholder documentation for __listOf__string */
		multiplexIds?: Array<string>;
	}
	export interface BatchStartPostBodyFormProperties {
	}
	export function CreateBatchStartPostBodyFormGroup() {
		return new FormGroup<BatchStartPostBodyFormProperties>({
		});

	}

	export interface BatchStopPostBody {

		/** Placeholder documentation for __listOf__string */
		channelIds?: Array<string>;

		/** Placeholder documentation for __listOf__string */
		multiplexIds?: Array<string>;
	}
	export interface BatchStopPostBodyFormProperties {
	}
	export function CreateBatchStopPostBodyFormGroup() {
		return new FormGroup<BatchStopPostBodyFormProperties>({
		});

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
		ScheduleActions?: Array<ScheduleAction>;
	}
	export interface BatchUpdateSchedulePutBodyCreatesFormProperties {
	}
	export function CreateBatchUpdateSchedulePutBodyCreatesFormGroup() {
		return new FormGroup<BatchUpdateSchedulePutBodyCreatesFormProperties>({
		});

	}

	export interface BatchUpdateSchedulePutBodyDeletes {
		ActionNames?: Array<string>;
	}
	export interface BatchUpdateSchedulePutBodyDeletesFormProperties {
	}
	export function CreateBatchUpdateSchedulePutBodyDeletesFormGroup() {
		return new FormGroup<BatchUpdateSchedulePutBodyDeletesFormProperties>({
		});

	}

	export interface ClaimDevicePostBody {

		/** Placeholder documentation for __string */
		id?: string | null;
	}
	export interface ClaimDevicePostBodyFormProperties {

		/** Placeholder documentation for __string */
		id: FormControl<string | null | undefined>,
	}
	export function CreateClaimDevicePostBodyFormGroup() {
		return new FormGroup<ClaimDevicePostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBody {

		/** Placeholder documentation for CdiInputSpecification */
		cdiInputSpecification?: CreateChannelPostBodyCdiInputSpecification;

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		channelClass?: ChannelClass | null;

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;

		/** Encoder Settings */
		encoderSettings?: CreateChannelPostBodyEncoderSettings;

		/** Placeholder documentation for __listOfInputAttachment */
		inputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		inputSpecification?: CreateChannelPostBodyInputSpecification;

		/** The log level the user wants for their channel. */
		logLevel?: LogLevel | null;

		/** Placeholder documentation for MaintenanceCreateSettings */
		maintenance?: CreateChannelPostBodyMaintenance;

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

		/**
		 * The properties for a private VPC Output
		 * When this property is specified, the output egress addresses will be created in a user specified VPC
		 */
		vpc?: CreateChannelPostBodyVpc;
	}
	export interface CreateChannelPostBodyFormProperties {

		/** A standard channel has two encoding pipelines and a single pipeline channel only has one. */
		channelClass: FormControl<ChannelClass | null | undefined>,

		/** The log level the user wants for their channel. */
		logLevel: FormControl<LogLevel | null | undefined>,

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
			channelClass: new FormControl<ChannelClass | null | undefined>(undefined),
			logLevel: new FormControl<LogLevel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			reserved: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBodyCdiInputSpecification {
		Resolution?: CdiInputResolution;
	}
	export interface CreateChannelPostBodyCdiInputSpecificationFormProperties {
		Resolution: FormControl<CdiInputResolution | null | undefined>,
	}
	export function CreateCreateChannelPostBodyCdiInputSpecificationFormGroup() {
		return new FormGroup<CreateChannelPostBodyCdiInputSpecificationFormProperties>({
			Resolution: new FormControl<CdiInputResolution | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBodyEncoderSettings {
		AudioDescriptions?: Array<AudioDescription>;
		AvailBlanking?: AvailBlanking;
		AvailConfiguration?: AvailConfiguration;
		BlackoutSlate?: BlackoutSlate;
		CaptionDescriptions?: Array<CaptionDescription>;
		FeatureActivations?: FeatureActivations;
		GlobalConfiguration?: GlobalConfiguration;
		MotionGraphicsConfiguration?: MotionGraphicsConfiguration;
		NielsenConfiguration?: NielsenConfiguration;
		OutputGroups?: Array<OutputGroup>;
		TimecodeConfig?: TimecodeConfig;
		VideoDescriptions?: Array<VideoDescription>;
		ThumbnailConfiguration?: ThumbnailConfiguration;
	}
	export interface CreateChannelPostBodyEncoderSettingsFormProperties {
	}
	export function CreateCreateChannelPostBodyEncoderSettingsFormGroup() {
		return new FormGroup<CreateChannelPostBodyEncoderSettingsFormProperties>({
		});

	}

	export interface CreateChannelPostBodyInputSpecification {
		Codec?: InputCodec;
		MaximumBitrate?: InputMaximumBitrate;
		Resolution?: InputResolution;
	}
	export interface CreateChannelPostBodyInputSpecificationFormProperties {
		Codec: FormControl<InputCodec | null | undefined>,
		MaximumBitrate: FormControl<InputMaximumBitrate | null | undefined>,
		Resolution: FormControl<InputResolution | null | undefined>,
	}
	export function CreateCreateChannelPostBodyInputSpecificationFormGroup() {
		return new FormGroup<CreateChannelPostBodyInputSpecificationFormProperties>({
			Codec: new FormControl<InputCodec | null | undefined>(undefined),
			MaximumBitrate: new FormControl<InputMaximumBitrate | null | undefined>(undefined),
			Resolution: new FormControl<InputResolution | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBodyMaintenance {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceStartTime?: string;
	}
	export interface CreateChannelPostBodyMaintenanceFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelPostBodyMaintenanceFormGroup() {
		return new FormGroup<CreateChannelPostBodyMaintenanceFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBodyVpc {
		PublicAddressAllocationIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
	}
	export interface CreateChannelPostBodyVpcFormProperties {
	}
	export function CreateCreateChannelPostBodyVpcFormGroup() {
		return new FormGroup<CreateChannelPostBodyVpcFormProperties>({
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

		/** The different types of inputs that AWS Elemental MediaLive supports. */
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

		/** The different types of inputs that AWS Elemental MediaLive supports. */
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
		SecurityGroupIds?: Array<string>;
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
		MaximumVideoBufferDelayMilliseconds?: number | null;
		TransportStreamBitrate?: number | null;
		TransportStreamId?: number | null;
		TransportStreamReservedBitrate?: number | null;
	}
	export interface CreateMultiplexPostBodyMultiplexSettingsFormProperties {
		MaximumVideoBufferDelayMilliseconds: FormControl<number | null | undefined>,
		TransportStreamBitrate: FormControl<number | null | undefined>,
		TransportStreamId: FormControl<number | null | undefined>,
		TransportStreamReservedBitrate: FormControl<number | null | undefined>,
	}
	export function CreateCreateMultiplexPostBodyMultiplexSettingsFormGroup() {
		return new FormGroup<CreateMultiplexPostBodyMultiplexSettingsFormProperties>({
			MaximumVideoBufferDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			TransportStreamBitrate: new FormControl<number | null | undefined>(undefined),
			TransportStreamId: new FormControl<number | null | undefined>(undefined),
			TransportStreamReservedBitrate: new FormControl<number | null | undefined>(undefined),
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
		PreferredChannelPipeline?: PreferredChannelPipeline;
		ProgramNumber?: number | null;
		ServiceDescriptor?: MultiplexProgramServiceDescriptor;
		VideoSettings?: MultiplexVideoSettings;
	}
	export interface CreateMultiplexProgramPostBodyMultiplexProgramSettingsFormProperties {
		PreferredChannelPipeline: FormControl<PreferredChannelPipeline | null | undefined>,
		ProgramNumber: FormControl<number | null | undefined>,
	}
	export function CreateCreateMultiplexProgramPostBodyMultiplexProgramSettingsFormGroup() {
		return new FormGroup<CreateMultiplexProgramPostBodyMultiplexProgramSettingsFormProperties>({
			PreferredChannelPipeline: new FormControl<PreferredChannelPipeline | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatePartnerInputPostBody {

		/** Placeholder documentation for __string */
		requestId?: string | null;

		/** Placeholder documentation for Tags */
		tags?: {[id: string]: string };
	}
	export interface CreatePartnerInputPostBodyFormProperties {

		/** Placeholder documentation for __string */
		requestId: FormControl<string | null | undefined>,

		/** Placeholder documentation for Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePartnerInputPostBodyFormGroup() {
		return new FormGroup<CreatePartnerInputPostBodyFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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

		/** Placeholder documentation for CdiInputSpecification */
		cdiInputSpecification?: UpdateChannelPutBodyCdiInputSpecification;

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;

		/** Encoder Settings */
		encoderSettings?: UpdateChannelPutBodyEncoderSettings;

		/** Placeholder documentation for __listOfInputAttachment */
		inputAttachments?: Array<InputAttachment>;

		/** Placeholder documentation for InputSpecification */
		inputSpecification?: UpdateChannelPutBodyInputSpecification;

		/** The log level the user wants for their channel. */
		logLevel?: LogLevel | null;

		/** Placeholder documentation for MaintenanceUpdateSettings */
		maintenance?: UpdateChannelPutBodyMaintenance;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Placeholder documentation for __string */
		roleArn?: string | null;
	}
	export interface UpdateChannelPutBodyFormProperties {

		/** The log level the user wants for their channel. */
		logLevel: FormControl<LogLevel | null | undefined>,

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFormProperties>({
			logLevel: new FormControl<LogLevel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBodyCdiInputSpecification {
		Resolution?: CdiInputResolution;
	}
	export interface UpdateChannelPutBodyCdiInputSpecificationFormProperties {
		Resolution: FormControl<CdiInputResolution | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyCdiInputSpecificationFormGroup() {
		return new FormGroup<UpdateChannelPutBodyCdiInputSpecificationFormProperties>({
			Resolution: new FormControl<CdiInputResolution | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBodyEncoderSettings {
		AudioDescriptions?: Array<AudioDescription>;
		AvailBlanking?: AvailBlanking;
		AvailConfiguration?: AvailConfiguration;
		BlackoutSlate?: BlackoutSlate;
		CaptionDescriptions?: Array<CaptionDescription>;
		FeatureActivations?: FeatureActivations;
		GlobalConfiguration?: GlobalConfiguration;
		MotionGraphicsConfiguration?: MotionGraphicsConfiguration;
		NielsenConfiguration?: NielsenConfiguration;
		OutputGroups?: Array<OutputGroup>;
		TimecodeConfig?: TimecodeConfig;
		VideoDescriptions?: Array<VideoDescription>;
		ThumbnailConfiguration?: ThumbnailConfiguration;
	}
	export interface UpdateChannelPutBodyEncoderSettingsFormProperties {
	}
	export function CreateUpdateChannelPutBodyEncoderSettingsFormGroup() {
		return new FormGroup<UpdateChannelPutBodyEncoderSettingsFormProperties>({
		});

	}

	export interface UpdateChannelPutBodyInputSpecification {
		Codec?: InputCodec;
		MaximumBitrate?: InputMaximumBitrate;
		Resolution?: InputResolution;
	}
	export interface UpdateChannelPutBodyInputSpecificationFormProperties {
		Codec: FormControl<InputCodec | null | undefined>,
		MaximumBitrate: FormControl<InputMaximumBitrate | null | undefined>,
		Resolution: FormControl<InputResolution | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyInputSpecificationFormGroup() {
		return new FormGroup<UpdateChannelPutBodyInputSpecificationFormProperties>({
			Codec: new FormControl<InputCodec | null | undefined>(undefined),
			MaximumBitrate: new FormControl<InputMaximumBitrate | null | undefined>(undefined),
			Resolution: new FormControl<InputResolution | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBodyMaintenance {
		MaintenanceDay?: MaintenanceDay;
		MaintenanceScheduledDate?: string;
		MaintenanceStartTime?: string;
	}
	export interface UpdateChannelPutBodyMaintenanceFormProperties {
		MaintenanceDay: FormControl<MaintenanceDay | null | undefined>,
		MaintenanceScheduledDate: FormControl<string | null | undefined>,
		MaintenanceStartTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyMaintenanceFormGroup() {
		return new FormGroup<UpdateChannelPutBodyMaintenanceFormProperties>({
			MaintenanceDay: new FormControl<MaintenanceDay | null | undefined>(undefined),
			MaintenanceScheduledDate: new FormControl<string | null | undefined>(undefined),
			MaintenanceStartTime: new FormControl<string | null | undefined>(undefined),
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
		MaximumVideoBufferDelayMilliseconds?: number | null;
		TransportStreamBitrate?: number | null;
		TransportStreamId?: number | null;
		TransportStreamReservedBitrate?: number | null;
	}
	export interface UpdateMultiplexPutBodyMultiplexSettingsFormProperties {
		MaximumVideoBufferDelayMilliseconds: FormControl<number | null | undefined>,
		TransportStreamBitrate: FormControl<number | null | undefined>,
		TransportStreamId: FormControl<number | null | undefined>,
		TransportStreamReservedBitrate: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMultiplexPutBodyMultiplexSettingsFormGroup() {
		return new FormGroup<UpdateMultiplexPutBodyMultiplexSettingsFormProperties>({
			MaximumVideoBufferDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			TransportStreamBitrate: new FormControl<number | null | undefined>(undefined),
			TransportStreamId: new FormControl<number | null | undefined>(undefined),
			TransportStreamReservedBitrate: new FormControl<number | null | undefined>(undefined),
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
		PreferredChannelPipeline?: PreferredChannelPipeline;
		ProgramNumber?: number | null;
		ServiceDescriptor?: MultiplexProgramServiceDescriptor;
		VideoSettings?: MultiplexVideoSettings;
	}
	export interface UpdateMultiplexProgramPutBodyMultiplexProgramSettingsFormProperties {
		PreferredChannelPipeline: FormControl<PreferredChannelPipeline | null | undefined>,
		ProgramNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMultiplexProgramPutBodyMultiplexProgramSettingsFormGroup() {
		return new FormGroup<UpdateMultiplexProgramPutBodyMultiplexProgramSettingsFormProperties>({
			PreferredChannelPipeline: new FormControl<PreferredChannelPipeline | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateReservationPutBody {

		/** Placeholder documentation for __string */
		name?: string | null;

		/** The Renewal settings for Reservations */
		renewalSettings?: UpdateReservationPutBodyRenewalSettings;
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

	export interface UpdateReservationPutBodyRenewalSettings {
		AutomaticRenewal?: ReservationAutomaticRenewal;
		RenewalCount?: number | null;
	}
	export interface UpdateReservationPutBodyRenewalSettingsFormProperties {
		AutomaticRenewal: FormControl<ReservationAutomaticRenewal | null | undefined>,
		RenewalCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateReservationPutBodyRenewalSettingsFormGroup() {
		return new FormGroup<UpdateReservationPutBodyRenewalSettingsFormProperties>({
			AutomaticRenewal: new FormControl<ReservationAutomaticRenewal | null | undefined>(undefined),
			RenewalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateInputDevicePutBody {

		/** Configurable settings for the input device. */
		hdDeviceSettings?: UpdateInputDevicePutBodyHdDeviceSettings;

		/** Placeholder documentation for __string */
		name?: string | null;

		/** Configurable settings for the input device. */
		uhdDeviceSettings?: UpdateInputDevicePutBodyUhdDeviceSettings;

		/** Placeholder documentation for __string */
		availabilityZone?: string | null;
	}
	export interface UpdateInputDevicePutBodyFormProperties {

		/** Placeholder documentation for __string */
		name: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		availabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputDevicePutBodyFormGroup() {
		return new FormGroup<UpdateInputDevicePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInputDevicePutBodyHdDeviceSettings {
		ConfiguredInput?: InputDeviceConfiguredInput;
		MaxBitrate?: number | null;
		LatencyMs?: number | null;
	}
	export interface UpdateInputDevicePutBodyHdDeviceSettingsFormProperties {
		ConfiguredInput: FormControl<InputDeviceConfiguredInput | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		LatencyMs: FormControl<number | null | undefined>,
	}
	export function CreateUpdateInputDevicePutBodyHdDeviceSettingsFormGroup() {
		return new FormGroup<UpdateInputDevicePutBodyHdDeviceSettingsFormProperties>({
			ConfiguredInput: new FormControl<InputDeviceConfiguredInput | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			LatencyMs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateInputDevicePutBodyUhdDeviceSettings {
		ConfiguredInput?: InputDeviceConfiguredInput;
		MaxBitrate?: number | null;
		LatencyMs?: number | null;
	}
	export interface UpdateInputDevicePutBodyUhdDeviceSettingsFormProperties {
		ConfiguredInput: FormControl<InputDeviceConfiguredInput | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		LatencyMs: FormControl<number | null | undefined>,
	}
	export function CreateUpdateInputDevicePutBodyUhdDeviceSettingsFormGroup() {
		return new FormGroup<UpdateInputDevicePutBodyUhdDeviceSettingsFormProperties>({
			ConfiguredInput: new FormControl<InputDeviceConfiguredInput | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			LatencyMs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateAccountConfigurationPutBody {

		/** Placeholder documentation for AccountConfiguration */
		accountConfiguration?: UpdateAccountConfigurationPutBodyAccountConfiguration;
	}
	export interface UpdateAccountConfigurationPutBodyFormProperties {
	}
	export function CreateUpdateAccountConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateAccountConfigurationPutBodyFormProperties>({
		});

	}

	export interface UpdateAccountConfigurationPutBodyAccountConfiguration {
		KmsKeyId?: string;
	}
	export interface UpdateAccountConfigurationPutBodyAccountConfigurationFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccountConfigurationPutBodyAccountConfigurationFormGroup() {
		return new FormGroup<UpdateAccountConfigurationPutBodyAccountConfigurationFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
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

		/** The Renewal settings for Reservations */
		renewalSettings?: PurchaseOfferingPostBodyRenewalSettings;

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

	export interface PurchaseOfferingPostBodyRenewalSettings {
		AutomaticRenewal?: ReservationAutomaticRenewal;
		RenewalCount?: number | null;
	}
	export interface PurchaseOfferingPostBodyRenewalSettingsFormProperties {
		AutomaticRenewal: FormControl<ReservationAutomaticRenewal | null | undefined>,
		RenewalCount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseOfferingPostBodyRenewalSettingsFormGroup() {
		return new FormGroup<PurchaseOfferingPostBodyRenewalSettingsFormProperties>({
			AutomaticRenewal: new FormControl<ReservationAutomaticRenewal | null | undefined>(undefined),
			RenewalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RebootInputDevicePostBody {

		/** Whether or not to force reboot the input device. */
		force?: RebootInputDeviceForce | null;
	}
	export interface RebootInputDevicePostBodyFormProperties {

		/** Whether or not to force reboot the input device. */
		force: FormControl<RebootInputDeviceForce | null | undefined>,
	}
	export function CreateRebootInputDevicePostBodyFormGroup() {
		return new FormGroup<RebootInputDevicePostBodyFormProperties>({
			force: new FormControl<RebootInputDeviceForce | null | undefined>(undefined),
		});

	}

	export interface TransferInputDevicePostBody {

		/** Placeholder documentation for __string */
		targetCustomerId?: string | null;

		/** Placeholder documentation for __string */
		targetRegion?: string | null;

		/** Placeholder documentation for __string */
		transferMessage?: string | null;
	}
	export interface TransferInputDevicePostBodyFormProperties {

		/** Placeholder documentation for __string */
		targetCustomerId: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		targetRegion: FormControl<string | null | undefined>,

		/** Placeholder documentation for __string */
		transferMessage: FormControl<string | null | undefined>,
	}
	export function CreateTransferInputDevicePostBodyFormGroup() {
		return new FormGroup<TransferInputDevicePostBodyFormProperties>({
			targetCustomerId: new FormControl<string | null | undefined>(undefined),
			targetRegion: new FormControl<string | null | undefined>(undefined),
			transferMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelClassPutBody {

		/**
		 * A standard channel has two encoding pipelines and a single pipeline channel only has one.
		 * Required
		 */
		channelClass: ChannelClass;

		/** Placeholder documentation for __listOfOutputDestination */
		destinations?: Array<OutputDestination>;
	}
	export interface UpdateChannelClassPutBodyFormProperties {

		/**
		 * A standard channel has two encoding pipelines and a single pipeline channel only has one.
		 * Required
		 */
		channelClass: FormControl<ChannelClass | null | undefined>,
	}
	export function CreateUpdateChannelClassPutBodyFormGroup() {
		return new FormGroup<UpdateChannelClassPutBodyFormProperties>({
			channelClass: new FormControl<ChannelClass | null | undefined>(undefined, [Validators.required]),
		});

	}

}

