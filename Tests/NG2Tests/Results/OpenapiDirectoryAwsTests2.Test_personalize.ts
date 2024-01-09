import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateBatchInferenceJobResponse {

		/** Max length: 256 */
		batchInferenceJobArn?: string | null;
	}
	export interface CreateBatchInferenceJobResponseFormProperties {

		/** Max length: 256 */
		batchInferenceJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchInferenceJobResponseFormGroup() {
		return new FormGroup<CreateBatchInferenceJobResponseFormProperties>({
			batchInferenceJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateBatchInferenceJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		jobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		solutionVersionArn: string;

		/** Max length: 256 */
		filterArn?: string | null;
		numResults?: number | null;

		/**
		 * The input configuration of a batch inference job.
		 * Required
		 */
		jobInput: BatchInferenceJobInput;

		/**
		 * The output configuration parameters of a batch inference job.
		 * Required
		 */
		jobOutput: BatchInferenceJobOutput;

		/**
		 * Required
		 * Max length: 256
		 */
		roleArn: string;
	}
	export interface CreateBatchInferenceJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		jobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		solutionVersionArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		filterArn: FormControl<string | null | undefined>,
		numResults: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchInferenceJobRequestFormGroup() {
		return new FormGroup<CreateBatchInferenceJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			numResults: new FormControl<number | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
		});

	}


	/** The input configuration of a batch inference job. */
	export interface BatchInferenceJobInput {

		/**
		 * The configuration details of an Amazon S3 input or output bucket.
		 * Required
		 */
		s3DataSource: S3DataConfig;
	}

	/** The input configuration of a batch inference job. */
	export interface BatchInferenceJobInputFormProperties {
	}
	export function CreateBatchInferenceJobInputFormGroup() {
		return new FormGroup<BatchInferenceJobInputFormProperties>({
		});

	}


	/** The configuration details of an Amazon S3 input or output bucket. */
	export interface S3DataConfig {

		/**
		 * Required
		 * Max length: 256
		 */
		path: string;
		kmsKeyArn?: string | null;
	}

	/** The configuration details of an Amazon S3 input or output bucket. */
	export interface S3DataConfigFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		path: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3DataConfigFormGroup() {
		return new FormGroup<S3DataConfigFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output configuration parameters of a batch inference job. */
	export interface BatchInferenceJobOutput {

		/**
		 * The configuration details of an Amazon S3 input or output bucket.
		 * Required
		 */
		s3DataDestination: S3DataConfig;
	}

	/** The output configuration parameters of a batch inference job. */
	export interface BatchInferenceJobOutputFormProperties {
	}
	export function CreateBatchInferenceJobOutputFormGroup() {
		return new FormGroup<BatchInferenceJobOutputFormProperties>({
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

	export interface CreateCampaignResponse {

		/** Max length: 256 */
		campaignArn?: string | null;
	}
	export interface CreateCampaignResponseFormProperties {

		/** Max length: 256 */
		campaignArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCampaignResponseFormGroup() {
		return new FormGroup<CreateCampaignResponseFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateCampaignRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 256
		 */
		solutionVersionArn: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		minProvisionedTPS: number;
	}
	export interface CreateCampaignRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		solutionVersionArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		minProvisionedTPS: FormControl<number | null | undefined>,
	}
	export function CreateCreateCampaignRequestFormGroup() {
		return new FormGroup<CreateCampaignRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			minProvisionedTPS: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface CreateDatasetResponse {

		/** Max length: 256 */
		datasetArn?: string | null;
	}
	export interface CreateDatasetResponseFormProperties {

		/** Max length: 256 */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateDatasetRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 256
		 */
		schemaArn: string;

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: string;

		/**
		 * Required
		 * Max length: 256
		 */
		datasetType: string;
	}
	export interface CreateDatasetRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		schemaArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		datasetType: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			datasetType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface CreateDatasetGroupResponse {

		/** Max length: 256 */
		datasetGroupArn?: string | null;
	}
	export interface CreateDatasetGroupResponseFormProperties {

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetGroupResponseFormGroup() {
		return new FormGroup<CreateDatasetGroupResponseFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateDatasetGroupRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: string;

		/** Max length: 256 */
		roleArn?: string | null;
		kmsKeyArn?: string | null;
	}
	export interface CreateDatasetGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		roleArn: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetGroupRequestFormGroup() {
		return new FormGroup<CreateDatasetGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetImportJobResponse {

		/** Max length: 256 */
		datasetImportJobArn?: string | null;
	}
	export interface CreateDatasetImportJobResponseFormProperties {

		/** Max length: 256 */
		datasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetImportJobResponseFormGroup() {
		return new FormGroup<CreateDatasetImportJobResponseFormProperties>({
			datasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateDatasetImportJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		jobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		datasetArn: string;

		/**
		 * Describes the data source that contains the data to upload to a dataset.
		 * Required
		 */
		dataSource: DataSource;

		/**
		 * Required
		 * Max length: 256
		 */
		roleArn: string;
	}
	export interface CreateDatasetImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		jobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		datasetArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetImportJobRequestFormGroup() {
		return new FormGroup<CreateDatasetImportJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
		});

	}


	/** Describes the data source that contains the data to upload to a dataset. */
	export interface DataSource {

		/** Max length: 256 */
		dataLocation?: string | null;
	}

	/** Describes the data source that contains the data to upload to a dataset. */
	export interface DataSourceFormProperties {

		/** Max length: 256 */
		dataLocation: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			dataLocation: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateEventTrackerResponse {

		/** Max length: 256 */
		eventTrackerArn?: string | null;

		/** Max length: 256 */
		trackingId?: string | null;
	}
	export interface CreateEventTrackerResponseFormProperties {

		/** Max length: 256 */
		eventTrackerArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventTrackerResponseFormGroup() {
		return new FormGroup<CreateEventTrackerResponseFormProperties>({
			eventTrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			trackingId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateEventTrackerRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: string;
	}
	export interface CreateEventTrackerRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventTrackerRequestFormGroup() {
		return new FormGroup<CreateEventTrackerRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateFilterResponse {

		/** Max length: 256 */
		filterArn?: string | null;
	}
	export interface CreateFilterResponseFormProperties {

		/** Max length: 256 */
		filterArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterResponseFormGroup() {
		return new FormGroup<CreateFilterResponseFormProperties>({
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateFilterRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: string;

		/**
		 * Required
		 * Max length: 2500
		 * Min length: 1
		 */
		filterExpression: string;
	}
	export interface CreateFilterRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2500
		 * Min length: 1
		 */
		filterExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterRequestFormGroup() {
		return new FormGroup<CreateFilterRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			filterExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2500), Validators.minLength(1)]),
		});

	}

	export interface CreateSchemaResponse {

		/** Max length: 256 */
		schemaArn?: string | null;
	}
	export interface CreateSchemaResponseFormProperties {

		/** Max length: 256 */
		schemaArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaResponseFormGroup() {
		return new FormGroup<CreateSchemaResponseFormProperties>({
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateSchemaRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 10000
		 */
		schema: string;
	}
	export interface CreateSchemaRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 10000
		 */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaRequestFormGroup() {
		return new FormGroup<CreateSchemaRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10000)]),
		});

	}

	export interface CreateSolutionResponse {

		/** Max length: 256 */
		solutionArn?: string | null;
	}
	export interface CreateSolutionResponseFormProperties {

		/** Max length: 256 */
		solutionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSolutionResponseFormGroup() {
		return new FormGroup<CreateSolutionResponseFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateSolutionRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: string;
		performHPO?: boolean | null;
		performAutoML?: boolean | null;

		/** Max length: 256 */
		recipeArn?: string | null;

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: string;

		/** Max length: 256 */
		eventType?: string | null;

		/** Describes the configuration properties for the solution. */
		solutionConfig?: SolutionConfig;
	}
	export interface CreateSolutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		performHPO: FormControl<boolean | null | undefined>,
		performAutoML: FormControl<boolean | null | undefined>,

		/** Max length: 256 */
		recipeArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		eventType: FormControl<string | null | undefined>,
	}
	export function CreateCreateSolutionRequestFormGroup() {
		return new FormGroup<CreateSolutionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			performHPO: new FormControl<boolean | null | undefined>(undefined),
			performAutoML: new FormControl<boolean | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Describes the configuration properties for the solution. */
	export interface SolutionConfig {

		/** Max length: 256 */
		eventValueThreshold?: string | null;

		/** Describes the properties for hyperparameter optimization (HPO). For use with the bring-your-own-recipe feature. Do not use for Amazon Personalize native recipes. */
		hpoConfig?: HPOConfig;
		algorithmHyperParameters?: HyperParameters;
		featureTransformationParameters?: FeatureTransformationParameters;

		/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution. */
		autoMLConfig?: AutoMLConfig;
	}

	/** Describes the configuration properties for the solution. */
	export interface SolutionConfigFormProperties {

		/** Max length: 256 */
		eventValueThreshold: FormControl<string | null | undefined>,
	}
	export function CreateSolutionConfigFormGroup() {
		return new FormGroup<SolutionConfigFormProperties>({
			eventValueThreshold: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Describes the properties for hyperparameter optimization (HPO). For use with the bring-your-own-recipe feature. Do not use for Amazon Personalize native recipes. */
	export interface HPOConfig {

		/** The metric to optimize during hyperparameter optimization (HPO). */
		hpoObjective?: HPOObjective;

		/** Describes the resource configuration for hyperparameter optimization (HPO). */
		hpoResourceConfig?: HPOResourceConfig;

		/** Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
		algorithmHyperParameterRanges?: HyperParameterRanges;
	}

	/** Describes the properties for hyperparameter optimization (HPO). For use with the bring-your-own-recipe feature. Do not use for Amazon Personalize native recipes. */
	export interface HPOConfigFormProperties {
	}
	export function CreateHPOConfigFormGroup() {
		return new FormGroup<HPOConfigFormProperties>({
		});

	}


	/** The metric to optimize during hyperparameter optimization (HPO). */
	export interface HPOObjective {

		/** Max length: 256 */
		type?: string | null;

		/** Max length: 256 */
		metricName?: string | null;

		/** Max length: 256 */
		metricRegex?: string | null;
	}

	/** The metric to optimize during hyperparameter optimization (HPO). */
	export interface HPOObjectiveFormProperties {

		/** Max length: 256 */
		type: FormControl<string | null | undefined>,

		/** Max length: 256 */
		metricName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		metricRegex: FormControl<string | null | undefined>,
	}
	export function CreateHPOObjectiveFormGroup() {
		return new FormGroup<HPOObjectiveFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			metricRegex: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Describes the resource configuration for hyperparameter optimization (HPO). */
	export interface HPOResourceConfig {

		/** Max length: 256 */
		maxNumberOfTrainingJobs?: string | null;

		/** Max length: 256 */
		maxParallelTrainingJobs?: string | null;
	}

	/** Describes the resource configuration for hyperparameter optimization (HPO). */
	export interface HPOResourceConfigFormProperties {

		/** Max length: 256 */
		maxNumberOfTrainingJobs: FormControl<string | null | undefined>,

		/** Max length: 256 */
		maxParallelTrainingJobs: FormControl<string | null | undefined>,
	}
	export function CreateHPOResourceConfigFormGroup() {
		return new FormGroup<HPOResourceConfigFormProperties>({
			maxNumberOfTrainingJobs: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			maxParallelTrainingJobs: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
	export interface HyperParameterRanges {

		/** Maximum items: 100 */
		integerHyperParameterRanges?: Array<IntegerHyperParameterRange>;

		/** Maximum items: 100 */
		continuousHyperParameterRanges?: Array<ContinuousHyperParameterRange>;

		/** Maximum items: 100 */
		categoricalHyperParameterRanges?: Array<CategoricalHyperParameterRange>;
	}

	/** Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
	export interface HyperParameterRangesFormProperties {
	}
	export function CreateHyperParameterRangesFormGroup() {
		return new FormGroup<HyperParameterRangesFormProperties>({
		});

	}


	/** Provides the name and range of an integer-valued hyperparameter. */
	export interface IntegerHyperParameterRange {

		/** Max length: 256 */
		name?: string | null;

		/** Minimum: -1000000 */
		minValue?: number | null;

		/** Maximum: 1000000 */
		maxValue?: number | null;
	}

	/** Provides the name and range of an integer-valued hyperparameter. */
	export interface IntegerHyperParameterRangeFormProperties {

		/** Max length: 256 */
		name: FormControl<string | null | undefined>,

		/** Minimum: -1000000 */
		minValue: FormControl<number | null | undefined>,

		/** Maximum: 1000000 */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateIntegerHyperParameterRangeFormGroup() {
		return new FormGroup<IntegerHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			minValue: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000000)]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.max(1000000)]),
		});

	}


	/** Provides the name and range of a continuous hyperparameter. */
	export interface ContinuousHyperParameterRange {

		/** Max length: 256 */
		name?: string | null;

		/** Minimum: -1000000 */
		minValue?: number | null;

		/** Minimum: -1000000 */
		maxValue?: number | null;
	}

	/** Provides the name and range of a continuous hyperparameter. */
	export interface ContinuousHyperParameterRangeFormProperties {

		/** Max length: 256 */
		name: FormControl<string | null | undefined>,

		/** Minimum: -1000000 */
		minValue: FormControl<number | null | undefined>,

		/** Minimum: -1000000 */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateContinuousHyperParameterRangeFormGroup() {
		return new FormGroup<ContinuousHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			minValue: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000000)]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000000)]),
		});

	}


	/** Provides the name and range of a categorical hyperparameter. */
	export interface CategoricalHyperParameterRange {

		/** Max length: 256 */
		name?: string | null;

		/** Maximum items: 100 */
		values?: Array<string>;
	}

	/** Provides the name and range of a categorical hyperparameter. */
	export interface CategoricalHyperParameterRangeFormProperties {

		/** Max length: 256 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoricalHyperParameterRangeFormGroup() {
		return new FormGroup<CategoricalHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface HyperParameters {
	}
	export interface HyperParametersFormProperties {
	}
	export function CreateHyperParametersFormGroup() {
		return new FormGroup<HyperParametersFormProperties>({
		});

	}

	export interface FeatureTransformationParameters {
	}
	export interface FeatureTransformationParametersFormProperties {
	}
	export function CreateFeatureTransformationParametersFormGroup() {
		return new FormGroup<FeatureTransformationParametersFormProperties>({
		});

	}


	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution. */
	export interface AutoMLConfig {

		/** Max length: 256 */
		metricName?: string | null;

		/** Maximum items: 100 */
		recipeList?: Array<string>;
	}

	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution. */
	export interface AutoMLConfigFormProperties {

		/** Max length: 256 */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLConfigFormGroup() {
		return new FormGroup<AutoMLConfigFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateSolutionVersionResponse {

		/** Max length: 256 */
		solutionVersionArn?: string | null;
	}
	export interface CreateSolutionVersionResponseFormProperties {

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSolutionVersionResponseFormGroup() {
		return new FormGroup<CreateSolutionVersionResponseFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface CreateSolutionVersionRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionArn: string;
		trainingMode?: CreateSolutionVersionRequestTrainingMode | null;
	}
	export interface CreateSolutionVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionArn: FormControl<string | null | undefined>,
		trainingMode: FormControl<CreateSolutionVersionRequestTrainingMode | null | undefined>,
	}
	export function CreateCreateSolutionVersionRequestFormGroup() {
		return new FormGroup<CreateSolutionVersionRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			trainingMode: new FormControl<CreateSolutionVersionRequestTrainingMode | null | undefined>(undefined),
		});

	}

	export enum CreateSolutionVersionRequestTrainingMode { FULL = 0, UPDATE = 1 }

	export interface DeleteCampaignRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		campaignArn: string;
	}
	export interface DeleteCampaignRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		campaignArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCampaignRequestFormGroup() {
		return new FormGroup<DeleteCampaignRequestFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DeleteDatasetRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetArn: string;
	}
	export interface DeleteDatasetRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DeleteDatasetGroupRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: string;
	}
	export interface DeleteDatasetGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetGroupRequestFormGroup() {
		return new FormGroup<DeleteDatasetGroupRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DeleteEventTrackerRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		eventTrackerArn: string;
	}
	export interface DeleteEventTrackerRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		eventTrackerArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventTrackerRequestFormGroup() {
		return new FormGroup<DeleteEventTrackerRequestFormProperties>({
			eventTrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DeleteFilterRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		filterArn: string;
	}
	export interface DeleteFilterRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		filterArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFilterRequestFormGroup() {
		return new FormGroup<DeleteFilterRequestFormProperties>({
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DeleteSchemaRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		schemaArn: string;
	}
	export interface DeleteSchemaRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		schemaArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSchemaRequestFormGroup() {
		return new FormGroup<DeleteSchemaRequestFormProperties>({
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DeleteSolutionRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionArn: string;
	}
	export interface DeleteSolutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSolutionRequestFormGroup() {
		return new FormGroup<DeleteSolutionRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeAlgorithmResponse {

		/** Describes a custom algorithm. */
		algorithm?: Algorithm;
	}
	export interface DescribeAlgorithmResponseFormProperties {
	}
	export function CreateDescribeAlgorithmResponseFormGroup() {
		return new FormGroup<DescribeAlgorithmResponseFormProperties>({
		});

	}


	/** Describes a custom algorithm. */
	export interface Algorithm {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		algorithmArn?: string | null;

		/** Describes an algorithm image. */
		algorithmImage?: AlgorithmImage;
		defaultHyperParameters?: HyperParameters;

		/** Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
		defaultHyperParameterRanges?: DefaultHyperParameterRanges;
		defaultResourceConfig?: ResourceConfig;

		/** Max length: 256 */
		trainingInputMode?: string | null;

		/** Max length: 256 */
		roleArn?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Describes a custom algorithm. */
	export interface AlgorithmFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		algorithmArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		trainingInputMode: FormControl<string | null | undefined>,

		/** Max length: 256 */
		roleArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAlgorithmFormGroup() {
		return new FormGroup<AlgorithmFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			algorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			trainingInputMode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes an algorithm image. */
	export interface AlgorithmImage {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Required
		 * Max length: 256
		 */
		dockerURI: string;
	}

	/** Describes an algorithm image. */
	export interface AlgorithmImageFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		dockerURI: FormControl<string | null | undefined>,
	}
	export function CreateAlgorithmImageFormGroup() {
		return new FormGroup<AlgorithmImageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			dockerURI: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}


	/** Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
	export interface DefaultHyperParameterRanges {

		/** Maximum items: 100 */
		integerHyperParameterRanges?: Array<DefaultIntegerHyperParameterRange>;

		/** Maximum items: 100 */
		continuousHyperParameterRanges?: Array<DefaultContinuousHyperParameterRange>;

		/** Maximum items: 100 */
		categoricalHyperParameterRanges?: Array<DefaultCategoricalHyperParameterRange>;
	}

	/** Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
	export interface DefaultHyperParameterRangesFormProperties {
	}
	export function CreateDefaultHyperParameterRangesFormGroup() {
		return new FormGroup<DefaultHyperParameterRangesFormProperties>({
		});

	}


	/** Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultIntegerHyperParameterRange {

		/** Max length: 256 */
		name?: string | null;

		/** Minimum: -1000000 */
		minValue?: number | null;

		/** Maximum: 1000000 */
		maxValue?: number | null;
		isTunable?: boolean | null;
	}

	/** Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultIntegerHyperParameterRangeFormProperties {

		/** Max length: 256 */
		name: FormControl<string | null | undefined>,

		/** Minimum: -1000000 */
		minValue: FormControl<number | null | undefined>,

		/** Maximum: 1000000 */
		maxValue: FormControl<number | null | undefined>,
		isTunable: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultIntegerHyperParameterRangeFormGroup() {
		return new FormGroup<DefaultIntegerHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			minValue: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000000)]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.max(1000000)]),
			isTunable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultContinuousHyperParameterRange {

		/** Max length: 256 */
		name?: string | null;

		/** Minimum: -1000000 */
		minValue?: number | null;

		/** Minimum: -1000000 */
		maxValue?: number | null;
		isTunable?: boolean | null;
	}

	/** Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultContinuousHyperParameterRangeFormProperties {

		/** Max length: 256 */
		name: FormControl<string | null | undefined>,

		/** Minimum: -1000000 */
		minValue: FormControl<number | null | undefined>,

		/** Minimum: -1000000 */
		maxValue: FormControl<number | null | undefined>,
		isTunable: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultContinuousHyperParameterRangeFormGroup() {
		return new FormGroup<DefaultContinuousHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			minValue: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000000)]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000000)]),
			isTunable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultCategoricalHyperParameterRange {

		/** Max length: 256 */
		name?: string | null;

		/** Maximum items: 100 */
		values?: Array<string>;
		isTunable?: boolean | null;
	}

	/** Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultCategoricalHyperParameterRangeFormProperties {

		/** Max length: 256 */
		name: FormControl<string | null | undefined>,
		isTunable: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultCategoricalHyperParameterRangeFormGroup() {
		return new FormGroup<DefaultCategoricalHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			isTunable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ResourceConfig {
	}
	export interface ResourceConfigFormProperties {
	}
	export function CreateResourceConfigFormGroup() {
		return new FormGroup<ResourceConfigFormProperties>({
		});

	}

	export interface DescribeAlgorithmRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		algorithmArn: string;
	}
	export interface DescribeAlgorithmRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		algorithmArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAlgorithmRequestFormGroup() {
		return new FormGroup<DescribeAlgorithmRequestFormProperties>({
			algorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeBatchInferenceJobResponse {

		/** Contains information on a batch inference job. */
		batchInferenceJob?: BatchInferenceJob;
	}
	export interface DescribeBatchInferenceJobResponseFormProperties {
	}
	export function CreateDescribeBatchInferenceJobResponseFormGroup() {
		return new FormGroup<DescribeBatchInferenceJobResponseFormProperties>({
		});

	}


	/** Contains information on a batch inference job. */
	export interface BatchInferenceJob {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		jobName?: string | null;

		/** Max length: 256 */
		batchInferenceJobArn?: string | null;

		/** Max length: 256 */
		filterArn?: string | null;
		failureReason?: string | null;

		/** Max length: 256 */
		solutionVersionArn?: string | null;
		numResults?: number | null;

		/** The input configuration of a batch inference job. */
		jobInput?: BatchInferenceJobInput;

		/** The output configuration parameters of a batch inference job. */
		jobOutput?: BatchInferenceJobOutput;

		/** Max length: 256 */
		roleArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Contains information on a batch inference job. */
	export interface BatchInferenceJobFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		jobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		batchInferenceJobArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		filterArn: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,
		numResults: FormControl<number | null | undefined>,

		/** Max length: 256 */
		roleArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchInferenceJobFormGroup() {
		return new FormGroup<BatchInferenceJobFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			batchInferenceJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			failureReason: new FormControl<string | null | undefined>(undefined),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			numResults: new FormControl<number | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeBatchInferenceJobRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		batchInferenceJobArn: string;
	}
	export interface DescribeBatchInferenceJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		batchInferenceJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBatchInferenceJobRequestFormGroup() {
		return new FormGroup<DescribeBatchInferenceJobRequestFormProperties>({
			batchInferenceJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeCampaignResponse {

		/** Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>. */
		campaign?: Campaign;
	}
	export interface DescribeCampaignResponseFormProperties {
	}
	export function CreateDescribeCampaignResponseFormGroup() {
		return new FormGroup<DescribeCampaignResponseFormProperties>({
		});

	}


	/** Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>. */
	export interface Campaign {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		campaignArn?: string | null;

		/** Max length: 256 */
		solutionVersionArn?: string | null;

		/** Minimum: 1 */
		minProvisionedTPS?: number | null;

		/** Max length: 256 */
		status?: string | null;
		failureReason?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;

		/** Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API. */
		latestCampaignUpdate?: CampaignUpdateSummary;
	}

	/** Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>. */
	export interface CampaignFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		campaignArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		minProvisionedTPS: FormControl<number | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCampaignFormGroup() {
		return new FormGroup<CampaignFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			minProvisionedTPS: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			failureReason: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API. */
	export interface CampaignUpdateSummary {

		/** Max length: 256 */
		solutionVersionArn?: string | null;

		/** Minimum: 1 */
		minProvisionedTPS?: number | null;

		/** Max length: 256 */
		status?: string | null;
		failureReason?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API. */
	export interface CampaignUpdateSummaryFormProperties {

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		minProvisionedTPS: FormControl<number | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCampaignUpdateSummaryFormGroup() {
		return new FormGroup<CampaignUpdateSummaryFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			minProvisionedTPS: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			failureReason: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeCampaignRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		campaignArn: string;
	}
	export interface DescribeCampaignRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		campaignArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCampaignRequestFormGroup() {
		return new FormGroup<DescribeCampaignRequestFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeDatasetResponse {

		/** Provides metadata for a dataset. */
		dataset?: Dataset;
	}
	export interface DescribeDatasetResponseFormProperties {
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
		});

	}


	/** Provides metadata for a dataset. */
	export interface Dataset {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		datasetArn?: string | null;

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 256 */
		datasetType?: string | null;

		/** Max length: 256 */
		schemaArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides metadata for a dataset. */
	export interface DatasetFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetType: FormControl<string | null | undefined>,

		/** Max length: 256 */
		schemaArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			datasetType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetArn: string;
	}
	export interface DescribeDatasetRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeDatasetGroupResponse {

		/** <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.</p> */
		datasetGroup?: DatasetGroup;
	}
	export interface DescribeDatasetGroupResponseFormProperties {
	}
	export function CreateDescribeDatasetGroupResponseFormGroup() {
		return new FormGroup<DescribeDatasetGroupResponseFormProperties>({
		});

	}


	/** <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.</p> */
	export interface DatasetGroup {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 256 */
		status?: string | null;

		/** Max length: 256 */
		roleArn?: string | null;
		kmsKeyArn?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
		failureReason?: string | null;
	}

	/** <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.</p> */
	export interface DatasetGroupFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,

		/** Max length: 256 */
		roleArn: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateDatasetGroupFormGroup() {
		return new FormGroup<DatasetGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+')]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetGroupRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: string;
	}
	export interface DescribeDatasetGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetGroupRequestFormGroup() {
		return new FormGroup<DescribeDatasetGroupRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeDatasetImportJobResponse {

		/** <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
		datasetImportJob?: DatasetImportJob;
	}
	export interface DescribeDatasetImportJobResponseFormProperties {
	}
	export function CreateDescribeDatasetImportJobResponseFormGroup() {
		return new FormGroup<DescribeDatasetImportJobResponseFormProperties>({
		});

	}


	/** <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
	export interface DatasetImportJob {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		jobName?: string | null;

		/** Max length: 256 */
		datasetImportJobArn?: string | null;

		/** Max length: 256 */
		datasetArn?: string | null;

		/** Describes the data source that contains the data to upload to a dataset. */
		dataSource?: DataSource;

		/** Max length: 256 */
		roleArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
		failureReason?: string | null;
	}

	/** <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
	export interface DatasetImportJobFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		jobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetImportJobArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		roleArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateDatasetImportJobFormGroup() {
		return new FormGroup<DatasetImportJobFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			datasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetImportJobRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetImportJobArn: string;
	}
	export interface DescribeDatasetImportJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		datasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetImportJobRequestFormGroup() {
		return new FormGroup<DescribeDatasetImportJobRequestFormProperties>({
			datasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeEventTrackerResponse {

		/** Provides information about an event tracker. */
		eventTracker?: EventTracker;
	}
	export interface DescribeEventTrackerResponseFormProperties {
	}
	export function CreateDescribeEventTrackerResponseFormGroup() {
		return new FormGroup<DescribeEventTrackerResponseFormProperties>({
		});

	}


	/** Provides information about an event tracker. */
	export interface EventTracker {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		eventTrackerArn?: string | null;

		/** Max length: 256 */
		accountId?: string | null;

		/** Max length: 256 */
		trackingId?: string | null;

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides information about an event tracker. */
	export interface EventTrackerFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		eventTrackerArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		accountId: FormControl<string | null | undefined>,

		/** Max length: 256 */
		trackingId: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateEventTrackerFormGroup() {
		return new FormGroup<EventTrackerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			eventTrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			trackingId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeEventTrackerRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		eventTrackerArn: string;
	}
	export interface DescribeEventTrackerRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		eventTrackerArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventTrackerRequestFormGroup() {
		return new FormGroup<DescribeEventTrackerRequestFormProperties>({
			eventTrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeFeatureTransformationResponse {

		/** Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training. */
		featureTransformation?: FeatureTransformation;
	}
	export interface DescribeFeatureTransformationResponseFormProperties {
	}
	export function CreateDescribeFeatureTransformationResponseFormGroup() {
		return new FormGroup<DescribeFeatureTransformationResponseFormProperties>({
		});

	}


	/** Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training. */
	export interface FeatureTransformation {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		featureTransformationArn?: string | null;
		defaultParameters?: FeaturizationParameters;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;

		/** Max length: 256 */
		status?: string | null;
	}

	/** Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training. */
	export interface FeatureTransformationFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		featureTransformationArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateFeatureTransformationFormGroup() {
		return new FormGroup<FeatureTransformationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			featureTransformationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface FeaturizationParameters {
	}
	export interface FeaturizationParametersFormProperties {
	}
	export function CreateFeaturizationParametersFormGroup() {
		return new FormGroup<FeaturizationParametersFormProperties>({
		});

	}

	export interface DescribeFeatureTransformationRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		featureTransformationArn: string;
	}
	export interface DescribeFeatureTransformationRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		featureTransformationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFeatureTransformationRequestFormGroup() {
		return new FormGroup<DescribeFeatureTransformationRequestFormProperties>({
			featureTransformationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeFilterResponse {

		/** Contains information on a recommendation filter, including its ARN, status, and filter expression. */
		filter?: Filter;
	}
	export interface DescribeFilterResponseFormProperties {
	}
	export function CreateDescribeFilterResponseFormGroup() {
		return new FormGroup<DescribeFilterResponseFormProperties>({
		});

	}


	/** Contains information on a recommendation filter, including its ARN, status, and filter expression. */
	export interface Filter {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		filterArn?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;

		/** Max length: 256 */
		datasetGroupArn?: string | null;
		failureReason?: string | null;

		/**
		 * Max length: 2500
		 * Min length: 1
		 */
		filterExpression?: string | null;

		/** Max length: 256 */
		status?: string | null;
	}

	/** Contains information on a recommendation filter, including its ARN, status, and filter expression. */
	export interface FilterFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		filterArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 2500
		 * Min length: 1
		 */
		filterExpression: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			failureReason: new FormControl<string | null | undefined>(undefined),
			filterExpression: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2500), Validators.minLength(1)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface DescribeFilterRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		filterArn: string;
	}
	export interface DescribeFilterRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		filterArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFilterRequestFormGroup() {
		return new FormGroup<DescribeFilterRequestFormProperties>({
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeRecipeResponse {

		/** Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation. */
		recipe?: Recipe;
	}
	export interface DescribeRecipeResponseFormProperties {
	}
	export function CreateDescribeRecipeResponseFormGroup() {
		return new FormGroup<DescribeRecipeResponseFormProperties>({
		});

	}


	/** Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation.  */
	export interface Recipe {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		recipeArn?: string | null;

		/** Max length: 256 */
		algorithmArn?: string | null;

		/** Max length: 256 */
		featureTransformationArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		description?: string | null;
		creationDateTime?: Date | null;

		/** Max length: 256 */
		recipeType?: string | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation.  */
	export interface RecipeFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		recipeArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		algorithmArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		featureTransformationArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,

		/** Max length: 256 */
		recipeType: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateRecipeFormGroup() {
		return new FormGroup<RecipeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			recipeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			algorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			featureTransformationArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			description: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			recipeType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRecipeRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		recipeArn: string;
	}
	export interface DescribeRecipeRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		recipeArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecipeRequestFormGroup() {
		return new FormGroup<DescribeRecipeRequestFormProperties>({
			recipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeSchemaResponse {

		/** Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>. */
		schema?: DatasetSchema;
	}
	export interface DescribeSchemaResponseFormProperties {
	}
	export function CreateDescribeSchemaResponseFormGroup() {
		return new FormGroup<DescribeSchemaResponseFormProperties>({
		});

	}


	/** Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>. */
	export interface DatasetSchema {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		schemaArn?: string | null;

		/** Max length: 10000 */
		schema?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>. */
	export interface DatasetSchemaFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		schemaArn: FormControl<string | null | undefined>,

		/** Max length: 10000 */
		schema: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetSchemaFormGroup() {
		return new FormGroup<DatasetSchemaFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeSchemaRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		schemaArn: string;
	}
	export interface DescribeSchemaRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		schemaArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSchemaRequestFormGroup() {
		return new FormGroup<DescribeSchemaRequestFormProperties>({
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeSolutionResponse {

		/** An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign. */
		solution?: Solution;
	}
	export interface DescribeSolutionResponseFormProperties {
	}
	export function CreateDescribeSolutionResponseFormGroup() {
		return new FormGroup<DescribeSolutionResponseFormProperties>({
		});

	}


	/** An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign. */
	export interface Solution {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		solutionArn?: string | null;
		performHPO?: boolean | null;
		performAutoML?: boolean | null;

		/** Max length: 256 */
		recipeArn?: string | null;

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 256 */
		eventType?: string | null;

		/** Describes the configuration properties for the solution. */
		solutionConfig?: SolutionConfig;

		/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric. */
		autoMLResult?: AutoMLResult;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;

		/** Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API. */
		latestSolutionVersion?: SolutionVersionSummary;
	}

	/** An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign. */
	export interface SolutionFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		solutionArn: FormControl<string | null | undefined>,
		performHPO: FormControl<boolean | null | undefined>,
		performAutoML: FormControl<boolean | null | undefined>,

		/** Max length: 256 */
		recipeArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		eventType: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSolutionFormGroup() {
		return new FormGroup<SolutionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			performHPO: new FormControl<boolean | null | undefined>(undefined),
			performAutoML: new FormControl<boolean | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric. */
	export interface AutoMLResult {

		/** Max length: 256 */
		bestRecipeArn?: string | null;
	}

	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric. */
	export interface AutoMLResultFormProperties {

		/** Max length: 256 */
		bestRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLResultFormGroup() {
		return new FormGroup<AutoMLResultFormProperties>({
			bestRecipeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}


	/** Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API. */
	export interface SolutionVersionSummary {

		/** Max length: 256 */
		solutionVersionArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
		failureReason?: string | null;
	}

	/** Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API. */
	export interface SolutionVersionSummaryFormProperties {

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateSolutionVersionSummaryFormGroup() {
		return new FormGroup<SolutionVersionSummaryFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSolutionRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionArn: string;
	}
	export interface DescribeSolutionRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSolutionRequestFormGroup() {
		return new FormGroup<DescribeSolutionRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface DescribeSolutionVersionResponse {

		/** An object that provides information about a specific version of a <a>Solution</a>. */
		solutionVersion?: SolutionVersion;
	}
	export interface DescribeSolutionVersionResponseFormProperties {
	}
	export function CreateDescribeSolutionVersionResponseFormGroup() {
		return new FormGroup<DescribeSolutionVersionResponseFormProperties>({
		});

	}


	/** An object that provides information about a specific version of a <a>Solution</a>. */
	export interface SolutionVersion {

		/** Max length: 256 */
		solutionVersionArn?: string | null;

		/** Max length: 256 */
		solutionArn?: string | null;
		performHPO?: boolean | null;
		performAutoML?: boolean | null;

		/** Max length: 256 */
		recipeArn?: string | null;

		/** Max length: 256 */
		eventType?: string | null;

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Describes the configuration properties for the solution. */
		solutionConfig?: SolutionConfig;

		/** Minimum: 0 */
		trainingHours?: number | null;
		trainingMode?: CreateSolutionVersionRequestTrainingMode | null;

		/** If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model. */
		tunedHPOParams?: TunedHPOParams;

		/** Max length: 256 */
		status?: string | null;
		failureReason?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** An object that provides information about a specific version of a <a>Solution</a>. */
	export interface SolutionVersionFormProperties {

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		solutionArn: FormControl<string | null | undefined>,
		performHPO: FormControl<boolean | null | undefined>,
		performAutoML: FormControl<boolean | null | undefined>,

		/** Max length: 256 */
		recipeArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		eventType: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		trainingHours: FormControl<number | null | undefined>,
		trainingMode: FormControl<CreateSolutionVersionRequestTrainingMode | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSolutionVersionFormGroup() {
		return new FormGroup<SolutionVersionFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			performHPO: new FormControl<boolean | null | undefined>(undefined),
			performAutoML: new FormControl<boolean | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			trainingHours: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			trainingMode: new FormControl<CreateSolutionVersionRequestTrainingMode | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			failureReason: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model. */
	export interface TunedHPOParams {
		algorithmHyperParameters?: HyperParameters;
	}

	/** If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model. */
	export interface TunedHPOParamsFormProperties {
	}
	export function CreateTunedHPOParamsFormGroup() {
		return new FormGroup<TunedHPOParamsFormProperties>({
		});

	}

	export interface DescribeSolutionVersionRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionVersionArn: string;
	}
	export interface DescribeSolutionVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSolutionVersionRequestFormGroup() {
		return new FormGroup<DescribeSolutionVersionRequestFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface GetSolutionMetricsResponse {

		/** Max length: 256 */
		solutionVersionArn?: string | null;
		metrics?: Metrics;
	}
	export interface GetSolutionMetricsResponseFormProperties {

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetSolutionMetricsResponseFormGroup() {
		return new FormGroup<GetSolutionMetricsResponseFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface Metrics {
	}
	export interface MetricsFormProperties {
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
		});

	}

	export interface GetSolutionMetricsRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionVersionArn: string;
	}
	export interface GetSolutionMetricsRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetSolutionMetricsRequestFormGroup() {
		return new FormGroup<GetSolutionMetricsRequestFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface ListBatchInferenceJobsResponse {

		/** Maximum items: 100 */
		batchInferenceJobs?: Array<BatchInferenceJobSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListBatchInferenceJobsResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBatchInferenceJobsResponseFormGroup() {
		return new FormGroup<ListBatchInferenceJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries. */
	export interface BatchInferenceJobSummary {

		/** Max length: 256 */
		batchInferenceJobArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		jobName?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
		failureReason?: string | null;

		/** Max length: 256 */
		solutionVersionArn?: string | null;
	}

	/** A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries. */
	export interface BatchInferenceJobSummaryFormProperties {

		/** Max length: 256 */
		batchInferenceJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		jobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchInferenceJobSummaryFormGroup() {
		return new FormGroup<BatchInferenceJobSummaryFormProperties>({
			batchInferenceJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface ListBatchInferenceJobsRequest {

		/** Max length: 256 */
		solutionVersionArn?: string | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListBatchInferenceJobsRequestFormProperties {

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListBatchInferenceJobsRequestFormGroup() {
		return new FormGroup<ListBatchInferenceJobsRequestFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

	export interface ListCampaignsResponse {

		/** Maximum items: 100 */
		campaigns?: Array<CampaignSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListCampaignsResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignsResponseFormGroup() {
		return new FormGroup<ListCampaignsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** Provides a summary of the properties of a campaign. For a complete listing, call the <a>DescribeCampaign</a> API. */
	export interface CampaignSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		campaignArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
		failureReason?: string | null;
	}

	/** Provides a summary of the properties of a campaign. For a complete listing, call the <a>DescribeCampaign</a> API. */
	export interface CampaignSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		campaignArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateCampaignSummaryFormGroup() {
		return new FormGroup<CampaignSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCampaignsRequest {

		/** Max length: 256 */
		solutionArn?: string | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListCampaignsRequestFormProperties {

		/** Max length: 256 */
		solutionArn: FormControl<string | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCampaignsRequestFormGroup() {
		return new FormGroup<ListCampaignsRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListDatasetGroupsResponse {

		/** Maximum items: 100 */
		datasetGroups?: Array<DatasetGroupSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListDatasetGroupsResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetGroupsResponseFormGroup() {
		return new FormGroup<ListDatasetGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** Provides a summary of the properties of a dataset group. For a complete listing, call the <a>DescribeDatasetGroup</a> API. */
	export interface DatasetGroupSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
		failureReason?: string | null;
	}

	/** Provides a summary of the properties of a dataset group. For a complete listing, call the <a>DescribeDatasetGroup</a> API. */
	export interface DatasetGroupSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateDatasetGroupSummaryFormGroup() {
		return new FormGroup<DatasetGroupSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatasetGroupsRequest {

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListDatasetGroupsRequestFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetGroupsRequestFormGroup() {
		return new FormGroup<ListDatasetGroupsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListDatasetImportJobsResponse {

		/** Maximum items: 100 */
		datasetImportJobs?: Array<DatasetImportJobSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListDatasetImportJobsResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetImportJobsResponseFormGroup() {
		return new FormGroup<ListDatasetImportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API. */
	export interface DatasetImportJobSummary {

		/** Max length: 256 */
		datasetImportJobArn?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		jobName?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
		failureReason?: string | null;
	}

	/** Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API. */
	export interface DatasetImportJobSummaryFormProperties {

		/** Max length: 256 */
		datasetImportJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		jobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateDatasetImportJobSummaryFormGroup() {
		return new FormGroup<DatasetImportJobSummaryFormProperties>({
			datasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatasetImportJobsRequest {

		/** Max length: 256 */
		datasetArn?: string | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListDatasetImportJobsRequestFormProperties {

		/** Max length: 256 */
		datasetArn: FormControl<string | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetImportJobsRequestFormGroup() {
		return new FormGroup<ListDatasetImportJobsRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListDatasetsResponse {

		/** Maximum items: 100 */
		datasets?: Array<DatasetSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListDatasetsResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** Provides a summary of the properties of a dataset. For a complete listing, call the <a>DescribeDataset</a> API. */
	export interface DatasetSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		datasetArn?: string | null;

		/** Max length: 256 */
		datasetType?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides a summary of the properties of a dataset. For a complete listing, call the <a>DescribeDataset</a> API. */
	export interface DatasetSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		datasetType: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetSummaryFormGroup() {
		return new FormGroup<DatasetSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			datasetType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsRequest {

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListDatasetsRequestFormProperties {

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListEventTrackersResponse {

		/** Maximum items: 100 */
		eventTrackers?: Array<EventTrackerSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListEventTrackersResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventTrackersResponseFormGroup() {
		return new FormGroup<ListEventTrackersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** Provides a summary of the properties of an event tracker. For a complete listing, call the <a>DescribeEventTracker</a> API. */
	export interface EventTrackerSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		eventTrackerArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides a summary of the properties of an event tracker. For a complete listing, call the <a>DescribeEventTracker</a> API. */
	export interface EventTrackerSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		eventTrackerArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateEventTrackerSummaryFormGroup() {
		return new FormGroup<EventTrackerSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			eventTrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEventTrackersRequest {

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListEventTrackersRequestFormProperties {

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventTrackersRequestFormGroup() {
		return new FormGroup<ListEventTrackersRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListFiltersResponse {

		/** Maximum items: 100 */
		Filters?: Array<FilterSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListFiltersResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFiltersResponseFormGroup() {
		return new FormGroup<ListFiltersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** A short summary of a filter's attributes. */
	export interface FilterSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		filterArn?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;

		/** Max length: 256 */
		datasetGroupArn?: string | null;
		failureReason?: string | null;

		/** Max length: 256 */
		status?: string | null;
	}

	/** A short summary of a filter's attributes. */
	export interface FilterSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		filterArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateFilterSummaryFormGroup() {
		return new FormGroup<FilterSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			failureReason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface ListFiltersRequest {

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListFiltersRequestFormProperties {

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFiltersRequestFormGroup() {
		return new FormGroup<ListFiltersRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListRecipesResponse {

		/** Maximum items: 100 */
		recipes?: Array<RecipeSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListRecipesResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecipesResponseFormGroup() {
		return new FormGroup<ListRecipesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API. */
	export interface RecipeSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		recipeArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API. */
	export interface RecipeSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		recipeArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateRecipeSummaryFormGroup() {
		return new FormGroup<RecipeSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			recipeArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRecipesRequest {
		recipeProvider?: ListRecipesRequestRecipeProvider | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListRecipesRequestFormProperties {
		recipeProvider: FormControl<ListRecipesRequestRecipeProvider | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRecipesRequestFormGroup() {
		return new FormGroup<ListRecipesRequestFormProperties>({
			recipeProvider: new FormControl<ListRecipesRequestRecipeProvider | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum ListRecipesRequestRecipeProvider { SERVICE = 0 }

	export interface ListSchemasResponse {

		/** Maximum items: 100 */
		schemas?: Array<DatasetSchemaSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListSchemasResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasResponseFormGroup() {
		return new FormGroup<ListSchemasResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** Provides a summary of the properties of a dataset schema. For a complete listing, call the <a>DescribeSchema</a> API. */
	export interface DatasetSchemaSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		schemaArn?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides a summary of the properties of a dataset schema. For a complete listing, call the <a>DescribeSchema</a> API. */
	export interface DatasetSchemaSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		schemaArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetSchemaSummaryFormGroup() {
		return new FormGroup<DatasetSchemaSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSchemasRequest {

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListSchemasRequestFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSchemasRequestFormGroup() {
		return new FormGroup<ListSchemasRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListSolutionVersionsResponse {

		/** Maximum items: 100 */
		solutionVersions?: Array<SolutionVersionSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListSolutionVersionsResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolutionVersionsResponseFormGroup() {
		return new FormGroup<ListSolutionVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}

	export interface ListSolutionVersionsRequest {

		/** Max length: 256 */
		solutionArn?: string | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListSolutionVersionsRequestFormProperties {

		/** Max length: 256 */
		solutionArn: FormControl<string | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSolutionVersionsRequestFormGroup() {
		return new FormGroup<ListSolutionVersionsRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListSolutionsResponse {

		/** Maximum items: 100 */
		solutions?: Array<SolutionSummary>;

		/** Max length: 1300 */
		nextToken?: string | null;
	}
	export interface ListSolutionsResponseFormProperties {

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolutionsResponseFormGroup() {
		return new FormGroup<ListSolutionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
		});

	}


	/** Provides a summary of the properties of a solution. For a complete listing, call the <a>DescribeSolution</a> API. */
	export interface SolutionSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 256 */
		solutionArn?: string | null;

		/** Max length: 256 */
		status?: string | null;
		creationDateTime?: Date | null;
		lastUpdatedDateTime?: Date | null;
	}

	/** Provides a summary of the properties of a solution. For a complete listing, call the <a>DescribeSolution</a> API. */
	export interface SolutionSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		solutionArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSolutionSummaryFormGroup() {
		return new FormGroup<SolutionSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9\-_]*')]),
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSolutionsRequest {

		/** Max length: 256 */
		datasetGroupArn?: string | null;

		/** Max length: 1300 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListSolutionsRequestFormProperties {

		/** Max length: 256 */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Max length: 1300 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSolutionsRequestFormGroup() {
		return new FormGroup<ListSolutionsRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1300)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface UpdateCampaignResponse {

		/** Max length: 256 */
		campaignArn?: string | null;
	}
	export interface UpdateCampaignResponseFormProperties {

		/** Max length: 256 */
		campaignArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCampaignResponseFormGroup() {
		return new FormGroup<UpdateCampaignResponseFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface UpdateCampaignRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		campaignArn: string;

		/** Max length: 256 */
		solutionVersionArn?: string | null;

		/** Minimum: 1 */
		minProvisionedTPS?: number | null;
	}
	export interface UpdateCampaignRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		campaignArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		solutionVersionArn: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		minProvisionedTPS: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCampaignRequestFormGroup() {
		return new FormGroup<UpdateCampaignRequestFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
			minProvisionedTPS: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export enum TrainingMode { FULL = 0, UPDATE = 1 }

	export enum RecipeProvider { SERVICE = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a>recommendations-batch</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob
		 * @return {CreateBatchInferenceJobResponse} Success
		 */
		CreateBatchInferenceJob(requestBody: CreateBatchInferenceJobRequest): Observable<CreateBatchInferenceJobResponse> {
			return this.http.post<CreateBatchInferenceJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a campaign by deploying a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>, to maintain a 70% utilization. There's a short time delay while the capacity is increased that might cause loss of transactions. It's recommended to start with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a>DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListCampaigns</a> </p> </li> <li> <p> <a>DescribeCampaign</a> </p> </li> <li> <p> <a>UpdateCampaign</a> </p> </li> <li> <p> <a>DeleteCampaign</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateCampaign
		 * @return {CreateCampaignResponse} Success
		 */
		CreateCampaign(requestBody: CreateCampaignRequest): Observable<CreateCampaignResponse> {
			return this.http.post<CreateCampaignResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an empty dataset and adds it to the specified dataset group. Use <a>CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a>DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>CreateDatasetGroup</a> </p> </li> <li> <p> <a>ListDatasets</a> </p> </li> <li> <p> <a>DescribeDataset</a> </p> </li> <li> <p> <a>DeleteDataset</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateDataset
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetRequest): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an empty dataset group. A dataset group contains related datasets that supply data for training a model. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>To train a model (create a solution), a dataset group that contains an <code>Interactions</code> dataset is required. Call <a>CreateDataset</a> to add a dataset to the group.</p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a>DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an AWS Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a>CreateDataset</a> </p> </li> <li> <p> <a>CreateEventTracker</a> </p> </li> <li> <p> <a>CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListDatasetGroups</a> </p> </li> <li> <p> <a>DescribeDatasetGroup</a> </p> </li> <li> <p> <a>DeleteDatasetGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateDatasetGroup
		 * @return {CreateDatasetGroupResponse} Success
		 */
		CreateDatasetGroup(requestBody: CreateDatasetGroupRequest): Observable<CreateDatasetGroupResponse> {
			return this.http.post<CreateDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an AWS Identity and Access Management (IAM) role that has permission to read from the data source.</p> <important> <p>The dataset import job replaces any previous data in the dataset.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a>DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListDatasetImportJobs</a> </p> </li> <li> <p> <a>DescribeDatasetImportJob</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob
		 * @return {CreateDatasetImportJobResponse} Success
		 */
		CreateDatasetImportJob(requestBody: CreateDatasetImportJobRequest): Observable<CreateDatasetImportJobResponse> {
			return this.http.post<CreateDatasetImportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an event tracker that you use when sending event data to the specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <p>When Amazon Personalize creates an event tracker, it also creates an <i>event-interactions</i> dataset in the dataset group associated with the event tracker. The event-interactions dataset stores the event data from the <code>PutEvents</code> call. The contents of this dataset are not available to the user.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you send event data you include your tracking ID. The tracking ID identifies the customer and authorizes the customer to send the data.</p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a>DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListEventTrackers</a> </p> </li> <li> <p> <a>DescribeEventTracker</a> </p> </li> <li> <p> <a>DeleteEventTracker</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateEventTracker
		 * @return {CreateEventTrackerResponse} Success
		 */
		CreateEventTracker(requestBody: CreateEventTrackerRequest): Observable<CreateEventTrackerResponse> {
			return this.http.post<CreateEventTrackerResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateEventTracker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a recommendation filter. For more information, see Using Filters with Amazon Personalize.
		 * Post #X-Amz-Target=AmazonPersonalize.CreateFilter
		 * @return {CreateFilterResponse} Success
		 */
		CreateFilter(requestBody: CreateFilterRequest): Observable<CreateFilterResponse> {
			return this.http.post<CreateFilterResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. You specify a schema when you call <a>CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSchemas</a> </p> </li> <li> <p> <a>DescribeSchema</a> </p> </li> <li> <p> <a>DeleteSchema</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateSchema
		 * @return {CreateSchemaResponse} Success
		 */
		CreateSchema(requestBody: CreateSchemaRequest): Observable<CreateSchemaResponse> {
			return this.http.post<CreateSchemaResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a>CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a>GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a>CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a>DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSolutions</a> </p> </li> <li> <p> <a>CreateSolutionVersion</a> </p> </li> <li> <p> <a>DescribeSolution</a> </p> </li> <li> <p> <a>DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a>ListSolutionVersions</a> </p> </li> <li> <p> <a>DescribeSolutionVersion</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateSolution
		 * @return {CreateSolutionResponse} Success
		 */
		CreateSolution(requestBody: CreateSolutionRequest): Observable<CreateSolutionResponse> {
			return this.http.post<CreateSolutionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateSolution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Trains or retrains an active solution. A solution is created using the <a>CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the version, call <a>DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSolutionVersions</a> </p> </li> <li> <p> <a>DescribeSolutionVersion</a> </p> </li> </ul> <ul> <li> <p> <a>ListSolutions</a> </p> </li> <li> <p> <a>CreateSolution</a> </p> </li> <li> <p> <a>DescribeSolution</a> </p> </li> <li> <p> <a>DeleteSolution</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateSolutionVersion
		 * @return {CreateSolutionVersionResponse} Success
		 */
		CreateSolutionVersion(requestBody: CreateSolutionVersionRequest): Observable<CreateSolutionVersionResponse> {
			return this.http.post<CreateSolutionVersionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For more information on campaigns, see <a>CreateCampaign</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteCampaign
		 * @return {void} Success
		 */
		DeleteCampaign(requestBody: DeleteCampaignRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a>CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteDataset
		 * @return {void} Success
		 */
		DeleteDataset(requestBody: DeleteDatasetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup
		 * @return {void} Success
		 */
		DeleteDatasetGroup(requestBody: DeleteDatasetGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a>CreateEventTracker</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteEventTracker
		 * @return {void} Success
		 */
		DeleteEventTracker(requestBody: DeleteEventTrackerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteEventTracker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a filter.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteFilter
		 * @return {void} Success
		 */
		DeleteFilter(requestBody: DeleteFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a>CreateSchema</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteSchema
		 * @return {void} Success
		 */
		DeleteSchema(requestBody: DeleteSchemaRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a>ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a>CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteSolution
		 * @return {void} Success
		 */
		DeleteSolution(requestBody: DeleteSolutionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteSolution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the given algorithm.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeAlgorithm
		 * @return {DescribeAlgorithmResponse} Success
		 */
		DescribeAlgorithm(requestBody: DescribeAlgorithmRequest): Observable<DescribeAlgorithmResponse> {
			return this.http.post<DescribeAlgorithmResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob
		 * @return {DescribeBatchInferenceJobResponse} Success
		 */
		DescribeBatchInferenceJob(requestBody: DescribeBatchInferenceJobRequest): Observable<DescribeBatchInferenceJobResponse> {
			return this.http.post<DescribeBatchInferenceJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeCampaign
		 * @return {DescribeCampaignResponse} Success
		 */
		DescribeCampaign(requestBody: DescribeCampaignRequest): Observable<DescribeCampaignResponse> {
			return this.http.post<DescribeCampaignResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the given dataset. For more information on datasets, see <a>CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeDataset
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(requestBody: DescribeDatasetRequest): Observable<DescribeDatasetResponse> {
			return this.http.post<DescribeDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the given dataset group. For more information on dataset groups, see <a>CreateDatasetGroup</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup
		 * @return {DescribeDatasetGroupResponse} Success
		 */
		DescribeDatasetGroup(requestBody: DescribeDatasetGroupRequest): Observable<DescribeDatasetGroupResponse> {
			return this.http.post<DescribeDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the dataset import job created by <a>CreateDatasetImportJob</a>, including the import job status.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob
		 * @return {DescribeDatasetImportJobResponse} Success
		 */
		DescribeDatasetImportJob(requestBody: DescribeDatasetImportJobRequest): Observable<DescribeDatasetImportJobResponse> {
			return this.http.post<DescribeDatasetImportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a>CreateEventTracker</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeEventTracker
		 * @return {DescribeEventTrackerResponse} Success
		 */
		DescribeEventTracker(requestBody: DescribeEventTrackerRequest): Observable<DescribeEventTrackerResponse> {
			return this.http.post<DescribeEventTrackerResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeEventTracker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the given feature transformation.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation
		 * @return {DescribeFeatureTransformationResponse} Success
		 */
		DescribeFeatureTransformation(requestBody: DescribeFeatureTransformationRequest): Observable<DescribeFeatureTransformationResponse> {
			return this.http.post<DescribeFeatureTransformationResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a filter's properties.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeFilter
		 * @return {DescribeFilterResponse} Success
		 */
		DescribeFilter(requestBody: DescribeFilterRequest): Observable<DescribeFilterResponse> {
			return this.http.post<DescribeFilterResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a>CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeRecipe
		 * @return {DescribeRecipeResponse} Success
		 */
		DescribeRecipe(requestBody: DescribeRecipeRequest): Observable<DescribeRecipeResponse> {
			return this.http.post<DescribeRecipeResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeRecipe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a schema. For more information on schemas, see <a>CreateSchema</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeSchema
		 * @return {DescribeSchemaResponse} Success
		 */
		DescribeSchema(requestBody: DescribeSchemaRequest): Observable<DescribeSchemaResponse> {
			return this.http.post<DescribeSchemaResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a solution. For more information on solutions, see <a>CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeSolution
		 * @return {DescribeSolutionResponse} Success
		 */
		DescribeSolution(requestBody: DescribeSolutionRequest): Observable<DescribeSolutionResponse> {
			return this.http.post<DescribeSolutionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeSolution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a specific version of a solution. For more information on solutions, see <a>CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion
		 * @return {DescribeSolutionVersionResponse} Success
		 */
		DescribeSolutionVersion(requestBody: DescribeSolutionVersionRequest): Observable<DescribeSolutionVersionResponse> {
			return this.http.post<DescribeSolutionVersionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the metrics for the specified solution version.
		 * Post #X-Amz-Target=AmazonPersonalize.GetSolutionMetrics
		 * @return {GetSolutionMetricsResponse} Success
		 */
		GetSolutionMetrics(requestBody: GetSolutionMetricsRequest): Observable<GetSolutionMetricsResponse> {
			return this.http.post<GetSolutionMetricsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the batch inference jobs that have been performed off of a solution version.
		 * Post #X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBatchInferenceJobsResponse} Success
		 */
		ListBatchInferenceJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBatchInferenceJobsRequest): Observable<ListBatchInferenceJobsResponse> {
			return this.http.post<ListBatchInferenceJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a>CreateCampaign</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListCampaigns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCampaignsResponse} Success
		 */
		ListCampaigns(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCampaignsRequest): Observable<ListCampaignsResponse> {
			return this.http.post<ListCampaignsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListCampaigns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a>CreateDatasetGroup</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasetGroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetGroupsResponse} Success
		 */
		ListDatasetGroups(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDatasetGroupsRequest): Observable<ListDatasetGroupsResponse> {
			return this.http.post<ListDatasetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasetGroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a>CreateDatasetImportJob</a>. For more information on datasets, see <a>CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetImportJobsResponse} Success
		 */
		ListDatasetImportJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDatasetImportJobsRequest): Observable<ListDatasetImportJobsResponse> {
			return this.http.post<ListDatasetImportJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a>CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDatasetsRequest): Observable<ListDatasetsResponse> {
			return this.http.post<ListDatasetsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a>CreateEventTracker</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListEventTrackers
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEventTrackersResponse} Success
		 */
		ListEventTrackers(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEventTrackersRequest): Observable<ListEventTrackersResponse> {
			return this.http.post<ListEventTrackersResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListEventTrackers?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all filters that belong to a given dataset group.
		 * Post #X-Amz-Target=AmazonPersonalize.ListFilters
		 * @return {ListFiltersResponse} Success
		 */
		ListFilters(requestBody: ListFiltersRequest): Observable<ListFiltersResponse> {
			return this.http.post<ListFiltersResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListFilters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).
		 * Post #X-Amz-Target=AmazonPersonalize.ListRecipes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRecipesResponse} Success
		 */
		ListRecipes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRecipesRequest): Observable<ListRecipesResponse> {
			return this.http.post<ListRecipesResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListRecipes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a>CreateSchema</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListSchemas
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSchemasResponse} Success
		 */
		ListSchemas(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSchemasRequest): Observable<ListSchemasResponse> {
			return this.http.post<ListSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListSchemas?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN). For more information on solutions, see <a>CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListSolutionVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolutionVersionsResponse} Success
		 */
		ListSolutionVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSolutionVersionsRequest): Observable<ListSolutionVersionsResponse> {
			return this.http.post<ListSolutionVersionsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListSolutionVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a>CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListSolutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolutionsResponse} Success
		 */
		ListSolutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSolutionsRequest): Observable<ListSolutionsResponse> {
			return this.http.post<ListSolutionsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListSolutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a>DescribeCampaign</a> API.</p> <note> <p>You must wait until the <code>status</code> of the updated campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
		 * Post #X-Amz-Target=AmazonPersonalize.UpdateCampaign
		 * @return {UpdateCampaignResponse} Success
		 */
		UpdateCampaign(requestBody: UpdateCampaignRequest): Observable<UpdateCampaignResponse> {
			return this.http.post<UpdateCampaignResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.UpdateCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateBatchInferenceJobX_Amz_Target { AmazonPersonalize_CreateBatchInferenceJob = 0 }

	export enum CreateCampaignX_Amz_Target { AmazonPersonalize_CreateCampaign = 0 }

	export enum CreateDatasetX_Amz_Target { AmazonPersonalize_CreateDataset = 0 }

	export enum CreateDatasetGroupX_Amz_Target { AmazonPersonalize_CreateDatasetGroup = 0 }

	export enum CreateDatasetImportJobX_Amz_Target { AmazonPersonalize_CreateDatasetImportJob = 0 }

	export enum CreateEventTrackerX_Amz_Target { AmazonPersonalize_CreateEventTracker = 0 }

	export enum CreateFilterX_Amz_Target { AmazonPersonalize_CreateFilter = 0 }

	export enum CreateSchemaX_Amz_Target { AmazonPersonalize_CreateSchema = 0 }

	export enum CreateSolutionX_Amz_Target { AmazonPersonalize_CreateSolution = 0 }

	export enum CreateSolutionVersionX_Amz_Target { AmazonPersonalize_CreateSolutionVersion = 0 }

	export enum DeleteCampaignX_Amz_Target { AmazonPersonalize_DeleteCampaign = 0 }

	export enum DeleteDatasetX_Amz_Target { AmazonPersonalize_DeleteDataset = 0 }

	export enum DeleteDatasetGroupX_Amz_Target { AmazonPersonalize_DeleteDatasetGroup = 0 }

	export enum DeleteEventTrackerX_Amz_Target { AmazonPersonalize_DeleteEventTracker = 0 }

	export enum DeleteFilterX_Amz_Target { AmazonPersonalize_DeleteFilter = 0 }

	export enum DeleteSchemaX_Amz_Target { AmazonPersonalize_DeleteSchema = 0 }

	export enum DeleteSolutionX_Amz_Target { AmazonPersonalize_DeleteSolution = 0 }

	export enum DescribeAlgorithmX_Amz_Target { AmazonPersonalize_DescribeAlgorithm = 0 }

	export enum DescribeBatchInferenceJobX_Amz_Target { AmazonPersonalize_DescribeBatchInferenceJob = 0 }

	export enum DescribeCampaignX_Amz_Target { AmazonPersonalize_DescribeCampaign = 0 }

	export enum DescribeDatasetX_Amz_Target { AmazonPersonalize_DescribeDataset = 0 }

	export enum DescribeDatasetGroupX_Amz_Target { AmazonPersonalize_DescribeDatasetGroup = 0 }

	export enum DescribeDatasetImportJobX_Amz_Target { AmazonPersonalize_DescribeDatasetImportJob = 0 }

	export enum DescribeEventTrackerX_Amz_Target { AmazonPersonalize_DescribeEventTracker = 0 }

	export enum DescribeFeatureTransformationX_Amz_Target { AmazonPersonalize_DescribeFeatureTransformation = 0 }

	export enum DescribeFilterX_Amz_Target { AmazonPersonalize_DescribeFilter = 0 }

	export enum DescribeRecipeX_Amz_Target { AmazonPersonalize_DescribeRecipe = 0 }

	export enum DescribeSchemaX_Amz_Target { AmazonPersonalize_DescribeSchema = 0 }

	export enum DescribeSolutionX_Amz_Target { AmazonPersonalize_DescribeSolution = 0 }

	export enum DescribeSolutionVersionX_Amz_Target { AmazonPersonalize_DescribeSolutionVersion = 0 }

	export enum GetSolutionMetricsX_Amz_Target { AmazonPersonalize_GetSolutionMetrics = 0 }

	export enum ListBatchInferenceJobsX_Amz_Target { AmazonPersonalize_ListBatchInferenceJobs = 0 }

	export enum ListCampaignsX_Amz_Target { AmazonPersonalize_ListCampaigns = 0 }

	export enum ListDatasetGroupsX_Amz_Target { AmazonPersonalize_ListDatasetGroups = 0 }

	export enum ListDatasetImportJobsX_Amz_Target { AmazonPersonalize_ListDatasetImportJobs = 0 }

	export enum ListDatasetsX_Amz_Target { AmazonPersonalize_ListDatasets = 0 }

	export enum ListEventTrackersX_Amz_Target { AmazonPersonalize_ListEventTrackers = 0 }

	export enum ListFiltersX_Amz_Target { AmazonPersonalize_ListFilters = 0 }

	export enum ListRecipesX_Amz_Target { AmazonPersonalize_ListRecipes = 0 }

	export enum ListSchemasX_Amz_Target { AmazonPersonalize_ListSchemas = 0 }

	export enum ListSolutionVersionsX_Amz_Target { AmazonPersonalize_ListSolutionVersions = 0 }

	export enum ListSolutionsX_Amz_Target { AmazonPersonalize_ListSolutions = 0 }

	export enum UpdateCampaignX_Amz_Target { AmazonPersonalize_UpdateCampaign = 0 }

}

