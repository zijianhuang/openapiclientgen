import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateFacesResponse {
		AssociatedFaces?: Array<AssociatedFace>;
		UnsuccessfulFaceAssociations?: Array<UnsuccessfulFaceAssociation>;
		UserStatus?: UserStatus;
	}
	export interface AssociateFacesResponseFormProperties {
		UserStatus: FormControl<UserStatus | null | undefined>,
	}
	export function CreateAssociateFacesResponseFormGroup() {
		return new FormGroup<AssociateFacesResponseFormProperties>({
			UserStatus: new FormControl<UserStatus | null | undefined>(undefined),
		});

	}


	/** Provides face metadata for the faces that are associated to a specific UserID. */
	export interface AssociatedFace {
		FaceId?: string;
	}

	/** Provides face metadata for the faces that are associated to a specific UserID. */
	export interface AssociatedFaceFormProperties {
		FaceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociatedFaceFormGroup() {
		return new FormGroup<AssociatedFaceFormProperties>({
			FaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully associated. */
	export interface UnsuccessfulFaceAssociation {
		FaceId?: string;
		UserId?: string;
		Confidence?: number;
		Reasons?: Array<UnsuccessfulFaceAssociationReason>;
	}

	/** Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully associated. */
	export interface UnsuccessfulFaceAssociationFormProperties {
		FaceId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateUnsuccessfulFaceAssociationFormGroup() {
		return new FormGroup<UnsuccessfulFaceAssociationFormProperties>({
			FaceId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UnsuccessfulFaceAssociationReason { FACE_NOT_FOUND = 0, ASSOCIATED_TO_A_DIFFERENT_USER = 1, LOW_MATCH_CONFIDENCE = 2 }

	export enum UserStatus { ACTIVE = 0, UPDATING = 1, CREATING = 2, CREATED = 3 }

	export interface AssociateFacesRequest {

		/** Required */
		CollectionId: string;

		/** Required */
		UserId: string;

		/** Required */
		FaceIds: Array<string>;
		UserMatchThreshold?: number;
		ClientRequestToken?: string;
	}
	export interface AssociateFacesRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
		UserMatchThreshold: FormControl<number | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFacesRequestFormGroup() {
		return new FormGroup<AssociateFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserMatchThreshold: new FormControl<number | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
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

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CompareFacesResponse {
		SourceImageFace?: ComparedSourceImageFace;
		FaceMatches?: Array<CompareFacesMatch>;
		UnmatchedFaces?: Array<ComparedFace>;
		SourceImageOrientationCorrection?: OrientationCorrection;
		TargetImageOrientationCorrection?: OrientationCorrection;
	}
	export interface CompareFacesResponseFormProperties {
		SourceImageOrientationCorrection: FormControl<OrientationCorrection | null | undefined>,
		TargetImageOrientationCorrection: FormControl<OrientationCorrection | null | undefined>,
	}
	export function CreateCompareFacesResponseFormGroup() {
		return new FormGroup<CompareFacesResponseFormProperties>({
			SourceImageOrientationCorrection: new FormControl<OrientationCorrection | null | undefined>(undefined),
			TargetImageOrientationCorrection: new FormControl<OrientationCorrection | null | undefined>(undefined),
		});

	}


	/** Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison.  */
	export interface ComparedSourceImageFace {
		BoundingBox?: BoundingBox;
		Confidence?: number;
	}

	/** Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison.  */
	export interface ComparedSourceImageFaceFormProperties {
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateComparedSourceImageFaceFormGroup() {
		return new FormGroup<ComparedSourceImageFaceFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Identifies the bounding box around the label, face, text, object of interest, or personal protective equipment. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
	export interface BoundingBox {
		Width?: number;
		Height?: number;
		Left?: number;
		Top?: number;
	}

	/** <p>Identifies the bounding box around the label, face, text, object of interest, or personal protective equipment. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
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
		Similarity?: number;
		Face?: ComparedFace;
	}

	/** Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box. */
	export interface CompareFacesMatchFormProperties {
		Similarity: FormControl<number | null | undefined>,
	}
	export function CreateCompareFacesMatchFormGroup() {
		return new FormGroup<CompareFacesMatchFormProperties>({
			Similarity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
	export interface ComparedFace {
		BoundingBox?: BoundingBox;
		Confidence?: number;
		Landmarks?: Array<Landmark>;
		Pose?: Pose;
		Quality?: ImageQuality;
		Emotions?: Array<Emotion>;
		Smile?: Smile;
	}

	/** Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>. */
	export interface ComparedFaceFormProperties {
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateComparedFaceFormGroup() {
		return new FormGroup<ComparedFaceFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates the location of the landmark on the face. */
	export interface Landmark {
		Type?: LandmarkType;
		X?: number;
		Y?: number;
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
		Roll?: number;
		Yaw?: number;
		Pitch?: number;
	}

	/** Indicates the pose of the face as determined by its pitch, roll, and yaw. */
	export interface PoseFormProperties {
		Roll: FormControl<number | null | undefined>,
		Yaw: FormControl<number | null | undefined>,
		Pitch: FormControl<number | null | undefined>,
	}
	export function CreatePoseFormGroup() {
		return new FormGroup<PoseFormProperties>({
			Roll: new FormControl<number | null | undefined>(undefined),
			Yaw: new FormControl<number | null | undefined>(undefined),
			Pitch: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Identifies face image brightness and sharpness.  */
	export interface ImageQuality {
		Brightness?: number;
		Sharpness?: number;
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


	/** The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally. */
	export interface Emotion {
		Type?: EmotionName;
		Confidence?: number;
	}

	/** The emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally. */
	export interface EmotionFormProperties {
		Type: FormControl<EmotionName | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateEmotionFormGroup() {
		return new FormGroup<EmotionFormProperties>({
			Type: new FormControl<EmotionName | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EmotionName { HAPPY = 0, SAD = 1, ANGRY = 2, CONFUSED = 3, DISGUSTED = 4, SURPRISED = 5, CALM = 6, UNKNOWN = 7, FEAR = 8 }


	/** Indicates whether or not the face is smiling, and the confidence level in the determination. */
	export interface Smile {
		Value?: boolean | null;
		Confidence?: number;
	}

	/** Indicates whether or not the face is smiling, and the confidence level in the determination. */
	export interface SmileFormProperties {
		Value: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateSmileFormGroup() {
		return new FormGroup<SmileFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OrientationCorrection { ROTATE_0 = 0, ROTATE_90 = 1, ROTATE_180 = 2, ROTATE_270 = 3 }

	export interface CompareFacesRequest {

		/** Required */
		SourceImage: Image;

		/** Required */
		TargetImage: Image;
		SimilarityThreshold?: number;
		QualityFilter?: QualityFilter;
	}
	export interface CompareFacesRequestFormProperties {
		SimilarityThreshold: FormControl<number | null | undefined>,
		QualityFilter: FormControl<QualityFilter | null | undefined>,
	}
	export function CreateCompareFacesRequestFormGroup() {
		return new FormGroup<CompareFacesRequestFormProperties>({
			SimilarityThreshold: new FormControl<number | null | undefined>(undefined),
			QualityFilter: new FormControl<QualityFilter | null | undefined>(undefined),
		});

	}


	/** <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p> */
	export interface Image {
		Bytes?: string;
		S3Object?: S3Object;
	}

	/** <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p> */
	export interface ImageFormProperties {
		Bytes: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			Bytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p> */
	export interface S3Object {
		Bucket?: string;
		Name?: string;
		Version?: string;
	}

	/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p> */
	export interface S3ObjectFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QualityFilter { NONE = 0, AUTO = 1, LOW = 2, MEDIUM = 3, HIGH = 4 }

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

	export interface InvalidImageFormatException {
	}
	export interface InvalidImageFormatExceptionFormProperties {
	}
	export function CreateInvalidImageFormatExceptionFormGroup() {
		return new FormGroup<InvalidImageFormatExceptionFormProperties>({
		});

	}

	export interface CopyProjectVersionResponse {
		ProjectVersionArn?: string;
	}
	export interface CopyProjectVersionResponseFormProperties {
		ProjectVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCopyProjectVersionResponseFormGroup() {
		return new FormGroup<CopyProjectVersionResponseFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyProjectVersionRequest {

		/** Required */
		SourceProjectArn: string;

		/** Required */
		SourceProjectVersionArn: string;

		/** Required */
		DestinationProjectArn: string;

		/** Required */
		VersionName: string;

		/** Required */
		OutputConfig: OutputConfig;
		Tags?: TagMap;
		KmsKeyId?: string;
	}
	export interface CopyProjectVersionRequestFormProperties {

		/** Required */
		SourceProjectArn: FormControl<string | null | undefined>,

		/** Required */
		SourceProjectVersionArn: FormControl<string | null | undefined>,

		/** Required */
		DestinationProjectArn: FormControl<string | null | undefined>,

		/** Required */
		VersionName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCopyProjectVersionRequestFormGroup() {
		return new FormGroup<CopyProjectVersionRequestFormProperties>({
			SourceProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The S3 bucket and folder location where training output is placed. */
	export interface OutputConfig {
		S3Bucket?: string;
		S3KeyPrefix?: string;
	}

	/** The S3 bucket and folder location where training output is placed. */
	export interface OutputConfigFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
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

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface CreateCollectionResponse {
		StatusCode?: number | null;
		CollectionArn?: string;
		FaceModelVersion?: string;
	}
	export interface CreateCollectionResponseFormProperties {
		StatusCode: FormControl<number | null | undefined>,
		CollectionArn: FormControl<string | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionResponseFormGroup() {
		return new FormGroup<CreateCollectionResponseFormProperties>({
			StatusCode: new FormControl<number | null | undefined>(undefined),
			CollectionArn: new FormControl<string | null | undefined>(undefined),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollectionRequest {

		/** Required */
		CollectionId: string;
		Tags?: TagMap;
	}
	export interface CreateCollectionRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectionRequestFormGroup() {
		return new FormGroup<CreateCollectionRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateDatasetResponse {
		DatasetArn?: string;
	}
	export interface CreateDatasetResponseFormProperties {
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetRequest {
		DatasetSource?: DatasetSource;

		/** Required */
		DatasetType: DatasetType;

		/** Required */
		ProjectArn: string;
	}
	export interface CreateDatasetRequestFormProperties {

		/** Required */
		DatasetType: FormControl<DatasetType | null | undefined>,

		/** Required */
		ProjectArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			DatasetType: new FormControl<DatasetType | null | undefined>(undefined, [Validators.required]),
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p> The source that Amazon Rekognition Custom Labels uses to create a dataset. To use an Amazon Sagemaker format manifest file, specify the S3 bucket location in the <code>GroundTruthManifest</code> field. The S3 bucket must be in your AWS account. To create a copy of an existing dataset, specify the Amazon Resource Name (ARN) of an existing dataset in <code>DatasetArn</code>.</p> <p>You need to specify a value for <code>DatasetArn</code> or <code>GroundTruthManifest</code>, but not both. if you supply both values, or if you don't specify any values, an InvalidParameterException exception occurs. </p> <p>For more information, see <a>CreateDataset</a>.</p> */
	export interface DatasetSource {

		/** The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. */
		GroundTruthManifest?: GroundTruthManifest;
		DatasetArn?: string;
	}

	/** <p> The source that Amazon Rekognition Custom Labels uses to create a dataset. To use an Amazon Sagemaker format manifest file, specify the S3 bucket location in the <code>GroundTruthManifest</code> field. The S3 bucket must be in your AWS account. To create a copy of an existing dataset, specify the Amazon Resource Name (ARN) of an existing dataset in <code>DatasetArn</code>.</p> <p>You need to specify a value for <code>DatasetArn</code> or <code>GroundTruthManifest</code>, but not both. if you supply both values, or if you don't specify any values, an InvalidParameterException exception occurs. </p> <p>For more information, see <a>CreateDataset</a>.</p> */
	export interface DatasetSourceFormProperties {
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDatasetSourceFormGroup() {
		return new FormGroup<DatasetSourceFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.  */
	export interface GroundTruthManifest {

		/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;
	}

	/** The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.  */
	export interface GroundTruthManifestFormProperties {
	}
	export function CreateGroundTruthManifestFormGroup() {
		return new FormGroup<GroundTruthManifestFormProperties>({
		});

	}

	export enum DatasetType { TRAIN = 0, TEST = 1 }

	export interface CreateFaceLivenessSessionResponse {

		/** Required */
		SessionId: string;
	}
	export interface CreateFaceLivenessSessionResponseFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFaceLivenessSessionResponseFormGroup() {
		return new FormGroup<CreateFaceLivenessSessionResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFaceLivenessSessionRequest {
		KmsKeyId?: string;
		Settings?: CreateFaceLivenessSessionRequestSettings;
		ClientRequestToken?: string;
	}
	export interface CreateFaceLivenessSessionRequestFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFaceLivenessSessionRequestFormGroup() {
		return new FormGroup<CreateFaceLivenessSessionRequestFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A session settings object. It contains settings for the operation to be performed. It accepts arguments for OutputConfig and AuditImagesLimit. */
	export interface CreateFaceLivenessSessionRequestSettings {
		OutputConfig?: LivenessOutputConfig;
		AuditImagesLimit?: number | null;
	}

	/** A session settings object. It contains settings for the operation to be performed. It accepts arguments for OutputConfig and AuditImagesLimit. */
	export interface CreateFaceLivenessSessionRequestSettingsFormProperties {
		AuditImagesLimit: FormControl<number | null | undefined>,
	}
	export function CreateCreateFaceLivenessSessionRequestSettingsFormGroup() {
		return new FormGroup<CreateFaceLivenessSessionRequestSettingsFormProperties>({
			AuditImagesLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains settings that specify the location of an Amazon S3 bucket used to store the output of a Face Liveness session. Note that the S3 bucket must be located in the caller's AWS account and in the same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are auto-generated by the Face Liveness system.  */
	export interface LivenessOutputConfig {

		/** Required */
		S3Bucket: string;
		S3KeyPrefix?: string;
	}

	/** Contains settings that specify the location of an Amazon S3 bucket used to store the output of a Face Liveness session. Note that the S3 bucket must be located in the caller's AWS account and in the same region as the Face Liveness end-point. Additionally, the Amazon S3 object keys are auto-generated by the Face Liveness system.  */
	export interface LivenessOutputConfigFormProperties {

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateLivenessOutputConfigFormGroup() {
		return new FormGroup<LivenessOutputConfigFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectResponse {
		ProjectArn?: string;
	}
	export interface CreateProjectResponseFormProperties {
		ProjectArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectRequest {

		/** Required */
		ProjectName: string;
	}
	export interface CreateProjectRequestFormProperties {

		/** Required */
		ProjectName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			ProjectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProjectVersionResponse {
		ProjectVersionArn?: string;
	}
	export interface CreateProjectVersionResponseFormProperties {
		ProjectVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectVersionResponseFormGroup() {
		return new FormGroup<CreateProjectVersionResponseFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectVersionRequest {

		/** Required */
		ProjectArn: string;

		/** Required */
		VersionName: string;

		/** Required */
		OutputConfig: OutputConfig;
		TrainingData?: TrainingData;
		TestingData?: TestingData;
		Tags?: TagMap;
		KmsKeyId?: string;
	}
	export interface CreateProjectVersionRequestFormProperties {

		/** Required */
		ProjectArn: FormControl<string | null | undefined>,

		/** Required */
		VersionName: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectVersionRequestFormGroup() {
		return new FormGroup<CreateProjectVersionRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
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


	/** Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training.  */
	export interface Asset {

		/** The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. */
		GroundTruthManifest?: GroundTruthManifest;
	}

	/** Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training.  */
	export interface AssetFormProperties {
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
		});

	}


	/** The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels uses the training dataset to create a test dataset with a temporary split of the training dataset.  */
	export interface TestingData {
		Assets?: Array<Asset>;
		AutoCreate?: boolean | null;
	}

	/** The dataset used for testing. Optionally, if <code>AutoCreate</code> is set, Amazon Rekognition Custom Labels uses the training dataset to create a test dataset with a temporary split of the training dataset.  */
	export interface TestingDataFormProperties {
		AutoCreate: FormControl<boolean | null | undefined>,
	}
	export function CreateTestingDataFormGroup() {
		return new FormGroup<TestingDataFormProperties>({
			AutoCreate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateStreamProcessorResponse {
		StreamProcessorArn?: string;
	}
	export interface CreateStreamProcessorResponseFormProperties {
		StreamProcessorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamProcessorResponseFormGroup() {
		return new FormGroup<CreateStreamProcessorResponseFormProperties>({
			StreamProcessorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStreamProcessorRequest {

		/** Required */
		Input: StreamProcessorInput;

		/** Required */
		Output: StreamProcessorOutput;

		/** Required */
		Name: string;

		/** Required */
		Settings: StreamProcessorSettings;

		/** Required */
		RoleArn: string;
		Tags?: TagMap;

		/** <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p> <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.</p> <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p> */
		NotificationChannel?: StreamProcessorNotificationChannel;
		KmsKeyId?: string;
		RegionsOfInterest?: Array<RegionOfInterest>;
		DataSharingPreference?: StreamProcessorDataSharingPreference;
	}
	export interface CreateStreamProcessorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamProcessorRequestFormGroup() {
		return new FormGroup<CreateStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the source streaming video.  */
	export interface StreamProcessorInput {
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
		Arn?: string;
	}

	/** Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface KinesisVideoStreamFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisVideoStreamFormGroup() {
		return new FormGroup<KinesisVideoStreamFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface StreamProcessorOutput {
		KinesisDataStream?: KinesisDataStream;
		S3Destination?: S3Destination;
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
		Arn?: string;
	}

	/** The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide. */
	export interface KinesisDataStreamFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisDataStreamFormGroup() {
		return new FormGroup<KinesisDataStreamFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. These results include the name of the stream processor resource, the session ID of the stream processing session, and labeled timestamps and bounding boxes for detected labels.  */
	export interface S3Destination {
		Bucket?: string;
		KeyPrefix?: string;
	}

	/**  The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. These results include the name of the stream processor resource, the session ID of the stream processing session, and labeled timestamps and bounding boxes for detected labels.  */
	export interface S3DestinationFormProperties {
		Bucket: FormControl<string | null | undefined>,
		KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationFormGroup() {
		return new FormGroup<S3DestinationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input parameters used in a streaming video analyzed by a Amazon Rekognition stream processor. You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels.  */
	export interface StreamProcessorSettings {
		FaceSearch?: FaceSearchSettings;

		/** Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>. Including this setting in the <code>CreateStreamProcessor</code> request enables you to use the stream processor for label detection. You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary. */
		ConnectedHome?: ConnectedHomeSettings;
	}

	/** Input parameters used in a streaming video analyzed by a Amazon Rekognition stream processor. You can use <code>FaceSearch</code> to recognize faces in a streaming video, or you can use <code>ConnectedHome</code> to detect labels.  */
	export interface StreamProcessorSettingsFormProperties {
	}
	export function CreateStreamProcessorSettingsFormGroup() {
		return new FormGroup<StreamProcessorSettingsFormProperties>({
		});

	}


	/** Input face recognition parameters for an Amazon Rekognition stream processor. Includes the collection to use for face recognition and the face attributes to detect. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>. */
	export interface FaceSearchSettings {
		CollectionId?: string;
		FaceMatchThreshold?: number;
	}

	/** Input face recognition parameters for an Amazon Rekognition stream processor. Includes the collection to use for face recognition and the face attributes to detect. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>. */
	export interface FaceSearchSettingsFormProperties {
		CollectionId: FormControl<string | null | undefined>,
		FaceMatchThreshold: FormControl<number | null | undefined>,
	}
	export function CreateFaceSearchSettingsFormGroup() {
		return new FormGroup<FaceSearchSettingsFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined),
			FaceMatchThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>. Including this setting in the <code>CreateStreamProcessor</code> request enables you to use the stream processor for label detection. You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary.  */
	export interface ConnectedHomeSettings {

		/** Required */
		Labels: Array<string>;
		MinConfidence?: number;
	}

	/**  Label detection settings to use on a streaming video. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>. Including this setting in the <code>CreateStreamProcessor</code> request enables you to use the stream processor for label detection. You can then select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected and one SNS notification is published the first time a pet is detected, as well as an end-of-session summary.  */
	export interface ConnectedHomeSettingsFormProperties {
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateConnectedHomeSettingsFormGroup() {
		return new FormGroup<ConnectedHomeSettingsFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p> <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.</p> <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p> */
	export interface StreamProcessorNotificationChannel {

		/** Required */
		SNSTopicArn: string;
	}

	/** <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p> <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.</p> <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p> */
	export interface StreamProcessorNotificationChannelFormProperties {

		/** Required */
		SNSTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateStreamProcessorNotificationChannelFormGroup() {
		return new FormGroup<StreamProcessorNotificationChannelFormProperties>({
			SNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Specifies a location within the frame that Rekognition checks for objects of interest such as text, labels, or faces. It uses a <code>BoundingBox</code> or <code>Polygon</code> to set a region of the screen.</p> <p>A word, face, or label is included in the region if it is more than half in that region. If there is more than one region, the word, face, or label is compared with all regions of the screen. Any object of interest that is more than half in a region is kept in the results.</p> */
	export interface RegionOfInterest {
		BoundingBox?: BoundingBox;
		Polygon?: Array<Point>;
	}

	/** <p>Specifies a location within the frame that Rekognition checks for objects of interest such as text, labels, or faces. It uses a <code>BoundingBox</code> or <code>Polygon</code> to set a region of the screen.</p> <p>A word, face, or label is included in the region if it is more than half in that region. If there is more than one region, the word, face, or label is compared with all regions of the screen. Any object of interest that is more than half in a region is kept in the results.</p> */
	export interface RegionOfInterestFormProperties {
	}
	export function CreateRegionOfInterestFormGroup() {
		return new FormGroup<RegionOfInterestFormProperties>({
		});

	}


	/** <p>The X and Y coordinates of a point on an image or video frame. The X and Y values are ratios of the overall image size or video resolution. For example, if an input image is 700x200 and the values are X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects makes up a <code>Polygon</code>. A <code>Polygon</code> is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a> <code>Polygon</code> represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide. </p> */
	export interface Point {
		X?: number;
		Y?: number;
	}

	/** <p>The X and Y coordinates of a point on an image or video frame. The X and Y values are ratios of the overall image size or video resolution. For example, if an input image is 700x200 and the values are X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the image.</p> <p>An array of <code>Point</code> objects makes up a <code>Polygon</code>. A <code>Polygon</code> is returned by <a>DetectText</a> and by <a>DetectCustomLabels</a> <code>Polygon</code> represents a fine-grained polygon around a detected item. For more information, see Geometry in the Amazon Rekognition Developer Guide. </p> */
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


	/**  Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.  */
	export interface StreamProcessorDataSharingPreference {

		/** Required */
		OptIn: boolean;
	}

	/**  Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.  */
	export interface StreamProcessorDataSharingPreferenceFormProperties {

		/** Required */
		OptIn: FormControl<boolean | null | undefined>,
	}
	export function CreateStreamProcessorDataSharingPreferenceFormGroup() {
		return new FormGroup<StreamProcessorDataSharingPreferenceFormProperties>({
			OptIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserResponse {
	}
	export interface CreateUserResponseFormProperties {
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
		});

	}

	export interface CreateUserRequest {

		/** Required */
		CollectionId: string;

		/** Required */
		UserId: string;
		ClientRequestToken?: string;
	}
	export interface CreateUserRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCollectionResponse {
		StatusCode?: number | null;
	}
	export interface DeleteCollectionResponseFormProperties {
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateDeleteCollectionResponseFormGroup() {
		return new FormGroup<DeleteCollectionResponseFormProperties>({
			StatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteCollectionRequest {

		/** Required */
		CollectionId: string;
	}
	export interface DeleteCollectionRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCollectionRequestFormGroup() {
		return new FormGroup<DeleteCollectionRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDatasetResponse {
	}
	export interface DeleteDatasetResponseFormProperties {
	}
	export function CreateDeleteDatasetResponseFormGroup() {
		return new FormGroup<DeleteDatasetResponseFormProperties>({
		});

	}

	export interface DeleteDatasetRequest {

		/** Required */
		DatasetArn: string;
	}
	export interface DeleteDatasetRequestFormProperties {

		/** Required */
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFacesResponse {
		DeletedFaces?: Array<string>;
		UnsuccessfulFaceDeletions?: Array<UnsuccessfulFaceDeletion>;
	}
	export interface DeleteFacesResponseFormProperties {
	}
	export function CreateDeleteFacesResponseFormGroup() {
		return new FormGroup<DeleteFacesResponseFormProperties>({
		});

	}


	/** Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully deleted. */
	export interface UnsuccessfulFaceDeletion {
		FaceId?: string;
		UserId?: string;
		Reasons?: Array<UnsuccessfulFaceDeletionReason>;
	}

	/** Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully deleted. */
	export interface UnsuccessfulFaceDeletionFormProperties {
		FaceId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateUnsuccessfulFaceDeletionFormGroup() {
		return new FormGroup<UnsuccessfulFaceDeletionFormProperties>({
			FaceId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UnsuccessfulFaceDeletionReason { ASSOCIATED_TO_AN_EXISTING_USER = 0, FACE_NOT_FOUND = 1 }

	export interface DeleteFacesRequest {

		/** Required */
		CollectionId: string;

		/** Required */
		FaceIds: Array<string>;
	}
	export interface DeleteFacesRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFacesRequestFormGroup() {
		return new FormGroup<DeleteFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProjectResponse {
		Status?: ProjectStatus;
	}
	export interface DeleteProjectResponseFormProperties {
		Status: FormControl<ProjectStatus | null | undefined>,
	}
	export function CreateDeleteProjectResponseFormGroup() {
		return new FormGroup<DeleteProjectResponseFormProperties>({
			Status: new FormControl<ProjectStatus | null | undefined>(undefined),
		});

	}

	export enum ProjectStatus { CREATING = 0, CREATED = 1, DELETING = 2 }

	export interface DeleteProjectRequest {

		/** Required */
		ProjectArn: string;
	}
	export interface DeleteProjectRequestFormProperties {

		/** Required */
		ProjectArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProjectPolicyResponse {
	}
	export interface DeleteProjectPolicyResponseFormProperties {
	}
	export function CreateDeleteProjectPolicyResponseFormGroup() {
		return new FormGroup<DeleteProjectPolicyResponseFormProperties>({
		});

	}

	export interface DeleteProjectPolicyRequest {

		/** Required */
		ProjectArn: string;

		/** Required */
		PolicyName: string;
		PolicyRevisionId?: string;
	}
	export interface DeleteProjectPolicyRequestFormProperties {

		/** Required */
		ProjectArn: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectPolicyRequestFormGroup() {
		return new FormGroup<DeleteProjectPolicyRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidPolicyRevisionIdException {
	}
	export interface InvalidPolicyRevisionIdExceptionFormProperties {
	}
	export function CreateInvalidPolicyRevisionIdExceptionFormGroup() {
		return new FormGroup<InvalidPolicyRevisionIdExceptionFormProperties>({
		});

	}

	export interface DeleteProjectVersionResponse {
		Status?: ProjectVersionStatus;
	}
	export interface DeleteProjectVersionResponseFormProperties {
		Status: FormControl<ProjectVersionStatus | null | undefined>,
	}
	export function CreateDeleteProjectVersionResponseFormGroup() {
		return new FormGroup<DeleteProjectVersionResponseFormProperties>({
			Status: new FormControl<ProjectVersionStatus | null | undefined>(undefined),
		});

	}

	export enum ProjectVersionStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETED = 1, TRAINING_FAILED = 2, STARTING = 3, RUNNING = 4, FAILED = 5, STOPPING = 6, STOPPED = 7, DELETING = 8, COPYING_IN_PROGRESS = 9, COPYING_COMPLETED = 10, COPYING_FAILED = 11 }

	export interface DeleteProjectVersionRequest {

		/** Required */
		ProjectVersionArn: string;
	}
	export interface DeleteProjectVersionRequestFormProperties {

		/** Required */
		ProjectVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectVersionRequestFormGroup() {
		return new FormGroup<DeleteProjectVersionRequestFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface DeleteStreamProcessorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStreamProcessorRequestFormGroup() {
		return new FormGroup<DeleteStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUserResponse {
	}
	export interface DeleteUserResponseFormProperties {
	}
	export function CreateDeleteUserResponseFormGroup() {
		return new FormGroup<DeleteUserResponseFormProperties>({
		});

	}

	export interface DeleteUserRequest {

		/** Required */
		CollectionId: string;

		/** Required */
		UserId: string;
		ClientRequestToken?: string;
	}
	export interface DeleteUserRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCollectionResponse {
		FaceCount?: number | null;
		FaceModelVersion?: string;
		CollectionARN?: string;
		CreationTimestamp?: Date;
		UserCount?: number | null;
	}
	export interface DescribeCollectionResponseFormProperties {
		FaceCount: FormControl<number | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
		CollectionARN: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		UserCount: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCollectionResponseFormGroup() {
		return new FormGroup<DescribeCollectionResponseFormProperties>({
			FaceCount: new FormControl<number | null | undefined>(undefined),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
			CollectionARN: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			UserCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeCollectionRequest {

		/** Required */
		CollectionId: string;
	}
	export interface DescribeCollectionRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCollectionRequestFormGroup() {
		return new FormGroup<DescribeCollectionRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetResponse {
		DatasetDescription?: DatasetDescription;
	}
	export interface DescribeDatasetResponseFormProperties {
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
		});

	}


	/** <p> A description for a dataset. For more information, see <a>DescribeDataset</a>.</p> <p>The status fields <code>Status</code>, <code>StatusMessage</code>, and <code>StatusMessageCode</code> reflect the last operation on the dataset. </p> */
	export interface DatasetDescription {
		CreationTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		Status?: DatasetStatus;
		StatusMessage?: string;
		StatusMessageCode?: DatasetStatusMessageCode;
		DatasetStats?: DatasetStats;
	}

	/** <p> A description for a dataset. For more information, see <a>DescribeDataset</a>.</p> <p>The status fields <code>Status</code>, <code>StatusMessage</code>, and <code>StatusMessageCode</code> reflect the last operation on the dataset. </p> */
	export interface DatasetDescriptionFormProperties {
		CreationTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		StatusMessageCode: FormControl<DatasetStatusMessageCode | null | undefined>,
	}
	export function CreateDatasetDescriptionFormGroup() {
		return new FormGroup<DatasetDescriptionFormProperties>({
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			StatusMessageCode: new FormControl<DatasetStatusMessageCode | null | undefined>(undefined),
		});

	}

	export enum DatasetStatus { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, CREATE_FAILED = 2, UPDATE_IN_PROGRESS = 3, UPDATE_COMPLETE = 4, UPDATE_FAILED = 5, DELETE_IN_PROGRESS = 6 }

	export enum DatasetStatusMessageCode { SUCCESS = 0, SERVICE_ERROR = 1, CLIENT_ERROR = 2 }


	/**  Provides statistics about a dataset. For more information, see <a>DescribeDataset</a>.  */
	export interface DatasetStats {
		LabeledEntries?: number | null;
		TotalEntries?: number | null;
		TotalLabels?: number | null;
		ErrorEntries?: number | null;
	}

	/**  Provides statistics about a dataset. For more information, see <a>DescribeDataset</a>.  */
	export interface DatasetStatsFormProperties {
		LabeledEntries: FormControl<number | null | undefined>,
		TotalEntries: FormControl<number | null | undefined>,
		TotalLabels: FormControl<number | null | undefined>,
		ErrorEntries: FormControl<number | null | undefined>,
	}
	export function CreateDatasetStatsFormGroup() {
		return new FormGroup<DatasetStatsFormProperties>({
			LabeledEntries: new FormControl<number | null | undefined>(undefined),
			TotalEntries: new FormControl<number | null | undefined>(undefined),
			TotalLabels: new FormControl<number | null | undefined>(undefined),
			ErrorEntries: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetRequest {

		/** Required */
		DatasetArn: string;
	}
	export interface DescribeDatasetRequestFormProperties {

		/** Required */
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeProjectVersionsResponse {
		ProjectVersionDescriptions?: Array<ProjectVersionDescription>;
		NextToken?: string;
	}
	export interface DescribeProjectVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProjectVersionsResponseFormGroup() {
		return new FormGroup<DescribeProjectVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a version of an Amazon Rekognition Custom Labels model. */
	export interface ProjectVersionDescription {
		ProjectVersionArn?: string;
		CreationTimestamp?: Date;
		MinInferenceUnits?: number | null;
		Status?: ProjectVersionStatus;
		StatusMessage?: string;
		BillableTrainingTimeInSeconds?: number | null;
		TrainingEndTimestamp?: Date;
		OutputConfig?: OutputConfig;
		TrainingDataResult?: TrainingDataResult;
		TestingDataResult?: TestingDataResult;
		EvaluationResult?: EvaluationResult;
		ManifestSummary?: GroundTruthManifest;
		KmsKeyId?: string;
		MaxInferenceUnits?: number | null;
		SourceProjectVersionArn?: string;
	}

	/** A description of a version of an Amazon Rekognition Custom Labels model. */
	export interface ProjectVersionDescriptionFormProperties {
		ProjectVersionArn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		MinInferenceUnits: FormControl<number | null | undefined>,
		Status: FormControl<ProjectVersionStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		BillableTrainingTimeInSeconds: FormControl<number | null | undefined>,
		TrainingEndTimestamp: FormControl<Date | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		MaxInferenceUnits: FormControl<number | null | undefined>,
		SourceProjectVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateProjectVersionDescriptionFormGroup() {
		return new FormGroup<ProjectVersionDescriptionFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			MinInferenceUnits: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ProjectVersionStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			BillableTrainingTimeInSeconds: new FormControl<number | null | undefined>(undefined),
			TrainingEndTimestamp: new FormControl<Date | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			MaxInferenceUnits: new FormControl<number | null | undefined>(undefined),
			SourceProjectVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing. */
	export interface TrainingDataResult {
		Input?: TrainingData;
		Output?: TrainingData;
		Validation?: ValidationData;
	}

	/** Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing. */
	export interface TrainingDataResultFormProperties {
	}
	export function CreateTrainingDataResultFormGroup() {
		return new FormGroup<TrainingDataResultFormProperties>({
		});

	}


	/** <p>Contains the Amazon S3 bucket location of the validation data for a model training job. </p> <p>The validation data includes error information for individual JSON Lines in the dataset. For more information, see <i>Debugging a Failed Model Training</i> in the Amazon Rekognition Custom Labels Developer Guide. </p> <p>You get the <code>ValidationData</code> object for the training dataset (<a>TrainingDataResult</a>) and the test dataset (<a>TestingDataResult</a>) by calling <a>DescribeProjectVersions</a>. </p> <p>The assets array contains a single <a>Asset</a> object. The <a>GroundTruthManifest</a> field of the Asset object contains the S3 bucket location of the validation data. </p> */
	export interface ValidationData {
		Assets?: Array<Asset>;
	}

	/** <p>Contains the Amazon S3 bucket location of the validation data for a model training job. </p> <p>The validation data includes error information for individual JSON Lines in the dataset. For more information, see <i>Debugging a Failed Model Training</i> in the Amazon Rekognition Custom Labels Developer Guide. </p> <p>You get the <code>ValidationData</code> object for the training dataset (<a>TrainingDataResult</a>) and the test dataset (<a>TestingDataResult</a>) by calling <a>DescribeProjectVersions</a>. </p> <p>The assets array contains a single <a>Asset</a> object. The <a>GroundTruthManifest</a> field of the Asset object contains the S3 bucket location of the validation data. </p> */
	export interface ValidationDataFormProperties {
	}
	export function CreateValidationDataFormGroup() {
		return new FormGroup<ValidationDataFormProperties>({
		});

	}


	/** Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing. */
	export interface TestingDataResult {
		Input?: TestingData;
		Output?: TestingData;
		Validation?: ValidationData;
	}

	/** Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing. */
	export interface TestingDataResultFormProperties {
	}
	export function CreateTestingDataResultFormGroup() {
		return new FormGroup<TestingDataResultFormProperties>({
		});

	}


	/** The evaluation results for the training of a model. */
	export interface EvaluationResult {
		F1Score?: number;
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

		/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p> */
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

		/** Required */
		ProjectArn: string;
		VersionNames?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeProjectVersionsRequestFormProperties {

		/** Required */
		ProjectArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeProjectVersionsRequestFormGroup() {
		return new FormGroup<DescribeProjectVersionsRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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
		NextToken?: string;
	}
	export interface DescribeProjectsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProjectsResponseFormGroup() {
		return new FormGroup<DescribeProjectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of an Amazon Rekognition Custom Labels project. For more information, see <a>DescribeProjects</a>. */
	export interface ProjectDescription {
		ProjectArn?: string;
		CreationTimestamp?: Date;
		Status?: ProjectStatus;
		Datasets?: Array<DatasetMetadata>;
	}

	/** A description of an Amazon Rekognition Custom Labels project. For more information, see <a>DescribeProjects</a>. */
	export interface ProjectDescriptionFormProperties {
		ProjectArn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		Status: FormControl<ProjectStatus | null | undefined>,
	}
	export function CreateProjectDescriptionFormGroup() {
		return new FormGroup<ProjectDescriptionFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ProjectStatus | null | undefined>(undefined),
		});

	}


	/**  Summary information for an Amazon Rekognition Custom Labels dataset. For more information, see <a>ProjectDescription</a>.  */
	export interface DatasetMetadata {
		CreationTimestamp?: Date;
		DatasetType?: DatasetType;
		DatasetArn?: string;
		Status?: DatasetStatus;
		StatusMessage?: string;
		StatusMessageCode?: DatasetStatusMessageCode;
	}

	/**  Summary information for an Amazon Rekognition Custom Labels dataset. For more information, see <a>ProjectDescription</a>.  */
	export interface DatasetMetadataFormProperties {
		CreationTimestamp: FormControl<Date | null | undefined>,
		DatasetType: FormControl<DatasetType | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		StatusMessageCode: FormControl<DatasetStatusMessageCode | null | undefined>,
	}
	export function CreateDatasetMetadataFormGroup() {
		return new FormGroup<DatasetMetadataFormProperties>({
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			DatasetType: new FormControl<DatasetType | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			StatusMessageCode: new FormControl<DatasetStatusMessageCode | null | undefined>(undefined),
		});

	}

	export interface DescribeProjectsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		ProjectNames?: Array<string>;
	}
	export interface DescribeProjectsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeProjectsRequestFormGroup() {
		return new FormGroup<DescribeProjectsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeStreamProcessorResponse {
		Name?: string;
		StreamProcessorArn?: string;
		Status?: StreamProcessorStatus;
		StatusMessage?: string;
		CreationTimestamp?: Date;
		LastUpdateTimestamp?: Date;
		Input?: StreamProcessorInput;
		Output?: StreamProcessorOutput;
		RoleArn?: string;
		Settings?: StreamProcessorSettings;

		/** <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p> <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.</p> <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p> */
		NotificationChannel?: StreamProcessorNotificationChannel;
		KmsKeyId?: string;
		RegionsOfInterest?: Array<RegionOfInterest>;
		DataSharingPreference?: StreamProcessorDataSharingPreference;
	}
	export interface DescribeStreamProcessorResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		StreamProcessorArn: FormControl<string | null | undefined>,
		Status: FormControl<StreamProcessorStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamProcessorResponseFormGroup() {
		return new FormGroup<DescribeStreamProcessorResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			StreamProcessorArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StreamProcessorStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StreamProcessorStatus { STOPPED = 0, STARTING = 1, RUNNING = 2, FAILED = 3, STOPPING = 4, UPDATING = 5 }

	export interface DescribeStreamProcessorRequest {

		/** Required */
		Name: string;
	}
	export interface DescribeStreamProcessorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStreamProcessorRequestFormGroup() {
		return new FormGroup<DescribeStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		Name?: string;
		Confidence?: number;
		Geometry?: Geometry;
	}

	/** A custom label detected in an image by a call to <a>DetectCustomLabels</a>. */
	export interface CustomLabelFormProperties {
		Name: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateCustomLabelFormGroup() {
		return new FormGroup<CustomLabelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image. */
	export interface Geometry {
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

	export interface DetectCustomLabelsRequest {

		/** Required */
		ProjectVersionArn: string;

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;
		MaxResults?: number | null;
		MinConfidence?: number;
	}
	export interface DetectCustomLabelsRequestFormProperties {

		/** Required */
		ProjectVersionArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateDetectCustomLabelsRequestFormGroup() {
		return new FormGroup<DetectCustomLabelsRequestFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			MinConfidence: new FormControl<number | null | undefined>(undefined),
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
		OrientationCorrection?: OrientationCorrection;
	}
	export interface DetectFacesResponseFormProperties {
		OrientationCorrection: FormControl<OrientationCorrection | null | undefined>,
	}
	export function CreateDetectFacesResponseFormGroup() {
		return new FormGroup<DetectFacesResponseFormProperties>({
			OrientationCorrection: new FormControl<OrientationCorrection | null | undefined>(undefined),
		});

	}


	/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter:</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
	export interface FaceDetail {
		BoundingBox?: BoundingBox;
		AgeRange?: AgeRange;
		Smile?: Smile;
		Eyeglasses?: Eyeglasses;
		Sunglasses?: Sunglasses;
		Gender?: Gender;
		Beard?: Beard;
		Mustache?: Mustache;
		EyesOpen?: EyeOpen;
		MouthOpen?: MouthOpen;
		Emotions?: Array<Emotion>;
		Landmarks?: Array<Landmark>;
		Pose?: Pose;
		Quality?: ImageQuality;
		Confidence?: number;
		FaceOccluded?: FaceOccluded;
		EyeDirection?: EyeDirection;
	}

	/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter:</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
	export interface FaceDetailFormProperties {
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateFaceDetailFormGroup() {
		return new FormGroup<FaceDetailFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p> */
	export interface AgeRange {
		Low?: number | null;
		High?: number | null;
	}

	/** <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p> */
	export interface AgeRangeFormProperties {
		Low: FormControl<number | null | undefined>,
		High: FormControl<number | null | undefined>,
	}
	export function CreateAgeRangeFormGroup() {
		return new FormGroup<AgeRangeFormProperties>({
			Low: new FormControl<number | null | undefined>(undefined),
			High: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination. */
	export interface Eyeglasses {
		Value?: boolean | null;
		Confidence?: number;
	}

	/** Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination. */
	export interface EyeglassesFormProperties {
		Value: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateEyeglassesFormGroup() {
		return new FormGroup<EyeglassesFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination. */
	export interface Sunglasses {
		Value?: boolean | null;
		Confidence?: number;
	}

	/** Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination. */
	export interface SunglassesFormProperties {
		Value: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateSunglassesFormGroup() {
		return new FormGroup<SunglassesFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact an individual's rights, privacy, or access to services.</p> */
	export interface Gender {
		Value?: GenderType;
		Confidence?: number;
	}

	/** <p>The predicted gender of a detected face. </p> <p>Amazon Rekognition makes gender binary (male/female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you shouldn't use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female.</p> <p>Using Amazon Rekognition to make gender binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. </p> <p>We don't recommend using gender binary predictions to make decisions that impact an individual's rights, privacy, or access to services.</p> */
	export interface GenderFormProperties {
		Value: FormControl<GenderType | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateGenderFormGroup() {
		return new FormGroup<GenderFormProperties>({
			Value: new FormControl<GenderType | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GenderType { Male = 0, Female = 1 }


	/** Indicates whether or not the face has a beard, and the confidence level in the determination. */
	export interface Beard {
		Value?: boolean | null;
		Confidence?: number;
	}

	/** Indicates whether or not the face has a beard, and the confidence level in the determination. */
	export interface BeardFormProperties {
		Value: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateBeardFormGroup() {
		return new FormGroup<BeardFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates whether or not the face has a mustache, and the confidence level in the determination. */
	export interface Mustache {
		Value?: boolean | null;
		Confidence?: number;
	}

	/** Indicates whether or not the face has a mustache, and the confidence level in the determination. */
	export interface MustacheFormProperties {
		Value: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateMustacheFormGroup() {
		return new FormGroup<MustacheFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates whether or not the eyes on the face are open, and the confidence level in the determination. */
	export interface EyeOpen {
		Value?: boolean | null;
		Confidence?: number;
	}

	/** Indicates whether or not the eyes on the face are open, and the confidence level in the determination. */
	export interface EyeOpenFormProperties {
		Value: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateEyeOpenFormGroup() {
		return new FormGroup<EyeOpenFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates whether or not the mouth on the face is open, and the confidence level in the determination. */
	export interface MouthOpen {
		Value?: boolean | null;
		Confidence?: number;
	}

	/** Indicates whether or not the mouth on the face is open, and the confidence level in the determination. */
	export interface MouthOpenFormProperties {
		Value: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateMouthOpenFormGroup() {
		return new FormGroup<MouthOpenFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p> <code>FaceOccluded</code> should return "true" with a high confidence score if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark sunglasses, cell phones, hands, or other objects. <code>FaceOccluded</code> should return "false" with a high confidence score if common occurrences that do not impact face verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others. </p> <p>You can use <code>FaceOccluded</code> to determine if an obstruction on a face negatively impacts using the image for face matching.</p> */
	export interface FaceOccluded {
		Value?: boolean | null;
		Confidence?: number;
	}

	/** <p> <code>FaceOccluded</code> should return "true" with a high confidence score if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark sunglasses, cell phones, hands, or other objects. <code>FaceOccluded</code> should return "false" with a high confidence score if common occurrences that do not impact face verification are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others. </p> <p>You can use <code>FaceOccluded</code> to determine if an obstruction on a face negatively impacts using the image for face matching.</p> */
	export interface FaceOccludedFormProperties {
		Value: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateFaceOccludedFormGroup() {
		return new FormGroup<FaceOccludedFormProperties>({
			Value: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates the direction the eyes are gazing in (independent of the head pose) as determined by its pitch and yaw.  */
	export interface EyeDirection {
		Yaw?: number;
		Pitch?: number;
		Confidence?: number;
	}

	/** Indicates the direction the eyes are gazing in (independent of the head pose) as determined by its pitch and yaw.  */
	export interface EyeDirectionFormProperties {
		Yaw: FormControl<number | null | undefined>,
		Pitch: FormControl<number | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateEyeDirectionFormGroup() {
		return new FormGroup<EyeDirectionFormProperties>({
			Yaw: new FormControl<number | null | undefined>(undefined),
			Pitch: new FormControl<number | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DetectFacesRequest {

		/** Required */
		Image: Image;
		Attributes?: Array<Attribute>;
	}
	export interface DetectFacesRequestFormProperties {
	}
	export function CreateDetectFacesRequestFormGroup() {
		return new FormGroup<DetectFacesRequestFormProperties>({
		});

	}

	export enum Attribute { DEFAULT = 0, ALL = 1, AGE_RANGE = 2, BEARD = 3, EMOTIONS = 4, EYE_DIRECTION = 5, EYEGLASSES = 6, EYES_OPEN = 7, GENDER = 8, MOUTH_OPEN = 9, MUSTACHE = 10, FACE_OCCLUDED = 11, SMILE = 12, SUNGLASSES = 13 }

	export interface DetectLabelsResponse {
		Labels?: Array<Label>;
		OrientationCorrection?: OrientationCorrection;
		LabelModelVersion?: string;
		ImageProperties?: DetectLabelsImageProperties;
	}
	export interface DetectLabelsResponseFormProperties {
		OrientationCorrection: FormControl<OrientationCorrection | null | undefined>,
		LabelModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectLabelsResponseFormGroup() {
		return new FormGroup<DetectLabelsResponseFormProperties>({
			OrientationCorrection: new FormControl<OrientationCorrection | null | undefined>(undefined),
			LabelModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p> */
	export interface Label {
		Name?: string;
		Confidence?: number;
		Instances?: Array<Instance>;
		Parents?: Array<Parent>;
		Aliases?: Array<LabelAlias>;
		Categories?: Array<LabelCategory>;
	}

	/** <p>Structure containing details about the detected label, including the name, detected instances, parent labels, and level of confidence.</p> <p> </p> */
	export interface LabelFormProperties {
		Name: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>). */
	export interface Instance {
		BoundingBox?: BoundingBox;
		Confidence?: number;
		DominantColors?: Array<DominantColor>;
	}

	/** An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>). */
	export interface InstanceFormProperties {
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A description of the dominant colors in an image. */
	export interface DominantColor {
		Red?: number | null;
		Blue?: number | null;
		Green?: number | null;
		HexCode?: string;
		CSSColor?: string;
		SimplifiedColor?: string;
		PixelPercent?: number;
	}

	/** A description of the dominant colors in an image. */
	export interface DominantColorFormProperties {
		Red: FormControl<number | null | undefined>,
		Blue: FormControl<number | null | undefined>,
		Green: FormControl<number | null | undefined>,
		HexCode: FormControl<string | null | undefined>,
		CSSColor: FormControl<string | null | undefined>,
		SimplifiedColor: FormControl<string | null | undefined>,
		PixelPercent: FormControl<number | null | undefined>,
	}
	export function CreateDominantColorFormGroup() {
		return new FormGroup<DominantColorFormProperties>({
			Red: new FormControl<number | null | undefined>(undefined),
			Blue: new FormControl<number | null | undefined>(undefined),
			Green: new FormControl<number | null | undefined>(undefined),
			HexCode: new FormControl<string | null | undefined>(undefined),
			CSSColor: new FormControl<string | null | undefined>(undefined),
			SimplifiedColor: new FormControl<string | null | undefined>(undefined),
			PixelPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A parent label for a label. A label can have 0, 1, or more parents.  */
	export interface Parent {
		Name?: string;
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


	/** A potential alias of for a given label. */
	export interface LabelAlias {
		Name?: string;
	}

	/** A potential alias of for a given label. */
	export interface LabelAliasFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLabelAliasFormGroup() {
		return new FormGroup<LabelAliasFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The category that applies to a given label. */
	export interface LabelCategory {
		Name?: string;
	}

	/** The category that applies to a given label. */
	export interface LabelCategoryFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLabelCategoryFormGroup() {
		return new FormGroup<LabelCategoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the quality and dominant colors of an input image. Quality and color information is returned for the entire image, foreground, and background. */
	export interface DetectLabelsImageProperties {
		Quality?: DetectLabelsImageQuality;
		DominantColors?: Array<DominantColor>;
		Foreground?: DetectLabelsImageForeground;
		Background?: DetectLabelsImageBackground;
	}

	/** Information about the quality and dominant colors of an input image. Quality and color information is returned for the entire image, foreground, and background. */
	export interface DetectLabelsImagePropertiesFormProperties {
	}
	export function CreateDetectLabelsImagePropertiesFormGroup() {
		return new FormGroup<DetectLabelsImagePropertiesFormProperties>({
		});

	}


	/** The quality of an image provided for label detection, with regard to brightness, sharpness, and contrast. */
	export interface DetectLabelsImageQuality {
		Brightness?: number;
		Sharpness?: number;
		Contrast?: number;
	}

	/** The quality of an image provided for label detection, with regard to brightness, sharpness, and contrast. */
	export interface DetectLabelsImageQualityFormProperties {
		Brightness: FormControl<number | null | undefined>,
		Sharpness: FormControl<number | null | undefined>,
		Contrast: FormControl<number | null | undefined>,
	}
	export function CreateDetectLabelsImageQualityFormGroup() {
		return new FormGroup<DetectLabelsImageQualityFormProperties>({
			Brightness: new FormControl<number | null | undefined>(undefined),
			Sharpness: new FormControl<number | null | undefined>(undefined),
			Contrast: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The foreground of the image with regard to image quality and dominant colors. */
	export interface DetectLabelsImageForeground {
		Quality?: DetectLabelsImageQuality;
		DominantColors?: Array<DominantColor>;
	}

	/** The foreground of the image with regard to image quality and dominant colors. */
	export interface DetectLabelsImageForegroundFormProperties {
	}
	export function CreateDetectLabelsImageForegroundFormGroup() {
		return new FormGroup<DetectLabelsImageForegroundFormProperties>({
		});

	}


	/** The background of the image with regard to image quality and dominant colors. */
	export interface DetectLabelsImageBackground {
		Quality?: DetectLabelsImageQuality;
		DominantColors?: Array<DominantColor>;
	}

	/** The background of the image with regard to image quality and dominant colors. */
	export interface DetectLabelsImageBackgroundFormProperties {
	}
	export function CreateDetectLabelsImageBackgroundFormGroup() {
		return new FormGroup<DetectLabelsImageBackgroundFormProperties>({
		});

	}

	export interface DetectLabelsRequest {

		/** Required */
		Image: Image;
		MaxLabels?: number | null;
		MinConfidence?: number;
		Features?: Array<DetectLabelsFeatureName>;
		Settings?: DetectLabelsSettings;
	}
	export interface DetectLabelsRequestFormProperties {
		MaxLabels: FormControl<number | null | undefined>,
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateDetectLabelsRequestFormGroup() {
		return new FormGroup<DetectLabelsRequestFormProperties>({
			MaxLabels: new FormControl<number | null | undefined>(undefined),
			MinConfidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DetectLabelsFeatureName { GENERAL_LABELS = 0, IMAGE_PROPERTIES = 1 }


	/** Settings for the DetectLabels request. Settings can include filters for both GENERAL_LABELS and IMAGE_PROPERTIES. GENERAL_LABELS filters can be inclusive or exclusive and applied to individual labels or label categories. IMAGE_PROPERTIES filters allow specification of a maximum number of dominant colors. */
	export interface DetectLabelsSettings {
		GeneralLabels?: GeneralLabelsSettings;
		ImageProperties?: DetectLabelsImagePropertiesSettings;
	}

	/** Settings for the DetectLabels request. Settings can include filters for both GENERAL_LABELS and IMAGE_PROPERTIES. GENERAL_LABELS filters can be inclusive or exclusive and applied to individual labels or label categories. IMAGE_PROPERTIES filters allow specification of a maximum number of dominant colors. */
	export interface DetectLabelsSettingsFormProperties {
	}
	export function CreateDetectLabelsSettingsFormGroup() {
		return new FormGroup<DetectLabelsSettingsFormProperties>({
		});

	}


	/** Contains filters for the object labels returned by DetectLabels. Filters can be inclusive, exclusive, or a combination of both and can be applied to individual labels or entire label categories. To see a list of label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting Labels</a>. */
	export interface GeneralLabelsSettings {
		LabelInclusionFilters?: Array<string>;
		LabelExclusionFilters?: Array<string>;
		LabelCategoryInclusionFilters?: Array<string>;
		LabelCategoryExclusionFilters?: Array<string>;
	}

	/** Contains filters for the object labels returned by DetectLabels. Filters can be inclusive, exclusive, or a combination of both and can be applied to individual labels or entire label categories. To see a list of label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting Labels</a>. */
	export interface GeneralLabelsSettingsFormProperties {
	}
	export function CreateGeneralLabelsSettingsFormGroup() {
		return new FormGroup<GeneralLabelsSettingsFormProperties>({
		});

	}


	/** Settings for the IMAGE_PROPERTIES feature type. */
	export interface DetectLabelsImagePropertiesSettings {
		MaxDominantColors?: number | null;
	}

	/** Settings for the IMAGE_PROPERTIES feature type. */
	export interface DetectLabelsImagePropertiesSettingsFormProperties {
		MaxDominantColors: FormControl<number | null | undefined>,
	}
	export function CreateDetectLabelsImagePropertiesSettingsFormGroup() {
		return new FormGroup<DetectLabelsImagePropertiesSettingsFormProperties>({
			MaxDominantColors: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DetectModerationLabelsResponse {
		ModerationLabels?: Array<ModerationLabel>;
		ModerationModelVersion?: string;
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


	/** Provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition Developer Guide. */
	export interface ModerationLabel {
		Confidence?: number;
		Name?: string;
		ParentName?: string;
	}

	/** Provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition Developer Guide. */
	export interface ModerationLabelFormProperties {
		Confidence: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ParentName: FormControl<string | null | undefined>,
	}
	export function CreateModerationLabelFormGroup() {
		return new FormGroup<ModerationLabelFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
	export interface HumanLoopActivationOutput {
		HumanLoopArn?: string;
		HumanLoopActivationReasons?: Array<string>;
		HumanLoopActivationConditionsEvaluationResults?: string;
	}

	/** Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input did not trigger human review. */
	export interface HumanLoopActivationOutputFormProperties {
		HumanLoopArn: FormControl<string | null | undefined>,
		HumanLoopActivationConditionsEvaluationResults: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopActivationOutputFormGroup() {
		return new FormGroup<HumanLoopActivationOutputFormProperties>({
			HumanLoopArn: new FormControl<string | null | undefined>(undefined),
			HumanLoopActivationConditionsEvaluationResults: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetectModerationLabelsRequest {

		/** Required */
		Image: Image;
		MinConfidence?: number;
		HumanLoopConfig?: HumanLoopConfig;
	}
	export interface DetectModerationLabelsRequestFormProperties {
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateDetectModerationLabelsRequestFormGroup() {
		return new FormGroup<DetectModerationLabelsRequestFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. */
	export interface HumanLoopConfig {

		/** Required */
		HumanLoopName: string;

		/** Required */
		FlowDefinitionArn: string;
		DataAttributes?: HumanLoopDataAttributes;
	}

	/** Sets up the flow definition the image will be sent to if one of the conditions is met. You can also set certain attributes of the image before review. */
	export interface HumanLoopConfigFormProperties {

		/** Required */
		HumanLoopName: FormControl<string | null | undefined>,

		/** Required */
		FlowDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopConfigFormGroup() {
		return new FormGroup<HumanLoopConfigFormProperties>({
			HumanLoopName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information. */
	export interface HumanLoopDataAttributes {
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

	export interface DetectProtectiveEquipmentResponse {
		ProtectiveEquipmentModelVersion?: string;
		Persons?: Array<ProtectiveEquipmentPerson>;
		Summary?: ProtectiveEquipmentSummary;
	}
	export interface DetectProtectiveEquipmentResponseFormProperties {
		ProtectiveEquipmentModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectProtectiveEquipmentResponseFormGroup() {
		return new FormGroup<DetectProtectiveEquipmentResponseFormProperties>({
			ProtectiveEquipmentModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects. */
	export interface ProtectiveEquipmentPerson {
		BodyParts?: Array<ProtectiveEquipmentBodyPart>;
		BoundingBox?: BoundingBox;
		Confidence?: number;
		Id?: number | null;
	}

	/** A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects. */
	export interface ProtectiveEquipmentPersonFormProperties {
		Confidence: FormControl<number | null | undefined>,
		Id: FormControl<number | null | undefined>,
	}
	export function CreateProtectiveEquipmentPersonFormGroup() {
		return new FormGroup<ProtectiveEquipmentPersonFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>.  */
	export interface ProtectiveEquipmentBodyPart {
		Name?: BodyPart;
		Confidence?: number;
		EquipmentDetections?: Array<EquipmentDetection>;
	}

	/** Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>.  */
	export interface ProtectiveEquipmentBodyPartFormProperties {
		Name: FormControl<BodyPart | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateProtectiveEquipmentBodyPartFormGroup() {
		return new FormGroup<ProtectiveEquipmentBodyPartFormProperties>({
			Name: new FormControl<BodyPart | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BodyPart { FACE = 0, HEAD = 1, LEFT_HAND = 2, RIGHT_HAND = 3 }


	/** Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>. */
	export interface EquipmentDetection {
		BoundingBox?: BoundingBox;
		Confidence?: number;
		Type?: ProtectiveEquipmentType;
		CoversBodyPart?: CoversBodyPart;
	}

	/** Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>. */
	export interface EquipmentDetectionFormProperties {
		Confidence: FormControl<number | null | undefined>,
		Type: FormControl<ProtectiveEquipmentType | null | undefined>,
	}
	export function CreateEquipmentDetectionFormGroup() {
		return new FormGroup<EquipmentDetectionFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<ProtectiveEquipmentType | null | undefined>(undefined),
		});

	}

	export enum ProtectiveEquipmentType { FACE_COVER = 0, HAND_COVER = 1, HEAD_COVER = 2 }


	/** Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see <a>DetectProtectiveEquipment</a>. */
	export interface CoversBodyPart {
		Confidence?: number;
		Value?: boolean | null;
	}

	/** Information about an item of Personal Protective Equipment covering a corresponding body part. For more information, see <a>DetectProtectiveEquipment</a>. */
	export interface CoversBodyPartFormProperties {
		Confidence: FormControl<number | null | undefined>,
		Value: FormControl<boolean | null | undefined>,
	}
	export function CreateCoversBodyPartFormGroup() {
		return new FormGroup<CoversBodyPartFormProperties>({
			Confidence: new FormControl<number | null | undefined>(undefined),
			Value: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Summary information for required items of personal protective equipment (PPE) detected on persons by a call to <a>DetectProtectiveEquipment</a>. You specify the required type of PPE in the <code>SummarizationAttributes</code> (<a>ProtectiveEquipmentSummarizationAttributes</a>) input parameter. The summary includes which persons were detected wearing the required personal protective equipment (<code>PersonsWithRequiredEquipment</code>), which persons were detected as not wearing the required PPE (<code>PersonsWithoutRequiredEquipment</code>), and the persons in which a determination could not be made (<code>PersonsIndeterminate</code>).</p> <p>To get a total for each category, use the size of the field array. For example, to find out how many people were detected as wearing the specified PPE, use the size of the <code>PersonsWithRequiredEquipment</code> array. If you want to find out more about a person, such as the location (<a>BoundingBox</a>) of the person on the image, use the person ID in each array element. Each person ID matches the ID field of a <a>ProtectiveEquipmentPerson</a> object returned in the <code>Persons</code> array by <code>DetectProtectiveEquipment</code>.</p> */
	export interface ProtectiveEquipmentSummary {
		PersonsWithRequiredEquipment?: Array<number> | null;
		PersonsWithoutRequiredEquipment?: Array<number> | null;
		PersonsIndeterminate?: Array<number> | null;
	}

	/** <p>Summary information for required items of personal protective equipment (PPE) detected on persons by a call to <a>DetectProtectiveEquipment</a>. You specify the required type of PPE in the <code>SummarizationAttributes</code> (<a>ProtectiveEquipmentSummarizationAttributes</a>) input parameter. The summary includes which persons were detected wearing the required personal protective equipment (<code>PersonsWithRequiredEquipment</code>), which persons were detected as not wearing the required PPE (<code>PersonsWithoutRequiredEquipment</code>), and the persons in which a determination could not be made (<code>PersonsIndeterminate</code>).</p> <p>To get a total for each category, use the size of the field array. For example, to find out how many people were detected as wearing the specified PPE, use the size of the <code>PersonsWithRequiredEquipment</code> array. If you want to find out more about a person, such as the location (<a>BoundingBox</a>) of the person on the image, use the person ID in each array element. Each person ID matches the ID field of a <a>ProtectiveEquipmentPerson</a> object returned in the <code>Persons</code> array by <code>DetectProtectiveEquipment</code>.</p> */
	export interface ProtectiveEquipmentSummaryFormProperties {
	}
	export function CreateProtectiveEquipmentSummaryFormGroup() {
		return new FormGroup<ProtectiveEquipmentSummaryFormProperties>({
		});

	}

	export interface DetectProtectiveEquipmentRequest {

		/** Required */
		Image: Image;
		SummarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
	}
	export interface DetectProtectiveEquipmentRequestFormProperties {
	}
	export function CreateDetectProtectiveEquipmentRequestFormGroup() {
		return new FormGroup<DetectProtectiveEquipmentRequestFormProperties>({
		});

	}


	/** Specifies summary attributes to return from a call to <a>DetectProtectiveEquipment</a>. You can specify which types of PPE to summarize. You can also specify a minimum confidence value for detections. Summary information is returned in the <code>Summary</code> (<a>ProtectiveEquipmentSummary</a>) field of the response from <code>DetectProtectiveEquipment</code>. The summary includes which persons in an image were detected wearing the requested types of person protective equipment (PPE), which persons were detected as not wearing PPE, and the persons in which a determination could not be made. For more information, see <a>ProtectiveEquipmentSummary</a>. */
	export interface ProtectiveEquipmentSummarizationAttributes {

		/** Required */
		MinConfidence: number;

		/** Required */
		RequiredEquipmentTypes: Array<ProtectiveEquipmentType>;
	}

	/** Specifies summary attributes to return from a call to <a>DetectProtectiveEquipment</a>. You can specify which types of PPE to summarize. You can also specify a minimum confidence value for detections. Summary information is returned in the <code>Summary</code> (<a>ProtectiveEquipmentSummary</a>) field of the response from <code>DetectProtectiveEquipment</code>. The summary includes which persons in an image were detected wearing the requested types of person protective equipment (PPE), which persons were detected as not wearing PPE, and the persons in which a determination could not be made. For more information, see <a>ProtectiveEquipmentSummary</a>. */
	export interface ProtectiveEquipmentSummarizationAttributesFormProperties {

		/** Required */
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateProtectiveEquipmentSummarizationAttributesFormGroup() {
		return new FormGroup<ProtectiveEquipmentSummarizationAttributesFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectTextResponse {
		TextDetections?: Array<TextDetection>;
		TextModelVersion?: string;
	}
	export interface DetectTextResponseFormProperties {
		TextModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateDetectTextResponseFormGroup() {
		return new FormGroup<DetectTextResponseFormProperties>({
			TextModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting text in the Amazon Rekognition Developer Guide.</p> */
	export interface TextDetection {
		DetectedText?: string;
		Type?: TextTypes;
		Id?: number | null;
		ParentId?: number | null;
		Confidence?: number;
		Geometry?: Geometry;
	}

	/** <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting text in the Amazon Rekognition Developer Guide.</p> */
	export interface TextDetectionFormProperties {
		DetectedText: FormControl<string | null | undefined>,
		Type: FormControl<TextTypes | null | undefined>,
		Id: FormControl<number | null | undefined>,
		ParentId: FormControl<number | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateTextDetectionFormGroup() {
		return new FormGroup<TextDetectionFormProperties>({
			DetectedText: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<TextTypes | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			ParentId: new FormControl<number | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TextTypes { LINE = 0, WORD = 1 }

	export interface DetectTextRequest {

		/** Required */
		Image: Image;
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
		MinConfidence?: number;
		MinBoundingBoxHeight?: number;
		MinBoundingBoxWidth?: number;
	}

	/** A set of parameters that allow you to filter out certain results from your returned results. */
	export interface DetectionFilterFormProperties {
		MinConfidence: FormControl<number | null | undefined>,
		MinBoundingBoxHeight: FormControl<number | null | undefined>,
		MinBoundingBoxWidth: FormControl<number | null | undefined>,
	}
	export function CreateDetectionFilterFormGroup() {
		return new FormGroup<DetectionFilterFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined),
			MinBoundingBoxHeight: new FormControl<number | null | undefined>(undefined),
			MinBoundingBoxWidth: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DisassociateFacesResponse {
		DisassociatedFaces?: Array<DisassociatedFace>;
		UnsuccessfulFaceDisassociations?: Array<UnsuccessfulFaceDisassociation>;
		UserStatus?: UserStatus;
	}
	export interface DisassociateFacesResponseFormProperties {
		UserStatus: FormControl<UserStatus | null | undefined>,
	}
	export function CreateDisassociateFacesResponseFormGroup() {
		return new FormGroup<DisassociateFacesResponseFormProperties>({
			UserStatus: new FormControl<UserStatus | null | undefined>(undefined),
		});

	}


	/** Provides face metadata for the faces that are disassociated from a specific UserID. */
	export interface DisassociatedFace {
		FaceId?: string;
	}

	/** Provides face metadata for the faces that are disassociated from a specific UserID. */
	export interface DisassociatedFaceFormProperties {
		FaceId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociatedFaceFormGroup() {
		return new FormGroup<DisassociatedFaceFormProperties>({
			FaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully disassociated. */
	export interface UnsuccessfulFaceDisassociation {
		FaceId?: string;
		UserId?: string;
		Reasons?: Array<UnsuccessfulFaceDisassociationReason>;
	}

	/** Contains metadata like FaceId, UserID, and Reasons, for a face that was unsuccessfully disassociated. */
	export interface UnsuccessfulFaceDisassociationFormProperties {
		FaceId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateUnsuccessfulFaceDisassociationFormGroup() {
		return new FormGroup<UnsuccessfulFaceDisassociationFormProperties>({
			FaceId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UnsuccessfulFaceDisassociationReason { FACE_NOT_FOUND = 0, ASSOCIATED_TO_A_DIFFERENT_USER = 1 }

	export interface DisassociateFacesRequest {

		/** Required */
		CollectionId: string;

		/** Required */
		UserId: string;
		ClientRequestToken?: string;

		/** Required */
		FaceIds: Array<string>;
	}
	export interface DisassociateFacesRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateFacesRequestFormGroup() {
		return new FormGroup<DisassociateFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DistributeDatasetEntriesResponse {
	}
	export interface DistributeDatasetEntriesResponseFormProperties {
	}
	export function CreateDistributeDatasetEntriesResponseFormGroup() {
		return new FormGroup<DistributeDatasetEntriesResponseFormProperties>({
		});

	}

	export interface DistributeDatasetEntriesRequest {

		/** Required */
		Datasets: Array<DistributeDataset>;
	}
	export interface DistributeDatasetEntriesRequestFormProperties {
	}
	export function CreateDistributeDatasetEntriesRequestFormGroup() {
		return new FormGroup<DistributeDatasetEntriesRequestFormProperties>({
		});

	}


	/**  A training dataset or a test dataset used in a dataset distribution operation. For more information, see <a>DistributeDatasetEntries</a>.  */
	export interface DistributeDataset {

		/** Required */
		Arn: string;
	}

	/**  A training dataset or a test dataset used in a dataset distribution operation. For more information, see <a>DistributeDatasetEntries</a>.  */
	export interface DistributeDatasetFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDistributeDatasetFormGroup() {
		return new FormGroup<DistributeDatasetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCelebrityInfoResponse {
		Urls?: Array<string>;
		Name?: string;
		KnownGender?: KnownGender;
	}
	export interface GetCelebrityInfoResponseFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetCelebrityInfoResponseFormGroup() {
		return new FormGroup<GetCelebrityInfoResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The known gender identity for the celebrity that matches the provided ID. The known gender identity can be Male, Female, Nonbinary, or Unlisted. */
	export interface KnownGender {
		Type?: KnownGenderType;
	}

	/** The known gender identity for the celebrity that matches the provided ID. The known gender identity can be Male, Female, Nonbinary, or Unlisted. */
	export interface KnownGenderFormProperties {
		Type: FormControl<KnownGenderType | null | undefined>,
	}
	export function CreateKnownGenderFormGroup() {
		return new FormGroup<KnownGenderFormProperties>({
			Type: new FormControl<KnownGenderType | null | undefined>(undefined),
		});

	}


	/** A list of enum string of possible gender values that Celebrity returns. */
	export enum KnownGenderType { Male = 0, Female = 1, Nonbinary = 2, Unlisted = 3 }

	export interface GetCelebrityInfoRequest {

		/** Required */
		Id: string;
	}
	export interface GetCelebrityInfoRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetCelebrityInfoRequestFormGroup() {
		return new FormGroup<GetCelebrityInfoRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCelebrityRecognitionResponse {
		JobStatus?: VideoJobStatus;
		StatusMessage?: string;
		VideoMetadata?: VideoMetadata;
		NextToken?: string;
		Celebrities?: Array<CelebrityRecognition>;
		JobId?: string;

		/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video?: Video;
		JobTag?: string;
	}
	export interface GetCelebrityRecognitionResponseFormProperties {
		JobStatus: FormControl<VideoJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateGetCelebrityRecognitionResponseFormGroup() {
		return new FormGroup<GetCelebrityRecognitionResponseFormProperties>({
			JobStatus: new FormControl<VideoJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoJobStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }


	/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
	export interface VideoMetadata {
		Codec?: string;
		DurationMillis?: number | null;
		Format?: string;
		FrameRate?: number;
		FrameHeight?: number | null;
		FrameWidth?: number | null;
		ColorRange?: VideoColorRange;
	}

	/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
	export interface VideoMetadataFormProperties {
		Codec: FormControl<string | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
		Format: FormControl<string | null | undefined>,
		FrameRate: FormControl<number | null | undefined>,
		FrameHeight: FormControl<number | null | undefined>,
		FrameWidth: FormControl<number | null | undefined>,
		ColorRange: FormControl<VideoColorRange | null | undefined>,
	}
	export function CreateVideoMetadataFormGroup() {
		return new FormGroup<VideoMetadataFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			FrameRate: new FormControl<number | null | undefined>(undefined),
			FrameHeight: new FormControl<number | null | undefined>(undefined),
			FrameWidth: new FormControl<number | null | undefined>(undefined),
			ColorRange: new FormControl<VideoColorRange | null | undefined>(undefined),
		});

	}

	export enum VideoColorRange { FULL = 0, LIMITED = 1 }


	/** Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide. */
	export interface CelebrityRecognition {
		Timestamp?: number | null;
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
		Name?: string;
		Id?: string;
		Confidence?: number;
		BoundingBox?: BoundingBox;
		Face?: FaceDetail;
		KnownGender?: KnownGender;
	}

	/** Information about a recognized celebrity. */
	export interface CelebrityDetailFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateCelebrityDetailFormGroup() {
		return new FormGroup<CelebrityDetailFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
	export interface Video {
		S3Object?: S3Object;
	}

	/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
	export interface VideoFormProperties {
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
		});

	}

	export interface GetCelebrityRecognitionRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
		SortBy?: CelebrityRecognitionSortBy;
	}
	export interface GetCelebrityRecognitionRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<CelebrityRecognitionSortBy | null | undefined>,
	}
	export function CreateGetCelebrityRecognitionRequestFormGroup() {
		return new FormGroup<GetCelebrityRecognitionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<CelebrityRecognitionSortBy | null | undefined>(undefined),
		});

	}

	export enum CelebrityRecognitionSortBy { ID = 0, TIMESTAMP = 1 }

	export interface GetContentModerationResponse {
		JobStatus?: VideoJobStatus;
		StatusMessage?: string;
		VideoMetadata?: VideoMetadata;
		ModerationLabels?: Array<ContentModerationDetection>;
		NextToken?: string;
		ModerationModelVersion?: string;
		JobId?: string;

		/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video?: Video;
		JobTag?: string;
		GetRequestMetadata?: GetContentModerationRequestMetadata;
	}
	export interface GetContentModerationResponseFormProperties {
		JobStatus: FormControl<VideoJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ModerationModelVersion: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateGetContentModerationResponseFormGroup() {
		return new FormGroup<GetContentModerationResponseFormProperties>({
			JobStatus: new FormControl<VideoJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ModerationModelVersion: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an inappropriate, unwanted, or offensive content label detection in a stored video. */
	export interface ContentModerationDetection {
		Timestamp?: number | null;
		ModerationLabel?: ModerationLabel;
		StartTimestampMillis?: number | null;
		EndTimestampMillis?: number | null;
		DurationMillis?: number | null;
	}

	/** Information about an inappropriate, unwanted, or offensive content label detection in a stored video. */
	export interface ContentModerationDetectionFormProperties {
		Timestamp: FormControl<number | null | undefined>,
		StartTimestampMillis: FormControl<number | null | undefined>,
		EndTimestampMillis: FormControl<number | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
	}
	export function CreateContentModerationDetectionFormGroup() {
		return new FormGroup<ContentModerationDetectionFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
			StartTimestampMillis: new FormControl<number | null | undefined>(undefined),
			EndTimestampMillis: new FormControl<number | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains metadata about a content moderation request, including the SortBy and AggregateBy options. */
	export interface GetContentModerationRequestMetadata {
		SortBy?: ContentModerationSortBy;
		AggregateBy?: ContentModerationAggregateBy;
	}

	/** Contains metadata about a content moderation request, including the SortBy and AggregateBy options. */
	export interface GetContentModerationRequestMetadataFormProperties {
		SortBy: FormControl<ContentModerationSortBy | null | undefined>,
		AggregateBy: FormControl<ContentModerationAggregateBy | null | undefined>,
	}
	export function CreateGetContentModerationRequestMetadataFormGroup() {
		return new FormGroup<GetContentModerationRequestMetadataFormProperties>({
			SortBy: new FormControl<ContentModerationSortBy | null | undefined>(undefined),
			AggregateBy: new FormControl<ContentModerationAggregateBy | null | undefined>(undefined),
		});

	}

	export enum ContentModerationSortBy { NAME = 0, TIMESTAMP = 1 }

	export enum ContentModerationAggregateBy { TIMESTAMPS = 0, SEGMENTS = 1 }

	export interface GetContentModerationRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
		SortBy?: ContentModerationSortBy;
		AggregateBy?: ContentModerationAggregateBy;
	}
	export interface GetContentModerationRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<ContentModerationSortBy | null | undefined>,
		AggregateBy: FormControl<ContentModerationAggregateBy | null | undefined>,
	}
	export function CreateGetContentModerationRequestFormGroup() {
		return new FormGroup<GetContentModerationRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<ContentModerationSortBy | null | undefined>(undefined),
			AggregateBy: new FormControl<ContentModerationAggregateBy | null | undefined>(undefined),
		});

	}

	export interface GetFaceDetectionResponse {
		JobStatus?: VideoJobStatus;
		StatusMessage?: string;
		VideoMetadata?: VideoMetadata;
		NextToken?: string;
		Faces?: Array<FaceDetection>;
		JobId?: string;

		/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video?: Video;
		JobTag?: string;
	}
	export interface GetFaceDetectionResponseFormProperties {
		JobStatus: FormControl<VideoJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateGetFaceDetectionResponseFormGroup() {
		return new FormGroup<GetFaceDetectionResponseFormProperties>({
			JobStatus: new FormControl<VideoJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a face detected in a video analysis request and the time the face was detected in the video.  */
	export interface FaceDetection {
		Timestamp?: number | null;
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

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetFaceDetectionRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetFaceDetectionRequestFormGroup() {
		return new FormGroup<GetFaceDetectionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFaceLivenessSessionResultsResponse {

		/** Required */
		SessionId: string;

		/** Required */
		Status: LivenessSessionStatus;
		Confidence?: number;
		ReferenceImage?: AuditImage;
		AuditImages?: Array<AuditImage>;
	}
	export interface GetFaceLivenessSessionResultsResponseFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<LivenessSessionStatus | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateGetFaceLivenessSessionResultsResponseFormGroup() {
		return new FormGroup<GetFaceLivenessSessionResultsResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<LivenessSessionStatus | null | undefined>(undefined, [Validators.required]),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LivenessSessionStatus { CREATED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, EXPIRED = 4 }


	/** An image that is picked from the Face Liveness video and returned for audit trail purposes, returned as Base64-encoded bytes. */
	export interface AuditImage {
		Bytes?: string;

		/** <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p> */
		S3Object?: S3Object;

		/** <p>Identifies the bounding box around the label, face, text, object of interest, or personal protective equipment. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a <code>left</code> value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p> <p>The <code>width</code> and <code>height</code> values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p> <note> <p> The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the <code>left</code> or <code>top</code> values. </p> </note> */
		BoundingBox?: BoundingBox;
	}

	/** An image that is picked from the Face Liveness video and returned for audit trail purposes, returned as Base64-encoded bytes. */
	export interface AuditImageFormProperties {
		Bytes: FormControl<string | null | undefined>,
	}
	export function CreateAuditImageFormGroup() {
		return new FormGroup<AuditImageFormProperties>({
			Bytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFaceLivenessSessionResultsRequest {

		/** Required */
		SessionId: string;
	}
	export interface GetFaceLivenessSessionResultsRequestFormProperties {

		/** Required */
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateGetFaceLivenessSessionResultsRequestFormGroup() {
		return new FormGroup<GetFaceLivenessSessionResultsRequestFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SessionNotFoundException {
	}
	export interface SessionNotFoundExceptionFormProperties {
	}
	export function CreateSessionNotFoundExceptionFormGroup() {
		return new FormGroup<SessionNotFoundExceptionFormProperties>({
		});

	}

	export interface GetFaceSearchResponse {
		JobStatus?: VideoJobStatus;
		StatusMessage?: string;
		NextToken?: string;
		VideoMetadata?: VideoMetadata;
		Persons?: Array<PersonMatch>;
		JobId?: string;

		/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video?: Video;
		JobTag?: string;
	}
	export interface GetFaceSearchResponseFormProperties {
		JobStatus: FormControl<VideoJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateGetFaceSearchResponseFormGroup() {
		return new FormGroup<GetFaceSearchResponseFormProperties>({
			JobStatus: new FormControl<VideoJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>.  */
	export interface PersonMatch {
		Timestamp?: number | null;
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
		BoundingBox?: BoundingBox;
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
		Similarity?: number;
		Face?: Face;
	}

	/** Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face. */
	export interface FaceMatchFormProperties {
		Similarity: FormControl<number | null | undefined>,
	}
	export function CreateFaceMatchFormGroup() {
		return new FormGroup<FaceMatchFormProperties>({
			Similarity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.  */
	export interface Face {
		FaceId?: string;
		BoundingBox?: BoundingBox;
		ImageId?: string;
		ExternalImageId?: string;
		Confidence?: number;
		IndexFacesModelVersion?: string;
		UserId?: string;
	}

	/** Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned.  */
	export interface FaceFormProperties {
		FaceId: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		ExternalImageId: FormControl<string | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
		IndexFacesModelVersion: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateFaceFormGroup() {
		return new FormGroup<FaceFormProperties>({
			FaceId: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			ExternalImageId: new FormControl<string | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
			IndexFacesModelVersion: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFaceSearchRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
		SortBy?: FaceSearchSortBy;
	}
	export interface GetFaceSearchRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<FaceSearchSortBy | null | undefined>,
	}
	export function CreateGetFaceSearchRequestFormGroup() {
		return new FormGroup<GetFaceSearchRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<FaceSearchSortBy | null | undefined>(undefined),
		});

	}

	export enum FaceSearchSortBy { INDEX = 0, TIMESTAMP = 1 }

	export interface GetLabelDetectionResponse {
		JobStatus?: VideoJobStatus;
		StatusMessage?: string;
		VideoMetadata?: VideoMetadata;
		NextToken?: string;
		Labels?: Array<LabelDetection>;
		LabelModelVersion?: string;
		JobId?: string;

		/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video?: Video;
		JobTag?: string;
		GetRequestMetadata?: GetLabelDetectionRequestMetadata;
	}
	export interface GetLabelDetectionResponseFormProperties {
		JobStatus: FormControl<VideoJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		LabelModelVersion: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateGetLabelDetectionResponseFormGroup() {
		return new FormGroup<GetLabelDetectionResponseFormProperties>({
			JobStatus: new FormControl<VideoJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			LabelModelVersion: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a label detected in a video analysis request and the time the label was detected in the video.  */
	export interface LabelDetection {
		Timestamp?: number | null;
		Label?: Label;
		StartTimestampMillis?: number | null;
		EndTimestampMillis?: number | null;
		DurationMillis?: number | null;
	}

	/** Information about a label detected in a video analysis request and the time the label was detected in the video.  */
	export interface LabelDetectionFormProperties {
		Timestamp: FormControl<number | null | undefined>,
		StartTimestampMillis: FormControl<number | null | undefined>,
		EndTimestampMillis: FormControl<number | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
	}
	export function CreateLabelDetectionFormGroup() {
		return new FormGroup<LabelDetectionFormProperties>({
			Timestamp: new FormControl<number | null | undefined>(undefined),
			StartTimestampMillis: new FormControl<number | null | undefined>(undefined),
			EndTimestampMillis: new FormControl<number | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains metadata about a label detection request, including the SortBy and AggregateBy options. */
	export interface GetLabelDetectionRequestMetadata {
		SortBy?: ContentModerationSortBy;
		AggregateBy?: ContentModerationAggregateBy;
	}

	/** Contains metadata about a label detection request, including the SortBy and AggregateBy options. */
	export interface GetLabelDetectionRequestMetadataFormProperties {
		SortBy: FormControl<ContentModerationSortBy | null | undefined>,
		AggregateBy: FormControl<ContentModerationAggregateBy | null | undefined>,
	}
	export function CreateGetLabelDetectionRequestMetadataFormGroup() {
		return new FormGroup<GetLabelDetectionRequestMetadataFormProperties>({
			SortBy: new FormControl<ContentModerationSortBy | null | undefined>(undefined),
			AggregateBy: new FormControl<ContentModerationAggregateBy | null | undefined>(undefined),
		});

	}

	export interface GetLabelDetectionRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
		SortBy?: ContentModerationSortBy;
		AggregateBy?: ContentModerationAggregateBy;
	}
	export interface GetLabelDetectionRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<ContentModerationSortBy | null | undefined>,
		AggregateBy: FormControl<ContentModerationAggregateBy | null | undefined>,
	}
	export function CreateGetLabelDetectionRequestFormGroup() {
		return new FormGroup<GetLabelDetectionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<ContentModerationSortBy | null | undefined>(undefined),
			AggregateBy: new FormControl<ContentModerationAggregateBy | null | undefined>(undefined),
		});

	}

	export interface GetPersonTrackingResponse {
		JobStatus?: VideoJobStatus;
		StatusMessage?: string;
		VideoMetadata?: VideoMetadata;
		NextToken?: string;
		Persons?: Array<PersonDetection>;
		JobId?: string;

		/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video?: Video;
		JobTag?: string;
	}
	export interface GetPersonTrackingResponseFormProperties {
		JobStatus: FormControl<VideoJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateGetPersonTrackingResponseFormGroup() {
		return new FormGroup<GetPersonTrackingResponseFormProperties>({
			JobStatus: new FormControl<VideoJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p> */
	export interface PersonDetection {
		Timestamp?: number | null;
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

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
		SortBy?: FaceSearchSortBy;
	}
	export interface GetPersonTrackingRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<FaceSearchSortBy | null | undefined>,
	}
	export function CreateGetPersonTrackingRequestFormGroup() {
		return new FormGroup<GetPersonTrackingRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<FaceSearchSortBy | null | undefined>(undefined),
		});

	}

	export interface GetSegmentDetectionResponse {
		JobStatus?: VideoJobStatus;
		StatusMessage?: string;
		VideoMetadata?: Array<VideoMetadata>;
		AudioMetadata?: Array<AudioMetadata>;
		NextToken?: string;
		Segments?: Array<SegmentDetection>;
		SelectedSegmentTypes?: Array<SegmentTypeInfo>;
		JobId?: string;

		/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video?: Video;
		JobTag?: string;
	}
	export interface GetSegmentDetectionResponseFormProperties {
		JobStatus: FormControl<VideoJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateGetSegmentDetectionResponseFormGroup() {
		return new FormGroup<GetSegmentDetectionResponseFormProperties>({
			JobStatus: new FormControl<VideoJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>.  */
	export interface AudioMetadata {
		Codec?: string;
		DurationMillis?: number | null;
		SampleRate?: number | null;
		NumberOfChannels?: number | null;
	}

	/** Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>.  */
	export interface AudioMetadataFormProperties {
		Codec: FormControl<string | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
		SampleRate: FormControl<number | null | undefined>,
		NumberOfChannels: FormControl<number | null | undefined>,
	}
	export function CreateAudioMetadataFormGroup() {
		return new FormGroup<AudioMetadataFormProperties>({
			Codec: new FormControl<string | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			SampleRate: new FormControl<number | null | undefined>(undefined),
			NumberOfChannels: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>.  */
	export interface SegmentDetection {
		Type?: SegmentType;
		StartTimestampMillis?: number | null;
		EndTimestampMillis?: number | null;
		DurationMillis?: number | null;
		StartTimecodeSMPTE?: string;
		EndTimecodeSMPTE?: string;
		DurationSMPTE?: string;
		TechnicalCueSegment?: TechnicalCueSegment;
		ShotSegment?: ShotSegment;
		StartFrameNumber?: number | null;
		EndFrameNumber?: number | null;
		DurationFrames?: number | null;
	}

	/** A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>.  */
	export interface SegmentDetectionFormProperties {
		Type: FormControl<SegmentType | null | undefined>,
		StartTimestampMillis: FormControl<number | null | undefined>,
		EndTimestampMillis: FormControl<number | null | undefined>,
		DurationMillis: FormControl<number | null | undefined>,
		StartTimecodeSMPTE: FormControl<string | null | undefined>,
		EndTimecodeSMPTE: FormControl<string | null | undefined>,
		DurationSMPTE: FormControl<string | null | undefined>,
		StartFrameNumber: FormControl<number | null | undefined>,
		EndFrameNumber: FormControl<number | null | undefined>,
		DurationFrames: FormControl<number | null | undefined>,
	}
	export function CreateSegmentDetectionFormGroup() {
		return new FormGroup<SegmentDetectionFormProperties>({
			Type: new FormControl<SegmentType | null | undefined>(undefined),
			StartTimestampMillis: new FormControl<number | null | undefined>(undefined),
			EndTimestampMillis: new FormControl<number | null | undefined>(undefined),
			DurationMillis: new FormControl<number | null | undefined>(undefined),
			StartTimecodeSMPTE: new FormControl<string | null | undefined>(undefined),
			EndTimecodeSMPTE: new FormControl<string | null | undefined>(undefined),
			DurationSMPTE: new FormControl<string | null | undefined>(undefined),
			StartFrameNumber: new FormControl<number | null | undefined>(undefined),
			EndFrameNumber: new FormControl<number | null | undefined>(undefined),
			DurationFrames: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SegmentType { TECHNICAL_CUE = 0, SHOT = 1 }


	/** Information about a technical cue segment. For more information, see <a>SegmentDetection</a>. */
	export interface TechnicalCueSegment {
		Type?: TechnicalCueType;
		Confidence?: number;
	}

	/** Information about a technical cue segment. For more information, see <a>SegmentDetection</a>. */
	export interface TechnicalCueSegmentFormProperties {
		Type: FormControl<TechnicalCueType | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateTechnicalCueSegmentFormGroup() {
		return new FormGroup<TechnicalCueSegmentFormProperties>({
			Type: new FormControl<TechnicalCueType | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TechnicalCueType { ColorBars = 0, EndCredits = 1, BlackFrames = 2, OpeningCredits = 3, StudioLogo = 4, Slate = 5, Content = 6 }


	/** Information about a shot detection segment detected in a video. For more information, see <a>SegmentDetection</a>. */
	export interface ShotSegment {
		Index?: number | null;
		Confidence?: number;
	}

	/** Information about a shot detection segment detected in a video. For more information, see <a>SegmentDetection</a>. */
	export interface ShotSegmentFormProperties {
		Index: FormControl<number | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
	}
	export function CreateShotSegmentFormGroup() {
		return new FormGroup<ShotSegmentFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>. */
	export interface SegmentTypeInfo {
		Type?: SegmentType;
		ModelVersion?: string;
	}

	/** Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>. */
	export interface SegmentTypeInfoFormProperties {
		Type: FormControl<SegmentType | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateSegmentTypeInfoFormGroup() {
		return new FormGroup<SegmentTypeInfoFormProperties>({
			Type: new FormControl<SegmentType | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSegmentDetectionRequest {

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetSegmentDetectionRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSegmentDetectionRequestFormGroup() {
		return new FormGroup<GetSegmentDetectionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTextDetectionResponse {
		JobStatus?: VideoJobStatus;
		StatusMessage?: string;

		/** Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation. */
		VideoMetadata?: VideoMetadata;
		TextDetections?: Array<TextDetectionResult>;
		NextToken?: string;
		TextModelVersion?: string;
		JobId?: string;

		/** Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi. */
		Video?: Video;
		JobTag?: string;
	}
	export interface GetTextDetectionResponseFormProperties {
		JobStatus: FormControl<VideoJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		TextModelVersion: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateGetTextDetectionResponseFormGroup() {
		return new FormGroup<GetTextDetectionResponseFormProperties>({
			JobStatus: new FormControl<VideoJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			TextModelVersion: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen. */
	export interface TextDetectionResult {
		Timestamp?: number | null;
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

		/** Required */
		JobId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetTextDetectionRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTextDetectionRequestFormGroup() {
		return new FormGroup<GetTextDetectionRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IndexFacesResponse {
		FaceRecords?: Array<FaceRecord>;
		OrientationCorrection?: OrientationCorrection;
		FaceModelVersion?: string;
		UnindexedFaces?: Array<UnindexedFace>;
	}
	export interface IndexFacesResponseFormProperties {
		OrientationCorrection: FormControl<OrientationCorrection | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateIndexFacesResponseFormGroup() {
		return new FormGroup<IndexFacesResponseFormProperties>({
			OrientationCorrection: new FormControl<OrientationCorrection | null | undefined>(undefined),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database. */
	export interface FaceRecord {
		Face?: Face;
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

		/** Required */
		CollectionId: string;

		/** Required */
		Image: Image;
		ExternalImageId?: string;
		DetectionAttributes?: Array<Attribute>;
		MaxFaces?: number | null;
		QualityFilter?: QualityFilter;
	}
	export interface IndexFacesRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
		ExternalImageId: FormControl<string | null | undefined>,
		MaxFaces: FormControl<number | null | undefined>,
		QualityFilter: FormControl<QualityFilter | null | undefined>,
	}
	export function CreateIndexFacesRequestFormGroup() {
		return new FormGroup<IndexFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalImageId: new FormControl<string | null | undefined>(undefined),
			MaxFaces: new FormControl<number | null | undefined>(undefined),
			QualityFilter: new FormControl<QualityFilter | null | undefined>(undefined),
		});

	}

	export interface ListCollectionsResponse {
		CollectionIds?: Array<string>;
		NextToken?: string;
		FaceModelVersions?: Array<string>;
	}
	export interface ListCollectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollectionsResponseFormGroup() {
		return new FormGroup<ListCollectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCollectionsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListCollectionsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCollectionsRequestFormGroup() {
		return new FormGroup<ListCollectionsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatasetEntriesResponse {
		DatasetEntries?: Array<string>;
		NextToken?: string;
	}
	export interface ListDatasetEntriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetEntriesResponseFormGroup() {
		return new FormGroup<ListDatasetEntriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatasetEntriesRequest {

		/** Required */
		DatasetArn: string;
		ContainsLabels?: Array<string>;
		Labeled?: boolean | null;
		SourceRefContains?: string;
		HasErrors?: boolean | null;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatasetEntriesRequestFormProperties {

		/** Required */
		DatasetArn: FormControl<string | null | undefined>,
		Labeled: FormControl<boolean | null | undefined>,
		SourceRefContains: FormControl<string | null | undefined>,
		HasErrors: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetEntriesRequestFormGroup() {
		return new FormGroup<ListDatasetEntriesRequestFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Labeled: new FormControl<boolean | null | undefined>(undefined),
			SourceRefContains: new FormControl<string | null | undefined>(undefined),
			HasErrors: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatasetLabelsResponse {
		DatasetLabelDescriptions?: Array<DatasetLabelDescription>;
		NextToken?: string;
	}
	export interface ListDatasetLabelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetLabelsResponseFormGroup() {
		return new FormGroup<ListDatasetLabelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes a dataset label. For more information, see <a>ListDatasetLabels</a>.  */
	export interface DatasetLabelDescription {
		LabelName?: string;
		LabelStats?: DatasetLabelStats;
	}

	/**  Describes a dataset label. For more information, see <a>ListDatasetLabels</a>.  */
	export interface DatasetLabelDescriptionFormProperties {
		LabelName: FormControl<string | null | undefined>,
	}
	export function CreateDatasetLabelDescriptionFormGroup() {
		return new FormGroup<DatasetLabelDescriptionFormProperties>({
			LabelName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Statistics about a label used in a dataset. For more information, see <a>DatasetLabelDescription</a>.  */
	export interface DatasetLabelStats {
		EntryCount?: number | null;
		BoundingBoxCount?: number | null;
	}

	/**  Statistics about a label used in a dataset. For more information, see <a>DatasetLabelDescription</a>.  */
	export interface DatasetLabelStatsFormProperties {
		EntryCount: FormControl<number | null | undefined>,
		BoundingBoxCount: FormControl<number | null | undefined>,
	}
	export function CreateDatasetLabelStatsFormGroup() {
		return new FormGroup<DatasetLabelStatsFormProperties>({
			EntryCount: new FormControl<number | null | undefined>(undefined),
			BoundingBoxCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatasetLabelsRequest {

		/** Required */
		DatasetArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatasetLabelsRequestFormProperties {

		/** Required */
		DatasetArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetLabelsRequestFormGroup() {
		return new FormGroup<ListDatasetLabelsRequestFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFacesResponse {
		Faces?: Array<Face>;
		NextToken?: string;
		FaceModelVersion?: string;
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

		/** Required */
		CollectionId: string;
		NextToken?: string;
		MaxResults?: number | null;
		UserId?: string;
		FaceIds?: Array<string>;
	}
	export interface ListFacesRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateListFacesRequestFormGroup() {
		return new FormGroup<ListFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectPoliciesResponse {
		ProjectPolicies?: Array<ProjectPolicy>;
		NextToken?: string;
	}
	export interface ListProjectPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectPoliciesResponseFormGroup() {
		return new FormGroup<ListProjectPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a project policy in the response from <a>ListProjectPolicies</a>. </p> <p> </p> */
	export interface ProjectPolicy {
		ProjectArn?: string;
		PolicyName?: string;
		PolicyRevisionId?: string;
		PolicyDocument?: string;
		CreationTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
	}

	/** <p>Describes a project policy in the response from <a>ListProjectPolicies</a>. </p> <p> </p> */
	export interface ProjectPolicyFormProperties {
		ProjectArn: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateProjectPolicyFormGroup() {
		return new FormGroup<ProjectPolicyFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListProjectPoliciesRequest {

		/** Required */
		ProjectArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListProjectPoliciesRequestFormProperties {

		/** Required */
		ProjectArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProjectPoliciesRequestFormGroup() {
		return new FormGroup<ListProjectPoliciesRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListStreamProcessorsResponse {
		NextToken?: string;
		StreamProcessors?: Array<StreamProcessor>;
	}
	export interface ListStreamProcessorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamProcessorsResponseFormGroup() {
		return new FormGroup<ListStreamProcessorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that recognizes faces or labels in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.  */
	export interface StreamProcessor {
		Name?: string;
		Status?: StreamProcessorStatus;
	}

	/** An object that recognizes faces or labels in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts.  */
	export interface StreamProcessorFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<StreamProcessorStatus | null | undefined>,
	}
	export function CreateStreamProcessorFormGroup() {
		return new FormGroup<StreamProcessorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StreamProcessorStatus | null | undefined>(undefined),
		});

	}

	export interface ListStreamProcessorsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListStreamProcessorsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListStreamProcessorsRequestFormGroup() {
		return new FormGroup<ListStreamProcessorsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListUsersResponse {
		Users?: Array<User>;
		NextToken?: string;
	}
	export interface ListUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of the user stored in a collection. */
	export interface User {
		UserId?: string;
		UserStatus?: UserStatus;
	}

	/** Metadata of the user stored in a collection. */
	export interface UserFormProperties {
		UserId: FormControl<string | null | undefined>,
		UserStatus: FormControl<UserStatus | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			UserStatus: new FormControl<UserStatus | null | undefined>(undefined),
		});

	}

	export interface ListUsersRequest {

		/** Required */
		CollectionId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListUsersRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutProjectPolicyResponse {
		PolicyRevisionId?: string;
	}
	export interface PutProjectPolicyResponseFormProperties {
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutProjectPolicyResponseFormGroup() {
		return new FormGroup<PutProjectPolicyResponseFormProperties>({
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutProjectPolicyRequest {

		/** Required */
		ProjectArn: string;

		/** Required */
		PolicyName: string;
		PolicyRevisionId?: string;

		/** Required */
		PolicyDocument: string;
	}
	export interface PutProjectPolicyRequestFormProperties {

		/** Required */
		ProjectArn: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,

		/** Required */
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutProjectPolicyRequestFormGroup() {
		return new FormGroup<PutProjectPolicyRequestFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MalformedPolicyDocumentException {
	}
	export interface MalformedPolicyDocumentExceptionFormProperties {
	}
	export function CreateMalformedPolicyDocumentExceptionFormGroup() {
		return new FormGroup<MalformedPolicyDocumentExceptionFormProperties>({
		});

	}

	export interface RecognizeCelebritiesResponse {
		CelebrityFaces?: Array<Celebrity>;
		UnrecognizedFaces?: Array<ComparedFace>;
		OrientationCorrection?: OrientationCorrection;
	}
	export interface RecognizeCelebritiesResponseFormProperties {
		OrientationCorrection: FormControl<OrientationCorrection | null | undefined>,
	}
	export function CreateRecognizeCelebritiesResponseFormGroup() {
		return new FormGroup<RecognizeCelebritiesResponseFormProperties>({
			OrientationCorrection: new FormControl<OrientationCorrection | null | undefined>(undefined),
		});

	}


	/** Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation. */
	export interface Celebrity {
		Urls?: Array<string>;
		Name?: string;
		Id?: string;
		Face?: ComparedFace;
		MatchConfidence?: number;

		/** The known gender identity for the celebrity that matches the provided ID. The known gender identity can be Male, Female, Nonbinary, or Unlisted. */
		KnownGender?: KnownGender;
	}

	/** Provides information about a celebrity recognized by the <a>RecognizeCelebrities</a> operation. */
	export interface CelebrityFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		MatchConfidence: FormControl<number | null | undefined>,
	}
	export function CreateCelebrityFormGroup() {
		return new FormGroup<CelebrityFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MatchConfidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RecognizeCelebritiesRequest {

		/** Required */
		Image: Image;
	}
	export interface RecognizeCelebritiesRequestFormProperties {
	}
	export function CreateRecognizeCelebritiesRequestFormGroup() {
		return new FormGroup<RecognizeCelebritiesRequestFormProperties>({
		});

	}

	export interface SearchFacesResponse {
		SearchedFaceId?: string;
		FaceMatches?: Array<FaceMatch>;
		FaceModelVersion?: string;
	}
	export interface SearchFacesResponseFormProperties {
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

		/** Required */
		CollectionId: string;

		/** Required */
		FaceId: string;
		MaxFaces?: number | null;
		FaceMatchThreshold?: number;
	}
	export interface SearchFacesRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,

		/** Required */
		FaceId: FormControl<string | null | undefined>,
		MaxFaces: FormControl<number | null | undefined>,
		FaceMatchThreshold: FormControl<number | null | undefined>,
	}
	export function CreateSearchFacesRequestFormGroup() {
		return new FormGroup<SearchFacesRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxFaces: new FormControl<number | null | undefined>(undefined),
			FaceMatchThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchFacesByImageResponse {
		SearchedFaceBoundingBox?: BoundingBox;
		SearchedFaceConfidence?: number;
		FaceMatches?: Array<FaceMatch>;
		FaceModelVersion?: string;
	}
	export interface SearchFacesByImageResponseFormProperties {
		SearchedFaceConfidence: FormControl<number | null | undefined>,
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateSearchFacesByImageResponseFormGroup() {
		return new FormGroup<SearchFacesByImageResponseFormProperties>({
			SearchedFaceConfidence: new FormControl<number | null | undefined>(undefined),
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchFacesByImageRequest {

		/** Required */
		CollectionId: string;

		/** Required */
		Image: Image;
		MaxFaces?: number | null;
		FaceMatchThreshold?: number;
		QualityFilter?: QualityFilter;
	}
	export interface SearchFacesByImageRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
		MaxFaces: FormControl<number | null | undefined>,
		FaceMatchThreshold: FormControl<number | null | undefined>,
		QualityFilter: FormControl<QualityFilter | null | undefined>,
	}
	export function CreateSearchFacesByImageRequestFormGroup() {
		return new FormGroup<SearchFacesByImageRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxFaces: new FormControl<number | null | undefined>(undefined),
			FaceMatchThreshold: new FormControl<number | null | undefined>(undefined),
			QualityFilter: new FormControl<QualityFilter | null | undefined>(undefined),
		});

	}

	export interface SearchUsersResponse {
		UserMatches?: Array<UserMatch>;
		FaceModelVersion?: string;
		SearchedFace?: SearchedFace;
		SearchedUser?: SearchedUser;
	}
	export interface SearchUsersResponseFormProperties {
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateSearchUsersResponseFormGroup() {
		return new FormGroup<SearchUsersResponseFormProperties>({
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides UserID metadata along with the confidence in the match of this UserID with the input face. */
	export interface UserMatch {
		Similarity?: number;
		User?: MatchedUser;
	}

	/** Provides UserID metadata along with the confidence in the match of this UserID with the input face. */
	export interface UserMatchFormProperties {
		Similarity: FormControl<number | null | undefined>,
	}
	export function CreateUserMatchFormGroup() {
		return new FormGroup<UserMatchFormProperties>({
			Similarity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains metadata for a UserID matched with a given face. */
	export interface MatchedUser {
		UserId?: string;
		UserStatus?: UserStatus;
	}

	/** Contains metadata for a UserID matched with a given face. */
	export interface MatchedUserFormProperties {
		UserId: FormControl<string | null | undefined>,
		UserStatus: FormControl<UserStatus | null | undefined>,
	}
	export function CreateMatchedUserFormGroup() {
		return new FormGroup<MatchedUserFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			UserStatus: new FormControl<UserStatus | null | undefined>(undefined),
		});

	}


	/** Provides face metadata such as FaceId, BoundingBox, Confidence of the input face used for search. */
	export interface SearchedFace {
		FaceId?: string;
	}

	/** Provides face metadata such as FaceId, BoundingBox, Confidence of the input face used for search. */
	export interface SearchedFaceFormProperties {
		FaceId: FormControl<string | null | undefined>,
	}
	export function CreateSearchedFaceFormGroup() {
		return new FormGroup<SearchedFaceFormProperties>({
			FaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata about a User searched for within a collection. */
	export interface SearchedUser {
		UserId?: string;
	}

	/** Contains metadata about a User searched for within a collection. */
	export interface SearchedUserFormProperties {
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateSearchedUserFormGroup() {
		return new FormGroup<SearchedUserFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchUsersRequest {

		/** Required */
		CollectionId: string;
		UserId?: string;
		FaceId?: string;
		UserMatchThreshold?: number;
		MaxUsers?: number | null;
	}
	export interface SearchUsersRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		FaceId: FormControl<string | null | undefined>,
		UserMatchThreshold: FormControl<number | null | undefined>,
		MaxUsers: FormControl<number | null | undefined>,
	}
	export function CreateSearchUsersRequestFormGroup() {
		return new FormGroup<SearchUsersRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined),
			FaceId: new FormControl<string | null | undefined>(undefined),
			UserMatchThreshold: new FormControl<number | null | undefined>(undefined),
			MaxUsers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchUsersByImageResponse {
		UserMatches?: Array<UserMatch>;
		FaceModelVersion?: string;
		SearchedFace?: SearchedFaceDetails;
		UnsearchedFaces?: Array<UnsearchedFace>;
	}
	export interface SearchUsersByImageResponseFormProperties {
		FaceModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateSearchUsersByImageResponseFormGroup() {
		return new FormGroup<SearchUsersByImageResponseFormProperties>({
			FaceModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains data regarding the input face used for a search. */
	export interface SearchedFaceDetails {

		/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter:</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		FaceDetail?: FaceDetail;
	}

	/** Contains data regarding the input face used for a search. */
	export interface SearchedFaceDetailsFormProperties {
	}
	export function CreateSearchedFaceDetailsFormGroup() {
		return new FormGroup<SearchedFaceDetailsFormProperties>({
		});

	}


	/** Face details inferred from the image but not used for search. The response attribute contains reasons for why a face wasn't used for Search.  */
	export interface UnsearchedFace {

		/** <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter:</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p> */
		FaceDetails?: FaceDetail;
		Reasons?: Array<UnsearchedFaceReason>;
	}

	/** Face details inferred from the image but not used for search. The response attribute contains reasons for why a face wasn't used for Search.  */
	export interface UnsearchedFaceFormProperties {
	}
	export function CreateUnsearchedFaceFormGroup() {
		return new FormGroup<UnsearchedFaceFormProperties>({
		});

	}

	export enum UnsearchedFaceReason { FACE_NOT_LARGEST = 0, EXCEEDS_MAX_FACES = 1, EXTREME_POSE = 2, LOW_BRIGHTNESS = 3, LOW_SHARPNESS = 4, LOW_CONFIDENCE = 5, SMALL_BOUNDING_BOX = 6, LOW_FACE_QUALITY = 7 }

	export interface SearchUsersByImageRequest {

		/** Required */
		CollectionId: string;

		/**
		 * <p>Provides the input image either as bytes or an S3 object.</p> <p>You pass image bytes to an Amazon Rekognition API operation by using the <code>Bytes</code> property. For example, you would use the <code>Bytes</code> property to pass an image loaded from a local file system. Image bytes passed by using the <code>Bytes</code> property must be base64-encoded. Your code may not need to encode image bytes if you are using an AWS SDK to call Amazon Rekognition API operations. </p> <p>For more information, see Analyzing an Image Loaded from a Local File System in the Amazon Rekognition Developer Guide.</p> <p> You pass images stored in an S3 bucket to an Amazon Rekognition API operation by using the <code>S3Object</code> property. Images stored in an S3 bucket do not need to be base64-encoded.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes using the Bytes property is not supported. You must first upload the image to an Amazon S3 bucket and then call the operation using the S3Object property.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see How Amazon Rekognition works with IAM in the Amazon Rekognition Developer Guide. </p>
		 * Required
		 */
		Image: Image;
		UserMatchThreshold?: number;
		MaxUsers?: number | null;
		QualityFilter?: QualityFilter;
	}
	export interface SearchUsersByImageRequestFormProperties {

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
		UserMatchThreshold: FormControl<number | null | undefined>,
		MaxUsers: FormControl<number | null | undefined>,
		QualityFilter: FormControl<QualityFilter | null | undefined>,
	}
	export function CreateSearchUsersByImageRequestFormGroup() {
		return new FormGroup<SearchUsersByImageRequestFormProperties>({
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserMatchThreshold: new FormControl<number | null | undefined>(undefined),
			MaxUsers: new FormControl<number | null | undefined>(undefined),
			QualityFilter: new FormControl<QualityFilter | null | undefined>(undefined),
		});

	}

	export interface StartCelebrityRecognitionResponse {
		JobId?: string;
	}
	export interface StartCelebrityRecognitionResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartCelebrityRecognitionResponseFormGroup() {
		return new FormGroup<StartCelebrityRecognitionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartCelebrityRecognitionRequest {

		/** Required */
		Video: Video;
		ClientRequestToken?: string;
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}
	export interface StartCelebrityRecognitionRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartCelebrityRecognitionRequestFormGroup() {
		return new FormGroup<StartCelebrityRecognitionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html">Calling Amazon Rekognition Video operations</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>. */
	export interface NotificationChannel {

		/** Required */
		SNSTopicArn: string;

		/** Required */
		RoleArn: string;
	}

	/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html">Calling Amazon Rekognition Video operations</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>. */
	export interface NotificationChannelFormProperties {

		/** Required */
		SNSTopicArn: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelFormGroup() {
		return new FormGroup<NotificationChannelFormProperties>({
			SNSTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		JobId?: string;
	}
	export interface StartContentModerationResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartContentModerationResponseFormGroup() {
		return new FormGroup<StartContentModerationResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartContentModerationRequest {

		/** Required */
		Video: Video;
		MinConfidence?: number;
		ClientRequestToken?: string;
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}
	export interface StartContentModerationRequestFormProperties {
		MinConfidence: FormControl<number | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartContentModerationRequestFormGroup() {
		return new FormGroup<StartContentModerationRequestFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFaceDetectionResponse {
		JobId?: string;
	}
	export interface StartFaceDetectionResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartFaceDetectionResponseFormGroup() {
		return new FormGroup<StartFaceDetectionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFaceDetectionRequest {

		/** Required */
		Video: Video;
		ClientRequestToken?: string;
		NotificationChannel?: NotificationChannel;
		FaceAttributes?: FaceAttributes;
		JobTag?: string;
	}
	export interface StartFaceDetectionRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		FaceAttributes: FormControl<FaceAttributes | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartFaceDetectionRequestFormGroup() {
		return new FormGroup<StartFaceDetectionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			FaceAttributes: new FormControl<FaceAttributes | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FaceAttributes { DEFAULT = 0, ALL = 1 }

	export interface StartFaceSearchResponse {
		JobId?: string;
	}
	export interface StartFaceSearchResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartFaceSearchResponseFormGroup() {
		return new FormGroup<StartFaceSearchResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFaceSearchRequest {

		/** Required */
		Video: Video;
		ClientRequestToken?: string;
		FaceMatchThreshold?: number;

		/** Required */
		CollectionId: string;
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}
	export interface StartFaceSearchRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		FaceMatchThreshold: FormControl<number | null | undefined>,

		/** Required */
		CollectionId: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartFaceSearchRequestFormGroup() {
		return new FormGroup<StartFaceSearchRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			FaceMatchThreshold: new FormControl<number | null | undefined>(undefined),
			CollectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartLabelDetectionResponse {
		JobId?: string;
	}
	export interface StartLabelDetectionResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartLabelDetectionResponseFormGroup() {
		return new FormGroup<StartLabelDetectionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartLabelDetectionRequest {

		/** Required */
		Video: Video;
		ClientRequestToken?: string;
		MinConfidence?: number;
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
		Features?: Array<LabelDetectionFeatureName>;
		Settings?: LabelDetectionSettings;
	}
	export interface StartLabelDetectionRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		MinConfidence: FormControl<number | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartLabelDetectionRequestFormGroup() {
		return new FormGroup<StartLabelDetectionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			MinConfidence: new FormControl<number | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LabelDetectionFeatureName { GENERAL_LABELS = 0 }


	/** Contains the specified filters that should be applied to a list of returned GENERAL_LABELS. */
	export interface LabelDetectionSettings {

		/** Contains filters for the object labels returned by DetectLabels. Filters can be inclusive, exclusive, or a combination of both and can be applied to individual labels or entire label categories. To see a list of label categories, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels.html">Detecting Labels</a>. */
		GeneralLabels?: GeneralLabelsSettings;
	}

	/** Contains the specified filters that should be applied to a list of returned GENERAL_LABELS. */
	export interface LabelDetectionSettingsFormProperties {
	}
	export function CreateLabelDetectionSettingsFormGroup() {
		return new FormGroup<LabelDetectionSettingsFormProperties>({
		});

	}

	export interface StartPersonTrackingResponse {
		JobId?: string;
	}
	export interface StartPersonTrackingResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartPersonTrackingResponseFormGroup() {
		return new FormGroup<StartPersonTrackingResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPersonTrackingRequest {

		/** Required */
		Video: Video;
		ClientRequestToken?: string;
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
	}
	export interface StartPersonTrackingRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartPersonTrackingRequestFormGroup() {
		return new FormGroup<StartPersonTrackingRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartProjectVersionResponse {
		Status?: ProjectVersionStatus;
	}
	export interface StartProjectVersionResponseFormProperties {
		Status: FormControl<ProjectVersionStatus | null | undefined>,
	}
	export function CreateStartProjectVersionResponseFormGroup() {
		return new FormGroup<StartProjectVersionResponseFormProperties>({
			Status: new FormControl<ProjectVersionStatus | null | undefined>(undefined),
		});

	}

	export interface StartProjectVersionRequest {

		/** Required */
		ProjectVersionArn: string;

		/** Required */
		MinInferenceUnits: number;
		MaxInferenceUnits?: number | null;
	}
	export interface StartProjectVersionRequestFormProperties {

		/** Required */
		ProjectVersionArn: FormControl<string | null | undefined>,

		/** Required */
		MinInferenceUnits: FormControl<number | null | undefined>,
		MaxInferenceUnits: FormControl<number | null | undefined>,
	}
	export function CreateStartProjectVersionRequestFormGroup() {
		return new FormGroup<StartProjectVersionRequestFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MinInferenceUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxInferenceUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartSegmentDetectionResponse {
		JobId?: string;
	}
	export interface StartSegmentDetectionResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartSegmentDetectionResponseFormGroup() {
		return new FormGroup<StartSegmentDetectionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSegmentDetectionRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;
		ClientRequestToken?: string;
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
		Filters?: StartSegmentDetectionFilters;

		/** Required */
		SegmentTypes: Array<SegmentType>;
	}
	export interface StartSegmentDetectionRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartSegmentDetectionRequestFormGroup() {
		return new FormGroup<StartSegmentDetectionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>.  */
	export interface StartSegmentDetectionFilters {
		TechnicalCueFilter?: StartTechnicalCueDetectionFilter;
		ShotFilter?: StartShotDetectionFilter;
	}

	/** Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>.  */
	export interface StartSegmentDetectionFiltersFormProperties {
	}
	export function CreateStartSegmentDetectionFiltersFormGroup() {
		return new FormGroup<StartSegmentDetectionFiltersFormProperties>({
		});

	}


	/** Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>. */
	export interface StartTechnicalCueDetectionFilter {
		MinSegmentConfidence?: number;
		BlackFrame?: BlackFrame;
	}

	/** Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>. */
	export interface StartTechnicalCueDetectionFilterFormProperties {
		MinSegmentConfidence: FormControl<number | null | undefined>,
	}
	export function CreateStartTechnicalCueDetectionFilterFormGroup() {
		return new FormGroup<StartTechnicalCueDetectionFilterFormProperties>({
			MinSegmentConfidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats, and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for. For more information, see <a>StartSegmentDetection</a>.  */
	export interface BlackFrame {
		MaxPixelThreshold?: number;
		MinCoveragePercentage?: number;
	}

	/**  A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats, and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for. For more information, see <a>StartSegmentDetection</a>.  */
	export interface BlackFrameFormProperties {
		MaxPixelThreshold: FormControl<number | null | undefined>,
		MinCoveragePercentage: FormControl<number | null | undefined>,
	}
	export function CreateBlackFrameFormGroup() {
		return new FormGroup<BlackFrameFormProperties>({
			MaxPixelThreshold: new FormControl<number | null | undefined>(undefined),
			MinCoveragePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>. */
	export interface StartShotDetectionFilter {
		MinSegmentConfidence?: number;
	}

	/** Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>. */
	export interface StartShotDetectionFilterFormProperties {
		MinSegmentConfidence: FormControl<number | null | undefined>,
	}
	export function CreateStartShotDetectionFilterFormGroup() {
		return new FormGroup<StartShotDetectionFilterFormProperties>({
			MinSegmentConfidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartStreamProcessorResponse {
		SessionId?: string;
	}
	export interface StartStreamProcessorResponseFormProperties {
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateStartStreamProcessorResponseFormGroup() {
		return new FormGroup<StartStreamProcessorResponseFormProperties>({
			SessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartStreamProcessorRequest {

		/** Required */
		Name: string;
		StartSelector?: StreamProcessingStartSelector;
		StopSelector?: StreamProcessingStopSelector;
	}
	export interface StartStreamProcessorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartStreamProcessorRequestFormGroup() {
		return new FormGroup<StartStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This is a required parameter for label detection stream processors and should not be used to start a face search stream processor. */
	export interface StreamProcessingStartSelector {
		KVSStreamStartSelector?: KinesisVideoStreamStartSelector;
	}

	/** This is a required parameter for label detection stream processors and should not be used to start a face search stream processor. */
	export interface StreamProcessingStartSelectorFormProperties {
	}
	export function CreateStreamProcessingStartSelectorFormGroup() {
		return new FormGroup<StreamProcessingStartSelectorFormProperties>({
		});

	}


	/** Specifies the starting point in a Kinesis stream to start processing. You can use the producer timestamp or the fragment number. One of either producer timestamp or fragment number is required. If you use the producer timestamp, you must put the time in milliseconds. For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>.  */
	export interface KinesisVideoStreamStartSelector {
		ProducerTimestamp?: number | null;
		FragmentNumber?: string;
	}

	/** Specifies the starting point in a Kinesis stream to start processing. You can use the producer timestamp or the fragment number. One of either producer timestamp or fragment number is required. If you use the producer timestamp, you must put the time in milliseconds. For more information about fragment numbers, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_Fragment.html">Fragment</a>.  */
	export interface KinesisVideoStreamStartSelectorFormProperties {
		ProducerTimestamp: FormControl<number | null | undefined>,
		FragmentNumber: FormControl<string | null | undefined>,
	}
	export function CreateKinesisVideoStreamStartSelectorFormGroup() {
		return new FormGroup<KinesisVideoStreamStartSelectorFormProperties>({
			ProducerTimestamp: new FormControl<number | null | undefined>(undefined),
			FragmentNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies when to stop processing the stream. You can specify a maximum amount of time to process the video.  */
	export interface StreamProcessingStopSelector {
		MaxDurationInSeconds?: number | null;
	}

	/**  Specifies when to stop processing the stream. You can specify a maximum amount of time to process the video.  */
	export interface StreamProcessingStopSelectorFormProperties {
		MaxDurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateStreamProcessingStopSelectorFormGroup() {
		return new FormGroup<StreamProcessingStopSelectorFormProperties>({
			MaxDurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartTextDetectionResponse {
		JobId?: string;
	}
	export interface StartTextDetectionResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartTextDetectionResponseFormGroup() {
		return new FormGroup<StartTextDetectionResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTextDetectionRequest {

		/**
		 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
		 * Required
		 */
		Video: Video;
		ClientRequestToken?: string;

		/** The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video.html">Calling Amazon Rekognition Video operations</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>. */
		NotificationChannel?: NotificationChannel;
		JobTag?: string;
		Filters?: StartTextDetectionFilters;
	}
	export interface StartTextDetectionRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
		JobTag: FormControl<string | null | undefined>,
	}
	export function CreateStartTextDetectionRequestFormGroup() {
		return new FormGroup<StartTextDetectionRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			JobTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in. */
	export interface StartTextDetectionFilters {
		WordFilter?: DetectionFilter;
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
		Status?: ProjectVersionStatus;
	}
	export interface StopProjectVersionResponseFormProperties {
		Status: FormControl<ProjectVersionStatus | null | undefined>,
	}
	export function CreateStopProjectVersionResponseFormGroup() {
		return new FormGroup<StopProjectVersionResponseFormProperties>({
			Status: new FormControl<ProjectVersionStatus | null | undefined>(undefined),
		});

	}

	export interface StopProjectVersionRequest {

		/** Required */
		ProjectVersionArn: string;
	}
	export interface StopProjectVersionRequestFormProperties {

		/** Required */
		ProjectVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateStopProjectVersionRequestFormGroup() {
		return new FormGroup<StopProjectVersionRequestFormProperties>({
			ProjectVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;
	}
	export interface StopStreamProcessorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopStreamProcessorRequestFormGroup() {
		return new FormGroup<StopStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDatasetEntriesResponse {
	}
	export interface UpdateDatasetEntriesResponseFormProperties {
	}
	export function CreateUpdateDatasetEntriesResponseFormGroup() {
		return new FormGroup<UpdateDatasetEntriesResponseFormProperties>({
		});

	}

	export interface UpdateDatasetEntriesRequest {

		/** Required */
		DatasetArn: string;

		/** Required */
		Changes: DatasetChanges;
	}
	export interface UpdateDatasetEntriesRequestFormProperties {

		/** Required */
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetEntriesRequestFormGroup() {
		return new FormGroup<UpdateDatasetEntriesRequestFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Describes updates or additions to a dataset. A Single update or addition is an entry (JSON Line) that provides information about a single image. To update an existing entry, you match the <code>source-ref</code> field of the update entry with the <code>source-ref</code> filed of the entry that you want to update. If the <code>source-ref</code> field doesn't match an existing entry, the entry is added to dataset as a new entry.  */
	export interface DatasetChanges {

		/** Required */
		GroundTruth: string;
	}

	/**  Describes updates or additions to a dataset. A Single update or addition is an entry (JSON Line) that provides information about a single image. To update an existing entry, you match the <code>source-ref</code> field of the update entry with the <code>source-ref</code> filed of the entry that you want to update. If the <code>source-ref</code> field doesn't match an existing entry, the entry is added to dataset as a new entry.  */
	export interface DatasetChangesFormProperties {

		/** Required */
		GroundTruth: FormControl<string | null | undefined>,
	}
	export function CreateDatasetChangesFormGroup() {
		return new FormGroup<DatasetChangesFormProperties>({
			GroundTruth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStreamProcessorResponse {
	}
	export interface UpdateStreamProcessorResponseFormProperties {
	}
	export function CreateUpdateStreamProcessorResponseFormGroup() {
		return new FormGroup<UpdateStreamProcessorResponseFormProperties>({
		});

	}

	export interface UpdateStreamProcessorRequest {

		/** Required */
		Name: string;
		SettingsForUpdate?: StreamProcessorSettingsForUpdate;
		RegionsOfInterestForUpdate?: Array<RegionOfInterest>;
		DataSharingPreferenceForUpdate?: StreamProcessorDataSharingPreference;
		ParametersToDelete?: Array<StreamProcessorParameterToDelete>;
	}
	export interface UpdateStreamProcessorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamProcessorRequestFormGroup() {
		return new FormGroup<UpdateStreamProcessorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The stream processor settings that you want to update. <code>ConnectedHome</code> settings can be updated to detect different labels with a different minimum confidence.  */
	export interface StreamProcessorSettingsForUpdate {
		ConnectedHomeForUpdate?: ConnectedHomeSettingsForUpdate;
	}

	/**  The stream processor settings that you want to update. <code>ConnectedHome</code> settings can be updated to detect different labels with a different minimum confidence.  */
	export interface StreamProcessorSettingsForUpdateFormProperties {
	}
	export function CreateStreamProcessorSettingsForUpdateFormGroup() {
		return new FormGroup<StreamProcessorSettingsForUpdateFormProperties>({
		});

	}


	/**  The label detection settings you want to use in your stream processor. This includes the labels you want the stream processor to detect and the minimum confidence level allowed to label objects.  */
	export interface ConnectedHomeSettingsForUpdate {
		Labels?: Array<string>;
		MinConfidence?: number;
	}

	/**  The label detection settings you want to use in your stream processor. This includes the labels you want the stream processor to detect and the minimum confidence level allowed to label objects.  */
	export interface ConnectedHomeSettingsForUpdateFormProperties {
		MinConfidence: FormControl<number | null | undefined>,
	}
	export function CreateConnectedHomeSettingsForUpdateFormGroup() {
		return new FormGroup<ConnectedHomeSettingsForUpdateFormProperties>({
			MinConfidence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StreamProcessorParameterToDelete { ConnectedHomeMinConfidence = 0, RegionsOfInterest = 1 }

	export enum LabelDetectionSortBy { NAME = 0, TIMESTAMP = 1 }

	export enum LabelDetectionAggregateBy { TIMESTAMPS = 0, SEGMENTS = 1 }

	export enum PersonTrackingSortBy { INDEX = 0, TIMESTAMP = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates one or more faces with an existing UserID. Takes an array of <code>FaceIds</code>. Each <code>FaceId</code> that are present in the <code>FaceIds</code> list is associated with the provided UserID. The maximum number of total <code>FaceIds</code> per UserID is 100. </p> <p>The <code>UserMatchThreshold</code> parameter specifies the minimum user match confidence required for the face to be associated with a UserID that has at least one <code>FaceID</code> already associated. This ensures that the <code>FaceIds</code> are associated with the right UserID. The value ranges from 0-100 and default value is 75. </p> <p>If successful, an array of <code>AssociatedFace</code> objects containing the associated <code>FaceIds</code> is returned. If a given face is already associated with the given <code>UserID</code>, it will be ignored and will not be returned in the response. If a given face is already associated to a different <code>UserID</code>, isn't found in the collection, doesn’t meet the <code>UserMatchThreshold</code>, or there are already 100 faces associated with the <code>UserID</code>, it will be returned as part of an array of <code>UnsuccessfulFaceAssociations.</code> </p> <p>The <code>UserStatus</code> reflects the status of an operation which updates a UserID representation with a list of given faces. The <code>UserStatus</code> can be: </p> <ul> <li> <p>ACTIVE - All associations or disassociations of FaceID(s) for a UserID are complete.</p> </li> <li> <p>CREATED - A UserID has been created, but has no FaceID(s) associated with it.</p> </li> <li> <p>UPDATING - A UserID is being updated and there are current associations or disassociations of FaceID(s) taking place.</p> </li> </ul>
		 * Post #X-Amz-Target=RekognitionService.AssociateFaces
		 * @return {AssociateFacesResponse} Success
		 */
		AssociateFaces(requestBody: AssociateFacesRequest): Observable<AssociateFacesResponse> {
			return this.http.post<AssociateFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.AssociateFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Compares a face in the <i>source</i> input image with each of the 100 largest faces detected in the <i>target</i> input image. </p> <p> If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. </p> <note> <p>CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use <code>CompareFaces</code> to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action.</p> </note> <p>You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. </p> <p>In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, roll, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match. </p> <note> <p>By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the <code>SimilarityThreshold</code> parameter.</p> </note> <p> <code>CompareFaces</code> also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use <code>QualityFilter</code> to set the quality bar by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>. </p> <p>If the image doesn't contain Exif metadata, <code>CompareFaces</code> returns orientation information for the source and target images. Use these values to display the images with the correct image orientation.</p> <p>If no faces are detected in the source or target images, <code>CompareFaces</code> returns an <code>InvalidParameterException</code> error. </p> <note> <p> This is a stateless API operation. That is, data returned by this operation doesn't persist.</p> </note> <p>For an example, see Comparing Faces in Images in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:CompareFaces</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CompareFaces
		 * @return {CompareFacesResponse} Success
		 */
		CompareFaces(requestBody: CompareFacesRequest): Observable<CompareFacesResponse> {
			return this.http.post<CompareFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CompareFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and destination projects can be in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. </p> <p>To copy a model version to a different AWS account, you need to create a resource-based policy known as a <i>project policy</i>. You attach the project policy to the source project by calling <a>PutProjectPolicy</a>. The project policy gives permission to copy the model version from a trusting AWS account to a trusted account.</p> <p>For more information creating and attaching a project policy, see Attaching a project policy (SDK) in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p> <p>If you are copying a model version to a project in the same AWS account, you don't need to create a project policy.</p> <note> <p>To copy a model, the destination project, source project, and source model version must already exist.</p> </note> <p>Copying a model version takes a while to complete. To get the current status, call <a>DescribeProjectVersions</a> and check the value of <code>Status</code> in the <a>ProjectVersionDescription</a> object. The copy operation has finished when the value of <code>Status</code> is <code>COPYING_COMPLETED</code>.</p> <p>This operation requires permissions to perform the <code>rekognition:CopyProjectVersion</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CopyProjectVersion
		 * @return {CopyProjectVersionResponse} Success
		 */
		CopyProjectVersion(requestBody: CopyProjectVersionRequest): Observable<CopyProjectVersionResponse> {
			return this.http.post<CopyProjectVersionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CopyProjectVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a collection in an AWS Region. You can add faces to the collection using the <a>IndexFaces</a> operation. </p> <p>For example, you might create collections, one for each of your application users. A user can then index faces using the <code>IndexFaces</code> operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container. </p> <p>When you create a collection, it is associated with the latest version of the face model version.</p> <note> <p>Collection names are case-sensitive.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:CreateCollection</code> action. If you want to tag your collection, you also require permission to perform the <code>rekognition:TagResource</code> operation.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateCollection
		 * @return {CreateCollectionResponse} Success
		 */
		CreateCollection(requestBody: CreateCollectionRequest): Observable<CreateCollectionResponse> {
			return this.http.post<CreateCollectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon Rekognition Custom Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an existing Amazon Rekognition Custom Labels dataset.</p> <p>To create a training dataset for a project, specify <code>TRAIN</code> for the value of <code>DatasetType</code>. To create the test dataset for a project, specify <code>TEST</code> for the value of <code>DatasetType</code>. </p> <p>The response from <code>CreateDataset</code> is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a while to complete. Use <a>DescribeDataset</a> to check the current status. The dataset created successfully if the value of <code>Status</code> is <code>CREATE_COMPLETE</code>. </p> <p>To check if any non-terminal errors occurred, call <a>ListDatasetEntries</a> and check for the presence of <code>errors</code> lists in the JSON Lines.</p> <p>Dataset creation fails if a terminal error occurs (<code>Status</code> = <code>CREATE_FAILED</code>). Currently, you can't access the terminal error information. </p> <p>For more information, see Creating dataset in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.</p> <p>This operation requires permissions to perform the <code>rekognition:CreateDataset</code> action. If you want to copy an existing dataset, you also require permission to perform the <code>rekognition:ListDatasetEntries</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateDataset
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetRequest): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This API operation initiates a Face Liveness session. It returns a <code>SessionId</code>, which you can use to start streaming Face Liveness video and get the results for a Face Liveness session. </p> <p>You can use the <code>OutputConfig</code> option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. </p> <p>You can use <code>AuditImagesLimit</code> to limit the number of audit images returned when <code>GetFaceLivenessSessionResults</code> is called. This number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the selfie-video. </p>
		 * Post #X-Amz-Target=RekognitionService.CreateFaceLivenessSession
		 * @return {CreateFaceLivenessSessionResponse} Success
		 */
		CreateFaceLivenessSession(requestBody: CreateFaceLivenessSessionRequest): Observable<CreateFaceLivenessSessionResponse> {
			return this.http.post<CreateFaceLivenessSessionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateFaceLivenessSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon Rekognition Custom Labels project. A project is a group of resources (datasets, model versions) that you use to create and manage Amazon Rekognition Custom Labels models. </p> <p>This operation requires permissions to perform the <code>rekognition:CreateProject</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateProject
		 * @return {CreateProjectResponse} Success
		 */
		CreateProject(requestBody: CreateProjectRequest): Observable<CreateProjectResponse> {
			return this.http.post<CreateProjectResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new version of a model and begins training. Models are managed as part of an Amazon Rekognition Custom Labels project. The response from <code>CreateProjectVersion</code> is an Amazon Resource Name (ARN) for the version of the model. </p> <p>Training uses the training and test datasets associated with the project. For more information, see Creating training and test dataset in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p> <note> <p>You can train a model in a project that doesn't have associated datasets by specifying manifest files in the <code>TrainingData</code> and <code>TestingData</code> fields. </p> <p>If you open the console after training a model with manifest files, Amazon Rekognition Custom Labels creates the datasets for you using the most recent manifest files. You can no longer train a model version for the project by specifying manifest files. </p> <p>Instead of training with a project without associated datasets, we recommend that you use the manifest files to create training and test datasets for the project.</p> </note> <p>Training takes a while to complete. You can get the current status by calling <a>DescribeProjectVersions</a>. Training completed successfully if the value of the <code>Status</code> field is <code>TRAINING_COMPLETED</code>.</p> <p>If training fails, see Debugging a failed model training in the <i>Amazon Rekognition Custom Labels</i> developer guide. </p> <p>Once training has successfully completed, call <a>DescribeProjectVersions</a> to get the training results and evaluate the model. For more information, see Improving a trained Amazon Rekognition Custom Labels model in the <i>Amazon Rekognition Custom Labels</i> developers guide. </p> <p>After evaluating the model, you start the model by calling <a>StartProjectVersion</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:CreateProjectVersion</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateProjectVersion
		 * @return {CreateProjectVersionResponse} Success
		 */
		CreateProjectVersion(requestBody: CreateProjectVersionRequest): Observable<CreateProjectVersionResponse> {
			return this.http.post<CreateProjectVersionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateProjectVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video.</p> <p>Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels.</p> <ul> <li> <p>If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream (<code>Input</code>) and a Kinesis data stream (<code>Output</code>) stream for receiving the output. You must use the <code>FaceSearch</code> option in <code>Settings</code>, specifying the collection that contains the faces you want to recognize. After you have finished analyzing a streaming video, use <a>StopStreamProcessor</a> to stop processing.</p> </li> <li> <p>If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream (<code>Input</code>), Amazon S3 bucket information (<code>Output</code>), and an Amazon SNS topic ARN (<code>NotificationChannel</code>). You can also provide a KMS key ID to encrypt the data sent to your Amazon S3 bucket. You specify what you want to detect by using the <code>ConnectedHome</code> option in settings, and selecting one of the following: <code>PERSON</code>, <code>PET</code>, <code>PACKAGE</code>, <code>ALL</code> You can also specify where in the frame you want Amazon Rekognition to monitor with <code>RegionsOfInterest</code>. When you run the <a>StartStreamProcessor</a> operation on a label detection stream processor, you input start and stop information to determine the length of the processing time.</p> </li> </ul> <p> Use <code>Name</code> to assign an identifier for the stream processor. You use <code>Name</code> to manage the stream processor. For example, you can start processing the source video by calling <a>StartStreamProcessor</a> with the <code>Name</code> field. </p> <p>This operation requires permissions to perform the <code>rekognition:CreateStreamProcessor</code> action. If you want to tag your stream processor, you also require permission to perform the <code>rekognition:TagResource</code> operation.</p>
		 * Post #X-Amz-Target=RekognitionService.CreateStreamProcessor
		 * @return {CreateStreamProcessorResponse} Success
		 */
		CreateStreamProcessor(requestBody: CreateStreamProcessorRequest): Observable<CreateStreamProcessorResponse> {
			return this.http.post<CreateStreamProcessorResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateStreamProcessor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new User within a collection specified by <code>CollectionId</code>. Takes <code>UserId</code> as a parameter, which is a user provided ID which should be unique within the collection. The provided <code>UserId</code> will alias the system generated UUID to make the <code>UserId</code> more user friendly. </p> <p>Uses a <code>ClientToken</code>, an idempotency token that ensures a call to <code>CreateUser</code> completes only once. If the value is not supplied, the AWS SDK generates an idempotency token for the requests. This prevents retries after a network error results from making multiple <code>CreateUser</code> calls. </p>
		 * Post #X-Amz-Target=RekognitionService.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/delete-collection-procedure.html">Deleting a collection</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteCollection</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DeleteCollection
		 * @return {DeleteCollectionResponse} Success
		 */
		DeleteCollection(requestBody: DeleteCollectionRequest): Observable<DeleteCollectionResponse> {
			return this.http.post<DeleteCollectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing Amazon Rekognition Custom Labels dataset. Deleting a dataset might take while. Use <a>DescribeDataset</a> to check the current status. The dataset is still deleting if the value of <code>Status</code> is <code>DELETE_IN_PROGRESS</code>. If you try to access the dataset after it is deleted, you get a <code>ResourceNotFoundException</code> exception. </p> <p>You can't delete a dataset while it is creating (<code>Status</code> = <code>CREATE_IN_PROGRESS</code>) or if the dataset is updating (<code>Status</code> = <code>UPDATE_IN_PROGRESS</code>).</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteDataset</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DeleteDataset
		 * @return {DeleteDatasetResponse} Success
		 */
		DeleteDataset(requestBody: DeleteDatasetRequest): Observable<DeleteDatasetResponse> {
			return this.http.post<DeleteDatasetResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Deletes an Amazon Rekognition Custom Labels project. To delete a project you must first delete all models associated with the project. To delete a model, see <a>DeleteProjectVersion</a>.</p> <p> <code>DeleteProject</code> is an asynchronous operation. To check if the project is deleted, call <a>DescribeProjects</a>. The project is deleted when the project no longer appears in the response. Be aware that deleting a given project will also delete any <code>ProjectPolicies</code> associated with that project.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProject</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.DeleteProject
		 * @return {DeleteProjectResponse} Success
		 */
		DeleteProject(requestBody: DeleteProjectRequest): Observable<DeleteProjectResponse> {
			return this.http.post<DeleteProjectResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing project policy.</p> <p>To get a list of project policies attached to a project, call <a>ListProjectPolicies</a>. To attach a project policy to a project, call <a>PutProjectPolicy</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProjectPolicy</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DeleteProjectPolicy
		 * @return {DeleteProjectPolicyResponse} Success
		 */
		DeleteProjectPolicy(requestBody: DeleteProjectPolicyRequest): Observable<DeleteProjectPolicyResponse> {
			return this.http.post<DeleteProjectPolicyResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteProjectPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon Rekognition Custom Labels model. </p> <p>You can't delete a model if it is running or if it is training. To check the status of a model, use the <code>Status</code> field returned from <a>DescribeProjectVersions</a>. To stop a running model call <a>StopProjectVersion</a>. If the model is training, wait until it finishes.</p> <p>This operation requires permissions to perform the <code>rekognition:DeleteProjectVersion</code> action. </p>
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
		 * Deletes the specified UserID within the collection. Faces that are associated with the UserID are disassociated from the UserID before deleting the specified UserID. If the specified <code>Collection</code> or <code>UserID</code> is already deleted or not found, a <code>ResourceNotFoundException</code> will be thrown. If the action is successful with a 200 response, an empty HTTP body is returned.
		 * Post #X-Amz-Target=RekognitionService.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<DeleteUserResponse> {
			return this.http.post<DeleteUserResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p> Describes an Amazon Rekognition Custom Labels dataset. You can get information such as the current status of a dataset and statistics about the images and labels in a dataset. </p> <p>This operation requires permissions to perform the <code>rekognition:DescribeDataset</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DescribeDataset
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(requestBody: DescribeDatasetRequest): Observable<DescribeDatasetResponse> {
			return this.http.post<DescribeDatasetResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DescribeDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists and describes the versions of a model in an Amazon Rekognition Custom Labels project. You can specify up to 10 model versions in <code>ProjectVersionArns</code>. If you don't specify a value, descriptions for all model versions in the project are returned.</p> <p>This operation requires permissions to perform the <code>rekognition:DescribeProjectVersions</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DescribeProjectVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeProjectVersionsResponse} Success
		 */
		DescribeProjectVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeProjectVersionsRequest): Observable<DescribeProjectVersionsResponse> {
			return this.http.post<DescribeProjectVersionsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DescribeProjectVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about your Amazon Rekognition Custom Labels projects. </p> <p>This operation requires permissions to perform the <code>rekognition:DescribeProjects</code> action.</p>
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
		 * <p>Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. </p> <p>You specify which version of a model version to use by using the <code>ProjectVersionArn</code> input parameter. </p> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> For each object that the model version detects on an image, the API returns a (<code>CustomLabel</code>) object in an array (<code>CustomLabels</code>). Each <code>CustomLabel</code> object provides the label name (<code>Name</code>), the level of confidence that the image contains the object (<code>Confidence</code>), and object location information, if it exists, for the label on the image (<code>Geometry</code>). </p> <p>To filter labels that are returned, specify a value for <code>MinConfidence</code>. <code>DetectCustomLabelsLabels</code> only returns labels with a confidence that's higher than the specified value. The value of <code>MinConfidence</code> maps to the assumed threshold values created during training. For more information, see <i>Assumed threshold</i> in the Amazon Rekognition Custom Labels Developer Guide. Amazon Rekognition Custom Labels metrics expresses an assumed threshold as a floating point value between 0-1. The range of <code>MinConfidence</code> normalizes the threshold value to a percentage value (0-100). Confidence responses from <code>DetectCustomLabels</code> are also returned as a percentage. You can use <code>MinConfidence</code> to change the precision and recall or your model. For more information, see <i>Analyzing an image</i> in the Amazon Rekognition Custom Labels Developer Guide. </p> <p>If you don't specify a value for <code>MinConfidence</code>, <code>DetectCustomLabels</code> returns labels based on the assumed threshold of each label.</p> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectCustomLabels</code> action. </p> <p>For more information, see <i>Analyzing an image</i> in the Amazon Rekognition Custom Labels Developer Guide. </p>
		 * Post #X-Amz-Target=RekognitionService.DetectCustomLabels
		 * @return {DetectCustomLabelsResponse} Success
		 */
		DetectCustomLabels(requestBody: DetectCustomLabelsRequest): Observable<DetectCustomLabelsResponse> {
			return this.http.post<DetectCustomLabelsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectCustomLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects faces within an image that is provided as input.</p> <p> <code>DetectFaces</code> detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on.</p> <p>The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. </p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <note> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> </note> <p>This operation requires permissions to perform the <code>rekognition:DetectFaces</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.DetectFaces
		 * @return {DetectFacesResponse} Success
		 */
		DetectFaces(requestBody: DetectFacesRequest): Observable<DetectFacesResponse> {
			return this.http.post<DetectFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. </p> <p>For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide.</p> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> <b>Optional Parameters</b> </p> <p>You can specify one or both of the <code>GENERAL_LABELS</code> and <code>IMAGE_PROPERTIES</code> feature types when calling the DetectLabels API. Including <code>GENERAL_LABELS</code> will ensure the response includes the labels detected in the input image, while including <code>IMAGE_PROPERTIES </code>will ensure the response includes information about the image quality and color.</p> <p>When using <code>GENERAL_LABELS</code> and/or <code>IMAGE_PROPERTIES</code> you can provide filtering criteria to the Settings parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive filters, or a combination of inclusive and exclusive filters. For more information on filtering see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels-detect-labels-image.html">Detecting Labels in an Image</a>.</p> <p>When getting labels, you can specify <code>MinConfidence</code> to control the confidence threshold for the labels returned. The default is 55%. You can also add the <code>MaxLabels</code> parameter to limit the number of labels returned. The default and upper limit is 1000 labels. These arguments are only valid when supplying GENERAL_LABELS as a feature type.</p> <p> <b>Response Elements</b> </p> <p> For each object, scene, and concept the API returns one or more labels. The API returns the following types of information about labels:</p> <ul> <li> <p> Name - The name of the detected label. </p> </li> <li> <p> Confidence - The level of confidence in the label assigned to a detected object. </p> </li> <li> <p> Parents - The ancestor labels for a detected label. DetectLabels returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response. </p> </li> <li> <p> Aliases - Possible Aliases for the label. </p> </li> <li> <p> Categories - The label categories that the detected label belongs to. </p> </li> <li> <p> BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box. </p> </li> </ul> <p> The API returns the following information regarding the image, as part of the ImageProperties structure:</p> <ul> <li> <p>Quality - Information about the Sharpness, Brightness, and Contrast of the input image, scored between 0 to 100. Image quality is returned for the entire image, as well as the background and the foreground. </p> </li> <li> <p>Dominant Color - An array of the dominant colors in the image. </p> </li> <li> <p>Foreground - Information about the sharpness, brightness, and dominant colors of the input image’s foreground. </p> </li> <li> <p>Background - Information about the sharpness, brightness, and dominant colors of the input image’s background.</p> </li> </ul> <p>The list of returned labels will include at least one label for every detected object, along with information about that label. In the following example, suppose the input image has a lighthouse, the sea, and a rock. The response includes all three labels, one for each object, as well as the confidence in the label:</p> <p> <code>{Name: lighthouse, Confidence: 98.4629}</code> </p> <p> <code>{Name: rock,Confidence: 79.2097}</code> </p> <p> <code> {Name: sea,Confidence: 75.061}</code> </p> <p>The list of labels can include multiple labels for the same object. For example, if the input image shows a flower (for example, a tulip), the operation might return the following three labels. </p> <p> <code>{Name: flower,Confidence: 99.0562}</code> </p> <p> <code>{Name: plant,Confidence: 99.0562}</code> </p> <p> <code>{Name: tulip,Confidence: 99.0562}</code> </p> <p>In this example, the detection algorithm more precisely identifies the flower as a tulip.</p> <note> <p>If the object detected is a person, the operation doesn't provide the same facial details that the <a>DetectFaces</a> operation provides.</p> </note> <p>This is a stateless API operation that doesn't return any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectLabels</code> action. </p>
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
		 * <p>Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the following types of PPE.</p> <ul> <li> <p>Face cover</p> </li> <li> <p>Hand cover</p> </li> <li> <p>Head cover</p> </li> </ul> <p>You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG formatted file. </p> <p> <code>DetectProtectiveEquipment</code> detects PPE worn by up to 15 persons detected in an image.</p> <p>For each person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body part coverage). It also returns a bounding box (<a>BoundingBox</a>) for each detected person and each detected item of PPE. </p> <p>You can optionally request a summary of detected PPE items with the <code>SummarizationAttributes</code> input parameter. The summary provides the following information. </p> <ul> <li> <p>The persons detected as wearing all of the types of PPE that you specify.</p> </li> <li> <p>The persons detected as not wearing all of the types PPE that you specify.</p> </li> <li> <p>The persons detected where PPE adornment could not be determined. </p> </li> </ul> <p>This is a stateless API operation. That is, the operation does not persist any data.</p> <p>This operation requires permissions to perform the <code>rekognition:DetectProtectiveEquipment</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.DetectProtectiveEquipment
		 * @return {DetectProtectiveEquipmentResponse} Success
		 */
		DetectProtectiveEquipment(requestBody: DetectProtectiveEquipmentRequest): Observable<DetectProtectiveEquipmentResponse> {
			return this.http.post<DetectProtectiveEquipmentResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectProtectiveEquipment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects text in the input image and converts it into machine-readable text.</p> <p>Pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. </p> <p>The <code>DetectText</code> operation returns text in an array of <a>TextDetection</a> elements, <code>TextDetections</code>. Each <code>TextDetection</code> element provides information about a single word or line of text that was detected in the image. </p> <p>A word is one or more script characters that are not separated by spaces. <code>DetectText</code> can detect up to 100 words in an image.</p> <p>A line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when there is a large gap between words, relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don't represent the end of a line. If a sentence spans multiple lines, the <code>DetectText</code> operation returns multiple lines.</p> <p>To determine whether a <code>TextDetection</code> element is a line of text or a word, use the <code>TextDetection</code> object <code>Type</code> field. </p> <p>To be detected, text must be within +/- 90 degrees orientation of the horizontal axis.</p> <p>For more information, see Detecting text in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.DetectText
		 * @return {DetectTextResponse} Success
		 */
		DetectText(requestBody: DetectTextRequest): Observable<DetectTextResponse> {
			return this.http.post<DetectTextResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DetectText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association between a <code>Face</code> supplied in an array of <code>FaceIds</code> and the User. If the User is not present already, then a <code>ResourceNotFound</code> exception is thrown. If successful, an array of faces that are disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will be ignored and not be returned in the response. If a given face is already associated with a different User or not found in the collection it will be returned as part of <code>UnsuccessfulDisassociations</code>. You can remove 1 - 100 face IDs from a user at one time.
		 * Post #X-Amz-Target=RekognitionService.DisassociateFaces
		 * @return {DisassociateFacesResponse} Success
		 */
		DisassociateFaces(requestBody: DisassociateFacesRequest): Observable<DisassociateFacesResponse> {
			return this.http.post<DisassociateFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DisassociateFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project. <code>DistributeDatasetEntries</code> moves 20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. </p> <p>You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call <a>CreateDataset</a>.</p> <p>Distributing a dataset takes a while to complete. To check the status call <code>DescribeDataset</code>. The operation is complete when the <code>Status</code> field for the training dataset and the test dataset is <code>UPDATE_COMPLETE</code>. If the dataset split fails, the value of <code>Status</code> is <code>UPDATE_FAILED</code>.</p> <p>This operation requires permissions to perform the <code>rekognition:DistributeDatasetEntries</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.DistributeDatasetEntries
		 * @return {DistributeDatasetEntriesResponse} Success
		 */
		DistributeDatasetEntries(requestBody: DistributeDatasetEntriesRequest): Observable<DistributeDatasetEntriesResponse> {
			return this.http.post<DistributeDatasetEntriesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.DistributeDatasetEntries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the name and additional information about a celebrity based on their Amazon Rekognition ID. The additional information is returned as an array of URLs. If there is no additional information about the celebrity, this list is empty.</p> <p>For more information, see Getting information about a celebrity in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:GetCelebrityInfo</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.GetCelebrityInfo
		 * @return {GetCelebrityInfoResponse} Success
		 */
		GetCelebrityInfo(requestBody: GetCelebrityInfoRequest): Observable<GetCelebrityInfoResponse> {
			return this.http.post<GetCelebrityInfoResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetCelebrityInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by <a>StartCelebrityRecognition</a>.</p> <p>Celebrity recognition in a video is an asynchronous operation. Analysis is started by a call to <a>StartCelebrityRecognition</a> which returns a job identifier (<code>JobId</code>). </p> <p>When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartCelebrityRecognition</code>. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetCelebrityDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityDetection</code>. </p> <p>For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.</p> <p> <code>GetCelebrityRecognition</code> returns detected celebrities and the time(s) they are detected in an array (<code>Celebrities</code>) of <a>CelebrityRecognition</a> objects. Each <code>CelebrityRecognition</code> contains information about the celebrity in a <a>CelebrityDetail</a> object and the time, <code>Timestamp</code>, the celebrity was detected. This <a>CelebrityDetail</a> object stores information about the detected celebrity's face attributes, a face bounding box, known gender, the celebrity's name, and a confidence estimate.</p> <note> <p> <code>GetCelebrityRecognition</code> only returns the default facial attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The <code>BoundingBox</code> field only applies to the detected face instance. The other facial attributes listed in the <code>Face</code> object of the following response syntax are not returned. For more information, see FaceDetail in the Amazon Rekognition Developer Guide. </p> </note> <p>By default, the <code>Celebrities</code> array is sorted by time (milliseconds from the start of the video). You can also sort the array by celebrity by specifying the value <code>ID</code> in the <code>SortBy</code> input parameter.</p> <p>The <code>CelebrityDetail</code> object includes the celebrity identifer and additional information urls. If you don't store the additional information urls, you can get them later by calling <a>GetCelebrityInfo</a> with the celebrity identifer.</p> <p>No information is returned for faces not recognized as celebrities.</p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetCelebrityDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetCelebrityRecognition</code>.</p>
		 * Post #X-Amz-Target=RekognitionService.GetCelebrityRecognition
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCelebrityRecognitionResponse} Success
		 */
		GetCelebrityRecognition(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetCelebrityRecognitionRequest): Observable<GetCelebrityRecognitionResponse> {
			return this.http.post<GetCelebrityRecognitionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetCelebrityRecognition?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video analysis started by <a>StartContentModeration</a>. For a list of moderation labels in Amazon Rekognition, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html#moderation-api">Using the image and video moderation APIs</a>.</p> <p>Amazon Rekognition Video inappropriate or offensive content detection in a stored video is an asynchronous operation. You start analysis by calling <a>StartContentModeration</a> which returns a job identifier (<code>JobId</code>). When analysis finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartContentModeration</code>. To get the results of the content analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetContentModeration</code> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p> <p>For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers Guide.</p> <p> <code>GetContentModeration</code> returns detected inappropriate, unwanted, or offensive content moderation labels, and the time they are detected, in an array, <code>ModerationLabels</code>, of <a>ContentModerationDetection</a> objects. </p> <p>By default, the moderated labels are returned sorted by time, in milliseconds from the start of the video. You can also sort them by moderated label by specifying <code>NAME</code> for the <code>SortBy</code> input parameter. </p> <p>Since video analysis can return a large number of results, use the <code>MaxResults</code> parameter to limit the number of labels returned in a single call to <code>GetContentModeration</code>. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetContentModeration</code> and populate the <code>NextToken</code> request parameter with the value of <code>NextToken</code> returned from the previous call to <code>GetContentModeration</code>.</p> <p>For more information, see moderating content in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.GetContentModeration
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetContentModerationResponse} Success
		 */
		GetContentModeration(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetContentModerationRequest): Observable<GetContentModerationResponse> {
			return this.http.post<GetContentModerationResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetContentModeration?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets face detection results for a Amazon Rekognition Video analysis started by <a>StartFaceDetection</a>.</p> <p>Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling <a>StartFaceDetection</a> which returns a job identifier (<code>JobId</code>). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceDetection</code>. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p> <p> <code>GetFaceDetection</code> returns an array of detected faces (<code>Faces</code>) sorted by the time the faces were detected. </p> <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetFaceDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetFaceDetection</code>.</p> <p>Note that for the <code>GetFaceDetection</code> operation, the returned values for <code>FaceOccluded</code> and <code>EyeDirection</code> will always be "null".</p>
		 * Post #X-Amz-Target=RekognitionService.GetFaceDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetFaceDetectionResponse} Success
		 */
		GetFaceDetection(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetFaceDetectionRequest): Observable<GetFaceDetectionResponse> {
			return this.http.post<GetFaceDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetFaceDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the results of a specific Face Liveness session. It requires the <code>sessionId</code> as input, which was created using <code>CreateFaceLivenessSession</code>. Returns the corresponding Face Liveness confidence score, a reference image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. </p> <p>The number of audit images returned by <code>GetFaceLivenessSessionResults</code> is defined by the <code>AuditImagesLimit</code> paramater when calling <code>CreateFaceLivenessSession</code>. Reference images are always returned when possible.</p>
		 * Post #X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults
		 * @return {GetFaceLivenessSessionResultsResponse} Success
		 */
		GetFaceLivenessSessionResults(requestBody: GetFaceLivenessSessionResultsRequest): Observable<GetFaceLivenessSessionResultsResponse> {
			return this.http.post<GetFaceLivenessSessionResultsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetFaceLivenessSessionResults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Gets the label detection results of a Amazon Rekognition Video analysis started by <a>StartLabelDetection</a>. </p> <p>The label detection operation is started by a call to <a>StartLabelDetection</a> which returns a job identifier (<code>JobId</code>). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartlabelDetection</code>. </p> <p>To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p> <p> <code>GetLabelDetection</code> returns an array of detected labels (<code>Labels</code>) sorted by the time the labels were detected. You can also sort by the label name by specifying <code>NAME</code> for the <code>SortBy</code> input parameter. If there is no <code>NAME</code> specified, the default sort is by timestamp.</p> <p>You can select how results are aggregated by using the <code>AggregateBy</code> input parameter. The default aggregation method is <code>TIMESTAMPS</code>. You can also aggregate by <code>SEGMENTS</code>, which aggregates all instances of labels detected in a given segment. </p> <p>The returned Labels array may include the following attributes:</p> <ul> <li> <p>Name - The name of the detected label.</p> </li> <li> <p>Confidence - The level of confidence in the label assigned to a detected object. </p> </li> <li> <p>Parents - The ancestor labels for a detected label. GetLabelDetection returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response. </p> </li> <li> <p> Aliases - Possible Aliases for the label. </p> </li> <li> <p>Categories - The label categories that the detected label belongs to.</p> </li> <li> <p>BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box.</p> </li> <li> <p>Timestamp - Time, in milliseconds from the start of the video, that the label was detected. For aggregation by <code>SEGMENTS</code>, the <code>StartTimestampMillis</code>, <code>EndTimestampMillis</code>, and <code>DurationMillis</code> structures are what define a segment. Although the “Timestamp” structure is still returned with each label, its value is set to be the same as <code>StartTimestampMillis</code>.</p> </li> </ul> <p>Timestamp and Bounding box information are returned for detected Instances, only if aggregation is done by <code>TIMESTAMPS</code>. If aggregating by <code>SEGMENTS</code>, information about detected instances isn’t returned. </p> <p>The version of the label model used for the detection is also returned.</p> <p> <b>Note <code>DominantColors</code> isn't returned for <code>Instances</code>, although it is shown as part of the response in the sample seen below.</b> </p> <p>Use <code>MaxResults</code> parameter to limit the number of labels returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetlabelDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetLabelDetection</code>.</p>
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
		 * <p>Gets the segment detection results of a Amazon Rekognition Video analysis started by <a>StartSegmentDetection</a>.</p> <p>Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by calling <a>StartSegmentDetection</a> which returns a job identifier (<code>JobId</code>). When the segment detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartSegmentDetection</code>. To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <code>GetSegmentDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call of <code>StartSegmentDetection</code>.</p> <p> <code>GetSegmentDetection</code> returns detected segments in an array (<code>Segments</code>) of <a>SegmentDetection</a> objects. <code>Segments</code> is sorted by the segment types specified in the <code>SegmentTypes</code> input parameter of <code>StartSegmentDetection</code>. Each element of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment, the type of the segment, and the frame in which the segment was detected.</p> <p>Use <code>SelectedSegmentTypes</code> to find out the type of segment detection requested in the call to <code>StartSegmentDetection</code>.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of segment detections returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetSegmentDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetSegmentDetection</code>.</p> <p>For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.GetSegmentDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSegmentDetectionResponse} Success
		 */
		GetSegmentDetection(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetSegmentDetectionRequest): Observable<GetSegmentDetectionResponse> {
			return this.http.post<GetSegmentDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetSegmentDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the text detection results of a Amazon Rekognition Video analysis started by <a>StartTextDetection</a>.</p> <p>Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling <a>StartTextDetection</a> which returns a job identifier (<code>JobId</code>) When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to <code>StartTextDetection</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <code>GetTextDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call of <code>StartLabelDetection</code>.</p> <p> <code>GetTextDetection</code> returns an array of detected text (<code>TextDetections</code>) sorted by the time the text was detected, up to 100 words per frame of video.</p> <p>Each element of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time the text was detected, bounding box information for where the text was located, and unique identifiers for words and their lines.</p> <p>Use MaxResults parameter to limit the number of text detections returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetTextDetection</code> and populate the <code>NextToken</code> request parameter with the token value returned from the previous call to <code>GetTextDetection</code>.</p>
		 * Post #X-Amz-Target=RekognitionService.GetTextDetection
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTextDetectionResponse} Success
		 */
		GetTextDetection(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetTextDetectionRequest): Observable<GetTextDetectionResponse> {
			return this.http.post<GetTextDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.GetTextDetection?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects faces in the input image and adds them to the specified collection. </p> <p>Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the <a>SearchFaces</a> and <a>SearchFacesByImage</a> operations.</p> <p>For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide.</p> <p>To get the number of faces in a collection, call <a>DescribeCollection</a>. </p> <p>If you're using version 1.0 of the face detection model, <code>IndexFaces</code> indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. </p> <p>If you're using version 4 or later of the face model, image orientation information is not returned in the <code>OrientationCorrection</code> field. </p> <p>To determine which version of the model you're using, call <a>DescribeCollection</a> and supply the collection ID. You can also get the model version from the value of <code>FaceModelVersion</code> in the response from <code>IndexFaces</code> </p> <p>For more information, see Model Versioning in the Amazon Rekognition Developer Guide.</p> <p>If you provide the optional <code>ExternalImageId</code> for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the <a>ListFaces</a> operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image.</p> <p>You can specify the maximum number of faces to index with the <code>MaxFaces</code> input parameter. This is useful when you want to index the largest faces in an image and don't want to index smaller faces, such as those belonging to people standing in the background.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. By default, <code>IndexFaces</code> chooses the quality bar that's used to filter faces. You can also explicitly choose the quality bar. Use <code>QualityFilter</code>, to set the quality bar by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. </p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>Information about faces detected in an image, but not indexed, is returned in an array of <a>UnindexedFace</a> objects, <code>UnindexedFaces</code>. Faces aren't indexed for reasons such as:</p> <ul> <li> <p>The number of faces detected exceeds the value of the <code>MaxFaces</code> request parameter.</p> </li> <li> <p>The face is too small compared to the image dimensions.</p> </li> <li> <p>The face is too blurry.</p> </li> <li> <p>The image is too dark.</p> </li> <li> <p>The face has an extreme pose.</p> </li> <li> <p>The face doesn’t have enough detail to be suitable for face search.</p> </li> </ul> <p>In response, the <code>IndexFaces</code> operation returns an array of metadata for all detected faces, <code>FaceRecords</code>. This includes: </p> <ul> <li> <p>The bounding box, <code>BoundingBox</code>, of the detected face. </p> </li> <li> <p>A confidence value, <code>Confidence</code>, which indicates the confidence that the bounding box contains a face.</p> </li> <li> <p>A face ID, <code>FaceId</code>, assigned by the service for each face that's detected and stored.</p> </li> <li> <p>An image ID, <code>ImageId</code>, assigned by the service for the input image.</p> </li> </ul> <p>If you request <code>ALL</code> or specific facial attributes (e.g., <code>FACE_OCCLUDED</code>) by using the detectionAttributes parameter, Amazon Rekognition returns detailed facial attributes, such as facial landmarks (for example, location of eye and mouth), facial occlusion, and other facial attributes.</p> <p>If you provide the same image, specify the same collection, and use the same external ID in the <code>IndexFaces</code> operation, Amazon Rekognition doesn't save duplicate face metadata.</p> <p/> <p>The input image is passed either as base64-encoded image bytes, or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. </p> <p>This operation requires permissions to perform the <code>rekognition:IndexFaces</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.IndexFaces
		 * @return {IndexFacesResponse} Success
		 */
		IndexFaces(requestBody: IndexFacesRequest): Observable<IndexFacesResponse> {
			return this.http.post<IndexFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.IndexFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns list of collection IDs in your account. If the result is truncated, the response also provides a <code>NextToken</code> that you can use in the subsequent request to fetch the next set of collection IDs.</p> <p>For an example, see Listing collections in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:ListCollections</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.ListCollections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCollectionsResponse} Success
		 */
		ListCollections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCollectionsRequest): Observable<ListCollectionsResponse> {
			return this.http.post<ListCollectionsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListCollections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists the entries (images) within a dataset. An entry is a JSON Line that contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-manifest-files.html">Creating a manifest file</a>.</p> <p>JSON Lines in the response include information about non-terminal errors found in the dataset. Non terminal errors are reported in <code>errors</code> lists within each JSON Line. The same information is reported in the training and testing validation result manifests that Amazon Rekognition Custom Labels creates during model training. </p> <p>You can filter the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after a specific date. </p> <p>This operation requires permissions to perform the <code>rekognition:ListDatasetEntries</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.ListDatasetEntries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetEntriesResponse} Success
		 */
		ListDatasetEntries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetEntriesRequest): Observable<ListDatasetEntriesResponse> {
			return this.http.post<ListDatasetEntriesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListDatasetEntries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-labeling-images.html">Labeling images</a>. </p> <p> Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p>
		 * Post #X-Amz-Target=RekognitionService.ListDatasetLabels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetLabelsResponse} Success
		 */
		ListDatasetLabels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetLabelsRequest): Observable<ListDatasetLabelsResponse> {
			return this.http.post<ListDatasetLabelsResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListDatasetLabels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Gets a list of the project policies attached to a project.</p> <p>To attach a project policy to a project, call <a>PutProjectPolicy</a>. To remove a project policy from a project, call <a>DeleteProjectPolicy</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:ListProjectPolicies</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.ListProjectPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProjectPoliciesResponse} Success
		 */
		ListProjectPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProjectPoliciesRequest): Observable<ListProjectPoliciesResponse> {
			return this.http.post<ListProjectPoliciesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListProjectPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p> Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels model. </p> <p>This operation requires permissions to perform the <code>rekognition:ListTagsForResource</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata of the User such as <code>UserID</code> in the specified collection. Anonymous User (to reserve faces without any identity) is not returned as part of this request. The results are sorted by system generated primary key ID. If the response is truncated, <code>NextToken</code> is returned in the response that can be used in the subsequent request to retrieve the next set of identities.
		 * Post #X-Amz-Target=RekognitionService.ListUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUsersRequest): Observable<ListUsersResponse> {
			return this.http.post<ListUsersResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.ListUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a model version you use the <a>CopyProjectVersion</a> operation.</p> <p>For more information about the format of a project policy document, see Attaching a project policy (SDK) in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p> <p>The response from <code>PutProjectPolicy</code> is a revision ID for the project policy. You can attach multiple project policies to a project. You can also update an existing project policy by specifying the policy revision ID of the existing policy.</p> <p>To remove a project policy from a project, call <a>DeleteProjectPolicy</a>. To get a list of project policies attached to a project, call <a>ListProjectPolicies</a>. </p> <p>You copy a model version by calling <a>CopyProjectVersion</a>.</p> <p>This operation requires permissions to perform the <code>rekognition:PutProjectPolicy</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.PutProjectPolicy
		 * @return {PutProjectPolicyResponse} Success
		 */
		PutProjectPolicy(requestBody: PutProjectPolicyRequest): Observable<PutProjectPolicyResponse> {
			return this.http.post<PutProjectPolicyResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.PutProjectPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns an array of celebrities recognized in the input image. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide. </p> <p> <code>RecognizeCelebrities</code> returns the 64 largest faces in the image. It lists the recognized celebrities in the <code>CelebrityFaces</code> array and any unrecognized faces in the <code>UnrecognizedFaces</code> array. <code>RecognizeCelebrities</code> doesn't return celebrities whose faces aren't among the largest 64 faces in the image.</p> <p>For each celebrity recognized, <code>RecognizeCelebrities</code> returns a <code>Celebrity</code> object. The <code>Celebrity</code> object contains the celebrity name, ID, URL links to additional information, match confidence, and a <code>ComparedFace</code> object that you can use to locate the celebrity's face on the image.</p> <p>Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the <code>Celebrity</code> ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by <code>RecognizeCelebrities</code>, you will need the ID to identify the celebrity in a call to the <a>GetCelebrityInfo</a> operation.</p> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p>For an example, see Recognizing celebrities in an image in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:RecognizeCelebrities</code> operation.</p>
		 * Post #X-Amz-Target=RekognitionService.RecognizeCelebrities
		 * @return {RecognizeCelebritiesResponse} Success
		 */
		RecognizeCelebrities(requestBody: RecognizeCelebritiesRequest): Observable<RecognizeCelebritiesResponse> {
			return this.http.post<RecognizeCelebritiesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.RecognizeCelebrities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the <a>IndexFaces</a> operation. The operation compares the features of the input face with faces in the specified collection. </p> <note> <p>You can also search faces without indexing faces by using the <code>SearchFacesByImage</code> operation.</p> </note> <p> The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a <code>confidence</code> value for each face match, indicating the confidence that the specific face matches the input face. </p> <p>For an example, see Searching for a face using its face ID in the Amazon Rekognition Developer Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:SearchFaces</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.SearchFaces
		 * @return {SearchFacesResponse} Success
		 */
		SearchFaces(requestBody: SearchFacesRequest): Observable<SearchFacesResponse> {
			return this.http.post<SearchFacesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.SearchFaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection. </p> <note> <p>To search for all faces in an input image, you might first call the <a>IndexFaces</a> operation, and then use the face IDs returned in subsequent calls to the <a>SearchFaces</a> operation. </p> <p> You can also call the <code>DetectFaces</code> operation and use the bounding boxes in the response to make face crops, which then you can pass in to the <code>SearchFacesByImage</code> operation. </p> </note> <p>You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p> <p> The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a <code>similarity</code> indicating how similar the face is to the input face. In the response, the operation also returns the bounding box (and a confidence level that the bounding box contains a face) of the face that Amazon Rekognition used for the input image. </p> <p>If no faces are detected in the input image, <code>SearchFacesByImage</code> returns an <code>InvalidParameterException</code> error. </p> <p>For an example, Searching for a Face Using an Image in the Amazon Rekognition Developer Guide.</p> <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use <code>QualityFilter</code> to set the quality bar for filtering by specifying <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>.</p> <note> <p>To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call <a>DescribeCollection</a>. </p> </note> <p>This operation requires permissions to perform the <code>rekognition:SearchFacesByImage</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.SearchFacesByImage
		 * @return {SearchFacesByImageResponse} Success
		 */
		SearchFacesByImage(requestBody: SearchFacesByImageRequest): Observable<SearchFacesByImageResponse> {
			return this.http.post<SearchFacesByImageResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.SearchFacesByImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for UserIDs within a collection based on a <code>FaceId</code> or <code>UserId</code>. This API can be used to find the closest UserID (with a highest similarity) to associate a face. The request must be provided with either <code>FaceId</code> or <code>UserId</code>. The operation returns an array of UserID that match the <code>FaceId</code> or <code>UserId</code>, ordered by similarity score with the highest similarity first.
		 * Post #X-Amz-Target=RekognitionService.SearchUsers
		 * @return {SearchUsersResponse} Success
		 */
		SearchUsers(requestBody: SearchUsersRequest): Observable<SearchUsersResponse> {
			return this.http.post<SearchUsersResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.SearchUsers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then searches a specified collection for matching UserIDs. </p> <p>The operation returns an array of UserIDs that match the face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a bounding box for the face found in the input image. </p> <p>Information about faces detected in the supplied image, but not used for the search, is returned in an array of <code>UnsearchedFace</code> objects. If no valid face is detected in the image, the response will contain an empty <code>UserMatches</code> list and no <code>SearchedFace</code> object. </p>
		 * Post #X-Amz-Target=RekognitionService.SearchUsersByImage
		 * @return {SearchUsersByImageResponse} Success
		 */
		SearchUsersByImage(requestBody: SearchUsersByImageRequest): Observable<SearchUsersByImageResponse> {
			return this.http.post<SearchUsersByImageResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.SearchUsersByImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts asynchronous recognition of celebrities in a stored video.</p> <p>Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartCelebrityRecognition</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetCelebrityRecognition</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityRecognition</code>. </p> <p>For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.StartCelebrityRecognition
		 * @return {StartCelebrityRecognitionResponse} Success
		 */
		StartCelebrityRecognition(requestBody: StartCelebrityRecognitionRequest): Observable<StartCelebrityRecognitionResponse> {
			return this.http.post<StartCelebrityRecognitionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartCelebrityRecognition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored video. For a list of moderation labels in Amazon Rekognition, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html#moderation-api">Using the image and video moderation APIs</a>.</p> <p>Amazon Rekognition Video can moderate content in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartContentModeration</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the content analysis, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetContentModeration</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p> <p>For more information, see Moderating content in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.StartContentModeration
		 * @return {StartContentModerationResponse} Success
		 */
		StartContentModeration(requestBody: StartContentModerationRequest): Observable<StartContentModerationResponse> {
			return this.http.post<StartContentModerationResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartContentModeration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts asynchronous detection of faces in a stored video.</p> <p>Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartFaceDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When face detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p> <p>For more information, see Detecting faces in a stored video in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.StartFaceDetection
		 * @return {StartFaceDetectionResponse} Success
		 */
		StartFaceDetection(requestBody: StartFaceDetectionRequest): Observable<StartFaceDetectionResponse> {
			return this.http.post<StartFaceDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartFaceDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video.</p> <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartFaceSearch</code> returns a job identifier (<code>JobId</code>) which you use to get the search results once the search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. To get the search results, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceSearch</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/procedure-person-search-videos.html">Searching stored videos for faces</a>. </p>
		 * Post #X-Amz-Target=RekognitionService.StartFaceSearch
		 * @return {StartFaceSearchResponse} Success
		 */
		StartFaceSearch(requestBody: StartFaceSearchRequest): Observable<StartFaceSearchResponse> {
			return this.http.post<StartFaceSearchResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartFaceSearch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts asynchronous detection of labels in a stored video.</p> <p>Amazon Rekognition Video can detect labels in a video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like a person getting out of a car or a person skiing.</p> <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartLabelDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p> <p> <i>Optional Parameters</i> </p> <p> <code>StartLabelDetection</code> has the <code>GENERAL_LABELS</code> Feature applied by default. This feature allows you to provide filtering criteria to the <code>Settings</code> parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive filters, or a combination of inclusive and exclusive filters. For more information on filtering, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels-detecting-labels-video.html">Detecting labels in a video</a>.</p> <p>You can specify <code>MinConfidence</code> to control the confidence threshold for the labels returned. The default is 50.</p>
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
		 * <p>Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use <a>DescribeProjectVersions</a>.</p> <p>Once the model is running, you can detect custom labels in new images by calling <a>DetectCustomLabels</a>.</p> <note> <p>You are charged for the amount of time that the model is running. To stop a running model, call <a>StopProjectVersion</a>.</p> </note> <p>For more information, see <i>Running a trained Amazon Rekognition Custom Labels model</i> in the Amazon Rekognition Custom Labels Guide.</p> <p>This operation requires permissions to perform the <code>rekognition:StartProjectVersion</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.StartProjectVersion
		 * @return {StartProjectVersionResponse} Success
		 */
		StartProjectVersion(requestBody: StartProjectVersionRequest): Observable<StartProjectVersionResponse> {
			return this.http.post<StartProjectVersionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartProjectVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts asynchronous detection of segment detection in a stored video.</p> <p>Amazon Rekognition Video can detect segments in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and the filename of the video. <code>StartSegmentDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the results of the operation. When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p> <p>You can use the <code>Filters</code> (<a>StartSegmentDetectionFilters</a>) input parameter to specify the minimum detection confidence returned in the response. Within <code>Filters</code>, use <code>ShotFilter</code> (<a>StartShotDetectionFilter</a>) to filter detected shots. Use <code>TechnicalCueFilter</code> (<a>StartTechnicalCueDetectionFilter</a>) to filter technical cues. </p> <p>To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. if so, call <a>GetSegmentDetection</a> and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartSegmentDetection</code>. </p> <p>For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.</p>
		 * Post #X-Amz-Target=RekognitionService.StartSegmentDetection
		 * @return {StartSegmentDetectionResponse} Success
		 */
		StartSegmentDetection(requestBody: StartSegmentDetectionRequest): Observable<StartSegmentDetectionResponse> {
			return this.http.post<StartSegmentDetectionResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.StartSegmentDetection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts processing a stream processor. You create a stream processor by calling <a>CreateStreamProcessor</a>. To tell <code>StartStreamProcessor</code> which stream processor to start, use the value of the <code>Name</code> field specified in the call to <code>CreateStreamProcessor</code>.</p> <p>If you are using a label detection stream processor to detect labels, you need to provide a <code>Start selector</code> and a <code>Stop selector</code> to determine the length of the stream processing time.</p>
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
		 * <p>Stops a running model. The operation might take a while to complete. To check the current status, call <a>DescribeProjectVersions</a>. </p> <p>This operation requires permissions to perform the <code>rekognition:StopProjectVersion</code> action.</p>
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

		/**
		 * <p> Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels model. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a>. </p> <p>This operation requires permissions to perform the <code>rekognition:TagResource</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model. </p> <p>This operation requires permissions to perform the <code>rekognition:UntagResource</code> action. </p>
		 * Post #X-Amz-Target=RekognitionService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in manifest files and Object localization in manifest files in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p> <p>If the <code>source-ref</code> field in the JSON line references an existing image, the existing image in the dataset is updated. If <code>source-ref</code> field doesn't reference an existing image, the image is added as a new image to the dataset. </p> <p>You specify the changes that you want to make in the <code>Changes</code> input parameter. There isn't a limit to the number JSON Lines that you can change, but the size of <code>Changes</code> must be less than 5MB.</p> <p> <code>UpdateDatasetEntries</code> returns immediatly, but the dataset update might take a while to complete. Use <a>DescribeDataset</a> to check the current status. The dataset updated successfully if the value of <code>Status</code> is <code>UPDATE_COMPLETE</code>. </p> <p>To check if any non-terminal errors occured, call <a>ListDatasetEntries</a> and check for the presence of <code>errors</code> lists in the JSON Lines.</p> <p>Dataset update fails if a terminal error occurs (<code>Status</code> = <code>UPDATE_FAILED</code>). Currently, you can't access the terminal error information from the Amazon Rekognition Custom Labels SDK. </p> <p>This operation requires permissions to perform the <code>rekognition:UpdateDatasetEntries</code> action.</p>
		 * Post #X-Amz-Target=RekognitionService.UpdateDatasetEntries
		 * @return {UpdateDatasetEntriesResponse} Success
		 */
		UpdateDatasetEntries(requestBody: UpdateDatasetEntriesRequest): Observable<UpdateDatasetEntriesResponse> {
			return this.http.post<UpdateDatasetEntriesResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.UpdateDatasetEntries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to update a stream processor. You can change some settings and regions of interest and delete certain parameters.
		 * Post #X-Amz-Target=RekognitionService.UpdateStreamProcessor
		 * @return {UpdateStreamProcessorResponse} Success
		 */
		UpdateStreamProcessor(requestBody: UpdateStreamProcessorRequest): Observable<UpdateStreamProcessorResponse> {
			return this.http.post<UpdateStreamProcessorResponse>(this.baseUri + '#X-Amz-Target=RekognitionService.UpdateStreamProcessor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateFacesX_Amz_Target { 'RekognitionService.AssociateFaces' = 0 }

	export enum CompareFacesX_Amz_Target { 'RekognitionService.CompareFaces' = 0 }

	export enum CopyProjectVersionX_Amz_Target { 'RekognitionService.CopyProjectVersion' = 0 }

	export enum CreateCollectionX_Amz_Target { 'RekognitionService.CreateCollection' = 0 }

	export enum CreateDatasetX_Amz_Target { 'RekognitionService.CreateDataset' = 0 }

	export enum CreateFaceLivenessSessionX_Amz_Target { 'RekognitionService.CreateFaceLivenessSession' = 0 }

	export enum CreateProjectX_Amz_Target { 'RekognitionService.CreateProject' = 0 }

	export enum CreateProjectVersionX_Amz_Target { 'RekognitionService.CreateProjectVersion' = 0 }

	export enum CreateStreamProcessorX_Amz_Target { 'RekognitionService.CreateStreamProcessor' = 0 }

	export enum CreateUserX_Amz_Target { 'RekognitionService.CreateUser' = 0 }

	export enum DeleteCollectionX_Amz_Target { 'RekognitionService.DeleteCollection' = 0 }

	export enum DeleteDatasetX_Amz_Target { 'RekognitionService.DeleteDataset' = 0 }

	export enum DeleteFacesX_Amz_Target { 'RekognitionService.DeleteFaces' = 0 }

	export enum DeleteProjectX_Amz_Target { 'RekognitionService.DeleteProject' = 0 }

	export enum DeleteProjectPolicyX_Amz_Target { 'RekognitionService.DeleteProjectPolicy' = 0 }

	export enum DeleteProjectVersionX_Amz_Target { 'RekognitionService.DeleteProjectVersion' = 0 }

	export enum DeleteStreamProcessorX_Amz_Target { 'RekognitionService.DeleteStreamProcessor' = 0 }

	export enum DeleteUserX_Amz_Target { 'RekognitionService.DeleteUser' = 0 }

	export enum DescribeCollectionX_Amz_Target { 'RekognitionService.DescribeCollection' = 0 }

	export enum DescribeDatasetX_Amz_Target { 'RekognitionService.DescribeDataset' = 0 }

	export enum DescribeProjectVersionsX_Amz_Target { 'RekognitionService.DescribeProjectVersions' = 0 }

	export enum DescribeProjectsX_Amz_Target { 'RekognitionService.DescribeProjects' = 0 }

	export enum DescribeStreamProcessorX_Amz_Target { 'RekognitionService.DescribeStreamProcessor' = 0 }

	export enum DetectCustomLabelsX_Amz_Target { 'RekognitionService.DetectCustomLabels' = 0 }

	export enum DetectFacesX_Amz_Target { 'RekognitionService.DetectFaces' = 0 }

	export enum DetectLabelsX_Amz_Target { 'RekognitionService.DetectLabels' = 0 }

	export enum DetectModerationLabelsX_Amz_Target { 'RekognitionService.DetectModerationLabels' = 0 }

	export enum DetectProtectiveEquipmentX_Amz_Target { 'RekognitionService.DetectProtectiveEquipment' = 0 }

	export enum DetectTextX_Amz_Target { 'RekognitionService.DetectText' = 0 }

	export enum DisassociateFacesX_Amz_Target { 'RekognitionService.DisassociateFaces' = 0 }

	export enum DistributeDatasetEntriesX_Amz_Target { 'RekognitionService.DistributeDatasetEntries' = 0 }

	export enum GetCelebrityInfoX_Amz_Target { 'RekognitionService.GetCelebrityInfo' = 0 }

	export enum GetCelebrityRecognitionX_Amz_Target { 'RekognitionService.GetCelebrityRecognition' = 0 }

	export enum GetContentModerationX_Amz_Target { 'RekognitionService.GetContentModeration' = 0 }

	export enum GetFaceDetectionX_Amz_Target { 'RekognitionService.GetFaceDetection' = 0 }

	export enum GetFaceLivenessSessionResultsX_Amz_Target { 'RekognitionService.GetFaceLivenessSessionResults' = 0 }

	export enum GetFaceSearchX_Amz_Target { 'RekognitionService.GetFaceSearch' = 0 }

	export enum GetLabelDetectionX_Amz_Target { 'RekognitionService.GetLabelDetection' = 0 }

	export enum GetPersonTrackingX_Amz_Target { 'RekognitionService.GetPersonTracking' = 0 }

	export enum GetSegmentDetectionX_Amz_Target { 'RekognitionService.GetSegmentDetection' = 0 }

	export enum GetTextDetectionX_Amz_Target { 'RekognitionService.GetTextDetection' = 0 }

	export enum IndexFacesX_Amz_Target { 'RekognitionService.IndexFaces' = 0 }

	export enum ListCollectionsX_Amz_Target { 'RekognitionService.ListCollections' = 0 }

	export enum ListDatasetEntriesX_Amz_Target { 'RekognitionService.ListDatasetEntries' = 0 }

	export enum ListDatasetLabelsX_Amz_Target { 'RekognitionService.ListDatasetLabels' = 0 }

	export enum ListFacesX_Amz_Target { 'RekognitionService.ListFaces' = 0 }

	export enum ListProjectPoliciesX_Amz_Target { 'RekognitionService.ListProjectPolicies' = 0 }

	export enum ListStreamProcessorsX_Amz_Target { 'RekognitionService.ListStreamProcessors' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'RekognitionService.ListTagsForResource' = 0 }

	export enum ListUsersX_Amz_Target { 'RekognitionService.ListUsers' = 0 }

	export enum PutProjectPolicyX_Amz_Target { 'RekognitionService.PutProjectPolicy' = 0 }

	export enum RecognizeCelebritiesX_Amz_Target { 'RekognitionService.RecognizeCelebrities' = 0 }

	export enum SearchFacesX_Amz_Target { 'RekognitionService.SearchFaces' = 0 }

	export enum SearchFacesByImageX_Amz_Target { 'RekognitionService.SearchFacesByImage' = 0 }

	export enum SearchUsersX_Amz_Target { 'RekognitionService.SearchUsers' = 0 }

	export enum SearchUsersByImageX_Amz_Target { 'RekognitionService.SearchUsersByImage' = 0 }

	export enum StartCelebrityRecognitionX_Amz_Target { 'RekognitionService.StartCelebrityRecognition' = 0 }

	export enum StartContentModerationX_Amz_Target { 'RekognitionService.StartContentModeration' = 0 }

	export enum StartFaceDetectionX_Amz_Target { 'RekognitionService.StartFaceDetection' = 0 }

	export enum StartFaceSearchX_Amz_Target { 'RekognitionService.StartFaceSearch' = 0 }

	export enum StartLabelDetectionX_Amz_Target { 'RekognitionService.StartLabelDetection' = 0 }

	export enum StartPersonTrackingX_Amz_Target { 'RekognitionService.StartPersonTracking' = 0 }

	export enum StartProjectVersionX_Amz_Target { 'RekognitionService.StartProjectVersion' = 0 }

	export enum StartSegmentDetectionX_Amz_Target { 'RekognitionService.StartSegmentDetection' = 0 }

	export enum StartStreamProcessorX_Amz_Target { 'RekognitionService.StartStreamProcessor' = 0 }

	export enum StartTextDetectionX_Amz_Target { 'RekognitionService.StartTextDetection' = 0 }

	export enum StopProjectVersionX_Amz_Target { 'RekognitionService.StopProjectVersion' = 0 }

	export enum StopStreamProcessorX_Amz_Target { 'RekognitionService.StopStreamProcessor' = 0 }

	export enum TagResourceX_Amz_Target { 'RekognitionService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'RekognitionService.UntagResource' = 0 }

	export enum UpdateDatasetEntriesX_Amz_Target { 'RekognitionService.UpdateDatasetEntries' = 0 }

	export enum UpdateStreamProcessorX_Amz_Target { 'RekognitionService.UpdateStreamProcessor' = 0 }

}

