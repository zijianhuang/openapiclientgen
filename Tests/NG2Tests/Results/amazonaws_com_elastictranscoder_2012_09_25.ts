import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response body contains a JSON object. If the job is successfully canceled, the value of <code>Success</code> is <code>true</code>. */
	export interface CancelJobResponse {
	}

	/** The response body contains a JSON object. If the job is successfully canceled, the value of <code>Success</code> is <code>true</code>. */
	export interface CancelJobResponseFormProperties {
	}
	export function CreateCancelJobResponseFormGroup() {
		return new FormGroup<CancelJobResponseFormProperties>({
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

	export interface IncompatibleVersionException {
	}
	export interface IncompatibleVersionExceptionFormProperties {
	}
	export function CreateIncompatibleVersionExceptionFormGroup() {
		return new FormGroup<IncompatibleVersionExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}


	/** The CreateJobResponse structure. */
	export interface CreateJobResponse {

		/** A section of the response body that provides information about the job that is created. */
		Job?: Job;
	}

	/** The CreateJobResponse structure. */
	export interface CreateJobResponseFormProperties {
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
		});

	}


	/** A section of the response body that provides information about the job that is created. */
	export interface Job {
		Id?: string | null;
		Arn?: string | null;
		PipelineId?: string | null;

		/** Information about the file that you're transcoding. */
		Input?: JobInput;

		/** Maximum items: 200 */
		Inputs?: Array<JobInput>;

		/** <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p> */
		Output?: JobOutput;
		Outputs?: Array<JobOutput>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OutputKeyPrefix?: string | null;
		Playlists?: Array<Playlist>;
		Status?: string | null;
		UserMetadata?: UserMetadata;

		/** Details about the timing of a job. */
		Timing?: Timing;
	}

	/** A section of the response body that provides information about the job that is created. */
	export interface JobFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		PipelineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OutputKeyPrefix: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
			Arn: new FormControl<string | null | undefined>(undefined),
			PipelineId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
			OutputKeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)')]),
		});

	}


	/** Information about the file that you're transcoding. */
	export interface JobInput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Key?: string | null;
		FrameRate?: string | null;
		Resolution?: string | null;
		AspectRatio?: string | null;
		Interlaced?: string | null;
		Container?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;

		/** Settings that determine when a clip begins and how long it lasts. */
		TimeSpan?: TimeSpan;

		/** The captions to be created, if any. */
		InputCaptions?: InputCaptions;

		/** The detected properties of the input file. Elastic Transcoder identifies these values from the input file. */
		DetectedProperties?: DetectedProperties;
	}

	/** Information about the file that you're transcoding. */
	export interface JobInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
		FrameRate: FormControl<string | null | undefined>,
		Resolution: FormControl<string | null | undefined>,
		AspectRatio: FormControl<string | null | undefined>,
		Interlaced: FormControl<string | null | undefined>,
		Container: FormControl<string | null | undefined>,
	}
	export function CreateJobInputFormGroup() {
		return new FormGroup<JobInputFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			FrameRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)')]),
			Resolution: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{1,5}x\d{1,5}$)')]),
			AspectRatio: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)')]),
			Interlaced: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^true$)|(^false$)')]),
			Container: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^3gp$)|(^asf$)|(^avi$)|(^divx$)|(^flv$)|(^mkv$)|(^mov$)|(^mp4$)|(^mpeg$)|(^mpeg-ps$)|(^mpeg-ts$)|(^mxf$)|(^ogg$)|(^ts$)|(^vob$)|(^wav$)|(^webm$)|(^mp3$)|(^m4a$)|(^aac$)')]),
		});

	}


	/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
	export interface Encryption {
		Mode?: string | null;
		Key?: string | null;
		KeyMd5?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		InitializationVector?: string | null;
	}

	/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
	export interface EncryptionFormProperties {
		Mode: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		KeyMd5: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		InitializationVector: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			Mode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^s3$)|(^s3-aws-kms$)|(^aes-cbc-pkcs7$)|(^aes-ctr$)|(^aes-gcm$)')]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^$|(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)')]),
			KeyMd5: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^$|(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)')]),
			InitializationVector: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}


	/** Settings that determine when a clip begins and how long it lasts. */
	export interface TimeSpan {
		StartTime?: string | null;
		Duration?: string | null;
	}

	/** Settings that determine when a clip begins and how long it lasts. */
	export interface TimeSpanFormProperties {
		StartTime: FormControl<string | null | undefined>,
		Duration: FormControl<string | null | undefined>,
	}
	export function CreateTimeSpanFormGroup() {
		return new FormGroup<TimeSpanFormProperties>({
			StartTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^\d{1,5}(\.\d{0,3})?$)|(^([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)')]),
			Duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^\d{1,5}(\.\d{0,3})?$)|(^([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)')]),
		});

	}


	/** The captions to be created, if any. */
	export interface InputCaptions {
		MergePolicy?: string | null;

		/** Maximum items: 20 */
		CaptionSources?: Array<CaptionSource>;
	}

	/** The captions to be created, if any. */
	export interface InputCaptionsFormProperties {
		MergePolicy: FormControl<string | null | undefined>,
	}
	export function CreateInputCaptionsFormGroup() {
		return new FormGroup<InputCaptionsFormProperties>({
			MergePolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^MergeOverride$)|(^MergeRetain$)|(^Override$)')]),
		});

	}


	/** A source file for the input sidecar captions used during the transcoding process. */
	export interface CaptionSource {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Key?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Language?: string | null;
		TimeOffset?: string | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Label?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}

	/** A source file for the input sidecar captions used during the transcoding process. */
	export interface CaptionSourceFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Language: FormControl<string | null | undefined>,
		TimeOffset: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Label: FormControl<string | null | undefined>,
	}
	export function CreateCaptionSourceFormGroup() {
		return new FormGroup<CaptionSourceFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Language: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TimeOffset: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^[+-]?\d{1,5}(\.\d{0,3})?$)|(^[+-]?([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)')]),
			Label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
		});

	}


	/** The detected properties of the input file. Elastic Transcoder identifies these values from the input file. */
	export interface DetectedProperties {
		Width?: number | null;
		Height?: number | null;
		FrameRate?: string | null;
		FileSize?: number | null;
		DurationMillis?: number | null;
	}

	/** The detected properties of the input file. Elastic Transcoder identifies these values from the input file. */
	export interface DetectedPropertiesFormProperties {
		Width: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		FrameRate: FormControl<string | null | undefined>,
		FileSize: FormControl<number | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
	}
	export function CreateDetectedPropertiesFormGroup() {
		return new FormGroup<DetectedPropertiesFormProperties>({
			Width: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			FrameRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}(\.\d{0,5})?$')]),
			FileSize: new FormControl<number | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p> */
	export interface JobOutput {
		Id?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Key?: string | null;
		ThumbnailPattern?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		ThumbnailEncryption?: Encryption;
		Rotate?: string | null;
		PresetId?: string | null;
		SegmentDuration?: string | null;
		Status?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		StatusDetail?: string | null;
		Duration?: number | null;
		Width?: number | null;
		Height?: number | null;
		FrameRate?: string | null;
		FileSize?: number | null;
		DurationMillis?: number | null;
		Watermarks?: Array<JobWatermark>;

		/** The .jpg or .png file associated with an audio file. */
		AlbumArt?: JobAlbumArt;
		Composition?: Array<Clip>;

		/** The captions to be created, if any. */
		Captions?: Captions;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
		AppliedColorSpaceConversion?: string | null;
	}

	/** <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p> */
	export interface JobOutputFormProperties {
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
		ThumbnailPattern: FormControl<string | null | undefined>,
		Rotate: FormControl<string | null | undefined>,
		PresetId: FormControl<string | null | undefined>,
		SegmentDuration: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		StatusDetail: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		Width: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		FrameRate: FormControl<string | null | undefined>,
		FileSize: FormControl<number | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
		AppliedColorSpaceConversion: FormControl<string | null | undefined>,
	}
	export function CreateJobOutputFormGroup() {
		return new FormGroup<JobOutputFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ThumbnailPattern: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^.*\{count\}.*$)')]),
			Rotate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^0$)|(^90$)|(^180$)|(^270$)')]),
			PresetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
			SegmentDuration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}(\.\d{0,5})?$')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)')]),
			StatusDetail: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			Duration: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			FrameRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}(\.\d{0,5})?$')]),
			FileSize: new FormControl<number | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			AppliedColorSpaceConversion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency. */
	export interface JobWatermark {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		PresetWatermarkId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		InputKey?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}

	/** Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency. */
	export interface JobWatermarkFormProperties {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		PresetWatermarkId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		InputKey: FormControl<string | null | undefined>,
	}
	export function CreateJobWatermarkFormGroup() {
		return new FormGroup<JobWatermarkFormProperties>({
			PresetWatermarkId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			InputKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('(^.{1,1020}.jpg$)|(^.{1,1019}.jpeg$)|(^.{1,1020}.png$)')]),
		});

	}


	/** The .jpg or .png file associated with an audio file. */
	export interface JobAlbumArt {
		MergePolicy?: string | null;
		Artwork?: Array<Artwork>;
	}

	/** The .jpg or .png file associated with an audio file. */
	export interface JobAlbumArtFormProperties {
		MergePolicy: FormControl<string | null | undefined>,
	}
	export function CreateJobAlbumArtFormGroup() {
		return new FormGroup<JobAlbumArtFormProperties>({
			MergePolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Replace$)|(^Prepend$)|(^Append$)|(^Fallback$)')]),
		});

	}


	/** <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p> */
	export interface Artwork {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		InputKey?: string | null;
		MaxWidth?: string | null;
		MaxHeight?: string | null;
		SizingPolicy?: string | null;
		PaddingPolicy?: string | null;
		AlbumArtFormat?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}

	/** <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p> */
	export interface ArtworkFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		InputKey: FormControl<string | null | undefined>,
		MaxWidth: FormControl<string | null | undefined>,
		MaxHeight: FormControl<string | null | undefined>,
		SizingPolicy: FormControl<string | null | undefined>,
		PaddingPolicy: FormControl<string | null | undefined>,
		AlbumArtFormat: FormControl<string | null | undefined>,
	}
	export function CreateArtworkFormGroup() {
		return new FormGroup<ArtworkFormProperties>({
			InputKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('(^.{1,1020}.jpg$)|(^.{1,1019}.jpeg$)|(^.{1,1020}.png$)')]),
			MaxWidth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			MaxHeight: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			SizingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)')]),
			PaddingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Pad$)|(^NoPad$)')]),
			AlbumArtFormat: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^jpg$)|(^png$)')]),
		});

	}


	/** Settings for one clip in a composition. All jobs in a playlist must have the same clip settings. */
	export interface Clip {

		/** Settings that determine when a clip begins and how long it lasts. */
		TimeSpan?: TimeSpan;
	}

	/** Settings for one clip in a composition. All jobs in a playlist must have the same clip settings. */
	export interface ClipFormProperties {
	}
	export function CreateClipFormGroup() {
		return new FormGroup<ClipFormProperties>({
		});

	}


	/** The captions to be created, if any. */
	export interface Captions {
		MergePolicy?: string | null;

		/** Maximum items: 20 */
		CaptionSources?: Array<CaptionSource>;

		/** Maximum items: 4 */
		CaptionFormats?: Array<CaptionFormat>;
	}

	/** The captions to be created, if any. */
	export interface CaptionsFormProperties {
		MergePolicy: FormControl<string | null | undefined>,
	}
	export function CreateCaptionsFormGroup() {
		return new FormGroup<CaptionsFormProperties>({
			MergePolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^MergeOverride$)|(^MergeRetain$)|(^Override$)')]),
		});

	}


	/** The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error. */
	export interface CaptionFormat {
		Format?: string | null;
		Pattern?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}

	/** The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error. */
	export interface CaptionFormatFormProperties {
		Format: FormControl<string | null | undefined>,
		Pattern: FormControl<string | null | undefined>,
	}
	export function CreateCaptionFormatFormGroup() {
		return new FormGroup<CaptionFormatFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^mov-text$)|(^srt$)|(^scc$)|(^webvtt$)|(^dfxp$)|(^cea-708$)')]),
			Pattern: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^.*\{language\}.*$)')]),
		});

	}


	/**  Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30.  */
	export interface Playlist {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		Format?: string | null;

		/** Maximum items: 30 */
		OutputKeys?: Array<string>;

		/** The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files. */
		HlsContentProtection?: HlsContentProtection;

		/** <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p> */
		PlayReadyDrm?: PlayReadyDrm;
		Status?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		StatusDetail?: string | null;
	}

	/**  Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30.  */
	export interface PlaylistFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		StatusDetail: FormControl<string | null | undefined>,
	}
	export function CreatePlaylistFormGroup() {
		return new FormGroup<PlaylistFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Format: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^HLSv3$)|(^HLSv4$)|(^Smooth$)|(^MPEG-DASH$)')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)')]),
			StatusDetail: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}


	/** The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files. */
	export interface HlsContentProtection {
		Method?: string | null;
		Key?: string | null;
		KeyMd5?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		InitializationVector?: string | null;

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		LicenseAcquisitionUrl?: string | null;
		KeyStoragePolicy?: string | null;
	}

	/** The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files. */
	export interface HlsContentProtectionFormProperties {
		Method: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		KeyMd5: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		InitializationVector: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 0
		 */
		LicenseAcquisitionUrl: FormControl<string | null | undefined>,
		KeyStoragePolicy: FormControl<string | null | undefined>,
	}
	export function CreateHlsContentProtectionFormGroup() {
		return new FormGroup<HlsContentProtectionFormProperties>({
			Method: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^aes-128$)')]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^$|(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)')]),
			KeyMd5: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^$|(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)')]),
			InitializationVector: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			LicenseAcquisitionUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			KeyStoragePolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^NoStore$)|(^WithVariantPlaylists$)')]),
		});

	}


	/** <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p> */
	export interface PlayReadyDrm {
		Format?: string | null;
		Key?: string | null;
		KeyMd5?: string | null;
		KeyId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		InitializationVector?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LicenseAcquisitionUrl?: string | null;
	}

	/** <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p> */
	export interface PlayReadyDrmFormProperties {
		Format: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		KeyMd5: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		InitializationVector: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LicenseAcquisitionUrl: FormControl<string | null | undefined>,
	}
	export function CreatePlayReadyDrmFormGroup() {
		return new FormGroup<PlayReadyDrmFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^microsoft$)|(^discretix-3.0$)')]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)')]),
			KeyMd5: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^(?:[A-Za-z0-9\+/]{4})*(?:[A-Za-z0-9\+/]{2}==|[A-Za-z0-9\+/]{3}=)?$)')]),
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$)|(^[0-9A-Fa-f]{32}$)')]),
			InitializationVector: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			LicenseAcquisitionUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
		});

	}

	export interface UserMetadata {
	}
	export interface UserMetadataFormProperties {
	}
	export function CreateUserMetadataFormGroup() {
		return new FormGroup<UserMetadataFormProperties>({
		});

	}


	/** Details about the timing of a job. */
	export interface Timing {
		SubmitTimeMillis?: number | null;
		StartTimeMillis?: number | null;
		FinishTimeMillis?: number | null;
	}

	/** Details about the timing of a job. */
	export interface TimingFormProperties {
		SubmitTimeMillis: FormControl<number | null | undefined>,
		StartTimeMillis: FormControl<number | null | undefined>,
		FinishTimeMillis: FormControl<number | null | undefined>,
	}
	export function CreateTimingFormGroup() {
		return new FormGroup<TimingFormProperties>({
			SubmitTimeMillis: new FormControl<number | null | undefined>(undefined),
			StartTimeMillis: new FormControl<number | null | undefined>(undefined),
			FinishTimeMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The <code>CreateJobOutput</code> structure. */
	export interface CreateJobOutput {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Key?: string | null;
		ThumbnailPattern?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		ThumbnailEncryption?: Encryption;
		Rotate?: string | null;
		PresetId?: string | null;
		SegmentDuration?: string | null;
		Watermarks?: Array<JobWatermark>;

		/** The .jpg or .png file associated with an audio file. */
		AlbumArt?: JobAlbumArt;
		Composition?: Array<Clip>;

		/** The captions to be created, if any. */
		Captions?: Captions;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}

	/** The <code>CreateJobOutput</code> structure. */
	export interface CreateJobOutputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
		ThumbnailPattern: FormControl<string | null | undefined>,
		Rotate: FormControl<string | null | undefined>,
		PresetId: FormControl<string | null | undefined>,
		SegmentDuration: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobOutputFormGroup() {
		return new FormGroup<CreateJobOutputFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ThumbnailPattern: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^.*\{count\}.*$)')]),
			Rotate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^0$)|(^90$)|(^180$)|(^270$)')]),
			PresetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
			SegmentDuration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}(\.\d{0,5})?$')]),
		});

	}


	/** Information about the master playlist. */
	export interface CreateJobPlaylist {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		Format?: string | null;

		/** Maximum items: 30 */
		OutputKeys?: Array<string>;

		/** The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files. */
		HlsContentProtection?: HlsContentProtection;

		/** <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p> */
		PlayReadyDrm?: PlayReadyDrm;
	}

	/** Information about the master playlist. */
	export interface CreateJobPlaylistFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobPlaylistFormGroup() {
		return new FormGroup<CreateJobPlaylistFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Format: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^HLSv3$)|(^HLSv4$)|(^Smooth$)|(^MPEG-DASH$)')]),
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


	/** When you create a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface CreatePipelineResponse {

		/** The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
		Warnings?: Array<Warning>;
	}

	/** When you create a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface CreatePipelineResponseFormProperties {
	}
	export function CreateCreatePipelineResponseFormGroup() {
		return new FormGroup<CreatePipelineResponseFormProperties>({
		});

	}


	/** The pipeline (queue) that is used to manage jobs. */
	export interface Pipeline {
		Id?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Name?: string | null;
		Status?: string | null;
		InputBucket?: string | null;
		OutputBucket?: string | null;
		Role?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn?: string | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: Notifications;

		/** The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: PipelineOutputConfig;

		/** The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: PipelineOutputConfig;
	}

	/** The pipeline (queue) that is used to manage jobs. */
	export interface PipelineFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		InputBucket: FormControl<string | null | undefined>,
		OutputBucket: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreatePipelineFormGroup() {
		return new FormGroup<PipelineFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Active$)|(^Paused$)')]),
			InputBucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			OutputBucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws:iam::\w{12}:role/.+$')]),
			AwsKmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}


	/** <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
	export interface Notifications {
		Progressing?: string | null;
		Completed?: string | null;
		Warning?: string | null;
		Error?: string | null;
	}

	/** <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
	export interface NotificationsFormProperties {
		Progressing: FormControl<string | null | undefined>,
		Completed: FormControl<string | null | undefined>,
		Warning: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
	}
	export function CreateNotificationsFormGroup() {
		return new FormGroup<NotificationsFormProperties>({
			Progressing: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Completed: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Warning: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Error: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
		});

	}


	/** The <code>PipelineOutputConfig</code> structure. */
	export interface PipelineOutputConfig {
		Bucket?: string | null;
		StorageClass?: string | null;

		/** Maximum items: 30 */
		Permissions?: Array<Permission>;
	}

	/** The <code>PipelineOutputConfig</code> structure. */
	export interface PipelineOutputConfigFormProperties {
		Bucket: FormControl<string | null | undefined>,
		StorageClass: FormControl<string | null | undefined>,
	}
	export function CreatePipelineOutputConfigFormGroup() {
		return new FormGroup<PipelineOutputConfigFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			StorageClass: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^ReducedRedundancy$)|(^Standard$)')]),
		});

	}


	/** The <code>Permission</code> structure. */
	export interface Permission {
		GranteeType?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Grantee?: string | null;

		/** Maximum items: 30 */
		Access?: Array<string>;
	}

	/** The <code>Permission</code> structure. */
	export interface PermissionFormProperties {
		GranteeType: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Grantee: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			GranteeType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Canonical$)|(^Email$)|(^Group$)')]),
			Grantee: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p> */
	export interface Warning {
		Code?: string | null;
		Message?: string | null;
	}

	/** <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p> */
	export interface WarningFormProperties {
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateWarningFormGroup() {
		return new FormGroup<WarningFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <code>CreatePresetResponse</code> structure. */
	export interface CreatePresetResponse {

		/** Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job. */
		Preset?: Preset;
		Warning?: string | null;
	}

	/** The <code>CreatePresetResponse</code> structure. */
	export interface CreatePresetResponseFormProperties {
		Warning: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresetResponseFormGroup() {
		return new FormGroup<CreatePresetResponseFormProperties>({
			Warning: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job. */
	export interface Preset {
		Id?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		Description?: string | null;
		Container?: string | null;

		/** Parameters required for transcoding audio. */
		Audio?: AudioParameters;

		/** The <code>VideoParameters</code> structure. */
		Video?: VideoParameters;

		/** Thumbnails for videos. */
		Thumbnails?: Thumbnails;
		Type?: string | null;
	}

	/** Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job. */
	export interface PresetFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Container: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreatePresetFormGroup() {
		return new FormGroup<PresetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			Container: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)|(^wav$)|(^mp2$)')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^System$)|(^Custom$)')]),
		});

	}


	/** Parameters required for transcoding audio. */
	export interface AudioParameters {
		Codec?: string | null;
		SampleRate?: string | null;
		BitRate?: string | null;
		Channels?: string | null;
		AudioPackingMode?: string | null;

		/** Options associated with your audio codec. */
		CodecOptions?: AudioCodecOptions;
	}

	/** Parameters required for transcoding audio. */
	export interface AudioParametersFormProperties {
		Codec: FormControl<string | null | undefined>,
		SampleRate: FormControl<string | null | undefined>,
		BitRate: FormControl<string | null | undefined>,
		Channels: FormControl<string | null | undefined>,
		AudioPackingMode: FormControl<string | null | undefined>,
	}
	export function CreateAudioParametersFormGroup() {
		return new FormGroup<AudioParametersFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^AAC$)|(^vorbis$)|(^mp3$)|(^mp2$)|(^pcm$)|(^flac$)')]),
			SampleRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^22050$)|(^32000$)|(^44100$)|(^48000$)|(^96000$)|(^192000$)')]),
			BitRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,3}$')]),
			Channels: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^0$)|(^1$)|(^2$)')]),
			AudioPackingMode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^SingleTrack$)|(^OneChannelPerTrack$)|(^OneChannelPerTrackWithMosTo8Tracks$)')]),
		});

	}


	/** Options associated with your audio codec. */
	export interface AudioCodecOptions {
		Profile?: string | null;
		BitDepth?: string | null;
		BitOrder?: string | null;
		Signed?: string | null;
	}

	/** Options associated with your audio codec. */
	export interface AudioCodecOptionsFormProperties {
		Profile: FormControl<string | null | undefined>,
		BitDepth: FormControl<string | null | undefined>,
		BitOrder: FormControl<string | null | undefined>,
		Signed: FormControl<string | null | undefined>,
	}
	export function CreateAudioCodecOptionsFormGroup() {
		return new FormGroup<AudioCodecOptionsFormProperties>({
			Profile: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^AAC-LC$)|(^HE-AAC$)|(^HE-AACv2$)')]),
			BitDepth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^8$)|(^16$)|(^24$)|(^32$)')]),
			BitOrder: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^LittleEndian$)')]),
			Signed: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Unsigned$)|(^Signed$)')]),
		});

	}


	/** The <code>VideoParameters</code> structure. */
	export interface VideoParameters {
		Codec?: string | null;
		CodecOptions?: CodecOptions;
		KeyframesMaxDist?: string | null;
		FixedGOP?: string | null;
		BitRate?: string | null;
		FrameRate?: string | null;
		MaxFrameRate?: string | null;
		Resolution?: string | null;
		AspectRatio?: string | null;
		MaxWidth?: string | null;
		MaxHeight?: string | null;
		DisplayAspectRatio?: string | null;
		SizingPolicy?: string | null;
		PaddingPolicy?: string | null;
		Watermarks?: Array<PresetWatermark>;
	}

	/** The <code>VideoParameters</code> structure. */
	export interface VideoParametersFormProperties {
		Codec: FormControl<string | null | undefined>,
		KeyframesMaxDist: FormControl<string | null | undefined>,
		FixedGOP: FormControl<string | null | undefined>,
		BitRate: FormControl<string | null | undefined>,
		FrameRate: FormControl<string | null | undefined>,
		MaxFrameRate: FormControl<string | null | undefined>,
		Resolution: FormControl<string | null | undefined>,
		AspectRatio: FormControl<string | null | undefined>,
		MaxWidth: FormControl<string | null | undefined>,
		MaxHeight: FormControl<string | null | undefined>,
		DisplayAspectRatio: FormControl<string | null | undefined>,
		SizingPolicy: FormControl<string | null | undefined>,
		PaddingPolicy: FormControl<string | null | undefined>,
	}
	export function CreateVideoParametersFormGroup() {
		return new FormGroup<VideoParametersFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^H\.264$)|(^vp8$)|(^vp9$)|(^mpeg2$)|(^gif$)')]),
			KeyframesMaxDist: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,6}$')]),
			FixedGOP: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^true$)|(^false$)')]),
			BitRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^\d{2,5}$)|(^auto$)')]),
			FrameRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)')]),
			MaxFrameRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)')]),
			Resolution: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{1,5}x\d{1,5}$)')]),
			AspectRatio: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)')]),
			MaxWidth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			MaxHeight: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			DisplayAspectRatio: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)')]),
			SizingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)')]),
			PaddingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Pad$)|(^NoPad$)')]),
		});

	}

	export interface CodecOptions {
	}
	export interface CodecOptionsFormProperties {
	}
	export function CreateCodecOptionsFormGroup() {
		return new FormGroup<CodecOptionsFormProperties>({
		});

	}


	/** <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p> */
	export interface PresetWatermark {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Id?: string | null;
		MaxWidth?: string | null;
		MaxHeight?: string | null;
		SizingPolicy?: string | null;
		HorizontalAlign?: string | null;
		HorizontalOffset?: string | null;
		VerticalAlign?: string | null;
		VerticalOffset?: string | null;
		Opacity?: string | null;
		Target?: string | null;
	}

	/** <p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p> */
	export interface PresetWatermarkFormProperties {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		MaxWidth: FormControl<string | null | undefined>,
		MaxHeight: FormControl<string | null | undefined>,
		SizingPolicy: FormControl<string | null | undefined>,
		HorizontalAlign: FormControl<string | null | undefined>,
		HorizontalOffset: FormControl<string | null | undefined>,
		VerticalAlign: FormControl<string | null | undefined>,
		VerticalOffset: FormControl<string | null | undefined>,
		Opacity: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreatePresetWatermarkFormGroup() {
		return new FormGroup<PresetWatermarkFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			MaxWidth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^\d{1,3}(\.\d{0,5})?%$)|(^\d{1,4}?px$)')]),
			MaxHeight: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^\d{1,3}(\.\d{0,5})?%$)|(^\d{1,4}?px$)')]),
			SizingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Fit$)|(^Stretch$)|(^ShrinkToFit$)')]),
			HorizontalAlign: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Left$)|(^Right$)|(^Center$)')]),
			HorizontalOffset: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^\d{1,3}(\.\d{0,5})?%$)|(^\d{1,4}?px$)')]),
			VerticalAlign: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Top$)|(^Bottom$)|(^Center$)')]),
			VerticalOffset: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^\d{1,3}(\.\d{0,5})?%$)|(^\d{1,4}?px$)')]),
			Opacity: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,3}(\.\d{0,20})?$')]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Content$)|(^Frame$)')]),
		});

	}


	/** Thumbnails for videos. */
	export interface Thumbnails {
		Format?: string | null;
		Interval?: string | null;
		Resolution?: string | null;
		AspectRatio?: string | null;
		MaxWidth?: string | null;
		MaxHeight?: string | null;
		SizingPolicy?: string | null;
		PaddingPolicy?: string | null;
	}

	/** Thumbnails for videos. */
	export interface ThumbnailsFormProperties {
		Format: FormControl<string | null | undefined>,
		Interval: FormControl<string | null | undefined>,
		Resolution: FormControl<string | null | undefined>,
		AspectRatio: FormControl<string | null | undefined>,
		MaxWidth: FormControl<string | null | undefined>,
		MaxHeight: FormControl<string | null | undefined>,
		SizingPolicy: FormControl<string | null | undefined>,
		PaddingPolicy: FormControl<string | null | undefined>,
	}
	export function CreateThumbnailsFormGroup() {
		return new FormGroup<ThumbnailsFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^jpg$)|(^png$)')]),
			Interval: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}$')]),
			Resolution: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}x\d{1,5}$')]),
			AspectRatio: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)')]),
			MaxWidth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			MaxHeight: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			SizingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)')]),
			PaddingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Pad$)|(^NoPad$)')]),
		});

	}


	/** The <code>DeletePipelineResponse</code> structure. */
	export interface DeletePipelineResponse {
	}

	/** The <code>DeletePipelineResponse</code> structure. */
	export interface DeletePipelineResponseFormProperties {
	}
	export function CreateDeletePipelineResponseFormGroup() {
		return new FormGroup<DeletePipelineResponseFormProperties>({
		});

	}


	/** The <code>DeletePresetResponse</code> structure. */
	export interface DeletePresetResponse {
	}

	/** The <code>DeletePresetResponse</code> structure. */
	export interface DeletePresetResponseFormProperties {
	}
	export function CreateDeletePresetResponseFormGroup() {
		return new FormGroup<DeletePresetResponseFormProperties>({
		});

	}


	/** The <code>ListJobsByPipelineResponse</code> structure. */
	export interface ListJobsByPipelineResponse {
		Jobs?: Array<Job>;
		NextPageToken?: string | null;
	}

	/** The <code>ListJobsByPipelineResponse</code> structure. */
	export interface ListJobsByPipelineResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsByPipelineResponseFormGroup() {
		return new FormGroup<ListJobsByPipelineResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
		});

	}


	/**  The <code>ListJobsByStatusResponse</code> structure.  */
	export interface ListJobsByStatusResponse {
		Jobs?: Array<Job>;
		NextPageToken?: string | null;
	}

	/**  The <code>ListJobsByStatusResponse</code> structure.  */
	export interface ListJobsByStatusResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsByStatusResponseFormGroup() {
		return new FormGroup<ListJobsByStatusResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
		});

	}


	/** A list of the pipelines associated with the current AWS account. */
	export interface ListPipelinesResponse {
		Pipelines?: Array<Pipeline>;
		NextPageToken?: string | null;
	}

	/** A list of the pipelines associated with the current AWS account. */
	export interface ListPipelinesResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipelinesResponseFormGroup() {
		return new FormGroup<ListPipelinesResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
		});

	}


	/** The <code>ListPresetsResponse</code> structure. */
	export interface ListPresetsResponse {
		Presets?: Array<Preset>;
		NextPageToken?: string | null;
	}

	/** The <code>ListPresetsResponse</code> structure. */
	export interface ListPresetsResponseFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPresetsResponseFormGroup() {
		return new FormGroup<ListPresetsResponseFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
		});

	}


	/** The <code>ReadJobResponse</code> structure. */
	export interface ReadJobResponse {

		/** A section of the response body that provides information about the job that is created. */
		Job?: Job;
	}

	/** The <code>ReadJobResponse</code> structure. */
	export interface ReadJobResponseFormProperties {
	}
	export function CreateReadJobResponseFormGroup() {
		return new FormGroup<ReadJobResponseFormProperties>({
		});

	}


	/** The <code>ReadPipelineResponse</code> structure. */
	export interface ReadPipelineResponse {

		/** The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
		Warnings?: Array<Warning>;
	}

	/** The <code>ReadPipelineResponse</code> structure. */
	export interface ReadPipelineResponseFormProperties {
	}
	export function CreateReadPipelineResponseFormGroup() {
		return new FormGroup<ReadPipelineResponseFormProperties>({
		});

	}


	/** The <code>ReadPresetResponse</code> structure. */
	export interface ReadPresetResponse {

		/** Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job. */
		Preset?: Preset;
	}

	/** The <code>ReadPresetResponse</code> structure. */
	export interface ReadPresetResponseFormProperties {
	}
	export function CreateReadPresetResponseFormGroup() {
		return new FormGroup<ReadPresetResponseFormProperties>({
		});

	}


	/** The <code>TestRoleResponse</code> structure. */
	export interface TestRoleResponse {
		Success?: string | null;
		Messages?: Array<string>;
	}

	/** The <code>TestRoleResponse</code> structure. */
	export interface TestRoleResponseFormProperties {
		Success: FormControl<string | null | undefined>,
	}
	export function CreateTestRoleResponseFormGroup() {
		return new FormGroup<TestRoleResponseFormProperties>({
			Success: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^true$)|(^false$)')]),
		});

	}


	/** When you update a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface UpdatePipelineResponse {

		/** The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
		Warnings?: Array<Warning>;
	}

	/** When you update a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface UpdatePipelineResponseFormProperties {
	}
	export function CreateUpdatePipelineResponseFormGroup() {
		return new FormGroup<UpdatePipelineResponseFormProperties>({
		});

	}


	/** The <code>UpdatePipelineNotificationsResponse</code> structure. */
	export interface UpdatePipelineNotificationsResponse {

		/** The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
	}

	/** The <code>UpdatePipelineNotificationsResponse</code> structure. */
	export interface UpdatePipelineNotificationsResponseFormProperties {
	}
	export function CreateUpdatePipelineNotificationsResponseFormGroup() {
		return new FormGroup<UpdatePipelineNotificationsResponseFormProperties>({
		});

	}


	/** When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface UpdatePipelineStatusResponse {

		/** The pipeline (queue) that is used to manage jobs. */
		Pipeline?: Pipeline;
	}

	/** When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request. */
	export interface UpdatePipelineStatusResponseFormProperties {
	}
	export function CreateUpdatePipelineStatusResponseFormGroup() {
		return new FormGroup<UpdatePipelineStatusResponseFormProperties>({
		});

	}


	/** The <code>CancelJobRequest</code> structure. */
	export interface CancelJobRequest {
	}

	/** The <code>CancelJobRequest</code> structure. */
	export interface CancelJobRequestFormProperties {
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
		});

	}


	/** The <code>CreateJobRequest</code> structure. */
	export interface CreateJobRequest {

		/** Required */
		PipelineId: string;

		/** Information about the file that you're transcoding. */
		Input?: JobInput;

		/** Maximum items: 200 */
		Inputs?: Array<JobInput>;

		/** The <code>CreateJobOutput</code> structure. */
		Output?: CreateJobOutput;

		/** Maximum items: 30 */
		Outputs?: Array<CreateJobOutput>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OutputKeyPrefix?: string | null;

		/** Maximum items: 30 */
		Playlists?: Array<CreateJobPlaylist>;
		UserMetadata?: UserMetadata;
	}

	/** The <code>CreateJobRequest</code> structure. */
	export interface CreateJobRequestFormProperties {

		/** Required */
		PipelineId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OutputKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			PipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{13}-\w{6}$')]),
			OutputKeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** The <code>CreatePipelineRequest</code> structure. */
	export interface CreatePipelineRequest {

		/**
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		InputBucket: string;
		OutputBucket?: string | null;

		/** Required */
		Role: string;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn?: string | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: Notifications;

		/** The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: PipelineOutputConfig;

		/** The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: PipelineOutputConfig;
	}

	/** The <code>CreatePipelineRequest</code> structure. */
	export interface CreatePipelineRequestFormProperties {

		/**
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		InputBucket: FormControl<string | null | undefined>,
		OutputBucket: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelineRequestFormGroup() {
		return new FormGroup<CreatePipelineRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			InputBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\w|\.|-){1,255}$')]),
			OutputBucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:iam::\w{12}:role/.+$')]),
			AwsKmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}


	/** The <code>CreatePresetRequest</code> structure. */
	export interface CreatePresetRequest {

		/**
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		Description?: string | null;

		/** Required */
		Container: string;

		/** The <code>VideoParameters</code> structure. */
		Video?: VideoParameters;

		/** Parameters required for transcoding audio. */
		Audio?: AudioParameters;

		/** Thumbnails for videos. */
		Thumbnails?: Thumbnails;
	}

	/** The <code>CreatePresetRequest</code> structure. */
	export interface CreatePresetRequestFormProperties {

		/**
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Container: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresetRequestFormGroup() {
		return new FormGroup<CreatePresetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			Container: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)|(^wav$)|(^mp2$)')]),
		});

	}


	/** The <code>DeletePipelineRequest</code> structure. */
	export interface DeletePipelineRequest {
	}

	/** The <code>DeletePipelineRequest</code> structure. */
	export interface DeletePipelineRequestFormProperties {
	}
	export function CreateDeletePipelineRequestFormGroup() {
		return new FormGroup<DeletePipelineRequestFormProperties>({
		});

	}


	/** The <code>DeletePresetRequest</code> structure. */
	export interface DeletePresetRequest {
	}

	/** The <code>DeletePresetRequest</code> structure. */
	export interface DeletePresetRequestFormProperties {
	}
	export function CreateDeletePresetRequestFormGroup() {
		return new FormGroup<DeletePresetRequestFormProperties>({
		});

	}


	/** The <code>ListJobsByPipelineRequest</code> structure. */
	export interface ListJobsByPipelineRequest {
	}

	/** The <code>ListJobsByPipelineRequest</code> structure. */
	export interface ListJobsByPipelineRequestFormProperties {
	}
	export function CreateListJobsByPipelineRequestFormGroup() {
		return new FormGroup<ListJobsByPipelineRequestFormProperties>({
		});

	}


	/** The <code>ListJobsByStatusRequest</code> structure. */
	export interface ListJobsByStatusRequest {
	}

	/** The <code>ListJobsByStatusRequest</code> structure. */
	export interface ListJobsByStatusRequestFormProperties {
	}
	export function CreateListJobsByStatusRequestFormGroup() {
		return new FormGroup<ListJobsByStatusRequestFormProperties>({
		});

	}


	/** The <code>ListPipelineRequest</code> structure. */
	export interface ListPipelinesRequest {
	}

	/** The <code>ListPipelineRequest</code> structure. */
	export interface ListPipelinesRequestFormProperties {
	}
	export function CreateListPipelinesRequestFormGroup() {
		return new FormGroup<ListPipelinesRequestFormProperties>({
		});

	}


	/** The <code>ListPresetsRequest</code> structure. */
	export interface ListPresetsRequest {
	}

	/** The <code>ListPresetsRequest</code> structure. */
	export interface ListPresetsRequestFormProperties {
	}
	export function CreateListPresetsRequestFormGroup() {
		return new FormGroup<ListPresetsRequestFormProperties>({
		});

	}


	/** The <code>ReadJobRequest</code> structure. */
	export interface ReadJobRequest {
	}

	/** The <code>ReadJobRequest</code> structure. */
	export interface ReadJobRequestFormProperties {
	}
	export function CreateReadJobRequestFormGroup() {
		return new FormGroup<ReadJobRequestFormProperties>({
		});

	}


	/** The <code>ReadPipelineRequest</code> structure. */
	export interface ReadPipelineRequest {
	}

	/** The <code>ReadPipelineRequest</code> structure. */
	export interface ReadPipelineRequestFormProperties {
	}
	export function CreateReadPipelineRequestFormGroup() {
		return new FormGroup<ReadPipelineRequestFormProperties>({
		});

	}


	/** The <code>ReadPresetRequest</code> structure. */
	export interface ReadPresetRequest {
	}

	/** The <code>ReadPresetRequest</code> structure. */
	export interface ReadPresetRequestFormProperties {
	}
	export function CreateReadPresetRequestFormGroup() {
		return new FormGroup<ReadPresetRequestFormProperties>({
		});

	}


	/**  The <code>TestRoleRequest</code> structure.  */
	export interface TestRoleRequest {

		/** Required */
		Role: string;

		/** Required */
		InputBucket: string;

		/** Required */
		OutputBucket: string;

		/**
		 * Required
		 * Maximum items: 30
		 */
		Topics: Array<string>;
	}

	/**  The <code>TestRoleRequest</code> structure.  */
	export interface TestRoleRequestFormProperties {

		/** Required */
		Role: FormControl<string | null | undefined>,

		/** Required */
		InputBucket: FormControl<string | null | undefined>,

		/** Required */
		OutputBucket: FormControl<string | null | undefined>,
	}
	export function CreateTestRoleRequestFormGroup() {
		return new FormGroup<TestRoleRequestFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:iam::\w{12}:role/.+$')]),
			InputBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\w|\.|-){1,255}$')]),
			OutputBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\w|\.|-){1,255}$')]),
		});

	}


	/** The <code>UpdatePipelineNotificationsRequest</code> structure. */
	export interface UpdatePipelineNotificationsRequest {

		/**
		 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
		 * Required
		 */
		Notifications: Notifications;
	}

	/** The <code>UpdatePipelineNotificationsRequest</code> structure. */
	export interface UpdatePipelineNotificationsRequestFormProperties {
	}
	export function CreateUpdatePipelineNotificationsRequestFormGroup() {
		return new FormGroup<UpdatePipelineNotificationsRequestFormProperties>({
		});

	}


	/** The <code>UpdatePipelineRequest</code> structure. */
	export interface UpdatePipelineRequest {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Name?: string | null;
		InputBucket?: string | null;
		Role?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn?: string | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: Notifications;

		/** The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: PipelineOutputConfig;

		/** The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: PipelineOutputConfig;
	}

	/** The <code>UpdatePipelineRequest</code> structure. */
	export interface UpdatePipelineRequestFormProperties {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		InputBucket: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelineRequestFormGroup() {
		return new FormGroup<UpdatePipelineRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			InputBucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws:iam::\w{12}:role/.+$')]),
			AwsKmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}


	/** The <code>UpdatePipelineStatusRequest</code> structure. */
	export interface UpdatePipelineStatusRequest {

		/** Required */
		Status: string;
	}

	/** The <code>UpdatePipelineStatusRequest</code> structure. */
	export interface UpdatePipelineStatusRequestFormProperties {

		/** Required */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelineStatusRequestFormGroup() {
		return new FormGroup<UpdatePipelineStatusRequestFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^Active$)|(^Paused$)')]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>
		 * Delete 2012-09-25/jobs/{Id}
		 * @param {string} Id <p>The identifier of the job that you want to cancel.</p> <p>To get a list of the jobs (including their <code>jobId</code>) that have a status of <code>Submitted</code>, use the <a>ListJobsByStatus</a> API action.</p>
		 * @return {void} 
		 */
		CancelJob(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2012-09-25/jobs/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The ReadJob operation returns detailed information about a job.
		 * Get 2012-09-25/jobs/{Id}
		 * @param {string} Id The identifier of the job for which you want to get detailed information.
		 * @return {ReadJobResponse} Success
		 */
		ReadJob(Id: string): Observable<ReadJobResponse> {
			return this.http.get<ReadJobResponse>(this.baseUri + '2012-09-25/jobs/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>
		 * Post 2012-09-25/jobs
		 * @return {void} 
		 */
		CreateJob(requestBody: CreateJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2012-09-25/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The CreatePipeline operation creates a pipeline with settings that you specify.
		 * Post 2012-09-25/pipelines
		 * @return {void} 
		 */
		CreatePipeline(requestBody: CreatePipelinePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2012-09-25/pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The ListPipelines operation gets a list of the pipelines associated with the current AWS account.
		 * Get 2012-09-25/pipelines
		 * @param {string} Ascending To list pipelines in chronological order by the date and time that they were created, enter <code>true</code>. To list pipelines in reverse chronological order, enter <code>false</code>.
		 * @param {string} PageToken When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. 
		 * @return {ListPipelinesResponse} Success
		 */
		ListPipelines(Ascending: string | null | undefined, PageToken: string | null | undefined): Observable<ListPipelinesResponse> {
			return this.http.get<ListPipelinesResponse>(this.baseUri + '2012-09-25/pipelines?Ascending=' + (Ascending == null ? '' : encodeURIComponent(Ascending)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * <p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>
		 * Post 2012-09-25/presets
		 * @return {void} 
		 */
		CreatePreset(requestBody: CreatePresetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2012-09-25/presets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.
		 * Get 2012-09-25/presets
		 * @param {string} Ascending To list presets in chronological order by the date and time that they were created, enter <code>true</code>. To list presets in reverse chronological order, enter <code>false</code>.
		 * @param {string} PageToken When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. 
		 * @return {ListPresetsResponse} Success
		 */
		ListPresets(Ascending: string | null | undefined, PageToken: string | null | undefined): Observable<ListPresetsResponse> {
			return this.http.get<ListPresetsResponse>(this.baseUri + '2012-09-25/presets?Ascending=' + (Ascending == null ? '' : encodeURIComponent(Ascending)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * <p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>
		 * Delete 2012-09-25/pipelines/{Id}
		 * @param {string} Id The identifier of the pipeline that you want to delete.
		 * @return {void} 
		 */
		DeletePipeline(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The ReadPipeline operation gets detailed information about a pipeline.
		 * Get 2012-09-25/pipelines/{Id}
		 * @param {string} Id The identifier of the pipeline to read.
		 * @return {ReadPipelineResponse} Success
		 */
		ReadPipeline(Id: string): Observable<ReadPipelineResponse> {
			return this.http.get<ReadPipelineResponse>(this.baseUri + '2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>
		 * Put 2012-09-25/pipelines/{Id}
		 * @param {string} Id The ID of the pipeline that you want to update.
		 * @return {UpdatePipelineResponse} Success
		 */
		UpdatePipeline(Id: string, requestBody: UpdatePipelinePutBody): Observable<UpdatePipelineResponse> {
			return this.http.put<UpdatePipelineResponse>(this.baseUri + '2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>
		 * Delete 2012-09-25/presets/{Id}
		 * @param {string} Id The identifier of the preset for which you want to get detailed information.
		 * @return {void} 
		 */
		DeletePreset(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2012-09-25/presets/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The ReadPreset operation gets detailed information about a preset.
		 * Get 2012-09-25/presets/{Id}
		 * @param {string} Id The identifier of the preset for which you want to get detailed information.
		 * @return {ReadPresetResponse} Success
		 */
		ReadPreset(Id: string): Observable<ReadPresetResponse> {
			return this.http.get<ReadPresetResponse>(this.baseUri + '2012-09-25/presets/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>
		 * Get 2012-09-25/jobsByPipeline/{PipelineId}
		 * @param {string} PipelineId The ID of the pipeline for which you want to get job information.
		 * @param {string} Ascending  To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>. 
		 * @param {string} PageToken  When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. 
		 * @return {ListJobsByPipelineResponse} Success
		 */
		ListJobsByPipeline(PipelineId: string, Ascending: string | null | undefined, PageToken: string | null | undefined): Observable<ListJobsByPipelineResponse> {
			return this.http.get<ListJobsByPipelineResponse>(this.baseUri + '2012-09-25/jobsByPipeline/' + (PipelineId == null ? '' : encodeURIComponent(PipelineId)) + '&Ascending=' + (Ascending == null ? '' : encodeURIComponent(Ascending)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.
		 * Get 2012-09-25/jobsByStatus/{Status}
		 * @param {string} Status To get information about all of the jobs associated with the current AWS account that have a given status, specify the following status: <code>Submitted</code>, <code>Progressing</code>, <code>Complete</code>, <code>Canceled</code>, or <code>Error</code>.
		 * @param {string} Ascending  To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>. 
		 * @param {string} PageToken  When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. 
		 * @return {ListJobsByStatusResponse} Success
		 */
		ListJobsByStatus(Status: string, Ascending: string | null | undefined, PageToken: string | null | undefined): Observable<ListJobsByStatusResponse> {
			return this.http.get<ListJobsByStatusResponse>(this.baseUri + '2012-09-25/jobsByStatus/' + (Status == null ? '' : encodeURIComponent(Status)) + '&Ascending=' + (Ascending == null ? '' : encodeURIComponent(Ascending)) + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * <p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>
		 * Post 2012-09-25/roleTests
		 * @return {TestRoleResponse} Success
		 */
		TestRole(requestBody: TestRolePostBody): Observable<TestRoleResponse> {
			return this.http.post<TestRoleResponse>(this.baseUri + '2012-09-25/roleTests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
		 * Post 2012-09-25/pipelines/{Id}/notifications
		 * @param {string} Id The identifier of the pipeline for which you want to change notification settings.
		 * @return {UpdatePipelineNotificationsResponse} Success
		 */
		UpdatePipelineNotifications(Id: string, requestBody: UpdatePipelineNotificationsPostBody): Observable<UpdatePipelineNotificationsResponse> {
			return this.http.post<UpdatePipelineNotificationsResponse>(this.baseUri + '2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)) + '/notifications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>
		 * Post 2012-09-25/pipelines/{Id}/status
		 * @param {string} Id The identifier of the pipeline to update.
		 * @return {UpdatePipelineStatusResponse} Success
		 */
		UpdatePipelineStatus(Id: string, requestBody: UpdatePipelineStatusPostBody): Observable<UpdatePipelineStatusResponse> {
			return this.http.post<UpdatePipelineStatusResponse>(this.baseUri + '2012-09-25/pipelines/' + (Id == null ? '' : encodeURIComponent(Id)) + '/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateJobPostBody {

		/**
		 * The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.
		 * Required
		 */
		PipelineId: string;

		/** Information about the file that you're transcoding. */
		Input?: CreateJobPostBodyInput;

		/**
		 * A section of the request body that provides information about the files that are being transcoded.
		 * Maximum items: 200
		 */
		Inputs?: Array<JobInput>;

		/** The <code>CreateJobOutput</code> structure. */
		Output?: CreateJobPostBodyOutput;

		/**
		 * A section of the request body that provides information about the transcoded (target) files. We recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax.
		 * Maximum items: 30
		 */
		Outputs?: Array<CreateJobOutput>;

		/**
		 * The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.
		 * Max length: 255
		 * Min length: 1
		 */
		OutputKeyPrefix?: string | null;

		/**
		 * <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>
		 * Maximum items: 30
		 */
		Playlists?: Array<CreateJobPlaylist>;

		/** User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them. */
		UserMetadata?: {[id: string]: string };
	}
	export interface CreateJobPostBodyFormProperties {

		/**
		 * The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.
		 * Required
		 */
		PipelineId: FormControl<string | null | undefined>,

		/**
		 * The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.
		 * Max length: 255
		 * Min length: 1
		 */
		OutputKeyPrefix: FormControl<string | null | undefined>,

		/** User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them. */
		UserMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateJobPostBodyFormGroup() {
		return new FormGroup<CreateJobPostBodyFormProperties>({
			PipelineId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{13}-\w{6}$')]),
			OutputKeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			UserMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBodyInput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Key?: string | null;
		FrameRate?: string | null;
		Resolution?: string | null;
		AspectRatio?: string | null;
		Interlaced?: string | null;
		Container?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;

		/** Settings that determine when a clip begins and how long it lasts. */
		TimeSpan?: TimeSpan;

		/** The captions to be created, if any. */
		InputCaptions?: InputCaptions;

		/** The detected properties of the input file. Elastic Transcoder identifies these values from the input file. */
		DetectedProperties?: DetectedProperties;
	}
	export interface CreateJobPostBodyInputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
		FrameRate: FormControl<string | null | undefined>,
		Resolution: FormControl<string | null | undefined>,
		AspectRatio: FormControl<string | null | undefined>,
		Interlaced: FormControl<string | null | undefined>,
		Container: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobPostBodyInputFormGroup() {
		return new FormGroup<CreateJobPostBodyInputFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			FrameRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)')]),
			Resolution: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{1,5}x\d{1,5}$)')]),
			AspectRatio: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)')]),
			Interlaced: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^true$)|(^false$)')]),
			Container: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^3gp$)|(^asf$)|(^avi$)|(^divx$)|(^flv$)|(^mkv$)|(^mov$)|(^mp4$)|(^mpeg$)|(^mpeg-ps$)|(^mpeg-ts$)|(^mxf$)|(^ogg$)|(^ts$)|(^vob$)|(^wav$)|(^webm$)|(^mp3$)|(^m4a$)|(^aac$)')]),
		});

	}

	export interface CreateJobPostBodyOutput {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Key?: string | null;
		ThumbnailPattern?: string | null;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		ThumbnailEncryption?: Encryption;
		Rotate?: string | null;
		PresetId?: string | null;
		SegmentDuration?: string | null;
		Watermarks?: Array<JobWatermark>;

		/** The .jpg or .png file associated with an audio file. */
		AlbumArt?: JobAlbumArt;
		Composition?: Array<Clip>;

		/** The captions to be created, if any. */
		Captions?: Captions;

		/** The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files. */
		Encryption?: Encryption;
	}
	export interface CreateJobPostBodyOutputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
		ThumbnailPattern: FormControl<string | null | undefined>,
		Rotate: FormControl<string | null | undefined>,
		PresetId: FormControl<string | null | undefined>,
		SegmentDuration: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobPostBodyOutputFormGroup() {
		return new FormGroup<CreateJobPostBodyOutputFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ThumbnailPattern: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^.*\{count\}.*$)')]),
			Rotate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^0$)|(^90$)|(^180$)|(^270$)')]),
			PresetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{13}-\w{6}$')]),
			SegmentDuration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}(\.\d{0,5})?$')]),
		});

	}

	export interface CreatePipelinePostBody {

		/**
		 * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters.</p>
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The Amazon S3 bucket in which you saved the media files that you want to transcode.
		 * Required
		 */
		InputBucket: string;

		/** <p>The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. (Use this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)</p> <p>Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files. </p> <important> <p>When Elastic Transcoder saves files in <code>OutputBucket</code>, it grants full control over the files only to the AWS account that owns the role that is specified by <code>Role</code>.</p> </important> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit <code>OutputBucket</code> and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead.</p> */
		OutputBucket?: string | null;

		/**
		 * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to create the pipeline.
		 * Required
		 */
		Role: string;

		/**
		 * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn?: string | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: CreatePipelinePostBodyNotifications;

		/** The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: CreatePipelinePostBodyContentConfig;

		/** The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: CreatePipelinePostBodyThumbnailConfig;
	}
	export interface CreatePipelinePostBodyFormProperties {

		/**
		 * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters.</p>
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Amazon S3 bucket in which you saved the media files that you want to transcode.
		 * Required
		 */
		InputBucket: FormControl<string | null | undefined>,

		/** <p>The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. (Use this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)</p> <p>Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files. </p> <important> <p>When Elastic Transcoder saves files in <code>OutputBucket</code>, it grants full control over the files only to the AWS account that owns the role that is specified by <code>Role</code>.</p> </important> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit <code>OutputBucket</code> and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead.</p> */
		OutputBucket: FormControl<string | null | undefined>,

		/**
		 * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to create the pipeline.
		 * Required
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelinePostBodyFormGroup() {
		return new FormGroup<CreatePipelinePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			InputBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\w|\.|-){1,255}$')]),
			OutputBucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:iam::\w{12}:role/.+$')]),
			AwsKmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface CreatePipelinePostBodyNotifications {
		Progressing?: string | null;
		Completed?: string | null;
		Warning?: string | null;
		Error?: string | null;
	}
	export interface CreatePipelinePostBodyNotificationsFormProperties {
		Progressing: FormControl<string | null | undefined>,
		Completed: FormControl<string | null | undefined>,
		Warning: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelinePostBodyNotificationsFormGroup() {
		return new FormGroup<CreatePipelinePostBodyNotificationsFormProperties>({
			Progressing: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Completed: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Warning: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Error: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
		});

	}

	export interface CreatePipelinePostBodyContentConfig {
		Bucket?: string | null;
		StorageClass?: string | null;

		/** Maximum items: 30 */
		Permissions?: Array<Permission>;
	}
	export interface CreatePipelinePostBodyContentConfigFormProperties {
		Bucket: FormControl<string | null | undefined>,
		StorageClass: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelinePostBodyContentConfigFormGroup() {
		return new FormGroup<CreatePipelinePostBodyContentConfigFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			StorageClass: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^ReducedRedundancy$)|(^Standard$)')]),
		});

	}

	export interface CreatePipelinePostBodyThumbnailConfig {
		Bucket?: string | null;
		StorageClass?: string | null;

		/** Maximum items: 30 */
		Permissions?: Array<Permission>;
	}
	export interface CreatePipelinePostBodyThumbnailConfigFormProperties {
		Bucket: FormControl<string | null | undefined>,
		StorageClass: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelinePostBodyThumbnailConfigFormGroup() {
		return new FormGroup<CreatePipelinePostBodyThumbnailConfigFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			StorageClass: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^ReducedRedundancy$)|(^Standard$)')]),
		});

	}

	export interface CreatePresetPostBody {

		/**
		 * The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Name: string;

		/**
		 * A description of the preset.
		 * Max length: 255
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.
		 * Required
		 */
		Container: string;

		/** The <code>VideoParameters</code> structure. */
		Video?: CreatePresetPostBodyVideo;

		/** Parameters required for transcoding audio. */
		Audio?: CreatePresetPostBodyAudio;

		/** Thumbnails for videos. */
		Thumbnails?: CreatePresetPostBodyThumbnails;
	}
	export interface CreatePresetPostBodyFormProperties {

		/**
		 * The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the preset.
		 * Max length: 255
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.
		 * Required
		 */
		Container: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresetPostBodyFormGroup() {
		return new FormGroup<CreatePresetPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			Container: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)|(^wav$)|(^mp2$)')]),
		});

	}

	export interface CreatePresetPostBodyVideo {
		Codec?: string | null;
		CodecOptions?: CodecOptions;
		KeyframesMaxDist?: string | null;
		FixedGOP?: string | null;
		BitRate?: string | null;
		FrameRate?: string | null;
		MaxFrameRate?: string | null;
		Resolution?: string | null;
		AspectRatio?: string | null;
		MaxWidth?: string | null;
		MaxHeight?: string | null;
		DisplayAspectRatio?: string | null;
		SizingPolicy?: string | null;
		PaddingPolicy?: string | null;
		Watermarks?: Array<PresetWatermark>;
	}
	export interface CreatePresetPostBodyVideoFormProperties {
		Codec: FormControl<string | null | undefined>,
		KeyframesMaxDist: FormControl<string | null | undefined>,
		FixedGOP: FormControl<string | null | undefined>,
		BitRate: FormControl<string | null | undefined>,
		FrameRate: FormControl<string | null | undefined>,
		MaxFrameRate: FormControl<string | null | undefined>,
		Resolution: FormControl<string | null | undefined>,
		AspectRatio: FormControl<string | null | undefined>,
		MaxWidth: FormControl<string | null | undefined>,
		MaxHeight: FormControl<string | null | undefined>,
		DisplayAspectRatio: FormControl<string | null | undefined>,
		SizingPolicy: FormControl<string | null | undefined>,
		PaddingPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresetPostBodyVideoFormGroup() {
		return new FormGroup<CreatePresetPostBodyVideoFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^H\.264$)|(^vp8$)|(^vp9$)|(^mpeg2$)|(^gif$)')]),
			KeyframesMaxDist: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,6}$')]),
			FixedGOP: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^true$)|(^false$)')]),
			BitRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^\d{2,5}$)|(^auto$)')]),
			FrameRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)')]),
			MaxFrameRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)')]),
			Resolution: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{1,5}x\d{1,5}$)')]),
			AspectRatio: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)')]),
			MaxWidth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			MaxHeight: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			DisplayAspectRatio: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)')]),
			SizingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)')]),
			PaddingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Pad$)|(^NoPad$)')]),
		});

	}

	export interface CreatePresetPostBodyAudio {
		Codec?: string | null;
		SampleRate?: string | null;
		BitRate?: string | null;
		Channels?: string | null;
		AudioPackingMode?: string | null;

		/** Options associated with your audio codec. */
		CodecOptions?: AudioCodecOptions;
	}
	export interface CreatePresetPostBodyAudioFormProperties {
		Codec: FormControl<string | null | undefined>,
		SampleRate: FormControl<string | null | undefined>,
		BitRate: FormControl<string | null | undefined>,
		Channels: FormControl<string | null | undefined>,
		AudioPackingMode: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresetPostBodyAudioFormGroup() {
		return new FormGroup<CreatePresetPostBodyAudioFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^AAC$)|(^vorbis$)|(^mp3$)|(^mp2$)|(^pcm$)|(^flac$)')]),
			SampleRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^22050$)|(^32000$)|(^44100$)|(^48000$)|(^96000$)|(^192000$)')]),
			BitRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,3}$')]),
			Channels: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^0$)|(^1$)|(^2$)')]),
			AudioPackingMode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^SingleTrack$)|(^OneChannelPerTrack$)|(^OneChannelPerTrackWithMosTo8Tracks$)')]),
		});

	}

	export interface CreatePresetPostBodyThumbnails {
		Format?: string | null;
		Interval?: string | null;
		Resolution?: string | null;
		AspectRatio?: string | null;
		MaxWidth?: string | null;
		MaxHeight?: string | null;
		SizingPolicy?: string | null;
		PaddingPolicy?: string | null;
	}
	export interface CreatePresetPostBodyThumbnailsFormProperties {
		Format: FormControl<string | null | undefined>,
		Interval: FormControl<string | null | undefined>,
		Resolution: FormControl<string | null | undefined>,
		AspectRatio: FormControl<string | null | undefined>,
		MaxWidth: FormControl<string | null | undefined>,
		MaxHeight: FormControl<string | null | undefined>,
		SizingPolicy: FormControl<string | null | undefined>,
		PaddingPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresetPostBodyThumbnailsFormGroup() {
		return new FormGroup<CreatePresetPostBodyThumbnailsFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^jpg$)|(^png$)')]),
			Interval: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}$')]),
			Resolution: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{1,5}x\d{1,5}$')]),
			AspectRatio: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)')]),
			MaxWidth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			MaxHeight: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^auto$)|(^\d{2,4}$)')]),
			SizingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)')]),
			PaddingPolicy: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^Pad$)|(^NoPad$)')]),
		});

	}

	export interface UpdatePipelinePutBody {

		/**
		 * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>
		 * Max length: 40
		 * Min length: 1
		 */
		Name?: string | null;

		/** The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks. */
		InputBucket?: string | null;

		/** The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline. */
		Role?: string | null;

		/**
		 * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn?: string | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> */
		Notifications?: UpdatePipelinePutBodyNotifications;

		/** The <code>PipelineOutputConfig</code> structure. */
		ContentConfig?: UpdatePipelinePutBodyContentConfig;

		/** The <code>PipelineOutputConfig</code> structure. */
		ThumbnailConfig?: UpdatePipelinePutBodyThumbnailConfig;
	}
	export interface UpdatePipelinePutBodyFormProperties {

		/**
		 * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>
		 * Max length: 40
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks. */
		InputBucket: FormControl<string | null | undefined>,

		/** The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline. */
		Role: FormControl<string | null | undefined>,

		/**
		 * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
		 * Max length: 255
		 * Min length: 0
		 */
		AwsKmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelinePutBodyFormGroup() {
		return new FormGroup<UpdatePipelinePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			InputBucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws:iam::\w{12}:role/.+$')]),
			AwsKmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface UpdatePipelinePutBodyNotifications {
		Progressing?: string | null;
		Completed?: string | null;
		Warning?: string | null;
		Error?: string | null;
	}
	export interface UpdatePipelinePutBodyNotificationsFormProperties {
		Progressing: FormControl<string | null | undefined>,
		Completed: FormControl<string | null | undefined>,
		Warning: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelinePutBodyNotificationsFormGroup() {
		return new FormGroup<UpdatePipelinePutBodyNotificationsFormProperties>({
			Progressing: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Completed: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Warning: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Error: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
		});

	}

	export interface UpdatePipelinePutBodyContentConfig {
		Bucket?: string | null;
		StorageClass?: string | null;

		/** Maximum items: 30 */
		Permissions?: Array<Permission>;
	}
	export interface UpdatePipelinePutBodyContentConfigFormProperties {
		Bucket: FormControl<string | null | undefined>,
		StorageClass: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelinePutBodyContentConfigFormGroup() {
		return new FormGroup<UpdatePipelinePutBodyContentConfigFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			StorageClass: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^ReducedRedundancy$)|(^Standard$)')]),
		});

	}

	export interface UpdatePipelinePutBodyThumbnailConfig {
		Bucket?: string | null;
		StorageClass?: string | null;

		/** Maximum items: 30 */
		Permissions?: Array<Permission>;
	}
	export interface UpdatePipelinePutBodyThumbnailConfigFormProperties {
		Bucket: FormControl<string | null | undefined>,
		StorageClass: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelinePutBodyThumbnailConfigFormGroup() {
		return new FormGroup<UpdatePipelinePutBodyThumbnailConfigFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(\w|\.|-){1,255}$')]),
			StorageClass: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^ReducedRedundancy$)|(^Standard$)')]),
		});

	}

	export interface TestRolePostBody {

		/**
		 * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.
		 * Required
		 */
		Role: string;

		/**
		 * The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.
		 * Required
		 */
		InputBucket: string;

		/**
		 * The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.
		 * Required
		 */
		OutputBucket: string;

		/**
		 * The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.
		 * Required
		 * Maximum items: 30
		 */
		Topics: Array<string>;
	}
	export interface TestRolePostBodyFormProperties {

		/**
		 * The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.
		 * Required
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.
		 * Required
		 */
		InputBucket: FormControl<string | null | undefined>,

		/**
		 * The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.
		 * Required
		 */
		OutputBucket: FormControl<string | null | undefined>,
	}
	export function CreateTestRolePostBodyFormGroup() {
		return new FormGroup<TestRolePostBodyFormProperties>({
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:iam::\w{12}:role/.+$')]),
			InputBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\w|\.|-){1,255}$')]),
			OutputBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(\w|\.|-){1,255}$')]),
		});

	}

	export interface UpdatePipelineNotificationsPostBody {

		/**
		 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
		 * Required
		 */
		Notifications: UpdatePipelineNotificationsPostBodyNotifications;
	}
	export interface UpdatePipelineNotificationsPostBodyFormProperties {
	}
	export function CreateUpdatePipelineNotificationsPostBodyFormGroup() {
		return new FormGroup<UpdatePipelineNotificationsPostBodyFormProperties>({
		});

	}

	export interface UpdatePipelineNotificationsPostBodyNotifications {
		Progressing?: string | null;
		Completed?: string | null;
		Warning?: string | null;
		Error?: string | null;
	}
	export interface UpdatePipelineNotificationsPostBodyNotificationsFormProperties {
		Progressing: FormControl<string | null | undefined>,
		Completed: FormControl<string | null | undefined>,
		Warning: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelineNotificationsPostBodyNotificationsFormGroup() {
		return new FormGroup<UpdatePipelineNotificationsPostBodyNotificationsFormProperties>({
			Progressing: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Completed: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Warning: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
			Error: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^$)|(^arn:aws:sns:.*:\w{12}:.+$)')]),
		});

	}

	export interface UpdatePipelineStatusPostBody {

		/**
		 * <p>The desired status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>
		 * Required
		 */
		Status: string;
	}
	export interface UpdatePipelineStatusPostBodyFormProperties {

		/**
		 * <p>The desired status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>
		 * Required
		 */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelineStatusPostBodyFormGroup() {
		return new FormGroup<UpdatePipelineStatusPostBodyFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(^Active$)|(^Paused$)')]),
		});

	}

}

