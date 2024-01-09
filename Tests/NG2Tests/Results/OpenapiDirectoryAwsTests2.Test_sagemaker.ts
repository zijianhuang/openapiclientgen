import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddTagsOutput {

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface AddTagsOutputFormProperties {
	}
	export function CreateAddTagsOutputFormGroup() {
		return new FormGroup<AddTagsOutputFormProperties>({
		});

	}


	/** Describes a tag.  */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** Describes a tag.  */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface AddTagsInput {

		/**
		 * Required
		 * Max length: 256
		 */
		ResourceArn: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface AddTagsInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsInputFormGroup() {
		return new FormGroup<AddTagsInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:.*')]),
		});

	}

	export interface AssociateTrialComponentResponse {

		/** Max length: 256 */
		TrialComponentArn?: string | null;

		/** Max length: 256 */
		TrialArn?: string | null;
	}
	export interface AssociateTrialComponentResponseFormProperties {

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrialArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTrialComponentResponseFormGroup() {
		return new FormGroup<AssociateTrialComponentResponseFormProperties>({
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
			TrialArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial/.*')]),
		});

	}

	export interface AssociateTrialComponentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: string;

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: string;
	}
	export interface AssociateTrialComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTrialComponentRequestFormGroup() {
		return new FormGroup<AssociateTrialComponentRequestFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface ResourceNotFound {
	}
	export interface ResourceNotFoundFormProperties {
	}
	export function CreateResourceNotFoundFormGroup() {
		return new FormGroup<ResourceNotFoundFormProperties>({
		});

	}

	export interface ResourceLimitExceeded {
	}
	export interface ResourceLimitExceededFormProperties {
	}
	export function CreateResourceLimitExceededFormGroup() {
		return new FormGroup<ResourceLimitExceededFormProperties>({
		});

	}

	export interface CreateAlgorithmOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		AlgorithmArn: string;
	}
	export interface CreateAlgorithmOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		AlgorithmArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAlgorithmOutputFormGroup() {
		return new FormGroup<CreateAlgorithmOutputFormProperties>({
			AlgorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:algorithm/.*')]),
		});

	}

	export interface CreateAlgorithmInput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlgorithmName: string;

		/** Max length: 1024 */
		AlgorithmDescription?: string | null;

		/**
		 * Defines how the algorithm is used for a training job.
		 * Required
		 */
		TrainingSpecification: TrainingSpecification;

		/** Defines how to perform inference generation after a training job is run. */
		InferenceSpecification?: InferenceSpecification;

		/** Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm. */
		ValidationSpecification?: AlgorithmValidationSpecification;
		CertifyForMarketplace?: boolean | null;
	}
	export interface CreateAlgorithmInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlgorithmName: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		AlgorithmDescription: FormControl<string | null | undefined>,
		CertifyForMarketplace: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAlgorithmInputFormGroup() {
		return new FormGroup<CreateAlgorithmInputFormProperties>({
			AlgorithmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			AlgorithmDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			CertifyForMarketplace: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines how the algorithm is used for a training job. */
	export interface TrainingSpecification {

		/**
		 * Required
		 * Max length: 255
		 */
		TrainingImage: string;

		/** Max length: 72 */
		TrainingImageDigest?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		SupportedHyperParameters?: Array<HyperParameterSpecification>;

		/** Required */
		SupportedTrainingInstanceTypes: Array<TrainingInstanceType>;
		SupportsDistributedTraining?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 40
		 */
		MetricDefinitions?: Array<MetricDefinition>;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		TrainingChannels: Array<ChannelSpecification>;
		SupportedTuningJobObjectiveMetrics?: Array<HyperParameterTuningJobObjective>;
	}

	/** Defines how the algorithm is used for a training job. */
	export interface TrainingSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		TrainingImage: FormControl<string | null | undefined>,

		/** Max length: 72 */
		TrainingImageDigest: FormControl<string | null | undefined>,
		SupportsDistributedTraining: FormControl<boolean | null | undefined>,
	}
	export function CreateTrainingSpecificationFormGroup() {
		return new FormGroup<TrainingSpecificationFormProperties>({
			TrainingImage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.pattern('[\S]+')]),
			TrainingImageDigest: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(72), Validators.pattern('^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$')]),
			SupportsDistributedTraining: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines a hyperparameter to be used by an algorithm. */
	export interface HyperParameterSpecification {

		/**
		 * Required
		 * Max length: 256
		 */
		Name: string;

		/** Max length: 1024 */
		Description?: string | null;

		/** Required */
		Type: HyperParameterSpecificationType;

		/** Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm. */
		Range?: ParameterRange;
		IsTunable?: boolean | null;
		IsRequired?: boolean | null;

		/** Max length: 256 */
		DefaultValue?: string | null;
	}

	/** Defines a hyperparameter to be used by an algorithm. */
	export interface HyperParameterSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<HyperParameterSpecificationType | null | undefined>,
		IsTunable: FormControl<boolean | null | undefined>,
		IsRequired: FormControl<boolean | null | undefined>,

		/** Max length: 256 */
		DefaultValue: FormControl<string | null | undefined>,
	}
	export function CreateHyperParameterSpecificationFormGroup() {
		return new FormGroup<HyperParameterSpecificationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			Type: new FormControl<HyperParameterSpecificationType | null | undefined>(undefined, [Validators.required]),
			IsTunable: new FormControl<boolean | null | undefined>(undefined),
			IsRequired: new FormControl<boolean | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*')]),
		});

	}

	export enum HyperParameterSpecificationType { Integer = 0, Continuous = 1, Categorical = 2, FreeText = 3 }


	/** Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm. */
	export interface ParameterRange {

		/** Defines the possible values for an integer hyperparameter. */
		IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification;

		/** Defines the possible values for a continuous hyperparameter. */
		ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;

		/** Defines the possible values for a categorical hyperparameter. */
		CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;
	}

	/** Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm. */
	export interface ParameterRangeFormProperties {
	}
	export function CreateParameterRangeFormGroup() {
		return new FormGroup<ParameterRangeFormProperties>({
		});

	}


	/** Defines the possible values for an integer hyperparameter. */
	export interface IntegerParameterRangeSpecification {

		/**
		 * Required
		 * Max length: 256
		 */
		MinValue: string;

		/**
		 * Required
		 * Max length: 256
		 */
		MaxValue: string;
	}

	/** Defines the possible values for an integer hyperparameter. */
	export interface IntegerParameterRangeSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		MinValue: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		MaxValue: FormControl<string | null | undefined>,
	}
	export function CreateIntegerParameterRangeSpecificationFormGroup() {
		return new FormGroup<IntegerParameterRangeSpecificationFormProperties>({
			MinValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			MaxValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
		});

	}


	/** Defines the possible values for a continuous hyperparameter. */
	export interface ContinuousParameterRangeSpecification {

		/**
		 * Required
		 * Max length: 256
		 */
		MinValue: string;

		/**
		 * Required
		 * Max length: 256
		 */
		MaxValue: string;
	}

	/** Defines the possible values for a continuous hyperparameter. */
	export interface ContinuousParameterRangeSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		MinValue: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		MaxValue: FormControl<string | null | undefined>,
	}
	export function CreateContinuousParameterRangeSpecificationFormGroup() {
		return new FormGroup<ContinuousParameterRangeSpecificationFormProperties>({
			MinValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			MaxValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
		});

	}


	/** Defines the possible values for a categorical hyperparameter. */
	export interface CategoricalParameterRangeSpecification {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Values: Array<string>;
	}

	/** Defines the possible values for a categorical hyperparameter. */
	export interface CategoricalParameterRangeSpecificationFormProperties {
	}
	export function CreateCategoricalParameterRangeSpecificationFormGroup() {
		return new FormGroup<CategoricalParameterRangeSpecificationFormProperties>({
		});

	}

	export enum TrainingInstanceType { ml_m4_xlarge = 0, ml_m4_2xlarge = 1, ml_m4_4xlarge = 2, ml_m4_10xlarge = 3, ml_m4_16xlarge = 4, ml_g4dn_xlarge = 5, ml_g4dn_2xlarge = 6, ml_g4dn_4xlarge = 7, ml_g4dn_8xlarge = 8, ml_g4dn_12xlarge = 9, ml_g4dn_16xlarge = 10, ml_m5_large = 11, ml_m5_xlarge = 12, ml_m5_2xlarge = 13, ml_m5_4xlarge = 14, ml_m5_12xlarge = 15, ml_m5_24xlarge = 16, ml_c4_xlarge = 17, ml_c4_2xlarge = 18, ml_c4_4xlarge = 19, ml_c4_8xlarge = 20, ml_p2_xlarge = 21, ml_p2_8xlarge = 22, ml_p2_16xlarge = 23, ml_p3_2xlarge = 24, ml_p3_8xlarge = 25, ml_p3_16xlarge = 26, ml_p3dn_24xlarge = 27, ml_c5_xlarge = 28, ml_c5_2xlarge = 29, ml_c5_4xlarge = 30, ml_c5_9xlarge = 31, ml_c5_18xlarge = 32, ml_c5n_xlarge = 33, ml_c5n_2xlarge = 34, ml_c5n_4xlarge = 35, ml_c5n_9xlarge = 36, ml_c5n_18xlarge = 37 }


	/** Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code> . Amazon SageMakerhyperparameter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job. */
	export interface MetricDefinition {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Regex: string;
	}

	/** Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code> . Amazon SageMakerhyperparameter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job. */
	export interface MetricDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Regex: FormControl<string | null | undefined>,
	}
	export function CreateMetricDefinitionFormGroup() {
		return new FormGroup<MetricDefinitionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			Regex: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(500), Validators.minLength(1), Validators.pattern('.+')]),
		});

	}


	/** Defines a named input source, called a channel, to be used by an algorithm. */
	export interface ChannelSpecification {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/** Max length: 1024 */
		Description?: string | null;
		IsRequired?: boolean | null;

		/** Required */
		SupportedContentTypes: Array<string>;
		SupportedCompressionTypes?: Array<CompressionType>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		SupportedInputModes: Array<TrainingInputMode>;
	}

	/** Defines a named input source, called a channel, to be used by an algorithm. */
	export interface ChannelSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Description: FormControl<string | null | undefined>,
		IsRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelSpecificationFormGroup() {
		return new FormGroup<ChannelSpecificationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[A-Za-z0-9\.\-_]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			IsRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CompressionType { None = 0, Gzip = 1 }

	export enum TrainingInputMode { Pipe = 0, File = 1 }


	/** Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter. */
	export interface HyperParameterTuningJobObjective {

		/** Required */
		Type: HyperParameterTuningJobObjectiveType;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: string;
	}

	/** Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter. */
	export interface HyperParameterTuningJobObjectiveFormProperties {

		/** Required */
		Type: FormControl<HyperParameterTuningJobObjectiveType | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateHyperParameterTuningJobObjectiveFormGroup() {
		return new FormGroup<HyperParameterTuningJobObjectiveFormProperties>({
			Type: new FormControl<HyperParameterTuningJobObjectiveType | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
		});

	}

	export enum HyperParameterTuningJobObjectiveType { Maximize = 0, Minimize = 1 }


	/** Defines how to perform inference generation after a training job is run. */
	export interface InferenceSpecification {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Containers: Array<ModelPackageContainerDefinition>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		SupportedTransformInstanceTypes: Array<TransformInstanceType>;

		/** Required */
		SupportedRealtimeInferenceInstanceTypes: Array<ProductionVariantInstanceType>;

		/** Required */
		SupportedContentTypes: Array<string>;

		/** Required */
		SupportedResponseMIMETypes: Array<string>;
	}

	/** Defines how to perform inference generation after a training job is run. */
	export interface InferenceSpecificationFormProperties {
	}
	export function CreateInferenceSpecificationFormGroup() {
		return new FormGroup<InferenceSpecificationFormProperties>({
		});

	}


	/** Describes the Docker container for the model package. */
	export interface ModelPackageContainerDefinition {

		/** Max length: 63 */
		ContainerHostname?: string | null;

		/**
		 * Required
		 * Max length: 255
		 */
		Image: string;

		/** Max length: 72 */
		ImageDigest?: string | null;

		/** Max length: 1024 */
		ModelDataUrl?: string | null;

		/** Max length: 256 */
		ProductId?: string | null;
	}

	/** Describes the Docker container for the model package. */
	export interface ModelPackageContainerDefinitionFormProperties {

		/** Max length: 63 */
		ContainerHostname: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 */
		Image: FormControl<string | null | undefined>,

		/** Max length: 72 */
		ImageDigest: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		ModelDataUrl: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ProductId: FormControl<string | null | undefined>,
	}
	export function CreateModelPackageContainerDefinitionFormGroup() {
		return new FormGroup<ModelPackageContainerDefinitionFormProperties>({
			ContainerHostname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Image: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.pattern('[\S]+')]),
			ImageDigest: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(72), Validators.pattern('^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$')]),
			ModelDataUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export enum TransformInstanceType { ml_m4_xlarge = 0, ml_m4_2xlarge = 1, ml_m4_4xlarge = 2, ml_m4_10xlarge = 3, ml_m4_16xlarge = 4, ml_c4_xlarge = 5, ml_c4_2xlarge = 6, ml_c4_4xlarge = 7, ml_c4_8xlarge = 8, ml_p2_xlarge = 9, ml_p2_8xlarge = 10, ml_p2_16xlarge = 11, ml_p3_2xlarge = 12, ml_p3_8xlarge = 13, ml_p3_16xlarge = 14, ml_c5_xlarge = 15, ml_c5_2xlarge = 16, ml_c5_4xlarge = 17, ml_c5_9xlarge = 18, ml_c5_18xlarge = 19, ml_m5_large = 20, ml_m5_xlarge = 21, ml_m5_2xlarge = 22, ml_m5_4xlarge = 23, ml_m5_12xlarge = 24, ml_m5_24xlarge = 25 }

	export enum ProductionVariantInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_m5_large = 9, ml_m5_xlarge = 10, ml_m5_2xlarge = 11, ml_m5_4xlarge = 12, ml_m5_12xlarge = 13, ml_m5_24xlarge = 14, ml_m5d_large = 15, ml_m5d_xlarge = 16, ml_m5d_2xlarge = 17, ml_m5d_4xlarge = 18, ml_m5d_12xlarge = 19, ml_m5d_24xlarge = 20, ml_c4_large = 21, ml_c4_xlarge = 22, ml_c4_2xlarge = 23, ml_c4_4xlarge = 24, ml_c4_8xlarge = 25, ml_p2_xlarge = 26, ml_p2_8xlarge = 27, ml_p2_16xlarge = 28, ml_p3_2xlarge = 29, ml_p3_8xlarge = 30, ml_p3_16xlarge = 31, ml_c5_large = 32, ml_c5_xlarge = 33, ml_c5_2xlarge = 34, ml_c5_4xlarge = 35, ml_c5_9xlarge = 36, ml_c5_18xlarge = 37, ml_c5d_large = 38, ml_c5d_xlarge = 39, ml_c5d_2xlarge = 40, ml_c5d_4xlarge = 41, ml_c5d_9xlarge = 42, ml_c5d_18xlarge = 43, ml_g4dn_xlarge = 44, ml_g4dn_2xlarge = 45, ml_g4dn_4xlarge = 46, ml_g4dn_8xlarge = 47, ml_g4dn_12xlarge = 48, ml_g4dn_16xlarge = 49, ml_r5_large = 50, ml_r5_xlarge = 51, ml_r5_2xlarge = 52, ml_r5_4xlarge = 53, ml_r5_12xlarge = 54, ml_r5_24xlarge = 55, ml_r5d_large = 56, ml_r5d_xlarge = 57, ml_r5d_2xlarge = 58, ml_r5d_4xlarge = 59, ml_r5d_12xlarge = 60, ml_r5d_24xlarge = 61, ml_inf1_xlarge = 62, ml_inf1_2xlarge = 63, ml_inf1_6xlarge = 64, ml_inf1_24xlarge = 65 }


	/** Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm. */
	export interface AlgorithmValidationSpecification {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ValidationRole: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		ValidationProfiles: Array<AlgorithmValidationProfile>;
	}

	/** Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm. */
	export interface AlgorithmValidationSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ValidationRole: FormControl<string | null | undefined>,
	}
	export function CreateAlgorithmValidationSpecificationFormGroup() {
		return new FormGroup<AlgorithmValidationSpecificationFormProperties>({
			ValidationRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}


	/** <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p> */
	export interface AlgorithmValidationProfile {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProfileName: string;

		/**
		 * Defines the input needed to run a training job using the algorithm.
		 * Required
		 */
		TrainingJobDefinition: TrainingJobDefinition;

		/** Defines the input needed to run a transform job using the inference specification specified in the algorithm. */
		TransformJobDefinition?: TransformJobDefinition;
	}

	/** <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p> */
	export interface AlgorithmValidationProfileFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProfileName: FormControl<string | null | undefined>,
	}
	export function CreateAlgorithmValidationProfileFormGroup() {
		return new FormGroup<AlgorithmValidationProfileFormProperties>({
			ProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}


	/** Defines the input needed to run a training job using the algorithm. */
	export interface TrainingJobDefinition {

		/** Required */
		TrainingInputMode: TrainingInputMode;
		HyperParameters?: HyperParameters;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
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

	/** Defines the input needed to run a training job using the algorithm. */
	export interface TrainingJobDefinitionFormProperties {

		/** Required */
		TrainingInputMode: FormControl<TrainingInputMode | null | undefined>,
	}
	export function CreateTrainingJobDefinitionFormGroup() {
		return new FormGroup<TrainingJobDefinitionFormProperties>({
			TrainingInputMode: new FormControl<TrainingInputMode | null | undefined>(undefined, [Validators.required]),
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


	/** A channel is a named input source that training algorithms can consume.  */
	export interface Channel {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChannelName: string;

		/**
		 * Describes the location of the channel data.
		 * Required
		 */
		DataSource: DataSource;

		/** Max length: 256 */
		ContentType?: string | null;
		CompressionType?: CompressionType | null;
		RecordWrapperType?: ChannelRecordWrapperType | null;
		InputMode?: TrainingInputMode | null;

		/** <p>A configuration for a shuffle option for input data in a channel. If you use <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object references in the <code>ManifestFile</code> is shuffled. If you use <code>AugmentedManifestFile</code>, the order of the JSON lines in the <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined using the <code>Seed</code> value.</p> <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.</p> */
		ShuffleConfig?: ShuffleConfig;
	}

	/** A channel is a named input source that training algorithms can consume.  */
	export interface ChannelFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChannelName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ContentType: FormControl<string | null | undefined>,
		CompressionType: FormControl<CompressionType | null | undefined>,
		RecordWrapperType: FormControl<ChannelRecordWrapperType | null | undefined>,
		InputMode: FormControl<TrainingInputMode | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			ChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[A-Za-z0-9\.\-_]+')]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*')]),
			CompressionType: new FormControl<CompressionType | null | undefined>(undefined),
			RecordWrapperType: new FormControl<ChannelRecordWrapperType | null | undefined>(undefined),
			InputMode: new FormControl<TrainingInputMode | null | undefined>(undefined),
		});

	}


	/** Describes the location of the channel data. */
	export interface DataSource {

		/** Describes the S3 data source. */
		S3DataSource?: S3DataSource;

		/** Specifies a file system data source for a channel. */
		FileSystemDataSource?: FileSystemDataSource;
	}

	/** Describes the location of the channel data. */
	export interface DataSourceFormProperties {
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
		});

	}


	/** Describes the S3 data source. */
	export interface S3DataSource {

		/** Required */
		S3DataType: S3DataSourceS3DataType;

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: string;
		S3DataDistributionType?: S3DataSourceS3DataDistributionType | null;

		/** Maximum items: 16 */
		AttributeNames?: Array<string>;
	}

	/** Describes the S3 data source. */
	export interface S3DataSourceFormProperties {

		/** Required */
		S3DataType: FormControl<S3DataSourceS3DataType | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: FormControl<string | null | undefined>,
		S3DataDistributionType: FormControl<S3DataSourceS3DataDistributionType | null | undefined>,
	}
	export function CreateS3DataSourceFormGroup() {
		return new FormGroup<S3DataSourceFormProperties>({
			S3DataType: new FormControl<S3DataSourceS3DataType | null | undefined>(undefined, [Validators.required]),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			S3DataDistributionType: new FormControl<S3DataSourceS3DataDistributionType | null | undefined>(undefined),
		});

	}

	export enum S3DataSourceS3DataType { ManifestFile = 0, S3Prefix = 1, AugmentedManifestFile = 2 }

	export enum S3DataSourceS3DataDistributionType { FullyReplicated = 0, ShardedByS3Key = 1 }


	/** Specifies a file system data source for a channel. */
	export interface FileSystemDataSource {

		/**
		 * Required
		 * Min length: 11
		 */
		FileSystemId: string;

		/** Required */
		FileSystemAccessMode: FileSystemDataSourceFileSystemAccessMode;

		/** Required */
		FileSystemType: FileSystemDataSourceFileSystemType;

		/**
		 * Required
		 * Max length: 4096
		 */
		DirectoryPath: string;
	}

	/** Specifies a file system data source for a channel. */
	export interface FileSystemDataSourceFormProperties {

		/**
		 * Required
		 * Min length: 11
		 */
		FileSystemId: FormControl<string | null | undefined>,

		/** Required */
		FileSystemAccessMode: FormControl<FileSystemDataSourceFileSystemAccessMode | null | undefined>,

		/** Required */
		FileSystemType: FormControl<FileSystemDataSourceFileSystemType | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		DirectoryPath: FormControl<string | null | undefined>,
	}
	export function CreateFileSystemDataSourceFormGroup() {
		return new FormGroup<FileSystemDataSourceFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.pattern('.*')]),
			FileSystemAccessMode: new FormControl<FileSystemDataSourceFileSystemAccessMode | null | undefined>(undefined, [Validators.required]),
			FileSystemType: new FormControl<FileSystemDataSourceFileSystemType | null | undefined>(undefined, [Validators.required]),
			DirectoryPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096), Validators.pattern('.*')]),
		});

	}

	export enum FileSystemDataSourceFileSystemAccessMode { rw = 0, ro = 1 }

	export enum FileSystemDataSourceFileSystemType { EFS = 0, FSxLustre = 1 }

	export enum ChannelRecordWrapperType { None = 0, RecordIO = 1 }


	/** <p>A configuration for a shuffle option for input data in a channel. If you use <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object references in the <code>ManifestFile</code> is shuffled. If you use <code>AugmentedManifestFile</code>, the order of the JSON lines in the <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined using the <code>Seed</code> value.</p> <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.</p> */
	export interface ShuffleConfig {

		/** Required */
		Seed: number;
	}

	/** <p>A configuration for a shuffle option for input data in a channel. If you use <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object references in the <code>ManifestFile</code> is shuffled. If you use <code>AugmentedManifestFile</code>, the order of the JSON lines in the <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined using the <code>Seed</code> value.</p> <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.</p> */
	export interface ShuffleConfigFormProperties {

		/** Required */
		Seed: FormControl<number | null | undefined>,
	}
	export function CreateShuffleConfigFormGroup() {
		return new FormGroup<ShuffleConfigFormProperties>({
			Seed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about how to store model training results (model artifacts). */
	export interface OutputDataConfig {

		/** Max length: 2048 */
		KmsKeyId?: string | null;

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: string;
	}

	/** Provides information about how to store model training results (model artifacts). */
	export interface OutputDataConfigFormProperties {

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: FormControl<string | null | undefined>,
	}
	export function CreateOutputDataConfigFormGroup() {
		return new FormGroup<OutputDataConfigFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}


	/** Describes the resources, including ML compute instances and ML storage volumes, to use for model training.  */
	export interface ResourceConfig {

		/** Required */
		InstanceType: ResourceConfigInstanceType;

		/**
		 * Required
		 * Minimum: 1
		 */
		InstanceCount: number;

		/**
		 * Required
		 * Minimum: 1
		 */
		VolumeSizeInGB: number;

		/** Max length: 2048 */
		VolumeKmsKeyId?: string | null;
	}

	/** Describes the resources, including ML compute instances and ML storage volumes, to use for model training.  */
	export interface ResourceConfigFormProperties {

		/** Required */
		InstanceType: FormControl<ResourceConfigInstanceType | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		InstanceCount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		VolumeSizeInGB: FormControl<number | null | undefined>,

		/** Max length: 2048 */
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateResourceConfigFormGroup() {
		return new FormGroup<ResourceConfigFormProperties>({
			InstanceType: new FormControl<ResourceConfigInstanceType | null | undefined>(undefined, [Validators.required]),
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export enum ResourceConfigInstanceType { ml_m4_xlarge = 0, ml_m4_2xlarge = 1, ml_m4_4xlarge = 2, ml_m4_10xlarge = 3, ml_m4_16xlarge = 4, ml_g4dn_xlarge = 5, ml_g4dn_2xlarge = 6, ml_g4dn_4xlarge = 7, ml_g4dn_8xlarge = 8, ml_g4dn_12xlarge = 9, ml_g4dn_16xlarge = 10, ml_m5_large = 11, ml_m5_xlarge = 12, ml_m5_2xlarge = 13, ml_m5_4xlarge = 14, ml_m5_12xlarge = 15, ml_m5_24xlarge = 16, ml_c4_xlarge = 17, ml_c4_2xlarge = 18, ml_c4_4xlarge = 19, ml_c4_8xlarge = 20, ml_p2_xlarge = 21, ml_p2_8xlarge = 22, ml_p2_16xlarge = 23, ml_p3_2xlarge = 24, ml_p3_8xlarge = 25, ml_p3_16xlarge = 26, ml_p3dn_24xlarge = 27, ml_c5_xlarge = 28, ml_c5_2xlarge = 29, ml_c5_4xlarge = 30, ml_c5_9xlarge = 31, ml_c5_18xlarge = 32, ml_c5n_xlarge = 33, ml_c5n_2xlarge = 34, ml_c5n_4xlarge = 35, ml_c5n_9xlarge = 36, ml_c5n_18xlarge = 37 }


	/** <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note> */
	export interface StoppingCondition {

		/** Minimum: 1 */
		MaxRuntimeInSeconds?: number | null;

		/** Minimum: 1 */
		MaxWaitTimeInSeconds?: number | null;
	}

	/** <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note> */
	export interface StoppingConditionFormProperties {

		/** Minimum: 1 */
		MaxRuntimeInSeconds: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxWaitTimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateStoppingConditionFormGroup() {
		return new FormGroup<StoppingConditionFormProperties>({
			MaxRuntimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxWaitTimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Defines the input needed to run a transform job using the inference specification specified in the algorithm. */
	export interface TransformJobDefinition {

		/** Minimum: 0 */
		MaxConcurrentTransforms?: number | null;

		/** Minimum: 0 */
		MaxPayloadInMB?: number | null;
		BatchStrategy?: TransformJobDefinitionBatchStrategy | null;
		Environment?: TransformEnvironmentMap;

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

	/** Defines the input needed to run a transform job using the inference specification specified in the algorithm. */
	export interface TransformJobDefinitionFormProperties {

		/** Minimum: 0 */
		MaxConcurrentTransforms: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		MaxPayloadInMB: FormControl<number | null | undefined>,
		BatchStrategy: FormControl<TransformJobDefinitionBatchStrategy | null | undefined>,
	}
	export function CreateTransformJobDefinitionFormGroup() {
		return new FormGroup<TransformJobDefinitionFormProperties>({
			MaxConcurrentTransforms: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MaxPayloadInMB: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			BatchStrategy: new FormControl<TransformJobDefinitionBatchStrategy | null | undefined>(undefined),
		});

	}

	export enum TransformJobDefinitionBatchStrategy { MultiRecord = 0, SingleRecord = 1 }

	export interface TransformEnvironmentMap {
	}
	export interface TransformEnvironmentMapFormProperties {
	}
	export function CreateTransformEnvironmentMapFormGroup() {
		return new FormGroup<TransformEnvironmentMapFormProperties>({
		});

	}


	/** Describes the input source of a transform job and the way the transform job consumes it. */
	export interface TransformInput {

		/**
		 * Describes the location of the channel data.
		 * Required
		 */
		DataSource: TransformDataSource;

		/** Max length: 256 */
		ContentType?: string | null;
		CompressionType?: CompressionType | null;
		SplitType?: TransformInputSplitType | null;
	}

	/** Describes the input source of a transform job and the way the transform job consumes it. */
	export interface TransformInputFormProperties {

		/** Max length: 256 */
		ContentType: FormControl<string | null | undefined>,
		CompressionType: FormControl<CompressionType | null | undefined>,
		SplitType: FormControl<TransformInputSplitType | null | undefined>,
	}
	export function CreateTransformInputFormGroup() {
		return new FormGroup<TransformInputFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*')]),
			CompressionType: new FormControl<CompressionType | null | undefined>(undefined),
			SplitType: new FormControl<TransformInputSplitType | null | undefined>(undefined),
		});

	}


	/** Describes the location of the channel data. */
	export interface TransformDataSource {

		/**
		 * Describes the S3 data source.
		 * Required
		 */
		S3DataSource: TransformS3DataSource;
	}

	/** Describes the location of the channel data. */
	export interface TransformDataSourceFormProperties {
	}
	export function CreateTransformDataSourceFormGroup() {
		return new FormGroup<TransformDataSourceFormProperties>({
		});

	}


	/** Describes the S3 data source. */
	export interface TransformS3DataSource {

		/** Required */
		S3DataType: S3DataSourceS3DataType;

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: string;
	}

	/** Describes the S3 data source. */
	export interface TransformS3DataSourceFormProperties {

		/** Required */
		S3DataType: FormControl<S3DataSourceS3DataType | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateTransformS3DataSourceFormGroup() {
		return new FormGroup<TransformS3DataSourceFormProperties>({
			S3DataType: new FormControl<S3DataSourceS3DataType | null | undefined>(undefined, [Validators.required]),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}

	export enum TransformInputSplitType { None = 0, Line = 1, RecordIO = 2, TFRecord = 3 }


	/** Describes the results of a transform job. */
	export interface TransformOutput {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: string;

		/** Max length: 256 */
		Accept?: string | null;
		AssembleWith?: TransformOutputAssembleWith | null;

		/** Max length: 2048 */
		KmsKeyId?: string | null;
	}

	/** Describes the results of a transform job. */
	export interface TransformOutputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: FormControl<string | null | undefined>,

		/** Max length: 256 */
		Accept: FormControl<string | null | undefined>,
		AssembleWith: FormControl<TransformOutputAssembleWith | null | undefined>,

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateTransformOutputFormGroup() {
		return new FormGroup<TransformOutputFormProperties>({
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			Accept: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*')]),
			AssembleWith: new FormControl<TransformOutputAssembleWith | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export enum TransformOutputAssembleWith { None = 0, Line = 1 }


	/** Describes the resources, including ML instance types and ML instance count, to use for transform job. */
	export interface TransformResources {

		/** Required */
		InstanceType: TransformResourcesInstanceType;

		/**
		 * Required
		 * Minimum: 1
		 */
		InstanceCount: number;

		/** Max length: 2048 */
		VolumeKmsKeyId?: string | null;
	}

	/** Describes the resources, including ML instance types and ML instance count, to use for transform job. */
	export interface TransformResourcesFormProperties {

		/** Required */
		InstanceType: FormControl<TransformResourcesInstanceType | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		InstanceCount: FormControl<number | null | undefined>,

		/** Max length: 2048 */
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateTransformResourcesFormGroup() {
		return new FormGroup<TransformResourcesFormProperties>({
			InstanceType: new FormControl<TransformResourcesInstanceType | null | undefined>(undefined, [Validators.required]),
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export enum TransformResourcesInstanceType { ml_m4_xlarge = 0, ml_m4_2xlarge = 1, ml_m4_4xlarge = 2, ml_m4_10xlarge = 3, ml_m4_16xlarge = 4, ml_c4_xlarge = 5, ml_c4_2xlarge = 6, ml_c4_4xlarge = 7, ml_c4_8xlarge = 8, ml_p2_xlarge = 9, ml_p2_8xlarge = 10, ml_p2_16xlarge = 11, ml_p3_2xlarge = 12, ml_p3_8xlarge = 13, ml_p3_16xlarge = 14, ml_c5_xlarge = 15, ml_c5_2xlarge = 16, ml_c5_4xlarge = 17, ml_c5_9xlarge = 18, ml_c5_18xlarge = 19, ml_m5_large = 20, ml_m5_xlarge = 21, ml_m5_2xlarge = 22, ml_m5_4xlarge = 23, ml_m5_12xlarge = 24, ml_m5_24xlarge = 25 }

	export interface CreateAppResponse {

		/** Max length: 256 */
		AppArn?: string | null;
	}
	export interface CreateAppResponseFormProperties {

		/** Max length: 256 */
		AppArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppResponseFormGroup() {
		return new FormGroup<CreateAppResponseFormProperties>({
			AppArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:app/.*')]),
		});

	}

	export interface CreateAppRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: string;

		/** Required */
		AppType: CreateAppRequestAppType;

		/**
		 * Required
		 * Max length: 63
		 */
		AppName: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		ResourceSpec?: ResourceSpec;
	}
	export interface CreateAppRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: FormControl<string | null | undefined>,

		/** Required */
		AppType: FormControl<CreateAppRequestAppType | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		AppName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppRequestFormGroup() {
		return new FormGroup<CreateAppRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			AppType: new FormControl<CreateAppRequestAppType | null | undefined>(undefined, [Validators.required]),
			AppName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export enum CreateAppRequestAppType { JupyterServer = 0, KernelGateway = 1, TensorBoard = 2 }


	/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
	export interface ResourceSpec {

		/** Max length: 256 */
		SageMakerImageArn?: string | null;
		InstanceType?: ResourceSpecInstanceType | null;
	}

	/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
	export interface ResourceSpecFormProperties {

		/** Max length: 256 */
		SageMakerImageArn: FormControl<string | null | undefined>,
		InstanceType: FormControl<ResourceSpecInstanceType | null | undefined>,
	}
	export function CreateResourceSpecFormGroup() {
		return new FormGroup<ResourceSpecFormProperties>({
			SageMakerImageArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$')]),
			InstanceType: new FormControl<ResourceSpecInstanceType | null | undefined>(undefined),
		});

	}

	export enum ResourceSpecInstanceType { system = 0, ml_t3_micro = 1, ml_t3_small = 2, ml_t3_medium = 3, ml_t3_large = 4, ml_t3_xlarge = 5, ml_t3_2xlarge = 6, ml_m5_large = 7, ml_m5_xlarge = 8, ml_m5_2xlarge = 9, ml_m5_4xlarge = 10, ml_m5_8xlarge = 11, ml_m5_12xlarge = 12, ml_m5_16xlarge = 13, ml_m5_24xlarge = 14, ml_c5_large = 15, ml_c5_xlarge = 16, ml_c5_2xlarge = 17, ml_c5_4xlarge = 18, ml_c5_9xlarge = 19, ml_c5_12xlarge = 20, ml_c5_18xlarge = 21, ml_c5_24xlarge = 22, ml_p3_2xlarge = 23, ml_p3_8xlarge = 24, ml_p3_16xlarge = 25, ml_g4dn_xlarge = 26, ml_g4dn_2xlarge = 27, ml_g4dn_4xlarge = 28, ml_g4dn_8xlarge = 29, ml_g4dn_12xlarge = 30, ml_g4dn_16xlarge = 31 }

	export interface ResourceInUse {
	}
	export interface ResourceInUseFormProperties {
	}
	export function CreateResourceInUseFormGroup() {
		return new FormGroup<ResourceInUseFormProperties>({
		});

	}

	export interface CreateAutoMLJobResponse {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: string;
	}
	export interface CreateAutoMLJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAutoMLJobResponseFormGroup() {
		return new FormGroup<CreateAutoMLJobResponseFormProperties>({
			AutoMLJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:automl-job/.*')]),
		});

	}

	export interface CreateAutoMLJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		InputDataConfig: Array<AutoMLChannel>;

		/**
		 * The output data configuration.
		 * Required
		 */
		OutputDataConfig: AutoMLOutputDataConfig;
		ProblemType?: CreateAutoMLJobRequestProblemType | null;

		/** Applies a metric to minimize or maximize for the job's objective. */
		AutoMLJobObjective?: AutoMLJobObjective;

		/** A collection of settings used for a job. */
		AutoMLJobConfig?: AutoMLJobConfig;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;
		GenerateCandidateDefinitionsOnly?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateAutoMLJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: FormControl<string | null | undefined>,
		ProblemType: FormControl<CreateAutoMLJobRequestProblemType | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
		GenerateCandidateDefinitionsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAutoMLJobRequestFormGroup() {
		return new FormGroup<CreateAutoMLJobRequestFormProperties>({
			AutoMLJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ProblemType: new FormControl<CreateAutoMLJobRequestProblemType | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			GenerateCandidateDefinitionsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Similar to Channel. A channel is a named input source that training algorithms can consume. Refer to Channel for detailed descriptions. */
	export interface AutoMLChannel {

		/**
		 * The data source for the AutoPilot job.
		 * Required
		 */
		DataSource: AutoMLDataSource;
		CompressionType?: CompressionType | null;

		/**
		 * Required
		 * Min length: 1
		 */
		TargetAttributeName: string;
	}

	/** Similar to Channel. A channel is a named input source that training algorithms can consume. Refer to Channel for detailed descriptions. */
	export interface AutoMLChannelFormProperties {
		CompressionType: FormControl<CompressionType | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		TargetAttributeName: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLChannelFormGroup() {
		return new FormGroup<AutoMLChannelFormProperties>({
			CompressionType: new FormControl<CompressionType | null | undefined>(undefined),
			TargetAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** The data source for the AutoPilot job. */
	export interface AutoMLDataSource {

		/**
		 * The Amazon S3 data source.
		 * Required
		 */
		S3DataSource: AutoMLS3DataSource;
	}

	/** The data source for the AutoPilot job. */
	export interface AutoMLDataSourceFormProperties {
	}
	export function CreateAutoMLDataSourceFormGroup() {
		return new FormGroup<AutoMLDataSourceFormProperties>({
		});

	}


	/** The Amazon S3 data source. */
	export interface AutoMLS3DataSource {

		/** Required */
		S3DataType: AutoMLS3DataSourceS3DataType;

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: string;
	}

	/** The Amazon S3 data source. */
	export interface AutoMLS3DataSourceFormProperties {

		/** Required */
		S3DataType: FormControl<AutoMLS3DataSourceS3DataType | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLS3DataSourceFormGroup() {
		return new FormGroup<AutoMLS3DataSourceFormProperties>({
			S3DataType: new FormControl<AutoMLS3DataSourceS3DataType | null | undefined>(undefined, [Validators.required]),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}

	export enum AutoMLS3DataSourceS3DataType { ManifestFile = 0, S3Prefix = 1 }


	/** The output data configuration. */
	export interface AutoMLOutputDataConfig {

		/** Max length: 2048 */
		KmsKeyId?: string | null;

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: string;
	}

	/** The output data configuration. */
	export interface AutoMLOutputDataConfigFormProperties {

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLOutputDataConfigFormGroup() {
		return new FormGroup<AutoMLOutputDataConfigFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}

	export enum CreateAutoMLJobRequestProblemType { BinaryClassification = 0, MulticlassClassification = 1, Regression = 2 }


	/** Applies a metric to minimize or maximize for the job's objective. */
	export interface AutoMLJobObjective {

		/** Required */
		MetricName: AutoMLJobObjectiveMetricName;
	}

	/** Applies a metric to minimize or maximize for the job's objective. */
	export interface AutoMLJobObjectiveFormProperties {

		/** Required */
		MetricName: FormControl<AutoMLJobObjectiveMetricName | null | undefined>,
	}
	export function CreateAutoMLJobObjectiveFormGroup() {
		return new FormGroup<AutoMLJobObjectiveFormProperties>({
			MetricName: new FormControl<AutoMLJobObjectiveMetricName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutoMLJobObjectiveMetricName { Accuracy = 0, MSE = 1, F1 = 2, F1macro = 3 }


	/** A collection of settings used for a job. */
	export interface AutoMLJobConfig {

		/** How long a job is allowed to run, or how many candidates a job is allowed to generate. */
		CompletionCriteria?: AutoMLJobCompletionCriteria;

		/** Security options. */
		SecurityConfig?: AutoMLSecurityConfig;
	}

	/** A collection of settings used for a job. */
	export interface AutoMLJobConfigFormProperties {
	}
	export function CreateAutoMLJobConfigFormGroup() {
		return new FormGroup<AutoMLJobConfigFormProperties>({
		});

	}


	/** How long a job is allowed to run, or how many candidates a job is allowed to generate. */
	export interface AutoMLJobCompletionCriteria {

		/** Minimum: 1 */
		MaxCandidates?: number | null;

		/** Minimum: 1 */
		MaxRuntimePerTrainingJobInSeconds?: number | null;

		/** Minimum: 1 */
		MaxAutoMLJobRuntimeInSeconds?: number | null;
	}

	/** How long a job is allowed to run, or how many candidates a job is allowed to generate. */
	export interface AutoMLJobCompletionCriteriaFormProperties {

		/** Minimum: 1 */
		MaxCandidates: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxRuntimePerTrainingJobInSeconds: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		MaxAutoMLJobRuntimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAutoMLJobCompletionCriteriaFormGroup() {
		return new FormGroup<AutoMLJobCompletionCriteriaFormProperties>({
			MaxCandidates: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxRuntimePerTrainingJobInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxAutoMLJobRuntimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Security options. */
	export interface AutoMLSecurityConfig {

		/** Max length: 2048 */
		VolumeKmsKeyId?: string | null;
		EnableInterContainerTrafficEncryption?: boolean | null;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig;
	}

	/** Security options. */
	export interface AutoMLSecurityConfigFormProperties {

		/** Max length: 2048 */
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		EnableInterContainerTrafficEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoMLSecurityConfigFormGroup() {
		return new FormGroup<AutoMLSecurityConfigFormProperties>({
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
			EnableInterContainerTrafficEncryption: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.  */
	export interface VpcConfig {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		SecurityGroupIds: Array<string>;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		Subnets: Array<string>;
	}

	/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.  */
	export interface VpcConfigFormProperties {
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
		});

	}

	export interface CreateCodeRepositoryOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		CodeRepositoryArn: string;
	}
	export interface CreateCodeRepositoryOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		CodeRepositoryArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCodeRepositoryOutputFormGroup() {
		return new FormGroup<CreateCodeRepositoryOutputFormProperties>({
			CodeRepositoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:code-repository/.*')]),
		});

	}

	export interface CreateCodeRepositoryInput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: string;

		/**
		 * Specifies configuration details for a Git repository in your AWS account.
		 * Required
		 */
		GitConfig: GitConfig;
	}
	export interface CreateCodeRepositoryInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: FormControl<string | null | undefined>,
	}
	export function CreateCreateCodeRepositoryInputFormGroup() {
		return new FormGroup<CreateCodeRepositoryInputFormProperties>({
			CodeRepositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}


	/** Specifies configuration details for a Git repository in your AWS account. */
	export interface GitConfig {

		/** Required */
		RepositoryUrl: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Branch?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		SecretArn?: string | null;
	}

	/** Specifies configuration details for a Git repository in your AWS account. */
	export interface GitConfigFormProperties {

		/** Required */
		RepositoryUrl: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Branch: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		SecretArn: FormControl<string | null | undefined>,
	}
	export function CreateGitConfigFormGroup() {
		return new FormGroup<GitConfigFormProperties>({
			RepositoryUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Branch: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('[^ ~^:?*\[]+')]),
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:secretsmanager:[a-z0-9\-]*:[0-9]{12}:secret:.*')]),
		});

	}

	export interface CreateCompilationJobResponse {

		/**
		 * Required
		 * Max length: 256
		 */
		CompilationJobArn: string;
	}
	export interface CreateCompilationJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		CompilationJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCompilationJobResponseFormGroup() {
		return new FormGroup<CreateCompilationJobResponseFormProperties>({
			CompilationJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:compilation-job/.*')]),
		});

	}

	export interface CreateCompilationJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
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
	export interface CreateCompilationJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCompilationJobRequestFormGroup() {
		return new FormGroup<CreateCompilationJobRequestFormProperties>({
			CompilationJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}


	/** Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained. */
	export interface InputConfig {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		DataInputConfig: string;

		/** Required */
		Framework: InputConfigFramework;
	}

	/** Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained. */
	export interface InputConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		DataInputConfig: FormControl<string | null | undefined>,

		/** Required */
		Framework: FormControl<InputConfigFramework | null | undefined>,
	}
	export function CreateInputConfigFormGroup() {
		return new FormGroup<InputConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			DataInputConfig: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('[\S\s]+')]),
			Framework: new FormControl<InputConfigFramework | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConfigFramework { TENSORFLOW = 0, KERAS = 1, MXNET = 2, ONNX = 3, PYTORCH = 4, XGBOOST = 5, TFLITE = 6 }


	/** Contains information about the output location for the compiled model and the device (target) that the model runs on. */
	export interface OutputConfig {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputLocation: string;

		/** Required */
		TargetDevice: OutputConfigTargetDevice;
	}

	/** Contains information about the output location for the compiled model and the device (target) that the model runs on. */
	export interface OutputConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputLocation: FormControl<string | null | undefined>,

		/** Required */
		TargetDevice: FormControl<OutputConfigTargetDevice | null | undefined>,
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
			S3OutputLocation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			TargetDevice: new FormControl<OutputConfigTargetDevice | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OutputConfigTargetDevice { lambda = 0, ml_m4 = 1, ml_m5 = 2, ml_c4 = 3, ml_c5 = 4, ml_p2 = 5, ml_p3 = 6, ml_inf1 = 7, jetson_tx1 = 8, jetson_tx2 = 9, jetson_nano = 10, jetson_xavier = 11, rasp3b = 12, imx8qm = 13, deeplens = 14, rk3399 = 15, rk3288 = 16, aisage = 17, sbe_c = 18, qcs605 = 19, qcs603 = 20, sitara_am57x = 21, amba_cv22 = 22 }

	export interface CreateDomainResponse {

		/** Max length: 256 */
		DomainArn?: string | null;

		/** Max length: 1024 */
		Url?: string | null;
	}
	export interface CreateDomainResponseFormProperties {

		/** Max length: 256 */
		DomainArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainResponseFormGroup() {
		return new FormGroup<CreateDomainResponseFormProperties>({
			DomainArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:domain/.*')]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface CreateDomainRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainName: string;

		/** Required */
		AuthMode: CreateDomainRequestAuthMode;

		/**
		 * A collection of settings.
		 * Required
		 */
		DefaultUserSettings: UserSettings;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		SubnetIds: Array<string>;

		/**
		 * Required
		 * Max length: 32
		 */
		VpcId: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Max length: 2048 */
		HomeEfsFileSystemKmsKeyId?: string | null;
	}
	export interface CreateDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		AuthMode: FormControl<CreateDomainRequestAuthMode | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 */
		VpcId: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		HomeEfsFileSystemKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			AuthMode: new FormControl<CreateDomainRequestAuthMode | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.pattern('[-0-9a-zA-Z]+')]),
			HomeEfsFileSystemKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export enum CreateDomainRequestAuthMode { SSO = 0, IAM = 1 }


	/** A collection of settings. */
	export interface UserSettings {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRole?: string | null;

		/** Maximum items: 5 */
		SecurityGroups?: Array<string>;

		/** Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of <code>DefaultUserSettings</code> when the <a>CreateDomain</a> API is called, and as part of <code>UserSettings</code> when the <a>CreateUserProfile</a> API is called. */
		SharingSettings?: SharingSettings;

		/** Jupyter server's app settings. */
		JupyterServerAppSettings?: JupyterServerAppSettings;

		/** The kernel gateway app settings. */
		KernelGatewayAppSettings?: KernelGatewayAppSettings;

		/** The TensorBoard app settings. */
		TensorBoardAppSettings?: TensorBoardAppSettings;
	}

	/** A collection of settings. */
	export interface UserSettingsFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRole: FormControl<string | null | undefined>,
	}
	export function CreateUserSettingsFormGroup() {
		return new FormGroup<UserSettingsFormProperties>({
			ExecutionRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}


	/** Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of <code>DefaultUserSettings</code> when the <a>CreateDomain</a> API is called, and as part of <code>UserSettings</code> when the <a>CreateUserProfile</a> API is called. */
	export interface SharingSettings {
		NotebookOutputOption?: SharingSettingsNotebookOutputOption | null;

		/** Max length: 1024 */
		S3OutputPath?: string | null;

		/** Max length: 2048 */
		S3KmsKeyId?: string | null;
	}

	/** Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of <code>DefaultUserSettings</code> when the <a>CreateDomain</a> API is called, and as part of <code>UserSettings</code> when the <a>CreateUserProfile</a> API is called. */
	export interface SharingSettingsFormProperties {
		NotebookOutputOption: FormControl<SharingSettingsNotebookOutputOption | null | undefined>,

		/** Max length: 1024 */
		S3OutputPath: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		S3KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateSharingSettingsFormGroup() {
		return new FormGroup<SharingSettingsFormProperties>({
			NotebookOutputOption: new FormControl<SharingSettingsNotebookOutputOption | null | undefined>(undefined),
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			S3KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export enum SharingSettingsNotebookOutputOption { Allowed = 0, Disabled = 1 }


	/** Jupyter server's app settings. */
	export interface JupyterServerAppSettings {

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		DefaultResourceSpec?: ResourceSpec;
	}

	/** Jupyter server's app settings. */
	export interface JupyterServerAppSettingsFormProperties {
	}
	export function CreateJupyterServerAppSettingsFormGroup() {
		return new FormGroup<JupyterServerAppSettingsFormProperties>({
		});

	}


	/** The kernel gateway app settings. */
	export interface KernelGatewayAppSettings {

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		DefaultResourceSpec?: ResourceSpec;
	}

	/** The kernel gateway app settings. */
	export interface KernelGatewayAppSettingsFormProperties {
	}
	export function CreateKernelGatewayAppSettingsFormGroup() {
		return new FormGroup<KernelGatewayAppSettingsFormProperties>({
		});

	}


	/** The TensorBoard app settings. */
	export interface TensorBoardAppSettings {

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		DefaultResourceSpec?: ResourceSpec;
	}

	/** The TensorBoard app settings. */
	export interface TensorBoardAppSettingsFormProperties {
	}
	export function CreateTensorBoardAppSettingsFormGroup() {
		return new FormGroup<TensorBoardAppSettingsFormProperties>({
		});

	}

	export interface CreateEndpointOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: string;
	}
	export interface CreateEndpointOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointOutputFormGroup() {
		return new FormGroup<CreateEndpointOutputFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:endpoint/.*')]),
		});

	}

	export interface CreateEndpointInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: string;

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateEndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointInputFormGroup() {
		return new FormGroup<CreateEndpointInputFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			EndpointConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface CreateEndpointConfigOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointConfigArn: string;
	}
	export interface CreateEndpointConfigOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointConfigOutputFormGroup() {
		return new FormGroup<CreateEndpointConfigOutputFormProperties>({
			EndpointConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:endpoint-config/.*')]),
		});

	}

	export interface CreateEndpointConfigInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		ProductionVariants: Array<ProductionVariant>;

		/** <p/> */
		DataCaptureConfig?: DataCaptureConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Max length: 2048 */
		KmsKeyId?: string | null;
	}
	export interface CreateEndpointConfigInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointConfigInputFormGroup() {
		return new FormGroup<CreateEndpointConfigInputFormProperties>({
			EndpointConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}


	/** Identifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights.  */
	export interface ProductionVariant {

		/**
		 * Required
		 * Max length: 63
		 */
		VariantName: string;

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		InitialInstanceCount: number;

		/** Required */
		InstanceType: ProductionVariantInstanceType;

		/** Minimum: 0 */
		InitialVariantWeight?: number | null;
		AcceleratorType?: ProductionVariantAcceleratorType | null;
	}

	/** Identifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights.  */
	export interface ProductionVariantFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		VariantName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		InitialInstanceCount: FormControl<number | null | undefined>,

		/** Required */
		InstanceType: FormControl<ProductionVariantInstanceType | null | undefined>,

		/** Minimum: 0 */
		InitialVariantWeight: FormControl<number | null | undefined>,
		AcceleratorType: FormControl<ProductionVariantAcceleratorType | null | undefined>,
	}
	export function CreateProductionVariantFormGroup() {
		return new FormGroup<ProductionVariantFormProperties>({
			VariantName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			InitialInstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			InstanceType: new FormControl<ProductionVariantInstanceType | null | undefined>(undefined, [Validators.required]),
			InitialVariantWeight: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			AcceleratorType: new FormControl<ProductionVariantAcceleratorType | null | undefined>(undefined),
		});

	}

	export enum ProductionVariantAcceleratorType { ml_eia1_medium = 0, ml_eia1_large = 1, ml_eia1_xlarge = 2, ml_eia2_medium = 3, ml_eia2_large = 4, ml_eia2_xlarge = 5 }


	/** <p/> */
	export interface DataCaptureConfig {
		EnableCapture?: boolean | null;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		InitialSamplingPercentage: number;

		/**
		 * Required
		 * Max length: 512
		 */
		DestinationS3Uri: string;

		/** Max length: 2048 */
		KmsKeyId?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		CaptureOptions: Array<CaptureOption>;

		/** <p/> */
		CaptureContentTypeHeader?: CaptureContentTypeHeader;
	}

	/** <p/> */
	export interface DataCaptureConfigFormProperties {
		EnableCapture: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		InitialSamplingPercentage: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 */
		DestinationS3Uri: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDataCaptureConfigFormGroup() {
		return new FormGroup<DataCaptureConfigFormProperties>({
			EnableCapture: new FormControl<boolean | null | undefined>(undefined),
			InitialSamplingPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			DestinationS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.pattern('^(https|s3)://([^/])/?(.*)$')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}


	/** <p/> */
	export interface CaptureOption {

		/** Required */
		CaptureMode: CaptureOptionCaptureMode;
	}

	/** <p/> */
	export interface CaptureOptionFormProperties {

		/** Required */
		CaptureMode: FormControl<CaptureOptionCaptureMode | null | undefined>,
	}
	export function CreateCaptureOptionFormGroup() {
		return new FormGroup<CaptureOptionFormProperties>({
			CaptureMode: new FormControl<CaptureOptionCaptureMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CaptureOptionCaptureMode { Input = 0, Output = 1 }


	/** <p/> */
	export interface CaptureContentTypeHeader {

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		CsvContentTypes?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		JsonContentTypes?: Array<string>;
	}

	/** <p/> */
	export interface CaptureContentTypeHeaderFormProperties {
	}
	export function CreateCaptureContentTypeHeaderFormGroup() {
		return new FormGroup<CaptureContentTypeHeaderFormProperties>({
		});

	}

	export interface CreateExperimentResponse {

		/** Max length: 256 */
		ExperimentArn?: string | null;
	}
	export interface CreateExperimentResponseFormProperties {

		/** Max length: 256 */
		ExperimentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperimentResponseFormGroup() {
		return new FormGroup<CreateExperimentResponseFormProperties>({
			ExperimentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment/.*')]),
		});

	}

	export interface CreateExperimentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: string;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** Max length: 3072 */
		Description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateExperimentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** Max length: 3072 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperimentRequestFormGroup() {
		return new FormGroup<CreateExperimentRequestFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3072), Validators.pattern('.*')]),
		});

	}

	export interface CreateFlowDefinitionResponse {

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: string;
	}
	export interface CreateFlowDefinitionResponseFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowDefinitionResponseFormGroup() {
		return new FormGroup<CreateFlowDefinitionResponseFormProperties>({
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition/.*')]),
		});

	}

	export interface CreateFlowDefinitionRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: string;

		/** Container for configuring the source of human task requests. */
		HumanLoopRequestSource?: HumanLoopRequestSource;

		/** Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans. */
		HumanLoopActivationConfig?: HumanLoopActivationConfig;

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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateFlowDefinitionRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlowDefinitionRequestFormGroup() {
		return new FormGroup<CreateFlowDefinitionRequestFormProperties>({
			FlowDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}


	/** Container for configuring the source of human task requests. */
	export interface HumanLoopRequestSource {

		/** Required */
		AwsManagedHumanLoopRequestSource: HumanLoopRequestSourceAwsManagedHumanLoopRequestSource;
	}

	/** Container for configuring the source of human task requests. */
	export interface HumanLoopRequestSourceFormProperties {

		/** Required */
		AwsManagedHumanLoopRequestSource: FormControl<HumanLoopRequestSourceAwsManagedHumanLoopRequestSource | null | undefined>,
	}
	export function CreateHumanLoopRequestSourceFormGroup() {
		return new FormGroup<HumanLoopRequestSourceFormProperties>({
			AwsManagedHumanLoopRequestSource: new FormControl<HumanLoopRequestSourceAwsManagedHumanLoopRequestSource | null | undefined>(undefined, [Validators.required]),
		});

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

	/** Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans. */
	export interface HumanLoopActivationConfigFormProperties {
	}
	export function CreateHumanLoopActivationConfigFormGroup() {
		return new FormGroup<HumanLoopActivationConfigFormProperties>({
		});

	}


	/** Defines under what conditions SageMaker creates a human loop. Used within . See for the required format of activation conditions. */
	export interface HumanLoopActivationConditionsConfig {

		/**
		 * Required
		 * Max length: 10240
		 */
		HumanLoopActivationConditions: string;
	}

	/** Defines under what conditions SageMaker creates a human loop. Used within . See for the required format of activation conditions. */
	export interface HumanLoopActivationConditionsConfigFormProperties {

		/**
		 * Required
		 * Max length: 10240
		 */
		HumanLoopActivationConditions: FormControl<string | null | undefined>,
	}
	export function CreateHumanLoopActivationConditionsConfigFormGroup() {
		return new FormGroup<HumanLoopActivationConditionsConfigFormProperties>({
			HumanLoopActivationConditions: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10240)]),
		});

	}


	/** Describes the work to be performed by human workers. */
	export interface HumanLoopConfig {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanTaskUiArn: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TaskTitle: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TaskDescription: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		TaskCount: number;

		/**
		 * Minimum: 1
		 * Maximum: 864000
		 */
		TaskAvailabilityLifetimeInSeconds?: number | null;

		/**
		 * Minimum: 30
		 * Maximum: 28800
		 */
		TaskTimeLimitInSeconds?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		TaskKeywords?: Array<string>;

		/** <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> */
		PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
	}

	/** Describes the work to be performed by human workers. */
	export interface HumanLoopConfigFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanTaskUiArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TaskTitle: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TaskDescription: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		TaskCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 864000
		 */
		TaskAvailabilityLifetimeInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 30
		 * Maximum: 28800
		 */
		TaskTimeLimitInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateHumanLoopConfigFormGroup() {
		return new FormGroup<HumanLoopConfigFormProperties>({
			WorkteamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workteam/.*')]),
			HumanTaskUiArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-task-ui/.*')]),
			TaskTitle: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^[\t\n\r -\uD7FF\uE000-\uFFFD]*$')]),
			TaskDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			TaskCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3)]),
			TaskAvailabilityLifetimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(864000)]),
			TaskTimeLimitInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(30), Validators.max(28800)]),
		});

	}


	/** <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> */
	export interface PublicWorkforceTaskPrice {

		/** Represents an amount of money in United States dollars/ */
		AmountInUsd?: USD;
	}

	/** <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> */
	export interface PublicWorkforceTaskPriceFormProperties {
	}
	export function CreatePublicWorkforceTaskPriceFormGroup() {
		return new FormGroup<PublicWorkforceTaskPriceFormProperties>({
		});

	}


	/** Represents an amount of money in United States dollars/ */
	export interface USD {

		/**
		 * Minimum: 0
		 * Maximum: 2
		 */
		Dollars?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 99
		 */
		Cents?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 9
		 */
		TenthFractionsOfACent?: number | null;
	}

	/** Represents an amount of money in United States dollars/ */
	export interface USDFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 2
		 */
		Dollars: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 99
		 */
		Cents: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 9
		 */
		TenthFractionsOfACent: FormControl<number | null | undefined>,
	}
	export function CreateUSDFormGroup() {
		return new FormGroup<USDFormProperties>({
			Dollars: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2)]),
			Cents: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(99)]),
			TenthFractionsOfACent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(9)]),
		});

	}


	/** Contains information about where human output will be stored. */
	export interface FlowDefinitionOutputConfig {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: string;

		/** Max length: 2048 */
		KmsKeyId?: string | null;
	}

	/** Contains information about where human output will be stored. */
	export interface FlowDefinitionOutputConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateFlowDefinitionOutputConfigFormGroup() {
		return new FormGroup<FlowDefinitionOutputConfigFormProperties>({
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export interface CreateHumanTaskUiResponse {

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanTaskUiArn: string;
	}
	export interface CreateHumanTaskUiResponseFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanTaskUiArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateHumanTaskUiResponseFormGroup() {
		return new FormGroup<CreateHumanTaskUiResponseFormProperties>({
			HumanTaskUiArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-task-ui/.*')]),
		});

	}

	export interface CreateHumanTaskUiRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanTaskUiName: string;

		/**
		 * The Liquid template for the worker user interface.
		 * Required
		 */
		UiTemplate: UiTemplate;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateHumanTaskUiRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanTaskUiName: FormControl<string | null | undefined>,
	}
	export function CreateCreateHumanTaskUiRequestFormGroup() {
		return new FormGroup<CreateHumanTaskUiRequestFormProperties>({
			HumanTaskUiName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
		});

	}


	/** The Liquid template for the worker user interface. */
	export interface UiTemplate {

		/**
		 * Required
		 * Max length: 128000
		 * Min length: 1
		 */
		Content: string;
	}

	/** The Liquid template for the worker user interface. */
	export interface UiTemplateFormProperties {

		/**
		 * Required
		 * Max length: 128000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateUiTemplateFormGroup() {
		return new FormGroup<UiTemplateFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128000), Validators.minLength(1), Validators.pattern('[\S\s]+')]),
		});

	}

	export interface CreateHyperParameterTuningJobResponse {

		/**
		 * Required
		 * Max length: 256
		 */
		HyperParameterTuningJobArn: string;
	}
	export interface CreateHyperParameterTuningJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		HyperParameterTuningJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateHyperParameterTuningJobResponseFormGroup() {
		return new FormGroup<CreateHyperParameterTuningJobResponseFormProperties>({
			HyperParameterTuningJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:hyper-parameter-tuning-job/.*')]),
		});

	}

	export interface CreateHyperParameterTuningJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: string;

		/**
		 * Configures a hyperparameter tuning job.
		 * Required
		 */
		HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

		/** Defines the training jobs launched by a hyperparameter tuning job. */
		TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		TrainingJobDefinitions?: Array<HyperParameterTrainingJobDefinition>;

		/** <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note> */
		WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateHyperParameterTuningJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: FormControl<string | null | undefined>,
	}
	export function CreateCreateHyperParameterTuningJobRequestFormGroup() {
		return new FormGroup<CreateHyperParameterTuningJobRequestFormProperties>({
			HyperParameterTuningJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}


	/** Configures a hyperparameter tuning job. */
	export interface HyperParameterTuningJobConfig {

		/**
		 * The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.
		 * Required
		 */
		Strategy: HyperParameterTuningJobConfigStrategy;

		/** Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter. */
		HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

		/**
		 * Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
		 * Required
		 */
		ResourceLimits: ResourceLimits;

		/** <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note> */
		ParameterRanges?: ParameterRanges;
		TrainingJobEarlyStoppingType?: HyperParameterTuningJobConfigTrainingJobEarlyStoppingType | null;

		/** The job completion criteria. */
		TuningJobCompletionCriteria?: TuningJobCompletionCriteria;
	}

	/** Configures a hyperparameter tuning job. */
	export interface HyperParameterTuningJobConfigFormProperties {

		/**
		 * The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.
		 * Required
		 */
		Strategy: FormControl<HyperParameterTuningJobConfigStrategy | null | undefined>,
		TrainingJobEarlyStoppingType: FormControl<HyperParameterTuningJobConfigTrainingJobEarlyStoppingType | null | undefined>,
	}
	export function CreateHyperParameterTuningJobConfigFormGroup() {
		return new FormGroup<HyperParameterTuningJobConfigFormProperties>({
			Strategy: new FormControl<HyperParameterTuningJobConfigStrategy | null | undefined>(undefined, [Validators.required]),
			TrainingJobEarlyStoppingType: new FormControl<HyperParameterTuningJobConfigTrainingJobEarlyStoppingType | null | undefined>(undefined),
		});

	}

	export enum HyperParameterTuningJobConfigStrategy { Bayesian = 0, Random = 1 }


	/** Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch. */
	export interface ResourceLimits {

		/**
		 * Required
		 * Minimum: 1
		 */
		MaxNumberOfTrainingJobs: number;

		/**
		 * Required
		 * Minimum: 1
		 */
		MaxParallelTrainingJobs: number;
	}

	/** Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch. */
	export interface ResourceLimitsFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		MaxNumberOfTrainingJobs: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		MaxParallelTrainingJobs: FormControl<number | null | undefined>,
	}
	export function CreateResourceLimitsFormGroup() {
		return new FormGroup<ResourceLimitsFormProperties>({
			MaxNumberOfTrainingJobs: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			MaxParallelTrainingJobs: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}


	/** <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note> */
	export interface ParameterRanges {

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		IntegerParameterRanges?: Array<IntegerParameterRange>;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		ContinuousParameterRanges?: Array<ContinuousParameterRange>;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		CategoricalParameterRanges?: Array<CategoricalParameterRange>;
	}

	/** <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note> */
	export interface ParameterRangesFormProperties {
	}
	export function CreateParameterRangesFormGroup() {
		return new FormGroup<ParameterRangesFormProperties>({
		});

	}


	/** For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches. */
	export interface IntegerParameterRange {

		/**
		 * Required
		 * Max length: 256
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 256
		 */
		MinValue: string;

		/**
		 * Required
		 * Max length: 256
		 */
		MaxValue: string;
		ScalingType?: IntegerParameterRangeScalingType | null;
	}

	/** For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches. */
	export interface IntegerParameterRangeFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		MinValue: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		MaxValue: FormControl<string | null | undefined>,
		ScalingType: FormControl<IntegerParameterRangeScalingType | null | undefined>,
	}
	export function CreateIntegerParameterRangeFormGroup() {
		return new FormGroup<IntegerParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			MinValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			MaxValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			ScalingType: new FormControl<IntegerParameterRangeScalingType | null | undefined>(undefined),
		});

	}

	export enum IntegerParameterRangeScalingType { Auto = 0, Linear = 1, Logarithmic = 2, ReverseLogarithmic = 3 }


	/** A list of continuous hyperparameters to tune. */
	export interface ContinuousParameterRange {

		/**
		 * Required
		 * Max length: 256
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 256
		 */
		MinValue: string;

		/**
		 * Required
		 * Max length: 256
		 */
		MaxValue: string;
		ScalingType?: IntegerParameterRangeScalingType | null;
	}

	/** A list of continuous hyperparameters to tune. */
	export interface ContinuousParameterRangeFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		MinValue: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		MaxValue: FormControl<string | null | undefined>,
		ScalingType: FormControl<IntegerParameterRangeScalingType | null | undefined>,
	}
	export function CreateContinuousParameterRangeFormGroup() {
		return new FormGroup<ContinuousParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			MinValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			MaxValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			ScalingType: new FormControl<IntegerParameterRangeScalingType | null | undefined>(undefined),
		});

	}


	/** A list of categorical hyperparameters to tune. */
	export interface CategoricalParameterRange {

		/**
		 * Required
		 * Max length: 256
		 */
		Name: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Values: Array<string>;
	}

	/** A list of categorical hyperparameters to tune. */
	export interface CategoricalParameterRangeFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCategoricalParameterRangeFormGroup() {
		return new FormGroup<CategoricalParameterRangeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
		});

	}

	export enum HyperParameterTuningJobConfigTrainingJobEarlyStoppingType { Off = 0, Auto = 1 }


	/** The job completion criteria. */
	export interface TuningJobCompletionCriteria {

		/** Required */
		TargetObjectiveMetricValue: number;
	}

	/** The job completion criteria. */
	export interface TuningJobCompletionCriteriaFormProperties {

		/** Required */
		TargetObjectiveMetricValue: FormControl<number | null | undefined>,
	}
	export function CreateTuningJobCompletionCriteriaFormGroup() {
		return new FormGroup<TuningJobCompletionCriteriaFormProperties>({
			TargetObjectiveMetricValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the training jobs launched by a hyperparameter tuning job. */
	export interface HyperParameterTrainingJobDefinition {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DefinitionName?: string | null;

		/** Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter. */
		TuningObjective?: HyperParameterTuningJobObjective;

		/** <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note> */
		HyperParameterRanges?: ParameterRanges;
		StaticHyperParameters?: HyperParameters;

		/**
		 * Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
		 * Required
		 */
		AlgorithmSpecification: HyperParameterAlgorithmSpecification;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		InputDataConfig?: Array<Channel>;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig;

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
		CheckpointConfig?: CheckpointConfig;
	}

	/** Defines the training jobs launched by a hyperparameter tuning job. */
	export interface HyperParameterTrainingJobDefinitionFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DefinitionName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
		EnableNetworkIsolation: FormControl<boolean | null | undefined>,
		EnableInterContainerTrafficEncryption: FormControl<boolean | null | undefined>,
		EnableManagedSpotTraining: FormControl<boolean | null | undefined>,
	}
	export function CreateHyperParameterTrainingJobDefinitionFormGroup() {
		return new FormGroup<HyperParameterTrainingJobDefinitionFormProperties>({
			DefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			EnableNetworkIsolation: new FormControl<boolean | null | undefined>(undefined),
			EnableInterContainerTrafficEncryption: new FormControl<boolean | null | undefined>(undefined),
			EnableManagedSpotTraining: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor. */
	export interface HyperParameterAlgorithmSpecification {

		/** Max length: 255 */
		TrainingImage?: string | null;

		/** Required */
		TrainingInputMode: TrainingInputMode;

		/**
		 * Max length: 170
		 * Min length: 1
		 */
		AlgorithmName?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 40
		 */
		MetricDefinitions?: Array<MetricDefinition>;
	}

	/** Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor. */
	export interface HyperParameterAlgorithmSpecificationFormProperties {

		/** Max length: 255 */
		TrainingImage: FormControl<string | null | undefined>,

		/** Required */
		TrainingInputMode: FormControl<TrainingInputMode | null | undefined>,

		/**
		 * Max length: 170
		 * Min length: 1
		 */
		AlgorithmName: FormControl<string | null | undefined>,
	}
	export function CreateHyperParameterAlgorithmSpecificationFormGroup() {
		return new FormGroup<HyperParameterAlgorithmSpecificationFormProperties>({
			TrainingImage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('.*')]),
			TrainingInputMode: new FormControl<TrainingInputMode | null | undefined>(undefined, [Validators.required]),
			AlgorithmName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(170), Validators.minLength(1), Validators.pattern('(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$')]),
		});

	}


	/** Contains information about the output location for managed spot training checkpoint data.  */
	export interface CheckpointConfig {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: string;

		/** Max length: 4096 */
		LocalPath?: string | null;
	}

	/** Contains information about the output location for managed spot training checkpoint data.  */
	export interface CheckpointConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		LocalPath: FormControl<string | null | undefined>,
	}
	export function CreateCheckpointConfigFormGroup() {
		return new FormGroup<CheckpointConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			LocalPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.pattern('.*')]),
		});

	}


	/** <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note> */
	export interface HyperParameterTuningJobWarmStartConfig {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		ParentHyperParameterTuningJobs: Array<ParentHyperParameterTuningJob>;

		/** Required */
		WarmStartType: HyperParameterTuningJobWarmStartConfigWarmStartType;
	}

	/** <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note> */
	export interface HyperParameterTuningJobWarmStartConfigFormProperties {

		/** Required */
		WarmStartType: FormControl<HyperParameterTuningJobWarmStartConfigWarmStartType | null | undefined>,
	}
	export function CreateHyperParameterTuningJobWarmStartConfigFormGroup() {
		return new FormGroup<HyperParameterTuningJobWarmStartConfigFormProperties>({
			WarmStartType: new FormControl<HyperParameterTuningJobWarmStartConfigWarmStartType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A previously completed or stopped hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job. */
	export interface ParentHyperParameterTuningJob {

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName?: string | null;
	}

	/** A previously completed or stopped hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job. */
	export interface ParentHyperParameterTuningJobFormProperties {

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: FormControl<string | null | undefined>,
	}
	export function CreateParentHyperParameterTuningJobFormGroup() {
		return new FormGroup<ParentHyperParameterTuningJobFormProperties>({
			HyperParameterTuningJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export enum HyperParameterTuningJobWarmStartConfigWarmStartType { IdenticalDataAndAlgorithm = 0, TransferLearning = 1 }

	export interface CreateLabelingJobResponse {

		/**
		 * Required
		 * Max length: 2048
		 */
		LabelingJobArn: string;
	}
	export interface CreateLabelingJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 */
		LabelingJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLabelingJobResponseFormGroup() {
		return new FormGroup<CreateLabelingJobResponseFormProperties>({
			LabelingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:labeling-job/.*')]),
		});

	}

	export interface CreateLabelingJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: string;

		/**
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Max length: 1024 */
		LabelCategoryConfigS3Uri?: string | null;

		/** <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note> */
		StoppingConditions?: LabelingJobStoppingConditions;

		/** Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling. */
		LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

		/**
		 * Information required for human workers to complete a labeling task.
		 * Required
		 */
		HumanTaskConfig: HumanTaskConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateLabelingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		LabelAttributeName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		LabelCategoryConfigS3Uri: FormControl<string | null | undefined>,
	}
	export function CreateCreateLabelingJobRequestFormGroup() {
		return new FormGroup<CreateLabelingJobRequestFormProperties>({
			LabelingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			LabelAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(127), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			LabelCategoryConfigS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}


	/** Input configuration information for a labeling job. */
	export interface LabelingJobInputConfig {

		/**
		 * Provides information about the location of input data.
		 * Required
		 */
		DataSource: LabelingJobDataSource;

		/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
		DataAttributes?: LabelingJobDataAttributes;
	}

	/** Input configuration information for a labeling job. */
	export interface LabelingJobInputConfigFormProperties {
	}
	export function CreateLabelingJobInputConfigFormGroup() {
		return new FormGroup<LabelingJobInputConfigFormProperties>({
		});

	}


	/** Provides information about the location of input data. */
	export interface LabelingJobDataSource {

		/**
		 * The Amazon S3 location of the input data objects.
		 * Required
		 */
		S3DataSource: LabelingJobS3DataSource;
	}

	/** Provides information about the location of input data. */
	export interface LabelingJobDataSourceFormProperties {
	}
	export function CreateLabelingJobDataSourceFormGroup() {
		return new FormGroup<LabelingJobDataSourceFormProperties>({
		});

	}


	/** The Amazon S3 location of the input data objects. */
	export interface LabelingJobS3DataSource {

		/**
		 * Required
		 * Max length: 1024
		 */
		ManifestS3Uri: string;
	}

	/** The Amazon S3 location of the input data objects. */
	export interface LabelingJobS3DataSourceFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		ManifestS3Uri: FormControl<string | null | undefined>,
	}
	export function CreateLabelingJobS3DataSourceFormGroup() {
		return new FormGroup<LabelingJobS3DataSourceFormProperties>({
			ManifestS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}


	/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
	export interface LabelingJobDataAttributes {

		/** Maximum items: 256 */
		ContentClassifiers?: Array<ContentClassifier>;
	}

	/** Attributes of the data specified by the customer. Use these to describe the data to be labeled. */
	export interface LabelingJobDataAttributesFormProperties {
	}
	export function CreateLabelingJobDataAttributesFormGroup() {
		return new FormGroup<LabelingJobDataAttributesFormProperties>({
		});

	}

	export enum ContentClassifier { FreeOfPersonallyIdentifiableInformation = 0, FreeOfAdultContent = 1 }


	/** Output configuration information for a labeling job. */
	export interface LabelingJobOutputConfig {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: string;

		/** Max length: 2048 */
		KmsKeyId?: string | null;
	}

	/** Output configuration information for a labeling job. */
	export interface LabelingJobOutputConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateLabelingJobOutputConfigFormGroup() {
		return new FormGroup<LabelingJobOutputConfigFormProperties>({
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}


	/** <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note> */
	export interface LabelingJobStoppingConditions {

		/** Minimum: 1 */
		MaxHumanLabeledObjectCount?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxPercentageOfInputDatasetLabeled?: number | null;
	}

	/** <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note> */
	export interface LabelingJobStoppingConditionsFormProperties {

		/** Minimum: 1 */
		MaxHumanLabeledObjectCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxPercentageOfInputDatasetLabeled: FormControl<number | null | undefined>,
	}
	export function CreateLabelingJobStoppingConditionsFormGroup() {
		return new FormGroup<LabelingJobStoppingConditionsFormProperties>({
			MaxHumanLabeledObjectCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			MaxPercentageOfInputDatasetLabeled: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling. */
	export interface LabelingJobAlgorithmsConfig {

		/**
		 * Required
		 * Max length: 2048
		 */
		LabelingJobAlgorithmSpecificationArn: string;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		InitialActiveLearningModelArn?: string | null;

		/** Provides configuration information for labeling jobs. */
		LabelingJobResourceConfig?: LabelingJobResourceConfig;
	}

	/** Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling. */
	export interface LabelingJobAlgorithmsConfigFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 */
		LabelingJobAlgorithmSpecificationArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		InitialActiveLearningModelArn: FormControl<string | null | undefined>,
	}
	export function CreateLabelingJobAlgorithmsConfigFormGroup() {
		return new FormGroup<LabelingJobAlgorithmsConfigFormProperties>({
			LabelingJobAlgorithmSpecificationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('arn:.*')]),
			InitialActiveLearningModelArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model/.*')]),
		});

	}


	/** Provides configuration information for labeling jobs. */
	export interface LabelingJobResourceConfig {

		/** Max length: 2048 */
		VolumeKmsKeyId?: string | null;
	}

	/** Provides configuration information for labeling jobs. */
	export interface LabelingJobResourceConfigFormProperties {

		/** Max length: 2048 */
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateLabelingJobResourceConfigFormGroup() {
		return new FormGroup<LabelingJobResourceConfigFormProperties>({
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}


	/** Information required for human workers to complete a labeling task. */
	export interface HumanTaskConfig {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: string;

		/**
		 * Provided configuration information for the worker UI for a labeling job.
		 * Required
		 */
		UiConfig: UiConfig;

		/**
		 * Required
		 * Max length: 2048
		 */
		PreHumanTaskLambdaArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		TaskKeywords?: Array<string>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TaskTitle: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TaskDescription: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 9
		 */
		NumberOfHumanWorkersPerDataObject: number;

		/**
		 * Required
		 * Minimum: 30
		 * Maximum: 604800
		 */
		TaskTimeLimitInSeconds: number;

		/**
		 * Minimum: 60
		 * Maximum: 864000
		 */
		TaskAvailabilityLifetimeInSeconds?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxConcurrentTaskCount?: number | null;

		/**
		 * Configures how labels are consolidated across human workers.
		 * Required
		 */
		AnnotationConsolidationConfig: AnnotationConsolidationConfig;

		/** <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> */
		PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
	}

	/** Information required for human workers to complete a labeling task. */
	export interface HumanTaskConfigFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		PreHumanTaskLambdaArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TaskTitle: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TaskDescription: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 9
		 */
		NumberOfHumanWorkersPerDataObject: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 30
		 * Maximum: 604800
		 */
		TaskTimeLimitInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 864000
		 */
		TaskAvailabilityLifetimeInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxConcurrentTaskCount: FormControl<number | null | undefined>,
	}
	export function CreateHumanTaskConfigFormGroup() {
		return new FormGroup<HumanTaskConfigFormProperties>({
			WorkteamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workteam/.*')]),
			PreHumanTaskLambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			TaskTitle: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^[\t\n\r -\uD7FF\uE000-\uFFFD]*$')]),
			TaskDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			NumberOfHumanWorkersPerDataObject: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(9)]),
			TaskTimeLimitInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(30), Validators.max(604800)]),
			TaskAvailabilityLifetimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(864000)]),
			MaxConcurrentTaskCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}


	/** Provided configuration information for the worker UI for a labeling job.  */
	export interface UiConfig {

		/** Max length: 1024 */
		UiTemplateS3Uri?: string | null;

		/** Max length: 1024 */
		HumanTaskUiArn?: string | null;
	}

	/** Provided configuration information for the worker UI for a labeling job.  */
	export interface UiConfigFormProperties {

		/** Max length: 1024 */
		UiTemplateS3Uri: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		HumanTaskUiArn: FormControl<string | null | undefined>,
	}
	export function CreateUiConfigFormGroup() {
		return new FormGroup<UiConfigFormProperties>({
			UiTemplateS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			HumanTaskUiArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-task-ui/.*')]),
		});

	}


	/** Configures how labels are consolidated across human workers. */
	export interface AnnotationConsolidationConfig {

		/**
		 * Required
		 * Max length: 2048
		 */
		AnnotationConsolidationLambdaArn: string;
	}

	/** Configures how labels are consolidated across human workers. */
	export interface AnnotationConsolidationConfigFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 */
		AnnotationConsolidationLambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationConsolidationConfigFormGroup() {
		return new FormGroup<AnnotationConsolidationConfigFormProperties>({
			AnnotationConsolidationLambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
		});

	}

	export interface CreateModelOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ModelArn: string;
	}
	export interface CreateModelOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ModelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelOutputFormGroup() {
		return new FormGroup<CreateModelOutputFormProperties>({
			ModelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model/.*')]),
		});

	}

	export interface CreateModelInput {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: string;

		/** Describes the container, as part of model definition. */
		PrimaryContainer?: ContainerDefinition;

		/** Maximum items: 5 */
		Containers?: Array<ContainerDefinition>;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig;
		EnableNetworkIsolation?: boolean | null;
	}
	export interface CreateModelInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		EnableNetworkIsolation: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateModelInputFormGroup() {
		return new FormGroup<CreateModelInputFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			EnableNetworkIsolation: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the container, as part of model definition. */
	export interface ContainerDefinition {

		/** Max length: 63 */
		ContainerHostname?: string | null;

		/** Max length: 255 */
		Image?: string | null;
		Mode?: ContainerDefinitionMode | null;

		/** Max length: 1024 */
		ModelDataUrl?: string | null;
		Environment?: EnvironmentMap;

		/**
		 * Max length: 170
		 * Min length: 1
		 */
		ModelPackageName?: string | null;
	}

	/** Describes the container, as part of model definition. */
	export interface ContainerDefinitionFormProperties {

		/** Max length: 63 */
		ContainerHostname: FormControl<string | null | undefined>,

		/** Max length: 255 */
		Image: FormControl<string | null | undefined>,
		Mode: FormControl<ContainerDefinitionMode | null | undefined>,

		/** Max length: 1024 */
		ModelDataUrl: FormControl<string | null | undefined>,

		/**
		 * Max length: 170
		 * Min length: 1
		 */
		ModelPackageName: FormControl<string | null | undefined>,
	}
	export function CreateContainerDefinitionFormGroup() {
		return new FormGroup<ContainerDefinitionFormProperties>({
			ContainerHostname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Image: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('[\S]+')]),
			Mode: new FormControl<ContainerDefinitionMode | null | undefined>(undefined),
			ModelDataUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			ModelPackageName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(170), Validators.minLength(1), Validators.pattern('(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$')]),
		});

	}

	export enum ContainerDefinitionMode { SingleModel = 0, MultiModel = 1 }

	export interface EnvironmentMap {
	}
	export interface EnvironmentMapFormProperties {
	}
	export function CreateEnvironmentMapFormGroup() {
		return new FormGroup<EnvironmentMapFormProperties>({
		});

	}

	export interface CreateModelPackageOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ModelPackageArn: string;
	}
	export interface CreateModelPackageOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ModelPackageArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelPackageOutputFormGroup() {
		return new FormGroup<CreateModelPackageOutputFormProperties>({
			ModelPackageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model-package/.*')]),
		});

	}

	export interface CreateModelPackageInput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ModelPackageName: string;

		/** Max length: 1024 */
		ModelPackageDescription?: string | null;

		/** Defines how to perform inference generation after a training job is run. */
		InferenceSpecification?: InferenceSpecification;

		/** Specifies batch transform jobs that Amazon SageMaker runs to validate your model package. */
		ValidationSpecification?: ModelPackageValidationSpecification;

		/** A list of algorithms that were used to create a model package. */
		SourceAlgorithmSpecification?: SourceAlgorithmSpecification;
		CertifyForMarketplace?: boolean | null;
	}
	export interface CreateModelPackageInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ModelPackageName: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		ModelPackageDescription: FormControl<string | null | undefined>,
		CertifyForMarketplace: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateModelPackageInputFormGroup() {
		return new FormGroup<CreateModelPackageInputFormProperties>({
			ModelPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			ModelPackageDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			CertifyForMarketplace: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies batch transform jobs that Amazon SageMaker runs to validate your model package. */
	export interface ModelPackageValidationSpecification {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ValidationRole: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		ValidationProfiles: Array<ModelPackageValidationProfile>;
	}

	/** Specifies batch transform jobs that Amazon SageMaker runs to validate your model package. */
	export interface ModelPackageValidationSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ValidationRole: FormControl<string | null | undefined>,
	}
	export function CreateModelPackageValidationSpecificationFormGroup() {
		return new FormGroup<ModelPackageValidationSpecificationFormProperties>({
			ValidationRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}


	/** <p>Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p> */
	export interface ModelPackageValidationProfile {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProfileName: string;

		/**
		 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
		 * Required
		 */
		TransformJobDefinition: TransformJobDefinition;
	}

	/** <p>Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p> */
	export interface ModelPackageValidationProfileFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProfileName: FormControl<string | null | undefined>,
	}
	export function CreateModelPackageValidationProfileFormGroup() {
		return new FormGroup<ModelPackageValidationProfileFormProperties>({
			ProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}


	/** A list of algorithms that were used to create a model package. */
	export interface SourceAlgorithmSpecification {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		SourceAlgorithms: Array<SourceAlgorithm>;
	}

	/** A list of algorithms that were used to create a model package. */
	export interface SourceAlgorithmSpecificationFormProperties {
	}
	export function CreateSourceAlgorithmSpecificationFormGroup() {
		return new FormGroup<SourceAlgorithmSpecificationFormProperties>({
		});

	}


	/** Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to. */
	export interface SourceAlgorithm {

		/** Max length: 1024 */
		ModelDataUrl?: string | null;

		/**
		 * Required
		 * Max length: 170
		 * Min length: 1
		 */
		AlgorithmName: string;
	}

	/** Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to. */
	export interface SourceAlgorithmFormProperties {

		/** Max length: 1024 */
		ModelDataUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 170
		 * Min length: 1
		 */
		AlgorithmName: FormControl<string | null | undefined>,
	}
	export function CreateSourceAlgorithmFormGroup() {
		return new FormGroup<SourceAlgorithmFormProperties>({
			ModelDataUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			AlgorithmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(170), Validators.minLength(1), Validators.pattern('(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$')]),
		});

	}

	export interface CreateMonitoringScheduleResponse {

		/**
		 * Required
		 * Max length: 256
		 */
		MonitoringScheduleArn: string;
	}
	export interface CreateMonitoringScheduleResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		MonitoringScheduleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMonitoringScheduleResponseFormGroup() {
		return new FormGroup<CreateMonitoringScheduleResponseFormProperties>({
			MonitoringScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
		});

	}

	export interface CreateMonitoringScheduleRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;

		/**
		 * Configures the monitoring schedule and defines the monitoring job.
		 * Required
		 */
		MonitoringScheduleConfig: MonitoringScheduleConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateMonitoringScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMonitoringScheduleRequestFormGroup() {
		return new FormGroup<CreateMonitoringScheduleRequestFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}


	/** Configures the monitoring schedule and defines the monitoring job. */
	export interface MonitoringScheduleConfig {

		/** Configuration details about the monitoring schedule. */
		ScheduleConfig?: ScheduleConfig;

		/**
		 * Defines the monitoring job.
		 * Required
		 */
		MonitoringJobDefinition: MonitoringJobDefinition;
	}

	/** Configures the monitoring schedule and defines the monitoring job. */
	export interface MonitoringScheduleConfigFormProperties {
	}
	export function CreateMonitoringScheduleConfigFormGroup() {
		return new FormGroup<MonitoringScheduleConfigFormProperties>({
		});

	}


	/** Configuration details about the monitoring schedule. */
	export interface ScheduleConfig {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: string;
	}

	/** Configuration details about the monitoring schedule. */
	export interface ScheduleConfigFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ScheduleExpression: FormControl<string | null | undefined>,
	}
	export function CreateScheduleConfigFormGroup() {
		return new FormGroup<ScheduleConfigFormProperties>({
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Defines the monitoring job. */
	export interface MonitoringJobDefinition {

		/** Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically. */
		BaselineConfig?: MonitoringBaselineConfig;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
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
		StoppingCondition?: MonitoringStoppingCondition;
		Environment?: MonitoringEnvironmentMap;

		/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
		NetworkConfig?: NetworkConfig;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;
	}

	/** Defines the monitoring job. */
	export interface MonitoringJobDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringJobDefinitionFormGroup() {
		return new FormGroup<MonitoringJobDefinitionFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}


	/** Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically. */
	export interface MonitoringBaselineConfig {

		/** The constraints resource for a monitoring job. */
		ConstraintsResource?: MonitoringConstraintsResource;

		/** The statistics resource for a monitoring job. */
		StatisticsResource?: MonitoringStatisticsResource;
	}

	/** Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically. */
	export interface MonitoringBaselineConfigFormProperties {
	}
	export function CreateMonitoringBaselineConfigFormGroup() {
		return new FormGroup<MonitoringBaselineConfigFormProperties>({
		});

	}


	/** The constraints resource for a monitoring job. */
	export interface MonitoringConstraintsResource {

		/** Max length: 1024 */
		S3Uri?: string | null;
	}

	/** The constraints resource for a monitoring job. */
	export interface MonitoringConstraintsResourceFormProperties {

		/** Max length: 1024 */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringConstraintsResourceFormGroup() {
		return new FormGroup<MonitoringConstraintsResourceFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}


	/** The statistics resource for a monitoring job. */
	export interface MonitoringStatisticsResource {

		/** Max length: 1024 */
		S3Uri?: string | null;
	}

	/** The statistics resource for a monitoring job. */
	export interface MonitoringStatisticsResourceFormProperties {

		/** Max length: 1024 */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringStatisticsResourceFormGroup() {
		return new FormGroup<MonitoringStatisticsResourceFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}


	/** The inputs for a monitoring job. */
	export interface MonitoringInput {

		/**
		 * Input object for the endpoint
		 * Required
		 */
		EndpointInput: EndpointInput;
	}

	/** The inputs for a monitoring job. */
	export interface MonitoringInputFormProperties {
	}
	export function CreateMonitoringInputFormGroup() {
		return new FormGroup<MonitoringInputFormProperties>({
		});

	}


	/** Input object for the endpoint */
	export interface EndpointInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		LocalPath: string;
		S3InputMode?: TrainingInputMode | null;
		S3DataDistributionType?: S3DataSourceS3DataDistributionType | null;
	}

	/** Input object for the endpoint */
	export interface EndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		LocalPath: FormControl<string | null | undefined>,
		S3InputMode: FormControl<TrainingInputMode | null | undefined>,
		S3DataDistributionType: FormControl<S3DataSourceS3DataDistributionType | null | undefined>,
	}
	export function CreateEndpointInputFormGroup() {
		return new FormGroup<EndpointInputFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			LocalPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			S3InputMode: new FormControl<TrainingInputMode | null | undefined>(undefined),
			S3DataDistributionType: new FormControl<S3DataSourceS3DataDistributionType | null | undefined>(undefined),
		});

	}


	/** The output configuration for monitoring jobs. */
	export interface MonitoringOutputConfig {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		MonitoringOutputs: Array<MonitoringOutput>;

		/** Max length: 2048 */
		KmsKeyId?: string | null;
	}

	/** The output configuration for monitoring jobs. */
	export interface MonitoringOutputConfigFormProperties {

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringOutputConfigFormGroup() {
		return new FormGroup<MonitoringOutputConfigFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}


	/** The output object for a monitoring job. */
	export interface MonitoringOutput {

		/**
		 * Information about where and how you want to store the results of a monitoring job.
		 * Required
		 */
		S3Output: MonitoringS3Output;
	}

	/** The output object for a monitoring job. */
	export interface MonitoringOutputFormProperties {
	}
	export function CreateMonitoringOutputFormGroup() {
		return new FormGroup<MonitoringOutputFormProperties>({
		});

	}


	/** Information about where and how you want to store the results of a monitoring job. */
	export interface MonitoringS3Output {

		/**
		 * Required
		 * Max length: 512
		 */
		S3Uri: string;

		/**
		 * Required
		 * Max length: 256
		 */
		LocalPath: string;
		S3UploadMode?: MonitoringS3OutputS3UploadMode | null;
	}

	/** Information about where and how you want to store the results of a monitoring job. */
	export interface MonitoringS3OutputFormProperties {

		/**
		 * Required
		 * Max length: 512
		 */
		S3Uri: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		LocalPath: FormControl<string | null | undefined>,
		S3UploadMode: FormControl<MonitoringS3OutputS3UploadMode | null | undefined>,
	}
	export function CreateMonitoringS3OutputFormGroup() {
		return new FormGroup<MonitoringS3OutputFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			LocalPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			S3UploadMode: new FormControl<MonitoringS3OutputS3UploadMode | null | undefined>(undefined),
		});

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

	/** Identifies the resources to deploy for a monitoring job. */
	export interface MonitoringResourcesFormProperties {
	}
	export function CreateMonitoringResourcesFormGroup() {
		return new FormGroup<MonitoringResourcesFormProperties>({
		});

	}


	/** Configuration for the cluster used to run model monitoring jobs. */
	export interface MonitoringClusterConfig {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		InstanceCount: number;

		/** Required */
		InstanceType: MonitoringClusterConfigInstanceType;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 16384
		 */
		VolumeSizeInGB: number;

		/** Max length: 2048 */
		VolumeKmsKeyId?: string | null;
	}

	/** Configuration for the cluster used to run model monitoring jobs. */
	export interface MonitoringClusterConfigFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		InstanceCount: FormControl<number | null | undefined>,

		/** Required */
		InstanceType: FormControl<MonitoringClusterConfigInstanceType | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 16384
		 */
		VolumeSizeInGB: FormControl<number | null | undefined>,

		/** Max length: 2048 */
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringClusterConfigFormGroup() {
		return new FormGroup<MonitoringClusterConfigFormProperties>({
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			InstanceType: new FormControl<MonitoringClusterConfigInstanceType | null | undefined>(undefined, [Validators.required]),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(16384)]),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export enum MonitoringClusterConfigInstanceType { ml_t3_medium = 0, ml_t3_large = 1, ml_t3_xlarge = 2, ml_t3_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_c4_xlarge = 9, ml_c4_2xlarge = 10, ml_c4_4xlarge = 11, ml_c4_8xlarge = 12, ml_p2_xlarge = 13, ml_p2_8xlarge = 14, ml_p2_16xlarge = 15, ml_p3_2xlarge = 16, ml_p3_8xlarge = 17, ml_p3_16xlarge = 18, ml_c5_xlarge = 19, ml_c5_2xlarge = 20, ml_c5_4xlarge = 21, ml_c5_9xlarge = 22, ml_c5_18xlarge = 23, ml_m5_large = 24, ml_m5_xlarge = 25, ml_m5_2xlarge = 26, ml_m5_4xlarge = 27, ml_m5_12xlarge = 28, ml_m5_24xlarge = 29, ml_r5_large = 30, ml_r5_xlarge = 31, ml_r5_2xlarge = 32, ml_r5_4xlarge = 33, ml_r5_8xlarge = 34, ml_r5_12xlarge = 35, ml_r5_16xlarge = 36, ml_r5_24xlarge = 37 }


	/** Container image configuration object for the monitoring job. */
	export interface MonitoringAppSpecification {

		/**
		 * Required
		 * Max length: 255
		 */
		ImageUri: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ContainerEntrypoint?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		ContainerArguments?: Array<string>;

		/** Max length: 1024 */
		RecordPreprocessorSourceUri?: string | null;

		/** Max length: 1024 */
		PostAnalyticsProcessorSourceUri?: string | null;
	}

	/** Container image configuration object for the monitoring job. */
	export interface MonitoringAppSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		ImageUri: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		RecordPreprocessorSourceUri: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		PostAnalyticsProcessorSourceUri: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringAppSpecificationFormGroup() {
		return new FormGroup<MonitoringAppSpecificationFormProperties>({
			ImageUri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.pattern('.*')]),
			RecordPreprocessorSourceUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			PostAnalyticsProcessorSourceUri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}


	/** A time limit for how long the monitoring job is allowed to run before stopping. */
	export interface MonitoringStoppingCondition {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 86400
		 */
		MaxRuntimeInSeconds: number;
	}

	/** A time limit for how long the monitoring job is allowed to run before stopping. */
	export interface MonitoringStoppingConditionFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 86400
		 */
		MaxRuntimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateMonitoringStoppingConditionFormGroup() {
		return new FormGroup<MonitoringStoppingConditionFormProperties>({
			MaxRuntimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(86400)]),
		});

	}

	export interface MonitoringEnvironmentMap {
	}
	export interface MonitoringEnvironmentMapFormProperties {
	}
	export function CreateMonitoringEnvironmentMapFormGroup() {
		return new FormGroup<MonitoringEnvironmentMapFormProperties>({
		});

	}


	/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
	export interface NetworkConfig {
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableNetworkIsolation?: boolean | null;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig;
	}

	/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
	export interface NetworkConfigFormProperties {
		EnableInterContainerTrafficEncryption: FormControl<boolean | null | undefined>,
		EnableNetworkIsolation: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			EnableInterContainerTrafficEncryption: new FormControl<boolean | null | undefined>(undefined),
			EnableNetworkIsolation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateNotebookInstanceOutput {

		/** Max length: 256 */
		NotebookInstanceArn?: string | null;
	}
	export interface CreateNotebookInstanceOutputFormProperties {

		/** Max length: 256 */
		NotebookInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateNotebookInstanceOutputFormGroup() {
		return new FormGroup<CreateNotebookInstanceOutputFormProperties>({
			NotebookInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateNotebookInstanceInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: string;

		/** Required */
		InstanceType: CreateNotebookInstanceInputInstanceType;

		/** Max length: 32 */
		SubnetId?: string | null;

		/** Maximum items: 5 */
		SecurityGroupIds?: Array<string>;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Max length: 2048 */
		KmsKeyId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Max length: 63 */
		LifecycleConfigName?: string | null;
		DirectInternetAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;

		/**
		 * Minimum: 5
		 * Maximum: 16384
		 */
		VolumeSizeInGB?: number | null;
		AcceleratorTypes?: Array<NotebookInstanceAcceleratorType>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultCodeRepository?: string | null;

		/** Maximum items: 3 */
		AdditionalCodeRepositories?: Array<string>;
		RootAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;
	}
	export interface CreateNotebookInstanceInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<CreateNotebookInstanceInputInstanceType | null | undefined>,

		/** Max length: 32 */
		SubnetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,

		/** Max length: 63 */
		LifecycleConfigName: FormControl<string | null | undefined>,
		DirectInternetAccess: FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 16384
		 */
		VolumeSizeInGB: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultCodeRepository: FormControl<string | null | undefined>,
		RootAccess: FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>,
	}
	export function CreateCreateNotebookInstanceInputFormGroup() {
		return new FormGroup<CreateNotebookInstanceInputFormProperties>({
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			InstanceType: new FormControl<CreateNotebookInstanceInputInstanceType | null | undefined>(undefined, [Validators.required]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.pattern('[-0-9a-zA-Z]+')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
			LifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DirectInternetAccess: new FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>(undefined),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(16384)]),
			DefaultCodeRepository: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('^https://([^/]+)/?(.*)$|^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RootAccess: new FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>(undefined),
		});

	}

	export enum CreateNotebookInstanceInputInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export enum CreateNotebookInstanceInputDirectInternetAccess { Enabled = 0, Disabled = 1 }

	export enum NotebookInstanceAcceleratorType { ml_eia1_medium = 0, ml_eia1_large = 1, ml_eia1_xlarge = 2, ml_eia2_medium = 3, ml_eia2_large = 4, ml_eia2_xlarge = 5 }

	export interface CreateNotebookInstanceLifecycleConfigOutput {

		/** Max length: 256 */
		NotebookInstanceLifecycleConfigArn?: string | null;
	}
	export interface CreateNotebookInstanceLifecycleConfigOutputFormProperties {

		/** Max length: 256 */
		NotebookInstanceLifecycleConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateNotebookInstanceLifecycleConfigOutputFormGroup() {
		return new FormGroup<CreateNotebookInstanceLifecycleConfigOutputFormProperties>({
			NotebookInstanceLifecycleConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateNotebookInstanceLifecycleConfigInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: string;

		/** Maximum items: 1 */
		OnCreate?: Array<NotebookInstanceLifecycleHook>;

		/** Maximum items: 1 */
		OnStart?: Array<NotebookInstanceLifecycleHook>;
	}
	export interface CreateNotebookInstanceLifecycleConfigInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,
	}
	export function CreateCreateNotebookInstanceLifecycleConfigInputFormGroup() {
		return new FormGroup<CreateNotebookInstanceLifecycleConfigInputFormProperties>({
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}


	/** <p>Contains the notebook instance lifecycle configuration script.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p> */
	export interface NotebookInstanceLifecycleHook {

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		Content?: string | null;
	}

	/** <p>Contains the notebook instance lifecycle configuration script.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p> */
	export interface NotebookInstanceLifecycleHookFormProperties {

		/**
		 * Max length: 16384
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateNotebookInstanceLifecycleHookFormGroup() {
		return new FormGroup<NotebookInstanceLifecycleHookFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.minLength(1), Validators.pattern('[\S\s]+')]),
		});

	}

	export interface CreatePresignedDomainUrlResponse {
		AuthorizedUrl?: string | null;
	}
	export interface CreatePresignedDomainUrlResponseFormProperties {
		AuthorizedUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresignedDomainUrlResponseFormGroup() {
		return new FormGroup<CreatePresignedDomainUrlResponseFormProperties>({
			AuthorizedUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePresignedDomainUrlRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: string;

		/**
		 * Minimum: 1800
		 * Maximum: 43200
		 */
		SessionExpirationDurationInSeconds?: number | null;
	}
	export interface CreatePresignedDomainUrlRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1800
		 * Maximum: 43200
		 */
		SessionExpirationDurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreatePresignedDomainUrlRequestFormGroup() {
		return new FormGroup<CreatePresignedDomainUrlRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			SessionExpirationDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1800), Validators.max(43200)]),
		});

	}

	export interface CreatePresignedNotebookInstanceUrlOutput {
		AuthorizedUrl?: string | null;
	}
	export interface CreatePresignedNotebookInstanceUrlOutputFormProperties {
		AuthorizedUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreatePresignedNotebookInstanceUrlOutputFormGroup() {
		return new FormGroup<CreatePresignedNotebookInstanceUrlOutputFormProperties>({
			AuthorizedUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePresignedNotebookInstanceUrlInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: string;

		/**
		 * Minimum: 1800
		 * Maximum: 43200
		 */
		SessionExpirationDurationInSeconds?: number | null;
	}
	export interface CreatePresignedNotebookInstanceUrlInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1800
		 * Maximum: 43200
		 */
		SessionExpirationDurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreatePresignedNotebookInstanceUrlInputFormGroup() {
		return new FormGroup<CreatePresignedNotebookInstanceUrlInputFormProperties>({
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			SessionExpirationDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1800), Validators.max(43200)]),
		});

	}

	export interface CreateProcessingJobResponse {

		/**
		 * Required
		 * Max length: 256
		 */
		ProcessingJobArn: string;
	}
	export interface CreateProcessingJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ProcessingJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProcessingJobResponseFormGroup() {
		return new FormGroup<CreateProcessingJobResponseFormProperties>({
			ProcessingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:processing-job/.*')]),
		});

	}

	export interface CreateProcessingJobRequest {

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		ProcessingInputs?: Array<ProcessingInput>;

		/** The output configuration for the processing job. */
		ProcessingOutputConfig?: ProcessingOutputConfig;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: string;

		/**
		 * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
		 * Required
		 */
		ProcessingResources: ProcessingResources;

		/** Specifies a time limit for how long the processing job is allowed to run. */
		StoppingCondition?: ProcessingStoppingCondition;

		/**
		 * Configuration to run a processing job in a specified container image.
		 * Required
		 */
		AppSpecification: AppSpecification;
		Environment?: ProcessingEnvironmentMap;

		/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
		NetworkConfig?: NetworkConfig;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig;
	}
	export interface CreateProcessingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProcessingJobRequestFormGroup() {
		return new FormGroup<CreateProcessingJobRequestFormProperties>({
			ProcessingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}


	/** The inputs for a processing job. */
	export interface ProcessingInput {

		/** Required */
		InputName: string;

		/**
		 * Information about where and how you want to obtain the inputs for an processing job.
		 * Required
		 */
		S3Input: ProcessingS3Input;
	}

	/** The inputs for a processing job. */
	export interface ProcessingInputFormProperties {

		/** Required */
		InputName: FormControl<string | null | undefined>,
	}
	export function CreateProcessingInputFormGroup() {
		return new FormGroup<ProcessingInputFormProperties>({
			InputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about where and how you want to obtain the inputs for an processing job. */
	export interface ProcessingS3Input {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: string;

		/**
		 * Required
		 * Max length: 256
		 */
		LocalPath: string;

		/** Required */
		S3DataType: AutoMLS3DataSourceS3DataType;

		/** Required */
		S3InputMode: TrainingInputMode;
		S3DataDistributionType?: S3DataSourceS3DataDistributionType | null;
		S3CompressionType?: CompressionType | null;
	}

	/** Information about where and how you want to obtain the inputs for an processing job. */
	export interface ProcessingS3InputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		LocalPath: FormControl<string | null | undefined>,

		/** Required */
		S3DataType: FormControl<AutoMLS3DataSourceS3DataType | null | undefined>,

		/** Required */
		S3InputMode: FormControl<TrainingInputMode | null | undefined>,
		S3DataDistributionType: FormControl<S3DataSourceS3DataDistributionType | null | undefined>,
		S3CompressionType: FormControl<CompressionType | null | undefined>,
	}
	export function CreateProcessingS3InputFormGroup() {
		return new FormGroup<ProcessingS3InputFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			LocalPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			S3DataType: new FormControl<AutoMLS3DataSourceS3DataType | null | undefined>(undefined, [Validators.required]),
			S3InputMode: new FormControl<TrainingInputMode | null | undefined>(undefined, [Validators.required]),
			S3DataDistributionType: new FormControl<S3DataSourceS3DataDistributionType | null | undefined>(undefined),
			S3CompressionType: new FormControl<CompressionType | null | undefined>(undefined),
		});

	}


	/** The output configuration for the processing job. */
	export interface ProcessingOutputConfig {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		Outputs: Array<ProcessingOutput>;

		/** Max length: 2048 */
		KmsKeyId?: string | null;
	}

	/** The output configuration for the processing job. */
	export interface ProcessingOutputConfigFormProperties {

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateProcessingOutputConfigFormGroup() {
		return new FormGroup<ProcessingOutputConfigFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}


	/** Describes the results of a processing job. */
	export interface ProcessingOutput {

		/** Required */
		OutputName: string;

		/**
		 * Information about where and how you want to store the results of an processing job.
		 * Required
		 */
		S3Output: ProcessingS3Output;
	}

	/** Describes the results of a processing job. */
	export interface ProcessingOutputFormProperties {

		/** Required */
		OutputName: FormControl<string | null | undefined>,
	}
	export function CreateProcessingOutputFormGroup() {
		return new FormGroup<ProcessingOutputFormProperties>({
			OutputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about where and how you want to store the results of an processing job. */
	export interface ProcessingS3Output {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: string;

		/**
		 * Required
		 * Max length: 256
		 */
		LocalPath: string;

		/** Required */
		S3UploadMode: MonitoringS3OutputS3UploadMode;
	}

	/** Information about where and how you want to store the results of an processing job. */
	export interface ProcessingS3OutputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3Uri: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		LocalPath: FormControl<string | null | undefined>,

		/** Required */
		S3UploadMode: FormControl<MonitoringS3OutputS3UploadMode | null | undefined>,
	}
	export function CreateProcessingS3OutputFormGroup() {
		return new FormGroup<ProcessingS3OutputFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			LocalPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			S3UploadMode: new FormControl<MonitoringS3OutputS3UploadMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance. */
	export interface ProcessingResources {

		/**
		 * Configuration for the cluster used to run a processing job.
		 * Required
		 */
		ClusterConfig: ProcessingClusterConfig;
	}

	/** Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance. */
	export interface ProcessingResourcesFormProperties {
	}
	export function CreateProcessingResourcesFormGroup() {
		return new FormGroup<ProcessingResourcesFormProperties>({
		});

	}


	/** Configuration for the cluster used to run a processing job. */
	export interface ProcessingClusterConfig {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		InstanceCount: number;

		/** Required */
		InstanceType: ProcessingClusterConfigInstanceType;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 16384
		 */
		VolumeSizeInGB: number;

		/** Max length: 2048 */
		VolumeKmsKeyId?: string | null;
	}

	/** Configuration for the cluster used to run a processing job. */
	export interface ProcessingClusterConfigFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		InstanceCount: FormControl<number | null | undefined>,

		/** Required */
		InstanceType: FormControl<ProcessingClusterConfigInstanceType | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 16384
		 */
		VolumeSizeInGB: FormControl<number | null | undefined>,

		/** Max length: 2048 */
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateProcessingClusterConfigFormGroup() {
		return new FormGroup<ProcessingClusterConfigFormProperties>({
			InstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			InstanceType: new FormControl<ProcessingClusterConfigInstanceType | null | undefined>(undefined, [Validators.required]),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(16384)]),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export enum ProcessingClusterConfigInstanceType { ml_t3_medium = 0, ml_t3_large = 1, ml_t3_xlarge = 2, ml_t3_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_c4_xlarge = 9, ml_c4_2xlarge = 10, ml_c4_4xlarge = 11, ml_c4_8xlarge = 12, ml_p2_xlarge = 13, ml_p2_8xlarge = 14, ml_p2_16xlarge = 15, ml_p3_2xlarge = 16, ml_p3_8xlarge = 17, ml_p3_16xlarge = 18, ml_c5_xlarge = 19, ml_c5_2xlarge = 20, ml_c5_4xlarge = 21, ml_c5_9xlarge = 22, ml_c5_18xlarge = 23, ml_m5_large = 24, ml_m5_xlarge = 25, ml_m5_2xlarge = 26, ml_m5_4xlarge = 27, ml_m5_12xlarge = 28, ml_m5_24xlarge = 29, ml_r5_large = 30, ml_r5_xlarge = 31, ml_r5_2xlarge = 32, ml_r5_4xlarge = 33, ml_r5_8xlarge = 34, ml_r5_12xlarge = 35, ml_r5_16xlarge = 36, ml_r5_24xlarge = 37 }


	/** Specifies a time limit for how long the processing job is allowed to run. */
	export interface ProcessingStoppingCondition {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 604800
		 */
		MaxRuntimeInSeconds: number;
	}

	/** Specifies a time limit for how long the processing job is allowed to run. */
	export interface ProcessingStoppingConditionFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 604800
		 */
		MaxRuntimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateProcessingStoppingConditionFormGroup() {
		return new FormGroup<ProcessingStoppingConditionFormProperties>({
			MaxRuntimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(604800)]),
		});

	}


	/** Configuration to run a processing job in a specified container image. */
	export interface AppSpecification {

		/**
		 * Required
		 * Max length: 255
		 */
		ImageUri: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ContainerEntrypoint?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ContainerArguments?: Array<string>;
	}

	/** Configuration to run a processing job in a specified container image. */
	export interface AppSpecificationFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		ImageUri: FormControl<string | null | undefined>,
	}
	export function CreateAppSpecificationFormGroup() {
		return new FormGroup<AppSpecificationFormProperties>({
			ImageUri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.pattern('.*')]),
		});

	}

	export interface ProcessingEnvironmentMap {
	}
	export interface ProcessingEnvironmentMapFormProperties {
	}
	export function CreateProcessingEnvironmentMapFormGroup() {
		return new FormGroup<ProcessingEnvironmentMapFormProperties>({
		});

	}


	/** Configuration for the experiment. */
	export interface ExperimentConfig {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentDisplayName?: string | null;
	}

	/** Configuration for the experiment. */
	export interface ExperimentConfigFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateExperimentConfigFormGroup() {
		return new FormGroup<ExperimentConfigFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialComponentDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface CreateTrainingJobResponse {

		/**
		 * Required
		 * Max length: 256
		 */
		TrainingJobArn: string;
	}
	export interface CreateTrainingJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		TrainingJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrainingJobResponseFormGroup() {
		return new FormGroup<CreateTrainingJobResponseFormProperties>({
			TrainingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-job/.*')]),
		});

	}

	export interface CreateTrainingJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: string;
		HyperParameters?: HyperParameters;

		/**
		 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
		 * Required
		 */
		AlgorithmSpecification: AlgorithmSpecification;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		InputDataConfig?: Array<Channel>;

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
		VpcConfig?: VpcConfig;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		EnableNetworkIsolation?: boolean | null;
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableManagedSpotTraining?: boolean | null;

		/** Contains information about the output location for managed spot training checkpoint data. */
		CheckpointConfig?: CheckpointConfig;

		/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
		DebugHookConfig?: DebugHookConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		DebugRuleConfigurations?: Array<DebugRuleConfiguration>;

		/** Configuration of storage locations for TensorBoard output. */
		TensorBoardOutputConfig?: TensorBoardOutputConfig;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig;
	}
	export interface CreateTrainingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
		EnableNetworkIsolation: FormControl<boolean | null | undefined>,
		EnableInterContainerTrafficEncryption: FormControl<boolean | null | undefined>,
		EnableManagedSpotTraining: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTrainingJobRequestFormGroup() {
		return new FormGroup<CreateTrainingJobRequestFormProperties>({
			TrainingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			EnableNetworkIsolation: new FormControl<boolean | null | undefined>(undefined),
			EnableInterContainerTrafficEncryption: new FormControl<boolean | null | undefined>(undefined),
			EnableManagedSpotTraining: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p> */
	export interface AlgorithmSpecification {

		/** Max length: 255 */
		TrainingImage?: string | null;

		/**
		 * Max length: 170
		 * Min length: 1
		 */
		AlgorithmName?: string | null;

		/** Required */
		TrainingInputMode: TrainingInputMode;

		/**
		 * Minimum items: 0
		 * Maximum items: 40
		 */
		MetricDefinitions?: Array<MetricDefinition>;
		EnableSageMakerMetricsTimeSeries?: boolean | null;
	}

	/** <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p> */
	export interface AlgorithmSpecificationFormProperties {

		/** Max length: 255 */
		TrainingImage: FormControl<string | null | undefined>,

		/**
		 * Max length: 170
		 * Min length: 1
		 */
		AlgorithmName: FormControl<string | null | undefined>,

		/** Required */
		TrainingInputMode: FormControl<TrainingInputMode | null | undefined>,
		EnableSageMakerMetricsTimeSeries: FormControl<boolean | null | undefined>,
	}
	export function CreateAlgorithmSpecificationFormGroup() {
		return new FormGroup<AlgorithmSpecificationFormProperties>({
			TrainingImage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('.*')]),
			AlgorithmName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(170), Validators.minLength(1), Validators.pattern('(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$')]),
			TrainingInputMode: new FormControl<TrainingInputMode | null | undefined>(undefined, [Validators.required]),
			EnableSageMakerMetricsTimeSeries: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
	export interface DebugHookConfig {

		/** Max length: 4096 */
		LocalPath?: string | null;

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: string;
		HookParameters?: HookParameters;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		CollectionConfigurations?: Array<CollectionConfiguration>;
	}

	/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
	export interface DebugHookConfigFormProperties {

		/** Max length: 4096 */
		LocalPath: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: FormControl<string | null | undefined>,
	}
	export function CreateDebugHookConfigFormGroup() {
		return new FormGroup<DebugHookConfigFormProperties>({
			LocalPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.pattern('.*')]),
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}

	export interface HookParameters {
	}
	export interface HookParametersFormProperties {
	}
	export function CreateHookParametersFormGroup() {
		return new FormGroup<HookParametersFormProperties>({
		});

	}


	/** Configuration information for tensor collections. */
	export interface CollectionConfiguration {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CollectionName?: string | null;
		CollectionParameters?: CollectionParameters;
	}

	/** Configuration information for tensor collections. */
	export interface CollectionConfigurationFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CollectionName: FormControl<string | null | undefined>,
	}
	export function CreateCollectionConfigurationFormGroup() {
		return new FormGroup<CollectionConfigurationFormProperties>({
			CollectionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('.*')]),
		});

	}

	export interface CollectionParameters {
	}
	export interface CollectionParametersFormProperties {
	}
	export function CreateCollectionParametersFormGroup() {
		return new FormGroup<CollectionParametersFormProperties>({
		});

	}


	/** Configuration information for debugging rules. */
	export interface DebugRuleConfiguration {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		RuleConfigurationName: string;

		/** Max length: 4096 */
		LocalPath?: string | null;

		/** Max length: 1024 */
		S3OutputPath?: string | null;

		/**
		 * Required
		 * Max length: 255
		 */
		RuleEvaluatorImage: string;
		InstanceType?: DebugRuleConfigurationInstanceType | null;

		/** Minimum: 0 */
		VolumeSizeInGB?: number | null;
		RuleParameters?: RuleParameters;
	}

	/** Configuration information for debugging rules. */
	export interface DebugRuleConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		RuleConfigurationName: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		LocalPath: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		S3OutputPath: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 */
		RuleEvaluatorImage: FormControl<string | null | undefined>,
		InstanceType: FormControl<DebugRuleConfigurationInstanceType | null | undefined>,

		/** Minimum: 0 */
		VolumeSizeInGB: FormControl<number | null | undefined>,
	}
	export function CreateDebugRuleConfigurationFormGroup() {
		return new FormGroup<DebugRuleConfigurationFormProperties>({
			RuleConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('.*')]),
			LocalPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.pattern('.*')]),
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			RuleEvaluatorImage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.pattern('.*')]),
			InstanceType: new FormControl<DebugRuleConfigurationInstanceType | null | undefined>(undefined),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum DebugRuleConfigurationInstanceType { ml_t3_medium = 0, ml_t3_large = 1, ml_t3_xlarge = 2, ml_t3_2xlarge = 3, ml_m4_xlarge = 4, ml_m4_2xlarge = 5, ml_m4_4xlarge = 6, ml_m4_10xlarge = 7, ml_m4_16xlarge = 8, ml_c4_xlarge = 9, ml_c4_2xlarge = 10, ml_c4_4xlarge = 11, ml_c4_8xlarge = 12, ml_p2_xlarge = 13, ml_p2_8xlarge = 14, ml_p2_16xlarge = 15, ml_p3_2xlarge = 16, ml_p3_8xlarge = 17, ml_p3_16xlarge = 18, ml_c5_xlarge = 19, ml_c5_2xlarge = 20, ml_c5_4xlarge = 21, ml_c5_9xlarge = 22, ml_c5_18xlarge = 23, ml_m5_large = 24, ml_m5_xlarge = 25, ml_m5_2xlarge = 26, ml_m5_4xlarge = 27, ml_m5_12xlarge = 28, ml_m5_24xlarge = 29, ml_r5_large = 30, ml_r5_xlarge = 31, ml_r5_2xlarge = 32, ml_r5_4xlarge = 33, ml_r5_8xlarge = 34, ml_r5_12xlarge = 35, ml_r5_16xlarge = 36, ml_r5_24xlarge = 37 }

	export interface RuleParameters {
	}
	export interface RuleParametersFormProperties {
	}
	export function CreateRuleParametersFormGroup() {
		return new FormGroup<RuleParametersFormProperties>({
		});

	}


	/** Configuration of storage locations for TensorBoard output. */
	export interface TensorBoardOutputConfig {

		/** Max length: 4096 */
		LocalPath?: string | null;

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: string;
	}

	/** Configuration of storage locations for TensorBoard output. */
	export interface TensorBoardOutputConfigFormProperties {

		/** Max length: 4096 */
		LocalPath: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		S3OutputPath: FormControl<string | null | undefined>,
	}
	export function CreateTensorBoardOutputConfigFormGroup() {
		return new FormGroup<TensorBoardOutputConfigFormProperties>({
			LocalPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096), Validators.pattern('.*')]),
			S3OutputPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}

	export interface CreateTransformJobResponse {

		/**
		 * Required
		 * Max length: 256
		 */
		TransformJobArn: string;
	}
	export interface CreateTransformJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		TransformJobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTransformJobResponseFormGroup() {
		return new FormGroup<CreateTransformJobResponseFormProperties>({
			TransformJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:transform-job/.*')]),
		});

	}

	export interface CreateTransformJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: string;

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: string;

		/** Minimum: 0 */
		MaxConcurrentTransforms?: number | null;

		/** Minimum: 0 */
		MaxPayloadInMB?: number | null;
		BatchStrategy?: TransformJobDefinitionBatchStrategy | null;
		Environment?: TransformEnvironmentMap;

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
		DataProcessing?: DataProcessing;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig;
	}
	export interface CreateTransformJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		MaxConcurrentTransforms: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		MaxPayloadInMB: FormControl<number | null | undefined>,
		BatchStrategy: FormControl<TransformJobDefinitionBatchStrategy | null | undefined>,
	}
	export function CreateCreateTransformJobRequestFormGroup() {
		return new FormGroup<CreateTransformJobRequestFormProperties>({
			TransformJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			MaxConcurrentTransforms: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MaxPayloadInMB: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			BatchStrategy: new FormControl<TransformJobDefinitionBatchStrategy | null | undefined>(undefined),
		});

	}


	/** The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>. */
	export interface DataProcessing {

		/**
		 * Max length: 63
		 * Min length: 0
		 */
		InputFilter?: string | null;

		/**
		 * Max length: 63
		 * Min length: 0
		 */
		OutputFilter?: string | null;
		JoinSource?: DataProcessingJoinSource | null;
	}

	/** The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>. */
	export interface DataProcessingFormProperties {

		/**
		 * Max length: 63
		 * Min length: 0
		 */
		InputFilter: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 0
		 */
		OutputFilter: FormControl<string | null | undefined>,
		JoinSource: FormControl<DataProcessingJoinSource | null | undefined>,
	}
	export function CreateDataProcessingFormGroup() {
		return new FormGroup<DataProcessingFormProperties>({
			InputFilter: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(0)]),
			OutputFilter: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(0)]),
			JoinSource: new FormControl<DataProcessingJoinSource | null | undefined>(undefined),
		});

	}

	export enum DataProcessingJoinSource { Input = 0, None = 1 }

	export interface CreateTrialResponse {

		/** Max length: 256 */
		TrialArn?: string | null;
	}
	export interface CreateTrialResponseFormProperties {

		/** Max length: 256 */
		TrialArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrialResponseFormGroup() {
		return new FormGroup<CreateTrialResponseFormProperties>({
			TrialArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial/.*')]),
		});

	}

	export interface CreateTrialRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: string;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateTrialRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrialRequestFormGroup() {
		return new FormGroup<CreateTrialRequestFormProperties>({
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface CreateTrialComponentResponse {

		/** Max length: 256 */
		TrialComponentArn?: string | null;
	}
	export interface CreateTrialComponentResponseFormProperties {

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrialComponentResponseFormGroup() {
		return new FormGroup<CreateTrialComponentResponseFormProperties>({
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
		});

	}

	export interface CreateTrialComponentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: string;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** The status of the trial component. */
		Status?: TrialComponentStatus;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Parameters?: TrialComponentParameters;
		InputArtifacts?: TrialComponentArtifacts;
		OutputArtifacts?: TrialComponentArtifacts;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateTrialComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateTrialComponentRequestFormGroup() {
		return new FormGroup<CreateTrialComponentRequestFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The status of the trial component. */
	export interface TrialComponentStatus {
		PrimaryStatus?: TrialComponentStatusPrimaryStatus | null;

		/** Max length: 1024 */
		Message?: string | null;
	}

	/** The status of the trial component. */
	export interface TrialComponentStatusFormProperties {
		PrimaryStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Max length: 1024 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTrialComponentStatusFormGroup() {
		return new FormGroup<TrialComponentStatusFormProperties>({
			PrimaryStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*')]),
		});

	}

	export enum TrialComponentStatusPrimaryStatus { InProgress = 0, Completed = 1, Failed = 2, Stopping = 3, Stopped = 4 }

	export interface TrialComponentParameters {
	}
	export interface TrialComponentParametersFormProperties {
	}
	export function CreateTrialComponentParametersFormGroup() {
		return new FormGroup<TrialComponentParametersFormProperties>({
		});

	}

	export interface TrialComponentArtifacts {
	}
	export interface TrialComponentArtifactsFormProperties {
	}
	export function CreateTrialComponentArtifactsFormGroup() {
		return new FormGroup<TrialComponentArtifactsFormProperties>({
		});

	}

	export interface CreateUserProfileResponse {

		/** Max length: 256 */
		UserProfileArn?: string | null;
	}
	export interface CreateUserProfileResponseFormProperties {

		/** Max length: 256 */
		UserProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserProfileResponseFormGroup() {
		return new FormGroup<CreateUserProfileResponseFormProperties>({
			UserProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:user-profile/.*')]),
		});

	}

	export interface CreateUserProfileRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: string;
		SingleSignOnUserIdentifier?: string | null;

		/** Max length: 256 */
		SingleSignOnUserValue?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** A collection of settings. */
		UserSettings?: UserSettings;
	}
	export interface CreateUserProfileRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: FormControl<string | null | undefined>,
		SingleSignOnUserIdentifier: FormControl<string | null | undefined>,

		/** Max length: 256 */
		SingleSignOnUserValue: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserProfileRequestFormGroup() {
		return new FormGroup<CreateUserProfileRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			SingleSignOnUserIdentifier: new FormControl<string | null | undefined>(undefined),
			SingleSignOnUserValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface CreateWorkteamResponse {

		/** Max length: 256 */
		WorkteamArn?: string | null;
	}
	export interface CreateWorkteamResponseFormProperties {

		/** Max length: 256 */
		WorkteamArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkteamResponseFormGroup() {
		return new FormGroup<CreateWorkteamResponseFormProperties>({
			WorkteamArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workteam/.*')]),
		});

	}

	export interface CreateWorkteamRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		MemberDefinitions: Array<MemberDefinition>;

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Description: string;

		/** Configures SNS notifications of available or expiring work items for work teams. */
		NotificationConfiguration?: NotificationConfiguration;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateWorkteamRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkteamRequestFormGroup() {
		return new FormGroup<CreateWorkteamRequestFormProperties>({
			WorkteamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(200), Validators.minLength(1), Validators.pattern('.+')]),
		});

	}


	/** Defines the Amazon Cognito user group that is part of a work team. */
	export interface MemberDefinition {

		/** Identifies a Amazon Cognito user group. A user group can be used in on or more work teams. */
		CognitoMemberDefinition?: CognitoMemberDefinition;
	}

	/** Defines the Amazon Cognito user group that is part of a work team. */
	export interface MemberDefinitionFormProperties {
	}
	export function CreateMemberDefinitionFormGroup() {
		return new FormGroup<MemberDefinitionFormProperties>({
		});

	}


	/** Identifies a Amazon Cognito user group. A user group can be used in on or more work teams. */
	export interface CognitoMemberDefinition {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPool: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		UserGroup: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: string;
	}

	/** Identifies a Amazon Cognito user group. A user group can be used in on or more work teams. */
	export interface CognitoMemberDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 55
		 * Min length: 1
		 */
		UserPool: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		UserGroup: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
	}
	export function CreateCognitoMemberDefinitionFormGroup() {
		return new FormGroup<CognitoMemberDefinitionFormProperties>({
			UserPool: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(55), Validators.minLength(1), Validators.pattern('[\w-]+_[0-9a-zA-Z]+')]),
			UserGroup: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\p{L}\p{M}\p{S}\p{N}\p{P}]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+]+')]),
		});

	}


	/** Configures SNS notifications of available or expiring work items for work teams. */
	export interface NotificationConfiguration {
		NotificationTopicArn?: string | null;
	}

	/** Configures SNS notifications of available or expiring work items for work teams. */
	export interface NotificationConfigurationFormProperties {
		NotificationTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateNotificationConfigurationFormGroup() {
		return new FormGroup<NotificationConfigurationFormProperties>({
			NotificationTopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAlgorithmInput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlgorithmName: string;
	}
	export interface DeleteAlgorithmInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlgorithmName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAlgorithmInputFormGroup() {
		return new FormGroup<DeleteAlgorithmInputFormProperties>({
			AlgorithmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface DeleteAppRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: string;

		/** Required */
		AppType: CreateAppRequestAppType;

		/**
		 * Required
		 * Max length: 63
		 */
		AppName: string;
	}
	export interface DeleteAppRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: FormControl<string | null | undefined>,

		/** Required */
		AppType: FormControl<CreateAppRequestAppType | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		AppName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppRequestFormGroup() {
		return new FormGroup<DeleteAppRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			AppType: new FormControl<CreateAppRequestAppType | null | undefined>(undefined, [Validators.required]),
			AppName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteCodeRepositoryInput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: string;
	}
	export interface DeleteCodeRepositoryInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCodeRepositoryInputFormGroup() {
		return new FormGroup<DeleteCodeRepositoryInputFormProperties>({
			CodeRepositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface DeleteDomainRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/** The retention policy for data stored on an Amazon Elastic File System (EFS) volume. */
		RetentionPolicy?: RetentionPolicy;
	}
	export interface DeleteDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
		});

	}


	/** The retention policy for data stored on an Amazon Elastic File System (EFS) volume. */
	export interface RetentionPolicy {
		HomeEfsFileSystem?: RetentionPolicyHomeEfsFileSystem | null;
	}

	/** The retention policy for data stored on an Amazon Elastic File System (EFS) volume. */
	export interface RetentionPolicyFormProperties {
		HomeEfsFileSystem: FormControl<RetentionPolicyHomeEfsFileSystem | null | undefined>,
	}
	export function CreateRetentionPolicyFormGroup() {
		return new FormGroup<RetentionPolicyFormProperties>({
			HomeEfsFileSystem: new FormControl<RetentionPolicyHomeEfsFileSystem | null | undefined>(undefined),
		});

	}

	export enum RetentionPolicyHomeEfsFileSystem { Retain = 0, Delete = 1 }

	export interface DeleteEndpointInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: string;
	}
	export interface DeleteEndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointInputFormGroup() {
		return new FormGroup<DeleteEndpointInputFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteEndpointConfigInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: string;
	}
	export interface DeleteEndpointConfigInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointConfigInputFormGroup() {
		return new FormGroup<DeleteEndpointConfigInputFormProperties>({
			EndpointConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteExperimentResponse {

		/** Max length: 256 */
		ExperimentArn?: string | null;
	}
	export interface DeleteExperimentResponseFormProperties {

		/** Max length: 256 */
		ExperimentArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteExperimentResponseFormGroup() {
		return new FormGroup<DeleteExperimentResponseFormProperties>({
			ExperimentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment/.*')]),
		});

	}

	export interface DeleteExperimentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: string;
	}
	export interface DeleteExperimentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteExperimentRequestFormGroup() {
		return new FormGroup<DeleteExperimentRequestFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteFlowDefinitionResponse {
	}
	export interface DeleteFlowDefinitionResponseFormProperties {
	}
	export function CreateDeleteFlowDefinitionResponseFormGroup() {
		return new FormGroup<DeleteFlowDefinitionResponseFormProperties>({
		});

	}

	export interface DeleteFlowDefinitionRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: string;
	}
	export interface DeleteFlowDefinitionRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFlowDefinitionRequestFormGroup() {
		return new FormGroup<DeleteFlowDefinitionRequestFormProperties>({
			FlowDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
		});

	}

	export interface DeleteModelInput {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: string;
	}
	export interface DeleteModelInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteModelInputFormGroup() {
		return new FormGroup<DeleteModelInputFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteModelPackageInput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ModelPackageName: string;
	}
	export interface DeleteModelPackageInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ModelPackageName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteModelPackageInputFormGroup() {
		return new FormGroup<DeleteModelPackageInputFormProperties>({
			ModelPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface DeleteMonitoringScheduleRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;
	}
	export interface DeleteMonitoringScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMonitoringScheduleRequestFormGroup() {
		return new FormGroup<DeleteMonitoringScheduleRequestFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface DeleteNotebookInstanceInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: string;
	}
	export interface DeleteNotebookInstanceInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotebookInstanceInputFormGroup() {
		return new FormGroup<DeleteNotebookInstanceInputFormProperties>({
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteNotebookInstanceLifecycleConfigInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: string;
	}
	export interface DeleteNotebookInstanceLifecycleConfigInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNotebookInstanceLifecycleConfigInputFormGroup() {
		return new FormGroup<DeleteNotebookInstanceLifecycleConfigInputFormProperties>({
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteTagsOutput {
	}
	export interface DeleteTagsOutputFormProperties {
	}
	export function CreateDeleteTagsOutputFormGroup() {
		return new FormGroup<DeleteTagsOutputFormProperties>({
		});

	}

	export interface DeleteTagsInput {

		/**
		 * Required
		 * Max length: 256
		 */
		ResourceArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}
	export interface DeleteTagsInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTagsInputFormGroup() {
		return new FormGroup<DeleteTagsInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:.*')]),
		});

	}

	export interface DeleteTrialResponse {

		/** Max length: 256 */
		TrialArn?: string | null;
	}
	export interface DeleteTrialResponseFormProperties {

		/** Max length: 256 */
		TrialArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTrialResponseFormGroup() {
		return new FormGroup<DeleteTrialResponseFormProperties>({
			TrialArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial/.*')]),
		});

	}

	export interface DeleteTrialRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: string;
	}
	export interface DeleteTrialRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTrialRequestFormGroup() {
		return new FormGroup<DeleteTrialRequestFormProperties>({
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteTrialComponentResponse {

		/** Max length: 256 */
		TrialComponentArn?: string | null;
	}
	export interface DeleteTrialComponentResponseFormProperties {

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTrialComponentResponseFormGroup() {
		return new FormGroup<DeleteTrialComponentResponseFormProperties>({
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
		});

	}

	export interface DeleteTrialComponentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: string;
	}
	export interface DeleteTrialComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTrialComponentRequestFormGroup() {
		return new FormGroup<DeleteTrialComponentRequestFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteUserProfileRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: string;
	}
	export interface DeleteUserProfileRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserProfileRequestFormGroup() {
		return new FormGroup<DeleteUserProfileRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DeleteWorkteamResponse {

		/** Required */
		Success: boolean;
	}
	export interface DeleteWorkteamResponseFormProperties {

		/** Required */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteWorkteamResponseFormGroup() {
		return new FormGroup<DeleteWorkteamResponseFormProperties>({
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkteamRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: string;
	}
	export interface DeleteWorkteamRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkteamRequestFormGroup() {
		return new FormGroup<DeleteWorkteamRequestFormProperties>({
			WorkteamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeAlgorithmOutput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlgorithmName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		AlgorithmArn: string;

		/** Max length: 1024 */
		AlgorithmDescription?: string | null;

		/** Required */
		CreationTime: Date;

		/**
		 * Defines how the algorithm is used for a training job.
		 * Required
		 */
		TrainingSpecification: TrainingSpecification;

		/** Defines how to perform inference generation after a training job is run. */
		InferenceSpecification?: InferenceSpecification;

		/** Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm. */
		ValidationSpecification?: AlgorithmValidationSpecification;

		/** Required */
		AlgorithmStatus: DescribeAlgorithmOutputAlgorithmStatus;

		/**
		 * Specifies the validation and image scan statuses of the algorithm.
		 * Required
		 */
		AlgorithmStatusDetails: AlgorithmStatusDetails;

		/** Max length: 256 */
		ProductId?: string | null;
		CertifyForMarketplace?: boolean | null;
	}
	export interface DescribeAlgorithmOutputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlgorithmName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		AlgorithmArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		AlgorithmDescription: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		AlgorithmStatus: FormControl<DescribeAlgorithmOutputAlgorithmStatus | null | undefined>,

		/** Max length: 256 */
		ProductId: FormControl<string | null | undefined>,
		CertifyForMarketplace: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeAlgorithmOutputFormGroup() {
		return new FormGroup<DescribeAlgorithmOutputFormProperties>({
			AlgorithmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			AlgorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:algorithm/.*')]),
			AlgorithmDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			AlgorithmStatus: new FormControl<DescribeAlgorithmOutputAlgorithmStatus | null | undefined>(undefined, [Validators.required]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			CertifyForMarketplace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DescribeAlgorithmOutputAlgorithmStatus { Pending = 0, InProgress = 1, Completed = 2, Failed = 3, Deleting = 4 }


	/** Specifies the validation and image scan statuses of the algorithm. */
	export interface AlgorithmStatusDetails {
		ValidationStatuses?: Array<AlgorithmStatusItem>;
		ImageScanStatuses?: Array<AlgorithmStatusItem>;
	}

	/** Specifies the validation and image scan statuses of the algorithm. */
	export interface AlgorithmStatusDetailsFormProperties {
	}
	export function CreateAlgorithmStatusDetailsFormGroup() {
		return new FormGroup<AlgorithmStatusDetailsFormProperties>({
		});

	}


	/** Represents the overall status of an algorithm. */
	export interface AlgorithmStatusItem {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Status: AlgorithmStatusItemStatus;
		FailureReason?: string | null;
	}

	/** Represents the overall status of an algorithm. */
	export interface AlgorithmStatusItemFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<AlgorithmStatusItemStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateAlgorithmStatusItemFormGroup() {
		return new FormGroup<AlgorithmStatusItemFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			Status: new FormControl<AlgorithmStatusItemStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlgorithmStatusItemStatus { NotStarted = 0, InProgress = 1, Completed = 2, Failed = 3 }

	export interface DescribeAlgorithmInput {

		/**
		 * Required
		 * Max length: 170
		 * Min length: 1
		 */
		AlgorithmName: string;
	}
	export interface DescribeAlgorithmInputFormProperties {

		/**
		 * Required
		 * Max length: 170
		 * Min length: 1
		 */
		AlgorithmName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAlgorithmInputFormGroup() {
		return new FormGroup<DescribeAlgorithmInputFormProperties>({
			AlgorithmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(170), Validators.minLength(1), Validators.pattern('(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$')]),
		});

	}

	export interface DescribeAppResponse {

		/** Max length: 256 */
		AppArn?: string | null;
		AppType?: CreateAppRequestAppType | null;

		/** Max length: 63 */
		AppName?: string | null;

		/** Max length: 63 */
		DomainId?: string | null;

		/** Max length: 63 */
		UserProfileName?: string | null;
		Status?: DescribeAppResponseStatus | null;
		LastHealthCheckTimestamp?: Date | null;
		LastUserActivityTimestamp?: Date | null;
		CreationTime?: Date | null;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. The ARN is stored as metadata in SageMaker Studio notebooks. */
		ResourceSpec?: ResourceSpec;
	}
	export interface DescribeAppResponseFormProperties {

		/** Max length: 256 */
		AppArn: FormControl<string | null | undefined>,
		AppType: FormControl<CreateAppRequestAppType | null | undefined>,

		/** Max length: 63 */
		AppName: FormControl<string | null | undefined>,

		/** Max length: 63 */
		DomainId: FormControl<string | null | undefined>,

		/** Max length: 63 */
		UserProfileName: FormControl<string | null | undefined>,
		Status: FormControl<DescribeAppResponseStatus | null | undefined>,
		LastHealthCheckTimestamp: FormControl<Date | null | undefined>,
		LastUserActivityTimestamp: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppResponseFormGroup() {
		return new FormGroup<DescribeAppResponseFormProperties>({
			AppArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:app/.*')]),
			AppType: new FormControl<CreateAppRequestAppType | null | undefined>(undefined),
			AppName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Status: new FormControl<DescribeAppResponseStatus | null | undefined>(undefined),
			LastHealthCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUserActivityTimestamp: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export enum DescribeAppResponseStatus { Deleted = 0, Deleting = 1, Failed = 2, InService = 3, Pending = 4 }

	export interface DescribeAppRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: string;

		/** Required */
		AppType: CreateAppRequestAppType;

		/**
		 * Required
		 * Max length: 63
		 */
		AppName: string;
	}
	export interface DescribeAppRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: FormControl<string | null | undefined>,

		/** Required */
		AppType: FormControl<CreateAppRequestAppType | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		AppName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppRequestFormGroup() {
		return new FormGroup<DescribeAppRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			AppType: new FormControl<CreateAppRequestAppType | null | undefined>(undefined, [Validators.required]),
			AppName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeAutoMLJobResponse {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		InputDataConfig: Array<AutoMLChannel>;

		/**
		 * The output data configuration.
		 * Required
		 */
		OutputDataConfig: AutoMLOutputDataConfig;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Applies a metric to minimize or maximize for the job's objective. */
		AutoMLJobObjective?: AutoMLJobObjective;
		ProblemType?: CreateAutoMLJobRequestProblemType | null;

		/** A collection of settings used for a job. */
		AutoMLJobConfig?: AutoMLJobConfig;

		/** Required */
		CreationTime: Date;
		EndTime?: Date | null;

		/** Required */
		LastModifiedTime: Date;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** An AutoPilot job will return recommendations, or candidates. Each candidate has futher details about the steps involed, and the status. */
		BestCandidate?: AutoMLCandidate;

		/** Required */
		AutoMLJobStatus: AutoMLCandidateCandidateStatus;

		/** Required */
		AutoMLJobSecondaryStatus: DescribeAutoMLJobResponseAutoMLJobSecondaryStatus;
		GenerateCandidateDefinitionsOnly?: boolean | null;

		/** Artifacts that are generation during a job. */
		AutoMLJobArtifacts?: AutoMLJobArtifacts;

		/** The resolved attributes. */
		ResolvedAttributes?: ResolvedAttributes;
	}
	export interface DescribeAutoMLJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
		ProblemType: FormControl<CreateAutoMLJobRequestProblemType | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/** Required */
		AutoMLJobStatus: FormControl<AutoMLCandidateCandidateStatus | null | undefined>,

		/** Required */
		AutoMLJobSecondaryStatus: FormControl<DescribeAutoMLJobResponseAutoMLJobSecondaryStatus | null | undefined>,
		GenerateCandidateDefinitionsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeAutoMLJobResponseFormGroup() {
		return new FormGroup<DescribeAutoMLJobResponseFormProperties>({
			AutoMLJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			AutoMLJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:automl-job/.*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			ProblemType: new FormControl<CreateAutoMLJobRequestProblemType | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			AutoMLJobStatus: new FormControl<AutoMLCandidateCandidateStatus | null | undefined>(undefined, [Validators.required]),
			AutoMLJobSecondaryStatus: new FormControl<DescribeAutoMLJobResponseAutoMLJobSecondaryStatus | null | undefined>(undefined, [Validators.required]),
			GenerateCandidateDefinitionsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An AutoPilot job will return recommendations, or candidates. Each candidate has futher details about the steps involed, and the status. */
	export interface AutoMLCandidate {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CandidateName: string;

		/** The candidate result from a job. */
		FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric;

		/** Required */
		ObjectiveStatus: AutoMLCandidateObjectiveStatus;

		/** Required */
		CandidateSteps: Array<AutoMLCandidateStep>;

		/** Required */
		CandidateStatus: AutoMLCandidateCandidateStatus;

		/** Maximum items: 5 */
		InferenceContainers?: Array<AutoMLContainerDefinition>;

		/** Required */
		CreationTime: Date;
		EndTime?: Date | null;

		/** Required */
		LastModifiedTime: Date;

		/** Max length: 1024 */
		FailureReason?: string | null;
	}

	/** An AutoPilot job will return recommendations, or candidates. Each candidate has futher details about the steps involed, and the status. */
	export interface AutoMLCandidateFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CandidateName: FormControl<string | null | undefined>,

		/** Required */
		ObjectiveStatus: FormControl<AutoMLCandidateObjectiveStatus | null | undefined>,

		/** Required */
		CandidateStatus: FormControl<AutoMLCandidateCandidateStatus | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLCandidateFormGroup() {
		return new FormGroup<AutoMLCandidateFormProperties>({
			CandidateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			ObjectiveStatus: new FormControl<AutoMLCandidateObjectiveStatus | null | undefined>(undefined, [Validators.required]),
			CandidateStatus: new FormControl<AutoMLCandidateCandidateStatus | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** The candidate result from a job. */
	export interface FinalAutoMLJobObjectiveMetric {
		Type?: HyperParameterTuningJobObjectiveType | null;

		/** Required */
		MetricName: AutoMLJobObjectiveMetricName;

		/** Required */
		Value: number;
	}

	/** The candidate result from a job. */
	export interface FinalAutoMLJobObjectiveMetricFormProperties {
		Type: FormControl<HyperParameterTuningJobObjectiveType | null | undefined>,

		/** Required */
		MetricName: FormControl<AutoMLJobObjectiveMetricName | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateFinalAutoMLJobObjectiveMetricFormGroup() {
		return new FormGroup<FinalAutoMLJobObjectiveMetricFormProperties>({
			Type: new FormControl<HyperParameterTuningJobObjectiveType | null | undefined>(undefined),
			MetricName: new FormControl<AutoMLJobObjectiveMetricName | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutoMLCandidateObjectiveStatus { Succeeded = 0, Pending = 1, Failed = 2 }


	/** Information about the steps for a Candidate, and what step it is working on. */
	export interface AutoMLCandidateStep {

		/** Required */
		CandidateStepType: AutoMLCandidateStepCandidateStepType;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		CandidateStepArn: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CandidateStepName: string;
	}

	/** Information about the steps for a Candidate, and what step it is working on. */
	export interface AutoMLCandidateStepFormProperties {

		/** Required */
		CandidateStepType: FormControl<AutoMLCandidateStepCandidateStepType | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		CandidateStepArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		CandidateStepName: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLCandidateStepFormGroup() {
		return new FormGroup<AutoMLCandidateStepFormProperties>({
			CandidateStepType: new FormControl<AutoMLCandidateStepCandidateStepType | null | undefined>(undefined, [Validators.required]),
			CandidateStepArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:.*/.*')]),
			CandidateStepName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export enum AutoMLCandidateStepCandidateStepType { AWSSageMakerTrainingJob = 0, AWSSageMakerTransformJob = 1, AWSSageMakerProcessingJob = 2 }

	export enum AutoMLCandidateCandidateStatus { Completed = 0, InProgress = 1, Failed = 2, Stopped = 3, Stopping = 4 }


	/** A list of container definitions that describe the different containers that make up one AutoML candidate. Refer to ContainerDefinition for more details. */
	export interface AutoMLContainerDefinition {

		/**
		 * Required
		 * Max length: 255
		 */
		Image: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		ModelDataUrl: string;
		Environment?: EnvironmentMap;
	}

	/** A list of container definitions that describe the different containers that make up one AutoML candidate. Refer to ContainerDefinition for more details. */
	export interface AutoMLContainerDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		Image: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		ModelDataUrl: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLContainerDefinitionFormGroup() {
		return new FormGroup<AutoMLContainerDefinitionFormProperties>({
			Image: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.pattern('[\S]+')]),
			ModelDataUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}

	export enum DescribeAutoMLJobResponseAutoMLJobSecondaryStatus { Starting = 0, AnalyzingData = 1, FeatureEngineering = 2, ModelTuning = 3, MaxCandidatesReached = 4, Failed = 5, Stopped = 6, MaxAutoMLJobRuntimeReached = 7, Stopping = 8, CandidateDefinitionsGenerated = 9 }


	/** Artifacts that are generation during a job. */
	export interface AutoMLJobArtifacts {

		/** Min length: 1 */
		CandidateDefinitionNotebookLocation?: string | null;

		/** Min length: 1 */
		DataExplorationNotebookLocation?: string | null;
	}

	/** Artifacts that are generation during a job. */
	export interface AutoMLJobArtifactsFormProperties {

		/** Min length: 1 */
		CandidateDefinitionNotebookLocation: FormControl<string | null | undefined>,

		/** Min length: 1 */
		DataExplorationNotebookLocation: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLJobArtifactsFormGroup() {
		return new FormGroup<AutoMLJobArtifactsFormProperties>({
			CandidateDefinitionNotebookLocation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			DataExplorationNotebookLocation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** The resolved attributes. */
	export interface ResolvedAttributes {

		/** Applies a metric to minimize or maximize for the job's objective. */
		AutoMLJobObjective?: AutoMLJobObjective;
		ProblemType?: CreateAutoMLJobRequestProblemType | null;

		/** How long a job is allowed to run, or how many candidates a job is allowed to generate. */
		CompletionCriteria?: AutoMLJobCompletionCriteria;
	}

	/** The resolved attributes. */
	export interface ResolvedAttributesFormProperties {
		ProblemType: FormControl<CreateAutoMLJobRequestProblemType | null | undefined>,
	}
	export function CreateResolvedAttributesFormGroup() {
		return new FormGroup<ResolvedAttributesFormProperties>({
			ProblemType: new FormControl<CreateAutoMLJobRequestProblemType | null | undefined>(undefined),
		});

	}

	export interface DescribeAutoMLJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: string;
	}
	export interface DescribeAutoMLJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAutoMLJobRequestFormGroup() {
		return new FormGroup<DescribeAutoMLJobRequestFormProperties>({
			AutoMLJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeCodeRepositoryOutput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		CodeRepositoryArn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/** Specifies configuration details for a Git repository in your AWS account. */
		GitConfig?: GitConfig;
	}
	export interface DescribeCodeRepositoryOutputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		CodeRepositoryArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeCodeRepositoryOutputFormGroup() {
		return new FormGroup<DescribeCodeRepositoryOutputFormProperties>({
			CodeRepositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			CodeRepositoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:code-repository/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCodeRepositoryInput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: string;
	}
	export interface DescribeCodeRepositoryInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCodeRepositoryInputFormGroup() {
		return new FormGroup<DescribeCodeRepositoryInputFormProperties>({
			CodeRepositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface DescribeCompilationJobResponse {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		CompilationJobArn: string;

		/** Required */
		CompilationJobStatus: DescribeCompilationJobResponseCompilationJobStatus;
		CompilationStartTime?: Date | null;
		CompilationEndTime?: Date | null;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/**
		 * Required
		 * Max length: 1024
		 */
		FailureReason: string;

		/**
		 * <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p>
		 * Required
		 */
		ModelArtifacts: ModelArtifacts;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
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
	export interface DescribeCompilationJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		CompilationJobArn: FormControl<string | null | undefined>,

		/** Required */
		CompilationJobStatus: FormControl<DescribeCompilationJobResponseCompilationJobStatus | null | undefined>,
		CompilationStartTime: FormControl<Date | null | undefined>,
		CompilationEndTime: FormControl<Date | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		FailureReason: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCompilationJobResponseFormGroup() {
		return new FormGroup<DescribeCompilationJobResponseFormProperties>({
			CompilationJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			CompilationJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:compilation-job/.*')]),
			CompilationJobStatus: new FormControl<DescribeCompilationJobResponseCompilationJobStatus | null | undefined>(undefined, [Validators.required]),
			CompilationStartTime: new FormControl<Date | null | undefined>(undefined),
			CompilationEndTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}

	export enum DescribeCompilationJobResponseCompilationJobStatus { INPROGRESS = 0, COMPLETED = 1, FAILED = 2, STARTING = 3, STOPPING = 4, STOPPED = 5 }


	/** <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p> */
	export interface ModelArtifacts {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3ModelArtifacts: string;
	}

	/** <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p> */
	export interface ModelArtifactsFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		S3ModelArtifacts: FormControl<string | null | undefined>,
	}
	export function CreateModelArtifactsFormGroup() {
		return new FormGroup<ModelArtifactsFormProperties>({
			S3ModelArtifacts: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}

	export interface DescribeCompilationJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: string;
	}
	export interface DescribeCompilationJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCompilationJobRequestFormGroup() {
		return new FormGroup<DescribeCompilationJobRequestFormProperties>({
			CompilationJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface DescribeDomainResponse {

		/** Max length: 256 */
		DomainArn?: string | null;

		/** Max length: 63 */
		DomainId?: string | null;

		/** Max length: 63 */
		DomainName?: string | null;

		/** Max length: 32 */
		HomeEfsFileSystemId?: string | null;

		/** Max length: 256 */
		SingleSignOnManagedApplicationInstanceId?: string | null;
		Status?: DescribeDomainResponseStatus | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;

		/** Max length: 1024 */
		FailureReason?: string | null;
		AuthMode?: CreateDomainRequestAuthMode | null;

		/** A collection of settings. */
		DefaultUserSettings?: UserSettings;

		/** Max length: 2048 */
		HomeEfsFileSystemKmsKeyId?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		SubnetIds?: Array<string>;

		/** Max length: 1024 */
		Url?: string | null;

		/** Max length: 32 */
		VpcId?: string | null;
	}
	export interface DescribeDomainResponseFormProperties {

		/** Max length: 256 */
		DomainArn: FormControl<string | null | undefined>,

		/** Max length: 63 */
		DomainId: FormControl<string | null | undefined>,

		/** Max length: 63 */
		DomainName: FormControl<string | null | undefined>,

		/** Max length: 32 */
		HomeEfsFileSystemId: FormControl<string | null | undefined>,

		/** Max length: 256 */
		SingleSignOnManagedApplicationInstanceId: FormControl<string | null | undefined>,
		Status: FormControl<DescribeDomainResponseStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
		AuthMode: FormControl<CreateDomainRequestAuthMode | null | undefined>,

		/** Max length: 2048 */
		HomeEfsFileSystemKmsKeyId: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		Url: FormControl<string | null | undefined>,

		/** Max length: 32 */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainResponseFormGroup() {
		return new FormGroup<DescribeDomainResponseFormProperties>({
			DomainArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:domain/.*')]),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			HomeEfsFileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32)]),
			SingleSignOnManagedApplicationInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			Status: new FormControl<DescribeDomainResponseStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			AuthMode: new FormControl<CreateDomainRequestAuthMode | null | undefined>(undefined),
			HomeEfsFileSystemKmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.pattern('[-0-9a-zA-Z]+')]),
		});

	}

	export enum DescribeDomainResponseStatus { Deleting = 0, Failed = 1, InService = 2, Pending = 3 }

	export interface DescribeDomainRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;
	}
	export interface DescribeDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainRequestFormGroup() {
		return new FormGroup<DescribeDomainRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
		});

	}

	export interface DescribeEndpointOutput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: string;

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: string;

		/** Minimum items: 1 */
		ProductionVariants?: Array<ProductionVariantSummary>;

		/** <p/> */
		DataCaptureConfig?: DataCaptureConfigSummary;

		/** Required */
		EndpointStatus: DescribeEndpointOutputEndpointStatus;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;
	}
	export interface DescribeEndpointOutputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: FormControl<string | null | undefined>,

		/** Required */
		EndpointStatus: FormControl<DescribeEndpointOutputEndpointStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeEndpointOutputFormGroup() {
		return new FormGroup<DescribeEndpointOutputFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:endpoint/.*')]),
			EndpointConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			EndpointStatus: new FormControl<DescribeEndpointOutputEndpointStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values.  */
	export interface ProductionVariantSummary {

		/**
		 * Required
		 * Max length: 63
		 */
		VariantName: string;
		DeployedImages?: Array<DeployedImage>;

		/** Minimum: 0 */
		CurrentWeight?: number | null;

		/** Minimum: 0 */
		DesiredWeight?: number | null;

		/** Minimum: 1 */
		CurrentInstanceCount?: number | null;

		/** Minimum: 1 */
		DesiredInstanceCount?: number | null;
	}

	/** Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values.  */
	export interface ProductionVariantSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		VariantName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		CurrentWeight: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		DesiredWeight: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		CurrentInstanceCount: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		DesiredInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateProductionVariantSummaryFormGroup() {
		return new FormGroup<ProductionVariantSummaryFormProperties>({
			VariantName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			CurrentWeight: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			DesiredWeight: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			CurrentInstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			DesiredInstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p> */
	export interface DeployedImage {

		/** Max length: 255 */
		SpecifiedImage?: string | null;

		/** Max length: 255 */
		ResolvedImage?: string | null;
		ResolutionTime?: Date | null;
	}

	/** <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p> */
	export interface DeployedImageFormProperties {

		/** Max length: 255 */
		SpecifiedImage: FormControl<string | null | undefined>,

		/** Max length: 255 */
		ResolvedImage: FormControl<string | null | undefined>,
		ResolutionTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeployedImageFormGroup() {
		return new FormGroup<DeployedImageFormProperties>({
			SpecifiedImage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('[\S]+')]),
			ResolvedImage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('[\S]+')]),
			ResolutionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DataCaptureConfigSummary {

		/** Required */
		EnableCapture: boolean;

		/** Required */
		CaptureStatus: DataCaptureConfigSummaryCaptureStatus;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		CurrentSamplingPercentage: number;

		/**
		 * Required
		 * Max length: 512
		 */
		DestinationS3Uri: string;

		/**
		 * Required
		 * Max length: 2048
		 */
		KmsKeyId: string;
	}

	/** <p/> */
	export interface DataCaptureConfigSummaryFormProperties {

		/** Required */
		EnableCapture: FormControl<boolean | null | undefined>,

		/** Required */
		CaptureStatus: FormControl<DataCaptureConfigSummaryCaptureStatus | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		CurrentSamplingPercentage: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 */
		DestinationS3Uri: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDataCaptureConfigSummaryFormGroup() {
		return new FormGroup<DataCaptureConfigSummaryFormProperties>({
			EnableCapture: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			CaptureStatus: new FormControl<DataCaptureConfigSummaryCaptureStatus | null | undefined>(undefined, [Validators.required]),
			CurrentSamplingPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
			DestinationS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.pattern('^(https|s3)://([^/])/?(.*)$')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}

	export enum DataCaptureConfigSummaryCaptureStatus { Started = 0, Stopped = 1 }

	export enum DescribeEndpointOutputEndpointStatus { OutOfService = 0, Creating = 1, Updating = 2, SystemUpdating = 3, RollingBack = 4, InService = 5, Deleting = 6, Failed = 7 }

	export interface DescribeEndpointInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: string;
	}
	export interface DescribeEndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointInputFormGroup() {
		return new FormGroup<DescribeEndpointInputFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeEndpointConfigOutput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointConfigArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		ProductionVariants: Array<ProductionVariant>;

		/** <p/> */
		DataCaptureConfig?: DataCaptureConfig;

		/** Max length: 2048 */
		KmsKeyId?: string | null;

		/** Required */
		CreationTime: Date;
	}
	export interface DescribeEndpointConfigOutputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointConfigArn: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeEndpointConfigOutputFormGroup() {
		return new FormGroup<DescribeEndpointConfigOutputFormProperties>({
			EndpointConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			EndpointConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:endpoint-config/.*')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEndpointConfigInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: string;
	}
	export interface DescribeEndpointConfigInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointConfigInputFormGroup() {
		return new FormGroup<DescribeEndpointConfigInputFormProperties>({
			EndpointConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeExperimentResponse {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;

		/** Max length: 256 */
		ExperimentArn?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** The source of the experiment. */
		Source?: ExperimentSource;

		/** Max length: 3072 */
		Description?: string | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext;
	}
	export interface DescribeExperimentResponseFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ExperimentArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** Max length: 3072 */
		Description: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeExperimentResponseFormGroup() {
		return new FormGroup<DescribeExperimentResponseFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ExperimentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment/.*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3072), Validators.pattern('.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The source of the experiment. */
	export interface ExperimentSource {

		/**
		 * Required
		 * Max length: 256
		 */
		SourceArn: string;

		/** Max length: 128 */
		SourceType?: string | null;
	}

	/** The source of the experiment. */
	export interface ExperimentSourceFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		SourceArn: FormControl<string | null | undefined>,

		/** Max length: 128 */
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateExperimentSourceFormGroup() {
		return new FormGroup<ExperimentSourceFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:.*')]),
			SourceType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}


	/** Information about the user who created or modified an experiment, trial, or trial component. */
	export interface UserContext {
		UserProfileArn?: string | null;
		UserProfileName?: string | null;
		DomainId?: string | null;
	}

	/** Information about the user who created or modified an experiment, trial, or trial component. */
	export interface UserContextFormProperties {
		UserProfileArn: FormControl<string | null | undefined>,
		UserProfileName: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
	}
	export function CreateUserContextFormGroup() {
		return new FormGroup<UserContextFormProperties>({
			UserProfileArn: new FormControl<string | null | undefined>(undefined),
			UserProfileName: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeExperimentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: string;
	}
	export interface DescribeExperimentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExperimentRequestFormGroup() {
		return new FormGroup<DescribeExperimentRequestFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeFlowDefinitionResponse {

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: string;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: string;

		/** Required */
		FlowDefinitionStatus: DescribeFlowDefinitionResponseFlowDefinitionStatus;

		/** Required */
		CreationTime: Date;

		/** Container for configuring the source of human task requests. */
		HumanLoopRequestSource?: HumanLoopRequestSource;

		/** Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans. */
		HumanLoopActivationConfig?: HumanLoopActivationConfig;

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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Max length: 1024 */
		FailureReason?: string | null;
	}
	export interface DescribeFlowDefinitionResponseFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: FormControl<string | null | undefined>,

		/** Required */
		FlowDefinitionStatus: FormControl<DescribeFlowDefinitionResponseFlowDefinitionStatus | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlowDefinitionResponseFormGroup() {
		return new FormGroup<DescribeFlowDefinitionResponseFormProperties>({
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition/.*')]),
			FlowDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
			FlowDefinitionStatus: new FormControl<DescribeFlowDefinitionResponseFlowDefinitionStatus | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export enum DescribeFlowDefinitionResponseFlowDefinitionStatus { Initializing = 0, Active = 1, Failed = 2, Deleting = 3 }

	export interface DescribeFlowDefinitionRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: string;
	}
	export interface DescribeFlowDefinitionRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlowDefinitionRequestFormGroup() {
		return new FormGroup<DescribeFlowDefinitionRequestFormProperties>({
			FlowDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
		});

	}

	export interface DescribeHumanTaskUiResponse {

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanTaskUiArn: string;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanTaskUiName: string;

		/** Required */
		CreationTime: Date;

		/**
		 * Container for user interface template information.
		 * Required
		 */
		UiTemplate: UiTemplateInfo;
	}
	export interface DescribeHumanTaskUiResponseFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanTaskUiArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanTaskUiName: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeHumanTaskUiResponseFormGroup() {
		return new FormGroup<DescribeHumanTaskUiResponseFormProperties>({
			HumanTaskUiArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-task-ui/.*')]),
			HumanTaskUiName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Container for user interface template information. */
	export interface UiTemplateInfo {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Url?: string | null;

		/**
		 * Max length: 128000
		 * Min length: 1
		 */
		ContentSha256?: string | null;
	}

	/** Container for user interface template information. */
	export interface UiTemplateInfoFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Url: FormControl<string | null | undefined>,

		/**
		 * Max length: 128000
		 * Min length: 1
		 */
		ContentSha256: FormControl<string | null | undefined>,
	}
	export function CreateUiTemplateInfoFormGroup() {
		return new FormGroup<UiTemplateInfoFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			ContentSha256: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128000), Validators.minLength(1)]),
		});

	}

	export interface DescribeHumanTaskUiRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanTaskUiName: string;
	}
	export interface DescribeHumanTaskUiRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanTaskUiName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHumanTaskUiRequestFormGroup() {
		return new FormGroup<DescribeHumanTaskUiRequestFormProperties>({
			HumanTaskUiName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
		});

	}

	export interface DescribeHyperParameterTuningJobResponse {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		HyperParameterTuningJobArn: string;

		/**
		 * Configures a hyperparameter tuning job.
		 * Required
		 */
		HyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

		/** Defines the training jobs launched by a hyperparameter tuning job. */
		TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		TrainingJobDefinitions?: Array<HyperParameterTrainingJobDefinition>;

		/** Required */
		HyperParameterTuningJobStatus: AutoMLCandidateCandidateStatus;

		/** Required */
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
		BestTrainingJob?: HyperParameterTrainingJobSummary;

		/** Specifies summary information about a training job. */
		OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

		/** <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note> */
		WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

		/** Max length: 1024 */
		FailureReason?: string | null;
	}
	export interface DescribeHyperParameterTuningJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		HyperParameterTuningJobArn: FormControl<string | null | undefined>,

		/** Required */
		HyperParameterTuningJobStatus: FormControl<AutoMLCandidateCandidateStatus | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		HyperParameterTuningEndTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHyperParameterTuningJobResponseFormGroup() {
		return new FormGroup<DescribeHyperParameterTuningJobResponseFormProperties>({
			HyperParameterTuningJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			HyperParameterTuningJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:hyper-parameter-tuning-job/.*')]),
			HyperParameterTuningJobStatus: new FormControl<AutoMLCandidateCandidateStatus | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			HyperParameterTuningEndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}


	/** The numbers of training jobs launched by a hyperparameter tuning job, categorized by status. */
	export interface TrainingJobStatusCounters {

		/** Minimum: 0 */
		Completed?: number | null;

		/** Minimum: 0 */
		InProgress?: number | null;

		/** Minimum: 0 */
		RetryableError?: number | null;

		/** Minimum: 0 */
		NonRetryableError?: number | null;

		/** Minimum: 0 */
		Stopped?: number | null;
	}

	/** The numbers of training jobs launched by a hyperparameter tuning job, categorized by status. */
	export interface TrainingJobStatusCountersFormProperties {

		/** Minimum: 0 */
		Completed: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		InProgress: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		RetryableError: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		NonRetryableError: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		Stopped: FormControl<number | null | undefined>,
	}
	export function CreateTrainingJobStatusCountersFormGroup() {
		return new FormGroup<TrainingJobStatusCountersFormProperties>({
			Completed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			InProgress: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RetryableError: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			NonRetryableError: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Stopped: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process. */
	export interface ObjectiveStatusCounters {

		/** Minimum: 0 */
		Succeeded?: number | null;

		/** Minimum: 0 */
		Pending?: number | null;

		/** Minimum: 0 */
		Failed?: number | null;
	}

	/** Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process. */
	export interface ObjectiveStatusCountersFormProperties {

		/** Minimum: 0 */
		Succeeded: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		Pending: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		Failed: FormControl<number | null | undefined>,
	}
	export function CreateObjectiveStatusCountersFormGroup() {
		return new FormGroup<ObjectiveStatusCountersFormProperties>({
			Succeeded: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Pending: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Failed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Specifies summary information about a training job. */
	export interface HyperParameterTrainingJobSummary {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TrainingJobDefinitionName?: string | null;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		TrainingJobArn: string;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		TuningJobName?: string | null;

		/** Required */
		CreationTime: Date;
		TrainingStartTime?: Date | null;
		TrainingEndTime?: Date | null;

		/** Required */
		TrainingJobStatus: TrialComponentStatusPrimaryStatus;

		/** Required */
		TunedHyperParameters: HyperParameters;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>. */
		FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;
		ObjectiveStatus?: AutoMLCandidateObjectiveStatus | null;
	}

	/** Specifies summary information about a training job. */
	export interface HyperParameterTrainingJobSummaryFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TrainingJobDefinitionName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		TrainingJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		TuningJobName: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		TrainingStartTime: FormControl<Date | null | undefined>,
		TrainingEndTime: FormControl<Date | null | undefined>,

		/** Required */
		TrainingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
		ObjectiveStatus: FormControl<AutoMLCandidateObjectiveStatus | null | undefined>,
	}
	export function CreateHyperParameterTrainingJobSummaryFormGroup() {
		return new FormGroup<HyperParameterTrainingJobSummaryFormProperties>({
			TrainingJobDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrainingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrainingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-job/.*')]),
			TuningJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TrainingStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingEndTime: new FormControl<Date | null | undefined>(undefined),
			TrainingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			ObjectiveStatus: new FormControl<AutoMLCandidateObjectiveStatus | null | undefined>(undefined),
		});

	}


	/** Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>. */
	export interface FinalHyperParameterTuningJobObjectiveMetric {
		Type?: HyperParameterTuningJobObjectiveType | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: string;

		/** Required */
		Value: number;
	}

	/** Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>. */
	export interface FinalHyperParameterTuningJobObjectiveMetricFormProperties {
		Type: FormControl<HyperParameterTuningJobObjectiveType | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateFinalHyperParameterTuningJobObjectiveMetricFormGroup() {
		return new FormGroup<FinalHyperParameterTuningJobObjectiveMetricFormProperties>({
			Type: new FormControl<HyperParameterTuningJobObjectiveType | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeHyperParameterTuningJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: string;
	}
	export interface DescribeHyperParameterTuningJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHyperParameterTuningJobRequestFormGroup() {
		return new FormGroup<DescribeHyperParameterTuningJobRequestFormProperties>({
			HyperParameterTuningJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeLabelingJobResponse {

		/** Required */
		LabelingJobStatus: TrialComponentStatusPrimaryStatus;

		/**
		 * Provides a breakdown of the number of objects labeled.
		 * Required
		 */
		LabelCounters: LabelCounters;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/**
		 * Required
		 * Min length: 1
		 */
		JobReferenceCode: string;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: string;

		/**
		 * Required
		 * Max length: 2048
		 */
		LabelingJobArn: string;

		/**
		 * Max length: 127
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Max length: 1024 */
		LabelCategoryConfigS3Uri?: string | null;

		/** <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note> */
		StoppingConditions?: LabelingJobStoppingConditions;

		/** Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling. */
		LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

		/**
		 * Information required for human workers to complete a labeling task.
		 * Required
		 */
		HumanTaskConfig: HumanTaskConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Specifies the location of the output produced by the labeling job. */
		LabelingJobOutput?: LabelingJobOutput;
	}
	export interface DescribeLabelingJobResponseFormProperties {

		/** Required */
		LabelingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		JobReferenceCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		LabelingJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 127
		 * Min length: 1
		 */
		LabelAttributeName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		LabelCategoryConfigS3Uri: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLabelingJobResponseFormGroup() {
		return new FormGroup<DescribeLabelingJobResponseFormProperties>({
			LabelingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			JobReferenceCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('.+')]),
			LabelingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			LabelingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:labeling-job/.*')]),
			LabelAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(127), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			LabelCategoryConfigS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
		});

	}


	/** Provides a breakdown of the number of objects labeled. */
	export interface LabelCounters {

		/** Minimum: 0 */
		TotalLabeled?: number | null;

		/** Minimum: 0 */
		HumanLabeled?: number | null;

		/** Minimum: 0 */
		MachineLabeled?: number | null;

		/** Minimum: 0 */
		FailedNonRetryableError?: number | null;

		/** Minimum: 0 */
		Unlabeled?: number | null;
	}

	/** Provides a breakdown of the number of objects labeled. */
	export interface LabelCountersFormProperties {

		/** Minimum: 0 */
		TotalLabeled: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		HumanLabeled: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		MachineLabeled: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		FailedNonRetryableError: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		Unlabeled: FormControl<number | null | undefined>,
	}
	export function CreateLabelCountersFormGroup() {
		return new FormGroup<LabelCountersFormProperties>({
			TotalLabeled: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			HumanLabeled: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MachineLabeled: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			FailedNonRetryableError: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Unlabeled: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Specifies the location of the output produced by the labeling job.  */
	export interface LabelingJobOutput {

		/**
		 * Required
		 * Max length: 1024
		 */
		OutputDatasetS3Uri: string;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		FinalActiveLearningModelArn?: string | null;
	}

	/** Specifies the location of the output produced by the labeling job.  */
	export interface LabelingJobOutputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		OutputDatasetS3Uri: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		FinalActiveLearningModelArn: FormControl<string | null | undefined>,
	}
	export function CreateLabelingJobOutputFormGroup() {
		return new FormGroup<LabelingJobOutputFormProperties>({
			OutputDatasetS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^(https|s3)://([^/]+)/?(.*)$')]),
			FinalActiveLearningModelArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model/.*')]),
		});

	}

	export interface DescribeLabelingJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: string;
	}
	export interface DescribeLabelingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLabelingJobRequestFormGroup() {
		return new FormGroup<DescribeLabelingJobRequestFormProperties>({
			LabelingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeModelOutput {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: string;

		/** Describes the container, as part of model definition. */
		PrimaryContainer?: ContainerDefinition;

		/** Maximum items: 5 */
		Containers?: Array<ContainerDefinition>;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: string;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig;

		/** Required */
		CreationTime: Date;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ModelArn: string;
		EnableNetworkIsolation?: boolean | null;
	}
	export interface DescribeModelOutputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ModelArn: FormControl<string | null | undefined>,
		EnableNetworkIsolation: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeModelOutputFormGroup() {
		return new FormGroup<DescribeModelOutputFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model/.*')]),
			EnableNetworkIsolation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeModelInput {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: string;
	}
	export interface DescribeModelInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeModelInputFormGroup() {
		return new FormGroup<DescribeModelInputFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeModelPackageOutput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ModelPackageName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ModelPackageArn: string;

		/** Max length: 1024 */
		ModelPackageDescription?: string | null;

		/** Required */
		CreationTime: Date;

		/** Defines how to perform inference generation after a training job is run. */
		InferenceSpecification?: InferenceSpecification;

		/** A list of algorithms that were used to create a model package. */
		SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

		/** Specifies batch transform jobs that Amazon SageMaker runs to validate your model package. */
		ValidationSpecification?: ModelPackageValidationSpecification;

		/** Required */
		ModelPackageStatus: DescribeAlgorithmOutputAlgorithmStatus;

		/**
		 * Specifies the validation and image scan statuses of the model package.
		 * Required
		 */
		ModelPackageStatusDetails: ModelPackageStatusDetails;
		CertifyForMarketplace?: boolean | null;
	}
	export interface DescribeModelPackageOutputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ModelPackageName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ModelPackageArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		ModelPackageDescription: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		ModelPackageStatus: FormControl<DescribeAlgorithmOutputAlgorithmStatus | null | undefined>,
		CertifyForMarketplace: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeModelPackageOutputFormGroup() {
		return new FormGroup<DescribeModelPackageOutputFormProperties>({
			ModelPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			ModelPackageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model-package/.*')]),
			ModelPackageDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModelPackageStatus: new FormControl<DescribeAlgorithmOutputAlgorithmStatus | null | undefined>(undefined, [Validators.required]),
			CertifyForMarketplace: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the validation and image scan statuses of the model package. */
	export interface ModelPackageStatusDetails {

		/** Required */
		ValidationStatuses: Array<ModelPackageStatusItem>;
		ImageScanStatuses?: Array<ModelPackageStatusItem>;
	}

	/** Specifies the validation and image scan statuses of the model package. */
	export interface ModelPackageStatusDetailsFormProperties {
	}
	export function CreateModelPackageStatusDetailsFormGroup() {
		return new FormGroup<ModelPackageStatusDetailsFormProperties>({
		});

	}


	/** Represents the overall status of a model package. */
	export interface ModelPackageStatusItem {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Status: AlgorithmStatusItemStatus;
		FailureReason?: string | null;
	}

	/** Represents the overall status of a model package. */
	export interface ModelPackageStatusItemFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<AlgorithmStatusItemStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateModelPackageStatusItemFormGroup() {
		return new FormGroup<ModelPackageStatusItemFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			Status: new FormControl<AlgorithmStatusItemStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeModelPackageInput {

		/**
		 * Required
		 * Max length: 170
		 * Min length: 1
		 */
		ModelPackageName: string;
	}
	export interface DescribeModelPackageInputFormProperties {

		/**
		 * Required
		 * Max length: 170
		 * Min length: 1
		 */
		ModelPackageName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeModelPackageInputFormGroup() {
		return new FormGroup<DescribeModelPackageInputFormProperties>({
			ModelPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(170), Validators.minLength(1), Validators.pattern('(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$')]),
		});

	}

	export interface DescribeMonitoringScheduleResponse {

		/**
		 * Required
		 * Max length: 256
		 */
		MonitoringScheduleArn: string;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;

		/** Required */
		MonitoringScheduleStatus: DescribeMonitoringScheduleResponseMonitoringScheduleStatus;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/**
		 * Configures the monitoring schedule and defines the monitoring job.
		 * Required
		 */
		MonitoringScheduleConfig: MonitoringScheduleConfig;

		/** Max length: 63 */
		EndpointName?: string | null;

		/** Summary of information about the last monitoring job to run. */
		LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
	}
	export interface DescribeMonitoringScheduleResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		MonitoringScheduleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,

		/** Required */
		MonitoringScheduleStatus: FormControl<DescribeMonitoringScheduleResponseMonitoringScheduleStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Max length: 63 */
		EndpointName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMonitoringScheduleResponseFormGroup() {
		return new FormGroup<DescribeMonitoringScheduleResponseFormProperties>({
			MonitoringScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			MonitoringScheduleStatus: new FormControl<DescribeMonitoringScheduleResponseMonitoringScheduleStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export enum DescribeMonitoringScheduleResponseMonitoringScheduleStatus { Pending = 0, Failed = 1, Scheduled = 2, Stopped = 3 }


	/** Summary of information about the last monitoring job to run. */
	export interface MonitoringExecutionSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;

		/** Required */
		ScheduledTime: Date;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		MonitoringExecutionStatus: MonitoringExecutionSummaryMonitoringExecutionStatus;

		/** Max length: 256 */
		ProcessingJobArn?: string | null;

		/** Max length: 63 */
		EndpointName?: string | null;

		/** Max length: 1024 */
		FailureReason?: string | null;
	}

	/** Summary of information about the last monitoring job to run. */
	export interface MonitoringExecutionSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,

		/** Required */
		ScheduledTime: FormControl<Date | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		MonitoringExecutionStatus: FormControl<MonitoringExecutionSummaryMonitoringExecutionStatus | null | undefined>,

		/** Max length: 256 */
		ProcessingJobArn: FormControl<string | null | undefined>,

		/** Max length: 63 */
		EndpointName: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringExecutionSummaryFormGroup() {
		return new FormGroup<MonitoringExecutionSummaryFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			ScheduledTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			MonitoringExecutionStatus: new FormControl<MonitoringExecutionSummaryMonitoringExecutionStatus | null | undefined>(undefined, [Validators.required]),
			ProcessingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:processing-job/.*')]),
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export enum MonitoringExecutionSummaryMonitoringExecutionStatus { Pending = 0, Completed = 1, CompletedWithViolations = 2, InProgress = 3, Failed = 4, Stopping = 5, Stopped = 6 }

	export interface DescribeMonitoringScheduleRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;
	}
	export interface DescribeMonitoringScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMonitoringScheduleRequestFormGroup() {
		return new FormGroup<DescribeMonitoringScheduleRequestFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface DescribeNotebookInstanceOutput {

		/** Max length: 256 */
		NotebookInstanceArn?: string | null;

		/** Max length: 63 */
		NotebookInstanceName?: string | null;
		NotebookInstanceStatus?: DescribeNotebookInstanceOutputNotebookInstanceStatus | null;

		/** Max length: 1024 */
		FailureReason?: string | null;
		Url?: string | null;
		InstanceType?: DescribeNotebookInstanceOutputInstanceType | null;

		/** Max length: 32 */
		SubnetId?: string | null;

		/** Maximum items: 5 */
		SecurityGroups?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/** Max length: 2048 */
		KmsKeyId?: string | null;
		NetworkInterfaceId?: string | null;
		LastModifiedTime?: Date | null;
		CreationTime?: Date | null;

		/** Max length: 63 */
		NotebookInstanceLifecycleConfigName?: string | null;
		DirectInternetAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;

		/**
		 * Minimum: 5
		 * Maximum: 16384
		 */
		VolumeSizeInGB?: number | null;
		AcceleratorTypes?: Array<NotebookInstanceAcceleratorType>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultCodeRepository?: string | null;

		/** Maximum items: 3 */
		AdditionalCodeRepositories?: Array<string>;
		RootAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;
	}
	export interface DescribeNotebookInstanceOutputFormProperties {

		/** Max length: 256 */
		NotebookInstanceArn: FormControl<string | null | undefined>,

		/** Max length: 63 */
		NotebookInstanceName: FormControl<string | null | undefined>,
		NotebookInstanceStatus: FormControl<DescribeNotebookInstanceOutputNotebookInstanceStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		InstanceType: FormControl<DescribeNotebookInstanceOutputInstanceType | null | undefined>,

		/** Max length: 32 */
		SubnetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		KmsKeyId: FormControl<string | null | undefined>,
		NetworkInterfaceId: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Max length: 63 */
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,
		DirectInternetAccess: FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 16384
		 */
		VolumeSizeInGB: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultCodeRepository: FormControl<string | null | undefined>,
		RootAccess: FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>,
	}
	export function CreateDescribeNotebookInstanceOutputFormGroup() {
		return new FormGroup<DescribeNotebookInstanceOutputFormProperties>({
			NotebookInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			NotebookInstanceStatus: new FormControl<DescribeNotebookInstanceOutputNotebookInstanceStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			Url: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<DescribeNotebookInstanceOutputInstanceType | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.pattern('[-0-9a-zA-Z]+')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('.*')]),
			NetworkInterfaceId: new FormControl<string | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DirectInternetAccess: new FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>(undefined),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(16384)]),
			DefaultCodeRepository: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('^https://([^/]+)/?(.*)$|^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RootAccess: new FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>(undefined),
		});

	}

	export enum DescribeNotebookInstanceOutputNotebookInstanceStatus { Pending = 0, InService = 1, Stopping = 2, Stopped = 3, Failed = 4, Deleting = 5, Updating = 6 }

	export enum DescribeNotebookInstanceOutputInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export interface DescribeNotebookInstanceInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: string;
	}
	export interface DescribeNotebookInstanceInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotebookInstanceInputFormGroup() {
		return new FormGroup<DescribeNotebookInstanceInputFormProperties>({
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeNotebookInstanceLifecycleConfigOutput {

		/** Max length: 256 */
		NotebookInstanceLifecycleConfigArn?: string | null;

		/** Max length: 63 */
		NotebookInstanceLifecycleConfigName?: string | null;

		/** Maximum items: 1 */
		OnCreate?: Array<NotebookInstanceLifecycleHook>;

		/** Maximum items: 1 */
		OnStart?: Array<NotebookInstanceLifecycleHook>;
		LastModifiedTime?: Date | null;
		CreationTime?: Date | null;
	}
	export interface DescribeNotebookInstanceLifecycleConfigOutputFormProperties {

		/** Max length: 256 */
		NotebookInstanceLifecycleConfigArn: FormControl<string | null | undefined>,

		/** Max length: 63 */
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeNotebookInstanceLifecycleConfigOutputFormGroup() {
		return new FormGroup<DescribeNotebookInstanceLifecycleConfigOutputFormProperties>({
			NotebookInstanceLifecycleConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeNotebookInstanceLifecycleConfigInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: string;
	}
	export interface DescribeNotebookInstanceLifecycleConfigInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotebookInstanceLifecycleConfigInputFormGroup() {
		return new FormGroup<DescribeNotebookInstanceLifecycleConfigInputFormProperties>({
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeProcessingJobResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		ProcessingInputs?: Array<ProcessingInput>;

		/** The output configuration for the processing job. */
		ProcessingOutputConfig?: ProcessingOutputConfig;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: string;

		/**
		 * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
		 * Required
		 */
		ProcessingResources: ProcessingResources;

		/** Specifies a time limit for how long the processing job is allowed to run. */
		StoppingCondition?: ProcessingStoppingCondition;

		/**
		 * Configuration to run a processing job in a specified container image.
		 * Required
		 */
		AppSpecification: AppSpecification;
		Environment?: ProcessingEnvironmentMap;

		/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
		NetworkConfig?: NetworkConfig;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig;

		/**
		 * Required
		 * Max length: 256
		 */
		ProcessingJobArn: string;

		/** Required */
		ProcessingJobStatus: TrialComponentStatusPrimaryStatus;

		/** Max length: 1024 */
		ExitMessage?: string | null;

		/** Max length: 1024 */
		FailureReason?: string | null;
		ProcessingEndTime?: Date | null;
		ProcessingStartTime?: Date | null;
		LastModifiedTime?: Date | null;

		/** Required */
		CreationTime: Date;

		/** Max length: 256 */
		MonitoringScheduleArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn?: string | null;

		/** Max length: 256 */
		TrainingJobArn?: string | null;
	}
	export interface DescribeProcessingJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		ProcessingJobArn: FormControl<string | null | undefined>,

		/** Required */
		ProcessingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Max length: 1024 */
		ExitMessage: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
		ProcessingEndTime: FormControl<Date | null | undefined>,
		ProcessingStartTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Max length: 256 */
		MonitoringScheduleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrainingJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProcessingJobResponseFormGroup() {
		return new FormGroup<DescribeProcessingJobResponseFormProperties>({
			ProcessingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			ProcessingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:processing-job/.*')]),
			ProcessingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
			ExitMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\S\s]*')]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			ProcessingEndTime: new FormControl<Date | null | undefined>(undefined),
			ProcessingStartTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			MonitoringScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*')]),
			AutoMLJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:automl-job/.*')]),
			TrainingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-job/.*')]),
		});

	}

	export interface DescribeProcessingJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: string;
	}
	export interface DescribeProcessingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProcessingJobRequestFormGroup() {
		return new FormGroup<DescribeProcessingJobRequestFormProperties>({
			ProcessingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeSubscribedWorkteamResponse {

		/**
		 * Describes a work team of a vendor that does the a labelling job.
		 * Required
		 */
		SubscribedWorkteam: SubscribedWorkteam;
	}
	export interface DescribeSubscribedWorkteamResponseFormProperties {
	}
	export function CreateDescribeSubscribedWorkteamResponseFormGroup() {
		return new FormGroup<DescribeSubscribedWorkteamResponseFormProperties>({
		});

	}


	/** Describes a work team of a vendor that does the a labelling job. */
	export interface SubscribedWorkteam {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: string;

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		MarketplaceTitle?: string | null;
		SellerName?: string | null;

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		MarketplaceDescription?: string | null;
		ListingId?: string | null;
	}

	/** Describes a work team of a vendor that does the a labelling job. */
	export interface SubscribedWorkteamFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		MarketplaceTitle: FormControl<string | null | undefined>,
		SellerName: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		MarketplaceDescription: FormControl<string | null | undefined>,
		ListingId: FormControl<string | null | undefined>,
	}
	export function CreateSubscribedWorkteamFormGroup() {
		return new FormGroup<SubscribedWorkteamFormProperties>({
			WorkteamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workteam/.*')]),
			MarketplaceTitle: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(1), Validators.pattern('.+')]),
			SellerName: new FormControl<string | null | undefined>(undefined),
			MarketplaceDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(1), Validators.pattern('.+')]),
			ListingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSubscribedWorkteamRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: string;
	}
	export interface DescribeSubscribedWorkteamRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSubscribedWorkteamRequestFormGroup() {
		return new FormGroup<DescribeSubscribedWorkteamRequestFormProperties>({
			WorkteamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workteam/.*')]),
		});

	}

	export interface DescribeTrainingJobResponse {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		TrainingJobArn: string;

		/** Max length: 256 */
		TuningJobArn?: string | null;

		/** Max length: 2048 */
		LabelingJobArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn?: string | null;

		/**
		 * <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p>
		 * Required
		 */
		ModelArtifacts: ModelArtifacts;

		/** Required */
		TrainingJobStatus: TrialComponentStatusPrimaryStatus;

		/** Required */
		SecondaryStatus: DescribeTrainingJobResponseSecondaryStatus;

		/** Max length: 1024 */
		FailureReason?: string | null;
		HyperParameters?: HyperParameters;

		/**
		 * <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
		 * Required
		 */
		AlgorithmSpecification: AlgorithmSpecification;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		InputDataConfig?: Array<Channel>;

		/** Provides information about how to store model training results (model artifacts). */
		OutputDataConfig?: OutputDataConfig;

		/**
		 * Describes the resources, including ML compute instances and ML storage volumes, to use for model training.
		 * Required
		 */
		ResourceConfig: ResourceConfig;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig;

		/**
		 * <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
		 * Required
		 */
		StoppingCondition: StoppingCondition;

		/** Required */
		CreationTime: Date;
		TrainingStartTime?: Date | null;
		TrainingEndTime?: Date | null;
		LastModifiedTime?: Date | null;
		SecondaryStatusTransitions?: Array<SecondaryStatusTransition>;

		/**
		 * Minimum items: 0
		 * Maximum items: 40
		 */
		FinalMetricDataList?: Array<MetricData>;
		EnableNetworkIsolation?: boolean | null;
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableManagedSpotTraining?: boolean | null;

		/** Contains information about the output location for managed spot training checkpoint data. */
		CheckpointConfig?: CheckpointConfig;

		/** Minimum: 1 */
		TrainingTimeInSeconds?: number | null;

		/** Minimum: 1 */
		BillableTimeInSeconds?: number | null;

		/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
		DebugHookConfig?: DebugHookConfig;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		DebugRuleConfigurations?: Array<DebugRuleConfiguration>;

		/** Configuration of storage locations for TensorBoard output. */
		TensorBoardOutputConfig?: TensorBoardOutputConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		DebugRuleEvaluationStatuses?: Array<DebugRuleEvaluationStatus>;
	}
	export interface DescribeTrainingJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		TrainingJobArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TuningJobArn: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		LabelingJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: FormControl<string | null | undefined>,

		/** Required */
		TrainingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Required */
		SecondaryStatus: FormControl<DescribeTrainingJobResponseSecondaryStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		TrainingStartTime: FormControl<Date | null | undefined>,
		TrainingEndTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		EnableNetworkIsolation: FormControl<boolean | null | undefined>,
		EnableInterContainerTrafficEncryption: FormControl<boolean | null | undefined>,
		EnableManagedSpotTraining: FormControl<boolean | null | undefined>,

		/** Minimum: 1 */
		TrainingTimeInSeconds: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		BillableTimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTrainingJobResponseFormGroup() {
		return new FormGroup<DescribeTrainingJobResponseFormProperties>({
			TrainingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrainingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-job/.*')]),
			TuningJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:hyper-parameter-tuning-job/.*')]),
			LabelingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:labeling-job/.*')]),
			AutoMLJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:automl-job/.*')]),
			TrainingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
			SecondaryStatus: new FormControl<DescribeTrainingJobResponseSecondaryStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TrainingStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingEndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			EnableNetworkIsolation: new FormControl<boolean | null | undefined>(undefined),
			EnableInterContainerTrafficEncryption: new FormControl<boolean | null | undefined>(undefined),
			EnableManagedSpotTraining: new FormControl<boolean | null | undefined>(undefined),
			TrainingTimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			BillableTimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export enum DescribeTrainingJobResponseSecondaryStatus { Starting = 0, LaunchingMLInstances = 1, PreparingTrainingStack = 2, Downloading = 3, DownloadingTrainingImage = 4, Training = 5, Uploading = 6, Stopping = 7, Stopped = 8, MaxRuntimeExceeded = 9, Completed = 10, Failed = 11, Interrupted = 12, MaxWaitTimeExceeded = 13 }


	/** <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides additional details about a status that the training job has transitioned through. A training job can be in one of several states, for example, starting, downloading, training, or uploading. Within each state, there are a number of intermediate states. For example, within the starting state, Amazon SageMaker could be starting the training job or launching the ML instances. These transitional states are referred to as the job's secondary status. </p> <p/> */
	export interface SecondaryStatusTransition {

		/** Required */
		Status: DescribeTrainingJobResponseSecondaryStatus;

		/** Required */
		StartTime: Date;
		EndTime?: Date | null;
		StatusMessage?: string | null;
	}

	/** <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides additional details about a status that the training job has transitioned through. A training job can be in one of several states, for example, starting, downloading, training, or uploading. Within each state, there are a number of intermediate states. For example, within the starting state, Amazon SageMaker could be starting the training job or launching the ML instances. These transitional states are referred to as the job's secondary status. </p> <p/> */
	export interface SecondaryStatusTransitionFormProperties {

		/** Required */
		Status: FormControl<DescribeTrainingJobResponseSecondaryStatus | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateSecondaryStatusTransitionFormGroup() {
		return new FormGroup<SecondaryStatusTransitionFormProperties>({
			Status: new FormControl<DescribeTrainingJobResponseSecondaryStatus | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name, value, and date and time of a metric that was emitted to Amazon CloudWatch. */
	export interface MetricData {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName?: string | null;
		Value?: number | null;
		Timestamp?: Date | null;
	}

	/** The name, value, and date and time of a metric that was emitted to Amazon CloudWatch. */
	export interface MetricDataFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMetricDataFormGroup() {
		return new FormGroup<MetricDataFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			Value: new FormControl<number | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the status of the rule evaluation. */
	export interface DebugRuleEvaluationStatus {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RuleConfigurationName?: string | null;

		/** Max length: 256 */
		RuleEvaluationJobArn?: string | null;
		RuleEvaluationStatus?: DebugRuleEvaluationStatusRuleEvaluationStatus | null;

		/** Max length: 1024 */
		StatusDetails?: string | null;
		LastModifiedTime?: Date | null;
	}

	/** Information about the status of the rule evaluation. */
	export interface DebugRuleEvaluationStatusFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RuleConfigurationName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		RuleEvaluationJobArn: FormControl<string | null | undefined>,
		RuleEvaluationStatus: FormControl<DebugRuleEvaluationStatusRuleEvaluationStatus | null | undefined>,

		/** Max length: 1024 */
		StatusDetails: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDebugRuleEvaluationStatusFormGroup() {
		return new FormGroup<DebugRuleEvaluationStatusFormProperties>({
			RuleConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('.*')]),
			RuleEvaluationJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:processing-job/.*')]),
			RuleEvaluationStatus: new FormControl<DebugRuleEvaluationStatusRuleEvaluationStatus | null | undefined>(undefined),
			StatusDetails: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('.*')]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DebugRuleEvaluationStatusRuleEvaluationStatus { InProgress = 0, NoIssuesFound = 1, IssuesFound = 2, Error = 3, Stopping = 4, Stopped = 5 }

	export interface DescribeTrainingJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: string;
	}
	export interface DescribeTrainingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrainingJobRequestFormGroup() {
		return new FormGroup<DescribeTrainingJobRequestFormProperties>({
			TrainingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeTransformJobResponse {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		TransformJobArn: string;

		/** Required */
		TransformJobStatus: TrialComponentStatusPrimaryStatus;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: string;

		/** Minimum: 0 */
		MaxConcurrentTransforms?: number | null;

		/** Minimum: 0 */
		MaxPayloadInMB?: number | null;
		BatchStrategy?: TransformJobDefinitionBatchStrategy | null;
		Environment?: TransformEnvironmentMap;

		/**
		 * Describes the input source of a transform job and the way the transform job consumes it.
		 * Required
		 */
		TransformInput: TransformInput;

		/** Describes the results of a transform job. */
		TransformOutput?: TransformOutput;

		/**
		 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
		 * Required
		 */
		TransformResources: TransformResources;

		/** Required */
		CreationTime: Date;
		TransformStartTime?: Date | null;
		TransformEndTime?: Date | null;

		/** Max length: 2048 */
		LabelingJobArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn?: string | null;

		/** The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>. */
		DataProcessing?: DataProcessing;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig;
	}
	export interface DescribeTransformJobResponseFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		TransformJobArn: FormControl<string | null | undefined>,

		/** Required */
		TransformJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		MaxConcurrentTransforms: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		MaxPayloadInMB: FormControl<number | null | undefined>,
		BatchStrategy: FormControl<TransformJobDefinitionBatchStrategy | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		TransformStartTime: FormControl<Date | null | undefined>,
		TransformEndTime: FormControl<Date | null | undefined>,

		/** Max length: 2048 */
		LabelingJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTransformJobResponseFormGroup() {
		return new FormGroup<DescribeTransformJobResponseFormProperties>({
			TransformJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TransformJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:transform-job/.*')]),
			TransformJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			MaxConcurrentTransforms: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			MaxPayloadInMB: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			BatchStrategy: new FormControl<TransformJobDefinitionBatchStrategy | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TransformStartTime: new FormControl<Date | null | undefined>(undefined),
			TransformEndTime: new FormControl<Date | null | undefined>(undefined),
			LabelingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:labeling-job/.*')]),
			AutoMLJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:automl-job/.*')]),
		});

	}

	export interface DescribeTransformJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: string;
	}
	export interface DescribeTransformJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTransformJobRequestFormGroup() {
		return new FormGroup<DescribeTransformJobRequestFormProperties>({
			TransformJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeTrialResponse {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName?: string | null;

		/** Max length: 256 */
		TrialArn?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;

		/** The source of the trial. */
		Source?: TrialSource;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext;
	}
	export interface DescribeTrialResponseFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrialArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeTrialResponseFormGroup() {
		return new FormGroup<DescribeTrialResponseFormProperties>({
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial/.*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The source of the trial. */
	export interface TrialSource {

		/**
		 * Required
		 * Max length: 256
		 */
		SourceArn: string;

		/** Max length: 128 */
		SourceType?: string | null;
	}

	/** The source of the trial. */
	export interface TrialSourceFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		SourceArn: FormControl<string | null | undefined>,

		/** Max length: 128 */
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateTrialSourceFormGroup() {
		return new FormGroup<TrialSourceFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:.*')]),
			SourceType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface DescribeTrialRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: string;
	}
	export interface DescribeTrialRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrialRequestFormGroup() {
		return new FormGroup<DescribeTrialRequestFormProperties>({
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeTrialComponentResponse {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName?: string | null;

		/** Max length: 256 */
		TrialComponentArn?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
		Source?: TrialComponentSource;

		/** The status of the trial component. */
		Status?: TrialComponentStatus;
		StartTime?: Date | null;
		EndTime?: Date | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext;
		Parameters?: TrialComponentParameters;
		InputArtifacts?: TrialComponentArtifacts;
		OutputArtifacts?: TrialComponentArtifacts;
		Metrics?: Array<TrialComponentMetricSummary>;
	}
	export interface DescribeTrialComponentResponseFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeTrialComponentResponseFormGroup() {
		return new FormGroup<DescribeTrialComponentResponseFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
	export interface TrialComponentSource {

		/**
		 * Required
		 * Max length: 256
		 */
		SourceArn: string;

		/** Max length: 128 */
		SourceType?: string | null;
	}

	/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
	export interface TrialComponentSourceFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		SourceArn: FormControl<string | null | undefined>,

		/** Max length: 128 */
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateTrialComponentSourceFormGroup() {
		return new FormGroup<TrialComponentSourceFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:.*')]),
			SourceType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}


	/** A summary of the metrics of a trial component. */
	export interface TrialComponentMetricSummary {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName?: string | null;

		/** Max length: 256 */
		SourceArn?: string | null;
		TimeStamp?: Date | null;
		Max?: number | null;
		Min?: number | null;
		Last?: number | null;
		Count?: number | null;
		Avg?: number | null;
		StdDev?: number | null;
	}

	/** A summary of the metrics of a trial component. */
	export interface TrialComponentMetricSummaryFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		SourceArn: FormControl<string | null | undefined>,
		TimeStamp: FormControl<Date | null | undefined>,
		Max: FormControl<number | null | undefined>,
		Min: FormControl<number | null | undefined>,
		Last: FormControl<number | null | undefined>,
		Count: FormControl<number | null | undefined>,
		Avg: FormControl<number | null | undefined>,
		StdDev: FormControl<number | null | undefined>,
	}
	export function CreateTrialComponentMetricSummaryFormGroup() {
		return new FormGroup<TrialComponentMetricSummaryFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:.*')]),
			TimeStamp: new FormControl<Date | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
			Last: new FormControl<number | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			Avg: new FormControl<number | null | undefined>(undefined),
			StdDev: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeTrialComponentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: string;
	}
	export interface DescribeTrialComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrialComponentRequestFormGroup() {
		return new FormGroup<DescribeTrialComponentRequestFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeUserProfileResponse {

		/** Max length: 63 */
		DomainId?: string | null;

		/** Max length: 256 */
		UserProfileArn?: string | null;

		/** Max length: 63 */
		UserProfileName?: string | null;

		/** Max length: 10 */
		HomeEfsFileSystemUid?: string | null;
		Status?: DescribeDomainResponseStatus | null;
		LastModifiedTime?: Date | null;
		CreationTime?: Date | null;

		/** Max length: 1024 */
		FailureReason?: string | null;
		SingleSignOnUserIdentifier?: string | null;

		/** Max length: 256 */
		SingleSignOnUserValue?: string | null;

		/** A collection of settings. */
		UserSettings?: UserSettings;
	}
	export interface DescribeUserProfileResponseFormProperties {

		/** Max length: 63 */
		DomainId: FormControl<string | null | undefined>,

		/** Max length: 256 */
		UserProfileArn: FormControl<string | null | undefined>,

		/** Max length: 63 */
		UserProfileName: FormControl<string | null | undefined>,

		/** Max length: 10 */
		HomeEfsFileSystemUid: FormControl<string | null | undefined>,
		Status: FormControl<DescribeDomainResponseStatus | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
		SingleSignOnUserIdentifier: FormControl<string | null | undefined>,

		/** Max length: 256 */
		SingleSignOnUserValue: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserProfileResponseFormGroup() {
		return new FormGroup<DescribeUserProfileResponseFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63)]),
			UserProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:user-profile/.*')]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			HomeEfsFileSystemUid: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10), Validators.pattern('\d+')]),
			Status: new FormControl<DescribeDomainResponseStatus | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			SingleSignOnUserIdentifier: new FormControl<string | null | undefined>(undefined),
			SingleSignOnUserValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface DescribeUserProfileRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: string;
	}
	export interface DescribeUserProfileRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserProfileRequestFormGroup() {
		return new FormGroup<DescribeUserProfileRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DescribeWorkforceResponse {

		/**
		 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
		 * Required
		 */
		Workforce: Workforce;
	}
	export interface DescribeWorkforceResponseFormProperties {
	}
	export function CreateDescribeWorkforceResponseFormGroup() {
		return new FormGroup<DescribeWorkforceResponseFormProperties>({
		});

	}


	/** A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>. */
	export interface Workforce {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkforceName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		WorkforceArn: string;
		LastUpdatedDate?: Date | null;

		/** A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. For more information, see . */
		SourceIpConfig?: SourceIpConfig;
	}

	/** A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>. */
	export interface WorkforceFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkforceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		WorkforceArn: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateWorkforceFormGroup() {
		return new FormGroup<WorkforceFormProperties>({
			WorkforceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9]([a-zA-Z0-9\-])*$')]),
			WorkforceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workforce/.*')]),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. For more information, see . */
	export interface SourceIpConfig {

		/** Required */
		Cidrs: Array<string>;
	}

	/** A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. For more information, see . */
	export interface SourceIpConfigFormProperties {
	}
	export function CreateSourceIpConfigFormGroup() {
		return new FormGroup<SourceIpConfigFormProperties>({
		});

	}

	export interface DescribeWorkforceRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkforceName: string;
	}
	export interface DescribeWorkforceRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkforceName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkforceRequestFormGroup() {
		return new FormGroup<DescribeWorkforceRequestFormProperties>({
			WorkforceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9]([a-zA-Z0-9\-])*$')]),
		});

	}

	export interface DescribeWorkteamResponse {

		/**
		 * Provides details about a labeling work team.
		 * Required
		 */
		Workteam: Workteam;
	}
	export interface DescribeWorkteamResponseFormProperties {
	}
	export function CreateDescribeWorkteamResponseFormGroup() {
		return new FormGroup<DescribeWorkteamResponseFormProperties>({
		});

	}


	/** Provides details about a labeling work team. */
	export interface Workteam {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		MemberDefinitions: Array<MemberDefinition>;

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: string;
		ProductListingIds?: Array<string>;

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Description: string;
		SubDomain?: string | null;
		CreateDate?: Date | null;
		LastUpdatedDate?: Date | null;

		/** Configures SNS notifications of available or expiring work items for work teams. */
		NotificationConfiguration?: NotificationConfiguration;
	}

	/** Provides details about a labeling work team. */
	export interface WorkteamFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 200
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		SubDomain: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateWorkteamFormGroup() {
		return new FormGroup<WorkteamFormProperties>({
			WorkteamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			WorkteamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workteam/.*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(200), Validators.minLength(1), Validators.pattern('.+')]),
			SubDomain: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkteamRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: string;
	}
	export interface DescribeWorkteamRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkteamRequestFormGroup() {
		return new FormGroup<DescribeWorkteamRequestFormProperties>({
			WorkteamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface DisassociateTrialComponentResponse {

		/** Max length: 256 */
		TrialComponentArn?: string | null;

		/** Max length: 256 */
		TrialArn?: string | null;
	}
	export interface DisassociateTrialComponentResponseFormProperties {

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrialArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateTrialComponentResponseFormGroup() {
		return new FormGroup<DisassociateTrialComponentResponseFormProperties>({
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
			TrialArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial/.*')]),
		});

	}

	export interface DisassociateTrialComponentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: string;

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: string;
	}
	export interface DisassociateTrialComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateTrialComponentRequestFormGroup() {
		return new FormGroup<DisassociateTrialComponentRequestFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface GetSearchSuggestionsResponse {
		PropertyNameSuggestions?: Array<PropertyNameSuggestion>;
	}
	export interface GetSearchSuggestionsResponseFormProperties {
	}
	export function CreateGetSearchSuggestionsResponseFormGroup() {
		return new FormGroup<GetSearchSuggestionsResponseFormProperties>({
		});

	}


	/** A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field. */
	export interface PropertyNameSuggestion {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PropertyName?: string | null;
	}

	/** A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field. */
	export interface PropertyNameSuggestionFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		PropertyName: FormControl<string | null | undefined>,
	}
	export function CreatePropertyNameSuggestionFormGroup() {
		return new FormGroup<PropertyNameSuggestionFormProperties>({
			PropertyName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
		});

	}

	export interface GetSearchSuggestionsRequest {

		/** Required */
		Resource: GetSearchSuggestionsRequestResource;

		/** Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response. */
		SuggestionQuery?: SuggestionQuery;
	}
	export interface GetSearchSuggestionsRequestFormProperties {

		/** Required */
		Resource: FormControl<GetSearchSuggestionsRequestResource | null | undefined>,
	}
	export function CreateGetSearchSuggestionsRequestFormGroup() {
		return new FormGroup<GetSearchSuggestionsRequestFormProperties>({
			Resource: new FormControl<GetSearchSuggestionsRequestResource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetSearchSuggestionsRequestResource { TrainingJob = 0, Experiment = 1, ExperimentTrial = 2, ExperimentTrialComponent = 3 }


	/** Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response. */
	export interface SuggestionQuery {

		/** Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text. */
		PropertyNameQuery?: PropertyNameQuery;
	}

	/** Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response. */
	export interface SuggestionQueryFormProperties {
	}
	export function CreateSuggestionQueryFormGroup() {
		return new FormGroup<SuggestionQueryFormProperties>({
		});

	}


	/** Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text. */
	export interface PropertyNameQuery {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		PropertyNameHint: string;
	}

	/** Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text. */
	export interface PropertyNameQueryFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 0
		 */
		PropertyNameHint: FormControl<string | null | undefined>,
	}
	export function CreatePropertyNameQueryFormGroup() {
		return new FormGroup<PropertyNameQueryFormProperties>({
			PropertyNameHint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(0), Validators.pattern('.*')]),
		});

	}

	export interface ListAlgorithmsOutput {

		/** Required */
		AlgorithmSummaryList: Array<AlgorithmSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListAlgorithmsOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlgorithmsOutputFormGroup() {
		return new FormGroup<ListAlgorithmsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information about an algorithm. */
	export interface AlgorithmSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlgorithmName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		AlgorithmArn: string;

		/** Max length: 1024 */
		AlgorithmDescription?: string | null;

		/** Required */
		CreationTime: Date;

		/** Required */
		AlgorithmStatus: DescribeAlgorithmOutputAlgorithmStatus;
	}

	/** Provides summary information about an algorithm. */
	export interface AlgorithmSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		AlgorithmName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		AlgorithmArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		AlgorithmDescription: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		AlgorithmStatus: FormControl<DescribeAlgorithmOutputAlgorithmStatus | null | undefined>,
	}
	export function CreateAlgorithmSummaryFormGroup() {
		return new FormGroup<AlgorithmSummaryFormProperties>({
			AlgorithmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			AlgorithmArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:algorithm/.*')]),
			AlgorithmDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			AlgorithmStatus: new FormControl<DescribeAlgorithmOutputAlgorithmStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAlgorithmsInput {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 63 */
		NameContains?: string | null;

		/** Max length: 8192 */
		NextToken?: string | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}
	export interface ListAlgorithmsInputFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<ListAlgorithmsInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
	}
	export function CreateListAlgorithmsInputFormGroup() {
		return new FormGroup<ListAlgorithmsInputFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			SortBy: new FormControl<ListAlgorithmsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
		});

	}

	export enum ListAlgorithmsInputSortBy { Name = 0, CreationTime = 1 }

	export enum ListAlgorithmsInputSortOrder { Ascending = 0, Descending = 1 }

	export interface ListAppsResponse {
		Apps?: Array<AppDetails>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListAppsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppsResponseFormGroup() {
		return new FormGroup<ListAppsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** The app's details. */
	export interface AppDetails {

		/** Max length: 63 */
		DomainId?: string | null;

		/** Max length: 63 */
		UserProfileName?: string | null;
		AppType?: CreateAppRequestAppType | null;

		/** Max length: 63 */
		AppName?: string | null;
		Status?: DescribeAppResponseStatus | null;
		CreationTime?: Date | null;
	}

	/** The app's details. */
	export interface AppDetailsFormProperties {

		/** Max length: 63 */
		DomainId: FormControl<string | null | undefined>,

		/** Max length: 63 */
		UserProfileName: FormControl<string | null | undefined>,
		AppType: FormControl<CreateAppRequestAppType | null | undefined>,

		/** Max length: 63 */
		AppName: FormControl<string | null | undefined>,
		Status: FormControl<DescribeAppResponseStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateAppDetailsFormGroup() {
		return new FormGroup<AppDetailsFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			AppType: new FormControl<CreateAppRequestAppType | null | undefined>(undefined),
			AppName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Status: new FormControl<DescribeAppResponseStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAppsRequest {

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		SortBy?: ListAppsRequestSortBy | null;

		/** Max length: 63 */
		DomainIdEquals?: string | null;

		/** Max length: 63 */
		UserProfileNameEquals?: string | null;
	}
	export interface ListAppsRequestFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
		SortBy: FormControl<ListAppsRequestSortBy | null | undefined>,

		/** Max length: 63 */
		DomainIdEquals: FormControl<string | null | undefined>,

		/** Max length: 63 */
		UserProfileNameEquals: FormControl<string | null | undefined>,
	}
	export function CreateListAppsRequestFormGroup() {
		return new FormGroup<ListAppsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			SortBy: new FormControl<ListAppsRequestSortBy | null | undefined>(undefined),
			DomainIdEquals: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63)]),
			UserProfileNameEquals: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export enum ListAppsRequestSortBy { CreationTime = 0 }

	export interface ListAutoMLJobsResponse {

		/** Required */
		AutoMLJobSummaries: Array<AutoMLJobSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListAutoMLJobsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAutoMLJobsResponseFormGroup() {
		return new FormGroup<ListAutoMLJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides a summary about a job. */
	export interface AutoMLJobSummary {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: string;

		/** Required */
		AutoMLJobStatus: AutoMLCandidateCandidateStatus;

		/** Required */
		AutoMLJobSecondaryStatus: DescribeAutoMLJobResponseAutoMLJobSecondaryStatus;

		/** Required */
		CreationTime: Date;
		EndTime?: Date | null;

		/** Required */
		LastModifiedTime: Date;

		/** Max length: 1024 */
		FailureReason?: string | null;
	}

	/** Provides a summary about a job. */
	export interface AutoMLJobSummaryFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: FormControl<string | null | undefined>,

		/** Required */
		AutoMLJobStatus: FormControl<AutoMLCandidateCandidateStatus | null | undefined>,

		/** Required */
		AutoMLJobSecondaryStatus: FormControl<DescribeAutoMLJobResponseAutoMLJobSecondaryStatus | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateAutoMLJobSummaryFormGroup() {
		return new FormGroup<AutoMLJobSummaryFormProperties>({
			AutoMLJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			AutoMLJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:automl-job/.*')]),
			AutoMLJobStatus: new FormControl<AutoMLCandidateCandidateStatus | null | undefined>(undefined, [Validators.required]),
			AutoMLJobSecondaryStatus: new FormControl<DescribeAutoMLJobResponseAutoMLJobSecondaryStatus | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface ListAutoMLJobsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;

		/** Max length: 63 */
		NameContains?: string | null;
		StatusEquals?: AutoMLCandidateCandidateStatus | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListAutoMLJobsRequestFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		StatusEquals: FormControl<AutoMLCandidateCandidateStatus | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAutoMLJobsRequestFormGroup() {
		return new FormGroup<ListAutoMLJobsRequestFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			StatusEquals: new FormControl<AutoMLCandidateCandidateStatus | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export enum ListAutoMLJobsRequestSortBy { Name = 0, CreationTime = 1, Status = 2 }

	export interface ListCandidatesForAutoMLJobResponse {

		/** Required */
		Candidates: Array<AutoMLCandidate>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListCandidatesForAutoMLJobResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCandidatesForAutoMLJobResponseFormGroup() {
		return new FormGroup<ListCandidatesForAutoMLJobResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export interface ListCandidatesForAutoMLJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: string;
		StatusEquals?: AutoMLCandidateCandidateStatus | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CandidateNameEquals?: string | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		SortBy?: ListCandidatesForAutoMLJobRequestSortBy | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListCandidatesForAutoMLJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: FormControl<string | null | undefined>,
		StatusEquals: FormControl<AutoMLCandidateCandidateStatus | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		CandidateNameEquals: FormControl<string | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
		SortBy: FormControl<ListCandidatesForAutoMLJobRequestSortBy | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCandidatesForAutoMLJobRequestFormGroup() {
		return new FormGroup<ListCandidatesForAutoMLJobRequestFormProperties>({
			AutoMLJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			StatusEquals: new FormControl<AutoMLCandidateCandidateStatus | null | undefined>(undefined),
			CandidateNameEquals: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			SortBy: new FormControl<ListCandidatesForAutoMLJobRequestSortBy | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export enum ListCandidatesForAutoMLJobRequestSortBy { CreationTime = 0, Status = 1, FinalObjectiveMetricValue = 2 }

	export interface ListCodeRepositoriesOutput {

		/** Required */
		CodeRepositorySummaryList: Array<CodeRepositorySummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListCodeRepositoriesOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCodeRepositoriesOutputFormGroup() {
		return new FormGroup<ListCodeRepositoriesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Specifies summary information about a Git repository. */
	export interface CodeRepositorySummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		CodeRepositoryArn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/** Specifies configuration details for a Git repository in your AWS account. */
		GitConfig?: GitConfig;
	}

	/** Specifies summary information about a Git repository. */
	export interface CodeRepositorySummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		CodeRepositoryArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateCodeRepositorySummaryFormGroup() {
		return new FormGroup<CodeRepositorySummaryFormProperties>({
			CodeRepositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			CodeRepositoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:code-repository/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCodeRepositoriesInput {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 63 */
		NameContains?: string | null;

		/** Max length: 8192 */
		NextToken?: string | null;
		SortBy?: ListCodeRepositoriesInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}
	export interface ListCodeRepositoriesInputFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<ListCodeRepositoriesInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
	}
	export function CreateListCodeRepositoriesInputFormGroup() {
		return new FormGroup<ListCodeRepositoriesInputFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9-]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			SortBy: new FormControl<ListCodeRepositoriesInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
		});

	}

	export enum ListCodeRepositoriesInputSortBy { Name = 0, CreationTime = 1, LastModifiedTime = 2 }

	export interface ListCompilationJobsResponse {

		/** Required */
		CompilationJobSummaries: Array<CompilationJobSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListCompilationJobsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCompilationJobsResponseFormGroup() {
		return new FormGroup<ListCompilationJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** A summary of a model compilation job. */
	export interface CompilationJobSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		CompilationJobArn: string;

		/** Required */
		CreationTime: Date;
		CompilationStartTime?: Date | null;
		CompilationEndTime?: Date | null;

		/** Required */
		CompilationTargetDevice: OutputConfigTargetDevice;
		LastModifiedTime?: Date | null;

		/** Required */
		CompilationJobStatus: DescribeCompilationJobResponseCompilationJobStatus;
	}

	/** A summary of a model compilation job. */
	export interface CompilationJobSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		CompilationJobArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		CompilationStartTime: FormControl<Date | null | undefined>,
		CompilationEndTime: FormControl<Date | null | undefined>,

		/** Required */
		CompilationTargetDevice: FormControl<OutputConfigTargetDevice | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		CompilationJobStatus: FormControl<DescribeCompilationJobResponseCompilationJobStatus | null | undefined>,
	}
	export function CreateCompilationJobSummaryFormGroup() {
		return new FormGroup<CompilationJobSummaryFormProperties>({
			CompilationJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			CompilationJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:compilation-job/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CompilationStartTime: new FormControl<Date | null | undefined>(undefined),
			CompilationEndTime: new FormControl<Date | null | undefined>(undefined),
			CompilationTargetDevice: new FormControl<OutputConfigTargetDevice | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CompilationJobStatus: new FormControl<DescribeCompilationJobResponseCompilationJobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCompilationJobsRequest {

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;

		/** Max length: 63 */
		NameContains?: string | null;
		StatusEquals?: DescribeCompilationJobResponseCompilationJobStatus | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}
	export interface ListCompilationJobsRequestFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		StatusEquals: FormControl<DescribeCompilationJobResponseCompilationJobStatus | null | undefined>,
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
	}
	export function CreateListCompilationJobsRequestFormGroup() {
		return new FormGroup<ListCompilationJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			StatusEquals: new FormControl<DescribeCompilationJobResponseCompilationJobStatus | null | undefined>(undefined),
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
		});

	}

	export interface ListDomainsResponse {
		Domains?: Array<DomainDetails>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListDomainsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** The domain's details. */
	export interface DomainDetails {

		/** Max length: 256 */
		DomainArn?: string | null;

		/** Max length: 63 */
		DomainId?: string | null;

		/** Max length: 63 */
		DomainName?: string | null;
		Status?: DescribeDomainResponseStatus | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;

		/** Max length: 1024 */
		Url?: string | null;
	}

	/** The domain's details. */
	export interface DomainDetailsFormProperties {

		/** Max length: 256 */
		DomainArn: FormControl<string | null | undefined>,

		/** Max length: 63 */
		DomainId: FormControl<string | null | undefined>,

		/** Max length: 63 */
		DomainName: FormControl<string | null | undefined>,
		Status: FormControl<DescribeDomainResponseStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateDomainDetailsFormGroup() {
		return new FormGroup<DomainDetailsFormProperties>({
			DomainArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:domain/.*')]),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Status: new FormControl<DescribeDomainResponseStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface ListDomainsRequest {

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListDomainsRequestFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListEndpointConfigsOutput {

		/** Required */
		EndpointConfigs: Array<EndpointConfigSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListEndpointConfigsOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointConfigsOutputFormGroup() {
		return new FormGroup<ListEndpointConfigsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information for an endpoint configuration. */
	export interface EndpointConfigSummary {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointConfigArn: string;

		/** Required */
		CreationTime: Date;
	}

	/** Provides summary information for an endpoint configuration. */
	export interface EndpointConfigSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointConfigArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateEndpointConfigSummaryFormGroup() {
		return new FormGroup<EndpointConfigSummaryFormProperties>({
			EndpointConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			EndpointConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:endpoint-config/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEndpointConfigsInput {
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 63 */
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
	}
	export interface ListEndpointConfigsInputFormProperties {
		SortBy: FormControl<ListAlgorithmsInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateListEndpointConfigsInputFormGroup() {
		return new FormGroup<ListEndpointConfigsInputFormProperties>({
			SortBy: new FormControl<ListAlgorithmsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9-]+')]),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEndpointsOutput {

		/** Required */
		Endpoints: Array<EndpointSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListEndpointsOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointsOutputFormGroup() {
		return new FormGroup<ListEndpointsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information for an endpoint. */
	export interface EndpointSummary {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		EndpointStatus: DescribeEndpointOutputEndpointStatus;
	}

	/** Provides summary information for an endpoint. */
	export interface EndpointSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		EndpointStatus: FormControl<DescribeEndpointOutputEndpointStatus | null | undefined>,
	}
	export function CreateEndpointSummaryFormGroup() {
		return new FormGroup<EndpointSummaryFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:endpoint/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndpointStatus: new FormControl<DescribeEndpointOutputEndpointStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEndpointsInput {
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 63 */
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		StatusEquals?: DescribeEndpointOutputEndpointStatus | null;
	}
	export interface ListEndpointsInputFormProperties {
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		StatusEquals: FormControl<DescribeEndpointOutputEndpointStatus | null | undefined>,
	}
	export function CreateListEndpointsInputFormGroup() {
		return new FormGroup<ListEndpointsInputFormProperties>({
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9-]+')]),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			StatusEquals: new FormControl<DescribeEndpointOutputEndpointStatus | null | undefined>(undefined),
		});

	}

	export interface ListExperimentsResponse {
		ExperimentSummaries?: Array<ExperimentSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListExperimentsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExperimentsResponseFormGroup() {
		return new FormGroup<ListExperimentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>. */
	export interface ExperimentSummary {

		/** Max length: 256 */
		ExperimentArn?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** The source of the experiment. */
		ExperimentSource?: ExperimentSource;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	/** A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>. */
	export interface ExperimentSummaryFormProperties {

		/** Max length: 256 */
		ExperimentArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentSummaryFormGroup() {
		return new FormGroup<ExperimentSummaryFormProperties>({
			ExperimentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment/.*')]),
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListExperimentsRequest {
		CreatedAfter?: Date | null;
		CreatedBefore?: Date | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListExperimentsRequestFormProperties {
		CreatedAfter: FormControl<Date | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
		SortBy: FormControl<ListAlgorithmsInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListExperimentsRequestFormGroup() {
		return new FormGroup<ListExperimentsRequestFormProperties>({
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
			SortBy: new FormControl<ListAlgorithmsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListFlowDefinitionsResponse {

		/** Required */
		FlowDefinitionSummaries: Array<FlowDefinitionSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListFlowDefinitionsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFlowDefinitionsResponseFormGroup() {
		return new FormGroup<ListFlowDefinitionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Contains summary information about the flow definition. */
	export interface FlowDefinitionSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: string;

		/** Required */
		FlowDefinitionStatus: DescribeFlowDefinitionResponseFlowDefinitionStatus;

		/** Required */
		CreationTime: Date;

		/** Max length: 1024 */
		FailureReason?: string | null;
	}

	/** Contains summary information about the flow definition. */
	export interface FlowDefinitionSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		FlowDefinitionName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		FlowDefinitionArn: FormControl<string | null | undefined>,

		/** Required */
		FlowDefinitionStatus: FormControl<DescribeFlowDefinitionResponseFlowDefinitionStatus | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateFlowDefinitionSummaryFormGroup() {
		return new FormGroup<FlowDefinitionSummaryFormProperties>({
			FlowDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
			FlowDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:flow-definition/.*')]),
			FlowDefinitionStatus: new FormControl<DescribeFlowDefinitionResponseFlowDefinitionStatus | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface ListFlowDefinitionsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListFlowDefinitionsRequestFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFlowDefinitionsRequestFormGroup() {
		return new FormGroup<ListFlowDefinitionsRequestFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListHumanTaskUisResponse {

		/** Required */
		HumanTaskUiSummaries: Array<HumanTaskUiSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListHumanTaskUisResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHumanTaskUisResponseFormGroup() {
		return new FormGroup<ListHumanTaskUisResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Container for human task user interface information. */
	export interface HumanTaskUiSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanTaskUiName: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanTaskUiArn: string;

		/** Required */
		CreationTime: Date;
	}

	/** Container for human task user interface information. */
	export interface HumanTaskUiSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		HumanTaskUiName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		HumanTaskUiArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateHumanTaskUiSummaryFormGroup() {
		return new FormGroup<HumanTaskUiSummaryFormProperties>({
			HumanTaskUiName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-z0-9](-*[a-z0-9])*')]),
			HumanTaskUiArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-task-ui/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListHumanTaskUisRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListHumanTaskUisRequestFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListHumanTaskUisRequestFormGroup() {
		return new FormGroup<ListHumanTaskUisRequestFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListHyperParameterTuningJobsResponse {

		/** Required */
		HyperParameterTuningJobSummaries: Array<HyperParameterTuningJobSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListHyperParameterTuningJobsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHyperParameterTuningJobsResponseFormGroup() {
		return new FormGroup<ListHyperParameterTuningJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information about a hyperparameter tuning job. */
	export interface HyperParameterTuningJobSummary {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		HyperParameterTuningJobArn: string;

		/** Required */
		HyperParameterTuningJobStatus: AutoMLCandidateCandidateStatus;

		/**
		 * The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.
		 * Required
		 */
		Strategy: HyperParameterTuningJobConfigStrategy;

		/** Required */
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
		ResourceLimits?: ResourceLimits;
	}

	/** Provides summary information about a hyperparameter tuning job. */
	export interface HyperParameterTuningJobSummaryFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		HyperParameterTuningJobArn: FormControl<string | null | undefined>,

		/** Required */
		HyperParameterTuningJobStatus: FormControl<AutoMLCandidateCandidateStatus | null | undefined>,

		/**
		 * The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.
		 * Required
		 */
		Strategy: FormControl<HyperParameterTuningJobConfigStrategy | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		HyperParameterTuningEndTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateHyperParameterTuningJobSummaryFormGroup() {
		return new FormGroup<HyperParameterTuningJobSummaryFormProperties>({
			HyperParameterTuningJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			HyperParameterTuningJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:hyper-parameter-tuning-job/.*')]),
			HyperParameterTuningJobStatus: new FormControl<AutoMLCandidateCandidateStatus | null | undefined>(undefined, [Validators.required]),
			Strategy: new FormControl<HyperParameterTuningJobConfigStrategy | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			HyperParameterTuningEndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListHyperParameterTuningJobsRequest {

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		SortBy?: ListHyperParameterTuningJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 63 */
		NameContains?: string | null;
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		StatusEquals?: AutoMLCandidateCandidateStatus | null;
	}
	export interface ListHyperParameterTuningJobsRequestFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		SortBy: FormControl<ListHyperParameterTuningJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,
		StatusEquals: FormControl<AutoMLCandidateCandidateStatus | null | undefined>,
	}
	export function CreateListHyperParameterTuningJobsRequestFormGroup() {
		return new FormGroup<ListHyperParameterTuningJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			SortBy: new FormControl<ListHyperParameterTuningJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			StatusEquals: new FormControl<AutoMLCandidateCandidateStatus | null | undefined>(undefined),
		});

	}

	export enum ListHyperParameterTuningJobsRequestSortBy { Name = 0, Status = 1, CreationTime = 2 }

	export interface ListLabelingJobsResponse {
		LabelingJobSummaryList?: Array<LabelingJobSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListLabelingJobsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLabelingJobsResponseFormGroup() {
		return new FormGroup<ListLabelingJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information about a labeling job. */
	export interface LabelingJobSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: string;

		/**
		 * Required
		 * Max length: 2048
		 */
		LabelingJobArn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		LabelingJobStatus: TrialComponentStatusPrimaryStatus;

		/**
		 * Provides a breakdown of the number of objects labeled.
		 * Required
		 */
		LabelCounters: LabelCounters;

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: string;

		/**
		 * Required
		 * Max length: 2048
		 */
		PreHumanTaskLambdaArn: string;

		/** Max length: 2048 */
		AnnotationConsolidationLambdaArn?: string | null;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** Specifies the location of the output produced by the labeling job. */
		LabelingJobOutput?: LabelingJobOutput;

		/** Input configuration information for a labeling job. */
		InputConfig?: LabelingJobInputConfig;
	}

	/** Provides summary information about a labeling job. */
	export interface LabelingJobSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		LabelingJobArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		LabelingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		PreHumanTaskLambdaArn: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		AnnotationConsolidationLambdaArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateLabelingJobSummaryFormGroup() {
		return new FormGroup<LabelingJobSummaryFormProperties>({
			LabelingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			LabelingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:labeling-job/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LabelingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
			WorkteamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workteam/.*')]),
			PreHumanTaskLambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			AnnotationConsolidationLambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?')]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface ListLabelingJobsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/** Max length: 63 */
		NameContains?: string | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
	}
	export interface ListLabelingJobsRequestFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
		StatusEquals: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,
	}
	export function CreateListLabelingJobsRequestFormGroup() {
		return new FormGroup<ListLabelingJobsRequestFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			StatusEquals: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined),
		});

	}

	export interface ListLabelingJobsForWorkteamResponse {

		/** Required */
		LabelingJobSummaryList: Array<LabelingJobForWorkteamSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListLabelingJobsForWorkteamResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLabelingJobsForWorkteamResponseFormGroup() {
		return new FormGroup<ListLabelingJobsForWorkteamResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information for a work team. */
	export interface LabelingJobForWorkteamSummary {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		JobReferenceCode: string;

		/** Required */
		WorkRequesterAccountId: string;

		/** Required */
		CreationTime: Date;

		/** Provides counts for human-labeled tasks in the labeling job. */
		LabelCounters?: LabelCountersForWorkteam;

		/**
		 * Minimum: 1
		 * Maximum: 9
		 */
		NumberOfHumanWorkersPerDataObject?: number | null;
	}

	/** Provides summary information for a work team. */
	export interface LabelingJobForWorkteamSummaryFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		JobReferenceCode: FormControl<string | null | undefined>,

		/** Required */
		WorkRequesterAccountId: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 9
		 */
		NumberOfHumanWorkersPerDataObject: FormControl<number | null | undefined>,
	}
	export function CreateLabelingJobForWorkteamSummaryFormGroup() {
		return new FormGroup<LabelingJobForWorkteamSummaryFormProperties>({
			LabelingJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			JobReferenceCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('.+')]),
			WorkRequesterAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NumberOfHumanWorkersPerDataObject: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(9)]),
		});

	}


	/** Provides counts for human-labeled tasks in the labeling job. */
	export interface LabelCountersForWorkteam {

		/** Minimum: 0 */
		HumanLabeled?: number | null;

		/** Minimum: 0 */
		PendingHuman?: number | null;

		/** Minimum: 0 */
		Total?: number | null;
	}

	/** Provides counts for human-labeled tasks in the labeling job. */
	export interface LabelCountersForWorkteamFormProperties {

		/** Minimum: 0 */
		HumanLabeled: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		PendingHuman: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		Total: FormControl<number | null | undefined>,
	}
	export function CreateLabelCountersForWorkteamFormGroup() {
		return new FormGroup<LabelCountersForWorkteamFormProperties>({
			HumanLabeled: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			PendingHuman: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Total: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface ListLabelingJobsForWorkteamRequest {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: string;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 8192 */
		NextToken?: string | null;
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobReferenceCodeContains?: string | null;
		SortBy?: ListAppsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}
	export interface ListLabelingJobsForWorkteamRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		WorkteamArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		JobReferenceCodeContains: FormControl<string | null | undefined>,
		SortBy: FormControl<ListAppsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
	}
	export function CreateListLabelingJobsForWorkteamRequestFormGroup() {
		return new FormGroup<ListLabelingJobsForWorkteamRequestFormProperties>({
			WorkteamArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:workteam/.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			JobReferenceCodeContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			SortBy: new FormControl<ListAppsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
		});

	}

	export interface ListModelPackagesOutput {

		/** Required */
		ModelPackageSummaryList: Array<ModelPackageSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListModelPackagesOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelPackagesOutputFormGroup() {
		return new FormGroup<ListModelPackagesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information about a model package. */
	export interface ModelPackageSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ModelPackageName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ModelPackageArn: string;

		/** Max length: 1024 */
		ModelPackageDescription?: string | null;

		/** Required */
		CreationTime: Date;

		/** Required */
		ModelPackageStatus: DescribeAlgorithmOutputAlgorithmStatus;
	}

	/** Provides summary information about a model package. */
	export interface ModelPackageSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ModelPackageName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ModelPackageArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		ModelPackageDescription: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		ModelPackageStatus: FormControl<DescribeAlgorithmOutputAlgorithmStatus | null | undefined>,
	}
	export function CreateModelPackageSummaryFormGroup() {
		return new FormGroup<ModelPackageSummaryFormProperties>({
			ModelPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			ModelPackageArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model-package/.*')]),
			ModelPackageDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ModelPackageStatus: new FormControl<DescribeAlgorithmOutputAlgorithmStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListModelPackagesInput {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 63 */
		NameContains?: string | null;

		/** Max length: 8192 */
		NextToken?: string | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}
	export interface ListModelPackagesInputFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<ListAlgorithmsInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
	}
	export function CreateListModelPackagesInputFormGroup() {
		return new FormGroup<ListModelPackagesInputFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			SortBy: new FormControl<ListAlgorithmsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
		});

	}

	export interface ListModelsOutput {

		/** Required */
		Models: Array<ModelSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListModelsOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelsOutputFormGroup() {
		return new FormGroup<ListModelsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information about a model. */
	export interface ModelSummary {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ModelArn: string;

		/** Required */
		CreationTime: Date;
	}

	/** Provides summary information about a model. */
	export interface ModelSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		ModelName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ModelArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateModelSummaryFormGroup() {
		return new FormGroup<ModelSummaryFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ModelArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListModelsInput {
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 63 */
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
	}
	export interface ListModelsInputFormProperties {
		SortBy: FormControl<ListAlgorithmsInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateListModelsInputFormGroup() {
		return new FormGroup<ListModelsInputFormProperties>({
			SortBy: new FormControl<ListAlgorithmsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9-]+')]),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMonitoringExecutionsResponse {

		/** Required */
		MonitoringExecutionSummaries: Array<MonitoringExecutionSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListMonitoringExecutionsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitoringExecutionsResponseFormGroup() {
		return new FormGroup<ListMonitoringExecutionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export interface ListMonitoringExecutionsRequest {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName?: string | null;

		/** Max length: 63 */
		EndpointName?: string | null;
		SortBy?: ListMonitoringExecutionsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		ScheduledTimeBefore?: Date | null;
		ScheduledTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		StatusEquals?: MonitoringExecutionSummaryMonitoringExecutionStatus | null;
	}
	export interface ListMonitoringExecutionsRequestFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,

		/** Max length: 63 */
		EndpointName: FormControl<string | null | undefined>,
		SortBy: FormControl<ListMonitoringExecutionsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		ScheduledTimeBefore: FormControl<Date | null | undefined>,
		ScheduledTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		StatusEquals: FormControl<MonitoringExecutionSummaryMonitoringExecutionStatus | null | undefined>,
	}
	export function CreateListMonitoringExecutionsRequestFormGroup() {
		return new FormGroup<ListMonitoringExecutionsRequestFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			SortBy: new FormControl<ListMonitoringExecutionsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			ScheduledTimeBefore: new FormControl<Date | null | undefined>(undefined),
			ScheduledTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			StatusEquals: new FormControl<MonitoringExecutionSummaryMonitoringExecutionStatus | null | undefined>(undefined),
		});

	}

	export enum ListMonitoringExecutionsRequestSortBy { CreationTime = 0, ScheduledTime = 1, Status = 2 }

	export interface ListMonitoringSchedulesResponse {

		/** Required */
		MonitoringScheduleSummaries: Array<MonitoringScheduleSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListMonitoringSchedulesResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitoringSchedulesResponseFormGroup() {
		return new FormGroup<ListMonitoringSchedulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Summarizes the monitoring schedule. */
	export interface MonitoringScheduleSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		MonitoringScheduleArn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		MonitoringScheduleStatus: DescribeMonitoringScheduleResponseMonitoringScheduleStatus;

		/** Max length: 63 */
		EndpointName?: string | null;
	}

	/** Summarizes the monitoring schedule. */
	export interface MonitoringScheduleSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		MonitoringScheduleArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		MonitoringScheduleStatus: FormControl<DescribeMonitoringScheduleResponseMonitoringScheduleStatus | null | undefined>,

		/** Max length: 63 */
		EndpointName: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringScheduleSummaryFormGroup() {
		return new FormGroup<MonitoringScheduleSummaryFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
			MonitoringScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			MonitoringScheduleStatus: new FormControl<DescribeMonitoringScheduleResponseMonitoringScheduleStatus | null | undefined>(undefined, [Validators.required]),
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface ListMonitoringSchedulesRequest {

		/** Max length: 63 */
		EndpointName?: string | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 63 */
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		StatusEquals?: DescribeMonitoringScheduleResponseMonitoringScheduleStatus | null;
	}
	export interface ListMonitoringSchedulesRequestFormProperties {

		/** Max length: 63 */
		EndpointName: FormControl<string | null | undefined>,
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		StatusEquals: FormControl<DescribeMonitoringScheduleResponseMonitoringScheduleStatus | null | undefined>,
	}
	export function CreateListMonitoringSchedulesRequestFormGroup() {
		return new FormGroup<ListMonitoringSchedulesRequestFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			StatusEquals: new FormControl<DescribeMonitoringScheduleResponseMonitoringScheduleStatus | null | undefined>(undefined),
		});

	}

	export interface ListNotebookInstanceLifecycleConfigsOutput {

		/** Max length: 8192 */
		NextToken?: string | null;
		NotebookInstanceLifecycleConfigs?: Array<NotebookInstanceLifecycleConfigSummary>;
	}
	export interface ListNotebookInstanceLifecycleConfigsOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookInstanceLifecycleConfigsOutputFormGroup() {
		return new FormGroup<ListNotebookInstanceLifecycleConfigsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides a summary of a notebook instance lifecycle configuration. */
	export interface NotebookInstanceLifecycleConfigSummary {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		NotebookInstanceLifecycleConfigArn: string;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	/** Provides a summary of a notebook instance lifecycle configuration. */
	export interface NotebookInstanceLifecycleConfigSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		NotebookInstanceLifecycleConfigArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateNotebookInstanceLifecycleConfigSummaryFormGroup() {
		return new FormGroup<NotebookInstanceLifecycleConfigSummaryFormProperties>({
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			NotebookInstanceLifecycleConfigArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListNotebookInstanceLifecycleConfigsInput {

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		SortBy?: ListCodeRepositoriesInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 63 */
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
	}
	export interface ListNotebookInstanceLifecycleConfigsInputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		SortBy: FormControl<ListCodeRepositoriesInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateListNotebookInstanceLifecycleConfigsInputFormGroup() {
		return new FormGroup<ListNotebookInstanceLifecycleConfigsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			SortBy: new FormControl<ListCodeRepositoriesInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9-]+')]),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListNotebookInstancesOutput {

		/** Max length: 8192 */
		NextToken?: string | null;
		NotebookInstances?: Array<NotebookInstanceSummary>;
	}
	export interface ListNotebookInstancesOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookInstancesOutputFormGroup() {
		return new FormGroup<ListNotebookInstancesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information for an Amazon SageMaker notebook instance. */
	export interface NotebookInstanceSummary {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		NotebookInstanceArn: string;
		NotebookInstanceStatus?: DescribeNotebookInstanceOutputNotebookInstanceStatus | null;
		Url?: string | null;
		InstanceType?: NotebookInstanceSummaryInstanceType | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;

		/** Max length: 63 */
		NotebookInstanceLifecycleConfigName?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultCodeRepository?: string | null;

		/** Maximum items: 3 */
		AdditionalCodeRepositories?: Array<string>;
	}

	/** Provides summary information for an Amazon SageMaker notebook instance. */
	export interface NotebookInstanceSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		NotebookInstanceArn: FormControl<string | null | undefined>,
		NotebookInstanceStatus: FormControl<DescribeNotebookInstanceOutputNotebookInstanceStatus | null | undefined>,
		Url: FormControl<string | null | undefined>,
		InstanceType: FormControl<NotebookInstanceSummaryInstanceType | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Max length: 63 */
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultCodeRepository: FormControl<string | null | undefined>,
	}
	export function CreateNotebookInstanceSummaryFormGroup() {
		return new FormGroup<NotebookInstanceSummaryFormProperties>({
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			NotebookInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
			NotebookInstanceStatus: new FormControl<DescribeNotebookInstanceOutputNotebookInstanceStatus | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<NotebookInstanceSummaryInstanceType | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DefaultCodeRepository: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('^https://([^/]+)/?(.*)$|^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export enum NotebookInstanceSummaryInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export interface ListNotebookInstancesInput {

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 63 */
		NameContains?: string | null;
		CreationTimeBefore?: Date | null;
		CreationTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		StatusEquals?: DescribeNotebookInstanceOutputNotebookInstanceStatus | null;

		/** Max length: 63 */
		NotebookInstanceLifecycleConfigNameContains?: string | null;

		/** Max length: 1024 */
		DefaultCodeRepositoryContains?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		AdditionalCodeRepositoryEquals?: string | null;
	}
	export interface ListNotebookInstancesInputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		StatusEquals: FormControl<DescribeNotebookInstanceOutputNotebookInstanceStatus | null | undefined>,

		/** Max length: 63 */
		NotebookInstanceLifecycleConfigNameContains: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		DefaultCodeRepositoryContains: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		AdditionalCodeRepositoryEquals: FormControl<string | null | undefined>,
	}
	export function CreateListNotebookInstancesInputFormGroup() {
		return new FormGroup<ListNotebookInstancesInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9-]+')]),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			StatusEquals: new FormControl<DescribeNotebookInstanceOutputNotebookInstanceStatus | null | undefined>(undefined),
			NotebookInstanceLifecycleConfigNameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DefaultCodeRepositoryContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9-]+')]),
			AdditionalCodeRepositoryEquals: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('^https://([^/]+)/?(.*)$|^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface ListProcessingJobsResponse {

		/** Required */
		ProcessingJobSummaries: Array<ProcessingJobSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListProcessingJobsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProcessingJobsResponseFormGroup() {
		return new FormGroup<ListProcessingJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Summary of information about a processing job. */
	export interface ProcessingJobSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		ProcessingJobArn: string;

		/** Required */
		CreationTime: Date;
		ProcessingEndTime?: Date | null;
		LastModifiedTime?: Date | null;

		/** Required */
		ProcessingJobStatus: TrialComponentStatusPrimaryStatus;

		/** Max length: 1024 */
		FailureReason?: string | null;

		/** Max length: 1024 */
		ExitMessage?: string | null;
	}

	/** Summary of information about a processing job. */
	export interface ProcessingJobSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		ProcessingJobArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		ProcessingEndTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		ProcessingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		ExitMessage: FormControl<string | null | undefined>,
	}
	export function CreateProcessingJobSummaryFormGroup() {
		return new FormGroup<ProcessingJobSummaryFormProperties>({
			ProcessingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ProcessingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:processing-job/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ProcessingEndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			ProcessingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			ExitMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\S\s]*')]),
		});

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

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListProcessingJobsRequestFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,
		NameContains: FormControl<string | null | undefined>,
		StatusEquals: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProcessingJobsRequestFormGroup() {
		return new FormGroup<ListProcessingJobsRequestFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined),
			StatusEquals: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined),
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListSubscribedWorkteamsResponse {

		/** Required */
		SubscribedWorkteams: Array<SubscribedWorkteam>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListSubscribedWorkteamsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubscribedWorkteamsResponseFormGroup() {
		return new FormGroup<ListSubscribedWorkteamsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export interface ListSubscribedWorkteamsRequest {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NameContains?: string | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListSubscribedWorkteamsRequestFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NameContains: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSubscribedWorkteamsRequestFormGroup() {
		return new FormGroup<ListSubscribedWorkteamsRequestFormProperties>({
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListTagsOutput {

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListTagsOutputFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsOutputFormGroup() {
		return new FormGroup<ListTagsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export interface ListTagsInput {

		/**
		 * Required
		 * Max length: 256
		 */
		ResourceArn: string;

		/** Max length: 8192 */
		NextToken?: string | null;

		/** Minimum: 50 */
		MaxResults?: number | null;
	}
	export interface ListTagsInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 50 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsInputFormGroup() {
		return new FormGroup<ListTagsInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:.*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(50)]),
		});

	}

	export interface ListTrainingJobsResponse {

		/** Required */
		TrainingJobSummaries: Array<TrainingJobSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListTrainingJobsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrainingJobsResponseFormGroup() {
		return new FormGroup<ListTrainingJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides summary information about a training job. */
	export interface TrainingJobSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		TrainingJobArn: string;

		/** Required */
		CreationTime: Date;
		TrainingEndTime?: Date | null;
		LastModifiedTime?: Date | null;

		/** Required */
		TrainingJobStatus: TrialComponentStatusPrimaryStatus;
	}

	/** Provides summary information about a training job. */
	export interface TrainingJobSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		TrainingJobArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		TrainingEndTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		TrainingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,
	}
	export function CreateTrainingJobSummaryFormGroup() {
		return new FormGroup<TrainingJobSummaryFormProperties>({
			TrainingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrainingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-job/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TrainingEndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			TrainingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTrainingJobsRequest {

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;

		/** Max length: 63 */
		NameContains?: string | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}
	export interface ListTrainingJobsRequestFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		StatusEquals: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
	}
	export function CreateListTrainingJobsRequestFormGroup() {
		return new FormGroup<ListTrainingJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			StatusEquals: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined),
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
		});

	}

	export interface ListTrainingJobsForHyperParameterTuningJobResponse {

		/** Required */
		TrainingJobSummaries: Array<HyperParameterTrainingJobSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListTrainingJobsForHyperParameterTuningJobResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrainingJobsForHyperParameterTuningJobResponseFormGroup() {
		return new FormGroup<ListTrainingJobsForHyperParameterTuningJobResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export interface ListTrainingJobsForHyperParameterTuningJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: string;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
		SortBy?: ListTrainingJobsForHyperParameterTuningJobRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
	}
	export interface ListTrainingJobsForHyperParameterTuningJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		StatusEquals: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,
		SortBy: FormControl<ListTrainingJobsForHyperParameterTuningJobRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
	}
	export function CreateListTrainingJobsForHyperParameterTuningJobRequestFormGroup() {
		return new FormGroup<ListTrainingJobsForHyperParameterTuningJobRequestFormProperties>({
			HyperParameterTuningJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			StatusEquals: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined),
			SortBy: new FormControl<ListTrainingJobsForHyperParameterTuningJobRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
		});

	}

	export enum ListTrainingJobsForHyperParameterTuningJobRequestSortBy { Name = 0, CreationTime = 1, Status = 2, FinalObjectiveMetricValue = 3 }

	export interface ListTransformJobsResponse {

		/** Required */
		TransformJobSummaries: Array<TransformJobSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListTransformJobsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransformJobsResponseFormGroup() {
		return new FormGroup<ListTransformJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call. */
	export interface TransformJobSummary {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		TransformJobArn: string;

		/** Required */
		CreationTime: Date;
		TransformEndTime?: Date | null;
		LastModifiedTime?: Date | null;

		/** Required */
		TransformJobStatus: TrialComponentStatusPrimaryStatus;

		/** Max length: 1024 */
		FailureReason?: string | null;
	}

	/** Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call. */
	export interface TransformJobSummaryFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		TransformJobArn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		TransformEndTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		TransformJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateTransformJobSummaryFormGroup() {
		return new FormGroup<TransformJobSummaryFormProperties>({
			TransformJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TransformJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:transform-job/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TransformEndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			TransformJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface ListTransformJobsRequest {
		CreationTimeAfter?: Date | null;
		CreationTimeBefore?: Date | null;
		LastModifiedTimeAfter?: Date | null;
		LastModifiedTimeBefore?: Date | null;

		/** Max length: 63 */
		NameContains?: string | null;
		StatusEquals?: TrialComponentStatusPrimaryStatus | null;
		SortBy?: ListAutoMLJobsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListTransformJobsRequestFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		LastModifiedTimeAfter: FormControl<Date | null | undefined>,
		LastModifiedTimeBefore: FormControl<Date | null | undefined>,

		/** Max length: 63 */
		NameContains: FormControl<string | null | undefined>,
		StatusEquals: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,
		SortBy: FormControl<ListAutoMLJobsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTransformJobsRequestFormGroup() {
		return new FormGroup<ListTransformJobsRequestFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeAfter: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTimeBefore: new FormControl<Date | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('[a-zA-Z0-9\-]+')]),
			StatusEquals: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined),
			SortBy: new FormControl<ListAutoMLJobsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListTrialComponentsResponse {
		TrialComponentSummaries?: Array<TrialComponentSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListTrialComponentsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrialComponentsResponseFormGroup() {
		return new FormGroup<ListTrialComponentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** A summary of the properties of a trial component. To get all the properties, call the <a>DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>. */
	export interface TrialComponentSummary {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName?: string | null;

		/** Max length: 256 */
		TrialComponentArn?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
		TrialComponentSource?: TrialComponentSource;

		/** The status of the trial component. */
		Status?: TrialComponentStatus;
		StartTime?: Date | null;
		EndTime?: Date | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext;
	}

	/** A summary of the properties of a trial component. To get all the properties, call the <a>DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>. */
	export interface TrialComponentSummaryFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateTrialComponentSummaryFormGroup() {
		return new FormGroup<TrialComponentSummaryFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTrialComponentsRequest {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName?: string | null;

		/** Max length: 256 */
		SourceArn?: string | null;
		CreatedAfter?: Date | null;
		CreatedBefore?: Date | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListTrialComponentsRequestFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		SourceArn: FormControl<string | null | undefined>,
		CreatedAfter: FormControl<Date | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
		SortBy: FormControl<ListAlgorithmsInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrialComponentsRequestFormGroup() {
		return new FormGroup<ListTrialComponentsRequestFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
			SortBy: new FormControl<ListAlgorithmsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export interface ListTrialsResponse {
		TrialSummaries?: Array<TrialSummary>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListTrialsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrialsResponseFormGroup() {
		return new FormGroup<ListTrialsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** A summary of the properties of a trial. To get the complete set of properties, call the <a>DescribeTrial</a> API and provide the <code>TrialName</code>. */
	export interface TrialSummary {

		/** Max length: 256 */
		TrialArn?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** The source of the trial. */
		TrialSource?: TrialSource;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	/** A summary of the properties of a trial. To get the complete set of properties, call the <a>DescribeTrial</a> API and provide the <code>TrialName</code>. */
	export interface TrialSummaryFormProperties {

		/** Max length: 256 */
		TrialArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateTrialSummaryFormGroup() {
		return new FormGroup<TrialSummaryFormProperties>({
			TrialArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial/.*')]),
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTrialsRequest {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName?: string | null;
		CreatedAfter?: Date | null;
		CreatedBefore?: Date | null;
		SortBy?: ListAlgorithmsInputSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListTrialsRequestFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,
		CreatedAfter: FormControl<Date | null | undefined>,
		CreatedBefore: FormControl<Date | null | undefined>,
		SortBy: FormControl<ListAlgorithmsInputSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrialsRequestFormGroup() {
		return new FormGroup<ListTrialsRequestFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			CreatedAfter: new FormControl<Date | null | undefined>(undefined),
			CreatedBefore: new FormControl<Date | null | undefined>(undefined),
			SortBy: new FormControl<ListAlgorithmsInputSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export interface ListUserProfilesResponse {
		UserProfiles?: Array<UserProfileDetails>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListUserProfilesResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserProfilesResponseFormGroup() {
		return new FormGroup<ListUserProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** The user profile details. */
	export interface UserProfileDetails {

		/** Max length: 63 */
		DomainId?: string | null;

		/** Max length: 63 */
		UserProfileName?: string | null;
		Status?: DescribeDomainResponseStatus | null;
		CreationTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	/** The user profile details. */
	export interface UserProfileDetailsFormProperties {

		/** Max length: 63 */
		DomainId: FormControl<string | null | undefined>,

		/** Max length: 63 */
		UserProfileName: FormControl<string | null | undefined>,
		Status: FormControl<DescribeDomainResponseStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateUserProfileDetailsFormGroup() {
		return new FormGroup<UserProfileDetailsFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Status: new FormControl<DescribeDomainResponseStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListUserProfilesRequest {

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;
		SortBy?: ListUserProfilesRequestSortBy | null;

		/** Max length: 63 */
		DomainIdEquals?: string | null;

		/** Max length: 63 */
		UserProfileNameContains?: string | null;
	}
	export interface ListUserProfilesRequestFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,
		SortBy: FormControl<ListUserProfilesRequestSortBy | null | undefined>,

		/** Max length: 63 */
		DomainIdEquals: FormControl<string | null | undefined>,

		/** Max length: 63 */
		UserProfileNameContains: FormControl<string | null | undefined>,
	}
	export function CreateListUserProfilesRequestFormGroup() {
		return new FormGroup<ListUserProfilesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			SortBy: new FormControl<ListUserProfilesRequestSortBy | null | undefined>(undefined),
			DomainIdEquals: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63)]),
			UserProfileNameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export enum ListUserProfilesRequestSortBy { CreationTime = 0, LastModifiedTime = 1 }

	export interface ListWorkteamsResponse {

		/** Required */
		Workteams: Array<Workteam>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface ListWorkteamsResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkteamsResponseFormGroup() {
		return new FormGroup<ListWorkteamsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}

	export interface ListWorkteamsRequest {
		SortBy?: ListWorkteamsRequestSortBy | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NameContains?: string | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListWorkteamsRequestFormProperties {
		SortBy: FormControl<ListWorkteamsRequestSortBy | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NameContains: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkteamsRequestFormGroup() {
		return new FormGroup<ListWorkteamsRequestFormProperties>({
			SortBy: new FormControl<ListWorkteamsRequestSortBy | null | undefined>(undefined),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NameContains: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export enum ListWorkteamsRequestSortBy { Name = 0, CreateDate = 1 }

	export interface RenderUiTemplateResponse {

		/** Required */
		RenderedContent: string;

		/** Required */
		Errors: Array<RenderingError>;
	}
	export interface RenderUiTemplateResponseFormProperties {

		/** Required */
		RenderedContent: FormControl<string | null | undefined>,
	}
	export function CreateRenderUiTemplateResponseFormGroup() {
		return new FormGroup<RenderUiTemplateResponseFormProperties>({
			RenderedContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A description of an error that occurred while rendering the template. */
	export interface RenderingError {

		/** Required */
		Code: string;

		/** Required */
		Message: string;
	}

	/** A description of an error that occurred while rendering the template. */
	export interface RenderingErrorFormProperties {

		/** Required */
		Code: FormControl<string | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateRenderingErrorFormGroup() {
		return new FormGroup<RenderingErrorFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RenderUiTemplateRequest {

		/** The Liquid template for the worker user interface. */
		UiTemplate?: UiTemplate;

		/**
		 * Contains input values for a task.
		 * Required
		 */
		Task: RenderableTask;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Max length: 1024 */
		HumanTaskUiArn?: string | null;
	}
	export interface RenderUiTemplateRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		HumanTaskUiArn: FormControl<string | null | undefined>,
	}
	export function CreateRenderUiTemplateRequestFormGroup() {
		return new FormGroup<RenderUiTemplateRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			HumanTaskUiArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:human-task-ui/.*')]),
		});

	}


	/** Contains input values for a task. */
	export interface RenderableTask {

		/**
		 * Required
		 * Max length: 128000
		 * Min length: 2
		 */
		Input: string;
	}

	/** Contains input values for a task. */
	export interface RenderableTaskFormProperties {

		/**
		 * Required
		 * Max length: 128000
		 * Min length: 2
		 */
		Input: FormControl<string | null | undefined>,
	}
	export function CreateRenderableTaskFormGroup() {
		return new FormGroup<RenderableTaskFormProperties>({
			Input: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128000), Validators.minLength(2), Validators.pattern('[\S\s]+')]),
		});

	}

	export interface SearchResponse {
		Results?: Array<SearchRecord>;

		/** Max length: 8192 */
		NextToken?: string | null;
	}
	export interface SearchResponseFormProperties {

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
		});

	}


	/** A single resource returned as part of the <a>Search</a> API response. */
	export interface SearchRecord {

		/** Contains information about a training job. */
		TrainingJob?: TrainingJob;

		/** The properties of an experiment as returned by the <a>Search</a> API. */
		Experiment?: Experiment;

		/** The properties of a trial as returned by the <a>Search</a> API. */
		Trial?: Trial;

		/** The properties of a trial component as returned by the <a>Search</a> API. */
		TrialComponent?: TrialComponent;
	}

	/** A single resource returned as part of the <a>Search</a> API response. */
	export interface SearchRecordFormProperties {
	}
	export function CreateSearchRecordFormGroup() {
		return new FormGroup<SearchRecordFormProperties>({
		});

	}


	/** Contains information about a training job. */
	export interface TrainingJob {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName?: string | null;

		/** Max length: 256 */
		TrainingJobArn?: string | null;

		/** Max length: 256 */
		TuningJobArn?: string | null;

		/** Max length: 2048 */
		LabelingJobArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn?: string | null;

		/** <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p> */
		ModelArtifacts?: ModelArtifacts;
		TrainingJobStatus?: TrialComponentStatusPrimaryStatus | null;
		SecondaryStatus?: DescribeTrainingJobResponseSecondaryStatus | null;

		/** Max length: 1024 */
		FailureReason?: string | null;
		HyperParameters?: HyperParameters;

		/** <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p> */
		AlgorithmSpecification?: AlgorithmSpecification;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		InputDataConfig?: Array<Channel>;

		/** Provides information about how to store model training results (model artifacts). */
		OutputDataConfig?: OutputDataConfig;

		/** Describes the resources, including ML compute instances and ML storage volumes, to use for model training. */
		ResourceConfig?: ResourceConfig;

		/** Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. */
		VpcConfig?: VpcConfig;

		/** <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note> */
		StoppingCondition?: StoppingCondition;
		CreationTime?: Date | null;
		TrainingStartTime?: Date | null;
		TrainingEndTime?: Date | null;
		LastModifiedTime?: Date | null;
		SecondaryStatusTransitions?: Array<SecondaryStatusTransition>;

		/**
		 * Minimum items: 0
		 * Maximum items: 40
		 */
		FinalMetricDataList?: Array<MetricData>;
		EnableNetworkIsolation?: boolean | null;
		EnableInterContainerTrafficEncryption?: boolean | null;
		EnableManagedSpotTraining?: boolean | null;

		/** Contains information about the output location for managed spot training checkpoint data. */
		CheckpointConfig?: CheckpointConfig;

		/** Minimum: 1 */
		TrainingTimeInSeconds?: number | null;

		/** Minimum: 1 */
		BillableTimeInSeconds?: number | null;

		/** Configuration information for the debug hook parameters, collection configuration, and storage paths. */
		DebugHookConfig?: DebugHookConfig;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		DebugRuleConfigurations?: Array<DebugRuleConfiguration>;

		/** Configuration of storage locations for TensorBoard output. */
		TensorBoardOutputConfig?: TensorBoardOutputConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		DebugRuleEvaluationStatuses?: Array<DebugRuleEvaluationStatus>;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}

	/** Contains information about a training job. */
	export interface TrainingJobFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrainingJobArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TuningJobArn: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		LabelingJobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: FormControl<string | null | undefined>,
		TrainingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,
		SecondaryStatus: FormControl<DescribeTrainingJobResponseSecondaryStatus | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		TrainingStartTime: FormControl<Date | null | undefined>,
		TrainingEndTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		EnableNetworkIsolation: FormControl<boolean | null | undefined>,
		EnableInterContainerTrafficEncryption: FormControl<boolean | null | undefined>,
		EnableManagedSpotTraining: FormControl<boolean | null | undefined>,

		/** Minimum: 1 */
		TrainingTimeInSeconds: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		BillableTimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTrainingJobFormGroup() {
		return new FormGroup<TrainingJobFormProperties>({
			TrainingJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrainingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-job/.*')]),
			TuningJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:hyper-parameter-tuning-job/.*')]),
			LabelingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:labeling-job/.*')]),
			AutoMLJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:automl-job/.*')]),
			TrainingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined),
			SecondaryStatus: new FormControl<DescribeTrainingJobResponseSecondaryStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			TrainingStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingEndTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			EnableNetworkIsolation: new FormControl<boolean | null | undefined>(undefined),
			EnableInterContainerTrafficEncryption: new FormControl<boolean | null | undefined>(undefined),
			EnableManagedSpotTraining: new FormControl<boolean | null | undefined>(undefined),
			TrainingTimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			BillableTimeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** The properties of an experiment as returned by the <a>Search</a> API. */
	export interface Experiment {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;

		/** Max length: 256 */
		ExperimentArn?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** The source of the experiment. */
		Source?: ExperimentSource;

		/** Max length: 3072 */
		Description?: string | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}

	/** The properties of an experiment as returned by the <a>Search</a> API. */
	export interface ExperimentFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ExperimentArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** Max length: 3072 */
		Description: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentFormGroup() {
		return new FormGroup<ExperimentFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ExperimentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment/.*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3072), Validators.pattern('.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The properties of a trial as returned by the <a>Search</a> API. */
	export interface Trial {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName?: string | null;

		/** Max length: 256 */
		TrialArn?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;

		/** The source of the trial. */
		Source?: TrialSource;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		TrialComponentSummaries?: Array<TrialComponentSimpleSummary>;
	}

	/** The properties of a trial as returned by the <a>Search</a> API. */
	export interface TrialFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrialArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateTrialFormGroup() {
		return new FormGroup<TrialFormProperties>({
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial/.*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A short summary of a trial component. */
	export interface TrialComponentSimpleSummary {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName?: string | null;

		/** Max length: 256 */
		TrialComponentArn?: string | null;

		/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
		TrialComponentSource?: TrialComponentSource;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext;
	}

	/** A short summary of a trial component. */
	export interface TrialComponentSimpleSummaryFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateTrialComponentSimpleSummaryFormGroup() {
		return new FormGroup<TrialComponentSimpleSummaryFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The properties of a trial component as returned by the <a>Search</a> API. */
	export interface TrialComponent {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** Max length: 256 */
		TrialComponentArn?: string | null;

		/** The Amazon Resource Name (ARN) and job type of the source of a trial component. */
		Source?: TrialComponentSource;

		/** The status of the trial component. */
		Status?: TrialComponentStatus;
		StartTime?: Date | null;
		EndTime?: Date | null;
		CreationTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		CreatedBy?: UserContext;
		LastModifiedTime?: Date | null;

		/** Information about the user who created or modified an experiment, trial, or trial component. */
		LastModifiedBy?: UserContext;
		Parameters?: TrialComponentParameters;
		InputArtifacts?: TrialComponentArtifacts;
		OutputArtifacts?: TrialComponentArtifacts;
		Metrics?: Array<TrialComponentMetricSummary>;

		/** Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned. */
		SourceDetail?: TrialComponentSourceDetail;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		Parents?: Array<Parent>;
	}

	/** The properties of a trial component as returned by the <a>Search</a> API. */
	export interface TrialComponentFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateTrialComponentFormGroup() {
		return new FormGroup<TrialComponentFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned. */
	export interface TrialComponentSourceDetail {

		/** Max length: 256 */
		SourceArn?: string | null;

		/** Contains information about a training job. */
		TrainingJob?: TrainingJob;

		/** An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process Data and Evaluate Models</a>. */
		ProcessingJob?: ProcessingJob;
	}

	/** Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned. */
	export interface TrialComponentSourceDetailFormProperties {

		/** Max length: 256 */
		SourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTrialComponentSourceDetailFormGroup() {
		return new FormGroup<TrialComponentSourceDetailFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:.*')]),
		});

	}


	/** An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process Data and Evaluate Models</a>. */
	export interface ProcessingJob {

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		ProcessingInputs?: Array<ProcessingInput>;

		/** The output configuration for the processing job. */
		ProcessingOutputConfig?: ProcessingOutputConfig;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName?: string | null;

		/** Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance. */
		ProcessingResources?: ProcessingResources;

		/** Specifies a time limit for how long the processing job is allowed to run. */
		StoppingCondition?: ProcessingStoppingCondition;

		/** Configuration to run a processing job in a specified container image. */
		AppSpecification?: AppSpecification;
		Environment?: ProcessingEnvironmentMap;

		/** Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs. */
		NetworkConfig?: NetworkConfig;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/** Configuration for the experiment. */
		ExperimentConfig?: ExperimentConfig;

		/** Max length: 256 */
		ProcessingJobArn?: string | null;
		ProcessingJobStatus?: TrialComponentStatusPrimaryStatus | null;

		/** Max length: 1024 */
		ExitMessage?: string | null;

		/** Max length: 1024 */
		FailureReason?: string | null;
		ProcessingEndTime?: Date | null;
		ProcessingStartTime?: Date | null;
		LastModifiedTime?: Date | null;
		CreationTime?: Date | null;

		/** Max length: 256 */
		MonitoringScheduleArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn?: string | null;

		/** Max length: 256 */
		TrainingJobArn?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}

	/** An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process Data and Evaluate Models</a>. */
	export interface ProcessingJobFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ProcessingJobArn: FormControl<string | null | undefined>,
		ProcessingJobStatus: FormControl<TrialComponentStatusPrimaryStatus | null | undefined>,

		/** Max length: 1024 */
		ExitMessage: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		FailureReason: FormControl<string | null | undefined>,
		ProcessingEndTime: FormControl<Date | null | undefined>,
		ProcessingStartTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Max length: 256 */
		MonitoringScheduleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		AutoMLJobArn: FormControl<string | null | undefined>,

		/** Max length: 256 */
		TrainingJobArn: FormControl<string | null | undefined>,
	}
	export function CreateProcessingJobFormGroup() {
		return new FormGroup<ProcessingJobFormProperties>({
			ProcessingJobName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			ProcessingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:processing-job/.*')]),
			ProcessingJobStatus: new FormControl<TrialComponentStatusPrimaryStatus | null | undefined>(undefined),
			ExitMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\S\s]*')]),
			FailureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			ProcessingEndTime: new FormControl<Date | null | undefined>(undefined),
			ProcessingStartTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			MonitoringScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*')]),
			AutoMLJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:automl-job/.*')]),
			TrainingJobArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-job/.*')]),
		});

	}


	/** The trial that a trial component is associated with and the experiment the trial is part of. A component might not be associated with a trial. A component can be associated with multiple trials. */
	export interface Parent {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName?: string | null;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName?: string | null;
	}

	/** The trial that a trial component is associated with and the experiment the trial is part of. A component might not be associated with a trial. A component can be associated with multiple trials. */
	export interface ParentFormProperties {

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,
	}
	export function CreateParentFormGroup() {
		return new FormGroup<ParentFormProperties>({
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface SearchRequest {

		/** Required */
		Resource: GetSearchSuggestionsRequestResource;

		/** <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value. A <code>SearchExpression</code> can include only one <code>Contains</code> operator.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul> */
		SearchExpression?: SearchExpression;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SortBy?: string | null;
		SortOrder?: ListAlgorithmsInputSortOrder | null;

		/** Max length: 8192 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface SearchRequestFormProperties {

		/** Required */
		Resource: FormControl<GetSearchSuggestionsRequestResource | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<ListAlgorithmsInputSortOrder | null | undefined>,

		/** Max length: 8192 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchRequestFormGroup() {
		return new FormGroup<SearchRequestFormProperties>({
			Resource: new FormControl<GetSearchSuggestionsRequestResource | null | undefined>(undefined, [Validators.required]),
			SortBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			SortOrder: new FormControl<ListAlgorithmsInputSortOrder | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192), Validators.pattern('.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value. A <code>SearchExpression</code> can include only one <code>Contains</code> operator.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul> */
	export interface SearchExpression {

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Filters?: Array<Filter>;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		NestedFilters?: Array<NestedFilters>;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		SubExpressions?: Array<SearchExpression>;
		Operator?: SearchExpressionOperator | null;
	}

	/** <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value. A <code>SearchExpression</code> can include only one <code>Contains</code> operator.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul> */
	export interface SearchExpressionFormProperties {
		Operator: FormControl<SearchExpressionOperator | null | undefined>,
	}
	export function CreateSearchExpressionFormGroup() {
		return new FormGroup<SearchExpressionFormProperties>({
			Operator: new FormControl<SearchExpressionOperator | null | undefined>(undefined),
		});

	}


	/** <p>A conditional statement for a search expression that includes a resource property, a Boolean operator, and a value. Resources that match the statement are returned in the results from the <a>Search</a> API.</p> <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the equals operator.</p> <p>In search, there are several property types:</p> <dl> <dt>Metrics</dt> <dd> <p>To define a metric filter, enter a value using the form <code>"Metrics.&lt;name&gt;"</code>, where <code>&lt;name&gt;</code> is a metric name. For example, the following filter searches for training jobs with an <code>"accuracy"</code> metric greater than <code>"0.9"</code>:</p> <p> <code>{</code> </p> <p> <code>"Name": "Metrics.accuracy",</code> </p> <p> <code>"Operator": "GreaterThan",</code> </p> <p> <code>"Value": "0.9"</code> </p> <p> <code>}</code> </p> </dd> <dt>HyperParameters</dt> <dd> <p>To define a hyperparameter filter, enter a value with the form <code>"HyperParameters.&lt;name&gt;"</code>. Decimal hyperparameter values are treated as a decimal in a comparison if the specified <code>Value</code> is also a decimal value. If the specified <code>Value</code> is an integer, the decimal hyperparameter values are treated as integers. For example, the following filter is satisfied by training jobs with a <code>"learning_rate"</code> hyperparameter that is less than <code>"0.5"</code>:</p> <p> <code> {</code> </p> <p> <code> "Name": "HyperParameters.learning_rate",</code> </p> <p> <code> "Operator": "LessThan",</code> </p> <p> <code> "Value": "0.5"</code> </p> <p> <code> }</code> </p> </dd> <dt>Tags</dt> <dd> <p>To define a tag filter, enter a value with the form <code>Tags.&lt;key&gt;</code>.</p> </dd> </dl> */
	export interface Filter {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
		Operator?: FilterOperator | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Value?: string | null;
	}

	/** <p>A conditional statement for a search expression that includes a resource property, a Boolean operator, and a value. Resources that match the statement are returned in the results from the <a>Search</a> API.</p> <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the equals operator.</p> <p>In search, there are several property types:</p> <dl> <dt>Metrics</dt> <dd> <p>To define a metric filter, enter a value using the form <code>"Metrics.&lt;name&gt;"</code>, where <code>&lt;name&gt;</code> is a metric name. For example, the following filter searches for training jobs with an <code>"accuracy"</code> metric greater than <code>"0.9"</code>:</p> <p> <code>{</code> </p> <p> <code>"Name": "Metrics.accuracy",</code> </p> <p> <code>"Operator": "GreaterThan",</code> </p> <p> <code>"Value": "0.9"</code> </p> <p> <code>}</code> </p> </dd> <dt>HyperParameters</dt> <dd> <p>To define a hyperparameter filter, enter a value with the form <code>"HyperParameters.&lt;name&gt;"</code>. Decimal hyperparameter values are treated as a decimal in a comparison if the specified <code>Value</code> is also a decimal value. If the specified <code>Value</code> is an integer, the decimal hyperparameter values are treated as integers. For example, the following filter is satisfied by training jobs with a <code>"learning_rate"</code> hyperparameter that is less than <code>"0.5"</code>:</p> <p> <code> {</code> </p> <p> <code> "Name": "HyperParameters.learning_rate",</code> </p> <p> <code> "Operator": "LessThan",</code> </p> <p> <code> "Value": "0.5"</code> </p> <p> <code> }</code> </p> </dd> <dt>Tags</dt> <dd> <p>To define a tag filter, enter a value with the form <code>Tags.&lt;key&gt;</code>.</p> </dd> </dl> */
	export interface FilterFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Operator: FormControl<FilterOperator | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
			Operator: new FormControl<FilterOperator | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('.+')]),
		});

	}

	export enum FilterOperator { Equals = 0, NotEquals = 1, GreaterThan = 2, GreaterThanOrEqualTo = 3, LessThan = 4, LessThanOrEqualTo = 5, Contains = 6, Exists = 7, NotExists = 8, In = 9 }


	/** <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions of all filters to be included in the results returned from the <a>Search</a> API.</p> <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a specific channel name and <code>S3Uri</code> prefix, define the following filters:</p> <ul> <li> <p> <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code> </p> </li> <li> <p> <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains", "Value":"mybucket/catdata"}'</code> </p> </li> </ul> */
	export interface NestedFilters {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		NestedPropertyName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Filters: Array<Filter>;
	}

	/** <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions of all filters to be included in the results returned from the <a>Search</a> API.</p> <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a specific channel name and <code>S3Uri</code> prefix, define the following filters:</p> <ul> <li> <p> <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code> </p> </li> <li> <p> <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains", "Value":"mybucket/catdata"}'</code> </p> </li> </ul> */
	export interface NestedFiltersFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		NestedPropertyName: FormControl<string | null | undefined>,
	}
	export function CreateNestedFiltersFormGroup() {
		return new FormGroup<NestedFiltersFormProperties>({
			NestedPropertyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('.+')]),
		});

	}

	export enum SearchExpressionOperator { And = 0, Or = 1 }

	export interface StartMonitoringScheduleRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;
	}
	export interface StartMonitoringScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,
	}
	export function CreateStartMonitoringScheduleRequestFormGroup() {
		return new FormGroup<StartMonitoringScheduleRequestFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface StartNotebookInstanceInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: string;
	}
	export interface StartNotebookInstanceInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: FormControl<string | null | undefined>,
	}
	export function CreateStartNotebookInstanceInputFormGroup() {
		return new FormGroup<StartNotebookInstanceInputFormProperties>({
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface StopAutoMLJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: string;
	}
	export interface StopAutoMLJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		AutoMLJobName: FormControl<string | null | undefined>,
	}
	export function CreateStopAutoMLJobRequestFormGroup() {
		return new FormGroup<StopAutoMLJobRequestFormProperties>({
			AutoMLJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface StopCompilationJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: string;
	}
	export interface StopCompilationJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CompilationJobName: FormControl<string | null | undefined>,
	}
	export function CreateStopCompilationJobRequestFormGroup() {
		return new FormGroup<StopCompilationJobRequestFormProperties>({
			CompilationJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface StopHyperParameterTuningJobRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: string;
	}
	export interface StopHyperParameterTuningJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		HyperParameterTuningJobName: FormControl<string | null | undefined>,
	}
	export function CreateStopHyperParameterTuningJobRequestFormGroup() {
		return new FormGroup<StopHyperParameterTuningJobRequestFormProperties>({
			HyperParameterTuningJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface StopLabelingJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: string;
	}
	export interface StopLabelingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		LabelingJobName: FormControl<string | null | undefined>,
	}
	export function CreateStopLabelingJobRequestFormGroup() {
		return new FormGroup<StopLabelingJobRequestFormProperties>({
			LabelingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface StopMonitoringScheduleRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;
	}
	export interface StopMonitoringScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,
	}
	export function CreateStopMonitoringScheduleRequestFormGroup() {
		return new FormGroup<StopMonitoringScheduleRequestFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface StopNotebookInstanceInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: string;
	}
	export interface StopNotebookInstanceInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: FormControl<string | null | undefined>,
	}
	export function CreateStopNotebookInstanceInputFormGroup() {
		return new FormGroup<StopNotebookInstanceInputFormProperties>({
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface StopProcessingJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: string;
	}
	export interface StopProcessingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		ProcessingJobName: FormControl<string | null | undefined>,
	}
	export function CreateStopProcessingJobRequestFormGroup() {
		return new FormGroup<StopProcessingJobRequestFormProperties>({
			ProcessingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface StopTrainingJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: string;
	}
	export interface StopTrainingJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TrainingJobName: FormControl<string | null | undefined>,
	}
	export function CreateStopTrainingJobRequestFormGroup() {
		return new FormGroup<StopTrainingJobRequestFormProperties>({
			TrainingJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface StopTransformJobRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: string;
	}
	export interface StopTransformJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		TransformJobName: FormControl<string | null | undefined>,
	}
	export function CreateStopTransformJobRequestFormGroup() {
		return new FormGroup<StopTransformJobRequestFormProperties>({
			TransformJobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface UpdateCodeRepositoryOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		CodeRepositoryArn: string;
	}
	export interface UpdateCodeRepositoryOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		CodeRepositoryArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCodeRepositoryOutputFormGroup() {
		return new FormGroup<UpdateCodeRepositoryOutputFormProperties>({
			CodeRepositoryArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:code-repository/.*')]),
		});

	}

	export interface UpdateCodeRepositoryInput {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: string;

		/** Specifies configuration details for a Git repository when the repository is updated. */
		GitConfig?: GitConfigForUpdate;
	}
	export interface UpdateCodeRepositoryInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		CodeRepositoryName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCodeRepositoryInputFormGroup() {
		return new FormGroup<UpdateCodeRepositoryInputFormProperties>({
			CodeRepositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}


	/** Specifies configuration details for a Git repository when the repository is updated. */
	export interface GitConfigForUpdate {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		SecretArn?: string | null;
	}

	/** Specifies configuration details for a Git repository when the repository is updated. */
	export interface GitConfigForUpdateFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		SecretArn: FormControl<string | null | undefined>,
	}
	export function CreateGitConfigForUpdateFormGroup() {
		return new FormGroup<GitConfigForUpdateFormProperties>({
			SecretArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('arn:aws[a-z\-]*:secretsmanager:[a-z0-9\-]*:[0-9]{12}:secret:.*')]),
		});

	}

	export interface UpdateDomainResponse {

		/** Max length: 256 */
		DomainArn?: string | null;
	}
	export interface UpdateDomainResponseFormProperties {

		/** Max length: 256 */
		DomainArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainResponseFormGroup() {
		return new FormGroup<UpdateDomainResponseFormProperties>({
			DomainArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:domain/.*')]),
		});

	}

	export interface UpdateDomainRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/** A collection of settings. */
		DefaultUserSettings?: UserSettings;
	}
	export interface UpdateDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainRequestFormGroup() {
		return new FormGroup<UpdateDomainRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
		});

	}

	export interface UpdateEndpointOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: string;
	}
	export interface UpdateEndpointOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEndpointOutputFormGroup() {
		return new FormGroup<UpdateEndpointOutputFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:endpoint/.*')]),
		});

	}

	export interface UpdateEndpointInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: string;

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: string;
		RetainAllVariantProperties?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		ExcludeRetainedVariantProperties?: Array<VariantProperty>;
	}
	export interface UpdateEndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointConfigName: FormControl<string | null | undefined>,
		RetainAllVariantProperties: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateEndpointInputFormGroup() {
		return new FormGroup<UpdateEndpointInputFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			EndpointConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			RetainAllVariantProperties: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Specifies a production variant property type for an Endpoint.</p> <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the existing variant properties of the endpoint.</p> */
	export interface VariantProperty {

		/** Required */
		VariantPropertyType: VariantPropertyVariantPropertyType;
	}

	/** <p>Specifies a production variant property type for an Endpoint.</p> <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the existing variant properties of the endpoint.</p> */
	export interface VariantPropertyFormProperties {

		/** Required */
		VariantPropertyType: FormControl<VariantPropertyVariantPropertyType | null | undefined>,
	}
	export function CreateVariantPropertyFormGroup() {
		return new FormGroup<VariantPropertyFormProperties>({
			VariantPropertyType: new FormControl<VariantPropertyVariantPropertyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VariantPropertyVariantPropertyType { DesiredInstanceCount = 0, DesiredWeight = 1, DataCaptureConfig = 2 }

	export interface UpdateEndpointWeightsAndCapacitiesOutput {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: string;
	}
	export interface UpdateEndpointWeightsAndCapacitiesOutputFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEndpointWeightsAndCapacitiesOutputFormGroup() {
		return new FormGroup<UpdateEndpointWeightsAndCapacitiesOutputFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:endpoint/.*')]),
		});

	}

	export interface UpdateEndpointWeightsAndCapacitiesInput {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		DesiredWeightsAndCapacities: Array<DesiredWeightAndCapacity>;
	}
	export interface UpdateEndpointWeightsAndCapacitiesInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		EndpointName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEndpointWeightsAndCapacitiesInputFormGroup() {
		return new FormGroup<UpdateEndpointWeightsAndCapacitiesInputFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}


	/** Specifies weight and capacity values for a production variant. */
	export interface DesiredWeightAndCapacity {

		/**
		 * Required
		 * Max length: 63
		 */
		VariantName: string;

		/** Minimum: 0 */
		DesiredWeight?: number | null;

		/** Minimum: 1 */
		DesiredInstanceCount?: number | null;
	}

	/** Specifies weight and capacity values for a production variant. */
	export interface DesiredWeightAndCapacityFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		VariantName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		DesiredWeight: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		DesiredInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateDesiredWeightAndCapacityFormGroup() {
		return new FormGroup<DesiredWeightAndCapacityFormProperties>({
			VariantName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DesiredWeight: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			DesiredInstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface UpdateExperimentResponse {

		/** Max length: 256 */
		ExperimentArn?: string | null;
	}
	export interface UpdateExperimentResponseFormProperties {

		/** Max length: 256 */
		ExperimentArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentResponseFormGroup() {
		return new FormGroup<UpdateExperimentResponseFormProperties>({
			ExperimentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment/.*')]),
		});

	}

	export interface UpdateExperimentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: string;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** Max length: 3072 */
		Description?: string | null;
	}
	export interface UpdateExperimentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		ExperimentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** Max length: 3072 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentRequestFormGroup() {
		return new FormGroup<UpdateExperimentRequestFormProperties>({
			ExperimentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3072), Validators.pattern('.*')]),
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface UpdateMonitoringScheduleResponse {

		/**
		 * Required
		 * Max length: 256
		 */
		MonitoringScheduleArn: string;
	}
	export interface UpdateMonitoringScheduleResponseFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		MonitoringScheduleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMonitoringScheduleResponseFormGroup() {
		return new FormGroup<UpdateMonitoringScheduleResponseFormProperties>({
			MonitoringScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('.*')]),
		});

	}

	export interface UpdateMonitoringScheduleRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: string;

		/**
		 * Configures the monitoring schedule and defines the monitoring job.
		 * Required
		 */
		MonitoringScheduleConfig: MonitoringScheduleConfig;
	}
	export interface UpdateMonitoringScheduleRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		MonitoringScheduleName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMonitoringScheduleRequestFormGroup() {
		return new FormGroup<UpdateMonitoringScheduleRequestFormProperties>({
			MonitoringScheduleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*$')]),
		});

	}

	export interface UpdateNotebookInstanceOutput {
	}
	export interface UpdateNotebookInstanceOutputFormProperties {
	}
	export function CreateUpdateNotebookInstanceOutputFormGroup() {
		return new FormGroup<UpdateNotebookInstanceOutputFormProperties>({
		});

	}

	export interface UpdateNotebookInstanceInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: string;
		InstanceType?: UpdateNotebookInstanceInputInstanceType | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn?: string | null;

		/** Max length: 63 */
		LifecycleConfigName?: string | null;
		DisassociateLifecycleConfig?: boolean | null;

		/**
		 * Minimum: 5
		 * Maximum: 16384
		 */
		VolumeSizeInGB?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultCodeRepository?: string | null;

		/** Maximum items: 3 */
		AdditionalCodeRepositories?: Array<string>;
		AcceleratorTypes?: Array<NotebookInstanceAcceleratorType>;
		DisassociateAcceleratorTypes?: boolean | null;
		DisassociateDefaultCodeRepository?: boolean | null;
		DisassociateAdditionalCodeRepositories?: boolean | null;
		RootAccess?: CreateNotebookInstanceInputDirectInternetAccess | null;
	}
	export interface UpdateNotebookInstanceInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceName: FormControl<string | null | undefined>,
		InstanceType: FormControl<UpdateNotebookInstanceInputInstanceType | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 63 */
		LifecycleConfigName: FormControl<string | null | undefined>,
		DisassociateLifecycleConfig: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 16384
		 */
		VolumeSizeInGB: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		DefaultCodeRepository: FormControl<string | null | undefined>,
		DisassociateAcceleratorTypes: FormControl<boolean | null | undefined>,
		DisassociateDefaultCodeRepository: FormControl<boolean | null | undefined>,
		DisassociateAdditionalCodeRepositories: FormControl<boolean | null | undefined>,
		RootAccess: FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>,
	}
	export function CreateUpdateNotebookInstanceInputFormGroup() {
		return new FormGroup<UpdateNotebookInstanceInputFormProperties>({
			NotebookInstanceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			InstanceType: new FormControl<UpdateNotebookInstanceInputInstanceType | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			LifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisassociateLifecycleConfig: new FormControl<boolean | null | undefined>(undefined),
			VolumeSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(16384)]),
			DefaultCodeRepository: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('^https://([^/]+)/?(.*)$|^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisassociateAcceleratorTypes: new FormControl<boolean | null | undefined>(undefined),
			DisassociateDefaultCodeRepository: new FormControl<boolean | null | undefined>(undefined),
			DisassociateAdditionalCodeRepositories: new FormControl<boolean | null | undefined>(undefined),
			RootAccess: new FormControl<CreateNotebookInstanceInputDirectInternetAccess | null | undefined>(undefined),
		});

	}

	export enum UpdateNotebookInstanceInputInstanceType { ml_t2_medium = 0, ml_t2_large = 1, ml_t2_xlarge = 2, ml_t2_2xlarge = 3, ml_t3_medium = 4, ml_t3_large = 5, ml_t3_xlarge = 6, ml_t3_2xlarge = 7, ml_m4_xlarge = 8, ml_m4_2xlarge = 9, ml_m4_4xlarge = 10, ml_m4_10xlarge = 11, ml_m4_16xlarge = 12, ml_m5_xlarge = 13, ml_m5_2xlarge = 14, ml_m5_4xlarge = 15, ml_m5_12xlarge = 16, ml_m5_24xlarge = 17, ml_c4_xlarge = 18, ml_c4_2xlarge = 19, ml_c4_4xlarge = 20, ml_c4_8xlarge = 21, ml_c5_xlarge = 22, ml_c5_2xlarge = 23, ml_c5_4xlarge = 24, ml_c5_9xlarge = 25, ml_c5_18xlarge = 26, ml_c5d_xlarge = 27, ml_c5d_2xlarge = 28, ml_c5d_4xlarge = 29, ml_c5d_9xlarge = 30, ml_c5d_18xlarge = 31, ml_p2_xlarge = 32, ml_p2_8xlarge = 33, ml_p2_16xlarge = 34, ml_p3_2xlarge = 35, ml_p3_8xlarge = 36, ml_p3_16xlarge = 37 }

	export interface UpdateNotebookInstanceLifecycleConfigOutput {
	}
	export interface UpdateNotebookInstanceLifecycleConfigOutputFormProperties {
	}
	export function CreateUpdateNotebookInstanceLifecycleConfigOutputFormGroup() {
		return new FormGroup<UpdateNotebookInstanceLifecycleConfigOutputFormProperties>({
		});

	}

	export interface UpdateNotebookInstanceLifecycleConfigInput {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: string;

		/** Maximum items: 1 */
		OnCreate?: Array<NotebookInstanceLifecycleHook>;

		/** Maximum items: 1 */
		OnStart?: Array<NotebookInstanceLifecycleHook>;
	}
	export interface UpdateNotebookInstanceLifecycleConfigInputFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		NotebookInstanceLifecycleConfigName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNotebookInstanceLifecycleConfigInputFormGroup() {
		return new FormGroup<UpdateNotebookInstanceLifecycleConfigInputFormProperties>({
			NotebookInstanceLifecycleConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface UpdateTrialResponse {

		/** Max length: 256 */
		TrialArn?: string | null;
	}
	export interface UpdateTrialResponseFormProperties {

		/** Max length: 256 */
		TrialArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrialResponseFormGroup() {
		return new FormGroup<UpdateTrialResponseFormProperties>({
			TrialArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial/.*')]),
		});

	}

	export interface UpdateTrialRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: string;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;
	}
	export interface UpdateTrialRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrialRequestFormGroup() {
		return new FormGroup<UpdateTrialRequestFormProperties>({
			TrialName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface UpdateTrialComponentResponse {

		/** Max length: 256 */
		TrialComponentArn?: string | null;
	}
	export interface UpdateTrialComponentResponseFormProperties {

		/** Max length: 256 */
		TrialComponentArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrialComponentResponseFormGroup() {
		return new FormGroup<UpdateTrialComponentResponseFormProperties>({
			TrialComponentArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:experiment-trial-component/.*')]),
		});

	}

	export interface UpdateTrialComponentRequest {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: string;

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName?: string | null;

		/** The status of the trial component. */
		Status?: TrialComponentStatus;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Parameters?: TrialComponentParameters;
		ParametersToRemove?: Array<string>;
		InputArtifacts?: TrialComponentArtifacts;
		InputArtifactsToRemove?: Array<string>;
		OutputArtifacts?: TrialComponentArtifacts;
		OutputArtifactsToRemove?: Array<string>;
	}
	export interface UpdateTrialComponentRequestFormProperties {

		/**
		 * Required
		 * Max length: 82
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 82
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateTrialComponentRequestFormGroup() {
		return new FormGroup<UpdateTrialComponentRequestFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(82), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateUserProfileResponse {

		/** Max length: 256 */
		UserProfileArn?: string | null;
	}
	export interface UpdateUserProfileResponseFormProperties {

		/** Max length: 256 */
		UserProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserProfileResponseFormGroup() {
		return new FormGroup<UpdateUserProfileResponseFormProperties>({
			UserProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:user-profile/.*')]),
		});

	}

	export interface UpdateUserProfileRequest {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: string;

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: string;

		/** A collection of settings. */
		UserSettings?: UserSettings;
	}
	export interface UpdateUserProfileRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 */
		DomainId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 */
		UserProfileName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserProfileRequestFormGroup() {
		return new FormGroup<UpdateUserProfileRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63)]),
			UserProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
		});

	}

	export interface UpdateWorkforceResponse {

		/**
		 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
		 * Required
		 */
		Workforce: Workforce;
	}
	export interface UpdateWorkforceResponseFormProperties {
	}
	export function CreateUpdateWorkforceResponseFormGroup() {
		return new FormGroup<UpdateWorkforceResponseFormProperties>({
		});

	}

	export interface UpdateWorkforceRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkforceName: string;

		/** A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. For more information, see . */
		SourceIpConfig?: SourceIpConfig;
	}
	export interface UpdateWorkforceRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkforceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkforceRequestFormGroup() {
		return new FormGroup<UpdateWorkforceRequestFormProperties>({
			WorkforceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9]([a-zA-Z0-9\-])*$')]),
		});

	}

	export interface UpdateWorkteamResponse {

		/**
		 * Provides details about a labeling work team.
		 * Required
		 */
		Workteam: Workteam;
	}
	export interface UpdateWorkteamResponseFormProperties {
	}
	export function CreateUpdateWorkteamResponseFormGroup() {
		return new FormGroup<UpdateWorkteamResponseFormProperties>({
		});

	}

	export interface UpdateWorkteamRequest {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		MemberDefinitions?: Array<MemberDefinition>;

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		Description?: string | null;

		/** Configures SNS notifications of available or expiring work items for work teams. */
		NotificationConfiguration?: NotificationConfiguration;
	}
	export interface UpdateWorkteamRequestFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		WorkteamName: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkteamRequestFormGroup() {
		return new FormGroup<UpdateWorkteamRequestFormProperties>({
			WorkteamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9])*')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(1), Validators.pattern('.+')]),
		});

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

		/** Max length: 64 */
		MediaType?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 */
		Value: string;
	}

	/** <p>Represents an input or output artifact of a trial component. You specify <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and <code>OutputArtifacts</code> parameters in the <a>CreateTrialComponent</a> request.</p> <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p> */
	export interface TrialComponentArtifactFormProperties {

		/** Max length: 64 */
		MediaType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTrialComponentArtifactFormGroup() {
		return new FormGroup<TrialComponentArtifactFormProperties>({
			MediaType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.pattern('^[\w]+\/[\w+]+$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('.*')]),
		});

	}


	/** <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p> */
	export interface TrialComponentParameterValue {

		/** Max length: 256 */
		StringValue?: string | null;
		NumberValue?: number | null;
	}

	/** <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p> */
	export interface TrialComponentParameterValueFormProperties {

		/** Max length: 256 */
		StringValue: FormControl<string | null | undefined>,
		NumberValue: FormControl<number | null | undefined>,
	}
	export function CreateTrialComponentParameterValueFormGroup() {
		return new FormGroup<TrialComponentParameterValueFormProperties>({
			StringValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('.*')]),
			NumberValue: new FormControl<number | null | undefined>(undefined),
		});

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
		ListAlgorithms(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAlgorithmsInput): Observable<ListAlgorithmsOutput> {
			return this.http.post<ListAlgorithmsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListAlgorithms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists apps.
		 * Post #X-Amz-Target=SageMaker.ListApps
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppsResponse} Success
		 */
		ListApps(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAppsRequest): Observable<ListAppsResponse> {
			return this.http.post<ListAppsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListApps?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request a list of jobs.
		 * Post #X-Amz-Target=SageMaker.ListAutoMLJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAutoMLJobsResponse} Success
		 */
		ListAutoMLJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAutoMLJobsRequest): Observable<ListAutoMLJobsResponse> {
			return this.http.post<ListAutoMLJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListAutoMLJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the Candidates created for the job.
		 * Post #X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCandidatesForAutoMLJobResponse} Success
		 */
		ListCandidatesForAutoMLJob(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCandidatesForAutoMLJobRequest): Observable<ListCandidatesForAutoMLJobResponse> {
			return this.http.post<ListCandidatesForAutoMLJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListCandidatesForAutoMLJob?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the Git repositories in your account.
		 * Post #X-Amz-Target=SageMaker.ListCodeRepositories
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCodeRepositoriesOutput} Success
		 */
		ListCodeRepositories(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCodeRepositoriesInput): Observable<ListCodeRepositoriesOutput> {
			return this.http.post<ListCodeRepositoriesOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListCodeRepositories?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists model compilation jobs that satisfy various filters.</p> <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
		 * Post #X-Amz-Target=SageMaker.ListCompilationJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCompilationJobsResponse} Success
		 */
		ListCompilationJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCompilationJobsRequest): Observable<ListCompilationJobsResponse> {
			return this.http.post<ListCompilationJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListCompilationJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the domains.
		 * Post #X-Amz-Target=SageMaker.ListDomains
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDomainsRequest): Observable<ListDomainsResponse> {
			return this.http.post<ListDomainsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListDomains?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists endpoint configurations.
		 * Post #X-Amz-Target=SageMaker.ListEndpointConfigs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEndpointConfigsOutput} Success
		 */
		ListEndpointConfigs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEndpointConfigsInput): Observable<ListEndpointConfigsOutput> {
			return this.http.post<ListEndpointConfigsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListEndpointConfigs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists endpoints.
		 * Post #X-Amz-Target=SageMaker.ListEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEndpointsOutput} Success
		 */
		ListEndpoints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEndpointsInput): Observable<ListEndpointsOutput> {
			return this.http.post<ListEndpointsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.
		 * Post #X-Amz-Target=SageMaker.ListExperiments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListExperimentsResponse} Success
		 */
		ListExperiments(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListExperimentsRequest): Observable<ListExperimentsResponse> {
			return this.http.post<ListExperimentsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListExperiments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the flow definitions in your account.
		 * Post #X-Amz-Target=SageMaker.ListFlowDefinitions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFlowDefinitionsResponse} Success
		 */
		ListFlowDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFlowDefinitionsRequest): Observable<ListFlowDefinitionsResponse> {
			return this.http.post<ListFlowDefinitionsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListFlowDefinitions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the human task user interfaces in your account.
		 * Post #X-Amz-Target=SageMaker.ListHumanTaskUis
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHumanTaskUisResponse} Success
		 */
		ListHumanTaskUis(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListHumanTaskUisRequest): Observable<ListHumanTaskUisResponse> {
			return this.http.post<ListHumanTaskUisResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListHumanTaskUis?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of <a>HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.
		 * Post #X-Amz-Target=SageMaker.ListHyperParameterTuningJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHyperParameterTuningJobsResponse} Success
		 */
		ListHyperParameterTuningJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListHyperParameterTuningJobsRequest): Observable<ListHyperParameterTuningJobsResponse> {
			return this.http.post<ListHyperParameterTuningJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListHyperParameterTuningJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of labeling jobs.
		 * Post #X-Amz-Target=SageMaker.ListLabelingJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLabelingJobsResponse} Success
		 */
		ListLabelingJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLabelingJobsRequest): Observable<ListLabelingJobsResponse> {
			return this.http.post<ListLabelingJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListLabelingJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of labeling jobs assigned to a specified work team.
		 * Post #X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLabelingJobsForWorkteamResponse} Success
		 */
		ListLabelingJobsForWorkteam(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLabelingJobsForWorkteamRequest): Observable<ListLabelingJobsForWorkteamResponse> {
			return this.http.post<ListLabelingJobsForWorkteamResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListLabelingJobsForWorkteam?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the model packages that have been created.
		 * Post #X-Amz-Target=SageMaker.ListModelPackages
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListModelPackagesOutput} Success
		 */
		ListModelPackages(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListModelPackagesInput): Observable<ListModelPackagesOutput> {
			return this.http.post<ListModelPackagesOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListModelPackages?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists models created with the <a>CreateModel</a> API.
		 * Post #X-Amz-Target=SageMaker.ListModels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListModelsOutput} Success
		 */
		ListModels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListModelsInput): Observable<ListModelsOutput> {
			return this.http.post<ListModelsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListModels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns list of all monitoring job executions.
		 * Post #X-Amz-Target=SageMaker.ListMonitoringExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMonitoringExecutionsResponse} Success
		 */
		ListMonitoringExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMonitoringExecutionsRequest): Observable<ListMonitoringExecutionsResponse> {
			return this.http.post<ListMonitoringExecutionsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListMonitoringExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns list of all monitoring schedules.
		 * Post #X-Amz-Target=SageMaker.ListMonitoringSchedules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMonitoringSchedulesResponse} Success
		 */
		ListMonitoringSchedules(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMonitoringSchedulesRequest): Observable<ListMonitoringSchedulesResponse> {
			return this.http.post<ListMonitoringSchedulesResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListMonitoringSchedules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.
		 * Post #X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNotebookInstanceLifecycleConfigsOutput} Success
		 */
		ListNotebookInstanceLifecycleConfigs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListNotebookInstanceLifecycleConfigsInput): Observable<ListNotebookInstanceLifecycleConfigsOutput> {
			return this.http.post<ListNotebookInstanceLifecycleConfigsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListNotebookInstanceLifecycleConfigs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region.
		 * Post #X-Amz-Target=SageMaker.ListNotebookInstances
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNotebookInstancesOutput} Success
		 */
		ListNotebookInstances(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListNotebookInstancesInput): Observable<ListNotebookInstancesOutput> {
			return this.http.post<ListNotebookInstancesOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListNotebookInstances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists processing jobs that satisfy various filters.
		 * Post #X-Amz-Target=SageMaker.ListProcessingJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProcessingJobsResponse} Success
		 */
		ListProcessingJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProcessingJobsRequest): Observable<ListProcessingJobsResponse> {
			return this.http.post<ListProcessingJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListProcessingJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
		 * Post #X-Amz-Target=SageMaker.ListSubscribedWorkteams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSubscribedWorkteamsResponse} Success
		 */
		ListSubscribedWorkteams(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSubscribedWorkteamsRequest): Observable<ListSubscribedWorkteamsResponse> {
			return this.http.post<ListSubscribedWorkteamsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListSubscribedWorkteams?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the tags for the specified Amazon SageMaker resource.
		 * Post #X-Amz-Target=SageMaker.ListTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsOutput} Success
		 */
		ListTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsInput): Observable<ListTagsOutput> {
			return this.http.post<ListTagsOutput>(this.baseUri + '#X-Amz-Target=SageMaker.ListTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists training jobs.
		 * Post #X-Amz-Target=SageMaker.ListTrainingJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrainingJobsResponse} Success
		 */
		ListTrainingJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTrainingJobsRequest): Observable<ListTrainingJobsResponse> {
			return this.http.post<ListTrainingJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTrainingJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of <a>TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.
		 * Post #X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrainingJobsForHyperParameterTuningJobResponse} Success
		 */
		ListTrainingJobsForHyperParameterTuningJob(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTrainingJobsForHyperParameterTuningJobRequest): Observable<ListTrainingJobsForHyperParameterTuningJobResponse> {
			return this.http.post<ListTrainingJobsForHyperParameterTuningJobResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTrainingJobsForHyperParameterTuningJob?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists transform jobs.
		 * Post #X-Amz-Target=SageMaker.ListTransformJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTransformJobsResponse} Success
		 */
		ListTransformJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTransformJobsRequest): Observable<ListTransformJobsResponse> {
			return this.http.post<ListTransformJobsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTransformJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:</p> <ul> <li> <p> <code>ExperimentName</code> </p> </li> <li> <p> <code>SourceArn</code> </p> </li> <li> <p> <code>TrialName</code> </p> </li> </ul>
		 * Post #X-Amz-Target=SageMaker.ListTrialComponents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrialComponentsResponse} Success
		 */
		ListTrialComponents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTrialComponentsRequest): Observable<ListTrialComponentsResponse> {
			return this.http.post<ListTrialComponentsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTrialComponents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.
		 * Post #X-Amz-Target=SageMaker.ListTrials
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTrialsResponse} Success
		 */
		ListTrials(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTrialsRequest): Observable<ListTrialsResponse> {
			return this.http.post<ListTrialsResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListTrials?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists user profiles.
		 * Post #X-Amz-Target=SageMaker.ListUserProfiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserProfilesResponse} Success
		 */
		ListUserProfiles(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUserProfilesRequest): Observable<ListUserProfilesResponse> {
			return this.http.post<ListUserProfilesResponse>(this.baseUri + '#X-Amz-Target=SageMaker.ListUserProfiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
		 * Post #X-Amz-Target=SageMaker.ListWorkteams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkteamsResponse} Success
		 */
		ListWorkteams(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWorkteamsRequest): Observable<ListWorkteamsResponse> {
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
		Search(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchRequest): Observable<SearchResponse> {
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

