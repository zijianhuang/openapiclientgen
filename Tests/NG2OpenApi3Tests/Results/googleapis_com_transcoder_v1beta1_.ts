import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Ad break. */
	export interface AdBreak {

		/** Start time in seconds for the ad break, relative to the output file timeline. The default is `0s`. */
		startTimeOffset?: string | null;
	}

	/** Ad break. */
	export interface AdBreakFormProperties {

		/** Start time in seconds for the ad break, relative to the output file timeline. The default is `0s`. */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateAdBreakFormGroup() {
		return new FormGroup<AdBreakFormProperties>({
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for AES-128 encryption. */
	export interface Aes128Encryption {

		/** Required. URI of the key delivery service. This URI is inserted into the M3U8 header. */
		keyUri?: string | null;
	}

	/** Configuration for AES-128 encryption. */
	export interface Aes128EncryptionFormProperties {

		/** Required. URI of the key delivery service. This URI is inserted into the M3U8 header. */
		keyUri: FormControl<string | null | undefined>,
	}
	export function CreateAes128EncryptionFormGroup() {
		return new FormGroup<Aes128EncryptionFormProperties>({
			keyUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Animation types. */
	export interface Animation {

		/** End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video. */
		animationEnd?: AnimationEnd;

		/** Display overlay object with fade animation. */
		animationFade?: AnimationFade;

		/** Display static overlay object. */
		animationStatic?: AnimationStatic;
	}

	/** Animation types. */
	export interface AnimationFormProperties {
	}
	export function CreateAnimationFormGroup() {
		return new FormGroup<AnimationFormProperties>({
		});

	}


	/** End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video. */
	export interface AnimationEnd {

		/** The time to end overlay object, in seconds. Default: 0 */
		startTimeOffset?: string | null;
	}

	/** End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video. */
	export interface AnimationEndFormProperties {

		/** The time to end overlay object, in seconds. Default: 0 */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateAnimationEndFormGroup() {
		return new FormGroup<AnimationEndFormProperties>({
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Display overlay object with fade animation. */
	export interface AnimationFade {

		/** The time to end the fade animation, in seconds. Default: `start_time_offset` + 1s */
		endTimeOffset?: string | null;

		/** Required. Type of fade animation: `FADE_IN` or `FADE_OUT`. */
		fadeType?: AnimationFadeFadeType | null;

		/** The time to start the fade animation, in seconds. Default: 0 */
		startTimeOffset?: string | null;

		/** 2D normalized coordinates. Default: `{0.0, 0.0}` */
		xy?: NormalizedCoordinate;
	}

	/** Display overlay object with fade animation. */
	export interface AnimationFadeFormProperties {

		/** The time to end the fade animation, in seconds. Default: `start_time_offset` + 1s */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Required. Type of fade animation: `FADE_IN` or `FADE_OUT`. */
		fadeType: FormControl<AnimationFadeFadeType | null | undefined>,

		/** The time to start the fade animation, in seconds. Default: 0 */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateAnimationFadeFormGroup() {
		return new FormGroup<AnimationFadeFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			fadeType: new FormControl<AnimationFadeFadeType | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnimationFadeFadeType { FADE_TYPE_UNSPECIFIED = 'FADE_TYPE_UNSPECIFIED', FADE_IN = 'FADE_IN', FADE_OUT = 'FADE_OUT' }


	/** 2D normalized coordinates. Default: `{0.0, 0.0}` */
	export interface NormalizedCoordinate {

		/**
		 * Normalized x coordinate.
		 * Type: double
		 */
		x?: number | null;

		/**
		 * Normalized y coordinate.
		 * Type: double
		 */
		y?: number | null;
	}

	/** 2D normalized coordinates. Default: `{0.0, 0.0}` */
	export interface NormalizedCoordinateFormProperties {

		/**
		 * Normalized x coordinate.
		 * Type: double
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Normalized y coordinate.
		 * Type: double
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateNormalizedCoordinateFormGroup() {
		return new FormGroup<NormalizedCoordinateFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Display static overlay object. */
	export interface AnimationStatic {

		/** The time to start displaying the overlay object, in seconds. Default: 0 */
		startTimeOffset?: string | null;

		/** 2D normalized coordinates. Default: `{0.0, 0.0}` */
		xy?: NormalizedCoordinate;
	}

	/** Display static overlay object. */
	export interface AnimationStaticFormProperties {

		/** The time to start displaying the overlay object, in seconds. Default: 0 */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateAnimationStaticFormGroup() {
		return new FormGroup<AnimationStaticFormProperties>({
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Audio preprocessing configuration. */
	export interface Audio {

		/** Enable boosting high frequency components. The default is `false`. */
		highBoost?: boolean | null;

		/** Enable boosting low frequency components. The default is `false`. */
		lowBoost?: boolean | null;

		/**
		 * Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0 (the default), where: * -24 is the Advanced Television Systems Committee (ATSC A/85) standard * -23 is the EU R128 broadcast standard * -19 is the prior standard for online mono audio * -18 is the ReplayGain standard * -16 is the prior standard for stereo audio * -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo * 0 disables normalization
		 * Type: double
		 */
		lufs?: number | null;
	}

	/** Audio preprocessing configuration. */
	export interface AudioFormProperties {

		/** Enable boosting high frequency components. The default is `false`. */
		highBoost: FormControl<boolean | null | undefined>,

		/** Enable boosting low frequency components. The default is `false`. */
		lowBoost: FormControl<boolean | null | undefined>,

		/**
		 * Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0 (the default), where: * -24 is the Advanced Television Systems Committee (ATSC A/85) standard * -23 is the EU R128 broadcast standard * -19 is the prior standard for online mono audio * -18 is the ReplayGain standard * -16 is the prior standard for stereo audio * -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo * 0 disables normalization
		 * Type: double
		 */
		lufs: FormControl<number | null | undefined>,
	}
	export function CreateAudioFormGroup() {
		return new FormGroup<AudioFormProperties>({
			highBoost: new FormControl<boolean | null | undefined>(undefined),
			lowBoost: new FormControl<boolean | null | undefined>(undefined),
			lufs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`. */
	export interface AudioAtom {

		/** List of `Channel`s for this audio stream. for in-depth explanation. */
		channels?: Array<AudioChannel>;

		/** Required. The `EditAtom.key` that references the atom with audio inputs in the `Job.edit_list`. */
		key?: string | null;
	}

	/** The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`. */
	export interface AudioAtomFormProperties {

		/** Required. The `EditAtom.key` that references the atom with audio inputs in the `Job.edit_list`. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateAudioAtomFormGroup() {
		return new FormGroup<AudioAtomFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The audio channel. */
	export interface AudioChannel {

		/** List of `Job.inputs` for this audio channel. */
		inputs?: Array<AudioChannelInput>;
	}

	/** The audio channel. */
	export interface AudioChannelFormProperties {
	}
	export function CreateAudioChannelFormGroup() {
		return new FormGroup<AudioChannelFormProperties>({
		});

	}


	/** Identifies which input file, track, and channel should be used. */
	export interface AudioChannelInput {

		/**
		 * Required. The zero-based index of the channel in the input file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		channel?: number | null;

		/**
		 * Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.
		 * Type: double
		 */
		gainDb?: number | null;

		/** Required. The `Input.key` that identifies the input file. */
		key?: string | null;

		/**
		 * Required. The zero-based index of the track in the input file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track?: number | null;
	}

	/** Identifies which input file, track, and channel should be used. */
	export interface AudioChannelInputFormProperties {

		/**
		 * Required. The zero-based index of the channel in the input file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		channel: FormControl<number | null | undefined>,

		/**
		 * Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.
		 * Type: double
		 */
		gainDb: FormControl<number | null | undefined>,

		/** Required. The `Input.key` that identifies the input file. */
		key: FormControl<string | null | undefined>,

		/**
		 * Required. The zero-based index of the track in the input file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track: FormControl<number | null | undefined>,
	}
	export function CreateAudioChannelInputFormGroup() {
		return new FormGroup<AudioChannelInputFormProperties>({
			channel: new FormControl<number | null | undefined>(undefined),
			gainDb: new FormControl<number | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			track: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Audio stream resource. */
	export interface AudioStream {

		/**
		 * Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrateBps?: number | null;

		/**
		 * Number of audio channels. Must be between 1 and 6. The default is 2.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		channelCount?: number | null;

		/** A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is `["fl", "fr"]`. Supported channel names: - 'fl' - Front left channel - 'fr' - Front right channel - 'sl' - Side left channel - 'sr' - Side right channel - 'fc' - Front center channel - 'lfe' - Low frequency */
		channelLayout?: Array<string>;

		/** The codec for this audio stream. The default is `"aac"`. Supported audio codecs: - 'aac' - 'aac-he' - 'aac-he-v2' - 'mp3' - 'ac3' - 'eac3' */
		codec?: string | null;

		/** The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`. */
		mapping?: Array<AudioAtom>;

		/**
		 * The audio sample rate in Hertz. The default is 48000 Hertz.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sampleRateHertz?: number | null;
	}

	/** Audio stream resource. */
	export interface AudioStreamFormProperties {

		/**
		 * Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrateBps: FormControl<number | null | undefined>,

		/**
		 * Number of audio channels. Must be between 1 and 6. The default is 2.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		channelCount: FormControl<number | null | undefined>,

		/** The codec for this audio stream. The default is `"aac"`. Supported audio codecs: - 'aac' - 'aac-he' - 'aac-he-v2' - 'mp3' - 'ac3' - 'eac3' */
		codec: FormControl<string | null | undefined>,

		/**
		 * The audio sample rate in Hertz. The default is 48000 Hertz.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sampleRateHertz: FormControl<number | null | undefined>,
	}
	export function CreateAudioStreamFormGroup() {
		return new FormGroup<AudioStreamFormProperties>({
			bitrateBps: new FormControl<number | null | undefined>(undefined),
			channelCount: new FormControl<number | null | undefined>(undefined),
			codec: new FormControl<string | null | undefined>(undefined),
			sampleRateHertz: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Color preprocessing configuration. */
	export interface Color {

		/**
		 * Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0.
		 * Type: double
		 */
		brightness?: number | null;

		/**
		 * Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0.
		 * Type: double
		 */
		contrast?: number | null;

		/**
		 * Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0.
		 * Type: double
		 */
		saturation?: number | null;
	}

	/** Color preprocessing configuration. */
	export interface ColorFormProperties {

		/**
		 * Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0.
		 * Type: double
		 */
		brightness: FormControl<number | null | undefined>,

		/**
		 * Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0.
		 * Type: double
		 */
		contrast: FormControl<number | null | undefined>,

		/**
		 * Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0.
		 * Type: double
		 */
		saturation: FormControl<number | null | undefined>,
	}
	export function CreateColorFormGroup() {
		return new FormGroup<ColorFormProperties>({
			brightness: new FormControl<number | null | undefined>(undefined),
			contrast: new FormControl<number | null | undefined>(undefined),
			saturation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution. */
	export interface Crop {

		/**
		 * The number of pixels to crop from the bottom. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bottomPixels?: number | null;

		/**
		 * The number of pixels to crop from the left. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leftPixels?: number | null;

		/**
		 * The number of pixels to crop from the right. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rightPixels?: number | null;

		/**
		 * The number of pixels to crop from the top. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		topPixels?: number | null;
	}

	/** Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution. */
	export interface CropFormProperties {

		/**
		 * The number of pixels to crop from the bottom. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bottomPixels: FormControl<number | null | undefined>,

		/**
		 * The number of pixels to crop from the left. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leftPixels: FormControl<number | null | undefined>,

		/**
		 * The number of pixels to crop from the right. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rightPixels: FormControl<number | null | undefined>,

		/**
		 * The number of pixels to crop from the top. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		topPixels: FormControl<number | null | undefined>,
	}
	export function CreateCropFormGroup() {
		return new FormGroup<CropFormProperties>({
			bottomPixels: new FormControl<number | null | undefined>(undefined),
			leftPixels: new FormControl<number | null | undefined>(undefined),
			rightPixels: new FormControl<number | null | undefined>(undefined),
			topPixels: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Deblock preprocessing configuration. */
	export interface Deblock {

		/** Enable deblocker. The default is `false`. */
		enabled?: boolean | null;

		/**
		 * Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0.
		 * Type: double
		 */
		strength?: number | null;
	}

	/** Deblock preprocessing configuration. */
	export interface DeblockFormProperties {

		/** Enable deblocker. The default is `false`. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0.
		 * Type: double
		 */
		strength: FormControl<number | null | undefined>,
	}
	export function CreateDeblockFormGroup() {
		return new FormGroup<DeblockFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			strength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Denoise preprocessing configuration. */
	export interface Denoise {

		/**
		 * Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0.
		 * Type: double
		 */
		strength?: number | null;

		/** Set the denoiser mode. The default is `"standard"`. Supported denoiser modes: - 'standard' - 'grain' */
		tune?: string | null;
	}

	/** Denoise preprocessing configuration. */
	export interface DenoiseFormProperties {

		/**
		 * Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0.
		 * Type: double
		 */
		strength: FormControl<number | null | undefined>,

		/** Set the denoiser mode. The default is `"standard"`. Supported denoiser modes: - 'standard' - 'grain' */
		tune: FormControl<string | null | undefined>,
	}
	export function CreateDenoiseFormGroup() {
		return new FormGroup<DenoiseFormProperties>({
			strength: new FormControl<number | null | undefined>(undefined),
			tune: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Edit atom. */
	export interface EditAtom {

		/** End time in seconds for the atom, relative to the input file timeline. When `end_time_offset` is not specified, the `inputs` are used until the end of the atom. */
		endTimeOffset?: string | null;

		/** List of `Input.key`s identifying files that should be used in this atom. The listed `inputs` must have the same timeline. */
		inputs?: Array<string>;

		/** A unique key for this atom. Must be specified when using advanced mapping. */
		key?: string | null;

		/** Start time in seconds for the atom, relative to the input file timeline. The default is `0s`. */
		startTimeOffset?: string | null;
	}

	/** Edit atom. */
	export interface EditAtomFormProperties {

		/** End time in seconds for the atom, relative to the input file timeline. When `end_time_offset` is not specified, the `inputs` are used until the end of the atom. */
		endTimeOffset: FormControl<string | null | undefined>,

		/** A unique key for this atom. Must be specified when using advanced mapping. */
		key: FormControl<string | null | undefined>,

		/** Start time in seconds for the atom, relative to the input file timeline. The default is `0s`. */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateEditAtomFormGroup() {
		return new FormGroup<EditAtomFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats. */
	export interface ElementaryStream {

		/** Audio stream resource. */
		audioStream?: AudioStream;

		/** A unique key for this elementary stream. */
		key?: string | null;

		/** Encoding of a text stream. For example, closed captions or subtitles. */
		textStream?: TextStream;

		/** Video stream resource. */
		videoStream?: VideoStream;
	}

	/** Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats. */
	export interface ElementaryStreamFormProperties {

		/** A unique key for this elementary stream. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateElementaryStreamFormGroup() {
		return new FormGroup<ElementaryStreamFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encoding of a text stream. For example, closed captions or subtitles. */
	export interface TextStream {

		/** The codec for this text stream. The default is `"webvtt"`. Supported text codecs: - 'srt' - 'ttml' - 'cea608' - 'cea708' - 'webvtt' */
		codec?: string | null;

		/** Required. The BCP-47 language code, such as `"en-US"` or `"sr-Latn"`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`. */
		mapping?: Array<TextAtom>;
	}

	/** Encoding of a text stream. For example, closed captions or subtitles. */
	export interface TextStreamFormProperties {

		/** The codec for this text stream. The default is `"webvtt"`. Supported text codecs: - 'srt' - 'ttml' - 'cea608' - 'cea708' - 'webvtt' */
		codec: FormControl<string | null | undefined>,

		/** Required. The BCP-47 language code, such as `"en-US"` or `"sr-Latn"`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateTextStreamFormGroup() {
		return new FormGroup<TextStreamFormProperties>({
			codec: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`. */
	export interface TextAtom {

		/** List of `Job.inputs` that should be embedded in this atom. Only one input is supported. */
		inputs?: Array<TextInput>;

		/** Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`. */
		key?: string | null;
	}

	/** The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`. */
	export interface TextAtomFormProperties {

		/** Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateTextAtomFormGroup() {
		return new FormGroup<TextAtomFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies which input file and track should be used. */
	export interface TextInput {

		/** Required. The `Input.key` that identifies the input file. */
		key?: string | null;

		/**
		 * Required. The zero-based index of the track in the input file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track?: number | null;
	}

	/** Identifies which input file and track should be used. */
	export interface TextInputFormProperties {

		/** Required. The `Input.key` that identifies the input file. */
		key: FormControl<string | null | undefined>,

		/**
		 * Required. The zero-based index of the track in the input file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		track: FormControl<number | null | undefined>,
	}
	export function CreateTextInputFormGroup() {
		return new FormGroup<TextInputFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			track: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video stream resource. */
	export interface VideoStream {

		/** Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`. */
		allowOpenGop?: boolean | null;

		/**
		 * Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.
		 * Type: double
		 */
		aqStrength?: number | null;

		/**
		 * The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than `VideoStream.gop_frame_count` if set. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bFrameCount?: number | null;

		/** Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`. */
		bPyramid?: boolean | null;

		/**
		 * Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value for H264/H265 is 800,000,000. The maximum value for VP9 is 480,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrateBps?: number | null;

		/** Codec type. The following codecs are supported: * `h264` (default) * `h265` * `vp9` */
		codec?: string | null;

		/**
		 * Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		crfLevel?: number | null;

		/** Use two-pass encoding strategy to achieve better video quality. `VideoStream.rate_control_mode` must be `"vbr"`. The default is `false`. */
		enableTwoPass?: boolean | null;

		/** The entropy coder to use. The default is `"cabac"`. Supported entropy coders: - 'cavlc' - 'cabac' */
		entropyCoder?: string | null;

		/**
		 * Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculate frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.
		 * Type: double
		 */
		frameRate?: number | null;

		/** Select the GOP size based on the specified duration. The default is `"3s"`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`. */
		gopDuration?: string | null;

		/**
		 * Select the GOP size based on the specified frame count. Must be greater than zero.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gopFrameCount?: number | null;

		/**
		 * The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		heightPixels?: number | null;

		/** Pixel format to use. The default is `"yuv420p"`. Supported pixel formats: - 'yuv420p' pixel format. - 'yuv422p' pixel format. - 'yuv444p' pixel format. - 'yuv420p10' 10-bit HDR pixel format. - 'yuv422p10' 10-bit HDR pixel format. - 'yuv444p10' 10-bit HDR pixel format. - 'yuv420p12' 12-bit HDR pixel format. - 'yuv422p12' 12-bit HDR pixel format. - 'yuv444p12' 12-bit HDR pixel format. */
		pixelFormat?: string | null;

		/** Enforces the specified codec preset. The default is `veryfast`. The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message. */
		preset?: string | null;

		/** Enforces the specified codec profile. The following profiles are supported: * `baseline` * `main` * `high` (default) The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message. */
		profile?: string | null;

		/** Specify the `rate_control_mode`. The default is `"vbr"`. Supported rate control modes: - 'vbr' - variable bitrate - 'crf' - constant rate factor */
		rateControlMode?: string | null;

		/** Enforces the specified codec tune. The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message. */
		tune?: string | null;

		/**
		 * Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of `VideoStream.vbv_size_bits`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vbvFullnessBits?: number | null;

		/**
		 * Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vbvSizeBits?: number | null;

		/**
		 * The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		widthPixels?: number | null;
	}

	/** Video stream resource. */
	export interface VideoStreamFormProperties {

		/** Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`. */
		allowOpenGop: FormControl<boolean | null | undefined>,

		/**
		 * Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.
		 * Type: double
		 */
		aqStrength: FormControl<number | null | undefined>,

		/**
		 * The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than `VideoStream.gop_frame_count` if set. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bFrameCount: FormControl<number | null | undefined>,

		/** Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`. */
		bPyramid: FormControl<boolean | null | undefined>,

		/**
		 * Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value for H264/H265 is 800,000,000. The maximum value for VP9 is 480,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrateBps: FormControl<number | null | undefined>,

		/** Codec type. The following codecs are supported: * `h264` (default) * `h265` * `vp9` */
		codec: FormControl<string | null | undefined>,

		/**
		 * Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		crfLevel: FormControl<number | null | undefined>,

		/** Use two-pass encoding strategy to achieve better video quality. `VideoStream.rate_control_mode` must be `"vbr"`. The default is `false`. */
		enableTwoPass: FormControl<boolean | null | undefined>,

		/** The entropy coder to use. The default is `"cabac"`. Supported entropy coders: - 'cavlc' - 'cabac' */
		entropyCoder: FormControl<string | null | undefined>,

		/**
		 * Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculate frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.
		 * Type: double
		 */
		frameRate: FormControl<number | null | undefined>,

		/** Select the GOP size based on the specified duration. The default is `"3s"`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`. */
		gopDuration: FormControl<string | null | undefined>,

		/**
		 * Select the GOP size based on the specified frame count. Must be greater than zero.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gopFrameCount: FormControl<number | null | undefined>,

		/**
		 * The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		heightPixels: FormControl<number | null | undefined>,

		/** Pixel format to use. The default is `"yuv420p"`. Supported pixel formats: - 'yuv420p' pixel format. - 'yuv422p' pixel format. - 'yuv444p' pixel format. - 'yuv420p10' 10-bit HDR pixel format. - 'yuv422p10' 10-bit HDR pixel format. - 'yuv444p10' 10-bit HDR pixel format. - 'yuv420p12' 12-bit HDR pixel format. - 'yuv422p12' 12-bit HDR pixel format. - 'yuv444p12' 12-bit HDR pixel format. */
		pixelFormat: FormControl<string | null | undefined>,

		/** Enforces the specified codec preset. The default is `veryfast`. The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message. */
		preset: FormControl<string | null | undefined>,

		/** Enforces the specified codec profile. The following profiles are supported: * `baseline` * `main` * `high` (default) The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message. */
		profile: FormControl<string | null | undefined>,

		/** Specify the `rate_control_mode`. The default is `"vbr"`. Supported rate control modes: - 'vbr' - variable bitrate - 'crf' - constant rate factor */
		rateControlMode: FormControl<string | null | undefined>,

		/** Enforces the specified codec tune. The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message. */
		tune: FormControl<string | null | undefined>,

		/**
		 * Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of `VideoStream.vbv_size_bits`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vbvFullnessBits: FormControl<number | null | undefined>,

		/**
		 * Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vbvSizeBits: FormControl<number | null | undefined>,

		/**
		 * The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		widthPixels: FormControl<number | null | undefined>,
	}
	export function CreateVideoStreamFormGroup() {
		return new FormGroup<VideoStreamFormProperties>({
			allowOpenGop: new FormControl<boolean | null | undefined>(undefined),
			aqStrength: new FormControl<number | null | undefined>(undefined),
			bFrameCount: new FormControl<number | null | undefined>(undefined),
			bPyramid: new FormControl<boolean | null | undefined>(undefined),
			bitrateBps: new FormControl<number | null | undefined>(undefined),
			codec: new FormControl<string | null | undefined>(undefined),
			crfLevel: new FormControl<number | null | undefined>(undefined),
			enableTwoPass: new FormControl<boolean | null | undefined>(undefined),
			entropyCoder: new FormControl<string | null | undefined>(undefined),
			frameRate: new FormControl<number | null | undefined>(undefined),
			gopDuration: new FormControl<string | null | undefined>(undefined),
			gopFrameCount: new FormControl<number | null | undefined>(undefined),
			heightPixels: new FormControl<number | null | undefined>(undefined),
			pixelFormat: new FormControl<string | null | undefined>(undefined),
			preset: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			rateControlMode: new FormControl<string | null | undefined>(undefined),
			tune: new FormControl<string | null | undefined>(undefined),
			vbvFullnessBits: new FormControl<number | null | undefined>(undefined),
			vbvSizeBits: new FormControl<number | null | undefined>(undefined),
			widthPixels: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`. */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`. */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Encryption settings. */
	export interface Encryption {

		/** Configuration for AES-128 encryption. */
		aes128?: Aes128Encryption;

		/** Required. 128 bit Initialization Vector (IV) represented as lowercase hexadecimal digits. */
		iv?: string | null;

		/** Required. 128 bit encryption key represented as lowercase hexadecimal digits. */
		key?: string | null;

		/** Configuration for MPEG Common Encryption (MPEG-CENC). */
		mpegCenc?: MpegCommonEncryption;

		/** Configuration for SAMPLE-AES encryption. */
		sampleAes?: SampleAesEncryption;
	}

	/** Encryption settings. */
	export interface EncryptionFormProperties {

		/** Required. 128 bit Initialization Vector (IV) represented as lowercase hexadecimal digits. */
		iv: FormControl<string | null | undefined>,

		/** Required. 128 bit encryption key represented as lowercase hexadecimal digits. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for MPEG Common Encryption (MPEG-CENC). */
	export interface MpegCommonEncryption {

		/** Required. 128 bit Key ID represented as lowercase hexadecimal digits for use with common encryption. */
		keyId?: string | null;

		/** Required. Specify the encryption scheme. Supported encryption schemes: - 'cenc' - 'cbcs' */
		scheme?: string | null;
	}

	/** Configuration for MPEG Common Encryption (MPEG-CENC). */
	export interface MpegCommonEncryptionFormProperties {

		/** Required. 128 bit Key ID represented as lowercase hexadecimal digits for use with common encryption. */
		keyId: FormControl<string | null | undefined>,

		/** Required. Specify the encryption scheme. Supported encryption schemes: - 'cenc' - 'cbcs' */
		scheme: FormControl<string | null | undefined>,
	}
	export function CreateMpegCommonEncryptionFormGroup() {
		return new FormGroup<MpegCommonEncryptionFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for SAMPLE-AES encryption. */
	export interface SampleAesEncryption {

		/** Required. URI of the key delivery service. This URI is inserted into the M3U8 header. */
		keyUri?: string | null;
	}

	/** Configuration for SAMPLE-AES encryption. */
	export interface SampleAesEncryptionFormProperties {

		/** Required. URI of the key delivery service. This URI is inserted into the M3U8 header. */
		keyUri: FormControl<string | null | undefined>,
	}
	export function CreateSampleAesEncryptionFormGroup() {
		return new FormGroup<SampleAesEncryptionFormProperties>({
			keyUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information about the reasons for the failure. */
	export interface FailureDetail {

		/** A description of the failure. */
		description?: string | null;
	}

	/** Additional information about the reasons for the failure. */
	export interface FailureDetailFormProperties {

		/** A description of the failure. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateFailureDetailFormGroup() {
		return new FormGroup<FailureDetailFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Overlaid jpeg image. */
	export interface Image {

		/**
		 * Target image opacity. Valid values are from `1.0` (solid, default) to `0.0` (transparent), exclusive. Set this to a value greater than `0.0`.
		 * Type: double
		 */
		alpha?: number | null;

		/** 2D normalized coordinates. Default: `{0.0, 0.0}` */
		resolution?: NormalizedCoordinate;

		/** Required. URI of the JPEG image in Cloud Storage. For example, `gs://bucket/inputs/image.jpeg`. JPEG is the only supported image type. */
		uri?: string | null;
	}

	/** Overlaid jpeg image. */
	export interface ImageFormProperties {

		/**
		 * Target image opacity. Valid values are from `1.0` (solid, default) to `0.0` (transparent), exclusive. Set this to a value greater than `0.0`.
		 * Type: double
		 */
		alpha: FormControl<number | null | undefined>,

		/** Required. URI of the JPEG image in Cloud Storage. For example, `gs://bucket/inputs/image.jpeg`. JPEG is the only supported image type. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input asset. */
	export interface Input {

		/** A unique key for this input. Must be specified when using advanced mapping and edit lists. */
		key?: string | null;

		/** Preprocessing configurations. */
		preprocessingConfig?: PreprocessingConfig;

		/** URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). If empty, the value will be populated from `Job.input_uri`. */
		uri?: string | null;
	}

	/** Input asset. */
	export interface InputFormProperties {

		/** A unique key for this input. Must be specified when using advanced mapping and edit lists. */
		key: FormControl<string | null | undefined>,

		/** URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). If empty, the value will be populated from `Job.input_uri`. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Preprocessing configurations. */
	export interface PreprocessingConfig {

		/** Audio preprocessing configuration. */
		audio?: Audio;

		/** Color preprocessing configuration. */
		color?: Color;

		/** Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution. */
		crop?: Crop;

		/** Deblock preprocessing configuration. */
		deblock?: Deblock;

		/** Denoise preprocessing configuration. */
		denoise?: Denoise;

		/** Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution. */
		pad?: Pad;
	}

	/** Preprocessing configurations. */
	export interface PreprocessingConfigFormProperties {
	}
	export function CreatePreprocessingConfigFormGroup() {
		return new FormGroup<PreprocessingConfigFormProperties>({
		});

	}


	/** Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution. */
	export interface Pad {

		/**
		 * The number of pixels to add to the bottom. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bottomPixels?: number | null;

		/**
		 * The number of pixels to add to the left. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leftPixels?: number | null;

		/**
		 * The number of pixels to add to the right. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rightPixels?: number | null;

		/**
		 * The number of pixels to add to the top. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		topPixels?: number | null;
	}

	/** Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution. */
	export interface PadFormProperties {

		/**
		 * The number of pixels to add to the bottom. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bottomPixels: FormControl<number | null | undefined>,

		/**
		 * The number of pixels to add to the left. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leftPixels: FormControl<number | null | undefined>,

		/**
		 * The number of pixels to add to the right. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rightPixels: FormControl<number | null | undefined>,

		/**
		 * The number of pixels to add to the top. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		topPixels: FormControl<number | null | undefined>,
	}
	export function CreatePadFormGroup() {
		return new FormGroup<PadFormProperties>({
			bottomPixels: new FormControl<number | null | undefined>(undefined),
			leftPixels: new FormControl<number | null | undefined>(undefined),
			rightPixels: new FormControl<number | null | undefined>(undefined),
			topPixels: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Transcoding job resource. */
	export interface Job {

		/** Job configuration */
		config?: JobConfig;

		/** Output only. The time the job was created. */
		createTime?: string | null;

		/** Output only. The time the transcoding finished. */
		endTime?: string | null;

		/** Output only. List of failure details. This property may contain additional information about the failure when `failure_reason` is present. *Note*: This feature is not yet available. */
		failureDetails?: Array<FailureDetail>;

		/** Output only. A description of the reason for the failure. This property is always present when `state` is `FAILED`. */
		failureReason?: string | null;

		/** Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). */
		inputUri?: string | null;

		/** The resource name of the job. Format: `projects/{project}/locations/{location}/jobs/{job}` */
		name?: string | null;

		/** The origin URI. */
		originUri?: OriginUri;

		/** Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. */
		outputUri?: string | null;

		/**
		 * Specify the priority of the job. Enter a value between 0 and 100, where 0 is the lowest priority and 100 is the highest priority. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** Estimated fractional progress for each step, from `0` to `1`. */
		progress?: Progress;

		/** Output only. The time the transcoding started. */
		startTime?: string | null;

		/** Output only. The current state of the job. */
		state?: JobState | null;

		/** Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`. Preset Transcoder templates: - `preset/{preset_id}` - User defined JobTemplate: `{job_template_id}` */
		templateId?: string | null;

		/**
		 * Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttlAfterCompletionDays?: number | null;
	}

	/** Transcoding job resource. */
	export interface JobFormProperties {

		/** Output only. The time the job was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the transcoding finished. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. A description of the reason for the failure. This property is always present when `state` is `FAILED`. */
		failureReason: FormControl<string | null | undefined>,

		/** Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). */
		inputUri: FormControl<string | null | undefined>,

		/** The resource name of the job. Format: `projects/{project}/locations/{location}/jobs/{job}` */
		name: FormControl<string | null | undefined>,

		/** Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. */
		outputUri: FormControl<string | null | undefined>,

		/**
		 * Specify the priority of the job. Enter a value between 0 and 100, where 0 is the lowest priority and 100 is the highest priority. The default is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Output only. The time the transcoding started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The current state of the job. */
		state: FormControl<JobState | null | undefined>,

		/** Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`. Preset Transcoder templates: - `preset/{preset_id}` - User defined JobTemplate: `{job_template_id}` */
		templateId: FormControl<string | null | undefined>,

		/**
		 * Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttlAfterCompletionDays: FormControl<number | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			inputUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<JobState | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			ttlAfterCompletionDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Job configuration */
	export interface JobConfig {

		/** List of ad breaks. Specifies where to insert ad break tags in the output manifests. */
		adBreaks?: Array<AdBreak>;

		/** List of `Edit atom`s. Defines the ultimate timeline of the resulting file or manifest. */
		editList?: Array<EditAtom>;

		/** List of elementary streams. */
		elementaryStreams?: Array<ElementaryStream>;

		/** List of input assets stored in Cloud Storage. */
		inputs?: Array<Input>;

		/** List of output manifests. */
		manifests?: Array<Manifest>;

		/** List of multiplexing settings for output streams. */
		muxStreams?: Array<MuxStream>;

		/** Location of output file(s) in a Cloud Storage bucket. */
		output?: Output;

		/** List of overlays on the output video, in descending Z-order. */
		overlays?: Array<Overlay>;

		/** A Pub/Sub destination. */
		pubsubDestination?: PubsubDestination;

		/** List of output sprite sheets. */
		spriteSheets?: Array<SpriteSheet>;
	}

	/** Job configuration */
	export interface JobConfigFormProperties {
	}
	export function CreateJobConfigFormGroup() {
		return new FormGroup<JobConfigFormProperties>({
		});

	}


	/** Manifest configuration. */
	export interface Manifest {

		/** The name of the generated file. The default is `"manifest"` with the extension suffix corresponding to the `Manifest.type`. */
		fileName?: string | null;

		/** Required. List of user given `MuxStream.key`s that should appear in this manifest. When `Manifest.type` is `HLS`, a media manifest with name `MuxStream.key` and `.m3u8` extension is generated for each element of the `Manifest.mux_streams`. */
		muxStreams?: Array<string>;

		/** Required. Type of the manifest, can be "HLS" or "DASH". */
		type?: ManifestType | null;
	}

	/** Manifest configuration. */
	export interface ManifestFormProperties {

		/** The name of the generated file. The default is `"manifest"` with the extension suffix corresponding to the `Manifest.type`. */
		fileName: FormControl<string | null | undefined>,

		/** Required. Type of the manifest, can be "HLS" or "DASH". */
		type: FormControl<ManifestType | null | undefined>,
	}
	export function CreateManifestFormGroup() {
		return new FormGroup<ManifestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ManifestType | null | undefined>(undefined),
		});

	}

	export enum ManifestType { MANIFEST_TYPE_UNSPECIFIED = 'MANIFEST_TYPE_UNSPECIFIED', HLS = 'HLS', DASH = 'DASH' }


	/** Multiplexing settings for output stream. */
	export interface MuxStream {

		/** The container format. The default is `"mp4"` Supported container formats: - 'ts' - 'fmp4'- the corresponding file extension is `".m4s"` - 'mp4' - 'vtt' */
		container?: string | null;

		/** List of `ElementaryStream.key`s multiplexed in this stream. */
		elementaryStreams?: Array<string>;

		/** Encryption settings. */
		encryption?: Encryption;

		/** The name of the generated file. The default is `MuxStream.key` with the extension suffix corresponding to the `MuxStream.container`. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `"mux_stream0000000123.ts"`. */
		fileName?: string | null;

		/** A unique key for this multiplexed stream. HLS media manifests will be named `MuxStream.key` with the `".m3u8"` extension suffix. */
		key?: string | null;

		/** Segment settings for `"ts"`, `"fmp4"` and `"vtt"`. */
		segmentSettings?: SegmentSettings;
	}

	/** Multiplexing settings for output stream. */
	export interface MuxStreamFormProperties {

		/** The container format. The default is `"mp4"` Supported container formats: - 'ts' - 'fmp4'- the corresponding file extension is `".m4s"` - 'mp4' - 'vtt' */
		container: FormControl<string | null | undefined>,

		/** The name of the generated file. The default is `MuxStream.key` with the extension suffix corresponding to the `MuxStream.container`. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `"mux_stream0000000123.ts"`. */
		fileName: FormControl<string | null | undefined>,

		/** A unique key for this multiplexed stream. HLS media manifests will be named `MuxStream.key` with the `".m3u8"` extension suffix. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateMuxStreamFormGroup() {
		return new FormGroup<MuxStreamFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Segment settings for `"ts"`, `"fmp4"` and `"vtt"`. */
	export interface SegmentSettings {

		/** Required. Create an individual segment file. The default is `false`. */
		individualSegments?: boolean | null;

		/** Duration of the segments in seconds. The default is `"6.0s"`. Note that `segmentDuration` must be greater than or equal to [`gopDuration`](#videostream), and `segmentDuration` must be divisible by [`gopDuration`](#videostream). */
		segmentDuration?: string | null;
	}

	/** Segment settings for `"ts"`, `"fmp4"` and `"vtt"`. */
	export interface SegmentSettingsFormProperties {

		/** Required. Create an individual segment file. The default is `false`. */
		individualSegments: FormControl<boolean | null | undefined>,

		/** Duration of the segments in seconds. The default is `"6.0s"`. Note that `segmentDuration` must be greater than or equal to [`gopDuration`](#videostream), and `segmentDuration` must be divisible by [`gopDuration`](#videostream). */
		segmentDuration: FormControl<string | null | undefined>,
	}
	export function CreateSegmentSettingsFormGroup() {
		return new FormGroup<SegmentSettingsFormProperties>({
			individualSegments: new FormControl<boolean | null | undefined>(undefined),
			segmentDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of output file(s) in a Cloud Storage bucket. */
	export interface Output {

		/** URI for the output file(s). For example, `gs://my-bucket/outputs/`. If empty the value is populated from `Job.output_uri`. */
		uri?: string | null;
	}

	/** Location of output file(s) in a Cloud Storage bucket. */
	export interface OutputFormProperties {

		/** URI for the output file(s). For example, `gs://my-bucket/outputs/`. If empty the value is populated from `Job.output_uri`. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Overlay configuration. */
	export interface Overlay {

		/** List of Animations. The list should be chronological, without any time overlap. */
		animations?: Array<Animation>;

		/** Overlaid jpeg image. */
		image?: Image;
	}

	/** Overlay configuration. */
	export interface OverlayFormProperties {
	}
	export function CreateOverlayFormGroup() {
		return new FormGroup<OverlayFormProperties>({
		});

	}


	/** A Pub/Sub destination. */
	export interface PubsubDestination {

		/** The name of the Pub/Sub topic to publish job completion notification to. For example: `projects/{project}/topics/{topic}`. */
		topic?: string | null;
	}

	/** A Pub/Sub destination. */
	export interface PubsubDestinationFormProperties {

		/** The name of the Pub/Sub topic to publish job completion notification to. For example: `projects/{project}/topics/{topic}`. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePubsubDestinationFormGroup() {
		return new FormGroup<PubsubDestinationFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sprite sheet configuration. */
	export interface SpriteSheet {

		/**
		 * The maximum number of sprites per row in a sprite sheet. The default is 0, which indicates no maximum limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columnCount?: number | null;

		/** End time in seconds, relative to the output file timeline. When `end_time_offset` is not specified, the sprites are generated until the end of the output file. */
		endTimeOffset?: string | null;

		/** Required. File name prefix for the generated sprite sheets. Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `"sprite_sheet0000000123.jpeg"`. */
		filePrefix?: string | null;

		/** Format type. The default is `"jpeg"`. Supported formats: - 'jpeg' */
		format?: string | null;

		/** Starting from `0s`, create sprites at regular intervals. Specify the interval value in seconds. */
		interval?: string | null;

		/**
		 * The quality of the generated sprite sheet. Enter a value between 1 and 100, where 1 is the lowest quality and 100 is the highest quality. The default is 100. A high quality value corresponds to a low image data compression ratio.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quality?: number | null;

		/**
		 * The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. The default is 0, which indicates no maximum limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowCount?: number | null;

		/**
		 * Required. The height of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_height_pixels field or the SpriteSheet.sprite_width_pixels field, but not both (the API will automatically calculate the missing field).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		spriteHeightPixels?: number | null;

		/**
		 * Required. The width of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_width_pixels field or the SpriteSheet.sprite_height_pixels field, but not both (the API will automatically calculate the missing field).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		spriteWidthPixels?: number | null;

		/** Start time in seconds, relative to the output file timeline. Determines the first sprite to pick. The default is `0s`. */
		startTimeOffset?: string | null;

		/**
		 * Total number of sprites. Create the specified number of sprites distributed evenly across the timeline of the output media. The default is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount?: number | null;
	}

	/** Sprite sheet configuration. */
	export interface SpriteSheetFormProperties {

		/**
		 * The maximum number of sprites per row in a sprite sheet. The default is 0, which indicates no maximum limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columnCount: FormControl<number | null | undefined>,

		/** End time in seconds, relative to the output file timeline. When `end_time_offset` is not specified, the sprites are generated until the end of the output file. */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Required. File name prefix for the generated sprite sheets. Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `"sprite_sheet0000000123.jpeg"`. */
		filePrefix: FormControl<string | null | undefined>,

		/** Format type. The default is `"jpeg"`. Supported formats: - 'jpeg' */
		format: FormControl<string | null | undefined>,

		/** Starting from `0s`, create sprites at regular intervals. Specify the interval value in seconds. */
		interval: FormControl<string | null | undefined>,

		/**
		 * The quality of the generated sprite sheet. Enter a value between 1 and 100, where 1 is the lowest quality and 100 is the highest quality. The default is 100. A high quality value corresponds to a low image data compression ratio.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quality: FormControl<number | null | undefined>,

		/**
		 * The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. The default is 0, which indicates no maximum limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowCount: FormControl<number | null | undefined>,

		/**
		 * Required. The height of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_height_pixels field or the SpriteSheet.sprite_width_pixels field, but not both (the API will automatically calculate the missing field).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		spriteHeightPixels: FormControl<number | null | undefined>,

		/**
		 * Required. The width of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_width_pixels field or the SpriteSheet.sprite_height_pixels field, but not both (the API will automatically calculate the missing field).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		spriteWidthPixels: FormControl<number | null | undefined>,

		/** Start time in seconds, relative to the output file timeline. Determines the first sprite to pick. The default is `0s`. */
		startTimeOffset: FormControl<string | null | undefined>,

		/**
		 * Total number of sprites. Create the specified number of sprites distributed evenly across the timeline of the output media. The default is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateSpriteSheetFormGroup() {
		return new FormGroup<SpriteSheetFormProperties>({
			columnCount: new FormControl<number | null | undefined>(undefined),
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			filePrefix: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<string | null | undefined>(undefined),
			quality: new FormControl<number | null | undefined>(undefined),
			rowCount: new FormControl<number | null | undefined>(undefined),
			spriteHeightPixels: new FormControl<number | null | undefined>(undefined),
			spriteWidthPixels: new FormControl<number | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The origin URI. */
	export interface OriginUri {

		/** Dash manifest URI. If multiple Dash manifests are created, only the first one is listed. */
		dash?: string | null;

		/** HLS manifest URI per https://tools.ietf.org/html/rfc8216#section-4.3.4. If multiple HLS manifests are created, only the first one is listed. */
		hls?: string | null;
	}

	/** The origin URI. */
	export interface OriginUriFormProperties {

		/** Dash manifest URI. If multiple Dash manifests are created, only the first one is listed. */
		dash: FormControl<string | null | undefined>,

		/** HLS manifest URI per https://tools.ietf.org/html/rfc8216#section-4.3.4. If multiple HLS manifests are created, only the first one is listed. */
		hls: FormControl<string | null | undefined>,
	}
	export function CreateOriginUriFormGroup() {
		return new FormGroup<OriginUriFormProperties>({
			dash: new FormControl<string | null | undefined>(undefined),
			hls: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Estimated fractional progress for each step, from `0` to `1`. */
	export interface Progress {

		/**
		 * Estimated fractional progress for `analyzing` step.
		 * Type: double
		 */
		analyzed?: number | null;

		/**
		 * Estimated fractional progress for `encoding` step.
		 * Type: double
		 */
		encoded?: number | null;

		/**
		 * Estimated fractional progress for `notifying` step.
		 * Type: double
		 */
		notified?: number | null;

		/**
		 * Estimated fractional progress for `uploading` step.
		 * Type: double
		 */
		uploaded?: number | null;
	}

	/** Estimated fractional progress for each step, from `0` to `1`. */
	export interface ProgressFormProperties {

		/**
		 * Estimated fractional progress for `analyzing` step.
		 * Type: double
		 */
		analyzed: FormControl<number | null | undefined>,

		/**
		 * Estimated fractional progress for `encoding` step.
		 * Type: double
		 */
		encoded: FormControl<number | null | undefined>,

		/**
		 * Estimated fractional progress for `notifying` step.
		 * Type: double
		 */
		notified: FormControl<number | null | undefined>,

		/**
		 * Estimated fractional progress for `uploading` step.
		 * Type: double
		 */
		uploaded: FormControl<number | null | undefined>,
	}
	export function CreateProgressFormGroup() {
		return new FormGroup<ProgressFormProperties>({
			analyzed: new FormControl<number | null | undefined>(undefined),
			encoded: new FormControl<number | null | undefined>(undefined),
			notified: new FormControl<number | null | undefined>(undefined),
			uploaded: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobState { PROCESSING_STATE_UNSPECIFIED = 'PROCESSING_STATE_UNSPECIFIED', PENDING = 'PENDING', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Transcoding job template resource. */
	export interface JobTemplate {

		/** Job configuration */
		config?: JobConfig;

		/** The resource name of the job template. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}` */
		name?: string | null;
	}

	/** Transcoding job template resource. */
	export interface JobTemplateFormProperties {

		/** The resource name of the job template. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateJobTemplateFormGroup() {
		return new FormGroup<JobTemplateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for `TranscoderService.ListJobTemplates`. */
	export interface ListJobTemplatesResponse {

		/** List of job templates in the specified region. */
		jobTemplates?: Array<JobTemplate>;

		/** The pagination token. */
		nextPageToken?: string | null;
	}

	/** Response message for `TranscoderService.ListJobTemplates`. */
	export interface ListJobTemplatesResponseFormProperties {

		/** The pagination token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobTemplatesResponseFormGroup() {
		return new FormGroup<ListJobTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for `TranscoderService.ListJobs`. */
	export interface ListJobsResponse {

		/** List of jobs in the specified region. */
		jobs?: Array<Job>;

		/** The pagination token. */
		nextPageToken?: string | null;
	}

	/** Response message for `TranscoderService.ListJobs`. */
	export interface ListJobsResponseFormProperties {

		/** The pagination token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a job template.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`
		 * @return {Empty} Successful response
		 */
		Transcoder_projects_locations_jobTemplates_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns the job template data.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`
		 * @return {JobTemplate} Successful response
		 */
		Transcoder_projects_locations_jobTemplates_get(name: string): Observable<JobTemplate> {
			return this.http.get<JobTemplate>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists job templates in the specified region.
		 * Get v1beta1/{parent}/jobTemplates
		 * @param {string} parent Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The `next_page_token` value returned from a previous List request, if any.
		 * @return {ListJobTemplatesResponse} Successful response
		 */
		Transcoder_projects_locations_jobTemplates_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListJobTemplatesResponse> {
			return this.http.get<ListJobTemplatesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobTemplates&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a job template in the specified region.
		 * Post v1beta1/{parent}/jobTemplates
		 * @param {string} parent Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`
		 * @param {string} jobTemplateId Required. The ID to use for the job template, which will become the final component of the job template's resource name. This value should be 4-63 characters, and valid characters must match the regular expression `a-zA-Z*`.
		 * @return {JobTemplate} Successful response
		 */
		Transcoder_projects_locations_jobTemplates_create(parent: string, jobTemplateId: string | null | undefined, requestBody: JobTemplate): Observable<JobTemplate> {
			return this.http.post<JobTemplate>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobTemplates&jobTemplateId=' + (jobTemplateId == null ? '' : encodeURIComponent(jobTemplateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists jobs in the specified region.
		 * Get v1beta1/{parent}/jobs
		 * @param {string} parent Required. Format: `projects/{project}/locations/{location}`
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The `next_page_token` value returned from a previous List request, if any.
		 * @return {ListJobsResponse} Successful response
		 */
		Transcoder_projects_locations_jobs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a job in the specified region.
		 * Post v1beta1/{parent}/jobs
		 * @param {string} parent Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`
		 * @return {Job} Successful response
		 */
		Transcoder_projects_locations_jobs_create(parent: string, requestBody: Job): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

