import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelJobResponse {

		/** Required */
		cancellationStatus: CancellationStatus;

		/** Required */
		jobArn: string;
	}
	export interface CancelJobResponseFormProperties {

		/** Required */
		cancellationStatus: FormControl<CancellationStatus | null | undefined>,

		/** Required */
		jobArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobResponseFormGroup() {
		return new FormGroup<CancelJobResponseFormProperties>({
			cancellationStatus: new FormControl<CancellationStatus | null | undefined>(undefined, [Validators.required]),
			jobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CancellationStatus { CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED' }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
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

	export interface CancelQuantumTaskResponse {

		/** Required */
		cancellationStatus: CancellationStatus;

		/** Required */
		quantumTaskArn: string;
	}
	export interface CancelQuantumTaskResponseFormProperties {

		/** Required */
		cancellationStatus: FormControl<CancellationStatus | null | undefined>,

		/** Required */
		quantumTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelQuantumTaskResponseFormGroup() {
		return new FormGroup<CancelQuantumTaskResponseFormProperties>({
			cancellationStatus: new FormControl<CancellationStatus | null | undefined>(undefined, [Validators.required]),
			quantumTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobResponse {

		/** Required */
		jobArn: string;
	}
	export interface CreateJobResponseFormProperties {

		/** Required */
		jobArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The container image used to create an Amazon Braket job. */
	export interface ContainerImage {

		/** Required */
		uri: string;
	}

	/** The container image used to create an Amazon Braket job. */
	export interface ContainerImageFormProperties {

		/** Required */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContainerImageFormGroup() {
		return new FormGroup<ContainerImageFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the Python scripts used for entry and by an Amazon Braket job. */
	export interface ScriptModeConfig {
		compressionType?: CompressionType;

		/** Required */
		entryPoint: string;

		/** Required */
		s3Uri: string;
	}

	/** Contains information about the Python scripts used for entry and by an Amazon Braket job. */
	export interface ScriptModeConfigFormProperties {
		compressionType: FormControl<CompressionType | null | undefined>,

		/** Required */
		entryPoint: FormControl<string | null | undefined>,

		/** Required */
		s3Uri: FormControl<string | null | undefined>,
	}
	export function CreateScriptModeConfigFormGroup() {
		return new FormGroup<ScriptModeConfigFormProperties>({
			compressionType: new FormControl<CompressionType | null | undefined>(undefined),
			entryPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CompressionType { NONE = 'NONE', GZIP = 'GZIP' }


	/** A list of parameters that specify the input channels, type of input data, and where it is located. */
	export interface InputFileConfig {

		/** Required */
		channelName: string;
		contentType?: string;

		/** Required */
		dataSource: DataSource;
	}

	/** A list of parameters that specify the input channels, type of input data, and where it is located. */
	export interface InputFileConfigFormProperties {

		/** Required */
		channelName: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateInputFileConfigFormGroup() {
		return new FormGroup<InputFileConfigFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the source of the data used by the Amazon Braket job. */
	export interface DataSource {

		/** Required */
		s3DataSource: S3DataSource;
	}

	/** Information about the source of the data used by the Amazon Braket job. */
	export interface DataSourceFormProperties {
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
		});

	}


	/** Information about the data stored in Amazon S3 used by the Amazon Braket job. */
	export interface S3DataSource {

		/** Required */
		s3Uri: string;
	}

	/** Information about the data stored in Amazon S3 used by the Amazon Braket job. */
	export interface S3DataSourceFormProperties {

		/** Required */
		s3Uri: FormControl<string | null | undefined>,
	}
	export function CreateS3DataSourceFormGroup() {
		return new FormGroup<S3DataSourceFormProperties>({
			s3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InstanceType { 'ml.m4.xlarge' = 'ml.m4.xlarge', 'ml.m4.2xlarge' = 'ml.m4.2xlarge', 'ml.m4.4xlarge' = 'ml.m4.4xlarge', 'ml.m4.10xlarge' = 'ml.m4.10xlarge', 'ml.m4.16xlarge' = 'ml.m4.16xlarge', 'ml.g4dn.xlarge' = 'ml.g4dn.xlarge', 'ml.g4dn.2xlarge' = 'ml.g4dn.2xlarge', 'ml.g4dn.4xlarge' = 'ml.g4dn.4xlarge', 'ml.g4dn.8xlarge' = 'ml.g4dn.8xlarge', 'ml.g4dn.12xlarge' = 'ml.g4dn.12xlarge', 'ml.g4dn.16xlarge' = 'ml.g4dn.16xlarge', 'ml.m5.large' = 'ml.m5.large', 'ml.m5.xlarge' = 'ml.m5.xlarge', 'ml.m5.2xlarge' = 'ml.m5.2xlarge', 'ml.m5.4xlarge' = 'ml.m5.4xlarge', 'ml.m5.12xlarge' = 'ml.m5.12xlarge', 'ml.m5.24xlarge' = 'ml.m5.24xlarge', 'ml.c4.xlarge' = 'ml.c4.xlarge', 'ml.c4.2xlarge' = 'ml.c4.2xlarge', 'ml.c4.4xlarge' = 'ml.c4.4xlarge', 'ml.c4.8xlarge' = 'ml.c4.8xlarge', 'ml.p2.xlarge' = 'ml.p2.xlarge', 'ml.p2.8xlarge' = 'ml.p2.8xlarge', 'ml.p2.16xlarge' = 'ml.p2.16xlarge', 'ml.p3.2xlarge' = 'ml.p3.2xlarge', 'ml.p3.8xlarge' = 'ml.p3.8xlarge', 'ml.p3.16xlarge' = 'ml.p3.16xlarge', 'ml.p3dn.24xlarge' = 'ml.p3dn.24xlarge', 'ml.p4d.24xlarge' = 'ml.p4d.24xlarge', 'ml.c5.xlarge' = 'ml.c5.xlarge', 'ml.c5.2xlarge' = 'ml.c5.2xlarge', 'ml.c5.4xlarge' = 'ml.c5.4xlarge', 'ml.c5.9xlarge' = 'ml.c5.9xlarge', 'ml.c5.18xlarge' = 'ml.c5.18xlarge', 'ml.c5n.xlarge' = 'ml.c5n.xlarge', 'ml.c5n.2xlarge' = 'ml.c5n.2xlarge', 'ml.c5n.4xlarge' = 'ml.c5n.4xlarge', 'ml.c5n.9xlarge' = 'ml.c5n.9xlarge', 'ml.c5n.18xlarge' = 'ml.c5n.18xlarge' }

	export interface DeviceRetiredException {
	}
	export interface DeviceRetiredExceptionFormProperties {
	}
	export function CreateDeviceRetiredExceptionFormGroup() {
		return new FormGroup<DeviceRetiredExceptionFormProperties>({
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

	export interface CreateQuantumTaskResponse {

		/** Required */
		quantumTaskArn: string;
	}
	export interface CreateQuantumTaskResponseFormProperties {

		/** Required */
		quantumTaskArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateQuantumTaskResponseFormGroup() {
		return new FormGroup<CreateQuantumTaskResponseFormProperties>({
			quantumTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceOfflineException {
	}
	export interface DeviceOfflineExceptionFormProperties {
	}
	export function CreateDeviceOfflineExceptionFormGroup() {
		return new FormGroup<DeviceOfflineExceptionFormProperties>({
		});

	}

	export interface GetDeviceResponse {

		/** Required */
		deviceArn: string;

		/** Required */
		deviceCapabilities: string;

		/** Required */
		deviceName: string;

		/** Required */
		deviceStatus: DeviceStatus;

		/** Required */
		deviceType: DeviceType;

		/** Required */
		providerName: string;
	}
	export interface GetDeviceResponseFormProperties {

		/** Required */
		deviceArn: FormControl<string | null | undefined>,

		/** Required */
		deviceCapabilities: FormControl<string | null | undefined>,

		/** Required */
		deviceName: FormControl<string | null | undefined>,

		/** Required */
		deviceStatus: FormControl<DeviceStatus | null | undefined>,

		/** Required */
		deviceType: FormControl<DeviceType | null | undefined>,

		/** Required */
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceResponseFormGroup() {
		return new FormGroup<GetDeviceResponseFormProperties>({
			deviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceCapabilities: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceStatus: new FormControl<DeviceStatus | null | undefined>(undefined, [Validators.required]),
			deviceType: new FormControl<DeviceType | null | undefined>(undefined, [Validators.required]),
			providerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeviceStatus { ONLINE = 'ONLINE', OFFLINE = 'OFFLINE', RETIRED = 'RETIRED' }

	export enum DeviceType { QPU = 'QPU', SIMULATOR = 'SIMULATOR' }

	export interface GetJobResponse {

		/** Required */
		algorithmSpecification: AlgorithmSpecification;
		billableDuration?: number | null;
		checkpointConfig?: JobCheckpointConfig;

		/** Required */
		createdAt: Date;
		deviceConfig?: DeviceConfig;
		endedAt?: Date;
		events?: Array<JobEventDetails>;
		failureReason?: string;
		hyperParameters?: HyperParameters;
		inputDataConfig?: Array<InputFileConfig>;

		/** Required */
		instanceConfig: InstanceConfig;

		/** Required */
		jobArn: string;

		/** Required */
		jobName: string;

		/** Required */
		outputDataConfig: JobOutputDataConfig;

		/** Required */
		roleArn: string;
		startedAt?: Date;

		/** Required */
		status: JobPrimaryStatus;
		stoppingCondition?: JobStoppingCondition;
		tags?: TagsMap;
	}
	export interface GetJobResponseFormProperties {
		billableDuration: FormControl<number | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		endedAt: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,

		/** Required */
		jobArn: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<JobPrimaryStatus | null | undefined>,
	}
	export function CreateGetJobResponseFormGroup() {
		return new FormGroup<GetJobResponseFormProperties>({
			billableDuration: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endedAt: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			jobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobPrimaryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training. */
	export interface AlgorithmSpecification {
		containerImage?: ContainerImage;
		scriptModeConfig?: ScriptModeConfig;
	}

	/** Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training. */
	export interface AlgorithmSpecificationFormProperties {
	}
	export function CreateAlgorithmSpecificationFormGroup() {
		return new FormGroup<AlgorithmSpecificationFormProperties>({
		});

	}


	/** Contains information about the output locations for job checkpoint data. */
	export interface JobCheckpointConfig {
		localPath?: string;

		/** Required */
		s3Uri: string;
	}

	/** Contains information about the output locations for job checkpoint data. */
	export interface JobCheckpointConfigFormProperties {
		localPath: FormControl<string | null | undefined>,

		/** Required */
		s3Uri: FormControl<string | null | undefined>,
	}
	export function CreateJobCheckpointConfigFormGroup() {
		return new FormGroup<JobCheckpointConfigFormProperties>({
			localPath: new FormControl<string | null | undefined>(undefined),
			s3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job. */
	export interface DeviceConfig {

		/** Required */
		device: string;
	}

	/** Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job. */
	export interface DeviceConfigFormProperties {

		/** Required */
		device: FormControl<string | null | undefined>,
	}
	export function CreateDeviceConfigFormGroup() {
		return new FormGroup<DeviceConfigFormProperties>({
			device: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the type and time events occurred related to the Amazon Braket job. */
	export interface JobEventDetails {
		eventType?: JobEventType;
		message?: string;
		timeOfEvent?: Date;
	}

	/** Details about the type and time events occurred related to the Amazon Braket job. */
	export interface JobEventDetailsFormProperties {
		eventType: FormControl<JobEventType | null | undefined>,
		message: FormControl<string | null | undefined>,
		timeOfEvent: FormControl<Date | null | undefined>,
	}
	export function CreateJobEventDetailsFormGroup() {
		return new FormGroup<JobEventDetailsFormProperties>({
			eventType: new FormControl<JobEventType | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			timeOfEvent: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum JobEventType { WAITING_FOR_PRIORITY = 'WAITING_FOR_PRIORITY', QUEUED_FOR_EXECUTION = 'QUEUED_FOR_EXECUTION', STARTING_INSTANCE = 'STARTING_INSTANCE', DOWNLOADING_DATA = 'DOWNLOADING_DATA', RUNNING = 'RUNNING', DEPRIORITIZED_DUE_TO_INACTIVITY = 'DEPRIORITIZED_DUE_TO_INACTIVITY', UPLOADING_RESULTS = 'UPLOADING_RESULTS', COMPLETED = 'COMPLETED', FAILED = 'FAILED', MAX_RUNTIME_EXCEEDED = 'MAX_RUNTIME_EXCEEDED', CANCELLED = 'CANCELLED' }

	export interface HyperParameters {
	}
	export interface HyperParametersFormProperties {
	}
	export function CreateHyperParametersFormGroup() {
		return new FormGroup<HyperParametersFormProperties>({
		});

	}


	/** Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket. */
	export interface InstanceConfig {
		instanceCount?: number | null;

		/** Required */
		instanceType: InstanceType;

		/** Required */
		volumeSizeInGb: number;
	}

	/** Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket. */
	export interface InstanceConfigFormProperties {
		instanceCount: FormControl<number | null | undefined>,

		/** Required */
		instanceType: FormControl<InstanceType | null | undefined>,

		/** Required */
		volumeSizeInGb: FormControl<number | null | undefined>,
	}
	export function CreateInstanceConfigFormGroup() {
		return new FormGroup<InstanceConfigFormProperties>({
			instanceCount: new FormControl<number | null | undefined>(undefined),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined, [Validators.required]),
			volumeSizeInGb: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them. */
	export interface JobOutputDataConfig {
		kmsKeyId?: string;

		/** Required */
		s3Path: string;
	}

	/** Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them. */
	export interface JobOutputDataConfigFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		s3Path: FormControl<string | null | undefined>,
	}
	export function CreateJobOutputDataConfigFormGroup() {
		return new FormGroup<JobOutputDataConfigFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			s3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobPrimaryStatus { QUEUED = 'QUEUED', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', FAILED = 'FAILED', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED' }


	/** Specifies limits for how long an Amazon Braket job can run.  */
	export interface JobStoppingCondition {
		maxRuntimeInSeconds?: number | null;
	}

	/** Specifies limits for how long an Amazon Braket job can run.  */
	export interface JobStoppingConditionFormProperties {
		maxRuntimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateJobStoppingConditionFormGroup() {
		return new FormGroup<JobStoppingConditionFormProperties>({
			maxRuntimeInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}

	export interface GetQuantumTaskResponse {

		/** Required */
		createdAt: Date;

		/** Required */
		deviceArn: string;

		/** Required */
		deviceParameters: string;
		endedAt?: Date;
		failureReason?: string;
		jobArn?: string;

		/** Required */
		outputS3Bucket: string;

		/** Required */
		outputS3Directory: string;

		/** Required */
		quantumTaskArn: string;

		/** Required */
		shots: number;

		/** Required */
		status: QuantumTaskStatus;
		tags?: TagsMap;
	}
	export interface GetQuantumTaskResponseFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deviceArn: FormControl<string | null | undefined>,

		/** Required */
		deviceParameters: FormControl<string | null | undefined>,
		endedAt: FormControl<Date | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		jobArn: FormControl<string | null | undefined>,

		/** Required */
		outputS3Bucket: FormControl<string | null | undefined>,

		/** Required */
		outputS3Directory: FormControl<string | null | undefined>,

		/** Required */
		quantumTaskArn: FormControl<string | null | undefined>,

		/** Required */
		shots: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<QuantumTaskStatus | null | undefined>,
	}
	export function CreateGetQuantumTaskResponseFormGroup() {
		return new FormGroup<GetQuantumTaskResponseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceParameters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endedAt: new FormControl<Date | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			jobArn: new FormControl<string | null | undefined>(undefined),
			outputS3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputS3Directory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantumTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shots: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<QuantumTaskStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum QuantumTaskStatus { CREATED = 'CREATED', QUEUED = 'QUEUED', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', FAILED = 'FAILED', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED' }

	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface SearchDevicesResponse {

		/** Required */
		devices: Array<DeviceSummary>;
		nextToken?: string;
	}
	export interface SearchDevicesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchDevicesResponseFormGroup() {
		return new FormGroup<SearchDevicesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Includes information about the device. */
	export interface DeviceSummary {

		/** Required */
		deviceArn: string;

		/** Required */
		deviceName: string;

		/** Required */
		deviceStatus: DeviceStatus;

		/** Required */
		deviceType: DeviceType;

		/** Required */
		providerName: string;
	}

	/** Includes information about the device. */
	export interface DeviceSummaryFormProperties {

		/** Required */
		deviceArn: FormControl<string | null | undefined>,

		/** Required */
		deviceName: FormControl<string | null | undefined>,

		/** Required */
		deviceStatus: FormControl<DeviceStatus | null | undefined>,

		/** Required */
		deviceType: FormControl<DeviceType | null | undefined>,

		/** Required */
		providerName: FormControl<string | null | undefined>,
	}
	export function CreateDeviceSummaryFormGroup() {
		return new FormGroup<DeviceSummaryFormProperties>({
			deviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceStatus: new FormControl<DeviceStatus | null | undefined>(undefined, [Validators.required]),
			deviceType: new FormControl<DeviceType | null | undefined>(undefined, [Validators.required]),
			providerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The filter to use for searching devices. */
	export interface SearchDevicesFilter {

		/** Required */
		name: string;

		/** Required */
		values: Array<string>;
	}

	/** The filter to use for searching devices. */
	export interface SearchDevicesFilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSearchDevicesFilterFormGroup() {
		return new FormGroup<SearchDevicesFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchJobsResponse {

		/** Required */
		jobs: Array<JobSummary>;
		nextToken?: string;
	}
	export interface SearchJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchJobsResponseFormGroup() {
		return new FormGroup<SearchJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information about an Amazon Braket job. */
	export interface JobSummary {

		/** Required */
		createdAt: Date;

		/** Required */
		device: string;
		endedAt?: Date;

		/** Required */
		jobArn: string;

		/** Required */
		jobName: string;
		startedAt?: Date;

		/** Required */
		status: JobPrimaryStatus;
		tags?: TagsMap;
	}

	/** Provides summary information about an Amazon Braket job. */
	export interface JobSummaryFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		device: FormControl<string | null | undefined>,
		endedAt: FormControl<Date | null | undefined>,

		/** Required */
		jobArn: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<JobPrimaryStatus | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			device: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endedAt: new FormControl<Date | null | undefined>(undefined),
			jobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobPrimaryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A filter used to search for Amazon Braket jobs. */
	export interface SearchJobsFilter {

		/** Required */
		name: string;

		/** Required */
		operator: SearchJobsFilterOperator;

		/** Required */
		values: Array<string>;
	}

	/** A filter used to search for Amazon Braket jobs. */
	export interface SearchJobsFilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		operator: FormControl<SearchJobsFilterOperator | null | undefined>,
	}
	export function CreateSearchJobsFilterFormGroup() {
		return new FormGroup<SearchJobsFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<SearchJobsFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SearchJobsFilterOperator { LT = 'LT', LTE = 'LTE', EQUAL = 'EQUAL', GT = 'GT', GTE = 'GTE', BETWEEN = 'BETWEEN', CONTAINS = 'CONTAINS' }

	export interface SearchQuantumTasksResponse {
		nextToken?: string;

		/** Required */
		quantumTasks: Array<QuantumTaskSummary>;
	}
	export interface SearchQuantumTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchQuantumTasksResponseFormGroup() {
		return new FormGroup<SearchQuantumTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Includes information about a quantum task. */
	export interface QuantumTaskSummary {

		/** Required */
		createdAt: Date;

		/** Required */
		deviceArn: string;
		endedAt?: Date;

		/** Required */
		outputS3Bucket: string;

		/** Required */
		outputS3Directory: string;

		/** Required */
		quantumTaskArn: string;

		/** Required */
		shots: number;

		/** Required */
		status: QuantumTaskStatus;
		tags?: TagsMap;
	}

	/** Includes information about a quantum task. */
	export interface QuantumTaskSummaryFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		deviceArn: FormControl<string | null | undefined>,
		endedAt: FormControl<Date | null | undefined>,

		/** Required */
		outputS3Bucket: FormControl<string | null | undefined>,

		/** Required */
		outputS3Directory: FormControl<string | null | undefined>,

		/** Required */
		quantumTaskArn: FormControl<string | null | undefined>,

		/** Required */
		shots: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<QuantumTaskStatus | null | undefined>,
	}
	export function CreateQuantumTaskSummaryFormGroup() {
		return new FormGroup<QuantumTaskSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endedAt: new FormControl<Date | null | undefined>(undefined),
			outputS3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputS3Directory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantumTaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shots: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<QuantumTaskStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A filter to use to search for tasks. */
	export interface SearchQuantumTasksFilter {

		/** Required */
		name: string;

		/** Required */
		operator: SearchQuantumTasksFilterOperator;

		/** Required */
		values: Array<string>;
	}

	/** A filter to use to search for tasks. */
	export interface SearchQuantumTasksFilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		operator: FormControl<SearchQuantumTasksFilterOperator | null | undefined>,
	}
	export function CreateSearchQuantumTasksFilterFormGroup() {
		return new FormGroup<SearchQuantumTasksFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<SearchQuantumTasksFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SearchQuantumTasksFilterOperator { LT = 'LT', LTE = 'LTE', EQUAL = 'EQUAL', GT = 'GT', GTE = 'GTE', BETWEEN = 'BETWEEN' }

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

	export interface CancelJobRequest {
	}
	export interface CancelJobRequestFormProperties {
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
		});

	}

	export interface CancelQuantumTaskRequest {

		/** Required */
		clientToken: string;
	}
	export interface CancelQuantumTaskRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelQuantumTaskRequestFormGroup() {
		return new FormGroup<CancelQuantumTaskRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobRequest {

		/** Required */
		algorithmSpecification: AlgorithmSpecification;
		checkpointConfig?: JobCheckpointConfig;

		/** Required */
		clientToken: string;

		/** Required */
		deviceConfig: DeviceConfig;
		hyperParameters?: HyperParameters;
		inputDataConfig?: Array<InputFileConfig>;

		/** Required */
		instanceConfig: InstanceConfig;

		/** Required */
		jobName: string;

		/** Required */
		outputDataConfig: JobOutputDataConfig;

		/** Required */
		roleArn: string;
		stoppingCondition?: JobStoppingCondition;
		tags?: TagsMap;
	}
	export interface CreateJobRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateQuantumTaskRequest {

		/** Required */
		action: string;

		/** Required */
		clientToken: string;

		/** Required */
		deviceArn: string;
		deviceParameters?: string;
		jobToken?: string;

		/** Required */
		outputS3Bucket: string;

		/** Required */
		outputS3KeyPrefix: string;

		/** Required */
		shots: number;
		tags?: TagsMap;
	}
	export interface CreateQuantumTaskRequestFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		deviceArn: FormControl<string | null | undefined>,
		deviceParameters: FormControl<string | null | undefined>,
		jobToken: FormControl<string | null | undefined>,

		/** Required */
		outputS3Bucket: FormControl<string | null | undefined>,

		/** Required */
		outputS3KeyPrefix: FormControl<string | null | undefined>,

		/** Required */
		shots: FormControl<number | null | undefined>,
	}
	export function CreateCreateQuantumTaskRequestFormGroup() {
		return new FormGroup<CreateQuantumTaskRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceParameters: new FormControl<string | null | undefined>(undefined),
			jobToken: new FormControl<string | null | undefined>(undefined),
			outputS3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputS3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shots: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDeviceRequest {
	}
	export interface GetDeviceRequestFormProperties {
	}
	export function CreateGetDeviceRequestFormGroup() {
		return new FormGroup<GetDeviceRequestFormProperties>({
		});

	}

	export interface GetJobRequest {
	}
	export interface GetJobRequestFormProperties {
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
		});

	}

	export interface GetQuantumTaskRequest {
	}
	export interface GetQuantumTaskRequestFormProperties {
	}
	export function CreateGetQuantumTaskRequestFormGroup() {
		return new FormGroup<GetQuantumTaskRequestFormProperties>({
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

	export interface SearchDevicesRequest {

		/** Required */
		filters: Array<SearchDevicesFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface SearchDevicesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchDevicesRequestFormGroup() {
		return new FormGroup<SearchDevicesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchJobsRequest {

		/** Required */
		filters: Array<SearchJobsFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface SearchJobsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchJobsRequestFormGroup() {
		return new FormGroup<SearchJobsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchQuantumTasksRequest {

		/** Required */
		filters: Array<SearchQuantumTasksFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface SearchQuantumTasksRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchQuantumTasksRequestFormGroup() {
		return new FormGroup<SearchQuantumTasksRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagsMap;
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels an Amazon Braket job.
		 * Put job/{jobArn}/cancel
		 * @param {string} jobArn The ARN of the Amazon Braket job to cancel.
		 * @return {CancelJobResponse} Success
		 */
		CancelJob(jobArn: string): Observable<CancelJobResponse> {
			return this.http.put<CancelJobResponse>(this.baseUri + 'job/' + (jobArn == null ? '' : encodeURIComponent(jobArn)) + '/cancel', null, {});
		}

		/**
		 * Cancels the specified task.
		 * Put quantum-task/{quantumTaskArn}/cancel
		 * @param {string} quantumTaskArn The ARN of the task to cancel.
		 *     Min length: 1    Max length: 256
		 * @return {CancelQuantumTaskResponse} Success
		 */
		CancelQuantumTask(quantumTaskArn: string, requestBody: CancelQuantumTaskPutBody): Observable<CancelQuantumTaskResponse> {
			return this.http.put<CancelQuantumTaskResponse>(this.baseUri + 'quantum-task/' + (quantumTaskArn == null ? '' : encodeURIComponent(quantumTaskArn)) + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Amazon Braket job.
		 * Post job
		 * @return {void} 
		 */
		CreateJob(requestBody: CreateJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a quantum task.
		 * Post quantum-task
		 * @return {void} 
		 */
		CreateQuantumTask(requestBody: CreateQuantumTaskPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quantum-task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>
		 * Get device/{deviceArn}
		 * @param {string} deviceArn The ARN of the device to retrieve.
		 *     Min length: 1    Max length: 256
		 * @return {GetDeviceResponse} Success
		 */
		GetDevice(deviceArn: string): Observable<GetDeviceResponse> {
			return this.http.get<GetDeviceResponse>(this.baseUri + 'device/' + (deviceArn == null ? '' : encodeURIComponent(deviceArn)), {});
		}

		/**
		 * Retrieves the specified Amazon Braket job.
		 * Get job/{jobArn}
		 * @param {string} jobArn The ARN of the job to retrieve.
		 * @return {GetJobResponse} Success
		 */
		GetJob(jobArn: string): Observable<GetJobResponse> {
			return this.http.get<GetJobResponse>(this.baseUri + 'job/' + (jobArn == null ? '' : encodeURIComponent(jobArn)), {});
		}

		/**
		 * Retrieves the specified quantum task.
		 * Get quantum-task/{quantumTaskArn}
		 * @param {string} quantumTaskArn the ARN of the task to retrieve.
		 *     Min length: 1    Max length: 256
		 * @return {GetQuantumTaskResponse} Success
		 */
		GetQuantumTask(quantumTaskArn: string): Observable<GetQuantumTaskResponse> {
			return this.http.get<GetQuantumTaskResponse>(this.baseUri + 'quantum-task/' + (quantumTaskArn == null ? '' : encodeURIComponent(quantumTaskArn)), {});
		}

		/**
		 * Shows the tags associated with this resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn Specify the <code>resourceArn</code> for the resource whose tags to display.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Add a tag to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn Specify the <code>resourceArn</code> of the resource to which a tag will be added.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for devices using the specified filters.
		 * Post devices
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchDevicesResponse} Success
		 */
		SearchDevices(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchDevicesPostBody): Observable<SearchDevicesResponse> {
			return this.http.post<SearchDevicesResponse>(this.baseUri + 'devices?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for Amazon Braket jobs that match the specified filter values.
		 * Post jobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchJobsResponse} Success
		 */
		SearchJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchJobsPostBody): Observable<SearchJobsResponse> {
			return this.http.post<SearchJobsResponse>(this.baseUri + 'jobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches for tasks that match the specified filter values.
		 * Post quantum-tasks
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {SearchQuantumTasksResponse} Success
		 */
		SearchQuantumTasks(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: SearchQuantumTasksPostBody): Observable<SearchQuantumTasksResponse> {
			return this.http.post<SearchQuantumTasksResponse>(this.baseUri + 'quantum-tasks?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn Specify the <code>resourceArn</code> for the resource from which to remove the tags.
		 * @param {Array<string>} tagKeys Specify the keys for the tags to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CancelQuantumTaskPutBody {

		/**
		 * The client token associated with the request.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: string;
	}
	export interface CancelQuantumTaskPutBodyFormProperties {

		/**
		 * The client token associated with the request.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelQuantumTaskPutBodyFormGroup() {
		return new FormGroup<CancelQuantumTaskPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface CreateJobPostBody {

		/**
		 * Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.
		 * Required
		 */
		algorithmSpecification: CreateJobPostBodyAlgorithmSpecification;

		/** Contains information about the output locations for job checkpoint data. */
		checkpointConfig?: CreateJobPostBodyCheckpointConfig;

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: string;

		/**
		 * Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job.
		 * Required
		 */
		deviceConfig: CreateJobPostBodyDeviceConfig;

		/** Algorithm-specific parameters used by an Amazon Braket job that influence the quality of the training job. The values are set with a string of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter. */
		hyperParameters?: {[id: string]: string };

		/**
		 * A list of parameters that specify the name and type of input data and where it is located.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		inputDataConfig?: Array<InputFileConfig>;

		/**
		 * Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.
		 * Required
		 */
		instanceConfig: CreateJobPostBodyInstanceConfig;

		/**
		 * The name of the Amazon Braket job.
		 * Required
		 * Min length: 1
		 * Max length: 50
		 */
		jobName: string;

		/**
		 * Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.
		 * Required
		 */
		outputDataConfig: CreateJobPostBodyOutputDataConfig;

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output resources to the users' s3 buckets.
		 * Required
		 */
		roleArn: string;

		/** Specifies limits for how long an Amazon Braket job can run. */
		stoppingCondition?: CreateJobPostBodyStoppingCondition;

		/** A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources. */
		tags?: {[id: string]: string };
	}
	export interface CreateJobPostBodyFormProperties {

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,

		/** Algorithm-specific parameters used by an Amazon Braket job that influence the quality of the training job. The values are set with a string of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter. */
		hyperParameters: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name of the Amazon Braket job.
		 * Required
		 * Min length: 1
		 * Max length: 50
		 */
		jobName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output resources to the users' s3 buckets.
		 * Required
		 */
		roleArn: FormControl<string | null | undefined>,

		/** A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateJobPostBodyFormGroup() {
		return new FormGroup<CreateJobPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			hyperParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,50}$')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBodyAlgorithmSpecification {
		containerImage?: ContainerImage;
		scriptModeConfig?: ScriptModeConfig;
	}
	export interface CreateJobPostBodyAlgorithmSpecificationFormProperties {
	}
	export function CreateCreateJobPostBodyAlgorithmSpecificationFormGroup() {
		return new FormGroup<CreateJobPostBodyAlgorithmSpecificationFormProperties>({
		});

	}

	export interface CreateJobPostBodyCheckpointConfig {
		localPath?: string;
		s3Uri?: string;
	}
	export interface CreateJobPostBodyCheckpointConfigFormProperties {
		localPath: FormControl<string | null | undefined>,
		s3Uri: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobPostBodyCheckpointConfigFormGroup() {
		return new FormGroup<CreateJobPostBodyCheckpointConfigFormProperties>({
			localPath: new FormControl<string | null | undefined>(undefined),
			s3Uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBodyDeviceConfig {
		device?: string;
	}
	export interface CreateJobPostBodyDeviceConfigFormProperties {
		device: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobPostBodyDeviceConfigFormGroup() {
		return new FormGroup<CreateJobPostBodyDeviceConfigFormProperties>({
			device: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBodyInstanceConfig {
		instanceCount?: number | null;
		instanceType?: InstanceType;
		volumeSizeInGb?: number | null;
	}
	export interface CreateJobPostBodyInstanceConfigFormProperties {
		instanceCount: FormControl<number | null | undefined>,
		instanceType: FormControl<InstanceType | null | undefined>,
		volumeSizeInGb: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobPostBodyInstanceConfigFormGroup() {
		return new FormGroup<CreateJobPostBodyInstanceConfigFormProperties>({
			instanceCount: new FormControl<number | null | undefined>(undefined),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined),
			volumeSizeInGb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBodyOutputDataConfig {
		kmsKeyId?: string;
		s3Path?: string;
	}
	export interface CreateJobPostBodyOutputDataConfigFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
		s3Path: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobPostBodyOutputDataConfigFormGroup() {
		return new FormGroup<CreateJobPostBodyOutputDataConfigFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			s3Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobPostBodyStoppingCondition {
		maxRuntimeInSeconds?: number | null;
	}
	export interface CreateJobPostBodyStoppingConditionFormProperties {
		maxRuntimeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobPostBodyStoppingConditionFormGroup() {
		return new FormGroup<CreateJobPostBodyStoppingConditionFormProperties>({
			maxRuntimeInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateQuantumTaskPostBody {

		/**
		 * The action associated with the task.
		 * Required
		 */
		action: string;

		/**
		 * The client token associated with the request.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: string;

		/**
		 * The ARN of the device to run the task on.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		deviceArn: string;

		/**
		 * The parameters for the device to run the task on.
		 * Min length: 1
		 * Max length: 48000
		 */
		deviceParameters?: string | null;

		/**
		 * The token for an Amazon Braket job that associates it with the quantum task.
		 * Min length: 1
		 * Max length: 128
		 */
		jobToken?: string | null;

		/**
		 * The S3 bucket to store task result files in.
		 * Required
		 * Min length: 3
		 * Max length: 63
		 */
		outputS3Bucket: string;

		/**
		 * The key prefix for the location in the S3 bucket to store task results in.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		outputS3KeyPrefix: string;

		/**
		 * The number of shots to use for the task.
		 * Required
		 * Minimum: 0
		 */
		shots: number;

		/** Tags to be added to the quantum task you're creating. */
		tags?: {[id: string]: string };
	}
	export interface CreateQuantumTaskPostBodyFormProperties {

		/**
		 * The action associated with the task.
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * The client token associated with the request.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The ARN of the device to run the task on.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		deviceArn: FormControl<string | null | undefined>,

		/**
		 * The parameters for the device to run the task on.
		 * Min length: 1
		 * Max length: 48000
		 */
		deviceParameters: FormControl<string | null | undefined>,

		/**
		 * The token for an Amazon Braket job that associates it with the quantum task.
		 * Min length: 1
		 * Max length: 128
		 */
		jobToken: FormControl<string | null | undefined>,

		/**
		 * The S3 bucket to store task result files in.
		 * Required
		 * Min length: 3
		 * Max length: 63
		 */
		outputS3Bucket: FormControl<string | null | undefined>,

		/**
		 * The key prefix for the location in the S3 bucket to store task results in.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		outputS3KeyPrefix: FormControl<string | null | undefined>,

		/**
		 * The number of shots to use for the task.
		 * Required
		 * Minimum: 0
		 */
		shots: FormControl<number | null | undefined>,

		/** Tags to be added to the quantum task you're creating. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateQuantumTaskPostBodyFormGroup() {
		return new FormGroup<CreateQuantumTaskPostBodyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			deviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			deviceParameters: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(48000)]),
			jobToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			outputS3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63)]),
			outputS3KeyPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			shots: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Specify the tags to add to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Specify the tags to add to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchDevicesPostBody {

		/**
		 * The filter values to use to search for a device.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		filters: Array<SearchDevicesFilter>;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended. */
		nextToken?: string | null;
	}
	export interface SearchDevicesPostBodyFormProperties {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchDevicesPostBodyFormGroup() {
		return new FormGroup<SearchDevicesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchJobsPostBody {

		/**
		 * The filter values to use when searching for a job.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		filters: Array<SearchJobsFilter>;

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** A token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended. */
		nextToken?: string | null;
	}
	export interface SearchJobsPostBodyFormProperties {

		/**
		 * The maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** A token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchJobsPostBodyFormGroup() {
		return new FormGroup<SearchJobsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchQuantumTasksPostBody {

		/**
		 * Array of <code>SearchQuantumTasksFilter</code> objects.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		filters: Array<SearchQuantumTasksFilter>;

		/**
		 * Maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended. */
		nextToken?: string | null;
	}
	export interface SearchQuantumTasksPostBodyFormProperties {

		/**
		 * Maximum number of results to return in the response.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchQuantumTasksPostBodyFormGroup() {
		return new FormGroup<SearchQuantumTasksPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

}

