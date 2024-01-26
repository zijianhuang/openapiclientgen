import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDatasetResponse {
		DatasetName?: string;
		DatasetArn?: string;
		Status?: DatasetStatus;
	}
	export interface CreateDatasetResponseFormProperties {
		DatasetName: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
		});

	}

	export enum DatasetStatus { CREATED = 0, INGESTION_IN_PROGRESS = 1, ACTIVE = 2, IMPORT_IN_PROGRESS = 3 }

	export interface CreateDatasetRequest {

		/** Required */
		DatasetName: string;
		DatasetSchema?: DatasetSchema;
		ServerSideKmsKeyId?: string;

		/** Required */
		ClientToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateDatasetRequestFormProperties {

		/** Required */
		DatasetName: FormControl<string | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about the data schema used with the given dataset.  */
	export interface DatasetSchema {
		InlineDataSchema?: string;
	}

	/** Provides information about the data schema used with the given dataset.  */
	export interface DatasetSchemaFormProperties {
		InlineDataSchema: FormControl<string | null | undefined>,
	}
	export function CreateDatasetSchemaFormGroup() {
		return new FormGroup<DatasetSchemaFormProperties>({
			InlineDataSchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag is a key-value pair that can be added to a resource as metadata.  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A tag is a key-value pair that can be added to a resource as metadata.  */
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

	export interface CreateInferenceSchedulerResponse {
		InferenceSchedulerArn?: string;
		InferenceSchedulerName?: string;
		Status?: InferenceSchedulerStatus;
	}
	export interface CreateInferenceSchedulerResponseFormProperties {
		InferenceSchedulerArn: FormControl<string | null | undefined>,
		InferenceSchedulerName: FormControl<string | null | undefined>,
		Status: FormControl<InferenceSchedulerStatus | null | undefined>,
	}
	export function CreateCreateInferenceSchedulerResponseFormGroup() {
		return new FormGroup<CreateInferenceSchedulerResponseFormProperties>({
			InferenceSchedulerArn: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<InferenceSchedulerStatus | null | undefined>(undefined),
		});

	}

	export enum InferenceSchedulerStatus { PENDING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3 }

	export interface CreateInferenceSchedulerRequest {

		/** Required */
		ModelName: string;

		/** Required */
		InferenceSchedulerName: string;
		DataDelayOffsetInMinutes?: number | null;

		/** Required */
		DataUploadFrequency: DataUploadFrequency;

		/** Required */
		DataInputConfiguration: InferenceInputConfiguration;

		/** Required */
		DataOutputConfiguration: InferenceOutputConfiguration;

		/** Required */
		RoleArn: string;
		ServerSideKmsKeyId?: string;

		/** Required */
		ClientToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateInferenceSchedulerRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,

		/** Required */
		InferenceSchedulerName: FormControl<string | null | undefined>,
		DataDelayOffsetInMinutes: FormControl<number | null | undefined>,

		/** Required */
		DataUploadFrequency: FormControl<DataUploadFrequency | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateInferenceSchedulerRequestFormGroup() {
		return new FormGroup<CreateInferenceSchedulerRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataDelayOffsetInMinutes: new FormControl<number | null | undefined>(undefined),
			DataUploadFrequency: new FormControl<DataUploadFrequency | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataUploadFrequency { PT5M = 0, PT10M = 1, PT15M = 2, PT30M = 3, PT1H = 4 }


	/** Specifies configuration information for the input data for the inference, including Amazon S3 location of input data..  */
	export interface InferenceInputConfiguration {
		S3InputConfiguration?: InferenceS3InputConfiguration;
		InputTimeZoneOffset?: string;
		InferenceInputNameConfiguration?: InferenceInputNameConfiguration;
	}

	/** Specifies configuration information for the input data for the inference, including Amazon S3 location of input data..  */
	export interface InferenceInputConfigurationFormProperties {
		InputTimeZoneOffset: FormControl<string | null | undefined>,
	}
	export function CreateInferenceInputConfigurationFormGroup() {
		return new FormGroup<InferenceInputConfigurationFormProperties>({
			InputTimeZoneOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies configuration information for the input data for the inference, including input data S3 location.  */
	export interface InferenceS3InputConfiguration {

		/** Required */
		Bucket: string;
		Prefix?: string;
	}

	/**  Specifies configuration information for the input data for the inference, including input data S3 location.  */
	export interface InferenceS3InputConfigurationFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateInferenceS3InputConfigurationFormGroup() {
		return new FormGroup<InferenceS3InputConfigurationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies configuration information for the input data for the inference, including timestamp format and delimiter.  */
	export interface InferenceInputNameConfiguration {
		TimestampFormat?: string;
		ComponentTimestampDelimiter?: string;
	}

	/** Specifies configuration information for the input data for the inference, including timestamp format and delimiter.  */
	export interface InferenceInputNameConfigurationFormProperties {
		TimestampFormat: FormControl<string | null | undefined>,
		ComponentTimestampDelimiter: FormControl<string | null | undefined>,
	}
	export function CreateInferenceInputNameConfigurationFormGroup() {
		return new FormGroup<InferenceInputNameConfigurationFormProperties>({
			TimestampFormat: new FormControl<string | null | undefined>(undefined),
			ComponentTimestampDelimiter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location.  */
	export interface InferenceOutputConfiguration {

		/** Required */
		S3OutputConfiguration: InferenceS3OutputConfiguration;
		KmsKeyId?: string;
	}

	/**  Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location.  */
	export interface InferenceOutputConfigurationFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateInferenceOutputConfigurationFormGroup() {
		return new FormGroup<InferenceOutputConfigurationFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies configuration information for the output results from the inference, including output S3 location.  */
	export interface InferenceS3OutputConfiguration {

		/** Required */
		Bucket: string;
		Prefix?: string;
	}

	/**  Specifies configuration information for the output results from the inference, including output S3 location.  */
	export interface InferenceS3OutputConfigurationFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateInferenceS3OutputConfigurationFormGroup() {
		return new FormGroup<InferenceS3OutputConfigurationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateLabelResponse {
		LabelId?: string;
	}
	export interface CreateLabelResponseFormProperties {
		LabelId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLabelResponseFormGroup() {
		return new FormGroup<CreateLabelResponseFormProperties>({
			LabelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLabelRequest {

		/** Required */
		LabelGroupName: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;

		/** Required */
		Rating: LabelRating;
		FaultCode?: string;
		Notes?: string;
		Equipment?: string;

		/** Required */
		ClientToken: string;
	}
	export interface CreateLabelRequestFormProperties {

		/** Required */
		LabelGroupName: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		Rating: FormControl<LabelRating | null | undefined>,
		FaultCode: FormControl<string | null | undefined>,
		Notes: FormControl<string | null | undefined>,
		Equipment: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLabelRequestFormGroup() {
		return new FormGroup<CreateLabelRequestFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Rating: new FormControl<LabelRating | null | undefined>(undefined, [Validators.required]),
			FaultCode: new FormControl<string | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Equipment: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LabelRating { ANOMALY = 0, NO_ANOMALY = 1, NEUTRAL = 2 }

	export interface CreateLabelGroupResponse {
		LabelGroupName?: string;
		LabelGroupArn?: string;
	}
	export interface CreateLabelGroupResponseFormProperties {
		LabelGroupName: FormControl<string | null | undefined>,
		LabelGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLabelGroupResponseFormGroup() {
		return new FormGroup<CreateLabelGroupResponseFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined),
			LabelGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLabelGroupRequest {

		/** Required */
		LabelGroupName: string;
		FaultCodes?: Array<string>;

		/** Required */
		ClientToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateLabelGroupRequestFormProperties {

		/** Required */
		LabelGroupName: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLabelGroupRequestFormGroup() {
		return new FormGroup<CreateLabelGroupRequestFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateModelResponse {
		ModelArn?: string;
		Status?: ModelStatus;
	}
	export interface CreateModelResponseFormProperties {
		ModelArn: FormControl<string | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
	}
	export function CreateCreateModelResponseFormGroup() {
		return new FormGroup<CreateModelResponseFormProperties>({
			ModelArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
		});

	}

	export enum ModelStatus { IN_PROGRESS = 0, SUCCESS = 1, FAILED = 2, IMPORT_IN_PROGRESS = 3 }

	export interface CreateModelRequest {

		/** Required */
		ModelName: string;

		/** Required */
		DatasetName: string;
		DatasetSchema?: DatasetSchema;
		LabelsInputConfiguration?: LabelsInputConfiguration;

		/** Required */
		ClientToken: string;
		TrainingDataStartTime?: Date;
		TrainingDataEndTime?: Date;
		EvaluationDataStartTime?: Date;
		EvaluationDataEndTime?: Date;
		RoleArn?: string;
		DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
		ServerSideKmsKeyId?: string;
		Tags?: Array<Tag>;
		OffCondition?: string;
	}
	export interface CreateModelRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,

		/** Required */
		DatasetName: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
		TrainingDataStartTime: FormControl<Date | null | undefined>,
		TrainingDataEndTime: FormControl<Date | null | undefined>,
		EvaluationDataStartTime: FormControl<Date | null | undefined>,
		EvaluationDataEndTime: FormControl<Date | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,
		OffCondition: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelRequestFormGroup() {
		return new FormGroup<CreateModelRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrainingDataStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingDataEndTime: new FormControl<Date | null | undefined>(undefined),
			EvaluationDataStartTime: new FormControl<Date | null | undefined>(undefined),
			EvaluationDataEndTime: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
			OffCondition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration information for the S3 location being used to hold label data.  */
	export interface LabelsInputConfiguration {
		S3InputConfiguration?: LabelsS3InputConfiguration;
		LabelGroupName?: string;
	}

	/** Contains the configuration information for the S3 location being used to hold label data.  */
	export interface LabelsInputConfigurationFormProperties {
		LabelGroupName: FormControl<string | null | undefined>,
	}
	export function CreateLabelsInputConfigurationFormGroup() {
		return new FormGroup<LabelsInputConfigurationFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location information (prefix and bucket name) for the s3 location being used for label data.  */
	export interface LabelsS3InputConfiguration {

		/** Required */
		Bucket: string;
		Prefix?: string;
	}

	/** The location information (prefix and bucket name) for the s3 location being used for label data.  */
	export interface LabelsS3InputConfigurationFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateLabelsS3InputConfigurationFormGroup() {
		return new FormGroup<LabelsS3InputConfigurationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p> */
	export interface DataPreProcessingConfiguration {
		TargetSamplingRate?: TargetSamplingRate;
	}

	/** <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p> */
	export interface DataPreProcessingConfigurationFormProperties {
		TargetSamplingRate: FormControl<TargetSamplingRate | null | undefined>,
	}
	export function CreateDataPreProcessingConfigurationFormGroup() {
		return new FormGroup<DataPreProcessingConfigurationFormProperties>({
			TargetSamplingRate: new FormControl<TargetSamplingRate | null | undefined>(undefined),
		});

	}

	export enum TargetSamplingRate { PT1S = 0, PT5S = 1, PT10S = 2, PT15S = 3, PT30S = 4, PT1M = 5, PT5M = 6, PT10M = 7, PT15M = 8, PT30M = 9, PT1H = 10 }

	export interface DeleteDatasetRequest {

		/** Required */
		DatasetName: string;
	}
	export interface DeleteDatasetRequestFormProperties {

		/** Required */
		DatasetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInferenceSchedulerRequest {

		/** Required */
		InferenceSchedulerName: string;
	}
	export interface DeleteInferenceSchedulerRequestFormProperties {

		/** Required */
		InferenceSchedulerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInferenceSchedulerRequestFormGroup() {
		return new FormGroup<DeleteInferenceSchedulerRequestFormProperties>({
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLabelRequest {

		/** Required */
		LabelGroupName: string;

		/** Required */
		LabelId: string;
	}
	export interface DeleteLabelRequestFormProperties {

		/** Required */
		LabelGroupName: FormControl<string | null | undefined>,

		/** Required */
		LabelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLabelRequestFormGroup() {
		return new FormGroup<DeleteLabelRequestFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LabelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLabelGroupRequest {

		/** Required */
		LabelGroupName: string;
	}
	export interface DeleteLabelGroupRequestFormProperties {

		/** Required */
		LabelGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLabelGroupRequestFormGroup() {
		return new FormGroup<DeleteLabelGroupRequestFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteModelRequest {

		/** Required */
		ModelName: string;
	}
	export interface DeleteModelRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteModelRequestFormGroup() {
		return new FormGroup<DeleteModelRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResourcePolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDataIngestionJobResponse {
		JobId?: string;
		DatasetArn?: string;
		IngestionInputConfiguration?: IngestionInputConfiguration;
		RoleArn?: string;
		CreatedAt?: Date;
		Status?: ModelStatus;
		FailedReason?: string;
		DataQualitySummary?: DataQualitySummary;

		/** Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job. */
		IngestedFilesSummary?: IngestedFilesSummary;
		StatusDetail?: string;
		IngestedDataSize?: number | null;
		DataStartTime?: Date;
		DataEndTime?: Date;
		SourceDatasetArn?: string;
	}
	export interface DescribeDataIngestionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
		FailedReason: FormControl<string | null | undefined>,
		StatusDetail: FormControl<string | null | undefined>,
		IngestedDataSize: FormControl<number | null | undefined>,
		DataStartTime: FormControl<Date | null | undefined>,
		DataEndTime: FormControl<Date | null | undefined>,
		SourceDatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataIngestionJobResponseFormGroup() {
		return new FormGroup<DescribeDataIngestionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			FailedReason: new FormControl<string | null | undefined>(undefined),
			StatusDetail: new FormControl<string | null | undefined>(undefined),
			IngestedDataSize: new FormControl<number | null | undefined>(undefined),
			DataStartTime: new FormControl<Date | null | undefined>(undefined),
			DataEndTime: new FormControl<Date | null | undefined>(undefined),
			SourceDatasetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies configuration information for the input data for the data ingestion job, including input data S3 location.  */
	export interface IngestionInputConfiguration {

		/** Required */
		S3InputConfiguration: IngestionS3InputConfiguration;
	}

	/**  Specifies configuration information for the input data for the data ingestion job, including input data S3 location.  */
	export interface IngestionInputConfigurationFormProperties {
	}
	export function CreateIngestionInputConfigurationFormGroup() {
		return new FormGroup<IngestionInputConfigurationFormProperties>({
		});

	}


	/**  Specifies S3 configuration information for the input data for the data ingestion job.  */
	export interface IngestionS3InputConfiguration {

		/** Required */
		Bucket: string;
		Prefix?: string;
		KeyPattern?: string;
	}

	/**  Specifies S3 configuration information for the input data for the data ingestion job.  */
	export interface IngestionS3InputConfigurationFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		KeyPattern: FormControl<string | null | undefined>,
	}
	export function CreateIngestionS3InputConfigurationFormGroup() {
		return new FormGroup<IngestionS3InputConfigurationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined),
			KeyPattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  DataQualitySummary gives aggregated statistics over all the sensors about a completed ingestion job. It primarily gives more information about statistics over different incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, DuplicateTimeStamps.  */
	export interface DataQualitySummary {

		/** Required */
		InsufficientSensorData: InsufficientSensorData;

		/** Required */
		MissingSensorData: MissingSensorData;

		/** Required */
		InvalidSensorData: InvalidSensorData;

		/** Required */
		UnsupportedTimestamps: UnsupportedTimestamps;

		/** Required */
		DuplicateTimestamps: DuplicateTimestamps;
	}

	/**  DataQualitySummary gives aggregated statistics over all the sensors about a completed ingestion job. It primarily gives more information about statistics over different incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, DuplicateTimeStamps.  */
	export interface DataQualitySummaryFormProperties {
	}
	export function CreateDataQualitySummaryFormGroup() {
		return new FormGroup<DataQualitySummaryFormProperties>({
		});

	}


	/**  Entity that comprises aggregated information on sensors having insufficient data.  */
	export interface InsufficientSensorData {

		/** Required */
		MissingCompleteSensorData: MissingCompleteSensorData;

		/** Required */
		SensorsWithShortDateRange: SensorsWithShortDateRange;
	}

	/**  Entity that comprises aggregated information on sensors having insufficient data.  */
	export interface InsufficientSensorDataFormProperties {
	}
	export function CreateInsufficientSensorDataFormGroup() {
		return new FormGroup<InsufficientSensorDataFormProperties>({
		});

	}


	/**  Entity that comprises information on sensors that have sensor data completely missing.  */
	export interface MissingCompleteSensorData {

		/** Required */
		AffectedSensorCount: number;
	}

	/**  Entity that comprises information on sensors that have sensor data completely missing.  */
	export interface MissingCompleteSensorDataFormProperties {

		/** Required */
		AffectedSensorCount: FormControl<number | null | undefined>,
	}
	export function CreateMissingCompleteSensorDataFormGroup() {
		return new FormGroup<MissingCompleteSensorDataFormProperties>({
			AffectedSensorCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Entity that comprises information on sensors that have shorter date range.  */
	export interface SensorsWithShortDateRange {

		/** Required */
		AffectedSensorCount: number;
	}

	/**  Entity that comprises information on sensors that have shorter date range.  */
	export interface SensorsWithShortDateRangeFormProperties {

		/** Required */
		AffectedSensorCount: FormControl<number | null | undefined>,
	}
	export function CreateSensorsWithShortDateRangeFormGroup() {
		return new FormGroup<SensorsWithShortDateRangeFormProperties>({
			AffectedSensorCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Entity that comprises aggregated information on sensors having missing data.  */
	export interface MissingSensorData {

		/** Required */
		AffectedSensorCount: number;

		/** Required */
		TotalNumberOfMissingValues: number;
	}

	/**  Entity that comprises aggregated information on sensors having missing data.  */
	export interface MissingSensorDataFormProperties {

		/** Required */
		AffectedSensorCount: FormControl<number | null | undefined>,

		/** Required */
		TotalNumberOfMissingValues: FormControl<number | null | undefined>,
	}
	export function CreateMissingSensorDataFormGroup() {
		return new FormGroup<MissingSensorDataFormProperties>({
			AffectedSensorCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalNumberOfMissingValues: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Entity that comprises aggregated information on sensors having insufficient data.  */
	export interface InvalidSensorData {

		/** Required */
		AffectedSensorCount: number;

		/** Required */
		TotalNumberOfInvalidValues: number;
	}

	/**  Entity that comprises aggregated information on sensors having insufficient data.  */
	export interface InvalidSensorDataFormProperties {

		/** Required */
		AffectedSensorCount: FormControl<number | null | undefined>,

		/** Required */
		TotalNumberOfInvalidValues: FormControl<number | null | undefined>,
	}
	export function CreateInvalidSensorDataFormGroup() {
		return new FormGroup<InvalidSensorDataFormProperties>({
			AffectedSensorCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalNumberOfInvalidValues: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Entity that comprises information abount unsupported timestamps in the dataset.  */
	export interface UnsupportedTimestamps {

		/** Required */
		TotalNumberOfUnsupportedTimestamps: number;
	}

	/**  Entity that comprises information abount unsupported timestamps in the dataset.  */
	export interface UnsupportedTimestampsFormProperties {

		/** Required */
		TotalNumberOfUnsupportedTimestamps: FormControl<number | null | undefined>,
	}
	export function CreateUnsupportedTimestampsFormGroup() {
		return new FormGroup<UnsupportedTimestampsFormProperties>({
			TotalNumberOfUnsupportedTimestamps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Entity that comprises information abount duplicate timestamps in the dataset.  */
	export interface DuplicateTimestamps {

		/** Required */
		TotalNumberOfDuplicateTimestamps: number;
	}

	/**  Entity that comprises information abount duplicate timestamps in the dataset.  */
	export interface DuplicateTimestampsFormProperties {

		/** Required */
		TotalNumberOfDuplicateTimestamps: FormControl<number | null | undefined>,
	}
	export function CreateDuplicateTimestampsFormGroup() {
		return new FormGroup<DuplicateTimestampsFormProperties>({
			TotalNumberOfDuplicateTimestamps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job. */
	export interface IngestedFilesSummary {

		/** Required */
		TotalNumberOfFiles: number;

		/** Required */
		IngestedNumberOfFiles: number;
		DiscardedFiles?: Array<S3Object>;
	}

	/** Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job. */
	export interface IngestedFilesSummaryFormProperties {

		/** Required */
		TotalNumberOfFiles: FormControl<number | null | undefined>,

		/** Required */
		IngestedNumberOfFiles: FormControl<number | null | undefined>,
	}
	export function CreateIngestedFilesSummaryFormGroup() {
		return new FormGroup<IngestedFilesSummaryFormProperties>({
			TotalNumberOfFiles: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IngestedNumberOfFiles: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about an S3 bucket.  */
	export interface S3Object {

		/** Required */
		Bucket: string;

		/** Required */
		Key: string;
	}

	/** Contains information about an S3 bucket.  */
	export interface S3ObjectFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDataIngestionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeDataIngestionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDataIngestionJobRequestFormGroup() {
		return new FormGroup<DescribeDataIngestionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetResponse {
		DatasetName?: string;
		DatasetArn?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		Status?: DatasetStatus;
		Schema?: string;
		ServerSideKmsKeyId?: string;
		IngestionInputConfiguration?: IngestionInputConfiguration;
		DataQualitySummary?: DataQualitySummary;
		IngestedFilesSummary?: IngestedFilesSummary;
		RoleArn?: string;
		DataStartTime?: Date;
		DataEndTime?: Date;
		SourceDatasetArn?: string;
	}
	export interface DescribeDatasetResponseFormProperties {
		DatasetName: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
		Schema: FormControl<string | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		DataStartTime: FormControl<Date | null | undefined>,
		DataEndTime: FormControl<Date | null | undefined>,
		SourceDatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			DataStartTime: new FormControl<Date | null | undefined>(undefined),
			DataEndTime: new FormControl<Date | null | undefined>(undefined),
			SourceDatasetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetRequest {

		/** Required */
		DatasetName: string;
	}
	export interface DescribeDatasetRequestFormProperties {

		/** Required */
		DatasetName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeInferenceSchedulerResponse {
		ModelArn?: string;
		ModelName?: string;
		InferenceSchedulerName?: string;
		InferenceSchedulerArn?: string;
		Status?: InferenceSchedulerStatus;
		DataDelayOffsetInMinutes?: number | null;
		DataUploadFrequency?: DataUploadFrequency;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		DataInputConfiguration?: InferenceInputConfiguration;
		DataOutputConfiguration?: InferenceOutputConfiguration;
		RoleArn?: string;
		ServerSideKmsKeyId?: string;
		LatestInferenceResult?: LatestInferenceResult;
	}
	export interface DescribeInferenceSchedulerResponseFormProperties {
		ModelArn: FormControl<string | null | undefined>,
		ModelName: FormControl<string | null | undefined>,
		InferenceSchedulerName: FormControl<string | null | undefined>,
		InferenceSchedulerArn: FormControl<string | null | undefined>,
		Status: FormControl<InferenceSchedulerStatus | null | undefined>,
		DataDelayOffsetInMinutes: FormControl<number | null | undefined>,
		DataUploadFrequency: FormControl<DataUploadFrequency | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,
		LatestInferenceResult: FormControl<LatestInferenceResult | null | undefined>,
	}
	export function CreateDescribeInferenceSchedulerResponseFormGroup() {
		return new FormGroup<DescribeInferenceSchedulerResponseFormProperties>({
			ModelArn: new FormControl<string | null | undefined>(undefined),
			ModelName: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<InferenceSchedulerStatus | null | undefined>(undefined),
			DataDelayOffsetInMinutes: new FormControl<number | null | undefined>(undefined),
			DataUploadFrequency: new FormControl<DataUploadFrequency | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
			LatestInferenceResult: new FormControl<LatestInferenceResult | null | undefined>(undefined),
		});

	}

	export enum LatestInferenceResult { ANOMALOUS = 0, NORMAL = 1 }

	export interface DescribeInferenceSchedulerRequest {

		/** Required */
		InferenceSchedulerName: string;
	}
	export interface DescribeInferenceSchedulerRequestFormProperties {

		/** Required */
		InferenceSchedulerName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInferenceSchedulerRequestFormGroup() {
		return new FormGroup<DescribeInferenceSchedulerRequestFormProperties>({
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLabelResponse {
		LabelGroupName?: string;
		LabelGroupArn?: string;
		LabelId?: string;
		StartTime?: Date;
		EndTime?: Date;
		Rating?: LabelRating;
		FaultCode?: string;
		Notes?: string;
		Equipment?: string;
		CreatedAt?: Date;
	}
	export interface DescribeLabelResponseFormProperties {
		LabelGroupName: FormControl<string | null | undefined>,
		LabelGroupArn: FormControl<string | null | undefined>,
		LabelId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Rating: FormControl<LabelRating | null | undefined>,
		FaultCode: FormControl<string | null | undefined>,
		Notes: FormControl<string | null | undefined>,
		Equipment: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLabelResponseFormGroup() {
		return new FormGroup<DescribeLabelResponseFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined),
			LabelGroupArn: new FormControl<string | null | undefined>(undefined),
			LabelId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Rating: new FormControl<LabelRating | null | undefined>(undefined),
			FaultCode: new FormControl<string | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
			Equipment: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeLabelRequest {

		/** Required */
		LabelGroupName: string;

		/** Required */
		LabelId: string;
	}
	export interface DescribeLabelRequestFormProperties {

		/** Required */
		LabelGroupName: FormControl<string | null | undefined>,

		/** Required */
		LabelId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLabelRequestFormGroup() {
		return new FormGroup<DescribeLabelRequestFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LabelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLabelGroupResponse {
		LabelGroupName?: string;
		LabelGroupArn?: string;
		FaultCodes?: Array<string>;
		CreatedAt?: Date;
		UpdatedAt?: Date;
	}
	export interface DescribeLabelGroupResponseFormProperties {
		LabelGroupName: FormControl<string | null | undefined>,
		LabelGroupArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLabelGroupResponseFormGroup() {
		return new FormGroup<DescribeLabelGroupResponseFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined),
			LabelGroupArn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeLabelGroupRequest {

		/** Required */
		LabelGroupName: string;
	}
	export interface DescribeLabelGroupRequestFormProperties {

		/** Required */
		LabelGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLabelGroupRequestFormGroup() {
		return new FormGroup<DescribeLabelGroupRequestFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeModelResponse {
		ModelName?: string;
		ModelArn?: string;
		DatasetName?: string;
		DatasetArn?: string;
		Schema?: string;
		LabelsInputConfiguration?: LabelsInputConfiguration;
		TrainingDataStartTime?: Date;
		TrainingDataEndTime?: Date;
		EvaluationDataStartTime?: Date;
		EvaluationDataEndTime?: Date;
		RoleArn?: string;
		DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
		Status?: ModelStatus;
		TrainingExecutionStartTime?: Date;
		TrainingExecutionEndTime?: Date;
		FailedReason?: string;
		ModelMetrics?: string;
		LastUpdatedTime?: Date;
		CreatedAt?: Date;
		ServerSideKmsKeyId?: string;
		OffCondition?: string;
		SourceModelVersionArn?: string;
		ImportJobStartTime?: Date;
		ImportJobEndTime?: Date;
		ActiveModelVersion?: number | null;
		ActiveModelVersionArn?: string;
		ModelVersionActivatedAt?: Date;
		PreviousActiveModelVersion?: number | null;
		PreviousActiveModelVersionArn?: string;
		PreviousModelVersionActivatedAt?: Date;
	}
	export interface DescribeModelResponseFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		Schema: FormControl<string | null | undefined>,
		TrainingDataStartTime: FormControl<Date | null | undefined>,
		TrainingDataEndTime: FormControl<Date | null | undefined>,
		EvaluationDataStartTime: FormControl<Date | null | undefined>,
		EvaluationDataEndTime: FormControl<Date | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
		TrainingExecutionStartTime: FormControl<Date | null | undefined>,
		TrainingExecutionEndTime: FormControl<Date | null | undefined>,
		FailedReason: FormControl<string | null | undefined>,
		ModelMetrics: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,
		OffCondition: FormControl<string | null | undefined>,
		SourceModelVersionArn: FormControl<string | null | undefined>,
		ImportJobStartTime: FormControl<Date | null | undefined>,
		ImportJobEndTime: FormControl<Date | null | undefined>,
		ActiveModelVersion: FormControl<number | null | undefined>,
		ActiveModelVersionArn: FormControl<string | null | undefined>,
		ModelVersionActivatedAt: FormControl<Date | null | undefined>,
		PreviousActiveModelVersion: FormControl<number | null | undefined>,
		PreviousActiveModelVersionArn: FormControl<string | null | undefined>,
		PreviousModelVersionActivatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeModelResponseFormGroup() {
		return new FormGroup<DescribeModelResponseFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
			TrainingDataStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingDataEndTime: new FormControl<Date | null | undefined>(undefined),
			EvaluationDataStartTime: new FormControl<Date | null | undefined>(undefined),
			EvaluationDataEndTime: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			TrainingExecutionStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingExecutionEndTime: new FormControl<Date | null | undefined>(undefined),
			FailedReason: new FormControl<string | null | undefined>(undefined),
			ModelMetrics: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
			OffCondition: new FormControl<string | null | undefined>(undefined),
			SourceModelVersionArn: new FormControl<string | null | undefined>(undefined),
			ImportJobStartTime: new FormControl<Date | null | undefined>(undefined),
			ImportJobEndTime: new FormControl<Date | null | undefined>(undefined),
			ActiveModelVersion: new FormControl<number | null | undefined>(undefined),
			ActiveModelVersionArn: new FormControl<string | null | undefined>(undefined),
			ModelVersionActivatedAt: new FormControl<Date | null | undefined>(undefined),
			PreviousActiveModelVersion: new FormControl<number | null | undefined>(undefined),
			PreviousActiveModelVersionArn: new FormControl<string | null | undefined>(undefined),
			PreviousModelVersionActivatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeModelRequest {

		/** Required */
		ModelName: string;
	}
	export interface DescribeModelRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeModelRequestFormGroup() {
		return new FormGroup<DescribeModelRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeModelVersionResponse {
		ModelName?: string;
		ModelArn?: string;
		ModelVersion?: number | null;
		ModelVersionArn?: string;
		Status?: ModelVersionStatus;
		SourceType?: ModelVersionSourceType;
		DatasetName?: string;
		DatasetArn?: string;
		Schema?: string;

		/** Contains the configuration information for the S3 location being used to hold label data. */
		LabelsInputConfiguration?: LabelsInputConfiguration;
		TrainingDataStartTime?: Date;
		TrainingDataEndTime?: Date;
		EvaluationDataStartTime?: Date;
		EvaluationDataEndTime?: Date;
		RoleArn?: string;

		/** <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p> <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>, and the value for a 1 hour rate is <i>PT1H</i> </p> */
		DataPreProcessingConfiguration?: DataPreProcessingConfiguration;
		TrainingExecutionStartTime?: Date;
		TrainingExecutionEndTime?: Date;
		FailedReason?: string;
		ModelMetrics?: string;
		LastUpdatedTime?: Date;
		CreatedAt?: Date;
		ServerSideKmsKeyId?: string;
		OffCondition?: string;
		SourceModelVersionArn?: string;
		ImportJobStartTime?: Date;
		ImportJobEndTime?: Date;
		ImportedDataSizeInBytes?: number | null;
	}
	export interface DescribeModelVersionResponseFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		ModelVersion: FormControl<number | null | undefined>,
		ModelVersionArn: FormControl<string | null | undefined>,
		Status: FormControl<ModelVersionStatus | null | undefined>,
		SourceType: FormControl<ModelVersionSourceType | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		Schema: FormControl<string | null | undefined>,
		TrainingDataStartTime: FormControl<Date | null | undefined>,
		TrainingDataEndTime: FormControl<Date | null | undefined>,
		EvaluationDataStartTime: FormControl<Date | null | undefined>,
		EvaluationDataEndTime: FormControl<Date | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		TrainingExecutionStartTime: FormControl<Date | null | undefined>,
		TrainingExecutionEndTime: FormControl<Date | null | undefined>,
		FailedReason: FormControl<string | null | undefined>,
		ModelMetrics: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,
		OffCondition: FormControl<string | null | undefined>,
		SourceModelVersionArn: FormControl<string | null | undefined>,
		ImportJobStartTime: FormControl<Date | null | undefined>,
		ImportJobEndTime: FormControl<Date | null | undefined>,
		ImportedDataSizeInBytes: FormControl<number | null | undefined>,
	}
	export function CreateDescribeModelVersionResponseFormGroup() {
		return new FormGroup<DescribeModelVersionResponseFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<number | null | undefined>(undefined),
			ModelVersionArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelVersionStatus | null | undefined>(undefined),
			SourceType: new FormControl<ModelVersionSourceType | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
			TrainingDataStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingDataEndTime: new FormControl<Date | null | undefined>(undefined),
			EvaluationDataStartTime: new FormControl<Date | null | undefined>(undefined),
			EvaluationDataEndTime: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			TrainingExecutionStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingExecutionEndTime: new FormControl<Date | null | undefined>(undefined),
			FailedReason: new FormControl<string | null | undefined>(undefined),
			ModelMetrics: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
			OffCondition: new FormControl<string | null | undefined>(undefined),
			SourceModelVersionArn: new FormControl<string | null | undefined>(undefined),
			ImportJobStartTime: new FormControl<Date | null | undefined>(undefined),
			ImportJobEndTime: new FormControl<Date | null | undefined>(undefined),
			ImportedDataSizeInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ModelVersionStatus { IN_PROGRESS = 0, SUCCESS = 1, FAILED = 2, IMPORT_IN_PROGRESS = 3, CANCELED = 4 }

	export enum ModelVersionSourceType { TRAINING = 0, RETRAINING = 1, IMPORT = 2 }

	export interface DescribeModelVersionRequest {

		/** Required */
		ModelName: string;

		/** Required */
		ModelVersion: number;
	}
	export interface DescribeModelVersionRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,

		/** Required */
		ModelVersion: FormControl<number | null | undefined>,
	}
	export function CreateDescribeModelVersionRequestFormGroup() {
		return new FormGroup<DescribeModelVersionRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ModelVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResourcePolicyResponse {
		PolicyRevisionId?: string;
		ResourcePolicy?: string;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}
	export interface DescribeResourcePolicyResponseFormProperties {
		PolicyRevisionId: FormControl<string | null | undefined>,
		ResourcePolicy: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeResourcePolicyResponseFormGroup() {
		return new FormGroup<DescribeResourcePolicyResponseFormProperties>({
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeResourcePolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DescribeResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePolicyRequestFormGroup() {
		return new FormGroup<DescribeResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportDatasetResponse {
		DatasetName?: string;
		DatasetArn?: string;
		Status?: DatasetStatus;
		JobId?: string;
	}
	export interface ImportDatasetResponseFormProperties {
		DatasetName: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateImportDatasetResponseFormGroup() {
		return new FormGroup<ImportDatasetResponseFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportDatasetRequest {

		/** Required */
		SourceDatasetArn: string;
		DatasetName?: string;

		/** Required */
		ClientToken: string;
		ServerSideKmsKeyId?: string;
		Tags?: Array<Tag>;
	}
	export interface ImportDatasetRequestFormProperties {

		/** Required */
		SourceDatasetArn: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateImportDatasetRequestFormGroup() {
		return new FormGroup<ImportDatasetRequestFormProperties>({
			SourceDatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportModelVersionResponse {
		ModelName?: string;
		ModelArn?: string;
		ModelVersionArn?: string;
		ModelVersion?: number | null;
		Status?: ModelVersionStatus;
	}
	export interface ImportModelVersionResponseFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		ModelVersionArn: FormControl<string | null | undefined>,
		ModelVersion: FormControl<number | null | undefined>,
		Status: FormControl<ModelVersionStatus | null | undefined>,
	}
	export function CreateImportModelVersionResponseFormGroup() {
		return new FormGroup<ImportModelVersionResponseFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			ModelVersionArn: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ModelVersionStatus | null | undefined>(undefined),
		});

	}

	export interface ImportModelVersionRequest {

		/** Required */
		SourceModelVersionArn: string;
		ModelName?: string;

		/** Required */
		DatasetName: string;

		/** Contains the configuration information for the S3 location being used to hold label data. */
		LabelsInputConfiguration?: LabelsInputConfiguration;

		/** Required */
		ClientToken: string;
		RoleArn?: string;
		ServerSideKmsKeyId?: string;
		Tags?: Array<Tag>;
	}
	export interface ImportModelVersionRequestFormProperties {

		/** Required */
		SourceModelVersionArn: FormControl<string | null | undefined>,
		ModelName: FormControl<string | null | undefined>,

		/** Required */
		DatasetName: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ServerSideKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateImportModelVersionRequestFormGroup() {
		return new FormGroup<ImportModelVersionRequestFormProperties>({
			SourceModelVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ModelName: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ServerSideKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataIngestionJobsResponse {
		NextToken?: string;
		DataIngestionJobSummaries?: Array<DataIngestionJobSummary>;
	}
	export interface ListDataIngestionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataIngestionJobsResponseFormGroup() {
		return new FormGroup<ListDataIngestionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status.  */
	export interface DataIngestionJobSummary {
		JobId?: string;
		DatasetName?: string;
		DatasetArn?: string;
		IngestionInputConfiguration?: IngestionInputConfiguration;
		Status?: ModelStatus;
	}

	/** Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status.  */
	export interface DataIngestionJobSummaryFormProperties {
		JobId: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
	}
	export function CreateDataIngestionJobSummaryFormGroup() {
		return new FormGroup<DataIngestionJobSummaryFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
		});

	}

	export interface ListDataIngestionJobsRequest {
		DatasetName?: string;
		NextToken?: string;
		MaxResults?: number | null;
		Status?: ModelStatus;
	}
	export interface ListDataIngestionJobsRequestFormProperties {
		DatasetName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
	}
	export function CreateListDataIngestionJobsRequestFormGroup() {
		return new FormGroup<ListDataIngestionJobsRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsResponse {
		NextToken?: string;
		DatasetSummaries?: Array<DatasetSummary>;
	}
	export interface ListDatasetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the specific data set, including name, ARN, and status.  */
	export interface DatasetSummary {
		DatasetName?: string;
		DatasetArn?: string;
		Status?: DatasetStatus;
		CreatedAt?: Date;
	}

	/** Contains information about the specific data set, including name, ARN, and status.  */
	export interface DatasetSummaryFormProperties {
		DatasetName: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetSummaryFormGroup() {
		return new FormGroup<DatasetSummaryFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		DatasetNameBeginsWith?: string;
	}
	export interface ListDatasetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		DatasetNameBeginsWith: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			DatasetNameBeginsWith: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInferenceEventsResponse {
		NextToken?: string;
		InferenceEventSummaries?: Array<InferenceEventSummary>;
	}
	export interface ListInferenceEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInferenceEventsResponseFormGroup() {
		return new FormGroup<ListInferenceEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the specific inference event, including start and end time, diagnostics information, event duration and so on. */
	export interface InferenceEventSummary {
		InferenceSchedulerArn?: string;
		InferenceSchedulerName?: string;
		EventStartTime?: Date;
		EventEndTime?: Date;
		Diagnostics?: string;
		EventDurationInSeconds?: number | null;
	}

	/** Contains information about the specific inference event, including start and end time, diagnostics information, event duration and so on. */
	export interface InferenceEventSummaryFormProperties {
		InferenceSchedulerArn: FormControl<string | null | undefined>,
		InferenceSchedulerName: FormControl<string | null | undefined>,
		EventStartTime: FormControl<Date | null | undefined>,
		EventEndTime: FormControl<Date | null | undefined>,
		Diagnostics: FormControl<string | null | undefined>,
		EventDurationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateInferenceEventSummaryFormGroup() {
		return new FormGroup<InferenceEventSummaryFormProperties>({
			InferenceSchedulerArn: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined),
			EventStartTime: new FormControl<Date | null | undefined>(undefined),
			EventEndTime: new FormControl<Date | null | undefined>(undefined),
			Diagnostics: new FormControl<string | null | undefined>(undefined),
			EventDurationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListInferenceEventsRequest {
		NextToken?: string;
		MaxResults?: number | null;

		/** Required */
		InferenceSchedulerName: string;

		/** Required */
		IntervalStartTime: Date;

		/** Required */
		IntervalEndTime: Date;
	}
	export interface ListInferenceEventsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		InferenceSchedulerName: FormControl<string | null | undefined>,

		/** Required */
		IntervalStartTime: FormControl<Date | null | undefined>,

		/** Required */
		IntervalEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateListInferenceEventsRequestFormGroup() {
		return new FormGroup<ListInferenceEventsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IntervalStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			IntervalEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListInferenceExecutionsResponse {
		NextToken?: string;
		InferenceExecutionSummaries?: Array<InferenceExecutionSummary>;
	}
	export interface ListInferenceExecutionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInferenceExecutionsResponseFormGroup() {
		return new FormGroup<ListInferenceExecutionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on.  */
	export interface InferenceExecutionSummary {
		ModelName?: string;
		ModelArn?: string;
		InferenceSchedulerName?: string;
		InferenceSchedulerArn?: string;
		ScheduledStartTime?: Date;
		DataStartTime?: Date;
		DataEndTime?: Date;
		DataInputConfiguration?: InferenceInputConfiguration;
		DataOutputConfiguration?: InferenceOutputConfiguration;
		CustomerResultObject?: S3Object;
		Status?: InferenceExecutionStatus;
		FailedReason?: string;
	}

	/** Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on.  */
	export interface InferenceExecutionSummaryFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		InferenceSchedulerName: FormControl<string | null | undefined>,
		InferenceSchedulerArn: FormControl<string | null | undefined>,
		ScheduledStartTime: FormControl<Date | null | undefined>,
		DataStartTime: FormControl<Date | null | undefined>,
		DataEndTime: FormControl<Date | null | undefined>,
		Status: FormControl<InferenceExecutionStatus | null | undefined>,
		FailedReason: FormControl<string | null | undefined>,
	}
	export function CreateInferenceExecutionSummaryFormGroup() {
		return new FormGroup<InferenceExecutionSummaryFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerArn: new FormControl<string | null | undefined>(undefined),
			ScheduledStartTime: new FormControl<Date | null | undefined>(undefined),
			DataStartTime: new FormControl<Date | null | undefined>(undefined),
			DataEndTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<InferenceExecutionStatus | null | undefined>(undefined),
			FailedReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InferenceExecutionStatus { IN_PROGRESS = 0, SUCCESS = 1, FAILED = 2 }

	export interface ListInferenceExecutionsRequest {
		NextToken?: string;
		MaxResults?: number | null;

		/** Required */
		InferenceSchedulerName: string;
		DataStartTimeAfter?: Date;
		DataEndTimeBefore?: Date;
		Status?: InferenceExecutionStatus;
	}
	export interface ListInferenceExecutionsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		InferenceSchedulerName: FormControl<string | null | undefined>,
		DataStartTimeAfter: FormControl<Date | null | undefined>,
		DataEndTimeBefore: FormControl<Date | null | undefined>,
		Status: FormControl<InferenceExecutionStatus | null | undefined>,
	}
	export function CreateListInferenceExecutionsRequestFormGroup() {
		return new FormGroup<ListInferenceExecutionsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataStartTimeAfter: new FormControl<Date | null | undefined>(undefined),
			DataEndTimeBefore: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<InferenceExecutionStatus | null | undefined>(undefined),
		});

	}

	export interface ListInferenceSchedulersResponse {
		NextToken?: string;
		InferenceSchedulerSummaries?: Array<InferenceSchedulerSummary>;
	}
	export interface ListInferenceSchedulersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInferenceSchedulersResponseFormGroup() {
		return new FormGroup<ListInferenceSchedulersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on.  */
	export interface InferenceSchedulerSummary {
		ModelName?: string;
		ModelArn?: string;
		InferenceSchedulerName?: string;
		InferenceSchedulerArn?: string;
		Status?: InferenceSchedulerStatus;
		DataDelayOffsetInMinutes?: number | null;
		DataUploadFrequency?: DataUploadFrequency;
		LatestInferenceResult?: LatestInferenceResult;
	}

	/** Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on.  */
	export interface InferenceSchedulerSummaryFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		InferenceSchedulerName: FormControl<string | null | undefined>,
		InferenceSchedulerArn: FormControl<string | null | undefined>,
		Status: FormControl<InferenceSchedulerStatus | null | undefined>,
		DataDelayOffsetInMinutes: FormControl<number | null | undefined>,
		DataUploadFrequency: FormControl<DataUploadFrequency | null | undefined>,
		LatestInferenceResult: FormControl<LatestInferenceResult | null | undefined>,
	}
	export function CreateInferenceSchedulerSummaryFormGroup() {
		return new FormGroup<InferenceSchedulerSummaryFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<InferenceSchedulerStatus | null | undefined>(undefined),
			DataDelayOffsetInMinutes: new FormControl<number | null | undefined>(undefined),
			DataUploadFrequency: new FormControl<DataUploadFrequency | null | undefined>(undefined),
			LatestInferenceResult: new FormControl<LatestInferenceResult | null | undefined>(undefined),
		});

	}

	export interface ListInferenceSchedulersRequest {
		NextToken?: string;
		MaxResults?: number | null;
		InferenceSchedulerNameBeginsWith?: string;
		ModelName?: string;
		Status?: InferenceSchedulerStatus;
	}
	export interface ListInferenceSchedulersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		InferenceSchedulerNameBeginsWith: FormControl<string | null | undefined>,
		ModelName: FormControl<string | null | undefined>,
		Status: FormControl<InferenceSchedulerStatus | null | undefined>,
	}
	export function CreateListInferenceSchedulersRequestFormGroup() {
		return new FormGroup<ListInferenceSchedulersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			InferenceSchedulerNameBeginsWith: new FormControl<string | null | undefined>(undefined),
			ModelName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<InferenceSchedulerStatus | null | undefined>(undefined),
		});

	}

	export interface ListLabelGroupsResponse {
		NextToken?: string;
		LabelGroupSummaries?: Array<LabelGroupSummary>;
	}
	export interface ListLabelGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLabelGroupsResponseFormGroup() {
		return new FormGroup<ListLabelGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains information about the label group.  */
	export interface LabelGroupSummary {
		LabelGroupName?: string;
		LabelGroupArn?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;
	}

	/**  Contains information about the label group.  */
	export interface LabelGroupSummaryFormProperties {
		LabelGroupName: FormControl<string | null | undefined>,
		LabelGroupArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateLabelGroupSummaryFormGroup() {
		return new FormGroup<LabelGroupSummaryFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined),
			LabelGroupArn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListLabelGroupsRequest {
		LabelGroupNameBeginsWith?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListLabelGroupsRequestFormProperties {
		LabelGroupNameBeginsWith: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListLabelGroupsRequestFormGroup() {
		return new FormGroup<ListLabelGroupsRequestFormProperties>({
			LabelGroupNameBeginsWith: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLabelsResponse {
		NextToken?: string;
		LabelSummaries?: Array<LabelSummary>;
	}
	export interface ListLabelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLabelsResponseFormGroup() {
		return new FormGroup<ListLabelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the label.  */
	export interface LabelSummary {
		LabelGroupName?: string;
		LabelId?: string;
		LabelGroupArn?: string;
		StartTime?: Date;
		EndTime?: Date;
		Rating?: LabelRating;
		FaultCode?: string;
		Equipment?: string;
		CreatedAt?: Date;
	}

	/**  Information about the label.  */
	export interface LabelSummaryFormProperties {
		LabelGroupName: FormControl<string | null | undefined>,
		LabelId: FormControl<string | null | undefined>,
		LabelGroupArn: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Rating: FormControl<LabelRating | null | undefined>,
		FaultCode: FormControl<string | null | undefined>,
		Equipment: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateLabelSummaryFormGroup() {
		return new FormGroup<LabelSummaryFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined),
			LabelId: new FormControl<string | null | undefined>(undefined),
			LabelGroupArn: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Rating: new FormControl<LabelRating | null | undefined>(undefined),
			FaultCode: new FormControl<string | null | undefined>(undefined),
			Equipment: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListLabelsRequest {

		/** Required */
		LabelGroupName: string;
		IntervalStartTime?: Date;
		IntervalEndTime?: Date;
		FaultCode?: string;
		Equipment?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListLabelsRequestFormProperties {

		/** Required */
		LabelGroupName: FormControl<string | null | undefined>,
		IntervalStartTime: FormControl<Date | null | undefined>,
		IntervalEndTime: FormControl<Date | null | undefined>,
		FaultCode: FormControl<string | null | undefined>,
		Equipment: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListLabelsRequestFormGroup() {
		return new FormGroup<ListLabelsRequestFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IntervalStartTime: new FormControl<Date | null | undefined>(undefined),
			IntervalEndTime: new FormControl<Date | null | undefined>(undefined),
			FaultCode: new FormControl<string | null | undefined>(undefined),
			Equipment: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListModelVersionsResponse {
		NextToken?: string;
		ModelVersionSummaries?: Array<ModelVersionSummary>;
	}
	export interface ListModelVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelVersionsResponseFormGroup() {
		return new FormGroup<ListModelVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the specific model version. */
	export interface ModelVersionSummary {
		ModelName?: string;
		ModelArn?: string;
		ModelVersion?: number | null;
		ModelVersionArn?: string;
		CreatedAt?: Date;
		Status?: ModelVersionStatus;
		SourceType?: ModelVersionSourceType;
	}

	/** Contains information about the specific model version. */
	export interface ModelVersionSummaryFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		ModelVersion: FormControl<number | null | undefined>,
		ModelVersionArn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<ModelVersionStatus | null | undefined>,
		SourceType: FormControl<ModelVersionSourceType | null | undefined>,
	}
	export function CreateModelVersionSummaryFormGroup() {
		return new FormGroup<ModelVersionSummaryFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<number | null | undefined>(undefined),
			ModelVersionArn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ModelVersionStatus | null | undefined>(undefined),
			SourceType: new FormControl<ModelVersionSourceType | null | undefined>(undefined),
		});

	}

	export interface ListModelVersionsRequest {

		/** Required */
		ModelName: string;
		NextToken?: string;
		MaxResults?: number | null;
		Status?: ModelVersionStatus;
		SourceType?: ModelVersionSourceType;
		CreatedAtEndTime?: Date;
		CreatedAtStartTime?: Date;
		MaxModelVersion?: number | null;
		MinModelVersion?: number | null;
	}
	export interface ListModelVersionsRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		Status: FormControl<ModelVersionStatus | null | undefined>,
		SourceType: FormControl<ModelVersionSourceType | null | undefined>,
		CreatedAtEndTime: FormControl<Date | null | undefined>,
		CreatedAtStartTime: FormControl<Date | null | undefined>,
		MaxModelVersion: FormControl<number | null | undefined>,
		MinModelVersion: FormControl<number | null | undefined>,
	}
	export function CreateListModelVersionsRequestFormGroup() {
		return new FormGroup<ListModelVersionsRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ModelVersionStatus | null | undefined>(undefined),
			SourceType: new FormControl<ModelVersionSourceType | null | undefined>(undefined),
			CreatedAtEndTime: new FormControl<Date | null | undefined>(undefined),
			CreatedAtStartTime: new FormControl<Date | null | undefined>(undefined),
			MaxModelVersion: new FormControl<number | null | undefined>(undefined),
			MinModelVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListModelsResponse {
		NextToken?: string;
		ModelSummaries?: Array<ModelSummary>;
	}
	export interface ListModelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelsResponseFormGroup() {
		return new FormGroup<ListModelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the specified ML model, including dataset and model names and ARNs, as well as status.  */
	export interface ModelSummary {
		ModelName?: string;
		ModelArn?: string;
		DatasetName?: string;
		DatasetArn?: string;
		Status?: ModelStatus;
		CreatedAt?: Date;
		ActiveModelVersion?: number | null;
		ActiveModelVersionArn?: string;
	}

	/** Provides information about the specified ML model, including dataset and model names and ARNs, as well as status.  */
	export interface ModelSummaryFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		DatasetArn: FormControl<string | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		ActiveModelVersion: FormControl<number | null | undefined>,
		ActiveModelVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateModelSummaryFormGroup() {
		return new FormGroup<ModelSummaryFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			ActiveModelVersion: new FormControl<number | null | undefined>(undefined),
			ActiveModelVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListModelsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Status?: ModelStatus;
		ModelNameBeginsWith?: string;
		DatasetNameBeginsWith?: string;
	}
	export interface ListModelsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
		ModelNameBeginsWith: FormControl<string | null | undefined>,
		DatasetNameBeginsWith: FormControl<string | null | undefined>,
	}
	export function CreateListModelsRequestFormGroup() {
		return new FormGroup<ListModelsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			ModelNameBeginsWith: new FormControl<string | null | undefined>(undefined),
			DatasetNameBeginsWith: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSensorStatisticsResponse {
		SensorStatisticsSummaries?: Array<SensorStatisticsSummary>;
		NextToken?: string;
	}
	export interface ListSensorStatisticsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSensorStatisticsResponseFormGroup() {
		return new FormGroup<ListSensorStatisticsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Summary of ingestion statistics like whether data exists, number of missing values, number of invalid values and so on related to the particular sensor.  */
	export interface SensorStatisticsSummary {
		ComponentName?: string;
		SensorName?: string;
		DataExists?: boolean | null;
		MissingValues?: CountPercent;
		InvalidValues?: CountPercent;
		InvalidDateEntries?: CountPercent;
		DuplicateTimestamps?: CountPercent;
		CategoricalValues?: CategoricalValues;
		MultipleOperatingModes?: MultipleOperatingModes;
		LargeTimestampGaps?: LargeTimestampGaps;
		MonotonicValues?: MonotonicValues;
		DataStartTime?: Date;
		DataEndTime?: Date;
	}

	/**  Summary of ingestion statistics like whether data exists, number of missing values, number of invalid values and so on related to the particular sensor.  */
	export interface SensorStatisticsSummaryFormProperties {
		ComponentName: FormControl<string | null | undefined>,
		SensorName: FormControl<string | null | undefined>,
		DataExists: FormControl<boolean | null | undefined>,
		DataStartTime: FormControl<Date | null | undefined>,
		DataEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateSensorStatisticsSummaryFormGroup() {
		return new FormGroup<SensorStatisticsSummaryFormProperties>({
			ComponentName: new FormControl<string | null | undefined>(undefined),
			SensorName: new FormControl<string | null | undefined>(undefined),
			DataExists: new FormControl<boolean | null | undefined>(undefined),
			DataStartTime: new FormControl<Date | null | undefined>(undefined),
			DataEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Entity that comprises information of count and percentage.  */
	export interface CountPercent {

		/** Required */
		Count: number;

		/** Required */
		Percentage: number;
	}

	/**  Entity that comprises information of count and percentage.  */
	export interface CountPercentFormProperties {

		/** Required */
		Count: FormControl<number | null | undefined>,

		/** Required */
		Percentage: FormControl<number | null | undefined>,
	}
	export function CreateCountPercentFormGroup() {
		return new FormGroup<CountPercentFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Entity that comprises information on categorical values in data.  */
	export interface CategoricalValues {

		/** Required */
		Status: StatisticalIssueStatus;
		NumberOfCategory?: number | null;
	}

	/**  Entity that comprises information on categorical values in data.  */
	export interface CategoricalValuesFormProperties {

		/** Required */
		Status: FormControl<StatisticalIssueStatus | null | undefined>,
		NumberOfCategory: FormControl<number | null | undefined>,
	}
	export function CreateCategoricalValuesFormGroup() {
		return new FormGroup<CategoricalValuesFormProperties>({
			Status: new FormControl<StatisticalIssueStatus | null | undefined>(undefined, [Validators.required]),
			NumberOfCategory: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StatisticalIssueStatus { POTENTIAL_ISSUE_DETECTED = 0, NO_ISSUE_DETECTED = 1 }


	/**  Entity that comprises information on operating modes in data.  */
	export interface MultipleOperatingModes {

		/** Required */
		Status: StatisticalIssueStatus;
	}

	/**  Entity that comprises information on operating modes in data.  */
	export interface MultipleOperatingModesFormProperties {

		/** Required */
		Status: FormControl<StatisticalIssueStatus | null | undefined>,
	}
	export function CreateMultipleOperatingModesFormGroup() {
		return new FormGroup<MultipleOperatingModesFormProperties>({
			Status: new FormControl<StatisticalIssueStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Entity that comprises information on large gaps between consecutive timestamps in data.  */
	export interface LargeTimestampGaps {

		/** Required */
		Status: StatisticalIssueStatus;
		NumberOfLargeTimestampGaps?: number | null;
		MaxTimestampGapInDays?: number | null;
	}

	/**  Entity that comprises information on large gaps between consecutive timestamps in data.  */
	export interface LargeTimestampGapsFormProperties {

		/** Required */
		Status: FormControl<StatisticalIssueStatus | null | undefined>,
		NumberOfLargeTimestampGaps: FormControl<number | null | undefined>,
		MaxTimestampGapInDays: FormControl<number | null | undefined>,
	}
	export function CreateLargeTimestampGapsFormGroup() {
		return new FormGroup<LargeTimestampGapsFormProperties>({
			Status: new FormControl<StatisticalIssueStatus | null | undefined>(undefined, [Validators.required]),
			NumberOfLargeTimestampGaps: new FormControl<number | null | undefined>(undefined),
			MaxTimestampGapInDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Entity that comprises information on monotonic values in the data.  */
	export interface MonotonicValues {

		/** Required */
		Status: StatisticalIssueStatus;
		Monotonicity?: Monotonicity;
	}

	/**  Entity that comprises information on monotonic values in the data.  */
	export interface MonotonicValuesFormProperties {

		/** Required */
		Status: FormControl<StatisticalIssueStatus | null | undefined>,
		Monotonicity: FormControl<Monotonicity | null | undefined>,
	}
	export function CreateMonotonicValuesFormGroup() {
		return new FormGroup<MonotonicValuesFormProperties>({
			Status: new FormControl<StatisticalIssueStatus | null | undefined>(undefined, [Validators.required]),
			Monotonicity: new FormControl<Monotonicity | null | undefined>(undefined),
		});

	}

	export enum Monotonicity { DECREASING = 0, INCREASING = 1, STATIC = 2 }

	export interface ListSensorStatisticsRequest {

		/** Required */
		DatasetName: string;
		IngestionJobId?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSensorStatisticsRequestFormProperties {

		/** Required */
		DatasetName: FormControl<string | null | undefined>,
		IngestionJobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSensorStatisticsRequestFormGroup() {
		return new FormGroup<ListSensorStatisticsRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IngestionJobId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface PutResourcePolicyResponse {
		ResourceArn?: string;
		PolicyRevisionId?: string;
	}
	export interface PutResourcePolicyResponseFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		ResourcePolicy: string;
		PolicyRevisionId?: string;

		/** Required */
		ClientToken: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		ResourcePolicy: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDataIngestionJobResponse {
		JobId?: string;
		Status?: ModelStatus;
	}
	export interface StartDataIngestionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
	}
	export function CreateStartDataIngestionJobResponseFormGroup() {
		return new FormGroup<StartDataIngestionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
		});

	}

	export interface StartDataIngestionJobRequest {

		/** Required */
		DatasetName: string;

		/** Required */
		IngestionInputConfiguration: IngestionInputConfiguration;

		/** Required */
		RoleArn: string;

		/** Required */
		ClientToken: string;
	}
	export interface StartDataIngestionJobRequestFormProperties {

		/** Required */
		DatasetName: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartDataIngestionJobRequestFormGroup() {
		return new FormGroup<StartDataIngestionJobRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartInferenceSchedulerResponse {
		ModelArn?: string;
		ModelName?: string;
		InferenceSchedulerName?: string;
		InferenceSchedulerArn?: string;
		Status?: InferenceSchedulerStatus;
	}
	export interface StartInferenceSchedulerResponseFormProperties {
		ModelArn: FormControl<string | null | undefined>,
		ModelName: FormControl<string | null | undefined>,
		InferenceSchedulerName: FormControl<string | null | undefined>,
		InferenceSchedulerArn: FormControl<string | null | undefined>,
		Status: FormControl<InferenceSchedulerStatus | null | undefined>,
	}
	export function CreateStartInferenceSchedulerResponseFormGroup() {
		return new FormGroup<StartInferenceSchedulerResponseFormProperties>({
			ModelArn: new FormControl<string | null | undefined>(undefined),
			ModelName: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<InferenceSchedulerStatus | null | undefined>(undefined),
		});

	}

	export interface StartInferenceSchedulerRequest {

		/** Required */
		InferenceSchedulerName: string;
	}
	export interface StartInferenceSchedulerRequestFormProperties {

		/** Required */
		InferenceSchedulerName: FormControl<string | null | undefined>,
	}
	export function CreateStartInferenceSchedulerRequestFormGroup() {
		return new FormGroup<StartInferenceSchedulerRequestFormProperties>({
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopInferenceSchedulerResponse {
		ModelArn?: string;
		ModelName?: string;
		InferenceSchedulerName?: string;
		InferenceSchedulerArn?: string;
		Status?: InferenceSchedulerStatus;
	}
	export interface StopInferenceSchedulerResponseFormProperties {
		ModelArn: FormControl<string | null | undefined>,
		ModelName: FormControl<string | null | undefined>,
		InferenceSchedulerName: FormControl<string | null | undefined>,
		InferenceSchedulerArn: FormControl<string | null | undefined>,
		Status: FormControl<InferenceSchedulerStatus | null | undefined>,
	}
	export function CreateStopInferenceSchedulerResponseFormGroup() {
		return new FormGroup<StopInferenceSchedulerResponseFormProperties>({
			ModelArn: new FormControl<string | null | undefined>(undefined),
			ModelName: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined),
			InferenceSchedulerArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<InferenceSchedulerStatus | null | undefined>(undefined),
		});

	}

	export interface StopInferenceSchedulerRequest {

		/** Required */
		InferenceSchedulerName: string;
	}
	export interface StopInferenceSchedulerRequestFormProperties {

		/** Required */
		InferenceSchedulerName: FormControl<string | null | undefined>,
	}
	export function CreateStopInferenceSchedulerRequestFormGroup() {
		return new FormGroup<StopInferenceSchedulerRequestFormProperties>({
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateActiveModelVersionResponse {
		ModelName?: string;
		ModelArn?: string;
		CurrentActiveVersion?: number | null;
		PreviousActiveVersion?: number | null;
		CurrentActiveVersionArn?: string;
		PreviousActiveVersionArn?: string;
	}
	export interface UpdateActiveModelVersionResponseFormProperties {
		ModelName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		CurrentActiveVersion: FormControl<number | null | undefined>,
		PreviousActiveVersion: FormControl<number | null | undefined>,
		CurrentActiveVersionArn: FormControl<string | null | undefined>,
		PreviousActiveVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateActiveModelVersionResponseFormGroup() {
		return new FormGroup<UpdateActiveModelVersionResponseFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			CurrentActiveVersion: new FormControl<number | null | undefined>(undefined),
			PreviousActiveVersion: new FormControl<number | null | undefined>(undefined),
			CurrentActiveVersionArn: new FormControl<string | null | undefined>(undefined),
			PreviousActiveVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateActiveModelVersionRequest {

		/** Required */
		ModelName: string;

		/** Required */
		ModelVersion: number;
	}
	export interface UpdateActiveModelVersionRequestFormProperties {

		/** Required */
		ModelName: FormControl<string | null | undefined>,

		/** Required */
		ModelVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateActiveModelVersionRequestFormGroup() {
		return new FormGroup<UpdateActiveModelVersionRequestFormProperties>({
			ModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ModelVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInferenceSchedulerRequest {

		/** Required */
		InferenceSchedulerName: string;
		DataDelayOffsetInMinutes?: number | null;
		DataUploadFrequency?: DataUploadFrequency;
		DataInputConfiguration?: InferenceInputConfiguration;
		DataOutputConfiguration?: InferenceOutputConfiguration;
		RoleArn?: string;
	}
	export interface UpdateInferenceSchedulerRequestFormProperties {

		/** Required */
		InferenceSchedulerName: FormControl<string | null | undefined>,
		DataDelayOffsetInMinutes: FormControl<number | null | undefined>,
		DataUploadFrequency: FormControl<DataUploadFrequency | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInferenceSchedulerRequestFormGroup() {
		return new FormGroup<UpdateInferenceSchedulerRequestFormProperties>({
			InferenceSchedulerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataDelayOffsetInMinutes: new FormControl<number | null | undefined>(undefined),
			DataUploadFrequency: new FormControl<DataUploadFrequency | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLabelGroupRequest {

		/** Required */
		LabelGroupName: string;
		FaultCodes?: Array<string>;
	}
	export interface UpdateLabelGroupRequestFormProperties {

		/** Required */
		LabelGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLabelGroupRequestFormGroup() {
		return new FormGroup<UpdateLabelGroupRequestFormProperties>({
			LabelGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IngestionJobStatus { IN_PROGRESS = 0, SUCCESS = 1, FAILED = 2, IMPORT_IN_PROGRESS = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. For example, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetRequest): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler
		 * @return {CreateInferenceSchedulerResponse} Success
		 */
		CreateInferenceScheduler(requestBody: CreateInferenceSchedulerRequest): Observable<CreateInferenceSchedulerResponse> {
			return this.http.post<CreateInferenceSchedulerResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a label for an event.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel
		 * @return {CreateLabelResponse} Success
		 */
		CreateLabel(requestBody: CreateLabelRequest): Observable<CreateLabelResponse> {
			return this.http.post<CreateLabelResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a group of labels.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup
		 * @return {CreateLabelGroupResponse} Success
		 */
		CreateLabelGroup(requestBody: CreateLabelGroupRequest): Observable<CreateLabelGroupResponse> {
			return this.http.post<CreateLabelGroupResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel
		 * @return {CreateModelResponse} Success
		 */
		CreateModel(requestBody: CreateModelRequest): Observable<CreateModelResponse> {
			return this.http.post<CreateModelResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset
		 * @return {void} Success
		 */
		DeleteDataset(requestBody: DeleteDatasetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an inference scheduler that has been set up. Already processed output results are not affected.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler
		 * @return {void} Success
		 */
		DeleteInferenceScheduler(requestBody: DeleteInferenceSchedulerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a label.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel
		 * @return {void} Success
		 */
		DeleteLabel(requestBody: DeleteLabelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a group of labels.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup
		 * @return {void} Success
		 */
		DeleteLabelGroup(requestBody: DeleteLabelGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel
		 * @return {void} Success
		 */
		DeleteModel(requestBody: DeleteModelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the resource policy attached to the resource.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteResourcePolicy
		 * @return {void} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob
		 * @return {DescribeDataIngestionJobResponse} Success
		 */
		DescribeDataIngestionJob(requestBody: DescribeDataIngestionJobRequest): Observable<DescribeDataIngestionJobResponse> {
			return this.http.post<DescribeDataIngestionJobResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a JSON description of the data in each time series dataset, including names, column names, and data types.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(requestBody: DescribeDatasetRequest): Observable<DescribeDatasetResponse> {
			return this.http.post<DescribeDatasetResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies information about the inference scheduler being used, including name, model, status, and associated metadata
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler
		 * @return {DescribeInferenceSchedulerResponse} Success
		 */
		DescribeInferenceScheduler(requestBody: DescribeInferenceSchedulerRequest): Observable<DescribeInferenceSchedulerResponse> {
			return this.http.post<DescribeInferenceSchedulerResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the name of the label.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel
		 * @return {DescribeLabelResponse} Success
		 */
		DescribeLabel(requestBody: DescribeLabelRequest): Observable<DescribeLabelResponse> {
			return this.http.post<DescribeLabelResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the label group.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup
		 * @return {DescribeLabelGroupResponse} Success
		 */
		DescribeLabelGroup(requestBody: DescribeLabelGroupRequest): Observable<DescribeLabelGroupResponse> {
			return this.http.post<DescribeLabelGroupResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel
		 * @return {DescribeModelResponse} Success
		 */
		DescribeModel(requestBody: DescribeModelRequest): Observable<DescribeModelResponse> {
			return this.http.post<DescribeModelResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a specific machine learning model version.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModelVersion
		 * @return {DescribeModelVersionResponse} Success
		 */
		DescribeModelVersion(requestBody: DescribeModelVersionRequest): Observable<DescribeModelVersionResponse> {
			return this.http.post<DescribeModelVersionResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details of a resource policy attached to a resource.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeResourcePolicy
		 * @return {DescribeResourcePolicyResponse} Success
		 */
		DescribeResourcePolicy(requestBody: DescribeResourcePolicyRequest): Observable<DescribeResourcePolicyResponse> {
			return this.http.post<DescribeResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports a dataset.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ImportDataset
		 * @return {ImportDatasetResponse} Success
		 */
		ImportDataset(requestBody: ImportDatasetRequest): Observable<ImportDatasetResponse> {
			return this.http.post<ImportDatasetResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ImportDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports a model that has been trained successfully.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ImportModelVersion
		 * @return {ImportModelVersionResponse} Success
		 */
		ImportModelVersion(requestBody: ImportModelVersionRequest): Observable<ImportModelVersionResponse> {
			return this.http.post<ImportModelVersionResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ImportModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataIngestionJobsResponse} Success
		 */
		ListDataIngestionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataIngestionJobsRequest): Observable<ListDataIngestionJobsResponse> {
			return this.http.post<ListDataIngestionJobsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all datasets currently available in your account, filtering on the dataset name.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetsRequest): Observable<ListDatasetsResponse> {
			return this.http.post<ListDatasetsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all inference events that have been found for the specified inference scheduler.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInferenceEventsResponse} Success
		 */
		ListInferenceEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInferenceEventsRequest): Observable<ListInferenceEventsResponse> {
			return this.http.post<ListInferenceEventsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all inference executions that have been performed by the specified inference scheduler.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInferenceExecutionsResponse} Success
		 */
		ListInferenceExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInferenceExecutionsRequest): Observable<ListInferenceExecutionsResponse> {
			return this.http.post<ListInferenceExecutionsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all inference schedulers currently available for your account.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInferenceSchedulersResponse} Success
		 */
		ListInferenceSchedulers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInferenceSchedulersRequest): Observable<ListInferenceSchedulersResponse> {
			return this.http.post<ListInferenceSchedulersResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the label groups.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLabelGroupsResponse} Success
		 */
		ListLabelGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLabelGroupsRequest): Observable<ListLabelGroupsResponse> {
			return this.http.post<ListLabelGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of labels.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLabelsResponse} Success
		 */
		ListLabels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLabelsRequest): Observable<ListLabelsResponse> {
			return this.http.post<ListLabelsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a list of all model versions for a given model, including the model version, model version ARN, and status. To list a subset of versions, use the <code>MaxModelVersion</code> and <code>MinModelVersion</code> fields.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModelVersions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListModelVersionsResponse} Success
		 */
		ListModelVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListModelVersionsRequest): Observable<ListModelVersionsResponse> {
			return this.http.post<ListModelVersionsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModelVersions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a list of all models in the account, including model name and ARN, dataset, and status.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListModelsResponse} Success
		 */
		ListModels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListModelsRequest): Observable<ListModelsResponse> {
			return this.http.post<ListModelsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSensorStatisticsResponse} Success
		 */
		ListSensorStatistics(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSensorStatisticsRequest): Observable<ListSensorStatisticsResponse> {
			return this.http.post<ListSensorStatisticsResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the tags for a specified resource, including key and value.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a resource control policy for a given resource.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob
		 * @return {StartDataIngestionJobResponse} Success
		 */
		StartDataIngestionJob(requestBody: StartDataIngestionJobRequest): Observable<StartDataIngestionJobResponse> {
			return this.http.post<StartDataIngestionJobResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an inference scheduler.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler
		 * @return {StartInferenceSchedulerResponse} Success
		 */
		StartInferenceScheduler(requestBody: StartInferenceSchedulerRequest): Observable<StartInferenceSchedulerResponse> {
			return this.http.post<StartInferenceSchedulerResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops an inference scheduler.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler
		 * @return {StopInferenceSchedulerResponse} Success
		 */
		StopInferenceScheduler(requestBody: StopInferenceSchedulerRequest): Observable<StopInferenceSchedulerResponse> {
			return this.http.post<StopInferenceSchedulerResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a specific tag from a given resource. The tag is specified by its key.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the active model version for a given machine learning model.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateActiveModelVersion
		 * @return {UpdateActiveModelVersionResponse} Success
		 */
		UpdateActiveModelVersion(requestBody: UpdateActiveModelVersionRequest): Observable<UpdateActiveModelVersionResponse> {
			return this.http.post<UpdateActiveModelVersionResponse>(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateActiveModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an inference scheduler.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler
		 * @return {void} Success
		 */
		UpdateInferenceScheduler(requestBody: UpdateInferenceSchedulerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the label group.
		 * Post #X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup
		 * @return {void} Success
		 */
		UpdateLabelGroup(requestBody: UpdateLabelGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum CreateDatasetX_Amz_Target { 'AWSLookoutEquipmentFrontendService.CreateDataset' = 0 }

	export enum CreateInferenceSchedulerX_Amz_Target { 'AWSLookoutEquipmentFrontendService.CreateInferenceScheduler' = 0 }

	export enum CreateLabelX_Amz_Target { 'AWSLookoutEquipmentFrontendService.CreateLabel' = 0 }

	export enum CreateLabelGroupX_Amz_Target { 'AWSLookoutEquipmentFrontendService.CreateLabelGroup' = 0 }

	export enum CreateModelX_Amz_Target { 'AWSLookoutEquipmentFrontendService.CreateModel' = 0 }

	export enum DeleteDatasetX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DeleteDataset' = 0 }

	export enum DeleteInferenceSchedulerX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler' = 0 }

	export enum DeleteLabelX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DeleteLabel' = 0 }

	export enum DeleteLabelGroupX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DeleteLabelGroup' = 0 }

	export enum DeleteModelX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DeleteModel' = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DeleteResourcePolicy' = 0 }

	export enum DescribeDataIngestionJobX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob' = 0 }

	export enum DescribeDatasetX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DescribeDataset' = 0 }

	export enum DescribeInferenceSchedulerX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler' = 0 }

	export enum DescribeLabelX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DescribeLabel' = 0 }

	export enum DescribeLabelGroupX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DescribeLabelGroup' = 0 }

	export enum DescribeModelX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DescribeModel' = 0 }

	export enum DescribeModelVersionX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DescribeModelVersion' = 0 }

	export enum DescribeResourcePolicyX_Amz_Target { 'AWSLookoutEquipmentFrontendService.DescribeResourcePolicy' = 0 }

	export enum ImportDatasetX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ImportDataset' = 0 }

	export enum ImportModelVersionX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ImportModelVersion' = 0 }

	export enum ListDataIngestionJobsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListDataIngestionJobs' = 0 }

	export enum ListDatasetsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListDatasets' = 0 }

	export enum ListInferenceEventsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListInferenceEvents' = 0 }

	export enum ListInferenceExecutionsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListInferenceExecutions' = 0 }

	export enum ListInferenceSchedulersX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListInferenceSchedulers' = 0 }

	export enum ListLabelGroupsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListLabelGroups' = 0 }

	export enum ListLabelsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListLabels' = 0 }

	export enum ListModelVersionsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListModelVersions' = 0 }

	export enum ListModelsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListModels' = 0 }

	export enum ListSensorStatisticsX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListSensorStatistics' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSLookoutEquipmentFrontendService.ListTagsForResource' = 0 }

	export enum PutResourcePolicyX_Amz_Target { 'AWSLookoutEquipmentFrontendService.PutResourcePolicy' = 0 }

	export enum StartDataIngestionJobX_Amz_Target { 'AWSLookoutEquipmentFrontendService.StartDataIngestionJob' = 0 }

	export enum StartInferenceSchedulerX_Amz_Target { 'AWSLookoutEquipmentFrontendService.StartInferenceScheduler' = 0 }

	export enum StopInferenceSchedulerX_Amz_Target { 'AWSLookoutEquipmentFrontendService.StopInferenceScheduler' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSLookoutEquipmentFrontendService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSLookoutEquipmentFrontendService.UntagResource' = 0 }

	export enum UpdateActiveModelVersionX_Amz_Target { 'AWSLookoutEquipmentFrontendService.UpdateActiveModelVersion' = 0 }

	export enum UpdateInferenceSchedulerX_Amz_Target { 'AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler' = 0 }

	export enum UpdateLabelGroupX_Amz_Target { 'AWSLookoutEquipmentFrontendService.UpdateLabelGroup' = 0 }

}

