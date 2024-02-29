import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelJobResponse {
	}
	export interface CancelJobResponseFormProperties {
	}
	export function CreateCancelJobResponseFormGroup() {
		return new FormGroup<CancelJobResponseFormProperties>({
		});

	}

	export interface ClientException {
	}
	export interface ClientExceptionFormProperties {
	}
	export function CreateClientExceptionFormGroup() {
		return new FormGroup<ClientExceptionFormProperties>({
		});

	}

	export interface ServerException {
	}
	export interface ServerExceptionFormProperties {
	}
	export function CreateServerExceptionFormGroup() {
		return new FormGroup<ServerExceptionFormProperties>({
		});

	}

	export interface CreateComputeEnvironmentResponse {
		computeEnvironmentName?: string;
		computeEnvironmentArn?: string;
	}
	export interface CreateComputeEnvironmentResponseFormProperties {
		computeEnvironmentName: FormControl<string | null | undefined>,
		computeEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputeEnvironmentResponseFormGroup() {
		return new FormGroup<CreateComputeEnvironmentResponseFormProperties>({
			computeEnvironmentName: new FormControl<string | null | undefined>(undefined),
			computeEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CRType { EC2 = 'EC2', SPOT = 'SPOT', FARGATE = 'FARGATE', FARGATE_SPOT = 'FARGATE_SPOT' }

	export enum CRAllocationStrategy { BEST_FIT = 'BEST_FIT', BEST_FIT_PROGRESSIVE = 'BEST_FIT_PROGRESSIVE', SPOT_CAPACITY_OPTIMIZED = 'SPOT_CAPACITY_OPTIMIZED', SPOT_PRICE_CAPACITY_OPTIMIZED = 'SPOT_PRICE_CAPACITY_OPTIMIZED' }

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}


	/** <p>An object that represents a launch template that's associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.</p> <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be used.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note> */
	export interface LaunchTemplateSpecification {
		launchTemplateId?: string;
		launchTemplateName?: string;
		version?: string;
	}

	/** <p>An object that represents a launch template that's associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.</p> <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be used.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note> */
	export interface LaunchTemplateSpecificationFormProperties {
		launchTemplateId: FormControl<string | null | undefined>,
		launchTemplateName: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateLaunchTemplateSpecificationFormGroup() {
		return new FormGroup<LaunchTemplateSpecificationFormProperties>({
			launchTemplateId: new FormControl<string | null | undefined>(undefined),
			launchTemplateName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>).</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note> */
	export interface Ec2Configuration {

		/** Required */
		imageType: string;
		imageIdOverride?: string;
		imageKubernetesVersion?: string;
	}

	/** <p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL2</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>).</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note> */
	export interface Ec2ConfigurationFormProperties {

		/** Required */
		imageType: FormControl<string | null | undefined>,
		imageIdOverride: FormControl<string | null | undefined>,
		imageKubernetesVersion: FormControl<string | null | undefined>,
	}
	export function CreateEc2ConfigurationFormGroup() {
		return new FormGroup<Ec2ConfigurationFormProperties>({
			imageType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageIdOverride: new FormControl<string | null | undefined>(undefined),
			imageKubernetesVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobQueueResponse {

		/** Required */
		jobQueueName: string;

		/** Required */
		jobQueueArn: string;
	}
	export interface CreateJobQueueResponseFormProperties {

		/** Required */
		jobQueueName: FormControl<string | null | undefined>,

		/** Required */
		jobQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobQueueResponseFormGroup() {
		return new FormGroup<CreateJobQueueResponseFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobQueueArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The order that compute environments are tried in for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note> */
	export interface ComputeEnvironmentOrder {

		/** Required */
		order: number;

		/** Required */
		computeEnvironment: string;
	}

	/** <p>The order that compute environments are tried in for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note> */
	export interface ComputeEnvironmentOrderFormProperties {

		/** Required */
		order: FormControl<number | null | undefined>,

		/** Required */
		computeEnvironment: FormControl<string | null | undefined>,
	}
	export function CreateComputeEnvironmentOrderFormGroup() {
		return new FormGroup<ComputeEnvironmentOrderFormProperties>({
			order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			computeEnvironment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSchedulingPolicyResponse {

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}
	export interface CreateSchedulingPolicyResponseFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchedulingPolicyResponseFormGroup() {
		return new FormGroup<CreateSchedulingPolicyResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>. */
	export interface ShareAttributes {

		/** Required */
		shareIdentifier: string;
		weightFactor?: number;
	}

	/** Specifies the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>. */
	export interface ShareAttributesFormProperties {

		/** Required */
		shareIdentifier: FormControl<string | null | undefined>,
		weightFactor: FormControl<number | null | undefined>,
	}
	export function CreateShareAttributesFormGroup() {
		return new FormGroup<ShareAttributesFormProperties>({
			shareIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weightFactor: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteComputeEnvironmentResponse {
	}
	export interface DeleteComputeEnvironmentResponseFormProperties {
	}
	export function CreateDeleteComputeEnvironmentResponseFormGroup() {
		return new FormGroup<DeleteComputeEnvironmentResponseFormProperties>({
		});

	}

	export interface DeleteJobQueueResponse {
	}
	export interface DeleteJobQueueResponseFormProperties {
	}
	export function CreateDeleteJobQueueResponseFormGroup() {
		return new FormGroup<DeleteJobQueueResponseFormProperties>({
		});

	}

	export interface DeleteSchedulingPolicyResponse {
	}
	export interface DeleteSchedulingPolicyResponseFormProperties {
	}
	export function CreateDeleteSchedulingPolicyResponseFormGroup() {
		return new FormGroup<DeleteSchedulingPolicyResponseFormProperties>({
		});

	}

	export interface DeregisterJobDefinitionResponse {
	}
	export interface DeregisterJobDefinitionResponseFormProperties {
	}
	export function CreateDeregisterJobDefinitionResponseFormGroup() {
		return new FormGroup<DeregisterJobDefinitionResponseFormProperties>({
		});

	}

	export interface DescribeComputeEnvironmentsResponse {
		computeEnvironments?: Array<ComputeEnvironmentDetail>;
		nextToken?: string;
	}
	export interface DescribeComputeEnvironmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComputeEnvironmentsResponseFormGroup() {
		return new FormGroup<DescribeComputeEnvironmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents an Batch compute environment. */
	export interface ComputeEnvironmentDetail {

		/** Required */
		computeEnvironmentName: string;

		/** Required */
		computeEnvironmentArn: string;
		unmanagedvCpus?: number | null;
		ecsClusterArn?: string;
		tags?: TagrisTagsMap;
		type?: CEType;
		state?: CEState;
		status?: CEStatus;
		statusReason?: string;
		computeResources?: ComputeResource;
		serviceRole?: string;
		updatePolicy?: UpdatePolicy;
		eksConfiguration?: EksConfiguration;
		containerOrchestrationType?: OrchestrationType;
		uuid?: string;
	}

	/** An object that represents an Batch compute environment. */
	export interface ComputeEnvironmentDetailFormProperties {

		/** Required */
		computeEnvironmentName: FormControl<string | null | undefined>,

		/** Required */
		computeEnvironmentArn: FormControl<string | null | undefined>,
		unmanagedvCpus: FormControl<number | null | undefined>,
		ecsClusterArn: FormControl<string | null | undefined>,
		type: FormControl<CEType | null | undefined>,
		state: FormControl<CEState | null | undefined>,
		status: FormControl<CEStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
		containerOrchestrationType: FormControl<OrchestrationType | null | undefined>,
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateComputeEnvironmentDetailFormGroup() {
		return new FormGroup<ComputeEnvironmentDetailFormProperties>({
			computeEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			computeEnvironmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unmanagedvCpus: new FormControl<number | null | undefined>(undefined),
			ecsClusterArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CEType | null | undefined>(undefined),
			state: new FormControl<CEState | null | undefined>(undefined),
			status: new FormControl<CEStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
			containerOrchestrationType: new FormControl<OrchestrationType | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagrisTagsMap {
	}
	export interface TagrisTagsMapFormProperties {
	}
	export function CreateTagrisTagsMapFormGroup() {
		return new FormGroup<TagrisTagsMapFormProperties>({
		});

	}

	export enum CEType { MANAGED = 'MANAGED', UNMANAGED = 'UNMANAGED' }

	export enum CEState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum CEStatus { CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', DELETED = 'DELETED', VALID = 'VALID', INVALID = 'INVALID' }


	/** An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>. */
	export interface ComputeResource {

		/** Required */
		type: CRType;
		allocationStrategy?: CRAllocationStrategy;
		minvCpus?: number | null;

		/** Required */
		maxvCpus: number;
		desiredvCpus?: number | null;
		instanceTypes?: Array<string>;
		imageId?: string;

		/** Required */
		subnets: Array<string>;
		securityGroupIds?: Array<string>;
		ec2KeyPair?: string;
		instanceRole?: string;
		tags?: TagsMap;
		placementGroup?: string;
		bidPercentage?: number | null;
		spotIamFleetRole?: string;
		launchTemplate?: LaunchTemplateSpecification;
		ec2Configuration?: Array<Ec2Configuration>;
	}

	/** An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>. */
	export interface ComputeResourceFormProperties {

		/** Required */
		type: FormControl<CRType | null | undefined>,
		allocationStrategy: FormControl<CRAllocationStrategy | null | undefined>,
		minvCpus: FormControl<number | null | undefined>,

		/** Required */
		maxvCpus: FormControl<number | null | undefined>,
		desiredvCpus: FormControl<number | null | undefined>,
		imageId: FormControl<string | null | undefined>,
		ec2KeyPair: FormControl<string | null | undefined>,
		instanceRole: FormControl<string | null | undefined>,
		placementGroup: FormControl<string | null | undefined>,
		bidPercentage: FormControl<number | null | undefined>,
		spotIamFleetRole: FormControl<string | null | undefined>,
	}
	export function CreateComputeResourceFormGroup() {
		return new FormGroup<ComputeResourceFormProperties>({
			type: new FormControl<CRType | null | undefined>(undefined, [Validators.required]),
			allocationStrategy: new FormControl<CRAllocationStrategy | null | undefined>(undefined),
			minvCpus: new FormControl<number | null | undefined>(undefined),
			maxvCpus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			desiredvCpus: new FormControl<number | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			ec2KeyPair: new FormControl<string | null | undefined>(undefined),
			instanceRole: new FormControl<string | null | undefined>(undefined),
			placementGroup: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<number | null | undefined>(undefined),
			spotIamFleetRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. */
	export interface UpdatePolicy {
		terminateJobsOnUpdate?: boolean | null;
		jobExecutionTimeoutMinutes?: number | null;
	}

	/** Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. */
	export interface UpdatePolicyFormProperties {
		terminateJobsOnUpdate: FormControl<boolean | null | undefined>,
		jobExecutionTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePolicyFormGroup() {
		return new FormGroup<UpdatePolicyFormProperties>({
			terminateJobsOnUpdate: new FormControl<boolean | null | undefined>(undefined),
			jobExecutionTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created. */
	export interface EksConfiguration {

		/** Required */
		eksClusterArn: string;

		/** Required */
		kubernetesNamespace: string;
	}

	/** Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created. */
	export interface EksConfigurationFormProperties {

		/** Required */
		eksClusterArn: FormControl<string | null | undefined>,

		/** Required */
		kubernetesNamespace: FormControl<string | null | undefined>,
	}
	export function CreateEksConfigurationFormGroup() {
		return new FormGroup<EksConfigurationFormProperties>({
			eksClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kubernetesNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OrchestrationType { ECS = 'ECS', EKS = 'EKS' }

	export interface DescribeJobDefinitionsResponse {
		jobDefinitions?: Array<JobDefinition>;
		nextToken?: string;
	}
	export interface DescribeJobDefinitionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobDefinitionsResponseFormGroup() {
		return new FormGroup<DescribeJobDefinitionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents an Batch job definition. */
	export interface JobDefinition {

		/** Required */
		jobDefinitionName: string;

		/** Required */
		jobDefinitionArn: string;

		/** Required */
		revision: number;
		status?: string;

		/** Required */
		type: string;
		schedulingPriority?: number | null;
		parameters?: ParametersMap;
		retryStrategy?: RetryStrategy;
		containerProperties?: ContainerProperties;
		timeout?: JobTimeout;
		nodeProperties?: NodeProperties;
		tags?: TagrisTagsMap;
		propagateTags?: boolean | null;
		platformCapabilities?: Array<PlatformCapability>;
		eksProperties?: EksProperties;
		containerOrchestrationType?: OrchestrationType;
	}

	/** An object that represents an Batch job definition. */
	export interface JobDefinitionFormProperties {

		/** Required */
		jobDefinitionName: FormControl<string | null | undefined>,

		/** Required */
		jobDefinitionArn: FormControl<string | null | undefined>,

		/** Required */
		revision: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
		schedulingPriority: FormControl<number | null | undefined>,
		propagateTags: FormControl<boolean | null | undefined>,
		containerOrchestrationType: FormControl<OrchestrationType | null | undefined>,
	}
	export function CreateJobDefinitionFormGroup() {
		return new FormGroup<JobDefinitionFormProperties>({
			jobDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedulingPriority: new FormControl<number | null | undefined>(undefined),
			propagateTags: new FormControl<boolean | null | undefined>(undefined),
			containerOrchestrationType: new FormControl<OrchestrationType | null | undefined>(undefined),
		});

	}

	export interface ParametersMap {
	}
	export interface ParametersMapFormProperties {
	}
	export function CreateParametersMapFormGroup() {
		return new FormGroup<ParametersMapFormProperties>({
		});

	}


	/** The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>. */
	export interface RetryStrategy {
		attempts?: number | null;
		evaluateOnExit?: Array<EvaluateOnExit>;
	}

	/** The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>. */
	export interface RetryStrategyFormProperties {
		attempts: FormControl<number | null | undefined>,
	}
	export function CreateRetryStrategyFormGroup() {
		return new FormGroup<RetryStrategyFormProperties>({
			attempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies an array of up to 5 conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met. If none of the <code>EvaluateOnExit</code> conditions in a <code>RetryStrategy</code> match, then the job is retried. */
	export interface EvaluateOnExit {
		onStatusReason?: string;
		onReason?: string;
		onExitCode?: string;

		/** Required */
		action: RetryAction;
	}

	/** Specifies an array of up to 5 conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met. If none of the <code>EvaluateOnExit</code> conditions in a <code>RetryStrategy</code> match, then the job is retried. */
	export interface EvaluateOnExitFormProperties {
		onStatusReason: FormControl<string | null | undefined>,
		onReason: FormControl<string | null | undefined>,
		onExitCode: FormControl<string | null | undefined>,

		/** Required */
		action: FormControl<RetryAction | null | undefined>,
	}
	export function CreateEvaluateOnExitFormGroup() {
		return new FormGroup<EvaluateOnExitFormProperties>({
			onStatusReason: new FormControl<string | null | undefined>(undefined),
			onReason: new FormControl<string | null | undefined>(undefined),
			onExitCode: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<RetryAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RetryAction { RETRY = 'RETRY', EXIT = 'EXIT' }


	/** Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job. */
	export interface ContainerProperties {
		image?: string;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		jobRoleArn?: string;
		executionRoleArn?: string;
		volumes?: Array<Volume>;
		environment?: Array<KeyValuePair>;
		mountPoints?: Array<MountPoint>;
		readonlyRootFilesystem?: boolean | null;
		privileged?: boolean | null;
		ulimits?: Array<Ulimit>;
		user?: string;
		instanceType?: string;
		resourceRequirements?: Array<ResourceRequirement>;
		linuxParameters?: LinuxParameters;
		logConfiguration?: LogConfiguration;
		secrets?: Array<Secret>;
		networkConfiguration?: NetworkConfiguration;
		fargatePlatformConfiguration?: FargatePlatformConfiguration;
		ephemeralStorage?: EphemeralStorage;

		/** An object that represents the compute environment architecture for Batch jobs on Fargate. */
		runtimePlatform?: RuntimePlatform;
	}

	/** Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job. */
	export interface ContainerPropertiesFormProperties {
		image: FormControl<string | null | undefined>,
		vcpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		jobRoleArn: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		readonlyRootFilesystem: FormControl<boolean | null | undefined>,
		privileged: FormControl<boolean | null | undefined>,
		user: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateContainerPropertiesFormGroup() {
		return new FormGroup<ContainerPropertiesFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			vcpus: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			jobRoleArn: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			readonlyRootFilesystem: new FormControl<boolean | null | undefined>(undefined),
			privileged: new FormControl<boolean | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data volume that's used in a job's container properties. */
	export interface Volume {
		host?: Host;
		name?: string;
		efsVolumeConfiguration?: EFSVolumeConfiguration;
	}

	/** A data volume that's used in a job's container properties. */
	export interface VolumeFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Determine whether your data volume persists on the host container instance and where it's stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running. */
	export interface Host {
		sourcePath?: string;
	}

	/** Determine whether your data volume persists on the host container instance and where it's stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running. */
	export interface HostFormProperties {
		sourcePath: FormControl<string | null | undefined>,
	}
	export function CreateHostFormGroup() {
		return new FormGroup<HostFormProperties>({
			sourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>. */
	export interface EFSVolumeConfiguration {

		/** Required */
		fileSystemId: string;
		rootDirectory?: string;
		transitEncryption?: CEState;
		transitEncryptionPort?: number | null;
		authorizationConfig?: EFSAuthorizationConfig;
	}

	/** This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>. */
	export interface EFSVolumeConfigurationFormProperties {

		/** Required */
		fileSystemId: FormControl<string | null | undefined>,
		rootDirectory: FormControl<string | null | undefined>,
		transitEncryption: FormControl<CEState | null | undefined>,
		transitEncryptionPort: FormControl<number | null | undefined>,
	}
	export function CreateEFSVolumeConfigurationFormGroup() {
		return new FormGroup<EFSVolumeConfigurationFormProperties>({
			fileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rootDirectory: new FormControl<string | null | undefined>(undefined),
			transitEncryption: new FormControl<CEState | null | undefined>(undefined),
			transitEncryptionPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The authorization configuration details for the Amazon EFS file system. */
	export interface EFSAuthorizationConfig {
		accessPointId?: string;
		iam?: CEState;
	}

	/** The authorization configuration details for the Amazon EFS file system. */
	export interface EFSAuthorizationConfigFormProperties {
		accessPointId: FormControl<string | null | undefined>,
		iam: FormControl<CEState | null | undefined>,
	}
	export function CreateEFSAuthorizationConfigFormGroup() {
		return new FormGroup<EFSAuthorizationConfigFormProperties>({
			accessPointId: new FormControl<string | null | undefined>(undefined),
			iam: new FormControl<CEState | null | undefined>(undefined),
		});

	}


	/** A key-value pair object. */
	export interface KeyValuePair {
		name?: string;
		value?: string;
	}

	/** A key-value pair object. */
	export interface KeyValuePairFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuePairFormGroup() {
		return new FormGroup<KeyValuePairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for a Docker volume mount point that's used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the <i>Docker Remote API</i> and the <code>--volume</code> option to docker run. */
	export interface MountPoint {
		containerPath?: string;
		readOnly?: boolean | null;
		sourceVolume?: string;
	}

	/** Details for a Docker volume mount point that's used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the <i>Docker Remote API</i> and the <code>--volume</code> option to docker run. */
	export interface MountPointFormProperties {
		containerPath: FormControl<string | null | undefined>,
		readOnly: FormControl<boolean | null | undefined>,
		sourceVolume: FormControl<string | null | undefined>,
	}
	export function CreateMountPointFormGroup() {
		return new FormGroup<MountPointFormProperties>({
			containerPath: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			sourceVolume: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note> */
	export interface Ulimit {

		/** Required */
		hardLimit: number;

		/** Required */
		name: string;

		/** Required */
		softLimit: number;
	}

	/** <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note> */
	export interface UlimitFormProperties {

		/** Required */
		hardLimit: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		softLimit: FormControl<number | null | undefined>,
	}
	export function CreateUlimitFormGroup() {
		return new FormGroup<UlimitFormProperties>({
			hardLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			softLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>. */
	export interface ResourceRequirement {

		/** Required */
		value: string;

		/** Required */
		type: ResourceType;
	}

	/** The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>. */
	export interface ResourceRequirementFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ResourceType | null | undefined>,
	}
	export function CreateResourceRequirementFormGroup() {
		return new FormGroup<ResourceRequirementFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceType { GPU = 'GPU', VCPU = 'VCPU', MEMORY = 'MEMORY' }


	/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
	export interface LinuxParameters {
		devices?: Array<Device>;
		initProcessEnabled?: boolean | null;
		sharedMemorySize?: number | null;
		tmpfs?: Array<Tmpfs>;
		maxSwap?: number | null;
		swappiness?: number | null;
	}

	/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
	export interface LinuxParametersFormProperties {
		initProcessEnabled: FormControl<boolean | null | undefined>,
		sharedMemorySize: FormControl<number | null | undefined>,
		maxSwap: FormControl<number | null | undefined>,
		swappiness: FormControl<number | null | undefined>,
	}
	export function CreateLinuxParametersFormGroup() {
		return new FormGroup<LinuxParametersFormProperties>({
			initProcessEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharedMemorySize: new FormControl<number | null | undefined>(undefined),
			maxSwap: new FormControl<number | null | undefined>(undefined),
			swappiness: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>An object that represents a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note> */
	export interface Device {

		/** Required */
		hostPath: string;
		containerPath?: string;
		permissions?: Array<DeviceCgroupPermission>;
	}

	/** <p>An object that represents a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note> */
	export interface DeviceFormProperties {

		/** Required */
		hostPath: FormControl<string | null | undefined>,
		containerPath: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			hostPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			containerPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceCgroupPermission { READ = 'READ', WRITE = 'WRITE', MKNOD = 'MKNOD' }


	/** <p>The container path, mount options, and size of the <code>tmpfs</code> mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note> */
	export interface Tmpfs {

		/** Required */
		containerPath: string;

		/** Required */
		size: number;
		mountOptions?: Array<string>;
	}

	/** <p>The container path, mount options, and size of the <code>tmpfs</code> mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note> */
	export interface TmpfsFormProperties {

		/** Required */
		containerPath: FormControl<string | null | undefined>,

		/** Required */
		size: FormControl<number | null | undefined>,
	}
	export function CreateTmpfsFormGroup() {
		return new FormGroup<TmpfsFormProperties>({
			containerPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Log configuration options to send to a custom log driver for the container. */
	export interface LogConfiguration {

		/** Required */
		logDriver: LogDriver;
		options?: LogConfigurationOptionsMap;
		secretOptions?: Array<Secret>;
	}

	/** Log configuration options to send to a custom log driver for the container. */
	export interface LogConfigurationFormProperties {

		/** Required */
		logDriver: FormControl<LogDriver | null | undefined>,
	}
	export function CreateLogConfigurationFormGroup() {
		return new FormGroup<LogConfigurationFormProperties>({
			logDriver: new FormControl<LogDriver | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogDriver { 'json-file' = 'json-file', syslog = 'syslog', journald = 'journald', gelf = 'gelf', fluentd = 'fluentd', awslogs = 'awslogs', splunk = 'splunk' }

	export interface LogConfigurationOptionsMap {
	}
	export interface LogConfigurationOptionsMapFormProperties {
	}
	export function CreateLogConfigurationOptionsMapFormGroup() {
		return new FormGroup<LogConfigurationOptionsMapFormProperties>({
		});

	}


	/** <p>An object that represents the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.</p> */
	export interface Secret {

		/** Required */
		name: string;

		/** Required */
		valueFrom: string;
	}

	/** <p>An object that represents the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Batch User Guide</i>.</p> */
	export interface SecretFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		valueFrom: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valueFrom: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter. */
	export interface NetworkConfiguration {
		assignPublicIp?: CEState;
	}

	/** The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter. */
	export interface NetworkConfigurationFormProperties {
		assignPublicIp: FormControl<CEState | null | undefined>,
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
			assignPublicIp: new FormControl<CEState | null | undefined>(undefined),
		});

	}


	/** The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter. */
	export interface FargatePlatformConfiguration {
		platformVersion?: string;
	}

	/** The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter. */
	export interface FargatePlatformConfigurationFormProperties {
		platformVersion: FormControl<string | null | undefined>,
	}
	export function CreateFargatePlatformConfigurationFormGroup() {
		return new FormGroup<FargatePlatformConfigurationFormProperties>({
			platformVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. */
	export interface EphemeralStorage {

		/** Required */
		sizeInGiB: number;
	}

	/** The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. */
	export interface EphemeralStorageFormProperties {

		/** Required */
		sizeInGiB: FormControl<number | null | undefined>,
	}
	export function CreateEphemeralStorageFormGroup() {
		return new FormGroup<EphemeralStorageFormProperties>({
			sizeInGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the compute environment architecture for Batch jobs on Fargate. */
	export interface RuntimePlatform {
		operatingSystemFamily?: string;
		cpuArchitecture?: string;
	}

	/** An object that represents the compute environment architecture for Batch jobs on Fargate. */
	export interface RuntimePlatformFormProperties {
		operatingSystemFamily: FormControl<string | null | undefined>,
		cpuArchitecture: FormControl<string | null | undefined>,
	}
	export function CreateRuntimePlatformFormGroup() {
		return new FormGroup<RuntimePlatformFormProperties>({
			operatingSystemFamily: new FormControl<string | null | undefined>(undefined),
			cpuArchitecture: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a job timeout configuration. */
	export interface JobTimeout {
		attemptDurationSeconds?: number | null;
	}

	/** An object that represents a job timeout configuration. */
	export interface JobTimeoutFormProperties {
		attemptDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateJobTimeoutFormGroup() {
		return new FormGroup<JobTimeoutFormProperties>({
			attemptDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note> */
	export interface NodeProperties {

		/** Required */
		numNodes: number;

		/** Required */
		mainNode: number;

		/** Required */
		nodeRangeProperties: Array<NodeRangeProperty>;
	}

	/** <p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note> */
	export interface NodePropertiesFormProperties {

		/** Required */
		numNodes: FormControl<number | null | undefined>,

		/** Required */
		mainNode: FormControl<number | null | undefined>,
	}
	export function CreateNodePropertiesFormGroup() {
		return new FormGroup<NodePropertiesFormProperties>({
			numNodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mainNode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the properties of the node range for a multi-node parallel job. */
	export interface NodeRangeProperty {

		/** Required */
		targetNodes: string;
		container?: ContainerProperties;
	}

	/** An object that represents the properties of the node range for a multi-node parallel job. */
	export interface NodeRangePropertyFormProperties {

		/** Required */
		targetNodes: FormControl<string | null | undefined>,
	}
	export function CreateNodeRangePropertyFormGroup() {
		return new FormGroup<NodeRangePropertyFormProperties>({
			targetNodes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlatformCapability { EC2 = 'EC2', FARGATE = 'FARGATE' }


	/** An object that contains the properties for the Kubernetes resources of a job. */
	export interface EksProperties {
		podProperties?: EksPodProperties;
	}

	/** An object that contains the properties for the Kubernetes resources of a job. */
	export interface EksPropertiesFormProperties {
	}
	export function CreateEksPropertiesFormGroup() {
		return new FormGroup<EksPropertiesFormProperties>({
		});

	}


	/** The properties for the pod. */
	export interface EksPodProperties {
		serviceAccountName?: string;
		hostNetwork?: boolean | null;
		dnsPolicy?: string;
		containers?: Array<EksContainer>;
		volumes?: Array<EksVolume>;
		metadata?: EksMetadata;
	}

	/** The properties for the pod. */
	export interface EksPodPropertiesFormProperties {
		serviceAccountName: FormControl<string | null | undefined>,
		hostNetwork: FormControl<boolean | null | undefined>,
		dnsPolicy: FormControl<string | null | undefined>,
	}
	export function CreateEksPodPropertiesFormGroup() {
		return new FormGroup<EksPodPropertiesFormProperties>({
			serviceAccountName: new FormControl<string | null | undefined>(undefined),
			hostNetwork: new FormControl<boolean | null | undefined>(undefined),
			dnsPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job definitions. */
	export interface EksContainer {
		name?: string;

		/** Required */
		image: string;
		imagePullPolicy?: string;
		command?: Array<string>;
		args?: Array<string>;
		env?: Array<EksContainerEnvironmentVariable>;
		resources?: EksContainerResourceRequirements;
		volumeMounts?: Array<EksContainerVolumeMount>;
		securityContext?: EksContainerSecurityContext;
	}

	/** EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job definitions. */
	export interface EksContainerFormProperties {
		name: FormControl<string | null | undefined>,

		/** Required */
		image: FormControl<string | null | undefined>,
		imagePullPolicy: FormControl<string | null | undefined>,
	}
	export function CreateEksContainerFormGroup() {
		return new FormGroup<EksContainerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imagePullPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An environment variable. */
	export interface EksContainerEnvironmentVariable {

		/** Required */
		name: string;
		value?: string;
	}

	/** An environment variable. */
	export interface EksContainerEnvironmentVariableFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEksContainerEnvironmentVariableFormGroup() {
		return new FormGroup<EksContainerEnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type and amount of resources to assign to a container. The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes documentation</i>. */
	export interface EksContainerResourceRequirements {
		limits?: EksLimits;
		requests?: EksRequests;
	}

	/** The type and amount of resources to assign to a container. The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes documentation</i>. */
	export interface EksContainerResourceRequirementsFormProperties {
	}
	export function CreateEksContainerResourceRequirementsFormGroup() {
		return new FormGroup<EksContainerResourceRequirementsFormProperties>({
		});

	}

	export interface EksLimits {
	}
	export interface EksLimitsFormProperties {
	}
	export function CreateEksLimitsFormGroup() {
		return new FormGroup<EksLimitsFormProperties>({
		});

	}

	export interface EksRequests {
	}
	export interface EksRequestsFormProperties {
	}
	export function CreateEksRequestsFormGroup() {
		return new FormGroup<EksRequestsFormProperties>({
		});

	}


	/** The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>. */
	export interface EksContainerVolumeMount {
		name?: string;
		mountPath?: string;
		readOnly?: boolean | null;
	}

	/** The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>. */
	export interface EksContainerVolumeMountFormProperties {
		name: FormControl<string | null | undefined>,
		mountPath: FormControl<string | null | undefined>,
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateEksContainerVolumeMountFormGroup() {
		return new FormGroup<EksContainerVolumeMountFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			mountPath: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a pod or container</a> in the <i>Kubernetes documentation</i>. */
	export interface EksContainerSecurityContext {
		runAsUser?: number | null;
		runAsGroup?: number | null;
		privileged?: boolean | null;
		readOnlyRootFilesystem?: boolean | null;
		runAsNonRoot?: boolean | null;
	}

	/** The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a pod or container</a> in the <i>Kubernetes documentation</i>. */
	export interface EksContainerSecurityContextFormProperties {
		runAsUser: FormControl<number | null | undefined>,
		runAsGroup: FormControl<number | null | undefined>,
		privileged: FormControl<boolean | null | undefined>,
		readOnlyRootFilesystem: FormControl<boolean | null | undefined>,
		runAsNonRoot: FormControl<boolean | null | undefined>,
	}
	export function CreateEksContainerSecurityContextFormGroup() {
		return new FormGroup<EksContainerSecurityContextFormProperties>({
			runAsUser: new FormControl<number | null | undefined>(undefined),
			runAsGroup: new FormControl<number | null | undefined>(undefined),
			privileged: new FormControl<boolean | null | undefined>(undefined),
			readOnlyRootFilesystem: new FormControl<boolean | null | undefined>(undefined),
			runAsNonRoot: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies an Amazon EKS volume for a job definition. */
	export interface EksVolume {

		/** Required */
		name: string;
		hostPath?: EksHostPath;
		emptyDir?: EksEmptyDir;
		secret?: EksSecret;
	}

	/** Specifies an Amazon EKS volume for a job definition. */
	export interface EksVolumeFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEksVolumeFormGroup() {
		return new FormGroup<EksVolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the configuration of a Kubernetes <code>hostPath</code> volume. A <code>hostPath</code> volume mounts an existing file or directory from the host node's filesystem into your pod. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes documentation</i>. */
	export interface EksHostPath {
		path?: string;
	}

	/** Specifies the configuration of a Kubernetes <code>hostPath</code> volume. A <code>hostPath</code> volume mounts an existing file or directory from the host node's filesystem into your pod. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes documentation</i>. */
	export interface EksHostPathFormProperties {
		path: FormControl<string | null | undefined>,
	}
	export function CreateEksHostPathFormGroup() {
		return new FormGroup<EksHostPathFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. An <code>emptyDir</code> volume is first created when a pod is assigned to a node. It exists as long as that pod is running on that node. The <code>emptyDir</code> volume is initially empty. All containers in the pod can read and write the files in the <code>emptyDir</code> volume. However, the <code>emptyDir</code> volume can be mounted at the same or different paths in each container. When a pod is removed from a node for any reason, the data in the <code>emptyDir</code> is deleted permanently. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a> in the <i>Kubernetes documentation</i>. */
	export interface EksEmptyDir {
		medium?: string;
		sizeLimit?: string;
	}

	/** Specifies the configuration of a Kubernetes <code>emptyDir</code> volume. An <code>emptyDir</code> volume is first created when a pod is assigned to a node. It exists as long as that pod is running on that node. The <code>emptyDir</code> volume is initially empty. All containers in the pod can read and write the files in the <code>emptyDir</code> volume. However, the <code>emptyDir</code> volume can be mounted at the same or different paths in each container. When a pod is removed from a node for any reason, the data in the <code>emptyDir</code> is deleted permanently. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#emptydir">emptyDir</a> in the <i>Kubernetes documentation</i>. */
	export interface EksEmptyDirFormProperties {
		medium: FormControl<string | null | undefined>,
		sizeLimit: FormControl<string | null | undefined>,
	}
	export function CreateEksEmptyDirFormGroup() {
		return new FormGroup<EksEmptyDirFormProperties>({
			medium: new FormControl<string | null | undefined>(undefined),
			sizeLimit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the <i>Kubernetes documentation</i>. */
	export interface EksSecret {

		/** Required */
		secretName: string;
		optional?: boolean | null;
	}

	/** Specifies the configuration of a Kubernetes <code>secret</code> volume. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#secret">secret</a> in the <i>Kubernetes documentation</i>. */
	export interface EksSecretFormProperties {

		/** Required */
		secretName: FormControl<string | null | undefined>,
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateEksSecretFormGroup() {
		return new FormGroup<EksSecretFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the <code>jobID</code> for a job running in the pod. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>. */
	export interface EksMetadata {
		labels?: EksLabelsMap;
	}

	/** Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the <code>jobID</code> for a job running in the pod. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>. */
	export interface EksMetadataFormProperties {
	}
	export function CreateEksMetadataFormGroup() {
		return new FormGroup<EksMetadataFormProperties>({
		});

	}

	export interface EksLabelsMap {
	}
	export interface EksLabelsMapFormProperties {
	}
	export function CreateEksLabelsMapFormGroup() {
		return new FormGroup<EksLabelsMapFormProperties>({
		});

	}

	export interface DescribeJobQueuesResponse {
		jobQueues?: Array<JobQueueDetail>;
		nextToken?: string;
	}
	export interface DescribeJobQueuesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobQueuesResponseFormGroup() {
		return new FormGroup<DescribeJobQueuesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the details for an Batch job queue. */
	export interface JobQueueDetail {

		/** Required */
		jobQueueName: string;

		/** Required */
		jobQueueArn: string;

		/** Required */
		state: CEState;
		schedulingPolicyArn?: string;
		status?: CEStatus;
		statusReason?: string;

		/** Required */
		priority: number;

		/** Required */
		computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;
		tags?: TagrisTagsMap;
	}

	/** An object that represents the details for an Batch job queue. */
	export interface JobQueueDetailFormProperties {

		/** Required */
		jobQueueName: FormControl<string | null | undefined>,

		/** Required */
		jobQueueArn: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<CEState | null | undefined>,
		schedulingPolicyArn: FormControl<string | null | undefined>,
		status: FormControl<CEStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,

		/** Required */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateJobQueueDetailFormGroup() {
		return new FormGroup<JobQueueDetailFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobQueueArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined, [Validators.required]),
			schedulingPolicyArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CEStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeJobsResponse {
		jobs?: Array<JobDetail>;
	}
	export interface DescribeJobsResponseFormProperties {
	}
	export function CreateDescribeJobsResponseFormGroup() {
		return new FormGroup<DescribeJobsResponseFormProperties>({
		});

	}


	/** An object that represents an Batch job. */
	export interface JobDetail {
		jobArn?: string;

		/** Required */
		jobName: string;

		/** Required */
		jobId: string;

		/** Required */
		jobQueue: string;

		/** Required */
		status: JobStatus;
		shareIdentifier?: string;
		schedulingPriority?: number | null;
		attempts?: Array<AttemptDetail>;
		statusReason?: string;
		createdAt?: number | null;
		retryStrategy?: RetryStrategy;

		/** Required */
		startedAt: number;
		stoppedAt?: number | null;
		dependsOn?: Array<JobDependency>;

		/** Required */
		jobDefinition: string;
		parameters?: ParametersMap;
		container?: ContainerDetail;
		nodeDetails?: NodeDetails;
		nodeProperties?: NodeProperties;
		arrayProperties?: ArrayPropertiesDetail;
		timeout?: JobTimeout;
		tags?: TagrisTagsMap;
		propagateTags?: boolean | null;
		platformCapabilities?: Array<PlatformCapability>;
		eksProperties?: EksPropertiesDetail;
		eksAttempts?: Array<EksAttemptDetail>;
		isCancelled?: boolean | null;
		isTerminated?: boolean | null;
	}

	/** An object that represents an Batch job. */
	export interface JobDetailFormProperties {
		jobArn: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobQueue: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,
		shareIdentifier: FormControl<string | null | undefined>,
		schedulingPriority: FormControl<number | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		createdAt: FormControl<number | null | undefined>,

		/** Required */
		startedAt: FormControl<number | null | undefined>,
		stoppedAt: FormControl<number | null | undefined>,

		/** Required */
		jobDefinition: FormControl<string | null | undefined>,
		propagateTags: FormControl<boolean | null | undefined>,
		isCancelled: FormControl<boolean | null | undefined>,
		isTerminated: FormControl<boolean | null | undefined>,
	}
	export function CreateJobDetailFormGroup() {
		return new FormGroup<JobDetailFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobQueue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			shareIdentifier: new FormControl<string | null | undefined>(undefined),
			schedulingPriority: new FormControl<number | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<number | null | undefined>(undefined),
			startedAt: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			stoppedAt: new FormControl<number | null | undefined>(undefined),
			jobDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			propagateTags: new FormControl<boolean | null | undefined>(undefined),
			isCancelled: new FormControl<boolean | null | undefined>(undefined),
			isTerminated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum JobStatus { SUBMITTED = 'SUBMITTED', PENDING = 'PENDING', RUNNABLE = 'RUNNABLE', STARTING = 'STARTING', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** An object that represents a job attempt. */
	export interface AttemptDetail {
		container?: AttemptContainerDetail;
		startedAt?: number | null;
		stoppedAt?: number | null;
		statusReason?: string;
	}

	/** An object that represents a job attempt. */
	export interface AttemptDetailFormProperties {
		startedAt: FormControl<number | null | undefined>,
		stoppedAt: FormControl<number | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateAttemptDetailFormGroup() {
		return new FormGroup<AttemptDetailFormProperties>({
			startedAt: new FormControl<number | null | undefined>(undefined),
			stoppedAt: new FormControl<number | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the details of a container that's part of a job attempt. */
	export interface AttemptContainerDetail {
		containerInstanceArn?: string;
		taskArn?: string;
		exitCode?: number | null;
		reason?: string;
		logStreamName?: string;
		networkInterfaces?: Array<NetworkInterface>;
	}

	/** An object that represents the details of a container that's part of a job attempt. */
	export interface AttemptContainerDetailFormProperties {
		containerInstanceArn: FormControl<string | null | undefined>,
		taskArn: FormControl<string | null | undefined>,
		exitCode: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		logStreamName: FormControl<string | null | undefined>,
	}
	export function CreateAttemptContainerDetailFormGroup() {
		return new FormGroup<AttemptContainerDetailFormProperties>({
			containerInstanceArn: new FormControl<string | null | undefined>(undefined),
			taskArn: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			logStreamName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the elastic network interface for a multi-node parallel job node. */
	export interface NetworkInterface {
		attachmentId?: string;
		ipv6Address?: string;
		privateIpv4Address?: string;
	}

	/** An object that represents the elastic network interface for a multi-node parallel job node. */
	export interface NetworkInterfaceFormProperties {
		attachmentId: FormControl<string | null | undefined>,
		ipv6Address: FormControl<string | null | undefined>,
		privateIpv4Address: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			attachmentId: new FormControl<string | null | undefined>(undefined),
			ipv6Address: new FormControl<string | null | undefined>(undefined),
			privateIpv4Address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents an Batch job dependency. */
	export interface JobDependency {
		jobId?: string;
		type?: ArrayJobDependency;
	}

	/** An object that represents an Batch job dependency. */
	export interface JobDependencyFormProperties {
		jobId: FormControl<string | null | undefined>,
		type: FormControl<ArrayJobDependency | null | undefined>,
	}
	export function CreateJobDependencyFormGroup() {
		return new FormGroup<JobDependencyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ArrayJobDependency | null | undefined>(undefined),
		});

	}

	export enum ArrayJobDependency { N_TO_N = 'N_TO_N', SEQUENTIAL = 'SEQUENTIAL' }


	/** An object that represents the details of a container that's part of a job. */
	export interface ContainerDetail {
		image?: string;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		jobRoleArn?: string;
		executionRoleArn?: string;
		volumes?: Array<Volume>;
		environment?: Array<KeyValuePair>;
		mountPoints?: Array<MountPoint>;
		readonlyRootFilesystem?: boolean | null;
		ulimits?: Array<Ulimit>;
		privileged?: boolean | null;
		user?: string;
		exitCode?: number | null;
		reason?: string;
		containerInstanceArn?: string;
		taskArn?: string;
		logStreamName?: string;
		instanceType?: string;
		networkInterfaces?: Array<NetworkInterface>;
		resourceRequirements?: Array<ResourceRequirement>;
		linuxParameters?: LinuxParameters;
		logConfiguration?: LogConfiguration;
		secrets?: Array<Secret>;
		networkConfiguration?: NetworkConfiguration;
		fargatePlatformConfiguration?: FargatePlatformConfiguration;
		ephemeralStorage?: EphemeralStorage;

		/** An object that represents the compute environment architecture for Batch jobs on Fargate. */
		runtimePlatform?: RuntimePlatform;
	}

	/** An object that represents the details of a container that's part of a job. */
	export interface ContainerDetailFormProperties {
		image: FormControl<string | null | undefined>,
		vcpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		jobRoleArn: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		readonlyRootFilesystem: FormControl<boolean | null | undefined>,
		privileged: FormControl<boolean | null | undefined>,
		user: FormControl<string | null | undefined>,
		exitCode: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		containerInstanceArn: FormControl<string | null | undefined>,
		taskArn: FormControl<string | null | undefined>,
		logStreamName: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateContainerDetailFormGroup() {
		return new FormGroup<ContainerDetailFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			vcpus: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			jobRoleArn: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			readonlyRootFilesystem: new FormControl<boolean | null | undefined>(undefined),
			privileged: new FormControl<boolean | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			containerInstanceArn: new FormControl<string | null | undefined>(undefined),
			taskArn: new FormControl<string | null | undefined>(undefined),
			logStreamName: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the details of a multi-node parallel job node. */
	export interface NodeDetails {
		nodeIndex?: number | null;
		isMainNode?: boolean | null;
	}

	/** An object that represents the details of a multi-node parallel job node. */
	export interface NodeDetailsFormProperties {
		nodeIndex: FormControl<number | null | undefined>,
		isMainNode: FormControl<boolean | null | undefined>,
	}
	export function CreateNodeDetailsFormGroup() {
		return new FormGroup<NodeDetailsFormProperties>({
			nodeIndex: new FormControl<number | null | undefined>(undefined),
			isMainNode: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An object that represents the array properties of a job. */
	export interface ArrayPropertiesDetail {
		statusSummary?: ArrayJobStatusSummary;
		size?: number | null;
		index?: number | null;
	}

	/** An object that represents the array properties of a job. */
	export interface ArrayPropertiesDetailFormProperties {
		size: FormControl<number | null | undefined>,
		index: FormControl<number | null | undefined>,
	}
	export function CreateArrayPropertiesDetailFormGroup() {
		return new FormGroup<ArrayPropertiesDetailFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArrayJobStatusSummary {
	}
	export interface ArrayJobStatusSummaryFormProperties {
	}
	export function CreateArrayJobStatusSummaryFormGroup() {
		return new FormGroup<ArrayJobStatusSummaryFormProperties>({
		});

	}


	/** An object that contains the details for the Kubernetes resources of a job. */
	export interface EksPropertiesDetail {
		podProperties?: EksPodPropertiesDetail;
	}

	/** An object that contains the details for the Kubernetes resources of a job. */
	export interface EksPropertiesDetailFormProperties {
	}
	export function CreateEksPropertiesDetailFormGroup() {
		return new FormGroup<EksPropertiesDetailFormProperties>({
		});

	}


	/** The details for the pod. */
	export interface EksPodPropertiesDetail {
		serviceAccountName?: string;
		hostNetwork?: boolean | null;
		dnsPolicy?: string;
		containers?: Array<EksContainerDetail>;
		volumes?: Array<EksVolume>;
		podName?: string;
		nodeName?: string;

		/** Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the <code>jobID</code> for a job running in the pod. For more information, see <a href="https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/">Understanding Kubernetes Objects</a> in the <i>Kubernetes documentation</i>. */
		metadata?: EksMetadata;
	}

	/** The details for the pod. */
	export interface EksPodPropertiesDetailFormProperties {
		serviceAccountName: FormControl<string | null | undefined>,
		hostNetwork: FormControl<boolean | null | undefined>,
		dnsPolicy: FormControl<string | null | undefined>,
		podName: FormControl<string | null | undefined>,
		nodeName: FormControl<string | null | undefined>,
	}
	export function CreateEksPodPropertiesDetailFormGroup() {
		return new FormGroup<EksPodPropertiesDetailFormProperties>({
			serviceAccountName: new FormControl<string | null | undefined>(undefined),
			hostNetwork: new FormControl<boolean | null | undefined>(undefined),
			dnsPolicy: new FormControl<string | null | undefined>(undefined),
			podName: new FormControl<string | null | undefined>(undefined),
			nodeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details for container properties that are returned by <code>DescribeJobs</code> for jobs that use Amazon EKS. */
	export interface EksContainerDetail {
		name?: string;
		image?: string;
		imagePullPolicy?: string;
		command?: Array<string>;
		args?: Array<string>;
		env?: Array<EksContainerEnvironmentVariable>;
		resources?: EksContainerResourceRequirements;
		exitCode?: number | null;
		reason?: string;
		volumeMounts?: Array<EksContainerVolumeMount>;
		securityContext?: EksContainerSecurityContext;
	}

	/** The details for container properties that are returned by <code>DescribeJobs</code> for jobs that use Amazon EKS. */
	export interface EksContainerDetailFormProperties {
		name: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		imagePullPolicy: FormControl<string | null | undefined>,
		exitCode: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateEksContainerDetailFormGroup() {
		return new FormGroup<EksContainerDetailFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			imagePullPolicy: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the details of a job attempt for a job attempt by an Amazon EKS container. */
	export interface EksAttemptDetail {
		containers?: Array<EksAttemptContainerDetail>;
		podName?: string;
		nodeName?: string;
		startedAt?: number | null;
		stoppedAt?: number | null;
		statusReason?: string;
	}

	/** An object that represents the details of a job attempt for a job attempt by an Amazon EKS container. */
	export interface EksAttemptDetailFormProperties {
		podName: FormControl<string | null | undefined>,
		nodeName: FormControl<string | null | undefined>,
		startedAt: FormControl<number | null | undefined>,
		stoppedAt: FormControl<number | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateEksAttemptDetailFormGroup() {
		return new FormGroup<EksAttemptDetailFormProperties>({
			podName: new FormControl<string | null | undefined>(undefined),
			nodeName: new FormControl<string | null | undefined>(undefined),
			startedAt: new FormControl<number | null | undefined>(undefined),
			stoppedAt: new FormControl<number | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the details for an attempt for a job attempt that an Amazon EKS container runs. */
	export interface EksAttemptContainerDetail {
		exitCode?: number | null;
		reason?: string;
	}

	/** An object that represents the details for an attempt for a job attempt that an Amazon EKS container runs. */
	export interface EksAttemptContainerDetailFormProperties {
		exitCode: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateEksAttemptContainerDetailFormGroup() {
		return new FormGroup<EksAttemptContainerDetailFormProperties>({
			exitCode: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSchedulingPoliciesResponse {
		schedulingPolicies?: Array<SchedulingPolicyDetail>;
	}
	export interface DescribeSchedulingPoliciesResponseFormProperties {
	}
	export function CreateDescribeSchedulingPoliciesResponseFormGroup() {
		return new FormGroup<DescribeSchedulingPoliciesResponseFormProperties>({
		});

	}


	/** An object that represents a scheduling policy. */
	export interface SchedulingPolicyDetail {

		/** Required */
		name: string;

		/** Required */
		arn: string;
		fairsharePolicy?: FairsharePolicy;
		tags?: TagrisTagsMap;
	}

	/** An object that represents a scheduling policy. */
	export interface SchedulingPolicyDetailFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateSchedulingPolicyDetailFormGroup() {
		return new FormGroup<SchedulingPolicyDetailFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The fair share policy for a scheduling policy. */
	export interface FairsharePolicy {
		shareDecaySeconds?: number | null;
		computeReservation?: number | null;
		shareDistribution?: Array<ShareAttributes>;
	}

	/** The fair share policy for a scheduling policy. */
	export interface FairsharePolicyFormProperties {
		shareDecaySeconds: FormControl<number | null | undefined>,
		computeReservation: FormControl<number | null | undefined>,
	}
	export function CreateFairsharePolicyFormGroup() {
		return new FormGroup<FairsharePolicyFormProperties>({
			shareDecaySeconds: new FormControl<number | null | undefined>(undefined),
			computeReservation: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListJobsResponse {

		/** Required */
		jobSummaryList: Array<JobSummary>;
		nextToken?: string;
	}
	export interface ListJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents summary details of a job. */
	export interface JobSummary {
		jobArn?: string;

		/** Required */
		jobId: string;

		/** Required */
		jobName: string;
		createdAt?: number | null;
		status?: JobStatus;
		statusReason?: string;
		startedAt?: number | null;
		stoppedAt?: number | null;
		container?: ContainerSummary;
		arrayProperties?: ArrayPropertiesSummary;
		nodeProperties?: NodePropertiesSummary;
		jobDefinition?: string;
	}

	/** An object that represents summary details of a job. */
	export interface JobSummaryFormProperties {
		jobArn: FormControl<string | null | undefined>,

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,
		createdAt: FormControl<number | null | undefined>,
		status: FormControl<JobStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		startedAt: FormControl<number | null | undefined>,
		stoppedAt: FormControl<number | null | undefined>,
		jobDefinition: FormControl<string | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<JobStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			startedAt: new FormControl<number | null | undefined>(undefined),
			stoppedAt: new FormControl<number | null | undefined>(undefined),
			jobDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents summary details of a container within a job. */
	export interface ContainerSummary {
		exitCode?: number | null;
		reason?: string;
	}

	/** An object that represents summary details of a container within a job. */
	export interface ContainerSummaryFormProperties {
		exitCode: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateContainerSummaryFormGroup() {
		return new FormGroup<ContainerSummaryFormProperties>({
			exitCode: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the array properties of a job. */
	export interface ArrayPropertiesSummary {
		size?: number | null;
		index?: number | null;
	}

	/** An object that represents the array properties of a job. */
	export interface ArrayPropertiesSummaryFormProperties {
		size: FormControl<number | null | undefined>,
		index: FormControl<number | null | undefined>,
	}
	export function CreateArrayPropertiesSummaryFormGroup() {
		return new FormGroup<ArrayPropertiesSummaryFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents the properties of a node that's associated with a multi-node parallel job. */
	export interface NodePropertiesSummary {
		isMainNode?: boolean | null;
		numNodes?: number | null;
		nodeIndex?: number | null;
	}

	/** An object that represents the properties of a node that's associated with a multi-node parallel job. */
	export interface NodePropertiesSummaryFormProperties {
		isMainNode: FormControl<boolean | null | undefined>,
		numNodes: FormControl<number | null | undefined>,
		nodeIndex: FormControl<number | null | undefined>,
	}
	export function CreateNodePropertiesSummaryFormGroup() {
		return new FormGroup<NodePropertiesSummaryFormProperties>({
			isMainNode: new FormControl<boolean | null | undefined>(undefined),
			numNodes: new FormControl<number | null | undefined>(undefined),
			nodeIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code> API operation. */
	export interface KeyValuesPair {
		name?: string;
		values?: Array<string>;
	}

	/** A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code> API operation. */
	export interface KeyValuesPairFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuesPairFormGroup() {
		return new FormGroup<KeyValuesPairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchedulingPoliciesResponse {
		schedulingPolicies?: Array<SchedulingPolicyListingDetail>;
		nextToken?: string;
	}
	export interface ListSchedulingPoliciesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchedulingPoliciesResponseFormGroup() {
		return new FormGroup<ListSchedulingPoliciesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the details of a scheduling policy that's returned in a <code>ListSchedulingPolicy</code> action. */
	export interface SchedulingPolicyListingDetail {

		/** Required */
		arn: string;
	}

	/** An object that contains the details of a scheduling policy that's returned in a <code>ListSchedulingPolicy</code> action. */
	export interface SchedulingPolicyListingDetailFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateSchedulingPolicyListingDetailFormGroup() {
		return new FormGroup<SchedulingPolicyListingDetailFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagrisTagsMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface RegisterJobDefinitionResponse {

		/** Required */
		jobDefinitionName: string;

		/** Required */
		jobDefinitionArn: string;

		/** Required */
		revision: number;
	}
	export interface RegisterJobDefinitionResponseFormProperties {

		/** Required */
		jobDefinitionName: FormControl<string | null | undefined>,

		/** Required */
		jobDefinitionArn: FormControl<string | null | undefined>,

		/** Required */
		revision: FormControl<number | null | undefined>,
	}
	export function CreateRegisterJobDefinitionResponseFormGroup() {
		return new FormGroup<RegisterJobDefinitionResponseFormProperties>({
			jobDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubmitJobResponse {
		jobArn?: string;

		/** Required */
		jobName: string;

		/** Required */
		jobId: string;
	}
	export interface SubmitJobResponseFormProperties {
		jobArn: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateSubmitJobResponseFormGroup() {
		return new FormGroup<SubmitJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation. */
	export interface NodePropertyOverride {

		/** Required */
		targetNodes: string;
		containerOverrides?: ContainerOverrides;
	}

	/** The object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation. */
	export interface NodePropertyOverrideFormProperties {

		/** Required */
		targetNodes: FormControl<string | null | undefined>,
	}
	export function CreateNodePropertyOverrideFormGroup() {
		return new FormGroup<NodePropertyOverrideFormProperties>({
			targetNodes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The overrides that should be sent to a container.</p> <p>For information about using Batch overrides when you connect event sources to targets, see <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p> */
	export interface ContainerOverrides {
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		instanceType?: string;
		environment?: Array<KeyValuePair>;
		resourceRequirements?: Array<ResourceRequirement>;
	}

	/** <p>The overrides that should be sent to a container.</p> <p>For information about using Batch overrides when you connect event sources to targets, see <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p> */
	export interface ContainerOverridesFormProperties {
		vcpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateContainerOverridesFormGroup() {
		return new FormGroup<ContainerOverridesFormProperties>({
			vcpus: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains overrides for the Kubernetes pod properties of a job. */
	export interface EksPodPropertiesOverride {
		containers?: Array<EksContainerOverride>;
		metadata?: EksMetadata;
	}

	/** An object that contains overrides for the Kubernetes pod properties of a job. */
	export interface EksPodPropertiesOverrideFormProperties {
	}
	export function CreateEksPodPropertiesOverrideFormGroup() {
		return new FormGroup<EksPodPropertiesOverrideFormProperties>({
		});

	}


	/** Object representing any Kubernetes overrides to a job definition that's used in a <a>SubmitJob</a> API operation. */
	export interface EksContainerOverride {
		image?: string;
		command?: Array<string>;
		args?: Array<string>;
		env?: Array<EksContainerEnvironmentVariable>;
		resources?: EksContainerResourceRequirements;
	}

	/** Object representing any Kubernetes overrides to a job definition that's used in a <a>SubmitJob</a> API operation. */
	export interface EksContainerOverrideFormProperties {
		image: FormControl<string | null | undefined>,
	}
	export function CreateEksContainerOverrideFormGroup() {
		return new FormGroup<EksContainerOverrideFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
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

	export interface TerminateJobResponse {
	}
	export interface TerminateJobResponseFormProperties {
	}
	export function CreateTerminateJobResponseFormGroup() {
		return new FormGroup<TerminateJobResponseFormProperties>({
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

	export interface UpdateComputeEnvironmentResponse {
		computeEnvironmentName?: string;
		computeEnvironmentArn?: string;
	}
	export interface UpdateComputeEnvironmentResponseFormProperties {
		computeEnvironmentName: FormControl<string | null | undefined>,
		computeEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComputeEnvironmentResponseFormGroup() {
		return new FormGroup<UpdateComputeEnvironmentResponseFormProperties>({
			computeEnvironmentName: new FormControl<string | null | undefined>(undefined),
			computeEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CRUpdateAllocationStrategy { BEST_FIT_PROGRESSIVE = 'BEST_FIT_PROGRESSIVE', SPOT_CAPACITY_OPTIMIZED = 'SPOT_CAPACITY_OPTIMIZED', SPOT_PRICE_CAPACITY_OPTIMIZED = 'SPOT_PRICE_CAPACITY_OPTIMIZED' }

	export interface UpdateJobQueueResponse {
		jobQueueName?: string;
		jobQueueArn?: string;
	}
	export interface UpdateJobQueueResponseFormProperties {
		jobQueueName: FormControl<string | null | undefined>,
		jobQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobQueueResponseFormGroup() {
		return new FormGroup<UpdateJobQueueResponseFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined),
			jobQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSchedulingPolicyResponse {
	}
	export interface UpdateSchedulingPolicyResponseFormProperties {
	}
	export function CreateUpdateSchedulingPolicyResponseFormGroup() {
		return new FormGroup<UpdateSchedulingPolicyResponseFormProperties>({
		});

	}


	/** An object that represents an Batch array job. */
	export interface ArrayProperties {
		size?: number | null;
	}

	/** An object that represents an Batch array job. */
	export interface ArrayPropertiesFormProperties {
		size: FormControl<number | null | undefined>,
	}
	export function CreateArrayPropertiesFormGroup() {
		return new FormGroup<ArrayPropertiesFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AssignPublicIp { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Contains the parameters for <code>CancelJob</code>. */
	export interface CancelJobRequest {

		/** Required */
		jobId: string;

		/** Required */
		reason: string;
	}

	/** Contains the parameters for <code>CancelJob</code>. */
	export interface CancelJobRequestFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. */
	export interface ComputeResourceUpdate {
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
		subnets?: Array<string>;
		securityGroupIds?: Array<string>;
		allocationStrategy?: CRUpdateAllocationStrategy;
		instanceTypes?: Array<string>;
		ec2KeyPair?: string;
		instanceRole?: string;
		tags?: TagsMap;
		placementGroup?: string;
		bidPercentage?: number | null;
		launchTemplate?: LaunchTemplateSpecification;
		ec2Configuration?: Array<Ec2Configuration>;
		updateToLatestImageVersion?: boolean | null;
		type?: CRType;
		imageId?: string;
	}

	/** An object that represents the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. */
	export interface ComputeResourceUpdateFormProperties {
		minvCpus: FormControl<number | null | undefined>,
		maxvCpus: FormControl<number | null | undefined>,
		desiredvCpus: FormControl<number | null | undefined>,
		allocationStrategy: FormControl<CRUpdateAllocationStrategy | null | undefined>,
		ec2KeyPair: FormControl<string | null | undefined>,
		instanceRole: FormControl<string | null | undefined>,
		placementGroup: FormControl<string | null | undefined>,
		bidPercentage: FormControl<number | null | undefined>,
		updateToLatestImageVersion: FormControl<boolean | null | undefined>,
		type: FormControl<CRType | null | undefined>,
		imageId: FormControl<string | null | undefined>,
	}
	export function CreateComputeResourceUpdateFormGroup() {
		return new FormGroup<ComputeResourceUpdateFormProperties>({
			minvCpus: new FormControl<number | null | undefined>(undefined),
			maxvCpus: new FormControl<number | null | undefined>(undefined),
			desiredvCpus: new FormControl<number | null | undefined>(undefined),
			allocationStrategy: new FormControl<CRUpdateAllocationStrategy | null | undefined>(undefined),
			ec2KeyPair: new FormControl<string | null | undefined>(undefined),
			instanceRole: new FormControl<string | null | undefined>(undefined),
			placementGroup: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<number | null | undefined>(undefined),
			updateToLatestImageVersion: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<CRType | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>CreateComputeEnvironment</code>. */
	export interface CreateComputeEnvironmentRequest {

		/** Required */
		computeEnvironmentName: string;

		/** Required */
		type: CEType;
		state?: CEState;
		unmanagedvCpus?: number | null;
		computeResources?: ComputeResource;
		serviceRole?: string;
		tags?: TagrisTagsMap;
		eksConfiguration?: EksConfiguration;
	}

	/** Contains the parameters for <code>CreateComputeEnvironment</code>. */
	export interface CreateComputeEnvironmentRequestFormProperties {

		/** Required */
		computeEnvironmentName: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CEType | null | undefined>,
		state: FormControl<CEState | null | undefined>,
		unmanagedvCpus: FormControl<number | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputeEnvironmentRequestFormGroup() {
		return new FormGroup<CreateComputeEnvironmentRequestFormProperties>({
			computeEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CEType | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined),
			unmanagedvCpus: new FormControl<number | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JQState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Contains the parameters for <code>CreateJobQueue</code>. */
	export interface CreateJobQueueRequest {

		/** Required */
		jobQueueName: string;
		state?: CEState;
		schedulingPolicyArn?: string;

		/** Required */
		priority: number;

		/** Required */
		computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;
		tags?: TagrisTagsMap;
	}

	/** Contains the parameters for <code>CreateJobQueue</code>. */
	export interface CreateJobQueueRequestFormProperties {

		/** Required */
		jobQueueName: FormControl<string | null | undefined>,
		state: FormControl<CEState | null | undefined>,
		schedulingPolicyArn: FormControl<string | null | undefined>,

		/** Required */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobQueueRequestFormGroup() {
		return new FormGroup<CreateJobQueueRequestFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined),
			schedulingPolicyArn: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for <code>CreateSchedulingPolicy</code>. */
	export interface CreateSchedulingPolicyRequest {

		/** Required */
		name: string;
		fairsharePolicy?: FairsharePolicy;
		tags?: TagrisTagsMap;
	}

	/** Contains the parameters for <code>CreateSchedulingPolicy</code>. */
	export interface CreateSchedulingPolicyRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchedulingPolicyRequestFormGroup() {
		return new FormGroup<CreateSchedulingPolicyRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for <code>DeleteComputeEnvironment</code>. */
	export interface DeleteComputeEnvironmentRequest {

		/** Required */
		computeEnvironment: string;
	}

	/** Contains the parameters for <code>DeleteComputeEnvironment</code>. */
	export interface DeleteComputeEnvironmentRequestFormProperties {

		/** Required */
		computeEnvironment: FormControl<string | null | undefined>,
	}
	export function CreateDeleteComputeEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteComputeEnvironmentRequestFormProperties>({
			computeEnvironment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for <code>DeleteJobQueue</code>. */
	export interface DeleteJobQueueRequest {

		/** Required */
		jobQueue: string;
	}

	/** Contains the parameters for <code>DeleteJobQueue</code>. */
	export interface DeleteJobQueueRequestFormProperties {

		/** Required */
		jobQueue: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobQueueRequestFormGroup() {
		return new FormGroup<DeleteJobQueueRequestFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for <code>DeleteSchedulingPolicy</code>. */
	export interface DeleteSchedulingPolicyRequest {

		/** Required */
		arn: string;
	}

	/** Contains the parameters for <code>DeleteSchedulingPolicy</code>. */
	export interface DeleteSchedulingPolicyRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSchedulingPolicyRequestFormGroup() {
		return new FormGroup<DeleteSchedulingPolicyRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterJobDefinitionRequest {

		/** Required */
		jobDefinition: string;
	}
	export interface DeregisterJobDefinitionRequestFormProperties {

		/** Required */
		jobDefinition: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterJobDefinitionRequestFormGroup() {
		return new FormGroup<DeregisterJobDefinitionRequestFormProperties>({
			jobDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for <code>DescribeComputeEnvironments</code>. */
	export interface DescribeComputeEnvironmentsRequest {
		computeEnvironments?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}

	/** Contains the parameters for <code>DescribeComputeEnvironments</code>. */
	export interface DescribeComputeEnvironmentsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComputeEnvironmentsRequestFormGroup() {
		return new FormGroup<DescribeComputeEnvironmentsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>DescribeJobDefinitions</code>. */
	export interface DescribeJobDefinitionsRequest {
		jobDefinitions?: Array<string>;
		maxResults?: number | null;
		jobDefinitionName?: string;
		status?: string;
		nextToken?: string;
	}

	/** Contains the parameters for <code>DescribeJobDefinitions</code>. */
	export interface DescribeJobDefinitionsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		jobDefinitionName: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobDefinitionsRequestFormGroup() {
		return new FormGroup<DescribeJobDefinitionsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			jobDefinitionName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>DescribeJobQueues</code>. */
	export interface DescribeJobQueuesRequest {
		jobQueues?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}

	/** Contains the parameters for <code>DescribeJobQueues</code>. */
	export interface DescribeJobQueuesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobQueuesRequestFormGroup() {
		return new FormGroup<DescribeJobQueuesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>DescribeJobs</code>. */
	export interface DescribeJobsRequest {

		/** Required */
		jobs: Array<string>;
	}

	/** Contains the parameters for <code>DescribeJobs</code>. */
	export interface DescribeJobsRequestFormProperties {
	}
	export function CreateDescribeJobsRequestFormGroup() {
		return new FormGroup<DescribeJobsRequestFormProperties>({
		});

	}


	/** Contains the parameters for <code>DescribeSchedulingPolicies</code>. */
	export interface DescribeSchedulingPoliciesRequest {

		/** Required */
		arns: Array<string>;
	}

	/** Contains the parameters for <code>DescribeSchedulingPolicies</code>. */
	export interface DescribeSchedulingPoliciesRequestFormProperties {
	}
	export function CreateDescribeSchedulingPoliciesRequestFormGroup() {
		return new FormGroup<DescribeSchedulingPoliciesRequestFormProperties>({
		});

	}

	export enum EFSAuthorizationConfigIAM { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum EFSTransitEncryption { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** An object that contains overrides for the Kubernetes resources of a job. */
	export interface EksPropertiesOverride {
		podProperties?: EksPodPropertiesOverride;
	}

	/** An object that contains overrides for the Kubernetes resources of a job. */
	export interface EksPropertiesOverrideFormProperties {
	}
	export function CreateEksPropertiesOverrideFormGroup() {
		return new FormGroup<EksPropertiesOverrideFormProperties>({
		});

	}

	export enum JQStatus { CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', DELETED = 'DELETED', VALID = 'VALID', INVALID = 'INVALID' }

	export enum JobDefinitionType { container = 'container', multinode = 'multinode' }


	/** Contains the parameters for <code>ListJobs</code>. */
	export interface ListJobsRequest {
		jobQueue?: string;
		arrayJobId?: string;
		multiNodeJobId?: string;
		jobStatus?: JobStatus;
		maxResults?: number | null;
		nextToken?: string;
		filters?: Array<KeyValuesPair>;
	}

	/** Contains the parameters for <code>ListJobs</code>. */
	export interface ListJobsRequestFormProperties {
		jobQueue: FormControl<string | null | undefined>,
		arrayJobId: FormControl<string | null | undefined>,
		multiNodeJobId: FormControl<string | null | undefined>,
		jobStatus: FormControl<JobStatus | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined),
			arrayJobId: new FormControl<string | null | undefined>(undefined),
			multiNodeJobId: new FormControl<string | null | undefined>(undefined),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>ListSchedulingPolicies</code>. */
	export interface ListSchedulingPoliciesRequest {
		maxResults?: number | null;
		nextToken?: string;
	}

	/** Contains the parameters for <code>ListSchedulingPolicies</code>. */
	export interface ListSchedulingPoliciesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchedulingPoliciesRequestFormGroup() {
		return new FormGroup<ListSchedulingPoliciesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>ListTagsForResource</code>. */
	export interface ListTagsForResourceRequest {
	}

	/** Contains the parameters for <code>ListTagsForResource</code>. */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/** <p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note> */
	export interface NodeOverrides {
		numNodes?: number | null;
		nodePropertyOverrides?: Array<NodePropertyOverride>;
	}

	/** <p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note> */
	export interface NodeOverridesFormProperties {
		numNodes: FormControl<number | null | undefined>,
	}
	export function CreateNodeOverridesFormGroup() {
		return new FormGroup<NodeOverridesFormProperties>({
			numNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>RegisterJobDefinition</code>. */
	export interface RegisterJobDefinitionRequest {

		/** Required */
		jobDefinitionName: string;

		/** Required */
		type: JobDefinitionType;
		parameters?: ParametersMap;
		schedulingPriority?: number | null;
		containerProperties?: ContainerProperties;
		nodeProperties?: NodeProperties;
		retryStrategy?: RetryStrategy;
		propagateTags?: boolean | null;
		timeout?: JobTimeout;
		tags?: TagrisTagsMap;
		platformCapabilities?: Array<PlatformCapability>;
		eksProperties?: EksProperties;
	}

	/** Contains the parameters for <code>RegisterJobDefinition</code>. */
	export interface RegisterJobDefinitionRequestFormProperties {

		/** Required */
		jobDefinitionName: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<JobDefinitionType | null | undefined>,
		schedulingPriority: FormControl<number | null | undefined>,
		propagateTags: FormControl<boolean | null | undefined>,
	}
	export function CreateRegisterJobDefinitionRequestFormGroup() {
		return new FormGroup<RegisterJobDefinitionRequestFormProperties>({
			jobDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<JobDefinitionType | null | undefined>(undefined, [Validators.required]),
			schedulingPriority: new FormControl<number | null | undefined>(undefined),
			propagateTags: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>SubmitJob</code>. */
	export interface SubmitJobRequest {

		/** Required */
		jobName: string;

		/** Required */
		jobQueue: string;
		shareIdentifier?: string;
		schedulingPriorityOverride?: number | null;
		arrayProperties?: ArrayProperties;
		dependsOn?: Array<JobDependency>;

		/** Required */
		jobDefinition: string;
		parameters?: ParametersMap;
		containerOverrides?: ContainerOverrides;
		nodeOverrides?: NodeOverrides;
		retryStrategy?: RetryStrategy;
		propagateTags?: boolean | null;
		timeout?: JobTimeout;
		tags?: TagrisTagsMap;
		eksPropertiesOverride?: EksPropertiesOverride;
	}

	/** Contains the parameters for <code>SubmitJob</code>. */
	export interface SubmitJobRequestFormProperties {

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		jobQueue: FormControl<string | null | undefined>,
		shareIdentifier: FormControl<string | null | undefined>,
		schedulingPriorityOverride: FormControl<number | null | undefined>,

		/** Required */
		jobDefinition: FormControl<string | null | undefined>,
		propagateTags: FormControl<boolean | null | undefined>,
	}
	export function CreateSubmitJobRequestFormGroup() {
		return new FormGroup<SubmitJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobQueue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shareIdentifier: new FormControl<string | null | undefined>(undefined),
			schedulingPriorityOverride: new FormControl<number | null | undefined>(undefined),
			jobDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			propagateTags: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>TagResource</code>. */
	export interface TagResourceRequest {

		/** Required */
		tags: TagrisTagsMap;
	}

	/** Contains the parameters for <code>TagResource</code>. */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** Contains the parameters for <code>TerminateJob</code>. */
	export interface TerminateJobRequest {

		/** Required */
		jobId: string;

		/** Required */
		reason: string;
	}

	/** Contains the parameters for <code>TerminateJob</code>. */
	export interface TerminateJobRequestFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateTerminateJobRequestFormGroup() {
		return new FormGroup<TerminateJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the parameters for <code>UntagResource</code>. */
	export interface UntagResourceRequest {
	}

	/** Contains the parameters for <code>UntagResource</code>. */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/** Contains the parameters for <code>UpdateComputeEnvironment</code>. */
	export interface UpdateComputeEnvironmentRequest {

		/** Required */
		computeEnvironment: string;
		state?: CEState;
		unmanagedvCpus?: number | null;
		computeResources?: ComputeResourceUpdate;
		serviceRole?: string;
		updatePolicy?: UpdatePolicy;
	}

	/** Contains the parameters for <code>UpdateComputeEnvironment</code>. */
	export interface UpdateComputeEnvironmentRequestFormProperties {

		/** Required */
		computeEnvironment: FormControl<string | null | undefined>,
		state: FormControl<CEState | null | undefined>,
		unmanagedvCpus: FormControl<number | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComputeEnvironmentRequestFormGroup() {
		return new FormGroup<UpdateComputeEnvironmentRequestFormProperties>({
			computeEnvironment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined),
			unmanagedvCpus: new FormControl<number | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>UpdateJobQueue</code>. */
	export interface UpdateJobQueueRequest {

		/** Required */
		jobQueue: string;
		state?: CEState;
		schedulingPolicyArn?: string;
		priority?: number | null;
		computeEnvironmentOrder?: Array<ComputeEnvironmentOrder>;
	}

	/** Contains the parameters for <code>UpdateJobQueue</code>. */
	export interface UpdateJobQueueRequestFormProperties {

		/** Required */
		jobQueue: FormControl<string | null | undefined>,
		state: FormControl<CEState | null | undefined>,
		schedulingPolicyArn: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobQueueRequestFormGroup() {
		return new FormGroup<UpdateJobQueueRequestFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined),
			schedulingPolicyArn: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the parameters for <code>UpdateSchedulingPolicy</code>. */
	export interface UpdateSchedulingPolicyRequest {

		/** Required */
		arn: string;
		fairsharePolicy?: FairsharePolicy;
	}

	/** Contains the parameters for <code>UpdateSchedulingPolicy</code>. */
	export interface UpdateSchedulingPolicyRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchedulingPolicyRequestFormGroup() {
		return new FormGroup<UpdateSchedulingPolicyRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code> or <code>PENDING</code> are canceled. A job in<code>RUNNABLE</code> remains in <code>RUNNABLE</code> until it reaches the head of the job queue. Then the job status is updated to <code>FAILED</code>.</p> <note> <p>A <code>PENDING</code> job is canceled after all dependency jobs are completed. Therefore, it may take longer than expected to cancel a job in <code>PENDING</code> status.</p> <p>When you try to cancel an array parent job in <code>PENDING</code>, Batch attempts to cancel all child jobs. The array parent job is canceled when all child jobs are completed.</p> </note> <p>Jobs that progressed to the <code>STARTING</code> or <code>RUNNING</code> state aren't canceled. However, the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.</p>
		 * Post v1/canceljob
		 * @return {CancelJobResponse} Success
		 */
		CancelJob(requestBody: CancelJobPostBody): Observable<CancelJobResponse> {
			return this.http.post<CancelJobResponse>(this.baseUri + 'v1/canceljob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>To create a compute environment that uses EKS resources, the caller must have permissions to call <code>eks:DescribeCluster</code>.</p> </note> <note> <p>Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For example, it also doesn't update the AMIs in your compute environment when a newer version of the Amazon ECS optimized AMI is available. You're responsible for the management of the guest operating system. This includes any updates and security patches. You're also responsible for any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your Batch jobs. The original method is to complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> <p>In April 2022, Batch added enhanced support for updating compute environments. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a>. To use the enhanced updating of compute environments to update AMIs, follow these rules:</p> <ul> <li> <p>Either don't set the service role (<code>serviceRole</code>) parameter or set it to the <b>AWSBatchServiceRole</b> service-linked role.</p> </li> <li> <p>Set the allocation strategy (<code>allocationStrategy</code>) parameter to <code>BEST_FIT_PROGRESSIVE</code>, <code>SPOT_CAPACITY_OPTIMIZED</code>, or <code>SPOT_PRICE_CAPACITY_OPTIMIZED</code>.</p> </li> <li> <p>Set the update to latest image version (<code>updateToLatestImageVersion</code>) parameter to <code>true</code>. The <code>updateToLatestImageVersion</code> parameter is used when you update a compute environment. This parameter is ignored when you create a compute environment.</p> </li> <li> <p>Don't specify an AMI ID in <code>imageId</code>, <code>imageIdOverride</code> (in <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_Ec2Configuration.html"> <code>ec2Configuration</code> </a>), or in the launch template (<code>launchTemplate</code>). In that case, Batch selects the latest Amazon ECS optimized AMI that's supported by Batch at the time the infrastructure update is initiated. Alternatively, you can specify the AMI ID in the <code>imageId</code> or <code>imageIdOverride</code> parameters, or the launch template identified by the <code>LaunchTemplate</code> properties. Changing any of these properties starts an infrastructure update. If the AMI ID is specified in the launch template, it can't be replaced by specifying an AMI ID in either the <code>imageId</code> or <code>imageIdOverride</code> parameters. It can only be replaced by specifying a different launch template, or if the launch template version is set to <code>$Default</code> or <code>$Latest</code>, by setting either a new default version for the launch template (if <code>$Default</code>) or by adding a new version to the launch template (if <code>$Latest</code>).</p> </li> </ul> <p>If these rules are followed, any update that starts an infrastructure update causes the AMI ID to be re-selected. If the <code>version</code> setting in the launch template (<code>launchTemplate</code>) is set to <code>$Latest</code> or <code>$Default</code>, the latest or default version of the launch template is evaluated up at the time of the infrastructure update, even if the <code>launchTemplate</code> wasn't updated.</p> </note>
		 * Post v1/createcomputeenvironment
		 * @return {CreateComputeEnvironmentResponse} Success
		 */
		CreateComputeEnvironment(requestBody: CreateComputeEnvironmentPostBody): Observable<CreateComputeEnvironmentResponse> {
			return this.http.post<CreateComputeEnvironmentResponse>(this.baseUri + 'v1/createcomputeenvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>
		 * Post v1/createjobqueue
		 * @return {CreateJobQueueResponse} Success
		 */
		CreateJobQueue(requestBody: CreateJobQueuePostBody): Observable<CreateJobQueueResponse> {
			return this.http.post<CreateJobQueueResponse>(this.baseUri + 'v1/createjobqueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Batch scheduling policy.
		 * Post v1/createschedulingpolicy
		 * @return {CreateSchedulingPolicyResponse} Success
		 */
		CreateSchedulingPolicy(requestBody: CreateSchedulingPolicyPostBody): Observable<CreateSchedulingPolicyResponse> {
			return this.http.post<CreateSchedulingPolicyResponse>(this.baseUri + 'v1/createschedulingpolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>
		 * Post v1/deletecomputeenvironment
		 * @return {DeleteComputeEnvironmentResponse} Success
		 */
		DeleteComputeEnvironment(requestBody: DeleteComputeEnvironmentPostBody): Observable<DeleteComputeEnvironmentResponse> {
			return this.http.post<DeleteComputeEnvironmentResponse>(this.baseUri + 'v1/deletecomputeenvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>
		 * Post v1/deletejobqueue
		 * @return {DeleteJobQueueResponse} Success
		 */
		DeleteJobQueue(requestBody: DeleteJobQueuePostBody): Observable<DeleteJobQueueResponse> {
			return this.http.post<DeleteJobQueueResponse>(this.baseUri + 'v1/deletejobqueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified scheduling policy.</p> <p>You can't delete a scheduling policy that's used in any job queues.</p>
		 * Post v1/deleteschedulingpolicy
		 * @return {DeleteSchedulingPolicyResponse} Success
		 */
		DeleteSchedulingPolicy(requestBody: DeleteSchedulingPolicyPostBody): Observable<DeleteSchedulingPolicyResponse> {
			return this.http.post<DeleteSchedulingPolicyResponse>(this.baseUri + 'v1/deleteschedulingpolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.
		 * Post v1/deregisterjobdefinition
		 * @return {DeregisterJobDefinitionResponse} Success
		 */
		DeregisterJobDefinition(requestBody: DeregisterJobDefinitionPostBody): Observable<DeregisterJobDefinitionResponse> {
			return this.http.post<DeregisterJobDefinitionResponse>(this.baseUri + 'v1/deregisterjobdefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you launch your Amazon ECS container instances into.</p>
		 * Post v1/describecomputeenvironments
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeComputeEnvironmentsResponse} Success
		 */
		DescribeComputeEnvironments(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeComputeEnvironmentsPostBody): Observable<DescribeComputeEnvironmentsResponse> {
			return this.http.post<DescribeComputeEnvironmentsResponse>(this.baseUri + 'v1/describecomputeenvironments?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.
		 * Post v1/describejobdefinitions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeJobDefinitionsResponse} Success
		 */
		DescribeJobDefinitions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeJobDefinitionsPostBody): Observable<DescribeJobDefinitionsResponse> {
			return this.http.post<DescribeJobDefinitionsResponse>(this.baseUri + 'v1/describejobdefinitions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more of your job queues.
		 * Post v1/describejobqueues
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeJobQueuesResponse} Success
		 */
		DescribeJobQueues(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeJobQueuesPostBody): Observable<DescribeJobQueuesResponse> {
			return this.http.post<DescribeJobQueuesResponse>(this.baseUri + 'v1/describejobqueues?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a list of Batch jobs.
		 * Post v1/describejobs
		 * @return {DescribeJobsResponse} Success
		 */
		DescribeJobs(requestBody: DescribeJobsPostBody): Observable<DescribeJobsResponse> {
			return this.http.post<DescribeJobsResponse>(this.baseUri + 'v1/describejobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more of your scheduling policies.
		 * Post v1/describeschedulingpolicies
		 * @return {DescribeSchedulingPoliciesResponse} Success
		 */
		DescribeSchedulingPolicies(requestBody: DescribeSchedulingPoliciesPostBody): Observable<DescribeSchedulingPoliciesResponse> {
			return this.http.post<DescribeSchedulingPoliciesResponse>(this.baseUri + 'v1/describeschedulingpolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>
		 * Post v1/listjobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListJobsPostBody): Observable<ListJobsResponse> {
			return this.http.post<ListJobsResponse>(this.baseUri + 'v1/listjobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of Batch scheduling policies.
		 * Post v1/listschedulingpolicies
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSchedulingPoliciesResponse} Success
		 */
		ListSchedulingPolicies(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSchedulingPoliciesPostBody): Observable<ListSchedulingPoliciesResponse> {
			return this.http.post<ListSchedulingPoliciesResponse>(this.baseUri + 'v1/listschedulingpolicies?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
		 * Get v1/tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource that tags are listed for. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
		 * Post v1/tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource that tags are added to. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers an Batch job definition.
		 * Post v1/registerjobdefinition
		 * @return {RegisterJobDefinitionResponse} Success
		 */
		RegisterJobDefinition(requestBody: RegisterJobDefinitionPostBody): Observable<RegisterJobDefinitionResponse> {
			return this.http.post<RegisterJobDefinitionResponse>(this.baseUri + 'v1/registerjobdefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <note> <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p> </note> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>
		 * Post v1/submitjob
		 * @return {SubmitJobResponse} Success
		 */
		SubmitJob(requestBody: SubmitJobPostBody): Observable<SubmitJobResponse> {
			return this.http.post<SubmitJobResponse>(this.baseUri + 'v1/submitjob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.
		 * Post v1/terminatejob
		 * @return {TerminateJobResponse} Success
		 */
		TerminateJob(requestBody: TerminateJobPostBody): Observable<TerminateJobResponse> {
			return this.http.post<TerminateJobResponse>(this.baseUri + 'v1/terminatejob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified tags from an Batch resource.
		 * Delete v1/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource from which to delete tags. Batch resources that support tags are compute environments, jobs, job definitions, job queues, and scheduling policies. ARNs for child jobs of array and multi-node parallel (MNP) jobs aren't supported.
		 * @param {Array<string>} tagKeys The keys of the tags to be removed.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates an Batch compute environment.
		 * Post v1/updatecomputeenvironment
		 * @return {UpdateComputeEnvironmentResponse} Success
		 */
		UpdateComputeEnvironment(requestBody: UpdateComputeEnvironmentPostBody): Observable<UpdateComputeEnvironmentResponse> {
			return this.http.post<UpdateComputeEnvironmentResponse>(this.baseUri + 'v1/updatecomputeenvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a job queue.
		 * Post v1/updatejobqueue
		 * @return {UpdateJobQueueResponse} Success
		 */
		UpdateJobQueue(requestBody: UpdateJobQueuePostBody): Observable<UpdateJobQueueResponse> {
			return this.http.post<UpdateJobQueueResponse>(this.baseUri + 'v1/updatejobqueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a scheduling policy.
		 * Post v1/updateschedulingpolicy
		 * @return {UpdateSchedulingPolicyResponse} Success
		 */
		UpdateSchedulingPolicy(requestBody: UpdateSchedulingPolicyPostBody): Observable<UpdateSchedulingPolicyResponse> {
			return this.http.post<UpdateSchedulingPolicyResponse>(this.baseUri + 'v1/updateschedulingpolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CancelJobPostBody {

		/**
		 * The Batch job ID of the job to cancel.
		 * Required
		 */
		jobId: string;

		/**
		 * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.
		 * Required
		 */
		reason: string;
	}
	export interface CancelJobPostBodyFormProperties {

		/**
		 * The Batch job ID of the job to cancel.
		 * Required
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobPostBodyFormGroup() {
		return new FormGroup<CancelJobPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateComputeEnvironmentPostBody {

		/**
		 * The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		computeEnvironmentName: string;

		/**
		 * The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
		 * Required
		 */
		type: CEType;

		/** <p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p> */
		state?: CEState | null;

		/**
		 * <p>The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.</p> <note> <p>This parameter is only supported when the <code>type</code> parameter is set to <code>UNMANAGED</code>.</p> </note>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unmanagedvCpus?: number | null;

		/** An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>. */
		computeResources?: CreateComputeEnvironmentPostBodyComputeResources;

		/** <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn't exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code>, specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note> */
		serviceRole?: string | null;

		/** <p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don't propagate to the underlying compute resources.</p> */
		tags?: {[id: string]: string };

		/** Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created. */
		eksConfiguration?: CreateComputeEnvironmentPostBodyEksConfiguration;
	}
	export interface CreateComputeEnvironmentPostBodyFormProperties {

		/**
		 * The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		computeEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
		 * Required
		 */
		type: FormControl<CEType | null | undefined>,

		/** <p>The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p> */
		state: FormControl<CEState | null | undefined>,

		/**
		 * <p>The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.</p> <note> <p>This parameter is only supported when the <code>type</code> parameter is set to <code>UNMANAGED</code>.</p> </note>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unmanagedvCpus: FormControl<number | null | undefined>,

		/** <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If your account already created the Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the Batch service-linked role doesn't exist in your account, and no role is specified here, the service attempts to create the Batch service-linked role in your account.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name <code>bar</code> has a path of <code>/foo/</code>, specify <code>/foo/bar</code> as the role name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names">Friendly names and paths</a> in the <i>IAM User Guide</i>.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note> */
		serviceRole: FormControl<string | null | undefined>,

		/** <p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don't propagate to the underlying compute resources.</p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateComputeEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateComputeEnvironmentPostBodyFormProperties>({
			computeEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CEType | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined),
			unmanagedvCpus: new FormControl<number | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateComputeEnvironmentPostBodyComputeResources {
		type?: CRType;
		allocationStrategy?: CRAllocationStrategy;
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
		instanceTypes?: Array<string>;
		imageId?: string;
		subnets?: Array<string>;
		securityGroupIds?: Array<string>;
		ec2KeyPair?: string;
		instanceRole?: string;
		tags?: TagsMap;
		placementGroup?: string;
		bidPercentage?: number | null;
		spotIamFleetRole?: string;
		launchTemplate?: LaunchTemplateSpecification;
		ec2Configuration?: Array<Ec2Configuration>;
	}
	export interface CreateComputeEnvironmentPostBodyComputeResourcesFormProperties {
		type: FormControl<CRType | null | undefined>,
		allocationStrategy: FormControl<CRAllocationStrategy | null | undefined>,
		minvCpus: FormControl<number | null | undefined>,
		maxvCpus: FormControl<number | null | undefined>,
		desiredvCpus: FormControl<number | null | undefined>,
		imageId: FormControl<string | null | undefined>,
		ec2KeyPair: FormControl<string | null | undefined>,
		instanceRole: FormControl<string | null | undefined>,
		placementGroup: FormControl<string | null | undefined>,
		bidPercentage: FormControl<number | null | undefined>,
		spotIamFleetRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputeEnvironmentPostBodyComputeResourcesFormGroup() {
		return new FormGroup<CreateComputeEnvironmentPostBodyComputeResourcesFormProperties>({
			type: new FormControl<CRType | null | undefined>(undefined),
			allocationStrategy: new FormControl<CRAllocationStrategy | null | undefined>(undefined),
			minvCpus: new FormControl<number | null | undefined>(undefined),
			maxvCpus: new FormControl<number | null | undefined>(undefined),
			desiredvCpus: new FormControl<number | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			ec2KeyPair: new FormControl<string | null | undefined>(undefined),
			instanceRole: new FormControl<string | null | undefined>(undefined),
			placementGroup: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<number | null | undefined>(undefined),
			spotIamFleetRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateComputeEnvironmentPostBodyEksConfiguration {
		eksClusterArn?: string;
		kubernetesNamespace?: string;
	}
	export interface CreateComputeEnvironmentPostBodyEksConfigurationFormProperties {
		eksClusterArn: FormControl<string | null | undefined>,
		kubernetesNamespace: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputeEnvironmentPostBodyEksConfigurationFormGroup() {
		return new FormGroup<CreateComputeEnvironmentPostBodyEksConfigurationFormProperties>({
			eksClusterArn: new FormControl<string | null | undefined>(undefined),
			kubernetesNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobQueuePostBody {

		/**
		 * The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		jobQueueName: string;

		/** The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish. */
		state?: CEState | null;

		/** The Amazon Resource Name (ARN) of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. An example is <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>. */
		schedulingPolicyArn?: string | null;

		/**
		 * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: number;

		/**
		 * <p>The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note>
		 * Required
		 */
		computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;

		/** The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in <i>Batch User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateJobQueuePostBodyFormProperties {

		/**
		 * The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		jobQueueName: FormControl<string | null | undefined>,

		/** The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish. */
		state: FormControl<CEState | null | undefined>,

		/** The Amazon Resource Name (ARN) of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. An example is <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>. */
		schedulingPolicyArn: FormControl<string | null | undefined>,

		/**
		 * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging your Batch resources</a> in <i>Batch User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateJobQueuePostBodyFormGroup() {
		return new FormGroup<CreateJobQueuePostBodyFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined),
			schedulingPolicyArn: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSchedulingPolicyPostBody {

		/**
		 * The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		name: string;

		/** The fair share policy for a scheduling policy. */
		fairsharePolicy?: CreateSchedulingPolicyPostBodyFairsharePolicy;

		/** <p>The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations.</p> */
		tags?: {[id: string]: string };
	}
	export interface CreateSchedulingPolicyPostBodyFormProperties {

		/**
		 * The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** <p>The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations.</p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSchedulingPolicyPostBodyFormGroup() {
		return new FormGroup<CreateSchedulingPolicyPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSchedulingPolicyPostBodyFairsharePolicy {
		shareDecaySeconds?: number | null;
		computeReservation?: number | null;
		shareDistribution?: Array<ShareAttributes>;
	}
	export interface CreateSchedulingPolicyPostBodyFairsharePolicyFormProperties {
		shareDecaySeconds: FormControl<number | null | undefined>,
		computeReservation: FormControl<number | null | undefined>,
	}
	export function CreateCreateSchedulingPolicyPostBodyFairsharePolicyFormGroup() {
		return new FormGroup<CreateSchedulingPolicyPostBodyFairsharePolicyFormProperties>({
			shareDecaySeconds: new FormControl<number | null | undefined>(undefined),
			computeReservation: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteComputeEnvironmentPostBody {

		/**
		 * The name or Amazon Resource Name (ARN) of the compute environment to delete.
		 * Required
		 */
		computeEnvironment: string;
	}
	export interface DeleteComputeEnvironmentPostBodyFormProperties {

		/**
		 * The name or Amazon Resource Name (ARN) of the compute environment to delete.
		 * Required
		 */
		computeEnvironment: FormControl<string | null | undefined>,
	}
	export function CreateDeleteComputeEnvironmentPostBodyFormGroup() {
		return new FormGroup<DeleteComputeEnvironmentPostBodyFormProperties>({
			computeEnvironment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteJobQueuePostBody {

		/**
		 * The short name or full Amazon Resource Name (ARN) of the queue to delete.
		 * Required
		 */
		jobQueue: string;
	}
	export interface DeleteJobQueuePostBodyFormProperties {

		/**
		 * The short name or full Amazon Resource Name (ARN) of the queue to delete.
		 * Required
		 */
		jobQueue: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobQueuePostBodyFormGroup() {
		return new FormGroup<DeleteJobQueuePostBodyFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSchedulingPolicyPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the scheduling policy to delete.
		 * Required
		 */
		arn: string;
	}
	export interface DeleteSchedulingPolicyPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the scheduling policy to delete.
		 * Required
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSchedulingPolicyPostBodyFormGroup() {
		return new FormGroup<DeleteSchedulingPolicyPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterJobDefinitionPostBody {

		/**
		 * The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.
		 * Required
		 */
		jobDefinition: string;
	}
	export interface DeregisterJobDefinitionPostBodyFormProperties {

		/**
		 * The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.
		 * Required
		 */
		jobDefinition: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterJobDefinitionPostBodyFormGroup() {
		return new FormGroup<DeregisterJobDefinitionPostBodyFormProperties>({
			jobDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeComputeEnvironmentsPostBody {

		/** A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries. */
		computeEnvironments?: Array<string>;

		/**
		 * The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}
	export interface DescribeComputeEnvironmentsPostBodyFormProperties {

		/**
		 * The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComputeEnvironmentsPostBodyFormGroup() {
		return new FormGroup<DescribeComputeEnvironmentsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobDefinitionsPostBody {

		/** A list of up to 100 job definitions. Each entry in the list can either be an ARN in the format <code>arn:aws:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code> or a short version using the form <code>${JobDefinitionName}:${Revision}</code>. */
		jobDefinitions?: Array<string>;

		/**
		 * The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/** The name of the job definition to describe. */
		jobDefinitionName?: string | null;

		/** The status used to filter job definitions. */
		status?: string | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}
	export interface DescribeJobDefinitionsPostBodyFormProperties {

		/**
		 * The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The name of the job definition to describe. */
		jobDefinitionName: FormControl<string | null | undefined>,

		/** The status used to filter job definitions. */
		status: FormControl<string | null | undefined>,

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobDefinitionsPostBodyFormGroup() {
		return new FormGroup<DescribeJobDefinitionsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			jobDefinitionName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobQueuesPostBody {

		/** A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries. */
		jobQueues?: Array<string>;

		/**
		 * The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}
	export interface DescribeJobQueuesPostBodyFormProperties {

		/**
		 * The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobQueuesPostBodyFormGroup() {
		return new FormGroup<DescribeJobQueuesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobsPostBody {

		/**
		 * A list of up to 100 job IDs.
		 * Required
		 */
		jobs: Array<string>;
	}
	export interface DescribeJobsPostBodyFormProperties {
	}
	export function CreateDescribeJobsPostBodyFormGroup() {
		return new FormGroup<DescribeJobsPostBodyFormProperties>({
		});

	}

	export interface DescribeSchedulingPoliciesPostBody {

		/**
		 * A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries.
		 * Required
		 */
		arns: Array<string>;
	}
	export interface DescribeSchedulingPoliciesPostBodyFormProperties {
	}
	export function CreateDescribeSchedulingPoliciesPostBodyFormGroup() {
		return new FormGroup<DescribeSchedulingPoliciesPostBodyFormProperties>({
		});

	}

	export interface ListJobsPostBody {

		/** The name or full Amazon Resource Name (ARN) of the job queue used to list jobs. */
		jobQueue?: string | null;

		/** The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array. */
		arrayJobId?: string | null;

		/** The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job. */
		multiNodeJobId?: string | null;

		/** The job status used to filter jobs in the specified queue. If the <code>filters</code> parameter is specified, the <code>jobStatus</code> parameter is ignored and jobs with any status are returned. If you don't specify a status, only <code>RUNNING</code> jobs are returned. */
		jobStatus?: JobStatus | null;

		/**
		 * The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;

		/** <p>The filter to apply to the query. Only one filter can be used at a time. When the filter is used, <code>jobStatus</code> is ignored. The filter doesn't apply to child jobs in an array or multi-node parallel (MNP) jobs. The results are sorted by the <code>createdAt</code> field, with the most recent jobs being first.</p> <dl> <dt>JOB_NAME</dt> <dd> <p>The value of the filter is a case-insensitive match for the job name. If the value ends with an asterisk (*), the filter matches any job name that begins with the string before the '*'. This corresponds to the <code>jobName</code> value. For example, <code>test1</code> matches both <code>Test1</code> and <code>test1</code>, and <code>test1*</code> matches both <code>test1</code> and <code>Test10</code>. When the <code>JOB_NAME</code> filter is used, the results are grouped by the job name and version.</p> </dd> <dt>JOB_DEFINITION</dt> <dd> <p>The value for the filter is the name or Amazon Resource Name (ARN) of the job definition. This corresponds to the <code>jobDefinition</code> value. The value is case sensitive. When the value for the filter is the job definition name, the results include all the jobs that used any revision of that job definition name. If the value ends with an asterisk (*), the filter matches any job definition name that begins with the string before the '*'. For example, <code>jd1</code> matches only <code>jd1</code>, and <code>jd1*</code> matches both <code>jd1</code> and <code>jd1A</code>. The version of the job definition that's used doesn't affect the sort order. When the <code>JOB_DEFINITION</code> filter is used and the ARN is used (which is in the form <code>arn:${Partition}:batch:${Region}:${Account}:job-definition/${JobDefinitionName}:${Revision}</code>), the results include jobs that used the specified revision of the job definition. Asterisk (*) isn't supported when the ARN is used.</p> </dd> <dt>BEFORE_CREATED_AT</dt> <dd> <p>The value for the filter is the time that's before the job was created. This corresponds to the <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p> </dd> <dt>AFTER_CREATED_AT</dt> <dd> <p>The value for the filter is the time that's after the job was created. This corresponds to the <code>createdAt</code> value. The value is a string representation of the number of milliseconds since 00:00:00 UTC (midnight) on January 1, 1970.</p> </dd> </dl> */
		filters?: Array<KeyValuesPair>;
	}
	export interface ListJobsPostBodyFormProperties {

		/** The name or full Amazon Resource Name (ARN) of the job queue used to list jobs. */
		jobQueue: FormControl<string | null | undefined>,

		/** The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array. */
		arrayJobId: FormControl<string | null | undefined>,

		/** The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job. */
		multiNodeJobId: FormControl<string | null | undefined>,

		/** The job status used to filter jobs in the specified queue. If the <code>filters</code> parameter is specified, the <code>jobStatus</code> parameter is ignored and jobs with any status are returned. If you don't specify a status, only <code>RUNNING</code> jobs are returned. */
		jobStatus: FormControl<JobStatus | null | undefined>,

		/**
		 * The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsPostBodyFormGroup() {
		return new FormGroup<ListJobsPostBodyFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined),
			arrayJobId: new FormControl<string | null | undefined>(undefined),
			multiNodeJobId: new FormControl<string | null | undefined>(undefined),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSchedulingPoliciesPostBody {

		/**
		 * The maximum number of results that's returned by <code>ListSchedulingPolicies</code> in paginated output. When this parameter is used, <code>ListSchedulingPolicies</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListSchedulingPolicies</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, <code>ListSchedulingPolicies</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value that's returned from a previous paginated <code>ListSchedulingPolicies</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}
	export interface ListSchedulingPoliciesPostBodyFormProperties {

		/**
		 * The maximum number of results that's returned by <code>ListSchedulingPolicies</code> in paginated output. When this parameter is used, <code>ListSchedulingPolicies</code> only returns <code>maxResults</code> results in a single page and a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListSchedulingPolicies</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, <code>ListSchedulingPolicies</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>The <code>nextToken</code> value that's returned from a previous paginated <code>ListSchedulingPolicies</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>Treat this token as an opaque identifier that's only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchedulingPoliciesPostBodyFormGroup() {
		return new FormGroup<ListSchedulingPoliciesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterJobDefinitionPostBody {

		/**
		 * The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		jobDefinitionName: string;

		/**
		 * <p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>Batch User Guide</i>.</p> <note> <p>If the job is run on Fargate resources, then <code>multinode</code> isn't supported.</p> </note>
		 * Required
		 */
		type: JobDefinitionType;

		/** Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters?: {[id: string]: string };

		/**
		 * <p>The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		schedulingPriority?: number | null;

		/** Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job. */
		containerProperties?: RegisterJobDefinitionPostBodyContainerProperties;

		/** <p>An object that represents the node properties of a multi-node parallel job.</p> <note> <p>Node properties can't be specified for Amazon EKS based job definitions.</p> </note> */
		nodeProperties?: RegisterJobDefinitionPostBodyNodeProperties;

		/** The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>. */
		retryStrategy?: RegisterJobDefinitionPostBodyRetryStrategy;

		/** <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>propagateTags</code>.</p> </note> */
		propagateTags?: boolean | null;

		/** An object that represents a job timeout configuration. */
		timeout?: RegisterJobDefinitionPostBodyTimeout;

		/** The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging Amazon Web Services Resources</a> in <i>Batch User Guide</i>. */
		tags?: {[id: string]: string };

		/** <p>The platform capabilities required by the job definition. If no value is specified, it defaults to <code>EC2</code>. To run the job on Fargate resources, specify <code>FARGATE</code>.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>platformCapabilities</code>.</p> </note> */
		platformCapabilities?: Array<PlatformCapability>;

		/** An object that contains the properties for the Kubernetes resources of a job. */
		eksProperties?: RegisterJobDefinitionPostBodyEksProperties;
	}
	export interface RegisterJobDefinitionPostBodyFormProperties {

		/**
		 * The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		jobDefinitionName: FormControl<string | null | undefined>,

		/**
		 * <p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>Batch User Guide</i>.</p> <note> <p>If the job is run on Fargate resources, then <code>multinode</code> isn't supported.</p> </note>
		 * Required
		 */
		type: FormControl<JobDefinitionType | null | undefined>,

		/** Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The scheduling priority for jobs that are submitted with this job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		schedulingPriority: FormControl<number | null | undefined>,

		/** <p>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.</p> <note> <p>If the job runs on Amazon EKS resources, then you must not specify <code>propagateTags</code>.</p> </note> */
		propagateTags: FormControl<boolean | null | undefined>,

		/** The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging Amazon Web Services Resources</a> in <i>Batch User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRegisterJobDefinitionPostBodyFormGroup() {
		return new FormGroup<RegisterJobDefinitionPostBodyFormProperties>({
			jobDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<JobDefinitionType | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			schedulingPriority: new FormControl<number | null | undefined>(undefined),
			propagateTags: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface RegisterJobDefinitionPostBodyContainerProperties {
		image?: string;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		jobRoleArn?: string;
		executionRoleArn?: string;
		volumes?: Array<Volume>;
		environment?: Array<KeyValuePair>;
		mountPoints?: Array<MountPoint>;
		readonlyRootFilesystem?: boolean | null;
		privileged?: boolean | null;
		ulimits?: Array<Ulimit>;
		user?: string;
		instanceType?: string;
		resourceRequirements?: Array<ResourceRequirement>;
		linuxParameters?: LinuxParameters;
		logConfiguration?: LogConfiguration;
		secrets?: Array<Secret>;
		networkConfiguration?: NetworkConfiguration;
		fargatePlatformConfiguration?: FargatePlatformConfiguration;
		ephemeralStorage?: EphemeralStorage;

		/** An object that represents the compute environment architecture for Batch jobs on Fargate. */
		runtimePlatform?: RuntimePlatform;
	}
	export interface RegisterJobDefinitionPostBodyContainerPropertiesFormProperties {
		image: FormControl<string | null | undefined>,
		vcpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		jobRoleArn: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		readonlyRootFilesystem: FormControl<boolean | null | undefined>,
		privileged: FormControl<boolean | null | undefined>,
		user: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateRegisterJobDefinitionPostBodyContainerPropertiesFormGroup() {
		return new FormGroup<RegisterJobDefinitionPostBodyContainerPropertiesFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			vcpus: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			jobRoleArn: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			readonlyRootFilesystem: new FormControl<boolean | null | undefined>(undefined),
			privileged: new FormControl<boolean | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterJobDefinitionPostBodyNodeProperties {
		numNodes?: number | null;
		mainNode?: number | null;
		nodeRangeProperties?: Array<NodeRangeProperty>;
	}
	export interface RegisterJobDefinitionPostBodyNodePropertiesFormProperties {
		numNodes: FormControl<number | null | undefined>,
		mainNode: FormControl<number | null | undefined>,
	}
	export function CreateRegisterJobDefinitionPostBodyNodePropertiesFormGroup() {
		return new FormGroup<RegisterJobDefinitionPostBodyNodePropertiesFormProperties>({
			numNodes: new FormControl<number | null | undefined>(undefined),
			mainNode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterJobDefinitionPostBodyRetryStrategy {
		attempts?: number | null;
		evaluateOnExit?: Array<EvaluateOnExit>;
	}
	export interface RegisterJobDefinitionPostBodyRetryStrategyFormProperties {
		attempts: FormControl<number | null | undefined>,
	}
	export function CreateRegisterJobDefinitionPostBodyRetryStrategyFormGroup() {
		return new FormGroup<RegisterJobDefinitionPostBodyRetryStrategyFormProperties>({
			attempts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterJobDefinitionPostBodyTimeout {
		attemptDurationSeconds?: number | null;
	}
	export interface RegisterJobDefinitionPostBodyTimeoutFormProperties {
		attemptDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRegisterJobDefinitionPostBodyTimeoutFormGroup() {
		return new FormGroup<RegisterJobDefinitionPostBodyTimeoutFormProperties>({
			attemptDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterJobDefinitionPostBodyEksProperties {
		podProperties?: EksPodProperties;
	}
	export interface RegisterJobDefinitionPostBodyEksPropertiesFormProperties {
	}
	export function CreateRegisterJobDefinitionPostBodyEksPropertiesFormGroup() {
		return new FormGroup<RegisterJobDefinitionPostBodyEksPropertiesFormProperties>({
		});

	}

	export interface SubmitJobPostBody {

		/**
		 * The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		jobName: string;

		/**
		 * The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.
		 * Required
		 */
		jobQueue: string;

		/** <p>The share identifier for the job. Don't specify this parameter if the job queue doesn't have a scheduling policy. If the job queue has a scheduling policy, then this parameter must be specified.</p> <p>This string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).</p> */
		shareIdentifier?: string | null;

		/**
		 * <p>The scheduling priority for the job. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		schedulingPriorityOverride?: number | null;

		/** An object that represents an Batch array job. */
		arrayProperties?: SubmitJobPostBodyArrayProperties;

		/** A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin. */
		dependsOn?: Array<JobDependency>;

		/**
		 * <p>The job definition used by this job. This value can be one of <code>definition-name</code>, <code>definition-name:revision</code>, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (<code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i>:<i>revision</i> </code>, or <code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i> </code>).</p> <p>If the revision is not specified, then the latest active revision is used.</p>
		 * Required
		 */
		jobDefinition: string;

		/** Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters?: {[id: string]: string };

		/** <p>The overrides that should be sent to a container.</p> <p>For information about using Batch overrides when you connect event sources to targets, see <a href="https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_BatchContainerOverrides.html">BatchContainerOverrides</a>.</p> */
		containerOverrides?: SubmitJobPostBodyContainerOverrides;

		/** <p>An object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.</p> <note> <p>This parameter isn't applicable to jobs that are running on Fargate resources. Don't provide it for these jobs. Rather, use <code>containerOverrides</code> instead.</p> </note> */
		nodeOverrides?: SubmitJobPostBodyNodeOverrides;

		/** The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>. */
		retryStrategy?: SubmitJobPostBodyRetryStrategy;

		/** Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state. When specified, this overrides the tag propagation setting in the job definition. */
		propagateTags?: boolean | null;

		/** An object that represents a job timeout configuration. */
		timeout?: SubmitJobPostBodyTimeout;

		/** The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>. */
		tags?: {[id: string]: string };

		/** An object that contains overrides for the Kubernetes resources of a job. */
		eksPropertiesOverride?: SubmitJobPostBodyEksPropertiesOverride;
	}
	export interface SubmitJobPostBodyFormProperties {

		/**
		 * The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
		 * Required
		 */
		jobName: FormControl<string | null | undefined>,

		/**
		 * The job queue where the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.
		 * Required
		 */
		jobQueue: FormControl<string | null | undefined>,

		/** <p>The share identifier for the job. Don't specify this parameter if the job queue doesn't have a scheduling policy. If the job queue has a scheduling policy, then this parameter must be specified.</p> <p>This string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).</p> */
		shareIdentifier: FormControl<string | null | undefined>,

		/**
		 * <p>The scheduling priority for the job. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority. This overrides any scheduling priority in the job definition.</p> <p>The minimum supported value is 0 and the maximum supported value is 9999.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		schedulingPriorityOverride: FormControl<number | null | undefined>,

		/**
		 * <p>The job definition used by this job. This value can be one of <code>definition-name</code>, <code>definition-name:revision</code>, or the Amazon Resource Name (ARN) for the job definition, with or without the revision (<code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i>:<i>revision</i> </code>, or <code>arn:aws:batch:<i>region</i>:<i>account</i>:job-definition/<i>definition-name</i> </code>).</p> <p>If the revision is not specified, then the latest active revision is used.</p>
		 * Required
		 */
		jobDefinition: FormControl<string | null | undefined>,

		/** Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state. When specified, this overrides the tag propagation setting in the job definition. */
		propagateTags: FormControl<boolean | null | undefined>,

		/** The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in <i>Amazon Web Services General Reference</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSubmitJobPostBodyFormGroup() {
		return new FormGroup<SubmitJobPostBodyFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobQueue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shareIdentifier: new FormControl<string | null | undefined>(undefined),
			schedulingPriorityOverride: new FormControl<number | null | undefined>(undefined),
			jobDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			propagateTags: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface SubmitJobPostBodyArrayProperties {
		size?: number | null;
	}
	export interface SubmitJobPostBodyArrayPropertiesFormProperties {
		size: FormControl<number | null | undefined>,
	}
	export function CreateSubmitJobPostBodyArrayPropertiesFormGroup() {
		return new FormGroup<SubmitJobPostBodyArrayPropertiesFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubmitJobPostBodyContainerOverrides {
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		instanceType?: string;
		environment?: Array<KeyValuePair>;
		resourceRequirements?: Array<ResourceRequirement>;
	}
	export interface SubmitJobPostBodyContainerOverridesFormProperties {
		vcpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateSubmitJobPostBodyContainerOverridesFormGroup() {
		return new FormGroup<SubmitJobPostBodyContainerOverridesFormProperties>({
			vcpus: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubmitJobPostBodyNodeOverrides {
		numNodes?: number | null;
		nodePropertyOverrides?: Array<NodePropertyOverride>;
	}
	export interface SubmitJobPostBodyNodeOverridesFormProperties {
		numNodes: FormControl<number | null | undefined>,
	}
	export function CreateSubmitJobPostBodyNodeOverridesFormGroup() {
		return new FormGroup<SubmitJobPostBodyNodeOverridesFormProperties>({
			numNodes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubmitJobPostBodyRetryStrategy {
		attempts?: number | null;
		evaluateOnExit?: Array<EvaluateOnExit>;
	}
	export interface SubmitJobPostBodyRetryStrategyFormProperties {
		attempts: FormControl<number | null | undefined>,
	}
	export function CreateSubmitJobPostBodyRetryStrategyFormGroup() {
		return new FormGroup<SubmitJobPostBodyRetryStrategyFormProperties>({
			attempts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubmitJobPostBodyTimeout {
		attemptDurationSeconds?: number | null;
	}
	export interface SubmitJobPostBodyTimeoutFormProperties {
		attemptDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateSubmitJobPostBodyTimeoutFormGroup() {
		return new FormGroup<SubmitJobPostBodyTimeoutFormProperties>({
			attemptDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubmitJobPostBodyEksPropertiesOverride {
		podProperties?: EksPodPropertiesOverride;
	}
	export interface SubmitJobPostBodyEksPropertiesOverrideFormProperties {
	}
	export function CreateSubmitJobPostBodyEksPropertiesOverrideFormGroup() {
		return new FormGroup<SubmitJobPostBodyEksPropertiesOverrideFormProperties>({
		});

	}

	export interface TerminateJobPostBody {

		/**
		 * The Batch job ID of the job to terminate.
		 * Required
		 */
		jobId: string;

		/**
		 * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.
		 * Required
		 */
		reason: string;
	}
	export interface TerminateJobPostBodyFormProperties {

		/**
		 * The Batch job ID of the job to terminate.
		 * Required
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateTerminateJobPostBodyFormGroup() {
		return new FormGroup<TerminateJobPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateComputeEnvironmentPostBody {

		/**
		 * The name or full Amazon Resource Name (ARN) of the compute environment to update.
		 * Required
		 */
		computeEnvironment: string;

		/** <p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p> */
		state?: CEState | null;

		/**
		 * The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this parameter for a managed compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unmanagedvCpus?: number | null;

		/** An object that represents the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. */
		computeResources?: UpdateComputeEnvironmentPostBodyComputeResources;

		/** <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If the compute environment has a service-linked role, it can't be changed to use a regular IAM role. Likewise, if the compute environment has a regular IAM role, it can't be changed to use a service-linked role. To update the parameters for the compute environment that require an infrastructure update to change, the <b>AWSServiceRoleForBatch</b> service-linked role must be used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note> */
		serviceRole?: string | null;

		/** Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>. */
		updatePolicy?: UpdateComputeEnvironmentPostBodyUpdatePolicy;
	}
	export interface UpdateComputeEnvironmentPostBodyFormProperties {

		/**
		 * The name or full Amazon Resource Name (ARN) of the compute environment to update.
		 * Required
		 */
		computeEnvironment: FormControl<string | null | undefined>,

		/** <p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.</p> <p>If the state is <code>ENABLED</code>, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.</p> <p>If the state is <code>DISABLED</code>, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a <code>STARTING</code> or <code>RUNNING</code> state continue to progress normally. Managed compute environments in the <code>DISABLED</code> state don't scale out. </p> <note> <p>Compute environments in a <code>DISABLED</code> state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state">State</a> in the <i>Batch User Guide</i>.</p> </note> <p>When an instance is idle, the instance scales down to the <code>minvCpus</code> value. However, the instance size doesn't change. For example, consider a <code>c5.8xlarge</code> instance with a <code>minvCpus</code> value of <code>4</code> and a <code>desiredvCpus</code> value of <code>36</code>. This instance doesn't scale down to a <code>c5.large</code> instance.</p> */
		state: FormControl<CEState | null | undefined>,

		/**
		 * The maximum number of vCPUs expected to be used for an unmanaged compute environment. Don't specify this parameter for a managed compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unmanagedvCpus: FormControl<number | null | undefined>,

		/** <p>The full Amazon Resource Name (ARN) of the IAM role that allows Batch to make calls to other Amazon Web Services services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html">Batch service IAM role</a> in the <i>Batch User Guide</i>.</p> <important> <p>If the compute environment has a service-linked role, it can't be changed to use a regular IAM role. Likewise, if the compute environment has a regular IAM role, it can't be changed to use a service-linked role. To update the parameters for the compute environment that require an infrastructure update to change, the <b>AWSServiceRoleForBatch</b> service-linked role must be used. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html">Updating compute environments</a> in the <i>Batch User Guide</i>.</p> </important> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note> */
		serviceRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComputeEnvironmentPostBodyFormGroup() {
		return new FormGroup<UpdateComputeEnvironmentPostBodyFormProperties>({
			computeEnvironment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined),
			unmanagedvCpus: new FormControl<number | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComputeEnvironmentPostBodyComputeResources {
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
		subnets?: Array<string>;
		securityGroupIds?: Array<string>;
		allocationStrategy?: CRUpdateAllocationStrategy;
		instanceTypes?: Array<string>;
		ec2KeyPair?: string;
		instanceRole?: string;
		tags?: TagsMap;
		placementGroup?: string;
		bidPercentage?: number | null;
		launchTemplate?: LaunchTemplateSpecification;
		ec2Configuration?: Array<Ec2Configuration>;
		updateToLatestImageVersion?: boolean | null;
		type?: CRType;
		imageId?: string;
	}
	export interface UpdateComputeEnvironmentPostBodyComputeResourcesFormProperties {
		minvCpus: FormControl<number | null | undefined>,
		maxvCpus: FormControl<number | null | undefined>,
		desiredvCpus: FormControl<number | null | undefined>,
		allocationStrategy: FormControl<CRUpdateAllocationStrategy | null | undefined>,
		ec2KeyPair: FormControl<string | null | undefined>,
		instanceRole: FormControl<string | null | undefined>,
		placementGroup: FormControl<string | null | undefined>,
		bidPercentage: FormControl<number | null | undefined>,
		updateToLatestImageVersion: FormControl<boolean | null | undefined>,
		type: FormControl<CRType | null | undefined>,
		imageId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComputeEnvironmentPostBodyComputeResourcesFormGroup() {
		return new FormGroup<UpdateComputeEnvironmentPostBodyComputeResourcesFormProperties>({
			minvCpus: new FormControl<number | null | undefined>(undefined),
			maxvCpus: new FormControl<number | null | undefined>(undefined),
			desiredvCpus: new FormControl<number | null | undefined>(undefined),
			allocationStrategy: new FormControl<CRUpdateAllocationStrategy | null | undefined>(undefined),
			ec2KeyPair: new FormControl<string | null | undefined>(undefined),
			instanceRole: new FormControl<string | null | undefined>(undefined),
			placementGroup: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<number | null | undefined>(undefined),
			updateToLatestImageVersion: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<CRType | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComputeEnvironmentPostBodyUpdatePolicy {
		terminateJobsOnUpdate?: boolean | null;
		jobExecutionTimeoutMinutes?: number | null;
	}
	export interface UpdateComputeEnvironmentPostBodyUpdatePolicyFormProperties {
		terminateJobsOnUpdate: FormControl<boolean | null | undefined>,
		jobExecutionTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateComputeEnvironmentPostBodyUpdatePolicyFormGroup() {
		return new FormGroup<UpdateComputeEnvironmentPostBodyUpdatePolicyFormProperties>({
			terminateJobsOnUpdate: new FormControl<boolean | null | undefined>(undefined),
			jobExecutionTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateJobQueuePostBody {

		/**
		 * The name or the Amazon Resource Name (ARN) of the job queue.
		 * Required
		 */
		jobQueue: string;

		/** Describes the queue's ability to accept new jobs. If the job queue state is <code>ENABLED</code>, it can accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish. */
		state?: CEState | null;

		/** Amazon Resource Name (ARN) of the fair share scheduling policy. Once a job queue is created, the fair share scheduling policy can be replaced but not removed. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. For example, <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>. */
		schedulingPolicyArn?: string | null;

		/**
		 * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** <p>Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment runs a given job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.</p> <note> <p>All compute environments that are associated with a job queue must share the same architecture. Batch doesn't support mixing compute environment architecture types in a single job queue.</p> </note> */
		computeEnvironmentOrder?: Array<ComputeEnvironmentOrder>;
	}
	export interface UpdateJobQueuePostBodyFormProperties {

		/**
		 * The name or the Amazon Resource Name (ARN) of the job queue.
		 * Required
		 */
		jobQueue: FormControl<string | null | undefined>,

		/** Describes the queue's ability to accept new jobs. If the job queue state is <code>ENABLED</code>, it can accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish. */
		state: FormControl<CEState | null | undefined>,

		/** Amazon Resource Name (ARN) of the fair share scheduling policy. Once a job queue is created, the fair share scheduling policy can be replaced but not removed. The format is <code>aws:<i>Partition</i>:batch:<i>Region</i>:<i>Account</i>:scheduling-policy/<i>Name</i> </code>. For example, <code>aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy</code>. */
		schedulingPolicyArn: FormControl<string | null | undefined>,

		/**
		 * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>). EC2 and Fargate compute environments can't be mixed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobQueuePostBodyFormGroup() {
		return new FormGroup<UpdateJobQueuePostBodyFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CEState | null | undefined>(undefined),
			schedulingPolicyArn: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSchedulingPolicyPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the scheduling policy to update.
		 * Required
		 */
		arn: string;

		/** The fair share policy for a scheduling policy. */
		fairsharePolicy?: UpdateSchedulingPolicyPostBodyFairsharePolicy;
	}
	export interface UpdateSchedulingPolicyPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the scheduling policy to update.
		 * Required
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchedulingPolicyPostBodyFormGroup() {
		return new FormGroup<UpdateSchedulingPolicyPostBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSchedulingPolicyPostBodyFairsharePolicy {
		shareDecaySeconds?: number | null;
		computeReservation?: number | null;
		shareDistribution?: Array<ShareAttributes>;
	}
	export interface UpdateSchedulingPolicyPostBodyFairsharePolicyFormProperties {
		shareDecaySeconds: FormControl<number | null | undefined>,
		computeReservation: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSchedulingPolicyPostBodyFairsharePolicyFormGroup() {
		return new FormGroup<UpdateSchedulingPolicyPostBodyFairsharePolicyFormProperties>({
			shareDecaySeconds: new FormControl<number | null | undefined>(undefined),
			computeReservation: new FormControl<number | null | undefined>(undefined),
		});

	}

}

