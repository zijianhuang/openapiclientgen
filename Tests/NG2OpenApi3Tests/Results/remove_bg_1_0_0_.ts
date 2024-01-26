import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AuthFailed {
		AuthFailedErrors?: Array<AuthFailedErrors>;
	}
	export interface AuthFailedFormProperties {
	}
	export function CreateAuthFailedFormGroup() {
		return new FormGroup<AuthFailedFormProperties>({
		});

	}

	export interface AuthFailedErrors {

		/** Error message */
		title?: string | null;
	}
	export interface AuthFailedErrorsFormProperties {

		/** Error message */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAuthFailedErrorsFormGroup() {
		return new FormGroup<AuthFailedErrorsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImprovementProgramJson {

		/** Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.) */
		image_file_b64?: string | null;

		/** Filename of the image, if not provided it will be autodetected form the submitted data. */
		image_filename?: string | null;

		/** Source image URL. (If this parameter is present, the other image source parameters must be empty.) */
		image_url?: string | null;

		/** Images with the same tag are grouped together. */
		tag?: string | null;
	}
	export interface ImprovementProgramJsonFormProperties {

		/** Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.) */
		image_file_b64: FormControl<string | null | undefined>,

		/** Filename of the image, if not provided it will be autodetected form the submitted data. */
		image_filename: FormControl<string | null | undefined>,

		/** Source image URL. (If this parameter is present, the other image source parameters must be empty.) */
		image_url: FormControl<string | null | undefined>,

		/** Images with the same tag are grouped together. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateImprovementProgramJsonFormGroup() {
		return new FormGroup<ImprovementProgramJsonFormProperties>({
			image_file_b64: new FormControl<string | null | undefined>(undefined),
			image_filename: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImprovementProgramJsonResponse {

		/** ID of the submitted image */
		id?: string | null;
	}
	export interface ImprovementProgramJsonResponseFormProperties {

		/** ID of the submitted image */
		id: FormControl<string | null | undefined>,
	}
	export function CreateImprovementProgramJsonResponseFormGroup() {
		return new FormGroup<ImprovementProgramJsonResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImprovementProgramMultipart {

		/** Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) */
		image_file?: string | null;

		/** Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.) */
		image_file_b64?: string | null;

		/** Filename of the image, if not provided it will be autodetected form the submitted data. */
		image_filename?: string | null;

		/** Source image URL. (If this parameter is present, the other image source parameters must be empty.) */
		image_url?: string | null;

		/** Images with the same tag are grouped together. */
		tag?: string | null;
	}
	export interface ImprovementProgramMultipartFormProperties {

		/** Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) */
		image_file: FormControl<string | null | undefined>,

		/** Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.) */
		image_file_b64: FormControl<string | null | undefined>,

		/** Filename of the image, if not provided it will be autodetected form the submitted data. */
		image_filename: FormControl<string | null | undefined>,

		/** Source image URL. (If this parameter is present, the other image source parameters must be empty.) */
		image_url: FormControl<string | null | undefined>,

		/** Images with the same tag are grouped together. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateImprovementProgramMultipartFormGroup() {
		return new FormGroup<ImprovementProgramMultipartFormProperties>({
			image_file: new FormControl<string | null | undefined>(undefined),
			image_file_b64: new FormControl<string | null | undefined>(undefined),
			image_filename: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RateLimit {
		RateLimitErrors?: Array<RateLimitErrors>;
	}
	export interface RateLimitFormProperties {
	}
	export function CreateRateLimitFormGroup() {
		return new FormGroup<RateLimitFormProperties>({
		});

	}

	export interface RateLimitErrors {

		/** Error message */
		title?: string | null;
	}
	export interface RateLimitErrorsFormProperties {

		/** Error message */
		title: FormControl<string | null | undefined>,
	}
	export function CreateRateLimitErrorsFormGroup() {
		return new FormGroup<RateLimitErrorsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveBgJson {

		/**
		 * Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).
		 */
		add_shadow?: boolean | null;

		/**
		 * Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)
		 */
		bg_color?: string | null;

		/** Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.) */
		bg_image_url?: string | null;

		/**
		 * Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.
		 */
		channels?: RemoveBgJsonChannels | null;

		/**
		 * Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.
		 */
		crop?: boolean | null;

		/**
		 * Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.
		 */
		crop_margin?: string | null;

		/**
		 * Result image format:
		 * "auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),
		 * "png" = PNG format with alpha transparency,
		 * "jpg" = JPG format, no transparency,
		 * "zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).
		 */
		format?: RemoveBgJsonFormat | null;

		/** Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.) */
		image_file_b64?: string | null;

		/** Source image URL. (If this parameter is present, the other image source parameters must be empty.) */
		image_url?: string | null;

		/**
		 * Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).
		 */
		position?: string | null;

		/**
		 * Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest ("0% 0% 100% 100%").
		 */
		roi?: string | null;

		/**
		 * Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).
		 */
		scale?: string | null;

		/**
		 * Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.
		 */
		semitransparency?: boolean | null;

		/**
		 * Maximum output image resolution:
		 * "preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,
		 * "full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),
		 * "auto" = Use highest available resolution (based on image size and available credits).
		 * For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".
		 */
		size?: RemoveBgJsonSize | null;

		/**
		 * Foreground type:
		 * "auto" = Automatically detect kind of foreground,
		 * "person" = Use person(s) as foreground,
		 * "product" = Use product(s) as foreground.
		 * "car" = Use car as foreground,
		 */
		type?: RemoveBgJsonType | null;

		/**
		 * Classification level of the detected foreground type:
		 * "none" = No classification (X-Type Header won't bet set on the response)
		 * "1" = Use coarse classification classes: [person, product, animal, car, other]
		 * "2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]
		 * "latest" = Always use the latest classification classes available
		 */
		type_level?: RemoveBgJsonType_level | null;
	}
	export interface RemoveBgJsonFormProperties {

		/**
		 * Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).
		 */
		add_shadow: FormControl<boolean | null | undefined>,

		/**
		 * Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)
		 */
		bg_color: FormControl<string | null | undefined>,

		/** Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.) */
		bg_image_url: FormControl<string | null | undefined>,

		/**
		 * Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.
		 */
		channels: FormControl<RemoveBgJsonChannels | null | undefined>,

		/**
		 * Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.
		 */
		crop: FormControl<boolean | null | undefined>,

		/**
		 * Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.
		 */
		crop_margin: FormControl<string | null | undefined>,

		/**
		 * Result image format:
		 * "auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),
		 * "png" = PNG format with alpha transparency,
		 * "jpg" = JPG format, no transparency,
		 * "zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).
		 */
		format: FormControl<RemoveBgJsonFormat | null | undefined>,

		/** Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.) */
		image_file_b64: FormControl<string | null | undefined>,

		/** Source image URL. (If this parameter is present, the other image source parameters must be empty.) */
		image_url: FormControl<string | null | undefined>,

		/**
		 * Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).
		 */
		position: FormControl<string | null | undefined>,

		/**
		 * Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest ("0% 0% 100% 100%").
		 */
		roi: FormControl<string | null | undefined>,

		/**
		 * Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).
		 */
		scale: FormControl<string | null | undefined>,

		/**
		 * Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.
		 */
		semitransparency: FormControl<boolean | null | undefined>,

		/**
		 * Maximum output image resolution:
		 * "preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,
		 * "full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),
		 * "auto" = Use highest available resolution (based on image size and available credits).
		 * For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".
		 */
		size: FormControl<RemoveBgJsonSize | null | undefined>,

		/**
		 * Foreground type:
		 * "auto" = Automatically detect kind of foreground,
		 * "person" = Use person(s) as foreground,
		 * "product" = Use product(s) as foreground.
		 * "car" = Use car as foreground,
		 */
		type: FormControl<RemoveBgJsonType | null | undefined>,

		/**
		 * Classification level of the detected foreground type:
		 * "none" = No classification (X-Type Header won't bet set on the response)
		 * "1" = Use coarse classification classes: [person, product, animal, car, other]
		 * "2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]
		 * "latest" = Always use the latest classification classes available
		 */
		type_level: FormControl<RemoveBgJsonType_level | null | undefined>,
	}
	export function CreateRemoveBgJsonFormGroup() {
		return new FormGroup<RemoveBgJsonFormProperties>({
			add_shadow: new FormControl<boolean | null | undefined>(undefined),
			bg_color: new FormControl<string | null | undefined>(undefined),
			bg_image_url: new FormControl<string | null | undefined>(undefined),
			channels: new FormControl<RemoveBgJsonChannels | null | undefined>(undefined),
			crop: new FormControl<boolean | null | undefined>(undefined),
			crop_margin: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<RemoveBgJsonFormat | null | undefined>(undefined),
			image_file_b64: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			roi: new FormControl<string | null | undefined>(undefined),
			scale: new FormControl<string | null | undefined>(undefined),
			semitransparency: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<RemoveBgJsonSize | null | undefined>(undefined),
			type: new FormControl<RemoveBgJsonType | null | undefined>(undefined),
			type_level: new FormControl<RemoveBgJsonType_level | null | undefined>(undefined),
		});

	}

	export enum RemoveBgJsonChannels { rgba = 0, alpha = 1 }

	export enum RemoveBgJsonFormat { auto = 0, png = 1, jpg = 2, zip = 3 }

	export enum RemoveBgJsonSize { preview = 0, full = 1, auto = 2 }

	export enum RemoveBgJsonType { auto = 0, person = 1, product = 2, car = 3 }

	export enum RemoveBgJsonType_level { none = 0, _1 = 1, _2 = 2, latest = 3 }

	export interface RemoveBgJsonResponse {
		data?: RemoveBgJsonResponseData;
	}
	export interface RemoveBgJsonResponseFormProperties {
	}
	export function CreateRemoveBgJsonResponseFormGroup() {
		return new FormGroup<RemoveBgJsonResponseFormProperties>({
		});

	}

	export interface RemoveBgJsonResponseData {

		/** Height of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution. */
		foreground_height?: number | null;

		/** Left position of the foreground image along the horizontal axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution. */
		foreground_left?: number | null;

		/** Top position of the foreground image along the vertical axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution. */
		foreground_top?: number | null;

		/** Width of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution. */
		foreground_width?: number | null;

		/** Base64 encoded string of result image */
		result_b64?: string | null;
	}
	export interface RemoveBgJsonResponseDataFormProperties {

		/** Height of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution. */
		foreground_height: FormControl<number | null | undefined>,

		/** Left position of the foreground image along the horizontal axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution. */
		foreground_left: FormControl<number | null | undefined>,

		/** Top position of the foreground image along the vertical axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution. */
		foreground_top: FormControl<number | null | undefined>,

		/** Width of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution. */
		foreground_width: FormControl<number | null | undefined>,

		/** Base64 encoded string of result image */
		result_b64: FormControl<string | null | undefined>,
	}
	export function CreateRemoveBgJsonResponseDataFormGroup() {
		return new FormGroup<RemoveBgJsonResponseDataFormProperties>({
			foreground_height: new FormControl<number | null | undefined>(undefined),
			foreground_left: new FormControl<number | null | undefined>(undefined),
			foreground_top: new FormControl<number | null | undefined>(undefined),
			foreground_width: new FormControl<number | null | undefined>(undefined),
			result_b64: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveBgMultipart {

		/**
		 * Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).
		 */
		add_shadow?: boolean | null;

		/**
		 * Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)
		 */
		bg_color?: string | null;

		/** Adds a background image from a file (binary). The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.) */
		bg_image_file?: string | null;

		/** Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.) */
		bg_image_url?: string | null;

		/**
		 * Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.
		 */
		channels?: RemoveBgJsonChannels | null;

		/**
		 * Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.
		 */
		crop?: boolean | null;

		/**
		 * Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.
		 */
		crop_margin?: string | null;

		/**
		 * Result image format:
		 * "auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),
		 * "png" = PNG format with alpha transparency,
		 * "jpg" = JPG format, no transparency,
		 * "zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).
		 */
		format?: RemoveBgJsonFormat | null;

		/** Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) */
		image_file?: string | null;

		/** Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.) */
		image_file_b64?: string | null;

		/** Source image URL. (If this parameter is present, the other image source parameters must be empty.) */
		image_url?: string | null;

		/**
		 * Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).
		 */
		position?: string | null;

		/**
		 * Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest ("0% 0% 100% 100%").
		 */
		roi?: string | null;

		/**
		 * Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).
		 */
		scale?: string | null;

		/**
		 * Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.
		 */
		semitransparency?: boolean | null;

		/**
		 * Maximum output image resolution:
		 * "preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,
		 * "full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),
		 * "auto" = Use highest available resolution (based on image size and available credits).
		 * For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".
		 */
		size?: RemoveBgJsonSize | null;

		/**
		 * Foreground type:
		 * "auto" = Automatically detect kind of foreground,
		 * "person" = Use person(s) as foreground,
		 * "product" = Use product(s) as foreground.
		 * "car" = Use car as foreground,
		 */
		type?: RemoveBgJsonType | null;

		/**
		 * Classification level of the detected foreground type:
		 * "none" = No classification (X-Type Header won't bet set on the response)
		 * "1" = Use coarse classification classes: [person, product, animal, car, other]
		 * "2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]
		 * "latest" = Always use the latest classification classes available
		 */
		type_level?: RemoveBgJsonType_level | null;
	}
	export interface RemoveBgMultipartFormProperties {

		/**
		 * Whether to add an artificial shadow to the result (default: false). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to true (this might change in the future).
		 */
		add_shadow: FormControl<boolean | null | undefined>,

		/**
		 * Adds a solid color background. Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77). (If this parameter is present, the other bg_ parameters must be empty.)
		 */
		bg_color: FormControl<string | null | undefined>,

		/** Adds a background image from a file (binary). The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.) */
		bg_image_file: FormControl<string | null | undefined>,

		/** Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other bg_ parameters must be empty.) */
		bg_image_url: FormControl<string | null | undefined>,

		/**
		 * Request either the finalized image ("rgba", default) or an alpha mask ("alpha"). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore "rgba" is recommended.
		 */
		channels: FormControl<RemoveBgJsonChannels | null | undefined>,

		/**
		 * Whether to crop off all empty regions (default: false). Note that cropping has no effect on the amount of charged credits.
		 */
		crop: FormControl<boolean | null | undefined>,

		/**
		 * Adds a margin around the cropped subject (default: 0). Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%"). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when "crop=true". The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.
		 */
		crop_margin: FormControl<string | null | undefined>,

		/**
		 * Result image format:
		 * "auto" = Use PNG format if transparent regions exist, otherwise use JPG format (default),
		 * "png" = PNG format with alpha transparency,
		 * "jpg" = JPG format, no transparency,
		 * "zip" = ZIP format, contains color image and alpha matte image, supports transparency (recommended).
		 */
		format: FormControl<RemoveBgJsonFormat | null | undefined>,

		/** Source image file (binary). (If this parameter is present, the other image source parameters must be empty.) */
		image_file: FormControl<string | null | undefined>,

		/** Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.) */
		image_file_b64: FormControl<string | null | undefined>,

		/** Source image URL. (If this parameter is present, the other image source parameters must be empty.) */
		image_url: FormControl<string | null | undefined>,

		/**
		 * Positions the subject within the image canvas. Can be "original" (default unless "scale" is given), "center" (default when "scale" is given) or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).
		 */
		position: FormControl<string | null | undefined>,

		/**
		 * Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format "x1 y1 x2 y2". The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest ("0% 0% 100% 100%").
		 */
		roi: FormControl<string | null | undefined>,

		/**
		 * Scales the subject relative to the total image size. Can be any value from "10%" to "100%", or "original" (default). Scaling the subject implies "position=center" (unless specified otherwise).
		 */
		scale: FormControl<string | null | undefined>,

		/**
		 * Whether to have semi-transparent regions in the result (default: true). NOTE: Semitransparency is currently only supported for car windows (this might change in the future). Other objects are returned without semitransparency, even if set to true.
		 */
		semitransparency: FormControl<boolean | null | undefined>,

		/**
		 * Maximum output image resolution:
		 * "preview" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,
		 * "full" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),
		 * "auto" = Use highest available resolution (based on image size and available credits).
		 * For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image. The value "full" is also available under the name "4k" and the value "preview" is aliased as "small" and "regular".
		 */
		size: FormControl<RemoveBgJsonSize | null | undefined>,

		/**
		 * Foreground type:
		 * "auto" = Automatically detect kind of foreground,
		 * "person" = Use person(s) as foreground,
		 * "product" = Use product(s) as foreground.
		 * "car" = Use car as foreground,
		 */
		type: FormControl<RemoveBgJsonType | null | undefined>,

		/**
		 * Classification level of the detected foreground type:
		 * "none" = No classification (X-Type Header won't bet set on the response)
		 * "1" = Use coarse classification classes: [person, product, animal, car, other]
		 * "2" = Use more specific classification classes: [person, product, animal, car, car_interior, car_part, transportation, graphics, other]
		 * "latest" = Always use the latest classification classes available
		 */
		type_level: FormControl<RemoveBgJsonType_level | null | undefined>,
	}
	export function CreateRemoveBgMultipartFormGroup() {
		return new FormGroup<RemoveBgMultipartFormProperties>({
			add_shadow: new FormControl<boolean | null | undefined>(undefined),
			bg_color: new FormControl<string | null | undefined>(undefined),
			bg_image_file: new FormControl<string | null | undefined>(undefined),
			bg_image_url: new FormControl<string | null | undefined>(undefined),
			channels: new FormControl<RemoveBgJsonChannels | null | undefined>(undefined),
			crop: new FormControl<boolean | null | undefined>(undefined),
			crop_margin: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<RemoveBgJsonFormat | null | undefined>(undefined),
			image_file: new FormControl<string | null | undefined>(undefined),
			image_file_b64: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			roi: new FormControl<string | null | undefined>(undefined),
			scale: new FormControl<string | null | undefined>(undefined),
			semitransparency: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<RemoveBgJsonSize | null | undefined>(undefined),
			type: new FormControl<RemoveBgJsonType | null | undefined>(undefined),
			type_level: new FormControl<RemoveBgJsonType_level | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch credit balance and free API calls.
		 * Get the current credit balance and number of free API calls.
		 * Notes:
		 * * Balance changes may be delayed by several seconds. To locally keep track of your credit balance, you should therefore only call this endpoint initially (or e.g. when the user manually triggers a refresh), then use the `X-Credits-Charged` response header returned with each image processing response to adjust the local balance.
		 * * The "*sizes*" field is always "all", is deprecated and will soon be removed.
		 * Get account
		 * @return {void} 
		 */
		Fetch_account_infoGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Submit an image to the remove.bg Improvement program
		 * * Contribute an image that remove.bg is currently not able to remove the background from properly
		 * * Help us make remove.bg better
		 * * Get better results for similiar images in the future
		 * Notes:
		 * * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
		 * * File size: up to 12MB
		 * * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.
		 * Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
		 * Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.
		 * Post improve
		 * @return {void} Image submitted
		 */
		Improvement_ProgramPost(requestBody: ImprovementProgramJson): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'improve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove the background of an image
		 * Removes the background of a JPG/PNG image.
		 * * File size: up to 12 MB
		 * * Image source: File upload (binary or as base64 encoded string) or download from URL
		 * * Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
		 * * Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)
		 * Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
		 * Post removebg
		 * @return {RemoveBgJsonResponse} Image background removed
		 */
		Background_RemovalPost(requestBody: RemoveBgJson): Observable<RemoveBgJsonResponse> {
			return this.http.post<RemoveBgJsonResponse>(this.baseUri + 'removebg', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

