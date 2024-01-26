import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateBatchInferenceJobResponse {
		batchInferenceJobArn?: string;
	}
	export interface CreateBatchInferenceJobResponseFormProperties {
		batchInferenceJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchInferenceJobResponseFormGroup() {
		return new FormGroup<CreateBatchInferenceJobResponseFormProperties>({
			batchInferenceJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBatchInferenceJobRequest {

		/** Required */
		jobName: string;

		/** Required */
		solutionVersionArn: string;
		filterArn?: string;
		numResults?: number | null;

		/** Required */
		jobInput: BatchInferenceJobInput;

		/** Required */
		jobOutput: BatchInferenceJobOutput;

		/** Required */
		roleArn: string;
		batchInferenceJobConfig?: BatchInferenceJobConfig;
		tags?: Array<Tag>;
	}
	export interface CreateBatchInferenceJobRequestFormProperties {

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		solutionVersionArn: FormControl<string | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
		numResults: FormControl<number | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchInferenceJobRequestFormGroup() {
		return new FormGroup<CreateBatchInferenceJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterArn: new FormControl<string | null | undefined>(undefined),
			numResults: new FormControl<number | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input configuration of a batch inference job. */
	export interface BatchInferenceJobInput {

		/** Required */
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

		/** Required */
		path: string;
		kmsKeyArn?: string;
	}

	/** The configuration details of an Amazon S3 input or output bucket. */
	export interface S3DataConfigFormProperties {

		/** Required */
		path: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3DataConfigFormGroup() {
		return new FormGroup<S3DataConfigFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output configuration parameters of a batch inference job. */
	export interface BatchInferenceJobOutput {

		/** Required */
		s3DataDestination: S3DataConfig;
	}

	/** The output configuration parameters of a batch inference job. */
	export interface BatchInferenceJobOutputFormProperties {
	}
	export function CreateBatchInferenceJobOutputFormGroup() {
		return new FormGroup<BatchInferenceJobOutputFormProperties>({
		});

	}


	/** The configuration details of a batch inference job. */
	export interface BatchInferenceJobConfig {
		itemExplorationConfig?: HyperParameters;
	}

	/** The configuration details of a batch inference job. */
	export interface BatchInferenceJobConfigFormProperties {
	}
	export function CreateBatchInferenceJobConfigFormGroup() {
		return new FormGroup<BatchInferenceJobConfigFormProperties>({
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


	/** The optional metadata that you apply to resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">Tagging Amazon Personalize recources</a>.  */
	export interface Tag {

		/** Required */
		tagKey: string;

		/** Required */
		tagValue: string;
	}

	/** The optional metadata that you apply to resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">Tagging Amazon Personalize recources</a>.  */
	export interface TagFormProperties {

		/** Required */
		tagKey: FormControl<string | null | undefined>,

		/** Required */
		tagValue: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			tagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tagValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface CreateBatchSegmentJobResponse {
		batchSegmentJobArn?: string;
	}
	export interface CreateBatchSegmentJobResponseFormProperties {
		batchSegmentJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchSegmentJobResponseFormGroup() {
		return new FormGroup<CreateBatchSegmentJobResponseFormProperties>({
			batchSegmentJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBatchSegmentJobRequest {

		/** Required */
		jobName: string;

		/** Required */
		solutionVersionArn: string;
		filterArn?: string;
		numResults?: number | null;

		/** Required */
		jobInput: BatchSegmentJobInput;

		/** Required */
		jobOutput: BatchSegmentJobOutput;

		/** Required */
		roleArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateBatchSegmentJobRequestFormProperties {

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		solutionVersionArn: FormControl<string | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
		numResults: FormControl<number | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchSegmentJobRequestFormGroup() {
		return new FormGroup<CreateBatchSegmentJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterArn: new FormControl<string | null | undefined>(undefined),
			numResults: new FormControl<number | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input configuration of a batch segment job. */
	export interface BatchSegmentJobInput {

		/**
		 * The configuration details of an Amazon S3 input or output bucket.
		 * Required
		 */
		s3DataSource: S3DataConfig;
	}

	/** The input configuration of a batch segment job. */
	export interface BatchSegmentJobInputFormProperties {
	}
	export function CreateBatchSegmentJobInputFormGroup() {
		return new FormGroup<BatchSegmentJobInputFormProperties>({
		});

	}


	/** The output configuration parameters of a batch segment job. */
	export interface BatchSegmentJobOutput {

		/**
		 * The configuration details of an Amazon S3 input or output bucket.
		 * Required
		 */
		s3DataDestination: S3DataConfig;
	}

	/** The output configuration parameters of a batch segment job. */
	export interface BatchSegmentJobOutputFormProperties {
	}
	export function CreateBatchSegmentJobOutputFormGroup() {
		return new FormGroup<BatchSegmentJobOutputFormProperties>({
		});

	}

	export interface CreateCampaignResponse {
		campaignArn?: string;
	}
	export interface CreateCampaignResponseFormProperties {
		campaignArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCampaignResponseFormGroup() {
		return new FormGroup<CreateCampaignResponseFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCampaignRequest {

		/** Required */
		name: string;

		/** Required */
		solutionVersionArn: string;
		minProvisionedTPS?: number | null;
		campaignConfig?: CampaignConfig;
		tags?: Array<Tag>;
	}
	export interface CreateCampaignRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		solutionVersionArn: FormControl<string | null | undefined>,
		minProvisionedTPS: FormControl<number | null | undefined>,
	}
	export function CreateCreateCampaignRequestFormGroup() {
		return new FormGroup<CreateCampaignRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minProvisionedTPS: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration details of a campaign. */
	export interface CampaignConfig {
		itemExplorationConfig?: HyperParameters;
	}

	/** The configuration details of a campaign. */
	export interface CampaignConfigFormProperties {
	}
	export function CreateCampaignConfigFormGroup() {
		return new FormGroup<CampaignConfigFormProperties>({
		});

	}

	export interface CreateDatasetResponse {
		datasetArn?: string;
	}
	export interface CreateDatasetResponseFormProperties {
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetRequest {

		/** Required */
		name: string;

		/** Required */
		schemaArn: string;

		/** Required */
		datasetGroupArn: string;

		/** Required */
		datasetType: string;
		tags?: Array<Tag>;
	}
	export interface CreateDatasetRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		schemaArn: FormControl<string | null | undefined>,

		/** Required */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Required */
		datasetType: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datasetType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDatasetExportJobResponse {
		datasetExportJobArn?: string;
	}
	export interface CreateDatasetExportJobResponseFormProperties {
		datasetExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetExportJobResponseFormGroup() {
		return new FormGroup<CreateDatasetExportJobResponseFormProperties>({
			datasetExportJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetExportJobRequest {

		/** Required */
		jobName: string;

		/** Required */
		datasetArn: string;
		ingestionMode?: IngestionMode;

		/** Required */
		roleArn: string;

		/** Required */
		jobOutput: DatasetExportJobOutput;
		tags?: Array<Tag>;
	}
	export interface CreateDatasetExportJobRequestFormProperties {

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		datasetArn: FormControl<string | null | undefined>,
		ingestionMode: FormControl<IngestionMode | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetExportJobRequestFormGroup() {
		return new FormGroup<CreateDatasetExportJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ingestionMode: new FormControl<IngestionMode | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IngestionMode { BULK = 0, PUT = 1, ALL = 2 }


	/** The output configuration parameters of a dataset export job. */
	export interface DatasetExportJobOutput {

		/**
		 * The configuration details of an Amazon S3 input or output bucket.
		 * Required
		 */
		s3DataDestination: S3DataConfig;
	}

	/** The output configuration parameters of a dataset export job. */
	export interface DatasetExportJobOutputFormProperties {
	}
	export function CreateDatasetExportJobOutputFormGroup() {
		return new FormGroup<DatasetExportJobOutputFormProperties>({
		});

	}

	export interface CreateDatasetGroupResponse {
		datasetGroupArn?: string;
		domain?: Domain;
	}
	export interface CreateDatasetGroupResponseFormProperties {
		datasetGroupArn: FormControl<string | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateCreateDatasetGroupResponseFormGroup() {
		return new FormGroup<CreateDatasetGroupResponseFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export enum Domain { ECOMMERCE = 0, VIDEO_ON_DEMAND = 1 }

	export interface CreateDatasetGroupRequest {

		/** Required */
		name: string;
		roleArn?: string;
		kmsKeyArn?: string;
		domain?: Domain;
		tags?: Array<Tag>;
	}
	export interface CreateDatasetGroupRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateCreateDatasetGroupRequestFormGroup() {
		return new FormGroup<CreateDatasetGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetImportJobResponse {
		datasetImportJobArn?: string;
	}
	export interface CreateDatasetImportJobResponseFormProperties {
		datasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetImportJobResponseFormGroup() {
		return new FormGroup<CreateDatasetImportJobResponseFormProperties>({
			datasetImportJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetImportJobRequest {

		/** Required */
		jobName: string;

		/** Required */
		datasetArn: string;

		/** Required */
		dataSource: DataSource;

		/** Required */
		roleArn: string;
		tags?: Array<Tag>;
		importMode?: ImportMode;
		publishAttributionMetricsToS3?: boolean | null;
	}
	export interface CreateDatasetImportJobRequestFormProperties {

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		datasetArn: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		importMode: FormControl<ImportMode | null | undefined>,
		publishAttributionMetricsToS3: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDatasetImportJobRequestFormGroup() {
		return new FormGroup<CreateDatasetImportJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			importMode: new FormControl<ImportMode | null | undefined>(undefined),
			publishAttributionMetricsToS3: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the data source that contains the data to upload to a dataset. */
	export interface DataSource {
		dataLocation?: string;
	}

	/** Describes the data source that contains the data to upload to a dataset. */
	export interface DataSourceFormProperties {
		dataLocation: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			dataLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportMode { FULL = 0, INCREMENTAL = 1 }

	export interface CreateEventTrackerResponse {
		eventTrackerArn?: string;
		trackingId?: string;
	}
	export interface CreateEventTrackerResponseFormProperties {
		eventTrackerArn: FormControl<string | null | undefined>,
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventTrackerResponseFormGroup() {
		return new FormGroup<CreateEventTrackerResponseFormProperties>({
			eventTrackerArn: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventTrackerRequest {

		/** Required */
		name: string;

		/** Required */
		datasetGroupArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateEventTrackerRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		datasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventTrackerRequestFormGroup() {
		return new FormGroup<CreateEventTrackerRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFilterResponse {
		filterArn?: string;
	}
	export interface CreateFilterResponseFormProperties {
		filterArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterResponseFormGroup() {
		return new FormGroup<CreateFilterResponseFormProperties>({
			filterArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFilterRequest {

		/** Required */
		name: string;

		/** Required */
		datasetGroupArn: string;

		/** Required */
		filterExpression: string;
		tags?: Array<Tag>;
	}
	export interface CreateFilterRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Required */
		filterExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateFilterRequestFormGroup() {
		return new FormGroup<CreateFilterRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMetricAttributionResponse {
		metricAttributionArn?: string;
	}
	export interface CreateMetricAttributionResponseFormProperties {
		metricAttributionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMetricAttributionResponseFormGroup() {
		return new FormGroup<CreateMetricAttributionResponseFormProperties>({
			metricAttributionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMetricAttributionRequest {

		/** Required */
		name: string;

		/** Required */
		datasetGroupArn: string;

		/** Required */
		metrics: Array<MetricAttribute>;

		/** Required */
		metricsOutputConfig: MetricAttributionOutput;
	}
	export interface CreateMetricAttributionRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		datasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMetricAttributionRequestFormGroup() {
		return new FormGroup<CreateMetricAttributionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information on a metric that a metric attribution reports on. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>. */
	export interface MetricAttribute {

		/** Required */
		eventType: string;

		/** Required */
		metricName: string;

		/** Required */
		expression: string;
	}

	/** Contains information on a metric that a metric attribution reports on. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>. */
	export interface MetricAttributeFormProperties {

		/** Required */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<string | null | undefined>,

		/** Required */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateMetricAttributeFormGroup() {
		return new FormGroup<MetricAttributeFormProperties>({
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The output configuration details for a metric attribution. */
	export interface MetricAttributionOutput {

		/** The configuration details of an Amazon S3 input or output bucket. */
		s3DataDestination?: S3DataConfig;

		/** Required */
		roleArn: string;
	}

	/** The output configuration details for a metric attribution. */
	export interface MetricAttributionOutputFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateMetricAttributionOutputFormGroup() {
		return new FormGroup<MetricAttributionOutputFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRecommenderResponse {
		recommenderArn?: string;
	}
	export interface CreateRecommenderResponseFormProperties {
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecommenderResponseFormGroup() {
		return new FormGroup<CreateRecommenderResponseFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRecommenderRequest {

		/** Required */
		name: string;

		/** Required */
		datasetGroupArn: string;

		/** Required */
		recipeArn: string;
		recommenderConfig?: RecommenderConfig;
		tags?: Array<Tag>;
	}
	export interface CreateRecommenderRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		datasetGroupArn: FormControl<string | null | undefined>,

		/** Required */
		recipeArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecommenderRequestFormGroup() {
		return new FormGroup<CreateRecommenderRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration details of the recommender. */
	export interface RecommenderConfig {
		itemExplorationConfig?: HyperParameters;
		minRecommendationRequestsPerSecond?: number | null;
		trainingDataConfig?: TrainingDataConfig;
	}

	/** The configuration details of the recommender. */
	export interface RecommenderConfigFormProperties {
		minRecommendationRequestsPerSecond: FormControl<number | null | undefined>,
	}
	export function CreateRecommenderConfigFormGroup() {
		return new FormGroup<RecommenderConfigFormProperties>({
			minRecommendationRequestsPerSecond: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The training data configuration to use when creating a domain recommender or custom solution version (trained model). */
	export interface TrainingDataConfig {
		excludedDatasetColumns?: ExcludedDatasetColumns;
	}

	/** The training data configuration to use when creating a domain recommender or custom solution version (trained model). */
	export interface TrainingDataConfigFormProperties {
	}
	export function CreateTrainingDataConfigFormGroup() {
		return new FormGroup<TrainingDataConfigFormProperties>({
		});

	}

	export interface ExcludedDatasetColumns {
	}
	export interface ExcludedDatasetColumnsFormProperties {
	}
	export function CreateExcludedDatasetColumnsFormGroup() {
		return new FormGroup<ExcludedDatasetColumnsFormProperties>({
		});

	}

	export interface CreateSchemaResponse {
		schemaArn?: string;
	}
	export interface CreateSchemaResponseFormProperties {
		schemaArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaResponseFormGroup() {
		return new FormGroup<CreateSchemaResponseFormProperties>({
			schemaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSchemaRequest {

		/** Required */
		name: string;

		/** Required */
		schema: string;
		domain?: Domain;
	}
	export interface CreateSchemaRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateCreateSchemaRequestFormGroup() {
		return new FormGroup<CreateSchemaRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export interface CreateSolutionResponse {
		solutionArn?: string;
	}
	export interface CreateSolutionResponseFormProperties {
		solutionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSolutionResponseFormGroup() {
		return new FormGroup<CreateSolutionResponseFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSolutionRequest {

		/** Required */
		name: string;
		performHPO?: boolean | null;
		performAutoML?: boolean | null;
		recipeArn?: string;

		/** Required */
		datasetGroupArn: string;
		eventType?: string;
		solutionConfig?: SolutionConfig;
		tags?: Array<Tag>;
	}
	export interface CreateSolutionRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		performHPO: FormControl<boolean | null | undefined>,
		performAutoML: FormControl<boolean | null | undefined>,
		recipeArn: FormControl<string | null | undefined>,

		/** Required */
		datasetGroupArn: FormControl<string | null | undefined>,
		eventType: FormControl<string | null | undefined>,
	}
	export function CreateCreateSolutionRequestFormGroup() {
		return new FormGroup<CreateSolutionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			performHPO: new FormControl<boolean | null | undefined>(undefined),
			performAutoML: new FormControl<boolean | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration properties for the solution. */
	export interface SolutionConfig {
		eventValueThreshold?: string;
		hpoConfig?: HPOConfig;
		algorithmHyperParameters?: HyperParameters;
		featureTransformationParameters?: FeatureTransformationParameters;
		autoMLConfig?: AutoMLConfig;
		optimizationObjective?: OptimizationObjective;
		trainingDataConfig?: TrainingDataConfig;
	}

	/** Describes the configuration properties for the solution. */
	export interface SolutionConfigFormProperties {
		eventValueThreshold: FormControl<string | null | undefined>,
	}
	export function CreateSolutionConfigFormGroup() {
		return new FormGroup<SolutionConfigFormProperties>({
			eventValueThreshold: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties for hyperparameter optimization (HPO). */
	export interface HPOConfig {
		hpoObjective?: HPOObjective;
		hpoResourceConfig?: HPOResourceConfig;
		algorithmHyperParameterRanges?: HyperParameterRanges;
	}

	/** Describes the properties for hyperparameter optimization (HPO). */
	export interface HPOConfigFormProperties {
	}
	export function CreateHPOConfigFormGroup() {
		return new FormGroup<HPOConfigFormProperties>({
		});

	}


	/** <p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note> */
	export interface HPOObjective {
		type?: string;
		metricName?: string;
		metricRegex?: string;
	}

	/** <p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note> */
	export interface HPOObjectiveFormProperties {
		type: FormControl<string | null | undefined>,
		metricName: FormControl<string | null | undefined>,
		metricRegex: FormControl<string | null | undefined>,
	}
	export function CreateHPOObjectiveFormGroup() {
		return new FormGroup<HPOObjectiveFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			metricName: new FormControl<string | null | undefined>(undefined),
			metricRegex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the resource configuration for hyperparameter optimization (HPO). */
	export interface HPOResourceConfig {
		maxNumberOfTrainingJobs?: string;
		maxParallelTrainingJobs?: string;
	}

	/** Describes the resource configuration for hyperparameter optimization (HPO). */
	export interface HPOResourceConfigFormProperties {
		maxNumberOfTrainingJobs: FormControl<string | null | undefined>,
		maxParallelTrainingJobs: FormControl<string | null | undefined>,
	}
	export function CreateHPOResourceConfigFormGroup() {
		return new FormGroup<HPOResourceConfigFormProperties>({
			maxNumberOfTrainingJobs: new FormControl<string | null | undefined>(undefined),
			maxParallelTrainingJobs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
	export interface HyperParameterRanges {
		integerHyperParameterRanges?: Array<IntegerHyperParameterRange>;
		continuousHyperParameterRanges?: Array<ContinuousHyperParameterRange>;
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
		name?: string;
		minValue?: number | null;
		maxValue?: number | null;
	}

	/** Provides the name and range of an integer-valued hyperparameter. */
	export interface IntegerHyperParameterRangeFormProperties {
		name: FormControl<string | null | undefined>,
		minValue: FormControl<number | null | undefined>,
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateIntegerHyperParameterRangeFormGroup() {
		return new FormGroup<IntegerHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the name and range of a continuous hyperparameter. */
	export interface ContinuousHyperParameterRange {
		name?: string;
		minValue?: number | null;
		maxValue?: number | null;
	}

	/** Provides the name and range of a continuous hyperparameter. */
	export interface ContinuousHyperParameterRangeFormProperties {
		name: FormControl<string | null | undefined>,
		minValue: FormControl<number | null | undefined>,
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateContinuousHyperParameterRangeFormGroup() {
		return new FormGroup<ContinuousHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the name and range of a categorical hyperparameter. */
	export interface CategoricalHyperParameterRange {
		name?: string;
		values?: Array<string>;
	}

	/** Provides the name and range of a categorical hyperparameter. */
	export interface CategoricalHyperParameterRangeFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoricalHyperParameterRangeFormGroup() {
		return new FormGroup<CategoricalHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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


	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution. */
	export interface AutoMLConfig {
		metricName?: string;
		recipeList?: Array<string>;
	}

	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution. */
	export interface AutoMLConfigFormProperties {
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLConfigFormGroup() {
		return new FormGroup<AutoMLConfigFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>. */
	export interface OptimizationObjective {
		itemAttribute?: string;
		objectiveSensitivity?: ObjectiveSensitivity;
	}

	/** Describes the additional objective for the solution, such as maximizing streaming minutes or increasing revenue. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/optimizing-solution-for-objective.html">Optimizing a solution</a>. */
	export interface OptimizationObjectiveFormProperties {
		itemAttribute: FormControl<string | null | undefined>,
		objectiveSensitivity: FormControl<ObjectiveSensitivity | null | undefined>,
	}
	export function CreateOptimizationObjectiveFormGroup() {
		return new FormGroup<OptimizationObjectiveFormProperties>({
			itemAttribute: new FormControl<string | null | undefined>(undefined),
			objectiveSensitivity: new FormControl<ObjectiveSensitivity | null | undefined>(undefined),
		});

	}

	export enum ObjectiveSensitivity { LOW = 0, MEDIUM = 1, HIGH = 2, OFF = 3 }

	export interface CreateSolutionVersionResponse {
		solutionVersionArn?: string;
	}
	export interface CreateSolutionVersionResponseFormProperties {
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSolutionVersionResponseFormGroup() {
		return new FormGroup<CreateSolutionVersionResponseFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSolutionVersionRequest {
		name?: string;

		/** Required */
		solutionArn: string;
		trainingMode?: TrainingMode;
		tags?: Array<Tag>;
	}
	export interface CreateSolutionVersionRequestFormProperties {
		name: FormControl<string | null | undefined>,

		/** Required */
		solutionArn: FormControl<string | null | undefined>,
		trainingMode: FormControl<TrainingMode | null | undefined>,
	}
	export function CreateCreateSolutionVersionRequestFormGroup() {
		return new FormGroup<CreateSolutionVersionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trainingMode: new FormControl<TrainingMode | null | undefined>(undefined),
		});

	}

	export enum TrainingMode { FULL = 0, UPDATE = 1 }

	export interface DeleteCampaignRequest {

		/** Required */
		campaignArn: string;
	}
	export interface DeleteCampaignRequestFormProperties {

		/** Required */
		campaignArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCampaignRequestFormGroup() {
		return new FormGroup<DeleteCampaignRequestFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDatasetRequest {

		/** Required */
		datasetArn: string;
	}
	export interface DeleteDatasetRequestFormProperties {

		/** Required */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDatasetGroupRequest {

		/** Required */
		datasetGroupArn: string;
	}
	export interface DeleteDatasetGroupRequestFormProperties {

		/** Required */
		datasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetGroupRequestFormGroup() {
		return new FormGroup<DeleteDatasetGroupRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventTrackerRequest {

		/** Required */
		eventTrackerArn: string;
	}
	export interface DeleteEventTrackerRequestFormProperties {

		/** Required */
		eventTrackerArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventTrackerRequestFormGroup() {
		return new FormGroup<DeleteEventTrackerRequestFormProperties>({
			eventTrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFilterRequest {

		/** Required */
		filterArn: string;
	}
	export interface DeleteFilterRequestFormProperties {

		/** Required */
		filterArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFilterRequestFormGroup() {
		return new FormGroup<DeleteFilterRequestFormProperties>({
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMetricAttributionRequest {

		/** Required */
		metricAttributionArn: string;
	}
	export interface DeleteMetricAttributionRequestFormProperties {

		/** Required */
		metricAttributionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMetricAttributionRequestFormGroup() {
		return new FormGroup<DeleteMetricAttributionRequestFormProperties>({
			metricAttributionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRecommenderRequest {

		/** Required */
		recommenderArn: string;
	}
	export interface DeleteRecommenderRequestFormProperties {

		/** Required */
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecommenderRequestFormGroup() {
		return new FormGroup<DeleteRecommenderRequestFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSchemaRequest {

		/** Required */
		schemaArn: string;
	}
	export interface DeleteSchemaRequestFormProperties {

		/** Required */
		schemaArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSchemaRequestFormGroup() {
		return new FormGroup<DeleteSchemaRequestFormProperties>({
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSolutionRequest {

		/** Required */
		solutionArn: string;
	}
	export interface DeleteSolutionRequestFormProperties {

		/** Required */
		solutionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSolutionRequestFormGroup() {
		return new FormGroup<DeleteSolutionRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAlgorithmResponse {
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
		name?: string;
		algorithmArn?: string;
		algorithmImage?: AlgorithmImage;
		defaultHyperParameters?: HyperParameters;
		defaultHyperParameterRanges?: DefaultHyperParameterRanges;
		defaultResourceConfig?: ResourceConfig;
		trainingInputMode?: string;
		roleArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Describes a custom algorithm. */
	export interface AlgorithmFormProperties {
		name: FormControl<string | null | undefined>,
		algorithmArn: FormControl<string | null | undefined>,
		trainingInputMode: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAlgorithmFormGroup() {
		return new FormGroup<AlgorithmFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			algorithmArn: new FormControl<string | null | undefined>(undefined),
			trainingInputMode: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes an algorithm image. */
	export interface AlgorithmImage {
		name?: string;

		/** Required */
		dockerURI: string;
	}

	/** Describes an algorithm image. */
	export interface AlgorithmImageFormProperties {
		name: FormControl<string | null | undefined>,

		/** Required */
		dockerURI: FormControl<string | null | undefined>,
	}
	export function CreateAlgorithmImageFormGroup() {
		return new FormGroup<AlgorithmImageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			dockerURI: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
	export interface DefaultHyperParameterRanges {
		integerHyperParameterRanges?: Array<DefaultIntegerHyperParameterRange>;
		continuousHyperParameterRanges?: Array<DefaultContinuousHyperParameterRange>;
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
		name?: string;
		minValue?: number | null;
		maxValue?: number | null;
		isTunable?: boolean | null;
	}

	/** Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultIntegerHyperParameterRangeFormProperties {
		name: FormControl<string | null | undefined>,
		minValue: FormControl<number | null | undefined>,
		maxValue: FormControl<number | null | undefined>,
		isTunable: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultIntegerHyperParameterRangeFormGroup() {
		return new FormGroup<DefaultIntegerHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			isTunable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultContinuousHyperParameterRange {
		name?: string;
		minValue?: number | null;
		maxValue?: number | null;
		isTunable?: boolean | null;
	}

	/** Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultContinuousHyperParameterRangeFormProperties {
		name: FormControl<string | null | undefined>,
		minValue: FormControl<number | null | undefined>,
		maxValue: FormControl<number | null | undefined>,
		isTunable: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultContinuousHyperParameterRangeFormGroup() {
		return new FormGroup<DefaultContinuousHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			isTunable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultCategoricalHyperParameterRange {
		name?: string;
		values?: Array<string>;
		isTunable?: boolean | null;
	}

	/** Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultCategoricalHyperParameterRangeFormProperties {
		name: FormControl<string | null | undefined>,
		isTunable: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultCategoricalHyperParameterRangeFormGroup() {
		return new FormGroup<DefaultCategoricalHyperParameterRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		algorithmArn: string;
	}
	export interface DescribeAlgorithmRequestFormProperties {

		/** Required */
		algorithmArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAlgorithmRequestFormGroup() {
		return new FormGroup<DescribeAlgorithmRequestFormProperties>({
			algorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBatchInferenceJobResponse {
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
		jobName?: string;
		batchInferenceJobArn?: string;
		filterArn?: string;
		failureReason?: string;
		solutionVersionArn?: string;
		numResults?: number | null;
		jobInput?: BatchInferenceJobInput;
		jobOutput?: BatchInferenceJobOutput;
		batchInferenceJobConfig?: BatchInferenceJobConfig;
		roleArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Contains information on a batch inference job. */
	export interface BatchInferenceJobFormProperties {
		jobName: FormControl<string | null | undefined>,
		batchInferenceJobArn: FormControl<string | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		solutionVersionArn: FormControl<string | null | undefined>,
		numResults: FormControl<number | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchInferenceJobFormGroup() {
		return new FormGroup<BatchInferenceJobFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			batchInferenceJobArn: new FormControl<string | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			numResults: new FormControl<number | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeBatchInferenceJobRequest {

		/** Required */
		batchInferenceJobArn: string;
	}
	export interface DescribeBatchInferenceJobRequestFormProperties {

		/** Required */
		batchInferenceJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBatchInferenceJobRequestFormGroup() {
		return new FormGroup<DescribeBatchInferenceJobRequestFormProperties>({
			batchInferenceJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBatchSegmentJobResponse {
		batchSegmentJob?: BatchSegmentJob;
	}
	export interface DescribeBatchSegmentJobResponseFormProperties {
	}
	export function CreateDescribeBatchSegmentJobResponseFormGroup() {
		return new FormGroup<DescribeBatchSegmentJobResponseFormProperties>({
		});

	}


	/** Contains information on a batch segment job. */
	export interface BatchSegmentJob {
		jobName?: string;
		batchSegmentJobArn?: string;
		filterArn?: string;
		failureReason?: string;
		solutionVersionArn?: string;
		numResults?: number | null;
		jobInput?: BatchSegmentJobInput;
		jobOutput?: BatchSegmentJobOutput;
		roleArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Contains information on a batch segment job. */
	export interface BatchSegmentJobFormProperties {
		jobName: FormControl<string | null | undefined>,
		batchSegmentJobArn: FormControl<string | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		solutionVersionArn: FormControl<string | null | undefined>,
		numResults: FormControl<number | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBatchSegmentJobFormGroup() {
		return new FormGroup<BatchSegmentJobFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			batchSegmentJobArn: new FormControl<string | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			numResults: new FormControl<number | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeBatchSegmentJobRequest {

		/** Required */
		batchSegmentJobArn: string;
	}
	export interface DescribeBatchSegmentJobRequestFormProperties {

		/** Required */
		batchSegmentJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBatchSegmentJobRequestFormGroup() {
		return new FormGroup<DescribeBatchSegmentJobRequestFormProperties>({
			batchSegmentJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCampaignResponse {
		campaign?: Campaign;
	}
	export interface DescribeCampaignResponseFormProperties {
	}
	export function CreateDescribeCampaignResponseFormGroup() {
		return new FormGroup<DescribeCampaignResponseFormProperties>({
		});

	}


	/** An object that describes the deployment of a solution version. For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. */
	export interface Campaign {
		name?: string;
		campaignArn?: string;
		solutionVersionArn?: string;
		minProvisionedTPS?: number | null;
		campaignConfig?: CampaignConfig;
		status?: string;
		failureReason?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;

		/** Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API. */
		latestCampaignUpdate?: CampaignUpdateSummary;
	}

	/** An object that describes the deployment of a solution version. For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. */
	export interface CampaignFormProperties {
		name: FormControl<string | null | undefined>,
		campaignArn: FormControl<string | null | undefined>,
		solutionVersionArn: FormControl<string | null | undefined>,
		minProvisionedTPS: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCampaignFormGroup() {
		return new FormGroup<CampaignFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			campaignArn: new FormControl<string | null | undefined>(undefined),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			minProvisionedTPS: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API. */
	export interface CampaignUpdateSummary {
		solutionVersionArn?: string;
		minProvisionedTPS?: number | null;

		/** The configuration details of a campaign. */
		campaignConfig?: CampaignConfig;
		status?: string;
		failureReason?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Provides a summary of the properties of a campaign update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API. */
	export interface CampaignUpdateSummaryFormProperties {
		solutionVersionArn: FormControl<string | null | undefined>,
		minProvisionedTPS: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCampaignUpdateSummaryFormGroup() {
		return new FormGroup<CampaignUpdateSummaryFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			minProvisionedTPS: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeCampaignRequest {

		/** Required */
		campaignArn: string;
	}
	export interface DescribeCampaignRequestFormProperties {

		/** Required */
		campaignArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCampaignRequestFormGroup() {
		return new FormGroup<DescribeCampaignRequestFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetResponse {
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
		name?: string;
		datasetArn?: string;
		datasetGroupArn?: string;
		datasetType?: string;
		schemaArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		latestDatasetUpdate?: DatasetUpdateSummary;
	}

	/** Provides metadata for a dataset. */
	export interface DatasetFormProperties {
		name: FormControl<string | null | undefined>,
		datasetArn: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		datasetType: FormControl<string | null | undefined>,
		schemaArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			datasetArn: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			datasetType: new FormControl<string | null | undefined>(undefined),
			schemaArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes an update to a dataset. */
	export interface DatasetUpdateSummary {
		schemaArn?: string;
		status?: string;
		failureReason?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Describes an update to a dataset. */
	export interface DatasetUpdateSummaryFormProperties {
		schemaArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetUpdateSummaryFormGroup() {
		return new FormGroup<DatasetUpdateSummaryFormProperties>({
			schemaArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetRequest {

		/** Required */
		datasetArn: string;
	}
	export interface DescribeDatasetRequestFormProperties {

		/** Required */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetExportJobResponse {
		datasetExportJob?: DatasetExportJob;
	}
	export interface DescribeDatasetExportJobResponseFormProperties {
	}
	export function CreateDescribeDatasetExportJobResponseFormGroup() {
		return new FormGroup<DescribeDatasetExportJobResponseFormProperties>({
		});

	}


	/** <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
	export interface DatasetExportJob {
		jobName?: string;
		datasetExportJobArn?: string;
		datasetArn?: string;
		ingestionMode?: IngestionMode;
		roleArn?: string;
		status?: string;
		jobOutput?: DatasetExportJobOutput;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	/** <p>Describes a job that exports a dataset to an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>.</p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
	export interface DatasetExportJobFormProperties {
		jobName: FormControl<string | null | undefined>,
		datasetExportJobArn: FormControl<string | null | undefined>,
		datasetArn: FormControl<string | null | undefined>,
		ingestionMode: FormControl<IngestionMode | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateDatasetExportJobFormGroup() {
		return new FormGroup<DatasetExportJobFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			datasetExportJobArn: new FormControl<string | null | undefined>(undefined),
			datasetArn: new FormControl<string | null | undefined>(undefined),
			ingestionMode: new FormControl<IngestionMode | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetExportJobRequest {

		/** Required */
		datasetExportJobArn: string;
	}
	export interface DescribeDatasetExportJobRequestFormProperties {

		/** Required */
		datasetExportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetExportJobRequestFormGroup() {
		return new FormGroup<DescribeDatasetExportJobRequestFormProperties>({
			datasetExportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetGroupResponse {
		datasetGroup?: DatasetGroup;
	}
	export interface DescribeDatasetGroupResponseFormProperties {
	}
	export function CreateDescribeDatasetGroupResponseFormGroup() {
		return new FormGroup<DescribeDatasetGroupResponseFormProperties>({
		});

	}


	/** <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>. The dataset group is used to create and train a solution by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.</p> */
	export interface DatasetGroup {
		name?: string;
		datasetGroupArn?: string;
		status?: string;
		roleArn?: string;
		kmsKeyArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
		domain?: Domain;
	}

	/** <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>. The dataset group is used to create and train a solution by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.</p> */
	export interface DatasetGroupFormProperties {
		name: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateDatasetGroupFormGroup() {
		return new FormGroup<DatasetGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetGroupRequest {

		/** Required */
		datasetGroupArn: string;
	}
	export interface DescribeDatasetGroupRequestFormProperties {

		/** Required */
		datasetGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetGroupRequestFormGroup() {
		return new FormGroup<DescribeDatasetGroupRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetImportJobResponse {
		datasetImportJob?: DatasetImportJob;
	}
	export interface DescribeDatasetImportJobResponseFormProperties {
	}
	export function CreateDescribeDatasetImportJobResponseFormGroup() {
		return new FormGroup<DescribeDatasetImportJobResponseFormProperties>({
		});

	}


	/** <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
	export interface DatasetImportJob {
		jobName?: string;
		datasetImportJobArn?: string;
		datasetArn?: string;
		dataSource?: DataSource;
		roleArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
		importMode?: ImportMode;
		publishAttributionMetricsToS3?: boolean | null;
	}

	/** <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
	export interface DatasetImportJobFormProperties {
		jobName: FormControl<string | null | undefined>,
		datasetImportJobArn: FormControl<string | null | undefined>,
		datasetArn: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		importMode: FormControl<ImportMode | null | undefined>,
		publishAttributionMetricsToS3: FormControl<boolean | null | undefined>,
	}
	export function CreateDatasetImportJobFormGroup() {
		return new FormGroup<DatasetImportJobFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			datasetImportJobArn: new FormControl<string | null | undefined>(undefined),
			datasetArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			importMode: new FormControl<ImportMode | null | undefined>(undefined),
			publishAttributionMetricsToS3: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetImportJobRequest {

		/** Required */
		datasetImportJobArn: string;
	}
	export interface DescribeDatasetImportJobRequestFormProperties {

		/** Required */
		datasetImportJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetImportJobRequestFormGroup() {
		return new FormGroup<DescribeDatasetImportJobRequestFormProperties>({
			datasetImportJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEventTrackerResponse {
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
		name?: string;
		eventTrackerArn?: string;
		accountId?: string;
		trackingId?: string;
		datasetGroupArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Provides information about an event tracker. */
	export interface EventTrackerFormProperties {
		name: FormControl<string | null | undefined>,
		eventTrackerArn: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		trackingId: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateEventTrackerFormGroup() {
		return new FormGroup<EventTrackerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			eventTrackerArn: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeEventTrackerRequest {

		/** Required */
		eventTrackerArn: string;
	}
	export interface DescribeEventTrackerRequestFormProperties {

		/** Required */
		eventTrackerArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventTrackerRequestFormGroup() {
		return new FormGroup<DescribeEventTrackerRequestFormProperties>({
			eventTrackerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFeatureTransformationResponse {
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
		name?: string;
		featureTransformationArn?: string;
		defaultParameters?: FeaturizationParameters;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		status?: string;
	}

	/** Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training. */
	export interface FeatureTransformationFormProperties {
		name: FormControl<string | null | undefined>,
		featureTransformationArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateFeatureTransformationFormGroup() {
		return new FormGroup<FeatureTransformationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			featureTransformationArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		featureTransformationArn: string;
	}
	export interface DescribeFeatureTransformationRequestFormProperties {

		/** Required */
		featureTransformationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFeatureTransformationRequestFormGroup() {
		return new FormGroup<DescribeFeatureTransformationRequestFormProperties>({
			featureTransformationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFilterResponse {
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
		name?: string;
		filterArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		datasetGroupArn?: string;
		failureReason?: string;
		filterExpression?: string;
		status?: string;
	}

	/** Contains information on a recommendation filter, including its ARN, status, and filter expression. */
	export interface FilterFormProperties {
		name: FormControl<string | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		filterExpression: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			filterExpression: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFilterRequest {

		/** Required */
		filterArn: string;
	}
	export interface DescribeFilterRequestFormProperties {

		/** Required */
		filterArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFilterRequestFormGroup() {
		return new FormGroup<DescribeFilterRequestFormProperties>({
			filterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeMetricAttributionResponse {
		metricAttribution?: MetricAttribution;
	}
	export interface DescribeMetricAttributionResponseFormProperties {
	}
	export function CreateDescribeMetricAttributionResponseFormGroup() {
		return new FormGroup<DescribeMetricAttributionResponseFormProperties>({
		});

	}


	/** Contains information on a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you import the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>. */
	export interface MetricAttribution {
		name?: string;
		metricAttributionArn?: string;
		datasetGroupArn?: string;
		metricsOutputConfig?: MetricAttributionOutput;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	/** Contains information on a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you import the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>. */
	export interface MetricAttributionFormProperties {
		name: FormControl<string | null | undefined>,
		metricAttributionArn: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateMetricAttributionFormGroup() {
		return new FormGroup<MetricAttributionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			metricAttributionArn: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMetricAttributionRequest {

		/** Required */
		metricAttributionArn: string;
	}
	export interface DescribeMetricAttributionRequestFormProperties {

		/** Required */
		metricAttributionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetricAttributionRequestFormGroup() {
		return new FormGroup<DescribeMetricAttributionRequestFormProperties>({
			metricAttributionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRecipeResponse {
		recipe?: Recipe;
	}
	export interface DescribeRecipeResponseFormProperties {
	}
	export function CreateDescribeRecipeResponseFormGroup() {
		return new FormGroup<DescribeRecipeResponseFormProperties>({
		});

	}


	/** Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation.  */
	export interface Recipe {
		name?: string;
		recipeArn?: string;
		algorithmArn?: string;
		featureTransformationArn?: string;
		status?: string;
		description?: string;
		creationDateTime?: Date;
		recipeType?: string;
		lastUpdatedDateTime?: Date;
	}

	/** Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation.  */
	export interface RecipeFormProperties {
		name: FormControl<string | null | undefined>,
		recipeArn: FormControl<string | null | undefined>,
		algorithmArn: FormControl<string | null | undefined>,
		featureTransformationArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		recipeType: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateRecipeFormGroup() {
		return new FormGroup<RecipeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined),
			algorithmArn: new FormControl<string | null | undefined>(undefined),
			featureTransformationArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			recipeType: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRecipeRequest {

		/** Required */
		recipeArn: string;
	}
	export interface DescribeRecipeRequestFormProperties {

		/** Required */
		recipeArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecipeRequestFormGroup() {
		return new FormGroup<DescribeRecipeRequestFormProperties>({
			recipeArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRecommenderResponse {
		recommender?: Recommender;
	}
	export interface DescribeRecommenderResponseFormProperties {
	}
	export function CreateDescribeRecommenderResponseFormGroup() {
		return new FormGroup<DescribeRecommenderResponseFormProperties>({
		});

	}


	/** Describes a recommendation generator for a Domain dataset group. You create a recommender in a Domain dataset group for a specific domain use case (domain recipe), and specify the recommender in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. */
	export interface Recommender {
		recommenderArn?: string;
		datasetGroupArn?: string;
		name?: string;
		recipeArn?: string;
		recommenderConfig?: RecommenderConfig;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		status?: string;
		failureReason?: string;
		latestRecommenderUpdate?: RecommenderUpdateSummary;
		modelMetrics?: Metrics;
	}

	/** Describes a recommendation generator for a Domain dataset group. You create a recommender in a Domain dataset group for a specific domain use case (domain recipe), and specify the recommender in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. */
	export interface RecommenderFormProperties {
		recommenderArn: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		recipeArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateRecommenderFormGroup() {
		return new FormGroup<RecommenderFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a recommender update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> API. */
	export interface RecommenderUpdateSummary {
		recommenderConfig?: RecommenderConfig;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		status?: string;
		failureReason?: string;
	}

	/** Provides a summary of the properties of a recommender update. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> API. */
	export interface RecommenderUpdateSummaryFormProperties {
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateRecommenderUpdateSummaryFormGroup() {
		return new FormGroup<RecommenderUpdateSummaryFormProperties>({
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
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

	export interface DescribeRecommenderRequest {

		/** Required */
		recommenderArn: string;
	}
	export interface DescribeRecommenderRequestFormProperties {

		/** Required */
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecommenderRequestFormGroup() {
		return new FormGroup<DescribeRecommenderRequestFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSchemaResponse {
		schema?: DatasetSchema;
	}
	export interface DescribeSchemaResponseFormProperties {
	}
	export function CreateDescribeSchemaResponseFormGroup() {
		return new FormGroup<DescribeSchemaResponseFormProperties>({
		});

	}


	/** Describes the schema for a dataset. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>. */
	export interface DatasetSchema {
		name?: string;
		schemaArn?: string;
		schema?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		domain?: Domain;
	}

	/** Describes the schema for a dataset. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>. */
	export interface DatasetSchemaFormProperties {
		name: FormControl<string | null | undefined>,
		schemaArn: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateDatasetSchemaFormGroup() {
		return new FormGroup<DatasetSchemaFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			schemaArn: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export interface DescribeSchemaRequest {

		/** Required */
		schemaArn: string;
	}
	export interface DescribeSchemaRequestFormProperties {

		/** Required */
		schemaArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSchemaRequestFormGroup() {
		return new FormGroup<DescribeSchemaRequestFormProperties>({
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSolutionResponse {
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
		name?: string;
		solutionArn?: string;
		performHPO?: boolean | null;
		performAutoML?: boolean | null;
		recipeArn?: string;
		datasetGroupArn?: string;
		eventType?: string;
		solutionConfig?: SolutionConfig;
		autoMLResult?: AutoMLResult;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		latestSolutionVersion?: SolutionVersionSummary;
	}

	/** An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign. */
	export interface SolutionFormProperties {
		name: FormControl<string | null | undefined>,
		solutionArn: FormControl<string | null | undefined>,
		performHPO: FormControl<boolean | null | undefined>,
		performAutoML: FormControl<boolean | null | undefined>,
		recipeArn: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		eventType: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSolutionFormGroup() {
		return new FormGroup<SolutionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			solutionArn: new FormControl<string | null | undefined>(undefined),
			performHPO: new FormControl<boolean | null | undefined>(undefined),
			performAutoML: new FormControl<boolean | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), specifies the recipe that best optimized the specified metric. */
	export interface AutoMLResult {
		bestRecipeArn?: string;
	}

	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), specifies the recipe that best optimized the specified metric. */
	export interface AutoMLResultFormProperties {
		bestRecipeArn: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLResultFormGroup() {
		return new FormGroup<AutoMLResultFormProperties>({
			bestRecipeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a solution version. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> API. */
	export interface SolutionVersionSummary {
		solutionVersionArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	/** Provides a summary of the properties of a solution version. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> API. */
	export interface SolutionVersionSummaryFormProperties {
		solutionVersionArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateSolutionVersionSummaryFormGroup() {
		return new FormGroup<SolutionVersionSummaryFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSolutionRequest {

		/** Required */
		solutionArn: string;
	}
	export interface DescribeSolutionRequestFormProperties {

		/** Required */
		solutionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSolutionRequestFormGroup() {
		return new FormGroup<DescribeSolutionRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSolutionVersionResponse {
		solutionVersion?: SolutionVersion;
	}
	export interface DescribeSolutionVersionResponseFormProperties {
	}
	export function CreateDescribeSolutionVersionResponseFormGroup() {
		return new FormGroup<DescribeSolutionVersionResponseFormProperties>({
		});

	}


	/** An object that provides information about a specific version of a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html">Solution</a> in a Custom dataset group. */
	export interface SolutionVersion {
		name?: string;
		solutionVersionArn?: string;
		solutionArn?: string;
		performHPO?: boolean | null;
		performAutoML?: boolean | null;
		recipeArn?: string;
		eventType?: string;
		datasetGroupArn?: string;
		solutionConfig?: SolutionConfig;
		trainingHours?: number | null;
		trainingMode?: TrainingMode;
		tunedHPOParams?: TunedHPOParams;
		status?: string;
		failureReason?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** An object that provides information about a specific version of a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html">Solution</a> in a Custom dataset group. */
	export interface SolutionVersionFormProperties {
		name: FormControl<string | null | undefined>,
		solutionVersionArn: FormControl<string | null | undefined>,
		solutionArn: FormControl<string | null | undefined>,
		performHPO: FormControl<boolean | null | undefined>,
		performAutoML: FormControl<boolean | null | undefined>,
		recipeArn: FormControl<string | null | undefined>,
		eventType: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		trainingHours: FormControl<number | null | undefined>,
		trainingMode: FormControl<TrainingMode | null | undefined>,
		status: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSolutionVersionFormGroup() {
		return new FormGroup<SolutionVersionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			solutionArn: new FormControl<string | null | undefined>(undefined),
			performHPO: new FormControl<boolean | null | undefined>(undefined),
			performAutoML: new FormControl<boolean | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			trainingHours: new FormControl<number | null | undefined>(undefined),
			trainingMode: new FormControl<TrainingMode | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		solutionVersionArn: string;
	}
	export interface DescribeSolutionVersionRequestFormProperties {

		/** Required */
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSolutionVersionRequestFormGroup() {
		return new FormGroup<DescribeSolutionVersionRequestFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSolutionMetricsResponse {
		solutionVersionArn?: string;
		metrics?: Metrics;
	}
	export interface GetSolutionMetricsResponseFormProperties {
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetSolutionMetricsResponseFormGroup() {
		return new FormGroup<GetSolutionMetricsResponseFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSolutionMetricsRequest {

		/** Required */
		solutionVersionArn: string;
	}
	export interface GetSolutionMetricsRequestFormProperties {

		/** Required */
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateGetSolutionMetricsRequestFormGroup() {
		return new FormGroup<GetSolutionMetricsRequestFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBatchInferenceJobsResponse {
		batchInferenceJobs?: Array<BatchInferenceJobSummary>;
		nextToken?: string;
	}
	export interface ListBatchInferenceJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBatchInferenceJobsResponseFormGroup() {
		return new FormGroup<ListBatchInferenceJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html">BatchInferenceJob</a>. The <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html">ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries. */
	export interface BatchInferenceJobSummary {
		batchInferenceJobArn?: string;
		jobName?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
		solutionVersionArn?: string;
	}

	/** A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html">BatchInferenceJob</a>. The <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html">ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries. */
	export interface BatchInferenceJobSummaryFormProperties {
		batchInferenceJobArn: FormControl<string | null | undefined>,
		jobName: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchInferenceJobSummaryFormGroup() {
		return new FormGroup<BatchInferenceJobSummaryFormProperties>({
			batchInferenceJobArn: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBatchInferenceJobsRequest {
		solutionVersionArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListBatchInferenceJobsRequestFormProperties {
		solutionVersionArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListBatchInferenceJobsRequestFormGroup() {
		return new FormGroup<ListBatchInferenceJobsRequestFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface ListBatchSegmentJobsResponse {
		batchSegmentJobs?: Array<BatchSegmentJobSummary>;
		nextToken?: string;
	}
	export interface ListBatchSegmentJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBatchSegmentJobsResponseFormGroup() {
		return new FormGroup<ListBatchSegmentJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html">BatchSegmentJob</a> datatype. <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html">ListBatchSegmentJobs</a> operation returns a list of batch segment job summaries. */
	export interface BatchSegmentJobSummary {
		batchSegmentJobArn?: string;
		jobName?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
		solutionVersionArn?: string;
	}

	/** A truncated version of the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html">BatchSegmentJob</a> datatype. <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html">ListBatchSegmentJobs</a> operation returns a list of batch segment job summaries. */
	export interface BatchSegmentJobSummaryFormProperties {
		batchSegmentJobArn: FormControl<string | null | undefined>,
		jobName: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchSegmentJobSummaryFormGroup() {
		return new FormGroup<BatchSegmentJobSummaryFormProperties>({
			batchSegmentJobArn: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBatchSegmentJobsRequest {
		solutionVersionArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListBatchSegmentJobsRequestFormProperties {
		solutionVersionArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListBatchSegmentJobsRequestFormGroup() {
		return new FormGroup<ListBatchSegmentJobsRequestFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListCampaignsResponse {
		campaigns?: Array<CampaignSummary>;
		nextToken?: string;
	}
	export interface ListCampaignsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignsResponseFormGroup() {
		return new FormGroup<ListCampaignsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a campaign. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API. */
	export interface CampaignSummary {
		name?: string;
		campaignArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	/** Provides a summary of the properties of a campaign. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> API. */
	export interface CampaignSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		campaignArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateCampaignSummaryFormGroup() {
		return new FormGroup<CampaignSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			campaignArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCampaignsRequest {
		solutionArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListCampaignsRequestFormProperties {
		solutionArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCampaignsRequestFormGroup() {
		return new FormGroup<ListCampaignsRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatasetExportJobsResponse {
		datasetExportJobs?: Array<DatasetExportJobSummary>;
		nextToken?: string;
	}
	export interface ListDatasetExportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetExportJobsResponseFormGroup() {
		return new FormGroup<ListDatasetExportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a dataset export job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a> API. */
	export interface DatasetExportJobSummary {
		datasetExportJobArn?: string;
		jobName?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	/** Provides a summary of the properties of a dataset export job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a> API. */
	export interface DatasetExportJobSummaryFormProperties {
		datasetExportJobArn: FormControl<string | null | undefined>,
		jobName: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateDatasetExportJobSummaryFormGroup() {
		return new FormGroup<DatasetExportJobSummaryFormProperties>({
			datasetExportJobArn: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatasetExportJobsRequest {
		datasetArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDatasetExportJobsRequestFormProperties {
		datasetArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetExportJobsRequestFormGroup() {
		return new FormGroup<ListDatasetExportJobsRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatasetGroupsResponse {
		datasetGroups?: Array<DatasetGroupSummary>;
		nextToken?: string;
	}
	export interface ListDatasetGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetGroupsResponseFormGroup() {
		return new FormGroup<ListDatasetGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a dataset group. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> API. */
	export interface DatasetGroupSummary {
		name?: string;
		datasetGroupArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
		domain?: Domain;
	}

	/** Provides a summary of the properties of a dataset group. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> API. */
	export interface DatasetGroupSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateDatasetGroupSummaryFormGroup() {
		return new FormGroup<DatasetGroupSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export interface ListDatasetGroupsRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDatasetGroupsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetGroupsRequestFormGroup() {
		return new FormGroup<ListDatasetGroupsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatasetImportJobsResponse {
		datasetImportJobs?: Array<DatasetImportJobSummary>;
		nextToken?: string;
	}
	export interface ListDatasetImportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetImportJobsResponseFormGroup() {
		return new FormGroup<ListDatasetImportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a dataset import job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> API. */
	export interface DatasetImportJobSummary {
		datasetImportJobArn?: string;
		jobName?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
		importMode?: ImportMode;
	}

	/** Provides a summary of the properties of a dataset import job. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> API. */
	export interface DatasetImportJobSummaryFormProperties {
		datasetImportJobArn: FormControl<string | null | undefined>,
		jobName: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		importMode: FormControl<ImportMode | null | undefined>,
	}
	export function CreateDatasetImportJobSummaryFormGroup() {
		return new FormGroup<DatasetImportJobSummaryFormProperties>({
			datasetImportJobArn: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			importMode: new FormControl<ImportMode | null | undefined>(undefined),
		});

	}

	export interface ListDatasetImportJobsRequest {
		datasetArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDatasetImportJobsRequestFormProperties {
		datasetArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetImportJobsRequestFormGroup() {
		return new FormGroup<ListDatasetImportJobsRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsResponse {
		datasets?: Array<DatasetSummary>;
		nextToken?: string;
	}
	export interface ListDatasetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a dataset. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> API. */
	export interface DatasetSummary {
		name?: string;
		datasetArn?: string;
		datasetType?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Provides a summary of the properties of a dataset. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> API. */
	export interface DatasetSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		datasetArn: FormControl<string | null | undefined>,
		datasetType: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetSummaryFormGroup() {
		return new FormGroup<DatasetSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			datasetArn: new FormControl<string | null | undefined>(undefined),
			datasetType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListDatasetsRequestFormProperties {
		datasetGroupArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEventTrackersResponse {
		eventTrackers?: Array<EventTrackerSummary>;
		nextToken?: string;
	}
	export interface ListEventTrackersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventTrackersResponseFormGroup() {
		return new FormGroup<ListEventTrackersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of an event tracker. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> API. */
	export interface EventTrackerSummary {
		name?: string;
		eventTrackerArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Provides a summary of the properties of an event tracker. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> API. */
	export interface EventTrackerSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		eventTrackerArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateEventTrackerSummaryFormGroup() {
		return new FormGroup<EventTrackerSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			eventTrackerArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEventTrackersRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListEventTrackersRequestFormProperties {
		datasetGroupArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventTrackersRequestFormGroup() {
		return new FormGroup<ListEventTrackersRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFiltersResponse {
		Filters?: Array<FilterSummary>;
		nextToken?: string;
	}
	export interface ListFiltersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFiltersResponseFormGroup() {
		return new FormGroup<ListFiltersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A short summary of a filter's attributes. */
	export interface FilterSummary {
		name?: string;
		filterArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		datasetGroupArn?: string;
		failureReason?: string;
		status?: string;
	}

	/** A short summary of a filter's attributes. */
	export interface FilterSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		filterArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateFilterSummaryFormGroup() {
		return new FormGroup<FilterSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			filterArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFiltersRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListFiltersRequestFormProperties {
		datasetGroupArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFiltersRequestFormGroup() {
		return new FormGroup<ListFiltersRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMetricAttributionMetricsResponse {
		metrics?: Array<MetricAttribute>;
		nextToken?: string;
	}
	export interface ListMetricAttributionMetricsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricAttributionMetricsResponseFormGroup() {
		return new FormGroup<ListMetricAttributionMetricsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMetricAttributionMetricsRequest {
		metricAttributionArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListMetricAttributionMetricsRequestFormProperties {
		metricAttributionArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMetricAttributionMetricsRequestFormGroup() {
		return new FormGroup<ListMetricAttributionMetricsRequestFormProperties>({
			metricAttributionArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMetricAttributionsResponse {
		metricAttributions?: Array<MetricAttributionSummary>;
		nextToken?: string;
	}
	export interface ListMetricAttributionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricAttributionsResponseFormGroup() {
		return new FormGroup<ListMetricAttributionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a metric attribution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html">DescribeMetricAttribution</a>. */
	export interface MetricAttributionSummary {
		name?: string;
		metricAttributionArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	/** Provides a summary of the properties of a metric attribution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeMetricAttribution.html">DescribeMetricAttribution</a>. */
	export interface MetricAttributionSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		metricAttributionArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateMetricAttributionSummaryFormGroup() {
		return new FormGroup<MetricAttributionSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			metricAttributionArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMetricAttributionsRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListMetricAttributionsRequestFormProperties {
		datasetGroupArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMetricAttributionsRequestFormGroup() {
		return new FormGroup<ListMetricAttributionsRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRecipesResponse {
		recipes?: Array<RecipeSummary>;
		nextToken?: string;
	}
	export interface ListRecipesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecipesResponseFormGroup() {
		return new FormGroup<ListRecipesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a recipe. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html">DescribeRecipe</a> API. */
	export interface RecipeSummary {
		name?: string;
		recipeArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		domain?: Domain;
	}

	/** Provides a summary of the properties of a recipe. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html">DescribeRecipe</a> API. */
	export interface RecipeSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		recipeArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateRecipeSummaryFormGroup() {
		return new FormGroup<RecipeSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export interface ListRecipesRequest {
		recipeProvider?: RecipeProvider;
		nextToken?: string;
		maxResults?: number | null;
		domain?: Domain;
	}
	export interface ListRecipesRequestFormProperties {
		recipeProvider: FormControl<RecipeProvider | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateListRecipesRequestFormGroup() {
		return new FormGroup<ListRecipesRequestFormProperties>({
			recipeProvider: new FormControl<RecipeProvider | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export enum RecipeProvider { SERVICE = 0 }

	export interface ListRecommendersResponse {
		recommenders?: Array<RecommenderSummary>;
		nextToken?: string;
	}
	export interface ListRecommendersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendersResponseFormGroup() {
		return new FormGroup<ListRecommendersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of the recommender. */
	export interface RecommenderSummary {
		name?: string;
		recommenderArn?: string;
		datasetGroupArn?: string;
		recipeArn?: string;
		recommenderConfig?: RecommenderConfig;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	/** Provides a summary of the properties of the recommender. */
	export interface RecommenderSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		recommenderArn: FormControl<string | null | undefined>,
		datasetGroupArn: FormControl<string | null | undefined>,
		recipeArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateRecommenderSummaryFormGroup() {
		return new FormGroup<RecommenderSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			recommenderArn: new FormControl<string | null | undefined>(undefined),
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRecommendersRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListRecommendersRequestFormProperties {
		datasetGroupArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRecommendersRequestFormGroup() {
		return new FormGroup<ListRecommendersRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSchemasResponse {
		schemas?: Array<DatasetSchemaSummary>;
		nextToken?: string;
	}
	export interface ListSchemasResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasResponseFormGroup() {
		return new FormGroup<ListSchemasResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a dataset schema. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> API. */
	export interface DatasetSchemaSummary {
		name?: string;
		schemaArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		domain?: Domain;
	}

	/** Provides a summary of the properties of a dataset schema. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> API. */
	export interface DatasetSchemaSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		schemaArn: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		domain: FormControl<Domain | null | undefined>,
	}
	export function CreateDatasetSchemaSummaryFormGroup() {
		return new FormGroup<DatasetSchemaSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			schemaArn: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			domain: new FormControl<Domain | null | undefined>(undefined),
		});

	}

	export interface ListSchemasRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListSchemasRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSchemasRequestFormGroup() {
		return new FormGroup<ListSchemasRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSolutionVersionsResponse {
		solutionVersions?: Array<SolutionVersionSummary>;
		nextToken?: string;
	}
	export interface ListSolutionVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolutionVersionsResponseFormGroup() {
		return new FormGroup<ListSolutionVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSolutionVersionsRequest {
		solutionArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListSolutionVersionsRequestFormProperties {
		solutionArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSolutionVersionsRequestFormGroup() {
		return new FormGroup<ListSolutionVersionsRequestFormProperties>({
			solutionArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSolutionsResponse {
		solutions?: Array<SolutionSummary>;
		nextToken?: string;
	}
	export interface ListSolutionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSolutionsResponseFormGroup() {
		return new FormGroup<ListSolutionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of the properties of a solution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API. */
	export interface SolutionSummary {
		name?: string;
		solutionArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		recipeArn?: string;
	}

	/** Provides a summary of the properties of a solution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API. */
	export interface SolutionSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		solutionArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		recipeArn: FormControl<string | null | undefined>,
	}
	export function CreateSolutionSummaryFormGroup() {
		return new FormGroup<SolutionSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			solutionArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			recipeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSolutionsRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListSolutionsRequestFormProperties {
		datasetGroupArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSolutionsRequestFormGroup() {
		return new FormGroup<ListSolutionsRequestFormProperties>({
			datasetGroupArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartRecommenderResponse {
		recommenderArn?: string;
	}
	export interface StartRecommenderResponseFormProperties {
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateStartRecommenderResponseFormGroup() {
		return new FormGroup<StartRecommenderResponseFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRecommenderRequest {

		/** Required */
		recommenderArn: string;
	}
	export interface StartRecommenderRequestFormProperties {

		/** Required */
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateStartRecommenderRequestFormGroup() {
		return new FormGroup<StartRecommenderRequestFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopRecommenderResponse {
		recommenderArn?: string;
	}
	export interface StopRecommenderResponseFormProperties {
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateStopRecommenderResponseFormGroup() {
		return new FormGroup<StopRecommenderResponseFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopRecommenderRequest {

		/** Required */
		recommenderArn: string;
	}
	export interface StopRecommenderRequestFormProperties {

		/** Required */
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateStopRecommenderRequestFormGroup() {
		return new FormGroup<StopRecommenderRequestFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopSolutionVersionCreationRequest {

		/** Required */
		solutionVersionArn: string;
	}
	export interface StopSolutionVersionCreationRequestFormProperties {

		/** Required */
		solutionVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateStopSolutionVersionCreationRequestFormGroup() {
		return new FormGroup<StopSolutionVersionCreationRequestFormProperties>({
			solutionVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TooManyTagKeysException {
	}
	export interface TooManyTagKeysExceptionFormProperties {
	}
	export function CreateTooManyTagKeysExceptionFormGroup() {
		return new FormGroup<TooManyTagKeysExceptionFormProperties>({
		});

	}

	export interface UpdateCampaignResponse {
		campaignArn?: string;
	}
	export interface UpdateCampaignResponseFormProperties {
		campaignArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCampaignResponseFormGroup() {
		return new FormGroup<UpdateCampaignResponseFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCampaignRequest {

		/** Required */
		campaignArn: string;
		solutionVersionArn?: string;
		minProvisionedTPS?: number | null;
		campaignConfig?: CampaignConfig;
	}
	export interface UpdateCampaignRequestFormProperties {

		/** Required */
		campaignArn: FormControl<string | null | undefined>,
		solutionVersionArn: FormControl<string | null | undefined>,
		minProvisionedTPS: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCampaignRequestFormGroup() {
		return new FormGroup<UpdateCampaignRequestFormProperties>({
			campaignArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			solutionVersionArn: new FormControl<string | null | undefined>(undefined),
			minProvisionedTPS: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDatasetResponse {
		datasetArn?: string;
	}
	export interface UpdateDatasetResponseFormProperties {
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetResponseFormGroup() {
		return new FormGroup<UpdateDatasetResponseFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDatasetRequest {

		/** Required */
		datasetArn: string;

		/** Required */
		schemaArn: string;
	}
	export interface UpdateDatasetRequestFormProperties {

		/** Required */
		datasetArn: FormControl<string | null | undefined>,

		/** Required */
		schemaArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetRequestFormGroup() {
		return new FormGroup<UpdateDatasetRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMetricAttributionResponse {
		metricAttributionArn?: string;
	}
	export interface UpdateMetricAttributionResponseFormProperties {
		metricAttributionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMetricAttributionResponseFormGroup() {
		return new FormGroup<UpdateMetricAttributionResponseFormProperties>({
			metricAttributionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMetricAttributionRequest {
		addMetrics?: Array<MetricAttribute>;
		removeMetrics?: Array<string>;
		metricsOutputConfig?: MetricAttributionOutput;
		metricAttributionArn?: string;
	}
	export interface UpdateMetricAttributionRequestFormProperties {
		metricAttributionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMetricAttributionRequestFormGroup() {
		return new FormGroup<UpdateMetricAttributionRequestFormProperties>({
			metricAttributionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRecommenderResponse {
		recommenderArn?: string;
	}
	export interface UpdateRecommenderResponseFormProperties {
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecommenderResponseFormGroup() {
		return new FormGroup<UpdateRecommenderResponseFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRecommenderRequest {

		/** Required */
		recommenderArn: string;

		/** Required */
		recommenderConfig: RecommenderConfig;
	}
	export interface UpdateRecommenderRequestFormProperties {

		/** Required */
		recommenderArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecommenderRequestFormGroup() {
		return new FormGroup<UpdateRecommenderRequestFormProperties>({
			recommenderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/creating-batch-inference-job.html">Creating a batch inference job</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob
		 * @return {CreateBatchInferenceJobResponse} Success
		 */
		CreateBatchInferenceJob(requestBody: CreateBatchInferenceJobRequest): Observable<CreateBatchInferenceJobResponse> {
			return this.http.post<CreateBatchInferenceJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a batch segment job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recommendations-batch.html">Getting batch recommendations and user segments</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob
		 * @return {CreateBatchSegmentJobResponse} Success
		 */
		CreateBatchSegmentJob(requestBody: CreateBatchSegmentJobRequest): Observable<CreateBatchSegmentJobResponse> {
			return this.http.post<CreateBatchSegmentJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a campaign that deploys a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <important> <p> A high <code>minProvisionedTPS</code> will increase your bill. We recommend starting with 1 for <code>minProvisionedTPS</code> (the default). Track your usage using Amazon CloudWatch metrics, and increase the <code>minProvisionedTPS</code> as necessary.</p> </important> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There's a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html">UpdateCampaign</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html">DeleteCampaign</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateCampaign
		 * @return {CreateCampaignResponse} Success
		 */
		CreateCampaign(requestBody: CreateCampaignRequest): Observable<CreateCampaignResponse> {
			return this.http.post<CreateCampaignResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an empty dataset and adds it to the specified dataset group. Use <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html">ListDatasets</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html">DescribeDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html">DeleteDataset</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateDataset
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetRequest): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob
		 * @return {CreateDatasetExportJobResponse} Success
		 */
		CreateDatasetExportJob(requestBody: CreateDatasetExportJobRequest): Observable<CreateDatasetExportJobResponse> {
			return this.http.post<CreateDatasetExportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p> A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns. </p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateDatasetGroup
		 * @return {CreateDatasetGroupResponse} Success
		 */
		CreateDatasetGroup(requestBody: CreateDatasetGroupRequest): Observable<CreateDatasetGroupResponse> {
			return this.http.post<CreateDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob
		 * @return {CreateDatasetImportJobResponse} Success
		 */
		CreateDatasetImportJob(requestBody: CreateDatasetImportJobRequest): Observable<CreateDatasetImportJobResponse> {
			return this.http.post<CreateDatasetImportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateEventTracker
		 * @return {CreateEventTrackerResponse} Success
		 */
		CreateEventTracker(requestBody: CreateEventTrackerRequest): Observable<CreateEventTrackerResponse> {
			return this.http.post<CreateEventTrackerResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateEventTracker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a recommendation filter. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering recommendations and user segments</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.CreateFilter
		 * @return {CreateFilterResponse} Success
		 */
		CreateFilter(requestBody: CreateFilterRequest): Observable<CreateFilterResponse> {
			return this.http.post<CreateFilterResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.CreateMetricAttribution
		 * @return {CreateMetricAttributionResponse} Success
		 */
		CreateMetricAttribution(requestBody: CreateMetricAttributionRequest): Observable<CreateMetricAttributionResponse> {
			return this.http.post<CreateMetricAttributionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a recommender with the recipe (a Domain dataset group use case) you specify. You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. </p> <p> <b>Minimum recommendation requests per second</b> </p> <important> <p>A high <code>minRecommendationRequestsPerSecond</code> will increase your bill. We recommend starting with 1 for <code>minRecommendationRequestsPerSecond</code> (the default). Track your usage using Amazon CloudWatch metrics, and increase the <code>minRecommendationRequestsPerSecond</code> as necessary.</p> </important> <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation. Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive your requests per hour and the price of your recommender usage. </p> <p> If your requests per second increases beyond <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minRecommendationRequestsPerSecond</code>. There's a short time delay while the capacity is increased that might cause loss of requests.</p> <p> Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond) or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window. We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code> as necessary. </p> <p> <b>Status</b> </p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p> <note> <p>Wait until the <code>status</code> of the recommender is <code>ACTIVE</code> before asking the recommender for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateRecommender
		 * @return {CreateRecommenderResponse} Success
		 */
		CreateRecommender(requestBody: CreateRecommenderRequest): Observable<CreateRecommenderResponse> {
			return this.http.post<CreateRecommenderResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateRecommender', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateSchema
		 * @return {CreateSchemaResponse} Success
		 */
		CreateSchema(requestBody: CreateSchemaRequest): Observable<CreateSchemaResponse> {
			return this.http.post<CreateSchemaResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the configuration for training a model. A trained model is known as a solution version. After the configuration is created, you train the model (create a solution version) by calling the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html">GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. </p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html">CreateSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateSolution
		 * @return {CreateSolutionResponse} Success
		 */
		CreateSolution(requestBody: CreateSolutionRequest): Observable<CreateSolutionResponse> {
			return this.http.post<CreateSolutionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateSolution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AmazonPersonalize.CreateSolutionVersion
		 * @return {CreateSolutionVersionResponse} Success
		 */
		CreateSolutionVersion(requestBody: CreateSolutionVersionRequest): Observable<CreateSolutionVersionResponse> {
			return this.http.post<CreateSolutionVersionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For information on creating campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteCampaign
		 * @return {void} Success
		 */
		DeleteCampaign(requestBody: DeleteCampaignRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
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
		 * Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
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
		 * Deletes a metric attribution.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution
		 * @return {void} Success
		 */
		DeleteMetricAttribution(requestBody: DeleteMetricAttributionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteRecommender
		 * @return {void} Success
		 */
		DeleteRecommender(requestBody: DeleteRecommenderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteRecommender', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DeleteSchema
		 * @return {void} Success
		 */
		DeleteSchema(requestBody: DeleteSchemaRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DeleteSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html">ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
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
		 * Gets the properties of a batch segment job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate segments.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob
		 * @return {DescribeBatchSegmentJobResponse} Success
		 */
		DescribeBatchSegmentJob(requestBody: DescribeBatchSegmentJobRequest): Observable<DescribeBatchSegmentJobResponse> {
			return this.http.post<DescribeBatchSegmentJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeCampaign
		 * @return {DescribeCampaignResponse} Success
		 */
		DescribeCampaign(requestBody: DescribeCampaignRequest): Observable<DescribeCampaignResponse> {
			return this.http.post<DescribeCampaignResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the given dataset. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeDataset
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(requestBody: DescribeDatasetRequest): Observable<DescribeDatasetResponse> {
			return this.http.post<DescribeDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob
		 * @return {DescribeDatasetExportJobResponse} Success
		 */
		DescribeDatasetExportJob(requestBody: DescribeDatasetExportJobRequest): Observable<DescribeDatasetExportJobResponse> {
			return this.http.post<DescribeDatasetExportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the given dataset group. For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup
		 * @return {DescribeDatasetGroupResponse} Success
		 */
		DescribeDatasetGroup(requestBody: DescribeDatasetGroupRequest): Observable<DescribeDatasetGroupResponse> {
			return this.http.post<DescribeDatasetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob
		 * @return {DescribeDatasetImportJobResponse} Success
		 */
		DescribeDatasetImportJob(requestBody: DescribeDatasetImportJobRequest): Observable<DescribeDatasetImportJobResponse> {
			return this.http.post<DescribeDatasetImportJobResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
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
		 * Describes a metric attribution.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution
		 * @return {DescribeMetricAttributionResponse} Success
		 */
		DescribeMetricAttribution(requestBody: DescribeMetricAttributionRequest): Observable<DescribeMetricAttributionResponse> {
			return this.http.post<DescribeMetricAttributionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeRecipe
		 * @return {DescribeRecipeResponse} Success
		 */
		DescribeRecipe(requestBody: DescribeRecipeRequest): Observable<DescribeRecipeResponse> {
			return this.http.post<DescribeRecipeResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeRecipe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the given recommender, including its status.</p> <p>A recommender can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>STOP PENDING &gt; STOP IN_PROGRESS &gt; INACTIVE &gt; START PENDING &gt; START IN_PROGRESS &gt; ACTIVE</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>The <code>modelMetrics</code> key is null when the recommender is being created or deleted.</p> <p>For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.</p>
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeRecommender
		 * @return {DescribeRecommenderResponse} Success
		 */
		DescribeRecommender(requestBody: DescribeRecommenderRequest): Observable<DescribeRecommenderResponse> {
			return this.http.post<DescribeRecommenderResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeRecommender', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a schema. For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeSchema
		 * @return {DescribeSchemaResponse} Success
		 */
		DescribeSchema(requestBody: DescribeSchemaRequest): Observable<DescribeSchemaResponse> {
			return this.http.post<DescribeSchemaResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.DescribeSolution
		 * @return {DescribeSolutionResponse} Success
		 */
		DescribeSolution(requestBody: DescribeSolutionRequest): Observable<DescribeSolutionResponse> {
			return this.http.post<DescribeSolutionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.DescribeSolution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a specific version of a solution. For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
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
		 * Gets a list of the batch segment jobs that have been performed off of a solution version that you specify.
		 * Post #X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBatchSegmentJobsResponse} Success
		 */
		ListBatchSegmentJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBatchSegmentJobsRequest): Observable<ListBatchSegmentJobsResponse> {
			return this.http.post<ListBatchSegmentJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListCampaigns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCampaignsResponse} Success
		 */
		ListCampaigns(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCampaignsRequest): Observable<ListCampaignsResponse> {
			return this.http.post<ListCampaignsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListCampaigns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetExportJobsResponse} Success
		 */
		ListDatasetExportJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDatasetExportJobsRequest): Observable<ListDatasetExportJobsResponse> {
			return this.http.post<ListDatasetExportJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasetGroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetGroupsResponse} Success
		 */
		ListDatasetGroups(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDatasetGroupsRequest): Observable<ListDatasetGroupsResponse> {
			return this.http.post<ListDatasetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasetGroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetImportJobsResponse} Success
		 */
		ListDatasetImportJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDatasetImportJobsRequest): Observable<ListDatasetImportJobsResponse> {
			return this.http.post<ListDatasetImportJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDatasetsRequest): Observable<ListDatasetsResponse> {
			return this.http.post<ListDatasetsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>.
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
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFiltersResponse} Success
		 */
		ListFilters(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFiltersRequest): Observable<ListFiltersResponse> {
			return this.http.post<ListFiltersResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListFilters?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the metrics for the metric attribution.
		 * Post #X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListMetricAttributionMetricsResponse} Success
		 */
		ListMetricAttributionMetrics(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListMetricAttributionMetricsRequest): Observable<ListMetricAttributionMetricsResponse> {
			return this.http.post<ListMetricAttributionMetricsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists metric attributions.
		 * Post #X-Amz-Target=AmazonPersonalize.ListMetricAttributions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListMetricAttributionsResponse} Success
		 */
		ListMetricAttributions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListMetricAttributionsRequest): Observable<ListMetricAttributionsResponse> {
			return this.http.post<ListMetricAttributionsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListMetricAttributions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns a list of recommenders in a given Domain dataset group. When a Domain dataset group is not specified, all the recommenders associated with the account are listed. The response provides the properties for each recommender, including the Amazon Resource Name (ARN). For more information on recommenders, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html">CreateRecommender</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListRecommenders
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRecommendersResponse} Success
		 */
		ListRecommenders(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRecommendersRequest): Observable<ListRecommendersResponse> {
			return this.http.post<ListRecommendersResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListRecommenders?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html">CreateSchema</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListSchemas
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSchemasResponse} Success
		 */
		ListSchemas(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSchemasRequest): Observable<ListSchemasResponse> {
			return this.http.post<ListSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListSchemas?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN).
		 * Post #X-Amz-Target=AmazonPersonalize.ListSolutionVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolutionVersionsResponse} Success
		 */
		ListSolutionVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSolutionVersionsRequest): Observable<ListSolutionVersionsResponse> {
			return this.http.post<ListSolutionVersionsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListSolutionVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListSolutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolutionsResponse} Success
		 */
		ListSolutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSolutionsRequest): Observable<ListSolutionsResponse> {
			return this.http.post<ListSolutionsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListSolutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> attached to a resource.
		 * Post #X-Amz-Target=AmazonPersonalize.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.
		 * Post #X-Amz-Target=AmazonPersonalize.StartRecommender
		 * @return {StartRecommenderResponse} Success
		 */
		StartRecommender(requestBody: StartRecommenderRequest): Observable<StartRecommenderResponse> {
			return this.http.post<StartRecommenderResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.StartRecommender', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.
		 * Post #X-Amz-Target=AmazonPersonalize.StopRecommender
		 * @return {StopRecommenderResponse} Success
		 */
		StopRecommender(requestBody: StopRecommenderRequest): Observable<StopRecommenderResponse> {
			return this.http.post<StopRecommenderResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.StopRecommender', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
		 * Post #X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation
		 * @return {void} Success
		 */
		StopSolutionVersionCreation(requestBody: StopSolutionVersionCreationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a list of tags to a resource.
		 * Post #X-Amz-Target=AmazonPersonalize.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove <a href="https://docs.aws.amazon.com/personalize/latest/dg/tagging-resources.html">tags</a> that are attached to a resource.
		 * Post #X-Amz-Target=AmazonPersonalize.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p> <note> <p>You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>. </p> </note> <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
		 * Post #X-Amz-Target=AmazonPersonalize.UpdateCampaign
		 * @return {UpdateCampaignResponse} Success
		 */
		UpdateCampaign(requestBody: UpdateCampaignRequest): Observable<UpdateCampaignResponse> {
			return this.http.post<UpdateCampaignResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.UpdateCampaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a dataset to replace its schema with a new or existing one. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/updating-dataset-schema.html">Replacing a dataset's schema</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.UpdateDataset
		 * @return {UpdateDatasetResponse} Success
		 */
		UpdateDataset(requestBody: UpdateDatasetRequest): Observable<UpdateDatasetResponse> {
			return this.http.post<UpdateDatasetResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.UpdateDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a metric attribution.
		 * Post #X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution
		 * @return {UpdateMetricAttributionResponse} Success
		 */
		UpdateMetricAttribution(requestBody: UpdateMetricAttributionRequest): Observable<UpdateMetricAttributionResponse> {
			return this.http.post<UpdateMetricAttributionResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the recommender to modify the recommender configuration. If you update the recommender to modify the columns used in training, Amazon Personalize automatically starts a full retraining of the models backing your recommender. While the update completes, you can still get recommendations from the recommender. The recommender uses the previous configuration until the update completes. To track the status of this update, use the <code>latestRecommenderUpdate</code> returned in the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a> operation.
		 * Post #X-Amz-Target=AmazonPersonalize.UpdateRecommender
		 * @return {UpdateRecommenderResponse} Success
		 */
		UpdateRecommender(requestBody: UpdateRecommenderRequest): Observable<UpdateRecommenderResponse> {
			return this.http.post<UpdateRecommenderResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.UpdateRecommender', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateBatchInferenceJobX_Amz_Target { 'AmazonPersonalize.CreateBatchInferenceJob' = 0 }

	export enum CreateBatchSegmentJobX_Amz_Target { 'AmazonPersonalize.CreateBatchSegmentJob' = 0 }

	export enum CreateCampaignX_Amz_Target { 'AmazonPersonalize.CreateCampaign' = 0 }

	export enum CreateDatasetX_Amz_Target { 'AmazonPersonalize.CreateDataset' = 0 }

	export enum CreateDatasetExportJobX_Amz_Target { 'AmazonPersonalize.CreateDatasetExportJob' = 0 }

	export enum CreateDatasetGroupX_Amz_Target { 'AmazonPersonalize.CreateDatasetGroup' = 0 }

	export enum CreateDatasetImportJobX_Amz_Target { 'AmazonPersonalize.CreateDatasetImportJob' = 0 }

	export enum CreateEventTrackerX_Amz_Target { 'AmazonPersonalize.CreateEventTracker' = 0 }

	export enum CreateFilterX_Amz_Target { 'AmazonPersonalize.CreateFilter' = 0 }

	export enum CreateMetricAttributionX_Amz_Target { 'AmazonPersonalize.CreateMetricAttribution' = 0 }

	export enum CreateRecommenderX_Amz_Target { 'AmazonPersonalize.CreateRecommender' = 0 }

	export enum CreateSchemaX_Amz_Target { 'AmazonPersonalize.CreateSchema' = 0 }

	export enum CreateSolutionX_Amz_Target { 'AmazonPersonalize.CreateSolution' = 0 }

	export enum CreateSolutionVersionX_Amz_Target { 'AmazonPersonalize.CreateSolutionVersion' = 0 }

	export enum DeleteCampaignX_Amz_Target { 'AmazonPersonalize.DeleteCampaign' = 0 }

	export enum DeleteDatasetX_Amz_Target { 'AmazonPersonalize.DeleteDataset' = 0 }

	export enum DeleteDatasetGroupX_Amz_Target { 'AmazonPersonalize.DeleteDatasetGroup' = 0 }

	export enum DeleteEventTrackerX_Amz_Target { 'AmazonPersonalize.DeleteEventTracker' = 0 }

	export enum DeleteFilterX_Amz_Target { 'AmazonPersonalize.DeleteFilter' = 0 }

	export enum DeleteMetricAttributionX_Amz_Target { 'AmazonPersonalize.DeleteMetricAttribution' = 0 }

	export enum DeleteRecommenderX_Amz_Target { 'AmazonPersonalize.DeleteRecommender' = 0 }

	export enum DeleteSchemaX_Amz_Target { 'AmazonPersonalize.DeleteSchema' = 0 }

	export enum DeleteSolutionX_Amz_Target { 'AmazonPersonalize.DeleteSolution' = 0 }

	export enum DescribeAlgorithmX_Amz_Target { 'AmazonPersonalize.DescribeAlgorithm' = 0 }

	export enum DescribeBatchInferenceJobX_Amz_Target { 'AmazonPersonalize.DescribeBatchInferenceJob' = 0 }

	export enum DescribeBatchSegmentJobX_Amz_Target { 'AmazonPersonalize.DescribeBatchSegmentJob' = 0 }

	export enum DescribeCampaignX_Amz_Target { 'AmazonPersonalize.DescribeCampaign' = 0 }

	export enum DescribeDatasetX_Amz_Target { 'AmazonPersonalize.DescribeDataset' = 0 }

	export enum DescribeDatasetExportJobX_Amz_Target { 'AmazonPersonalize.DescribeDatasetExportJob' = 0 }

	export enum DescribeDatasetGroupX_Amz_Target { 'AmazonPersonalize.DescribeDatasetGroup' = 0 }

	export enum DescribeDatasetImportJobX_Amz_Target { 'AmazonPersonalize.DescribeDatasetImportJob' = 0 }

	export enum DescribeEventTrackerX_Amz_Target { 'AmazonPersonalize.DescribeEventTracker' = 0 }

	export enum DescribeFeatureTransformationX_Amz_Target { 'AmazonPersonalize.DescribeFeatureTransformation' = 0 }

	export enum DescribeFilterX_Amz_Target { 'AmazonPersonalize.DescribeFilter' = 0 }

	export enum DescribeMetricAttributionX_Amz_Target { 'AmazonPersonalize.DescribeMetricAttribution' = 0 }

	export enum DescribeRecipeX_Amz_Target { 'AmazonPersonalize.DescribeRecipe' = 0 }

	export enum DescribeRecommenderX_Amz_Target { 'AmazonPersonalize.DescribeRecommender' = 0 }

	export enum DescribeSchemaX_Amz_Target { 'AmazonPersonalize.DescribeSchema' = 0 }

	export enum DescribeSolutionX_Amz_Target { 'AmazonPersonalize.DescribeSolution' = 0 }

	export enum DescribeSolutionVersionX_Amz_Target { 'AmazonPersonalize.DescribeSolutionVersion' = 0 }

	export enum GetSolutionMetricsX_Amz_Target { 'AmazonPersonalize.GetSolutionMetrics' = 0 }

	export enum ListBatchInferenceJobsX_Amz_Target { 'AmazonPersonalize.ListBatchInferenceJobs' = 0 }

	export enum ListBatchSegmentJobsX_Amz_Target { 'AmazonPersonalize.ListBatchSegmentJobs' = 0 }

	export enum ListCampaignsX_Amz_Target { 'AmazonPersonalize.ListCampaigns' = 0 }

	export enum ListDatasetExportJobsX_Amz_Target { 'AmazonPersonalize.ListDatasetExportJobs' = 0 }

	export enum ListDatasetGroupsX_Amz_Target { 'AmazonPersonalize.ListDatasetGroups' = 0 }

	export enum ListDatasetImportJobsX_Amz_Target { 'AmazonPersonalize.ListDatasetImportJobs' = 0 }

	export enum ListDatasetsX_Amz_Target { 'AmazonPersonalize.ListDatasets' = 0 }

	export enum ListEventTrackersX_Amz_Target { 'AmazonPersonalize.ListEventTrackers' = 0 }

	export enum ListFiltersX_Amz_Target { 'AmazonPersonalize.ListFilters' = 0 }

	export enum ListMetricAttributionMetricsX_Amz_Target { 'AmazonPersonalize.ListMetricAttributionMetrics' = 0 }

	export enum ListMetricAttributionsX_Amz_Target { 'AmazonPersonalize.ListMetricAttributions' = 0 }

	export enum ListRecipesX_Amz_Target { 'AmazonPersonalize.ListRecipes' = 0 }

	export enum ListRecommendersX_Amz_Target { 'AmazonPersonalize.ListRecommenders' = 0 }

	export enum ListSchemasX_Amz_Target { 'AmazonPersonalize.ListSchemas' = 0 }

	export enum ListSolutionVersionsX_Amz_Target { 'AmazonPersonalize.ListSolutionVersions' = 0 }

	export enum ListSolutionsX_Amz_Target { 'AmazonPersonalize.ListSolutions' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AmazonPersonalize.ListTagsForResource' = 0 }

	export enum StartRecommenderX_Amz_Target { 'AmazonPersonalize.StartRecommender' = 0 }

	export enum StopRecommenderX_Amz_Target { 'AmazonPersonalize.StopRecommender' = 0 }

	export enum StopSolutionVersionCreationX_Amz_Target { 'AmazonPersonalize.StopSolutionVersionCreation' = 0 }

	export enum TagResourceX_Amz_Target { 'AmazonPersonalize.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AmazonPersonalize.UntagResource' = 0 }

	export enum UpdateCampaignX_Amz_Target { 'AmazonPersonalize.UpdateCampaign' = 0 }

	export enum UpdateDatasetX_Amz_Target { 'AmazonPersonalize.UpdateDataset' = 0 }

	export enum UpdateMetricAttributionX_Amz_Target { 'AmazonPersonalize.UpdateMetricAttribution' = 0 }

	export enum UpdateRecommenderX_Amz_Target { 'AmazonPersonalize.UpdateRecommender' = 0 }

}

