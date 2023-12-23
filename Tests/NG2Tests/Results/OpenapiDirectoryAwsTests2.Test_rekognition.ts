import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CompareFacesResponse {

		/** Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison. */
		SourceImageFace?: ComparedSourceImageFace;
		FaceMatches?: Array<CompareFacesMatch>;
		UnmatchedFaces?: Array<ComparedFace>;
		SourceImageOrientationCorrection?: CompareFacesResponseSourceImageOrientationCorrection | null;
		TargetImageOrientationCorrection?: CompareFacesResponseSourceImageOrientationCorrection | null;
	}
	export interface CompareFacesResponseFormProperties {
		SourceImageOrientationCorrection: FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>,
		TargetImageOrientationCorrection: FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>,
	}
	export function CreateCompareFacesResponseFormGroup() {
		return new FormGroup<CompareFacesResponseFormProperties>({
			SourceImageOrientationCorrection: new FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>(undefined),
			TargetImageOrientationCorrection: new FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>(undefined),
		});

	}


	/** Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison.  */
	export interface ComparedSourceImageFace {

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison.  */
	export interface ComparedSourceImageFaceFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateComparedSourceImageFaceFormGroup() {
		return new FormGroup<ComparedSourceImageFaceFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
	export interface BoundingBox {
		Width?: number | null;
		Height?: number | null;
		Left?: number | null;
		Top?: number | null;
	}

	/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
	export interface BoundingBoxFormProperties {
		Width: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		Left: FormControl<number | null | undefined>,
		Top: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxFormGroup() {
		return new FormGroup<BoundingBoxFormProperties>({
			Width: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			Left: new FormControl<number | null | undefined>(undefined),
			Top: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box. */
	export interface CompareFacesMatch {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Similarity?: number | null;

		/** Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
		Face?: ComparedFace;
	}

	/** Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box. */
	export interface CompareFacesMatchFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Similarity: FormControl<number | null | undefined>,
	}
	export function CreateCompareFacesMatchFormGroup() {
		return new FormGroup<CompareFacesMatchFormProperties>({
			Similarity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
	export interface ComparedFace {

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
		Landmarks?: Array<Landmark>;

		/** Indicates the pose of the face as determined by its pitch, roll, and yaw. */
		Pose?: Pose;

		/** Identifies face image brightness and sharpness. */
		Quality?: ImageQuality;
	}

	/** Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
	export interface ComparedFaceFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateComparedFaceFormGroup() {
		return new FormGroup<ComparedFaceFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Indicates the location of the landmark on the face. */
	export interface Landmark {
		Type?: LandmarkType | null;
		X?: number | null;
		Y?: number | null;
	}

	/** Indicates the location of the landmark on the face. */
	export interface LandmarkFormProperties {
		Type: FormControl<LandmarkType | null | undefined>,
		X: FormControl<number | null | undefined>,
		Y: FormControl<number | null | undefined>,
	}
	export function CreateLandmarkFormGroup() {
		return new FormGroup<LandmarkFormProperties>({
			Type: new FormControl<LandmarkType | null | undefined>(undefined),
			X: new FormControl<number | null | undefined>(undefined),
			Y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LandmarkType { eyeLeft = 0, eyeRight = 1, nose = 2, mouthLeft = 3, mouthRight = 4, leftEyeBrowLeft = 5, leftEyeBrowRight = 6, leftEyeBrowUp = 7, rightEyeBrowLeft = 8, rightEyeBrowRight = 9, rightEyeBrowUp = 10, leftEyeLeft = 11, leftEyeRight = 12, leftEyeUp = 13, leftEyeDown = 14, rightEyeLeft = 15, rightEyeRight = 16, rightEyeUp = 17, rightEyeDown = 18, noseLeft = 19, noseRight = 20, mouthUp = 21, mouthDown = 22, leftPupil = 23, rightPupil = 24, upperJawlineLeft = 25, midJawlineLeft = 26, chinBottom = 27, midJawlineRight = 28, upperJawlineRight = 29 }


	/** Indicates the pose of the face as determined by its pitch, roll, and yaw. */
	export interface Pose {

		/**
		 * Minimum: -180
		 * Maximum: 180
		 */
		Roll?: number | null;

		/**
		 * Minimum: -180
		 * Maximum: 180
		 */
		Yaw?: number | null;

		/**
		 * Minimum: -180
		 * Maximum: 180
		 */
		Pitch?: number | null;
	}

	/** Indicates the pose of the face as determined by its pitch, roll, and yaw. */
	export interface PoseFormProperties {

		/**
		 * Minimum: -180
		 * Maximum: 180
		 */
		Roll: FormControl<number | null | undefined>,

		/**
		 * Minimum: -180
		 * Maximum: 180
		 */
		Yaw: FormControl<number | null | undefined>,

		/**
		 * Minimum: -180
		 * Maximum: 180
		 */
		Pitch: FormControl<number | null | undefined>,
	}
	export function CreatePoseFormGroup() {
		return new FormGroup<PoseFormProperties>({
			Roll: new FormControl<number | null | undefined>(undefined, [Validators.min(-180), Validators.max(180)]),
			Yaw: new FormControl<number | null | undefined>(undefined, [Validators.min(-180), Validators.max(180)]),
			Pitch: new FormControl<number | null | undefined>(undefined, [Validators.min(-180), Validators.max(180)]),
		});

	}


	/** Identifies face image brightness and sharpness.  */
	export interface ImageQuality {
		Brightness?: number | null;
		Sharpness?: number | null;
	}

	/** Identifies face image brightness and sharpness.  */
	export interface ImageQualityFormProperties {
		Brightness: FormControl<number | null | undefined>,
		Sharpness: FormControl<number | null | undefined>,
	}
	export function CreateImageQualityFormGroup() {
		return new FormGroup<ImageQualityFormProperties>({
			Brightness: new FormControl<number | null | undefined>(undefined),
			Sharpness: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CompareFacesResponseSourceImageOrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export interface CompareFacesRequest {

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		SourceImage: Image;

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		TargetImage: Image;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		SimilarityThreshold?: number | null;
		QualityFilter?: CompareFacesRequestQualityFilter | null;
	}
	export interface CompareFacesRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		SimilarityThreshold: FormControl<number | null | undefined>,
		QualityFilter: FormControl<CompareFacesRequestQualityFilter | null | undefined>,
	}
	export function CreateCompareFacesRequestFormGroup() {
		return new FormGroup<CompareFacesRequestFormProperties>({
			SimilarityThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			QualityFilter: new FormControl<CompareFacesRequestQualityFilter | null | undefined>(undefined),
		});

	}


	/** <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
	export interface Image {

		/**
		 * Max length: 5242880
		 * Min length: 1
		 */
		Bytes?: string | null;

		/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}

	/** <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p> */
	export interface ImageFormProperties {

		/**
		 * Max length: 5242880
		 * Min length: 1
		 */
		Bytes: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			Bytes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5242880), Validators.minLength(1)]),
		});

	}


	/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
	export interface S3Object {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [0-9A-Za-z\.\-_]*
		 */
		Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Version?: string | null;
	}

	/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
	export interface S3ObjectFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [0-9A-Za-z\.\-_]*
		 */
		Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export enum CompareFacesRequestQualityFilter { NONE = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4 }

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface InvalidS3ObjectException {
	}
	export interface InvalidS3ObjectExceptionFormProperties {
	}
	export function CreateInvalidS3ObjectExceptionFormGroup() {
		return new FormGroup<InvalidS3ObjectExceptionFormProperties>({
		});

	}

	export interface ImageTooLargeException {
	}
	export interface ImageTooLargeExceptionFormProperties {
	}
	export function CreateImageTooLargeExceptionFormGroup() {
		return new FormGroup<ImageTooLargeExceptionFormProperties>({
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

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ProvisionedThroughputExceededException {
	}
	export interface ProvisionedThroughputExceededExceptionFormProperties {
	}
	export function CreateProvisionedThroughputExceededExceptionFormGroup() {
		return new FormGroup<ProvisionedThroughputExceededExceptionFormProperties>({
		});

	}

	export interface InvalidImageFormatException {
	}
	export interface InvalidImageFormatExceptionFormProperties {
	}
	export function CreateInvalidImageFormatExceptionFormGroup() {
		return new FormGroup<InvalidImageFormatExceptionFormProperties>({
		});

	}

	export interface CreateCollectionResponse {

		/** Minimum: 0 */
		StatusCode?: number | null;
		CollectionArn?: string | null;
		FaceModelVersion?: string | null;
	}
	export interface CreateCollectionResponseFormProperties {

		/** Minimum: 0 */
		StatusCode: FormControl<number | null | undefined>,
		CollectionArn: FormControl<string | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionResponseFormGroup() {
		return new FormGroup<CreateCollectionResponseFormProperties>({
			StatusCode: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			CollectionArn: new FormControl<string | null | undefined>(undefined),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;
	}
	export interface CreateCollectionRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionRequestFormGroup() {
		return new FormGroup<CreateCollectionRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateProjectResponse {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn?: string | null;
	}
	export interface CreateProjectResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}

	export interface CreateProjectRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		ProjectName: string;
	}
	export interface CreateProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		ProjectName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			ProjectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateProjectVersionResponse {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn?: string | null;
	}
	export interface CreateProjectVersionResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectVersionResponseFormGroup() {
		return new FormGroup<CreateProjectVersionResponseFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}

	export interface CreateProjectVersionRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		VersionName: string;

		/**
		 * The S3 bucket and folder location where training output is placed.
		 * Required
		 */
		OutputConfig: OutputConfig;

		/**
		 * The dataset used for training.
		 * Required
		 */
		TrainingData: TrainingData;

		/**
		 * The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset.
		 * Required
		 */
		TestingData: TestingData;
	}
	export interface CreateProjectVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		VersionName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectVersionRequestFormGroup() {
		return new FormGroup<CreateProjectVersionRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** The S3 bucket and folder location where training output is placed. */
	export interface OutputConfig {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [0-9A-Za-z\.\-_]*
		 */
		S3Bucket?: string | null;

		/** Max length: 1024 */
		S3KeyPrefix?: string | null;
	}

	/** The S3 bucket and folder location where training output is placed. */
	export interface OutputConfigFormProperties {

		/**
		 * Max length: 255
		 * Min length: 3
		 * Pattern: [0-9A-Za-z\.\-_]*
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(3)]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** The dataset used for training. */
	export interface TrainingData {
		Assets?: Array<Asset>;
	}

	/** The dataset used for training. */
	export interface TrainingDataFormProperties {
	}
	export function CreateTrainingDataFormGroup() {
		return new FormGroup<TrainingDataFormProperties>({
		});

	}


	/** Assets are the images that you use to train and evaluate a model version. Assets are referenced by Sagemaker GroundTruth manifest files.  */
	export interface Asset {

		/** The S3 bucket that contains the Ground Truth manifest file. */
		GroundTruthManifest?: GroundTruthManifest;
	}

	/** Assets are the images that you use to train and evaluate a model version. Assets are referenced by Sagemaker GroundTruth manifest files.  */
	export interface AssetFormProperties {
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
		});

	}


	/** The S3 bucket that contains the Ground Truth manifest file. */
	export interface GroundTruthManifest {

		/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}

	/** The S3 bucket that contains the Ground Truth manifest file. */
	export interface GroundTruthManifestFormProperties {
	}
	export function CreateGroundTruthManifestFormGroup() {
		return new FormGroup<GroundTruthManifestFormProperties>({
		});

	}


	/** The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset. */
	export interface TestingData {
		Assets?: Array<Asset>;
		AutoCreate?: boolean | null;
	}

	/** The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset. */
	export interface TestingDataFormProperties {
		AutoCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateTestingDataFormGroup() {
		return new FormGroup<TestingDataFormProperties>({
			AutoCreate: new FormControl<boolean | null | undefined>(undefined),
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

	export interface CreateStreamProcessorResponse {

		/** Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:streamprocessor\/.+$) */
		StreamProcessorArn?: string | null;
	}
	export interface CreateStreamProcessorResponseFormProperties {

		/** Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:streamprocessor\/.+$) */
		StreamProcessorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamProcessorResponseFormGroup() {
		return new FormGroup<CreateStreamProcessorResponseFormProperties>({
			StreamProcessorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStreamProcessorRequest {

		/**
		 * Information about the source streaming video.
		 * Required
		 */
		Input: StreamProcessorInput;

		/**
		 * Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
		 * Required
		 */
		Output: StreamProcessorOutput;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: string;

		/**
		 * Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
		 * Required
		 */
		Settings: StreamProcessorSettings;

		/**
		 * Required
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleArn: string;
	}
	export interface CreateStreamProcessorRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamProcessorRequestFormGroup() {
		return new FormGroup<CreateStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the source streaming video.  */
	export interface StreamProcessorInput {

		/** Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
		KinesisVideoStream?: KinesisVideoStream;
	}

	/** Information about the source streaming video.  */
	export interface StreamProcessorInputFormProperties {
	}
	export function CreateStreamProcessorInputFormGroup() {
		return new FormGroup<StreamProcessorInputFormProperties>({
		});

	}


	/** Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface KinesisVideoStream {

		/** Pattern: (^arn:([a-z\d-]+):kinesisvideo:([a-z\d-]+):\d{12}:.+$) */
		Arn?: string | null;
	}

	/** Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface KinesisVideoStreamFormProperties {

		/** Pattern: (^arn:([a-z\d-]+):kinesisvideo:([a-z\d-]+):\d{12}:.+$) */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisVideoStreamFormGroup() {
		return new FormGroup<KinesisVideoStreamFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface StreamProcessorOutput {

		/** The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
		KinesisDataStream?: KinesisDataStream;
	}

	/** Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface StreamProcessorOutputFormProperties {
	}
	export function CreateStreamProcessorOutputFormGroup() {
		return new FormGroup<StreamProcessorOutputFormProperties>({
		});

	}


	/** The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface KinesisDataStream {

		/** Pattern: (^arn:([a-z\d-]+):kinesis:([a-z\d-]+):\d{12}:.+$) */
		Arn?: string | null;
	}

	/** The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface KinesisDataStreamFormProperties {

		/** Pattern: (^arn:([a-z\d-]+):kinesis:([a-z\d-]+):\d{12}:.+$) */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisDataStreamFormGroup() {
		return new FormGroup<KinesisDataStreamFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor. */
	export interface StreamProcessorSettings {

		/** Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>. */
		FaceSearch?: FaceSearchSettings;
	}

	/** Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor. */
	export interface StreamProcessorSettingsFormProperties {
	}
	export function CreateStreamProcessorSettingsFormGroup() {
		return new FormGroup<StreamProcessorSettingsFormProperties>({
		});

	}


	/** Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>. */
	export interface FaceSearchSettings {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FaceMatchThreshold?: number | null;
	}

	/** Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>. */
	export interface FaceSearchSettingsFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FaceMatchThreshold: FormControl<number | null | undefined>,
	}
	export function CreateFaceSearchSettingsFormGroup() {
		return new FormGroup<FaceSearchSettingsFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			FaceMatchThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface DeleteCollectionResponse {

		/** Minimum: 0 */
		StatusCode?: number | null;
	}
	export interface DeleteCollectionResponseFormProperties {

		/** Minimum: 0 */
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateDeleteCollectionResponseFormGroup() {
		return new FormGroup<DeleteCollectionResponseFormProperties>({
			StatusCode: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface DeleteCollectionRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;
	}
	export interface DeleteCollectionRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCollectionRequestFormGroup() {
		return new FormGroup<DeleteCollectionRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DeleteFacesResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 4096
		 */
		DeletedFaces?: Array<string>;
	}
	export interface DeleteFacesResponseFormProperties {
	}
	export function CreateDeleteFacesResponseFormGroup() {
		return new FormGroup<DeleteFacesResponseFormProperties>({
		});

	}

	export interface DeleteFacesRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 4096
		 */
		FaceIds: Array<string>;
	}
	export interface DeleteFacesRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFacesRequestFormGroup() {
		return new FormGroup<DeleteFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DeleteProjectResponse {
		Status?: DeleteProjectResponseStatus | null;
	}
	export interface DeleteProjectResponseFormProperties {
		Status: FormControl<DeleteProjectResponseStatus | null | undefined>,
	}
	export function CreateDeleteProjectResponseFormGroup() {
		return new FormGroup<DeleteProjectResponseFormProperties>({
			Status: new FormControl<DeleteProjectResponseStatus | null | undefined>(undefined),
		});

	}

	export enum DeleteProjectResponseStatus { CREATING = 0, CREATED = 1, DELETING = 2 }

	export interface DeleteProjectRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn: string;
	}
	export interface DeleteProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}

	export interface DeleteProjectVersionResponse {
		Status?: DeleteProjectVersionResponseStatus | null;
	}
	export interface DeleteProjectVersionResponseFormProperties {
		Status: FormControl<DeleteProjectVersionResponseStatus | null | undefined>,
	}
	export function CreateDeleteProjectVersionResponseFormGroup() {
		return new FormGroup<DeleteProjectVersionResponseFormProperties>({
			Status: new FormControl<DeleteProjectVersionResponseStatus | null | undefined>(undefined),
		});

	}

	export enum DeleteProjectVersionResponseStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETED = 1, TRAINING_FAILED = 2, STARTING = 3, RUNNING = 4, FAILED = 5, STOPPING = 6, STOPPED = 7, DELETING = 8 }

	export interface DeleteProjectVersionRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: string;
	}
	export interface DeleteProjectVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectVersionRequestFormGroup() {
		return new FormGroup<DeleteProjectVersionRequestFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}

	export interface DeleteStreamProcessorResponse {
	}
	export interface DeleteStreamProcessorResponseFormProperties {
	}
	export function CreateDeleteStreamProcessorResponseFormGroup() {
		return new FormGroup<DeleteStreamProcessorResponseFormProperties>({
		});

	}

	export interface DeleteStreamProcessorRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: string;
	}
	export interface DeleteStreamProcessorRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStreamProcessorRequestFormGroup() {
		return new FormGroup<DeleteStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface DescribeCollectionResponse {

		/** Minimum: 0 */
		FaceCount?: number | null;
		FaceModelVersion?: string | null;
		CollectionARN?: string | null;
		CreationTimestamp?: Date | null;
	}
	export interface DescribeCollectionResponseFormProperties {

		/** Minimum: 0 */
		FaceCount: FormControl<number | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
		CollectionARN: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeCollectionResponseFormGroup() {
		return new FormGroup<DescribeCollectionResponseFormProperties>({
			FaceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
			CollectionARN: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeCollectionRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;
	}
	export interface DescribeCollectionRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCollectionRequestFormGroup() {
		return new FormGroup<DescribeCollectionRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DescribeProjectVersionsResponse {
		ProjectVersionDescriptions?: Array<ProjectVersionDescription>;

		/** Max length: 1024 */
		NextToken?: string | null;
	}
	export interface DescribeProjectVersionsResponseFormProperties {

		/** Max length: 1024 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProjectVersionsResponseFormGroup() {
		return new FormGroup<DescribeProjectVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** The description of a version of a model. */
	export interface ProjectVersionDescription {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn?: string | null;
		CreationTimestamp?: Date | null;

		/** Minimum: 1 */
		MinInferenceUnits?: number | null;
		Status?: DeleteProjectVersionResponseStatus | null;
		StatusMessage?: string | null;

		/** Minimum: 0 */
		BillableTrainingTimeInSeconds?: number | null;
		TrainingEndTimestamp?: Date | null;

		/** The S3 bucket and folder location where training output is placed. */
		OutputConfig?: OutputConfig;

		/** A Sagemaker Groundtruth format manifest file that represents the dataset used for training. */
		TrainingDataResult?: TrainingDataResult;

		/** A Sagemaker Groundtruth format manifest file representing the dataset used for testing. */
		TestingDataResult?: TestingDataResult;

		/** The evaluation results for the training of a model. */
		EvaluationResult?: EvaluationResult;
	}

	/** The description of a version of a model. */
	export interface ProjectVersionDescriptionFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		MinInferenceUnits: FormControl<number | null | undefined>,
		Status: FormControl<DeleteProjectVersionResponseStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		BillableTrainingTimeInSeconds: FormControl<number | null | undefined>,
		TrainingEndTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateProjectVersionDescriptionFormGroup() {
		return new FormGroup<ProjectVersionDescriptionFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			MinInferenceUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Status: new FormControl<DeleteProjectVersionResponseStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			BillableTrainingTimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			TrainingEndTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A Sagemaker Groundtruth format manifest file that represents the dataset used for training. */
	export interface TrainingDataResult {

		/** The dataset used for training. */
		Input?: TrainingData;

		/** The dataset used for training. */
		Output?: TrainingData;
	}

	/** A Sagemaker Groundtruth format manifest file that represents the dataset used for training. */
	export interface TrainingDataResultFormProperties {
	}
	export function CreateTrainingDataResultFormGroup() {
		return new FormGroup<TrainingDataResultFormProperties>({
		});

	}


	/** A Sagemaker Groundtruth format manifest file representing the dataset used for testing. */
	export interface TestingDataResult {

		/** The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset. */
		Input?: TestingData;

		/** The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels creates a testing dataset using an 80/20 split of the training dataset. */
		Output?: TestingData;
	}

	/** A Sagemaker Groundtruth format manifest file representing the dataset used for testing. */
	export interface TestingDataResultFormProperties {
	}
	export function CreateTestingDataResultFormGroup() {
		return new FormGroup<TestingDataResultFormProperties>({
		});

	}


	/** The evaluation results for the training of a model. */
	export interface EvaluationResult {
		F1Score?: number | null;

		/** <p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p> */
		Summary?: Summary;
	}

	/** The evaluation results for the training of a model. */
	export interface EvaluationResultFormProperties {
		F1Score: FormControl<number | null | undefined>,
	}
	export function CreateEvaluationResultFormGroup() {
		return new FormGroup<EvaluationResultFormProperties>({
			F1Score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p> */
	export interface Summary {

		/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}

	/** <p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p> */
	export interface SummaryFormProperties {
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
		});

	}

	export interface DescribeProjectVersionsRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		VersionNames?: Array<string>;

		/** Max length: 1024 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeProjectVersionsRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeProjectVersionsRequestFormGroup() {
		return new FormGroup<DescribeProjectVersionsRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface InvalidPaginationTokenException {
	}
	export interface InvalidPaginationTokenExceptionFormProperties {
	}
	export function CreateInvalidPaginationTokenExceptionFormGroup() {
		return new FormGroup<InvalidPaginationTokenExceptionFormProperties>({
		});

	}

	export interface DescribeProjectsResponse {
		ProjectDescriptions?: Array<ProjectDescription>;

		/** Max length: 1024 */
		NextToken?: string | null;
	}
	export interface DescribeProjectsResponseFormProperties {

		/** Max length: 1024 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProjectsResponseFormGroup() {
		return new FormGroup<DescribeProjectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** A description of a Amazon Rekognition Custom Labels project. */
	export interface ProjectDescription {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn?: string | null;
		CreationTimestamp?: Date | null;
		Status?: DeleteProjectResponseStatus | null;
	}

	/** A description of a Amazon Rekognition Custom Labels project. */
	export interface ProjectDescriptionFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectArn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		Status: FormControl<DeleteProjectResponseStatus | null | undefined>,
	}
	export function CreateProjectDescriptionFormGroup() {
		return new FormGroup<ProjectDescriptionFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DeleteProjectResponseStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeProjectsRequest {

		/** Max length: 1024 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeProjectsRequestFormProperties {

		/** Max length: 1024 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeProjectsRequestFormGroup() {
		return new FormGroup<DescribeProjectsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface DescribeStreamProcessorResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name?: string | null;

		/** Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:streamprocessor\/.+$) */
		StreamProcessorArn?: string | null;
		Status?: DescribeStreamProcessorResponseStatus | null;
		StatusMessage?: string | null;
		CreationTimestamp?: Date | null;
		LastUpdateTimestamp?: Date | null;

		/** Information about the source streaming video. */
		Input?: StreamProcessorInput;

		/** Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
		Output?: StreamProcessorOutput;

		/** Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+ */
		RoleArn?: string | null;

		/** Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor. */
		Settings?: StreamProcessorSettings;
	}
	export interface DescribeStreamProcessorResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: FormControl<string | null | undefined>,

		/** Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:streamprocessor\/.+$) */
		StreamProcessorArn: FormControl<string | null | undefined>,
		Status: FormControl<DescribeStreamProcessorResponseStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,

		/** Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+ */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamProcessorResponseFormGroup() {
		return new FormGroup<DescribeStreamProcessorResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			StreamProcessorArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DescribeStreamProcessorResponseStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeStreamProcessorResponseStatus { STOPPED = 0, STARTING = 1, RUNNING = 2, FAILED = 3, STOPPING = 4 }

	export interface DescribeStreamProcessorRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: string;
	}
	export interface DescribeStreamProcessorRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamProcessorRequestFormGroup() {
		return new FormGroup<DescribeStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface DetectCustomLabelsResponse {
		CustomLabels?: Array<CustomLabel>;
	}
	export interface DetectCustomLabelsResponseFormProperties {
	}
	export function CreateDetectCustomLabelsResponseFormGroup() {
		return new FormGroup<DetectCustomLabelsResponseFormProperties>({
		});

	}


	/** A custom label detected in an image by a call to <a>DetectCustomLabels</a>. */
	export interface CustomLabel {
		Name?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;

		/** Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image. */
		Geometry?: Geometry;
	}

	/** A custom label detected in an image by a call to <a>DetectCustomLabels</a>. */
	export interface CustomLabelFormProperties {
		Name: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateCustomLabelFormGroup() {
		return new FormGroup<CustomLabelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image. */
	export interface Geometry {

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
		Polygon?: Array<Point>;
	}

	/** Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image. */
	export interface GeometryFormProperties {
	}
	export function CreateGeometryFormGroup() {
		return new FormGroup<GeometryFormProperties>({
		});

	}


	/** <p>The X and Y coordinates of a point on an image. The X and Y values returned are ratios of the overall image size. For example, if the input image is 700x200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a>. <code>Polygon</code> represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide. </p> */
	export interface Point {
		X?: number | null;
		Y?: number | null;
	}

	/** <p>The X and Y coordinates of a point on an image. The X and Y values returned are ratios of the overall image size. For example, if the input image is 700x200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a>. <code>Polygon</code> represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide. </p> */
	export interface PointFormProperties {
		X: FormControl<number | null | undefined>,
		Y: FormControl<number | null | undefined>,
	}
	export function CreatePointFormGroup() {
		return new FormGroup<PointFormProperties>({
			X: new FormControl<number | null | undefined>(undefined),
			Y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DetectCustomLabelsRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: string;

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;

		/** Minimum: 0 */
		MaxResults?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence?: number | null;
	}
	export interface DetectCustomLabelsRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateDetectCustomLabelsRequestFormGroup() {
		return new FormGroup<DetectCustomLabelsRequestFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MinConfidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface ResourceNotReadyException {
	}
	export interface ResourceNotReadyExceptionFormProperties {
	}
	export function CreateResourceNotReadyExceptionFormGroup() {
		return new FormGroup<ResourceNotReadyExceptionFormProperties>({
		});

	}

	export interface DetectFacesResponse {
		FaceDetails?: Array<FaceDetail>;
		OrientationCorrection?: CompareFacesResponseSourceImageOrientationCorrection | null;
	}
	export interface DetectFacesResponseFormProperties {
		OrientationCorrection: FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>,
	}
	export function CreateDetectFacesResponseFormGroup() {
		return new FormGroup<DetectFacesResponseFormProperties>({
			OrientationCorrection: new FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>(undefined),
		});

	}


	/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
	export interface FaceDetail {

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/** <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p> */
		AgeRange?: AgeRange;

		/** Indicates whether or not the face is smiling, and the confidence level in the determination. */
		Smile?: Smile;

		/** Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination. */
		Eyeglasses?: Eyeglasses;

		/** Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination. */
		Sunglasses?: Sunglasses;

		/** <p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact&#x2028; an individual's rights, privacy, or access to services.</p> */
		Gender?: Gender;

		/** Indicates whether or not the face has a beard, and the confidence level in the determination. */
		Beard?: Beard;

		/** Indicates whether or not the face has a mustache, and the confidence level in the determination. */
		Mustache?: Mustache;

		/** Indicates whether or not the eyes on the face are open, and the confidence level in the determination. */
		EyesOpen?: EyeOpen;

		/** Indicates whether or not the mouth on the face is open, and the confidence level in the determination. */
		MouthOpen?: MouthOpen;
		Emotions?: Array<Emotion>;
		Landmarks?: Array<Landmark>;

		/** Indicates the pose of the face as determined by its pitch, roll, and yaw. */
		Pose?: Pose;

		/** Identifies face image brightness and sharpness. */
		Quality?: ImageQuality;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
	export interface FaceDetailFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateFaceDetailFormGroup() {
		return new FormGroup<FaceDetailFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p> */
	export interface AgeRange {

		/** Minimum: 0 */
		Low?: number | null;

		/** Minimum: 0 */
		High?: number | null;
	}

	/** <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p> */
	export interface AgeRangeFormProperties {

		/** Minimum: 0 */
		Low: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		High: FormControl<number | null | undefined>,
	}
	export function CreateAgeRangeFormGroup() {
		return new FormGroup<AgeRangeFormProperties>({
			Low: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			High: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Indicates whether or not the face is smiling, and the confidence level in the determination. */
	export interface Smile {
		Value?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Indicates whether or not the face is smiling, and the confidence level in the determination. */
	export interface SmileFormProperties {
		Value: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateSmileFormGroup() {
		return new FormGroup<SmileFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination. */
	export interface Eyeglasses {
		Value?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination. */
	export interface EyeglassesFormProperties {
		Value: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateEyeglassesFormGroup() {
		return new FormGroup<EyeglassesFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination. */
	export interface Sunglasses {
		Value?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination. */
	export interface SunglassesFormProperties {
		Value: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateSunglassesFormGroup() {
		return new FormGroup<SunglassesFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** <p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact&#x2028; an individual's rights, privacy, or access to services.</p> */
	export interface Gender {
		Value?: GenderValue | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** <p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact&#x2028; an individual's rights, privacy, or access to services.</p> */
	export interface GenderFormProperties {
		Value: FormControl<GenderValue | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateGenderFormGroup() {
		return new FormGroup<GenderFormProperties>({
			Value: new FormControl<GenderValue | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export enum GenderValue { Male = 0, Female = 1 }


	/** Indicates whether or not the face has a beard, and the confidence level in the determination. */
	export interface Beard {
		Value?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Indicates whether or not the face has a beard, and the confidence level in the determination. */
	export interface BeardFormProperties {
		Value: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateBeardFormGroup() {
		return new FormGroup<BeardFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Indicates whether or not the face has a mustache, and the confidence level in the determination. */
	export interface Mustache {
		Value?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Indicates whether or not the face has a mustache, and the confidence level in the determination. */
	export interface MustacheFormProperties {
		Value: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateMustacheFormGroup() {
		return new FormGroup<MustacheFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Indicates whether or not the eyes on the face are open, and the confidence level in the determination. */
	export interface EyeOpen {
		Value?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Indicates whether or not the eyes on the face are open, and the confidence level in the determination. */
	export interface EyeOpenFormProperties {
		Value: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateEyeOpenFormGroup() {
		return new FormGroup<EyeOpenFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Indicates whether or not the mouth on the face is open, and the confidence level in the determination. */
	export interface MouthOpen {
		Value?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Indicates whether or not the mouth on the face is open, and the confidence level in the determination. */
	export interface MouthOpenFormProperties {
		Value: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateMouthOpenFormGroup() {
		return new FormGroup<MouthOpenFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally. */
	export interface Emotion {
		Type?: EmotionType | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally. */
	export interface EmotionFormProperties {
		Type: FormControl<EmotionType | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateEmotionFormGroup() {
		return new FormGroup<EmotionFormProperties>({
			Type: new FormControl<EmotionType | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export enum EmotionType { HAPPY = 0, SAD = 1, ANGRY = 2, CONFUSED = 3, DISGUSTED = 4, SURPRISED = 5, CALM = 6, UNKNOWN = 7, FEAR = 8 }

	export interface DetectFacesRequest {

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;
		Attributes?: Array<Attribute>;
	}
	export interface DetectFacesRequestFormProperties {
	}
	export function CreateDetectFacesRequestFormGroup() {
		return new FormGroup<DetectFacesRequestFormProperties>({
		});

	}

	export enum Attribute { DEFAULT = 0, ALL = 1 }

	export interface DetectLabelsResponse {
		Labels?: Array<Label>;
		OrientationCorrection?: CompareFacesResponseSourceImageOrientationCorrection | null;
		LabelModelVersion?: string | null;
	}
	export interface DetectLabelsResponseFormProperties {
		OrientationCorrection: FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>,
		LabelModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectLabelsResponseFormGroup() {
		return new FormGroup<DetectLabelsResponseFormProperties>({
			OrientationCorrection: new FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>(undefined),
			LabelModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p> */
	export interface Label {
		Name?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
		Instances?: Array<Instance>;
		Parents?: Array<Parent>;
	}

	/** <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p> */
	export interface LabelFormProperties {
		Name: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>). */
	export interface Instance {

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>). */
	export interface InstanceFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** A parent label for a label. A label can have 0, 1, or more parents.  */
	export interface Parent {
		Name?: string | null;
	}

	/** A parent label for a label. A label can have 0, 1, or more parents.  */
	export interface ParentFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateParentFormGroup() {
		return new FormGroup<ParentFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetectLabelsRequest {

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;

		/** Minimum: 0 */
		MaxLabels?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence?: number | null;
	}
	export interface DetectLabelsRequestFormProperties {

		/** Minimum: 0 */
		MaxLabels: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateDetectLabelsRequestFormGroup() {
		return new FormGroup<DetectLabelsRequestFormProperties>({
			MaxLabels: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MinConfidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface DetectModerationLabelsResponse {
		ModerationLabels?: Array<ModerationLabel>;
		ModerationModelVersion?: string | null;

		/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
		HumanLoopActivationOutput?: HumanLoopActivationOutput;
	}
	export interface DetectModerationLabelsResponseFormProperties {
		ModerationModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectModerationLabelsResponseFormGroup() {
		return new FormGroup<DetectModerationLabelsResponseFormProperties>({
			ModerationModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a single type of unsafe content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. */
	export interface ModerationLabel {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
		Name?: string | null;
		ParentName?: string | null;
	}

	/** Provides information about a single type of unsafe content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. */
	export interface ModerationLabelFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ParentName: FormControl<string | null | undefined>,
	}
	export function CreateModerationLabelFormGroup() {
		return new FormGroup<ModerationLabelFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
	export interface HumanLoopActivationOutput {

		/** Max length: 256 */
		HumanLoopArn?: string | null;

		/** Minimum items: 1 */
		HumanLoopActivationReasons?: Array<string>;

		/** Max length: 10240 */
		HumanLoopActivationConditionsEvaluationResults?: string | null;
	}

	/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
	export interface HumanLoopActivationOutputFormProperties {

		/** Max length: 256 */
		HumanLoopArn: FormControl<string | null | undefined>,

		/** Max length: 10240 */
		HumanLoopActivationConditionsEvaluationResults: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopActivationOutputFormGroup() {
		return new FormGroup<HumanLoopActivationOutputFormProperties>({
			HumanLoopArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			HumanLoopActivationConditionsEvaluationResults: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240)]),
		});

	}

	export interface DetectModerationLabelsRequest {

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence?: number | null;

		/** Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. */
		HumanLoopConfig?: HumanLoopConfig;
	}
	export interface DetectModerationLabelsRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateDetectModerationLabelsRequestFormGroup() {
		return new FormGroup<DetectModerationLabelsRequestFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. */
	export interface HumanLoopConfig {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 * Pattern: ^[a-z0-9](-*[a-z0-9])*
		 */
		HumanLoopName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		FlowDefinitionArn: string;

		/** Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information. */
		DataAttributes?: HumanLoopDataAttributes;
	}

	/** Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. */
	export interface HumanLoopConfigFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 * Pattern: ^[a-z0-9](-*[a-z0-9])*
		 */
		HumanLoopName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		FlowDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopConfigFormGroup() {
		return new FormGroup<HumanLoopConfigFormProperties>({
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1)]),
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}


	/** Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information. */
	export interface HumanLoopDataAttributes {

		/** Maximum items: 256 */
		ContentClassifiers?: Array<ContentClassifier>;
	}

	/** Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information. */
	export interface HumanLoopDataAttributesFormProperties {
	}
	export function CreateHumanLoopDataAttributesFormGroup() {
		return new FormGroup<HumanLoopDataAttributesFormProperties>({
		});

	}

	export enum ContentClassifier { FreeOfPersonallyIdentifiableInformation = 0, FreeOfAdultContent = 1 }

	export interface HumanLoopQuotaExceededException {
	}
	export interface HumanLoopQuotaExceededExceptionFormProperties {
	}
	export function CreateHumanLoopQuotaExceededExceptionFormGroup() {
		return new FormGroup<HumanLoopQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DetectTextResponse {
		TextDetections?: Array<TextDetection>;
		TextModelVersion?: string | null;
	}
	export interface DetectTextResponseFormProperties {
		TextModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectTextResponseFormGroup() {
		return new FormGroup<DetectTextResponseFormProperties>({
			TextModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p> */
	export interface TextDetection {
		DetectedText?: string | null;
		Type?: TextDetectionType | null;

		/** Minimum: 0 */
		Id?: number | null;

		/** Minimum: 0 */
		ParentId?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;

		/** Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image. */
		Geometry?: Geometry;
	}

	/** <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p> */
	export interface TextDetectionFormProperties {
		DetectedText: FormControl<string | null | undefined>,
		Type: FormControl<TextDetectionType | null | undefined>,

		/** Minimum: 0 */
		Id: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		ParentId: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateTextDetectionFormGroup() {
		return new FormGroup<TextDetectionFormProperties>({
			DetectedText: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<TextDetectionType | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ParentId: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export enum TextDetectionType { LINE = 0, WORD = 1 }

	export interface DetectTextRequest {

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;

		/** A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in. */
		Filters?: DetectTextFilters;
	}
	export interface DetectTextRequestFormProperties {
	}
	export function CreateDetectTextRequestFormGroup() {
		return new FormGroup<DetectTextRequestFormProperties>({
		});

	}


	/** A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in.  */
	export interface DetectTextFilters {

		/** A set of parameters that allow you to filter out certain results from your returned results. */
		WordFilter?: DetectionFilter;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		RegionsOfInterest?: Array<RegionOfInterest>;
	}

	/** A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in.  */
	export interface DetectTextFiltersFormProperties {
	}
	export function CreateDetectTextFiltersFormGroup() {
		return new FormGroup<DetectTextFiltersFormProperties>({
		});

	}


	/** A set of parameters that allow you to filter out certain results from your returned results. */
	export interface DetectionFilter {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		MinBoundingBoxHeight?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		MinBoundingBoxWidth?: number | null;
	}

	/** A set of parameters that allow you to filter out certain results from your returned results. */
	export interface DetectionFilterFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		MinBoundingBoxHeight: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		MinBoundingBoxWidth: FormControl<number | null | undefined>,
	}
	export function CreateDetectionFilterFormGroup() {
		return new FormGroup<DetectionFilterFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			MinBoundingBoxHeight: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			MinBoundingBoxWidth: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}


	/** <p>Specifies a location within the frame that Rekognition checks for text. Uses a <code>BoundingBox</code> object to set a region of the screen.</p> <p>A word is included in the region if the word is more than half in that region. If there is more than one region, the word will be compared with all regions of the screen. Any word more than half in a region is kept in the results.</p> */
	export interface RegionOfInterest {

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
	}

	/** <p>Specifies a location within the frame that Rekognition checks for text. Uses a <code>BoundingBox</code> object to set a region of the screen.</p> <p>A word is included in the region if the word is more than half in that region. If there is more than one region, the word will be compared with all regions of the screen. Any word more than half in a region is kept in the results.</p> */
	export interface RegionOfInterestFormProperties {
	}
	export function CreateRegionOfInterestFormGroup() {
		return new FormGroup<RegionOfInterestFormProperties>({
		});

	}

	export interface GetCelebrityInfoResponse {
		Urls?: Array<string>;
		Name?: string | null;
	}
	export interface GetCelebrityInfoResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetCelebrityInfoResponseFormGroup() {
		return new FormGroup<GetCelebrityInfoResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCelebrityInfoRequest {

		/**
		 * Required
		 * Pattern: [0-9A-Za-z]*
		 */
		Id: string;
	}
	export interface GetCelebrityInfoRequestFormProperties {

		/**
		 * Required
		 * Pattern: [0-9A-Za-z]*
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetCelebrityInfoRequestFormGroup() {
		return new FormGroup<GetCelebrityInfoRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCelebrityRecognitionResponse {
		JobStatus?: GetCelebrityRecognitionResponseJobStatus | null;
		StatusMessage?: string | null;

		/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;

		/** Max length: 255 */
		NextToken?: string | null;
		Celebrities?: Array<CelebrityRecognition>;
	}
	export interface GetCelebrityRecognitionResponseFormProperties {
		JobStatus: FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCelebrityRecognitionResponseFormGroup() {
		return new FormGroup<GetCelebrityRecognitionResponseFormProperties>({
			JobStatus: new FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export enum GetCelebrityRecognitionResponseJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }


	/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
	export interface VideoMetadata {
		Codec?: string | null;

		/** Minimum: 0 */
		DurationMillis?: number | null;
		Format?: string | null;
		FrameRate?: number | null;

		/** Minimum: 0 */
		FrameHeight?: number | null;

		/** Minimum: 0 */
		FrameWidth?: number | null;
	}

	/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
	export interface VideoMetadataFormProperties {
		Codec: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		DurationMillis: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		FrameRate: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		FrameHeight: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		FrameWidth: FormControl<number | null | undefined>,
	}
	export function CreateVideoMetadataFormGroup() {
		return new FormGroup<VideoMetadataFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Format: new FormControl<string | null | undefined>(undefined),
			FrameRate: new FormControl<number | null | undefined>(undefined),
			FrameHeight: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FrameWidth: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide. */
	export interface CelebrityRecognition {
		Timestamp?: number | null;

		/** Information about a recognized celebrity. */
		Celebrity?: CelebrityDetail;
	}

	/** Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide. */
	export interface CelebrityRecognitionFormProperties {
		Timestamp: FormControl<number | null | undefined>,
	}
	export function CreateCelebrityRecognitionFormGroup() {
		return new FormGroup<CelebrityRecognitionFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a recognized celebrity. */
	export interface CelebrityDetail {
		Urls?: Array<string>;
		Name?: string | null;

		/** Pattern: [0-9A-Za-z]* */
		Id?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		Face?: FaceDetail;
	}

	/** Information about a recognized celebrity. */
	export interface CelebrityDetailFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Pattern: [0-9A-Za-z]* */
		Id: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateCelebrityDetailFormGroup() {
		return new FormGroup<CelebrityDetailFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface GetCelebrityRecognitionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: string;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** Max length: 255 */
		NextToken?: string | null;
		SortBy?: GetCelebrityRecognitionRequestSortBy | null;
	}
	export interface GetCelebrityRecognitionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<GetCelebrityRecognitionRequestSortBy | null | undefined>,
	}
	export function CreateGetCelebrityRecognitionRequestFormGroup() {
		return new FormGroup<GetCelebrityRecognitionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			SortBy: new FormControl<GetCelebrityRecognitionRequestSortBy | null | undefined>(undefined),
		});

	}

	export enum GetCelebrityRecognitionRequestSortBy { ID = 0, TIMESTAMP = 1 }

	export interface GetContentModerationResponse {
		JobStatus?: GetCelebrityRecognitionResponseJobStatus | null;
		StatusMessage?: string | null;

		/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		ModerationLabels?: Array<ContentModerationDetection>;

		/** Max length: 255 */
		NextToken?: string | null;
		ModerationModelVersion?: string | null;
	}
	export interface GetContentModerationResponseFormProperties {
		JobStatus: FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
		ModerationModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetContentModerationResponseFormGroup() {
		return new FormGroup<GetContentModerationResponseFormProperties>({
			JobStatus: new FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			ModerationModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an unsafe content label detection in a stored video. */
	export interface ContentModerationDetection {
		Timestamp?: number | null;

		/** Provides information about a single type of unsafe content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. */
		ModerationLabel?: ModerationLabel;
	}

	/** Information about an unsafe content label detection in a stored video. */
	export interface ContentModerationDetectionFormProperties {
		Timestamp: FormControl<number | null | undefined>,
	}
	export function CreateContentModerationDetectionFormGroup() {
		return new FormGroup<ContentModerationDetectionFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetContentModerationRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: string;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** Max length: 255 */
		NextToken?: string | null;
		SortBy?: GetContentModerationRequestSortBy | null;
	}
	export interface GetContentModerationRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<GetContentModerationRequestSortBy | null | undefined>,
	}
	export function CreateGetContentModerationRequestFormGroup() {
		return new FormGroup<GetContentModerationRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			SortBy: new FormControl<GetContentModerationRequestSortBy | null | undefined>(undefined),
		});

	}

	export enum GetContentModerationRequestSortBy { NAME = 0, TIMESTAMP = 1 }

	export interface GetFaceDetectionResponse {
		JobStatus?: GetCelebrityRecognitionResponseJobStatus | null;
		StatusMessage?: string | null;

		/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;

		/** Max length: 255 */
		NextToken?: string | null;
		Faces?: Array<FaceDetection>;
	}
	export interface GetFaceDetectionResponseFormProperties {
		JobStatus: FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFaceDetectionResponseFormGroup() {
		return new FormGroup<GetFaceDetectionResponseFormProperties>({
			JobStatus: new FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** Information about a face detected in a video analysis request and the time the face was detected in the video.  */
	export interface FaceDetection {
		Timestamp?: number | null;

		/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		Face?: FaceDetail;
	}

	/** Information about a face detected in a video analysis request and the time the face was detected in the video.  */
	export interface FaceDetectionFormProperties {
		Timestamp: FormControl<number | null | undefined>,
	}
	export function CreateFaceDetectionFormGroup() {
		return new FormGroup<FaceDetectionFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFaceDetectionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: string;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** Max length: 255 */
		NextToken?: string | null;
	}
	export interface GetFaceDetectionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFaceDetectionRequestFormGroup() {
		return new FormGroup<GetFaceDetectionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export interface GetFaceSearchResponse {
		JobStatus?: GetCelebrityRecognitionResponseJobStatus | null;
		StatusMessage?: string | null;

		/** Max length: 255 */
		NextToken?: string | null;

		/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		Persons?: Array<PersonMatch>;
	}
	export interface GetFaceSearchResponseFormProperties {
		JobStatus: FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFaceSearchResponseFormGroup() {
		return new FormGroup<GetFaceSearchResponseFormProperties>({
			JobStatus: new FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>.  */
	export interface PersonMatch {
		Timestamp?: number | null;

		/** Details about a person detected in a video analysis request. */
		Person?: PersonDetail;
		FaceMatches?: Array<FaceMatch>;
	}

	/** Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>.  */
	export interface PersonMatchFormProperties {
		Timestamp: FormControl<number | null | undefined>,
	}
	export function CreatePersonMatchFormGroup() {
		return new FormGroup<PersonMatchFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about a person detected in a video analysis request. */
	export interface PersonDetail {
		Index?: number | null;

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		Face?: FaceDetail;
	}

	/** Details about a person detected in a video analysis request. */
	export interface PersonDetailFormProperties {
		Index: FormControl<number | null | undefined>,
	}
	export function CreatePersonDetailFormGroup() {
		return new FormGroup<PersonDetailFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face. */
	export interface FaceMatch {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Similarity?: number | null;

		/** Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. */
		Face?: Face;
	}

	/** Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face. */
	export interface FaceMatchFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Similarity: FormControl<number | null | undefined>,
	}
	export function CreateFaceMatchFormGroup() {
		return new FormGroup<FaceMatchFormProperties>({
			Similarity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/** Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.  */
	export interface Face {

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		FaceId?: string | null;

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		ImageId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		ExternalImageId?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence?: number | null;
	}

	/** Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.  */
	export interface FaceFormProperties {

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		FaceId: FormControl<string | null | undefined>,

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		ImageId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		ExternalImageId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateFaceFormGroup() {
		return new FormGroup<FaceFormProperties>({
			FaceId: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			ExternalImageId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Confidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface GetFaceSearchRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: string;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** Max length: 255 */
		NextToken?: string | null;
		SortBy?: GetFaceSearchRequestSortBy | null;
	}
	export interface GetFaceSearchRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<GetFaceSearchRequestSortBy | null | undefined>,
	}
	export function CreateGetFaceSearchRequestFormGroup() {
		return new FormGroup<GetFaceSearchRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			SortBy: new FormControl<GetFaceSearchRequestSortBy | null | undefined>(undefined),
		});

	}

	export enum GetFaceSearchRequestSortBy { INDEX = 0, TIMESTAMP = 1 }

	export interface GetLabelDetectionResponse {
		JobStatus?: GetCelebrityRecognitionResponseJobStatus | null;
		StatusMessage?: string | null;

		/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;

		/** Max length: 255 */
		NextToken?: string | null;
		Labels?: Array<LabelDetection>;
		LabelModelVersion?: string | null;
	}
	export interface GetLabelDetectionResponseFormProperties {
		JobStatus: FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
		LabelModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetLabelDetectionResponseFormGroup() {
		return new FormGroup<GetLabelDetectionResponseFormProperties>({
			JobStatus: new FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			LabelModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a label detected in a video analysis request and the time the label was detected in the video.  */
	export interface LabelDetection {
		Timestamp?: number | null;

		/** <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p> */
		Label?: Label;
	}

	/** Information about a label detected in a video analysis request and the time the label was detected in the video.  */
	export interface LabelDetectionFormProperties {
		Timestamp: FormControl<number | null | undefined>,
	}
	export function CreateLabelDetectionFormGroup() {
		return new FormGroup<LabelDetectionFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLabelDetectionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: string;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** Max length: 255 */
		NextToken?: string | null;
		SortBy?: GetContentModerationRequestSortBy | null;
	}
	export interface GetLabelDetectionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<GetContentModerationRequestSortBy | null | undefined>,
	}
	export function CreateGetLabelDetectionRequestFormGroup() {
		return new FormGroup<GetLabelDetectionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			SortBy: new FormControl<GetContentModerationRequestSortBy | null | undefined>(undefined),
		});

	}

	export interface GetPersonTrackingResponse {
		JobStatus?: GetCelebrityRecognitionResponseJobStatus | null;
		StatusMessage?: string | null;

		/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;

		/** Max length: 255 */
		NextToken?: string | null;
		Persons?: Array<PersonDetection>;
	}
	export interface GetPersonTrackingResponseFormProperties {
		JobStatus: FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetPersonTrackingResponseFormGroup() {
		return new FormGroup<GetPersonTrackingResponseFormProperties>({
			JobStatus: new FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p> */
	export interface PersonDetection {
		Timestamp?: number | null;

		/** Details about a person detected in a video analysis request. */
		Person?: PersonDetail;
	}

	/** <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p> */
	export interface PersonDetectionFormProperties {
		Timestamp: FormControl<number | null | undefined>,
	}
	export function CreatePersonDetectionFormGroup() {
		return new FormGroup<PersonDetectionFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPersonTrackingRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: string;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** Max length: 255 */
		NextToken?: string | null;
		SortBy?: GetFaceSearchRequestSortBy | null;
	}
	export interface GetPersonTrackingRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<GetFaceSearchRequestSortBy | null | undefined>,
	}
	export function CreateGetPersonTrackingRequestFormGroup() {
		return new FormGroup<GetPersonTrackingRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			SortBy: new FormControl<GetFaceSearchRequestSortBy | null | undefined>(undefined),
		});

	}

	export interface GetTextDetectionResponse {
		JobStatus?: GetCelebrityRecognitionResponseJobStatus | null;
		StatusMessage?: string | null;

		/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		TextDetections?: Array<TextDetectionResult>;

		/** Max length: 255 */
		NextToken?: string | null;
		TextModelVersion?: string | null;
	}
	export interface GetTextDetectionResponseFormProperties {
		JobStatus: FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
		TextModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetTextDetectionResponseFormGroup() {
		return new FormGroup<GetTextDetectionResponseFormProperties>({
			JobStatus: new FormControl<GetCelebrityRecognitionResponseJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			TextModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen. */
	export interface TextDetectionResult {
		Timestamp?: number | null;

		/** <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p> */
		TextDetection?: TextDetection;
	}

	/** Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen. */
	export interface TextDetectionResultFormProperties {
		Timestamp: FormControl<number | null | undefined>,
	}
	export function CreateTextDetectionResultFormGroup() {
		return new FormGroup<TextDetectionResultFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTextDetectionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: string;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/** Max length: 255 */
		NextToken?: string | null;
	}
	export interface GetTextDetectionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTextDetectionRequestFormGroup() {
		return new FormGroup<GetTextDetectionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export interface IndexFacesResponse {
		FaceRecords?: Array<FaceRecord>;
		OrientationCorrection?: CompareFacesResponseSourceImageOrientationCorrection | null;
		FaceModelVersion?: string | null;
		UnindexedFaces?: Array<UnindexedFace>;
	}
	export interface IndexFacesResponseFormProperties {
		OrientationCorrection: FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateIndexFacesResponseFormGroup() {
		return new FormGroup<IndexFacesResponseFormProperties>({
			OrientationCorrection: new FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>(undefined),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database. */
	export interface FaceRecord {

		/** Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. */
		Face?: Face;

		/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		FaceDetail?: FaceDetail;
	}

	/** Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database. */
	export interface FaceRecordFormProperties {
	}
	export function CreateFaceRecordFormGroup() {
		return new FormGroup<FaceRecordFormProperties>({
		});

	}


	/** A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed. */
	export interface UnindexedFace {
		Reasons?: Array<Reason>;

		/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		FaceDetail?: FaceDetail;
	}

	/** A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed. */
	export interface UnindexedFaceFormProperties {
	}
	export function CreateUnindexedFaceFormGroup() {
		return new FormGroup<UnindexedFaceFormProperties>({
		});

	}

	export enum Reason { EXCEEDS_MAX_FACES = 0, EXTREME_POSE = 1, LOW_BRIGHTNESS = 2, LOW_SHARPNESS = 3, LOW_CONFIDENCE = 4, SMALL_BOUNDING_BOX = 5, LOW_FACE_QUALITY = 6 }

	export interface IndexFacesRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		ExternalImageId?: string | null;
		DetectionAttributes?: Array<Attribute>;

		/** Minimum: 1 */
		MaxFaces?: number | null;
		QualityFilter?: CompareFacesRequestQualityFilter | null;
	}
	export interface IndexFacesRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		ExternalImageId: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxFaces: FormControl<number | null | undefined>,
		QualityFilter: FormControl<CompareFacesRequestQualityFilter | null | undefined>,
	}
	export function CreateIndexFacesRequestFormGroup() {
		return new FormGroup<IndexFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			ExternalImageId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			MaxFaces: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			QualityFilter: new FormControl<CompareFacesRequestQualityFilter | null | undefined>(undefined),
		});

	}

	export interface ListCollectionsResponse {
		CollectionIds?: Array<string>;

		/** Max length: 255 */
		NextToken?: string | null;
		FaceModelVersions?: Array<string>;
	}
	export interface ListCollectionsResponseFormProperties {

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollectionsResponseFormGroup() {
		return new FormGroup<ListCollectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export interface ListCollectionsRequest {

		/** Max length: 255 */
		NextToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 4096
		 */
		MaxResults?: number | null;
	}
	export interface ListCollectionsRequestFormProperties {

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 4096
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCollectionsRequestFormGroup() {
		return new FormGroup<ListCollectionsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4096)]),
		});

	}

	export interface ListFacesResponse {
		Faces?: Array<Face>;
		NextToken?: string | null;
		FaceModelVersion?: string | null;
	}
	export interface ListFacesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateListFacesResponseFormGroup() {
		return new FormGroup<ListFacesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFacesRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;

		/** Max length: 255 */
		NextToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 4096
		 */
		MaxResults?: number | null;
	}
	export interface ListFacesRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 4096
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFacesRequestFormGroup() {
		return new FormGroup<ListFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4096)]),
		});

	}

	export interface ListStreamProcessorsResponse {

		/** Max length: 255 */
		NextToken?: string | null;
		StreamProcessors?: Array<StreamProcessor>;
	}
	export interface ListStreamProcessorsResponseFormProperties {

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamProcessorsResponseFormGroup() {
		return new FormGroup<ListStreamProcessorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** An object that recognizes faces in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.  */
	export interface StreamProcessor {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name?: string | null;
		Status?: DescribeStreamProcessorResponseStatus | null;
	}

	/** An object that recognizes faces in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.  */
	export interface StreamProcessorFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<DescribeStreamProcessorResponseStatus | null | undefined>,
	}
	export function CreateStreamProcessorFormGroup() {
		return new FormGroup<StreamProcessorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			Status: new FormControl<DescribeStreamProcessorResponseStatus | null | undefined>(undefined),
		});

	}

	export interface ListStreamProcessorsRequest {

		/** Max length: 255 */
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;
	}
	export interface ListStreamProcessorsRequestFormProperties {

		/** Max length: 255 */
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListStreamProcessorsRequestFormGroup() {
		return new FormGroup<ListStreamProcessorsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface RecognizeCelebritiesResponse {
		CelebrityFaces?: Array<Celebrity>;
		UnrecognizedFaces?: Array<ComparedFace>;
		OrientationCorrection?: CompareFacesResponseSourceImageOrientationCorrection | null;
	}
	export interface RecognizeCelebritiesResponseFormProperties {
		OrientationCorrection: FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>,
	}
	export function CreateRecognizeCelebritiesResponseFormGroup() {
		return new FormGroup<RecognizeCelebritiesResponseFormProperties>({
			OrientationCorrection: new FormControl<CompareFacesResponseSourceImageOrientationCorrection | null | undefined>(undefined),
		});

	}


	/** Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation. */
	export interface Celebrity {
		Urls?: Array<string>;
		Name?: string | null;

		/** Pattern: [0-9A-Za-z]* */
		Id?: string | null;

		/** Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
		Face?: ComparedFace;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MatchConfidence?: number | null;
	}

	/** Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation. */
	export interface CelebrityFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Pattern: [0-9A-Za-z]* */
		Id: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MatchConfidence: FormControl<number | null | undefined>,
	}
	export function CreateCelebrityFormGroup() {
		return new FormGroup<CelebrityFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MatchConfidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface RecognizeCelebritiesRequest {

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;
	}
	export interface RecognizeCelebritiesRequestFormProperties {
	}
	export function CreateRecognizeCelebritiesRequestFormGroup() {
		return new FormGroup<RecognizeCelebritiesRequestFormProperties>({
		});

	}

	export interface SearchFacesResponse {

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		SearchedFaceId?: string | null;
		FaceMatches?: Array<FaceMatch>;
		FaceModelVersion?: string | null;
	}
	export interface SearchFacesResponseFormProperties {

		/** Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} */
		SearchedFaceId: FormControl<string | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateSearchFacesResponseFormGroup() {
		return new FormGroup<SearchFacesResponseFormProperties>({
			SearchedFaceId: new FormControl<string | null | undefined>(undefined),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchFacesRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;

		/**
		 * Required
		 * Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}
		 */
		FaceId: string;

		/**
		 * Minimum: 1
		 * Maximum: 4096
		 */
		MaxFaces?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FaceMatchThreshold?: number | null;
	}
	export interface SearchFacesRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Pattern: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}
		 */
		FaceId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 4096
		 */
		MaxFaces: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FaceMatchThreshold: FormControl<number | null | undefined>,
	}
	export function CreateSearchFacesRequestFormGroup() {
		return new FormGroup<SearchFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			FaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxFaces: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(4096)]),
			FaceMatchThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface SearchFacesByImageResponse {

		/** <p>Identifies the bounding box around the label, face, or text. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		SearchedFaceBoundingBox?: BoundingBox;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		SearchedFaceConfidence?: number | null;
		FaceMatches?: Array<FaceMatch>;
		FaceModelVersion?: string | null;
	}
	export interface SearchFacesByImageResponseFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		SearchedFaceConfidence: FormControl<number | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateSearchFacesByImageResponseFormGroup() {
		return new FormGroup<SearchFacesByImageResponseFormProperties>({
			SearchedFaceConfidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchFacesByImageRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource Based Policies in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;

		/**
		 * Minimum: 1
		 * Maximum: 4096
		 */
		MaxFaces?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FaceMatchThreshold?: number | null;
		QualityFilter?: CompareFacesRequestQualityFilter | null;
	}
	export interface SearchFacesByImageRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 4096
		 */
		MaxFaces: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FaceMatchThreshold: FormControl<number | null | undefined>,
		QualityFilter: FormControl<CompareFacesRequestQualityFilter | null | undefined>,
	}
	export function CreateSearchFacesByImageRequestFormGroup() {
		return new FormGroup<SearchFacesByImageRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			MaxFaces: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(4096)]),
			FaceMatchThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			QualityFilter: new FormControl<CompareFacesRequestQualityFilter | null | undefined>(undefined),
		});

	}

	export interface StartCelebrityRecognitionResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId?: string | null;
	}
	export interface StartCelebrityRecognitionResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartCelebrityRecognitionResponseFormGroup() {
		return new FormGroup<StartCelebrityRecognitionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface StartCelebrityRecognitionRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken?: string | null;

		/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag?: string | null;
	}
	export interface StartCelebrityRecognitionRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartCelebrityRecognitionRequestFormGroup() {
		return new FormGroup<StartCelebrityRecognitionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			JobTag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
	export interface Video {

		/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}

	/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
	export interface VideoFormProperties {
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
		});

	}


	/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
	export interface NotificationChannel {

		/**
		 * Required
		 * Pattern: (^arn:aws:sns:.*:\w{12}:.+$)
		 */
		SNSTopicArn: string;

		/**
		 * Required
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleArn: string;
	}

	/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
	export interface NotificationChannelFormProperties {

		/**
		 * Required
		 * Pattern: (^arn:aws:sns:.*:\w{12}:.+$)
		 */
		SNSTopicArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelFormGroup() {
		return new FormGroup<NotificationChannelFormProperties>({
			SNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
		});

	}

	export interface VideoTooLargeException {
	}
	export interface VideoTooLargeExceptionFormProperties {
	}
	export function CreateVideoTooLargeExceptionFormGroup() {
		return new FormGroup<VideoTooLargeExceptionFormProperties>({
		});

	}

	export interface StartContentModerationResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId?: string | null;
	}
	export interface StartContentModerationResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartContentModerationResponseFormGroup() {
		return new FormGroup<StartContentModerationResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface StartContentModerationRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence?: number | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken?: string | null;

		/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag?: string | null;
	}
	export interface StartContentModerationRequestFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence: FormControl<number | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartContentModerationRequestFormGroup() {
		return new FormGroup<StartContentModerationRequestFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			JobTag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface StartFaceDetectionResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId?: string | null;
	}
	export interface StartFaceDetectionResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartFaceDetectionResponseFormGroup() {
		return new FormGroup<StartFaceDetectionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface StartFaceDetectionRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken?: string | null;

		/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;
		FaceAttributes?: Attribute | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag?: string | null;
	}
	export interface StartFaceDetectionRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
		FaceAttributes: FormControl<Attribute | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartFaceDetectionRequestFormGroup() {
		return new FormGroup<StartFaceDetectionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			FaceAttributes: new FormControl<Attribute | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface StartFaceSearchResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId?: string | null;
	}
	export interface StartFaceSearchResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartFaceSearchResponseFormGroup() {
		return new FormGroup<StartFaceSearchResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface StartFaceSearchRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FaceMatchThreshold?: number | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: string;

		/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag?: string | null;
	}
	export interface StartFaceSearchRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		FaceMatchThreshold: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		CollectionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartFaceSearchRequestFormGroup() {
		return new FormGroup<StartFaceSearchRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			FaceMatchThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			JobTag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface StartLabelDetectionResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId?: string | null;
	}
	export interface StartLabelDetectionResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartLabelDetectionResponseFormGroup() {
		return new FormGroup<StartLabelDetectionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface StartLabelDetectionRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence?: number | null;

		/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag?: string | null;
	}
	export interface StartLabelDetectionRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MinConfidence: FormControl<number | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartLabelDetectionRequestFormGroup() {
		return new FormGroup<StartLabelDetectionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			MinConfidence: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			JobTag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface StartPersonTrackingResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId?: string | null;
	}
	export interface StartPersonTrackingResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartPersonTrackingResponseFormGroup() {
		return new FormGroup<StartPersonTrackingResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface StartPersonTrackingRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken?: string | null;

		/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag?: string | null;
	}
	export interface StartPersonTrackingRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartPersonTrackingRequestFormGroup() {
		return new FormGroup<StartPersonTrackingRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			JobTag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface StartProjectVersionResponse {
		Status?: DeleteProjectVersionResponseStatus | null;
	}
	export interface StartProjectVersionResponseFormProperties {
		Status: FormControl<DeleteProjectVersionResponseStatus | null | undefined>,
	}
	export function CreateStartProjectVersionResponseFormGroup() {
		return new FormGroup<StartProjectVersionResponseFormProperties>({
			Status: new FormControl<DeleteProjectVersionResponseStatus | null | undefined>(undefined),
		});

	}

	export interface StartProjectVersionRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		MinInferenceUnits: number;
	}
	export interface StartProjectVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		MinInferenceUnits: FormControl<number | null | undefined>,
	}
	export function CreateStartProjectVersionRequestFormGroup() {
		return new FormGroup<StartProjectVersionRequestFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
			MinInferenceUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface StartStreamProcessorResponse {
	}
	export interface StartStreamProcessorResponseFormProperties {
	}
	export function CreateStartStreamProcessorResponseFormGroup() {
		return new FormGroup<StartStreamProcessorResponseFormProperties>({
		});

	}

	export interface StartStreamProcessorRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: string;
	}
	export interface StartStreamProcessorRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartStreamProcessorRequestFormGroup() {
		return new FormGroup<StartStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface StartTextDetectionResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId?: string | null;
	}
	export interface StartTextDetectionResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartTextDetectionResponseFormGroup() {
		return new FormGroup<StartTextDetectionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface StartTextDetectionRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken?: string | null;

		/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. */
		NotificationChannel?: NotificationChannel;

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag?: string | null;

		/** Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in. */
		Filters?: StartTextDetectionFilters;
	}
	export interface StartTextDetectionRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-:]+
		 */
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartTextDetectionRequestFormGroup() {
		return new FormGroup<StartTextDetectionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			JobTag: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in. */
	export interface StartTextDetectionFilters {

		/** A set of parameters that allow you to filter out certain results from your returned results. */
		WordFilter?: DetectionFilter;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		RegionsOfInterest?: Array<RegionOfInterest>;
	}

	/** Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in. */
	export interface StartTextDetectionFiltersFormProperties {
	}
	export function CreateStartTextDetectionFiltersFormGroup() {
		return new FormGroup<StartTextDetectionFiltersFormProperties>({
		});

	}

	export interface StopProjectVersionResponse {
		Status?: DeleteProjectVersionResponseStatus | null;
	}
	export interface StopProjectVersionResponseFormProperties {
		Status: FormControl<DeleteProjectVersionResponseStatus | null | undefined>,
	}
	export function CreateStopProjectVersionResponseFormGroup() {
		return new FormGroup<StopProjectVersionResponseFormProperties>({
			Status: new FormControl<DeleteProjectVersionResponseStatus | null | undefined>(undefined),
		});

	}

	export interface StopProjectVersionRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: string;
	}
	export interface StopProjectVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: (^arn:[a-z\d-]+:rekognition:[a-z\d-]+:\d{12}:project\/[a-zA-Z0-9_.\-]{1,255}\/version\/[a-zA-Z0-9_.\-]{1,255}\/[0-9]+$)
		 */
		ProjectVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateStopProjectVersionRequestFormGroup() {
		return new FormGroup<StopProjectVersionRequestFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}

	export interface StopStreamProcessorResponse {
	}
	export interface StopStreamProcessorResponseFormProperties {
	}
	export function CreateStopStreamProcessorResponseFormGroup() {
		return new FormGroup<StopStreamProcessorResponseFormProperties>({
		});

	}

	export interface StopStreamProcessorRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: string;
	}
	export interface StopStreamProcessorRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]+
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopStreamProcessorRequestFormGroup() {
		return new FormGroup<StopStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export enum CelebrityRecognitionSortBy { ID = 0, TIMESTAMP = 1 }

	export enum QualityFilter { NONE = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4 }

	export enum OrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export enum ContentModerationSortBy { NAME = 0, TIMESTAMP = 1 }

	export enum ProjectStatus { CREATING = 0, CREATED = 1, DELETING = 2 }

	export enum ProjectVersionStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETED = 1, TRAINING_FAILED = 2, STARTING = 3, RUNNING = 4, FAILED = 5, STOPPING = 6, STOPPED = 7, DELETING = 8 }

	export enum StreamProcessorStatus { STOPPED = 0, STARTING = 1, RUNNING = 2, FAILED = 3, STOPPING = 4 }

	export enum EmotionName { HAPPY = 0, SAD = 1, ANGRY = 2, CONFUSED = 3, DISGUSTED = 4, SURPRISED = 5, CALM = 6, UNKNOWN = 7, FEAR = 8 }

	export enum FaceAttributes { DEFAULT = 0, ALL = 1 }

	export enum FaceSearchSortBy { INDEX = 0, TIMESTAMP = 1 }

	export enum GenderType { Male = 0, Female = 1 }

	export enum VideoJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum LabelDetectionSortBy { NAME = 0, TIMESTAMP = 1 }

	export enum PersonTrackingSortBy { INDEX = 0, TIMESTAMP = 1 }

	export enum TextTypes { LINE = 0, WORD = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Compares a face in the <i>source</i> input image with each of the 100 largest faces detected in the <i>target</i> input image. </p> <note> <p> If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. </p> </note> <p>You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. </p> <p>In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, role, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match. </p> <note> <p>By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the <code>SimilarityThreshold</code> parameter.</p> </note> <p> <code>CompareFaces</code> also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use <code>QualityFilter</code> to set the quality bar by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>. </p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>If the image doesn't contain Exif metadata, <code>CompareFaces</code> returns orientation information for the source and target images. Use these values to display the images with the correct image orientation.</p> <p>If no faces are detected in the source or target images, <code>CompareFaces</code> returns an <code>InvalidParameterException</code> error. </p> <note> <p> This is a stateless API operation. That is, data returned by this operation doesn't persist.</p> </note> <p>For an example, see Comparing Faces in Images in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:CompareFaces</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CompareFaces
		 * @return {CompareFacesResponse} Success
		 */
		CompareFaces(requestBody: CompareFacesRequest): Observable<CompareFacesResponse> {
			return this.http.post<CompareFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CompareFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a collection in an AWS Region. You can add faces to the collection using the <a>IndexFaces</a> operation. </p> <p>For example, you might create collections, one for each of your application users. A user can then index faces using the <code>IndexFaces</code> operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container. </p> <p>When you create a collection, it is associated with the latest version of the face model version.</p> <note> <p>Collection names are case-sensitive.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:CreateCollection</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateCollection
		 * @return {CreateCollectionResponse} Success
		 */
		CreateCollection(requestBody: CreateCollectionRequest): Observable<CreateCollectionResponse> {
			return this.http.post<CreateCollectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon Rekognition Custom Labels project. A project is a logical grouping of resources (images, Labels, models) and operations (training, evaluation and detection). </p> <p>This operation requires permissions to perform the <code>rekognition:CreateProject</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateProject
		 * @return {CreateProjectResponse} Success
		 */
		CreateProject(requestBody: CreateProjectRequest): Observable<CreateProjectResponse> {
			return this.http.post<CreateProjectResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new version of a model and begins training. Models are managed as part of an Amazon Rekognition Custom Labels project. You can specify one training dataset and one testing dataset. The response from <code>CreateProjectVersion</code> is an Amazon Resource Name (ARN) for the version of the model. </p> <p>Training takes a while to complete. You can get the current status by calling <a>DescribeProjectVersions</a>.</p> <p>Once training has successfully completed, call <a>DescribeProjectVersions</a> to get the training results and evaluate the model. </p> <p>After evaluating the model, you start the model by calling <a>StartProjectVersion</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:CreateProjectVersion</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateProjectVersion
		 * @return {CreateProjectVersionResponse} Success
		 */
		CreateProjectVersion(requestBody: CreateProjectVersionRequest): Observable<CreateProjectVersionResponse> {
			return this.http.post<CreateProjectVersionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateProjectVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces in a streaming video.</p> <p>Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. Amazon Rekognition Video sends analysis results to Amazon Kinesis Data Streams.</p> <p>You provide as input a Kinesis video stream (<code>Input</code>) and a Kinesis data stream (<code>Output</code>) stream. You also specify the face recognition criteria in <code>Settings</code>. For example, the collection containing faces that you want to recognize. Use <code>Name</code> to assign an identifier for the stream processor. You use <code>Name</code> to manage the stream processor. For example, you can start processing the source video by calling <a>StartStreamProcessor</a> with the <code>Name</code> field. </p> <p>After you have finished analyzing a streaming video, use <a>StopStreamProcessor</a> to stop processing. You can delete the stream processor by calling <a>DeleteStreamProcessor</a>.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateStreamProcessor
		 * @return {CreateStreamProcessorResponse} Success
		 */
		CreateStreamProcessor(requestBody: CreateStreamProcessorRequest): Observable<CreateStreamProcessorResponse> {
			return this.http.post<CreateStreamProcessorResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateStreamProcessor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see <a>delete-collection-procedure</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteCollection</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DeleteCollection
		 * @return {DeleteCollectionResponse} Success
		 */
		DeleteCollection(requestBody: DeleteCollectionRequest): Observable<DeleteCollectionResponse> {
			return this.http.post<DeleteCollectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteFaces</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DeleteFaces
		 * @return {DeleteFacesResponse} Success
		 */
		DeleteFaces(requestBody: DeleteFacesRequest): Observable<DeleteFacesResponse> {
			return this.http.post<DeleteFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon Rekognition Custom Labels project. To delete a project you must first delete all versions of the model associated with the project. To delete a version of a model, see <a>DeleteProjectVersion</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProject</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.DeleteProject
		 * @return {DeleteProjectResponse} Success
		 */
		DeleteProject(requestBody: DeleteProjectRequest): Observable<DeleteProjectResponse> {
			return this.http.post<DeleteProjectResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a version of a model. </p> <p>You must first stop the model before you can delete it. To check if a model is running, use the <code>Status</code> field returned from <a>DescribeProjectVersions</a>. To stop a running model call <a>StopProjectVersion</a>. </p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProjectVersion</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.DeleteProjectVersion
		 * @return {DeleteProjectVersionResponse} Success
		 */
		DeleteProjectVersion(requestBody: DeleteProjectVersionRequest): Observable<DeleteProjectVersionResponse> {
			return this.http.post<DeleteProjectVersionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteProjectVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the stream processor identified by <code>Name</code>. You assign the value for <code>Name</code> when you create the stream processor with <a>CreateStreamProcessor</a>. You might not be able to use the same name for a stream processor for a few seconds after calling <code>DeleteStreamProcessor</code>.
		 * Post #X-Amz-Target=RekognitionService.DeleteStreamProcessor
		 * @return {DeleteStreamProcessorResponse} Success
		 */
		DeleteStreamProcessor(requestBody: DeleteStreamProcessorRequest): Observable<DeleteStreamProcessorResponse> {
			return this.http.post<DeleteStreamProcessorResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteStreamProcessor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified collection. You can use <code>DescribeCollection</code> to get information, such as the number of faces indexed into a collection and the version of the model used by the collection for face detection.</p> <p>For more information, see Describing a Collection in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.DescribeCollection
		 * @return {DescribeCollectionResponse} Success
		 */
		DescribeCollection(requestBody: DescribeCollectionRequest): Observable<DescribeCollectionResponse> {
			return this.http.post<DescribeCollectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DescribeCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists and describes the models in an Amazon Rekognition Custom Labels project. You can specify up to 10 model versions in <code>ProjectVersionArns</code>. If you don't specify a value, descriptions for all models are returned.</p> <p>This operation requires permissions to perform the <code>rekognition:DescribeProjectVersions</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DescribeProjectVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeProjectVersionsResponse} Success
		 */
		DescribeProjectVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeProjectVersionsRequest): Observable<DescribeProjectVersionsResponse> {
			return this.http.post<DescribeProjectVersionsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DescribeProjectVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists and gets information about your Amazon Rekognition Custom Labels projects.</p> <p>This operation requires permissions to perform the <code>rekognition:DescribeProjects</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DescribeProjects
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeProjectsResponse} Success
		 */
		DescribeProjects(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeProjectsRequest): Observable<DescribeProjectsResponse> {
			return this.http.post<DescribeProjectsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DescribeProjects?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about a stream processor created by <a>CreateStreamProcessor</a>. You can get information about the input and output streams, the input parameters for the face recognition being performed, and the current status of the stream processor.
		 * Post #X-Amz-Target=RekognitionService.DescribeStreamProcessor
		 * @return {DescribeStreamProcessorResponse} Success
		 */
		DescribeStreamProcessor(requestBody: DescribeStreamProcessorRequest): Observable<DescribeStreamProcessorResponse> {
			return this.http.post<DescribeStreamProcessorResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DescribeStreamProcessor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. </p> <p>You specify which version of a model version to use by using the <code>ProjectVersionArn</code> input parameter. </p> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> For each object that the model version detects on an image, the API returns a (<code>CustomLabel</code>) object in an array (<code>CustomLabels</code>). Each <code>CustomLabel</code> object provides the label name (<code>Name</code>), the level of confidence that the image contains the object (<code>Confidence</code>), and object location information, if it exists, for the label on the image (<code>Geometry</code>). </p> <p>During training model calculates a threshold value that determines if a prediction for a label is true. By default, <code>DetectCustomLabels</code> doesn't return labels whose confidence value is below the model's calculated threshold value. To filter labels that are returned, specify a value for <code>MinConfidence</code> that is higher than the model's calculated threshold. You can get the model's calculated threshold from the model's training results shown in the Amazon Rekognition Custom Labels console. To get all labels, regardless of confidence, specify a <code>MinConfidence</code> value of 0. </p> <p>You can also add the <code>MaxResults</code> parameter to limit the number of labels returned. </p> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectCustomLabels</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.DetectCustomLabels
		 * @return {DetectCustomLabelsResponse} Success
		 */
		DetectCustomLabels(requestBody: DetectCustomLabelsRequest): Observable<DetectCustomLabelsResponse> {
			return this.http.post<DetectCustomLabelsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectCustomLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects faces within an image that is provided as input.</p> <p> <code>DetectFaces</code> detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), presence of beard, sunglasses, and so on. </p> <p>The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. </p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <note> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:DetectFaces</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.DetectFaces
		 * @return {DetectFacesResponse} Success
		 */
		DetectFaces(requestBody: DetectFacesRequest): Observable<DetectFacesResponse> {
			return this.http.post<DetectFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. </p> <p>For an example, see Analyzing Images Stored in an Amazon S3 Bucket in the Amazon Rekognition Developer Guide.</p> <note> <p> <code>DetectLabels</code> does not support the detection of activities. However, activity detection is supported for label detection in videos. For more information, see StartLabelDetection in the Amazon Rekognition Developer Guide.</p> </note> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> For each object, scene, and concept the API returns one or more labels. Each label provides the object name, and the level of confidence that the image contains the object. For example, suppose the input image has a lighthouse, the sea, and a rock. The response includes all three labels, one for each object. </p> <p> <code>{Name: lighthouse, Confidence: 98.4629}</code> </p> <p> <code>{Name: rock,Confidence: 79.2097}</code> </p> <p> <code> {Name: sea,Confidence: 75.061}</code> </p> <p>In the preceding example, the operation returns one label for each of the three objects. The operation can also return multiple labels for the same object in the image. For example, if the input image shows a flower (for example, a tulip), the operation might return the following three labels. </p> <p> <code>{Name: flower,Confidence: 99.0562}</code> </p> <p> <code>{Name: plant,Confidence: 99.0562}</code> </p> <p> <code>{Name: tulip,Confidence: 99.0562}</code> </p> <p>In this example, the detection algorithm more precisely identifies the flower as a tulip.</p> <p>In response, the API returns an array of labels. In addition, the response also includes the orientation correction. Optionally, you can specify <code>MinConfidence</code> to control the confidence threshold for the labels returned. The default is 55%. You can also add the <code>MaxLabels</code> parameter to limit the number of labels returned. </p> <note> <p>If the object detected is a person, the operation doesn't provide the same facial details that the <a>DetectFaces</a> operation provides.</p> </note> <p> <code>DetectLabels</code> returns bounding boxes for instances of common object labels in an array of <a>Instance</a> objects. An <code>Instance</code> object contains a <a>BoundingBox</a> object, for the location of the label on the image. It also includes the confidence by which the bounding box was detected.</p> <p> <code>DetectLabels</code> also returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label <i>car</i>. The label <i>car</i> has two parent labels: <i>Vehicle</i> (its parent) and <i>Transportation</i> (its grandparent). The response returns the entire list of ancestors for a label. Each ancestor is a unique label in the response. In the previous example, <i>Car</i>, <i>Vehicle</i>, and <i>Transportation</i> are returned as unique labels in the response. </p> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectLabels</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.DetectLabels
		 * @return {DetectLabelsResponse} Success
		 */
		DetectLabels(requestBody: DetectLabelsRequest): Observable<DetectLabelsResponse> {
			return this.http.post<DetectLabelsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects unsafe content in a specified JPEG or PNG format image. Use <code>DetectModerationLabels</code> to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content.</p> <p>To filter images, use the labels returned by <code>DetectModerationLabels</code> to determine which types of content are appropriate.</p> <p>For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p>
		 * Post #X-Amz-Target=RekognitionService.DetectModerationLabels
		 * @return {DetectModerationLabelsResponse} Success
		 */
		DetectModerationLabels(requestBody: DetectModerationLabelsRequest): Observable<DetectModerationLabelsResponse> {
			return this.http.post<DetectModerationLabelsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectModerationLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects text in the input image and converts it into machine-readable text.</p> <p>Pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. </p> <p>The <code>DetectText</code> operation returns text in an array of <a>TextDetection</a> elements, <code>TextDetections</code>. Each <code>TextDetection</code> element provides information about a single word or line of text that was detected in the image. </p> <p>A word is one or more ISO basic latin script characters that are not separated by spaces. <code>DetectText</code> can detect up to 50 words in an image.</p> <p>A line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when there is a large gap between words, relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don't represent the end of a line. If a sentence spans multiple lines, the <code>DetectText</code> operation returns multiple lines.</p> <p>To determine whether a <code>TextDetection</code> element is a line of text or a word, use the <code>TextDetection</code> object <code>Type</code> field. </p> <p>To be detected, text must be within +/- 90 degrees orientation of the horizontal axis.</p> <p>For more information, see DetectText in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.DetectText
		 * @return {DetectTextResponse} Success
		 */
		DetectText(requestBody: DetectTextRequest): Observable<DetectTextResponse> {
			return this.http.post<DetectTextResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the name and additional information about a celebrity based on his or her Amazon Rekognition ID. The additional information is returned as an array of URLs. If there is no additional information about the celebrity, this list is empty.</p> <p>For more information, see Recognizing Celebrities in an Image in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:GetCelebrityInfo</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.GetCelebrityInfo
		 * @return {GetCelebrityInfoResponse} Success
		 */
		GetCelebrityInfo(requestBody: GetCelebrityInfoRequest): Observable<GetCelebrityInfoResponse> {
			return this.http.post<GetCelebrityInfoResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetCelebrityInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by <a>StartCelebrityRecognition</a>.</p> <p>Celebrity recognition in a video is an asynchronous operation. Analysis is started by a call to <a>StartCelebrityRecognition</a> which returns a job identifier (<code>JobId</code>). When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartCelebrityRecognition</code>. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetCelebrityDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityDetection</code>. </p> <p>For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.</p> <p> <code>GetCelebrityRecognition</code> returns detected celebrities and the time(s) they are detected in an array (<code>Celebrities</code>) of <a>CelebrityRecognition</a> objects. Each <code>CelebrityRecognition</code> contains information about the celebrity in a <a>CelebrityDetail</a> object and the time, <code>Timestamp</code>, the celebrity was detected. </p> <note> <p> <code>GetCelebrityRecognition</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. For more information, see FaceDetail in the Amazon Rekognition Developer Guide. </p> </note> <p>By default, the <code>Celebrities</code> array is sorted by time (milliseconds from the start of the video). You can also sort the array by celebrity by specifying the value <code>ID</code> in the <code>SortBy</code> input parameter.</p> <p>The <code>CelebrityDetail</code> object includes the celebrity identifer and additional information urls. If you don't store the additional information urls, you can get them later by calling <a>GetCelebrityInfo</a> with the celebrity identifer.</p> <p>No information is returned for faces not recognized as celebrities.</p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetCelebrityDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetCelebrityRecognition</code>.</p>
		 * Post #X-Amz-Target=RekognitionService.GetCelebrityRecognition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCelebrityRecognitionResponse} Success
		 */
		GetCelebrityRecognition(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetCelebrityRecognitionRequest): Observable<GetCelebrityRecognitionResponse> {
			return this.http.post<GetCelebrityRecognitionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetCelebrityRecognition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the unsafe content analysis results for a Amazon Rekognition Video analysis started by <a>StartContentModeration</a>.</p> <p>Unsafe content analysis of a video is an asynchronous operation. You start analysis by calling <a>StartContentModeration</a> which returns a job identifier (<code>JobId</code>). When analysis finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartContentModeration</code>. To get the results of the unsafe content analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetContentModeration</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p> <p>For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers Guide.</p> <p> <code>GetContentModeration</code> returns detected unsafe content labels, and the time they are detected, in an array, <code>ModerationLabels</code>, of <a>ContentModerationDetection</a> objects. </p> <p>By default, the moderated labels are returned sorted by time, in milliseconds from the start of the video. You can also sort them by moderated label by specifying <code>NAME</code> for the <code>SortBy</code> input parameter. </p> <p>Since video analysis can return a large number of results, use the <code>MaxResults</code> parameter to limit the number of labels returned in a single call to <code>GetContentModeration</code>. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetContentModeration</code> and populate the <code>NextToken</code> request parameter with the value of <code>NextToken</code> returned from the previous call to <code>GetContentModeration</code>.</p> <p>For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.GetContentModeration
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetContentModerationResponse} Success
		 */
		GetContentModeration(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetContentModerationRequest): Observable<GetContentModerationResponse> {
			return this.http.post<GetContentModerationResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetContentModeration?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets face detection results for a Amazon Rekognition Video analysis started by <a>StartFaceDetection</a>.</p> <p>Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling <a>StartFaceDetection</a> which returns a job identifier (<code>JobId</code>). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceDetection</code>. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p> <p> <code>GetFaceDetection</code> returns an array of detected faces (<code>Faces</code>) sorted by the time the faces were detected. </p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetFaceDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetFaceDetection</code>.</p>
		 * Post #X-Amz-Target=RekognitionService.GetFaceDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFaceDetectionResponse} Success
		 */
		GetFaceDetection(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetFaceDetectionRequest): Observable<GetFaceDetectionResponse> {
			return this.http.post<GetFaceDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetFaceDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the face search results for Amazon Rekognition Video face search started by <a>StartFaceSearch</a>. The search returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s) that faces are matched in the video.</p> <p>Face search in a video is an asynchronous operation. You start face search by calling to <a>StartFaceSearch</a> which returns a job identifier (<code>JobId</code>). When the search operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceSearch</code>. To get the search results, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetFaceSearch</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>.</p> <p>For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide.</p> <p>The search results are retured in an array, <code>Persons</code>, of <a>PersonMatch</a> objects. Each<code>PersonMatch</code> element contains details about the matching faces in the input collection, person information (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person was matched in the video.</p> <note> <p> <code>GetFaceSearch</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. For more information, see FaceDetail in the Amazon Rekognition Developer Guide. </p> </note> <p>By default, the <code>Persons</code> array is sorted by the time, in milliseconds from the start of the video, persons are matched. You can also sort by persons by specifying <code>INDEX</code> for the <code>SORTBY</code> input parameter.</p>
		 * Post #X-Amz-Target=RekognitionService.GetFaceSearch
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFaceSearchResponse} Success
		 */
		GetFaceSearch(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetFaceSearchRequest): Observable<GetFaceSearchResponse> {
			return this.http.post<GetFaceSearchResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetFaceSearch?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the label detection results of a Amazon Rekognition Video analysis started by <a>StartLabelDetection</a>. </p> <p>The label detection operation is started by a call to <a>StartLabelDetection</a> which returns a job identifier (<code>JobId</code>). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartlabelDetection</code>. To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p> <p> <code>GetLabelDetection</code> returns an array of detected labels (<code>Labels</code>) sorted by the time the labels were detected. You can also sort by the label name by specifying <code>NAME</code> for the <code>SortBy</code> input parameter.</p> <p>The labels returned include the label name, the percentage confidence in the accuracy of the detected label, and the time the label was detected in the video.</p> <p>The returned labels also include bounding box information for common objects, a hierarchical taxonomy of detected labels, and the version of the label model used for detection.</p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetlabelDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetLabelDetection</code>.</p>
		 * Post #X-Amz-Target=RekognitionService.GetLabelDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLabelDetectionResponse} Success
		 */
		GetLabelDetection(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetLabelDetectionRequest): Observable<GetLabelDetectionResponse> {
			return this.http.post<GetLabelDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetLabelDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the path tracking results of a Amazon Rekognition Video analysis started by <a>StartPersonTracking</a>.</p> <p>The person path tracking operation is started by a call to <code>StartPersonTracking</code> which returns a job identifier (<code>JobId</code>). When the operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartPersonTracking</code>.</p> <p>To get the results of the person path tracking operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetPersonTracking</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p> <p> <code>GetPersonTracking</code> returns an array, <code>Persons</code>, of tracked persons and the time(s) their paths were tracked in the video. </p> <note> <p> <code>GetPersonTracking</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. </p> <p>For more information, see FaceDetail in the Amazon Rekognition Developer Guide.</p> </note> <p>By default, the array is sorted by the time(s) a person's path is tracked in the video. You can sort by tracked persons by specifying <code>INDEX</code> for the <code>SortBy</code> input parameter.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of items returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetPersonTracking</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetPersonTracking</code>.</p>
		 * Post #X-Amz-Target=RekognitionService.GetPersonTracking
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetPersonTrackingResponse} Success
		 */
		GetPersonTracking(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetPersonTrackingRequest): Observable<GetPersonTrackingResponse> {
			return this.http.post<GetPersonTrackingResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetPersonTracking?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the text detection results of a Amazon Rekognition Video analysis started by <a>StartTextDetection</a>.</p> <p>Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling <a>StartTextDetection</a> which returns a job identifier (<code>JobId</code>) When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartTextDetection</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <code>GetTextDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call of <code>StartLabelDetection</code>.</p> <p> <code>GetTextDetection</code> returns an array of detected text (<code>TextDetections</code>) sorted by the time the text was detected, up to 50 words per frame of video.</p> <p>Each element of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time the text was detected, bounding box information for where the text was located, and unique identifiers for words and their lines.</p> <p>Use MaxResults parameter to limit the number of text detections returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetTextDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetTextDetection</code>.</p>
		 * Post #X-Amz-Target=RekognitionService.GetTextDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTextDetectionResponse} Success
		 */
		GetTextDetection(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetTextDetectionRequest): Observable<GetTextDetectionResponse> {
			return this.http.post<GetTextDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetTextDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects faces in the input image and adds them to the specified collection. </p> <p>Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the <a>SearchFaces</a> and <a>SearchFacesByImage</a> operations.</p> <p>For more information, see Adding Faces to a Collection in the Amazon Rekognition Developer Guide.</p> <p>To get the number of faces in a collection, call <a>DescribeCollection</a>. </p> <p>If you're using version 1.0 of the face detection model, <code>IndexFaces</code> indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. </p> <p>If you're using version 4 or later of the face model, image orientation information is not returned in the <code>OrientationCorrection</code> field. </p> <p>To determine which version of the model you're using, call <a>DescribeCollection</a> and supply the collection ID. You can also get the model version from the value of <code>FaceModelVersion</code> in the response from <code>IndexFaces</code> </p> <p>For more information, see Model Versioning in the Amazon Rekognition Developer Guide.</p> <p>If you provide the optional <code>ExternalImageID</code> for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the <a>ListFaces</a> operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image.</p> <p>You can specify the maximum number of faces to index with the <code>MaxFaces</code> input parameter. This is useful when you want to index the largest faces in an image and don't want to index smaller faces, such as those belonging to people standing in the background.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. By default, <code>IndexFaces</code> chooses the quality bar that's used to filter faces. You can also explicitly choose the quality bar. Use <code>QualityFilter</code>, to set the quality bar by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. </p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>Information about faces detected in an image, but not indexed, is returned in an array of <a>UnindexedFace</a> objects, <code>UnindexedFaces</code>. Faces aren't indexed for reasons such as:</p> <ul> <li> <p>The number of faces detected exceeds the value of the <code>MaxFaces</code> request parameter.</p> </li> <li> <p>The face is too small compared to the image dimensions.</p> </li> <li> <p>The face is too blurry.</p> </li> <li> <p>The image is too dark.</p> </li> <li> <p>The face has an extreme pose.</p> </li> <li> <p>The face doesn’t have enough detail to be suitable for face search.</p> </li> </ul> <p>In response, the <code>IndexFaces</code> operation returns an array of metadata for all detected faces, <code>FaceRecords</code>. This includes: </p> <ul> <li> <p>The bounding box, <code>BoundingBox</code>, of the detected face. </p> </li> <li> <p>A confidence value, <code>Confidence</code>, which indicates the confidence that the bounding box contains a face.</p> </li> <li> <p>A face ID, <code>FaceId</code>, assigned by the service for each face that's detected and stored.</p> </li> <li> <p>An image ID, <code>ImageId</code>, assigned by the service for the input image.</p> </li> </ul> <p>If you request all facial attributes (by using the <code>detectionAttributes</code> parameter), Amazon Rekognition returns detailed facial attributes, such as facial landmarks (for example, location of eye and mouth) and other facial attributes. If you provide the same image, specify the same collection, and use the same external ID in the <code>IndexFaces</code> operation, Amazon Rekognition doesn't save duplicate face metadata.</p> <p/> <p>The input image is passed either as base64-encoded image bytes, or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. </p> <p>This operation requires permissions to perform the <code>rekognition:IndexFaces</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.IndexFaces
		 * @return {IndexFacesResponse} Success
		 */
		IndexFaces(requestBody: IndexFacesRequest): Observable<IndexFacesResponse> {
			return this.http.post<IndexFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.IndexFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns list of collection IDs in your account. If the result is truncated, the response also provides a <code>NextToken</code> that you can use in the subsequent request to fetch the next set of collection IDs.</p> <p>For an example, see Listing Collections in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:ListCollections</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.ListCollections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCollectionsResponse} Success
		 */
		ListCollections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCollectionsRequest): Observable<ListCollectionsResponse> {
			return this.http.post<ListCollectionsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListCollections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see Listing Faces in a Collection in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:ListFaces</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.ListFaces
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFacesResponse} Success
		 */
		ListFaces(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFacesRequest): Observable<ListFacesResponse> {
			return this.http.post<ListFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListFaces?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of stream processors that you have created with <a>CreateStreamProcessor</a>.
		 * Post #X-Amz-Target=RekognitionService.ListStreamProcessors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStreamProcessorsResponse} Success
		 */
		ListStreamProcessors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListStreamProcessorsRequest): Observable<ListStreamProcessorsResponse> {
			return this.http.post<ListStreamProcessorsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListStreamProcessors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns an array of celebrities recognized in the input image. For more information, see Recognizing Celebrities in the Amazon Rekognition Developer Guide. </p> <p> <code>RecognizeCelebrities</code> returns the 100 largest faces in the image. It lists recognized celebrities in the <code>CelebrityFaces</code> array and unrecognized faces in the <code>UnrecognizedFaces</code> array. <code>RecognizeCelebrities</code> doesn't return celebrities whose faces aren't among the largest 100 faces in the image.</p> <p>For each celebrity recognized, <code>RecognizeCelebrities</code> returns a <code>Celebrity</code> object. The <code>Celebrity</code> object contains the celebrity name, ID, URL links to additional information, match confidence, and a <code>ComparedFace</code> object that you can use to locate the celebrity's face on the image.</p> <p>Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the <code>Celebrity</code> ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by <code>RecognizeCelebrities</code>, you will need the ID to identify the celebrity in a call to the <a>GetCelebrityInfo</a> operation.</p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p>For an example, see Recognizing Celebrities in an Image in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:RecognizeCelebrities</code> operation.</p>
		 * Post #X-Amz-Target=RekognitionService.RecognizeCelebrities
		 * @return {RecognizeCelebritiesResponse} Success
		 */
		RecognizeCelebrities(requestBody: RecognizeCelebritiesRequest): Observable<RecognizeCelebritiesResponse> {
			return this.http.post<RecognizeCelebritiesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.RecognizeCelebrities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the <a>IndexFaces</a> operation. The operation compares the features of the input face with faces in the specified collection. </p> <note> <p>You can also search faces without indexing faces by using the <code>SearchFacesByImage</code> operation.</p> </note> <p> The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a <code>confidence</code> value for each face match, indicating the confidence that the specific face matches the input face. </p> <p>For an example, see Searching for a Face Using Its Face ID in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:SearchFaces</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.SearchFaces
		 * @return {SearchFacesResponse} Success
		 */
		SearchFaces(requestBody: SearchFacesRequest): Observable<SearchFacesResponse> {
			return this.http.post<SearchFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.SearchFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection. </p> <note> <p>To search for all faces in an input image, you might first call the <a>IndexFaces</a> operation, and then use the face IDs returned in subsequent calls to the <a>SearchFaces</a> operation. </p> <p> You can also call the <code>DetectFaces</code> operation and use the bounding boxes in the response to make face crops, which then you can pass in to the <code>SearchFacesByImage</code> operation. </p> </note> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a <code>similarity</code> indicating how similar the face is to the input face. In the response, the operation also returns the bounding box (and a confidence level that the bounding box contains a face) of the face that Amazon Rekognition used for the input image. </p> <p>For an example, Searching for a Face Using an Image in the Amazon Rekognition Developer Guide.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use <code>QualityFilter</code> to set the quality bar for filtering by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>.</p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>This operation requires permissions to perform the <code>rekognition:SearchFacesByImage</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.SearchFacesByImage
		 * @return {SearchFacesByImageResponse} Success
		 */
		SearchFacesByImage(requestBody: SearchFacesByImageRequest): Observable<SearchFacesByImageResponse> {
			return this.http.post<SearchFacesByImageResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.SearchFacesByImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts asynchronous recognition of celebrities in a stored video.</p> <p>Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartCelebrityRecognition</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetCelebrityRecognition</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityRecognition</code>. </p> <p>For more information, see Recognizing Celebrities in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.StartCelebrityRecognition
		 * @return {StartCelebrityRecognitionResponse} Success
		 */
		StartCelebrityRecognition(requestBody: StartCelebrityRecognitionRequest): Observable<StartCelebrityRecognitionResponse> {
			return this.http.post<StartCelebrityRecognitionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartCelebrityRecognition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Starts asynchronous detection of unsafe content in a stored video.</p> <p>Amazon Rekognition Video can moderate content in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartContentModeration</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis. When unsafe content analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the unsafe content analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetContentModeration</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p> <p>For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.StartContentModeration
		 * @return {StartContentModerationResponse} Success
		 */
		StartContentModeration(requestBody: StartContentModerationRequest): Observable<StartContentModerationResponse> {
			return this.http.post<StartContentModerationResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartContentModeration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts asynchronous detection of faces in a stored video.</p> <p>Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartFaceDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When face detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p> <p>For more information, see Detecting Faces in a Stored Video in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.StartFaceDetection
		 * @return {StartFaceDetectionResponse} Success
		 */
		StartFaceDetection(requestBody: StartFaceDetectionRequest): Observable<StartFaceDetectionResponse> {
			return this.http.post<StartFaceDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartFaceDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video.</p> <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartFaceSearch</code> returns a job identifier (<code>JobId</code>) which you use to get the search results once the search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the search results, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceSearch</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>. For more information, see <a>procedure-person-search-videos</a>.</p>
		 * Post #X-Amz-Target=RekognitionService.StartFaceSearch
		 * @return {StartFaceSearchResponse} Success
		 */
		StartFaceSearch(requestBody: StartFaceSearchRequest): Observable<StartFaceSearchResponse> {
			return this.http.post<StartFaceSearchResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartFaceSearch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts asynchronous detection of labels in a stored video.</p> <p>Amazon Rekognition Video can detect labels in a video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like a person getting out of a car or a person skiing.</p> <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartLabelDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p> <p/>
		 * Post #X-Amz-Target=RekognitionService.StartLabelDetection
		 * @return {StartLabelDetectionResponse} Success
		 */
		StartLabelDetection(requestBody: StartLabelDetectionRequest): Observable<StartLabelDetectionResponse> {
			return this.http.post<StartLabelDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartLabelDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the asynchronous tracking of a person's path in a stored video.</p> <p>Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartPersonTracking</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. </p> <p>To get the results of the person detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetPersonTracking</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p>
		 * Post #X-Amz-Target=RekognitionService.StartPersonTracking
		 * @return {StartPersonTrackingResponse} Success
		 */
		StartPersonTracking(requestBody: StartPersonTrackingRequest): Observable<StartPersonTrackingResponse> {
			return this.http.post<StartPersonTrackingResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartPersonTracking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use <a>DescribeProjectVersions</a>.</p> <p>Once the model is running, you can detect custom labels in new images by calling <a>DetectCustomLabels</a>.</p> <note> <p>You are charged for the amount of time that the model is running. To stop a running model, call <a>StopProjectVersion</a>.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:StartProjectVersion</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.StartProjectVersion
		 * @return {StartProjectVersionResponse} Success
		 */
		StartProjectVersion(requestBody: StartProjectVersionRequest): Observable<StartProjectVersionResponse> {
			return this.http.post<StartProjectVersionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartProjectVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts processing a stream processor. You create a stream processor by calling <a>CreateStreamProcessor</a>. To tell <code>StartStreamProcessor</code> which stream processor to start, use the value of the <code>Name</code> field specified in the call to <code>CreateStreamProcessor</code>.
		 * Post #X-Amz-Target=RekognitionService.StartStreamProcessor
		 * @return {StartStreamProcessorResponse} Success
		 */
		StartStreamProcessor(requestBody: StartStreamProcessorRequest): Observable<StartStreamProcessorResponse> {
			return this.http.post<StartStreamProcessorResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartStreamProcessor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts asynchronous detection of text in a stored video.</p> <p>Amazon Rekognition Video can detect text in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When text detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <a>GetTextDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartTextDetection</code>. </p>
		 * Post #X-Amz-Target=RekognitionService.StartTextDetection
		 * @return {StartTextDetectionResponse} Success
		 */
		StartTextDetection(requestBody: StartTextDetectionRequest): Observable<StartTextDetectionResponse> {
			return this.http.post<StartTextDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartTextDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a running model. The operation might take a while to complete. To check the current status, call <a>DescribeProjectVersions</a>.
		 * Post #X-Amz-Target=RekognitionService.StopProjectVersion
		 * @return {StopProjectVersionResponse} Success
		 */
		StopProjectVersion(requestBody: StopProjectVersionRequest): Observable<StopProjectVersionResponse> {
			return this.http.post<StopProjectVersionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StopProjectVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a running stream processor that was created by <a>CreateStreamProcessor</a>.
		 * Post #X-Amz-Target=RekognitionService.StopStreamProcessor
		 * @return {StopStreamProcessorResponse} Success
		 */
		StopStreamProcessor(requestBody: StopStreamProcessorRequest): Observable<StopStreamProcessorResponse> {
			return this.http.post<StopStreamProcessorResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StopStreamProcessor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CompareFacesX_Amz_Target { RekognitionService_CompareFaces = 0 }

	export enum CreateCollectionX_Amz_Target { RekognitionService_CreateCollection = 0 }

	export enum CreateProjectX_Amz_Target { RekognitionService_CreateProject = 0 }

	export enum CreateProjectVersionX_Amz_Target { RekognitionService_CreateProjectVersion = 0 }

	export enum CreateStreamProcessorX_Amz_Target { RekognitionService_CreateStreamProcessor = 0 }

	export enum DeleteCollectionX_Amz_Target { RekognitionService_DeleteCollection = 0 }

	export enum DeleteFacesX_Amz_Target { RekognitionService_DeleteFaces = 0 }

	export enum DeleteProjectX_Amz_Target { RekognitionService_DeleteProject = 0 }

	export enum DeleteProjectVersionX_Amz_Target { RekognitionService_DeleteProjectVersion = 0 }

	export enum DeleteStreamProcessorX_Amz_Target { RekognitionService_DeleteStreamProcessor = 0 }

	export enum DescribeCollectionX_Amz_Target { RekognitionService_DescribeCollection = 0 }

	export enum DescribeProjectVersionsX_Amz_Target { RekognitionService_DescribeProjectVersions = 0 }

	export enum DescribeProjectsX_Amz_Target { RekognitionService_DescribeProjects = 0 }

	export enum DescribeStreamProcessorX_Amz_Target { RekognitionService_DescribeStreamProcessor = 0 }

	export enum DetectCustomLabelsX_Amz_Target { RekognitionService_DetectCustomLabels = 0 }

	export enum DetectFacesX_Amz_Target { RekognitionService_DetectFaces = 0 }

	export enum DetectLabelsX_Amz_Target { RekognitionService_DetectLabels = 0 }

	export enum DetectModerationLabelsX_Amz_Target { RekognitionService_DetectModerationLabels = 0 }

	export enum DetectTextX_Amz_Target { RekognitionService_DetectText = 0 }

	export enum GetCelebrityInfoX_Amz_Target { RekognitionService_GetCelebrityInfo = 0 }

	export enum GetCelebrityRecognitionX_Amz_Target { RekognitionService_GetCelebrityRecognition = 0 }

	export enum GetContentModerationX_Amz_Target { RekognitionService_GetContentModeration = 0 }

	export enum GetFaceDetectionX_Amz_Target { RekognitionService_GetFaceDetection = 0 }

	export enum GetFaceSearchX_Amz_Target { RekognitionService_GetFaceSearch = 0 }

	export enum GetLabelDetectionX_Amz_Target { RekognitionService_GetLabelDetection = 0 }

	export enum GetPersonTrackingX_Amz_Target { RekognitionService_GetPersonTracking = 0 }

	export enum GetTextDetectionX_Amz_Target { RekognitionService_GetTextDetection = 0 }

	export enum IndexFacesX_Amz_Target { RekognitionService_IndexFaces = 0 }

	export enum ListCollectionsX_Amz_Target { RekognitionService_ListCollections = 0 }

	export enum ListFacesX_Amz_Target { RekognitionService_ListFaces = 0 }

	export enum ListStreamProcessorsX_Amz_Target { RekognitionService_ListStreamProcessors = 0 }

	export enum RecognizeCelebritiesX_Amz_Target { RekognitionService_RecognizeCelebrities = 0 }

	export enum SearchFacesX_Amz_Target { RekognitionService_SearchFaces = 0 }

	export enum SearchFacesByImageX_Amz_Target { RekognitionService_SearchFacesByImage = 0 }

	export enum StartCelebrityRecognitionX_Amz_Target { RekognitionService_StartCelebrityRecognition = 0 }

	export enum StartContentModerationX_Amz_Target { RekognitionService_StartContentModeration = 0 }

	export enum StartFaceDetectionX_Amz_Target { RekognitionService_StartFaceDetection = 0 }

	export enum StartFaceSearchX_Amz_Target { RekognitionService_StartFaceSearch = 0 }

	export enum StartLabelDetectionX_Amz_Target { RekognitionService_StartLabelDetection = 0 }

	export enum StartPersonTrackingX_Amz_Target { RekognitionService_StartPersonTracking = 0 }

	export enum StartProjectVersionX_Amz_Target { RekognitionService_StartProjectVersion = 0 }

	export enum StartStreamProcessorX_Amz_Target { RekognitionService_StartStreamProcessor = 0 }

	export enum StartTextDetectionX_Amz_Target { RekognitionService_StartTextDetection = 0 }

	export enum StopProjectVersionX_Amz_Target { RekognitionService_StopProjectVersion = 0 }

	export enum StopStreamProcessorX_Amz_Target { RekognitionService_StopStreamProcessor = 0 }

}

