import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains annotation information that is relevant to AutoML. */
	export interface AnnotationPayload {

		/** Output only . The resource ID of the annotation spec that this annotation pertains to. The annotation spec comes from either an ancestor dataset, or the dataset that was used to train the model in use. */
		annotationSpecId?: string | null;

		/** Contains annotation details specific to classification. */
		classification?: ClassificationAnnotation;

		/** Output only. The value of display_name when the model was trained. Because this field returns a value at model training time, for different models trained using the same dataset, the returned value could be different as model owner could update the `display_name` between any two model training. */
		displayName?: string | null;

		/** Annotation details for image object detection. */
		imageObjectDetection?: ImageObjectDetectionAnnotation;

		/** Contains annotation details specific to Tables. */
		tables?: TablesAnnotation;

		/** Annotation for identifying spans of text. */
		textExtraction?: TextExtractionAnnotation;

		/** Contains annotation details specific to text sentiment. */
		textSentiment?: TextSentimentAnnotation;

		/** Annotation details specific to translation. */
		translation?: TranslationAnnotation;

		/** Contains annotation details specific to video classification. */
		videoClassification?: VideoClassificationAnnotation;

		/** Annotation details for video object tracking. */
		videoObjectTracking?: VideoObjectTrackingAnnotation;
	}

	/** Contains annotation information that is relevant to AutoML. */
	export interface AnnotationPayloadFormProperties {

		/** Output only . The resource ID of the annotation spec that this annotation pertains to. The annotation spec comes from either an ancestor dataset, or the dataset that was used to train the model in use. */
		annotationSpecId: FormControl<string | null | undefined>,

		/** Output only. The value of display_name when the model was trained. Because this field returns a value at model training time, for different models trained using the same dataset, the returned value could be different as model owner could update the `display_name` between any two model training. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationPayloadFormGroup() {
		return new FormGroup<AnnotationPayloadFormProperties>({
			annotationSpecId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains annotation details specific to classification. */
	export interface ClassificationAnnotation {

		/** Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence that the annotation is positive. If a user approves an annotation as negative or positive, the score value remains unchanged. If a user creates an annotation, the score is 0 for negative or 1 for positive. */
		score?: number | null;
	}

	/** Contains annotation details specific to classification. */
	export interface ClassificationAnnotationFormProperties {

		/** Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence that the annotation is positive. If a user approves an annotation as negative or positive, the score value remains unchanged. If a user creates an annotation, the score is 0 for negative or 1 for positive. */
		score: FormControl<number | null | undefined>,
	}
	export function CreateClassificationAnnotationFormGroup() {
		return new FormGroup<ClassificationAnnotationFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Annotation details for image object detection. */
	export interface ImageObjectDetectionAnnotation {

		/** A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed. */
		boundingBox?: BoundingPoly;

		/** Output only. The confidence that this annotation is positive for the parent example, value in [0, 1], higher means higher positivity confidence. */
		score?: number | null;
	}

	/** Annotation details for image object detection. */
	export interface ImageObjectDetectionAnnotationFormProperties {

		/** Output only. The confidence that this annotation is positive for the parent example, value in [0, 1], higher means higher positivity confidence. */
		score: FormControl<number | null | undefined>,
	}
	export function CreateImageObjectDetectionAnnotationFormGroup() {
		return new FormGroup<ImageObjectDetectionAnnotationFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed. */
	export interface BoundingPoly {

		/** Output only . The bounding polygon normalized vertices. */
		normalizedVertices?: Array<NormalizedVertex>;
	}

	/** A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed. */
	export interface BoundingPolyFormProperties {
	}
	export function CreateBoundingPolyFormGroup() {
		return new FormGroup<BoundingPolyFormProperties>({
		});

	}


	/** A vertex represents a 2D point in the image. The normalized vertex coordinates are between 0 to 1 fractions relative to the original plane (image, video). E.g. if the plane (e.g. whole image) would have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would be at the position (1, 6) on that plane. */
	export interface NormalizedVertex {

		/** Required. Horizontal coordinate. */
		x?: number | null;

		/** Required. Vertical coordinate. */
		y?: number | null;
	}

	/** A vertex represents a 2D point in the image. The normalized vertex coordinates are between 0 to 1 fractions relative to the original plane (image, video). E.g. if the plane (e.g. whole image) would have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would be at the position (1, 6) on that plane. */
	export interface NormalizedVertexFormProperties {

		/** Required. Horizontal coordinate. */
		x: FormControl<number | null | undefined>,

		/** Required. Vertical coordinate. */
		y: FormControl<number | null | undefined>,
	}
	export function CreateNormalizedVertexFormGroup() {
		return new FormGroup<NormalizedVertexFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains annotation details specific to Tables. */
	export interface TablesAnnotation {

		/** Output only. Stores the prediction score for the baseline example, which is defined as the example with all values set to their baseline values. This is used as part of the Sampled Shapley explanation of the model's prediction. This field is populated only when feature importance is requested. For regression models, this holds the baseline prediction for the baseline example. For classification models, this holds the baseline prediction for the baseline example for the argmax class. */
		baselineScore?: number | null;

		/** A range between two double numbers. */
		predictionInterval?: DoubleRange;

		/** Output only. A confidence estimate between 0.0 and 1.0, inclusive. A higher value means greater confidence in the returned value. For target_column_spec of FLOAT64 data type the score is not populated. */
		score?: number | null;

		/** Output only. Auxiliary information for each of the model's input_feature_column_specs with respect to this particular prediction. If no other fields than column_spec_name and column_display_name would be populated, then this whole field is not. */
		tablesModelColumnInfo?: Array<TablesModelColumnInfo>;

		/** The predicted value of the row's target_column. The value depends on the column's DataType: * CATEGORY - the predicted (with the above confidence `score`) CATEGORY value. * FLOAT64 - the predicted (with above `prediction_interval`) FLOAT64 value. */
		value?: any;
	}

	/** Contains annotation details specific to Tables. */
	export interface TablesAnnotationFormProperties {

		/** Output only. Stores the prediction score for the baseline example, which is defined as the example with all values set to their baseline values. This is used as part of the Sampled Shapley explanation of the model's prediction. This field is populated only when feature importance is requested. For regression models, this holds the baseline prediction for the baseline example. For classification models, this holds the baseline prediction for the baseline example for the argmax class. */
		baselineScore: FormControl<number | null | undefined>,

		/** Output only. A confidence estimate between 0.0 and 1.0, inclusive. A higher value means greater confidence in the returned value. For target_column_spec of FLOAT64 data type the score is not populated. */
		score: FormControl<number | null | undefined>,

		/** The predicted value of the row's target_column. The value depends on the column's DataType: * CATEGORY - the predicted (with the above confidence `score`) CATEGORY value. * FLOAT64 - the predicted (with above `prediction_interval`) FLOAT64 value. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateTablesAnnotationFormGroup() {
		return new FormGroup<TablesAnnotationFormProperties>({
			baselineScore: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A range between two double numbers. */
	export interface DoubleRange {

		/** End of the range, exclusive. */
		end?: number | null;

		/** Start of the range, inclusive. */
		start?: number | null;
	}

	/** A range between two double numbers. */
	export interface DoubleRangeFormProperties {

		/** End of the range, exclusive. */
		end: FormControl<number | null | undefined>,

		/** Start of the range, inclusive. */
		start: FormControl<number | null | undefined>,
	}
	export function CreateDoubleRangeFormGroup() {
		return new FormGroup<DoubleRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An information specific to given column and Tables Model, in context of the Model and the predictions created by it. */
	export interface TablesModelColumnInfo {

		/** Output only. The display name of the column (same as the display_name of its ColumnSpec). */
		columnDisplayName?: string | null;

		/** Output only. The name of the ColumnSpec describing the column. Not populated when this proto is outputted to BigQuery. */
		columnSpecName?: string | null;

		/** Output only. When given as part of a Model (always populated): Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict (populated iff feature_importance param is set) or Batch Predict (populated iff feature_importance param is set): Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method. */
		featureImportance?: number | null;
	}

	/** An information specific to given column and Tables Model, in context of the Model and the predictions created by it. */
	export interface TablesModelColumnInfoFormProperties {

		/** Output only. The display name of the column (same as the display_name of its ColumnSpec). */
		columnDisplayName: FormControl<string | null | undefined>,

		/** Output only. The name of the ColumnSpec describing the column. Not populated when this proto is outputted to BigQuery. */
		columnSpecName: FormControl<string | null | undefined>,

		/** Output only. When given as part of a Model (always populated): Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict (populated iff feature_importance param is set) or Batch Predict (populated iff feature_importance param is set): Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method. */
		featureImportance: FormControl<number | null | undefined>,
	}
	export function CreateTablesModelColumnInfoFormGroup() {
		return new FormGroup<TablesModelColumnInfoFormProperties>({
			columnDisplayName: new FormControl<string | null | undefined>(undefined),
			columnSpecName: new FormControl<string | null | undefined>(undefined),
			featureImportance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Annotation for identifying spans of text. */
	export interface TextExtractionAnnotation {

		/** Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence in correctness of the annotation. */
		score?: number | null;

		/** A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding. */
		textSegment?: TextSegment;
	}

	/** Annotation for identifying spans of text. */
	export interface TextExtractionAnnotationFormProperties {

		/** Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence in correctness of the annotation. */
		score: FormControl<number | null | undefined>,
	}
	export function CreateTextExtractionAnnotationFormGroup() {
		return new FormGroup<TextExtractionAnnotationFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding. */
	export interface TextSegment {

		/** Output only. The content of the TextSegment. */
		content?: string | null;

		/** Required. Zero-based character index of the first character past the end of the text segment (counting character from the beginning of the text). The character at the end_offset is NOT included in the text segment. */
		endOffset?: string | null;

		/** Required. Zero-based character index of the first character of the text segment (counting characters from the beginning of the text). */
		startOffset?: string | null;
	}

	/** A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding. */
	export interface TextSegmentFormProperties {

		/** Output only. The content of the TextSegment. */
		content: FormControl<string | null | undefined>,

		/** Required. Zero-based character index of the first character past the end of the text segment (counting character from the beginning of the text). The character at the end_offset is NOT included in the text segment. */
		endOffset: FormControl<string | null | undefined>,

		/** Required. Zero-based character index of the first character of the text segment (counting characters from the beginning of the text). */
		startOffset: FormControl<string | null | undefined>,
	}
	export function CreateTextSegmentFormGroup() {
		return new FormGroup<TextSegmentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			endOffset: new FormControl<string | null | undefined>(undefined),
			startOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains annotation details specific to text sentiment. */
	export interface TextSentimentAnnotation {

		/** Output only. The sentiment with the semantic, as given to the AutoMl.ImportData when populating the dataset from which the model used for the prediction had been trained. The sentiment values are between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive), with higher value meaning more positive sentiment. They are completely relative, i.e. 0 means least positive sentiment and sentiment_max means the most positive from the sentiments present in the train data. Therefore e.g. if train data had only negative sentiment, then sentiment_max, would be still negative (although least negative). The sentiment shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. */
		sentiment?: number | null;
	}

	/** Contains annotation details specific to text sentiment. */
	export interface TextSentimentAnnotationFormProperties {

		/** Output only. The sentiment with the semantic, as given to the AutoMl.ImportData when populating the dataset from which the model used for the prediction had been trained. The sentiment values are between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive), with higher value meaning more positive sentiment. They are completely relative, i.e. 0 means least positive sentiment and sentiment_max means the most positive from the sentiments present in the train data. Therefore e.g. if train data had only negative sentiment, then sentiment_max, would be still negative (although least negative). The sentiment shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. */
		sentiment: FormControl<number | null | undefined>,
	}
	export function CreateTextSentimentAnnotationFormGroup() {
		return new FormGroup<TextSentimentAnnotationFormProperties>({
			sentiment: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Annotation details specific to translation. */
	export interface TranslationAnnotation {

		/** A representation of a text snippet. */
		translatedContent?: TextSnippet;
	}

	/** Annotation details specific to translation. */
	export interface TranslationAnnotationFormProperties {
	}
	export function CreateTranslationAnnotationFormGroup() {
		return new FormGroup<TranslationAnnotationFormProperties>({
		});

	}


	/** A representation of a text snippet. */
	export interface TextSnippet {

		/** Required. The content of the text snippet as a string. Up to 250000 characters long. */
		content?: string | null;

		/** Output only. HTTP URI where you can download the content. */
		contentUri?: string | null;

		/** Optional. The format of content. Currently the only two allowed values are "text/html" and "text/plain". If left blank, the format is automatically determined from the type of the uploaded content. */
		mimeType?: string | null;
	}

	/** A representation of a text snippet. */
	export interface TextSnippetFormProperties {

		/** Required. The content of the text snippet as a string. Up to 250000 characters long. */
		content: FormControl<string | null | undefined>,

		/** Output only. HTTP URI where you can download the content. */
		contentUri: FormControl<string | null | undefined>,

		/** Optional. The format of content. Currently the only two allowed values are "text/html" and "text/plain". If left blank, the format is automatically determined from the type of the uploaded content. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateTextSnippetFormGroup() {
		return new FormGroup<TextSnippetFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			contentUri: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains annotation details specific to video classification. */
	export interface VideoClassificationAnnotation {

		/** Contains annotation details specific to classification. */
		classificationAnnotation?: ClassificationAnnotation;

		/** A time period inside of an example that has a time dimension (e.g. video). */
		timeSegment?: TimeSegment;

		/** Output only. Expresses the type of video classification. Possible values: * `segment` - Classification done on a specified by user time segment of a video. AnnotationSpec is answered to be present in that time segment, if it is present in any part of it. The video ML model evaluations are done only for this type of classification. * `shot`- Shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. * `1s_interval` - AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. */
		type?: string | null;
	}

	/** Contains annotation details specific to video classification. */
	export interface VideoClassificationAnnotationFormProperties {

		/** Output only. Expresses the type of video classification. Possible values: * `segment` - Classification done on a specified by user time segment of a video. AnnotationSpec is answered to be present in that time segment, if it is present in any part of it. The video ML model evaluations are done only for this type of classification. * `shot`- Shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. * `1s_interval` - AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVideoClassificationAnnotationFormGroup() {
		return new FormGroup<VideoClassificationAnnotationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A time period inside of an example that has a time dimension (e.g. video). */
	export interface TimeSegment {

		/** End of the time segment (exclusive), represented as the duration since the example start. */
		endTimeOffset?: string | null;

		/** Start of the time segment (inclusive), represented as the duration since the example start. */
		startTimeOffset?: string | null;
	}

	/** A time period inside of an example that has a time dimension (e.g. video). */
	export interface TimeSegmentFormProperties {

		/** End of the time segment (exclusive), represented as the duration since the example start. */
		endTimeOffset: FormControl<string | null | undefined>,

		/** Start of the time segment (inclusive), represented as the duration since the example start. */
		startTimeOffset: FormControl<string | null | undefined>,
	}
	export function CreateTimeSegmentFormGroup() {
		return new FormGroup<TimeSegmentFormProperties>({
			endTimeOffset: new FormControl<string | null | undefined>(undefined),
			startTimeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Annotation details for video object tracking. */
	export interface VideoObjectTrackingAnnotation {

		/** A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed. */
		boundingBox?: BoundingPoly;

		/** Optional. The instance of the object, expressed as a positive integer. Used to tell apart objects of the same type (i.e. AnnotationSpec) when multiple are present on a single example. NOTE: Instance ID prediction quality is not a part of model evaluation and is done as best effort. Especially in cases when an entity goes off-screen for a longer time (minutes), when it comes back it may be given a new instance ID. */
		instanceId?: string | null;

		/** Output only. The confidence that this annotation is positive for the video at the time_offset, value in [0, 1], higher means higher positivity confidence. For annotations created by the user the score is 1. When user approves an annotation, the original float score is kept (and not changed to 1). */
		score?: number | null;

		/** Required. A time (frame) of a video to which this annotation pertains. Represented as the duration since the video's start. */
		timeOffset?: string | null;
	}

	/** Annotation details for video object tracking. */
	export interface VideoObjectTrackingAnnotationFormProperties {

		/** Optional. The instance of the object, expressed as a positive integer. Used to tell apart objects of the same type (i.e. AnnotationSpec) when multiple are present on a single example. NOTE: Instance ID prediction quality is not a part of model evaluation and is done as best effort. Especially in cases when an entity goes off-screen for a longer time (minutes), when it comes back it may be given a new instance ID. */
		instanceId: FormControl<string | null | undefined>,

		/** Output only. The confidence that this annotation is positive for the video at the time_offset, value in [0, 1], higher means higher positivity confidence. For annotations created by the user the score is 1. When user approves an annotation, the original float score is kept (and not changed to 1). */
		score: FormControl<number | null | undefined>,

		/** Required. A time (frame) of a video to which this annotation pertains. Represented as the duration since the video's start. */
		timeOffset: FormControl<string | null | undefined>,
	}
	export function CreateVideoObjectTrackingAnnotationFormGroup() {
		return new FormGroup<VideoObjectTrackingAnnotationFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			timeOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A definition of an annotation spec. */
	export interface AnnotationSpec {

		/** Required. The name of the annotation spec to show in the interface. The name can be up to 32 characters long and must match the regexp `[a-zA-Z0-9_]+`. */
		displayName?: string | null;

		/** Output only. The number of examples in the parent dataset labeled by the annotation spec. */
		exampleCount?: number | null;

		/** Output only. Resource name of the annotation spec. Form: 'projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationSpecs/{annotation_spec_id}' */
		name?: string | null;
	}

	/** A definition of an annotation spec. */
	export interface AnnotationSpecFormProperties {

		/** Required. The name of the annotation spec to show in the interface. The name can be up to 32 characters long and must match the regexp `[a-zA-Z0-9_]+`. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The number of examples in the parent dataset labeled by the annotation spec. */
		exampleCount: FormControl<number | null | undefined>,

		/** Output only. Resource name of the annotation spec. Form: 'projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationSpecs/{annotation_spec_id}' */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationSpecFormGroup() {
		return new FormGroup<AnnotationSpecFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			exampleCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data statistics of a series of ARRAY values. */
	export interface ArrayStats {

		/** The data statistics of a series of values that share the same DataType. */
		memberStats?: DataStats;
	}

	/** The data statistics of a series of ARRAY values. */
	export interface ArrayStatsFormProperties {
	}
	export function CreateArrayStatsFormGroup() {
		return new FormGroup<ArrayStatsFormProperties>({
		});

	}


	/** The data statistics of a series of values that share the same DataType. */
	export interface DataStats {

		/** The data statistics of a series of ARRAY values. */
		arrayStats?: ArrayStats;

		/** The data statistics of a series of CATEGORY values. */
		categoryStats?: CategoryStats;

		/** The number of distinct values. */
		distinctValueCount?: string | null;

		/** The data statistics of a series of FLOAT64 values. */
		float64Stats?: Float64Stats;

		/** The number of values that are null. */
		nullValueCount?: string | null;

		/** The data statistics of a series of STRING values. */
		stringStats?: StringStats;

		/** The data statistics of a series of STRUCT values. */
		structStats?: StructStats;

		/** The data statistics of a series of TIMESTAMP values. */
		timestampStats?: TimestampStats;

		/** The number of values that are valid. */
		validValueCount?: string | null;
	}

	/** The data statistics of a series of values that share the same DataType. */
	export interface DataStatsFormProperties {

		/** The number of distinct values. */
		distinctValueCount: FormControl<string | null | undefined>,

		/** The number of values that are null. */
		nullValueCount: FormControl<string | null | undefined>,

		/** The number of values that are valid. */
		validValueCount: FormControl<string | null | undefined>,
	}
	export function CreateDataStatsFormGroup() {
		return new FormGroup<DataStatsFormProperties>({
			distinctValueCount: new FormControl<string | null | undefined>(undefined),
			nullValueCount: new FormControl<string | null | undefined>(undefined),
			validValueCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data statistics of a series of CATEGORY values. */
	export interface CategoryStats {

		/** The statistics of the top 20 CATEGORY values, ordered by count. */
		topCategoryStats?: Array<SingleCategoryStats>;
	}

	/** The data statistics of a series of CATEGORY values. */
	export interface CategoryStatsFormProperties {
	}
	export function CreateCategoryStatsFormGroup() {
		return new FormGroup<CategoryStatsFormProperties>({
		});

	}


	/** The statistics of a single CATEGORY value. */
	export interface SingleCategoryStats {

		/** The number of occurrences of this value in the series. */
		count?: string | null;

		/** The CATEGORY value. */
		value?: string | null;
	}

	/** The statistics of a single CATEGORY value. */
	export interface SingleCategoryStatsFormProperties {

		/** The number of occurrences of this value in the series. */
		count: FormControl<string | null | undefined>,

		/** The CATEGORY value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSingleCategoryStatsFormGroup() {
		return new FormGroup<SingleCategoryStatsFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data statistics of a series of FLOAT64 values. */
	export interface Float64Stats {

		/** Histogram buckets of the data series. Sorted by the min value of the bucket, ascendingly, and the number of the buckets is dynamically generated. The buckets are non-overlapping and completely cover whole FLOAT64 range with min of first bucket being `"-Infinity"`, and max of the last one being `"Infinity"`. */
		histogramBuckets?: Array<HistogramBucket>;

		/** The mean of the series. */
		mean?: number | null;

		/** Ordered from 0 to k k-quantile values of the data series of n values. The value at index i is, approximately, the i*n/k-th smallest value in the series; for i = 0 and i = k these are, respectively, the min and max values. */
		quantiles?: Array<number>;

		/** The standard deviation of the series. */
		standardDeviation?: number | null;
	}

	/** The data statistics of a series of FLOAT64 values. */
	export interface Float64StatsFormProperties {

		/** The mean of the series. */
		mean: FormControl<number | null | undefined>,

		/** The standard deviation of the series. */
		standardDeviation: FormControl<number | null | undefined>,
	}
	export function CreateFloat64StatsFormGroup() {
		return new FormGroup<Float64StatsFormProperties>({
			mean: new FormControl<number | null | undefined>(undefined),
			standardDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bucket of a histogram. */
	export interface HistogramBucket {

		/** The number of data values that are in the bucket, i.e. are between min and max values. */
		count?: string | null;

		/** The maximum value of the bucket, exclusive unless max = `"Infinity"`, in which case it's inclusive. */
		max?: number | null;

		/** The minimum value of the bucket, inclusive. */
		min?: number | null;
	}

	/** A bucket of a histogram. */
	export interface HistogramBucketFormProperties {

		/** The number of data values that are in the bucket, i.e. are between min and max values. */
		count: FormControl<string | null | undefined>,

		/** The maximum value of the bucket, exclusive unless max = `"Infinity"`, in which case it's inclusive. */
		max: FormControl<number | null | undefined>,

		/** The minimum value of the bucket, inclusive. */
		min: FormControl<number | null | undefined>,
	}
	export function CreateHistogramBucketFormGroup() {
		return new FormGroup<HistogramBucketFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data statistics of a series of STRING values. */
	export interface StringStats {

		/** The statistics of the top 20 unigrams, ordered by count. */
		topUnigramStats?: Array<UnigramStats>;
	}

	/** The data statistics of a series of STRING values. */
	export interface StringStatsFormProperties {
	}
	export function CreateStringStatsFormGroup() {
		return new FormGroup<StringStatsFormProperties>({
		});

	}


	/** The statistics of a unigram. */
	export interface UnigramStats {

		/** The number of occurrences of this unigram in the series. */
		count?: string | null;

		/** The unigram. */
		value?: string | null;
	}

	/** The statistics of a unigram. */
	export interface UnigramStatsFormProperties {

		/** The number of occurrences of this unigram in the series. */
		count: FormControl<string | null | undefined>,

		/** The unigram. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUnigramStatsFormGroup() {
		return new FormGroup<UnigramStatsFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data statistics of a series of STRUCT values. */
	export interface StructStats {

		/** Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs. */
		fieldStats?: {[id: string]: DataStats };
	}

	/** The data statistics of a series of STRUCT values. */
	export interface StructStatsFormProperties {

		/** Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs. */
		fieldStats: FormControl<{[id: string]: DataStats } | null | undefined>,
	}
	export function CreateStructStatsFormGroup() {
		return new FormGroup<StructStatsFormProperties>({
			fieldStats: new FormControl<{[id: string]: DataStats } | null | undefined>(undefined),
		});

	}


	/** The data statistics of a series of TIMESTAMP values. */
	export interface TimestampStats {

		/** The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated). */
		granularStats?: {[id: string]: GranularStats };
	}

	/** The data statistics of a series of TIMESTAMP values. */
	export interface TimestampStatsFormProperties {

		/** The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated). */
		granularStats: FormControl<{[id: string]: GranularStats } | null | undefined>,
	}
	export function CreateTimestampStatsFormGroup() {
		return new FormGroup<TimestampStatsFormProperties>({
			granularStats: new FormControl<{[id: string]: GranularStats } | null | undefined>(undefined),
		});

	}


	/** Stats split by a defined in context granularity. */
	export interface GranularStats {

		/** A map from granularity key to example count for that key. E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May). */
		buckets?: {[id: string]: string };
	}

	/** Stats split by a defined in context granularity. */
	export interface GranularStatsFormProperties {

		/** A map from granularity key to example count for that key. E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May). */
		buckets: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGranularStatsFormGroup() {
		return new FormGroup<GranularStatsFormProperties>({
			buckets: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Input configuration for BatchPredict Action. The format of input depends on the ML problem of the model used for prediction. As input source the gcs_source is expected, unless specified otherwise. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Image Object Detection: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Video Classification: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,40 gs://folder/video1.mp4,20,60 gs://folder/vid2.mov,0,inf * For Video Object Tracking: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,240 gs://folder/video1.mp4,300,360 gs://folder/vid2.mov,0,inf * For Text Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 60,000 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Sentiment: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 500 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Extraction .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or as documents (for a single BatchPredict call only one of the these formats may be used). The in-line .JSONL file(s) contain per line a proto that wraps a temporary user-assigned TextSnippet ID (string up to 2000 characters long) called "id", a TextSnippet proto (in json representation) and zero or more TextFeature protos. Any given text snippet content must have 30,000 characters or less, and also be UTF-8 NFC encoded (ASCII already is). The IDs provided should be unique. The document .JSONL file(s) contain, per line, a proto that wraps a Document proto with input_config set. Only PDF documents are supported now, and each document must be up to 2MB large. Any given .JSONL file must be 100MB or smaller, and no more than 20 files may be given. Sample in-line JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n): { "id": "my_first_id", "text_snippet": { "content": "dog car cat"}, "text_features": [ { "text_segment": {"start_offset": 4, "end_offset": 6}, "structural_type": PARAGRAPH, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ] }, } ], }\n { "id": "2", "text_snippet": { "content": "An elaborate content", "mime_type": "text/plain" } } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Tables: Either gcs_source or bigquery_source. GCS case: CSV file(s), each by itself 10GB or smaller and total size must be 100GB or smaller, where first file must have a header containing column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows, i.e. the CSV lines, will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. First three sample rows of a CSV file: "First Name","Last Name","Dob","Addresses" "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} BigQuery case: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows of the table will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. Definitions: GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi". TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes ("") TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed and it means the end of the example. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and prediction does not happen. Regardless of overall success or failure the per-row failures, up to a certain count cap, will be listed in Operation.metadata.partial_failures. */
	export interface BatchPredictInputConfig {

		/** The BigQuery location for the input content. */
		bigquerySource?: BigQuerySource;

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;
	}

	/** Input configuration for BatchPredict Action. The format of input depends on the ML problem of the model used for prediction. As input source the gcs_source is expected, unless specified otherwise. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Image Object Detection: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Video Classification: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,40 gs://folder/video1.mp4,20,60 gs://folder/vid2.mov,0,inf * For Video Object Tracking: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,240 gs://folder/video1.mp4,300,360 gs://folder/vid2.mov,0,inf * For Text Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 60,000 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Sentiment: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 500 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Extraction .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or as documents (for a single BatchPredict call only one of the these formats may be used). The in-line .JSONL file(s) contain per line a proto that wraps a temporary user-assigned TextSnippet ID (string up to 2000 characters long) called "id", a TextSnippet proto (in json representation) and zero or more TextFeature protos. Any given text snippet content must have 30,000 characters or less, and also be UTF-8 NFC encoded (ASCII already is). The IDs provided should be unique. The document .JSONL file(s) contain, per line, a proto that wraps a Document proto with input_config set. Only PDF documents are supported now, and each document must be up to 2MB large. Any given .JSONL file must be 100MB or smaller, and no more than 20 files may be given. Sample in-line JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n): { "id": "my_first_id", "text_snippet": { "content": "dog car cat"}, "text_features": [ { "text_segment": {"start_offset": 4, "end_offset": 6}, "structural_type": PARAGRAPH, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ] }, } ], }\n { "id": "2", "text_snippet": { "content": "An elaborate content", "mime_type": "text/plain" } } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Tables: Either gcs_source or bigquery_source. GCS case: CSV file(s), each by itself 10GB or smaller and total size must be 100GB or smaller, where first file must have a header containing column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows, i.e. the CSV lines, will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. First three sample rows of a CSV file: "First Name","Last Name","Dob","Addresses" "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} BigQuery case: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows of the table will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. Definitions: GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi". TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes ("") TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed and it means the end of the example. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and prediction does not happen. Regardless of overall success or failure the per-row failures, up to a certain count cap, will be listed in Operation.metadata.partial_failures. */
	export interface BatchPredictInputConfigFormProperties {
	}
	export function CreateBatchPredictInputConfigFormGroup() {
		return new FormGroup<BatchPredictInputConfigFormProperties>({
		});

	}


	/** The BigQuery location for the input content. */
	export interface BigQuerySource {

		/** Required. BigQuery URI to a table, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId.bqDatasetId.bqTableId */
		inputUri?: string | null;
	}

	/** The BigQuery location for the input content. */
	export interface BigQuerySourceFormProperties {

		/** Required. BigQuery URI to a table, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId.bqDatasetId.bqTableId */
		inputUri: FormControl<string | null | undefined>,
	}
	export function CreateBigQuerySourceFormGroup() {
		return new FormGroup<BigQuerySourceFormProperties>({
			inputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location for the input content. */
	export interface GcsSource {

		/** Required. Google Cloud Storage URIs to input files, up to 2000 characters long. Accepted forms: * Full object path, e.g. gs://bucket/directory/object.csv */
		inputUris?: Array<string>;
	}

	/** The Google Cloud Storage location for the input content. */
	export interface GcsSourceFormProperties {
	}
	export function CreateGcsSourceFormGroup() {
		return new FormGroup<GcsSourceFormProperties>({
		});

	}


	/** Details of BatchPredict operation. */
	export interface BatchPredictOperationMetadata {

		/** Input configuration for BatchPredict Action. The format of input depends on the ML problem of the model used for prediction. As input source the gcs_source is expected, unless specified otherwise. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Image Object Detection: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Video Classification: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,40 gs://folder/video1.mp4,20,60 gs://folder/vid2.mov,0,inf * For Video Object Tracking: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,240 gs://folder/video1.mp4,300,360 gs://folder/vid2.mov,0,inf * For Text Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 60,000 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Sentiment: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 500 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Extraction .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or as documents (for a single BatchPredict call only one of the these formats may be used). The in-line .JSONL file(s) contain per line a proto that wraps a temporary user-assigned TextSnippet ID (string up to 2000 characters long) called "id", a TextSnippet proto (in json representation) and zero or more TextFeature protos. Any given text snippet content must have 30,000 characters or less, and also be UTF-8 NFC encoded (ASCII already is). The IDs provided should be unique. The document .JSONL file(s) contain, per line, a proto that wraps a Document proto with input_config set. Only PDF documents are supported now, and each document must be up to 2MB large. Any given .JSONL file must be 100MB or smaller, and no more than 20 files may be given. Sample in-line JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n): { "id": "my_first_id", "text_snippet": { "content": "dog car cat"}, "text_features": [ { "text_segment": {"start_offset": 4, "end_offset": 6}, "structural_type": PARAGRAPH, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ] }, } ], }\n { "id": "2", "text_snippet": { "content": "An elaborate content", "mime_type": "text/plain" } } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Tables: Either gcs_source or bigquery_source. GCS case: CSV file(s), each by itself 10GB or smaller and total size must be 100GB or smaller, where first file must have a header containing column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows, i.e. the CSV lines, will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. First three sample rows of a CSV file: "First Name","Last Name","Dob","Addresses" "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} BigQuery case: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows of the table will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. Definitions: GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi". TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes ("") TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed and it means the end of the example. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and prediction does not happen. Regardless of overall success or failure the per-row failures, up to a certain count cap, will be listed in Operation.metadata.partial_failures. */
		inputConfig?: BatchPredictInputConfig;

		/** Further describes this batch predict's output. Supplements BatchPredictOutputConfig. */
		outputInfo?: BatchPredictOutputInfo;
	}

	/** Details of BatchPredict operation. */
	export interface BatchPredictOperationMetadataFormProperties {
	}
	export function CreateBatchPredictOperationMetadataFormGroup() {
		return new FormGroup<BatchPredictOperationMetadataFormProperties>({
		});

	}


	/** Further describes this batch predict's output. Supplements BatchPredictOutputConfig. */
	export interface BatchPredictOutputInfo {

		/** The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the prediction output is written. */
		bigqueryOutputDataset?: string | null;

		/** The full path of the Google Cloud Storage directory created, into which the prediction output is written. */
		gcsOutputDirectory?: string | null;
	}

	/** Further describes this batch predict's output. Supplements BatchPredictOutputConfig. */
	export interface BatchPredictOutputInfoFormProperties {

		/** The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the prediction output is written. */
		bigqueryOutputDataset: FormControl<string | null | undefined>,

		/** The full path of the Google Cloud Storage directory created, into which the prediction output is written. */
		gcsOutputDirectory: FormControl<string | null | undefined>,
	}
	export function CreateBatchPredictOutputInfoFormGroup() {
		return new FormGroup<BatchPredictOutputInfoFormProperties>({
			bigqueryOutputDataset: new FormControl<string | null | undefined>(undefined),
			gcsOutputDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output configuration for BatchPredict Action. As destination the gcs_destination must be set unless specified otherwise for a domain. If gcs_destination is set then in the given directory a new directory is created. Its name will be "prediction--", where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. The contents of it depends on the ML problem the predictions are made for. * For Image Classification: In the created directory files `image_classification_1.jsonl`, `image_classification_2.jsonl`,...,`image_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. A single image will be listed only once with all its annotations, and its annotations will never be split across files. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image's "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. If prediction for any image failed (partially or completely), then an additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Image Object Detection: In the created directory files `image_object_detection_1.jsonl`, `image_object_detection_2.jsonl`,...,`image_object_detection_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image's "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have image_object_detection detail populated. A single image will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any image failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Video Classification: In the created directory a video_classification.csv file, and a .JSON file per each video classification requested in the input (i.e. each line in given CSV(s)), will be created. The format of video_classification.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_classification.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for the video time segment the file is assigned to in the video_classification.csv. All AnnotationPayload protos will have video_classification field set, and will be sorted by video_classification.type field (note that the returned types are governed by `classifaction_types` parameter in PredictService.BatchPredictRequest.params). * For Video Object Tracking: In the created directory a video_object_tracking.csv file will be created, and multiple files video_object_trackinng_1.json, video_object_trackinng_2.json,..., video_object_trackinng_N.json, where N is the number of requests in the input (i.e. the number of lines in given CSV(s)). The format of video_object_tracking.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_object_tracking.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for each frame of the video time segment the file is assigned to in video_object_tracking.csv. All AnnotationPayload protos will have video_object_tracking field set. * For Text Classification: In the created directory files `text_classification_1.jsonl`, `text_classification_2.jsonl`,...,`text_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Sentiment: In the created directory files `text_sentiment_1.jsonl`, `text_sentiment_2.jsonl`,...,`text_sentiment_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have text_sentiment detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Extraction: In the created directory files `text_extraction_1.jsonl`, `text_extraction_2.jsonl`,...,`text_extraction_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. The contents of these .JSONL file(s) depend on whether the input used inline text, or documents. If input was inline, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request text snippet's "id" (if specified), followed by input text snippet, and a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated. A single text snippet will be listed only once with all its annotations, and its annotations will never be split across files. If input used documents, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request document proto, followed by its OCR-ed representation in the form of a text snippet, finally followed by a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated and refer, via their indices, to the OCR-ed text snippet. A single document (and its text snippet) will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps either the "id" : "" (in case of inline) or the document proto (in case of document) but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Tables: Output depends on whether gcs_destination or bigquery_destination is set (either is allowed). GCS case: In the created directory files `tables_1.csv`, `tables_2.csv`,..., `tables_N.csv` will be created, where N may be 1, and depends on the total number of the successfully predicted rows. For all CLASSIFICATION prediction_type-s: Each .csv file will contain a header, listing all columns' display_name-s given on input followed by M target column names in the format of "__score" where M is the number of distinct target values, i.e. number of distinct values in the target column of the table used to train the model. Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, columns having the corresponding prediction scores. For REGRESSION and FORECASTING prediction_type-s: Each .csv file will contain a header, listing all columns' display_name-s given on input followed by the predicted target column with name in the format of "predicted_" Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, column having the predicted target value. If prediction for any rows failed, then an additional `errors_1.csv`, `errors_2.csv`,..., `errors_N.csv` will be created (N depends on total number of failed rows). These files will have analogous format as `tables_*.csv`, but always with a single target column having [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a JSON string, and containing only `code` and `message`. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `prediction__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset two tables will be created, `predictions`, and `errors`. The `predictions` table's column names will be the input columns' display_name-s followed by the target column with name in the format of "predicted_" The input feature columns will contain the respective values of successfully predicted rows, with the target column having an ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation. The `errors` table contains rows for which the prediction has failed, it has analogous input columns while the target column name is in the format of "errors_", and as a value has [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a STRUCT, and containing only `code` and `message`. */
	export interface BatchPredictOutputConfig {

		/** The BigQuery location for the output content. */
		bigqueryDestination?: BigQueryDestination;

		/** The Google Cloud Storage location where the output is to be written to. */
		gcsDestination?: GcsDestination;
	}

	/** Output configuration for BatchPredict Action. As destination the gcs_destination must be set unless specified otherwise for a domain. If gcs_destination is set then in the given directory a new directory is created. Its name will be "prediction--", where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. The contents of it depends on the ML problem the predictions are made for. * For Image Classification: In the created directory files `image_classification_1.jsonl`, `image_classification_2.jsonl`,...,`image_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. A single image will be listed only once with all its annotations, and its annotations will never be split across files. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image's "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. If prediction for any image failed (partially or completely), then an additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Image Object Detection: In the created directory files `image_object_detection_1.jsonl`, `image_object_detection_2.jsonl`,...,`image_object_detection_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image's "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have image_object_detection detail populated. A single image will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any image failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Video Classification: In the created directory a video_classification.csv file, and a .JSON file per each video classification requested in the input (i.e. each line in given CSV(s)), will be created. The format of video_classification.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_classification.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for the video time segment the file is assigned to in the video_classification.csv. All AnnotationPayload protos will have video_classification field set, and will be sorted by video_classification.type field (note that the returned types are governed by `classifaction_types` parameter in PredictService.BatchPredictRequest.params). * For Video Object Tracking: In the created directory a video_object_tracking.csv file will be created, and multiple files video_object_trackinng_1.json, video_object_trackinng_2.json,..., video_object_trackinng_N.json, where N is the number of requests in the input (i.e. the number of lines in given CSV(s)). The format of video_object_tracking.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_object_tracking.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for each frame of the video time segment the file is assigned to in video_object_tracking.csv. All AnnotationPayload protos will have video_object_tracking field set. * For Text Classification: In the created directory files `text_classification_1.jsonl`, `text_classification_2.jsonl`,...,`text_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Sentiment: In the created directory files `text_sentiment_1.jsonl`, `text_sentiment_2.jsonl`,...,`text_sentiment_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have text_sentiment detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Extraction: In the created directory files `text_extraction_1.jsonl`, `text_extraction_2.jsonl`,...,`text_extraction_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. The contents of these .JSONL file(s) depend on whether the input used inline text, or documents. If input was inline, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request text snippet's "id" (if specified), followed by input text snippet, and a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated. A single text snippet will be listed only once with all its annotations, and its annotations will never be split across files. If input used documents, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request document proto, followed by its OCR-ed representation in the form of a text snippet, finally followed by a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated and refer, via their indices, to the OCR-ed text snippet. A single document (and its text snippet) will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps either the "id" : "" (in case of inline) or the document proto (in case of document) but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Tables: Output depends on whether gcs_destination or bigquery_destination is set (either is allowed). GCS case: In the created directory files `tables_1.csv`, `tables_2.csv`,..., `tables_N.csv` will be created, where N may be 1, and depends on the total number of the successfully predicted rows. For all CLASSIFICATION prediction_type-s: Each .csv file will contain a header, listing all columns' display_name-s given on input followed by M target column names in the format of "__score" where M is the number of distinct target values, i.e. number of distinct values in the target column of the table used to train the model. Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, columns having the corresponding prediction scores. For REGRESSION and FORECASTING prediction_type-s: Each .csv file will contain a header, listing all columns' display_name-s given on input followed by the predicted target column with name in the format of "predicted_" Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, column having the predicted target value. If prediction for any rows failed, then an additional `errors_1.csv`, `errors_2.csv`,..., `errors_N.csv` will be created (N depends on total number of failed rows). These files will have analogous format as `tables_*.csv`, but always with a single target column having [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a JSON string, and containing only `code` and `message`. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `prediction__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset two tables will be created, `predictions`, and `errors`. The `predictions` table's column names will be the input columns' display_name-s followed by the target column with name in the format of "predicted_" The input feature columns will contain the respective values of successfully predicted rows, with the target column having an ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation. The `errors` table contains rows for which the prediction has failed, it has analogous input columns while the target column name is in the format of "errors_", and as a value has [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a STRUCT, and containing only `code` and `message`. */
	export interface BatchPredictOutputConfigFormProperties {
	}
	export function CreateBatchPredictOutputConfigFormGroup() {
		return new FormGroup<BatchPredictOutputConfigFormProperties>({
		});

	}


	/** The BigQuery location for the output content. */
	export interface BigQueryDestination {

		/** Required. BigQuery URI to a project, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId */
		outputUri?: string | null;
	}

	/** The BigQuery location for the output content. */
	export interface BigQueryDestinationFormProperties {

		/** Required. BigQuery URI to a project, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryDestinationFormGroup() {
		return new FormGroup<BigQueryDestinationFormProperties>({
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Google Cloud Storage location where the output is to be written to. */
	export interface GcsDestination {

		/** Required. Google Cloud Storage URI to output directory, up to 2000 characters long. Accepted forms: * Prefix path: gs://bucket/directory The requesting user must have write permission to the bucket. The directory is created if it doesn't exist. */
		outputUriPrefix?: string | null;
	}

	/** The Google Cloud Storage location where the output is to be written to. */
	export interface GcsDestinationFormProperties {

		/** Required. Google Cloud Storage URI to output directory, up to 2000 characters long. Accepted forms: * Prefix path: gs://bucket/directory The requesting user must have write permission to the bucket. The directory is created if it doesn't exist. */
		outputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for PredictionService.BatchPredict. */
	export interface BatchPredictRequest {

		/** Input configuration for BatchPredict Action. The format of input depends on the ML problem of the model used for prediction. As input source the gcs_source is expected, unless specified otherwise. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Image Object Detection: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Video Classification: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,40 gs://folder/video1.mp4,20,60 gs://folder/vid2.mov,0,inf * For Video Object Tracking: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,240 gs://folder/video1.mp4,300,360 gs://folder/vid2.mov,0,inf * For Text Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 60,000 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Sentiment: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 500 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Extraction .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or as documents (for a single BatchPredict call only one of the these formats may be used). The in-line .JSONL file(s) contain per line a proto that wraps a temporary user-assigned TextSnippet ID (string up to 2000 characters long) called "id", a TextSnippet proto (in json representation) and zero or more TextFeature protos. Any given text snippet content must have 30,000 characters or less, and also be UTF-8 NFC encoded (ASCII already is). The IDs provided should be unique. The document .JSONL file(s) contain, per line, a proto that wraps a Document proto with input_config set. Only PDF documents are supported now, and each document must be up to 2MB large. Any given .JSONL file must be 100MB or smaller, and no more than 20 files may be given. Sample in-line JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n): { "id": "my_first_id", "text_snippet": { "content": "dog car cat"}, "text_features": [ { "text_segment": {"start_offset": 4, "end_offset": 6}, "structural_type": PARAGRAPH, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ] }, } ], }\n { "id": "2", "text_snippet": { "content": "An elaborate content", "mime_type": "text/plain" } } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Tables: Either gcs_source or bigquery_source. GCS case: CSV file(s), each by itself 10GB or smaller and total size must be 100GB or smaller, where first file must have a header containing column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows, i.e. the CSV lines, will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. First three sample rows of a CSV file: "First Name","Last Name","Dob","Addresses" "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} BigQuery case: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows of the table will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. Definitions: GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi". TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes ("") TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed and it means the end of the example. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and prediction does not happen. Regardless of overall success or failure the per-row failures, up to a certain count cap, will be listed in Operation.metadata.partial_failures. */
		inputConfig?: BatchPredictInputConfig;

		/** Output configuration for BatchPredict Action. As destination the gcs_destination must be set unless specified otherwise for a domain. If gcs_destination is set then in the given directory a new directory is created. Its name will be "prediction--", where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. The contents of it depends on the ML problem the predictions are made for. * For Image Classification: In the created directory files `image_classification_1.jsonl`, `image_classification_2.jsonl`,...,`image_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. A single image will be listed only once with all its annotations, and its annotations will never be split across files. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image's "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. If prediction for any image failed (partially or completely), then an additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Image Object Detection: In the created directory files `image_object_detection_1.jsonl`, `image_object_detection_2.jsonl`,...,`image_object_detection_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image's "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have image_object_detection detail populated. A single image will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any image failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Video Classification: In the created directory a video_classification.csv file, and a .JSON file per each video classification requested in the input (i.e. each line in given CSV(s)), will be created. The format of video_classification.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_classification.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for the video time segment the file is assigned to in the video_classification.csv. All AnnotationPayload protos will have video_classification field set, and will be sorted by video_classification.type field (note that the returned types are governed by `classifaction_types` parameter in PredictService.BatchPredictRequest.params). * For Video Object Tracking: In the created directory a video_object_tracking.csv file will be created, and multiple files video_object_trackinng_1.json, video_object_trackinng_2.json,..., video_object_trackinng_N.json, where N is the number of requests in the input (i.e. the number of lines in given CSV(s)). The format of video_object_tracking.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_object_tracking.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for each frame of the video time segment the file is assigned to in video_object_tracking.csv. All AnnotationPayload protos will have video_object_tracking field set. * For Text Classification: In the created directory files `text_classification_1.jsonl`, `text_classification_2.jsonl`,...,`text_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Sentiment: In the created directory files `text_sentiment_1.jsonl`, `text_sentiment_2.jsonl`,...,`text_sentiment_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have text_sentiment detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Extraction: In the created directory files `text_extraction_1.jsonl`, `text_extraction_2.jsonl`,...,`text_extraction_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. The contents of these .JSONL file(s) depend on whether the input used inline text, or documents. If input was inline, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request text snippet's "id" (if specified), followed by input text snippet, and a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated. A single text snippet will be listed only once with all its annotations, and its annotations will never be split across files. If input used documents, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request document proto, followed by its OCR-ed representation in the form of a text snippet, finally followed by a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated and refer, via their indices, to the OCR-ed text snippet. A single document (and its text snippet) will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps either the "id" : "" (in case of inline) or the document proto (in case of document) but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Tables: Output depends on whether gcs_destination or bigquery_destination is set (either is allowed). GCS case: In the created directory files `tables_1.csv`, `tables_2.csv`,..., `tables_N.csv` will be created, where N may be 1, and depends on the total number of the successfully predicted rows. For all CLASSIFICATION prediction_type-s: Each .csv file will contain a header, listing all columns' display_name-s given on input followed by M target column names in the format of "__score" where M is the number of distinct target values, i.e. number of distinct values in the target column of the table used to train the model. Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, columns having the corresponding prediction scores. For REGRESSION and FORECASTING prediction_type-s: Each .csv file will contain a header, listing all columns' display_name-s given on input followed by the predicted target column with name in the format of "predicted_" Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, column having the predicted target value. If prediction for any rows failed, then an additional `errors_1.csv`, `errors_2.csv`,..., `errors_N.csv` will be created (N depends on total number of failed rows). These files will have analogous format as `tables_*.csv`, but always with a single target column having [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a JSON string, and containing only `code` and `message`. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `prediction__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset two tables will be created, `predictions`, and `errors`. The `predictions` table's column names will be the input columns' display_name-s followed by the target column with name in the format of "predicted_" The input feature columns will contain the respective values of successfully predicted rows, with the target column having an ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation. The `errors` table contains rows for which the prediction has failed, it has analogous input columns while the target column name is in the format of "errors_", and as a value has [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a STRUCT, and containing only `code` and `message`. */
		outputConfig?: BatchPredictOutputConfig;

		/** Required. Additional domain-specific parameters for the predictions, any string must be up to 25000 characters long. * For Text Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a text snippet, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be produced per image. Default is 100, the requested value may be limited by server. * For Video Classification : `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a video, it will only produce results that have at least this confidence score. The default is 0.5. `segment_classification` - (boolean) Set to true to request segment-level classification. AutoML Video Intelligence returns labels and their confidence scores for the entire segment of the video that user specified in the request configuration. The default is "true". `shot_classification` - (boolean) Set to true to request shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". `1s_interval_classification` - (boolean) Set to true to request classification for a video at one-second intervals. AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotations. The default is false. * For Video Object Tracking: `score_threshold` - (float) When Model detects objects on video frames, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned per frame. Default is 100, the requested value may be limited by server. `min_bounding_box_size` - (float) Only bounding boxes with shortest edge at least that long as a relative value of video frame size will be returned. Value in 0 to 1 range. Default is 0. */
		params?: {[id: string]: string };
	}

	/** Request message for PredictionService.BatchPredict. */
	export interface BatchPredictRequestFormProperties {

		/** Required. Additional domain-specific parameters for the predictions, any string must be up to 25000 characters long. * For Text Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a text snippet, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be produced per image. Default is 100, the requested value may be limited by server. * For Video Classification : `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a video, it will only produce results that have at least this confidence score. The default is 0.5. `segment_classification` - (boolean) Set to true to request segment-level classification. AutoML Video Intelligence returns labels and their confidence scores for the entire segment of the video that user specified in the request configuration. The default is "true". `shot_classification` - (boolean) Set to true to request shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". `1s_interval_classification` - (boolean) Set to true to request classification for a video at one-second intervals. AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotations. The default is false. * For Video Object Tracking: `score_threshold` - (float) When Model detects objects on video frames, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned per frame. Default is 100, the requested value may be limited by server. `min_bounding_box_size` - (float) Only bounding boxes with shortest edge at least that long as a relative value of video frame size will be returned. Value in 0 to 1 range. Default is 0. */
		params: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBatchPredictRequestFormGroup() {
		return new FormGroup<BatchPredictRequestFormProperties>({
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Result of the Batch Predict. This message is returned in response of the operation returned by the PredictionService.BatchPredict. */
	export interface BatchPredictResult {

		/** Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Video Object Tracking: `max_bounding_box_count` - (int64) At most that many bounding boxes per frame could have been returned. */
		metadata?: {[id: string]: string };
	}

	/** Result of the Batch Predict. This message is returned in response of the operation returned by the PredictionService.BatchPredict. */
	export interface BatchPredictResultFormProperties {

		/** Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Video Object Tracking: `max_bounding_box_count` - (int64) At most that many bounding boxes per frame could have been returned. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBatchPredictResultFormGroup() {
		return new FormGroup<BatchPredictResultFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds. */
	export interface BoundingBoxMetricsEntry {

		/** Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them. */
		confidenceMetricsEntries?: Array<BoundingBoxMetricsEntryConfidenceMetricsEntry>;

		/** Output only. The intersection-over-union threshold value used to compute this metrics entry. */
		iouThreshold?: number | null;

		/** Output only. The mean average precision, most often close to au_prc. */
		meanAveragePrecision?: number | null;
	}

	/** Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds. */
	export interface BoundingBoxMetricsEntryFormProperties {

		/** Output only. The intersection-over-union threshold value used to compute this metrics entry. */
		iouThreshold: FormControl<number | null | undefined>,

		/** Output only. The mean average precision, most often close to au_prc. */
		meanAveragePrecision: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxMetricsEntryFormGroup() {
		return new FormGroup<BoundingBoxMetricsEntryFormProperties>({
			iouThreshold: new FormControl<number | null | undefined>(undefined),
			meanAveragePrecision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metrics for a single confidence threshold. */
	export interface BoundingBoxMetricsEntryConfidenceMetricsEntry {

		/** Output only. The confidence threshold value used to compute the metrics. */
		confidenceThreshold?: number | null;

		/** Output only. The harmonic mean of recall and precision. */
		f1Score?: number | null;

		/** Output only. Precision under the given confidence threshold. */
		precision?: number | null;

		/** Output only. Recall under the given confidence threshold. */
		recall?: number | null;
	}

	/** Metrics for a single confidence threshold. */
	export interface BoundingBoxMetricsEntryConfidenceMetricsEntryFormProperties {

		/** Output only. The confidence threshold value used to compute the metrics. */
		confidenceThreshold: FormControl<number | null | undefined>,

		/** Output only. The harmonic mean of recall and precision. */
		f1Score: FormControl<number | null | undefined>,

		/** Output only. Precision under the given confidence threshold. */
		precision: FormControl<number | null | undefined>,

		/** Output only. Recall under the given confidence threshold. */
		recall: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxMetricsEntryConfidenceMetricsEntryFormGroup() {
		return new FormGroup<BoundingBoxMetricsEntryConfidenceMetricsEntryFormProperties>({
			confidenceThreshold: new FormControl<number | null | undefined>(undefined),
			f1Score: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type. */
	export interface ClassificationEvaluationMetrics {

		/** Output only. The annotation spec ids used for this evaluation. */
		annotationSpecId?: Array<string>;

		/** Output only. The Area Under Precision-Recall Curve metric. Micro-averaged for the overall evaluation. */
		auPrc?: number | null;

		/** Output only. The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation. */
		auRoc?: number | null;

		/** Output only. The Area Under Precision-Recall Curve metric based on priors. Micro-averaged for the overall evaluation. Deprecated. */
		baseAuPrc?: number | null;

		/** Output only. Metrics for each confidence_threshold in 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and position_threshold = INT32_MAX_VALUE. ROC and precision-recall curves, and other aggregated metrics are derived from them. The confidence metrics entries may also be supplied for additional values of position_threshold, but from these no aggregated metrics are computed. */
		confidenceMetricsEntry?: Array<ClassificationEvaluationMetricsConfidenceMetricsEntry>;

		/** Confusion matrix of the model running the classification. */
		confusionMatrix?: ConfusionMatrix;

		/** Output only. The Log Loss metric. */
		logLoss?: number | null;
	}

	/** Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type. */
	export interface ClassificationEvaluationMetricsFormProperties {

		/** Output only. The Area Under Precision-Recall Curve metric. Micro-averaged for the overall evaluation. */
		auPrc: FormControl<number | null | undefined>,

		/** Output only. The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation. */
		auRoc: FormControl<number | null | undefined>,

		/** Output only. The Area Under Precision-Recall Curve metric based on priors. Micro-averaged for the overall evaluation. Deprecated. */
		baseAuPrc: FormControl<number | null | undefined>,

		/** Output only. The Log Loss metric. */
		logLoss: FormControl<number | null | undefined>,
	}
	export function CreateClassificationEvaluationMetricsFormGroup() {
		return new FormGroup<ClassificationEvaluationMetricsFormProperties>({
			auPrc: new FormControl<number | null | undefined>(undefined),
			auRoc: new FormControl<number | null | undefined>(undefined),
			baseAuPrc: new FormControl<number | null | undefined>(undefined),
			logLoss: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metrics for a single confidence threshold. */
	export interface ClassificationEvaluationMetricsConfidenceMetricsEntry {

		/** Output only. Metrics are computed with an assumption that the model never returns predictions with score lower than this value. */
		confidenceThreshold?: number | null;

		/** Output only. The harmonic mean of recall and precision. */
		f1Score?: number | null;

		/** Output only. The harmonic mean of recall_at1 and precision_at1. */
		f1ScoreAt1?: number | null;

		/** Output only. The number of ground truth labels that are not matched by a model created label. */
		falseNegativeCount?: string | null;

		/** Output only. The number of model created labels that do not match a ground truth label. */
		falsePositiveCount?: string | null;

		/** Output only. False Positive Rate for the given confidence threshold. */
		falsePositiveRate?: number | null;

		/** Output only. The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
		falsePositiveRateAt1?: number | null;

		/** Output only. Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold. */
		positionThreshold?: number | null;

		/** Output only. Precision for the given confidence threshold. */
		precision?: number | null;

		/** Output only. The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
		precisionAt1?: number | null;

		/** Output only. Recall (True Positive Rate) for the given confidence threshold. */
		recall?: number | null;

		/** Output only. The Recall (True Positive Rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
		recallAt1?: number | null;

		/** Output only. The number of labels that were not created by the model, but if they would, they would not match a ground truth label. */
		trueNegativeCount?: string | null;

		/** Output only. The number of model created labels that match a ground truth label. */
		truePositiveCount?: string | null;
	}

	/** Metrics for a single confidence threshold. */
	export interface ClassificationEvaluationMetricsConfidenceMetricsEntryFormProperties {

		/** Output only. Metrics are computed with an assumption that the model never returns predictions with score lower than this value. */
		confidenceThreshold: FormControl<number | null | undefined>,

		/** Output only. The harmonic mean of recall and precision. */
		f1Score: FormControl<number | null | undefined>,

		/** Output only. The harmonic mean of recall_at1 and precision_at1. */
		f1ScoreAt1: FormControl<number | null | undefined>,

		/** Output only. The number of ground truth labels that are not matched by a model created label. */
		falseNegativeCount: FormControl<string | null | undefined>,

		/** Output only. The number of model created labels that do not match a ground truth label. */
		falsePositiveCount: FormControl<string | null | undefined>,

		/** Output only. False Positive Rate for the given confidence threshold. */
		falsePositiveRate: FormControl<number | null | undefined>,

		/** Output only. The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
		falsePositiveRateAt1: FormControl<number | null | undefined>,

		/** Output only. Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold. */
		positionThreshold: FormControl<number | null | undefined>,

		/** Output only. Precision for the given confidence threshold. */
		precision: FormControl<number | null | undefined>,

		/** Output only. The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
		precisionAt1: FormControl<number | null | undefined>,

		/** Output only. Recall (True Positive Rate) for the given confidence threshold. */
		recall: FormControl<number | null | undefined>,

		/** Output only. The Recall (True Positive Rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example. */
		recallAt1: FormControl<number | null | undefined>,

		/** Output only. The number of labels that were not created by the model, but if they would, they would not match a ground truth label. */
		trueNegativeCount: FormControl<string | null | undefined>,

		/** Output only. The number of model created labels that match a ground truth label. */
		truePositiveCount: FormControl<string | null | undefined>,
	}
	export function CreateClassificationEvaluationMetricsConfidenceMetricsEntryFormGroup() {
		return new FormGroup<ClassificationEvaluationMetricsConfidenceMetricsEntryFormProperties>({
			confidenceThreshold: new FormControl<number | null | undefined>(undefined),
			f1Score: new FormControl<number | null | undefined>(undefined),
			f1ScoreAt1: new FormControl<number | null | undefined>(undefined),
			falseNegativeCount: new FormControl<string | null | undefined>(undefined),
			falsePositiveCount: new FormControl<string | null | undefined>(undefined),
			falsePositiveRate: new FormControl<number | null | undefined>(undefined),
			falsePositiveRateAt1: new FormControl<number | null | undefined>(undefined),
			positionThreshold: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			precisionAt1: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
			recallAt1: new FormControl<number | null | undefined>(undefined),
			trueNegativeCount: new FormControl<string | null | undefined>(undefined),
			truePositiveCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Confusion matrix of the model running the classification. */
	export interface ConfusionMatrix {

		/** Output only. IDs of the annotation specs used in the confusion matrix. For Tables CLASSIFICATION prediction_type only list of annotation_spec_display_name-s is populated. */
		annotationSpecId?: Array<string>;

		/** Output only. Display name of the annotation specs used in the confusion matrix, as they were at the moment of the evaluation. For Tables CLASSIFICATION prediction_type-s, distinct values of the target column at the moment of the model evaluation are populated here. */
		displayName?: Array<string>;

		/** Output only. Rows in the confusion matrix. The number of rows is equal to the size of `annotation_spec_id`. `row[i].example_count[j]` is the number of examples that have ground truth of the `annotation_spec_id[i]` and are predicted as `annotation_spec_id[j]` by the model being evaluated. */
		row?: Array<ClassificationEvaluationMetricsConfusionMatrixRow>;
	}

	/** Confusion matrix of the model running the classification. */
	export interface ConfusionMatrixFormProperties {
	}
	export function CreateConfusionMatrixFormGroup() {
		return new FormGroup<ConfusionMatrixFormProperties>({
		});

	}


	/** Output only. A row in the confusion matrix. */
	export interface ClassificationEvaluationMetricsConfusionMatrixRow {

		/** Output only. Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the `annotation_spec_id` field or, if that one is not populated, length of the display_name field. */
		exampleCount?: Array<number>;
	}

	/** Output only. A row in the confusion matrix. */
	export interface ClassificationEvaluationMetricsConfusionMatrixRowFormProperties {
	}
	export function CreateClassificationEvaluationMetricsConfusionMatrixRowFormGroup() {
		return new FormGroup<ClassificationEvaluationMetricsConfusionMatrixRowFormProperties>({
		});

	}


	/** A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables */
	export interface ColumnSpec {

		/** The data statistics of a series of values that share the same DataType. */
		dataStats?: DataStats;

		/** Indicated the type of data that can be stored in a structured data entity (e.g. a table). */
		dataType?: DataType;

		/** Output only. The name of the column to show in the interface. The name can be up to 100 characters long and can consist only of ASCII Latin letters A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and must start with a letter or a digit. */
		displayName?: string | null;

		/** Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens. */
		etag?: string | null;

		/** Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}` */
		name?: string | null;

		/** Deprecated. */
		topCorrelatedColumns?: Array<CorrelatedColumn>;
	}

	/** A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables */
	export interface ColumnSpecFormProperties {

		/** Output only. The name of the column to show in the interface. The name can be up to 100 characters long and can consist only of ASCII Latin letters A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and must start with a letter or a digit. */
		displayName: FormControl<string | null | undefined>,

		/** Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateColumnSpecFormGroup() {
		return new FormGroup<ColumnSpecFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicated the type of data that can be stored in a structured data entity (e.g. a table). */
	export interface DataType {

		/** Indicated the type of data that can be stored in a structured data entity (e.g. a table). */
		listElementType?: DataType;

		/** If true, this DataType can also be `NULL`. In .CSV files `NULL` value is expressed as an empty string. */
		nullable?: boolean | null;

		/** `StructType` defines the DataType-s of a STRUCT type. */
		structType?: StructType;

		/** If type_code == TIMESTAMP then `time_format` provides the format in which that time field is expressed. The time_format must either be one of: * `UNIX_SECONDS` * `UNIX_MILLISECONDS` * `UNIX_MICROSECONDS` * `UNIX_NANOSECONDS` (for respectively number of seconds, milliseconds, microseconds and nanoseconds since start of the Unix epoch); or be written in `strftime` syntax. If time_format is not set, then the default format as described on the type_code is used. */
		timeFormat?: string | null;

		/** Required. The TypeCode for this type. */
		typeCode?: DataTypeTypeCode | null;
	}

	/** Indicated the type of data that can be stored in a structured data entity (e.g. a table). */
	export interface DataTypeFormProperties {

		/** If true, this DataType can also be `NULL`. In .CSV files `NULL` value is expressed as an empty string. */
		nullable: FormControl<boolean | null | undefined>,

		/** If type_code == TIMESTAMP then `time_format` provides the format in which that time field is expressed. The time_format must either be one of: * `UNIX_SECONDS` * `UNIX_MILLISECONDS` * `UNIX_MICROSECONDS` * `UNIX_NANOSECONDS` (for respectively number of seconds, milliseconds, microseconds and nanoseconds since start of the Unix epoch); or be written in `strftime` syntax. If time_format is not set, then the default format as described on the type_code is used. */
		timeFormat: FormControl<string | null | undefined>,

		/** Required. The TypeCode for this type. */
		typeCode: FormControl<DataTypeTypeCode | null | undefined>,
	}
	export function CreateDataTypeFormGroup() {
		return new FormGroup<DataTypeFormProperties>({
			nullable: new FormControl<boolean | null | undefined>(undefined),
			timeFormat: new FormControl<string | null | undefined>(undefined),
			typeCode: new FormControl<DataTypeTypeCode | null | undefined>(undefined),
		});

	}


	/** `StructType` defines the DataType-s of a STRUCT type. */
	export interface StructType {

		/** Unordered map of struct field names to their data types. Fields cannot be added or removed via Update. Their names and data types are still mutable. */
		fields?: {[id: string]: DataType };
	}

	/** `StructType` defines the DataType-s of a STRUCT type. */
	export interface StructTypeFormProperties {

		/** Unordered map of struct field names to their data types. Fields cannot be added or removed via Update. Their names and data types are still mutable. */
		fields: FormControl<{[id: string]: DataType } | null | undefined>,
	}
	export function CreateStructTypeFormGroup() {
		return new FormGroup<StructTypeFormProperties>({
			fields: new FormControl<{[id: string]: DataType } | null | undefined>(undefined),
		});

	}

	export enum DataTypeTypeCode { TYPE_CODE_UNSPECIFIED = 'TYPE_CODE_UNSPECIFIED', FLOAT64 = 'FLOAT64', TIMESTAMP = 'TIMESTAMP', STRING = 'STRING', ARRAY = 'ARRAY', STRUCT = 'STRUCT', CATEGORY = 'CATEGORY' }


	/** Identifies the table's column, and its correlation with the column this ColumnSpec describes. */
	export interface CorrelatedColumn {

		/** The column_spec_id of the correlated column, which belongs to the same table as the in-context column. */
		columnSpecId?: string | null;

		/** A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same. */
		correlationStats?: CorrelationStats;
	}

	/** Identifies the table's column, and its correlation with the column this ColumnSpec describes. */
	export interface CorrelatedColumnFormProperties {

		/** The column_spec_id of the correlated column, which belongs to the same table as the in-context column. */
		columnSpecId: FormControl<string | null | undefined>,
	}
	export function CreateCorrelatedColumnFormGroup() {
		return new FormGroup<CorrelatedColumnFormProperties>({
			columnSpecId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same. */
	export interface CorrelationStats {

		/** The correlation value using the Cramer's V measure. */
		cramersV?: number | null;
	}

	/** A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same. */
	export interface CorrelationStatsFormProperties {

		/** The correlation value using the Cramer's V measure. */
		cramersV: FormControl<number | null | undefined>,
	}
	export function CreateCorrelationStatsFormGroup() {
		return new FormGroup<CorrelationStatsFormProperties>({
			cramersV: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of CreateModel operation. */
	export interface CreateModelOperationMetadata {
	}

	/** Details of CreateModel operation. */
	export interface CreateModelOperationMetadataFormProperties {
	}
	export function CreateCreateModelOperationMetadataFormGroup() {
		return new FormGroup<CreateModelOperationMetadataFormProperties>({
		});

	}


	/** A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated. */
	export interface Dataset {

		/** Output only. Timestamp when this dataset was created. */
		createTime?: string | null;

		/** User-provided description of the dataset. The description can be up to 25000 characters long. */
		description?: string | null;

		/** Required. The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
		displayName?: string | null;

		/** Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens. */
		etag?: string | null;

		/** Output only. The number of examples in the dataset. */
		exampleCount?: number | null;

		/** Dataset metadata that is specific to image classification. */
		imageClassificationDatasetMetadata?: ImageClassificationDatasetMetadata;

		/** Dataset metadata specific to image object detection. */
		imageObjectDetectionDatasetMetadata?: ImageObjectDetectionDatasetMetadata;

		/** Output only. The resource name of the dataset. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}` */
		name?: string | null;

		/** Metadata for a dataset used for AutoML Tables. */
		tablesDatasetMetadata?: TablesDatasetMetadata;

		/** Dataset metadata for classification. */
		textClassificationDatasetMetadata?: TextClassificationDatasetMetadata;

		/** Dataset metadata that is specific to text extraction */
		textExtractionDatasetMetadata?: TextExtractionDatasetMetadata;

		/** Dataset metadata for text sentiment. */
		textSentimentDatasetMetadata?: TextSentimentDatasetMetadata;

		/** Dataset metadata that is specific to translation. */
		translationDatasetMetadata?: TranslationDatasetMetadata;

		/** Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label. */
		videoClassificationDatasetMetadata?: VideoClassificationDatasetMetadata;

		/** Dataset metadata specific to video object tracking. */
		videoObjectTrackingDatasetMetadata?: VideoObjectTrackingDatasetMetadata;
	}

	/** A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated. */
	export interface DatasetFormProperties {

		/** Output only. Timestamp when this dataset was created. */
		createTime: FormControl<string | null | undefined>,

		/** User-provided description of the dataset. The description can be up to 25000 characters long. */
		description: FormControl<string | null | undefined>,

		/** Required. The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. */
		displayName: FormControl<string | null | undefined>,

		/** Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The number of examples in the dataset. */
		exampleCount: FormControl<number | null | undefined>,

		/** Output only. The resource name of the dataset. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			exampleCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataset metadata that is specific to image classification. */
	export interface ImageClassificationDatasetMetadata {

		/** Required. Type of the classification problem. */
		classificationType?: ImageClassificationDatasetMetadataClassificationType | null;
	}

	/** Dataset metadata that is specific to image classification. */
	export interface ImageClassificationDatasetMetadataFormProperties {

		/** Required. Type of the classification problem. */
		classificationType: FormControl<ImageClassificationDatasetMetadataClassificationType | null | undefined>,
	}
	export function CreateImageClassificationDatasetMetadataFormGroup() {
		return new FormGroup<ImageClassificationDatasetMetadataFormProperties>({
			classificationType: new FormControl<ImageClassificationDatasetMetadataClassificationType | null | undefined>(undefined),
		});

	}

	export enum ImageClassificationDatasetMetadataClassificationType { CLASSIFICATION_TYPE_UNSPECIFIED = 'CLASSIFICATION_TYPE_UNSPECIFIED', MULTICLASS = 'MULTICLASS', MULTILABEL = 'MULTILABEL' }


	/** Dataset metadata specific to image object detection. */
	export interface ImageObjectDetectionDatasetMetadata {
	}

	/** Dataset metadata specific to image object detection. */
	export interface ImageObjectDetectionDatasetMetadataFormProperties {
	}
	export function CreateImageObjectDetectionDatasetMetadataFormGroup() {
		return new FormGroup<ImageObjectDetectionDatasetMetadataFormProperties>({
		});

	}


	/** Metadata for a dataset used for AutoML Tables. */
	export interface TablesDatasetMetadata {

		/** column_spec_id of the primary table column which specifies a possible ML use of the row, i.e. the column will be used to split the rows into TRAIN, VALIDATE and TEST sets. Required type: STRING. This column, if set, must either have all of `TRAIN`, `VALIDATE`, `TEST` among its values, or only have `TEST`, `UNASSIGNED` values. In the latter case the rows with `UNASSIGNED` value will be assigned by AutoML. Note that if a given ml use distribution makes it impossible to create a "good" model, that call will error describing the issue. If both this column_spec_id and primary table's time_column_spec_id are not set, then all rows are treated as `UNASSIGNED`. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. */
		mlUseColumnSpecId?: string | null;

		/** Output only. The table_spec_id of the primary table of this dataset. */
		primaryTableSpecId?: string | null;

		/** Output only. The most recent timestamp when target_column_correlations field and all descendant ColumnSpec.data_stats and ColumnSpec.top_correlated_columns fields were last (re-)generated. Any changes that happened to the dataset afterwards are not reflected in these fields values. The regeneration happens in the background on a best effort basis. */
		statsUpdateTime?: string | null;

		/** Output only. Correlations between TablesDatasetMetadata.target_column_spec_id, and other columns of the TablesDatasetMetadataprimary_table. Only set if the target column is set. Mapping from other column spec id to its CorrelationStats with the target column. This field may be stale, see the stats_update_time field for for the timestamp at which these stats were last updated. */
		targetColumnCorrelations?: {[id: string]: CorrelationStats };

		/** column_spec_id of the primary table's column that should be used as the training & prediction target. This column must be non-nullable and have one of following data types (otherwise model creation will error): * CATEGORY * FLOAT64 If the type is CATEGORY , only up to 100 unique values may exist in that column across all rows. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. */
		targetColumnSpecId?: string | null;

		/** column_spec_id of the primary table's column that should be used as the weight column, i.e. the higher the value the more important the row will be during model training. Required type: FLOAT64. Allowed values: 0 to 10000, inclusive on both ends; 0 means the row is ignored for training. If not set all rows are assumed to have equal weight of 1. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. */
		weightColumnSpecId?: string | null;
	}

	/** Metadata for a dataset used for AutoML Tables. */
	export interface TablesDatasetMetadataFormProperties {

		/** column_spec_id of the primary table column which specifies a possible ML use of the row, i.e. the column will be used to split the rows into TRAIN, VALIDATE and TEST sets. Required type: STRING. This column, if set, must either have all of `TRAIN`, `VALIDATE`, `TEST` among its values, or only have `TEST`, `UNASSIGNED` values. In the latter case the rows with `UNASSIGNED` value will be assigned by AutoML. Note that if a given ml use distribution makes it impossible to create a "good" model, that call will error describing the issue. If both this column_spec_id and primary table's time_column_spec_id are not set, then all rows are treated as `UNASSIGNED`. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. */
		mlUseColumnSpecId: FormControl<string | null | undefined>,

		/** Output only. The table_spec_id of the primary table of this dataset. */
		primaryTableSpecId: FormControl<string | null | undefined>,

		/** Output only. The most recent timestamp when target_column_correlations field and all descendant ColumnSpec.data_stats and ColumnSpec.top_correlated_columns fields were last (re-)generated. Any changes that happened to the dataset afterwards are not reflected in these fields values. The regeneration happens in the background on a best effort basis. */
		statsUpdateTime: FormControl<string | null | undefined>,

		/** Output only. Correlations between TablesDatasetMetadata.target_column_spec_id, and other columns of the TablesDatasetMetadataprimary_table. Only set if the target column is set. Mapping from other column spec id to its CorrelationStats with the target column. This field may be stale, see the stats_update_time field for for the timestamp at which these stats were last updated. */
		targetColumnCorrelations: FormControl<{[id: string]: CorrelationStats } | null | undefined>,

		/** column_spec_id of the primary table's column that should be used as the training & prediction target. This column must be non-nullable and have one of following data types (otherwise model creation will error): * CATEGORY * FLOAT64 If the type is CATEGORY , only up to 100 unique values may exist in that column across all rows. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. */
		targetColumnSpecId: FormControl<string | null | undefined>,

		/** column_spec_id of the primary table's column that should be used as the weight column, i.e. the higher the value the more important the row will be during model training. Required type: FLOAT64. Allowed values: 0 to 10000, inclusive on both ends; 0 means the row is ignored for training. If not set all rows are assumed to have equal weight of 1. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. */
		weightColumnSpecId: FormControl<string | null | undefined>,
	}
	export function CreateTablesDatasetMetadataFormGroup() {
		return new FormGroup<TablesDatasetMetadataFormProperties>({
			mlUseColumnSpecId: new FormControl<string | null | undefined>(undefined),
			primaryTableSpecId: new FormControl<string | null | undefined>(undefined),
			statsUpdateTime: new FormControl<string | null | undefined>(undefined),
			targetColumnCorrelations: new FormControl<{[id: string]: CorrelationStats } | null | undefined>(undefined),
			targetColumnSpecId: new FormControl<string | null | undefined>(undefined),
			weightColumnSpecId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataset metadata for classification. */
	export interface TextClassificationDatasetMetadata {

		/** Required. Type of the classification problem. */
		classificationType?: ImageClassificationDatasetMetadataClassificationType | null;
	}

	/** Dataset metadata for classification. */
	export interface TextClassificationDatasetMetadataFormProperties {

		/** Required. Type of the classification problem. */
		classificationType: FormControl<ImageClassificationDatasetMetadataClassificationType | null | undefined>,
	}
	export function CreateTextClassificationDatasetMetadataFormGroup() {
		return new FormGroup<TextClassificationDatasetMetadataFormProperties>({
			classificationType: new FormControl<ImageClassificationDatasetMetadataClassificationType | null | undefined>(undefined),
		});

	}


	/** Dataset metadata that is specific to text extraction */
	export interface TextExtractionDatasetMetadata {
	}

	/** Dataset metadata that is specific to text extraction */
	export interface TextExtractionDatasetMetadataFormProperties {
	}
	export function CreateTextExtractionDatasetMetadataFormGroup() {
		return new FormGroup<TextExtractionDatasetMetadataFormProperties>({
		});

	}


	/** Dataset metadata for text sentiment. */
	export interface TextSentimentDatasetMetadata {

		/** Required. A sentiment is expressed as an integer ordinal, where higher value means a more positive sentiment. The range of sentiments that will be used is between 0 and sentiment_max (inclusive on both ends), and all the values in the range must be represented in the dataset before a model can be created. sentiment_max value must be between 1 and 10 (inclusive). */
		sentimentMax?: number | null;
	}

	/** Dataset metadata for text sentiment. */
	export interface TextSentimentDatasetMetadataFormProperties {

		/** Required. A sentiment is expressed as an integer ordinal, where higher value means a more positive sentiment. The range of sentiments that will be used is between 0 and sentiment_max (inclusive on both ends), and all the values in the range must be represented in the dataset before a model can be created. sentiment_max value must be between 1 and 10 (inclusive). */
		sentimentMax: FormControl<number | null | undefined>,
	}
	export function CreateTextSentimentDatasetMetadataFormGroup() {
		return new FormGroup<TextSentimentDatasetMetadataFormProperties>({
			sentimentMax: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Dataset metadata that is specific to translation. */
	export interface TranslationDatasetMetadata {

		/** Required. The BCP-47 language code of the source language. */
		sourceLanguageCode?: string | null;

		/** Required. The BCP-47 language code of the target language. */
		targetLanguageCode?: string | null;
	}

	/** Dataset metadata that is specific to translation. */
	export interface TranslationDatasetMetadataFormProperties {

		/** Required. The BCP-47 language code of the source language. */
		sourceLanguageCode: FormControl<string | null | undefined>,

		/** Required. The BCP-47 language code of the target language. */
		targetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslationDatasetMetadataFormGroup() {
		return new FormGroup<TranslationDatasetMetadataFormProperties>({
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			targetLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label. */
	export interface VideoClassificationDatasetMetadata {
	}

	/** Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label. */
	export interface VideoClassificationDatasetMetadataFormProperties {
	}
	export function CreateVideoClassificationDatasetMetadataFormGroup() {
		return new FormGroup<VideoClassificationDatasetMetadataFormProperties>({
		});

	}


	/** Dataset metadata specific to video object tracking. */
	export interface VideoObjectTrackingDatasetMetadata {
	}

	/** Dataset metadata specific to video object tracking. */
	export interface VideoObjectTrackingDatasetMetadataFormProperties {
	}
	export function CreateVideoObjectTrackingDatasetMetadataFormGroup() {
		return new FormGroup<VideoObjectTrackingDatasetMetadataFormProperties>({
		});

	}


	/** Details of operations that perform deletes of any entities. */
	export interface DeleteOperationMetadata {
	}

	/** Details of operations that perform deletes of any entities. */
	export interface DeleteOperationMetadataFormProperties {
	}
	export function CreateDeleteOperationMetadataFormGroup() {
		return new FormGroup<DeleteOperationMetadataFormProperties>({
		});

	}


	/** Details of DeployModel operation. */
	export interface DeployModelOperationMetadata {
	}

	/** Details of DeployModel operation. */
	export interface DeployModelOperationMetadataFormProperties {
	}
	export function CreateDeployModelOperationMetadataFormGroup() {
		return new FormGroup<DeployModelOperationMetadataFormProperties>({
		});

	}


	/** Request message for AutoMl.DeployModel. */
	export interface DeployModelRequest {

		/** Model deployment metadata specific to Image Classification. */
		imageClassificationModelDeploymentMetadata?: ImageClassificationModelDeploymentMetadata;

		/** Model deployment metadata specific to Image Object Detection. */
		imageObjectDetectionModelDeploymentMetadata?: ImageObjectDetectionModelDeploymentMetadata;
	}

	/** Request message for AutoMl.DeployModel. */
	export interface DeployModelRequestFormProperties {
	}
	export function CreateDeployModelRequestFormGroup() {
		return new FormGroup<DeployModelRequestFormProperties>({
		});

	}


	/** Model deployment metadata specific to Image Classification. */
	export interface ImageClassificationModelDeploymentMetadata {

		/** Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's node_qps. Must be between 1 and 100, inclusive on both ends. */
		nodeCount?: string | null;
	}

	/** Model deployment metadata specific to Image Classification. */
	export interface ImageClassificationModelDeploymentMetadataFormProperties {

		/** Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's node_qps. Must be between 1 and 100, inclusive on both ends. */
		nodeCount: FormControl<string | null | undefined>,
	}
	export function CreateImageClassificationModelDeploymentMetadataFormGroup() {
		return new FormGroup<ImageClassificationModelDeploymentMetadataFormProperties>({
			nodeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model deployment metadata specific to Image Object Detection. */
	export interface ImageObjectDetectionModelDeploymentMetadata {

		/** Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's qps_per_node. Must be between 1 and 100, inclusive on both ends. */
		nodeCount?: string | null;
	}

	/** Model deployment metadata specific to Image Object Detection. */
	export interface ImageObjectDetectionModelDeploymentMetadataFormProperties {

		/** Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's qps_per_node. Must be between 1 and 100, inclusive on both ends. */
		nodeCount: FormControl<string | null | undefined>,
	}
	export function CreateImageObjectDetectionModelDeploymentMetadataFormGroup() {
		return new FormGroup<ImageObjectDetectionModelDeploymentMetadataFormProperties>({
			nodeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structured text document e.g. a PDF. */
	export interface Document {

		/** Message that describes dimension of a document. */
		documentDimensions?: DocumentDimensions;

		/** A representation of a text snippet. */
		documentText?: TextSnippet;

		/** Input configuration of a Document. */
		inputConfig?: DocumentInputConfig;

		/** Describes the layout of the document. Sorted by page_number. */
		layout?: Array<Layout>;

		/** Number of pages in the document. */
		pageCount?: number | null;
	}

	/** A structured text document e.g. a PDF. */
	export interface DocumentFormProperties {

		/** Number of pages in the document. */
		pageCount: FormControl<number | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			pageCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Message that describes dimension of a document. */
	export interface DocumentDimensions {

		/** Height value of the document, works together with the unit. */
		height?: number | null;

		/** Unit of the dimension. */
		unit?: DocumentDimensionsUnit | null;

		/** Width value of the document, works together with the unit. */
		width?: number | null;
	}

	/** Message that describes dimension of a document. */
	export interface DocumentDimensionsFormProperties {

		/** Height value of the document, works together with the unit. */
		height: FormControl<number | null | undefined>,

		/** Unit of the dimension. */
		unit: FormControl<DocumentDimensionsUnit | null | undefined>,

		/** Width value of the document, works together with the unit. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDocumentDimensionsFormGroup() {
		return new FormGroup<DocumentDimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<DocumentDimensionsUnit | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DocumentDimensionsUnit { DOCUMENT_DIMENSION_UNIT_UNSPECIFIED = 'DOCUMENT_DIMENSION_UNIT_UNSPECIFIED', INCH = 'INCH', CENTIMETER = 'CENTIMETER', POINT = 'POINT' }


	/** Input configuration of a Document. */
	export interface DocumentInputConfig {

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;
	}

	/** Input configuration of a Document. */
	export interface DocumentInputConfigFormProperties {
	}
	export function CreateDocumentInputConfigFormGroup() {
		return new FormGroup<DocumentInputConfigFormProperties>({
		});

	}


	/** Describes the layout information of a text_segment in the document. */
	export interface Layout {

		/** A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed. */
		boundingPoly?: BoundingPoly;

		/** Page number of the text_segment in the original document, starts from 1. */
		pageNumber?: number | null;

		/** A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding. */
		textSegment?: TextSegment;

		/** The type of the text_segment in document. */
		textSegmentType?: LayoutTextSegmentType | null;
	}

	/** Describes the layout information of a text_segment in the document. */
	export interface LayoutFormProperties {

		/** Page number of the text_segment in the original document, starts from 1. */
		pageNumber: FormControl<number | null | undefined>,

		/** The type of the text_segment in document. */
		textSegmentType: FormControl<LayoutTextSegmentType | null | undefined>,
	}
	export function CreateLayoutFormGroup() {
		return new FormGroup<LayoutFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
			textSegmentType: new FormControl<LayoutTextSegmentType | null | undefined>(undefined),
		});

	}

	export enum LayoutTextSegmentType { TEXT_SEGMENT_TYPE_UNSPECIFIED = 'TEXT_SEGMENT_TYPE_UNSPECIFIED', TOKEN = 'TOKEN', PARAGRAPH = 'PARAGRAPH', FORM_FIELD = 'FORM_FIELD', FORM_FIELD_NAME = 'FORM_FIELD_NAME', FORM_FIELD_CONTENTS = 'FORM_FIELD_CONTENTS', TABLE = 'TABLE', TABLE_HEADER = 'TABLE_HEADER', TABLE_ROW = 'TABLE_ROW', TABLE_CELL = 'TABLE_CELL' }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Example data used for training or prediction. */
	export interface ExamplePayload {

		/** A structured text document e.g. a PDF. */
		document?: Document;

		/** A representation of an image. Only images up to 30MB in size are supported. */
		image?: Image;

		/** A representation of a row in a relational table. */
		row?: Row;

		/** A representation of a text snippet. */
		textSnippet?: TextSnippet;
	}

	/** Example data used for training or prediction. */
	export interface ExamplePayloadFormProperties {
	}
	export function CreateExamplePayloadFormGroup() {
		return new FormGroup<ExamplePayloadFormProperties>({
		});

	}


	/** A representation of an image. Only images up to 30MB in size are supported. */
	export interface Image {

		/** Image content represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. */
		imageBytes?: string | null;

		/** Input configuration for ImportData Action. The format of input depends on dataset_metadata the Dataset into which the import is happening has. As input source the gcs_source is expected, unless specified otherwise. Additionally any input .CSV file by itself must be 100MB or smaller, unless specified otherwise. If an "example" file (that is, image, video etc.) with identical content (even if it had different GCS_FILE_PATH) is mentioned multiple times, then its label, bounding boxes etc. are appended. The same file should be always provided with the same ML_USE and GCS_FILE_PATH, if it is not, then these values are nondeterministically selected from the given ones. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,LABEL,LABEL,... GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO For MULTICLASS classification type, at most one LABEL is allowed per image. If an image has not yet been labeled, then it should be mentioned just once with no LABEL. Some sample rows: TRAIN,gs://folder/image1.jpg,daisy TEST,gs://folder/image2.jpg,dandelion,tulip,rose UNASSIGNED,gs://folder/image3.jpg,daisy UNASSIGNED,gs://folder/image4.jpg * For Image Object Detection: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,) GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. Each image is assumed to be exhaustively labeled. The minimum allowed BOUNDING_BOX edge length is 0.01, and no more than 500 BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined per line). If an image has not yet been labeled, then it should be mentioned just once with no LABEL and the ",,,,,,," in place of the BOUNDING_BOX. For images which are known to not contain any bounding boxes, they should be labelled explictly as "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the BOUNDING_BOX. Sample rows: TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,, TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,, UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3 TEST,gs://folder/im3.png,,,,,,,,, TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,, * For Video Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using the following row format: GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,) Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Any segment of a video which has one or more labels on it, is considered a hard negative for all other labels. Any segment with no labels on it is considered to be unknown. If a whole video is unknown, then it shuold be mentioned just once with ",," in place of LABEL, TIME_SEGMENT_START,TIME_SEGMENT_END. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,120,180.000021 gs://folder/video1.avi,bike,150,180.000021 gs://folder/vid2.avi,car,0,60.5 gs://folder/vid3.avi,,, * For Video Object Tracking: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using one of the following row format: GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX or GCS_FILE_PATH,,,,,,,,,, Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. Providing INSTANCE_IDs can help to obtain a better model. When a specific labeled entity leaves the video frame, and shows up afterwards it is not required, albeit preferable, that the same INSTANCE_ID is given to it. TIMESTAMP must be within the length of the video, the BOUNDING_BOX is assumed to be drawn on the closest video's frame to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per frame are allowed. If a whole video is unknown, then it should be mentioned just once with ",,,,,,,,,," in place of LABEL, [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Seven sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9 gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9 gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3 gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,, gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,, gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,, gs://folder/video2.avi,,,,,,,,,,, * For Text Extraction: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which either imports text in-line or as documents. Any given .JSONL file must be 100MB or smaller. The in-line .JSONL file contains, per line, a proto that wraps a TextSnippet proto (in json representation) followed by one or more AnnotationPayload protos (called annotations), which have display_name and text_extraction detail populated. The given text is expected to be annotated exhaustively, for example, if you look for animals and text contains "dolphin" that is not labeled, then "dolphin" is assumed to not be an animal. Any given text snippet content must be 10KB or smaller, and also be UTF-8 NFC encoded (ASCII already is). The document .JSONL file contains, per line, a proto that wraps a Document proto. The Document proto must have either document_text or input_config set. In document_text case, the Document proto may also contain the spatial information of the document, including layout, document dimension and page number. In input_config case, only PDF documents are supported now, and each document may be up to 2MB large. Currently, annotations on documents cannot be specified at import. Three sample CSV rows: TRAIN,gs://folder/file1.jsonl VALIDATE,gs://folder/file2.jsonl TEST,gs://folder/file3.jsonl Sample in-line JSON Lines file for entity extraction (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "document_text": {"content": "dog cat"} "layout": [ { "text_segment": { "start_offset": 0, "end_offset": 3, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ], }, "text_segment_type": TOKEN, }, { "text_segment": { "start_offset": 4, "end_offset": 7, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.4, "y": 0.1}, {"x": 0.4, "y": 0.3}, {"x": 0.8, "y": 0.3}, {"x": 0.8, "y": 0.1}, ], }, "text_segment_type": TOKEN, } ], "document_dimensions": { "width": 8.27, "height": 11.69, "unit": INCH, } "page_count": 1, }, "annotations": [ { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 0, "end_offset": 3}} }, { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 4, "end_offset": 7}} } ], }\n { "text_snippet": { "content": "This dog is good." }, "annotations": [ { "display_name": "animal", "text_extraction": { "text_segment": {"start_offset": 5, "end_offset": 8} } } ] } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Text Classification: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,... TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, i.e. prefixed by "gs://", it will be treated as a GCS_FILE_PATH, else if the content is enclosed within double quotes (""), it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content excluding quotes is treated as to be imported text snippet. In both cases, the text snippet/file size must be within 128kB. Maximum 100 unique labels are allowed per CSV row. Sample rows: TRAIN,"They have bad food and very rude",RudeService,BadFood TRAIN,gs://folder/content.txt,SlowService TEST,"Typically always bad service there.",RudeService VALIDATE,"Stomach ache to go.",BadFood * For Text Sentiment: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, that is, prefixed by "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content itself is treated as to be imported text snippet. In both cases, the text snippet must be up to 500 characters long. Sample rows: TRAIN,"@freewrytin this is way too good for your product",2 TRAIN,"I need this product so bad",3 TEST,"Thank you for this product.",4 VALIDATE,gs://folder/content.txt,2 * For Tables: Either gcs_source or bigquery_source can be used. All inputs is concatenated into a single primary_table For gcs_source: CSV file(s), where the first row of the first file is the header, containing unique column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. Each .CSV file by itself must be 10GB or smaller, and their total size must be 100GB or smaller. First three sample rows of a CSV file: "Id","First Name","Last Name","Dob","Addresses" "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} For bigquery_source: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. An imported table must have between 2 and 1,000 columns, inclusive, and between 1000 and 100,000,000 rows, inclusive. There are at most 5 import data running in parallel. Definitions: ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED" Describes how the given example (file) should be used for model training. "UNASSIGNED" can be used when user has no preference. GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png". LABEL = A display name of an object on an image, video etc., e.g. "dog". Must be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9. For each label an AnnotationSpec is created which display_name becomes the label; AnnotationSpecs are given back in predictions. INSTANCE_ID = A positive integer that identifies a specific instance of a labeled entity on an example. Used e.g. to track two cars on a video while being able to tell apart which one is which. BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,, A rectangle parallel to the frame of the example (image, video). If 4 vertices are given they are connected by edges in the order provided, if 2 are given they are recognized as diagonally opposite vertices of the rectangle. VERTEX = COORDINATE,COORDINATE First coordinate is horizontal (x), the second is vertical (y). COORDINATE = A float in 0 to 1 range, relative to total length of image or video in given dimension. For fractions the leading non-decimal 0 can be omitted (i.e. 0.3 = .3). Point 0,0 is in top left. TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed, and it means the end of the example. TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes (""). SENTIMENT = An integer between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive). Describes the ordinal of the sentiment - higher value means a more positive sentiment. All the values are completely relative, i.e. neither 0 needs to mean a negative or neutral sentiment nor sentiment_max needs to mean a positive one - it is just required that 0 is the least positive sentiment in the data, and sentiment_max is the most positive one. The SENTIMENT shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. All SENTIMENT values between 0 and sentiment_max must be represented in the imported data. On prediction the same 0 to sentiment_max range will be used. The difference between neighboring sentiment values needs not to be uniform, e.g. 1 and 2 may be similar whereas the difference between 2 and 3 may be huge. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and nothing is imported. Regardless of overall success or failure the per-row failures, up to a certain count cap, is listed in Operation.metadata.partial_failures. */
		inputConfig?: InputConfig;

		/** Output only. HTTP URI to the thumbnail image. */
		thumbnailUri?: string | null;
	}

	/** A representation of an image. Only images up to 30MB in size are supported. */
	export interface ImageFormProperties {

		/** Image content represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. */
		imageBytes: FormControl<string | null | undefined>,

		/** Output only. HTTP URI to the thumbnail image. */
		thumbnailUri: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			imageBytes: new FormControl<string | null | undefined>(undefined),
			thumbnailUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input configuration for ImportData Action. The format of input depends on dataset_metadata the Dataset into which the import is happening has. As input source the gcs_source is expected, unless specified otherwise. Additionally any input .CSV file by itself must be 100MB or smaller, unless specified otherwise. If an "example" file (that is, image, video etc.) with identical content (even if it had different GCS_FILE_PATH) is mentioned multiple times, then its label, bounding boxes etc. are appended. The same file should be always provided with the same ML_USE and GCS_FILE_PATH, if it is not, then these values are nondeterministically selected from the given ones. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,LABEL,LABEL,... GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO For MULTICLASS classification type, at most one LABEL is allowed per image. If an image has not yet been labeled, then it should be mentioned just once with no LABEL. Some sample rows: TRAIN,gs://folder/image1.jpg,daisy TEST,gs://folder/image2.jpg,dandelion,tulip,rose UNASSIGNED,gs://folder/image3.jpg,daisy UNASSIGNED,gs://folder/image4.jpg * For Image Object Detection: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,) GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. Each image is assumed to be exhaustively labeled. The minimum allowed BOUNDING_BOX edge length is 0.01, and no more than 500 BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined per line). If an image has not yet been labeled, then it should be mentioned just once with no LABEL and the ",,,,,,," in place of the BOUNDING_BOX. For images which are known to not contain any bounding boxes, they should be labelled explictly as "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the BOUNDING_BOX. Sample rows: TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,, TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,, UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3 TEST,gs://folder/im3.png,,,,,,,,, TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,, * For Video Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using the following row format: GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,) Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Any segment of a video which has one or more labels on it, is considered a hard negative for all other labels. Any segment with no labels on it is considered to be unknown. If a whole video is unknown, then it shuold be mentioned just once with ",," in place of LABEL, TIME_SEGMENT_START,TIME_SEGMENT_END. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,120,180.000021 gs://folder/video1.avi,bike,150,180.000021 gs://folder/vid2.avi,car,0,60.5 gs://folder/vid3.avi,,, * For Video Object Tracking: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using one of the following row format: GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX or GCS_FILE_PATH,,,,,,,,,, Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. Providing INSTANCE_IDs can help to obtain a better model. When a specific labeled entity leaves the video frame, and shows up afterwards it is not required, albeit preferable, that the same INSTANCE_ID is given to it. TIMESTAMP must be within the length of the video, the BOUNDING_BOX is assumed to be drawn on the closest video's frame to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per frame are allowed. If a whole video is unknown, then it should be mentioned just once with ",,,,,,,,,," in place of LABEL, [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Seven sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9 gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9 gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3 gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,, gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,, gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,, gs://folder/video2.avi,,,,,,,,,,, * For Text Extraction: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which either imports text in-line or as documents. Any given .JSONL file must be 100MB or smaller. The in-line .JSONL file contains, per line, a proto that wraps a TextSnippet proto (in json representation) followed by one or more AnnotationPayload protos (called annotations), which have display_name and text_extraction detail populated. The given text is expected to be annotated exhaustively, for example, if you look for animals and text contains "dolphin" that is not labeled, then "dolphin" is assumed to not be an animal. Any given text snippet content must be 10KB or smaller, and also be UTF-8 NFC encoded (ASCII already is). The document .JSONL file contains, per line, a proto that wraps a Document proto. The Document proto must have either document_text or input_config set. In document_text case, the Document proto may also contain the spatial information of the document, including layout, document dimension and page number. In input_config case, only PDF documents are supported now, and each document may be up to 2MB large. Currently, annotations on documents cannot be specified at import. Three sample CSV rows: TRAIN,gs://folder/file1.jsonl VALIDATE,gs://folder/file2.jsonl TEST,gs://folder/file3.jsonl Sample in-line JSON Lines file for entity extraction (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "document_text": {"content": "dog cat"} "layout": [ { "text_segment": { "start_offset": 0, "end_offset": 3, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ], }, "text_segment_type": TOKEN, }, { "text_segment": { "start_offset": 4, "end_offset": 7, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.4, "y": 0.1}, {"x": 0.4, "y": 0.3}, {"x": 0.8, "y": 0.3}, {"x": 0.8, "y": 0.1}, ], }, "text_segment_type": TOKEN, } ], "document_dimensions": { "width": 8.27, "height": 11.69, "unit": INCH, } "page_count": 1, }, "annotations": [ { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 0, "end_offset": 3}} }, { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 4, "end_offset": 7}} } ], }\n { "text_snippet": { "content": "This dog is good." }, "annotations": [ { "display_name": "animal", "text_extraction": { "text_segment": {"start_offset": 5, "end_offset": 8} } } ] } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Text Classification: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,... TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, i.e. prefixed by "gs://", it will be treated as a GCS_FILE_PATH, else if the content is enclosed within double quotes (""), it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content excluding quotes is treated as to be imported text snippet. In both cases, the text snippet/file size must be within 128kB. Maximum 100 unique labels are allowed per CSV row. Sample rows: TRAIN,"They have bad food and very rude",RudeService,BadFood TRAIN,gs://folder/content.txt,SlowService TEST,"Typically always bad service there.",RudeService VALIDATE,"Stomach ache to go.",BadFood * For Text Sentiment: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, that is, prefixed by "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content itself is treated as to be imported text snippet. In both cases, the text snippet must be up to 500 characters long. Sample rows: TRAIN,"@freewrytin this is way too good for your product",2 TRAIN,"I need this product so bad",3 TEST,"Thank you for this product.",4 VALIDATE,gs://folder/content.txt,2 * For Tables: Either gcs_source or bigquery_source can be used. All inputs is concatenated into a single primary_table For gcs_source: CSV file(s), where the first row of the first file is the header, containing unique column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. Each .CSV file by itself must be 10GB or smaller, and their total size must be 100GB or smaller. First three sample rows of a CSV file: "Id","First Name","Last Name","Dob","Addresses" "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} For bigquery_source: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. An imported table must have between 2 and 1,000 columns, inclusive, and between 1000 and 100,000,000 rows, inclusive. There are at most 5 import data running in parallel. Definitions: ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED" Describes how the given example (file) should be used for model training. "UNASSIGNED" can be used when user has no preference. GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png". LABEL = A display name of an object on an image, video etc., e.g. "dog". Must be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9. For each label an AnnotationSpec is created which display_name becomes the label; AnnotationSpecs are given back in predictions. INSTANCE_ID = A positive integer that identifies a specific instance of a labeled entity on an example. Used e.g. to track two cars on a video while being able to tell apart which one is which. BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,, A rectangle parallel to the frame of the example (image, video). If 4 vertices are given they are connected by edges in the order provided, if 2 are given they are recognized as diagonally opposite vertices of the rectangle. VERTEX = COORDINATE,COORDINATE First coordinate is horizontal (x), the second is vertical (y). COORDINATE = A float in 0 to 1 range, relative to total length of image or video in given dimension. For fractions the leading non-decimal 0 can be omitted (i.e. 0.3 = .3). Point 0,0 is in top left. TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed, and it means the end of the example. TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes (""). SENTIMENT = An integer between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive). Describes the ordinal of the sentiment - higher value means a more positive sentiment. All the values are completely relative, i.e. neither 0 needs to mean a negative or neutral sentiment nor sentiment_max needs to mean a positive one - it is just required that 0 is the least positive sentiment in the data, and sentiment_max is the most positive one. The SENTIMENT shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. All SENTIMENT values between 0 and sentiment_max must be represented in the imported data. On prediction the same 0 to sentiment_max range will be used. The difference between neighboring sentiment values needs not to be uniform, e.g. 1 and 2 may be similar whereas the difference between 2 and 3 may be huge. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and nothing is imported. Regardless of overall success or failure the per-row failures, up to a certain count cap, is listed in Operation.metadata.partial_failures.  */
	export interface InputConfig {

		/** The BigQuery location for the input content. */
		bigquerySource?: BigQuerySource;

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;

		/** Additional domain-specific parameters describing the semantic of the imported data, any string must be up to 25000 characters long. * For Tables: `schema_inference_version` - (integer) Required. The version of the algorithm that should be used for the initial inference of the schema (columns' DataTypes) of the table the data is being imported into. Allowed values: "1". */
		params?: {[id: string]: string };
	}

	/** Input configuration for ImportData Action. The format of input depends on dataset_metadata the Dataset into which the import is happening has. As input source the gcs_source is expected, unless specified otherwise. Additionally any input .CSV file by itself must be 100MB or smaller, unless specified otherwise. If an "example" file (that is, image, video etc.) with identical content (even if it had different GCS_FILE_PATH) is mentioned multiple times, then its label, bounding boxes etc. are appended. The same file should be always provided with the same ML_USE and GCS_FILE_PATH, if it is not, then these values are nondeterministically selected from the given ones. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,LABEL,LABEL,... GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO For MULTICLASS classification type, at most one LABEL is allowed per image. If an image has not yet been labeled, then it should be mentioned just once with no LABEL. Some sample rows: TRAIN,gs://folder/image1.jpg,daisy TEST,gs://folder/image2.jpg,dandelion,tulip,rose UNASSIGNED,gs://folder/image3.jpg,daisy UNASSIGNED,gs://folder/image4.jpg * For Image Object Detection: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,) GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. Each image is assumed to be exhaustively labeled. The minimum allowed BOUNDING_BOX edge length is 0.01, and no more than 500 BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined per line). If an image has not yet been labeled, then it should be mentioned just once with no LABEL and the ",,,,,,," in place of the BOUNDING_BOX. For images which are known to not contain any bounding boxes, they should be labelled explictly as "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the BOUNDING_BOX. Sample rows: TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,, TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,, UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3 TEST,gs://folder/im3.png,,,,,,,,, TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,, * For Video Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using the following row format: GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,) Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Any segment of a video which has one or more labels on it, is considered a hard negative for all other labels. Any segment with no labels on it is considered to be unknown. If a whole video is unknown, then it shuold be mentioned just once with ",," in place of LABEL, TIME_SEGMENT_START,TIME_SEGMENT_END. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,120,180.000021 gs://folder/video1.avi,bike,150,180.000021 gs://folder/vid2.avi,car,0,60.5 gs://folder/vid3.avi,,, * For Video Object Tracking: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using one of the following row format: GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX or GCS_FILE_PATH,,,,,,,,,, Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. Providing INSTANCE_IDs can help to obtain a better model. When a specific labeled entity leaves the video frame, and shows up afterwards it is not required, albeit preferable, that the same INSTANCE_ID is given to it. TIMESTAMP must be within the length of the video, the BOUNDING_BOX is assumed to be drawn on the closest video's frame to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per frame are allowed. If a whole video is unknown, then it should be mentioned just once with ",,,,,,,,,," in place of LABEL, [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Seven sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9 gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9 gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3 gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,, gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,, gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,, gs://folder/video2.avi,,,,,,,,,,, * For Text Extraction: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which either imports text in-line or as documents. Any given .JSONL file must be 100MB or smaller. The in-line .JSONL file contains, per line, a proto that wraps a TextSnippet proto (in json representation) followed by one or more AnnotationPayload protos (called annotations), which have display_name and text_extraction detail populated. The given text is expected to be annotated exhaustively, for example, if you look for animals and text contains "dolphin" that is not labeled, then "dolphin" is assumed to not be an animal. Any given text snippet content must be 10KB or smaller, and also be UTF-8 NFC encoded (ASCII already is). The document .JSONL file contains, per line, a proto that wraps a Document proto. The Document proto must have either document_text or input_config set. In document_text case, the Document proto may also contain the spatial information of the document, including layout, document dimension and page number. In input_config case, only PDF documents are supported now, and each document may be up to 2MB large. Currently, annotations on documents cannot be specified at import. Three sample CSV rows: TRAIN,gs://folder/file1.jsonl VALIDATE,gs://folder/file2.jsonl TEST,gs://folder/file3.jsonl Sample in-line JSON Lines file for entity extraction (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "document_text": {"content": "dog cat"} "layout": [ { "text_segment": { "start_offset": 0, "end_offset": 3, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ], }, "text_segment_type": TOKEN, }, { "text_segment": { "start_offset": 4, "end_offset": 7, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.4, "y": 0.1}, {"x": 0.4, "y": 0.3}, {"x": 0.8, "y": 0.3}, {"x": 0.8, "y": 0.1}, ], }, "text_segment_type": TOKEN, } ], "document_dimensions": { "width": 8.27, "height": 11.69, "unit": INCH, } "page_count": 1, }, "annotations": [ { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 0, "end_offset": 3}} }, { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 4, "end_offset": 7}} } ], }\n { "text_snippet": { "content": "This dog is good." }, "annotations": [ { "display_name": "animal", "text_extraction": { "text_segment": {"start_offset": 5, "end_offset": 8} } } ] } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Text Classification: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,... TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, i.e. prefixed by "gs://", it will be treated as a GCS_FILE_PATH, else if the content is enclosed within double quotes (""), it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content excluding quotes is treated as to be imported text snippet. In both cases, the text snippet/file size must be within 128kB. Maximum 100 unique labels are allowed per CSV row. Sample rows: TRAIN,"They have bad food and very rude",RudeService,BadFood TRAIN,gs://folder/content.txt,SlowService TEST,"Typically always bad service there.",RudeService VALIDATE,"Stomach ache to go.",BadFood * For Text Sentiment: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, that is, prefixed by "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content itself is treated as to be imported text snippet. In both cases, the text snippet must be up to 500 characters long. Sample rows: TRAIN,"@freewrytin this is way too good for your product",2 TRAIN,"I need this product so bad",3 TEST,"Thank you for this product.",4 VALIDATE,gs://folder/content.txt,2 * For Tables: Either gcs_source or bigquery_source can be used. All inputs is concatenated into a single primary_table For gcs_source: CSV file(s), where the first row of the first file is the header, containing unique column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. Each .CSV file by itself must be 10GB or smaller, and their total size must be 100GB or smaller. First three sample rows of a CSV file: "Id","First Name","Last Name","Dob","Addresses" "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} For bigquery_source: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. An imported table must have between 2 and 1,000 columns, inclusive, and between 1000 and 100,000,000 rows, inclusive. There are at most 5 import data running in parallel. Definitions: ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED" Describes how the given example (file) should be used for model training. "UNASSIGNED" can be used when user has no preference. GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png". LABEL = A display name of an object on an image, video etc., e.g. "dog". Must be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9. For each label an AnnotationSpec is created which display_name becomes the label; AnnotationSpecs are given back in predictions. INSTANCE_ID = A positive integer that identifies a specific instance of a labeled entity on an example. Used e.g. to track two cars on a video while being able to tell apart which one is which. BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,, A rectangle parallel to the frame of the example (image, video). If 4 vertices are given they are connected by edges in the order provided, if 2 are given they are recognized as diagonally opposite vertices of the rectangle. VERTEX = COORDINATE,COORDINATE First coordinate is horizontal (x), the second is vertical (y). COORDINATE = A float in 0 to 1 range, relative to total length of image or video in given dimension. For fractions the leading non-decimal 0 can be omitted (i.e. 0.3 = .3). Point 0,0 is in top left. TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed, and it means the end of the example. TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes (""). SENTIMENT = An integer between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive). Describes the ordinal of the sentiment - higher value means a more positive sentiment. All the values are completely relative, i.e. neither 0 needs to mean a negative or neutral sentiment nor sentiment_max needs to mean a positive one - it is just required that 0 is the least positive sentiment in the data, and sentiment_max is the most positive one. The SENTIMENT shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. All SENTIMENT values between 0 and sentiment_max must be represented in the imported data. On prediction the same 0 to sentiment_max range will be used. The difference between neighboring sentiment values needs not to be uniform, e.g. 1 and 2 may be similar whereas the difference between 2 and 3 may be huge. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and nothing is imported. Regardless of overall success or failure the per-row failures, up to a certain count cap, is listed in Operation.metadata.partial_failures.  */
	export interface InputConfigFormProperties {

		/** Additional domain-specific parameters describing the semantic of the imported data, any string must be up to 25000 characters long. * For Tables: `schema_inference_version` - (integer) Required. The version of the algorithm that should be used for the initial inference of the schema (columns' DataTypes) of the table the data is being imported into. Allowed values: "1". */
		params: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateInputConfigFormGroup() {
		return new FormGroup<InputConfigFormProperties>({
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A representation of a row in a relational table. */
	export interface Row {

		/** The resource IDs of the column specs describing the columns of the row. If set must contain, but possibly in a different order, all input feature column_spec_ids of the Model this row is being passed to. Note: The below `values` field must match order of this field, if this field is set. */
		columnSpecIds?: Array<string>;

		/** Required. The values of the row cells, given in the same order as the column_spec_ids, or, if not set, then in the same order as input feature column_specs of the Model this row is being passed to. */
		values?: Array<string>;
	}

	/** A representation of a row in a relational table. */
	export interface RowFormProperties {
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
		});

	}


	/** Details of ExportData operation. */
	export interface ExportDataOperationMetadata {

		/** Further describes this export data's output. Supplements OutputConfig. */
		outputInfo?: ExportDataOutputInfo;
	}

	/** Details of ExportData operation. */
	export interface ExportDataOperationMetadataFormProperties {
	}
	export function CreateExportDataOperationMetadataFormGroup() {
		return new FormGroup<ExportDataOperationMetadataFormProperties>({
		});

	}


	/** Further describes this export data's output. Supplements OutputConfig. */
	export interface ExportDataOutputInfo {

		/** The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the exported data is written. */
		bigqueryOutputDataset?: string | null;

		/** The full path of the Google Cloud Storage directory created, into which the exported data is written. */
		gcsOutputDirectory?: string | null;
	}

	/** Further describes this export data's output. Supplements OutputConfig. */
	export interface ExportDataOutputInfoFormProperties {

		/** The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the exported data is written. */
		bigqueryOutputDataset: FormControl<string | null | undefined>,

		/** The full path of the Google Cloud Storage directory created, into which the exported data is written. */
		gcsOutputDirectory: FormControl<string | null | undefined>,
	}
	export function CreateExportDataOutputInfoFormGroup() {
		return new FormGroup<ExportDataOutputInfoFormProperties>({
			bigqueryOutputDataset: new FormControl<string | null | undefined>(undefined),
			gcsOutputDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for AutoMl.ExportData. */
	export interface ExportDataRequest {

		/** * For Translation: CSV file `translation.csv`, with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .TSV file which describes examples that have given ML_USE, using the following row format per line: TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target language) * For Tables: Output depends on whether the dataset was imported from GCS or BigQuery. GCS case: gcs_destination must be set. Exported are CSV file(s) `tables_1.csv`, `tables_2.csv`,...,`tables_N.csv` with each having as header line the table's column names, and all other lines contain values for the header columns. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_data__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that dataset a new table called `primary_table` will be created, and filled with precisely the same data as this obtained on import. */
		outputConfig?: OutputConfig;
	}

	/** Request message for AutoMl.ExportData. */
	export interface ExportDataRequestFormProperties {
	}
	export function CreateExportDataRequestFormGroup() {
		return new FormGroup<ExportDataRequestFormProperties>({
		});

	}


	/** * For Translation: CSV file `translation.csv`, with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .TSV file which describes examples that have given ML_USE, using the following row format per line: TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target language) * For Tables: Output depends on whether the dataset was imported from GCS or BigQuery. GCS case: gcs_destination must be set. Exported are CSV file(s) `tables_1.csv`, `tables_2.csv`,...,`tables_N.csv` with each having as header line the table's column names, and all other lines contain values for the header columns. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_data__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that dataset a new table called `primary_table` will be created, and filled with precisely the same data as this obtained on import. */
	export interface OutputConfig {

		/** The BigQuery location for the output content. */
		bigqueryDestination?: BigQueryDestination;

		/** The Google Cloud Storage location where the output is to be written to. */
		gcsDestination?: GcsDestination;
	}

	/** * For Translation: CSV file `translation.csv`, with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .TSV file which describes examples that have given ML_USE, using the following row format per line: TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target language) * For Tables: Output depends on whether the dataset was imported from GCS or BigQuery. GCS case: gcs_destination must be set. Exported are CSV file(s) `tables_1.csv`, `tables_2.csv`,...,`tables_N.csv` with each having as header line the table's column names, and all other lines contain values for the header columns. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_data__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that dataset a new table called `primary_table` will be created, and filled with precisely the same data as this obtained on import. */
	export interface OutputConfigFormProperties {
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
		});

	}


	/** Details of EvaluatedExamples operation. */
	export interface ExportEvaluatedExamplesOperationMetadata {

		/** Further describes the output of the evaluated examples export. Supplements ExportEvaluatedExamplesOutputConfig. */
		outputInfo?: ExportEvaluatedExamplesOutputInfo;
	}

	/** Details of EvaluatedExamples operation. */
	export interface ExportEvaluatedExamplesOperationMetadataFormProperties {
	}
	export function CreateExportEvaluatedExamplesOperationMetadataFormGroup() {
		return new FormGroup<ExportEvaluatedExamplesOperationMetadataFormProperties>({
		});

	}


	/** Further describes the output of the evaluated examples export. Supplements ExportEvaluatedExamplesOutputConfig. */
	export interface ExportEvaluatedExamplesOutputInfo {

		/** The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the output of export evaluated examples is written. */
		bigqueryOutputDataset?: string | null;
	}

	/** Further describes the output of the evaluated examples export. Supplements ExportEvaluatedExamplesOutputConfig. */
	export interface ExportEvaluatedExamplesOutputInfoFormProperties {

		/** The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the output of export evaluated examples is written. */
		bigqueryOutputDataset: FormControl<string | null | undefined>,
	}
	export function CreateExportEvaluatedExamplesOutputInfoFormGroup() {
		return new FormGroup<ExportEvaluatedExamplesOutputInfoFormProperties>({
			bigqueryOutputDataset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output configuration for ExportEvaluatedExamples Action. Note that this call is available only for 30 days since the moment the model was evaluated. The output depends on the domain, as follows (note that only examples from the TEST set are exported): * For Tables: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_evaluated_examples__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset an `evaluated_examples` table will be created. It will have all the same columns as the primary_table of the dataset from which the model was created, as they were at the moment of model's evaluation (this includes the target column with its ground truth), followed by a column called "predicted_". That last column will contain the model's prediction result for each respective row, given as ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation. */
	export interface ExportEvaluatedExamplesOutputConfig {

		/** The BigQuery location for the output content. */
		bigqueryDestination?: BigQueryDestination;
	}

	/** Output configuration for ExportEvaluatedExamples Action. Note that this call is available only for 30 days since the moment the model was evaluated. The output depends on the domain, as follows (note that only examples from the TEST set are exported): * For Tables: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_evaluated_examples__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset an `evaluated_examples` table will be created. It will have all the same columns as the primary_table of the dataset from which the model was created, as they were at the moment of model's evaluation (this includes the target column with its ground truth), followed by a column called "predicted_". That last column will contain the model's prediction result for each respective row, given as ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation. */
	export interface ExportEvaluatedExamplesOutputConfigFormProperties {
	}
	export function CreateExportEvaluatedExamplesOutputConfigFormGroup() {
		return new FormGroup<ExportEvaluatedExamplesOutputConfigFormProperties>({
		});

	}


	/** Request message for AutoMl.ExportEvaluatedExamples. */
	export interface ExportEvaluatedExamplesRequest {

		/** Output configuration for ExportEvaluatedExamples Action. Note that this call is available only for 30 days since the moment the model was evaluated. The output depends on the domain, as follows (note that only examples from the TEST set are exported): * For Tables: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_evaluated_examples__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset an `evaluated_examples` table will be created. It will have all the same columns as the primary_table of the dataset from which the model was created, as they were at the moment of model's evaluation (this includes the target column with its ground truth), followed by a column called "predicted_". That last column will contain the model's prediction result for each respective row, given as ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation. */
		outputConfig?: ExportEvaluatedExamplesOutputConfig;
	}

	/** Request message for AutoMl.ExportEvaluatedExamples. */
	export interface ExportEvaluatedExamplesRequestFormProperties {
	}
	export function CreateExportEvaluatedExamplesRequestFormGroup() {
		return new FormGroup<ExportEvaluatedExamplesRequestFormProperties>({
		});

	}


	/** Details of ExportModel operation. */
	export interface ExportModelOperationMetadata {

		/** Further describes the output of model export. Supplements ModelExportOutputConfig. */
		outputInfo?: ExportModelOutputInfo;
	}

	/** Details of ExportModel operation. */
	export interface ExportModelOperationMetadataFormProperties {
	}
	export function CreateExportModelOperationMetadataFormGroup() {
		return new FormGroup<ExportModelOperationMetadataFormProperties>({
		});

	}


	/** Further describes the output of model export. Supplements ModelExportOutputConfig. */
	export interface ExportModelOutputInfo {

		/** The full path of the Google Cloud Storage directory created, into which the model will be exported. */
		gcsOutputDirectory?: string | null;
	}

	/** Further describes the output of model export. Supplements ModelExportOutputConfig. */
	export interface ExportModelOutputInfoFormProperties {

		/** The full path of the Google Cloud Storage directory created, into which the model will be exported. */
		gcsOutputDirectory: FormControl<string | null | undefined>,
	}
	export function CreateExportModelOutputInfoFormGroup() {
		return new FormGroup<ExportModelOutputInfoFormProperties>({
			gcsOutputDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned. */
	export interface ExportModelRequest {

		/** Output configuration for ModelExport Action. */
		outputConfig?: ModelExportOutputConfig;
	}

	/** Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned. */
	export interface ExportModelRequestFormProperties {
	}
	export function CreateExportModelRequestFormGroup() {
		return new FormGroup<ExportModelRequestFormProperties>({
		});

	}


	/** Output configuration for ModelExport Action. */
	export interface ModelExportOutputConfig {

		/** The GCR location where the image must be pushed to. */
		gcrDestination?: GcrDestination;

		/** The Google Cloud Storage location where the output is to be written to. */
		gcsDestination?: GcsDestination;

		/** The format in which the model must be exported. The available, and default, formats depend on the problem and model type (if given problem and type combination doesn't have a format listed, it means its models are not exportable): * For Image Classification mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: "tflite" (default), "edgetpu_tflite", "tf_saved_model", "tf_js", "docker". * For Image Classification mobile-core-ml-low-latency-1, mobile-core-ml-versatile-1, mobile-core-ml-high-accuracy-1: "core_ml" (default). * For Image Object Detection mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: "tflite", "tf_saved_model", "tf_js". * For Video Classification cloud, "tf_saved_model". * For Video Object Tracking cloud, "tf_saved_model". * For Video Object Tracking mobile-versatile-1: "tflite", "edgetpu_tflite", "tf_saved_model", "docker". * For Video Object Tracking mobile-coral-versatile-1: "tflite", "edgetpu_tflite", "docker". * For Video Object Tracking mobile-coral-low-latency-1: "tflite", "edgetpu_tflite", "docker". * For Video Object Tracking mobile-jetson-versatile-1: "tf_saved_model", "docker". * For Tables: "docker". Formats description: * tflite - Used for Android mobile devices. * edgetpu_tflite - Used for [Edge TPU](https://cloud.google.com/edge-tpu/) devices. * tf_saved_model - A tensorflow model in SavedModel format. * tf_js - A [TensorFlow.js](https://www.tensorflow.org/js) model that can be used in the browser and in Node.js using JavaScript. * docker - Used for Docker containers. Use the params field to customize the container. The container is verified to work correctly on ubuntu 16.04 operating system. See more at [containers quickstart](https: //cloud.google.com/vision/automl/docs/containers-gcs-quickstart) * core_ml - Used for iOS mobile devices. */
		modelFormat?: string | null;

		/** Additional model-type and format specific parameters describing the requirements for the to be exported model files, any string must be up to 25000 characters long. * For `docker` format: `cpu_architecture` - (string) "x86_64" (default). `gpu_architecture` - (string) "none" (default), "nvidia". */
		params?: {[id: string]: string };
	}

	/** Output configuration for ModelExport Action. */
	export interface ModelExportOutputConfigFormProperties {

		/** The format in which the model must be exported. The available, and default, formats depend on the problem and model type (if given problem and type combination doesn't have a format listed, it means its models are not exportable): * For Image Classification mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: "tflite" (default), "edgetpu_tflite", "tf_saved_model", "tf_js", "docker". * For Image Classification mobile-core-ml-low-latency-1, mobile-core-ml-versatile-1, mobile-core-ml-high-accuracy-1: "core_ml" (default). * For Image Object Detection mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: "tflite", "tf_saved_model", "tf_js". * For Video Classification cloud, "tf_saved_model". * For Video Object Tracking cloud, "tf_saved_model". * For Video Object Tracking mobile-versatile-1: "tflite", "edgetpu_tflite", "tf_saved_model", "docker". * For Video Object Tracking mobile-coral-versatile-1: "tflite", "edgetpu_tflite", "docker". * For Video Object Tracking mobile-coral-low-latency-1: "tflite", "edgetpu_tflite", "docker". * For Video Object Tracking mobile-jetson-versatile-1: "tf_saved_model", "docker". * For Tables: "docker". Formats description: * tflite - Used for Android mobile devices. * edgetpu_tflite - Used for [Edge TPU](https://cloud.google.com/edge-tpu/) devices. * tf_saved_model - A tensorflow model in SavedModel format. * tf_js - A [TensorFlow.js](https://www.tensorflow.org/js) model that can be used in the browser and in Node.js using JavaScript. * docker - Used for Docker containers. Use the params field to customize the container. The container is verified to work correctly on ubuntu 16.04 operating system. See more at [containers quickstart](https: //cloud.google.com/vision/automl/docs/containers-gcs-quickstart) * core_ml - Used for iOS mobile devices. */
		modelFormat: FormControl<string | null | undefined>,

		/** Additional model-type and format specific parameters describing the requirements for the to be exported model files, any string must be up to 25000 characters long. * For `docker` format: `cpu_architecture` - (string) "x86_64" (default). `gpu_architecture` - (string) "none" (default), "nvidia". */
		params: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateModelExportOutputConfigFormGroup() {
		return new FormGroup<ModelExportOutputConfigFormProperties>({
			modelFormat: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The GCR location where the image must be pushed to. */
	export interface GcrDestination {

		/** Required. Google Contained Registry URI of the new image, up to 2000 characters long. See https: //cloud.google.com/container-registry/do // cs/pushing-and-pulling#pushing_an_image_to_a_registry Accepted forms: * [HOSTNAME]/[PROJECT-ID]/[IMAGE] * [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] The requesting user must have permission to push images the project. */
		outputUri?: string | null;
	}

	/** The GCR location where the image must be pushed to. */
	export interface GcrDestinationFormProperties {

		/** Required. Google Contained Registry URI of the new image, up to 2000 characters long. See https: //cloud.google.com/container-registry/do // cs/pushing-and-pulling#pushing_an_image_to_a_registry Accepted forms: * [HOSTNAME]/[PROJECT-ID]/[IMAGE] * [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] The requesting user must have permission to push images the project. */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateGcrDestinationFormGroup() {
		return new FormGroup<GcrDestinationFormProperties>({
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model metadata for image classification. */
	export interface ImageClassificationModelMetadata {

		/** Optional. The ID of the `base` model. If it is specified, the new model will be created based on the `base` model. Otherwise, the new model will be created from scratch. The `base` model must be in the same `project` and `location` as the new model to create, and have the same `model_type`. */
		baseModelId?: string | null;

		/** Optional. Type of the model. The available values are: * `cloud` - Model to be used via prediction calls to AutoML API. This is the default value. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `mobile-core-ml-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-core-ml-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. * `mobile-core-ml-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. */
		modelType?: string | null;

		/** Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the node_qps field. */
		nodeCount?: string | null;

		/** Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed. */
		nodeQps?: number | null;

		/** Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`. */
		stopReason?: string | null;

		/** Required. The train budget of creating this model, expressed in hours. The actual `train_cost` will be equal or less than this value. */
		trainBudget?: string | null;

		/** Output only. The actual train cost of creating this model, expressed in hours. If this model is created from a `base` model, the train cost used to create the `base` model are not included. */
		trainCost?: string | null;
	}

	/** Model metadata for image classification. */
	export interface ImageClassificationModelMetadataFormProperties {

		/** Optional. The ID of the `base` model. If it is specified, the new model will be created based on the `base` model. Otherwise, the new model will be created from scratch. The `base` model must be in the same `project` and `location` as the new model to create, and have the same `model_type`. */
		baseModelId: FormControl<string | null | undefined>,

		/** Optional. Type of the model. The available values are: * `cloud` - Model to be used via prediction calls to AutoML API. This is the default value. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `mobile-core-ml-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-core-ml-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. * `mobile-core-ml-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. */
		modelType: FormControl<string | null | undefined>,

		/** Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the node_qps field. */
		nodeCount: FormControl<string | null | undefined>,

		/** Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed. */
		nodeQps: FormControl<number | null | undefined>,

		/** Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`. */
		stopReason: FormControl<string | null | undefined>,

		/** Required. The train budget of creating this model, expressed in hours. The actual `train_cost` will be equal or less than this value. */
		trainBudget: FormControl<string | null | undefined>,

		/** Output only. The actual train cost of creating this model, expressed in hours. If this model is created from a `base` model, the train cost used to create the `base` model are not included. */
		trainCost: FormControl<string | null | undefined>,
	}
	export function CreateImageClassificationModelMetadataFormGroup() {
		return new FormGroup<ImageClassificationModelMetadataFormProperties>({
			baseModelId: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<string | null | undefined>(undefined),
			nodeQps: new FormControl<number | null | undefined>(undefined),
			stopReason: new FormControl<string | null | undefined>(undefined),
			trainBudget: new FormControl<string | null | undefined>(undefined),
			trainCost: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes. */
	export interface ImageObjectDetectionEvaluationMetrics {

		/** Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. */
		boundingBoxMeanAveragePrecision?: number | null;

		/** Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. */
		boundingBoxMetricsEntries?: Array<BoundingBoxMetricsEntry>;

		/** Output only. The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had. */
		evaluatedBoundingBoxCount?: number | null;
	}

	/** Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes. */
	export interface ImageObjectDetectionEvaluationMetricsFormProperties {

		/** Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. */
		boundingBoxMeanAveragePrecision: FormControl<number | null | undefined>,

		/** Output only. The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had. */
		evaluatedBoundingBoxCount: FormControl<number | null | undefined>,
	}
	export function CreateImageObjectDetectionEvaluationMetricsFormGroup() {
		return new FormGroup<ImageObjectDetectionEvaluationMetricsFormProperties>({
			boundingBoxMeanAveragePrecision: new FormControl<number | null | undefined>(undefined),
			evaluatedBoundingBoxCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Model metadata specific to image object detection. */
	export interface ImageObjectDetectionModelMetadata {

		/** Optional. Type of the model. The available values are: * `cloud-high-accuracy-1` - (default) A model to be used via prediction calls to AutoML API. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `cloud-low-latency-1` - A model to be used via prediction calls to AutoML API. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. */
		modelType?: string | null;

		/** Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the qps_per_node field. */
		nodeCount?: string | null;

		/** Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed. */
		nodeQps?: number | null;

		/** Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`. */
		stopReason?: string | null;

		/** The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The actual `train_cost` will be equal or less than this value. If further model training ceases to provide any improvements, it will stop without using full budget and the stop_reason will be `MODEL_CONVERGED`. Note, node_hour = actual_hour * number_of_nodes_invovled. For model type `cloud-high-accuracy-1`(default) and `cloud-low-latency-1`, the train budget must be between 20,000 and 900,000 milli node hours, inclusive. The default value is 216, 000 which represents one day in wall time. For model type `mobile-low-latency-1`, `mobile-versatile-1`, `mobile-high-accuracy-1`, `mobile-core-ml-low-latency-1`, `mobile-core-ml-versatile-1`, `mobile-core-ml-high-accuracy-1`, the train budget must be between 1,000 and 100,000 milli node hours, inclusive. The default value is 24, 000 which represents one day in wall time. */
		trainBudgetMilliNodeHours?: string | null;

		/** Output only. The actual train cost of creating this model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. */
		trainCostMilliNodeHours?: string | null;
	}

	/** Model metadata specific to image object detection. */
	export interface ImageObjectDetectionModelMetadataFormProperties {

		/** Optional. Type of the model. The available values are: * `cloud-high-accuracy-1` - (default) A model to be used via prediction calls to AutoML API. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `cloud-low-latency-1` - A model to be used via prediction calls to AutoML API. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. */
		modelType: FormControl<string | null | undefined>,

		/** Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the qps_per_node field. */
		nodeCount: FormControl<string | null | undefined>,

		/** Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed. */
		nodeQps: FormControl<number | null | undefined>,

		/** Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`. */
		stopReason: FormControl<string | null | undefined>,

		/** The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The actual `train_cost` will be equal or less than this value. If further model training ceases to provide any improvements, it will stop without using full budget and the stop_reason will be `MODEL_CONVERGED`. Note, node_hour = actual_hour * number_of_nodes_invovled. For model type `cloud-high-accuracy-1`(default) and `cloud-low-latency-1`, the train budget must be between 20,000 and 900,000 milli node hours, inclusive. The default value is 216, 000 which represents one day in wall time. For model type `mobile-low-latency-1`, `mobile-versatile-1`, `mobile-high-accuracy-1`, `mobile-core-ml-low-latency-1`, `mobile-core-ml-versatile-1`, `mobile-core-ml-high-accuracy-1`, the train budget must be between 1,000 and 100,000 milli node hours, inclusive. The default value is 24, 000 which represents one day in wall time. */
		trainBudgetMilliNodeHours: FormControl<string | null | undefined>,

		/** Output only. The actual train cost of creating this model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. */
		trainCostMilliNodeHours: FormControl<string | null | undefined>,
	}
	export function CreateImageObjectDetectionModelMetadataFormGroup() {
		return new FormGroup<ImageObjectDetectionModelMetadataFormProperties>({
			modelType: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<string | null | undefined>(undefined),
			nodeQps: new FormControl<number | null | undefined>(undefined),
			stopReason: new FormControl<string | null | undefined>(undefined),
			trainBudgetMilliNodeHours: new FormControl<string | null | undefined>(undefined),
			trainCostMilliNodeHours: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of ImportData operation. */
	export interface ImportDataOperationMetadata {
	}

	/** Details of ImportData operation. */
	export interface ImportDataOperationMetadataFormProperties {
	}
	export function CreateImportDataOperationMetadataFormGroup() {
		return new FormGroup<ImportDataOperationMetadataFormProperties>({
		});

	}


	/** Request message for AutoMl.ImportData. */
	export interface ImportDataRequest {

		/** Input configuration for ImportData Action. The format of input depends on dataset_metadata the Dataset into which the import is happening has. As input source the gcs_source is expected, unless specified otherwise. Additionally any input .CSV file by itself must be 100MB or smaller, unless specified otherwise. If an "example" file (that is, image, video etc.) with identical content (even if it had different GCS_FILE_PATH) is mentioned multiple times, then its label, bounding boxes etc. are appended. The same file should be always provided with the same ML_USE and GCS_FILE_PATH, if it is not, then these values are nondeterministically selected from the given ones. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,LABEL,LABEL,... GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO For MULTICLASS classification type, at most one LABEL is allowed per image. If an image has not yet been labeled, then it should be mentioned just once with no LABEL. Some sample rows: TRAIN,gs://folder/image1.jpg,daisy TEST,gs://folder/image2.jpg,dandelion,tulip,rose UNASSIGNED,gs://folder/image3.jpg,daisy UNASSIGNED,gs://folder/image4.jpg * For Image Object Detection: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,) GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. Each image is assumed to be exhaustively labeled. The minimum allowed BOUNDING_BOX edge length is 0.01, and no more than 500 BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined per line). If an image has not yet been labeled, then it should be mentioned just once with no LABEL and the ",,,,,,," in place of the BOUNDING_BOX. For images which are known to not contain any bounding boxes, they should be labelled explictly as "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the BOUNDING_BOX. Sample rows: TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,, TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,, UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3 TEST,gs://folder/im3.png,,,,,,,,, TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,, * For Video Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using the following row format: GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,) Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Any segment of a video which has one or more labels on it, is considered a hard negative for all other labels. Any segment with no labels on it is considered to be unknown. If a whole video is unknown, then it shuold be mentioned just once with ",," in place of LABEL, TIME_SEGMENT_START,TIME_SEGMENT_END. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,120,180.000021 gs://folder/video1.avi,bike,150,180.000021 gs://folder/vid2.avi,car,0,60.5 gs://folder/vid3.avi,,, * For Video Object Tracking: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using one of the following row format: GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX or GCS_FILE_PATH,,,,,,,,,, Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. Providing INSTANCE_IDs can help to obtain a better model. When a specific labeled entity leaves the video frame, and shows up afterwards it is not required, albeit preferable, that the same INSTANCE_ID is given to it. TIMESTAMP must be within the length of the video, the BOUNDING_BOX is assumed to be drawn on the closest video's frame to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per frame are allowed. If a whole video is unknown, then it should be mentioned just once with ",,,,,,,,,," in place of LABEL, [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Seven sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9 gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9 gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3 gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,, gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,, gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,, gs://folder/video2.avi,,,,,,,,,,, * For Text Extraction: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which either imports text in-line or as documents. Any given .JSONL file must be 100MB or smaller. The in-line .JSONL file contains, per line, a proto that wraps a TextSnippet proto (in json representation) followed by one or more AnnotationPayload protos (called annotations), which have display_name and text_extraction detail populated. The given text is expected to be annotated exhaustively, for example, if you look for animals and text contains "dolphin" that is not labeled, then "dolphin" is assumed to not be an animal. Any given text snippet content must be 10KB or smaller, and also be UTF-8 NFC encoded (ASCII already is). The document .JSONL file contains, per line, a proto that wraps a Document proto. The Document proto must have either document_text or input_config set. In document_text case, the Document proto may also contain the spatial information of the document, including layout, document dimension and page number. In input_config case, only PDF documents are supported now, and each document may be up to 2MB large. Currently, annotations on documents cannot be specified at import. Three sample CSV rows: TRAIN,gs://folder/file1.jsonl VALIDATE,gs://folder/file2.jsonl TEST,gs://folder/file3.jsonl Sample in-line JSON Lines file for entity extraction (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "document_text": {"content": "dog cat"} "layout": [ { "text_segment": { "start_offset": 0, "end_offset": 3, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ], }, "text_segment_type": TOKEN, }, { "text_segment": { "start_offset": 4, "end_offset": 7, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.4, "y": 0.1}, {"x": 0.4, "y": 0.3}, {"x": 0.8, "y": 0.3}, {"x": 0.8, "y": 0.1}, ], }, "text_segment_type": TOKEN, } ], "document_dimensions": { "width": 8.27, "height": 11.69, "unit": INCH, } "page_count": 1, }, "annotations": [ { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 0, "end_offset": 3}} }, { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 4, "end_offset": 7}} } ], }\n { "text_snippet": { "content": "This dog is good." }, "annotations": [ { "display_name": "animal", "text_extraction": { "text_segment": {"start_offset": 5, "end_offset": 8} } } ] } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Text Classification: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,... TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, i.e. prefixed by "gs://", it will be treated as a GCS_FILE_PATH, else if the content is enclosed within double quotes (""), it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content excluding quotes is treated as to be imported text snippet. In both cases, the text snippet/file size must be within 128kB. Maximum 100 unique labels are allowed per CSV row. Sample rows: TRAIN,"They have bad food and very rude",RudeService,BadFood TRAIN,gs://folder/content.txt,SlowService TEST,"Typically always bad service there.",RudeService VALIDATE,"Stomach ache to go.",BadFood * For Text Sentiment: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, that is, prefixed by "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content itself is treated as to be imported text snippet. In both cases, the text snippet must be up to 500 characters long. Sample rows: TRAIN,"@freewrytin this is way too good for your product",2 TRAIN,"I need this product so bad",3 TEST,"Thank you for this product.",4 VALIDATE,gs://folder/content.txt,2 * For Tables: Either gcs_source or bigquery_source can be used. All inputs is concatenated into a single primary_table For gcs_source: CSV file(s), where the first row of the first file is the header, containing unique column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. Each .CSV file by itself must be 10GB or smaller, and their total size must be 100GB or smaller. First three sample rows of a CSV file: "Id","First Name","Last Name","Dob","Addresses" "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} For bigquery_source: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. An imported table must have between 2 and 1,000 columns, inclusive, and between 1000 and 100,000,000 rows, inclusive. There are at most 5 import data running in parallel. Definitions: ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED" Describes how the given example (file) should be used for model training. "UNASSIGNED" can be used when user has no preference. GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png". LABEL = A display name of an object on an image, video etc., e.g. "dog". Must be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9. For each label an AnnotationSpec is created which display_name becomes the label; AnnotationSpecs are given back in predictions. INSTANCE_ID = A positive integer that identifies a specific instance of a labeled entity on an example. Used e.g. to track two cars on a video while being able to tell apart which one is which. BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,, A rectangle parallel to the frame of the example (image, video). If 4 vertices are given they are connected by edges in the order provided, if 2 are given they are recognized as diagonally opposite vertices of the rectangle. VERTEX = COORDINATE,COORDINATE First coordinate is horizontal (x), the second is vertical (y). COORDINATE = A float in 0 to 1 range, relative to total length of image or video in given dimension. For fractions the leading non-decimal 0 can be omitted (i.e. 0.3 = .3). Point 0,0 is in top left. TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed, and it means the end of the example. TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes (""). SENTIMENT = An integer between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive). Describes the ordinal of the sentiment - higher value means a more positive sentiment. All the values are completely relative, i.e. neither 0 needs to mean a negative or neutral sentiment nor sentiment_max needs to mean a positive one - it is just required that 0 is the least positive sentiment in the data, and sentiment_max is the most positive one. The SENTIMENT shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. All SENTIMENT values between 0 and sentiment_max must be represented in the imported data. On prediction the same 0 to sentiment_max range will be used. The difference between neighboring sentiment values needs not to be uniform, e.g. 1 and 2 may be similar whereas the difference between 2 and 3 may be huge. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and nothing is imported. Regardless of overall success or failure the per-row failures, up to a certain count cap, is listed in Operation.metadata.partial_failures. */
		inputConfig?: InputConfig;
	}

	/** Request message for AutoMl.ImportData. */
	export interface ImportDataRequestFormProperties {
	}
	export function CreateImportDataRequestFormGroup() {
		return new FormGroup<ImportDataRequestFormProperties>({
		});

	}


	/** Response message for AutoMl.ListColumnSpecs. */
	export interface ListColumnSpecsResponse {

		/** The column specs read. */
		columnSpecs?: Array<ColumnSpec>;

		/** A token to retrieve next page of results. Pass to ListColumnSpecsRequest.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for AutoMl.ListColumnSpecs. */
	export interface ListColumnSpecsResponseFormProperties {

		/** A token to retrieve next page of results. Pass to ListColumnSpecsRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListColumnSpecsResponseFormGroup() {
		return new FormGroup<ListColumnSpecsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AutoMl.ListDatasets. */
	export interface ListDatasetsResponse {

		/** The datasets read. */
		datasets?: Array<Dataset>;

		/** A token to retrieve next page of results. Pass to ListDatasetsRequest.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for AutoMl.ListDatasets. */
	export interface ListDatasetsResponseFormProperties {

		/** A token to retrieve next page of results. Pass to ListDatasetsRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AutoMl.ListModelEvaluations. */
	export interface ListModelEvaluationsResponse {

		/** List of model evaluations in the requested page. */
		modelEvaluation?: Array<ModelEvaluation>;

		/** A token to retrieve next page of results. Pass to the ListModelEvaluationsRequest.page_token field of a new AutoMl.ListModelEvaluations request to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for AutoMl.ListModelEvaluations. */
	export interface ListModelEvaluationsResponseFormProperties {

		/** A token to retrieve next page of results. Pass to the ListModelEvaluationsRequest.page_token field of a new AutoMl.ListModelEvaluations request to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelEvaluationsResponseFormGroup() {
		return new FormGroup<ListModelEvaluationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evaluation results of a model. */
	export interface ModelEvaluation {

		/** Output only. The ID of the annotation spec that the model evaluation applies to. The The ID is empty for the overall model evaluation. For Tables annotation specs in the dataset do not exist and this ID is always not set, but for CLASSIFICATION prediction_type-s the display_name field is used. */
		annotationSpecId?: string | null;

		/** Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type. */
		classificationEvaluationMetrics?: ClassificationEvaluationMetrics;

		/** Output only. Timestamp when this model evaluation was created. */
		createTime?: string | null;

		/** Output only. The value of display_name at the moment when the model was trained. Because this field returns a value at model training time, for different models trained from the same dataset, the values may differ, since display names could had been changed between the two model's trainings. For Tables CLASSIFICATION prediction_type-s distinct values of the target column at the moment of the model evaluation are populated here. The display_name is empty for the overall model evaluation. */
		displayName?: string | null;

		/** Output only. The number of examples used for model evaluation, i.e. for which ground truth from time of model creation is compared against the predicted annotations created by the model. For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is the total number of all examples used for evaluation. Otherwise, this is the count of examples that according to the ground truth were annotated by the annotation_spec_id. */
		evaluatedExampleCount?: number | null;

		/** Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes. */
		imageObjectDetectionEvaluationMetrics?: ImageObjectDetectionEvaluationMetrics;

		/** Output only. Resource name of the model evaluation. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}` */
		name?: string | null;

		/** Metrics for regression problems. */
		regressionEvaluationMetrics?: RegressionEvaluationMetrics;

		/** Model evaluation metrics for text extraction problems. */
		textExtractionEvaluationMetrics?: TextExtractionEvaluationMetrics;

		/** Model evaluation metrics for text sentiment problems. */
		textSentimentEvaluationMetrics?: TextSentimentEvaluationMetrics;

		/** Evaluation metrics for the dataset. */
		translationEvaluationMetrics?: TranslationEvaluationMetrics;

		/** Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID). */
		videoObjectTrackingEvaluationMetrics?: VideoObjectTrackingEvaluationMetrics;
	}

	/** Evaluation results of a model. */
	export interface ModelEvaluationFormProperties {

		/** Output only. The ID of the annotation spec that the model evaluation applies to. The The ID is empty for the overall model evaluation. For Tables annotation specs in the dataset do not exist and this ID is always not set, but for CLASSIFICATION prediction_type-s the display_name field is used. */
		annotationSpecId: FormControl<string | null | undefined>,

		/** Output only. Timestamp when this model evaluation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The value of display_name at the moment when the model was trained. Because this field returns a value at model training time, for different models trained from the same dataset, the values may differ, since display names could had been changed between the two model's trainings. For Tables CLASSIFICATION prediction_type-s distinct values of the target column at the moment of the model evaluation are populated here. The display_name is empty for the overall model evaluation. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The number of examples used for model evaluation, i.e. for which ground truth from time of model creation is compared against the predicted annotations created by the model. For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is the total number of all examples used for evaluation. Otherwise, this is the count of examples that according to the ground truth were annotated by the annotation_spec_id. */
		evaluatedExampleCount: FormControl<number | null | undefined>,

		/** Output only. Resource name of the model evaluation. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateModelEvaluationFormGroup() {
		return new FormGroup<ModelEvaluationFormProperties>({
			annotationSpecId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			evaluatedExampleCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metrics for regression problems. */
	export interface RegressionEvaluationMetrics {

		/** Output only. Mean Absolute Error (MAE). */
		meanAbsoluteError?: number | null;

		/** Output only. Mean absolute percentage error. Only set if all ground truth values are are positive. */
		meanAbsolutePercentageError?: number | null;

		/** Output only. R squared. */
		rSquared?: number | null;

		/** Output only. Root Mean Squared Error (RMSE). */
		rootMeanSquaredError?: number | null;

		/** Output only. Root mean squared log error. */
		rootMeanSquaredLogError?: number | null;
	}

	/** Metrics for regression problems. */
	export interface RegressionEvaluationMetricsFormProperties {

		/** Output only. Mean Absolute Error (MAE). */
		meanAbsoluteError: FormControl<number | null | undefined>,

		/** Output only. Mean absolute percentage error. Only set if all ground truth values are are positive. */
		meanAbsolutePercentageError: FormControl<number | null | undefined>,

		/** Output only. R squared. */
		rSquared: FormControl<number | null | undefined>,

		/** Output only. Root Mean Squared Error (RMSE). */
		rootMeanSquaredError: FormControl<number | null | undefined>,

		/** Output only. Root mean squared log error. */
		rootMeanSquaredLogError: FormControl<number | null | undefined>,
	}
	export function CreateRegressionEvaluationMetricsFormGroup() {
		return new FormGroup<RegressionEvaluationMetricsFormProperties>({
			meanAbsoluteError: new FormControl<number | null | undefined>(undefined),
			meanAbsolutePercentageError: new FormControl<number | null | undefined>(undefined),
			rSquared: new FormControl<number | null | undefined>(undefined),
			rootMeanSquaredError: new FormControl<number | null | undefined>(undefined),
			rootMeanSquaredLogError: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Model evaluation metrics for text extraction problems. */
	export interface TextExtractionEvaluationMetrics {

		/** Output only. The Area under precision recall curve metric. */
		auPrc?: number | null;

		/** Output only. Metrics that have confidence thresholds. Precision-recall curve can be derived from it. */
		confidenceMetricsEntries?: Array<TextExtractionEvaluationMetricsConfidenceMetricsEntry>;
	}

	/** Model evaluation metrics for text extraction problems. */
	export interface TextExtractionEvaluationMetricsFormProperties {

		/** Output only. The Area under precision recall curve metric. */
		auPrc: FormControl<number | null | undefined>,
	}
	export function CreateTextExtractionEvaluationMetricsFormGroup() {
		return new FormGroup<TextExtractionEvaluationMetricsFormProperties>({
			auPrc: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metrics for a single confidence threshold. */
	export interface TextExtractionEvaluationMetricsConfidenceMetricsEntry {

		/** Output only. The confidence threshold value used to compute the metrics. Only annotations with score of at least this threshold are considered to be ones the model would return. */
		confidenceThreshold?: number | null;

		/** Output only. The harmonic mean of recall and precision. */
		f1Score?: number | null;

		/** Output only. Precision under the given confidence threshold. */
		precision?: number | null;

		/** Output only. Recall under the given confidence threshold. */
		recall?: number | null;
	}

	/** Metrics for a single confidence threshold. */
	export interface TextExtractionEvaluationMetricsConfidenceMetricsEntryFormProperties {

		/** Output only. The confidence threshold value used to compute the metrics. Only annotations with score of at least this threshold are considered to be ones the model would return. */
		confidenceThreshold: FormControl<number | null | undefined>,

		/** Output only. The harmonic mean of recall and precision. */
		f1Score: FormControl<number | null | undefined>,

		/** Output only. Precision under the given confidence threshold. */
		precision: FormControl<number | null | undefined>,

		/** Output only. Recall under the given confidence threshold. */
		recall: FormControl<number | null | undefined>,
	}
	export function CreateTextExtractionEvaluationMetricsConfidenceMetricsEntryFormGroup() {
		return new FormGroup<TextExtractionEvaluationMetricsConfidenceMetricsEntryFormProperties>({
			confidenceThreshold: new FormControl<number | null | undefined>(undefined),
			f1Score: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Model evaluation metrics for text sentiment problems. */
	export interface TextSentimentEvaluationMetrics {

		/** Output only. The annotation spec ids used for this evaluation. Deprecated . */
		annotationSpecId?: Array<string>;

		/** Confusion matrix of the model running the classification. */
		confusionMatrix?: ConfusionMatrix;

		/** Output only. The harmonic mean of recall and precision. */
		f1Score?: number | null;

		/** Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
		linearKappa?: number | null;

		/** Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
		meanAbsoluteError?: number | null;

		/** Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
		meanSquaredError?: number | null;

		/** Output only. Precision. */
		precision?: number | null;

		/** Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
		quadraticKappa?: number | null;

		/** Output only. Recall. */
		recall?: number | null;
	}

	/** Model evaluation metrics for text sentiment problems. */
	export interface TextSentimentEvaluationMetricsFormProperties {

		/** Output only. The harmonic mean of recall and precision. */
		f1Score: FormControl<number | null | undefined>,

		/** Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
		linearKappa: FormControl<number | null | undefined>,

		/** Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
		meanAbsoluteError: FormControl<number | null | undefined>,

		/** Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
		meanSquaredError: FormControl<number | null | undefined>,

		/** Output only. Precision. */
		precision: FormControl<number | null | undefined>,

		/** Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec. */
		quadraticKappa: FormControl<number | null | undefined>,

		/** Output only. Recall. */
		recall: FormControl<number | null | undefined>,
	}
	export function CreateTextSentimentEvaluationMetricsFormGroup() {
		return new FormGroup<TextSentimentEvaluationMetricsFormProperties>({
			f1Score: new FormControl<number | null | undefined>(undefined),
			linearKappa: new FormControl<number | null | undefined>(undefined),
			meanAbsoluteError: new FormControl<number | null | undefined>(undefined),
			meanSquaredError: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			quadraticKappa: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Evaluation metrics for the dataset. */
	export interface TranslationEvaluationMetrics {

		/** Output only. BLEU score for base model. */
		baseBleuScore?: number | null;

		/** Output only. BLEU score. */
		bleuScore?: number | null;
	}

	/** Evaluation metrics for the dataset. */
	export interface TranslationEvaluationMetricsFormProperties {

		/** Output only. BLEU score for base model. */
		baseBleuScore: FormControl<number | null | undefined>,

		/** Output only. BLEU score. */
		bleuScore: FormControl<number | null | undefined>,
	}
	export function CreateTranslationEvaluationMetricsFormGroup() {
		return new FormGroup<TranslationEvaluationMetricsFormProperties>({
			baseBleuScore: new FormControl<number | null | undefined>(undefined),
			bleuScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID). */
	export interface VideoObjectTrackingEvaluationMetrics {

		/** Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. */
		boundingBoxMeanAveragePrecision?: number | null;

		/** Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair. */
		boundingBoxMetricsEntries?: Array<BoundingBoxMetricsEntry>;

		/** Output only. The total number of bounding boxes (i.e. summed over all frames) the ground truth used to create this evaluation had. */
		evaluatedBoundingBoxCount?: number | null;

		/** Output only. The number of video frames used to create this evaluation. */
		evaluatedFrameCount?: number | null;
	}

	/** Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID). */
	export interface VideoObjectTrackingEvaluationMetricsFormProperties {

		/** Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries. */
		boundingBoxMeanAveragePrecision: FormControl<number | null | undefined>,

		/** Output only. The total number of bounding boxes (i.e. summed over all frames) the ground truth used to create this evaluation had. */
		evaluatedBoundingBoxCount: FormControl<number | null | undefined>,

		/** Output only. The number of video frames used to create this evaluation. */
		evaluatedFrameCount: FormControl<number | null | undefined>,
	}
	export function CreateVideoObjectTrackingEvaluationMetricsFormGroup() {
		return new FormGroup<VideoObjectTrackingEvaluationMetricsFormProperties>({
			boundingBoxMeanAveragePrecision: new FormControl<number | null | undefined>(undefined),
			evaluatedBoundingBoxCount: new FormControl<number | null | undefined>(undefined),
			evaluatedFrameCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for AutoMl.ListModels. */
	export interface ListModelsResponse {

		/** List of models in the requested page. */
		model?: Array<Model>;

		/** A token to retrieve next page of results. Pass to ListModelsRequest.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for AutoMl.ListModels. */
	export interface ListModelsResponseFormProperties {

		/** A token to retrieve next page of results. Pass to ListModelsRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelsResponseFormGroup() {
		return new FormGroup<ListModelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** API proto representing a trained machine learning model. */
	export interface Model {

		/** Output only. Timestamp when the model training finished and can be used for prediction. */
		createTime?: string | null;

		/** Required. The resource ID of the dataset used to create the model. The dataset must come from the same ancestor project and location. */
		datasetId?: string | null;

		/** Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed. */
		deploymentState?: ModelDeploymentState | null;

		/** Required. The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. It must start with a letter. */
		displayName?: string | null;

		/** Model metadata for image classification. */
		imageClassificationModelMetadata?: ImageClassificationModelMetadata;

		/** Model metadata specific to image object detection. */
		imageObjectDetectionModelMetadata?: ImageObjectDetectionModelMetadata;

		/** Output only. Resource name of the model. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}` */
		name?: string | null;

		/** Model metadata specific to AutoML Tables. */
		tablesModelMetadata?: TablesModelMetadata;

		/** Model metadata that is specific to text classification. */
		textClassificationModelMetadata?: TextClassificationModelMetadata;

		/** Model metadata that is specific to text extraction. */
		textExtractionModelMetadata?: TextExtractionModelMetadata;

		/** Model metadata that is specific to text sentiment. */
		textSentimentModelMetadata?: TextSentimentModelMetadata;

		/** Output only. The number of examples in the training set used for the model creation. */
		trainExampleCount?: number | null;

		/** Model metadata that is specific to translation. */
		translationModelMetadata?: TranslationModelMetadata;

		/** Output only. Timestamp when this model was last updated. */
		updateTime?: string | null;

		/** Output only. The number of examples in the validation set used for the model creation. */
		validateExampleCount?: number | null;

		/** Model metadata specific to video classification. */
		videoClassificationModelMetadata?: VideoClassificationModelMetadata;

		/** Model metadata specific to video object tracking. */
		videoObjectTrackingModelMetadata?: VideoObjectTrackingModelMetadata;
	}

	/** API proto representing a trained machine learning model. */
	export interface ModelFormProperties {

		/** Output only. Timestamp when the model training finished and can be used for prediction. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The resource ID of the dataset used to create the model. The dataset must come from the same ancestor project and location. */
		datasetId: FormControl<string | null | undefined>,

		/** Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed. */
		deploymentState: FormControl<ModelDeploymentState | null | undefined>,

		/** Required. The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. It must start with a letter. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of the model. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The number of examples in the training set used for the model creation. */
		trainExampleCount: FormControl<number | null | undefined>,

		/** Output only. Timestamp when this model was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The number of examples in the validation set used for the model creation. */
		validateExampleCount: FormControl<number | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			deploymentState: new FormControl<ModelDeploymentState | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			trainExampleCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			validateExampleCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ModelDeploymentState { DEPLOYMENT_STATE_UNSPECIFIED = 'DEPLOYMENT_STATE_UNSPECIFIED', DEPLOYED = 'DEPLOYED', UNDEPLOYED = 'UNDEPLOYED' }


	/** Model metadata specific to AutoML Tables. */
	export interface TablesModelMetadata {

		/** Use the entire training budget. This disables the early stopping feature. By default, the early stopping feature is enabled, which means that AutoML Tables might stop training before the entire training budget has been used. */
		disableEarlyStopping?: boolean | null;

		/** Column specs of the dataset's primary table's columns, on which the model is trained and which are used as the input for predictions. The target_column as well as, according to dataset's state upon model creation, weight_column, and ml_use_column must never be included here. Only 3 fields are used: * name - May be set on CreateModel, if set only the columns specified are used, otherwise all primary table's columns (except the ones listed above) are used for the training and prediction input. * display_name - Output only. * data_type - Output only. */
		inputFeatureColumnSpecs?: Array<ColumnSpec>;

		/** Objective function the model is optimizing towards. The training process creates a model that maximizes/minimizes the value of the objective function over the validation set. The supported optimization objectives depend on the prediction type. If the field is not set, a default objective function is used. CLASSIFICATION_BINARY: "MAXIMIZE_AU_ROC" (default) - Maximize the area under the receiver operating characteristic (ROC) curve. "MINIMIZE_LOG_LOSS" - Minimize log loss. "MAXIMIZE_AU_PRC" - Maximize the area under the precision-recall curve. "MAXIMIZE_PRECISION_AT_RECALL" - Maximize precision for a specified recall value. "MAXIMIZE_RECALL_AT_PRECISION" - Maximize recall for a specified precision value. CLASSIFICATION_MULTI_CLASS : "MINIMIZE_LOG_LOSS" (default) - Minimize log loss. REGRESSION: "MINIMIZE_RMSE" (default) - Minimize root-mean-squared error (RMSE). "MINIMIZE_MAE" - Minimize mean-absolute error (MAE). "MINIMIZE_RMSLE" - Minimize root-mean-squared log error (RMSLE). */
		optimizationObjective?: string | null;

		/** Required when optimization_objective is "MAXIMIZE_RECALL_AT_PRECISION". Must be between 0 and 1, inclusive. */
		optimizationObjectivePrecisionValue?: number | null;

		/** Required when optimization_objective is "MAXIMIZE_PRECISION_AT_RECALL". Must be between 0 and 1, inclusive. */
		optimizationObjectiveRecallValue?: number | null;

		/** Output only. Auxiliary information for each of the input_feature_column_specs with respect to this particular model. */
		tablesModelColumnInfo?: Array<TablesModelColumnInfo>;

		/** A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables */
		targetColumnSpec?: ColumnSpec;

		/** Required. The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The training cost of the model will not exceed this budget. The final cost will be attempted to be close to the budget, though may end up being (even) noticeably smaller - at the backend's discretion. This especially may happen when further model training ceases to provide any improvements. If the budget is set to a value known to be insufficient to train a model for the given dataset, the training won't be attempted and will error. The train budget must be between 1,000 and 72,000 milli node hours, inclusive. */
		trainBudgetMilliNodeHours?: string | null;

		/** Output only. The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. */
		trainCostMilliNodeHours?: string | null;
	}

	/** Model metadata specific to AutoML Tables. */
	export interface TablesModelMetadataFormProperties {

		/** Use the entire training budget. This disables the early stopping feature. By default, the early stopping feature is enabled, which means that AutoML Tables might stop training before the entire training budget has been used. */
		disableEarlyStopping: FormControl<boolean | null | undefined>,

		/** Objective function the model is optimizing towards. The training process creates a model that maximizes/minimizes the value of the objective function over the validation set. The supported optimization objectives depend on the prediction type. If the field is not set, a default objective function is used. CLASSIFICATION_BINARY: "MAXIMIZE_AU_ROC" (default) - Maximize the area under the receiver operating characteristic (ROC) curve. "MINIMIZE_LOG_LOSS" - Minimize log loss. "MAXIMIZE_AU_PRC" - Maximize the area under the precision-recall curve. "MAXIMIZE_PRECISION_AT_RECALL" - Maximize precision for a specified recall value. "MAXIMIZE_RECALL_AT_PRECISION" - Maximize recall for a specified precision value. CLASSIFICATION_MULTI_CLASS : "MINIMIZE_LOG_LOSS" (default) - Minimize log loss. REGRESSION: "MINIMIZE_RMSE" (default) - Minimize root-mean-squared error (RMSE). "MINIMIZE_MAE" - Minimize mean-absolute error (MAE). "MINIMIZE_RMSLE" - Minimize root-mean-squared log error (RMSLE). */
		optimizationObjective: FormControl<string | null | undefined>,

		/** Required when optimization_objective is "MAXIMIZE_RECALL_AT_PRECISION". Must be between 0 and 1, inclusive. */
		optimizationObjectivePrecisionValue: FormControl<number | null | undefined>,

		/** Required when optimization_objective is "MAXIMIZE_PRECISION_AT_RECALL". Must be between 0 and 1, inclusive. */
		optimizationObjectiveRecallValue: FormControl<number | null | undefined>,

		/** Required. The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The training cost of the model will not exceed this budget. The final cost will be attempted to be close to the budget, though may end up being (even) noticeably smaller - at the backend's discretion. This especially may happen when further model training ceases to provide any improvements. If the budget is set to a value known to be insufficient to train a model for the given dataset, the training won't be attempted and will error. The train budget must be between 1,000 and 72,000 milli node hours, inclusive. */
		trainBudgetMilliNodeHours: FormControl<string | null | undefined>,

		/** Output only. The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. */
		trainCostMilliNodeHours: FormControl<string | null | undefined>,
	}
	export function CreateTablesModelMetadataFormGroup() {
		return new FormGroup<TablesModelMetadataFormProperties>({
			disableEarlyStopping: new FormControl<boolean | null | undefined>(undefined),
			optimizationObjective: new FormControl<string | null | undefined>(undefined),
			optimizationObjectivePrecisionValue: new FormControl<number | null | undefined>(undefined),
			optimizationObjectiveRecallValue: new FormControl<number | null | undefined>(undefined),
			trainBudgetMilliNodeHours: new FormControl<string | null | undefined>(undefined),
			trainCostMilliNodeHours: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model metadata that is specific to text classification. */
	export interface TextClassificationModelMetadata {

		/** Output only. Classification type of the dataset used to train this model. */
		classificationType?: ImageClassificationDatasetMetadataClassificationType | null;
	}

	/** Model metadata that is specific to text classification. */
	export interface TextClassificationModelMetadataFormProperties {

		/** Output only. Classification type of the dataset used to train this model. */
		classificationType: FormControl<ImageClassificationDatasetMetadataClassificationType | null | undefined>,
	}
	export function CreateTextClassificationModelMetadataFormGroup() {
		return new FormGroup<TextClassificationModelMetadataFormProperties>({
			classificationType: new FormControl<ImageClassificationDatasetMetadataClassificationType | null | undefined>(undefined),
		});

	}


	/** Model metadata that is specific to text extraction. */
	export interface TextExtractionModelMetadata {

		/** Indicates the scope of model use case. * `default`: Use to train a general text extraction model. Default value. * `health_care`: Use to train a text extraction model that is tuned for healthcare applications. */
		modelHint?: string | null;
	}

	/** Model metadata that is specific to text extraction. */
	export interface TextExtractionModelMetadataFormProperties {

		/** Indicates the scope of model use case. * `default`: Use to train a general text extraction model. Default value. * `health_care`: Use to train a text extraction model that is tuned for healthcare applications. */
		modelHint: FormControl<string | null | undefined>,
	}
	export function CreateTextExtractionModelMetadataFormGroup() {
		return new FormGroup<TextExtractionModelMetadataFormProperties>({
			modelHint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model metadata that is specific to text sentiment. */
	export interface TextSentimentModelMetadata {
	}

	/** Model metadata that is specific to text sentiment. */
	export interface TextSentimentModelMetadataFormProperties {
	}
	export function CreateTextSentimentModelMetadataFormGroup() {
		return new FormGroup<TextSentimentModelMetadataFormProperties>({
		});

	}


	/** Model metadata that is specific to translation. */
	export interface TranslationModelMetadata {

		/** The resource name of the model to use as a baseline to train the custom model. If unset, we use the default base model provided by Google Translate. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}` */
		baseModel?: string | null;

		/** Output only. Inferred from the dataset. The source languge (The BCP-47 language code) that is used for training. */
		sourceLanguageCode?: string | null;

		/** Output only. The target languge (The BCP-47 language code) that is used for training. */
		targetLanguageCode?: string | null;
	}

	/** Model metadata that is specific to translation. */
	export interface TranslationModelMetadataFormProperties {

		/** The resource name of the model to use as a baseline to train the custom model. If unset, we use the default base model provided by Google Translate. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}` */
		baseModel: FormControl<string | null | undefined>,

		/** Output only. Inferred from the dataset. The source languge (The BCP-47 language code) that is used for training. */
		sourceLanguageCode: FormControl<string | null | undefined>,

		/** Output only. The target languge (The BCP-47 language code) that is used for training. */
		targetLanguageCode: FormControl<string | null | undefined>,
	}
	export function CreateTranslationModelMetadataFormGroup() {
		return new FormGroup<TranslationModelMetadataFormProperties>({
			baseModel: new FormControl<string | null | undefined>(undefined),
			sourceLanguageCode: new FormControl<string | null | undefined>(undefined),
			targetLanguageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model metadata specific to video classification. */
	export interface VideoClassificationModelMetadata {
	}

	/** Model metadata specific to video classification. */
	export interface VideoClassificationModelMetadataFormProperties {
	}
	export function CreateVideoClassificationModelMetadataFormGroup() {
		return new FormGroup<VideoClassificationModelMetadataFormProperties>({
		});

	}


	/** Model metadata specific to video object tracking. */
	export interface VideoObjectTrackingModelMetadata {
	}

	/** Model metadata specific to video object tracking. */
	export interface VideoObjectTrackingModelMetadataFormProperties {
	}
	export function CreateVideoObjectTrackingModelMetadataFormGroup() {
		return new FormGroup<VideoObjectTrackingModelMetadataFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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


	/** Response message for AutoMl.ListTableSpecs. */
	export interface ListTableSpecsResponse {

		/** A token to retrieve next page of results. Pass to ListTableSpecsRequest.page_token to obtain that page. */
		nextPageToken?: string | null;

		/** The table specs read. */
		tableSpecs?: Array<TableSpec>;
	}

	/** Response message for AutoMl.ListTableSpecs. */
	export interface ListTableSpecsResponseFormProperties {

		/** A token to retrieve next page of results. Pass to ListTableSpecsRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTableSpecsResponseFormGroup() {
		return new FormGroup<ListTableSpecsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by: * Tables */
	export interface TableSpec {

		/** Output only. The number of columns of the table. That is, the number of child ColumnSpec-s. */
		columnCount?: string | null;

		/** Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens. */
		etag?: string | null;

		/** Output only. Input configs via which data currently residing in the table had been imported. */
		inputConfigs?: Array<InputConfig>;

		/** Output only. The resource name of the table spec. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}` */
		name?: string | null;

		/** Output only. The number of rows (i.e. examples) in the table. */
		rowCount?: string | null;

		/** column_spec_id of the time column. Only used if the parent dataset's ml_use_column_spec_id is not set. Used to split rows into TRAIN, VALIDATE and TEST sets such that oldest rows go to TRAIN set, newest to TEST, and those in between to VALIDATE. Required type: TIMESTAMP. If both this column and ml_use_column are not set, then ML use of all rows will be assigned by AutoML. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. */
		timeColumnSpecId?: string | null;

		/** Output only. The number of valid rows (i.e. without values that don't match DataType-s of their columns). */
		validRowCount?: string | null;
	}

	/** A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by: * Tables */
	export interface TableSpecFormProperties {

		/** Output only. The number of columns of the table. That is, the number of child ColumnSpec-s. */
		columnCount: FormControl<string | null | undefined>,

		/** Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The resource name of the table spec. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The number of rows (i.e. examples) in the table. */
		rowCount: FormControl<string | null | undefined>,

		/** column_spec_id of the time column. Only used if the parent dataset's ml_use_column_spec_id is not set. Used to split rows into TRAIN, VALIDATE and TEST sets such that oldest rows go to TRAIN set, newest to TEST, and those in between to VALIDATE. Required type: TIMESTAMP. If both this column and ml_use_column are not set, then ML use of all rows will be assigned by AutoML. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset. */
		timeColumnSpecId: FormControl<string | null | undefined>,

		/** Output only. The number of valid rows (i.e. without values that don't match DataType-s of their columns). */
		validRowCount: FormControl<string | null | undefined>,
	}
	export function CreateTableSpecFormGroup() {
		return new FormGroup<TableSpecFormProperties>({
			columnCount: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rowCount: new FormControl<string | null | undefined>(undefined),
			timeColumnSpecId: new FormControl<string | null | undefined>(undefined),
			validRowCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata used across all long running operations returned by AutoML API. */
	export interface OperationMetadata {

		/** Details of BatchPredict operation. */
		batchPredictDetails?: BatchPredictOperationMetadata;

		/** Details of CreateModel operation. */
		createModelDetails?: CreateModelOperationMetadata;

		/** Output only. Time when the operation was created. */
		createTime?: string | null;

		/** Details of operations that perform deletes of any entities. */
		deleteDetails?: DeleteOperationMetadata;

		/** Details of DeployModel operation. */
		deployModelDetails?: DeployModelOperationMetadata;

		/** Details of ExportData operation. */
		exportDataDetails?: ExportDataOperationMetadata;

		/** Details of EvaluatedExamples operation. */
		exportEvaluatedExamplesDetails?: ExportEvaluatedExamplesOperationMetadata;

		/** Details of ExportModel operation. */
		exportModelDetails?: ExportModelOperationMetadata;

		/** Details of ImportData operation. */
		importDataDetails?: ImportDataOperationMetadata;

		/** Output only. Partial failures encountered. E.g. single files that couldn't be read. This field should never exceed 20 entries. Status details field will contain standard GCP error details. */
		partialFailures?: Array<Status>;

		/** Output only. Progress of operation. Range: [0, 100]. Not used currently. */
		progressPercent?: number | null;

		/** Details of UndeployModel operation. */
		undeployModelDetails?: UndeployModelOperationMetadata;

		/** Output only. Time when the operation was updated for the last time. */
		updateTime?: string | null;
	}

	/** Metadata used across all long running operations returned by AutoML API. */
	export interface OperationMetadataFormProperties {

		/** Output only. Time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Progress of operation. Range: [0, 100]. Not used currently. */
		progressPercent: FormControl<number | null | undefined>,

		/** Output only. Time when the operation was updated for the last time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of UndeployModel operation. */
	export interface UndeployModelOperationMetadata {
	}

	/** Details of UndeployModel operation. */
	export interface UndeployModelOperationMetadataFormProperties {
	}
	export function CreateUndeployModelOperationMetadataFormGroup() {
		return new FormGroup<UndeployModelOperationMetadataFormProperties>({
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for PredictionService.Predict. */
	export interface PredictRequest {

		/** Additional domain-specific parameters, any string must be up to 25000 characters long. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned in the response. Default is 100, the requested value may be limited by server. * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotation. The default is false. */
		params?: {[id: string]: string };

		/** Example data used for training or prediction. */
		payload?: ExamplePayload;
	}

	/** Request message for PredictionService.Predict. */
	export interface PredictRequestFormProperties {

		/** Additional domain-specific parameters, any string must be up to 25000 characters long. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned in the response. Default is 100, the requested value may be limited by server. * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotation. The default is false. */
		params: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePredictRequestFormGroup() {
		return new FormGroup<PredictRequestFormProperties>({
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Response message for PredictionService.Predict. */
	export interface PredictResponse {

		/** Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Text Sentiment: `sentiment_score` - (float, deprecated) A value between -1 and 1, -1 maps to least positive sentiment, while 1 maps to the most positive one and the higher the score, the more positive the sentiment in the document is. Yet these values are relative to the training data, so e.g. if all data was positive then -1 will be also positive (though the least). The sentiment_score shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. */
		metadata?: {[id: string]: string };

		/** Prediction result. Translation and Text Sentiment will return precisely one payload. */
		payload?: Array<AnnotationPayload>;

		/** Example data used for training or prediction. */
		preprocessedInput?: ExamplePayload;
	}

	/** Response message for PredictionService.Predict. */
	export interface PredictResponseFormProperties {

		/** Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Text Sentiment: `sentiment_score` - (float, deprecated) A value between -1 and 1, -1 maps to least positive sentiment, while 1 maps to the most positive one and the higher the score, the more positive the sentiment in the document is. Yet these values are relative to the training data, so e.g. if all data was positive then -1 will be also positive (though the least). The sentiment_score shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePredictResponseFormGroup() {
		return new FormGroup<PredictResponseFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** Request message for AutoMl.UndeployModel. */
	export interface UndeployModelRequest {
	}

	/** Request message for AutoMl.UndeployModel. */
	export interface UndeployModelRequestFormProperties {
	}
	export function CreateUndeployModelRequestFormGroup() {
		return new FormGroup<UndeployModelRequestFormProperties>({
		});

	}


	/** The request message for Operations.WaitOperation. */
	export interface WaitOperationRequest {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout?: string | null;
	}

	/** The request message for Operations.WaitOperation. */
	export interface WaitOperationRequestFormProperties {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateWaitOperationRequestFormGroup() {
		return new FormGroup<WaitOperationRequestFormProperties>({
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1beta1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Automl_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {string} fieldMask Mask specifying which fields to read.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_operations_get(name: string, fieldMask: string | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)), {});
		}

		/**
		 * Updates a column spec.
		 * Patch v1beta1/{name}
		 * @param {string} name Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`
		 * @param {string} updateMask The update mask applies to the resource.
		 * @return {ColumnSpec} Successful response
		 */
		Automl_projects_locations_datasets_tableSpecs_columnSpecs_patch(name: string, updateMask: string | null | undefined, requestBody: ColumnSpec): Observable<ColumnSpec> {
			return this.http.patch<ColumnSpec>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Automl_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter An expression for filtering the results of the request. * `operation_id` - for = or !=. * `done` - for = or !=. * `works_on` - for = or !=. Some examples of using the filter are: * `done=true` --> The operation has finished running. * `works_on = projects/my-project/locations/us-central1/datasets/5` --> The operation works on a dataset with ID 5. * `works_on = projects/my-project/locations/us-central1/models/15` --> The operation works on a model with ID 15.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Automl_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
		 * Post v1beta1/{name}:batchPredict
		 * @param {string} name Required. Name of the model requested to serve the batch prediction.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_models_batchPredict(name: string, requestBody: BatchPredictRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':batchPredict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1beta1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Automl_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parameters (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
		 * Post v1beta1/{name}:deploy
		 * @param {string} name Required. Resource name of the model to deploy.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_models_deploy(name: string, requestBody: DeployModelRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':deploy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
		 * Post v1beta1/{name}:export
		 * @param {string} name Required. The resource name of the model to export.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_models_export(name: string, requestBody: ExportModelRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
		 * Post v1beta1/{name}:exportData
		 * @param {string} name Required. The resource name of the dataset.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_datasets_exportData(name: string, requestBody: ExportDataRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
		 * Post v1beta1/{name}:exportEvaluatedExamples
		 * @param {string} name Required. The resource name of the model whose evaluated examples are to be exported.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_models_exportEvaluatedExamples(name: string, requestBody: ExportEvaluatedExamplesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportEvaluatedExamples', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
		 * Post v1beta1/{name}:importData
		 * @param {string} name Required. Dataset name. Dataset must already exist. All imported annotations and examples will be added.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_datasets_importData(name: string, requestBody: ImportDataRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':importData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
		 * Post v1beta1/{name}:predict
		 * @param {string} name Required. Name of the model requested to serve the prediction.
		 * @return {PredictResponse} Successful response
		 */
		Automl_projects_locations_models_predict(name: string, requestBody: PredictRequest): Observable<PredictResponse> {
			return this.http.post<PredictResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':predict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
		 * Post v1beta1/{name}:undeploy
		 * @param {string} name Required. Resource name of the model to undeploy.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_models_undeploy(name: string, requestBody: UndeployModelRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':undeploy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
		 * Post v1beta1/{name}:wait
		 * @param {string} name The name of the operation resource to wait on.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_operations_wait(name: string, requestBody: WaitOperationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':wait', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists column specs in a table spec.
		 * Get v1beta1/{parent}/columnSpecs
		 * @param {string} parent Required. The resource name of the table spec to list column specs from.
		 * @param {string} fieldMask Mask specifying which fields to read.
		 * @param {string} filter Filter expression, see go/filtering.
		 * @param {number} pageSize Requested page size. The server can return fewer results than requested. If unspecified, the server will pick a default size.
		 * @param {string} pageToken A token identifying a page of results for the server to return. Typically obtained from the ListColumnSpecsResponse.next_page_token field of the previous AutoMl.ListColumnSpecs call.
		 * @return {ListColumnSpecsResponse} Successful response
		 */
		Automl_projects_locations_datasets_tableSpecs_columnSpecs_list(parent: string, fieldMask: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListColumnSpecsResponse> {
			return this.http.get<ListColumnSpecsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/columnSpecs&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists datasets in a project.
		 * Get v1beta1/{parent}/datasets
		 * @param {string} parent Required. The resource name of the project from which to list datasets.
		 * @param {string} filter An expression for filtering the results of the request. * `dataset_metadata` - for existence of the case (e.g. `image_classification_dataset_metadata:*`). Some examples of using the filter are: * `translation_dataset_metadata:*` --> The dataset has `translation_dataset_metadata`.
		 * @param {number} pageSize Requested page size. Server may return fewer results than requested. If unspecified, server will pick a default size.
		 * @param {string} pageToken A token identifying a page of results for the server to return Typically obtained via ListDatasetsResponse.next_page_token of the previous AutoMl.ListDatasets call.
		 * @return {ListDatasetsResponse} Successful response
		 */
		Automl_projects_locations_datasets_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a dataset.
		 * Post v1beta1/{parent}/datasets
		 * @param {string} parent Required. The resource name of the project to create the dataset for.
		 * @return {Dataset} Successful response
		 */
		Automl_projects_locations_datasets_create(parent: string, requestBody: Dataset): Observable<Dataset> {
			return this.http.post<Dataset>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists model evaluations.
		 * Get v1beta1/{parent}/modelEvaluations
		 * @param {string} parent Required. Resource name of the model to list the model evaluations for. If modelId is set as "-", this will list model evaluations from across all models of the parent location.
		 * @param {string} filter An expression for filtering the results of the request. * `annotation_spec_id` - for =, != or existence. See example below for the last. Some examples of using the filter are: * `annotation_spec_id!=4` --> The model evaluation was done for annotation spec with ID different than 4. * `NOT annotation_spec_id:*` --> The model evaluation was done for aggregate of all annotation specs.
		 * @param {number} pageSize Requested page size.
		 * @param {string} pageToken A token identifying a page of results for the server to return. Typically obtained via ListModelEvaluationsResponse.next_page_token of the previous AutoMl.ListModelEvaluations call.
		 * @return {ListModelEvaluationsResponse} Successful response
		 */
		Automl_projects_locations_models_modelEvaluations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListModelEvaluationsResponse> {
			return this.http.get<ListModelEvaluationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/modelEvaluations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists models.
		 * Get v1beta1/{parent}/models
		 * @param {string} parent Required. Resource name of the project, from which to list the models.
		 * @param {string} filter An expression for filtering the results of the request. * `model_metadata` - for existence of the case (e.g. `video_classification_model_metadata:*`). * `dataset_id` - for = or !=. Some examples of using the filter are: * `image_classification_model_metadata:*` --> The model has `image_classification_model_metadata`. * `dataset_id=5` --> The model was created from a dataset with ID 5.
		 * @param {number} pageSize Requested page size.
		 * @param {string} pageToken A token identifying a page of results for the server to return Typically obtained via ListModelsResponse.next_page_token of the previous AutoMl.ListModels call.
		 * @return {ListModelsResponse} Successful response
		 */
		Automl_projects_locations_models_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListModelsResponse> {
			return this.http.get<ListModelsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
		 * Post v1beta1/{parent}/models
		 * @param {string} parent Required. Resource name of the parent project where the model is being created.
		 * @return {Operation} Successful response
		 */
		Automl_projects_locations_models_create(parent: string, requestBody: Model): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists table specs in a dataset.
		 * Get v1beta1/{parent}/tableSpecs
		 * @param {string} parent Required. The resource name of the dataset to list table specs from.
		 * @param {string} fieldMask Mask specifying which fields to read.
		 * @param {string} filter Filter expression, see go/filtering.
		 * @param {number} pageSize Requested page size. The server can return fewer results than requested. If unspecified, the server will pick a default size.
		 * @param {string} pageToken A token identifying a page of results for the server to return. Typically obtained from the ListTableSpecsResponse.next_page_token field of the previous AutoMl.ListTableSpecs call.
		 * @return {ListTableSpecsResponse} Successful response
		 */
		Automl_projects_locations_datasets_tableSpecs_list(parent: string, fieldMask: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTableSpecsResponse> {
			return this.http.get<ListTableSpecsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tableSpecs&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Automl_projects_locations_models_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Automl_projects_locations_models_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Automl_projects_locations_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

