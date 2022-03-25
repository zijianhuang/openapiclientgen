import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateBatchInferenceJobResponse {
		batchInferenceJobArn?: string;
	}

	export interface CreateBatchInferenceJobRequest {
		jobName: string;
		solutionVersionArn: string;
		filterArn?: string;
		numResults?: number;

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
		roleArn: string;
	}


	/** The input configuration of a batch inference job. */
	export interface BatchInferenceJobInput {

		/**
		 * The configuration details of an Amazon S3 input or output bucket.
		 * Required
		 */
		s3DataSource: S3DataConfig;
	}


	/** The configuration details of an Amazon S3 input or output bucket. */
	export interface S3DataConfig {
		path: string;
		kmsKeyArn?: string;
	}


	/** The output configuration parameters of a batch inference job. */
	export interface BatchInferenceJobOutput {

		/**
		 * The configuration details of an Amazon S3 input or output bucket.
		 * Required
		 */
		s3DataDestination: S3DataConfig;
	}

	export interface InvalidInputException {
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface LimitExceededException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ResourceInUseException {
	}

	export interface CreateCampaignResponse {
		campaignArn?: string;
	}

	export interface CreateCampaignRequest {
		name: string;
		solutionVersionArn: string;
		minProvisionedTPS: number;
	}

	export interface CreateDatasetResponse {
		datasetArn?: string;
	}

	export interface CreateDatasetRequest {
		name: string;
		schemaArn: string;
		datasetGroupArn: string;
		datasetType: string;
	}

	export interface CreateDatasetGroupResponse {
		datasetGroupArn?: string;
	}

	export interface CreateDatasetGroupRequest {
		name: string;
		roleArn?: string;
		kmsKeyArn?: string;
	}

	export interface CreateDatasetImportJobResponse {
		datasetImportJobArn?: string;
	}

	export interface CreateDatasetImportJobRequest {
		jobName: string;
		datasetArn: string;

		/**
		 * Describes the data source that contains the data to upload to a dataset.
		 * Required
		 */
		dataSource: DataSource;
		roleArn: string;
	}


	/** Describes the data source that contains the data to upload to a dataset. */
	export interface DataSource {
		dataLocation?: string;
	}

	export interface CreateEventTrackerResponse {
		eventTrackerArn?: string;
		trackingId?: string;
	}

	export interface CreateEventTrackerRequest {
		name: string;
		datasetGroupArn: string;
	}

	export interface CreateFilterResponse {
		filterArn?: string;
	}

	export interface CreateFilterRequest {
		name: string;
		datasetGroupArn: string;
		filterExpression: string;
	}

	export interface CreateSchemaResponse {
		schemaArn?: string;
	}

	export interface CreateSchemaRequest {
		name: string;
		schema: string;
	}

	export interface CreateSolutionResponse {
		solutionArn?: string;
	}

	export interface CreateSolutionRequest {
		name: string;
		performHPO?: boolean;
		performAutoML?: boolean;
		recipeArn?: string;
		datasetGroupArn: string;
		eventType?: string;

		/** Describes the configuration properties for the solution. */
		solutionConfig?: SolutionConfig;
	}


	/** Describes the configuration properties for the solution. */
	export interface SolutionConfig {
		eventValueThreshold?: string;

		/** Describes the properties for hyperparameter optimization (HPO). For use with the bring-your-own-recipe feature. Do not use for Amazon Personalize native recipes. */
		hpoConfig?: HPOConfig;
		algorithmHyperParameters?: HyperParameters;
		featureTransformationParameters?: FeatureTransformationParameters;

		/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution. */
		autoMLConfig?: AutoMLConfig;
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


	/** The metric to optimize during hyperparameter optimization (HPO). */
	export interface HPOObjective {
		type?: string;
		metricName?: string;
		metricRegex?: string;
	}


	/** Describes the resource configuration for hyperparameter optimization (HPO). */
	export interface HPOResourceConfig {
		maxNumberOfTrainingJobs?: string;
		maxParallelTrainingJobs?: string;
	}


	/** Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
	export interface HyperParameterRanges {
		integerHyperParameterRanges?: Array<IntegerHyperParameterRange>;
		continuousHyperParameterRanges?: Array<ContinuousHyperParameterRange>;
		categoricalHyperParameterRanges?: Array<CategoricalHyperParameterRange>;
	}


	/** Provides the name and range of an integer-valued hyperparameter. */
	export interface IntegerHyperParameterRange {
		name?: string;
		minValue?: number;
		maxValue?: number;
	}


	/** Provides the name and range of a continuous hyperparameter. */
	export interface ContinuousHyperParameterRange {
		name?: string;
		minValue?: number;
		maxValue?: number;
	}


	/** Provides the name and range of a categorical hyperparameter. */
	export interface CategoricalHyperParameterRange {
		name?: string;
		values?: Array<string>;
	}

	export interface HyperParameters {
	}

	export interface FeatureTransformationParameters {
	}


	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution. */
	export interface AutoMLConfig {
		metricName?: string;
		recipeList?: Array<string>;
	}

	export interface CreateSolutionVersionResponse {
		solutionVersionArn?: string;
	}

	export interface CreateSolutionVersionRequest {
		solutionArn: string;
		trainingMode?: CreateSolutionVersionRequestTrainingMode;
	}

	export enum CreateSolutionVersionRequestTrainingMode { FULL = 0, UPDATE = 1 }

	export interface DeleteCampaignRequest {
		campaignArn: string;
	}

	export interface DeleteDatasetRequest {
		datasetArn: string;
	}

	export interface DeleteDatasetGroupRequest {
		datasetGroupArn: string;
	}

	export interface DeleteEventTrackerRequest {
		eventTrackerArn: string;
	}

	export interface DeleteFilterRequest {
		filterArn: string;
	}

	export interface DeleteSchemaRequest {
		schemaArn: string;
	}

	export interface DeleteSolutionRequest {
		solutionArn: string;
	}

	export interface DescribeAlgorithmResponse {

		/** Describes a custom algorithm. */
		algorithm?: Algorithm;
	}


	/** Describes a custom algorithm. */
	export interface Algorithm {
		name?: string;
		algorithmArn?: string;

		/** Describes an algorithm image. */
		algorithmImage?: AlgorithmImage;
		defaultHyperParameters?: HyperParameters;

		/** Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
		defaultHyperParameterRanges?: DefaultHyperParameterRanges;
		defaultResourceConfig?: ResourceConfig;
		trainingInputMode?: string;
		roleArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}


	/** Describes an algorithm image. */
	export interface AlgorithmImage {
		name?: string;
		dockerURI: string;
	}


	/** Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued. */
	export interface DefaultHyperParameterRanges {
		integerHyperParameterRanges?: Array<DefaultIntegerHyperParameterRange>;
		continuousHyperParameterRanges?: Array<DefaultContinuousHyperParameterRange>;
		categoricalHyperParameterRanges?: Array<DefaultCategoricalHyperParameterRange>;
	}


	/** Provides the name and default range of a integer-valued hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultIntegerHyperParameterRange {
		name?: string;
		minValue?: number;
		maxValue?: number;
		isTunable?: boolean;
	}


	/** Provides the name and default range of a continuous hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultContinuousHyperParameterRange {
		name?: string;
		minValue?: number;
		maxValue?: number;
		isTunable?: boolean;
	}


	/** Provides the name and default range of a categorical hyperparameter and whether the hyperparameter is tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO). */
	export interface DefaultCategoricalHyperParameterRange {
		name?: string;
		values?: Array<string>;
		isTunable?: boolean;
	}

	export interface ResourceConfig {
	}

	export interface DescribeAlgorithmRequest {
		algorithmArn: string;
	}

	export interface DescribeBatchInferenceJobResponse {

		/** Contains information on a batch inference job. */
		batchInferenceJob?: BatchInferenceJob;
	}


	/** Contains information on a batch inference job. */
	export interface BatchInferenceJob {
		jobName?: string;
		batchInferenceJobArn?: string;
		filterArn?: string;
		failureReason?: string;
		solutionVersionArn?: string;
		numResults?: number;

		/** The input configuration of a batch inference job. */
		jobInput?: BatchInferenceJobInput;

		/** The output configuration parameters of a batch inference job. */
		jobOutput?: BatchInferenceJobOutput;
		roleArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	export interface DescribeBatchInferenceJobRequest {
		batchInferenceJobArn: string;
	}

	export interface DescribeCampaignResponse {

		/** Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>. */
		campaign?: Campaign;
	}


	/** Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>. */
	export interface Campaign {
		name?: string;
		campaignArn?: string;
		solutionVersionArn?: string;
		minProvisionedTPS?: number;
		status?: string;
		failureReason?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;

		/** Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API. */
		latestCampaignUpdate?: CampaignUpdateSummary;
	}


	/** Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API. */
	export interface CampaignUpdateSummary {
		solutionVersionArn?: string;
		minProvisionedTPS?: number;
		status?: string;
		failureReason?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	export interface DescribeCampaignRequest {
		campaignArn: string;
	}

	export interface DescribeDatasetResponse {

		/** Provides metadata for a dataset. */
		dataset?: Dataset;
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
	}

	export interface DescribeDatasetRequest {
		datasetArn: string;
	}

	export interface DescribeDatasetGroupResponse {

		/** <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.</p> */
		datasetGroup?: DatasetGroup;
	}


	/** <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.</p> */
	export interface DatasetGroup {
		name?: string;
		datasetGroupArn?: string;
		status?: string;
		roleArn?: string;
		kmsKeyArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	export interface DescribeDatasetGroupRequest {
		datasetGroupArn: string;
	}

	export interface DescribeDatasetImportJobResponse {

		/** <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
		datasetImportJob?: DatasetImportJob;
	}


	/** <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> */
	export interface DatasetImportJob {
		jobName?: string;
		datasetImportJobArn?: string;
		datasetArn?: string;

		/** Describes the data source that contains the data to upload to a dataset. */
		dataSource?: DataSource;
		roleArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	export interface DescribeDatasetImportJobRequest {
		datasetImportJobArn: string;
	}

	export interface DescribeEventTrackerResponse {

		/** Provides information about an event tracker. */
		eventTracker?: EventTracker;
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

	export interface DescribeEventTrackerRequest {
		eventTrackerArn: string;
	}

	export interface DescribeFeatureTransformationResponse {

		/** Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training. */
		featureTransformation?: FeatureTransformation;
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

	export interface FeaturizationParameters {
	}

	export interface DescribeFeatureTransformationRequest {
		featureTransformationArn: string;
	}

	export interface DescribeFilterResponse {

		/** Contains information on a recommendation filter, including its ARN, status, and filter expression. */
		filter?: Filter;
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

	export interface DescribeFilterRequest {
		filterArn: string;
	}

	export interface DescribeRecipeResponse {

		/** Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation. */
		recipe?: Recipe;
	}


	/** Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation.  */
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

	export interface DescribeRecipeRequest {
		recipeArn: string;
	}

	export interface DescribeSchemaResponse {

		/** Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>. */
		schema?: DatasetSchema;
	}


	/** Describes the schema for a dataset. For more information on schemas, see <a>CreateSchema</a>. */
	export interface DatasetSchema {
		name?: string;
		schemaArn?: string;
		schema?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	export interface DescribeSchemaRequest {
		schemaArn: string;
	}

	export interface DescribeSolutionResponse {

		/** An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign. */
		solution?: Solution;
	}


	/** An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign. */
	export interface Solution {
		name?: string;
		solutionArn?: string;
		performHPO?: boolean;
		performAutoML?: boolean;
		recipeArn?: string;
		datasetGroupArn?: string;
		eventType?: string;

		/** Describes the configuration properties for the solution. */
		solutionConfig?: SolutionConfig;

		/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric. */
		autoMLResult?: AutoMLResult;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;

		/** Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API. */
		latestSolutionVersion?: SolutionVersionSummary;
	}


	/** When the solution performs AutoML (<code>performAutoML</code> is true in <a>CreateSolution</a>), specifies the recipe that best optimized the specified metric. */
	export interface AutoMLResult {
		bestRecipeArn?: string;
	}


	/** Provides a summary of the properties of a solution version. For a complete listing, call the <a>DescribeSolutionVersion</a> API. */
	export interface SolutionVersionSummary {
		solutionVersionArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	export interface DescribeSolutionRequest {
		solutionArn: string;
	}

	export interface DescribeSolutionVersionResponse {

		/** An object that provides information about a specific version of a <a>Solution</a>. */
		solutionVersion?: SolutionVersion;
	}


	/** An object that provides information about a specific version of a <a>Solution</a>. */
	export interface SolutionVersion {
		solutionVersionArn?: string;
		solutionArn?: string;
		performHPO?: boolean;
		performAutoML?: boolean;
		recipeArn?: string;
		eventType?: string;
		datasetGroupArn?: string;

		/** Describes the configuration properties for the solution. */
		solutionConfig?: SolutionConfig;
		trainingHours?: number;
		trainingMode?: CreateSolutionVersionRequestTrainingMode;

		/** If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model. */
		tunedHPOParams?: TunedHPOParams;
		status?: string;
		failureReason?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}


	/** If hyperparameter optimization (HPO) was performed, contains the hyperparameter values of the best performing model. */
	export interface TunedHPOParams {
		algorithmHyperParameters?: HyperParameters;
	}

	export interface DescribeSolutionVersionRequest {
		solutionVersionArn: string;
	}

	export interface GetSolutionMetricsResponse {
		solutionVersionArn?: string;
		metrics?: Metrics;
	}

	export interface Metrics {
	}

	export interface GetSolutionMetricsRequest {
		solutionVersionArn: string;
	}

	export interface ListBatchInferenceJobsResponse {
		batchInferenceJobs?: Array<BatchInferenceJobSummary>;
		nextToken?: string;
	}


	/** A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries. */
	export interface BatchInferenceJobSummary {
		batchInferenceJobArn?: string;
		jobName?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
		solutionVersionArn?: string;
	}

	export interface ListBatchInferenceJobsRequest {
		solutionVersionArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface InvalidNextTokenException {
	}

	export interface ListCampaignsResponse {
		campaigns?: Array<CampaignSummary>;
		nextToken?: string;
	}


	/** Provides a summary of the properties of a campaign. For a complete listing, call the <a>DescribeCampaign</a> API. */
	export interface CampaignSummary {
		name?: string;
		campaignArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	export interface ListCampaignsRequest {
		solutionArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListDatasetGroupsResponse {
		datasetGroups?: Array<DatasetGroupSummary>;
		nextToken?: string;
	}


	/** Provides a summary of the properties of a dataset group. For a complete listing, call the <a>DescribeDatasetGroup</a> API. */
	export interface DatasetGroupSummary {
		name?: string;
		datasetGroupArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	export interface ListDatasetGroupsRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListDatasetImportJobsResponse {
		datasetImportJobs?: Array<DatasetImportJobSummary>;
		nextToken?: string;
	}


	/** Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API. */
	export interface DatasetImportJobSummary {
		datasetImportJobArn?: string;
		jobName?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
		failureReason?: string;
	}

	export interface ListDatasetImportJobsRequest {
		datasetArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListDatasetsResponse {
		datasets?: Array<DatasetSummary>;
		nextToken?: string;
	}


	/** Provides a summary of the properties of a dataset. For a complete listing, call the <a>DescribeDataset</a> API. */
	export interface DatasetSummary {
		name?: string;
		datasetArn?: string;
		datasetType?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	export interface ListDatasetsRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListEventTrackersResponse {
		eventTrackers?: Array<EventTrackerSummary>;
		nextToken?: string;
	}


	/** Provides a summary of the properties of an event tracker. For a complete listing, call the <a>DescribeEventTracker</a> API. */
	export interface EventTrackerSummary {
		name?: string;
		eventTrackerArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	export interface ListEventTrackersRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListFiltersResponse {
		Filters?: Array<FilterSummary>;
		nextToken?: string;
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

	export interface ListFiltersRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListRecipesResponse {
		recipes?: Array<RecipeSummary>;
		nextToken?: string;
	}


	/** Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API. */
	export interface RecipeSummary {
		name?: string;
		recipeArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	export interface ListRecipesRequest {
		recipeProvider?: ListRecipesRequestRecipeProvider;
		nextToken?: string;
		maxResults?: number;
	}

	export enum ListRecipesRequestRecipeProvider { SERVICE = 0 }

	export interface ListSchemasResponse {
		schemas?: Array<DatasetSchemaSummary>;
		nextToken?: string;
	}


	/** Provides a summary of the properties of a dataset schema. For a complete listing, call the <a>DescribeSchema</a> API. */
	export interface DatasetSchemaSummary {
		name?: string;
		schemaArn?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	export interface ListSchemasRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListSolutionVersionsResponse {
		solutionVersions?: Array<SolutionVersionSummary>;
		nextToken?: string;
	}

	export interface ListSolutionVersionsRequest {
		solutionArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListSolutionsResponse {
		solutions?: Array<SolutionSummary>;
		nextToken?: string;
	}


	/** Provides a summary of the properties of a solution. For a complete listing, call the <a>DescribeSolution</a> API. */
	export interface SolutionSummary {
		name?: string;
		solutionArn?: string;
		status?: string;
		creationDateTime?: Date;
		lastUpdatedDateTime?: Date;
	}

	export interface ListSolutionsRequest {
		datasetGroupArn?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface UpdateCampaignResponse {
		campaignArn?: string;
	}

	export interface UpdateCampaignRequest {
		campaignArn: string;
		solutionVersionArn?: string;
		minProvisionedTPS?: number;
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
		ListBatchInferenceJobs(maxResults: string, nextToken: string, requestBody: ListBatchInferenceJobsRequest): Observable<ListBatchInferenceJobsResponse> {
			return this.http.post<ListBatchInferenceJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a>CreateCampaign</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListCampaigns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCampaignsResponse} Success
		 */
		ListCampaigns(maxResults: string, nextToken: string, requestBody: ListCampaignsRequest): Observable<ListCampaignsResponse> {
			return this.http.post<ListCampaignsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListCampaigns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a>CreateDatasetGroup</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasetGroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetGroupsResponse} Success
		 */
		ListDatasetGroups(maxResults: string, nextToken: string, requestBody: ListDatasetGroupsRequest): Observable<ListDatasetGroupsResponse> {
			return this.http.post<ListDatasetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasetGroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a>CreateDatasetImportJob</a>. For more information on datasets, see <a>CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetImportJobsResponse} Success
		 */
		ListDatasetImportJobs(maxResults: string, nextToken: string, requestBody: ListDatasetImportJobsRequest): Observable<ListDatasetImportJobsResponse> {
			return this.http.post<ListDatasetImportJobsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a>CreateDataset</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListDatasets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(maxResults: string, nextToken: string, requestBody: ListDatasetsRequest): Observable<ListDatasetsResponse> {
			return this.http.post<ListDatasetsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListDatasets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a>CreateEventTracker</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListEventTrackers
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEventTrackersResponse} Success
		 */
		ListEventTrackers(maxResults: string, nextToken: string, requestBody: ListEventTrackersRequest): Observable<ListEventTrackersResponse> {
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
		ListRecipes(maxResults: string, nextToken: string, requestBody: ListRecipesRequest): Observable<ListRecipesResponse> {
			return this.http.post<ListRecipesResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListRecipes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a>CreateSchema</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListSchemas
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSchemasResponse} Success
		 */
		ListSchemas(maxResults: string, nextToken: string, requestBody: ListSchemasRequest): Observable<ListSchemasResponse> {
			return this.http.post<ListSchemasResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListSchemas?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN). For more information on solutions, see <a>CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListSolutionVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolutionVersionsResponse} Success
		 */
		ListSolutionVersions(maxResults: string, nextToken: string, requestBody: ListSolutionVersionsRequest): Observable<ListSolutionVersionsResponse> {
			return this.http.post<ListSolutionVersionsResponse>(this.baseUri + '#X-Amz-Target=AmazonPersonalize.ListSolutionVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a>CreateSolution</a>.
		 * Post #X-Amz-Target=AmazonPersonalize.ListSolutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSolutionsResponse} Success
		 */
		ListSolutions(maxResults: string, nextToken: string, requestBody: ListSolutionsRequest): Observable<ListSolutionsResponse> {
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

