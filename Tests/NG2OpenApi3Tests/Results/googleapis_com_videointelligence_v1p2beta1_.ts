import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1_VideoAnnotationProgress>;
	}

	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1_AnnotateVideoProgressFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1_AnnotateVideoProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_AnnotateVideoProgressFormProperties>({
		});

	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1_VideoAnnotationProgress {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature?: GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}

	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1_VideoAnnotationProgressFormProperties {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature: FormControl<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null | undefined>,

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent: FormControl<number | null | undefined>,

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,

		/** Time of the most recent update. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_VideoAnnotationProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFormProperties>({
			feature: new FormControl<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null | undefined>(undefined),
			inputUri: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature { FEATURE_UNSPECIFIED = 0, LABEL_DETECTION = 1, SHOT_CHANGE_DETECTION = 2, EXPLICIT_CONTENT_DETECTION = 3, FACE_DETECTION = 4, SPEECH_TRANSCRIPTION = 5, TEXT_DETECTION = 6, OBJECT_TRACKING = 7, LOGO_RECOGNITION = 8, PERSON_DETECTION = 9 }


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1_VideoSegment {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset?: string | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset?: string | null;
	}

	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1_VideoSegmentFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_VideoSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_VideoSegmentFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1_VideoAnnotationResults>;
	}

	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1_AnnotateVideoResponseFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1_AnnotateVideoResponseFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_AnnotateVideoResponseFormProperties>({
		});

	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1_VideoAnnotationResults {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpc_Status;

		/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
		explicitAnnotation?: GoogleCloudVideointelligenceV1_ExplicitContentAnnotation;

		/** Deprecated. Please use `face_detection_annotations` instead. */
		faceAnnotations?: Array<GoogleCloudVideointelligenceV1_FaceAnnotation>;

		/** Face detection annotations. */
		faceDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1_FaceDetectionAnnotation>;

		/** Label annotations on frame level. There is exactly one element for each unique label. */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation>;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation>;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation>;

		/** Person detection annotations. */
		personDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1_PersonDetectionAnnotation>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment;

		/** Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label. */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation>;

		/** Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation>;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1_VideoSegment>;

		/** Topical label annotations on shot level. There is exactly one element for each unique label. */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation>;

		/** Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation>;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1_SpeechTranscription>;

		/** OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it. */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1_TextAnnotation>;
	}

	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1_VideoAnnotationResultsFormProperties {

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_VideoAnnotationResultsFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_VideoAnnotationResultsFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpc_Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpc_StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpc_StatusFormGroup() {
		return new FormGroup<GoogleRpc_StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1_ExplicitContentFrame>;

		/** Feature version. */
		version?: string | null;
	}

	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1_ExplicitContentAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_ExplicitContentAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_ExplicitContentAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1_ExplicitContentFrameFormProperties {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood: FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_ExplicitContentFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_ExplicitContentFrameFormProperties>({
			pornographyLikelihood: new FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood { LIKELIHOOD_UNSPECIFIED = 0, VERY_UNLIKELY = 1, UNLIKELY = 2, POSSIBLE = 3, LIKELY = 4, VERY_LIKELY = 5 }


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1_FaceAnnotation {

		/** All video frames where a face was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1_FaceFrame>;

		/** All video segments where a face was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1_FaceSegment>;

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1_FaceAnnotationFormProperties {

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_FaceAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1_FaceFrame {

		/** Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame. */
		normalizedBoundingBoxes?: Array<GoogleCloudVideointelligenceV1_NormalizedBoundingBox>;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1_FaceFrameFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_FaceFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_FaceFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1_NormalizedBoundingBox {

		/** Bottom Y coordinate. */
		bottom?: number | null;

		/** Left X coordinate. */
		left?: number | null;

		/** Right X coordinate. */
		right?: number | null;

		/** Top Y coordinate. */
		top?: number | null;
	}

	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1_NormalizedBoundingBoxFormProperties {

		/** Bottom Y coordinate. */
		bottom: FormControl<number | null | undefined>,

		/** Left X coordinate. */
		left: FormControl<number | null | undefined>,

		/** Right X coordinate. */
		right: FormControl<number | null | undefined>,

		/** Top Y coordinate. */
		top: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_NormalizedBoundingBoxFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_NormalizedBoundingBoxFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1_FaceSegment {

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment;
	}

	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1_FaceSegmentFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1_FaceSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_FaceSegmentFormProperties>({
		});

	}


	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1_FaceDetectionAnnotation {

		/** The thumbnail of a person's face. */
		thumbnail?: string | null;

		/** The face tracks with attributes. */
		tracks?: Array<GoogleCloudVideointelligenceV1_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1_FaceDetectionAnnotationFormProperties {

		/** The thumbnail of a person's face. */
		thumbnail: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_FaceDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_FaceDetectionAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1_DetectedAttribute>;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1_TimestampedObject>;
	}

	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1_TrackFormProperties {

		/** Optional. The confidence score of the tracked object. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_TrackFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_TrackFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name?: string | null;

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value?: string | null;
	}

	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1_DetectedAttributeFormProperties {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name: FormControl<string | null | undefined>,

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_DetectedAttributeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_DetectedAttributeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1_DetectedAttribute>;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1_DetectedLandmark>;

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1_NormalizedBoundingBox;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset?: string | null;
	}

	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1_TimestampedObjectFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_TimestampedObjectFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_TimestampedObjectFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name?: string | null;

		/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
		point?: GoogleCloudVideointelligenceV1_NormalizedVertex;
	}

	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1_DetectedLandmarkFormProperties {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_DetectedLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_DetectedLandmarkFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1_NormalizedVertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate. */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1_LabelAnnotation {

		/** Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`. */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1_Entity>;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1_Entity;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1_LabelFrame>;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1_LabelSegment>;

		/** Feature version. */
		version?: string | null;
	}

	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1_LabelAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_LabelAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_LabelAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1_Entity {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description?: string | null;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}

	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1_EntityFormProperties {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId: FormControl<string | null | undefined>,

		/** Language code for `description` in BCP-47 format. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_EntityFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_EntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1_LabelFrameFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_LabelFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_LabelFrameFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment;
	}

	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1_LabelSegmentFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_LabelSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_LabelSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1_Entity;

		/** All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment. */
		segments?: Array<GoogleCloudVideointelligenceV1_VideoSegment>;

		/** All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames. */
		tracks?: Array<GoogleCloudVideointelligenceV1_Track>;
	}

	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1_LogoRecognitionAnnotationFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1_LogoRecognitionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_LogoRecognitionAnnotationFormProperties>({
		});

	}


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1_Entity;

		/** Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames. */
		frames?: Array<GoogleCloudVideointelligenceV1_ObjectTrackingFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment;

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1_ObjectTrackingAnnotationFormProperties {

		/** Object category's labeling confidence of this track. */
		confidence: FormControl<number | null | undefined>,

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_ObjectTrackingAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_ObjectTrackingAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			trackId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1_ObjectTrackingFrame {

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1_NormalizedBoundingBox;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}

	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1_ObjectTrackingFrameFormProperties {

		/** The timestamp of the frame in microseconds. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_ObjectTrackingFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_ObjectTrackingFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1_PersonDetectionAnnotation {

		/** The detected tracks of a person. */
		tracks?: Array<GoogleCloudVideointelligenceV1_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1_PersonDetectionAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_PersonDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_PersonDetectionAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1_SpeechTranscription {

		/** May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. */
		alternatives?: Array<GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative>;

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode?: string | null;
	}

	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1_SpeechTranscriptionFormProperties {

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_SpeechTranscriptionFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_SpeechTranscriptionFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/** Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio. */
		words?: Array<GoogleCloudVideointelligenceV1_WordInfo>;
	}

	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1_SpeechRecognitionAlternativeFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Transcript text representing the words that the user spoke. */
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_SpeechRecognitionAlternativeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_SpeechRecognitionAlternativeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1_WordInfo {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime?: string | null;

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}

	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1_WordInfoFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime: FormControl<string | null | undefined>,

		/** The word corresponding to this set of information. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_WordInfoFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_WordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			speakerTag: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1_TextSegment>;

		/** The detected text. */
		text?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1_TextAnnotationFormProperties {

		/** The detected text. */
		text: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1_TextSegment {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1_TextFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment;
	}

	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1_TextSegmentFormProperties {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_TextSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_TextSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1_TextFrame {

		/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1_NormalizedBoundingPoly;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1_TextFrameFormProperties {

		/** Timestamp of this frame. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1_TextFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_TextFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1_NormalizedVertex>;
	}

	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1_NormalizedBoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1_NormalizedBoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1_NormalizedBoundingPolyFormProperties>({
		});

	}


	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress>;
	}

	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgressFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_AnnotateVideoProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgressFormProperties>({
		});

	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature?: GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}

	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgressFormProperties {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature: FormControl<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null | undefined>,

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent: FormControl<number | null | undefined>,

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,

		/** Time of the most recent update. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_VideoAnnotationProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgressFormProperties>({
			feature: new FormControl<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null | undefined>(undefined),
			inputUri: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoSegment {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset?: string | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset?: string | null;
	}

	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoSegmentFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_VideoSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_VideoSegmentFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults>;
	}

	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponseFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_AnnotateVideoResponseFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponseFormProperties>({
		});

	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpc_Status;

		/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
		explicitAnnotation?: GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation;

		/** Deprecated. Please use `face_detection_annotations` instead. */
		faceAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_FaceAnnotation>;

		/** Face detection annotations. */
		faceDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation>;

		/** Label annotations on frame level. There is exactly one element for each unique label. */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation>;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation>;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation>;

		/** Person detection annotations. */
		personDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment;

		/** Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label. */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation>;

		/** Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation>;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_VideoSegment>;

		/** Topical label annotations on shot level. There is exactly one element for each unique label. */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation>;

		/** Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation>;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1beta2_SpeechTranscription>;

		/** OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it. */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_TextAnnotation>;
	}

	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoAnnotationResultsFormProperties {

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_VideoAnnotationResultsFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_VideoAnnotationResultsFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame>;

		/** Feature version. */
		version?: string | null;
	}

	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1beta2_ExplicitContentFrameFormProperties {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood: FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_ExplicitContentFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_ExplicitContentFrameFormProperties>({
			pornographyLikelihood: new FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1beta2_FaceAnnotation {

		/** All video frames where a face was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_FaceFrame>;

		/** All video segments where a face was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1beta2_FaceSegment>;

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1beta2_FaceAnnotationFormProperties {

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_FaceAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1beta2_FaceFrame {

		/** Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame. */
		normalizedBoundingBoxes?: Array<GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox>;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1beta2_FaceFrameFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_FaceFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_FaceFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox {

		/** Bottom Y coordinate. */
		bottom?: number | null;

		/** Left X coordinate. */
		left?: number | null;

		/** Right X coordinate. */
		right?: number | null;

		/** Top Y coordinate. */
		top?: number | null;
	}

	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBoxFormProperties {

		/** Bottom Y coordinate. */
		bottom: FormControl<number | null | undefined>,

		/** Left X coordinate. */
		left: FormControl<number | null | undefined>,

		/** Right X coordinate. */
		right: FormControl<number | null | undefined>,

		/** Top Y coordinate. */
		top: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_NormalizedBoundingBoxFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBoxFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1beta2_FaceSegment {

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment;
	}

	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1beta2_FaceSegmentFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_FaceSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_FaceSegmentFormProperties>({
		});

	}


	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation {

		/** The thumbnail of a person's face. */
		thumbnail?: string | null;

		/** The face tracks with attributes. */
		tracks?: Array<GoogleCloudVideointelligenceV1beta2_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotationFormProperties {

		/** The thumbnail of a person's face. */
		thumbnail: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1beta2_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1beta2_DetectedAttribute>;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1beta2_TimestampedObject>;
	}

	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1beta2_TrackFormProperties {

		/** Optional. The confidence score of the tracked object. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_TrackFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_TrackFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1beta2_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name?: string | null;

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value?: string | null;
	}

	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1beta2_DetectedAttributeFormProperties {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name: FormControl<string | null | undefined>,

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_DetectedAttributeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_DetectedAttributeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1beta2_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1beta2_DetectedAttribute>;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1beta2_DetectedLandmark>;

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset?: string | null;
	}

	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1beta2_TimestampedObjectFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_TimestampedObjectFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_TimestampedObjectFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1beta2_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name?: string | null;

		/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
		point?: GoogleCloudVideointelligenceV1beta2_NormalizedVertex;
	}

	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1beta2_DetectedLandmarkFormProperties {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_DetectedLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_DetectedLandmarkFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1beta2_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1beta2_NormalizedVertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate. */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelAnnotation {

		/** Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`. */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1beta2_Entity>;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1beta2_Entity;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_LabelFrame>;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1beta2_LabelSegment>;

		/** Feature version. */
		version?: string | null;
	}

	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_LabelAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_LabelAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1beta2_Entity {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description?: string | null;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}

	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1beta2_EntityFormProperties {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId: FormControl<string | null | undefined>,

		/** Language code for `description` in BCP-47 format. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_EntityFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_EntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelFrameFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_LabelFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_LabelFrameFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment;
	}

	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelSegmentFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_LabelSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_LabelSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1beta2_Entity;

		/** All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment. */
		segments?: Array<GoogleCloudVideointelligenceV1beta2_VideoSegment>;

		/** All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames. */
		tracks?: Array<GoogleCloudVideointelligenceV1beta2_Track>;
	}

	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotationFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotationFormProperties>({
		});

	}


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1beta2_Entity;

		/** Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames. */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment;

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotationFormProperties {

		/** Object category's labeling confidence of this track. */
		confidence: FormControl<number | null | undefined>,

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			trackId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame {

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}

	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrameFormProperties {

		/** The timestamp of the frame in microseconds. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_ObjectTrackingFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation {

		/** The detected tracks of a person. */
		tracks?: Array<GoogleCloudVideointelligenceV1beta2_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1beta2_SpeechTranscription {

		/** May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. */
		alternatives?: Array<GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative>;

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode?: string | null;
	}

	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1beta2_SpeechTranscriptionFormProperties {

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_SpeechTranscriptionFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_SpeechTranscriptionFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/** Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio. */
		words?: Array<GoogleCloudVideointelligenceV1beta2_WordInfo>;
	}

	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternativeFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Transcript text representing the words that the user spoke. */
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternativeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternativeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1beta2_WordInfo {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime?: string | null;

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}

	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1beta2_WordInfoFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime: FormControl<string | null | undefined>,

		/** The word corresponding to this set of information. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_WordInfoFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_WordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			speakerTag: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1beta2_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1beta2_TextSegment>;

		/** The detected text. */
		text?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1beta2_TextAnnotationFormProperties {

		/** The detected text. */
		text: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1beta2_TextSegment {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_TextFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment;
	}

	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1beta2_TextSegmentFormProperties {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_TextSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_TextSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1beta2_TextFrame {

		/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1beta2_TextFrameFormProperties {

		/** Timestamp of this frame. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_TextFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_TextFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1beta2_NormalizedVertex>;
	}

	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1beta2_NormalizedBoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPolyFormProperties>({
		});

	}


	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress>;
	}

	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgressFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgressFormProperties>({
		});

	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature?: GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}

	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgressFormProperties {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature: FormControl<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null | undefined>,

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent: FormControl<number | null | undefined>,

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,

		/** Time of the most recent update. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgressFormProperties>({
			feature: new FormControl<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null | undefined>(undefined),
			inputUri: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoSegment {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset?: string | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset?: string | null;
	}

	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoSegmentFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_VideoSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_VideoSegmentFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults>;
	}

	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponseFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponseFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponseFormProperties>({
		});

	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpc_Status;

		/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
		explicitAnnotation?: GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation;

		/** Deprecated. Please use `face_detection_annotations` instead. */
		faceAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation>;

		/** Face detection annotations. */
		faceDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation>;

		/** Label annotations on frame level. There is exactly one element for each unique label. */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation>;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation>;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation>;

		/** Person detection annotations. */
		personDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment;

		/** Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label. */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation>;

		/** Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation>;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_VideoSegment>;

		/** Topical label annotations on shot level. There is exactly one element for each unique label. */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation>;

		/** Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation>;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription>;

		/** OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it. */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_TextAnnotation>;
	}

	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResultsFormProperties {

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResultsFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResultsFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame>;

		/** Feature version. */
		version?: string | null;
	}

	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrameFormProperties {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood: FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrameFormProperties>({
			pornographyLikelihood: new FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation {

		/** All video frames where a face was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_FaceFrame>;

		/** All video segments where a face was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p1beta1_FaceSegment>;

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p1beta1_FaceAnnotationFormProperties {

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_FaceAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p1beta1_FaceFrame {

		/** Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame. */
		normalizedBoundingBoxes?: Array<GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox>;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p1beta1_FaceFrameFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_FaceFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_FaceFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox {

		/** Bottom Y coordinate. */
		bottom?: number | null;

		/** Left X coordinate. */
		left?: number | null;

		/** Right X coordinate. */
		right?: number | null;

		/** Top Y coordinate. */
		top?: number | null;
	}

	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBoxFormProperties {

		/** Bottom Y coordinate. */
		bottom: FormControl<number | null | undefined>,

		/** Left X coordinate. */
		left: FormControl<number | null | undefined>,

		/** Right X coordinate. */
		right: FormControl<number | null | undefined>,

		/** Top Y coordinate. */
		top: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBoxFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBoxFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_FaceSegment {

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
	}

	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_FaceSegmentFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_FaceSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_FaceSegmentFormProperties>({
		});

	}


	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation {

		/** The thumbnail of a person's face. */
		thumbnail?: string | null;

		/** The face tracks with attributes. */
		tracks?: Array<GoogleCloudVideointelligenceV1p1beta1_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotationFormProperties {

		/** The thumbnail of a person's face. */
		thumbnail: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p1beta1_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute>;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1p1beta1_TimestampedObject>;
	}

	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TrackFormProperties {

		/** Optional. The confidence score of the tracked object. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_TrackFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_TrackFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name?: string | null;

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value?: string | null;
	}

	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p1beta1_DetectedAttributeFormProperties {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name: FormControl<string | null | undefined>,

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_DetectedAttributeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_DetectedAttributeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute>;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark>;

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset?: string | null;
	}

	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TimestampedObjectFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_TimestampedObjectFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_TimestampedObjectFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name?: string | null;

		/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
		point?: GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex;
	}

	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1p1beta1_DetectedLandmarkFormProperties {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_DetectedLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_DetectedLandmarkFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1p1beta1_NormalizedVertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate. */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation {

		/** Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`. */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1p1beta1_Entity>;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p1beta1_Entity;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelFrame>;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelSegment>;

		/** Feature version. */
		version?: string | null;
	}

	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_LabelAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p1beta1_Entity {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description?: string | null;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}

	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p1beta1_EntityFormProperties {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId: FormControl<string | null | undefined>,

		/** Language code for `description` in BCP-47 format. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_EntityFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_EntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelFrameFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_LabelFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_LabelFrameFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
	}

	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelSegmentFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_LabelSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_LabelSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p1beta1_Entity;

		/** All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment. */
		segments?: Array<GoogleCloudVideointelligenceV1p1beta1_VideoSegment>;

		/** All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames. */
		tracks?: Array<GoogleCloudVideointelligenceV1p1beta1_Track>;
	}

	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotationFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotationFormProperties>({
		});

	}


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p1beta1_Entity;

		/** Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames. */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment;

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotationFormProperties {

		/** Object category's labeling confidence of this track. */
		confidence: FormControl<number | null | undefined>,

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			trackId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame {

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}

	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrameFormProperties {

		/** The timestamp of the frame in microseconds. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation {

		/** The detected tracks of a person. */
		tracks?: Array<GoogleCloudVideointelligenceV1p1beta1_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription {

		/** May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. */
		alternatives?: Array<GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative>;

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode?: string | null;
	}

	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p1beta1_SpeechTranscriptionFormProperties {

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_SpeechTranscriptionFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_SpeechTranscriptionFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/** Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio. */
		words?: Array<GoogleCloudVideointelligenceV1p1beta1_WordInfo>;
	}

	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternativeFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Transcript text representing the words that the user spoke. */
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternativeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternativeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1p1beta1_WordInfo {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime?: string | null;

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}

	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1p1beta1_WordInfoFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime: FormControl<string | null | undefined>,

		/** The word corresponding to this set of information. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_WordInfoFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_WordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			speakerTag: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1p1beta1_TextSegment>;

		/** The detected text. */
		text?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextAnnotationFormProperties {

		/** The detected text. */
		text: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextSegment {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_TextFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment;
	}

	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextSegmentFormProperties {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_TextSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_TextSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextFrame {

		/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextFrameFormProperties {

		/** Timestamp of this frame. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_TextFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_TextFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex>;
	}

	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPolyFormProperties>({
		});

	}


	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress>;
	}

	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgressFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgressFormProperties>({
		});

	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature?: GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}

	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgressFormProperties {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature: FormControl<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null | undefined>,

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent: FormControl<number | null | undefined>,

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,

		/** Time of the most recent update. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgressFormProperties>({
			feature: new FormControl<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null | undefined>(undefined),
			inputUri: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoSegment {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset?: string | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset?: string | null;
	}

	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoSegmentFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_VideoSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_VideoSegmentFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video annotation request. */
	export interface GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoRequest {

		/** Required. Requested video annotation features. */
		features?: Array<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature>;

		/** The video data bytes. If unset, the input video(s) should be specified via the `input_uri`. If set, `input_uri` must be unset. */
		inputContent?: string | null;

		/** Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset. */
		inputUri?: string | null;

		/** Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location. */
		locationId?: string | null;

		/** Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). */
		outputUri?: string | null;

		/** Video context and/or feature-specific parameters. */
		videoContext?: GoogleCloudVideointelligenceV1p2beta1_VideoContext;
	}

	/** Video annotation request. */
	export interface GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoRequestFormProperties {

		/** The video data bytes. If unset, the input video(s) should be specified via the `input_uri`. If set, `input_uri` must be unset. */
		inputContent: FormControl<string | null | undefined>,

		/** Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset. */
		inputUri: FormControl<string | null | undefined>,

		/** Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location. */
		locationId: FormControl<string | null | undefined>,

		/** Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_AnnotateVideoRequestFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoRequestFormProperties>({
			inputContent: new FormControl<string | null | undefined>(undefined),
			inputUri: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video context and/or feature-specific parameters. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoContext {

		/** Config for EXPLICIT_CONTENT_DETECTION. */
		explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1_ExplicitContentDetectionConfig;

		/** Config for FACE_DETECTION. */
		faceDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1_FaceDetectionConfig;

		/** Config for LABEL_DETECTION. */
		labelDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfig;

		/** Config for OBJECT_TRACKING. */
		objectTrackingConfig?: GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingConfig;

		/** Config for PERSON_DETECTION. */
		personDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1_PersonDetectionConfig;

		/** Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment. */
		segments?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoSegment>;

		/** Config for SHOT_CHANGE_DETECTION. */
		shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1_ShotChangeDetectionConfig;

		/** Config for SPEECH_TRANSCRIPTION. */
		speechTranscriptionConfig?: GoogleCloudVideointelligenceV1p2beta1_SpeechTranscriptionConfig;

		/** Config for TEXT_DETECTION. */
		textDetectionConfig?: GoogleCloudVideointelligenceV1p2beta1_TextDetectionConfig;
	}

	/** Video context and/or feature-specific parameters. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoContextFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_VideoContextFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_VideoContextFormProperties>({
		});

	}


	/** Config for EXPLICIT_CONTENT_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ExplicitContentDetectionConfig {

		/** Model to use for explicit content detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model?: string | null;
	}

	/** Config for EXPLICIT_CONTENT_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ExplicitContentDetectionConfigFormProperties {

		/** Model to use for explicit content detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_ExplicitContentDetectionConfigFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_ExplicitContentDetectionConfigFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for FACE_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceDetectionConfig {

		/** Whether to enable face attributes detection, such as glasses, dark_glasses, mouth_open etc. Ignored if 'include_bounding_boxes' is set to false. */
		includeAttributes?: boolean | null;

		/** Whether bounding boxes are included in the face annotation output. */
		includeBoundingBoxes?: boolean | null;

		/** Model to use for face detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model?: string | null;
	}

	/** Config for FACE_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceDetectionConfigFormProperties {

		/** Whether to enable face attributes detection, such as glasses, dark_glasses, mouth_open etc. Ignored if 'include_bounding_boxes' is set to false. */
		includeAttributes: FormControl<boolean | null | undefined>,

		/** Whether bounding boxes are included in the face annotation output. */
		includeBoundingBoxes: FormControl<boolean | null | undefined>,

		/** Model to use for face detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_FaceDetectionConfigFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_FaceDetectionConfigFormProperties>({
			includeAttributes: new FormControl<boolean | null | undefined>(undefined),
			includeBoundingBoxes: new FormControl<boolean | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for LABEL_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfig {

		/** The confidence threshold we perform filtering on the labels from frame-level detection. If not set, it is set to 0.4 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model. */
		frameConfidenceThreshold?: number | null;

		/** What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`. */
		labelDetectionMode?: GoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfigLabelDetectionMode | null;

		/** Model to use for label detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model?: string | null;

		/** Whether the video has been shot from a stationary (i.e., non-moving) camera. When set to true, might improve detection accuracy for moving objects. Should be used with `SHOT_AND_FRAME_MODE` enabled. */
		stationaryCamera?: boolean | null;

		/** The confidence threshold we perform filtering on the labels from video-level and shot-level detections. If not set, it's set to 0.3 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model. */
		videoConfidenceThreshold?: number | null;
	}

	/** Config for LABEL_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfigFormProperties {

		/** The confidence threshold we perform filtering on the labels from frame-level detection. If not set, it is set to 0.4 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model. */
		frameConfidenceThreshold: FormControl<number | null | undefined>,

		/** What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`. */
		labelDetectionMode: FormControl<GoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfigLabelDetectionMode | null | undefined>,

		/** Model to use for label detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model: FormControl<string | null | undefined>,

		/** Whether the video has been shot from a stationary (i.e., non-moving) camera. When set to true, might improve detection accuracy for moving objects. Should be used with `SHOT_AND_FRAME_MODE` enabled. */
		stationaryCamera: FormControl<boolean | null | undefined>,

		/** The confidence threshold we perform filtering on the labels from video-level and shot-level detections. If not set, it's set to 0.3 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model. */
		videoConfidenceThreshold: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfigFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfigFormProperties>({
			frameConfidenceThreshold: new FormControl<number | null | undefined>(undefined),
			labelDetectionMode: new FormControl<GoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfigLabelDetectionMode | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			stationaryCamera: new FormControl<boolean | null | undefined>(undefined),
			videoConfidenceThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudVideointelligenceV1p2beta1_LabelDetectionConfigLabelDetectionMode { LABEL_DETECTION_MODE_UNSPECIFIED = 0, SHOT_MODE = 1, FRAME_MODE = 2, SHOT_AND_FRAME_MODE = 3 }


	/** Config for OBJECT_TRACKING. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingConfig {

		/** Model to use for object tracking. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model?: string | null;
	}

	/** Config for OBJECT_TRACKING. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingConfigFormProperties {

		/** Model to use for object tracking. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_ObjectTrackingConfigFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingConfigFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for PERSON_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_PersonDetectionConfig {

		/** Whether to enable person attributes detection, such as cloth color (black, blue, etc), type (coat, dress, etc), pattern (plain, floral, etc), hair, etc. Ignored if 'include_bounding_boxes' is set to false. */
		includeAttributes?: boolean | null;

		/** Whether bounding boxes are included in the person detection annotation output. */
		includeBoundingBoxes?: boolean | null;

		/** Whether to enable pose landmarks detection. Ignored if 'include_bounding_boxes' is set to false. */
		includePoseLandmarks?: boolean | null;
	}

	/** Config for PERSON_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_PersonDetectionConfigFormProperties {

		/** Whether to enable person attributes detection, such as cloth color (black, blue, etc), type (coat, dress, etc), pattern (plain, floral, etc), hair, etc. Ignored if 'include_bounding_boxes' is set to false. */
		includeAttributes: FormControl<boolean | null | undefined>,

		/** Whether bounding boxes are included in the person detection annotation output. */
		includeBoundingBoxes: FormControl<boolean | null | undefined>,

		/** Whether to enable pose landmarks detection. Ignored if 'include_bounding_boxes' is set to false. */
		includePoseLandmarks: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_PersonDetectionConfigFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_PersonDetectionConfigFormProperties>({
			includeAttributes: new FormControl<boolean | null | undefined>(undefined),
			includeBoundingBoxes: new FormControl<boolean | null | undefined>(undefined),
			includePoseLandmarks: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Config for SHOT_CHANGE_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ShotChangeDetectionConfig {

		/** Model to use for shot change detection. Supported values: "builtin/stable" (the default if unset), "builtin/latest", and "builtin/legacy". */
		model?: string | null;
	}

	/** Config for SHOT_CHANGE_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ShotChangeDetectionConfigFormProperties {

		/** Model to use for shot change detection. Supported values: "builtin/stable" (the default if unset), "builtin/latest", and "builtin/legacy". */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_ShotChangeDetectionConfigFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_ShotChangeDetectionConfigFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Config for SPEECH_TRANSCRIPTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechTranscriptionConfig {

		/** Optional. For file formats, such as MXF or MKV, supporting multiple audio tracks, specify up to two tracks. Default: track 0. */
		audioTracks?: Array<number>;

		/** Optional. If set, specifies the estimated number of speakers in the conversation. If not set, defaults to '2'. Ignored unless enable_speaker_diarization is set to true. */
		diarizationSpeakerCount?: number | null;

		/** Optional. If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses. NOTE: "This is currently offered as an experimental service, complimentary to all users. In the future this may be exclusively available as a premium feature." */
		enableAutomaticPunctuation?: boolean | null;

		/** Optional. If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_tag provided in the WordInfo. Note: When this is true, we send all the words from the beginning of the audio for the top alternative in every consecutive response. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time. */
		enableSpeakerDiarization?: boolean | null;

		/** Optional. If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`. */
		enableWordConfidence?: boolean | null;

		/** Optional. If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won't be filtered out. */
		filterProfanity?: boolean | null;

		/** Required. *Required* The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech/docs/languages) for a list of the currently supported language codes. */
		languageCode?: string | null;

		/** Optional. Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechTranscription`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one. */
		maxAlternatives?: number | null;

		/** Optional. A means to provide context to assist the speech recognition. */
		speechContexts?: Array<GoogleCloudVideointelligenceV1p2beta1_SpeechContext>;
	}

	/** Config for SPEECH_TRANSCRIPTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechTranscriptionConfigFormProperties {

		/** Optional. If set, specifies the estimated number of speakers in the conversation. If not set, defaults to '2'. Ignored unless enable_speaker_diarization is set to true. */
		diarizationSpeakerCount: FormControl<number | null | undefined>,

		/** Optional. If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses. NOTE: "This is currently offered as an experimental service, complimentary to all users. In the future this may be exclusively available as a premium feature." */
		enableAutomaticPunctuation: FormControl<boolean | null | undefined>,

		/** Optional. If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_tag provided in the WordInfo. Note: When this is true, we send all the words from the beginning of the audio for the top alternative in every consecutive response. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time. */
		enableSpeakerDiarization: FormControl<boolean | null | undefined>,

		/** Optional. If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`. */
		enableWordConfidence: FormControl<boolean | null | undefined>,

		/** Optional. If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won't be filtered out. */
		filterProfanity: FormControl<boolean | null | undefined>,

		/** Required. *Required* The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech/docs/languages) for a list of the currently supported language codes. */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechTranscription`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one. */
		maxAlternatives: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_SpeechTranscriptionConfigFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_SpeechTranscriptionConfigFormProperties>({
			diarizationSpeakerCount: new FormControl<number | null | undefined>(undefined),
			enableAutomaticPunctuation: new FormControl<boolean | null | undefined>(undefined),
			enableSpeakerDiarization: new FormControl<boolean | null | undefined>(undefined),
			enableWordConfidence: new FormControl<boolean | null | undefined>(undefined),
			filterProfanity: new FormControl<boolean | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			maxAlternatives: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides "hints" to the speech recognizer to favor specific words and phrases in the results. */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechContext {

		/** Optional. A list of strings containing words and phrases "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech/limits#content). */
		phrases?: Array<string>;
	}

	/** Provides "hints" to the speech recognizer to favor specific words and phrases in the results. */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechContextFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_SpeechContextFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_SpeechContextFormProperties>({
		});

	}


	/** Config for TEXT_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextDetectionConfig {

		/** Language hint can be specified if the language to be detected is known a priori. It can increase the accuracy of the detection. Language hint must be language code in BCP-47 format. Automatic language detection is performed if no hint is provided. */
		languageHints?: Array<string>;

		/** Model to use for text detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model?: string | null;
	}

	/** Config for TEXT_DETECTION. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextDetectionConfigFormProperties {

		/** Model to use for text detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_TextDetectionConfigFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_TextDetectionConfigFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults>;
	}

	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponseFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponseFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponseFormProperties>({
		});

	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpc_Status;

		/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
		explicitAnnotation?: GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation;

		/** Deprecated. Please use `face_detection_annotations` instead. */
		faceAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation>;

		/** Face detection annotations. */
		faceDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation>;

		/** Label annotations on frame level. There is exactly one element for each unique label. */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation>;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation>;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation>;

		/** Person detection annotations. */
		personDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment;

		/** Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label. */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation>;

		/** Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation>;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoSegment>;

		/** Topical label annotations on shot level. There is exactly one element for each unique label. */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation>;

		/** Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation>;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription>;

		/** OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it. */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_TextAnnotation>;
	}

	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResultsFormProperties {

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResultsFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResultsFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame>;

		/** Feature version. */
		version?: string | null;
	}

	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrameFormProperties {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood: FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrameFormProperties>({
			pornographyLikelihood: new FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation {

		/** All video frames where a face was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_FaceFrame>;

		/** All video segments where a face was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p2beta1_FaceSegment>;

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceAnnotationFormProperties {

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_FaceAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceFrame {

		/** Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame. */
		normalizedBoundingBoxes?: Array<GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox>;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceFrameFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_FaceFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_FaceFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox {

		/** Bottom Y coordinate. */
		bottom?: number | null;

		/** Left X coordinate. */
		left?: number | null;

		/** Right X coordinate. */
		right?: number | null;

		/** Top Y coordinate. */
		top?: number | null;
	}

	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBoxFormProperties {

		/** Bottom Y coordinate. */
		bottom: FormControl<number | null | undefined>,

		/** Left X coordinate. */
		left: FormControl<number | null | undefined>,

		/** Right X coordinate. */
		right: FormControl<number | null | undefined>,

		/** Top Y coordinate. */
		top: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBoxFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBoxFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceSegment {

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
	}

	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceSegmentFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_FaceSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_FaceSegmentFormProperties>({
		});

	}


	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation {

		/** The thumbnail of a person's face. */
		thumbnail?: string | null;

		/** The face tracks with attributes. */
		tracks?: Array<GoogleCloudVideointelligenceV1p2beta1_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotationFormProperties {

		/** The thumbnail of a person's face. */
		thumbnail: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p2beta1_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute>;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1p2beta1_TimestampedObject>;
	}

	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TrackFormProperties {

		/** Optional. The confidence score of the tracked object. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_TrackFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_TrackFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name?: string | null;

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value?: string | null;
	}

	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p2beta1_DetectedAttributeFormProperties {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name: FormControl<string | null | undefined>,

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_DetectedAttributeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_DetectedAttributeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute>;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark>;

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset?: string | null;
	}

	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TimestampedObjectFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_TimestampedObjectFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_TimestampedObjectFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name?: string | null;

		/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
		point?: GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex;
	}

	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1p2beta1_DetectedLandmarkFormProperties {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_DetectedLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_DetectedLandmarkFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1p2beta1_NormalizedVertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate. */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation {

		/** Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`. */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1p2beta1_Entity>;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p2beta1_Entity;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelFrame>;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelSegment>;

		/** Feature version. */
		version?: string | null;
	}

	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_LabelAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p2beta1_Entity {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description?: string | null;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}

	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p2beta1_EntityFormProperties {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId: FormControl<string | null | undefined>,

		/** Language code for `description` in BCP-47 format. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_EntityFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_EntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelFrameFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_LabelFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_LabelFrameFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
	}

	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelSegmentFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_LabelSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_LabelSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p2beta1_Entity;

		/** All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment. */
		segments?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoSegment>;

		/** All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames. */
		tracks?: Array<GoogleCloudVideointelligenceV1p2beta1_Track>;
	}

	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotationFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotationFormProperties>({
		});

	}


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p2beta1_Entity;

		/** Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames. */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment;

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotationFormProperties {

		/** Object category's labeling confidence of this track. */
		confidence: FormControl<number | null | undefined>,

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			trackId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame {

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}

	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrameFormProperties {

		/** The timestamp of the frame in microseconds. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation {

		/** The detected tracks of a person. */
		tracks?: Array<GoogleCloudVideointelligenceV1p2beta1_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription {

		/** May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. */
		alternatives?: Array<GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative>;

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode?: string | null;
	}

	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechTranscriptionFormProperties {

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_SpeechTranscriptionFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_SpeechTranscriptionFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/** Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio. */
		words?: Array<GoogleCloudVideointelligenceV1p2beta1_WordInfo>;
	}

	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternativeFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Transcript text representing the words that the user spoke. */
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternativeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternativeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1p2beta1_WordInfo {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime?: string | null;

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}

	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1p2beta1_WordInfoFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime: FormControl<string | null | undefined>,

		/** The word corresponding to this set of information. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_WordInfoFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_WordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			speakerTag: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1p2beta1_TextSegment>;

		/** The detected text. */
		text?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextAnnotationFormProperties {

		/** The detected text. */
		text: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextSegment {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_TextFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment;
	}

	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextSegmentFormProperties {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_TextSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_TextSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextFrame {

		/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextFrameFormProperties {

		/** Timestamp of this frame. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_TextFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_TextFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex>;
	}

	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPolyFormProperties>({
		});

	}


	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress>;
	}

	/** Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgressFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgressFormProperties>({
		});

	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature?: GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFeature | null;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}

	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFormProperties {

		/** Specifies which feature is being tracked if the request contains more than one feature. */
		feature: FormControl<GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFeature | null | undefined>,

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,

		/** Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. */
		progressPercent: FormControl<number | null | undefined>,

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,

		/** Time of the most recent update. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFormProperties>({
			feature: new FormControl<GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFeature | null | undefined>(undefined),
			inputUri: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFeature { FEATURE_UNSPECIFIED = 0, LABEL_DETECTION = 1, SHOT_CHANGE_DETECTION = 2, EXPLICIT_CONTENT_DETECTION = 3, FACE_DETECTION = 4, SPEECH_TRANSCRIPTION = 5, TEXT_DETECTION = 6, OBJECT_TRACKING = 7, LOGO_RECOGNITION = 8, CELEBRITY_RECOGNITION = 9, PERSON_DETECTION = 10 }


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoSegment {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset?: string | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset?: string | null;
	}

	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoSegmentFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_VideoSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_VideoSegmentFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults>;
	}

	/** Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponseFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponseFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponseFormProperties>({
		});

	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults {

		/** Celebrity recognition annotation per video. */
		celebrityRecognitionAnnotations?: GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpc_Status;

		/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
		explicitAnnotation?: GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation;

		/** Deprecated. Please use `face_detection_annotations` instead. */
		faceAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation>;

		/** Face detection annotations. */
		faceDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation>;

		/** Label annotations on frame level. There is exactly one element for each unique label. */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation>;

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation>;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation>;

		/** Person detection annotations. */
		personDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment;

		/** Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label. */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation>;

		/** Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation>;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoSegment>;

		/** Topical label annotations on shot level. There is exactly one element for each unique label. */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation>;

		/** Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request. */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation>;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription>;

		/** OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it. */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_TextAnnotation>;
	}

	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResultsFormProperties {

		/** Video file location in [Cloud Storage](https://cloud.google.com/storage/). */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResultsFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResultsFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Celebrity recognition annotation per video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation {

		/** The tracks detected from the input video, including recognized celebrities and other detected faces in the video. */
		celebrityTracks?: Array<GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack>;

		/** Feature version. */
		version?: string | null;
	}

	/** Celebrity recognition annotation per video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The annotation result of a celebrity face track. RecognizedCelebrity field could be empty if the face track does not have any matched celebrities. */
	export interface GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack {

		/** Top N match of the celebrities for the face in this track. */
		celebrities?: Array<GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity>;

		/** A track of an object instance. */
		faceTrack?: GoogleCloudVideointelligenceV1p3beta1_Track;
	}

	/** The annotation result of a celebrity face track. RecognizedCelebrity field could be empty if the face track does not have any matched celebrities. */
	export interface GoogleCloudVideointelligenceV1p3beta1_CelebrityTrackFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_CelebrityTrackFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_CelebrityTrackFormProperties>({
		});

	}


	/** The recognized celebrity with confidence score. */
	export interface GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity {

		/** Celebrity definition. */
		celebrity?: GoogleCloudVideointelligenceV1p3beta1_Celebrity;

		/** Recognition confidence. Range [0, 1]. */
		confidence?: number | null;
	}

	/** The recognized celebrity with confidence score. */
	export interface GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrityFormProperties {

		/** Recognition confidence. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrityFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrityFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Celebrity definition. */
	export interface GoogleCloudVideointelligenceV1p3beta1_Celebrity {

		/** Textual description of additional information about the celebrity, if applicable. */
		description?: string | null;

		/** The celebrity name. */
		displayName?: string | null;

		/** The resource name of the celebrity. Have the format `video-intelligence/kg-mid` indicates a celebrity from preloaded gallery. kg-mid is the id in Google knowledge graph, which is unique for the celebrity. */
		name?: string | null;
	}

	/** Celebrity definition. */
	export interface GoogleCloudVideointelligenceV1p3beta1_CelebrityFormProperties {

		/** Textual description of additional information about the celebrity, if applicable. */
		description: FormControl<string | null | undefined>,

		/** The celebrity name. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the celebrity. Have the format `video-intelligence/kg-mid` indicates a celebrity from preloaded gallery. kg-mid is the id in Google knowledge graph, which is unique for the celebrity. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_CelebrityFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_CelebrityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p3beta1_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute>;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1p3beta1_TimestampedObject>;
	}

	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TrackFormProperties {

		/** Optional. The confidence score of the tracked object. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_TrackFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_TrackFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name?: string | null;

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value?: string | null;
	}

	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p3beta1_DetectedAttributeFormProperties {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document. */
		name: FormControl<string | null | undefined>,

		/** Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_DetectedAttributeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_DetectedAttributeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute>;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark>;

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset?: string | null;
	}

	/** For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TimestampedObjectFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_TimestampedObjectFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_TimestampedObjectFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name?: string | null;

		/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
		point?: GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex;
	}

	/** A generic detected landmark represented by name in string format and a 2D location. */
	export interface GoogleCloudVideointelligenceV1p3beta1_DetectedLandmarkFormProperties {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** The name of this landmark, for example, left_hand, right_shoulder. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_DetectedLandmarkFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_DetectedLandmarkFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1. */
	export interface GoogleCloudVideointelligenceV1p3beta1_NormalizedVertexFormProperties {

		/** X coordinate. */
		x: FormControl<number | null | undefined>,

		/** Y coordinate. */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_NormalizedVertexFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox {

		/** Bottom Y coordinate. */
		bottom?: number | null;

		/** Left X coordinate. */
		left?: number | null;

		/** Right X coordinate. */
		right?: number | null;

		/** Top Y coordinate. */
		top?: number | null;
	}

	/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
	export interface GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBoxFormProperties {

		/** Bottom Y coordinate. */
		bottom: FormControl<number | null | undefined>,

		/** Left X coordinate. */
		left: FormControl<number | null | undefined>,

		/** Right X coordinate. */
		right: FormControl<number | null | undefined>,

		/** Top Y coordinate. */
		top: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBoxFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBoxFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame>;

		/** Feature version. */
		version?: string | null;
	}

	/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrameFormProperties {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood: FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrameFormProperties>({
			pornographyLikelihood: new FormControl<GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation {

		/** All video frames where a face was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_FaceFrame>;

		/** All video segments where a face was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p3beta1_FaceSegment>;

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceAnnotationFormProperties {

		/** Thumbnail of a representative face view (in JPEG format). */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_FaceAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_FaceAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceFrame {

		/** Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame. */
		normalizedBoundingBoxes?: Array<GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox>;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Deprecated. No effect. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceFrameFormProperties {

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_FaceFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_FaceFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceSegment {

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
	}

	/** Video segment level annotation results for face detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceSegmentFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_FaceSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_FaceSegmentFormProperties>({
		});

	}


	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation {

		/** The thumbnail of a person's face. */
		thumbnail?: string | null;

		/** The face tracks with attributes. */
		tracks?: Array<GoogleCloudVideointelligenceV1p3beta1_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotationFormProperties {

		/** The thumbnail of a person's face. */
		thumbnail: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotationFormProperties>({
			thumbnail: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation {

		/** Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`. */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1p3beta1_Entity>;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p3beta1_Entity;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelFrame>;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelSegment>;

		/** Feature version. */
		version?: string | null;
	}

	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_LabelAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p3beta1_Entity {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description?: string | null;

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}

	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p3beta1_EntityFormProperties {

		/** Textual description, e.g., `Fixed-gear bicycle`. */
		description: FormControl<string | null | undefined>,

		/** Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/). */
		entityId: FormControl<string | null | undefined>,

		/** Language code for `description` in BCP-47 format. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_EntityFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_EntityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelFrameFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,

		/** Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_LabelFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_LabelFrameFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
	}

	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelSegmentFormProperties {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_LabelSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_LabelSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p3beta1_Entity;

		/** All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment. */
		segments?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoSegment>;

		/** All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames. */
		tracks?: Array<GoogleCloudVideointelligenceV1p3beta1_Track>;
	}

	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotationFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotationFormProperties>({
		});

	}


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p3beta1_Entity;

		/** Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames. */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment;

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotationFormProperties {

		/** Object category's labeling confidence of this track. */
		confidence: FormControl<number | null | undefined>,

		/** Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. */
		trackId: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotationFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			trackId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame {

		/** Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1]. */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}

	/** Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrameFormProperties {

		/** The timestamp of the frame in microseconds. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation {

		/** The detected tracks of a person. */
		tracks?: Array<GoogleCloudVideointelligenceV1p3beta1_Track>;

		/** Feature version. */
		version?: string | null;
	}

	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotationFormProperties {

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotationFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription {

		/** May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. */
		alternatives?: Array<GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative>;

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode?: string | null;
	}

	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionFormProperties {

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/** Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio. */
		words?: Array<GoogleCloudVideointelligenceV1p3beta1_WordInfo>;
	}

	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternativeFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Transcript text representing the words that the user spoke. */
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternativeFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternativeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1p3beta1_WordInfo {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime?: string | null;

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}

	/** Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`. */
	export interface GoogleCloudVideointelligenceV1p3beta1_WordInfoFormProperties {

		/** Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. */
		speakerTag: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime: FormControl<string | null | undefined>,

		/** The word corresponding to this set of information. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_WordInfoFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_WordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			speakerTag: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1p3beta1_TextSegment>;

		/** The detected text. */
		text?: string | null;

		/** Feature version. */
		version?: string | null;
	}

	/** Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextAnnotationFormProperties {

		/** The detected text. */
		text: FormControl<string | null | undefined>,

		/** Feature version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_TextAnnotationFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_TextAnnotationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextSegment {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_TextFrame>;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment;
	}

	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextSegmentFormProperties {

		/** Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. */
		confidence: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_TextSegmentFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_TextSegmentFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextFrame {

		/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}

	/** Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextFrameFormProperties {

		/** Timestamp of this frame. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_TextFrameFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_TextFrameFormProperties>({
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex>;
	}

	/** Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box. */
	export interface GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPolyFormProperties {
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPolyFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPolyFormProperties>({
		});

	}


	/** `StreamingAnnotateVideoResponse` is the only message returned to the client by `StreamingAnnotateVideo`. A series of zero or more `StreamingAnnotateVideoResponse` messages are streamed back to the client. */
	export interface GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponse {

		/** Streaming annotation results corresponding to a portion of the video that is currently being processed. Only ONE type of annotation will be specified in the response. */
		annotationResults?: GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults;

		/** Google Cloud Storage URI that stores annotation results of one streaming session in JSON format. It is the annotation_result_storage_directory from the request followed by '/cloud_project_number-session_id'. */
		annotationResultsUri?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpc_Status;
	}

	/** `StreamingAnnotateVideoResponse` is the only message returned to the client by `StreamingAnnotateVideo`. A series of zero or more `StreamingAnnotateVideoResponse` messages are streamed back to the client. */
	export interface GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponseFormProperties {

		/** Google Cloud Storage URI that stores annotation results of one streaming session in JSON format. It is the annotation_result_storage_directory from the request followed by '/cloud_project_number-session_id'. */
		annotationResultsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponseFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponseFormProperties>({
			annotationResultsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Streaming annotation results corresponding to a portion of the video that is currently being processed. Only ONE type of annotation will be specified in the response. */
	export interface GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults {

		/** Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame. */
		explicitAnnotation?: GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation;

		/** Timestamp of the processed frame in microseconds. */
		frameTimestamp?: string | null;

		/** Label annotation results. */
		labelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation>;

		/** Object tracking results. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation>;

		/** Shot annotation results. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoSegment>;
	}

	/** Streaming annotation results corresponding to a portion of the video that is currently being processed. Only ONE type of annotation will be specified in the response. */
	export interface GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResultsFormProperties {

		/** Timestamp of the processed frame in microseconds. */
		frameTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResultsFormGroup() {
		return new FormGroup<GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResultsFormProperties>({
			frameTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunning_Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpc_Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunning_OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunning_OperationFormGroup() {
		return new FormGroup<GoogleLongrunning_OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).
		 * Post v1p2beta1/videos:annotate
		 * @return {GoogleLongrunning_Operation} Successful response
		 */
		Videointelligence_videos_annotate(requestBody: GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoRequest): Observable<GoogleLongrunning_Operation> {
			return this.http.post<GoogleLongrunning_Operation>(this.baseUri + 'v1p2beta1/videos:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

