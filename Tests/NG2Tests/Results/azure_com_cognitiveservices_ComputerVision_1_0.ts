import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An object describing whether the image contains adult-oriented content and/or is racy. */
	export interface AdultInfo {

		/**
		 * Score from 0 to 1 that indicates how much of adult content is within the image.
		 * Type: double
		 */
		adultScore?: number | null;

		/** A value indicating if the image contains adult-oriented content. */
		isAdultContent?: boolean | null;

		/** A value indicating if the image is race. */
		isRacyContent?: boolean | null;

		/**
		 * Score from 0 to 1 that indicates how suggestive is the image.
		 * Type: double
		 */
		racyScore?: number | null;
	}

	/** An object describing whether the image contains adult-oriented content and/or is racy. */
	export interface AdultInfoFormProperties {

		/**
		 * Score from 0 to 1 that indicates how much of adult content is within the image.
		 * Type: double
		 */
		adultScore: FormControl<number | null | undefined>,

		/** A value indicating if the image contains adult-oriented content. */
		isAdultContent: FormControl<boolean | null | undefined>,

		/** A value indicating if the image is race. */
		isRacyContent: FormControl<boolean | null | undefined>,

		/**
		 * Score from 0 to 1 that indicates how suggestive is the image.
		 * Type: double
		 */
		racyScore: FormControl<number | null | undefined>,
	}
	export function CreateAdultInfoFormGroup() {
		return new FormGroup<AdultInfoFormProperties>({
			adultScore: new FormControl<number | null | undefined>(undefined),
			isAdultContent: new FormControl<boolean | null | undefined>(undefined),
			isRacyContent: new FormControl<boolean | null | undefined>(undefined),
			racyScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object describing identified category. */
	export interface Category {

		/** An object describing additional category details. */
		detail?: CategoryDetail;

		/** Name of the category. */
		name?: string | null;

		/**
		 * Scoring of the category.
		 * Type: double
		 */
		score?: number | null;
	}

	/** An object describing identified category. */
	export interface CategoryFormProperties {

		/** Name of the category. */
		name: FormControl<string | null | undefined>,

		/**
		 * Scoring of the category.
		 * Type: double
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object describing additional category details. */
	export interface CategoryDetail {

		/** An array of celebrities if any identified. */
		celebrities?: Array<CelebritiesModel>;
	}

	/** An object describing additional category details. */
	export interface CategoryDetailFormProperties {
	}
	export function CreateCategoryDetailFormGroup() {
		return new FormGroup<CategoryDetailFormProperties>({
		});

	}


	/** An object describing possible celebrity identification. */
	export interface CelebritiesModel {

		/**
		 * Level of confidence ranging from 0 to 1.
		 * Type: double
		 */
		confidence?: number | null;

		/** An object describing face rectangle. */
		faceRectangle?: FaceRectangle;

		/** Name of the celebrity. */
		name?: string | null;
	}

	/** An object describing possible celebrity identification. */
	export interface CelebritiesModelFormProperties {

		/**
		 * Level of confidence ranging from 0 to 1.
		 * Type: double
		 */
		confidence: FormControl<number | null | undefined>,

		/** Name of the celebrity. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCelebritiesModelFormGroup() {
		return new FormGroup<CelebritiesModelFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object describing face rectangle. */
	export interface FaceRectangle {

		/**
		 * Height measured from the top-left point of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/**
		 * X-coordinate of the top left point of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		left?: number | null;

		/**
		 * Y-coordinate of the top left point of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		top?: number | null;

		/**
		 * Width measured from the top-left point of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** An object describing face rectangle. */
	export interface FaceRectangleFormProperties {

		/**
		 * Height measured from the top-left point of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * X-coordinate of the top left point of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * Y-coordinate of the top left point of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		top: FormControl<number | null | undefined>,

		/**
		 * Width measured from the top-left point of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateFaceRectangleFormGroup() {
		return new FormGroup<FaceRectangleFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of celebrities recognized in the image. */
	export interface CelebrityResults {
		celebrities?: Array<CelebritiesModel>;

		/** Image metadata */
		metadata?: ImageMetadata;

		/** Id of the REST API request. */
		requestId?: string | null;
	}

	/** List of celebrities recognized in the image. */
	export interface CelebrityResultsFormProperties {

		/** Id of the REST API request. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateCelebrityResultsFormGroup() {
		return new FormGroup<CelebrityResultsFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Image metadata */
	export interface ImageMetadata {

		/** Image format */
		format?: string | null;

		/**
		 * Image height
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/**
		 * Image width
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Image metadata */
	export interface ImageMetadataFormProperties {

		/** Image format */
		format: FormControl<string | null | undefined>,

		/**
		 * Image height
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Image width
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageMetadataFormGroup() {
		return new FormGroup<ImageMetadataFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object providing additional metadata describing color attributes. */
	export interface ColorInfo {

		/** Possible accent color. */
		accentColor?: string | null;

		/** Possible dominant background color. */
		dominantColorBackground?: string | null;

		/** Possible dominant foreground color. */
		dominantColorForeground?: string | null;

		/** An array of possible dominant colors. */
		dominantColors?: Array<string>;

		/** A value indicating if the image is black and white. */
		isBWImg?: boolean | null;
	}

	/** An object providing additional metadata describing color attributes. */
	export interface ColorInfoFormProperties {

		/** Possible accent color. */
		accentColor: FormControl<string | null | undefined>,

		/** Possible dominant background color. */
		dominantColorBackground: FormControl<string | null | undefined>,

		/** Possible dominant foreground color. */
		dominantColorForeground: FormControl<string | null | undefined>,

		/** A value indicating if the image is black and white. */
		isBWImg: FormControl<boolean | null | undefined>,
	}
	export function CreateColorInfoFormGroup() {
		return new FormGroup<ColorInfoFormProperties>({
			accentColor: new FormControl<string | null | undefined>(undefined),
			dominantColorBackground: new FormControl<string | null | undefined>(undefined),
			dominantColorForeground: new FormControl<string | null | undefined>(undefined),
			isBWImg: new FormControl<boolean | null | undefined>(undefined),
		});

	}

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

	export enum ComputerVisionErrorCode { InvalidImageUrl = 'InvalidImageUrl', InvalidImageFormat = 'InvalidImageFormat', InvalidImageSize = 'InvalidImageSize', NotSupportedVisualFeature = 'NotSupportedVisualFeature', NotSupportedImage = 'NotSupportedImage', InvalidDetails = 'InvalidDetails', NotSupportedLanguage = 'NotSupportedLanguage', BadArgument = 'BadArgument', FailedToProcess = 'FailedToProcess', Timeout = 'Timeout', InternalServerError = 'InternalServerError', Unspecified = 'Unspecified', StorageException = 'StorageException' }


	/** Result of image analysis using a specific domain model including additional metadata. */
	export interface DomainModelResults {

		/** Image metadata */
		metadata?: ImageMetadata;

		/** Id of the REST API request. */
		requestId?: string | null;

		/** Model-specific response */
		result?: string | null;
	}

	/** Result of image analysis using a specific domain model including additional metadata. */
	export interface DomainModelResultsFormProperties {

		/** Id of the REST API request. */
		requestId: FormControl<string | null | undefined>,

		/** Model-specific response */
		result: FormControl<string | null | undefined>,
	}
	export function CreateDomainModelResultsFormGroup() {
		return new FormGroup<DomainModelResultsFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object describing a face identified in the image. */
	export interface FaceDescription {

		/**
		 * Possible age of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		age?: number | null;

		/** An object describing face rectangle. */
		faceRectangle?: FaceRectangle;

		/** Possible gender of the face. */
		gender?: FaceDescriptionGender | null;
	}

	/** An object describing a face identified in the image. */
	export interface FaceDescriptionFormProperties {

		/**
		 * Possible age of the face.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		age: FormControl<number | null | undefined>,

		/** Possible gender of the face. */
		gender: FormControl<FaceDescriptionGender | null | undefined>,
	}
	export function CreateFaceDescriptionFormGroup() {
		return new FormGroup<FaceDescriptionFormProperties>({
			age: new FormControl<number | null | undefined>(undefined),
			gender: new FormControl<FaceDescriptionGender | null | undefined>(undefined),
		});

	}

	export enum FaceDescriptionGender { Male = 'Male', Female = 'Female' }


	/** Result of AnalyzeImage operation. */
	export interface ImageAnalysis {

		/** An object describing whether the image contains adult-oriented content and/or is racy. */
		adult?: AdultInfo;

		/** An array indicating identified categories. */
		categories?: Array<Category>;

		/** An object providing additional metadata describing color attributes. */
		color?: ColorInfo;

		/** A collection of content tags, along with a list of captions sorted by confidence level, and image metadata. */
		description?: ImageDescriptionDetails;

		/** An array of possible faces within the image. */
		faces?: Array<FaceDescription>;

		/** An object providing possible image types and matching confidence levels. */
		imageType?: ImageType;

		/** Image metadata */
		metadata?: ImageMetadata;

		/** Id of the request for tracking purposes. */
		requestId?: string | null;

		/** A list of tags with confidence level. */
		tags?: Array<ImageTag>;
	}

	/** Result of AnalyzeImage operation. */
	export interface ImageAnalysisFormProperties {

		/** Id of the request for tracking purposes. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateImageAnalysisFormGroup() {
		return new FormGroup<ImageAnalysisFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of content tags, along with a list of captions sorted by confidence level, and image metadata. */
	export interface ImageDescriptionDetails {

		/** A list of captions, sorted by confidence level. */
		captions?: Array<ImageCaption>;

		/** Image metadata */
		metadata?: ImageMetadata;

		/** Id of the REST API request. */
		requestId?: string | null;

		/** A collection of image tags. */
		tags?: Array<string>;
	}

	/** A collection of content tags, along with a list of captions sorted by confidence level, and image metadata. */
	export interface ImageDescriptionDetailsFormProperties {

		/** Id of the REST API request. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateImageDescriptionDetailsFormGroup() {
		return new FormGroup<ImageDescriptionDetailsFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image caption, i.e. a brief description of what the image depicts. */
	export interface ImageCaption {

		/**
		 * The level of confidence the service has in the caption
		 * Type: double
		 */
		confidence?: number | null;

		/** The text of the caption */
		text?: string | null;
	}

	/** An image caption, i.e. a brief description of what the image depicts. */
	export interface ImageCaptionFormProperties {

		/**
		 * The level of confidence the service has in the caption
		 * Type: double
		 */
		confidence: FormControl<number | null | undefined>,

		/** The text of the caption */
		text: FormControl<string | null | undefined>,
	}
	export function CreateImageCaptionFormGroup() {
		return new FormGroup<ImageCaptionFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object providing possible image types and matching confidence levels. */
	export interface ImageType {

		/**
		 * Confidence level that the image is a clip art.
		 * Type: double
		 */
		clipArtType?: number | null;

		/**
		 * Confidence level that the image is a line drawing.
		 * Type: double
		 */
		lineDrawingType?: number | null;
	}

	/** An object providing possible image types and matching confidence levels. */
	export interface ImageTypeFormProperties {

		/**
		 * Confidence level that the image is a clip art.
		 * Type: double
		 */
		clipArtType: FormControl<number | null | undefined>,

		/**
		 * Confidence level that the image is a line drawing.
		 * Type: double
		 */
		lineDrawingType: FormControl<number | null | undefined>,
	}
	export function CreateImageTypeFormGroup() {
		return new FormGroup<ImageTypeFormProperties>({
			clipArtType: new FormControl<number | null | undefined>(undefined),
			lineDrawingType: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An image caption, i.e. a brief description of what the image depicts. */
	export interface ImageTag {

		/**
		 * The level of confidence the service has in the caption
		 * Type: double
		 */
		confidence?: number | null;

		/** The tag value */
		name?: string | null;
	}

	/** An image caption, i.e. a brief description of what the image depicts. */
	export interface ImageTagFormProperties {

		/**
		 * The level of confidence the service has in the caption
		 * Type: double
		 */
		confidence: FormControl<number | null | undefined>,

		/** The tag value */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImageTagFormGroup() {
		return new FormGroup<ImageTagFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of content tags, along with a list of captions sorted by confidence level, and image metadata. */
	export interface ImageDescription {

		/** A collection of content tags, along with a list of captions sorted by confidence level, and image metadata. */
		description?: ImageDescriptionDetails;
	}

	/** A collection of content tags, along with a list of captions sorted by confidence level, and image metadata. */
	export interface ImageDescriptionFormProperties {
	}
	export function CreateImageDescriptionFormGroup() {
		return new FormGroup<ImageDescriptionFormProperties>({
		});

	}


	/** List of landmarks recognized in the image. */
	export interface LandmarkResults {
		LandmarkResultsLandmarks?: Array<LandmarkResultsLandmarks>;

		/** Image metadata */
		metadata?: ImageMetadata;

		/** Id of the REST API request. */
		requestId?: string | null;
	}

	/** List of landmarks recognized in the image. */
	export interface LandmarkResultsFormProperties {

		/** Id of the REST API request. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateLandmarkResultsFormGroup() {
		return new FormGroup<LandmarkResultsFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LandmarkResultsLandmarks {

		/**
		 * Confidence level for the landmark recognition.
		 * Type: double
		 */
		confidence?: number | null;

		/** Name of the landmark. */
		name?: string | null;
	}
	export interface LandmarkResultsLandmarksFormProperties {

		/**
		 * Confidence level for the landmark recognition.
		 * Type: double
		 */
		confidence: FormControl<number | null | undefined>,

		/** Name of the landmark. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLandmarkResultsLandmarksFormGroup() {
		return new FormGroup<LandmarkResultsLandmarksFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Line {
		boundingBox?: Array<number>;
		text?: string | null;
		words?: Array<Word>;
	}
	export interface LineFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateLineFormGroup() {
		return new FormGroup<LineFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Word {
		boundingBox?: Array<number>;
		text?: string | null;
	}
	export interface WordFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateWordFormGroup() {
		return new FormGroup<WordFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the List Domain Models operation. */
	export interface ListModelsResult {

		/** An array of supported models. */
		models?: Array<ModelDescription>;
	}

	/** Result of the List Domain Models operation. */
	export interface ListModelsResultFormProperties {
	}
	export function CreateListModelsResultFormGroup() {
		return new FormGroup<ListModelsResultFormProperties>({
		});

	}


	/** An object describing supported model by name and categories. */
	export interface ModelDescription {
		categories?: Array<string>;
		name?: string | null;
	}

	/** An object describing supported model by name and categories. */
	export interface ModelDescriptionFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateModelDescriptionFormGroup() {
		return new FormGroup<ModelDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object describing a single recognized line of text. */
	export interface OcrLine {

		/** Bounding box of a recognized line. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. */
		boundingBox?: string | null;

		/** An array of objects, where each object represents a recognized word. */
		words?: Array<OcrWord>;
	}

	/** An object describing a single recognized line of text. */
	export interface OcrLineFormProperties {

		/** Bounding box of a recognized line. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. */
		boundingBox: FormControl<string | null | undefined>,
	}
	export function CreateOcrLineFormGroup() {
		return new FormGroup<OcrLineFormProperties>({
			boundingBox: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information on a recognized word. */
	export interface OcrWord {

		/** Bounding box of a recognized word. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. */
		boundingBox?: string | null;

		/** String value of a recognized word. */
		text?: string | null;
	}

	/** Information on a recognized word. */
	export interface OcrWordFormProperties {

		/** Bounding box of a recognized word. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. */
		boundingBox: FormControl<string | null | undefined>,

		/** String value of a recognized word. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateOcrWordFormGroup() {
		return new FormGroup<OcrWordFormProperties>({
			boundingBox: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A region consists of multiple lines (e.g. a column of text in a multi-column document). */
	export interface OcrRegion {

		/** Bounding box of a recognized region. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. */
		boundingBox?: string | null;
		lines?: Array<OcrLine>;
	}

	/** A region consists of multiple lines (e.g. a column of text in a multi-column document). */
	export interface OcrRegionFormProperties {

		/** Bounding box of a recognized region. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down. */
		boundingBox: FormControl<string | null | undefined>,
	}
	export function CreateOcrRegionFormGroup() {
		return new FormGroup<OcrRegionFormProperties>({
			boundingBox: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OcrResult {

		/** The BCP-47 language code of the text in the image. */
		language?: string | null;

		/** Orientation of the text recognized in the image. The value (up,down,left, or right) refers to the direction that the top of the recognized text is facing, after the image has been rotated around its center according to the detected text angle (see textAngle property). */
		orientation?: string | null;

		/** An array of objects, where each object represents a region of recognized text. */
		regions?: Array<OcrRegion>;

		/**
		 * The angle, in degrees, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.
		 * Type: double
		 */
		textAngle?: number | null;
	}
	export interface OcrResultFormProperties {

		/** The BCP-47 language code of the text in the image. */
		language: FormControl<string | null | undefined>,

		/** Orientation of the text recognized in the image. The value (up,down,left, or right) refers to the direction that the top of the recognized text is facing, after the image has been rotated around its center according to the detected text angle (see textAngle property). */
		orientation: FormControl<string | null | undefined>,

		/**
		 * The angle, in degrees, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.
		 * Type: double
		 */
		textAngle: FormControl<number | null | undefined>,
	}
	export function CreateOcrResultFormGroup() {
		return new FormGroup<OcrResultFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			orientation: new FormControl<string | null | undefined>(undefined),
			textAngle: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RecognitionResult {
		lines?: Array<Line>;
	}
	export interface RecognitionResultFormProperties {
	}
	export function CreateRecognitionResultFormGroup() {
		return new FormGroup<RecognitionResultFormProperties>({
		});

	}


	/** The results of a image tag operation, including any tags and image metadata. */
	export interface TagResult {

		/** Image metadata */
		metadata?: ImageMetadata;

		/** Id of the REST API request. */
		requestId?: string | null;

		/** A list of tags with confidence level. */
		tags?: Array<ImageTag>;
	}

	/** The results of a image tag operation, including any tags and image metadata. */
	export interface TagResultFormProperties {

		/** Id of the REST API request. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateTagResultFormGroup() {
		return new FormGroup<TagResultFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TextOperationResult {
		recognitionResult?: RecognitionResult;

		/** Status of the text operation. */
		status?: TextOperationResultStatus | null;
	}
	export interface TextOperationResultFormProperties {

		/** Status of the text operation. */
		status: FormControl<TextOperationResultStatus | null | undefined>,
	}
	export function CreateTextOperationResultFormGroup() {
		return new FormGroup<TextOperationResultFormProperties>({
			status: new FormControl<TextOperationResultStatus | null | undefined>(undefined),
		});

	}

	export enum TextOperationResultStatus { 'Not Started' = 'Not Started', Running = 'Running', Failed = 'Failed', Succeeded = 'Succeeded' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This operation extracts a rich set of visual features based on the image content. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response.
		 * Post analyze
		 * @param {Array<string>} visualFeatures A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include:Categories - categorizes image content according to a taxonomy defined in documentation. Tags - tags the image with a detailed list of words related to the image content. Description - describes the image content with a complete English sentence. Faces - detects if faces are present. If present, generate coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color - determines the accent color, dominant color, and whether an image is black&white.Adult - detects if the image is pornographic in nature (depicts nudity or a sex act).  Sexually suggestive content is also detected.
		 * @param {Array<string>} details A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include:Celebrities - identifies celebrities if detected in the image.
		 * @param {AnalyzeImageLanguage} language The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
		 * @param {AnalyzeImagePostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {ImageAnalysis} The response include the extracted features in JSON format.Here is the definitions for enumeration typesClipartTypeNon-clipart = 0,  ambiguous = 1, normal-clipart = 2, good-clipart = 3.LineDrawingTypeNon-LineDrawing = 0,LineDrawing = 1.
		 */
		AnalyzeImage(visualFeatures: Array<string> | null | undefined, details: Array<string> | null | undefined, language: AnalyzeImageLanguage | null | undefined, requestBody: AnalyzeImagePostBody): Observable<ImageAnalysis> {
			return this.http.post<ImageAnalysis>(this.baseUri + 'analyze?' + visualFeatures?.map(z => `visualFeatures=${encodeURIComponent(z)}`).join('&') + '&' + details?.map(z => `details=${encodeURIComponent(z)}`).join('&') + '&language=' + language, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.
		 * Post describe
		 * @param {string} maxCandidates Maximum number of candidate descriptions to be returned.  The default is 1.
		 * @param {AnalyzeImageLanguage} language The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
		 * @param {DescribeImagePostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {ImageDescription} Image description object.
		 */
		DescribeImage(maxCandidates: string | null | undefined, language: AnalyzeImageLanguage | null | undefined, requestBody: DescribeImagePostBody): Observable<ImageDescription> {
			return this.http.post<ImageDescription>(this.baseUri + 'describe?maxCandidates=' + (maxCandidates == null ? '' : encodeURIComponent(maxCandidates)) + '&language=' + language, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image. A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
		 * Post generateThumbnail
		 * @param {number} width Width of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
		 * @param {number} height Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
		 * @param {boolean} smartCropping Boolean flag for enabling smart cropping.
		 * @param {GenerateThumbnailPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {void} The generated thumbnail in binary format.
		 */
		GenerateThumbnail(width: number, height: number, smartCropping: boolean | null | undefined, requestBody: GenerateThumbnailPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'generateThumbnail?width=' + width + '&height=' + height + '&smartCropping=' + smartCropping, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer. A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.
		 * Get models
		 * @return {ListModelsResult} List of available domain models.
		 */
		ListModels(): Observable<ListModelsResult> {
			return this.http.get<ListModelsResult>(this.baseUri + 'models', {});
		}

		/**
		 * This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.
		 * Post models/{model}/analyze
		 * @param {string} model The domain-specific content to recognize.
		 * @param {AnalyzeImageLanguage} language The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
		 * @param {AnalyzeImageByDomainPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {DomainModelResults} Analysis result based on the domain model
		 */
		AnalyzeImageByDomain(model: string, language: AnalyzeImageLanguage | null | undefined, requestBody: AnalyzeImageByDomainPostBody): Observable<DomainModelResults> {
			return this.http.post<DomainModelResults>(this.baseUri + 'models/' + (model == null ? '' : encodeURIComponent(model)) + '/analyze&language=' + language, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Optical Character Recognition (OCR) detects printed text in an image and extracts the recognized characters into a machine-usable character stream.   Upon success, the OCR results will be returned. Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.
		 * Post ocr
		 * @param {boolean} detectOrientation Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down). 
		 * @param {RecognizePrintedTextLanguage} language The BCP-47 language code of the text to be detected in the image. The default value is 'unk'
		 * @param {RecognizePrintedTextPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {OcrResult} The OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.textAngleThe angle, in degrees, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.
		 */
		RecognizePrintedText(detectOrientation: boolean, language: RecognizePrintedTextLanguage | null | undefined, requestBody: RecognizePrintedTextPostBody): Observable<OcrResult> {
			return this.http.post<OcrResult>(this.baseUri + 'ocr?detectOrientation=' + detectOrientation + '&language=' + language, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Handwritten Text Operation Result operation.
		 * Post recognizeText
		 * @param {boolean} detectHandwriting If 'true' is specified, handwriting recognition is performed. If this parameter is set to 'false' or is not specified, printed text recognition is performed.
		 * @param {RecognizeTextPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {void} 
		 */
		RecognizeText(detectHandwriting: boolean | null | undefined, requestBody: RecognizeTextPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'recognizeText?detectHandwriting=' + detectHandwriting, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag 'cello' may be accompanied by the hint 'musical instrument'. All tags are in English.
		 * Post tag
		 * @param {AnalyzeImageLanguage} language The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
		 * @param {TagImagePostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {TagResult} Image tags object.
		 */
		TagImage(language: AnalyzeImageLanguage | null | undefined, requestBody: TagImagePostBody): Observable<TagResult> {
			return this.http.post<TagResult>(this.baseUri + 'tag?language=' + language, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.
		 * Get textOperations/{operationId}
		 * @param {string} operationId Id of the text operation returned in the response of the 'Recognize Handwritten Text'
		 * @return {TextOperationResult} Returns the operation status.
		 */
		GetTextOperationResult(operationId: string): Observable<TextOperationResult> {
			return this.http.get<TextOperationResult>(this.baseUri + 'textOperations/' + (operationId == null ? '' : encodeURIComponent(operationId)), {});
		}
	}

	export enum AnalyzeImageLanguage { en = 'en', es = 'es', ja = 'ja', pt = 'pt', zh = 'zh' }

	export interface AnalyzeImagePostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface AnalyzeImagePostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeImagePostBodyFormGroup() {
		return new FormGroup<AnalyzeImagePostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeImagePostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface DescribeImagePostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImagePostBodyFormGroup() {
		return new FormGroup<DescribeImagePostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateThumbnailPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface GenerateThumbnailPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGenerateThumbnailPostBodyFormGroup() {
		return new FormGroup<GenerateThumbnailPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AnalyzeImageByDomainPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface AnalyzeImageByDomainPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeImageByDomainPostBodyFormGroup() {
		return new FormGroup<AnalyzeImageByDomainPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecognizePrintedTextLanguage { unk = 'unk', 'zh-Hans' = 'zh-Hans', 'zh-Hant' = 'zh-Hant', cs = 'cs', da = 'da', nl = 'nl', en = 'en', fi = 'fi', fr = 'fr', de = 'de', el = 'el', hu = 'hu', it = 'it', ja = 'ja', ko = 'ko', nb = 'nb', pl = 'pl', pt = 'pt', ru = 'ru', es = 'es', sv = 'sv', tr = 'tr', ar = 'ar', ro = 'ro', 'sr-Cyrl' = 'sr-Cyrl', 'sr-Latn' = 'sr-Latn', sk = 'sk' }

	export interface RecognizePrintedTextPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface RecognizePrintedTextPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateRecognizePrintedTextPostBodyFormGroup() {
		return new FormGroup<RecognizePrintedTextPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RecognizeTextPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface RecognizeTextPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateRecognizeTextPostBodyFormGroup() {
		return new FormGroup<RecognizeTextPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagImagePostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface TagImagePostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTagImagePostBodyFormGroup() {
		return new FormGroup<TagImagePostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

