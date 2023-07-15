import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Contains annotation information that is relevant to AutoML. */
	export interface AnnotationPayload {

		/**
		 * Output only . The resource ID of the annotation spec that
		 * this annotation pertains to. The annotation spec comes from either an
		 * ancestor dataset, or the dataset that was used to train the model in use.
		 */
		annotationSpecId?: string;

		/** Contains annotation details specific to classification. */
		classification?: ClassificationAnnotation;

		/**
		 * Output only. The value of
		 * display_name
		 * when the model was trained. Because this field returns a value at model
		 * training time, for different models trained using the same dataset, the
		 * returned value could be different as model owner could update the
		 * `display_name` between any two model training.
		 */
		displayName?: string;

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


	/** Contains annotation details specific to classification. */
	export interface ClassificationAnnotation {

		/**
		 * Output only. A confidence estimate between 0.0 and 1.0. A higher value
		 * means greater confidence that the annotation is positive. If a user
		 * approves an annotation as negative or positive, the score value remains
		 * unchanged. If a user creates an annotation, the score is 0 for negative or
		 * 1 for positive.
		 */
		score?: number;
	}


	/** Annotation details for image object detection. */
	export interface ImageObjectDetectionAnnotation {

		/**
		 * A bounding polygon of a detected object on a plane.
		 * On output both vertices and normalized_vertices are provided.
		 * The polygon is formed by connecting vertices in the order they are listed.
		 */
		boundingBox?: BoundingPoly;

		/**
		 * Output only. The confidence that this annotation is positive for the parent example,
		 * value in [0, 1], higher means higher positivity confidence.
		 */
		score?: number;
	}


	/**
	 * A bounding polygon of a detected object on a plane.
	 * On output both vertices and normalized_vertices are provided.
	 * The polygon is formed by connecting vertices in the order they are listed.
	 */
	export interface BoundingPoly {

		/** Output only . The bounding polygon normalized vertices. */
		normalizedVertices?: Array<NormalizedVertex>;
	}


	/**
	 * A vertex represents a 2D point in the image.
	 * The normalized vertex coordinates are between 0 to 1 fractions relative to
	 * the original plane (image, video). E.g. if the plane (e.g. whole image) would
	 * have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would
	 * be at the position (1, 6) on that plane.
	 */
	export interface NormalizedVertex {

		/** Required. Horizontal coordinate. */
		x?: number;

		/** Required. Vertical coordinate. */
		y?: number;
	}


	/** Contains annotation details specific to Tables. */
	export interface TablesAnnotation {

		/**
		 * Output only. Stores the prediction score for the baseline example, which
		 * is defined as the example with all values set to their baseline values.
		 * This is used as part of the Sampled Shapley explanation of the model's
		 * prediction. This field is populated only when feature importance is
		 * requested. For regression models, this holds the baseline prediction for
		 * the baseline example. For classification models, this holds the baseline
		 * prediction for the baseline example for the argmax class.
		 */
		baselineScore?: number;

		/** A range between two double numbers. */
		predictionInterval?: DoubleRange;

		/**
		 * Output only. A confidence estimate between 0.0 and 1.0, inclusive. A higher
		 * value means greater confidence in the returned value.
		 * For
		 * target_column_spec
		 * of FLOAT64 data type the score is not populated.
		 */
		score?: number;

		/**
		 * Output only. Auxiliary information for each of the model's
		 * input_feature_column_specs
		 * with respect to this particular prediction.
		 * If no other fields than
		 * column_spec_name
		 * and
		 * column_display_name
		 * would be populated, then this whole field is not.
		 */
		tablesModelColumnInfo?: Array<TablesModelColumnInfo>;

		/**
		 * The predicted value of the row's
		 * target_column.
		 * The value depends on the column's DataType:
		 * * CATEGORY - the predicted (with the above confidence `score`) CATEGORY
		 * value.
		 * * FLOAT64 - the predicted (with above `prediction_interval`) FLOAT64 value.
		 */
		value?: any;
	}


	/** A range between two double numbers. */
	export interface DoubleRange {

		/** End of the range, exclusive. */
		end?: number;

		/** Start of the range, inclusive. */
		start?: number;
	}


	/**
	 * An information specific to given column and Tables Model, in context
	 * of the Model and the predictions created by it.
	 */
	export interface TablesModelColumnInfo {

		/**
		 * Output only. The display name of the column (same as the display_name of
		 * its ColumnSpec).
		 */
		columnDisplayName?: string;

		/**
		 * Output only. The name of the ColumnSpec describing the column. Not
		 * populated when this proto is outputted to BigQuery.
		 */
		columnSpecName?: string;

		/**
		 * Output only. When given as part of a Model (always populated):
		 * Measurement of how much model predictions correctness on the TEST data
		 * depend on values in this column. A value between 0 and 1, higher means
		 * higher influence. These values are normalized - for all input feature
		 * columns of a given model they add to 1.
		 * When given back by Predict (populated iff
		 * feature_importance
		 * param is set) or Batch
		 * Predict (populated iff
		 * feature_importance
		 * param is set):
		 * Measurement of how impactful for the prediction returned for the given row
		 * the value in this column was. Specifically, the feature importance
		 * specifies the marginal contribution that the feature made to the prediction
		 * score compared to the baseline score. These values are computed using the
		 * Sampled Shapley method.
		 */
		featureImportance?: number;
	}


	/** Annotation for identifying spans of text. */
	export interface TextExtractionAnnotation {

		/**
		 * Output only. A confidence estimate between 0.0 and 1.0. A higher value
		 * means greater confidence in correctness of the annotation.
		 */
		score?: number;

		/** A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding. */
		textSegment?: TextSegment;
	}


	/** A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding. */
	export interface TextSegment {

		/** Output only. The content of the TextSegment. */
		content?: string;

		/**
		 * Required. Zero-based character index of the first character past the end of
		 * the text segment (counting character from the beginning of the text).
		 * The character at the end_offset is NOT included in the text segment.
		 */
		endOffset?: string;

		/**
		 * Required. Zero-based character index of the first character of the text
		 * segment (counting characters from the beginning of the text).
		 */
		startOffset?: string;
	}


	/** Contains annotation details specific to text sentiment. */
	export interface TextSentimentAnnotation {

		/**
		 * Output only. The sentiment with the semantic, as given to the
		 * AutoMl.ImportData when populating the dataset from which the model used
		 * for the prediction had been trained.
		 * The sentiment values are between 0 and
		 * Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive),
		 * with higher value meaning more positive sentiment. They are completely
		 * relative, i.e. 0 means least positive sentiment and sentiment_max means
		 * the most positive from the sentiments present in the train data. Therefore
		 * e.g. if train data had only negative sentiment, then sentiment_max, would
		 * be still negative (although least negative).
		 * The sentiment shouldn't be confused with "score" or "magnitude"
		 * from the previous Natural Language Sentiment Analysis API.
		 */
		sentiment?: number;
	}


	/** Annotation details specific to translation. */
	export interface TranslationAnnotation {

		/** A representation of a text snippet. */
		translatedContent?: TextSnippet;
	}


	/** A representation of a text snippet. */
	export interface TextSnippet {

		/**
		 * Required. The content of the text snippet as a string. Up to 250000
		 * characters long.
		 */
		content?: string;

		/** Output only. HTTP URI where you can download the content. */
		contentUri?: string;

		/**
		 * Optional. The format of content. Currently the only two allowed
		 * values are "text/html" and "text/plain". If left blank, the format is
		 * automatically determined from the type of the uploaded content.
		 */
		mimeType?: string;
	}


	/** Contains annotation details specific to video classification. */
	export interface VideoClassificationAnnotation {

		/** Contains annotation details specific to classification. */
		classificationAnnotation?: ClassificationAnnotation;

		/** A time period inside of an example that has a time dimension (e.g. video). */
		timeSegment?: TimeSegment;

		/**
		 * Output only. Expresses the type of video classification. Possible values:
		 * *  `segment` - Classification done on a specified by user
		 * time segment of a video. AnnotationSpec is answered to be present
		 * in that time segment, if it is present in any part of it. The video
		 * ML model evaluations are done only for this type of classification.
		 * *  `shot`- Shot-level classification.
		 * AutoML Video Intelligence determines the boundaries
		 * for each camera shot in the entire segment of the video that user
		 * specified in the request configuration. AutoML Video Intelligence
		 * then returns labels and their confidence scores for each detected
		 * shot, along with the start and end time of the shot.
		 * WARNING: Model evaluation is not done for this classification type,
		 * the quality of it depends on training data, but there are no
		 * metrics provided to describe that quality.
		 * *  `1s_interval` - AutoML Video Intelligence returns labels and their
		 * confidence scores for each second of the entire segment of the video
		 * that user specified in the request configuration.
		 * WARNING: Model evaluation is not done for this classification type,
		 * the quality of it depends on training data, but there are no
		 * metrics provided to describe that quality.
		 */
		type?: string;
	}


	/** A time period inside of an example that has a time dimension (e.g. video). */
	export interface TimeSegment {

		/**
		 * End of the time segment (exclusive), represented as the duration since the
		 * example start.
		 */
		endTimeOffset?: string;

		/**
		 * Start of the time segment (inclusive), represented as the duration since
		 * the example start.
		 */
		startTimeOffset?: string;
	}


	/** Annotation details for video object tracking. */
	export interface VideoObjectTrackingAnnotation {

		/**
		 * A bounding polygon of a detected object on a plane.
		 * On output both vertices and normalized_vertices are provided.
		 * The polygon is formed by connecting vertices in the order they are listed.
		 */
		boundingBox?: BoundingPoly;

		/**
		 * Optional. The instance of the object, expressed as a positive integer. Used to tell
		 * apart objects of the same type (i.e. AnnotationSpec) when multiple are
		 * present on a single example.
		 * NOTE: Instance ID prediction quality is not a part of model evaluation and
		 * is done as best effort. Especially in cases when an entity goes
		 * off-screen for a longer time (minutes), when it comes back it may be given
		 * a new instance ID.
		 */
		instanceId?: string;

		/**
		 * Output only. The confidence that this annotation is positive for the video at
		 * the time_offset, value in [0, 1], higher means higher positivity
		 * confidence. For annotations created by the user the score is 1. When
		 * user approves an annotation, the original float score is kept (and not
		 * changed to 1).
		 */
		score?: number;

		/**
		 * Required. A time (frame) of a video to which this annotation pertains.
		 * Represented as the duration since the video's start.
		 */
		timeOffset?: string;
	}


	/** A definition of an annotation spec. */
	export interface AnnotationSpec {

		/**
		 * Required. The name of the annotation spec to show in the interface. The name can be
		 * up to 32 characters long and must match the regexp `[a-zA-Z0-9_]+`.
		 */
		displayName?: string;

		/**
		 * Output only. The number of examples in the parent dataset
		 * labeled by the annotation spec.
		 */
		exampleCount?: number;

		/**
		 * Output only. Resource name of the annotation spec.
		 * Form:
		 * 'projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationSpecs/{annotation_spec_id}'
		 */
		name?: string;
	}


	/** The data statistics of a series of ARRAY values. */
	export interface ArrayStats {

		/** The data statistics of a series of values that share the same DataType. */
		memberStats?: DataStats;
	}


	/** The data statistics of a series of values that share the same DataType. */
	export interface DataStats {

		/** The data statistics of a series of ARRAY values. */
		arrayStats?: ArrayStats;

		/** The data statistics of a series of CATEGORY values. */
		categoryStats?: CategoryStats;

		/** The number of distinct values. */
		distinctValueCount?: string;

		/** The data statistics of a series of FLOAT64 values. */
		float64Stats?: Float64Stats;

		/** The number of values that are null. */
		nullValueCount?: string;

		/** The data statistics of a series of STRING values. */
		stringStats?: StringStats;

		/** The data statistics of a series of STRUCT values. */
		structStats?: StructStats;

		/** The data statistics of a series of TIMESTAMP values. */
		timestampStats?: TimestampStats;

		/** The number of values that are valid. */
		validValueCount?: string;
	}


	/** The data statistics of a series of CATEGORY values. */
	export interface CategoryStats {

		/**
		 * The statistics of the top 20 CATEGORY values, ordered by
		 * count.
		 */
		topCategoryStats?: Array<SingleCategoryStats>;
	}


	/** The statistics of a single CATEGORY value. */
	export interface SingleCategoryStats {

		/** The number of occurrences of this value in the series. */
		count?: string;

		/** The CATEGORY value. */
		value?: string;
	}


	/** The data statistics of a series of FLOAT64 values. */
	export interface Float64Stats {

		/**
		 * Histogram buckets of the data series. Sorted by the min value of the
		 * bucket, ascendingly, and the number of the buckets is dynamically
		 * generated. The buckets are non-overlapping and completely cover whole
		 * FLOAT64 range with min of first bucket being `"-Infinity"`, and max of
		 * the last one being `"Infinity"`.
		 */
		histogramBuckets?: Array<HistogramBucket>;

		/** The mean of the series. */
		mean?: number;

		/**
		 * Ordered from 0 to k k-quantile values of the data series of n values.
		 * The value at index i is, approximately, the i*n/k-th smallest value in the
		 * series; for i = 0 and i = k these are, respectively, the min and max
		 * values.
		 */
		quantiles?: Array<number>;

		/** The standard deviation of the series. */
		standardDeviation?: number;
	}


	/** A bucket of a histogram. */
	export interface HistogramBucket {

		/**
		 * The number of data values that are in the bucket, i.e. are between
		 * min and max values.
		 */
		count?: string;

		/**
		 * The maximum value of the bucket, exclusive unless max = `"Infinity"`, in
		 * which case it's inclusive.
		 */
		max?: number;

		/** The minimum value of the bucket, inclusive. */
		min?: number;
	}


	/** The data statistics of a series of STRING values. */
	export interface StringStats {

		/**
		 * The statistics of the top 20 unigrams, ordered by
		 * count.
		 */
		topUnigramStats?: Array<UnigramStats>;
	}


	/** The statistics of a unigram. */
	export interface UnigramStats {

		/** The number of occurrences of this unigram in the series. */
		count?: string;

		/** The unigram. */
		value?: string;
	}


	/** The data statistics of a series of STRUCT values. */
	export interface StructStats {

		/**
		 * Map from a field name of the struct to data stats aggregated over series
		 * of all data in that field across all the structs.
		 */
		fieldStats?: {[id: string]: DataStats };
	}


	/** The data statistics of a series of TIMESTAMP values. */
	export interface TimestampStats {

		/**
		 * The string key is the pre-defined granularity. Currently supported:
		 * hour_of_day, day_of_week, month_of_year.
		 * Granularities finer that the granularity of timestamp data are not
		 * populated (e.g. if timestamps are at day granularity, then hour_of_day
		 * is not populated).
		 */
		granularStats?: {[id: string]: GranularStats };
	}


	/** Stats split by a defined in context granularity. */
	export interface GranularStats {

		/**
		 * A map from granularity key to example count for that key.
		 * E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May).
		 */
		buckets?: {[id: string]: string };
	}


	/**
	 * Input configuration for BatchPredict Action.
	 * The format of input depends on the ML problem of the model used for
	 * prediction. As input source the
	 * gcs_source
	 * is expected, unless specified otherwise.
	 * The formats are represented in EBNF with commas being literal and with
	 * non-terminal symbols defined near the end of this comment. The formats
	 * are:
	 *  *  For Image Classification:
	 *         CSV file(s) with each line having just a single column:
	 *           GCS_FILE_PATH
	 *           which leads to image of up to 30MB in size. Supported
	 *           extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in
	 *           the Batch predict output.
	 *         Three sample rows:
	 *           gs://folder/image1.jpeg
	 *           gs://folder/image2.gif
	 *           gs://folder/image3.png
	 *  *  For Image Object Detection:
	 *         CSV file(s) with each line having just a single column:
	 *           GCS_FILE_PATH
	 *           which leads to image of up to 30MB in size. Supported
	 *           extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in
	 *           the Batch predict output.
	 *         Three sample rows:
	 *           gs://folder/image1.jpeg
	 *           gs://folder/image2.gif
	 *           gs://folder/image3.png
	 *  *  For Video Classification:
	 *         CSV file(s) with each line in format:
	 *           GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END
	 *           GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h
	 *           duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
	 *           TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
	 *           length of the video, and end has to be after the start.
	 *         Three sample rows:
	 *           gs://folder/video1.mp4,10,40
	 *           gs://folder/video1.mp4,20,60
	 *           gs://folder/vid2.mov,0,inf
	 *  *  For Video Object Tracking:
	 *         CSV file(s) with each line in format:
	 *           GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END
	 *           GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h
	 *           duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
	 *           TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
	 *           length of the video, and end has to be after the start.
	 *         Three sample rows:
	 *           gs://folder/video1.mp4,10,240
	 *           gs://folder/video1.mp4,300,360
	 *           gs://folder/vid2.mov,0,inf
	 *  *  For Text Classification:
	 *         CSV file(s) with each line having just a single column:
	 *           GCS_FILE_PATH | TEXT_SNIPPET
	 *         Any given text file can have size upto 128kB.
	 *         Any given text snippet content must have 60,000 characters or less.
	 *         Three sample rows:
	 *           gs://folder/text1.txt
	 *           "Some text content to predict"
	 *           gs://folder/text3.pdf
	 *         Supported file extensions: .txt, .pdf
	 *  *  For Text Sentiment:
	 *         CSV file(s) with each line having just a single column:
	 *           GCS_FILE_PATH | TEXT_SNIPPET
	 *         Any given text file can have size upto 128kB.
	 *         Any given text snippet content must have 500 characters or less.
	 *         Three sample rows:
	 *           gs://folder/text1.txt
	 *           "Some text content to predict"
	 *           gs://folder/text3.pdf
	 *         Supported file extensions: .txt, .pdf
	 *  * For Text Extraction
	 *         .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or
	 *         as documents (for a single BatchPredict call only one of the these
	 *         formats may be used).
	 *         The in-line .JSONL file(s) contain per line a proto that
	 *           wraps a temporary user-assigned TextSnippet ID (string up to 2000
	 *           characters long) called "id", a TextSnippet proto (in
	 *           json representation) and zero or more TextFeature protos. Any given
	 *           text snippet content must have 30,000 characters or less, and also
	 *           be UTF-8 NFC encoded (ASCII already is). The IDs provided should be
	 *           unique.
	 *         The document .JSONL file(s) contain, per line, a proto that wraps a
	 *           Document proto with input_config set. Only PDF documents are
	 *           supported now, and each document must be up to 2MB large.
	 *         Any given .JSONL file must be 100MB or smaller, and no more than 20
	 *         files may be given.
	 *         Sample in-line JSON Lines file (presented here with artificial line
	 *         breaks, but the only actual line break is denoted by \n):
	 *           {
	 *             "id": "my_first_id",
	 *             "text_snippet": { "content": "dog car cat"},
	 *             "text_features": [
	 *               {
	 *                 "text_segment": {"start_offset": 4, "end_offset": 6},
	 *                 "structural_type": PARAGRAPH,
	 *                 "bounding_poly": {
	 *                   "normalized_vertices": [
	 *                     {"x": 0.1, "y": 0.1},
	 *                     {"x": 0.1, "y": 0.3},
	 *                     {"x": 0.3, "y": 0.3},
	 *                     {"x": 0.3, "y": 0.1},
	 *                   ]
	 *                 },
	 *               }
	 *             ],
	 *           }\n
	 *           {
	 *             "id": "2",
	 *             "text_snippet": {
	 *               "content": "An elaborate content",
	 *               "mime_type": "text/plain"
	 *             }
	 *           }
	 *         Sample document JSON Lines file (presented here with artificial line
	 *         breaks, but the only actual line break is denoted by \n).:
	 *           {
	 *             "document": {
	 *               "input_config": {
	 *                 "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ]
	 *                 }
	 *               }
	 *             }
	 *           }\n
	 *           {
	 *             "document": {
	 *               "input_config": {
	 *                 "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ]
	 *                 }
	 *               }
	 *             }
	 *           }
	 *  *  For Tables:
	 *         Either
	 *         gcs_source or
	 * bigquery_source.
	 *         GCS case:
	 *           CSV file(s), each by itself 10GB or smaller and total size must be
	 *           100GB or smaller, where first file must have a header containing
	 *           column names. If the first row of a subsequent file is the same as
	 *           the header, then it is also treated as a header. All other rows
	 *           contain values for the corresponding columns.
	 *           The column names must contain the model's
	 * input_feature_column_specs'
	 * display_name-s
	 *           (order doesn't matter). The columns corresponding to the model's
	 *           input feature column specs must contain values compatible with the
	 *           column spec's data types. Prediction on all the rows, i.e. the CSV
	 *           lines, will be attempted. For FORECASTING
	 * prediction_type:
	 *           all columns having
	 * TIME_SERIES_AVAILABLE_PAST_ONLY
	 *           type will be ignored.
	 *           First three sample rows of a CSV file:
	 *             "First Name","Last Name","Dob","Addresses"
	 * "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]"
	 * "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]}
	 *         BigQuery case:
	 *           An URI of a BigQuery table. The user data size of the BigQuery
	 *           table must be 100GB or smaller.
	 *           The column names must contain the model's
	 * input_feature_column_specs'
	 * display_name-s
	 *           (order doesn't matter). The columns corresponding to the model's
	 *           input feature column specs must contain values compatible with the
	 *           column spec's data types. Prediction on all the rows of the table
	 *           will be attempted. For FORECASTING
	 * prediction_type:
	 *           all columns having
	 * TIME_SERIES_AVAILABLE_PAST_ONLY
	 *           type will be ignored.
	 *  Definitions:
	 *  GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi".
	 *  TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within
	 *                 double quotes ("")
	 *  TIME_SEGMENT_START = TIME_OFFSET
	 *                       Expresses a beginning, inclusive, of a time segment
	 *                       within an
	 *                       example that has a time dimension (e.g. video).
	 *  TIME_SEGMENT_END = TIME_OFFSET
	 *                     Expresses an end, exclusive, of a time segment within
	 *                     an example that has a time dimension (e.g. video).
	 *  TIME_OFFSET = A number of seconds as measured from the start of an
	 *                example (e.g. video). Fractions are allowed, up to a
	 *                microsecond precision. "inf" is allowed and it means the end
	 *                of the example.
	 *  Errors:
	 *  If any of the provided CSV files can't be parsed or if more than certain
	 *  percent of CSV rows cannot be processed then the operation fails and
	 *  prediction does not happen. Regardless of overall success or failure the
	 *  per-row failures, up to a certain count cap, will be listed in
	 *  Operation.metadata.partial_failures.
	 */
	export interface BatchPredictInputConfig {

		/** The BigQuery location for the input content. */
		bigquerySource?: BigQuerySource;

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;
	}


	/** The BigQuery location for the input content. */
	export interface BigQuerySource {

		/**
		 * Required. BigQuery URI to a table, up to 2000 characters long.
		 * Accepted forms:
		 * *  BigQuery path e.g. bq://projectId.bqDatasetId.bqTableId
		 */
		inputUri?: string;
	}


	/** The Google Cloud Storage location for the input content. */
	export interface GcsSource {

		/**
		 * Required. Google Cloud Storage URIs to input files, up to 2000 characters
		 * long. Accepted forms:
		 * * Full object path, e.g. gs://bucket/directory/object.csv
		 */
		inputUris?: Array<string>;
	}


	/** Details of BatchPredict operation. */
	export interface BatchPredictOperationMetadata {

		/**
		 * Input configuration for BatchPredict Action.
		 * The format of input depends on the ML problem of the model used for
		 * prediction. As input source the
		 * gcs_source
		 * is expected, unless specified otherwise.
		 * The formats are represented in EBNF with commas being literal and with
		 * non-terminal symbols defined near the end of this comment. The formats
		 * are:
		 * *  For Image Classification:
		 * CSV file(s) with each line having just a single column:
		 * GCS_FILE_PATH
		 * which leads to image of up to 30MB in size. Supported
		 * extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in
		 * the Batch predict output.
		 * Three sample rows:
		 * gs://folder/image1.jpeg
		 * gs://folder/image2.gif
		 * gs://folder/image3.png
		 * *  For Image Object Detection:
		 * CSV file(s) with each line having just a single column:
		 * GCS_FILE_PATH
		 * which leads to image of up to 30MB in size. Supported
		 * extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in
		 * the Batch predict output.
		 * Three sample rows:
		 * gs://folder/image1.jpeg
		 * gs://folder/image2.gif
		 * gs://folder/image3.png
		 * *  For Video Classification:
		 * CSV file(s) with each line in format:
		 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END
		 * GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h
		 * duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
		 * TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
		 * length of the video, and end has to be after the start.
		 * Three sample rows:
		 * gs://folder/video1.mp4,10,40
		 * gs://folder/video1.mp4,20,60
		 * gs://folder/vid2.mov,0,inf
		 * *  For Video Object Tracking:
		 * CSV file(s) with each line in format:
		 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END
		 * GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h
		 * duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
		 * TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
		 * length of the video, and end has to be after the start.
		 * Three sample rows:
		 * gs://folder/video1.mp4,10,240
		 * gs://folder/video1.mp4,300,360
		 * gs://folder/vid2.mov,0,inf
		 * *  For Text Classification:
		 * CSV file(s) with each line having just a single column:
		 * GCS_FILE_PATH | TEXT_SNIPPET
		 * Any given text file can have size upto 128kB.
		 * Any given text snippet content must have 60,000 characters or less.
		 * Three sample rows:
		 * gs://folder/text1.txt
		 * "Some text content to predict"
		 * gs://folder/text3.pdf
		 * Supported file extensions: .txt, .pdf
		 * *  For Text Sentiment:
		 * CSV file(s) with each line having just a single column:
		 * GCS_FILE_PATH | TEXT_SNIPPET
		 * Any given text file can have size upto 128kB.
		 * Any given text snippet content must have 500 characters or less.
		 * Three sample rows:
		 * gs://folder/text1.txt
		 * "Some text content to predict"
		 * gs://folder/text3.pdf
		 * Supported file extensions: .txt, .pdf
		 * * For Text Extraction
		 * .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or
		 * as documents (for a single BatchPredict call only one of the these
		 * formats may be used).
		 * The in-line .JSONL file(s) contain per line a proto that
		 * wraps a temporary user-assigned TextSnippet ID (string up to 2000
		 * characters long) called "id", a TextSnippet proto (in
		 * json representation) and zero or more TextFeature protos. Any given
		 * text snippet content must have 30,000 characters or less, and also
		 * be UTF-8 NFC encoded (ASCII already is). The IDs provided should be
		 * unique.
		 * The document .JSONL file(s) contain, per line, a proto that wraps a
		 * Document proto with input_config set. Only PDF documents are
		 * supported now, and each document must be up to 2MB large.
		 * Any given .JSONL file must be 100MB or smaller, and no more than 20
		 * files may be given.
		 * Sample in-line JSON Lines file (presented here with artificial line
		 * breaks, but the only actual line break is denoted by \n):
		 * {
		 * "id": "my_first_id",
		 * "text_snippet": { "content": "dog car cat"},
		 * "text_features": [
		 * {
		 * "text_segment": {"start_offset": 4, "end_offset": 6},
		 * "structural_type": PARAGRAPH,
		 * "bounding_poly": {
		 * "normalized_vertices": [
		 * {"x": 0.1, "y": 0.1},
		 * {"x": 0.1, "y": 0.3},
		 * {"x": 0.3, "y": 0.3},
		 * {"x": 0.3, "y": 0.1},
		 * ]
		 * },
		 * }
		 * ],
		 * }\n
		 * {
		 * "id": "2",
		 * "text_snippet": {
		 * "content": "An elaborate content",
		 * "mime_type": "text/plain"
		 * }
		 * }
		 * Sample document JSON Lines file (presented here with artificial line
		 * breaks, but the only actual line break is denoted by \n).:
		 * {
		 * "document": {
		 * "input_config": {
		 * "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ]
		 * }
		 * }
		 * }
		 * }\n
		 * {
		 * "document": {
		 * "input_config": {
		 * "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ]
		 * }
		 * }
		 * }
		 * }
		 * *  For Tables:
		 * Either
		 * gcs_source or
		 * bigquery_source.
		 * GCS case:
		 * CSV file(s), each by itself 10GB or smaller and total size must be
		 * 100GB or smaller, where first file must have a header containing
		 * column names. If the first row of a subsequent file is the same as
		 * the header, then it is also treated as a header. All other rows
		 * contain values for the corresponding columns.
		 * The column names must contain the model's
		 * input_feature_column_specs'
		 * display_name-s
		 * (order doesn't matter). The columns corresponding to the model's
		 * input feature column specs must contain values compatible with the
		 * column spec's data types. Prediction on all the rows, i.e. the CSV
		 * lines, will be attempted. For FORECASTING
		 * prediction_type:
		 * all columns having
		 * TIME_SERIES_AVAILABLE_PAST_ONLY
		 * type will be ignored.
		 * First three sample rows of a CSV file:
		 * "First Name","Last Name","Dob","Addresses"
		 * "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]"
		 * "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]}
		 * BigQuery case:
		 * An URI of a BigQuery table. The user data size of the BigQuery
		 * table must be 100GB or smaller.
		 * The column names must contain the model's
		 * input_feature_column_specs'
		 * display_name-s
		 * (order doesn't matter). The columns corresponding to the model's
		 * input feature column specs must contain values compatible with the
		 * column spec's data types. Prediction on all the rows of the table
		 * will be attempted. For FORECASTING
		 * prediction_type:
		 * all columns having
		 * TIME_SERIES_AVAILABLE_PAST_ONLY
		 * type will be ignored.
		 * Definitions:
		 * GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi".
		 * TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within
		 * double quotes ("")
		 * TIME_SEGMENT_START = TIME_OFFSET
		 * Expresses a beginning, inclusive, of a time segment
		 * within an
		 * example that has a time dimension (e.g. video).
		 * TIME_SEGMENT_END = TIME_OFFSET
		 * Expresses an end, exclusive, of a time segment within
		 * an example that has a time dimension (e.g. video).
		 * TIME_OFFSET = A number of seconds as measured from the start of an
		 * example (e.g. video). Fractions are allowed, up to a
		 * microsecond precision. "inf" is allowed and it means the end
		 * of the example.
		 * Errors:
		 * If any of the provided CSV files can't be parsed or if more than certain
		 * percent of CSV rows cannot be processed then the operation fails and
		 * prediction does not happen. Regardless of overall success or failure the
		 * per-row failures, up to a certain count cap, will be listed in
		 * Operation.metadata.partial_failures.
		 */
		inputConfig?: BatchPredictInputConfig;

		/**
		 * Further describes this batch predict's output.
		 * Supplements
		 * BatchPredictOutputConfig.
		 */
		outputInfo?: BatchPredictOutputInfo;
	}


	/**
	 * Further describes this batch predict's output.
	 * Supplements
	 * BatchPredictOutputConfig.
	 */
	export interface BatchPredictOutputInfo {

		/**
		 * The path of the BigQuery dataset created, in bq://projectId.bqDatasetId
		 * format, into which the prediction output is written.
		 */
		bigqueryOutputDataset?: string;

		/**
		 * The full path of the Google Cloud Storage directory created, into which
		 * the prediction output is written.
		 */
		gcsOutputDirectory?: string;
	}


	/**
	 * Output configuration for BatchPredict Action.
	 * As destination the
	 * gcs_destination
	 * must be set unless specified otherwise for a domain. If gcs_destination is
	 * set then in the given directory a new directory is created. Its name
	 * will be
	 * "prediction-<model-display-name>-<timestamp-of-prediction-call>",
	 * where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. The contents
	 * of it depends on the ML problem the predictions are made for.
	 *  *  For Image Classification:
	 *         In the created directory files `image_classification_1.jsonl`,
	 *         `image_classification_2.jsonl`,...,`image_classification_N.jsonl`
	 *         will be created, where N may be 1, and depends on the
	 *         total number of the successfully predicted images and annotations.
	 *         A single image will be listed only once with all its annotations,
	 *         and its annotations will never be split across files.
	 *         Each .JSONL file will contain, per line, a JSON representation of a
	 *         proto that wraps image's "ID" : "<id_value>" followed by a list of
	 *         zero or more AnnotationPayload protos (called annotations), which
	 *         have classification detail populated.
	 *         If prediction for any image failed (partially or completely), then an
	 *         additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl`
	 *         files will be created (N depends on total number of failed
	 *         predictions). These files will have a JSON representation of a proto
	 *         that wraps the same "ID" : "<id_value>" but here followed by
	 *         exactly one
	 * [`google.rpc.Status`](https:
	 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
	 *         containing only `code` and `message`fields.
	 *  *  For Image Object Detection:
	 *         In the created directory files `image_object_detection_1.jsonl`,
	 *         `image_object_detection_2.jsonl`,...,`image_object_detection_N.jsonl`
	 *         will be created, where N may be 1, and depends on the
	 *         total number of the successfully predicted images and annotations.
	 *         Each .JSONL file will contain, per line, a JSON representation of a
	 *         proto that wraps image's "ID" : "<id_value>" followed by a list of
	 *         zero or more AnnotationPayload protos (called annotations), which
	 *         have image_object_detection detail populated. A single image will
	 *         be listed only once with all its annotations, and its annotations
	 *         will never be split across files.
	 *         If prediction for any image failed (partially or completely), then
	 *         additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl`
	 *         files will be created (N depends on total number of failed
	 *         predictions). These files will have a JSON representation of a proto
	 *         that wraps the same "ID" : "<id_value>" but here followed by
	 *         exactly one
	 * [`google.rpc.Status`](https:
	 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
	 *         containing only `code` and `message`fields.
	 *  *  For Video Classification:
	 *         In the created directory a video_classification.csv file, and a .JSON
	 *         file per each video classification requested in the input (i.e. each
	 *         line in given CSV(s)), will be created.
	 *         The format of video_classification.csv is:
	 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS
	 *         where:
	 *         GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1
	 *             the prediction input lines (i.e. video_classification.csv has
	 *             precisely the same number of lines as the prediction input had.)
	 *         JSON_FILE_NAME = Name of .JSON file in the output directory, which
	 *             contains prediction responses for the video time segment.
	 *         STATUS = "OK" if prediction completed successfully, or an error code
	 *             with message otherwise. If STATUS is not "OK" then the .JSON file
	 *             for that line may not exist or be empty.
	 *         Each .JSON file, assuming STATUS is "OK", will contain a list of
	 *         AnnotationPayload protos in JSON format, which are the predictions
	 *         for the video time segment the file is assigned to in the
	 *         video_classification.csv. All AnnotationPayload protos will have
	 *         video_classification field set, and will be sorted by
	 *         video_classification.type field (note that the returned types are
	 *         governed by `classifaction_types` parameter in
	 *         PredictService.BatchPredictRequest.params).
	 *  *  For Video Object Tracking:
	 *         In the created directory a video_object_tracking.csv file will be
	 *         created, and multiple files video_object_trackinng_1.json,
	 *         video_object_trackinng_2.json,..., video_object_trackinng_N.json,
	 *         where N is the number of requests in the input (i.e. the number of
	 *         lines in given CSV(s)).
	 *         The format of video_object_tracking.csv is:
	 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS
	 *         where:
	 *         GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1
	 *             the prediction input lines (i.e. video_object_tracking.csv has
	 *             precisely the same number of lines as the prediction input had.)
	 *         JSON_FILE_NAME = Name of .JSON file in the output directory, which
	 *             contains prediction responses for the video time segment.
	 *         STATUS = "OK" if prediction completed successfully, or an error
	 *             code with message otherwise. If STATUS is not "OK" then the .JSON
	 *             file for that line may not exist or be empty.
	 *         Each .JSON file, assuming STATUS is "OK", will contain a list of
	 *         AnnotationPayload protos in JSON format, which are the predictions
	 *         for each frame of the video time segment the file is assigned to in
	 *         video_object_tracking.csv. All AnnotationPayload protos will have
	 *         video_object_tracking field set.
	 *  *  For Text Classification:
	 *         In the created directory files `text_classification_1.jsonl`,
	 *         `text_classification_2.jsonl`,...,`text_classification_N.jsonl`
	 *         will be created, where N may be 1, and depends on the
	 *         total number of inputs and annotations found.
	 *         Each .JSONL file will contain, per line, a JSON representation of a
	 *         proto that wraps input text snippet or input text file and a list of
	 *         zero or more AnnotationPayload protos (called annotations), which
	 *         have classification detail populated. A single text snippet or file
	 *         will be listed only once with all its annotations, and its
	 *         annotations will never be split across files.
	 *         If prediction for any text snippet or file failed (partially or
	 *         completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,...,
	 *         `errors_N.jsonl` files will be created (N depends on total number of
	 *         failed predictions). These files will have a JSON representation of a
	 *         proto that wraps input text snippet or input text file followed by
	 *         exactly one
	 * [`google.rpc.Status`](https:
	 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
	 *         containing only `code` and `message`.
	 *  *  For Text Sentiment:
	 *         In the created directory files `text_sentiment_1.jsonl`,
	 *         `text_sentiment_2.jsonl`,...,`text_sentiment_N.jsonl`
	 *         will be created, where N may be 1, and depends on the
	 *         total number of inputs and annotations found.
	 *         Each .JSONL file will contain, per line, a JSON representation of a
	 *         proto that wraps input text snippet or input text file and a list of
	 *         zero or more AnnotationPayload protos (called annotations), which
	 *         have text_sentiment detail populated. A single text snippet or file
	 *         will be listed only once with all its annotations, and its
	 *         annotations will never be split across files.
	 *         If prediction for any text snippet or file failed (partially or
	 *         completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,...,
	 *         `errors_N.jsonl` files will be created (N depends on total number of
	 *         failed predictions). These files will have a JSON representation of a
	 *         proto that wraps input text snippet or input text file followed by
	 *         exactly one
	 * [`google.rpc.Status`](https:
	 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
	 *         containing only `code` and `message`.
	 *   *  For Text Extraction:
	 *         In the created directory files `text_extraction_1.jsonl`,
	 *         `text_extraction_2.jsonl`,...,`text_extraction_N.jsonl`
	 *         will be created, where N may be 1, and depends on the
	 *         total number of inputs and annotations found.
	 *         The contents of these .JSONL file(s) depend on whether the input
	 *         used inline text, or documents.
	 *         If input was inline, then each .JSONL file will contain, per line,
	 *           a JSON representation of a proto that wraps given in request text
	 *           snippet's "id" (if specified), followed by input text snippet,
	 *           and a list of zero or more
	 *           AnnotationPayload protos (called annotations), which have
	 *           text_extraction detail populated. A single text snippet will be
	 *           listed only once with all its annotations, and its annotations will
	 *           never be split across files.
	 *         If input used documents, then each .JSONL file will contain, per
	 *           line, a JSON representation of a proto that wraps given in request
	 *           document proto, followed by its OCR-ed representation in the form
	 *           of a text snippet, finally followed by a list of zero or more
	 *           AnnotationPayload protos (called annotations), which have
	 *           text_extraction detail populated and refer, via their indices, to
	 *           the OCR-ed text snippet. A single document (and its text snippet)
	 *           will be listed only once with all its annotations, and its
	 *           annotations will never be split across files.
	 *         If prediction for any text snippet failed (partially or completely),
	 *         then additional `errors_1.jsonl`, `errors_2.jsonl`,...,
	 *         `errors_N.jsonl` files will be created (N depends on total number of
	 *         failed predictions). These files will have a JSON representation of a
	 *         proto that wraps either the "id" : "<id_value>" (in case of inline)
	 *         or the document proto (in case of document) but here followed by
	 *         exactly one
	 * [`google.rpc.Status`](https:
	 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
	 *         containing only `code` and `message`.
	 *  *  For Tables:
	 *         Output depends on whether
	 * gcs_destination
	 *         or
	 * bigquery_destination
	 *         is set (either is allowed).
	 *         GCS case:
	 *           In the created directory files `tables_1.csv`, `tables_2.csv`,...,
	 *           `tables_N.csv` will be created, where N may be 1, and depends on
	 *           the total number of the successfully predicted rows.
	 *           For all CLASSIFICATION
	 * prediction_type-s:
	 *             Each .csv file will contain a header, listing all columns'
	 * display_name-s
	 *             given on input followed by M target column names in the format of
	 * "<target_column_specs
	 * display_name>_<target
	 *             value>_score" where M is the number of distinct target values,
	 *             i.e. number of distinct values in the target column of the table
	 *             used to train the model. Subsequent lines will contain the
	 *             respective values of successfully predicted rows, with the last,
	 *             i.e. the target, columns having the corresponding prediction
	 *             scores.
	 *           For REGRESSION and FORECASTING
	 * prediction_type-s:
	 *             Each .csv file will contain a header, listing all columns'
	 *             display_name-s given
	 *             on input followed by the predicted target column with name in the
	 *             format of
	 * "predicted_<target_column_specs
	 * display_name>"
	 *             Subsequent lines will contain the respective values of
	 *             successfully predicted rows, with the last, i.e. the target,
	 *             column having the predicted target value.
	 *             If prediction for any rows failed, then an additional
	 *             `errors_1.csv`, `errors_2.csv`,..., `errors_N.csv` will be
	 *             created (N depends on total number of failed rows). These files
	 *             will have analogous format as `tables_*.csv`, but always with a
	 *             single target column having
	 * [`google.rpc.Status`](https:
	 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
	 *             represented as a JSON string, and containing only `code` and
	 *             `message`.
	 *         BigQuery case:
	 * bigquery_destination
	 *           pointing to a BigQuery project must be set. In the given project a
	 *           new dataset will be created with name
	 *           `prediction_<model-display-name>_<timestamp-of-prediction-call>`
	 *           where <model-display-name> will be made
	 *           BigQuery-dataset-name compatible (e.g. most special characters will
	 *           become underscores), and timestamp will be in
	 *           YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset
	 *           two tables will be created, `predictions`, and `errors`.
	 *           The `predictions` table's column names will be the input columns'
	 * display_name-s
	 *           followed by the target column with name in the format of
	 * "predicted_<target_column_specs
	 * display_name>"
	 *           The input feature columns will contain the respective values of
	 *           successfully predicted rows, with the target column having an
	 *           ARRAY of
	 * AnnotationPayloads,
	 *           represented as STRUCT-s, containing
	 *           TablesAnnotation.
	 *           The `errors` table contains rows for which the prediction has
	 *           failed, it has analogous input columns while the target column name
	 *           is in the format of
	 * "errors_<target_column_specs
	 * display_name>",
	 *           and as a value has
	 * [`google.rpc.Status`](https:
	 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
	 *           represented as a STRUCT, and containing only `code` and `message`.
	 */
	export interface BatchPredictOutputConfig {

		/** The BigQuery location for the output content. */
		bigqueryDestination?: BigQueryDestination;

		/** The Google Cloud Storage location where the output is to be written to. */
		gcsDestination?: GcsDestination;
	}


	/** The BigQuery location for the output content. */
	export interface BigQueryDestination {

		/**
		 * Required. BigQuery URI to a project, up to 2000 characters long.
		 * Accepted forms:
		 * *  BigQuery path e.g. bq://projectId
		 */
		outputUri?: string;
	}


	/** The Google Cloud Storage location where the output is to be written to. */
	export interface GcsDestination {

		/**
		 * Required. Google Cloud Storage URI to output directory, up to 2000
		 * characters long.
		 * Accepted forms:
		 * * Prefix path: gs://bucket/directory
		 * The requesting user must have write permission to the bucket.
		 * The directory is created if it doesn't exist.
		 */
		outputUriPrefix?: string;
	}


	/** Request message for PredictionService.BatchPredict. */
	export interface BatchPredictRequest {

		/**
		 * Input configuration for BatchPredict Action.
		 * The format of input depends on the ML problem of the model used for
		 * prediction. As input source the
		 * gcs_source
		 * is expected, unless specified otherwise.
		 * The formats are represented in EBNF with commas being literal and with
		 * non-terminal symbols defined near the end of this comment. The formats
		 * are:
		 * *  For Image Classification:
		 * CSV file(s) with each line having just a single column:
		 * GCS_FILE_PATH
		 * which leads to image of up to 30MB in size. Supported
		 * extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in
		 * the Batch predict output.
		 * Three sample rows:
		 * gs://folder/image1.jpeg
		 * gs://folder/image2.gif
		 * gs://folder/image3.png
		 * *  For Image Object Detection:
		 * CSV file(s) with each line having just a single column:
		 * GCS_FILE_PATH
		 * which leads to image of up to 30MB in size. Supported
		 * extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in
		 * the Batch predict output.
		 * Three sample rows:
		 * gs://folder/image1.jpeg
		 * gs://folder/image2.gif
		 * gs://folder/image3.png
		 * *  For Video Classification:
		 * CSV file(s) with each line in format:
		 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END
		 * GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h
		 * duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
		 * TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
		 * length of the video, and end has to be after the start.
		 * Three sample rows:
		 * gs://folder/video1.mp4,10,40
		 * gs://folder/video1.mp4,20,60
		 * gs://folder/vid2.mov,0,inf
		 * *  For Video Object Tracking:
		 * CSV file(s) with each line in format:
		 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END
		 * GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h
		 * duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
		 * TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
		 * length of the video, and end has to be after the start.
		 * Three sample rows:
		 * gs://folder/video1.mp4,10,240
		 * gs://folder/video1.mp4,300,360
		 * gs://folder/vid2.mov,0,inf
		 * *  For Text Classification:
		 * CSV file(s) with each line having just a single column:
		 * GCS_FILE_PATH | TEXT_SNIPPET
		 * Any given text file can have size upto 128kB.
		 * Any given text snippet content must have 60,000 characters or less.
		 * Three sample rows:
		 * gs://folder/text1.txt
		 * "Some text content to predict"
		 * gs://folder/text3.pdf
		 * Supported file extensions: .txt, .pdf
		 * *  For Text Sentiment:
		 * CSV file(s) with each line having just a single column:
		 * GCS_FILE_PATH | TEXT_SNIPPET
		 * Any given text file can have size upto 128kB.
		 * Any given text snippet content must have 500 characters or less.
		 * Three sample rows:
		 * gs://folder/text1.txt
		 * "Some text content to predict"
		 * gs://folder/text3.pdf
		 * Supported file extensions: .txt, .pdf
		 * * For Text Extraction
		 * .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or
		 * as documents (for a single BatchPredict call only one of the these
		 * formats may be used).
		 * The in-line .JSONL file(s) contain per line a proto that
		 * wraps a temporary user-assigned TextSnippet ID (string up to 2000
		 * characters long) called "id", a TextSnippet proto (in
		 * json representation) and zero or more TextFeature protos. Any given
		 * text snippet content must have 30,000 characters or less, and also
		 * be UTF-8 NFC encoded (ASCII already is). The IDs provided should be
		 * unique.
		 * The document .JSONL file(s) contain, per line, a proto that wraps a
		 * Document proto with input_config set. Only PDF documents are
		 * supported now, and each document must be up to 2MB large.
		 * Any given .JSONL file must be 100MB or smaller, and no more than 20
		 * files may be given.
		 * Sample in-line JSON Lines file (presented here with artificial line
		 * breaks, but the only actual line break is denoted by \n):
		 * {
		 * "id": "my_first_id",
		 * "text_snippet": { "content": "dog car cat"},
		 * "text_features": [
		 * {
		 * "text_segment": {"start_offset": 4, "end_offset": 6},
		 * "structural_type": PARAGRAPH,
		 * "bounding_poly": {
		 * "normalized_vertices": [
		 * {"x": 0.1, "y": 0.1},
		 * {"x": 0.1, "y": 0.3},
		 * {"x": 0.3, "y": 0.3},
		 * {"x": 0.3, "y": 0.1},
		 * ]
		 * },
		 * }
		 * ],
		 * }\n
		 * {
		 * "id": "2",
		 * "text_snippet": {
		 * "content": "An elaborate content",
		 * "mime_type": "text/plain"
		 * }
		 * }
		 * Sample document JSON Lines file (presented here with artificial line
		 * breaks, but the only actual line break is denoted by \n).:
		 * {
		 * "document": {
		 * "input_config": {
		 * "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ]
		 * }
		 * }
		 * }
		 * }\n
		 * {
		 * "document": {
		 * "input_config": {
		 * "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ]
		 * }
		 * }
		 * }
		 * }
		 * *  For Tables:
		 * Either
		 * gcs_source or
		 * bigquery_source.
		 * GCS case:
		 * CSV file(s), each by itself 10GB or smaller and total size must be
		 * 100GB or smaller, where first file must have a header containing
		 * column names. If the first row of a subsequent file is the same as
		 * the header, then it is also treated as a header. All other rows
		 * contain values for the corresponding columns.
		 * The column names must contain the model's
		 * input_feature_column_specs'
		 * display_name-s
		 * (order doesn't matter). The columns corresponding to the model's
		 * input feature column specs must contain values compatible with the
		 * column spec's data types. Prediction on all the rows, i.e. the CSV
		 * lines, will be attempted. For FORECASTING
		 * prediction_type:
		 * all columns having
		 * TIME_SERIES_AVAILABLE_PAST_ONLY
		 * type will be ignored.
		 * First three sample rows of a CSV file:
		 * "First Name","Last Name","Dob","Addresses"
		 * "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]"
		 * "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]}
		 * BigQuery case:
		 * An URI of a BigQuery table. The user data size of the BigQuery
		 * table must be 100GB or smaller.
		 * The column names must contain the model's
		 * input_feature_column_specs'
		 * display_name-s
		 * (order doesn't matter). The columns corresponding to the model's
		 * input feature column specs must contain values compatible with the
		 * column spec's data types. Prediction on all the rows of the table
		 * will be attempted. For FORECASTING
		 * prediction_type:
		 * all columns having
		 * TIME_SERIES_AVAILABLE_PAST_ONLY
		 * type will be ignored.
		 * Definitions:
		 * GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi".
		 * TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within
		 * double quotes ("")
		 * TIME_SEGMENT_START = TIME_OFFSET
		 * Expresses a beginning, inclusive, of a time segment
		 * within an
		 * example that has a time dimension (e.g. video).
		 * TIME_SEGMENT_END = TIME_OFFSET
		 * Expresses an end, exclusive, of a time segment within
		 * an example that has a time dimension (e.g. video).
		 * TIME_OFFSET = A number of seconds as measured from the start of an
		 * example (e.g. video). Fractions are allowed, up to a
		 * microsecond precision. "inf" is allowed and it means the end
		 * of the example.
		 * Errors:
		 * If any of the provided CSV files can't be parsed or if more than certain
		 * percent of CSV rows cannot be processed then the operation fails and
		 * prediction does not happen. Regardless of overall success or failure the
		 * per-row failures, up to a certain count cap, will be listed in
		 * Operation.metadata.partial_failures.
		 */
		inputConfig?: BatchPredictInputConfig;

		/**
		 * Output configuration for BatchPredict Action.
		 * As destination the
		 * gcs_destination
		 * must be set unless specified otherwise for a domain. If gcs_destination is
		 * set then in the given directory a new directory is created. Its name
		 * will be
		 * "prediction-<model-display-name>-<timestamp-of-prediction-call>",
		 * where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. The contents
		 * of it depends on the ML problem the predictions are made for.
		 * *  For Image Classification:
		 * In the created directory files `image_classification_1.jsonl`,
		 * `image_classification_2.jsonl`,...,`image_classification_N.jsonl`
		 * will be created, where N may be 1, and depends on the
		 * total number of the successfully predicted images and annotations.
		 * A single image will be listed only once with all its annotations,
		 * and its annotations will never be split across files.
		 * Each .JSONL file will contain, per line, a JSON representation of a
		 * proto that wraps image's "ID" : "<id_value>" followed by a list of
		 * zero or more AnnotationPayload protos (called annotations), which
		 * have classification detail populated.
		 * If prediction for any image failed (partially or completely), then an
		 * additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl`
		 * files will be created (N depends on total number of failed
		 * predictions). These files will have a JSON representation of a proto
		 * that wraps the same "ID" : "<id_value>" but here followed by
		 * exactly one
		 * [`google.rpc.Status`](https:
		 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
		 * containing only `code` and `message`fields.
		 * *  For Image Object Detection:
		 * In the created directory files `image_object_detection_1.jsonl`,
		 * `image_object_detection_2.jsonl`,...,`image_object_detection_N.jsonl`
		 * will be created, where N may be 1, and depends on the
		 * total number of the successfully predicted images and annotations.
		 * Each .JSONL file will contain, per line, a JSON representation of a
		 * proto that wraps image's "ID" : "<id_value>" followed by a list of
		 * zero or more AnnotationPayload protos (called annotations), which
		 * have image_object_detection detail populated. A single image will
		 * be listed only once with all its annotations, and its annotations
		 * will never be split across files.
		 * If prediction for any image failed (partially or completely), then
		 * additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl`
		 * files will be created (N depends on total number of failed
		 * predictions). These files will have a JSON representation of a proto
		 * that wraps the same "ID" : "<id_value>" but here followed by
		 * exactly one
		 * [`google.rpc.Status`](https:
		 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
		 * containing only `code` and `message`fields.
		 * *  For Video Classification:
		 * In the created directory a video_classification.csv file, and a .JSON
		 * file per each video classification requested in the input (i.e. each
		 * line in given CSV(s)), will be created.
		 * The format of video_classification.csv is:
		 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS
		 * where:
		 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1
		 * the prediction input lines (i.e. video_classification.csv has
		 * precisely the same number of lines as the prediction input had.)
		 * JSON_FILE_NAME = Name of .JSON file in the output directory, which
		 * contains prediction responses for the video time segment.
		 * STATUS = "OK" if prediction completed successfully, or an error code
		 * with message otherwise. If STATUS is not "OK" then the .JSON file
		 * for that line may not exist or be empty.
		 * Each .JSON file, assuming STATUS is "OK", will contain a list of
		 * AnnotationPayload protos in JSON format, which are the predictions
		 * for the video time segment the file is assigned to in the
		 * video_classification.csv. All AnnotationPayload protos will have
		 * video_classification field set, and will be sorted by
		 * video_classification.type field (note that the returned types are
		 * governed by `classifaction_types` parameter in
		 * PredictService.BatchPredictRequest.params).
		 * *  For Video Object Tracking:
		 * In the created directory a video_object_tracking.csv file will be
		 * created, and multiple files video_object_trackinng_1.json,
		 * video_object_trackinng_2.json,..., video_object_trackinng_N.json,
		 * where N is the number of requests in the input (i.e. the number of
		 * lines in given CSV(s)).
		 * The format of video_object_tracking.csv is:
		 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS
		 * where:
		 * GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1
		 * the prediction input lines (i.e. video_object_tracking.csv has
		 * precisely the same number of lines as the prediction input had.)
		 * JSON_FILE_NAME = Name of .JSON file in the output directory, which
		 * contains prediction responses for the video time segment.
		 * STATUS = "OK" if prediction completed successfully, or an error
		 * code with message otherwise. If STATUS is not "OK" then the .JSON
		 * file for that line may not exist or be empty.
		 * Each .JSON file, assuming STATUS is "OK", will contain a list of
		 * AnnotationPayload protos in JSON format, which are the predictions
		 * for each frame of the video time segment the file is assigned to in
		 * video_object_tracking.csv. All AnnotationPayload protos will have
		 * video_object_tracking field set.
		 * *  For Text Classification:
		 * In the created directory files `text_classification_1.jsonl`,
		 * `text_classification_2.jsonl`,...,`text_classification_N.jsonl`
		 * will be created, where N may be 1, and depends on the
		 * total number of inputs and annotations found.
		 * Each .JSONL file will contain, per line, a JSON representation of a
		 * proto that wraps input text snippet or input text file and a list of
		 * zero or more AnnotationPayload protos (called annotations), which
		 * have classification detail populated. A single text snippet or file
		 * will be listed only once with all its annotations, and its
		 * annotations will never be split across files.
		 * If prediction for any text snippet or file failed (partially or
		 * completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,...,
		 * `errors_N.jsonl` files will be created (N depends on total number of
		 * failed predictions). These files will have a JSON representation of a
		 * proto that wraps input text snippet or input text file followed by
		 * exactly one
		 * [`google.rpc.Status`](https:
		 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
		 * containing only `code` and `message`.
		 * *  For Text Sentiment:
		 * In the created directory files `text_sentiment_1.jsonl`,
		 * `text_sentiment_2.jsonl`,...,`text_sentiment_N.jsonl`
		 * will be created, where N may be 1, and depends on the
		 * total number of inputs and annotations found.
		 * Each .JSONL file will contain, per line, a JSON representation of a
		 * proto that wraps input text snippet or input text file and a list of
		 * zero or more AnnotationPayload protos (called annotations), which
		 * have text_sentiment detail populated. A single text snippet or file
		 * will be listed only once with all its annotations, and its
		 * annotations will never be split across files.
		 * If prediction for any text snippet or file failed (partially or
		 * completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,...,
		 * `errors_N.jsonl` files will be created (N depends on total number of
		 * failed predictions). These files will have a JSON representation of a
		 * proto that wraps input text snippet or input text file followed by
		 * exactly one
		 * [`google.rpc.Status`](https:
		 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
		 * containing only `code` and `message`.
		 * *  For Text Extraction:
		 * In the created directory files `text_extraction_1.jsonl`,
		 * `text_extraction_2.jsonl`,...,`text_extraction_N.jsonl`
		 * will be created, where N may be 1, and depends on the
		 * total number of inputs and annotations found.
		 * The contents of these .JSONL file(s) depend on whether the input
		 * used inline text, or documents.
		 * If input was inline, then each .JSONL file will contain, per line,
		 * a JSON representation of a proto that wraps given in request text
		 * snippet's "id" (if specified), followed by input text snippet,
		 * and a list of zero or more
		 * AnnotationPayload protos (called annotations), which have
		 * text_extraction detail populated. A single text snippet will be
		 * listed only once with all its annotations, and its annotations will
		 * never be split across files.
		 * If input used documents, then each .JSONL file will contain, per
		 * line, a JSON representation of a proto that wraps given in request
		 * document proto, followed by its OCR-ed representation in the form
		 * of a text snippet, finally followed by a list of zero or more
		 * AnnotationPayload protos (called annotations), which have
		 * text_extraction detail populated and refer, via their indices, to
		 * the OCR-ed text snippet. A single document (and its text snippet)
		 * will be listed only once with all its annotations, and its
		 * annotations will never be split across files.
		 * If prediction for any text snippet failed (partially or completely),
		 * then additional `errors_1.jsonl`, `errors_2.jsonl`,...,
		 * `errors_N.jsonl` files will be created (N depends on total number of
		 * failed predictions). These files will have a JSON representation of a
		 * proto that wraps either the "id" : "<id_value>" (in case of inline)
		 * or the document proto (in case of document) but here followed by
		 * exactly one
		 * [`google.rpc.Status`](https:
		 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
		 * containing only `code` and `message`.
		 * *  For Tables:
		 * Output depends on whether
		 * gcs_destination
		 * or
		 * bigquery_destination
		 * is set (either is allowed).
		 * GCS case:
		 * In the created directory files `tables_1.csv`, `tables_2.csv`,...,
		 * `tables_N.csv` will be created, where N may be 1, and depends on
		 * the total number of the successfully predicted rows.
		 * For all CLASSIFICATION
		 * prediction_type-s:
		 * Each .csv file will contain a header, listing all columns'
		 * display_name-s
		 * given on input followed by M target column names in the format of
		 * "<target_column_specs
		 * display_name>_<target
		 * value>_score" where M is the number of distinct target values,
		 * i.e. number of distinct values in the target column of the table
		 * used to train the model. Subsequent lines will contain the
		 * respective values of successfully predicted rows, with the last,
		 * i.e. the target, columns having the corresponding prediction
		 * scores.
		 * For REGRESSION and FORECASTING
		 * prediction_type-s:
		 * Each .csv file will contain a header, listing all columns'
		 * display_name-s given
		 * on input followed by the predicted target column with name in the
		 * format of
		 * "predicted_<target_column_specs
		 * display_name>"
		 * Subsequent lines will contain the respective values of
		 * successfully predicted rows, with the last, i.e. the target,
		 * column having the predicted target value.
		 * If prediction for any rows failed, then an additional
		 * `errors_1.csv`, `errors_2.csv`,..., `errors_N.csv` will be
		 * created (N depends on total number of failed rows). These files
		 * will have analogous format as `tables_*.csv`, but always with a
		 * single target column having
		 * [`google.rpc.Status`](https:
		 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
		 * represented as a JSON string, and containing only `code` and
		 * `message`.
		 * BigQuery case:
		 * bigquery_destination
		 * pointing to a BigQuery project must be set. In the given project a
		 * new dataset will be created with name
		 * `prediction_<model-display-name>_<timestamp-of-prediction-call>`
		 * where <model-display-name> will be made
		 * BigQuery-dataset-name compatible (e.g. most special characters will
		 * become underscores), and timestamp will be in
		 * YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset
		 * two tables will be created, `predictions`, and `errors`.
		 * The `predictions` table's column names will be the input columns'
		 * display_name-s
		 * followed by the target column with name in the format of
		 * "predicted_<target_column_specs
		 * display_name>"
		 * The input feature columns will contain the respective values of
		 * successfully predicted rows, with the target column having an
		 * ARRAY of
		 * AnnotationPayloads,
		 * represented as STRUCT-s, containing
		 * TablesAnnotation.
		 * The `errors` table contains rows for which the prediction has
		 * failed, it has analogous input columns while the target column name
		 * is in the format of
		 * "errors_<target_column_specs
		 * display_name>",
		 * and as a value has
		 * [`google.rpc.Status`](https:
		 * //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto)
		 * represented as a STRUCT, and containing only `code` and `message`.
		 */
		outputConfig?: BatchPredictOutputConfig;

		/**
		 * Required. Additional domain-specific parameters for the predictions, any string must
		 * be up to 25000 characters long.
		 * *  For Text Classification:
		 * `score_threshold` - (float) A value from 0.0 to 1.0. When the model
		 * makes predictions for a text snippet, it will only produce results
		 * that have at least this confidence score. The default is 0.5.
		 * *  For Image Classification:
		 * `score_threshold` - (float) A value from 0.0 to 1.0. When the model
		 * makes predictions for an image, it will only produce results that
		 * have at least this confidence score. The default is 0.5.
		 * *  For Image Object Detection:
		 * `score_threshold` - (float) When Model detects objects on the image,
		 * it will only produce bounding boxes which have at least this
		 * confidence score. Value in 0 to 1 range, default is 0.5.
		 * `max_bounding_box_count` - (int64) No more than this number of bounding
		 * boxes will be produced per image. Default is 100, the
		 * requested value may be limited by server.
		 * *  For Video Classification :
		 * `score_threshold` - (float) A value from 0.0 to 1.0. When the model
		 * makes predictions for a video, it will only produce results that
		 * have at least this confidence score. The default is 0.5.
		 * `segment_classification` - (boolean) Set to true to request
		 * segment-level classification. AutoML Video Intelligence returns
		 * labels and their confidence scores for the entire segment of the
		 * video that user specified in the request configuration.
		 * The default is "true".
		 * `shot_classification` - (boolean) Set to true to request shot-level
		 * classification. AutoML Video Intelligence determines the boundaries
		 * for each camera shot in the entire segment of the video that user
		 * specified in the request configuration. AutoML Video Intelligence
		 * then returns labels and their confidence scores for each detected
		 * shot, along with the start and end time of the shot.
		 * WARNING: Model evaluation is not done for this classification type,
		 * the quality of it depends on training data, but there are no metrics
		 * provided to describe that quality. The default is "false".
		 * `1s_interval_classification` - (boolean) Set to true to request
		 * classification for a video at one-second intervals. AutoML Video
		 * Intelligence returns labels and their confidence scores for each
		 * second of the entire segment of the video that user specified in the
		 * request configuration.
		 * WARNING: Model evaluation is not done for this classification
		 * type, the quality of it depends on training data, but there are no
		 * metrics provided to describe that quality. The default is
		 * "false".
		 * *  For Tables:
		 * feature_imp<span>ortan</span>ce - (boolean) Whether feature importance
		 * should be populated in the returned TablesAnnotations. The
		 * default is false.
		 * *  For Video Object Tracking:
		 * `score_threshold` - (float) When Model detects objects on video frames,
		 * it will only produce bounding boxes which have at least this
		 * confidence score. Value in 0 to 1 range, default is 0.5.
		 * `max_bounding_box_count` - (int64) No more than this number of bounding
		 * boxes will be returned per frame. Default is 100, the requested
		 * value may be limited by server.
		 * `min_bounding_box_size` - (float) Only bounding boxes with shortest edge
		 * at least that long as a relative value of video frame size will be
		 * returned. Value in 0 to 1 range. Default is 0.
		 */
		params?: {[id: string]: string };
	}


	/**
	 * Result of the Batch Predict. This message is returned in
	 * response of the operation returned
	 * by the PredictionService.BatchPredict.
	 */
	export interface BatchPredictResult {

		/**
		 * Additional domain-specific prediction response metadata.
		 * *  For Image Object Detection:
		 * `max_bounding_box_count` - (int64) At most that many bounding boxes per
		 * image could have been returned.
		 * *  For Video Object Tracking:
		 * `max_bounding_box_count` - (int64) At most that many bounding boxes per
		 * frame could have been returned.
		 */
		metadata?: {[id: string]: string };
	}


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource.
		 * `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is
		 * on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone
		 * who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google
		 * account. For example, `alice@example.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service
		 * account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group.
		 * For example, `admins@example.com`.
		 * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a user that has been recently deleted. For
		 * example, `alice@example.com?uid=123456789012345678901`. If the user is
		 * recovered, this value reverts to `user:{emailid}` and the recovered user
		 * retains the role in the binding.
		 * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
		 * unique identifier) representing a service account that has been recently
		 * deleted. For example,
		 * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
		 * If the service account is undeleted, this value reverts to
		 * `serviceAccount:{emailid}` and the undeleted service account retains the
		 * role in the binding.
		 * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a Google group that has been recently
		 * deleted. For example, `admins@example.com?uid=123456789012345678901`. If
		 * the group is recovered, this value reverts to `group:{emailid}` and the
		 * recovered group retains the role in the binding.
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the
		 * users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string>;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string;
	}


	/**
	 * Represents a textual expression in the Common Expression Language (CEL)
	 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
	 * are documented at https://github.com/google/cel-spec.
	 * Example (Comparison):
	 *     title: "Summary size limit"
	 *     description: "Determines if a summary is less than 100 chars"
	 *     expression: "document.summary.size() < 100"
	 * Example (Equality):
	 *     title: "Requestor is owner"
	 *     description: "Determines if requestor is the document owner"
	 *     expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 *     title: "Public documents"
	 *     description: "Determine whether the document should be publicly visible"
	 *     expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 *     title: "Notification string"
	 *     description: "Create a notification string with a timestamp."
	 *     expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression
	 * are determined by the service that evaluates it. See the service
	 * documentation for additional information.
	 */
	export interface Expr {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string;
	}


	/**
	 * Bounding box matching model metrics for a single intersection-over-union
	 * threshold and multiple label match confidence thresholds.
	 */
	export interface BoundingBoxMetricsEntry {

		/**
		 * Output only. Metrics for each label-match confidence_threshold from
		 * 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is
		 * derived from them.
		 */
		confidenceMetricsEntries?: Array<BoundingBoxMetricsEntryConfidenceMetricsEntry>;

		/**
		 * Output only. The intersection-over-union threshold value used to compute
		 * this metrics entry.
		 */
		iouThreshold?: number;

		/** Output only. The mean average precision, most often close to au_prc. */
		meanAveragePrecision?: number;
	}


	/** Metrics for a single confidence threshold. */
	export interface BoundingBoxMetricsEntryConfidenceMetricsEntry {

		/** Output only. The confidence threshold value used to compute the metrics. */
		confidenceThreshold?: number;

		/** Output only. The harmonic mean of recall and precision. */
		f1Score?: number;

		/** Output only. Precision under the given confidence threshold. */
		precision?: number;

		/** Output only. Recall under the given confidence threshold. */
		recall?: number;
	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}


	/**
	 * Model evaluation metrics for classification problems.
	 * Note: For Video Classification this metrics only describe quality of the
	 * Video Classification predictions of "segment_classification" type.
	 */
	export interface ClassificationEvaluationMetrics {

		/** Output only. The annotation spec ids used for this evaluation. */
		annotationSpecId?: Array<string>;

		/**
		 * Output only. The Area Under Precision-Recall Curve metric. Micro-averaged
		 * for the overall evaluation.
		 */
		auPrc?: number;

		/**
		 * Output only. The Area Under Receiver Operating Characteristic curve metric.
		 * Micro-averaged for the overall evaluation.
		 */
		auRoc?: number;

		/**
		 * Output only. The Area Under Precision-Recall Curve metric based on priors.
		 * Micro-averaged for the overall evaluation.
		 * Deprecated.
		 */
		baseAuPrc?: number;

		/**
		 * Output only. Metrics for each confidence_threshold in
		 * 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and
		 * position_threshold = INT32_MAX_VALUE.
		 * ROC and precision-recall curves, and other aggregated metrics are derived
		 * from them. The confidence metrics entries may also be supplied for
		 * additional values of position_threshold, but from these no aggregated
		 * metrics are computed.
		 */
		confidenceMetricsEntry?: Array<ClassificationEvaluationMetricsConfidenceMetricsEntry>;

		/** Confusion matrix of the model running the classification. */
		confusionMatrix?: ConfusionMatrix;

		/** Output only. The Log Loss metric. */
		logLoss?: number;
	}


	/** Metrics for a single confidence threshold. */
	export interface ClassificationEvaluationMetricsConfidenceMetricsEntry {

		/**
		 * Output only. Metrics are computed with an assumption that the model
		 * never returns predictions with score lower than this value.
		 */
		confidenceThreshold?: number;

		/** Output only. The harmonic mean of recall and precision. */
		f1Score?: number;

		/** Output only. The harmonic mean of recall_at1 and precision_at1. */
		f1ScoreAt1?: number;

		/**
		 * Output only. The number of ground truth labels that are not matched
		 * by a model created label.
		 */
		falseNegativeCount?: string;

		/**
		 * Output only. The number of model created labels that do not match a
		 * ground truth label.
		 */
		falsePositiveCount?: string;

		/** Output only. False Positive Rate for the given confidence threshold. */
		falsePositiveRate?: number;

		/**
		 * Output only. The False Positive Rate when only considering the label that
		 * has the highest prediction score and not below the confidence threshold
		 * for each example.
		 */
		falsePositiveRateAt1?: number;

		/**
		 * Output only. Metrics are computed with an assumption that the model
		 * always returns at most this many predictions (ordered by their score,
		 * descendingly), but they all still need to meet the confidence_threshold.
		 */
		positionThreshold?: number;

		/** Output only. Precision for the given confidence threshold. */
		precision?: number;

		/**
		 * Output only. The precision when only considering the label that has the
		 * highest prediction score and not below the confidence threshold for each
		 * example.
		 */
		precisionAt1?: number;

		/**
		 * Output only. Recall (True Positive Rate) for the given confidence
		 * threshold.
		 */
		recall?: number;

		/**
		 * Output only. The Recall (True Positive Rate) when only considering the
		 * label that has the highest prediction score and not below the confidence
		 * threshold for each example.
		 */
		recallAt1?: number;

		/**
		 * Output only. The number of labels that were not created by the model,
		 * but if they would, they would not match a ground truth label.
		 */
		trueNegativeCount?: string;

		/**
		 * Output only. The number of model created labels that match a ground truth
		 * label.
		 */
		truePositiveCount?: string;
	}


	/** Confusion matrix of the model running the classification. */
	export interface ConfusionMatrix {

		/**
		 * Output only. IDs of the annotation specs used in the confusion matrix.
		 * For Tables CLASSIFICATION
		 * prediction_type
		 * only list of annotation_spec_display_name-s is populated.
		 */
		annotationSpecId?: Array<string>;

		/**
		 * Output only. Display name of the annotation specs used in the confusion
		 * matrix, as they were at the moment of the evaluation. For Tables
		 * CLASSIFICATION
		 * prediction_type-s,
		 * distinct values of the target column at the moment of the model
		 * evaluation are populated here.
		 */
		displayName?: Array<string>;

		/**
		 * Output only. Rows in the confusion matrix. The number of rows is equal to
		 * the size of `annotation_spec_id`.
		 * `row[i].example_count[j]` is the number of examples that have ground
		 * truth of the `annotation_spec_id[i]` and are predicted as
		 * `annotation_spec_id[j]` by the model being evaluated.
		 */
		row?: Array<ClassificationEvaluationMetricsConfusionMatrixRow>;
	}


	/** Output only. A row in the confusion matrix. */
	export interface ClassificationEvaluationMetricsConfusionMatrixRow {

		/**
		 * Output only. Value of the specific cell in the confusion matrix.
		 * The number of values each row has (i.e. the length of the row) is equal
		 * to the length of the `annotation_spec_id` field or, if that one is not
		 * populated, length of the display_name field.
		 */
		exampleCount?: Array<number>;
	}


	/**
	 * A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were
	 * given on import .
	 * Used by:
	 *   *   Tables
	 */
	export interface ColumnSpec {

		/** The data statistics of a series of values that share the same DataType. */
		dataStats?: DataStats;

		/**
		 * Indicated the type of data that can be stored in a structured data entity
		 * (e.g. a table).
		 */
		dataType?: DataType;

		/**
		 * Output only. The name of the column to show in the interface. The name can
		 * be up to 100 characters long and can consist only of ASCII Latin letters
		 * A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and
		 * must start with a letter or a digit.
		 */
		displayName?: string;

		/**
		 * Used to perform consistent read-modify-write updates. If not set, a blind
		 * "overwrite" update happens.
		 */
		etag?: string;

		/**
		 * Output only. The resource name of the column specs.
		 * Form:
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`
		 */
		name?: string;

		/** Deprecated. */
		topCorrelatedColumns?: Array<CorrelatedColumn>;
	}


	/**
	 * Indicated the type of data that can be stored in a structured data entity
	 * (e.g. a table).
	 */
	export interface DataType {

		/**
		 * Indicated the type of data that can be stored in a structured data entity
		 * (e.g. a table).
		 */
		listElementType?: DataType;

		/**
		 * If true, this DataType can also be `NULL`. In .CSV files `NULL` value is
		 * expressed as an empty string.
		 */
		nullable?: boolean;

		/** `StructType` defines the DataType-s of a STRUCT type. */
		structType?: StructType;

		/**
		 * If type_code == TIMESTAMP
		 * then `time_format` provides the format in which that time field is
		 * expressed. The time_format must either be one of:
		 * * `UNIX_SECONDS`
		 * * `UNIX_MILLISECONDS`
		 * * `UNIX_MICROSECONDS`
		 * * `UNIX_NANOSECONDS`
		 * (for respectively number of seconds, milliseconds, microseconds and
		 * nanoseconds since start of the Unix epoch);
		 * or be written in `strftime` syntax. If time_format is not set, then the
		 * default format as described on the type_code is used.
		 */
		timeFormat?: string;

		/** Required. The TypeCode for this type. */
		typeCode?: DataTypeTypeCode;
	}


	/** `StructType` defines the DataType-s of a STRUCT type. */
	export interface StructType {

		/**
		 * Unordered map of struct field names to their data types.
		 * Fields cannot be added or removed via Update. Their names and
		 * data types are still mutable.
		 */
		fields?: {[id: string]: DataType };
	}

	export enum DataTypeTypeCode { TYPE_CODE_UNSPECIFIED = 0, FLOAT64 = 1, TIMESTAMP = 2, STRING = 3, ARRAY = 4, STRUCT = 5, CATEGORY = 6 }


	/**
	 * Identifies the table's column, and its correlation with the column this
	 * ColumnSpec describes.
	 */
	export interface CorrelatedColumn {

		/**
		 * The column_spec_id of the correlated column, which belongs to the same
		 * table as the in-context column.
		 */
		columnSpecId?: string;

		/**
		 * A correlation statistics between two series of DataType values. The series
		 * may have differing DataType-s, but within a single series the DataType must
		 * be the same.
		 */
		correlationStats?: CorrelationStats;
	}


	/**
	 * A correlation statistics between two series of DataType values. The series
	 * may have differing DataType-s, but within a single series the DataType must
	 * be the same.
	 */
	export interface CorrelationStats {

		/** The correlation value using the Cramer's V measure. */
		cramersV?: number;
	}


	/** Details of CreateModel operation. */
	export interface CreateModelOperationMetadata {
	}


	/**
	 * A workspace for solving a single, particular machine learning (ML) problem.
	 * A workspace contains examples that may be annotated.
	 */
	export interface Dataset {

		/** Output only. Timestamp when this dataset was created. */
		createTime?: string;

		/**
		 * User-provided description of the dataset. The description can be up to
		 * 25000 characters long.
		 */
		description?: string;

		/**
		 * Required. The name of the dataset to show in the interface. The name can be
		 * up to 32 characters long and can consist only of ASCII Latin letters A-Z
		 * and a-z, underscores
		 * (_), and ASCII digits 0-9.
		 */
		displayName?: string;

		/**
		 * Used to perform consistent read-modify-write updates. If not set, a blind
		 * "overwrite" update happens.
		 */
		etag?: string;

		/** Output only. The number of examples in the dataset. */
		exampleCount?: number;

		/** Dataset metadata that is specific to image classification. */
		imageClassificationDatasetMetadata?: ImageClassificationDatasetMetadata;

		/** Dataset metadata specific to image object detection. */
		imageObjectDetectionDatasetMetadata?: ImageObjectDetectionDatasetMetadata;

		/**
		 * Output only. The resource name of the dataset.
		 * Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`
		 */
		name?: string;

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

		/**
		 * Dataset metadata specific to video classification.
		 * All Video Classification datasets are treated as multi label.
		 */
		videoClassificationDatasetMetadata?: VideoClassificationDatasetMetadata;

		/** Dataset metadata specific to video object tracking. */
		videoObjectTrackingDatasetMetadata?: VideoObjectTrackingDatasetMetadata;
	}


	/** Dataset metadata that is specific to image classification. */
	export interface ImageClassificationDatasetMetadata {

		/** Required. Type of the classification problem. */
		classificationType?: ImageClassificationDatasetMetadataClassificationType;
	}

	export enum ImageClassificationDatasetMetadataClassificationType { CLASSIFICATION_TYPE_UNSPECIFIED = 0, MULTICLASS = 1, MULTILABEL = 2 }


	/** Dataset metadata specific to image object detection. */
	export interface ImageObjectDetectionDatasetMetadata {
	}


	/** Metadata for a dataset used for AutoML Tables. */
	export interface TablesDatasetMetadata {

		/**
		 * column_spec_id of the primary table column which specifies a possible ML
		 * use of the row, i.e. the column will be used to split the rows into TRAIN,
		 * VALIDATE and TEST sets.
		 * Required type: STRING.
		 * This column, if set, must either have all of `TRAIN`, `VALIDATE`, `TEST`
		 * among its values, or only have `TEST`, `UNASSIGNED` values. In the latter
		 * case the rows with `UNASSIGNED` value will be assigned by AutoML. Note
		 * that if a given ml use distribution makes it impossible to create a "good"
		 * model, that call will error describing the issue.
		 * If both this column_spec_id and primary table's time_column_spec_id are not
		 * set, then all rows are treated as `UNASSIGNED`.
		 * NOTE: Updates of this field will instantly affect any other users
		 * concurrently working with the dataset.
		 */
		mlUseColumnSpecId?: string;

		/** Output only. The table_spec_id of the primary table of this dataset. */
		primaryTableSpecId?: string;

		/**
		 * Output only. The most recent timestamp when target_column_correlations
		 * field and all descendant ColumnSpec.data_stats and
		 * ColumnSpec.top_correlated_columns fields were last (re-)generated. Any
		 * changes that happened to the dataset afterwards are not reflected in these
		 * fields values. The regeneration happens in the background on a best effort
		 * basis.
		 */
		statsUpdateTime?: string;

		/**
		 * Output only. Correlations between
		 * TablesDatasetMetadata.target_column_spec_id,
		 * and other columns of the
		 * TablesDatasetMetadataprimary_table.
		 * Only set if the target column is set. Mapping from other column spec id to
		 * its CorrelationStats with the target column.
		 * This field may be stale, see the stats_update_time field for
		 * for the timestamp at which these stats were last updated.
		 */
		targetColumnCorrelations?: {[id: string]: CorrelationStats };

		/**
		 * column_spec_id of the primary table's column that should be used as the
		 * training & prediction target.
		 * This column must be non-nullable and have one of following data types
		 * (otherwise model creation will error):
		 * * CATEGORY
		 * * FLOAT64
		 * If the type is CATEGORY , only up to
		 * 100 unique values may exist in that column across all rows.
		 * NOTE: Updates of this field will instantly affect any other users
		 * concurrently working with the dataset.
		 */
		targetColumnSpecId?: string;

		/**
		 * column_spec_id of the primary table's column that should be used as the
		 * weight column, i.e. the higher the value the more important the row will be
		 * during model training.
		 * Required type: FLOAT64.
		 * Allowed values: 0 to 10000, inclusive on both ends; 0 means the row is
		 * ignored for training.
		 * If not set all rows are assumed to have equal weight of 1.
		 * NOTE: Updates of this field will instantly affect any other users
		 * concurrently working with the dataset.
		 */
		weightColumnSpecId?: string;
	}


	/** Dataset metadata for classification. */
	export interface TextClassificationDatasetMetadata {

		/** Required. Type of the classification problem. */
		classificationType?: ImageClassificationDatasetMetadataClassificationType;
	}


	/** Dataset metadata that is specific to text extraction */
	export interface TextExtractionDatasetMetadata {
	}


	/** Dataset metadata for text sentiment. */
	export interface TextSentimentDatasetMetadata {

		/**
		 * Required. A sentiment is expressed as an integer ordinal, where higher value
		 * means a more positive sentiment. The range of sentiments that will be used
		 * is between 0 and sentiment_max (inclusive on both ends), and all the values
		 * in the range must be represented in the dataset before a model can be
		 * created.
		 * sentiment_max value must be between 1 and 10 (inclusive).
		 */
		sentimentMax?: number;
	}


	/** Dataset metadata that is specific to translation. */
	export interface TranslationDatasetMetadata {

		/** Required. The BCP-47 language code of the source language. */
		sourceLanguageCode?: string;

		/** Required. The BCP-47 language code of the target language. */
		targetLanguageCode?: string;
	}


	/**
	 * Dataset metadata specific to video classification.
	 * All Video Classification datasets are treated as multi label.
	 */
	export interface VideoClassificationDatasetMetadata {
	}


	/** Dataset metadata specific to video object tracking. */
	export interface VideoObjectTrackingDatasetMetadata {
	}


	/** Details of operations that perform deletes of any entities. */
	export interface DeleteOperationMetadata {
	}


	/** Details of DeployModel operation. */
	export interface DeployModelOperationMetadata {
	}


	/** Request message for AutoMl.DeployModel. */
	export interface DeployModelRequest {

		/** Model deployment metadata specific to Image Classification. */
		imageClassificationModelDeploymentMetadata?: ImageClassificationModelDeploymentMetadata;

		/** Model deployment metadata specific to Image Object Detection. */
		imageObjectDetectionModelDeploymentMetadata?: ImageObjectDetectionModelDeploymentMetadata;
	}


	/** Model deployment metadata specific to Image Classification. */
	export interface ImageClassificationModelDeploymentMetadata {

		/**
		 * Input only. The number of nodes to deploy the model on. A node is an
		 * abstraction of a machine resource, which can handle online prediction QPS
		 * as given in the model's
		 * node_qps.
		 * Must be between 1 and 100, inclusive on both ends.
		 */
		nodeCount?: string;
	}


	/** Model deployment metadata specific to Image Object Detection. */
	export interface ImageObjectDetectionModelDeploymentMetadata {

		/**
		 * Input only. The number of nodes to deploy the model on. A node is an
		 * abstraction of a machine resource, which can handle online prediction QPS
		 * as given in the model's
		 * qps_per_node.
		 * Must be between 1 and 100, inclusive on both ends.
		 */
		nodeCount?: string;
	}


	/** A structured text document e.g. a PDF. */
	export interface Document {

		/** Message that describes dimension of a document. */
		documentDimensions?: DocumentDimensions;

		/** A representation of a text snippet. */
		documentText?: TextSnippet;

		/** Input configuration of a Document. */
		inputConfig?: DocumentInputConfig;

		/**
		 * Describes the layout of the document.
		 * Sorted by page_number.
		 */
		layout?: Array<Layout>;

		/** Number of pages in the document. */
		pageCount?: number;
	}


	/** Message that describes dimension of a document. */
	export interface DocumentDimensions {

		/** Height value of the document, works together with the unit. */
		height?: number;

		/** Unit of the dimension. */
		unit?: DocumentDimensionsUnit;

		/** Width value of the document, works together with the unit. */
		width?: number;
	}

	export enum DocumentDimensionsUnit { DOCUMENT_DIMENSION_UNIT_UNSPECIFIED = 0, INCH = 1, CENTIMETER = 2, POINT = 3 }


	/** Input configuration of a Document. */
	export interface DocumentInputConfig {

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;
	}


	/** Describes the layout information of a text_segment in the document. */
	export interface Layout {

		/**
		 * A bounding polygon of a detected object on a plane.
		 * On output both vertices and normalized_vertices are provided.
		 * The polygon is formed by connecting vertices in the order they are listed.
		 */
		boundingPoly?: BoundingPoly;

		/**
		 * Page number of the text_segment in the original document, starts
		 * from 1.
		 */
		pageNumber?: number;

		/** A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding. */
		textSegment?: TextSegment;

		/** The type of the text_segment in document. */
		textSegmentType?: LayoutTextSegmentType;
	}

	export enum LayoutTextSegmentType { TEXT_SEGMENT_TYPE_UNSPECIFIED = 0, TOKEN = 1, PARAGRAPH = 2, FORM_FIELD = 3, FORM_FIELD_NAME = 4, FORM_FIELD_CONTENTS = 5, TABLE = 6, TABLE_HEADER = 7, TABLE_ROW = 8, TABLE_CELL = 9 }


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


	/** Example data used for training or prediction. */
	export interface ExamplePayload {

		/** A structured text document e.g. a PDF. */
		document?: Document;

		/**
		 * A representation of an image.
		 * Only images up to 30MB in size are supported.
		 */
		image?: Image;

		/** A representation of a row in a relational table. */
		row?: Row;

		/** A representation of a text snippet. */
		textSnippet?: TextSnippet;
	}


	/**
	 * A representation of an image.
	 * Only images up to 30MB in size are supported.
	 */
	export interface Image {

		/**
		 * Image content represented as a stream of bytes.
		 * Note: As with all `bytes` fields, protobuffers use a pure binary
		 * representation, whereas JSON representations use base64.
		 */
		imageBytes?: string;

		/**
		 * Input configuration for ImportData Action.
		 * The format of input depends on dataset_metadata the Dataset into which
		 * the import is happening has. As input source the
		 * gcs_source
		 * is expected, unless specified otherwise. Additionally any input .CSV file
		 * by itself must be 100MB or smaller, unless specified otherwise.
		 * If an "example" file (that is, image, video etc.) with identical content
		 * (even if it had different GCS_FILE_PATH) is mentioned multiple times, then
		 * its label, bounding boxes etc. are appended. The same file should be always
		 * provided with the same ML_USE and GCS_FILE_PATH, if it is not, then
		 * these values are nondeterministically selected from the given ones.
		 * The formats are represented in EBNF with commas being literal and with
		 * non-terminal symbols defined near the end of this comment. The formats are:
		 * *  For Image Classification:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH,LABEL,LABEL,...
		 * GCS_FILE_PATH leads to image of up to 30MB in size. Supported
		 * extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO
		 * For MULTICLASS classification type, at most one LABEL is allowed
		 * per image. If an image has not yet been labeled, then it should be
		 * mentioned just once with no LABEL.
		 * Some sample rows:
		 * TRAIN,gs://folder/image1.jpg,daisy
		 * TEST,gs://folder/image2.jpg,dandelion,tulip,rose
		 * UNASSIGNED,gs://folder/image3.jpg,daisy
		 * UNASSIGNED,gs://folder/image4.jpg
		 * *  For Image Object Detection:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,)
		 * GCS_FILE_PATH leads to image of up to 30MB in size. Supported
		 * extensions: .JPEG, .GIF, .PNG.
		 * Each image is assumed to be exhaustively labeled. The minimum
		 * allowed BOUNDING_BOX edge length is 0.01, and no more than 500
		 * BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined
		 * per line). If an image has not yet been labeled, then it should be
		 * mentioned just once with no LABEL and the ",,,,,,," in place of the
		 * BOUNDING_BOX. For images which are known to not contain any
		 * bounding boxes, they should be labelled explictly as
		 * "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the
		 * BOUNDING_BOX.
		 * Sample rows:
		 * TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,,
		 * TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,,
		 * UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3
		 * TEST,gs://folder/im3.png,,,,,,,,,
		 * TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,,
		 * *  For Video Classification:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH
		 * where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH
		 * should lead to another .csv file which describes examples that have
		 * given ML_USE, using the following row format:
		 * GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,)
		 * Here GCS_FILE_PATH leads to a video of up to 50GB in size and up
		 * to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
		 * TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
		 * length of the video, and end has to be after the start. Any segment
		 * of a video which has one or more labels on it, is considered a
		 * hard negative for all other labels. Any segment with no labels on
		 * it is considered to be unknown. If a whole video is unknown, then
		 * it shuold be mentioned just once with ",," in place of LABEL,
		 * TIME_SEGMENT_START,TIME_SEGMENT_END.
		 * Sample top level CSV file:
		 * TRAIN,gs://folder/train_videos.csv
		 * TEST,gs://folder/test_videos.csv
		 * UNASSIGNED,gs://folder/other_videos.csv
		 * Sample rows of a CSV file for a particular ML_USE:
		 * gs://folder/video1.avi,car,120,180.000021
		 * gs://folder/video1.avi,bike,150,180.000021
		 * gs://folder/vid2.avi,car,0,60.5
		 * gs://folder/vid3.avi,,,
		 * *  For Video Object Tracking:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH
		 * where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH
		 * should lead to another .csv file which describes examples that have
		 * given ML_USE, using one of the following row format:
		 * GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX
		 * or
		 * GCS_FILE_PATH,,,,,,,,,,
		 * Here GCS_FILE_PATH leads to a video of up to 50GB in size and up
		 * to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
		 * Providing INSTANCE_IDs can help to obtain a better model. When
		 * a specific labeled entity leaves the video frame, and shows up
		 * afterwards it is not required, albeit preferable, that the same
		 * INSTANCE_ID is given to it.
		 * TIMESTAMP must be within the length of the video, the
		 * BOUNDING_BOX is assumed to be drawn on the closest video's frame
		 * to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected
		 * to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per
		 * frame are allowed. If a whole video is unknown, then it should be
		 * mentioned just once with ",,,,,,,,,," in place of LABEL,
		 * [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX.
		 * Sample top level CSV file:
		 * TRAIN,gs://folder/train_videos.csv
		 * TEST,gs://folder/test_videos.csv
		 * UNASSIGNED,gs://folder/other_videos.csv
		 * Seven sample rows of a CSV file for a particular ML_USE:
		 * gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9
		 * gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9
		 * gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3
		 * gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,,
		 * gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,,
		 * gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,,
		 * gs://folder/video2.avi,,,,,,,,,,,
		 * *  For Text Extraction:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH
		 * GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which
		 * either imports text in-line or as documents. Any given
		 * .JSONL file must be 100MB or smaller.
		 * The in-line .JSONL file contains, per line, a proto that wraps a
		 * TextSnippet proto (in json representation) followed by one or more
		 * AnnotationPayload protos (called annotations), which have
		 * display_name and text_extraction detail populated. The given text
		 * is expected to be annotated exhaustively, for example, if you look
		 * for animals and text contains "dolphin" that is not labeled, then
		 * "dolphin" is assumed to not be an animal. Any given text snippet
		 * content must be 10KB or smaller, and also be UTF-8 NFC encoded
		 * (ASCII already is).
		 * The document .JSONL file contains, per line, a proto that wraps a
		 * Document proto. The Document proto must have either document_text
		 * or input_config set. In document_text case, the Document proto may
		 * also contain the spatial information of the document, including
		 * layout, document dimension and page number. In input_config case,
		 * only PDF documents are supported now, and each document may be up
		 * to 2MB large. Currently, annotations on documents cannot be
		 * specified at import.
		 * Three sample CSV rows:
		 * TRAIN,gs://folder/file1.jsonl
		 * VALIDATE,gs://folder/file2.jsonl
		 * TEST,gs://folder/file3.jsonl
		 * Sample in-line JSON Lines file for entity extraction (presented here
		 * with artificial line breaks, but the only actual line break is
		 * denoted by \n).:
		 * {
		 * "document": {
		 * "document_text": {"content": "dog cat"}
		 * "layout": [
		 * {
		 * "text_segment": {
		 * "start_offset": 0,
		 * "end_offset": 3,
		 * },
		 * "page_number": 1,
		 * "bounding_poly": {
		 * "normalized_vertices": [
		 * {"x": 0.1, "y": 0.1},
		 * {"x": 0.1, "y": 0.3},
		 * {"x": 0.3, "y": 0.3},
		 * {"x": 0.3, "y": 0.1},
		 * ],
		 * },
		 * "text_segment_type": TOKEN,
		 * },
		 * {
		 * "text_segment": {
		 * "start_offset": 4,
		 * "end_offset": 7,
		 * },
		 * "page_number": 1,
		 * "bounding_poly": {
		 * "normalized_vertices": [
		 * {"x": 0.4, "y": 0.1},
		 * {"x": 0.4, "y": 0.3},
		 * {"x": 0.8, "y": 0.3},
		 * {"x": 0.8, "y": 0.1},
		 * ],
		 * },
		 * "text_segment_type": TOKEN,
		 * }
		 * ],
		 * "document_dimensions": {
		 * "width": 8.27,
		 * "height": 11.69,
		 * "unit": INCH,
		 * }
		 * "page_count": 1,
		 * },
		 * "annotations": [
		 * {
		 * "display_name": "animal",
		 * "text_extraction": {"text_segment": {"start_offset": 0,
		 * "end_offset": 3}}
		 * },
		 * {
		 * "display_name": "animal",
		 * "text_extraction": {"text_segment": {"start_offset": 4,
		 * "end_offset": 7}}
		 * }
		 * ],
		 * }\n
		 * {
		 * "text_snippet": {
		 * "content": "This dog is good."
		 * },
		 * "annotations": [
		 * {
		 * "display_name": "animal",
		 * "text_extraction": {
		 * "text_segment": {"start_offset": 5, "end_offset": 8}
		 * }
		 * }
		 * ]
		 * }
		 * Sample document JSON Lines file (presented here with artificial line
		 * breaks, but the only actual line break is denoted by \n).:
		 * {
		 * "document": {
		 * "input_config": {
		 * "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ]
		 * }
		 * }
		 * }
		 * }\n
		 * {
		 * "document": {
		 * "input_config": {
		 * "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ]
		 * }
		 * }
		 * }
		 * }
		 * *  For Text Classification:
		 * CSV file(s) with each line in format:
		 * ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,...
		 * TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If
		 * the column content is a valid gcs file path, i.e. prefixed by
		 * "gs://", it will be treated as a GCS_FILE_PATH, else if the content
		 * is enclosed within double quotes (""), it is
		 * treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path
		 * must lead to a .txt file with UTF-8 encoding, for example,
		 * "gs://folder/content.txt", and the content in it is extracted
		 * as a text snippet. In TEXT_SNIPPET case, the column content
		 * excluding quotes is treated as to be imported text snippet. In
		 * both cases, the text snippet/file size must be within 128kB.
		 * Maximum 100 unique labels are allowed per CSV row.
		 * Sample rows:
		 * TRAIN,"They have bad food and very rude",RudeService,BadFood
		 * TRAIN,gs://folder/content.txt,SlowService
		 * TEST,"Typically always bad service there.",RudeService
		 * VALIDATE,"Stomach ache to go.",BadFood
		 * *  For Text Sentiment:
		 * CSV file(s) with each line in format:
		 * ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT
		 * TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If
		 * the column content is a valid gcs file path, that is, prefixed by
		 * "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated
		 * as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path
		 * must lead to a .txt file with UTF-8 encoding, for example,
		 * "gs://folder/content.txt", and the content in it is extracted
		 * as a text snippet. In TEXT_SNIPPET case, the column content itself
		 * is treated as to be imported text snippet. In both cases, the
		 * text snippet must be up to 500 characters long.
		 * Sample rows:
		 * TRAIN,"@freewrytin this is way too good for your product",2
		 * TRAIN,"I need this product so bad",3
		 * TEST,"Thank you for this product.",4
		 * VALIDATE,gs://folder/content.txt,2
		 * *  For Tables:
		 * Either
		 * gcs_source or
		 * bigquery_source
		 * can be used. All inputs is concatenated into a single
		 * primary_table
		 * For gcs_source:
		 * CSV file(s), where the first row of the first file is the header,
		 * containing unique column names. If the first row of a subsequent
		 * file is the same as the header, then it is also treated as a
		 * header. All other rows contain values for the corresponding
		 * columns.
		 * Each .CSV file by itself must be 10GB or smaller, and their total
		 * size must be 100GB or smaller.
		 * First three sample rows of a CSV file:
		 * "Id","First Name","Last Name","Dob","Addresses"
		 * "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]"
		 * "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]}
		 * For bigquery_source:
		 * An URI of a BigQuery table. The user data size of the BigQuery
		 * table must be 100GB or smaller.
		 * An imported table must have between 2 and 1,000 columns, inclusive,
		 * and between 1000 and 100,000,000 rows, inclusive. There are at most 5
		 * import data running in parallel.
		 * Definitions:
		 * ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED"
		 * Describes how the given example (file) should be used for model
		 * training. "UNASSIGNED" can be used when user has no preference.
		 * GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png".
		 * LABEL = A display name of an object on an image, video etc., e.g. "dog".
		 * Must be up to 32 characters long and can consist only of ASCII
		 * Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9.
		 * For each label an AnnotationSpec is created which display_name
		 * becomes the label; AnnotationSpecs are given back in predictions.
		 * INSTANCE_ID = A positive integer that identifies a specific instance of a
		 * labeled entity on an example. Used e.g. to track two cars on
		 * a video while being able to tell apart which one is which.
		 * BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,,
		 * A rectangle parallel to the frame of the example (image,
		 * video). If 4 vertices are given they are connected by edges
		 * in the order provided, if 2 are given they are recognized
		 * as diagonally opposite vertices of the rectangle.
		 * VERTEX = COORDINATE,COORDINATE
		 * First coordinate is horizontal (x), the second is vertical (y).
		 * COORDINATE = A float in 0 to 1 range, relative to total length of
		 * image or video in given dimension. For fractions the
		 * leading non-decimal 0 can be omitted (i.e. 0.3 = .3).
		 * Point 0,0 is in top left.
		 * TIME_SEGMENT_START = TIME_OFFSET
		 * Expresses a beginning, inclusive, of a time segment
		 * within an example that has a time dimension
		 * (e.g. video).
		 * TIME_SEGMENT_END = TIME_OFFSET
		 * Expresses an end, exclusive, of a time segment within
		 * an example that has a time dimension (e.g. video).
		 * TIME_OFFSET = A number of seconds as measured from the start of an
		 * example (e.g. video). Fractions are allowed, up to a
		 * microsecond precision. "inf" is allowed, and it means the end
		 * of the example.
		 * TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within
		 * double quotes ("").
		 * SENTIMENT = An integer between 0 and
		 * Dataset.text_sentiment_dataset_metadata.sentiment_max
		 * (inclusive). Describes the ordinal of the sentiment - higher
		 * value means a more positive sentiment. All the values are
		 * completely relative, i.e. neither 0 needs to mean a negative or
		 * neutral sentiment nor sentiment_max needs to mean a positive one
		 * - it is just required that 0 is the least positive sentiment
		 * in the data, and sentiment_max is the  most positive one.
		 * The SENTIMENT shouldn't be confused with "score" or "magnitude"
		 * from the previous Natural Language Sentiment Analysis API.
		 * All SENTIMENT values between 0 and sentiment_max must be
		 * represented in the imported data. On prediction the same 0 to
		 * sentiment_max range will be used. The difference between
		 * neighboring sentiment values needs not to be uniform, e.g. 1 and
		 * 2 may be similar whereas the difference between 2 and 3 may be
		 * huge.
		 * Errors:
		 * If any of the provided CSV files can't be parsed or if more than certain
		 * percent of CSV rows cannot be processed then the operation fails and
		 * nothing is imported. Regardless of overall success or failure the per-row
		 * failures, up to a certain count cap, is listed in
		 * Operation.metadata.partial_failures.
		 */
		inputConfig?: InputConfig;

		/** Output only. HTTP URI to the thumbnail image. */
		thumbnailUri?: string;
	}


	/**
	 * Input configuration for ImportData Action.
	 * The format of input depends on dataset_metadata the Dataset into which
	 * the import is happening has. As input source the
	 * gcs_source
	 * is expected, unless specified otherwise. Additionally any input .CSV file
	 * by itself must be 100MB or smaller, unless specified otherwise.
	 * If an "example" file (that is, image, video etc.) with identical content
	 * (even if it had different GCS_FILE_PATH) is mentioned multiple times, then
	 * its label, bounding boxes etc. are appended. The same file should be always
	 * provided with the same ML_USE and GCS_FILE_PATH, if it is not, then
	 * these values are nondeterministically selected from the given ones.
	 * The formats are represented in EBNF with commas being literal and with
	 * non-terminal symbols defined near the end of this comment. The formats are:
	 *  *  For Image Classification:
	 *         CSV file(s) with each line in format:
	 *           ML_USE,GCS_FILE_PATH,LABEL,LABEL,...
	 *           GCS_FILE_PATH leads to image of up to 30MB in size. Supported
	 *           extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO
	 *           For MULTICLASS classification type, at most one LABEL is allowed
	 *           per image. If an image has not yet been labeled, then it should be
	 *           mentioned just once with no LABEL.
	 *         Some sample rows:
	 *           TRAIN,gs://folder/image1.jpg,daisy
	 *           TEST,gs://folder/image2.jpg,dandelion,tulip,rose
	 *           UNASSIGNED,gs://folder/image3.jpg,daisy
	 *           UNASSIGNED,gs://folder/image4.jpg
	 *  *  For Image Object Detection:
	 *         CSV file(s) with each line in format:
	 *           ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,)
	 *           GCS_FILE_PATH leads to image of up to 30MB in size. Supported
	 *           extensions: .JPEG, .GIF, .PNG.
	 *           Each image is assumed to be exhaustively labeled. The minimum
	 *           allowed BOUNDING_BOX edge length is 0.01, and no more than 500
	 *           BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined
	 *           per line). If an image has not yet been labeled, then it should be
	 *           mentioned just once with no LABEL and the ",,,,,,," in place of the
	 *           BOUNDING_BOX. For images which are known to not contain any
	 *           bounding boxes, they should be labelled explictly as
	 *           "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the
	 *           BOUNDING_BOX.
	 *         Sample rows:
	 *           TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,,
	 *           TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,,
	 *           UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3
	 *           TEST,gs://folder/im3.png,,,,,,,,,
	 *           TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,,
	 *  *  For Video Classification:
	 *         CSV file(s) with each line in format:
	 *           ML_USE,GCS_FILE_PATH
	 *           where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH
	 *           should lead to another .csv file which describes examples that have
	 *           given ML_USE, using the following row format:
	 *           GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,)
	 *           Here GCS_FILE_PATH leads to a video of up to 50GB in size and up
	 *           to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
	 *           TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
	 *           length of the video, and end has to be after the start. Any segment
	 *           of a video which has one or more labels on it, is considered a
	 *           hard negative for all other labels. Any segment with no labels on
	 *           it is considered to be unknown. If a whole video is unknown, then
	 *           it shuold be mentioned just once with ",," in place of LABEL,
	 *           TIME_SEGMENT_START,TIME_SEGMENT_END.
	 *         Sample top level CSV file:
	 *           TRAIN,gs://folder/train_videos.csv
	 *           TEST,gs://folder/test_videos.csv
	 *           UNASSIGNED,gs://folder/other_videos.csv
	 *         Sample rows of a CSV file for a particular ML_USE:
	 *           gs://folder/video1.avi,car,120,180.000021
	 *           gs://folder/video1.avi,bike,150,180.000021
	 *           gs://folder/vid2.avi,car,0,60.5
	 *           gs://folder/vid3.avi,,,
	 *  *  For Video Object Tracking:
	 *         CSV file(s) with each line in format:
	 *           ML_USE,GCS_FILE_PATH
	 *           where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH
	 *           should lead to another .csv file which describes examples that have
	 *           given ML_USE, using one of the following row format:
	 *           GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX
	 *           or
	 *           GCS_FILE_PATH,,,,,,,,,,
	 *           Here GCS_FILE_PATH leads to a video of up to 50GB in size and up
	 *           to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
	 *           Providing INSTANCE_IDs can help to obtain a better model. When
	 *           a specific labeled entity leaves the video frame, and shows up
	 *           afterwards it is not required, albeit preferable, that the same
	 *           INSTANCE_ID is given to it.
	 *           TIMESTAMP must be within the length of the video, the
	 *           BOUNDING_BOX is assumed to be drawn on the closest video's frame
	 *           to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected
	 *           to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per
	 *           frame are allowed. If a whole video is unknown, then it should be
	 *           mentioned just once with ",,,,,,,,,," in place of LABEL,
	 *           [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX.
	 *         Sample top level CSV file:
	 *           TRAIN,gs://folder/train_videos.csv
	 *           TEST,gs://folder/test_videos.csv
	 *           UNASSIGNED,gs://folder/other_videos.csv
	 *         Seven sample rows of a CSV file for a particular ML_USE:
	 *           gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9
	 *           gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9
	 *           gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3
	 *           gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,,
	 *           gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,,
	 *           gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,,
	 *           gs://folder/video2.avi,,,,,,,,,,,
	 *  *  For Text Extraction:
	 *         CSV file(s) with each line in format:
	 *           ML_USE,GCS_FILE_PATH
	 *           GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which
	 *           either imports text in-line or as documents. Any given
	 *           .JSONL file must be 100MB or smaller.
	 *           The in-line .JSONL file contains, per line, a proto that wraps a
	 *           TextSnippet proto (in json representation) followed by one or more
	 *           AnnotationPayload protos (called annotations), which have
	 *           display_name and text_extraction detail populated. The given text
	 *           is expected to be annotated exhaustively, for example, if you look
	 *           for animals and text contains "dolphin" that is not labeled, then
	 *           "dolphin" is assumed to not be an animal. Any given text snippet
	 *           content must be 10KB or smaller, and also be UTF-8 NFC encoded
	 *           (ASCII already is).
	 *           The document .JSONL file contains, per line, a proto that wraps a
	 *           Document proto. The Document proto must have either document_text
	 *           or input_config set. In document_text case, the Document proto may
	 *           also contain the spatial information of the document, including
	 *           layout, document dimension and page number. In input_config case,
	 *           only PDF documents are supported now, and each document may be up
	 *           to 2MB large. Currently, annotations on documents cannot be
	 *           specified at import.
	 *         Three sample CSV rows:
	 *           TRAIN,gs://folder/file1.jsonl
	 *           VALIDATE,gs://folder/file2.jsonl
	 *           TEST,gs://folder/file3.jsonl
	 *         Sample in-line JSON Lines file for entity extraction (presented here
	 *         with artificial line breaks, but the only actual line break is
	 *         denoted by \n).:
	 *           {
	 *             "document": {
	 *               "document_text": {"content": "dog cat"}
	 *               "layout": [
	 *                 {
	 *                   "text_segment": {
	 *                     "start_offset": 0,
	 *                     "end_offset": 3,
	 *                   },
	 *                   "page_number": 1,
	 *                   "bounding_poly": {
	 *                     "normalized_vertices": [
	 *                       {"x": 0.1, "y": 0.1},
	 *                       {"x": 0.1, "y": 0.3},
	 *                       {"x": 0.3, "y": 0.3},
	 *                       {"x": 0.3, "y": 0.1},
	 *                     ],
	 *                   },
	 *                   "text_segment_type": TOKEN,
	 *                 },
	 *                 {
	 *                   "text_segment": {
	 *                     "start_offset": 4,
	 *                     "end_offset": 7,
	 *                   },
	 *                   "page_number": 1,
	 *                   "bounding_poly": {
	 *                     "normalized_vertices": [
	 *                       {"x": 0.4, "y": 0.1},
	 *                       {"x": 0.4, "y": 0.3},
	 *                       {"x": 0.8, "y": 0.3},
	 *                       {"x": 0.8, "y": 0.1},
	 *                     ],
	 *                   },
	 *                   "text_segment_type": TOKEN,
	 *                 }
	 *               ],
	 *               "document_dimensions": {
	 *                 "width": 8.27,
	 *                 "height": 11.69,
	 *                 "unit": INCH,
	 *               }
	 *               "page_count": 1,
	 *             },
	 *             "annotations": [
	 *               {
	 *                 "display_name": "animal",
	 *                 "text_extraction": {"text_segment": {"start_offset": 0,
	 *                 "end_offset": 3}}
	 *               },
	 *               {
	 *                 "display_name": "animal",
	 *                 "text_extraction": {"text_segment": {"start_offset": 4,
	 *                 "end_offset": 7}}
	 *               }
	 *             ],
	 *           }\n
	 *           {
	 *              "text_snippet": {
	 *                "content": "This dog is good."
	 *              },
	 *              "annotations": [
	 *                {
	 *                  "display_name": "animal",
	 *                  "text_extraction": {
	 *                    "text_segment": {"start_offset": 5, "end_offset": 8}
	 *                  }
	 *                }
	 *              ]
	 *           }
	 *         Sample document JSON Lines file (presented here with artificial line
	 *         breaks, but the only actual line break is denoted by \n).:
	 *           {
	 *             "document": {
	 *               "input_config": {
	 *                 "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ]
	 *                 }
	 *               }
	 *             }
	 *           }\n
	 *           {
	 *             "document": {
	 *               "input_config": {
	 *                 "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ]
	 *                 }
	 *               }
	 *             }
	 *           }
	 *  *  For Text Classification:
	 *         CSV file(s) with each line in format:
	 *           ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,...
	 *           TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If
	 *           the column content is a valid gcs file path, i.e. prefixed by
	 *           "gs://", it will be treated as a GCS_FILE_PATH, else if the content
	 *           is enclosed within double quotes (""), it is
	 *           treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path
	 *           must lead to a .txt file with UTF-8 encoding, for example,
	 *           "gs://folder/content.txt", and the content in it is extracted
	 *           as a text snippet. In TEXT_SNIPPET case, the column content
	 *           excluding quotes is treated as to be imported text snippet. In
	 *           both cases, the text snippet/file size must be within 128kB.
	 *           Maximum 100 unique labels are allowed per CSV row.
	 *         Sample rows:
	 *           TRAIN,"They have bad food and very rude",RudeService,BadFood
	 *           TRAIN,gs://folder/content.txt,SlowService
	 *           TEST,"Typically always bad service there.",RudeService
	 *           VALIDATE,"Stomach ache to go.",BadFood
	 *  *  For Text Sentiment:
	 *         CSV file(s) with each line in format:
	 *           ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT
	 *           TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If
	 *           the column content is a valid gcs file path, that is, prefixed by
	 *           "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated
	 *           as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path
	 *           must lead to a .txt file with UTF-8 encoding, for example,
	 *           "gs://folder/content.txt", and the content in it is extracted
	 *           as a text snippet. In TEXT_SNIPPET case, the column content itself
	 *           is treated as to be imported text snippet. In both cases, the
	 *           text snippet must be up to 500 characters long.
	 *         Sample rows:
	 *           TRAIN,"@freewrytin this is way too good for your product",2
	 *           TRAIN,"I need this product so bad",3
	 *           TEST,"Thank you for this product.",4
	 *           VALIDATE,gs://folder/content.txt,2
	 *   *  For Tables:
	 *         Either
	 *         gcs_source or
	 * bigquery_source
	 *         can be used. All inputs is concatenated into a single
	 * primary_table
	 *         For gcs_source:
	 *           CSV file(s), where the first row of the first file is the header,
	 *           containing unique column names. If the first row of a subsequent
	 *           file is the same as the header, then it is also treated as a
	 *           header. All other rows contain values for the corresponding
	 *           columns.
	 *           Each .CSV file by itself must be 10GB or smaller, and their total
	 *           size must be 100GB or smaller.
	 *           First three sample rows of a CSV file:
	 *           "Id","First Name","Last Name","Dob","Addresses"
	 * "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]"
	 * "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]}
	 *         For bigquery_source:
	 *           An URI of a BigQuery table. The user data size of the BigQuery
	 *           table must be 100GB or smaller.
	 *         An imported table must have between 2 and 1,000 columns, inclusive,
	 *         and between 1000 and 100,000,000 rows, inclusive. There are at most 5
	 *         import data running in parallel.
	 *  Definitions:
	 *  ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED"
	 *           Describes how the given example (file) should be used for model
	 *           training. "UNASSIGNED" can be used when user has no preference.
	 *  GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png".
	 *  LABEL = A display name of an object on an image, video etc., e.g. "dog".
	 *          Must be up to 32 characters long and can consist only of ASCII
	 *          Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9.
	 *          For each label an AnnotationSpec is created which display_name
	 *          becomes the label; AnnotationSpecs are given back in predictions.
	 *  INSTANCE_ID = A positive integer that identifies a specific instance of a
	 *                labeled entity on an example. Used e.g. to track two cars on
	 *                a video while being able to tell apart which one is which.
	 *  BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,,
	 *                 A rectangle parallel to the frame of the example (image,
	 *                 video). If 4 vertices are given they are connected by edges
	 *                 in the order provided, if 2 are given they are recognized
	 *                 as diagonally opposite vertices of the rectangle.
	 *  VERTEX = COORDINATE,COORDINATE
	 *           First coordinate is horizontal (x), the second is vertical (y).
	 *  COORDINATE = A float in 0 to 1 range, relative to total length of
	 *               image or video in given dimension. For fractions the
	 *               leading non-decimal 0 can be omitted (i.e. 0.3 = .3).
	 *               Point 0,0 is in top left.
	 *  TIME_SEGMENT_START = TIME_OFFSET
	 *                       Expresses a beginning, inclusive, of a time segment
	 *                       within an example that has a time dimension
	 *                       (e.g. video).
	 *  TIME_SEGMENT_END = TIME_OFFSET
	 *                     Expresses an end, exclusive, of a time segment within
	 *                     an example that has a time dimension (e.g. video).
	 *  TIME_OFFSET = A number of seconds as measured from the start of an
	 *                example (e.g. video). Fractions are allowed, up to a
	 *                microsecond precision. "inf" is allowed, and it means the end
	 *                of the example.
	 *  TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within
	 *                 double quotes ("").
	 *  SENTIMENT = An integer between 0 and
	 *              Dataset.text_sentiment_dataset_metadata.sentiment_max
	 *              (inclusive). Describes the ordinal of the sentiment - higher
	 *              value means a more positive sentiment. All the values are
	 *              completely relative, i.e. neither 0 needs to mean a negative or
	 *              neutral sentiment nor sentiment_max needs to mean a positive one
	 *              - it is just required that 0 is the least positive sentiment
	 *              in the data, and sentiment_max is the  most positive one.
	 *              The SENTIMENT shouldn't be confused with "score" or "magnitude"
	 *              from the previous Natural Language Sentiment Analysis API.
	 *              All SENTIMENT values between 0 and sentiment_max must be
	 *              represented in the imported data. On prediction the same 0 to
	 *              sentiment_max range will be used. The difference between
	 *              neighboring sentiment values needs not to be uniform, e.g. 1 and
	 *              2 may be similar whereas the difference between 2 and 3 may be
	 *              huge.
	 *  Errors:
	 *  If any of the provided CSV files can't be parsed or if more than certain
	 *  percent of CSV rows cannot be processed then the operation fails and
	 *  nothing is imported. Regardless of overall success or failure the per-row
	 *  failures, up to a certain count cap, is listed in
	 *  Operation.metadata.partial_failures.
	 */
	export interface InputConfig {

		/** The BigQuery location for the input content. */
		bigquerySource?: BigQuerySource;

		/** The Google Cloud Storage location for the input content. */
		gcsSource?: GcsSource;

		/**
		 * Additional domain-specific parameters describing the semantic of the
		 * imported data, any string must be up to 25000
		 * characters long.
		 * *  For Tables:
		 * `schema_inference_version` - (integer) Required. The version of the
		 * algorithm that should be used for the initial inference of the
		 * schema (columns' DataTypes) of the table the data is being imported
		 * into. Allowed values: "1".
		 */
		params?: {[id: string]: string };
	}


	/** A representation of a row in a relational table. */
	export interface Row {

		/**
		 * The resource IDs of the column specs describing the columns of the row.
		 * If set must contain, but possibly in a different order, all input
		 * feature
		 * column_spec_ids
		 * of the Model this row is being passed to.
		 * Note: The below `values` field must match order of this field, if this
		 * field is set.
		 */
		columnSpecIds?: Array<string>;

		/**
		 * Required. The values of the row cells, given in the same order as the
		 * column_spec_ids, or, if not set, then in the same order as input
		 * feature
		 * column_specs
		 * of the Model this row is being passed to.
		 */
		values?: Array<string>;
	}


	/** Details of ExportData operation. */
	export interface ExportDataOperationMetadata {

		/**
		 * Further describes this export data's output.
		 * Supplements
		 * OutputConfig.
		 */
		outputInfo?: ExportDataOutputInfo;
	}


	/**
	 * Further describes this export data's output.
	 * Supplements
	 * OutputConfig.
	 */
	export interface ExportDataOutputInfo {

		/**
		 * The path of the BigQuery dataset created, in bq://projectId.bqDatasetId
		 * format, into which the exported data is written.
		 */
		bigqueryOutputDataset?: string;

		/**
		 * The full path of the Google Cloud Storage directory created, into which
		 * the exported data is written.
		 */
		gcsOutputDirectory?: string;
	}


	/** Request message for AutoMl.ExportData. */
	export interface ExportDataRequest {

		/**
		 * *  For Translation:
		 * CSV file `translation.csv`, with each line in format:
		 * ML_USE,GCS_FILE_PATH
		 * GCS_FILE_PATH leads to a .TSV file which describes examples that have
		 * given ML_USE, using the following row format per line:
		 * TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target
		 * language)
		 * *  For Tables:
		 * Output depends on whether the dataset was imported from GCS or
		 * BigQuery.
		 * GCS case:
		 * gcs_destination
		 * must be set. Exported are CSV file(s) `tables_1.csv`,
		 * `tables_2.csv`,...,`tables_N.csv` with each having as header line
		 * the table's column names, and all other lines contain values for
		 * the header columns.
		 * BigQuery case:
		 * bigquery_destination
		 * pointing to a BigQuery project must be set. In the given project a
		 * new dataset will be created with name
		 * `export_data_<automl-dataset-display-name>_<timestamp-of-export-call>`
		 * where <automl-dataset-display-name> will be made
		 * BigQuery-dataset-name compatible (e.g. most special characters will
		 * become underscores), and timestamp will be in
		 * YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that
		 * dataset a new table called `primary_table` will be created, and
		 * filled with precisely the same data as this obtained on import.
		 */
		outputConfig?: OutputConfig;
	}


	/**
	 * *  For Translation:
	 *         CSV file `translation.csv`, with each line in format:
	 *         ML_USE,GCS_FILE_PATH
	 *         GCS_FILE_PATH leads to a .TSV file which describes examples that have
	 *         given ML_USE, using the following row format per line:
	 *         TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target
	 *         language)
	 *   *  For Tables:
	 *         Output depends on whether the dataset was imported from GCS or
	 *         BigQuery.
	 *         GCS case:
	 * gcs_destination
	 *           must be set. Exported are CSV file(s) `tables_1.csv`,
	 *           `tables_2.csv`,...,`tables_N.csv` with each having as header line
	 *           the table's column names, and all other lines contain values for
	 *           the header columns.
	 *         BigQuery case:
	 * bigquery_destination
	 *           pointing to a BigQuery project must be set. In the given project a
	 *           new dataset will be created with name
	 * `export_data_<automl-dataset-display-name>_<timestamp-of-export-call>`
	 *           where <automl-dataset-display-name> will be made
	 *           BigQuery-dataset-name compatible (e.g. most special characters will
	 *           become underscores), and timestamp will be in
	 *           YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that
	 *           dataset a new table called `primary_table` will be created, and
	 *           filled with precisely the same data as this obtained on import.
	 */
	export interface OutputConfig {

		/** The BigQuery location for the output content. */
		bigqueryDestination?: BigQueryDestination;

		/** The Google Cloud Storage location where the output is to be written to. */
		gcsDestination?: GcsDestination;
	}


	/** Details of EvaluatedExamples operation. */
	export interface ExportEvaluatedExamplesOperationMetadata {

		/**
		 * Further describes the output of the evaluated examples export.
		 * Supplements
		 * ExportEvaluatedExamplesOutputConfig.
		 */
		outputInfo?: ExportEvaluatedExamplesOutputInfo;
	}


	/**
	 * Further describes the output of the evaluated examples export.
	 * Supplements
	 * ExportEvaluatedExamplesOutputConfig.
	 */
	export interface ExportEvaluatedExamplesOutputInfo {

		/**
		 * The path of the BigQuery dataset created, in bq://projectId.bqDatasetId
		 * format, into which the output of export evaluated examples is written.
		 */
		bigqueryOutputDataset?: string;
	}


	/**
	 * Output configuration for ExportEvaluatedExamples Action. Note that this call
	 * is available only for 30 days since the moment the model was evaluated.
	 * The output depends on the domain, as follows (note that only examples from
	 * the TEST set are exported):
	 *  *  For Tables:
	 * bigquery_destination
	 *       pointing to a BigQuery project must be set. In the given project a
	 *       new dataset will be created with name
	 * `export_evaluated_examples_<model-display-name>_<timestamp-of-export-call>`
	 *       where <model-display-name> will be made BigQuery-dataset-name
	 *       compatible (e.g. most special characters will become underscores),
	 *       and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601"
	 *       format. In the dataset an `evaluated_examples` table will be
	 *       created. It will have all the same columns as the
	 * primary_table
	 *       of the
	 *       dataset from which
	 *       the model was created, as they were at the moment of model's
	 *       evaluation (this includes the target column with its ground
	 *       truth), followed by a column called "predicted_<target_column>". That
	 *       last column will contain the model's prediction result for each
	 *       respective row, given as ARRAY of
	 *       AnnotationPayloads,
	 *       represented as STRUCT-s, containing
	 *       TablesAnnotation.
	 */
	export interface ExportEvaluatedExamplesOutputConfig {

		/** The BigQuery location for the output content. */
		bigqueryDestination?: BigQueryDestination;
	}


	/** Request message for AutoMl.ExportEvaluatedExamples. */
	export interface ExportEvaluatedExamplesRequest {

		/**
		 * Output configuration for ExportEvaluatedExamples Action. Note that this call
		 * is available only for 30 days since the moment the model was evaluated.
		 * The output depends on the domain, as follows (note that only examples from
		 * the TEST set are exported):
		 * *  For Tables:
		 * bigquery_destination
		 * pointing to a BigQuery project must be set. In the given project a
		 * new dataset will be created with name
		 * `export_evaluated_examples_<model-display-name>_<timestamp-of-export-call>`
		 * where <model-display-name> will be made BigQuery-dataset-name
		 * compatible (e.g. most special characters will become underscores),
		 * and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601"
		 * format. In the dataset an `evaluated_examples` table will be
		 * created. It will have all the same columns as the
		 * primary_table
		 * of the
		 * dataset from which
		 * the model was created, as they were at the moment of model's
		 * evaluation (this includes the target column with its ground
		 * truth), followed by a column called "predicted_<target_column>". That
		 * last column will contain the model's prediction result for each
		 * respective row, given as ARRAY of
		 * AnnotationPayloads,
		 * represented as STRUCT-s, containing
		 * TablesAnnotation.
		 */
		outputConfig?: ExportEvaluatedExamplesOutputConfig;
	}


	/** Details of ExportModel operation. */
	export interface ExportModelOperationMetadata {

		/**
		 * Further describes the output of model export.
		 * Supplements
		 * ModelExportOutputConfig.
		 */
		outputInfo?: ExportModelOutputInfo;
	}


	/**
	 * Further describes the output of model export.
	 * Supplements
	 * ModelExportOutputConfig.
	 */
	export interface ExportModelOutputInfo {

		/**
		 * The full path of the Google Cloud Storage directory created, into which
		 * the model will be exported.
		 */
		gcsOutputDirectory?: string;
	}


	/**
	 * Request message for AutoMl.ExportModel.
	 * Models need to be enabled for exporting, otherwise an error code will be
	 * returned.
	 */
	export interface ExportModelRequest {

		/** Output configuration for ModelExport Action. */
		outputConfig?: ModelExportOutputConfig;
	}


	/** Output configuration for ModelExport Action. */
	export interface ModelExportOutputConfig {

		/** The GCR location where the image must be pushed to. */
		gcrDestination?: GcrDestination;

		/** The Google Cloud Storage location where the output is to be written to. */
		gcsDestination?: GcsDestination;

		/**
		 * The format in which the model must be exported. The available, and default,
		 * formats depend on the problem and model type (if given problem and type
		 * combination doesn't have a format listed, it means its models are not
		 * exportable):
		 * *  For Image Classification mobile-low-latency-1, mobile-versatile-1,
		 * mobile-high-accuracy-1:
		 * "tflite" (default), "edgetpu_tflite", "tf_saved_model", "tf_js",
		 * "docker".
		 * *  For Image Classification mobile-core-ml-low-latency-1,
		 * mobile-core-ml-versatile-1, mobile-core-ml-high-accuracy-1:
		 * "core_ml" (default).
		 * Formats description:
		 * * tflite - Used for Android mobile devices.
		 * * edgetpu_tflite - Used for [Edge TPU](https://cloud.google.com/edge-tpu/)
		 * devices.
		 * * tf_saved_model - A tensorflow model in SavedModel format.
		 * * tf_js - A [TensorFlow.js](https://www.tensorflow.org/js) model that can
		 * be used in the browser and in Node.js using JavaScript.
		 * * docker - Used for Docker containers. Use the params field to customize
		 * the container. The container is verified to work correctly on
		 * ubuntu 16.04 operating system. See more at
		 * [containers
		 * quickstart](https:
		 * //cloud.google.com/vision/automl/docs/containers-gcs-quickstart)
		 * * core_ml - Used for iOS mobile devices.
		 */
		modelFormat?: string;

		/**
		 * Additional model-type and format specific parameters describing the
		 * requirements for the to be exported model files, any string must be up to
		 * 25000 characters long.
		 * * For `docker` format:
		 * `cpu_architecture` - (string) "x86_64" (default).
		 * `gpu_architecture` - (string) "none" (default), "nvidia".
		 */
		params?: {[id: string]: string };
	}


	/** The GCR location where the image must be pushed to. */
	export interface GcrDestination {

		/**
		 * Required. Google Contained Registry URI of the new image, up to 2000
		 * characters long. See
		 * https:
		 * //cloud.google.com/container-registry/do
		 * // cs/pushing-and-pulling#pushing_an_image_to_a_registry
		 * Accepted forms:
		 * * [HOSTNAME]/[PROJECT-ID]/[IMAGE]
		 * * [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG]
		 * The requesting user must have permission to push images the project.
		 */
		outputUri?: string;
	}


	/** Model metadata for image classification. */
	export interface ImageClassificationModelMetadata {

		/**
		 * Optional. The ID of the `base` model. If it is specified, the new model
		 * will be created based on the `base` model. Otherwise, the new model will be
		 * created from scratch. The `base` model must be in the same
		 * `project` and `location` as the new model to create, and have the same
		 * `model_type`.
		 */
		baseModelId?: string;

		/**
		 * Optional. Type of the model. The available values are:
		 * *   `cloud` - Model to be used via prediction calls to AutoML API.
		 * This is the default value.
		 * *   `mobile-low-latency-1` - A model that, in addition to providing
		 * prediction via AutoML API, can also be exported (see
		 * AutoMl.ExportModel) and used on a mobile or edge device
		 * with TensorFlow afterwards. Expected to have low latency, but
		 * may have lower prediction quality than other models.
		 * *   `mobile-versatile-1` - A model that, in addition to providing
		 * prediction via AutoML API, can also be exported (see
		 * AutoMl.ExportModel) and used on a mobile or edge device
		 * with TensorFlow afterwards.
		 * *   `mobile-high-accuracy-1` - A model that, in addition to providing
		 * prediction via AutoML API, can also be exported (see
		 * AutoMl.ExportModel) and used on a mobile or edge device
		 * with TensorFlow afterwards.  Expected to have a higher
		 * latency, but should also have a higher prediction quality
		 * than other models.
		 * *   `mobile-core-ml-low-latency-1` - A model that, in addition to providing
		 * prediction via AutoML API, can also be exported (see
		 * AutoMl.ExportModel) and used on a mobile device with Core
		 * ML afterwards. Expected to have low latency, but may have
		 * lower prediction quality than other models.
		 * *   `mobile-core-ml-versatile-1` - A model that, in addition to providing
		 * prediction via AutoML API, can also be exported (see
		 * AutoMl.ExportModel) and used on a mobile device with Core
		 * ML afterwards.
		 * *   `mobile-core-ml-high-accuracy-1` - A model that, in addition to
		 * providing prediction via AutoML API, can also be exported
		 * (see AutoMl.ExportModel) and used on a mobile device with
		 * Core ML afterwards.  Expected to have a higher latency, but
		 * should also have a higher prediction quality than other
		 * models.
		 */
		modelType?: string;

		/**
		 * Output only. The number of nodes this model is deployed on. A node is an
		 * abstraction of a machine resource, which can handle online prediction QPS
		 * as given in the node_qps field.
		 */
		nodeCount?: string;

		/**
		 * Output only. An approximate number of online prediction QPS that can
		 * be supported by this model per each node on which it is deployed.
		 */
		nodeQps?: number;

		/**
		 * Output only. The reason that this create model operation stopped,
		 * e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.
		 */
		stopReason?: string;

		/**
		 * Required. The train budget of creating this model, expressed in hours. The
		 * actual `train_cost` will be equal or less than this value.
		 */
		trainBudget?: string;

		/**
		 * Output only. The actual train cost of creating this model, expressed in
		 * hours. If this model is created from a `base` model, the train cost used
		 * to create the `base` model are not included.
		 */
		trainCost?: string;
	}


	/**
	 * Model evaluation metrics for image object detection problems.
	 * Evaluates prediction quality of labeled bounding boxes.
	 */
	export interface ImageObjectDetectionEvaluationMetrics {

		/**
		 * Output only. The single metric for bounding boxes evaluation:
		 * the mean_average_precision averaged over all bounding_box_metrics_entries.
		 */
		boundingBoxMeanAveragePrecision?: number;

		/**
		 * Output only. The bounding boxes match metrics for each
		 * Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99
		 * and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99
		 * pair.
		 */
		boundingBoxMetricsEntries?: Array<BoundingBoxMetricsEntry>;

		/**
		 * Output only. The total number of bounding boxes (i.e. summed over all
		 * images) the ground truth used to create this evaluation had.
		 */
		evaluatedBoundingBoxCount?: number;
	}


	/** Model metadata specific to image object detection. */
	export interface ImageObjectDetectionModelMetadata {

		/**
		 * Optional. Type of the model. The available values are:
		 * *   `cloud-high-accuracy-1` - (default) A model to be used via prediction
		 * calls to AutoML API. Expected to have a higher latency, but
		 * should also have a higher prediction quality than other
		 * models.
		 * *   `cloud-low-latency-1` -  A model to be used via prediction
		 * calls to AutoML API. Expected to have low latency, but may
		 * have lower prediction quality than other models.
		 * *   `mobile-low-latency-1` - A model that, in addition to providing
		 * prediction via AutoML API, can also be exported (see
		 * AutoMl.ExportModel) and used on a mobile or edge device
		 * with TensorFlow afterwards. Expected to have low latency, but
		 * may have lower prediction quality than other models.
		 * *   `mobile-versatile-1` - A model that, in addition to providing
		 * prediction via AutoML API, can also be exported (see
		 * AutoMl.ExportModel) and used on a mobile or edge device
		 * with TensorFlow afterwards.
		 * *   `mobile-high-accuracy-1` - A model that, in addition to providing
		 * prediction via AutoML API, can also be exported (see
		 * AutoMl.ExportModel) and used on a mobile or edge device
		 * with TensorFlow afterwards.  Expected to have a higher
		 * latency, but should also have a higher prediction quality
		 * than other models.
		 */
		modelType?: string;

		/**
		 * Output only. The number of nodes this model is deployed on. A node is an
		 * abstraction of a machine resource, which can handle online prediction QPS
		 * as given in the qps_per_node field.
		 */
		nodeCount?: string;

		/**
		 * Output only. An approximate number of online prediction QPS that can
		 * be supported by this model per each node on which it is deployed.
		 */
		nodeQps?: number;

		/**
		 * Output only. The reason that this create model operation stopped,
		 * e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.
		 */
		stopReason?: string;

		/**
		 * The train budget of creating this model, expressed in milli node
		 * hours i.e. 1,000 value in this field means 1 node hour. The actual
		 * `train_cost` will be equal or less than this value. If further model
		 * training ceases to provide any improvements, it will stop without using
		 * full budget and the stop_reason will be `MODEL_CONVERGED`.
		 * Note, node_hour  = actual_hour * number_of_nodes_invovled.
		 * For model type `cloud-high-accuracy-1`(default) and `cloud-low-latency-1`,
		 * the train budget must be between 20,000 and 900,000 milli node hours,
		 * inclusive. The default value is 216, 000 which represents one day in
		 * wall time.
		 * For model type `mobile-low-latency-1`, `mobile-versatile-1`,
		 * `mobile-high-accuracy-1`, `mobile-core-ml-low-latency-1`,
		 * `mobile-core-ml-versatile-1`, `mobile-core-ml-high-accuracy-1`, the train
		 * budget must be between 1,000 and 100,000 milli node hours, inclusive.
		 * The default value is 24, 000 which represents one day in wall time.
		 */
		trainBudgetMilliNodeHours?: string;

		/**
		 * Output only. The actual train cost of creating this model, expressed in
		 * milli node hours, i.e. 1,000 value in this field means 1 node hour.
		 * Guaranteed to not exceed the train budget.
		 */
		trainCostMilliNodeHours?: string;
	}


	/** Details of ImportData operation. */
	export interface ImportDataOperationMetadata {
	}


	/** Request message for AutoMl.ImportData. */
	export interface ImportDataRequest {

		/**
		 * Input configuration for ImportData Action.
		 * The format of input depends on dataset_metadata the Dataset into which
		 * the import is happening has. As input source the
		 * gcs_source
		 * is expected, unless specified otherwise. Additionally any input .CSV file
		 * by itself must be 100MB or smaller, unless specified otherwise.
		 * If an "example" file (that is, image, video etc.) with identical content
		 * (even if it had different GCS_FILE_PATH) is mentioned multiple times, then
		 * its label, bounding boxes etc. are appended. The same file should be always
		 * provided with the same ML_USE and GCS_FILE_PATH, if it is not, then
		 * these values are nondeterministically selected from the given ones.
		 * The formats are represented in EBNF with commas being literal and with
		 * non-terminal symbols defined near the end of this comment. The formats are:
		 * *  For Image Classification:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH,LABEL,LABEL,...
		 * GCS_FILE_PATH leads to image of up to 30MB in size. Supported
		 * extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO
		 * For MULTICLASS classification type, at most one LABEL is allowed
		 * per image. If an image has not yet been labeled, then it should be
		 * mentioned just once with no LABEL.
		 * Some sample rows:
		 * TRAIN,gs://folder/image1.jpg,daisy
		 * TEST,gs://folder/image2.jpg,dandelion,tulip,rose
		 * UNASSIGNED,gs://folder/image3.jpg,daisy
		 * UNASSIGNED,gs://folder/image4.jpg
		 * *  For Image Object Detection:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,)
		 * GCS_FILE_PATH leads to image of up to 30MB in size. Supported
		 * extensions: .JPEG, .GIF, .PNG.
		 * Each image is assumed to be exhaustively labeled. The minimum
		 * allowed BOUNDING_BOX edge length is 0.01, and no more than 500
		 * BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined
		 * per line). If an image has not yet been labeled, then it should be
		 * mentioned just once with no LABEL and the ",,,,,,," in place of the
		 * BOUNDING_BOX. For images which are known to not contain any
		 * bounding boxes, they should be labelled explictly as
		 * "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the
		 * BOUNDING_BOX.
		 * Sample rows:
		 * TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,,
		 * TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,,
		 * UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3
		 * TEST,gs://folder/im3.png,,,,,,,,,
		 * TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,,
		 * *  For Video Classification:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH
		 * where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH
		 * should lead to another .csv file which describes examples that have
		 * given ML_USE, using the following row format:
		 * GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,)
		 * Here GCS_FILE_PATH leads to a video of up to 50GB in size and up
		 * to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
		 * TIME_SEGMENT_START and TIME_SEGMENT_END must be within the
		 * length of the video, and end has to be after the start. Any segment
		 * of a video which has one or more labels on it, is considered a
		 * hard negative for all other labels. Any segment with no labels on
		 * it is considered to be unknown. If a whole video is unknown, then
		 * it shuold be mentioned just once with ",," in place of LABEL,
		 * TIME_SEGMENT_START,TIME_SEGMENT_END.
		 * Sample top level CSV file:
		 * TRAIN,gs://folder/train_videos.csv
		 * TEST,gs://folder/test_videos.csv
		 * UNASSIGNED,gs://folder/other_videos.csv
		 * Sample rows of a CSV file for a particular ML_USE:
		 * gs://folder/video1.avi,car,120,180.000021
		 * gs://folder/video1.avi,bike,150,180.000021
		 * gs://folder/vid2.avi,car,0,60.5
		 * gs://folder/vid3.avi,,,
		 * *  For Video Object Tracking:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH
		 * where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH
		 * should lead to another .csv file which describes examples that have
		 * given ML_USE, using one of the following row format:
		 * GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX
		 * or
		 * GCS_FILE_PATH,,,,,,,,,,
		 * Here GCS_FILE_PATH leads to a video of up to 50GB in size and up
		 * to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI.
		 * Providing INSTANCE_IDs can help to obtain a better model. When
		 * a specific labeled entity leaves the video frame, and shows up
		 * afterwards it is not required, albeit preferable, that the same
		 * INSTANCE_ID is given to it.
		 * TIMESTAMP must be within the length of the video, the
		 * BOUNDING_BOX is assumed to be drawn on the closest video's frame
		 * to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected
		 * to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per
		 * frame are allowed. If a whole video is unknown, then it should be
		 * mentioned just once with ",,,,,,,,,," in place of LABEL,
		 * [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX.
		 * Sample top level CSV file:
		 * TRAIN,gs://folder/train_videos.csv
		 * TEST,gs://folder/test_videos.csv
		 * UNASSIGNED,gs://folder/other_videos.csv
		 * Seven sample rows of a CSV file for a particular ML_USE:
		 * gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9
		 * gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9
		 * gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3
		 * gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,,
		 * gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,,
		 * gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,,
		 * gs://folder/video2.avi,,,,,,,,,,,
		 * *  For Text Extraction:
		 * CSV file(s) with each line in format:
		 * ML_USE,GCS_FILE_PATH
		 * GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which
		 * either imports text in-line or as documents. Any given
		 * .JSONL file must be 100MB or smaller.
		 * The in-line .JSONL file contains, per line, a proto that wraps a
		 * TextSnippet proto (in json representation) followed by one or more
		 * AnnotationPayload protos (called annotations), which have
		 * display_name and text_extraction detail populated. The given text
		 * is expected to be annotated exhaustively, for example, if you look
		 * for animals and text contains "dolphin" that is not labeled, then
		 * "dolphin" is assumed to not be an animal. Any given text snippet
		 * content must be 10KB or smaller, and also be UTF-8 NFC encoded
		 * (ASCII already is).
		 * The document .JSONL file contains, per line, a proto that wraps a
		 * Document proto. The Document proto must have either document_text
		 * or input_config set. In document_text case, the Document proto may
		 * also contain the spatial information of the document, including
		 * layout, document dimension and page number. In input_config case,
		 * only PDF documents are supported now, and each document may be up
		 * to 2MB large. Currently, annotations on documents cannot be
		 * specified at import.
		 * Three sample CSV rows:
		 * TRAIN,gs://folder/file1.jsonl
		 * VALIDATE,gs://folder/file2.jsonl
		 * TEST,gs://folder/file3.jsonl
		 * Sample in-line JSON Lines file for entity extraction (presented here
		 * with artificial line breaks, but the only actual line break is
		 * denoted by \n).:
		 * {
		 * "document": {
		 * "document_text": {"content": "dog cat"}
		 * "layout": [
		 * {
		 * "text_segment": {
		 * "start_offset": 0,
		 * "end_offset": 3,
		 * },
		 * "page_number": 1,
		 * "bounding_poly": {
		 * "normalized_vertices": [
		 * {"x": 0.1, "y": 0.1},
		 * {"x": 0.1, "y": 0.3},
		 * {"x": 0.3, "y": 0.3},
		 * {"x": 0.3, "y": 0.1},
		 * ],
		 * },
		 * "text_segment_type": TOKEN,
		 * },
		 * {
		 * "text_segment": {
		 * "start_offset": 4,
		 * "end_offset": 7,
		 * },
		 * "page_number": 1,
		 * "bounding_poly": {
		 * "normalized_vertices": [
		 * {"x": 0.4, "y": 0.1},
		 * {"x": 0.4, "y": 0.3},
		 * {"x": 0.8, "y": 0.3},
		 * {"x": 0.8, "y": 0.1},
		 * ],
		 * },
		 * "text_segment_type": TOKEN,
		 * }
		 * ],
		 * "document_dimensions": {
		 * "width": 8.27,
		 * "height": 11.69,
		 * "unit": INCH,
		 * }
		 * "page_count": 1,
		 * },
		 * "annotations": [
		 * {
		 * "display_name": "animal",
		 * "text_extraction": {"text_segment": {"start_offset": 0,
		 * "end_offset": 3}}
		 * },
		 * {
		 * "display_name": "animal",
		 * "text_extraction": {"text_segment": {"start_offset": 4,
		 * "end_offset": 7}}
		 * }
		 * ],
		 * }\n
		 * {
		 * "text_snippet": {
		 * "content": "This dog is good."
		 * },
		 * "annotations": [
		 * {
		 * "display_name": "animal",
		 * "text_extraction": {
		 * "text_segment": {"start_offset": 5, "end_offset": 8}
		 * }
		 * }
		 * ]
		 * }
		 * Sample document JSON Lines file (presented here with artificial line
		 * breaks, but the only actual line break is denoted by \n).:
		 * {
		 * "document": {
		 * "input_config": {
		 * "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ]
		 * }
		 * }
		 * }
		 * }\n
		 * {
		 * "document": {
		 * "input_config": {
		 * "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ]
		 * }
		 * }
		 * }
		 * }
		 * *  For Text Classification:
		 * CSV file(s) with each line in format:
		 * ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,...
		 * TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If
		 * the column content is a valid gcs file path, i.e. prefixed by
		 * "gs://", it will be treated as a GCS_FILE_PATH, else if the content
		 * is enclosed within double quotes (""), it is
		 * treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path
		 * must lead to a .txt file with UTF-8 encoding, for example,
		 * "gs://folder/content.txt", and the content in it is extracted
		 * as a text snippet. In TEXT_SNIPPET case, the column content
		 * excluding quotes is treated as to be imported text snippet. In
		 * both cases, the text snippet/file size must be within 128kB.
		 * Maximum 100 unique labels are allowed per CSV row.
		 * Sample rows:
		 * TRAIN,"They have bad food and very rude",RudeService,BadFood
		 * TRAIN,gs://folder/content.txt,SlowService
		 * TEST,"Typically always bad service there.",RudeService
		 * VALIDATE,"Stomach ache to go.",BadFood
		 * *  For Text Sentiment:
		 * CSV file(s) with each line in format:
		 * ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT
		 * TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If
		 * the column content is a valid gcs file path, that is, prefixed by
		 * "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated
		 * as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path
		 * must lead to a .txt file with UTF-8 encoding, for example,
		 * "gs://folder/content.txt", and the content in it is extracted
		 * as a text snippet. In TEXT_SNIPPET case, the column content itself
		 * is treated as to be imported text snippet. In both cases, the
		 * text snippet must be up to 500 characters long.
		 * Sample rows:
		 * TRAIN,"@freewrytin this is way too good for your product",2
		 * TRAIN,"I need this product so bad",3
		 * TEST,"Thank you for this product.",4
		 * VALIDATE,gs://folder/content.txt,2
		 * *  For Tables:
		 * Either
		 * gcs_source or
		 * bigquery_source
		 * can be used. All inputs is concatenated into a single
		 * primary_table
		 * For gcs_source:
		 * CSV file(s), where the first row of the first file is the header,
		 * containing unique column names. If the first row of a subsequent
		 * file is the same as the header, then it is also treated as a
		 * header. All other rows contain values for the corresponding
		 * columns.
		 * Each .CSV file by itself must be 10GB or smaller, and their total
		 * size must be 100GB or smaller.
		 * First three sample rows of a CSV file:
		 * "Id","First Name","Last Name","Dob","Addresses"
		 * "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]"
		 * "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]}
		 * For bigquery_source:
		 * An URI of a BigQuery table. The user data size of the BigQuery
		 * table must be 100GB or smaller.
		 * An imported table must have between 2 and 1,000 columns, inclusive,
		 * and between 1000 and 100,000,000 rows, inclusive. There are at most 5
		 * import data running in parallel.
		 * Definitions:
		 * ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED"
		 * Describes how the given example (file) should be used for model
		 * training. "UNASSIGNED" can be used when user has no preference.
		 * GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png".
		 * LABEL = A display name of an object on an image, video etc., e.g. "dog".
		 * Must be up to 32 characters long and can consist only of ASCII
		 * Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9.
		 * For each label an AnnotationSpec is created which display_name
		 * becomes the label; AnnotationSpecs are given back in predictions.
		 * INSTANCE_ID = A positive integer that identifies a specific instance of a
		 * labeled entity on an example. Used e.g. to track two cars on
		 * a video while being able to tell apart which one is which.
		 * BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,,
		 * A rectangle parallel to the frame of the example (image,
		 * video). If 4 vertices are given they are connected by edges
		 * in the order provided, if 2 are given they are recognized
		 * as diagonally opposite vertices of the rectangle.
		 * VERTEX = COORDINATE,COORDINATE
		 * First coordinate is horizontal (x), the second is vertical (y).
		 * COORDINATE = A float in 0 to 1 range, relative to total length of
		 * image or video in given dimension. For fractions the
		 * leading non-decimal 0 can be omitted (i.e. 0.3 = .3).
		 * Point 0,0 is in top left.
		 * TIME_SEGMENT_START = TIME_OFFSET
		 * Expresses a beginning, inclusive, of a time segment
		 * within an example that has a time dimension
		 * (e.g. video).
		 * TIME_SEGMENT_END = TIME_OFFSET
		 * Expresses an end, exclusive, of a time segment within
		 * an example that has a time dimension (e.g. video).
		 * TIME_OFFSET = A number of seconds as measured from the start of an
		 * example (e.g. video). Fractions are allowed, up to a
		 * microsecond precision. "inf" is allowed, and it means the end
		 * of the example.
		 * TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within
		 * double quotes ("").
		 * SENTIMENT = An integer between 0 and
		 * Dataset.text_sentiment_dataset_metadata.sentiment_max
		 * (inclusive). Describes the ordinal of the sentiment - higher
		 * value means a more positive sentiment. All the values are
		 * completely relative, i.e. neither 0 needs to mean a negative or
		 * neutral sentiment nor sentiment_max needs to mean a positive one
		 * - it is just required that 0 is the least positive sentiment
		 * in the data, and sentiment_max is the  most positive one.
		 * The SENTIMENT shouldn't be confused with "score" or "magnitude"
		 * from the previous Natural Language Sentiment Analysis API.
		 * All SENTIMENT values between 0 and sentiment_max must be
		 * represented in the imported data. On prediction the same 0 to
		 * sentiment_max range will be used. The difference between
		 * neighboring sentiment values needs not to be uniform, e.g. 1 and
		 * 2 may be similar whereas the difference between 2 and 3 may be
		 * huge.
		 * Errors:
		 * If any of the provided CSV files can't be parsed or if more than certain
		 * percent of CSV rows cannot be processed then the operation fails and
		 * nothing is imported. Regardless of overall success or failure the per-row
		 * failures, up to a certain count cap, is listed in
		 * Operation.metadata.partial_failures.
		 */
		inputConfig?: InputConfig;
	}


	/** Response message for AutoMl.ListColumnSpecs. */
	export interface ListColumnSpecsResponse {

		/** The column specs read. */
		columnSpecs?: Array<ColumnSpec>;

		/**
		 * A token to retrieve next page of results.
		 * Pass to ListColumnSpecsRequest.page_token to obtain that page.
		 */
		nextPageToken?: string;
	}


	/** Response message for AutoMl.ListDatasets. */
	export interface ListDatasetsResponse {

		/** The datasets read. */
		datasets?: Array<Dataset>;

		/**
		 * A token to retrieve next page of results.
		 * Pass to ListDatasetsRequest.page_token to obtain that page.
		 */
		nextPageToken?: string;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any };

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string;
	}


	/** Response message for AutoMl.ListModelEvaluations. */
	export interface ListModelEvaluationsResponse {

		/** List of model evaluations in the requested page. */
		modelEvaluation?: Array<ModelEvaluation>;

		/**
		 * A token to retrieve next page of results.
		 * Pass to the ListModelEvaluationsRequest.page_token field of a new
		 * AutoMl.ListModelEvaluations request to obtain that page.
		 */
		nextPageToken?: string;
	}


	/** Evaluation results of a model. */
	export interface ModelEvaluation {

		/**
		 * Output only. The ID of the annotation spec that the model evaluation applies to. The
		 * The ID is empty for the overall model evaluation.
		 * For Tables annotation specs in the dataset do not exist and this ID is
		 * always not set, but for CLASSIFICATION
		 * prediction_type-s
		 * the
		 * display_name
		 * field is used.
		 */
		annotationSpecId?: string;

		/**
		 * Model evaluation metrics for classification problems.
		 * Note: For Video Classification this metrics only describe quality of the
		 * Video Classification predictions of "segment_classification" type.
		 */
		classificationEvaluationMetrics?: ClassificationEvaluationMetrics;

		/** Output only. Timestamp when this model evaluation was created. */
		createTime?: string;

		/**
		 * Output only. The value of
		 * display_name at
		 * the moment when the model was trained. Because this field returns a value
		 * at model training time, for different models trained from the same dataset,
		 * the values may differ, since display names could had been changed between
		 * the two model's trainings.
		 * For Tables CLASSIFICATION
		 * prediction_type-s
		 * distinct values of the target column at the moment of the model evaluation
		 * are populated here.
		 * The display_name is empty for the overall model evaluation.
		 */
		displayName?: string;

		/**
		 * Output only. The number of examples used for model evaluation, i.e. for
		 * which ground truth from time of model creation is compared against the
		 * predicted annotations created by the model.
		 * For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is
		 * the total number of all examples used for evaluation.
		 * Otherwise, this is the count of examples that according to the ground
		 * truth were annotated by the
		 * annotation_spec_id.
		 */
		evaluatedExampleCount?: number;

		/**
		 * Model evaluation metrics for image object detection problems.
		 * Evaluates prediction quality of labeled bounding boxes.
		 */
		imageObjectDetectionEvaluationMetrics?: ImageObjectDetectionEvaluationMetrics;

		/**
		 * Output only. Resource name of the model evaluation.
		 * Format:
		 * `projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}`
		 */
		name?: string;

		/** Metrics for regression problems. */
		regressionEvaluationMetrics?: RegressionEvaluationMetrics;

		/** Model evaluation metrics for text extraction problems. */
		textExtractionEvaluationMetrics?: TextExtractionEvaluationMetrics;

		/** Model evaluation metrics for text sentiment problems. */
		textSentimentEvaluationMetrics?: TextSentimentEvaluationMetrics;

		/** Evaluation metrics for the dataset. */
		translationEvaluationMetrics?: TranslationEvaluationMetrics;

		/**
		 * Model evaluation metrics for video object tracking problems.
		 * Evaluates prediction quality of both labeled bounding boxes and labeled
		 * tracks (i.e. series of bounding boxes sharing same label and instance ID).
		 */
		videoObjectTrackingEvaluationMetrics?: VideoObjectTrackingEvaluationMetrics;
	}


	/** Metrics for regression problems. */
	export interface RegressionEvaluationMetrics {

		/** Output only. Mean Absolute Error (MAE). */
		meanAbsoluteError?: number;

		/**
		 * Output only. Mean absolute percentage error. Only set if all ground truth
		 * values are are positive.
		 */
		meanAbsolutePercentageError?: number;

		/** Output only. R squared. */
		rSquared?: number;

		/** Output only. Root Mean Squared Error (RMSE). */
		rootMeanSquaredError?: number;

		/** Output only. Root mean squared log error. */
		rootMeanSquaredLogError?: number;
	}


	/** Model evaluation metrics for text extraction problems. */
	export interface TextExtractionEvaluationMetrics {

		/** Output only. The Area under precision recall curve metric. */
		auPrc?: number;

		/**
		 * Output only. Metrics that have confidence thresholds.
		 * Precision-recall curve can be derived from it.
		 */
		confidenceMetricsEntries?: Array<TextExtractionEvaluationMetricsConfidenceMetricsEntry>;
	}


	/** Metrics for a single confidence threshold. */
	export interface TextExtractionEvaluationMetricsConfidenceMetricsEntry {

		/**
		 * Output only. The confidence threshold value used to compute the metrics.
		 * Only annotations with score of at least this threshold are considered to
		 * be ones the model would return.
		 */
		confidenceThreshold?: number;

		/** Output only. The harmonic mean of recall and precision. */
		f1Score?: number;

		/** Output only. Precision under the given confidence threshold. */
		precision?: number;

		/** Output only. Recall under the given confidence threshold. */
		recall?: number;
	}


	/** Model evaluation metrics for text sentiment problems. */
	export interface TextSentimentEvaluationMetrics {

		/**
		 * Output only. The annotation spec ids used for this evaluation.
		 * Deprecated .
		 */
		annotationSpecId?: Array<string>;

		/** Confusion matrix of the model running the classification. */
		confusionMatrix?: ConfusionMatrix;

		/** Output only. The harmonic mean of recall and precision. */
		f1Score?: number;

		/**
		 * Output only. Linear weighted kappa. Only set for the overall model
		 * evaluation, not for evaluation of a single annotation spec.
		 */
		linearKappa?: number;

		/**
		 * Output only. Mean absolute error. Only set for the overall model
		 * evaluation, not for evaluation of a single annotation spec.
		 */
		meanAbsoluteError?: number;

		/**
		 * Output only. Mean squared error. Only set for the overall model
		 * evaluation, not for evaluation of a single annotation spec.
		 */
		meanSquaredError?: number;

		/** Output only. Precision. */
		precision?: number;

		/**
		 * Output only. Quadratic weighted kappa. Only set for the overall model
		 * evaluation, not for evaluation of a single annotation spec.
		 */
		quadraticKappa?: number;

		/** Output only. Recall. */
		recall?: number;
	}


	/** Evaluation metrics for the dataset. */
	export interface TranslationEvaluationMetrics {

		/** Output only. BLEU score for base model. */
		baseBleuScore?: number;

		/** Output only. BLEU score. */
		bleuScore?: number;
	}


	/**
	 * Model evaluation metrics for video object tracking problems.
	 * Evaluates prediction quality of both labeled bounding boxes and labeled
	 * tracks (i.e. series of bounding boxes sharing same label and instance ID).
	 */
	export interface VideoObjectTrackingEvaluationMetrics {

		/**
		 * Output only. The single metric for bounding boxes evaluation:
		 * the mean_average_precision averaged over all bounding_box_metrics_entries.
		 */
		boundingBoxMeanAveragePrecision?: number;

		/**
		 * Output only. The bounding boxes match metrics for each
		 * Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99
		 * and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99
		 * pair.
		 */
		boundingBoxMetricsEntries?: Array<BoundingBoxMetricsEntry>;

		/**
		 * Output only. The total number of bounding boxes (i.e. summed over all
		 * frames) the ground truth used to create this evaluation had.
		 */
		evaluatedBoundingBoxCount?: number;

		/** Output only. The number of video frames used to create this evaluation. */
		evaluatedFrameCount?: number;
	}


	/** Response message for AutoMl.ListModels. */
	export interface ListModelsResponse {

		/** List of models in the requested page. */
		model?: Array<Model>;

		/**
		 * A token to retrieve next page of results.
		 * Pass to ListModelsRequest.page_token to obtain that page.
		 */
		nextPageToken?: string;
	}


	/** API proto representing a trained machine learning model. */
	export interface Model {

		/** Output only. Timestamp when the model training finished  and can be used for prediction. */
		createTime?: string;

		/**
		 * Required. The resource ID of the dataset used to create the model. The dataset must
		 * come from the same ancestor project and location.
		 */
		datasetId?: string;

		/**
		 * Output only. Deployment state of the model. A model can only serve
		 * prediction requests after it gets deployed.
		 */
		deploymentState?: ModelDeploymentState;

		/**
		 * Required. The name of the model to show in the interface. The name can be
		 * up to 32 characters long and can consist only of ASCII Latin letters A-Z
		 * and a-z, underscores
		 * (_), and ASCII digits 0-9. It must start with a letter.
		 */
		displayName?: string;

		/** Model metadata for image classification. */
		imageClassificationModelMetadata?: ImageClassificationModelMetadata;

		/** Model metadata specific to image object detection. */
		imageObjectDetectionModelMetadata?: ImageObjectDetectionModelMetadata;

		/**
		 * Output only. Resource name of the model.
		 * Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`
		 */
		name?: string;

		/** Model metadata specific to AutoML Tables. */
		tablesModelMetadata?: TablesModelMetadata;

		/** Model metadata that is specific to text classification. */
		textClassificationModelMetadata?: TextClassificationModelMetadata;

		/** Model metadata that is specific to text extraction. */
		textExtractionModelMetadata?: TextExtractionModelMetadata;

		/** Model metadata that is specific to text sentiment. */
		textSentimentModelMetadata?: TextSentimentModelMetadata;

		/** Model metadata that is specific to translation. */
		translationModelMetadata?: TranslationModelMetadata;

		/** Output only. Timestamp when this model was last updated. */
		updateTime?: string;

		/** Model metadata specific to video classification. */
		videoClassificationModelMetadata?: VideoClassificationModelMetadata;

		/** Model metadata specific to video object tracking. */
		videoObjectTrackingModelMetadata?: VideoObjectTrackingModelMetadata;
	}

	export enum ModelDeploymentState { DEPLOYMENT_STATE_UNSPECIFIED = 0, DEPLOYED = 1, UNDEPLOYED = 2 }


	/** Model metadata specific to AutoML Tables. */
	export interface TablesModelMetadata {

		/**
		 * Use the entire training budget. This disables the early stopping feature.
		 * By default, the early stopping feature is enabled, which means that AutoML
		 * Tables might stop training before the entire training budget has been used.
		 */
		disableEarlyStopping?: boolean;

		/**
		 * Column specs of the dataset's primary table's columns, on which
		 * the model is trained and which are used as the input for predictions.
		 * The
		 * target_column
		 * as well as, according to dataset's state upon model creation,
		 * weight_column,
		 * and
		 * ml_use_column
		 * must never be included here.
		 * Only 3 fields are used:
		 * * name - May be set on CreateModel, if set only the columns specified are
		 * used, otherwise all primary table's columns (except the ones listed
		 * above) are used for the training and prediction input.
		 * * display_name - Output only.
		 * * data_type - Output only.
		 */
		inputFeatureColumnSpecs?: Array<ColumnSpec>;

		/**
		 * Objective function the model is optimizing towards. The training process
		 * creates a model that maximizes/minimizes the value of the objective
		 * function over the validation set.
		 * The supported optimization objectives depend on the prediction type.
		 * If the field is not set, a default objective function is used.
		 * CLASSIFICATION_BINARY:
		 * "MAXIMIZE_AU_ROC" (default) - Maximize the area under the receiver
		 * operating characteristic (ROC) curve.
		 * "MINIMIZE_LOG_LOSS" - Minimize log loss.
		 * "MAXIMIZE_AU_PRC" - Maximize the area under the precision-recall curve.
		 * "MAXIMIZE_PRECISION_AT_RECALL" - Maximize precision for a specified
		 * recall value.
		 * "MAXIMIZE_RECALL_AT_PRECISION" - Maximize recall for a specified
		 * precision value.
		 * CLASSIFICATION_MULTI_CLASS :
		 * "MINIMIZE_LOG_LOSS" (default) - Minimize log loss.
		 * REGRESSION:
		 * "MINIMIZE_RMSE" (default) - Minimize root-mean-squared error (RMSE).
		 * "MINIMIZE_MAE" - Minimize mean-absolute error (MAE).
		 * "MINIMIZE_RMSLE" - Minimize root-mean-squared log error (RMSLE).
		 */
		optimizationObjective?: string;

		/**
		 * Required when optimization_objective is "MAXIMIZE_RECALL_AT_PRECISION".
		 * Must be between 0 and 1, inclusive.
		 */
		optimizationObjectivePrecisionValue?: number;

		/**
		 * Required when optimization_objective is "MAXIMIZE_PRECISION_AT_RECALL".
		 * Must be between 0 and 1, inclusive.
		 */
		optimizationObjectiveRecallValue?: number;

		/**
		 * Output only. Auxiliary information for each of the
		 * input_feature_column_specs with respect to this particular model.
		 */
		tablesModelColumnInfo?: Array<TablesModelColumnInfo>;

		/**
		 * A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were
		 * given on import .
		 * Used by:
		 * *   Tables
		 */
		targetColumnSpec?: ColumnSpec;

		/**
		 * Required. The train budget of creating this model, expressed in milli node
		 * hours i.e. 1,000 value in this field means 1 node hour.
		 * The training cost of the model will not exceed this budget. The final cost
		 * will be attempted to be close to the budget, though may end up being (even)
		 * noticeably smaller - at the backend's discretion. This especially may
		 * happen when further model training ceases to provide any improvements.
		 * If the budget is set to a value known to be insufficient to train a
		 * model for the given dataset, the training won't be attempted and
		 * will error.
		 * The train budget must be between 1,000 and 72,000 milli node hours,
		 * inclusive.
		 */
		trainBudgetMilliNodeHours?: string;

		/**
		 * Output only. The actual training cost of the model, expressed in milli
		 * node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed
		 * to not exceed the train budget.
		 */
		trainCostMilliNodeHours?: string;
	}


	/** Model metadata that is specific to text classification. */
	export interface TextClassificationModelMetadata {

		/** Output only. Classification type of the dataset used to train this model. */
		classificationType?: ImageClassificationDatasetMetadataClassificationType;
	}


	/** Model metadata that is specific to text extraction. */
	export interface TextExtractionModelMetadata {
	}


	/** Model metadata that is specific to text sentiment. */
	export interface TextSentimentModelMetadata {
	}


	/** Model metadata that is specific to translation. */
	export interface TranslationModelMetadata {

		/**
		 * The resource name of the model to use as a baseline to train the custom
		 * model. If unset, we use the default base model provided by Google
		 * Translate. Format:
		 * `projects/{project_id}/locations/{location_id}/models/{model_id}`
		 */
		baseModel?: string;

		/**
		 * Output only. Inferred from the dataset.
		 * The source languge (The BCP-47 language code) that is used for training.
		 */
		sourceLanguageCode?: string;

		/**
		 * Output only. The target languge (The BCP-47 language code) that is used for
		 * training.
		 */
		targetLanguageCode?: string;
	}


	/** Model metadata specific to video classification. */
	export interface VideoClassificationModelMetadata {
	}


	/** Model metadata specific to video object tracking. */
	export interface VideoObjectTrackingModelMetadata {
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


	/** Response message for AutoMl.ListTableSpecs. */
	export interface ListTableSpecsResponse {

		/**
		 * A token to retrieve next page of results.
		 * Pass to ListTableSpecsRequest.page_token to obtain that page.
		 */
		nextPageToken?: string;

		/** The table specs read. */
		tableSpecs?: Array<TableSpec>;
	}


	/**
	 * A specification of a relational table.
	 * The table's schema is represented via its child column specs. It is
	 * pre-populated as part of ImportData by schema inference algorithm, the
	 * version of which is a required parameter of ImportData InputConfig.
	 * Note: While working with a table, at times the schema may be
	 * inconsistent with the data in the table (e.g. string in a FLOAT64 column).
	 * The consistency validation is done upon creation of a model.
	 * Used by:
	 *   *   Tables
	 */
	export interface TableSpec {

		/**
		 * Output only. The number of columns of the table. That is, the number of
		 * child ColumnSpec-s.
		 */
		columnCount?: string;

		/**
		 * Used to perform consistent read-modify-write updates. If not set, a blind
		 * "overwrite" update happens.
		 */
		etag?: string;

		/**
		 * Output only. Input configs via which data currently residing in the table
		 * had been imported.
		 */
		inputConfigs?: Array<InputConfig>;

		/**
		 * Output only. The resource name of the table spec.
		 * Form:
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}`
		 */
		name?: string;

		/** Output only. The number of rows (i.e. examples) in the table. */
		rowCount?: string;

		/**
		 * column_spec_id of the time column. Only used if the parent dataset's
		 * ml_use_column_spec_id is not set. Used to split rows into TRAIN, VALIDATE
		 * and TEST sets such that oldest rows go to TRAIN set, newest to TEST, and
		 * those in between to VALIDATE.
		 * Required type: TIMESTAMP.
		 * If both this column and ml_use_column are not set, then ML use of all rows
		 * will be assigned by AutoML. NOTE: Updates of this field will instantly
		 * affect any other users concurrently working with the dataset.
		 */
		timeColumnSpecId?: string;

		/**
		 * Output only. The number of valid rows (i.e. without values that don't match
		 * DataType-s of their columns).
		 */
		validRowCount?: string;
	}


	/** Metadata used across all long running operations returned by AutoML API. */
	export interface OperationMetadata {

		/** Details of BatchPredict operation. */
		batchPredictDetails?: BatchPredictOperationMetadata;

		/** Details of CreateModel operation. */
		createModelDetails?: CreateModelOperationMetadata;

		/** Output only. Time when the operation was created. */
		createTime?: string;

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

		/**
		 * Output only. Partial failures encountered.
		 * E.g. single files that couldn't be read.
		 * This field should never exceed 20 entries.
		 * Status details field will contain standard GCP error details.
		 */
		partialFailures?: Array<Status>;

		/**
		 * Output only. Progress of operation. Range: [0, 100].
		 * Not used currently.
		 */
		progressPercent?: number;

		/** Details of UndeployModel operation. */
		undeployModelDetails?: UndeployModelOperationMetadata;

		/** Output only. Time when the operation was updated for the last time. */
		updateTime?: string;
	}


	/** Details of UndeployModel operation. */
	export interface UndeployModelOperationMetadata {
	}


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access
	 * controls for Google Cloud resources.
	 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
	 * `members` to a single `role`. Members can be user accounts, service accounts,
	 * Google groups, and domains (such as G Suite). A `role` is a named list of
	 * permissions; each `role` can be an IAM predefined role or a user-created
	 * custom role.
	 * Optionally, a `binding` can specify a `condition`, which is a logical
	 * expression that allows access to a resource only if the expression evaluates
	 * to `true`. A condition can add constraints based on attributes of the
	 * request, the resource, or both.
	 * **JSON example:**
	 *     {
	 *       "bindings": [
	 *         {
	 *           "role": "roles/resourcemanager.organizationAdmin",
	 *           "members": [
	 *             "user:mike@example.com",
	 *             "group:admins@example.com",
	 *             "domain:google.com",
	 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *           ]
	 *         },
	 *         {
	 *           "role": "roles/resourcemanager.organizationViewer",
	 *           "members": ["user:eve@example.com"],
	 *           "condition": {
	 *             "title": "expirable access",
	 *             "description": "Does not grant access after Sep 2020",
	 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *           }
	 *         }
	 *       ],
	 *       "etag": "BwWWja0YfJA=",
	 *       "version": 3
	 *     }
	 * **YAML example:**
	 *     bindings:
	 *     - members:
	 *       - user:mike@example.com
	 *       - group:admins@example.com
	 *       - domain:google.com
	 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *       role: roles/resourcemanager.organizationAdmin
	 *     - members:
	 *       - user:eve@example.com
	 *       role: roles/resourcemanager.organizationViewer
	 *       condition:
	 *         title: expirable access
	 *         description: Does not grant access after Sep 2020
	 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 *     - etag: BwWWja0YfJA=
	 *     - version: 3
	 * For a description of IAM and its features, see the
	 * [IAM documentation](https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding>;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of a policy from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform policy updates in order to avoid race
		 * conditions: An `etag` is returned in the response to `getIamPolicy`, and
		 * systems are expected to put that etag in the request to `setIamPolicy` to
		 * ensure that their change will be applied to the same version of the policy.
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 */
		etag?: string;

		/**
		 * Specifies the format of the policy.
		 * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
		 * are rejected.
		 * Any operation that affects conditional role bindings must specify version
		 * `3`. This requirement applies to the following operations:
		 * * Getting a policy that includes a conditional role binding
		 * * Adding a conditional role binding to a policy
		 * * Changing a conditional role binding in a policy
		 * * Removing any role binding, with or without a condition, from a policy
		 * that includes conditions
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 * If a policy does not include any conditions, operations on that policy may
		 * specify any valid version or leave the field unset.
		 */
		version?: number;
	}


	/** Request message for PredictionService.Predict. */
	export interface PredictRequest {

		/**
		 * Additional domain-specific parameters, any string must be up to 25000
		 * characters long.
		 * *  For Image Classification:
		 * `score_threshold` - (float) A value from 0.0 to 1.0. When the model
		 * makes predictions for an image, it will only produce results that have
		 * at least this confidence score. The default is 0.5.
		 * *  For Image Object Detection:
		 * `score_threshold` - (float) When Model detects objects on the image,
		 * it will only produce bounding boxes which have at least this
		 * confidence score. Value in 0 to 1 range, default is 0.5.
		 * `max_bounding_box_count` - (int64) No more than this number of bounding
		 * boxes will be returned in the response. Default is 100, the
		 * requested value may be limited by server.
		 * *  For Tables:
		 * feature_imp<span>ortan</span>ce - (boolean) Whether feature importance
		 * should be populated in the returned TablesAnnotation.
		 * The default is false.
		 */
		params?: {[id: string]: string };

		/** Example data used for training or prediction. */
		payload?: ExamplePayload;
	}


	/** Response message for PredictionService.Predict. */
	export interface PredictResponse {

		/**
		 * Additional domain-specific prediction response metadata.
		 * * For Image Object Detection:
		 * `max_bounding_box_count` - (int64) At most that many bounding boxes per
		 * image could have been returned.
		 * * For Text Sentiment:
		 * `sentiment_score` - (float, deprecated) A value between -1 and 1,
		 * -1 maps to least positive sentiment, while 1 maps to the most positive
		 * one and the higher the score, the more positive the sentiment in the
		 * document is. Yet these values are relative to the training data, so
		 * e.g. if all data was positive then -1 will be also positive (though
		 * the least).
		 * The sentiment_score shouldn't be confused with "score" or "magnitude"
		 * from the previous Natural Language Sentiment Analysis API.
		 */
		metadata?: {[id: string]: string };

		/**
		 * Prediction result.
		 * Translation and Text Sentiment will return precisely one payload.
		 */
		payload?: Array<AnnotationPayload>;

		/** Example data used for training or prediction. */
		preprocessedInput?: ExamplePayload;
	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access
		 * controls for Google Cloud resources.
		 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
		 * `members` to a single `role`. Members can be user accounts, service accounts,
		 * Google groups, and domains (such as G Suite). A `role` is a named list of
		 * permissions; each `role` can be an IAM predefined role or a user-created
		 * custom role.
		 * Optionally, a `binding` can specify a `condition`, which is a logical
		 * expression that allows access to a resource only if the expression evaluates
		 * to `true`. A condition can add constraints based on attributes of the
		 * request, the resource, or both.
		 * **JSON example:**
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * **YAML example:**
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the
		 * [IAM documentation](https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string>;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string>;
	}


	/** Request message for AutoMl.UndeployModel. */
	export interface UndeployModelRequest {
	}


	/** The request message for Operations.WaitOperation. */
	export interface WaitOperationRequest {

		/**
		 * The maximum duration to wait before timing out. If left blank, the wait
		 * will be at most the time permitted by the underlying HTTP/RPC protocol.
		 * If RPC context deadline is also specified, the shorter one will be used.
		 */
		timeout?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a dataset and all of its contents.
		 * Returns empty response in the
		 * response field when it completes,
		 * and `delete_details` in the
		 * metadata field.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The resource name of the dataset to delete.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a column spec.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The resource name of the column spec to retrieve.
		 * @param {string} fieldMask Mask specifying which fields to read.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_tableSpecs_columnSpecs_get(name: string, fieldMask: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a column spec.
		 * Patch v1beta1/{name}
		 * @param {string} name Output only. The resource name of the column specs.
		 * Form:
		 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`
		 * @param {string} updateMask The update mask applies to the resource.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_tableSpecs_columnSpecs_patch(name: string, updateMask: string, requestBody: ColumnSpec): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
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
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter An expression for filtering the results of the request.
		 * * `operation_id` - for = or !=.
		 * * `done` - for = or !=.
		 * * `works_on` - for = or !=.
		 * Some examples of using the filter are:
		 * * `done=true` --> The operation has finished running.
		 * * `works_on = projects/my-project/locations/us-central1/datasets/5`
		 *     --> The operation works on a dataset with ID 5.
		 * * `works_on = projects/my-project/locations/us-central1/models/15`
		 *     --> The operation works on a model with ID 15.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_operations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Perform a batch prediction. Unlike the online Predict, batch
		 * prediction result won't be immediately available in the response. Instead,
		 * a long running operation object is returned. User can poll the operation
		 * result via GetOperation
		 * method. Once the operation is done, BatchPredictResult is returned in
		 * the response field.
		 * Available for following ML problems:
		 * * Image Classification
		 * * Image Object Detection
		 * * Video Classification
		 * * Video Object Tracking * Text Extraction
		 * * Tables
		 * Post v1beta1/{name}:batchPredict
		 * @param {string} name Required. Name of the model requested to serve the batch prediction.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_batchPredict(name: string, requestBody: BatchPredictRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':batchPredict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Post v1beta1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deploys a model. If a model is already deployed, deploying it with the
		 * same parameters has no effect. Deploying with different parametrs
		 * (as e.g. changing
		 * node_number)
		 * will reset the deployment state without pausing the model's availability.
		 * Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage
		 * deployment automatically.
		 * Returns an empty response in the
		 * response field when it completes.
		 * Post v1beta1/{name}:deploy
		 * @param {string} name Required. Resource name of the model to deploy.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_deploy(name: string, requestBody: DeployModelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':deploy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports a trained, "export-able", model to a user specified Google Cloud
		 * Storage location. A model is considered export-able if and only if it has
		 * an export format defined for it in
		 * ModelExportOutputConfig.
		 * Returns an empty response in the
		 * response field when it completes.
		 * Post v1beta1/{name}:export
		 * @param {string} name Required. The resource name of the model to export.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_export(name: string, requestBody: ExportModelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports dataset's data to the provided output location.
		 * Returns an empty response in the
		 * response field when it completes.
		 * Post v1beta1/{name}:exportData
		 * @param {string} name Required. The resource name of the dataset.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_exportData(name: string, requestBody: ExportDataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports examples on which the model was evaluated (i.e. which were in the
		 * TEST set of the dataset the model was created from), together with their
		 * ground truth annotations and the annotations created (predicted) by the
		 * model.
		 * The examples, ground truth and predictions are exported in the state
		 * they were at the moment the model was evaluated.
		 * This export is available only for 30 days since the model evaluation is
		 * created.
		 * Currently only available for Tables.
		 * Returns an empty response in the
		 * response field when it completes.
		 * Post v1beta1/{name}:exportEvaluatedExamples
		 * @param {string} name Required. The resource name of the model whose evaluated examples are to
		 * be exported.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_exportEvaluatedExamples(name: string, requestBody: ExportEvaluatedExamplesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportEvaluatedExamples', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Imports data into a dataset.
		 * For Tables this method can only be called on an empty Dataset.
		 * For Tables:
		 * *   A
		 * schema_inference_version
		 * parameter must be explicitly set.
		 * Returns an empty response in the
		 * response field when it completes.
		 * Post v1beta1/{name}:importData
		 * @param {string} name Required. Dataset name. Dataset must already exist. All imported
		 * annotations and examples will be added.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_importData(name: string, requestBody: ImportDataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':importData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Perform an online prediction. The prediction result will be directly
		 * returned in the response.
		 * Available for following ML problems, and their expected request payloads:
		 * * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes
		 * up to 30MB.
		 * * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes
		 * up to 30MB.
		 * * Text Classification - TextSnippet, content up to 60,000 characters,
		 * UTF-8 encoded.
		 * * Text Extraction - TextSnippet, content up to 30,000 characters,
		 * UTF-8 NFC encoded.
		 * * Translation - TextSnippet, content up to 25,000 characters, UTF-8
		 * encoded.
		 * * Tables - Row, with column values matching the columns of the model,
		 * up to 5MB. Not available for FORECASTING
		 * prediction_type.
		 * * Text Sentiment - TextSnippet, content up 500 characters, UTF-8
		 * encoded.
		 * Post v1beta1/{name}:predict
		 * @param {string} name Required. Name of the model requested to serve the prediction.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_predict(name: string, requestBody: PredictRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':predict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Undeploys a model. If the model is not deployed this method has no effect.
		 * Only applicable for Text Classification, Image Object Detection and Tables;
		 * all other domains manage deployment automatically.
		 * Returns an empty response in the
		 * response field when it completes.
		 * Post v1beta1/{name}:undeploy
		 * @param {string} name Required. Resource name of the model to undeploy.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_undeploy(name: string, requestBody: UndeployModelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':undeploy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Waits for the specified long-running operation until it is done or reaches
		 * at most a specified timeout, returning the latest state.  If the operation
		 * is already done, the latest state is immediately returned.  If the timeout
		 * specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
		 * timeout is used.  If the server does not support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.
		 * Note that this method is on a best-effort basis.  It may return the latest
		 * state before the specified timeout (including immediately), meaning even an
		 * immediate response is no guarantee that the operation is done.
		 * Post v1beta1/{name}:wait
		 * @param {string} name The name of the operation resource to wait on.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_operations_wait(name: string, requestBody: WaitOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':wait', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists column specs in a table spec.
		 * Get v1beta1/{parent}/columnSpecs
		 * @param {string} parent Required. The resource name of the table spec to list column specs from.
		 * @param {string} fieldMask Mask specifying which fields to read.
		 * @param {string} filter Filter expression, see go/filtering.
		 * @param {number} pageSize Requested page size. The server can return fewer results than requested.
		 * If unspecified, the server will pick a default size.
		 * @param {string} pageToken A token identifying a page of results for the server to return.
		 * Typically obtained from the
		 * ListColumnSpecsResponse.next_page_token field of the previous
		 * AutoMl.ListColumnSpecs call.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_tableSpecs_columnSpecs_list(parent: string, fieldMask: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/columnSpecs&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists datasets in a project.
		 * Get v1beta1/{parent}/datasets
		 * @param {string} parent Required. The resource name of the project from which to list datasets.
		 * @param {string} filter An expression for filtering the results of the request.
		 *   * `dataset_metadata` - for existence of the case (e.g.
		 *             image_classification_dataset_metadata:*). Some examples of using the filter are:
		 *   * `translation_dataset_metadata:*` --> The dataset has
		 *                                          translation_dataset_metadata.
		 * @param {number} pageSize Requested page size. Server may return fewer results than requested.
		 * If unspecified, server will pick a default size.
		 * @param {string} pageToken A token identifying a page of results for the server to return
		 * Typically obtained via
		 * ListDatasetsResponse.next_page_token of the previous
		 * AutoMl.ListDatasets call.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a dataset.
		 * Post v1beta1/{parent}/datasets
		 * @param {string} parent Required. The resource name of the project to create the dataset for.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_create(parent: string, requestBody: Dataset): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists model evaluations.
		 * Get v1beta1/{parent}/modelEvaluations
		 * @param {string} parent Required. Resource name of the model to list the model evaluations for.
		 * If modelId is set as "-", this will list model evaluations from across all
		 * models of the parent location.
		 * @param {string} filter An expression for filtering the results of the request.
		 *   * `annotation_spec_id` - for =, !=  or existence. See example below for
		 *                          the last.
		 * Some examples of using the filter are:
		 *   * `annotation_spec_id!=4` --> The model evaluation was done for
		 *                             annotation spec with ID different than 4.
		 *   * `NOT annotation_spec_id:*` --> The model evaluation was done for
		 *                                aggregate of all annotation specs.
		 * @param {number} pageSize Requested page size.
		 * @param {string} pageToken A token identifying a page of results for the server to return.
		 * Typically obtained via
		 * ListModelEvaluationsResponse.next_page_token of the previous
		 * AutoMl.ListModelEvaluations call.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_modelEvaluations_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/modelEvaluations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists models.
		 * Get v1beta1/{parent}/models
		 * @param {string} parent Required. Resource name of the project, from which to list the models.
		 * @param {string} filter An expression for filtering the results of the request.
		 *   * `model_metadata` - for existence of the case (e.g.
		 *             video_classification_model_metadata:*).
		 *   * `dataset_id` - for = or !=. Some examples of using the filter are:
		 *   * `image_classification_model_metadata:*` --> The model has
		 *                                        image_classification_model_metadata.
		 *   * `dataset_id=5` --> The model was created from a dataset with ID 5.
		 * @param {number} pageSize Requested page size.
		 * @param {string} pageToken A token identifying a page of results for the server to return
		 * Typically obtained via
		 * ListModelsResponse.next_page_token of the previous
		 * AutoMl.ListModels call.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a model.
		 * Returns a Model in the response
		 * field when it completes.
		 * When you create a model, several model evaluations are created for it:
		 * a global evaluation, and one evaluation for each annotation spec.
		 * Post v1beta1/{parent}/models
		 * @param {string} parent Required. Resource name of the parent project where the model is being created.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_models_create(parent: string, requestBody: Model): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists table specs in a dataset.
		 * Get v1beta1/{parent}/tableSpecs
		 * @param {string} parent Required. The resource name of the dataset to list table specs from.
		 * @param {string} fieldMask Mask specifying which fields to read.
		 * @param {string} filter Filter expression, see go/filtering.
		 * @param {number} pageSize Requested page size. The server can return fewer results than requested.
		 * If unspecified, the server will pick a default size.
		 * @param {string} pageToken A token identifying a page of results for the server to return.
		 * Typically obtained from the
		 * ListTableSpecsResponse.next_page_token field of the previous
		 * AutoMl.ListTableSpecs call.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_tableSpecs_list(parent: string, fieldMask: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tableSpecs&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a resource.
		 * Returns an empty policy if the resource exists and does not have a policy
		 * set.
		 * Get v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_getIamPolicy(resource: string, options_requestedPolicyVersion: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any
		 * existing policy.
		 * Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_datasets_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * If the resource does not exist, this will return an empty set of
		 * permissions, not a NOT_FOUND error.
		 * Note: This operation is designed to be used for building permission-aware
		 * UIs and command-line tools, not for authorization checking. This operation
		 * may "fail open" without warning.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Automl_projects_locations_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

