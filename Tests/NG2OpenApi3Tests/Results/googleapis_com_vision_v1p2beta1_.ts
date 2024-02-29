import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface AnnotateFileResponse {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: InputConfig;

		/** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
		responses?: Array<AnnotateImageResponse>;

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}

	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface AnnotateFileResponseFormProperties {

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateAnnotateFileResponseFormGroup() {
		return new FormGroup<AnnotateFileResponseFormProperties>({
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The desired input location and metadata. */
	export interface InputConfig {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content?: string | null;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GcsSource;

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType?: string | null;
	}

	/** The desired input location and metadata. */
	export interface InputConfigFormProperties {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content: FormControl<string | null | undefined>,

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateInputConfigFormGroup() {
		return new FormGroup<InputConfigFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GcsSource {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the input will be read from. */
	export interface GcsSourceFormProperties {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGcsSourceFormGroup() {
		return new FormGroup<GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an image annotation request. */
	export interface AnnotateImageResponse {

		/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
		context?: ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: CropHintsAnnotation;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<FaceAnnotation>;

		/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
		fullTextAnnotation?: TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<EntityAnnotation>;

		/** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
		localizedObjectAnnotations?: Array<LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: ProductSearchResults;

		/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
		safeSearchAnnotation?: SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: WebDetection;
	}

	/** Response to an image annotation request. */
	export interface AnnotateImageResponseFormProperties {
	}
	export function CreateAnnotateImageResponseFormGroup() {
		return new FormGroup<AnnotateImageResponseFormProperties>({
		});

	}


	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/** The URI of the file used to produce the image. */
		uri?: string | null;
	}

	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface ImageAnnotationContextFormProperties {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/** The URI of the file used to produce the image. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateImageAnnotationContextFormGroup() {
		return new FormGroup<ImageAnnotationContextFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<CropHint>;
	}

	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface CropHintsAnnotationFormProperties {
	}
	export function CreateCropHintsAnnotationFormGroup() {
		return new FormGroup<CropHintsAnnotationFormProperties>({
		});

	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction?: number | null;
	}

	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface CropHintFormProperties {

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction: FormControl<number | null | undefined>,
	}
	export function CreateCropHintFormGroup() {
		return new FormGroup<CropHintFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			importanceFraction: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bounding polygon for the detected image annotation. */
	export interface BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<Vertex>;
	}

	/** A bounding polygon for the detected image annotation. */
	export interface BoundingPolyFormProperties {
	}
	export function CreateBoundingPolyFormGroup() {
		return new FormGroup<BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface NormalizedVertex {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface NormalizedVertexFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateNormalizedVertexFormGroup() {
		return new FormGroup<NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface Vertex {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface VertexFormProperties {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateVertexFormGroup() {
		return new FormGroup<VertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A face annotation object contains the results of face detection. */
	export interface FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence?: number | null;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence?: number | null;

		/** Detected face landmarks. */
		landmarks?: Array<Landmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle?: number | null;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle?: number | null;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle?: number | null;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood | null;
	}

	/** A face annotation object contains the results of face detection. */
	export interface FaceAnnotationFormProperties {

		/** Anger likelihood. */
		angerLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Blurred likelihood. */
		blurredLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence: FormControl<number | null | undefined>,

		/** Headwear likelihood. */
		headwearLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Joy likelihood. */
		joyLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence: FormControl<number | null | undefined>,

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle: FormControl<number | null | undefined>,

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle: FormControl<number | null | undefined>,

		/** Sorrow likelihood. */
		sorrowLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Surprise likelihood. */
		surpriseLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle: FormControl<number | null | undefined>,

		/** Under-exposed likelihood. */
		underExposedLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateFaceAnnotationFormGroup() {
		return new FormGroup<FaceAnnotationFormProperties>({
			angerLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			blurredLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			detectionConfidence: new FormControl<number | null | undefined>(undefined),
			headwearLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			joyLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			landmarkingConfidence: new FormControl<number | null | undefined>(undefined),
			panAngle: new FormControl<number | null | undefined>(undefined),
			rollAngle: new FormControl<number | null | undefined>(undefined),
			sorrowLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			surpriseLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			tiltAngle: new FormControl<number | null | undefined>(undefined),
			underExposedLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}

	export enum FaceAnnotationAngerLikelihood { UNKNOWN = 'UNKNOWN', VERY_UNLIKELY = 'VERY_UNLIKELY', UNLIKELY = 'UNLIKELY', POSSIBLE = 'POSSIBLE', LIKELY = 'LIKELY', VERY_LIKELY = 'VERY_LIKELY' }


	/** A face-specific landmark (for example, a face feature). */
	export interface Landmark {

		/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
		position?: Position;

		/** Face landmark type. */
		type?: LandmarkType | null;
	}

	/** A face-specific landmark (for example, a face feature). */
	export interface LandmarkFormProperties {

		/** Face landmark type. */
		type: FormControl<LandmarkType | null | undefined>,
	}
	export function CreateLandmarkFormGroup() {
		return new FormGroup<LandmarkFormProperties>({
			type: new FormControl<LandmarkType | null | undefined>(undefined),
		});

	}


	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface Position {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z?: number | null;
	}

	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface PositionFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LandmarkType { UNKNOWN_LANDMARK = 'UNKNOWN_LANDMARK', LEFT_EYE = 'LEFT_EYE', RIGHT_EYE = 'RIGHT_EYE', LEFT_OF_LEFT_EYEBROW = 'LEFT_OF_LEFT_EYEBROW', RIGHT_OF_LEFT_EYEBROW = 'RIGHT_OF_LEFT_EYEBROW', LEFT_OF_RIGHT_EYEBROW = 'LEFT_OF_RIGHT_EYEBROW', RIGHT_OF_RIGHT_EYEBROW = 'RIGHT_OF_RIGHT_EYEBROW', MIDPOINT_BETWEEN_EYES = 'MIDPOINT_BETWEEN_EYES', NOSE_TIP = 'NOSE_TIP', UPPER_LIP = 'UPPER_LIP', LOWER_LIP = 'LOWER_LIP', MOUTH_LEFT = 'MOUTH_LEFT', MOUTH_RIGHT = 'MOUTH_RIGHT', MOUTH_CENTER = 'MOUTH_CENTER', NOSE_BOTTOM_RIGHT = 'NOSE_BOTTOM_RIGHT', NOSE_BOTTOM_LEFT = 'NOSE_BOTTOM_LEFT', NOSE_BOTTOM_CENTER = 'NOSE_BOTTOM_CENTER', LEFT_EYE_TOP_BOUNDARY = 'LEFT_EYE_TOP_BOUNDARY', LEFT_EYE_RIGHT_CORNER = 'LEFT_EYE_RIGHT_CORNER', LEFT_EYE_BOTTOM_BOUNDARY = 'LEFT_EYE_BOTTOM_BOUNDARY', LEFT_EYE_LEFT_CORNER = 'LEFT_EYE_LEFT_CORNER', RIGHT_EYE_TOP_BOUNDARY = 'RIGHT_EYE_TOP_BOUNDARY', RIGHT_EYE_RIGHT_CORNER = 'RIGHT_EYE_RIGHT_CORNER', RIGHT_EYE_BOTTOM_BOUNDARY = 'RIGHT_EYE_BOTTOM_BOUNDARY', RIGHT_EYE_LEFT_CORNER = 'RIGHT_EYE_LEFT_CORNER', LEFT_EYEBROW_UPPER_MIDPOINT = 'LEFT_EYEBROW_UPPER_MIDPOINT', RIGHT_EYEBROW_UPPER_MIDPOINT = 'RIGHT_EYEBROW_UPPER_MIDPOINT', LEFT_EAR_TRAGION = 'LEFT_EAR_TRAGION', RIGHT_EAR_TRAGION = 'RIGHT_EAR_TRAGION', LEFT_EYE_PUPIL = 'LEFT_EYE_PUPIL', RIGHT_EYE_PUPIL = 'RIGHT_EYE_PUPIL', FOREHEAD_GLABELLA = 'FOREHEAD_GLABELLA', CHIN_GNATHION = 'CHIN_GNATHION', CHIN_LEFT_GONION = 'CHIN_LEFT_GONION', CHIN_RIGHT_GONION = 'CHIN_RIGHT_GONION', LEFT_CHEEK_CENTER = 'LEFT_CHEEK_CENTER', RIGHT_CHEEK_CENTER = 'RIGHT_CHEEK_CENTER' }


	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<Page>;

		/** UTF-8 text detected on the pages. */
		text?: string | null;
	}

	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface TextAnnotationFormProperties {

		/** UTF-8 text detected on the pages. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateTextAnnotationFormGroup() {
		return new FormGroup<TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected page from OCR. */
	export interface Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<Block>;

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Additional information detected on the structural component. */
		property?: TextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Detected page from OCR. */
	export interface PageFormProperties {

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Logical element on the page. */
	export interface Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType | null;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: BoundingPoly;

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<Paragraph>;

		/** Additional information detected on the structural component. */
		property?: TextProperty;
	}

	/** Logical element on the page. */
	export interface BlockFormProperties {

		/** Detected block type (text, image etc) for this block. */
		blockType: FormControl<BlockBlockType | null | undefined>,

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateBlockFormGroup() {
		return new FormGroup<BlockFormProperties>({
			blockType: new FormControl<BlockBlockType | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BlockBlockType { UNKNOWN = 'UNKNOWN', TEXT = 'TEXT', TABLE = 'TABLE', PICTURE = 'PICTURE', RULER = 'RULER', BARCODE = 'BARCODE' }


	/** Structural unit of text representing a number of words in certain order. */
	export interface Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: BoundingPoly;

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: TextProperty;

		/** List of all words in this paragraph. */
		words?: Array<Word>;
	}

	/** Structural unit of text representing a number of words in certain order. */
	export interface ParagraphFormProperties {

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateParagraphFormGroup() {
		return new FormGroup<ParagraphFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional information detected on the structural component. */
	export interface TextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: DetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<DetectedLanguage>;
	}

	/** Additional information detected on the structural component. */
	export interface TextPropertyFormProperties {
	}
	export function CreateTextPropertyFormGroup() {
		return new FormGroup<TextPropertyFormProperties>({
		});

	}


	/** Detected start or end of a structural component. */
	export interface DetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean | null;

		/** Detected break type. */
		type?: DetectedBreakType | null;
	}

	/** Detected start or end of a structural component. */
	export interface DetectedBreakFormProperties {

		/** True if break prepends the element. */
		isPrefix: FormControl<boolean | null | undefined>,

		/** Detected break type. */
		type: FormControl<DetectedBreakType | null | undefined>,
	}
	export function CreateDetectedBreakFormGroup() {
		return new FormGroup<DetectedBreakFormProperties>({
			isPrefix: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DetectedBreakType | null | undefined>(undefined),
		});

	}

	export enum DetectedBreakType { UNKNOWN = 'UNKNOWN', SPACE = 'SPACE', SURE_SPACE = 'SURE_SPACE', EOL_SURE_SPACE = 'EOL_SURE_SPACE', HYPHEN = 'HYPHEN', LINE_BREAK = 'LINE_BREAK' }


	/** Detected language for a structural component. */
	export interface DetectedLanguage {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Detected language for a structural component. */
	export interface DetectedLanguageFormProperties {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateDetectedLanguageFormGroup() {
		return new FormGroup<DetectedLanguageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A word representation. */
	export interface Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: BoundingPoly;

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: TextProperty;

		/** List of symbols in the word. The order of the symbols follows the natural reading order. */
		symbols?: Array<Symbol>;
	}

	/** A word representation. */
	export interface WordFormProperties {

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateWordFormGroup() {
		return new FormGroup<WordFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single symbol representation. */
	export interface Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: BoundingPoly;

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: TextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string | null;
	}

	/** A single symbol representation. */
	export interface SymbolFormProperties {

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The actual UTF-8 representation of the symbol. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSymbolFormGroup() {
		return new FormGroup<SymbolFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores image properties, such as dominant colors. */
	export interface ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: DominantColorsAnnotation;
	}

	/** Stores image properties, such as dominant colors. */
	export interface ImagePropertiesFormProperties {
	}
	export function CreateImagePropertiesFormGroup() {
		return new FormGroup<ImagePropertiesFormProperties>({
		});

	}


	/** Set of dominant colors and their corresponding scores. */
	export interface DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<ColorInfo>;
	}

	/** Set of dominant colors and their corresponding scores. */
	export interface DominantColorsAnnotationFormProperties {
	}
	export function CreateDominantColorsAnnotationFormGroup() {
		return new FormGroup<DominantColorsAnnotationFormProperties>({
		});

	}


	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface ColorInfo {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction?: number | null;

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface ColorInfoFormProperties {

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction: FormControl<number | null | undefined>,

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateColorInfoFormGroup() {
		return new FormGroup<ColorInfoFormProperties>({
			pixelFraction: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface Color {

		/**
		 * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
		 * Type: float
		 */
		alpha?: number | null;

		/**
		 * The amount of blue in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		blue?: number | null;

		/**
		 * The amount of green in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		green?: number | null;

		/**
		 * The amount of red in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		red?: number | null;
	}

	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface ColorFormProperties {

		/**
		 * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
		 * Type: float
		 */
		alpha: FormControl<number | null | undefined>,

		/**
		 * The amount of blue in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		blue: FormControl<number | null | undefined>,

		/**
		 * The amount of green in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		green: FormControl<number | null | undefined>,

		/**
		 * The amount of red in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		red: FormControl<number | null | undefined>,
	}
	export function CreateColorFormGroup() {
		return new FormGroup<ColorFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Set of detected entity features. */
	export interface EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string | null;

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale?: string | null;

		/** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
		locations?: Array<LocationInfo>;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid?: string | null;

		/** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
		properties?: Array<Property>;

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality?: number | null;
	}

	/** Set of detected entity features. */
	export interface EntityAnnotationFormProperties {

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Entity textual description, expressed in its `locale` language. */
		description: FormControl<string | null | undefined>,

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid: FormControl<string | null | undefined>,

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality: FormControl<number | null | undefined>,
	}
	export function CreateEntityAnnotationFormGroup() {
		return new FormGroup<EntityAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			topicality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detected entity location information. */
	export interface LocationInfo {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latLng?: LatLng;
	}

	/** Detected entity location information. */
	export interface LocationInfoFormProperties {
	}
	export function CreateLocationInfoFormGroup() {
		return new FormGroup<LocationInfoFormProperties>({
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLng {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLngFormProperties {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLngFormGroup() {
		return new FormGroup<LatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface Property {

		/** Name of the property. */
		name?: string | null;

		/** Value of numeric properties. */
		uint64Value?: string | null;

		/** Value of the property. */
		value?: string | null;
	}

	/** A `Property` consists of a user-supplied name/value pair. */
	export interface PropertyFormProperties {

		/** Name of the property. */
		name: FormControl<string | null | undefined>,

		/** Value of numeric properties. */
		uint64Value: FormControl<string | null | undefined>,

		/** Value of the property. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePropertyFormGroup() {
		return new FormGroup<PropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uint64Value: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of detected objects with bounding boxes. */
	export interface LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Set of detected objects with bounding boxes. */
	export interface LocalizedObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateLocalizedObjectAnnotationFormGroup() {
		return new FormGroup<LocalizedObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Results for a product search request. */
	export interface ProductSearchResults {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime?: string | null;

		/** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
		productGroupedResults?: Array<GroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<Result>;
	}

	/** Results for a product search request. */
	export interface ProductSearchResultsFormProperties {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchResultsFormGroup() {
		return new FormGroup<ProductSearchResultsFormProperties>({
			indexTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the products similar to a single product in a query image. */
	export interface GroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<ObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<Result>;
	}

	/** Information about the products similar to a single product in a query image. */
	export interface GroupedResultFormProperties {
	}
	export function CreateGroupedResultFormGroup() {
		return new FormGroup<GroupedResultFormProperties>({
		});

	}


	/** Prediction for what the object in the bounding box is. */
	export interface ObjectAnnotation {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Prediction for what the object in the bounding box is. */
	export interface ObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateObjectAnnotationFormGroup() {
		return new FormGroup<ObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a product. */
	export interface Result {

		/** The resource name of the image from the product that is the closest match to the query. */
		image?: string | null;

		/** A Product contains ReferenceImages. */
		product?: Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score?: number | null;
	}

	/** Information about a product. */
	export interface ResultFormProperties {

		/** The resource name of the image from the product that is the closest match to the query. */
		image: FormControl<string | null | undefined>,

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Product contains ReferenceImages. */
	export interface Product {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description?: string | null;

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName?: string | null;

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name?: string | null;

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory?: string | null;

		/** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
		productLabels?: Array<KeyValue>;
	}

	/** A Product contains ReferenceImages. */
	export interface ProductFormProperties {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description: FormControl<string | null | undefined>,

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productCategory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A product label represented as a key-value pair. */
	export interface KeyValue {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key?: string | null;

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value?: string | null;
	}

	/** A product label represented as a key-value pair. */
	export interface KeyValueFormProperties {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key: FormControl<string | null | undefined>,

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValueFormGroup() {
		return new FormGroup<KeyValueFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface SafeSearchAnnotation {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy?: FaceAnnotationAngerLikelihood | null;

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence?: FaceAnnotationAngerLikelihood | null;
	}

	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface SafeSearchAnnotationFormProperties {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this is a medical image. */
		medical: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateSafeSearchAnnotationFormGroup() {
		return new FormGroup<SafeSearchAnnotationFormProperties>({
			adult: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			medical: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			racy: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			spoof: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			violence: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** Relevant information for the image from the Internet. */
	export interface WebDetection {

		/** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
		bestGuessLabels?: Array<WebLabel>;

		/** Fully matching images from the Internet. Can include resized copies of the query image. */
		fullMatchingImages?: Array<WebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<WebPage>;

		/** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<WebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<WebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<WebEntity>;
	}

	/** Relevant information for the image from the Internet. */
	export interface WebDetectionFormProperties {
	}
	export function CreateWebDetectionFormGroup() {
		return new FormGroup<WebDetectionFormProperties>({
		});

	}


	/** Label to provide extra metadata for the web detection. */
	export interface WebLabel {

		/** Label for extra metadata. */
		label?: string | null;

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Label to provide extra metadata for the web detection. */
	export interface WebLabelFormProperties {

		/** Label for extra metadata. */
		label: FormControl<string | null | undefined>,

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateWebLabelFormGroup() {
		return new FormGroup<WebLabelFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for online images. */
	export interface WebImage {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score?: number | null;

		/** The result image URL. */
		url?: string | null;
	}

	/** Metadata for online images. */
	export interface WebImageFormProperties {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result image URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebImageFormGroup() {
		return new FormGroup<WebImageFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for web pages. */
	export interface WebPage {

		/** Fully matching images on the page. Can include resized copies of the query image. */
		fullMatchingImages?: Array<WebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string | null;

		/** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<WebImage>;

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score?: number | null;

		/** The result web page URL. */
		url?: string | null;
	}

	/** Metadata for web pages. */
	export interface WebPageFormProperties {

		/** Title for the web page, may contain HTML markups. */
		pageTitle: FormControl<string | null | undefined>,

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result web page URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebPageFormGroup() {
		return new FormGroup<WebPageFormProperties>({
			pageTitle: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity deduced from similar images on the Internet. */
	export interface WebEntity {

		/** Canonical description of the entity, in English. */
		description?: string | null;

		/** Opaque entity ID. */
		entityId?: string | null;

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score?: number | null;
	}

	/** Entity deduced from similar images on the Internet. */
	export interface WebEntityFormProperties {

		/** Canonical description of the entity, in English. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. */
		entityId: FormControl<string | null | undefined>,

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateWebEntityFormGroup() {
		return new FormGroup<WebEntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response for a single offline file annotation request. */
	export interface AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: OutputConfig;
	}

	/** The response for a single offline file annotation request. */
	export interface AsyncAnnotateFileResponseFormProperties {
	}
	export function CreateAsyncAnnotateFileResponseFormGroup() {
		return new FormGroup<AsyncAnnotateFileResponseFormProperties>({
		});

	}


	/** The desired output location and metadata. */
	export interface OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize?: number | null;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GcsDestination;
	}

	/** The desired output location and metadata. */
	export interface OutputConfigFormProperties {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize: FormControl<number | null | undefined>,
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
			batchSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GcsDestination {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the output will be written to. */
	export interface GcsDestinationFormProperties {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an async batch file annotation request. */
	export interface AsyncBatchAnnotateFilesResponse {

		/** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
		responses?: Array<AsyncAnnotateFileResponse>;
	}

	/** Response to an async batch file annotation request. */
	export interface AsyncBatchAnnotateFilesResponseFormProperties {
	}
	export function CreateAsyncBatchAnnotateFilesResponseFormGroup() {
		return new FormGroup<AsyncBatchAnnotateFilesResponseFormProperties>({
		});

	}


	/** Response to an async batch image annotation request. */
	export interface AsyncBatchAnnotateImagesResponse {

		/** The desired output location and metadata. */
		outputConfig?: OutputConfig;
	}

	/** Response to an async batch image annotation request. */
	export interface AsyncBatchAnnotateImagesResponseFormProperties {
	}
	export function CreateAsyncBatchAnnotateImagesResponseFormGroup() {
		return new FormGroup<AsyncBatchAnnotateImagesResponseFormProperties>({
		});

	}


	/** A list of file annotation responses. */
	export interface BatchAnnotateFilesResponse {

		/** The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest. */
		responses?: Array<AnnotateFileResponse>;
	}

	/** A list of file annotation responses. */
	export interface BatchAnnotateFilesResponseFormProperties {
	}
	export function CreateBatchAnnotateFilesResponseFormGroup() {
		return new FormGroup<BatchAnnotateFilesResponseFormProperties>({
		});

	}


	/** Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface BatchOperationMetadata {

		/** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
		endTime?: string | null;

		/** The current state of the batch operation. */
		state?: BatchOperationMetadataState | null;

		/** The time when the batch request was submitted to the server. */
		submitTime?: string | null;
	}

	/** Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface BatchOperationMetadataFormProperties {

		/** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
		endTime: FormControl<string | null | undefined>,

		/** The current state of the batch operation. */
		state: FormControl<BatchOperationMetadataState | null | undefined>,

		/** The time when the batch request was submitted to the server. */
		submitTime: FormControl<string | null | undefined>,
	}
	export function CreateBatchOperationMetadataFormGroup() {
		return new FormGroup<BatchOperationMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BatchOperationMetadataState | null | undefined>(undefined),
			submitTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchOperationMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PROCESSING = 'PROCESSING', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface GoogleCloudVisionV1p1beta1AnnotateFileResponse {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;

		/** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
		responses?: Array<GoogleCloudVisionV1p1beta1AnnotateImageResponse>;

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}

	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface GoogleCloudVisionV1p1beta1AnnotateFileResponseFormProperties {

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1AnnotateFileResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1AnnotateFileResponseFormProperties>({
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p1beta1InputConfig {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content?: string | null;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GoogleCloudVisionV1p1beta1GcsSource;

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType?: string | null;
	}

	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p1beta1InputConfigFormProperties {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content: FormControl<string | null | undefined>,

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1InputConfigFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1InputConfigFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p1beta1GcsSource {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p1beta1GcsSourceFormProperties {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p1beta1AnnotateImageResponse {

		/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
		context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<GoogleCloudVisionV1p1beta1FaceAnnotation>;

		/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
		fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<GoogleCloudVisionV1p1beta1EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<GoogleCloudVisionV1p1beta1EntityAnnotation>;

		/** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
		localizedObjectAnnotations?: Array<GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<GoogleCloudVisionV1p1beta1EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults;

		/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
		safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<GoogleCloudVisionV1p1beta1EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: GoogleCloudVisionV1p1beta1WebDetection;
	}

	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p1beta1AnnotateImageResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1AnnotateImageResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1AnnotateImageResponseFormProperties>({
		});

	}


	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface GoogleCloudVisionV1p1beta1ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/** The URI of the file used to produce the image. */
		uri?: string | null;
	}

	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface GoogleCloudVisionV1p1beta1ImageAnnotationContextFormProperties {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/** The URI of the file used to produce the image. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1ImageAnnotationContextFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ImageAnnotationContextFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p1beta1CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<GoogleCloudVisionV1p1beta1CropHint>;
	}

	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p1beta1CropHintsAnnotationFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1CropHintsAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1CropHintsAnnotationFormProperties>({
		});

	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p1beta1CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction?: number | null;
	}

	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p1beta1CropHintFormProperties {

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1CropHintFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1CropHintFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			importanceFraction: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p1beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudVisionV1p1beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudVisionV1p1beta1Vertex>;
	}

	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p1beta1BoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1BoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVisionV1p1beta1NormalizedVertex {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVisionV1p1beta1NormalizedVertexFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p1beta1Vertex {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p1beta1VertexFormProperties {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1VertexFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1VertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p1beta1FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence?: number | null;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence?: number | null;

		/** Detected face landmarks. */
		landmarks?: Array<GoogleCloudVisionV1p1beta1FaceAnnotationLandmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle?: number | null;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle?: number | null;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle?: number | null;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood | null;
	}

	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p1beta1FaceAnnotationFormProperties {

		/** Anger likelihood. */
		angerLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Blurred likelihood. */
		blurredLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence: FormControl<number | null | undefined>,

		/** Headwear likelihood. */
		headwearLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Joy likelihood. */
		joyLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence: FormControl<number | null | undefined>,

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle: FormControl<number | null | undefined>,

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle: FormControl<number | null | undefined>,

		/** Sorrow likelihood. */
		sorrowLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Surprise likelihood. */
		surpriseLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle: FormControl<number | null | undefined>,

		/** Under-exposed likelihood. */
		underExposedLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1FaceAnnotationFormProperties>({
			angerLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			blurredLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			detectionConfidence: new FormControl<number | null | undefined>(undefined),
			headwearLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			joyLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			landmarkingConfidence: new FormControl<number | null | undefined>(undefined),
			panAngle: new FormControl<number | null | undefined>(undefined),
			rollAngle: new FormControl<number | null | undefined>(undefined),
			sorrowLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			surpriseLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			tiltAngle: new FormControl<number | null | undefined>(undefined),
			underExposedLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p1beta1FaceAnnotationLandmark {

		/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
		position?: GoogleCloudVisionV1p1beta1Position;

		/** Face landmark type. */
		type?: LandmarkType | null;
	}

	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p1beta1FaceAnnotationLandmarkFormProperties {

		/** Face landmark type. */
		type: FormControl<LandmarkType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1FaceAnnotationLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1FaceAnnotationLandmarkFormProperties>({
			type: new FormControl<LandmarkType | null | undefined>(undefined),
		});

	}


	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p1beta1Position {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z?: number | null;
	}

	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p1beta1PositionFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1PositionFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1PositionFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<GoogleCloudVisionV1p1beta1Page>;

		/** UTF-8 text detected on the pages. */
		text?: string | null;
	}

	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationFormProperties {

		/** UTF-8 text detected on the pages. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p1beta1Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<GoogleCloudVisionV1p1beta1Block>;

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p1beta1PageFormProperties {

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1PageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1PageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p1beta1Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType | null;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<GoogleCloudVisionV1p1beta1Paragraph>;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
	}

	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p1beta1BlockFormProperties {

		/** Detected block type (text, image etc) for this block. */
		blockType: FormControl<BlockBlockType | null | undefined>,

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1BlockFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1BlockFormProperties>({
			blockType: new FormControl<BlockBlockType | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p1beta1Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

		/** List of all words in this paragraph. */
		words?: Array<GoogleCloudVisionV1p1beta1Word>;
	}

	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p1beta1ParagraphFormProperties {

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1ParagraphFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ParagraphFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationTextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage>;
	}

	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationTextPropertyFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1TextAnnotationTextPropertyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1TextAnnotationTextPropertyFormProperties>({
		});

	}


	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean | null;

		/** Detected break type. */
		type?: DetectedBreakType | null;
	}

	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakFormProperties {

		/** True if break prepends the element. */
		isPrefix: FormControl<boolean | null | undefined>,

		/** Detected break type. */
		type: FormControl<DetectedBreakType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreakFormProperties>({
			isPrefix: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DetectedBreakType | null | undefined>(undefined),
		});

	}


	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguageFormProperties {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A word representation. */
	export interface GoogleCloudVisionV1p1beta1Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

		/** List of symbols in the word. The order of the symbols follows the natural reading order. */
		symbols?: Array<GoogleCloudVisionV1p1beta1Symbol>;
	}

	/** A word representation. */
	export interface GoogleCloudVisionV1p1beta1WordFormProperties {

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1WordFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1WordFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p1beta1Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string | null;
	}

	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p1beta1SymbolFormProperties {

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The actual UTF-8 representation of the symbol. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1SymbolFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1SymbolFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p1beta1ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: GoogleCloudVisionV1p1beta1DominantColorsAnnotation;
	}

	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p1beta1ImagePropertiesFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1ImagePropertiesFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ImagePropertiesFormProperties>({
		});

	}


	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p1beta1DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<GoogleCloudVisionV1p1beta1ColorInfo>;
	}

	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p1beta1DominantColorsAnnotationFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1DominantColorsAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1DominantColorsAnnotationFormProperties>({
		});

	}


	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface GoogleCloudVisionV1p1beta1ColorInfo {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction?: number | null;

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface GoogleCloudVisionV1p1beta1ColorInfoFormProperties {

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction: FormControl<number | null | undefined>,

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1ColorInfoFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ColorInfoFormProperties>({
			pixelFraction: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p1beta1EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string | null;

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale?: string | null;

		/** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
		locations?: Array<GoogleCloudVisionV1p1beta1LocationInfo>;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid?: string | null;

		/** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
		properties?: Array<GoogleCloudVisionV1p1beta1Property>;

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality?: number | null;
	}

	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p1beta1EntityAnnotationFormProperties {

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Entity textual description, expressed in its `locale` language. */
		description: FormControl<string | null | undefined>,

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid: FormControl<string | null | undefined>,

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1EntityAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1EntityAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			topicality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p1beta1LocationInfo {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latLng?: LatLng;
	}

	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p1beta1LocationInfoFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1LocationInfoFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1LocationInfoFormProperties>({
		});

	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p1beta1Property {

		/** Name of the property. */
		name?: string | null;

		/** Value of numeric properties. */
		uint64Value?: string | null;

		/** Value of the property. */
		value?: string | null;
	}

	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p1beta1PropertyFormProperties {

		/** Name of the property. */
		name: FormControl<string | null | undefined>,

		/** Value of numeric properties. */
		uint64Value: FormControl<string | null | undefined>,

		/** Value of the property. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1PropertyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1PropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uint64Value: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p1beta1LocalizedObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1LocalizedObjectAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1LocalizedObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResults {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime?: string | null;

		/** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
		productGroupedResults?: Array<GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p1beta1ProductSearchResultsResult>;
	}

	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsFormProperties {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1ProductSearchResultsFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ProductSearchResultsFormProperties>({
			indexTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the products similar to a single product in a query image. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p1beta1ProductSearchResultsResult>;
	}

	/** Information about the products similar to a single product in a query image. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResultFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResultFormProperties>({
		});

	}


	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a product. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsResult {

		/** The resource name of the image from the product that is the closest match to the query. */
		image?: string | null;

		/** A Product contains ReferenceImages. */
		product?: GoogleCloudVisionV1p1beta1Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score?: number | null;
	}

	/** Information about a product. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsResultFormProperties {

		/** The resource name of the image from the product that is the closest match to the query. */
		image: FormControl<string | null | undefined>,

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1ProductSearchResultsResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ProductSearchResultsResultFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p1beta1Product {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description?: string | null;

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName?: string | null;

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name?: string | null;

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory?: string | null;

		/** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
		productLabels?: Array<GoogleCloudVisionV1p1beta1ProductKeyValue>;
	}

	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p1beta1ProductFormProperties {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description: FormControl<string | null | undefined>,

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1ProductFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productCategory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p1beta1ProductKeyValue {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key?: string | null;

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value?: string | null;
	}

	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p1beta1ProductKeyValueFormProperties {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key: FormControl<string | null | undefined>,

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1ProductKeyValueFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1ProductKeyValueFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface GoogleCloudVisionV1p1beta1SafeSearchAnnotation {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy?: FaceAnnotationAngerLikelihood | null;

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence?: FaceAnnotationAngerLikelihood | null;
	}

	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface GoogleCloudVisionV1p1beta1SafeSearchAnnotationFormProperties {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this is a medical image. */
		medical: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1SafeSearchAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1SafeSearchAnnotationFormProperties>({
			adult: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			medical: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			racy: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			spoof: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			violence: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p1beta1WebDetection {

		/** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
		bestGuessLabels?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebLabel>;

		/** Fully matching images from the Internet. Can include resized copies of the query image. */
		fullMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebPage>;

		/** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebEntity>;
	}

	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1WebDetectionFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1WebDetectionFormProperties>({
		});

	}


	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebLabel {

		/** Label for extra metadata. */
		label?: string | null;

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebLabelFormProperties {

		/** Label for extra metadata. */
		label: FormControl<string | null | undefined>,

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1WebDetectionWebLabelFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1WebDetectionWebLabelFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebImage {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score?: number | null;

		/** The result image URL. */
		url?: string | null;
	}

	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebImageFormProperties {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result image URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1WebDetectionWebImageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1WebDetectionWebImageFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebPage {

		/** Fully matching images on the page. Can include resized copies of the query image. */
		fullMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string | null;

		/** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score?: number | null;

		/** The result web page URL. */
		url?: string | null;
	}

	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebPageFormProperties {

		/** Title for the web page, may contain HTML markups. */
		pageTitle: FormControl<string | null | undefined>,

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result web page URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1WebDetectionWebPageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1WebDetectionWebPageFormProperties>({
			pageTitle: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebEntity {

		/** Canonical description of the entity, in English. */
		description?: string | null;

		/** Opaque entity ID. */
		entityId?: string | null;

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score?: number | null;
	}

	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebEntityFormProperties {

		/** Canonical description of the entity, in English. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. */
		entityId: FormControl<string | null | undefined>,

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1WebDetectionWebEntityFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1WebDetectionWebEntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
	}

	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1AsyncAnnotateFileResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponseFormProperties>({
		});

	}


	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p1beta1OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize?: number | null;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GoogleCloudVisionV1p1beta1GcsDestination;
	}

	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p1beta1OutputConfigFormProperties {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1OutputConfigFormProperties>({
			batchSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p1beta1GcsDestination {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p1beta1GcsDestinationFormProperties {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse {

		/** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
		responses?: Array<GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse>;
	}

	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponseFormProperties>({
		});

	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p1beta1OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string | null;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState | null;

		/** The time when the operation result was last updated. */
		updateTime?: string | null;
	}

	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p1beta1OperationMetadataFormProperties {

		/** The time when the batch request was received. */
		createTime: FormControl<string | null | undefined>,

		/** Current state of the batch operation. */
		state: FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>,

		/** The time when the operation result was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p1beta1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p1beta1OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudVisionV1p1beta1OperationMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATED = 'CREATED', RUNNING = 'RUNNING', DONE = 'DONE', CANCELLED = 'CANCELLED' }


	/** A request to annotate one single file, e.g. a PDF, TIFF or GIF file. */
	export interface GoogleCloudVisionV1p2beta1AnnotateFileRequest {

		/** Required. Requested features. */
		features?: Array<GoogleCloudVisionV1p2beta1Feature>;

		/** Image context and/or feature-specific parameters. */
		imageContext?: GoogleCloudVisionV1p2beta1ImageContext;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;

		/** Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file. */
		pages?: Array<number>;
	}

	/** A request to annotate one single file, e.g. a PDF, TIFF or GIF file. */
	export interface GoogleCloudVisionV1p2beta1AnnotateFileRequestFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1AnnotateFileRequestFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AnnotateFileRequestFormProperties>({
		});

	}


	/** The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list. */
	export interface GoogleCloudVisionV1p2beta1Feature {

		/**
		 * Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/** Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/weekly" for the bleeding edge release updated weekly. */
		model?: string | null;

		/** The feature type. */
		type?: GoogleCloudVisionV1p2beta1FeatureType | null;
	}

	/** The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list. */
	export interface GoogleCloudVisionV1p2beta1FeatureFormProperties {

		/**
		 * Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/weekly" for the bleeding edge release updated weekly. */
		model: FormControl<string | null | undefined>,

		/** The feature type. */
		type: FormControl<GoogleCloudVisionV1p2beta1FeatureType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1FeatureFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1FeatureFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudVisionV1p2beta1FeatureType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudVisionV1p2beta1FeatureType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', FACE_DETECTION = 'FACE_DETECTION', LANDMARK_DETECTION = 'LANDMARK_DETECTION', LOGO_DETECTION = 'LOGO_DETECTION', LABEL_DETECTION = 'LABEL_DETECTION', TEXT_DETECTION = 'TEXT_DETECTION', DOCUMENT_TEXT_DETECTION = 'DOCUMENT_TEXT_DETECTION', SAFE_SEARCH_DETECTION = 'SAFE_SEARCH_DETECTION', IMAGE_PROPERTIES = 'IMAGE_PROPERTIES', CROP_HINTS = 'CROP_HINTS', WEB_DETECTION = 'WEB_DETECTION', PRODUCT_SEARCH = 'PRODUCT_SEARCH', OBJECT_LOCALIZATION = 'OBJECT_LOCALIZATION' }


	/** Image context and/or feature-specific parameters. */
	export interface GoogleCloudVisionV1p2beta1ImageContext {

		/** Parameters for crop hints annotation request. */
		cropHintsParams?: GoogleCloudVisionV1p2beta1CropHintsParams;

		/** List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages). */
		languageHints?: Array<string>;

		/** Rectangle determined by min and max `LatLng` pairs. */
		latLongRect?: GoogleCloudVisionV1p2beta1LatLongRect;

		/** Parameters for a product search request. */
		productSearchParams?: GoogleCloudVisionV1p2beta1ProductSearchParams;

		/** Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features. */
		textDetectionParams?: GoogleCloudVisionV1p2beta1TextDetectionParams;

		/** Parameters for web detection request. */
		webDetectionParams?: GoogleCloudVisionV1p2beta1WebDetectionParams;
	}

	/** Image context and/or feature-specific parameters. */
	export interface GoogleCloudVisionV1p2beta1ImageContextFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1ImageContextFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ImageContextFormProperties>({
		});

	}


	/** Parameters for crop hints annotation request. */
	export interface GoogleCloudVisionV1p2beta1CropHintsParams {

		/** Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored. */
		aspectRatios?: Array<number>;
	}

	/** Parameters for crop hints annotation request. */
	export interface GoogleCloudVisionV1p2beta1CropHintsParamsFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1CropHintsParamsFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1CropHintsParamsFormProperties>({
		});

	}


	/** Rectangle determined by min and max `LatLng` pairs. */
	export interface GoogleCloudVisionV1p2beta1LatLongRect {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		maxLatLng?: LatLng;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		minLatLng?: LatLng;
	}

	/** Rectangle determined by min and max `LatLng` pairs. */
	export interface GoogleCloudVisionV1p2beta1LatLongRectFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1LatLongRectFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1LatLongRectFormProperties>({
		});

	}


	/** Parameters for a product search request. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchParams {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An '=' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a ':' instead of an '='. */
		filter?: string | null;

		/** The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified. The legacy categories "homegoods", "apparel", and "toys" are still supported but will be deprecated. For new products, please use "homegoods-v2", "apparel-v2", or "toys-v2" for better product search accuracy. It is recommended to migrate existing products to these categories as well. */
		productCategories?: Array<string>;

		/** The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. */
		productSet?: string | null;
	}

	/** Parameters for a product search request. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchParamsFormProperties {

		/** The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An '=' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a ':' instead of an '='. */
		filter: FormControl<string | null | undefined>,

		/** The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`. */
		productSet: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ProductSearchParamsFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ProductSearchParamsFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			productSet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p2beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudVisionV1p2beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudVisionV1p2beta1Vertex>;
	}

	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p2beta1BoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1BoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVisionV1p2beta1NormalizedVertex {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVisionV1p2beta1NormalizedVertexFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p2beta1Vertex {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p2beta1VertexFormProperties {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1VertexFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1VertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features. */
	export interface GoogleCloudVisionV1p2beta1TextDetectionParams {

		/** A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation. */
		advancedOcrOptions?: Array<string>;

		/** By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well. */
		enableTextDetectionConfidenceScore?: boolean | null;
	}

	/** Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features. */
	export interface GoogleCloudVisionV1p2beta1TextDetectionParamsFormProperties {

		/** By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well. */
		enableTextDetectionConfidenceScore: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1TextDetectionParamsFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1TextDetectionParamsFormProperties>({
			enableTextDetectionConfidenceScore: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Parameters for web detection request. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionParams {

		/** This field has no effect on results. */
		includeGeoResults?: boolean | null;
	}

	/** Parameters for web detection request. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionParamsFormProperties {

		/** This field has no effect on results. */
		includeGeoResults: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1WebDetectionParamsFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1WebDetectionParamsFormProperties>({
			includeGeoResults: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p2beta1InputConfig {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content?: string | null;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GoogleCloudVisionV1p2beta1GcsSource;

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType?: string | null;
	}

	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p2beta1InputConfigFormProperties {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content: FormControl<string | null | undefined>,

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1InputConfigFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1InputConfigFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p2beta1GcsSource {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p2beta1GcsSourceFormProperties {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface GoogleCloudVisionV1p2beta1AnnotateFileResponse {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;

		/** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
		responses?: Array<GoogleCloudVisionV1p2beta1AnnotateImageResponse>;

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}

	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface GoogleCloudVisionV1p2beta1AnnotateFileResponseFormProperties {

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1AnnotateFileResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AnnotateFileResponseFormProperties>({
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p2beta1AnnotateImageResponse {

		/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
		context?: GoogleCloudVisionV1p2beta1ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: GoogleCloudVisionV1p2beta1CropHintsAnnotation;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<GoogleCloudVisionV1p2beta1FaceAnnotation>;

		/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
		fullTextAnnotation?: GoogleCloudVisionV1p2beta1TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: GoogleCloudVisionV1p2beta1ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<GoogleCloudVisionV1p2beta1EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<GoogleCloudVisionV1p2beta1EntityAnnotation>;

		/** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
		localizedObjectAnnotations?: Array<GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<GoogleCloudVisionV1p2beta1EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: GoogleCloudVisionV1p2beta1ProductSearchResults;

		/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
		safeSearchAnnotation?: GoogleCloudVisionV1p2beta1SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<GoogleCloudVisionV1p2beta1EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: GoogleCloudVisionV1p2beta1WebDetection;
	}

	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p2beta1AnnotateImageResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1AnnotateImageResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AnnotateImageResponseFormProperties>({
		});

	}


	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface GoogleCloudVisionV1p2beta1ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/** The URI of the file used to produce the image. */
		uri?: string | null;
	}

	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface GoogleCloudVisionV1p2beta1ImageAnnotationContextFormProperties {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/** The URI of the file used to produce the image. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ImageAnnotationContextFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ImageAnnotationContextFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p2beta1CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<GoogleCloudVisionV1p2beta1CropHint>;
	}

	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p2beta1CropHintsAnnotationFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1CropHintsAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1CropHintsAnnotationFormProperties>({
		});

	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p2beta1CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction?: number | null;
	}

	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p2beta1CropHintFormProperties {

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1CropHintFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1CropHintFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			importanceFraction: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p2beta1FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence?: number | null;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence?: number | null;

		/** Detected face landmarks. */
		landmarks?: Array<GoogleCloudVisionV1p2beta1FaceAnnotationLandmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle?: number | null;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle?: number | null;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle?: number | null;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood | null;
	}

	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p2beta1FaceAnnotationFormProperties {

		/** Anger likelihood. */
		angerLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Blurred likelihood. */
		blurredLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence: FormControl<number | null | undefined>,

		/** Headwear likelihood. */
		headwearLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Joy likelihood. */
		joyLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence: FormControl<number | null | undefined>,

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle: FormControl<number | null | undefined>,

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle: FormControl<number | null | undefined>,

		/** Sorrow likelihood. */
		sorrowLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Surprise likelihood. */
		surpriseLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle: FormControl<number | null | undefined>,

		/** Under-exposed likelihood. */
		underExposedLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1FaceAnnotationFormProperties>({
			angerLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			blurredLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			detectionConfidence: new FormControl<number | null | undefined>(undefined),
			headwearLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			joyLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			landmarkingConfidence: new FormControl<number | null | undefined>(undefined),
			panAngle: new FormControl<number | null | undefined>(undefined),
			rollAngle: new FormControl<number | null | undefined>(undefined),
			sorrowLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			surpriseLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			tiltAngle: new FormControl<number | null | undefined>(undefined),
			underExposedLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p2beta1FaceAnnotationLandmark {

		/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
		position?: GoogleCloudVisionV1p2beta1Position;

		/** Face landmark type. */
		type?: LandmarkType | null;
	}

	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkFormProperties {

		/** Face landmark type. */
		type: FormControl<LandmarkType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1FaceAnnotationLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1FaceAnnotationLandmarkFormProperties>({
			type: new FormControl<LandmarkType | null | undefined>(undefined),
		});

	}


	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p2beta1Position {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z?: number | null;
	}

	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p2beta1PositionFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1PositionFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1PositionFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<GoogleCloudVisionV1p2beta1Page>;

		/** UTF-8 text detected on the pages. */
		text?: string | null;
	}

	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationFormProperties {

		/** UTF-8 text detected on the pages. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p2beta1Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<GoogleCloudVisionV1p2beta1Block>;

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p2beta1PageFormProperties {

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1PageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1PageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p2beta1Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType | null;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<GoogleCloudVisionV1p2beta1Paragraph>;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
	}

	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p2beta1BlockFormProperties {

		/** Detected block type (text, image etc) for this block. */
		blockType: FormControl<BlockBlockType | null | undefined>,

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1BlockFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1BlockFormProperties>({
			blockType: new FormControl<BlockBlockType | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p2beta1Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

		/** List of all words in this paragraph. */
		words?: Array<GoogleCloudVisionV1p2beta1Word>;
	}

	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p2beta1ParagraphFormProperties {

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ParagraphFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ParagraphFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationTextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage>;
	}

	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationTextPropertyFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1TextAnnotationTextPropertyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1TextAnnotationTextPropertyFormProperties>({
		});

	}


	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean | null;

		/** Detected break type. */
		type?: DetectedBreakType | null;
	}

	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakFormProperties {

		/** True if break prepends the element. */
		isPrefix: FormControl<boolean | null | undefined>,

		/** Detected break type. */
		type: FormControl<DetectedBreakType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreakFormProperties>({
			isPrefix: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DetectedBreakType | null | undefined>(undefined),
		});

	}


	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguageFormProperties {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A word representation. */
	export interface GoogleCloudVisionV1p2beta1Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

		/** List of symbols in the word. The order of the symbols follows the natural reading order. */
		symbols?: Array<GoogleCloudVisionV1p2beta1Symbol>;
	}

	/** A word representation. */
	export interface GoogleCloudVisionV1p2beta1WordFormProperties {

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1WordFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1WordFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p2beta1Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string | null;
	}

	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p2beta1SymbolFormProperties {

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The actual UTF-8 representation of the symbol. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1SymbolFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1SymbolFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p2beta1ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: GoogleCloudVisionV1p2beta1DominantColorsAnnotation;
	}

	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p2beta1ImagePropertiesFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1ImagePropertiesFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ImagePropertiesFormProperties>({
		});

	}


	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p2beta1DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<GoogleCloudVisionV1p2beta1ColorInfo>;
	}

	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p2beta1DominantColorsAnnotationFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1DominantColorsAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1DominantColorsAnnotationFormProperties>({
		});

	}


	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface GoogleCloudVisionV1p2beta1ColorInfo {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction?: number | null;

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface GoogleCloudVisionV1p2beta1ColorInfoFormProperties {

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction: FormControl<number | null | undefined>,

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ColorInfoFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ColorInfoFormProperties>({
			pixelFraction: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p2beta1EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string | null;

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale?: string | null;

		/** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
		locations?: Array<GoogleCloudVisionV1p2beta1LocationInfo>;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid?: string | null;

		/** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
		properties?: Array<GoogleCloudVisionV1p2beta1Property>;

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality?: number | null;
	}

	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p2beta1EntityAnnotationFormProperties {

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Entity textual description, expressed in its `locale` language. */
		description: FormControl<string | null | undefined>,

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid: FormControl<string | null | undefined>,

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1EntityAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1EntityAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			topicality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p2beta1LocationInfo {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latLng?: LatLng;
	}

	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p2beta1LocationInfoFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1LocationInfoFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1LocationInfoFormProperties>({
		});

	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p2beta1Property {

		/** Name of the property. */
		name?: string | null;

		/** Value of numeric properties. */
		uint64Value?: string | null;

		/** Value of the property. */
		value?: string | null;
	}

	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p2beta1PropertyFormProperties {

		/** Name of the property. */
		name: FormControl<string | null | undefined>,

		/** Value of numeric properties. */
		uint64Value: FormControl<string | null | undefined>,

		/** Value of the property. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1PropertyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1PropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uint64Value: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p2beta1LocalizedObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1LocalizedObjectAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1LocalizedObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResults {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime?: string | null;

		/** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
		productGroupedResults?: Array<GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p2beta1ProductSearchResultsResult>;
	}

	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsFormProperties {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ProductSearchResultsFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ProductSearchResultsFormProperties>({
			indexTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the products similar to a single product in a query image. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p2beta1ProductSearchResultsResult>;
	}

	/** Information about the products similar to a single product in a query image. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResultFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResultFormProperties>({
		});

	}


	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a product. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsResult {

		/** The resource name of the image from the product that is the closest match to the query. */
		image?: string | null;

		/** A Product contains ReferenceImages. */
		product?: GoogleCloudVisionV1p2beta1Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score?: number | null;
	}

	/** Information about a product. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsResultFormProperties {

		/** The resource name of the image from the product that is the closest match to the query. */
		image: FormControl<string | null | undefined>,

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ProductSearchResultsResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ProductSearchResultsResultFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p2beta1Product {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description?: string | null;

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName?: string | null;

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name?: string | null;

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory?: string | null;

		/** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
		productLabels?: Array<GoogleCloudVisionV1p2beta1ProductKeyValue>;
	}

	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p2beta1ProductFormProperties {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description: FormControl<string | null | undefined>,

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ProductFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productCategory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p2beta1ProductKeyValue {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key?: string | null;

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value?: string | null;
	}

	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p2beta1ProductKeyValueFormProperties {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key: FormControl<string | null | undefined>,

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ProductKeyValueFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ProductKeyValueFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface GoogleCloudVisionV1p2beta1SafeSearchAnnotation {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy?: FaceAnnotationAngerLikelihood | null;

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence?: FaceAnnotationAngerLikelihood | null;
	}

	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface GoogleCloudVisionV1p2beta1SafeSearchAnnotationFormProperties {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this is a medical image. */
		medical: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1SafeSearchAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1SafeSearchAnnotationFormProperties>({
			adult: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			medical: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			racy: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			spoof: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			violence: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p2beta1WebDetection {

		/** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
		bestGuessLabels?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebLabel>;

		/** Fully matching images from the Internet. Can include resized copies of the query image. */
		fullMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebPage>;

		/** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebEntity>;
	}

	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1WebDetectionFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1WebDetectionFormProperties>({
		});

	}


	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebLabel {

		/** Label for extra metadata. */
		label?: string | null;

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebLabelFormProperties {

		/** Label for extra metadata. */
		label: FormControl<string | null | undefined>,

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1WebDetectionWebLabelFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1WebDetectionWebLabelFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebImage {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score?: number | null;

		/** The result image URL. */
		url?: string | null;
	}

	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebImageFormProperties {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result image URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1WebDetectionWebImageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1WebDetectionWebImageFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebPage {

		/** Fully matching images on the page. Can include resized copies of the query image. */
		fullMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string | null;

		/** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score?: number | null;

		/** The result web page URL. */
		url?: string | null;
	}

	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebPageFormProperties {

		/** Title for the web page, may contain HTML markups. */
		pageTitle: FormControl<string | null | undefined>,

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result web page URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1WebDetectionWebPageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1WebDetectionWebPageFormProperties>({
			pageTitle: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebEntity {

		/** Canonical description of the entity, in English. */
		description?: string | null;

		/** Opaque entity ID. */
		entityId?: string | null;

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score?: number | null;
	}

	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebEntityFormProperties {

		/** Canonical description of the entity, in English. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. */
		entityId: FormControl<string | null | undefined>,

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1WebDetectionWebEntityFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1WebDetectionWebEntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information. */
	export interface GoogleCloudVisionV1p2beta1AnnotateImageRequest {

		/** Requested features. */
		features?: Array<GoogleCloudVisionV1p2beta1Feature>;

		/** Client image to perform Google Cloud Vision API tasks over. */
		image?: GoogleCloudVisionV1p2beta1Image;

		/** Image context and/or feature-specific parameters. */
		imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
	}

	/** Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information. */
	export interface GoogleCloudVisionV1p2beta1AnnotateImageRequestFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1AnnotateImageRequestFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AnnotateImageRequestFormProperties>({
		});

	}


	/** Client image to perform Google Cloud Vision API tasks over. */
	export interface GoogleCloudVisionV1p2beta1Image {

		/** Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests. */
		content?: string | null;

		/** External image source (Google Cloud Storage or web URL image location). */
		source?: GoogleCloudVisionV1p2beta1ImageSource;
	}

	/** Client image to perform Google Cloud Vision API tasks over. */
	export interface GoogleCloudVisionV1p2beta1ImageFormProperties {

		/** Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ImageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ImageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** External image source (Google Cloud Storage or web URL image location). */
	export interface GoogleCloudVisionV1p2beta1ImageSource {

		/** **Use `image_uri` instead.** The Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. */
		gcsImageUri?: string | null;

		/** The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence. */
		imageUri?: string | null;
	}

	/** External image source (Google Cloud Storage or web URL image location). */
	export interface GoogleCloudVisionV1p2beta1ImageSourceFormProperties {

		/** **Use `image_uri` instead.** The Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. */
		gcsImageUri: FormControl<string | null | undefined>,

		/** The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence. */
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1ImageSourceFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1ImageSourceFormProperties>({
			gcsImageUri: new FormControl<string | null | undefined>(undefined),
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An offline file annotation request. */
	export interface GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest {

		/** Required. Requested features. */
		features?: Array<GoogleCloudVisionV1p2beta1Feature>;

		/** Image context and/or feature-specific parameters. */
		imageContext?: GoogleCloudVisionV1p2beta1ImageContext;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
	}

	/** An offline file annotation request. */
	export interface GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequestFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1AsyncAnnotateFileRequestFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequestFormProperties>({
		});

	}


	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p2beta1OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize?: number | null;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GoogleCloudVisionV1p2beta1GcsDestination;
	}

	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p2beta1OutputConfigFormProperties {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1OutputConfigFormProperties>({
			batchSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p2beta1GcsDestination {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p2beta1GcsDestinationFormProperties {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
	}

	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1AsyncAnnotateFileResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponseFormProperties>({
		});

	}


	/** Multiple async file annotation requests are batched into a single service call. */
	export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
		labels?: {[id: string]: string };

		/** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
		parent?: string | null;

		/** Required. Individual async file annotation requests for this batch. */
		requests?: Array<GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest>;
	}

	/** Multiple async file annotation requests are batched into a single service call. */
	export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequestFormProperties {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequestFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse {

		/** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
		responses?: Array<GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse>;
	}

	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponseFormProperties>({
		});

	}


	/** Request for async image annotation for a list of images. */
	export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
		labels?: {[id: string]: string };

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;

		/** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
		parent?: string | null;

		/** Required. Individual image annotation requests for this batch. */
		requests?: Array<GoogleCloudVisionV1p2beta1AnnotateImageRequest>;
	}

	/** Request for async image annotation for a list of images. */
	export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequestFormProperties {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequestFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of requests to annotate files using the BatchAnnotateFiles API. */
	export interface GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
		labels?: {[id: string]: string };

		/** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
		parent?: string | null;

		/** Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest. */
		requests?: Array<GoogleCloudVisionV1p2beta1AnnotateFileRequest>;
	}

	/** A list of requests to annotate files using the BatchAnnotateFiles API. */
	export interface GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequestFormProperties {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1BatchAnnotateFilesRequestFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of file annotation responses. */
	export interface GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse {

		/** The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest. */
		responses?: Array<GoogleCloudVisionV1p2beta1AnnotateFileResponse>;
	}

	/** A list of file annotation responses. */
	export interface GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1BatchAnnotateFilesResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponseFormProperties>({
		});

	}


	/** Multiple image annotation requests are batched into a single service call. */
	export interface GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
		labels?: {[id: string]: string };

		/** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
		parent?: string | null;

		/** Required. Individual image annotation requests for this batch. */
		requests?: Array<GoogleCloudVisionV1p2beta1AnnotateImageRequest>;
	}

	/** Multiple image annotation requests are batched into a single service call. */
	export interface GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequestFormProperties {

		/** Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1BatchAnnotateImagesRequestFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a batch image annotation request. */
	export interface GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse {

		/** Individual responses to image annotation requests within the batch. */
		responses?: Array<GoogleCloudVisionV1p2beta1AnnotateImageResponse>;
	}

	/** Response to a batch image annotation request. */
	export interface GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p2beta1BatchAnnotateImagesResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponseFormProperties>({
		});

	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p2beta1OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string | null;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState | null;

		/** The time when the operation result was last updated. */
		updateTime?: string | null;
	}

	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p2beta1OperationMetadataFormProperties {

		/** The time when the batch request was received. */
		createTime: FormControl<string | null | undefined>,

		/** Current state of the batch operation. */
		state: FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>,

		/** The time when the operation result was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p2beta1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p2beta1OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface GoogleCloudVisionV1p3beta1AnnotateFileResponse {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p3beta1InputConfig;

		/** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
		responses?: Array<GoogleCloudVisionV1p3beta1AnnotateImageResponse>;

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}

	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface GoogleCloudVisionV1p3beta1AnnotateFileResponseFormProperties {

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1AnnotateFileResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1AnnotateFileResponseFormProperties>({
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p3beta1InputConfig {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content?: string | null;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GoogleCloudVisionV1p3beta1GcsSource;

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType?: string | null;
	}

	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p3beta1InputConfigFormProperties {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content: FormControl<string | null | undefined>,

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1InputConfigFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1InputConfigFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p3beta1GcsSource {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p3beta1GcsSourceFormProperties {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p3beta1AnnotateImageResponse {

		/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
		context?: GoogleCloudVisionV1p3beta1ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: GoogleCloudVisionV1p3beta1CropHintsAnnotation;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<GoogleCloudVisionV1p3beta1FaceAnnotation>;

		/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
		fullTextAnnotation?: GoogleCloudVisionV1p3beta1TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: GoogleCloudVisionV1p3beta1ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<GoogleCloudVisionV1p3beta1EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<GoogleCloudVisionV1p3beta1EntityAnnotation>;

		/** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
		localizedObjectAnnotations?: Array<GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<GoogleCloudVisionV1p3beta1EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: GoogleCloudVisionV1p3beta1ProductSearchResults;

		/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
		safeSearchAnnotation?: GoogleCloudVisionV1p3beta1SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<GoogleCloudVisionV1p3beta1EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: GoogleCloudVisionV1p3beta1WebDetection;
	}

	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p3beta1AnnotateImageResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1AnnotateImageResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1AnnotateImageResponseFormProperties>({
		});

	}


	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface GoogleCloudVisionV1p3beta1ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/** The URI of the file used to produce the image. */
		uri?: string | null;
	}

	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface GoogleCloudVisionV1p3beta1ImageAnnotationContextFormProperties {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/** The URI of the file used to produce the image. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ImageAnnotationContextFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ImageAnnotationContextFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p3beta1CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<GoogleCloudVisionV1p3beta1CropHint>;
	}

	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p3beta1CropHintsAnnotationFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1CropHintsAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1CropHintsAnnotationFormProperties>({
		});

	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p3beta1CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction?: number | null;
	}

	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p3beta1CropHintFormProperties {

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1CropHintFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1CropHintFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			importanceFraction: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p3beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudVisionV1p3beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudVisionV1p3beta1Vertex>;
	}

	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p3beta1BoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1BoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVisionV1p3beta1NormalizedVertex {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVisionV1p3beta1NormalizedVertexFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p3beta1Vertex {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p3beta1VertexFormProperties {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1VertexFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1VertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p3beta1FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence?: number | null;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence?: number | null;

		/** Detected face landmarks. */
		landmarks?: Array<GoogleCloudVisionV1p3beta1FaceAnnotationLandmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle?: number | null;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle?: number | null;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle?: number | null;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood | null;
	}

	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p3beta1FaceAnnotationFormProperties {

		/** Anger likelihood. */
		angerLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Blurred likelihood. */
		blurredLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence: FormControl<number | null | undefined>,

		/** Headwear likelihood. */
		headwearLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Joy likelihood. */
		joyLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence: FormControl<number | null | undefined>,

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle: FormControl<number | null | undefined>,

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle: FormControl<number | null | undefined>,

		/** Sorrow likelihood. */
		sorrowLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Surprise likelihood. */
		surpriseLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle: FormControl<number | null | undefined>,

		/** Under-exposed likelihood. */
		underExposedLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1FaceAnnotationFormProperties>({
			angerLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			blurredLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			detectionConfidence: new FormControl<number | null | undefined>(undefined),
			headwearLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			joyLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			landmarkingConfidence: new FormControl<number | null | undefined>(undefined),
			panAngle: new FormControl<number | null | undefined>(undefined),
			rollAngle: new FormControl<number | null | undefined>(undefined),
			sorrowLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			surpriseLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			tiltAngle: new FormControl<number | null | undefined>(undefined),
			underExposedLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p3beta1FaceAnnotationLandmark {

		/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
		position?: GoogleCloudVisionV1p3beta1Position;

		/** Face landmark type. */
		type?: LandmarkType | null;
	}

	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p3beta1FaceAnnotationLandmarkFormProperties {

		/** Face landmark type. */
		type: FormControl<LandmarkType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1FaceAnnotationLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1FaceAnnotationLandmarkFormProperties>({
			type: new FormControl<LandmarkType | null | undefined>(undefined),
		});

	}


	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p3beta1Position {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z?: number | null;
	}

	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p3beta1PositionFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1PositionFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1PositionFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<GoogleCloudVisionV1p3beta1Page>;

		/** UTF-8 text detected on the pages. */
		text?: string | null;
	}

	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationFormProperties {

		/** UTF-8 text detected on the pages. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p3beta1Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<GoogleCloudVisionV1p3beta1Block>;

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p3beta1PageFormProperties {

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1PageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1PageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p3beta1Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType | null;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<GoogleCloudVisionV1p3beta1Paragraph>;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
	}

	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p3beta1BlockFormProperties {

		/** Detected block type (text, image etc) for this block. */
		blockType: FormControl<BlockBlockType | null | undefined>,

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1BlockFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1BlockFormProperties>({
			blockType: new FormControl<BlockBlockType | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p3beta1Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;

		/** List of all words in this paragraph. */
		words?: Array<GoogleCloudVisionV1p3beta1Word>;
	}

	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p3beta1ParagraphFormProperties {

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ParagraphFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ParagraphFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationTextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage>;
	}

	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationTextPropertyFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1TextAnnotationTextPropertyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1TextAnnotationTextPropertyFormProperties>({
		});

	}


	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean | null;

		/** Detected break type. */
		type?: DetectedBreakType | null;
	}

	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreakFormProperties {

		/** True if break prepends the element. */
		isPrefix: FormControl<boolean | null | undefined>,

		/** Detected break type. */
		type: FormControl<DetectedBreakType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1TextAnnotationDetectedBreakFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreakFormProperties>({
			isPrefix: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DetectedBreakType | null | undefined>(undefined),
		});

	}


	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguageFormProperties {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A word representation. */
	export interface GoogleCloudVisionV1p3beta1Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;

		/** List of symbols in the word. The order of the symbols follows the natural reading order. */
		symbols?: Array<GoogleCloudVisionV1p3beta1Symbol>;
	}

	/** A word representation. */
	export interface GoogleCloudVisionV1p3beta1WordFormProperties {

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1WordFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1WordFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p3beta1Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string | null;
	}

	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p3beta1SymbolFormProperties {

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The actual UTF-8 representation of the symbol. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1SymbolFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1SymbolFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p3beta1ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: GoogleCloudVisionV1p3beta1DominantColorsAnnotation;
	}

	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p3beta1ImagePropertiesFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1ImagePropertiesFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ImagePropertiesFormProperties>({
		});

	}


	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p3beta1DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<GoogleCloudVisionV1p3beta1ColorInfo>;
	}

	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p3beta1DominantColorsAnnotationFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1DominantColorsAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1DominantColorsAnnotationFormProperties>({
		});

	}


	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface GoogleCloudVisionV1p3beta1ColorInfo {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction?: number | null;

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface GoogleCloudVisionV1p3beta1ColorInfoFormProperties {

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction: FormControl<number | null | undefined>,

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ColorInfoFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ColorInfoFormProperties>({
			pixelFraction: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p3beta1EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string | null;

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale?: string | null;

		/** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
		locations?: Array<GoogleCloudVisionV1p3beta1LocationInfo>;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid?: string | null;

		/** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
		properties?: Array<GoogleCloudVisionV1p3beta1Property>;

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality?: number | null;
	}

	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p3beta1EntityAnnotationFormProperties {

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Entity textual description, expressed in its `locale` language. */
		description: FormControl<string | null | undefined>,

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid: FormControl<string | null | undefined>,

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1EntityAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1EntityAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			topicality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p3beta1LocationInfo {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latLng?: LatLng;
	}

	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p3beta1LocationInfoFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1LocationInfoFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1LocationInfoFormProperties>({
		});

	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p3beta1Property {

		/** Name of the property. */
		name?: string | null;

		/** Value of numeric properties. */
		uint64Value?: string | null;

		/** Value of the property. */
		value?: string | null;
	}

	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p3beta1PropertyFormProperties {

		/** Name of the property. */
		name: FormControl<string | null | undefined>,

		/** Value of numeric properties. */
		uint64Value: FormControl<string | null | undefined>,

		/** Value of the property. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1PropertyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1PropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uint64Value: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p3beta1LocalizedObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1LocalizedObjectAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1LocalizedObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResults {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime?: string | null;

		/** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
		productGroupedResults?: Array<GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p3beta1ProductSearchResultsResult>;
	}

	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsFormProperties {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ProductSearchResultsFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ProductSearchResultsFormProperties>({
			indexTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the products similar to a single product in a query image. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p3beta1ProductSearchResultsResult>;
	}

	/** Information about the products similar to a single product in a query image. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResultFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResultFormProperties>({
		});

	}


	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a product. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsResult {

		/** The resource name of the image from the product that is the closest match to the query. */
		image?: string | null;

		/** A Product contains ReferenceImages. */
		product?: GoogleCloudVisionV1p3beta1Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score?: number | null;
	}

	/** Information about a product. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsResultFormProperties {

		/** The resource name of the image from the product that is the closest match to the query. */
		image: FormControl<string | null | undefined>,

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ProductSearchResultsResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ProductSearchResultsResultFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p3beta1Product {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description?: string | null;

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName?: string | null;

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name?: string | null;

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory?: string | null;

		/** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
		productLabels?: Array<GoogleCloudVisionV1p3beta1ProductKeyValue>;
	}

	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p3beta1ProductFormProperties {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description: FormControl<string | null | undefined>,

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ProductFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productCategory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p3beta1ProductKeyValue {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key?: string | null;

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value?: string | null;
	}

	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p3beta1ProductKeyValueFormProperties {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key: FormControl<string | null | undefined>,

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ProductKeyValueFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ProductKeyValueFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface GoogleCloudVisionV1p3beta1SafeSearchAnnotation {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy?: FaceAnnotationAngerLikelihood | null;

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence?: FaceAnnotationAngerLikelihood | null;
	}

	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface GoogleCloudVisionV1p3beta1SafeSearchAnnotationFormProperties {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this is a medical image. */
		medical: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1SafeSearchAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1SafeSearchAnnotationFormProperties>({
			adult: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			medical: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			racy: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			spoof: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			violence: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p3beta1WebDetection {

		/** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
		bestGuessLabels?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebLabel>;

		/** Fully matching images from the Internet. Can include resized copies of the query image. */
		fullMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebPage>;

		/** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebEntity>;
	}

	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1WebDetectionFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1WebDetectionFormProperties>({
		});

	}


	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebLabel {

		/** Label for extra metadata. */
		label?: string | null;

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebLabelFormProperties {

		/** Label for extra metadata. */
		label: FormControl<string | null | undefined>,

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1WebDetectionWebLabelFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1WebDetectionWebLabelFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebImage {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score?: number | null;

		/** The result image URL. */
		url?: string | null;
	}

	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebImageFormProperties {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result image URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1WebDetectionWebImageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1WebDetectionWebImageFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebPage {

		/** Fully matching images on the page. Can include resized copies of the query image. */
		fullMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string | null;

		/** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score?: number | null;

		/** The result web page URL. */
		url?: string | null;
	}

	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebPageFormProperties {

		/** Title for the web page, may contain HTML markups. */
		pageTitle: FormControl<string | null | undefined>,

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result web page URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1WebDetectionWebPageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1WebDetectionWebPageFormProperties>({
			pageTitle: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebEntity {

		/** Canonical description of the entity, in English. */
		description?: string | null;

		/** Opaque entity ID. */
		entityId?: string | null;

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score?: number | null;
	}

	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebEntityFormProperties {

		/** Canonical description of the entity, in English. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. */
		entityId: FormControl<string | null | undefined>,

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1WebDetectionWebEntityFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1WebDetectionWebEntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p3beta1OutputConfig;
	}

	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1AsyncAnnotateFileResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponseFormProperties>({
		});

	}


	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p3beta1OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize?: number | null;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GoogleCloudVisionV1p3beta1GcsDestination;
	}

	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p3beta1OutputConfigFormProperties {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1OutputConfigFormProperties>({
			batchSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p3beta1GcsDestination {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p3beta1GcsDestinationFormProperties {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse {

		/** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
		responses?: Array<GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse>;
	}

	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponseFormProperties>({
		});

	}


	/** Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVisionV1p3beta1BatchOperationMetadata {

		/** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
		endTime?: string | null;

		/** The current state of the batch operation. */
		state?: BatchOperationMetadataState | null;

		/** The time when the batch request was submitted to the server. */
		submitTime?: string | null;
	}

	/** Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVisionV1p3beta1BatchOperationMetadataFormProperties {

		/** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
		endTime: FormControl<string | null | undefined>,

		/** The current state of the batch operation. */
		state: FormControl<BatchOperationMetadataState | null | undefined>,

		/** The time when the batch request was submitted to the server. */
		submitTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1BatchOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1BatchOperationMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BatchOperationMetadataState | null | undefined>(undefined),
			submitTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field. */
	export interface GoogleCloudVisionV1p3beta1ImportProductSetsResponse {

		/** The list of reference_images that are imported successfully. */
		referenceImages?: Array<GoogleCloudVisionV1p3beta1ReferenceImage>;

		/** The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0. */
		statuses?: Array<Status>;
	}

	/** Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field. */
	export interface GoogleCloudVisionV1p3beta1ImportProductSetsResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p3beta1ImportProductSetsResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ImportProductSetsResponseFormProperties>({
		});

	}


	/** A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes. */
	export interface GoogleCloudVisionV1p3beta1ReferenceImage {

		/** Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). */
		boundingPolys?: Array<GoogleCloudVisionV1p3beta1BoundingPoly>;

		/** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
		name?: string | null;

		/** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
		uri?: string | null;
	}

	/** A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes. */
	export interface GoogleCloudVisionV1p3beta1ReferenceImageFormProperties {

		/** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
		name: FormControl<string | null | undefined>,

		/** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1ReferenceImageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1ReferenceImageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p3beta1OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string | null;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState | null;

		/** The time when the operation result was last updated. */
		updateTime?: string | null;
	}

	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p3beta1OperationMetadataFormProperties {

		/** The time when the batch request was received. */
		createTime: FormControl<string | null | undefined>,

		/** Current state of the batch operation. */
		state: FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>,

		/** The time when the operation result was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p3beta1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p3beta1OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface GoogleCloudVisionV1p4beta1AnnotateFileResponse {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p4beta1InputConfig;

		/** Individual responses to images found within the file. This field will be empty if the `error` field is set. */
		responses?: Array<GoogleCloudVisionV1p4beta1AnnotateImageResponse>;

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}

	/** Response to a single file annotation request. A file may contain one or more images, which individually have their own responses. */
	export interface GoogleCloudVisionV1p4beta1AnnotateFileResponseFormProperties {

		/**
		 * This field gives the total number of pages in the file.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1AnnotateFileResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1AnnotateFileResponseFormProperties>({
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p4beta1InputConfig {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content?: string | null;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GoogleCloudVisionV1p4beta1GcsSource;

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType?: string | null;
	}

	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p4beta1InputConfigFormProperties {

		/** File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. */
		content: FormControl<string | null | undefined>,

		/** The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1InputConfigFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1InputConfigFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p4beta1GcsSource {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p4beta1GcsSourceFormProperties {

		/** Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p4beta1AnnotateImageResponse {

		/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
		context?: GoogleCloudVisionV1p4beta1ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: GoogleCloudVisionV1p4beta1CropHintsAnnotation;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<GoogleCloudVisionV1p4beta1FaceAnnotation>;

		/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
		fullTextAnnotation?: GoogleCloudVisionV1p4beta1TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: GoogleCloudVisionV1p4beta1ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<GoogleCloudVisionV1p4beta1EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<GoogleCloudVisionV1p4beta1EntityAnnotation>;

		/** If present, localized object detection has completed successfully. This will be sorted descending by confidence score. */
		localizedObjectAnnotations?: Array<GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<GoogleCloudVisionV1p4beta1EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: GoogleCloudVisionV1p4beta1ProductSearchResults;

		/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
		safeSearchAnnotation?: GoogleCloudVisionV1p4beta1SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<GoogleCloudVisionV1p4beta1EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: GoogleCloudVisionV1p4beta1WebDetection;
	}

	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p4beta1AnnotateImageResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1AnnotateImageResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1AnnotateImageResponseFormProperties>({
		});

	}


	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface GoogleCloudVisionV1p4beta1ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber?: number | null;

		/** The URI of the file used to produce the image. */
		uri?: string | null;
	}

	/** If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image. */
	export interface GoogleCloudVisionV1p4beta1ImageAnnotationContextFormProperties {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageNumber: FormControl<number | null | undefined>,

		/** The URI of the file used to produce the image. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ImageAnnotationContextFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ImageAnnotationContextFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p4beta1CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<GoogleCloudVisionV1p4beta1CropHint>;
	}

	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p4beta1CropHintsAnnotationFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1CropHintsAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1CropHintsAnnotationFormProperties>({
		});

	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p4beta1CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction?: number | null;
	}

	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p4beta1CropHintFormProperties {

		/**
		 * Confidence of this being a salient region. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Fraction of importance of this salient region with respect to the original image.
		 * Type: float
		 */
		importanceFraction: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1CropHintFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1CropHintFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			importanceFraction: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p4beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudVisionV1p4beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudVisionV1p4beta1Vertex>;
	}

	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p4beta1BoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1BoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVisionV1p4beta1NormalizedVertex {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVisionV1p4beta1NormalizedVertexFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p4beta1Vertex {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p4beta1VertexFormProperties {

		/**
		 * X coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1VertexFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1VertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p4beta1FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence?: number | null;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence?: number | null;

		/** Detected face landmarks. */
		landmarks?: Array<GoogleCloudVisionV1p4beta1FaceAnnotationLandmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle?: number | null;

		/** Additional recognition information. Only computed if image_context.face_recognition_params is provided, **and** a match is found to a Celebrity in the input CelebritySet. This field is sorted in order of decreasing confidence values. */
		recognitionResult?: Array<GoogleCloudVisionV1p4beta1FaceRecognitionResult>;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle?: number | null;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood | null;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood | null;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle?: number | null;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood | null;
	}

	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p4beta1FaceAnnotationFormProperties {

		/** Anger likelihood. */
		angerLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Blurred likelihood. */
		blurredLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Detection confidence. Range [0, 1].
		 * Type: float
		 */
		detectionConfidence: FormControl<number | null | undefined>,

		/** Headwear likelihood. */
		headwearLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Joy likelihood. */
		joyLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Face landmarking confidence. Range [0, 1].
		 * Type: float
		 */
		landmarkingConfidence: FormControl<number | null | undefined>,

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
		 * Type: float
		 */
		panAngle: FormControl<number | null | undefined>,

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
		 * Type: float
		 */
		rollAngle: FormControl<number | null | undefined>,

		/** Sorrow likelihood. */
		sorrowLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Surprise likelihood. */
		surpriseLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
		 * Type: float
		 */
		tiltAngle: FormControl<number | null | undefined>,

		/** Under-exposed likelihood. */
		underExposedLikelihood: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1FaceAnnotationFormProperties>({
			angerLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			blurredLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			detectionConfidence: new FormControl<number | null | undefined>(undefined),
			headwearLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			joyLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			landmarkingConfidence: new FormControl<number | null | undefined>(undefined),
			panAngle: new FormControl<number | null | undefined>(undefined),
			rollAngle: new FormControl<number | null | undefined>(undefined),
			sorrowLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			surpriseLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			tiltAngle: new FormControl<number | null | undefined>(undefined),
			underExposedLikelihood: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p4beta1FaceAnnotationLandmark {

		/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
		position?: GoogleCloudVisionV1p4beta1Position;

		/** Face landmark type. */
		type?: LandmarkType | null;
	}

	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p4beta1FaceAnnotationLandmarkFormProperties {

		/** Face landmark type. */
		type: FormControl<LandmarkType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1FaceAnnotationLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1FaceAnnotationLandmarkFormProperties>({
			type: new FormControl<LandmarkType | null | undefined>(undefined),
		});

	}


	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p4beta1Position {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x?: number | null;

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y?: number | null;

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z?: number | null;
	}

	/** A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image. */
	export interface GoogleCloudVisionV1p4beta1PositionFormProperties {

		/**
		 * X coordinate.
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Y coordinate.
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,

		/**
		 * Z coordinate (or depth).
		 * Type: float
		 */
		z: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1PositionFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1PositionFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a face's identity. */
	export interface GoogleCloudVisionV1p4beta1FaceRecognitionResult {

		/** A Celebrity is a group of Faces with an identity. */
		celebrity?: GoogleCloudVisionV1p4beta1Celebrity;

		/**
		 * Recognition confidence. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;
	}

	/** Information about a face's identity. */
	export interface GoogleCloudVisionV1p4beta1FaceRecognitionResultFormProperties {

		/**
		 * Recognition confidence. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1FaceRecognitionResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1FaceRecognitionResultFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Celebrity is a group of Faces with an identity. */
	export interface GoogleCloudVisionV1p4beta1Celebrity {

		/** The Celebrity's description. */
		description?: string | null;

		/** The Celebrity's display name. */
		displayName?: string | null;

		/** The resource name of the preloaded Celebrity. Has the format `builtin/{mid}`. */
		name?: string | null;
	}

	/** A Celebrity is a group of Faces with an identity. */
	export interface GoogleCloudVisionV1p4beta1CelebrityFormProperties {

		/** The Celebrity's description. */
		description: FormControl<string | null | undefined>,

		/** The Celebrity's display name. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the preloaded Celebrity. Has the format `builtin/{mid}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1CelebrityFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1CelebrityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<GoogleCloudVisionV1p4beta1Page>;

		/** UTF-8 text detected on the pages. */
		text?: string | null;
	}

	/** TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationFormProperties {

		/** UTF-8 text detected on the pages. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p4beta1Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<GoogleCloudVisionV1p4beta1Block>;

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p4beta1PageFormProperties {

		/**
		 * Confidence of the OCR results on the page. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1PageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1PageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p4beta1Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType | null;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<GoogleCloudVisionV1p4beta1Paragraph>;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
	}

	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p4beta1BlockFormProperties {

		/** Detected block type (text, image etc) for this block. */
		blockType: FormControl<BlockBlockType | null | undefined>,

		/**
		 * Confidence of the OCR results on the block. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1BlockFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1BlockFormProperties>({
			blockType: new FormControl<BlockBlockType | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p4beta1Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;

		/** List of all words in this paragraph. */
		words?: Array<GoogleCloudVisionV1p4beta1Word>;
	}

	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p4beta1ParagraphFormProperties {

		/**
		 * Confidence of the OCR results for the paragraph. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ParagraphFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ParagraphFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationTextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage>;
	}

	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationTextPropertyFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1TextAnnotationTextPropertyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1TextAnnotationTextPropertyFormProperties>({
		});

	}


	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean | null;

		/** Detected break type. */
		type?: DetectedBreakType | null;
	}

	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreakFormProperties {

		/** True if break prepends the element. */
		isPrefix: FormControl<boolean | null | undefined>,

		/** Detected break type. */
		type: FormControl<DetectedBreakType | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1TextAnnotationDetectedBreakFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreakFormProperties>({
			isPrefix: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DetectedBreakType | null | undefined>(undefined),
		});

	}


	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguageFormProperties {

		/**
		 * Confidence of detected language. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguageFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A word representation. */
	export interface GoogleCloudVisionV1p4beta1Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;

		/** List of symbols in the word. The order of the symbols follows the natural reading order. */
		symbols?: Array<GoogleCloudVisionV1p4beta1Symbol>;
	}

	/** A word representation. */
	export interface GoogleCloudVisionV1p4beta1WordFormProperties {

		/**
		 * Confidence of the OCR results for the word. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1WordFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1WordFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p4beta1Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string | null;
	}

	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p4beta1SymbolFormProperties {

		/**
		 * Confidence of the OCR results for the symbol. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The actual UTF-8 representation of the symbol. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1SymbolFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1SymbolFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p4beta1ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: GoogleCloudVisionV1p4beta1DominantColorsAnnotation;
	}

	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p4beta1ImagePropertiesFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1ImagePropertiesFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ImagePropertiesFormProperties>({
		});

	}


	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p4beta1DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<GoogleCloudVisionV1p4beta1ColorInfo>;
	}

	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p4beta1DominantColorsAnnotationFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1DominantColorsAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1DominantColorsAnnotationFormProperties>({
		});

	}


	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface GoogleCloudVisionV1p4beta1ColorInfo {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction?: number | null;

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image. */
	export interface GoogleCloudVisionV1p4beta1ColorInfoFormProperties {

		/**
		 * The fraction of pixels the color occupies in the image. Value in range [0, 1].
		 * Type: float
		 */
		pixelFraction: FormControl<number | null | undefined>,

		/**
		 * Image-specific score for this color. Value in range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ColorInfoFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ColorInfoFormProperties>({
			pixelFraction: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p4beta1EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence?: number | null;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string | null;

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale?: string | null;

		/** The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks. */
		locations?: Array<GoogleCloudVisionV1p4beta1LocationInfo>;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid?: string | null;

		/** Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity. */
		properties?: Array<GoogleCloudVisionV1p4beta1Property>;

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality?: number | null;
	}

	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p4beta1EntityAnnotationFormProperties {

		/**
		 * **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Entity textual description, expressed in its `locale` language. */
		description: FormControl<string | null | undefined>,

		/** The language code for the locale in which the entity textual `description` is expressed. */
		locale: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		mid: FormControl<string | null | undefined>,

		/**
		 * Overall score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
		 * Type: float
		 */
		topicality: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1EntityAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1EntityAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			topicality: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p4beta1LocationInfo {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latLng?: LatLng;
	}

	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p4beta1LocationInfoFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1LocationInfoFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1LocationInfoFormProperties>({
		});

	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p4beta1Property {

		/** Name of the property. */
		name?: string | null;

		/** Value of numeric properties. */
		uint64Value?: string | null;

		/** Value of the property. */
		value?: string | null;
	}

	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p4beta1PropertyFormProperties {

		/** Name of the property. */
		name: FormControl<string | null | undefined>,

		/** Value of numeric properties. */
		uint64Value: FormControl<string | null | undefined>,

		/** Value of the property. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1PropertyFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1PropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uint64Value: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p4beta1LocalizedObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1LocalizedObjectAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1LocalizedObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResults {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime?: string | null;

		/** List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. */
		productGroupedResults?: Array<GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p4beta1ProductSearchResultsResult>;
	}

	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsFormProperties {

		/** Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. */
		indexTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ProductSearchResultsFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ProductSearchResultsFormProperties>({
			indexTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the products similar to a single product in a query image. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p4beta1ProductSearchResultsResult>;
	}

	/** Information about the products similar to a single product in a query image. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResultFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResultFormProperties>({
		});

	}


	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string | null;

		/** Object name, expressed in its `language_code` language. */
		name?: string | null;

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score?: number | null;
	}

	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotationFormProperties {

		/** The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Object ID that should align with EntityAnnotation mid. */
		mid: FormControl<string | null | undefined>,

		/** Object name, expressed in its `language_code` language. */
		name: FormControl<string | null | undefined>,

		/**
		 * Score of the result. Range [0, 1].
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a product. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsResult {

		/** The resource name of the image from the product that is the closest match to the query. */
		image?: string | null;

		/** A Product contains ReferenceImages. */
		product?: GoogleCloudVisionV1p4beta1Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score?: number | null;
	}

	/** Information about a product. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsResultFormProperties {

		/** The resource name of the image from the product that is the closest match to the query. */
		image: FormControl<string | null | undefined>,

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ProductSearchResultsResultFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ProductSearchResultsResultFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p4beta1Product {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description?: string | null;

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName?: string | null;

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name?: string | null;

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory?: string | null;

		/** Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. */
		productLabels?: Array<GoogleCloudVisionV1p4beta1ProductKeyValue>;
	}

	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p4beta1ProductFormProperties {

		/** User-provided metadata to be stored with this product. Must be at most 4096 characters long. */
		description: FormControl<string | null | undefined>,

		/** The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products. */
		productCategory: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ProductFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productCategory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p4beta1ProductKeyValue {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key?: string | null;

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value?: string | null;
	}

	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p4beta1ProductKeyValueFormProperties {

		/** The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		key: FormControl<string | null | undefined>,

		/** The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ProductKeyValueFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ProductKeyValueFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface GoogleCloudVisionV1p4beta1SafeSearchAnnotation {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy?: FaceAnnotationAngerLikelihood | null;

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof?: FaceAnnotationAngerLikelihood | null;

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence?: FaceAnnotationAngerLikelihood | null;
	}

	/** Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence). */
	export interface GoogleCloudVisionV1p4beta1SafeSearchAnnotationFormProperties {

		/** Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. */
		adult: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this is a medical image. */
		medical: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. */
		racy: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive. */
		spoof: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,

		/** Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. */
		violence: FormControl<FaceAnnotationAngerLikelihood | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1SafeSearchAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1SafeSearchAnnotationFormProperties>({
			adult: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			medical: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			racy: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			spoof: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
			violence: new FormControl<FaceAnnotationAngerLikelihood | null | undefined>(undefined),
		});

	}


	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p4beta1WebDetection {

		/** The service's best guess as to the topic of the request image. Inferred from similar images on the open web. */
		bestGuessLabels?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebLabel>;

		/** Fully matching images from the Internet. Can include resized copies of the query image. */
		fullMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebPage>;

		/** Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebEntity>;
	}

	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1WebDetectionFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1WebDetectionFormProperties>({
		});

	}


	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebLabel {

		/** Label for extra metadata. */
		label?: string | null;

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;
	}

	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebLabelFormProperties {

		/** Label for extra metadata. */
		label: FormControl<string | null | undefined>,

		/** The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1WebDetectionWebLabelFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1WebDetectionWebLabelFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebImage {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score?: number | null;

		/** The result image URL. */
		url?: string | null;
	}

	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebImageFormProperties {

		/**
		 * (Deprecated) Overall relevancy score for the image.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result image URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1WebDetectionWebImageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1WebDetectionWebImageFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebPage {

		/** Fully matching images on the page. Can include resized copies of the query image. */
		fullMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string | null;

		/** Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. */
		partialMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score?: number | null;

		/** The result web page URL. */
		url?: string | null;
	}

	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebPageFormProperties {

		/** Title for the web page, may contain HTML markups. */
		pageTitle: FormControl<string | null | undefined>,

		/**
		 * (Deprecated) Overall relevancy score for the web page.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,

		/** The result web page URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1WebDetectionWebPageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1WebDetectionWebPageFormProperties>({
			pageTitle: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebEntity {

		/** Canonical description of the entity, in English. */
		description?: string | null;

		/** Opaque entity ID. */
		entityId?: string | null;

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score?: number | null;
	}

	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebEntityFormProperties {

		/** Canonical description of the entity, in English. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. */
		entityId: FormControl<string | null | undefined>,

		/**
		 * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1WebDetectionWebEntityFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1WebDetectionWebEntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p4beta1OutputConfig;
	}

	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1AsyncAnnotateFileResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponseFormProperties>({
		});

	}


	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p4beta1OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize?: number | null;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GoogleCloudVisionV1p4beta1GcsDestination;
	}

	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p4beta1OutputConfigFormProperties {

		/**
		 * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		batchSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1OutputConfigFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1OutputConfigFormProperties>({
			batchSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p4beta1GcsDestination {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri?: string | null;
	}

	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p4beta1GcsDestinationFormProperties {

		/** Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1GcsDestinationFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse {

		/** The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. */
		responses?: Array<GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse>;
	}

	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponseFormProperties>({
		});

	}


	/** Response to an async batch image annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p4beta1OutputConfig;
	}

	/** Response to an async batch image annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponseFormProperties>({
		});

	}


	/** A list of file annotation responses. */
	export interface GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse {

		/** The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest. */
		responses?: Array<GoogleCloudVisionV1p4beta1AnnotateFileResponse>;
	}

	/** A list of file annotation responses. */
	export interface GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1BatchAnnotateFilesResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponseFormProperties>({
		});

	}


	/** Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVisionV1p4beta1BatchOperationMetadata {

		/** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
		endTime?: string | null;

		/** The current state of the batch operation. */
		state?: BatchOperationMetadataState | null;

		/** The time when the batch request was submitted to the server. */
		submitTime?: string | null;
	}

	/** Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVisionV1p4beta1BatchOperationMetadataFormProperties {

		/** The time when the batch request is finished and google.longrunning.Operation.done is set to true. */
		endTime: FormControl<string | null | undefined>,

		/** The current state of the batch operation. */
		state: FormControl<BatchOperationMetadataState | null | undefined>,

		/** The time when the batch request was submitted to the server. */
		submitTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1BatchOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1BatchOperationMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BatchOperationMetadataState | null | undefined>(undefined),
			submitTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field. */
	export interface GoogleCloudVisionV1p4beta1ImportProductSetsResponse {

		/** The list of reference_images that are imported successfully. */
		referenceImages?: Array<GoogleCloudVisionV1p4beta1ReferenceImage>;

		/** The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0. */
		statuses?: Array<Status>;
	}

	/** Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field. */
	export interface GoogleCloudVisionV1p4beta1ImportProductSetsResponseFormProperties {
	}
	export function CreateGoogleCloudVisionV1p4beta1ImportProductSetsResponseFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ImportProductSetsResponseFormProperties>({
		});

	}


	/** A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes. */
	export interface GoogleCloudVisionV1p4beta1ReferenceImage {

		/** Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). */
		boundingPolys?: Array<GoogleCloudVisionV1p4beta1BoundingPoly>;

		/** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
		name?: string | null;

		/** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
		uri?: string | null;
	}

	/** A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes. */
	export interface GoogleCloudVisionV1p4beta1ReferenceImageFormProperties {

		/** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
		name: FormControl<string | null | undefined>,

		/** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1ReferenceImageFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1ReferenceImageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p4beta1OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string | null;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState | null;

		/** The time when the operation result was last updated. */
		updateTime?: string | null;
	}

	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p4beta1OperationMetadataFormProperties {

		/** The time when the batch request was received. */
		createTime: FormControl<string | null | undefined>,

		/** Current state of the batch operation. */
		state: FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>,

		/** The time when the operation result was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVisionV1p4beta1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudVisionV1p4beta1OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field. */
	export interface ImportProductSetsResponse {

		/** The list of reference_images that are imported successfully. */
		referenceImages?: Array<ReferenceImage>;

		/** The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0. */
		statuses?: Array<Status>;
	}

	/** Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field. */
	export interface ImportProductSetsResponseFormProperties {
	}
	export function CreateImportProductSetsResponseFormGroup() {
		return new FormGroup<ImportProductSetsResponseFormProperties>({
		});

	}


	/** A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes. */
	export interface ReferenceImage {

		/** Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). */
		boundingPolys?: Array<BoundingPoly>;

		/** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
		name?: string | null;

		/** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
		uri?: string | null;
	}

	/** A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes. */
	export interface ReferenceImageFormProperties {

		/** The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image. */
		name: FormControl<string | null | undefined>,

		/** Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateReferenceImageFormGroup() {
		return new FormGroup<ReferenceImageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string | null;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState | null;

		/** The time when the operation result was last updated. */
		updateTime?: string | null;
	}

	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface OperationMetadataFormProperties {

		/** The time when the batch request was received. */
		createTime: FormControl<string | null | undefined>,

		/** Current state of the batch operation. */
		state: FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>,

		/** The time when the operation result was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudVisionV1p1beta1OperationMetadataState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
		 * Post v1p2beta1/files:annotate
		 * @return {GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse} Successful response
		 */
		Vision_files_annotate(requestBody: GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest): Observable<GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse> {
			return this.http.post<GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse>(this.baseUri + 'v1p2beta1/files:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
		 * Post v1p2beta1/files:asyncBatchAnnotate
		 * @return {Operation} Successful response
		 */
		Vision_files_asyncBatchAnnotate(requestBody: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1p2beta1/files:asyncBatchAnnotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run image detection and annotation for a batch of images.
		 * Post v1p2beta1/images:annotate
		 * @return {GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse} Successful response
		 */
		Vision_images_annotate(requestBody: GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest): Observable<GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse> {
			return this.http.post<GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse>(this.baseUri + 'v1p2beta1/images:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
		 * Post v1p2beta1/images:asyncBatchAnnotate
		 * @return {Operation} Successful response
		 */
		Vision_images_asyncBatchAnnotate(requestBody: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1p2beta1/images:asyncBatchAnnotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
		 * Post v1p2beta1/{parent}/files:annotate
		 * @param {string} parent Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
		 * @return {GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse} Successful response
		 */
		Vision_projects_locations_files_annotate(parent: string, requestBody: GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest): Observable<GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse> {
			return this.http.post<GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse>(this.baseUri + 'v1p2beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/files:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
		 * Post v1p2beta1/{parent}/files:asyncBatchAnnotate
		 * @param {string} parent Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
		 * @return {Operation} Successful response
		 */
		Vision_projects_locations_files_asyncBatchAnnotate(parent: string, requestBody: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1p2beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/files:asyncBatchAnnotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run image detection and annotation for a batch of images.
		 * Post v1p2beta1/{parent}/images:annotate
		 * @param {string} parent Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
		 * @return {GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse} Successful response
		 */
		Vision_projects_locations_images_annotate(parent: string, requestBody: GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest): Observable<GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse> {
			return this.http.post<GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse>(this.baseUri + 'v1p2beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/images:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
		 * Post v1p2beta1/{parent}/images:asyncBatchAnnotate
		 * @param {string} parent Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.
		 * @return {Operation} Successful response
		 */
		Vision_projects_locations_images_asyncBatchAnnotate(parent: string, requestBody: GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1p2beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/images:asyncBatchAnnotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

