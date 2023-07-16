import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Request message for the `AddProductToProductSet` method. */
	export interface AddProductToProductSetRequest {

		/**
		 * Required. The resource name for the Product to be added to this ProductSet.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
		 */
		product?: string;
	}


	/** A request to annotate one single file, e.g. a PDF, TIFF or GIF file. */
	export interface AnnotateFileRequest {

		/** Required. Requested features. */
		features?: Array<Feature>;

		/** Image context and/or feature-specific parameters. */
		imageContext?: ImageContext;

		/** The desired input location and metadata. */
		inputConfig?: InputConfig;

		/**
		 * Pages of the file to perform image annotation.
		 * Pages starts from 1, we assume the first page of the file is page 1.
		 * At most 5 pages are supported per request. Pages can be negative.
		 * Page 1 means the first page.
		 * Page 2 means the second page.
		 * Page -1 means the last page.
		 * Page -2 means the second to the last page.
		 * If the file is GIF instead of PDF or TIFF, page refers to GIF frames.
		 * If this field is empty, by default the service performs image annotation
		 * for the first 5 pages of the file.
		 */
		pages?: Array<number>;
	}


	/**
	 * The type of Google Cloud Vision API detection to perform, and the maximum
	 * number of results to return for that type. Multiple `Feature` objects can
	 * be specified in the `features` list.
	 */
	export interface Feature {

		/**
		 * Maximum number of results of this type. Does not apply to
		 * `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
		 */
		maxResults?: number;

		/**
		 * Model to use for the feature.
		 * Supported values: "builtin/stable" (the default if unset) and
		 * "builtin/latest".
		 */
		model?: string;

		/** The feature type. */
		type?: FeatureType;
	}

	export enum FeatureType { TYPE_UNSPECIFIED = 0, FACE_DETECTION = 1, LANDMARK_DETECTION = 2, LOGO_DETECTION = 3, LABEL_DETECTION = 4, TEXT_DETECTION = 5, DOCUMENT_TEXT_DETECTION = 6, SAFE_SEARCH_DETECTION = 7, IMAGE_PROPERTIES = 8, CROP_HINTS = 9, WEB_DETECTION = 10, PRODUCT_SEARCH = 11, OBJECT_LOCALIZATION = 12 }


	/** Image context and/or feature-specific parameters. */
	export interface ImageContext {

		/** Parameters for crop hints annotation request. */
		cropHintsParams?: CropHintsParams;

		/**
		 * List of languages to use for TEXT_DETECTION. In most cases, an empty value
		 * yields the best results since it enables automatic language detection. For
		 * languages based on the Latin alphabet, setting `language_hints` is not
		 * needed. In rare cases, when the language of the text in the image is known,
		 * setting a hint will help get better results (although it will be a
		 * significant hindrance if the hint is wrong). Text detection returns an
		 * error if one or more of the specified languages is not one of the
		 * [supported languages](https://cloud.google.com/vision/docs/languages).
		 */
		languageHints?: Array<string>;

		/** Rectangle determined by min and max `LatLng` pairs. */
		latLongRect?: LatLongRect;

		/** Parameters for a product search request. */
		productSearchParams?: ProductSearchParams;

		/** Parameters for web detection request. */
		webDetectionParams?: WebDetectionParams;
	}


	/** Parameters for crop hints annotation request. */
	export interface CropHintsParams {

		/**
		 * Aspect ratios in floats, representing the ratio of the width to the height
		 * of the image. For example, if the desired aspect ratio is 4/3, the
		 * corresponding float value should be 1.33333.  If not specified, the
		 * best possible crop is returned. The number of provided aspect ratios is
		 * limited to a maximum of 16; any aspect ratios provided after the 16th are
		 * ignored.
		 */
		aspectRatios?: Array<number>;
	}


	/** Rectangle determined by min and max `LatLng` pairs. */
	export interface LatLongRect {

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		maxLatLng?: LatLng;

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		minLatLng?: LatLng;
	}


	/**
	 * An object representing a latitude/longitude pair. This is expressed as a pair
	 * of doubles representing degrees latitude and degrees longitude. Unless
	 * specified otherwise, this must conform to the
	 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
	 * standard</a>. Values must be within normalized ranges.
	 */
	export interface LatLng {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude?: number;

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude?: number;
	}


	/** Parameters for a product search request. */
	export interface ProductSearchParams {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/**
		 * The filtering expression. This can be used to restrict search results based
		 * on Product labels. We currently support an AND of OR of key-value
		 * expressions, where each expression within an OR must have the same key. An
		 * '=' should be used to connect the key and value.
		 * For example, "(color = red OR color = blue) AND brand = Google" is
		 * acceptable, but "(color = red OR brand = Google)" is not acceptable.
		 * "color: red" is not acceptable because it uses a ':' instead of an '='.
		 */
		filter?: string;

		/**
		 * The list of product categories to search in. Currently, we only consider
		 * the first category, and either "homegoods-v2", "apparel-v2", "toys-v2",
		 * "packagedgoods-v1", or "general-v1" should be specified. The legacy
		 * categories "homegoods", "apparel", and "toys" are still supported but will
		 * be deprecated. For new products, please use "homegoods-v2", "apparel-v2",
		 * or "toys-v2" for better product search accuracy. It is recommended to
		 * migrate existing products to these categories as well.
		 */
		productCategories?: Array<string>;

		/**
		 * The resource name of a ProductSet to be searched for similar images.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
		 */
		productSet?: string;
	}


	/** A bounding polygon for the detected image annotation. */
	export interface BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<Vertex>;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface NormalizedVertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the vertex coordinates are in the same scale as the original image.
	 */
	export interface Vertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/** Parameters for web detection request. */
	export interface WebDetectionParams {

		/** Whether to include results derived from the geo information in the image. */
		includeGeoResults?: boolean;
	}


	/** The desired input location and metadata. */
	export interface InputConfig {

		/**
		 * File content, represented as a stream of bytes.
		 * Note: As with all `bytes` fields, protobuffers use a pure binary
		 * representation, whereas JSON representations use base64.
		 * Currently, this field only works for BatchAnnotateFiles requests. It does
		 * not work for AsyncBatchAnnotateFiles requests.
		 */
		content?: string;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GcsSource;

		/**
		 * The type of the file. Currently only "application/pdf", "image/tiff" and
		 * "image/gif" are supported. Wildcards are not supported.
		 */
		mimeType?: string;
	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GcsSource {

		/**
		 * Google Cloud Storage URI for the input file. This must only be a
		 * Google Cloud Storage object. Wildcards are not currently supported.
		 */
		uri?: string;
	}


	/**
	 * Response to a single file annotation request. A file may contain one or more
	 * images, which individually have their own responses.
	 */
	export interface AnnotateFileResponse {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: InputConfig;

		/**
		 * Individual responses to images found within the file. This field will be
		 * empty if the `error` field is set.
		 */
		responses?: Array<AnnotateImageResponse>;

		/** This field gives the total number of pages in the file. */
		totalPages?: number;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/** Response to an image annotation request. */
	export interface AnnotateImageResponse {

		/**
		 * If an image was produced from a file (e.g. a PDF), this message gives
		 * information about the source of that image.
		 */
		context?: ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: CropHintsAnnotation;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<FaceAnnotation>;

		/**
		 * TextAnnotation contains a structured representation of OCR extracted text.
		 * The hierarchy of an OCR extracted text structure is like this:
		 * TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
		 * Each structural component, starting from Page, may further have their own
		 * properties. Properties describe detected languages, breaks etc.. Please refer
		 * to the TextAnnotation.TextProperty message definition below for more
		 * detail.
		 */
		fullTextAnnotation?: TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<EntityAnnotation>;

		/**
		 * If present, localized object detection has completed successfully.
		 * This will be sorted descending by confidence score.
		 */
		localizedObjectAnnotations?: Array<LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: ProductSearchResults;

		/**
		 * Set of features pertaining to the image, computed by computer vision
		 * methods over safe-search verticals (for example, adult, spoof, medical,
		 * violence).
		 */
		safeSearchAnnotation?: SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: WebDetection;
	}


	/**
	 * If an image was produced from a file (e.g. a PDF), this message gives
	 * information about the source of that image.
	 */
	export interface ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within
		 * the file used to produce the image.
		 */
		pageNumber?: number;

		/** The URI of the file used to produce the image. */
		uri?: string;
	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<CropHint>;
	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/** Confidence of this being a salient region.  Range [0, 1]. */
		confidence?: number;

		/**
		 * Fraction of importance of this salient region with respect to the original
		 * image.
		 */
		importanceFraction?: number;
	}


	/** A face annotation object contains the results of face detection. */
	export interface FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/** Detection confidence. Range [0, 1]. */
		detectionConfidence?: number;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood;

		/** Face landmarking confidence. Range [0, 1]. */
		landmarkingConfidence?: number;

		/** Detected face landmarks. */
		landmarks?: Array<Landmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is
		 * pointing relative to the vertical plane perpendicular to the image. Range
		 * [-180,180].
		 */
		panAngle?: number;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation
		 * of the face relative to the image vertical about the axis perpendicular to
		 * the face. Range [-180,180].
		 */
		rollAngle?: number;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is
		 * pointing relative to the image's horizontal plane. Range [-180,180].
		 */
		tiltAngle?: number;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood;
	}

	export enum FaceAnnotationAngerLikelihood { UNKNOWN = 0, VERY_UNLIKELY = 1, UNLIKELY = 2, POSSIBLE = 3, LIKELY = 4, VERY_LIKELY = 5 }


	/** A face-specific landmark (for example, a face feature). */
	export interface Landmark {

		/**
		 * A 3D position in the image, used primarily for Face detection landmarks.
		 * A valid Position must have both x and y coordinates.
		 * The position coordinates are in the same scale as the original image.
		 */
		position?: Position;

		/** Face landmark type. */
		type?: LandmarkType;
	}


	/**
	 * A 3D position in the image, used primarily for Face detection landmarks.
	 * A valid Position must have both x and y coordinates.
	 * The position coordinates are in the same scale as the original image.
	 */
	export interface Position {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;

		/** Z coordinate (or depth). */
		z?: number;
	}

	export enum LandmarkType { UNKNOWN_LANDMARK = 0, LEFT_EYE = 1, RIGHT_EYE = 2, LEFT_OF_LEFT_EYEBROW = 3, RIGHT_OF_LEFT_EYEBROW = 4, LEFT_OF_RIGHT_EYEBROW = 5, RIGHT_OF_RIGHT_EYEBROW = 6, MIDPOINT_BETWEEN_EYES = 7, NOSE_TIP = 8, UPPER_LIP = 9, LOWER_LIP = 10, MOUTH_LEFT = 11, MOUTH_RIGHT = 12, MOUTH_CENTER = 13, NOSE_BOTTOM_RIGHT = 14, NOSE_BOTTOM_LEFT = 15, NOSE_BOTTOM_CENTER = 16, LEFT_EYE_TOP_BOUNDARY = 17, LEFT_EYE_RIGHT_CORNER = 18, LEFT_EYE_BOTTOM_BOUNDARY = 19, LEFT_EYE_LEFT_CORNER = 20, RIGHT_EYE_TOP_BOUNDARY = 21, RIGHT_EYE_RIGHT_CORNER = 22, RIGHT_EYE_BOTTOM_BOUNDARY = 23, RIGHT_EYE_LEFT_CORNER = 24, LEFT_EYEBROW_UPPER_MIDPOINT = 25, RIGHT_EYEBROW_UPPER_MIDPOINT = 26, LEFT_EAR_TRAGION = 27, RIGHT_EAR_TRAGION = 28, LEFT_EYE_PUPIL = 29, RIGHT_EYE_PUPIL = 30, FOREHEAD_GLABELLA = 31, CHIN_GNATHION = 32, CHIN_LEFT_GONION = 33, CHIN_RIGHT_GONION = 34 }


	/**
	 * TextAnnotation contains a structured representation of OCR extracted text.
	 * The hierarchy of an OCR extracted text structure is like this:
	 *     TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
	 * Each structural component, starting from Page, may further have their own
	 * properties. Properties describe detected languages, breaks etc.. Please refer
	 * to the TextAnnotation.TextProperty message definition below for more
	 * detail.
	 */
	export interface TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<Page>;

		/** UTF-8 text detected on the pages. */
		text?: string;
	}


	/** Detected page from OCR. */
	export interface Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<Block>;

		/** Confidence of the OCR results on the page. Range [0, 1]. */
		confidence?: number;

		/**
		 * Page height. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		height?: number;

		/** Additional information detected on the structural component. */
		property?: TextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		width?: number;
	}


	/** Logical element on the page. */
	export interface Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: BoundingPoly;

		/** Confidence of the OCR results on the block. Range [0, 1]. */
		confidence?: number;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<Paragraph>;

		/** Additional information detected on the structural component. */
		property?: TextProperty;
	}

	export enum BlockBlockType { UNKNOWN = 0, TEXT = 1, TABLE = 2, PICTURE = 3, RULER = 4, BARCODE = 5 }


	/** Structural unit of text representing a number of words in certain order. */
	export interface Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: BoundingPoly;

		/** Confidence of the OCR results for the paragraph. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: TextProperty;

		/** List of all words in this paragraph. */
		words?: Array<Word>;
	}


	/** Additional information detected on the structural component. */
	export interface TextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: DetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<DetectedLanguage>;
	}


	/** Detected start or end of a structural component. */
	export interface DetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean;

		/** Detected break type. */
		type?: DetectedBreakType;
	}

	export enum DetectedBreakType { UNKNOWN = 0, SPACE = 1, SURE_SPACE = 2, EOL_SURE_SPACE = 3, HYPHEN = 4, LINE_BREAK = 5 }


	/** Detected language for a structural component. */
	export interface DetectedLanguage {

		/** Confidence of detected language. Range [0, 1]. */
		confidence?: number;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** A word representation. */
	export interface Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: BoundingPoly;

		/** Confidence of the OCR results for the word. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: TextProperty;

		/**
		 * List of symbols in the word.
		 * The order of the symbols follows the natural reading order.
		 */
		symbols?: Array<Symbol>;
	}


	/** A single symbol representation. */
	export interface Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: BoundingPoly;

		/** Confidence of the OCR results for the symbol. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: TextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string;
	}


	/** Stores image properties, such as dominant colors. */
	export interface ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: DominantColorsAnnotation;
	}


	/** Set of dominant colors and their corresponding scores. */
	export interface DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<ColorInfo>;
	}


	/**
	 * Color information consists of RGB channels, score, and the fraction of
	 * the image that the color occupies in the image.
	 */
	export interface ColorInfo {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image.
		 * Value in range [0, 1].
		 */
		pixelFraction?: number;

		/** Image-specific score for this color. Value in range [0, 1]. */
		score?: number;
	}


	/**
	 * Represents a color in the RGBA color space. This representation is designed
	 * for simplicity of conversion to/from color representations in various
	 * languages over compactness; for example, the fields of this representation
	 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
	 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
	 * method in iOS; and, with just a little work, it can be easily formatted into
	 * a CSS "rgba()" string in JavaScript, as well.
	 * Note: this proto does not carry information about the absolute color space
	 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
	 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
	 * space.
	 * Example (Java):
	 *      import com.google.type.Color;
	 *      // ...
	 *      public static java.awt.Color fromProto(Color protocolor) {
	 *        float alpha = protocolor.hasAlpha()
	 *            ? protocolor.getAlpha().getValue()
	 *            : 1.0;
	 *        return new java.awt.Color(
	 *            protocolor.getRed(),
	 *            protocolor.getGreen(),
	 *            protocolor.getBlue(),
	 *            alpha);
	 *      }
	 *      public static Color toProto(java.awt.Color color) {
	 *        float red = (float) color.getRed();
	 *        float green = (float) color.getGreen();
	 *        float blue = (float) color.getBlue();
	 *        float denominator = 255.0;
	 *        Color.Builder resultBuilder =
	 *            Color
	 *                .newBuilder()
	 *                .setRed(red / denominator)
	 *                .setGreen(green / denominator)
	 *                .setBlue(blue / denominator);
	 *        int alpha = color.getAlpha();
	 *        if (alpha != 255) {
	 *          result.setAlpha(
	 *              FloatValue
	 *                  .newBuilder()
	 *                  .setValue(((float) alpha) / denominator)
	 *                  .build());
	 *        }
	 *        return resultBuilder.build();
	 *      }
	 *      // ...
	 * Example (iOS / Obj-C):
	 *      // ...
	 *      static UIColor* fromProto(Color* protocolor) {
	 *         float red = [protocolor red];
	 *         float green = [protocolor green];
	 *         float blue = [protocolor blue];
	 *         FloatValue* alpha_wrapper = [protocolor alpha];
	 *         float alpha = 1.0;
	 *         if (alpha_wrapper != nil) {
	 *           alpha = [alpha_wrapper value];
	 *         }
	 *         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
	 *      }
	 *      static Color* toProto(UIColor* color) {
	 *          CGFloat red, green, blue, alpha;
	 *          if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
	 *            return nil;
	 *          }
	 *          Color* result = [[Color alloc] init];
	 *          [result setRed:red];
	 *          [result setGreen:green];
	 *          [result setBlue:blue];
	 *          if (alpha <= 0.9999) {
	 *            [result setAlpha:floatWrapperWithValue(alpha)];
	 *          }
	 *          [result autorelease];
	 *          return result;
	 *     }
	 *     // ...
	 *  Example (JavaScript):
	 *     // ...
	 *     var protoToCssColor = function(rgb_color) {
	 *        var redFrac = rgb_color.red || 0.0;
	 *        var greenFrac = rgb_color.green || 0.0;
	 *        var blueFrac = rgb_color.blue || 0.0;
	 *        var red = Math.floor(redFrac * 255);
	 *        var green = Math.floor(greenFrac * 255);
	 *        var blue = Math.floor(blueFrac * 255);
	 *        if (!('alpha' in rgb_color)) {
	 *           return rgbToCssColor_(red, green, blue);
	 *        }
	 *        var alphaFrac = rgb_color.alpha.value || 0.0;
	 *        var rgbParams = [red, green, blue].join(',');
	 *        return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
	 *     };
	 *     var rgbToCssColor_ = function(red, green, blue) {
	 *       var rgbNumber = new Number((red << 16) | (green << 8) | blue);
	 *       var hexString = rgbNumber.toString(16);
	 *       var missingZeros = 6 - hexString.length;
	 *       var resultBuilder = ['#'];
	 *       for (var i = 0; i < missingZeros; i++) {
	 *          resultBuilder.push('0');
	 *       }
	 *       resultBuilder.push(hexString);
	 *       return resultBuilder.join('');
	 *     };
	 *     // ...
	 */
	export interface Color {

		/**
		 * The fraction of this color that should be applied to the pixel. That is,
		 * the final pixel color is defined by the equation:
		 * pixel color = alpha * (this color) + (1.0 - alpha) * (background color)
		 * This means that a value of 1.0 corresponds to a solid color, whereas
		 * a value of 0.0 corresponds to a completely transparent color. This
		 * uses a wrapper message rather than a simple float scalar so that it is
		 * possible to distinguish between a default value and the value being unset.
		 * If omitted, this color object is to be rendered as a solid color
		 * (as if the alpha value had been explicitly given with a value of 1.0).
		 */
		alpha?: number;

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue?: number;

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green?: number;

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red?: number;
	}


	/** Set of detected entity features. */
	export interface EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.**
		 * The accuracy of the entity detection in an image.
		 * For example, for an image in which the "Eiffel Tower" entity is detected,
		 * this field represents the confidence that there is a tower in the query
		 * image. Range [0, 1].
		 */
		confidence?: number;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string;

		/**
		 * The language code for the locale in which the entity textual
		 * `description` is expressed.
		 */
		locale?: string;

		/**
		 * The location information for the detected entity. Multiple
		 * `LocationInfo` elements can be present because one location may
		 * indicate the location of the scene in the image, and another location
		 * may indicate the location of the place where the image was taken.
		 * Location information is usually present for landmarks.
		 */
		locations?: Array<LocationInfo>;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		mid?: string;

		/**
		 * Some entities may have optional user-supplied `Property` (name/value)
		 * fields, such a score or string that qualifies the entity.
		 */
		properties?: Array<Property>;

		/** Overall score of the result. Range [0, 1]. */
		score?: number;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the
		 * image. For example, the relevancy of "tower" is likely higher to an image
		 * containing the detected "Eiffel Tower" than to an image containing a
		 * detected distant towering building, even though the confidence that
		 * there is a tower in each image may be the same. Range [0, 1].
		 */
		topicality?: number;
	}


	/** Detected entity location information. */
	export interface LocationInfo {

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		latLng?: LatLng;
	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface Property {

		/** Name of the property. */
		name?: string;

		/** Value of numeric properties. */
		uint64Value?: string;

		/** Value of the property. */
		value?: string;
	}


	/** Set of detected objects with bounding boxes. */
	export interface LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Results for a product search request. */
	export interface ProductSearchResults {

		/**
		 * Timestamp of the index which provided these results. Products added to the
		 * product set and products removed from the product set after this time are
		 * not reflected in the current results.
		 */
		indexTime?: string;

		/**
		 * List of results grouped by products detected in the query image. Each entry
		 * corresponds to one bounding polygon in the query image, and contains the
		 * matching products specific to that region. There may be duplicate product
		 * matches in the union of all the per-product results.
		 */
		productGroupedResults?: Array<GroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<Result>;
	}


	/**
	 * Information about the products similar to a single product in a query
	 * image.
	 */
	export interface GroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<ObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<Result>;
	}


	/** Prediction for what the object in the bounding box is. */
	export interface ObjectAnnotation {

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Information about a product. */
	export interface Result {

		/**
		 * The resource name of the image from the product that is the closest match
		 * to the query.
		 */
		image?: string;

		/** A Product contains ReferenceImages. */
		product?: Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to
		 * 1 (full confidence).
		 */
		score?: number;
	}


	/** A Product contains ReferenceImages. */
	export interface Product {

		/**
		 * User-provided metadata to be stored with this product. Must be at most 4096
		 * characters long.
		 */
		description?: string;

		/**
		 * The user-provided name for this Product. Must not be empty. Must be at most
		 * 4096 characters long.
		 */
		displayName?: string;

		/**
		 * The resource name of the product.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
		 * This field is ignored when creating a product.
		 */
		name?: string;

		/**
		 * Immutable. The category for the product identified by the reference image. This should
		 * be either "homegoods-v2", "apparel-v2", or "toys-v2". The legacy categories
		 * "homegoods", "apparel", and "toys" are still supported, but these should
		 * not be used for new products.
		 */
		productCategory?: string;

		/**
		 * Key-value pairs that can be attached to a product. At query time,
		 * constraints can be specified based on the product_labels.
		 * Note that integer values can be provided as strings, e.g. "1199". Only
		 * strings with integer values can match a range-based restriction which is
		 * to be supported soon.
		 * Multiple values can be assigned to the same key. One product may have up to
		 * 500 product_labels.
		 * Notice that the total number of distinct product_labels over all products
		 * in one ProductSet cannot exceed 1M, otherwise the product search pipeline
		 * will refuse to work for that ProductSet.
		 */
		productLabels?: Array<KeyValue>;
	}


	/** A product label represented as a key-value pair. */
	export interface KeyValue {

		/**
		 * The key of the label attached to the product. Cannot be empty and cannot
		 * exceed 128 bytes.
		 */
		key?: string;

		/**
		 * The value of the label attached to the product. Cannot be empty and
		 * cannot exceed 128 bytes.
		 */
		value?: string;
	}


	/**
	 * Set of features pertaining to the image, computed by computer vision
	 * methods over safe-search verticals (for example, adult, spoof, medical,
	 * violence).
	 */
	export interface SafeSearchAnnotation {

		/**
		 * Represents the adult content likelihood for the image. Adult content may
		 * contain elements such as nudity, pornographic images or cartoons, or
		 * sexual activities.
		 */
		adult?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood;

		/**
		 * Likelihood that the request image contains racy content. Racy content may
		 * include (but is not limited to) skimpy or sheer clothing, strategically
		 * covered nudity, lewd or provocative poses, or close-ups of sensitive
		 * body areas.
		 */
		racy?: FaceAnnotationAngerLikelihood;

		/**
		 * Spoof likelihood. The likelihood that an modification
		 * was made to the image's canonical version to make it appear
		 * funny or offensive.
		 */
		spoof?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this image contains violent content. */
		violence?: FaceAnnotationAngerLikelihood;
	}


	/** Relevant information for the image from the Internet. */
	export interface WebDetection {

		/**
		 * The service's best guess as to the topic of the request image.
		 * Inferred from similar images on the open web.
		 */
		bestGuessLabels?: Array<WebLabel>;

		/**
		 * Fully matching images from the Internet.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<WebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<WebPage>;

		/**
		 * Partial matching images from the Internet.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its crops.
		 */
		partialMatchingImages?: Array<WebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<WebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<WebEntity>;
	}


	/** Label to provide extra metadata for the web detection. */
	export interface WebLabel {

		/** Label for extra metadata. */
		label?: string;

		/**
		 * The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".
		 * For more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** Metadata for online images. */
	export interface WebImage {

		/** (Deprecated) Overall relevancy score for the image. */
		score?: number;

		/** The result image URL. */
		url?: string;
	}


	/** Metadata for web pages. */
	export interface WebPage {

		/**
		 * Fully matching images on the page.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<WebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string;

		/**
		 * Partial matching images on the page.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its
		 * crops.
		 */
		partialMatchingImages?: Array<WebImage>;

		/** (Deprecated) Overall relevancy score for the web page. */
		score?: number;

		/** The result web page URL. */
		url?: string;
	}


	/** Entity deduced from similar images on the Internet. */
	export interface WebEntity {

		/** Canonical description of the entity, in English. */
		description?: string;

		/** Opaque entity ID. */
		entityId?: string;

		/**
		 * Overall relevancy score for the entity.
		 * Not normalized and not comparable across different image queries.
		 */
		score?: number;
	}


	/**
	 * Request for performing Google Cloud Vision API tasks over a user-provided
	 * image, with user-requested features, and with context information.
	 */
	export interface AnnotateImageRequest {

		/** Requested features. */
		features?: Array<Feature>;

		/** Client image to perform Google Cloud Vision API tasks over. */
		image?: Image;

		/** Image context and/or feature-specific parameters. */
		imageContext?: ImageContext;
	}


	/** Client image to perform Google Cloud Vision API tasks over. */
	export interface Image {

		/**
		 * Image content, represented as a stream of bytes.
		 * Note: As with all `bytes` fields, protobuffers use a pure binary
		 * representation, whereas JSON representations use base64.
		 */
		content?: string;

		/** External image source (Google Cloud Storage or web URL image location). */
		source?: ImageSource;
	}


	/** External image source (Google Cloud Storage or web URL image location). */
	export interface ImageSource {

		/**
		 * **Use `image_uri` instead.**
		 * The Google Cloud Storage  URI of the form
		 * `gs://bucket_name/object_name`. Object versioning is not supported. See
		 * [Google Cloud Storage Request
		 * URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.
		 */
		gcsImageUri?: string;

		/**
		 * The URI of the source image. Can be either:
		 * 1. A Google Cloud Storage URI of the form
		 * `gs://bucket_name/object_name`. Object versioning is not supported. See
		 * [Google Cloud Storage Request
		 * URIs](https://cloud.google.com/storage/docs/reference-uris) for more
		 * info.
		 * 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from
		 * HTTP/HTTPS URLs, Google cannot guarantee that the request will be
		 * completed. Your request may fail if the specified host denies the
		 * request (e.g. due to request throttling or DOS prevention), or if Google
		 * throttles requests to the site for abuse prevention. You should not
		 * depend on externally-hosted images for production applications.
		 * When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes
		 * precedence.
		 */
		imageUri?: string;
	}


	/** An offline file annotation request. */
	export interface AsyncAnnotateFileRequest {

		/** Required. Requested features. */
		features?: Array<Feature>;

		/** Image context and/or feature-specific parameters. */
		imageContext?: ImageContext;

		/** The desired input location and metadata. */
		inputConfig?: InputConfig;

		/** The desired output location and metadata. */
		outputConfig?: OutputConfig;
	}


	/** The desired output location and metadata. */
	export interface OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on
		 * Google Cloud Storage.
		 * The valid range is [1, 100]. If not specified, the default value is 20.
		 * For example, for one pdf file with 100 pages, 100 response protos will
		 * be generated. If `batch_size` = 20, then 5 json files each
		 * containing 20 response protos will be written under the prefix
		 * `gcs_destination`.`uri`.
		 * Currently, batch_size only applies to GcsDestination, with potential future
		 * support for other output configurations.
		 */
		batchSize?: number;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GcsDestination;
	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GcsDestination {

		/**
		 * Google Cloud Storage URI prefix where the results will be stored. Results
		 * will be in JSON format and preceded by its corresponding input URI prefix.
		 * This field can either represent a gcs file prefix or gcs directory. In
		 * either case, the uri should be unique because in order to get all of the
		 * output files, you will need to do a wildcard gcs search on the uri prefix
		 * you provide.
		 * Examples:
		 * *    File Prefix: gs://bucket-name/here/filenameprefix   The output files
		 * will be created in gs://bucket-name/here/ and the names of the
		 * output files will begin with "filenameprefix".
		 * *    Directory Prefix: gs://bucket-name/some/location/   The output files
		 * will be created in gs://bucket-name/some/location/ and the names of the
		 * output files could be anything because there was no filename prefix
		 * specified.
		 * If multiple outputs, each response is still AnnotateFileResponse, each of
		 * which contains some subset of the full list of AnnotateImageResponse.
		 * Multiple outputs can happen if, for example, the output JSON is too large
		 * and overflows into multiple sharded files.
		 */
		uri?: string;
	}


	/** The response for a single offline file annotation request. */
	export interface AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: OutputConfig;
	}


	/**
	 * Multiple async file annotation requests are batched into a single service
	 * call.
	 */
	export interface AsyncBatchAnnotateFilesRequest {

		/**
		 * Optional. Target project and location to make a call.
		 * Format: `projects/{project-id}/locations/{location-id}`.
		 * If no parent is specified, a region will be chosen automatically.
		 * Supported location-ids:
		 * `us`: USA country only,
		 * `asia`: East asia areas, like Japan, Taiwan,
		 * `eu`: The European Union.
		 * Example: `projects/project-A/locations/eu`.
		 */
		parent?: string;

		/** Required. Individual async file annotation requests for this batch. */
		requests?: Array<AsyncAnnotateFileRequest>;
	}


	/** Response to an async batch file annotation request. */
	export interface AsyncBatchAnnotateFilesResponse {

		/**
		 * The list of file annotation responses, one for each request in
		 * AsyncBatchAnnotateFilesRequest.
		 */
		responses?: Array<AsyncAnnotateFileResponse>;
	}


	/** Request for async image annotation for a list of images. */
	export interface AsyncBatchAnnotateImagesRequest {

		/** The desired output location and metadata. */
		outputConfig?: OutputConfig;

		/**
		 * Optional. Target project and location to make a call.
		 * Format: `projects/{project-id}/locations/{location-id}`.
		 * If no parent is specified, a region will be chosen automatically.
		 * Supported location-ids:
		 * `us`: USA country only,
		 * `asia`: East asia areas, like Japan, Taiwan,
		 * `eu`: The European Union.
		 * Example: `projects/project-A/locations/eu`.
		 */
		parent?: string;

		/** Required. Individual image annotation requests for this batch. */
		requests?: Array<AnnotateImageRequest>;
	}


	/** Response to an async batch image annotation request. */
	export interface AsyncBatchAnnotateImagesResponse {

		/** The desired output location and metadata. */
		outputConfig?: OutputConfig;
	}


	/** A list of requests to annotate files using the BatchAnnotateFiles API. */
	export interface BatchAnnotateFilesRequest {

		/**
		 * Optional. Target project and location to make a call.
		 * Format: `projects/{project-id}/locations/{location-id}`.
		 * If no parent is specified, a region will be chosen automatically.
		 * Supported location-ids:
		 * `us`: USA country only,
		 * `asia`: East asia areas, like Japan, Taiwan,
		 * `eu`: The European Union.
		 * Example: `projects/project-A/locations/eu`.
		 */
		parent?: string;

		/**
		 * Required. The list of file annotation requests. Right now we support only one
		 * AnnotateFileRequest in BatchAnnotateFilesRequest.
		 */
		requests?: Array<AnnotateFileRequest>;
	}


	/** A list of file annotation responses. */
	export interface BatchAnnotateFilesResponse {

		/**
		 * The list of file annotation responses, each response corresponding to each
		 * AnnotateFileRequest in BatchAnnotateFilesRequest.
		 */
		responses?: Array<AnnotateFileResponse>;
	}


	/** Multiple image annotation requests are batched into a single service call. */
	export interface BatchAnnotateImagesRequest {

		/**
		 * Optional. Target project and location to make a call.
		 * Format: `projects/{project-id}/locations/{location-id}`.
		 * If no parent is specified, a region will be chosen automatically.
		 * Supported location-ids:
		 * `us`: USA country only,
		 * `asia`: East asia areas, like Japan, Taiwan,
		 * `eu`: The European Union.
		 * Example: `projects/project-A/locations/eu`.
		 */
		parent?: string;

		/** Required. Individual image annotation requests for this batch. */
		requests?: Array<AnnotateImageRequest>;
	}


	/** Response to a batch image annotation request. */
	export interface BatchAnnotateImagesResponse {

		/** Individual responses to image annotation requests within the batch. */
		responses?: Array<AnnotateImageResponse>;
	}


	/**
	 * Metadata for the batch operations such as the current state.
	 * This is included in the `metadata` field of the `Operation` returned by the
	 * `GetOperation` call of the `google::longrunning::Operations` service.
	 */
	export interface BatchOperationMetadata {

		/**
		 * The time when the batch request is finished and
		 * google.longrunning.Operation.done is set to true.
		 */
		endTime?: string;

		/** The current state of the batch operation. */
		state?: BatchOperationMetadataState;

		/** The time when the batch request was submitted to the server. */
		submitTime?: string;
	}

	export enum BatchOperationMetadataState { STATE_UNSPECIFIED = 0, PROCESSING = 1, SUCCESSFUL = 2, FAILED = 3, CANCELLED = 4 }


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/**
	 * Response to a single file annotation request. A file may contain one or more
	 * images, which individually have their own responses.
	 */
	export interface GoogleCloudVisionV1p1beta1AnnotateFileResponse {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;

		/**
		 * Individual responses to images found within the file. This field will be
		 * empty if the `error` field is set.
		 */
		responses?: Array<GoogleCloudVisionV1p1beta1AnnotateImageResponse>;

		/** This field gives the total number of pages in the file. */
		totalPages?: number;
	}


	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p1beta1InputConfig {

		/**
		 * File content, represented as a stream of bytes.
		 * Note: As with all `bytes` fields, protobuffers use a pure binary
		 * representation, whereas JSON representations use base64.
		 * Currently, this field only works for BatchAnnotateFiles requests. It does
		 * not work for AsyncBatchAnnotateFiles requests.
		 */
		content?: string;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GoogleCloudVisionV1p1beta1GcsSource;

		/**
		 * The type of the file. Currently only "application/pdf", "image/tiff" and
		 * "image/gif" are supported. Wildcards are not supported.
		 */
		mimeType?: string;
	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p1beta1GcsSource {

		/**
		 * Google Cloud Storage URI for the input file. This must only be a
		 * Google Cloud Storage object. Wildcards are not currently supported.
		 */
		uri?: string;
	}


	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p1beta1AnnotateImageResponse {

		/**
		 * If an image was produced from a file (e.g. a PDF), this message gives
		 * information about the source of that image.
		 */
		context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<GoogleCloudVisionV1p1beta1FaceAnnotation>;

		/**
		 * TextAnnotation contains a structured representation of OCR extracted text.
		 * The hierarchy of an OCR extracted text structure is like this:
		 * TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
		 * Each structural component, starting from Page, may further have their own
		 * properties. Properties describe detected languages, breaks etc.. Please refer
		 * to the TextAnnotation.TextProperty message definition below for more
		 * detail.
		 */
		fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<GoogleCloudVisionV1p1beta1EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<GoogleCloudVisionV1p1beta1EntityAnnotation>;

		/**
		 * If present, localized object detection has completed successfully.
		 * This will be sorted descending by confidence score.
		 */
		localizedObjectAnnotations?: Array<GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<GoogleCloudVisionV1p1beta1EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults;

		/**
		 * Set of features pertaining to the image, computed by computer vision
		 * methods over safe-search verticals (for example, adult, spoof, medical,
		 * violence).
		 */
		safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<GoogleCloudVisionV1p1beta1EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: GoogleCloudVisionV1p1beta1WebDetection;
	}


	/**
	 * If an image was produced from a file (e.g. a PDF), this message gives
	 * information about the source of that image.
	 */
	export interface GoogleCloudVisionV1p1beta1ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within
		 * the file used to produce the image.
		 */
		pageNumber?: number;

		/** The URI of the file used to produce the image. */
		uri?: string;
	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p1beta1CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<GoogleCloudVisionV1p1beta1CropHint>;
	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p1beta1CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** Confidence of this being a salient region.  Range [0, 1]. */
		confidence?: number;

		/**
		 * Fraction of importance of this salient region with respect to the original
		 * image.
		 */
		importanceFraction?: number;
	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p1beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudVisionV1p1beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudVisionV1p1beta1Vertex>;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVisionV1p1beta1NormalizedVertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the vertex coordinates are in the same scale as the original image.
	 */
	export interface GoogleCloudVisionV1p1beta1Vertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p1beta1FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** Detection confidence. Range [0, 1]. */
		detectionConfidence?: number;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood;

		/** Face landmarking confidence. Range [0, 1]. */
		landmarkingConfidence?: number;

		/** Detected face landmarks. */
		landmarks?: Array<GoogleCloudVisionV1p1beta1FaceAnnotationLandmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is
		 * pointing relative to the vertical plane perpendicular to the image. Range
		 * [-180,180].
		 */
		panAngle?: number;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation
		 * of the face relative to the image vertical about the axis perpendicular to
		 * the face. Range [-180,180].
		 */
		rollAngle?: number;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is
		 * pointing relative to the image's horizontal plane. Range [-180,180].
		 */
		tiltAngle?: number;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood;
	}


	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p1beta1FaceAnnotationLandmark {

		/**
		 * A 3D position in the image, used primarily for Face detection landmarks.
		 * A valid Position must have both x and y coordinates.
		 * The position coordinates are in the same scale as the original image.
		 */
		position?: GoogleCloudVisionV1p1beta1Position;

		/** Face landmark type. */
		type?: LandmarkType;
	}


	/**
	 * A 3D position in the image, used primarily for Face detection landmarks.
	 * A valid Position must have both x and y coordinates.
	 * The position coordinates are in the same scale as the original image.
	 */
	export interface GoogleCloudVisionV1p1beta1Position {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;

		/** Z coordinate (or depth). */
		z?: number;
	}


	/**
	 * TextAnnotation contains a structured representation of OCR extracted text.
	 * The hierarchy of an OCR extracted text structure is like this:
	 *     TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
	 * Each structural component, starting from Page, may further have their own
	 * properties. Properties describe detected languages, breaks etc.. Please refer
	 * to the TextAnnotation.TextProperty message definition below for more
	 * detail.
	 */
	export interface GoogleCloudVisionV1p1beta1TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<GoogleCloudVisionV1p1beta1Page>;

		/** UTF-8 text detected on the pages. */
		text?: string;
	}


	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p1beta1Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<GoogleCloudVisionV1p1beta1Block>;

		/** Confidence of the OCR results on the page. Range [0, 1]. */
		confidence?: number;

		/**
		 * Page height. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		height?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		width?: number;
	}


	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p1beta1Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** Confidence of the OCR results on the block. Range [0, 1]. */
		confidence?: number;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<GoogleCloudVisionV1p1beta1Paragraph>;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
	}


	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p1beta1Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** Confidence of the OCR results for the paragraph. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

		/** List of all words in this paragraph. */
		words?: Array<GoogleCloudVisionV1p1beta1Word>;
	}


	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationTextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage>;
	}


	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean;

		/** Detected break type. */
		type?: DetectedBreakType;
	}


	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage {

		/** Confidence of detected language. Range [0, 1]. */
		confidence?: number;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** A word representation. */
	export interface GoogleCloudVisionV1p1beta1Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** Confidence of the OCR results for the word. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

		/**
		 * List of symbols in the word.
		 * The order of the symbols follows the natural reading order.
		 */
		symbols?: Array<GoogleCloudVisionV1p1beta1Symbol>;
	}


	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p1beta1Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** Confidence of the OCR results for the symbol. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string;
	}


	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p1beta1ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: GoogleCloudVisionV1p1beta1DominantColorsAnnotation;
	}


	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p1beta1DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<GoogleCloudVisionV1p1beta1ColorInfo>;
	}


	/**
	 * Color information consists of RGB channels, score, and the fraction of
	 * the image that the color occupies in the image.
	 */
	export interface GoogleCloudVisionV1p1beta1ColorInfo {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image.
		 * Value in range [0, 1].
		 */
		pixelFraction?: number;

		/** Image-specific score for this color. Value in range [0, 1]. */
		score?: number;
	}


	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p1beta1EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.**
		 * The accuracy of the entity detection in an image.
		 * For example, for an image in which the "Eiffel Tower" entity is detected,
		 * this field represents the confidence that there is a tower in the query
		 * image. Range [0, 1].
		 */
		confidence?: number;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string;

		/**
		 * The language code for the locale in which the entity textual
		 * `description` is expressed.
		 */
		locale?: string;

		/**
		 * The location information for the detected entity. Multiple
		 * `LocationInfo` elements can be present because one location may
		 * indicate the location of the scene in the image, and another location
		 * may indicate the location of the place where the image was taken.
		 * Location information is usually present for landmarks.
		 */
		locations?: Array<GoogleCloudVisionV1p1beta1LocationInfo>;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		mid?: string;

		/**
		 * Some entities may have optional user-supplied `Property` (name/value)
		 * fields, such a score or string that qualifies the entity.
		 */
		properties?: Array<GoogleCloudVisionV1p1beta1Property>;

		/** Overall score of the result. Range [0, 1]. */
		score?: number;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the
		 * image. For example, the relevancy of "tower" is likely higher to an image
		 * containing the detected "Eiffel Tower" than to an image containing a
		 * detected distant towering building, even though the confidence that
		 * there is a tower in each image may be the same. Range [0, 1].
		 */
		topicality?: number;
	}


	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p1beta1LocationInfo {

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		latLng?: LatLng;
	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p1beta1Property {

		/** Name of the property. */
		name?: string;

		/** Value of numeric properties. */
		uint64Value?: string;

		/** Value of the property. */
		value?: string;
	}


	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResults {

		/**
		 * Timestamp of the index which provided these results. Products added to the
		 * product set and products removed from the product set after this time are
		 * not reflected in the current results.
		 */
		indexTime?: string;

		/**
		 * List of results grouped by products detected in the query image. Each entry
		 * corresponds to one bounding polygon in the query image, and contains the
		 * matching products specific to that region. There may be duplicate product
		 * matches in the union of all the per-product results.
		 */
		productGroupedResults?: Array<GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p1beta1ProductSearchResultsResult>;
	}


	/**
	 * Information about the products similar to a single product in a query
	 * image.
	 */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p1beta1ProductSearchResultsResult>;
	}


	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation {

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Information about a product. */
	export interface GoogleCloudVisionV1p1beta1ProductSearchResultsResult {

		/**
		 * The resource name of the image from the product that is the closest match
		 * to the query.
		 */
		image?: string;

		/** A Product contains ReferenceImages. */
		product?: GoogleCloudVisionV1p1beta1Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to
		 * 1 (full confidence).
		 */
		score?: number;
	}


	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p1beta1Product {

		/**
		 * User-provided metadata to be stored with this product. Must be at most 4096
		 * characters long.
		 */
		description?: string;

		/**
		 * The user-provided name for this Product. Must not be empty. Must be at most
		 * 4096 characters long.
		 */
		displayName?: string;

		/**
		 * The resource name of the product.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
		 * This field is ignored when creating a product.
		 */
		name?: string;

		/**
		 * Immutable. The category for the product identified by the reference image. This should
		 * be either "homegoods-v2", "apparel-v2", or "toys-v2". The legacy categories
		 * "homegoods", "apparel", and "toys" are still supported, but these should
		 * not be used for new products.
		 */
		productCategory?: string;

		/**
		 * Key-value pairs that can be attached to a product. At query time,
		 * constraints can be specified based on the product_labels.
		 * Note that integer values can be provided as strings, e.g. "1199". Only
		 * strings with integer values can match a range-based restriction which is
		 * to be supported soon.
		 * Multiple values can be assigned to the same key. One product may have up to
		 * 500 product_labels.
		 * Notice that the total number of distinct product_labels over all products
		 * in one ProductSet cannot exceed 1M, otherwise the product search pipeline
		 * will refuse to work for that ProductSet.
		 */
		productLabels?: Array<GoogleCloudVisionV1p1beta1ProductKeyValue>;
	}


	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p1beta1ProductKeyValue {

		/**
		 * The key of the label attached to the product. Cannot be empty and cannot
		 * exceed 128 bytes.
		 */
		key?: string;

		/**
		 * The value of the label attached to the product. Cannot be empty and
		 * cannot exceed 128 bytes.
		 */
		value?: string;
	}


	/**
	 * Set of features pertaining to the image, computed by computer vision
	 * methods over safe-search verticals (for example, adult, spoof, medical,
	 * violence).
	 */
	export interface GoogleCloudVisionV1p1beta1SafeSearchAnnotation {

		/**
		 * Represents the adult content likelihood for the image. Adult content may
		 * contain elements such as nudity, pornographic images or cartoons, or
		 * sexual activities.
		 */
		adult?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood;

		/**
		 * Likelihood that the request image contains racy content. Racy content may
		 * include (but is not limited to) skimpy or sheer clothing, strategically
		 * covered nudity, lewd or provocative poses, or close-ups of sensitive
		 * body areas.
		 */
		racy?: FaceAnnotationAngerLikelihood;

		/**
		 * Spoof likelihood. The likelihood that an modification
		 * was made to the image's canonical version to make it appear
		 * funny or offensive.
		 */
		spoof?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this image contains violent content. */
		violence?: FaceAnnotationAngerLikelihood;
	}


	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p1beta1WebDetection {

		/**
		 * The service's best guess as to the topic of the request image.
		 * Inferred from similar images on the open web.
		 */
		bestGuessLabels?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebLabel>;

		/**
		 * Fully matching images from the Internet.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebPage>;

		/**
		 * Partial matching images from the Internet.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its crops.
		 */
		partialMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebEntity>;
	}


	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebLabel {

		/** Label for extra metadata. */
		label?: string;

		/**
		 * The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".
		 * For more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebImage {

		/** (Deprecated) Overall relevancy score for the image. */
		score?: number;

		/** The result image URL. */
		url?: string;
	}


	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebPage {

		/**
		 * Fully matching images on the page.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string;

		/**
		 * Partial matching images on the page.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its
		 * crops.
		 */
		partialMatchingImages?: Array<GoogleCloudVisionV1p1beta1WebDetectionWebImage>;

		/** (Deprecated) Overall relevancy score for the web page. */
		score?: number;

		/** The result web page URL. */
		url?: string;
	}


	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p1beta1WebDetectionWebEntity {

		/** Canonical description of the entity, in English. */
		description?: string;

		/** Opaque entity ID. */
		entityId?: string;

		/**
		 * Overall relevancy score for the entity.
		 * Not normalized and not comparable across different image queries.
		 */
		score?: number;
	}


	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
	}


	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p1beta1OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on
		 * Google Cloud Storage.
		 * The valid range is [1, 100]. If not specified, the default value is 20.
		 * For example, for one pdf file with 100 pages, 100 response protos will
		 * be generated. If `batch_size` = 20, then 5 json files each
		 * containing 20 response protos will be written under the prefix
		 * `gcs_destination`.`uri`.
		 * Currently, batch_size only applies to GcsDestination, with potential future
		 * support for other output configurations.
		 */
		batchSize?: number;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GoogleCloudVisionV1p1beta1GcsDestination;
	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p1beta1GcsDestination {

		/**
		 * Google Cloud Storage URI prefix where the results will be stored. Results
		 * will be in JSON format and preceded by its corresponding input URI prefix.
		 * This field can either represent a gcs file prefix or gcs directory. In
		 * either case, the uri should be unique because in order to get all of the
		 * output files, you will need to do a wildcard gcs search on the uri prefix
		 * you provide.
		 * Examples:
		 * *    File Prefix: gs://bucket-name/here/filenameprefix   The output files
		 * will be created in gs://bucket-name/here/ and the names of the
		 * output files will begin with "filenameprefix".
		 * *    Directory Prefix: gs://bucket-name/some/location/   The output files
		 * will be created in gs://bucket-name/some/location/ and the names of the
		 * output files could be anything because there was no filename prefix
		 * specified.
		 * If multiple outputs, each response is still AnnotateFileResponse, each of
		 * which contains some subset of the full list of AnnotateImageResponse.
		 * Multiple outputs can happen if, for example, the output JSON is too large
		 * and overflows into multiple sharded files.
		 */
		uri?: string;
	}


	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse {

		/**
		 * The list of file annotation responses, one for each request in
		 * AsyncBatchAnnotateFilesRequest.
		 */
		responses?: Array<GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse>;
	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p1beta1OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState;

		/** The time when the operation result was last updated. */
		updateTime?: string;
	}

	export enum GoogleCloudVisionV1p1beta1OperationMetadataState { STATE_UNSPECIFIED = 0, CREATED = 1, RUNNING = 2, DONE = 3, CANCELLED = 4 }


	/**
	 * Response to a single file annotation request. A file may contain one or more
	 * images, which individually have their own responses.
	 */
	export interface GoogleCloudVisionV1p2beta1AnnotateFileResponse {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;

		/**
		 * Individual responses to images found within the file. This field will be
		 * empty if the `error` field is set.
		 */
		responses?: Array<GoogleCloudVisionV1p2beta1AnnotateImageResponse>;

		/** This field gives the total number of pages in the file. */
		totalPages?: number;
	}


	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p2beta1InputConfig {

		/**
		 * File content, represented as a stream of bytes.
		 * Note: As with all `bytes` fields, protobuffers use a pure binary
		 * representation, whereas JSON representations use base64.
		 * Currently, this field only works for BatchAnnotateFiles requests. It does
		 * not work for AsyncBatchAnnotateFiles requests.
		 */
		content?: string;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GoogleCloudVisionV1p2beta1GcsSource;

		/**
		 * The type of the file. Currently only "application/pdf", "image/tiff" and
		 * "image/gif" are supported. Wildcards are not supported.
		 */
		mimeType?: string;
	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p2beta1GcsSource {

		/**
		 * Google Cloud Storage URI for the input file. This must only be a
		 * Google Cloud Storage object. Wildcards are not currently supported.
		 */
		uri?: string;
	}


	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p2beta1AnnotateImageResponse {

		/**
		 * If an image was produced from a file (e.g. a PDF), this message gives
		 * information about the source of that image.
		 */
		context?: GoogleCloudVisionV1p2beta1ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: GoogleCloudVisionV1p2beta1CropHintsAnnotation;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<GoogleCloudVisionV1p2beta1FaceAnnotation>;

		/**
		 * TextAnnotation contains a structured representation of OCR extracted text.
		 * The hierarchy of an OCR extracted text structure is like this:
		 * TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
		 * Each structural component, starting from Page, may further have their own
		 * properties. Properties describe detected languages, breaks etc.. Please refer
		 * to the TextAnnotation.TextProperty message definition below for more
		 * detail.
		 */
		fullTextAnnotation?: GoogleCloudVisionV1p2beta1TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: GoogleCloudVisionV1p2beta1ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<GoogleCloudVisionV1p2beta1EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<GoogleCloudVisionV1p2beta1EntityAnnotation>;

		/**
		 * If present, localized object detection has completed successfully.
		 * This will be sorted descending by confidence score.
		 */
		localizedObjectAnnotations?: Array<GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<GoogleCloudVisionV1p2beta1EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: GoogleCloudVisionV1p2beta1ProductSearchResults;

		/**
		 * Set of features pertaining to the image, computed by computer vision
		 * methods over safe-search verticals (for example, adult, spoof, medical,
		 * violence).
		 */
		safeSearchAnnotation?: GoogleCloudVisionV1p2beta1SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<GoogleCloudVisionV1p2beta1EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: GoogleCloudVisionV1p2beta1WebDetection;
	}


	/**
	 * If an image was produced from a file (e.g. a PDF), this message gives
	 * information about the source of that image.
	 */
	export interface GoogleCloudVisionV1p2beta1ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within
		 * the file used to produce the image.
		 */
		pageNumber?: number;

		/** The URI of the file used to produce the image. */
		uri?: string;
	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p2beta1CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<GoogleCloudVisionV1p2beta1CropHint>;
	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p2beta1CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** Confidence of this being a salient region.  Range [0, 1]. */
		confidence?: number;

		/**
		 * Fraction of importance of this salient region with respect to the original
		 * image.
		 */
		importanceFraction?: number;
	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p2beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudVisionV1p2beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudVisionV1p2beta1Vertex>;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVisionV1p2beta1NormalizedVertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the vertex coordinates are in the same scale as the original image.
	 */
	export interface GoogleCloudVisionV1p2beta1Vertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p2beta1FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** Detection confidence. Range [0, 1]. */
		detectionConfidence?: number;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood;

		/** Face landmarking confidence. Range [0, 1]. */
		landmarkingConfidence?: number;

		/** Detected face landmarks. */
		landmarks?: Array<GoogleCloudVisionV1p2beta1FaceAnnotationLandmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is
		 * pointing relative to the vertical plane perpendicular to the image. Range
		 * [-180,180].
		 */
		panAngle?: number;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation
		 * of the face relative to the image vertical about the axis perpendicular to
		 * the face. Range [-180,180].
		 */
		rollAngle?: number;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is
		 * pointing relative to the image's horizontal plane. Range [-180,180].
		 */
		tiltAngle?: number;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood;
	}


	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p2beta1FaceAnnotationLandmark {

		/**
		 * A 3D position in the image, used primarily for Face detection landmarks.
		 * A valid Position must have both x and y coordinates.
		 * The position coordinates are in the same scale as the original image.
		 */
		position?: GoogleCloudVisionV1p2beta1Position;

		/** Face landmark type. */
		type?: LandmarkType;
	}


	/**
	 * A 3D position in the image, used primarily for Face detection landmarks.
	 * A valid Position must have both x and y coordinates.
	 * The position coordinates are in the same scale as the original image.
	 */
	export interface GoogleCloudVisionV1p2beta1Position {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;

		/** Z coordinate (or depth). */
		z?: number;
	}


	/**
	 * TextAnnotation contains a structured representation of OCR extracted text.
	 * The hierarchy of an OCR extracted text structure is like this:
	 *     TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
	 * Each structural component, starting from Page, may further have their own
	 * properties. Properties describe detected languages, breaks etc.. Please refer
	 * to the TextAnnotation.TextProperty message definition below for more
	 * detail.
	 */
	export interface GoogleCloudVisionV1p2beta1TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<GoogleCloudVisionV1p2beta1Page>;

		/** UTF-8 text detected on the pages. */
		text?: string;
	}


	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p2beta1Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<GoogleCloudVisionV1p2beta1Block>;

		/** Confidence of the OCR results on the page. Range [0, 1]. */
		confidence?: number;

		/**
		 * Page height. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		height?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		width?: number;
	}


	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p2beta1Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** Confidence of the OCR results on the block. Range [0, 1]. */
		confidence?: number;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<GoogleCloudVisionV1p2beta1Paragraph>;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;
	}


	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p2beta1Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** Confidence of the OCR results for the paragraph. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

		/** List of all words in this paragraph. */
		words?: Array<GoogleCloudVisionV1p2beta1Word>;
	}


	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationTextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage>;
	}


	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean;

		/** Detected break type. */
		type?: DetectedBreakType;
	}


	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage {

		/** Confidence of detected language. Range [0, 1]. */
		confidence?: number;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** A word representation. */
	export interface GoogleCloudVisionV1p2beta1Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** Confidence of the OCR results for the word. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

		/**
		 * List of symbols in the word.
		 * The order of the symbols follows the natural reading order.
		 */
		symbols?: Array<GoogleCloudVisionV1p2beta1Symbol>;
	}


	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p2beta1Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** Confidence of the OCR results for the symbol. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p2beta1TextAnnotationTextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string;
	}


	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p2beta1ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: GoogleCloudVisionV1p2beta1DominantColorsAnnotation;
	}


	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p2beta1DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<GoogleCloudVisionV1p2beta1ColorInfo>;
	}


	/**
	 * Color information consists of RGB channels, score, and the fraction of
	 * the image that the color occupies in the image.
	 */
	export interface GoogleCloudVisionV1p2beta1ColorInfo {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image.
		 * Value in range [0, 1].
		 */
		pixelFraction?: number;

		/** Image-specific score for this color. Value in range [0, 1]. */
		score?: number;
	}


	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p2beta1EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.**
		 * The accuracy of the entity detection in an image.
		 * For example, for an image in which the "Eiffel Tower" entity is detected,
		 * this field represents the confidence that there is a tower in the query
		 * image. Range [0, 1].
		 */
		confidence?: number;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string;

		/**
		 * The language code for the locale in which the entity textual
		 * `description` is expressed.
		 */
		locale?: string;

		/**
		 * The location information for the detected entity. Multiple
		 * `LocationInfo` elements can be present because one location may
		 * indicate the location of the scene in the image, and another location
		 * may indicate the location of the place where the image was taken.
		 * Location information is usually present for landmarks.
		 */
		locations?: Array<GoogleCloudVisionV1p2beta1LocationInfo>;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		mid?: string;

		/**
		 * Some entities may have optional user-supplied `Property` (name/value)
		 * fields, such a score or string that qualifies the entity.
		 */
		properties?: Array<GoogleCloudVisionV1p2beta1Property>;

		/** Overall score of the result. Range [0, 1]. */
		score?: number;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the
		 * image. For example, the relevancy of "tower" is likely higher to an image
		 * containing the detected "Eiffel Tower" than to an image containing a
		 * detected distant towering building, even though the confidence that
		 * there is a tower in each image may be the same. Range [0, 1].
		 */
		topicality?: number;
	}


	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p2beta1LocationInfo {

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		latLng?: LatLng;
	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p2beta1Property {

		/** Name of the property. */
		name?: string;

		/** Value of numeric properties. */
		uint64Value?: string;

		/** Value of the property. */
		value?: string;
	}


	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResults {

		/**
		 * Timestamp of the index which provided these results. Products added to the
		 * product set and products removed from the product set after this time are
		 * not reflected in the current results.
		 */
		indexTime?: string;

		/**
		 * List of results grouped by products detected in the query image. Each entry
		 * corresponds to one bounding polygon in the query image, and contains the
		 * matching products specific to that region. There may be duplicate product
		 * matches in the union of all the per-product results.
		 */
		productGroupedResults?: Array<GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p2beta1ProductSearchResultsResult>;
	}


	/**
	 * Information about the products similar to a single product in a query
	 * image.
	 */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p2beta1ProductSearchResultsResult>;
	}


	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation {

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Information about a product. */
	export interface GoogleCloudVisionV1p2beta1ProductSearchResultsResult {

		/**
		 * The resource name of the image from the product that is the closest match
		 * to the query.
		 */
		image?: string;

		/** A Product contains ReferenceImages. */
		product?: GoogleCloudVisionV1p2beta1Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to
		 * 1 (full confidence).
		 */
		score?: number;
	}


	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p2beta1Product {

		/**
		 * User-provided metadata to be stored with this product. Must be at most 4096
		 * characters long.
		 */
		description?: string;

		/**
		 * The user-provided name for this Product. Must not be empty. Must be at most
		 * 4096 characters long.
		 */
		displayName?: string;

		/**
		 * The resource name of the product.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
		 * This field is ignored when creating a product.
		 */
		name?: string;

		/**
		 * Immutable. The category for the product identified by the reference image. This should
		 * be either "homegoods-v2", "apparel-v2", or "toys-v2". The legacy categories
		 * "homegoods", "apparel", and "toys" are still supported, but these should
		 * not be used for new products.
		 */
		productCategory?: string;

		/**
		 * Key-value pairs that can be attached to a product. At query time,
		 * constraints can be specified based on the product_labels.
		 * Note that integer values can be provided as strings, e.g. "1199". Only
		 * strings with integer values can match a range-based restriction which is
		 * to be supported soon.
		 * Multiple values can be assigned to the same key. One product may have up to
		 * 500 product_labels.
		 * Notice that the total number of distinct product_labels over all products
		 * in one ProductSet cannot exceed 1M, otherwise the product search pipeline
		 * will refuse to work for that ProductSet.
		 */
		productLabels?: Array<GoogleCloudVisionV1p2beta1ProductKeyValue>;
	}


	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p2beta1ProductKeyValue {

		/**
		 * The key of the label attached to the product. Cannot be empty and cannot
		 * exceed 128 bytes.
		 */
		key?: string;

		/**
		 * The value of the label attached to the product. Cannot be empty and
		 * cannot exceed 128 bytes.
		 */
		value?: string;
	}


	/**
	 * Set of features pertaining to the image, computed by computer vision
	 * methods over safe-search verticals (for example, adult, spoof, medical,
	 * violence).
	 */
	export interface GoogleCloudVisionV1p2beta1SafeSearchAnnotation {

		/**
		 * Represents the adult content likelihood for the image. Adult content may
		 * contain elements such as nudity, pornographic images or cartoons, or
		 * sexual activities.
		 */
		adult?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood;

		/**
		 * Likelihood that the request image contains racy content. Racy content may
		 * include (but is not limited to) skimpy or sheer clothing, strategically
		 * covered nudity, lewd or provocative poses, or close-ups of sensitive
		 * body areas.
		 */
		racy?: FaceAnnotationAngerLikelihood;

		/**
		 * Spoof likelihood. The likelihood that an modification
		 * was made to the image's canonical version to make it appear
		 * funny or offensive.
		 */
		spoof?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this image contains violent content. */
		violence?: FaceAnnotationAngerLikelihood;
	}


	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p2beta1WebDetection {

		/**
		 * The service's best guess as to the topic of the request image.
		 * Inferred from similar images on the open web.
		 */
		bestGuessLabels?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebLabel>;

		/**
		 * Fully matching images from the Internet.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebPage>;

		/**
		 * Partial matching images from the Internet.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its crops.
		 */
		partialMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebEntity>;
	}


	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebLabel {

		/** Label for extra metadata. */
		label?: string;

		/**
		 * The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".
		 * For more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebImage {

		/** (Deprecated) Overall relevancy score for the image. */
		score?: number;

		/** The result image URL. */
		url?: string;
	}


	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebPage {

		/**
		 * Fully matching images on the page.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string;

		/**
		 * Partial matching images on the page.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its
		 * crops.
		 */
		partialMatchingImages?: Array<GoogleCloudVisionV1p2beta1WebDetectionWebImage>;

		/** (Deprecated) Overall relevancy score for the web page. */
		score?: number;

		/** The result web page URL. */
		url?: string;
	}


	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p2beta1WebDetectionWebEntity {

		/** Canonical description of the entity, in English. */
		description?: string;

		/** Opaque entity ID. */
		entityId?: string;

		/**
		 * Overall relevancy score for the entity.
		 * Not normalized and not comparable across different image queries.
		 */
		score?: number;
	}


	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
	}


	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p2beta1OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on
		 * Google Cloud Storage.
		 * The valid range is [1, 100]. If not specified, the default value is 20.
		 * For example, for one pdf file with 100 pages, 100 response protos will
		 * be generated. If `batch_size` = 20, then 5 json files each
		 * containing 20 response protos will be written under the prefix
		 * `gcs_destination`.`uri`.
		 * Currently, batch_size only applies to GcsDestination, with potential future
		 * support for other output configurations.
		 */
		batchSize?: number;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GoogleCloudVisionV1p2beta1GcsDestination;
	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p2beta1GcsDestination {

		/**
		 * Google Cloud Storage URI prefix where the results will be stored. Results
		 * will be in JSON format and preceded by its corresponding input URI prefix.
		 * This field can either represent a gcs file prefix or gcs directory. In
		 * either case, the uri should be unique because in order to get all of the
		 * output files, you will need to do a wildcard gcs search on the uri prefix
		 * you provide.
		 * Examples:
		 * *    File Prefix: gs://bucket-name/here/filenameprefix   The output files
		 * will be created in gs://bucket-name/here/ and the names of the
		 * output files will begin with "filenameprefix".
		 * *    Directory Prefix: gs://bucket-name/some/location/   The output files
		 * will be created in gs://bucket-name/some/location/ and the names of the
		 * output files could be anything because there was no filename prefix
		 * specified.
		 * If multiple outputs, each response is still AnnotateFileResponse, each of
		 * which contains some subset of the full list of AnnotateImageResponse.
		 * Multiple outputs can happen if, for example, the output JSON is too large
		 * and overflows into multiple sharded files.
		 */
		uri?: string;
	}


	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse {

		/**
		 * The list of file annotation responses, one for each request in
		 * AsyncBatchAnnotateFilesRequest.
		 */
		responses?: Array<GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse>;
	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p2beta1OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState;

		/** The time when the operation result was last updated. */
		updateTime?: string;
	}


	/**
	 * Response to a single file annotation request. A file may contain one or more
	 * images, which individually have their own responses.
	 */
	export interface GoogleCloudVisionV1p3beta1AnnotateFileResponse {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p3beta1InputConfig;

		/**
		 * Individual responses to images found within the file. This field will be
		 * empty if the `error` field is set.
		 */
		responses?: Array<GoogleCloudVisionV1p3beta1AnnotateImageResponse>;

		/** This field gives the total number of pages in the file. */
		totalPages?: number;
	}


	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p3beta1InputConfig {

		/**
		 * File content, represented as a stream of bytes.
		 * Note: As with all `bytes` fields, protobuffers use a pure binary
		 * representation, whereas JSON representations use base64.
		 * Currently, this field only works for BatchAnnotateFiles requests. It does
		 * not work for AsyncBatchAnnotateFiles requests.
		 */
		content?: string;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GoogleCloudVisionV1p3beta1GcsSource;

		/**
		 * The type of the file. Currently only "application/pdf", "image/tiff" and
		 * "image/gif" are supported. Wildcards are not supported.
		 */
		mimeType?: string;
	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p3beta1GcsSource {

		/**
		 * Google Cloud Storage URI for the input file. This must only be a
		 * Google Cloud Storage object. Wildcards are not currently supported.
		 */
		uri?: string;
	}


	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p3beta1AnnotateImageResponse {

		/**
		 * If an image was produced from a file (e.g. a PDF), this message gives
		 * information about the source of that image.
		 */
		context?: GoogleCloudVisionV1p3beta1ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: GoogleCloudVisionV1p3beta1CropHintsAnnotation;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<GoogleCloudVisionV1p3beta1FaceAnnotation>;

		/**
		 * TextAnnotation contains a structured representation of OCR extracted text.
		 * The hierarchy of an OCR extracted text structure is like this:
		 * TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
		 * Each structural component, starting from Page, may further have their own
		 * properties. Properties describe detected languages, breaks etc.. Please refer
		 * to the TextAnnotation.TextProperty message definition below for more
		 * detail.
		 */
		fullTextAnnotation?: GoogleCloudVisionV1p3beta1TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: GoogleCloudVisionV1p3beta1ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<GoogleCloudVisionV1p3beta1EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<GoogleCloudVisionV1p3beta1EntityAnnotation>;

		/**
		 * If present, localized object detection has completed successfully.
		 * This will be sorted descending by confidence score.
		 */
		localizedObjectAnnotations?: Array<GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<GoogleCloudVisionV1p3beta1EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: GoogleCloudVisionV1p3beta1ProductSearchResults;

		/**
		 * Set of features pertaining to the image, computed by computer vision
		 * methods over safe-search verticals (for example, adult, spoof, medical,
		 * violence).
		 */
		safeSearchAnnotation?: GoogleCloudVisionV1p3beta1SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<GoogleCloudVisionV1p3beta1EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: GoogleCloudVisionV1p3beta1WebDetection;
	}


	/**
	 * If an image was produced from a file (e.g. a PDF), this message gives
	 * information about the source of that image.
	 */
	export interface GoogleCloudVisionV1p3beta1ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within
		 * the file used to produce the image.
		 */
		pageNumber?: number;

		/** The URI of the file used to produce the image. */
		uri?: string;
	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p3beta1CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<GoogleCloudVisionV1p3beta1CropHint>;
	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p3beta1CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** Confidence of this being a salient region.  Range [0, 1]. */
		confidence?: number;

		/**
		 * Fraction of importance of this salient region with respect to the original
		 * image.
		 */
		importanceFraction?: number;
	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p3beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudVisionV1p3beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudVisionV1p3beta1Vertex>;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVisionV1p3beta1NormalizedVertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the vertex coordinates are in the same scale as the original image.
	 */
	export interface GoogleCloudVisionV1p3beta1Vertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p3beta1FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** Detection confidence. Range [0, 1]. */
		detectionConfidence?: number;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood;

		/** Face landmarking confidence. Range [0, 1]. */
		landmarkingConfidence?: number;

		/** Detected face landmarks. */
		landmarks?: Array<GoogleCloudVisionV1p3beta1FaceAnnotationLandmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is
		 * pointing relative to the vertical plane perpendicular to the image. Range
		 * [-180,180].
		 */
		panAngle?: number;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation
		 * of the face relative to the image vertical about the axis perpendicular to
		 * the face. Range [-180,180].
		 */
		rollAngle?: number;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is
		 * pointing relative to the image's horizontal plane. Range [-180,180].
		 */
		tiltAngle?: number;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood;
	}


	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p3beta1FaceAnnotationLandmark {

		/**
		 * A 3D position in the image, used primarily for Face detection landmarks.
		 * A valid Position must have both x and y coordinates.
		 * The position coordinates are in the same scale as the original image.
		 */
		position?: GoogleCloudVisionV1p3beta1Position;

		/** Face landmark type. */
		type?: LandmarkType;
	}


	/**
	 * A 3D position in the image, used primarily for Face detection landmarks.
	 * A valid Position must have both x and y coordinates.
	 * The position coordinates are in the same scale as the original image.
	 */
	export interface GoogleCloudVisionV1p3beta1Position {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;

		/** Z coordinate (or depth). */
		z?: number;
	}


	/**
	 * TextAnnotation contains a structured representation of OCR extracted text.
	 * The hierarchy of an OCR extracted text structure is like this:
	 *     TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
	 * Each structural component, starting from Page, may further have their own
	 * properties. Properties describe detected languages, breaks etc.. Please refer
	 * to the TextAnnotation.TextProperty message definition below for more
	 * detail.
	 */
	export interface GoogleCloudVisionV1p3beta1TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<GoogleCloudVisionV1p3beta1Page>;

		/** UTF-8 text detected on the pages. */
		text?: string;
	}


	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p3beta1Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<GoogleCloudVisionV1p3beta1Block>;

		/** Confidence of the OCR results on the page. Range [0, 1]. */
		confidence?: number;

		/**
		 * Page height. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		height?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		width?: number;
	}


	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p3beta1Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** Confidence of the OCR results on the block. Range [0, 1]. */
		confidence?: number;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<GoogleCloudVisionV1p3beta1Paragraph>;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;
	}


	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p3beta1Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** Confidence of the OCR results for the paragraph. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;

		/** List of all words in this paragraph. */
		words?: Array<GoogleCloudVisionV1p3beta1Word>;
	}


	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationTextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage>;
	}


	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean;

		/** Detected break type. */
		type?: DetectedBreakType;
	}


	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage {

		/** Confidence of detected language. Range [0, 1]. */
		confidence?: number;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** A word representation. */
	export interface GoogleCloudVisionV1p3beta1Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** Confidence of the OCR results for the word. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;

		/**
		 * List of symbols in the word.
		 * The order of the symbols follows the natural reading order.
		 */
		symbols?: Array<GoogleCloudVisionV1p3beta1Symbol>;
	}


	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p3beta1Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** Confidence of the OCR results for the symbol. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p3beta1TextAnnotationTextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string;
	}


	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p3beta1ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: GoogleCloudVisionV1p3beta1DominantColorsAnnotation;
	}


	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p3beta1DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<GoogleCloudVisionV1p3beta1ColorInfo>;
	}


	/**
	 * Color information consists of RGB channels, score, and the fraction of
	 * the image that the color occupies in the image.
	 */
	export interface GoogleCloudVisionV1p3beta1ColorInfo {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image.
		 * Value in range [0, 1].
		 */
		pixelFraction?: number;

		/** Image-specific score for this color. Value in range [0, 1]. */
		score?: number;
	}


	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p3beta1EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.**
		 * The accuracy of the entity detection in an image.
		 * For example, for an image in which the "Eiffel Tower" entity is detected,
		 * this field represents the confidence that there is a tower in the query
		 * image. Range [0, 1].
		 */
		confidence?: number;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string;

		/**
		 * The language code for the locale in which the entity textual
		 * `description` is expressed.
		 */
		locale?: string;

		/**
		 * The location information for the detected entity. Multiple
		 * `LocationInfo` elements can be present because one location may
		 * indicate the location of the scene in the image, and another location
		 * may indicate the location of the place where the image was taken.
		 * Location information is usually present for landmarks.
		 */
		locations?: Array<GoogleCloudVisionV1p3beta1LocationInfo>;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		mid?: string;

		/**
		 * Some entities may have optional user-supplied `Property` (name/value)
		 * fields, such a score or string that qualifies the entity.
		 */
		properties?: Array<GoogleCloudVisionV1p3beta1Property>;

		/** Overall score of the result. Range [0, 1]. */
		score?: number;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the
		 * image. For example, the relevancy of "tower" is likely higher to an image
		 * containing the detected "Eiffel Tower" than to an image containing a
		 * detected distant towering building, even though the confidence that
		 * there is a tower in each image may be the same. Range [0, 1].
		 */
		topicality?: number;
	}


	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p3beta1LocationInfo {

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		latLng?: LatLng;
	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p3beta1Property {

		/** Name of the property. */
		name?: string;

		/** Value of numeric properties. */
		uint64Value?: string;

		/** Value of the property. */
		value?: string;
	}


	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResults {

		/**
		 * Timestamp of the index which provided these results. Products added to the
		 * product set and products removed from the product set after this time are
		 * not reflected in the current results.
		 */
		indexTime?: string;

		/**
		 * List of results grouped by products detected in the query image. Each entry
		 * corresponds to one bounding polygon in the query image, and contains the
		 * matching products specific to that region. There may be duplicate product
		 * matches in the union of all the per-product results.
		 */
		productGroupedResults?: Array<GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p3beta1ProductSearchResultsResult>;
	}


	/**
	 * Information about the products similar to a single product in a query
	 * image.
	 */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p3beta1BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p3beta1ProductSearchResultsResult>;
	}


	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation {

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Information about a product. */
	export interface GoogleCloudVisionV1p3beta1ProductSearchResultsResult {

		/**
		 * The resource name of the image from the product that is the closest match
		 * to the query.
		 */
		image?: string;

		/** A Product contains ReferenceImages. */
		product?: GoogleCloudVisionV1p3beta1Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to
		 * 1 (full confidence).
		 */
		score?: number;
	}


	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p3beta1Product {

		/**
		 * User-provided metadata to be stored with this product. Must be at most 4096
		 * characters long.
		 */
		description?: string;

		/**
		 * The user-provided name for this Product. Must not be empty. Must be at most
		 * 4096 characters long.
		 */
		displayName?: string;

		/**
		 * The resource name of the product.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
		 * This field is ignored when creating a product.
		 */
		name?: string;

		/**
		 * Immutable. The category for the product identified by the reference image. This should
		 * be either "homegoods-v2", "apparel-v2", or "toys-v2". The legacy categories
		 * "homegoods", "apparel", and "toys" are still supported, but these should
		 * not be used for new products.
		 */
		productCategory?: string;

		/**
		 * Key-value pairs that can be attached to a product. At query time,
		 * constraints can be specified based on the product_labels.
		 * Note that integer values can be provided as strings, e.g. "1199". Only
		 * strings with integer values can match a range-based restriction which is
		 * to be supported soon.
		 * Multiple values can be assigned to the same key. One product may have up to
		 * 500 product_labels.
		 * Notice that the total number of distinct product_labels over all products
		 * in one ProductSet cannot exceed 1M, otherwise the product search pipeline
		 * will refuse to work for that ProductSet.
		 */
		productLabels?: Array<GoogleCloudVisionV1p3beta1ProductKeyValue>;
	}


	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p3beta1ProductKeyValue {

		/**
		 * The key of the label attached to the product. Cannot be empty and cannot
		 * exceed 128 bytes.
		 */
		key?: string;

		/**
		 * The value of the label attached to the product. Cannot be empty and
		 * cannot exceed 128 bytes.
		 */
		value?: string;
	}


	/**
	 * Set of features pertaining to the image, computed by computer vision
	 * methods over safe-search verticals (for example, adult, spoof, medical,
	 * violence).
	 */
	export interface GoogleCloudVisionV1p3beta1SafeSearchAnnotation {

		/**
		 * Represents the adult content likelihood for the image. Adult content may
		 * contain elements such as nudity, pornographic images or cartoons, or
		 * sexual activities.
		 */
		adult?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood;

		/**
		 * Likelihood that the request image contains racy content. Racy content may
		 * include (but is not limited to) skimpy or sheer clothing, strategically
		 * covered nudity, lewd or provocative poses, or close-ups of sensitive
		 * body areas.
		 */
		racy?: FaceAnnotationAngerLikelihood;

		/**
		 * Spoof likelihood. The likelihood that an modification
		 * was made to the image's canonical version to make it appear
		 * funny or offensive.
		 */
		spoof?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this image contains violent content. */
		violence?: FaceAnnotationAngerLikelihood;
	}


	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p3beta1WebDetection {

		/**
		 * The service's best guess as to the topic of the request image.
		 * Inferred from similar images on the open web.
		 */
		bestGuessLabels?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebLabel>;

		/**
		 * Fully matching images from the Internet.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebPage>;

		/**
		 * Partial matching images from the Internet.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its crops.
		 */
		partialMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebEntity>;
	}


	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebLabel {

		/** Label for extra metadata. */
		label?: string;

		/**
		 * The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".
		 * For more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebImage {

		/** (Deprecated) Overall relevancy score for the image. */
		score?: number;

		/** The result image URL. */
		url?: string;
	}


	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebPage {

		/**
		 * Fully matching images on the page.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string;

		/**
		 * Partial matching images on the page.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its
		 * crops.
		 */
		partialMatchingImages?: Array<GoogleCloudVisionV1p3beta1WebDetectionWebImage>;

		/** (Deprecated) Overall relevancy score for the web page. */
		score?: number;

		/** The result web page URL. */
		url?: string;
	}


	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p3beta1WebDetectionWebEntity {

		/** Canonical description of the entity, in English. */
		description?: string;

		/** Opaque entity ID. */
		entityId?: string;

		/**
		 * Overall relevancy score for the entity.
		 * Not normalized and not comparable across different image queries.
		 */
		score?: number;
	}


	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p3beta1OutputConfig;
	}


	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p3beta1OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on
		 * Google Cloud Storage.
		 * The valid range is [1, 100]. If not specified, the default value is 20.
		 * For example, for one pdf file with 100 pages, 100 response protos will
		 * be generated. If `batch_size` = 20, then 5 json files each
		 * containing 20 response protos will be written under the prefix
		 * `gcs_destination`.`uri`.
		 * Currently, batch_size only applies to GcsDestination, with potential future
		 * support for other output configurations.
		 */
		batchSize?: number;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GoogleCloudVisionV1p3beta1GcsDestination;
	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p3beta1GcsDestination {

		/**
		 * Google Cloud Storage URI prefix where the results will be stored. Results
		 * will be in JSON format and preceded by its corresponding input URI prefix.
		 * This field can either represent a gcs file prefix or gcs directory. In
		 * either case, the uri should be unique because in order to get all of the
		 * output files, you will need to do a wildcard gcs search on the uri prefix
		 * you provide.
		 * Examples:
		 * *    File Prefix: gs://bucket-name/here/filenameprefix   The output files
		 * will be created in gs://bucket-name/here/ and the names of the
		 * output files will begin with "filenameprefix".
		 * *    Directory Prefix: gs://bucket-name/some/location/   The output files
		 * will be created in gs://bucket-name/some/location/ and the names of the
		 * output files could be anything because there was no filename prefix
		 * specified.
		 * If multiple outputs, each response is still AnnotateFileResponse, each of
		 * which contains some subset of the full list of AnnotateImageResponse.
		 * Multiple outputs can happen if, for example, the output JSON is too large
		 * and overflows into multiple sharded files.
		 */
		uri?: string;
	}


	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse {

		/**
		 * The list of file annotation responses, one for each request in
		 * AsyncBatchAnnotateFilesRequest.
		 */
		responses?: Array<GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse>;
	}


	/**
	 * Metadata for the batch operations such as the current state.
	 * This is included in the `metadata` field of the `Operation` returned by the
	 * `GetOperation` call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVisionV1p3beta1BatchOperationMetadata {

		/**
		 * The time when the batch request is finished and
		 * google.longrunning.Operation.done is set to true.
		 */
		endTime?: string;

		/** The current state of the batch operation. */
		state?: BatchOperationMetadataState;

		/** The time when the batch request was submitted to the server. */
		submitTime?: string;
	}


	/**
	 * Response message for the `ImportProductSets` method.
	 * This message is returned by the
	 * google.longrunning.Operations.GetOperation method in the returned
	 * google.longrunning.Operation.response field.
	 */
	export interface GoogleCloudVisionV1p3beta1ImportProductSetsResponse {

		/** The list of reference_images that are imported successfully. */
		referenceImages?: Array<GoogleCloudVisionV1p3beta1ReferenceImage>;

		/**
		 * The rpc status for each ImportProductSet request, including both successes
		 * and errors.
		 * The number of statuses here matches the number of lines in the csv file,
		 * and statuses[i] stores the success or failure status of processing the i-th
		 * line of the csv, starting from line 0.
		 */
		statuses?: Array<Status>;
	}


	/**
	 * A `ReferenceImage` represents a product image and its associated metadata,
	 * such as bounding boxes.
	 */
	export interface GoogleCloudVisionV1p3beta1ReferenceImage {

		/**
		 * Optional. Bounding polygons around the areas of interest in the reference image.
		 * If this field is empty, the system will try to detect regions of
		 * interest. At most 10 bounding polygons will be used.
		 * The provided shape is converted into a non-rotated rectangle. Once
		 * converted, the small edge of the rectangle must be greater than or equal
		 * to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5
		 * is not).
		 */
		boundingPolys?: Array<GoogleCloudVisionV1p3beta1BoundingPoly>;

		/**
		 * The resource name of the reference image.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
		 * This field is ignored when creating a reference image.
		 */
		name?: string;

		/**
		 * Required. The Google Cloud Storage URI of the reference image.
		 * The URI must start with `gs://`.
		 */
		uri?: string;
	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p3beta1OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState;

		/** The time when the operation result was last updated. */
		updateTime?: string;
	}


	/**
	 * Response to a single file annotation request. A file may contain one or more
	 * images, which individually have their own responses.
	 */
	export interface GoogleCloudVisionV1p4beta1AnnotateFileResponse {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** The desired input location and metadata. */
		inputConfig?: GoogleCloudVisionV1p4beta1InputConfig;

		/**
		 * Individual responses to images found within the file. This field will be
		 * empty if the `error` field is set.
		 */
		responses?: Array<GoogleCloudVisionV1p4beta1AnnotateImageResponse>;

		/** This field gives the total number of pages in the file. */
		totalPages?: number;
	}


	/** The desired input location and metadata. */
	export interface GoogleCloudVisionV1p4beta1InputConfig {

		/**
		 * File content, represented as a stream of bytes.
		 * Note: As with all `bytes` fields, protobuffers use a pure binary
		 * representation, whereas JSON representations use base64.
		 * Currently, this field only works for BatchAnnotateFiles requests. It does
		 * not work for AsyncBatchAnnotateFiles requests.
		 */
		content?: string;

		/** The Google Cloud Storage location where the input will be read from. */
		gcsSource?: GoogleCloudVisionV1p4beta1GcsSource;

		/**
		 * The type of the file. Currently only "application/pdf", "image/tiff" and
		 * "image/gif" are supported. Wildcards are not supported.
		 */
		mimeType?: string;
	}


	/** The Google Cloud Storage location where the input will be read from. */
	export interface GoogleCloudVisionV1p4beta1GcsSource {

		/**
		 * Google Cloud Storage URI for the input file. This must only be a
		 * Google Cloud Storage object. Wildcards are not currently supported.
		 */
		uri?: string;
	}


	/** Response to an image annotation request. */
	export interface GoogleCloudVisionV1p4beta1AnnotateImageResponse {

		/**
		 * If an image was produced from a file (e.g. a PDF), this message gives
		 * information about the source of that image.
		 */
		context?: GoogleCloudVisionV1p4beta1ImageAnnotationContext;

		/** Set of crop hints that are used to generate new crops when serving images. */
		cropHintsAnnotation?: GoogleCloudVisionV1p4beta1CropHintsAnnotation;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/** If present, face detection has completed successfully. */
		faceAnnotations?: Array<GoogleCloudVisionV1p4beta1FaceAnnotation>;

		/**
		 * TextAnnotation contains a structured representation of OCR extracted text.
		 * The hierarchy of an OCR extracted text structure is like this:
		 * TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
		 * Each structural component, starting from Page, may further have their own
		 * properties. Properties describe detected languages, breaks etc.. Please refer
		 * to the TextAnnotation.TextProperty message definition below for more
		 * detail.
		 */
		fullTextAnnotation?: GoogleCloudVisionV1p4beta1TextAnnotation;

		/** Stores image properties, such as dominant colors. */
		imagePropertiesAnnotation?: GoogleCloudVisionV1p4beta1ImageProperties;

		/** If present, label detection has completed successfully. */
		labelAnnotations?: Array<GoogleCloudVisionV1p4beta1EntityAnnotation>;

		/** If present, landmark detection has completed successfully. */
		landmarkAnnotations?: Array<GoogleCloudVisionV1p4beta1EntityAnnotation>;

		/**
		 * If present, localized object detection has completed successfully.
		 * This will be sorted descending by confidence score.
		 */
		localizedObjectAnnotations?: Array<GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation>;

		/** If present, logo detection has completed successfully. */
		logoAnnotations?: Array<GoogleCloudVisionV1p4beta1EntityAnnotation>;

		/** Results for a product search request. */
		productSearchResults?: GoogleCloudVisionV1p4beta1ProductSearchResults;

		/**
		 * Set of features pertaining to the image, computed by computer vision
		 * methods over safe-search verticals (for example, adult, spoof, medical,
		 * violence).
		 */
		safeSearchAnnotation?: GoogleCloudVisionV1p4beta1SafeSearchAnnotation;

		/** If present, text (OCR) detection has completed successfully. */
		textAnnotations?: Array<GoogleCloudVisionV1p4beta1EntityAnnotation>;

		/** Relevant information for the image from the Internet. */
		webDetection?: GoogleCloudVisionV1p4beta1WebDetection;
	}


	/**
	 * If an image was produced from a file (e.g. a PDF), this message gives
	 * information about the source of that image.
	 */
	export interface GoogleCloudVisionV1p4beta1ImageAnnotationContext {

		/**
		 * If the file was a PDF or TIFF, this field gives the page number within
		 * the file used to produce the image.
		 */
		pageNumber?: number;

		/** The URI of the file used to produce the image. */
		uri?: string;
	}


	/** Set of crop hints that are used to generate new crops when serving images. */
	export interface GoogleCloudVisionV1p4beta1CropHintsAnnotation {

		/** Crop hint results. */
		cropHints?: Array<GoogleCloudVisionV1p4beta1CropHint>;
	}


	/** Single crop hint that is used to generate a new crop when serving an image. */
	export interface GoogleCloudVisionV1p4beta1CropHint {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** Confidence of this being a salient region.  Range [0, 1]. */
		confidence?: number;

		/**
		 * Fraction of importance of this salient region with respect to the original
		 * image.
		 */
		importanceFraction?: number;
	}


	/** A bounding polygon for the detected image annotation. */
	export interface GoogleCloudVisionV1p4beta1BoundingPoly {

		/** The bounding polygon normalized vertices. */
		normalizedVertices?: Array<GoogleCloudVisionV1p4beta1NormalizedVertex>;

		/** The bounding polygon vertices. */
		vertices?: Array<GoogleCloudVisionV1p4beta1Vertex>;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVisionV1p4beta1NormalizedVertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the vertex coordinates are in the same scale as the original image.
	 */
	export interface GoogleCloudVisionV1p4beta1Vertex {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;
	}


	/** A face annotation object contains the results of face detection. */
	export interface GoogleCloudVisionV1p4beta1FaceAnnotation {

		/** Anger likelihood. */
		angerLikelihood?: FaceAnnotationAngerLikelihood;

		/** Blurred likelihood. */
		blurredLikelihood?: FaceAnnotationAngerLikelihood;

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** Detection confidence. Range [0, 1]. */
		detectionConfidence?: number;

		/** A bounding polygon for the detected image annotation. */
		fdBoundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** Headwear likelihood. */
		headwearLikelihood?: FaceAnnotationAngerLikelihood;

		/** Joy likelihood. */
		joyLikelihood?: FaceAnnotationAngerLikelihood;

		/** Face landmarking confidence. Range [0, 1]. */
		landmarkingConfidence?: number;

		/** Detected face landmarks. */
		landmarks?: Array<GoogleCloudVisionV1p4beta1FaceAnnotationLandmark>;

		/**
		 * Yaw angle, which indicates the leftward/rightward angle that the face is
		 * pointing relative to the vertical plane perpendicular to the image. Range
		 * [-180,180].
		 */
		panAngle?: number;

		/**
		 * Additional recognition information. Only computed if
		 * image_context.face_recognition_params is provided, **and** a match is found
		 * to a Celebrity in the input CelebritySet. This field is
		 * sorted in order of decreasing confidence values.
		 */
		recognitionResult?: Array<GoogleCloudVisionV1p4beta1FaceRecognitionResult>;

		/**
		 * Roll angle, which indicates the amount of clockwise/anti-clockwise rotation
		 * of the face relative to the image vertical about the axis perpendicular to
		 * the face. Range [-180,180].
		 */
		rollAngle?: number;

		/** Sorrow likelihood. */
		sorrowLikelihood?: FaceAnnotationAngerLikelihood;

		/** Surprise likelihood. */
		surpriseLikelihood?: FaceAnnotationAngerLikelihood;

		/**
		 * Pitch angle, which indicates the upwards/downwards angle that the face is
		 * pointing relative to the image's horizontal plane. Range [-180,180].
		 */
		tiltAngle?: number;

		/** Under-exposed likelihood. */
		underExposedLikelihood?: FaceAnnotationAngerLikelihood;
	}


	/** A face-specific landmark (for example, a face feature). */
	export interface GoogleCloudVisionV1p4beta1FaceAnnotationLandmark {

		/**
		 * A 3D position in the image, used primarily for Face detection landmarks.
		 * A valid Position must have both x and y coordinates.
		 * The position coordinates are in the same scale as the original image.
		 */
		position?: GoogleCloudVisionV1p4beta1Position;

		/** Face landmark type. */
		type?: LandmarkType;
	}


	/**
	 * A 3D position in the image, used primarily for Face detection landmarks.
	 * A valid Position must have both x and y coordinates.
	 * The position coordinates are in the same scale as the original image.
	 */
	export interface GoogleCloudVisionV1p4beta1Position {

		/** X coordinate. */
		x?: number;

		/** Y coordinate. */
		y?: number;

		/** Z coordinate (or depth). */
		z?: number;
	}


	/** Information about a face's identity. */
	export interface GoogleCloudVisionV1p4beta1FaceRecognitionResult {

		/** A Celebrity is a group of Faces with an identity. */
		celebrity?: GoogleCloudVisionV1p4beta1Celebrity;

		/** Recognition confidence. Range [0, 1]. */
		confidence?: number;
	}


	/** A Celebrity is a group of Faces with an identity. */
	export interface GoogleCloudVisionV1p4beta1Celebrity {

		/** The Celebrity's description. */
		description?: string;

		/** The Celebrity's display name. */
		displayName?: string;

		/**
		 * The resource name of the preloaded Celebrity. Has the format
		 * `builtin/{mid}`.
		 */
		name?: string;
	}


	/**
	 * TextAnnotation contains a structured representation of OCR extracted text.
	 * The hierarchy of an OCR extracted text structure is like this:
	 *     TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
	 * Each structural component, starting from Page, may further have their own
	 * properties. Properties describe detected languages, breaks etc.. Please refer
	 * to the TextAnnotation.TextProperty message definition below for more
	 * detail.
	 */
	export interface GoogleCloudVisionV1p4beta1TextAnnotation {

		/** List of pages detected by OCR. */
		pages?: Array<GoogleCloudVisionV1p4beta1Page>;

		/** UTF-8 text detected on the pages. */
		text?: string;
	}


	/** Detected page from OCR. */
	export interface GoogleCloudVisionV1p4beta1Page {

		/** List of blocks of text, images etc on this page. */
		blocks?: Array<GoogleCloudVisionV1p4beta1Block>;

		/** Confidence of the OCR results on the page. Range [0, 1]. */
		confidence?: number;

		/**
		 * Page height. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		height?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;

		/**
		 * Page width. For PDFs the unit is points. For images (including
		 * TIFFs) the unit is pixels.
		 */
		width?: number;
	}


	/** Logical element on the page. */
	export interface GoogleCloudVisionV1p4beta1Block {

		/** Detected block type (text, image etc) for this block. */
		blockType?: BlockBlockType;

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** Confidence of the OCR results on the block. Range [0, 1]. */
		confidence?: number;

		/** List of paragraphs in this block (if this blocks is of type text). */
		paragraphs?: Array<GoogleCloudVisionV1p4beta1Paragraph>;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;
	}


	/** Structural unit of text representing a number of words in certain order. */
	export interface GoogleCloudVisionV1p4beta1Paragraph {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** Confidence of the OCR results for the paragraph. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;

		/** List of all words in this paragraph. */
		words?: Array<GoogleCloudVisionV1p4beta1Word>;
	}


	/** Additional information detected on the structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationTextProperty {

		/** Detected start or end of a structural component. */
		detectedBreak?: GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak;

		/** A list of detected languages together with confidence. */
		detectedLanguages?: Array<GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage>;
	}


	/** Detected start or end of a structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak {

		/** True if break prepends the element. */
		isPrefix?: boolean;

		/** Detected break type. */
		type?: DetectedBreakType;
	}


	/** Detected language for a structural component. */
	export interface GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage {

		/** Confidence of detected language. Range [0, 1]. */
		confidence?: number;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** A word representation. */
	export interface GoogleCloudVisionV1p4beta1Word {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** Confidence of the OCR results for the word. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;

		/**
		 * List of symbols in the word.
		 * The order of the symbols follows the natural reading order.
		 */
		symbols?: Array<GoogleCloudVisionV1p4beta1Symbol>;
	}


	/** A single symbol representation. */
	export interface GoogleCloudVisionV1p4beta1Symbol {

		/** A bounding polygon for the detected image annotation. */
		boundingBox?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** Confidence of the OCR results for the symbol. Range [0, 1]. */
		confidence?: number;

		/** Additional information detected on the structural component. */
		property?: GoogleCloudVisionV1p4beta1TextAnnotationTextProperty;

		/** The actual UTF-8 representation of the symbol. */
		text?: string;
	}


	/** Stores image properties, such as dominant colors. */
	export interface GoogleCloudVisionV1p4beta1ImageProperties {

		/** Set of dominant colors and their corresponding scores. */
		dominantColors?: GoogleCloudVisionV1p4beta1DominantColorsAnnotation;
	}


	/** Set of dominant colors and their corresponding scores. */
	export interface GoogleCloudVisionV1p4beta1DominantColorsAnnotation {

		/** RGB color values with their score and pixel fraction. */
		colors?: Array<GoogleCloudVisionV1p4beta1ColorInfo>;
	}


	/**
	 * Color information consists of RGB channels, score, and the fraction of
	 * the image that the color occupies in the image.
	 */
	export interface GoogleCloudVisionV1p4beta1ColorInfo {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/**
		 * The fraction of pixels the color occupies in the image.
		 * Value in range [0, 1].
		 */
		pixelFraction?: number;

		/** Image-specific score for this color. Value in range [0, 1]. */
		score?: number;
	}


	/** Set of detected entity features. */
	export interface GoogleCloudVisionV1p4beta1EntityAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * **Deprecated. Use `score` instead.**
		 * The accuracy of the entity detection in an image.
		 * For example, for an image in which the "Eiffel Tower" entity is detected,
		 * this field represents the confidence that there is a tower in the query
		 * image. Range [0, 1].
		 */
		confidence?: number;

		/** Entity textual description, expressed in its `locale` language. */
		description?: string;

		/**
		 * The language code for the locale in which the entity textual
		 * `description` is expressed.
		 */
		locale?: string;

		/**
		 * The location information for the detected entity. Multiple
		 * `LocationInfo` elements can be present because one location may
		 * indicate the location of the scene in the image, and another location
		 * may indicate the location of the place where the image was taken.
		 * Location information is usually present for landmarks.
		 */
		locations?: Array<GoogleCloudVisionV1p4beta1LocationInfo>;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		mid?: string;

		/**
		 * Some entities may have optional user-supplied `Property` (name/value)
		 * fields, such a score or string that qualifies the entity.
		 */
		properties?: Array<GoogleCloudVisionV1p4beta1Property>;

		/** Overall score of the result. Range [0, 1]. */
		score?: number;

		/**
		 * The relevancy of the ICA (Image Content Annotation) label to the
		 * image. For example, the relevancy of "tower" is likely higher to an image
		 * containing the detected "Eiffel Tower" than to an image containing a
		 * detected distant towering building, even though the confidence that
		 * there is a tower in each image may be the same. Range [0, 1].
		 */
		topicality?: number;
	}


	/** Detected entity location information. */
	export interface GoogleCloudVisionV1p4beta1LocationInfo {

		/**
		 * An object representing a latitude/longitude pair. This is expressed as a pair
		 * of doubles representing degrees latitude and degrees longitude. Unless
		 * specified otherwise, this must conform to the
		 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
		 * standard</a>. Values must be within normalized ranges.
		 */
		latLng?: LatLng;
	}


	/** A `Property` consists of a user-supplied name/value pair. */
	export interface GoogleCloudVisionV1p4beta1Property {

		/** Name of the property. */
		name?: string;

		/** Value of numeric properties. */
		uint64Value?: string;

		/** Value of the property. */
		value?: string;
	}


	/** Set of detected objects with bounding boxes. */
	export interface GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Results for a product search request. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResults {

		/**
		 * Timestamp of the index which provided these results. Products added to the
		 * product set and products removed from the product set after this time are
		 * not reflected in the current results.
		 */
		indexTime?: string;

		/**
		 * List of results grouped by products detected in the query image. Each entry
		 * corresponds to one bounding polygon in the query image, and contains the
		 * matching products specific to that region. There may be duplicate product
		 * matches in the union of all the per-product results.
		 */
		productGroupedResults?: Array<GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p4beta1ProductSearchResultsResult>;
	}


	/**
	 * Information about the products similar to a single product in a query
	 * image.
	 */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult {

		/** A bounding polygon for the detected image annotation. */
		boundingPoly?: GoogleCloudVisionV1p4beta1BoundingPoly;

		/** List of generic predictions for the object in the bounding box. */
		objectAnnotations?: Array<GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation>;

		/** List of results, one for each product match. */
		results?: Array<GoogleCloudVisionV1p4beta1ProductSearchResultsResult>;
	}


	/** Prediction for what the object in the bounding box is. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation {

		/**
		 * The BCP-47 language code, such as "en-US" or "sr-Latn". For more
		 * information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;

		/** Object ID that should align with EntityAnnotation mid. */
		mid?: string;

		/** Object name, expressed in its `language_code` language. */
		name?: string;

		/** Score of the result. Range [0, 1]. */
		score?: number;
	}


	/** Information about a product. */
	export interface GoogleCloudVisionV1p4beta1ProductSearchResultsResult {

		/**
		 * The resource name of the image from the product that is the closest match
		 * to the query.
		 */
		image?: string;

		/** A Product contains ReferenceImages. */
		product?: GoogleCloudVisionV1p4beta1Product;

		/**
		 * A confidence level on the match, ranging from 0 (no confidence) to
		 * 1 (full confidence).
		 */
		score?: number;
	}


	/** A Product contains ReferenceImages. */
	export interface GoogleCloudVisionV1p4beta1Product {

		/**
		 * User-provided metadata to be stored with this product. Must be at most 4096
		 * characters long.
		 */
		description?: string;

		/**
		 * The user-provided name for this Product. Must not be empty. Must be at most
		 * 4096 characters long.
		 */
		displayName?: string;

		/**
		 * The resource name of the product.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
		 * This field is ignored when creating a product.
		 */
		name?: string;

		/**
		 * Immutable. The category for the product identified by the reference image. This should
		 * be either "homegoods-v2", "apparel-v2", or "toys-v2". The legacy categories
		 * "homegoods", "apparel", and "toys" are still supported, but these should
		 * not be used for new products.
		 */
		productCategory?: string;

		/**
		 * Key-value pairs that can be attached to a product. At query time,
		 * constraints can be specified based on the product_labels.
		 * Note that integer values can be provided as strings, e.g. "1199". Only
		 * strings with integer values can match a range-based restriction which is
		 * to be supported soon.
		 * Multiple values can be assigned to the same key. One product may have up to
		 * 500 product_labels.
		 * Notice that the total number of distinct product_labels over all products
		 * in one ProductSet cannot exceed 1M, otherwise the product search pipeline
		 * will refuse to work for that ProductSet.
		 */
		productLabels?: Array<GoogleCloudVisionV1p4beta1ProductKeyValue>;
	}


	/** A product label represented as a key-value pair. */
	export interface GoogleCloudVisionV1p4beta1ProductKeyValue {

		/**
		 * The key of the label attached to the product. Cannot be empty and cannot
		 * exceed 128 bytes.
		 */
		key?: string;

		/**
		 * The value of the label attached to the product. Cannot be empty and
		 * cannot exceed 128 bytes.
		 */
		value?: string;
	}


	/**
	 * Set of features pertaining to the image, computed by computer vision
	 * methods over safe-search verticals (for example, adult, spoof, medical,
	 * violence).
	 */
	export interface GoogleCloudVisionV1p4beta1SafeSearchAnnotation {

		/**
		 * Represents the adult content likelihood for the image. Adult content may
		 * contain elements such as nudity, pornographic images or cartoons, or
		 * sexual activities.
		 */
		adult?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this is a medical image. */
		medical?: FaceAnnotationAngerLikelihood;

		/**
		 * Likelihood that the request image contains racy content. Racy content may
		 * include (but is not limited to) skimpy or sheer clothing, strategically
		 * covered nudity, lewd or provocative poses, or close-ups of sensitive
		 * body areas.
		 */
		racy?: FaceAnnotationAngerLikelihood;

		/**
		 * Spoof likelihood. The likelihood that an modification
		 * was made to the image's canonical version to make it appear
		 * funny or offensive.
		 */
		spoof?: FaceAnnotationAngerLikelihood;

		/** Likelihood that this image contains violent content. */
		violence?: FaceAnnotationAngerLikelihood;
	}


	/** Relevant information for the image from the Internet. */
	export interface GoogleCloudVisionV1p4beta1WebDetection {

		/**
		 * The service's best guess as to the topic of the request image.
		 * Inferred from similar images on the open web.
		 */
		bestGuessLabels?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebLabel>;

		/**
		 * Fully matching images from the Internet.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** Web pages containing the matching images from the Internet. */
		pagesWithMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebPage>;

		/**
		 * Partial matching images from the Internet.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its crops.
		 */
		partialMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** The visually similar image results. */
		visuallySimilarImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** Deduced entities from similar images on the Internet. */
		webEntities?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebEntity>;
	}


	/** Label to provide extra metadata for the web detection. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebLabel {

		/** Label for extra metadata. */
		label?: string;

		/**
		 * The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".
		 * For more information, see
		 * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 */
		languageCode?: string;
	}


	/** Metadata for online images. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebImage {

		/** (Deprecated) Overall relevancy score for the image. */
		score?: number;

		/** The result image URL. */
		url?: string;
	}


	/** Metadata for web pages. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebPage {

		/**
		 * Fully matching images on the page.
		 * Can include resized copies of the query image.
		 */
		fullMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** Title for the web page, may contain HTML markups. */
		pageTitle?: string;

		/**
		 * Partial matching images on the page.
		 * Those images are similar enough to share some key-point features. For
		 * example an original image will likely have partial matching for its
		 * crops.
		 */
		partialMatchingImages?: Array<GoogleCloudVisionV1p4beta1WebDetectionWebImage>;

		/** (Deprecated) Overall relevancy score for the web page. */
		score?: number;

		/** The result web page URL. */
		url?: string;
	}


	/** Entity deduced from similar images on the Internet. */
	export interface GoogleCloudVisionV1p4beta1WebDetectionWebEntity {

		/** Canonical description of the entity, in English. */
		description?: string;

		/** Opaque entity ID. */
		entityId?: string;

		/**
		 * Overall relevancy score for the entity.
		 * Not normalized and not comparable across different image queries.
		 */
		score?: number;
	}


	/** The response for a single offline file annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p4beta1OutputConfig;
	}


	/** The desired output location and metadata. */
	export interface GoogleCloudVisionV1p4beta1OutputConfig {

		/**
		 * The max number of response protos to put into each output JSON file on
		 * Google Cloud Storage.
		 * The valid range is [1, 100]. If not specified, the default value is 20.
		 * For example, for one pdf file with 100 pages, 100 response protos will
		 * be generated. If `batch_size` = 20, then 5 json files each
		 * containing 20 response protos will be written under the prefix
		 * `gcs_destination`.`uri`.
		 * Currently, batch_size only applies to GcsDestination, with potential future
		 * support for other output configurations.
		 */
		batchSize?: number;

		/** The Google Cloud Storage location where the output will be written to. */
		gcsDestination?: GoogleCloudVisionV1p4beta1GcsDestination;
	}


	/** The Google Cloud Storage location where the output will be written to. */
	export interface GoogleCloudVisionV1p4beta1GcsDestination {

		/**
		 * Google Cloud Storage URI prefix where the results will be stored. Results
		 * will be in JSON format and preceded by its corresponding input URI prefix.
		 * This field can either represent a gcs file prefix or gcs directory. In
		 * either case, the uri should be unique because in order to get all of the
		 * output files, you will need to do a wildcard gcs search on the uri prefix
		 * you provide.
		 * Examples:
		 * *    File Prefix: gs://bucket-name/here/filenameprefix   The output files
		 * will be created in gs://bucket-name/here/ and the names of the
		 * output files will begin with "filenameprefix".
		 * *    Directory Prefix: gs://bucket-name/some/location/   The output files
		 * will be created in gs://bucket-name/some/location/ and the names of the
		 * output files could be anything because there was no filename prefix
		 * specified.
		 * If multiple outputs, each response is still AnnotateFileResponse, each of
		 * which contains some subset of the full list of AnnotateImageResponse.
		 * Multiple outputs can happen if, for example, the output JSON is too large
		 * and overflows into multiple sharded files.
		 */
		uri?: string;
	}


	/** Response to an async batch file annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse {

		/**
		 * The list of file annotation responses, one for each request in
		 * AsyncBatchAnnotateFilesRequest.
		 */
		responses?: Array<GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse>;
	}


	/** Response to an async batch image annotation request. */
	export interface GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse {

		/** The desired output location and metadata. */
		outputConfig?: GoogleCloudVisionV1p4beta1OutputConfig;
	}


	/** A list of file annotation responses. */
	export interface GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse {

		/**
		 * The list of file annotation responses, each response corresponding to each
		 * AnnotateFileRequest in BatchAnnotateFilesRequest.
		 */
		responses?: Array<GoogleCloudVisionV1p4beta1AnnotateFileResponse>;
	}


	/**
	 * Metadata for the batch operations such as the current state.
	 * This is included in the `metadata` field of the `Operation` returned by the
	 * `GetOperation` call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVisionV1p4beta1BatchOperationMetadata {

		/**
		 * The time when the batch request is finished and
		 * google.longrunning.Operation.done is set to true.
		 */
		endTime?: string;

		/** The current state of the batch operation. */
		state?: BatchOperationMetadataState;

		/** The time when the batch request was submitted to the server. */
		submitTime?: string;
	}


	/**
	 * Response message for the `ImportProductSets` method.
	 * This message is returned by the
	 * google.longrunning.Operations.GetOperation method in the returned
	 * google.longrunning.Operation.response field.
	 */
	export interface GoogleCloudVisionV1p4beta1ImportProductSetsResponse {

		/** The list of reference_images that are imported successfully. */
		referenceImages?: Array<GoogleCloudVisionV1p4beta1ReferenceImage>;

		/**
		 * The rpc status for each ImportProductSet request, including both successes
		 * and errors.
		 * The number of statuses here matches the number of lines in the csv file,
		 * and statuses[i] stores the success or failure status of processing the i-th
		 * line of the csv, starting from line 0.
		 */
		statuses?: Array<Status>;
	}


	/**
	 * A `ReferenceImage` represents a product image and its associated metadata,
	 * such as bounding boxes.
	 */
	export interface GoogleCloudVisionV1p4beta1ReferenceImage {

		/**
		 * Optional. Bounding polygons around the areas of interest in the reference image.
		 * If this field is empty, the system will try to detect regions of
		 * interest. At most 10 bounding polygons will be used.
		 * The provided shape is converted into a non-rotated rectangle. Once
		 * converted, the small edge of the rectangle must be greater than or equal
		 * to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5
		 * is not).
		 */
		boundingPolys?: Array<GoogleCloudVisionV1p4beta1BoundingPoly>;

		/**
		 * The resource name of the reference image.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
		 * This field is ignored when creating a reference image.
		 */
		name?: string;

		/**
		 * Required. The Google Cloud Storage URI of the reference image.
		 * The URI must start with `gs://`.
		 */
		uri?: string;
	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface GoogleCloudVisionV1p4beta1OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState;

		/** The time when the operation result was last updated. */
		updateTime?: string;
	}


	/**
	 * The Google Cloud Storage location for a csv file which preserves a list of
	 * ImportProductSetRequests in each line.
	 */
	export interface ImportProductSetsGcsSource {

		/**
		 * The Google Cloud Storage URI of the input csv file.
		 * The URI must start with `gs://`.
		 * The format of the input csv file should be one image per line.
		 * In each line, there are 8 columns.
		 * 1.  image-uri
		 * 2.  image-id
		 * 3.  product-set-id
		 * 4.  product-id
		 * 5.  product-category
		 * 6.  product-display-name
		 * 7.  labels
		 * 8.  bounding-poly
		 * The `image-uri`, `product-set-id`, `product-id`, and `product-category`
		 * columns are required. All other columns are optional.
		 * If the `ProductSet` or `Product` specified by the `product-set-id` and
		 * `product-id` values does not exist, then the system will create a new
		 * `ProductSet` or `Product` for the image. In this case, the
		 * `product-display-name` column refers to
		 * display_name, the
		 * `product-category` column refers to
		 * product_category, and the
		 * `labels` column refers to product_labels.
		 * The `image-id` column is optional but must be unique if provided. If it is
		 * empty, the system will automatically assign a unique id to the image.
		 * The `product-display-name` column is optional. If it is empty, the system
		 * sets the display_name field for the product to a
		 * space (" "). You can update the `display_name` later by using the API.
		 * If a `Product` with the specified `product-id` already exists, then the
		 * system ignores the `product-display-name`, `product-category`, and `labels`
		 * columns.
		 * The `labels` column (optional) is a line containing a list of
		 * comma-separated key-value pairs, in the following format:
		 * "key_1=value_1,key_2=value_2,...,key_n=value_n"
		 * The `bounding-poly` column (optional) identifies one region of
		 * interest from the image in the same manner as `CreateReferenceImage`. If
		 * you do not specify the `bounding-poly` column, then the system will try to
		 * detect regions of interest automatically.
		 * At most one `bounding-poly` column is allowed per line. If the image
		 * contains multiple regions of interest, add a line to the CSV file that
		 * includes the same product information, and the `bounding-poly` values for
		 * each region of interest.
		 * The `bounding-poly` column must contain an even number of comma-separated
		 * numbers, in the format "p1_x,p1_y,p2_x,p2_y,...,pn_x,pn_y". Use
		 * non-negative integers for absolute bounding polygons, and float values
		 * in [0, 1] for normalized bounding polygons.
		 * The system will resize the image if the image resolution is too
		 * large to process (larger than 20MP).
		 */
		csvFileUri?: string;
	}


	/** The input content for the `ImportProductSets` method. */
	export interface ImportProductSetsInputConfig {

		/**
		 * The Google Cloud Storage location for a csv file which preserves a list of
		 * ImportProductSetRequests in each line.
		 */
		gcsSource?: ImportProductSetsGcsSource;
	}


	/** Request message for the `ImportProductSets` method. */
	export interface ImportProductSetsRequest {

		/** The input content for the `ImportProductSets` method. */
		inputConfig?: ImportProductSetsInputConfig;
	}


	/**
	 * Response message for the `ImportProductSets` method.
	 * This message is returned by the
	 * google.longrunning.Operations.GetOperation method in the returned
	 * google.longrunning.Operation.response field.
	 */
	export interface ImportProductSetsResponse {

		/** The list of reference_images that are imported successfully. */
		referenceImages?: Array<ReferenceImage>;

		/**
		 * The rpc status for each ImportProductSet request, including both successes
		 * and errors.
		 * The number of statuses here matches the number of lines in the csv file,
		 * and statuses[i] stores the success or failure status of processing the i-th
		 * line of the csv, starting from line 0.
		 */
		statuses?: Array<Status>;
	}


	/**
	 * A `ReferenceImage` represents a product image and its associated metadata,
	 * such as bounding boxes.
	 */
	export interface ReferenceImage {

		/**
		 * Optional. Bounding polygons around the areas of interest in the reference image.
		 * If this field is empty, the system will try to detect regions of
		 * interest. At most 10 bounding polygons will be used.
		 * The provided shape is converted into a non-rotated rectangle. Once
		 * converted, the small edge of the rectangle must be greater than or equal
		 * to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5
		 * is not).
		 */
		boundingPolys?: Array<BoundingPoly>;

		/**
		 * The resource name of the reference image.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
		 * This field is ignored when creating a reference image.
		 */
		name?: string;

		/**
		 * Required. The Google Cloud Storage URI of the reference image.
		 * The URI must start with `gs://`.
		 */
		uri?: string;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}


	/** Response message for the `ListProductSets` method. */
	export interface ListProductSetsResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string;

		/** List of ProductSets. */
		productSets?: Array<ProductSet>;
	}


	/**
	 * A ProductSet contains Products. A ProductSet can contain a maximum of 1
	 * million reference images. If the limit is exceeded, periodic indexing will
	 * fail.
	 */
	export interface ProductSet {

		/**
		 * The user-provided name for this ProductSet. Must not be empty. Must be at
		 * most 4096 characters long.
		 */
		displayName?: string;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		indexError?: Status;

		/**
		 * Output only. The time at which this ProductSet was last indexed. Query
		 * results will reflect all updates before this time. If this ProductSet has
		 * never been indexed, this timestamp is the default value
		 * "1970-01-01T00:00:00Z".
		 * This field is ignored when creating a ProductSet.
		 */
		indexTime?: string;

		/**
		 * The resource name of the ProductSet.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
		 * This field is ignored when creating a ProductSet.
		 */
		name?: string;
	}


	/** Response message for the `ListProductsInProductSet` method. */
	export interface ListProductsInProductSetResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string;

		/** The list of Products. */
		products?: Array<Product>;
	}


	/** Response message for the `ListProducts` method. */
	export interface ListProductsResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string;

		/** List of products. */
		products?: Array<Product>;
	}


	/** Response message for the `ListReferenceImages` method. */
	export interface ListReferenceImagesResponse {

		/** The next_page_token returned from a previous List request, if any. */
		nextPageToken?: string;

		/** The maximum number of items to return. Default 10, maximum 100. */
		pageSize?: number;

		/** The list of reference images. */
		referenceImages?: Array<ReferenceImage>;
	}


	/** Contains metadata for the BatchAnnotateImages operation. */
	export interface OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string;

		/** Current state of the batch operation. */
		state?: GoogleCloudVisionV1p1beta1OperationMetadataState;

		/** The time when the operation result was last updated. */
		updateTime?: string;
	}


	/** Config to control which ProductSet contains the Products to be deleted. */
	export interface ProductSetPurgeConfig {

		/**
		 * The ProductSet that contains the Products to delete. If a Product is a
		 * member of product_set_id in addition to other ProductSets, the Product will
		 * still be deleted.
		 */
		productSetId?: string;
	}


	/** Request message for the `PurgeProducts` method. */
	export interface PurgeProductsRequest {

		/**
		 * If delete_orphan_products is true, all Products that are not in any
		 * ProductSet will be deleted.
		 */
		deleteOrphanProducts?: boolean;

		/**
		 * The default value is false. Override this value to true to actually perform
		 * the purge.
		 */
		force?: boolean;

		/** Config to control which ProductSet contains the Products to be deleted. */
		productSetPurgeConfig?: ProductSetPurgeConfig;
	}


	/** Request message for the `RemoveProductFromProductSet` method. */
	export interface RemoveProductFromProductSetRequest {

		/**
		 * Required. The resource name for the Product to be removed from this ProductSet.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
		 */
		product?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Service that performs image detection and annotation for a batch of files.
		 * Now only "application/pdf", "image/tiff" and "image/gif" are supported.
		 * This service will extract at most 5 (customers can specify which 5 in
		 * AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each
		 * file provided and perform detection and annotation for each image
		 * extracted.
		 * Post v1/files:annotate
		 * @return {void} Successful response
		 */
		Vision_files_annotate(requestBody: BatchAnnotateFilesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/files:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Run asynchronous image detection and annotation for a list of generic
		 * files, such as PDF files, which may contain multiple pages and multiple
		 * images per page. Progress and results can be retrieved through the
		 * `google.longrunning.Operations` interface.
		 * `Operation.metadata` contains `OperationMetadata` (metadata).
		 * `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
		 * Post v1/files:asyncBatchAnnotate
		 * @return {void} Successful response
		 */
		Vision_files_asyncBatchAnnotate(requestBody: AsyncBatchAnnotateFilesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/files:asyncBatchAnnotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Run image detection and annotation for a batch of images.
		 * Post v1/images:annotate
		 * @return {void} Successful response
		 */
		Vision_images_annotate(requestBody: BatchAnnotateImagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/images:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Run asynchronous image detection and annotation for a list of images.
		 * Progress and results can be retrieved through the
		 * `google.longrunning.Operations` interface.
		 * `Operation.metadata` contains `OperationMetadata` (metadata).
		 * `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results).
		 * This service will write image annotation outputs to json files in customer
		 * GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
		 * Post v1/images:asyncBatchAnnotate
		 * @return {void} Successful response
		 */
		Vision_images_asyncBatchAnnotate(requestBody: AsyncBatchAnnotateImagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/images:asyncBatchAnnotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a ProductSet. Products and ReferenceImages in the
		 * ProductSet are not deleted.
		 * The actual image files are not deleted from Google Cloud Storage.
		 * Delete v1/{name}
		 * @param {string} name Required. Resource name of the ProductSet to delete.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information associated with a ProductSet.
		 * Possible errors:
		 * * Returns NOT_FOUND if the ProductSet does not exist.
		 * Get v1/{name}
		 * @param {string} name Required. Resource name of the ProductSet to get.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Makes changes to a ProductSet resource.
		 * Only display_name can be updated currently.
		 * Possible errors:
		 * * Returns NOT_FOUND if the ProductSet does not exist.
		 * * Returns INVALID_ARGUMENT if display_name is present in update_mask but
		 * missing from the request or longer than 4096 characters.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the ProductSet.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
		 * This field is ignored when creating a ProductSet.
		 * @param {string} updateMask The FieldMask that specifies which fields to
		 * update.
		 * If update_mask isn't specified, all mutable fields are to be updated.
		 * Valid mask path is `display_name`.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_patch(name: string, updateMask: string, requestBody: ProductSet): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Products in a ProductSet, in an unspecified order. If the
		 * ProductSet does not exist, the products field of the response will be
		 * empty.
		 * Possible errors:
		 * * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
		 * Get v1/{name}/products
		 * @param {string} name Required. The ProductSet resource for which to retrieve Products.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
		 * @param {number} pageSize The maximum number of items to return. Default 10, maximum 100.
		 * @param {string} pageToken The next_page_token returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_products_list(name: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/products&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a Product to the specified ProductSet. If the Product is already
		 * present, no change is made.
		 * One Product can be added to at most 100 ProductSets.
		 * Possible errors:
		 * * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.
		 * Post v1/{name}:addProduct
		 * @param {string} name Required. The resource name for the ProductSet to modify.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_addProduct(name: string, requestBody: AddProductToProductSetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':addProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.  The server
		 * makes a best effort to cancel the operation, but success is not
		 * guaranteed.  If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Vision_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a Product from the specified ProductSet.
		 * Post v1/{name}:removeProduct
		 * @param {string} name Required. The resource name for the ProductSet to modify.
		 * Format is:
		 * `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_removeProduct(name: string, requestBody: RemoveProductFromProductSetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':removeProduct', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Service that performs image detection and annotation for a batch of files.
		 * Now only "application/pdf", "image/tiff" and "image/gif" are supported.
		 * This service will extract at most 5 (customers can specify which 5 in
		 * AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each
		 * file provided and perform detection and annotation for each image
		 * extracted.
		 * Post v1/{parent}/files:annotate
		 * @param {string} parent Optional. Target project and location to make a call.
		 * Format: `projects/{project-id}/locations/{location-id}`.
		 * If no parent is specified, a region will be chosen automatically.
		 * Supported location-ids:
		 *     `us`: USA country only,
		 *     `asia`: East asia areas, like Japan, Taiwan,
		 *     `eu`: The European Union.
		 * Example: `projects/project-A/locations/eu`.
		 * @return {void} Successful response
		 */
		Vision_projects_files_annotate(parent: string, requestBody: BatchAnnotateFilesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/files:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Run asynchronous image detection and annotation for a list of generic
		 * files, such as PDF files, which may contain multiple pages and multiple
		 * images per page. Progress and results can be retrieved through the
		 * `google.longrunning.Operations` interface.
		 * `Operation.metadata` contains `OperationMetadata` (metadata).
		 * `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
		 * Post v1/{parent}/files:asyncBatchAnnotate
		 * @param {string} parent Optional. Target project and location to make a call.
		 * Format: `projects/{project-id}/locations/{location-id}`.
		 * If no parent is specified, a region will be chosen automatically.
		 * Supported location-ids:
		 *     `us`: USA country only,
		 *     `asia`: East asia areas, like Japan, Taiwan,
		 *     `eu`: The European Union.
		 * Example: `projects/project-A/locations/eu`.
		 * @return {void} Successful response
		 */
		Vision_projects_files_asyncBatchAnnotate(parent: string, requestBody: AsyncBatchAnnotateFilesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/files:asyncBatchAnnotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Run image detection and annotation for a batch of images.
		 * Post v1/{parent}/images:annotate
		 * @param {string} parent Optional. Target project and location to make a call.
		 * Format: `projects/{project-id}/locations/{location-id}`.
		 * If no parent is specified, a region will be chosen automatically.
		 * Supported location-ids:
		 *     `us`: USA country only,
		 *     `asia`: East asia areas, like Japan, Taiwan,
		 *     `eu`: The European Union.
		 * Example: `projects/project-A/locations/eu`.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_images_annotate(parent: string, requestBody: BatchAnnotateImagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/images:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Run asynchronous image detection and annotation for a list of images.
		 * Progress and results can be retrieved through the
		 * `google.longrunning.Operations` interface.
		 * `Operation.metadata` contains `OperationMetadata` (metadata).
		 * `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results).
		 * This service will write image annotation outputs to json files in customer
		 * GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
		 * Post v1/{parent}/images:asyncBatchAnnotate
		 * @param {string} parent Optional. Target project and location to make a call.
		 * Format: `projects/{project-id}/locations/{location-id}`.
		 * If no parent is specified, a region will be chosen automatically.
		 * Supported location-ids:
		 *     `us`: USA country only,
		 *     `asia`: East asia areas, like Japan, Taiwan,
		 *     `eu`: The European Union.
		 * Example: `projects/project-A/locations/eu`.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_images_asyncBatchAnnotate(parent: string, requestBody: AsyncBatchAnnotateImagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/images:asyncBatchAnnotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists ProductSets in an unspecified order.
		 * Possible errors:
		 * * Returns INVALID_ARGUMENT if page_size is greater than 100, or less
		 * than 1.
		 * Get v1/{parent}/productSets
		 * @param {string} parent Required. The project from which ProductSets should be listed.
		 * Format is `projects/PROJECT_ID/locations/LOC_ID`.
		 * @param {number} pageSize The maximum number of items to return. Default 10, maximum 100.
		 * @param {string} pageToken The next_page_token returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/productSets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates and returns a new ProductSet resource.
		 * Possible errors:
		 * * Returns INVALID_ARGUMENT if display_name is missing, or is longer than
		 * 4096 characters.
		 * Post v1/{parent}/productSets
		 * @param {string} parent Required. The project in which the ProductSet should be created.
		 * Format is `projects/PROJECT_ID/locations/LOC_ID`.
		 * @param {string} productSetId A user-supplied resource id for this ProductSet. If set, the server will
		 * attempt to use this value as the resource id. If it is already in use, an
		 * error is returned with code ALREADY_EXISTS. Must be at most 128 characters
		 * long. It cannot contain the character `/`.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_create(parent: string, productSetId: string, requestBody: ProductSet): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/productSets&productSetId=' + (productSetId == null ? '' : encodeURIComponent(productSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Asynchronous API that imports a list of reference images to specified
		 * product sets based on a list of image information.
		 * The google.longrunning.Operation API can be used to keep track of the
		 * progress and results of the request.
		 * `Operation.metadata` contains `BatchOperationMetadata`. (progress)
		 * `Operation.response` contains `ImportProductSetsResponse`. (results)
		 * The input source of this method is a csv file on Google Cloud Storage.
		 * For the format of the csv file please see
		 * ImportProductSetsGcsSource.csv_file_uri.
		 * Post v1/{parent}/productSets:import
		 * @param {string} parent Required. The project in which the ProductSets should be imported.
		 * Format is `projects/PROJECT_ID/locations/LOC_ID`.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_productSets_import(parent: string, requestBody: ImportProductSetsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/productSets:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists products in an unspecified order.
		 * Possible errors:
		 * * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
		 * Get v1/{parent}/products
		 * @param {string} parent Required. The project OR ProductSet from which Products should be listed.
		 * Format:
		 * `projects/PROJECT_ID/locations/LOC_ID`
		 * @param {number} pageSize The maximum number of items to return. Default 10, maximum 100.
		 * @param {string} pageToken The next_page_token returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_products_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates and returns a new product resource.
		 * Possible errors:
		 * * Returns INVALID_ARGUMENT if display_name is missing or longer than 4096
		 * characters.
		 * * Returns INVALID_ARGUMENT if description is longer than 4096 characters.
		 * * Returns INVALID_ARGUMENT if product_category is missing or invalid.
		 * Post v1/{parent}/products
		 * @param {string} parent Required. The project in which the Product should be created.
		 * Format is
		 * `projects/PROJECT_ID/locations/LOC_ID`.
		 * @param {string} productId A user-supplied resource id for this Product. If set, the server will
		 * attempt to use this value as the resource id. If it is already in use, an
		 * error is returned with code ALREADY_EXISTS. Must be at most 128 characters
		 * long. It cannot contain the character `/`.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_products_create(parent: string, productId: string, requestBody: Product): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products&productId=' + (productId == null ? '' : encodeURIComponent(productId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Asynchronous API to delete all Products in a ProductSet or all Products
		 * that are in no ProductSet.
		 * If a Product is a member of the specified ProductSet in addition to other
		 * ProductSets, the Product will still be deleted.
		 * It is recommended to not delete the specified ProductSet until after this
		 * operation has completed. It is also recommended to not add any of the
		 * Products involved in the batch delete to a new ProductSet while this
		 * operation is running because those Products may still end up deleted.
		 * It's not possible to undo the PurgeProducts operation. Therefore, it is
		 * recommended to keep the csv files used in ImportProductSets (if that was
		 * how you originally built the Product Set) before starting PurgeProducts, in
		 * case you need to re-import the data after deletion.
		 * If the plan is to purge all of the Products from a ProductSet and then
		 * re-use the empty ProductSet to re-import new Products into the empty
		 * ProductSet, you must wait until the PurgeProducts operation has finished
		 * for that ProductSet.
		 * The google.longrunning.Operation API can be used to keep track of the
		 * progress and results of the request.
		 * `Operation.metadata` contains `BatchOperationMetadata`. (progress)
		 * Post v1/{parent}/products:purge
		 * @param {string} parent Required. The project and location in which the Products should be deleted.
		 * Format is `projects/PROJECT_ID/locations/LOC_ID`.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_products_purge(parent: string, requestBody: PurgeProductsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products:purge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists reference images.
		 * Possible errors:
		 * * Returns NOT_FOUND if the parent product does not exist.
		 * * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less
		 * than 1.
		 * Get v1/{parent}/referenceImages
		 * @param {string} parent Required. Resource name of the product containing the reference images.
		 * Format is
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
		 * @param {number} pageSize The maximum number of items to return. Default 10, maximum 100.
		 * @param {string} pageToken A token identifying a page of results to be returned. This is the value
		 * of `nextPageToken` returned in a previous reference image list request.
		 * Defaults to the first page if not specified.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_products_referenceImages_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/referenceImages&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates and returns a new ReferenceImage resource.
		 * The `bounding_poly` field is optional. If `bounding_poly` is not specified,
		 * the system will try to detect regions of interest in the image that are
		 * compatible with the product_category on the parent product. If it is
		 * specified, detection is ALWAYS skipped. The system converts polygons into
		 * non-rotated rectangles.
		 * Note that the pipeline will resize the image if the image resolution is too
		 * large to process (above 50MP).
		 * Possible errors:
		 * * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096
		 * characters.
		 * * Returns INVALID_ARGUMENT if the product does not exist.
		 * * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing
		 * compatible with the parent product's product_category is detected.
		 * * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.
		 * Post v1/{parent}/referenceImages
		 * @param {string} parent Required. Resource name of the product in which to create the reference image.
		 * Format is
		 * `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
		 * @param {string} referenceImageId A user-supplied resource id for the ReferenceImage to be added. If set,
		 * the server will attempt to use this value as the resource id. If it is
		 * already in use, an error is returned with code ALREADY_EXISTS. Must be at
		 * most 128 characters long. It cannot contain the character `/`.
		 * @return {void} Successful response
		 */
		Vision_projects_locations_products_referenceImages_create(parent: string, referenceImageId: string, requestBody: ReferenceImage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/referenceImages&referenceImageId=' + (referenceImageId == null ? '' : encodeURIComponent(referenceImageId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

