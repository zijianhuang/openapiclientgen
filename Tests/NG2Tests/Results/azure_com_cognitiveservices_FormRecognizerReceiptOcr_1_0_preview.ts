import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Details about the API request error. */
	export interface ComputerVisionError {

		/**
		 * The error code.
		 * Required
		 */
		code: ComputerVisionErrorCode;

		/**
		 * A message explaining the error reported by the service.
		 * Required
		 */
		message: string;

		/** A unique request identifier. */
		requestId?: string | null;
	}

	/** Details about the API request error. */
	export interface ComputerVisionErrorFormProperties {

		/**
		 * The error code.
		 * Required
		 */
		code: FormControl<ComputerVisionErrorCode | null | undefined>,

		/**
		 * A message explaining the error reported by the service.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A unique request identifier. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateComputerVisionErrorFormGroup() {
		return new FormGroup<ComputerVisionErrorFormProperties>({
			code: new FormControl<ComputerVisionErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComputerVisionErrorCode { InvalidImageFormat = 'InvalidImageFormat', UnsupportedMediaType = 'UnsupportedMediaType', InvalidImageUrl = 'InvalidImageUrl', NotSupportedFeature = 'NotSupportedFeature', NotSupportedImage = 'NotSupportedImage', Timeout = 'Timeout', InternalServerError = 'InternalServerError', InvalidImageSize = 'InvalidImageSize', BadArgument = 'BadArgument', DetectFaceError = 'DetectFaceError', NotSupportedLanguage = 'NotSupportedLanguage', InvalidThumbnailSize = 'InvalidThumbnailSize', InvalidDetails = 'InvalidDetails', InvalidModel = 'InvalidModel', CancelledRequest = 'CancelledRequest', NotSupportedVisualFeature = 'NotSupportedVisualFeature', FailedToProcess = 'FailedToProcess', Unspecified = 'Unspecified', StorageException = 'StorageException' }

	export interface ImageUrl {

		/**
		 * Publicly reachable URL of an image.
		 * Required
		 */
		url: string;
	}
	export interface ImageUrlFormProperties {

		/**
		 * Publicly reachable URL of an image.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageUrlFormGroup() {
		return new FormGroup<ImageUrlFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object representing a recognized text line. */
	export interface Line {

		/** Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches. */
		boundingBox?: Array<number>;

		/** The text content of the line. */
		text?: string | null;

		/** List of words in the text line. */
		words?: Array<Word>;
	}

	/** An object representing a recognized text line. */
	export interface LineFormProperties {

		/** The text content of the line. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLineFormGroup() {
		return new FormGroup<LineFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a recognized word. */
	export interface Word {

		/**
		 * Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches.
		 * Required
		 */
		boundingBox: Array<number>;

		/** Qualitative confidence measure. */
		confidence?: WordConfidence | null;

		/**
		 * The text content of the word.
		 * Required
		 */
		text: string;
	}

	/** An object representing a recognized word. */
	export interface WordFormProperties {

		/** Qualitative confidence measure. */
		confidence: FormControl<WordConfidence | null | undefined>,

		/**
		 * The text content of the word.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateWordFormGroup() {
		return new FormGroup<WordFormProperties>({
			confidence: new FormControl<WordConfidence | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WordConfidence { High = 'High', Low = 'Low' }


	/** Status code of the text operation. */
	export enum OperationStatus { 'Not Started' = 'Not Started', Running = 'Running', Failed = 'Failed', Succeeded = 'Succeeded' }


	/** An object representing a recognized text region */
	export interface TextRecognitionResult {

		/** The orientation of the image in degrees in the clockwise direction. Range between [0, 360). */
		clockwiseOrientation?: number | null;

		/** The height of the image in pixels or the PDF in inches. */
		height?: number | null;

		/**
		 * A list of recognized text lines.
		 * Required
		 */
		lines: Array<Line>;

		/** The 1-based page number of the recognition result. */
		page?: number | null;

		/** The unit used in the Width, Height and BoundingBox. For images, the unit is 'pixel'. For PDF, the unit is 'inch'. */
		unit?: TextRecognitionResultUnit | null;

		/** The width of the image in pixels or the PDF in inches. */
		width?: number | null;
	}

	/** An object representing a recognized text region */
	export interface TextRecognitionResultFormProperties {

		/** The orientation of the image in degrees in the clockwise direction. Range between [0, 360). */
		clockwiseOrientation: FormControl<number | null | undefined>,

		/** The height of the image in pixels or the PDF in inches. */
		height: FormControl<number | null | undefined>,

		/** The 1-based page number of the recognition result. */
		page: FormControl<number | null | undefined>,

		/** The unit used in the Width, Height and BoundingBox. For images, the unit is 'pixel'. For PDF, the unit is 'inch'. */
		unit: FormControl<TextRecognitionResultUnit | null | undefined>,

		/** The width of the image in pixels or the PDF in inches. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateTextRecognitionResultFormGroup() {
		return new FormGroup<TextRecognitionResultFormProperties>({
			clockwiseOrientation: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<TextRecognitionResultUnit | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TextRecognitionResultUnit { pixel = 'pixel', inch = 'inch' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

