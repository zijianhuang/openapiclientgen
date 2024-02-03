import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelJobRunResponse {

		/** Required */
		applicationId: string;

		/** Required */
		jobRunId: string;
	}
	export interface CancelJobRunResponseFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		jobRunId: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobRunResponseFormGroup() {
		return new FormGroup<CancelJobRunResponseFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobRunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface CreateApplicationResponse {

		/** Required */
		applicationId: string;
		name?: string;

		/** Required */
		arn: string;
	}
	export interface CreateApplicationResponseFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The initial capacity configuration per worker. */
	export interface InitialCapacityConfig {

		/** Required */
		workerCount: number;
		workerConfiguration?: WorkerResourceConfig;
	}

	/** The initial capacity configuration per worker. */
	export interface InitialCapacityConfigFormProperties {

		/** Required */
		workerCount: FormControl<number | null | undefined>,
	}
	export function CreateInitialCapacityConfigFormGroup() {
		return new FormGroup<InitialCapacityConfigFormProperties>({
			workerCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The cumulative configuration requirements for every worker instance of the worker type. */
	export interface WorkerResourceConfig {

		/** Required */
		cpu: string;

		/** Required */
		memory: string;
		disk?: string;
	}

	/** The cumulative configuration requirements for every worker instance of the worker type. */
	export interface WorkerResourceConfigFormProperties {

		/** Required */
		cpu: FormControl<string | null | undefined>,

		/** Required */
		memory: FormControl<string | null | undefined>,
		disk: FormControl<string | null | undefined>,
	}
	export function CreateWorkerResourceConfigFormGroup() {
		return new FormGroup<WorkerResourceConfigFormProperties>({
			cpu: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			memory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specifications for a worker type. */
	export interface WorkerTypeSpecificationInput {
		imageConfiguration?: ImageConfigurationInput;
	}

	/** The specifications for a worker type. */
	export interface WorkerTypeSpecificationInputFormProperties {
	}
	export function CreateWorkerTypeSpecificationInputFormGroup() {
		return new FormGroup<WorkerTypeSpecificationInputFormProperties>({
		});

	}


	/** The image configuration. */
	export interface ImageConfigurationInput {
		imageUri?: string;
	}

	/** The image configuration. */
	export interface ImageConfigurationInputFormProperties {
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreateImageConfigurationInputFormGroup() {
		return new FormGroup<ImageConfigurationInputFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteApplicationResponse {
	}
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
		});

	}

	export interface GetApplicationResponse {

		/** Required */
		application: Application;
	}
	export interface GetApplicationResponseFormProperties {
	}
	export function CreateGetApplicationResponseFormGroup() {
		return new FormGroup<GetApplicationResponseFormProperties>({
		});

	}


	/** Information about an application. Amazon EMR Serverless uses applications to run jobs. */
	export interface Application {

		/** Required */
		applicationId: string;
		name?: string;

		/** Required */
		arn: string;

		/** Required */
		releaseLabel: string;

		/** Required */
		type: string;

		/** Required */
		state: ApplicationState;
		stateDetails?: string;
		initialCapacity?: InitialCapacityConfigMap;
		maximumCapacity?: MaximumAllowedResources;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;
		tags?: TagMap;
		autoStartConfiguration?: AutoStartConfig;
		autoStopConfiguration?: AutoStopConfig;
		networkConfiguration?: NetworkConfiguration;
		architecture?: Architecture;
		imageConfiguration?: ImageConfiguration;
		workerTypeSpecifications?: WorkerTypeSpecificationMap;
	}

	/** Information about an application. Amazon EMR Serverless uses applications to run jobs. */
	export interface ApplicationFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		releaseLabel: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<ApplicationState | null | undefined>,
		stateDetails: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<ApplicationState | null | undefined>(undefined, [Validators.required]),
			stateDetails: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
		});

	}

	export enum ApplicationState { CREATING = 'CREATING', CREATED = 'CREATED', STARTING = 'STARTING', STARTED = 'STARTED', STOPPING = 'STOPPING', STOPPED = 'STOPPED', TERMINATED = 'TERMINATED' }

	export interface InitialCapacityConfigMap {
	}
	export interface InitialCapacityConfigMapFormProperties {
	}
	export function CreateInitialCapacityConfigMapFormGroup() {
		return new FormGroup<InitialCapacityConfigMapFormProperties>({
		});

	}


	/** The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit. */
	export interface MaximumAllowedResources {

		/** Required */
		cpu: string;

		/** Required */
		memory: string;
		disk?: string;
	}

	/** The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit. */
	export interface MaximumAllowedResourcesFormProperties {

		/** Required */
		cpu: FormControl<string | null | undefined>,

		/** Required */
		memory: FormControl<string | null | undefined>,
		disk: FormControl<string | null | undefined>,
	}
	export function CreateMaximumAllowedResourcesFormGroup() {
		return new FormGroup<MaximumAllowedResourcesFormProperties>({
			cpu: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			memory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			disk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** The configuration for an application to automatically start on job submission. */
	export interface AutoStartConfig {
		enabled?: boolean | null;
	}

	/** The configuration for an application to automatically start on job submission. */
	export interface AutoStartConfigFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoStartConfigFormGroup() {
		return new FormGroup<AutoStartConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The configuration for an application to automatically stop after a certain amount of time being idle. */
	export interface AutoStopConfig {
		enabled?: boolean | null;
		idleTimeoutMinutes?: number | null;
	}

	/** The configuration for an application to automatically stop after a certain amount of time being idle. */
	export interface AutoStopConfigFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		idleTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateAutoStopConfigFormGroup() {
		return new FormGroup<AutoStopConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			idleTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The network configuration for customer VPC connectivity. */
	export interface NetworkConfiguration {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
	}

	/** The network configuration for customer VPC connectivity. */
	export interface NetworkConfigurationFormProperties {
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
		});

	}

	export enum Architecture { ARM64 = 'ARM64', X86_64 = 'X86_64' }


	/** The applied image configuration. */
	export interface ImageConfiguration {

		/** Required */
		imageUri: string;
		resolvedImageDigest?: string;
	}

	/** The applied image configuration. */
	export interface ImageConfigurationFormProperties {

		/** Required */
		imageUri: FormControl<string | null | undefined>,
		resolvedImageDigest: FormControl<string | null | undefined>,
	}
	export function CreateImageConfigurationFormGroup() {
		return new FormGroup<ImageConfigurationFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resolvedImageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkerTypeSpecificationMap {
	}
	export interface WorkerTypeSpecificationMapFormProperties {
	}
	export function CreateWorkerTypeSpecificationMapFormGroup() {
		return new FormGroup<WorkerTypeSpecificationMapFormProperties>({
		});

	}

	export interface GetDashboardForJobRunResponse {
		url?: string;
	}
	export interface GetDashboardForJobRunResponseFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetDashboardForJobRunResponseFormGroup() {
		return new FormGroup<GetDashboardForJobRunResponseFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobRunResponse {

		/** Required */
		jobRun: JobRun;
	}
	export interface GetJobRunResponseFormProperties {
	}
	export function CreateGetJobRunResponseFormGroup() {
		return new FormGroup<GetJobRunResponseFormProperties>({
		});

	}


	/** Information about a job run. A job run is a unit of work, such as a Spark JAR, Hive query, or SparkSQL query, that you submit to an Amazon EMR Serverless application. */
	export interface JobRun {

		/** Required */
		applicationId: string;

		/** Required */
		jobRunId: string;
		name?: string;

		/** Required */
		arn: string;

		/** Required */
		createdBy: string;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;

		/** Required */
		executionRole: string;

		/** Required */
		state: JobRunState;

		/** Required */
		stateDetails: string;

		/** Required */
		releaseLabel: string;
		configurationOverrides?: ConfigurationOverrides;

		/** Required */
		jobDriver: JobDriver;
		tags?: TagMap;
		totalResourceUtilization?: TotalResourceUtilization;

		/** The network configuration for customer VPC connectivity. */
		networkConfiguration?: NetworkConfiguration;
		totalExecutionDurationSeconds?: number | null;
		executionTimeoutMinutes?: number | null;
		billedResourceUtilization?: ResourceUtilization;
	}

	/** Information about a job run. A job run is a unit of work, such as a Spark JAR, Hive query, or SparkSQL query, that you submit to an Amazon EMR Serverless application. */
	export interface JobRunFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		jobRunId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		executionRole: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<JobRunState | null | undefined>,

		/** Required */
		stateDetails: FormControl<string | null | undefined>,

		/** Required */
		releaseLabel: FormControl<string | null | undefined>,
		totalExecutionDurationSeconds: FormControl<number | null | undefined>,
		executionTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateJobRunFormGroup() {
		return new FormGroup<JobRunFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobRunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			executionRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobRunState | null | undefined>(undefined, [Validators.required]),
			stateDetails: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalExecutionDurationSeconds: new FormControl<number | null | undefined>(undefined),
			executionTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobRunState { SUBMITTED = 'SUBMITTED', PENDING = 'PENDING', SCHEDULED = 'SCHEDULED', RUNNING = 'RUNNING', SUCCESS = 'SUCCESS', FAILED = 'FAILED', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED' }


	/** A configuration specification to be used to override existing configurations. */
	export interface ConfigurationOverrides {
		applicationConfiguration?: Array<Configuration>;
		monitoringConfiguration?: MonitoringConfiguration;
	}

	/** A configuration specification to be used to override existing configurations. */
	export interface ConfigurationOverridesFormProperties {
	}
	export function CreateConfigurationOverridesFormGroup() {
		return new FormGroup<ConfigurationOverridesFormProperties>({
		});

	}


	/** A configuration specification to be used when provisioning an application. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. */
	export interface Configuration {

		/** Required */
		classification: string;

		/** A set of properties specified within a configuration classification. */
		properties?: any;
		configurations?: Array<Configuration>;
	}

	/** A configuration specification to be used when provisioning an application. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. */
	export interface ConfigurationFormProperties {

		/** Required */
		classification: FormControl<string | null | undefined>,

		/** A set of properties specified within a configuration classification. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			classification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The configuration setting for monitoring. */
	export interface MonitoringConfiguration {
		s3MonitoringConfiguration?: S3MonitoringConfiguration;
		managedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration;
		cloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration;
	}

	/** The configuration setting for monitoring. */
	export interface MonitoringConfigurationFormProperties {
	}
	export function CreateMonitoringConfigurationFormGroup() {
		return new FormGroup<MonitoringConfigurationFormProperties>({
		});

	}


	/** The Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. */
	export interface S3MonitoringConfiguration {
		logUri?: string;
		encryptionKeyArn?: string;
	}

	/** The Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. */
	export interface S3MonitoringConfigurationFormProperties {
		logUri: FormControl<string | null | undefined>,
		encryptionKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3MonitoringConfigurationFormGroup() {
		return new FormGroup<S3MonitoringConfigurationFormProperties>({
			logUri: new FormControl<string | null | undefined>(undefined),
			encryptionKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The managed log persistence configuration for a job run. */
	export interface ManagedPersistenceMonitoringConfiguration {
		enabled?: boolean | null;
		encryptionKeyArn?: string;
	}

	/** The managed log persistence configuration for a job run. */
	export interface ManagedPersistenceMonitoringConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		encryptionKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateManagedPersistenceMonitoringConfigurationFormGroup() {
		return new FormGroup<ManagedPersistenceMonitoringConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			encryptionKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs to send log information to CloudWatch. */
	export interface CloudWatchLoggingConfiguration {

		/** Required */
		enabled: boolean;
		logGroupName?: string;
		logStreamNamePrefix?: string;
		encryptionKeyArn?: string;
		logTypes?: LogTypeMap;
	}

	/** The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs to send log information to CloudWatch. */
	export interface CloudWatchLoggingConfigurationFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		logGroupName: FormControl<string | null | undefined>,
		logStreamNamePrefix: FormControl<string | null | undefined>,
		encryptionKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLoggingConfigurationFormGroup() {
		return new FormGroup<CloudWatchLoggingConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			logGroupName: new FormControl<string | null | undefined>(undefined),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined),
			encryptionKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LogTypeMap {
	}
	export interface LogTypeMapFormProperties {
	}
	export function CreateLogTypeMapFormGroup() {
		return new FormGroup<LogTypeMapFormProperties>({
		});

	}


	/** The driver that the job runs on. */
	export interface JobDriver {
		sparkSubmit?: SparkSubmit;
		hive?: Hive;
	}

	/** The driver that the job runs on. */
	export interface JobDriverFormProperties {
	}
	export function CreateJobDriverFormGroup() {
		return new FormGroup<JobDriverFormProperties>({
		});

	}


	/** The configurations for the Spark submit job driver. */
	export interface SparkSubmit {

		/** Required */
		entryPoint: string;
		entryPointArguments?: Array<string>;
		sparkSubmitParameters?: string;
	}

	/** The configurations for the Spark submit job driver. */
	export interface SparkSubmitFormProperties {

		/** Required */
		entryPoint: FormControl<string | null | undefined>,
		sparkSubmitParameters: FormControl<string | null | undefined>,
	}
	export function CreateSparkSubmitFormGroup() {
		return new FormGroup<SparkSubmitFormProperties>({
			entryPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sparkSubmitParameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configurations for the Hive job driver. */
	export interface Hive {

		/** Required */
		query: string;
		initQueryFile?: string;
		parameters?: string;
	}

	/** The configurations for the Hive job driver. */
	export interface HiveFormProperties {

		/** Required */
		query: FormControl<string | null | undefined>,
		initQueryFile: FormControl<string | null | undefined>,
		parameters: FormControl<string | null | undefined>,
	}
	export function CreateHiveFormGroup() {
		return new FormGroup<HiveFormProperties>({
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			initQueryFile: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The aggregate vCPU, memory, and storage resources used from the time job start executing till the time job is terminated, rounded up to the nearest second. */
	export interface TotalResourceUtilization {
		vCPUHour?: number | null;
		memoryGBHour?: number | null;
		storageGBHour?: number | null;
	}

	/** The aggregate vCPU, memory, and storage resources used from the time job start executing till the time job is terminated, rounded up to the nearest second. */
	export interface TotalResourceUtilizationFormProperties {
		vCPUHour: FormControl<number | null | undefined>,
		memoryGBHour: FormControl<number | null | undefined>,
		storageGBHour: FormControl<number | null | undefined>,
	}
	export function CreateTotalResourceUtilizationFormGroup() {
		return new FormGroup<TotalResourceUtilizationFormProperties>({
			vCPUHour: new FormControl<number | null | undefined>(undefined),
			memoryGBHour: new FormControl<number | null | undefined>(undefined),
			storageGBHour: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The resource utilization for memory, storage, and vCPU for jobs. */
	export interface ResourceUtilization {
		vCPUHour?: number | null;
		memoryGBHour?: number | null;
		storageGBHour?: number | null;
	}

	/** The resource utilization for memory, storage, and vCPU for jobs. */
	export interface ResourceUtilizationFormProperties {
		vCPUHour: FormControl<number | null | undefined>,
		memoryGBHour: FormControl<number | null | undefined>,
		storageGBHour: FormControl<number | null | undefined>,
	}
	export function CreateResourceUtilizationFormGroup() {
		return new FormGroup<ResourceUtilizationFormProperties>({
			vCPUHour: new FormControl<number | null | undefined>(undefined),
			memoryGBHour: new FormControl<number | null | undefined>(undefined),
			storageGBHour: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsResponse {

		/** Required */
		applications: Array<ApplicationSummary>;
		nextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of attributes associated with an application. */
	export interface ApplicationSummary {

		/** Required */
		id: string;
		name?: string;

		/** Required */
		arn: string;

		/** Required */
		releaseLabel: string;

		/** Required */
		type: string;

		/** Required */
		state: ApplicationState;
		stateDetails?: string;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;
		architecture?: Architecture;
	}

	/** The summary of attributes associated with an application. */
	export interface ApplicationSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		releaseLabel: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<ApplicationState | null | undefined>,
		stateDetails: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<ApplicationState | null | undefined>(undefined, [Validators.required]),
			stateDetails: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
		});

	}

	export interface ListJobRunsResponse {

		/** Required */
		jobRuns: Array<JobRunSummary>;
		nextToken?: string;
	}
	export interface ListJobRunsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobRunsResponseFormGroup() {
		return new FormGroup<ListJobRunsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of attributes associated with a job run. */
	export interface JobRunSummary {

		/** Required */
		applicationId: string;

		/** Required */
		id: string;
		name?: string;

		/** Required */
		arn: string;

		/** Required */
		createdBy: string;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;

		/** Required */
		executionRole: string;

		/** Required */
		state: JobRunState;

		/** Required */
		stateDetails: string;

		/** Required */
		releaseLabel: string;
		type?: string;
	}

	/** The summary of attributes associated with a job run. */
	export interface JobRunSummaryFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		executionRole: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<JobRunState | null | undefined>,

		/** Required */
		stateDetails: FormControl<string | null | undefined>,

		/** Required */
		releaseLabel: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobRunSummaryFormGroup() {
		return new FormGroup<JobRunSummaryFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			executionRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobRunState | null | undefined>(undefined, [Validators.required]),
			stateDetails: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartApplicationResponse {
	}
	export interface StartApplicationResponseFormProperties {
	}
	export function CreateStartApplicationResponseFormGroup() {
		return new FormGroup<StartApplicationResponseFormProperties>({
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

	export interface StartJobRunResponse {

		/** Required */
		applicationId: string;

		/** Required */
		jobRunId: string;

		/** Required */
		arn: string;
	}
	export interface StartJobRunResponseFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		jobRunId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateStartJobRunResponseFormGroup() {
		return new FormGroup<StartJobRunResponseFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobRunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopApplicationResponse {
	}
	export interface StopApplicationResponseFormProperties {
	}
	export function CreateStopApplicationResponseFormGroup() {
		return new FormGroup<StopApplicationResponseFormProperties>({
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

	export interface UpdateApplicationResponse {

		/** Required */
		application: Application;
	}
	export interface UpdateApplicationResponseFormProperties {
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
		});

	}

	export interface CancelJobRunRequest {
	}
	export interface CancelJobRunRequestFormProperties {
	}
	export function CreateCancelJobRunRequestFormGroup() {
		return new FormGroup<CancelJobRunRequestFormProperties>({
		});

	}

	export interface WorkerTypeSpecificationInputMap {
	}
	export interface WorkerTypeSpecificationInputMapFormProperties {
	}
	export function CreateWorkerTypeSpecificationInputMapFormGroup() {
		return new FormGroup<WorkerTypeSpecificationInputMapFormProperties>({
		});

	}

	export interface CreateApplicationRequest {
		name?: string;

		/** Required */
		releaseLabel: string;

		/** Required */
		type: string;

		/** Required */
		clientToken: string;
		initialCapacity?: InitialCapacityConfigMap;
		maximumCapacity?: MaximumAllowedResources;
		tags?: TagMap;
		autoStartConfiguration?: AutoStartConfig;
		autoStopConfiguration?: AutoStopConfig;
		networkConfiguration?: NetworkConfiguration;
		architecture?: Architecture;
		imageConfiguration?: ImageConfigurationInput;
		workerTypeSpecifications?: WorkerTypeSpecificationInputMap;
	}
	export interface CreateApplicationRequestFormProperties {
		name: FormControl<string | null | undefined>,

		/** Required */
		releaseLabel: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationRequest {
	}
	export interface DeleteApplicationRequestFormProperties {
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
		});

	}

	export interface GetApplicationRequest {
	}
	export interface GetApplicationRequestFormProperties {
	}
	export function CreateGetApplicationRequestFormGroup() {
		return new FormGroup<GetApplicationRequestFormProperties>({
		});

	}

	export interface GetDashboardForJobRunRequest {
	}
	export interface GetDashboardForJobRunRequestFormProperties {
	}
	export function CreateGetDashboardForJobRunRequestFormGroup() {
		return new FormGroup<GetDashboardForJobRunRequestFormProperties>({
		});

	}

	export interface GetJobRunRequest {
	}
	export interface GetJobRunRequestFormProperties {
	}
	export function CreateGetJobRunRequestFormGroup() {
		return new FormGroup<GetJobRunRequestFormProperties>({
		});

	}

	export interface ListApplicationsRequest {
	}
	export interface ListApplicationsRequestFormProperties {
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
		});

	}

	export interface ListJobRunsRequest {
	}
	export interface ListJobRunsRequestFormProperties {
	}
	export function CreateListJobRunsRequestFormGroup() {
		return new FormGroup<ListJobRunsRequestFormProperties>({
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

	export interface SensitivePropertiesMap {
	}
	export interface SensitivePropertiesMapFormProperties {
	}
	export function CreateSensitivePropertiesMapFormGroup() {
		return new FormGroup<SensitivePropertiesMapFormProperties>({
		});

	}

	export interface StartApplicationRequest {
	}
	export interface StartApplicationRequestFormProperties {
	}
	export function CreateStartApplicationRequestFormGroup() {
		return new FormGroup<StartApplicationRequestFormProperties>({
		});

	}

	export interface StartJobRunRequest {

		/** Required */
		clientToken: string;

		/** Required */
		executionRoleArn: string;
		jobDriver?: JobDriver;
		configurationOverrides?: ConfigurationOverrides;
		tags?: TagMap;
		executionTimeoutMinutes?: number | null;
		name?: string;
	}
	export interface StartJobRunRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		executionRoleArn: FormControl<string | null | undefined>,
		executionTimeoutMinutes: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateStartJobRunRequestFormGroup() {
		return new FormGroup<StartJobRunRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopApplicationRequest {
	}
	export interface StopApplicationRequestFormProperties {
	}
	export function CreateStopApplicationRequestFormGroup() {
		return new FormGroup<StopApplicationRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
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

	export interface UpdateApplicationRequest {

		/** Required */
		clientToken: string;
		initialCapacity?: InitialCapacityConfigMap;
		maximumCapacity?: MaximumAllowedResources;
		autoStartConfiguration?: AutoStartConfig;
		autoStopConfiguration?: AutoStopConfig;

		/** The network configuration for customer VPC connectivity. */
		networkConfiguration?: NetworkConfiguration;
		architecture?: Architecture;
		imageConfiguration?: ImageConfigurationInput;
		workerTypeSpecifications?: WorkerTypeSpecificationInputMap;
		releaseLabel?: string;
	}
	export interface UpdateApplicationRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
		releaseLabel: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specifications for a worker type. */
	export interface WorkerTypeSpecification {
		imageConfiguration?: ImageConfiguration;
	}

	/** The specifications for a worker type. */
	export interface WorkerTypeSpecificationFormProperties {
	}
	export function CreateWorkerTypeSpecificationFormGroup() {
		return new FormGroup<WorkerTypeSpecificationFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels a job run.
		 * Delete applications/{applicationId}/jobruns/{jobRunId}
		 * @param {string} applicationId The ID of the application on which the job run will be canceled.
		 * @param {string} jobRunId The ID of the job run to cancel.
		 * @return {CancelJobRunResponse} Success
		 */
		CancelJobRun(applicationId: string, jobRunId: string): Observable<CancelJobRunResponse> {
			return this.http.delete<CancelJobRunResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/jobruns/' + (jobRunId == null ? '' : encodeURIComponent(jobRunId)), {});
		}

		/**
		 * Displays detailed information about a job run.
		 * Get applications/{applicationId}/jobruns/{jobRunId}
		 * @param {string} applicationId The ID of the application on which the job run is submitted.
		 * @param {string} jobRunId The ID of the job run.
		 * @return {GetJobRunResponse} Success
		 */
		GetJobRun(applicationId: string, jobRunId: string): Observable<GetJobRunResponse> {
			return this.http.get<GetJobRunResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/jobruns/' + (jobRunId == null ? '' : encodeURIComponent(jobRunId)), {});
		}

		/**
		 * Creates an application.
		 * Post applications
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + 'applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists applications based on a set of parameters.
		 * Get applications
		 * @param {string} nextToken The token for the next set of application results.
		 * @param {number} maxResults The maximum number of applications that can be listed.
		 * @param {Array<ApplicationState>} states An optional filter for application states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(nextToken: string | null | undefined, maxResults: number | null | undefined, states: Array<ApplicationState> | null | undefined): Observable<ListApplicationsResponse> {
			return this.http.get<ListApplicationsResponse>(this.baseUri + 'applications?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&' + states?.map(z => `states=${z}`).join('&'), {});
		}

		/**
		 * Deletes an application. An application has to be in a stopped or created state in order to be deleted.
		 * Delete applications/{applicationId}
		 * @param {string} applicationId The ID of the application that will be deleted.
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(applicationId: string): Observable<DeleteApplicationResponse> {
			return this.http.delete<DeleteApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), {});
		}

		/**
		 * Displays detailed information about a specified application.
		 * Get applications/{applicationId}
		 * @param {string} applicationId The ID of the application that will be described.
		 * @return {GetApplicationResponse} Success
		 */
		GetApplication(applicationId: string): Observable<GetApplicationResponse> {
			return this.http.get<GetApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), {});
		}

		/**
		 * Updates a specified application. An application has to be in a stopped or created state in order to be updated.
		 * Patch applications/{applicationId}
		 * @param {string} applicationId The ID of the application to update.
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(applicationId: string, requestBody: UpdateApplicationPatchBody): Observable<UpdateApplicationResponse> {
			return this.http.patch<UpdateApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates and returns a URL that you can use to access the application UIs for a job run.</p> <p>For jobs in a running state, the application UI is a live user interface such as the Spark or Tez web UI. For completed jobs, the application UI is a persistent application user interface such as the Spark History Server or persistent Tez UI.</p> <note> <p>The URL is valid for one hour after you generate it. To access the application UI after that hour elapses, you must invoke the API again to generate a new URL.</p> </note>
		 * Get applications/{applicationId}/jobruns/{jobRunId}/dashboard
		 * @param {string} applicationId The ID of the application.
		 * @param {string} jobRunId The ID of the job run.
		 * @return {GetDashboardForJobRunResponse} Success
		 */
		GetDashboardForJobRun(applicationId: string, jobRunId: string): Observable<GetDashboardForJobRunResponse> {
			return this.http.get<GetDashboardForJobRunResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/jobruns/' + (jobRunId == null ? '' : encodeURIComponent(jobRunId)) + '/dashboard', {});
		}

		/**
		 * Lists job runs based on a set of parameters.
		 * Get applications/{applicationId}/jobruns
		 * @param {string} applicationId The ID of the application for which to list the job run.
		 * @param {string} nextToken The token for the next set of job run results.
		 * @param {number} maxResults The maximum number of job runs that can be listed.
		 * @param {Date} createdAtAfter The lower bound of the option to filter by creation date and time.
		 * @param {Date} createdAtBefore The upper bound of the option to filter by creation date and time.
		 * @param {Array<JobRunState>} states An optional filter for job run states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.
		 * @return {ListJobRunsResponse} Success
		 */
		ListJobRuns(applicationId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, createdAtAfter: Date | null | undefined, createdAtBefore: Date | null | undefined, states: Array<JobRunState> | null | undefined): Observable<ListJobRunsResponse> {
			return this.http.get<ListJobRunsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/jobruns&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&createdAtAfter=' + createdAtAfter?.toISOString() + '&createdAtBefore=' + createdAtBefore?.toISOString() + '&' + states?.map(z => `states=${z}`).join('&'), {});
		}

		/**
		 * Starts a job run.
		 * Post applications/{applicationId}/jobruns
		 * @param {string} applicationId The ID of the application on which to run the job.
		 * @return {StartJobRunResponse} Success
		 */
		StartJobRun(applicationId: string, requestBody: StartJobRunPostBody): Observable<StartJobRunResponse> {
			return this.http.post<StartJobRunResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/jobruns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags assigned to the resources.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a specified application and initializes initial capacity if configured.
		 * Post applications/{applicationId}/start
		 * @param {string} applicationId The ID of the application to start.
		 * @return {StartApplicationResponse} Success
		 */
		StartApplication(applicationId: string): Observable<StartApplicationResponse> {
			return this.http.post<StartApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/start', null, {});
		}

		/**
		 * Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
		 * Post applications/{applicationId}/stop
		 * @param {string} applicationId The ID of the application to stop.
		 * @return {StopApplicationResponse} Success
		 */
		StopApplication(applicationId: string): Observable<StopApplicationResponse> {
			return this.http.post<StopApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/stop', null, {});
		}

		/**
		 * Removes tags from resources.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource to list the tags for. Currently, the supported resources are Amazon EMR Serverless applications and job runs.
		 * @param {Array<string>} tagKeys The keys of the tags to be removed.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateApplicationPostBody {

		/**
		 * The name of the application.
		 * Max length: 64
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The Amazon EMR release associated with the application.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		releaseLabel: string;

		/**
		 * The type of application you want to start, such as Spark or Hive.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		type: string;

		/**
		 * The client idempotency token of the application to create. Its value must be unique for each request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/** The capacity to initialize when the application is created. */
		initialCapacity?: {[id: string]: InitialCapacityConfig };

		/** The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit. */
		maximumCapacity?: CreateApplicationPostBodyMaximumCapacity;

		/** The tags assigned to the application. */
		tags?: {[id: string]: string };

		/** The configuration for an application to automatically start on job submission. */
		autoStartConfiguration?: CreateApplicationPostBodyAutoStartConfiguration;

		/** The configuration for an application to automatically stop after a certain amount of time being idle. */
		autoStopConfiguration?: CreateApplicationPostBodyAutoStopConfiguration;

		/** The network configuration for customer VPC connectivity. */
		networkConfiguration?: CreateApplicationPostBodyNetworkConfiguration;

		/** The CPU architecture of an application. */
		architecture?: Architecture | null;

		/** The image configuration. */
		imageConfiguration?: CreateApplicationPostBodyImageConfiguration;

		/** The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types. */
		workerTypeSpecifications?: {[id: string]: WorkerTypeSpecificationInput };
	}
	export interface CreateApplicationPostBodyFormProperties {

		/**
		 * The name of the application.
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The Amazon EMR release associated with the application.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		releaseLabel: FormControl<string | null | undefined>,

		/**
		 * The type of application you want to start, such as Spark or Hive.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The client idempotency token of the application to create. Its value must be unique for each request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The capacity to initialize when the application is created. */
		initialCapacity: FormControl<{[id: string]: InitialCapacityConfig } | null | undefined>,

		/** The tags assigned to the application. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The CPU architecture of an application. */
		architecture: FormControl<Architecture | null | undefined>,

		/** The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types. */
		workerTypeSpecifications: FormControl<{[id: string]: WorkerTypeSpecificationInput } | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._/#-]+')]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._/-]+')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._-]+')]),
			initialCapacity: new FormControl<{[id: string]: InitialCapacityConfig } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
			workerTypeSpecifications: new FormControl<{[id: string]: WorkerTypeSpecificationInput } | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationPostBodyMaximumCapacity {
		cpu?: string;
		memory?: string;
		disk?: string;
	}
	export interface CreateApplicationPostBodyMaximumCapacityFormProperties {
		cpu: FormControl<string | null | undefined>,
		memory: FormControl<string | null | undefined>,
		disk: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyMaximumCapacityFormGroup() {
		return new FormGroup<CreateApplicationPostBodyMaximumCapacityFormProperties>({
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			disk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationPostBodyAutoStartConfiguration {
		enabled?: boolean | null;
	}
	export interface CreateApplicationPostBodyAutoStartConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyAutoStartConfigurationFormGroup() {
		return new FormGroup<CreateApplicationPostBodyAutoStartConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationPostBodyAutoStopConfiguration {
		enabled?: boolean | null;
		idleTimeoutMinutes?: number | null;
	}
	export interface CreateApplicationPostBodyAutoStopConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		idleTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyAutoStopConfigurationFormGroup() {
		return new FormGroup<CreateApplicationPostBodyAutoStopConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			idleTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationPostBodyNetworkConfiguration {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
	}
	export interface CreateApplicationPostBodyNetworkConfigurationFormProperties {
	}
	export function CreateCreateApplicationPostBodyNetworkConfigurationFormGroup() {
		return new FormGroup<CreateApplicationPostBodyNetworkConfigurationFormProperties>({
		});

	}

	export interface CreateApplicationPostBodyImageConfiguration {
		imageUri?: string;
	}
	export interface CreateApplicationPostBodyImageConfigurationFormProperties {
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyImageConfigurationFormGroup() {
		return new FormGroup<CreateApplicationPostBodyImageConfigurationFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationPatchBody {

		/**
		 * The client idempotency token of the application to update. Its value must be unique for each request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/** The capacity to initialize when the application is updated. */
		initialCapacity?: {[id: string]: InitialCapacityConfig };

		/** The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit. */
		maximumCapacity?: UpdateApplicationPatchBodyMaximumCapacity;

		/** The configuration for an application to automatically start on job submission. */
		autoStartConfiguration?: UpdateApplicationPatchBodyAutoStartConfiguration;

		/** The configuration for an application to automatically stop after a certain amount of time being idle. */
		autoStopConfiguration?: UpdateApplicationPatchBodyAutoStopConfiguration;

		/** The network configuration for customer VPC connectivity. */
		networkConfiguration?: UpdateApplicationPatchBodyNetworkConfiguration;

		/** The CPU architecture of an application. */
		architecture?: Architecture | null;

		/** The image configuration. */
		imageConfiguration?: UpdateApplicationPatchBodyImageConfiguration;

		/** The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types. */
		workerTypeSpecifications?: {[id: string]: WorkerTypeSpecificationInput };

		/**
		 * The Amazon EMR release label for the application. You can change the release label to use a different release of Amazon EMR.
		 * Max length: 64
		 * Min length: 1
		 */
		releaseLabel?: string | null;
	}
	export interface UpdateApplicationPatchBodyFormProperties {

		/**
		 * The client idempotency token of the application to update. Its value must be unique for each request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The capacity to initialize when the application is updated. */
		initialCapacity: FormControl<{[id: string]: InitialCapacityConfig } | null | undefined>,

		/** The CPU architecture of an application. */
		architecture: FormControl<Architecture | null | undefined>,

		/** The key-value pairs that specify worker type to <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include <code>Driver</code> and <code>Executor</code> for Spark applications and <code>HiveDriver</code> and <code>TezTask</code> for Hive applications. You can either set image details in this parameter for each worker type, or in <code>imageConfiguration</code> for all worker types. */
		workerTypeSpecifications: FormControl<{[id: string]: WorkerTypeSpecificationInput } | null | undefined>,

		/**
		 * The Amazon EMR release label for the application. You can change the release label to use a different release of Amazon EMR.
		 * Max length: 64
		 * Min length: 1
		 */
		releaseLabel: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._-]+')]),
			initialCapacity: new FormControl<{[id: string]: InitialCapacityConfig } | null | undefined>(undefined),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
			workerTypeSpecifications: new FormControl<{[id: string]: WorkerTypeSpecificationInput } | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._/-]+')]),
		});

	}

	export interface UpdateApplicationPatchBodyMaximumCapacity {
		cpu?: string;
		memory?: string;
		disk?: string;
	}
	export interface UpdateApplicationPatchBodyMaximumCapacityFormProperties {
		cpu: FormControl<string | null | undefined>,
		memory: FormControl<string | null | undefined>,
		disk: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyMaximumCapacityFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyMaximumCapacityFormProperties>({
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			disk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationPatchBodyAutoStartConfiguration {
		enabled?: boolean | null;
	}
	export interface UpdateApplicationPatchBodyAutoStartConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyAutoStartConfigurationFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyAutoStartConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationPatchBodyAutoStopConfiguration {
		enabled?: boolean | null;
		idleTimeoutMinutes?: number | null;
	}
	export interface UpdateApplicationPatchBodyAutoStopConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		idleTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyAutoStopConfigurationFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyAutoStopConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			idleTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationPatchBodyNetworkConfiguration {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
	}
	export interface UpdateApplicationPatchBodyNetworkConfigurationFormProperties {
	}
	export function CreateUpdateApplicationPatchBodyNetworkConfigurationFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyNetworkConfigurationFormProperties>({
		});

	}

	export interface UpdateApplicationPatchBodyImageConfiguration {
		imageUri?: string;
	}
	export interface UpdateApplicationPatchBodyImageConfigurationFormProperties {
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyImageConfigurationFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyImageConfigurationFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartJobRunPostBody {

		/**
		 * The client idempotency token of the job run to start. Its value must be unique for each request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/**
		 * The execution role ARN for the job run.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		executionRoleArn: string;

		/** The driver that the job runs on. */
		jobDriver?: StartJobRunPostBodyJobDriver;

		/** A configuration specification to be used to override existing configurations. */
		configurationOverrides?: StartJobRunPostBodyConfigurationOverrides;

		/** The tags assigned to the job run. */
		tags?: {[id: string]: string };

		/**
		 * The maximum duration for the job run to run. If the job run runs beyond this duration, it will be automatically cancelled.
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		executionTimeoutMinutes?: number | null;

		/**
		 * The optional job run name. This doesn't have to be unique.
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;
	}
	export interface StartJobRunPostBodyFormProperties {

		/**
		 * The client idempotency token of the job run to start. Its value must be unique for each request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The execution role ARN for the job run.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		executionRoleArn: FormControl<string | null | undefined>,

		/** The tags assigned to the job run. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The maximum duration for the job run to run. If the job run runs beyond this duration, it will be automatically cancelled.
		 * Minimum: 0
		 * Maximum: 1000000
		 */
		executionTimeoutMinutes: FormControl<number | null | undefined>,

		/**
		 * The optional job run name. This doesn't have to be unique.
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStartJobRunPostBodyFormGroup() {
		return new FormGroup<StartJobRunPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._-]+')]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			executionTimeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
		});

	}

	export interface StartJobRunPostBodyJobDriver {
		sparkSubmit?: SparkSubmit;
		hive?: Hive;
	}
	export interface StartJobRunPostBodyJobDriverFormProperties {
	}
	export function CreateStartJobRunPostBodyJobDriverFormGroup() {
		return new FormGroup<StartJobRunPostBodyJobDriverFormProperties>({
		});

	}

	export interface StartJobRunPostBodyConfigurationOverrides {
		applicationConfiguration?: Array<Configuration>;
		monitoringConfiguration?: MonitoringConfiguration;
	}
	export interface StartJobRunPostBodyConfigurationOverridesFormProperties {
	}
	export function CreateStartJobRunPostBodyConfigurationOverridesFormGroup() {
		return new FormGroup<StartJobRunPostBodyConfigurationOverridesFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource. A tag is an array of key-value pairs.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource. A tag is an array of key-value pairs.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

