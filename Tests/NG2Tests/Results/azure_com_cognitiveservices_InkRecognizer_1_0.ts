import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AlternatePatternElement {

		/**
		 * The category of recognition units that represent types that don't have children recognition units.
		 * Required
		 */
		category: AlternatePatternElementCategory;

		/** A number between 0 and 1 which indicates the confidence level in the result */
		confidence?: number | null;

		/** Array of point objects that represent points that are relevant to the type of recognition unit. For example, for leaf node of inkDrawing category that represents a triangle, points would include the x,y coordinates of the vertices of the recognized triangle. The points represent the coordinates of points used to create the perfectly drawn shape that is closest to the original input. They may not exactly match. */
		points?: Array<PointDetailsPattern>;

		/**
		 * The recognized string from an inkWord or the name of a recognized shape in an inkDrawing object
		 * Required
		 */
		recognizedString: string;

		/** The angular orientation of an object relative to the horizontal axis */
		rotationAngle?: number | null;
	}
	export interface AlternatePatternElementFormProperties {

		/**
		 * The category of recognition units that represent types that don't have children recognition units.
		 * Required
		 */
		category: FormControl<AlternatePatternElementCategory | null | undefined>,

		/** A number between 0 and 1 which indicates the confidence level in the result */
		confidence: FormControl<number | null | undefined>,

		/**
		 * The recognized string from an inkWord or the name of a recognized shape in an inkDrawing object
		 * Required
		 */
		recognizedString: FormControl<string | null | undefined>,

		/** The angular orientation of an object relative to the horizontal axis */
		rotationAngle: FormControl<number | null | undefined>,
	}
	export function CreateAlternatePatternElementFormGroup() {
		return new FormGroup<AlternatePatternElementFormProperties>({
			category: new FormControl<AlternatePatternElementCategory | null | undefined>(undefined, [Validators.required]),
			confidence: new FormControl<number | null | undefined>(undefined),
			recognizedString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rotationAngle: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AlternatePatternElementCategory { inkDrawing = 'inkDrawing', inkBullet = 'inkBullet', inkWord = 'inkWord', unknown = 'unknown' }


	/** This holds all the properties of one point */
	export interface PointDetailsPattern {

		/**
		 * This represents the x coordinate of the point
		 * Required
		 */
		x: number;

		/**
		 * This represents the y coordinate of the point
		 * Required
		 */
		y: number;
	}

	/** This holds all the properties of one point */
	export interface PointDetailsPatternFormProperties {

		/**
		 * This represents the x coordinate of the point
		 * Required
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * This represents the y coordinate of the point
		 * Required
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreatePointDetailsPatternFormGroup() {
		return new FormGroup<PointDetailsPatternFormProperties>({
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This shows the expected contents of a request */
	export interface AnalysisRequest {

		/** This describes the domain of the client application */
		applicationType?: AnalysisRequestApplicationType | null;
		inkPointValueAttributes?: Array<InkPointValueAttribute>;

		/** This identifies the kind of device used as the writing instrument */
		inputDeviceKind?: AnalysisRequestInputDeviceKind | null;

		/**
		 * The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for the handwritten content in the ink strokes. The response will include results from this language.
		 * Required
		 */
		language: string;

		/**
		 * This is the array of strokes sent for recognition. Best results are produced when the order of strokes added in the array matches the order in which the user created them. Changing the stroke order may produce unexpected results.
		 * Required
		 */
		strokes: Array<Stroke>;

		/** This is the physical unit of the ink strokes. It is up to the application developer to decide how to convert the device specific units to physical units before calling the service. The conversion factor can be different based on the type of the device used. */
		unit?: AnalysisRequestUnit | null;

		/** This is a scaling factor to be applied to the point coordinates when interpreting them in the physical units specified. */
		unitMultiple?: number | null;
	}

	/** This shows the expected contents of a request */
	export interface AnalysisRequestFormProperties {

		/** This describes the domain of the client application */
		applicationType: FormControl<AnalysisRequestApplicationType | null | undefined>,

		/** This identifies the kind of device used as the writing instrument */
		inputDeviceKind: FormControl<AnalysisRequestInputDeviceKind | null | undefined>,

		/**
		 * The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for the handwritten content in the ink strokes. The response will include results from this language.
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** This is the physical unit of the ink strokes. It is up to the application developer to decide how to convert the device specific units to physical units before calling the service. The conversion factor can be different based on the type of the device used. */
		unit: FormControl<AnalysisRequestUnit | null | undefined>,

		/** This is a scaling factor to be applied to the point coordinates when interpreting them in the physical units specified. */
		unitMultiple: FormControl<number | null | undefined>,
	}
	export function CreateAnalysisRequestFormGroup() {
		return new FormGroup<AnalysisRequestFormProperties>({
			applicationType: new FormControl<AnalysisRequestApplicationType | null | undefined>(undefined),
			inputDeviceKind: new FormControl<AnalysisRequestInputDeviceKind | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<AnalysisRequestUnit | null | undefined>(undefined),
			unitMultiple: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalysisRequestApplicationType { drawing = 'drawing', writing = 'writing', mixed = 'mixed' }


	/** A container for the attributes of a value contained in the ink point object. */
	export interface InkPointValueAttribute {

		/** The maximum value for the attribute */
		logicalMaximum?: number | null;

		/** The minimum value for the attribute */
		logicalMinimum?: number | null;

		/** The name of the point attribute. */
		name?: string | null;
	}

	/** A container for the attributes of a value contained in the ink point object. */
	export interface InkPointValueAttributeFormProperties {

		/** The maximum value for the attribute */
		logicalMaximum: FormControl<number | null | undefined>,

		/** The minimum value for the attribute */
		logicalMinimum: FormControl<number | null | undefined>,

		/** The name of the point attribute. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInkPointValueAttributeFormGroup() {
		return new FormGroup<InkPointValueAttributeFormProperties>({
			logicalMaximum: new FormControl<number | null | undefined>(undefined),
			logicalMinimum: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalysisRequestInputDeviceKind { digitizer = 'digitizer', pen = 'pen', lightPen = 'lightPen', touchScreen = 'touchScreen', touchPad = 'touchPad', whiteBoard = 'whiteBoard', '3dDigitizer' = '3dDigitizer', stereoPlotter = 'stereoPlotter', articulatedArm = 'articulatedArm', armature = 'armature' }

	export interface Stroke {

		/** The properties to use when rendering ink */
		drawingAttributes?: DrawingAttributesPattern;

		/**
		 * This is treated as a unique identifier for each stroke within a request. If the id is repeated within the same request, the service will return an error.
		 * Required
		 */
		id: number;

		/** This is an optional property which influences the decision about what the stroke kind is between inkWriting and inkDrawing. This property should be set ONLY if the type of user content is known ahead of time. Not setting this value implies the kind is not known ahead of time. Kind represents the type of content the stroke is a part of. */
		kind?: StrokeKind | null;

		/** The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for the handwritten content in this stroke. The response will include results from this language. */
		language?: string | null;

		/** Required */
		points: Array<InkPoint>;
	}
	export interface StrokeFormProperties {

		/**
		 * This is treated as a unique identifier for each stroke within a request. If the id is repeated within the same request, the service will return an error.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/** This is an optional property which influences the decision about what the stroke kind is between inkWriting and inkDrawing. This property should be set ONLY if the type of user content is known ahead of time. Not setting this value implies the kind is not known ahead of time. Kind represents the type of content the stroke is a part of. */
		kind: FormControl<StrokeKind | null | undefined>,

		/** The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for the handwritten content in this stroke. The response will include results from this language. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateStrokeFormGroup() {
		return new FormGroup<StrokeFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<StrokeKind | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties to use when rendering ink */
	export interface DrawingAttributesPattern {

		/** This shows the components of the color in rgba format */
		color?: DrawingAttributesPatternColor;

		/** This indicates whether Bezier smoothing is used to render the stroke */
		fitToCurve?: boolean | null;

		/** The height of the stylus used to draw the stroke */
		height?: number | null;

		/** This indicates whether the thickness of a rendered Stroke changes according the amount of pressure applied. */
		ignorePressure?: boolean | null;
		rasterOp?: DrawingAttributesPatternRasterOp | null;

		/** This specifies the tip to be used to draw a stroke */
		tip?: DrawingAttributesPatternTip | null;

		/** The width of the stylus used to draw the stroke */
		width?: number | null;
	}

	/** The properties to use when rendering ink */
	export interface DrawingAttributesPatternFormProperties {

		/** This indicates whether Bezier smoothing is used to render the stroke */
		fitToCurve: FormControl<boolean | null | undefined>,

		/** The height of the stylus used to draw the stroke */
		height: FormControl<number | null | undefined>,

		/** This indicates whether the thickness of a rendered Stroke changes according the amount of pressure applied. */
		ignorePressure: FormControl<boolean | null | undefined>,
		rasterOp: FormControl<DrawingAttributesPatternRasterOp | null | undefined>,

		/** This specifies the tip to be used to draw a stroke */
		tip: FormControl<DrawingAttributesPatternTip | null | undefined>,

		/** The width of the stylus used to draw the stroke */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDrawingAttributesPatternFormGroup() {
		return new FormGroup<DrawingAttributesPatternFormProperties>({
			fitToCurve: new FormControl<boolean | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			ignorePressure: new FormControl<boolean | null | undefined>(undefined),
			rasterOp: new FormControl<DrawingAttributesPatternRasterOp | null | undefined>(undefined),
			tip: new FormControl<DrawingAttributesPatternTip | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DrawingAttributesPatternColor {

		/** The alpha component of the color */
		a?: number | null;

		/** The blue component of the color */
		b?: number | null;

		/** The green component of the color */
		g?: number | null;

		/** The red component of the color */
		r?: number | null;
	}
	export interface DrawingAttributesPatternColorFormProperties {

		/** The alpha component of the color */
		a: FormControl<number | null | undefined>,

		/** The blue component of the color */
		b: FormControl<number | null | undefined>,

		/** The green component of the color */
		g: FormControl<number | null | undefined>,

		/** The red component of the color */
		r: FormControl<number | null | undefined>,
	}
	export function CreateDrawingAttributesPatternColorFormGroup() {
		return new FormGroup<DrawingAttributesPatternColorFormProperties>({
			a: new FormControl<number | null | undefined>(undefined),
			b: new FormControl<number | null | undefined>(undefined),
			g: new FormControl<number | null | undefined>(undefined),
			r: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DrawingAttributesPatternRasterOp { noOperation = 'noOperation', copyPen = 'copyPen', maskPen = 'maskPen' }

	export enum DrawingAttributesPatternTip { ellipse = 'ellipse', rectangle = 'rectangle' }

	export enum StrokeKind { inkDrawing = 'inkDrawing', inkWriting = 'inkWriting' }


	/** An object containing the properties of an point in the path of an ink stroke. The main properties are the x and y values. Other include tip pressure, x tilt etc. For the coordinate values, it is recommended to have a precision of 8 digits after the decimal to obtain most accurate recognition results. The origin (0,0) of the canvas is assumed to be at the top left corner of the canvas */
	export interface InkPoint {

		/** The force exerted directly by the user on a transducer sensor, such as a pressure-sensitive button on the barrel of a stylus. This may not be used for recognition. */
		barrelPressure?: number | null;

		/** A non-tip button located on the barrel of a stylus. Its function is typically mapped to a system secondary button. This may not be used for recognition. */
		barrelSwitch?: boolean | null;

		/** The control is used for erasing objects. It is typically located opposite the writing end of a stylus. This may not be used for recognition. */
		eraser?: boolean | null;

		/** The height of the tip of the writing instrument. This is used by touch screen devices to report the height of the finger contact on the writing surface. This may not be used for recognition. */
		height?: number | null;

		/** A value that indicates that the currently sensed position originates from the end of a stylus opposite the tip switch. This may not be used for recognition. */
		inverted?: boolean | null;

		/** A secondary switch used in conjunction with the tip switch to indicate pressure above a certain threshold applied with the stylus. This may not be used for recognition. */
		secondaryTip?: boolean | null;

		/** The time relative to the absolute time the transducer last became active. This may not be used for recognition. */
		timestamp?: number | null;

		/** The force exerted against the tablet surface by the transducer, typically a stylus. This may not be used for recognition. */
		tipPressure?: number | null;

		/** A switch located on the tip of a stylus indicating contact of the stylus with a surface. This may not be used for recognition. */
		tipSwitch?: boolean | null;

		/** The width of the tip of the writing instrument. This is used by touch screen devices to report the width of the finger contact on the writing surface. This may not be used for recognition. */
		width?: number | null;

		/**
		 * The x coordinate of the pen location on the writing surface.
		 * Required
		 */
		x: number;

		/** The plane angle between the Y-Z plane and the plane containing the transducer axis and the Y axis. This may not be used for recognition. */
		xTilt?: number | null;

		/**
		 * The y coordinate of the pen location on the writing surface.
		 * Required
		 */
		y: number;

		/** The angle between the X-Z and transducer-X planes. A positive Y Tilt is toward the user. This may not be used for recognition. */
		yTilt?: number | null;

		/** The z coordinate of the pen location on the writing space. This may not be used for recognition. */
		z?: number | null;
	}

	/** An object containing the properties of an point in the path of an ink stroke. The main properties are the x and y values. Other include tip pressure, x tilt etc. For the coordinate values, it is recommended to have a precision of 8 digits after the decimal to obtain most accurate recognition results. The origin (0,0) of the canvas is assumed to be at the top left corner of the canvas */
	export interface InkPointFormProperties {

		/** The force exerted directly by the user on a transducer sensor, such as a pressure-sensitive button on the barrel of a stylus. This may not be used for recognition. */
		barrelPressure: FormControl<number | null | undefined>,

		/** A non-tip button located on the barrel of a stylus. Its function is typically mapped to a system secondary button. This may not be used for recognition. */
		barrelSwitch: FormControl<boolean | null | undefined>,

		/** The control is used for erasing objects. It is typically located opposite the writing end of a stylus. This may not be used for recognition. */
		eraser: FormControl<boolean | null | undefined>,

		/** The height of the tip of the writing instrument. This is used by touch screen devices to report the height of the finger contact on the writing surface. This may not be used for recognition. */
		height: FormControl<number | null | undefined>,

		/** A value that indicates that the currently sensed position originates from the end of a stylus opposite the tip switch. This may not be used for recognition. */
		inverted: FormControl<boolean | null | undefined>,

		/** A secondary switch used in conjunction with the tip switch to indicate pressure above a certain threshold applied with the stylus. This may not be used for recognition. */
		secondaryTip: FormControl<boolean | null | undefined>,

		/** The time relative to the absolute time the transducer last became active. This may not be used for recognition. */
		timestamp: FormControl<number | null | undefined>,

		/** The force exerted against the tablet surface by the transducer, typically a stylus. This may not be used for recognition. */
		tipPressure: FormControl<number | null | undefined>,

		/** A switch located on the tip of a stylus indicating contact of the stylus with a surface. This may not be used for recognition. */
		tipSwitch: FormControl<boolean | null | undefined>,

		/** The width of the tip of the writing instrument. This is used by touch screen devices to report the width of the finger contact on the writing surface. This may not be used for recognition. */
		width: FormControl<number | null | undefined>,

		/**
		 * The x coordinate of the pen location on the writing surface.
		 * Required
		 */
		x: FormControl<number | null | undefined>,

		/** The plane angle between the Y-Z plane and the plane containing the transducer axis and the Y axis. This may not be used for recognition. */
		xTilt: FormControl<number | null | undefined>,

		/**
		 * The y coordinate of the pen location on the writing surface.
		 * Required
		 */
		y: FormControl<number | null | undefined>,

		/** The angle between the X-Z and transducer-X planes. A positive Y Tilt is toward the user. This may not be used for recognition. */
		yTilt: FormControl<number | null | undefined>,

		/** The z coordinate of the pen location on the writing space. This may not be used for recognition. */
		z: FormControl<number | null | undefined>,
	}
	export function CreateInkPointFormGroup() {
		return new FormGroup<InkPointFormProperties>({
			barrelPressure: new FormControl<number | null | undefined>(undefined),
			barrelSwitch: new FormControl<boolean | null | undefined>(undefined),
			eraser: new FormControl<boolean | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			inverted: new FormControl<boolean | null | undefined>(undefined),
			secondaryTip: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			tipPressure: new FormControl<number | null | undefined>(undefined),
			tipSwitch: new FormControl<boolean | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			xTilt: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			yTilt: new FormControl<number | null | undefined>(undefined),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalysisRequestUnit { mm = 'mm', cm = 'cm', in = 'in' }


	/** This shows the expected contents of a response from the service */
	export interface AnalysisResponse {

		/** This is the language used for recognizing handwriting from the ink strokes in the request. */
		language?: string | null;

		/**
		 * The list of recognition units based on the analysis of the ink strokes.
		 * Required
		 */
		AnalysisResponseRecognitionUnits: Array<AnalysisResponseRecognitionUnits>;

		/** This is the physical unit of the ink strokes. It is up to the application developer to decide how to convert the device specific units to physical units before calling the service. The conversion factor can be different based on the type of the device used. */
		unit?: AnalysisRequestUnit | null;

		/** This is a scaling factor to be applied to the point coordinates when interpreting them in the physical units specified. */
		unitMultiple?: number | null;
	}

	/** This shows the expected contents of a response from the service */
	export interface AnalysisResponseFormProperties {

		/** This is the language used for recognizing handwriting from the ink strokes in the request. */
		language: FormControl<string | null | undefined>,

		/** This is the physical unit of the ink strokes. It is up to the application developer to decide how to convert the device specific units to physical units before calling the service. The conversion factor can be different based on the type of the device used. */
		unit: FormControl<AnalysisRequestUnit | null | undefined>,

		/** This is a scaling factor to be applied to the point coordinates when interpreting them in the physical units specified. */
		unitMultiple: FormControl<number | null | undefined>,
	}
	export function CreateAnalysisResponseFormGroup() {
		return new FormGroup<AnalysisResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<AnalysisRequestUnit | null | undefined>(undefined),
			unitMultiple: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AnalysisResponseRecognitionUnits {

		/** The list of alternates for the core recognition result. In case of handwriting related recognition units, this list includes other words that are close possibilities to the results provided as 'recognizedText'. */
		alternates?: Array<AlternatePatternElement>;

		/** The bounding rectangle of the recognition unit represented by the coordinates of the top left corner (topX,topY) along with width and height of the rectangle. Note that this rectangle is not rotated. So for  rotated objects such as slanted handwriting, it will cover the entire object. The unit will be matched to the one specified in the original request (mm by default.) */
		boundingRectangle?: AnalysisResponseRecognitionUnitsBoundingRectangle;

		/**
		 * The category of a recognition unit represents the type of content for that unit.
		 * Required
		 */
		category: AnalysisResponseRecognitionUnitsCategory;

		/** This holds all the properties of one point */
		center?: PointDetailsPattern;

		/** An array of integers representing the identifier of each child of the current recognition unit. */
		childIds?: Array<number>;

		/**
		 * The class represents the type of the recognition unit. A recognition unit can be a leaf node or a container node. Container nodes typically have leaf nodes as children.
		 * Required
		 */
		class: AnalysisResponseRecognitionUnitsClass;

		/** A number between 0 and 1 which indicates the confidence level in the result. */
		confidence?: number | null;

		/**
		 * The identifier of the recognition unit. This id is used to indicate parent/child relationship between different recognition units.
		 * Required
		 */
		id: number;

		/**
		 * The id of the parent node in the tree structure of the recognition results. parent = 0 indicates that there is no dedicated parent node for this unit.
		 * Required
		 */
		parentId: number;

		/** Array of point objects that represent points that are relevant to the type of recognition unit. For example, for a leaf node of inkDrawing category that represents a triangle, points would include the x, y coordinates of the vertices of the recognized triangle. The points represent the coordinates used to create the perfectly drawn shape that is closest to the original input. They may not exactly match. */
		points?: Array<PointDetailsPattern>;

		/** The category should be used to determines the field to read the recognition result. Recognized Object represents the shape that was recognized for the node with category as inkDrawing. For handwriting related nodes, recognizedText contains the actual recognition result. */
		recognizedObject?: AnalysisResponseRecognitionUnitsRecognizedObject | null;

		/** The string contains the text that was recognized. It can be an empty string if the recognizer cannot determine the text. */
		recognizedText?: string | null;

		/** This is the rotated bounding rectangle that covers the entire recognized object along the angle of rotation of the object. Note that this is NOT the same as rotating the boundingRectangle by the rotation angle. */
		rotatedBoundingRectangle?: Array<PointDetailsPattern>;

		/** This is the angle at which the unit is rotated in degrees with respect to the positive X axis. */
		rotationAngle?: number | null;

		/**
		 * This is an array of integers representing the list of stroke Identifiers from the input request body that belong to this recognition unit.
		 * Required
		 */
		strokeIds: Array<number>;
	}
	export interface AnalysisResponseRecognitionUnitsFormProperties {

		/**
		 * The category of a recognition unit represents the type of content for that unit.
		 * Required
		 */
		category: FormControl<AnalysisResponseRecognitionUnitsCategory | null | undefined>,

		/**
		 * The class represents the type of the recognition unit. A recognition unit can be a leaf node or a container node. Container nodes typically have leaf nodes as children.
		 * Required
		 */
		class: FormControl<AnalysisResponseRecognitionUnitsClass | null | undefined>,

		/** A number between 0 and 1 which indicates the confidence level in the result. */
		confidence: FormControl<number | null | undefined>,

		/**
		 * The identifier of the recognition unit. This id is used to indicate parent/child relationship between different recognition units.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The id of the parent node in the tree structure of the recognition results. parent = 0 indicates that there is no dedicated parent node for this unit.
		 * Required
		 */
		parentId: FormControl<number | null | undefined>,

		/** The category should be used to determines the field to read the recognition result. Recognized Object represents the shape that was recognized for the node with category as inkDrawing. For handwriting related nodes, recognizedText contains the actual recognition result. */
		recognizedObject: FormControl<AnalysisResponseRecognitionUnitsRecognizedObject | null | undefined>,

		/** The string contains the text that was recognized. It can be an empty string if the recognizer cannot determine the text. */
		recognizedText: FormControl<string | null | undefined>,

		/** This is the angle at which the unit is rotated in degrees with respect to the positive X axis. */
		rotationAngle: FormControl<number | null | undefined>,
	}
	export function CreateAnalysisResponseRecognitionUnitsFormGroup() {
		return new FormGroup<AnalysisResponseRecognitionUnitsFormProperties>({
			category: new FormControl<AnalysisResponseRecognitionUnitsCategory | null | undefined>(undefined, [Validators.required]),
			class: new FormControl<AnalysisResponseRecognitionUnitsClass | null | undefined>(undefined, [Validators.required]),
			confidence: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			recognizedObject: new FormControl<AnalysisResponseRecognitionUnitsRecognizedObject | null | undefined>(undefined),
			recognizedText: new FormControl<string | null | undefined>(undefined),
			rotationAngle: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AnalysisResponseRecognitionUnitsBoundingRectangle {

		/** The is the height of the bounding rectangle */
		height?: number | null;

		/** This is the top left x coordinate */
		topX?: number | null;

		/** This is the top left y coordinate */
		topY?: number | null;

		/** This is width of the bounding rectangle */
		width?: number | null;
	}
	export interface AnalysisResponseRecognitionUnitsBoundingRectangleFormProperties {

		/** The is the height of the bounding rectangle */
		height: FormControl<number | null | undefined>,

		/** This is the top left x coordinate */
		topX: FormControl<number | null | undefined>,

		/** This is the top left y coordinate */
		topY: FormControl<number | null | undefined>,

		/** This is width of the bounding rectangle */
		width: FormControl<number | null | undefined>,
	}
	export function CreateAnalysisResponseRecognitionUnitsBoundingRectangleFormGroup() {
		return new FormGroup<AnalysisResponseRecognitionUnitsBoundingRectangleFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			topX: new FormControl<number | null | undefined>(undefined),
			topY: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalysisResponseRecognitionUnitsCategory { root = 'root', writingRegion = 'writingRegion', paragraph = 'paragraph', line = 'line', inkBullet = 'inkBullet', inkDrawing = 'inkDrawing', inkWord = 'inkWord', unknown = 'unknown' }

	export enum AnalysisResponseRecognitionUnitsClass { container = 'container', leaf = 'leaf' }

	export enum AnalysisResponseRecognitionUnitsRecognizedObject { drawing = 'drawing', square = 'square', rectangle = 'rectangle', circle = 'circle', ellipse = 'ellipse', triangle = 'triangle', isoscelesTriangle = 'isoscelesTriangle', equilateralTriangle = 'equilateralTriangle', rightTriangle = 'rightTriangle', quadrilateral = 'quadrilateral', diamond = 'diamond', trapezoid = 'trapezoid', parallelogram = 'parallelogram', pentagon = 'pentagon', hexagon = 'hexagon', blockArrow = 'blockArrow', heart = 'heart', starSimple = 'starSimple', starCrossed = 'starCrossed', cloud = 'cloud', line = 'line', curve = 'curve', polyLine = 'polyLine' }


	/** The category of a recognition unit represents the type of content for that unit. */
	export enum CategoryPattern { root = 'root', writingRegion = 'writingRegion', paragraph = 'paragraph', line = 'line', inkBullet = 'inkBullet', inkDrawing = 'inkDrawing', inkWord = 'inkWord', unknown = 'unknown' }


	/** The class represents the type of the recognition unit. A recognition unit can be a leaf node or a container node. Container nodes typically have leaf nodes as children. */
	export enum ClassPattern { container = 'container', leaf = 'leaf' }


	/** The category of recognition units that represent types that have children recognition units. */
	export enum ContainerCategoryPattern { root = 'root', writingRegion = 'writingRegion', paragraph = 'paragraph', line = 'line' }

	export interface ErrorModel {

		/**
		 * This represents the error code
		 * Required
		 */
		code: string;

		/** This gives details of the reason(s) for the error */
		ErrorModelDetails?: Array<ErrorModelDetails>;

		/**
		 * This represents the error message
		 * Required
		 */
		message: string;

		/** This represents the target of the error message */
		target?: string | null;
	}
	export interface ErrorModelFormProperties {

		/**
		 * This represents the error code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * This represents the error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** This represents the target of the error message */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorModelDetails {

		/** This represents the error code */
		code?: string | null;

		/** This represents the error message */
		message?: string | null;

		/** This represents the target of the error message */
		target?: string | null;
	}
	export interface ErrorModelDetailsFormProperties {

		/** This represents the error code */
		code: FormControl<string | null | undefined>,

		/** This represents the error message */
		message: FormControl<string | null | undefined>,

		/** This represents the target of the error message */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorModelDetailsFormGroup() {
		return new FormGroup<ErrorModelDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The category of recognition units that represent types that don't have children recognition units. */
	export enum LeafCategoryPattern { inkDrawing = 'inkDrawing', inkBullet = 'inkBullet', inkWord = 'inkWord', unknown = 'unknown' }


	/** This identifies the recognized entity */
	export interface RecognitionUnitElement {

		/** The list of alternates for the core recognition result. In case of handwriting related recognition units, this list includes other words that are close possibilities to the results provided as 'recognizedText'. */
		alternates?: Array<AlternatePatternElement>;

		/** The bounding rectangle of the recognition unit represented by the coordinates of the top left corner (topX,topY) along with width and height of the rectangle. Note that this rectangle is not rotated. So for  rotated objects such as slanted handwriting, it will cover the entire object. The unit will be matched to the one specified in the original request (mm by default.) */
		boundingRectangle?: RecognitionUnitElementBoundingRectangle;

		/**
		 * The category of a recognition unit represents the type of content for that unit.
		 * Required
		 */
		category: AnalysisResponseRecognitionUnitsCategory;

		/** This holds all the properties of one point */
		center?: PointDetailsPattern;

		/** An array of integers representing the identifier of each child of the current recognition unit. */
		childIds?: Array<number>;

		/**
		 * The class represents the type of the recognition unit. A recognition unit can be a leaf node or a container node. Container nodes typically have leaf nodes as children.
		 * Required
		 */
		class: AnalysisResponseRecognitionUnitsClass;

		/** A number between 0 and 1 which indicates the confidence level in the result. */
		confidence?: number | null;

		/**
		 * The identifier of the recognition unit. This id is used to indicate parent/child relationship between different recognition units.
		 * Required
		 */
		id: number;

		/**
		 * The id of the parent node in the tree structure of the recognition results. parent = 0 indicates that there is no dedicated parent node for this unit.
		 * Required
		 */
		parentId: number;

		/** Array of point objects that represent points that are relevant to the type of recognition unit. For example, for a leaf node of inkDrawing category that represents a triangle, points would include the x, y coordinates of the vertices of the recognized triangle. The points represent the coordinates used to create the perfectly drawn shape that is closest to the original input. They may not exactly match. */
		points?: Array<PointDetailsPattern>;

		/** The category should be used to determines the field to read the recognition result. Recognized Object represents the shape that was recognized for the node with category as inkDrawing. For handwriting related nodes, recognizedText contains the actual recognition result. */
		recognizedObject?: AnalysisResponseRecognitionUnitsRecognizedObject | null;

		/** The string contains the text that was recognized. It can be an empty string if the recognizer cannot determine the text. */
		recognizedText?: string | null;

		/** This is the rotated bounding rectangle that covers the entire recognized object along the angle of rotation of the object. Note that this is NOT the same as rotating the boundingRectangle by the rotation angle. */
		rotatedBoundingRectangle?: Array<PointDetailsPattern>;

		/** This is the angle at which the unit is rotated in degrees with respect to the positive X axis. */
		rotationAngle?: number | null;

		/**
		 * This is an array of integers representing the list of stroke Identifiers from the input request body that belong to this recognition unit.
		 * Required
		 */
		strokeIds: Array<number>;
	}

	/** This identifies the recognized entity */
	export interface RecognitionUnitElementFormProperties {

		/**
		 * The category of a recognition unit represents the type of content for that unit.
		 * Required
		 */
		category: FormControl<AnalysisResponseRecognitionUnitsCategory | null | undefined>,

		/**
		 * The class represents the type of the recognition unit. A recognition unit can be a leaf node or a container node. Container nodes typically have leaf nodes as children.
		 * Required
		 */
		class: FormControl<AnalysisResponseRecognitionUnitsClass | null | undefined>,

		/** A number between 0 and 1 which indicates the confidence level in the result. */
		confidence: FormControl<number | null | undefined>,

		/**
		 * The identifier of the recognition unit. This id is used to indicate parent/child relationship between different recognition units.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The id of the parent node in the tree structure of the recognition results. parent = 0 indicates that there is no dedicated parent node for this unit.
		 * Required
		 */
		parentId: FormControl<number | null | undefined>,

		/** The category should be used to determines the field to read the recognition result. Recognized Object represents the shape that was recognized for the node with category as inkDrawing. For handwriting related nodes, recognizedText contains the actual recognition result. */
		recognizedObject: FormControl<AnalysisResponseRecognitionUnitsRecognizedObject | null | undefined>,

		/** The string contains the text that was recognized. It can be an empty string if the recognizer cannot determine the text. */
		recognizedText: FormControl<string | null | undefined>,

		/** This is the angle at which the unit is rotated in degrees with respect to the positive X axis. */
		rotationAngle: FormControl<number | null | undefined>,
	}
	export function CreateRecognitionUnitElementFormGroup() {
		return new FormGroup<RecognitionUnitElementFormProperties>({
			category: new FormControl<AnalysisResponseRecognitionUnitsCategory | null | undefined>(undefined, [Validators.required]),
			class: new FormControl<AnalysisResponseRecognitionUnitsClass | null | undefined>(undefined, [Validators.required]),
			confidence: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			recognizedObject: new FormControl<AnalysisResponseRecognitionUnitsRecognizedObject | null | undefined>(undefined),
			recognizedText: new FormControl<string | null | undefined>(undefined),
			rotationAngle: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RecognitionUnitElementBoundingRectangle {

		/** The is the height of the bounding rectangle */
		height?: number | null;

		/** This is the top left x coordinate */
		topX?: number | null;

		/** This is the top left y coordinate */
		topY?: number | null;

		/** This is width of the bounding rectangle */
		width?: number | null;
	}
	export interface RecognitionUnitElementBoundingRectangleFormProperties {

		/** The is the height of the bounding rectangle */
		height: FormControl<number | null | undefined>,

		/** This is the top left x coordinate */
		topX: FormControl<number | null | undefined>,

		/** This is the top left y coordinate */
		topY: FormControl<number | null | undefined>,

		/** This is width of the bounding rectangle */
		width: FormControl<number | null | undefined>,
	}
	export function CreateRecognitionUnitElementBoundingRectangleFormGroup() {
		return new FormGroup<RecognitionUnitElementBoundingRectangleFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			topX: new FormControl<number | null | undefined>(undefined),
			topY: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The category should be used to determines the field to read the recognition result. Recognized Object represents the shape that was recognized for the node with category as inkDrawing. For handwriting related nodes, recognizedText contains the actual recognition result. */
	export enum ShapePattern { drawing = 'drawing', square = 'square', rectangle = 'rectangle', circle = 'circle', ellipse = 'ellipse', triangle = 'triangle', isoscelesTriangle = 'isoscelesTriangle', equilateralTriangle = 'equilateralTriangle', rightTriangle = 'rightTriangle', quadrilateral = 'quadrilateral', diamond = 'diamond', trapezoid = 'trapezoid', parallelogram = 'parallelogram', pentagon = 'pentagon', hexagon = 'hexagon', blockArrow = 'blockArrow', heart = 'heart', starSimple = 'starSimple', starCrossed = 'starCrossed', cloud = 'cloud', line = 'line', curve = 'curve', polyLine = 'polyLine' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Ink Recognition operation is used to perform ink layout and recognition of written words and shapes. It allows passing the ink strokes to the service to get the recognition results in the response.
		 * Put recognize
		 * @param {AnalysisRequest} requestBody The collection of stroke objects to send for analysis
		 * @return {AnalysisResponse} The results were processed successfully.
		 */
		InkRecognizer_Recognize(requestBody: AnalysisRequest): Observable<AnalysisResponse> {
			return this.http.put<AnalysisResponse>(this.baseUri + 'recognize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

