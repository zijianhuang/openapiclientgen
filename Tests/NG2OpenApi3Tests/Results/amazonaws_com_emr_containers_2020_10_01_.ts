import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelJobRunResponse {
		id?: string;
		virtualClusterId?: string;
	}
	export interface CancelJobRunResponseFormProperties {
		id: FormControl<string | null | undefined>,
		virtualClusterId: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobRunResponseFormGroup() {
		return new FormGroup<CancelJobRunResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			virtualClusterId: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CreateJobTemplateResponse {
		id?: string;
		name?: string;
		arn?: string;
		createdAt?: Date;
	}
	export interface CreateJobTemplateResponseFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateJobTemplateResponseFormGroup() {
		return new FormGroup<CreateJobTemplateResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  A configuration specification to be used to override existing configurations. This data type allows job template parameters to be specified within. */
	export interface ParametricConfigurationOverrides {
		applicationConfiguration?: Array<Configuration>;
		monitoringConfiguration?: ParametricMonitoringConfiguration;
	}

	/**  A configuration specification to be used to override existing configurations. This data type allows job template parameters to be specified within. */
	export interface ParametricConfigurationOverridesFormProperties {
	}
	export function CreateParametricConfigurationOverridesFormGroup() {
		return new FormGroup<ParametricConfigurationOverridesFormProperties>({
		});

	}


	/** A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. */
	export interface Configuration {

		/** Required */
		classification: string;

		/** A set of properties specified within a configuration classification. */
		properties?: any;
		configurations?: Array<Configuration>;
	}

	/** A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. */
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


	/**  Configuration setting for monitoring. This data type allows job template parameters to be specified within. */
	export interface ParametricMonitoringConfiguration {
		persistentAppUI?: string;
		cloudWatchMonitoringConfiguration?: ParametricCloudWatchMonitoringConfiguration;
		s3MonitoringConfiguration?: ParametricS3MonitoringConfiguration;
	}

	/**  Configuration setting for monitoring. This data type allows job template parameters to be specified within. */
	export interface ParametricMonitoringConfigurationFormProperties {
		persistentAppUI: FormControl<string | null | undefined>,
	}
	export function CreateParametricMonitoringConfigurationFormGroup() {
		return new FormGroup<ParametricMonitoringConfigurationFormProperties>({
			persistentAppUI: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs. This data type allows job template parameters to be specified within. */
	export interface ParametricCloudWatchMonitoringConfiguration {
		logGroupName?: string;
		logStreamNamePrefix?: string;
	}

	/**  A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs. This data type allows job template parameters to be specified within. */
	export interface ParametricCloudWatchMonitoringConfigurationFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		logStreamNamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateParametricCloudWatchMonitoringConfigurationFormGroup() {
		return new FormGroup<ParametricCloudWatchMonitoringConfigurationFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. This data type allows job template parameters to be specified within. */
	export interface ParametricS3MonitoringConfiguration {
		logUri?: string;
	}

	/**  Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. This data type allows job template parameters to be specified within. */
	export interface ParametricS3MonitoringConfigurationFormProperties {
		logUri: FormControl<string | null | undefined>,
	}
	export function CreateParametricS3MonitoringConfigurationFormGroup() {
		return new FormGroup<ParametricS3MonitoringConfigurationFormProperties>({
			logUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver. */
	export interface JobDriver {
		sparkSubmitJobDriver?: SparkSubmitJobDriver;
		sparkSqlJobDriver?: SparkSqlJobDriver;
	}

	/** Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver. */
	export interface JobDriverFormProperties {
	}
	export function CreateJobDriverFormGroup() {
		return new FormGroup<JobDriverFormProperties>({
		});

	}


	/** The information about job driver for Spark submit. */
	export interface SparkSubmitJobDriver {

		/** Required */
		entryPoint: string;
		entryPointArguments?: Array<string>;
		sparkSubmitParameters?: string;
	}

	/** The information about job driver for Spark submit. */
	export interface SparkSubmitJobDriverFormProperties {

		/** Required */
		entryPoint: FormControl<string | null | undefined>,
		sparkSubmitParameters: FormControl<string | null | undefined>,
	}
	export function CreateSparkSubmitJobDriverFormGroup() {
		return new FormGroup<SparkSubmitJobDriverFormProperties>({
			entryPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sparkSubmitParameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The job driver for job type. */
	export interface SparkSqlJobDriver {
		entryPoint?: string;
		sparkSqlParameters?: string;
	}

	/** The job driver for job type. */
	export interface SparkSqlJobDriverFormProperties {
		entryPoint: FormControl<string | null | undefined>,
		sparkSqlParameters: FormControl<string | null | undefined>,
	}
	export function CreateSparkSqlJobDriverFormGroup() {
		return new FormGroup<SparkSqlJobDriverFormProperties>({
			entryPoint: new FormControl<string | null | undefined>(undefined),
			sparkSqlParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateParameterConfigurationMap {
	}
	export interface TemplateParameterConfigurationMapFormProperties {
	}
	export function CreateTemplateParameterConfigurationMapFormGroup() {
		return new FormGroup<TemplateParameterConfigurationMapFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateManagedEndpointResponse {
		id?: string;
		name?: string;
		arn?: string;
		virtualClusterId?: string;
	}
	export interface CreateManagedEndpointResponseFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		virtualClusterId: FormControl<string | null | undefined>,
	}
	export function CreateCreateManagedEndpointResponseFormGroup() {
		return new FormGroup<CreateManagedEndpointResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			virtualClusterId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration setting for monitoring. */
	export interface MonitoringConfiguration {
		persistentAppUI?: PersistentAppUI;
		cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;
		s3MonitoringConfiguration?: S3MonitoringConfiguration;
		containerLogRotationConfiguration?: ContainerLogRotationConfiguration;
	}

	/** Configuration setting for monitoring. */
	export interface MonitoringConfigurationFormProperties {
		persistentAppUI: FormControl<PersistentAppUI | null | undefined>,
	}
	export function CreateMonitoringConfigurationFormGroup() {
		return new FormGroup<MonitoringConfigurationFormProperties>({
			persistentAppUI: new FormControl<PersistentAppUI | null | undefined>(undefined),
		});

	}

	export enum PersistentAppUI { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs. */
	export interface CloudWatchMonitoringConfiguration {

		/** Required */
		logGroupName: string;
		logStreamNamePrefix?: string;
	}

	/** A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs. */
	export interface CloudWatchMonitoringConfigurationFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
		logStreamNamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchMonitoringConfigurationFormGroup() {
		return new FormGroup<CloudWatchMonitoringConfigurationFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. */
	export interface S3MonitoringConfiguration {

		/** Required */
		logUri: string;
	}

	/**  Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3. */
	export interface S3MonitoringConfigurationFormProperties {

		/** Required */
		logUri: FormControl<string | null | undefined>,
	}
	export function CreateS3MonitoringConfigurationFormGroup() {
		return new FormGroup<S3MonitoringConfigurationFormProperties>({
			logUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The settings for container log rotation. */
	export interface ContainerLogRotationConfiguration {

		/** Required */
		rotationSize: string;

		/** Required */
		maxFilesToKeep: number;
	}

	/** The settings for container log rotation. */
	export interface ContainerLogRotationConfigurationFormProperties {

		/** Required */
		rotationSize: FormControl<string | null | undefined>,

		/** Required */
		maxFilesToKeep: FormControl<number | null | undefined>,
	}
	export function CreateContainerLogRotationConfigurationFormGroup() {
		return new FormGroup<ContainerLogRotationConfigurationFormProperties>({
			rotationSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxFilesToKeep: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVirtualClusterResponse {
		id?: string;
		name?: string;
		arn?: string;
	}
	export interface CreateVirtualClusterResponseFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualClusterResponseFormGroup() {
		return new FormGroup<CreateVirtualClusterResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContainerProviderType { EKS = 'EKS' }


	/** The information about the container used for a job run or a managed endpoint. */
	export interface ContainerInfo {
		eksInfo?: EksInfo;
	}

	/** The information about the container used for a job run or a managed endpoint. */
	export interface ContainerInfoFormProperties {
	}
	export function CreateContainerInfoFormGroup() {
		return new FormGroup<ContainerInfoFormProperties>({
		});

	}


	/** The information about the Amazon EKS cluster. */
	export interface EksInfo {
		namespace?: string;
	}

	/** The information about the Amazon EKS cluster. */
	export interface EksInfoFormProperties {
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateEksInfoFormGroup() {
		return new FormGroup<EksInfoFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteJobTemplateResponse {
		id?: string;
	}
	export interface DeleteJobTemplateResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobTemplateResponseFormGroup() {
		return new FormGroup<DeleteJobTemplateResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteManagedEndpointResponse {
		id?: string;
		virtualClusterId?: string;
	}
	export interface DeleteManagedEndpointResponseFormProperties {
		id: FormControl<string | null | undefined>,
		virtualClusterId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteManagedEndpointResponseFormGroup() {
		return new FormGroup<DeleteManagedEndpointResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			virtualClusterId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteVirtualClusterResponse {
		id?: string;
	}
	export interface DeleteVirtualClusterResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVirtualClusterResponseFormGroup() {
		return new FormGroup<DeleteVirtualClusterResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobRunResponse {
		jobRun?: JobRun;
	}
	export interface DescribeJobRunResponseFormProperties {
	}
	export function CreateDescribeJobRunResponseFormGroup() {
		return new FormGroup<DescribeJobRunResponseFormProperties>({
		});

	}


	/** This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.  */
	export interface JobRun {
		id?: string;
		name?: string;
		virtualClusterId?: string;
		arn?: string;
		state?: JobRunState;
		clientToken?: string;
		executionRoleArn?: string;
		releaseLabel?: string;
		configurationOverrides?: ConfigurationOverrides;
		jobDriver?: JobDriver;
		createdAt?: Date;
		createdBy?: string;
		finishedAt?: Date;
		stateDetails?: string;
		failureReason?: FailureReason;
		tags?: TagMap;
		retryPolicyConfiguration?: RetryPolicyConfiguration;
		retryPolicyExecution?: RetryPolicyExecution;
	}

	/** This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.  */
	export interface JobRunFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		virtualClusterId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		state: FormControl<JobRunState | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		releaseLabel: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		finishedAt: FormControl<Date | null | undefined>,
		stateDetails: FormControl<string | null | undefined>,
		failureReason: FormControl<FailureReason | null | undefined>,
	}
	export function CreateJobRunFormGroup() {
		return new FormGroup<JobRunFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			virtualClusterId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<JobRunState | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			finishedAt: new FormControl<Date | null | undefined>(undefined),
			stateDetails: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<FailureReason | null | undefined>(undefined),
		});

	}

	export enum JobRunState { PENDING = 'PENDING', SUBMITTED = 'SUBMITTED', RUNNING = 'RUNNING', FAILED = 'FAILED', CANCELLED = 'CANCELLED', CANCEL_PENDING = 'CANCEL_PENDING', COMPLETED = 'COMPLETED' }


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

	export enum FailureReason { INTERNAL_ERROR = 'INTERNAL_ERROR', USER_ERROR = 'USER_ERROR', VALIDATION_ERROR = 'VALIDATION_ERROR', CLUSTER_UNAVAILABLE = 'CLUSTER_UNAVAILABLE' }


	/** The configuration of the retry policy that the job runs on. */
	export interface RetryPolicyConfiguration {

		/** Required */
		maxAttempts: number;
	}

	/** The configuration of the retry policy that the job runs on. */
	export interface RetryPolicyConfigurationFormProperties {

		/** Required */
		maxAttempts: FormControl<number | null | undefined>,
	}
	export function CreateRetryPolicyConfigurationFormGroup() {
		return new FormGroup<RetryPolicyConfigurationFormProperties>({
			maxAttempts: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The current status of the retry policy executed on the job. */
	export interface RetryPolicyExecution {

		/** Required */
		currentAttemptCount: number;
	}

	/** The current status of the retry policy executed on the job. */
	export interface RetryPolicyExecutionFormProperties {

		/** Required */
		currentAttemptCount: FormControl<number | null | undefined>,
	}
	export function CreateRetryPolicyExecutionFormGroup() {
		return new FormGroup<RetryPolicyExecutionFormProperties>({
			currentAttemptCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeJobTemplateResponse {
		jobTemplate?: JobTemplate;
	}
	export interface DescribeJobTemplateResponseFormProperties {
	}
	export function CreateDescribeJobTemplateResponseFormGroup() {
		return new FormGroup<DescribeJobTemplateResponseFormProperties>({
		});

	}


	/** This entity describes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request. */
	export interface JobTemplate {
		name?: string;
		id?: string;
		arn?: string;
		createdAt?: Date;
		createdBy?: string;
		tags?: TagMap;

		/** Required */
		jobTemplateData: JobTemplateData;
		kmsKeyArn?: string;
		decryptionError?: string;
	}

	/** This entity describes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request. */
	export interface JobTemplateFormProperties {
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
		decryptionError: FormControl<string | null | undefined>,
	}
	export function CreateJobTemplateFormGroup() {
		return new FormGroup<JobTemplateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			decryptionError: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The values of StartJobRun API requests used in job runs started using the job template. */
	export interface JobTemplateData {

		/** Required */
		executionRoleArn: string;

		/** Required */
		releaseLabel: string;
		configurationOverrides?: ParametricConfigurationOverrides;

		/**
		 * Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
		 * Required
		 */
		jobDriver: JobDriver;
		parameterConfiguration?: TemplateParameterConfigurationMap;
		jobTags?: TagMap;
	}

	/** The values of StartJobRun API requests used in job runs started using the job template. */
	export interface JobTemplateDataFormProperties {

		/** Required */
		executionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		releaseLabel: FormControl<string | null | undefined>,
	}
	export function CreateJobTemplateDataFormGroup() {
		return new FormGroup<JobTemplateDataFormProperties>({
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeManagedEndpointResponse {
		endpoint?: Endpoint;
	}
	export interface DescribeManagedEndpointResponseFormProperties {
	}
	export function CreateDescribeManagedEndpointResponseFormGroup() {
		return new FormGroup<DescribeManagedEndpointResponseFormProperties>({
		});

	}


	/** This entity represents the endpoint that is managed by Amazon EMR on EKS. */
	export interface Endpoint {
		id?: string;
		name?: string;
		arn?: string;
		virtualClusterId?: string;
		type?: string;
		state?: EndpointState;
		releaseLabel?: string;
		executionRoleArn?: string;
		certificateArn?: string;
		certificateAuthority?: Certificate;
		configurationOverrides?: ConfigurationOverrides;
		serverUrl?: string;
		createdAt?: Date;
		securityGroup?: string;
		subnetIds?: Array<string>;
		stateDetails?: string;
		failureReason?: FailureReason;
		tags?: TagMap;
	}

	/** This entity represents the endpoint that is managed by Amazon EMR on EKS. */
	export interface EndpointFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		virtualClusterId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		state: FormControl<EndpointState | null | undefined>,
		releaseLabel: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		serverUrl: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		securityGroup: FormControl<string | null | undefined>,
		stateDetails: FormControl<string | null | undefined>,
		failureReason: FormControl<FailureReason | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			virtualClusterId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EndpointState | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			serverUrl: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			securityGroup: new FormControl<string | null | undefined>(undefined),
			stateDetails: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<FailureReason | null | undefined>(undefined),
		});

	}

	export enum EndpointState { CREATING = 'CREATING', ACTIVE = 'ACTIVE', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', TERMINATED_WITH_ERRORS = 'TERMINATED_WITH_ERRORS' }


	/** The entity representing certificate data generated for managed endpoint. */
	export interface Certificate {
		certificateArn?: string;
		certificateData?: string;
	}

	/** The entity representing certificate data generated for managed endpoint. */
	export interface CertificateFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateData: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeVirtualClusterResponse {
		virtualCluster?: VirtualCluster;
	}
	export interface DescribeVirtualClusterResponseFormProperties {
	}
	export function CreateDescribeVirtualClusterResponseFormGroup() {
		return new FormGroup<DescribeVirtualClusterResponseFormProperties>({
		});

	}


	/** This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an Amazon EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service. */
	export interface VirtualCluster {
		id?: string;
		name?: string;
		arn?: string;
		state?: VirtualClusterState;
		containerProvider?: ContainerProvider;
		createdAt?: Date;
		tags?: TagMap;
	}

	/** This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an Amazon EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service. */
	export interface VirtualClusterFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		state: FormControl<VirtualClusterState | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateVirtualClusterFormGroup() {
		return new FormGroup<VirtualClusterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<VirtualClusterState | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum VirtualClusterState { RUNNING = 'RUNNING', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', ARRESTED = 'ARRESTED' }


	/** The information about the container provider. */
	export interface ContainerProvider {

		/** Required */
		type: ContainerProviderType;

		/** Required */
		id: string;
		info?: ContainerInfo;
	}

	/** The information about the container provider. */
	export interface ContainerProviderFormProperties {

		/** Required */
		type: FormControl<ContainerProviderType | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateContainerProviderFormGroup() {
		return new FormGroup<ContainerProviderFormProperties>({
			type: new FormControl<ContainerProviderType | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetManagedEndpointSessionCredentialsResponse {
		id?: string;
		credentials?: Credentials;
		expiresAt?: Date;
	}
	export interface GetManagedEndpointSessionCredentialsResponseFormProperties {
		id: FormControl<string | null | undefined>,
		expiresAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetManagedEndpointSessionCredentialsResponseFormGroup() {
		return new FormGroup<GetManagedEndpointSessionCredentialsResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The structure containing the session token being returned. */
	export interface Credentials {
		token?: string;
	}

	/** The structure containing the session token being returned. */
	export interface CredentialsFormProperties {
		token: FormControl<string | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestThrottledException {
	}
	export interface RequestThrottledExceptionFormProperties {
	}
	export function CreateRequestThrottledExceptionFormGroup() {
		return new FormGroup<RequestThrottledExceptionFormProperties>({
		});

	}

	export interface ListJobRunsResponse {
		jobRuns?: Array<JobRun>;
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

	export interface ListJobTemplatesResponse {
		templates?: Array<JobTemplate>;
		nextToken?: string;
	}
	export interface ListJobTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobTemplatesResponseFormGroup() {
		return new FormGroup<ListJobTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListManagedEndpointsResponse {
		endpoints?: Array<Endpoint>;
		nextToken?: string;
	}
	export interface ListManagedEndpointsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedEndpointsResponseFormGroup() {
		return new FormGroup<ListManagedEndpointsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ListVirtualClustersResponse {
		virtualClusters?: Array<VirtualCluster>;
		nextToken?: string;
	}
	export interface ListVirtualClustersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualClustersResponseFormGroup() {
		return new FormGroup<ListVirtualClustersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartJobRunResponse {
		id?: string;
		name?: string;
		arn?: string;
		virtualClusterId?: string;
	}
	export interface StartJobRunResponseFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		virtualClusterId: FormControl<string | null | undefined>,
	}
	export function CreateStartJobRunResponseFormGroup() {
		return new FormGroup<StartJobRunResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			virtualClusterId: new FormControl<string | null | undefined>(undefined),
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

	export interface CancelJobRunRequest {
	}
	export interface CancelJobRunRequestFormProperties {
	}
	export function CreateCancelJobRunRequestFormGroup() {
		return new FormGroup<CancelJobRunRequestFormProperties>({
		});

	}

	export interface CreateJobTemplateRequest {

		/** Required */
		name: string;

		/** Required */
		clientToken: string;

		/** Required */
		jobTemplateData: JobTemplateData;
		tags?: TagMap;
		kmsKeyArn?: string;
	}
	export interface CreateJobTemplateRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobTemplateRequestFormGroup() {
		return new FormGroup<CreateJobTemplateRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateManagedEndpointRequest {

		/** Required */
		name: string;

		/** Required */
		type: string;

		/** Required */
		releaseLabel: string;

		/** Required */
		executionRoleArn: string;
		certificateArn?: string;
		configurationOverrides?: ConfigurationOverrides;

		/** Required */
		clientToken: string;
		tags?: TagMap;
	}
	export interface CreateManagedEndpointRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		releaseLabel: FormControl<string | null | undefined>,

		/** Required */
		executionRoleArn: FormControl<string | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateManagedEndpointRequestFormGroup() {
		return new FormGroup<CreateManagedEndpointRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVirtualClusterRequest {

		/** Required */
		name: string;

		/** Required */
		containerProvider: ContainerProvider;

		/** Required */
		clientToken: string;
		tags?: TagMap;
	}
	export interface CreateVirtualClusterRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualClusterRequestFormGroup() {
		return new FormGroup<CreateVirtualClusterRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteJobTemplateRequest {
	}
	export interface DeleteJobTemplateRequestFormProperties {
	}
	export function CreateDeleteJobTemplateRequestFormGroup() {
		return new FormGroup<DeleteJobTemplateRequestFormProperties>({
		});

	}

	export interface DeleteManagedEndpointRequest {
	}
	export interface DeleteManagedEndpointRequestFormProperties {
	}
	export function CreateDeleteManagedEndpointRequestFormGroup() {
		return new FormGroup<DeleteManagedEndpointRequestFormProperties>({
		});

	}

	export interface DeleteVirtualClusterRequest {
	}
	export interface DeleteVirtualClusterRequestFormProperties {
	}
	export function CreateDeleteVirtualClusterRequestFormGroup() {
		return new FormGroup<DeleteVirtualClusterRequestFormProperties>({
		});

	}

	export interface DescribeJobRunRequest {
	}
	export interface DescribeJobRunRequestFormProperties {
	}
	export function CreateDescribeJobRunRequestFormGroup() {
		return new FormGroup<DescribeJobRunRequestFormProperties>({
		});

	}

	export interface DescribeJobTemplateRequest {
	}
	export interface DescribeJobTemplateRequestFormProperties {
	}
	export function CreateDescribeJobTemplateRequestFormGroup() {
		return new FormGroup<DescribeJobTemplateRequestFormProperties>({
		});

	}

	export interface DescribeManagedEndpointRequest {
	}
	export interface DescribeManagedEndpointRequestFormProperties {
	}
	export function CreateDescribeManagedEndpointRequestFormGroup() {
		return new FormGroup<DescribeManagedEndpointRequestFormProperties>({
		});

	}

	export interface DescribeVirtualClusterRequest {
	}
	export interface DescribeVirtualClusterRequestFormProperties {
	}
	export function CreateDescribeVirtualClusterRequestFormGroup() {
		return new FormGroup<DescribeVirtualClusterRequestFormProperties>({
		});

	}

	export interface GetManagedEndpointSessionCredentialsRequest {

		/** Required */
		executionRoleArn: string;

		/** Required */
		credentialType: string;
		durationInSeconds?: number | null;
		logContext?: string;
		clientToken?: string;
	}
	export interface GetManagedEndpointSessionCredentialsRequestFormProperties {

		/** Required */
		executionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		credentialType: FormControl<string | null | undefined>,
		durationInSeconds: FormControl<number | null | undefined>,
		logContext: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateGetManagedEndpointSessionCredentialsRequestFormGroup() {
		return new FormGroup<GetManagedEndpointSessionCredentialsRequestFormProperties>({
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			credentialType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
			logContext: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ListJobTemplatesRequest {
	}
	export interface ListJobTemplatesRequestFormProperties {
	}
	export function CreateListJobTemplatesRequestFormGroup() {
		return new FormGroup<ListJobTemplatesRequestFormProperties>({
		});

	}

	export interface ListManagedEndpointsRequest {
	}
	export interface ListManagedEndpointsRequestFormProperties {
	}
	export function CreateListManagedEndpointsRequestFormGroup() {
		return new FormGroup<ListManagedEndpointsRequestFormProperties>({
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

	export interface ListVirtualClustersRequest {
	}
	export interface ListVirtualClustersRequestFormProperties {
	}
	export function CreateListVirtualClustersRequestFormGroup() {
		return new FormGroup<ListVirtualClustersRequestFormProperties>({
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

	export interface TemplateParameterInputMap {
	}
	export interface TemplateParameterInputMapFormProperties {
	}
	export function CreateTemplateParameterInputMapFormGroup() {
		return new FormGroup<TemplateParameterInputMapFormProperties>({
		});

	}

	export interface StartJobRunRequest {
		name?: string;

		/** Required */
		clientToken: string;
		executionRoleArn?: string;
		releaseLabel?: string;
		jobDriver?: JobDriver;
		configurationOverrides?: ConfigurationOverrides;
		tags?: TagMap;
		jobTemplateId?: string;
		jobTemplateParameters?: TemplateParameterInputMap;
		retryPolicyConfiguration?: RetryPolicyConfiguration;
	}
	export interface StartJobRunRequestFormProperties {
		name: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		releaseLabel: FormControl<string | null | undefined>,
		jobTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateStartJobRunRequestFormGroup() {
		return new FormGroup<StartJobRunRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined),
			jobTemplateId: new FormControl<string | null | undefined>(undefined),
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

	export enum TemplateParameterDataType { NUMBER = 'NUMBER', STRING = 'STRING' }


	/** The configuration of a job template parameter. */
	export interface TemplateParameterConfiguration {
		type?: TemplateParameterDataType;
		defaultValue?: string;
	}

	/** The configuration of a job template parameter. */
	export interface TemplateParameterConfigurationFormProperties {
		type: FormControl<TemplateParameterDataType | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
	}
	export function CreateTemplateParameterConfigurationFormGroup() {
		return new FormGroup<TemplateParameterConfigurationFormProperties>({
			type: new FormControl<TemplateParameterDataType | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
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
		 * Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
		 * Delete virtualclusters/{virtualClusterId}/jobruns/{jobRunId}
		 * @param {string} jobRunId The ID of the job run to cancel.
		 * @param {string} virtualClusterId The ID of the virtual cluster for which the job run will be canceled.
		 * @return {CancelJobRunResponse} Success
		 */
		CancelJobRun(jobRunId: string, virtualClusterId: string): Observable<CancelJobRunResponse> {
			return this.http.delete<CancelJobRunResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/jobruns/' + (jobRunId == null ? '' : encodeURIComponent(jobRunId)), {});
		}

		/**
		 * Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
		 * Get virtualclusters/{virtualClusterId}/jobruns/{jobRunId}
		 * @param {string} jobRunId The ID of the job run request. 
		 * @param {string} virtualClusterId The ID of the virtual cluster for which the job run is submitted.
		 * @return {DescribeJobRunResponse} Success
		 */
		DescribeJobRun(jobRunId: string, virtualClusterId: string): Observable<DescribeJobRunResponse> {
			return this.http.get<DescribeJobRunResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/jobruns/' + (jobRunId == null ? '' : encodeURIComponent(jobRunId)), {});
		}

		/**
		 * Creates a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
		 * Post jobtemplates
		 * @return {CreateJobTemplateResponse} Success
		 */
		CreateJobTemplate(requestBody: CreateJobTemplatePostBody): Observable<CreateJobTemplateResponse> {
			return this.http.post<CreateJobTemplateResponse>(this.baseUri + 'jobtemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists job templates based on a set of parameters. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
		 * Get jobtemplates
		 * @param {Date} createdAfter The date and time after which the job templates were created.
		 * @param {Date} createdBefore  The date and time before which the job templates were created.
		 * @param {number} maxResults  The maximum number of job templates that can be listed.
		 * @param {string} nextToken  The token for the next set of job templates to return.
		 * @return {ListJobTemplatesResponse} Success
		 */
		ListJobTemplates(createdAfter: Date | null | undefined, createdBefore: Date | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListJobTemplatesResponse> {
			return this.http.get<ListJobTemplatesResponse>(this.baseUri + 'jobtemplates?createdAfter=' + createdAfter?.toISOString() + '&createdBefore=' + createdBefore?.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
		 * Post virtualclusters/{virtualClusterId}/endpoints
		 * @param {string} virtualClusterId The ID of the virtual cluster for which a managed endpoint is created.
		 * @return {CreateManagedEndpointResponse} Success
		 */
		CreateManagedEndpoint(virtualClusterId: string, requestBody: CreateManagedEndpointPostBody): Observable<CreateManagedEndpointResponse> {
			return this.http.post<CreateManagedEndpointResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/endpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
		 * Get virtualclusters/{virtualClusterId}/endpoints
		 * @param {string} virtualClusterId The ID of the virtual cluster.
		 * @param {Date} createdBefore The date and time before which the endpoints are created.
		 * @param {Date} createdAfter  The date and time after which the endpoints are created.
		 * @param {Array<string>} types The types of the managed endpoints.
		 * @param {Array<EndpointState>} states The states of the managed endpoints.
		 * @param {number} maxResults The maximum number of managed endpoints that can be listed.
		 * @param {string} nextToken  The token for the next set of managed endpoints to return. 
		 * @return {ListManagedEndpointsResponse} Success
		 */
		ListManagedEndpoints(virtualClusterId: string, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, types: Array<string> | null | undefined, states: Array<EndpointState> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListManagedEndpointsResponse> {
			return this.http.get<ListManagedEndpointsResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/endpoints&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&' + types?.map(z => `types=${encodeURIComponent(z)}`).join('&') + '&' + states?.map(z => `states=${z}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
		 * Post virtualclusters
		 * @return {CreateVirtualClusterResponse} Success
		 */
		CreateVirtualCluster(requestBody: CreateVirtualClusterPostBody): Observable<CreateVirtualClusterResponse> {
			return this.http.post<CreateVirtualClusterResponse>(this.baseUri + 'virtualclusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
		 * Get virtualclusters
		 * @param {string} containerProviderId The container provider ID of the virtual cluster.
		 * @param {ContainerProviderType} containerProviderType The container provider type of the virtual cluster. Amazon EKS is the only supported type as of now.
		 * @param {Date} createdAfter The date and time after which the virtual clusters are created.
		 * @param {Date} createdBefore The date and time before which the virtual clusters are created.
		 * @param {Array<VirtualClusterState>} states The states of the requested virtual clusters.
		 * @param {number} maxResults The maximum number of virtual clusters that can be listed.
		 * @param {string} nextToken The token for the next set of virtual clusters to return. 
		 * @return {ListVirtualClustersResponse} Success
		 */
		ListVirtualClusters(containerProviderId: string | null | undefined, containerProviderType: ContainerProviderType | null | undefined, createdAfter: Date | null | undefined, createdBefore: Date | null | undefined, states: Array<VirtualClusterState> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListVirtualClustersResponse> {
			return this.http.get<ListVirtualClustersResponse>(this.baseUri + 'virtualclusters?containerProviderId=' + (containerProviderId == null ? '' : encodeURIComponent(containerProviderId)) + '&containerProviderType=' + containerProviderType + '&createdAfter=' + createdAfter?.toISOString() + '&createdBefore=' + createdBefore?.toISOString() + '&' + states?.map(z => `states=${z}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes a job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
		 * Delete jobtemplates/{templateId}
		 * @param {string} templateId The ID of the job template that will be deleted.
		 * @return {DeleteJobTemplateResponse} Success
		 */
		DeleteJobTemplate(templateId: string): Observable<DeleteJobTemplateResponse> {
			return this.http.delete<DeleteJobTemplateResponse>(this.baseUri + 'jobtemplates/' + (templateId == null ? '' : encodeURIComponent(templateId)), {});
		}

		/**
		 * Displays detailed information about a specified job template. Job template stores values of StartJobRun API request in a template and can be used to start a job run. Job template allows two use cases: avoid repeating recurring StartJobRun API request values, enforcing certain values in StartJobRun API request.
		 * Get jobtemplates/{templateId}
		 * @param {string} templateId The ID of the job template that will be described.
		 * @return {DescribeJobTemplateResponse} Success
		 */
		DescribeJobTemplate(templateId: string): Observable<DescribeJobTemplateResponse> {
			return this.http.get<DescribeJobTemplateResponse>(this.baseUri + 'jobtemplates/' + (templateId == null ? '' : encodeURIComponent(templateId)), {});
		}

		/**
		 * Deletes a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
		 * Delete virtualclusters/{virtualClusterId}/endpoints/{endpointId}
		 * @param {string} endpointId The ID of the managed endpoint.
		 * @param {string} virtualClusterId The ID of the endpoint's virtual cluster.
		 * @return {DeleteManagedEndpointResponse} Success
		 */
		DeleteManagedEndpoint(endpointId: string, virtualClusterId: string): Observable<DeleteManagedEndpointResponse> {
			return this.http.delete<DeleteManagedEndpointResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/endpoints/' + (endpointId == null ? '' : encodeURIComponent(endpointId)), {});
		}

		/**
		 * Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.
		 * Get virtualclusters/{virtualClusterId}/endpoints/{endpointId}
		 * @param {string} endpointId This output displays ID of the managed endpoint.
		 * @param {string} virtualClusterId The ID of the endpoint's virtual cluster.
		 * @return {DescribeManagedEndpointResponse} Success
		 */
		DescribeManagedEndpoint(endpointId: string, virtualClusterId: string): Observable<DescribeManagedEndpointResponse> {
			return this.http.get<DescribeManagedEndpointResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/endpoints/' + (endpointId == null ? '' : encodeURIComponent(endpointId)), {});
		}

		/**
		 * Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
		 * Delete virtualclusters/{virtualClusterId}
		 * @param {string} virtualClusterId The ID of the virtual cluster that will be deleted.
		 * @return {DeleteVirtualClusterResponse} Success
		 */
		DeleteVirtualCluster(virtualClusterId: string): Observable<DeleteVirtualClusterResponse> {
			return this.http.delete<DeleteVirtualClusterResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)), {});
		}

		/**
		 * Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
		 * Get virtualclusters/{virtualClusterId}
		 * @param {string} virtualClusterId The ID of the virtual cluster that will be described.
		 * @return {DescribeVirtualClusterResponse} Success
		 */
		DescribeVirtualCluster(virtualClusterId: string): Observable<DescribeVirtualClusterResponse> {
			return this.http.get<DescribeVirtualClusterResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)), {});
		}

		/**
		 * Generate a session token to connect to a managed endpoint.
		 * Post virtualclusters/{virtualClusterId}/endpoints/{endpointId}/credentials
		 * @param {string} endpointId The ARN of the managed endpoint for which the request is submitted. 
		 * @param {string} virtualClusterId The ARN of the Virtual Cluster which the Managed Endpoint belongs to. 
		 * @return {GetManagedEndpointSessionCredentialsResponse} Success
		 */
		GetManagedEndpointSessionCredentials(endpointId: string, virtualClusterId: string, requestBody: GetManagedEndpointSessionCredentialsPostBody): Observable<GetManagedEndpointSessionCredentialsResponse> {
			return this.http.post<GetManagedEndpointSessionCredentialsResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/endpoints/' + (endpointId == null ? '' : encodeURIComponent(endpointId)) + '/credentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
		 * Get virtualclusters/{virtualClusterId}/jobruns
		 * @param {string} virtualClusterId The ID of the virtual cluster for which to list the job run. 
		 * @param {Date} createdBefore The date and time before which the job runs were submitted.
		 * @param {Date} createdAfter The date and time after which the job runs were submitted.
		 * @param {string} name The name of the job run.
		 * @param {Array<JobRunState>} states The states of the job run.
		 * @param {number} maxResults The maximum number of job runs that can be listed.
		 * @param {string} nextToken The token for the next set of job runs to return.
		 * @return {ListJobRunsResponse} Success
		 */
		ListJobRuns(virtualClusterId: string, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, name: string | null | undefined, states: Array<JobRunState> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListJobRunsResponse> {
			return this.http.get<ListJobRunsResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/jobruns&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&' + states?.map(z => `states=${z}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
		 * Post virtualclusters/{virtualClusterId}/jobruns
		 * @param {string} virtualClusterId The virtual cluster ID for which the job run request is submitted.
		 * @return {StartJobRunResponse} Success
		 */
		StartJobRun(virtualClusterId: string, requestBody: StartJobRunPostBody): Observable<StartJobRunResponse> {
			return this.http.post<StartJobRunResponse>(this.baseUri + 'virtualclusters/' + (virtualClusterId == null ? '' : encodeURIComponent(virtualClusterId)) + '/jobruns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags assigned to the resources.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of tagged resources.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of resources.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from resources.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of resources.
		 * @param {Array<string>} tagKeys The tag keys of the resources.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateJobTemplatePostBody {

		/**
		 * The specified name of the job template.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: string;

		/**
		 * The client token of the job template.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/**
		 * The values of StartJobRun API requests used in job runs started using the job template.
		 * Required
		 */
		jobTemplateData: CreateJobTemplatePostBodyJobTemplateData;

		/** The tags that are associated with the job template. */
		tags?: {[id: string]: string };

		/**
		 * The KMS key ARN used to encrypt the job template.
		 * Max length: 2048
		 * Min length: 3
		 */
		kmsKeyArn?: string | null;
	}
	export interface CreateJobTemplatePostBodyFormProperties {

		/**
		 * The specified name of the job template.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The client token of the job template.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags that are associated with the job template. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The KMS key ARN used to encrypt the job template.
		 * Max length: 2048
		 * Min length: 3
		 */
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobTemplatePostBodyFormGroup() {
		return new FormGroup<CreateJobTemplatePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[\.\-_/#A-Za-z0-9]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.*\S.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(2048), Validators.pattern('^(arn:(aws[a-zA-Z0-9-]*):kms:.+:(\d{12})?:key\/[(0-9a-zA-Z)-?]+|\$\{[a-zA-Z]\w*\})$')]),
		});

	}

	export interface CreateJobTemplatePostBodyJobTemplateData {
		executionRoleArn?: string;
		releaseLabel?: string;
		configurationOverrides?: ParametricConfigurationOverrides;

		/** Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver. */
		jobDriver?: JobDriver;
		parameterConfiguration?: TemplateParameterConfigurationMap;
		jobTags?: TagMap;
	}
	export interface CreateJobTemplatePostBodyJobTemplateDataFormProperties {
		executionRoleArn: FormControl<string | null | undefined>,
		releaseLabel: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobTemplatePostBodyJobTemplateDataFormGroup() {
		return new FormGroup<CreateJobTemplatePostBodyJobTemplateDataFormProperties>({
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			releaseLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateManagedEndpointPostBody {

		/**
		 * The name of the managed endpoint.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: string;

		/**
		 * The type of the managed endpoint.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		type: string;

		/**
		 * The Amazon EMR release version.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		releaseLabel: string;

		/**
		 * The ARN of the execution role.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		executionRoleArn: string;

		/**
		 * The certificate ARN provided by users for the managed endpoint. This field is under deprecation and will be removed in future releases.
		 * Max length: 2048
		 * Min length: 44
		 */
		certificateArn?: string | null;

		/** A configuration specification to be used to override existing configurations. */
		configurationOverrides?: CreateManagedEndpointPostBodyConfigurationOverrides;

		/**
		 * The client idempotency token for this create call.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/** The tags of the managed endpoint. */
		tags?: {[id: string]: string };
	}
	export interface CreateManagedEndpointPostBodyFormProperties {

		/**
		 * The name of the managed endpoint.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of the managed endpoint.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The Amazon EMR release version.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		releaseLabel: FormControl<string | null | undefined>,

		/**
		 * The ARN of the execution role.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		executionRoleArn: FormControl<string | null | undefined>,

		/**
		 * The certificate ARN provided by users for the managed endpoint. This field is under deprecation and will be removed in future releases.
		 * Max length: 2048
		 * Min length: 44
		 */
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * The client idempotency token for this create call.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags of the managed endpoint. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateManagedEndpointPostBodyFormGroup() {
		return new FormGroup<CreateManagedEndpointPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[\.\-_/#A-Za-z0-9]+')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.*\S.*')]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[\.\-_/A-Za-z0-9]+')]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$')]),
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(44), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-zA-Z0-9-]*):acm:.+:(\d{12}):certificate/.+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.*\S.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateManagedEndpointPostBodyConfigurationOverrides {
		applicationConfiguration?: Array<Configuration>;
		monitoringConfiguration?: MonitoringConfiguration;
	}
	export interface CreateManagedEndpointPostBodyConfigurationOverridesFormProperties {
	}
	export function CreateCreateManagedEndpointPostBodyConfigurationOverridesFormGroup() {
		return new FormGroup<CreateManagedEndpointPostBodyConfigurationOverridesFormProperties>({
		});

	}

	export interface CreateVirtualClusterPostBody {

		/**
		 * The specified name of the virtual cluster.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: string;

		/**
		 * The information about the container provider.
		 * Required
		 */
		containerProvider: CreateVirtualClusterPostBodyContainerProvider;

		/**
		 * The client token of the virtual cluster.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/** The tags assigned to the virtual cluster. */
		tags?: {[id: string]: string };
	}
	export interface CreateVirtualClusterPostBodyFormProperties {

		/**
		 * The specified name of the virtual cluster.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The client token of the virtual cluster.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags assigned to the virtual cluster. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateVirtualClusterPostBodyFormGroup() {
		return new FormGroup<CreateVirtualClusterPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[\.\-_/#A-Za-z0-9]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.*\S.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateVirtualClusterPostBodyContainerProvider {
		type?: ContainerProviderType;
		id?: string;
		info?: ContainerInfo;
	}
	export interface CreateVirtualClusterPostBodyContainerProviderFormProperties {
		type: FormControl<ContainerProviderType | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualClusterPostBodyContainerProviderFormGroup() {
		return new FormGroup<CreateVirtualClusterPostBodyContainerProviderFormProperties>({
			type: new FormControl<ContainerProviderType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetManagedEndpointSessionCredentialsPostBody {

		/**
		 * The IAM Execution Role ARN that will be used by the job run.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		executionRoleArn: string;

		/**
		 * Type of the token requested. Currently supported and default value of this field is “TOKEN.”
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		credentialType: string;

		/** Duration in seconds for which the session token is valid. The default duration is 15 minutes and the maximum is 12 hours. */
		durationInSeconds?: number | null;

		/**
		 * String identifier used to separate sections of the execution logs uploaded to S3.
		 * Max length: 63
		 * Min length: 3
		 */
		logContext?: string | null;

		/**
		 * The client idempotency token of the job run request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface GetManagedEndpointSessionCredentialsPostBodyFormProperties {

		/**
		 * The IAM Execution Role ARN that will be used by the job run.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		executionRoleArn: FormControl<string | null | undefined>,

		/**
		 * Type of the token requested. Currently supported and default value of this field is “TOKEN.”
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		credentialType: FormControl<string | null | undefined>,

		/** Duration in seconds for which the session token is valid. The default duration is 15 minutes and the maximum is 12 hours. */
		durationInSeconds: FormControl<number | null | undefined>,

		/**
		 * String identifier used to separate sections of the execution logs uploaded to S3.
		 * Max length: 63
		 * Min length: 3
		 */
		logContext: FormControl<string | null | undefined>,

		/**
		 * The client idempotency token of the job run request.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateGetManagedEndpointSessionCredentialsPostBodyFormGroup() {
		return new FormGroup<GetManagedEndpointSessionCredentialsPostBodyFormProperties>({
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$')]),
			credentialType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^.*\S.*$')]),
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
			logContext: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^((?!.*-s3alias)(?!xn--.*)[a-z0-9][-a-z0-9.]*)?[a-z0-9]$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.*\S.*')]),
		});

	}

	export interface StartJobRunPostBody {

		/**
		 * The name of the job run.
		 * Max length: 64
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The client idempotency token of the job run request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/**
		 * The execution role ARN for the job run.
		 * Max length: 2048
		 * Min length: 20
		 */
		executionRoleArn?: string | null;

		/**
		 * The Amazon EMR release version to use for the job run.
		 * Max length: 64
		 * Min length: 1
		 */
		releaseLabel?: string | null;

		/** Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver. */
		jobDriver?: StartJobRunPostBodyJobDriver;

		/** A configuration specification to be used to override existing configurations. */
		configurationOverrides?: StartJobRunPostBodyConfigurationOverrides;

		/** The tags assigned to job runs. */
		tags?: {[id: string]: string };

		/**
		 * The job template ID to be used to start the job run.
		 * Max length: 64
		 * Min length: 1
		 */
		jobTemplateId?: string | null;

		/** The values of job template parameters to start a job run. */
		jobTemplateParameters?: {[id: string]: string };

		/** The configuration of the retry policy that the job runs on. */
		retryPolicyConfiguration?: StartJobRunPostBodyRetryPolicyConfiguration;
	}
	export interface StartJobRunPostBodyFormProperties {

		/**
		 * The name of the job run.
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The client idempotency token of the job run request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The execution role ARN for the job run.
		 * Max length: 2048
		 * Min length: 20
		 */
		executionRoleArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon EMR release version to use for the job run.
		 * Max length: 64
		 * Min length: 1
		 */
		releaseLabel: FormControl<string | null | undefined>,

		/** The tags assigned to job runs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The job template ID to be used to start the job run.
		 * Max length: 64
		 * Min length: 1
		 */
		jobTemplateId: FormControl<string | null | undefined>,

		/** The values of job template parameters to start a job run. */
		jobTemplateParameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartJobRunPostBodyFormGroup() {
		return new FormGroup<StartJobRunPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[\.\-_/#A-Za-z0-9]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('.*\S.*')]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$')]),
			releaseLabel: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[\.\-_/A-Za-z0-9]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			jobTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[0-9a-z]+')]),
			jobTemplateParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartJobRunPostBodyJobDriver {
		sparkSubmitJobDriver?: SparkSubmitJobDriver;
		sparkSqlJobDriver?: SparkSqlJobDriver;
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

	export interface StartJobRunPostBodyRetryPolicyConfiguration {
		maxAttempts?: number | null;
	}
	export interface StartJobRunPostBodyRetryPolicyConfigurationFormProperties {
		maxAttempts: FormControl<number | null | undefined>,
	}
	export function CreateStartJobRunPostBodyRetryPolicyConfigurationFormGroup() {
		return new FormGroup<StartJobRunPostBodyRetryPolicyConfigurationFormProperties>({
			maxAttempts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags assigned to resources.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags assigned to resources.
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

