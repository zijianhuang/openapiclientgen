import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error information returned by the API */
	export interface APIError {

		/** Error body. */
		error?: Error;
	}

	/** Error information returned by the API */
	export interface APIErrorFormProperties {
	}
	export function CreateAPIErrorFormGroup() {
		return new FormGroup<APIErrorFormProperties>({
		});

	}


	/** Error body. */
	export interface Error {
		code?: string | null;
		message?: string | null;
	}

	/** Error body. */
	export interface ErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Accessory item and corresponding confidence level. */
	export interface Accessory {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence?: number | null;

		/** Type of an accessory */
		type?: AccessoryType | null;
	}

	/** Accessory item and corresponding confidence level. */
	export interface AccessoryFormProperties {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,

		/** Type of an accessory */
		type: FormControl<AccessoryType | null | undefined>,
	}
	export function CreateAccessoryFormGroup() {
		return new FormGroup<AccessoryFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			type: new FormControl<AccessoryType | null | undefined>(undefined),
		});

	}

	export enum AccessoryType { headWear = 0, glasses = 1, mask = 2 }


	/** Request body for applying snapshot operation. */
	export interface ApplySnapshotRequest {

		/** Snapshot applying mode. Currently only CreateNew is supported, which means the apply operation will fail if target subscription already contains an object of same type and using the same objectId. Users can specify the "objectId" in request body to avoid such conflicts. */
		mode?: ApplySnapshotRequestMode | null;

		/**
		 * User specified target object id to be created from the snapshot.
		 * Required
		 * Max length: 64
		 */
		objectId: string;
	}

	/** Request body for applying snapshot operation. */
	export interface ApplySnapshotRequestFormProperties {

		/** Snapshot applying mode. Currently only CreateNew is supported, which means the apply operation will fail if target subscription already contains an object of same type and using the same objectId. Users can specify the "objectId" in request body to avoid such conflicts. */
		mode: FormControl<ApplySnapshotRequestMode | null | undefined>,

		/**
		 * User specified target object id to be created from the snapshot.
		 * Required
		 * Max length: 64
		 */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateApplySnapshotRequestFormGroup() {
		return new FormGroup<ApplySnapshotRequestFormProperties>({
			mode: new FormControl<ApplySnapshotRequestMode | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
		});

	}

	export enum ApplySnapshotRequestMode { CreateNew = 0 }


	/** Properties describing any presence of blur within the image. */
	export interface Blur {

		/** An enum value indicating level of blurriness. */
		blurLevel?: BlurBlurLevel | null;

		/**
		 * A number ranging from 0 to 1 indicating the intensity level associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		value?: number | null;
	}

	/** Properties describing any presence of blur within the image. */
	export interface BlurFormProperties {

		/** An enum value indicating level of blurriness. */
		blurLevel: FormControl<BlurBlurLevel | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating the intensity level associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBlurFormGroup() {
		return new FormGroup<BlurFormProperties>({
			blurLevel: new FormControl<BlurBlurLevel | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export enum BlurBlurLevel { Low = 0, Medium = 1, High = 2 }


	/** Coordinates within an image */
	export interface Coordinate {

		/**
		 * The horizontal component, in pixels.
		 * Required
		 */
		x: number;

		/**
		 * The vertical component, in pixels.
		 * Required
		 */
		y: number;
	}

	/** Coordinates within an image */
	export interface CoordinateFormProperties {

		/**
		 * The horizontal component, in pixels.
		 * Required
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * The vertical component, in pixels.
		 * Required
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateCoordinateFormGroup() {
		return new FormGroup<CoordinateFormProperties>({
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detected Face object. */
	export interface DetectedFace {

		/** Face Attributes */
		faceAttributes?: FaceAttributes;
		faceId?: string | null;

		/** A collection of 27-point face landmarks pointing to the important positions of face components. */
		faceLandmarks?: FaceLandmarks;

		/**
		 * A rectangle within which a face can be found
		 * Required
		 */
		faceRectangle: FaceRectangle;

		/** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need. */
		recognitionModel?: DetectedFaceRecognitionModel | null;
	}

	/** Detected Face object. */
	export interface DetectedFaceFormProperties {
		faceId: FormControl<string | null | undefined>,

		/** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need. */
		recognitionModel: FormControl<DetectedFaceRecognitionModel | null | undefined>,
	}
	export function CreateDetectedFaceFormGroup() {
		return new FormGroup<DetectedFaceFormProperties>({
			faceId: new FormControl<string | null | undefined>(undefined),
			recognitionModel: new FormControl<DetectedFaceRecognitionModel | null | undefined>(undefined),
		});

	}


	/** Face Attributes */
	export interface FaceAttributes {

		/** Properties describing any accessories on a given face. */
		accessories?: Array<Accessory>;

		/** Age in years */
		age?: number | null;

		/** Properties describing any presence of blur within the image. */
		blur?: Blur;

		/** Properties describing facial emotion in form of confidence ranging from 0 to 1. */
		emotion?: Emotion;

		/** Properties describing exposure level of the image. */
		exposure?: Exposure;

		/** Properties describing facial hair attributes. */
		facialHair?: FacialHair;

		/** Possible gender of the face. */
		gender?: FaceAttributesGender | null;

		/** Glasses type if any of the face. */
		glasses?: FaceAttributesGlasses | null;

		/** Properties describing hair attributes. */
		hair?: Hair;

		/** Properties indicating head pose of the face. */
		headPose?: HeadPose;

		/** Properties describing present makeups on a given face. */
		makeup?: Makeup;

		/** Properties describing noise level of the image. */
		noise?: Noise;

		/** Properties describing occlusions on a given face. */
		occlusion?: Occlusion;

		/**
		 * A number ranging from 0 to 1 indicating the intensity level associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		smile?: number | null;
	}

	/** Face Attributes */
	export interface FaceAttributesFormProperties {

		/** Age in years */
		age: FormControl<number | null | undefined>,

		/** Possible gender of the face. */
		gender: FormControl<FaceAttributesGender | null | undefined>,

		/** Glasses type if any of the face. */
		glasses: FormControl<FaceAttributesGlasses | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating the intensity level associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		smile: FormControl<number | null | undefined>,
	}
	export function CreateFaceAttributesFormGroup() {
		return new FormGroup<FaceAttributesFormProperties>({
			age: new FormControl<number | null | undefined>(undefined),
			gender: new FormControl<FaceAttributesGender | null | undefined>(undefined),
			glasses: new FormControl<FaceAttributesGlasses | null | undefined>(undefined),
			smile: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}


	/** Properties describing facial emotion in form of confidence ranging from 0 to 1. */
	export interface Emotion {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		anger?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		contempt?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		disgust?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		fear?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		happiness?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		neutral?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		sadness?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		surprise?: number | null;
	}

	/** Properties describing facial emotion in form of confidence ranging from 0 to 1. */
	export interface EmotionFormProperties {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		anger: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		contempt: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		disgust: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		fear: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		happiness: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		neutral: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		sadness: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		surprise: FormControl<number | null | undefined>,
	}
	export function CreateEmotionFormGroup() {
		return new FormGroup<EmotionFormProperties>({
			anger: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			contempt: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			disgust: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			fear: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			happiness: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			neutral: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			sadness: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			surprise: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}


	/** Properties describing exposure level of the image. */
	export interface Exposure {

		/** An enum value indicating level of exposure. */
		exposureLevel?: ExposureExposureLevel | null;

		/**
		 * A number ranging from 0 to 1 indicating the intensity level associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		value?: number | null;
	}

	/** Properties describing exposure level of the image. */
	export interface ExposureFormProperties {

		/** An enum value indicating level of exposure. */
		exposureLevel: FormControl<ExposureExposureLevel | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating the intensity level associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateExposureFormGroup() {
		return new FormGroup<ExposureFormProperties>({
			exposureLevel: new FormControl<ExposureExposureLevel | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export enum ExposureExposureLevel { UnderExposure = 0, GoodExposure = 1, OverExposure = 2 }


	/** Properties describing facial hair attributes. */
	export interface FacialHair {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		beard?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		moustache?: number | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		sideburns?: number | null;
	}

	/** Properties describing facial hair attributes. */
	export interface FacialHairFormProperties {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		beard: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		moustache: FormControl<number | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		sideburns: FormControl<number | null | undefined>,
	}
	export function CreateFacialHairFormGroup() {
		return new FormGroup<FacialHairFormProperties>({
			beard: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			moustache: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			sideburns: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export enum FaceAttributesGender { male = 0, female = 1 }

	export enum FaceAttributesGlasses { noGlasses = 0, readingGlasses = 1, sunglasses = 2, swimmingGoggles = 3 }


	/** Properties describing hair attributes. */
	export interface Hair {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		bald?: number | null;
		hairColor?: Array<HairColor>;

		/** A boolean value describing whether the hair is visible in the image. */
		invisible?: boolean | null;
	}

	/** Properties describing hair attributes. */
	export interface HairFormProperties {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		bald: FormControl<number | null | undefined>,

		/** A boolean value describing whether the hair is visible in the image. */
		invisible: FormControl<boolean | null | undefined>,
	}
	export function CreateHairFormGroup() {
		return new FormGroup<HairFormProperties>({
			bald: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			invisible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Hair color and associated confidence */
	export interface HairColor {

		/** Name of the hair color. */
		color?: HairColorColor | null;

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence?: number | null;
	}

	/** Hair color and associated confidence */
	export interface HairColorFormProperties {

		/** Name of the hair color. */
		color: FormControl<HairColorColor | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateHairColorFormGroup() {
		return new FormGroup<HairColorFormProperties>({
			color: new FormControl<HairColorColor | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}

	export enum HairColorColor { unknown = 0, white = 1, gray = 2, blond = 3, brown = 4, red = 5, black = 6, other = 7 }


	/** Properties indicating head pose of the face. */
	export interface HeadPose {
		pitch?: number | null;
		roll?: number | null;
		yaw?: number | null;
	}

	/** Properties indicating head pose of the face. */
	export interface HeadPoseFormProperties {
		pitch: FormControl<number | null | undefined>,
		roll: FormControl<number | null | undefined>,
		yaw: FormControl<number | null | undefined>,
	}
	export function CreateHeadPoseFormGroup() {
		return new FormGroup<HeadPoseFormProperties>({
			pitch: new FormControl<number | null | undefined>(undefined),
			roll: new FormControl<number | null | undefined>(undefined),
			yaw: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Properties describing present makeups on a given face. */
	export interface Makeup {

		/** A boolean value describing whether eye makeup is present on a face. */
		eyeMakeup?: boolean | null;

		/** A boolean value describing whether lip makeup is present on a face. */
		lipMakeup?: boolean | null;
	}

	/** Properties describing present makeups on a given face. */
	export interface MakeupFormProperties {

		/** A boolean value describing whether eye makeup is present on a face. */
		eyeMakeup: FormControl<boolean | null | undefined>,

		/** A boolean value describing whether lip makeup is present on a face. */
		lipMakeup: FormControl<boolean | null | undefined>,
	}
	export function CreateMakeupFormGroup() {
		return new FormGroup<MakeupFormProperties>({
			eyeMakeup: new FormControl<boolean | null | undefined>(undefined),
			lipMakeup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Properties describing noise level of the image. */
	export interface Noise {

		/** An enum value indicating level of noise. */
		noiseLevel?: BlurBlurLevel | null;

		/**
		 * A number ranging from 0 to 1 indicating the intensity level associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		value?: number | null;
	}

	/** Properties describing noise level of the image. */
	export interface NoiseFormProperties {

		/** An enum value indicating level of noise. */
		noiseLevel: FormControl<BlurBlurLevel | null | undefined>,

		/**
		 * A number ranging from 0 to 1 indicating the intensity level associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateNoiseFormGroup() {
		return new FormGroup<NoiseFormProperties>({
			noiseLevel: new FormControl<BlurBlurLevel | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}


	/** Properties describing occlusions on a given face. */
	export interface Occlusion {

		/** A boolean value indicating whether eyes are occluded. */
		eyeOccluded?: boolean | null;

		/** A boolean value indicating whether forehead is occluded. */
		foreheadOccluded?: boolean | null;

		/** A boolean value indicating whether the mouth is occluded. */
		mouthOccluded?: boolean | null;
	}

	/** Properties describing occlusions on a given face. */
	export interface OcclusionFormProperties {

		/** A boolean value indicating whether eyes are occluded. */
		eyeOccluded: FormControl<boolean | null | undefined>,

		/** A boolean value indicating whether forehead is occluded. */
		foreheadOccluded: FormControl<boolean | null | undefined>,

		/** A boolean value indicating whether the mouth is occluded. */
		mouthOccluded: FormControl<boolean | null | undefined>,
	}
	export function CreateOcclusionFormGroup() {
		return new FormGroup<OcclusionFormProperties>({
			eyeOccluded: new FormControl<boolean | null | undefined>(undefined),
			foreheadOccluded: new FormControl<boolean | null | undefined>(undefined),
			mouthOccluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A collection of 27-point face landmarks pointing to the important positions of face components. */
	export interface FaceLandmarks {

		/** Coordinates within an image */
		eyeLeftBottom?: Coordinate;

		/** Coordinates within an image */
		eyeLeftInner?: Coordinate;

		/** Coordinates within an image */
		eyeLeftOuter?: Coordinate;

		/** Coordinates within an image */
		eyeLeftTop?: Coordinate;

		/** Coordinates within an image */
		eyeRightBottom?: Coordinate;

		/** Coordinates within an image */
		eyeRightInner?: Coordinate;

		/** Coordinates within an image */
		eyeRightOuter?: Coordinate;

		/** Coordinates within an image */
		eyeRightTop?: Coordinate;

		/** Coordinates within an image */
		eyebrowLeftInner?: Coordinate;

		/** Coordinates within an image */
		eyebrowLeftOuter?: Coordinate;

		/** Coordinates within an image */
		eyebrowRightInner?: Coordinate;

		/** Coordinates within an image */
		eyebrowRightOuter?: Coordinate;

		/** Coordinates within an image */
		mouthLeft?: Coordinate;

		/** Coordinates within an image */
		mouthRight?: Coordinate;

		/** Coordinates within an image */
		noseLeftAlarOutTip?: Coordinate;

		/** Coordinates within an image */
		noseLeftAlarTop?: Coordinate;

		/** Coordinates within an image */
		noseRightAlarOutTip?: Coordinate;

		/** Coordinates within an image */
		noseRightAlarTop?: Coordinate;

		/** Coordinates within an image */
		noseRootLeft?: Coordinate;

		/** Coordinates within an image */
		noseRootRight?: Coordinate;

		/** Coordinates within an image */
		noseTip?: Coordinate;

		/** Coordinates within an image */
		pupilLeft?: Coordinate;

		/** Coordinates within an image */
		pupilRight?: Coordinate;

		/** Coordinates within an image */
		underLipBottom?: Coordinate;

		/** Coordinates within an image */
		underLipTop?: Coordinate;

		/** Coordinates within an image */
		upperLipBottom?: Coordinate;

		/** Coordinates within an image */
		upperLipTop?: Coordinate;
	}

	/** A collection of 27-point face landmarks pointing to the important positions of face components. */
	export interface FaceLandmarksFormProperties {
	}
	export function CreateFaceLandmarksFormGroup() {
		return new FormGroup<FaceLandmarksFormProperties>({
		});

	}


	/** A rectangle within which a face can be found */
	export interface FaceRectangle {

		/**
		 * The height of the rectangle, in pixels.
		 * Required
		 */
		height: number;

		/**
		 * The distance from the left edge if the image to the left edge of the rectangle, in pixels.
		 * Required
		 */
		left: number;

		/**
		 * The distance from the top edge if the image to the top edge of the rectangle, in pixels.
		 * Required
		 */
		top: number;

		/**
		 * The width of the rectangle, in pixels.
		 * Required
		 */
		width: number;
	}

	/** A rectangle within which a face can be found */
	export interface FaceRectangleFormProperties {

		/**
		 * The height of the rectangle, in pixels.
		 * Required
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * The distance from the left edge if the image to the left edge of the rectangle, in pixels.
		 * Required
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * The distance from the top edge if the image to the top edge of the rectangle, in pixels.
		 * Required
		 */
		top: FormControl<number | null | undefined>,

		/**
		 * The width of the rectangle, in pixels.
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateFaceRectangleFormGroup() {
		return new FormGroup<FaceRectangleFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			top: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DetectedFaceRecognitionModel { recognition_01 = 0, recognition_02 = 1 }


	/** Face list object. */
	export interface FaceList {

		/**
		 * FaceListId of the target face list.
		 * Required
		 * Max length: 64
		 */
		faceListId: string;

		/** An array of persisted faces within the face list or large face list. */
		persistedFaces?: Array<PersistedFace>;
	}

	/** Face list object. */
	export interface FaceListFormProperties {

		/**
		 * FaceListId of the target face list.
		 * Required
		 * Max length: 64
		 */
		faceListId: FormControl<string | null | undefined>,
	}
	export function CreateFaceListFormGroup() {
		return new FormGroup<FaceListFormProperties>({
			faceListId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
		});

	}


	/** PersonFace object. */
	export interface PersistedFace {

		/**
		 * The persistedFaceId of the target face, which is persisted and will not expire. Different from faceId created by Face - Detect and will expire in 24 hours after the detection call.
		 * Required
		 */
		persistedFaceId: string;

		/**
		 * User-provided data attached to the face. The size limit is 1KB.
		 * Max length: 1024
		 */
		userData?: string | null;
	}

	/** PersonFace object. */
	export interface PersistedFaceFormProperties {

		/**
		 * The persistedFaceId of the target face, which is persisted and will not expire. Different from faceId created by Face - Detect and will expire in 24 hours after the detection call.
		 * Required
		 */
		persistedFaceId: FormControl<string | null | undefined>,

		/**
		 * User-provided data attached to the face. The size limit is 1KB.
		 * Max length: 1024
		 */
		userData: FormControl<string | null | undefined>,
	}
	export function CreatePersistedFaceFormGroup() {
		return new FormGroup<PersistedFaceFormProperties>({
			persistedFaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** Request body for find similar operation. */
	export interface FindSimilarRequest {

		/**
		 * FaceId of the query face. User needs to call Face - Detect first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call
		 * Required
		 */
		faceId: string;

		/**
		 * An array of candidate faceIds. All of them are created by Face - Detect and the faceIds will expire 24 hours after the detection call. The number of faceIds is limited to 1000. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time.
		 * Maximum items: 1000
		 */
		faceIds?: Array<string>;

		/**
		 * An existing user-specified unique candidate face list, created in Face List - Create a Face List. Face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time.
		 * Max length: 64
		 */
		faceListId?: string | null;

		/**
		 * An existing user-specified unique candidate large face list, created in LargeFaceList - Create. Large face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time.
		 * Max length: 64
		 */
		largeFaceListId?: string | null;

		/**
		 * The number of top similar faces returned. The valid range is [1, 1000].
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxNumOfCandidatesReturned?: number | null;

		/** Similar face searching mode. It can be "matchPerson" or "matchFace". */
		mode?: FindSimilarRequestMode | null;
	}

	/** Request body for find similar operation. */
	export interface FindSimilarRequestFormProperties {

		/**
		 * FaceId of the query face. User needs to call Face - Detect first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call
		 * Required
		 */
		faceId: FormControl<string | null | undefined>,

		/**
		 * An existing user-specified unique candidate face list, created in Face List - Create a Face List. Face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time.
		 * Max length: 64
		 */
		faceListId: FormControl<string | null | undefined>,

		/**
		 * An existing user-specified unique candidate large face list, created in LargeFaceList - Create. Large face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time.
		 * Max length: 64
		 */
		largeFaceListId: FormControl<string | null | undefined>,

		/**
		 * The number of top similar faces returned. The valid range is [1, 1000].
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxNumOfCandidatesReturned: FormControl<number | null | undefined>,

		/** Similar face searching mode. It can be "matchPerson" or "matchFace". */
		mode: FormControl<FindSimilarRequestMode | null | undefined>,
	}
	export function CreateFindSimilarRequestFormGroup() {
		return new FormGroup<FindSimilarRequestFormProperties>({
			faceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			faceListId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
			largeFaceListId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
			maxNumOfCandidatesReturned: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			mode: new FormControl<FindSimilarRequestMode | null | undefined>(undefined),
		});

	}

	export enum FindSimilarRequestMode { matchPerson = 0, matchFace = 1 }


	/** Request body for group request. */
	export interface GroupRequest {

		/**
		 * Array of candidate faceId created by Face - Detect. The maximum is 1000 faces
		 * Required
		 * Maximum items: 1000
		 */
		faceIds: Array<string>;
	}

	/** Request body for group request. */
	export interface GroupRequestFormProperties {
	}
	export function CreateGroupRequestFormGroup() {
		return new FormGroup<GroupRequestFormProperties>({
		});

	}


	/** An array of face groups based on face similarity. */
	export interface GroupResult {

		/**
		 * A partition of the original faces based on face similarity. Groups are ranked by number of faces
		 * Required
		 */
		groups: Array<string>;

		/** Face ids array of faces that cannot find any similar faces from original faces. */
		messyGroup?: Array<string>;
	}

	/** An array of face groups based on face similarity. */
	export interface GroupResultFormProperties {
	}
	export function CreateGroupResultFormGroup() {
		return new FormGroup<GroupResultFormProperties>({
		});

	}


	/** All possible faces that may qualify. */
	export interface IdentifyCandidate {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: number;

		/**
		 * Id of candidate
		 * Required
		 */
		personId: string;
	}

	/** All possible faces that may qualify. */
	export interface IdentifyCandidateFormProperties {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Id of candidate
		 * Required
		 */
		personId: FormControl<string | null | undefined>,
	}
	export function CreateIdentifyCandidateFormGroup() {
		return new FormGroup<IdentifyCandidateFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			personId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request body for identify face operation. */
	export interface IdentifyRequest {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceThreshold?: number | null;

		/**
		 * Array of query faces faceIds, created by the Face - Detect. Each of the faces are identified independently. The valid number of faceIds is between [1, 10].
		 * Required
		 * Maximum items: 10
		 */
		faceIds: Array<string>;

		/**
		 * LargePersonGroupId of the target large person group, created by LargePersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
		 * Max length: 64
		 */
		largePersonGroupId?: string | null;

		/**
		 * The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1).
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxNumOfCandidatesReturned?: number | null;

		/**
		 * PersonGroupId of the target person group, created by PersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
		 * Max length: 64
		 */
		personGroupId?: string | null;
	}

	/** Request body for identify face operation. */
	export interface IdentifyRequestFormProperties {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidenceThreshold: FormControl<number | null | undefined>,

		/**
		 * LargePersonGroupId of the target large person group, created by LargePersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
		 * Max length: 64
		 */
		largePersonGroupId: FormControl<string | null | undefined>,

		/**
		 * The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1).
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxNumOfCandidatesReturned: FormControl<number | null | undefined>,

		/**
		 * PersonGroupId of the target person group, created by PersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
		 * Max length: 64
		 */
		personGroupId: FormControl<string | null | undefined>,
	}
	export function CreateIdentifyRequestFormGroup() {
		return new FormGroup<IdentifyRequestFormProperties>({
			confidenceThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			largePersonGroupId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
			maxNumOfCandidatesReturned: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			personGroupId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
		});

	}


	/** Response body for identify face operation. */
	export interface IdentifyResult {

		/**
		 * Identified person candidates for that face (ranked by confidence). Array size should be no larger than input maxNumOfCandidatesReturned. If no person is identified, will return an empty array.
		 * Required
		 */
		candidates: Array<IdentifyCandidate>;

		/**
		 * FaceId of the query face
		 * Required
		 */
		faceId: string;
	}

	/** Response body for identify face operation. */
	export interface IdentifyResultFormProperties {

		/**
		 * FaceId of the query face
		 * Required
		 */
		faceId: FormControl<string | null | undefined>,
	}
	export function CreateIdentifyResultFormGroup() {
		return new FormGroup<IdentifyResultFormProperties>({
			faceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Large face list object. */
	export interface LargeFaceList {

		/**
		 * LargeFaceListId of the target large face list.
		 * Required
		 * Max length: 64
		 */
		largeFaceListId: string;
	}

	/** Large face list object. */
	export interface LargeFaceListFormProperties {

		/**
		 * LargeFaceListId of the target large face list.
		 * Required
		 * Max length: 64
		 */
		largeFaceListId: FormControl<string | null | undefined>,
	}
	export function CreateLargeFaceListFormGroup() {
		return new FormGroup<LargeFaceListFormProperties>({
			largeFaceListId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
		});

	}


	/** Large person group object. */
	export interface LargePersonGroup {

		/**
		 * LargePersonGroupId of the target large person groups
		 * Required
		 * Max length: 64
		 */
		largePersonGroupId: string;
	}

	/** Large person group object. */
	export interface LargePersonGroupFormProperties {

		/**
		 * LargePersonGroupId of the target large person groups
		 * Required
		 * Max length: 64
		 */
		largePersonGroupId: FormControl<string | null | undefined>,
	}
	export function CreateLargePersonGroupFormGroup() {
		return new FormGroup<LargePersonGroupFormProperties>({
			largePersonGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
		});

	}


	/** A combination of user defined name and user specified data and recognition model name for largePersonGroup/personGroup, and largeFaceList/faceList. */
	export interface MetaDataContract {

		/** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need. */
		recognitionModel?: DetectedFaceRecognitionModel | null;
	}

	/** A combination of user defined name and user specified data and recognition model name for largePersonGroup/personGroup, and largeFaceList/faceList. */
	export interface MetaDataContractFormProperties {

		/** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need. */
		recognitionModel: FormControl<DetectedFaceRecognitionModel | null | undefined>,
	}
	export function CreateMetaDataContractFormGroup() {
		return new FormGroup<MetaDataContractFormProperties>({
			recognitionModel: new FormControl<DetectedFaceRecognitionModel | null | undefined>(undefined),
		});

	}


	/** A combination of user defined name and user specified data for the person, largePersonGroup/personGroup, and largeFaceList/faceList. */
	export interface NameAndUserDataContract {

		/**
		 * User defined name, maximum length is 128.
		 * Max length: 128
		 */
		name?: string | null;

		/**
		 * User specified data. Length should not exceed 16KB.
		 * Max length: 16384
		 */
		userData?: string | null;
	}

	/** A combination of user defined name and user specified data for the person, largePersonGroup/personGroup, and largeFaceList/faceList. */
	export interface NameAndUserDataContractFormProperties {

		/**
		 * User defined name, maximum length is 128.
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User specified data. Length should not exceed 16KB.
		 * Max length: 16384
		 */
		userData: FormControl<string | null | undefined>,
	}
	export function CreateNameAndUserDataContractFormGroup() {
		return new FormGroup<NameAndUserDataContractFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			userData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384)]),
		});

	}


	/** Operation status object. Operation refers to the asynchronous backend task including taking a snapshot and applying a snapshot. */
	export interface OperationStatus {

		/**
		 * A combined UTC date and time string that describes the time when the operation (take or apply a snapshot) is requested. E.g. 2018-12-25T11:41:02.2331413Z.
		 * Required
		 */
		createdTime: Date;

		/** A combined UTC date and time string that describes the last time the operation (take or apply a snapshot) is actively migrating data. The lastActionTime will keep increasing until the operation finishes. E.g. 2018-12-25T11:51:27.8705696Z. */
		lastActionTime?: Date | null;

		/** Show failure message when operation fails (omitted when operation succeeds). */
		message?: string | null;

		/** When the operation succeeds successfully, for snapshot taking operation the snapshot id will be included in this field, and for snapshot applying operation, the path to get the target object will be returned in this field. */
		resourceLocation?: string | null;

		/**
		 * Operation status: notstarted, running, succeeded, failed. If the operation is requested and waiting to perform, the status is notstarted. If the operation is ongoing in backend, the status is running. Status succeeded means the operation is completed successfully, specifically for snapshot taking operation, it illustrates the snapshot is well taken and ready to apply, and for snapshot applying operation, it presents the target object has finished creating by the snapshot and ready to be used. Status failed is often caused by editing the source object while taking the snapshot or editing the target object while applying the snapshot before completion, see the field "message" to check the failure reason.
		 * Required
		 */
		status: OperationStatusStatus;
	}

	/** Operation status object. Operation refers to the asynchronous backend task including taking a snapshot and applying a snapshot. */
	export interface OperationStatusFormProperties {

		/**
		 * A combined UTC date and time string that describes the time when the operation (take or apply a snapshot) is requested. E.g. 2018-12-25T11:41:02.2331413Z.
		 * Required
		 */
		createdTime: FormControl<Date | null | undefined>,

		/** A combined UTC date and time string that describes the last time the operation (take or apply a snapshot) is actively migrating data. The lastActionTime will keep increasing until the operation finishes. E.g. 2018-12-25T11:51:27.8705696Z. */
		lastActionTime: FormControl<Date | null | undefined>,

		/** Show failure message when operation fails (omitted when operation succeeds). */
		message: FormControl<string | null | undefined>,

		/** When the operation succeeds successfully, for snapshot taking operation the snapshot id will be included in this field, and for snapshot applying operation, the path to get the target object will be returned in this field. */
		resourceLocation: FormControl<string | null | undefined>,

		/**
		 * Operation status: notstarted, running, succeeded, failed. If the operation is requested and waiting to perform, the status is notstarted. If the operation is ongoing in backend, the status is running. Status succeeded means the operation is completed successfully, specifically for snapshot taking operation, it illustrates the snapshot is well taken and ready to apply, and for snapshot applying operation, it presents the target object has finished creating by the snapshot and ready to be used. Status failed is often caused by editing the source object while taking the snapshot or editing the target object while applying the snapshot before completion, see the field "message" to check the failure reason.
		 * Required
		 */
		status: FormControl<OperationStatusStatus | null | undefined>,
	}
	export function CreateOperationStatusFormGroup() {
		return new FormGroup<OperationStatusFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastActionTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			resourceLocation: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OperationStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OperationStatusStatus { notstarted = 0, running = 1, succeeded = 2, failed = 3 }


	/** Person object. */
	export interface Person {

		/** PersistedFaceIds of registered faces in the person. These persistedFaceIds are returned from Person - Add a Person Face, and will not expire. */
		persistedFaceIds?: Array<string>;

		/**
		 * PersonId of the target face list.
		 * Required
		 */
		personId: string;
	}

	/** Person object. */
	export interface PersonFormProperties {

		/**
		 * PersonId of the target face list.
		 * Required
		 */
		personId: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			personId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Person group object. */
	export interface PersonGroup {

		/**
		 * PersonGroupId of the target person group.
		 * Required
		 * Max length: 64
		 */
		personGroupId: string;
	}

	/** Person group object. */
	export interface PersonGroupFormProperties {

		/**
		 * PersonGroupId of the target person group.
		 * Required
		 * Max length: 64
		 */
		personGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePersonGroupFormGroup() {
		return new FormGroup<PersonGroupFormProperties>({
			personGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
		});

	}


	/** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need. */
	export enum RecognitionModel { recognition_01 = 0, recognition_02 = 1 }


	/** Response body for find similar face operation. */
	export interface SimilarFace {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: number;

		/** FaceId of candidate face when find by faceIds. faceId is created by Face - Detect and will expire 24 hours after the detection call */
		faceId?: string | null;

		/** PersistedFaceId of candidate face when find by faceListId. persistedFaceId in face list is persisted and will not expire. As showed in below response */
		persistedFaceId?: string | null;
	}

	/** Response body for find similar face operation. */
	export interface SimilarFaceFormProperties {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,

		/** FaceId of candidate face when find by faceIds. faceId is created by Face - Detect and will expire 24 hours after the detection call */
		faceId: FormControl<string | null | undefined>,

		/** PersistedFaceId of candidate face when find by faceListId. persistedFaceId in face list is persisted and will not expire. As showed in below response */
		persistedFaceId: FormControl<string | null | undefined>,
	}
	export function CreateSimilarFaceFormGroup() {
		return new FormGroup<SimilarFaceFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			faceId: new FormControl<string | null | undefined>(undefined),
			persistedFaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Snapshot object. */
	export interface Snapshot {

		/**
		 * Azure Cognitive Service Face account id of the subscriber who created the snapshot by Snapshot - Take.
		 * Required
		 */
		account: string;

		/**
		 * Array of the target Face subscription ids for the snapshot, specified by the user who created the snapshot when calling Snapshot - Take. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.
		 * Required
		 */
		applyScope: Array<string>;

		/**
		 * A combined UTC date and time string that describes the created time of the snapshot. E.g. 2018-12-25T11:41:02.2331413Z.
		 * Required
		 */
		createdTime: Date;

		/**
		 * Snapshot id.
		 * Required
		 */
		id: string;

		/**
		 * A combined UTC date and time string that describes the last time when the snapshot was created or updated by Snapshot - Update. E.g. 2018-12-25T11:51:27.8705696Z.
		 * Required
		 */
		lastUpdateTime: Date;

		/**
		 * Type of the source object in the snapshot, specified by the subscriber who created the snapshot when calling Snapshot - Take. Currently FaceList, PersonGroup, LargeFaceList and LargePersonGroup are supported.
		 * Required
		 */
		type: SnapshotType;

		/**
		 * User specified data about the snapshot for any purpose. Length should not exceed 16KB.
		 * Max length: 16384
		 */
		userData?: string | null;
	}

	/** Snapshot object. */
	export interface SnapshotFormProperties {

		/**
		 * Azure Cognitive Service Face account id of the subscriber who created the snapshot by Snapshot - Take.
		 * Required
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * A combined UTC date and time string that describes the created time of the snapshot. E.g. 2018-12-25T11:41:02.2331413Z.
		 * Required
		 */
		createdTime: FormControl<Date | null | undefined>,

		/**
		 * Snapshot id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * A combined UTC date and time string that describes the last time when the snapshot was created or updated by Snapshot - Update. E.g. 2018-12-25T11:51:27.8705696Z.
		 * Required
		 */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * Type of the source object in the snapshot, specified by the subscriber who created the snapshot when calling Snapshot - Take. Currently FaceList, PersonGroup, LargeFaceList and LargePersonGroup are supported.
		 * Required
		 */
		type: FormControl<SnapshotType | null | undefined>,

		/**
		 * User specified data about the snapshot for any purpose. Length should not exceed 16KB.
		 * Max length: 16384
		 */
		userData: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SnapshotType | null | undefined>(undefined, [Validators.required]),
			userData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384)]),
		});

	}

	export enum SnapshotType { FaceList = 0, LargeFaceList = 1, LargePersonGroup = 2, PersonGroup = 3 }


	/** Request body for taking snapshot operation. */
	export interface TakeSnapshotRequest {

		/**
		 * Array of the target Face subscription ids for the snapshot, specified by the user who created the snapshot when calling Snapshot - Take. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.
		 * Required
		 */
		applyScope: Array<string>;

		/**
		 * User specified source object id to take snapshot from.
		 * Required
		 * Max length: 64
		 */
		objectId: string;

		/**
		 * User specified type for the source object to take snapshot from. Currently FaceList, PersonGroup, LargeFaceList and LargePersonGroup are supported.
		 * Required
		 */
		type: SnapshotType;

		/**
		 * User specified data about the snapshot for any purpose. Length should not exceed 16KB.
		 * Max length: 16384
		 */
		userData?: string | null;
	}

	/** Request body for taking snapshot operation. */
	export interface TakeSnapshotRequestFormProperties {

		/**
		 * User specified source object id to take snapshot from.
		 * Required
		 * Max length: 64
		 */
		objectId: FormControl<string | null | undefined>,

		/**
		 * User specified type for the source object to take snapshot from. Currently FaceList, PersonGroup, LargeFaceList and LargePersonGroup are supported.
		 * Required
		 */
		type: FormControl<SnapshotType | null | undefined>,

		/**
		 * User specified data about the snapshot for any purpose. Length should not exceed 16KB.
		 * Max length: 16384
		 */
		userData: FormControl<string | null | undefined>,
	}
	export function CreateTakeSnapshotRequestFormGroup() {
		return new FormGroup<TakeSnapshotRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
			type: new FormControl<SnapshotType | null | undefined>(undefined, [Validators.required]),
			userData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384)]),
		});

	}


	/** Training status object. */
	export interface TrainingStatus {

		/**
		 * A combined UTC date and time string that describes the created time of the person group, large person group or large face list.
		 * Required
		 */
		createdDateTime: Date;

		/** A combined UTC date and time string that describes the last modify time of the person group, large person group or large face list, could be null value when the group is not successfully trained. */
		lastActionDateTime?: Date | null;

		/** A combined UTC date and time string that describes the last successful training time of the person group, large person group or large face list. */
		lastSuccessfulTrainingDateTime?: Date | null;

		/** Show failure message when training failed (omitted when training succeed). */
		message?: string | null;

		/**
		 * Training status: notstarted, running, succeeded, failed. If the training process is waiting to perform, the status is notstarted. If the training is ongoing, the status is running. Status succeed means this person group or large person group is ready for Face - Identify, or this large face list is ready for Face - Find Similar. Status failed is often caused by no person or no persisted face exist in the person group or large person group, or no persisted face exist in the large face list.
		 * Required
		 */
		status: TrainingStatusStatus;
	}

	/** Training status object. */
	export interface TrainingStatusFormProperties {

		/**
		 * A combined UTC date and time string that describes the created time of the person group, large person group or large face list.
		 * Required
		 */
		createdDateTime: FormControl<Date | null | undefined>,

		/** A combined UTC date and time string that describes the last modify time of the person group, large person group or large face list, could be null value when the group is not successfully trained. */
		lastActionDateTime: FormControl<Date | null | undefined>,

		/** A combined UTC date and time string that describes the last successful training time of the person group, large person group or large face list. */
		lastSuccessfulTrainingDateTime: FormControl<Date | null | undefined>,

		/** Show failure message when training failed (omitted when training succeed). */
		message: FormControl<string | null | undefined>,

		/**
		 * Training status: notstarted, running, succeeded, failed. If the training process is waiting to perform, the status is notstarted. If the training is ongoing, the status is running. Status succeed means this person group or large person group is ready for Face - Identify, or this large face list is ready for Face - Find Similar. Status failed is often caused by no person or no persisted face exist in the person group or large person group, or no persisted face exist in the large face list.
		 * Required
		 */
		status: FormControl<TrainingStatusStatus | null | undefined>,
	}
	export function CreateTrainingStatusFormGroup() {
		return new FormGroup<TrainingStatusFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastActionDateTime: new FormControl<Date | null | undefined>(undefined),
			lastSuccessfulTrainingDateTime: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TrainingStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TrainingStatusStatus { nonstarted = 0, running = 1, succeeded = 2, failed = 3 }


	/** Request to update face data. */
	export interface UpdateFaceRequest {

		/**
		 * User-provided data attached to the face. The size limit is 1KB.
		 * Max length: 1024
		 */
		userData?: string | null;
	}

	/** Request to update face data. */
	export interface UpdateFaceRequestFormProperties {

		/**
		 * User-provided data attached to the face. The size limit is 1KB.
		 * Max length: 1024
		 */
		userData: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFaceRequestFormGroup() {
		return new FormGroup<UpdateFaceRequestFormProperties>({
			userData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** Request body for updating a snapshot, with a combination of user defined apply scope and user specified data. */
	export interface UpdateSnapshotRequest {

		/** Array of the target Face subscription ids for the snapshot, specified by the user who created the snapshot when calling Snapshot - Take. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it. */
		applyScope?: Array<string>;

		/**
		 * User specified data about the snapshot for any purpose. Length should not exceed 16KB.
		 * Max length: 16384
		 */
		userData?: string | null;
	}

	/** Request body for updating a snapshot, with a combination of user defined apply scope and user specified data. */
	export interface UpdateSnapshotRequestFormProperties {

		/**
		 * User specified data about the snapshot for any purpose. Length should not exceed 16KB.
		 * Max length: 16384
		 */
		userData: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSnapshotRequestFormGroup() {
		return new FormGroup<UpdateSnapshotRequestFormProperties>({
			userData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384)]),
		});

	}


	/** Request body for face to face verification. */
	export interface VerifyFaceToFaceRequest {

		/**
		 * FaceId of the first face, comes from Face - Detect
		 * Required
		 */
		faceId1: string;

		/**
		 * FaceId of the second face, comes from Face - Detect
		 * Required
		 */
		faceId2: string;
	}

	/** Request body for face to face verification. */
	export interface VerifyFaceToFaceRequestFormProperties {

		/**
		 * FaceId of the first face, comes from Face - Detect
		 * Required
		 */
		faceId1: FormControl<string | null | undefined>,

		/**
		 * FaceId of the second face, comes from Face - Detect
		 * Required
		 */
		faceId2: FormControl<string | null | undefined>,
	}
	export function CreateVerifyFaceToFaceRequestFormGroup() {
		return new FormGroup<VerifyFaceToFaceRequestFormProperties>({
			faceId1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			faceId2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request body for face to person verification. */
	export interface VerifyFaceToPersonRequest {

		/**
		 * FaceId of the face, comes from Face - Detect
		 * Required
		 */
		faceId: string;

		/**
		 * Using existing largePersonGroupId and personId for fast loading a specified person. largePersonGroupId is created in LargePersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
		 * Max length: 64
		 */
		largePersonGroupId?: string | null;

		/**
		 * Using existing personGroupId and personId for fast loading a specified person. personGroupId is created in PersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
		 * Max length: 64
		 */
		personGroupId?: string | null;

		/**
		 * Specify a certain person in a person group or a large person group. personId is created in PersonGroup Person - Create or LargePersonGroup Person - Create.
		 * Required
		 */
		personId: string;
	}

	/** Request body for face to person verification. */
	export interface VerifyFaceToPersonRequestFormProperties {

		/**
		 * FaceId of the face, comes from Face - Detect
		 * Required
		 */
		faceId: FormControl<string | null | undefined>,

		/**
		 * Using existing largePersonGroupId and personId for fast loading a specified person. largePersonGroupId is created in LargePersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
		 * Max length: 64
		 */
		largePersonGroupId: FormControl<string | null | undefined>,

		/**
		 * Using existing personGroupId and personId for fast loading a specified person. personGroupId is created in PersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
		 * Max length: 64
		 */
		personGroupId: FormControl<string | null | undefined>,

		/**
		 * Specify a certain person in a person group or a large person group. personId is created in PersonGroup Person - Create or LargePersonGroup Person - Create.
		 * Required
		 */
		personId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyFaceToPersonRequestFormGroup() {
		return new FormGroup<VerifyFaceToPersonRequestFormProperties>({
			faceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			largePersonGroupId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
			personGroupId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.pattern('^[a-z0-9-_]+$')]),
			personId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Result of the verify operation. */
	export interface VerifyResult {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: number;

		/**
		 * True if the two faces belong to the same person or the face belongs to the person, otherwise false.
		 * Required
		 */
		isIdentical: boolean;
	}

	/** Result of the verify operation. */
	export interface VerifyResultFormProperties {

		/**
		 * A number ranging from 0 to 1 indicating a level of confidence associated with a property.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		confidence: FormControl<number | null | undefined>,

		/**
		 * True if the two faces belong to the same person or the face belongs to the person, otherwise false.
		 * Required
		 */
		isIdentical: FormControl<boolean | null | undefined>,
	}
	export function CreateVerifyResultFormGroup() {
		return new FormGroup<VerifyResultFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			isIdentical: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes.<br />
		 * * No image will be stored. Only the extracted face feature will be stored on server. The faceId is an identifier of the face feature and will be used in [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239), [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a), and [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). The stored face feature(s) will expire and be deleted 24 hours after the original detection call.
		 * * Optional parameters include faceId, landmarks, and attributes. Attributes include age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise. Some of the results returned for specific attributes may not be highly accurate.
		 * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
		 * * Up to 100 faces can be returned for an image. Faces are ranked by face rectangle size from large to small.
		 * * For optimal results when querying [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239), [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a), and [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237) ('returnFaceId' is true), please use faces that are: frontal, clear, and with a minimum size of 200x200 pixels (100 pixels between eyes).
		 * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
		 * * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
		 * | Model | Recommended use-case(s) |
		 * | ---------- | -------- |
		 * | 'detection_01': | The default detection model for [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
		 * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |
		 * * Different 'recognitionModel' values are provided. If follow-up operations like Verify, Identify, Find Similar are needed, please specify the recognition model with 'recognitionModel' parameter. The default value for 'recognitionModel' is 'recognition_01', if latest model needed, please explicitly specify the model you need in this parameter. Once specified, the detected faceIds will be associated with the specified recognition model. More details, please refer to [How to specify a recognition model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-recognition-model)
		 * | Model | Recommended use-case(s) |
		 * | ---------- | -------- |
		 * | 'recognition_01': | The default recognition model for [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). All those faceIds created before 2019 March are bonded with this recognition model. |
		 * | 'recognition_02': | Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'. |
		 * Post detect
		 * @param {boolean} returnFaceId A value indicating whether the operation should return faceIds of detected faces.
		 * @param {boolean} returnFaceLandmarks A value indicating whether the operation should return landmarks of the detected faces.
		 * @param {Array<string>} returnFaceAttributes Analyze and return the one or more specified face attributes in the comma-separated string like "returnFaceAttributes=age,gender". Supported face attributes include age, gender, headPose, smile, facialHair, glasses and emotion. Note that each face attribute analysis has additional computational and time cost.
		 * @param {DetectedFaceRecognitionModel} recognitionModel Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need.
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @param {Face_DetectWithUrlDetectionModel} detectionModel Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.
		 * @param {Face_DetectWithUrlPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {Array<DetectedFace>} A successful call returns an array of face entries ranked by face rectangle size in descending order. An empty response indicates no faces detected.
		 */
		Face_DetectWithUrl(returnFaceId: boolean | null | undefined, returnFaceLandmarks: boolean | null | undefined, returnFaceAttributes: Array<string> | null | undefined, recognitionModel: DetectedFaceRecognitionModel | null | undefined, returnRecognitionModel: boolean | null | undefined, detectionModel: Face_DetectWithUrlDetectionModel | null | undefined, requestBody: Face_DetectWithUrlPostBody): Observable<Array<DetectedFace>> {
			return this.http.post<Array<DetectedFace>>(this.baseUri + 'detect?returnFaceId=' + returnFaceId + '&returnFaceLandmarks=' + returnFaceLandmarks + '&' + returnFaceAttributes?.map(z => `returnFaceAttributes=${encodeURIComponent(z)}`).join('&') + '&recognitionModel=' + recognitionModel + '&returnRecognitionModel=' + returnRecognitionModel + '&detectionModel=' + detectionModel, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List face lists’ faceListId, name, userData and recognitionModel. <br />
		 * To get face information inside faceList use [FaceList - Get](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c)
		 * Get facelists
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @return {Array<FaceList>} A successful call returns an array of faceList.
		 */
		FaceList_List(returnRecognitionModel: boolean | null | undefined): Observable<Array<FaceList>> {
			return this.http.get<Array<FaceList>>(this.baseUri + 'facelists?returnRecognitionModel=' + returnRecognitionModel, {});
		}

		/**
		 * Retrieve a face list’s faceListId, name, userData, recognitionModel and faces in the face list.
		 * Get facelists/{faceListId}
		 * @param {string} faceListId Id referencing a particular face list.
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @return {FaceList} A successful call returns the face list's information.
		 */
		FaceList_Get(faceListId: string, returnRecognitionModel: boolean | null | undefined): Observable<FaceList> {
			return this.http.get<FaceList>(this.baseUri + 'facelists/' + (faceListId == null ? '' : encodeURIComponent(faceListId)) + '&returnRecognitionModel=' + returnRecognitionModel, {});
		}

		/**
		 * Create an empty face list with user-specified faceListId, name, an optional userData and recognitionModel. Up to 64 face lists are allowed in one subscription.
		 * <br /> Face list is a list of faces, up to 1,000 faces, and used by [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237).
		 * <br /> After creation, user should use [FaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250) to import the faces. No image will be stored. Only the extracted face features are stored on server until [FaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f) is called.
		 * <br /> Find Similar is used for scenario like finding celebrity-like faces, similar face filtering, or as a light way face identification. But if the actual use is to identify person, please use [PersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244) / [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d) and [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
		 * <br /> Please consider [LargeFaceList](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc) when the face number is large. It can support up to 1,000,000 faces.
		 * <br />'recognitionModel' should be specified to associate with this face list. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing face list will use the recognition model that's already associated with the collection. Existing face features in a face list can't be updated to features extracted by another version of recognition model.
		 * * 'recognition_01': The default recognition model for [FaceList- Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b). All those face lists created before 2019 March are bonded with this recognition model.
		 * * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.
		 * Put facelists/{faceListId}
		 * @param {string} faceListId Id referencing a particular face list.
		 * @param {MetaDataContract} requestBody Request body for creating a face list.
		 * @return {void} A successful call returns an empty response body.
		 */
		FaceList_Create(faceListId: string, requestBody: MetaDataContract): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'facelists/' + (faceListId == null ? '' : encodeURIComponent(faceListId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a specified face list.
		 * Delete facelists/{faceListId}
		 * @param {string} faceListId Id referencing a particular face list.
		 * @return {void} A successful call returns an empty response body.
		 */
		FaceList_Delete(faceListId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'facelists/' + (faceListId == null ? '' : encodeURIComponent(faceListId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update information of a face list.
		 * Patch facelists/{faceListId}
		 * @param {string} faceListId Id referencing a particular face list.
		 * @param {NameAndUserDataContract} requestBody Request body for updating a face list.
		 * @return {void} A successful call returns an empty response body.
		 */
		FaceList_Update(faceListId: string, requestBody: NameAndUserDataContract): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'facelists/' + (faceListId == null ? '' : encodeURIComponent(faceListId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a face to a specified face list, up to 1,000 faces.
		 * <br /> To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [FaceList - Delete Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395251) or [FaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f) is called.
		 * <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
		 * * Higher face image quality means better detection and recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
		 * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
		 * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
		 * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
		 * * Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel.
		 * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
		 * * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
		 * | Model | Recommended use-case(s) |
		 * | ---------- | -------- |
		 * | 'detection_01': | The default detection model for [FaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
		 * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |
		 * Post facelists/{faceListId}/persistedfaces
		 * @param {string} faceListId Id referencing a particular face list.
		 * @param {string} userData User-specified data about the face for any purpose. The maximum length is 1KB.
		 * @param {Array<number>} targetFace A face rectangle to specify the target face to be added to a person in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
		 * @param {Face_DetectWithUrlDetectionModel} detectionModel Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.
		 * @param {FaceList_AddFaceFromUrlPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {PersistedFace} A successful call returns a new persistedFaceId.
		 */
		FaceList_AddFaceFromUrl(faceListId: string, userData: string | null | undefined, targetFace: Array<number> | null | undefined, detectionModel: Face_DetectWithUrlDetectionModel | null | undefined, requestBody: FaceList_AddFaceFromUrlPostBody): Observable<PersistedFace> {
			return this.http.post<PersistedFace>(this.baseUri + 'facelists/' + (faceListId == null ? '' : encodeURIComponent(faceListId)) + '/persistedfaces&userData=' + (userData == null ? '' : encodeURIComponent(userData)) + '&' + targetFace?.map(z => `targetFace=${z}`).join('&') + '&detectionModel=' + detectionModel, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a face from a face list by specified faceListId and persistedFaceId.
		 * <br /> Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel.
		 * Delete facelists/{faceListId}/persistedfaces/{persistedFaceId}
		 * @param {string} faceListId Id referencing a particular face list.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @return {void} A successful call returns an empty response body.
		 */
		FaceList_DeleteFace(faceListId: string, persistedFaceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'facelists/' + (faceListId == null ? '' : encodeURIComponent(faceListId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Given query face's faceId, to search the similar-looking faces from a faceId array, a face list or a large face list. faceId array contains the faces created by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), which will expire 24 hours after creation. A "faceListId" is created by [FaceList - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b) containing persistedFaceIds that will not expire. And a "largeFaceListId" is created by [LargeFaceList - Create](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc) containing persistedFaceIds that will also not expire. Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.
		 * <br/>Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds. "matchFace" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces.
		 * <br/>The 'recognitionModel' associated with the query face's faceId should be the same as the 'recognitionModel' used by the target faceId array, face list or large face list.
		 * Post findsimilars
		 * @param {FindSimilarRequest} requestBody Request body for Find Similar.
		 * @return {Array<SimilarFace>} A successful call returns an array of the most similar faces represented in faceId if the input parameter is faceIds or persistedFaceId if the input parameter is faceListId.
		 */
		Face_FindSimilar(requestBody: FindSimilarRequest): Observable<Array<SimilarFace>> {
			return this.http.post<Array<SimilarFace>>(this.baseUri + 'findsimilars', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Divide candidate faces into groups based on face similarity.<br />
		 * * The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
		 * * MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts.
		 * * Group API needs at least 2 candidate faces and 1000 at most. We suggest to try [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a) when you only have 2 candidate faces.
		 * * The 'recognitionModel' associated with the query faces' faceIds should be the same.
		 * Post group
		 * @param {GroupRequest} requestBody Request body for grouping.
		 * @return {GroupResult} A successful call returns one or more groups of similar faces (rank by group size) and a messyGroup.
		 */
		Face_Group(requestBody: GroupRequest): Observable<GroupResult> {
			return this.http.post<GroupResult>(this.baseUri + 'group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * 1-to-many identification to find the closest matches of the specific query person face from a person group or large person group.
		 * <br/> For each face in the faceIds array, Face Identify will compute similarities between the query face and all the faces in the person group (given by personGroupId) or large person group (given by largePersonGroupId), and return candidate person(s) for that face ranked by similarity confidence. The person group/large person group should be trained to make it ready for identification. See more in [PersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249) and [LargePersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/599ae2d16ac60f11b48b5aa4).
		 * <br/>
		 * Remarks:<br />
		 * * The algorithm allows more than one face to be identified independently at the same request, but no more than 10 faces.
		 * * Each person in the person group/large person group could have more than one face, but no more than 248 faces.
		 * * Higher face image quality means better identification precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
		 * * Number of candidates returned is restricted by maxNumOfCandidatesReturned and confidenceThreshold. If no person is identified, the returned candidates will be an empty array.
		 * * Try [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237) when you need to find similar faces from a face list/large face list instead of a person group/large person group.
		 * * The 'recognitionModel' associated with the query faces' faceIds should be the same as the 'recognitionModel' used by the target person group or large person group.
		 * Post identify
		 * @param {IdentifyRequest} requestBody Request body for identify operation.
		 * @return {Array<IdentifyResult>} A successful call returns the identified candidate person(s) for each query face.
		 */
		Face_Identify(requestBody: IdentifyRequest): Observable<Array<IdentifyResult>> {
			return this.http.post<Array<IdentifyResult>>(this.baseUri + 'identify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List large face lists’ information of largeFaceListId, name, userData and recognitionModel. <br />
		 * To get face information inside largeFaceList use [LargeFaceList Face - Get](/docs/services/563879b61984550e40cbbe8d/operations/5a158cf2d2de3616c086f2d5)<br />
		 * * Large face lists are stored in alphabetical order of largeFaceListId.
		 * * "start" parameter (string, optional) is a user-provided largeFaceListId value that returned entries have larger ids by string comparison. "start" set to empty to indicate return from the first item.
		 * * "top" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify "start" with the last returned entry’s Id of the current call.
		 * <br />
		 * For example, total 5 large person lists: "list1", ..., "list5".
		 * <br /> "start=&top=" will return all 5 lists.
		 * <br /> "start=&top=2" will return "list1", "list2".
		 * <br /> "start=list2&top=3" will return "list3", "list4", "list5".
		 * Get largefacelists
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @return {Array<LargeFaceList>} A successful call returns an array of largeFaceList.
		 */
		LargeFaceList_List(returnRecognitionModel: boolean | null | undefined): Observable<Array<LargeFaceList>> {
			return this.http.get<Array<LargeFaceList>>(this.baseUri + 'largefacelists?returnRecognitionModel=' + returnRecognitionModel, {});
		}

		/**
		 * Retrieve a large face list’s largeFaceListId, name, userData and recognitionModel.
		 * Get largefacelists/{largeFaceListId}
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @return {LargeFaceList} A successful call returns the large face list's information.
		 */
		LargeFaceList_Get(largeFaceListId: string, returnRecognitionModel: boolean | null | undefined): Observable<LargeFaceList> {
			return this.http.get<LargeFaceList>(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)) + '&returnRecognitionModel=' + returnRecognitionModel, {});
		}

		/**
		 * Create an empty large face list with user-specified largeFaceListId, name, an optional userData and recognitionModel.
		 * <br /> Large face list is a list of faces, up to 1,000,000 faces, and used by [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237).
		 * <br /> After creation, user should use [LargeFaceList Face - Add](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3) to import the faces and [LargeFaceList - Train](/docs/services/563879b61984550e40cbbe8d/operations/5a158422d2de3616c086f2d1) to make it ready for [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). No image will be stored. Only the extracted face features are stored on server until [LargeFaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called.
		 * <br /> Find Similar is used for scenario like finding celebrity-like faces, similar face filtering, or as a light way face identification. But if the actual use is to identify person, please use [PersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244) / [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d) and [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
		 * <br/>'recognitionModel' should be specified to associate with this large face list. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing large face list will use the recognition model that's already associated with the collection. Existing face features in a large face list can't be updated to features extracted by another version of recognition model.
		 * * 'recognition_01': The default recognition model for [LargeFaceList- Create](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc). All those large face lists created before 2019 March are bonded with this recognition model.
		 * * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.
		 * Large face list quota:
		 * * Free-tier subscription quota: 64 large face lists.
		 * * S0-tier subscription quota: 1,000,000 large face lists.
		 * Put largefacelists/{largeFaceListId}
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @param {MetaDataContract} requestBody Request body for creating a large face list.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargeFaceList_Create(largeFaceListId: string, requestBody: MetaDataContract): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a specified large face list.
		 * Delete largefacelists/{largeFaceListId}
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargeFaceList_Delete(largeFaceListId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update information of a large face list.
		 * Patch largefacelists/{largeFaceListId}
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @param {NameAndUserDataContract} requestBody Request body for updating a large face list.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargeFaceList_Update(largeFaceListId: string, requestBody: NameAndUserDataContract): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all faces in a large face list, and retrieve face information (including userData and persistedFaceIds of registered faces of the face).
		 * Get largefacelists/{largeFaceListId}/persistedfaces
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @param {string} start Starting face id to return (used to list a range of faces).
		 * @param {number} top Number of faces to return starting with the face id indicated by the 'start' parameter.
		 * @return {Array<PersistedFace>} A successful call returns an array of face information that belong to the large face list.
		 */
		LargeFaceList_ListFaces(largeFaceListId: string, start: string | null | undefined, top: number | null | undefined): Observable<Array<PersistedFace>> {
			return this.http.get<Array<PersistedFace>>(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)) + '/persistedfaces&start=' + (start == null ? '' : encodeURIComponent(start)) + '&top=' + top, {});
		}

		/**
		 * Add a face to a specified large face list, up to 1,000,000 faces.
		 * <br /> To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [LargeFaceList Face - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a158c8ad2de3616c086f2d4) or [LargeFaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called.
		 * <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
		 * * Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
		 * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
		 * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
		 * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
		 * * Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel.
		 * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
		 * * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
		 * | Model | Recommended use-case(s) |
		 * | ---------- | -------- |
		 * | 'detection_01': | The default detection model for [LargeFaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
		 * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |
		 * Quota:
		 * * Free-tier subscription quota: 1,000 faces per large face list.
		 * * S0-tier subscription quota: 1,000,000 faces per large face list.
		 * Post largefacelists/{largeFaceListId}/persistedfaces
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @param {string} userData User-specified data about the face for any purpose. The maximum length is 1KB.
		 * @param {Array<number>} targetFace A face rectangle to specify the target face to be added to a person in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
		 * @param {Face_DetectWithUrlDetectionModel} detectionModel Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.
		 * @param {LargeFaceList_AddFaceFromUrlPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {PersistedFace} A successful call returns a new persistedFaceId.
		 */
		LargeFaceList_AddFaceFromUrl(largeFaceListId: string, userData: string | null | undefined, targetFace: Array<number> | null | undefined, detectionModel: Face_DetectWithUrlDetectionModel | null | undefined, requestBody: LargeFaceList_AddFaceFromUrlPostBody): Observable<PersistedFace> {
			return this.http.post<PersistedFace>(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)) + '/persistedfaces&userData=' + (userData == null ? '' : encodeURIComponent(userData)) + '&' + targetFace?.map(z => `targetFace=${z}`).join('&') + '&detectionModel=' + detectionModel, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve information about a persisted face (specified by persistedFaceId and its belonging largeFaceListId).
		 * Get largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @return {PersistedFace} A successful call returns target persisted face's information (persistedFaceId and userData).
		 */
		LargeFaceList_GetFace(largeFaceListId: string, persistedFaceId: string): Observable<PersistedFace> {
			return this.http.get<PersistedFace>(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), {});
		}

		/**
		 * Delete a face from a large face list by specified largeFaceListId and persistedFaceId.
		 * <br /> Adding/deleting faces to/from a same large face list are processed sequentially and to/from different large face lists are in parallel.
		 * Delete largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargeFaceList_DeleteFace(largeFaceListId: string, persistedFaceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a persisted face's userData field.
		 * Patch largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @param {UpdateFaceRequest} requestBody Request body for updating persisted face.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargeFaceList_UpdateFace(largeFaceListId: string, persistedFaceId: string, requestBody: UpdateFaceRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Queue a large face list training task, the training task may not be started immediately.
		 * Post largefacelists/{largeFaceListId}/train
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @return {void} 
		 */
		LargeFaceList_Train(largeFaceListId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)) + '/train', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the training status of a large face list (completed or ongoing).
		 * Get largefacelists/{largeFaceListId}/training
		 * @param {string} largeFaceListId Id referencing a particular large face list.
		 * @return {TrainingStatus} A successful call returns the large face list's training status.
		 */
		LargeFaceList_GetTrainingStatus(largeFaceListId: string): Observable<TrainingStatus> {
			return this.http.get<TrainingStatus>(this.baseUri + 'largefacelists/' + (largeFaceListId == null ? '' : encodeURIComponent(largeFaceListId)) + '/training', {});
		}

		/**
		 * List all existing large person groups’ largePersonGroupId, name, userData and recognitionModel.<br />
		 * * Large person groups are stored in alphabetical order of largePersonGroupId.
		 * * "start" parameter (string, optional) is a user-provided largePersonGroupId value that returned entries have larger ids by string comparison. "start" set to empty to indicate return from the first item.
		 * * "top" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify "start" with the last returned entry’s Id of the current call.
		 * <br />
		 * For example, total 5 large person groups: "group1", ..., "group5".
		 * <br /> "start=&top=" will return all 5 groups.
		 * <br /> "start=&top=2" will return "group1", "group2".
		 * <br /> "start=group2&top=3" will return "group3", "group4", "group5".
		 * Get largepersongroups
		 * @param {string} start List large person groups from the least largePersonGroupId greater than the "start".
		 * @param {number} top The number of large person groups to list.
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @return {Array<LargePersonGroup>} A successful call returns an array of large person groups and their information.
		 */
		LargePersonGroup_List(start: string | null | undefined, top: number | null | undefined, returnRecognitionModel: boolean | null | undefined): Observable<Array<LargePersonGroup>> {
			return this.http.get<Array<LargePersonGroup>>(this.baseUri + 'largepersongroups?start=' + (start == null ? '' : encodeURIComponent(start)) + '&top=' + top + '&returnRecognitionModel=' + returnRecognitionModel, {});
		}

		/**
		 * Retrieve the information of a large person group, including its name, userData and recognitionModel. This API returns large person group information only, use [LargePersonGroup Person - List](/docs/services/563879b61984550e40cbbe8d/operations/599adda06ac60f11b48b5aa1) instead to retrieve person information under the large person group.
		 * Get largepersongroups/{largePersonGroupId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @return {LargePersonGroup} A successful call returns the large person group's information.
		 */
		LargePersonGroup_Get(largePersonGroupId: string, returnRecognitionModel: boolean | null | undefined): Observable<LargePersonGroup> {
			return this.http.get<LargePersonGroup>(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '&returnRecognitionModel=' + returnRecognitionModel, {});
		}

		/**
		 * Create a new large person group with user-specified largePersonGroupId, name, an optional userData and recognitionModel.
		 * <br /> A large person group is the container of the uploaded person data, including face recognition feature, and up to 1,000,000
		 * people.
		 * <br /> After creation, use [LargePersonGroup Person - Create](/docs/services/563879b61984550e40cbbe8d/operations/599adcba3a7b9412a4d53f40) to add person into the group, and call [LargePersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/599ae2d16ac60f11b48b5aa4) to get this group ready for [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
		 * <br /> No image will be stored. Only the person's extracted face features and userData will be stored on server until [LargePersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ade5c6ac60f11b48b5aa2) or [LargePersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599adc216ac60f11b48b5a9f) is called.
		 * <br/>'recognitionModel' should be specified to associate with this large person group. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing large person group will use the recognition model that's already associated with the collection. Existing face features in a large person group can't be updated to features extracted by another version of recognition model.
		 * * 'recognition_01': The default recognition model for [LargePersonGroup - Create](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d). All those large person groups created before 2019 March are bonded with this recognition model.
		 * * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.
		 * Large person group quota:
		 * * Free-tier subscription quota: 1,000 large person groups.
		 * * S0-tier subscription quota: 1,000,000 large person groups.
		 * Put largepersongroups/{largePersonGroupId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {MetaDataContract} requestBody Request body for creating new large person group.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargePersonGroup_Create(largePersonGroupId: string, requestBody: MetaDataContract): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an existing large person group. Persisted face features of all people in the large person group will also be deleted.
		 * Delete largepersongroups/{largePersonGroupId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargePersonGroup_Delete(largePersonGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing large person group's display name and userData. The properties which does not appear in request body will not be updated.
		 * Patch largepersongroups/{largePersonGroupId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {NameAndUserDataContract} requestBody Request body for updating large person group.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargePersonGroup_Update(largePersonGroupId: string, requestBody: NameAndUserDataContract): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all persons in a large person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).
		 * Get largepersongroups/{largePersonGroupId}/persons
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {string} start Starting person id to return (used to list a range of persons).
		 * @param {number} top Number of persons to return starting with the person id indicated by the 'start' parameter.
		 * @return {Array<Person>} A successful call returns an array of person information that belong to the large person group.
		 */
		LargePersonGroupPerson_List(largePersonGroupId: string, start: string | null | undefined, top: number | null | undefined): Observable<Array<Person>> {
			return this.http.get<Array<Person>>(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons&start=' + (start == null ? '' : encodeURIComponent(start)) + '&top=' + top, {});
		}

		/**
		 * Create a new person in a specified large person group.
		 * Post largepersongroups/{largePersonGroupId}/persons
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {NameAndUserDataContract} requestBody Request body for creating new person.
		 * @return {Person} A successful call returns a new personId created.
		 */
		LargePersonGroupPerson_Create(largePersonGroupId: string, requestBody: NameAndUserDataContract): Observable<Person> {
			return this.http.post<Person>(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a person's name and userData, and the persisted faceIds representing the registered person face feature.
		 * Get largepersongroups/{largePersonGroupId}/persons/{personId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {string} personId Id referencing a particular person.
		 * @return {Person} A successful call returns the person's information.
		 */
		LargePersonGroupPerson_Get(largePersonGroupId: string, personId: string): Observable<Person> {
			return this.http.get<Person>(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)), {});
		}

		/**
		 * Delete an existing person from a large person group. The persistedFaceId, userData, person name and face feature in the person entry will all be deleted.
		 * Delete largepersongroups/{largePersonGroupId}/persons/{personId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {string} personId Id referencing a particular person.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargePersonGroupPerson_Delete(largePersonGroupId: string, personId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update name or userData of a person.
		 * Patch largepersongroups/{largePersonGroupId}/persons/{personId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {NameAndUserDataContract} requestBody Request body for person update operation.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargePersonGroupPerson_Update(largePersonGroupId: string, personId: string, requestBody: NameAndUserDataContract): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a face to a person into a large person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [LargePersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ae2966ac60f11b48b5aa3), [LargePersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ade5c6ac60f11b48b5aa2) or [LargePersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599adc216ac60f11b48b5a9f) is called.
		 * <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
		 * * Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
		 * * Each person entry can hold up to 248 faces.
		 * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
		 * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
		 * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
		 * * Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.
		 * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
		 * * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
		 * | Model | Recommended use-case(s) |
		 * | ---------- | -------- |
		 * | 'detection_01': | The default detection model for [LargePersonGroup Person - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/599adf2a3a7b9412a4d53f42). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
		 * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |
		 * Post largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {string} userData User-specified data about the face for any purpose. The maximum length is 1KB.
		 * @param {Array<number>} targetFace A face rectangle to specify the target face to be added to a person in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
		 * @param {Face_DetectWithUrlDetectionModel} detectionModel Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.
		 * @param {LargePersonGroupPerson_AddFaceFromUrlPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {PersistedFace} A successful call returns the new persistedFaceId.
		 */
		LargePersonGroupPerson_AddFaceFromUrl(largePersonGroupId: string, personId: string, userData: string | null | undefined, targetFace: Array<number> | null | undefined, detectionModel: Face_DetectWithUrlDetectionModel | null | undefined, requestBody: LargePersonGroupPerson_AddFaceFromUrlPostBody): Observable<PersistedFace> {
			return this.http.post<PersistedFace>(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)) + '/persistedfaces&userData=' + (userData == null ? '' : encodeURIComponent(userData)) + '&' + targetFace?.map(z => `targetFace=${z}`).join('&') + '&detectionModel=' + detectionModel, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging largePersonGroupId).
		 * Get largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @return {PersistedFace} A successful call returns target persisted face's information (persistedFaceId and userData).
		 */
		LargePersonGroupPerson_GetFace(largePersonGroupId: string, personId: string, persistedFaceId: string): Observable<PersistedFace> {
			return this.http.get<PersistedFace>(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), {});
		}

		/**
		 * Delete a face from a person in a large person group by specified largePersonGroupId, personId and persistedFaceId.
		 * <br /> Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.
		 * Delete largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargePersonGroupPerson_DeleteFace(largePersonGroupId: string, personId: string, persistedFaceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a person persisted face's userData field.
		 * Patch largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @param {UpdateFaceRequest} requestBody Request body for updating persisted face.
		 * @return {void} A successful call returns an empty response body.
		 */
		LargePersonGroupPerson_UpdateFace(largePersonGroupId: string, personId: string, persistedFaceId: string, requestBody: UpdateFaceRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Queue a large person group training task, the training task may not be started immediately.
		 * Post largepersongroups/{largePersonGroupId}/train
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @return {void} 
		 */
		LargePersonGroup_Train(largePersonGroupId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/train', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the training status of a large person group (completed or ongoing).
		 * Get largepersongroups/{largePersonGroupId}/training
		 * @param {string} largePersonGroupId Id referencing a particular large person group.
		 * @return {TrainingStatus} A successful call returns the large person group's training status.
		 */
		LargePersonGroup_GetTrainingStatus(largePersonGroupId: string): Observable<TrainingStatus> {
			return this.http.get<TrainingStatus>(this.baseUri + 'largepersongroups/' + (largePersonGroupId == null ? '' : encodeURIComponent(largePersonGroupId)) + '/training', {});
		}

		/**
		 * Retrieve the status of a take/apply snapshot operation.
		 * Get operations/{operationId}
		 * @param {string} operationId Id referencing a particular take/apply snapshot operation.
		 * @return {OperationStatus} A successful call returns the snapshot operation's status.
		 */
		Snapshot_GetOperationStatus(operationId: string): Observable<OperationStatus> {
			return this.http.get<OperationStatus>(this.baseUri + 'operations/' + (operationId == null ? '' : encodeURIComponent(operationId)), {});
		}

		/**
		 * List person groups’ personGroupId, name, userData and recognitionModel.<br />
		 * * Person groups are stored in alphabetical order of personGroupId.
		 * * "start" parameter (string, optional) is a user-provided personGroupId value that returned entries have larger ids by string comparison. "start" set to empty to indicate return from the first item.
		 * * "top" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify "start" with the last returned entry’s Id of the current call.
		 * <br />
		 * For example, total 5 person groups: "group1", ..., "group5".
		 * <br /> "start=&top=" will return all 5 groups.
		 * <br /> "start=&top=2" will return "group1", "group2".
		 * <br /> "start=group2&top=3" will return "group3", "group4", "group5".
		 * Get persongroups
		 * @param {string} start List person groups from the least personGroupId greater than the "start".
		 * @param {number} top The number of person groups to list.
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @return {Array<PersonGroup>} A successful call returns an array of person groups and their information.
		 */
		PersonGroup_List(start: string | null | undefined, top: number | null | undefined, returnRecognitionModel: boolean | null | undefined): Observable<Array<PersonGroup>> {
			return this.http.get<Array<PersonGroup>>(this.baseUri + 'persongroups?start=' + (start == null ? '' : encodeURIComponent(start)) + '&top=' + top + '&returnRecognitionModel=' + returnRecognitionModel, {});
		}

		/**
		 * Retrieve person group name, userData and recognitionModel. To get person information under this personGroup, use [PersonGroup Person - List](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395241).
		 * Get persongroups/{personGroupId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {boolean} returnRecognitionModel A value indicating whether the operation should return 'recognitionModel' in response.
		 * @return {PersonGroup} A successful call returns the person group's information.
		 */
		PersonGroup_Get(personGroupId: string, returnRecognitionModel: boolean | null | undefined): Observable<PersonGroup> {
			return this.http.get<PersonGroup>(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '&returnRecognitionModel=' + returnRecognitionModel, {});
		}

		/**
		 * Create a new person group with specified personGroupId, name, user-provided userData and recognitionModel.
		 * <br /> A person group is the container of the uploaded person data, including face recognition features.
		 * <br /> After creation, use [PersonGroup Person - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523c) to add persons into the group, and then call [PersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249) to get this group ready for [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
		 * <br /> No image will be stored. Only the person's extracted face features and userData will be stored on server until [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called.
		 * <br/>'recognitionModel' should be specified to associate with this person group. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing person group will use the recognition model that's already associated with the collection. Existing face features in a person group can't be updated to features extracted by another version of recognition model.
		 * * 'recognition_01': The default recognition model for [PersonGroup - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244). All those person groups created before 2019 March are bonded with this recognition model.
		 * * 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.
		 * Person group quota:
		 * * Free-tier subscription quota: 1,000 person groups. Each holds up to 1,000 persons.
		 * * S0-tier subscription quota: 1,000,000 person groups. Each holds up to 10,000 persons.
		 * * to handle larger scale face identification problem, please consider using [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d).
		 * Put persongroups/{personGroupId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {MetaDataContract} requestBody Request body for creating new person group.
		 * @return {void} A successful call returns an empty response body.
		 */
		PersonGroup_Create(personGroupId: string, requestBody: MetaDataContract): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an existing person group. Persisted face features of all people in the person group will also be deleted.
		 * Delete persongroups/{personGroupId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @return {void} A successful call returns an empty response body.
		 */
		PersonGroup_Delete(personGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.
		 * Patch persongroups/{personGroupId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {NameAndUserDataContract} requestBody Request body for updating person group.
		 * @return {void} A successful call returns an empty response body.
		 */
		PersonGroup_Update(personGroupId: string, requestBody: NameAndUserDataContract): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all persons in a person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).
		 * Get persongroups/{personGroupId}/persons
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {string} start Starting person id to return (used to list a range of persons).
		 * @param {number} top Number of persons to return starting with the person id indicated by the 'start' parameter.
		 * @return {Array<Person>} A successful call returns an array of person information that belong to the person group.
		 */
		PersonGroupPerson_List(personGroupId: string, start: string | null | undefined, top: number | null | undefined): Observable<Array<Person>> {
			return this.http.get<Array<Person>>(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons&start=' + (start == null ? '' : encodeURIComponent(start)) + '&top=' + top, {});
		}

		/**
		 * Create a new person in a specified person group.
		 * Post persongroups/{personGroupId}/persons
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {NameAndUserDataContract} requestBody Request body for creating new person.
		 * @return {Person} A successful call returns a new personId created.
		 */
		PersonGroupPerson_Create(personGroupId: string, requestBody: NameAndUserDataContract): Observable<Person> {
			return this.http.post<Person>(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a person's information, including registered persisted faces, name and userData.
		 * Get persongroups/{personGroupId}/persons/{personId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {string} personId Id referencing a particular person.
		 * @return {Person} A successful call returns the person's information.
		 */
		PersonGroupPerson_Get(personGroupId: string, personId: string): Observable<Person> {
			return this.http.get<Person>(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)), {});
		}

		/**
		 * Delete an existing person from a person group. The persistedFaceId, userData, person name and face feature in the person entry will all be deleted.
		 * Delete persongroups/{personGroupId}/persons/{personId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {string} personId Id referencing a particular person.
		 * @return {void} A successful call returns an empty response body.
		 */
		PersonGroupPerson_Delete(personGroupId: string, personId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update name or userData of a person.
		 * Patch persongroups/{personGroupId}/persons/{personId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {NameAndUserDataContract} requestBody Request body for person update operation.
		 * @return {void} A successful call returns an empty response body.
		 */
		PersonGroupPerson_Update(personGroupId: string, personId: string, requestBody: NameAndUserDataContract): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a face to a person into a person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [PersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e), [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called.
		 * <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
		 * *   Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
		 * *   Each person entry can hold up to 248 faces.
		 * *   JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
		 * *   "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
		 * *   Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
		 * *   Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.
		 * * The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
		 * * Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
		 * | Model | Recommended use-case(s) |
		 * | ---------- | -------- |
		 * | 'detection_01': | The default detection model for [PersonGroup Person - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
		 * | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |
		 * Post persongroups/{personGroupId}/persons/{personId}/persistedfaces
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {string} userData User-specified data about the face for any purpose. The maximum length is 1KB.
		 * @param {Array<number>} targetFace A face rectangle to specify the target face to be added to a person in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
		 * @param {Face_DetectWithUrlDetectionModel} detectionModel Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.
		 * @param {PersonGroupPerson_AddFaceFromUrlPostBody} requestBody A JSON document with a URL pointing to the image that is to be analyzed.
		 * @return {PersistedFace} A successful call returns the new persistedFaceId.
		 */
		PersonGroupPerson_AddFaceFromUrl(personGroupId: string, personId: string, userData: string | null | undefined, targetFace: Array<number> | null | undefined, detectionModel: Face_DetectWithUrlDetectionModel | null | undefined, requestBody: PersonGroupPerson_AddFaceFromUrlPostBody): Observable<PersistedFace> {
			return this.http.post<PersistedFace>(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)) + '/persistedfaces&userData=' + (userData == null ? '' : encodeURIComponent(userData)) + '&' + targetFace?.map(z => `targetFace=${z}`).join('&') + '&detectionModel=' + detectionModel, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId).
		 * Get persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @return {PersistedFace} A successful call returns target persisted face's information (persistedFaceId and userData).
		 */
		PersonGroupPerson_GetFace(personGroupId: string, personId: string, persistedFaceId: string): Observable<PersistedFace> {
			return this.http.get<PersistedFace>(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), {});
		}

		/**
		 * Delete a face from a person in a person group by specified personGroupId, personId and persistedFaceId.
		 * <br /> Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.
		 * Delete persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @return {void} A successful call returns an empty response body.
		 */
		PersonGroupPerson_DeleteFace(personGroupId: string, personId: string, persistedFaceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a face to a person into a person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [PersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e), [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called.
		 * <br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
		 * * Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
		 * * Each person entry can hold up to 248 faces.
		 * * JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
		 * * "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
		 * * Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
		 * * Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.
		 * Patch persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @param {string} personId Id referencing a particular person.
		 * @param {string} persistedFaceId Id referencing a particular persistedFaceId of an existing face.
		 * @param {UpdateFaceRequest} requestBody Request body for updating persisted face.
		 * @return {void} A successful call returns an empty response body.
		 */
		PersonGroupPerson_UpdateFace(personGroupId: string, personId: string, persistedFaceId: string, requestBody: UpdateFaceRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/persons/' + (personId == null ? '' : encodeURIComponent(personId)) + '/persistedfaces/' + (persistedFaceId == null ? '' : encodeURIComponent(persistedFaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Queue a person group training task, the training task may not be started immediately.
		 * Post persongroups/{personGroupId}/train
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @return {void} 
		 */
		PersonGroup_Train(personGroupId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/train', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the training status of a person group (completed or ongoing).
		 * Get persongroups/{personGroupId}/training
		 * @param {string} personGroupId Id referencing a particular person group.
		 * @return {TrainingStatus} A successful call returns the person group's training status.
		 */
		PersonGroup_GetTrainingStatus(personGroupId: string): Observable<TrainingStatus> {
			return this.http.get<TrainingStatus>(this.baseUri + 'persongroups/' + (personGroupId == null ? '' : encodeURIComponent(personGroupId)) + '/training', {});
		}

		/**
		 * List all accessible snapshots with related information, including snapshots that were taken by the user, or snapshots to be applied to the user (subscription id was included in the applyScope in Snapshot - Take).
		 * Get snapshots
		 * @param {SnapshotType} type User specified object type as a search filter.
		 * @param {Array<string>} applyScope User specified snapshot apply scopes as a search filter. ApplyScope is an array of the target Azure subscription ids for the snapshot, specified by the user who created the snapshot by Snapshot - Take.
		 * @return {Array<Snapshot>} A successful call returns an array of snapshots with snapshot information.
		 */
		Snapshot_List(type: SnapshotType | null | undefined, applyScope: Array<string> | null | undefined): Observable<Array<Snapshot>> {
			return this.http.get<Array<Snapshot>>(this.baseUri + 'snapshots?type=' + type + '&' + applyScope?.map(z => `applyScope=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Submit an operation to take a snapshot of face list, large face list, person group or large person group, with user-specified snapshot type, source object id, apply scope and an optional user data.<br />
		 * The snapshot interfaces are for users to backup and restore their face data from one face subscription to another, inside same region or across regions. The workflow contains two phases, user first calls Snapshot - Take to create a copy of the source object and store it as a snapshot, then calls Snapshot - Apply to paste the snapshot to target subscription. The snapshots are stored in a centralized location (per Azure instance), so that they can be applied cross accounts and regions.<br />
		 * Taking snapshot is an asynchronous operation. An operation id can be obtained from the "Operation-Location" field in response header, to be used in OperationStatus - Get for tracking the progress of creating the snapshot. The snapshot id will be included in the "resourceLocation" field in OperationStatus - Get response when the operation status is "succeeded".<br />
		 * Snapshot taking time depends on the number of person and face entries in the source object. It could be in seconds, or up to several hours for 1,000,000 persons with multiple faces.<br />
		 * Snapshots will be automatically expired and cleaned in 48 hours after it is created by Snapshot - Take. User can delete the snapshot using Snapshot - Delete by themselves any time before expiration.<br />
		 * Taking snapshot for a certain object will not block any other operations against the object. All read-only operations (Get/List and Identify/FindSimilar/Verify) can be conducted as usual. For all writable operations, including Add/Update/Delete the source object or its persons/faces and Train, they are not blocked but not recommended because writable updates may not be reflected on the snapshot during its taking. After snapshot taking is completed, all readable and writable operations can work as normal. Snapshot will also include the training results of the source object, which means target subscription the snapshot applied to does not need re-train the target object before calling Identify/FindSimilar.<br />
		 * * Free-tier subscription quota: 100 take operations per month.
		 * * S0-tier subscription quota: 100 take operations per day.
		 * Post snapshots
		 * @param {TakeSnapshotRequest} requestBody Request body for taking a snapshot.
		 * @return {void} 
		 */
		Snapshot_Take(requestBody: TakeSnapshotRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'snapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve information about a snapshot. Snapshot is only accessible to the source subscription who took it, and target subscriptions included in the applyScope in Snapshot - Take.
		 * Get snapshots/{snapshotId}
		 * @param {string} snapshotId Id referencing a particular snapshot.
		 * @return {Snapshot} A successful call returns the snapshot's information.
		 */
		Snapshot_Get(snapshotId: string): Observable<Snapshot> {
			return this.http.get<Snapshot>(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), {});
		}

		/**
		 * Delete an existing snapshot according to the snapshotId. All object data and information in the snapshot will also be deleted. Only the source subscription who took the snapshot can delete the snapshot. If the user does not delete a snapshot with this API, the snapshot will still be automatically deleted in 48 hours after creation.
		 * Delete snapshots/{snapshotId}
		 * @param {string} snapshotId Id referencing a particular snapshot.
		 * @return {void} A successful call returns an empty response body.
		 */
		Snapshot_Delete(snapshotId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the information of a snapshot. Only the source subscription who took the snapshot can update the snapshot.
		 * Patch snapshots/{snapshotId}
		 * @param {string} snapshotId Id referencing a particular snapshot.
		 * @param {UpdateSnapshotRequest} requestBody Request body for updating a snapshot.
		 * @return {void} A successful call returns an empty response body.
		 */
		Snapshot_Update(snapshotId: string, requestBody: UpdateSnapshotRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Submit an operation to apply a snapshot to current subscription. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.<br />
		 * The snapshot interfaces are for users to backup and restore their face data from one face subscription to another, inside same region or across regions. The workflow contains two phases, user first calls Snapshot - Take to create a copy of the source object and store it as a snapshot, then calls Snapshot - Apply to paste the snapshot to target subscription. The snapshots are stored in a centralized location (per Azure instance), so that they can be applied cross accounts and regions.<br />
		 * Applying snapshot is an asynchronous operation. An operation id can be obtained from the "Operation-Location" field in response header, to be used in OperationStatus - Get for tracking the progress of applying the snapshot. The target object id will be included in the "resourceLocation" field in OperationStatus - Get response when the operation status is "succeeded".<br />
		 * Snapshot applying time depends on the number of person and face entries in the snapshot object. It could be in seconds, or up to 1 hour for 1,000,000 persons with multiple faces.<br />
		 * Snapshots will be automatically expired and cleaned in 48 hours after it is created by Snapshot - Take. So the target subscription is required to apply the snapshot in 48 hours since its creation.<br />
		 * Applying a snapshot will not block any other operations against the target object, however it is not recommended because the correctness cannot be guaranteed during snapshot applying. After snapshot applying is completed, all operations towards the target object can work as normal. Snapshot also includes the training results of the source object, which means target subscription the snapshot applied to does not need re-train the target object before calling Identify/FindSimilar.<br />
		 * One snapshot can be applied multiple times in parallel, while currently only CreateNew apply mode is supported, which means the apply operation will fail if target subscription already contains an object of same type and using the same objectId. Users can specify the "objectId" in request body to avoid such conflicts.<br />
		 * * Free-tier subscription quota: 100 apply operations per month.
		 * * S0-tier subscription quota: 100 apply operations per day.
		 * Post snapshots/{snapshotId}/apply
		 * @param {string} snapshotId Id referencing a particular snapshot.
		 * @param {ApplySnapshotRequest} requestBody Request body for applying a snapshot.
		 * @return {void} 
		 */
		Snapshot_Apply(snapshotId: string, requestBody: ApplySnapshotRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/apply', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify whether two faces belong to a same person or whether one face belongs to a person.
		 * <br/>
		 * Remarks:<br />
		 * * Higher face image quality means better identification precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
		 * * For the scenarios that are sensitive to accuracy please make your own judgment.
		 * * The 'recognitionModel' associated with the query faces' faceIds should be the same as the 'recognitionModel' used by the target face, person group or large person group.
		 * Post verify
		 * @param {VerifyFaceToFaceRequest} requestBody Request body for face to face verification.
		 * @return {VerifyResult} A successful call returns the verification result.
		 */
		Face_VerifyFaceToFace(requestBody: VerifyFaceToFaceRequest): Observable<VerifyResult> {
			return this.http.post<VerifyResult>(this.baseUri + 'verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Face_DetectWithUrlDetectionModel { detection_01 = 0, detection_02 = 1 }

	export interface Face_DetectWithUrlPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface Face_DetectWithUrlPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFace_DetectWithUrlPostBodyFormGroup() {
		return new FormGroup<Face_DetectWithUrlPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FaceList_AddFaceFromUrlPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface FaceList_AddFaceFromUrlPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFaceList_AddFaceFromUrlPostBodyFormGroup() {
		return new FormGroup<FaceList_AddFaceFromUrlPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LargeFaceList_AddFaceFromUrlPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface LargeFaceList_AddFaceFromUrlPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLargeFaceList_AddFaceFromUrlPostBodyFormGroup() {
		return new FormGroup<LargeFaceList_AddFaceFromUrlPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LargePersonGroupPerson_AddFaceFromUrlPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface LargePersonGroupPerson_AddFaceFromUrlPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLargePersonGroupPerson_AddFaceFromUrlPostBodyFormGroup() {
		return new FormGroup<LargePersonGroupPerson_AddFaceFromUrlPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonGroupPerson_AddFaceFromUrlPostBody {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: string;
	}
	export interface PersonGroupPerson_AddFaceFromUrlPostBodyFormProperties {

		/**
		 * Publicly reachable URL of an image
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePersonGroupPerson_AddFaceFromUrlPostBodyFormGroup() {
		return new FormGroup<PersonGroupPerson_AddFaceFromUrlPostBodyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

