import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAutoPredictorResponse {
		PredictorArn?: string;
	}
	export interface CreateAutoPredictorResponseFormProperties {
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAutoPredictorResponseFormGroup() {
		return new FormGroup<CreateAutoPredictorResponseFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAutoPredictorRequest {

		/** Required */
		PredictorName: string;
		ForecastHorizon?: number | null;
		ForecastTypes?: Array<string>;
		ForecastDimensions?: Array<string>;
		ForecastFrequency?: string;
		DataConfig?: DataConfig;

		/** An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
		EncryptionConfig?: EncryptionConfig;
		ReferencePredictorArn?: string;
		OptimizationMetric?: OptimizationMetric;
		ExplainPredictor?: boolean | null;
		Tags?: Array<Tag>;
		MonitorConfig?: MonitorConfig;
		TimeAlignmentBoundary?: TimeAlignmentBoundary;
	}
	export interface CreateAutoPredictorRequestFormProperties {

		/** Required */
		PredictorName: FormControl<string | null | undefined>,
		ForecastHorizon: FormControl<number | null | undefined>,
		ForecastFrequency: FormControl<string | null | undefined>,
		ReferencePredictorArn: FormControl<string | null | undefined>,
		OptimizationMetric: FormControl<OptimizationMetric | null | undefined>,
		ExplainPredictor: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAutoPredictorRequestFormGroup() {
		return new FormGroup<CreateAutoPredictorRequestFormProperties>({
			PredictorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForecastHorizon: new FormControl<number | null | undefined>(undefined),
			ForecastFrequency: new FormControl<string | null | undefined>(undefined),
			ReferencePredictorArn: new FormControl<string | null | undefined>(undefined),
			OptimizationMetric: new FormControl<OptimizationMetric | null | undefined>(undefined),
			ExplainPredictor: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The data configuration for your dataset group and any additional datasets. */
	export interface DataConfig {

		/** Required */
		DatasetGroupArn: string;
		AttributeConfigs?: Array<AttributeConfig>;
		AdditionalDatasets?: Array<AdditionalDataset>;
	}

	/** The data configuration for your dataset group and any additional datasets. */
	export interface DataConfigFormProperties {

		/** Required */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDataConfigFormGroup() {
		return new FormGroup<DataConfigFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides information about the method used to transform attributes.</p> <p>The following is an example using the RETAIL domain:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>"Transformations": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p> */
	export interface AttributeConfig {

		/** Required */
		AttributeName: string;

		/** Required */
		Transformations: Transformations;
	}

	/** <p>Provides information about the method used to transform attributes.</p> <p>The following is an example using the RETAIL domain:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>"Transformations": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p> */
	export interface AttributeConfigFormProperties {

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateAttributeConfigFormGroup() {
		return new FormGroup<AttributeConfigFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transformations {
	}
	export interface TransformationsFormProperties {
	}
	export function CreateTransformationsFormGroup() {
		return new FormGroup<TransformationsFormProperties>({
		});

	}


	/** <p>Describes an additional dataset. This object is part of the <a>DataConfig</a> object. Forecast supports the Weather Index and Holidays additional datasets.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in dataset that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in dataset that incorporates national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p> */
	export interface AdditionalDataset {

		/** Required */
		Name: string;
		Configuration?: Configuration;
	}

	/** <p>Describes an additional dataset. This object is part of the <a>DataConfig</a> object. Forecast supports the Weather Index and Holidays additional datasets.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in dataset that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in dataset that incorporates national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p> */
	export interface AdditionalDatasetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalDatasetFormGroup() {
		return new FormGroup<AdditionalDatasetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Configuration {
	}
	export interface ConfigurationFormProperties {
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
		});

	}


	/** An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
	export interface EncryptionConfig {

		/** Required */
		RoleArn: string;

		/** Required */
		KMSKeyArn: string;
	}

	/** An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
	export interface EncryptionConfigFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		KMSKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OptimizationMetric { WAPE = 0, RMSE = 1, AverageWeightedQuantileLoss = 2, MASE = 3, MAPE = 4 }


	/** <p>The optional metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>The optional metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p> </li> </ul> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration details for the predictor monitor. */
	export interface MonitorConfig {

		/** Required */
		MonitorName: string;
	}

	/** The configuration details for the predictor monitor. */
	export interface MonitorConfigFormProperties {

		/** Required */
		MonitorName: FormControl<string | null | undefined>,
	}
	export function CreateMonitorConfigFormGroup() {
		return new FormGroup<MonitorConfigFormProperties>({
			MonitorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The time boundary Forecast uses to align and aggregate your data to match your forecast frequency. Provide the unit of time and the time boundary as a key value pair. If you don't provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>. </p> <p>For more information about aggregation, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html">Data Aggregation for Different Forecast Frequencies</a>. For more information setting a custom time boundary, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>. </p> */
	export interface TimeAlignmentBoundary {
		Month?: Month;
		DayOfMonth?: number | null;
		DayOfWeek?: DayOfWeek;
		Hour?: number | null;
	}

	/** <p>The time boundary Forecast uses to align and aggregate your data to match your forecast frequency. Provide the unit of time and the time boundary as a key value pair. If you don't provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>. </p> <p>For more information about aggregation, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html">Data Aggregation for Different Forecast Frequencies</a>. For more information setting a custom time boundary, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>. </p> */
	export interface TimeAlignmentBoundaryFormProperties {
		Month: FormControl<Month | null | undefined>,
		DayOfMonth: FormControl<number | null | undefined>,
		DayOfWeek: FormControl<DayOfWeek | null | undefined>,
		Hour: FormControl<number | null | undefined>,
	}
	export function CreateTimeAlignmentBoundaryFormGroup() {
		return new FormGroup<TimeAlignmentBoundaryFormProperties>({
			Month: new FormControl<Month | null | undefined>(undefined),
			DayOfMonth: new FormControl<number | null | undefined>(undefined),
			DayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
			Hour: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Month { JANUARY = 0, FEBRUARY = 1, MARCH = 2, APRIL = 3, MAY = 4, JUNE = 5, JULY = 6, AUGUST = 7, SEPTEMBER = 8, OCTOBER = 9, NOVEMBER = 10, DECEMBER = 11 }

	export enum DayOfWeek { MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, THURSDAY = 3, FRIDAY = 4, SATURDAY = 5, SUNDAY = 6 }

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

		/** Required */
		DatasetName: string;

		/** Required */
		Domain: Domain;

		/** Required */
		DatasetType: DatasetType;
		DataFrequency?: string;

		/** Required */
		Schema: Schema;
		EncryptionConfig?: EncryptionConfig;
		Tags?: Array<Tag>;
	}
	export interface CreateDatasetRequestFormProperties {

		/** Required */
		DatasetName: FormControl<string | null | undefined>,

		/** Required */
		Domain: FormControl<Domain | null | undefined>,

		/** Required */
		DatasetType: FormControl<DatasetType | null | undefined>,
		DataFrequency: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<Domain | null | undefined>(undefined, [Validators.required]),
			DatasetType: new FormControl<DatasetType | null | undefined>(undefined, [Validators.required]),
			DataFrequency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Domain { RETAIL = 0, CUSTOM = 1, INVENTORY_PLANNING = 2, EC2_CAPACITY = 3, WORK_FORCE = 4, WEB_TRAFFIC = 5, METRICS = 6 }

	export enum DatasetType { TARGET_TIME_SERIES = 0, RELATED_TIME_SERIES = 1, ITEM_METADATA = 2 }


	/** Defines the fields of a dataset. */
	export interface Schema {
		Attributes?: Array<SchemaAttribute>;
	}

	/** Defines the fields of a dataset. */
	export interface SchemaFormProperties {
	}
	export function CreateSchemaFormGroup() {
		return new FormGroup<SchemaFormProperties>({
		});

	}


	/** An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Schema.html">Schema</a> object contains an array of <code>SchemaAttribute</code> objects. */
	export interface SchemaAttribute {
		AttributeName?: string;
		AttributeType?: AttributeType;
	}

	/** An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Schema.html">Schema</a> object contains an array of <code>SchemaAttribute</code> objects. */
	export interface SchemaAttributeFormProperties {
		AttributeName: FormControl<string | null | undefined>,
		AttributeType: FormControl<AttributeType | null | undefined>,
	}
	export function CreateSchemaAttributeFormGroup() {
		return new FormGroup<SchemaAttributeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined),
			AttributeType: new FormControl<AttributeType | null | undefined>(undefined),
		});

	}

	export enum AttributeType { string = 0, integer = 1, float = 2, timestamp = 3, geolocation = 4 }

	export interface CreateDatasetGroupResponse {
		DatasetGroupArn?: string;
	}
	export interface CreateDatasetGroupResponseFormProperties {
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetGroupResponseFormGroup() {
		return new FormGroup<CreateDatasetGroupResponseFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetGroupRequest {

		/** Required */
		DatasetGroupName: string;

		/** Required */
		Domain: Domain;
		DatasetArns?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateDatasetGroupRequestFormProperties {

		/** Required */
		DatasetGroupName: FormControl<string | null | undefined>,

		/** Required */
		Domain: FormControl<Domain | null | undefined>,
	}
	export function CreateCreateDatasetGroupRequestFormGroup() {
		return new FormGroup<CreateDatasetGroupRequestFormProperties>({
			DatasetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<Domain | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDatasetImportJobResponse {
		DatasetImportJobArn?: string;
	}
	export interface CreateDatasetImportJobResponseFormProperties {
		DatasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetImportJobResponseFormGroup() {
		return new FormGroup<CreateDatasetImportJobResponseFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetImportJobRequest {

		/** Required */
		DatasetImportJobName: string;

		/** Required */
		DatasetArn: string;

		/** Required */
		DataSource: DataSource;
		TimestampFormat?: string;
		TimeZone?: string;
		UseGeolocationForTimeZone?: boolean | null;
		GeolocationFormat?: string;
		Tags?: Array<Tag>;
		Format?: string;
		ImportMode?: ImportMode;
	}
	export interface CreateDatasetImportJobRequestFormProperties {

		/** Required */
		DatasetImportJobName: FormControl<string | null | undefined>,

		/** Required */
		DatasetArn: FormControl<string | null | undefined>,
		TimestampFormat: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
		UseGeolocationForTimeZone: FormControl<boolean | null | undefined>,
		GeolocationFormat: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
		ImportMode: FormControl<ImportMode | null | undefined>,
	}
	export function CreateCreateDatasetImportJobRequestFormGroup() {
		return new FormGroup<CreateDatasetImportJobRequestFormProperties>({
			DatasetImportJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimestampFormat: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
			UseGeolocationForTimeZone: new FormControl<boolean | null | undefined>(undefined),
			GeolocationFormat: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			ImportMode: new FormControl<ImportMode | null | undefined>(undefined),
		});

	}


	/** The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key. */
	export interface DataSource {

		/** Required */
		S3Config: S3Config;
	}

	/** The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key. */
	export interface DataSourceFormProperties {
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
		});

	}


	/** The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object. */
	export interface S3Config {

		/** Required */
		Path: string;

		/** Required */
		RoleArn: string;
		KMSKeyArn?: string;
	}

	/** The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object. */
	export interface S3ConfigFormProperties {

		/** Required */
		Path: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		KMSKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigFormGroup() {
		return new FormGroup<S3ConfigFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportMode { FULL = 0, INCREMENTAL = 1 }

	export interface CreateExplainabilityResponse {
		ExplainabilityArn?: string;
	}
	export interface CreateExplainabilityResponseFormProperties {
		ExplainabilityArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateExplainabilityResponseFormGroup() {
		return new FormGroup<CreateExplainabilityResponseFormProperties>({
			ExplainabilityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExplainabilityRequest {

		/** Required */
		ExplainabilityName: string;

		/** Required */
		ResourceArn: string;

		/** Required */
		ExplainabilityConfig: ExplainabilityConfig;

		/** The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key. */
		DataSource?: DataSource;

		/** Defines the fields of a dataset. */
		Schema?: Schema;
		EnableVisualization?: boolean | null;
		StartDateTime?: string;
		EndDateTime?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateExplainabilityRequestFormProperties {

		/** Required */
		ExplainabilityName: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		EnableVisualization: FormControl<boolean | null | undefined>,
		StartDateTime: FormControl<string | null | undefined>,
		EndDateTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateExplainabilityRequestFormGroup() {
		return new FormGroup<CreateExplainabilityRequestFormProperties>({
			ExplainabilityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableVisualization: new FormControl<boolean | null | undefined>(undefined),
			StartDateTime: new FormControl<string | null | undefined>(undefined),
			EndDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The ExplainabilityConfig data type defines the number of time series and time points included in <a>CreateExplainability</a>.</p> <p>If you provide a predictor ARN for <code>ResourceArn</code>, you must set both <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to “ALL”. When creating Predictor Explainability, Amazon Forecast considers all time series and time points.</p> <p>If you provide a forecast ARN for <code>ResourceArn</code>, you can set <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to either “ALL” or “Specific”.</p> */
	export interface ExplainabilityConfig {

		/** Required */
		TimeSeriesGranularity: TimeSeriesGranularity;

		/** Required */
		TimePointGranularity: TimeSeriesGranularity;
	}

	/** <p>The ExplainabilityConfig data type defines the number of time series and time points included in <a>CreateExplainability</a>.</p> <p>If you provide a predictor ARN for <code>ResourceArn</code>, you must set both <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to “ALL”. When creating Predictor Explainability, Amazon Forecast considers all time series and time points.</p> <p>If you provide a forecast ARN for <code>ResourceArn</code>, you can set <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to either “ALL” or “Specific”.</p> */
	export interface ExplainabilityConfigFormProperties {

		/** Required */
		TimeSeriesGranularity: FormControl<TimeSeriesGranularity | null | undefined>,

		/** Required */
		TimePointGranularity: FormControl<TimeSeriesGranularity | null | undefined>,
	}
	export function CreateExplainabilityConfigFormGroup() {
		return new FormGroup<ExplainabilityConfigFormProperties>({
			TimeSeriesGranularity: new FormControl<TimeSeriesGranularity | null | undefined>(undefined, [Validators.required]),
			TimePointGranularity: new FormControl<TimeSeriesGranularity | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TimeSeriesGranularity { ALL = 0, SPECIFIC = 1 }

	export interface CreateExplainabilityExportResponse {
		ExplainabilityExportArn?: string;
	}
	export interface CreateExplainabilityExportResponseFormProperties {
		ExplainabilityExportArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateExplainabilityExportResponseFormGroup() {
		return new FormGroup<CreateExplainabilityExportResponseFormProperties>({
			ExplainabilityExportArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExplainabilityExportRequest {

		/** Required */
		ExplainabilityExportName: string;

		/** Required */
		ExplainabilityArn: string;

		/**
		 * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
		 * Required
		 */
		Destination: DataDestination;
		Tags?: Array<Tag>;
		Format?: string;
	}
	export interface CreateExplainabilityExportRequestFormProperties {

		/** Required */
		ExplainabilityExportName: FormControl<string | null | undefined>,

		/** Required */
		ExplainabilityArn: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateCreateExplainabilityExportRequestFormGroup() {
		return new FormGroup<CreateExplainabilityExportRequestFormProperties>({
			ExplainabilityExportName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExplainabilityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).  */
	export interface DataDestination {

		/** Required */
		S3Config: S3Config;
	}

	/** The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).  */
	export interface DataDestinationFormProperties {
	}
	export function CreateDataDestinationFormGroup() {
		return new FormGroup<DataDestinationFormProperties>({
		});

	}

	export interface CreateForecastResponse {
		ForecastArn?: string;
	}
	export interface CreateForecastResponseFormProperties {
		ForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateForecastResponseFormGroup() {
		return new FormGroup<CreateForecastResponseFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateForecastRequest {

		/** Required */
		ForecastName: string;

		/** Required */
		PredictorArn: string;
		ForecastTypes?: Array<string>;
		Tags?: Array<Tag>;
		TimeSeriesSelector?: TimeSeriesSelector;
	}
	export interface CreateForecastRequestFormProperties {

		/** Required */
		ForecastName: FormControl<string | null | undefined>,

		/** Required */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateForecastRequestFormGroup() {
		return new FormGroup<CreateForecastRequestFormProperties>({
			ForecastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul> */
	export interface TimeSeriesSelector {
		TimeSeriesIdentifiers?: TimeSeriesIdentifiers;
	}

	/** <p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul> */
	export interface TimeSeriesSelectorFormProperties {
	}
	export function CreateTimeSeriesSelectorFormGroup() {
		return new FormGroup<TimeSeriesSelectorFormProperties>({
		});

	}


	/** Details about the import file that contains the time series for which you want to create forecasts. */
	export interface TimeSeriesIdentifiers {

		/** The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key. */
		DataSource?: DataSource;

		/** Defines the fields of a dataset. */
		Schema?: Schema;
		Format?: string;
	}

	/** Details about the import file that contains the time series for which you want to create forecasts. */
	export interface TimeSeriesIdentifiersFormProperties {
		Format: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesIdentifiersFormGroup() {
		return new FormGroup<TimeSeriesIdentifiersFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateForecastExportJobResponse {
		ForecastExportJobArn?: string;
	}
	export interface CreateForecastExportJobResponseFormProperties {
		ForecastExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateForecastExportJobResponseFormGroup() {
		return new FormGroup<CreateForecastExportJobResponseFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateForecastExportJobRequest {

		/** Required */
		ForecastExportJobName: string;

		/** Required */
		ForecastArn: string;

		/** Required */
		Destination: DataDestination;
		Tags?: Array<Tag>;
		Format?: string;
	}
	export interface CreateForecastExportJobRequestFormProperties {

		/** Required */
		ForecastExportJobName: FormControl<string | null | undefined>,

		/** Required */
		ForecastArn: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateCreateForecastExportJobRequestFormGroup() {
		return new FormGroup<CreateForecastExportJobRequestFormProperties>({
			ForecastExportJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMonitorResponse {
		MonitorArn?: string;
	}
	export interface CreateMonitorResponseFormProperties {
		MonitorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMonitorResponseFormGroup() {
		return new FormGroup<CreateMonitorResponseFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMonitorRequest {

		/** Required */
		MonitorName: string;

		/** Required */
		ResourceArn: string;
		Tags?: Array<Tag>;
	}
	export interface CreateMonitorRequestFormProperties {

		/** Required */
		MonitorName: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMonitorRequestFormGroup() {
		return new FormGroup<CreateMonitorRequestFormProperties>({
			MonitorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePredictorResponse {
		PredictorArn?: string;
	}
	export interface CreatePredictorResponseFormProperties {
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePredictorResponseFormGroup() {
		return new FormGroup<CreatePredictorResponseFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePredictorRequest {

		/** Required */
		PredictorName: string;
		AlgorithmArn?: string;

		/** Required */
		ForecastHorizon: number;
		ForecastTypes?: Array<string>;
		PerformAutoML?: boolean | null;
		AutoMLOverrideStrategy?: AutoMLOverrideStrategy;
		PerformHPO?: boolean | null;
		TrainingParameters?: TrainingParameters;
		EvaluationParameters?: EvaluationParameters;
		HPOConfig?: HyperParameterTuningJobConfig;

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		FeaturizationConfig: FeaturizationConfig;
		EncryptionConfig?: EncryptionConfig;
		Tags?: Array<Tag>;
		OptimizationMetric?: OptimizationMetric;
	}
	export interface CreatePredictorRequestFormProperties {

		/** Required */
		PredictorName: FormControl<string | null | undefined>,
		AlgorithmArn: FormControl<string | null | undefined>,

		/** Required */
		ForecastHorizon: FormControl<number | null | undefined>,
		PerformAutoML: FormControl<boolean | null | undefined>,
		AutoMLOverrideStrategy: FormControl<AutoMLOverrideStrategy | null | undefined>,
		PerformHPO: FormControl<boolean | null | undefined>,
		OptimizationMetric: FormControl<OptimizationMetric | null | undefined>,
	}
	export function CreateCreatePredictorRequestFormGroup() {
		return new FormGroup<CreatePredictorRequestFormProperties>({
			PredictorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AlgorithmArn: new FormControl<string | null | undefined>(undefined),
			ForecastHorizon: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PerformAutoML: new FormControl<boolean | null | undefined>(undefined),
			AutoMLOverrideStrategy: new FormControl<AutoMLOverrideStrategy | null | undefined>(undefined),
			PerformHPO: new FormControl<boolean | null | undefined>(undefined),
			OptimizationMetric: new FormControl<OptimizationMetric | null | undefined>(undefined),
		});

	}

	export enum AutoMLOverrideStrategy { LatencyOptimized = 0, AccuracyOptimized = 1 }

	export interface TrainingParameters {
	}
	export interface TrainingParametersFormProperties {
	}
	export function CreateTrainingParametersFormGroup() {
		return new FormGroup<TrainingParametersFormProperties>({
		});

	}


	/** Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request. */
	export interface EvaluationParameters {
		NumberOfBacktestWindows?: number | null;
		BackTestWindowOffset?: number | null;
	}

	/** Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request. */
	export interface EvaluationParametersFormProperties {
		NumberOfBacktestWindows: FormControl<number | null | undefined>,
		BackTestWindowOffset: FormControl<number | null | undefined>,
	}
	export function CreateEvaluationParametersFormGroup() {
		return new FormGroup<EvaluationParametersFormProperties>({
			NumberOfBacktestWindows: new FormControl<number | null | undefined>(undefined),
			BackTestWindowOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Configuration information for a hyperparameter tuning job. You specify this object in the <a>CreatePredictor</a> request.</p> <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.</p> <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.</p> */
	export interface HyperParameterTuningJobConfig {
		ParameterRanges?: ParameterRanges;
	}

	/** <p>Configuration information for a hyperparameter tuning job. You specify this object in the <a>CreatePredictor</a> request.</p> <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.</p> <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.</p> */
	export interface HyperParameterTuningJobConfigFormProperties {
	}
	export function CreateHyperParameterTuningJobConfigFormGroup() {
		return new FormGroup<HyperParameterTuningJobConfigFormProperties>({
		});

	}


	/** Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object. */
	export interface ParameterRanges {
		CategoricalParameterRanges?: Array<CategoricalParameterRange>;
		ContinuousParameterRanges?: Array<ContinuousParameterRange>;
		IntegerParameterRanges?: Array<IntegerParameterRange>;
	}

	/** Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object. */
	export interface ParameterRangesFormProperties {
	}
	export function CreateParameterRangesFormGroup() {
		return new FormGroup<ParameterRangesFormProperties>({
		});

	}


	/** Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface CategoricalParameterRange {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<string>;
	}

	/** Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface CategoricalParameterRangeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCategoricalParameterRangeFormGroup() {
		return new FormGroup<CategoricalParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface ContinuousParameterRange {

		/** Required */
		Name: string;

		/** Required */
		MaxValue: number;

		/** Required */
		MinValue: number;
		ScalingType?: ScalingType;
	}

	/** Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface ContinuousParameterRangeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MaxValue: FormControl<number | null | undefined>,

		/** Required */
		MinValue: FormControl<number | null | undefined>,
		ScalingType: FormControl<ScalingType | null | undefined>,
	}
	export function CreateContinuousParameterRangeFormGroup() {
		return new FormGroup<ContinuousParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ScalingType: new FormControl<ScalingType | null | undefined>(undefined),
		});

	}

	export enum ScalingType { Auto = 0, Linear = 1, Logarithmic = 2, ReverseLogarithmic = 3 }


	/** Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface IntegerParameterRange {

		/** Required */
		Name: string;

		/** Required */
		MaxValue: number;

		/** Required */
		MinValue: number;
		ScalingType?: ScalingType;
	}

	/** Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface IntegerParameterRangeFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MaxValue: FormControl<number | null | undefined>,

		/** Required */
		MinValue: FormControl<number | null | undefined>,
		ScalingType: FormControl<ScalingType | null | undefined>,
	}
	export function CreateIntegerParameterRangeFormGroup() {
		return new FormGroup<IntegerParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ScalingType: new FormControl<ScalingType | null | undefined>(undefined),
		});

	}


	/** <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>DataConfig</a>.</p> </note> <p>The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.</p> */
	export interface InputDataConfig {

		/** Required */
		DatasetGroupArn: string;
		SupplementaryFeatures?: Array<SupplementaryFeature>;
	}

	/** <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>DataConfig</a>.</p> </note> <p>The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.</p> */
	export interface InputDataConfigFormProperties {

		/** Required */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AdditionalDataset</a>.</p> </note> <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in featurizations.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in featurization that incorporates a feature-engineered dataset of national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p> */
	export interface SupplementaryFeature {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AdditionalDataset</a>.</p> </note> <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in featurizations.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in featurization that incorporates a feature-engineered dataset of national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p> */
	export interface SupplementaryFeatureFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateSupplementaryFeatureFormGroup() {
		return new FormGroup<SupplementaryFeatureFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p> */
	export interface FeaturizationConfig {

		/** Required */
		ForecastFrequency: string;
		ForecastDimensions?: Array<string>;
		Featurizations?: Array<Featurization>;
	}

	/** <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p> */
	export interface FeaturizationConfigFormProperties {

		/** Required */
		ForecastFrequency: FormControl<string | null | undefined>,
	}
	export function CreateFeaturizationConfigFormGroup() {
		return new FormGroup<FeaturizationConfigFormProperties>({
			ForecastFrequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p> */
	export interface Featurization {

		/** Required */
		AttributeName: string;
		FeaturizationPipeline?: Array<FeaturizationMethod>;
	}

	/** <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p> */
	export interface FeaturizationFormProperties {

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateFeaturizationFormGroup() {
		return new FormGroup<FeaturizationFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p> */
	export interface FeaturizationMethod {

		/** Required */
		FeaturizationMethodName: FeaturizationMethodName;
		FeaturizationMethodParameters?: FeaturizationMethodParameters;
	}

	/** <p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p> */
	export interface FeaturizationMethodFormProperties {

		/** Required */
		FeaturizationMethodName: FormControl<FeaturizationMethodName | null | undefined>,
	}
	export function CreateFeaturizationMethodFormGroup() {
		return new FormGroup<FeaturizationMethodFormProperties>({
			FeaturizationMethodName: new FormControl<FeaturizationMethodName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FeaturizationMethodName { filling = 0 }

	export interface FeaturizationMethodParameters {
	}
	export interface FeaturizationMethodParametersFormProperties {
	}
	export function CreateFeaturizationMethodParametersFormGroup() {
		return new FormGroup<FeaturizationMethodParametersFormProperties>({
		});

	}

	export interface CreatePredictorBacktestExportJobResponse {
		PredictorBacktestExportJobArn?: string;
	}
	export interface CreatePredictorBacktestExportJobResponseFormProperties {
		PredictorBacktestExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePredictorBacktestExportJobResponseFormGroup() {
		return new FormGroup<CreatePredictorBacktestExportJobResponseFormProperties>({
			PredictorBacktestExportJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePredictorBacktestExportJobRequest {

		/** Required */
		PredictorBacktestExportJobName: string;

		/** Required */
		PredictorArn: string;

		/**
		 * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
		 * Required
		 */
		Destination: DataDestination;
		Tags?: Array<Tag>;
		Format?: string;
	}
	export interface CreatePredictorBacktestExportJobRequestFormProperties {

		/** Required */
		PredictorBacktestExportJobName: FormControl<string | null | undefined>,

		/** Required */
		PredictorArn: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateCreatePredictorBacktestExportJobRequestFormGroup() {
		return new FormGroup<CreatePredictorBacktestExportJobRequestFormProperties>({
			PredictorBacktestExportJobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWhatIfAnalysisResponse {
		WhatIfAnalysisArn?: string;
	}
	export interface CreateWhatIfAnalysisResponseFormProperties {
		WhatIfAnalysisArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWhatIfAnalysisResponseFormGroup() {
		return new FormGroup<CreateWhatIfAnalysisResponseFormProperties>({
			WhatIfAnalysisArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWhatIfAnalysisRequest {

		/** Required */
		WhatIfAnalysisName: string;

		/** Required */
		ForecastArn: string;
		TimeSeriesSelector?: TimeSeriesSelector;
		Tags?: Array<Tag>;
	}
	export interface CreateWhatIfAnalysisRequestFormProperties {

		/** Required */
		WhatIfAnalysisName: FormControl<string | null | undefined>,

		/** Required */
		ForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWhatIfAnalysisRequestFormGroup() {
		return new FormGroup<CreateWhatIfAnalysisRequestFormProperties>({
			WhatIfAnalysisName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWhatIfForecastResponse {
		WhatIfForecastArn?: string;
	}
	export interface CreateWhatIfForecastResponseFormProperties {
		WhatIfForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWhatIfForecastResponseFormGroup() {
		return new FormGroup<CreateWhatIfForecastResponseFormProperties>({
			WhatIfForecastArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWhatIfForecastRequest {

		/** Required */
		WhatIfForecastName: string;

		/** Required */
		WhatIfAnalysisArn: string;
		TimeSeriesTransformations?: Array<TimeSeriesTransformation>;
		TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;
		Tags?: Array<Tag>;
	}
	export interface CreateWhatIfForecastRequestFormProperties {

		/** Required */
		WhatIfForecastName: FormControl<string | null | undefined>,

		/** Required */
		WhatIfAnalysisArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWhatIfForecastRequestFormGroup() {
		return new FormGroup<CreateWhatIfForecastRequestFormProperties>({
			WhatIfForecastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WhatIfAnalysisArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A transformation function is a pair of operations that select and modify the rows in a related time series. You select the rows that you want with a condition operation and you modify the rows with a transformation operation. All conditions are joined with an AND operation, meaning that all conditions must be true for the transformation to be applied. Transformations are applied in the order that they are listed. */
	export interface TimeSeriesTransformation {
		Action?: Action;
		TimeSeriesConditions?: Array<TimeSeriesCondition>;
	}

	/** A transformation function is a pair of operations that select and modify the rows in a related time series. You select the rows that you want with a condition operation and you modify the rows with a transformation operation. All conditions are joined with an AND operation, meaning that all conditions must be true for the transformation to be applied. Transformations are applied in the order that they are listed. */
	export interface TimeSeriesTransformationFormProperties {
	}
	export function CreateTimeSeriesTransformationFormGroup() {
		return new FormGroup<TimeSeriesTransformationFormProperties>({
		});

	}


	/** Defines the modifications that you are making to an attribute for a what-if forecast. For example, you can use this operation to create a what-if forecast that investigates a 10% off sale on all shoes. To do this, you specify <code>"AttributeName": "shoes"</code>, <code>"Operation": "MULTIPLY"</code>, and <code>"Value": "0.90"</code>. Pair this operation with the <a>TimeSeriesCondition</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define a subset of attribute items that are modified. */
	export interface Action {

		/** Required */
		AttributeName: string;

		/** Required */
		Operation: Operation;

		/** Required */
		Value: number;
	}

	/** Defines the modifications that you are making to an attribute for a what-if forecast. For example, you can use this operation to create a what-if forecast that investigates a 10% off sale on all shoes. To do this, you specify <code>"AttributeName": "shoes"</code>, <code>"Operation": "MULTIPLY"</code>, and <code>"Value": "0.90"</code>. Pair this operation with the <a>TimeSeriesCondition</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define a subset of attribute items that are modified. */
	export interface ActionFormProperties {

		/** Required */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		Operation: FormControl<Operation | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Operation: new FormControl<Operation | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Operation { ADD = 0, SUBTRACT = 1, MULTIPLY = 2, DIVIDE = 3 }


	/** Creates a subset of items within an attribute that are modified. For example, you can use this operation to create a subset of items that cost $5 or less. To do this, you specify <code>"AttributeName": "price"</code>, <code>"AttributeValue": "5"</code>, and <code>"Condition": "LESS_THAN"</code>. Pair this operation with the <a>Action</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define how the attribute is modified. */
	export interface TimeSeriesCondition {

		/** Required */
		AttributeName: string;

		/** Required */
		AttributeValue: string;

		/** Required */
		Condition: Condition;
	}

	/** Creates a subset of items within an attribute that are modified. For example, you can use this operation to create a subset of items that cost $5 or less. To do this, you specify <code>"AttributeName": "price"</code>, <code>"AttributeValue": "5"</code>, and <code>"Condition": "LESS_THAN"</code>. Pair this operation with the <a>Action</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define how the attribute is modified. */
	export interface TimeSeriesConditionFormProperties {

		/** Required */
		AttributeName: FormControl<string | null | undefined>,

		/** Required */
		AttributeValue: FormControl<string | null | undefined>,

		/** Required */
		Condition: FormControl<Condition | null | undefined>,
	}
	export function CreateTimeSeriesConditionFormGroup() {
		return new FormGroup<TimeSeriesConditionFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Condition: new FormControl<Condition | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Condition { EQUALS = 0, NOT_EQUALS = 1, LESS_THAN = 2, GREATER_THAN = 3 }


	/** A replacement dataset is a modified version of the baseline related time series that contains only the values that you want to include in a what-if forecast. The replacement dataset must contain the forecast dimensions and item identifiers in the baseline related time series as well as at least 1 changed time series. This dataset is merged with the baseline related time series to create a transformed dataset that is used for the what-if forecast. */
	export interface TimeSeriesReplacementsDataSource {

		/**
		 * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.
		 * Required
		 */
		S3Config: S3Config;

		/**
		 * Defines the fields of a dataset.
		 * Required
		 */
		Schema: Schema;
		Format?: string;
		TimestampFormat?: string;
	}

	/** A replacement dataset is a modified version of the baseline related time series that contains only the values that you want to include in a what-if forecast. The replacement dataset must contain the forecast dimensions and item identifiers in the baseline related time series as well as at least 1 changed time series. This dataset is merged with the baseline related time series to create a transformed dataset that is used for the what-if forecast. */
	export interface TimeSeriesReplacementsDataSourceFormProperties {
		Format: FormControl<string | null | undefined>,
		TimestampFormat: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesReplacementsDataSourceFormGroup() {
		return new FormGroup<TimeSeriesReplacementsDataSourceFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined),
			TimestampFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWhatIfForecastExportResponse {
		WhatIfForecastExportArn?: string;
	}
	export interface CreateWhatIfForecastExportResponseFormProperties {
		WhatIfForecastExportArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWhatIfForecastExportResponseFormGroup() {
		return new FormGroup<CreateWhatIfForecastExportResponseFormProperties>({
			WhatIfForecastExportArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWhatIfForecastExportRequest {

		/** Required */
		WhatIfForecastExportName: string;

		/** Required */
		WhatIfForecastArns: Array<string>;

		/** Required */
		Destination: DataDestination;
		Tags?: Array<Tag>;
		Format?: string;
	}
	export interface CreateWhatIfForecastExportRequestFormProperties {

		/** Required */
		WhatIfForecastExportName: FormControl<string | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateCreateWhatIfForecastExportRequestFormGroup() {
		return new FormGroup<CreateWhatIfForecastExportRequestFormProperties>({
			WhatIfForecastExportName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteDatasetGroupRequest {

		/** Required */
		DatasetGroupArn: string;
	}
	export interface DeleteDatasetGroupRequestFormProperties {

		/** Required */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetGroupRequestFormGroup() {
		return new FormGroup<DeleteDatasetGroupRequestFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDatasetImportJobRequest {

		/** Required */
		DatasetImportJobArn: string;
	}
	export interface DeleteDatasetImportJobRequestFormProperties {

		/** Required */
		DatasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetImportJobRequestFormGroup() {
		return new FormGroup<DeleteDatasetImportJobRequestFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteExplainabilityRequest {

		/** Required */
		ExplainabilityArn: string;
	}
	export interface DeleteExplainabilityRequestFormProperties {

		/** Required */
		ExplainabilityArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteExplainabilityRequestFormGroup() {
		return new FormGroup<DeleteExplainabilityRequestFormProperties>({
			ExplainabilityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteExplainabilityExportRequest {

		/** Required */
		ExplainabilityExportArn: string;
	}
	export interface DeleteExplainabilityExportRequestFormProperties {

		/** Required */
		ExplainabilityExportArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteExplainabilityExportRequestFormGroup() {
		return new FormGroup<DeleteExplainabilityExportRequestFormProperties>({
			ExplainabilityExportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteForecastRequest {

		/** Required */
		ForecastArn: string;
	}
	export interface DeleteForecastRequestFormProperties {

		/** Required */
		ForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteForecastRequestFormGroup() {
		return new FormGroup<DeleteForecastRequestFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteForecastExportJobRequest {

		/** Required */
		ForecastExportJobArn: string;
	}
	export interface DeleteForecastExportJobRequestFormProperties {

		/** Required */
		ForecastExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteForecastExportJobRequestFormGroup() {
		return new FormGroup<DeleteForecastExportJobRequestFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMonitorRequest {

		/** Required */
		MonitorArn: string;
	}
	export interface DeleteMonitorRequestFormProperties {

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMonitorRequestFormGroup() {
		return new FormGroup<DeleteMonitorRequestFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePredictorRequest {

		/** Required */
		PredictorArn: string;
	}
	export interface DeletePredictorRequestFormProperties {

		/** Required */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePredictorRequestFormGroup() {
		return new FormGroup<DeletePredictorRequestFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePredictorBacktestExportJobRequest {

		/** Required */
		PredictorBacktestExportJobArn: string;
	}
	export interface DeletePredictorBacktestExportJobRequestFormProperties {

		/** Required */
		PredictorBacktestExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePredictorBacktestExportJobRequestFormGroup() {
		return new FormGroup<DeletePredictorBacktestExportJobRequestFormProperties>({
			PredictorBacktestExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResourceTreeRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeleteResourceTreeRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceTreeRequestFormGroup() {
		return new FormGroup<DeleteResourceTreeRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWhatIfAnalysisRequest {

		/** Required */
		WhatIfAnalysisArn: string;
	}
	export interface DeleteWhatIfAnalysisRequestFormProperties {

		/** Required */
		WhatIfAnalysisArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWhatIfAnalysisRequestFormGroup() {
		return new FormGroup<DeleteWhatIfAnalysisRequestFormProperties>({
			WhatIfAnalysisArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWhatIfForecastRequest {

		/** Required */
		WhatIfForecastArn: string;
	}
	export interface DeleteWhatIfForecastRequestFormProperties {

		/** Required */
		WhatIfForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWhatIfForecastRequestFormGroup() {
		return new FormGroup<DeleteWhatIfForecastRequestFormProperties>({
			WhatIfForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWhatIfForecastExportRequest {

		/** Required */
		WhatIfForecastExportArn: string;
	}
	export interface DeleteWhatIfForecastExportRequestFormProperties {

		/** Required */
		WhatIfForecastExportArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWhatIfForecastExportRequestFormGroup() {
		return new FormGroup<DeleteWhatIfForecastExportRequestFormProperties>({
			WhatIfForecastExportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAutoPredictorResponse {
		PredictorArn?: string;
		PredictorName?: string;
		ForecastHorizon?: number | null;
		ForecastTypes?: Array<string>;
		ForecastFrequency?: string;
		ForecastDimensions?: Array<string>;
		DatasetImportJobArns?: Array<string>;
		DataConfig?: DataConfig;

		/** An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
		EncryptionConfig?: EncryptionConfig;
		ReferencePredictorSummary?: ReferencePredictorSummary;
		EstimatedTimeRemainingInMinutes?: number | null;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		OptimizationMetric?: OptimizationMetric;
		ExplainabilityInfo?: ExplainabilityInfo;
		MonitorInfo?: MonitorInfo;
		TimeAlignmentBoundary?: TimeAlignmentBoundary;
	}
	export interface DescribeAutoPredictorResponseFormProperties {
		PredictorArn: FormControl<string | null | undefined>,
		PredictorName: FormControl<string | null | undefined>,
		ForecastHorizon: FormControl<number | null | undefined>,
		ForecastFrequency: FormControl<string | null | undefined>,
		EstimatedTimeRemainingInMinutes: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		OptimizationMetric: FormControl<OptimizationMetric | null | undefined>,
	}
	export function CreateDescribeAutoPredictorResponseFormGroup() {
		return new FormGroup<DescribeAutoPredictorResponseFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined),
			PredictorName: new FormControl<string | null | undefined>(undefined),
			ForecastHorizon: new FormControl<number | null | undefined>(undefined),
			ForecastFrequency: new FormControl<string | null | undefined>(undefined),
			EstimatedTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			OptimizationMetric: new FormControl<OptimizationMetric | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the reference predictor used when retraining or upgrading a predictor. */
	export interface ReferencePredictorSummary {
		Arn?: string;
		State?: State;
	}

	/** Provides a summary of the reference predictor used when retraining or upgrading a predictor. */
	export interface ReferencePredictorSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
	}
	export function CreateReferencePredictorSummaryFormGroup() {
		return new FormGroup<ReferencePredictorSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
		});

	}

	export enum State { Active = 0, Deleted = 1 }


	/** Provides information about the Explainability resource. */
	export interface ExplainabilityInfo {
		ExplainabilityArn?: string;
		Status?: string;
	}

	/** Provides information about the Explainability resource. */
	export interface ExplainabilityInfoFormProperties {
		ExplainabilityArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateExplainabilityInfoFormGroup() {
		return new FormGroup<ExplainabilityInfoFormProperties>({
			ExplainabilityArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the monitor resource. */
	export interface MonitorInfo {
		MonitorArn?: string;
		Status?: string;
	}

	/** Provides information about the monitor resource. */
	export interface MonitorInfoFormProperties {
		MonitorArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateMonitorInfoFormGroup() {
		return new FormGroup<MonitorInfoFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAutoPredictorRequest {

		/** Required */
		PredictorArn: string;
	}
	export interface DescribeAutoPredictorRequestFormProperties {

		/** Required */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAutoPredictorRequestFormGroup() {
		return new FormGroup<DescribeAutoPredictorRequestFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetResponse {
		DatasetArn?: string;
		DatasetName?: string;
		Domain?: Domain;
		DatasetType?: DatasetType;
		DataFrequency?: string;
		Schema?: Schema;
		EncryptionConfig?: EncryptionConfig;
		Status?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}
	export interface DescribeDatasetResponseFormProperties {
		DatasetArn: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		Domain: FormControl<Domain | null | undefined>,
		DatasetType: FormControl<DatasetType | null | undefined>,
		DataFrequency: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<Domain | null | undefined>(undefined),
			DatasetType: new FormControl<DatasetType | null | undefined>(undefined),
			DataFrequency: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
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

	export interface DescribeDatasetGroupResponse {
		DatasetGroupName?: string;
		DatasetGroupArn?: string;
		DatasetArns?: Array<string>;
		Domain?: Domain;
		Status?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}
	export interface DescribeDatasetGroupResponseFormProperties {
		DatasetGroupName: FormControl<string | null | undefined>,
		DatasetGroupArn: FormControl<string | null | undefined>,
		Domain: FormControl<Domain | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDatasetGroupResponseFormGroup() {
		return new FormGroup<DescribeDatasetGroupResponseFormProperties>({
			DatasetGroupName: new FormControl<string | null | undefined>(undefined),
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<Domain | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetGroupRequest {

		/** Required */
		DatasetGroupArn: string;
	}
	export interface DescribeDatasetGroupRequestFormProperties {

		/** Required */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetGroupRequestFormGroup() {
		return new FormGroup<DescribeDatasetGroupRequestFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetImportJobResponse {
		DatasetImportJobName?: string;
		DatasetImportJobArn?: string;
		DatasetArn?: string;
		TimestampFormat?: string;
		TimeZone?: string;
		UseGeolocationForTimeZone?: boolean | null;
		GeolocationFormat?: string;
		DataSource?: DataSource;
		EstimatedTimeRemainingInMinutes?: number | null;
		FieldStatistics?: FieldStatistics;
		DataSize?: number | null;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		Format?: string;
		ImportMode?: ImportMode;
	}
	export interface DescribeDatasetImportJobResponseFormProperties {
		DatasetImportJobName: FormControl<string | null | undefined>,
		DatasetImportJobArn: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		TimestampFormat: FormControl<string | null | undefined>,
		TimeZone: FormControl<string | null | undefined>,
		UseGeolocationForTimeZone: FormControl<boolean | null | undefined>,
		GeolocationFormat: FormControl<string | null | undefined>,
		EstimatedTimeRemainingInMinutes: FormControl<number | null | undefined>,
		DataSize: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		Format: FormControl<string | null | undefined>,
		ImportMode: FormControl<ImportMode | null | undefined>,
	}
	export function CreateDescribeDatasetImportJobResponseFormGroup() {
		return new FormGroup<DescribeDatasetImportJobResponseFormProperties>({
			DatasetImportJobName: new FormControl<string | null | undefined>(undefined),
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			TimestampFormat: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<string | null | undefined>(undefined),
			UseGeolocationForTimeZone: new FormControl<boolean | null | undefined>(undefined),
			GeolocationFormat: new FormControl<string | null | undefined>(undefined),
			EstimatedTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
			DataSize: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
			ImportMode: new FormControl<ImportMode | null | undefined>(undefined),
		});

	}

	export interface FieldStatistics {
	}
	export interface FieldStatisticsFormProperties {
	}
	export function CreateFieldStatisticsFormGroup() {
		return new FormGroup<FieldStatisticsFormProperties>({
		});

	}

	export interface DescribeDatasetImportJobRequest {

		/** Required */
		DatasetImportJobArn: string;
	}
	export interface DescribeDatasetImportJobRequestFormProperties {

		/** Required */
		DatasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetImportJobRequestFormGroup() {
		return new FormGroup<DescribeDatasetImportJobRequestFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeExplainabilityResponse {
		ExplainabilityArn?: string;
		ExplainabilityName?: string;
		ResourceArn?: string;
		ExplainabilityConfig?: ExplainabilityConfig;
		EnableVisualization?: boolean | null;

		/** The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key. */
		DataSource?: DataSource;

		/** Defines the fields of a dataset. */
		Schema?: Schema;
		StartDateTime?: string;
		EndDateTime?: string;
		EstimatedTimeRemainingInMinutes?: number | null;
		Message?: string;
		Status?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}
	export interface DescribeExplainabilityResponseFormProperties {
		ExplainabilityArn: FormControl<string | null | undefined>,
		ExplainabilityName: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		EnableVisualization: FormControl<boolean | null | undefined>,
		StartDateTime: FormControl<string | null | undefined>,
		EndDateTime: FormControl<string | null | undefined>,
		EstimatedTimeRemainingInMinutes: FormControl<number | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeExplainabilityResponseFormGroup() {
		return new FormGroup<DescribeExplainabilityResponseFormProperties>({
			ExplainabilityArn: new FormControl<string | null | undefined>(undefined),
			ExplainabilityName: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			EnableVisualization: new FormControl<boolean | null | undefined>(undefined),
			StartDateTime: new FormControl<string | null | undefined>(undefined),
			EndDateTime: new FormControl<string | null | undefined>(undefined),
			EstimatedTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeExplainabilityRequest {

		/** Required */
		ExplainabilityArn: string;
	}
	export interface DescribeExplainabilityRequestFormProperties {

		/** Required */
		ExplainabilityArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExplainabilityRequestFormGroup() {
		return new FormGroup<DescribeExplainabilityRequestFormProperties>({
			ExplainabilityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeExplainabilityExportResponse {
		ExplainabilityExportArn?: string;
		ExplainabilityExportName?: string;
		ExplainabilityArn?: string;

		/** The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). */
		Destination?: DataDestination;
		Message?: string;
		Status?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		Format?: string;
	}
	export interface DescribeExplainabilityExportResponseFormProperties {
		ExplainabilityExportArn: FormControl<string | null | undefined>,
		ExplainabilityExportName: FormControl<string | null | undefined>,
		ExplainabilityArn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExplainabilityExportResponseFormGroup() {
		return new FormGroup<DescribeExplainabilityExportResponseFormProperties>({
			ExplainabilityExportArn: new FormControl<string | null | undefined>(undefined),
			ExplainabilityExportName: new FormControl<string | null | undefined>(undefined),
			ExplainabilityArn: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeExplainabilityExportRequest {

		/** Required */
		ExplainabilityExportArn: string;
	}
	export interface DescribeExplainabilityExportRequestFormProperties {

		/** Required */
		ExplainabilityExportArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExplainabilityExportRequestFormGroup() {
		return new FormGroup<DescribeExplainabilityExportRequestFormProperties>({
			ExplainabilityExportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeForecastResponse {
		ForecastArn?: string;
		ForecastName?: string;
		ForecastTypes?: Array<string>;
		PredictorArn?: string;
		DatasetGroupArn?: string;
		EstimatedTimeRemainingInMinutes?: number | null;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		TimeSeriesSelector?: TimeSeriesSelector;
	}
	export interface DescribeForecastResponseFormProperties {
		ForecastArn: FormControl<string | null | undefined>,
		ForecastName: FormControl<string | null | undefined>,
		PredictorArn: FormControl<string | null | undefined>,
		DatasetGroupArn: FormControl<string | null | undefined>,
		EstimatedTimeRemainingInMinutes: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeForecastResponseFormGroup() {
		return new FormGroup<DescribeForecastResponseFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined),
			ForecastName: new FormControl<string | null | undefined>(undefined),
			PredictorArn: new FormControl<string | null | undefined>(undefined),
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined),
			EstimatedTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeForecastRequest {

		/** Required */
		ForecastArn: string;
	}
	export interface DescribeForecastRequestFormProperties {

		/** Required */
		ForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeForecastRequestFormGroup() {
		return new FormGroup<DescribeForecastRequestFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeForecastExportJobResponse {
		ForecastExportJobArn?: string;
		ForecastExportJobName?: string;
		ForecastArn?: string;
		Destination?: DataDestination;
		Message?: string;
		Status?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		Format?: string;
	}
	export interface DescribeForecastExportJobResponseFormProperties {
		ForecastExportJobArn: FormControl<string | null | undefined>,
		ForecastExportJobName: FormControl<string | null | undefined>,
		ForecastArn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateDescribeForecastExportJobResponseFormGroup() {
		return new FormGroup<DescribeForecastExportJobResponseFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined),
			ForecastExportJobName: new FormControl<string | null | undefined>(undefined),
			ForecastArn: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeForecastExportJobRequest {

		/** Required */
		ForecastExportJobArn: string;
	}
	export interface DescribeForecastExportJobRequestFormProperties {

		/** Required */
		ForecastExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeForecastExportJobRequestFormGroup() {
		return new FormGroup<DescribeForecastExportJobRequestFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeMonitorResponse {
		MonitorName?: string;
		MonitorArn?: string;
		ResourceArn?: string;
		Status?: string;
		LastEvaluationTime?: Date;
		LastEvaluationState?: string;
		Baseline?: Baseline;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		EstimatedEvaluationTimeRemainingInMinutes?: number | null;
	}
	export interface DescribeMonitorResponseFormProperties {
		MonitorName: FormControl<string | null | undefined>,
		MonitorArn: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		LastEvaluationTime: FormControl<Date | null | undefined>,
		LastEvaluationState: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		EstimatedEvaluationTimeRemainingInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMonitorResponseFormGroup() {
		return new FormGroup<DescribeMonitorResponseFormProperties>({
			MonitorName: new FormControl<string | null | undefined>(undefined),
			MonitorArn: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			LastEvaluationTime: new FormControl<Date | null | undefined>(undefined),
			LastEvaluationState: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			EstimatedEvaluationTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor. */
	export interface Baseline {
		PredictorBaseline?: PredictorBaseline;
	}

	/** Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor. */
	export interface BaselineFormProperties {
	}
	export function CreateBaselineFormGroup() {
		return new FormGroup<BaselineFormProperties>({
		});

	}


	/** Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor. */
	export interface PredictorBaseline {
		BaselineMetrics?: Array<BaselineMetric>;
	}

	/** Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor. */
	export interface PredictorBaselineFormProperties {
	}
	export function CreatePredictorBaselineFormGroup() {
		return new FormGroup<PredictorBaselineFormProperties>({
		});

	}


	/** An individual metric that you can use for comparison as you evaluate your monitoring results. */
	export interface BaselineMetric {
		Name?: string;
		Value?: number | null;
	}

	/** An individual metric that you can use for comparison as you evaluate your monitoring results. */
	export interface BaselineMetricFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateBaselineMetricFormGroup() {
		return new FormGroup<BaselineMetricFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeMonitorRequest {

		/** Required */
		MonitorArn: string;
	}
	export interface DescribeMonitorRequestFormProperties {

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMonitorRequestFormGroup() {
		return new FormGroup<DescribeMonitorRequestFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePredictorResponse {
		PredictorArn?: string;
		PredictorName?: string;
		AlgorithmArn?: string;
		AutoMLAlgorithmArns?: Array<string>;
		ForecastHorizon?: number | null;
		ForecastTypes?: Array<string>;
		PerformAutoML?: boolean | null;
		AutoMLOverrideStrategy?: AutoMLOverrideStrategy;
		PerformHPO?: boolean | null;
		TrainingParameters?: TrainingParameters;
		EvaluationParameters?: EvaluationParameters;
		HPOConfig?: HyperParameterTuningJobConfig;
		InputDataConfig?: InputDataConfig;
		FeaturizationConfig?: FeaturizationConfig;
		EncryptionConfig?: EncryptionConfig;
		PredictorExecutionDetails?: PredictorExecutionDetails;
		EstimatedTimeRemainingInMinutes?: number | null;
		IsAutoPredictor?: boolean | null;
		DatasetImportJobArns?: Array<string>;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		OptimizationMetric?: OptimizationMetric;
	}
	export interface DescribePredictorResponseFormProperties {
		PredictorArn: FormControl<string | null | undefined>,
		PredictorName: FormControl<string | null | undefined>,
		AlgorithmArn: FormControl<string | null | undefined>,
		ForecastHorizon: FormControl<number | null | undefined>,
		PerformAutoML: FormControl<boolean | null | undefined>,
		AutoMLOverrideStrategy: FormControl<AutoMLOverrideStrategy | null | undefined>,
		PerformHPO: FormControl<boolean | null | undefined>,
		EstimatedTimeRemainingInMinutes: FormControl<number | null | undefined>,
		IsAutoPredictor: FormControl<boolean | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		OptimizationMetric: FormControl<OptimizationMetric | null | undefined>,
	}
	export function CreateDescribePredictorResponseFormGroup() {
		return new FormGroup<DescribePredictorResponseFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined),
			PredictorName: new FormControl<string | null | undefined>(undefined),
			AlgorithmArn: new FormControl<string | null | undefined>(undefined),
			ForecastHorizon: new FormControl<number | null | undefined>(undefined),
			PerformAutoML: new FormControl<boolean | null | undefined>(undefined),
			AutoMLOverrideStrategy: new FormControl<AutoMLOverrideStrategy | null | undefined>(undefined),
			PerformHPO: new FormControl<boolean | null | undefined>(undefined),
			EstimatedTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
			IsAutoPredictor: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			OptimizationMetric: new FormControl<OptimizationMetric | null | undefined>(undefined),
		});

	}


	/** Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation. */
	export interface PredictorExecutionDetails {
		PredictorExecutions?: Array<PredictorExecution>;
	}

	/** Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation. */
	export interface PredictorExecutionDetailsFormProperties {
	}
	export function CreatePredictorExecutionDetailsFormGroup() {
		return new FormGroup<PredictorExecutionDetailsFormProperties>({
		});

	}


	/** The algorithm used to perform a backtest and the status of those tests. */
	export interface PredictorExecution {
		AlgorithmArn?: string;
		TestWindows?: Array<TestWindowSummary>;
	}

	/** The algorithm used to perform a backtest and the status of those tests. */
	export interface PredictorExecutionFormProperties {
		AlgorithmArn: FormControl<string | null | undefined>,
	}
	export function CreatePredictorExecutionFormGroup() {
		return new FormGroup<PredictorExecutionFormProperties>({
			AlgorithmArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status, start time, and end time of a backtest, as well as a failure reason if applicable. */
	export interface TestWindowSummary {
		TestWindowStart?: Date;
		TestWindowEnd?: Date;
		Status?: string;
		Message?: string;
	}

	/** The status, start time, and end time of a backtest, as well as a failure reason if applicable. */
	export interface TestWindowSummaryFormProperties {
		TestWindowStart: FormControl<Date | null | undefined>,
		TestWindowEnd: FormControl<Date | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTestWindowSummaryFormGroup() {
		return new FormGroup<TestWindowSummaryFormProperties>({
			TestWindowStart: new FormControl<Date | null | undefined>(undefined),
			TestWindowEnd: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePredictorRequest {

		/** Required */
		PredictorArn: string;
	}
	export interface DescribePredictorRequestFormProperties {

		/** Required */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribePredictorRequestFormGroup() {
		return new FormGroup<DescribePredictorRequestFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePredictorBacktestExportJobResponse {
		PredictorBacktestExportJobArn?: string;
		PredictorBacktestExportJobName?: string;
		PredictorArn?: string;

		/** The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). */
		Destination?: DataDestination;
		Message?: string;
		Status?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		Format?: string;
	}
	export interface DescribePredictorBacktestExportJobResponseFormProperties {
		PredictorBacktestExportJobArn: FormControl<string | null | undefined>,
		PredictorBacktestExportJobName: FormControl<string | null | undefined>,
		PredictorArn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateDescribePredictorBacktestExportJobResponseFormGroup() {
		return new FormGroup<DescribePredictorBacktestExportJobResponseFormProperties>({
			PredictorBacktestExportJobArn: new FormControl<string | null | undefined>(undefined),
			PredictorBacktestExportJobName: new FormControl<string | null | undefined>(undefined),
			PredictorArn: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePredictorBacktestExportJobRequest {

		/** Required */
		PredictorBacktestExportJobArn: string;
	}
	export interface DescribePredictorBacktestExportJobRequestFormProperties {

		/** Required */
		PredictorBacktestExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribePredictorBacktestExportJobRequestFormGroup() {
		return new FormGroup<DescribePredictorBacktestExportJobRequestFormProperties>({
			PredictorBacktestExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWhatIfAnalysisResponse {
		WhatIfAnalysisName?: string;
		WhatIfAnalysisArn?: string;
		ForecastArn?: string;
		EstimatedTimeRemainingInMinutes?: number | null;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;

		/** <p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p> <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p> <ul> <li> <p> <code>DataSource</code> </p> </li> <li> <p> <code>Format</code> </p> </li> <li> <p> <code>Schema</code> </p> </li> </ul> */
		TimeSeriesSelector?: TimeSeriesSelector;
	}
	export interface DescribeWhatIfAnalysisResponseFormProperties {
		WhatIfAnalysisName: FormControl<string | null | undefined>,
		WhatIfAnalysisArn: FormControl<string | null | undefined>,
		ForecastArn: FormControl<string | null | undefined>,
		EstimatedTimeRemainingInMinutes: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeWhatIfAnalysisResponseFormGroup() {
		return new FormGroup<DescribeWhatIfAnalysisResponseFormProperties>({
			WhatIfAnalysisName: new FormControl<string | null | undefined>(undefined),
			WhatIfAnalysisArn: new FormControl<string | null | undefined>(undefined),
			ForecastArn: new FormControl<string | null | undefined>(undefined),
			EstimatedTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeWhatIfAnalysisRequest {

		/** Required */
		WhatIfAnalysisArn: string;
	}
	export interface DescribeWhatIfAnalysisRequestFormProperties {

		/** Required */
		WhatIfAnalysisArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWhatIfAnalysisRequestFormGroup() {
		return new FormGroup<DescribeWhatIfAnalysisRequestFormProperties>({
			WhatIfAnalysisArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWhatIfForecastResponse {
		WhatIfForecastName?: string;
		WhatIfForecastArn?: string;
		WhatIfAnalysisArn?: string;
		EstimatedTimeRemainingInMinutes?: number | null;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		TimeSeriesTransformations?: Array<TimeSeriesTransformation>;
		TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;
		ForecastTypes?: Array<string>;
	}
	export interface DescribeWhatIfForecastResponseFormProperties {
		WhatIfForecastName: FormControl<string | null | undefined>,
		WhatIfForecastArn: FormControl<string | null | undefined>,
		WhatIfAnalysisArn: FormControl<string | null | undefined>,
		EstimatedTimeRemainingInMinutes: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeWhatIfForecastResponseFormGroup() {
		return new FormGroup<DescribeWhatIfForecastResponseFormProperties>({
			WhatIfForecastName: new FormControl<string | null | undefined>(undefined),
			WhatIfForecastArn: new FormControl<string | null | undefined>(undefined),
			WhatIfAnalysisArn: new FormControl<string | null | undefined>(undefined),
			EstimatedTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeWhatIfForecastRequest {

		/** Required */
		WhatIfForecastArn: string;
	}
	export interface DescribeWhatIfForecastRequestFormProperties {

		/** Required */
		WhatIfForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWhatIfForecastRequestFormGroup() {
		return new FormGroup<DescribeWhatIfForecastRequestFormProperties>({
			WhatIfForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWhatIfForecastExportResponse {
		WhatIfForecastExportArn?: string;
		WhatIfForecastExportName?: string;
		WhatIfForecastArns?: Array<string>;

		/** The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). */
		Destination?: DataDestination;
		Message?: string;
		Status?: string;
		CreationTime?: Date;
		EstimatedTimeRemainingInMinutes?: number | null;
		LastModificationTime?: Date;
		Format?: string;
	}
	export interface DescribeWhatIfForecastExportResponseFormProperties {
		WhatIfForecastExportArn: FormControl<string | null | undefined>,
		WhatIfForecastExportName: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		EstimatedTimeRemainingInMinutes: FormControl<number | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		Format: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWhatIfForecastExportResponseFormGroup() {
		return new FormGroup<DescribeWhatIfForecastExportResponseFormProperties>({
			WhatIfForecastExportArn: new FormControl<string | null | undefined>(undefined),
			WhatIfForecastExportName: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			EstimatedTimeRemainingInMinutes: new FormControl<number | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWhatIfForecastExportRequest {

		/** Required */
		WhatIfForecastExportArn: string;
	}
	export interface DescribeWhatIfForecastExportRequestFormProperties {

		/** Required */
		WhatIfForecastExportArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWhatIfForecastExportRequestFormGroup() {
		return new FormGroup<DescribeWhatIfForecastExportRequestFormProperties>({
			WhatIfForecastExportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccuracyMetricsResponse {
		PredictorEvaluationResults?: Array<EvaluationResult>;
		IsAutoPredictor?: boolean | null;
		AutoMLOverrideStrategy?: AutoMLOverrideStrategy;
		OptimizationMetric?: OptimizationMetric;
	}
	export interface GetAccuracyMetricsResponseFormProperties {
		IsAutoPredictor: FormControl<boolean | null | undefined>,
		AutoMLOverrideStrategy: FormControl<AutoMLOverrideStrategy | null | undefined>,
		OptimizationMetric: FormControl<OptimizationMetric | null | undefined>,
	}
	export function CreateGetAccuracyMetricsResponseFormGroup() {
		return new FormGroup<GetAccuracyMetricsResponseFormProperties>({
			IsAutoPredictor: new FormControl<boolean | null | undefined>(undefined),
			AutoMLOverrideStrategy: new FormControl<AutoMLOverrideStrategy | null | undefined>(undefined),
			OptimizationMetric: new FormControl<OptimizationMetric | null | undefined>(undefined),
		});

	}


	/** The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response. */
	export interface EvaluationResult {
		AlgorithmArn?: string;
		TestWindows?: Array<WindowSummary>;
	}

	/** The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response. */
	export interface EvaluationResultFormProperties {
		AlgorithmArn: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationResultFormGroup() {
		return new FormGroup<EvaluationResultFormProperties>({
			AlgorithmArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p> */
	export interface WindowSummary {
		TestWindowStart?: Date;
		TestWindowEnd?: Date;
		ItemCount?: number | null;
		EvaluationType?: EvaluationType;
		Metrics?: Metrics;
	}

	/** <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p> */
	export interface WindowSummaryFormProperties {
		TestWindowStart: FormControl<Date | null | undefined>,
		TestWindowEnd: FormControl<Date | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		EvaluationType: FormControl<EvaluationType | null | undefined>,
	}
	export function CreateWindowSummaryFormGroup() {
		return new FormGroup<WindowSummaryFormProperties>({
			TestWindowStart: new FormControl<Date | null | undefined>(undefined),
			TestWindowEnd: new FormControl<Date | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			EvaluationType: new FormControl<EvaluationType | null | undefined>(undefined),
		});

	}

	export enum EvaluationType { SUMMARY = 0, COMPUTED = 1 }


	/** Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object. */
	export interface Metrics {
		RMSE?: number | null;
		WeightedQuantileLosses?: Array<WeightedQuantileLoss>;
		ErrorMetrics?: Array<ErrorMetric>;
		AverageWeightedQuantileLoss?: number | null;
	}

	/** Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object. */
	export interface MetricsFormProperties {
		RMSE: FormControl<number | null | undefined>,
		AverageWeightedQuantileLoss: FormControl<number | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			RMSE: new FormControl<number | null | undefined>(undefined),
			AverageWeightedQuantileLoss: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object. */
	export interface WeightedQuantileLoss {
		Quantile?: number | null;
		LossValue?: number | null;
	}

	/** The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object. */
	export interface WeightedQuantileLossFormProperties {
		Quantile: FormControl<number | null | undefined>,
		LossValue: FormControl<number | null | undefined>,
	}
	export function CreateWeightedQuantileLossFormGroup() {
		return new FormGroup<WeightedQuantileLossFormProperties>({
			Quantile: new FormControl<number | null | undefined>(undefined),
			LossValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object.  */
	export interface ErrorMetric {
		ForecastType?: string;
		WAPE?: number | null;
		RMSE?: number | null;
		MASE?: number | null;
		MAPE?: number | null;
	}

	/**  Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object.  */
	export interface ErrorMetricFormProperties {
		ForecastType: FormControl<string | null | undefined>,
		WAPE: FormControl<number | null | undefined>,
		RMSE: FormControl<number | null | undefined>,
		MASE: FormControl<number | null | undefined>,
		MAPE: FormControl<number | null | undefined>,
	}
	export function CreateErrorMetricFormGroup() {
		return new FormGroup<ErrorMetricFormProperties>({
			ForecastType: new FormControl<string | null | undefined>(undefined),
			WAPE: new FormControl<number | null | undefined>(undefined),
			RMSE: new FormControl<number | null | undefined>(undefined),
			MASE: new FormControl<number | null | undefined>(undefined),
			MAPE: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAccuracyMetricsRequest {

		/** Required */
		PredictorArn: string;
	}
	export interface GetAccuracyMetricsRequestFormProperties {

		/** Required */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAccuracyMetricsRequestFormGroup() {
		return new FormGroup<GetAccuracyMetricsRequestFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDatasetGroupsResponse {
		DatasetGroups?: Array<DatasetGroupSummary>;
		NextToken?: string;
	}
	export interface ListDatasetGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetGroupsResponseFormGroup() {
		return new FormGroup<ListDatasetGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the dataset group properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>. */
	export interface DatasetGroupSummary {
		DatasetGroupArn?: string;
		DatasetGroupName?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the dataset group properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>. */
	export interface DatasetGroupSummaryFormProperties {
		DatasetGroupArn: FormControl<string | null | undefined>,
		DatasetGroupName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetGroupSummaryFormGroup() {
		return new FormGroup<DatasetGroupSummaryFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined),
			DatasetGroupName: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetGroupsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatasetGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetGroupsRequestFormGroup() {
		return new FormGroup<ListDatasetGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListDatasetImportJobsResponse {
		DatasetImportJobs?: Array<DatasetImportJobSummary>;
		NextToken?: string;
	}
	export interface ListDatasetImportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetImportJobsResponseFormGroup() {
		return new FormGroup<ListDatasetImportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the dataset import job properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>. */
	export interface DatasetImportJobSummary {
		DatasetImportJobArn?: string;
		DatasetImportJobName?: string;
		DataSource?: DataSource;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
		ImportMode?: ImportMode;
	}

	/** Provides a summary of the dataset import job properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>. */
	export interface DatasetImportJobSummaryFormProperties {
		DatasetImportJobArn: FormControl<string | null | undefined>,
		DatasetImportJobName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
		ImportMode: FormControl<ImportMode | null | undefined>,
	}
	export function CreateDatasetImportJobSummaryFormGroup() {
		return new FormGroup<DatasetImportJobSummaryFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined),
			DatasetImportJobName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
			ImportMode: new FormControl<ImportMode | null | undefined>(undefined),
		});

	}

	export interface ListDatasetImportJobsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListDatasetImportJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetImportJobsRequestFormGroup() {
		return new FormGroup<ListDatasetImportJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value. */
	export interface Filter {

		/** Required */
		Key: string;

		/** Required */
		Value: string;

		/** Required */
		Condition: FilterConditionString;
	}

	/** Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value. */
	export interface FilterFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Condition: FormControl<FilterConditionString | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Condition: new FormControl<FilterConditionString | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterConditionString { IS = 0, IS_NOT = 1 }

	export interface ListDatasetsResponse {
		Datasets?: Array<DatasetSummary>;
		NextToken?: string;
	}
	export interface ListDatasetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the dataset properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation, and provide the <code>DatasetArn</code>. */
	export interface DatasetSummary {
		DatasetArn?: string;
		DatasetName?: string;
		DatasetType?: DatasetType;
		Domain?: Domain;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the dataset properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation, and provide the <code>DatasetArn</code>. */
	export interface DatasetSummaryFormProperties {
		DatasetArn: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		DatasetType: FormControl<DatasetType | null | undefined>,
		Domain: FormControl<Domain | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetSummaryFormGroup() {
		return new FormGroup<DatasetSummaryFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetType: new FormControl<DatasetType | null | undefined>(undefined),
			Domain: new FormControl<Domain | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatasetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListExplainabilitiesResponse {
		Explainabilities?: Array<ExplainabilitySummary>;
		NextToken?: string;
	}
	export interface ListExplainabilitiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExplainabilitiesResponseFormGroup() {
		return new FormGroup<ListExplainabilitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the Explainability properties used in the <a>ListExplainabilities</a> operation. To get a complete set of properties, call the <a>DescribeExplainability</a> operation, and provide the listed <code>ExplainabilityArn</code>. */
	export interface ExplainabilitySummary {
		ExplainabilityArn?: string;
		ExplainabilityName?: string;
		ResourceArn?: string;
		ExplainabilityConfig?: ExplainabilityConfig;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the Explainability properties used in the <a>ListExplainabilities</a> operation. To get a complete set of properties, call the <a>DescribeExplainability</a> operation, and provide the listed <code>ExplainabilityArn</code>. */
	export interface ExplainabilitySummaryFormProperties {
		ExplainabilityArn: FormControl<string | null | undefined>,
		ExplainabilityName: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateExplainabilitySummaryFormGroup() {
		return new FormGroup<ExplainabilitySummaryFormProperties>({
			ExplainabilityArn: new FormControl<string | null | undefined>(undefined),
			ExplainabilityName: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListExplainabilitiesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListExplainabilitiesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListExplainabilitiesRequestFormGroup() {
		return new FormGroup<ListExplainabilitiesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListExplainabilityExportsResponse {
		ExplainabilityExports?: Array<ExplainabilityExportSummary>;
		NextToken?: string;
	}
	export interface ListExplainabilityExportsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExplainabilityExportsResponseFormGroup() {
		return new FormGroup<ListExplainabilityExportsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the Explainability export properties used in the <a>ListExplainabilityExports</a> operation. To get a complete set of properties, call the <a>DescribeExplainabilityExport</a> operation, and provide the <code>ExplainabilityExportArn</code>. */
	export interface ExplainabilityExportSummary {
		ExplainabilityExportArn?: string;
		ExplainabilityExportName?: string;

		/** The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). */
		Destination?: DataDestination;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the Explainability export properties used in the <a>ListExplainabilityExports</a> operation. To get a complete set of properties, call the <a>DescribeExplainabilityExport</a> operation, and provide the <code>ExplainabilityExportArn</code>. */
	export interface ExplainabilityExportSummaryFormProperties {
		ExplainabilityExportArn: FormControl<string | null | undefined>,
		ExplainabilityExportName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateExplainabilityExportSummaryFormGroup() {
		return new FormGroup<ExplainabilityExportSummaryFormProperties>({
			ExplainabilityExportArn: new FormControl<string | null | undefined>(undefined),
			ExplainabilityExportName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListExplainabilityExportsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListExplainabilityExportsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListExplainabilityExportsRequestFormGroup() {
		return new FormGroup<ListExplainabilityExportsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListForecastExportJobsResponse {
		ForecastExportJobs?: Array<ForecastExportJobSummary>;
		NextToken?: string;
	}
	export interface ListForecastExportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListForecastExportJobsResponseFormGroup() {
		return new FormGroup<ListForecastExportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>. */
	export interface ForecastExportJobSummary {
		ForecastExportJobArn?: string;
		ForecastExportJobName?: string;
		Destination?: DataDestination;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>. */
	export interface ForecastExportJobSummaryFormProperties {
		ForecastExportJobArn: FormControl<string | null | undefined>,
		ForecastExportJobName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateForecastExportJobSummaryFormGroup() {
		return new FormGroup<ForecastExportJobSummaryFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined),
			ForecastExportJobName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListForecastExportJobsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListForecastExportJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListForecastExportJobsRequestFormGroup() {
		return new FormGroup<ListForecastExportJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListForecastsResponse {
		Forecasts?: Array<ForecastSummary>;
		NextToken?: string;
	}
	export interface ListForecastsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListForecastsResponseFormGroup() {
		return new FormGroup<ListForecastsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary. */
	export interface ForecastSummary {
		ForecastArn?: string;
		ForecastName?: string;
		PredictorArn?: string;
		CreatedUsingAutoPredictor?: boolean | null;
		DatasetGroupArn?: string;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary. */
	export interface ForecastSummaryFormProperties {
		ForecastArn: FormControl<string | null | undefined>,
		ForecastName: FormControl<string | null | undefined>,
		PredictorArn: FormControl<string | null | undefined>,
		CreatedUsingAutoPredictor: FormControl<boolean | null | undefined>,
		DatasetGroupArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateForecastSummaryFormGroup() {
		return new FormGroup<ForecastSummaryFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined),
			ForecastName: new FormControl<string | null | undefined>(undefined),
			PredictorArn: new FormControl<string | null | undefined>(undefined),
			CreatedUsingAutoPredictor: new FormControl<boolean | null | undefined>(undefined),
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListForecastsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListForecastsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListForecastsRequestFormGroup() {
		return new FormGroup<ListForecastsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMonitorEvaluationsResponse {
		NextToken?: string;
		PredictorMonitorEvaluations?: Array<PredictorMonitorEvaluation>;
	}
	export interface ListMonitorEvaluationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitorEvaluationsResponseFormGroup() {
		return new FormGroup<ListMonitorEvaluationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the results of a monitor evaluation. */
	export interface PredictorMonitorEvaluation {
		ResourceArn?: string;
		MonitorArn?: string;
		EvaluationTime?: Date;
		EvaluationState?: string;
		WindowStartDatetime?: Date;
		WindowEndDatetime?: Date;
		PredictorEvent?: PredictorEvent;
		MonitorDataSource?: MonitorDataSource;
		MetricResults?: Array<MetricResult>;
		NumItemsEvaluated?: number | null;
		Message?: string;
	}

	/** Describes the results of a monitor evaluation. */
	export interface PredictorMonitorEvaluationFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		MonitorArn: FormControl<string | null | undefined>,
		EvaluationTime: FormControl<Date | null | undefined>,
		EvaluationState: FormControl<string | null | undefined>,
		WindowStartDatetime: FormControl<Date | null | undefined>,
		WindowEndDatetime: FormControl<Date | null | undefined>,
		NumItemsEvaluated: FormControl<number | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreatePredictorMonitorEvaluationFormGroup() {
		return new FormGroup<PredictorMonitorEvaluationFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			MonitorArn: new FormControl<string | null | undefined>(undefined),
			EvaluationTime: new FormControl<Date | null | undefined>(undefined),
			EvaluationState: new FormControl<string | null | undefined>(undefined),
			WindowStartDatetime: new FormControl<Date | null | undefined>(undefined),
			WindowEndDatetime: new FormControl<Date | null | undefined>(undefined),
			NumItemsEvaluated: new FormControl<number | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details about a predictor event, such as a retraining. */
	export interface PredictorEvent {
		Detail?: string;
		Datetime?: Date;
	}

	/** Provides details about a predictor event, such as a retraining. */
	export interface PredictorEventFormProperties {
		Detail: FormControl<string | null | undefined>,
		Datetime: FormControl<Date | null | undefined>,
	}
	export function CreatePredictorEventFormGroup() {
		return new FormGroup<PredictorEventFormProperties>({
			Detail: new FormControl<string | null | undefined>(undefined),
			Datetime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The source of the data the monitor used during the evaluation. */
	export interface MonitorDataSource {
		DatasetImportJobArn?: string;
		ForecastArn?: string;
		PredictorArn?: string;
	}

	/** The source of the data the monitor used during the evaluation. */
	export interface MonitorDataSourceFormProperties {
		DatasetImportJobArn: FormControl<string | null | undefined>,
		ForecastArn: FormControl<string | null | undefined>,
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateMonitorDataSourceFormGroup() {
		return new FormGroup<MonitorDataSourceFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined),
			ForecastArn: new FormControl<string | null | undefined>(undefined),
			PredictorArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An individual metric Forecast calculated when monitoring predictor usage. You can compare the value for this metric to the metric's value in the <a>Baseline</a> to see how your predictor's performance is changing.</p> <p>For more information about metrics generated by Forecast see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Evaluating Predictor Accuracy</a> </p> */
	export interface MetricResult {
		MetricName?: string;
		MetricValue?: number | null;
	}

	/** <p>An individual metric Forecast calculated when monitoring predictor usage. You can compare the value for this metric to the metric's value in the <a>Baseline</a> to see how your predictor's performance is changing.</p> <p>For more information about metrics generated by Forecast see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Evaluating Predictor Accuracy</a> </p> */
	export interface MetricResultFormProperties {
		MetricName: FormControl<string | null | undefined>,
		MetricValue: FormControl<number | null | undefined>,
	}
	export function CreateMetricResultFormGroup() {
		return new FormGroup<MetricResultFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			MetricValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMonitorEvaluationsRequest {
		NextToken?: string;
		MaxResults?: number | null;

		/** Required */
		MonitorArn: string;
		Filters?: Array<Filter>;
	}
	export interface ListMonitorEvaluationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		MonitorArn: FormControl<string | null | undefined>,
	}
	export function CreateListMonitorEvaluationsRequestFormGroup() {
		return new FormGroup<ListMonitorEvaluationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			MonitorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListMonitorsResponse {
		Monitors?: Array<MonitorSummary>;
		NextToken?: string;
	}
	export interface ListMonitorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitorsResponseFormGroup() {
		return new FormGroup<ListMonitorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the monitor properties used in the <a>ListMonitors</a> operation. To get a complete set of properties, call the <a>DescribeMonitor</a> operation, and provide the listed <code>MonitorArn</code>. */
	export interface MonitorSummary {
		MonitorArn?: string;
		MonitorName?: string;
		ResourceArn?: string;
		Status?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the monitor properties used in the <a>ListMonitors</a> operation. To get a complete set of properties, call the <a>DescribeMonitor</a> operation, and provide the listed <code>MonitorArn</code>. */
	export interface MonitorSummaryFormProperties {
		MonitorArn: FormControl<string | null | undefined>,
		MonitorName: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateMonitorSummaryFormGroup() {
		return new FormGroup<MonitorSummaryFormProperties>({
			MonitorArn: new FormControl<string | null | undefined>(undefined),
			MonitorName: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMonitorsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListMonitorsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMonitorsRequestFormGroup() {
		return new FormGroup<ListMonitorsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPredictorBacktestExportJobsResponse {
		PredictorBacktestExportJobs?: Array<PredictorBacktestExportJobSummary>;
		NextToken?: string;
	}
	export interface ListPredictorBacktestExportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPredictorBacktestExportJobsResponseFormGroup() {
		return new FormGroup<ListPredictorBacktestExportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>. */
	export interface PredictorBacktestExportJobSummary {
		PredictorBacktestExportJobArn?: string;
		PredictorBacktestExportJobName?: string;

		/** The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional). */
		Destination?: DataDestination;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>. */
	export interface PredictorBacktestExportJobSummaryFormProperties {
		PredictorBacktestExportJobArn: FormControl<string | null | undefined>,
		PredictorBacktestExportJobName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreatePredictorBacktestExportJobSummaryFormGroup() {
		return new FormGroup<PredictorBacktestExportJobSummaryFormProperties>({
			PredictorBacktestExportJobArn: new FormControl<string | null | undefined>(undefined),
			PredictorBacktestExportJobName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPredictorBacktestExportJobsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListPredictorBacktestExportJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPredictorBacktestExportJobsRequestFormGroup() {
		return new FormGroup<ListPredictorBacktestExportJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPredictorsResponse {
		Predictors?: Array<PredictorSummary>;
		NextToken?: string;
	}
	export interface ListPredictorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPredictorsResponseFormGroup() {
		return new FormGroup<ListPredictorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>. */
	export interface PredictorSummary {
		PredictorArn?: string;
		PredictorName?: string;
		DatasetGroupArn?: string;
		IsAutoPredictor?: boolean | null;
		ReferencePredictorSummary?: ReferencePredictorSummary;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>. */
	export interface PredictorSummaryFormProperties {
		PredictorArn: FormControl<string | null | undefined>,
		PredictorName: FormControl<string | null | undefined>,
		DatasetGroupArn: FormControl<string | null | undefined>,
		IsAutoPredictor: FormControl<boolean | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreatePredictorSummaryFormGroup() {
		return new FormGroup<PredictorSummaryFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined),
			PredictorName: new FormControl<string | null | undefined>(undefined),
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined),
			IsAutoPredictor: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPredictorsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListPredictorsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPredictorsRequestFormGroup() {
		return new FormGroup<ListPredictorsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
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

	export interface ListWhatIfAnalysesResponse {
		WhatIfAnalyses?: Array<WhatIfAnalysisSummary>;
		NextToken?: string;
	}
	export interface ListWhatIfAnalysesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWhatIfAnalysesResponseFormGroup() {
		return new FormGroup<ListWhatIfAnalysesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the what-if analysis properties used in the <a>ListWhatIfAnalyses</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfAnalysis</a> operation, and provide the <code>WhatIfAnalysisArn</code> that is listed in the summary. */
	export interface WhatIfAnalysisSummary {
		WhatIfAnalysisArn?: string;
		WhatIfAnalysisName?: string;
		ForecastArn?: string;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the what-if analysis properties used in the <a>ListWhatIfAnalyses</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfAnalysis</a> operation, and provide the <code>WhatIfAnalysisArn</code> that is listed in the summary. */
	export interface WhatIfAnalysisSummaryFormProperties {
		WhatIfAnalysisArn: FormControl<string | null | undefined>,
		WhatIfAnalysisName: FormControl<string | null | undefined>,
		ForecastArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateWhatIfAnalysisSummaryFormGroup() {
		return new FormGroup<WhatIfAnalysisSummaryFormProperties>({
			WhatIfAnalysisArn: new FormControl<string | null | undefined>(undefined),
			WhatIfAnalysisName: new FormControl<string | null | undefined>(undefined),
			ForecastArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListWhatIfAnalysesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListWhatIfAnalysesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWhatIfAnalysesRequestFormGroup() {
		return new FormGroup<ListWhatIfAnalysesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWhatIfForecastExportsResponse {
		WhatIfForecastExports?: Array<WhatIfForecastExportSummary>;
		NextToken?: string;
	}
	export interface ListWhatIfForecastExportsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWhatIfForecastExportsResponseFormGroup() {
		return new FormGroup<ListWhatIfForecastExportsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the what-if forecast export properties used in the <a>ListWhatIfForecastExports</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecastExport</a> operation, and provide the <code>WhatIfForecastExportArn</code> that is listed in the summary. */
	export interface WhatIfForecastExportSummary {
		WhatIfForecastExportArn?: string;
		WhatIfForecastArns?: Array<string>;
		WhatIfForecastExportName?: string;
		Destination?: DataDestination;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the what-if forecast export properties used in the <a>ListWhatIfForecastExports</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecastExport</a> operation, and provide the <code>WhatIfForecastExportArn</code> that is listed in the summary. */
	export interface WhatIfForecastExportSummaryFormProperties {
		WhatIfForecastExportArn: FormControl<string | null | undefined>,
		WhatIfForecastExportName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateWhatIfForecastExportSummaryFormGroup() {
		return new FormGroup<WhatIfForecastExportSummaryFormProperties>({
			WhatIfForecastExportArn: new FormControl<string | null | undefined>(undefined),
			WhatIfForecastExportName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListWhatIfForecastExportsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListWhatIfForecastExportsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWhatIfForecastExportsRequestFormGroup() {
		return new FormGroup<ListWhatIfForecastExportsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWhatIfForecastsResponse {
		WhatIfForecasts?: Array<WhatIfForecastSummary>;
		NextToken?: string;
	}
	export interface ListWhatIfForecastsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWhatIfForecastsResponseFormGroup() {
		return new FormGroup<ListWhatIfForecastsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the what-if forecast properties used in the <a>ListWhatIfForecasts</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecast</a> operation, and provide the <code>WhatIfForecastArn</code> that is listed in the summary. */
	export interface WhatIfForecastSummary {
		WhatIfForecastArn?: string;
		WhatIfForecastName?: string;
		WhatIfAnalysisArn?: string;
		Status?: string;
		Message?: string;
		CreationTime?: Date;
		LastModificationTime?: Date;
	}

	/** Provides a summary of the what-if forecast properties used in the <a>ListWhatIfForecasts</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecast</a> operation, and provide the <code>WhatIfForecastArn</code> that is listed in the summary. */
	export interface WhatIfForecastSummaryFormProperties {
		WhatIfForecastArn: FormControl<string | null | undefined>,
		WhatIfForecastName: FormControl<string | null | undefined>,
		WhatIfAnalysisArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateWhatIfForecastSummaryFormGroup() {
		return new FormGroup<WhatIfForecastSummaryFormProperties>({
			WhatIfForecastArn: new FormControl<string | null | undefined>(undefined),
			WhatIfForecastName: new FormControl<string | null | undefined>(undefined),
			WhatIfAnalysisArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListWhatIfForecastsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListWhatIfForecastsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWhatIfForecastsRequestFormGroup() {
		return new FormGroup<ListWhatIfForecastsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResumeResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ResumeResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateResumeResourceRequestFormGroup() {
		return new FormGroup<ResumeResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface StopResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateStopResourceRequestFormGroup() {
		return new FormGroup<StopResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		Tags: Array<Tag>;
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

	export interface UpdateDatasetGroupResponse {
	}
	export interface UpdateDatasetGroupResponseFormProperties {
	}
	export function CreateUpdateDatasetGroupResponseFormGroup() {
		return new FormGroup<UpdateDatasetGroupResponseFormProperties>({
		});

	}

	export interface UpdateDatasetGroupRequest {

		/** Required */
		DatasetGroupArn: string;

		/** Required */
		DatasetArns: Array<string>;
	}
	export interface UpdateDatasetGroupRequestFormProperties {

		/** Required */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetGroupRequestFormGroup() {
		return new FormGroup<UpdateDatasetGroupRequestFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TimePointGranularity { ALL = 0, SPECIFIC = 1 }


	/** Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. */
	export interface Statistics {
		Count?: number | null;
		CountDistinct?: number | null;
		CountNull?: number | null;
		CountNan?: number | null;
		Min?: string;
		Max?: string;
		Avg?: number | null;
		Stddev?: number | null;
		CountLong?: number | null;
		CountDistinctLong?: number | null;
		CountNullLong?: number | null;
		CountNanLong?: number | null;
	}

	/** Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. */
	export interface StatisticsFormProperties {
		Count: FormControl<number | null | undefined>,
		CountDistinct: FormControl<number | null | undefined>,
		CountNull: FormControl<number | null | undefined>,
		CountNan: FormControl<number | null | undefined>,
		Min: FormControl<string | null | undefined>,
		Max: FormControl<string | null | undefined>,
		Avg: FormControl<number | null | undefined>,
		Stddev: FormControl<number | null | undefined>,
		CountLong: FormControl<number | null | undefined>,
		CountDistinctLong: FormControl<number | null | undefined>,
		CountNullLong: FormControl<number | null | undefined>,
		CountNanLong: FormControl<number | null | undefined>,
	}
	export function CreateStatisticsFormGroup() {
		return new FormGroup<StatisticsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			CountDistinct: new FormControl<number | null | undefined>(undefined),
			CountNull: new FormControl<number | null | undefined>(undefined),
			CountNan: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<string | null | undefined>(undefined),
			Max: new FormControl<string | null | undefined>(undefined),
			Avg: new FormControl<number | null | undefined>(undefined),
			Stddev: new FormControl<number | null | undefined>(undefined),
			CountLong: new FormControl<number | null | undefined>(undefined),
			CountDistinctLong: new FormControl<number | null | undefined>(undefined),
			CountNullLong: new FormControl<number | null | undefined>(undefined),
			CountNanLong: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an Amazon Forecast predictor.</p> <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain existing predictors.</p> <p> <b>Creating new predictors</b> </p> <p>The following parameters are required when creating a new predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the predictor.</p> </li> <li> <p> <code>ForecastFrequency</code> - The granularity of your forecasts (hourly, daily, weekly, etc).</p> </li> <li> <p> <code>ForecastHorizon</code> - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.</p> </li> </ul> <p>When creating a new predictor, do not specify a value for <code>ReferencePredictorArn</code>.</p> <p> <b>Upgrading and retraining predictors</b> </p> <p>The following parameters are required when retraining or upgrading a predictor:</p> <ul> <li> <p> <code>PredictorName</code> - A unique name for the predictor.</p> </li> <li> <p> <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or upgrade.</p> </li> </ul> <p>When upgrading or retraining a predictor, only specify values for the <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>
		 * Post #X-Amz-Target=AmazonForecast.CreateAutoPredictor
		 * @return {CreateAutoPredictorResponse} Success
		 */
		CreateAutoPredictor(requestBody: CreateAutoPredictorRequest): Observable<CreateAutoPredictorResponse> {
			return this.http.post<CreateAutoPredictorResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateAutoPredictor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p> <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get the status.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateDataset
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetRequest): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p> <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateDatasetGroup
		 * @return {CreateDatasetGroupResponse} Success
		 */
		CreateDatasetGroup(requestBody: CreateDatasetGroupRequest): Observable<CreateDatasetGroupResponse> {
			return this.http.post<CreateDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up permissions</a>.</p> <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>
		 * Post #X-Amz-Target=AmazonForecast.CreateDatasetImportJob
		 * @return {CreateDatasetImportJobResponse} Success
		 */
		CreateDatasetImportJob(requestBody: CreateDatasetImportJobRequest): Observable<CreateDatasetImportJobResponse> {
			return this.http.post<CreateDatasetImportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (<a>CreateAutoPredictor</a>)</p> </note> <p>Creates an Amazon Forecast Explainability.</p> <p>Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values.</p> <p>To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index.</p> <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN.</p> <p> <b>CreateExplainability with a Predictor ARN</b> </p> <note> <p>You can only have one Explainability resource per predictor. If you already enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that predictor already has an Explainability resource.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the predictor.</p> </li> <li> <p> <code>TimePointGranularity</code> - Must be set to “ALL”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p> </li> </ul> <p>Do not specify a value for the following parameters:</p> <ul> <li> <p> <code>DataSource</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>Schema</code> - Only valid when TimeSeriesGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>StartDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> <li> <p> <code>EndDateTime</code> - Only valid when TimePointGranularity is “SPECIFIC”.</p> </li> </ul> <p> <b>CreateExplainability with a Forecast ARN</b> </p> <note> <p>You can specify a maximum of 50 time series and 500 time points.</p> </note> <p>The following parameters are required when providing a Predictor ARN:</p> <ul> <li> <p> <code>ExplainabilityName</code> - A unique name for the Explainability.</p> </li> <li> <p> <code>ResourceArn</code> - The Arn of the forecast.</p> </li> <li> <p> <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> <li> <p> <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p> </li> </ul> <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>DataSource</code> - The S3 location of the CSV file specifying your time series.</p> </li> <li> <p> <code>Schema</code> - The Schema defines the attributes and attribute types listed in the Data Source.</p> </li> </ul> <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the following:</p> <ul> <li> <p> <code>StartDateTime</code> - The first timestamp in the range of time points.</p> </li> <li> <p> <code>EndDateTime</code> - The last timestamp in the range of time points.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.CreateExplainability
		 * @return {CreateExplainabilityResponse} Success
		 */
		CreateExplainability(requestBody: CreateExplainabilityRequest): Observable<CreateExplainabilityResponse> {
			return this.http.post<CreateExplainabilityResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateExplainability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket.</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateExplainabilityExport
		 * @return {CreateExplainabilityExportResponse} Success
		 */
		CreateExplainabilityExport(requestBody: CreateExplainabilityExportRequest): Observable<CreateExplainabilityExportResponse> {
			return this.http.post<CreateExplainabilityExportResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateExplainabilityExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note> <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor. However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>
		 * Post #X-Amz-Target=AmazonForecast.CreateForecast
		 * @return {CreateForecastResponse} Success
		 */
		CreateForecast(requestBody: CreateForecastRequest): Observable<CreateForecastResponse> {
			return this.http.post<CreateForecastResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateForecastExportJob
		 * @return {CreateForecastExportJobResponse} Success
		 */
		CreateForecastExportJob(requestBody: CreateForecastExportJobRequest): Observable<CreateForecastExportJobResponse> {
			return this.http.post<CreateForecastExportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateForecastExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>.
		 * Post #X-Amz-Target=AmazonForecast.CreateMonitor
		 * @return {CreateMonitorResponse} Success
		 */
		CreateMonitor(requestBody: CreateMonitorRequest): Observable<CreateMonitorResponse> {
			return this.http.post<CreateMonitorResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateMonitor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p> This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use <a>CreateAutoPredictor</a>.</p> </note> <p>Creates an Amazon Forecast predictor.</p> <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p> <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p> <p>You can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9 (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by setting the <code>ForecastTypes</code>. </p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted losses over the forecast types. By default, these are the p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreatePredictor
		 * @return {CreatePredictorResponse} Success
		 */
		CreatePredictor(requestBody: CreatePredictorRequest): Observable<CreatePredictorResponse> {
			return this.http.post<CreatePredictorResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreatePredictor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket.</p> <p> The export file names will match the following conventions:</p> <p> <code>&lt;ExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;.csv</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <note> <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob
		 * @return {CreatePredictorBacktestExportJobResponse} Success
		 */
		CreatePredictorBacktestExportJob(requestBody: CreatePredictorBacktestExportJobRequest): Observable<CreatePredictorBacktestExportJobResponse> {
			return this.http.post<CreatePredictorBacktestExportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreatePredictorBacktestExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series.</p> <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals.</p> <p>You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other.</p> <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p> <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>
		 * Post #X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis
		 * @return {CreateWhatIfAnalysisResponse} Success
		 */
		CreateWhatIfAnalysis(requestBody: CreateWhatIfAnalysisRequest): Observable<CreateWhatIfAnalysisResponse> {
			return this.http.post<CreateWhatIfAnalysisResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateWhatIfAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.
		 * Post #X-Amz-Target=AmazonForecast.CreateWhatIfForecast
		 * @return {CreateWhatIfForecastResponse} Success
		 */
		CreateWhatIfForecast(requestBody: CreateWhatIfForecastRequest): Observable<CreateWhatIfForecastResponse> {
			return this.http.post<CreateWhatIfForecastResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateWhatIfForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p> <code>≈&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PartNumber&gt;</code> </p> <p>The &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport
		 * @return {CreateWhatIfForecastExportResponse} Success
		 */
		CreateWhatIfForecastExport(requestBody: CreateWhatIfForecastExportRequest): Observable<CreateWhatIfForecastExportResponse> {
			return this.http.post<CreateWhatIfForecastExportResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateWhatIfForecastExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p> <note> <p>Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation, omitting the deleted dataset's ARN.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.DeleteDataset
		 * @return {void} Success
		 */
		DeleteDataset(requestBody: DeleteDatasetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>
		 * Post #X-Amz-Target=AmazonForecast.DeleteDatasetGroup
		 * @return {void} Success
		 */
		DeleteDatasetGroup(requestBody: DeleteDatasetGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DeleteDatasetImportJob
		 * @return {void} Success
		 */
		DeleteDatasetImportJob(requestBody: DeleteDatasetImportJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an Explainability resource.</p> <p>You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>
		 * Post #X-Amz-Target=AmazonForecast.DeleteExplainability
		 * @return {void} Success
		 */
		DeleteExplainability(requestBody: DeleteExplainabilityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteExplainability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an Explainability export.
		 * Post #X-Amz-Target=AmazonForecast.DeleteExplainabilityExport
		 * @return {void} Success
		 */
		DeleteExplainabilityExport(requestBody: DeleteExplainabilityExportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteExplainabilityExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecast</a> operation.</p> <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.</p>
		 * Post #X-Amz-Target=AmazonForecast.DeleteForecast
		 * @return {void} Success
		 */
		DeleteForecast(requestBody: DeleteForecastRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a forecast export job created using the <a>CreateForecastExportJob</a> operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DeleteForecastExportJob
		 * @return {void} Success
		 */
		DeleteForecastExportJob(requestBody: DeleteForecastExportJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteForecastExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.
		 * Post #X-Amz-Target=AmazonForecast.DeleteMonitor
		 * @return {void} Success
		 */
		DeleteMonitor(requestBody: DeleteMonitorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteMonitor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DeletePredictor
		 * @return {void} Success
		 */
		DeletePredictor(requestBody: DeletePredictorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeletePredictor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a predictor backtest export job.
		 * Post #X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob
		 * @return {void} Success
		 */
		DeletePredictorBacktestExportJob(requestBody: DeletePredictorBacktestExportJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeletePredictorBacktestExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an entire resource tree. This operation will delete the parent resource and its child resources.</p> <p>Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource.</p> <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p> <ul> <li> <p> <b>Dataset</b>: dataset import jobs</p> </li> <li> <p> <b>Dataset Group</b>: predictors, predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Predictor</b>: predictor backtest export jobs, forecasts, forecast export jobs</p> </li> <li> <p> <b>Forecast</b>: forecast export jobs</p> </li> </ul> <note> <p> <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3. </p> </note>
		 * Post #X-Amz-Target=AmazonForecast.DeleteResourceTree
		 * @return {void} Success
		 */
		DeleteResourceTree(requestBody: DeleteResourceTreeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteResourceTree', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p> <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>
		 * Post #X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis
		 * @return {void} Success
		 */
		DeleteWhatIfAnalysis(requestBody: DeleteWhatIfAnalysisRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteWhatIfAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a> operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p> <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>
		 * Post #X-Amz-Target=AmazonForecast.DeleteWhatIfForecast
		 * @return {void} Success
		 */
		DeleteWhatIfForecast(requestBody: DeleteWhatIfForecastRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteWhatIfForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport
		 * @return {void} Success
		 */
		DeleteWhatIfForecastExport(requestBody: DeleteWhatIfForecastExportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteWhatIfForecastExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a predictor created using the CreateAutoPredictor operation.
		 * Post #X-Amz-Target=AmazonForecast.DescribeAutoPredictor
		 * @return {DescribeAutoPredictorResponse} Success
		 */
		DescribeAutoPredictor(requestBody: DescribeAutoPredictorRequest): Observable<DescribeAutoPredictorResponse> {
			return this.http.post<DescribeAutoPredictorResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeAutoPredictor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeDataset
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(requestBody: DescribeDatasetRequest): Observable<DescribeDatasetResponse> {
			return this.http.post<DescribeDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeDatasetGroup
		 * @return {DescribeDatasetGroupResponse} Success
		 */
		DescribeDatasetGroup(requestBody: DescribeDatasetGroupRequest): Observable<DescribeDatasetGroupResponse> {
			return this.http.post<DescribeDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeDatasetImportJob
		 * @return {DescribeDatasetImportJobResponse} Success
		 */
		DescribeDatasetImportJob(requestBody: DescribeDatasetImportJobRequest): Observable<DescribeDatasetImportJobResponse> {
			return this.http.post<DescribeDatasetImportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an Explainability resource created using the <a>CreateExplainability</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DescribeExplainability
		 * @return {DescribeExplainabilityResponse} Success
		 */
		DescribeExplainability(requestBody: DescribeExplainabilityRequest): Observable<DescribeExplainabilityResponse> {
			return this.http.post<DescribeExplainabilityResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeExplainability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DescribeExplainabilityExport
		 * @return {DescribeExplainabilityExportResponse} Success
		 */
		DescribeExplainabilityExport(requestBody: DescribeExplainabilityExportRequest): Observable<DescribeExplainabilityExportResponse> {
			return this.http.post<DescribeExplainabilityExportResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeExplainabilityExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetGroupArn</code> - The dataset group that provided the training data.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeForecast
		 * @return {DescribeForecastResponse} Success
		 */
		DescribeForecast(requestBody: DescribeForecastRequest): Observable<DescribeForecastResponse> {
			return this.http.post<DescribeForecastResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreateForecastExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeForecastExportJob
		 * @return {DescribeForecastExportJobResponse} Success
		 */
		DescribeForecastExportJob(requestBody: DescribeForecastExportJobRequest): Observable<DescribeForecastExportJobResponse> {
			return this.http.post<DescribeForecastExportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeForecastExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p> <ul> <li> <p> <code>Baseline</code> </p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastEvaluationTime</code> </p> </li> <li> <p> <code>LastEvaluationState</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeMonitor
		 * @return {DescribeMonitorResponse} Success
		 */
		DescribeMonitor(requestBody: DescribeMonitorRequest): Observable<DescribeMonitorResponse> {
			return this.http.post<DescribeMonitorResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeMonitor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p> This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p> </note> <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribePredictor
		 * @return {DescribePredictorResponse} Success
		 */
		DescribePredictor(requestBody: DescribePredictorRequest): Observable<DescribePredictorResponse> {
			return this.http.post<DescribePredictorResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribePredictor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p> <p>In addition to listing the properties provided by the user in the <code>CreatePredictorBacktestExportJob</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> (if an error occurred)</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob
		 * @return {DescribePredictorBacktestExportJobResponse} Success
		 */
		DescribePredictorBacktestExportJob(requestBody: DescribePredictorBacktestExportJobRequest): Observable<DescribePredictorBacktestExportJobResponse> {
			return this.http.post<DescribePredictorBacktestExportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribePredictorBacktestExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis
		 * @return {DescribeWhatIfAnalysisResponse} Success
		 */
		DescribeWhatIfAnalysis(requestBody: DescribeWhatIfAnalysisRequest): Observable<DescribeWhatIfAnalysisResponse> {
			return this.http.post<DescribeWhatIfAnalysisResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeWhatIfAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeWhatIfForecast
		 * @return {DescribeWhatIfForecastResponse} Success
		 */
		DescribeWhatIfForecast(requestBody: DescribeWhatIfForecastRequest): Observable<DescribeWhatIfForecastResponse> {
			return this.http.post<DescribeWhatIfForecastResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeWhatIfForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport
		 * @return {DescribeWhatIfForecastExportResponse} Success
		 */
		DescribeWhatIfForecastExport(requestBody: DescribeWhatIfForecastExportRequest): Observable<DescribeWhatIfForecastExportResponse> {
			return this.http.post<DescribeWhatIfForecastExportResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeWhatIfForecastExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor Metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.GetAccuracyMetrics
		 * @return {GetAccuracyMetricsResponse} Success
		 */
		GetAccuracyMetrics(requestBody: GetAccuracyMetricsRequest): Observable<GetAccuracyMetricsResponse> {
			return this.http.post<GetAccuracyMetricsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.GetAccuracyMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.ListDatasetGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetGroupsResponse} Success
		 */
		ListDatasetGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetGroupsRequest): Observable<ListDatasetGroupsResponse> {
			return this.http.post<ListDatasetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListDatasetGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.
		 * Post #X-Amz-Target=AmazonForecast.ListDatasetImportJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetImportJobsResponse} Success
		 */
		ListDatasetImportJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetImportJobsRequest): Observable<ListDatasetImportJobsResponse> {
			return this.http.post<ListDatasetImportJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListDatasetImportJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.ListDatasets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetsRequest): Observable<ListDatasetsResponse> {
			return this.http.post<ListDatasetsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListDatasets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for each Explainability. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the <a>DescribeExplainability</a> operation.</p>
		 * Post #X-Amz-Target=AmazonForecast.ListExplainabilities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListExplainabilitiesResponse} Success
		 */
		ListExplainabilities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListExplainabilitiesRequest): Observable<ListExplainabilitiesResponse> {
			return this.http.post<ListExplainabilitiesResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListExplainabilities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular Explainability export, use the ARN with the <a>DescribeExplainability</a> operation.</p>
		 * Post #X-Amz-Target=AmazonForecast.ListExplainabilityExports
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListExplainabilityExportsResponse} Success
		 */
		ListExplainabilityExports(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListExplainabilityExportsRequest): Observable<ListExplainabilityExportsResponse> {
			return this.http.post<ListExplainabilityExportsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListExplainabilityExports?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a> operation. You can filter the list using an array of <a>Filter</a> objects.
		 * Post #X-Amz-Target=AmazonForecast.ListForecastExportJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListForecastExportJobsResponse} Success
		 */
		ListForecastExportJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListForecastExportJobsRequest): Observable<ListForecastExportJobsResponse> {
			return this.http.post<ListForecastExportJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListForecastExportJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of forecasts created using the <a>CreateForecast</a> operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the <a>DescribeForecast</a> operation. You can filter the list using an array of <a>Filter</a> objects.
		 * Post #X-Amz-Target=AmazonForecast.ListForecasts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListForecastsResponse} Success
		 */
		ListForecasts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListForecastsRequest): Observable<ListForecastsResponse> {
			return this.http.post<ListForecastsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListForecasts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.</p> <p>For information about monitoring see <a>predictor-monitoring</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
		 * Post #X-Amz-Target=AmazonForecast.ListMonitorEvaluations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMonitorEvaluationsResponse} Success
		 */
		ListMonitorEvaluations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMonitorEvaluationsRequest): Observable<ListMonitorEvaluationsResponse> {
			return this.http.post<ListMonitorEvaluationsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListMonitorEvaluations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.ListMonitors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMonitorsResponse} Success
		 */
		ListMonitors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMonitorsRequest): Observable<ListMonitorsResponse> {
			return this.http.post<ListMonitorsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListMonitors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p> <p>To retrieve the complete set of properties for a particular backtest export job, use the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
		 * Post #X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPredictorBacktestExportJobsResponse} Success
		 */
		ListPredictorBacktestExportJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPredictorBacktestExportJobsRequest): Observable<ListPredictorBacktestExportJobsResponse> {
			return this.http.post<ListPredictorBacktestExportJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListPredictorBacktestExportJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). </p> <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You can filter the list using an array of <a>Filter</a> objects.</p>
		 * Post #X-Amz-Target=AmazonForecast.ListPredictors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPredictorsResponse} Success
		 */
		ListPredictors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPredictorsRequest): Observable<ListPredictorsResponse> {
			return this.http.post<ListPredictorsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListPredictors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for an Amazon Forecast resource.
		 * Post #X-Amz-Target=AmazonForecast.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.ListWhatIfAnalyses
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWhatIfAnalysesResponse} Success
		 */
		ListWhatIfAnalyses(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWhatIfAnalysesRequest): Observable<ListWhatIfAnalysesResponse> {
			return this.http.post<ListWhatIfAnalysesResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListWhatIfAnalyses?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.ListWhatIfForecastExports
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWhatIfForecastExportsResponse} Success
		 */
		ListWhatIfForecastExports(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWhatIfForecastExportsRequest): Observable<ListWhatIfForecastExportsResponse> {
			return this.http.post<ListWhatIfForecastExportsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListWhatIfForecastExports?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.ListWhatIfForecasts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWhatIfForecastsResponse} Success
		 */
		ListWhatIfForecasts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWhatIfForecastsRequest): Observable<ListWhatIfForecastsResponse> {
			return this.http.post<ListWhatIfForecastsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListWhatIfForecasts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resumes a stopped monitor resource.
		 * Post #X-Amz-Target=AmazonForecast.ResumeResource
		 * @return {void} Success
		 */
		ResumeResource(requestBody: ResumeResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.ResumeResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops a resource.</p> <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been stopped.</p> <p>This operation can be applied to the following resources (and their corresponding child resources):</p> <ul> <li> <p>Dataset Import Job</p> </li> <li> <p>Predictor Job</p> </li> <li> <p>Forecast Job</p> </li> <li> <p>Forecast Export Job</p> </li> <li> <p>Predictor Backtest Export Job</p> </li> <li> <p>Explainability Job</p> </li> <li> <p>Explainability Export Job</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.StopResource
		 * @return {void} Success
		 */
		StopResource(requestBody: StopResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.StopResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
		 * Post #X-Amz-Target=AmazonForecast.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified tags from a resource.
		 * Post #X-Amz-Target=AmazonForecast.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation to get the status.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.UpdateDatasetGroup
		 * @return {UpdateDatasetGroupResponse} Success
		 */
		UpdateDatasetGroup(requestBody: UpdateDatasetGroupRequest): Observable<UpdateDatasetGroupResponse> {
			return this.http.post<UpdateDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.UpdateDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateAutoPredictorX_Amz_Target { 'AmazonForecast.CreateAutoPredictor' = 0 }

	export enum CreateDatasetX_Amz_Target { 'AmazonForecast.CreateDataset' = 0 }

	export enum CreateDatasetGroupX_Amz_Target { 'AmazonForecast.CreateDatasetGroup' = 0 }

	export enum CreateDatasetImportJobX_Amz_Target { 'AmazonForecast.CreateDatasetImportJob' = 0 }

	export enum CreateExplainabilityX_Amz_Target { 'AmazonForecast.CreateExplainability' = 0 }

	export enum CreateExplainabilityExportX_Amz_Target { 'AmazonForecast.CreateExplainabilityExport' = 0 }

	export enum CreateForecastX_Amz_Target { 'AmazonForecast.CreateForecast' = 0 }

	export enum CreateForecastExportJobX_Amz_Target { 'AmazonForecast.CreateForecastExportJob' = 0 }

	export enum CreateMonitorX_Amz_Target { 'AmazonForecast.CreateMonitor' = 0 }

	export enum CreatePredictorX_Amz_Target { 'AmazonForecast.CreatePredictor' = 0 }

	export enum CreatePredictorBacktestExportJobX_Amz_Target { 'AmazonForecast.CreatePredictorBacktestExportJob' = 0 }

	export enum CreateWhatIfAnalysisX_Amz_Target { 'AmazonForecast.CreateWhatIfAnalysis' = 0 }

	export enum CreateWhatIfForecastX_Amz_Target { 'AmazonForecast.CreateWhatIfForecast' = 0 }

	export enum CreateWhatIfForecastExportX_Amz_Target { 'AmazonForecast.CreateWhatIfForecastExport' = 0 }

	export enum DeleteDatasetX_Amz_Target { 'AmazonForecast.DeleteDataset' = 0 }

	export enum DeleteDatasetGroupX_Amz_Target { 'AmazonForecast.DeleteDatasetGroup' = 0 }

	export enum DeleteDatasetImportJobX_Amz_Target { 'AmazonForecast.DeleteDatasetImportJob' = 0 }

	export enum DeleteExplainabilityX_Amz_Target { 'AmazonForecast.DeleteExplainability' = 0 }

	export enum DeleteExplainabilityExportX_Amz_Target { 'AmazonForecast.DeleteExplainabilityExport' = 0 }

	export enum DeleteForecastX_Amz_Target { 'AmazonForecast.DeleteForecast' = 0 }

	export enum DeleteForecastExportJobX_Amz_Target { 'AmazonForecast.DeleteForecastExportJob' = 0 }

	export enum DeleteMonitorX_Amz_Target { 'AmazonForecast.DeleteMonitor' = 0 }

	export enum DeletePredictorX_Amz_Target { 'AmazonForecast.DeletePredictor' = 0 }

	export enum DeletePredictorBacktestExportJobX_Amz_Target { 'AmazonForecast.DeletePredictorBacktestExportJob' = 0 }

	export enum DeleteResourceTreeX_Amz_Target { 'AmazonForecast.DeleteResourceTree' = 0 }

	export enum DeleteWhatIfAnalysisX_Amz_Target { 'AmazonForecast.DeleteWhatIfAnalysis' = 0 }

	export enum DeleteWhatIfForecastX_Amz_Target { 'AmazonForecast.DeleteWhatIfForecast' = 0 }

	export enum DeleteWhatIfForecastExportX_Amz_Target { 'AmazonForecast.DeleteWhatIfForecastExport' = 0 }

	export enum DescribeAutoPredictorX_Amz_Target { 'AmazonForecast.DescribeAutoPredictor' = 0 }

	export enum DescribeDatasetX_Amz_Target { 'AmazonForecast.DescribeDataset' = 0 }

	export enum DescribeDatasetGroupX_Amz_Target { 'AmazonForecast.DescribeDatasetGroup' = 0 }

	export enum DescribeDatasetImportJobX_Amz_Target { 'AmazonForecast.DescribeDatasetImportJob' = 0 }

	export enum DescribeExplainabilityX_Amz_Target { 'AmazonForecast.DescribeExplainability' = 0 }

	export enum DescribeExplainabilityExportX_Amz_Target { 'AmazonForecast.DescribeExplainabilityExport' = 0 }

	export enum DescribeForecastX_Amz_Target { 'AmazonForecast.DescribeForecast' = 0 }

	export enum DescribeForecastExportJobX_Amz_Target { 'AmazonForecast.DescribeForecastExportJob' = 0 }

	export enum DescribeMonitorX_Amz_Target { 'AmazonForecast.DescribeMonitor' = 0 }

	export enum DescribePredictorX_Amz_Target { 'AmazonForecast.DescribePredictor' = 0 }

	export enum DescribePredictorBacktestExportJobX_Amz_Target { 'AmazonForecast.DescribePredictorBacktestExportJob' = 0 }

	export enum DescribeWhatIfAnalysisX_Amz_Target { 'AmazonForecast.DescribeWhatIfAnalysis' = 0 }

	export enum DescribeWhatIfForecastX_Amz_Target { 'AmazonForecast.DescribeWhatIfForecast' = 0 }

	export enum DescribeWhatIfForecastExportX_Amz_Target { 'AmazonForecast.DescribeWhatIfForecastExport' = 0 }

	export enum GetAccuracyMetricsX_Amz_Target { 'AmazonForecast.GetAccuracyMetrics' = 0 }

	export enum ListDatasetGroupsX_Amz_Target { 'AmazonForecast.ListDatasetGroups' = 0 }

	export enum ListDatasetImportJobsX_Amz_Target { 'AmazonForecast.ListDatasetImportJobs' = 0 }

	export enum ListDatasetsX_Amz_Target { 'AmazonForecast.ListDatasets' = 0 }

	export enum ListExplainabilitiesX_Amz_Target { 'AmazonForecast.ListExplainabilities' = 0 }

	export enum ListExplainabilityExportsX_Amz_Target { 'AmazonForecast.ListExplainabilityExports' = 0 }

	export enum ListForecastExportJobsX_Amz_Target { 'AmazonForecast.ListForecastExportJobs' = 0 }

	export enum ListForecastsX_Amz_Target { 'AmazonForecast.ListForecasts' = 0 }

	export enum ListMonitorEvaluationsX_Amz_Target { 'AmazonForecast.ListMonitorEvaluations' = 0 }

	export enum ListMonitorsX_Amz_Target { 'AmazonForecast.ListMonitors' = 0 }

	export enum ListPredictorBacktestExportJobsX_Amz_Target { 'AmazonForecast.ListPredictorBacktestExportJobs' = 0 }

	export enum ListPredictorsX_Amz_Target { 'AmazonForecast.ListPredictors' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AmazonForecast.ListTagsForResource' = 0 }

	export enum ListWhatIfAnalysesX_Amz_Target { 'AmazonForecast.ListWhatIfAnalyses' = 0 }

	export enum ListWhatIfForecastExportsX_Amz_Target { 'AmazonForecast.ListWhatIfForecastExports' = 0 }

	export enum ListWhatIfForecastsX_Amz_Target { 'AmazonForecast.ListWhatIfForecasts' = 0 }

	export enum ResumeResourceX_Amz_Target { 'AmazonForecast.ResumeResource' = 0 }

	export enum StopResourceX_Amz_Target { 'AmazonForecast.StopResource' = 0 }

	export enum TagResourceX_Amz_Target { 'AmazonForecast.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AmazonForecast.UntagResource' = 0 }

	export enum UpdateDatasetGroupX_Amz_Target { 'AmazonForecast.UpdateDatasetGroup' = 0 }

}

