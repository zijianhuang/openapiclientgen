import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDatasetResponse {

		/** Max length: 256 */
		DatasetArn?: string | null;
	}
	export interface CreateDatasetResponseFormProperties {

		/** Max length: 256 */
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface CreateDatasetRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetName: string;

		/** Required */
		Domain: CreateDatasetRequestDomain;

		/** Required */
		DatasetType: CreateDatasetRequestDatasetType;
		DataFrequency?: string | null;

		/**
		 * Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.
		 * Required
		 */
		Schema: Schema;

		/** An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
		EncryptionConfig?: EncryptionConfig;
	}
	export interface CreateDatasetRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetName: FormControl<string | null | undefined>,

		/** Required */
		Domain: FormControl<CreateDatasetRequestDomain | null | undefined>,

		/** Required */
		DatasetType: FormControl<CreateDatasetRequestDatasetType | null | undefined>,
		DataFrequency: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			Domain: new FormControl<CreateDatasetRequestDomain | null | undefined>(undefined, [Validators.required]),
			DatasetType: new FormControl<CreateDatasetRequestDatasetType | null | undefined>(undefined, [Validators.required]),
			DataFrequency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateDatasetRequestDomain { RETAIL = 0, CUSTOM = 1, INVENTORY_PLANNING = 2, EC2_CAPACITY = 3, WORK_FORCE = 4, WEB_TRAFFIC = 5, METRICS = 6 }

	export enum CreateDatasetRequestDatasetType { TARGET_TIME_SERIES = 0, RELATED_TIME_SERIES = 1, ITEM_METADATA = 2 }


	/** Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request. */
	export interface Schema {
		Attributes?: Array<SchemaAttribute>;
	}

	/** Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request. */
	export interface SchemaFormProperties {
	}
	export function CreateSchemaFormGroup() {
		return new FormGroup<SchemaFormProperties>({
		});

	}


	/** An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects. */
	export interface SchemaAttribute {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		AttributeName?: string | null;
		AttributeType?: SchemaAttributeAttributeType | null;
	}

	/** An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects. */
	export interface SchemaAttributeFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
		AttributeType: FormControl<SchemaAttributeAttributeType | null | undefined>,
	}
	export function CreateSchemaAttributeFormGroup() {
		return new FormGroup<SchemaAttributeFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			AttributeType: new FormControl<SchemaAttributeAttributeType | null | undefined>(undefined),
		});

	}

	export enum SchemaAttributeAttributeType { _string = 0, integer = 1, _float = 2, timestamp = 3 }


	/** An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
	export interface EncryptionConfig {

		/**
		 * Required
		 * Max length: 256
		 */
		RoleArn: string;

		/**
		 * Required
		 * Max length: 256
		 */
		KMSKeyArn: string;
	}

	/** An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
	export interface EncryptionConfigFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		KMSKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws:kms:.*:key/.*')]),
		});

	}

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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateDatasetGroupResponse {

		/** Max length: 256 */
		DatasetGroupArn?: string | null;
	}
	export interface CreateDatasetGroupResponseFormProperties {

		/** Max length: 256 */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetGroupResponseFormGroup() {
		return new FormGroup<CreateDatasetGroupResponseFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface CreateDatasetGroupRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetGroupName: string;

		/** Required */
		Domain: CreateDatasetRequestDomain;
		DatasetArns?: Array<string>;
	}
	export interface CreateDatasetGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetGroupName: FormControl<string | null | undefined>,

		/** Required */
		Domain: FormControl<CreateDatasetRequestDomain | null | undefined>,
	}
	export function CreateCreateDatasetGroupRequestFormGroup() {
		return new FormGroup<CreateDatasetGroupRequestFormProperties>({
			DatasetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			Domain: new FormControl<CreateDatasetRequestDomain | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateDatasetImportJobResponse {

		/** Max length: 256 */
		DatasetImportJobArn?: string | null;
	}
	export interface CreateDatasetImportJobResponseFormProperties {

		/** Max length: 256 */
		DatasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetImportJobResponseFormGroup() {
		return new FormGroup<CreateDatasetImportJobResponseFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface CreateDatasetImportJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetImportJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetArn: string;

		/**
		 * The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request.
		 * Required
		 */
		DataSource: DataSource;

		/** Max length: 256 */
		TimestampFormat?: string | null;
	}
	export interface CreateDatasetImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetImportJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TimestampFormat: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetImportJobRequestFormGroup() {
		return new FormGroup<CreateDatasetImportJobRequestFormProperties>({
			DatasetImportJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			TimestampFormat: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\:\.\,\'\s]+$')]),
		});

	}


	/** The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request. */
	export interface DataSource {

		/**
		 * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object that is submitted in the <a>CreateForecastExportJob</a> request.
		 * Required
		 */
		S3Config: S3Config;
	}

	/** The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request. */
	export interface DataSourceFormProperties {
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
		});

	}


	/** The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object that is submitted in the <a>CreateForecastExportJob</a> request. */
	export interface S3Config {

		/** Required */
		Path: string;

		/**
		 * Required
		 * Max length: 256
		 */
		RoleArn: string;

		/** Max length: 256 */
		KMSKeyArn?: string | null;
	}

	/** The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object that is submitted in the <a>CreateForecastExportJob</a> request. */
	export interface S3ConfigFormProperties {

		/** Required */
		Path: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		KMSKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigFormGroup() {
		return new FormGroup<S3ConfigFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			KMSKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws:kms:.*:key/.*')]),
		});

	}

	export interface CreateForecastResponse {

		/** Max length: 256 */
		ForecastArn?: string | null;
	}
	export interface CreateForecastResponseFormProperties {

		/** Max length: 256 */
		ForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateForecastResponseFormGroup() {
		return new FormGroup<CreateForecastResponseFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface CreateForecastRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		PredictorArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ForecastTypes?: Array<string>;
	}
	export interface CreateForecastRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateForecastRequestFormGroup() {
		return new FormGroup<CreateForecastRequestFormProperties>({
			ForecastName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface CreateForecastExportJobResponse {

		/** Max length: 256 */
		ForecastExportJobArn?: string | null;
	}
	export interface CreateForecastExportJobResponseFormProperties {

		/** Max length: 256 */
		ForecastExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateForecastExportJobResponseFormGroup() {
		return new FormGroup<CreateForecastExportJobResponseFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface CreateForecastExportJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastExportJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastArn: string;

		/**
		 * The destination for an exported forecast, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateForecastExportJob</a> request.
		 * Required
		 */
		Destination: DataDestination;
	}
	export interface CreateForecastExportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastExportJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateForecastExportJobRequestFormGroup() {
		return new FormGroup<CreateForecastExportJobRequestFormProperties>({
			ForecastExportJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}


	/** The destination for an exported forecast, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateForecastExportJob</a> request. */
	export interface DataDestination {

		/**
		 * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object that is submitted in the <a>CreateForecastExportJob</a> request.
		 * Required
		 */
		S3Config: S3Config;
	}

	/** The destination for an exported forecast, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateForecastExportJob</a> request. */
	export interface DataDestinationFormProperties {
	}
	export function CreateDataDestinationFormGroup() {
		return new FormGroup<DataDestinationFormProperties>({
		});

	}

	export interface CreatePredictorResponse {

		/** Max length: 256 */
		PredictorArn?: string | null;
	}
	export interface CreatePredictorResponseFormProperties {

		/** Max length: 256 */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePredictorResponseFormGroup() {
		return new FormGroup<CreatePredictorResponseFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface CreatePredictorRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		PredictorName: string;

		/** Max length: 256 */
		AlgorithmArn?: string | null;

		/** Required */
		ForecastHorizon: number;
		PerformAutoML?: boolean | null;
		PerformHPO?: boolean | null;
		TrainingParameters?: TrainingParameters;

		/** Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request. */
		EvaluationParameters?: EvaluationParameters;

		/** <p>Configuration information for a hyperparameter tuning job. You specify this object in the <a>CreatePredictor</a> request.</p> <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.</p> <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.</p> */
		HPOConfig?: HyperParameterTuningJobConfig;

		/**
		 * The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/**
		 * <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> dataset before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p>
		 * Required
		 */
		FeaturizationConfig: FeaturizationConfig;

		/** An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
		EncryptionConfig?: EncryptionConfig;
	}
	export interface CreatePredictorRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		PredictorName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		AlgorithmArn: FormControl<string | null | undefined>,

		/** Required */
		ForecastHorizon: FormControl<number | null | undefined>,
		PerformAutoML: FormControl<boolean | null | undefined>,
		PerformHPO: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePredictorRequestFormGroup() {
		return new FormGroup<CreatePredictorRequestFormProperties>({
			PredictorName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			AlgorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			ForecastHorizon: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PerformAutoML: new FormControl<boolean | null | undefined>(undefined),
			PerformHPO: new FormControl<boolean | null | undefined>(undefined),
		});

	}

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

		/** Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the <a>HyperParameterTuningJobConfig</a> object. */
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

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		CategoricalParameterRanges?: Array<CategoricalParameterRange>;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ContinuousParameterRanges?: Array<ContinuousParameterRange>;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
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

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Values: Array<string>;
	}

	/** Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface CategoricalParameterRangeFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCategoricalParameterRangeFormGroup() {
		return new FormGroup<CategoricalParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
		});

	}


	/** Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface ContinuousParameterRange {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		MaxValue: number;

		/** Required */
		MinValue: number;
		ScalingType?: ContinuousParameterRangeScalingType | null;
	}

	/** Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface ContinuousParameterRangeFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MaxValue: FormControl<number | null | undefined>,

		/** Required */
		MinValue: FormControl<number | null | undefined>,
		ScalingType: FormControl<ContinuousParameterRangeScalingType | null | undefined>,
	}
	export function CreateContinuousParameterRangeFormGroup() {
		return new FormGroup<ContinuousParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			MaxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ScalingType: new FormControl<ContinuousParameterRangeScalingType | null | undefined>(undefined),
		});

	}

	export enum ContinuousParameterRangeScalingType { Auto = 0, Linear = 1, Logarithmic = 2, ReverseLogarithmic = 3 }


	/** Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface IntegerParameterRange {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		MaxValue: number;

		/** Required */
		MinValue: number;
		ScalingType?: ContinuousParameterRangeScalingType | null;
	}

	/** Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object. */
	export interface IntegerParameterRangeFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		MaxValue: FormControl<number | null | undefined>,

		/** Required */
		MinValue: FormControl<number | null | undefined>,
		ScalingType: FormControl<ContinuousParameterRangeScalingType | null | undefined>,
	}
	export function CreateIntegerParameterRangeFormGroup() {
		return new FormGroup<IntegerParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			MaxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ScalingType: new FormControl<ContinuousParameterRangeScalingType | null | undefined>(undefined),
		});

	}


	/** The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request. */
	export interface InputDataConfig {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetGroupArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		SupplementaryFeatures?: Array<SupplementaryFeature>;
	}

	/** The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request. */
	export interface InputDataConfigFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}


	/** <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object.</p> <p>The only supported feature is a holiday calendar. If you use the calendar, all data in the datasets should belong to the same country as the calendar. For the holiday calendar data, see the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> web site.</p> */
	export interface SupplementaryFeature {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 256
		 */
		Value: string;
	}

	/** <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object.</p> <p>The only supported feature is a holiday calendar. If you use the calendar, all data in the datasets should belong to the same country as the calendar. For the holiday calendar data, see the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> web site.</p> */
	export interface SupplementaryFeatureFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateSupplementaryFeatureFormGroup() {
		return new FormGroup<SupplementaryFeatureFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\_\-]+$')]),
		});

	}


	/** <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> dataset before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p> */
	export interface FeaturizationConfig {

		/** Required */
		ForecastFrequency: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		ForecastDimensions?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Featurizations?: Array<Featurization>;
	}

	/** <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> dataset before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p> */
	export interface FeaturizationConfigFormProperties {

		/** Required */
		ForecastFrequency: FormControl<string | null | undefined>,
	}
	export function CreateFeaturizationConfigFormGroup() {
		return new FormGroup<FeaturizationConfigFormProperties>({
			ForecastFrequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p> */
	export interface Featurization {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AttributeName: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		FeaturizationPipeline?: Array<FeaturizationMethod>;
	}

	/** <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p> */
	export interface FeaturizationFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AttributeName: FormControl<string | null | undefined>,
	}
	export function CreateFeaturizationFormGroup() {
		return new FormGroup<FeaturizationFormProperties>({
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
		});

	}


	/** <p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. If you don't specify <code>FeaturizationMethodParameters</code>, Amazon Forecast uses default parameters.</p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>}</code> </p> */
	export interface FeaturizationMethod {

		/** Required */
		FeaturizationMethodName: FeaturizationMethodFeaturizationMethodName;
		FeaturizationMethodParameters?: FeaturizationMethodParameters;
	}

	/** <p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. If you don't specify <code>FeaturizationMethodParameters</code>, Amazon Forecast uses default parameters.</p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>}</code> </p> */
	export interface FeaturizationMethodFormProperties {

		/** Required */
		FeaturizationMethodName: FormControl<FeaturizationMethodFeaturizationMethodName | null | undefined>,
	}
	export function CreateFeaturizationMethodFormGroup() {
		return new FormGroup<FeaturizationMethodFormProperties>({
			FeaturizationMethodName: new FormControl<FeaturizationMethodFeaturizationMethodName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FeaturizationMethodFeaturizationMethodName { filling = 0 }

	export interface FeaturizationMethodParameters {
	}
	export interface FeaturizationMethodParametersFormProperties {
	}
	export function CreateFeaturizationMethodParametersFormGroup() {
		return new FormGroup<FeaturizationMethodParametersFormProperties>({
		});

	}

	export interface DeleteDatasetRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetArn: string;
	}
	export interface DeleteDatasetRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DeleteDatasetGroupRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetGroupArn: string;
	}
	export interface DeleteDatasetGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetGroupRequestFormGroup() {
		return new FormGroup<DeleteDatasetGroupRequestFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DeleteDatasetImportJobRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetImportJobArn: string;
	}
	export interface DeleteDatasetImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetImportJobRequestFormGroup() {
		return new FormGroup<DeleteDatasetImportJobRequestFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DeleteForecastRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastArn: string;
	}
	export interface DeleteForecastRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteForecastRequestFormGroup() {
		return new FormGroup<DeleteForecastRequestFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DeleteForecastExportJobRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastExportJobArn: string;
	}
	export interface DeleteForecastExportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteForecastExportJobRequestFormGroup() {
		return new FormGroup<DeleteForecastExportJobRequestFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DeletePredictorRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		PredictorArn: string;
	}
	export interface DeletePredictorRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePredictorRequestFormGroup() {
		return new FormGroup<DeletePredictorRequestFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DescribeDatasetResponse {

		/** Max length: 256 */
		DatasetArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetName?: string | null;
		Domain?: CreateDatasetRequestDomain | null;
		DatasetType?: CreateDatasetRequestDatasetType | null;
		DataFrequency?: string | null;

		/** Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request. */
		Schema?: Schema;

		/** An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
		EncryptionConfig?: EncryptionConfig;

		/** Max length: 256 */
		Status?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}
	export interface DescribeDatasetResponseFormProperties {

		/** Max length: 256 */
		DatasetArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetName: FormControl<string | null | undefined>,
		Domain: FormControl<CreateDatasetRequestDomain | null | undefined>,
		DatasetType: FormControl<CreateDatasetRequestDatasetType | null | undefined>,
		DataFrequency: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			Domain: new FormControl<CreateDatasetRequestDomain | null | undefined>(undefined),
			DatasetType: new FormControl<CreateDatasetRequestDatasetType | null | undefined>(undefined),
			DataFrequency: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetArn: string;
	}
	export interface DescribeDatasetRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DescribeDatasetGroupResponse {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetGroupName?: string | null;

		/** Max length: 256 */
		DatasetGroupArn?: string | null;
		DatasetArns?: Array<string>;
		Domain?: CreateDatasetRequestDomain | null;

		/** Max length: 256 */
		Status?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}
	export interface DescribeDatasetGroupResponseFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetGroupName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		DatasetGroupArn: FormControl<string | null | undefined>,
		Domain: FormControl<CreateDatasetRequestDomain | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDatasetGroupResponseFormGroup() {
		return new FormGroup<DescribeDatasetGroupResponseFormProperties>({
			DatasetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			Domain: new FormControl<CreateDatasetRequestDomain | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetGroupRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetGroupArn: string;
	}
	export interface DescribeDatasetGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetGroupRequestFormGroup() {
		return new FormGroup<DescribeDatasetGroupRequestFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DescribeDatasetImportJobResponse {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetImportJobName?: string | null;

		/** Max length: 256 */
		DatasetImportJobArn?: string | null;

		/** Max length: 256 */
		DatasetArn?: string | null;

		/** Max length: 256 */
		TimestampFormat?: string | null;

		/** The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request. */
		DataSource?: DataSource;
		FieldStatistics?: FieldStatistics;
		DataSize?: number | null;

		/** Max length: 256 */
		Status?: string | null;
		Message?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}
	export interface DescribeDatasetImportJobResponseFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetImportJobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		DatasetImportJobArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		DatasetArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TimestampFormat: FormControl<string | null | undefined>,
		DataSize: FormControl<number | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDatasetImportJobResponseFormGroup() {
		return new FormGroup<DescribeDatasetImportJobResponseFormProperties>({
			DatasetImportJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			TimestampFormat: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\:\.\,\'\s]+$')]),
			DataSize: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
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

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetImportJobArn: string;
	}
	export interface DescribeDatasetImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetImportJobRequestFormGroup() {
		return new FormGroup<DescribeDatasetImportJobRequestFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DescribeForecastResponse {

		/** Max length: 256 */
		ForecastArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastName?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ForecastTypes?: Array<string>;

		/** Max length: 256 */
		PredictorArn?: string | null;

		/** Max length: 256 */
		DatasetGroupArn?: string | null;

		/** Max length: 256 */
		Status?: string | null;
		Message?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}
	export interface DescribeForecastResponseFormProperties {

		/** Max length: 256 */
		ForecastArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		PredictorArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		DatasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeForecastResponseFormGroup() {
		return new FormGroup<DescribeForecastResponseFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			ForecastName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\_]+$')]),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeForecastRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastArn: string;
	}
	export interface DescribeForecastRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeForecastRequestFormGroup() {
		return new FormGroup<DescribeForecastRequestFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DescribeForecastExportJobResponse {

		/** Max length: 256 */
		ForecastExportJobArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastExportJobName?: string | null;

		/** Max length: 256 */
		ForecastArn?: string | null;

		/** The destination for an exported forecast, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateForecastExportJob</a> request. */
		Destination?: DataDestination;
		Message?: string | null;

		/** Max length: 256 */
		Status?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}
	export interface DescribeForecastExportJobResponseFormProperties {

		/** Max length: 256 */
		ForecastExportJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastExportJobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ForecastArn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeForecastExportJobResponseFormGroup() {
		return new FormGroup<DescribeForecastExportJobResponseFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			ForecastExportJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			Message: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeForecastExportJobRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastExportJobArn: string;
	}
	export interface DescribeForecastExportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ForecastExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeForecastExportJobRequestFormGroup() {
		return new FormGroup<DescribeForecastExportJobRequestFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface DescribePredictorResponse {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		PredictorArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		PredictorName?: string | null;

		/** Max length: 256 */
		AlgorithmArn?: string | null;
		ForecastHorizon?: number | null;
		PerformAutoML?: boolean | null;
		PerformHPO?: boolean | null;
		TrainingParameters?: TrainingParameters;

		/** Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request. */
		EvaluationParameters?: EvaluationParameters;

		/** <p>Configuration information for a hyperparameter tuning job. You specify this object in the <a>CreatePredictor</a> request.</p> <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.</p> <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.</p> */
		HPOConfig?: HyperParameterTuningJobConfig;

		/** The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request. */
		InputDataConfig?: InputDataConfig;

		/** <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> dataset before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p> */
		FeaturizationConfig?: FeaturizationConfig;

		/** An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests. */
		EncryptionConfig?: EncryptionConfig;

		/** Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation. */
		PredictorExecutionDetails?: PredictorExecutionDetails;
		DatasetImportJobArns?: Array<string>;
		AutoMLAlgorithmArns?: Array<string>;

		/** Max length: 256 */
		Status?: string | null;
		Message?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}
	export interface DescribePredictorResponseFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		PredictorArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		PredictorName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		AlgorithmArn: FormControl<string | null | undefined>,
		ForecastHorizon: FormControl<number | null | undefined>,
		PerformAutoML: FormControl<boolean | null | undefined>,
		PerformHPO: FormControl<boolean | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribePredictorResponseFormGroup() {
		return new FormGroup<DescribePredictorResponseFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			PredictorName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			AlgorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			ForecastHorizon: new FormControl<number | null | undefined>(undefined),
			PerformAutoML: new FormControl<boolean | null | undefined>(undefined),
			PerformHPO: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation. */
	export interface PredictorExecutionDetails {

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
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

		/** Max length: 256 */
		AlgorithmArn?: string | null;
		TestWindows?: Array<TestWindowSummary>;
	}

	/** The algorithm used to perform a backtest and the status of those tests. */
	export interface PredictorExecutionFormProperties {

		/** Max length: 256 */
		AlgorithmArn: FormControl<string | null | undefined>,
	}
	export function CreatePredictorExecutionFormGroup() {
		return new FormGroup<PredictorExecutionFormProperties>({
			AlgorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}


	/** The status, start time, and end time of a backtest, as well as a failure reason if applicable. */
	export interface TestWindowSummary {
		TestWindowStart?: Date | null;
		TestWindowEnd?: Date | null;

		/** Max length: 256 */
		Status?: string | null;
		Message?: string | null;
	}

	/** The status, start time, and end time of a backtest, as well as a failure reason if applicable. */
	export interface TestWindowSummaryFormProperties {
		TestWindowStart: FormControl<Date | null | undefined>,
		TestWindowEnd: FormControl<Date | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTestWindowSummaryFormGroup() {
		return new FormGroup<TestWindowSummaryFormProperties>({
			TestWindowStart: new FormControl<Date | null | undefined>(undefined),
			TestWindowEnd: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePredictorRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		PredictorArn: string;
	}
	export interface DescribePredictorRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribePredictorRequestFormGroup() {
		return new FormGroup<DescribePredictorRequestFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface GetAccuracyMetricsResponse {
		PredictorEvaluationResults?: Array<EvaluationResult>;
	}
	export interface GetAccuracyMetricsResponseFormProperties {
	}
	export function CreateGetAccuracyMetricsResponseFormGroup() {
		return new FormGroup<GetAccuracyMetricsResponseFormProperties>({
		});

	}


	/** The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response. */
	export interface EvaluationResult {

		/** Max length: 256 */
		AlgorithmArn?: string | null;
		TestWindows?: Array<WindowSummary>;
	}

	/** The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response. */
	export interface EvaluationResultFormProperties {

		/** Max length: 256 */
		AlgorithmArn: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationResultFormGroup() {
		return new FormGroup<EvaluationResultFormProperties>({
			AlgorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}


	/** <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p> */
	export interface WindowSummary {
		TestWindowStart?: Date | null;
		TestWindowEnd?: Date | null;
		ItemCount?: number | null;
		EvaluationType?: WindowSummaryEvaluationType | null;

		/** Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object. */
		Metrics?: Metrics;
	}

	/** <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p> */
	export interface WindowSummaryFormProperties {
		TestWindowStart: FormControl<Date | null | undefined>,
		TestWindowEnd: FormControl<Date | null | undefined>,
		ItemCount: FormControl<number | null | undefined>,
		EvaluationType: FormControl<WindowSummaryEvaluationType | null | undefined>,
	}
	export function CreateWindowSummaryFormGroup() {
		return new FormGroup<WindowSummaryFormProperties>({
			TestWindowStart: new FormControl<Date | null | undefined>(undefined),
			TestWindowEnd: new FormControl<Date | null | undefined>(undefined),
			ItemCount: new FormControl<number | null | undefined>(undefined),
			EvaluationType: new FormControl<WindowSummaryEvaluationType | null | undefined>(undefined),
		});

	}

	export enum WindowSummaryEvaluationType { SUMMARY = 0, COMPUTED = 1 }


	/** Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object. */
	export interface Metrics {
		RMSE?: number | null;
		WeightedQuantileLosses?: Array<WeightedQuantileLoss>;
	}

	/** Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object. */
	export interface MetricsFormProperties {
		RMSE: FormControl<number | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			RMSE: new FormControl<number | null | undefined>(undefined),
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

	export interface GetAccuracyMetricsRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		PredictorArn: string;
	}
	export interface GetAccuracyMetricsRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		PredictorArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAccuracyMetricsRequestFormGroup() {
		return new FormGroup<GetAccuracyMetricsRequestFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export interface ListDatasetGroupsResponse {
		DatasetGroups?: Array<DatasetGroupSummary>;

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListDatasetGroupsResponseFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetGroupsResponseFormGroup() {
		return new FormGroup<ListDatasetGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
		});

	}


	/** Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the <a>DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>. */
	export interface DatasetGroupSummary {

		/** Max length: 256 */
		DatasetGroupArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetGroupName?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}

	/** Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the <a>DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>. */
	export interface DatasetGroupSummaryFormProperties {

		/** Max length: 256 */
		DatasetGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetGroupName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetGroupSummaryFormGroup() {
		return new FormGroup<DatasetGroupSummaryFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			DatasetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetGroupsRequest {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListDatasetGroupsRequestFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetGroupsRequestFormGroup() {
		return new FormGroup<ListDatasetGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListDatasetImportJobsResponseFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetImportJobsResponseFormGroup() {
		return new FormGroup<ListDatasetImportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
		});

	}


	/** Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a>DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>. */
	export interface DatasetImportJobSummary {

		/** Max length: 256 */
		DatasetImportJobArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetImportJobName?: string | null;

		/** The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request. */
		DataSource?: DataSource;

		/** Max length: 256 */
		Status?: string | null;
		Message?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}

	/** Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a>DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>. */
	export interface DatasetImportJobSummaryFormProperties {

		/** Max length: 256 */
		DatasetImportJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetImportJobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetImportJobSummaryFormGroup() {
		return new FormGroup<DatasetImportJobSummaryFormProperties>({
			DatasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			DatasetImportJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetImportJobsRequest {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListDatasetImportJobsRequestFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetImportJobsRequestFormGroup() {
		return new FormGroup<ListDatasetImportJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value. */
	export interface Filter {

		/**
		 * Required
		 * Max length: 256
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 */
		Value: string;

		/** Required */
		Condition: FilterCondition;
	}

	/** Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value. */
	export interface FilterFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Condition: FormControl<FilterCondition | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\_]+$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			Condition: new FormControl<FilterCondition | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterCondition { IS = 0, IS_NOT = 1 }

	export interface ListDatasetsResponse {
		Datasets?: Array<DatasetSummary>;

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListDatasetsResponseFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
		});

	}


	/** Provides a summary of the dataset properties used in the <a>ListDatasets</a> operation. To get the complete set of properties, call the <a>DescribeDataset</a> operation, and provide the <code>DatasetArn</code>. */
	export interface DatasetSummary {

		/** Max length: 256 */
		DatasetArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetName?: string | null;
		DatasetType?: CreateDatasetRequestDatasetType | null;
		Domain?: CreateDatasetRequestDomain | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}

	/** Provides a summary of the dataset properties used in the <a>ListDatasets</a> operation. To get the complete set of properties, call the <a>DescribeDataset</a> operation, and provide the <code>DatasetArn</code>. */
	export interface DatasetSummaryFormProperties {

		/** Max length: 256 */
		DatasetArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		DatasetName: FormControl<string | null | undefined>,
		DatasetType: FormControl<CreateDatasetRequestDatasetType | null | undefined>,
		Domain: FormControl<CreateDatasetRequestDomain | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetSummaryFormGroup() {
		return new FormGroup<DatasetSummaryFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			DatasetType: new FormControl<CreateDatasetRequestDatasetType | null | undefined>(undefined),
			Domain: new FormControl<CreateDatasetRequestDomain | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsRequest {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListDatasetsRequestFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListForecastExportJobsResponse {
		ForecastExportJobs?: Array<ForecastExportJobSummary>;

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListForecastExportJobsResponseFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListForecastExportJobsResponseFormGroup() {
		return new FormGroup<ListForecastExportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
		});

	}


	/** Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>. */
	export interface ForecastExportJobSummary {

		/** Max length: 256 */
		ForecastExportJobArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastExportJobName?: string | null;

		/** The destination for an exported forecast, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateForecastExportJob</a> request. */
		Destination?: DataDestination;

		/** Max length: 256 */
		Status?: string | null;
		Message?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}

	/** Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>. */
	export interface ForecastExportJobSummaryFormProperties {

		/** Max length: 256 */
		ForecastExportJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastExportJobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateForecastExportJobSummaryFormGroup() {
		return new FormGroup<ForecastExportJobSummaryFormProperties>({
			ForecastExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			ForecastExportJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListForecastExportJobsRequest {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListForecastExportJobsRequestFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListForecastExportJobsRequestFormGroup() {
		return new FormGroup<ListForecastExportJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListForecastsResponse {
		Forecasts?: Array<ForecastSummary>;

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListForecastsResponseFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListForecastsResponseFormGroup() {
		return new FormGroup<ListForecastsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
		});

	}


	/** Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary. */
	export interface ForecastSummary {

		/** Max length: 256 */
		ForecastArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastName?: string | null;

		/** Max length: 256 */
		PredictorArn?: string | null;

		/** Max length: 256 */
		DatasetGroupArn?: string | null;

		/** Max length: 256 */
		Status?: string | null;
		Message?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}

	/** Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary. */
	export interface ForecastSummaryFormProperties {

		/** Max length: 256 */
		ForecastArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ForecastName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		PredictorArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		DatasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreateForecastSummaryFormGroup() {
		return new FormGroup<ForecastSummaryFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			ForecastName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\_]+$')]),
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\_]+$')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListForecastsRequest {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListForecastsRequestFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListForecastsRequestFormGroup() {
		return new FormGroup<ListForecastsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListPredictorsResponse {
		Predictors?: Array<PredictorSummary>;

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListPredictorsResponseFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPredictorsResponseFormGroup() {
		return new FormGroup<ListPredictorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
		});

	}


	/** Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>. */
	export interface PredictorSummary {

		/** Max length: 256 */
		PredictorArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		PredictorName?: string | null;

		/** Max length: 256 */
		DatasetGroupArn?: string | null;

		/** Max length: 256 */
		Status?: string | null;
		Message?: string | null;
		CreationTime?: Date | null;
		LastModificationTime?: Date | null;
	}

	/** Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>. */
	export interface PredictorSummaryFormProperties {

		/** Max length: 256 */
		PredictorArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		PredictorName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		DatasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Status: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModificationTime: FormControl<Date | null | undefined>,
	}
	export function CreatePredictorSummaryFormGroup() {
		return new FormGroup<PredictorSummaryFormProperties>({
			PredictorArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			PredictorName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*')]),
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModificationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPredictorsRequest {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListPredictorsRequestFormProperties {

		/**
		 * Max length: 3000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPredictorsRequestFormGroup() {
		return new FormGroup<ListPredictorsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetGroupArn: string;

		/** Required */
		DatasetArns: Array<string>;
	}
	export interface UpdateDatasetGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		DatasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetGroupRequestFormGroup() {
		return new FormGroup<UpdateDatasetGroupRequestFormProperties>({
			DatasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\-\_\.\/\:]+$')]),
		});

	}

	export enum AttributeType { _string = 0, integer = 1, _float = 2, timestamp = 3 }

	export enum ScalingType { Auto = 0, Linear = 1, Logarithmic = 2, ReverseLogarithmic = 3 }

	export enum Domain { RETAIL = 0, CUSTOM = 1, INVENTORY_PLANNING = 2, EC2_CAPACITY = 3, WORK_FORCE = 4, WEB_TRAFFIC = 5, METRICS = 6 }

	export enum DatasetType { TARGET_TIME_SERIES = 0, RELATED_TIME_SERIES = 1, ITEM_METADATA = 2 }

	export enum EvaluationType { SUMMARY = 0, COMPUTED = 1 }

	export enum FeaturizationMethodName { filling = 0 }


	/** Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a>CreateDatasetImportJob</a> operation. */
	export interface Statistics {
		Count?: number | null;
		CountDistinct?: number | null;
		CountNull?: number | null;
		CountNan?: number | null;

		/** Max length: 256 */
		Min?: string | null;

		/** Max length: 256 */
		Max?: string | null;
		Avg?: number | null;
		Stddev?: number | null;
	}

	/** Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a>CreateDatasetImportJob</a> operation. */
	export interface StatisticsFormProperties {
		Count: FormControl<number | null | undefined>,
		CountDistinct: FormControl<number | null | undefined>,
		CountNull: FormControl<number | null | undefined>,
		CountNan: FormControl<number | null | undefined>,

		/** Max length: 256 */
		Min: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Max: FormControl<string | null | undefined>,
		Avg: FormControl<number | null | undefined>,
		Stddev: FormControl<number | null | undefined>,
	}
	export function CreateStatisticsFormGroup() {
		return new FormGroup<StatisticsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			CountDistinct: new FormControl<number | null | undefined>(undefined),
			CountNull: new FormControl<number | null | undefined>(undefined),
			CountNan: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\_]+$')]),
			Max: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9\_]+$')]),
			Avg: new FormControl<number | null | undefined>(undefined),
			Stddev: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FilterConditionString { IS = 0, IS_NOT = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:</p> <ul> <li> <p> <i> <code>DataFrequency</code> </i> - How frequently your historical time-series data is collected.</p> </li> <li> <p> <i> <code>Domain</code> </i> and <i> <code>DatasetType</code> </i> - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.</p> </li> <li> <p> <i> <code>Schema</code> </i> - A schema specifies the fields in the dataset, including the field name and data type.</p> </li> </ul> <p>After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>To get a list of all your datasets, use the <a>ListDatasets</a> operation.</p> <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples/tree/master/data">Amazon Forecast Sample GitHub repository</a>.</p> <note> <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import training data. Use the <a>DescribeDataset</a> operation to get the status.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateDataset
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetRequest): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the <a>UpdateDatasetGroup</a> operation.</p> <p>After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p> <p>To get a list of all your datasets groups, use the <a>ListDatasetGroups</a> operation.</p> <note> <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can create use the dataset group to create a predictor. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateDatasetGroup
		 * @return {CreateDatasetGroupResponse} Success
		 */
		CreateDatasetGroup(requestBody: CreateDatasetGroupRequest): Observable<CreateDatasetGroupResponse> {
			return this.http.post<CreateDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to.</p> <p>You must specify a <a>DataSource</a> object that includes an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>The training data must be in CSV format. The delimiter must be a comma (,).</p> <p>You can specify the path to a specific CSV file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files.</p> <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the <a>ListDatasetImportJobs</a> operation.</p>
		 * Post #X-Amz-Target=AmazonForecast.CreateDatasetImportJob
		 * @return {CreateDatasetImportJobResponse} Success
		 */
		CreateDatasetImportJob(requestBody: CreateDatasetImportJobRequest): Observable<CreateDatasetImportJobResponse> {
			return this.http.post<CreateDatasetImportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p> <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which you specify in the <a>CreatePredictor</a> request, multiplied by the <code>DataFrequency</code> value, which you specify in the <a>CreateDataset</a> request. When you query a forecast, you can request a specific date range within the forecast.</p> <p>To get a list of all your forecasts, use the <a>ListForecasts</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor.</p> </note> <p>For more information, see <a>howitworks-forecast</a>.</p> <note> <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query or export the forecast. Use the <a>DescribeForecast</a> operation to get the status.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateForecast
		 * @return {CreateForecastResponse} Success
		 */
		CreateForecast(requestBody: CreateForecastRequest): Observable<CreateForecastResponse> {
			return this.http.post<CreateForecastResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports a forecast created by the <a>CreateForecast</a> operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p> <p>&lt;ForecastExportJobName&gt;_&lt;ExportTimestamp&gt;_&lt;PageNumber&gt;</p> <p>where the &lt;ExportTimestamp&gt; component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).</p> <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p> <p>For more information, see <a>howitworks-forecast</a>.</p> <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p> <note> <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreateForecastExportJob
		 * @return {CreateForecastExportJobResponse} Success
		 */
		CreateForecastExportJob(requestBody: CreateForecastExportJobRequest): Observable<CreateForecastExportJobResponse> {
			return this.http.post<CreateForecastExportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreateForecastExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Forecast predictor.</p> <p>In the request, you provide a dataset group and either specify an algorithm or let Amazon Forecast choose the algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters.</p> <p>Amazon Forecast uses the chosen algorithm to train a model using the latest version of the datasets in the specified dataset group. The result is called a predictor. You then generate a forecast using the <a>CreateForecast</a> operation.</p> <p>After training a model, the <code>CreatePredictor</code> operation also evaluates it. To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. Always review the evaluation metrics before deciding to use the predictor to generate a forecast.</p> <p>Optionally, you can specify a featurization configuration to fill and aggregate the data fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see <a>FeaturizationConfig</a>.</p> <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the <code>DataFrequency</code> specified when the dataset was created matches the <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p> <p> <b>AutoML</b> </p> <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The <code>objective function</code> is defined as the mean of the weighted p10, p50, and p90 quantile losses. For more information, see <a>EvaluationResult</a>.</p> <p>When AutoML is enabled, the following properties are disallowed:</p> <ul> <li> <p> <code>AlgorithmArn</code> </p> </li> <li> <p> <code>HPOConfig</code> </p> </li> <li> <p> <code>PerformHPO</code> </p> </li> <li> <p> <code>TrainingParameters</code> </p> </li> </ul> <p>To get a list of all of your predictors, use the <a>ListPredictors</a> operation.</p> <note> <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.CreatePredictor
		 * @return {CreatePredictorResponse} Success
		 */
		CreatePredictor(requestBody: CreatePredictorRequest): Observable<CreatePredictorResponse> {
			return this.http.post<CreatePredictorResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.CreatePredictor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Forecast dataset that was created using the <a>CreateDataset</a> operation. You can only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status use the <a>DescribeDataset</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DeleteDataset
		 * @return {void} Success
		 */
		DeleteDataset(requestBody: DeleteDatasetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a dataset group created using the <a>CreateDatasetGroup</a> operation. You can only delete dataset groups that have a status of <code>ACTIVE</code>, <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p> <p>This operation deletes only the dataset group, not the datasets in the group.</p>
		 * Post #X-Amz-Target=AmazonForecast.DeleteDatasetGroup
		 * @return {void} Success
		 */
		DeleteDatasetGroup(requestBody: DeleteDatasetGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a dataset import job created using the <a>CreateDatasetImportJob</a> operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeDatasetImportJob</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DeleteDatasetImportJob
		 * @return {void} Success
		 */
		DeleteDatasetImportJob(requestBody: DeleteDatasetImportJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeleteDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Deletes a predictor created using the <a>CreatePredictor</a> operation. You can delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.DeletePredictor
		 * @return {void} Success
		 */
		DeletePredictor(requestBody: DeletePredictorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonForecast.DeletePredictor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes an Amazon Forecast dataset created using the <a>CreateDataset</a> operation.</p> <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request, this operation includes the following dataset properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeDataset
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(requestBody: DescribeDatasetRequest): Observable<DescribeDatasetResponse> {
			return this.http.post<DescribeDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a dataset group created using the <a>CreateDatasetGroup</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>DatasetArns</code> - The datasets belonging to the group.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeDatasetGroup
		 * @return {DescribeDatasetGroupResponse} Success
		 */
		DescribeDatasetGroup(requestBody: DescribeDatasetGroupRequest): Observable<DescribeDatasetGroupResponse> {
			return this.http.post<DescribeDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a dataset import job created using the <a>CreateDatasetImportJob</a> operation.</p> <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code> request, this operation includes the following properties:</p> <ul> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>DataSize</code> </p> </li> <li> <p> <code>FieldStatistics</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribeDatasetImportJob
		 * @return {DescribeDatasetImportJobResponse} Success
		 */
		DescribeDatasetImportJob(requestBody: DescribeDatasetImportJobRequest): Observable<DescribeDatasetImportJobResponse> {
			return this.http.post<DescribeDatasetImportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribeDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Describes a predictor created using the <a>CreatePredictor</a> operation.</p> <p>In addition to listing the properties provided in the <code>CreatePredictor</code> request, this operation lists the following properties:</p> <ul> <li> <p> <code>DatasetImportJobArns</code> - The dataset import jobs used to import training data.</p> </li> <li> <p> <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were evaluated.</p> </li> <li> <p> <code>CreationTime</code> </p> </li> <li> <p> <code>LastModificationTime</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Message</code> - If an error occurred, information about the error.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonForecast.DescribePredictor
		 * @return {DescribePredictorResponse} Success
		 */
		DescribePredictor(requestBody: DescribePredictorRequest): Observable<DescribePredictorResponse> {
			return this.http.post<DescribePredictorResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.DescribePredictor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see <a>metrics</a>.</p> <p>This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't specified, the number defaults to one.</p> <p>The parameters of the <code>filling</code> method determine which items contribute to the metrics. If you want all items to contribute, specify <code>zero</code>. If you want only those items that have complete data in the range being evaluated to contribute, specify <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p> <note> <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the status, use the <a>DescribePredictor</a> operation.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.GetAccuracyMetrics
		 * @return {GetAccuracyMetricsResponse} Success
		 */
		GetAccuracyMetrics(requestBody: GetAccuracyMetricsRequest): Observable<GetAccuracyMetricsResponse> {
			return this.http.post<GetAccuracyMetricsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.GetAccuracyMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset groups created using the <a>CreateDatasetGroup</a> operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the <a>DescribeDatasetGroup</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.ListDatasetGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetGroupsResponse} Success
		 */
		ListDatasetGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetGroupsRequest): Observable<ListDatasetGroupsResponse> {
			return this.http.post<ListDatasetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListDatasetGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset import jobs created using the <a>CreateDatasetImportJob</a> operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a>DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a>Filter</a> objects.
		 * Post #X-Amz-Target=AmazonForecast.ListDatasetImportJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetImportJobsResponse} Success
		 */
		ListDatasetImportJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetImportJobsRequest): Observable<ListDatasetImportJobsResponse> {
			return this.http.post<ListDatasetImportJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListDatasetImportJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of datasets created using the <a>CreateDataset</a> operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the <a>DescribeDataset</a> operation.
		 * Post #X-Amz-Target=AmazonForecast.ListDatasets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetsRequest): Observable<ListDatasetsResponse> {
			return this.http.post<ListDatasetsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListDatasets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns a list of predictors created using the <a>CreatePredictor</a> operation. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the <a>DescribePredictor</a> operation. You can filter the list using an array of <a>Filter</a> objects.
		 * Post #X-Amz-Target=AmazonForecast.ListPredictors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPredictorsResponse} Success
		 */
		ListPredictors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPredictorsRequest): Observable<ListPredictorsResponse> {
			return this.http.post<ListPredictorsResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.ListPredictors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Replaces the datasets in a dataset group with the specified datasets.</p> <note> <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can use the dataset group to create a predictor. Use the <a>DescribeDatasetGroup</a> operation to get the status.</p> </note>
		 * Post #X-Amz-Target=AmazonForecast.UpdateDatasetGroup
		 * @return {UpdateDatasetGroupResponse} Success
		 */
		UpdateDatasetGroup(requestBody: UpdateDatasetGroupRequest): Observable<UpdateDatasetGroupResponse> {
			return this.http.post<UpdateDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonForecast.UpdateDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateDatasetX_Amz_Target { AmazonForecast_CreateDataset = 0 }

	export enum CreateDatasetGroupX_Amz_Target { AmazonForecast_CreateDatasetGroup = 0 }

	export enum CreateDatasetImportJobX_Amz_Target { AmazonForecast_CreateDatasetImportJob = 0 }

	export enum CreateForecastX_Amz_Target { AmazonForecast_CreateForecast = 0 }

	export enum CreateForecastExportJobX_Amz_Target { AmazonForecast_CreateForecastExportJob = 0 }

	export enum CreatePredictorX_Amz_Target { AmazonForecast_CreatePredictor = 0 }

	export enum DeleteDatasetX_Amz_Target { AmazonForecast_DeleteDataset = 0 }

	export enum DeleteDatasetGroupX_Amz_Target { AmazonForecast_DeleteDatasetGroup = 0 }

	export enum DeleteDatasetImportJobX_Amz_Target { AmazonForecast_DeleteDatasetImportJob = 0 }

	export enum DeleteForecastX_Amz_Target { AmazonForecast_DeleteForecast = 0 }

	export enum DeleteForecastExportJobX_Amz_Target { AmazonForecast_DeleteForecastExportJob = 0 }

	export enum DeletePredictorX_Amz_Target { AmazonForecast_DeletePredictor = 0 }

	export enum DescribeDatasetX_Amz_Target { AmazonForecast_DescribeDataset = 0 }

	export enum DescribeDatasetGroupX_Amz_Target { AmazonForecast_DescribeDatasetGroup = 0 }

	export enum DescribeDatasetImportJobX_Amz_Target { AmazonForecast_DescribeDatasetImportJob = 0 }

	export enum DescribeForecastX_Amz_Target { AmazonForecast_DescribeForecast = 0 }

	export enum DescribeForecastExportJobX_Amz_Target { AmazonForecast_DescribeForecastExportJob = 0 }

	export enum DescribePredictorX_Amz_Target { AmazonForecast_DescribePredictor = 0 }

	export enum GetAccuracyMetricsX_Amz_Target { AmazonForecast_GetAccuracyMetrics = 0 }

	export enum ListDatasetGroupsX_Amz_Target { AmazonForecast_ListDatasetGroups = 0 }

	export enum ListDatasetImportJobsX_Amz_Target { AmazonForecast_ListDatasetImportJobs = 0 }

	export enum ListDatasetsX_Amz_Target { AmazonForecast_ListDatasets = 0 }

	export enum ListForecastExportJobsX_Amz_Target { AmazonForecast_ListForecastExportJobs = 0 }

	export enum ListForecastsX_Amz_Target { AmazonForecast_ListForecasts = 0 }

	export enum ListPredictorsX_Amz_Target { AmazonForecast_ListPredictors = 0 }

	export enum UpdateDatasetGroupX_Amz_Target { AmazonForecast_UpdateDatasetGroup = 0 }

}

