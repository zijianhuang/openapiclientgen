import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Aggregate metrics for classification/classifier models. For multi-class
	 * models, the metrics are either macro-averaged or micro-averaged. When
	 * macro-averaged, the metrics are calculated for each label and then an
	 * unweighted average is taken of those values. When micro-averaged, the
	 * metric is calculated globally by counting the total number of correctly
	 * predicted rows.
	 */
	export interface AggregateClassificationMetrics {

		/**
		 * Accuracy is the fraction of predictions given the correct label. For
		 * multiclass this is a micro-averaged metric.
		 */
		accuracy?: number;

		/**
		 * The F1 score is an average of recall and precision. For multiclass
		 * this is a macro-averaged metric.
		 */
		f1Score?: number;

		/** Logarithmic Loss. For multiclass this is a macro-averaged metric. */
		logLoss?: number;

		/**
		 * Precision is the fraction of actual positive predictions that had
		 * positive actual labels. For multiclass this is a macro-averaged
		 * metric treating each class as a binary classifier.
		 */
		precision?: number;

		/**
		 * Recall is the fraction of actual positive labels that were given a
		 * positive prediction. For multiclass this is a macro-averaged metric.
		 */
		recall?: number;

		/**
		 * Area Under a ROC Curve. For multiclass this is a macro-averaged
		 * metric.
		 */
		rocAuc?: number;

		/**
		 * Threshold at which the metrics are computed. For binary
		 * classification models this is the positive class threshold.
		 * For multi-class classfication models this is the confidence
		 * threshold.
		 */
		threshold?: number;
	}


	/** Input/output argument of a function or a stored procedure. */
	export interface Argument {

		/** Optional. Defaults to FIXED_TYPE. */
		argumentKind?: ArgumentArgumentKind;

		/**
		 * The type of a variable, e.g., a function argument.
		 * Examples:
		 * INT64: {type_kind="INT64"}
		 * ARRAY<STRING>: {type_kind="ARRAY", array_element_type="STRING"}
		 * STRUCT<x STRING, y ARRAY<DATE>>:
		 * {type_kind="STRUCT",
		 * struct_type={fields=[
		 * {name="x", type={type_kind="STRING"}},
		 * {name="y", type={type_kind="ARRAY", array_element_type="DATE"}}
		 * ]}}
		 */
		dataType?: StandardSqlDataType;

		/**
		 * Optional. Specifies whether the argument is input or output.
		 * Can be set for procedures only.
		 */
		mode?: ArgumentMode;

		/** Optional. The name of this argument. Can be absent for function return argument. */
		name?: string;
	}

	export enum ArgumentArgumentKind { ARGUMENT_KIND_UNSPECIFIED = 0, FIXED_TYPE = 1, ANY_TYPE = 2 }


	/**
	 * The type of a variable, e.g., a function argument.
	 * Examples:
	 * INT64: {type_kind="INT64"}
	 * ARRAY<STRING>: {type_kind="ARRAY", array_element_type="STRING"}
	 * STRUCT<x STRING, y ARRAY<DATE>>:
	 *   {type_kind="STRUCT",
	 *    struct_type={fields=[
	 *      {name="x", type={type_kind="STRING"}},
	 *      {name="y", type={type_kind="ARRAY", array_element_type="DATE"}}
	 *    ]}}
	 */
	export interface StandardSqlDataType {

		/**
		 * The type of a variable, e.g., a function argument.
		 * Examples:
		 * INT64: {type_kind="INT64"}
		 * ARRAY<STRING>: {type_kind="ARRAY", array_element_type="STRING"}
		 * STRUCT<x STRING, y ARRAY<DATE>>:
		 * {type_kind="STRUCT",
		 * struct_type={fields=[
		 * {name="x", type={type_kind="STRING"}},
		 * {name="y", type={type_kind="ARRAY", array_element_type="DATE"}}
		 * ]}}
		 */
		arrayElementType?: StandardSqlDataType;
		structType?: StandardSqlStructType;

		/**
		 * Required. The top level type of this field.
		 * Can be any standard SQL data type (e.g., "INT64", "DATE", "ARRAY").
		 */
		typeKind?: StandardSqlDataTypeTypeKind;
	}

	export interface StandardSqlStructType {
		fields?: Array<StandardSqlField>;
	}


	/** A field or a column. */
	export interface StandardSqlField {

		/** Optional. The name of this field. Can be absent for struct fields. */
		name?: string;

		/**
		 * The type of a variable, e.g., a function argument.
		 * Examples:
		 * INT64: {type_kind="INT64"}
		 * ARRAY<STRING>: {type_kind="ARRAY", array_element_type="STRING"}
		 * STRUCT<x STRING, y ARRAY<DATE>>:
		 * {type_kind="STRUCT",
		 * struct_type={fields=[
		 * {name="x", type={type_kind="STRING"}},
		 * {name="y", type={type_kind="ARRAY", array_element_type="DATE"}}
		 * ]}}
		 */
		type?: StandardSqlDataType;
	}

	export enum StandardSqlDataTypeTypeKind { TYPE_KIND_UNSPECIFIED = 0, INT64 = 1, BOOL = 2, FLOAT64 = 3, STRING = 4, BYTES = 5, TIMESTAMP = 6, DATE = 7, TIME = 8, DATETIME = 9, GEOGRAPHY = 10, NUMERIC = 11, ARRAY = 12, STRUCT = 13 }

	export enum ArgumentMode { MODE_UNSPECIFIED = 0, IN = 1, OUT = 2, INOUT = 3 }


	/** Arima coefficients. */
	export interface ArimaCoefficients {

		/** Auto-regressive coefficients, an array of double. */
		autoRegressiveCoefficients?: Array<number>;

		/** Intercept coefficient, just a double not an array. */
		interceptCoefficient?: number;

		/** Moving-average coefficients, an array of double. */
		movingAverageCoefficients?: Array<number>;
	}


	/** ARIMA model fitting metrics. */
	export interface ArimaFittingMetrics {

		/** AIC */
		aic?: number;

		/** log-likelihood */
		logLikelihood?: number;

		/** variance. */
		variance?: number;
	}


	/** Arima model information. */
	export interface ArimaModelInfo {

		/** Arima coefficients. */
		arimaCoefficients?: ArimaCoefficients;

		/** ARIMA model fitting metrics. */
		arimaFittingMetrics?: ArimaFittingMetrics;

		/** Arima order, can be used for both non-seasonal and seasonal parts. */
		nonSeasonalOrder?: ArimaOrder;
	}


	/** Arima order, can be used for both non-seasonal and seasonal parts. */
	export interface ArimaOrder {

		/** Order of the differencing part. */
		d?: string;

		/** Order of the autoregressive part. */
		p?: string;

		/** Order of the moving-average part. */
		q?: string;
	}


	/**
	 * (Auto-)arima fitting result. Wrap everything in ArimaResult for easier
	 * refactoring if we want to use model-specific iteration results.
	 */
	export interface ArimaResult {

		/**
		 * This message is repeated because there are multiple arima models
		 * fitted in auto-arima. For non-auto-arima model, its size is one.
		 */
		arimaModelInfo?: Array<ArimaModelInfo>;

		/**
		 * Seasonal periods. Repeated because multiple periods are supported for
		 * one time series.
		 */
		seasonalPeriods?: Array<string>;
	}

	export interface BigQueryModelTraining {

		/** [Output-only, Beta] Index of current ML training iteration. Updated during create model query job to show job progress. */
		currentIteration?: number;

		/** [Output-only, Beta] Expected number of iterations for the create model query job specified as num_iterations in the input query. The actual total number of iterations may be less than this number due to early stop. */
		expectedTotalIterations?: string;
	}

	export interface BigtableColumn {

		/** [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels. */
		encoding?: string;

		/** [Optional] If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries. */
		fieldName?: string;

		/** [Optional] If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels. */
		onlyReadLatest?: boolean;

		/** [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as field_name. */
		qualifierEncoded?: string;
		qualifierString?: string;

		/** [Optional] The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels. */
		type?: string;
	}

	export interface BigtableColumnFamily {

		/** [Optional] Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed as a list through .Column field. */
		columns?: Array<BigtableColumn>;

		/** [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it. */
		encoding?: string;

		/** Identifier of the column family. */
		familyId?: string;

		/** [Optional] If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column. */
		onlyReadLatest?: boolean;

		/** [Optional] The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it. */
		type?: string;
	}

	export interface BigtableOptions {

		/** [Optional] List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the 'type' field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable. */
		columnFamilies?: Array<BigtableColumnFamily>;

		/** [Optional] If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false. */
		ignoreUnspecifiedColumnFamilies?: boolean;

		/** [Optional] If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false. */
		readRowkeyAsString?: boolean;
	}


	/** Evaluation metrics for binary classification/classifier models. */
	export interface BinaryClassificationMetrics {

		/**
		 * Aggregate metrics for classification/classifier models. For multi-class
		 * models, the metrics are either macro-averaged or micro-averaged. When
		 * macro-averaged, the metrics are calculated for each label and then an
		 * unweighted average is taken of those values. When micro-averaged, the
		 * metric is calculated globally by counting the total number of correctly
		 * predicted rows.
		 */
		aggregateClassificationMetrics?: AggregateClassificationMetrics;

		/** Binary confusion matrix at multiple thresholds. */
		binaryConfusionMatrixList?: Array<BinaryConfusionMatrix>;

		/** Label representing the negative class. */
		negativeLabel?: string;

		/** Label representing the positive class. */
		positiveLabel?: string;
	}


	/** Confusion matrix for binary classification models. */
	export interface BinaryConfusionMatrix {

		/** The fraction of predictions given the correct label. */
		accuracy?: number;

		/** The equally weighted average of recall and precision. */
		f1Score?: number;

		/** Number of false samples predicted as false. */
		falseNegatives?: string;

		/** Number of false samples predicted as true. */
		falsePositives?: string;

		/** Threshold value used when computing each of the following metric. */
		positiveClassThreshold?: number;

		/**
		 * The fraction of actual positive predictions that had positive actual
		 * labels.
		 */
		precision?: number;

		/**
		 * The fraction of actual positive labels that were given a positive
		 * prediction.
		 */
		recall?: number;

		/** Number of true samples predicted as false. */
		trueNegatives?: string;

		/** Number of true samples predicted as true. */
		truePositives?: string;
	}

	export interface BqmlIterationResult {

		/** [Output-only, Beta] Time taken to run the training iteration in milliseconds. */
		durationMs?: string;

		/** [Output-only, Beta] Eval loss computed on the eval data at the end of the iteration. The eval loss is used for early stopping to avoid overfitting. No eval loss if eval_split_method option is specified as no_split or auto_split with input data size less than 500 rows. */
		evalLoss?: number;

		/** [Output-only, Beta] Index of the ML training iteration, starting from zero for each training run. */
		index?: number;

		/** [Output-only, Beta] Learning rate used for this iteration, it varies for different training iterations if learn_rate_strategy option is not constant. */
		learnRate?: number;

		/** [Output-only, Beta] Training loss computed on the training data at the end of the iteration. The training loss function is defined by model type. */
		trainingLoss?: number;
	}

	export interface BqmlTrainingRun {

		/** [Output-only, Beta] List of each iteration results. */
		iterationResults?: Array<BqmlIterationResult>;

		/** [Output-only, Beta] Training run start time in milliseconds since the epoch. */
		startTime?: Date;

		/** [Output-only, Beta] Different state applicable for a training run. IN PROGRESS: Training run is in progress. FAILED: Training run ended due to a non-retryable failure. SUCCEEDED: Training run successfully completed. CANCELLED: Training run cancelled by the user. */
		state?: string;

		/** [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run. */
		trainingOptions?: BqmlTrainingRunTrainingOptions;
	}

	export interface BqmlTrainingRunTrainingOptions {
		earlyStop?: boolean;
		l1Reg?: number;
		l2Reg?: number;
		learnRate?: number;
		learnRateStrategy?: string;
		lineSearchInitLearnRate?: number;
		maxIteration?: string;
		minRelProgress?: number;
		warmStart?: boolean;
	}


	/** Representative value of a categorical feature. */
	export interface CategoricalValue {

		/**
		 * Counts of all categories for the categorical feature. If there are
		 * more than ten categories, we return top ten (by count) and return
		 * one more CategoryCount with category "_OTHER_" and count as
		 * aggregate counts of remaining categories.
		 */
		categoryCounts?: Array<CategoryCount>;
	}


	/** Represents the count of a single category within the cluster. */
	export interface CategoryCount {

		/** The name of category. */
		category?: string;

		/**
		 * The count of training samples matching the category within the
		 * cluster.
		 */
		count?: string;
	}


	/** Message containing the information about one cluster. */
	export interface Cluster {

		/** Centroid id. */
		centroidId?: string;

		/** Count of training data rows that were assigned to this cluster. */
		count?: string;

		/** Values of highly variant features for this cluster. */
		featureValues?: Array<FeatureValue>;
	}


	/** Representative value of a single feature within the cluster. */
	export interface FeatureValue {

		/** Representative value of a categorical feature. */
		categoricalValue?: CategoricalValue;

		/** The feature column name. */
		featureColumn?: string;

		/**
		 * The numerical feature value. This is the centroid value for this
		 * feature.
		 */
		numericalValue?: number;
	}


	/** Information about a single cluster for clustering model. */
	export interface ClusterInfo {

		/** Centroid id. */
		centroidId?: string;

		/**
		 * Cluster radius, the average distance from centroid
		 * to each point assigned to the cluster.
		 */
		clusterRadius?: number;

		/** Cluster size, the total number of points assigned to the cluster. */
		clusterSize?: string;
	}

	export interface Clustering {

		/** [Repeated] One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. When you cluster a table using multiple columns, the order of columns you specify is important. The order of the specified columns determines the sort order of the data. */
		fields?: Array<string>;
	}


	/** Evaluation metrics for clustering models. */
	export interface ClusteringMetrics {

		/** [Beta] Information for all clusters. */
		clusters?: Array<Cluster>;

		/** Davies-Bouldin index. */
		daviesBouldinIndex?: number;

		/** Mean of squared distances between each sample to its cluster centroid. */
		meanSquaredDistance?: number;
	}


	/** Confusion matrix for multi-class classification models. */
	export interface ConfusionMatrix {

		/**
		 * Confidence threshold used when computing the entries of the
		 * confusion matrix.
		 */
		confidenceThreshold?: number;

		/** One row per actual label. */
		rows?: Array<Row>;
	}


	/** A single row in the confusion matrix. */
	export interface Row {

		/** The original label of this row. */
		actualLabel?: string;

		/** Info describing predicted label distribution. */
		entries?: Array<Entry>;
	}


	/** A single entry in the confusion matrix. */
	export interface Entry {

		/** Number of items being predicted as this label. */
		itemCount?: string;

		/**
		 * The predicted label. For confidence_threshold > 0, we will
		 * also add an entry indicating the number of items under the
		 * confidence threshold.
		 */
		predictedLabel?: string;
	}

	export interface CsvOptions {

		/** [Optional] Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. */
		allowJaggedRows?: boolean;

		/** [Optional] Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. */
		allowQuotedNewlines?: boolean;

		/** [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties. */
		encoding?: string;

		/** [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (','). */
		fieldDelimiter?: string;

		/**
		 * [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
		 * Pattern: .?
		 */
		quote?: string;

		/** [Optional] The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema. */
		skipLeadingRows?: string;
	}


	/**
	 * Data split result. This contains references to the training and evaluation
	 * data tables that were used to train the model.
	 */
	export interface DataSplitResult {
		evaluationTable?: TableReference;
		trainingTable?: TableReference;
	}

	export interface TableReference {

		/** [Required] The ID of the dataset containing this table. */
		datasetId?: string;

		/** [Required] The ID of the project containing this table. */
		projectId?: string;

		/** [Required] The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		tableId?: string;
	}

	export interface Dataset {

		/** [Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER; */
		DatasetAccess?: Array<DatasetAccess>;

		/** [Output-only] The time when this dataset was created, in milliseconds since the epoch. */
		creationTime?: string;
		datasetReference?: DatasetReference;
		defaultEncryptionConfiguration?: EncryptionConfiguration;

		/** [Optional] The default partition expiration for all partitioned tables in the dataset, in milliseconds. Once this property is set, all newly-created partitioned tables in the dataset will have an expirationMs property in the timePartitioning settings set to this value, and changing the value will only affect new tables, not existing ones. The storage in a partition will have an expiration time of its partition time plus this value. Setting this property overrides the use of defaultTableExpirationMs for partitioned tables: only one of defaultTableExpirationMs and defaultPartitionExpirationMs will be used for any new partitioned table. If you provide an explicit timePartitioning.expirationMs when creating or updating a partitioned table, that value takes precedence over the default partition expiration time indicated by this property. */
		defaultPartitionExpirationMs?: string;

		/** [Optional] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property. */
		defaultTableExpirationMs?: string;

		/** [Optional] A user-friendly description of the dataset. */
		description?: string;

		/** [Output-only] A hash of the resource. */
		etag?: string;

		/** [Optional] A descriptive name for the dataset. */
		friendlyName?: string;

		/** [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field. */
		id?: string;

		/** [Output-only] The resource type. */
		kind?: string;

		/** The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information. */
		labels?: {[id: string]: any };

		/** [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch. */
		lastModifiedTime?: string;

		/** The geographic location where the dataset should reside. The default value is US. See details at https://cloud.google.com/bigquery/docs/locations. */
		location?: string;

		/** [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource. */
		selfLink?: string;
	}

	export interface DatasetAccess {

		/** [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN". */
		domain?: string;

		/** [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP". */
		groupByEmail?: string;

		/** [Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. */
		iamMember?: string;

		/** [Required] An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: OWNER  roles/bigquery.dataOwner WRITER  roles/bigquery.dataEditor READER  roles/bigquery.dataViewer This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER". */
		role?: string;

		/** [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members. */
		specialGroup?: string;

		/** [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL". */
		userByEmail?: string;
		view?: TableReference;
	}

	export interface DatasetReference {

		/** [Required] A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		datasetId?: string;

		/** [Optional] The ID of the project containing this dataset. */
		projectId?: string;
	}

	export interface EncryptionConfiguration {

		/** [Optional] Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. */
		kmsKeyName?: string;
	}

	export interface DatasetList {

		/** An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project. */
		DatasetListDatasets?: Array<DatasetListDatasets>;

		/** A hash value of the results page. You can use this property to determine if the page has changed since the last request. */
		etag?: string;

		/** The list type. This property always returns the value "bigquery#datasetList". */
		kind?: string;

		/** A token that can be used to request the next results page. This property is omitted on the final results page. */
		nextPageToken?: string;
	}

	export interface DatasetListDatasets {
		datasetReference?: DatasetReference;

		/** A descriptive name for the dataset, if one exists. */
		friendlyName?: string;

		/** The fully-qualified, unique, opaque ID of the dataset. */
		id?: string;

		/** The resource type. This property always returns the value "bigquery#dataset". */
		kind?: string;

		/** The labels associated with this dataset. You can use these to organize and group your datasets. */
		labels?: {[id: string]: any };

		/** The geographic location where the data resides. */
		location?: string;
	}

	export interface DestinationTableProperties {

		/** [Optional] The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail. */
		description?: string;

		/** [Optional] The friendly name for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current friendly name is provided, the job will fail. */
		friendlyName?: string;

		/** [Optional] The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail. */
		labels?: {[id: string]: any };
	}

	export interface ErrorProto {

		/** Debugging information. This property is internal to Google and should not be used. */
		debugInfo?: string;

		/** Specifies where the error occurred, if present. */
		location?: string;

		/** A human-readable description of the error. */
		message?: string;

		/** A short error code that summarizes the error. */
		reason?: string;
	}


	/**
	 * Evaluation metrics of a model. These are either computed on all training
	 * data or just the eval data based on whether eval data was used during
	 * training. These are not present for imported models.
	 */
	export interface EvaluationMetrics {

		/** Evaluation metrics for binary classification/classifier models. */
		binaryClassificationMetrics?: BinaryClassificationMetrics;

		/** Evaluation metrics for clustering models. */
		clusteringMetrics?: ClusteringMetrics;

		/** Evaluation metrics for multi-class classification/classifier models. */
		multiClassClassificationMetrics?: MultiClassClassificationMetrics;

		/**
		 * Evaluation metrics used by weighted-ALS models specified by
		 * feedback_type=implicit.
		 */
		rankingMetrics?: RankingMetrics;

		/**
		 * Evaluation metrics for regression and explicit feedback type matrix
		 * factorization models.
		 */
		regressionMetrics?: RegressionMetrics;
	}


	/** Evaluation metrics for multi-class classification/classifier models. */
	export interface MultiClassClassificationMetrics {

		/**
		 * Aggregate metrics for classification/classifier models. For multi-class
		 * models, the metrics are either macro-averaged or micro-averaged. When
		 * macro-averaged, the metrics are calculated for each label and then an
		 * unweighted average is taken of those values. When micro-averaged, the
		 * metric is calculated globally by counting the total number of correctly
		 * predicted rows.
		 */
		aggregateClassificationMetrics?: AggregateClassificationMetrics;

		/** Confusion matrix at different thresholds. */
		confusionMatrixList?: Array<ConfusionMatrix>;
	}


	/**
	 * Evaluation metrics used by weighted-ALS models specified by
	 * feedback_type=implicit.
	 */
	export interface RankingMetrics {

		/**
		 * Determines the goodness of a ranking by computing the percentile rank
		 * from the predicted confidence and dividing it by the original rank.
		 */
		averageRank?: number;

		/**
		 * Calculates a precision per user for all the items by ranking them and
		 * then averages all the precisions across all the users.
		 */
		meanAveragePrecision?: number;

		/**
		 * Similar to the mean squared error computed in regression and explicit
		 * recommendation models except instead of computing the rating directly,
		 * the output from evaluate is computed against a preference which is 1 or 0
		 * depending on if the rating exists or not.
		 */
		meanSquaredError?: number;

		/**
		 * A metric to determine the goodness of a ranking calculated from the
		 * predicted confidence by comparing it to an ideal rank measured by the
		 * original ratings.
		 */
		normalizedDiscountedCumulativeGain?: number;
	}


	/**
	 * Evaluation metrics for regression and explicit feedback type matrix
	 * factorization models.
	 */
	export interface RegressionMetrics {

		/** Mean absolute error. */
		meanAbsoluteError?: number;

		/** Mean squared error. */
		meanSquaredError?: number;

		/** Mean squared log error. */
		meanSquaredLogError?: number;

		/** Median absolute error. */
		medianAbsoluteError?: number;

		/** R^2 score. */
		rSquared?: number;
	}

	export interface ExplainQueryStage {

		/** Number of parallel input segments completed. */
		completedParallelInputs?: string;

		/** Milliseconds the average shard spent on CPU-bound tasks. */
		computeMsAvg?: string;

		/** Milliseconds the slowest shard spent on CPU-bound tasks. */
		computeMsMax?: string;

		/** Relative amount of time the average shard spent on CPU-bound tasks. */
		computeRatioAvg?: number;

		/** Relative amount of time the slowest shard spent on CPU-bound tasks. */
		computeRatioMax?: number;

		/** Stage end time represented as milliseconds since epoch. */
		endMs?: string;

		/** Unique ID for stage within plan. */
		id?: string;

		/** IDs for stages that are inputs to this stage. */
		inputStages?: Array<string>;

		/** Human-readable name for stage. */
		name?: string;

		/** Number of parallel input segments to be processed. */
		parallelInputs?: string;

		/** Milliseconds the average shard spent reading input. */
		readMsAvg?: string;

		/** Milliseconds the slowest shard spent reading input. */
		readMsMax?: string;

		/** Relative amount of time the average shard spent reading input. */
		readRatioAvg?: number;

		/** Relative amount of time the slowest shard spent reading input. */
		readRatioMax?: number;

		/** Number of records read into the stage. */
		recordsRead?: string;

		/** Number of records written by the stage. */
		recordsWritten?: string;

		/** Total number of bytes written to shuffle. */
		shuffleOutputBytes?: string;

		/** Total number of bytes written to shuffle and spilled to disk. */
		shuffleOutputBytesSpilled?: string;

		/** Slot-milliseconds used by the stage. */
		slotMs?: string;

		/** Stage start time represented as milliseconds since epoch. */
		startMs?: string;

		/** Current status for the stage. */
		status?: string;

		/** List of operations within the stage in dependency order (approximately chronological). */
		steps?: Array<ExplainQueryStep>;

		/** Milliseconds the average shard spent waiting to be scheduled. */
		waitMsAvg?: string;

		/** Milliseconds the slowest shard spent waiting to be scheduled. */
		waitMsMax?: string;

		/** Relative amount of time the average shard spent waiting to be scheduled. */
		waitRatioAvg?: number;

		/** Relative amount of time the slowest shard spent waiting to be scheduled. */
		waitRatioMax?: number;

		/** Milliseconds the average shard spent on writing output. */
		writeMsAvg?: string;

		/** Milliseconds the slowest shard spent on writing output. */
		writeMsMax?: string;

		/** Relative amount of time the average shard spent on writing output. */
		writeRatioAvg?: number;

		/** Relative amount of time the slowest shard spent on writing output. */
		writeRatioMax?: number;
	}

	export interface ExplainQueryStep {

		/** Machine-readable operation type. */
		kind?: string;

		/** Human-readable stage descriptions. */
		substeps?: Array<string>;
	}

	export interface ExternalDataConfiguration {

		/** Try to detect schema and format options automatically. Any option specified explicitly will be honored. */
		autodetect?: boolean;
		bigtableOptions?: BigtableOptions;

		/** [Optional] The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats. */
		compression?: string;
		csvOptions?: CsvOptions;
		googleSheetsOptions?: GoogleSheetsOptions;

		/** [Optional, Trusted Tester] Deprecated, do not use. Please set hivePartitioningOptions instead. */
		hivePartitioningMode?: string;
		hivePartitioningOptions?: HivePartitioningOptions;

		/** [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored. */
		ignoreUnknownValues?: boolean;

		/** [Optional] The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV, JSON, and Google Sheets. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats. */
		maxBadRecords?: number;
		schema?: TableSchema;

		/** [Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". [Beta] For Google Cloud Bigtable, specify "BIGTABLE". */
		sourceFormat?: string;

		/** [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified. Also, the '*' wildcard character is not allowed. */
		sourceUris?: Array<string>;
	}

	export interface GoogleSheetsOptions {

		/** [Optional] Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20 */
		range?: string;

		/** [Optional] The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema. */
		skipLeadingRows?: string;
	}

	export interface HivePartitioningOptions {

		/** [Optional, Trusted Tester] When set, what mode of hive partitioning to use when reading data. Two modes are supported. (1) AUTO: automatically infer partition key name(s) and type(s). (2) STRINGS: automatically infer partition key name(s). All types are interpreted as strings. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported types include: AVRO, CSV, JSON, ORC and Parquet. */
		mode?: string;

		/** [Optional, Trusted Tester] When hive partition detection is requested, a common prefix for all source uris should be supplied. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout. gs://bucket/path_to_table/dt=2019-01-01/country=BR/id=7/file.avro gs://bucket/path_to_table/dt=2018-12-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/ (trailing slash does not matter). */
		sourceUriPrefix?: string;
	}

	export interface TableSchema {

		/** Describes the fields in a table. */
		fields?: Array<TableFieldSchema>;
	}

	export interface TableFieldSchema {

		/** [Optional] The categories attached to this field, used for field-level access control. */
		categories?: TableFieldSchemaCategories;

		/** [Optional] The field description. The maximum length is 1,024 characters. */
		description?: string;

		/** [Optional] Describes the nested schema fields if the type property is set to RECORD. */
		fields?: Array<TableFieldSchema>;

		/** [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE. */
		mode?: string;

		/** [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters. */
		name?: string;
		policyTags?: TableFieldSchemaPolicyTags;

		/** [Required] The field data type. Possible values include STRING, BYTES, INTEGER, INT64 (same as INTEGER), FLOAT, FLOAT64 (same as FLOAT), BOOLEAN, BOOL (same as BOOLEAN), TIMESTAMP, DATE, TIME, DATETIME, RECORD (where RECORD indicates that the field contains a nested schema) or STRUCT (same as RECORD). */
		type?: string;
	}

	export interface TableFieldSchemaCategories {

		/** A list of category resource names. For example, "projects/1/taxonomies/2/categories/3". At most 5 categories are allowed. */
		names?: Array<string>;
	}

	export interface TableFieldSchemaPolicyTags {

		/** A list of category resource names. For example, "projects/1/location/eu/taxonomies/2/policyTags/3". At most 1 policy tag is allowed. */
		names?: Array<string>;
	}

	export interface GetQueryResultsResponse {

		/** Whether the query result was fetched from the query cache. */
		cacheHit?: boolean;

		/** [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. */
		errors?: Array<ErrorProto>;

		/** A hash of this response. */
		etag?: string;

		/** Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available. */
		jobComplete?: boolean;
		jobReference?: JobReference;

		/** The resource type of the response. */
		kind?: string;

		/** [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows?: string;

		/** A token used for paging results. */
		pageToken?: string;

		/** An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully. */
		rows?: Array<TableRow>;
		schema?: TableSchema;

		/** The total number of bytes processed for this query. */
		totalBytesProcessed?: string;

		/** The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully. */
		totalRows?: string;
	}

	export interface JobReference {

		/** [Required] The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters. */
		jobId?: string;

		/** The geographic location of the job. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location. */
		location?: string;

		/** [Required] The ID of the project containing this job. */
		projectId?: string;
	}

	export interface TableRow {

		/** Represents a single row in the result set, consisting of one or more fields. */
		f?: Array<TableCell>;
	}

	export interface TableCell {
		v?: any;
	}

	export interface GetServiceAccountResponse {

		/** The service account email address. */
		email?: string;

		/** The resource type of the response. */
		kind?: string;
	}


	/** Information about a single iteration of the training run. */
	export interface IterationResult {

		/**
		 * (Auto-)arima fitting result. Wrap everything in ArimaResult for easier
		 * refactoring if we want to use model-specific iteration results.
		 */
		arimaResult?: ArimaResult;

		/** Information about top clusters for clustering models. */
		clusterInfos?: Array<ClusterInfo>;

		/** Time taken to run the iteration in milliseconds. */
		durationMs?: string;

		/** Loss computed on the eval data at the end of iteration. */
		evalLoss?: number;

		/** Index of the iteration, 0 based. */
		index?: number;

		/** Learn rate used for this iteration. */
		learnRate?: number;

		/** Loss computed on the training data at the end of iteration. */
		trainingLoss?: number;
	}

	export interface Job {
		configuration?: JobConfiguration;

		/** [Output-only] A hash of this resource. */
		etag?: string;

		/** [Output-only] Opaque ID field of the job */
		id?: string;
		jobReference?: JobReference;

		/** [Output-only] The type of the resource. */
		kind?: string;

		/** [Output-only] A URL that can be used to access this resource again. */
		selfLink?: string;
		statistics?: JobStatistics;
		status?: JobStatus;

		/** [Output-only] Email address of the user who ran the job. */
		user_email?: string;
	}

	export interface JobConfiguration {
		copy?: JobConfigurationTableCopy;

		/** [Optional] If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined. */
		dryRun?: boolean;
		extract?: JobConfigurationExtract;

		/** [Optional] Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. */
		jobTimeoutMs?: string;

		/** [Output-only] The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN. */
		jobType?: string;

		/** The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels?: {[id: string]: any };
		load?: JobConfigurationLoad;
		query?: JobConfigurationQuery;
	}

	export interface JobConfigurationTableCopy {

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition?: string;
		destinationEncryptionConfiguration?: EncryptionConfiguration;
		destinationTable?: TableReference;
		sourceTable?: TableReference;

		/** [Pick one] Source tables to copy. */
		sourceTables?: Array<TableReference>;

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition?: string;
	}

	export interface JobConfigurationExtract {

		/** [Optional] The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE. The default value is NONE. DEFLATE and SNAPPY are only supported for Avro. Not applicable when extracting models. */
		compression?: string;

		/** [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL. */
		destinationFormat?: string;

		/** [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written. */
		destinationUri?: string;

		/** [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. */
		destinationUris?: Array<string>;

		/** [Optional] Delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models. */
		fieldDelimiter?: string;

		/** [Optional] Whether to print out a header row in the results. Default is true. Not applicable when extracting models. */
		printHeader?: boolean;
		sourceModel?: ModelReference;
		sourceTable?: TableReference;

		/** [Optional] If destinationFormat is set to "AVRO", this flag indicates whether to enable extracting applicable column types (such as TIMESTAMP) to their corresponding AVRO logical types (timestamp-micros), instead of only using their raw types (avro-long). Not applicable when extracting models. */
		useAvroLogicalTypes?: boolean;
	}

	export interface ModelReference {

		/** [Required] The ID of the dataset containing this model. */
		datasetId?: string;

		/** [Required] The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		modelId?: string;

		/** [Required] The ID of the project containing this model. */
		projectId?: string;
	}

	export interface JobConfigurationLoad {

		/** [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats. */
		allowJaggedRows?: boolean;

		/** Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. */
		allowQuotedNewlines?: boolean;

		/** [Optional] Indicates if we should automatically infer the options and schema for CSV and JSON sources. */
		autodetect?: boolean;
		clustering?: Clustering;

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition?: string;
		destinationEncryptionConfiguration?: EncryptionConfiguration;
		destinationTable?: TableReference;
		destinationTableProperties?: DestinationTableProperties;

		/** [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties. */
		encoding?: string;

		/** [Optional] The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (','). */
		fieldDelimiter?: string;

		/** [Optional, Trusted Tester] Deprecated, do not use. Please set hivePartitioningOptions instead. */
		hivePartitioningMode?: string;
		hivePartitioningOptions?: HivePartitioningOptions;

		/** [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names */
		ignoreUnknownValues?: boolean;

		/** [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV and JSON. The default value is 0, which requires that all records are valid. */
		maxBadRecords?: number;

		/** [Optional] Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value. */
		nullMarker?: string;

		/** If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result. */
		projectionFields?: Array<string>;

		/**
		 * [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
		 * Pattern: .?
		 */
		quote?: string;
		rangePartitioning?: RangePartitioning;
		schema?: TableSchema;

		/** [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT". */
		schemaInline?: string;

		/** [Deprecated] The format of the schemaInline property. */
		schemaInlineFormat?: string;

		/** Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable. */
		schemaUpdateOptions?: Array<string>;

		/** [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. */
		skipLeadingRows?: number;

		/** [Optional] The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET". For orc, specify "ORC". The default value is CSV. */
		sourceFormat?: string;

		/** [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed. */
		sourceUris?: Array<string>;
		timePartitioning?: TimePartitioning;

		/** [Optional] If sourceFormat is set to "AVRO", indicates whether to enable interpreting logical types into their corresponding types (ie. TIMESTAMP), instead of only using their raw types (ie. INTEGER). */
		useAvroLogicalTypes?: boolean;

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition?: string;
	}

	export interface RangePartitioning {

		/** [TrustedTester] [Required] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64. */
		field?: string;

		/** [TrustedTester] [Required] Defines the ranges for range partitioning. */
		range?: RangePartitioningRange;
	}

	export interface RangePartitioningRange {

		/** [TrustedTester] [Required] The end of range partitioning, exclusive. */
		end?: string;

		/** [TrustedTester] [Required] The width of each interval. */
		interval?: string;

		/** [TrustedTester] [Required] The start of range partitioning, inclusive. */
		start?: string;
	}

	export interface TimePartitioning {

		/** [Optional] Number of milliseconds for which to keep the storage for partitions in the table. The storage in a partition will have an expiration time of its partition time plus this value. */
		expirationMs?: string;

		/** [Beta] [Optional] If not set, the table is partitioned by pseudo column, referenced via either '_PARTITIONTIME' as TIMESTAMP type, or '_PARTITIONDATE' as DATE type. If field is specified, the table is instead partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. */
		field?: string;
		requirePartitionFilter?: boolean;

		/** [Required] The only type supported is DAY, which will generate one partition per day. */
		type?: string;
	}

	export interface JobConfigurationQuery {

		/** [Optional] If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size. */
		allowLargeResults?: boolean;
		clustering?: Clustering;

		/** Connection properties. */
		connectionProperties?: Array<string>;

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition?: string;
		defaultDataset?: DatasetReference;
		destinationEncryptionConfiguration?: EncryptionConfiguration;
		destinationTable?: TableReference;

		/** [Optional] If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened. */
		flattenResults?: boolean;

		/** [Optional] Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge). If unspecified, this will be set to your project default. */
		maximumBillingTier?: number;

		/** [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default. */
		maximumBytesBilled?: string;

		/** Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. */
		parameterMode?: string;

		/** [Deprecated] This property is deprecated. */
		preserveNulls?: boolean;

		/** [Optional] Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE. */
		priority?: string;

		/** [Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL. */
		query?: string;

		/** Query parameters for standard SQL queries. */
		queryParameters?: Array<QueryParameter>;
		rangePartitioning?: RangePartitioning;

		/** Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable. */
		schemaUpdateOptions?: Array<string>;

		/** [Optional] If querying an external data source outside of BigQuery, describes the data format, location and other properties of the data source. By defining these properties, the data source can then be queried as if it were a standard BigQuery table. */
		tableDefinitions?: {[id: string]: ExternalDataConfiguration };
		timePartitioning?: TimePartitioning;

		/** Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false. */
		useLegacySql?: boolean;

		/** [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true. */
		useQueryCache?: boolean;

		/** Describes user-defined function resources used in the query. */
		userDefinedFunctionResources?: Array<UserDefinedFunctionResource>;

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition?: string;
	}

	export interface QueryParameter {

		/** [Optional] If unset, this is a positional parameter. Otherwise, should be unique within a query. */
		name?: string;
		parameterType?: QueryParameterType;
		parameterValue?: QueryParameterValue;
	}

	export interface QueryParameterType {
		arrayType?: QueryParameterType;

		/** [Optional] The types of the fields of this struct, in order, if this is a struct. */
		QueryParameterTypeStructTypes?: Array<QueryParameterTypeStructTypes>;

		/** [Required] The top level type of this field. */
		type?: string;
	}

	export interface QueryParameterTypeStructTypes {

		/** [Optional] Human-oriented description of the field. */
		description?: string;

		/** [Optional] The name of this field. */
		name?: string;
		type?: QueryParameterType;
	}

	export interface QueryParameterValue {

		/** [Optional] The array values, if this is an array type. */
		arrayValues?: Array<QueryParameterValue>;

		/** [Optional] The struct field values, in order of the struct type's declaration. */
		structValues?: {[id: string]: QueryParameterValue };

		/** [Optional] The value of this value, if a simple scalar type. */
		value?: string;
	}

	export interface UserDefinedFunctionResource {

		/** [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code. */
		inlineCode?: string;

		/** [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path). */
		resourceUri?: string;
	}

	export interface JobStatistics {

		/** [TrustedTester] [Output-only] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs. */
		completionRatio?: number;

		/** [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs. */
		creationTime?: string;

		/** [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state. */
		endTime?: string;
		extract?: JobStatistics4;
		load?: JobStatistics3;

		/** [Output-only] Number of child jobs executed. */
		numChildJobs?: string;

		/** [Output-only] If this is a child job, the id of the parent. */
		parentJobId?: string;
		query?: JobStatistics2;

		/** [Output-only] Quotas which delayed this job's start time. */
		quotaDeferments?: Array<string>;

		/** [Output-only] Job resource usage breakdown by reservation. */
		JobStatisticsReservationUsage?: Array<JobStatisticsReservationUsage>;

		/** [Output-only] Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job. */
		reservation_id?: string;
		rowLevelSecurityStatistics?: RowLevelSecurityStatistics;
		scriptStatistics?: ScriptStatistics;

		/** [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE. */
		startTime?: string;

		/** [Output-only] [Deprecated] Use the bytes processed in the query statistics instead. */
		totalBytesProcessed?: string;

		/** [Output-only] Slot-milliseconds for the job. */
		totalSlotMs?: string;
	}

	export interface JobStatistics4 {

		/** [Output-only] Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the 'destinationUris' field. */
		destinationUriFileCounts?: Array<string>;

		/** [Output-only] Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes. */
		inputBytes?: string;
	}

	export interface JobStatistics3 {

		/** [Output-only] The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data. */
		badRecords?: string;

		/** [Output-only] Number of bytes of source data in a load job. */
		inputFileBytes?: string;

		/** [Output-only] Number of source files in a load job. */
		inputFiles?: string;

		/** [Output-only] Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change. */
		outputBytes?: string;

		/** [Output-only] Number of rows imported in a load job. Note that while an import job is in the running state, this value may change. */
		outputRows?: string;
	}

	export interface JobStatistics2 {

		/** [Output-only] Billing tier for the job. */
		billingTier?: number;

		/** [Output-only] Whether the query result was fetched from the query cache. */
		cacheHit?: boolean;

		/** [Output-only] [Preview] The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries. */
		ddlAffectedRowAccessPolicyCount?: string;

		/** The DDL operation performed, possibly dependent on the pre-existence of the DDL target. Possible values (new values might be added in the future): "CREATE": The query created the DDL target. "SKIP": No-op. Example cases: the query is CREATE TABLE IF NOT EXISTS while the table already exists, or the query is DROP TABLE IF EXISTS while the table does not exist. "REPLACE": The query replaced the DDL target. Example case: the query is CREATE OR REPLACE TABLE, and the table already exists. "DROP": The query deleted the DDL target. */
		ddlOperationPerformed?: string;
		ddlTargetRoutine?: RoutineReference;
		ddlTargetRowAccessPolicy?: RowAccessPolicyReference;
		ddlTargetTable?: TableReference;

		/** [Output-only] The original estimate of bytes processed for the job. */
		estimatedBytesProcessed?: string;
		modelTraining?: BigQueryModelTraining;

		/** [Output-only, Beta] Deprecated; do not use. */
		modelTrainingCurrentIteration?: number;

		/** [Output-only, Beta] Deprecated; do not use. */
		modelTrainingExpectedTotalIteration?: string;

		/** [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows?: string;

		/** [Output-only] Describes execution plan for the query. */
		queryPlan?: Array<ExplainQueryStage>;

		/** [Output-only] Referenced routines (persistent user-defined functions and stored procedures) for the job. */
		referencedRoutines?: Array<RoutineReference>;

		/** [Output-only] Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list. */
		referencedTables?: Array<TableReference>;

		/** [Output-only] Job resource usage breakdown by reservation. */
		JobStatistics2ReservationUsage?: Array<JobStatistics2ReservationUsage>;
		schema?: TableSchema;

		/** The type of query statement, if valid. Possible values (new values might be added in the future): "SELECT": SELECT query. "INSERT": INSERT query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "UPDATE": UPDATE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "DELETE": DELETE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "MERGE": MERGE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "ALTER_TABLE": ALTER TABLE query. "ALTER_VIEW": ALTER VIEW query. "ASSERT": ASSERT condition AS 'description'. "CREATE_FUNCTION": CREATE FUNCTION query. "CREATE_MODEL": CREATE [OR REPLACE] MODEL ... AS SELECT ... . "CREATE_PROCEDURE": CREATE PROCEDURE query. "CREATE_TABLE": CREATE [OR REPLACE] TABLE without AS SELECT. "CREATE_TABLE_AS_SELECT": CREATE [OR REPLACE] TABLE ... AS SELECT ... . "CREATE_VIEW": CREATE [OR REPLACE] VIEW ... AS SELECT ... . "DROP_FUNCTION" : DROP FUNCTION query. "DROP_PROCEDURE": DROP PROCEDURE query. "DROP_TABLE": DROP TABLE query. "DROP_VIEW": DROP VIEW query. */
		statementType?: string;

		/** [Output-only] [Beta] Describes a timeline of job execution. */
		timeline?: Array<QueryTimelineSample>;

		/** [Output-only] Total bytes billed for the job. */
		totalBytesBilled?: string;

		/** [Output-only] Total bytes processed for the job. */
		totalBytesProcessed?: string;

		/** [Output-only] For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost. */
		totalBytesProcessedAccuracy?: string;

		/** [Output-only] Total number of partitions processed from all partitioned tables referenced in the job. */
		totalPartitionsProcessed?: string;

		/** [Output-only] Slot-milliseconds for the job. */
		totalSlotMs?: string;

		/** Standard SQL only: list of undeclared query parameters detected during a dry run validation. */
		undeclaredQueryParameters?: Array<QueryParameter>;
	}

	export interface RoutineReference {

		/** [Required] The ID of the dataset containing this routine. */
		datasetId?: string;

		/** [Required] The ID of the project containing this routine. */
		projectId?: string;

		/** [Required] The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. */
		routineId?: string;
	}

	export interface RowAccessPolicyReference {

		/** [Required] The ID of the dataset containing this row access policy. */
		datasetId?: string;

		/** [Required] The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. */
		policyId?: string;

		/** [Required] The ID of the project containing this row access policy. */
		projectId?: string;

		/** [Required] The ID of the table containing this row access policy. */
		tableId?: string;
	}

	export interface JobStatistics2ReservationUsage {

		/** [Output-only] Reservation name or "unreserved" for on-demand resources usage. */
		name?: string;

		/** [Output-only] Slot-milliseconds the job spent in the given reservation. */
		slotMs?: string;
	}

	export interface QueryTimelineSample {

		/** Total number of units currently being processed by workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample. */
		activeUnits?: string;

		/** Total parallel units of work completed by this query. */
		completedUnits?: string;

		/** Milliseconds elapsed since the start of query execution. */
		elapsedMs?: string;

		/** Total parallel units of work remaining for the active stages. */
		pendingUnits?: string;

		/** Cumulative slot-ms consumed by the query. */
		totalSlotMs?: string;
	}

	export interface JobStatisticsReservationUsage {

		/** [Output-only] Reservation name or "unreserved" for on-demand resources usage. */
		name?: string;

		/** [Output-only] Slot-milliseconds the job spent in the given reservation. */
		slotMs?: string;
	}

	export interface RowLevelSecurityStatistics {

		/** [Output-only] [Preview] Whether any accessed data was protected by row access policies. */
		rowLevelSecurityApplied?: boolean;
	}

	export interface ScriptStatistics {

		/** [Output-only] Whether this child job was a statement or expression. */
		evaluationKind?: string;

		/** Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty. */
		stackFrames?: Array<ScriptStackFrame>;
	}

	export interface ScriptStackFrame {

		/** [Output-only] One-based end column. */
		endColumn?: number;

		/** [Output-only] One-based end line. */
		endLine?: number;

		/** [Output-only] Name of the active procedure, empty if in a top-level script. */
		procedureId?: string;

		/** [Output-only] One-based start column. */
		startColumn?: number;

		/** [Output-only] One-based start line. */
		startLine?: number;

		/** [Output-only] Text of the current statement/expression. */
		text?: string;
	}

	export interface JobStatus {
		errorResult?: ErrorProto;

		/** [Output-only] The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. */
		errors?: Array<ErrorProto>;

		/** [Output-only] Running state of the job. */
		state?: string;
	}

	export interface JobCancelResponse {
		job?: Job;

		/** The resource type of the response. */
		kind?: string;
	}

	export interface JobList {

		/** A hash of this page of results. */
		etag?: string;

		/** List of jobs that were requested. */
		JobListJobs?: Array<JobListJobs>;

		/** The resource type of the response. */
		kind?: string;

		/** A token to request the next page of results. */
		nextPageToken?: string;
	}

	export interface JobListJobs {
		configuration?: JobConfiguration;
		errorResult?: ErrorProto;

		/** Unique opaque ID of the job. */
		id?: string;
		jobReference?: JobReference;

		/** The resource type. */
		kind?: string;

		/** Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed. */
		state?: string;
		statistics?: JobStatistics;
		status?: JobStatus;

		/** [Full-projection-only] Email address of the user who ran the job. */
		user_email?: string;
	}


	/** Represents a single JSON object. */
	export interface JsonObject {
	}

	export interface JsonValue {
	}

	export interface ListModelsResponse {

		/**
		 * Models in the requested dataset. Only the following fields are populated:
		 * model_reference, model_type, creation_time, last_modified_time and
		 * labels.
		 */
		models?: Array<Model>;

		/** A token to request the next page of results. */
		nextPageToken?: string;
	}

	export interface Model {

		/** Output only. The time when this model was created, in millisecs since the epoch. */
		creationTime?: string;

		/** Optional. A user-friendly description of this model. */
		description?: string;
		encryptionConfiguration?: EncryptionConfiguration;

		/** Output only. A hash of this resource. */
		etag?: string;

		/**
		 * Optional. The time when this model expires, in milliseconds since the epoch.
		 * If not present, the model will persist indefinitely. Expired models
		 * will be deleted and their storage reclaimed.  The defaultTableExpirationMs
		 * property of the encapsulating dataset can be used to set a default
		 * expirationTime on newly created models.
		 */
		expirationTime?: string;

		/** Output only. Input feature columns that were used to train this model. */
		featureColumns?: Array<StandardSqlField>;

		/** Optional. A descriptive name for this model. */
		friendlyName?: string;

		/**
		 * Output only. Label columns that were used to train this model.
		 * The output of the model will have a "predicted_" prefix to these columns.
		 */
		labelColumns?: Array<StandardSqlField>;

		/**
		 * The labels associated with this model. You can use these to organize
		 * and group your models. Label keys and values can be no longer
		 * than 63 characters, can only contain lowercase letters, numeric
		 * characters, underscores and dashes. International characters are allowed.
		 * Label values are optional. Label keys must start with a letter and each
		 * label in the list must have a different key.
		 */
		labels?: {[id: string]: any };

		/** Output only. The time when this model was last modified, in millisecs since the epoch. */
		lastModifiedTime?: string;

		/**
		 * Output only. The geographic location where the model resides. This value
		 * is inherited from the dataset.
		 */
		location?: string;
		modelReference?: ModelReference;

		/** Output only. Type of the model resource. */
		modelType?: ModelModelType;

		/** Output only. Information for all training runs in increasing order of start_time. */
		trainingRuns?: Array<TrainingRun>;
	}

	export enum ModelModelType { MODEL_TYPE_UNSPECIFIED = 0, LINEAR_REGRESSION = 1, LOGISTIC_REGRESSION = 2, KMEANS = 3, MATRIX_FACTORIZATION = 4, DNN_CLASSIFIER = 5, TENSORFLOW = 6, DNN_REGRESSOR = 7, BOOSTED_TREE_REGRESSOR = 8, BOOSTED_TREE_CLASSIFIER = 9, AUTOML_REGRESSOR = 10, AUTOML_CLASSIFIER = 11 }


	/** Information about a single training query run for the model. */
	export interface TrainingRun {

		/**
		 * Data split result. This contains references to the training and evaluation
		 * data tables that were used to train the model.
		 */
		dataSplitResult?: DataSplitResult;

		/**
		 * Evaluation metrics of a model. These are either computed on all training
		 * data or just the eval data based on whether eval data was used during
		 * training. These are not present for imported models.
		 */
		evaluationMetrics?: EvaluationMetrics;

		/** Output of each iteration run, results.size() <= max_iterations. */
		results?: Array<IterationResult>;

		/** The start time of this training run. */
		startTime?: string;
		trainingOptions?: TrainingOptions;
	}

	export interface TrainingOptions {

		/** Batch size for dnn models. */
		batchSize?: string;

		/**
		 * The column to split data with. This column won't be used as a
		 * feature.
		 * 1. When data_split_method is CUSTOM, the corresponding column should
		 * be boolean. The rows with true value tag are eval data, and the false
		 * are training data.
		 * 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION
		 * rows (from smallest to largest) in the corresponding column are used
		 * as training data, and the rest are eval data. It respects the order
		 * in Orderable data types:
		 * https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties
		 */
		dataSplitColumn?: string;

		/**
		 * The fraction of evaluation data over the whole input data. The rest
		 * of data will be used as training data. The format should be double.
		 * Accurate to two decimal places.
		 * Default value is 0.2.
		 */
		dataSplitEvalFraction?: number;

		/** The data split type for training and evaluation, e.g. RANDOM. */
		dataSplitMethod?: TrainingOptionsDataSplitMethod;

		/** Distance type for clustering models. */
		distanceType?: TrainingOptionsDistanceType;

		/** Dropout probability for dnn models. */
		dropout?: number;

		/**
		 * Whether to stop early when the loss doesn't improve significantly
		 * any more (compared to min_relative_progress). Used only for iterative
		 * training algorithms.
		 */
		earlyStop?: boolean;

		/**
		 * Feedback type that specifies which algorithm to run for matrix
		 * factorization.
		 */
		feedbackType?: TrainingOptionsFeedbackType;

		/** Hidden units for dnn models. */
		hiddenUnits?: Array<string>;

		/**
		 * Specifies the initial learning rate for the line search learn rate
		 * strategy.
		 */
		initialLearnRate?: number;

		/** Name of input label columns in training data. */
		inputLabelColumns?: Array<string>;

		/** Item column specified for matrix factorization models. */
		itemColumn?: string;

		/**
		 * The column used to provide the initial centroids for kmeans algorithm
		 * when kmeans_initialization_method is CUSTOM.
		 */
		kmeansInitializationColumn?: string;

		/** The method used to initialize the centroids for kmeans algorithm. */
		kmeansInitializationMethod?: TrainingOptionsKmeansInitializationMethod;

		/** L1 regularization coefficient. */
		l1Regularization?: number;

		/** L2 regularization coefficient. */
		l2Regularization?: number;

		/**
		 * Weights associated with each label class, for rebalancing the
		 * training data. Only applicable for classification models.
		 */
		labelClassWeights?: {[id: string]: any };

		/** Learning rate in training. Used only for iterative training algorithms. */
		learnRate?: number;

		/** The strategy to determine learn rate for the current iteration. */
		learnRateStrategy?: TrainingOptionsLearnRateStrategy;

		/** Type of loss function used during training run. */
		lossType?: TrainingOptionsLossType;

		/**
		 * The maximum number of iterations in training. Used only for iterative
		 * training algorithms.
		 */
		maxIterations?: string;

		/** Maximum depth of a tree for boosted tree models. */
		maxTreeDepth?: string;

		/**
		 * When early_stop is true, stops training when accuracy improvement is
		 * less than 'min_relative_progress'. Used only for iterative training
		 * algorithms.
		 */
		minRelativeProgress?: number;

		/** Minimum split loss for boosted tree models. */
		minSplitLoss?: number;

		/**
		 * [Beta] Google Cloud Storage URI from which the model was imported. Only
		 * applicable for imported models.
		 */
		modelUri?: string;

		/** Number of clusters for clustering models. */
		numClusters?: string;

		/** Num factors specified for matrix factorization models. */
		numFactors?: string;

		/** Optimization strategy for training linear regression models. */
		optimizationStrategy?: TrainingOptionsOptimizationStrategy;

		/**
		 * Subsample fraction of the training data to grow tree to prevent
		 * overfitting for boosted tree models.
		 */
		subsample?: number;

		/** User column specified for matrix factorization models. */
		userColumn?: string;

		/**
		 * Hyperparameter for matrix factoration when implicit feedback type is
		 * specified.
		 */
		walsAlpha?: number;

		/** Whether to train a model from the last checkpoint. */
		warmStart?: boolean;
	}

	export enum TrainingOptionsDataSplitMethod { DATA_SPLIT_METHOD_UNSPECIFIED = 0, RANDOM = 1, CUSTOM = 2, SEQUENTIAL = 3, NO_SPLIT = 4, AUTO_SPLIT = 5 }

	export enum TrainingOptionsDistanceType { DISTANCE_TYPE_UNSPECIFIED = 0, EUCLIDEAN = 1, COSINE = 2 }

	export enum TrainingOptionsFeedbackType { FEEDBACK_TYPE_UNSPECIFIED = 0, IMPLICIT = 1, EXPLICIT = 2 }

	export enum TrainingOptionsKmeansInitializationMethod { KMEANS_INITIALIZATION_METHOD_UNSPECIFIED = 0, RANDOM = 1, CUSTOM = 2, KMEANS_PLUS_PLUS = 3 }

	export enum TrainingOptionsLearnRateStrategy { LEARN_RATE_STRATEGY_UNSPECIFIED = 0, LINE_SEARCH = 1, CONSTANT = 2 }

	export enum TrainingOptionsLossType { LOSS_TYPE_UNSPECIFIED = 0, MEAN_SQUARED_LOSS = 1, MEAN_LOG_LOSS = 2 }

	export enum TrainingOptionsOptimizationStrategy { OPTIMIZATION_STRATEGY_UNSPECIFIED = 0, BATCH_GRADIENT_DESCENT = 1, NORMAL_EQUATION = 2 }

	export interface ListRoutinesResponse {

		/** A token to request the next page of results. */
		nextPageToken?: string;

		/**
		 * Routines in the requested dataset. Unless read_mask is set in the request,
		 * only the following fields are populated:
		 * etag, project_id, dataset_id, routine_id, routine_type, creation_time,
		 * last_modified_time, and language.
		 */
		routines?: Array<Routine>;
	}


	/** A user-defined function or a stored procedure. */
	export interface Routine {

		/** Optional. */
		arguments?: Array<Argument>;

		/**
		 * Output only. The time when this routine was created, in milliseconds since
		 * the epoch.
		 */
		creationTime?: string;

		/**
		 * Required. The body of the routine.
		 * For functions, this is the expression in the AS clause.
		 * If language=SQL, it is the substring inside (but excluding) the
		 * parentheses. For example, for the function created with the following
		 * statement:
		 * `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))`
		 * The definition_body is `concat(x, "\n", y)` (\n is not replaced with
		 * linebreak).
		 * If language=JAVASCRIPT, it is the evaluated string in the AS clause.
		 * For example, for the function created with the following statement:
		 * `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'`
		 * The definition_body is
		 * `return "\n";\n`
		 * Note that both \n are replaced with linebreaks.
		 */
		definitionBody?: string;

		/** Optional. [Experimental] The description of the routine if defined. */
		description?: string;

		/** Output only. A hash of this resource. */
		etag?: string;

		/**
		 * Optional. If language = "JAVASCRIPT", this field stores the path of the
		 * imported JAVASCRIPT libraries.
		 */
		importedLibraries?: Array<string>;

		/** Optional. Defaults to "SQL". */
		language?: RoutineLanguage;

		/**
		 * Output only. The time when this routine was last modified, in milliseconds
		 * since the epoch.
		 */
		lastModifiedTime?: string;

		/**
		 * The type of a variable, e.g., a function argument.
		 * Examples:
		 * INT64: {type_kind="INT64"}
		 * ARRAY<STRING>: {type_kind="ARRAY", array_element_type="STRING"}
		 * STRUCT<x STRING, y ARRAY<DATE>>:
		 * {type_kind="STRUCT",
		 * struct_type={fields=[
		 * {name="x", type={type_kind="STRING"}},
		 * {name="y", type={type_kind="ARRAY", array_element_type="DATE"}}
		 * ]}}
		 */
		returnType?: StandardSqlDataType;
		routineReference?: RoutineReference;

		/** Required. The type of routine. */
		routineType?: RoutineRoutineType;
	}

	export enum RoutineLanguage { LANGUAGE_UNSPECIFIED = 0, SQL = 1, JAVASCRIPT = 2 }

	export enum RoutineRoutineType { ROUTINE_TYPE_UNSPECIFIED = 0, SCALAR_FUNCTION = 1, PROCEDURE = 2 }


	/**
	 * BigQuery-specific metadata about a location. This will be set on
	 * google.cloud.location.Location.metadata in Cloud Location API
	 * responses.
	 */
	export interface LocationMetadata {

		/**
		 * The legacy BigQuery location ID, e.g. “EU” for the “europe” location.
		 * This is for any API consumers that need the legacy “US” and “EU” locations.
		 */
		legacyLocationId?: string;
	}

	export interface MaterializedViewDefinition {

		/** [Optional] [TrustedTester] Enable automatic refresh of the materialized view when the base table is updated. The default value is "true". */
		enableRefresh?: boolean;

		/** [Output-only] [TrustedTester] The time when this materialized view was last modified, in milliseconds since the epoch. */
		lastRefreshTime?: string;

		/** [Required] A query whose result is persisted. */
		query?: string;

		/** [Optional] [TrustedTester] The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes). */
		refreshIntervalMs?: string;
	}

	export interface ModelDefinition {

		/** [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query. */
		modelOptions?: ModelDefinitionModelOptions;

		/** [Output-only, Beta] Information about ml training runs, each training run comprises of multiple iterations and there may be multiple training runs for the model if warm start is used or if a user decides to continue a previously cancelled query. */
		trainingRuns?: Array<BqmlTrainingRun>;
	}

	export interface ModelDefinitionModelOptions {
		labels?: Array<string>;
		lossType?: string;
		modelType?: string;
	}

	export interface ProjectList {

		/** A hash of the page of results */
		etag?: string;

		/** The type of list. */
		kind?: string;

		/** A token to request the next page of results. */
		nextPageToken?: string;

		/** Projects to which you have at least READ access. */
		ProjectListProjects?: Array<ProjectListProjects>;

		/** The total number of projects in the list. */
		totalItems?: number;
	}

	export interface ProjectListProjects {

		/** A descriptive name for this project. */
		friendlyName?: string;

		/** An opaque ID of this project. */
		id?: string;

		/** The resource type. */
		kind?: string;

		/** The numeric ID of this project. */
		numericId?: string;
		projectReference?: ProjectReference;
	}

	export interface ProjectReference {

		/** [Required] ID of the project. Can be either the numeric ID or the assigned ID of the project. */
		projectId?: string;
	}

	export interface QueryRequest {

		/** Connection properties. */
		connectionProperties?: Array<string>;
		defaultDataset?: DatasetReference;

		/** [Optional] If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false. */
		dryRun?: boolean;

		/** The resource type of the request. */
		kind?: string;

		/** The geographic location where the job should run. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location. */
		location?: string;

		/** [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies. */
		maxResults?: string;

		/** Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. */
		parameterMode?: string;

		/** [Deprecated] This property is deprecated. */
		preserveNulls?: boolean;

		/** [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: "SELECT count(f1) FROM [myProjectId:myDatasetId.myTableId]". */
		query?: string;

		/** Query parameters for Standard SQL queries. */
		queryParameters?: Array<QueryParameter>;

		/** [Optional] How long to wait for the query to complete, in milliseconds, before the request times out and returns. Note that this is only a timeout for the request, not the query. If the query takes longer to run than the timeout value, the call returns without any results and with the 'jobComplete' flag set to false. You can call GetQueryResults() to wait for the query to complete and read the results. The default value is 10000 milliseconds (10 seconds). */
		timeoutMs?: string;

		/** Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false. */
		useLegacySql?: boolean;

		/** [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true. */
		useQueryCache?: boolean;
	}

	export interface QueryResponse {

		/** Whether the query result was fetched from the query cache. */
		cacheHit?: boolean;

		/** [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. */
		errors?: Array<ErrorProto>;

		/** Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available. */
		jobComplete?: boolean;
		jobReference?: JobReference;

		/** The resource type. */
		kind?: string;

		/** [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows?: string;

		/** A token used for paging results. */
		pageToken?: string;

		/** An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. */
		rows?: Array<TableRow>;
		schema?: TableSchema;

		/** The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run. */
		totalBytesProcessed?: string;

		/** The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. */
		totalRows?: string;
	}

	export interface Streamingbuffer {

		/** [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer. */
		estimatedBytes?: string;

		/** [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer. */
		estimatedRows?: string;

		/** [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available. */
		oldestEntryTime?: string;
	}

	export interface Table {
		clustering?: Clustering;

		/** [Output-only] The time when this table was created, in milliseconds since the epoch. */
		creationTime?: string;

		/** [Optional] A user-friendly description of this table. */
		description?: string;
		encryptionConfiguration?: EncryptionConfiguration;

		/** [Output-only] A hash of the table metadata. Used to ensure there were no concurrent modifications to the resource when attempting an update. Not guaranteed to change when the table contents or the fields numRows, numBytes, numLongTermBytes or lastModifiedTime change. */
		etag?: string;

		/** [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables. */
		expirationTime?: string;
		externalDataConfiguration?: ExternalDataConfiguration;

		/** [Optional] A descriptive name for this table. */
		friendlyName?: string;

		/** [Output-only] An opaque ID uniquely identifying the table. */
		id?: string;

		/** [Output-only] The type of the resource. */
		kind?: string;

		/** The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels?: {[id: string]: any };

		/** [Output-only] The time when this table was last modified, in milliseconds since the epoch. */
		lastModifiedTime?: string;

		/** [Output-only] The geographic location where the table resides. This value is inherited from the dataset. */
		location?: string;
		materializedView?: MaterializedViewDefinition;
		model?: ModelDefinition;

		/** [Output-only] The size of this table in bytes, excluding any data in the streaming buffer. */
		numBytes?: string;

		/** [Output-only] The number of bytes in the table that are considered "long-term storage". */
		numLongTermBytes?: string;

		/** [Output-only] [TrustedTester] The physical size of this table in bytes, excluding any data in the streaming buffer. This includes compression and storage used for time travel. */
		numPhysicalBytes?: string;

		/** [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer. */
		numRows?: string;
		rangePartitioning?: RangePartitioning;

		/** [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. */
		requirePartitionFilter?: boolean;
		schema?: TableSchema;

		/** [Output-only] A URL that can be used to access this resource again. */
		selfLink?: string;
		streamingBuffer?: Streamingbuffer;
		tableReference?: TableReference;
		timePartitioning?: TimePartitioning;

		/** [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. [TrustedTester] MATERIALIZED_VIEW: SQL query whose result is persisted. EXTERNAL: A table that references data stored in an external storage system, such as Google Cloud Storage. The default value is TABLE. */
		type?: string;
		view?: ViewDefinition;
	}

	export interface ViewDefinition {

		/** [Required] A query that BigQuery executes when the view is referenced. */
		query?: string;

		/** Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value. */
		useLegacySql?: boolean;

		/** Describes user-defined function resources used in the query. */
		userDefinedFunctionResources?: Array<UserDefinedFunctionResource>;
	}

	export interface TableDataInsertAllRequest {

		/** [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors. */
		ignoreUnknownValues?: boolean;

		/** The resource type of the response. */
		kind?: string;

		/** The rows to insert. */
		TableDataInsertAllRequestRows?: Array<TableDataInsertAllRequestRows>;

		/** [Optional] Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist. */
		skipInvalidRows?: boolean;

		/** If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables. */
		templateSuffix?: string;
	}

	export interface TableDataInsertAllRequestRows {

		/** [Optional] A unique ID for each row. BigQuery uses this property to detect duplicate insertion requests on a best-effort basis. */
		insertId?: string;

		/** Represents a single JSON object. */
		json?: JsonObject;
	}

	export interface TableDataInsertAllResponse {

		/** An array of errors for rows that were not inserted. */
		TableDataInsertAllResponseInsertErrors?: Array<TableDataInsertAllResponseInsertErrors>;

		/** The resource type of the response. */
		kind?: string;
	}

	export interface TableDataInsertAllResponseInsertErrors {

		/** Error information for the row indicated by the index property. */
		errors?: Array<ErrorProto>;

		/** The index of the row that error applies to. */
		index?: string;
	}

	export interface TableDataList {

		/** A hash of this page of results. */
		etag?: string;

		/** The resource type of the response. */
		kind?: string;

		/** A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing. */
		pageToken?: string;

		/** Rows of results. */
		rows?: Array<TableRow>;

		/** The total number of rows in the complete table. */
		totalRows?: string;
	}

	export interface TableList {

		/** A hash of this page of results. */
		etag?: string;

		/** The type of list. */
		kind?: string;

		/** A token to request the next page of results. */
		nextPageToken?: string;

		/** Tables in the requested dataset. */
		TableListTables?: Array<TableListTables>;

		/** The total number of tables in the dataset. */
		totalItems?: number;
	}

	export interface TableListTables {
		clustering?: Clustering;

		/** The time when this table was created, in milliseconds since the epoch. */
		creationTime?: string;

		/** [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. */
		expirationTime?: string;

		/** The user-friendly name for this table. */
		friendlyName?: string;

		/** An opaque ID of the table */
		id?: string;

		/** The resource type. */
		kind?: string;

		/** The labels associated with this table. You can use these to organize and group your tables. */
		labels?: {[id: string]: any };
		rangePartitioning?: RangePartitioning;
		tableReference?: TableReference;
		timePartitioning?: TimePartitioning;

		/** The type of table. Possible values are: TABLE, VIEW. */
		type?: string;

		/** Additional details for a view. */
		view?: TableListView;
	}

	export interface TableListView {

		/** True if view is defined in legacy SQL dialect, false if in standard SQL. */
		useLegacySql?: boolean;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all projects to which you have been granted any project role.
		 * Get projects
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @return {void} Successful response
		 */
		Bigquery_projects_list(maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all datasets in the specified project to which you have been granted the READER dataset role.
		 * Get projects/{projectId}/datasets
		 * @param {string} projectId Project ID of the datasets to be listed
		 * @param {boolean} all Whether to list all datasets, including hidden ones
		 * @param {string} filter An expression for filtering the results of the request by label. The syntax is "labels.<name>[:<value>]". Multiple filters can be ANDed together by connecting with a space. Example: "labels.department:receiving labels.active". See Filtering datasets using labels for details.
		 * @param {number} maxResults The maximum number of results to return
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @return {void} Successful response
		 */
		Bigquery_datasets_list(projectId: string, all: boolean, filter: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets&all=' + all + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new empty dataset.
		 * Post projects/{projectId}/datasets
		 * @param {string} projectId Project ID of the new dataset
		 * @return {void} Successful response
		 */
		Bigquery_datasets_insert(projectId: string, requestBody: Dataset): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
		 * Delete projects/{projectId}/datasets/{datasetId}
		 * @param {string} projectId Project ID of the dataset being deleted
		 * @param {string} datasetId Dataset ID of dataset being deleted
		 * @param {boolean} deleteContents If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
		 * @return {void} Successful response
		 */
		Bigquery_datasets_delete(projectId: string, datasetId: string, deleteContents: boolean): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '&deleteContents=' + deleteContents, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the dataset specified by datasetID.
		 * Get projects/{projectId}/datasets/{datasetId}
		 * @param {string} projectId Project ID of the requested dataset
		 * @param {string} datasetId Dataset ID of the requested dataset
		 * @return {void} Successful response
		 */
		Bigquery_datasets_get(projectId: string, datasetId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
		 * Patch projects/{projectId}/datasets/{datasetId}
		 * @param {string} projectId Project ID of the dataset being updated
		 * @param {string} datasetId Dataset ID of the dataset being updated
		 * @return {void} Successful response
		 */
		Bigquery_datasets_patch(projectId: string, datasetId: string, requestBody: Dataset): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
		 * Put projects/{projectId}/datasets/{datasetId}
		 * @param {string} projectId Project ID of the dataset being updated
		 * @param {string} datasetId Dataset ID of the dataset being updated
		 * @return {void} Successful response
		 */
		Bigquery_datasets_update(projectId: string, datasetId: string, requestBody: Dataset): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all models in the specified dataset. Requires the READER dataset
		 * role.
		 * Get projects/{projectId}/datasets/{datasetId}/models
		 * @param {string} projectId Required. Project ID of the models to list.
		 * @param {string} datasetId Required. Dataset ID of the models to list.
		 * @param {number} maxResults The maximum number of results to return in a single response page.
		 * Leverage the page tokens to iterate through the entire collection.
		 * @param {string} pageToken Page token, returned by a previous call to request the next page of
		 * results
		 * @return {void} Successful response
		 */
		Bigquery_models_list(projectId: string, datasetId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the model specified by modelId from the dataset.
		 * Delete projects/{projectId}/datasets/{datasetId}/models/{modelId}
		 * @param {string} projectId Required. Project ID of the model to delete.
		 * @param {string} datasetId Required. Dataset ID of the model to delete.
		 * @param {string} modelId Required. Model ID of the model to delete.
		 * @return {void} Successful response
		 */
		Bigquery_models_delete(projectId: string, datasetId: string, modelId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified model resource by model ID.
		 * Get projects/{projectId}/datasets/{datasetId}/models/{modelId}
		 * @param {string} projectId Required. Project ID of the requested model.
		 * @param {string} datasetId Required. Dataset ID of the requested model.
		 * @param {string} modelId Required. Model ID of the requested model.
		 * @return {void} Successful response
		 */
		Bigquery_models_get(projectId: string, datasetId: string, modelId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch specific fields in the specified model.
		 * Patch projects/{projectId}/datasets/{datasetId}/models/{modelId}
		 * @param {string} projectId Required. Project ID of the model to patch.
		 * @param {string} datasetId Required. Dataset ID of the model to patch.
		 * @param {string} modelId Required. Model ID of the model to patch.
		 * @return {void} Successful response
		 */
		Bigquery_models_patch(projectId: string, datasetId: string, modelId: string, requestBody: Model): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all routines in the specified dataset. Requires the READER dataset
		 * role.
		 * Get projects/{projectId}/datasets/{datasetId}/routines
		 * @param {string} projectId Required. Project ID of the routines to list
		 * @param {string} datasetId Required. Dataset ID of the routines to list
		 * @param {string} filter If set, then only the Routines matching this filter are returned.
		 * The current supported form is either "routine_type:<RoutineType>" or
		 * "routineType:<RoutineType>", where <RoutineType> is a RoutineType enum.
		 * Example: "routineType:SCALAR_FUNCTION".
		 * @param {number} maxResults The maximum number of results to return in a single response page.
		 * Leverage the page tokens to iterate through the entire collection.
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of
		 * results
		 * @param {string} readMask If set, then only the Routine fields in the field mask, as well as
		 * project_id, dataset_id and routine_id, are returned in the response.
		 * If unset, then the following Routine fields are returned:
		 * etag, project_id, dataset_id, routine_id, routine_type, creation_time,
		 * last_modified_time, and language.
		 * @return {void} Successful response
		 */
		Bigquery_routines_list(projectId: string, datasetId: string, filter: string, maxResults: number, pageToken: string, readMask: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new routine in the dataset.
		 * Post projects/{projectId}/datasets/{datasetId}/routines
		 * @param {string} projectId Required. Project ID of the new routine
		 * @param {string} datasetId Required. Dataset ID of the new routine
		 * @return {void} Successful response
		 */
		Bigquery_routines_insert(projectId: string, datasetId: string, requestBody: Routine): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the routine specified by routineId from the dataset.
		 * Delete projects/{projectId}/datasets/{datasetId}/routines/{routineId}
		 * @param {string} projectId Required. Project ID of the routine to delete
		 * @param {string} datasetId Required. Dataset ID of the routine to delete
		 * @param {string} routineId Required. Routine ID of the routine to delete
		 * @return {void} Successful response
		 */
		Bigquery_routines_delete(projectId: string, datasetId: string, routineId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines/' + (routineId == null ? '' : encodeURIComponent(routineId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified routine resource by routine ID.
		 * Get projects/{projectId}/datasets/{datasetId}/routines/{routineId}
		 * @param {string} projectId Required. Project ID of the requested routine
		 * @param {string} datasetId Required. Dataset ID of the requested routine
		 * @param {string} routineId Required. Routine ID of the requested routine
		 * @param {string} readMask If set, only the Routine fields in the field mask are returned in the
		 * response. If unset, all Routine fields are returned.
		 * @return {void} Successful response
		 */
		Bigquery_routines_get(projectId: string, datasetId: string, routineId: string, readMask: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines/' + (routineId == null ? '' : encodeURIComponent(routineId)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates information in an existing routine. The update method replaces the
		 * entire Routine resource.
		 * Put projects/{projectId}/datasets/{datasetId}/routines/{routineId}
		 * @param {string} projectId Required. Project ID of the routine to update
		 * @param {string} datasetId Required. Dataset ID of the routine to update
		 * @param {string} routineId Required. Routine ID of the routine to update
		 * @return {void} Successful response
		 */
		Bigquery_routines_update(projectId: string, datasetId: string, routineId: string, requestBody: Routine): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines/' + (routineId == null ? '' : encodeURIComponent(routineId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all tables in the specified dataset. Requires the READER dataset role.
		 * Get projects/{projectId}/datasets/{datasetId}/tables
		 * @param {string} projectId Project ID of the tables to list
		 * @param {string} datasetId Dataset ID of the tables to list
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @return {void} Successful response
		 */
		Bigquery_tables_list(projectId: string, datasetId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new, empty table in the dataset.
		 * Post projects/{projectId}/datasets/{datasetId}/tables
		 * @param {string} projectId Project ID of the new table
		 * @param {string} datasetId Dataset ID of the new table
		 * @return {void} Successful response
		 */
		Bigquery_tables_insert(projectId: string, datasetId: string, requestBody: Table): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
		 * Delete projects/{projectId}/datasets/{datasetId}/tables/{tableId}
		 * @param {string} projectId Project ID of the table to delete
		 * @param {string} datasetId Dataset ID of the table to delete
		 * @param {string} tableId Table ID of the table to delete
		 * @return {void} Successful response
		 */
		Bigquery_tables_delete(projectId: string, datasetId: string, tableId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
		 * Get projects/{projectId}/datasets/{datasetId}/tables/{tableId}
		 * @param {string} projectId Project ID of the requested table
		 * @param {string} datasetId Dataset ID of the requested table
		 * @param {string} tableId Table ID of the requested table
		 * @param {string} selectedFields List of fields to return (comma-separated). If unspecified, all fields are returned
		 * @return {void} Successful response
		 */
		Bigquery_tables_get(projectId: string, datasetId: string, tableId: string, selectedFields: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '&selectedFields=' + (selectedFields == null ? '' : encodeURIComponent(selectedFields)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
		 * Patch projects/{projectId}/datasets/{datasetId}/tables/{tableId}
		 * @param {string} projectId Project ID of the table to update
		 * @param {string} datasetId Dataset ID of the table to update
		 * @param {string} tableId Table ID of the table to update
		 * @return {void} Successful response
		 */
		Bigquery_tables_patch(projectId: string, datasetId: string, tableId: string, requestBody: Table): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
		 * Put projects/{projectId}/datasets/{datasetId}/tables/{tableId}
		 * @param {string} projectId Project ID of the table to update
		 * @param {string} datasetId Dataset ID of the table to update
		 * @param {string} tableId Table ID of the table to update
		 * @return {void} Successful response
		 */
		Bigquery_tables_update(projectId: string, datasetId: string, tableId: string, requestBody: Table): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves table data from a specified set of rows. Requires the READER dataset role.
		 * Get projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data
		 * @param {string} projectId Project ID of the table to read
		 * @param {string} datasetId Dataset ID of the table to read
		 * @param {string} tableId Table ID of the table to read
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken Page token, returned by a previous call, identifying the result set
		 * @param {string} selectedFields List of fields to return (comma-separated). If unspecified, all fields are returned
		 * @param {string} startIndex Zero-based index of the starting row to read
		 * @return {void} Successful response
		 */
		Bigquery_tabledata_list(projectId: string, datasetId: string, tableId: string, maxResults: number, pageToken: string, selectedFields: string, startIndex: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/data&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&selectedFields=' + (selectedFields == null ? '' : encodeURIComponent(selectedFields)) + '&startIndex=' + (startIndex == null ? '' : encodeURIComponent(startIndex)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
		 * Post projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll
		 * @param {string} projectId Project ID of the destination table.
		 * @param {string} datasetId Dataset ID of the destination table.
		 * @param {string} tableId Table ID of the destination table.
		 * @return {void} Successful response
		 */
		Bigquery_tabledata_insertAll(projectId: string, datasetId: string, tableId: string, requestBody: TableDataInsertAllRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/insertAll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
		 * Get projects/{projectId}/jobs
		 * @param {string} projectId Project ID of the jobs to list
		 * @param {boolean} allUsers Whether to display jobs owned by all users in the project. Default false
		 * @param {string} maxCreationTime Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} minCreationTime Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @param {string} parentJobId If set, retrieves only jobs whose parent is this job. Otherwise, retrieves only jobs which have no parent
		 * @param {Bigquery_jobs_listProjection} projection Restrict information returned to a set of selected fields
		 * @param {Array<string>} stateFilter Filter for job state
		 * @return {void} Successful response
		 */
		Bigquery_jobs_list(projectId: string, allUsers: boolean, maxCreationTime: string, maxResults: number, minCreationTime: string, pageToken: string, parentJobId: string, projection: Bigquery_jobs_listProjection, stateFilter: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs&allUsers=' + allUsers + '&maxCreationTime=' + (maxCreationTime == null ? '' : encodeURIComponent(maxCreationTime)) + '&maxResults=' + maxResults + '&minCreationTime=' + (minCreationTime == null ? '' : encodeURIComponent(minCreationTime)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parentJobId=' + (parentJobId == null ? '' : encodeURIComponent(parentJobId)) + '&projection=' + projection + '&' + stateFilter.map(z => `stateFilter=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
		 * Get projects/{projectId}/jobs/{jobId}
		 * @param {string} projectId [Required] Project ID of the requested job
		 * @param {string} jobId [Required] Job ID of the requested job
		 * @param {string} location The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
		 * @return {void} Successful response
		 */
		Bigquery_jobs_get(projectId: string, jobId: string, location: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
		 * Post projects/{projectId}/jobs/{jobId}/cancel
		 * @param {string} projectId [Required] Project ID of the job to cancel
		 * @param {string} jobId [Required] Job ID of the job to cancel
		 * @param {string} location The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
		 * @return {void} Successful response
		 */
		Bigquery_jobs_cancel(projectId: string, jobId: string, location: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&location=' + (location == null ? '' : encodeURIComponent(location)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
		 * Post projects/{projectId}/queries
		 * @param {string} projectId Project ID of the project billed for the query
		 * @return {void} Successful response
		 */
		Bigquery_jobs_query(projectId: string, requestBody: QueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/queries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the results of a query job.
		 * Get projects/{projectId}/queries/{jobId}
		 * @param {string} projectId [Required] Project ID of the query job
		 * @param {string} jobId [Required] Job ID of the query job
		 * @param {string} location The geographic location where the job should run. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
		 * @param {number} maxResults Maximum number of results to read
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @param {string} startIndex Zero-based index of the starting row
		 * @param {number} timeoutMs How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
		 * @return {void} Successful response
		 */
		Bigquery_jobs_getQueryResults(projectId: string, jobId: string, location: string, maxResults: number, pageToken: string, startIndex: string, timeoutMs: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/queries/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startIndex=' + (startIndex == null ? '' : encodeURIComponent(startIndex)) + '&timeoutMs=' + timeoutMs, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
		 * Get projects/{projectId}/serviceAccount
		 * @param {string} projectId Project ID for which the service account is requested.
		 * @return {void} Successful response
		 */
		Bigquery_projects_getServiceAccount(projectId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/serviceAccount', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Bigquery_jobs_listProjection { full = 0, minimal = 1 }

}

