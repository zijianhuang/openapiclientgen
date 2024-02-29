import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response returned by the Serve API [get asset by render id](#get-asset-by-render-id) request. The response  is an array of asset resources, including video, image, audio, thumbnail and poster image. The response follows  the [json:api](https://jsonapi.org/) specification. */
	export interface AssetRenderResponse {

		/** An array of asset resources grouped by render id. */
		data?: Array<AssetResponseData>;
	}

	/** The response returned by the Serve API [get asset by render id](#get-asset-by-render-id) request. The response  is an array of asset resources, including video, image, audio, thumbnail and poster image. The response follows  the [json:api](https://jsonapi.org/) specification. */
	export interface AssetRenderResponseFormProperties {
	}
	export function CreateAssetRenderResponseFormGroup() {
		return new FormGroup<AssetRenderResponseFormProperties>({
		});

	}


	/** The type of resource (an asset) and attributes of the asset. */
	export interface AssetResponseData {

		/** The list of asset attributes and their values. */
		attributes?: AssetResponseAttributes;

		/** The type of resource, in this case it is an assets. */
		type?: string | null;
	}

	/** The type of resource (an asset) and attributes of the asset. */
	export interface AssetResponseDataFormProperties {

		/** The type of resource, in this case it is an assets. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAssetResponseDataFormGroup() {
		return new FormGroup<AssetResponseDataFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of asset attributes and their values. */
	export interface AssetResponseAttributes {

		/** The time the asset was created. */
		created?: string | null;

		/** The asset file name. */
		filename?: string | null;

		/** The unique id of the hosted asset in UUID format. */
		id?: string | null;

		/** The owner id of the render task. */
		owner?: string | null;

		/** The region the asset is hosted, currently only `au` (Australia). */
		region?: string | null;

		/** The original render id that created the asset in UUID format. Multiple assets can share the same render id. */
		renderId?: string | null;

		/**
		 * The status of the asset. <ul>
		 * <li>`importing` - the asset is being copied to the hosting service</li>
		 * <li>`ready` - the asset is ready to be served to users</li>
		 * <li>`failed` - the asset failed to copy or delete</li>
		 * <li>`deleted` - the asset has been deleted</li>
		 * </ul>
		 */
		status?: AssetResponseAttributesStatus | null;

		/** The time the asset status was last updated. */
		updated?: string | null;

		/** The asset file name. */
		url?: string | null;
	}

	/** The list of asset attributes and their values. */
	export interface AssetResponseAttributesFormProperties {

		/** The time the asset was created. */
		created: FormControl<string | null | undefined>,

		/** The asset file name. */
		filename: FormControl<string | null | undefined>,

		/** The unique id of the hosted asset in UUID format. */
		id: FormControl<string | null | undefined>,

		/** The owner id of the render task. */
		owner: FormControl<string | null | undefined>,

		/** The region the asset is hosted, currently only `au` (Australia). */
		region: FormControl<string | null | undefined>,

		/** The original render id that created the asset in UUID format. Multiple assets can share the same render id. */
		renderId: FormControl<string | null | undefined>,

		/**
		 * The status of the asset. <ul>
		 * <li>`importing` - the asset is being copied to the hosting service</li>
		 * <li>`ready` - the asset is ready to be served to users</li>
		 * <li>`failed` - the asset failed to copy or delete</li>
		 * <li>`deleted` - the asset has been deleted</li>
		 * </ul>
		 */
		status: FormControl<AssetResponseAttributesStatus | null | undefined>,

		/** The time the asset status was last updated. */
		updated: FormControl<string | null | undefined>,

		/** The asset file name. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAssetResponseAttributesFormGroup() {
		return new FormGroup<AssetResponseAttributesFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			renderId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AssetResponseAttributesStatus | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetResponseAttributesStatus { importing = 'importing', ready = 'ready', failed = 'failed', deleted = 'deleted' }


	/** The response returned by the Serve API [get asset](#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows the [json:api](https://jsonapi.org/) specification. */
	export interface AssetResponse {

		/** The type of resource (an asset) and attributes of the asset. */
		data?: AssetResponseData;
	}

	/** The response returned by the Serve API [get asset](#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows the [json:api](https://jsonapi.org/) specification. */
	export interface AssetResponseFormProperties {
	}
	export function CreateAssetResponseFormGroup() {
		return new FormGroup<AssetResponseFormProperties>({
		});

	}


	/** The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file. */
	export interface AudioAsset {

		/**
		 * The effect to apply to the audio asset <ul>
		 * <li>`fadeIn` - fade volume in only</li>
		 * <li>`fadeOut` - fade volume out only</li>
		 * <li>`fadeInFadeOut` - fade volume in and out</li>
		 * </ul>
		 */
		effect?: AudioAssetEffect | null;

		/**
		 * The audio source URL. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: string;

		/**
		 * The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the in trim point. The audio will play until the file ends or the Clip length is reached.
		 * Type: double
		 */
		trim?: number | null;

		/**
		 * The type of asset - set to `audio` for audio assets.
		 * Required
		 */
		type: string;

		/**
		 * Set the volume for the audio clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
		 * Type: double
		 */
		volume?: number | null;
	}

	/** The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file. */
	export interface AudioAssetFormProperties {

		/**
		 * The effect to apply to the audio asset <ul>
		 * <li>`fadeIn` - fade volume in only</li>
		 * <li>`fadeOut` - fade volume out only</li>
		 * <li>`fadeInFadeOut` - fade volume in and out</li>
		 * </ul>
		 */
		effect: FormControl<AudioAssetEffect | null | undefined>,

		/**
		 * The audio source URL. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: FormControl<string | null | undefined>,

		/**
		 * The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the in trim point. The audio will play until the file ends or the Clip length is reached.
		 * Type: double
		 */
		trim: FormControl<number | null | undefined>,

		/**
		 * The type of asset - set to `audio` for audio assets.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Set the volume for the audio clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
		 * Type: double
		 */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateAudioAssetFormGroup() {
		return new FormGroup<AudioAssetFormProperties>({
			effect: new FormControl<AudioAssetEffect | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trim: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			volume: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AudioAssetEffect { fadeIn = 'fadeIn', fadeOut = 'fadeOut', fadeInFadeOut = 'fadeInFadeOut' }


	/** A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it. */
	export interface Clip {

		/**
		 * The type of asset to display for the duration of this Clip. Value must be one of <b>TitleAsset</b>, <b>ImageAsset</b>, <b>VideoAsset</b>, <b>HtmlAsset</b>, <b>AudioAsset</b> or <b>LumaAsset</b>
		 * Required
		 */
		asset: VideoAsset;

		/**
		 * A motion effect to apply to the Clip. <ul>
		 * <li>`zoomIn` - slow zoom in</li>
		 * <li>`zoomOut` - slow zoom out</li>
		 * <li>`slideLeft` - slow slide (pan) left</li>
		 * <li>`slideRight` - slow slide (pan) right</li>
		 * <li>`slideUp` - slow slide (pan) up</li>
		 * <li>`slideDown` - slow slide (pan) down</li>
		 * </ul>
		 */
		effect?: ClipEffect | null;

		/**
		 * A filter effect to apply to the Clip. <ul>
		 * <li>`boost` - boost contrast and saturation</li>
		 * <li>`contrast` - increase contrast</li>
		 * <li>`darken` - darken the scene</li>
		 * <li>`greyscale` - remove colour</li>
		 * <li>`lighten` - lighten the scene</li>
		 * <li>`muted` - reduce saturation and contrast</li>
		 * <li>`invert` - invert colors</li>
		 * </ul>
		 */
		filter?: ClipFilter | null;

		/**
		 * Set how the asset should be scaled to fit the viewport using one of the following options:
		 * <ul>
		 * <li>`cover` - stretch the asset to fill the viewport without maintaining the aspect ratio.</li>
		 * <li>`contain` - fit the entire asset within the viewport while maintaining the original aspect ratio.</li>
		 * <li>`crop` - scale the asset to fill the viewport while maintaining the aspect ratio. The asset will be cropped if it exceeds the bounds of the viewport.</li>
		 * <li>`none` - preserves the original asset dimensions and does not apply any scaling.</li>
		 * </ul>
		 */
		fit?: ClipFit | null;

		/**
		 * The length, in seconds, the Clip should play for.
		 * Required
		 * Type: double
		 */
		length: number;

		/** Offsets the position of an asset horizontally or vertically by a relative distance. */
		offset?: Offset;

		/**
		 * Sets the opacity of the Clip where 1 is opaque and 0 is transparent.
		 * Type: double
		 */
		opacity?: number | null;

		/**
		 * Place the asset in one of nine predefined positions of the viewport. This is most effective for when the asset is scaled and you want to position the element to a specific position. <ul>
		 * <li>`top` - top (center)</li>
		 * <li>`topRight` - top right</li>
		 * <li>`right` - right (center)</li>
		 * <li>`bottomRight` - bottom right</li>
		 * <li>`bottom` - bottom (center)</li>
		 * <li>`bottomLeft` - bottom left</li>
		 * <li>`left` - left (center)</li>
		 * <li>`topLeft` - top left</li>
		 * <li>`center` - center</li>
		 * </ul>
		 */
		position?: ClipPosition | null;

		/**
		 * Scale the asset to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale asset to half the size of the viewport. This is useful for picture-in-picture video and  scaling images such as logos and watermarks.
		 * Type: double
		 */
		scale?: number | null;

		/**
		 * The start position of the Clip on the timeline, in seconds.
		 * Required
		 * Type: double
		 */
		start: number;

		/** In and out transitions for a clip - i.e. fade in and fade out */
		transition?: Transition;
	}

	/** A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it. */
	export interface ClipFormProperties {

		/**
		 * A motion effect to apply to the Clip. <ul>
		 * <li>`zoomIn` - slow zoom in</li>
		 * <li>`zoomOut` - slow zoom out</li>
		 * <li>`slideLeft` - slow slide (pan) left</li>
		 * <li>`slideRight` - slow slide (pan) right</li>
		 * <li>`slideUp` - slow slide (pan) up</li>
		 * <li>`slideDown` - slow slide (pan) down</li>
		 * </ul>
		 */
		effect: FormControl<ClipEffect | null | undefined>,

		/**
		 * A filter effect to apply to the Clip. <ul>
		 * <li>`boost` - boost contrast and saturation</li>
		 * <li>`contrast` - increase contrast</li>
		 * <li>`darken` - darken the scene</li>
		 * <li>`greyscale` - remove colour</li>
		 * <li>`lighten` - lighten the scene</li>
		 * <li>`muted` - reduce saturation and contrast</li>
		 * <li>`invert` - invert colors</li>
		 * </ul>
		 */
		filter: FormControl<ClipFilter | null | undefined>,

		/**
		 * Set how the asset should be scaled to fit the viewport using one of the following options:
		 * <ul>
		 * <li>`cover` - stretch the asset to fill the viewport without maintaining the aspect ratio.</li>
		 * <li>`contain` - fit the entire asset within the viewport while maintaining the original aspect ratio.</li>
		 * <li>`crop` - scale the asset to fill the viewport while maintaining the aspect ratio. The asset will be cropped if it exceeds the bounds of the viewport.</li>
		 * <li>`none` - preserves the original asset dimensions and does not apply any scaling.</li>
		 * </ul>
		 */
		fit: FormControl<ClipFit | null | undefined>,

		/**
		 * The length, in seconds, the Clip should play for.
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Sets the opacity of the Clip where 1 is opaque and 0 is transparent.
		 * Type: double
		 */
		opacity: FormControl<number | null | undefined>,

		/**
		 * Place the asset in one of nine predefined positions of the viewport. This is most effective for when the asset is scaled and you want to position the element to a specific position. <ul>
		 * <li>`top` - top (center)</li>
		 * <li>`topRight` - top right</li>
		 * <li>`right` - right (center)</li>
		 * <li>`bottomRight` - bottom right</li>
		 * <li>`bottom` - bottom (center)</li>
		 * <li>`bottomLeft` - bottom left</li>
		 * <li>`left` - left (center)</li>
		 * <li>`topLeft` - top left</li>
		 * <li>`center` - center</li>
		 * </ul>
		 */
		position: FormControl<ClipPosition | null | undefined>,

		/**
		 * Scale the asset to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale asset to half the size of the viewport. This is useful for picture-in-picture video and  scaling images such as logos and watermarks.
		 * Type: double
		 */
		scale: FormControl<number | null | undefined>,

		/**
		 * The start position of the Clip on the timeline, in seconds.
		 * Required
		 * Type: double
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateClipFormGroup() {
		return new FormGroup<ClipFormProperties>({
			effect: new FormControl<ClipEffect | null | undefined>(undefined),
			filter: new FormControl<ClipFilter | null | undefined>(undefined),
			fit: new FormControl<ClipFit | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			opacity: new FormControl<number | null | undefined>(undefined),
			position: new FormControl<ClipPosition | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file. */
	export interface VideoAsset {

		/** Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset. */
		crop?: Crop;

		/**
		 * The video source URL. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: string;

		/**
		 * The start trim point of the video clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached.
		 * Type: double
		 */
		trim?: number | null;

		/**
		 * The type of asset - set to `video` for videos.
		 * Required
		 */
		type: string;

		/**
		 * Set the volume for the video clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 0).
		 * Type: double
		 */
		volume?: number | null;
	}

	/** The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file. */
	export interface VideoAssetFormProperties {

		/**
		 * The video source URL. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: FormControl<string | null | undefined>,

		/**
		 * The start trim point of the video clip, in seconds (defaults to 0). Videos will start from the in trim point. The video will play until the file ends or the Clip length is reached.
		 * Type: double
		 */
		trim: FormControl<number | null | undefined>,

		/**
		 * The type of asset - set to `video` for videos.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Set the volume for the video clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 0).
		 * Type: double
		 */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateVideoAssetFormGroup() {
		return new FormGroup<VideoAssetFormProperties>({
			src: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trim: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			volume: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset. */
	export interface Crop {

		/**
		 * Crop from the bottom of the asset
		 * Minimum: 0
		 * Maximum: 1
		 */
		bottom?: number | null;

		/**
		 * Crop from the left of the asset
		 * Minimum: 0
		 * Maximum: 1
		 */
		left?: number | null;

		/**
		 * Crop from the left of the asset
		 * Minimum: 0
		 * Maximum: 1
		 */
		right?: number | null;

		/**
		 * Crop from the top of the asset
		 * Minimum: 0
		 * Maximum: 1
		 */
		top?: number | null;
	}

	/** Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset. */
	export interface CropFormProperties {

		/**
		 * Crop from the bottom of the asset
		 * Minimum: 0
		 * Maximum: 1
		 */
		bottom: FormControl<number | null | undefined>,

		/**
		 * Crop from the left of the asset
		 * Minimum: 0
		 * Maximum: 1
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * Crop from the left of the asset
		 * Minimum: 0
		 * Maximum: 1
		 */
		right: FormControl<number | null | undefined>,

		/**
		 * Crop from the top of the asset
		 * Minimum: 0
		 * Maximum: 1
		 */
		top: FormControl<number | null | undefined>,
	}
	export function CreateCropFormGroup() {
		return new FormGroup<CropFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			right: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			top: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export enum ClipEffect { zoomIn = 'zoomIn', zoomOut = 'zoomOut', slideLeft = 'slideLeft', slideRight = 'slideRight', slideUp = 'slideUp', slideDown = 'slideDown' }

	export enum ClipFilter { boost = 'boost', contrast = 'contrast', darken = 'darken', greyscale = 'greyscale', lighten = 'lighten', muted = 'muted', negative = 'negative' }

	export enum ClipFit { cover = 'cover', contain = 'contain', crop = 'crop', none = 'none' }


	/** Offsets the position of an asset horizontally or vertically by a relative distance. */
	export interface Offset {

		/**
		 * Offset an asset on the horizontal axis (left or right), range varies from -1 to 1. Positive numbers move the asset right, negative left. For all assets except titles the distance moved is relative to the width  of the viewport - i.e. an X offset of 0.5 will move the asset half the  screen width to the right.
		 * Minimum: -1
		 * Maximum: 1
		 */
		x?: number | null;

		/**
		 * Offset an asset on the vertical axis (up or down), range varies from -1 to 1. Positive numbers move the asset up, negative down. For all assets except titles the distance moved is relative to the height  of the viewport - i.e. an Y offset of 0.5 will move the asset up half the  screen height.
		 * Minimum: -1
		 * Maximum: 1
		 */
		y?: number | null;
	}

	/** Offsets the position of an asset horizontally or vertically by a relative distance. */
	export interface OffsetFormProperties {

		/**
		 * Offset an asset on the horizontal axis (left or right), range varies from -1 to 1. Positive numbers move the asset right, negative left. For all assets except titles the distance moved is relative to the width  of the viewport - i.e. an X offset of 0.5 will move the asset half the  screen width to the right.
		 * Minimum: -1
		 * Maximum: 1
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Offset an asset on the vertical axis (up or down), range varies from -1 to 1. Positive numbers move the asset up, negative down. For all assets except titles the distance moved is relative to the height  of the viewport - i.e. an Y offset of 0.5 will move the asset up half the  screen height.
		 * Minimum: -1
		 * Maximum: 1
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateOffsetFormGroup() {
		return new FormGroup<OffsetFormProperties>({
			x: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
		});

	}

	export enum ClipPosition { top = 'top', topRight = 'topRight', right = 'right', bottomRight = 'bottomRight', bottom = 'bottom', bottomLeft = 'bottomLeft', left = 'left', topLeft = 'topLeft', center = 'center' }


	/** In and out transitions for a clip - i.e. fade in and fade out */
	export interface Transition {

		/**
		 * The transition in. Available transitions are:
		 * <ul>
		 * <li>`fade` - fade in</li>
		 * <li>`reveal` - reveal from left to right</li>
		 * <li>`wipeLeft` - fade across screen to the left</li>
		 * <li>`wipeRight` - fade across screen to the right</li>
		 * <li>`slideLeft` - move slightly left and fade in</li>
		 * <li>`slideRight` - move slightly right and fade in</li>
		 * <li>`slideUp` - move slightly up and fade in</li>
		 * <li>`slideDown` - move slightly down and fade in</li>
		 * <li>`carouselLeft` - slide in from right to left</li>
		 * <li>`carouselRight` - slide in from left to right</li>
		 * <li>`carouselUp` - slide in from bottom to top</li>
		 * <li>`carouselDown` - slide in from top to bottom</li>
		 * <li>`shuffleTopRight` - rotate in from top right</li>
		 * <li>`shuffleRightTop` - rotate in from right top</li>
		 * <li>`shuffleRightBottom` - rotate in from right bottom</li>
		 * <li>`shuffleBottomRight` - rotate in from bottom right</li>
		 * <li>`shuffleBottomLeft` - rotate in from bottom left</li>
		 * <li>`shuffleLeftBottom` - rotate in from left bottom</li>
		 * <li>`shuffleLeftTop` - rotate in from left top</li>
		 * <li>`shuffleTopLeft` - rotate in from top left</li>
		 * <li>`zoom` - fast zoom in</li>
		 * </ul>
		 * The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
		 */
		in?: TransitionIn | null;

		/**
		 * The transition out. Available transitions are:
		 * <ul>
		 * <li>`fade` - fade out</li>
		 * <li>`reveal` - reveal from right to left</li>
		 * <li>`wipeLeft` - fade across screen to the left</li>
		 * <li>`wipeRight` - fade across screen to the right</li>
		 * <li>`slideLeft` - move slightly left and fade out</li>
		 * <li>`slideRight` - move slightly right and fade out</li>
		 * <li>`slideUp` - move slightly up and fade out</li>
		 * <li>`slideDown` - move slightly down and fade out</li>
		 * <li>`carouselLeft` - slide out from right to left</li>
		 * <li>`carouselRight` - slide out from left to right</li>
		 * <li>`carouselUp` - slide out from bottom to top</li>
		 * <li>`carouselDown` - slide out from top  to bottom</li>
		 * <li>`shuffleTopRight` - rotate out from top right</li>
		 * <li>`shuffleRightTop` - rotate out from right top</li>
		 * <li>`shuffleRightBottom` - rotate out from right bottom</li>
		 * <li>`shuffleBottomRight` - rotate out from bottom right</li>
		 * <li>`shuffleBottomLeft` - rotate out from bottom left</li>
		 * <li>`shuffleLeftBottom` - rotate out from left bottom</li>
		 * <li>`shuffleLeftTop` - rotate out from left top</li>
		 * <li>`shuffleTopLeft` - rotate out from top left</li>
		 * <li>`zoom` - fast zoom out</li>
		 * </ul>
		 * The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
		 */
		out?: TransitionIn | null;
	}

	/** In and out transitions for a clip - i.e. fade in and fade out */
	export interface TransitionFormProperties {

		/**
		 * The transition in. Available transitions are:
		 * <ul>
		 * <li>`fade` - fade in</li>
		 * <li>`reveal` - reveal from left to right</li>
		 * <li>`wipeLeft` - fade across screen to the left</li>
		 * <li>`wipeRight` - fade across screen to the right</li>
		 * <li>`slideLeft` - move slightly left and fade in</li>
		 * <li>`slideRight` - move slightly right and fade in</li>
		 * <li>`slideUp` - move slightly up and fade in</li>
		 * <li>`slideDown` - move slightly down and fade in</li>
		 * <li>`carouselLeft` - slide in from right to left</li>
		 * <li>`carouselRight` - slide in from left to right</li>
		 * <li>`carouselUp` - slide in from bottom to top</li>
		 * <li>`carouselDown` - slide in from top to bottom</li>
		 * <li>`shuffleTopRight` - rotate in from top right</li>
		 * <li>`shuffleRightTop` - rotate in from right top</li>
		 * <li>`shuffleRightBottom` - rotate in from right bottom</li>
		 * <li>`shuffleBottomRight` - rotate in from bottom right</li>
		 * <li>`shuffleBottomLeft` - rotate in from bottom left</li>
		 * <li>`shuffleLeftBottom` - rotate in from left bottom</li>
		 * <li>`shuffleLeftTop` - rotate in from left top</li>
		 * <li>`shuffleTopLeft` - rotate in from top left</li>
		 * <li>`zoom` - fast zoom in</li>
		 * </ul>
		 * The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
		 */
		in: FormControl<TransitionIn | null | undefined>,

		/**
		 * The transition out. Available transitions are:
		 * <ul>
		 * <li>`fade` - fade out</li>
		 * <li>`reveal` - reveal from right to left</li>
		 * <li>`wipeLeft` - fade across screen to the left</li>
		 * <li>`wipeRight` - fade across screen to the right</li>
		 * <li>`slideLeft` - move slightly left and fade out</li>
		 * <li>`slideRight` - move slightly right and fade out</li>
		 * <li>`slideUp` - move slightly up and fade out</li>
		 * <li>`slideDown` - move slightly down and fade out</li>
		 * <li>`carouselLeft` - slide out from right to left</li>
		 * <li>`carouselRight` - slide out from left to right</li>
		 * <li>`carouselUp` - slide out from bottom to top</li>
		 * <li>`carouselDown` - slide out from top  to bottom</li>
		 * <li>`shuffleTopRight` - rotate out from top right</li>
		 * <li>`shuffleRightTop` - rotate out from right top</li>
		 * <li>`shuffleRightBottom` - rotate out from right bottom</li>
		 * <li>`shuffleBottomRight` - rotate out from bottom right</li>
		 * <li>`shuffleBottomLeft` - rotate out from bottom left</li>
		 * <li>`shuffleLeftBottom` - rotate out from left bottom</li>
		 * <li>`shuffleLeftTop` - rotate out from left top</li>
		 * <li>`shuffleTopLeft` - rotate out from top left</li>
		 * <li>`zoom` - fast zoom out</li>
		 * </ul>
		 * The transition speed can also be controlled by appending `Fast` or `Slow` to the transition, e.g. `fadeFast` or `CarouselLeftSlow`.
		 */
		out: FormControl<TransitionIn | null | undefined>,
	}
	export function CreateTransitionFormGroup() {
		return new FormGroup<TransitionFormProperties>({
			in: new FormControl<TransitionIn | null | undefined>(undefined),
			out: new FormControl<TransitionIn | null | undefined>(undefined),
		});

	}

	export enum TransitionIn { fade = 'fade', fadeSlow = 'fadeSlow', fadeFast = 'fadeFast', reveal = 'reveal', revealSlow = 'revealSlow', revealFast = 'revealFast', wipeLeft = 'wipeLeft', wipeLeftSlow = 'wipeLeftSlow', wipeLeftFast = 'wipeLeftFast', wipeRight = 'wipeRight', wipeRightSlow = 'wipeRightSlow', wipeRightFast = 'wipeRightFast', slideLeft = 'slideLeft', slideLeftSlow = 'slideLeftSlow', slideLeftFast = 'slideLeftFast', slideRight = 'slideRight', slideRightSlow = 'slideRightSlow', slideRightFast = 'slideRightFast', slideUp = 'slideUp', slideUpSlow = 'slideUpSlow', slideUpFast = 'slideUpFast', slideDown = 'slideDown', slideDownSlow = 'slideDownSlow', slideDownFast = 'slideDownFast', carouselLeft = 'carouselLeft', carouselLeftSlow = 'carouselLeftSlow', carouselLeftFast = 'carouselLeftFast', carouselRight = 'carouselRight', carouselRightSlow = 'carouselRightSlow', carouselRightFast = 'carouselRightFast', carouselUp = 'carouselUp', carouselUpSlow = 'carouselUpSlow', carouselUpFast = 'carouselUpFast', carouselDown = 'carouselDown', carouselDownSlow = 'carouselDownSlow', carouselDownFast = 'carouselDownFast', shuffleTopRight = 'shuffleTopRight', shuffleTopRightSlow = 'shuffleTopRightSlow', shuffleTopRightFast = 'shuffleTopRightFast', shuffleRightTop = 'shuffleRightTop', shuffleRightTopSlow = 'shuffleRightTopSlow', shuffleRightTopFast = 'shuffleRightTopFast', shuffleRightBottom = 'shuffleRightBottom', shuffleRightBottomSlow = 'shuffleRightBottomSlow', shuffleRightBottomFast = 'shuffleRightBottomFast', shuffleBottomRight = 'shuffleBottomRight', shuffleBottomRightSlow = 'shuffleBottomRightSlow', shuffleBottomRightFast = 'shuffleBottomRightFast', shuffleBottomLeft = 'shuffleBottomLeft', shuffleBottomLeftSlow = 'shuffleBottomLeftSlow', shuffleBottomLeftFast = 'shuffleBottomLeftFast', shuffleLeftBottom = 'shuffleLeftBottom', shuffleLeftBottomSlow = 'shuffleLeftBottomSlow', shuffleLeftBottomFast = 'shuffleLeftBottomFast', shuffleLeftTop = 'shuffleLeftTop', shuffleLeftTopSlow = 'shuffleLeftTopSlow', shuffleLeftTopFast = 'shuffleLeftTopFast', shuffleTopLeft = 'shuffleTopLeft', shuffleTopLeftSlow = 'shuffleTopLeftSlow', shuffleTopLeftFast = 'shuffleTopLeftFast', zoom = 'zoom' }


	/** An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format. */
	export interface Edit {

		/** An optional webhook callback URL used to receive status notifications when a render completes or fails. See [webhooks](https://shotstack.gitbook.io/docs/guides/architecting-an-application/webhooks) for  more details. */
		callback?: string | null;

		/**
		 * The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.gitbook.io/docs/guides/architecting-an-application/disk-types) for more details. <ul>
		 * <li>`local` - optimized for high speed rendering with up to 512MB storage</li>
		 * <li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li>
		 * </ul>
		 */
		disk?: EditDisk | null;

		/**
		 * The output format, render range and type of media to generate.
		 * Required
		 */
		output: Output;

		/**
		 * A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
		 * Required
		 */
		timeline: Timeline;
	}

	/** An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format. */
	export interface EditFormProperties {

		/** An optional webhook callback URL used to receive status notifications when a render completes or fails. See [webhooks](https://shotstack.gitbook.io/docs/guides/architecting-an-application/webhooks) for  more details. */
		callback: FormControl<string | null | undefined>,

		/**
		 * The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.gitbook.io/docs/guides/architecting-an-application/disk-types) for more details. <ul>
		 * <li>`local` - optimized for high speed rendering with up to 512MB storage</li>
		 * <li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li>
		 * </ul>
		 */
		disk: FormControl<EditDisk | null | undefined>,
	}
	export function CreateEditFormGroup() {
		return new FormGroup<EditFormProperties>({
			callback: new FormControl<string | null | undefined>(undefined),
			disk: new FormControl<EditDisk | null | undefined>(undefined),
		});

	}

	export enum EditDisk { local = 'local', mount = 'mount' }


	/** The output format, render range and type of media to generate. */
	export interface Output {

		/**
		 * The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: <ul>
		 * <li>`16:9` - regular landscape/horizontal aspect ratio (default)</li>
		 * <li>`9:16` - vertical/portrait aspect ratio</li>
		 * <li>`1:1` - square aspect ratio</li>
		 * <li>`4:5` - short vertical/portrait aspect ratio</li>
		 * <li>`4:3` - legacy TV aspect ratio</li>
		 * </ul>
		 */
		aspectRatio?: OutputAspectRatio | null;

		/** A destination is a location where output files can be sent to for serving or hosting. By default all rendered assets are automatically sent to the Shotstack hosting destination. [DestinationShotstack](/#tocs_shotstackdestination) is currently the only option with plans to add more in the future such as S3, YouTube, Vimeo and Mux. If you do not require hosting you can opt-out using the  `exclude` property. */
		destinations?: Array<string>;

		/**
		 * The output format and type of media file to generate. <ul>
		 * <li>`mp4` - mp4 video file</li>
		 * <li>`gif` - animated gif</li>
		 * <li>`jpg` - jpg image file</li>
		 * <li>`png` - png image file</li>
		 * <li>`bmp` - bmp image file</li>
		 * <li>`mp3` - mp3 audio file (audio only)</li>
		 * </ul>
		 * Required
		 */
		format: OutputFormat;

		/**
		 * Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. <ul>
		 * <li>`12` - 12fps</li>
		 * <li>`15` - 15fps</li>
		 * <li>`24` - 24fps</li>
		 * <li>`25` - 25fps</li>
		 * <li>`30` - 30fps</li>
		 * </ul>
		 */
		fps?: OutputFps;

		/** Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video. */
		poster?: Poster;

		/**
		 * Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default `medium` provides the most optimized choice for all three  factors. <ul>
		 * <li>`low` - slightly reduced quality, smaller file size</li>
		 * <li>`medium` - optimized quality, render speeds and file size</li>
		 * <li>`high` - slightly increased quality, larger file size</li>
		 * </ul>
		 */
		quality?: OutputQuality | null;

		/** Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point. */
		range?: Range;

		/**
		 * The output resolution of the video or image. <ul>
		 * <li>`preview` - 512px x 288px @ 15fps</li>
		 * <li>`mobile` - 640px x 360px @ 25fps</li>
		 * <li>`sd` - 1024px x 576px @ 25fps</li>
		 * <li>`hd` - 1280px x 720px @ 25fps</li>
		 * <li>`1080` - 1920px x 1080px @ 25fps</li>
		 * </ul>
		 */
		resolution?: OutputResolution | null;

		/**
		 * Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. <ul>
		 * <li>`preview` - 512px x 288px @ 15fps</li>
		 * <li>`mobile` - 640px x 360px @ 25fps</li>
		 * <li>`sd` - 1024px x 576px @25fps</li>
		 * <li>`hd` - 1280px x 720px @25fps</li>
		 * <li>`1080` - 1920px x 1080px @25fps</li>
		 * </ul>
		 */
		scaleTo?: OutputResolution | null;

		/** Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications. */
		size?: Size;

		/** Generate a thumbnail image for the video or image at a specific point from the timeline. */
		thumbnail?: Thumbnail;
	}

	/** The output format, render range and type of media to generate. */
	export interface OutputFormProperties {

		/**
		 * The aspect ratio (shape) of the video or image. Useful for social media output formats. Options are: <ul>
		 * <li>`16:9` - regular landscape/horizontal aspect ratio (default)</li>
		 * <li>`9:16` - vertical/portrait aspect ratio</li>
		 * <li>`1:1` - square aspect ratio</li>
		 * <li>`4:5` - short vertical/portrait aspect ratio</li>
		 * <li>`4:3` - legacy TV aspect ratio</li>
		 * </ul>
		 */
		aspectRatio: FormControl<OutputAspectRatio | null | undefined>,

		/**
		 * The output format and type of media file to generate. <ul>
		 * <li>`mp4` - mp4 video file</li>
		 * <li>`gif` - animated gif</li>
		 * <li>`jpg` - jpg image file</li>
		 * <li>`png` - png image file</li>
		 * <li>`bmp` - bmp image file</li>
		 * <li>`mp3` - mp3 audio file (audio only)</li>
		 * </ul>
		 * Required
		 */
		format: FormControl<OutputFormat | null | undefined>,

		/**
		 * Override the default frames per second. Useful for when the source footage is recorded at 30fps, i.e. on  mobile devices. Lower frame rates can be used to add cinematic quality (24fps) or to create smaller file size/faster render times or animated gifs (12 or 15fps). Default is 25fps. <ul>
		 * <li>`12` - 12fps</li>
		 * <li>`15` - 15fps</li>
		 * <li>`24` - 24fps</li>
		 * <li>`25` - 25fps</li>
		 * <li>`30` - 30fps</li>
		 * </ul>
		 */
		fps: FormControl<OutputFps | null | undefined>,

		/**
		 * Adjust the output quality of the video, image or audio. Adjusting quality affects  render speed, download speeds and storage requirements due to file size. The default `medium` provides the most optimized choice for all three  factors. <ul>
		 * <li>`low` - slightly reduced quality, smaller file size</li>
		 * <li>`medium` - optimized quality, render speeds and file size</li>
		 * <li>`high` - slightly increased quality, larger file size</li>
		 * </ul>
		 */
		quality: FormControl<OutputQuality | null | undefined>,

		/**
		 * The output resolution of the video or image. <ul>
		 * <li>`preview` - 512px x 288px @ 15fps</li>
		 * <li>`mobile` - 640px x 360px @ 25fps</li>
		 * <li>`sd` - 1024px x 576px @ 25fps</li>
		 * <li>`hd` - 1280px x 720px @ 25fps</li>
		 * <li>`1080` - 1920px x 1080px @ 25fps</li>
		 * </ul>
		 */
		resolution: FormControl<OutputResolution | null | undefined>,

		/**
		 * Override the resolution and scale the video or image to render at a different size. When using scaleTo the asset should be edited at the resolution dimensions, i.e. use font sizes that look best at HD, then use scaleTo to output the file at SD and the text will be scaled to the correct size. This is useful if you want to create multiple asset sizes. <ul>
		 * <li>`preview` - 512px x 288px @ 15fps</li>
		 * <li>`mobile` - 640px x 360px @ 25fps</li>
		 * <li>`sd` - 1024px x 576px @25fps</li>
		 * <li>`hd` - 1280px x 720px @25fps</li>
		 * <li>`1080` - 1920px x 1080px @25fps</li>
		 * </ul>
		 */
		scaleTo: FormControl<OutputResolution | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			aspectRatio: new FormControl<OutputAspectRatio | null | undefined>(undefined),
			format: new FormControl<OutputFormat | null | undefined>(undefined, [Validators.required]),
			fps: new FormControl<OutputFps | null | undefined>(undefined),
			quality: new FormControl<OutputQuality | null | undefined>(undefined),
			resolution: new FormControl<OutputResolution | null | undefined>(undefined),
			scaleTo: new FormControl<OutputResolution | null | undefined>(undefined),
		});

	}

	export enum OutputAspectRatio { '16:9' = '16:9', '9:16' = '9:16', '1:1' = '1:1', '4:5' = '4:5', '4:3' = '4:3' }

	export enum OutputFormat { mp4 = 'mp4', gif = 'gif', mp3 = 'mp3', jpg = 'jpg', png = 'png', bmp = 'bmp' }

	export enum OutputFps { _12 = 0, _15 = 1, _24 = 2, _25 = 3, _30 = 4 }


	/** Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video. */
	export interface Poster {

		/**
		 * The point on the timeline in seconds to capture a single frame to use as the poster image.
		 * Required
		 * Type: double
		 */
		capture: number;
	}

	/** Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video. */
	export interface PosterFormProperties {

		/**
		 * The point on the timeline in seconds to capture a single frame to use as the poster image.
		 * Required
		 * Type: double
		 */
		capture: FormControl<number | null | undefined>,
	}
	export function CreatePosterFormGroup() {
		return new FormGroup<PosterFormProperties>({
			capture: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OutputQuality { low = 'low', medium = 'medium', high = 'high' }


	/** Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point. */
	export interface Range {

		/**
		 * The length of the portion of the video or audio to render - i.e. render 6 seconds of the video.
		 * Minimum: 0
		 */
		length?: number | null;

		/**
		 * The point on the timeline, in seconds, to start the render from - i.e. start at second 3.
		 * Minimum: 0
		 */
		start?: number | null;
	}

	/** Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point. */
	export interface RangeFormProperties {

		/**
		 * The length of the portion of the video or audio to render - i.e. render 6 seconds of the video.
		 * Minimum: 0
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * The point on the timeline, in seconds, to start the render from - i.e. start at second 3.
		 * Minimum: 0
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			length: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum OutputResolution { preview = 'preview', mobile = 'mobile', sd = 'sd', hd = 'hd', _1080 = '1080' }


	/** Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications. */
	export interface Size {

		/**
		 * Set a custom height for the video or image file. Value must be divisible by 2. Maximum video height is 1920px, maximum image height is 4096px.
		 * Minimum: 0
		 * Maximum: 4096
		 */
		height?: number | null;

		/**
		 * Set a custom width for the video or image file. Value must be divisible by 2. Maximum video width is 1920px, maximum image width is 4096px.
		 * Minimum: 0
		 * Maximum: 4096
		 */
		width?: number | null;
	}

	/** Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications. */
	export interface SizeFormProperties {

		/**
		 * Set a custom height for the video or image file. Value must be divisible by 2. Maximum video height is 1920px, maximum image height is 4096px.
		 * Minimum: 0
		 * Maximum: 4096
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Set a custom width for the video or image file. Value must be divisible by 2. Maximum video width is 1920px, maximum image width is 4096px.
		 * Minimum: 0
		 * Maximum: 4096
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateSizeFormGroup() {
		return new FormGroup<SizeFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4096)]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4096)]),
		});

	}


	/** Generate a thumbnail image for the video or image at a specific point from the timeline. */
	export interface Thumbnail {

		/**
		 * The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
		 * Required
		 * Type: double
		 */
		capture: number;

		/**
		 * Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
		 * Required
		 * Type: double
		 */
		scale: number;
	}

	/** Generate a thumbnail image for the video or image at a specific point from the timeline. */
	export interface ThumbnailFormProperties {

		/**
		 * The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
		 * Required
		 * Type: double
		 */
		capture: FormControl<number | null | undefined>,

		/**
		 * Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
		 * Required
		 * Type: double
		 */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateThumbnailFormGroup() {
		return new FormGroup<ThumbnailFormProperties>({
			capture: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			scale: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time. */
	export interface Timeline {

		/** A hexadecimal value for the timeline background colour. Defaults to #000000 (black). */
		background?: string | null;

		/** Disable the caching of ingested source footage and assets. See  [caching](https://shotstack.gitbook.io/docs/guides/architecting-an-application/caching) for more details. */
		cache?: boolean | null;

		/** An array of custom fonts to be downloaded for use by the HTML assets. */
		fonts?: Array<Font>;

		/** A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest. */
		soundtrack?: Soundtrack;

		/**
		 * A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images.
		 * Required
		 */
		tracks: Array<Track>;
	}

	/** A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time. */
	export interface TimelineFormProperties {

		/** A hexadecimal value for the timeline background colour. Defaults to #000000 (black). */
		background: FormControl<string | null | undefined>,

		/** Disable the caching of ingested source footage and assets. See  [caching](https://shotstack.gitbook.io/docs/guides/architecting-an-application/caching) for more details. */
		cache: FormControl<boolean | null | undefined>,
	}
	export function CreateTimelineFormGroup() {
		return new FormGroup<TimelineFormProperties>({
			background: new FormControl<string | null | undefined>(undefined),
			cache: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Download a custom font to use with the HTML asset type, using the font name in the CSS or font tag. See our [custom fonts](https://shotstack.io/learn/html-custom-fonts/) getting started guide for more details. */
	export interface Font {

		/**
		 * The URL of the font file. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: string;
	}

	/** Download a custom font to use with the HTML asset type, using the font name in the CSS or font tag. See our [custom fonts](https://shotstack.io/learn/html-custom-fonts/) getting started guide for more details. */
	export interface FontFormProperties {

		/**
		 * The URL of the font file. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: FormControl<string | null | undefined>,
	}
	export function CreateFontFormGroup() {
		return new FormGroup<FontFormProperties>({
			src: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest. */
	export interface Soundtrack {

		/**
		 * The effect to apply to the audio file <ul>
		 * <li>`fadeIn` - fade volume in only</li>
		 * <li>`fadeOut` - fade volume out only</li>
		 * <li>`fadeInFadeOut` - fade volume in and out</li>
		 * </ul>
		 */
		effect?: AudioAssetEffect | null;

		/**
		 * The URL of the mp3 audio file. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: string;

		/**
		 * Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
		 * Type: double
		 */
		volume?: number | null;
	}

	/** A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest. */
	export interface SoundtrackFormProperties {

		/**
		 * The effect to apply to the audio file <ul>
		 * <li>`fadeIn` - fade volume in only</li>
		 * <li>`fadeOut` - fade volume out only</li>
		 * <li>`fadeInFadeOut` - fade volume in and out</li>
		 * </ul>
		 */
		effect: FormControl<AudioAssetEffect | null | undefined>,

		/**
		 * The URL of the mp3 audio file. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: FormControl<string | null | undefined>,

		/**
		 * Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
		 * Type: double
		 */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateSoundtrackFormGroup() {
		return new FormGroup<SoundtrackFormProperties>({
			effect: new FormControl<AudioAssetEffect | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			volume: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it. */
	export interface Track {

		/**
		 * An array of Clips comprising of TitleClip, ImageClip or VideoClip.
		 * Required
		 */
		clips: Array<Clip>;
	}

	/** A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it. */
	export interface TrackFormProperties {
	}
	export function CreateTrackFormGroup() {
		return new FormGroup<TrackFormProperties>({
		});

	}


	/** The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box. */
	export interface HtmlAsset {

		/** Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency. */
		background?: string | null;

		/** The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.gitbook.io/docs/guides/architecting-an-application/html-support#supported-html-tags). */
		css?: string | null;

		/**
		 * Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/**
		 * The HTML text string. See list of [supported HTML tags](https://shotstack.gitbook.io/docs/guides/architecting-an-application/html-support#supported-html-tags).
		 * Required
		 */
		html: string;

		/**
		 * Place the HTML in one of nine predefined positions within the HTML area. <ul>
		 * <li>`top` - top (center)</li>
		 * <li>`topRight` - top right</li>
		 * <li>`right` - right (center)</li>
		 * <li>`bottomRight` - bottom right</li>
		 * <li>`bottom` - bottom (center)</li>
		 * <li>`bottomLeft` - bottom left</li>
		 * <li>`left` - left (center)</li>
		 * <li>`topLeft` - top left</li>
		 * <li>`center` - center</li>
		 * </ul>
		 */
		position?: ClipPosition | null;

		/**
		 * The type of asset - set to `html` for HTML.
		 * Required
		 */
		type: string;

		/**
		 * Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box. */
	export interface HtmlAssetFormProperties {

		/** Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency. */
		background: FormControl<string | null | undefined>,

		/** The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.gitbook.io/docs/guides/architecting-an-application/html-support#supported-html-tags). */
		css: FormControl<string | null | undefined>,

		/**
		 * Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * The HTML text string. See list of [supported HTML tags](https://shotstack.gitbook.io/docs/guides/architecting-an-application/html-support#supported-html-tags).
		 * Required
		 */
		html: FormControl<string | null | undefined>,

		/**
		 * Place the HTML in one of nine predefined positions within the HTML area. <ul>
		 * <li>`top` - top (center)</li>
		 * <li>`topRight` - top right</li>
		 * <li>`right` - right (center)</li>
		 * <li>`bottomRight` - bottom right</li>
		 * <li>`bottom` - bottom (center)</li>
		 * <li>`bottomLeft` - bottom left</li>
		 * <li>`left` - left (center)</li>
		 * <li>`topLeft` - top left</li>
		 * <li>`center` - center</li>
		 * </ul>
		 */
		position: FormControl<ClipPosition | null | undefined>,

		/**
		 * The type of asset - set to `html` for HTML.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateHtmlAssetFormGroup() {
		return new FormGroup<HtmlAssetFormProperties>({
			background: new FormControl<string | null | undefined>(undefined),
			css: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<ClipPosition | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file. */
	export interface ImageAsset {

		/** Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset. */
		crop?: Crop;

		/**
		 * The image source URL. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: string;

		/**
		 * The type of asset - set to `image` for images.
		 * Required
		 */
		type: string;
	}

	/** The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file. */
	export interface ImageAssetFormProperties {

		/**
		 * The image source URL. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: FormControl<string | null | undefined>,

		/**
		 * The type of asset - set to `image` for images.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImageAssetFormGroup() {
		return new FormGroup<ImageAssetFormProperties>({
			src: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The LumaAsset is used to create luma matte masks, transitions and effects between other assets. A luma matte is a grey scale image or animated video where the black areas are transparent and the white areas solid. The luma matte animation should be provided as an mp4 video file. The src must be a publicly accessible URL to the file. */
	export interface LumaAsset {

		/**
		 * The luma matte source URL. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: string;

		/**
		 * The start trim point of the luma matte clip, in seconds (defaults to 0). Videos will start from the in trim point. A luma matte video will play until the file ends or the Clip length is reached.
		 * Type: double
		 */
		trim?: number | null;

		/**
		 * The type of asset - set to `luma` for luma mattes.
		 * Required
		 */
		type: string;
	}

	/** The LumaAsset is used to create luma matte masks, transitions and effects between other assets. A luma matte is a grey scale image or animated video where the black areas are transparent and the white areas solid. The luma matte animation should be provided as an mp4 video file. The src must be a publicly accessible URL to the file. */
	export interface LumaAssetFormProperties {

		/**
		 * The luma matte source URL. The URL must be publicly accessible or include credentials.
		 * Required
		 */
		src: FormControl<string | null | undefined>,

		/**
		 * The start trim point of the luma matte clip, in seconds (defaults to 0). Videos will start from the in trim point. A luma matte video will play until the file ends or the Clip length is reached.
		 * Type: double
		 */
		trim: FormControl<number | null | undefined>,

		/**
		 * The type of asset - set to `luma` for luma mattes.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLumaAssetFormGroup() {
		return new FormGroup<LumaAssetFormProperties>({
			src: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trim: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned. */
	export interface QueuedResponse {

		/**
		 * `Created`, `Bad Request` or an error message.
		 * Required
		 */
		message: string;

		/**
		 * The response data returned with the [QueuedResponse](#tocs_queuedresponse).
		 * Required
		 */
		response: QueuedResponseData;

		/**
		 * `true` if successfully queued, else `false`.
		 * Required
		 */
		success: boolean;
	}

	/** The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned. */
	export interface QueuedResponseFormProperties {

		/**
		 * `Created`, `Bad Request` or an error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * `true` if successfully queued, else `false`.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateQueuedResponseFormGroup() {
		return new FormGroup<QueuedResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response data returned with the [QueuedResponse](#tocs_queuedresponse). */
	export interface QueuedResponseData {

		/**
		 * The id of the render task in UUID format.
		 * Required
		 */
		id: string;

		/**
		 * Success response message or error details.
		 * Required
		 */
		message: string;
	}

	/** The response data returned with the [QueuedResponse](#tocs_queuedresponse). */
	export interface QueuedResponseDataFormProperties {

		/**
		 * The id of the render task in UUID format.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Success response message or error details.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateQueuedResponseDataFormGroup() {
		return new FormGroup<QueuedResponseDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL. */
	export interface RenderResponse {

		/**
		 * `OK` or an error message.
		 * Required
		 */
		message: string;

		/**
		 * The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
		 * Required
		 */
		response: RenderResponseData;

		/**
		 * `true` if status available, else `false`.
		 * Required
		 */
		success: boolean;
	}

	/** The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL. */
	export interface RenderResponseFormProperties {

		/**
		 * `OK` or an error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * `true` if status available, else `false`.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateRenderResponseFormGroup() {
		return new FormGroup<RenderResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL. */
	export interface RenderResponseData {

		/**
		 * The time the render task was initially queued.
		 * Required
		 */
		created: string;

		/**
		 * An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
		 * Required
		 */
		data: Edit;

		/**
		 * The output video or audio length in seconds.
		 * Type: double
		 */
		duration?: number | null;

		/** An error message, only displayed if an error occurred. */
		error?: string | null;

		/**
		 * The id of the render task in UUID format.
		 * Required
		 */
		id: string;

		/**
		 * The owner id of the render task.
		 * Required
		 */
		owner: string;

		/** The customer subscription plan. */
		plan?: string | null;

		/** The URL of the poster image if requested. This will only be available if status is done. */
		poster?: string | null;

		/**
		 * The time taken to render the asset in milliseconds.
		 * Type: double
		 */
		renderTime?: number | null;

		/**
		 * The status of the render task. <ul>
		 * <li>`queued` - render is queued waiting to be rendered</li>
		 * <li>`fetching` - assets are being fetched</li>
		 * <li>`rendering` - the asset is being rendered</li>
		 * <li>`saving` - the final asset is being saved to storage</li>
		 * <li>`done` - the asset is ready to be downloaded</li>
		 * <li>`failed` - there was an error rendering the asset</li>
		 * </ul>
		 * Required
		 */
		status: RenderResponseDataStatus;

		/** The URL of the thumbnail image if requested. This will only be available if status is done. */
		thumbnail?: string | null;

		/**
		 * The time the render status was last updated.
		 * Required
		 */
		updated: string;

		/** The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination. */
		url?: string | null;
	}

	/** The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL. */
	export interface RenderResponseDataFormProperties {

		/**
		 * The time the render task was initially queued.
		 * Required
		 */
		created: FormControl<string | null | undefined>,

		/**
		 * The output video or audio length in seconds.
		 * Type: double
		 */
		duration: FormControl<number | null | undefined>,

		/** An error message, only displayed if an error occurred. */
		error: FormControl<string | null | undefined>,

		/**
		 * The id of the render task in UUID format.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The owner id of the render task.
		 * Required
		 */
		owner: FormControl<string | null | undefined>,

		/** The customer subscription plan. */
		plan: FormControl<string | null | undefined>,

		/** The URL of the poster image if requested. This will only be available if status is done. */
		poster: FormControl<string | null | undefined>,

		/**
		 * The time taken to render the asset in milliseconds.
		 * Type: double
		 */
		renderTime: FormControl<number | null | undefined>,

		/**
		 * The status of the render task. <ul>
		 * <li>`queued` - render is queued waiting to be rendered</li>
		 * <li>`fetching` - assets are being fetched</li>
		 * <li>`rendering` - the asset is being rendered</li>
		 * <li>`saving` - the final asset is being saved to storage</li>
		 * <li>`done` - the asset is ready to be downloaded</li>
		 * <li>`failed` - there was an error rendering the asset</li>
		 * </ul>
		 * Required
		 */
		status: FormControl<RenderResponseDataStatus | null | undefined>,

		/** The URL of the thumbnail image if requested. This will only be available if status is done. */
		thumbnail: FormControl<string | null | undefined>,

		/**
		 * The time the render status was last updated.
		 * Required
		 */
		updated: FormControl<string | null | undefined>,

		/** The URL of the final asset. This will only be available if status is done. This is a temporary URL and will be deleted after 24 hours. By default all assets are copied to the Shotstack hosting and CDN destination. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateRenderResponseDataFormGroup() {
		return new FormGroup<RenderResponseDataFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			plan: new FormControl<string | null | undefined>(undefined),
			poster: new FormControl<string | null | undefined>(undefined),
			renderTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<RenderResponseDataStatus | null | undefined>(undefined, [Validators.required]),
			thumbnail: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RenderResponseDataStatus { queued = 'queued', fetching = 'fetching', rendering = 'rendering', saving = 'saving', done = 'done', failed = 'failed' }


	/** Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default. */
	export interface ShotstackDestination {

		/** Set to `true` to opt-out from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering. */
		exclude?: boolean | null;

		/**
		 * The destination to send rendered assets to - set to `shotstack` for Shotstack hosting and CDN.
		 * Required
		 */
		provider: string;
	}

	/** Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default. */
	export interface ShotstackDestinationFormProperties {

		/** Set to `true` to opt-out from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering. */
		exclude: FormControl<boolean | null | undefined>,

		/**
		 * The destination to send rendered assets to - set to `shotstack` for Shotstack hosting and CDN.
		 * Required
		 */
		provider: FormControl<string | null | undefined>,
	}
	export function CreateShotstackDestinationFormGroup() {
		return new FormGroup<ShotstackDestinationFormProperties>({
			exclude: new FormControl<boolean | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning. */
	export interface TitleAsset {

		/** Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background. */
		background?: string | null;

		/** Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency. */
		color?: string | null;

		/** Offsets the position of an asset horizontally or vertically by a relative distance. */
		offset?: Offset;

		/**
		 * Place the title in one of nine predefined positions of the viewport. <ul>
		 * <li>`top` - top (center)</li>
		 * <li>`topRight` - top right</li>
		 * <li>`right` - right (center)</li>
		 * <li>`bottomRight` - bottom right</li>
		 * <li>`bottom` - bottom (center)</li>
		 * <li>`bottomLeft` - bottom left</li>
		 * <li>`left` - left (center)</li>
		 * <li>`topLeft` - top left</li>
		 * <li>`center` - center</li>
		 * </ul>
		 */
		position?: ClipPosition | null;

		/**
		 * Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>
		 * <li>`xx-small`</li>
		 * <li>`x-small`</li>
		 * <li>`small`</li>
		 * <li>`medium`</li>
		 * <li>`large`</li>
		 * <li>`x-large`</li>
		 * <li>`xx-large`</li>
		 * </ul>
		 */
		size?: TitleAssetSize | null;

		/**
		 * Uses a preset to apply font properties and styling to the title. <ul>
		 * <li>`minimal`</li>
		 * <li>`blockbuster`</li>
		 * <li>`vogue`</li>
		 * <li>`sketchy`</li>
		 * <li>`skinny`</li>
		 * <li>`chunk`</li>
		 * <li>`chunkLight`</li>
		 * <li>`marker`</li>
		 * <li>`future`</li>
		 * <li>`subtitle`</li>
		 * </ul>
		 */
		style?: TitleAssetStyle | null;

		/**
		 * The title text string - i.e. "My Title".
		 * Required
		 */
		text: string;

		/**
		 * The type of asset - set to `title` for titles.
		 * Required
		 */
		type: string;
	}

	/** The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning. */
	export interface TitleAssetFormProperties {

		/** Apply a background color behind the text. Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with 50% transparency. Omit to use transparent background. */
		background: FormControl<string | null | undefined>,

		/** Set the text color using hexadecimal color notation. Transparency is supported by setting the first two characters of the hex string (opposite to HTML),  i.e. #80ffffff will be white with  50% transparency. */
		color: FormControl<string | null | undefined>,

		/**
		 * Place the title in one of nine predefined positions of the viewport. <ul>
		 * <li>`top` - top (center)</li>
		 * <li>`topRight` - top right</li>
		 * <li>`right` - right (center)</li>
		 * <li>`bottomRight` - bottom right</li>
		 * <li>`bottom` - bottom (center)</li>
		 * <li>`bottomLeft` - bottom left</li>
		 * <li>`left` - left (center)</li>
		 * <li>`topLeft` - top left</li>
		 * <li>`center` - center</li>
		 * </ul>
		 */
		position: FormControl<ClipPosition | null | undefined>,

		/**
		 * Set the relative size of the text using predefined sizes from xx-small to xx-large. <ul>
		 * <li>`xx-small`</li>
		 * <li>`x-small`</li>
		 * <li>`small`</li>
		 * <li>`medium`</li>
		 * <li>`large`</li>
		 * <li>`x-large`</li>
		 * <li>`xx-large`</li>
		 * </ul>
		 */
		size: FormControl<TitleAssetSize | null | undefined>,

		/**
		 * Uses a preset to apply font properties and styling to the title. <ul>
		 * <li>`minimal`</li>
		 * <li>`blockbuster`</li>
		 * <li>`vogue`</li>
		 * <li>`sketchy`</li>
		 * <li>`skinny`</li>
		 * <li>`chunk`</li>
		 * <li>`chunkLight`</li>
		 * <li>`marker`</li>
		 * <li>`future`</li>
		 * <li>`subtitle`</li>
		 * </ul>
		 */
		style: FormControl<TitleAssetStyle | null | undefined>,

		/**
		 * The title text string - i.e. "My Title".
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The type of asset - set to `title` for titles.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTitleAssetFormGroup() {
		return new FormGroup<TitleAssetFormProperties>({
			background: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<ClipPosition | null | undefined>(undefined),
			size: new FormControl<TitleAssetSize | null | undefined>(undefined),
			style: new FormControl<TitleAssetStyle | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TitleAssetSize { 'xx-small' = 'xx-small', 'x-small' = 'x-small', small = 'small', medium = 'medium', large = 'large', 'x-large' = 'x-large', 'xx-large' = 'xx-large' }

	export enum TitleAssetStyle { minimal = 'minimal', blockbuster = 'blockbuster', vogue = 'vogue', sketchy = 'sketchy', skinny = 'skinny', chunk = 'chunk', chunkLight = 'chunkLight', marker = 'marker', future = 'future', subtitle = 'subtitle' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Asset by Render ID
		 * A render may generate more than one file, such as a video, thumbnail and poster image. When the assets are created the only known id is the render id returned by the original [render request](#render-video), status  request or webhook. This endpoint lets you look up one or more assets by the render id.
		 * **base URL:** https://api.shotstack.io/serve/{version}
		 * Get assets/render/{id}
		 * @return {AssetRenderResponse} Get one or more assets by render id
		 */
		GetAssetByRenderId(): Observable<AssetRenderResponse> {
			return this.http.get<AssetRenderResponse>(this.baseUri + 'assets/render/{id}', {});
		}

		/**
		 * Delete Asset
		 * Delete an asset by its asset id. If a render creates multiple assets, such as thumbnail and poster images, each asset must be deleted individually by the asset id.
		 * **base URL:** https://api.shotstack.io/serve/{version}
		 * Delete assets/{id}
		 * @return {void} 
		 */
		DeleteAsset(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'assets/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Asset
		 * The Serve API is used to interact with, and delete hosted assets including videos, images, audio files,  thumbnails and poster images. Use this endpoint to fetch an asset by asset id. Note that an asset id is unique for each asset and different from the render id.
		 * **base URL:** https://api.shotstack.io/serve/{version}
		 * Get assets/{id}
		 * @return {AssetResponse} Get asset by asset id
		 */
		GetAsset(): Observable<AssetResponse> {
			return this.http.get<AssetResponse>(this.baseUri + 'assets/{id}', {});
		}

		/**
		 * Render Asset
		 * Queue and render the contents of a timeline as a video, image or audio file.
		 * Post render
		 * @param {Edit} requestBody The video, image or audio edit specified using JSON.
		 * **base URL:** https://api.shotstack.io/{version}
		 * @return {void} 
		 */
		PostRender(requestBody: Edit): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'render', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Render Status
		 * Get the rendering status, temporary asset url and details of a render by ID.
		 * **base URL:** https://api.shotstack.io/{version}
		 * Get render/{id}
		 * @return {RenderResponse} The render status details
		 */
		GetRender(): Observable<RenderResponse> {
			return this.http.get<RenderResponse>(this.baseUri + 'render/{id}', {});
		}
	}

}

