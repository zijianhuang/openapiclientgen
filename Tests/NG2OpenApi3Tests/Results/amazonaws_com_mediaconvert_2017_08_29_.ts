import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateCertificateResponse {
	}
	export interface AssociateCertificateResponseFormProperties {
	}
	export function CreateAssociateCertificateResponseFormGroup() {
		return new FormGroup<AssociateCertificateResponseFormProperties>({
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

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
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

	export interface CancelJobResponse {
	}
	export interface CancelJobResponseFormProperties {
	}
	export function CreateCancelJobResponseFormGroup() {
		return new FormGroup<CancelJobResponseFormProperties>({
		});

	}

	export interface CreateJobResponse {
		Job?: Job;
	}
	export interface CreateJobResponseFormProperties {
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
		});

	}


	/** Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html */
	export interface Job {
		AccelerationSettings?: AccelerationSettings;
		AccelerationStatus?: AccelerationStatus;
		Arn?: string;
		BillingTagsSource?: BillingTagsSource;
		ClientRequestToken?: string;
		CreatedAt?: Date;
		CurrentPhase?: JobPhase;
		ErrorCode?: number | null;
		ErrorMessage?: string;
		HopDestinations?: Array<HopDestination>;
		Id?: string;
		JobPercentComplete?: number | null;
		JobTemplate?: string;
		Messages?: JobMessages;
		OutputGroupDetails?: Array<OutputGroupDetail>;
		Priority?: number | null;
		Queue?: string;
		QueueTransitions?: Array<QueueTransition>;
		RetryCount?: number | null;

		/** Required */
		Role: string;

		/** Required */
		Settings: JobSettings;
		SimulateReservedQueue?: CmafClientCache;
		Status?: JobStatus;
		StatusUpdateInterval?: StatusUpdateInterval;
		Timing?: Timing;
		UserMetadata?: __mapOf__string;
		Warnings?: Array<WarningGroup>;
	}

	/** Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html */
	export interface JobFormProperties {
		AccelerationStatus: FormControl<AccelerationStatus | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		BillingTagsSource: FormControl<BillingTagsSource | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		CurrentPhase: FormControl<JobPhase | null | undefined>,
		ErrorCode: FormControl<number | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		JobPercentComplete: FormControl<number | null | undefined>,
		JobTemplate: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Queue: FormControl<string | null | undefined>,
		RetryCount: FormControl<number | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		SimulateReservedQueue: FormControl<CmafClientCache | null | undefined>,
		Status: FormControl<JobStatus | null | undefined>,
		StatusUpdateInterval: FormControl<StatusUpdateInterval | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			AccelerationStatus: new FormControl<AccelerationStatus | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			BillingTagsSource: new FormControl<BillingTagsSource | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			CurrentPhase: new FormControl<JobPhase | null | undefined>(undefined),
			ErrorCode: new FormControl<number | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			JobPercentComplete: new FormControl<number | null | undefined>(undefined),
			JobTemplate: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Queue: new FormControl<string | null | undefined>(undefined),
			RetryCount: new FormControl<number | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SimulateReservedQueue: new FormControl<CmafClientCache | null | undefined>(undefined),
			Status: new FormControl<JobStatus | null | undefined>(undefined),
			StatusUpdateInterval: new FormControl<StatusUpdateInterval | null | undefined>(undefined),
		});

	}


	/** Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
	export interface AccelerationSettings {

		/** Required */
		Mode: AccelerationMode;
	}

	/** Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
	export interface AccelerationSettingsFormProperties {

		/** Required */
		Mode: FormControl<AccelerationMode | null | undefined>,
	}
	export function CreateAccelerationSettingsFormGroup() {
		return new FormGroup<AccelerationSettingsFormProperties>({
			Mode: new FormControl<AccelerationMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specify whether the service runs your job with accelerated transcoding. Choose DISABLED if you don't want accelerated transcoding. Choose ENABLED if you want your job to run with accelerated transcoding and to fail if your input files or your job settings aren't compatible with accelerated transcoding. Choose PREFERRED if you want your job to run with accelerated transcoding if the job is compatible with the feature and to run at standard speed if it's not. */
	export enum AccelerationMode { DISABLED = 0, ENABLED = 1, PREFERRED = 2 }


	/** Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED. */
	export enum AccelerationStatus { NOT_APPLICABLE = 0, IN_PROGRESS = 1, ACCELERATED = 2, NOT_ACCELERATED = 3 }


	/** The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. */
	export enum BillingTagsSource { QUEUE = 0, PRESET = 1, JOB_TEMPLATE = 2, JOB = 3 }


	/** A job's phase can be PROBING, TRANSCODING OR UPLOADING */
	export enum JobPhase { PROBING = 0, TRANSCODING = 1, UPLOADING = 2 }


	/** Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed. */
	export interface HopDestination {
		Priority?: number | null;
		Queue?: string;
		WaitMinutes?: number | null;
	}

	/** Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed. */
	export interface HopDestinationFormProperties {
		Priority: FormControl<number | null | undefined>,
		Queue: FormControl<string | null | undefined>,
		WaitMinutes: FormControl<number | null | undefined>,
	}
	export function CreateHopDestinationFormGroup() {
		return new FormGroup<HopDestinationFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined),
			Queue: new FormControl<string | null | undefined>(undefined),
			WaitMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides messages from the service about jobs that you have already successfully submitted. */
	export interface JobMessages {
		Info?: Array<string>;
		Warning?: Array<string>;
	}

	/** Provides messages from the service about jobs that you have already successfully submitted. */
	export interface JobMessagesFormProperties {
	}
	export function CreateJobMessagesFormGroup() {
		return new FormGroup<JobMessagesFormProperties>({
		});

	}


	/** Contains details about the output groups specified in the job settings. */
	export interface OutputGroupDetail {
		OutputDetails?: Array<OutputDetail>;
	}

	/** Contains details about the output groups specified in the job settings. */
	export interface OutputGroupDetailFormProperties {
	}
	export function CreateOutputGroupDetailFormGroup() {
		return new FormGroup<OutputGroupDetailFormProperties>({
		});

	}


	/** Details regarding output */
	export interface OutputDetail {
		DurationInMs?: number | null;
		VideoDetails?: VideoDetail;
	}

	/** Details regarding output */
	export interface OutputDetailFormProperties {
		DurationInMs: FormControl<number | null | undefined>,
	}
	export function CreateOutputDetailFormGroup() {
		return new FormGroup<OutputDetailFormProperties>({
			DurationInMs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about the output's video stream */
	export interface VideoDetail {
		HeightInPx?: number | null;
		WidthInPx?: number | null;
	}

	/** Contains details about the output's video stream */
	export interface VideoDetailFormProperties {
		HeightInPx: FormControl<number | null | undefined>,
		WidthInPx: FormControl<number | null | undefined>,
	}
	export function CreateVideoDetailFormGroup() {
		return new FormGroup<VideoDetailFormProperties>({
			HeightInPx: new FormControl<number | null | undefined>(undefined),
			WidthInPx: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Description of the source and destination queues between which the job has moved, along with the timestamp of the move */
	export interface QueueTransition {
		DestinationQueue?: string;
		SourceQueue?: string;
		Timestamp?: Date;
	}

	/** Description of the source and destination queues between which the job has moved, along with the timestamp of the move */
	export interface QueueTransitionFormProperties {
		DestinationQueue: FormControl<string | null | undefined>,
		SourceQueue: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateQueueTransitionFormGroup() {
		return new FormGroup<QueueTransitionFormProperties>({
			DestinationQueue: new FormControl<string | null | undefined>(undefined),
			SourceQueue: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** JobSettings contains all the transcode settings for a job. */
	export interface JobSettings {
		AdAvailOffset?: number | null;
		AvailBlanking?: AvailBlanking;
		Esam?: EsamSettings;
		ExtendedDataServices?: ExtendedDataServices;
		Inputs?: Array<Input>;
		KantarWatermark?: KantarWatermarkSettings;
		MotionImageInserter?: MotionImageInserter;
		NielsenConfiguration?: NielsenConfiguration;
		NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;
		OutputGroups?: Array<OutputGroup>;
		TimecodeConfig?: TimecodeConfig;
		TimedMetadataInsertion?: TimedMetadataInsertion;
	}

	/** JobSettings contains all the transcode settings for a job. */
	export interface JobSettingsFormProperties {
		AdAvailOffset: FormControl<number | null | undefined>,
	}
	export function CreateJobSettingsFormGroup() {
		return new FormGroup<JobSettingsFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use ad avail blanking settings to specify your output content during SCTE-35 triggered ad avails. You can blank your video or overlay it with an image. MediaConvert also removes any audio and embedded captions during the ad avail. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ad-avail-blanking.html. */
	export interface AvailBlanking {
		AvailBlankingImage?: string;
	}

	/** Use ad avail blanking settings to specify your output content during SCTE-35 triggered ad avails. You can blank your video or overlay it with an image. MediaConvert also removes any audio and embedded captions during the ad avail. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ad-avail-blanking.html. */
	export interface AvailBlankingFormProperties {
		AvailBlankingImage: FormControl<string | null | undefined>,
	}
	export function CreateAvailBlankingFormGroup() {
		return new FormGroup<AvailBlankingFormProperties>({
			AvailBlankingImage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings. */
	export interface EsamSettings {
		ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification;
		ResponseSignalPreroll?: number | null;
		SignalProcessingNotification?: EsamSignalProcessingNotification;
	}

	/** Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings. */
	export interface EsamSettingsFormProperties {
		ResponseSignalPreroll: FormControl<number | null | undefined>,
	}
	export function CreateEsamSettingsFormGroup() {
		return new FormGroup<EsamSettingsFormProperties>({
			ResponseSignalPreroll: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025. */
	export interface EsamManifestConfirmConditionNotification {
		MccXml?: string;
	}

	/** ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025. */
	export interface EsamManifestConfirmConditionNotificationFormProperties {
		MccXml: FormControl<string | null | undefined>,
	}
	export function CreateEsamManifestConfirmConditionNotificationFormGroup() {
		return new FormGroup<EsamManifestConfirmConditionNotificationFormProperties>({
			MccXml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025. */
	export interface EsamSignalProcessingNotification {
		SccXml?: string;
	}

	/** ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025. */
	export interface EsamSignalProcessingNotificationFormProperties {
		SccXml: FormControl<string | null | undefined>,
	}
	export function CreateEsamSignalProcessingNotificationFormGroup() {
		return new FormGroup<EsamSignalProcessingNotificationFormProperties>({
			SccXml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory. */
	export interface ExtendedDataServices {
		CopyProtectionAction?: CopyProtectionAction;
		VchipAction?: CopyProtectionAction;
	}

	/** If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory. */
	export interface ExtendedDataServicesFormProperties {
		CopyProtectionAction: FormControl<CopyProtectionAction | null | undefined>,
		VchipAction: FormControl<CopyProtectionAction | null | undefined>,
	}
	export function CreateExtendedDataServicesFormGroup() {
		return new FormGroup<ExtendedDataServicesFormProperties>({
			CopyProtectionAction: new FormControl<CopyProtectionAction | null | undefined>(undefined),
			VchipAction: new FormControl<CopyProtectionAction | null | undefined>(undefined),
		});

	}


	/** The action to take on copy and redistribution control XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions. */
	export enum CopyProtectionAction { PASSTHROUGH = 0, STRIP = 1 }


	/** Use inputs to define the source files used in your transcoding job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/specify-input-settings.html. You can use multiple video inputs to do input stitching. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html */
	export interface Input {
		AdvancedInputFilter?: AdvancedInputFilter;
		AdvancedInputFilterSettings?: AdvancedInputFilterSettings;
		AudioSelectorGroups?: __mapOfAudioSelectorGroup;
		AudioSelectors?: __mapOfAudioSelector;
		CaptionSelectors?: __mapOfCaptionSelector;
		Crop?: Rectangle;
		DeblockFilter?: AdvancedInputFilter;
		DecryptionSettings?: InputDecryptionSettings;
		DenoiseFilter?: AdvancedInputFilter;
		DolbyVisionMetadataXml?: string;
		FileInput?: string;
		FilterEnable?: InputFilterEnable;
		FilterStrength?: number | null;
		ImageInserter?: ImageInserter;
		InputClippings?: Array<InputClipping>;
		InputScanType?: InputScanType;
		Position?: Rectangle;
		ProgramNumber?: number | null;
		PsiControl?: InputPsiControl;
		SupplementalImps?: Array<string>;
		TimecodeSource?: InputTimecodeSource;
		TimecodeStart?: string;
		VideoGenerator?: InputVideoGenerator;
		VideoSelector?: VideoSelector;
	}

	/** Use inputs to define the source files used in your transcoding job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/specify-input-settings.html. You can use multiple video inputs to do input stitching. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html */
	export interface InputFormProperties {
		AdvancedInputFilter: FormControl<AdvancedInputFilter | null | undefined>,
		DeblockFilter: FormControl<AdvancedInputFilter | null | undefined>,
		DenoiseFilter: FormControl<AdvancedInputFilter | null | undefined>,
		DolbyVisionMetadataXml: FormControl<string | null | undefined>,
		FileInput: FormControl<string | null | undefined>,
		FilterEnable: FormControl<InputFilterEnable | null | undefined>,
		FilterStrength: FormControl<number | null | undefined>,
		InputScanType: FormControl<InputScanType | null | undefined>,
		ProgramNumber: FormControl<number | null | undefined>,
		PsiControl: FormControl<InputPsiControl | null | undefined>,
		TimecodeSource: FormControl<InputTimecodeSource | null | undefined>,
		TimecodeStart: FormControl<string | null | undefined>,
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
			AdvancedInputFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			DeblockFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			DenoiseFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			DolbyVisionMetadataXml: new FormControl<string | null | undefined>(undefined),
			FileInput: new FormControl<string | null | undefined>(undefined),
			FilterEnable: new FormControl<InputFilterEnable | null | undefined>(undefined),
			FilterStrength: new FormControl<number | null | undefined>(undefined),
			InputScanType: new FormControl<InputScanType | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined),
			PsiControl: new FormControl<InputPsiControl | null | undefined>(undefined),
			TimecodeSource: new FormControl<InputTimecodeSource | null | undefined>(undefined),
			TimecodeStart: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use to remove noise, blocking, blurriness, or ringing from your input as a pre-filter step before encoding. The Advanced input filter removes more types of compression artifacts and is an improvement when compared to basic Deblock and Denoise filters. To remove video compression artifacts from your input and improve the video quality: Choose Enabled. Additionally, this filter can help increase the video quality of your output relative to its bitrate, since noisy inputs are more complex and require more bits to encode. To help restore loss of detail after applying the filter, you can optionally add texture or sharpening as an additional step. Jobs that use this feature incur pro-tier pricing. To not apply advanced input filtering: Choose Disabled. Note that you can still apply basic filtering with Deblock and Denoise. */
	export enum AdvancedInputFilter { ENABLED = 0, DISABLED = 1 }


	/** Optional settings for Advanced input filter when you set Advanced input filter to Enabled. */
	export interface AdvancedInputFilterSettings {
		AddTexture?: AdvancedInputFilter;
		Sharpening?: AdvancedInputFilterSharpen;
	}

	/** Optional settings for Advanced input filter when you set Advanced input filter to Enabled. */
	export interface AdvancedInputFilterSettingsFormProperties {
		AddTexture: FormControl<AdvancedInputFilter | null | undefined>,
		Sharpening: FormControl<AdvancedInputFilterSharpen | null | undefined>,
	}
	export function CreateAdvancedInputFilterSettingsFormGroup() {
		return new FormGroup<AdvancedInputFilterSettingsFormProperties>({
			AddTexture: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			Sharpening: new FormControl<AdvancedInputFilterSharpen | null | undefined>(undefined),
		});

	}


	/** Optionally specify the amount of sharpening to apply when you use the Advanced input filter. Sharpening adds contrast to the edges of your video content and can reduce softness. To apply no sharpening: Keep the default value, Off. To apply a minimal amount of sharpening choose Low, or for the maximum choose High. */
	export enum AdvancedInputFilterSharpen { OFF = 0, LOW = 1, HIGH = 2 }

	export interface __mapOfAudioSelectorGroup {
	}
	export interface __mapOfAudioSelectorGroupFormProperties {
	}
	export function Create__mapOfAudioSelectorGroupFormGroup() {
		return new FormGroup<__mapOfAudioSelectorGroupFormProperties>({
		});

	}

	export interface __mapOfAudioSelector {
	}
	export interface __mapOfAudioSelectorFormProperties {
	}
	export function Create__mapOfAudioSelectorFormGroup() {
		return new FormGroup<__mapOfAudioSelectorFormProperties>({
		});

	}

	export interface __mapOfCaptionSelector {
	}
	export interface __mapOfCaptionSelectorFormProperties {
	}
	export function Create__mapOfCaptionSelectorFormGroup() {
		return new FormGroup<__mapOfCaptionSelectorFormProperties>({
		});

	}


	/** Use Rectangle to identify a specific area of the video frame. */
	export interface Rectangle {
		Height?: number | null;
		Width?: number | null;
		X?: number | null;
		Y?: number | null;
	}

	/** Use Rectangle to identify a specific area of the video frame. */
	export interface RectangleFormProperties {
		Height: FormControl<number | null | undefined>,
		Width: FormControl<number | null | undefined>,
		X: FormControl<number | null | undefined>,
		Y: FormControl<number | null | undefined>,
	}
	export function CreateRectangleFormGroup() {
		return new FormGroup<RectangleFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
			X: new FormControl<number | null | undefined>(undefined),
			Y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content. */
	export interface InputDecryptionSettings {
		DecryptionMode?: DecryptionMode;
		EncryptedDecryptionKey?: string;
		InitializationVector?: string;
		KmsKeyRegion?: string;
	}

	/** Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content. */
	export interface InputDecryptionSettingsFormProperties {
		DecryptionMode: FormControl<DecryptionMode | null | undefined>,
		EncryptedDecryptionKey: FormControl<string | null | undefined>,
		InitializationVector: FormControl<string | null | undefined>,
		KmsKeyRegion: FormControl<string | null | undefined>,
	}
	export function CreateInputDecryptionSettingsFormGroup() {
		return new FormGroup<InputDecryptionSettingsFormProperties>({
			DecryptionMode: new FormControl<DecryptionMode | null | undefined>(undefined),
			EncryptedDecryptionKey: new FormControl<string | null | undefined>(undefined),
			InitializationVector: new FormControl<string | null | undefined>(undefined),
			KmsKeyRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specify the encryption mode that you used to encrypt your input files. */
	export enum DecryptionMode { AES_CTR = 0, AES_CBC = 1, AES_GCM = 2 }


	/** Specify whether to apply input filtering to improve the video quality of your input. To apply filtering depending on your input type and quality: Choose Auto. To apply no filtering: Choose Disable. To apply filtering regardless of your input type and quality: Choose Force. When you do, you must also specify a value for Filter strength. */
	export enum InputFilterEnable { AUTO = 0, DISABLE = 1, FORCE = 2 }


	/** Use the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/graphic-overlay.html. This setting is disabled by default. */
	export interface ImageInserter {
		InsertableImages?: Array<InsertableImage>;
		SdrReferenceWhiteLevel?: number | null;
	}

	/** Use the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/graphic-overlay.html. This setting is disabled by default. */
	export interface ImageInserterFormProperties {
		SdrReferenceWhiteLevel: FormControl<number | null | undefined>,
	}
	export function CreateImageInserterFormGroup() {
		return new FormGroup<ImageInserterFormProperties>({
			SdrReferenceWhiteLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** These settings apply to a specific graphic overlay. You can include multiple overlays in your job. */
	export interface InsertableImage {
		Duration?: number | null;
		FadeIn?: number | null;
		FadeOut?: number | null;
		Height?: number | null;
		ImageInserterInput?: string;
		ImageX?: number | null;
		ImageY?: number | null;
		Layer?: number | null;
		Opacity?: number | null;
		StartTime?: string;
		Width?: number | null;
	}

	/** These settings apply to a specific graphic overlay. You can include multiple overlays in your job. */
	export interface InsertableImageFormProperties {
		Duration: FormControl<number | null | undefined>,
		FadeIn: FormControl<number | null | undefined>,
		FadeOut: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		ImageInserterInput: FormControl<string | null | undefined>,
		ImageX: FormControl<number | null | undefined>,
		ImageY: FormControl<number | null | undefined>,
		Layer: FormControl<number | null | undefined>,
		Opacity: FormControl<number | null | undefined>,
		StartTime: FormControl<string | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateInsertableImageFormGroup() {
		return new FormGroup<InsertableImageFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined),
			FadeIn: new FormControl<number | null | undefined>(undefined),
			FadeOut: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			ImageInserterInput: new FormControl<string | null | undefined>(undefined),
			ImageX: new FormControl<number | null | undefined>(undefined),
			ImageY: new FormControl<number | null | undefined>(undefined),
			Layer: new FormControl<number | null | undefined>(undefined),
			Opacity: new FormControl<number | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** To transcode only portions of your input, include one input clip for each part of your input that you want in your output. All input clips that you specify will be included in every output of the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html. */
	export interface InputClipping {
		EndTimecode?: string;
		StartTimecode?: string;
	}

	/** To transcode only portions of your input, include one input clip for each part of your input that you want in your output. All input clips that you specify will be included in every output of the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html. */
	export interface InputClippingFormProperties {
		EndTimecode: FormControl<string | null | undefined>,
		StartTimecode: FormControl<string | null | undefined>,
	}
	export function CreateInputClippingFormGroup() {
		return new FormGroup<InputClippingFormProperties>({
			EndTimecode: new FormControl<string | null | undefined>(undefined),
			StartTimecode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto. Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts. */
	export enum InputScanType { AUTO = 0, PSF = 1 }


	/**
	 * Set PSI control for transport stream inputs to specify which data the demux process to scans.
	 * * Ignore PSI - Scan all PIDs for audio and video.
	 * * Use PSI - Scan only PSI data.
	 */
	export enum InputPsiControl { IGNORE_PSI = 0, USE_PSI = 1 }


	/** Use this Timecode source setting, located under the input settings, to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded to use the timecodes in your input video. Choose Start at zero to start the first frame at zero. Choose Specified start to start the first frame at the timecode that you specify in the setting Start timecode. If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode. */
	export enum InputTimecodeSource { EMBEDDED = 0, ZEROBASED = 1, SPECIFIEDSTART = 2 }


	/** When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html */
	export interface InputVideoGenerator {
		Duration?: number | null;
	}

	/** When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html */
	export interface InputVideoGeneratorFormProperties {
		Duration: FormControl<number | null | undefined>,
	}
	export function CreateInputVideoGeneratorFormGroup() {
		return new FormGroup<InputVideoGeneratorFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector. */
	export interface VideoSelector {
		AlphaBehavior?: AlphaBehavior;
		ColorSpace?: ColorSpace;
		ColorSpaceUsage?: ColorSpaceUsage;
		EmbeddedTimecodeOverride?: EmbeddedTimecodeOverride;
		Hdr10Metadata?: Hdr10Metadata;
		PadVideo?: PadVideo;
		Pid?: number | null;
		ProgramNumber?: number | null;
		Rotate?: InputRotate;
		SampleRange?: InputSampleRange;
	}

	/** Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector. */
	export interface VideoSelectorFormProperties {
		AlphaBehavior: FormControl<AlphaBehavior | null | undefined>,
		ColorSpace: FormControl<ColorSpace | null | undefined>,
		ColorSpaceUsage: FormControl<ColorSpaceUsage | null | undefined>,
		EmbeddedTimecodeOverride: FormControl<EmbeddedTimecodeOverride | null | undefined>,
		PadVideo: FormControl<PadVideo | null | undefined>,
		Pid: FormControl<number | null | undefined>,
		ProgramNumber: FormControl<number | null | undefined>,
		Rotate: FormControl<InputRotate | null | undefined>,
		SampleRange: FormControl<InputSampleRange | null | undefined>,
	}
	export function CreateVideoSelectorFormGroup() {
		return new FormGroup<VideoSelectorFormProperties>({
			AlphaBehavior: new FormControl<AlphaBehavior | null | undefined>(undefined),
			ColorSpace: new FormControl<ColorSpace | null | undefined>(undefined),
			ColorSpaceUsage: new FormControl<ColorSpaceUsage | null | undefined>(undefined),
			EmbeddedTimecodeOverride: new FormControl<EmbeddedTimecodeOverride | null | undefined>(undefined),
			PadVideo: new FormControl<PadVideo | null | undefined>(undefined),
			Pid: new FormControl<number | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined),
			Rotate: new FormControl<InputRotate | null | undefined>(undefined),
			SampleRange: new FormControl<InputSampleRange | null | undefined>(undefined),
		});

	}


	/** Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs. */
	export enum AlphaBehavior { DISCARD = 0, REMAP_TO_LUMA = 1 }


	/**
	 * If your input video has accurate color space metadata, or if you don't know about color space: Keep the default value, Follow. MediaConvert will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or has missing metadata: Specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate: Choose Force HDR 10. Specify correct values in the input HDR 10 metadata settings. For more information about HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr. When you specify an input color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:
	 *  * HDR 10: BT.2020, PQ, BT.2020 non-constant
	 *  * HLG 2020: BT.2020, HLG, BT.2020 non-constant
	 *  * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709
	 *  * P3D65 (SDR): Display P3, sRGB, BT.709
	 *  * P3D65 (HDR): Display P3, PQ, BT.709
	 */
	export enum ColorSpace { FOLLOW = 0, REC_601 = 1, REC_709 = 2, HDR10 = 3, HLG_2020 = 4, P3DCI = 5, P3D65_SDR = 6, P3D65_HDR = 7 }


	/** There are two sources for color metadata, the input file and the job input settings Color space and HDR master display information settings. The Color space usage setting determines which takes precedence. Choose Force to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings. */
	export enum ColorSpaceUsage { FORCE = 0, FALLBACK = 1 }


	/** Set Embedded timecode override to Use MDPM when your AVCHD input contains timecode tag data in the Modified Digital Video Pack Metadata. When you do, we recommend you also set Timecode source to Embedded. Leave Embedded timecode override blank, or set to None, when your input does not contain MDPM timecode. */
	export enum EmbeddedTimecodeOverride { NONE = 0, USE_MDPM = 1 }


	/** Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. */
	export interface Hdr10Metadata {
		BluePrimaryX?: number | null;
		BluePrimaryY?: number | null;
		GreenPrimaryX?: number | null;
		GreenPrimaryY?: number | null;
		MaxContentLightLevel?: number | null;
		MaxFrameAverageLightLevel?: number | null;
		MaxLuminance?: number | null;
		MinLuminance?: number | null;
		RedPrimaryX?: number | null;
		RedPrimaryY?: number | null;
		WhitePointX?: number | null;
		WhitePointY?: number | null;
	}

	/** Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. */
	export interface Hdr10MetadataFormProperties {
		BluePrimaryX: FormControl<number | null | undefined>,
		BluePrimaryY: FormControl<number | null | undefined>,
		GreenPrimaryX: FormControl<number | null | undefined>,
		GreenPrimaryY: FormControl<number | null | undefined>,
		MaxContentLightLevel: FormControl<number | null | undefined>,
		MaxFrameAverageLightLevel: FormControl<number | null | undefined>,
		MaxLuminance: FormControl<number | null | undefined>,
		MinLuminance: FormControl<number | null | undefined>,
		RedPrimaryX: FormControl<number | null | undefined>,
		RedPrimaryY: FormControl<number | null | undefined>,
		WhitePointX: FormControl<number | null | undefined>,
		WhitePointY: FormControl<number | null | undefined>,
	}
	export function CreateHdr10MetadataFormGroup() {
		return new FormGroup<Hdr10MetadataFormProperties>({
			BluePrimaryX: new FormControl<number | null | undefined>(undefined),
			BluePrimaryY: new FormControl<number | null | undefined>(undefined),
			GreenPrimaryX: new FormControl<number | null | undefined>(undefined),
			GreenPrimaryY: new FormControl<number | null | undefined>(undefined),
			MaxContentLightLevel: new FormControl<number | null | undefined>(undefined),
			MaxFrameAverageLightLevel: new FormControl<number | null | undefined>(undefined),
			MaxLuminance: new FormControl<number | null | undefined>(undefined),
			MinLuminance: new FormControl<number | null | undefined>(undefined),
			RedPrimaryX: new FormControl<number | null | undefined>(undefined),
			RedPrimaryY: new FormControl<number | null | undefined>(undefined),
			WhitePointX: new FormControl<number | null | undefined>(undefined),
			WhitePointY: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use this setting if your input has video and audio durations that don't align, and your output or player has strict alignment requirements. Examples: Input audio track has a delayed start. Input video track ends before audio ends. When you set Pad video to Black, MediaConvert generates black video frames so that output video and audio durations match. Black video frames are added at the beginning or end, depending on your input. To keep the default behavior and not generate black video, set Pad video to Disabled or leave blank. */
	export enum PadVideo { DISABLED = 0, BLACK = 1 }


	/** Use Rotate to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata. */
	export enum InputRotate { DEGREE_0 = 0, DEGREES_90 = 1, DEGREES_180 = 2, DEGREES_270 = 3, AUTO = 4 }


	/** If the sample range metadata in your input video is accurate, or if you don't know about sample range, keep the default value, Follow, for this setting. When you do, the service automatically detects your input sample range. If your input video has metadata indicating the wrong sample range, specify the accurate sample range here. When you do, MediaConvert ignores any sample range information in the input metadata. Regardless of whether MediaConvert uses the input sample range or the sample range that you specify, MediaConvert uses the sample range for transcoding and also writes it to the output metadata. */
	export enum InputSampleRange { FOLLOW = 0, FULL_RANGE = 1, LIMITED_RANGE = 2 }


	/** Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html. */
	export interface KantarWatermarkSettings {
		ChannelName?: string;
		ContentReference?: string;
		CredentialsSecretName?: string;
		FileOffset?: number | null;
		KantarLicenseId?: number | null;
		KantarServerUrl?: string;
		LogDestination?: string;
		Metadata3?: string;
		Metadata4?: string;
		Metadata5?: string;
		Metadata6?: string;
		Metadata7?: string;
		Metadata8?: string;
	}

	/** Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html. */
	export interface KantarWatermarkSettingsFormProperties {
		ChannelName: FormControl<string | null | undefined>,
		ContentReference: FormControl<string | null | undefined>,
		CredentialsSecretName: FormControl<string | null | undefined>,
		FileOffset: FormControl<number | null | undefined>,
		KantarLicenseId: FormControl<number | null | undefined>,
		KantarServerUrl: FormControl<string | null | undefined>,
		LogDestination: FormControl<string | null | undefined>,
		Metadata3: FormControl<string | null | undefined>,
		Metadata4: FormControl<string | null | undefined>,
		Metadata5: FormControl<string | null | undefined>,
		Metadata6: FormControl<string | null | undefined>,
		Metadata7: FormControl<string | null | undefined>,
		Metadata8: FormControl<string | null | undefined>,
	}
	export function CreateKantarWatermarkSettingsFormGroup() {
		return new FormGroup<KantarWatermarkSettingsFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined),
			ContentReference: new FormControl<string | null | undefined>(undefined),
			CredentialsSecretName: new FormControl<string | null | undefined>(undefined),
			FileOffset: new FormControl<number | null | undefined>(undefined),
			KantarLicenseId: new FormControl<number | null | undefined>(undefined),
			KantarServerUrl: new FormControl<string | null | undefined>(undefined),
			LogDestination: new FormControl<string | null | undefined>(undefined),
			Metadata3: new FormControl<string | null | undefined>(undefined),
			Metadata4: new FormControl<string | null | undefined>(undefined),
			Metadata5: new FormControl<string | null | undefined>(undefined),
			Metadata6: new FormControl<string | null | undefined>(undefined),
			Metadata7: new FormControl<string | null | undefined>(undefined),
			Metadata8: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html. */
	export interface MotionImageInserter {
		Framerate?: MotionImageInsertionFramerate;
		Input?: string;
		InsertionMode?: MotionImageInsertionMode;
		Offset?: MotionImageInsertionOffset;
		Playback?: MotionImagePlayback;
		StartTime?: string;
	}

	/** Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html. */
	export interface MotionImageInserterFormProperties {
		Input: FormControl<string | null | undefined>,
		InsertionMode: FormControl<MotionImageInsertionMode | null | undefined>,
		Playback: FormControl<MotionImagePlayback | null | undefined>,
		StartTime: FormControl<string | null | undefined>,
	}
	export function CreateMotionImageInserterFormGroup() {
		return new FormGroup<MotionImageInserterFormProperties>({
			Input: new FormControl<string | null | undefined>(undefined),
			InsertionMode: new FormControl<MotionImageInsertionMode | null | undefined>(undefined),
			Playback: new FormControl<MotionImagePlayback | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video. */
	export interface MotionImageInsertionFramerate {
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
	}

	/** For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video. */
	export interface MotionImageInsertionFramerateFormProperties {
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
	}
	export function CreateMotionImageInsertionFramerateFormGroup() {
		return new FormGroup<MotionImageInsertionFramerateFormProperties>({
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files. */
	export enum MotionImageInsertionMode { MOV = 0, PNG = 1 }


	/** Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay. */
	export interface MotionImageInsertionOffset {
		ImageX?: number | null;
		ImageY?: number | null;
	}

	/** Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay. */
	export interface MotionImageInsertionOffsetFormProperties {
		ImageX: FormControl<number | null | undefined>,
		ImageY: FormControl<number | null | undefined>,
	}
	export function CreateMotionImageInsertionOffsetFormGroup() {
		return new FormGroup<MotionImageInsertionOffsetFormProperties>({
			ImageX: new FormControl<number | null | undefined>(undefined),
			ImageY: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specify whether your motion graphic overlay repeats on a loop or plays only once. */
	export enum MotionImagePlayback { ONCE = 0, REPEAT = 1 }


	/** Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration, MediaConvert enables PCM to ID3 tagging for all outputs in the job. */
	export interface NielsenConfiguration {
		BreakoutCode?: number | null;
		DistributorId?: string;
	}

	/** Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration, MediaConvert enables PCM to ID3 tagging for all outputs in the job. */
	export interface NielsenConfigurationFormProperties {
		BreakoutCode: FormControl<number | null | undefined>,
		DistributorId: FormControl<string | null | undefined>,
	}
	export function CreateNielsenConfigurationFormGroup() {
		return new FormGroup<NielsenConfigurationFormProperties>({
			BreakoutCode: new FormControl<number | null | undefined>(undefined),
			DistributorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0] */
	export interface NielsenNonLinearWatermarkSettings {
		ActiveWatermarkProcess?: NielsenActiveWatermarkProcessType;
		AdiFilename?: string;
		AssetId?: string;
		AssetName?: string;
		CbetSourceId?: string;
		EpisodeId?: string;
		MetadataDestination?: string;
		SourceId?: number | null;
		SourceWatermarkStatus?: NielsenSourceWatermarkStatusType;
		TicServerUrl?: string;
		UniqueTicPerAudioTrack?: NielsenUniqueTicPerAudioTrackType;
	}

	/** Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0] */
	export interface NielsenNonLinearWatermarkSettingsFormProperties {
		ActiveWatermarkProcess: FormControl<NielsenActiveWatermarkProcessType | null | undefined>,
		AdiFilename: FormControl<string | null | undefined>,
		AssetId: FormControl<string | null | undefined>,
		AssetName: FormControl<string | null | undefined>,
		CbetSourceId: FormControl<string | null | undefined>,
		EpisodeId: FormControl<string | null | undefined>,
		MetadataDestination: FormControl<string | null | undefined>,
		SourceId: FormControl<number | null | undefined>,
		SourceWatermarkStatus: FormControl<NielsenSourceWatermarkStatusType | null | undefined>,
		TicServerUrl: FormControl<string | null | undefined>,
		UniqueTicPerAudioTrack: FormControl<NielsenUniqueTicPerAudioTrackType | null | undefined>,
	}
	export function CreateNielsenNonLinearWatermarkSettingsFormGroup() {
		return new FormGroup<NielsenNonLinearWatermarkSettingsFormProperties>({
			ActiveWatermarkProcess: new FormControl<NielsenActiveWatermarkProcessType | null | undefined>(undefined),
			AdiFilename: new FormControl<string | null | undefined>(undefined),
			AssetId: new FormControl<string | null | undefined>(undefined),
			AssetName: new FormControl<string | null | undefined>(undefined),
			CbetSourceId: new FormControl<string | null | undefined>(undefined),
			EpisodeId: new FormControl<string | null | undefined>(undefined),
			MetadataDestination: new FormControl<string | null | undefined>(undefined),
			SourceId: new FormControl<number | null | undefined>(undefined),
			SourceWatermarkStatus: new FormControl<NielsenSourceWatermarkStatusType | null | undefined>(undefined),
			TicServerUrl: new FormControl<string | null | undefined>(undefined),
			UniqueTicPerAudioTrack: new FormControl<NielsenUniqueTicPerAudioTrackType | null | undefined>(undefined),
		});

	}


	/** Choose the type of Nielsen watermarks that you want in your outputs. When you choose NAES 2 and NW, you must provide a value for the setting SID. When you choose CBET, you must provide a value for the setting CSID. When you choose NAES 2, NW, and CBET, you must provide values for both of these settings. */
	export enum NielsenActiveWatermarkProcessType { NAES2_AND_NW = 0, CBET = 1, NAES2_AND_NW_AND_CBET = 2 }


	/** Required. Specify whether your source content already contains Nielsen non-linear watermarks. When you set this value to Watermarked, the service fails the job. Nielsen requires that you add non-linear watermarking to only clean content that doesn't already have non-linear Nielsen watermarks. */
	export enum NielsenSourceWatermarkStatusType { CLEAN = 0, WATERMARKED = 1 }


	/** To create assets that have the same TIC values in each audio track, keep the default value Share TICs. To create assets that have unique TIC values for each audio track, choose Use unique TICs. */
	export enum NielsenUniqueTicPerAudioTrackType { RESERVE_UNIQUE_TICS_PER_TRACK = 0, SAME_TICS_PER_TRACK = 1 }


	/** Group of outputs */
	export interface OutputGroup {
		AutomatedEncodingSettings?: AutomatedEncodingSettings;
		CustomName?: string;
		Name?: string;
		OutputGroupSettings?: OutputGroupSettings;
		Outputs?: Array<Output>;
	}

	/** Group of outputs */
	export interface OutputGroupFormProperties {
		CustomName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOutputGroupFormGroup() {
		return new FormGroup<OutputGroupFormProperties>({
			CustomName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video. */
	export interface AutomatedEncodingSettings {
		AbrSettings?: AutomatedAbrSettings;
	}

	/** Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video. */
	export interface AutomatedEncodingSettingsFormProperties {
	}
	export function CreateAutomatedEncodingSettingsFormGroup() {
		return new FormGroup<AutomatedEncodingSettingsFormProperties>({
		});

	}


	/** Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package. */
	export interface AutomatedAbrSettings {
		MaxAbrBitrate?: number | null;
		MaxRenditions?: number | null;
		MinAbrBitrate?: number | null;
		Rules?: Array<AutomatedAbrRule>;
	}

	/** Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package. */
	export interface AutomatedAbrSettingsFormProperties {
		MaxAbrBitrate: FormControl<number | null | undefined>,
		MaxRenditions: FormControl<number | null | undefined>,
		MinAbrBitrate: FormControl<number | null | undefined>,
	}
	export function CreateAutomatedAbrSettingsFormGroup() {
		return new FormGroup<AutomatedAbrSettingsFormProperties>({
			MaxAbrBitrate: new FormControl<number | null | undefined>(undefined),
			MaxRenditions: new FormControl<number | null | undefined>(undefined),
			MinAbrBitrate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specify one or more Automated ABR rule types. Note: Force include and Allowed renditions are mutually exclusive. */
	export interface AutomatedAbrRule {
		AllowedRenditions?: Array<AllowedRenditionSize>;
		ForceIncludeRenditions?: Array<ForceIncludeRenditionSize>;
		MinBottomRenditionSize?: MinBottomRenditionSize;
		MinTopRenditionSize?: MinTopRenditionSize;
		Type?: RuleType;
	}

	/** Specify one or more Automated ABR rule types. Note: Force include and Allowed renditions are mutually exclusive. */
	export interface AutomatedAbrRuleFormProperties {
		Type: FormControl<RuleType | null | undefined>,
	}
	export function CreateAutomatedAbrRuleFormGroup() {
		return new FormGroup<AutomatedAbrRuleFormProperties>({
			Type: new FormControl<RuleType | null | undefined>(undefined),
		});

	}


	/** Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions. */
	export interface AllowedRenditionSize {
		Height?: number | null;
		Required?: AdvancedInputFilter;
		Width?: number | null;
	}

	/** Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions. */
	export interface AllowedRenditionSizeFormProperties {
		Height: FormControl<number | null | undefined>,
		Required: FormControl<AdvancedInputFilter | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateAllowedRenditionSizeFormGroup() {
		return new FormGroup<AllowedRenditionSizeFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Required: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting. */
	export interface ForceIncludeRenditionSize {
		Height?: number | null;
		Width?: number | null;
	}

	/** Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting. */
	export interface ForceIncludeRenditionSizeFormProperties {
		Height: FormControl<number | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateForceIncludeRenditionSizeFormGroup() {
		return new FormGroup<ForceIncludeRenditionSizeFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size. */
	export interface MinBottomRenditionSize {
		Height?: number | null;
		Width?: number | null;
	}

	/** Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size. */
	export interface MinBottomRenditionSizeFormProperties {
		Height: FormControl<number | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateMinBottomRenditionSizeFormGroup() {
		return new FormGroup<MinBottomRenditionSizeFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution. */
	export interface MinTopRenditionSize {
		Height?: number | null;
		Width?: number | null;
	}

	/** Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution. */
	export interface MinTopRenditionSizeFormProperties {
		Height: FormControl<number | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateMinTopRenditionSizeFormGroup() {
		return new FormGroup<MinTopRenditionSizeFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution. Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size. Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting. Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * (Required) The number of resolutions that you specify must be equal to, or greater than, the Max renditions setting. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions. */
	export enum RuleType { MIN_TOP_RENDITION_SIZE = 0, MIN_BOTTOM_RENDITION_SIZE = 1, FORCE_INCLUDE_RENDITIONS = 2, ALLOWED_RENDITIONS = 3 }


	/** Output Group settings, including type */
	export interface OutputGroupSettings {
		CmafGroupSettings?: CmafGroupSettings;
		DashIsoGroupSettings?: DashIsoGroupSettings;
		FileGroupSettings?: FileGroupSettings;
		HlsGroupSettings?: HlsGroupSettings;
		MsSmoothGroupSettings?: MsSmoothGroupSettings;
		Type?: OutputGroupType;
	}

	/** Output Group settings, including type */
	export interface OutputGroupSettingsFormProperties {
		Type: FormControl<OutputGroupType | null | undefined>,
	}
	export function CreateOutputGroupSettingsFormGroup() {
		return new FormGroup<OutputGroupSettingsFormProperties>({
			Type: new FormControl<OutputGroupType | null | undefined>(undefined),
		});

	}


	/** Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. */
	export interface CmafGroupSettings {
		AdditionalManifests?: Array<CmafAdditionalManifest>;
		BaseUrl?: string;
		ClientCache?: CmafClientCache;
		CodecSpecification?: CmafCodecSpecification;
		DashManifestStyle?: DashManifestStyle;
		Destination?: string;
		DestinationSettings?: DestinationSettings;
		Encryption?: CmafEncryptionSettings;
		FragmentLength?: number | null;
		ImageBasedTrickPlay?: CmafImageBasedTrickPlay;
		ImageBasedTrickPlaySettings?: CmafImageBasedTrickPlaySettings;
		ManifestCompression?: CmafManifestCompression;
		ManifestDurationFormat?: CmafManifestDurationFormat;
		MinBufferTime?: number | null;
		MinFinalSegmentLength?: number | null;
		MpdManifestBandwidthType?: CmafMpdManifestBandwidthType;
		MpdProfile?: CmafMpdProfile;
		PtsOffsetHandlingForBFrames?: CmafPtsOffsetHandlingForBFrames;
		SegmentControl?: CmafSegmentControl;
		SegmentLength?: number | null;
		SegmentLengthControl?: CmafSegmentLengthControl;
		StreamInfResolution?: CmafInitializationVectorInManifest;
		TargetDurationCompatibilityMode?: CmafTargetDurationCompatibilityMode;
		VideoCompositionOffsets?: CmafVideoCompositionOffsets;
		WriteDashManifest?: CmafClientCache;
		WriteHlsManifest?: CmafClientCache;
		WriteSegmentTimelineInRepresentation?: AdvancedInputFilter;
	}

	/** Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. */
	export interface CmafGroupSettingsFormProperties {
		BaseUrl: FormControl<string | null | undefined>,
		ClientCache: FormControl<CmafClientCache | null | undefined>,
		CodecSpecification: FormControl<CmafCodecSpecification | null | undefined>,
		DashManifestStyle: FormControl<DashManifestStyle | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		FragmentLength: FormControl<number | null | undefined>,
		ImageBasedTrickPlay: FormControl<CmafImageBasedTrickPlay | null | undefined>,
		ManifestCompression: FormControl<CmafManifestCompression | null | undefined>,
		ManifestDurationFormat: FormControl<CmafManifestDurationFormat | null | undefined>,
		MinBufferTime: FormControl<number | null | undefined>,
		MinFinalSegmentLength: FormControl<number | null | undefined>,
		MpdManifestBandwidthType: FormControl<CmafMpdManifestBandwidthType | null | undefined>,
		MpdProfile: FormControl<CmafMpdProfile | null | undefined>,
		PtsOffsetHandlingForBFrames: FormControl<CmafPtsOffsetHandlingForBFrames | null | undefined>,
		SegmentControl: FormControl<CmafSegmentControl | null | undefined>,
		SegmentLength: FormControl<number | null | undefined>,
		SegmentLengthControl: FormControl<CmafSegmentLengthControl | null | undefined>,
		StreamInfResolution: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		TargetDurationCompatibilityMode: FormControl<CmafTargetDurationCompatibilityMode | null | undefined>,
		VideoCompositionOffsets: FormControl<CmafVideoCompositionOffsets | null | undefined>,
		WriteDashManifest: FormControl<CmafClientCache | null | undefined>,
		WriteHlsManifest: FormControl<CmafClientCache | null | undefined>,
		WriteSegmentTimelineInRepresentation: FormControl<AdvancedInputFilter | null | undefined>,
	}
	export function CreateCmafGroupSettingsFormGroup() {
		return new FormGroup<CmafGroupSettingsFormProperties>({
			BaseUrl: new FormControl<string | null | undefined>(undefined),
			ClientCache: new FormControl<CmafClientCache | null | undefined>(undefined),
			CodecSpecification: new FormControl<CmafCodecSpecification | null | undefined>(undefined),
			DashManifestStyle: new FormControl<DashManifestStyle | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			FragmentLength: new FormControl<number | null | undefined>(undefined),
			ImageBasedTrickPlay: new FormControl<CmafImageBasedTrickPlay | null | undefined>(undefined),
			ManifestCompression: new FormControl<CmafManifestCompression | null | undefined>(undefined),
			ManifestDurationFormat: new FormControl<CmafManifestDurationFormat | null | undefined>(undefined),
			MinBufferTime: new FormControl<number | null | undefined>(undefined),
			MinFinalSegmentLength: new FormControl<number | null | undefined>(undefined),
			MpdManifestBandwidthType: new FormControl<CmafMpdManifestBandwidthType | null | undefined>(undefined),
			MpdProfile: new FormControl<CmafMpdProfile | null | undefined>(undefined),
			PtsOffsetHandlingForBFrames: new FormControl<CmafPtsOffsetHandlingForBFrames | null | undefined>(undefined),
			SegmentControl: new FormControl<CmafSegmentControl | null | undefined>(undefined),
			SegmentLength: new FormControl<number | null | undefined>(undefined),
			SegmentLengthControl: new FormControl<CmafSegmentLengthControl | null | undefined>(undefined),
			StreamInfResolution: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			TargetDurationCompatibilityMode: new FormControl<CmafTargetDurationCompatibilityMode | null | undefined>(undefined),
			VideoCompositionOffsets: new FormControl<CmafVideoCompositionOffsets | null | undefined>(undefined),
			WriteDashManifest: new FormControl<CmafClientCache | null | undefined>(undefined),
			WriteHlsManifest: new FormControl<CmafClientCache | null | undefined>(undefined),
			WriteSegmentTimelineInRepresentation: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
		});

	}


	/** Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group. */
	export interface CmafAdditionalManifest {
		ManifestNameModifier?: string;
		SelectedOutputs?: Array<string>;
	}

	/** Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group. */
	export interface CmafAdditionalManifestFormProperties {
		ManifestNameModifier: FormControl<string | null | undefined>,
	}
	export function CreateCmafAdditionalManifestFormGroup() {
		return new FormGroup<CmafAdditionalManifestFormProperties>({
			ManifestNameModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled and control caching in your video distribution set up. For example, use the Cache-Control http header. */
	export enum CmafClientCache { DISABLED = 0, ENABLED = 1 }


	/** Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation. */
	export enum CmafCodecSpecification { RFC_6381 = 0, RFC_4281 = 1 }


	/** Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline in each video Representation: Keep the default value, Basic. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct. */
	export enum DashManifestStyle { BASIC = 0, COMPACT = 1, DISTINCT = 2 }


	/** Settings associated with the destination. Will vary based on the type of destination */
	export interface DestinationSettings {
		S3Settings?: S3DestinationSettings;
	}

	/** Settings associated with the destination. Will vary based on the type of destination */
	export interface DestinationSettingsFormProperties {
	}
	export function CreateDestinationSettingsFormGroup() {
		return new FormGroup<DestinationSettingsFormProperties>({
		});

	}


	/** Settings associated with S3 destination */
	export interface S3DestinationSettings {
		AccessControl?: S3DestinationAccessControl;
		Encryption?: S3EncryptionSettings;
	}

	/** Settings associated with S3 destination */
	export interface S3DestinationSettingsFormProperties {
	}
	export function CreateS3DestinationSettingsFormGroup() {
		return new FormGroup<S3DestinationSettingsFormProperties>({
		});

	}


	/** Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE. */
	export interface S3DestinationAccessControl {
		CannedAcl?: S3ObjectCannedAcl;
	}

	/** Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE. */
	export interface S3DestinationAccessControlFormProperties {
		CannedAcl: FormControl<S3ObjectCannedAcl | null | undefined>,
	}
	export function CreateS3DestinationAccessControlFormGroup() {
		return new FormGroup<S3DestinationAccessControlFormProperties>({
			CannedAcl: new FormControl<S3ObjectCannedAcl | null | undefined>(undefined),
		});

	}


	/** Choose an Amazon S3 canned ACL for MediaConvert to apply to this output. */
	export enum S3ObjectCannedAcl { PUBLIC_READ = 0, AUTHENTICATED_READ = 1, BUCKET_OWNER_READ = 2, BUCKET_OWNER_FULL_CONTROL = 3 }


	/** Settings for how your job outputs are encrypted as they are uploaded to Amazon S3. */
	export interface S3EncryptionSettings {
		EncryptionType?: S3ServerSideEncryptionType;
		KmsEncryptionContext?: string;
		KmsKeyArn?: string;
	}

	/** Settings for how your job outputs are encrypted as they are uploaded to Amazon S3. */
	export interface S3EncryptionSettingsFormProperties {
		EncryptionType: FormControl<S3ServerSideEncryptionType | null | undefined>,
		KmsEncryptionContext: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3EncryptionSettingsFormGroup() {
		return new FormGroup<S3EncryptionSettingsFormProperties>({
			EncryptionType: new FormControl<S3ServerSideEncryptionType | null | undefined>(undefined),
			KmsEncryptionContext: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3. If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS. By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting KMS ARN. */
	export enum S3ServerSideEncryptionType { SERVER_SIDE_ENCRYPTION_S3 = 0, SERVER_SIDE_ENCRYPTION_KMS = 1 }


	/** Settings for CMAF encryption */
	export interface CmafEncryptionSettings {
		ConstantInitializationVector?: string;
		EncryptionMethod?: CmafEncryptionType;
		InitializationVectorInManifest?: CmafInitializationVectorInManifest;
		SpekeKeyProvider?: SpekeKeyProviderCmaf;
		StaticKeyProvider?: StaticKeyProvider;
		Type?: CmafKeyProviderType;
	}

	/** Settings for CMAF encryption */
	export interface CmafEncryptionSettingsFormProperties {
		ConstantInitializationVector: FormControl<string | null | undefined>,
		EncryptionMethod: FormControl<CmafEncryptionType | null | undefined>,
		InitializationVectorInManifest: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		Type: FormControl<CmafKeyProviderType | null | undefined>,
	}
	export function CreateCmafEncryptionSettingsFormGroup() {
		return new FormGroup<CmafEncryptionSettingsFormProperties>({
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			EncryptionMethod: new FormControl<CmafEncryptionType | null | undefined>(undefined),
			InitializationVectorInManifest: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			Type: new FormControl<CmafKeyProviderType | null | undefined>(undefined),
		});

	}


	/** Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample or AES_CTR. */
	export enum CmafEncryptionType { SAMPLE_AES = 0, AES_CTR = 1 }


	/** When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests. */
	export enum CmafInitializationVectorInManifest { INCLUDE = 0, EXCLUDE = 1 }


	/** If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead. */
	export interface SpekeKeyProviderCmaf {
		CertificateArn?: string;
		DashSignaledSystemIds?: Array<string>;
		HlsSignaledSystemIds?: Array<string>;
		ResourceId?: string;
		Url?: string;
	}

	/** If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead. */
	export interface SpekeKeyProviderCmafFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateSpekeKeyProviderCmafFormGroup() {
		return new FormGroup<SpekeKeyProviderCmafFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use these settings to set up encryption with a static key provider. */
	export interface StaticKeyProvider {
		KeyFormat?: string;
		KeyFormatVersions?: string;
		StaticKeyValue?: string;
		Url?: string;
	}

	/** Use these settings to set up encryption with a static key provider. */
	export interface StaticKeyProviderFormProperties {
		KeyFormat: FormControl<string | null | undefined>,
		KeyFormatVersions: FormControl<string | null | undefined>,
		StaticKeyValue: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateStaticKeyProviderFormGroup() {
		return new FormGroup<StaticKeyProviderFormProperties>({
			KeyFormat: new FormControl<string | null | undefined>(undefined),
			KeyFormatVersions: new FormControl<string | null | undefined>(undefined),
			StaticKeyValue: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html. */
	export enum CmafKeyProviderType { SPEKE = 0, STATIC_KEY = 1 }


	/** Specify whether MediaConvert generates images for trick play. Keep the default value, None, to not generate any images. Choose Thumbnail to generate tiled thumbnails. Choose Thumbnail and full frame to generate tiled thumbnails and full-resolution images of single frames. When you enable Write HLS manifest, MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. When you enable Write DASH manifest, MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md */
	export enum CmafImageBasedTrickPlay { NONE = 0, THUMBNAIL = 1, THUMBNAIL_AND_FULLFRAME = 2, ADVANCED = 3 }


	/** Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED */
	export interface CmafImageBasedTrickPlaySettings {
		IntervalCadence?: CmafIntervalCadence;
		ThumbnailHeight?: number | null;
		ThumbnailInterval?: number | null;
		ThumbnailWidth?: number | null;
		TileHeight?: number | null;
		TileWidth?: number | null;
	}

	/** Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED */
	export interface CmafImageBasedTrickPlaySettingsFormProperties {
		IntervalCadence: FormControl<CmafIntervalCadence | null | undefined>,
		ThumbnailHeight: FormControl<number | null | undefined>,
		ThumbnailInterval: FormControl<number | null | undefined>,
		ThumbnailWidth: FormControl<number | null | undefined>,
		TileHeight: FormControl<number | null | undefined>,
		TileWidth: FormControl<number | null | undefined>,
	}
	export function CreateCmafImageBasedTrickPlaySettingsFormGroup() {
		return new FormGroup<CmafImageBasedTrickPlaySettingsFormProperties>({
			IntervalCadence: new FormControl<CmafIntervalCadence | null | undefined>(undefined),
			ThumbnailHeight: new FormControl<number | null | undefined>(undefined),
			ThumbnailInterval: new FormControl<number | null | undefined>(undefined),
			ThumbnailWidth: new FormControl<number | null | undefined>(undefined),
			TileHeight: new FormControl<number | null | undefined>(undefined),
			TileWidth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval. */
	export enum CmafIntervalCadence { FOLLOW_IFRAME = 0, FOLLOW_CUSTOM = 1 }


	/** When set to GZIP, compresses HLS playlist. */
	export enum CmafManifestCompression { GZIP = 0, NONE = 1 }


	/** Indicates whether the output manifest should use floating point values for segment duration. */
	export enum CmafManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }


	/** Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second. */
	export enum CmafMpdManifestBandwidthType { AVERAGE = 0, MAX = 1 }


	/** Specify whether your DASH profile is on-demand or main. When you choose Main profile, the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand, the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control to Single file. */
	export enum CmafMpdProfile { MAIN_PROFILE = 0, ON_DEMAND_PROFILE = 1 }


	/** Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here. */
	export enum CmafPtsOffsetHandlingForBFrames { ZERO_BASED = 0, MATCH_INITIAL_PTS = 1 }


	/** When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created. */
	export enum CmafSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }


	/** Specify how you want MediaConvert to determine the segment length. Choose Exact to have the encoder use the exact length that you specify with the setting Segment length. This might result in extra I-frames. Choose Multiple of GOP to have the encoder round up the segment lengths to match the next GOP boundary. */
	export enum CmafSegmentLengthControl { EXACT = 0, GOP_MULTIPLE = 1 }


	/** When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration. */
	export enum CmafTargetDurationCompatibilityMode { LEGACY = 0, SPEC_COMPLIANT = 1 }


	/** Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers. */
	export enum CmafVideoCompositionOffsets { SIGNED = 0, UNSIGNED = 1 }


	/** Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. */
	export interface DashIsoGroupSettings {
		AdditionalManifests?: Array<DashAdditionalManifest>;
		AudioChannelConfigSchemeIdUri?: DashIsoGroupAudioChannelConfigSchemeIdUri;
		BaseUrl?: string;
		DashManifestStyle?: DashManifestStyle;
		Destination?: string;
		DestinationSettings?: DestinationSettings;
		Encryption?: DashIsoEncryptionSettings;
		FragmentLength?: number | null;
		HbbtvCompliance?: DashIsoHbbtvCompliance;
		ImageBasedTrickPlay?: CmafImageBasedTrickPlay;
		ImageBasedTrickPlaySettings?: DashIsoImageBasedTrickPlaySettings;
		MinBufferTime?: number | null;
		MinFinalSegmentLength?: number | null;
		MpdManifestBandwidthType?: CmafMpdManifestBandwidthType;
		MpdProfile?: CmafMpdProfile;
		PtsOffsetHandlingForBFrames?: CmafPtsOffsetHandlingForBFrames;
		SegmentControl?: CmafSegmentControl;
		SegmentLength?: number | null;
		SegmentLengthControl?: CmafSegmentLengthControl;
		VideoCompositionOffsets?: CmafVideoCompositionOffsets;
		WriteSegmentTimelineInRepresentation?: AdvancedInputFilter;
	}

	/** Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. */
	export interface DashIsoGroupSettingsFormProperties {
		AudioChannelConfigSchemeIdUri: FormControl<DashIsoGroupAudioChannelConfigSchemeIdUri | null | undefined>,
		BaseUrl: FormControl<string | null | undefined>,
		DashManifestStyle: FormControl<DashManifestStyle | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		FragmentLength: FormControl<number | null | undefined>,
		HbbtvCompliance: FormControl<DashIsoHbbtvCompliance | null | undefined>,
		ImageBasedTrickPlay: FormControl<CmafImageBasedTrickPlay | null | undefined>,
		MinBufferTime: FormControl<number | null | undefined>,
		MinFinalSegmentLength: FormControl<number | null | undefined>,
		MpdManifestBandwidthType: FormControl<CmafMpdManifestBandwidthType | null | undefined>,
		MpdProfile: FormControl<CmafMpdProfile | null | undefined>,
		PtsOffsetHandlingForBFrames: FormControl<CmafPtsOffsetHandlingForBFrames | null | undefined>,
		SegmentControl: FormControl<CmafSegmentControl | null | undefined>,
		SegmentLength: FormControl<number | null | undefined>,
		SegmentLengthControl: FormControl<CmafSegmentLengthControl | null | undefined>,
		VideoCompositionOffsets: FormControl<CmafVideoCompositionOffsets | null | undefined>,
		WriteSegmentTimelineInRepresentation: FormControl<AdvancedInputFilter | null | undefined>,
	}
	export function CreateDashIsoGroupSettingsFormGroup() {
		return new FormGroup<DashIsoGroupSettingsFormProperties>({
			AudioChannelConfigSchemeIdUri: new FormControl<DashIsoGroupAudioChannelConfigSchemeIdUri | null | undefined>(undefined),
			BaseUrl: new FormControl<string | null | undefined>(undefined),
			DashManifestStyle: new FormControl<DashManifestStyle | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			FragmentLength: new FormControl<number | null | undefined>(undefined),
			HbbtvCompliance: new FormControl<DashIsoHbbtvCompliance | null | undefined>(undefined),
			ImageBasedTrickPlay: new FormControl<CmafImageBasedTrickPlay | null | undefined>(undefined),
			MinBufferTime: new FormControl<number | null | undefined>(undefined),
			MinFinalSegmentLength: new FormControl<number | null | undefined>(undefined),
			MpdManifestBandwidthType: new FormControl<CmafMpdManifestBandwidthType | null | undefined>(undefined),
			MpdProfile: new FormControl<CmafMpdProfile | null | undefined>(undefined),
			PtsOffsetHandlingForBFrames: new FormControl<CmafPtsOffsetHandlingForBFrames | null | undefined>(undefined),
			SegmentControl: new FormControl<CmafSegmentControl | null | undefined>(undefined),
			SegmentLength: new FormControl<number | null | undefined>(undefined),
			SegmentLengthControl: new FormControl<CmafSegmentLengthControl | null | undefined>(undefined),
			VideoCompositionOffsets: new FormControl<CmafVideoCompositionOffsets | null | undefined>(undefined),
			WriteSegmentTimelineInRepresentation: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
		});

	}


	/** Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface DashAdditionalManifest {
		ManifestNameModifier?: string;
		SelectedOutputs?: Array<string>;
	}

	/** Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface DashAdditionalManifestFormProperties {
		ManifestNameModifier: FormControl<string | null | undefined>,
	}
	export function CreateDashAdditionalManifestFormGroup() {
		return new FormGroup<DashAdditionalManifestFormProperties>({
			ManifestNameModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use this setting only when your audio codec is a Dolby one (AC3, EAC3, or Atmos) and your downstream workflow requires that your DASH manifest use the Dolby channel configuration tag, rather than the MPEG one. For example, you might need to use this to make dynamic ad insertion work. Specify which audio channel configuration scheme ID URI MediaConvert writes in your DASH manifest. Keep the default value, MPEG channel configuration, to have MediaConvert write this: urn:mpeg:mpegB:cicp:ChannelConfiguration. Choose Dolby channel configuration to have MediaConvert write this instead: tag:dolby.com,2014:dash:audio_channel_configuration:2011. */
	export enum DashIsoGroupAudioChannelConfigSchemeIdUri { MPEG_CHANNEL_CONFIGURATION = 0, DOLBY_CHANNEL_CONFIGURATION = 1 }


	/** Specifies DRM settings for DASH outputs. */
	export interface DashIsoEncryptionSettings {
		PlaybackDeviceCompatibility?: DashIsoPlaybackDeviceCompatibility;
		SpekeKeyProvider?: SpekeKeyProvider;
	}

	/** Specifies DRM settings for DASH outputs. */
	export interface DashIsoEncryptionSettingsFormProperties {
		PlaybackDeviceCompatibility: FormControl<DashIsoPlaybackDeviceCompatibility | null | undefined>,
	}
	export function CreateDashIsoEncryptionSettingsFormGroup() {
		return new FormGroup<DashIsoEncryptionSettingsFormProperties>({
			PlaybackDeviceCompatibility: new FormControl<DashIsoPlaybackDeviceCompatibility | null | undefined>(undefined),
		});

	}


	/** This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1. If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted. */
	export enum DashIsoPlaybackDeviceCompatibility { CENC_V1 = 0, UNENCRYPTED_SEI = 1 }


	/** If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead. */
	export interface SpekeKeyProvider {
		CertificateArn?: string;
		ResourceId?: string;
		SystemIds?: Array<string>;
		Url?: string;
	}

	/** If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead. */
	export interface SpekeKeyProviderFormProperties {
		CertificateArn: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateSpekeKeyProviderFormGroup() {
		return new FormGroup<SpekeKeyProviderFormProperties>({
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Supports HbbTV specification as indicated */
	export enum DashIsoHbbtvCompliance { HBBTV_1_5 = 0, NONE = 1 }


	/** Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED */
	export interface DashIsoImageBasedTrickPlaySettings {
		IntervalCadence?: CmafIntervalCadence;
		ThumbnailHeight?: number | null;
		ThumbnailInterval?: number | null;
		ThumbnailWidth?: number | null;
		TileHeight?: number | null;
		TileWidth?: number | null;
	}

	/** Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED */
	export interface DashIsoImageBasedTrickPlaySettingsFormProperties {
		IntervalCadence: FormControl<CmafIntervalCadence | null | undefined>,
		ThumbnailHeight: FormControl<number | null | undefined>,
		ThumbnailInterval: FormControl<number | null | undefined>,
		ThumbnailWidth: FormControl<number | null | undefined>,
		TileHeight: FormControl<number | null | undefined>,
		TileWidth: FormControl<number | null | undefined>,
	}
	export function CreateDashIsoImageBasedTrickPlaySettingsFormGroup() {
		return new FormGroup<DashIsoImageBasedTrickPlaySettingsFormProperties>({
			IntervalCadence: new FormControl<CmafIntervalCadence | null | undefined>(undefined),
			ThumbnailHeight: new FormControl<number | null | undefined>(undefined),
			ThumbnailInterval: new FormControl<number | null | undefined>(undefined),
			ThumbnailWidth: new FormControl<number | null | undefined>(undefined),
			TileHeight: new FormControl<number | null | undefined>(undefined),
			TileWidth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package. */
	export interface FileGroupSettings {
		Destination?: string;
		DestinationSettings?: DestinationSettings;
	}

	/** Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package. */
	export interface FileGroupSettingsFormProperties {
		Destination: FormControl<string | null | undefined>,
	}
	export function CreateFileGroupSettingsFormGroup() {
		return new FormGroup<FileGroupSettingsFormProperties>({
			Destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings related to your HLS output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. */
	export interface HlsGroupSettings {
		AdMarkers?: Array<HlsAdMarkers>;
		AdditionalManifests?: Array<HlsAdditionalManifest>;
		AudioOnlyHeader?: CmafInitializationVectorInManifest;
		BaseUrl?: string;
		CaptionLanguageMappings?: Array<HlsCaptionLanguageMapping>;
		CaptionLanguageSetting?: HlsCaptionLanguageSetting;
		CaptionSegmentLengthControl?: HlsCaptionSegmentLengthControl;
		ClientCache?: CmafClientCache;
		CodecSpecification?: CmafCodecSpecification;
		Destination?: string;
		DestinationSettings?: DestinationSettings;
		DirectoryStructure?: HlsDirectoryStructure;
		Encryption?: HlsEncryptionSettings;
		ImageBasedTrickPlay?: CmafImageBasedTrickPlay;
		ImageBasedTrickPlaySettings?: HlsImageBasedTrickPlaySettings;
		ManifestCompression?: CmafManifestCompression;
		ManifestDurationFormat?: CmafManifestDurationFormat;
		MinFinalSegmentLength?: number | null;
		MinSegmentLength?: number | null;
		OutputSelection?: HlsOutputSelection;
		ProgramDateTime?: CmafInitializationVectorInManifest;
		ProgramDateTimePeriod?: number | null;
		ProgressiveWriteHlsManifest?: AdvancedInputFilter;
		SegmentControl?: CmafSegmentControl;
		SegmentLength?: number | null;
		SegmentLengthControl?: CmafSegmentLengthControl;
		SegmentsPerSubdirectory?: number | null;
		StreamInfResolution?: CmafInitializationVectorInManifest;
		TargetDurationCompatibilityMode?: CmafTargetDurationCompatibilityMode;
		TimedMetadataId3Frame?: HlsTimedMetadataId3Frame;
		TimedMetadataId3Period?: number | null;
		TimestampDeltaMilliseconds?: number | null;
	}

	/** Settings related to your HLS output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. */
	export interface HlsGroupSettingsFormProperties {
		AudioOnlyHeader: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		BaseUrl: FormControl<string | null | undefined>,
		CaptionLanguageSetting: FormControl<HlsCaptionLanguageSetting | null | undefined>,
		CaptionSegmentLengthControl: FormControl<HlsCaptionSegmentLengthControl | null | undefined>,
		ClientCache: FormControl<CmafClientCache | null | undefined>,
		CodecSpecification: FormControl<CmafCodecSpecification | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		DirectoryStructure: FormControl<HlsDirectoryStructure | null | undefined>,
		ImageBasedTrickPlay: FormControl<CmafImageBasedTrickPlay | null | undefined>,
		ManifestCompression: FormControl<CmafManifestCompression | null | undefined>,
		ManifestDurationFormat: FormControl<CmafManifestDurationFormat | null | undefined>,
		MinFinalSegmentLength: FormControl<number | null | undefined>,
		MinSegmentLength: FormControl<number | null | undefined>,
		OutputSelection: FormControl<HlsOutputSelection | null | undefined>,
		ProgramDateTime: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		ProgramDateTimePeriod: FormControl<number | null | undefined>,
		ProgressiveWriteHlsManifest: FormControl<AdvancedInputFilter | null | undefined>,
		SegmentControl: FormControl<CmafSegmentControl | null | undefined>,
		SegmentLength: FormControl<number | null | undefined>,
		SegmentLengthControl: FormControl<CmafSegmentLengthControl | null | undefined>,
		SegmentsPerSubdirectory: FormControl<number | null | undefined>,
		StreamInfResolution: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		TargetDurationCompatibilityMode: FormControl<CmafTargetDurationCompatibilityMode | null | undefined>,
		TimedMetadataId3Frame: FormControl<HlsTimedMetadataId3Frame | null | undefined>,
		TimedMetadataId3Period: FormControl<number | null | undefined>,
		TimestampDeltaMilliseconds: FormControl<number | null | undefined>,
	}
	export function CreateHlsGroupSettingsFormGroup() {
		return new FormGroup<HlsGroupSettingsFormProperties>({
			AudioOnlyHeader: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			BaseUrl: new FormControl<string | null | undefined>(undefined),
			CaptionLanguageSetting: new FormControl<HlsCaptionLanguageSetting | null | undefined>(undefined),
			CaptionSegmentLengthControl: new FormControl<HlsCaptionSegmentLengthControl | null | undefined>(undefined),
			ClientCache: new FormControl<CmafClientCache | null | undefined>(undefined),
			CodecSpecification: new FormControl<CmafCodecSpecification | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			DirectoryStructure: new FormControl<HlsDirectoryStructure | null | undefined>(undefined),
			ImageBasedTrickPlay: new FormControl<CmafImageBasedTrickPlay | null | undefined>(undefined),
			ManifestCompression: new FormControl<CmafManifestCompression | null | undefined>(undefined),
			ManifestDurationFormat: new FormControl<CmafManifestDurationFormat | null | undefined>(undefined),
			MinFinalSegmentLength: new FormControl<number | null | undefined>(undefined),
			MinSegmentLength: new FormControl<number | null | undefined>(undefined),
			OutputSelection: new FormControl<HlsOutputSelection | null | undefined>(undefined),
			ProgramDateTime: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			ProgramDateTimePeriod: new FormControl<number | null | undefined>(undefined),
			ProgressiveWriteHlsManifest: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			SegmentControl: new FormControl<CmafSegmentControl | null | undefined>(undefined),
			SegmentLength: new FormControl<number | null | undefined>(undefined),
			SegmentLengthControl: new FormControl<CmafSegmentLengthControl | null | undefined>(undefined),
			SegmentsPerSubdirectory: new FormControl<number | null | undefined>(undefined),
			StreamInfResolution: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			TargetDurationCompatibilityMode: new FormControl<CmafTargetDurationCompatibilityMode | null | undefined>(undefined),
			TimedMetadataId3Frame: new FormControl<HlsTimedMetadataId3Frame | null | undefined>(undefined),
			TimedMetadataId3Period: new FormControl<number | null | undefined>(undefined),
			TimestampDeltaMilliseconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Ad marker for Apple HLS manifest. */
	export enum HlsAdMarkers { ELEMENTAL = 0, ELEMENTAL_SCTE35 = 1 }


	/** Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface HlsAdditionalManifest {
		ManifestNameModifier?: string;
		SelectedOutputs?: Array<string>;
	}

	/** Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface HlsAdditionalManifestFormProperties {
		ManifestNameModifier: FormControl<string | null | undefined>,
	}
	export function CreateHlsAdditionalManifestFormGroup() {
		return new FormGroup<HlsAdditionalManifestFormProperties>({
			ManifestNameModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Caption Language Mapping */
	export interface HlsCaptionLanguageMapping {
		CaptionChannel?: number | null;
		CustomLanguageCode?: string;
		LanguageCode?: LanguageCode;
		LanguageDescription?: string;
	}

	/** Caption Language Mapping */
	export interface HlsCaptionLanguageMappingFormProperties {
		CaptionChannel: FormControl<number | null | undefined>,
		CustomLanguageCode: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LanguageDescription: FormControl<string | null | undefined>,
	}
	export function CreateHlsCaptionLanguageMappingFormGroup() {
		return new FormGroup<HlsCaptionLanguageMappingFormProperties>({
			CaptionChannel: new FormControl<number | null | undefined>(undefined),
			CustomLanguageCode: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LanguageDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php. */
	export enum LanguageCode { ENG = 0, SPA = 1, FRA = 2, DEU = 3, GER = 4, ZHO = 5, ARA = 6, HIN = 7, JPN = 8, RUS = 9, POR = 10, ITA = 11, URD = 12, VIE = 13, KOR = 14, PAN = 15, ABK = 16, AAR = 17, AFR = 18, AKA = 19, SQI = 20, AMH = 21, ARG = 22, HYE = 23, ASM = 24, AVA = 25, AVE = 26, AYM = 27, AZE = 28, BAM = 29, BAK = 30, EUS = 31, BEL = 32, BEN = 33, BIH = 34, BIS = 35, BOS = 36, BRE = 37, BUL = 38, MYA = 39, CAT = 40, KHM = 41, CHA = 42, CHE = 43, NYA = 44, CHU = 45, CHV = 46, COR = 47, COS = 48, CRE = 49, HRV = 50, CES = 51, DAN = 52, DIV = 53, NLD = 54, DZO = 55, ENM = 56, EPO = 57, EST = 58, EWE = 59, FAO = 60, FIJ = 61, FIN = 62, FRM = 63, FUL = 64, GLA = 65, GLG = 66, LUG = 67, KAT = 68, ELL = 69, GRN = 70, GUJ = 71, HAT = 72, HAU = 73, HEB = 74, HER = 75, HMO = 76, HUN = 77, ISL = 78, IDO = 79, IBO = 80, IND = 81, INA = 82, ILE = 83, IKU = 84, IPK = 85, GLE = 86, JAV = 87, KAL = 88, KAN = 89, KAU = 90, KAS = 91, KAZ = 92, KIK = 93, KIN = 94, KIR = 95, KOM = 96, KON = 97, KUA = 98, KUR = 99, LAO = 100, LAT = 101, LAV = 102, LIM = 103, LIN = 104, LIT = 105, LUB = 106, LTZ = 107, MKD = 108, MLG = 109, MSA = 110, MAL = 111, MLT = 112, GLV = 113, MRI = 114, MAR = 115, MAH = 116, MON = 117, NAU = 118, NAV = 119, NDE = 120, NBL = 121, NDO = 122, NEP = 123, SME = 124, NOR = 125, NOB = 126, NNO = 127, OCI = 128, OJI = 129, ORI = 130, ORM = 131, OSS = 132, PLI = 133, FAS = 134, POL = 135, PUS = 136, QUE = 137, QAA = 138, RON = 139, ROH = 140, RUN = 141, SMO = 142, SAG = 143, SAN = 144, SRD = 145, SRB = 146, SNA = 147, III = 148, SND = 149, SIN = 150, SLK = 151, SLV = 152, SOM = 153, SOT = 154, SUN = 155, SWA = 156, SSW = 157, SWE = 158, TGL = 159, TAH = 160, TGK = 161, TAM = 162, TAT = 163, TEL = 164, THA = 165, BOD = 166, TIR = 167, TON = 168, TSO = 169, TSN = 170, TUR = 171, TUK = 172, TWI = 173, UIG = 174, UKR = 175, UZB = 176, VEN = 177, VOL = 178, WLN = 179, CYM = 180, FRY = 181, WOL = 182, XHO = 183, YID = 184, YOR = 185, ZHA = 186, ZUL = 187, ORJ = 188, QPC = 189, TNG = 190, SRP = 191 }


	/** Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest. */
	export enum HlsCaptionLanguageSetting { INSERT = 0, OMIT = 1, NONE = 2 }


	/** Set Caption segment length control to Match video to create caption segments that align with the video segments from the first video output in this output group. For example, if the video segments are 2 seconds long, your WebVTT segments will also be 2 seconds long. Keep the default setting, Large segments to create caption segments that are 300 seconds long. */
	export enum HlsCaptionSegmentLengthControl { LARGE_SEGMENTS = 0, MATCH_VIDEO = 1 }


	/** Indicates whether segments should be placed in subdirectories. */
	export enum HlsDirectoryStructure { SINGLE_DIRECTORY = 0, SUBDIRECTORY_PER_STREAM = 1 }


	/** Settings for HLS encryption */
	export interface HlsEncryptionSettings {
		ConstantInitializationVector?: string;
		EncryptionMethod?: HlsEncryptionType;
		InitializationVectorInManifest?: CmafInitializationVectorInManifest;
		OfflineEncrypted?: AdvancedInputFilter;
		SpekeKeyProvider?: SpekeKeyProvider;
		StaticKeyProvider?: StaticKeyProvider;
		Type?: CmafKeyProviderType;
	}

	/** Settings for HLS encryption */
	export interface HlsEncryptionSettingsFormProperties {
		ConstantInitializationVector: FormControl<string | null | undefined>,
		EncryptionMethod: FormControl<HlsEncryptionType | null | undefined>,
		InitializationVectorInManifest: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		OfflineEncrypted: FormControl<AdvancedInputFilter | null | undefined>,
		Type: FormControl<CmafKeyProviderType | null | undefined>,
	}
	export function CreateHlsEncryptionSettingsFormGroup() {
		return new FormGroup<HlsEncryptionSettingsFormProperties>({
			ConstantInitializationVector: new FormControl<string | null | undefined>(undefined),
			EncryptionMethod: new FormControl<HlsEncryptionType | null | undefined>(undefined),
			InitializationVectorInManifest: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			OfflineEncrypted: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			Type: new FormControl<CmafKeyProviderType | null | undefined>(undefined),
		});

	}


	/** Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption. */
	export enum HlsEncryptionType { AES128 = 0, SAMPLE_AES = 1 }


	/** Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED */
	export interface HlsImageBasedTrickPlaySettings {
		IntervalCadence?: CmafIntervalCadence;
		ThumbnailHeight?: number | null;
		ThumbnailInterval?: number | null;
		ThumbnailWidth?: number | null;
		TileHeight?: number | null;
		TileWidth?: number | null;
	}

	/** Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED */
	export interface HlsImageBasedTrickPlaySettingsFormProperties {
		IntervalCadence: FormControl<CmafIntervalCadence | null | undefined>,
		ThumbnailHeight: FormControl<number | null | undefined>,
		ThumbnailInterval: FormControl<number | null | undefined>,
		ThumbnailWidth: FormControl<number | null | undefined>,
		TileHeight: FormControl<number | null | undefined>,
		TileWidth: FormControl<number | null | undefined>,
	}
	export function CreateHlsImageBasedTrickPlaySettingsFormGroup() {
		return new FormGroup<HlsImageBasedTrickPlaySettingsFormProperties>({
			IntervalCadence: new FormControl<CmafIntervalCadence | null | undefined>(undefined),
			ThumbnailHeight: new FormControl<number | null | undefined>(undefined),
			ThumbnailInterval: new FormControl<number | null | undefined>(undefined),
			ThumbnailWidth: new FormControl<number | null | undefined>(undefined),
			TileHeight: new FormControl<number | null | undefined>(undefined),
			TileWidth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates whether the .m3u8 manifest file should be generated for this HLS output group. */
	export enum HlsOutputSelection { MANIFESTS_AND_SEGMENTS = 0, SEGMENTS_ONLY = 1 }


	/** Specify the type of the ID3 frame to use for ID3 timestamps in your output. To include ID3 timestamps: Specify PRIV or TDRL and set ID3 metadata to Passthrough. To exclude ID3 timestamps: Set ID3 timestamp frame type to None. */
	export enum HlsTimedMetadataId3Frame { NONE = 0, PRIV = 1, TDRL = 2 }


	/** Settings related to your Microsoft Smooth Streaming output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. */
	export interface MsSmoothGroupSettings {
		AdditionalManifests?: Array<MsSmoothAdditionalManifest>;
		AudioDeduplication?: MsSmoothAudioDeduplication;
		Destination?: string;
		DestinationSettings?: DestinationSettings;
		Encryption?: MsSmoothEncryptionSettings;
		FragmentLength?: number | null;
		FragmentLengthControl?: CmafSegmentLengthControl;
		ManifestEncoding?: MsSmoothManifestEncoding;
	}

	/** Settings related to your Microsoft Smooth Streaming output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. */
	export interface MsSmoothGroupSettingsFormProperties {
		AudioDeduplication: FormControl<MsSmoothAudioDeduplication | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		FragmentLength: FormControl<number | null | undefined>,
		FragmentLengthControl: FormControl<CmafSegmentLengthControl | null | undefined>,
		ManifestEncoding: FormControl<MsSmoothManifestEncoding | null | undefined>,
	}
	export function CreateMsSmoothGroupSettingsFormGroup() {
		return new FormGroup<MsSmoothGroupSettingsFormProperties>({
			AudioDeduplication: new FormControl<MsSmoothAudioDeduplication | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			FragmentLength: new FormControl<number | null | undefined>(undefined),
			FragmentLengthControl: new FormControl<CmafSegmentLengthControl | null | undefined>(undefined),
			ManifestEncoding: new FormControl<MsSmoothManifestEncoding | null | undefined>(undefined),
		});

	}


	/** Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface MsSmoothAdditionalManifest {
		ManifestNameModifier?: string;
		SelectedOutputs?: Array<string>;
	}

	/** Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group. */
	export interface MsSmoothAdditionalManifestFormProperties {
		ManifestNameModifier: FormControl<string | null | undefined>,
	}
	export function CreateMsSmoothAdditionalManifestFormGroup() {
		return new FormGroup<MsSmoothAdditionalManifestFormProperties>({
			ManifestNameModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream. */
	export enum MsSmoothAudioDeduplication { COMBINE_DUPLICATE_STREAMS = 0, NONE = 1 }


	/** If you are using DRM, set DRM System to specify the value SpekeKeyProvider. */
	export interface MsSmoothEncryptionSettings {
		SpekeKeyProvider?: SpekeKeyProvider;
	}

	/** If you are using DRM, set DRM System to specify the value SpekeKeyProvider. */
	export interface MsSmoothEncryptionSettingsFormProperties {
	}
	export function CreateMsSmoothEncryptionSettingsFormGroup() {
		return new FormGroup<MsSmoothEncryptionSettingsFormProperties>({
		});

	}


	/** Use Manifest encoding to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16. */
	export enum MsSmoothManifestEncoding { UTF8 = 0, UTF16 = 1 }


	/** Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF) */
	export enum OutputGroupType { HLS_GROUP_SETTINGS = 0, DASH_ISO_GROUP_SETTINGS = 1, FILE_GROUP_SETTINGS = 2, MS_SMOOTH_GROUP_SETTINGS = 3, CMAF_GROUP_SETTINGS = 4 }


	/** Each output in your job is a collection of settings that describes how you want MediaConvert to encode a single output file or stream. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/create-outputs.html. */
	export interface Output {
		AudioDescriptions?: Array<AudioDescription>;
		CaptionDescriptions?: Array<CaptionDescription>;
		ContainerSettings?: ContainerSettings;
		Extension?: string;
		NameModifier?: string;
		OutputSettings?: OutputSettings;
		Preset?: string;
		VideoDescription?: VideoDescription;
	}

	/** Each output in your job is a collection of settings that describes how you want MediaConvert to encode a single output file or stream. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/create-outputs.html. */
	export interface OutputFormProperties {
		Extension: FormControl<string | null | undefined>,
		NameModifier: FormControl<string | null | undefined>,
		Preset: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			Extension: new FormControl<string | null | undefined>(undefined),
			NameModifier: new FormControl<string | null | undefined>(undefined),
			Preset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings related to one audio tab on the MediaConvert console. In your job JSON, an instance of AudioDescription is equivalent to one audio tab in the console. Usually, one audio tab corresponds to one output audio track. Depending on how you set up your input audio selectors and whether you use audio selector groups, one audio tab can correspond to a group of output audio tracks. */
	export interface AudioDescription {
		AudioChannelTaggingSettings?: AudioChannelTaggingSettings;
		AudioNormalizationSettings?: AudioNormalizationSettings;
		AudioSourceName?: string;
		AudioType?: number | null;
		AudioTypeControl?: AudioTypeControl;
		CodecSettings?: AudioCodecSettings;
		CustomLanguageCode?: string;
		LanguageCode?: LanguageCode;
		LanguageCodeControl?: AudioTypeControl;
		RemixSettings?: RemixSettings;
		StreamName?: string;
	}

	/** Settings related to one audio tab on the MediaConvert console. In your job JSON, an instance of AudioDescription is equivalent to one audio tab in the console. Usually, one audio tab corresponds to one output audio track. Depending on how you set up your input audio selectors and whether you use audio selector groups, one audio tab can correspond to a group of output audio tracks. */
	export interface AudioDescriptionFormProperties {
		AudioSourceName: FormControl<string | null | undefined>,
		AudioType: FormControl<number | null | undefined>,
		AudioTypeControl: FormControl<AudioTypeControl | null | undefined>,
		CustomLanguageCode: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LanguageCodeControl: FormControl<AudioTypeControl | null | undefined>,
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateAudioDescriptionFormGroup() {
		return new FormGroup<AudioDescriptionFormProperties>({
			AudioSourceName: new FormControl<string | null | undefined>(undefined),
			AudioType: new FormControl<number | null | undefined>(undefined),
			AudioTypeControl: new FormControl<AudioTypeControl | null | undefined>(undefined),
			CustomLanguageCode: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LanguageCodeControl: new FormControl<AudioTypeControl | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel. */
	export interface AudioChannelTaggingSettings {
		ChannelTag?: AudioChannelTag;
	}

	/** When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel. */
	export interface AudioChannelTaggingSettingsFormProperties {
		ChannelTag: FormControl<AudioChannelTag | null | undefined>,
	}
	export function CreateAudioChannelTaggingSettingsFormGroup() {
		return new FormGroup<AudioChannelTaggingSettingsFormProperties>({
			ChannelTag: new FormControl<AudioChannelTag | null | undefined>(undefined),
		});

	}


	/** You can add a tag for this mono-channel audio track to mimic its placement in a multi-channel layout. For example, if this track is the left surround channel, choose Left surround (LS). */
	export enum AudioChannelTag { L = 0, R = 1, C = 2, LFE = 3, LS = 4, RS = 5, LC = 6, RC = 7, CS = 8, LSD = 9, RSD = 10, TCS = 11, VHL = 12, VHC = 13, VHR = 14 }


	/** Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard. */
	export interface AudioNormalizationSettings {
		Algorithm?: AudioNormalizationAlgorithm;
		AlgorithmControl?: AudioNormalizationAlgorithmControl;
		CorrectionGateLevel?: number | null;
		LoudnessLogging?: AudioNormalizationLoudnessLogging;
		PeakCalculation?: AudioNormalizationPeakCalculation;
		TargetLkfs?: number | null;
		TruePeakLimiterThreshold?: number | null;
	}

	/** Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard. */
	export interface AudioNormalizationSettingsFormProperties {
		Algorithm: FormControl<AudioNormalizationAlgorithm | null | undefined>,
		AlgorithmControl: FormControl<AudioNormalizationAlgorithmControl | null | undefined>,
		CorrectionGateLevel: FormControl<number | null | undefined>,
		LoudnessLogging: FormControl<AudioNormalizationLoudnessLogging | null | undefined>,
		PeakCalculation: FormControl<AudioNormalizationPeakCalculation | null | undefined>,
		TargetLkfs: FormControl<number | null | undefined>,
		TruePeakLimiterThreshold: FormControl<number | null | undefined>,
	}
	export function CreateAudioNormalizationSettingsFormGroup() {
		return new FormGroup<AudioNormalizationSettingsFormProperties>({
			Algorithm: new FormControl<AudioNormalizationAlgorithm | null | undefined>(undefined),
			AlgorithmControl: new FormControl<AudioNormalizationAlgorithmControl | null | undefined>(undefined),
			CorrectionGateLevel: new FormControl<number | null | undefined>(undefined),
			LoudnessLogging: new FormControl<AudioNormalizationLoudnessLogging | null | undefined>(undefined),
			PeakCalculation: new FormControl<AudioNormalizationPeakCalculation | null | undefined>(undefined),
			TargetLkfs: new FormControl<number | null | undefined>(undefined),
			TruePeakLimiterThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1. */
	export enum AudioNormalizationAlgorithm { ITU_BS_1770_1 = 0, ITU_BS_1770_2 = 1, ITU_BS_1770_3 = 2, ITU_BS_1770_4 = 3 }


	/** When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted. */
	export enum AudioNormalizationAlgorithmControl { CORRECT_AUDIO = 0, MEASURE_ONLY = 1 }


	/** If set to LOG, log each output's audio track loudness to a CSV file. */
	export enum AudioNormalizationLoudnessLogging { LOG = 0, DONT_LOG = 1 }


	/** If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness. */
	export enum AudioNormalizationPeakCalculation { TRUE_PEAK = 0, NONE = 1 }


	/** When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD. */
	export enum AudioTypeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec. */
	export interface AudioCodecSettings {
		AacSettings?: AacSettings;
		Ac3Settings?: Ac3Settings;
		AiffSettings?: AiffSettings;
		Codec?: AudioCodec;
		Eac3AtmosSettings?: Eac3AtmosSettings;
		Eac3Settings?: Eac3Settings;
		Mp2Settings?: Mp2Settings;
		Mp3Settings?: Mp3Settings;
		OpusSettings?: OpusSettings;
		VorbisSettings?: VorbisSettings;
		WavSettings?: WavSettings;
	}

	/** Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec. */
	export interface AudioCodecSettingsFormProperties {
		Codec: FormControl<AudioCodec | null | undefined>,
	}
	export function CreateAudioCodecSettingsFormGroup() {
		return new FormGroup<AudioCodecSettingsFormProperties>({
			Codec: new FormControl<AudioCodec | null | undefined>(undefined),
		});

	}


	/** Required when you set Codec to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality. In CBR mode, you use the setting Bitrate. Defaults and valid values depend on the rate control mode. */
	export interface AacSettings {
		AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix;
		Bitrate?: number | null;
		CodecProfile?: AacCodecProfile;
		CodingMode?: AacCodingMode;
		RateControlMode?: AacRateControlMode;
		RawFormat?: AacRawFormat;
		SampleRate?: number | null;
		Specification?: AacSpecification;
		VbrQuality?: AacVbrQuality;
	}

	/** Required when you set Codec to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality. In CBR mode, you use the setting Bitrate. Defaults and valid values depend on the rate control mode. */
	export interface AacSettingsFormProperties {
		AudioDescriptionBroadcasterMix: FormControl<AacAudioDescriptionBroadcasterMix | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		CodecProfile: FormControl<AacCodecProfile | null | undefined>,
		CodingMode: FormControl<AacCodingMode | null | undefined>,
		RateControlMode: FormControl<AacRateControlMode | null | undefined>,
		RawFormat: FormControl<AacRawFormat | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
		Specification: FormControl<AacSpecification | null | undefined>,
		VbrQuality: FormControl<AacVbrQuality | null | undefined>,
	}
	export function CreateAacSettingsFormGroup() {
		return new FormGroup<AacSettingsFormProperties>({
			AudioDescriptionBroadcasterMix: new FormControl<AacAudioDescriptionBroadcasterMix | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodecProfile: new FormControl<AacCodecProfile | null | undefined>(undefined),
			CodingMode: new FormControl<AacCodingMode | null | undefined>(undefined),
			RateControlMode: new FormControl<AacRateControlMode | null | undefined>(undefined),
			RawFormat: new FormControl<AacRawFormat | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			Specification: new FormControl<AacSpecification | null | undefined>(undefined),
			VbrQuality: new FormControl<AacVbrQuality | null | undefined>(undefined),
		});

	}


	/** Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType. */
	export enum AacAudioDescriptionBroadcasterMix { BROADCASTER_MIXED_AD = 0, NORMAL = 1 }


	/** AAC Profile. */
	export enum AacCodecProfile { LC = 0, HEV1 = 1, HEV2 = 2 }


	/** The Coding mode that you specify determines the number of audio channels and the audio channel layout metadata in your AAC output. Valid coding modes depend on the Rate control mode and Profile that you select. The following list shows the number of audio channels and channel layout for each coding mode. * 1.0 Audio Description (Receiver Mix): One channel, C. Includes audio description data from your stereo input. For more information see ETSI TS 101 154 Annex E. * 1.0 Mono: One channel, C. * 2.0 Stereo: Two channels, L, R. * 5.1 Surround: Six channels, C, L, R, Ls, Rs, LFE. */
	export enum AacCodingMode { AD_RECEIVER_MIX = 0, CODING_MODE_1_0 = 1, CODING_MODE_1_1 = 2, CODING_MODE_2_0 = 3, CODING_MODE_5_1 = 4 }


	/** Rate Control Mode. */
	export enum AacRateControlMode { CBR = 0, VBR = 1 }


	/** Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container. */
	export enum AacRawFormat { LATM_LOAS = 0, NONE = 1 }


	/** Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers. */
	export enum AacSpecification { MPEG2 = 0, MPEG4 = 1 }


	/** VBR Quality Level - Only used if rate_control_mode is VBR. */
	export enum AacVbrQuality { LOW = 0, MEDIUM_LOW = 1, MEDIUM_HIGH = 2, HIGH = 3 }


	/** Required when you set Codec to the value AC3. */
	export interface Ac3Settings {
		Bitrate?: number | null;
		BitstreamMode?: Ac3BitstreamMode;
		CodingMode?: Ac3CodingMode;
		Dialnorm?: number | null;
		DynamicRangeCompressionLine?: Ac3DynamicRangeCompressionLine;
		DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile;
		DynamicRangeCompressionRf?: Ac3DynamicRangeCompressionLine;
		LfeFilter?: AdvancedInputFilter;
		MetadataControl?: AudioTypeControl;
		SampleRate?: number | null;
	}

	/** Required when you set Codec to the value AC3. */
	export interface Ac3SettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		BitstreamMode: FormControl<Ac3BitstreamMode | null | undefined>,
		CodingMode: FormControl<Ac3CodingMode | null | undefined>,
		Dialnorm: FormControl<number | null | undefined>,
		DynamicRangeCompressionLine: FormControl<Ac3DynamicRangeCompressionLine | null | undefined>,
		DynamicRangeCompressionProfile: FormControl<Ac3DynamicRangeCompressionProfile | null | undefined>,
		DynamicRangeCompressionRf: FormControl<Ac3DynamicRangeCompressionLine | null | undefined>,
		LfeFilter: FormControl<AdvancedInputFilter | null | undefined>,
		MetadataControl: FormControl<AudioTypeControl | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
	}
	export function CreateAc3SettingsFormGroup() {
		return new FormGroup<Ac3SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BitstreamMode: new FormControl<Ac3BitstreamMode | null | undefined>(undefined),
			CodingMode: new FormControl<Ac3CodingMode | null | undefined>(undefined),
			Dialnorm: new FormControl<number | null | undefined>(undefined),
			DynamicRangeCompressionLine: new FormControl<Ac3DynamicRangeCompressionLine | null | undefined>(undefined),
			DynamicRangeCompressionProfile: new FormControl<Ac3DynamicRangeCompressionProfile | null | undefined>(undefined),
			DynamicRangeCompressionRf: new FormControl<Ac3DynamicRangeCompressionLine | null | undefined>(undefined),
			LfeFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			MetadataControl: new FormControl<AudioTypeControl | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
	export enum Ac3BitstreamMode { COMPLETE_MAIN = 0, COMMENTARY = 1, DIALOGUE = 2, EMERGENCY = 3, HEARING_IMPAIRED = 4, MUSIC_AND_EFFECTS = 5, VISUALLY_IMPAIRED = 6, VOICE_OVER = 7 }


	/** Dolby Digital coding mode. Determines number of channels. */
	export enum Ac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_1_1 = 1, CODING_MODE_2_0 = 2, CODING_MODE_3_2_LFE = 3 }


	/** Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf. */
	export enum Ac3DynamicRangeCompressionLine { FILM_STANDARD = 0, FILM_LIGHT = 1, MUSIC_STANDARD = 2, MUSIC_LIGHT = 3, SPEECH = 4, NONE = 5 }


	/** When you want to add Dolby dynamic range compression (DRC) signaling to your output stream, we recommend that you use the mode-specific settings instead of Dynamic range compression profile. The mode-specific settings are Dynamic range compression profile, line mode and Dynamic range compression profile, RF mode. Note that when you specify values for all three settings, MediaConvert ignores the value of this setting in favor of the mode-specific settings. If you do use this setting instead of the mode-specific settings, choose None to leave out DRC signaling. Keep the default Film standard to set the profile to Dolby's film standard profile for all operating modes. */
	export enum Ac3DynamicRangeCompressionProfile { FILM_STANDARD = 0, NONE = 1 }


	/** Required when you set Codec to the value AIFF. */
	export interface AiffSettings {
		BitDepth?: number | null;
		Channels?: number | null;
		SampleRate?: number | null;
	}

	/** Required when you set Codec to the value AIFF. */
	export interface AiffSettingsFormProperties {
		BitDepth: FormControl<number | null | undefined>,
		Channels: FormControl<number | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
	}
	export function CreateAiffSettingsFormGroup() {
		return new FormGroup<AiffSettingsFormProperties>({
			BitDepth: new FormControl<number | null | undefined>(undefined),
			Channels: new FormControl<number | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Choose the audio codec for this output. Note that the option Dolby Digital passthrough applies only to Dolby Digital and Dolby Digital Plus audio inputs. Make sure that you choose a codec that's supported with your output container: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#reference-codecs-containers-output-audio For audio-only outputs, make sure that both your input audio codec and your output audio codec are supported for audio-only workflows. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers-input.html#reference-codecs-containers-input-audio-only and https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#audio-only-output */
	export enum AudioCodec { AAC = 0, MP2 = 1, MP3 = 2, WAV = 3, AIFF = 4, AC3 = 5, EAC3 = 6, EAC3_ATMOS = 7, VORBIS = 8, OPUS = 9, PASSTHROUGH = 10 }


	/** Required when you set Codec to the value EAC3_ATMOS. */
	export interface Eac3AtmosSettings {
		Bitrate?: number | null;
		BitstreamMode?: Eac3AtmosBitstreamMode;
		CodingMode?: Eac3AtmosCodingMode;
		DialogueIntelligence?: AdvancedInputFilter;
		DownmixControl?: Eac3AtmosDownmixControl;
		DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine;
		DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionLine;
		DynamicRangeControl?: Eac3AtmosDownmixControl;
		LoRoCenterMixLevel?: number | null;
		LoRoSurroundMixLevel?: number | null;
		LtRtCenterMixLevel?: number | null;
		LtRtSurroundMixLevel?: number | null;
		MeteringMode?: Eac3AtmosMeteringMode;
		SampleRate?: number | null;
		SpeechThreshold?: number | null;
		StereoDownmix?: Eac3AtmosStereoDownmix;
		SurroundExMode?: Eac3AtmosSurroundExMode;
	}

	/** Required when you set Codec to the value EAC3_ATMOS. */
	export interface Eac3AtmosSettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		BitstreamMode: FormControl<Eac3AtmosBitstreamMode | null | undefined>,
		CodingMode: FormControl<Eac3AtmosCodingMode | null | undefined>,
		DialogueIntelligence: FormControl<AdvancedInputFilter | null | undefined>,
		DownmixControl: FormControl<Eac3AtmosDownmixControl | null | undefined>,
		DynamicRangeCompressionLine: FormControl<Eac3AtmosDynamicRangeCompressionLine | null | undefined>,
		DynamicRangeCompressionRf: FormControl<Eac3AtmosDynamicRangeCompressionLine | null | undefined>,
		DynamicRangeControl: FormControl<Eac3AtmosDownmixControl | null | undefined>,
		LoRoCenterMixLevel: FormControl<number | null | undefined>,
		LoRoSurroundMixLevel: FormControl<number | null | undefined>,
		LtRtCenterMixLevel: FormControl<number | null | undefined>,
		LtRtSurroundMixLevel: FormControl<number | null | undefined>,
		MeteringMode: FormControl<Eac3AtmosMeteringMode | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
		SpeechThreshold: FormControl<number | null | undefined>,
		StereoDownmix: FormControl<Eac3AtmosStereoDownmix | null | undefined>,
		SurroundExMode: FormControl<Eac3AtmosSurroundExMode | null | undefined>,
	}
	export function CreateEac3AtmosSettingsFormGroup() {
		return new FormGroup<Eac3AtmosSettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BitstreamMode: new FormControl<Eac3AtmosBitstreamMode | null | undefined>(undefined),
			CodingMode: new FormControl<Eac3AtmosCodingMode | null | undefined>(undefined),
			DialogueIntelligence: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			DownmixControl: new FormControl<Eac3AtmosDownmixControl | null | undefined>(undefined),
			DynamicRangeCompressionLine: new FormControl<Eac3AtmosDynamicRangeCompressionLine | null | undefined>(undefined),
			DynamicRangeCompressionRf: new FormControl<Eac3AtmosDynamicRangeCompressionLine | null | undefined>(undefined),
			DynamicRangeControl: new FormControl<Eac3AtmosDownmixControl | null | undefined>(undefined),
			LoRoCenterMixLevel: new FormControl<number | null | undefined>(undefined),
			LoRoSurroundMixLevel: new FormControl<number | null | undefined>(undefined),
			LtRtCenterMixLevel: new FormControl<number | null | undefined>(undefined),
			LtRtSurroundMixLevel: new FormControl<number | null | undefined>(undefined),
			MeteringMode: new FormControl<Eac3AtmosMeteringMode | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			SpeechThreshold: new FormControl<number | null | undefined>(undefined),
			StereoDownmix: new FormControl<Eac3AtmosStereoDownmix | null | undefined>(undefined),
			SurroundExMode: new FormControl<Eac3AtmosSurroundExMode | null | undefined>(undefined),
		});

	}


	/** Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
	export enum Eac3AtmosBitstreamMode { COMPLETE_MAIN = 0 }


	/** The coding mode for Dolby Digital Plus JOC (Atmos). */
	export enum Eac3AtmosCodingMode { CODING_MODE_AUTO = 0, CODING_MODE_5_1_4 = 1, CODING_MODE_7_1_4 = 2, CODING_MODE_9_1_6 = 3 }


	/** Specify whether MediaConvert should use any downmix metadata from your input file. Keep the default value, Custom to provide downmix values in your job settings. Choose Follow source to use the metadata from your input. Related settings--Use these settings to specify your downmix values: Left only/Right only surround, Left total/Right total surround, Left total/Right total center, Left only/Right only center, and Stereo downmix. When you keep Custom for Downmix control and you don't specify values for the related settings, MediaConvert uses default values for those settings. */
	export enum Eac3AtmosDownmixControl { SPECIFIED = 0, INITIALIZE_FROM_SOURCE = 1 }


	/** Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the line operating mode. Default value: Film light Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom for the setting Dynamic range control. Otherwise, MediaConvert ignores Dynamic range compression line. For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf. */
	export enum Eac3AtmosDynamicRangeCompressionLine { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }


	/** Choose how the service meters the loudness of your audio. */
	export enum Eac3AtmosMeteringMode { LEQ_A = 0, ITU_BS_1770_1 = 1, ITU_BS_1770_2 = 2, ITU_BS_1770_3 = 3, ITU_BS_1770_4 = 4 }


	/** Choose how the service does stereo downmixing. Default value: Not indicated Related setting: To have MediaConvert use this value, keep the default value, Custom for the setting Downmix control. Otherwise, MediaConvert ignores Stereo downmix. */
	export enum Eac3AtmosStereoDownmix { NOT_INDICATED = 0, STEREO = 1, SURROUND = 2, DPL2 = 3 }


	/** Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels. */
	export enum Eac3AtmosSurroundExMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }


	/** Required when you set Codec to the value EAC3. */
	export interface Eac3Settings {
		AttenuationControl?: Eac3AttenuationControl;
		Bitrate?: number | null;
		BitstreamMode?: Eac3BitstreamMode;
		CodingMode?: Eac3CodingMode;
		DcFilter?: AdvancedInputFilter;
		Dialnorm?: number | null;
		DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine;
		DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionLine;
		LfeControl?: Eac3LfeControl;
		LfeFilter?: AdvancedInputFilter;
		LoRoCenterMixLevel?: number | null;
		LoRoSurroundMixLevel?: number | null;
		LtRtCenterMixLevel?: number | null;
		LtRtSurroundMixLevel?: number | null;
		MetadataControl?: AudioTypeControl;
		PassthroughControl?: Eac3PassthroughControl;
		PhaseControl?: Eac3PhaseControl;
		SampleRate?: number | null;
		StereoDownmix?: Eac3StereoDownmix;
		SurroundExMode?: Eac3AtmosSurroundExMode;
		SurroundMode?: Eac3AtmosSurroundExMode;
	}

	/** Required when you set Codec to the value EAC3. */
	export interface Eac3SettingsFormProperties {
		AttenuationControl: FormControl<Eac3AttenuationControl | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		BitstreamMode: FormControl<Eac3BitstreamMode | null | undefined>,
		CodingMode: FormControl<Eac3CodingMode | null | undefined>,
		DcFilter: FormControl<AdvancedInputFilter | null | undefined>,
		Dialnorm: FormControl<number | null | undefined>,
		DynamicRangeCompressionLine: FormControl<Eac3AtmosDynamicRangeCompressionLine | null | undefined>,
		DynamicRangeCompressionRf: FormControl<Eac3AtmosDynamicRangeCompressionLine | null | undefined>,
		LfeControl: FormControl<Eac3LfeControl | null | undefined>,
		LfeFilter: FormControl<AdvancedInputFilter | null | undefined>,
		LoRoCenterMixLevel: FormControl<number | null | undefined>,
		LoRoSurroundMixLevel: FormControl<number | null | undefined>,
		LtRtCenterMixLevel: FormControl<number | null | undefined>,
		LtRtSurroundMixLevel: FormControl<number | null | undefined>,
		MetadataControl: FormControl<AudioTypeControl | null | undefined>,
		PassthroughControl: FormControl<Eac3PassthroughControl | null | undefined>,
		PhaseControl: FormControl<Eac3PhaseControl | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
		StereoDownmix: FormControl<Eac3StereoDownmix | null | undefined>,
		SurroundExMode: FormControl<Eac3AtmosSurroundExMode | null | undefined>,
		SurroundMode: FormControl<Eac3AtmosSurroundExMode | null | undefined>,
	}
	export function CreateEac3SettingsFormGroup() {
		return new FormGroup<Eac3SettingsFormProperties>({
			AttenuationControl: new FormControl<Eac3AttenuationControl | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BitstreamMode: new FormControl<Eac3BitstreamMode | null | undefined>(undefined),
			CodingMode: new FormControl<Eac3CodingMode | null | undefined>(undefined),
			DcFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			Dialnorm: new FormControl<number | null | undefined>(undefined),
			DynamicRangeCompressionLine: new FormControl<Eac3AtmosDynamicRangeCompressionLine | null | undefined>(undefined),
			DynamicRangeCompressionRf: new FormControl<Eac3AtmosDynamicRangeCompressionLine | null | undefined>(undefined),
			LfeControl: new FormControl<Eac3LfeControl | null | undefined>(undefined),
			LfeFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			LoRoCenterMixLevel: new FormControl<number | null | undefined>(undefined),
			LoRoSurroundMixLevel: new FormControl<number | null | undefined>(undefined),
			LtRtCenterMixLevel: new FormControl<number | null | undefined>(undefined),
			LtRtSurroundMixLevel: new FormControl<number | null | undefined>(undefined),
			MetadataControl: new FormControl<AudioTypeControl | null | undefined>(undefined),
			PassthroughControl: new FormControl<Eac3PassthroughControl | null | undefined>(undefined),
			PhaseControl: new FormControl<Eac3PhaseControl | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			StereoDownmix: new FormControl<Eac3StereoDownmix | null | undefined>(undefined),
			SurroundExMode: new FormControl<Eac3AtmosSurroundExMode | null | undefined>(undefined),
			SurroundMode: new FormControl<Eac3AtmosSurroundExMode | null | undefined>(undefined),
		});

	}


	/** If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode. */
	export enum Eac3AttenuationControl { ATTENUATE_3_DB = 0, NONE = 1 }


	/** Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E). */
	export enum Eac3BitstreamMode { COMPLETE_MAIN = 0, COMMENTARY = 1, EMERGENCY = 2, HEARING_IMPAIRED = 3, VISUALLY_IMPAIRED = 4 }


	/** Dolby Digital Plus coding mode. Determines number of channels. */
	export enum Eac3CodingMode { CODING_MODE_1_0 = 0, CODING_MODE_2_0 = 1, CODING_MODE_3_2 = 2 }


	/** When encoding 3/2 audio, controls whether the LFE channel is enabled */
	export enum Eac3LfeControl { LFE = 0, NO_LFE = 1 }


	/** When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding. */
	export enum Eac3PassthroughControl { WHEN_POSSIBLE = 0, NO_PASSTHROUGH = 1 }


	/** Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode. */
	export enum Eac3PhaseControl { SHIFT_90_DEGREES = 0, NO_SHIFT = 1 }


	/** Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs for the setting Coding mode. If you choose a different value for Coding mode, the service ignores Stereo downmix. */
	export enum Eac3StereoDownmix { NOT_INDICATED = 0, LO_RO = 1, LT_RT = 2, DPL2 = 3 }


	/** Required when you set Codec to the value MP2. */
	export interface Mp2Settings {
		Bitrate?: number | null;
		Channels?: number | null;
		SampleRate?: number | null;
	}

	/** Required when you set Codec to the value MP2. */
	export interface Mp2SettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		Channels: FormControl<number | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
	}
	export function CreateMp2SettingsFormGroup() {
		return new FormGroup<Mp2SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			Channels: new FormControl<number | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3. */
	export interface Mp3Settings {
		Bitrate?: number | null;
		Channels?: number | null;
		RateControlMode?: AacRateControlMode;
		SampleRate?: number | null;
		VbrQuality?: number | null;
	}

	/** Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3. */
	export interface Mp3SettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		Channels: FormControl<number | null | undefined>,
		RateControlMode: FormControl<AacRateControlMode | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
		VbrQuality: FormControl<number | null | undefined>,
	}
	export function CreateMp3SettingsFormGroup() {
		return new FormGroup<Mp3SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			Channels: new FormControl<number | null | undefined>(undefined),
			RateControlMode: new FormControl<AacRateControlMode | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			VbrQuality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS. */
	export interface OpusSettings {
		Bitrate?: number | null;
		Channels?: number | null;
		SampleRate?: number | null;
	}

	/** Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS. */
	export interface OpusSettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		Channels: FormControl<number | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
	}
	export function CreateOpusSettingsFormGroup() {
		return new FormGroup<OpusSettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			Channels: new FormControl<number | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis. */
	export interface VorbisSettings {
		Channels?: number | null;
		SampleRate?: number | null;
		VbrQuality?: number | null;
	}

	/** Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis. */
	export interface VorbisSettingsFormProperties {
		Channels: FormControl<number | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
		VbrQuality: FormControl<number | null | undefined>,
	}
	export function CreateVorbisSettingsFormGroup() {
		return new FormGroup<VorbisSettingsFormProperties>({
			Channels: new FormControl<number | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			VbrQuality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Required when you set Codec to the value WAV. */
	export interface WavSettings {
		BitDepth?: number | null;
		Channels?: number | null;
		Format?: WavFormat;
		SampleRate?: number | null;
	}

	/** Required when you set Codec to the value WAV. */
	export interface WavSettingsFormProperties {
		BitDepth: FormControl<number | null | undefined>,
		Channels: FormControl<number | null | undefined>,
		Format: FormControl<WavFormat | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
	}
	export function CreateWavSettingsFormGroup() {
		return new FormGroup<WavSettingsFormProperties>({
			BitDepth: new FormControl<number | null | undefined>(undefined),
			Channels: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<WavFormat | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64. */
	export enum WavFormat { RIFF = 0, RF64 = 1 }


	/** Use Manual audio remixing to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides. */
	export interface RemixSettings {
		ChannelMapping?: ChannelMapping;
		ChannelsIn?: number | null;
		ChannelsOut?: number | null;
	}

	/** Use Manual audio remixing to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides. */
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


	/** Channel mapping contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both. */
	export interface ChannelMapping {
		OutputChannels?: Array<OutputChannelMapping>;
	}

	/** Channel mapping contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both. */
	export interface ChannelMappingFormProperties {
	}
	export function CreateChannelMappingFormGroup() {
		return new FormGroup<ChannelMappingFormProperties>({
		});

	}


	/** OutputChannel mapping settings. */
	export interface OutputChannelMapping {
		InputChannels?: Array<number> | null;
		InputChannelsFineTune?: Array<number> | null;
	}

	/** OutputChannel mapping settings. */
	export interface OutputChannelMappingFormProperties {
	}
	export function CreateOutputChannelMappingFormGroup() {
		return new FormGroup<OutputChannelMappingFormProperties>({
		});

	}


	/** This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions. */
	export interface CaptionDescription {
		CaptionSelectorName?: string;
		CustomLanguageCode?: string;
		DestinationSettings?: CaptionDestinationSettings;
		LanguageCode?: LanguageCode;
		LanguageDescription?: string;
	}

	/** This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions. */
	export interface CaptionDescriptionFormProperties {
		CaptionSelectorName: FormControl<string | null | undefined>,
		CustomLanguageCode: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LanguageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCaptionDescriptionFormGroup() {
		return new FormGroup<CaptionDescriptionFormProperties>({
			CaptionSelectorName: new FormControl<string | null | undefined>(undefined),
			CustomLanguageCode: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LanguageDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings related to one captions tab on the MediaConvert console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html. */
	export interface CaptionDestinationSettings {
		BurninDestinationSettings?: BurninDestinationSettings;
		DestinationType?: CaptionDestinationType;
		DvbSubDestinationSettings?: DvbSubDestinationSettings;
		EmbeddedDestinationSettings?: EmbeddedDestinationSettings;
		ImscDestinationSettings?: ImscDestinationSettings;
		SccDestinationSettings?: SccDestinationSettings;
		SrtDestinationSettings?: SrtDestinationSettings;
		TeletextDestinationSettings?: TeletextDestinationSettings;
		TtmlDestinationSettings?: TtmlDestinationSettings;
		WebvttDestinationSettings?: WebvttDestinationSettings;
	}

	/** Settings related to one captions tab on the MediaConvert console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html. */
	export interface CaptionDestinationSettingsFormProperties {
		DestinationType: FormControl<CaptionDestinationType | null | undefined>,
	}
	export function CreateCaptionDestinationSettingsFormGroup() {
		return new FormGroup<CaptionDestinationSettingsFormProperties>({
			DestinationType: new FormControl<CaptionDestinationType | null | undefined>(undefined),
		});

	}


	/** Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html. */
	export interface BurninDestinationSettings {
		Alignment?: BurninSubtitleAlignment;
		ApplyFontColor?: BurninSubtitleApplyFontColor;
		BackgroundColor?: BurninSubtitleBackgroundColor;
		BackgroundOpacity?: number | null;
		FallbackFont?: BurninSubtitleFallbackFont;
		FontColor?: BurninSubtitleFontColor;
		FontOpacity?: number | null;
		FontResolution?: number | null;
		FontScript?: FontScript;
		FontSize?: number | null;
		HexFontColor?: string;
		OutlineColor?: BurninSubtitleOutlineColor;
		OutlineSize?: number | null;
		ShadowColor?: BurninSubtitleBackgroundColor;
		ShadowOpacity?: number | null;
		ShadowXOffset?: number | null;
		ShadowYOffset?: number | null;
		StylePassthrough?: AdvancedInputFilter;
		TeletextSpacing?: BurninSubtitleTeletextSpacing;
		XPosition?: number | null;
		YPosition?: number | null;
	}

	/** Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html. */
	export interface BurninDestinationSettingsFormProperties {
		Alignment: FormControl<BurninSubtitleAlignment | null | undefined>,
		ApplyFontColor: FormControl<BurninSubtitleApplyFontColor | null | undefined>,
		BackgroundColor: FormControl<BurninSubtitleBackgroundColor | null | undefined>,
		BackgroundOpacity: FormControl<number | null | undefined>,
		FallbackFont: FormControl<BurninSubtitleFallbackFont | null | undefined>,
		FontColor: FormControl<BurninSubtitleFontColor | null | undefined>,
		FontOpacity: FormControl<number | null | undefined>,
		FontResolution: FormControl<number | null | undefined>,
		FontScript: FormControl<FontScript | null | undefined>,
		FontSize: FormControl<number | null | undefined>,
		HexFontColor: FormControl<string | null | undefined>,
		OutlineColor: FormControl<BurninSubtitleOutlineColor | null | undefined>,
		OutlineSize: FormControl<number | null | undefined>,
		ShadowColor: FormControl<BurninSubtitleBackgroundColor | null | undefined>,
		ShadowOpacity: FormControl<number | null | undefined>,
		ShadowXOffset: FormControl<number | null | undefined>,
		ShadowYOffset: FormControl<number | null | undefined>,
		StylePassthrough: FormControl<AdvancedInputFilter | null | undefined>,
		TeletextSpacing: FormControl<BurninSubtitleTeletextSpacing | null | undefined>,
		XPosition: FormControl<number | null | undefined>,
		YPosition: FormControl<number | null | undefined>,
	}
	export function CreateBurninDestinationSettingsFormGroup() {
		return new FormGroup<BurninDestinationSettingsFormProperties>({
			Alignment: new FormControl<BurninSubtitleAlignment | null | undefined>(undefined),
			ApplyFontColor: new FormControl<BurninSubtitleApplyFontColor | null | undefined>(undefined),
			BackgroundColor: new FormControl<BurninSubtitleBackgroundColor | null | undefined>(undefined),
			BackgroundOpacity: new FormControl<number | null | undefined>(undefined),
			FallbackFont: new FormControl<BurninSubtitleFallbackFont | null | undefined>(undefined),
			FontColor: new FormControl<BurninSubtitleFontColor | null | undefined>(undefined),
			FontOpacity: new FormControl<number | null | undefined>(undefined),
			FontResolution: new FormControl<number | null | undefined>(undefined),
			FontScript: new FormControl<FontScript | null | undefined>(undefined),
			FontSize: new FormControl<number | null | undefined>(undefined),
			HexFontColor: new FormControl<string | null | undefined>(undefined),
			OutlineColor: new FormControl<BurninSubtitleOutlineColor | null | undefined>(undefined),
			OutlineSize: new FormControl<number | null | undefined>(undefined),
			ShadowColor: new FormControl<BurninSubtitleBackgroundColor | null | undefined>(undefined),
			ShadowOpacity: new FormControl<number | null | undefined>(undefined),
			ShadowXOffset: new FormControl<number | null | undefined>(undefined),
			ShadowYOffset: new FormControl<number | null | undefined>(undefined),
			StylePassthrough: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			TeletextSpacing: new FormControl<BurninSubtitleTeletextSpacing | null | undefined>(undefined),
			XPosition: new FormControl<number | null | undefined>(undefined),
			YPosition: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. */
	export enum BurninSubtitleAlignment { CENTERED = 0, LEFT = 1, AUTO = 2 }


	/** Ignore this setting unless Style passthrough is set to Enabled and Font color set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color for additional font color controls. When you choose White text only, or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text. */
	export enum BurninSubtitleApplyFontColor { WHITE_TEXT_ONLY = 0, ALL_TEXT = 1 }


	/** Specify the color of the rectangle behind the captions. Leave background color blank and set Style passthrough to enabled to use the background color data from your input captions, if present. */
	export enum BurninSubtitleBackgroundColor { NONE = 0, BLACK = 1, WHITE = 2, AUTO = 3 }


	/** Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font to best match, or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input. */
	export enum BurninSubtitleFallbackFont { BEST_MATCH = 0, MONOSPACED_SANSSERIF = 1, MONOSPACED_SERIF = 2, PROPORTIONAL_SANSSERIF = 3, PROPORTIONAL_SERIF = 4 }


	/** Specify the color of the burned-in captions text. Leave Font color blank and set Style passthrough to enabled to use the font color data from your input captions, if present. */
	export enum BurninSubtitleFontColor { WHITE = 0, BLACK = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5, HEX = 6, AUTO = 7 }


	/** Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. */
	export enum FontScript { AUTOMATIC = 0, HANS = 1, HANT = 2 }


	/** Specify font outline color. Leave Outline color blank and set Style passthrough to enabled to use the font outline color data from your input captions, if present. */
	export enum BurninSubtitleOutlineColor { BLACK = 0, WHITE = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5, AUTO = 6 }


	/** Specify whether the text spacing in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read for closed captions. */
	export enum BurninSubtitleTeletextSpacing { FIXED_GRID = 0, PROPORTIONAL = 1, AUTO = 2 }


	/** Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Note that your choice of video output container constrains your choice of output captions format. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/captions-support-tables.html. If you are using SCTE-20 and you want to create an output that complies with the SCTE-43 spec, choose SCTE-20 plus embedded. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20. */
	export enum CaptionDestinationType { BURN_IN = 0, DVB_SUB = 1, EMBEDDED = 2, EMBEDDED_PLUS_SCTE20 = 3, IMSC = 4, SCTE20_PLUS_EMBEDDED = 5, SCC = 6, SRT = 7, SMI = 8, TELETEXT = 9, TTML = 10, WEBVTT = 11 }


	/** Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html. */
	export interface DvbSubDestinationSettings {
		Alignment?: BurninSubtitleAlignment;
		ApplyFontColor?: BurninSubtitleApplyFontColor;
		BackgroundColor?: BurninSubtitleBackgroundColor;
		BackgroundOpacity?: number | null;
		DdsHandling?: DvbddsHandling;
		DdsXCoordinate?: number | null;
		DdsYCoordinate?: number | null;
		FallbackFont?: BurninSubtitleFallbackFont;
		FontColor?: BurninSubtitleFontColor;
		FontOpacity?: number | null;
		FontResolution?: number | null;
		FontScript?: FontScript;
		FontSize?: number | null;
		Height?: number | null;
		HexFontColor?: string;
		OutlineColor?: BurninSubtitleOutlineColor;
		OutlineSize?: number | null;
		ShadowColor?: BurninSubtitleBackgroundColor;
		ShadowOpacity?: number | null;
		ShadowXOffset?: number | null;
		ShadowYOffset?: number | null;
		StylePassthrough?: AdvancedInputFilter;
		SubtitlingType?: DvbSubtitlingType;
		TeletextSpacing?: BurninSubtitleTeletextSpacing;
		Width?: number | null;
		XPosition?: number | null;
		YPosition?: number | null;
	}

	/** Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html. */
	export interface DvbSubDestinationSettingsFormProperties {
		Alignment: FormControl<BurninSubtitleAlignment | null | undefined>,
		ApplyFontColor: FormControl<BurninSubtitleApplyFontColor | null | undefined>,
		BackgroundColor: FormControl<BurninSubtitleBackgroundColor | null | undefined>,
		BackgroundOpacity: FormControl<number | null | undefined>,
		DdsHandling: FormControl<DvbddsHandling | null | undefined>,
		DdsXCoordinate: FormControl<number | null | undefined>,
		DdsYCoordinate: FormControl<number | null | undefined>,
		FallbackFont: FormControl<BurninSubtitleFallbackFont | null | undefined>,
		FontColor: FormControl<BurninSubtitleFontColor | null | undefined>,
		FontOpacity: FormControl<number | null | undefined>,
		FontResolution: FormControl<number | null | undefined>,
		FontScript: FormControl<FontScript | null | undefined>,
		FontSize: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		HexFontColor: FormControl<string | null | undefined>,
		OutlineColor: FormControl<BurninSubtitleOutlineColor | null | undefined>,
		OutlineSize: FormControl<number | null | undefined>,
		ShadowColor: FormControl<BurninSubtitleBackgroundColor | null | undefined>,
		ShadowOpacity: FormControl<number | null | undefined>,
		ShadowXOffset: FormControl<number | null | undefined>,
		ShadowYOffset: FormControl<number | null | undefined>,
		StylePassthrough: FormControl<AdvancedInputFilter | null | undefined>,
		SubtitlingType: FormControl<DvbSubtitlingType | null | undefined>,
		TeletextSpacing: FormControl<BurninSubtitleTeletextSpacing | null | undefined>,
		Width: FormControl<number | null | undefined>,
		XPosition: FormControl<number | null | undefined>,
		YPosition: FormControl<number | null | undefined>,
	}
	export function CreateDvbSubDestinationSettingsFormGroup() {
		return new FormGroup<DvbSubDestinationSettingsFormProperties>({
			Alignment: new FormControl<BurninSubtitleAlignment | null | undefined>(undefined),
			ApplyFontColor: new FormControl<BurninSubtitleApplyFontColor | null | undefined>(undefined),
			BackgroundColor: new FormControl<BurninSubtitleBackgroundColor | null | undefined>(undefined),
			BackgroundOpacity: new FormControl<number | null | undefined>(undefined),
			DdsHandling: new FormControl<DvbddsHandling | null | undefined>(undefined),
			DdsXCoordinate: new FormControl<number | null | undefined>(undefined),
			DdsYCoordinate: new FormControl<number | null | undefined>(undefined),
			FallbackFont: new FormControl<BurninSubtitleFallbackFont | null | undefined>(undefined),
			FontColor: new FormControl<BurninSubtitleFontColor | null | undefined>(undefined),
			FontOpacity: new FormControl<number | null | undefined>(undefined),
			FontResolution: new FormControl<number | null | undefined>(undefined),
			FontScript: new FormControl<FontScript | null | undefined>(undefined),
			FontSize: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			HexFontColor: new FormControl<string | null | undefined>(undefined),
			OutlineColor: new FormControl<BurninSubtitleOutlineColor | null | undefined>(undefined),
			OutlineSize: new FormControl<number | null | undefined>(undefined),
			ShadowColor: new FormControl<BurninSubtitleBackgroundColor | null | undefined>(undefined),
			ShadowOpacity: new FormControl<number | null | undefined>(undefined),
			ShadowXOffset: new FormControl<number | null | undefined>(undefined),
			ShadowYOffset: new FormControl<number | null | undefined>(undefined),
			StylePassthrough: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			SubtitlingType: new FormControl<DvbSubtitlingType | null | undefined>(undefined),
			TeletextSpacing: new FormControl<BurninSubtitleTeletextSpacing | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
			XPosition: new FormControl<number | null | undefined>(undefined),
			YPosition: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specify how MediaConvert handles the display definition segment (DDS). To exclude the DDS from this set of captions: Keep the default, None. To include the DDS: Choose Specified. When you do, also specify the offset coordinates of the display window with DDS x-coordinate and DDS y-coordinate. To include the DDS, but not include display window data: Choose No display window. When you do, you can write position metadata to the page composition segment (PCS) with DDS x-coordinate and DDS y-coordinate. For video resolutions with a height of 576 pixels or less, MediaConvert doesn't include the DDS, regardless of the value you choose for DDS handling. All burn-in and DVB-Sub font settings must match. */
	export enum DvbddsHandling { NONE = 0, SPECIFIED = 1, NO_DISPLAY_WINDOW = 2 }


	/** Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue. */
	export enum DvbSubtitlingType { HEARING_IMPAIRED = 0, STANDARD = 1 }


	/** Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html. */
	export interface EmbeddedDestinationSettings {
		Destination608ChannelNumber?: number | null;
		Destination708ServiceNumber?: number | null;
	}

	/** Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html. */
	export interface EmbeddedDestinationSettingsFormProperties {
		Destination608ChannelNumber: FormControl<number | null | undefined>,
		Destination708ServiceNumber: FormControl<number | null | undefined>,
	}
	export function CreateEmbeddedDestinationSettingsFormGroup() {
		return new FormGroup<EmbeddedDestinationSettingsFormProperties>({
			Destination608ChannelNumber: new FormControl<number | null | undefined>(undefined),
			Destination708ServiceNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. */
	export interface ImscDestinationSettings {
		Accessibility?: CmafClientCache;
		StylePassthrough?: AdvancedInputFilter;
	}

	/** Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. */
	export interface ImscDestinationSettingsFormProperties {
		Accessibility: FormControl<CmafClientCache | null | undefined>,
		StylePassthrough: FormControl<AdvancedInputFilter | null | undefined>,
	}
	export function CreateImscDestinationSettingsFormGroup() {
		return new FormGroup<ImscDestinationSettingsFormProperties>({
			Accessibility: new FormControl<CmafClientCache | null | undefined>(undefined),
			StylePassthrough: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
		});

	}


	/** Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html. */
	export interface SccDestinationSettings {
		Framerate?: SccDestinationFramerate;
	}

	/** Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html. */
	export interface SccDestinationSettingsFormProperties {
		Framerate: FormControl<SccDestinationFramerate | null | undefined>,
	}
	export function CreateSccDestinationSettingsFormGroup() {
		return new FormGroup<SccDestinationSettingsFormProperties>({
			Framerate: new FormControl<SccDestinationFramerate | null | undefined>(undefined),
		});

	}


	/** Set Framerate to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe. */
	export enum SccDestinationFramerate { FRAMERATE_23_97 = 0, FRAMERATE_24 = 1, FRAMERATE_25 = 2, FRAMERATE_29_97_DROPFRAME = 3, FRAMERATE_29_97_NON_DROPFRAME = 4 }


	/** Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. */
	export interface SrtDestinationSettings {
		StylePassthrough?: AdvancedInputFilter;
	}

	/** Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. */
	export interface SrtDestinationSettingsFormProperties {
		StylePassthrough: FormControl<AdvancedInputFilter | null | undefined>,
	}
	export function CreateSrtDestinationSettingsFormGroup() {
		return new FormGroup<SrtDestinationSettingsFormProperties>({
			StylePassthrough: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
		});

	}


	/** Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html. */
	export interface TeletextDestinationSettings {
		PageNumber?: string;
		PageTypes?: Array<TeletextPageType>;
	}

	/** Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html. */
	export interface TeletextDestinationSettingsFormProperties {
		PageNumber: FormControl<string | null | undefined>,
	}
	export function CreateTeletextDestinationSettingsFormGroup() {
		return new FormGroup<TeletextDestinationSettingsFormProperties>({
			PageNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page type as defined in the standard ETSI EN 300 468, Table 94 */
	export enum TeletextPageType { PAGE_TYPE_INITIAL = 0, PAGE_TYPE_SUBTITLE = 1, PAGE_TYPE_ADDL_INFO = 2, PAGE_TYPE_PROGRAM_SCHEDULE = 3, PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE = 4 }


	/** Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. */
	export interface TtmlDestinationSettings {
		StylePassthrough?: AdvancedInputFilter;
	}

	/** Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. */
	export interface TtmlDestinationSettingsFormProperties {
		StylePassthrough: FormControl<AdvancedInputFilter | null | undefined>,
	}
	export function CreateTtmlDestinationSettingsFormGroup() {
		return new FormGroup<TtmlDestinationSettingsFormProperties>({
			StylePassthrough: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
		});

	}


	/** Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. */
	export interface WebvttDestinationSettings {
		Accessibility?: CmafClientCache;
		StylePassthrough?: WebvttStylePassthrough;
	}

	/** Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. */
	export interface WebvttDestinationSettingsFormProperties {
		Accessibility: FormControl<CmafClientCache | null | undefined>,
		StylePassthrough: FormControl<WebvttStylePassthrough | null | undefined>,
	}
	export function CreateWebvttDestinationSettingsFormGroup() {
		return new FormGroup<WebvttDestinationSettingsFormProperties>({
			Accessibility: new FormControl<CmafClientCache | null | undefined>(undefined),
			StylePassthrough: new FormControl<WebvttStylePassthrough | null | undefined>(undefined),
		});

	}


	/** To use the available style, color, and position information from your input captions: Set Style passthrough to Enabled. MediaConvert uses default settings when style and position information is missing from your input captions. To recreate the input captions exactly: Set Style passthrough to Strict. MediaConvert automatically applies timing adjustments, including adjustments for frame rate conversion, ad avails, and input clipping. Your input captions format must be WebVTT. To ignore the style and position information from your input captions and use simplified output captions: Set Style passthrough to Disabled, or leave blank. */
	export enum WebvttStylePassthrough { ENABLED = 0, DISABLED = 1, STRICT = 2 }


	/** Container specific settings. */
	export interface ContainerSettings {
		CmfcSettings?: CmfcSettings;
		Container?: ContainerType;
		F4vSettings?: F4vSettings;
		M2tsSettings?: M2tsSettings;
		M3u8Settings?: M3u8Settings;
		MovSettings?: MovSettings;
		Mp4Settings?: Mp4Settings;
		MpdSettings?: MpdSettings;
		MxfSettings?: MxfSettings;
	}

	/** Container specific settings. */
	export interface ContainerSettingsFormProperties {
		Container: FormControl<ContainerType | null | undefined>,
	}
	export function CreateContainerSettingsFormGroup() {
		return new FormGroup<ContainerSettingsFormProperties>({
			Container: new FormControl<ContainerType | null | undefined>(undefined),
		});

	}


	/** These settings relate to the fragmented MP4 container for the segments in your CMAF outputs. */
	export interface CmfcSettings {
		AudioDuration?: CmfcAudioDuration;
		AudioGroupId?: string;
		AudioRenditionSets?: string;
		AudioTrackType?: CmfcAudioTrackType;
		DescriptiveVideoServiceFlag?: CmfcDescriptiveVideoServiceFlag;
		IFrameOnlyManifest?: CmafInitializationVectorInManifest;
		KlvMetadata?: CmfcKlvMetadata;
		ManifestMetadataSignaling?: AdvancedInputFilter;
		Scte35Esam?: CmfcScte35Esam;
		Scte35Source?: CmfcKlvMetadata;
		TimedMetadata?: CmfcKlvMetadata;
		TimedMetadataBoxVersion?: CmfcTimedMetadataBoxVersion;
		TimedMetadataSchemeIdUri?: string;
		TimedMetadataValue?: string;
	}

	/** These settings relate to the fragmented MP4 container for the segments in your CMAF outputs. */
	export interface CmfcSettingsFormProperties {
		AudioDuration: FormControl<CmfcAudioDuration | null | undefined>,
		AudioGroupId: FormControl<string | null | undefined>,
		AudioRenditionSets: FormControl<string | null | undefined>,
		AudioTrackType: FormControl<CmfcAudioTrackType | null | undefined>,
		DescriptiveVideoServiceFlag: FormControl<CmfcDescriptiveVideoServiceFlag | null | undefined>,
		IFrameOnlyManifest: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		KlvMetadata: FormControl<CmfcKlvMetadata | null | undefined>,
		ManifestMetadataSignaling: FormControl<AdvancedInputFilter | null | undefined>,
		Scte35Esam: FormControl<CmfcScte35Esam | null | undefined>,
		Scte35Source: FormControl<CmfcKlvMetadata | null | undefined>,
		TimedMetadata: FormControl<CmfcKlvMetadata | null | undefined>,
		TimedMetadataBoxVersion: FormControl<CmfcTimedMetadataBoxVersion | null | undefined>,
		TimedMetadataSchemeIdUri: FormControl<string | null | undefined>,
		TimedMetadataValue: FormControl<string | null | undefined>,
	}
	export function CreateCmfcSettingsFormGroup() {
		return new FormGroup<CmfcSettingsFormProperties>({
			AudioDuration: new FormControl<CmfcAudioDuration | null | undefined>(undefined),
			AudioGroupId: new FormControl<string | null | undefined>(undefined),
			AudioRenditionSets: new FormControl<string | null | undefined>(undefined),
			AudioTrackType: new FormControl<CmfcAudioTrackType | null | undefined>(undefined),
			DescriptiveVideoServiceFlag: new FormControl<CmfcDescriptiveVideoServiceFlag | null | undefined>(undefined),
			IFrameOnlyManifest: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			KlvMetadata: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			ManifestMetadataSignaling: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			Scte35Esam: new FormControl<CmfcScte35Esam | null | undefined>(undefined),
			Scte35Source: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			TimedMetadata: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			TimedMetadataBoxVersion: new FormControl<CmfcTimedMetadataBoxVersion | null | undefined>(undefined),
			TimedMetadataSchemeIdUri: new FormControl<string | null | undefined>(undefined),
			TimedMetadataValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec. */
	export enum CmfcAudioDuration { DEFAULT_CODEC_DURATION = 0, MATCH_VIDEO_DURATION = 1 }


	/** Use this setting to control the values that MediaConvert puts in your HLS parent playlist to control how the client player selects which audio track to play. The other options for this setting determine the values that MediaConvert writes for the DEFAULT and AUTOSELECT attributes of the EXT-X-MEDIA entry for the audio variant. For more information about these attributes, see the Apple documentation article https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/adding_alternate_media_to_a_playlist. Choose Alternate audio, auto select, default to set DEFAULT=YES and AUTOSELECT=YES. Choose this value for only one variant in your output group. Choose Alternate audio, auto select, not default to set DEFAULT=NO and AUTOSELECT=YES. Choose Alternate Audio, Not Auto Select to set DEFAULT=NO and AUTOSELECT=NO. When you don't specify a value for this setting, MediaConvert defaults to Alternate audio, auto select, default. When there is more than one variant in your output group, you must explicitly choose a value for this setting. */
	export enum CmfcAudioTrackType { ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 0, ALTERNATE_AUDIO_AUTO_SELECT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2 }


	/** Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag, MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don't flag, MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation. */
	export enum CmfcDescriptiveVideoServiceFlag { DONT_FLAG = 0, FLAG = 1 }


	/** To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank. */
	export enum CmfcKlvMetadata { PASSTHROUGH = 0, NONE = 1 }


	/** Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML. */
	export enum CmfcScte35Esam { INSERT = 0, NONE = 1 }


	/**
	 * Specify the event message box (eMSG) version for ID3 timed metadata in your output.
	 * For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.
	 * Leave blank to use the default value Version 0.
	 * When you specify Version 1, you must also set ID3 metadata to Passthrough.
	 */
	export enum CmfcTimedMetadataBoxVersion { VERSION_0 = 0, VERSION_1 = 1 }


	/** Container for this output. Some containers require a container settings object. If not specified, the default object will be created. */
	export enum ContainerType { F4V = 0, ISMV = 1, M2TS = 2, M3U8 = 3, CMFC = 4, MOV = 5, MP4 = 6, MPD = 7, MXF = 8, WEBM = 9, RAW = 10 }


	/** Settings for F4v container */
	export interface F4vSettings {
		MoovPlacement?: F4vMoovPlacement;
	}

	/** Settings for F4v container */
	export interface F4vSettingsFormProperties {
		MoovPlacement: FormControl<F4vMoovPlacement | null | undefined>,
	}
	export function CreateF4vSettingsFormGroup() {
		return new FormGroup<F4vSettingsFormProperties>({
			MoovPlacement: new FormControl<F4vMoovPlacement | null | undefined>(undefined),
		});

	}


	/** If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end. */
	export enum F4vMoovPlacement { PROGRESSIVE_DOWNLOAD = 0, NORMAL = 1 }


	/** MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset. */
	export interface M2tsSettings {
		AudioBufferModel?: M2tsAudioBufferModel;
		AudioDuration?: CmfcAudioDuration;
		AudioFramesPerPes?: number | null;
		AudioPids?: Array<number> | null;
		Bitrate?: number | null;
		BufferModel?: M2tsBufferModel;
		DataPTSControl?: M2tsDataPtsControl;
		DvbNitSettings?: DvbNitSettings;
		DvbSdtSettings?: DvbSdtSettings;
		DvbSubPids?: Array<number> | null;
		DvbTdtSettings?: DvbTdtSettings;
		DvbTeletextPid?: number | null;
		EbpAudioInterval?: M2tsEbpAudioInterval;
		EbpPlacement?: M2tsEbpPlacement;
		EsRateInPes?: CmafInitializationVectorInManifest;
		ForceTsVideoEbpOrder?: M2tsForceTsVideoEbpOrder;
		FragmentTime?: number | null;
		KlvMetadata?: CmfcKlvMetadata;
		MaxPcrInterval?: number | null;
		MinEbpInterval?: number | null;
		NielsenId3?: CmfcScte35Esam;
		NullPacketBitrate?: number | null;
		PatInterval?: number | null;
		PcrControl?: M2tsPcrControl;
		PcrPid?: number | null;
		PmtInterval?: number | null;
		PmtPid?: number | null;
		PrivateMetadataPid?: number | null;
		ProgramNumber?: number | null;
		RateMode?: M2tsRateMode;
		Scte35Esam?: M2tsScte35Esam;
		Scte35Pid?: number | null;
		Scte35Source?: CmfcKlvMetadata;
		SegmentationMarkers?: M2tsSegmentationMarkers;
		SegmentationStyle?: M2tsSegmentationStyle;
		SegmentationTime?: number | null;
		TimedMetadataPid?: number | null;
		TransportStreamId?: number | null;
		VideoPid?: number | null;
	}

	/** MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset. */
	export interface M2tsSettingsFormProperties {
		AudioBufferModel: FormControl<M2tsAudioBufferModel | null | undefined>,
		AudioDuration: FormControl<CmfcAudioDuration | null | undefined>,
		AudioFramesPerPes: FormControl<number | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		BufferModel: FormControl<M2tsBufferModel | null | undefined>,
		DataPTSControl: FormControl<M2tsDataPtsControl | null | undefined>,
		DvbTeletextPid: FormControl<number | null | undefined>,
		EbpAudioInterval: FormControl<M2tsEbpAudioInterval | null | undefined>,
		EbpPlacement: FormControl<M2tsEbpPlacement | null | undefined>,
		EsRateInPes: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		ForceTsVideoEbpOrder: FormControl<M2tsForceTsVideoEbpOrder | null | undefined>,
		FragmentTime: FormControl<number | null | undefined>,
		KlvMetadata: FormControl<CmfcKlvMetadata | null | undefined>,
		MaxPcrInterval: FormControl<number | null | undefined>,
		MinEbpInterval: FormControl<number | null | undefined>,
		NielsenId3: FormControl<CmfcScte35Esam | null | undefined>,
		NullPacketBitrate: FormControl<number | null | undefined>,
		PatInterval: FormControl<number | null | undefined>,
		PcrControl: FormControl<M2tsPcrControl | null | undefined>,
		PcrPid: FormControl<number | null | undefined>,
		PmtInterval: FormControl<number | null | undefined>,
		PmtPid: FormControl<number | null | undefined>,
		PrivateMetadataPid: FormControl<number | null | undefined>,
		ProgramNumber: FormControl<number | null | undefined>,
		RateMode: FormControl<M2tsRateMode | null | undefined>,
		Scte35Pid: FormControl<number | null | undefined>,
		Scte35Source: FormControl<CmfcKlvMetadata | null | undefined>,
		SegmentationMarkers: FormControl<M2tsSegmentationMarkers | null | undefined>,
		SegmentationStyle: FormControl<M2tsSegmentationStyle | null | undefined>,
		SegmentationTime: FormControl<number | null | undefined>,
		TimedMetadataPid: FormControl<number | null | undefined>,
		TransportStreamId: FormControl<number | null | undefined>,
		VideoPid: FormControl<number | null | undefined>,
	}
	export function CreateM2tsSettingsFormGroup() {
		return new FormGroup<M2tsSettingsFormProperties>({
			AudioBufferModel: new FormControl<M2tsAudioBufferModel | null | undefined>(undefined),
			AudioDuration: new FormControl<CmfcAudioDuration | null | undefined>(undefined),
			AudioFramesPerPes: new FormControl<number | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			BufferModel: new FormControl<M2tsBufferModel | null | undefined>(undefined),
			DataPTSControl: new FormControl<M2tsDataPtsControl | null | undefined>(undefined),
			DvbTeletextPid: new FormControl<number | null | undefined>(undefined),
			EbpAudioInterval: new FormControl<M2tsEbpAudioInterval | null | undefined>(undefined),
			EbpPlacement: new FormControl<M2tsEbpPlacement | null | undefined>(undefined),
			EsRateInPes: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			ForceTsVideoEbpOrder: new FormControl<M2tsForceTsVideoEbpOrder | null | undefined>(undefined),
			FragmentTime: new FormControl<number | null | undefined>(undefined),
			KlvMetadata: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			MaxPcrInterval: new FormControl<number | null | undefined>(undefined),
			MinEbpInterval: new FormControl<number | null | undefined>(undefined),
			NielsenId3: new FormControl<CmfcScte35Esam | null | undefined>(undefined),
			NullPacketBitrate: new FormControl<number | null | undefined>(undefined),
			PatInterval: new FormControl<number | null | undefined>(undefined),
			PcrControl: new FormControl<M2tsPcrControl | null | undefined>(undefined),
			PcrPid: new FormControl<number | null | undefined>(undefined),
			PmtInterval: new FormControl<number | null | undefined>(undefined),
			PmtPid: new FormControl<number | null | undefined>(undefined),
			PrivateMetadataPid: new FormControl<number | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined),
			RateMode: new FormControl<M2tsRateMode | null | undefined>(undefined),
			Scte35Pid: new FormControl<number | null | undefined>(undefined),
			Scte35Source: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			SegmentationMarkers: new FormControl<M2tsSegmentationMarkers | null | undefined>(undefined),
			SegmentationStyle: new FormControl<M2tsSegmentationStyle | null | undefined>(undefined),
			SegmentationTime: new FormControl<number | null | undefined>(undefined),
			TimedMetadataPid: new FormControl<number | null | undefined>(undefined),
			TransportStreamId: new FormControl<number | null | undefined>(undefined),
			VideoPid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Selects between the DVB and ATSC buffer models for Dolby Digital audio. */
	export enum M2tsAudioBufferModel { DVB = 0, ATSC = 1 }


	/** Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions. */
	export enum M2tsBufferModel { MULTIPLEX = 0, NONE = 1 }


	/** If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value to allow all PTS values. */
	export enum M2tsDataPtsControl { AUTO = 0, ALIGN_TO_VIDEO = 1 }


	/** Use these settings to insert a DVB Network Information Table (NIT) in the transport stream of this output. */
	export interface DvbNitSettings {
		NetworkId?: number | null;
		NetworkName?: string;
		NitInterval?: number | null;
	}

	/** Use these settings to insert a DVB Network Information Table (NIT) in the transport stream of this output. */
	export interface DvbNitSettingsFormProperties {
		NetworkId: FormControl<number | null | undefined>,
		NetworkName: FormControl<string | null | undefined>,
		NitInterval: FormControl<number | null | undefined>,
	}
	export function CreateDvbNitSettingsFormGroup() {
		return new FormGroup<DvbNitSettingsFormProperties>({
			NetworkId: new FormControl<number | null | undefined>(undefined),
			NetworkName: new FormControl<string | null | undefined>(undefined),
			NitInterval: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use these settings to insert a DVB Service Description Table (SDT) in the transport stream of this output. */
	export interface DvbSdtSettings {
		OutputSdt?: OutputSdt;
		SdtInterval?: number | null;
		ServiceName?: string;
		ServiceProviderName?: string;
	}

	/** Use these settings to insert a DVB Service Description Table (SDT) in the transport stream of this output. */
	export interface DvbSdtSettingsFormProperties {
		OutputSdt: FormControl<OutputSdt | null | undefined>,
		SdtInterval: FormControl<number | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		ServiceProviderName: FormControl<string | null | undefined>,
	}
	export function CreateDvbSdtSettingsFormGroup() {
		return new FormGroup<DvbSdtSettingsFormProperties>({
			OutputSdt: new FormControl<OutputSdt | null | undefined>(undefined),
			SdtInterval: new FormControl<number | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Selects method of inserting SDT information into output stream. "Follow input SDT" copies SDT information from input stream to output stream. "Follow input SDT if present" copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT Manually" means user will enter the SDT information. "No SDT" means output stream will not contain SDT information. */
	export enum OutputSdt { SDT_FOLLOW = 0, SDT_FOLLOW_IF_PRESENT = 1, SDT_MANUAL = 2, SDT_NONE = 3 }


	/** Use these settings to insert a DVB Time and Date Table (TDT) in the transport stream of this output. */
	export interface DvbTdtSettings {
		TdtInterval?: number | null;
	}

	/** Use these settings to insert a DVB Time and Date Table (TDT) in the transport stream of this output. */
	export interface DvbTdtSettingsFormProperties {
		TdtInterval: FormControl<number | null | undefined>,
	}
	export function CreateDvbTdtSettingsFormGroup() {
		return new FormGroup<DvbTdtSettingsFormProperties>({
			TdtInterval: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY). */
	export enum M2tsEbpAudioInterval { VIDEO_AND_FIXED_INTERVALS = 0, VIDEO_INTERVAL = 1 }


	/** Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY). */
	export enum M2tsEbpPlacement { VIDEO_AND_AUDIO_PIDS = 0, VIDEO_PID = 1 }


	/** Keep the default value unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force. */
	export enum M2tsForceTsVideoEbpOrder { FORCE = 0, DEFAULT = 1 }


	/** When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream. */
	export enum M2tsPcrControl { PCR_EVERY_PES_PACKET = 0, CONFIGURED_PCR_PERIOD = 1 }


	/** When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate. */
	export enum M2tsRateMode { VBR = 0, CBR = 1 }


	/** Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML. */
	export interface M2tsScte35Esam {
		Scte35EsamPid?: number | null;
	}

	/** Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML. */
	export interface M2tsScte35EsamFormProperties {
		Scte35EsamPid: FormControl<number | null | undefined>,
	}
	export function CreateM2tsScte35EsamFormGroup() {
		return new FormGroup<M2tsScte35EsamFormProperties>({
			Scte35EsamPid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format. */
	export enum M2tsSegmentationMarkers { NONE = 0, RAI_SEGSTART = 1, RAI_ADAPT = 2, PSI_SEGSTART = 3, EBP = 4, EBP_LEGACY = 5 }


	/** The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule. */
	export enum M2tsSegmentationStyle { MAINTAIN_CADENCE = 0, RESET_CADENCE = 1 }


	/** These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs. */
	export interface M3u8Settings {
		AudioDuration?: CmfcAudioDuration;
		AudioFramesPerPes?: number | null;
		AudioPids?: Array<number> | null;
		DataPTSControl?: M2tsDataPtsControl;
		MaxPcrInterval?: number | null;
		NielsenId3?: CmfcScte35Esam;
		PatInterval?: number | null;
		PcrControl?: M2tsPcrControl;
		PcrPid?: number | null;
		PmtInterval?: number | null;
		PmtPid?: number | null;
		PrivateMetadataPid?: number | null;
		ProgramNumber?: number | null;
		Scte35Pid?: number | null;
		Scte35Source?: CmfcKlvMetadata;
		TimedMetadata?: CmfcKlvMetadata;
		TimedMetadataPid?: number | null;
		TransportStreamId?: number | null;
		VideoPid?: number | null;
	}

	/** These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs. */
	export interface M3u8SettingsFormProperties {
		AudioDuration: FormControl<CmfcAudioDuration | null | undefined>,
		AudioFramesPerPes: FormControl<number | null | undefined>,
		DataPTSControl: FormControl<M2tsDataPtsControl | null | undefined>,
		MaxPcrInterval: FormControl<number | null | undefined>,
		NielsenId3: FormControl<CmfcScte35Esam | null | undefined>,
		PatInterval: FormControl<number | null | undefined>,
		PcrControl: FormControl<M2tsPcrControl | null | undefined>,
		PcrPid: FormControl<number | null | undefined>,
		PmtInterval: FormControl<number | null | undefined>,
		PmtPid: FormControl<number | null | undefined>,
		PrivateMetadataPid: FormControl<number | null | undefined>,
		ProgramNumber: FormControl<number | null | undefined>,
		Scte35Pid: FormControl<number | null | undefined>,
		Scte35Source: FormControl<CmfcKlvMetadata | null | undefined>,
		TimedMetadata: FormControl<CmfcKlvMetadata | null | undefined>,
		TimedMetadataPid: FormControl<number | null | undefined>,
		TransportStreamId: FormControl<number | null | undefined>,
		VideoPid: FormControl<number | null | undefined>,
	}
	export function CreateM3u8SettingsFormGroup() {
		return new FormGroup<M3u8SettingsFormProperties>({
			AudioDuration: new FormControl<CmfcAudioDuration | null | undefined>(undefined),
			AudioFramesPerPes: new FormControl<number | null | undefined>(undefined),
			DataPTSControl: new FormControl<M2tsDataPtsControl | null | undefined>(undefined),
			MaxPcrInterval: new FormControl<number | null | undefined>(undefined),
			NielsenId3: new FormControl<CmfcScte35Esam | null | undefined>(undefined),
			PatInterval: new FormControl<number | null | undefined>(undefined),
			PcrControl: new FormControl<M2tsPcrControl | null | undefined>(undefined),
			PcrPid: new FormControl<number | null | undefined>(undefined),
			PmtInterval: new FormControl<number | null | undefined>(undefined),
			PmtPid: new FormControl<number | null | undefined>(undefined),
			PrivateMetadataPid: new FormControl<number | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined),
			Scte35Pid: new FormControl<number | null | undefined>(undefined),
			Scte35Source: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			TimedMetadata: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			TimedMetadataPid: new FormControl<number | null | undefined>(undefined),
			TransportStreamId: new FormControl<number | null | undefined>(undefined),
			VideoPid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** These settings relate to your QuickTime MOV output container. */
	export interface MovSettings {
		ClapAtom?: CmafInitializationVectorInManifest;
		CslgAtom?: CmafInitializationVectorInManifest;
		Mpeg2FourCCControl?: MovMpeg2FourCCControl;
		PaddingControl?: MovPaddingControl;
		Reference?: MovReference;
	}

	/** These settings relate to your QuickTime MOV output container. */
	export interface MovSettingsFormProperties {
		ClapAtom: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		CslgAtom: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		Mpeg2FourCCControl: FormControl<MovMpeg2FourCCControl | null | undefined>,
		PaddingControl: FormControl<MovPaddingControl | null | undefined>,
		Reference: FormControl<MovReference | null | undefined>,
	}
	export function CreateMovSettingsFormGroup() {
		return new FormGroup<MovSettingsFormProperties>({
			ClapAtom: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			CslgAtom: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			Mpeg2FourCCControl: new FormControl<MovMpeg2FourCCControl | null | undefined>(undefined),
			PaddingControl: new FormControl<MovPaddingControl | null | undefined>(undefined),
			Reference: new FormControl<MovReference | null | undefined>(undefined),
		});

	}


	/** When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2. */
	export enum MovMpeg2FourCCControl { XDCAM = 0, MPEG = 1 }


	/** Unless you need Omneon compatibility: Keep the default value, None. To make this output compatible with Omneon: Choose Omneon. When you do, MediaConvert increases the length of the 'elst' edit list atom. Note that this might cause file rejections when a recipient of the output file doesn't expect this extra padding. */
	export enum MovPaddingControl { OMNEON = 0, NONE = 1 }


	/** Always keep the default value (SELF_CONTAINED) for this setting. */
	export enum MovReference { SELF_CONTAINED = 0, EXTERNAL = 1 }


	/** These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only. */
	export interface Mp4Settings {
		AudioDuration?: CmfcAudioDuration;
		CslgAtom?: CmafInitializationVectorInManifest;
		CttsVersion?: number | null;
		FreeSpaceBox?: CmafInitializationVectorInManifest;
		MoovPlacement?: F4vMoovPlacement;
		Mp4MajorBrand?: string;
	}

	/** These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only. */
	export interface Mp4SettingsFormProperties {
		AudioDuration: FormControl<CmfcAudioDuration | null | undefined>,
		CslgAtom: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		CttsVersion: FormControl<number | null | undefined>,
		FreeSpaceBox: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		MoovPlacement: FormControl<F4vMoovPlacement | null | undefined>,
		Mp4MajorBrand: FormControl<string | null | undefined>,
	}
	export function CreateMp4SettingsFormGroup() {
		return new FormGroup<Mp4SettingsFormProperties>({
			AudioDuration: new FormControl<CmfcAudioDuration | null | undefined>(undefined),
			CslgAtom: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			CttsVersion: new FormControl<number | null | undefined>(undefined),
			FreeSpaceBox: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			MoovPlacement: new FormControl<F4vMoovPlacement | null | undefined>(undefined),
			Mp4MajorBrand: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** These settings relate to the fragmented MP4 container for the segments in your DASH outputs. */
	export interface MpdSettings {
		AccessibilityCaptionHints?: CmafInitializationVectorInManifest;
		AudioDuration?: CmfcAudioDuration;
		CaptionContainerType?: MpdCaptionContainerType;
		KlvMetadata?: MpdKlvMetadata;
		ManifestMetadataSignaling?: AdvancedInputFilter;
		Scte35Esam?: CmfcScte35Esam;
		Scte35Source?: CmfcKlvMetadata;
		TimedMetadata?: CmfcKlvMetadata;
		TimedMetadataBoxVersion?: CmfcTimedMetadataBoxVersion;
		TimedMetadataSchemeIdUri?: string;
		TimedMetadataValue?: string;
	}

	/** These settings relate to the fragmented MP4 container for the segments in your DASH outputs. */
	export interface MpdSettingsFormProperties {
		AccessibilityCaptionHints: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		AudioDuration: FormControl<CmfcAudioDuration | null | undefined>,
		CaptionContainerType: FormControl<MpdCaptionContainerType | null | undefined>,
		KlvMetadata: FormControl<MpdKlvMetadata | null | undefined>,
		ManifestMetadataSignaling: FormControl<AdvancedInputFilter | null | undefined>,
		Scte35Esam: FormControl<CmfcScte35Esam | null | undefined>,
		Scte35Source: FormControl<CmfcKlvMetadata | null | undefined>,
		TimedMetadata: FormControl<CmfcKlvMetadata | null | undefined>,
		TimedMetadataBoxVersion: FormControl<CmfcTimedMetadataBoxVersion | null | undefined>,
		TimedMetadataSchemeIdUri: FormControl<string | null | undefined>,
		TimedMetadataValue: FormControl<string | null | undefined>,
	}
	export function CreateMpdSettingsFormGroup() {
		return new FormGroup<MpdSettingsFormProperties>({
			AccessibilityCaptionHints: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			AudioDuration: new FormControl<CmfcAudioDuration | null | undefined>(undefined),
			CaptionContainerType: new FormControl<MpdCaptionContainerType | null | undefined>(undefined),
			KlvMetadata: new FormControl<MpdKlvMetadata | null | undefined>(undefined),
			ManifestMetadataSignaling: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			Scte35Esam: new FormControl<CmfcScte35Esam | null | undefined>(undefined),
			Scte35Source: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			TimedMetadata: new FormControl<CmfcKlvMetadata | null | undefined>(undefined),
			TimedMetadataBoxVersion: new FormControl<CmfcTimedMetadataBoxVersion | null | undefined>(undefined),
			TimedMetadataSchemeIdUri: new FormControl<string | null | undefined>(undefined),
			TimedMetadataValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use this setting only in DASH output groups that include sidecar TTML or IMSC captions. You specify sidecar captions in a separate output from your audio and video. Choose Raw for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files. */
	export enum MpdCaptionContainerType { RAW = 0, FRAGMENTED_MP4 = 1 }


	/** To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank. */
	export enum MpdKlvMetadata { NONE = 0, PASSTHROUGH = 1 }


	/** These settings relate to your MXF output container. */
	export interface MxfSettings {
		AfdSignaling?: MxfAfdSignaling;
		Profile?: MxfProfile;
		XavcProfileSettings?: MxfXavcProfileSettings;
	}

	/** These settings relate to your MXF output container. */
	export interface MxfSettingsFormProperties {
		AfdSignaling: FormControl<MxfAfdSignaling | null | undefined>,
		Profile: FormControl<MxfProfile | null | undefined>,
	}
	export function CreateMxfSettingsFormGroup() {
		return new FormGroup<MxfSettingsFormProperties>({
			AfdSignaling: new FormControl<MxfAfdSignaling | null | undefined>(undefined),
			Profile: new FormControl<MxfProfile | null | undefined>(undefined),
		});

	}


	/** Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings. */
	export enum MxfAfdSignaling { NO_COPY = 0, COPY_FROM_VIDEO = 1 }


	/** Specify the MXF profile, also called shim, for this output. To automatically select a profile according to your output video codec and resolution, leave blank. For a list of codecs supported with each MXF profile, see https://docs.aws.amazon.com/mediaconvert/latest/ug/codecs-supported-with-each-mxf-profile.html. For more information about the automatic selection behavior, see https://docs.aws.amazon.com/mediaconvert/latest/ug/default-automatic-selection-of-mxf-profiles.html. */
	export enum MxfProfile { D_10 = 0, XDCAM = 1, OP1A = 2, XAVC = 3, XDCAM_RDD9 = 4 }


	/** Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC. */
	export interface MxfXavcProfileSettings {
		DurationMode?: MxfXavcDurationMode;
		MaxAncDataSize?: number | null;
	}

	/** Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC. */
	export interface MxfXavcProfileSettingsFormProperties {
		DurationMode: FormControl<MxfXavcDurationMode | null | undefined>,
		MaxAncDataSize: FormControl<number | null | undefined>,
	}
	export function CreateMxfXavcProfileSettingsFormGroup() {
		return new FormGroup<MxfXavcProfileSettingsFormProperties>({
			DurationMode: new FormControl<MxfXavcDurationMode | null | undefined>(undefined),
			MaxAncDataSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** To create an output that complies with the XAVC file format guidelines for interoperability, keep the default value, Drop frames for compliance. To include all frames from your input in this output, keep the default setting, Allow any duration. The number of frames that MediaConvert excludes when you set this to Drop frames for compliance depends on the output frame rate and duration. */
	export enum MxfXavcDurationMode { ALLOW_ANY_DURATION = 0, DROP_FRAMES_FOR_COMPLIANCE = 1 }


	/** Specific settings for this type of output. */
	export interface OutputSettings {
		HlsSettings?: HlsSettings;
	}

	/** Specific settings for this type of output. */
	export interface OutputSettingsFormProperties {
	}
	export function CreateOutputSettingsFormGroup() {
		return new FormGroup<OutputSettingsFormProperties>({
		});

	}


	/** Settings for HLS output groups */
	export interface HlsSettings {
		AudioGroupId?: string;
		AudioOnlyContainer?: HlsAudioOnlyContainer;
		AudioRenditionSets?: string;
		AudioTrackType?: HlsAudioTrackType;
		DescriptiveVideoServiceFlag?: CmfcDescriptiveVideoServiceFlag;
		IFrameOnlyManifest?: CmafInitializationVectorInManifest;
		SegmentModifier?: string;
	}

	/** Settings for HLS output groups */
	export interface HlsSettingsFormProperties {
		AudioGroupId: FormControl<string | null | undefined>,
		AudioOnlyContainer: FormControl<HlsAudioOnlyContainer | null | undefined>,
		AudioRenditionSets: FormControl<string | null | undefined>,
		AudioTrackType: FormControl<HlsAudioTrackType | null | undefined>,
		DescriptiveVideoServiceFlag: FormControl<CmfcDescriptiveVideoServiceFlag | null | undefined>,
		IFrameOnlyManifest: FormControl<CmafInitializationVectorInManifest | null | undefined>,
		SegmentModifier: FormControl<string | null | undefined>,
	}
	export function CreateHlsSettingsFormGroup() {
		return new FormGroup<HlsSettingsFormProperties>({
			AudioGroupId: new FormControl<string | null | undefined>(undefined),
			AudioOnlyContainer: new FormControl<HlsAudioOnlyContainer | null | undefined>(undefined),
			AudioRenditionSets: new FormControl<string | null | undefined>(undefined),
			AudioTrackType: new FormControl<HlsAudioTrackType | null | undefined>(undefined),
			DescriptiveVideoServiceFlag: new FormControl<CmfcDescriptiveVideoServiceFlag | null | undefined>(undefined),
			IFrameOnlyManifest: new FormControl<CmafInitializationVectorInManifest | null | undefined>(undefined),
			SegmentModifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic to create a raw audio-only file with no container. Regardless of the value that you specify here, if this output has video, the service will place outputs into an MPEG2-TS container. */
	export enum HlsAudioOnlyContainer { AUTOMATIC = 0, M2TS = 1 }


	/** Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO */
	export enum HlsAudioTrackType { ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = 0, ALTERNATE_AUDIO_AUTO_SELECT = 1, ALTERNATE_AUDIO_NOT_AUTO_SELECT = 2, AUDIO_ONLY_VARIANT_STREAM = 3 }


	/** Settings related to video encoding of your output. The specific video settings depend on the video codec that you choose. */
	export interface VideoDescription {
		AfdSignaling?: AfdSignaling;
		AntiAlias?: CmafClientCache;
		CodecSettings?: VideoCodecSettings;
		ColorMetadata?: ColorMetadata;
		Crop?: Rectangle;
		DropFrameTimecode?: CmafClientCache;
		FixedAfd?: number | null;
		Height?: number | null;
		Position?: Rectangle;
		RespondToAfd?: RespondToAfd;
		ScalingBehavior?: ScalingBehavior;
		Sharpness?: number | null;
		TimecodeInsertion?: VideoTimecodeInsertion;
		VideoPreprocessors?: VideoPreprocessor;
		Width?: number | null;
	}

	/** Settings related to video encoding of your output. The specific video settings depend on the video codec that you choose. */
	export interface VideoDescriptionFormProperties {
		AfdSignaling: FormControl<AfdSignaling | null | undefined>,
		AntiAlias: FormControl<CmafClientCache | null | undefined>,
		ColorMetadata: FormControl<ColorMetadata | null | undefined>,
		DropFrameTimecode: FormControl<CmafClientCache | null | undefined>,
		FixedAfd: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		RespondToAfd: FormControl<RespondToAfd | null | undefined>,
		ScalingBehavior: FormControl<ScalingBehavior | null | undefined>,
		Sharpness: FormControl<number | null | undefined>,
		TimecodeInsertion: FormControl<VideoTimecodeInsertion | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateVideoDescriptionFormGroup() {
		return new FormGroup<VideoDescriptionFormProperties>({
			AfdSignaling: new FormControl<AfdSignaling | null | undefined>(undefined),
			AntiAlias: new FormControl<CmafClientCache | null | undefined>(undefined),
			ColorMetadata: new FormControl<ColorMetadata | null | undefined>(undefined),
			DropFrameTimecode: new FormControl<CmafClientCache | null | undefined>(undefined),
			FixedAfd: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			RespondToAfd: new FormControl<RespondToAfd | null | undefined>(undefined),
			ScalingBehavior: new FormControl<ScalingBehavior | null | undefined>(undefined),
			Sharpness: new FormControl<number | null | undefined>(undefined),
			TimecodeInsertion: new FormControl<VideoTimecodeInsertion | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data. */
	export enum AfdSignaling { NONE = 0, AUTO = 1, FIXED = 2 }


	/** Video codec settings contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec. For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings */
	export interface VideoCodecSettings {
		Av1Settings?: Av1Settings;
		AvcIntraSettings?: AvcIntraSettings;
		Codec?: VideoCodec;
		FrameCaptureSettings?: FrameCaptureSettings;
		H264Settings?: H264Settings;
		H265Settings?: H265Settings;
		Mpeg2Settings?: Mpeg2Settings;
		ProresSettings?: ProresSettings;
		Vc3Settings?: Vc3Settings;
		Vp8Settings?: Vp8Settings;
		Vp9Settings?: Vp9Settings;
		XavcSettings?: XavcSettings;
	}

	/** Video codec settings contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec. For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings */
	export interface VideoCodecSettingsFormProperties {
		Codec: FormControl<VideoCodec | null | undefined>,
	}
	export function CreateVideoCodecSettingsFormGroup() {
		return new FormGroup<VideoCodecSettingsFormProperties>({
			Codec: new FormControl<VideoCodec | null | undefined>(undefined),
		});

	}


	/** Required when you set Codec, under VideoDescription>CodecSettings to the value AV1. */
	export interface Av1Settings {
		AdaptiveQuantization?: Av1AdaptiveQuantization;
		BitDepth?: Av1BitDepth;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		GopSize?: number | null;
		MaxBitrate?: number | null;
		NumberBFramesBetweenReferenceFrames?: number | null;
		QvbrSettings?: Av1QvbrSettings;
		RateControlMode?: Av1RateControlMode;
		Slices?: number | null;
		SpatialAdaptiveQuantization?: CmafClientCache;
	}

	/** Required when you set Codec, under VideoDescription>CodecSettings to the value AV1. */
	export interface Av1SettingsFormProperties {
		AdaptiveQuantization: FormControl<Av1AdaptiveQuantization | null | undefined>,
		BitDepth: FormControl<Av1BitDepth | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		NumberBFramesBetweenReferenceFrames: FormControl<number | null | undefined>,
		RateControlMode: FormControl<Av1RateControlMode | null | undefined>,
		Slices: FormControl<number | null | undefined>,
		SpatialAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
	}
	export function CreateAv1SettingsFormGroup() {
		return new FormGroup<Av1SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<Av1AdaptiveQuantization | null | undefined>(undefined),
			BitDepth: new FormControl<Av1BitDepth | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			NumberBFramesBetweenReferenceFrames: new FormControl<number | null | undefined>(undefined),
			RateControlMode: new FormControl<Av1RateControlMode | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined),
			SpatialAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
		});

	}


	/** Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to Spatial adaptive quantization. */
	export enum Av1AdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3, HIGHER = 4, MAX = 5 }


	/** Specify the Bit depth. You can choose 8-bit or 10-bit. */
	export enum Av1BitDepth { BIT_8 = 0, BIT_10 = 1 }


	/** Use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum Av1FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum Av1FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Settings for quality-defined variable bitrate encoding with the AV1 codec. Use these settings only when you set QVBR for Rate control mode. */
	export interface Av1QvbrSettings {
		QvbrQualityLevel?: number | null;
		QvbrQualityLevelFineTune?: number | null;
	}

	/** Settings for quality-defined variable bitrate encoding with the AV1 codec. Use these settings only when you set QVBR for Rate control mode. */
	export interface Av1QvbrSettingsFormProperties {
		QvbrQualityLevel: FormControl<number | null | undefined>,
		QvbrQualityLevelFineTune: FormControl<number | null | undefined>,
	}
	export function CreateAv1QvbrSettingsFormGroup() {
		return new FormGroup<Av1QvbrSettingsFormProperties>({
			QvbrQualityLevel: new FormControl<number | null | undefined>(undefined),
			QvbrQualityLevelFineTune: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** 'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.' */
	export enum Av1RateControlMode { QVBR = 0 }


	/** Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf. */
	export interface AvcIntraSettings {
		AvcIntraClass?: AvcIntraClass;
		AvcIntraUhdSettings?: AvcIntraUhdSettings;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		InterlaceMode?: AvcIntraInterlaceMode;
		ScanTypeConversionMode?: AvcIntraScanTypeConversionMode;
		SlowPal?: CmafClientCache;
		Telecine?: AvcIntraTelecine;
	}

	/** Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf. */
	export interface AvcIntraSettingsFormProperties {
		AvcIntraClass: FormControl<AvcIntraClass | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		InterlaceMode: FormControl<AvcIntraInterlaceMode | null | undefined>,
		ScanTypeConversionMode: FormControl<AvcIntraScanTypeConversionMode | null | undefined>,
		SlowPal: FormControl<CmafClientCache | null | undefined>,
		Telecine: FormControl<AvcIntraTelecine | null | undefined>,
	}
	export function CreateAvcIntraSettingsFormGroup() {
		return new FormGroup<AvcIntraSettingsFormProperties>({
			AvcIntraClass: new FormControl<AvcIntraClass | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			InterlaceMode: new FormControl<AvcIntraInterlaceMode | null | undefined>(undefined),
			ScanTypeConversionMode: new FormControl<AvcIntraScanTypeConversionMode | null | undefined>(undefined),
			SlowPal: new FormControl<CmafClientCache | null | undefined>(undefined),
			Telecine: new FormControl<AvcIntraTelecine | null | undefined>(undefined),
		});

	}


	/** Specify the AVC-Intra class of your output. The AVC-Intra class selection determines the output video bit rate depending on the frame rate of the output. Outputs with higher class values have higher bitrates and improved image quality. Note that for Class 4K/2K, MediaConvert supports only 4:2:2 chroma subsampling. */
	export enum AvcIntraClass { CLASS_50 = 0, CLASS_100 = 1, CLASS_200 = 2, CLASS_4K_2K = 3 }


	/** Optional when you set AVC-Intra class to Class 4K/2K. When you set AVC-Intra class to a different value, this object isn't allowed. */
	export interface AvcIntraUhdSettings {
		QualityTuningLevel?: AvcIntraUhdQualityTuningLevel;
	}

	/** Optional when you set AVC-Intra class to Class 4K/2K. When you set AVC-Intra class to a different value, this object isn't allowed. */
	export interface AvcIntraUhdSettingsFormProperties {
		QualityTuningLevel: FormControl<AvcIntraUhdQualityTuningLevel | null | undefined>,
	}
	export function CreateAvcIntraUhdSettingsFormGroup() {
		return new FormGroup<AvcIntraUhdSettingsFormProperties>({
			QualityTuningLevel: new FormControl<AvcIntraUhdQualityTuningLevel | null | undefined>(undefined),
		});

	}


	/** Optional. Use Quality tuning level to choose how many transcoding passes MediaConvert does with your video. When you choose Multi-pass, your video quality is better and your output bitrate is more accurate. That is, the actual bitrate of your output is closer to the target bitrate defined in the specification. When you choose Single-pass, your encoding time is faster. The default behavior is Single-pass. */
	export enum AvcIntraUhdQualityTuningLevel { SINGLE_PASS = 0, MULTI_PASS = 1 }


	/** Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose. */
	export enum AvcIntraInterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/** Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive. */
	export enum AvcIntraScanTypeConversionMode { INTERLACED = 0, INTERLACED_OPTIMIZE = 1 }


	/** When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine to create a smoother picture. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture. */
	export enum AvcIntraTelecine { NONE = 0, HARD = 1 }


	/** Type of video codec */
	export enum VideoCodec { AV1 = 0, AVC_INTRA = 1, FRAME_CAPTURE = 2, H_264 = 3, H_265 = 4, MPEG2 = 5, PASSTHROUGH = 6, PRORES = 7, VC3 = 8, VP8 = 9, VP9 = 10, XAVC = 11 }


	/** Required when you set Codec to the value FRAME_CAPTURE. */
	export interface FrameCaptureSettings {
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		MaxCaptures?: number | null;
		Quality?: number | null;
	}

	/** Required when you set Codec to the value FRAME_CAPTURE. */
	export interface FrameCaptureSettingsFormProperties {
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		MaxCaptures: FormControl<number | null | undefined>,
		Quality: FormControl<number | null | undefined>,
	}
	export function CreateFrameCaptureSettingsFormGroup() {
		return new FormGroup<FrameCaptureSettingsFormProperties>({
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			MaxCaptures: new FormControl<number | null | undefined>(undefined),
			Quality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Required when you set Codec to the value H_264. */
	export interface H264Settings {
		AdaptiveQuantization?: H264AdaptiveQuantization;
		BandwidthReductionFilter?: BandwidthReductionFilter;
		Bitrate?: number | null;
		CodecLevel?: H264CodecLevel;
		CodecProfile?: H264CodecProfile;
		DynamicSubGop?: H264DynamicSubGop;
		EntropyEncoding?: H264EntropyEncoding;
		FieldEncoding?: H264FieldEncoding;
		FlickerAdaptiveQuantization?: CmafClientCache;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		GopBReference?: CmafClientCache;
		GopClosedCadence?: number | null;
		GopSize?: number | null;
		GopSizeUnits?: H264GopSizeUnits;
		HrdBufferFinalFillPercentage?: number | null;
		HrdBufferInitialFillPercentage?: number | null;
		HrdBufferSize?: number | null;
		InterlaceMode?: AvcIntraInterlaceMode;
		MaxBitrate?: number | null;
		MinIInterval?: number | null;
		NumberBFramesBetweenReferenceFrames?: number | null;
		NumberReferenceFrames?: number | null;
		ParControl?: Av1FramerateControl;
		ParDenominator?: number | null;
		ParNumerator?: number | null;
		QualityTuningLevel?: H264QualityTuningLevel;
		QvbrSettings?: H264QvbrSettings;
		RateControlMode?: H264RateControlMode;
		RepeatPps?: CmafClientCache;
		ScanTypeConversionMode?: AvcIntraScanTypeConversionMode;
		SceneChangeDetect?: H264SceneChangeDetect;
		Slices?: number | null;
		SlowPal?: CmafClientCache;
		Softness?: number | null;
		SpatialAdaptiveQuantization?: CmafClientCache;
		Syntax?: H264Syntax;
		Telecine?: H264Telecine;
		TemporalAdaptiveQuantization?: CmafClientCache;
		UnregisteredSeiTimecode?: CmafClientCache;
	}

	/** Required when you set Codec to the value H_264. */
	export interface H264SettingsFormProperties {
		AdaptiveQuantization: FormControl<H264AdaptiveQuantization | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		CodecLevel: FormControl<H264CodecLevel | null | undefined>,
		CodecProfile: FormControl<H264CodecProfile | null | undefined>,
		DynamicSubGop: FormControl<H264DynamicSubGop | null | undefined>,
		EntropyEncoding: FormControl<H264EntropyEncoding | null | undefined>,
		FieldEncoding: FormControl<H264FieldEncoding | null | undefined>,
		FlickerAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		GopBReference: FormControl<CmafClientCache | null | undefined>,
		GopClosedCadence: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		GopSizeUnits: FormControl<H264GopSizeUnits | null | undefined>,
		HrdBufferFinalFillPercentage: FormControl<number | null | undefined>,
		HrdBufferInitialFillPercentage: FormControl<number | null | undefined>,
		HrdBufferSize: FormControl<number | null | undefined>,
		InterlaceMode: FormControl<AvcIntraInterlaceMode | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MinIInterval: FormControl<number | null | undefined>,
		NumberBFramesBetweenReferenceFrames: FormControl<number | null | undefined>,
		NumberReferenceFrames: FormControl<number | null | undefined>,
		ParControl: FormControl<Av1FramerateControl | null | undefined>,
		ParDenominator: FormControl<number | null | undefined>,
		ParNumerator: FormControl<number | null | undefined>,
		QualityTuningLevel: FormControl<H264QualityTuningLevel | null | undefined>,
		RateControlMode: FormControl<H264RateControlMode | null | undefined>,
		RepeatPps: FormControl<CmafClientCache | null | undefined>,
		ScanTypeConversionMode: FormControl<AvcIntraScanTypeConversionMode | null | undefined>,
		SceneChangeDetect: FormControl<H264SceneChangeDetect | null | undefined>,
		Slices: FormControl<number | null | undefined>,
		SlowPal: FormControl<CmafClientCache | null | undefined>,
		Softness: FormControl<number | null | undefined>,
		SpatialAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		Syntax: FormControl<H264Syntax | null | undefined>,
		Telecine: FormControl<H264Telecine | null | undefined>,
		TemporalAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		UnregisteredSeiTimecode: FormControl<CmafClientCache | null | undefined>,
	}
	export function CreateH264SettingsFormGroup() {
		return new FormGroup<H264SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<H264AdaptiveQuantization | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodecLevel: new FormControl<H264CodecLevel | null | undefined>(undefined),
			CodecProfile: new FormControl<H264CodecProfile | null | undefined>(undefined),
			DynamicSubGop: new FormControl<H264DynamicSubGop | null | undefined>(undefined),
			EntropyEncoding: new FormControl<H264EntropyEncoding | null | undefined>(undefined),
			FieldEncoding: new FormControl<H264FieldEncoding | null | undefined>(undefined),
			FlickerAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			GopBReference: new FormControl<CmafClientCache | null | undefined>(undefined),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			GopSizeUnits: new FormControl<H264GopSizeUnits | null | undefined>(undefined),
			HrdBufferFinalFillPercentage: new FormControl<number | null | undefined>(undefined),
			HrdBufferInitialFillPercentage: new FormControl<number | null | undefined>(undefined),
			HrdBufferSize: new FormControl<number | null | undefined>(undefined),
			InterlaceMode: new FormControl<AvcIntraInterlaceMode | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MinIInterval: new FormControl<number | null | undefined>(undefined),
			NumberBFramesBetweenReferenceFrames: new FormControl<number | null | undefined>(undefined),
			NumberReferenceFrames: new FormControl<number | null | undefined>(undefined),
			ParControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			QualityTuningLevel: new FormControl<H264QualityTuningLevel | null | undefined>(undefined),
			RateControlMode: new FormControl<H264RateControlMode | null | undefined>(undefined),
			RepeatPps: new FormControl<CmafClientCache | null | undefined>(undefined),
			ScanTypeConversionMode: new FormControl<AvcIntraScanTypeConversionMode | null | undefined>(undefined),
			SceneChangeDetect: new FormControl<H264SceneChangeDetect | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined),
			SlowPal: new FormControl<CmafClientCache | null | undefined>(undefined),
			Softness: new FormControl<number | null | undefined>(undefined),
			SpatialAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			Syntax: new FormControl<H264Syntax | null | undefined>(undefined),
			Telecine: new FormControl<H264Telecine | null | undefined>(undefined),
			TemporalAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			UnregisteredSeiTimecode: new FormControl<CmafClientCache | null | undefined>(undefined),
		});

	}


	/** Keep the default value, Auto, for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set H264AdaptiveQuantization to a value other than Auto. Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization to Off. Related settings: The value that you choose here applies to the following settings: H264FlickerAdaptiveQuantization, H264SpatialAdaptiveQuantization, and H264TemporalAdaptiveQuantization. */
	export enum H264AdaptiveQuantization { OFF = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4, HIGHER = 5, MAX = 6 }


	/** The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor. */
	export interface BandwidthReductionFilter {
		Sharpening?: BandwidthReductionFilterSharpening;
		Strength?: BandwidthReductionFilterStrength;
	}

	/** The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor. */
	export interface BandwidthReductionFilterFormProperties {
		Sharpening: FormControl<BandwidthReductionFilterSharpening | null | undefined>,
		Strength: FormControl<BandwidthReductionFilterStrength | null | undefined>,
	}
	export function CreateBandwidthReductionFilterFormGroup() {
		return new FormGroup<BandwidthReductionFilterFormProperties>({
			Sharpening: new FormControl<BandwidthReductionFilterSharpening | null | undefined>(undefined),
			Strength: new FormControl<BandwidthReductionFilterStrength | null | undefined>(undefined),
		});

	}


	/** Optionally specify the level of sharpening to apply when you use the Bandwidth reduction filter. Sharpening adds contrast to the edges of your video content and can reduce softness. Keep the default value Off to apply no sharpening. Set Sharpening strength to Low to apply a minimal amount of sharpening, or High to apply a maximum amount of sharpening. */
	export enum BandwidthReductionFilterSharpening { LOW = 0, MEDIUM = 1, HIGH = 2, OFF = 3 }


	/** Specify the strength of the Bandwidth reduction filter. For most workflows, we recommend that you choose Auto to reduce the bandwidth of your output with little to no perceptual decrease in video quality. For high quality and high bitrate outputs, choose Low. For the most bandwidth reduction, choose High. We recommend that you choose High for low bitrate outputs. Note that High may incur a slight increase in the softness of your output. */
	export enum BandwidthReductionFilterStrength { LOW = 0, MEDIUM = 1, HIGH = 2, AUTO = 3, OFF = 4 }


	/** Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto. */
	export enum H264CodecLevel { AUTO = 0, LEVEL_1 = 1, LEVEL_1_1 = 2, LEVEL_1_2 = 3, LEVEL_1_3 = 4, LEVEL_2 = 5, LEVEL_2_1 = 6, LEVEL_2_2 = 7, LEVEL_3 = 8, LEVEL_3_1 = 9, LEVEL_3_2 = 10, LEVEL_4 = 11, LEVEL_4_1 = 12, LEVEL_4_2 = 13, LEVEL_5 = 14, LEVEL_5_1 = 15, LEVEL_5_2 = 16 }


	/** H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License. */
	export enum H264CodecProfile { BASELINE = 0, HIGH = 1, HIGH_10BIT = 2, HIGH_422 = 3, HIGH_422_10BIT = 4, MAIN = 5 }


	/** Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames. */
	export enum H264DynamicSubGop { ADAPTIVE = 0, STATIC = 1 }


	/** Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC. */
	export enum H264EntropyEncoding { CABAC = 0, CAVLC = 1 }


	/** The video encoding method for your MPEG-4 AVC output. Keep the default value, PAFF, to have MediaConvert use PAFF encoding for interlaced outputs. Choose Force field to disable PAFF encoding and create separate interlaced fields. Choose MBAFF to disable PAFF and have MediaConvert use MBAFF encoding for interlaced outputs. */
	export enum H264FieldEncoding { PAFF = 0, FORCE_FIELD = 1, MBAFF = 2 }


	/** Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto and and leave GOP size blank. By default, if you don't specify GOP mode control, MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames or Specified, seconds and then provide the GOP length in the related setting GOP size. */
	export enum H264GopSizeUnits { FRAMES = 0, SECONDS = 1, AUTO = 2 }


	/** The Quality tuning level you choose represents a trade-off between the encoding speed of your job and the output video quality. For the fastest encoding speed at the cost of video quality: Choose Single pass. For a good balance between encoding speed and video quality: Leave blank or keep the default value Single pass HQ. For the best video quality, at the cost of encoding speed: Choose Multi pass HQ. MediaConvert performs an analysis pass on your input followed by an encoding pass. Outputs that use this feature incur pro-tier pricing. */
	export enum H264QualityTuningLevel { SINGLE_PASS = 0, SINGLE_PASS_HQ = 1, MULTI_PASS_HQ = 2 }


	/** Settings for quality-defined variable bitrate encoding with the H.264 codec. Use these settings only when you set QVBR for Rate control mode. */
	export interface H264QvbrSettings {
		MaxAverageBitrate?: number | null;
		QvbrQualityLevel?: number | null;
		QvbrQualityLevelFineTune?: number | null;
	}

	/** Settings for quality-defined variable bitrate encoding with the H.264 codec. Use these settings only when you set QVBR for Rate control mode. */
	export interface H264QvbrSettingsFormProperties {
		MaxAverageBitrate: FormControl<number | null | undefined>,
		QvbrQualityLevel: FormControl<number | null | undefined>,
		QvbrQualityLevelFineTune: FormControl<number | null | undefined>,
	}
	export function CreateH264QvbrSettingsFormGroup() {
		return new FormGroup<H264QvbrSettingsFormProperties>({
			MaxAverageBitrate: new FormControl<number | null | undefined>(undefined),
			QvbrQualityLevel: new FormControl<number | null | undefined>(undefined),
			QvbrQualityLevelFineTune: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR). */
	export enum H264RateControlMode { VBR = 0, CBR = 1, QVBR = 2 }


	/** Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr. */
	export enum H264SceneChangeDetect { DISABLED = 0, ENABLED = 1, TRANSITION_DETECTION = 2 }


	/** Produces a bitstream compliant with SMPTE RP-2027. */
	export enum H264Syntax { DEFAULT = 0, RP2027 = 1 }


	/** When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine produces a 29.97i output. Soft telecine produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture. */
	export enum H264Telecine { NONE = 0, SOFT = 1, HARD = 2 }


	/** Settings for H265 codec */
	export interface H265Settings {
		AdaptiveQuantization?: H265AdaptiveQuantization;
		AlternateTransferFunctionSei?: CmafClientCache;
		BandwidthReductionFilter?: BandwidthReductionFilter;
		Bitrate?: number | null;
		CodecLevel?: H265CodecLevel;
		CodecProfile?: H265CodecProfile;
		DynamicSubGop?: H264DynamicSubGop;
		FlickerAdaptiveQuantization?: CmafClientCache;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		GopBReference?: CmafClientCache;
		GopClosedCadence?: number | null;
		GopSize?: number | null;
		GopSizeUnits?: H264GopSizeUnits;
		HrdBufferFinalFillPercentage?: number | null;
		HrdBufferInitialFillPercentage?: number | null;
		HrdBufferSize?: number | null;
		InterlaceMode?: AvcIntraInterlaceMode;
		MaxBitrate?: number | null;
		MinIInterval?: number | null;
		NumberBFramesBetweenReferenceFrames?: number | null;
		NumberReferenceFrames?: number | null;
		ParControl?: Av1FramerateControl;
		ParDenominator?: number | null;
		ParNumerator?: number | null;
		QualityTuningLevel?: H264QualityTuningLevel;
		QvbrSettings?: H265QvbrSettings;
		RateControlMode?: H264RateControlMode;
		SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode;
		ScanTypeConversionMode?: AvcIntraScanTypeConversionMode;
		SceneChangeDetect?: H264SceneChangeDetect;
		Slices?: number | null;
		SlowPal?: CmafClientCache;
		SpatialAdaptiveQuantization?: CmafClientCache;
		Telecine?: H264Telecine;
		TemporalAdaptiveQuantization?: CmafClientCache;
		TemporalIds?: CmafClientCache;
		Tiles?: CmafClientCache;
		UnregisteredSeiTimecode?: CmafClientCache;
		WriteMp4PackagingType?: H265WriteMp4PackagingType;
	}

	/** Settings for H265 codec */
	export interface H265SettingsFormProperties {
		AdaptiveQuantization: FormControl<H265AdaptiveQuantization | null | undefined>,
		AlternateTransferFunctionSei: FormControl<CmafClientCache | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		CodecLevel: FormControl<H265CodecLevel | null | undefined>,
		CodecProfile: FormControl<H265CodecProfile | null | undefined>,
		DynamicSubGop: FormControl<H264DynamicSubGop | null | undefined>,
		FlickerAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		GopBReference: FormControl<CmafClientCache | null | undefined>,
		GopClosedCadence: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		GopSizeUnits: FormControl<H264GopSizeUnits | null | undefined>,
		HrdBufferFinalFillPercentage: FormControl<number | null | undefined>,
		HrdBufferInitialFillPercentage: FormControl<number | null | undefined>,
		HrdBufferSize: FormControl<number | null | undefined>,
		InterlaceMode: FormControl<AvcIntraInterlaceMode | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MinIInterval: FormControl<number | null | undefined>,
		NumberBFramesBetweenReferenceFrames: FormControl<number | null | undefined>,
		NumberReferenceFrames: FormControl<number | null | undefined>,
		ParControl: FormControl<Av1FramerateControl | null | undefined>,
		ParDenominator: FormControl<number | null | undefined>,
		ParNumerator: FormControl<number | null | undefined>,
		QualityTuningLevel: FormControl<H264QualityTuningLevel | null | undefined>,
		RateControlMode: FormControl<H264RateControlMode | null | undefined>,
		SampleAdaptiveOffsetFilterMode: FormControl<H265SampleAdaptiveOffsetFilterMode | null | undefined>,
		ScanTypeConversionMode: FormControl<AvcIntraScanTypeConversionMode | null | undefined>,
		SceneChangeDetect: FormControl<H264SceneChangeDetect | null | undefined>,
		Slices: FormControl<number | null | undefined>,
		SlowPal: FormControl<CmafClientCache | null | undefined>,
		SpatialAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		Telecine: FormControl<H264Telecine | null | undefined>,
		TemporalAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		TemporalIds: FormControl<CmafClientCache | null | undefined>,
		Tiles: FormControl<CmafClientCache | null | undefined>,
		UnregisteredSeiTimecode: FormControl<CmafClientCache | null | undefined>,
		WriteMp4PackagingType: FormControl<H265WriteMp4PackagingType | null | undefined>,
	}
	export function CreateH265SettingsFormGroup() {
		return new FormGroup<H265SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<H265AdaptiveQuantization | null | undefined>(undefined),
			AlternateTransferFunctionSei: new FormControl<CmafClientCache | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodecLevel: new FormControl<H265CodecLevel | null | undefined>(undefined),
			CodecProfile: new FormControl<H265CodecProfile | null | undefined>(undefined),
			DynamicSubGop: new FormControl<H264DynamicSubGop | null | undefined>(undefined),
			FlickerAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			GopBReference: new FormControl<CmafClientCache | null | undefined>(undefined),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			GopSizeUnits: new FormControl<H264GopSizeUnits | null | undefined>(undefined),
			HrdBufferFinalFillPercentage: new FormControl<number | null | undefined>(undefined),
			HrdBufferInitialFillPercentage: new FormControl<number | null | undefined>(undefined),
			HrdBufferSize: new FormControl<number | null | undefined>(undefined),
			InterlaceMode: new FormControl<AvcIntraInterlaceMode | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MinIInterval: new FormControl<number | null | undefined>(undefined),
			NumberBFramesBetweenReferenceFrames: new FormControl<number | null | undefined>(undefined),
			NumberReferenceFrames: new FormControl<number | null | undefined>(undefined),
			ParControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			QualityTuningLevel: new FormControl<H264QualityTuningLevel | null | undefined>(undefined),
			RateControlMode: new FormControl<H264RateControlMode | null | undefined>(undefined),
			SampleAdaptiveOffsetFilterMode: new FormControl<H265SampleAdaptiveOffsetFilterMode | null | undefined>(undefined),
			ScanTypeConversionMode: new FormControl<AvcIntraScanTypeConversionMode | null | undefined>(undefined),
			SceneChangeDetect: new FormControl<H264SceneChangeDetect | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined),
			SlowPal: new FormControl<CmafClientCache | null | undefined>(undefined),
			SpatialAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			Telecine: new FormControl<H264Telecine | null | undefined>(undefined),
			TemporalAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			TemporalIds: new FormControl<CmafClientCache | null | undefined>(undefined),
			Tiles: new FormControl<CmafClientCache | null | undefined>(undefined),
			UnregisteredSeiTimecode: new FormControl<CmafClientCache | null | undefined>(undefined),
			WriteMp4PackagingType: new FormControl<H265WriteMp4PackagingType | null | undefined>(undefined),
		});

	}


	/** When you set Adaptive Quantization to Auto, or leave blank, MediaConvert automatically applies quantization to improve the video quality of your output. Set Adaptive Quantization to Low, Medium, High, Higher, or Max to manually control the strength of the quantization filter. When you do, you can specify a value for Spatial Adaptive Quantization, Temporal Adaptive Quantization, and Flicker Adaptive Quantization, to further control the quantization filter. Set Adaptive Quantization to Off to apply no quantization to your output. */
	export enum H265AdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3, HIGHER = 4, MAX = 5, AUTO = 6 }


	/** H.265 Level. */
	export enum H265CodecLevel { AUTO = 0, LEVEL_1 = 1, LEVEL_2 = 2, LEVEL_2_1 = 3, LEVEL_3 = 4, LEVEL_3_1 = 5, LEVEL_4 = 6, LEVEL_4_1 = 7, LEVEL_5 = 8, LEVEL_5_1 = 9, LEVEL_5_2 = 10, LEVEL_6 = 11, LEVEL_6_1 = 12, LEVEL_6_2 = 13 }


	/** Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License. */
	export enum H265CodecProfile { MAIN_MAIN = 0, MAIN_HIGH = 1, MAIN10_MAIN = 2, MAIN10_HIGH = 3, MAIN_422_8BIT_MAIN = 4, MAIN_422_8BIT_HIGH = 5, MAIN_422_10BIT_MAIN = 6, MAIN_422_10BIT_HIGH = 7 }


	/** Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode. */
	export interface H265QvbrSettings {
		MaxAverageBitrate?: number | null;
		QvbrQualityLevel?: number | null;
		QvbrQualityLevelFineTune?: number | null;
	}

	/** Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode. */
	export interface H265QvbrSettingsFormProperties {
		MaxAverageBitrate: FormControl<number | null | undefined>,
		QvbrQualityLevel: FormControl<number | null | undefined>,
		QvbrQualityLevelFineTune: FormControl<number | null | undefined>,
	}
	export function CreateH265QvbrSettingsFormGroup() {
		return new FormGroup<H265QvbrSettingsFormProperties>({
			MaxAverageBitrate: new FormControl<number | null | undefined>(undefined),
			QvbrQualityLevel: new FormControl<number | null | undefined>(undefined),
			QvbrQualityLevelFineTune: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specify Sample Adaptive Offset (SAO) filter strength. Adaptive mode dynamically selects best strength based on content */
	export enum H265SampleAdaptiveOffsetFilterMode { DEFAULT = 0, ADAPTIVE = 1, OFF = 2 }


	/** If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples. */
	export enum H265WriteMp4PackagingType { HVC1 = 0, HEV1 = 1 }


	/** Required when you set Codec to the value MPEG2. */
	export interface Mpeg2Settings {
		AdaptiveQuantization?: Mpeg2AdaptiveQuantization;
		Bitrate?: number | null;
		CodecLevel?: Mpeg2CodecLevel;
		CodecProfile?: Mpeg2CodecProfile;
		DynamicSubGop?: H264DynamicSubGop;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		GopClosedCadence?: number | null;
		GopSize?: number | null;
		GopSizeUnits?: Mpeg2GopSizeUnits;
		HrdBufferFinalFillPercentage?: number | null;
		HrdBufferInitialFillPercentage?: number | null;
		HrdBufferSize?: number | null;
		InterlaceMode?: AvcIntraInterlaceMode;
		IntraDcPrecision?: Mpeg2IntraDcPrecision;
		MaxBitrate?: number | null;
		MinIInterval?: number | null;
		NumberBFramesBetweenReferenceFrames?: number | null;
		ParControl?: Av1FramerateControl;
		ParDenominator?: number | null;
		ParNumerator?: number | null;
		QualityTuningLevel?: AvcIntraUhdQualityTuningLevel;
		RateControlMode?: M2tsRateMode;
		ScanTypeConversionMode?: AvcIntraScanTypeConversionMode;
		SceneChangeDetect?: CmafClientCache;
		SlowPal?: CmafClientCache;
		Softness?: number | null;
		SpatialAdaptiveQuantization?: CmafClientCache;
		Syntax?: Mpeg2Syntax;
		Telecine?: H264Telecine;
		TemporalAdaptiveQuantization?: CmafClientCache;
	}

	/** Required when you set Codec to the value MPEG2. */
	export interface Mpeg2SettingsFormProperties {
		AdaptiveQuantization: FormControl<Mpeg2AdaptiveQuantization | null | undefined>,
		Bitrate: FormControl<number | null | undefined>,
		CodecLevel: FormControl<Mpeg2CodecLevel | null | undefined>,
		CodecProfile: FormControl<Mpeg2CodecProfile | null | undefined>,
		DynamicSubGop: FormControl<H264DynamicSubGop | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		GopClosedCadence: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		GopSizeUnits: FormControl<Mpeg2GopSizeUnits | null | undefined>,
		HrdBufferFinalFillPercentage: FormControl<number | null | undefined>,
		HrdBufferInitialFillPercentage: FormControl<number | null | undefined>,
		HrdBufferSize: FormControl<number | null | undefined>,
		InterlaceMode: FormControl<AvcIntraInterlaceMode | null | undefined>,
		IntraDcPrecision: FormControl<Mpeg2IntraDcPrecision | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		MinIInterval: FormControl<number | null | undefined>,
		NumberBFramesBetweenReferenceFrames: FormControl<number | null | undefined>,
		ParControl: FormControl<Av1FramerateControl | null | undefined>,
		ParDenominator: FormControl<number | null | undefined>,
		ParNumerator: FormControl<number | null | undefined>,
		QualityTuningLevel: FormControl<AvcIntraUhdQualityTuningLevel | null | undefined>,
		RateControlMode: FormControl<M2tsRateMode | null | undefined>,
		ScanTypeConversionMode: FormControl<AvcIntraScanTypeConversionMode | null | undefined>,
		SceneChangeDetect: FormControl<CmafClientCache | null | undefined>,
		SlowPal: FormControl<CmafClientCache | null | undefined>,
		Softness: FormControl<number | null | undefined>,
		SpatialAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		Syntax: FormControl<Mpeg2Syntax | null | undefined>,
		Telecine: FormControl<H264Telecine | null | undefined>,
		TemporalAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
	}
	export function CreateMpeg2SettingsFormGroup() {
		return new FormGroup<Mpeg2SettingsFormProperties>({
			AdaptiveQuantization: new FormControl<Mpeg2AdaptiveQuantization | null | undefined>(undefined),
			Bitrate: new FormControl<number | null | undefined>(undefined),
			CodecLevel: new FormControl<Mpeg2CodecLevel | null | undefined>(undefined),
			CodecProfile: new FormControl<Mpeg2CodecProfile | null | undefined>(undefined),
			DynamicSubGop: new FormControl<H264DynamicSubGop | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			GopSizeUnits: new FormControl<Mpeg2GopSizeUnits | null | undefined>(undefined),
			HrdBufferFinalFillPercentage: new FormControl<number | null | undefined>(undefined),
			HrdBufferInitialFillPercentage: new FormControl<number | null | undefined>(undefined),
			HrdBufferSize: new FormControl<number | null | undefined>(undefined),
			InterlaceMode: new FormControl<AvcIntraInterlaceMode | null | undefined>(undefined),
			IntraDcPrecision: new FormControl<Mpeg2IntraDcPrecision | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			MinIInterval: new FormControl<number | null | undefined>(undefined),
			NumberBFramesBetweenReferenceFrames: new FormControl<number | null | undefined>(undefined),
			ParControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			QualityTuningLevel: new FormControl<AvcIntraUhdQualityTuningLevel | null | undefined>(undefined),
			RateControlMode: new FormControl<M2tsRateMode | null | undefined>(undefined),
			ScanTypeConversionMode: new FormControl<AvcIntraScanTypeConversionMode | null | undefined>(undefined),
			SceneChangeDetect: new FormControl<CmafClientCache | null | undefined>(undefined),
			SlowPal: new FormControl<CmafClientCache | null | undefined>(undefined),
			Softness: new FormControl<number | null | undefined>(undefined),
			SpatialAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			Syntax: new FormControl<Mpeg2Syntax | null | undefined>(undefined),
			Telecine: new FormControl<H264Telecine | null | undefined>(undefined),
			TemporalAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
		});

	}


	/** Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Spatial adaptive quantization, and Temporal adaptive quantization. */
	export enum Mpeg2AdaptiveQuantization { OFF = 0, LOW = 1, MEDIUM = 2, HIGH = 3 }


	/** Use Level to set the MPEG-2 level for the video output. */
	export enum Mpeg2CodecLevel { AUTO = 0, LOW = 1, MAIN = 2, HIGH1440 = 3, HIGH = 4 }


	/** Use Profile to set the MPEG-2 profile for the video output. */
	export enum Mpeg2CodecProfile { MAIN = 0, PROFILE_422 = 1 }


	/** Specify the units for GOP size. If you don't specify a value here, by default the encoder measures GOP size in frames. */
	export enum Mpeg2GopSizeUnits { FRAMES = 0, SECONDS = 1 }


	/** Use Intra DC precision to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio. */
	export enum Mpeg2IntraDcPrecision { AUTO = 0, INTRA_DC_PRECISION_8 = 1, INTRA_DC_PRECISION_9 = 2, INTRA_DC_PRECISION_10 = 3, INTRA_DC_PRECISION_11 = 4 }


	/** Specify whether this output's video uses the D10 syntax. Keep the default value to not use the syntax. Related settings: When you choose D10 for your MXF profile, you must also set this value to D10. */
	export enum Mpeg2Syntax { DEFAULT = 0, D_10 = 1 }


	/** Required when you set Codec to the value PRORES. */
	export interface ProresSettings {
		ChromaSampling?: ProresChromaSampling;
		CodecProfile?: ProresCodecProfile;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		InterlaceMode?: AvcIntraInterlaceMode;
		ParControl?: Av1FramerateControl;
		ParDenominator?: number | null;
		ParNumerator?: number | null;
		ScanTypeConversionMode?: AvcIntraScanTypeConversionMode;
		SlowPal?: CmafClientCache;
		Telecine?: AvcIntraTelecine;
	}

	/** Required when you set Codec to the value PRORES. */
	export interface ProresSettingsFormProperties {
		ChromaSampling: FormControl<ProresChromaSampling | null | undefined>,
		CodecProfile: FormControl<ProresCodecProfile | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		InterlaceMode: FormControl<AvcIntraInterlaceMode | null | undefined>,
		ParControl: FormControl<Av1FramerateControl | null | undefined>,
		ParDenominator: FormControl<number | null | undefined>,
		ParNumerator: FormControl<number | null | undefined>,
		ScanTypeConversionMode: FormControl<AvcIntraScanTypeConversionMode | null | undefined>,
		SlowPal: FormControl<CmafClientCache | null | undefined>,
		Telecine: FormControl<AvcIntraTelecine | null | undefined>,
	}
	export function CreateProresSettingsFormGroup() {
		return new FormGroup<ProresSettingsFormProperties>({
			ChromaSampling: new FormControl<ProresChromaSampling | null | undefined>(undefined),
			CodecProfile: new FormControl<ProresCodecProfile | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			InterlaceMode: new FormControl<AvcIntraInterlaceMode | null | undefined>(undefined),
			ParControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			ScanTypeConversionMode: new FormControl<AvcIntraScanTypeConversionMode | null | undefined>(undefined),
			SlowPal: new FormControl<CmafClientCache | null | undefined>(undefined),
			Telecine: new FormControl<AvcIntraTelecine | null | undefined>(undefined),
		});

	}


	/** This setting applies only to ProRes 4444 and ProRes 4444 XQ outputs that you create from inputs that use 4:4:4 chroma sampling. Set Preserve 4:4:4 sampling to allow outputs to also use 4:4:4 chroma sampling. You must specify a value for this setting when your output codec profile supports 4:4:4 chroma sampling. Related Settings: For Apple ProRes outputs with 4:4:4 chroma sampling: Choose Preserve 4:4:4 sampling. Use when your input has 4:4:4 chroma sampling and your output codec Profile is Apple ProRes 4444 or 4444 XQ. Note that when you choose Preserve 4:4:4 sampling, you cannot include any of the following Preprocessors: Dolby Vision, HDR10+, or Noise reducer. */
	export enum ProresChromaSampling { PRESERVE_444_SAMPLING = 0, SUBSAMPLE_TO_422 = 1 }


	/** Use Profile to specify the type of Apple ProRes codec to use for this output. */
	export enum ProresCodecProfile { APPLE_PRORES_422 = 0, APPLE_PRORES_422_HQ = 1, APPLE_PRORES_422_LT = 2, APPLE_PRORES_422_PROXY = 3, APPLE_PRORES_4444 = 4, APPLE_PRORES_4444_XQ = 5 }


	/** Required when you set Codec to the value VC3 */
	export interface Vc3Settings {
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		InterlaceMode?: Vc3InterlaceMode;
		ScanTypeConversionMode?: AvcIntraScanTypeConversionMode;
		SlowPal?: CmafClientCache;
		Telecine?: AvcIntraTelecine;
		Vc3Class?: Vc3Class;
	}

	/** Required when you set Codec to the value VC3 */
	export interface Vc3SettingsFormProperties {
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		InterlaceMode: FormControl<Vc3InterlaceMode | null | undefined>,
		ScanTypeConversionMode: FormControl<AvcIntraScanTypeConversionMode | null | undefined>,
		SlowPal: FormControl<CmafClientCache | null | undefined>,
		Telecine: FormControl<AvcIntraTelecine | null | undefined>,
		Vc3Class: FormControl<Vc3Class | null | undefined>,
	}
	export function CreateVc3SettingsFormGroup() {
		return new FormGroup<Vc3SettingsFormProperties>({
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			InterlaceMode: new FormControl<Vc3InterlaceMode | null | undefined>(undefined),
			ScanTypeConversionMode: new FormControl<AvcIntraScanTypeConversionMode | null | undefined>(undefined),
			SlowPal: new FormControl<CmafClientCache | null | undefined>(undefined),
			Telecine: new FormControl<AvcIntraTelecine | null | undefined>(undefined),
			Vc3Class: new FormControl<Vc3Class | null | undefined>(undefined),
		});

	}


	/** Optional. Choose the scan line type for this output. If you don't specify a value, MediaConvert will create a progressive output. */
	export enum Vc3InterlaceMode { INTERLACED = 0, PROGRESSIVE = 1 }


	/** Specify the VC3 class to choose the quality characteristics for this output. VC3 class, together with the settings Framerate (framerateNumerator and framerateDenominator) and Resolution (height and width), determine your output bitrate. For example, say that your video resolution is 1920x1080 and your framerate is 29.97. Then Class 145 gives you an output with a bitrate of approximately 145 Mbps and Class 220 gives you and output with a bitrate of approximately 220 Mbps. VC3 class also specifies the color bit depth of your output. */
	export enum Vc3Class { CLASS_145_8BIT = 0, CLASS_220_8BIT = 1, CLASS_220_10BIT = 2 }


	/** Required when you set Codec to the value VP8. */
	export interface Vp8Settings {
		Bitrate?: number | null;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		GopSize?: number | null;
		HrdBufferSize?: number | null;
		MaxBitrate?: number | null;
		ParControl?: Av1FramerateControl;
		ParDenominator?: number | null;
		ParNumerator?: number | null;
		QualityTuningLevel?: Vp8QualityTuningLevel;
		RateControlMode?: Vp8RateControlMode;
	}

	/** Required when you set Codec to the value VP8. */
	export interface Vp8SettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		HrdBufferSize: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		ParControl: FormControl<Av1FramerateControl | null | undefined>,
		ParDenominator: FormControl<number | null | undefined>,
		ParNumerator: FormControl<number | null | undefined>,
		QualityTuningLevel: FormControl<Vp8QualityTuningLevel | null | undefined>,
		RateControlMode: FormControl<Vp8RateControlMode | null | undefined>,
	}
	export function CreateVp8SettingsFormGroup() {
		return new FormGroup<Vp8SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			HrdBufferSize: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			ParControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			QualityTuningLevel: new FormControl<Vp8QualityTuningLevel | null | undefined>(undefined),
			RateControlMode: new FormControl<Vp8RateControlMode | null | undefined>(undefined),
		});

	}


	/** Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding. */
	export enum Vp8QualityTuningLevel { MULTI_PASS = 0, MULTI_PASS_HQ = 1 }


	/** With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode. */
	export enum Vp8RateControlMode { VBR = 0 }


	/** Required when you set Codec to the value VP9. */
	export interface Vp9Settings {
		Bitrate?: number | null;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		GopSize?: number | null;
		HrdBufferSize?: number | null;
		MaxBitrate?: number | null;
		ParControl?: Av1FramerateControl;
		ParDenominator?: number | null;
		ParNumerator?: number | null;
		QualityTuningLevel?: Vp8QualityTuningLevel;
		RateControlMode?: Vp8RateControlMode;
	}

	/** Required when you set Codec to the value VP9. */
	export interface Vp9SettingsFormProperties {
		Bitrate: FormControl<number | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		GopSize: FormControl<number | null | undefined>,
		HrdBufferSize: FormControl<number | null | undefined>,
		MaxBitrate: FormControl<number | null | undefined>,
		ParControl: FormControl<Av1FramerateControl | null | undefined>,
		ParDenominator: FormControl<number | null | undefined>,
		ParNumerator: FormControl<number | null | undefined>,
		QualityTuningLevel: FormControl<Vp8QualityTuningLevel | null | undefined>,
		RateControlMode: FormControl<Vp8RateControlMode | null | undefined>,
	}
	export function CreateVp9SettingsFormGroup() {
		return new FormGroup<Vp9SettingsFormProperties>({
			Bitrate: new FormControl<number | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			GopSize: new FormControl<number | null | undefined>(undefined),
			HrdBufferSize: new FormControl<number | null | undefined>(undefined),
			MaxBitrate: new FormControl<number | null | undefined>(undefined),
			ParControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			ParDenominator: new FormControl<number | null | undefined>(undefined),
			ParNumerator: new FormControl<number | null | undefined>(undefined),
			QualityTuningLevel: new FormControl<Vp8QualityTuningLevel | null | undefined>(undefined),
			RateControlMode: new FormControl<Vp8RateControlMode | null | undefined>(undefined),
		});

	}


	/** Required when you set Codec to the value XAVC. */
	export interface XavcSettings {
		AdaptiveQuantization?: H264AdaptiveQuantization;
		EntropyEncoding?: XavcEntropyEncoding;
		FramerateControl?: Av1FramerateControl;
		FramerateConversionAlgorithm?: Av1FramerateConversionAlgorithm;
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
		Profile?: XavcProfile;
		SlowPal?: CmafClientCache;
		Softness?: number | null;
		SpatialAdaptiveQuantization?: CmafClientCache;
		TemporalAdaptiveQuantization?: CmafClientCache;
		Xavc4kIntraCbgProfileSettings?: Xavc4kIntraCbgProfileSettings;
		Xavc4kIntraVbrProfileSettings?: Xavc4kIntraVbrProfileSettings;
		Xavc4kProfileSettings?: Xavc4kProfileSettings;
		XavcHdIntraCbgProfileSettings?: XavcHdIntraCbgProfileSettings;
		XavcHdProfileSettings?: XavcHdProfileSettings;
	}

	/** Required when you set Codec to the value XAVC. */
	export interface XavcSettingsFormProperties {
		AdaptiveQuantization: FormControl<H264AdaptiveQuantization | null | undefined>,
		EntropyEncoding: FormControl<XavcEntropyEncoding | null | undefined>,
		FramerateControl: FormControl<Av1FramerateControl | null | undefined>,
		FramerateConversionAlgorithm: FormControl<Av1FramerateConversionAlgorithm | null | undefined>,
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
		Profile: FormControl<XavcProfile | null | undefined>,
		SlowPal: FormControl<CmafClientCache | null | undefined>,
		Softness: FormControl<number | null | undefined>,
		SpatialAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		TemporalAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
	}
	export function CreateXavcSettingsFormGroup() {
		return new FormGroup<XavcSettingsFormProperties>({
			AdaptiveQuantization: new FormControl<H264AdaptiveQuantization | null | undefined>(undefined),
			EntropyEncoding: new FormControl<XavcEntropyEncoding | null | undefined>(undefined),
			FramerateControl: new FormControl<Av1FramerateControl | null | undefined>(undefined),
			FramerateConversionAlgorithm: new FormControl<Av1FramerateConversionAlgorithm | null | undefined>(undefined),
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
			Profile: new FormControl<XavcProfile | null | undefined>(undefined),
			SlowPal: new FormControl<CmafClientCache | null | undefined>(undefined),
			Softness: new FormControl<number | null | undefined>(undefined),
			SpatialAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			TemporalAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
		});

	}


	/** Optional. Choose a specific entropy encoding mode only when you want to override XAVC recommendations. If you choose the value auto, MediaConvert uses the mode that the XAVC file format specifies given this output's operating point. */
	export enum XavcEntropyEncoding { AUTO = 0, CABAC = 1, CAVLC = 2 }


	/** Specify the XAVC profile for this output. For more information, see the Sony documentation at https://www.xavc-info.org/. Note that MediaConvert doesn't support the interlaced video XAVC operating points for XAVC_HD_INTRA_CBG. To create an interlaced XAVC output, choose the profile XAVC_HD. */
	export enum XavcProfile { XAVC_HD_INTRA_CBG = 0, XAVC_4K_INTRA_CBG = 1, XAVC_4K_INTRA_VBR = 2, XAVC_HD = 3, XAVC_4K = 4 }


	/** Required when you set Profile to the value XAVC_4K_INTRA_CBG. */
	export interface Xavc4kIntraCbgProfileSettings {
		XavcClass?: Xavc4kIntraCbgProfileClass;
	}

	/** Required when you set Profile to the value XAVC_4K_INTRA_CBG. */
	export interface Xavc4kIntraCbgProfileSettingsFormProperties {
		XavcClass: FormControl<Xavc4kIntraCbgProfileClass | null | undefined>,
	}
	export function CreateXavc4kIntraCbgProfileSettingsFormGroup() {
		return new FormGroup<Xavc4kIntraCbgProfileSettingsFormProperties>({
			XavcClass: new FormControl<Xavc4kIntraCbgProfileClass | null | undefined>(undefined),
		});

	}


	/** Specify the XAVC Intra 4k (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class. */
	export enum Xavc4kIntraCbgProfileClass { CLASS_100 = 0, CLASS_300 = 1, CLASS_480 = 2 }


	/** Required when you set Profile to the value XAVC_4K_INTRA_VBR. */
	export interface Xavc4kIntraVbrProfileSettings {
		XavcClass?: Xavc4kIntraCbgProfileClass;
	}

	/** Required when you set Profile to the value XAVC_4K_INTRA_VBR. */
	export interface Xavc4kIntraVbrProfileSettingsFormProperties {
		XavcClass: FormControl<Xavc4kIntraCbgProfileClass | null | undefined>,
	}
	export function CreateXavc4kIntraVbrProfileSettingsFormGroup() {
		return new FormGroup<Xavc4kIntraVbrProfileSettingsFormProperties>({
			XavcClass: new FormControl<Xavc4kIntraCbgProfileClass | null | undefined>(undefined),
		});

	}


	/** Required when you set Profile to the value XAVC_4K. */
	export interface Xavc4kProfileSettings {
		BitrateClass?: Xavc4kProfileBitrateClass;
		CodecProfile?: Xavc4kProfileCodecProfile;
		FlickerAdaptiveQuantization?: CmafClientCache;
		GopBReference?: CmafClientCache;
		GopClosedCadence?: number | null;
		HrdBufferSize?: number | null;
		QualityTuningLevel?: H264QualityTuningLevel;
		Slices?: number | null;
	}

	/** Required when you set Profile to the value XAVC_4K. */
	export interface Xavc4kProfileSettingsFormProperties {
		BitrateClass: FormControl<Xavc4kProfileBitrateClass | null | undefined>,
		CodecProfile: FormControl<Xavc4kProfileCodecProfile | null | undefined>,
		FlickerAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		GopBReference: FormControl<CmafClientCache | null | undefined>,
		GopClosedCadence: FormControl<number | null | undefined>,
		HrdBufferSize: FormControl<number | null | undefined>,
		QualityTuningLevel: FormControl<H264QualityTuningLevel | null | undefined>,
		Slices: FormControl<number | null | undefined>,
	}
	export function CreateXavc4kProfileSettingsFormGroup() {
		return new FormGroup<Xavc4kProfileSettingsFormProperties>({
			BitrateClass: new FormControl<Xavc4kProfileBitrateClass | null | undefined>(undefined),
			CodecProfile: new FormControl<Xavc4kProfileCodecProfile | null | undefined>(undefined),
			FlickerAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			GopBReference: new FormControl<CmafClientCache | null | undefined>(undefined),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined),
			HrdBufferSize: new FormControl<number | null | undefined>(undefined),
			QualityTuningLevel: new FormControl<H264QualityTuningLevel | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specify the XAVC 4k (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class. */
	export enum Xavc4kProfileBitrateClass { BITRATE_CLASS_100 = 0, BITRATE_CLASS_140 = 1, BITRATE_CLASS_200 = 2 }


	/** Specify the codec profile for this output. Choose High, 8-bit, 4:2:0 (HIGH) or High, 10-bit, 4:2:2 (HIGH_422). These profiles are specified in ITU-T H.264. */
	export enum Xavc4kProfileCodecProfile { HIGH = 0, HIGH_422 = 1 }


	/** Required when you set Profile to the value XAVC_HD_INTRA_CBG. */
	export interface XavcHdIntraCbgProfileSettings {
		XavcClass?: XavcHdIntraCbgProfileClass;
	}

	/** Required when you set Profile to the value XAVC_HD_INTRA_CBG. */
	export interface XavcHdIntraCbgProfileSettingsFormProperties {
		XavcClass: FormControl<XavcHdIntraCbgProfileClass | null | undefined>,
	}
	export function CreateXavcHdIntraCbgProfileSettingsFormGroup() {
		return new FormGroup<XavcHdIntraCbgProfileSettingsFormProperties>({
			XavcClass: new FormControl<XavcHdIntraCbgProfileClass | null | undefined>(undefined),
		});

	}


	/** Specify the XAVC Intra HD (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class. */
	export enum XavcHdIntraCbgProfileClass { CLASS_50 = 0, CLASS_100 = 1, CLASS_200 = 2 }


	/** Required when you set Profile to the value XAVC_HD. */
	export interface XavcHdProfileSettings {
		BitrateClass?: XavcHdProfileBitrateClass;
		FlickerAdaptiveQuantization?: CmafClientCache;
		GopBReference?: CmafClientCache;
		GopClosedCadence?: number | null;
		HrdBufferSize?: number | null;
		InterlaceMode?: AvcIntraInterlaceMode;
		QualityTuningLevel?: H264QualityTuningLevel;
		Slices?: number | null;
		Telecine?: AvcIntraTelecine;
	}

	/** Required when you set Profile to the value XAVC_HD. */
	export interface XavcHdProfileSettingsFormProperties {
		BitrateClass: FormControl<XavcHdProfileBitrateClass | null | undefined>,
		FlickerAdaptiveQuantization: FormControl<CmafClientCache | null | undefined>,
		GopBReference: FormControl<CmafClientCache | null | undefined>,
		GopClosedCadence: FormControl<number | null | undefined>,
		HrdBufferSize: FormControl<number | null | undefined>,
		InterlaceMode: FormControl<AvcIntraInterlaceMode | null | undefined>,
		QualityTuningLevel: FormControl<H264QualityTuningLevel | null | undefined>,
		Slices: FormControl<number | null | undefined>,
		Telecine: FormControl<AvcIntraTelecine | null | undefined>,
	}
	export function CreateXavcHdProfileSettingsFormGroup() {
		return new FormGroup<XavcHdProfileSettingsFormProperties>({
			BitrateClass: new FormControl<XavcHdProfileBitrateClass | null | undefined>(undefined),
			FlickerAdaptiveQuantization: new FormControl<CmafClientCache | null | undefined>(undefined),
			GopBReference: new FormControl<CmafClientCache | null | undefined>(undefined),
			GopClosedCadence: new FormControl<number | null | undefined>(undefined),
			HrdBufferSize: new FormControl<number | null | undefined>(undefined),
			InterlaceMode: new FormControl<AvcIntraInterlaceMode | null | undefined>(undefined),
			QualityTuningLevel: new FormControl<H264QualityTuningLevel | null | undefined>(undefined),
			Slices: new FormControl<number | null | undefined>(undefined),
			Telecine: new FormControl<AvcIntraTelecine | null | undefined>(undefined),
		});

	}


	/** Specify the XAVC HD (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class. */
	export enum XavcHdProfileBitrateClass { BITRATE_CLASS_25 = 0, BITRATE_CLASS_35 = 1, BITRATE_CLASS_50 = 2 }


	/** Choose Insert for this setting to include color metadata in this output. Choose Ignore to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default. */
	export enum ColorMetadata { IGNORE = 0, INSERT = 1 }


	/** Use Respond to AFD to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to NONE. A preferred implementation of this workflow is to set RespondToAfd to and set AfdSignaling to AUTO. * Choose None to remove all input AFD values from this output. */
	export enum RespondToAfd { NONE = 0, RESPOND = 1, PASSTHROUGH = 2 }


	/** Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output to have the service stretch your video image to fit. Keep the setting Default to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement in this output. */
	export enum ScalingBehavior { DEFAULT = 0, STRETCH_TO_OUTPUT = 1 }


	/** Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration. In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration does. */
	export enum VideoTimecodeInsertion { DISABLED = 0, PIC_TIMING_SEI = 1 }


	/** Find additional transcoding features under Preprocessors. Enable the features at each output individually. These features are disabled by default. */
	export interface VideoPreprocessor {
		ColorCorrector?: ColorCorrector;
		Deinterlacer?: Deinterlacer;
		DolbyVision?: DolbyVision;
		Hdr10Plus?: Hdr10Plus;
		ImageInserter?: ImageInserter;
		NoiseReducer?: NoiseReducer;
		PartnerWatermarking?: PartnerWatermarking;
		TimecodeBurnin?: TimecodeBurnin;
	}

	/** Find additional transcoding features under Preprocessors. Enable the features at each output individually. These features are disabled by default. */
	export interface VideoPreprocessorFormProperties {
	}
	export function CreateVideoPreprocessorFormGroup() {
		return new FormGroup<VideoPreprocessorFormProperties>({
		});

	}


	/** Settings for color correction. */
	export interface ColorCorrector {
		Brightness?: number | null;
		ClipLimits?: ClipLimits;
		ColorSpaceConversion?: ColorSpaceConversion;
		Contrast?: number | null;
		Hdr10Metadata?: Hdr10Metadata;
		HdrToSdrToneMapper?: HDRToSDRToneMapper;
		Hue?: number | null;
		SampleRangeConversion?: SampleRangeConversion;
		Saturation?: number | null;
		SdrReferenceWhiteLevel?: number | null;
	}

	/** Settings for color correction. */
	export interface ColorCorrectorFormProperties {
		Brightness: FormControl<number | null | undefined>,
		ColorSpaceConversion: FormControl<ColorSpaceConversion | null | undefined>,
		Contrast: FormControl<number | null | undefined>,
		HdrToSdrToneMapper: FormControl<HDRToSDRToneMapper | null | undefined>,
		Hue: FormControl<number | null | undefined>,
		SampleRangeConversion: FormControl<SampleRangeConversion | null | undefined>,
		Saturation: FormControl<number | null | undefined>,
		SdrReferenceWhiteLevel: FormControl<number | null | undefined>,
	}
	export function CreateColorCorrectorFormGroup() {
		return new FormGroup<ColorCorrectorFormProperties>({
			Brightness: new FormControl<number | null | undefined>(undefined),
			ColorSpaceConversion: new FormControl<ColorSpaceConversion | null | undefined>(undefined),
			Contrast: new FormControl<number | null | undefined>(undefined),
			HdrToSdrToneMapper: new FormControl<HDRToSDRToneMapper | null | undefined>(undefined),
			Hue: new FormControl<number | null | undefined>(undefined),
			SampleRangeConversion: new FormControl<SampleRangeConversion | null | undefined>(undefined),
			Saturation: new FormControl<number | null | undefined>(undefined),
			SdrReferenceWhiteLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specify YUV limits and RGB tolerances when you set Sample range conversion to Limited range clip. */
	export interface ClipLimits {
		MaximumRGBTolerance?: number | null;
		MaximumYUV?: number | null;
		MinimumRGBTolerance?: number | null;
		MinimumYUV?: number | null;
	}

	/** Specify YUV limits and RGB tolerances when you set Sample range conversion to Limited range clip. */
	export interface ClipLimitsFormProperties {
		MaximumRGBTolerance: FormControl<number | null | undefined>,
		MaximumYUV: FormControl<number | null | undefined>,
		MinimumRGBTolerance: FormControl<number | null | undefined>,
		MinimumYUV: FormControl<number | null | undefined>,
	}
	export function CreateClipLimitsFormGroup() {
		return new FormGroup<ClipLimitsFormProperties>({
			MaximumRGBTolerance: new FormControl<number | null | undefined>(undefined),
			MaximumYUV: new FormControl<number | null | undefined>(undefined),
			MinimumRGBTolerance: new FormControl<number | null | undefined>(undefined),
			MinimumYUV: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses tone mapping to approximate the outcome of manually regrading from HDR to SDR. When you specify an output color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:
	 *   * HDR 10: BT.2020, PQ, BT.2020 non-constant
	 *   * HLG 2020: BT.2020, HLG, BT.2020 non-constant
	 *   * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709
	 *   * P3D65 (SDR): Display P3, sRGB, BT.709
	 *   * P3D65 (HDR): Display P3, PQ, BT.709
	 */
	export enum ColorSpaceConversion { NONE = 0, FORCE_601 = 1, FORCE_709 = 2, FORCE_HDR10 = 3, FORCE_HLG_2020 = 4, FORCE_P3DCI = 5, FORCE_P3D65_SDR = 6, FORCE_P3D65_HDR = 7 }


	/** Specify how MediaConvert maps brightness and colors from your HDR input to your SDR output. The mode that you select represents a creative choice, with different tradeoffs in the details and tones of your output. To maintain details in bright or saturated areas of your output: Choose Preserve details. For some sources, your SDR output may look less bright and less saturated when compared to your HDR source. MediaConvert automatically applies this mode for HLG sources, regardless of your choice. For a bright and saturated output: Choose Vibrant. We recommend that you choose this mode when any of your source content is HDR10, and for the best results when it is mastered for 1000 nits. You may notice loss of details in bright or saturated areas of your output. HDR to SDR tone mapping has no effect when your input is SDR. */
	export enum HDRToSDRToneMapper { PRESERVE_DETAILS = 0, VIBRANT = 1 }


	/** Specify how MediaConvert limits the color sample range for this output. To create a limited range output from a full range input: Choose Limited range squeeze. For full range inputs, MediaConvert performs a linear offset to color samples equally across all pixels and frames. Color samples in 10-bit outputs are limited to 64 through 940, and 8-bit outputs are limited to 16 through 235. Note: For limited range inputs, values for color samples are passed through to your output unchanged. MediaConvert does not limit the sample range. To correct pixels in your input that are out of range or out of gamut: Choose Limited range clip. Use for broadcast applications. MediaConvert conforms any pixels outside of the values that you specify under Minimum YUV and Maximum YUV to limited range bounds. MediaConvert also corrects any YUV values that, when converted to RGB, would be outside the bounds you specify under Minimum RGB tolerance and Maximum RGB tolerance. With either limited range conversion, MediaConvert writes the sample range metadata in the output. */
	export enum SampleRangeConversion { LIMITED_RANGE_SQUEEZE = 0, NONE = 1, LIMITED_RANGE_CLIP = 2 }


	/** Settings for deinterlacer */
	export interface Deinterlacer {
		Algorithm?: DeinterlaceAlgorithm;
		Control?: DeinterlacerControl;
		Mode?: DeinterlacerMode;
	}

	/** Settings for deinterlacer */
	export interface DeinterlacerFormProperties {
		Algorithm: FormControl<DeinterlaceAlgorithm | null | undefined>,
		Control: FormControl<DeinterlacerControl | null | undefined>,
		Mode: FormControl<DeinterlacerMode | null | undefined>,
	}
	export function CreateDeinterlacerFormGroup() {
		return new FormGroup<DeinterlacerFormProperties>({
			Algorithm: new FormControl<DeinterlaceAlgorithm | null | undefined>(undefined),
			Control: new FormControl<DeinterlacerControl | null | undefined>(undefined),
			Mode: new FormControl<DeinterlacerMode | null | undefined>(undefined),
		});

	}


	/** Only applies when you set Deinterlace mode to Deinterlace or Adaptive. Interpolate produces sharper pictures, while blend produces smoother motion. If your source file includes a ticker, such as a scrolling headline at the bottom of the frame: Choose Interpolate ticker or Blend ticker. To apply field doubling: Choose Linear interpolation. Note that Linear interpolation may introduce video artifacts into your output. */
	export enum DeinterlaceAlgorithm { INTERPOLATE = 0, INTERPOLATE_TICKER = 1, BLEND = 2, BLEND_TICKER = 3, LINEAR_INTERPOLATION = 4 }


	/** - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is a good chance that the metadata has tagged frames as progressive when they are not progressive. Do not turn on otherwise; processing frames that are already progressive into progressive will probably result in lower quality video. */
	export enum DeinterlacerControl { FORCE_ALL_FRAMES = 0, NORMAL = 1 }


	/**
	 * Use Deinterlacer to choose how the service will do deinterlacing. Default is Deinterlace.
	 * - Deinterlace converts interlaced to progressive.
	 * - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p.
	 * - Adaptive auto-detects and converts to progressive.
	 */
	export enum DeinterlacerMode { DEINTERLACE = 0, INVERSE_TELECINE = 1, ADAPTIVE = 2 }


	/** Create Dolby Vision Profile 5 or Profile 8.1 compatible video output. */
	export interface DolbyVision {
		L6Metadata?: DolbyVisionLevel6Metadata;
		L6Mode?: DolbyVisionLevel6Mode;
		Mapping?: DolbyVisionMapping;
		Profile?: DolbyVisionProfile;
	}

	/** Create Dolby Vision Profile 5 or Profile 8.1 compatible video output. */
	export interface DolbyVisionFormProperties {
		L6Mode: FormControl<DolbyVisionLevel6Mode | null | undefined>,
		Mapping: FormControl<DolbyVisionMapping | null | undefined>,
		Profile: FormControl<DolbyVisionProfile | null | undefined>,
	}
	export function CreateDolbyVisionFormGroup() {
		return new FormGroup<DolbyVisionFormProperties>({
			L6Mode: new FormControl<DolbyVisionLevel6Mode | null | undefined>(undefined),
			Mapping: new FormControl<DolbyVisionMapping | null | undefined>(undefined),
			Profile: new FormControl<DolbyVisionProfile | null | undefined>(undefined),
		});

	}


	/** Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values. */
	export interface DolbyVisionLevel6Metadata {
		MaxCll?: number | null;
		MaxFall?: number | null;
	}

	/** Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values. */
	export interface DolbyVisionLevel6MetadataFormProperties {
		MaxCll: FormControl<number | null | undefined>,
		MaxFall: FormControl<number | null | undefined>,
	}
	export function CreateDolbyVisionLevel6MetadataFormGroup() {
		return new FormGroup<DolbyVisionLevel6MetadataFormProperties>({
			MaxCll: new FormControl<number | null | undefined>(undefined),
			MaxFall: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies. */
	export enum DolbyVisionLevel6Mode { PASSTHROUGH = 0, RECALCULATE = 1, SPECIFY = 2 }


	/** Required when you set Dolby Vision Profile to Profile 8.1. When you set Content mapping to None, content mapping is not applied to the HDR10-compatible signal. Depending on the source peak nit level, clipping might occur on HDR devices without Dolby Vision. When you set Content mapping to HDR10 1000, the transcoder creates a 1,000 nits peak HDR10-compatible signal by applying static content mapping to the source. This mode is speed-optimized for PQ10 sources with metadata that is created from analysis. For graded Dolby Vision content, be aware that creative intent might not be guaranteed with extreme 1,000 nits trims. */
	export enum DolbyVisionMapping { HDR10_NOMAP = 0, HDR10_1000 = 1 }


	/** Required when you enable Dolby Vision. Use Profile 5 to include frame-interleaved Dolby Vision metadata in your output. Your input must include Dolby Vision metadata or an HDR10 YUV color space. Use Profile 8.1 to include frame-interleaved Dolby Vision metadata and HDR10 metadata in your output. Your input must include Dolby Vision metadata. */
	export enum DolbyVisionProfile { PROFILE_5 = 0, PROFILE_8_1 = 1 }


	/** Setting for HDR10+ metadata insertion */
	export interface Hdr10Plus {
		MasteringMonitorNits?: number | null;
		TargetMonitorNits?: number | null;
	}

	/** Setting for HDR10+ metadata insertion */
	export interface Hdr10PlusFormProperties {
		MasteringMonitorNits: FormControl<number | null | undefined>,
		TargetMonitorNits: FormControl<number | null | undefined>,
	}
	export function CreateHdr10PlusFormGroup() {
		return new FormGroup<Hdr10PlusFormProperties>({
			MasteringMonitorNits: new FormControl<number | null | undefined>(undefined),
			TargetMonitorNits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Enable the Noise reducer feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer, you must also select a value for Noise reducer filter. For AVC outputs, when you include Noise reducer, you cannot include the Bandwidth reduction filter. */
	export interface NoiseReducer {
		Filter?: NoiseReducerFilter;
		FilterSettings?: NoiseReducerFilterSettings;
		SpatialFilterSettings?: NoiseReducerSpatialFilterSettings;
		TemporalFilterSettings?: NoiseReducerTemporalFilterSettings;
	}

	/** Enable the Noise reducer feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer, you must also select a value for Noise reducer filter. For AVC outputs, when you include Noise reducer, you cannot include the Bandwidth reduction filter. */
	export interface NoiseReducerFormProperties {
		Filter: FormControl<NoiseReducerFilter | null | undefined>,
	}
	export function CreateNoiseReducerFormGroup() {
		return new FormGroup<NoiseReducerFormProperties>({
			Filter: new FormControl<NoiseReducerFilter | null | undefined>(undefined),
		});

	}


	/** Use Noise reducer filter to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer. * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion. */
	export enum NoiseReducerFilter { BILATERAL = 0, MEAN = 1, GAUSSIAN = 2, LANCZOS = 3, SHARPEN = 4, CONSERVE = 5, SPATIAL = 6, TEMPORAL = 7 }


	/** Settings for a noise reducer filter */
	export interface NoiseReducerFilterSettings {
		Strength?: number | null;
	}

	/** Settings for a noise reducer filter */
	export interface NoiseReducerFilterSettingsFormProperties {
		Strength: FormControl<number | null | undefined>,
	}
	export function CreateNoiseReducerFilterSettingsFormGroup() {
		return new FormGroup<NoiseReducerFilterSettingsFormProperties>({
			Strength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Noise reducer filter settings for spatial filter. */
	export interface NoiseReducerSpatialFilterSettings {
		PostFilterSharpenStrength?: number | null;
		Speed?: number | null;
		Strength?: number | null;
	}

	/** Noise reducer filter settings for spatial filter. */
	export interface NoiseReducerSpatialFilterSettingsFormProperties {
		PostFilterSharpenStrength: FormControl<number | null | undefined>,
		Speed: FormControl<number | null | undefined>,
		Strength: FormControl<number | null | undefined>,
	}
	export function CreateNoiseReducerSpatialFilterSettingsFormGroup() {
		return new FormGroup<NoiseReducerSpatialFilterSettingsFormProperties>({
			PostFilterSharpenStrength: new FormControl<number | null | undefined>(undefined),
			Speed: new FormControl<number | null | undefined>(undefined),
			Strength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Noise reducer filter settings for temporal filter. */
	export interface NoiseReducerTemporalFilterSettings {
		AggressiveMode?: number | null;
		PostTemporalSharpening?: NoiseFilterPostTemporalSharpening;
		PostTemporalSharpeningStrength?: NoiseFilterPostTemporalSharpeningStrength;
		Speed?: number | null;
		Strength?: number | null;
	}

	/** Noise reducer filter settings for temporal filter. */
	export interface NoiseReducerTemporalFilterSettingsFormProperties {
		AggressiveMode: FormControl<number | null | undefined>,
		PostTemporalSharpening: FormControl<NoiseFilterPostTemporalSharpening | null | undefined>,
		PostTemporalSharpeningStrength: FormControl<NoiseFilterPostTemporalSharpeningStrength | null | undefined>,
		Speed: FormControl<number | null | undefined>,
		Strength: FormControl<number | null | undefined>,
	}
	export function CreateNoiseReducerTemporalFilterSettingsFormGroup() {
		return new FormGroup<NoiseReducerTemporalFilterSettingsFormProperties>({
			AggressiveMode: new FormControl<number | null | undefined>(undefined),
			PostTemporalSharpening: new FormControl<NoiseFilterPostTemporalSharpening | null | undefined>(undefined),
			PostTemporalSharpeningStrength: new FormControl<NoiseFilterPostTemporalSharpeningStrength | null | undefined>(undefined),
			Speed: new FormControl<number | null | undefined>(undefined),
			Strength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** When you set Noise reducer to Temporal, the bandwidth and sharpness of your output is reduced. You can optionally use Post temporal sharpening to apply sharpening to the edges of your output. Note that Post temporal sharpening will also make the bandwidth reduction from the Noise reducer smaller. The default behavior, Auto, allows the transcoder to determine whether to apply sharpening, depending on your input type and quality. When you set Post temporal sharpening to Enabled, specify how much sharpening is applied using Post temporal sharpening strength. Set Post temporal sharpening to Disabled to not apply sharpening. */
	export enum NoiseFilterPostTemporalSharpening { DISABLED = 0, ENABLED = 1, AUTO = 2 }


	/** Use Post temporal sharpening strength to define the amount of sharpening the transcoder applies to your output. Set Post temporal sharpening strength to Low, Medium, or High to indicate the amount of sharpening. */
	export enum NoiseFilterPostTemporalSharpeningStrength { LOW = 0, MEDIUM = 1, HIGH = 2 }


	/** If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output. */
	export interface PartnerWatermarking {
		NexguardFileMarkerSettings?: NexGuardFileMarkerSettings;
	}

	/** If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output. */
	export interface PartnerWatermarkingFormProperties {
	}
	export function CreatePartnerWatermarkingFormGroup() {
		return new FormGroup<PartnerWatermarkingFormProperties>({
		});

	}


	/** For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows. */
	export interface NexGuardFileMarkerSettings {
		License?: string;
		Payload?: number | null;
		Preset?: string;
		Strength?: WatermarkingStrength;
	}

	/** For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows. */
	export interface NexGuardFileMarkerSettingsFormProperties {
		License: FormControl<string | null | undefined>,
		Payload: FormControl<number | null | undefined>,
		Preset: FormControl<string | null | undefined>,
		Strength: FormControl<WatermarkingStrength | null | undefined>,
	}
	export function CreateNexGuardFileMarkerSettingsFormGroup() {
		return new FormGroup<NexGuardFileMarkerSettingsFormProperties>({
			License: new FormControl<string | null | undefined>(undefined),
			Payload: new FormControl<number | null | undefined>(undefined),
			Preset: new FormControl<string | null | undefined>(undefined),
			Strength: new FormControl<WatermarkingStrength | null | undefined>(undefined),
		});

	}


	/** Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value. */
	export enum WatermarkingStrength { LIGHTEST = 0, LIGHTER = 1, DEFAULT = 2, STRONGER = 3, STRONGEST = 4 }


	/** Settings for burning the output timecode and specified prefix into the output. */
	export interface TimecodeBurnin {
		FontSize?: number | null;
		Position?: TimecodeBurninPosition;
		Prefix?: string;
	}

	/** Settings for burning the output timecode and specified prefix into the output. */
	export interface TimecodeBurninFormProperties {
		FontSize: FormControl<number | null | undefined>,
		Position: FormControl<TimecodeBurninPosition | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateTimecodeBurninFormGroup() {
		return new FormGroup<TimecodeBurninFormProperties>({
			FontSize: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<TimecodeBurninPosition | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use Position under Timecode burn-in to specify the location the burned-in timecode on output video. */
	export enum TimecodeBurninPosition { TOP_CENTER = 0, TOP_LEFT = 1, TOP_RIGHT = 2, MIDDLE_LEFT = 3, MIDDLE_CENTER = 4, MIDDLE_RIGHT = 5, BOTTOM_LEFT = 6, BOTTOM_CENTER = 7, BOTTOM_RIGHT = 8 }


	/** These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping. */
	export interface TimecodeConfig {
		Anchor?: string;
		Source?: InputTimecodeSource;
		Start?: string;
		TimestampOffset?: string;
	}

	/** These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping. */
	export interface TimecodeConfigFormProperties {
		Anchor: FormControl<string | null | undefined>,
		Source: FormControl<InputTimecodeSource | null | undefined>,
		Start: FormControl<string | null | undefined>,
		TimestampOffset: FormControl<string | null | undefined>,
	}
	export function CreateTimecodeConfigFormGroup() {
		return new FormGroup<TimecodeConfigFormProperties>({
			Anchor: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<InputTimecodeSource | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
			TimestampOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Insert user-defined custom ID3 metadata at timecodes that you specify. In each output that you want to include this metadata, you must set ID3 metadata to Passthrough. */
	export interface TimedMetadataInsertion {
		Id3Insertions?: Array<Id3Insertion>;
	}

	/** Insert user-defined custom ID3 metadata at timecodes that you specify. In each output that you want to include this metadata, you must set ID3 metadata to Passthrough. */
	export interface TimedMetadataInsertionFormProperties {
	}
	export function CreateTimedMetadataInsertionFormGroup() {
		return new FormGroup<TimedMetadataInsertionFormProperties>({
		});

	}


	/** To insert ID3 tags in your output, specify two values. Use ID3 tag to specify the base 64 encoded string and use Timecode to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion. */
	export interface Id3Insertion {
		Id3?: string;
		Timecode?: string;
	}

	/** To insert ID3 tags in your output, specify two values. Use ID3 tag to specify the base 64 encoded string and use Timecode to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion. */
	export interface Id3InsertionFormProperties {
		Id3: FormControl<string | null | undefined>,
		Timecode: FormControl<string | null | undefined>,
	}
	export function CreateId3InsertionFormGroup() {
		return new FormGroup<Id3InsertionFormProperties>({
			Id3: new FormControl<string | null | undefined>(undefined),
			Timecode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR. */
	export enum JobStatus { SUBMITTED = 0, PROGRESSING = 1, COMPLETE = 2, CANCELED = 3, ERROR = 4 }


	/** Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
	export enum StatusUpdateInterval { SECONDS_10 = 0, SECONDS_12 = 1, SECONDS_15 = 2, SECONDS_20 = 3, SECONDS_30 = 4, SECONDS_60 = 5, SECONDS_120 = 6, SECONDS_180 = 7, SECONDS_240 = 8, SECONDS_300 = 9, SECONDS_360 = 10, SECONDS_420 = 11, SECONDS_480 = 12, SECONDS_540 = 13, SECONDS_600 = 14 }


	/** Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds. */
	export interface Timing {
		FinishTime?: Date;
		StartTime?: Date;
		SubmitTime?: Date;
	}

	/** Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds. */
	export interface TimingFormProperties {
		FinishTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimingFormGroup() {
		return new FormGroup<TimingFormProperties>({
			FinishTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}


	/** Contains any warning codes and their count for the job. */
	export interface WarningGroup {

		/** Required */
		Code: number;

		/** Required */
		Count: number;
	}

	/** Contains any warning codes and their count for the job. */
	export interface WarningGroupFormProperties {

		/** Required */
		Code: FormControl<number | null | undefined>,

		/** Required */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateWarningGroupFormGroup() {
		return new FormGroup<WarningGroupFormProperties>({
			Code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobTemplateResponse {
		JobTemplate?: JobTemplate;
	}
	export interface CreateJobTemplateResponseFormProperties {
	}
	export function CreateCreateJobTemplateResponseFormGroup() {
		return new FormGroup<CreateJobTemplateResponseFormProperties>({
		});

	}


	/** A job template is a pre-made set of encoding instructions that you can use to quickly create a job. */
	export interface JobTemplate {
		AccelerationSettings?: AccelerationSettings;
		Arn?: string;
		Category?: string;
		CreatedAt?: Date;
		Description?: string;
		HopDestinations?: Array<HopDestination>;
		LastUpdated?: Date;

		/** Required */
		Name: string;
		Priority?: number | null;
		Queue?: string;

		/** Required */
		Settings: JobTemplateSettings;
		StatusUpdateInterval?: StatusUpdateInterval;
		Type?: Type;
	}

	/** A job template is a pre-made set of encoding instructions that you can use to quickly create a job. */
	export interface JobTemplateFormProperties {
		Arn: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Queue: FormControl<string | null | undefined>,
		StatusUpdateInterval: FormControl<StatusUpdateInterval | null | undefined>,
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateJobTemplateFormGroup() {
		return new FormGroup<JobTemplateFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined),
			Queue: new FormControl<string | null | undefined>(undefined),
			StatusUpdateInterval: new FormControl<StatusUpdateInterval | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}


	/** JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
	export interface JobTemplateSettings {
		AdAvailOffset?: number | null;
		AvailBlanking?: AvailBlanking;
		Esam?: EsamSettings;
		ExtendedDataServices?: ExtendedDataServices;
		Inputs?: Array<InputTemplate>;
		KantarWatermark?: KantarWatermarkSettings;
		MotionImageInserter?: MotionImageInserter;
		NielsenConfiguration?: NielsenConfiguration;
		NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;
		OutputGroups?: Array<OutputGroup>;
		TimecodeConfig?: TimecodeConfig;
		TimedMetadataInsertion?: TimedMetadataInsertion;
	}

	/** JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
	export interface JobTemplateSettingsFormProperties {
		AdAvailOffset: FormControl<number | null | undefined>,
	}
	export function CreateJobTemplateSettingsFormGroup() {
		return new FormGroup<JobTemplateSettingsFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specified video input in a template. */
	export interface InputTemplate {
		AdvancedInputFilter?: AdvancedInputFilter;
		AdvancedInputFilterSettings?: AdvancedInputFilterSettings;
		AudioSelectorGroups?: __mapOfAudioSelectorGroup;
		AudioSelectors?: __mapOfAudioSelector;
		CaptionSelectors?: __mapOfCaptionSelector;
		Crop?: Rectangle;
		DeblockFilter?: AdvancedInputFilter;
		DenoiseFilter?: AdvancedInputFilter;
		DolbyVisionMetadataXml?: string;
		FilterEnable?: InputFilterEnable;
		FilterStrength?: number | null;
		ImageInserter?: ImageInserter;
		InputClippings?: Array<InputClipping>;
		InputScanType?: InputScanType;
		Position?: Rectangle;
		ProgramNumber?: number | null;
		PsiControl?: InputPsiControl;
		TimecodeSource?: InputTimecodeSource;
		TimecodeStart?: string;
		VideoSelector?: VideoSelector;
	}

	/** Specified video input in a template. */
	export interface InputTemplateFormProperties {
		AdvancedInputFilter: FormControl<AdvancedInputFilter | null | undefined>,
		DeblockFilter: FormControl<AdvancedInputFilter | null | undefined>,
		DenoiseFilter: FormControl<AdvancedInputFilter | null | undefined>,
		DolbyVisionMetadataXml: FormControl<string | null | undefined>,
		FilterEnable: FormControl<InputFilterEnable | null | undefined>,
		FilterStrength: FormControl<number | null | undefined>,
		InputScanType: FormControl<InputScanType | null | undefined>,
		ProgramNumber: FormControl<number | null | undefined>,
		PsiControl: FormControl<InputPsiControl | null | undefined>,
		TimecodeSource: FormControl<InputTimecodeSource | null | undefined>,
		TimecodeStart: FormControl<string | null | undefined>,
	}
	export function CreateInputTemplateFormGroup() {
		return new FormGroup<InputTemplateFormProperties>({
			AdvancedInputFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			DeblockFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			DenoiseFilter: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			DolbyVisionMetadataXml: new FormControl<string | null | undefined>(undefined),
			FilterEnable: new FormControl<InputFilterEnable | null | undefined>(undefined),
			FilterStrength: new FormControl<number | null | undefined>(undefined),
			InputScanType: new FormControl<InputScanType | null | undefined>(undefined),
			ProgramNumber: new FormControl<number | null | undefined>(undefined),
			PsiControl: new FormControl<InputPsiControl | null | undefined>(undefined),
			TimecodeSource: new FormControl<InputTimecodeSource | null | undefined>(undefined),
			TimecodeStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Type { SYSTEM = 0, CUSTOM = 1 }

	export interface CreatePresetResponse {
		Preset?: Preset;
	}
	export interface CreatePresetResponseFormProperties {
	}
	export function CreateCreatePresetResponseFormGroup() {
		return new FormGroup<CreatePresetResponseFormProperties>({
		});

	}


	/** A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process. */
	export interface Preset {
		Arn?: string;
		Category?: string;
		CreatedAt?: Date;
		Description?: string;
		LastUpdated?: Date;

		/** Required */
		Name: string;

		/** Required */
		Settings: PresetSettings;
		Type?: Type;
	}

	/** A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process. */
	export interface PresetFormProperties {
		Arn: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<Type | null | undefined>,
	}
	export function CreatePresetFormGroup() {
		return new FormGroup<PresetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}


	/** Settings for preset */
	export interface PresetSettings {
		AudioDescriptions?: Array<AudioDescription>;
		CaptionDescriptions?: Array<CaptionDescriptionPreset>;
		ContainerSettings?: ContainerSettings;
		VideoDescription?: VideoDescription;
	}

	/** Settings for preset */
	export interface PresetSettingsFormProperties {
	}
	export function CreatePresetSettingsFormGroup() {
		return new FormGroup<PresetSettingsFormProperties>({
		});

	}


	/** Caption Description for preset */
	export interface CaptionDescriptionPreset {
		CustomLanguageCode?: string;
		DestinationSettings?: CaptionDestinationSettings;
		LanguageCode?: LanguageCode;
		LanguageDescription?: string;
	}

	/** Caption Description for preset */
	export interface CaptionDescriptionPresetFormProperties {
		CustomLanguageCode: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		LanguageDescription: FormControl<string | null | undefined>,
	}
	export function CreateCaptionDescriptionPresetFormGroup() {
		return new FormGroup<CaptionDescriptionPresetFormProperties>({
			CustomLanguageCode: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			LanguageDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateQueueResponse {
		Queue?: Queue;
	}
	export interface CreateQueueResponseFormProperties {
	}
	export function CreateCreateQueueResponseFormGroup() {
		return new FormGroup<CreateQueueResponseFormProperties>({
		});

	}


	/** You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html. */
	export interface Queue {
		Arn?: string;
		CreatedAt?: Date;
		Description?: string;
		LastUpdated?: Date;

		/** Required */
		Name: string;
		PricingPlan?: PricingPlan;
		ProgressingJobsCount?: number | null;
		ReservationPlan?: ReservationPlan;
		Status?: QueueStatus;
		SubmittedJobsCount?: number | null;
		Type?: Type;
	}

	/** You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html. */
	export interface QueueFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		ProgressingJobsCount: FormControl<number | null | undefined>,
		Status: FormControl<QueueStatus | null | undefined>,
		SubmittedJobsCount: FormControl<number | null | undefined>,
		Type: FormControl<Type | null | undefined>,
	}
	export function CreateQueueFormGroup() {
		return new FormGroup<QueueFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			ProgressingJobsCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<QueueStatus | null | undefined>(undefined),
			SubmittedJobsCount: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
		});

	}


	/** Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. */
	export enum PricingPlan { ON_DEMAND = 0, RESERVED = 1 }


	/** Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
	export interface ReservationPlan {
		Commitment?: Commitment;
		ExpiresAt?: Date;
		PurchasedAt?: Date;
		RenewalType?: RenewalType;
		ReservedSlots?: number | null;
		Status?: ReservationPlanStatus;
	}

	/** Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
	export interface ReservationPlanFormProperties {
		Commitment: FormControl<Commitment | null | undefined>,
		ExpiresAt: FormControl<Date | null | undefined>,
		PurchasedAt: FormControl<Date | null | undefined>,
		RenewalType: FormControl<RenewalType | null | undefined>,
		ReservedSlots: FormControl<number | null | undefined>,
		Status: FormControl<ReservationPlanStatus | null | undefined>,
	}
	export function CreateReservationPlanFormGroup() {
		return new FormGroup<ReservationPlanFormProperties>({
			Commitment: new FormControl<Commitment | null | undefined>(undefined),
			ExpiresAt: new FormControl<Date | null | undefined>(undefined),
			PurchasedAt: new FormControl<Date | null | undefined>(undefined),
			RenewalType: new FormControl<RenewalType | null | undefined>(undefined),
			ReservedSlots: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ReservationPlanStatus | null | undefined>(undefined),
		});

	}


	/** The length of the term of your reserved queue pricing plan commitment. */
	export enum Commitment { ONE_YEAR = 0 }


	/** Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. */
	export enum RenewalType { AUTO_RENEW = 0, EXPIRE = 1 }


	/** Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED. */
	export enum ReservationPlanStatus { ACTIVE = 0, EXPIRED = 1 }


	/** Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
	export enum QueueStatus { ACTIVE = 0, PAUSED = 1 }

	export interface DeleteJobTemplateResponse {
	}
	export interface DeleteJobTemplateResponseFormProperties {
	}
	export function CreateDeleteJobTemplateResponseFormGroup() {
		return new FormGroup<DeleteJobTemplateResponseFormProperties>({
		});

	}

	export interface DeletePolicyResponse {
	}
	export interface DeletePolicyResponseFormProperties {
	}
	export function CreateDeletePolicyResponseFormGroup() {
		return new FormGroup<DeletePolicyResponseFormProperties>({
		});

	}

	export interface DeletePresetResponse {
	}
	export interface DeletePresetResponseFormProperties {
	}
	export function CreateDeletePresetResponseFormGroup() {
		return new FormGroup<DeletePresetResponseFormProperties>({
		});

	}

	export interface DeleteQueueResponse {
	}
	export interface DeleteQueueResponseFormProperties {
	}
	export function CreateDeleteQueueResponseFormGroup() {
		return new FormGroup<DeleteQueueResponseFormProperties>({
		});

	}

	export interface DescribeEndpointsResponse {
		Endpoints?: Array<Endpoint>;
		NextToken?: string;
	}
	export interface DescribeEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointsResponseFormGroup() {
		return new FormGroup<DescribeEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an account-specific API endpoint. */
	export interface Endpoint {
		Url?: string;
	}

	/** Describes an account-specific API endpoint. */
	export interface EndpointFormProperties {
		Url: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateCertificateResponse {
	}
	export interface DisassociateCertificateResponseFormProperties {
	}
	export function CreateDisassociateCertificateResponseFormGroup() {
		return new FormGroup<DisassociateCertificateResponseFormProperties>({
		});

	}

	export interface GetJobResponse {
		Job?: Job;
	}
	export interface GetJobResponseFormProperties {
	}
	export function CreateGetJobResponseFormGroup() {
		return new FormGroup<GetJobResponseFormProperties>({
		});

	}

	export interface GetJobTemplateResponse {
		JobTemplate?: JobTemplate;
	}
	export interface GetJobTemplateResponseFormProperties {
	}
	export function CreateGetJobTemplateResponseFormGroup() {
		return new FormGroup<GetJobTemplateResponseFormProperties>({
		});

	}

	export interface GetPolicyResponse {
		Policy?: Policy;
	}
	export interface GetPolicyResponseFormProperties {
	}
	export function CreateGetPolicyResponseFormGroup() {
		return new FormGroup<GetPolicyResponseFormProperties>({
		});

	}


	/** A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html */
	export interface Policy {
		HttpInputs?: InputPolicy;
		HttpsInputs?: InputPolicy;
		S3Inputs?: InputPolicy;
	}

	/** A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html */
	export interface PolicyFormProperties {
		HttpInputs: FormControl<InputPolicy | null | undefined>,
		HttpsInputs: FormControl<InputPolicy | null | undefined>,
		S3Inputs: FormControl<InputPolicy | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			HttpInputs: new FormControl<InputPolicy | null | undefined>(undefined),
			HttpsInputs: new FormControl<InputPolicy | null | undefined>(undefined),
			S3Inputs: new FormControl<InputPolicy | null | undefined>(undefined),
		});

	}


	/** An input policy allows or disallows a job you submit to run based on the conditions that you specify. */
	export enum InputPolicy { ALLOWED = 0, DISALLOWED = 1 }

	export interface GetPresetResponse {
		Preset?: Preset;
	}
	export interface GetPresetResponseFormProperties {
	}
	export function CreateGetPresetResponseFormGroup() {
		return new FormGroup<GetPresetResponseFormProperties>({
		});

	}

	export interface GetQueueResponse {
		Queue?: Queue;
	}
	export interface GetQueueResponseFormProperties {
	}
	export function CreateGetQueueResponseFormGroup() {
		return new FormGroup<GetQueueResponseFormProperties>({
		});

	}

	export interface ListJobTemplatesResponse {
		JobTemplates?: Array<JobTemplate>;
		NextToken?: string;
	}
	export interface ListJobTemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobTemplatesResponseFormGroup() {
		return new FormGroup<ListJobTemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJobsResponse {
		Jobs?: Array<Job>;
		NextToken?: string;
	}
	export interface ListJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPresetsResponse {
		NextToken?: string;
		Presets?: Array<Preset>;
	}
	export interface ListPresetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPresetsResponseFormGroup() {
		return new FormGroup<ListPresetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListQueuesResponse {
		NextToken?: string;
		Queues?: Array<Queue>;
	}
	export interface ListQueuesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueuesResponseFormGroup() {
		return new FormGroup<ListQueuesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		ResourceTags?: ResourceTags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource. */
	export interface ResourceTags {
		Arn?: string;
		Tags?: __mapOf__string;
	}

	/** The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource. */
	export interface ResourceTagsFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagsFormGroup() {
		return new FormGroup<ResourceTagsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPolicyResponse {
		Policy?: Policy;
	}
	export interface PutPolicyResponseFormProperties {
	}
	export function CreatePutPolicyResponseFormGroup() {
		return new FormGroup<PutPolicyResponseFormProperties>({
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

	export interface UpdateJobTemplateResponse {
		JobTemplate?: JobTemplate;
	}
	export interface UpdateJobTemplateResponseFormProperties {
	}
	export function CreateUpdateJobTemplateResponseFormGroup() {
		return new FormGroup<UpdateJobTemplateResponseFormProperties>({
		});

	}

	export interface UpdatePresetResponse {
		Preset?: Preset;
	}
	export interface UpdatePresetResponseFormProperties {
	}
	export function CreateUpdatePresetResponseFormGroup() {
		return new FormGroup<UpdatePresetResponseFormProperties>({
		});

	}

	export interface UpdateQueueResponse {
		Queue?: Queue;
	}
	export interface UpdateQueueResponseFormProperties {
	}
	export function CreateUpdateQueueResponseFormGroup() {
		return new FormGroup<UpdateQueueResponseFormProperties>({
		});

	}


	/** Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf. */
	export enum Ac3DynamicRangeCompressionRf { FILM_STANDARD = 0, FILM_LIGHT = 1, MUSIC_STANDARD = 2, MUSIC_LIGHT = 3, SPEECH = 4, NONE = 5 }


	/** Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode. */
	export enum Ac3LfeFilter { ENABLED = 0, DISABLED = 1 }


	/** When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used. */
	export enum Ac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Add texture and detail to areas of your input video content that were lost after applying the Advanced input filter. To adaptively add texture and reduce softness: Choose Enabled. To not add any texture: Keep the default value, Disabled. We recommend that you choose Disabled for input video content that doesn't have texture, including screen recordings, computer graphics, or cartoons. */
	export enum AdvancedInputFilterAddTexture { ENABLED = 0, DISABLED = 1 }


	/** Set to ENABLED to force a rendition to be included. */
	export enum RequiredFlag { ENABLED = 0, DISABLED = 1 }


	/** Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
	export enum AncillaryConvert608To708 { UPCONVERT = 0, DISABLED = 1 }


	/** By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting. */
	export enum AncillaryTerminateCaptions { END_OF_INPUT = 0, DISABLED = 1 }


	/** Settings for ancillary captions source. */
	export interface AncillarySourceSettings {
		Convert608To708?: AncillaryConvert608To708;
		SourceAncillaryChannelNumber?: number | null;
		TerminateCaptions?: AncillaryTerminateCaptions;
	}

	/** Settings for ancillary captions source. */
	export interface AncillarySourceSettingsFormProperties {
		Convert608To708: FormControl<AncillaryConvert608To708 | null | undefined>,
		SourceAncillaryChannelNumber: FormControl<number | null | undefined>,
		TerminateCaptions: FormControl<AncillaryTerminateCaptions | null | undefined>,
	}
	export function CreateAncillarySourceSettingsFormGroup() {
		return new FormGroup<AncillarySourceSettingsFormProperties>({
			Convert608To708: new FormControl<AncillaryConvert608To708 | null | undefined>(undefined),
			SourceAncillaryChannelNumber: new FormControl<number | null | undefined>(undefined),
			TerminateCaptions: new FormControl<AncillaryTerminateCaptions | null | undefined>(undefined),
		});

	}


	/** The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting. */
	export enum AntiAlias { DISABLED = 0, ENABLED = 1 }

	export interface AssociateCertificateRequest {

		/** Required */
		Arn: string;
	}
	export interface AssociateCertificateRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateCertificateRequestFormGroup() {
		return new FormGroup<AssociateCertificateRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio. */
	export enum AudioDefaultSelection { DEFAULT = 0, NOT_DEFAULT = 1 }


	/** Specify which source for language code takes precedence for this audio track. When you choose Follow input, the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code. When you choose Use configured, the service uses the language code that you specify. */
	export enum AudioLanguageCodeControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** Apply audio timing corrections to help synchronize audio and video in your output. To apply timing corrections, your input must meet the following requirements: * Container: MP4, or MOV, with an accurate time-to-sample (STTS) table. * Audio track: AAC. Choose from the following audio timing correction settings: * Disabled (Default): Apply no correction. * Auto: Recommended for most inputs. MediaConvert analyzes the audio timing in your input and determines which correction setting to use, if needed. * Track: Adjust the duration of each audio frame by a constant amount to align the audio track length with STTS duration. Track-level correction does not affect pitch, and is recommended for tonal audio content such as music. * Frame: Adjust the duration of each audio frame by a variable amount to align audio frames with STTS timestamps. No corrections are made to already-aligned frames. Frame-level correction may affect the pitch of corrected frames, and is recommended for atonal audio content such as speech or percussion. */
	export enum AudioDurationCorrection { DISABLED = 0, AUTO = 1, TRACK = 2, FRAME = 3 }


	/** Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead. */
	export interface HlsRenditionGroupSettings {
		RenditionGroupId?: string;
		RenditionLanguageCode?: LanguageCode;
		RenditionName?: string;
	}

	/** Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead. */
	export interface HlsRenditionGroupSettingsFormProperties {
		RenditionGroupId: FormControl<string | null | undefined>,
		RenditionLanguageCode: FormControl<LanguageCode | null | undefined>,
		RenditionName: FormControl<string | null | undefined>,
	}
	export function CreateHlsRenditionGroupSettingsFormGroup() {
		return new FormGroup<HlsRenditionGroupSettingsFormProperties>({
			RenditionGroupId: new FormControl<string | null | undefined>(undefined),
			RenditionLanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			RenditionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the type of the audio selector. */
	export enum AudioSelectorType { PID = 0, TRACK = 1, LANGUAGE_CODE = 2, HLS_RENDITION_GROUP = 3 }


	/** Use Audio selectors to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input. */
	export interface AudioSelector {
		AudioDurationCorrection?: AudioDurationCorrection;
		CustomLanguageCode?: string;
		DefaultSelection?: AudioDefaultSelection;
		ExternalAudioFileInput?: string;
		HlsRenditionGroupSettings?: HlsRenditionGroupSettings;
		LanguageCode?: LanguageCode;
		Offset?: number | null;
		Pids?: Array<number> | null;
		ProgramSelection?: number | null;
		RemixSettings?: RemixSettings;
		SelectorType?: AudioSelectorType;
		Tracks?: Array<number> | null;
	}

	/** Use Audio selectors to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input. */
	export interface AudioSelectorFormProperties {
		AudioDurationCorrection: FormControl<AudioDurationCorrection | null | undefined>,
		CustomLanguageCode: FormControl<string | null | undefined>,
		DefaultSelection: FormControl<AudioDefaultSelection | null | undefined>,
		ExternalAudioFileInput: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		Offset: FormControl<number | null | undefined>,
		ProgramSelection: FormControl<number | null | undefined>,
		SelectorType: FormControl<AudioSelectorType | null | undefined>,
	}
	export function CreateAudioSelectorFormGroup() {
		return new FormGroup<AudioSelectorFormProperties>({
			AudioDurationCorrection: new FormControl<AudioDurationCorrection | null | undefined>(undefined),
			CustomLanguageCode: new FormControl<string | null | undefined>(undefined),
			DefaultSelection: new FormControl<AudioDefaultSelection | null | undefined>(undefined),
			ExternalAudioFileInput: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			Offset: new FormControl<number | null | undefined>(undefined),
			ProgramSelection: new FormControl<number | null | undefined>(undefined),
			SelectorType: new FormControl<AudioSelectorType | null | undefined>(undefined),
		});

	}


	/** Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab. Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group. */
	export interface AudioSelectorGroup {
		AudioSelectorNames?: Array<string>;
	}

	/** Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab. Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group. */
	export interface AudioSelectorGroupFormProperties {
	}
	export function CreateAudioSelectorGroupFormGroup() {
		return new FormGroup<AudioSelectorGroupFormProperties>({
		});

	}


	/** Keep the default value, Enabled, to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. */
	export enum Av1SpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum AvcIntraFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum AvcIntraFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. */
	export enum AvcIntraSlowPal { DISABLED = 0, ENABLED = 1 }


	/** Set Style passthrough to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use default settings: white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings. */
	export enum BurnInSubtitleStylePassthrough { ENABLED = 0, DISABLED = 1 }


	/** Specify the color of the shadow cast by the captions. Leave Shadow color blank and set Style passthrough to enabled to use the shadow color data from your input captions, if present. */
	export enum BurninSubtitleShadowColor { NONE = 0, BLACK = 1, WHITE = 2, AUTO = 3 }

	export interface CancelJobRequest {
	}
	export interface CancelJobRequestFormProperties {
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
		});

	}


	/** If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings. */
	export interface CaptionSourceSettings {
		AncillarySourceSettings?: AncillarySourceSettings;
		DvbSubSourceSettings?: DvbSubSourceSettings;
		EmbeddedSourceSettings?: EmbeddedSourceSettings;
		FileSourceSettings?: FileSourceSettings;
		SourceType?: CaptionSourceType;
		TeletextSourceSettings?: TeletextSourceSettings;
		TrackSourceSettings?: TrackSourceSettings;
		WebvttHlsSourceSettings?: WebvttHlsSourceSettings;
	}

	/** If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings. */
	export interface CaptionSourceSettingsFormProperties {
		SourceType: FormControl<CaptionSourceType | null | undefined>,
	}
	export function CreateCaptionSourceSettingsFormGroup() {
		return new FormGroup<CaptionSourceSettingsFormProperties>({
			SourceType: new FormControl<CaptionSourceType | null | undefined>(undefined),
		});

	}


	/** DVB Sub Source Settings */
	export interface DvbSubSourceSettings {
		Pid?: number | null;
	}

	/** DVB Sub Source Settings */
	export interface DvbSubSourceSettingsFormProperties {
		Pid: FormControl<number | null | undefined>,
	}
	export function CreateDvbSubSourceSettingsFormGroup() {
		return new FormGroup<DvbSubSourceSettingsFormProperties>({
			Pid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings for embedded captions Source */
	export interface EmbeddedSourceSettings {
		Convert608To708?: AncillaryConvert608To708;
		Source608ChannelNumber?: number | null;
		Source608TrackNumber?: number | null;
		TerminateCaptions?: AncillaryTerminateCaptions;
	}

	/** Settings for embedded captions Source */
	export interface EmbeddedSourceSettingsFormProperties {
		Convert608To708: FormControl<AncillaryConvert608To708 | null | undefined>,
		Source608ChannelNumber: FormControl<number | null | undefined>,
		Source608TrackNumber: FormControl<number | null | undefined>,
		TerminateCaptions: FormControl<AncillaryTerminateCaptions | null | undefined>,
	}
	export function CreateEmbeddedSourceSettingsFormGroup() {
		return new FormGroup<EmbeddedSourceSettingsFormProperties>({
			Convert608To708: new FormControl<AncillaryConvert608To708 | null | undefined>(undefined),
			Source608ChannelNumber: new FormControl<number | null | undefined>(undefined),
			Source608TrackNumber: new FormControl<number | null | undefined>(undefined),
			TerminateCaptions: new FormControl<AncillaryTerminateCaptions | null | undefined>(undefined),
		});

	}


	/** If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings. */
	export interface FileSourceSettings {
		Convert608To708?: AncillaryConvert608To708;
		ConvertPaintToPop?: AdvancedInputFilter;
		Framerate?: CaptionSourceFramerate;
		SourceFile?: string;
		TimeDelta?: number | null;
		TimeDeltaUnits?: FileSourceTimeDeltaUnits;
	}

	/** If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings. */
	export interface FileSourceSettingsFormProperties {
		Convert608To708: FormControl<AncillaryConvert608To708 | null | undefined>,
		ConvertPaintToPop: FormControl<AdvancedInputFilter | null | undefined>,
		SourceFile: FormControl<string | null | undefined>,
		TimeDelta: FormControl<number | null | undefined>,
		TimeDeltaUnits: FormControl<FileSourceTimeDeltaUnits | null | undefined>,
	}
	export function CreateFileSourceSettingsFormGroup() {
		return new FormGroup<FileSourceSettingsFormProperties>({
			Convert608To708: new FormControl<AncillaryConvert608To708 | null | undefined>(undefined),
			ConvertPaintToPop: new FormControl<AdvancedInputFilter | null | undefined>(undefined),
			SourceFile: new FormControl<string | null | undefined>(undefined),
			TimeDelta: new FormControl<number | null | undefined>(undefined),
			TimeDeltaUnits: new FormControl<FileSourceTimeDeltaUnits | null | undefined>(undefined),
		});

	}


	/** Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps. */
	export interface CaptionSourceFramerate {
		FramerateDenominator?: number | null;
		FramerateNumerator?: number | null;
	}

	/** Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps. */
	export interface CaptionSourceFramerateFormProperties {
		FramerateDenominator: FormControl<number | null | undefined>,
		FramerateNumerator: FormControl<number | null | undefined>,
	}
	export function CreateCaptionSourceFramerateFormGroup() {
		return new FormGroup<CaptionSourceFramerateFormProperties>({
			FramerateDenominator: new FormControl<number | null | undefined>(undefined),
			FramerateNumerator: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** When you use the setting Time delta to adjust the sync between your sidecar captions and your video, use this setting to specify the units for the delta that you specify. When you don't specify a value for Time delta units, MediaConvert uses seconds by default. */
	export enum FileSourceTimeDeltaUnits { SECONDS = 0, MILLISECONDS = 1 }


	/** Use Source to identify the format of your input captions. The service cannot auto-detect caption format. */
	export enum CaptionSourceType { ANCILLARY = 0, DVB_SUB = 1, EMBEDDED = 2, SCTE20 = 3, SCC = 4, TTML = 5, STL = 6, SRT = 7, SMI = 8, SMPTE_TT = 9, TELETEXT = 10, NULL_SOURCE = 11, IMSC = 12, WEBVTT = 13 }


	/** Settings specific to Teletext caption sources, including Page number. */
	export interface TeletextSourceSettings {
		PageNumber?: string;
	}

	/** Settings specific to Teletext caption sources, including Page number. */
	export interface TeletextSourceSettingsFormProperties {
		PageNumber: FormControl<string | null | undefined>,
	}
	export function CreateTeletextSourceSettingsFormGroup() {
		return new FormGroup<TeletextSourceSettingsFormProperties>({
			PageNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings. */
	export interface TrackSourceSettings {
		TrackNumber?: number | null;
	}

	/** Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings. */
	export interface TrackSourceSettingsFormProperties {
		TrackNumber: FormControl<number | null | undefined>,
	}
	export function CreateTrackSourceSettingsFormGroup() {
		return new FormGroup<TrackSourceSettingsFormProperties>({
			TrackNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings. */
	export interface WebvttHlsSourceSettings {
		RenditionGroupId?: string;
		RenditionLanguageCode?: LanguageCode;
		RenditionName?: string;
	}

	/** Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings. */
	export interface WebvttHlsSourceSettingsFormProperties {
		RenditionGroupId: FormControl<string | null | undefined>,
		RenditionLanguageCode: FormControl<LanguageCode | null | undefined>,
		RenditionName: FormControl<string | null | undefined>,
	}
	export function CreateWebvttHlsSourceSettingsFormGroup() {
		return new FormGroup<WebvttHlsSourceSettingsFormProperties>({
			RenditionGroupId: new FormControl<string | null | undefined>(undefined),
			RenditionLanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			RenditionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 100 captions selectors per input. */
	export interface CaptionSelector {
		CustomLanguageCode?: string;
		LanguageCode?: LanguageCode;
		SourceSettings?: CaptionSourceSettings;
	}

	/** Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 100 captions selectors per input. */
	export interface CaptionSelectorFormProperties {
		CustomLanguageCode: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateCaptionSelectorFormGroup() {
		return new FormGroup<CaptionSelectorFormProperties>({
			CustomLanguageCode: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
		});

	}


	/** Choose the presentation style of your input SCC captions. To use the same presentation style as your input: Keep the default value, Disabled. To convert paint-on captions to pop-on: Choose Enabled. We also recommend that you choose Enabled if you notice additional repeated lines in your output captions. */
	export enum CaptionSourceConvertPaintOnToPopOn { ENABLED = 0, DISABLED = 1 }


	/** Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest. */
	export enum CmafStreamInfResolution { INCLUDE = 0, EXCLUDE = 1 }


	/** When set to ENABLED, a DASH MPD manifest will be generated for this output. */
	export enum CmafWriteDASHManifest { DISABLED = 0, ENABLED = 1 }


	/** When set to ENABLED, an Apple HLS manifest will be generated for this output. */
	export enum CmafWriteHLSManifest { DISABLED = 0, ENABLED = 1 }


	/** When you enable Precise segment duration in DASH manifests, your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element. */
	export enum CmafWriteSegmentTimelineInRepresentation { ENABLED = 0, DISABLED = 1 }


	/** Choose Include to have MediaConvert generate an HLS child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude. */
	export enum CmfcIFrameOnlyManifest { INCLUDE = 0, EXCLUDE = 1 }


	/** To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata to Passthrough. */
	export enum CmfcManifestMetadataSignaling { ENABLED = 0, DISABLED = 1 }


	/** Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None if you don't want those SCTE-35 markers in this output. */
	export enum CmfcScte35Source { PASSTHROUGH = 0, NONE = 1 }


	/** To include ID3 metadata in this output: Set ID3 metadata to Passthrough. Specify this ID3 metadata in Custom ID3 metadata inserter. MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None or leave blank. */
	export enum CmfcTimedMetadata { PASSTHROUGH = 0, NONE = 1 }


	/** Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. */
	export enum SimulateReservedQueue { DISABLED = 0, ENABLED = 1 }

	export interface CreateJobRequest {
		AccelerationSettings?: AccelerationSettings;
		BillingTagsSource?: BillingTagsSource;
		ClientRequestToken?: string;
		HopDestinations?: Array<HopDestination>;
		JobTemplate?: string;
		Priority?: number | null;
		Queue?: string;

		/** Required */
		Role: string;

		/** Required */
		Settings: JobSettings;
		SimulateReservedQueue?: CmafClientCache;
		StatusUpdateInterval?: StatusUpdateInterval;
		Tags?: __mapOf__string;
		UserMetadata?: __mapOf__string;
	}
	export interface CreateJobRequestFormProperties {
		BillingTagsSource: FormControl<BillingTagsSource | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTemplate: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Queue: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,
		SimulateReservedQueue: FormControl<CmafClientCache | null | undefined>,
		StatusUpdateInterval: FormControl<StatusUpdateInterval | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			BillingTagsSource: new FormControl<BillingTagsSource | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTemplate: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Queue: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SimulateReservedQueue: new FormControl<CmafClientCache | null | undefined>(undefined),
			StatusUpdateInterval: new FormControl<StatusUpdateInterval | null | undefined>(undefined),
		});

	}

	export interface CreateJobTemplateRequest {
		AccelerationSettings?: AccelerationSettings;
		Category?: string;
		Description?: string;
		HopDestinations?: Array<HopDestination>;

		/** Required */
		Name: string;
		Priority?: number | null;
		Queue?: string;

		/** Required */
		Settings: JobTemplateSettings;
		StatusUpdateInterval?: StatusUpdateInterval;
		Tags?: __mapOf__string;
	}
	export interface CreateJobTemplateRequestFormProperties {
		Category: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Queue: FormControl<string | null | undefined>,
		StatusUpdateInterval: FormControl<StatusUpdateInterval | null | undefined>,
	}
	export function CreateCreateJobTemplateRequestFormGroup() {
		return new FormGroup<CreateJobTemplateRequestFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined),
			Queue: new FormControl<string | null | undefined>(undefined),
			StatusUpdateInterval: new FormControl<StatusUpdateInterval | null | undefined>(undefined),
		});

	}

	export interface CreatePresetRequest {
		Category?: string;
		Description?: string;

		/** Required */
		Name: string;

		/** Required */
		Settings: PresetSettings;
		Tags?: __mapOf__string;
	}
	export interface CreatePresetRequestFormProperties {
		Category: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresetRequestFormGroup() {
		return new FormGroup<CreatePresetRequestFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
	export interface ReservationPlanSettings {

		/** Required */
		Commitment: Commitment;

		/** Required */
		RenewalType: RenewalType;

		/** Required */
		ReservedSlots: number;
	}

	/** Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
	export interface ReservationPlanSettingsFormProperties {

		/** Required */
		Commitment: FormControl<Commitment | null | undefined>,

		/** Required */
		RenewalType: FormControl<RenewalType | null | undefined>,

		/** Required */
		ReservedSlots: FormControl<number | null | undefined>,
	}
	export function CreateReservationPlanSettingsFormGroup() {
		return new FormGroup<ReservationPlanSettingsFormProperties>({
			Commitment: new FormControl<Commitment | null | undefined>(undefined, [Validators.required]),
			RenewalType: new FormControl<RenewalType | null | undefined>(undefined, [Validators.required]),
			ReservedSlots: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateQueueRequest {
		Description?: string;

		/** Required */
		Name: string;
		PricingPlan?: PricingPlan;
		ReservationPlanSettings?: ReservationPlanSettings;
		Status?: QueueStatus;
		Tags?: __mapOf__string;
	}
	export interface CreateQueueRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		PricingPlan: FormControl<PricingPlan | null | undefined>,
		Status: FormControl<QueueStatus | null | undefined>,
	}
	export function CreateCreateQueueRequestFormGroup() {
		return new FormGroup<CreateQueueRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			Status: new FormControl<QueueStatus | null | undefined>(undefined),
		});

	}


	/** Specify whether MediaConvert generates images for trick play. Keep the default value, None, to not generate any images. Choose Thumbnail to generate tiled thumbnails. Choose Thumbnail and full frame to generate tiled thumbnails and full-resolution images of single frames. MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md */
	export enum DashIsoImageBasedTrickPlay { NONE = 0, THUMBNAIL = 1, THUMBNAIL_AND_FULLFRAME = 2, ADVANCED = 3 }


	/** Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second. */
	export enum DashIsoMpdManifestBandwidthType { AVERAGE = 0, MAX = 1 }


	/** Specify whether your DASH profile is on-demand or main. When you choose Main profile, the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand, the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control to Single file. */
	export enum DashIsoMpdProfile { MAIN_PROFILE = 0, ON_DEMAND_PROFILE = 1 }


	/** Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here. */
	export enum DashIsoPtsOffsetHandlingForBFrames { ZERO_BASED = 0, MATCH_INITIAL_PTS = 1 }


	/** When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created. */
	export enum DashIsoSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }


	/** Specify how you want MediaConvert to determine the segment length. Choose Exact to have the encoder use the exact length that you specify with the setting Segment length. This might result in extra I-frames. Choose Multiple of GOP to have the encoder round up the segment lengths to match the next GOP boundary. */
	export enum DashIsoSegmentLengthControl { EXACT = 0, GOP_MULTIPLE = 1 }


	/** Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers. */
	export enum DashIsoVideoCompositionOffsets { SIGNED = 0, UNSIGNED = 1 }


	/** When you enable Precise segment duration in manifests, your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element. */
	export enum DashIsoWriteSegmentTimelineInRepresentation { ENABLED = 0, DISABLED = 1 }


	/** The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval. */
	export enum DashIsoIntervalCadence { FOLLOW_IFRAME = 0, FOLLOW_CUSTOM = 1 }

	export interface DeleteJobTemplateRequest {
	}
	export interface DeleteJobTemplateRequestFormProperties {
	}
	export function CreateDeleteJobTemplateRequestFormGroup() {
		return new FormGroup<DeleteJobTemplateRequestFormProperties>({
		});

	}

	export interface DeletePolicyRequest {
	}
	export interface DeletePolicyRequestFormProperties {
	}
	export function CreateDeletePolicyRequestFormGroup() {
		return new FormGroup<DeletePolicyRequestFormProperties>({
		});

	}

	export interface DeletePresetRequest {
	}
	export interface DeletePresetRequestFormProperties {
	}
	export function CreateDeletePresetRequestFormGroup() {
		return new FormGroup<DeletePresetRequestFormProperties>({
		});

	}

	export interface DeleteQueueRequest {
	}
	export interface DeleteQueueRequestFormProperties {
	}
	export function CreateDeleteQueueRequestFormGroup() {
		return new FormGroup<DeleteQueueRequestFormProperties>({
		});

	}


	/** Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist. */
	export enum DescribeEndpointsMode { DEFAULT = 0, GET_ONLY = 1 }


	/** DescribeEndpointsRequest */
	export interface DescribeEndpointsRequest {
		MaxResults?: number | null;
		Mode?: DescribeEndpointsMode;
		NextToken?: string;
	}

	/** DescribeEndpointsRequest */
	export interface DescribeEndpointsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		Mode: FormControl<DescribeEndpointsMode | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointsRequestFormGroup() {
		return new FormGroup<DescribeEndpointsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Mode: new FormControl<DescribeEndpointsMode | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateCertificateRequest {
	}
	export interface DisassociateCertificateRequestFormProperties {
	}
	export function CreateDisassociateCertificateRequestFormGroup() {
		return new FormGroup<DisassociateCertificateRequestFormProperties>({
		});

	}


	/** Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion is enabled. */
	export enum DropFrameTimecode { DISABLED = 0, ENABLED = 1 }


	/** Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Within your job settings, all of your DVB-Sub settings must be identical. */
	export enum DvbSubtitleAlignment { CENTERED = 0, LEFT = 1, AUTO = 2 }


	/** Ignore this setting unless Style Passthrough is set to Enabled and Font color set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color for additional font color controls. When you choose White text only, or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text. */
	export enum DvbSubtitleApplyFontColor { WHITE_TEXT_ONLY = 0, ALL_TEXT = 1 }


	/** Specify the color of the rectangle behind the captions. Leave background color blank and set Style passthrough to enabled to use the background color data from your input captions, if present. */
	export enum DvbSubtitleBackgroundColor { NONE = 0, BLACK = 1, WHITE = 2, AUTO = 3 }


	/** Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font to best match, or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input. */
	export enum DvbSubSubtitleFallbackFont { BEST_MATCH = 0, MONOSPACED_SANSSERIF = 1, MONOSPACED_SERIF = 2, PROPORTIONAL_SANSSERIF = 3, PROPORTIONAL_SERIF = 4 }


	/** Specify the color of the captions text. Leave Font color blank and set Style passthrough to enabled to use the font color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical. */
	export enum DvbSubtitleFontColor { WHITE = 0, BLACK = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5, HEX = 6, AUTO = 7 }


	/** Specify font outline color. Leave Outline color blank and set Style passthrough to enabled to use the font outline color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical. */
	export enum DvbSubtitleOutlineColor { BLACK = 0, WHITE = 1, YELLOW = 2, RED = 3, GREEN = 4, BLUE = 5, AUTO = 6 }


	/** Specify the color of the shadow cast by the captions. Leave Shadow color blank and set Style passthrough to enabled to use the shadow color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical. */
	export enum DvbSubtitleShadowColor { NONE = 0, BLACK = 1, WHITE = 2, AUTO = 3 }


	/** Set Style passthrough to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use default settings: white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings. */
	export enum DvbSubtitleStylePassthrough { ENABLED = 0, DISABLED = 1 }


	/** Specify whether the Text spacing in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read for closed captions. Within your job settings, all of your DVB-Sub settings must be identical. */
	export enum DvbSubtitleTeletextSpacing { FIXED_GRID = 0, PROPORTIONAL = 1, AUTO = 2 }


	/** Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis. */
	export enum Eac3AtmosDialogueIntelligence { ENABLED = 0, DISABLED = 1 }


	/** Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the RF operating mode. Default value: Film light Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom for the setting Dynamic range control. Otherwise, MediaConvert ignores Dynamic range compression RF. For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf. */
	export enum Eac3AtmosDynamicRangeCompressionRf { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }


	/** Specify whether MediaConvert should use any dynamic range control metadata from your input file. Keep the default value, Custom, to provide dynamic range control values in your job settings. Choose Follow source to use the metadata from your input. Related settings--Use these settings to specify your dynamic range control values: Dynamic range compression line and Dynamic range compression RF. When you keep the value Custom for Dynamic range control and you don't specify values for the related settings, MediaConvert uses default values for those settings. */
	export enum Eac3AtmosDynamicRangeControl { SPECIFIED = 0, INITIALIZE_FROM_SOURCE = 1 }


	/** Activates a DC highpass filter for all input channels. */
	export enum Eac3DcFilter { ENABLED = 0, DISABLED = 1 }


	/** Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf. */
	export enum Eac3DynamicRangeCompressionLine { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }


	/** Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile. For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf. */
	export enum Eac3DynamicRangeCompressionRf { NONE = 0, FILM_STANDARD = 1, FILM_LIGHT = 2, MUSIC_STANDARD = 3, MUSIC_LIGHT = 4, SPEECH = 5 }


	/** Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode. */
	export enum Eac3LfeFilter { ENABLED = 0, DISABLED = 1 }


	/** When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used. */
	export enum Eac3MetadataControl { FOLLOW_INPUT = 0, USE_CONFIGURED = 1 }


	/** When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels. */
	export enum Eac3SurroundExMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }


	/** When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels. */
	export enum Eac3SurroundMode { NOT_INDICATED = 0, ENABLED = 1, DISABLED = 2 }


	/** Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
	export enum EmbeddedConvert608To708 { UPCONVERT = 0, DISABLED = 1 }


	/** By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting. */
	export enum EmbeddedTerminateCaptions { END_OF_INPUT = 0, DISABLED = 1 }


	/** The action to take on content advisory XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions. */
	export enum VchipAction { PASSTHROUGH = 0, STRIP = 1 }


	/** Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert, MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708. */
	export enum FileSourceConvert608To708 { UPCONVERT = 0, DISABLED = 1 }

	export interface GetJobRequest {
	}
	export interface GetJobRequestFormProperties {
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
		});

	}

	export interface GetJobTemplateRequest {
	}
	export interface GetJobTemplateRequestFormProperties {
	}
	export function CreateGetJobTemplateRequestFormGroup() {
		return new FormGroup<GetJobTemplateRequestFormProperties>({
		});

	}

	export interface GetPolicyRequest {
	}
	export interface GetPolicyRequestFormProperties {
	}
	export function CreateGetPolicyRequestFormGroup() {
		return new FormGroup<GetPolicyRequestFormProperties>({
		});

	}

	export interface GetPresetRequest {
	}
	export interface GetPresetRequestFormProperties {
	}
	export function CreateGetPresetRequestFormGroup() {
		return new FormGroup<GetPresetRequestFormProperties>({
		});

	}

	export interface GetQueueRequest {
	}
	export interface GetQueueRequestFormProperties {
	}
	export function CreateGetQueueRequestFormGroup() {
		return new FormGroup<GetQueueRequestFormProperties>({
		});

	}


	/** Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264FlickerAdaptiveQuantization is Disabled. Change this value to Enabled to reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. To manually enable or disable H264FlickerAdaptiveQuantization, you must set Adaptive quantization to a value other than AUTO. */
	export enum H264FlickerAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum H264FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum H264FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Specify whether to allow B-frames to be referenced by other frame types. To use reference B-frames when your GOP structure has 1 or more B-frames: Leave blank or keep the default value Enabled. We recommend that you choose Enabled to help improve the video quality of your output relative to its bitrate. To not use reference B-frames: Choose Disabled. */
	export enum H264GopBReference { DISABLED = 0, ENABLED = 1 }


	/** Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose. */
	export enum H264InterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/** Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum H264ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Places a PPS header on each encoded picture, even if repeated. */
	export enum H264RepeatPps { DISABLED = 0, ENABLED = 1 }


	/** Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive. */
	export enum H264ScanTypeConversionMode { INTERLACED = 0, INTERLACED_OPTIMIZE = 1 }


	/** Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. */
	export enum H264SlowPal { DISABLED = 0, ENABLED = 1 }


	/** Only use this setting when you change the default value, Auto, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264SpatialAdaptiveQuantization is Enabled. Keep this default value to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to set H264SpatialAdaptiveQuantization to Disabled. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. To manually enable or disable H264SpatialAdaptiveQuantization, you must set Adaptive quantization to a value other than AUTO. */
	export enum H264SpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264TemporalAdaptiveQuantization is Enabled. Keep this default value to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to set H264TemporalAdaptiveQuantization to Disabled. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization. To manually enable or disable H264TemporalAdaptiveQuantization, you must set Adaptive quantization to a value other than AUTO. */
	export enum H264TemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** Inserts timecode for each frame as 4 bytes of an unregistered SEI message. */
	export enum H264UnregisteredSeiTimecode { DISABLED = 0, ENABLED = 1 }


	/** Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF). */
	export enum H265AlternateTransferFunctionSei { DISABLED = 0, ENABLED = 1 }


	/** Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames. */
	export enum H265DynamicSubGop { ADAPTIVE = 0, STATIC = 1 }


	/** Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set adaptiveQuantization to a value other than Off. */
	export enum H265FlickerAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** Use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum H265FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum H265FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Specify whether to allow B-frames to be referenced by other frame types. To use reference B-frames when your GOP structure has 1 or more B-frames: Leave blank or keep the default value Enabled. We recommend that you choose Enabled to help improve the video quality of your output relative to its bitrate. To not use reference B-frames: Choose Disabled. */
	export enum H265GopBReference { DISABLED = 0, ENABLED = 1 }


	/** Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto and and leave GOP size blank. By default, if you don't specify GOP mode control, MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames or Specified, seconds and then provide the GOP length in the related setting GOP size. */
	export enum H265GopSizeUnits { FRAMES = 0, SECONDS = 1, AUTO = 2 }


	/** Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose. */
	export enum H265InterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/** Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum H265ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
	export enum H265QualityTuningLevel { SINGLE_PASS = 0, SINGLE_PASS_HQ = 1, MULTI_PASS_HQ = 2 }


	/** Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR). */
	export enum H265RateControlMode { VBR = 0, CBR = 1, QVBR = 2 }


	/** Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive. */
	export enum H265ScanTypeConversionMode { INTERLACED = 0, INTERLACED_OPTIMIZE = 1 }


	/** Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr. */
	export enum H265SceneChangeDetect { DISABLED = 0, ENABLED = 1, TRANSITION_DETECTION = 2 }


	/** Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. */
	export enum H265SlowPal { DISABLED = 0, ENABLED = 1 }


	/** Keep the default value, Enabled, to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. */
	export enum H265SpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** This field applies only if the Streams > Advanced > Framerate field is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer field and the Streams > Advanced > Interlaced Mode field to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i. */
	export enum H265Telecine { NONE = 0, SOFT = 1, HARD = 2 }


	/** Keep the default value, Enabled, to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization. */
	export enum H265TemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output. */
	export enum H265TemporalIds { DISABLED = 0, ENABLED = 1 }


	/** Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures. */
	export enum H265Tiles { DISABLED = 0, ENABLED = 1 }


	/** Inserts timecode for each frame as 4 bytes of an unregistered SEI message. */
	export enum H265UnregisteredSeiTimecode { DISABLED = 0, ENABLED = 1 }


	/** Ignore this setting unless you are using FairPlay DRM with Verimatrix and you encounter playback issues. Keep the default value, Include, to output audio-only headers. Choose Exclude to remove the audio-only headers from your audio segments. */
	export enum HlsAudioOnlyHeader { INCLUDE = 0, EXCLUDE = 1 }


	/** Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled and control caching in your video distribution set up. For example, use the Cache-Control http header. */
	export enum HlsClientCache { DISABLED = 0, ENABLED = 1 }


	/** Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation. */
	export enum HlsCodecSpecification { RFC_6381 = 0, RFC_4281 = 1 }


	/** Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag, MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don't flag, MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation. */
	export enum HlsDescriptiveVideoServiceFlag { DONT_FLAG = 0, FLAG = 1 }


	/** The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest. */
	export enum HlsInitializationVectorInManifest { INCLUDE = 0, EXCLUDE = 1 }


	/** Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection. */
	export enum HlsOfflineEncrypted { ENABLED = 0, DISABLED = 1 }


	/** Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html. */
	export enum HlsKeyProviderType { SPEKE = 0, STATIC_KEY = 1 }


	/** Specify whether MediaConvert generates images for trick play. Keep the default value, None, to not generate any images. Choose Thumbnail to generate tiled thumbnails. Choose Thumbnail and full frame to generate tiled thumbnails and full-resolution images of single frames. MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md */
	export enum HlsImageBasedTrickPlay { NONE = 0, THUMBNAIL = 1, THUMBNAIL_AND_FULLFRAME = 2, ADVANCED = 3 }


	/** When set to GZIP, compresses HLS playlist. */
	export enum HlsManifestCompression { GZIP = 0, NONE = 1 }


	/** Indicates whether the output manifest should use floating point values for segment duration. */
	export enum HlsManifestDurationFormat { FLOATING_POINT = 0, INTEGER = 1 }


	/** Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset. */
	export enum HlsProgramDateTime { INCLUDE = 0, EXCLUDE = 1 }


	/** Specify whether MediaConvert generates HLS manifests while your job is running or when your job is complete. To generate HLS manifests while your job is running: Choose Enabled. Use if you want to play back your content as soon as it's available. MediaConvert writes the parent and child manifests after the first three media segments are written to your destination S3 bucket. It then writes new updated manifests after each additional segment is written. The parent manifest includes the latest BANDWIDTH and AVERAGE-BANDWIDTH attributes, and child manifests include the latest available media segment. When your job completes, the final child playlists include an EXT-X-ENDLIST tag. To generate HLS manifests only when your job completes: Choose Disabled. */
	export enum HlsProgressiveWriteHlsManifest { ENABLED = 0, DISABLED = 1 }


	/** When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback. */
	export enum HlsSegmentControl { SINGLE_FILE = 0, SEGMENTED_FILES = 1 }


	/** Specify how you want MediaConvert to determine the segment length. Choose Exact to have the encoder use the exact length that you specify with the setting Segment length. This might result in extra I-frames. Choose Multiple of GOP to have the encoder round up the segment lengths to match the next GOP boundary. */
	export enum HlsSegmentLengthControl { EXACT = 0, GOP_MULTIPLE = 1 }


	/** Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest. */
	export enum HlsStreamInfResolution { INCLUDE = 0, EXCLUDE = 1 }


	/** When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration. */
	export enum HlsTargetDurationCompatibilityMode { LEGACY = 0, SPEC_COMPLIANT = 1 }


	/** Choose Include to have MediaConvert generate a child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude. */
	export enum HlsIFrameOnlyManifest { INCLUDE = 0, EXCLUDE = 1 }


	/** The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval. */
	export enum HlsIntervalCadence { FOLLOW_IFRAME = 0, FOLLOW_CUSTOM = 1 }


	/** If the IMSC captions track is intended to provide accessibility for people who are deaf or hard of hearing: Set Accessibility subtitles to Enabled. When you do, MediaConvert adds accessibility attributes to your output HLS or DASH manifest. For HLS manifests, MediaConvert adds the following accessibility attributes under EXT-X-MEDIA for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". For DASH manifests, MediaConvert adds the following in the adaptation set for this track: <Accessibility schemeIdUri="urn:mpeg:dash:role:2011" value="caption"/>. If the captions track is not intended to provide such accessibility: Keep the default value, Disabled. When you do, for DASH manifests, MediaConvert instead adds the following in the adaptation set for this track: <Role schemeIDUri="urn:mpeg:dash:role:2011" value="subtitle"/>. */
	export enum ImscAccessibilitySubs { DISABLED = 0, ENABLED = 1 }


	/** Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions. */
	export enum ImscStylePassthrough { ENABLED = 0, DISABLED = 1 }


	/** Enable Deblock to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs. */
	export enum InputDeblockFilter { ENABLED = 0, DISABLED = 1 }


	/** Enable Denoise to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs. */
	export enum InputDenoiseFilter { ENABLED = 0, DISABLED = 1 }


	/** Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name. */
	export enum JobTemplateListBy { NAME = 0, CREATION_DATE = 1, SYSTEM = 2 }


	/** Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource. */
	export enum Order { ASCENDING = 0, DESCENDING = 1 }

	export interface ListJobTemplatesRequest {
	}
	export interface ListJobTemplatesRequestFormProperties {
	}
	export function CreateListJobTemplatesRequestFormGroup() {
		return new FormGroup<ListJobTemplatesRequestFormProperties>({
		});

	}

	export interface ListJobsRequest {
	}
	export interface ListJobsRequestFormProperties {
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
		});

	}


	/** Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name. */
	export enum PresetListBy { NAME = 0, CREATION_DATE = 1, SYSTEM = 2 }

	export interface ListPresetsRequest {
	}
	export interface ListPresetsRequestFormProperties {
	}
	export function CreateListPresetsRequestFormGroup() {
		return new FormGroup<ListPresetsRequestFormProperties>({
		});

	}


	/** Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date. */
	export enum QueueListBy { NAME = 0, CREATION_DATE = 1 }

	export interface ListQueuesRequest {
	}
	export interface ListQueuesRequestFormProperties {
	}
	export function CreateListQueuesRequestFormGroup() {
		return new FormGroup<ListQueuesRequestFormProperties>({
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


	/** Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec. */
	export enum M2tsAudioDuration { DEFAULT_CODEC_DURATION = 0, MATCH_VIDEO_DURATION = 1 }


	/** Controls whether to include the ES Rate field in the PES header. */
	export enum M2tsEsRateInPes { INCLUDE = 0, EXCLUDE = 1 }


	/** To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and passes it through to the output transport stream. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank. */
	export enum M2tsKlvMetadata { PASSTHROUGH = 0, NONE = 1 }


	/** If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output. */
	export enum M2tsNielsenId3 { INSERT = 0, NONE = 1 }


	/** For SCTE-35 markers from your input-- Choose Passthrough if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None. Also provide the ESAM XML as a string in the setting Signal processing notification XML. Also enable ESAM SCTE-35 (include the property scte35Esam). */
	export enum M2tsScte35Source { PASSTHROUGH = 0, NONE = 1 }


	/** Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec. */
	export enum M3u8AudioDuration { DEFAULT_CODEC_DURATION = 0, MATCH_VIDEO_DURATION = 1 }


	/** If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value AUTO to allow all PTS values. */
	export enum M3u8DataPtsControl { AUTO = 0, ALIGN_TO_VIDEO = 1 }


	/** If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output. */
	export enum M3u8NielsenId3 { INSERT = 0, NONE = 1 }


	/** When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream. */
	export enum M3u8PcrControl { PCR_EVERY_PES_PACKET = 0, CONFIGURED_PCR_PERIOD = 1 }


	/** For SCTE-35 markers from your input-- Choose Passthrough if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None if you don't want manifest conditioning. Choose Passthrough and choose Ad markers if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML. */
	export enum M3u8Scte35Source { PASSTHROUGH = 0, NONE = 1 }


	/** Set ID3 metadata to Passthrough to include ID3 metadata in this output. This includes ID3 metadata from the following features: ID3 timestamp period, and Custom ID3 metadata inserter. To exclude this ID3 metadata in this output: set ID3 metadata to None or leave blank. */
	export enum TimedMetadata { PASSTHROUGH = 0, NONE = 1 }


	/** When enabled, include 'clap' atom if appropriate for the video output settings. */
	export enum MovClapAtom { INCLUDE = 0, EXCLUDE = 1 }


	/** When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools. */
	export enum MovCslgAtom { INCLUDE = 0, EXCLUDE = 1 }


	/** Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR). */
	export enum Mp3RateControlMode { CBR = 0, VBR = 1 }


	/** When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools. */
	export enum Mp4CslgAtom { INCLUDE = 0, EXCLUDE = 1 }


	/** Inserts a free-space box immediately after the moov box. */
	export enum Mp4FreeSpaceBox { INCLUDE = 0, EXCLUDE = 1 }


	/** If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end. */
	export enum Mp4MoovPlacement { PROGRESSIVE_DOWNLOAD = 0, NORMAL = 1 }


	/** Optional. Choose Include to have MediaConvert mark up your DASH manifest with <Accessibility> elements for embedded 608 captions. This markup isn't generally required, but some video players require it to discover and play embedded 608 captions. Keep the default value, Exclude, to leave these elements out. When you enable this setting, this is the markup that MediaConvert includes in your manifest: <Accessibility schemeIdUri="urn:scte:dash:cc:cea-608:2015" value="CC1=eng"/> */
	export enum MpdAccessibilityCaptionHints { INCLUDE = 0, EXCLUDE = 1 }


	/** Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration. In all other cases, keep the default value, Default codec duration. When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec. */
	export enum MpdAudioDuration { DEFAULT_CODEC_DURATION = 0, MATCH_VIDEO_DURATION = 1 }


	/** To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata to Passthrough. */
	export enum MpdManifestMetadataSignaling { ENABLED = 0, DISABLED = 1 }


	/** Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML. */
	export enum MpdScte35Esam { INSERT = 0, NONE = 1 }


	/** Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None if you don't want those SCTE-35 markers in this output. */
	export enum MpdScte35Source { PASSTHROUGH = 0, NONE = 1 }


	/** To include ID3 metadata in this output: Set ID3 metadata to Passthrough. Specify this ID3 metadata in Custom ID3 metadata inserter. MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None or leave blank. */
	export enum MpdTimedMetadata { PASSTHROUGH = 0, NONE = 1 }


	/**
	 * Specify the event message box (eMSG) version for ID3 timed metadata in your output.
	 * For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.
	 * Leave blank to use the default value Version 0.
	 * When you specify Version 1, you must also set ID3 metadata to Passthrough.
	 */
	export enum MpdTimedMetadataBoxVersion { VERSION_0 = 0, VERSION_1 = 1 }


	/** Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames. */
	export enum Mpeg2DynamicSubGop { ADAPTIVE = 0, STATIC = 1 }


	/** If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum Mpeg2FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum Mpeg2FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose. */
	export enum Mpeg2InterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/** Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum Mpeg2ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
	export enum Mpeg2QualityTuningLevel { SINGLE_PASS = 0, MULTI_PASS = 1 }


	/** Use Rate control mode to specify whether the bitrate is variable (vbr) or constant (cbr). */
	export enum Mpeg2RateControlMode { VBR = 0, CBR = 1 }


	/** Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive. */
	export enum Mpeg2ScanTypeConversionMode { INTERLACED = 0, INTERLACED_OPTIMIZE = 1 }


	/** Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. */
	export enum Mpeg2SceneChangeDetect { DISABLED = 0, ENABLED = 1 }


	/** Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. */
	export enum Mpeg2SlowPal { DISABLED = 0, ENABLED = 1 }


	/** Keep the default value, Enabled, to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. */
	export enum Mpeg2SpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine produces a 29.97i output. Soft telecine produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture. */
	export enum Mpeg2Telecine { NONE = 0, SOFT = 1, HARD = 2 }


	/** Keep the default value, Enabled, to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization. */
	export enum Mpeg2TemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** Specify how you want MediaConvert to determine the fragment length. Choose Exact to have the encoder use the exact length that you specify with the setting Fragment length. This might result in extra I-frames. Choose Multiple of GOP to have the encoder round up the segment lengths to match the next GOP boundary. */
	export enum MsSmoothFragmentLengthControl { EXACT = 0, GOP_MULTIPLE = 1 }


	/** If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum ProresFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum ProresFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose. */
	export enum ProresInterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/** Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum ProresParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive. */
	export enum ProresScanTypeConversionMode { INTERLACED = 0, INTERLACED_OPTIMIZE = 1 }


	/** Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. */
	export enum ProresSlowPal { DISABLED = 0, ENABLED = 1 }


	/** When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine to create a smoother picture. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture. */
	export enum ProresTelecine { NONE = 0, HARD = 1 }

	export interface PutPolicyRequest {

		/** Required */
		Policy: Policy;
	}
	export interface PutPolicyRequestFormProperties {
	}
	export function CreatePutPolicyRequestFormGroup() {
		return new FormGroup<PutPolicyRequestFormProperties>({
		});

	}


	/** Set Style passthrough to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use simplified output captions. */
	export enum SrtStylePassthrough { ENABLED = 0, DISABLED = 1 }

	export interface TagResourceRequest {

		/** Required */
		Arn: string;

		/** Required */
		Tags: __mapOf__string;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Use Source to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 instead. * Start at 0 - Set the timecode of the initial frame to 00:00:00:00. * Specified Start - Set the timecode of the initial frame to a value other than zero. You use Start timecode to provide this value. */
	export enum TimecodeSource { EMBEDDED = 0, ZEROBASED = 1, SPECIFIEDSTART = 2 }


	/** Pass through style and position information from a TTML-like input source (TTML, IMSC, SMPTE-TT) to the TTML output. */
	export enum TtmlStylePassthrough { ENABLED = 0, DISABLED = 1 }

	export interface UntagResourceRequest {
		TagKeys?: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateJobTemplateRequest {
		AccelerationSettings?: AccelerationSettings;
		Category?: string;
		Description?: string;
		HopDestinations?: Array<HopDestination>;
		Priority?: number | null;
		Queue?: string;
		Settings?: JobTemplateSettings;
		StatusUpdateInterval?: StatusUpdateInterval;
	}
	export interface UpdateJobTemplateRequestFormProperties {
		Category: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Queue: FormControl<string | null | undefined>,
		StatusUpdateInterval: FormControl<StatusUpdateInterval | null | undefined>,
	}
	export function CreateUpdateJobTemplateRequestFormGroup() {
		return new FormGroup<UpdateJobTemplateRequestFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Queue: new FormControl<string | null | undefined>(undefined),
			StatusUpdateInterval: new FormControl<StatusUpdateInterval | null | undefined>(undefined),
		});

	}

	export interface UpdatePresetRequest {
		Category?: string;
		Description?: string;
		Settings?: PresetSettings;
	}
	export interface UpdatePresetRequestFormProperties {
		Category: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePresetRequestFormGroup() {
		return new FormGroup<UpdatePresetRequestFormProperties>({
			Category: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateQueueRequest {
		Description?: string;
		ReservationPlanSettings?: ReservationPlanSettings;
		Status?: QueueStatus;
	}
	export interface UpdateQueueRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Status: FormControl<QueueStatus | null | undefined>,
	}
	export function CreateUpdateQueueRequestFormGroup() {
		return new FormGroup<UpdateQueueRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<QueueStatus | null | undefined>(undefined),
		});

	}


	/** If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum Vc3FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum Vc3FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing, for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine to None or Soft. You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode to a value other than Progressive. */
	export enum Vc3ScanTypeConversionMode { INTERLACED = 0, INTERLACED_OPTIMIZE = 1 }


	/** Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Framerate to 25. */
	export enum Vc3SlowPal { DISABLED = 0, ENABLED = 1 }


	/** When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine to create a smoother picture. When you keep the default value, None, MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture. */
	export enum Vc3Telecine { NONE = 0, HARD = 1 }


	/** If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum Vp8FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum Vp8FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum Vp8ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. */
	export enum Vp9FramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum Vp9FramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source, uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings. */
	export enum Vp9ParControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding. */
	export enum Vp9QualityTuningLevel { MULTI_PASS = 0, MULTI_PASS_HQ = 1 }


	/** With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode. */
	export enum Vp9RateControlMode { VBR = 0 }


	/** If the WebVTT captions track is intended to provide accessibility for people who are deaf or hard of hearing: Set Accessibility subtitles to Enabled. When you do, MediaConvert adds accessibility attributes to your output HLS or DASH manifest. For HLS manifests, MediaConvert adds the following accessibility attributes under EXT-X-MEDIA for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". For DASH manifests, MediaConvert adds the following in the adaptation set for this track: <Accessibility schemeIdUri="urn:mpeg:dash:role:2011" value="caption"/>. If the captions track is not intended to provide such accessibility: Keep the default value, Disabled. When you do, for DASH manifests, MediaConvert instead adds the following in the adaptation set for this track: <Role schemeIDUri="urn:mpeg:dash:role:2011" value="subtitle"/>. */
	export enum WebvttAccessibilitySubs { DISABLED = 0, ENABLED = 1 }


	/** Specify the XAVC Intra 4k (VBR) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class. */
	export enum Xavc4kIntraVbrProfileClass { CLASS_100 = 0, CLASS_300 = 1, CLASS_480 = 2 }


	/** Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
	export enum Xavc4kProfileQualityTuningLevel { SINGLE_PASS = 0, SINGLE_PASS_HQ = 1, MULTI_PASS_HQ = 2 }


	/** The best way to set up adaptive quantization is to keep the default value, Auto, for the setting Adaptive quantization. When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization to a value other than Off or Auto. Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides. */
	export enum XavcFlickerAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow to allow the encoder to use B-frames as reference frames. Choose Don't allow to prevent the encoder from using B-frames as reference frames. */
	export enum XavcGopBReference { DISABLED = 0, ENABLED = 1 }


	/** Keep the default value, Auto, for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set Adaptive quantization to a value other than Auto. Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization to Off. Related settings: The value that you choose here applies to the following settings: Flicker adaptive quantization (flickerAdaptiveQuantization), Spatial adaptive quantization, and Temporal adaptive quantization. */
	export enum XavcAdaptiveQuantization { OFF = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4, HIGHER = 5, MAX = 6 }


	/** If you are using the console, use the Frame rate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list. The framerates shown in the dropdown list are decimal approximations of fractions. */
	export enum XavcFramerateControl { INITIALIZE_FROM_SOURCE = 0, SPECIFIED = 1 }


	/** Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. For numerically simple conversions, such as 60 fps to 30 fps: We recommend that you keep the default value, Drop duplicate. For numerically complex conversions, to avoid stutter: Choose Interpolate. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence: Choose FrameFormer to do motion-compensated interpolation. FrameFormer uses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost. When you choose FrameFormer, your input video resolution must be at least 128x96. */
	export enum XavcFramerateConversionAlgorithm { DUPLICATE_DROP = 0, INTERPOLATE = 1, FRAMEFORMER = 2 }


	/** Optional. Use Quality tuning level to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding. */
	export enum XavcHdProfileQualityTuningLevel { SINGLE_PASS = 0, SINGLE_PASS_HQ = 1, MULTI_PASS_HQ = 2 }


	/** Choose the scan line type for the output. Keep the default value, Progressive to create a progressive output, regardless of the scan type of your input. Use Top field first or Bottom field first to create an output that's interlaced with the same field polarity throughout. Use Follow, default top or Follow, default bottom to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose. */
	export enum XavcInterlaceMode { PROGRESSIVE = 0, TOP_FIELD = 1, BOTTOM_FIELD = 2, FOLLOW_TOP_FIELD = 3, FOLLOW_BOTTOM_FIELD = 4 }


	/** Ignore this setting unless you set Frame rate (framerateNumerator divided by framerateDenominator) to 29.970. If your input framerate is 23.976, choose Hard. Otherwise, keep the default value None. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-telecine-and-inverse-telecine.html. */
	export enum XavcHdProfileTelecine { NONE = 0, HARD = 1 }


	/** Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Frame rate to 25. */
	export enum XavcSlowPal { DISABLED = 0, ENABLED = 1 }


	/** The best way to set up adaptive quantization is to keep the default value, Auto, for the setting Adaptive quantization. When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled, to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. */
	export enum XavcSpatialAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }


	/** The best way to set up adaptive quantization is to keep the default value, Auto, for the setting Adaptive quantization. When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled, to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal adaptive quantization, adjust the strength of the filter with the setting Adaptive quantization. */
	export enum XavcTemporalAdaptiveQuantization { DISABLED = 0, ENABLED = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
		 * Post 2017-08-29/certificates
		 * @return {void} 
		 */
		AssociateCertificate(requestBody: AssociateCertificatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2017-08-29/certificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently cancel a job. Once you have canceled a job, you can't start it again.
		 * Delete 2017-08-29/jobs/{id}
		 * @param {string} id The Job ID of the job to be cancelled.
		 * @return {void} 
		 */
		CancelJob(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-08-29/jobs/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the JSON for a specific completed transcoding job.
		 * Get 2017-08-29/jobs/{id}
		 * @param {string} id the job ID of the job.
		 * @return {GetJobResponse} Success
		 */
		GetJob(id: string): Observable<GetJobResponse> {
			return this.http.get<GetJobResponse>(this.baseUri + '2017-08-29/jobs/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
		 * Post 2017-08-29/jobs
		 * @return {void} 
		 */
		CreateJob(requestBody: CreateJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2017-08-29/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.
		 * Get 2017-08-29/jobs
		 * @param {number} maxResults Optional. Number of jobs, up to twenty, that will be returned at one time.
		 * @param {string} nextToken Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.
		 * @param {Order} order Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
		 * @param {string} queue Optional. Provide a queue name to get back only jobs from that queue.
		 * @param {JobStatus} status Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(maxResults: number | null | undefined, nextToken: string | null | undefined, order: Order | null | undefined, queue: string | null | undefined, status: JobStatus | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + '2017-08-29/jobs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + order + '&queue=' + (queue == null ? '' : encodeURIComponent(queue)) + '&status=' + status + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
		 * Post 2017-08-29/jobTemplates
		 * @return {void} 
		 */
		CreateJobTemplate(requestBody: CreateJobTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2017-08-29/jobTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array
		 * Get 2017-08-29/jobTemplates
		 * @param {string} category Optionally, specify a job template category to limit responses to only job templates from that category.
		 * @param {JobTemplateListBy} listBy Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
		 * @param {number} maxResults Optional. Number of job templates, up to twenty, that will be returned at one time.
		 * @param {string} nextToken Use this string, provided with the response to a previous request, to request the next batch of job templates.
		 * @param {Order} order Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobTemplatesResponse} Success
		 */
		ListJobTemplates(category: string | null | undefined, listBy: JobTemplateListBy | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, order: Order | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListJobTemplatesResponse> {
			return this.http.get<ListJobTemplatesResponse>(this.baseUri + '2017-08-29/jobTemplates?category=' + (category == null ? '' : encodeURIComponent(category)) + '&listBy=' + listBy + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + order + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
		 * Post 2017-08-29/presets
		 * @return {void} 
		 */
		CreatePreset(requestBody: CreatePresetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2017-08-29/presets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
		 * Get 2017-08-29/presets
		 * @param {string} category Optionally, specify a preset category to limit responses to only presets from that category.
		 * @param {JobTemplateListBy} listBy Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
		 * @param {number} maxResults Optional. Number of presets, up to twenty, that will be returned at one time
		 * @param {string} nextToken Use this string, provided with the response to a previous request, to request the next batch of presets.
		 * @param {Order} order Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPresetsResponse} Success
		 */
		ListPresets(category: string | null | undefined, listBy: JobTemplateListBy | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, order: Order | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPresetsResponse> {
			return this.http.get<ListPresetsResponse>(this.baseUri + '2017-08-29/presets?category=' + (category == null ? '' : encodeURIComponent(category)) + '&listBy=' + listBy + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + order + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
		 * Post 2017-08-29/queues
		 * @return {void} 
		 */
		CreateQueue(requestBody: CreateQueuePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2017-08-29/queues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.
		 * Get 2017-08-29/queues
		 * @param {QueueListBy} listBy Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
		 * @param {number} maxResults Optional. Number of queues, up to twenty, that will be returned at one time.
		 * @param {string} nextToken Use this string, provided with the response to a previous request, to request the next batch of queues.
		 * @param {Order} order Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueuesResponse} Success
		 */
		ListQueues(listBy: QueueListBy | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, order: Order | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListQueuesResponse> {
			return this.http.get<ListQueuesResponse>(this.baseUri + '2017-08-29/queues?listBy=' + listBy + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + order + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Permanently delete a job template you have created.
		 * Delete 2017-08-29/jobTemplates/{name}
		 * @param {string} name The name of the job template to be deleted.
		 * @return {void} 
		 */
		DeleteJobTemplate(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-08-29/jobTemplates/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the JSON for a specific job template.
		 * Get 2017-08-29/jobTemplates/{name}
		 * @param {string} name The name of the job template.
		 * @return {GetJobTemplateResponse} Success
		 */
		GetJobTemplate(name: string): Observable<GetJobTemplateResponse> {
			return this.http.get<GetJobTemplateResponse>(this.baseUri + '2017-08-29/jobTemplates/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Modify one of your existing job templates.
		 * Put 2017-08-29/jobTemplates/{name}
		 * @param {string} name The name of the job template you are modifying
		 * @return {UpdateJobTemplateResponse} Success
		 */
		UpdateJobTemplate(name: string, requestBody: UpdateJobTemplatePutBody): Observable<UpdateJobTemplateResponse> {
			return this.http.put<UpdateJobTemplateResponse>(this.baseUri + '2017-08-29/jobTemplates/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently delete a policy that you created.
		 * Delete 2017-08-29/policy
		 * @return {DeletePolicyResponse} Success
		 */
		DeletePolicy(): Observable<DeletePolicyResponse> {
			return this.http.delete<DeletePolicyResponse>(this.baseUri + '2017-08-29/policy', {});
		}

		/**
		 * Retrieve the JSON for your policy.
		 * Get 2017-08-29/policy
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(): Observable<GetPolicyResponse> {
			return this.http.get<GetPolicyResponse>(this.baseUri + '2017-08-29/policy', {});
		}

		/**
		 * Create or change your policy. For more information about policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
		 * Put 2017-08-29/policy
		 * @return {PutPolicyResponse} Success
		 */
		PutPolicy(requestBody: PutPolicyPutBody): Observable<PutPolicyResponse> {
			return this.http.put<PutPolicyResponse>(this.baseUri + '2017-08-29/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently delete a preset you have created.
		 * Delete 2017-08-29/presets/{name}
		 * @param {string} name The name of the preset to be deleted.
		 * @return {void} 
		 */
		DeletePreset(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-08-29/presets/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the JSON for a specific preset.
		 * Get 2017-08-29/presets/{name}
		 * @param {string} name The name of the preset.
		 * @return {GetPresetResponse} Success
		 */
		GetPreset(name: string): Observable<GetPresetResponse> {
			return this.http.get<GetPresetResponse>(this.baseUri + '2017-08-29/presets/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Modify one of your existing presets.
		 * Put 2017-08-29/presets/{name}
		 * @param {string} name The name of the preset you are modifying.
		 * @return {UpdatePresetResponse} Success
		 */
		UpdatePreset(name: string, requestBody: UpdatePresetPutBody): Observable<UpdatePresetResponse> {
			return this.http.put<UpdatePresetResponse>(this.baseUri + '2017-08-29/presets/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently delete a queue you have created.
		 * Delete 2017-08-29/queues/{name}
		 * @param {string} name The name of the queue that you want to delete.
		 * @return {void} 
		 */
		DeleteQueue(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-08-29/queues/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the JSON for a specific queue.
		 * Get 2017-08-29/queues/{name}
		 * @param {string} name The name of the queue that you want information about.
		 * @return {GetQueueResponse} Success
		 */
		GetQueue(name: string): Observable<GetQueueResponse> {
			return this.http.get<GetQueueResponse>(this.baseUri + '2017-08-29/queues/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Modify one of your existing queues.
		 * Put 2017-08-29/queues/{name}
		 * @param {string} name The name of the queue that you are modifying.
		 * @return {UpdateQueueResponse} Success
		 */
		UpdateQueue(name: string, requestBody: UpdateQueuePutBody): Observable<UpdateQueueResponse> {
			return this.http.put<UpdateQueueResponse>(this.baseUri + '2017-08-29/queues/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
		 * Post 2017-08-29/endpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeEndpointsPostBody): Observable<DescribeEndpointsResponse> {
			return this.http.post<DescribeEndpointsResponse>(this.baseUri + '2017-08-29/endpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
		 * Delete 2017-08-29/certificates/{arn}
		 * @param {string} arn The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
		 * @return {void} 
		 */
		DisassociateCertificate(arn: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-08-29/certificates/' + (arn == null ? '' : encodeURIComponent(arn)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the tags for a MediaConvert resource.
		 * Get 2017-08-29/tags/{arn}
		 * @param {string} arn The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + '2017-08-29/tags/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
		 * Put 2017-08-29/tags/{arn}
		 * @param {string} arn The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(arn: string, requestBody: UntagResourcePutBody): Observable<UntagResourceResponse> {
			return this.http.put<UntagResourceResponse>(this.baseUri + '2017-08-29/tags/' + (arn == null ? '' : encodeURIComponent(arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
		 * Post 2017-08-29/tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '2017-08-29/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateCertificatePostBody {

		/**
		 * The ARN of the ACM certificate that you want to associate with your MediaConvert resource.
		 * Required
		 */
		arn: string;
	}
	export interface AssociateCertificatePostBodyFormProperties {

		/**
		 * The ARN of the ACM certificate that you want to associate with your MediaConvert resource.
		 * Required
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateCertificatePostBodyFormGroup() {
		return new FormGroup<AssociateCertificatePostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobPostBody {

		/** Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		accelerationSettings?: CreateJobPostBodyAccelerationSettings;

		/** The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. */
		billingTagsSource?: BillingTagsSource | null;

		/** Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html. */
		clientRequestToken?: string | null;

		/** Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide. */
		hopDestinations?: Array<HopDestination>;

		/** Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually. */
		jobTemplate?: string | null;

		/**
		 * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority?: number | null;

		/** Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html. */
		queue?: string | null;

		/**
		 * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
		 * Required
		 */
		role: string;

		/**
		 * JobSettings contains all the transcode settings for a job.
		 * Required
		 */
		settings: CreateJobPostBodySettings;

		/** Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. */
		simulateReservedQueue?: CmafClientCache | null;

		/** Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval?: StatusUpdateInterval | null;

		/** Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows. */
		tags?: {[id: string]: string };

		/** Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags. */
		userMetadata?: {[id: string]: string };
	}
	export interface CreateJobPostBodyFormProperties {

		/** The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. */
		billingTagsSource: FormControl<BillingTagsSource | null | undefined>,

		/** Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html. */
		clientRequestToken: FormControl<string | null | undefined>,

		/** Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually. */
		jobTemplate: FormControl<string | null | undefined>,

		/**
		 * Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority: FormControl<number | null | undefined>,

		/** Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html. */
		queue: FormControl<string | null | undefined>,

		/**
		 * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
		 * Required
		 */
		role: FormControl<string | null | undefined>,

		/** Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default. */
		simulateReservedQueue: FormControl<CmafClientCache | null | undefined>,

		/** Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval: FormControl<StatusUpdateInterval | null | undefined>,

		/** Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags. */
		userMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateJobPostBodyFormGroup() {
		return new FormGroup<CreateJobPostBodyFormProperties>({
			billingTagsSource: new FormControl<BillingTagsSource | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			jobTemplate: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(-50), Validators.max(50)]),
			queue: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			simulateReservedQueue: new FormControl<CmafClientCache | null | undefined>(undefined),
			statusUpdateInterval: new FormControl<StatusUpdateInterval | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			userMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBodyAccelerationSettings {
		Mode?: AccelerationMode;
	}
	export interface CreateJobPostBodyAccelerationSettingsFormProperties {
		Mode: FormControl<AccelerationMode | null | undefined>,
	}
	export function CreateCreateJobPostBodyAccelerationSettingsFormGroup() {
		return new FormGroup<CreateJobPostBodyAccelerationSettingsFormProperties>({
			Mode: new FormControl<AccelerationMode | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBodySettings {
		AdAvailOffset?: number | null;
		AvailBlanking?: AvailBlanking;
		Esam?: EsamSettings;
		ExtendedDataServices?: ExtendedDataServices;
		Inputs?: Array<Input>;
		KantarWatermark?: KantarWatermarkSettings;
		MotionImageInserter?: MotionImageInserter;
		NielsenConfiguration?: NielsenConfiguration;
		NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;
		OutputGroups?: Array<OutputGroup>;
		TimecodeConfig?: TimecodeConfig;
		TimedMetadataInsertion?: TimedMetadataInsertion;
	}
	export interface CreateJobPostBodySettingsFormProperties {
		AdAvailOffset: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobPostBodySettingsFormGroup() {
		return new FormGroup<CreateJobPostBodySettingsFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateJobTemplatePostBody {

		/** Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		accelerationSettings?: CreateJobTemplatePostBodyAccelerationSettings;

		/** Optional. A category for the job template you are creating */
		category?: string | null;

		/** Optional. A description of the job template you are creating. */
		description?: string | null;

		/** Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide. */
		hopDestinations?: Array<HopDestination>;

		/**
		 * The name of the job template you are creating.
		 * Required
		 */
		name: string;

		/**
		 * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority?: number | null;

		/** Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue. */
		queue?: string | null;

		/**
		 * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
		 * Required
		 */
		settings: CreateJobTemplatePostBodySettings;

		/** Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval?: StatusUpdateInterval | null;

		/** The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags?: {[id: string]: string };
	}
	export interface CreateJobTemplatePostBodyFormProperties {

		/** Optional. A category for the job template you are creating */
		category: FormControl<string | null | undefined>,

		/** Optional. A description of the job template you are creating. */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the job template you are creating.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority: FormControl<number | null | undefined>,

		/** Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue. */
		queue: FormControl<string | null | undefined>,

		/** Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval: FormControl<StatusUpdateInterval | null | undefined>,

		/** The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateJobTemplatePostBodyFormGroup() {
		return new FormGroup<CreateJobTemplatePostBodyFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(-50), Validators.max(50)]),
			queue: new FormControl<string | null | undefined>(undefined),
			statusUpdateInterval: new FormControl<StatusUpdateInterval | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateJobTemplatePostBodyAccelerationSettings {
		Mode?: AccelerationMode;
	}
	export interface CreateJobTemplatePostBodyAccelerationSettingsFormProperties {
		Mode: FormControl<AccelerationMode | null | undefined>,
	}
	export function CreateCreateJobTemplatePostBodyAccelerationSettingsFormGroup() {
		return new FormGroup<CreateJobTemplatePostBodyAccelerationSettingsFormProperties>({
			Mode: new FormControl<AccelerationMode | null | undefined>(undefined),
		});

	}

	export interface CreateJobTemplatePostBodySettings {
		AdAvailOffset?: number | null;
		AvailBlanking?: AvailBlanking;
		Esam?: EsamSettings;
		ExtendedDataServices?: ExtendedDataServices;
		Inputs?: Array<InputTemplate>;
		KantarWatermark?: KantarWatermarkSettings;
		MotionImageInserter?: MotionImageInserter;
		NielsenConfiguration?: NielsenConfiguration;
		NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;
		OutputGroups?: Array<OutputGroup>;
		TimecodeConfig?: TimecodeConfig;
		TimedMetadataInsertion?: TimedMetadataInsertion;
	}
	export interface CreateJobTemplatePostBodySettingsFormProperties {
		AdAvailOffset: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobTemplatePostBodySettingsFormGroup() {
		return new FormGroup<CreateJobTemplatePostBodySettingsFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatePresetPostBody {

		/** Optional. A category for the preset you are creating. */
		category?: string | null;

		/** Optional. A description of the preset you are creating. */
		description?: string | null;

		/**
		 * The name of the preset you are creating.
		 * Required
		 */
		name: string;

		/**
		 * Settings for preset
		 * Required
		 */
		settings: CreatePresetPostBodySettings;

		/** The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags?: {[id: string]: string };
	}
	export interface CreatePresetPostBodyFormProperties {

		/** Optional. A category for the preset you are creating. */
		category: FormControl<string | null | undefined>,

		/** Optional. A description of the preset you are creating. */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the preset you are creating.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePresetPostBodyFormGroup() {
		return new FormGroup<CreatePresetPostBodyFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePresetPostBodySettings {
		AudioDescriptions?: Array<AudioDescription>;
		CaptionDescriptions?: Array<CaptionDescriptionPreset>;
		ContainerSettings?: ContainerSettings;
		VideoDescription?: VideoDescription;
	}
	export interface CreatePresetPostBodySettingsFormProperties {
	}
	export function CreateCreatePresetPostBodySettingsFormGroup() {
		return new FormGroup<CreatePresetPostBodySettingsFormProperties>({
		});

	}

	export interface CreateQueuePostBody {

		/** Optional. A description of the queue that you are creating. */
		description?: string | null;

		/**
		 * The name of the queue that you are creating.
		 * Required
		 */
		name: string;

		/** Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. */
		pricingPlan?: PricingPlan | null;

		/** Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
		reservationPlanSettings?: CreateQueuePostBodyReservationPlanSettings;

		/** Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		status?: QueueStatus | null;

		/** The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags?: {[id: string]: string };
	}
	export interface CreateQueuePostBodyFormProperties {

		/** Optional. A description of the queue that you are creating. */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the queue that you are creating.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. */
		pricingPlan: FormControl<PricingPlan | null | undefined>,

		/** Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		status: FormControl<QueueStatus | null | undefined>,

		/** The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateQueuePostBodyFormGroup() {
		return new FormGroup<CreateQueuePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pricingPlan: new FormControl<PricingPlan | null | undefined>(undefined),
			status: new FormControl<QueueStatus | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateQueuePostBodyReservationPlanSettings {
		Commitment?: Commitment;
		RenewalType?: RenewalType;
		ReservedSlots?: number | null;
	}
	export interface CreateQueuePostBodyReservationPlanSettingsFormProperties {
		Commitment: FormControl<Commitment | null | undefined>,
		RenewalType: FormControl<RenewalType | null | undefined>,
		ReservedSlots: FormControl<number | null | undefined>,
	}
	export function CreateCreateQueuePostBodyReservationPlanSettingsFormGroup() {
		return new FormGroup<CreateQueuePostBodyReservationPlanSettingsFormProperties>({
			Commitment: new FormControl<Commitment | null | undefined>(undefined),
			RenewalType: new FormControl<RenewalType | null | undefined>(undefined),
			ReservedSlots: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateJobTemplatePutBody {

		/** Accelerated transcoding can significantly speed up jobs with long, visually complex content. */
		accelerationSettings?: UpdateJobTemplatePutBodyAccelerationSettings;

		/** The new category for the job template, if you are changing it. */
		category?: string | null;

		/** The new description for the job template, if you are changing it. */
		description?: string | null;

		/** Optional list of hop destinations. */
		hopDestinations?: Array<HopDestination>;

		/**
		 * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority?: number | null;

		/** The new queue for the job template, if you are changing it. */
		queue?: string | null;

		/** JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it. */
		settings?: UpdateJobTemplatePutBodySettings;

		/** Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval?: StatusUpdateInterval | null;
	}
	export interface UpdateJobTemplatePutBodyFormProperties {

		/** The new category for the job template, if you are changing it. */
		category: FormControl<string | null | undefined>,

		/** The new description for the job template, if you are changing it. */
		description: FormControl<string | null | undefined>,

		/**
		 * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
		 * Minimum: -50
		 * Maximum: 50
		 */
		priority: FormControl<number | null | undefined>,

		/** The new queue for the job template, if you are changing it. */
		queue: FormControl<string | null | undefined>,

		/** Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. */
		statusUpdateInterval: FormControl<StatusUpdateInterval | null | undefined>,
	}
	export function CreateUpdateJobTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateJobTemplatePutBodyFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(-50), Validators.max(50)]),
			queue: new FormControl<string | null | undefined>(undefined),
			statusUpdateInterval: new FormControl<StatusUpdateInterval | null | undefined>(undefined),
		});

	}

	export interface UpdateJobTemplatePutBodyAccelerationSettings {
		Mode?: AccelerationMode;
	}
	export interface UpdateJobTemplatePutBodyAccelerationSettingsFormProperties {
		Mode: FormControl<AccelerationMode | null | undefined>,
	}
	export function CreateUpdateJobTemplatePutBodyAccelerationSettingsFormGroup() {
		return new FormGroup<UpdateJobTemplatePutBodyAccelerationSettingsFormProperties>({
			Mode: new FormControl<AccelerationMode | null | undefined>(undefined),
		});

	}

	export interface UpdateJobTemplatePutBodySettings {
		AdAvailOffset?: number | null;
		AvailBlanking?: AvailBlanking;
		Esam?: EsamSettings;
		ExtendedDataServices?: ExtendedDataServices;
		Inputs?: Array<InputTemplate>;
		KantarWatermark?: KantarWatermarkSettings;
		MotionImageInserter?: MotionImageInserter;
		NielsenConfiguration?: NielsenConfiguration;
		NielsenNonLinearWatermark?: NielsenNonLinearWatermarkSettings;
		OutputGroups?: Array<OutputGroup>;
		TimecodeConfig?: TimecodeConfig;
		TimedMetadataInsertion?: TimedMetadataInsertion;
	}
	export interface UpdateJobTemplatePutBodySettingsFormProperties {
		AdAvailOffset: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobTemplatePutBodySettingsFormGroup() {
		return new FormGroup<UpdateJobTemplatePutBodySettingsFormProperties>({
			AdAvailOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutPolicyPutBody {

		/**
		 * A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
		 * Required
		 */
		policy: PutPolicyPutBodyPolicy;
	}
	export interface PutPolicyPutBodyFormProperties {
	}
	export function CreatePutPolicyPutBodyFormGroup() {
		return new FormGroup<PutPolicyPutBodyFormProperties>({
		});

	}

	export interface PutPolicyPutBodyPolicy {
		HttpInputs?: InputPolicy;
		HttpsInputs?: InputPolicy;
		S3Inputs?: InputPolicy;
	}
	export interface PutPolicyPutBodyPolicyFormProperties {
		HttpInputs: FormControl<InputPolicy | null | undefined>,
		HttpsInputs: FormControl<InputPolicy | null | undefined>,
		S3Inputs: FormControl<InputPolicy | null | undefined>,
	}
	export function CreatePutPolicyPutBodyPolicyFormGroup() {
		return new FormGroup<PutPolicyPutBodyPolicyFormProperties>({
			HttpInputs: new FormControl<InputPolicy | null | undefined>(undefined),
			HttpsInputs: new FormControl<InputPolicy | null | undefined>(undefined),
			S3Inputs: new FormControl<InputPolicy | null | undefined>(undefined),
		});

	}

	export interface UpdatePresetPutBody {

		/** The new category for the preset, if you are changing it. */
		category?: string | null;

		/** The new description for the preset, if you are changing it. */
		description?: string | null;

		/** Settings for preset */
		settings?: UpdatePresetPutBodySettings;
	}
	export interface UpdatePresetPutBodyFormProperties {

		/** The new category for the preset, if you are changing it. */
		category: FormControl<string | null | undefined>,

		/** The new description for the preset, if you are changing it. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePresetPutBodyFormGroup() {
		return new FormGroup<UpdatePresetPutBodyFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePresetPutBodySettings {
		AudioDescriptions?: Array<AudioDescription>;
		CaptionDescriptions?: Array<CaptionDescriptionPreset>;
		ContainerSettings?: ContainerSettings;
		VideoDescription?: VideoDescription;
	}
	export interface UpdatePresetPutBodySettingsFormProperties {
	}
	export function CreateUpdatePresetPutBodySettingsFormGroup() {
		return new FormGroup<UpdatePresetPutBodySettingsFormProperties>({
		});

	}

	export interface UpdateQueuePutBody {

		/** The new description for the queue, if you are changing it. */
		description?: string | null;

		/** Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues. */
		reservationPlanSettings?: UpdateQueuePutBodyReservationPlanSettings;

		/** Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		status?: QueueStatus | null;
	}
	export interface UpdateQueuePutBodyFormProperties {

		/** The new description for the queue, if you are changing it. */
		description: FormControl<string | null | undefined>,

		/** Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. */
		status: FormControl<QueueStatus | null | undefined>,
	}
	export function CreateUpdateQueuePutBodyFormGroup() {
		return new FormGroup<UpdateQueuePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<QueueStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateQueuePutBodyReservationPlanSettings {
		Commitment?: Commitment;
		RenewalType?: RenewalType;
		ReservedSlots?: number | null;
	}
	export interface UpdateQueuePutBodyReservationPlanSettingsFormProperties {
		Commitment: FormControl<Commitment | null | undefined>,
		RenewalType: FormControl<RenewalType | null | undefined>,
		ReservedSlots: FormControl<number | null | undefined>,
	}
	export function CreateUpdateQueuePutBodyReservationPlanSettingsFormGroup() {
		return new FormGroup<UpdateQueuePutBodyReservationPlanSettingsFormProperties>({
			Commitment: new FormControl<Commitment | null | undefined>(undefined),
			RenewalType: new FormControl<RenewalType | null | undefined>(undefined),
			ReservedSlots: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeEndpointsPostBody {

		/** Optional. Max number of endpoints, up to twenty, that will be returned at one time. */
		maxResults?: number | null;

		/** Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist. */
		mode?: DescribeEndpointsMode | null;

		/** Use this string, provided with the response to a previous request, to request the next batch of endpoints. */
		nextToken?: string | null;
	}
	export interface DescribeEndpointsPostBodyFormProperties {

		/** Optional. Max number of endpoints, up to twenty, that will be returned at one time. */
		maxResults: FormControl<number | null | undefined>,

		/** Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist. */
		mode: FormControl<DescribeEndpointsMode | null | undefined>,

		/** Use this string, provided with the response to a previous request, to request the next batch of endpoints. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointsPostBodyFormGroup() {
		return new FormGroup<DescribeEndpointsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<DescribeEndpointsMode | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourcePutBody {

		/** The keys of the tags that you want to remove from the resource. */
		tagKeys?: Array<string>;
	}
	export interface UntagResourcePutBodyFormProperties {
	}
	export function CreateUntagResourcePutBodyFormGroup() {
		return new FormGroup<UntagResourcePutBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
		 * Required
		 */
		arn: string;

		/**
		 * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
		 * Required
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

