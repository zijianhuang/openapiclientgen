import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AddTagsOutput {
		Tags?: Array<Tag> | null;
	}


	/** Describes a tag.  */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface AddTagsInput {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface AssociateTrialComponentResponse {
		TrialComponentArn?: string | null;
		TrialArn?: string | null;
	}

	export interface AssociateTrialComponentRequest {
		TrialComponentName: string;
		TrialName: string;
	}

	export interface ResourceNotFound {
	}

	export interface ResourceLimitExceeded {
	}

	export interface CreateAlgorithmOutput {
		AlgorithmArn: string;
	}

	export interface CreateAlgorithmInput {
		AlgorithmName: string;
		AlgorithmDescription?: string | null;

		/**
		 * Defines how the algorithm is used for a training job.
		 * Required
		 */
		TrainingSpecification: TrainingSpecification;

		/** Defines how to perform inference generation after a training job is run. */
		InferenceSpecification?: InferenceSpecification | null;

		/** Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm. */
		ValidationSpecification?: AlgorithmValidationSpecification | null;
		CertifyForMarketplace?: boolean | null;
	}


	/** Defines how the algorithm is used for a training job. */
	export interface TrainingSpecification {
		TrainingImage: string;
		TrainingImageDigest?: string | null;
		SupportedHyperParameters?: Array<HyperParameterSpecification> | null;
		SupportedTrainingInstanceTypes: Array<TrainingInstanceType>;
		SupportsDistributedTraining?: boolean | null;
		MetricDefinitions?: Array<MetricDefinition> | null;
		TrainingChannels: Array<ChannelSpecification>;
		SupportedTuningJobObjectiveMetrics?: Array<HyperParameterTuningJobObjective> | null;
	}


	/** Defines a hyperparameter to be used by an algorithm. */
	export interface HyperParameterSpecification {
		Name: string;
		Description?: string | null;
		Type: HyperParameterSpecificationType;

		/** Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm. */
		Range?: ParameterRange | null;
		IsTunable?: boolean | null;
		IsRequired?: boolean | null;
		DefaultValue?: string | null;
	}

	export enum HyperParameterSpecificationType { Integer = 0, Continuous = 1, Categorical = 2, FreeText = 3 }


	/** Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm. */
	export interface ParameterRange {

		/** Defines the possible values for an integer hyperparameter. */
		IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification | null;

		/** Defines the possible values for a continuous hyperparameter. */
		ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification | null;

		/** Defines the possible values for a categorical hyperparameter. */
		CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification | null;
	}


	/** Defines the possible values for an integer hyperparameter. */
	export interface IntegerParameterRangeSpecification {
		MinValue: string;
		MaxValue: string;
	}


	/** Defines the possible values for a continuous hyperparameter. */
	export interface ContinuousParameterRangeSpecification {
		MinValue: string;
		MaxValue: string;
	}


	/** Defines the possible values for a categorical hyperparameter. */
	export interface CategoricalParameterRangeSpecification {
		Values: Array<string>;
	}

	export enum TrainingInstanceType { ml_m4_xlarge = 0, ml_m4_2xlarge = 1, ml_m4_4xlarge = 2, ml_m4_10xlarge = 3, ml_m4_16xlarge = 4, ml_g4dn_xlarge = 5, ml_g4dn_2xlarge = 6, ml_g4dn_4xlarge = 7, ml_g4dn_8xlarge = 8, ml_g4dn_12xlarge = 9, ml_g4dn_16xlarge = 10, ml_m5_large = 11, ml_m5_xlarge = 12, ml_m5_2xlarge = 13, ml_m5_4xlarge = 14, ml_m5_12xlarge = 15, ml_m5_24xlarge = 16, ml_c4_xlarge = 17, ml_c4_2xlarge = 18, ml_c4_4xlarge = 19, ml_c4_8xlarge = 20, ml_p2_xlarge = 21, ml_p2_8xlarge = 22, ml_p2_16xlarge = 23, ml_p3_2xlarge = 24, ml_p3_8xlarge = 25, ml_p3_16xlarge = 26, ml_p3dn_24xlarge = 27, ml_c5_xlarge = 28, ml_c5_2xlarge = 29, ml_c5_4xlarge = 30, ml_c5_9xlarge = 31, ml_c5_18xlarge = 32, ml_c5n_xlarge = 33, ml_c5n_2xlarge = 34, ml_c5n_4xlarge = 35, ml_c5n_9xlarge = 36, ml_c5n_18xlarge = 37 }


	/** Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code> . Amazon SageMakerhyperparameter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job. */
	export interface MetricDefinition {
		Name: string;
		Regex: string;
	}


	/** Defines a named input source, called a channel, to be used by an algorithm. */
	export interface ChannelSpecification {
		Name: string;
		Description?: string | null;
		IsRequired?: boolean | null;
		SupportedContentTypes: Array<string>;
		SupportedCompressionTypes?: Array<CompressionType> | null;
		SupportedInputModes: Array<TrainingInputMode>;
	}

	export enum CompressionType { None = 0, Gzip = 1 }

	export enum TrainingInputMode { Pipe = 0, File = 1 }


	/** Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter. */
	export interface HyperParameterTuningJobObjective {
		Type: HyperParameterTuningJobObjectiveType;
		MetricName: string;
	}

	export enum HyperParameterTuningJobObjectiveType { Maximize = 0, Minimize = 1 }


	/** Defines how to perform inference generation after a training job is run. */
	export interface InferenceSpecification {
		Containers: Array<ModelPackageContainerDefinition>;
		SupportedTransformInstanceTypes: Array<TransformInstanceType>;
		SupportedRealtimeInferenceInstanceTypes: Array<ProductionVariantInstanceType>;
		SupportedContentTypes: Array<string>;
		SupportedResponseMIMETypes: Array<string>;
	}


	/** Describes the Docker container for the model package. */
	export interface ModelPackageContainerDefinition {
		ContainerHostname?: string | null;
		Image: string;
		ImageDigest?: string | null;
		ModelDataUrl?: string | null;
		ProductId?: string | null;
	}

	export enum TransformInstanceType { ml_m4_xlarge = 0, ml_m4_2xlarge = 1, ml_m4_4xlarge = 2, ml_m4_10xlarge = 3, ml_m4_16xlarge = 4, ml_c4_xlarge = 5, ml_c4_2xlarge = 6, ml_c4_4xlarge = 7, ml_c4_8xlarge = 8, ml_p2_xlarge = 9, ml_p2_8xlarge = 10, ml_p2_16xlarge = 11, ml_p3_2xlarge = 12, ml_p3_8xlarge = 13, ml_p3_16xlarge = 14, ml_c5_xlarge = 15, ml_c5_2xlarge = 16, ml_c5_4xlarge = 17, ml_c5_9xlarge = 18, ml_c5_18xlarge = 19, ml_m5_large = 20, ml_m5_xlarge = 21, ml_m5_2xlarge = 22, ml_m5_4xlarge = 23, ml_m5_12xlarge = 24, ml_m5_24xlarge = 25 }

	export enum ProductionVariantInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_m5_large = 9, ml_m5_xlarge = 10, ml_m5_2xlarge = 11, ml_m5_4xlarge = 12, ml_m5_12xlarge = 13, ml_m5_24xlarge = 14, ml_m5d_large = 15, ml_m5d_xlarge = 16, ml_m5d_2xlarge = 17, ml_m5d_4xlarge = 18, ml_m5d_12xlarge = 19, ml_m5d_24xlarge = 20, ml_c4_large = 21, ml_c4_xlarge = 22, ml_c4_2xlarge = 23, ml_c4_4xlarge = 24, ml_c4_8xlarge = 25, ml_p2_xlarge = 26, ml_p2_8xlarge = 27, ml_p2_16xlarge = 28, ml_p3_2xlarge = 29, ml_p3_8xlarge = 30, ml_p3_16xlarge = 31, ml_c5_large = 32, ml_c5_xlarge = 33, ml_c5_2xlarge = 34, ml_c5_4xlarge = 35, ml_c5_9xlarge = 36, ml_c5_18xlarge = 37, ml_c5d_large = 38, ml_c5d_xlarge = 39, ml_c5d_2xlarge = 40, ml_c5d_4xlarge = 41, ml_c5d_9xlarge = 42, ml_c5d_18xlarge = 43, ml_g4dn_xlarge = 44, ml_g4dn_2xlarge = 45, ml_g4dn_4xlarge = 46, ml_g4dn_8xlarge = 47, ml_g4dn_12xlarge = 48, ml_g4dn_16xlarge = 49, ml_r5_large = 50, ml_r5_xlarge = 51, ml_r5_2xlarge = 52, ml_r5_4xlarge = 53, ml_r5_12xlarge = 54, ml_r5_24xlarge = 55, ml_r5d_large = 56, ml_r5d_xlarge = 57, ml_r5d_2xlarge = 58, ml_r5d_4xlarge = 59, ml_r5d_12xlarge = 60, ml_r5d_24xlarge = 61, ml_inf1_xlarge = 62, ml_inf1_2xlarge = 63, ml_inf1_6xlarge = 64, ml_inf1_24xlarge = 65 }


	/** Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm. */
	export interface AlgorithmValidationSpecification {
		ValidationRole: string;
		ValidationProfiles: Array<AlgorithmValidationProfile>;
	}


	/** <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p> */
	export interface AlgorithmValidationProfile {
		ProfileName: string;

		/**
		 * Defines the input needed to run a training job using the algorithm.
		 * Required
		 */
		TrainingJobDefinition: TrainingJobDefinition;

		/** Defines the input needed to run a transform job using the inference specification specified in the algorithm. */
		TransformJobDefinition?: TransformJobDefinition | null;
	}


	/** Defines the input needed to run a training job using the algorithm. */
	export interface TrainingJobDefinition {
		TrainingInputMode: TrainingInputMode;
		HyperParameters?: HyperParameters | null;
		InputDataConfig: Array<Channel>;

		/**
		 * Provides information about how to store model training results (model artifacts).
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;

		/**
		 * Describes the resources, including ML compute instances and ML storage volumes, to use for model training.
		 * Required
		 */
		ResourceConfig: ResourceConfig;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;
	}

	export interface HyperParameters {
	}


	/** A channel is a named input source that training algorithms can consume.  */
	export interface Channel {
		ChannelName: string;

		/**
		 * Describes the location of the channel data.
		 * Required
		 */
		DataSource: DataSource;
		ContentType?: string | null;
		CompressionType?: CompressionType | null;
		RecordWrapperType?: ChannelRecordWrapperType | null;
		InputMode?: TrainingInputMode | null;

		/** <p>A configuration for a shuffle option for input data in a channel. If you use <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object references in the <code>ManifestFile</code> is shuffled. If you use <code>AugmentedManifestFile</code>, the order of the JSON lines in the <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined using the <code>Seed</code> value.</p> <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.</p> */
		ShuffleConfig?: ShuffleConfig | null;
	}


	/** Describes the location of the channel data. */
	export interface DataSource {

		/** Describes the S3 data source. */
		S3DataSource?: S3DataSource | null;

		/** Specifies a file system data source for a channel. */
		FileSystemDataSource?: FileSystemDataSource | null;
	}


	/** Describes the S3 data source. */
	export interface S3DataSource {
		S3DataType: S3DataSourceS3DataType;
		S3Uri: string;
		S3DataDistributionType?: S3DataSourceS3DataDistributionType | null;
		AttributeNames?: Array<string> | null;
	}

	export enum S3DataSourceS3DataType { ManifestFile = 0, S3Prefix = 1, AugmentedManifestFile = 2 }

	export enum S3DataSourceS3DataDistributionType { FullyReplicated = 0, ShardedByS3Key = 1 }


	/** Specifies a file system data source for a channel. */
	export interface FileSystemDataSource {
		FileSystemId: string;
		FileSystemAccessMode: FileSystemDataSourceFileSystemAccessMode;
		FileSystemType: FileSystemDataSourceFileSystemType;
		DirectoryPath: string;
	}

	export enum FileSystemDataSourceFileSystemAccessMode { rw = 0, ro = 1 }

	export enum FileSystemDataSourceFileSystemType { EFS = 0, FSxLustre = 1 }

	export enum ChannelRecordWrapperType { None = 0, RecordIO = 1 }


	/** <p>A configuration for a shuffle option for input data in a channel. If you use <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object references in the <code>ManifestFile</code> is shuffled. If you use <code>AugmentedManifestFile</code>, the order of the JSON lines in the <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined using the <code>Seed</code> value.</p> <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.</p> */
	export interface ShuffleConfig {
		Seed: number;
	}


	/** Provides information about how to store model training results (model artifacts). */
	export interface OutputDataConfig {
		KmsKeyId?: string | null;
		S3OutputPath: string;
	}


	/** Describes the resources, including ML compute instances and ML storage volumes, to use for model training.  */
	export interface ResourceConfig {
		InstanceType: ResourceConfigInstanceType;
		InstanceCount: number;
		VolumeSizeInGB: number;
		VolumeKmsKeyId?: string | null;
	}

	export enum ResourceConfigInstanceType { ml_m4_xlarge = 0, ml_m4_2xlarge = 1, ml_m4_4xlarge = 2, ml_m4_10xlarge = 3, ml_m4_16xlarge = 4, ml_g4dn_xlarge = 5, ml_g4dn_2xlarge = 6, ml_g4dn_4xlarge = 7, ml_g4dn_8xlarge = 8, ml_g4dn_12xlarge = 9, ml_g4dn_16xlarge = 10, ml_m5_large = 11, ml_m5_xlarge = 12, ml_m5_2xlarge = 13, ml_m5_4xlarge = 14, ml_m5_12xlarge = 15, ml_m5_24xlarge = 16, ml_c4_xlarge = 17, ml_c4_2xlarge = 18, ml_c4_4xlarge = 19, ml_c4_8xlarge = 20, ml_p2_xlarge = 21, ml_p2_8xlarge = 22, ml_p2_16xlarge = 23, ml_p3_2xlarge = 24, ml_p3_8xlarge = 25, ml_p3_16xlarge = 26, ml_p3dn_24xlarge = 27, ml_c5_xlarge = 28, ml_c5_2xlarge = 29, ml_c5_4xlarge = 30, ml_c5_9xlarge = 31, ml_c5_18xlarge = 32, ml_c5n_xlarge = 33, ml_c5n_2xlarge = 34, ml_c5n_4xlarge = 35, ml_c5n_9xlarge = 36, ml_c5n_18xlarge = 37 }


	/** <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note> */
	export interface StoppingCondition {
		MaxRuntimeInSeconds?: number | null;
		MaxWaitTimeInSeconds?: number | null;
	}


	/** Defines the input needed to run a transform job using the inference specification specified in the algorithm. */
	export interface TransformJobDefinition {
		MaxConcurrentTransforms?: number | null;
		MaxPayloadInMB?: number | null;
		BatchStrategy?: TransformJobDefinitionBatchStrategy | null;
		Environment?: TransformEnvironmentMap | null;

		/**
		 * Describes the input source of a transform job and the way the transform job consumes it.
		 * Required
		 */
		TransformInput: TransformInput;

		/**
		 * Describes the results of a transform job.
		 * Required
		 */
		TransformOutput: TransformOutput;

		/**
		 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
		 * Required
		 */
		TransformResources: TransformResources;
	}

	export enum TransformJobDefinitionBatchStrategy { MultiRecord = 0, SingleRecord = 1 }

	export interface TransformEnvironmentMap {
	}


	/** Describes the input source of a transform job and the way the transform job consumes it. */
	export interface TransformInput {

		/**
		 * Describes the location of the channel data.
		 * Required
		 */
		DataSource: TransformDataSource;
		ContentType?: string | null;
		CompressionType?: CompressionType | null;
		SplitType?: TransformInputSplitType | null;
	}


	/** Describes the location of the channel data. */
	export interface TransformDataSource {

		/**
		 * Describes the S3 data source.
		 * Required
		 */
		S3DataSource: TransformS3DataSource;
	}


	/** Describes the S3 data source. */
	export interface TransformS3DataSource {
		S3DataType: S3DataSourceS3DataType;
		S3Uri: string;
	}

	export enum TransformInputSplitType { None = 0, Line = 1, RecordIO = 2, TFRecord = 3 }


	/** Describes the results of a transform job. */
	export interface TransformOutput {
		S3OutputPath: string;
		Accept?: string | null;
		AssembleWith?: TransformOutputAssembleWith | null;
		KmsKeyId?: string | null;
	}

	export enum TransformOutputAssembleWith { None = 0, Line = 1 }


	/** Describes the resources, including ML instance types and ML instance count, to use for transform job. */
	export interface TransformResources {
		InstanceType: TransformResourcesInstanceType;
		InstanceCount: number;
		VolumeKmsKeyId?: string | null;
	}

	export enum TransformResourcesInstanceType { ml_m4_xlarge = 0, ml_m4_2xlarge = 1, ml_m4_4xlarge = 2, ml_m4_10xlarge = 3, ml_m4_16xlarge = 4, ml_c4_xlarge = 5, ml_c4_2xlarge = 6, ml_c4_4xlarge = 7, ml_c4_8xlarge = 8, ml_p2_xlarge = 9, ml_p2_8xlarge = 10, ml_p2_16xlarge = 11, ml_p3_2xlarge = 12, ml_p3_8xlarge = 13, ml_p3_16xlarge = 14, ml_c5_xlarge = 15, ml_c5_2xlarge = 16, ml_c5_4xlarge = 17, ml_c5_9xlarge = 18, ml_c5_18xlarge = 19, ml_m5_large = 20, ml_m5_xlarge = 21, ml_m5_2xlarge = 22, ml_m5_4xlarge = 23, ml_m5_12xlarge = 24, ml_m5_24xlarge = 25 }

	export interface CreateAppResponse {
		AppArn?: string | null;
	}

	export interface CreateAppRequest {
		DomainId: string;
		UserProfileName: string;
		AppType: CreateAppRequestAppType;
		AppName: string;
		Tags?: Array<Tag> | null;

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		ResourceSpec?: ResourceSpec | null;
	}

	export enum CreateAppRequestAppType { JupyterServer = 0, KernelGateway = 1, TensorBoard = 2 }


	/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
	export interface ResourceSpec {
		SageMakerImageArn?: string | null;
		InstanceType?: ResourceSpecInstanceType | null;
	}

	export enum ResourceSpecInstanceType { system = 0, ml_t3_micro = 1, ml_t3_small = 2, ml_t3_medium = 3, ml_t3_large = 4, ml_t3_xlarge = 5, ml_t3_2xlarge = 6, ml_m5_large = 7, ml_m5_xlarge = 8, ml_m5_2xlarge = 9, ml_m5_4xlarge = 10, ml_m5_8xlarge = 11, ml_m5_12xlarge = 12, ml_m5_16xlarge = 13, ml_m5_24xlarge = 14, ml_c5_large = 15, ml_c5_xlarge = 16, ml_c5_2xlarge = 17, ml_c5_4xlarge = 18, ml_c5_9xlarge = 19, ml_c5_12xlarge = 20, ml_c5_18xlarge = 21, ml_c5_24xlarge = 22, ml_p3_2xlarge = 23, ml_p3_8xlarge = 24, ml_p3_16xlarge = 25, ml_g4dn_xlarge = 26, ml_g4dn_2xlarge = 27, ml_g4dn_4xlarge = 28, ml_g4dn_8xlarge = 29, ml_g4dn_12xlarge = 30, ml_g4dn_16xlarge = 31 }

	export interface ResourceInUse {
	}

	export interface CreateAutoMLJobResponse {
		AutoMLJobArn: string;
	}

	export interface CreateAutoMLJobRequest {
		AutoMLJobName: string;
		InputDataConfig: Array<AutoMLChannel>;

		/**
		 * The output data configuration.
		 * Required
		 */
		OutputDataConfig: AutoMLOutputDataConfig;
		ProblemType?: CreateAutoMLJobRequestProblemType | null;

		/** Applies a metric to minimize or maximize for the job's objective. */
		AutoMLJobObjective?: AutoMLJobObjective | null;

		/** A collection of settings used for a job. */
		AutoMLJobConfig?: AutoMLJobConfig | null;
		RoleArn: string;
		GenerateCandidateDefinitionsOnly?: boolean | null;
		Tags?: Array<Tag> | null;
	}


	/** Similar to Channel. A channel is a named input source that training algorithms can consume. Refer to Channel for detailed descriptions. */
	export interface AutoMLChannel {

		/**
		 * The data source for the AutoPilot job.
		 * Required
		 */
		DataSource: AutoMLDataSource;
		CompressionType?: CompressionType | null;
		TargetAttributeName: string;
	}


	/** The data source for the AutoPilot job. */
	export interface AutoMLDataSource {

		/**
		 * The Amazon S3 data source.
		 * Required
		 */
		S3DataSource: AutoMLS3DataSource;
	}


	/** The Amazon S3 data source. */
	export interface AutoMLS3DataSource {
		S3DataType: AutoMLS3DataSourceS3DataType;
		S3Uri: string;
	}

	export enum AutoMLS3DataSourceS3DataType { ManifestFile = 0, S3Prefix = 1 }


	/** The output data configuration. */
	export interface AutoMLOutputDataConfig {
		KmsKeyId?: string | null;
		S3OutputPath: string;
	}

	export enum CreateAutoMLJobRequestProblemType { BinaryClassification = 0, MulticlassClassification = 1, Regression = 2 }


	/** Applies a metric to minimize or maximize for the job's objective. */
	export interface AutoMLJobObjective {
		MetricName: AutoMLJobObjectiveMetricName;
	}

	export enum AutoMLJobObjectiveMetricName { Accuracy = 0, MSE = 1, F1 = 2, F1macro = 3 }


	/** A collection of settings used for a job. */
	export interface AutoMLJobConfig {

		/** How long a job is allowed to run, or how many candidates a job is allowed to generate. */
		CompletionCriteria?: AutoMLJobCompletionCriteria | null;

		/** Security options. */
		SecurityConfig?: AutoMLSecurityConfig | null;
	}


	/** How long a job is allowed to run, or how many candidates a job is allowed to generate. */
	export interface AutoMLJobCompletionCriteria {
		MaxCandidates?: number | null;
		MaxRuntimePerTrainingJobInSeconds?: number | null;
		MaxAutoMLJobRuntimeInSeconds?: number | null;
	}


	/** Security options. */
	export interface AutoMLSecurityConfig {
		VolumeKmsKeyId?: string | null;
		EnableInterContainerTrafficEncryption?: boolean | null;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig | null;
	}


	/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.  */
	export interface VpcConfig {
		SecurityGroupIds: Array<string>;
		Subnets: Array<string>;
	}

	export interface CreateCodeRepositoryOutput {
		CodeRepositoryArn: string;
	}

	export interface CreateCodeRepositoryInput {
		CodeRepositoryName: string;

		/**
		 * Specifies configuration details for a Git repository in your AWS account.
		 * Required
		 */
		GitConfig: GitConfig;
	}


	/** Specifies configuration details for a Git repository in your AWS account. */
	export interface GitConfig {
		RepositoryUrl: string;
		Branch?: string | null;
		SecretArn?: string | null;
	}

	export interface CreateCompilationJobResponse {
		CompilationJobArn: string;
	}

	export interface CreateCompilationJobRequest {
		CompilationJobName: string;
		RoleArn: string;

		/**
		 * Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
		 * Required
		 */
		InputConfig: InputConfig;

		/**
		 * Contains information about the output location for the compiled model and the device (target) that the model runs on.
		 * Required
		 */
		OutputConfig: OutputConfig;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;
	}


	/** Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained. */
	export interface InputConfig {
		S3Uri: string;
		DataInputConfig: string;
		Framework: InputConfigFramework;
	}

	export enum InputConfigFramework { TENSORFLOW = 0, KERAS = 1, MXNET = 2, ONNX = 3, PYTORCH = 4, XGBOOST = 5, TFLITE = 6 }


	/** Contains information about the output location for the compiled model and the device (target) that the model runs on. */
	export interface OutputConfig {
		S3OutputLocation: string;
		TargetDevice: OutputConfigTargetDevice;
	}

	export enum OutputConfigTargetDevice { lambda = 0, ml_m4 = 1, ml_m5 = 2, ml_c4 = 3, ml_c5 = 4, ml_p2 = 5, ml_p3 = 6, ml_inf1 = 7, jetson_tx1 = 8, jetson_tx2 = 9, jetson_nano = 10, jetson_xavier = 11, rasp3b = 12, imx8qm = 13, deeplens = 14, rk3399 = 15, rk3288 = 16, aisage = 17, sbe_c = 18, qcs605 = 19, qcs603 = 20, sitara_am57x = 21, amba_cv22 = 22 }

	export interface CreateDomainResponse {
		DomainArn?: string | null;
		Url?: string | null;
	}

	export interface CreateDomainRequest {
		DomainName: string;
		AuthMode: CreateDomainRequestAuthMode;

		/**
		 * A collection of settings.
		 * Required
		 */
		DefaultUserSettings: UserSettings;
		SubnetIds: Array<string>;
		VpcId: string;
		Tags?: Array<Tag> | null;
		HomeEfsFileSystemKmsKeyId?: string | null;
	}

	export enum CreateDomainRequestAuthMode { SSO = 0, IAM = 1 }


	/** A collection of settings. */
	export interface UserSettings {
		ExecutionRole?: string | null;
		SecurityGroups?: Array<string> | null;

		/** Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of <code>DefaultUserSettings</code> when the <a>CreateDomain</a> API is called, and as part of <code>UserSettings</code> when the <a>CreateUserProfile</a> API is called. */
		SharingSettings?: SharingSettings | null;

		/** Jupyter server's app settings. */
		JupyterServerAppSettings?: JupyterServerAppSettings | null;

		/** The kernel gateway app settings. */
		KernelGatewayAppSettings?: KernelGatewayAppSettings | null;

		/** The TensorBoard app settings. */
		TensorBoardAppSettings?: TensorBoardAppSettings | null;
	}


	/** Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of <code>DefaultUserSettings</code> when the <a>CreateDomain</a> API is called, and as part of <code>UserSettings</code> when the <a>CreateUserProfile</a> API is called. */
	export interface SharingSettings {
		NotebookOutputOption?: SharingSettingsNotebookOutputOption | null;
		S3OutputPath?: string | null;
		S3KmsKeyId?: string | null;
	}

	export enum SharingSettingsNotebookOutputOption { Allowed = 0, Disabled = 1 }


	/** Jupyter server's app settings. */
	export interface JupyterServerAppSettings {

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		DefaultResourceSpec?: ResourceSpec | null;
	}


	/** The kernel gateway app settings. */
	export interface KernelGatewayAppSettings {

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		DefaultResourceSpec?: ResourceSpec | null;
	}


	/** The TensorBoard app settings. */
	export interface TensorBoardAppSettings {

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		DefaultResourceSpec?: ResourceSpec | null;
	}

	export interface CreateEndpointOutput {
		EndpointArn: string;
	}

	export interface CreateEndpointInput {
		EndpointName: string;
		EndpointConfigName: string;
		Tags?: Array<Tag> | null;
	}

	export interface CreateEndpointConfigOutput {
		EndpointConfigArn: string;
	}

	export interface CreateEndpointConfigInput {
		EndpointConfigName: string;
		ProductionVariants: Array<ProductionVariant>;

		/** <p/> */
		DataCaptureConfig?: DataCaptureConfig | null;
		Tags?: Array<Tag> | null;
		KmsKeyId?: string | null;
	}


	/** Identifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights.  */
	export interface ProductionVariant {
		VariantName: string;
		ModelName: string;
		InitialInstanceCount: number;
		InstanceType: ProductionVariantInstanceType;
		InitialVariantWeight?: number | null;
		AcceleratorType?: ProductionVariantAcceleratorType | null;
	}

	export enum ProductionVariantAcceleratorType { ml_eia1_medium = 0, ml_eia1_large = 1, ml_eia1_xlarge = 2, ml_eia2_medium = 3, ml_eia2_large = 4, ml_eia2_xlarge = 5 }


	/** <p/> */
	export interface DataCaptureConfig {
		EnableCapture?: boolean | null;
		InitialSamplingPercentage: number;
		DestinationS3Uri: string;
		KmsKeyId?: string | null;
		CaptureOptions: Array<CaptureOption>;

		/** <p/> */
		CaptureContentTypeHeader?: CaptureContentTypeHeader | null;
	}


	/** <p/> */
	export interface CaptureOption {
		CaptureMode: CaptureOptionCaptureMode;
	}

	export enum CaptureOptionCaptureMode { Input = 0, Output = 1 }


	/** <p/> */
	export interface CaptureContentTypeHeader {
		CsvContentTypes?: Array<string> | null;
		JsonContentTypes?: Array<string> | null;
	}

	export interface CreateExperimentResponse {
		ExperimentArn?: string | null;
	}

	export interface CreateExperimentRequest {
		ExperimentName: string;
		DisplayName?: string | null;
		Description?: string | null;
		Tags?: Array<Tag> | null;
	}

	export interface CreateFlowDefinitionResponse {
		FlowDefinitionArn: string;
	}

	export interface CreateFlowDefinitionRequest {
		FlowDefinitionName: string;

		/** Container for configuring the source of human task requests. */
		HumanLoopRequestSource?: HumanLoopRequestSource | null;

		/** Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans. */
		HumanLoopActivationConfig?: HumanLoopActivationConfig | null;

		/**
		 * Describes the work to be performed by human workers.
		 * Required
		 */
		HumanLoopConfig: HumanLoopConfig;

		/**
		 * Contains information about where human output will be stored.
		 * Required
		 */
		OutputConfig: FlowDefinitionOutputConfig;
		RoleArn: string;
		Tags?: Array<Tag> | null;
	}


	/** Container for configuring the source of human task requests. */
	export interface HumanLoopRequestSource {
		AwsManagedHumanLoopRequestSource: HumanLoopRequestSourceAwsManagedHumanLoopRequestSource;
	}

	export enum HumanLoopRequestSourceAwsManagedHumanLoopRequestSource { AWS_Rekognition_DetectModerationLabels_Image_V3 = 0, AWS_Textract_AnalyzeDocument_Forms_V1 = 1 }


	/** Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans. */
	export interface HumanLoopActivationConfig {

		/**
		 * Defines under what conditions SageMaker creates a human loop. Used within . See for the required format of activation conditions.
		 * Required
		 */
		HumanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig;
	}


	/** Defines under what conditions SageMaker creates a human loop. Used within . See for the required format of activation conditions. */
	export interface HumanLoopActivationConditionsConfig {
		HumanLoopActivationConditions: string;
	}


	/** Describes the work to be performed by human workers. */
	export interface HumanLoopConfig {
		WorkteamArn: string;
		HumanTaskUiArn: string;
		TaskTitle: string;
		TaskDescription: string;
		TaskCount: number;
		TaskAvailabilityLifetimeInSeconds?: number | null;
		TaskTimeLimitInSeconds?: number | null;
		TaskKeywords?: Array<string> | null;

		/** <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> */
		PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice | null;
	}


	/** <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> */
	export interface PublicWorkforceTaskPrice {

		/** Represents an amount of money in United States dollars/ */
		AmountInUsd?: USD | null;
	}


	/** Represents an amount of money in United States dollars/ */
	export interface USD {
		Dollars?: number | null;
		Cents?: number | null;
		TenthFractionsOfACent?: number | null;
	}


	/** Contains information about where human output will be stored. */
	export interface FlowDefinitionOutputConfig {
		S3OutputPath: string;
		KmsKeyId?: string | null;
	}

	export interface CreateHumanTaskUiResponse {
		HumanTaskUiArn: string;
	}

	export interface CreateHumanTaskUiRequest {
		HumanTaskUiName: string;

		/**
		 * The Liquid template for the worker user interface.
		 * Required
		 */
		UiTemplate: UiTemplate;
		Tags?: Array<Tag> | null;
	}


	/** The Liquid template for the worker user interface. */
	export interface UiTemplate {
		Content: string;
	}

	export interface CreateHyperParameterTuningJobResponse {
		HyperParameterTuningJobArn: string;
	}

	export interface CreateHyperParameterTuningJobRequest {
		HyperParameterTuningJobName: string;

		/**
		 * Configures a hyperparameter tuning job.
		 * Required
		 */
		HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

		/** Defines the training jobs launched by a hyperparameter tuning job. */
		TrainingJobDefinition?: HyperParameterTrainingJobDefinition | null;
		TrainingJobDefinitions?: Array<HyperParameterTrainingJobDefinition> | null;

		/** <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note> */
		WarmStartConfig?: HyperParameterTuningJobWarmStartConfig | null;
		Tags?: Array<Tag> | null;
	}


	/** Configures a hyperparameter tuning job. */
	export interface HyperParameterTuningJobConfig {

		/**
		 * The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.
		 * Required
		 */
		Strategy: HyperParameterTuningJobConfigStrategy;

		/** Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter. */
		HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective | null;

		/**
		 * Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
		 * Required
		 */
		ResourceLimits: ResourceLimits;

		/** <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note> */
		ParameterRanges?: ParameterRanges | null;
		TrainingJobEarlyStoppingType?: HyperParameterTuningJobConfigTrainingJobEarlyStoppingType | null;

		/** The job completion criteria. */
		TuningJobCompletionCriteria?: TuningJobCompletionCriteria | null;
	}

	export enum HyperParameterTuningJobConfigStrategy { Bayesian = 0, Random = 1 }


	/** Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch. */
	export interface ResourceLimits {
		MaxNumberOfTrainingJobs: number;
		MaxParallelTrainingJobs: number;
	}


	/** <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note> */
	export interface ParameterRanges {
		IntegerParameterRanges?: Array<IntegerParameterRange> | null;
		ContinuousParameterRanges?: Array<ContinuousParameterRange> | null;
		CategoricalParameterRanges?: Array<CategoricalParameterRange> | null;
	}


	/** For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches. */
	export interface IntegerParameterRange {
		Name: string;
		MinValue: string;
		MaxValue: string;
		ScalingType?: IntegerParameterRangeScalingType | null;
	}

	export enum IntegerParameterRangeScalingType { Auto = 0, Linear = 1, Logarithmic = 2, ReverseLogarithmic = 3 }


	/** A list of continuous hyperparameters to tune. */
	export interface ContinuousParameterRange {
		Name: string;
		MinValue: string;
		MaxValue: string;
		ScalingType?: IntegerParameterRangeScalingType | null;
	}


	/** A list of categorical hyperparameters to tune. */
	export interface CategoricalParameterRange {
		Name: string;
		Values: Array<string>;
	}

	export enum HyperParameterTuningJobConfigTrainingJobEarlyStoppingType { Off = 0, Auto = 1 }


	/** The job completion criteria. */
	export interface TuningJobCompletionCriteria {
		TargetObjectiveMetricValue: number;
	}


	/** Defines the training jobs launched by a hyperparameter tuning job. */
	export interface HyperParameterTrainingJobDefinition {
		DefinitionName?: string | null;

		/** Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter. */
		TuningObjective?: HyperParameterTuningJobObjective | null;

		/** <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note> */
		HyperParameterRanges?: ParameterRanges | null;
		StaticHyperParameters?: HyperParameters | null;

		/**
		 * Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
		 * Required
		 */
		AlgorithmSpecification: HyperParameterAlgorithmSpecification;
		RoleArn: string;
		InputDataConfig?: Array<Channel> | null;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig | null;

		/**
		 * Provides information about how to store model training results (model artifacts).
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;

		/**
		 * Describes the resources, including ML compute instances and ML storage volumes, to use for model training.
		 * Required
		 */
		ResourceConfig: ResourceConfig;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;
		EnableNetworkIsolation?: boolean | null;
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableManagedSpotTraining?: boolean | null;

		/** Contains information about the output location for managed spot training checkpoint data. */
		CheckpointConfig?: CheckpointConfig | null;
	}


	/** Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor. */
	export interface HyperParameterAlgorithmSpecification {
		TrainingImage?: string | null;
		TrainingInputMode: TrainingInputMode;
		AlgorithmName?: string | null;
		MetricDefinitions?: Array<MetricDefinition> | null;
	}


	/** Contains information about the output location for managed spot training checkpoint data.  */
	export interface CheckpointConfig {
		S3Uri: string;
		LocalPath?: string | null;
	}


	/** <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note> */
	export interface HyperParameterTuningJobWarmStartConfig {
		ParentHyperParameterTuningJobs: Array<ParentHyperParameterTuningJob>;
		WarmStartType: HyperParameterTuningJobWarmStartConfigWarmStartType;
	}


	/** A previously completed or stopped hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job. */
	export interface ParentHyperParameterTuningJob {
		HyperParameterTuningJobName?: string | null;
	}

	export enum HyperParameterTuningJobWarmStartConfigWarmStartType { IdenticalDataAndAlgorithm = 0, TransferLearning = 1 }

	export interface CreateLabelingJobResponse {
		LabelingJobArn: string;
	}

	export interface CreateLabelingJobRequest {
		LabelingJobName: string;
		LabelAttributeName: string;

		/**
		 * Input configuration information for a labeling job.
		 * Required
		 */
		InputConfig: LabelingJobInputConfig;

		/**
		 * Output configuration information for a labeling job.
		 * Required
		 */
		OutputConfig: LabelingJobOutputConfig;
		RoleArn: string;
		LabelCategoryConfigS3Uri?: string | null;

		/** <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note> */
		StoppingConditions?: LabelingJobStoppingConditions | null;

		/** Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling. */
		LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig | null;

		/**
		 * Information required for human workers to complete a labeling task.
		 * Required
		 */
		HumanTaskConfig: HumanTaskConfig;
		Tags?: Array<Tag> | null;
	}


	/** Input configuration information for a labeling job. */
	export interface LabelingJobInputConfig {

		/**
		 * Provides information about the location of input data.
		 * Required
		 */
		DataSource: LabelingJobDataSource;

		/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
		DataAttributes?: LabelingJobDataAttributes | null;
	}


	/** Provides information about the location of input data. */
	export interface LabelingJobDataSource {

		/**
		 * The Amazon S3 location of the input data objects.
		 * Required
		 */
		S3DataSource: LabelingJobS3DataSource;
	}


	/** The Amazon S3 location of the input data objects. */
	export interface LabelingJobS3DataSource {
		ManifestS3Uri: string;
	}


	/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
	export interface LabelingJobDataAttributes {
		ContentClassifiers?: Array<ContentClassifier> | null;
	}

	export enum ContentClassifier { FreeOfPersonallyIdentifiableInformation = 0, FreeOfAdultContent = 1 }


	/** Output configuration information for a labeling job. */
	export interface LabelingJobOutputConfig {
		S3OutputPath: string;
		KmsKeyId?: string | null;
	}


	/** <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note> */
	export interface LabelingJobStoppingConditions {
		MaxHumanLabeledObjectCount?: number | null;
		MaxPercentageOfInputDatasetLabeled?: number | null;
	}


	/** Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling. */
	export interface LabelingJobAlgorithmsConfig {
		LabelingJobAlgorithmSpecificationArn: string;
		InitialActiveLearningModelArn?: string | null;

		/** Provides configuration information for labeling jobs. */
		LabelingJobResourceConfig?: LabelingJobResourceConfig | null;
	}


	/** Provides configuration information for labeling jobs. */
	export interface LabelingJobResourceConfig {
		VolumeKmsKeyId?: string | null;
	}


	/** Information required for human workers to complete a labeling task. */
	export interface HumanTaskConfig {
		WorkteamArn: string;

		/**
		 * Provided configuration information for the worker UI for a labeling job.
		 * Required
		 */
		UiConfig: UiConfig;
		PreHumanTaskLambdaArn: string;
		TaskKeywords?: Array<string> | null;
		TaskTitle: string;
		TaskDescription: string;
		NumberOfHumanWorkersPerDataObject: number;
		TaskTimeLimitInSeconds: number;
		TaskAvailabilityLifetimeInSeconds?: number | null;
		MaxConcurrentTaskCount?: number | null;

		/**
		 * Configures how labels are consolidated across human workers.
		 * Required
		 */
		AnnotationConsolidationConfig: AnnotationConsolidationConfig;

		/** <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> */
		PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice | null;
	}


	/** Provided configuration information for the worker UI for a labeling job.  */
	export interface UiConfig {
		UiTemplateS3Uri?: string | null;
		HumanTaskUiArn?: string | null;
	}


	/** Configures how labels are consolidated across human workers. */
	export interface AnnotationConsolidationConfig {
		AnnotationConsolidationLambdaArn: string;
	}

	export interface CreateModelOutput {
		ModelArn: string;
	}

	export interface CreateModelInput {
		ModelName: string;

		/** Describes the container, as part of model definition. */
		PrimaryContainer?: ContainerDefinition | null;
		Containers?: Array<ContainerDefinition> | null;
		ExecutionRoleArn: string;
		Tags?: Array<Tag> | null;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig | null;
		EnableNetworkIsolation?: boolean | null;
	}


	/** Describes the container, as part of model definition. */
	export interface ContainerDefinition {
		ContainerHostname?: string | null;
		Image?: string | null;
		Mode?: ContainerDefinitionMode | null;
		ModelDataUrl?: string | null;
		Environment?: EnvironmentMap | null;
		ModelPackageName?: string | null;
	}

	export enum ContainerDefinitionMode { SingleModel = 0, MultiModel = 1 }

	export interface EnvironmentMap {
	}

	export interface CreateModelPackageOutput {
		ModelPackageArn: string;
	}

	export interface CreateModelPackageInput {
		ModelPackageName: string;
		ModelPackageDescription?: string | null;

		/** Defines how to perform inference generation after a training job is run. */
		InferenceSpecification?: InferenceSpecification | null;

		/** Specifies batch transform jobs that Amazon SageMaker runs to validate your model package. */
		ValidationSpecification?: ModelPackageValidationSpecification | null;

		/** A list of algorithms that were used to create a model package. */
		SourceAlgorithmSpecification?: SourceAlgorithmSpecification | null;
		CertifyForMarketplace?: boolean | null;
	}


	/** Specifies batch transform jobs that Amazon SageMaker runs to validate your model package. */
	export interface ModelPackageValidationSpecification {
		ValidationRole: string;
		ValidationProfiles: Array<ModelPackageValidationProfile>;
	}


	/** <p>Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p> */
	export interface ModelPackageValidationProfile {
		ProfileName: string;

		/**
		 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
		 * Required
		 */
		TransformJobDefinition: TransformJobDefinition;
	}


	/** A list of algorithms that were used to create a model package. */
	export interface SourceAlgorithmSpecification {
		SourceAlgorithms: Array<SourceAlgorithm>;
	}


	/** Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to. */
	export interface SourceAlgorithm {
		ModelDataUrl?: string | null;
		AlgorithmName: string;
	}

	export interface CreateMonitoringScheduleResponse {
		MonitoringScheduleArn: string;
	}

	export interface CreateMonitoringScheduleRequest {
		MonitoringScheduleName: string;

		/**
		 * Configures the monitoring schedule and defines the monitoring job.
		 * Required
		 */
		MonitoringScheduleConfig: MonitoringScheduleConfig;
		Tags?: Array<Tag> | null;
	}


	/** Configures the monitoring schedule and defines the monitoring job. */
	export interface MonitoringScheduleConfig {

		/** Configuration details about the monitoring schedule. */
		ScheduleConfig?: ScheduleConfig | null;

		/**
		 * Defines the monitoring job.
		 * Required
		 */
		MonitoringJobDefinition: MonitoringJobDefinition;
	}


	/** Configuration details about the monitoring schedule. */
	export interface ScheduleConfig {
		ScheduleExpression: string;
	}


	/** Defines the monitoring job. */
	export interface MonitoringJobDefinition {

		/** Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically. */
		BaselineConfig?: MonitoringBaselineConfig | null;
		MonitoringInputs: Array<MonitoringInput>;

		/**
		 * The output configuration for monitoring jobs.
		 * Required
		 */
		MonitoringOutputConfig: MonitoringOutputConfig;

		/**
		 * Identifies the resources to deploy for a monitoring job.
		 * Required
		 */
		MonitoringResources: MonitoringResources;

		/**
		 * Container image configuration object for the monitoring job.
		 * Required
		 */
		MonitoringAppSpecification: MonitoringAppSpecification;

		/** A time limit for how long the monitoring job is allowed to run before stopping. */
		StoppingCondition?: MonitoringStoppingCondition | null;
		Environment?: MonitoringEnvironmentMap | null;

		/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
		NetworkConfig?: NetworkConfig | null;
		RoleArn: string;
	}


	/** Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically. */
	export interface MonitoringBaselineConfig {

		/** The constraints resource for a monitoring job. */
		ConstraintsResource?: MonitoringConstraintsResource | null;

		/** The statistics resource for a monitoring job. */
		StatisticsResource?: MonitoringStatisticsResource | null;
	}


	/** The constraints resource for a monitoring job. */
	export interface MonitoringConstraintsResource {
		S3Uri?: string | null;
	}


	/** The statistics resource for a monitoring job. */
	export interface MonitoringStatisticsResource {
		S3Uri?: string | null;
	}


	/** The inputs for a monitoring job. */
	export interface MonitoringInput {

		/**
		 * Input object for the endpoint
		 * Required
		 */
		EndpointInput: EndpointInput;
	}


	/** Input object for the endpoint */
	export interface EndpointInput {
		EndpointName: string;
		LocalPath: string;
		S3InputMode?: TrainingInputMode | null;
		S3DataDistributionType?: S3DataSourceS3DataDistributionType | null;
	}


	/** The output configuration for monitoring jobs. */
	export interface MonitoringOutputConfig {
		MonitoringOutputs: Array<MonitoringOutput>;
		KmsKeyId?: string | null;
	}


	/** The output object for a monitoring job. */
	export interface MonitoringOutput {

		/**
		 * Information about where and how you want to store the results of a monitoring job.
		 * Required
		 */
		S3Output: MonitoringS3Output;
	}


	/** Information about where and how you want to store the results of a monitoring job. */
	export interface MonitoringS3Output {
		S3Uri: string;
		LocalPath: string;
		S3UploadMode?: MonitoringS3OutputS3UploadMode | null;
	}

	export enum MonitoringS3OutputS3UploadMode { Continuous = 0, EndOfJob = 1 }


	/** Identifies the resources to deploy for a monitoring job. */
	export interface MonitoringResources {

		/**
		 * Configuration for the cluster used to run model monitoring jobs.
		 * Required
		 */
		ClusterConfig: MonitoringClusterConfig;
	}


	/** Configuration for the cluster used to run model monitoring jobs. */
	export interface MonitoringClusterConfig {
		InstanceCount: number;
		InstanceType: MonitoringClusterConfigInstanceType;
		VolumeSizeInGB: number;
		VolumeKmsKeyId?: string | null;
	}

	export enum MonitoringClusterConfigInstanceType { ml_t3_medium = 0, ml_t3_large = 1, ml_t3_xlarge = 2, ml_t3_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_c4_xlarge = 9, ml_c4_2xlarge = 10, ml_c4_4xlarge = 11, ml_c4_8xlarge = 12, ml_p2_xlarge = 13, ml_p2_8xlarge = 14, ml_p2_16xlarge = 15, ml_p3_2xlarge = 16, ml_p3_8xlarge = 17, ml_p3_16xlarge = 18, ml_c5_xlarge = 19, ml_c5_2xlarge = 20, ml_c5_4xlarge = 21, ml_c5_9xlarge = 22, ml_c5_18xlarge = 23, ml_m5_large = 24, ml_m5_xlarge = 25, ml_m5_2xlarge = 26, ml_m5_4xlarge = 27, ml_m5_12xlarge = 28, ml_m5_24xlarge = 29, ml_r5_large = 30, ml_r5_xlarge = 31, ml_r5_2xlarge = 32, ml_r5_4xlarge = 33, ml_r5_8xlarge = 34, ml_r5_12xlarge = 35, ml_r5_16xlarge = 36, ml_r5_24xlarge = 37 }


	/** Container image configuration object for the monitoring job. */
	export interface MonitoringAppSpecification {
		ImageUri: string;
		ContainerEntrypoint?: Array<string> | null;
		ContainerArguments?: Array<string> | null;
		RecordPreprocessorSourceUri?: string | null;
		PostAnalyticsProcessorSourceUri?: string | null;
	}


	/** A time limit for how long the monitoring job is allowed to run before stopping. */
	export interface MonitoringStoppingCondition {
		MaxRuntimeInSeconds: number;
	}

	export interface MonitoringEnvironmentMap {
	}


	/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
	export interface NetworkConfig {
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableNetworkIsolation?: boolean | null;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig | null;
	}

	export interface CreateNotebookInstanceOutput {
		NotebookInstanceArn?: string | null;
	}

	export interface CreateNotebookInstanceInput {
		NotebookInstanceName: string;
		InstanceType: CreateNotebookInstanceInputInstanceType;
		SubnetId?: string | null;
		SecurityGroupIds?: Array<string> | null;
		RoleArn: string;
		KmsKeyId?: string | null;
		Tags?: Array<Tag> | null;
		LifecycleConfigName?: string | null;
		DirectInternetAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;
		VolumeSizeInGB?: number | null;
		AcceleratorTypes?: Array<NotebookInstanceAcceleratorType> | null;
		DefaultCodeRepository?: string | null;
		AdditionalCodeRepositories?: Array<string> | null;
		RootAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;
	}

	export enum CreateNotebookInstanceInputInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export enum CreateNotebookInstanceInputDirectInternetAccess { Enabled = 0, Disabled = 1 }

	export enum NotebookInstanceAcceleratorType { ml_eia1_medium = 0, ml_eia1_large = 1, ml_eia1_xlarge = 2, ml_eia2_medium = 3, ml_eia2_large = 4, ml_eia2_xlarge = 5 }

	export interface CreateNotebookInstanceLifecycleConfigOutput {
		NotebookInstanceLifecycleConfigArn?: string | null;
	}

	export interface CreateNotebookInstanceLifecycleConfigInput {
		NotebookInstanceLifecycleConfigName: string;
		OnCreate?: Array<NotebookInstanceLifecycleHook> | null;
		OnStart?: Array<NotebookInstanceLifecycleHook> | null;
	}


	/** <p>Contains the notebook instance lifecycle configuration script.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p> */
	export interface NotebookInstanceLifecycleHook {
		Content?: string | null;
	}

	export interface CreatePresignedDomainUrlResponse {
		AuthorizedUrl?: string | null;
	}

	export interface CreatePresignedDomainUrlRequest {
		DomainId: string;
		UserProfileName: string;
		SessionExpirationDurationInSeconds?: number | null;
	}

	export interface CreatePresignedNotebookInstanceUrlOutput {
		AuthorizedUrl?: string | null;
	}

	export interface CreatePresignedNotebookInstanceUrlInput {
		NotebookInstanceName: string;
		SessionExpirationDurationInSeconds?: number | null;
	}

	export interface CreateProcessingJobResponse {
		ProcessingJobArn: string;
	}

	export interface CreateProcessingJobRequest {
		ProcessingInputs?: Array<ProcessingInput> | null;

		/** The output configuration for the processing job. */
		ProcessingOutputConfig?: ProcessingOutputConfig | null;
		ProcessingJobName: string;

		/**
		 * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
		 * Required
		 */
		ProcessingResources: ProcessingResources;

		/** Specifies a time limit for how long the processing job is allowed to run. */
		StoppingCondition?: ProcessingStoppingCondition | null;

		/**
		 * Configuration to run a processing job in a specified container image.
		 * Required
		 */
		AppSpecification: AppSpecification;
		Environment?: ProcessingEnvironmentMap | null;

		/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
		NetworkConfig?: NetworkConfig | null;
		RoleArn: string;
		Tags?: Array<Tag> | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig | null;
	}


	/** The inputs for a processing job. */
	export interface ProcessingInput {
		InputName: string;

		/**
		 * Information about where and how you want to obtain the inputs for an processing job.
		 * Required
		 */
		S3Input: ProcessingS3Input;
	}


	/** Information about where and how you want to obtain the inputs for an processing job. */
	export interface ProcessingS3Input {
		S3Uri: string;
		LocalPath: string;
		S3DataType: AutoMLS3DataSourceS3DataType;
		S3InputMode: TrainingInputMode;
		S3DataDistributionType?: S3DataSourceS3DataDistributionType | null;
		S3CompressionType?: CompressionType | null;
	}


	/** The output configuration for the processing job. */
	export interface ProcessingOutputConfig {
		Outputs: Array<ProcessingOutput>;
		KmsKeyId?: string | null;
	}


	/** Describes the results of a processing job. */
	export interface ProcessingOutput {
		OutputName: string;

		/**
		 * Information about where and how you want to store the results of an processing job.
		 * Required
		 */
		S3Output: ProcessingS3Output;
	}


	/** Information about where and how you want to store the results of an processing job. */
	export interface ProcessingS3Output {
		S3Uri: string;
		LocalPath: string;
		S3UploadMode: MonitoringS3OutputS3UploadMode;
	}


	/** Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance. */
	export interface ProcessingResources {

		/**
		 * Configuration for the cluster used to run a processing job.
		 * Required
		 */
		ClusterConfig: ProcessingClusterConfig;
	}


	/** Configuration for the cluster used to run a processing job. */
	export interface ProcessingClusterConfig {
		InstanceCount: number;
		InstanceType: ProcessingClusterConfigInstanceType;
		VolumeSizeInGB: number;
		VolumeKmsKeyId?: string | null;
	}

	export enum ProcessingClusterConfigInstanceType { ml_t3_medium = 0, ml_t3_large = 1, ml_t3_xlarge = 2, ml_t3_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_c4_xlarge = 9, ml_c4_2xlarge = 10, ml_c4_4xlarge = 11, ml_c4_8xlarge = 12, ml_p2_xlarge = 13, ml_p2_8xlarge = 14, ml_p2_16xlarge = 15, ml_p3_2xlarge = 16, ml_p3_8xlarge = 17, ml_p3_16xlarge = 18, ml_c5_xlarge = 19, ml_c5_2xlarge = 20, ml_c5_4xlarge = 21, ml_c5_9xlarge = 22, ml_c5_18xlarge = 23, ml_m5_large = 24, ml_m5_xlarge = 25, ml_m5_2xlarge = 26, ml_m5_4xlarge = 27, ml_m5_12xlarge = 28, ml_m5_24xlarge = 29, ml_r5_large = 30, ml_r5_xlarge = 31, ml_r5_2xlarge = 32, ml_r5_4xlarge = 33, ml_r5_8xlarge = 34, ml_r5_12xlarge = 35, ml_r5_16xlarge = 36, ml_r5_24xlarge = 37 }


	/** Specifies a time limit for how long the processing job is allowed to run. */
	export interface ProcessingStoppingCondition {
		MaxRuntimeInSeconds: number;
	}


	/** Configuration to run a processing job in a specified container image. */
	export interface AppSpecification {
		ImageUri: string;
		ContainerEntrypoint?: Array<string> | null;
		ContainerArguments?: Array<string> | null;
	}

	export interface ProcessingEnvironmentMap {
	}


	/** Configuration for the experiment. */
	export interface ExperimentConfig {
		ExperimentName?: string | null;
		TrialName?: string | null;
		TrialComponentDisplayName?: string | null;
	}

	export interface CreateTrainingJobResponse {
		TrainingJobArn: string;
	}

	export interface CreateTrainingJobRequest {
		TrainingJobName: string;
		HyperParameters?: HyperParameters | null;

		/**
		 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
		 * Required
		 */
		AlgorithmSpecification: AlgorithmSpecification;
		RoleArn: string;
		InputDataConfig?: Array<Channel> | null;

		/**
		 * Provides information about how to store model training results (model artifacts).
		 * Required
		 */
		OutputDataConfig: OutputDataConfig;

		/**
		 * Describes the resources, including ML compute instances and ML storage volumes, to use for model training.
		 * Required
		 */
		ResourceConfig: ResourceConfig;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig | null;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;
		Tags?: Array<Tag> | null;
		EnableNetworkIsolation?: boolean | null;
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableManagedSpotTraining?: boolean | null;

		/** Contains information about the output location for managed spot training checkpoint data. */
		CheckpointConfig?: CheckpointConfig | null;

		/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
		DebugHookConfig?: DebugHookConfig | null;
		DebugRuleConfigurations?: Array<DebugRuleConfiguration> | null;

		/** Configuration of storage locations for TensorBoard output. */
		TensorBoardOutputConfig?: TensorBoardOutputConfig | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig | null;
	}


	/** <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p> */
	export interface AlgorithmSpecification {
		TrainingImage?: string | null;
		AlgorithmName?: string | null;
		TrainingInputMode: TrainingInputMode;
		MetricDefinitions?: Array<MetricDefinition> | null;
		EnableSageMakerMetricsTimeSeries?: boolean | null;
	}


	/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
	export interface DebugHookConfig {
		LocalPath?: string | null;
		S3OutputPath: string;
		HookParameters?: HookParameters | null;
		CollectionConfigurations?: Array<CollectionConfiguration> | null;
	}

	export interface HookParameters {
	}


	/** Configuration information for tensor collections. */
	export interface CollectionConfiguration {
		CollectionName?: string | null;
		CollectionParameters?: CollectionParameters | null;
	}

	export interface CollectionParameters {
	}


	/** Configuration information for debugging rules. */
	export interface DebugRuleConfiguration {
		RuleConfigurationName: string;
		LocalPath?: string | null;
		S3OutputPath?: string | null;
		RuleEvaluatorImage: string;
		InstanceType?: DebugRuleConfigurationInstanceType | null;
		VolumeSizeInGB?: number | null;
		RuleParameters?: RuleParameters | null;
	}

	export enum DebugRuleConfigurationInstanceType { ml_t3_medium = 0, ml_t3_large = 1, ml_t3_xlarge = 2, ml_t3_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_c4_xlarge = 9, ml_c4_2xlarge = 10, ml_c4_4xlarge = 11, ml_c4_8xlarge = 12, ml_p2_xlarge = 13, ml_p2_8xlarge = 14, ml_p2_16xlarge = 15, ml_p3_2xlarge = 16, ml_p3_8xlarge = 17, ml_p3_16xlarge = 18, ml_c5_xlarge = 19, ml_c5_2xlarge = 20, ml_c5_4xlarge = 21, ml_c5_9xlarge = 22, ml_c5_18xlarge = 23, ml_m5_large = 24, ml_m5_xlarge = 25, ml_m5_2xlarge = 26, ml_m5_4xlarge = 27, ml_m5_12xlarge = 28, ml_m5_24xlarge = 29, ml_r5_large = 30, ml_r5_xlarge = 31, ml_r5_2xlarge = 32, ml_r5_4xlarge = 33, ml_r5_8xlarge = 34, ml_r5_12xlarge = 35, ml_r5_16xlarge = 36, ml_r5_24xlarge = 37 }

	export interface RuleParameters {
	}


	/** Configuration of storage locations for TensorBoard output. */
	export interface TensorBoardOutputConfig {
		LocalPath?: string | null;
		S3OutputPath: string;
	}

	export interface CreateTransformJobResponse {
		TransformJobArn: string;
	}

	export interface CreateTransformJobRequest {
		TransformJobName: string;
		ModelName: string;
		MaxConcurrentTransforms?: number | null;
		MaxPayloadInMB?: number | null;
		BatchStrategy?: TransformJobDefinitionBatchStrategy | null;
		Environment?: TransformEnvironmentMap | null;

		/**
		 * Describes the input source of a transform job and the way the transform job consumes it.
		 * Required
		 */
		TransformInput: TransformInput;

		/**
		 * Describes the results of a transform job.
		 * Required
		 */
		TransformOutput: TransformOutput;

		/**
		 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
		 * Required
		 */
		TransformResources: TransformResources;

		/** The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>. */
		DataProcessing?: DataProcessing | null;
		Tags?: Array<Tag> | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig | null;
	}


	/** The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>. */
	export interface DataProcessing {
		InputFilter?: string | null;
		OutputFilter?: string | null;
		JoinSource?: DataProcessingJoinSource | null;
	}

	export enum DataProcessingJoinSource { Input = 0, None = 1 }

	export interface CreateTrialResponse {
		TrialArn?: string | null;
	}

	export interface CreateTrialRequest {
		TrialName: string;
		DisplayName?: string | null;
		ExperimentName: string;
		Tags?: Array<Tag> | null;
	}

	export interface CreateTrialComponentResponse {
		TrialComponentArn?: string | null;
	}

	export interface CreateTrialComponentRequest {
		TrialComponentName: string;
		DisplayName?: string | null;

		/** The status of the trial component. */
		Status?: TrialComponentStatus | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Parameters?: TrialComponentParameters | null;
		InputArtifacts?: TrialComponentArtifacts | null;
		OutputArtifacts?: TrialComponentArtifacts | null;
		Tags?: Array<Tag> | null;
	}


	/** The status of the trial component. */
	export interface TrialComponentStatus {
		PrimaryStatus?: TrialComponentStatusPrimaryStatus | null;
		Message?: string | null;
	}

	export enum TrialComponentStatusPrimaryStatus { InProgress = 0, Completed = 1, Failed = 2, Stopping = 3, Stopped = 4 }

	export interface TrialComponentParameters {
	}

	export interface TrialComponentArtifacts {
	}

	export interface CreateUserProfileResponse {
		UserProfileArn?: string | null;
	}

	export interface CreateUserProfileRequest {
		DomainId: string;
		UserProfileName: string;
		SingleSignOnUserIdentifier?: string | null;
		SingleSignOnUserValue?: string | null;
		Tags?: Array<Tag> | null;

		/** A collection of settings. */
		UserSettings?: UserSettings | null;
	}

	export interface CreateWorkteamResponse {
		WorkteamArn?: string | null;
	}

	export interface CreateWorkteamRequest {
		WorkteamName: string;
		MemberDefinitions: Array<MemberDefinition>;
		Description: string;

		/** Configures SNS notifications of available or expiring work items for work teams. */
		NotificationConfiguration?: NotificationConfiguration | null;
		Tags?: Array<Tag> | null;
	}


	/** Defines the Amazon Cognito user group that is part of a work team. */
	export interface MemberDefinition {

		/** Identifies a Amazon Cognito user group. A user group can be used in on or more work teams. */
		CognitoMemberDefinition?: CognitoMemberDefinition | null;
	}


	/** Identifies a Amazon Cognito user group. A user group can be used in on or more work teams. */
	export interface CognitoMemberDefinition {
		UserPool: string;
		UserGroup: string;
		ClientId: string;
	}


	/** Configures SNS notifications of available or expiring work items for work teams. */
	export interface NotificationConfiguration {
		NotificationTopicArn?: string | null;
	}

	export interface DeleteAlgorithmInput {
		AlgorithmName: string;
	}

	export interface DeleteAppRequest {
		DomainId: string;
		UserProfileName: string;
		AppType: CreateAppRequestAppType;
		AppName: string;
	}

	export interface DeleteCodeRepositoryInput {
		CodeRepositoryName: string;
	}

	export interface DeleteDomainRequest {
		DomainId: string;

		/** The retention policy for data stored on an Amazon Elastic File System (EFS) volume. */
		RetentionPolicy?: RetentionPolicy | null;
	}


	/** The retention policy for data stored on an Amazon Elastic File System (EFS) volume. */
	export interface RetentionPolicy {
		HomeEfsFileSystem?: RetentionPolicyHomeEfsFileSystem | null;
	}

	export enum RetentionPolicyHomeEfsFileSystem { Retain = 0, Delete = 1 }

	export interface DeleteEndpointInput {
		EndpointName: string;
	}

	export interface DeleteEndpointConfigInput {
		EndpointConfigName: string;
	}

	export interface DeleteExperimentResponse {
		ExperimentArn?: string | null;
	}

	export interface DeleteExperimentRequest {
		ExperimentName: string;
	}

	export interface DeleteFlowDefinitionResponse {
	}

	export interface DeleteFlowDefinitionRequest {
		FlowDefinitionName: string;
	}

	export interface DeleteModelInput {
		ModelName: string;
	}

	export interface DeleteModelPackageInput {
		ModelPackageName: string;
	}

	export interface DeleteMonitoringScheduleRequest {
		MonitoringScheduleName: string;
	}

	export interface DeleteNotebookInstanceInput {
		NotebookInstanceName: string;
	}

	export interface DeleteNotebookInstanceLifecycleConfigInput {
		NotebookInstanceLifecycleConfigName: string;
	}

	export interface DeleteTagsOutput {
	}

	export interface DeleteTagsInput {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export interface DeleteTrialResponse {
		TrialArn?: string | null;
	}

	export interface DeleteTrialRequest {
		TrialName: string;
	}

	export interface DeleteTrialComponentResponse {
		TrialComponentArn?: string | null;
	}

	export interface DeleteTrialComponentRequest {
		TrialComponentName: string;
	}

	export interface DeleteUserProfileRequest {
		DomainId: string;
		UserProfileName: string;
	}

	export interface DeleteWorkteamResponse {
		Success: boolean;
	}

	export interface DeleteWorkteamRequest {
		WorkteamName: string;
	}

	export interface DescribeAlgorithmOutput {
		AlgorithmName: string;
		AlgorithmArn: string;
		AlgorithmDescription?: string | null;
		CreationTime: Date;

		/**
		 * Defines how the algorithm is used for a training job.
		 * Required
		 */
		TrainingSpecification: TrainingSpecification;

		/** Defines how to perform inference generation after a training job is run. */
		InferenceSpecification?: InferenceSpecification | null;

		/** Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm. */
		ValidationSpecification?: AlgorithmValidationSpecification | null;
		AlgorithmStatus: DescribeAlgorithmOutputAlgorithmStatus;

		/**
		 * Specifies the validation and image scan statuses of the algorithm.
		 * Required
		 */
		AlgorithmStatusDetails: AlgorithmStatusDetails;
		ProductId?: string | null;
		CertifyForMarketplace?: boolean | null;
	}

	export enum DescribeAlgorithmOutputAlgorithmStatus { Pending = 0, InProgress = 1, Completed = 2, Failed = 3, Deleting = 4 }


	/** Specifies the validation and image scan statuses of the algorithm. */
	export interface AlgorithmStatusDetails {
		ValidationStatuses?: Array<AlgorithmStatusItem> | null;
		ImageScanStatuses?: Array<AlgorithmStatusItem> | null;
	}


	/** Represents the overall status of an algorithm. */
	export interface AlgorithmStatusItem {
		Name: string;
		Status: AlgorithmStatusItemStatus;
		FailureReason?: string | null;
	}

	export enum AlgorithmStatusItemStatus { NotStarted = 0, InProgress = 1, Completed = 2, Failed = 3 }

	export interface DescribeAlgorithmInput {
		AlgorithmName: string;
	}

	export interface DescribeAppResponse {
		AppArn?: string | null;
		AppType?: CreateAppRequestAppType | null;
		AppName?: string | null;
		DomainId?: string | null;
		UserProfileName?: string | null;
		Status?: DescribeAppResponseStatus | null;
		LastHealthCheckTimestamp?: Date | null;
		LastUserActivityTimestamp?: Date | null;
		CreationTime?: Date | null;
		FailureReason?: string | null;

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		ResourceSpec?: ResourceSpec | null;
	}

	export enum DescribeAppResponseStatus { Deleted = 0, Deleting = 1, Failed = 2, InService = 3, Pending = 4 }

	export interface DescribeAppRequest {
		DomainId: string;
		UserProfileName: string;
		AppType: CreateAppRequestAppType;
		AppName: string;
	}

	export interface DescribeAutoMLJobResponse {
		AutoMLJobName: string;
		AutoMLJobArn: string;
		InputDataConfig: Array<AutoMLChannel>;

		/**
		 * The output data configuration.
		 * Required
		 */
		OutputDataConfig: AutoMLOutputDataConfig;
		RoleArn: string;

		/** Applies a metric to minimize or maximize for the job's objective. */
		AutoMLJobObjective?: AutoMLJobObjective | null;
		ProblemType?: CreateAutoMLJobRequestProblemType | null;

		/** A collection of settings used for a job. */
		AutoMLJobConfig?: AutoMLJobConfig | null;
		CreationTime: Date;
		EndTime?: Date | null;
		LastModifiedTime: Date;
		FailureReason?: string | null;

		/** An AutoPilot job will return recommendations, or candidates. Each candidate has futher details about the steps involed, and the status. */
		BestCandidate?: AutoMLCandidate | null;
		AutoMLJobStatus: AutoMLCandidateCandidateStatus;
		AutoMLJobSecondaryStatus: DescribeAutoMLJobResponseAutoMLJobSecondaryStatus;
		GenerateCandidateDefinitionsOnly?: boolean | null;

		/** Artifacts that are generation during a job. */
		AutoMLJobArtifacts?: AutoMLJobArtifacts | null;

		/** The resolved attributes. */
		ResolvedAttributes?: ResolvedAttributes | null;
	}


	/** An AutoPilot job will return recommendations, or candidates. Each candidate has futher details about the steps involed, and the status. */
	export interface AutoMLCandidate {
		CandidateName: string;

		/** The candidate result from a job. */
		FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric | null;
		ObjectiveStatus: AutoMLCandidateObjectiveStatus;
		CandidateSteps: Array<AutoMLCandidateStep>;
		CandidateStatus: AutoMLCandidateCandidateStatus;
		InferenceContainers?: Array<AutoMLContainerDefinition> | null;
		CreationTime: Date;
		EndTime?: Date | null;
		LastModifiedTime: Date;
		FailureReason?: string | null;
	}


	/** The candidate result from a job. */
	export interface FinalAutoMLJobObjectiveMetric {
		Type?: HyperParameterTuningJobObjectiveType | null;
		MetricName: AutoMLJobObjectiveMetricName;
		Value: number;
	}

	export enum AutoMLCandidateObjectiveStatus { Succeeded = 0, Pending = 1, Failed = 2 }


	/** Information about the steps for a Candidate, and what step it is working on. */
	export interface AutoMLCandidateStep {
		CandidateStepType: AutoMLCandidateStepCandidateStepType;
		CandidateStepArn: string;
		CandidateStepName: string;
	}

	export enum AutoMLCandidateStepCandidateStepType { AWSSageMakerTrainingJob = 0, AWSSageMakerTransformJob = 1, AWSSageMakerProcessingJob = 2 }

	export enum AutoMLCandidateCandidateStatus { Completed = 0, InProgress = 1, Failed = 2, Stopped = 3, Stopping = 4 }


	/** A list of container definitions that describe the different containers that make up one AutoML candidate. Refer to ContainerDefinition for more details. */
	export interface AutoMLContainerDefinition {
		Image: string;
		ModelDataUrl: string;
		Environment?: EnvironmentMap | null;
	}

	export enum DescribeAutoMLJobResponseAutoMLJobSecondaryStatus { Starting = 0, AnalyzingData = 1, FeatureEngineering = 2, ModelTuning = 3, MaxCandidatesReached = 4, Failed = 5, Stopped = 6, MaxAutoMLJobRuntimeReached = 7, Stopping = 8, CandidateDefinitionsGenerated = 9 }


	/** Artifacts that are generation during a job. */
	export interface AutoMLJobArtifacts {
		CandidateDefinitionNotebookLocation?: string | null;
		DataExplorationNotebookLocation?: string | null;
	}


	/** The resolved attributes. */
	export interface ResolvedAttributes {

		/** Applies a metric to minimize or maximize for the job's objective. */
		AutoMLJobObjective?: AutoMLJobObjective | null;
		ProblemType?: CreateAutoMLJobRequestProblemType | null;

		/** How long a job is allowed to run, or how many candidates a job is allowed to generate. */
		CompletionCriteria?: AutoMLJobCompletionCriteria | null;
	}

	export interface DescribeAutoMLJobRequest {
		AutoMLJobName: string;
	}

	export interface DescribeCodeRepositoryOutput {
		CodeRepositoryName: string;
		CodeRepositoryArn: string;
		CreationTime: Date;
		LastModifiedTime: Date;

		/** Specifies configuration details for a Git repository in your AWS account. */
		GitConfig?: GitConfig | null;
	}

	export interface DescribeCodeRepositoryInput {
		CodeRepositoryName: string;
	}

	export interface DescribeCompilationJobResponse {
		CompilationJobName: string;
		CompilationJobArn: string;
		CompilationJobStatus: DescribeCompilationJobResponseCompilationJobStatus;
		CompilationStartTime?: Date | null;
		CompilationEndTime?: Date | null;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;
		CreationTime: Date;
		LastModifiedTime: Date;
		FailureReason: string;

		/**
		 * <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p>
		 * Required
		 */
		ModelArtifacts: ModelArtifacts;
		RoleArn: string;

		/**
		 * Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
		 * Required
		 */
		InputConfig: InputConfig;

		/**
		 * Contains information about the output location for the compiled model and the device (target) that the model runs on.
		 * Required
		 */
		OutputConfig: OutputConfig;
	}

	export enum DescribeCompilationJobResponseCompilationJobStatus { INPROGRESS = 0, COMPLETED = 1, FAILED = 2, STARTING = 3, STOPPING = 4, STOPPED = 5 }


	/** <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p> */
	export interface ModelArtifacts {
		S3ModelArtifacts: string;
	}

	export interface DescribeCompilationJobRequest {
		CompilationJobName: string;
	}

	export interface DescribeDomainResponse {
		DomainArn?: string | null;
		DomainId?: string | null;
		DomainName?: string | null;
		HomeEfsFileSystemId?: string | null;
		SingleSignOnManagedApplicationInstanceId?: string | null;
		Status?: DescribeDomainResponseStatus | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
		FailureReason?: string | null;
		AuthMode?: CreateDomainRequestAuthMode | null;

		/** A collection of settings. */
		DefaultUserSettings?: UserSettings | null;
		HomeEfsFileSystemKmsKeyId?: string | null;
		SubnetIds?: Array<string> | null;
		Url?: string | null;
		VpcId?: string | null;
	}

	export enum DescribeDomainResponseStatus { Deleting = 0, Failed = 1, InService = 2, Pending = 3 }

	export interface DescribeDomainRequest {
		DomainId: string;
	}

	export interface DescribeEndpointOutput {
		EndpointName: string;
		EndpointArn: string;
		EndpointConfigName: string;
		ProductionVariants?: Array<ProductionVariantSummary> | null;

		/** <p/> */
		DataCaptureConfig?: DataCaptureConfigSummary | null;
		EndpointStatus: DescribeEndpointOutputEndpointStatus;
		FailureReason?: string | null;
		CreationTime: Date;
		LastModifiedTime: Date;
	}


	/** Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values.  */
	export interface ProductionVariantSummary {
		VariantName: string;
		DeployedImages?: Array<DeployedImage> | null;
		CurrentWeight?: number | null;
		DesiredWeight?: number | null;
		CurrentInstanceCount?: number | null;
		DesiredInstanceCount?: number | null;
	}


	/** <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p> */
	export interface DeployedImage {
		SpecifiedImage?: string | null;
		ResolvedImage?: string | null;
		ResolutionTime?: Date | null;
	}


	/** <p/> */
	export interface DataCaptureConfigSummary {
		EnableCapture: boolean;
		CaptureStatus: DataCaptureConfigSummaryCaptureStatus;
		CurrentSamplingPercentage: number;
		DestinationS3Uri: string;
		KmsKeyId: string;
	}

	export enum DataCaptureConfigSummaryCaptureStatus { Started = 0, Stopped = 1 }

	export enum DescribeEndpointOutputEndpointStatus { OutOfService = 0, Creating = 1, Updating = 2, SystemUpdating = 3, RollingBack = 4, InService = 5, Deleting = 6, Failed = 7 }

	export interface DescribeEndpointInput {
		EndpointName: string;
	}

	export interface DescribeEndpointConfigOutput {
		EndpointConfigName: string;
		EndpointConfigArn: string;
		ProductionVariants: Array<ProductionVariant>;

		/** <p/> */
		DataCaptureConfig?: DataCaptureConfig | null;
		KmsKeyId?: string | null;
		CreationTime: Date;
	}

	export interface DescribeEndpointConfigInput {
		EndpointConfigName: string;
	}

	export interface DescribeExperimentResponse {
		ExperimentName?: string | null;
		ExperimentArn?: string | null;
		DisplayName?: string | null;

		/** The source of the experiment. */
		Source?: ExperimentSource | null;
		Description?: string | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext | null;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext | null;
	}


	/** The source of the experiment. */
	export interface ExperimentSource {
		SourceArn: string;
		SourceType?: string | null;
	}


	/** Information about the user who created or modified an experiment, trial, or trial component. */
	export interface UserContext {
		UserProfileArn?: string | null;
		UserProfileName?: string | null;
		DomainId?: string | null;
	}

	export interface DescribeExperimentRequest {
		ExperimentName: string;
	}

	export interface DescribeFlowDefinitionResponse {
		FlowDefinitionArn: string;
		FlowDefinitionName: string;
		FlowDefinitionStatus: DescribeFlowDefinitionResponseFlowDefinitionStatus;
		CreationTime: Date;

		/** Container for configuring the source of human task requests. */
		HumanLoopRequestSource?: HumanLoopRequestSource | null;

		/** Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans. */
		HumanLoopActivationConfig?: HumanLoopActivationConfig | null;

		/**
		 * Describes the work to be performed by human workers.
		 * Required
		 */
		HumanLoopConfig: HumanLoopConfig;

		/**
		 * Contains information about where human output will be stored.
		 * Required
		 */
		OutputConfig: FlowDefinitionOutputConfig;
		RoleArn: string;
		FailureReason?: string | null;
	}

	export enum DescribeFlowDefinitionResponseFlowDefinitionStatus { Initializing = 0, Active = 1, Failed = 2, Deleting = 3 }

	export interface DescribeFlowDefinitionRequest {
		FlowDefinitionName: string;
	}

	export interface DescribeHumanTaskUiResponse {
		HumanTaskUiArn: string;
		HumanTaskUiName: string;
		CreationTime: Date;

		/**
		 * Container for user interface template information.
		 * Required
		 */
		UiTemplate: UiTemplateInfo;
	}


	/** Container for user interface template information. */
	export interface UiTemplateInfo {
		Url?: string | null;
		ContentSha256?: string | null;
	}

	export interface DescribeHumanTaskUiRequest {
		HumanTaskUiName: string;
	}

	export interface DescribeHyperParameterTuningJobResponse {
		HyperParameterTuningJobName: string;
		HyperParameterTuningJobArn: string;

		/**
		 * Configures a hyperparameter tuning job.
		 * Required
		 */
		HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

		/** Defines the training jobs launched by a hyperparameter tuning job. */
		TrainingJobDefinition?: HyperParameterTrainingJobDefinition | null;
		TrainingJobDefinitions?: Array<HyperParameterTrainingJobDefinition> | null;
		HyperParameterTuningJobStatus: AutoMLCandidateCandidateStatus;
		CreationTime: Date;
		HyperParameterTuningEndTime?: Date | null;
		LastModifiedTime?: Date | null;

		/**
		 * The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
		 * Required
		 */
		TrainingJobStatusCounters: TrainingJobStatusCounters;

		/**
		 * Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
		 * Required
		 */
		ObjectiveStatusCounters: ObjectiveStatusCounters;

		/** Specifies summary information about a training job. */
		BestTrainingJob?: HyperParameterTrainingJobSummary | null;

		/** Specifies summary information about a training job. */
		OverallBestTrainingJob?: HyperParameterTrainingJobSummary | null;

		/** <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note> */
		WarmStartConfig?: HyperParameterTuningJobWarmStartConfig | null;
		FailureReason?: string | null;
	}


	/** The numbers of training jobs launched by a hyperparameter tuning job, categorized by status. */
	export interface TrainingJobStatusCounters {
		Completed?: number | null;
		InProgress?: number | null;
		RetryableError?: number | null;
		NonRetryableError?: number | null;
		Stopped?: number | null;
	}


	/** Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process. */
	export interface ObjectiveStatusCounters {
		Succeeded?: number | null;
		Pending?: number | null;
		Failed?: number | null;
	}


	/** Specifies summary information about a training job. */
	export interface HyperParameterTrainingJobSummary {
		TrainingJobDefinitionName?: string | null;
		TrainingJobName: string;
		TrainingJobArn: string;
		TuningJobName?: string | null;
		CreationTime: Date;
		TrainingStartTime?: Date | null;
		TrainingEndTime?: Date | null;
		TrainingJobStatus: TrialComponentStatusPrimaryStatus;
		TunedHyperParameters: HyperParameters;
		FailureReason?: string | null;

		/** Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>. */
		FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric | null;
		ObjectiveStatus?: AutoMLCandidateObjectiveStatus | null;
	}


	/** Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>. */
	export interface FinalHyperParameterTuningJobObjectiveMetric {
		Type?: HyperParameterTuningJobObjectiveType | null;
		MetricName: string;
		Value: number;
	}

	export interface DescribeHyperParameterTuningJobRequest {
		HyperParameterTuningJobName: string;
	}

	export interface DescribeLabelingJobResponse {
		LabelingJobStatus: TrialComponentStatusPrimaryStatus;

		/**
		 * Provides a breakdown of the number of objects labeled.
		 * Required
		 */
		LabelCounters: LabelCounters;
		FailureReason?: string | null;
		CreationTime: Date;
		LastModifiedTime: Date;
		JobReferenceCode: string;
		LabelingJobName: string;
		LabelingJobArn: string;
		LabelAttributeName?: string | null;

		/**
		 * Input configuration information for a labeling job.
		 * Required
		 */
		InputConfig: LabelingJobInputConfig;

		/**
		 * Output configuration information for a labeling job.
		 * Required
		 */
		OutputConfig: LabelingJobOutputConfig;
		RoleArn: string;
		LabelCategoryConfigS3Uri?: string | null;

		/** <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note> */
		StoppingConditions?: LabelingJobStoppingConditions | null;

		/** Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling. */
		LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig | null;

		/**
		 * Information required for human workers to complete a labeling task.
		 * Required
		 */
		HumanTaskConfig: HumanTaskConfig;
		Tags?: Array<Tag> | null;

		/** Specifies the location of the output produced by the labeling job. */
		LabelingJobOutput?: LabelingJobOutput | null;
	}


	/** Provides a breakdown of the number of objects labeled. */
	export interface LabelCounters {
		TotalLabeled?: number | null;
		HumanLabeled?: number | null;
		MachineLabeled?: number | null;
		FailedNonRetryableError?: number | null;
		Unlabeled?: number | null;
	}


	/** Specifies the location of the output produced by the labeling job.  */
	export interface LabelingJobOutput {
		OutputDatasetS3Uri: string;
		FinalActiveLearningModelArn?: string | null;
	}

	export interface DescribeLabelingJobRequest {
		LabelingJobName: string;
	}

	export interface DescribeModelOutput {
		ModelName: string;

		/** Describes the container, as part of model definition. */
		PrimaryContainer?: ContainerDefinition | null;
		Containers?: Array<ContainerDefinition> | null;
		ExecutionRoleArn: string;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig | null;
		CreationTime: Date;
		ModelArn: string;
		EnableNetworkIsolation?: boolean | null;
	}

	export interface DescribeModelInput {
		ModelName: string;
	}

	export interface DescribeModelPackageOutput {
		ModelPackageName: string;
		ModelPackageArn: string;
		ModelPackageDescription?: string | null;
		CreationTime: Date;

		/** Defines how to perform inference generation after a training job is run. */
		InferenceSpecification?: InferenceSpecification | null;

		/** A list of algorithms that were used to create a model package. */
		SourceAlgorithmSpecification?: SourceAlgorithmSpecification | null;

		/** Specifies batch transform jobs that Amazon SageMaker runs to validate your model package. */
		ValidationSpecification?: ModelPackageValidationSpecification | null;
		ModelPackageStatus: DescribeAlgorithmOutputAlgorithmStatus;

		/**
		 * Specifies the validation and image scan statuses of the model package.
		 * Required
		 */
		ModelPackageStatusDetails: ModelPackageStatusDetails;
		CertifyForMarketplace?: boolean | null;
	}


	/** Specifies the validation and image scan statuses of the model package. */
	export interface ModelPackageStatusDetails {
		ValidationStatuses: Array<ModelPackageStatusItem>;
		ImageScanStatuses?: Array<ModelPackageStatusItem> | null;
	}


	/** Represents the overall status of a model package. */
	export interface ModelPackageStatusItem {
		Name: string;
		Status: AlgorithmStatusItemStatus;
		FailureReason?: string | null;
	}

	export interface DescribeModelPackageInput {
		ModelPackageName: string;
	}

	export interface DescribeMonitoringScheduleResponse {
		MonitoringScheduleArn: string;
		MonitoringScheduleName: string;
		MonitoringScheduleStatus: DescribeMonitoringScheduleResponseMonitoringScheduleStatus;
		FailureReason?: string | null;
		CreationTime: Date;
		LastModifiedTime: Date;

		/**
		 * Configures the monitoring schedule and defines the monitoring job.
		 * Required
		 */
		MonitoringScheduleConfig: MonitoringScheduleConfig;
		EndpointName?: string | null;

		/** Summary of information about the last monitoring job to run. */
		LastMonitoringExecutionSummary?: MonitoringExecutionSummary | null;
	}

	export enum DescribeMonitoringScheduleResponseMonitoringScheduleStatus { Pending = 0, Failed = 1, Scheduled = 2, Stopped = 3 }


	/** Summary of information about the last monitoring job to run. */
	export interface MonitoringExecutionSummary {
		MonitoringScheduleName: string;
		ScheduledTime: Date;
		CreationTime: Date;
		LastModifiedTime: Date;
		MonitoringExecutionStatus: MonitoringExecutionSummaryMonitoringExecutionStatus;
		ProcessingJobArn?: string | null;
		EndpointName?: string | null;
		FailureReason?: string | null;
	}

	export enum MonitoringExecutionSummaryMonitoringExecutionStatus { Pending = 0, Completed = 1, CompletedWithViolations = 2, InProgress = 3, Failed = 4, Stopping = 5, Stopped = 6 }

	export interface DescribeMonitoringScheduleRequest {
		MonitoringScheduleName: string;
	}

	export interface DescribeNotebookInstanceOutput {
		NotebookInstanceArn?: string | null;
		NotebookInstanceName?: string | null;
		NotebookInstanceStatus?: DescribeNotebookInstanceOutputNotebookInstanceStatus | null;
		FailureReason?: string | null;
		Url?: string | null;
		InstanceType?: DescribeNotebookInstanceOutputInstanceType | null;
		SubnetId?: string | null;
		SecurityGroups?: Array<string> | null;
		RoleArn?: string | null;
		KmsKeyId?: string | null;
		NetworkInterfaceId?: string | null;
		LastModifiedTime?: Date | null;
		CreationTime?: Date | null;
		NotebookInstanceLifecycleConfigName?: string | null;
		DirectInternetAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;
		VolumeSizeInGB?: number | null;
		AcceleratorTypes?: Array<NotebookInstanceAcceleratorType> | null;
		DefaultCodeRepository?: string | null;
		AdditionalCodeRepositories?: Array<string> | null;
		RootAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;
	}

	export enum DescribeNotebookInstanceOutputNotebookInstanceStatus { Pending = 0, InService = 1, Stopping = 2, Stopped = 3, Failed = 4, Deleting = 5, Updating = 6 }

	export enum DescribeNotebookInstanceOutputInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export interface DescribeNotebookInstanceInput {
		NotebookInstanceName: string;
	}

	export interface DescribeNotebookInstanceLifecycleConfigOutput {
		NotebookInstanceLifecycleConfigArn?: string | null;
		NotebookInstanceLifecycleConfigName?: string | null;
		OnCreate?: Array<NotebookInstanceLifecycleHook> | null;
		OnStart?: Array<NotebookInstanceLifecycleHook> | null;
		LastModifiedTime?: Date | null;
		CreationTime?: Date | null;
	}

	export interface DescribeNotebookInstanceLifecycleConfigInput {
		NotebookInstanceLifecycleConfigName: string;
	}

	export interface DescribeProcessingJobResponse {
		ProcessingInputs?: Array<ProcessingInput> | null;

		/** The output configuration for the processing job. */
		ProcessingOutputConfig?: ProcessingOutputConfig | null;
		ProcessingJobName: string;

		/**
		 * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
		 * Required
		 */
		ProcessingResources: ProcessingResources;

		/** Specifies a time limit for how long the processing job is allowed to run. */
		StoppingCondition?: ProcessingStoppingCondition | null;

		/**
		 * Configuration to run a processing job in a specified container image.
		 * Required
		 */
		AppSpecification: AppSpecification;
		Environment?: ProcessingEnvironmentMap | null;

		/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
		NetworkConfig?: NetworkConfig | null;
		RoleArn?: string | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig | null;
		ProcessingJobArn: string;
		ProcessingJobStatus: TrialComponentStatusPrimaryStatus;
		ExitMessage?: string | null;
		FailureReason?: string | null;
		ProcessingEndTime?: Date | null;
		ProcessingStartTime?: Date | null;
		LastModifiedTime?: Date | null;
		CreationTime: Date;
		MonitoringScheduleArn?: string | null;
		AutoMLJobArn?: string | null;
		TrainingJobArn?: string | null;
	}

	export interface DescribeProcessingJobRequest {
		ProcessingJobName: string;
	}

	export interface DescribeSubscribedWorkteamResponse {

		/**
		 * Describes a work team of a vendor that does the a labelling job.
		 * Required
		 */
		SubscribedWorkteam: SubscribedWorkteam;
	}


	/** Describes a work team of a vendor that does the a labelling job. */
	export interface SubscribedWorkteam {
		WorkteamArn: string;
		MarketplaceTitle?: string | null;
		SellerName?: string | null;
		MarketplaceDescription?: string | null;
		ListingId?: string | null;
	}

	export interface DescribeSubscribedWorkteamRequest {
		WorkteamArn: string;
	}

	export interface DescribeTrainingJobResponse {
		TrainingJobName: string;
		TrainingJobArn: string;
		TuningJobArn?: string | null;
		LabelingJobArn?: string | null;
		AutoMLJobArn?: string | null;

		/**
		 * <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p>
		 * Required
		 */
		ModelArtifacts: ModelArtifacts;
		TrainingJobStatus: TrialComponentStatusPrimaryStatus;
		SecondaryStatus: DescribeTrainingJobResponseSecondaryStatus;
		FailureReason?: string | null;
		HyperParameters?: HyperParameters | null;

		/**
		 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
		 * Required
		 */
		AlgorithmSpecification: AlgorithmSpecification;
		RoleArn?: string | null;
		InputDataConfig?: Array<Channel> | null;

		/** Provides information about how to store model training results (model artifacts). */
		OutputDataConfig?: OutputDataConfig | null;

		/**
		 * Describes the resources, including ML compute instances and ML storage volumes, to use for model training.
		 * Required
		 */
		ResourceConfig: ResourceConfig;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig | null;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;
		CreationTime: Date;
		TrainingStartTime?: Date | null;
		TrainingEndTime?: Date | null;
		LastModifiedTime?: Date | null;
		SecondaryStatusTransitions?: Array<SecondaryStatusTransition> | null;
		FinalMetricDataList?: Array<MetricData> | null;
		EnableNetworkIsolation?: boolean | null;
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableManagedSpotTraining?: boolean | null;

		/** Contains information about the output location for managed spot training checkpoint data. */
		CheckpointConfig?: CheckpointConfig | null;
		TrainingTimeInSeconds?: number | null;
		BillableTimeInSeconds?: number | null;

		/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
		DebugHookConfig?: DebugHookConfig | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig | null;
		DebugRuleConfigurations?: Array<DebugRuleConfiguration> | null;

		/** Configuration of storage locations for TensorBoard output. */
		TensorBoardOutputConfig?: TensorBoardOutputConfig | null;
		DebugRuleEvaluationStatuses?: Array<DebugRuleEvaluationStatus> | null;
	}

	export enum DescribeTrainingJobResponseSecondaryStatus { Starting = 0, LaunchingMLInstances = 1, PreparingTrainingStack = 2, Downloading = 3, DownloadingTrainingImage = 4, Training = 5, Uploading = 6, Stopping = 7, Stopped = 8, MaxRuntimeExceeded = 9, Completed = 10, Failed = 11, Interrupted = 12, MaxWaitTimeExceeded = 13 }


	/** <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides additional details about a status that the training job has transitioned through. A training job can be in one of several states, for example, starting, downloading, training, or uploading. Within each state, there are a number of intermediate states. For example, within the starting state, Amazon SageMaker could be starting the training job or launching the ML instances. These transitional states are referred to as the job's secondary status. </p> <p/> */
	export interface SecondaryStatusTransition {
		Status: DescribeTrainingJobResponseSecondaryStatus;
		StartTime: Date;
		EndTime?: Date | null;
		StatusMessage?: string | null;
	}


	/** The name, value, and date and time of a metric that was emitted to Amazon CloudWatch. */
	export interface MetricData {
		MetricName?: string | null;
		Value?: number | null;
		Timestamp?: Date | null;
	}


	/** Information about the status of the rule evaluation. */
	export interface DebugRuleEvaluationStatus {
		RuleConfigurationName?: string | null;
		RuleEvaluationJobArn?: string | null;
		RuleEvaluationStatus?: DebugRuleEvaluationStatusRuleEvaluationStatus | null;
		StatusDetails?: string | null;
		LastModifiedTime?: Date | null;
	}

	export enum DebugRuleEvaluationStatusRuleEvaluationStatus { InProgress = 0, NoIssuesFound = 1, IssuesFound = 2, Error = 3, Stopping = 4, Stopped = 5 }

	export interface DescribeTrainingJobRequest {
		TrainingJobName: string;
	}

	export interface DescribeTransformJobResponse {
		TransformJobName: string;
		TransformJobArn: string;
		TransformJobStatus: TrialComponentStatusPrimaryStatus;
		FailureReason?: string | null;
		ModelName: string;
		MaxConcurrentTransforms?: number | null;
		MaxPayloadInMB?: number | null;
		BatchStrategy?: TransformJobDefinitionBatchStrategy | null;
		Environment?: TransformEnvironmentMap | null;

		/**
		 * Describes the input source of a transform job and the way the transform job consumes it.
		 * Required
		 */
		TransformInput: TransformInput;

		/** Describes the results of a transform job. */
		TransformOutput?: TransformOutput | null;

		/**
		 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
		 * Required
		 */
		TransformResources: TransformResources;
		CreationTime: Date;
		TransformStartTime?: Date | null;
		TransformEndTime?: Date | null;
		LabelingJobArn?: string | null;
		AutoMLJobArn?: string | null;

		/** The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>. */
		DataProcessing?: DataProcessing | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig | null;
	}

	export interface DescribeTransformJobRequest {
		TransformJobName: string;
	}

	export interface DescribeTrialResponse {
		TrialName?: string | null;
		TrialArn?: string | null;
		DisplayName?: string | null;
		ExperimentName?: string | null;

		/** The source of the trial. */
		Source?: TrialSource | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext | null;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext | null;
	}


	/** The source of the trial. */
	export interface TrialSource {
		SourceArn: string;
		SourceType?: string | null;
	}

	export interface DescribeTrialRequest {
		TrialName: string;
	}

	export interface DescribeTrialComponentResponse {
		TrialComponentName?: string | null;
		TrialComponentArn?: string | null;
		DisplayName?: string | null;

		/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
		Source?: TrialComponentSource | null;

		/** The status of the trial component. */
		Status?: TrialComponentStatus | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext | null;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext | null;
		Parameters?: TrialComponentParameters | null;
		InputArtifacts?: TrialComponentArtifacts | null;
		OutputArtifacts?: TrialComponentArtifacts | null;
		Metrics?: Array<TrialComponentMetricSummary> | null;
	}


	/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
	export interface TrialComponentSource {
		SourceArn: string;
		SourceType?: string | null;
	}


	/** A summary of the metrics of a trial component. */
	export interface TrialComponentMetricSummary {
		MetricName?: string | null;
		SourceArn?: string | null;
		TimeStamp?: Date | null;
		Max?: number | null;
		Min?: number | null;
		Last?: number | null;
		Count?: number | null;
		Avg?: number | null;
		StdDev?: number | null;
	}

	export interface DescribeTrialComponentRequest {
		TrialComponentName: string;
	}

	export interface DescribeUserProfileResponse {
		DomainId?: string | null;
		UserProfileArn?: string | null;
		UserProfileName?: string | null;
		HomeEfsFileSystemUid?: string | null;
		Status?: DescribeDomainResponseStatus | null;
		LastModifiedTime?: Date | null;
		CreationTime?: Date | null;
		FailureReason?: string | null;
		SingleSignOnUserIdentifier?: string | null;
		SingleSignOnUserValue?: string | null;

		/** A collection of settings. */
		UserSettings?: UserSettings | null;
	}

	export interface DescribeUserProfileRequest {
		DomainId: string;
		UserProfileName: string;
	}

	export interface DescribeWorkforceResponse {

		/**
		 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
		 * Required
		 */
		Workforce: Workforce;
	}


	/** A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>. */
	export interface Workforce {
		WorkforceName: string;
		WorkforceArn: string;
		LastUpdatedDate?: Date | null;

		/** A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. For more information, see . */
		SourceIpConfig?: SourceIpConfig | null;
	}


	/** A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. For more information, see . */
	export interface SourceIpConfig {
		Cidrs: Array<string>;
	}

	export interface DescribeWorkforceRequest {
		WorkforceName: string;
	}

	export interface DescribeWorkteamResponse {

		/**
		 * Provides details about a labeling work team.
		 * Required
		 */
		Workteam: Workteam;
	}


	/** Provides details about a labeling work team. */
	export interface Workteam {
		WorkteamName: string;
		MemberDefinitions: Array<MemberDefinition>;
		WorkteamArn: string;
		ProductListingIds?: Array<string> | null;
		Description: string;
		SubDomain?: string | null;
		CreateDate?: Date | null;
		LastUpdatedDate?: Date | null;

		/** Configures SNS notifications of available or expiring work items for work teams. */
		NotificationConfiguration?: NotificationConfiguration | null;
	}

	export interface DescribeWorkteamRequest {
		WorkteamName: string;
	}

	export interface DisassociateTrialComponentResponse {
		TrialComponentArn?: string | null;
		TrialArn?: string | null;
	}

	export interface DisassociateTrialComponentRequest {
		TrialComponentName: string;
		TrialName: string;
	}

	export interface GetSearchSuggestionsResponse {
		PropertyNameSuggestions?: Array<PropertyNameSuggestion> | null;
	}


	/** A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field. */
	export interface PropertyNameSuggestion {
		PropertyName?: string | null;
	}

	export interface GetSearchSuggestionsRequest {
		Resource: GetSearchSuggestionsRequestResource;

		/** Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response. */
		SuggestionQuery?: SuggestionQuery | null;
	}

	export enum GetSearchSuggestionsRequestResource { TrainingJob = 0, Experiment = 1, ExperimentTrial = 2, ExperimentTrialComponent = 3 }


	/** Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response. */
	export interface SuggestionQuery {

		/** Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text. */
		PropertyNameQuery?: PropertyNameQuery | null;
	}


	/** Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text. */
	export interface PropertyNameQuery {
		PropertyNameHint: string;
	}

	export interface ListAlgorithmsOutput {
		AlgorithmSummaryList: Array<AlgorithmSummary>;
		NextToken?: string | null;
	}


	/** Provides summary information about an algorithm. */
	export interface AlgorithmSummary {
		AlgorithmName: string;
		AlgorithmArn: string;
		AlgorithmDescription?: string | null;
		CreationTime: Date;
		AlgorithmStatus: DescribeAlgorithmOutputAlgorithmStatus;
	}

	export interface ListAlgorithmsInput {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		MaxResults?: number | null;
		NameContains?: string | null;
		NextToken?: string | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}

	export enum ListAlgorithmsInputSortBy { Name = 0, CreationTime = 1 }

	export enum ListAlgorithmsInputSortOrder { Ascending = 0, Descending = 1 }

	export interface ListAppsResponse {
		Apps?: Array<AppDetails> | null;
		NextToken?: string | null;
	}


	/** The app's details. */
	export interface AppDetails {
		DomainId?: string | null;
		UserProfileName?: string | null;
		AppType?: CreateAppRequestAppType | null;
		AppName?: string | null;
		Status?: DescribeAppResponseStatus | null;
		CreationTime?: Date | null;
	}

	export interface ListAppsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		SortBy?: ListAppsRequestSortBy | null;
		DomainIdEquals?: string | null;
		UserProfileNameEquals?: string | null;
	}

	export enum ListAppsRequestSortBy { CreationTime = 0 }

	export interface ListAutoMLJobsResponse {
		AutoMLJobSummaries: Array<AutoMLJobSummary>;
		NextToken?: string | null;
	}


	/** Provides a summary about a job. */
	export interface AutoMLJobSummary {
		AutoMLJobName: string;
		AutoMLJobArn: string;
		AutoMLJobStatus: AutoMLCandidateCandidateStatus;
		AutoMLJobSecondaryStatus: DescribeAutoMLJobResponseAutoMLJobSecondaryStatus;
		CreationTime: Date;
		EndTime?: Date | null;
		LastModifiedTime: Date;
		FailureReason?: string | null;
	}

	export interface ListAutoMLJobsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		NameContains?: string | null;
		StatusEquals?: AutoMLCandidateCandidateStatus | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export enum ListAutoMLJobsRequestSortBy { Name = 0, CreationTime = 1, Status = 2 }

	export interface ListCandidatesForAutoMLJobResponse {
		Candidates: Array<AutoMLCandidate>;
		NextToken?: string | null;
	}

	export interface ListCandidatesForAutoMLJobRequest {
		AutoMLJobName: string;
		StatusEquals?: AutoMLCandidateCandidateStatus | null;
		CandidateNameEquals?: string | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		SortBy?: ListCandidatesForAutoMLJobRequestSortBy | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export enum ListCandidatesForAutoMLJobRequestSortBy { CreationTime = 0, Status = 1, FinalObjectiveMetricValue = 2 }

	export interface ListCodeRepositoriesOutput {
		CodeRepositorySummaryList: Array<CodeRepositorySummary>;
		NextToken?: string | null;
	}


	/** Specifies summary information about a Git repository. */
	export interface CodeRepositorySummary {
		CodeRepositoryName: string;
		CodeRepositoryArn: string;
		CreationTime: Date;
		LastModifiedTime: Date;

		/** Specifies configuration details for a Git repository in your AWS account. */
		GitConfig?: GitConfig | null;
	}

	export interface ListCodeRepositoriesInput {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		MaxResults?: number | null;
		NameContains?: string | null;
		NextToken?: string | null;
		SortBy?: ListCodeRepositoriesInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}

	export enum ListCodeRepositoriesInputSortBy { Name = 0, CreationTime = 1, LastModifiedTime = 2 }

	export interface ListCompilationJobsResponse {
		CompilationJobSummaries: Array<CompilationJobSummary>;
		NextToken?: string | null;
	}


	/** A summary of a model compilation job. */
	export interface CompilationJobSummary {
		CompilationJobName: string;
		CompilationJobArn: string;
		CreationTime: Date;
		CompilationStartTime?: Date | null;
		CompilationEndTime?: Date | null;
		CompilationTargetDevice: OutputConfigTargetDevice;
		LastModifiedTime?: Date | null;
		CompilationJobStatus: DescribeCompilationJobResponseCompilationJobStatus;
	}

	export interface ListCompilationJobsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		NameContains?: string | null;
		StatusEquals?: DescribeCompilationJobResponseCompilationJobStatus | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}

	export interface ListDomainsResponse {
		Domains?: Array<DomainDetails> | null;
		NextToken?: string | null;
	}


	/** The domain's details. */
	export interface DomainDetails {
		DomainArn?: string | null;
		DomainId?: string | null;
		DomainName?: string | null;
		Status?: DescribeDomainResponseStatus | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
		Url?: string | null;
	}

	export interface ListDomainsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListEndpointConfigsOutput {
		EndpointConfigs: Array<EndpointConfigSummary>;
		NextToken?: string | null;
	}


	/** Provides summary information for an endpoint configuration. */
	export interface EndpointConfigSummary {
		EndpointConfigName: string;
		EndpointConfigArn: string;
		CreationTime: Date;
	}

	export interface ListEndpointConfigsInput {
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
	}

	export interface ListEndpointsOutput {
		Endpoints: Array<EndpointSummary>;
		NextToken?: string | null;
	}


	/** Provides summary information for an endpoint. */
	export interface EndpointSummary {
		EndpointName: string;
		EndpointArn: string;
		CreationTime: Date;
		LastModifiedTime: Date;
		EndpointStatus: DescribeEndpointOutputEndpointStatus;
	}

	export interface ListEndpointsInput {
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		StatusEquals?: DescribeEndpointOutputEndpointStatus | null;
	}

	export interface ListExperimentsResponse {
		ExperimentSummaries?: Array<ExperimentSummary> | null;
		NextToken?: string | null;
	}


	/** A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>. */
	export interface ExperimentSummary {
		ExperimentArn?: string | null;
		ExperimentName?: string | null;
		DisplayName?: string | null;

		/** The source of the experiment. */
		ExperimentSource?: ExperimentSource | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	export interface ListExperimentsRequest {
		CreatedAfter?: Date | null;
		CreatedBefore?: Date | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListFlowDefinitionsResponse {
		FlowDefinitionSummaries: Array<FlowDefinitionSummary>;
		NextToken?: string | null;
	}


	/** Contains summary information about the flow definition. */
	export interface FlowDefinitionSummary {
		FlowDefinitionName: string;
		FlowDefinitionArn: string;
		FlowDefinitionStatus: DescribeFlowDefinitionResponseFlowDefinitionStatus;
		CreationTime: Date;
		FailureReason?: string | null;
	}

	export interface ListFlowDefinitionsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListHumanTaskUisResponse {
		HumanTaskUiSummaries: Array<HumanTaskUiSummary>;
		NextToken?: string | null;
	}


	/** Container for human task user interface information. */
	export interface HumanTaskUiSummary {
		HumanTaskUiName: string;
		HumanTaskUiArn: string;
		CreationTime: Date;
	}

	export interface ListHumanTaskUisRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListHyperParameterTuningJobsResponse {
		HyperParameterTuningJobSummaries: Array<HyperParameterTuningJobSummary>;
		NextToken?: string | null;
	}


	/** Provides summary information about a hyperparameter tuning job. */
	export interface HyperParameterTuningJobSummary {
		HyperParameterTuningJobName: string;
		HyperParameterTuningJobArn: string;
		HyperParameterTuningJobStatus: AutoMLCandidateCandidateStatus;

		/**
		 * The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.
		 * Required
		 */
		Strategy: HyperParameterTuningJobConfigStrategy;
		CreationTime: Date;
		HyperParameterTuningEndTime?: Date | null;
		LastModifiedTime?: Date | null;

		/**
		 * The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
		 * Required
		 */
		TrainingJobStatusCounters: TrainingJobStatusCounters;

		/**
		 * Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
		 * Required
		 */
		ObjectiveStatusCounters: ObjectiveStatusCounters;

		/** Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch. */
		ResourceLimits?: ResourceLimits | null;
	}

	export interface ListHyperParameterTuningJobsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		SortBy?: ListHyperParameterTuningJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NameContains?: string | null;
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		StatusEquals?: AutoMLCandidateCandidateStatus | null;
	}

	export enum ListHyperParameterTuningJobsRequestSortBy { Name = 0, Status = 1, CreationTime = 2 }

	export interface ListLabelingJobsResponse {
		LabelingJobSummaryList?: Array<LabelingJobSummary> | null;
		NextToken?: string | null;
	}


	/** Provides summary information about a labeling job. */
	export interface LabelingJobSummary {
		LabelingJobName: string;
		LabelingJobArn: string;
		CreationTime: Date;
		LastModifiedTime: Date;
		LabelingJobStatus: TrialComponentStatusPrimaryStatus;

		/**
		 * Provides a breakdown of the number of objects labeled.
		 * Required
		 */
		LabelCounters: LabelCounters;
		WorkteamArn: string;
		PreHumanTaskLambdaArn: string;
		AnnotationConsolidationLambdaArn?: string | null;
		FailureReason?: string | null;

		/** Specifies the location of the output produced by the labeling job. */
		LabelingJobOutput?: LabelingJobOutput | null;

		/** Input configuration information for a labeling job. */
		InputConfig?: LabelingJobInputConfig | null;
	}

	export interface ListLabelingJobsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		MaxResults?: number | null;
		NextToken?: string | null;
		NameContains?: string | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
	}

	export interface ListLabelingJobsForWorkteamResponse {
		LabelingJobSummaryList: Array<LabelingJobForWorkteamSummary>;
		NextToken?: string | null;
	}


	/** Provides summary information for a work team. */
	export interface LabelingJobForWorkteamSummary {
		LabelingJobName?: string | null;
		JobReferenceCode: string;
		WorkRequesterAccountId: string;
		CreationTime: Date;

		/** Provides counts for human-labeled tasks in the labeling job. */
		LabelCounters?: LabelCountersForWorkteam | null;
		NumberOfHumanWorkersPerDataObject?: number | null;
	}


	/** Provides counts for human-labeled tasks in the labeling job. */
	export interface LabelCountersForWorkteam {
		HumanLabeled?: number | null;
		PendingHuman?: number | null;
		Total?: number | null;
	}

	export interface ListLabelingJobsForWorkteamRequest {
		WorkteamArn: string;
		MaxResults?: number | null;
		NextToken?: string | null;
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		JobReferenceCodeContains?: string | null;
		SortBy?: ListAppsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}

	export interface ListModelPackagesOutput {
		ModelPackageSummaryList: Array<ModelPackageSummary>;
		NextToken?: string | null;
	}


	/** Provides summary information about a model package. */
	export interface ModelPackageSummary {
		ModelPackageName: string;
		ModelPackageArn: string;
		ModelPackageDescription?: string | null;
		CreationTime: Date;
		ModelPackageStatus: DescribeAlgorithmOutputAlgorithmStatus;
	}

	export interface ListModelPackagesInput {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		MaxResults?: number | null;
		NameContains?: string | null;
		NextToken?: string | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}

	export interface ListModelsOutput {
		Models: Array<ModelSummary>;
		NextToken?: string | null;
	}


	/** Provides summary information about a model. */
	export interface ModelSummary {
		ModelName: string;
		ModelArn: string;
		CreationTime: Date;
	}

	export interface ListModelsInput {
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
	}

	export interface ListMonitoringExecutionsResponse {
		MonitoringExecutionSummaries: Array<MonitoringExecutionSummary>;
		NextToken?: string | null;
	}

	export interface ListMonitoringExecutionsRequest {
		MonitoringScheduleName?: string | null;
		EndpointName?: string | null;
		SortBy?: ListMonitoringExecutionsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		ScheduledTimeBefore?: Date | null;
		ScheduledTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		StatusEquals?: MonitoringExecutionSummaryMonitoringExecutionStatus | null;
	}

	export enum ListMonitoringExecutionsRequestSortBy { CreationTime = 0, ScheduledTime = 1, Status = 2 }

	export interface ListMonitoringSchedulesResponse {
		MonitoringScheduleSummaries: Array<MonitoringScheduleSummary>;
		NextToken?: string | null;
	}


	/** Summarizes the monitoring schedule. */
	export interface MonitoringScheduleSummary {
		MonitoringScheduleName: string;
		MonitoringScheduleArn: string;
		CreationTime: Date;
		LastModifiedTime: Date;
		MonitoringScheduleStatus: DescribeMonitoringScheduleResponseMonitoringScheduleStatus;
		EndpointName?: string | null;
	}

	export interface ListMonitoringSchedulesRequest {
		EndpointName?: string | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		StatusEquals?: DescribeMonitoringScheduleResponseMonitoringScheduleStatus | null;
	}

	export interface ListNotebookInstanceLifecycleConfigsOutput {
		NextToken?: string | null;
		NotebookInstanceLifecycleConfigs?: Array<NotebookInstanceLifecycleConfigSummary> | null;
	}


	/** Provides a summary of a notebook instance lifecycle configuration. */
	export interface NotebookInstanceLifecycleConfigSummary {
		NotebookInstanceLifecycleConfigName: string;
		NotebookInstanceLifecycleConfigArn: string;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	export interface ListNotebookInstanceLifecycleConfigsInput {
		NextToken?: string | null;
		MaxResults?: number | null;
		SortBy?: ListCodeRepositoriesInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
	}

	export interface ListNotebookInstancesOutput {
		NextToken?: string | null;
		NotebookInstances?: Array<NotebookInstanceSummary> | null;
	}


	/** Provides summary information for an Amazon SageMaker notebook instance. */
	export interface NotebookInstanceSummary {
		NotebookInstanceName: string;
		NotebookInstanceArn: string;
		NotebookInstanceStatus?: DescribeNotebookInstanceOutputNotebookInstanceStatus | null;
		Url?: string | null;
		InstanceType?: NotebookInstanceSummaryInstanceType | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
		NotebookInstanceLifecycleConfigName?: string | null;
		DefaultCodeRepository?: string | null;
		AdditionalCodeRepositories?: Array<string> | null;
	}

	export enum NotebookInstanceSummaryInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export interface ListNotebookInstancesInput {
		NextToken?: string | null;
		MaxResults?: number | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		StatusEquals?: DescribeNotebookInstanceOutputNotebookInstanceStatus | null;
		NotebookInstanceLifecycleConfigNameContains?: string | null;
		DefaultCodeRepositoryContains?: string | null;
		AdditionalCodeRepositoryEquals?: string | null;
	}

	export interface ListProcessingJobsResponse {
		ProcessingJobSummaries: Array<ProcessingJobSummary>;
		NextToken?: string | null;
	}


	/** Summary of information about a processing job. */
	export interface ProcessingJobSummary {
		ProcessingJobName: string;
		ProcessingJobArn: string;
		CreationTime: Date;
		ProcessingEndTime?: Date | null;
		LastModifiedTime?: Date | null;
		ProcessingJobStatus: TrialComponentStatusPrimaryStatus;
		FailureReason?: string | null;
		ExitMessage?: string | null;
	}

	export interface ListProcessingJobsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		NameContains?: string | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListSubscribedWorkteamsResponse {
		SubscribedWorkteams: Array<SubscribedWorkteam>;
		NextToken?: string | null;
	}

	export interface ListSubscribedWorkteamsRequest {
		NameContains?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListTagsOutput {
		Tags?: Array<Tag> | null;
		NextToken?: string | null;
	}

	export interface ListTagsInput {
		ResourceArn: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListTrainingJobsResponse {
		TrainingJobSummaries: Array<TrainingJobSummary>;
		NextToken?: string | null;
	}


	/** Provides summary information about a training job. */
	export interface TrainingJobSummary {
		TrainingJobName: string;
		TrainingJobArn: string;
		CreationTime: Date;
		TrainingEndTime?: Date | null;
		LastModifiedTime?: Date | null;
		TrainingJobStatus: TrialComponentStatusPrimaryStatus;
	}

	export interface ListTrainingJobsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		NameContains?: string | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}

	export interface ListTrainingJobsForHyperParameterTuningJobResponse {
		TrainingJobSummaries: Array<HyperParameterTrainingJobSummary>;
		NextToken?: string | null;
	}

	export interface ListTrainingJobsForHyperParameterTuningJobRequest {
		HyperParameterTuningJobName: string;
		NextToken?: string | null;
		MaxResults?: number | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
		SortBy?: ListTrainingJobsForHyperParameterTuningJobRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}

	export enum ListTrainingJobsForHyperParameterTuningJobRequestSortBy { Name = 0, CreationTime = 1, Status = 2, FinalObjectiveMetricValue = 3 }

	export interface ListTransformJobsResponse {
		TransformJobSummaries: Array<TransformJobSummary>;
		NextToken?: string | null;
	}


	/** Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call. */
	export interface TransformJobSummary {
		TransformJobName: string;
		TransformJobArn: string;
		CreationTime: Date;
		TransformEndTime?: Date | null;
		LastModifiedTime?: Date | null;
		TransformJobStatus: TrialComponentStatusPrimaryStatus;
		FailureReason?: string | null;
	}

	export interface ListTransformJobsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		NameContains?: string | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListTrialComponentsResponse {
		TrialComponentSummaries?: Array<TrialComponentSummary> | null;
		NextToken?: string | null;
	}


	/** A summary of the properties of a trial component. To get all the properties, call the <a>DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>. */
	export interface TrialComponentSummary {
		TrialComponentName?: string | null;
		TrialComponentArn?: string | null;
		DisplayName?: string | null;

		/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
		TrialComponentSource?: TrialComponentSource | null;

		/** The status of the trial component. */
		Status?: TrialComponentStatus | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext | null;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext | null;
	}

	export interface ListTrialComponentsRequest {
		ExperimentName?: string | null;
		TrialName?: string | null;
		SourceArn?: string | null;
		CreatedAfter?: Date | null;
		CreatedBefore?: Date | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface ListTrialsResponse {
		TrialSummaries?: Array<TrialSummary> | null;
		NextToken?: string | null;
	}


	/** A summary of the properties of a trial. To get the complete set of properties, call the <a>DescribeTrial</a> API and provide the <code>TrialName</code>. */
	export interface TrialSummary {
		TrialArn?: string | null;
		TrialName?: string | null;
		DisplayName?: string | null;

		/** The source of the trial. */
		TrialSource?: TrialSource | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	export interface ListTrialsRequest {
		ExperimentName?: string | null;
		TrialComponentName?: string | null;
		CreatedAfter?: Date | null;
		CreatedBefore?: Date | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface ListUserProfilesResponse {
		UserProfiles?: Array<UserProfileDetails> | null;
		NextToken?: string | null;
	}


	/** The user profile details. */
	export interface UserProfileDetails {
		DomainId?: string | null;
		UserProfileName?: string | null;
		Status?: DescribeDomainResponseStatus | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	export interface ListUserProfilesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		SortBy?: ListUserProfilesRequestSortBy | null;
		DomainIdEquals?: string | null;
		UserProfileNameContains?: string | null;
	}

	export enum ListUserProfilesRequestSortBy { CreationTime = 0, LastModifiedTime = 1 }

	export interface ListWorkteamsResponse {
		Workteams: Array<Workteam>;
		NextToken?: string | null;
	}

	export interface ListWorkteamsRequest {
		SortBy?: ListWorkteamsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NameContains?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export enum ListWorkteamsRequestSortBy { Name = 0, CreateDate = 1 }

	export interface RenderUiTemplateResponse {
		RenderedContent: string;
		Errors: Array<RenderingError>;
	}


	/** A description of an error that occurred while rendering the template. */
	export interface RenderingError {
		Code: string;
		Message: string;
	}

	export interface RenderUiTemplateRequest {

		/** The Liquid template for the worker user interface. */
		UiTemplate?: UiTemplate | null;

		/**
		 * Contains input values for a task.
		 * Required
		 */
		Task: RenderableTask;
		RoleArn: string;
		HumanTaskUiArn?: string | null;
	}


	/** Contains input values for a task. */
	export interface RenderableTask {
		Input: string;
	}

	export interface SearchResponse {
		Results?: Array<SearchRecord> | null;
		NextToken?: string | null;
	}


	/** A single resource returned as part of the <a>Search</a> API response. */
	export interface SearchRecord {

		/** Contains information about a training job. */
		TrainingJob?: TrainingJob | null;

		/** The properties of an experiment as returned by the <a>Search</a> API. */
		Experiment?: Experiment | null;

		/** The properties of a trial as returned by the <a>Search</a> API. */
		Trial?: Trial | null;

		/** The properties of a trial component as returned by the <a>Search</a> API. */
		TrialComponent?: TrialComponent | null;
	}


	/** Contains information about a training job. */
	export interface TrainingJob {
		TrainingJobName?: string | null;
		TrainingJobArn?: string | null;
		TuningJobArn?: string | null;
		LabelingJobArn?: string | null;
		AutoMLJobArn?: string | null;

		/** <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p> */
		ModelArtifacts?: ModelArtifacts | null;
		TrainingJobStatus?: TrialComponentStatusPrimaryStatus | null;
		SecondaryStatus?: DescribeTrainingJobResponseSecondaryStatus | null;
		FailureReason?: string | null;
		HyperParameters?: HyperParameters | null;

		/** <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p> */
		AlgorithmSpecification?: AlgorithmSpecification | null;
		RoleArn?: string | null;
		InputDataConfig?: Array<Channel> | null;

		/** Provides information about how to store model training results (model artifacts). */
		OutputDataConfig?: OutputDataConfig | null;

		/** Describes the resources, including ML compute instances and ML storage volumes, to use for model training. */
		ResourceConfig?: ResourceConfig | null;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig | null;

		/** <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note> */
		StoppingCondition?: StoppingCondition | null;
		CreationTime?: Date | null;
		TrainingStartTime?: Date | null;
		TrainingEndTime?: Date | null;
		LastModifiedTime?: Date | null;
		SecondaryStatusTransitions?: Array<SecondaryStatusTransition> | null;
		FinalMetricDataList?: Array<MetricData> | null;
		EnableNetworkIsolation?: boolean | null;
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableManagedSpotTraining?: boolean | null;

		/** Contains information about the output location for managed spot training checkpoint data. */
		CheckpointConfig?: CheckpointConfig | null;
		TrainingTimeInSeconds?: number | null;
		BillableTimeInSeconds?: number | null;

		/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
		DebugHookConfig?: DebugHookConfig | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig | null;
		DebugRuleConfigurations?: Array<DebugRuleConfiguration> | null;

		/** Configuration of storage locations for TensorBoard output. */
		TensorBoardOutputConfig?: TensorBoardOutputConfig | null;
		DebugRuleEvaluationStatuses?: Array<DebugRuleEvaluationStatus> | null;
		Tags?: Array<Tag> | null;
	}


	/** The properties of an experiment as returned by the <a>Search</a> API. */
	export interface Experiment {
		ExperimentName?: string | null;
		ExperimentArn?: string | null;
		DisplayName?: string | null;

		/** The source of the experiment. */
		Source?: ExperimentSource | null;
		Description?: string | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext | null;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext | null;
		Tags?: Array<Tag> | null;
	}


	/** The properties of a trial as returned by the <a>Search</a> API. */
	export interface Trial {
		TrialName?: string | null;
		TrialArn?: string | null;
		DisplayName?: string | null;
		ExperimentName?: string | null;

		/** The source of the trial. */
		Source?: TrialSource | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext | null;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext | null;
		Tags?: Array<Tag> | null;
		TrialComponentSummaries?: Array<TrialComponentSimpleSummary> | null;
	}


	/** A short summary of a trial component. */
	export interface TrialComponentSimpleSummary {
		TrialComponentName?: string | null;
		TrialComponentArn?: string | null;

		/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
		TrialComponentSource?: TrialComponentSource | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext | null;
	}


	/** The properties of a trial component as returned by the <a>Search</a> API. */
	export interface TrialComponent {
		TrialComponentName?: string | null;
		DisplayName?: string | null;
		TrialComponentArn?: string | null;

		/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
		Source?: TrialComponentSource | null;

		/** The status of the trial component. */
		Status?: TrialComponentStatus | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext | null;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext | null;
		Parameters?: TrialComponentParameters | null;
		InputArtifacts?: TrialComponentArtifacts | null;
		OutputArtifacts?: TrialComponentArtifacts | null;
		Metrics?: Array<TrialComponentMetricSummary> | null;

		/** Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned. */
		SourceDetail?: TrialComponentSourceDetail | null;
		Tags?: Array<Tag> | null;
		Parents?: Array<Parent> | null;
	}


	/** Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned. */
	export interface TrialComponentSourceDetail {
		SourceArn?: string | null;

		/** Contains information about a training job. */
		TrainingJob?: TrainingJob | null;

		/** An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process Data and Evaluate Models</a>. */
		ProcessingJob?: ProcessingJob | null;
	}


	/** An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process Data and Evaluate Models</a>. */
	export interface ProcessingJob {
		ProcessingInputs?: Array<ProcessingInput> | null;

		/** The output configuration for the processing job. */
		ProcessingOutputConfig?: ProcessingOutputConfig | null;
		ProcessingJobName?: string | null;

		/** Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance. */
		ProcessingResources?: ProcessingResources | null;

		/** Specifies a time limit for how long the processing job is allowed to run. */
		StoppingCondition?: ProcessingStoppingCondition | null;

		/** Configuration to run a processing job in a specified container image. */
		AppSpecification?: AppSpecification | null;
		Environment?: ProcessingEnvironmentMap | null;

		/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
		NetworkConfig?: NetworkConfig | null;
		RoleArn?: string | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig | null;
		ProcessingJobArn?: string | null;
		ProcessingJobStatus?: TrialComponentStatusPrimaryStatus | null;
		ExitMessage?: string | null;
		FailureReason?: string | null;
		ProcessingEndTime?: Date | null;
		ProcessingStartTime?: Date | null;
		LastModifiedTime?: Date | null;
		CreationTime?: Date | null;
		MonitoringScheduleArn?: string | null;
		AutoMLJobArn?: string | null;
		TrainingJobArn?: string | null;
		Tags?: Array<Tag> | null;
	}


	/** The trial that a trial component is associated with and the experiment the trial is part of. A component might not be associated with a trial. A component can be associated with multiple trials. */
	export interface Parent {
		TrialName?: string | null;
		ExperimentName?: string | null;
	}

	export interface SearchRequest {
		Resource: GetSearchSuggestionsRequestResource;

		/** <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value. A <code>SearchExpression</code> can include only one <code>Contains</code> operator.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul> */
		SearchExpression?: SearchExpression | null;
		SortBy?: string | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}


	/** <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value. A <code>SearchExpression</code> can include only one <code>Contains</code> operator.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul> */
	export interface SearchExpression {
		Filters?: Array<Filter> | null;
		NestedFilters?: Array<NestedFilters> | null;
		SubExpressions?: Array<SearchExpression> | null;
		Operator?: SearchExpressionOperator | null;
	}


	/** <p>A conditional statement for a search expression that includes a resource property, a Boolean operator, and a value. Resources that match the statement are returned in the results from the <a>Search</a> API.</p> <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the equals operator.</p> <p>In search, there are several property types:</p> <dl> <dt>Metrics</dt> <dd> <p>To define a metric filter, enter a value using the form <code>"Metrics.&lt;name&gt;"</code>, where <code>&lt;name&gt;</code> is a metric name. For example, the following filter searches for training jobs with an <code>"accuracy"</code> metric greater than <code>"0.9"</code>:</p> <p> <code>{</code> </p> <p> <code>"Name": "Metrics.accuracy",</code> </p> <p> <code>"Operator": "GreaterThan",</code> </p> <p> <code>"Value": "0.9"</code> </p> <p> <code>}</code> </p> </dd> <dt>HyperParameters</dt> <dd> <p>To define a hyperparameter filter, enter a value with the form <code>"HyperParameters.&lt;name&gt;"</code>. Decimal hyperparameter values are treated as a decimal in a comparison if the specified <code>Value</code> is also a decimal value. If the specified <code>Value</code> is an integer, the decimal hyperparameter values are treated as integers. For example, the following filter is satisfied by training jobs with a <code>"learning_rate"</code> hyperparameter that is less than <code>"0.5"</code>:</p> <p> <code> {</code> </p> <p> <code> "Name": "HyperParameters.learning_rate",</code> </p> <p> <code> "Operator": "LessThan",</code> </p> <p> <code> "Value": "0.5"</code> </p> <p> <code> }</code> </p> </dd> <dt>Tags</dt> <dd> <p>To define a tag filter, enter a value with the form <code>Tags.&lt;key&gt;</code>.</p> </dd> </dl> */
	export interface Filter {
		Name: string;
		Operator?: FilterOperator | null;
		Value?: string | null;
	}

	export enum FilterOperator { Equals = 0, NotEquals = 1, GreaterThan = 2, GreaterThanOrEqualTo = 3, LessThan = 4, LessThanOrEqualTo = 5, Contains = 6, Exists = 7, NotExists = 8, In = 9 }


	/** <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions of all filters to be included in the results returned from the <a>Search</a> API.</p> <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a specific channel name and <code>S3Uri</code> prefix, define the following filters:</p> <ul> <li> <p> <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code> </p> </li> <li> <p> <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains", "Value":"mybucket/catdata"}'</code> </p> </li> </ul> */
	export interface NestedFilters {
		NestedPropertyName: string;
		Filters: Array<Filter>;
	}

	export enum SearchExpressionOperator { And = 0, Or = 1 }

	export interface StartMonitoringScheduleRequest {
		MonitoringScheduleName: string;
	}

	export interface StartNotebookInstanceInput {
		NotebookInstanceName: string;
	}

	export interface StopAutoMLJobRequest {
		AutoMLJobName: string;
	}

	export interface StopCompilationJobRequest {
		CompilationJobName: string;
	}

	export interface StopHyperParameterTuningJobRequest {
		HyperParameterTuningJobName: string;
	}

	export interface StopLabelingJobRequest {
		LabelingJobName: string;
	}

	export interface StopMonitoringScheduleRequest {
		MonitoringScheduleName: string;
	}

	export interface StopNotebookInstanceInput {
		NotebookInstanceName: string;
	}

	export interface StopProcessingJobRequest {
		ProcessingJobName: string;
	}

	export interface StopTrainingJobRequest {
		TrainingJobName: string;
	}

	export interface StopTransformJobRequest {
		TransformJobName: string;
	}

	export interface UpdateCodeRepositoryOutput {
		CodeRepositoryArn: string;
	}

	export interface UpdateCodeRepositoryInput {
		CodeRepositoryName: string;

		/** Specifies configuration details for a Git repository when the repository is updated. */
		GitConfig?: GitConfigForUpdate | null;
	}


	/** Specifies configuration details for a Git repository when the repository is updated. */
	export interface GitConfigForUpdate {
		SecretArn?: string | null;
	}

	export interface UpdateDomainResponse {
		DomainArn?: string | null;
	}

	export interface UpdateDomainRequest {
		DomainId: string;

		/** A collection of settings. */
		DefaultUserSettings?: UserSettings | null;
	}

	export interface UpdateEndpointOutput {
		EndpointArn: string;
	}

	export interface UpdateEndpointInput {
		EndpointName: string;
		EndpointConfigName: string;
		RetainAllVariantProperties?: boolean | null;
		ExcludeRetainedVariantProperties?: Array<VariantProperty> | null;
	}


	/** <p>Specifies a production variant property type for an Endpoint.</p> <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the existing variant properties of the endpoint.</p> */
	export interface VariantProperty {
		VariantPropertyType: VariantPropertyVariantPropertyType;
	}

	export enum VariantPropertyVariantPropertyType { DesiredInstanceCount = 0, DesiredWeight = 1, DataCaptureConfig = 2 }

	export interface UpdateEndpointWeightsAndCapacitiesOutput {
		EndpointArn: string;
	}

	export interface UpdateEndpointWeightsAndCapacitiesInput {
		EndpointName: string;
		DesiredWeightsAndCapacities: Array<DesiredWeightAndCapacity>;
	}


	/** Specifies weight and capacity values for a production variant. */
	export interface DesiredWeightAndCapacity {
		VariantName: string;
		DesiredWeight?: number | null;
		DesiredInstanceCount?: number | null;
	}

	export interface UpdateExperimentResponse {
		ExperimentArn?: string | null;
	}

	export interface UpdateExperimentRequest {
		ExperimentName: string;
		DisplayName?: string | null;
		Description?: string | null;
	}

	export interface ConflictException {
	}

	export interface UpdateMonitoringScheduleResponse {
		MonitoringScheduleArn: string;
	}

	export interface UpdateMonitoringScheduleRequest {
		MonitoringScheduleName: string;

		/**
		 * Configures the monitoring schedule and defines the monitoring job.
		 * Required
		 */
		MonitoringScheduleConfig: MonitoringScheduleConfig;
	}

	export interface UpdateNotebookInstanceOutput {
	}

	export interface UpdateNotebookInstanceInput {
		NotebookInstanceName: string;
		InstanceType?: UpdateNotebookInstanceInputInstanceType | null;
		RoleArn?: string | null;
		LifecycleConfigName?: string | null;
		DisassociateLifecycleConfig?: boolean | null;
		VolumeSizeInGB?: number | null;
		DefaultCodeRepository?: string | null;
		AdditionalCodeRepositories?: Array<string> | null;
		AcceleratorTypes?: Array<NotebookInstanceAcceleratorType> | null;
		DisassociateAcceleratorTypes?: boolean | null;
		DisassociateDefaultCodeRepository?: boolean | null;
		DisassociateAdditionalCodeRepositories?: boolean | null;
		RootAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;
	}

	export enum UpdateNotebookInstanceInputInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export interface UpdateNotebookInstanceLifecycleConfigOutput {
	}

	export interface UpdateNotebookInstanceLifecycleConfigInput {
		NotebookInstanceLifecycleConfigName: string;
		OnCreate?: Array<NotebookInstanceLifecycleHook> | null;
		OnStart?: Array<NotebookInstanceLifecycleHook> | null;
	}

	export interface UpdateTrialResponse {
		TrialArn?: string | null;
	}

	export interface UpdateTrialRequest {
		TrialName: string;
		DisplayName?: string | null;
	}

	export interface UpdateTrialComponentResponse {
		TrialComponentArn?: string | null;
	}

	export interface UpdateTrialComponentRequest {
		TrialComponentName: string;
		DisplayName?: string | null;

		/** The status of the trial component. */
		Status?: TrialComponentStatus | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Parameters?: TrialComponentParameters | null;
		ParametersToRemove?: Array<string> | null;
		InputArtifacts?: TrialComponentArtifacts | null;
		InputArtifactsToRemove?: Array<string> | null;
		OutputArtifacts?: TrialComponentArtifacts | null;
		OutputArtifactsToRemove?: Array<string> | null;
	}

	export interface UpdateUserProfileResponse {
		UserProfileArn?: string | null;
	}

	export interface UpdateUserProfileRequest {
		DomainId: string;
		UserProfileName: string;

		/** A collection of settings. */
		UserSettings?: UserSettings | null;
	}

	export interface UpdateWorkforceResponse {

		/**
		 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
		 * Required
		 */
		Workforce: Workforce;
	}

	export interface UpdateWorkforceRequest {
		WorkforceName: string;

		/** A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. For more information, see . */
		SourceIpConfig?: SourceIpConfig | null;
	}

	export interface UpdateWorkteamResponse {

		/**
		 * Provides details about a labeling work team.
		 * Required
		 */
		Workteam: Workteam;
	}

	export interface UpdateWorkteamRequest {
		WorkteamName: string;
		MemberDefinitions?: Array<MemberDefinition> | null;
		Description?: string | null;

		/** Configures SNS notifications of available or expiring work items for work teams. */
		NotificationConfiguration?: NotificationConfiguration | null;
	}

	export enum AlgorithmSortBy { Name = 0, CreationTime = 1 }

	export enum AlgorithmStatus { Pending = 0, InProgress = 1, Completed = 2, Failed = 3, Deleting = 4 }

	export enum DetailedAlgorithmStatus { NotStarted = 0, InProgress = 1, Completed = 2, Failed = 3 }

	export enum AppType { JupyterServer = 0, KernelGateway = 1, TensorBoard = 2 }

	export enum AppStatus { Deleted = 0, Deleting = 1, Failed = 2, InService = 3, Pending = 4 }

	export enum AppInstanceType { system = 0, ml_t3_micro = 1, ml_t3_small = 2, ml_t3_medium = 3, ml_t3_large = 4, ml_t3_xlarge = 5, ml_t3_2xlarge = 6, ml_m5_large = 7, ml_m5_xlarge = 8, ml_m5_2xlarge = 9, ml_m5_4xlarge = 10, ml_m5_8xlarge = 11, ml_m5_12xlarge = 12, ml_m5_16xlarge = 13, ml_m5_24xlarge = 14, ml_c5_large = 15, ml_c5_xlarge = 16, ml_c5_2xlarge = 17, ml_c5_4xlarge = 18, ml_c5_9xlarge = 19, ml_c5_12xlarge = 20, ml_c5_18xlarge = 21, ml_c5_24xlarge = 22, ml_p3_2xlarge = 23, ml_p3_8xlarge = 24, ml_p3_16xlarge = 25, ml_g4dn_xlarge = 26, ml_g4dn_2xlarge = 27, ml_g4dn_4xlarge = 28, ml_g4dn_8xlarge = 29, ml_g4dn_12xlarge = 30, ml_g4dn_16xlarge = 31 }

	export enum AppSortKey { CreationTime = 0 }

	export enum AssemblyType { None = 0, Line = 1 }

	export enum AuthMode { SSO = 0, IAM = 1 }

	export enum ObjectiveStatus { Succeeded = 0, Pending = 1, Failed = 2 }

	export enum CandidateStatus { Completed = 0, InProgress = 1, Failed = 2, Stopped = 3, Stopping = 4 }

	export enum CandidateStepType { AWSSageMakerTrainingJob = 0, AWSSageMakerTransformJob = 1, AWSSageMakerProcessingJob = 2 }

	export enum AutoMLMetricEnum { Accuracy = 0, MSE = 1, F1 = 2, F1macro = 3 }

	export enum AutoMLJobObjectiveType { Maximize = 0, Minimize = 1 }

	export enum AutoMLJobSecondaryStatus { Starting = 0, AnalyzingData = 1, FeatureEngineering = 2, ModelTuning = 3, MaxCandidatesReached = 4, Failed = 5, Stopped = 6, MaxAutoMLJobRuntimeReached = 7, Stopping = 8, CandidateDefinitionsGenerated = 9 }

	export enum AutoMLJobStatus { Completed = 0, InProgress = 1, Failed = 2, Stopped = 3, Stopping = 4 }

	export enum AutoMLS3DataType { ManifestFile = 0, S3Prefix = 1 }

	export enum AutoMLSortBy { Name = 0, CreationTime = 1, Status = 2 }

	export enum AutoMLSortOrder { Ascending = 0, Descending = 1 }

	export enum AwsManagedHumanLoopRequestSource { AWS_Rekognition_DetectModerationLabels_Image_V3 = 0, AWS_Textract_AnalyzeDocument_Forms_V1 = 1 }

	export enum BatchStrategy { MultiRecord = 0, SingleRecord = 1 }

	export enum BooleanOperator { And = 0, Or = 1 }

	export enum CandidateSortBy { CreationTime = 0, Status = 1, FinalObjectiveMetricValue = 2 }

	export enum CaptureMode { Input = 0, Output = 1 }

	export enum CaptureStatus { Started = 0, Stopped = 1 }

	export enum RecordWrapper { None = 0, RecordIO = 1 }

	export enum CodeRepositorySortBy { Name = 0, CreationTime = 1, LastModifiedTime = 2 }

	export enum CodeRepositorySortOrder { Ascending = 0, Descending = 1 }

	export enum CompilationJobStatus { INPROGRESS = 0, COMPLETED = 1, FAILED = 2, STARTING = 3, STOPPING = 4, STOPPED = 5 }

	export enum TargetDevice { lambda = 0, ml_m4 = 1, ml_m5 = 2, ml_c4 = 3, ml_c5 = 4, ml_p2 = 5, ml_p3 = 6, ml_inf1 = 7, jetson_tx1 = 8, jetson_tx2 = 9, jetson_nano = 10, jetson_xavier = 11, rasp3b = 12, imx8qm = 13, deeplens = 14, rk3399 = 15, rk3288 = 16, aisage = 17, sbe_c = 18, qcs605 = 19, qcs603 = 20, sitara_am57x = 21, amba_cv22 = 22 }

	export enum ContainerMode { SingleModel = 0, MultiModel = 1 }

	export enum HyperParameterScalingType { Auto = 0, Linear = 1, Logarithmic = 2, ReverseLogarithmic = 3 }

	export enum ProblemType { BinaryClassification = 0, MulticlassClassification = 1, Regression = 2 }

	export enum InstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export enum DirectInternetAccess { Enabled = 0, Disabled = 1 }

	export enum RootAccess { Enabled = 0, Disabled = 1 }

	export enum JoinSource { Input = 0, None = 1 }

	export enum ProcessingInstanceType { ml_t3_medium = 0, ml_t3_large = 1, ml_t3_xlarge = 2, ml_t3_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_c4_xlarge = 9, ml_c4_2xlarge = 10, ml_c4_4xlarge = 11, ml_c4_8xlarge = 12, ml_p2_xlarge = 13, ml_p2_8xlarge = 14, ml_p2_16xlarge = 15, ml_p3_2xlarge = 16, ml_p3_8xlarge = 17, ml_p3_16xlarge = 18, ml_c5_xlarge = 19, ml_c5_2xlarge = 20, ml_c5_4xlarge = 21, ml_c5_9xlarge = 22, ml_c5_18xlarge = 23, ml_m5_large = 24, ml_m5_xlarge = 25, ml_m5_2xlarge = 26, ml_m5_4xlarge = 27, ml_m5_12xlarge = 28, ml_m5_24xlarge = 29, ml_r5_large = 30, ml_r5_xlarge = 31, ml_r5_2xlarge = 32, ml_r5_4xlarge = 33, ml_r5_8xlarge = 34, ml_r5_12xlarge = 35, ml_r5_16xlarge = 36, ml_r5_24xlarge = 37 }

	export enum RuleEvaluationStatus { InProgress = 0, NoIssuesFound = 1, IssuesFound = 2, Error = 3, Stopping = 4, Stopped = 5 }

	export enum DomainStatus { Deleting = 0, Failed = 1, InService = 2, Pending = 3 }

	export enum EndpointStatus { OutOfService = 0, Creating = 1, Updating = 2, SystemUpdating = 3, RollingBack = 4, InService = 5, Deleting = 6, Failed = 7 }

	export enum FlowDefinitionStatus { Initializing = 0, Active = 1, Failed = 2, Deleting = 3 }

	export enum HyperParameterTuningJobStatus { Completed = 0, InProgress = 1, Failed = 2, Stopped = 3, Stopping = 4 }

	export enum LabelingJobStatus { InProgress = 0, Completed = 1, Failed = 2, Stopping = 3, Stopped = 4 }

	export enum ModelPackageStatus { Pending = 0, InProgress = 1, Completed = 2, Failed = 3, Deleting = 4 }

	export enum ScheduleStatus { Pending = 0, Failed = 1, Scheduled = 2, Stopped = 3 }

	export enum NotebookInstanceStatus { Pending = 0, InService = 1, Stopping = 2, Stopped = 3, Failed = 4, Deleting = 5, Updating = 6 }

	export enum ProcessingJobStatus { InProgress = 0, Completed = 1, Failed = 2, Stopping = 3, Stopped = 4 }

	export enum TrainingJobStatus { InProgress = 0, Completed = 1, Failed = 2, Stopping = 3, Stopped = 4 }

	export enum SecondaryStatus { Starting = 0, LaunchingMLInstances = 1, PreparingTrainingStack = 2, Downloading = 3, DownloadingTrainingImage = 4, Training = 5, Uploading = 6, Stopping = 7, Stopped = 8, MaxRuntimeExceeded = 9, Completed = 10, Failed = 11, Interrupted = 12, MaxWaitTimeExceeded = 13 }

	export enum TransformJobStatus { InProgress = 0, Completed = 1, Failed = 2, Stopping = 3, Stopped = 4 }

	export enum UserProfileStatus { Deleting = 0, Failed = 1, InService = 2, Pending = 3 }

	export enum DetailedModelPackageStatus { NotStarted = 0, InProgress = 1, Completed = 2, Failed = 3 }

	export enum EndpointConfigSortKey { Name = 0, CreationTime = 1 }

	export enum ProcessingS3InputMode { Pipe = 0, File = 1 }

	export enum ProcessingS3DataDistributionType { FullyReplicated = 0, ShardedByS3Key = 1 }

	export enum EndpointSortKey { Name = 0, CreationTime = 1, Status = 2 }

	export enum ExecutionStatus { Pending = 0, Completed = 1, CompletedWithViolations = 2, InProgress = 3, Failed = 4, Stopping = 5, Stopped = 6 }

	export enum FileSystemAccessMode { rw = 0, ro = 1 }

	export enum FileSystemType { EFS = 0, FSxLustre = 1 }

	export enum Operator { Equals = 0, NotEquals = 1, GreaterThan = 2, GreaterThanOrEqualTo = 3, LessThan = 4, LessThanOrEqualTo = 5, Contains = 6, Exists = 7, NotExists = 8, In = 9 }

	export enum Framework { TENSORFLOW = 0, KERAS = 1, MXNET = 2, ONNX = 3, PYTORCH = 4, XGBOOST = 5, TFLITE = 6 }

	export enum ResourceType { TrainingJob = 0, Experiment = 1, ExperimentTrial = 2, ExperimentTrialComponent = 3 }

	export enum ParameterType { Integer = 0, Continuous = 1, Categorical = 2, FreeText = 3 }


	/** The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>. */
	export enum HyperParameterTuningJobStrategyType { Bayesian = 0, Random = 1 }

	export enum TrainingJobEarlyStoppingType { Off = 0, Auto = 1 }

	export enum HyperParameterTuningJobSortByOptions { Name = 0, Status = 1, CreationTime = 2 }

	export enum HyperParameterTuningJobWarmStartType { IdenticalDataAndAlgorithm = 0, TransferLearning = 1 }

	export enum SortOrder { Ascending = 0, Descending = 1 }

	export enum ListCompilationJobsSortBy { Name = 0, CreationTime = 1, Status = 2 }

	export enum OrderKey { Ascending = 0, Descending = 1 }

	export enum SortExperimentsBy { Name = 0, CreationTime = 1 }

	export enum ListLabelingJobsForWorkteamSortByOptions { CreationTime = 0 }

	export enum SortBy { Name = 0, CreationTime = 1, Status = 2 }

	export enum ModelPackageSortBy { Name = 0, CreationTime = 1 }

	export enum ModelSortKey { Name = 0, CreationTime = 1 }

	export enum MonitoringExecutionSortKey { CreationTime = 0, ScheduledTime = 1, Status = 2 }

	export enum MonitoringScheduleSortKey { Name = 0, CreationTime = 1, Status = 2 }

	export enum NotebookInstanceLifecycleConfigSortKey { Name = 0, CreationTime = 1, LastModifiedTime = 2 }

	export enum NotebookInstanceLifecycleConfigSortOrder { Ascending = 0, Descending = 1 }

	export enum NotebookInstanceSortKey { Name = 0, CreationTime = 1, Status = 2 }

	export enum NotebookInstanceSortOrder { Ascending = 0, Descending = 1 }

	export enum TrainingJobSortByOptions { Name = 0, CreationTime = 1, Status = 2, FinalObjectiveMetricValue = 3 }

	export enum SortTrialComponentsBy { Name = 0, CreationTime = 1 }

	export enum SortTrialsBy { Name = 0, CreationTime = 1 }

	export enum UserProfileSortKey { CreationTime = 0, LastModifiedTime = 1 }

	export enum ListWorkteamsSortByOptions { Name = 0, CreateDate = 1 }

	export enum ProcessingS3UploadMode { Continuous = 0, EndOfJob = 1 }

	export enum NotebookOutputOption { Allowed = 0, Disabled = 1 }

	export enum ProcessingS3CompressionType { None = 0, Gzip = 1 }

	export enum ProcessingS3DataType { ManifestFile = 0, S3Prefix = 1 }

	export enum RetentionType { Retain = 0, Delete = 1 }

	export enum S3DataDistribution { FullyReplicated = 0, ShardedByS3Key = 1 }

	export enum S3DataType { ManifestFile = 0, S3Prefix = 1, AugmentedManifestFile = 2 }

	export enum SearchSortOrder { Ascending = 0, Descending = 1 }

	export enum SplitType { None = 0, Line = 1, RecordIO = 2, TFRecord = 3 }


	/** <p>Represents an input or output artifact of a trial component. You specify <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and <code>OutputArtifacts</code> parameters in the <a>CreateTrialComponent</a> request.</p> <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p> */
	export interface TrialComponentArtifact {
		MediaType?: string | null;
		Value: string;
	}


	/** <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p> */
	export interface TrialComponentParameterValue {
		StringValue?: string | null;
		NumberValue?: number | null;
	}

	export enum TrialComponentPrimaryStatus { InProgress = 0, Completed = 1, Failed = 2, Stopping = 3, Stopped = 4 }

	export enum VariantPropertyType { DesiredInstanceCount = 0, DesiredWeight = 1, DataCaptureConfig = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints.</p> <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.</p> <note> <p>Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the <code>Tags</code> parameter of <a>CreateHyperParameterTuningJob</a> </p> </note>
		 * Post #X-Amz-Target=SageMaker.AddTags
		 * @return {AddTagsOutput} Success
		 */
		AddTags(requestBody: AddTagsInput): Observable<AddTagsOutput> {
			return this.http.post<AddTagsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.AddTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the <a>DisassociateTrialComponent</a> API.
		 * Post #X-Amz-Target=SageMaker.AssociateTrialComponent
		 * @return {AssociateTrialComponentResponse} Success
		 */
		AssociateTrialComponent(requestBody: AssociateTrialComponentRequest): Observable<AssociateTrialComponentResponse> {
			return this.http.post<AssociateTrialComponentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.AssociateTrialComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS Marketplace.
		 * Post #X-Amz-Target=SageMaker.CreateAlgorithm
		 * @return {CreateAlgorithmOutput} Success
		 */
		CreateAlgorithm(requestBody: CreateAlgorithmInput): Observable<CreateAlgorithmOutput> {
			return this.http.post<CreateAlgorithmOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreateAlgorithm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a running App for the specified UserProfile. Supported Apps are JupyterServer, KernelGateway, and TensorBoard. This operation is automatically invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously. UserProfiles are limited to 5 concurrently running Apps at a time.
		 * Post #X-Amz-Target=SageMaker.CreateApp
		 * @return {CreateAppResponse} Success
		 */
		CreateApp(requestBody: CreateAppRequest): Observable<CreateAppResponse> {
			return this.http.post<CreateAppResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AutoPilot job.</p> <p>After you run an AutoPilot job, you can find the best performing model by calling , and then deploy that model by following the steps described in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html">Step 6.1: Deploy the Model to Amazon SageMaker Hosting Services</a>.</p> <p>For information about how to use AutoPilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Use AutoPilot to Automate Model Development</a>.</p>
		 * Post #X-Amz-Target=SageMaker.CreateAutoMLJob
		 * @return {CreateAutoMLJobResponse} Success
		 */
		CreateAutoMLJob(requestBody: CreateAutoMLJobRequest): Observable<CreateAutoMLJobResponse> {
			return this.http.post<CreateAutoMLJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateAutoMLJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.</p> <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository.</p>
		 * Post #X-Amz-Target=SageMaker.CreateCodeRepository
		 * @return {CreateCodeRepositoryOutput} Success
		 */
		CreateCodeRepository(requestBody: CreateCodeRepositoryInput): Observable<CreateCodeRepositoryOutput> {
			return this.http.post<CreateCodeRepositoryOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreateCodeRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with AWS IoT Greengrass. In that case, deploy them as an ML resource.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p>A name for the compilation job</p> </li> <li> <p> Information about the input model artifacts </p> </li> <li> <p>The output location for the compiled model and the device (target) that the model runs on </p> </li> <li> <p> <code>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job</code> </p> </li> </ul> <p>You can also provide a <code>Tag</code> to track the model compilation job's resource use and costs. The response body contains the <code>CompilationJobArn</code> for the compiled job.</p> <p>To stop a model compilation job, use <a>StopCompilationJob</a>. To get information about a particular model compilation job, use <a>DescribeCompilationJob</a>. To get information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
		 * Post #X-Amz-Target=SageMaker.CreateCompilationJob
		 * @return {CreateCompilationJobResponse} Success
		 */
		CreateCompilationJob(requestBody: CreateCompilationJobRequest): Observable<CreateCompilationJobResponse> {
			return this.http.post<CreateCompilationJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateCompilationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <code>Domain</code> used by SageMaker Studio. A domain consists of an associated directory, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. An AWS account is limited to one domain per region. Users within a domain can share notebook files and other artifacts with each other.</p> <p>When a domain is created, an Amazon Elastic File System (EFS) volume is also created for use by all of the users within the domain. Each user receives a private home directory within the EFS for notebooks, Git repositories, and data files.</p> <p>All traffic between the domain and the EFS volume is communicated through the specified subnet IDs. All other traffic goes over the Internet through an Amazon SageMaker system VPC. The EFS traffic uses the NFS/TCP protocol over port 2049.</p> <important> <p>NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully.</p> </important>
		 * Post #X-Amz-Target=SageMaker.CreateDomain
		 * @return {CreateDomainResponse} Success
		 */
		CreateDomain(requestBody: CreateDomainRequest): Observable<CreateDomainResponse> {
			return this.http.post<CreateDomainResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the <a>CreateEndpointConfig</a> API. </p> <p> Use this API to deploy models using Amazon SageMaker hosting services. </p> <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).</a> </p> <note> <p> You must not delete an <code>EndpointConfig</code> that is in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note> <p>The endpoint name must be unique within an AWS Region in your AWS account. </p> <p>When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. </p> <note> <p>When you call <a>CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a>DescribeEndpointConfig</a> before calling <a>CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note> <p>When Amazon SageMaker receives the request, it sets the endpoint status to <code>Creating</code>. After it creates the endpoint, it sets the status to <code>InService</code>. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API.</p> <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location, Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provided. AWS STS is activated in your IAM user account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User Guide</i>.</p>
		 * Post #X-Amz-Target=SageMaker.CreateEndpoint
		 * @return {CreateEndpointOutput} Success
		 */
		CreateEndpoint(requestBody: CreateEndpointInput): Observable<CreateEndpointOutput> {
			return this.http.post<CreateEndpointOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the <code>CreateModel</code> API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the <a>CreateEndpoint</a> API.</p> <note> <p> Use this API if you want to use Amazon SageMaker hosting services to deploy models into production. </p> </note> <p>In the request, you define a <code>ProductionVariant</code>, for each model that you want to deploy. Each <code>ProductionVariant</code> parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy. </p> <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. </p> <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).</a> </p> <note> <p>When you call <a>CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a>DescribeEndpointConfig</a> before calling <a>CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note>
		 * Post #X-Amz-Target=SageMaker.CreateEndpointConfig
		 * @return {CreateEndpointConfigOutput} Success
		 */
		CreateEndpointConfig(requestBody: CreateEndpointConfigInput): Observable<CreateEndpointConfigOutput> {
			return this.http.post<CreateEndpointConfigOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreateEndpointConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon SageMaker <i>experiment</i>. An experiment is a collection of <i>trials</i> that are observed, compared and evaluated as a group. A trial is a set of steps, called <i>trial components</i>, that produce a machine learning model.</p> <p>The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant.</p> <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to experiments, trials, trial components and then use the <a>Search</a> API to search for the tags.</p> <p>To add a description to an experiment, specify the optional <code>Description</code> parameter. To add a description later, or to change the description, call the <a>UpdateExperiment</a> API.</p> <p>To get a list of all your experiments, call the <a>ListExperiments</a> API. To view an experiment's properties, call the <a>DescribeExperiment</a> API. To get a list of all the trials associated with an experiment, call the <a>ListTrials</a> API. To create a trial call the <a>CreateTrial</a> API.</p>
		 * Post #X-Amz-Target=SageMaker.CreateExperiment
		 * @return {CreateExperimentResponse} Success
		 */
		CreateExperiment(requestBody: CreateExperimentRequest): Observable<CreateExperimentResponse> {
			return this.http.post<CreateExperimentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateExperiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a flow definition.
		 * Post #X-Amz-Target=SageMaker.CreateFlowDefinition
		 * @return {CreateFlowDefinitionResponse} Success
		 */
		CreateFlowDefinition(requestBody: CreateFlowDefinitionRequest): Observable<CreateFlowDefinitionResponse> {
			return this.http.post<CreateFlowDefinitionResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateFlowDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.
		 * Post #X-Amz-Target=SageMaker.CreateHumanTaskUi
		 * @return {CreateHumanTaskUiResponse} Success
		 */
		CreateHumanTaskUi(requestBody: CreateHumanTaskUiRequest): Observable<CreateHumanTaskUiResponse> {
			return this.http.post<CreateHumanTaskUiResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateHumanTaskUi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.
		 * Post #X-Amz-Target=SageMaker.CreateHyperParameterTuningJob
		 * @return {CreateHyperParameterTuningJobResponse} Success
		 */
		CreateHyperParameterTuningJob(requestBody: CreateHyperParameterTuningJobRequest): Observable<CreateHyperParameterTuningJobResponse> {
			return this.http.post<CreateHyperParameterTuningJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateHyperParameterTuningJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models.</p> <p>You can select your workforce from one of three providers:</p> <ul> <li> <p>A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.</p> </li> <li> <p>One or more vendors that you select from the AWS Marketplace. Vendors provide expertise in specific areas. </p> </li> <li> <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.</p> </li> </ul> <p>You can also use <i>automated data labeling</i> to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses <i>active learning</i> to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using Automated Data Labeling</a>.</p> <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a <i>manifest file</i> that describes the location of each object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p> <p>The output can be used as the manifest file for another labeling job or as training data for your machine learning models.</p>
		 * Post #X-Amz-Target=SageMaker.CreateLabelingJob
		 * @return {CreateLabelingJobResponse} Success
		 */
		CreateLabelingJob(requestBody: CreateLabelingJobRequest): Observable<CreateLabelingJobResponse> {
			return this.http.post<CreateLabelingJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateLabelingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions.</p> <p>Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch transform job.</p> <p>To host your model, you create an endpoint configuration with the <code>CreateEndpointConfig</code> API, and then create an endpoint with the <code>CreateEndpoint</code> API. Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment. </p> <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto 3)).</a> </p> <p>To run a batch transform using your model, you start a job with the <code>CreateTransformJob</code> API. Amazon SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location.</p> <p>In the <code>CreateModel</code> request, you must define a container with the <code>PrimaryContainer</code> parameter.</p> <p>In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other AWS resources, you grant necessary permissions via this role.</p>
		 * Post #X-Amz-Target=SageMaker.CreateModel
		 * @return {CreateModelOutput} Success
		 */
		CreateModel(requestBody: CreateModelInput): Observable<CreateModelOutput> {
			return this.http.post<CreateModelOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreateModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a model package that you can use to create Amazon SageMaker models or list on AWS Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p> <p>To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for <code>InferenceSpecification</code>. To create a model from an algorithm resource that you created or subscribed to in AWS Marketplace, provide a value for <code>SourceAlgorithmSpecification</code>.</p>
		 * Post #X-Amz-Target=SageMaker.CreateModelPackage
		 * @return {CreateModelPackageOutput} Success
		 */
		CreateModelPackage(requestBody: CreateModelPackageInput): Observable<CreateModelPackageOutput> {
			return this.http.post<CreateModelPackageOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreateModelPackage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endoint.
		 * Post #X-Amz-Target=SageMaker.CreateMonitoringSchedule
		 * @return {CreateMonitoringScheduleResponse} Success
		 */
		CreateMonitoringSchedule(requestBody: CreateMonitoringScheduleRequest): Observable<CreateMonitoringScheduleResponse> {
			return this.http.post<CreateMonitoringScheduleResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateMonitoringSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. </p> <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. </p> <p>Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework. </p> <p>After receiving the request, Amazon SageMaker does the following:</p> <ol> <li> <p>Creates a network interface in the Amazon SageMaker VPC.</p> </li> <li> <p>(Option) If you specified <code>SubnetId</code>, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.</p> </li> <li> <p>Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified <code>SubnetId</code> of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.</p> </li> </ol> <p>After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it.</p> <p>After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
		 * Post #X-Amz-Target=SageMaker.CreateNotebookInstance
		 * @return {CreateNotebookInstanceOutput} Success
		 */
		CreateNotebookInstance(requestBody: CreateNotebookInstanceInput): Observable<CreateNotebookInstanceOutput> {
			return this.http.post<CreateNotebookInstanceOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreateNotebookInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a lifecycle configuration that you can associate with a notebook instance. A <i>lifecycle configuration</i> is a collection of shell scripts that run when you create or start a notebook instance.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
		 * Post #X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig
		 * @return {CreateNotebookInstanceLifecycleConfigOutput} Success
		 */
		CreateNotebookInstanceLifecycleConfig(requestBody: CreateNotebookInstanceLifecycleConfigInput): Observable<CreateNotebookInstanceLifecycleConfigOutput> {
			return this.http.post<CreateNotebookInstanceLifecycleConfigOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreateNotebookInstanceLifecycleConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume. This operation can only be called when the authentication mode equals IAM.
		 * Post #X-Amz-Target=SageMaker.CreatePresignedDomainUrl
		 * @return {CreatePresignedDomainUrlResponse} Success
		 */
		CreatePresignedDomainUrl(requestBody: CreatePresignedDomainUrlRequest): Observable<CreatePresignedDomainUrlResponse> {
			return this.http.post<CreatePresignedDomainUrlResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreatePresignedDomainUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the Amazon SageMaker console, when you choose <code>Open</code> next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.</p> <p> The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the <code>aws:SourceIP</code> condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p> <note> <p>The URL that you get from a call to <a>CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the AWS console sign-in page.</p> </note>
		 * Post #X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl
		 * @return {CreatePresignedNotebookInstanceUrlOutput} Success
		 */
		CreatePresignedNotebookInstanceUrl(requestBody: CreatePresignedNotebookInstanceUrlInput): Observable<CreatePresignedNotebookInstanceUrlOutput> {
			return this.http.post<CreatePresignedNotebookInstanceUrlOutput>(this.baseUri + '#X-Amz-Target=SageMaker.CreatePresignedNotebookInstanceUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a processing job.
		 * Post #X-Amz-Target=SageMaker.CreateProcessingJob
		 * @return {CreateProcessingJobResponse} Success
		 */
		CreateProcessingJob(requestBody: CreateProcessingJobRequest): Observable<CreateProcessingJobResponse> {
			return this.http.post<CreateProcessingJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateProcessingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than Amazon SageMaker, provided that you know how to use them for inferences. </p> <p>In the request body, you provide the following: </p> <ul> <li> <p> <code>AlgorithmSpecification</code> - Identifies the training algorithm to use. </p> </li> <li> <p> <code>HyperParameters</code> - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p> </li> <li> <p> <code>InputDataConfig</code> - Describes the training dataset and the Amazon S3, EFS, or FSx location where it is stored.</p> </li> <li> <p> <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of model training. </p> <p/> </li> <li> <p> <code>ResourceConfig</code> - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. </p> </li> <li> <p> <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>. </p> </li> <li> <p> <code>RoleARN</code> - The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training. </p> </li> <li> <p> <code>StoppingCondition</code> - To help cap training costs, use <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use <code>MaxWaitTimeInSeconds</code> to specify how long you are willing to wait for a managed spot training job to complete. </p> </li> </ul> <p> For more information about Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
		 * Post #X-Amz-Target=SageMaker.CreateTrainingJob
		 * @return {CreateTrainingJobResponse} Success
		 */
		CreateTrainingJob(requestBody: CreateTrainingJobRequest): Observable<CreateTrainingJobResponse> {
			return this.http.post<CreateTrainingJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateTrainingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.</p> <p>To perform batch transformations, you create a transform job and use the data that you have readily available.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p> <code>TransformJobName</code> - Identifies the transform job. The name must be unique within an AWS Region in an AWS account.</p> </li> <li> <p> <code>ModelName</code> - Identifies the model to use. <code>ModelName</code> must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS account. For information on creating a model, see <a>CreateModel</a>.</p> </li> <li> <p> <code>TransformInput</code> - Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>TransformOutput</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p> </li> <li> <p> <code>TransformResources</code> - Identifies the ML compute instances for the transform job.</p> </li> </ul> <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch Transform</a>.</p>
		 * Post #X-Amz-Target=SageMaker.CreateTransformJob
		 * @return {CreateTransformJobResponse} Success
		 */
		CreateTransformJob(requestBody: CreateTransformJobRequest): Observable<CreateTransformJobResponse> {
			return this.http.post<CreateTransformJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateTransformJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Amazon SageMaker <i>trial</i>. A trial is a set of steps called <i>trial components</i> that produce a machine learning model. A trial is part of a single Amazon SageMaker <i>experiment</i>.</p> <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial and then use the <a>Search</a> API to search for the tags.</p> <p>To get a list of all your trials, call the <a>ListTrials</a> API. To view a trial's properties, call the <a>DescribeTrial</a> API. To create a trial component, call the <a>CreateTrialComponent</a> API.</p>
		 * Post #X-Amz-Target=SageMaker.CreateTrial
		 * @return {CreateTrialResponse} Success
		 */
		CreateTrial(requestBody: CreateTrialRequest): Observable<CreateTrialResponse> {
			return this.http.post<CreateTrialResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateTrial', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <i>trial component</i>, which is a stage of a machine learning <i>trial</i>. A trial is composed of one or more trial components. A trial component can be used in multiple trials.</p> <p>Trial components include pre-processing jobs, training jobs, and batch transform jobs.</p> <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial component and then use the <a>Search</a> API to search for the tags.</p> <note> <p> <code>CreateTrialComponent</code> can only be invoked from within an Amazon SageMaker managed environment. This includes Amazon SageMaker training jobs, processing jobs, transform jobs, and Amazon SageMaker notebooks. A call to <code>CreateTrialComponent</code> from outside one of these environments results in an error.</p> </note>
		 * Post #X-Amz-Target=SageMaker.CreateTrialComponent
		 * @return {CreateTrialComponentResponse} Success
		 */
		CreateTrialComponent(requestBody: CreateTrialComponentRequest): Observable<CreateTrialComponentResponse> {
			return this.http.post<CreateTrialComponentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateTrialComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from SSO, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
		 * Post #X-Amz-Target=SageMaker.CreateUserProfile
		 * @return {CreateUserProfileResponse} Success
		 */
		CreateUserProfile(requestBody: CreateUserProfileRequest): Observable<CreateUserProfileResponse> {
			return this.http.post<CreateUserProfileResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.</p> <p>You cannot create more than 25 work teams in an account and region.</p>
		 * Post #X-Amz-Target=SageMaker.CreateWorkteam
		 * @return {CreateWorkteamResponse} Success
		 */
		CreateWorkteam(requestBody: CreateWorkteamRequest): Observable<CreateWorkteamResponse> {
			return this.http.post<CreateWorkteamResponse>(this.baseUri + '#X-Amz-Target=SageMaker.CreateWorkteam', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified algorithm from your account.
		 * Post #X-Amz-Target=SageMaker.DeleteAlgorithm
		 * @return {void} Success
		 */
		DeleteAlgorithm(requestBody: DeleteAlgorithmInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteAlgorithm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Used to stop and delete an app.
		 * Post #X-Amz-Target=SageMaker.DeleteApp
		 * @return {void} Success
		 */
		DeleteApp(requestBody: DeleteAppRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified Git repository from your account.
		 * Post #X-Amz-Target=SageMaker.DeleteCodeRepository
		 * @return {void} Success
		 */
		DeleteCodeRepository(requestBody: DeleteCodeRepositoryInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteCodeRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using SSO. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts.
		 * Post #X-Amz-Target=SageMaker.DeleteDomain
		 * @return {void} Success
		 */
		DeleteDomain(requestBody: DeleteDomainRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created. </p> <p>Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p>
		 * Post #X-Amz-Target=SageMaker.DeleteEndpoint
		 * @return {void} Success
		 */
		DeleteEndpoint(requestBody: DeleteEndpointInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API deletes only the specified configuration. It does not delete endpoints created using the configuration. </p> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p>
		 * Post #X-Amz-Target=SageMaker.DeleteEndpointConfig
		 * @return {void} Success
		 */
		DeleteEndpointConfig(requestBody: DeleteEndpointConfigInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteEndpointConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an Amazon SageMaker experiment. All trials associated with the experiment must be deleted first. Use the <a>ListTrials</a> API to get a list of the trials associated with the experiment.
		 * Post #X-Amz-Target=SageMaker.DeleteExperiment
		 * @return {DeleteExperimentResponse} Success
		 */
		DeleteExperiment(requestBody: DeleteExperimentRequest): Observable<DeleteExperimentResponse> {
			return this.http.post<DeleteExperimentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DeleteExperiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified flow definition.
		 * Post #X-Amz-Target=SageMaker.DeleteFlowDefinition
		 * @return {DeleteFlowDefinitionResponse} Success
		 */
		DeleteFlowDefinition(requestBody: DeleteFlowDefinitionRequest): Observable<DeleteFlowDefinitionResponse> {
			return this.http.post<DeleteFlowDefinitionResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DeleteFlowDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in Amazon SageMaker when you called the <a>CreateModel</a> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model.
		 * Post #X-Amz-Target=SageMaker.DeleteModel
		 * @return {void} Success
		 */
		DeleteModel(requestBody: DeleteModelInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a model package.</p> <p>A model package is used to create Amazon SageMaker models or list on AWS Marketplace. Buyers can subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
		 * Post #X-Amz-Target=SageMaker.DeleteModelPackage
		 * @return {void} Success
		 */
		DeleteModelPackage(requestBody: DeleteModelPackageInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteModelPackage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule.
		 * Post #X-Amz-Target=SageMaker.DeleteMonitoringSchedule
		 * @return {void} Success
		 */
		DeleteMonitoringSchedule(requestBody: DeleteMonitoringScheduleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteMonitoringSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the <code>StopNotebookInstance</code> API. </p> <important> <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance. </p> </important>
		 * Post #X-Amz-Target=SageMaker.DeleteNotebookInstance
		 * @return {void} Success
		 */
		DeleteNotebookInstance(requestBody: DeleteNotebookInstanceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteNotebookInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a notebook instance lifecycle configuration.
		 * Post #X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig
		 * @return {void} Success
		 */
		DeleteNotebookInstanceLifecycleConfig(requestBody: DeleteNotebookInstanceLifecycleConfigInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteNotebookInstanceLifecycleConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified tags from an Amazon SageMaker resource.</p> <p>To list a resource's tags, use the <code>ListTags</code> API. </p> <note> <p>When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API.</p> </note>
		 * Post #X-Amz-Target=SageMaker.DeleteTags
		 * @return {DeleteTagsOutput} Success
		 */
		DeleteTags(requestBody: DeleteTagsInput): Observable<DeleteTagsOutput> {
			return this.http.post<DeleteTagsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DeleteTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the <a>DescribeTrialComponent</a> API to get the list of trial components.
		 * Post #X-Amz-Target=SageMaker.DeleteTrial
		 * @return {DeleteTrialResponse} Success
		 */
		DeleteTrial(requestBody: DeleteTrialRequest): Observable<DeleteTrialResponse> {
			return this.http.post<DeleteTrialResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DeleteTrial', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the <a>DisassociateTrialComponent</a> API.
		 * Post #X-Amz-Target=SageMaker.DeleteTrialComponent
		 * @return {DeleteTrialComponentResponse} Success
		 */
		DeleteTrialComponent(requestBody: DeleteTrialComponentRequest): Observable<DeleteTrialComponentResponse> {
			return this.http.post<DeleteTrialComponentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DeleteTrialComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.
		 * Post #X-Amz-Target=SageMaker.DeleteUserProfile
		 * @return {void} Success
		 */
		DeleteUserProfile(requestBody: DeleteUserProfileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.DeleteUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing work team. This operation can't be undone.
		 * Post #X-Amz-Target=SageMaker.DeleteWorkteam
		 * @return {DeleteWorkteamResponse} Success
		 */
		DeleteWorkteam(requestBody: DeleteWorkteamRequest): Observable<DeleteWorkteamResponse> {
			return this.http.post<DeleteWorkteamResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DeleteWorkteam', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a description of the specified algorithm that is in your account.
		 * Post #X-Amz-Target=SageMaker.DescribeAlgorithm
		 * @return {DescribeAlgorithmOutput} Success
		 */
		DescribeAlgorithm(requestBody: DescribeAlgorithmInput): Observable<DescribeAlgorithmOutput> {
			return this.http.post<DescribeAlgorithmOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeAlgorithm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the app.
		 * Post #X-Amz-Target=SageMaker.DescribeApp
		 * @return {DescribeAppResponse} Success
		 */
		DescribeApp(requestBody: DescribeAppRequest): Observable<DescribeAppResponse> {
			return this.http.post<DescribeAppResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about an Amazon SageMaker job.
		 * Post #X-Amz-Target=SageMaker.DescribeAutoMLJob
		 * @return {DescribeAutoMLJobResponse} Success
		 */
		DescribeAutoMLJob(requestBody: DescribeAutoMLJobRequest): Observable<DescribeAutoMLJobResponse> {
			return this.http.post<DescribeAutoMLJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeAutoMLJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details about the specified Git repository.
		 * Post #X-Amz-Target=SageMaker.DescribeCodeRepository
		 * @return {DescribeCodeRepositoryOutput} Success
		 */
		DescribeCodeRepository(requestBody: DescribeCodeRepositoryInput): Observable<DescribeCodeRepositoryOutput> {
			return this.http.post<DescribeCodeRepositoryOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeCodeRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about a model compilation job.</p> <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
		 * Post #X-Amz-Target=SageMaker.DescribeCompilationJob
		 * @return {DescribeCompilationJobResponse} Success
		 */
		DescribeCompilationJob(requestBody: DescribeCompilationJobRequest): Observable<DescribeCompilationJobResponse> {
			return this.http.post<DescribeCompilationJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeCompilationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The description of the domain.
		 * Post #X-Amz-Target=SageMaker.DescribeDomain
		 * @return {DescribeDomainResponse} Success
		 */
		DescribeDomain(requestBody: DescribeDomainRequest): Observable<DescribeDomainResponse> {
			return this.http.post<DescribeDomainResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the description of an endpoint.
		 * Post #X-Amz-Target=SageMaker.DescribeEndpoint
		 * @return {DescribeEndpointOutput} Success
		 */
		DescribeEndpoint(requestBody: DescribeEndpointInput): Observable<DescribeEndpointOutput> {
			return this.http.post<DescribeEndpointOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the description of an endpoint configuration created using the <code>CreateEndpointConfig</code> API.
		 * Post #X-Amz-Target=SageMaker.DescribeEndpointConfig
		 * @return {DescribeEndpointConfigOutput} Success
		 */
		DescribeEndpointConfig(requestBody: DescribeEndpointConfigInput): Observable<DescribeEndpointConfigOutput> {
			return this.http.post<DescribeEndpointConfigOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeEndpointConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of an experiment's properties.
		 * Post #X-Amz-Target=SageMaker.DescribeExperiment
		 * @return {DescribeExperimentResponse} Success
		 */
		DescribeExperiment(requestBody: DescribeExperimentRequest): Observable<DescribeExperimentResponse> {
			return this.http.post<DescribeExperimentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeExperiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified flow definition.
		 * Post #X-Amz-Target=SageMaker.DescribeFlowDefinition
		 * @return {DescribeFlowDefinitionResponse} Success
		 */
		DescribeFlowDefinition(requestBody: DescribeFlowDefinitionRequest): Observable<DescribeFlowDefinitionResponse> {
			return this.http.post<DescribeFlowDefinitionResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeFlowDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the requested human task user interface.
		 * Post #X-Amz-Target=SageMaker.DescribeHumanTaskUi
		 * @return {DescribeHumanTaskUiResponse} Success
		 */
		DescribeHumanTaskUi(requestBody: DescribeHumanTaskUiRequest): Observable<DescribeHumanTaskUiResponse> {
			return this.http.post<DescribeHumanTaskUiResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeHumanTaskUi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a description of a hyperparameter tuning job.
		 * Post #X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob
		 * @return {DescribeHyperParameterTuningJobResponse} Success
		 */
		DescribeHyperParameterTuningJob(requestBody: DescribeHyperParameterTuningJobRequest): Observable<DescribeHyperParameterTuningJobResponse> {
			return this.http.post<DescribeHyperParameterTuningJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeHyperParameterTuningJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a labeling job.
		 * Post #X-Amz-Target=SageMaker.DescribeLabelingJob
		 * @return {DescribeLabelingJobResponse} Success
		 */
		DescribeLabelingJob(requestBody: DescribeLabelingJobRequest): Observable<DescribeLabelingJobResponse> {
			return this.http.post<DescribeLabelingJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeLabelingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a model that you created using the <code>CreateModel</code> API.
		 * Post #X-Amz-Target=SageMaker.DescribeModel
		 * @return {DescribeModelOutput} Success
		 */
		DescribeModel(requestBody: DescribeModelInput): Observable<DescribeModelOutput> {
			return this.http.post<DescribeModelOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a description of the specified model package, which is used to create Amazon SageMaker models or list them on AWS Marketplace.</p> <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS Marketplace.</p>
		 * Post #X-Amz-Target=SageMaker.DescribeModelPackage
		 * @return {DescribeModelPackageOutput} Success
		 */
		DescribeModelPackage(requestBody: DescribeModelPackageInput): Observable<DescribeModelPackageOutput> {
			return this.http.post<DescribeModelPackageOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeModelPackage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the schedule for a monitoring job.
		 * Post #X-Amz-Target=SageMaker.DescribeMonitoringSchedule
		 * @return {DescribeMonitoringScheduleResponse} Success
		 */
		DescribeMonitoringSchedule(requestBody: DescribeMonitoringScheduleRequest): Observable<DescribeMonitoringScheduleResponse> {
			return this.http.post<DescribeMonitoringScheduleResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeMonitoringSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a notebook instance.
		 * Post #X-Amz-Target=SageMaker.DescribeNotebookInstance
		 * @return {DescribeNotebookInstanceOutput} Success
		 */
		DescribeNotebookInstance(requestBody: DescribeNotebookInstanceInput): Observable<DescribeNotebookInstanceOutput> {
			return this.http.post<DescribeNotebookInstanceOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeNotebookInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a description of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
		 * Post #X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig
		 * @return {DescribeNotebookInstanceLifecycleConfigOutput} Success
		 */
		DescribeNotebookInstanceLifecycleConfig(requestBody: DescribeNotebookInstanceLifecycleConfigInput): Observable<DescribeNotebookInstanceLifecycleConfigOutput> {
			return this.http.post<DescribeNotebookInstanceLifecycleConfigOutput>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeNotebookInstanceLifecycleConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a description of a processing job.
		 * Post #X-Amz-Target=SageMaker.DescribeProcessingJob
		 * @return {DescribeProcessingJobResponse} Success
		 */
		DescribeProcessingJob(requestBody: DescribeProcessingJobRequest): Observable<DescribeProcessingJobResponse> {
			return this.http.post<DescribeProcessingJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeProcessingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the AWS Marketplace.
		 * Post #X-Amz-Target=SageMaker.DescribeSubscribedWorkteam
		 * @return {DescribeSubscribedWorkteamResponse} Success
		 */
		DescribeSubscribedWorkteam(requestBody: DescribeSubscribedWorkteamRequest): Observable<DescribeSubscribedWorkteamResponse> {
			return this.http.post<DescribeSubscribedWorkteamResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeSubscribedWorkteam', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a training job.
		 * Post #X-Amz-Target=SageMaker.DescribeTrainingJob
		 * @return {DescribeTrainingJobResponse} Success
		 */
		DescribeTrainingJob(requestBody: DescribeTrainingJobRequest): Observable<DescribeTrainingJobResponse> {
			return this.http.post<DescribeTrainingJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeTrainingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a transform job.
		 * Post #X-Amz-Target=SageMaker.DescribeTransformJob
		 * @return {DescribeTransformJobResponse} Success
		 */
		DescribeTransformJob(requestBody: DescribeTransformJobRequest): Observable<DescribeTransformJobResponse> {
			return this.http.post<DescribeTransformJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeTransformJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of a trial's properties.
		 * Post #X-Amz-Target=SageMaker.DescribeTrial
		 * @return {DescribeTrialResponse} Success
		 */
		DescribeTrial(requestBody: DescribeTrialRequest): Observable<DescribeTrialResponse> {
			return this.http.post<DescribeTrialResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeTrial', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of a trials component's properties.
		 * Post #X-Amz-Target=SageMaker.DescribeTrialComponent
		 * @return {DescribeTrialComponentResponse} Success
		 */
		DescribeTrialComponent(requestBody: DescribeTrialComponentRequest): Observable<DescribeTrialComponentResponse> {
			return this.http.post<DescribeTrialComponentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeTrialComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a user profile. For more information, see <code>CreateUserProfile</code>.
		 * Post #X-Amz-Target=SageMaker.DescribeUserProfile
		 * @return {DescribeUserProfileResponse} Success
		 */
		DescribeUserProfile(requestBody: DescribeUserProfileRequest): Observable<DescribeUserProfileResponse> {
			return this.http.post<DescribeUserProfileResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address ranges are the IP addresses that workers can use to access tasks. </p> <important> <p>This operation applies only to private workforces.</p> </important>
		 * Post #X-Amz-Target=SageMaker.DescribeWorkforce
		 * @return {DescribeWorkforceResponse} Success
		 */
		DescribeWorkforce(requestBody: DescribeWorkforceRequest): Observable<DescribeWorkforceResponse> {
			return this.http.post<DescribeWorkforceResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeWorkforce', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).
		 * Post #X-Amz-Target=SageMaker.DescribeWorkteam
		 * @return {DescribeWorkteamResponse} Success
		 */
		DescribeWorkteam(requestBody: DescribeWorkteamRequest): Observable<DescribeWorkteamResponse> {
			return this.http.post<DescribeWorkteamResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DescribeWorkteam', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the <a>AssociateTrialComponent</a> API.</p> <p>To get a list of the trials a component is associated with, use the <a>Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter. The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
		 * Post #X-Amz-Target=SageMaker.DisassociateTrialComponent
		 * @return {DisassociateTrialComponentResponse} Success
		 */
		DisassociateTrialComponent(requestBody: DisassociateTrialComponentRequest): Observable<DisassociateTrialComponentResponse> {
			return this.http.post<DisassociateTrialComponentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.DisassociateTrialComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An auto-complete API for the search functionality in the Amazon SageMaker console. It returns suggestions of possible matches for the property name to use in <code>Search</code> queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and <code>Metrics</code>.
		 * Post #X-Amz-Target=SageMaker.GetSearchSuggestions
		 * @return {GetSearchSuggestionsResponse} Success
		 */
		GetSearchSuggestions(requestBody: GetSearchSuggestionsRequest): Observable<GetSearchSuggestionsResponse> {
			return this.http.post<GetSearchSuggestionsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.GetSearchSuggestions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the machine learning algorithms that have been created.
		 * Post #X-Amz-Target=SageMaker.ListAlgorithms
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAlgorithmsOutput} Success
		 */
		ListAlgorithms(MaxResults: string, NextToken: string, requestBody: ListAlgorithmsInput): Observable<ListAlgorithmsOutput> {
			return this.http.post<ListAlgorithmsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListAlgorithms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists apps.
		 * Post #X-Amz-Target=SageMaker.ListApps
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppsResponse} Success
		 */
		ListApps(MaxResults: string, NextToken: string, requestBody: ListAppsRequest): Observable<ListAppsResponse> {
			return this.http.post<ListAppsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListApps?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request a list of jobs.
		 * Post #X-Amz-Target=SageMaker.ListAutoMLJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAutoMLJobsResponse} Success
		 */
		ListAutoMLJobs(MaxResults: string, NextToken: string, requestBody: ListAutoMLJobsRequest): Observable<ListAutoMLJobsResponse> {
			return this.http.post<ListAutoMLJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListAutoMLJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the Candidates created for the job.
		 * Post #X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCandidatesForAutoMLJobResponse} Success
		 */
		ListCandidatesForAutoMLJob(MaxResults: string, NextToken: string, requestBody: ListCandidatesForAutoMLJobRequest): Observable<ListCandidatesForAutoMLJobResponse> {
			return this.http.post<ListCandidatesForAutoMLJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the Git repositories in your account.
		 * Post #X-Amz-Target=SageMaker.ListCodeRepositories
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCodeRepositoriesOutput} Success
		 */
		ListCodeRepositories(MaxResults: string, NextToken: string, requestBody: ListCodeRepositoriesInput): Observable<ListCodeRepositoriesOutput> {
			return this.http.post<ListCodeRepositoriesOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListCodeRepositories?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists model compilation jobs that satisfy various filters.</p> <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
		 * Post #X-Amz-Target=SageMaker.ListCompilationJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCompilationJobsResponse} Success
		 */
		ListCompilationJobs(MaxResults: string, NextToken: string, requestBody: ListCompilationJobsRequest): Observable<ListCompilationJobsResponse> {
			return this.http.post<ListCompilationJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListCompilationJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the domains.
		 * Post #X-Amz-Target=SageMaker.ListDomains
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(MaxResults: string, NextToken: string, requestBody: ListDomainsRequest): Observable<ListDomainsResponse> {
			return this.http.post<ListDomainsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListDomains?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists endpoint configurations.
		 * Post #X-Amz-Target=SageMaker.ListEndpointConfigs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEndpointConfigsOutput} Success
		 */
		ListEndpointConfigs(MaxResults: string, NextToken: string, requestBody: ListEndpointConfigsInput): Observable<ListEndpointConfigsOutput> {
			return this.http.post<ListEndpointConfigsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListEndpointConfigs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists endpoints.
		 * Post #X-Amz-Target=SageMaker.ListEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEndpointsOutput} Success
		 */
		ListEndpoints(MaxResults: string, NextToken: string, requestBody: ListEndpointsInput): Observable<ListEndpointsOutput> {
			return this.http.post<ListEndpointsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.
		 * Post #X-Amz-Target=SageMaker.ListExperiments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListExperimentsResponse} Success
		 */
		ListExperiments(MaxResults: string, NextToken: string, requestBody: ListExperimentsRequest): Observable<ListExperimentsResponse> {
			return this.http.post<ListExperimentsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListExperiments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the flow definitions in your account.
		 * Post #X-Amz-Target=SageMaker.ListFlowDefinitions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFlowDefinitionsResponse} Success
		 */
		ListFlowDefinitions(MaxResults: string, NextToken: string, requestBody: ListFlowDefinitionsRequest): Observable<ListFlowDefinitionsResponse> {
			return this.http.post<ListFlowDefinitionsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListFlowDefinitions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the human task user interfaces in your account.
		 * Post #X-Amz-Target=SageMaker.ListHumanTaskUis
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHumanTaskUisResponse} Success
		 */
		ListHumanTaskUis(MaxResults: string, NextToken: string, requestBody: ListHumanTaskUisRequest): Observable<ListHumanTaskUisResponse> {
			return this.http.post<ListHumanTaskUisResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListHumanTaskUis?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of <a>HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.
		 * Post #X-Amz-Target=SageMaker.ListHyperParameterTuningJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHyperParameterTuningJobsResponse} Success
		 */
		ListHyperParameterTuningJobs(MaxResults: string, NextToken: string, requestBody: ListHyperParameterTuningJobsRequest): Observable<ListHyperParameterTuningJobsResponse> {
			return this.http.post<ListHyperParameterTuningJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of labeling jobs.
		 * Post #X-Amz-Target=SageMaker.ListLabelingJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLabelingJobsResponse} Success
		 */
		ListLabelingJobs(MaxResults: string, NextToken: string, requestBody: ListLabelingJobsRequest): Observable<ListLabelingJobsResponse> {
			return this.http.post<ListLabelingJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListLabelingJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of labeling jobs assigned to a specified work team.
		 * Post #X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLabelingJobsForWorkteamResponse} Success
		 */
		ListLabelingJobsForWorkteam(MaxResults: string, NextToken: string, requestBody: ListLabelingJobsForWorkteamRequest): Observable<ListLabelingJobsForWorkteamResponse> {
			return this.http.post<ListLabelingJobsForWorkteamResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the model packages that have been created.
		 * Post #X-Amz-Target=SageMaker.ListModelPackages
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListModelPackagesOutput} Success
		 */
		ListModelPackages(MaxResults: string, NextToken: string, requestBody: ListModelPackagesInput): Observable<ListModelPackagesOutput> {
			return this.http.post<ListModelPackagesOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListModelPackages?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists models created with the <a>CreateModel</a> API.
		 * Post #X-Amz-Target=SageMaker.ListModels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListModelsOutput} Success
		 */
		ListModels(MaxResults: string, NextToken: string, requestBody: ListModelsInput): Observable<ListModelsOutput> {
			return this.http.post<ListModelsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListModels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns list of all monitoring job executions.
		 * Post #X-Amz-Target=SageMaker.ListMonitoringExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMonitoringExecutionsResponse} Success
		 */
		ListMonitoringExecutions(MaxResults: string, NextToken: string, requestBody: ListMonitoringExecutionsRequest): Observable<ListMonitoringExecutionsResponse> {
			return this.http.post<ListMonitoringExecutionsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListMonitoringExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns list of all monitoring schedules.
		 * Post #X-Amz-Target=SageMaker.ListMonitoringSchedules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMonitoringSchedulesResponse} Success
		 */
		ListMonitoringSchedules(MaxResults: string, NextToken: string, requestBody: ListMonitoringSchedulesRequest): Observable<ListMonitoringSchedulesResponse> {
			return this.http.post<ListMonitoringSchedulesResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListMonitoringSchedules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.
		 * Post #X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNotebookInstanceLifecycleConfigsOutput} Success
		 */
		ListNotebookInstanceLifecycleConfigs(MaxResults: string, NextToken: string, requestBody: ListNotebookInstanceLifecycleConfigsInput): Observable<ListNotebookInstanceLifecycleConfigsOutput> {
			return this.http.post<ListNotebookInstanceLifecycleConfigsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region.
		 * Post #X-Amz-Target=SageMaker.ListNotebookInstances
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNotebookInstancesOutput} Success
		 */
		ListNotebookInstances(MaxResults: string, NextToken: string, requestBody: ListNotebookInstancesInput): Observable<ListNotebookInstancesOutput> {
			return this.http.post<ListNotebookInstancesOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListNotebookInstances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists processing jobs that satisfy various filters.
		 * Post #X-Amz-Target=SageMaker.ListProcessingJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProcessingJobsResponse} Success
		 */
		ListProcessingJobs(MaxResults: string, NextToken: string, requestBody: ListProcessingJobsRequest): Observable<ListProcessingJobsResponse> {
			return this.http.post<ListProcessingJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListProcessingJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
		 * Post #X-Amz-Target=SageMaker.ListSubscribedWorkteams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSubscribedWorkteamsResponse} Success
		 */
		ListSubscribedWorkteams(MaxResults: string, NextToken: string, requestBody: ListSubscribedWorkteamsRequest): Observable<ListSubscribedWorkteamsResponse> {
			return this.http.post<ListSubscribedWorkteamsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListSubscribedWorkteams?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the tags for the specified Amazon SageMaker resource.
		 * Post #X-Amz-Target=SageMaker.ListTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsOutput} Success
		 */
		ListTags(MaxResults: string, NextToken: string, requestBody: ListTagsInput): Observable<ListTagsOutput> {
			return this.http.post<ListTagsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists training jobs.
		 * Post #X-Amz-Target=SageMaker.ListTrainingJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrainingJobsResponse} Success
		 */
		ListTrainingJobs(MaxResults: string, NextToken: string, requestBody: ListTrainingJobsRequest): Observable<ListTrainingJobsResponse> {
			return this.http.post<ListTrainingJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTrainingJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of <a>TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.
		 * Post #X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrainingJobsForHyperParameterTuningJobResponse} Success
		 */
		ListTrainingJobsForHyperParameterTuningJob(MaxResults: string, NextToken: string, requestBody: ListTrainingJobsForHyperParameterTuningJobRequest): Observable<ListTrainingJobsForHyperParameterTuningJobResponse> {
			return this.http.post<ListTrainingJobsForHyperParameterTuningJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists transform jobs.
		 * Post #X-Amz-Target=SageMaker.ListTransformJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTransformJobsResponse} Success
		 */
		ListTransformJobs(MaxResults: string, NextToken: string, requestBody: ListTransformJobsRequest): Observable<ListTransformJobsResponse> {
			return this.http.post<ListTransformJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTransformJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:</p> <ul> <li> <p> <code>ExperimentName</code> </p> </li> <li> <p> <code>SourceArn</code> </p> </li> <li> <p> <code>TrialName</code> </p> </li> </ul>
		 * Post #X-Amz-Target=SageMaker.ListTrialComponents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrialComponentsResponse} Success
		 */
		ListTrialComponents(MaxResults: string, NextToken: string, requestBody: ListTrialComponentsRequest): Observable<ListTrialComponentsResponse> {
			return this.http.post<ListTrialComponentsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTrialComponents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.
		 * Post #X-Amz-Target=SageMaker.ListTrials
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrialsResponse} Success
		 */
		ListTrials(MaxResults: string, NextToken: string, requestBody: ListTrialsRequest): Observable<ListTrialsResponse> {
			return this.http.post<ListTrialsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTrials?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists user profiles.
		 * Post #X-Amz-Target=SageMaker.ListUserProfiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserProfilesResponse} Success
		 */
		ListUserProfiles(MaxResults: string, NextToken: string, requestBody: ListUserProfilesRequest): Observable<ListUserProfilesResponse> {
			return this.http.post<ListUserProfilesResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListUserProfiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
		 * Post #X-Amz-Target=SageMaker.ListWorkteams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkteamsResponse} Success
		 */
		ListWorkteams(MaxResults: string, NextToken: string, requestBody: ListWorkteamsRequest): Observable<ListWorkteamsResponse> {
			return this.http.post<ListWorkteamsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListWorkteams?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Renders the UI template so that you can preview the worker's experience.
		 * Post #X-Amz-Target=SageMaker.RenderUiTemplate
		 * @return {RenderUiTemplateResponse} Success
		 */
		RenderUiTemplate(requestBody: RenderUiTemplateRequest): Observable<RenderUiTemplateResponse> {
			return this.http.post<RenderUiTemplateResponse>(this.baseUri + '#X-Amz-Target=SageMaker.RenderUiTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Finds Amazon SageMaker resources that match a search query. Matching resources are returned as a list of <code>SearchRecord</code> objects in the response. You can sort the search results by any resource property in a ascending or descending order.</p> <p>You can query against the following value types: numeric, text, Boolean, and timestamp.</p>
		 * Post #X-Amz-Target=SageMaker.Search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchResponse} Success
		 */
		Search(MaxResults: string, NextToken: string, requestBody: SearchRequest): Observable<SearchResponse> {
			return this.http.post<SearchResponse>(this.baseUri + '#X-Amz-Target=SageMaker.Search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a previously stopped monitoring schedule.</p> <note> <p>New monitoring schedules are immediately started after creation.</p> </note>
		 * Post #X-Amz-Target=SageMaker.StartMonitoringSchedule
		 * @return {void} Success
		 */
		StartMonitoringSchedule(requestBody: StartMonitoringScheduleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StartMonitoringSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to <code>InService</code>. A notebook instance's status must be <code>InService</code> before you can connect to your Jupyter notebook.
		 * Post #X-Amz-Target=SageMaker.StartNotebookInstance
		 * @return {void} Success
		 */
		StartNotebookInstance(requestBody: StartNotebookInstanceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StartNotebookInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * A method for forcing the termination of a running job.
		 * Post #X-Amz-Target=SageMaker.StopAutoMLJob
		 * @return {void} Success
		 */
		StopAutoMLJob(requestBody: StopAutoMLJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopAutoMLJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops a model compilation job.</p> <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal.</p> <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <a>CompilationJobSummary$CompilationJobStatus</a> of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <a>CompilationJobSummary$CompilationJobStatus</a> to <code>Stopped</code>. </p>
		 * Post #X-Amz-Target=SageMaker.StopCompilationJob
		 * @return {void} Success
		 */
		StopCompilationJob(requestBody: StopCompilationJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopCompilationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched.</p> <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the <code>Stopped</code> state, it releases all reserved resources for the tuning job.</p>
		 * Post #X-Amz-Target=SageMaker.StopHyperParameterTuningJob
		 * @return {void} Success
		 */
		StopHyperParameterTuningJob(requestBody: StopHyperParameterTuningJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopHyperParameterTuningJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.
		 * Post #X-Amz-Target=SageMaker.StopLabelingJob
		 * @return {void} Success
		 */
		StopLabelingJob(requestBody: StopLabelingJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopLabelingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a previously started monitoring schedule.
		 * Post #X-Amz-Target=SageMaker.StopMonitoringSchedule
		 * @return {void} Success
		 */
		StopMonitoringSchedule(requestBody: StopMonitoringScheduleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopMonitoringSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker stops charging you for the ML compute instance when you call <code>StopNotebookInstance</code>.</p> <p>To access data on the ML storage volume for a notebook instance that has been terminated, call the <code>StartNotebookInstance</code> API. <code>StartNotebookInstance</code> launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. </p>
		 * Post #X-Amz-Target=SageMaker.StopNotebookInstance
		 * @return {void} Success
		 */
		StopNotebookInstance(requestBody: StopNotebookInstanceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopNotebookInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a processing job.
		 * Post #X-Amz-Target=SageMaker.StopProcessingJob
		 * @return {void} Success
		 */
		StopProcessingJob(requestBody: StopProcessingJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopProcessingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. </p> <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to <code>Stopped</code>.</p>
		 * Post #X-Amz-Target=SageMaker.StopTrainingJob
		 * @return {void} Success
		 */
		StopTrainingJob(requestBody: StopTrainingJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopTrainingJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops a transform job.</p> <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job changes to <code>Stopping</code>. After Amazon SageMaker stops the job, the status is set to <code>Stopped</code>. When you stop a transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
		 * Post #X-Amz-Target=SageMaker.StopTransformJob
		 * @return {void} Success
		 */
		StopTransformJob(requestBody: StopTransformJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SageMaker.StopTransformJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified Git repository with the specified values.
		 * Post #X-Amz-Target=SageMaker.UpdateCodeRepository
		 * @return {UpdateCodeRepositoryOutput} Success
		 */
		UpdateCodeRepository(requestBody: UpdateCodeRepositoryInput): Observable<UpdateCodeRepositoryOutput> {
			return this.http.post<UpdateCodeRepositoryOutput>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateCodeRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the default settings for new user profiles in the domain.
		 * Post #X-Amz-Target=SageMaker.UpdateDomain
		 * @return {UpdateDomainResponse} Success
		 */
		UpdateDomain(requestBody: UpdateDomainRequest): Observable<UpdateDomainResponse> {
			return this.http.post<UpdateDomainResponse>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous <code>EndpointConfig</code> (there is no availability loss). </p> <p>When Amazon SageMaker receives the request, it sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API. </p> <note> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p> </note>
		 * Post #X-Amz-Target=SageMaker.UpdateEndpoint
		 * @return {UpdateEndpointOutput} Success
		 */
		UpdateEndpoint(requestBody: UpdateEndpointInput): Observable<UpdateEndpointOutput> {
			return this.http.post<UpdateEndpointOutput>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API.
		 * Post #X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities
		 * @return {UpdateEndpointWeightsAndCapacitiesOutput} Success
		 */
		UpdateEndpointWeightsAndCapacities(requestBody: UpdateEndpointWeightsAndCapacitiesInput): Observable<UpdateEndpointWeightsAndCapacitiesOutput> {
			return this.http.post<UpdateEndpointWeightsAndCapacitiesOutput>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateEndpointWeightsAndCapacities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.
		 * Post #X-Amz-Target=SageMaker.UpdateExperiment
		 * @return {UpdateExperimentResponse} Success
		 */
		UpdateExperiment(requestBody: UpdateExperimentRequest): Observable<UpdateExperimentResponse> {
			return this.http.post<UpdateExperimentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateExperiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a previously created schedule.
		 * Post #X-Amz-Target=SageMaker.UpdateMonitoringSchedule
		 * @return {UpdateMonitoringScheduleResponse} Success
		 */
		UpdateMonitoringSchedule(requestBody: UpdateMonitoringScheduleRequest): Observable<UpdateMonitoringScheduleResponse> {
			return this.http.post<UpdateMonitoringScheduleResponse>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateMonitoringSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.
		 * Post #X-Amz-Target=SageMaker.UpdateNotebookInstance
		 * @return {UpdateNotebookInstanceOutput} Success
		 */
		UpdateNotebookInstance(requestBody: UpdateNotebookInstanceInput): Observable<UpdateNotebookInstanceOutput> {
			return this.http.post<UpdateNotebookInstanceOutput>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateNotebookInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.
		 * Post #X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig
		 * @return {UpdateNotebookInstanceLifecycleConfigOutput} Success
		 */
		UpdateNotebookInstanceLifecycleConfig(requestBody: UpdateNotebookInstanceLifecycleConfigInput): Observable<UpdateNotebookInstanceLifecycleConfigOutput> {
			return this.http.post<UpdateNotebookInstanceLifecycleConfigOutput>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateNotebookInstanceLifecycleConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the display name of a trial.
		 * Post #X-Amz-Target=SageMaker.UpdateTrial
		 * @return {UpdateTrialResponse} Success
		 */
		UpdateTrial(requestBody: UpdateTrialRequest): Observable<UpdateTrialResponse> {
			return this.http.post<UpdateTrialResponse>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateTrial', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates one or more properties of a trial component.
		 * Post #X-Amz-Target=SageMaker.UpdateTrialComponent
		 * @return {UpdateTrialComponentResponse} Success
		 */
		UpdateTrialComponent(requestBody: UpdateTrialComponentRequest): Observable<UpdateTrialComponentResponse> {
			return this.http.post<UpdateTrialComponentResponse>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateTrialComponent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a user profile.
		 * Post #X-Amz-Target=SageMaker.UpdateUserProfile
		 * @return {UpdateUserProfileResponse} Success
		 */
		UpdateUserProfile(requestBody: UpdateUserProfileRequest): Observable<UpdateUserProfileResponse> {
			return this.http.post<UpdateUserProfileResponse>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restricts access to tasks assigned to workers in the specified workforce to those within specific ranges of IP addresses. You specify allowed IP addresses by creating a list of up to four <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>.</p> <p>By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied access and get a <code>Not Found</code> error message on the worker portal. After restricting access with this operation, you can see the allowed IP values for a private workforce with the operation.</p> <important> <p>This operation applies only to private workforces.</p> </important>
		 * Post #X-Amz-Target=SageMaker.UpdateWorkforce
		 * @return {UpdateWorkforceResponse} Success
		 */
		UpdateWorkforce(requestBody: UpdateWorkforceRequest): Observable<UpdateWorkforceResponse> {
			return this.http.post<UpdateWorkforceResponse>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateWorkforce', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing work team with new member definitions or description.
		 * Post #X-Amz-Target=SageMaker.UpdateWorkteam
		 * @return {UpdateWorkteamResponse} Success
		 */
		UpdateWorkteam(requestBody: UpdateWorkteamRequest): Observable<UpdateWorkteamResponse> {
			return this.http.post<UpdateWorkteamResponse>(this.baseUri + '#X-Amz-Target=SageMaker.UpdateWorkteam', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsX_Amz_Target { SageMaker_AddTags = 0 }

	export enum AssociateTrialComponentX_Amz_Target { SageMaker_AssociateTrialComponent = 0 }

	export enum CreateAlgorithmX_Amz_Target { SageMaker_CreateAlgorithm = 0 }

	export enum CreateAppX_Amz_Target { SageMaker_CreateApp = 0 }

	export enum CreateAutoMLJobX_Amz_Target { SageMaker_CreateAutoMLJob = 0 }

	export enum CreateCodeRepositoryX_Amz_Target { SageMaker_CreateCodeRepository = 0 }

	export enum CreateCompilationJobX_Amz_Target { SageMaker_CreateCompilationJob = 0 }

	export enum CreateDomainX_Amz_Target { SageMaker_CreateDomain = 0 }

	export enum CreateEndpointX_Amz_Target { SageMaker_CreateEndpoint = 0 }

	export enum CreateEndpointConfigX_Amz_Target { SageMaker_CreateEndpointConfig = 0 }

	export enum CreateExperimentX_Amz_Target { SageMaker_CreateExperiment = 0 }

	export enum CreateFlowDefinitionX_Amz_Target { SageMaker_CreateFlowDefinition = 0 }

	export enum CreateHumanTaskUiX_Amz_Target { SageMaker_CreateHumanTaskUi = 0 }

	export enum CreateHyperParameterTuningJobX_Amz_Target { SageMaker_CreateHyperParameterTuningJob = 0 }

	export enum CreateLabelingJobX_Amz_Target { SageMaker_CreateLabelingJob = 0 }

	export enum CreateModelX_Amz_Target { SageMaker_CreateModel = 0 }

	export enum CreateModelPackageX_Amz_Target { SageMaker_CreateModelPackage = 0 }

	export enum CreateMonitoringScheduleX_Amz_Target { SageMaker_CreateMonitoringSchedule = 0 }

	export enum CreateNotebookInstanceX_Amz_Target { SageMaker_CreateNotebookInstance = 0 }

	export enum CreateNotebookInstanceLifecycleConfigX_Amz_Target { SageMaker_CreateNotebookInstanceLifecycleConfig = 0 }

	export enum CreatePresignedDomainUrlX_Amz_Target { SageMaker_CreatePresignedDomainUrl = 0 }

	export enum CreatePresignedNotebookInstanceUrlX_Amz_Target { SageMaker_CreatePresignedNotebookInstanceUrl = 0 }

	export enum CreateProcessingJobX_Amz_Target { SageMaker_CreateProcessingJob = 0 }

	export enum CreateTrainingJobX_Amz_Target { SageMaker_CreateTrainingJob = 0 }

	export enum CreateTransformJobX_Amz_Target { SageMaker_CreateTransformJob = 0 }

	export enum CreateTrialX_Amz_Target { SageMaker_CreateTrial = 0 }

	export enum CreateTrialComponentX_Amz_Target { SageMaker_CreateTrialComponent = 0 }

	export enum CreateUserProfileX_Amz_Target { SageMaker_CreateUserProfile = 0 }

	export enum CreateWorkteamX_Amz_Target { SageMaker_CreateWorkteam = 0 }

	export enum DeleteAlgorithmX_Amz_Target { SageMaker_DeleteAlgorithm = 0 }

	export enum DeleteAppX_Amz_Target { SageMaker_DeleteApp = 0 }

	export enum DeleteCodeRepositoryX_Amz_Target { SageMaker_DeleteCodeRepository = 0 }

	export enum DeleteDomainX_Amz_Target { SageMaker_DeleteDomain = 0 }

	export enum DeleteEndpointX_Amz_Target { SageMaker_DeleteEndpoint = 0 }

	export enum DeleteEndpointConfigX_Amz_Target { SageMaker_DeleteEndpointConfig = 0 }

	export enum DeleteExperimentX_Amz_Target { SageMaker_DeleteExperiment = 0 }

	export enum DeleteFlowDefinitionX_Amz_Target { SageMaker_DeleteFlowDefinition = 0 }

	export enum DeleteModelX_Amz_Target { SageMaker_DeleteModel = 0 }

	export enum DeleteModelPackageX_Amz_Target { SageMaker_DeleteModelPackage = 0 }

	export enum DeleteMonitoringScheduleX_Amz_Target { SageMaker_DeleteMonitoringSchedule = 0 }

	export enum DeleteNotebookInstanceX_Amz_Target { SageMaker_DeleteNotebookInstance = 0 }

	export enum DeleteNotebookInstanceLifecycleConfigX_Amz_Target { SageMaker_DeleteNotebookInstanceLifecycleConfig = 0 }

	export enum DeleteTagsX_Amz_Target { SageMaker_DeleteTags = 0 }

	export enum DeleteTrialX_Amz_Target { SageMaker_DeleteTrial = 0 }

	export enum DeleteTrialComponentX_Amz_Target { SageMaker_DeleteTrialComponent = 0 }

	export enum DeleteUserProfileX_Amz_Target { SageMaker_DeleteUserProfile = 0 }

	export enum DeleteWorkteamX_Amz_Target { SageMaker_DeleteWorkteam = 0 }

	export enum DescribeAlgorithmX_Amz_Target { SageMaker_DescribeAlgorithm = 0 }

	export enum DescribeAppX_Amz_Target { SageMaker_DescribeApp = 0 }

	export enum DescribeAutoMLJobX_Amz_Target { SageMaker_DescribeAutoMLJob = 0 }

	export enum DescribeCodeRepositoryX_Amz_Target { SageMaker_DescribeCodeRepository = 0 }

	export enum DescribeCompilationJobX_Amz_Target { SageMaker_DescribeCompilationJob = 0 }

	export enum DescribeDomainX_Amz_Target { SageMaker_DescribeDomain = 0 }

	export enum DescribeEndpointX_Amz_Target { SageMaker_DescribeEndpoint = 0 }

	export enum DescribeEndpointConfigX_Amz_Target { SageMaker_DescribeEndpointConfig = 0 }

	export enum DescribeExperimentX_Amz_Target { SageMaker_DescribeExperiment = 0 }

	export enum DescribeFlowDefinitionX_Amz_Target { SageMaker_DescribeFlowDefinition = 0 }

	export enum DescribeHumanTaskUiX_Amz_Target { SageMaker_DescribeHumanTaskUi = 0 }

	export enum DescribeHyperParameterTuningJobX_Amz_Target { SageMaker_DescribeHyperParameterTuningJob = 0 }

	export enum DescribeLabelingJobX_Amz_Target { SageMaker_DescribeLabelingJob = 0 }

	export enum DescribeModelX_Amz_Target { SageMaker_DescribeModel = 0 }

	export enum DescribeModelPackageX_Amz_Target { SageMaker_DescribeModelPackage = 0 }

	export enum DescribeMonitoringScheduleX_Amz_Target { SageMaker_DescribeMonitoringSchedule = 0 }

	export enum DescribeNotebookInstanceX_Amz_Target { SageMaker_DescribeNotebookInstance = 0 }

	export enum DescribeNotebookInstanceLifecycleConfigX_Amz_Target { SageMaker_DescribeNotebookInstanceLifecycleConfig = 0 }

	export enum DescribeProcessingJobX_Amz_Target { SageMaker_DescribeProcessingJob = 0 }

	export enum DescribeSubscribedWorkteamX_Amz_Target { SageMaker_DescribeSubscribedWorkteam = 0 }

	export enum DescribeTrainingJobX_Amz_Target { SageMaker_DescribeTrainingJob = 0 }

	export enum DescribeTransformJobX_Amz_Target { SageMaker_DescribeTransformJob = 0 }

	export enum DescribeTrialX_Amz_Target { SageMaker_DescribeTrial = 0 }

	export enum DescribeTrialComponentX_Amz_Target { SageMaker_DescribeTrialComponent = 0 }

	export enum DescribeUserProfileX_Amz_Target { SageMaker_DescribeUserProfile = 0 }

	export enum DescribeWorkforceX_Amz_Target { SageMaker_DescribeWorkforce = 0 }

	export enum DescribeWorkteamX_Amz_Target { SageMaker_DescribeWorkteam = 0 }

	export enum DisassociateTrialComponentX_Amz_Target { SageMaker_DisassociateTrialComponent = 0 }

	export enum GetSearchSuggestionsX_Amz_Target { SageMaker_GetSearchSuggestions = 0 }

	export enum ListAlgorithmsX_Amz_Target { SageMaker_ListAlgorithms = 0 }

	export enum ListAppsX_Amz_Target { SageMaker_ListApps = 0 }

	export enum ListAutoMLJobsX_Amz_Target { SageMaker_ListAutoMLJobs = 0 }

	export enum ListCandidatesForAutoMLJobX_Amz_Target { SageMaker_ListCandidatesForAutoMLJob = 0 }

	export enum ListCodeRepositoriesX_Amz_Target { SageMaker_ListCodeRepositories = 0 }

	export enum ListCompilationJobsX_Amz_Target { SageMaker_ListCompilationJobs = 0 }

	export enum ListDomainsX_Amz_Target { SageMaker_ListDomains = 0 }

	export enum ListEndpointConfigsX_Amz_Target { SageMaker_ListEndpointConfigs = 0 }

	export enum ListEndpointsX_Amz_Target { SageMaker_ListEndpoints = 0 }

	export enum ListExperimentsX_Amz_Target { SageMaker_ListExperiments = 0 }

	export enum ListFlowDefinitionsX_Amz_Target { SageMaker_ListFlowDefinitions = 0 }

	export enum ListHumanTaskUisX_Amz_Target { SageMaker_ListHumanTaskUis = 0 }

	export enum ListHyperParameterTuningJobsX_Amz_Target { SageMaker_ListHyperParameterTuningJobs = 0 }

	export enum ListLabelingJobsX_Amz_Target { SageMaker_ListLabelingJobs = 0 }

	export enum ListLabelingJobsForWorkteamX_Amz_Target { SageMaker_ListLabelingJobsForWorkteam = 0 }

	export enum ListModelPackagesX_Amz_Target { SageMaker_ListModelPackages = 0 }

	export enum ListModelsX_Amz_Target { SageMaker_ListModels = 0 }

	export enum ListMonitoringExecutionsX_Amz_Target { SageMaker_ListMonitoringExecutions = 0 }

	export enum ListMonitoringSchedulesX_Amz_Target { SageMaker_ListMonitoringSchedules = 0 }

	export enum ListNotebookInstanceLifecycleConfigsX_Amz_Target { SageMaker_ListNotebookInstanceLifecycleConfigs = 0 }

	export enum ListNotebookInstancesX_Amz_Target { SageMaker_ListNotebookInstances = 0 }

	export enum ListProcessingJobsX_Amz_Target { SageMaker_ListProcessingJobs = 0 }

	export enum ListSubscribedWorkteamsX_Amz_Target { SageMaker_ListSubscribedWorkteams = 0 }

	export enum ListTagsX_Amz_Target { SageMaker_ListTags = 0 }

	export enum ListTrainingJobsX_Amz_Target { SageMaker_ListTrainingJobs = 0 }

	export enum ListTrainingJobsForHyperParameterTuningJobX_Amz_Target { SageMaker_ListTrainingJobsForHyperParameterTuningJob = 0 }

	export enum ListTransformJobsX_Amz_Target { SageMaker_ListTransformJobs = 0 }

	export enum ListTrialComponentsX_Amz_Target { SageMaker_ListTrialComponents = 0 }

	export enum ListTrialsX_Amz_Target { SageMaker_ListTrials = 0 }

	export enum ListUserProfilesX_Amz_Target { SageMaker_ListUserProfiles = 0 }

	export enum ListWorkteamsX_Amz_Target { SageMaker_ListWorkteams = 0 }

	export enum RenderUiTemplateX_Amz_Target { SageMaker_RenderUiTemplate = 0 }

	export enum SearchX_Amz_Target { SageMaker_Search = 0 }

	export enum StartMonitoringScheduleX_Amz_Target { SageMaker_StartMonitoringSchedule = 0 }

	export enum StartNotebookInstanceX_Amz_Target { SageMaker_StartNotebookInstance = 0 }

	export enum StopAutoMLJobX_Amz_Target { SageMaker_StopAutoMLJob = 0 }

	export enum StopCompilationJobX_Amz_Target { SageMaker_StopCompilationJob = 0 }

	export enum StopHyperParameterTuningJobX_Amz_Target { SageMaker_StopHyperParameterTuningJob = 0 }

	export enum StopLabelingJobX_Amz_Target { SageMaker_StopLabelingJob = 0 }

	export enum StopMonitoringScheduleX_Amz_Target { SageMaker_StopMonitoringSchedule = 0 }

	export enum StopNotebookInstanceX_Amz_Target { SageMaker_StopNotebookInstance = 0 }

	export enum StopProcessingJobX_Amz_Target { SageMaker_StopProcessingJob = 0 }

	export enum StopTrainingJobX_Amz_Target { SageMaker_StopTrainingJob = 0 }

	export enum StopTransformJobX_Amz_Target { SageMaker_StopTransformJob = 0 }

	export enum UpdateCodeRepositoryX_Amz_Target { SageMaker_UpdateCodeRepository = 0 }

	export enum UpdateDomainX_Amz_Target { SageMaker_UpdateDomain = 0 }

	export enum UpdateEndpointX_Amz_Target { SageMaker_UpdateEndpoint = 0 }

	export enum UpdateEndpointWeightsAndCapacitiesX_Amz_Target { SageMaker_UpdateEndpointWeightsAndCapacities = 0 }

	export enum UpdateExperimentX_Amz_Target { SageMaker_UpdateExperiment = 0 }

	export enum UpdateMonitoringScheduleX_Amz_Target { SageMaker_UpdateMonitoringSchedule = 0 }

	export enum UpdateNotebookInstanceX_Amz_Target { SageMaker_UpdateNotebookInstance = 0 }

	export enum UpdateNotebookInstanceLifecycleConfigX_Amz_Target { SageMaker_UpdateNotebookInstanceLifecycleConfig = 0 }

	export enum UpdateTrialX_Amz_Target { SageMaker_UpdateTrial = 0 }

	export enum UpdateTrialComponentX_Amz_Target { SageMaker_UpdateTrialComponent = 0 }

	export enum UpdateUserProfileX_Amz_Target { SageMaker_UpdateUserProfile = 0 }

	export enum UpdateWorkforceX_Amz_Target { SageMaker_UpdateWorkforce = 0 }

	export enum UpdateWorkteamX_Amz_Target { SageMaker_UpdateWorkteam = 0 }

}

