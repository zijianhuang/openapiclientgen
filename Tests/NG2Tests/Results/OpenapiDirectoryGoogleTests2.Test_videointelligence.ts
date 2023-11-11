import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Video annotation progress. Included in the `metadata`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1_VideoAnnotationProgress> | null;
	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1_VideoAnnotationProgress {

		/**
		 * Specifies which feature is being tracked if the request contains more than
		 * one features.
		 */
		feature?: GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/**
		 * Approximate percentage processed thus far. Guaranteed to be
		 * 100 when fully processed.
		 */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment | null;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}

	export enum GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature { FEATURE_UNSPECIFIED = 0, LABEL_DETECTION = 1, SHOT_CHANGE_DETECTION = 2, EXPLICIT_CONTENT_DETECTION = 3, SPEECH_TRANSCRIPTION = 4, TEXT_DETECTION = 5, OBJECT_TRACKING = 6, LOGO_RECOGNITION = 7 }


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1_VideoSegment {

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the end of the segment (inclusive).
		 */
		endTimeOffset?: string | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the start of the segment (inclusive).
		 */
		startTimeOffset?: string | null;
	}


	/** Video annotation request. */
	export interface GoogleCloudVideointelligenceV1_AnnotateVideoRequest {

		/** Required. Requested video annotation features. */
		features?: Array<GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature> | null;

		/**
		 * The video data bytes.
		 * If unset, the input video(s) should be specified via `input_uri`.
		 * If set, `input_uri` should be unset.
		 */
		inputContent?: string | null;

		/**
		 * Input video location. Currently, only
		 * [Cloud Storage](https://cloud.google.com/storage/) URIs are
		 * supported, which must be specified in the following format:
		 * `gs://bucket-id/object-id` (other URI formats return
		 * google.rpc.Code.INVALID_ARGUMENT). For more information, see
		 * [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).
		 * A video URI may include wildcards in `object-id`, and thus identify
		 * multiple videos. Supported wildcards: '*' to match 0 or more characters;
		 * '?' to match 1 character. If unset, the input video should be embedded
		 * in the request as `input_content`. If set, `input_content` should be unset.
		 */
		inputUri?: string | null;

		/**
		 * Optional. Cloud region where annotation should take place. Supported cloud
		 * regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
		 * is specified, a region will be determined based on video file location.
		 */
		locationId?: string | null;

		/**
		 * Optional. Location where the output (in JSON format) should be stored.
		 * Currently, only [Cloud Storage](https://cloud.google.com/storage/)
		 * URIs are supported, which must be specified in the following format:
		 * `gs://bucket-id/object-id` (other URI formats return
		 * google.rpc.Code.INVALID_ARGUMENT). For more information, see
		 * [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).
		 */
		outputUri?: string | null;

		/** Video context and/or feature-specific parameters. */
		videoContext?: GoogleCloudVideointelligenceV1_VideoContext | null;
	}


	/** Video context and/or feature-specific parameters. */
	export interface GoogleCloudVideointelligenceV1_VideoContext {

		/** Config for EXPLICIT_CONTENT_DETECTION. */
		explicitContentDetectionConfig?: GoogleCloudVideointelligenceV1_ExplicitContentDetectionConfig | null;

		/** Config for LABEL_DETECTION. */
		labelDetectionConfig?: GoogleCloudVideointelligenceV1_LabelDetectionConfig | null;

		/** Config for OBJECT_TRACKING. */
		objectTrackingConfig?: GoogleCloudVideointelligenceV1_ObjectTrackingConfig | null;

		/**
		 * Video segments to annotate. The segments may overlap and are not required
		 * to be contiguous or span the whole video. If unspecified, each video is
		 * treated as a single segment.
		 */
		segments?: Array<GoogleCloudVideointelligenceV1_VideoSegment> | null;

		/** Config for SHOT_CHANGE_DETECTION. */
		shotChangeDetectionConfig?: GoogleCloudVideointelligenceV1_ShotChangeDetectionConfig | null;

		/** Config for SPEECH_TRANSCRIPTION. */
		speechTranscriptionConfig?: GoogleCloudVideointelligenceV1_SpeechTranscriptionConfig | null;

		/** Config for TEXT_DETECTION. */
		textDetectionConfig?: GoogleCloudVideointelligenceV1_TextDetectionConfig | null;
	}


	/** Config for EXPLICIT_CONTENT_DETECTION. */
	export interface GoogleCloudVideointelligenceV1_ExplicitContentDetectionConfig {

		/**
		 * Model to use for explicit content detection.
		 * Supported values: "builtin/stable" (the default if unset) and
		 * "builtin/latest".
		 */
		model?: string | null;
	}


	/** Config for LABEL_DETECTION. */
	export interface GoogleCloudVideointelligenceV1_LabelDetectionConfig {

		/**
		 * The confidence threshold we perform filtering on the labels from
		 * frame-level detection. If not set, it is set to 0.4 by default. The valid
		 * range for this threshold is [0.1, 0.9]. Any value set outside of this
		 * range will be clipped.
		 * Note: for best results please follow the default threshold. We will update
		 * the default threshold everytime when we release a new model.
		 */
		frameConfidenceThreshold?: number | null;

		/**
		 * What labels should be detected with LABEL_DETECTION, in addition to
		 * video-level labels or segment-level labels.
		 * If unspecified, defaults to `SHOT_MODE`.
		 */
		labelDetectionMode?: GoogleCloudVideointelligenceV1_LabelDetectionConfigLabelDetectionMode | null;

		/**
		 * Model to use for label detection.
		 * Supported values: "builtin/stable" (the default if unset) and
		 * "builtin/latest".
		 */
		model?: string | null;

		/**
		 * Whether the video has been shot from a stationary (i.e. non-moving) camera.
		 * When set to true, might improve detection accuracy for moving objects.
		 * Should be used with `SHOT_AND_FRAME_MODE` enabled.
		 */
		stationaryCamera?: boolean | null;

		/**
		 * The confidence threshold we perform filtering on the labels from
		 * video-level and shot-level detections. If not set, it is set to 0.3 by
		 * default. The valid range for this threshold is [0.1, 0.9]. Any value set
		 * outside of this range will be clipped.
		 * Note: for best results please follow the default threshold. We will update
		 * the default threshold everytime when we release a new model.
		 */
		videoConfidenceThreshold?: number | null;
	}

	export enum GoogleCloudVideointelligenceV1_LabelDetectionConfigLabelDetectionMode { LABEL_DETECTION_MODE_UNSPECIFIED = 0, SHOT_MODE = 1, FRAME_MODE = 2, SHOT_AND_FRAME_MODE = 3 }


	/** Config for OBJECT_TRACKING. */
	export interface GoogleCloudVideointelligenceV1_ObjectTrackingConfig {

		/**
		 * Model to use for object tracking.
		 * Supported values: "builtin/stable" (the default if unset) and
		 * "builtin/latest".
		 */
		model?: string | null;
	}


	/** Config for SHOT_CHANGE_DETECTION. */
	export interface GoogleCloudVideointelligenceV1_ShotChangeDetectionConfig {

		/**
		 * Model to use for shot change detection.
		 * Supported values: "builtin/stable" (the default if unset) and
		 * "builtin/latest".
		 */
		model?: string | null;
	}


	/** Config for SPEECH_TRANSCRIPTION. */
	export interface GoogleCloudVideointelligenceV1_SpeechTranscriptionConfig {

		/**
		 * Optional. For file formats, such as MXF or MKV, supporting multiple audio
		 * tracks, specify up to two tracks. Default: track 0.
		 */
		audioTracks?: Array<number> | null;

		/**
		 * Optional. If set, specifies the estimated number of speakers in the conversation.
		 * If not set, defaults to '2'.
		 * Ignored unless enable_speaker_diarization is set to true.
		 */
		diarizationSpeakerCount?: number | null;

		/**
		 * Optional. If 'true', adds punctuation to recognition result hypotheses.
		 * This feature is only available in select languages. Setting this for
		 * requests in other languages has no effect at all. The default 'false' value
		 * does not add punctuation to result hypotheses. NOTE: "This is currently
		 * offered as an experimental service, complimentary to all users. In the
		 * future this may be exclusively available as a premium feature."
		 */
		enableAutomaticPunctuation?: boolean | null;

		/**
		 * Optional. If 'true', enables speaker detection for each recognized word in
		 * the top alternative of the recognition result using a speaker_tag provided
		 * in the WordInfo.
		 * Note: When this is true, we send all the words from the beginning of the
		 * audio for the top alternative in every consecutive responses.
		 * This is done in order to improve our speaker tags as our models learn to
		 * identify the speakers in the conversation over time.
		 */
		enableSpeakerDiarization?: boolean | null;

		/**
		 * Optional. If `true`, the top result includes a list of words and the
		 * confidence for those words. If `false`, no word-level confidence
		 * information is returned. The default is `false`.
		 */
		enableWordConfidence?: boolean | null;

		/**
		 * Optional. If set to `true`, the server will attempt to filter out
		 * profanities, replacing all but the initial character in each filtered word
		 * with asterisks, e.g. "f***". If set to `false` or omitted, profanities
		 * won't be filtered out.
		 */
		filterProfanity?: boolean | null;

		/**
		 * Required. *Required* The language of the supplied audio as a
		 * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
		 * Example: "en-US".
		 * See [Language Support](https://cloud.google.com/speech/docs/languages)
		 * for a list of the currently supported language codes.
		 */
		languageCode?: string | null;

		/**
		 * Optional. Maximum number of recognition hypotheses to be returned.
		 * Specifically, the maximum number of `SpeechRecognitionAlternative` messages
		 * within each `SpeechTranscription`. The server may return fewer than
		 * `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will
		 * return a maximum of one. If omitted, will return a maximum of one.
		 */
		maxAlternatives?: number | null;

		/** Optional. A means to provide context to assist the speech recognition. */
		speechContexts?: Array<GoogleCloudVideointelligenceV1_SpeechContext> | null;
	}


	/**
	 * Provides "hints" to the speech recognizer to favor specific words and phrases
	 * in the results.
	 */
	export interface GoogleCloudVideointelligenceV1_SpeechContext {

		/**
		 * Optional. A list of strings containing words and phrases "hints" so that
		 * the speech recognition is more likely to recognize them. This can be used
		 * to improve the accuracy for specific words and phrases, for example, if
		 * specific commands are typically spoken by the user. This can also be used
		 * to add additional words to the vocabulary of the recognizer. See
		 * [usage limits](https://cloud.google.com/speech/limits#content).
		 */
		phrases?: Array<string> | null;
	}


	/** Config for TEXT_DETECTION. */
	export interface GoogleCloudVideointelligenceV1_TextDetectionConfig {

		/**
		 * Language hint can be specified if the language to be detected is known a
		 * priori. It can increase the accuracy of the detection. Language hint must
		 * be language code in BCP-47 format.
		 * Automatic language detection is performed if no hint is provided.
		 */
		languageHints?: Array<string> | null;

		/**
		 * Model to use for text detection.
		 * Supported values: "builtin/stable" (the default if unset) and
		 * "builtin/latest".
		 */
		model?: string | null;
	}


	/**
	 * Video annotation response. Included in the `response`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1_VideoAnnotationResults> | null;
	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1_VideoAnnotationResults {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: GoogleRpc_Status | null;

		/**
		 * Explicit content annotation (based on per-frame visual signals only).
		 * If no explicit content has been detected in a frame, no annotations are
		 * present for that frame.
		 */
		explicitAnnotation?: GoogleCloudVideointelligenceV1_ExplicitContentAnnotation | null;

		/**
		 * Label annotations on frame level.
		 * There is exactly one element for each unique label.
		 */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation> | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation> | null;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment | null;

		/**
		 * Topical label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label.
		 */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation> | null;

		/**
		 * Presence label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label. Compared to the
		 * existing topical `segment_label_annotations`, this field presents more
		 * fine-grained, segment-level labels detected in video content and is made
		 * available only when the client sets `LabelDetectionConfig.model` to
		 * "builtin/latest" in the request.
		 */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation> | null;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1_VideoSegment> | null;

		/**
		 * Topical label annotations on shot level.
		 * There is exactly one element for each unique label.
		 */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation> | null;

		/**
		 * Presence label annotations on shot level. There is exactly one element for
		 * each unique label. Compared to the existing topical
		 * `shot_label_annotations`, this field presents more fine-grained, shot-level
		 * labels detected in video content and is made available only when the client
		 * sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
		 */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1_LabelAnnotation> | null;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1_SpeechTranscription> | null;

		/**
		 * OCR text detection and tracking.
		 * Annotations for list of detected text snippets. Each will have list of
		 * frame information associated with it.
		 */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1_TextAnnotation> | null;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface GoogleRpc_Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}


	/**
	 * Explicit content annotation (based on per-frame visual signals only).
	 * If no explicit content has been detected in a frame, no annotations are
	 * present for that frame.
	 */
	export interface GoogleCloudVideointelligenceV1_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1_ExplicitContentFrame> | null;
	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}

	export enum GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood { LIKELIHOOD_UNSPECIFIED = 0, VERY_UNLIKELY = 1, UNLIKELY = 2, POSSIBLE = 3, LIKELY = 4, VERY_LIKELY = 5 }


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1_LabelAnnotation {

		/**
		 * Common categories for the detected entity.
		 * E.g. when the label is `Terrier` the category is likely `dog`. And in some
		 * cases there might be more than one categories e.g. `Terrier` could also be
		 * a `pet`.
		 */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1_Entity> | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1_Entity | null;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1_LabelFrame> | null;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1_LabelSegment> | null;
	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1_Entity {

		/** Textual description, e.g. `Fixed-gear bicycle`. */
		description?: string | null;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment | null;
	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1_Entity | null;

		/**
		 * All video segments where the recognized logo appears. There might be
		 * multiple instances of the same logo class appearing in one VideoSegment.
		 */
		segments?: Array<GoogleCloudVideointelligenceV1_VideoSegment> | null;

		/**
		 * All logo tracks where the recognized logo appears. Each track corresponds
		 * to one logo instance appearing in consecutive frames.
		 */
		tracks?: Array<GoogleCloudVideointelligenceV1_Track> | null;
	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1_DetectedAttribute> | null;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment | null;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1_TimestampedObject> | null;
	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/**
		 * The name of the attribute, i.e. glasses, dark_glasses, mouth_open etc.
		 * A full list of supported type names will be provided in the document.
		 */
		name?: string | null;

		/**
		 * Text value of the detection result. For example, the value for "HairColor"
		 * can be "black", "blonde", etc.
		 */
		value?: string | null;
	}


	/**
	 * For tracking related features.
	 * An object at time_offset with attributes, and located with
	 * normalized_bounding_box.
	 */
	export interface GoogleCloudVideointelligenceV1_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1_DetectedAttribute> | null;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1_DetectedLandmark> | null;

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1_NormalizedBoundingBox | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the video frame for this object.
		 */
		timeOffset?: string | null;
	}


	/**
	 * A generic detected landmark represented by name in string format and a 2D
	 * location.
	 */
	export interface GoogleCloudVideointelligenceV1_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, i.e. left_hand, right_shoulder. */
		name?: string | null;

		/**
		 * A vertex represents a 2D point in the image.
		 * NOTE: the normalized vertex coordinates are relative to the original image
		 * and range from 0 to 1.
		 */
		point?: GoogleCloudVideointelligenceV1_NormalizedVertex | null;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVideointelligenceV1_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}


	/**
	 * Normalized bounding box.
	 * The normalized vertex coordinates are relative to the original image.
	 * Range: [0, 1].
	 */
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


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1_Entity | null;

		/**
		 * Information corresponding to all frames where this object track appears.
		 * Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame
		 * messages in frames.
		 * Streaming mode: it can only be one ObjectTrackingFrame message in frames.
		 */
		frames?: Array<GoogleCloudVideointelligenceV1_ObjectTrackingFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment | null;

		/**
		 * Streaming mode ONLY.
		 * In streaming mode, we do not know the end time of a tracked object
		 * before it is completed. Hence, there is no VideoSegment info returned.
		 * Instead, we provide a unique identifiable integer track_id so that
		 * the customers can correlate the results of the ongoing
		 * ObjectTrackAnnotation of the same track_id over time.
		 */
		trackId?: string | null;
	}


	/**
	 * Video frame level annotations for object detection and tracking. This field
	 * stores per frame location, time offset, and confidence.
	 */
	export interface GoogleCloudVideointelligenceV1_ObjectTrackingFrame {

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1_NormalizedBoundingBox | null;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1_SpeechTranscription {

		/**
		 * May contain one or more recognition hypotheses (up to the maximum specified
		 * in `max_alternatives`).  These alternatives are ordered in terms of
		 * accuracy, with the top (first) alternative being the most probable, as
		 * ranked by the recognizer.
		 */
		alternatives?: Array<GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative> | null;

		/**
		 * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of
		 * the language in this result. This language code was detected to have the
		 * most likelihood of being spoken in the audio.
		 */
		languageCode?: string | null;
	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/**
		 * Output only. A list of word-specific information for each recognized word.
		 * Note: When `enable_speaker_diarization` is true, you will see all the words
		 * from the beginning of the audio.
		 */
		words?: Array<GoogleCloudVideointelligenceV1_WordInfo> | null;
	}


	/**
	 * Word-specific information for recognized words. Word information is only
	 * included in the response when certain request parameters are set, such
	 * as `enable_word_time_offsets`.
	 */
	export interface GoogleCloudVideointelligenceV1_WordInfo {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the end of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		endTime?: string | null;

		/**
		 * Output only. A distinct integer value is assigned for every speaker within
		 * the audio. This field specifies which one of those speakers was detected to
		 * have spoken this word. Value ranges from 1 up to diarization_speaker_count,
		 * and is only set if speaker diarization is enabled.
		 */
		speakerTag?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the start of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}


	/**
	 * Annotations related to one detected OCR text snippet. This will contain the
	 * corresponding text, confidence value, and frame level information for each
	 * detection.
	 */
	export interface GoogleCloudVideointelligenceV1_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1_TextSegment> | null;

		/** The detected text. */
		text?: string | null;
	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1_TextSegment {

		/**
		 * Confidence for the track of detected text. It is calculated as the highest
		 * over all frames where OCR detected text appears.
		 */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1_TextFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1_VideoSegment | null;
	}


	/**
	 * Video frame level annotation results for text annotation (OCR).
	 * Contains information regarding timestamp and bounding box locations for the
	 * frames containing detected OCR text snippets.
	 */
	export interface GoogleCloudVideointelligenceV1_TextFrame {

		/**
		 * Normalized bounding polygon for text (that might not be aligned with axis).
		 * Contains list of the corner points in clockwise order starting from
		 * top-left corner. For example, for a rectangular bounding box:
		 * When the text is horizontal it might look like:
		 * 0----1
		 * |    |
		 * 3----2
		 * When it's clockwise rotated 180 degrees around the top-left corner it
		 * becomes:
		 * 2----3
		 * |    |
		 * 1----0
		 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
		 * than 0, or greater than 1 due to trignometric calculations for location of
		 * the box.
		 */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1_NormalizedBoundingPoly | null;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}


	/**
	 * Normalized bounding polygon for text (that might not be aligned with axis).
	 * Contains list of the corner points in clockwise order starting from
	 * top-left corner. For example, for a rectangular bounding box:
	 * When the text is horizontal it might look like:
	 *         0----1
	 *         |    |
	 *         3----2
	 * When it's clockwise rotated 180 degrees around the top-left corner it
	 * becomes:
	 *         2----3
	 *         |    |
	 *         1----0
	 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
	 * than 0, or greater than 1 due to trignometric calculations for location of
	 * the box.
	 */
	export interface GoogleCloudVideointelligenceV1_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1_NormalizedVertex> | null;
	}


	/**
	 * Video annotation progress. Included in the `metadata`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress> | null;
	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress {

		/**
		 * Specifies which feature is being tracked if the request contains more than
		 * one features.
		 */
		feature?: GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/**
		 * Approximate percentage processed thus far. Guaranteed to be
		 * 100 when fully processed.
		 */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment | null;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoSegment {

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the end of the segment (inclusive).
		 */
		endTimeOffset?: string | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the start of the segment (inclusive).
		 */
		startTimeOffset?: string | null;
	}


	/**
	 * Video annotation response. Included in the `response`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults> | null;
	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: GoogleRpc_Status | null;

		/**
		 * Explicit content annotation (based on per-frame visual signals only).
		 * If no explicit content has been detected in a frame, no annotations are
		 * present for that frame.
		 */
		explicitAnnotation?: GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation | null;

		/**
		 * Label annotations on frame level.
		 * There is exactly one element for each unique label.
		 */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation> | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation> | null;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment | null;

		/**
		 * Topical label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label.
		 */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation> | null;

		/**
		 * Presence label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label. Compared to the
		 * existing topical `segment_label_annotations`, this field presents more
		 * fine-grained, segment-level labels detected in video content and is made
		 * available only when the client sets `LabelDetectionConfig.model` to
		 * "builtin/latest" in the request.
		 */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation> | null;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_VideoSegment> | null;

		/**
		 * Topical label annotations on shot level.
		 * There is exactly one element for each unique label.
		 */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation> | null;

		/**
		 * Presence label annotations on shot level. There is exactly one element for
		 * each unique label. Compared to the existing topical
		 * `shot_label_annotations`, this field presents more fine-grained, shot-level
		 * labels detected in video content and is made available only when the client
		 * sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
		 */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_LabelAnnotation> | null;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1beta2_SpeechTranscription> | null;

		/**
		 * OCR text detection and tracking.
		 * Annotations for list of detected text snippets. Each will have list of
		 * frame information associated with it.
		 */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1beta2_TextAnnotation> | null;
	}


	/**
	 * Explicit content annotation (based on per-frame visual signals only).
	 * If no explicit content has been detected in a frame, no annotations are
	 * present for that frame.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame> | null;
	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelAnnotation {

		/**
		 * Common categories for the detected entity.
		 * E.g. when the label is `Terrier` the category is likely `dog`. And in some
		 * cases there might be more than one categories e.g. `Terrier` could also be
		 * a `pet`.
		 */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1beta2_Entity> | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1beta2_Entity | null;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_LabelFrame> | null;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1beta2_LabelSegment> | null;
	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1beta2_Entity {

		/** Textual description, e.g. `Fixed-gear bicycle`. */
		description?: string | null;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1beta2_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment | null;
	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1beta2_Entity | null;

		/**
		 * All video segments where the recognized logo appears. There might be
		 * multiple instances of the same logo class appearing in one VideoSegment.
		 */
		segments?: Array<GoogleCloudVideointelligenceV1beta2_VideoSegment> | null;

		/**
		 * All logo tracks where the recognized logo appears. Each track corresponds
		 * to one logo instance appearing in consecutive frames.
		 */
		tracks?: Array<GoogleCloudVideointelligenceV1beta2_Track> | null;
	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1beta2_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1beta2_DetectedAttribute> | null;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment | null;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1beta2_TimestampedObject> | null;
	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1beta2_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/**
		 * The name of the attribute, i.e. glasses, dark_glasses, mouth_open etc.
		 * A full list of supported type names will be provided in the document.
		 */
		name?: string | null;

		/**
		 * Text value of the detection result. For example, the value for "HairColor"
		 * can be "black", "blonde", etc.
		 */
		value?: string | null;
	}


	/**
	 * For tracking related features.
	 * An object at time_offset with attributes, and located with
	 * normalized_bounding_box.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1beta2_DetectedAttribute> | null;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1beta2_DetectedLandmark> | null;

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the video frame for this object.
		 */
		timeOffset?: string | null;
	}


	/**
	 * A generic detected landmark represented by name in string format and a 2D
	 * location.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, i.e. left_hand, right_shoulder. */
		name?: string | null;

		/**
		 * A vertex represents a 2D point in the image.
		 * NOTE: the normalized vertex coordinates are relative to the original image
		 * and range from 0 to 1.
		 */
		point?: GoogleCloudVideointelligenceV1beta2_NormalizedVertex | null;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}


	/**
	 * Normalized bounding box.
	 * The normalized vertex coordinates are relative to the original image.
	 * Range: [0, 1].
	 */
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


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1beta2_Entity | null;

		/**
		 * Information corresponding to all frames where this object track appears.
		 * Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame
		 * messages in frames.
		 * Streaming mode: it can only be one ObjectTrackingFrame message in frames.
		 */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment | null;

		/**
		 * Streaming mode ONLY.
		 * In streaming mode, we do not know the end time of a tracked object
		 * before it is completed. Hence, there is no VideoSegment info returned.
		 * Instead, we provide a unique identifiable integer track_id so that
		 * the customers can correlate the results of the ongoing
		 * ObjectTrackAnnotation of the same track_id over time.
		 */
		trackId?: string | null;
	}


	/**
	 * Video frame level annotations for object detection and tracking. This field
	 * stores per frame location, time offset, and confidence.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame {

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox | null;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1beta2_SpeechTranscription {

		/**
		 * May contain one or more recognition hypotheses (up to the maximum specified
		 * in `max_alternatives`).  These alternatives are ordered in terms of
		 * accuracy, with the top (first) alternative being the most probable, as
		 * ranked by the recognizer.
		 */
		alternatives?: Array<GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative> | null;

		/**
		 * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of
		 * the language in this result. This language code was detected to have the
		 * most likelihood of being spoken in the audio.
		 */
		languageCode?: string | null;
	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/**
		 * Output only. A list of word-specific information for each recognized word.
		 * Note: When `enable_speaker_diarization` is true, you will see all the words
		 * from the beginning of the audio.
		 */
		words?: Array<GoogleCloudVideointelligenceV1beta2_WordInfo> | null;
	}


	/**
	 * Word-specific information for recognized words. Word information is only
	 * included in the response when certain request parameters are set, such
	 * as `enable_word_time_offsets`.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_WordInfo {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the end of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		endTime?: string | null;

		/**
		 * Output only. A distinct integer value is assigned for every speaker within
		 * the audio. This field specifies which one of those speakers was detected to
		 * have spoken this word. Value ranges from 1 up to diarization_speaker_count,
		 * and is only set if speaker diarization is enabled.
		 */
		speakerTag?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the start of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}


	/**
	 * Annotations related to one detected OCR text snippet. This will contain the
	 * corresponding text, confidence value, and frame level information for each
	 * detection.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1beta2_TextSegment> | null;

		/** The detected text. */
		text?: string | null;
	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1beta2_TextSegment {

		/**
		 * Confidence for the track of detected text. It is calculated as the highest
		 * over all frames where OCR detected text appears.
		 */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1beta2_TextFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1beta2_VideoSegment | null;
	}


	/**
	 * Video frame level annotation results for text annotation (OCR).
	 * Contains information regarding timestamp and bounding box locations for the
	 * frames containing detected OCR text snippets.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_TextFrame {

		/**
		 * Normalized bounding polygon for text (that might not be aligned with axis).
		 * Contains list of the corner points in clockwise order starting from
		 * top-left corner. For example, for a rectangular bounding box:
		 * When the text is horizontal it might look like:
		 * 0----1
		 * |    |
		 * 3----2
		 * When it's clockwise rotated 180 degrees around the top-left corner it
		 * becomes:
		 * 2----3
		 * |    |
		 * 1----0
		 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
		 * than 0, or greater than 1 due to trignometric calculations for location of
		 * the box.
		 */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly | null;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}


	/**
	 * Normalized bounding polygon for text (that might not be aligned with axis).
	 * Contains list of the corner points in clockwise order starting from
	 * top-left corner. For example, for a rectangular bounding box:
	 * When the text is horizontal it might look like:
	 *         0----1
	 *         |    |
	 *         3----2
	 * When it's clockwise rotated 180 degrees around the top-left corner it
	 * becomes:
	 *         2----3
	 *         |    |
	 *         1----0
	 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
	 * than 0, or greater than 1 due to trignometric calculations for location of
	 * the box.
	 */
	export interface GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1beta2_NormalizedVertex> | null;
	}


	/**
	 * Video annotation progress. Included in the `metadata`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress> | null;
	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress {

		/**
		 * Specifies which feature is being tracked if the request contains more than
		 * one features.
		 */
		feature?: GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/**
		 * Approximate percentage processed thus far. Guaranteed to be
		 * 100 when fully processed.
		 */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment | null;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoSegment {

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the end of the segment (inclusive).
		 */
		endTimeOffset?: string | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the start of the segment (inclusive).
		 */
		startTimeOffset?: string | null;
	}


	/**
	 * Video annotation response. Included in the `response`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults> | null;
	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: GoogleRpc_Status | null;

		/**
		 * Explicit content annotation (based on per-frame visual signals only).
		 * If no explicit content has been detected in a frame, no annotations are
		 * present for that frame.
		 */
		explicitAnnotation?: GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation | null;

		/**
		 * Label annotations on frame level.
		 * There is exactly one element for each unique label.
		 */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation> | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation> | null;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment | null;

		/**
		 * Topical label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label.
		 */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation> | null;

		/**
		 * Presence label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label. Compared to the
		 * existing topical `segment_label_annotations`, this field presents more
		 * fine-grained, segment-level labels detected in video content and is made
		 * available only when the client sets `LabelDetectionConfig.model` to
		 * "builtin/latest" in the request.
		 */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation> | null;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_VideoSegment> | null;

		/**
		 * Topical label annotations on shot level.
		 * There is exactly one element for each unique label.
		 */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation> | null;

		/**
		 * Presence label annotations on shot level. There is exactly one element for
		 * each unique label. Compared to the existing topical
		 * `shot_label_annotations`, this field presents more fine-grained, shot-level
		 * labels detected in video content and is made available only when the client
		 * sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
		 */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation> | null;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription> | null;

		/**
		 * OCR text detection and tracking.
		 * Annotations for list of detected text snippets. Each will have list of
		 * frame information associated with it.
		 */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1p1beta1_TextAnnotation> | null;
	}


	/**
	 * Explicit content annotation (based on per-frame visual signals only).
	 * If no explicit content has been detected in a frame, no annotations are
	 * present for that frame.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame> | null;
	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation {

		/**
		 * Common categories for the detected entity.
		 * E.g. when the label is `Terrier` the category is likely `dog`. And in some
		 * cases there might be more than one categories e.g. `Terrier` could also be
		 * a `pet`.
		 */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1p1beta1_Entity> | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p1beta1_Entity | null;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelFrame> | null;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p1beta1_LabelSegment> | null;
	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p1beta1_Entity {

		/** Textual description, e.g. `Fixed-gear bicycle`. */
		description?: string | null;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment | null;
	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p1beta1_Entity | null;

		/**
		 * All video segments where the recognized logo appears. There might be
		 * multiple instances of the same logo class appearing in one VideoSegment.
		 */
		segments?: Array<GoogleCloudVideointelligenceV1p1beta1_VideoSegment> | null;

		/**
		 * All logo tracks where the recognized logo appears. Each track corresponds
		 * to one logo instance appearing in consecutive frames.
		 */
		tracks?: Array<GoogleCloudVideointelligenceV1p1beta1_Track> | null;
	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p1beta1_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute> | null;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment | null;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1p1beta1_TimestampedObject> | null;
	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/**
		 * The name of the attribute, i.e. glasses, dark_glasses, mouth_open etc.
		 * A full list of supported type names will be provided in the document.
		 */
		name?: string | null;

		/**
		 * Text value of the detection result. For example, the value for "HairColor"
		 * can be "black", "blonde", etc.
		 */
		value?: string | null;
	}


	/**
	 * For tracking related features.
	 * An object at time_offset with attributes, and located with
	 * normalized_bounding_box.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute> | null;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark> | null;

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the video frame for this object.
		 */
		timeOffset?: string | null;
	}


	/**
	 * A generic detected landmark represented by name in string format and a 2D
	 * location.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, i.e. left_hand, right_shoulder. */
		name?: string | null;

		/**
		 * A vertex represents a 2D point in the image.
		 * NOTE: the normalized vertex coordinates are relative to the original image
		 * and range from 0 to 1.
		 */
		point?: GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex | null;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}


	/**
	 * Normalized bounding box.
	 * The normalized vertex coordinates are relative to the original image.
	 * Range: [0, 1].
	 */
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


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p1beta1_Entity | null;

		/**
		 * Information corresponding to all frames where this object track appears.
		 * Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame
		 * messages in frames.
		 * Streaming mode: it can only be one ObjectTrackingFrame message in frames.
		 */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment | null;

		/**
		 * Streaming mode ONLY.
		 * In streaming mode, we do not know the end time of a tracked object
		 * before it is completed. Hence, there is no VideoSegment info returned.
		 * Instead, we provide a unique identifiable integer track_id so that
		 * the customers can correlate the results of the ongoing
		 * ObjectTrackAnnotation of the same track_id over time.
		 */
		trackId?: string | null;
	}


	/**
	 * Video frame level annotations for object detection and tracking. This field
	 * stores per frame location, time offset, and confidence.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame {

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox | null;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription {

		/**
		 * May contain one or more recognition hypotheses (up to the maximum specified
		 * in `max_alternatives`).  These alternatives are ordered in terms of
		 * accuracy, with the top (first) alternative being the most probable, as
		 * ranked by the recognizer.
		 */
		alternatives?: Array<GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative> | null;

		/**
		 * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of
		 * the language in this result. This language code was detected to have the
		 * most likelihood of being spoken in the audio.
		 */
		languageCode?: string | null;
	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/**
		 * Output only. A list of word-specific information for each recognized word.
		 * Note: When `enable_speaker_diarization` is true, you will see all the words
		 * from the beginning of the audio.
		 */
		words?: Array<GoogleCloudVideointelligenceV1p1beta1_WordInfo> | null;
	}


	/**
	 * Word-specific information for recognized words. Word information is only
	 * included in the response when certain request parameters are set, such
	 * as `enable_word_time_offsets`.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_WordInfo {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the end of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		endTime?: string | null;

		/**
		 * Output only. A distinct integer value is assigned for every speaker within
		 * the audio. This field specifies which one of those speakers was detected to
		 * have spoken this word. Value ranges from 1 up to diarization_speaker_count,
		 * and is only set if speaker diarization is enabled.
		 */
		speakerTag?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the start of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}


	/**
	 * Annotations related to one detected OCR text snippet. This will contain the
	 * corresponding text, confidence value, and frame level information for each
	 * detection.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1p1beta1_TextSegment> | null;

		/** The detected text. */
		text?: string | null;
	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextSegment {

		/**
		 * Confidence for the track of detected text. It is calculated as the highest
		 * over all frames where OCR detected text appears.
		 */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1p1beta1_TextFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p1beta1_VideoSegment | null;
	}


	/**
	 * Video frame level annotation results for text annotation (OCR).
	 * Contains information regarding timestamp and bounding box locations for the
	 * frames containing detected OCR text snippets.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_TextFrame {

		/**
		 * Normalized bounding polygon for text (that might not be aligned with axis).
		 * Contains list of the corner points in clockwise order starting from
		 * top-left corner. For example, for a rectangular bounding box:
		 * When the text is horizontal it might look like:
		 * 0----1
		 * |    |
		 * 3----2
		 * When it's clockwise rotated 180 degrees around the top-left corner it
		 * becomes:
		 * 2----3
		 * |    |
		 * 1----0
		 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
		 * than 0, or greater than 1 due to trignometric calculations for location of
		 * the box.
		 */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly | null;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}


	/**
	 * Normalized bounding polygon for text (that might not be aligned with axis).
	 * Contains list of the corner points in clockwise order starting from
	 * top-left corner. For example, for a rectangular bounding box:
	 * When the text is horizontal it might look like:
	 *         0----1
	 *         |    |
	 *         3----2
	 * When it's clockwise rotated 180 degrees around the top-left corner it
	 * becomes:
	 *         2----3
	 *         |    |
	 *         1----0
	 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
	 * than 0, or greater than 1 due to trignometric calculations for location of
	 * the box.
	 */
	export interface GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex> | null;
	}


	/**
	 * Video annotation progress. Included in the `metadata`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress> | null;
	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress {

		/**
		 * Specifies which feature is being tracked if the request contains more than
		 * one features.
		 */
		feature?: GoogleCloudVideointelligenceV1_VideoAnnotationProgressFeature | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/**
		 * Approximate percentage processed thus far. Guaranteed to be
		 * 100 when fully processed.
		 */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment | null;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoSegment {

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the end of the segment (inclusive).
		 */
		endTimeOffset?: string | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the start of the segment (inclusive).
		 */
		startTimeOffset?: string | null;
	}


	/**
	 * Video annotation response. Included in the `response`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults> | null;
	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: GoogleRpc_Status | null;

		/**
		 * Explicit content annotation (based on per-frame visual signals only).
		 * If no explicit content has been detected in a frame, no annotations are
		 * present for that frame.
		 */
		explicitAnnotation?: GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation | null;

		/**
		 * Label annotations on frame level.
		 * There is exactly one element for each unique label.
		 */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation> | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation> | null;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment | null;

		/**
		 * Topical label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label.
		 */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation> | null;

		/**
		 * Presence label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label. Compared to the
		 * existing topical `segment_label_annotations`, this field presents more
		 * fine-grained, segment-level labels detected in video content and is made
		 * available only when the client sets `LabelDetectionConfig.model` to
		 * "builtin/latest" in the request.
		 */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation> | null;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoSegment> | null;

		/**
		 * Topical label annotations on shot level.
		 * There is exactly one element for each unique label.
		 */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation> | null;

		/**
		 * Presence label annotations on shot level. There is exactly one element for
		 * each unique label. Compared to the existing topical
		 * `shot_label_annotations`, this field presents more fine-grained, shot-level
		 * labels detected in video content and is made available only when the client
		 * sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
		 */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation> | null;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription> | null;

		/**
		 * OCR text detection and tracking.
		 * Annotations for list of detected text snippets. Each will have list of
		 * frame information associated with it.
		 */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1p2beta1_TextAnnotation> | null;
	}


	/**
	 * Explicit content annotation (based on per-frame visual signals only).
	 * If no explicit content has been detected in a frame, no annotations are
	 * present for that frame.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame> | null;
	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation {

		/**
		 * Common categories for the detected entity.
		 * E.g. when the label is `Terrier` the category is likely `dog`. And in some
		 * cases there might be more than one categories e.g. `Terrier` could also be
		 * a `pet`.
		 */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1p2beta1_Entity> | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p2beta1_Entity | null;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelFrame> | null;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p2beta1_LabelSegment> | null;
	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p2beta1_Entity {

		/** Textual description, e.g. `Fixed-gear bicycle`. */
		description?: string | null;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment | null;
	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p2beta1_Entity | null;

		/**
		 * All video segments where the recognized logo appears. There might be
		 * multiple instances of the same logo class appearing in one VideoSegment.
		 */
		segments?: Array<GoogleCloudVideointelligenceV1p2beta1_VideoSegment> | null;

		/**
		 * All logo tracks where the recognized logo appears. Each track corresponds
		 * to one logo instance appearing in consecutive frames.
		 */
		tracks?: Array<GoogleCloudVideointelligenceV1p2beta1_Track> | null;
	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p2beta1_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute> | null;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment | null;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1p2beta1_TimestampedObject> | null;
	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/**
		 * The name of the attribute, i.e. glasses, dark_glasses, mouth_open etc.
		 * A full list of supported type names will be provided in the document.
		 */
		name?: string | null;

		/**
		 * Text value of the detection result. For example, the value for "HairColor"
		 * can be "black", "blonde", etc.
		 */
		value?: string | null;
	}


	/**
	 * For tracking related features.
	 * An object at time_offset with attributes, and located with
	 * normalized_bounding_box.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute> | null;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark> | null;

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the video frame for this object.
		 */
		timeOffset?: string | null;
	}


	/**
	 * A generic detected landmark represented by name in string format and a 2D
	 * location.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, i.e. left_hand, right_shoulder. */
		name?: string | null;

		/**
		 * A vertex represents a 2D point in the image.
		 * NOTE: the normalized vertex coordinates are relative to the original image
		 * and range from 0 to 1.
		 */
		point?: GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex | null;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}


	/**
	 * Normalized bounding box.
	 * The normalized vertex coordinates are relative to the original image.
	 * Range: [0, 1].
	 */
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


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p2beta1_Entity | null;

		/**
		 * Information corresponding to all frames where this object track appears.
		 * Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame
		 * messages in frames.
		 * Streaming mode: it can only be one ObjectTrackingFrame message in frames.
		 */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment | null;

		/**
		 * Streaming mode ONLY.
		 * In streaming mode, we do not know the end time of a tracked object
		 * before it is completed. Hence, there is no VideoSegment info returned.
		 * Instead, we provide a unique identifiable integer track_id so that
		 * the customers can correlate the results of the ongoing
		 * ObjectTrackAnnotation of the same track_id over time.
		 */
		trackId?: string | null;
	}


	/**
	 * Video frame level annotations for object detection and tracking. This field
	 * stores per frame location, time offset, and confidence.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame {

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox | null;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription {

		/**
		 * May contain one or more recognition hypotheses (up to the maximum specified
		 * in `max_alternatives`).  These alternatives are ordered in terms of
		 * accuracy, with the top (first) alternative being the most probable, as
		 * ranked by the recognizer.
		 */
		alternatives?: Array<GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative> | null;

		/**
		 * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of
		 * the language in this result. This language code was detected to have the
		 * most likelihood of being spoken in the audio.
		 */
		languageCode?: string | null;
	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/**
		 * Output only. A list of word-specific information for each recognized word.
		 * Note: When `enable_speaker_diarization` is true, you will see all the words
		 * from the beginning of the audio.
		 */
		words?: Array<GoogleCloudVideointelligenceV1p2beta1_WordInfo> | null;
	}


	/**
	 * Word-specific information for recognized words. Word information is only
	 * included in the response when certain request parameters are set, such
	 * as `enable_word_time_offsets`.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_WordInfo {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the end of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		endTime?: string | null;

		/**
		 * Output only. A distinct integer value is assigned for every speaker within
		 * the audio. This field specifies which one of those speakers was detected to
		 * have spoken this word. Value ranges from 1 up to diarization_speaker_count,
		 * and is only set if speaker diarization is enabled.
		 */
		speakerTag?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the start of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}


	/**
	 * Annotations related to one detected OCR text snippet. This will contain the
	 * corresponding text, confidence value, and frame level information for each
	 * detection.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1p2beta1_TextSegment> | null;

		/** The detected text. */
		text?: string | null;
	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextSegment {

		/**
		 * Confidence for the track of detected text. It is calculated as the highest
		 * over all frames where OCR detected text appears.
		 */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1p2beta1_TextFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p2beta1_VideoSegment | null;
	}


	/**
	 * Video frame level annotation results for text annotation (OCR).
	 * Contains information regarding timestamp and bounding box locations for the
	 * frames containing detected OCR text snippets.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_TextFrame {

		/**
		 * Normalized bounding polygon for text (that might not be aligned with axis).
		 * Contains list of the corner points in clockwise order starting from
		 * top-left corner. For example, for a rectangular bounding box:
		 * When the text is horizontal it might look like:
		 * 0----1
		 * |    |
		 * 3----2
		 * When it's clockwise rotated 180 degrees around the top-left corner it
		 * becomes:
		 * 2----3
		 * |    |
		 * 1----0
		 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
		 * than 0, or greater than 1 due to trignometric calculations for location of
		 * the box.
		 */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly | null;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}


	/**
	 * Normalized bounding polygon for text (that might not be aligned with axis).
	 * Contains list of the corner points in clockwise order starting from
	 * top-left corner. For example, for a rectangular bounding box:
	 * When the text is horizontal it might look like:
	 *         0----1
	 *         |    |
	 *         3----2
	 * When it's clockwise rotated 180 degrees around the top-left corner it
	 * becomes:
	 *         2----3
	 *         |    |
	 *         1----0
	 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
	 * than 0, or greater than 1 due to trignometric calculations for location of
	 * the box.
	 */
	export interface GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex> | null;
	}


	/**
	 * Video annotation progress. Included in the `metadata`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgress {

		/** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
		annotationProgress?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress> | null;
	}


	/** Annotation progress for a single video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress {

		/**
		 * Specifies which feature is being tracked if the request contains more than
		 * one features.
		 */
		feature?: GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFeature | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/**
		 * Approximate percentage processed thus far. Guaranteed to be
		 * 100 when fully processed.
		 */
		progressPercent?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment | null;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Time of the most recent update. */
		updateTime?: string | null;
	}

	export enum GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgressFeature { FEATURE_UNSPECIFIED = 0, LABEL_DETECTION = 1, SHOT_CHANGE_DETECTION = 2, EXPLICIT_CONTENT_DETECTION = 3, FACE_DETECTION = 4, SPEECH_TRANSCRIPTION = 5, TEXT_DETECTION = 6, OBJECT_TRACKING = 7, LOGO_RECOGNITION = 8, CELEBRITY_RECOGNITION = 9, PERSON_DETECTION = 10 }


	/** Video segment. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoSegment {

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the end of the segment (inclusive).
		 */
		endTimeOffset?: string | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the start of the segment (inclusive).
		 */
		startTimeOffset?: string | null;
	}


	/**
	 * Video annotation response. Included in the `response`
	 * field of the `Operation` returned by the `GetOperation`
	 * call of the `google::longrunning::Operations` service.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponse {

		/** Annotation results for all videos specified in `AnnotateVideoRequest`. */
		annotationResults?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults> | null;
	}


	/** Annotation results for a single video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults {

		/** Celebrity recognition annotation per video. */
		celebrityRecognitionAnnotations?: GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: GoogleRpc_Status | null;

		/**
		 * Explicit content annotation (based on per-frame visual signals only).
		 * If no explicit content has been detected in a frame, no annotations are
		 * present for that frame.
		 */
		explicitAnnotation?: GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation | null;

		/** Face detection annotations. */
		faceDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation> | null;

		/**
		 * Label annotations on frame level.
		 * There is exactly one element for each unique label.
		 */
		frameLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation> | null;

		/**
		 * Video file location in
		 * [Cloud Storage](https://cloud.google.com/storage/).
		 */
		inputUri?: string | null;

		/** Annotations for list of logos detected, tracked and recognized in video. */
		logoRecognitionAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation> | null;

		/** Annotations for list of objects detected and tracked in video. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation> | null;

		/** Person detection annotations. */
		personDetectionAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment | null;

		/**
		 * Topical label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label.
		 */
		segmentLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation> | null;

		/**
		 * Presence label annotations on video level or user specified segment level.
		 * There is exactly one element for each unique label. Compared to the
		 * existing topical `segment_label_annotations`, this field presents more
		 * fine-grained, segment-level labels detected in video content and is made
		 * available only when the client sets `LabelDetectionConfig.model` to
		 * "builtin/latest" in the request.
		 */
		segmentPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation> | null;

		/** Shot annotations. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoSegment> | null;

		/**
		 * Topical label annotations on shot level.
		 * There is exactly one element for each unique label.
		 */
		shotLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation> | null;

		/**
		 * Presence label annotations on shot level. There is exactly one element for
		 * each unique label. Compared to the existing topical
		 * `shot_label_annotations`, this field presents more fine-grained, shot-level
		 * labels detected in video content and is made available only when the client
		 * sets `LabelDetectionConfig.model` to "builtin/latest" in the request.
		 */
		shotPresenceLabelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation> | null;

		/** Speech transcription. */
		speechTranscriptions?: Array<GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription> | null;

		/**
		 * OCR text detection and tracking.
		 * Annotations for list of detected text snippets. Each will have list of
		 * frame information associated with it.
		 */
		textAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_TextAnnotation> | null;
	}


	/** Celebrity recognition annotation per video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation {

		/**
		 * The tracks detected from the input video, including recognized celebrities
		 * and other detected faces in the video.
		 */
		celebrityTracks?: Array<GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack> | null;
	}


	/**
	 * The annotation result of a celebrity face track. RecognizedCelebrity field
	 * could be empty if the face track does not have any matched celebrities.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack {

		/** Top N match of the celebrities for the face in this track. */
		celebrities?: Array<GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity> | null;

		/** A track of an object instance. */
		faceTrack?: GoogleCloudVideointelligenceV1p3beta1_Track | null;
	}


	/** The recognized celebrity with confidence score. */
	export interface GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity {

		/** Celebrity definition. */
		celebrity?: GoogleCloudVideointelligenceV1p3beta1_Celebrity | null;

		/** Recognition confidence. Range [0, 1]. */
		confidence?: number | null;
	}


	/** Celebrity definition. */
	export interface GoogleCloudVideointelligenceV1p3beta1_Celebrity {

		/**
		 * Textual description of additional information about the celebrity, if
		 * applicable.
		 */
		description?: string | null;

		/** The celebrity name. */
		displayName?: string | null;

		/**
		 * The resource name of the celebrity. Have the format
		 * `video-intelligence/kg-mid` indicates a celebrity from preloaded gallery.
		 * kg-mid is the id in Google knowledge graph, which is unique for the
		 * celebrity.
		 */
		name?: string | null;
	}


	/** A track of an object instance. */
	export interface GoogleCloudVideointelligenceV1p3beta1_Track {

		/** Optional. Attributes in the track level. */
		attributes?: Array<GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute> | null;

		/** Optional. The confidence score of the tracked object. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment | null;

		/** The object with timestamp and attributes per frame in the track. */
		timestampedObjects?: Array<GoogleCloudVideointelligenceV1p3beta1_TimestampedObject> | null;
	}


	/** A generic detected attribute represented by name in string format. */
	export interface GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute {

		/** Detected attribute confidence. Range [0, 1]. */
		confidence?: number | null;

		/**
		 * The name of the attribute, i.e. glasses, dark_glasses, mouth_open etc.
		 * A full list of supported type names will be provided in the document.
		 */
		name?: string | null;

		/**
		 * Text value of the detection result. For example, the value for "HairColor"
		 * can be "black", "blonde", etc.
		 */
		value?: string | null;
	}


	/**
	 * For tracking related features.
	 * An object at time_offset with attributes, and located with
	 * normalized_bounding_box.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_TimestampedObject {

		/** Optional. The attributes of the object in the bounding box. */
		attributes?: Array<GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute> | null;

		/** Optional. The detected landmarks. */
		landmarks?: Array<GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark> | null;

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox | null;

		/**
		 * Time-offset, relative to the beginning of the video,
		 * corresponding to the video frame for this object.
		 */
		timeOffset?: string | null;
	}


	/**
	 * A generic detected landmark represented by name in string format and a 2D
	 * location.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark {

		/** The confidence score of the detected landmark. Range [0, 1]. */
		confidence?: number | null;

		/** The name of this landmark, i.e. left_hand, right_shoulder. */
		name?: string | null;

		/**
		 * A vertex represents a 2D point in the image.
		 * NOTE: the normalized vertex coordinates are relative to the original image
		 * and range from 0 to 1.
		 */
		point?: GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex | null;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * NOTE: the normalized vertex coordinates are relative to the original image
	 * and range from 0 to 1.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex {

		/** X coordinate. */
		x?: number | null;

		/** Y coordinate. */
		y?: number | null;
	}


	/**
	 * Normalized bounding box.
	 * The normalized vertex coordinates are relative to the original image.
	 * Range: [0, 1].
	 */
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


	/**
	 * Explicit content annotation (based on per-frame visual signals only).
	 * If no explicit content has been detected in a frame, no annotations are
	 * present for that frame.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation {

		/** All video frames where explicit content was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame> | null;
	}


	/** Video frame level annotation results for explicit content. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame {

		/** Likelihood of the pornography content.. */
		pornographyLikelihood?: GoogleCloudVideointelligenceV1_ExplicitContentFramePornographyLikelihood | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Face detection annotation. */
	export interface GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation {

		/** The thumbnail of a person's face. */
		thumbnail?: string | null;

		/** The face tracks with attributes. */
		tracks?: Array<GoogleCloudVideointelligenceV1p3beta1_Track> | null;
	}


	/** Label annotation. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation {

		/**
		 * Common categories for the detected entity.
		 * E.g. when the label is `Terrier` the category is likely `dog`. And in some
		 * cases there might be more than one categories e.g. `Terrier` could also be
		 * a `pet`.
		 */
		categoryEntities?: Array<GoogleCloudVideointelligenceV1p3beta1_Entity> | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p3beta1_Entity | null;

		/** All video frames where a label was detected. */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelFrame> | null;

		/** All video segments where a label was detected. */
		segments?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelSegment> | null;
	}


	/** Detected entity from video analysis. */
	export interface GoogleCloudVideointelligenceV1p3beta1_Entity {

		/** Textual description, e.g. `Fixed-gear bicycle`. */
		description?: string | null;

		/**
		 * Opaque entity ID. Some IDs may be available in
		 * [Google Knowledge Graph Search
		 * API](https://developers.google.com/knowledge-graph/).
		 */
		entityId?: string | null;

		/** Language code for `description` in BCP-47 format. */
		languageCode?: string | null;
	}


	/** Video frame level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelFrame {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/**
		 * Time-offset, relative to the beginning of the video, corresponding to the
		 * video frame for this location.
		 */
		timeOffset?: string | null;
	}


	/** Video segment level annotation results for label detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LabelSegment {

		/** Confidence that the label is accurate. Range: [0, 1]. */
		confidence?: number | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment | null;
	}


	/** Annotation corresponding to one detected, tracked and recognized logo class. */
	export interface GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation {

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p3beta1_Entity | null;

		/**
		 * All video segments where the recognized logo appears. There might be
		 * multiple instances of the same logo class appearing in one VideoSegment.
		 */
		segments?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoSegment> | null;

		/**
		 * All logo tracks where the recognized logo appears. Each track corresponds
		 * to one logo instance appearing in consecutive frames.
		 */
		tracks?: Array<GoogleCloudVideointelligenceV1p3beta1_Track> | null;
	}


	/** Annotations corresponding to one tracked object. */
	export interface GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation {

		/** Object category's labeling confidence of this track. */
		confidence?: number | null;

		/** Detected entity from video analysis. */
		entity?: GoogleCloudVideointelligenceV1p3beta1_Entity | null;

		/**
		 * Information corresponding to all frames where this object track appears.
		 * Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame
		 * messages in frames.
		 * Streaming mode: it can only be one ObjectTrackingFrame message in frames.
		 */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment | null;

		/**
		 * Streaming mode ONLY.
		 * In streaming mode, we do not know the end time of a tracked object
		 * before it is completed. Hence, there is no VideoSegment info returned.
		 * Instead, we provide a unique identifiable integer track_id so that
		 * the customers can correlate the results of the ongoing
		 * ObjectTrackAnnotation of the same track_id over time.
		 */
		trackId?: string | null;
	}


	/**
	 * Video frame level annotations for object detection and tracking. This field
	 * stores per frame location, time offset, and confidence.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame {

		/**
		 * Normalized bounding box.
		 * The normalized vertex coordinates are relative to the original image.
		 * Range: [0, 1].
		 */
		normalizedBoundingBox?: GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox | null;

		/** The timestamp of the frame in microseconds. */
		timeOffset?: string | null;
	}


	/** Person detection annotation per video. */
	export interface GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation {

		/** The trackes that a person is detected. */
		tracks?: Array<GoogleCloudVideointelligenceV1p3beta1_Track> | null;
	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription {

		/**
		 * May contain one or more recognition hypotheses (up to the maximum specified
		 * in `max_alternatives`).  These alternatives are ordered in terms of
		 * accuracy, with the top (first) alternative being the most probable, as
		 * ranked by the recognizer.
		 */
		alternatives?: Array<GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative> | null;

		/**
		 * Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of
		 * the language in this result. This language code was detected to have the
		 * most likelihood of being spoken in the audio.
		 */
		languageCode?: string | null;
	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/**
		 * Output only. A list of word-specific information for each recognized word.
		 * Note: When `enable_speaker_diarization` is true, you will see all the words
		 * from the beginning of the audio.
		 */
		words?: Array<GoogleCloudVideointelligenceV1p3beta1_WordInfo> | null;
	}


	/**
	 * Word-specific information for recognized words. Word information is only
	 * included in the response when certain request parameters are set, such
	 * as `enable_word_time_offsets`.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_WordInfo {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the end of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		endTime?: string | null;

		/**
		 * Output only. A distinct integer value is assigned for every speaker within
		 * the audio. This field specifies which one of those speakers was detected to
		 * have spoken this word. Value ranges from 1 up to diarization_speaker_count,
		 * and is only set if speaker diarization is enabled.
		 */
		speakerTag?: number | null;

		/**
		 * Time offset relative to the beginning of the audio, and
		 * corresponding to the start of the spoken word. This field is only set if
		 * `enable_word_time_offsets=true` and only in the top hypothesis. This is an
		 * experimental feature and the accuracy of the time offset can vary.
		 */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}


	/**
	 * Annotations related to one detected OCR text snippet. This will contain the
	 * corresponding text, confidence value, and frame level information for each
	 * detection.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextAnnotation {

		/** All video segments where OCR detected text appears. */
		segments?: Array<GoogleCloudVideointelligenceV1p3beta1_TextSegment> | null;

		/** The detected text. */
		text?: string | null;
	}


	/** Video segment level annotation results for text detection. */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextSegment {

		/**
		 * Confidence for the track of detected text. It is calculated as the highest
		 * over all frames where OCR detected text appears.
		 */
		confidence?: number | null;

		/** Information related to the frames where OCR detected text appears. */
		frames?: Array<GoogleCloudVideointelligenceV1p3beta1_TextFrame> | null;

		/** Video segment. */
		segment?: GoogleCloudVideointelligenceV1p3beta1_VideoSegment | null;
	}


	/**
	 * Video frame level annotation results for text annotation (OCR).
	 * Contains information regarding timestamp and bounding box locations for the
	 * frames containing detected OCR text snippets.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_TextFrame {

		/**
		 * Normalized bounding polygon for text (that might not be aligned with axis).
		 * Contains list of the corner points in clockwise order starting from
		 * top-left corner. For example, for a rectangular bounding box:
		 * When the text is horizontal it might look like:
		 * 0----1
		 * |    |
		 * 3----2
		 * When it's clockwise rotated 180 degrees around the top-left corner it
		 * becomes:
		 * 2----3
		 * |    |
		 * 1----0
		 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
		 * than 0, or greater than 1 due to trignometric calculations for location of
		 * the box.
		 */
		rotatedBoundingBox?: GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly | null;

		/** Timestamp of this frame. */
		timeOffset?: string | null;
	}


	/**
	 * Normalized bounding polygon for text (that might not be aligned with axis).
	 * Contains list of the corner points in clockwise order starting from
	 * top-left corner. For example, for a rectangular bounding box:
	 * When the text is horizontal it might look like:
	 *         0----1
	 *         |    |
	 *         3----2
	 * When it's clockwise rotated 180 degrees around the top-left corner it
	 * becomes:
	 *         2----3
	 *         |    |
	 *         1----0
	 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
	 * than 0, or greater than 1 due to trignometric calculations for location of
	 * the box.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly {

		/** Normalized vertices of the bounding polygon. */
		vertices?: Array<GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex> | null;
	}


	/**
	 * `StreamingAnnotateVideoResponse` is the only message returned to the client
	 * by `StreamingAnnotateVideo`. A series of zero or more
	 * `StreamingAnnotateVideoResponse` messages are streamed back to the client.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponse {

		/**
		 * Streaming annotation results corresponding to a portion of the video
		 * that is currently being processed.
		 */
		annotationResults?: GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults | null;

		/**
		 * Cloud Storage URI that stores annotation results of one streaming session.
		 * It is a directory that can hold multiple files in JSON format.
		 * Example uri format:
		 * gs://bucket_id/object_id/cloud_project_name-session_id
		 */
		annotationResultsUri?: string | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: GoogleRpc_Status | null;
	}


	/**
	 * Streaming annotation results corresponding to a portion of the video
	 * that is currently being processed.
	 */
	export interface GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults {

		/**
		 * Explicit content annotation (based on per-frame visual signals only).
		 * If no explicit content has been detected in a frame, no annotations are
		 * present for that frame.
		 */
		explicitAnnotation?: GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation | null;

		/** Label annotation results. */
		labelAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation> | null;

		/** Object tracking results. */
		objectAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation> | null;

		/** Shot annotation results. Each shot is represented as a video segment. */
		shotAnnotations?: Array<GoogleCloudVideointelligenceV1p3beta1_VideoSegment> | null;
	}


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunning_CancelOperationRequest {
	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunning_ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunning_Operation> | null;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface GoogleLongrunning_Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: GoogleRpc_Status | null;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

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
		response?: {[id: string]: any } | null;
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
	export interface GoogleProtobuf_Empty {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is
		 * no longer interested in the operation result. It does not cancel the
		 * operation. If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/operations/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {void} Successful response
		 */
		Videointelligence_operations_projects_locations_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/operations/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/operations/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Videointelligence_operations_projects_locations_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/operations/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
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
		 * Post v1/operations/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Videointelligence_operations_projects_locations_operations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/operations/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs asynchronous video annotation. Progress and results can be
		 * retrieved through the `google.longrunning.Operations` interface.
		 * `Operation.metadata` contains `AnnotateVideoProgress` (progress).
		 * `Operation.response` contains `AnnotateVideoResponse` (results).
		 * Post v1/videos:annotate
		 * @return {void} Successful response
		 */
		Videointelligence_videos_annotate(requestBody: GoogleCloudVideointelligenceV1_AnnotateVideoRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/videos:annotate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is
		 * no longer interested in the operation result. It does not cancel the
		 * operation. If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {void} Successful response
		 */
		Videointelligence_projects_locations_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Videointelligence_projects_locations_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Videointelligence_projects_locations_operations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
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
		Videointelligence_projects_locations_operations_cancel(name: string, requestBody: GoogleLongrunning_CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

