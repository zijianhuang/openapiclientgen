import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDatasetResponse {
		DatasetMetadata?: DatasetMetadata;
	}
	export interface CreateDatasetResponseFormProperties {
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
		});

	}


	/** Summary information for an Amazon Lookout for Vision dataset. For more information, see <a>DescribeDataset</a> and <a>ProjectDescription</a>. */
	export interface DatasetMetadata {
		DatasetType?: string;
		CreationTimestamp?: Date;
		Status?: DatasetStatus;
		StatusMessage?: string;
	}

	/** Summary information for an Amazon Lookout for Vision dataset. For more information, see <a>DescribeDataset</a> and <a>ProjectDescription</a>. */
	export interface DatasetMetadataFormProperties {
		DatasetType: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateDatasetMetadataFormGroup() {
		return new FormGroup<DatasetMetadataFormProperties>({
			DatasetType: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatasetStatus { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, CREATE_FAILED = 2, UPDATE_IN_PROGRESS = 3, UPDATE_COMPLETE = 4, UPDATE_FAILED_ROLLBACK_IN_PROGRESS = 5, UPDATE_FAILED_ROLLBACK_COMPLETE = 6, DELETE_IN_PROGRESS = 7, DELETE_COMPLETE = 8, DELETE_FAILED = 9 }


	/** Location information about a manifest file. You can use a manifest file to create a dataset. */
	export interface DatasetGroundTruthManifest {
		S3Object?: InputS3Object;
	}

	/** Location information about a manifest file. You can use a manifest file to create a dataset. */
	export interface DatasetGroundTruthManifestFormProperties {
	}
	export function CreateDatasetGroundTruthManifestFormGroup() {
		return new FormGroup<DatasetGroundTruthManifestFormProperties>({
		});

	}


	/** Amazon S3 Location information for an input manifest file.  */
	export interface InputS3Object {

		/** Required */
		Bucket: string;

		/** Required */
		Key: string;
		VersionId?: string;
	}

	/** Amazon S3 Location information for an input manifest file.  */
	export interface InputS3ObjectFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateInputS3ObjectFormGroup() {
		return new FormGroup<InputS3ObjectFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateModelResponse {
		ModelMetadata?: ModelMetadata;
	}
	export interface CreateModelResponseFormProperties {
	}
	export function CreateCreateModelResponseFormGroup() {
		return new FormGroup<CreateModelResponseFormProperties>({
		});

	}


	/** Describes an Amazon Lookout for Vision model. */
	export interface ModelMetadata {
		CreationTimestamp?: Date;
		ModelVersion?: string;
		ModelArn?: string;
		Description?: string;
		Status?: ModelStatus;
		StatusMessage?: string;
		Performance?: ModelPerformance;
	}

	/** Describes an Amazon Lookout for Vision model. */
	export interface ModelMetadataFormProperties {
		CreationTimestamp: FormControl<Date | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateModelMetadataFormGroup() {
		return new FormGroup<ModelMetadataFormProperties>({
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModelStatus { TRAINING = 0, TRAINED = 1, TRAINING_FAILED = 2, STARTING_HOSTING = 3, HOSTED = 4, HOSTING_FAILED = 5, STOPPING_HOSTING = 6, SYSTEM_UPDATING = 7, DELETING = 8 }


	/** Information about the evaluation performance of a trained model.  */
	export interface ModelPerformance {
		F1Score?: number;
		Recall?: number;
		Precision?: number;
	}

	/** Information about the evaluation performance of a trained model.  */
	export interface ModelPerformanceFormProperties {
		F1Score: FormControl<number | null | undefined>,
		Recall: FormControl<number | null | undefined>,
		Precision: FormControl<number | null | undefined>,
	}
	export function CreateModelPerformanceFormGroup() {
		return new FormGroup<ModelPerformanceFormProperties>({
			F1Score: new FormControl<number | null | undefined>(undefined),
			Recall: new FormControl<number | null | undefined>(undefined),
			Precision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the location of training output or the output of a model packaging job. */
	export interface S3Location {

		/** Required */
		Bucket: string;
		Prefix?: string;
	}

	/** Information about the location of training output or the output of a model packaging job. */
	export interface S3LocationFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key and value pair that is attached to the specified Amazon Lookout for Vision model. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key and value pair that is attached to the specified Amazon Lookout for Vision model. */
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

	export interface CreateProjectResponse {
		ProjectMetadata?: ProjectMetadata;
	}
	export interface CreateProjectResponseFormProperties {
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
		});

	}


	/** Metadata about an Amazon Lookout for Vision project. */
	export interface ProjectMetadata {
		ProjectArn?: string;
		ProjectName?: string;
		CreationTimestamp?: Date;
	}

	/** Metadata about an Amazon Lookout for Vision project. */
	export interface ProjectMetadataFormProperties {
		ProjectArn: FormControl<string | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateProjectMetadataFormGroup() {
		return new FormGroup<ProjectMetadataFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteDatasetResponse {
	}
	export interface DeleteDatasetResponseFormProperties {
	}
	export function CreateDeleteDatasetResponseFormGroup() {
		return new FormGroup<DeleteDatasetResponseFormProperties>({
		});

	}

	export interface DeleteModelResponse {
		ModelArn?: string;
	}
	export interface DeleteModelResponseFormProperties {
		ModelArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteModelResponseFormGroup() {
		return new FormGroup<DeleteModelResponseFormProperties>({
			ModelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteProjectResponse {
		ProjectArn?: string;
	}
	export interface DeleteProjectResponseFormProperties {
		ProjectArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectResponseFormGroup() {
		return new FormGroup<DeleteProjectResponseFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetResponse {
		DatasetDescription?: DatasetDescription;
	}
	export interface DescribeDatasetResponseFormProperties {
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
		});

	}


	/** The description for a dataset. For more information, see <a>DescribeDataset</a>. */
	export interface DatasetDescription {
		ProjectName?: string;
		DatasetType?: string;
		CreationTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		Status?: DatasetStatus;
		StatusMessage?: string;
		ImageStats?: DatasetImageStats;
	}

	/** The description for a dataset. For more information, see <a>DescribeDataset</a>. */
	export interface DatasetDescriptionFormProperties {
		ProjectName: FormControl<string | null | undefined>,
		DatasetType: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateDatasetDescriptionFormGroup() {
		return new FormGroup<DatasetDescriptionFormProperties>({
			ProjectName: new FormControl<string | null | undefined>(undefined),
			DatasetType: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics about the images in a dataset. */
	export interface DatasetImageStats {
		Total?: number | null;
		Labeled?: number | null;
		Normal?: number | null;
		Anomaly?: number | null;
	}

	/** Statistics about the images in a dataset. */
	export interface DatasetImageStatsFormProperties {
		Total: FormControl<number | null | undefined>,
		Labeled: FormControl<number | null | undefined>,
		Normal: FormControl<number | null | undefined>,
		Anomaly: FormControl<number | null | undefined>,
	}
	export function CreateDatasetImageStatsFormGroup() {
		return new FormGroup<DatasetImageStatsFormProperties>({
			Total: new FormControl<number | null | undefined>(undefined),
			Labeled: new FormControl<number | null | undefined>(undefined),
			Normal: new FormControl<number | null | undefined>(undefined),
			Anomaly: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeModelResponse {
		ModelDescription?: ModelDescription;
	}
	export interface DescribeModelResponseFormProperties {
	}
	export function CreateDescribeModelResponseFormGroup() {
		return new FormGroup<DescribeModelResponseFormProperties>({
		});

	}


	/** Describes an Amazon Lookout for Vision model. */
	export interface ModelDescription {
		ModelVersion?: string;
		ModelArn?: string;
		CreationTimestamp?: Date;
		Description?: string;
		Status?: ModelStatus;
		StatusMessage?: string;
		Performance?: ModelPerformance;
		OutputConfig?: OutputConfig;
		EvaluationManifest?: OutputS3Object;
		EvaluationResult?: OutputS3Object;
		EvaluationEndTimestamp?: Date;
		KmsKeyId?: string;
		MinInferenceUnits?: number | null;
		MaxInferenceUnits?: number | null;
	}

	/** Describes an Amazon Lookout for Vision model. */
	export interface ModelDescriptionFormProperties {
		ModelVersion: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		EvaluationEndTimestamp: FormControl<Date | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		MinInferenceUnits: FormControl<number | null | undefined>,
		MaxInferenceUnits: FormControl<number | null | undefined>,
	}
	export function CreateModelDescriptionFormGroup() {
		return new FormGroup<ModelDescriptionFormProperties>({
			ModelVersion: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			EvaluationEndTimestamp: new FormControl<Date | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			MinInferenceUnits: new FormControl<number | null | undefined>(undefined),
			MaxInferenceUnits: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The S3 location where Amazon Lookout for Vision saves model training files. */
	export interface OutputConfig {

		/** Required */
		S3Location: S3Location;
	}

	/** The S3 location where Amazon Lookout for Vision saves model training files. */
	export interface OutputConfigFormProperties {
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
		});

	}


	/** The S3 location where Amazon Lookout for Vision saves training output. */
	export interface OutputS3Object {

		/** Required */
		Bucket: string;

		/** Required */
		Key: string;
	}

	/** The S3 location where Amazon Lookout for Vision saves training output. */
	export interface OutputS3ObjectFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateOutputS3ObjectFormGroup() {
		return new FormGroup<OutputS3ObjectFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeModelPackagingJobResponse {
		ModelPackagingDescription?: ModelPackagingDescription;
	}
	export interface DescribeModelPackagingJobResponseFormProperties {
	}
	export function CreateDescribeModelPackagingJobResponseFormGroup() {
		return new FormGroup<DescribeModelPackagingJobResponseFormProperties>({
		});

	}


	/**  Information about a model packaging job. For more information, see <a>DescribeModelPackagingJob</a>.  */
	export interface ModelPackagingDescription {
		JobName?: string;
		ProjectName?: string;
		ModelVersion?: string;
		ModelPackagingConfiguration?: ModelPackagingConfiguration;
		ModelPackagingJobDescription?: string;
		ModelPackagingMethod?: string;
		ModelPackagingOutputDetails?: ModelPackagingOutputDetails;
		Status?: ModelPackagingJobStatus;
		StatusMessage?: string;
		CreationTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
	}

	/**  Information about a model packaging job. For more information, see <a>DescribeModelPackagingJob</a>.  */
	export interface ModelPackagingDescriptionFormProperties {
		JobName: FormControl<string | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
		ModelPackagingJobDescription: FormControl<string | null | undefined>,
		ModelPackagingMethod: FormControl<string | null | undefined>,
		Status: FormControl<ModelPackagingJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateModelPackagingDescriptionFormGroup() {
		return new FormGroup<ModelPackagingDescriptionFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
			ModelPackagingJobDescription: new FormControl<string | null | undefined>(undefined),
			ModelPackagingMethod: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelPackagingJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Configuration information for a Amazon Lookout for Vision model packaging job. For more information, see <a>StartModelPackagingJob</a>.  */
	export interface ModelPackagingConfiguration {

		/** Required */
		Greengrass: GreengrassConfiguration;
	}

	/**  Configuration information for a Amazon Lookout for Vision model packaging job. For more information, see <a>StartModelPackagingJob</a>.  */
	export interface ModelPackagingConfigurationFormProperties {
	}
	export function CreateModelPackagingConfigurationFormGroup() {
		return new FormGroup<ModelPackagingConfigurationFormProperties>({
		});

	}


	/** <p>Configuration information for the AWS IoT Greengrass component created in a model packaging job. For more information, see <a>StartModelPackagingJob</a>. </p> <note> <p>You can't specify a component with the same <code>ComponentName</code> and <code>Componentversion</code> as an existing component with the same component name and component version.</p> </note> */
	export interface GreengrassConfiguration {
		CompilerOptions?: string;
		TargetDevice?: TargetDevice;
		TargetPlatform?: TargetPlatform;

		/** Required */
		S3OutputLocation: S3Location;

		/** Required */
		ComponentName: string;
		ComponentVersion?: string;
		ComponentDescription?: string;
		Tags?: Array<Tag>;
	}

	/** <p>Configuration information for the AWS IoT Greengrass component created in a model packaging job. For more information, see <a>StartModelPackagingJob</a>. </p> <note> <p>You can't specify a component with the same <code>ComponentName</code> and <code>Componentversion</code> as an existing component with the same component name and component version.</p> </note> */
	export interface GreengrassConfigurationFormProperties {
		CompilerOptions: FormControl<string | null | undefined>,
		TargetDevice: FormControl<TargetDevice | null | undefined>,

		/** Required */
		ComponentName: FormControl<string | null | undefined>,
		ComponentVersion: FormControl<string | null | undefined>,
		ComponentDescription: FormControl<string | null | undefined>,
	}
	export function CreateGreengrassConfigurationFormGroup() {
		return new FormGroup<GreengrassConfigurationFormProperties>({
			CompilerOptions: new FormControl<string | null | undefined>(undefined),
			TargetDevice: new FormControl<TargetDevice | null | undefined>(undefined),
			ComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComponentVersion: new FormControl<string | null | undefined>(undefined),
			ComponentDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetDevice { jetson_xavier = 0 }


	/** The platform on which a model runs on an AWS IoT Greengrass core device. */
	export interface TargetPlatform {

		/** Required */
		Os: TargetPlatformOs;

		/** Required */
		Arch: TargetPlatformArch;
		Accelerator?: TargetPlatformAccelerator;
	}

	/** The platform on which a model runs on an AWS IoT Greengrass core device. */
	export interface TargetPlatformFormProperties {

		/** Required */
		Os: FormControl<TargetPlatformOs | null | undefined>,

		/** Required */
		Arch: FormControl<TargetPlatformArch | null | undefined>,
		Accelerator: FormControl<TargetPlatformAccelerator | null | undefined>,
	}
	export function CreateTargetPlatformFormGroup() {
		return new FormGroup<TargetPlatformFormProperties>({
			Os: new FormControl<TargetPlatformOs | null | undefined>(undefined, [Validators.required]),
			Arch: new FormControl<TargetPlatformArch | null | undefined>(undefined, [Validators.required]),
			Accelerator: new FormControl<TargetPlatformAccelerator | null | undefined>(undefined),
		});

	}

	export enum TargetPlatformOs { LINUX = 0 }

	export enum TargetPlatformArch { ARM64 = 0, X86_64 = 1 }

	export enum TargetPlatformAccelerator { NVIDIA = 0 }


	/**  Information about the output from a model packaging job.  */
	export interface ModelPackagingOutputDetails {
		Greengrass?: GreengrassOutputDetails;
	}

	/**  Information about the output from a model packaging job.  */
	export interface ModelPackagingOutputDetailsFormProperties {
	}
	export function CreateModelPackagingOutputDetailsFormGroup() {
		return new FormGroup<ModelPackagingOutputDetailsFormProperties>({
		});

	}


	/** Information about the AWS IoT Greengrass component created by a model packaging job.  */
	export interface GreengrassOutputDetails {
		ComponentVersionArn?: string;
		ComponentName?: string;
		ComponentVersion?: string;
	}

	/** Information about the AWS IoT Greengrass component created by a model packaging job.  */
	export interface GreengrassOutputDetailsFormProperties {
		ComponentVersionArn: FormControl<string | null | undefined>,
		ComponentName: FormControl<string | null | undefined>,
		ComponentVersion: FormControl<string | null | undefined>,
	}
	export function CreateGreengrassOutputDetailsFormGroup() {
		return new FormGroup<GreengrassOutputDetailsFormProperties>({
			ComponentVersionArn: new FormControl<string | null | undefined>(undefined),
			ComponentName: new FormControl<string | null | undefined>(undefined),
			ComponentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModelPackagingJobStatus { CREATED = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3 }

	export interface DescribeProjectResponse {
		ProjectDescription?: ProjectDescription;
	}
	export interface DescribeProjectResponseFormProperties {
	}
	export function CreateDescribeProjectResponseFormGroup() {
		return new FormGroup<DescribeProjectResponseFormProperties>({
		});

	}


	/** Describe an Amazon Lookout for Vision project. For more information, see <a>DescribeProject</a>. */
	export interface ProjectDescription {
		ProjectArn?: string;
		ProjectName?: string;
		CreationTimestamp?: Date;
		Datasets?: Array<DatasetMetadata>;
	}

	/** Describe an Amazon Lookout for Vision project. For more information, see <a>DescribeProject</a>. */
	export interface ProjectDescriptionFormProperties {
		ProjectArn: FormControl<string | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateProjectDescriptionFormGroup() {
		return new FormGroup<ProjectDescriptionFormProperties>({
			ProjectArn: new FormControl<string | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DetectAnomaliesResponse {
		DetectAnomalyResult?: DetectAnomalyResult;
	}
	export interface DetectAnomaliesResponseFormProperties {
	}
	export function CreateDetectAnomaliesResponseFormGroup() {
		return new FormGroup<DetectAnomaliesResponseFormProperties>({
		});

	}


	/** The prediction results from a call to <a>DetectAnomalies</a>. <code>DetectAnomalyResult</code> includes classification information for the prediction (<code>IsAnomalous</code> and <code>Confidence</code>). If the model you use is an image segementation model, <code>DetectAnomalyResult</code> also includes segmentation information (<code>Anomalies</code> and <code>AnomalyMask</code>). Classification information is calculated separately from segmentation information and you shouldn't assume a relationship between them. */
	export interface DetectAnomalyResult {
		Source?: ImageSource;
		IsAnomalous?: boolean | null;
		Confidence?: number;
		Anomalies?: Array<Anomaly>;
		AnomalyMask?: string;
	}

	/** The prediction results from a call to <a>DetectAnomalies</a>. <code>DetectAnomalyResult</code> includes classification information for the prediction (<code>IsAnomalous</code> and <code>Confidence</code>). If the model you use is an image segementation model, <code>DetectAnomalyResult</code> also includes segmentation information (<code>Anomalies</code> and <code>AnomalyMask</code>). Classification information is calculated separately from segmentation information and you shouldn't assume a relationship between them. */
	export interface DetectAnomalyResultFormProperties {
		IsAnomalous: FormControl<boolean | null | undefined>,
		Confidence: FormControl<number | null | undefined>,
		AnomalyMask: FormControl<string | null | undefined>,
	}
	export function CreateDetectAnomalyResultFormGroup() {
		return new FormGroup<DetectAnomalyResultFormProperties>({
			IsAnomalous: new FormControl<boolean | null | undefined>(undefined),
			Confidence: new FormControl<number | null | undefined>(undefined),
			AnomalyMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The source for an image. */
	export interface ImageSource {
		Type?: string;
	}

	/** The source for an image. */
	export interface ImageSourceFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateImageSourceFormGroup() {
		return new FormGroup<ImageSourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an anomaly type found on an image by an image segmentation model. For more information, see <a>DetectAnomalies</a>. */
	export interface Anomaly {
		Name?: string;
		PixelAnomaly?: PixelAnomaly;
	}

	/** Information about an anomaly type found on an image by an image segmentation model. For more information, see <a>DetectAnomalies</a>. */
	export interface AnomalyFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAnomalyFormGroup() {
		return new FormGroup<AnomalyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the pixels in an anomaly mask. For more information, see <a>Anomaly</a>. <code>PixelAnomaly</code> is only returned by image segmentation models. */
	export interface PixelAnomaly {
		TotalPercentageArea?: number;
		Color?: string;
	}

	/** Information about the pixels in an anomaly mask. For more information, see <a>Anomaly</a>. <code>PixelAnomaly</code> is only returned by image segmentation models. */
	export interface PixelAnomalyFormProperties {
		TotalPercentageArea: FormControl<number | null | undefined>,
		Color: FormControl<string | null | undefined>,
	}
	export function CreatePixelAnomalyFormGroup() {
		return new FormGroup<PixelAnomalyFormProperties>({
			TotalPercentageArea: new FormControl<number | null | undefined>(undefined),
			Color: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatasetEntriesResponse {
		DatasetEntries?: Array<string>;
		NextToken?: string;
	}
	export interface ListDatasetEntriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetEntriesResponseFormGroup() {
		return new FormGroup<ListDatasetEntriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListModelPackagingJobsResponse {
		ModelPackagingJobs?: Array<ModelPackagingJobMetadata>;
		NextToken?: string;
	}
	export interface ListModelPackagingJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelPackagingJobsResponseFormGroup() {
		return new FormGroup<ListModelPackagingJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Metadata for a model packaging job. For more information, see <a>ListModelPackagingJobs</a>.  */
	export interface ModelPackagingJobMetadata {
		JobName?: string;
		ProjectName?: string;
		ModelVersion?: string;
		ModelPackagingJobDescription?: string;
		ModelPackagingMethod?: string;
		Status?: ModelPackagingJobStatus;
		StatusMessage?: string;
		CreationTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
	}

	/**  Metadata for a model packaging job. For more information, see <a>ListModelPackagingJobs</a>.  */
	export interface ModelPackagingJobMetadataFormProperties {
		JobName: FormControl<string | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
		ModelPackagingJobDescription: FormControl<string | null | undefined>,
		ModelPackagingMethod: FormControl<string | null | undefined>,
		Status: FormControl<ModelPackagingJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateModelPackagingJobMetadataFormGroup() {
		return new FormGroup<ModelPackagingJobMetadataFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
			ModelPackagingJobDescription: new FormControl<string | null | undefined>(undefined),
			ModelPackagingMethod: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelPackagingJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListModelsResponse {
		Models?: Array<ModelMetadata>;
		NextToken?: string;
	}
	export interface ListModelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelsResponseFormGroup() {
		return new FormGroup<ListModelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectsResponse {
		Projects?: Array<ProjectMetadata>;
		NextToken?: string;
	}
	export interface ListProjectsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface StartModelResponse {
		Status?: ModelHostingStatus;
	}
	export interface StartModelResponseFormProperties {
		Status: FormControl<ModelHostingStatus | null | undefined>,
	}
	export function CreateStartModelResponseFormGroup() {
		return new FormGroup<StartModelResponseFormProperties>({
			Status: new FormControl<ModelHostingStatus | null | undefined>(undefined),
		});

	}

	export enum ModelHostingStatus { STARTING_HOSTING = 0, HOSTED = 1, HOSTING_FAILED = 2, STOPPING_HOSTING = 3, SYSTEM_UPDATING = 4 }

	export interface StartModelPackagingJobResponse {
		JobName?: string;
	}
	export interface StartModelPackagingJobResponseFormProperties {
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateStartModelPackagingJobResponseFormGroup() {
		return new FormGroup<StartModelPackagingJobResponseFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopModelResponse {
		Status?: ModelHostingStatus;
	}
	export interface StopModelResponseFormProperties {
		Status: FormControl<ModelHostingStatus | null | undefined>,
	}
	export function CreateStopModelResponseFormGroup() {
		return new FormGroup<StopModelResponseFormProperties>({
			Status: new FormControl<ModelHostingStatus | null | undefined>(undefined),
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateDatasetEntriesResponse {
		Status?: DatasetStatus;
	}
	export interface UpdateDatasetEntriesResponseFormProperties {
		Status: FormControl<DatasetStatus | null | undefined>,
	}
	export function CreateUpdateDatasetEntriesResponseFormGroup() {
		return new FormGroup<UpdateDatasetEntriesResponseFormProperties>({
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
		});

	}


	/** Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset. */
	export interface DatasetSource {
		GroundTruthManifest?: DatasetGroundTruthManifest;
	}

	/** Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset. */
	export interface DatasetSourceFormProperties {
	}
	export function CreateDatasetSourceFormGroup() {
		return new FormGroup<DatasetSourceFormProperties>({
		});

	}

	export interface CreateDatasetRequest {

		/** Required */
		DatasetType: string;
		DatasetSource?: DatasetSource;
	}
	export interface CreateDatasetRequestFormProperties {

		/** Required */
		DatasetType: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			DatasetType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateModelRequest {
		Description?: string;

		/** Required */
		OutputConfig: OutputConfig;
		KmsKeyId?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateModelRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelRequestFormGroup() {
		return new FormGroup<CreateModelRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectRequest {

		/** Required */
		ProjectName: string;
	}
	export interface CreateProjectRequestFormProperties {

		/** Required */
		ProjectName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			ProjectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDatasetRequest {
	}
	export interface DeleteDatasetRequestFormProperties {
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
		});

	}

	export interface DeleteModelRequest {
	}
	export interface DeleteModelRequestFormProperties {
	}
	export function CreateDeleteModelRequestFormGroup() {
		return new FormGroup<DeleteModelRequestFormProperties>({
		});

	}

	export interface DeleteProjectRequest {
	}
	export interface DeleteProjectRequestFormProperties {
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
		});

	}

	export interface DescribeDatasetRequest {
	}
	export interface DescribeDatasetRequestFormProperties {
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
		});

	}

	export interface DescribeModelPackagingJobRequest {
	}
	export interface DescribeModelPackagingJobRequestFormProperties {
	}
	export function CreateDescribeModelPackagingJobRequestFormGroup() {
		return new FormGroup<DescribeModelPackagingJobRequestFormProperties>({
		});

	}

	export interface DescribeModelRequest {
	}
	export interface DescribeModelRequestFormProperties {
	}
	export function CreateDescribeModelRequestFormGroup() {
		return new FormGroup<DescribeModelRequestFormProperties>({
		});

	}

	export interface DescribeProjectRequest {
	}
	export interface DescribeProjectRequestFormProperties {
	}
	export function CreateDescribeProjectRequestFormGroup() {
		return new FormGroup<DescribeProjectRequestFormProperties>({
		});

	}

	export interface DetectAnomaliesRequest {

		/** Required */
		Body: string;
	}
	export interface DetectAnomaliesRequestFormProperties {

		/** Required */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateDetectAnomaliesRequestFormGroup() {
		return new FormGroup<DetectAnomaliesRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDatasetEntriesRequest {
	}
	export interface ListDatasetEntriesRequestFormProperties {
	}
	export function CreateListDatasetEntriesRequestFormGroup() {
		return new FormGroup<ListDatasetEntriesRequestFormProperties>({
		});

	}

	export interface ListModelPackagingJobsRequest {
	}
	export interface ListModelPackagingJobsRequestFormProperties {
	}
	export function CreateListModelPackagingJobsRequestFormGroup() {
		return new FormGroup<ListModelPackagingJobsRequestFormProperties>({
		});

	}

	export interface ListModelsRequest {
	}
	export interface ListModelsRequestFormProperties {
	}
	export function CreateListModelsRequestFormGroup() {
		return new FormGroup<ListModelsRequestFormProperties>({
		});

	}

	export interface ListProjectsRequest {
	}
	export interface ListProjectsRequestFormProperties {
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface StartModelPackagingJobRequest {

		/** Required */
		ModelVersion: string;
		JobName?: string;

		/** Required */
		Configuration: ModelPackagingConfiguration;
		Description?: string;
	}
	export interface StartModelPackagingJobRequestFormProperties {

		/** Required */
		ModelVersion: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStartModelPackagingJobRequestFormGroup() {
		return new FormGroup<StartModelPackagingJobRequestFormProperties>({
			ModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartModelRequest {

		/** Required */
		MinInferenceUnits: number;
		MaxInferenceUnits?: number | null;
	}
	export interface StartModelRequestFormProperties {

		/** Required */
		MinInferenceUnits: FormControl<number | null | undefined>,
		MaxInferenceUnits: FormControl<number | null | undefined>,
	}
	export function CreateStartModelRequestFormGroup() {
		return new FormGroup<StartModelRequestFormProperties>({
			MinInferenceUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxInferenceUnits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StopModelRequest {
	}
	export interface StopModelRequestFormProperties {
	}
	export function CreateStopModelRequestFormGroup() {
		return new FormGroup<StopModelRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateDatasetEntriesRequest {

		/** Required */
		Changes: string;
	}
	export interface UpdateDatasetEntriesRequestFormProperties {

		/** Required */
		Changes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetEntriesRequestFormGroup() {
		return new FormGroup<UpdateDatasetEntriesRequestFormProperties>({
			Changes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new dataset in an Amazon Lookout for Vision project. <code>CreateDataset</code> can create a training or a test dataset from a valid dataset source (<code>DatasetSource</code>).</p> <p>If you want a single dataset project, specify <code>train</code> for the value of <code>DatasetType</code>.</p> <p>To have a project with separate training and test datasets, call <code>CreateDataset</code> twice. On the first call, specify <code>train</code> for the value of <code>DatasetType</code>. On the second call, specify <code>test</code> for the value of <code>DatasetType</code>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateDataset</code> operation.</p>
		 * Post 2020-11-20/projects/{projectName}/datasets
		 * @param {string} projectName The name of the project in which you want to create a dataset.
		 * @return {void} 
		 */
		CreateDataset(projectName: string, requestBody: CreateDatasetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new version of a model within an an Amazon Lookout for Vision project. <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests, and evaluates a new version of a model. </p> <p>To get the current status, check the <code>Status</code> field returned in the response from <a>DescribeModel</a>.</p> <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset to create a training and a test dataset. If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test the model. </p> <p>After training completes, the evaluation metrics are stored at the location specified in <code>OutputConfig</code>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require permission to the <code>lookoutvision:TagResource</code> operation.</p>
		 * Post 2020-11-20/projects/{projectName}/models
		 * @param {string} projectName The name of the project in which you want to create a model version.
		 * @return {void} 
		 */
		CreateModel(projectName: string, requestBody: CreateModelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the versions of a model in an Amazon Lookout for Vision project.</p> <p>The <code>ListModels</code> operation is eventually consistent. Recent calls to <code>CreateModel</code> might take a while to appear in the response from <code>ListProjects</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListModels</code> operation.</p>
		 * Get 2020-11-20/projects/{projectName}/models
		 * @param {string} projectName The name of the project that contains the model versions that you want to list.
		 * @param {string} nextToken If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of models.
		 * @param {number} maxResults The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListModelsResponse} Success
		 */
		ListModels(projectName: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListModelsResponse> {
			return this.http.get<ListModelsResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/models&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an empty Amazon Lookout for Vision project. After you create the project, add a dataset by calling <a>CreateDataset</a>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:CreateProject</code> operation.</p>
		 * Post 2020-11-20/projects
		 * @return {CreateProjectResponse} Success
		 */
		CreateProject(requestBody: CreateProjectPostBody): Observable<CreateProjectResponse> {
			return this.http.post<CreateProjectResponse>(this.baseUri + '2020-11-20/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the Amazon Lookout for Vision projects in your AWS account that are in the AWS Region in which you call <code>ListProjects</code>.</p> <p>The <code>ListProjects</code> operation is eventually consistent. Recent calls to <code>CreateProject</code> and <code>DeleteProject</code> might take a while to appear in the response from <code>ListProjects</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListProjects</code> operation.</p>
		 * Get 2020-11-20/projects
		 * @param {string} nextToken If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of projects.
		 * @param {number} maxResults The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProjectsResponse} Success
		 */
		ListProjects(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + '2020-11-20/projects?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Deletes an existing Amazon Lookout for Vision <code>dataset</code>. </p> <p>If your the project has a single dataset, you must create a new dataset before you can create a model.</p> <p>If you project has a training dataset and a test dataset consider the following. </p> <ul> <li> <p>If you delete the test dataset, your project reverts to a single dataset project. If you then train the model, Amazon Lookout for Vision internally splits the remaining dataset into a training and test dataset.</p> </li> <li> <p>If you delete the training dataset, you must create a training dataset before you can create a model.</p> </li> </ul> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteDataset</code> operation.</p>
		 * Delete 2020-11-20/projects/{projectName}/datasets/{datasetType}
		 * @param {string} projectName The name of the project that contains the dataset that you want to delete.
		 * @param {string} datasetType The type of the dataset to delete. Specify <code>train</code> to delete the training dataset. Specify <code>test</code> to delete the test dataset. To delete the dataset in a single dataset project, specify <code>train</code>.
		 * @return {void} 
		 */
		DeleteDataset(projectName: string, datasetType: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/datasets/' + (datasetType == null ? '' : encodeURIComponent(datasetType)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describe an Amazon Lookout for Vision dataset.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeDataset</code> operation.</p>
		 * Get 2020-11-20/projects/{projectName}/datasets/{datasetType}
		 * @param {string} projectName The name of the project that contains the dataset that you want to describe.
		 * @param {string} datasetType The type of the dataset to describe. Specify <code>train</code> to describe the training dataset. Specify <code>test</code> to describe the test dataset. If you have a single dataset project, specify <code>train</code> 
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(projectName: string, datasetType: string): Observable<DescribeDatasetResponse> {
			return this.http.get<DescribeDatasetResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/datasets/' + (datasetType == null ? '' : encodeURIComponent(datasetType)), {});
		}

		/**
		 * <p>Deletes an Amazon Lookout for Vision model. You can't delete a running model. To stop a running model, use the <a>StopModel</a> operation.</p> <p>It might take a few seconds to delete a model. To determine if a model has been deleted, call <a>ListModels</a> and check if the version of the model (<code>ModelVersion</code>) is in the <code>Models</code> array. </p> <p/> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteModel</code> operation.</p>
		 * Delete 2020-11-20/projects/{projectName}/models/{modelVersion}
		 * @param {string} projectName The name of the project that contains the model that you want to delete.
		 * @param {string} modelVersion The version of the model that you want to delete.
		 * @return {void} 
		 */
		DeleteModel(projectName: string, modelVersion: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/models/' + (modelVersion == null ? '' : encodeURIComponent(modelVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes a version of an Amazon Lookout for Vision model.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeModel</code> operation.</p>
		 * Get 2020-11-20/projects/{projectName}/models/{modelVersion}
		 * @param {string} projectName The project that contains the version of a model that you want to describe.
		 * @param {string} modelVersion The version of the model that you want to describe.
		 * @return {DescribeModelResponse} Success
		 */
		DescribeModel(projectName: string, modelVersion: string): Observable<DescribeModelResponse> {
			return this.http.get<DescribeModelResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/models/' + (modelVersion == null ? '' : encodeURIComponent(modelVersion)), {});
		}

		/**
		 * <p>Deletes an Amazon Lookout for Vision project.</p> <p>To delete a project, you must first delete each version of the model associated with the project. To delete a model use the <a>DeleteModel</a> operation.</p> <p>You also have to delete the dataset(s) associated with the model. For more information, see <a>DeleteDataset</a>. The images referenced by the training and test datasets aren't deleted. </p> <p>This operation requires permissions to perform the <code>lookoutvision:DeleteProject</code> operation.</p>
		 * Delete 2020-11-20/projects/{projectName}
		 * @param {string} projectName The name of the project to delete.
		 * @return {DeleteProjectResponse} Success
		 */
		DeleteProject(projectName: string): Observable<DeleteProjectResponse> {
			return this.http.delete<DeleteProjectResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)), {});
		}

		/**
		 * <p>Describes an Amazon Lookout for Vision project.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeProject</code> operation.</p>
		 * Get 2020-11-20/projects/{projectName}
		 * @param {string} projectName The name of the project that you want to describe.
		 * @return {DescribeProjectResponse} Success
		 */
		DescribeProject(projectName: string): Observable<DescribeProjectResponse> {
			return this.http.get<DescribeProjectResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)), {});
		}

		/**
		 * <p>Describes an Amazon Lookout for Vision model packaging job. </p> <p>This operation requires permissions to perform the <code>lookoutvision:DescribeModelPackagingJob</code> operation.</p> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>
		 * Get 2020-11-20/projects/{projectName}/modelpackagingjobs/{jobName}
		 * @param {string} projectName The name of the project that contains the model packaging job that you want to describe. 
		 * @param {string} jobName The job name for the model packaging job. 
		 * @return {DescribeModelPackagingJobResponse} Success
		 */
		DescribeModelPackagingJob(projectName: string, jobName: string): Observable<DescribeModelPackagingJobResponse> {
			return this.http.get<DescribeModelPackagingJobResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/modelpackagingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)), {});
		}

		/**
		 * <p>Detects anomalies in an image that you supply. </p> <p>The response from <code>DetectAnomalies</code> includes a boolean prediction that the image contains one or more anomalies and a confidence value for the prediction. If the model is an image segmentation model, the response also includes segmentation information for each type of anomaly found in the image.</p> <note> <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation. You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p> </note> <p>For more information, see <i>Detecting anomalies in an image</i> in the Amazon Lookout for Vision developer guide.</p> <p>This operation requires permissions to perform the <code>lookoutvision:DetectAnomalies</code> operation.</p>
		 * Post 2020-11-20/projects/{projectName}/models/{modelVersion}/detect#Content-Type
		 * @param {string} projectName The name of the project that contains the model version that you want to use.
		 * @param {string} modelVersion The version of the model that you want to use.
		 * @return {DetectAnomaliesResponse} Success
		 */
		DetectAnomalies(projectName: string, modelVersion: string, requestBody: DetectAnomaliesPostBody): Observable<DetectAnomaliesResponse> {
			return this.http.post<DetectAnomaliesResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/models/' + (modelVersion == null ? '' : encodeURIComponent(modelVersion)) + '/detect#Content-Type', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly information for a single image, including the image location and the assigned label.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListDatasetEntries</code> operation.</p>
		 * Get 2020-11-20/projects/{projectName}/datasets/{datasetType}/entries
		 * @param {string} projectName The name of the project that contains the dataset that you want to list.
		 * @param {string} datasetType The type of the dataset that you want to list. Specify <code>train</code> to list the training dataset. Specify <code>test</code> to list the test dataset. If you have a single dataset project, specify <code>train</code>.
		 * @param {boolean} labeled Specify <code>true</code> to include labeled entries, otherwise specify <code>false</code>. If you don't specify a value, Lookout for Vision returns all entries.
		 * @param {string} anomalyClass Specify <code>normal</code> to include only normal images. Specify <code>anomaly</code> to only include anomalous entries. If you don't specify a value, Amazon Lookout for Vision returns normal and anomalous images.
		 * @param {Date} createdBefore Only includes entries before the specified date in the response. For example, <code>2020-06-23T00:00:00</code>.
		 * @param {Date} createdAfter Only includes entries after the specified date in the response. For example, <code>2020-06-23T00:00:00</code>.
		 * @param {string} nextToken If the previous response was incomplete (because there is more data to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of dataset entries.
		 * @param {number} maxResults The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100.
		 * @param {string} sourceRefContains Perform a "contains" search on the values of the <code>source-ref</code> key within the dataset. For example a value of "IMG_17" returns all JSON Lines where the <code>source-ref</code> key value matches <i>*IMG_17*</i>.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetEntriesResponse} Success
		 */
		ListDatasetEntries(projectName: string, datasetType: string, labeled: boolean | null | undefined, anomalyClass: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, sourceRefContains: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDatasetEntriesResponse> {
			return this.http.get<ListDatasetEntriesResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/datasets/' + (datasetType == null ? '' : encodeURIComponent(datasetType)) + '/entries&labeled=' + labeled + '&anomalyClass=' + (anomalyClass == null ? '' : encodeURIComponent(anomalyClass)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&sourceRefContains=' + (sourceRefContains == null ? '' : encodeURIComponent(sourceRefContains)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Adds or updates one or more JSON Line entries in a dataset. A JSON Line includes information about an image used for training or testing an Amazon Lookout for Vision model.</p> <p>To update an existing JSON Line, use the <code>source-ref</code> field to identify the JSON Line. The JSON line that you supply replaces the existing JSON line. Any existing annotations that are not in the new JSON line are removed from the dataset. </p> <p>For more information, see <i>Defining JSON lines for anomaly classification</i> in the Amazon Lookout for Vision Developer Guide. </p> <note> <p>The images you reference in the <code>source-ref</code> field of a JSON line, must be in the same S3 bucket as the existing images in the dataset. </p> </note> <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and check the <code>Status</code> field in the response.</p> <p>This operation requires permissions to perform the <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>
		 * Patch 2020-11-20/projects/{projectName}/datasets/{datasetType}/entries
		 * @param {string} projectName The name of the project that contains the dataset that you want to update.
		 * @param {string} datasetType The type of the dataset that you want to update. Specify <code>train</code> to update the training dataset. Specify <code>test</code> to update the test dataset. If you have a single dataset project, specify <code>train</code>.
		 * @return {void} 
		 */
		UpdateDatasetEntries(projectName: string, datasetType: string, requestBody: UpdateDatasetEntriesPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/datasets/' + (datasetType == null ? '' : encodeURIComponent(datasetType)) + '/entries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Lists the model packaging jobs created for an Amazon Lookout for Vision project. </p> <p>This operation requires permissions to perform the <code>lookoutvision:ListModelPackagingJobs</code> operation. </p> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>
		 * Get 2020-11-20/projects/{projectName}/modelpackagingjobs
		 * @param {string} projectName  The name of the project for which you want to list the model packaging jobs. 
		 * @param {string} nextToken If the previous response was incomplete (because there is more results to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. 
		 * @param {number} maxResults The maximum number of results to return per paginated call. The largest value you can specify is 100. If you specify a value greater than 100, a ValidationException error occurs. The default value is 100. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListModelPackagingJobsResponse} Success
		 */
		ListModelPackagingJobs(projectName: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListModelPackagingJobsResponse> {
			return this.http.get<ListModelPackagingJobsResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/modelpackagingjobs&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Starts an Amazon Lookout for Vision model packaging job. A model packaging job creates an AWS IoT Greengrass component for a Lookout for Vision model. You can use the component to deploy your model to an edge device managed by Greengrass. </p> <p>Use the <a>DescribeModelPackagingJob</a> API to determine the current status of the job. The model packaging job is complete if the value of <code>Status</code> is <code>SUCCEEDED</code>.</p> <p>To deploy the component to the target device, use the component name and component version with the AWS IoT Greengrass <a href="https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html">CreateDeployment</a> API.</p> <p>This operation requires the following permissions:</p> <ul> <li> <p> <code>lookoutvision:StartModelPackagingJob</code> </p> </li> <li> <p> <code>s3:PutObject</code> </p> </li> <li> <p> <code>s3:GetBucketLocation</code> </p> </li> <li> <p> <code>kms:GenerateDataKey</code> </p> </li> <li> <p> <code>greengrass:CreateComponentVersion</code> </p> </li> <li> <p> <code>greengrass:DescribeComponent</code> </p> </li> <li> <p>(Optional) <code>greengrass:TagResource</code>. Only required if you want to tag the component.</p> </li> </ul> <p>For more information, see <i>Using your Amazon Lookout for Vision model on an edge device</i> in the Amazon Lookout for Vision Developer Guide. </p>
		 * Post 2020-11-20/projects/{projectName}/modelpackagingjobs
		 * @param {string} projectName  The name of the project which contains the version of the model that you want to package. 
		 * @return {StartModelPackagingJobResponse} Success
		 */
		StartModelPackagingJob(projectName: string, requestBody: StartModelPackagingJobPostBody): Observable<StartModelPackagingJobResponse> {
			return this.http.post<StartModelPackagingJobResponse>(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/modelpackagingjobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of tags attached to the specified Amazon Lookout for Vision model.</p> <p>This operation requires permissions to perform the <code>lookoutvision:ListTagsForResource</code> operation.</p>
		 * Get 2020-11-20/tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the model for which you want to list tags. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + '2020-11-20/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds one or more key-value tags to an Amazon Lookout for Vision model. For more information, see <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:TagResource</code> operation.</p>
		 * Post 2020-11-20/tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the model to assign the tags.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '2020-11-20/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while to complete. To check the current state of the model, use <a>DescribeModel</a>.</p> <p>A model is ready to use when its status is <code>HOSTED</code>.</p> <p>Once the model is running, you can detect custom labels in new images by calling <a>DetectAnomalies</a>.</p> <note> <p>You are charged for the amount of time that the model is running. To stop a running model, call <a>StopModel</a>.</p> </note> <p>This operation requires permissions to perform the <code>lookoutvision:StartModel</code> operation.</p>
		 * Post 2020-11-20/projects/{projectName}/models/{modelVersion}/start
		 * @param {string} projectName The name of the project that contains the model that you want to start.
		 * @param {string} modelVersion The version of the model that you want to start.
		 * @return {void} 
		 */
		StartModel(projectName: string, modelVersion: string, requestBody: StartModelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/models/' + (modelVersion == null ? '' : encodeURIComponent(modelVersion)) + '/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops the hosting of a running model. The operation might take a while to complete. To check the current status, call <a>DescribeModel</a>. </p> <p>After the model hosting stops, the <code>Status</code> of the model is <code>TRAINED</code>.</p> <p>This operation requires permissions to perform the <code>lookoutvision:StopModel</code> operation.</p>
		 * Post 2020-11-20/projects/{projectName}/models/{modelVersion}/stop
		 * @param {string} projectName The name of the project that contains the model that you want to stop.
		 * @param {string} modelVersion The version of the model that you want to stop.
		 * @return {void} 
		 */
		StopModel(projectName: string, modelVersion: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2020-11-20/projects/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/models/' + (modelVersion == null ? '' : encodeURIComponent(modelVersion)) + '/stop', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes one or more tags from an Amazon Lookout for Vision model. For more information, see <i>Tagging a model</i> in the <i>Amazon Lookout for Vision Developer Guide</i>. </p> <p>This operation requires permissions to perform the <code>lookoutvision:UntagResource</code> operation.</p>
		 * Delete 2020-11-20/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the model from which you want to remove tags. 
		 * @param {Array<string>} tagKeys A list of the keys of the tags that you want to remove.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + '2020-11-20/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateDatasetPostBody {

		/**
		 * The type of the dataset. Specify <code>train</code> for a training dataset. Specify <code>test</code> for a test dataset.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		DatasetType: string;

		/** Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset. */
		DatasetSource?: CreateDatasetPostBodyDatasetSource;
	}
	export interface CreateDatasetPostBodyFormProperties {

		/**
		 * The type of the dataset. Specify <code>train</code> for a training dataset. Specify <code>test</code> for a test dataset.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		DatasetType: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyFormGroup() {
		return new FormGroup<CreateDatasetPostBodyFormProperties>({
			DatasetType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('train|test')]),
		});

	}

	export interface CreateDatasetPostBodyDatasetSource {
		GroundTruthManifest?: DatasetGroundTruthManifest;
	}
	export interface CreateDatasetPostBodyDatasetSourceFormProperties {
	}
	export function CreateCreateDatasetPostBodyDatasetSourceFormGroup() {
		return new FormGroup<CreateDatasetPostBodyDatasetSourceFormProperties>({
		});

	}

	export interface CreateModelPostBody {

		/**
		 * A description for the version of the model.
		 * Max length: 500
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The S3 location where Amazon Lookout for Vision saves model training files.
		 * Required
		 */
		OutputConfig: CreateModelPostBodyOutputConfig;

		/**
		 * The identifier for your AWS KMS key. The key is used to encrypt training and test images copied into the service for model training. Your source images are unaffected. If this parameter is not specified, the copied images are encrypted by a key that AWS owns and manages.
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId?: string | null;

		/**
		 * A set of tags (key-value pairs) that you want to attach to the model.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateModelPostBodyFormProperties {

		/**
		 * A description for the version of the model.
		 * Max length: 500
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The identifier for your AWS KMS key. The key is used to encrypt training and test images copied into the service for model training. Your source images are unaffected. If this parameter is not specified, the copied images are encrypted by a key that AWS owns and manages.
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelPostBodyFormGroup() {
		return new FormGroup<CreateModelPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500), Validators.pattern('[0-9A-Za-z\.\-_]*')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,2048}$')]),
		});

	}

	export interface CreateModelPostBodyOutputConfig {
		S3Location?: S3Location;
	}
	export interface CreateModelPostBodyOutputConfigFormProperties {
	}
	export function CreateCreateModelPostBodyOutputConfigFormGroup() {
		return new FormGroup<CreateModelPostBodyOutputConfigFormProperties>({
		});

	}

	export interface CreateProjectPostBody {

		/**
		 * The name for the project.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProjectName: string;
	}
	export interface CreateProjectPostBodyFormProperties {

		/**
		 * The name for the project.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProjectName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectPostBodyFormGroup() {
		return new FormGroup<CreateProjectPostBodyFormProperties>({
			ProjectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_\-]*')]),
		});

	}

	export interface DetectAnomaliesPostBody {

		/**
		 * The unencrypted image bytes that you want to analyze.
		 * Required
		 */
		Body: string;
	}
	export interface DetectAnomaliesPostBodyFormProperties {

		/**
		 * The unencrypted image bytes that you want to analyze.
		 * Required
		 */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateDetectAnomaliesPostBodyFormGroup() {
		return new FormGroup<DetectAnomaliesPostBodyFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDatasetEntriesPatchBody {

		/**
		 * The entries to add to the dataset.
		 * Required
		 * Max length: 10485760
		 * Min length: 1
		 */
		Changes: string;
	}
	export interface UpdateDatasetEntriesPatchBodyFormProperties {

		/**
		 * The entries to add to the dataset.
		 * Required
		 * Max length: 10485760
		 * Min length: 1
		 */
		Changes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetEntriesPatchBodyFormGroup() {
		return new FormGroup<UpdateDatasetEntriesPatchBodyFormProperties>({
			Changes: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10485760)]),
		});

	}

	export interface StartModelPackagingJobPostBody {

		/**
		 * The version of the model within the project that you want to package.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		ModelVersion: string;

		/**
		 * A name for the model packaging job. If you don't supply a value, the service creates a job name for you.
		 * Max length: 64
		 * Min length: 1
		 */
		JobName?: string | null;

		/**
		 * Configuration information for a Amazon Lookout for Vision model packaging job. For more information, see <a>StartModelPackagingJob</a>.
		 * Required
		 */
		Configuration: StartModelPackagingJobPostBodyConfiguration;

		/**
		 * A description for the model packaging job.
		 * Max length: 256
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface StartModelPackagingJobPostBodyFormProperties {

		/**
		 * The version of the model within the project that you want to package.
		 * Required
		 * Max length: 10
		 * Min length: 1
		 */
		ModelVersion: FormControl<string | null | undefined>,

		/**
		 * A name for the model packaging job. If you don't supply a value, the service creates a job name for you.
		 * Max length: 64
		 * Min length: 1
		 */
		JobName: FormControl<string | null | undefined>,

		/**
		 * A description for the model packaging job.
		 * Max length: 256
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStartModelPackagingJobPostBodyFormGroup() {
		return new FormGroup<StartModelPackagingJobPostBodyFormProperties>({
			ModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('([1-9][0-9]*|latest)')]),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9-]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9-_. ()\':,;?]+')]),
		});

	}

	export interface StartModelPackagingJobPostBodyConfiguration {
		Greengrass?: GreengrassConfiguration;
	}
	export interface StartModelPackagingJobPostBodyConfigurationFormProperties {
	}
	export function CreateStartModelPackagingJobPostBodyConfigurationFormGroup() {
		return new FormGroup<StartModelPackagingJobPostBodyConfigurationFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The key-value tags to assign to the model.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface StartModelPostBody {

		/**
		 * The minimum number of inference units to use. A single inference unit represents 1 hour of processing. Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use.
		 * Required
		 * Minimum: 1
		 */
		MinInferenceUnits: number;

		/**
		 * The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Lookout for Vision doesn't auto-scale the model.
		 * Minimum: 1
		 */
		MaxInferenceUnits?: number | null;
	}
	export interface StartModelPostBodyFormProperties {

		/**
		 * The minimum number of inference units to use. A single inference unit represents 1 hour of processing. Use a higher number to increase the TPS throughput of your model. You are charged for the number of inference units that you use.
		 * Required
		 * Minimum: 1
		 */
		MinInferenceUnits: FormControl<number | null | undefined>,

		/**
		 * The maximum number of inference units to use for auto-scaling the model. If you don't specify a value, Amazon Lookout for Vision doesn't auto-scale the model.
		 * Minimum: 1
		 */
		MaxInferenceUnits: FormControl<number | null | undefined>,
	}
	export function CreateStartModelPostBodyFormGroup() {
		return new FormGroup<StartModelPostBodyFormProperties>({
			MinInferenceUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			MaxInferenceUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

}

