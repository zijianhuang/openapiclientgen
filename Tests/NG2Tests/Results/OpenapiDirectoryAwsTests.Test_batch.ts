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
		computeEnvironmentName?: string | null;
		computeEnvironmentArn?: string | null;
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

	export enum CRType { EC2 = 0, SPOT = 1 }

	export enum CRAllocationStrategy { BEST_FIT = 0, BEST_FIT_PROGRESSIVE = 1, SPOT_CAPACITY_OPTIMIZED = 2 }

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}


	/** An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both. */
	export interface LaunchTemplateSpecification {
		launchTemplateId?: string | null;
		launchTemplateName?: string | null;
		version?: string | null;
	}

	/** An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both. */
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

	export interface CreateJobQueueResponse {
		jobQueueName: string;
		jobQueueArn: string;
	}
	export interface CreateJobQueueResponseFormProperties {
		jobQueueName: FormControl<string | null | undefined>,
		jobQueueArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobQueueResponseFormGroup() {
		return new FormGroup<CreateJobQueueResponseFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined),
			jobQueueArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The order in which compute environments are tried for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. */
	export interface ComputeEnvironmentOrder {
		order: number;
		computeEnvironment: string;
	}

	/** The order in which compute environments are tried for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. */
	export interface ComputeEnvironmentOrderFormProperties {
		order: FormControl<number | null | undefined>,
		computeEnvironment: FormControl<string | null | undefined>,
	}
	export function CreateComputeEnvironmentOrderFormGroup() {
		return new FormGroup<ComputeEnvironmentOrderFormProperties>({
			order: new FormControl<number | null | undefined>(undefined),
			computeEnvironment: new FormControl<string | null | undefined>(undefined),
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
		nextToken?: string | null;
	}
	export interface DescribeComputeEnvironmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComputeEnvironmentsResponseFormGroup() {
		return new FormGroup<DescribeComputeEnvironmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing an AWS Batch compute environment. */
	export interface ComputeEnvironmentDetail {
		computeEnvironmentName: string;
		computeEnvironmentArn: string;
		ecsClusterArn: string;
		type?: ComputeEnvironmentDetailType | null;
		state?: ComputeEnvironmentDetailState | null;
		status?: ComputeEnvironmentDetailStatus | null;
		statusReason?: string | null;

		/** An object representing an AWS Batch compute resource. */
		computeResources?: ComputeResource;
		serviceRole?: string | null;
	}

	/** An object representing an AWS Batch compute environment. */
	export interface ComputeEnvironmentDetailFormProperties {
		computeEnvironmentName: FormControl<string | null | undefined>,
		computeEnvironmentArn: FormControl<string | null | undefined>,
		ecsClusterArn: FormControl<string | null | undefined>,
		type: FormControl<ComputeEnvironmentDetailType | null | undefined>,
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,
		status: FormControl<ComputeEnvironmentDetailStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
	}
	export function CreateComputeEnvironmentDetailFormGroup() {
		return new FormGroup<ComputeEnvironmentDetailFormProperties>({
			computeEnvironmentName: new FormControl<string | null | undefined>(undefined),
			computeEnvironmentArn: new FormControl<string | null | undefined>(undefined),
			ecsClusterArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ComputeEnvironmentDetailType | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			status: new FormControl<ComputeEnvironmentDetailStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComputeEnvironmentDetailType { MANAGED = 0, UNMANAGED = 1 }

	export enum ComputeEnvironmentDetailState { ENABLED = 0, DISABLED = 1 }

	export enum ComputeEnvironmentDetailStatus { CREATING = 0, UPDATING = 1, DELETING = 2, DELETED = 3, VALID = 4, INVALID = 5 }


	/** An object representing an AWS Batch compute resource. */
	export interface ComputeResource {
		type: CRType;
		allocationStrategy?: CRAllocationStrategy | null;
		minvCpus: number;
		maxvCpus: number;
		desiredvCpus?: number | null;
		instanceTypes: Array<string>;
		imageId?: string | null;
		subnets: Array<string>;
		securityGroupIds?: Array<string>;
		ec2KeyPair?: string | null;
		instanceRole: string;
		tags?: TagsMap;
		placementGroup?: string | null;
		bidPercentage?: number | null;
		spotIamFleetRole?: string | null;

		/** An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both. */
		launchTemplate?: LaunchTemplateSpecification;
	}

	/** An object representing an AWS Batch compute resource. */
	export interface ComputeResourceFormProperties {
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
	export function CreateComputeResourceFormGroup() {
		return new FormGroup<ComputeResourceFormProperties>({
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

	export interface DescribeJobDefinitionsResponse {
		jobDefinitions?: Array<JobDefinition>;
		nextToken?: string | null;
	}
	export interface DescribeJobDefinitionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobDefinitionsResponseFormGroup() {
		return new FormGroup<DescribeJobDefinitionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing an AWS Batch job definition. */
	export interface JobDefinition {
		jobDefinitionName: string;
		jobDefinitionArn: string;
		revision: number;
		status?: string | null;
		type: string;
		parameters?: ParametersMap;

		/** The retry strategy associated with a job. */
		retryStrategy?: RetryStrategy;

		/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
		containerProperties?: ContainerProperties;

		/** An object representing a job timeout configuration. */
		timeout?: JobTimeout;

		/** An object representing the node properties of a multi-node parallel job. */
		nodeProperties?: NodeProperties;
	}

	/** An object representing an AWS Batch job definition. */
	export interface JobDefinitionFormProperties {
		jobDefinitionName: FormControl<string | null | undefined>,
		jobDefinitionArn: FormControl<string | null | undefined>,
		revision: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobDefinitionFormGroup() {
		return new FormGroup<JobDefinitionFormProperties>({
			jobDefinitionName: new FormControl<string | null | undefined>(undefined),
			jobDefinitionArn: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
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


	/** The retry strategy associated with a job. */
	export interface RetryStrategy {
		attempts?: number | null;
	}

	/** The retry strategy associated with a job. */
	export interface RetryStrategyFormProperties {
		attempts: FormControl<number | null | undefined>,
	}
	export function CreateRetryStrategyFormGroup() {
		return new FormGroup<RetryStrategyFormProperties>({
			attempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
	export interface ContainerProperties {
		image?: string | null;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		jobRoleArn?: string | null;
		volumes?: Array<Volume>;
		environment?: Array<KeyValuePair>;
		mountPoints?: Array<MountPoint>;
		readonlyRootFilesystem?: boolean | null;
		privileged?: boolean | null;
		ulimits?: Array<Ulimit>;
		user?: string | null;
		instanceType?: string | null;
		resourceRequirements?: Array<ResourceRequirement>;

		/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
		linuxParameters?: LinuxParameters;
	}

	/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
	export interface ContainerPropertiesFormProperties {
		image: FormControl<string | null | undefined>,
		vcpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		jobRoleArn: FormControl<string | null | undefined>,
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
			readonlyRootFilesystem: new FormControl<boolean | null | undefined>(undefined),
			privileged: new FormControl<boolean | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data volume used in a job's container properties. */
	export interface Volume {

		/** Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running. */
		host?: Host;
		name?: string | null;
	}

	/** A data volume used in a job's container properties. */
	export interface VolumeFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running. */
	export interface Host {
		sourcePath?: string | null;
	}

	/** Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running. */
	export interface HostFormProperties {
		sourcePath: FormControl<string | null | undefined>,
	}
	export function CreateHostFormGroup() {
		return new FormGroup<HostFormProperties>({
			sourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair object. */
	export interface KeyValuePair {
		name?: string | null;
		value?: string | null;
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


	/** Details on a Docker volume mount point that is used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run. */
	export interface MountPoint {
		containerPath?: string | null;
		readOnly?: boolean | null;
		sourceVolume?: string | null;
	}

	/** Details on a Docker volume mount point that is used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run. */
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


	/** The <code>ulimit</code> settings to pass to the container. */
	export interface Ulimit {
		hardLimit: number;
		name: string;
		softLimit: number;
	}

	/** The <code>ulimit</code> settings to pass to the container. */
	export interface UlimitFormProperties {
		hardLimit: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		softLimit: FormControl<number | null | undefined>,
	}
	export function CreateUlimitFormGroup() {
		return new FormGroup<UlimitFormProperties>({
			hardLimit: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			softLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type and amount of a resource to assign to a container. Currently, the only supported resource type is <code>GPU</code>. */
	export interface ResourceRequirement {
		value: string;
		type: ResourceRequirementType;
	}

	/** The type and amount of a resource to assign to a container. Currently, the only supported resource type is <code>GPU</code>. */
	export interface ResourceRequirementFormProperties {
		value: FormControl<string | null | undefined>,
		type: FormControl<ResourceRequirementType | null | undefined>,
	}
	export function CreateResourceRequirementFormGroup() {
		return new FormGroup<ResourceRequirementFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceRequirementType | null | undefined>(undefined),
		});

	}

	export enum ResourceRequirementType { GPU = 0 }


	/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
	export interface LinuxParameters {
		devices?: Array<Device>;
	}

	/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
	export interface LinuxParametersFormProperties {
	}
	export function CreateLinuxParametersFormGroup() {
		return new FormGroup<LinuxParametersFormProperties>({
		});

	}


	/** An object representing a container instance host device. */
	export interface Device {
		hostPath: string;
		containerPath?: string | null;
		permissions?: Array<DeviceCgroupPermission>;
	}

	/** An object representing a container instance host device. */
	export interface DeviceFormProperties {
		hostPath: FormControl<string | null | undefined>,
		containerPath: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			hostPath: new FormControl<string | null | undefined>(undefined),
			containerPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceCgroupPermission { READ = 0, WRITE = 1, MKNOD = 2 }


	/** An object representing a job timeout configuration. */
	export interface JobTimeout {
		attemptDurationSeconds?: number | null;
	}

	/** An object representing a job timeout configuration. */
	export interface JobTimeoutFormProperties {
		attemptDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateJobTimeoutFormGroup() {
		return new FormGroup<JobTimeoutFormProperties>({
			attemptDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing the node properties of a multi-node parallel job. */
	export interface NodeProperties {
		numNodes: number;
		mainNode: number;
		nodeRangeProperties: Array<NodeRangeProperty>;
	}

	/** An object representing the node properties of a multi-node parallel job. */
	export interface NodePropertiesFormProperties {
		numNodes: FormControl<number | null | undefined>,
		mainNode: FormControl<number | null | undefined>,
	}
	export function CreateNodePropertiesFormGroup() {
		return new FormGroup<NodePropertiesFormProperties>({
			numNodes: new FormControl<number | null | undefined>(undefined),
			mainNode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing the properties of the node range for a multi-node parallel job. */
	export interface NodeRangeProperty {
		targetNodes: string;

		/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
		container?: ContainerProperties;
	}

	/** An object representing the properties of the node range for a multi-node parallel job. */
	export interface NodeRangePropertyFormProperties {
		targetNodes: FormControl<string | null | undefined>,
	}
	export function CreateNodeRangePropertyFormGroup() {
		return new FormGroup<NodeRangePropertyFormProperties>({
			targetNodes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobQueuesResponse {
		jobQueues?: Array<JobQueueDetail>;
		nextToken?: string | null;
	}
	export interface DescribeJobQueuesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobQueuesResponseFormGroup() {
		return new FormGroup<DescribeJobQueuesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the details of an AWS Batch job queue. */
	export interface JobQueueDetail {
		jobQueueName: string;
		jobQueueArn: string;
		state: ComputeEnvironmentDetailState;
		status?: ComputeEnvironmentDetailStatus | null;
		statusReason?: string | null;
		priority: number;
		computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;
	}

	/** An object representing the details of an AWS Batch job queue. */
	export interface JobQueueDetailFormProperties {
		jobQueueName: FormControl<string | null | undefined>,
		jobQueueArn: FormControl<string | null | undefined>,
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,
		status: FormControl<ComputeEnvironmentDetailStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateJobQueueDetailFormGroup() {
		return new FormGroup<JobQueueDetailFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined),
			jobQueueArn: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			status: new FormControl<ComputeEnvironmentDetailStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
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


	/** An object representing an AWS Batch job. */
	export interface JobDetail {
		jobName: string;
		jobId: string;
		jobQueue: string;
		status: JobDetailStatus;
		attempts?: Array<AttemptDetail>;
		statusReason?: string | null;
		createdAt?: number | null;

		/** The retry strategy associated with a job. */
		retryStrategy?: RetryStrategy;
		startedAt: number;
		stoppedAt?: number | null;
		dependsOn?: Array<JobDependency>;
		jobDefinition: string;
		parameters?: ParametersMap;

		/** An object representing the details of a container that is part of a job. */
		container?: ContainerDetail;

		/** An object representing the details of a multi-node parallel job node. */
		nodeDetails?: NodeDetails;

		/** An object representing the node properties of a multi-node parallel job. */
		nodeProperties?: NodeProperties;

		/** An object representing the array properties of a job. */
		arrayProperties?: ArrayPropertiesDetail;

		/** An object representing a job timeout configuration. */
		timeout?: JobTimeout;
	}

	/** An object representing an AWS Batch job. */
	export interface JobDetailFormProperties {
		jobName: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		jobQueue: FormControl<string | null | undefined>,
		status: FormControl<JobDetailStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		createdAt: FormControl<number | null | undefined>,
		startedAt: FormControl<number | null | undefined>,
		stoppedAt: FormControl<number | null | undefined>,
		jobDefinition: FormControl<string | null | undefined>,
	}
	export function CreateJobDetailFormGroup() {
		return new FormGroup<JobDetailFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobQueue: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<JobDetailStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<number | null | undefined>(undefined),
			startedAt: new FormControl<number | null | undefined>(undefined),
			stoppedAt: new FormControl<number | null | undefined>(undefined),
			jobDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobDetailStatus { SUBMITTED = 0, PENDING = 1, RUNNABLE = 2, STARTING = 3, RUNNING = 4, SUCCEEDED = 5, FAILED = 6 }


	/** An object representing a job attempt. */
	export interface AttemptDetail {

		/** An object representing the details of a container that is part of a job attempt. */
		container?: AttemptContainerDetail;
		startedAt?: number | null;
		stoppedAt?: number | null;
		statusReason?: string | null;
	}

	/** An object representing a job attempt. */
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


	/** An object representing the details of a container that is part of a job attempt. */
	export interface AttemptContainerDetail {
		containerInstanceArn?: string | null;
		taskArn?: string | null;
		exitCode?: number | null;
		reason?: string | null;
		logStreamName?: string | null;
		networkInterfaces?: Array<NetworkInterface>;
	}

	/** An object representing the details of a container that is part of a job attempt. */
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


	/** An object representing the elastic network interface for a multi-node parallel job node. */
	export interface NetworkInterface {
		attachmentId?: string | null;
		ipv6Address?: string | null;
		privateIpv4Address?: string | null;
	}

	/** An object representing the elastic network interface for a multi-node parallel job node. */
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


	/** An object representing an AWS Batch job dependency. */
	export interface JobDependency {
		jobId?: string | null;
		type?: JobDependencyType | null;
	}

	/** An object representing an AWS Batch job dependency. */
	export interface JobDependencyFormProperties {
		jobId: FormControl<string | null | undefined>,
		type: FormControl<JobDependencyType | null | undefined>,
	}
	export function CreateJobDependencyFormGroup() {
		return new FormGroup<JobDependencyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<JobDependencyType | null | undefined>(undefined),
		});

	}

	export enum JobDependencyType { N_TO_N = 0, SEQUENTIAL = 1 }


	/** An object representing the details of a container that is part of a job. */
	export interface ContainerDetail {
		image?: string | null;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		jobRoleArn?: string | null;
		volumes?: Array<Volume>;
		environment?: Array<KeyValuePair>;
		mountPoints?: Array<MountPoint>;
		readonlyRootFilesystem?: boolean | null;
		ulimits?: Array<Ulimit>;
		privileged?: boolean | null;
		user?: string | null;
		exitCode?: number | null;
		reason?: string | null;
		containerInstanceArn?: string | null;
		taskArn?: string | null;
		logStreamName?: string | null;
		instanceType?: string | null;
		networkInterfaces?: Array<NetworkInterface>;
		resourceRequirements?: Array<ResourceRequirement>;

		/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
		linuxParameters?: LinuxParameters;
	}

	/** An object representing the details of a container that is part of a job. */
	export interface ContainerDetailFormProperties {
		image: FormControl<string | null | undefined>,
		vcpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		jobRoleArn: FormControl<string | null | undefined>,
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


	/** An object representing the details of a multi-node parallel job node. */
	export interface NodeDetails {
		nodeIndex?: number | null;
		isMainNode?: boolean | null;
	}

	/** An object representing the details of a multi-node parallel job node. */
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


	/** An object representing the array properties of a job. */
	export interface ArrayPropertiesDetail {
		statusSummary?: ArrayJobStatusSummary;
		size?: number | null;
		index?: number | null;
	}

	/** An object representing the array properties of a job. */
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

	export interface ListJobsResponse {
		jobSummaryList: Array<JobSummary>;
		nextToken?: string | null;
	}
	export interface ListJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing summary details of a job. */
	export interface JobSummary {
		jobId: string;
		jobName: string;
		createdAt?: number | null;
		status?: JobDetailStatus | null;
		statusReason?: string | null;
		startedAt?: number | null;
		stoppedAt?: number | null;

		/** An object representing summary details of a container within a job. */
		container?: ContainerSummary;

		/** An object representing the array properties of a job. */
		arrayProperties?: ArrayPropertiesSummary;

		/** An object representing the properties of a node that is associated with a multi-node parallel job. */
		nodeProperties?: NodePropertiesSummary;
	}

	/** An object representing summary details of a job. */
	export interface JobSummaryFormProperties {
		jobId: FormControl<string | null | undefined>,
		jobName: FormControl<string | null | undefined>,
		createdAt: FormControl<number | null | undefined>,
		status: FormControl<JobDetailStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		startedAt: FormControl<number | null | undefined>,
		stoppedAt: FormControl<number | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<JobDetailStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			startedAt: new FormControl<number | null | undefined>(undefined),
			stoppedAt: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing summary details of a container within a job. */
	export interface ContainerSummary {
		exitCode?: number | null;
		reason?: string | null;
	}

	/** An object representing summary details of a container within a job. */
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


	/** An object representing the array properties of a job. */
	export interface ArrayPropertiesSummary {
		size?: number | null;
		index?: number | null;
	}

	/** An object representing the array properties of a job. */
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


	/** An object representing the properties of a node that is associated with a multi-node parallel job. */
	export interface NodePropertiesSummary {
		isMainNode?: boolean | null;
		numNodes?: number | null;
		nodeIndex?: number | null;
	}

	/** An object representing the properties of a node that is associated with a multi-node parallel job. */
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

	export interface RegisterJobDefinitionResponse {
		jobDefinitionName: string;
		jobDefinitionArn: string;
		revision: number;
	}
	export interface RegisterJobDefinitionResponseFormProperties {
		jobDefinitionName: FormControl<string | null | undefined>,
		jobDefinitionArn: FormControl<string | null | undefined>,
		revision: FormControl<number | null | undefined>,
	}
	export function CreateRegisterJobDefinitionResponseFormGroup() {
		return new FormGroup<RegisterJobDefinitionResponseFormProperties>({
			jobDefinitionName: new FormControl<string | null | undefined>(undefined),
			jobDefinitionArn: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubmitJobResponse {
		jobName: string;
		jobId: string;
	}
	export interface SubmitJobResponseFormProperties {
		jobName: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateSubmitJobResponseFormGroup() {
		return new FormGroup<SubmitJobResponseFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
	export interface NodePropertyOverride {
		targetNodes: string;

		/** The overrides that should be sent to a container. */
		containerOverrides?: ContainerOverrides;
	}

	/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
	export interface NodePropertyOverrideFormProperties {
		targetNodes: FormControl<string | null | undefined>,
	}
	export function CreateNodePropertyOverrideFormGroup() {
		return new FormGroup<NodePropertyOverrideFormProperties>({
			targetNodes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The overrides that should be sent to a container. */
	export interface ContainerOverrides {
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		instanceType?: string | null;
		environment?: Array<KeyValuePair>;
		resourceRequirements?: Array<ResourceRequirement>;
	}

	/** The overrides that should be sent to a container. */
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

	export interface TerminateJobResponse {
	}
	export interface TerminateJobResponseFormProperties {
	}
	export function CreateTerminateJobResponseFormGroup() {
		return new FormGroup<TerminateJobResponseFormProperties>({
		});

	}

	export interface UpdateComputeEnvironmentResponse {
		computeEnvironmentName?: string | null;
		computeEnvironmentArn?: string | null;
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

	export interface UpdateJobQueueResponse {
		jobQueueName?: string | null;
		jobQueueArn?: string | null;
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

	export enum ArrayJobDependency { N_TO_N = 0, SEQUENTIAL = 1 }


	/** An object representing an AWS Batch array job. */
	export interface ArrayProperties {
		size?: number | null;
	}

	/** An object representing an AWS Batch array job. */
	export interface ArrayPropertiesFormProperties {
		size: FormControl<number | null | undefined>,
	}
	export function CreateArrayPropertiesFormGroup() {
		return new FormGroup<ArrayPropertiesFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CEState { ENABLED = 0, DISABLED = 1 }

	export enum CEStatus { CREATING = 0, UPDATING = 1, DELETING = 2, DELETED = 3, VALID = 4, INVALID = 5 }

	export enum CEType { MANAGED = 0, UNMANAGED = 1 }

	export interface CancelJobRequest {
		jobId: string;
		reason: string;
	}
	export interface CancelJobRequestFormProperties {
		jobId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the attributes of a compute environment that can be updated. */
	export interface ComputeResourceUpdate {
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
	}

	/** An object representing the attributes of a compute environment that can be updated. */
	export interface ComputeResourceUpdateFormProperties {
		minvCpus: FormControl<number | null | undefined>,
		maxvCpus: FormControl<number | null | undefined>,
		desiredvCpus: FormControl<number | null | undefined>,
	}
	export function CreateComputeResourceUpdateFormGroup() {
		return new FormGroup<ComputeResourceUpdateFormProperties>({
			minvCpus: new FormControl<number | null | undefined>(undefined),
			maxvCpus: new FormControl<number | null | undefined>(undefined),
			desiredvCpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateComputeEnvironmentRequest {
		computeEnvironmentName: string;
		type: ComputeEnvironmentDetailType;
		state?: ComputeEnvironmentDetailState | null;

		/** An object representing an AWS Batch compute resource. */
		computeResources?: ComputeResource;
		serviceRole: string;
	}
	export interface CreateComputeEnvironmentRequestFormProperties {
		computeEnvironmentName: FormControl<string | null | undefined>,
		type: FormControl<ComputeEnvironmentDetailType | null | undefined>,
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputeEnvironmentRequestFormGroup() {
		return new FormGroup<CreateComputeEnvironmentRequestFormProperties>({
			computeEnvironmentName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ComputeEnvironmentDetailType | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JQState { ENABLED = 0, DISABLED = 1 }

	export interface CreateJobQueueRequest {
		jobQueueName: string;
		state?: ComputeEnvironmentDetailState | null;
		priority: number;
		computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;
	}
	export interface CreateJobQueueRequestFormProperties {
		jobQueueName: FormControl<string | null | undefined>,
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobQueueRequestFormGroup() {
		return new FormGroup<CreateJobQueueRequestFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteComputeEnvironmentRequest {
		computeEnvironment: string;
	}
	export interface DeleteComputeEnvironmentRequestFormProperties {
		computeEnvironment: FormControl<string | null | undefined>,
	}
	export function CreateDeleteComputeEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteComputeEnvironmentRequestFormProperties>({
			computeEnvironment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteJobQueueRequest {
		jobQueue: string;
	}
	export interface DeleteJobQueueRequestFormProperties {
		jobQueue: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobQueueRequestFormGroup() {
		return new FormGroup<DeleteJobQueueRequestFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeregisterJobDefinitionRequest {
		jobDefinition: string;
	}
	export interface DeregisterJobDefinitionRequestFormProperties {
		jobDefinition: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterJobDefinitionRequestFormGroup() {
		return new FormGroup<DeregisterJobDefinitionRequestFormProperties>({
			jobDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeComputeEnvironmentsRequest {
		computeEnvironments?: Array<string>;
		maxResults?: number | null;
		nextToken?: string | null;
	}
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

	export interface DescribeJobDefinitionsRequest {
		jobDefinitions?: Array<string>;
		maxResults?: number | null;
		jobDefinitionName?: string | null;
		status?: string | null;
		nextToken?: string | null;
	}
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

	export interface DescribeJobQueuesRequest {
		jobQueues?: Array<string>;
		maxResults?: number | null;
		nextToken?: string | null;
	}
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

	export interface DescribeJobsRequest {
		jobs: Array<string>;
	}
	export interface DescribeJobsRequestFormProperties {
	}
	export function CreateDescribeJobsRequestFormGroup() {
		return new FormGroup<DescribeJobsRequestFormProperties>({
		});

	}

	export enum JQStatus { CREATING = 0, UPDATING = 1, DELETING = 2, DELETED = 3, VALID = 4, INVALID = 5 }

	export enum JobDefinitionType { container = 0, multinode = 1 }

	export enum JobStatus { SUBMITTED = 0, PENDING = 1, RUNNABLE = 2, STARTING = 3, RUNNING = 4, SUCCEEDED = 5, FAILED = 6 }

	export interface ListJobsRequest {
		jobQueue?: string | null;
		arrayJobId?: string | null;
		multiNodeJobId?: string | null;
		jobStatus?: JobDetailStatus | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface ListJobsRequestFormProperties {
		jobQueue: FormControl<string | null | undefined>,
		arrayJobId: FormControl<string | null | undefined>,
		multiNodeJobId: FormControl<string | null | undefined>,
		jobStatus: FormControl<JobDetailStatus | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined),
			arrayJobId: new FormControl<string | null | undefined>(undefined),
			multiNodeJobId: new FormControl<string | null | undefined>(undefined),
			jobStatus: new FormControl<JobDetailStatus | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
	export interface NodeOverrides {
		numNodes?: number | null;
		nodePropertyOverrides?: Array<NodePropertyOverride>;
	}

	/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
	export interface NodeOverridesFormProperties {
		numNodes: FormControl<number | null | undefined>,
	}
	export function CreateNodeOverridesFormGroup() {
		return new FormGroup<NodeOverridesFormProperties>({
			numNodes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterJobDefinitionRequest {
		jobDefinitionName: string;
		type: JobDefinitionType;
		parameters?: ParametersMap;

		/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
		containerProperties?: ContainerProperties;

		/** An object representing the node properties of a multi-node parallel job. */
		nodeProperties?: NodeProperties;

		/** The retry strategy associated with a job. */
		retryStrategy?: RetryStrategy;

		/** An object representing a job timeout configuration. */
		timeout?: JobTimeout;
	}
	export interface RegisterJobDefinitionRequestFormProperties {
		jobDefinitionName: FormControl<string | null | undefined>,
		type: FormControl<JobDefinitionType | null | undefined>,
	}
	export function CreateRegisterJobDefinitionRequestFormGroup() {
		return new FormGroup<RegisterJobDefinitionRequestFormProperties>({
			jobDefinitionName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<JobDefinitionType | null | undefined>(undefined),
		});

	}

	export enum ResourceType { GPU = 0 }

	export interface SubmitJobRequest {
		jobName: string;
		jobQueue: string;

		/** An object representing an AWS Batch array job. */
		arrayProperties?: ArrayProperties;
		dependsOn?: Array<JobDependency>;
		jobDefinition: string;
		parameters?: ParametersMap;

		/** The overrides that should be sent to a container. */
		containerOverrides?: ContainerOverrides;

		/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
		nodeOverrides?: NodeOverrides;

		/** The retry strategy associated with a job. */
		retryStrategy?: RetryStrategy;

		/** An object representing a job timeout configuration. */
		timeout?: JobTimeout;
	}
	export interface SubmitJobRequestFormProperties {
		jobName: FormControl<string | null | undefined>,
		jobQueue: FormControl<string | null | undefined>,
		jobDefinition: FormControl<string | null | undefined>,
	}
	export function CreateSubmitJobRequestFormGroup() {
		return new FormGroup<SubmitJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			jobQueue: new FormControl<string | null | undefined>(undefined),
			jobDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TerminateJobRequest {
		jobId: string;
		reason: string;
	}
	export interface TerminateJobRequestFormProperties {
		jobId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateTerminateJobRequestFormGroup() {
		return new FormGroup<TerminateJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComputeEnvironmentRequest {
		computeEnvironment: string;
		state?: ComputeEnvironmentDetailState | null;

		/** An object representing the attributes of a compute environment that can be updated. */
		computeResources?: ComputeResourceUpdate;
		serviceRole?: string | null;
	}
	export interface UpdateComputeEnvironmentRequestFormProperties {
		computeEnvironment: FormControl<string | null | undefined>,
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComputeEnvironmentRequestFormGroup() {
		return new FormGroup<UpdateComputeEnvironmentRequestFormProperties>({
			computeEnvironment: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateJobQueueRequest {
		jobQueue: string;
		state?: ComputeEnvironmentDetailState | null;
		priority?: number | null;
		computeEnvironmentOrder?: Array<ComputeEnvironmentOrder>;
	}
	export interface UpdateJobQueueRequestFormProperties {
		jobQueue: FormControl<string | null | undefined>,
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobQueueRequestFormGroup() {
		return new FormGroup<UpdateJobQueueRequestFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels a job in an AWS Batch job queue. Jobs that are in the <code>SUBMITTED</code>, <code>PENDING</code>, or <code>RUNNABLE</code> state are cancelled. Jobs that have progressed to <code>STARTING</code> or <code>RUNNING</code> are not cancelled (but the API operation still succeeds, even if no job is cancelled); these jobs must be terminated with the <a>TerminateJob</a> operation.
		 * Post v1/canceljob
		 * @return {CancelJobResponse} Success
		 */
		CancelJob(requestBody: CancelJobPostBody): Observable<CancelJobResponse> {
			return this.http.post<CancelJobResponse>(this.baseUri + 'v1/canceljob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments.</p> <p>In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. You can choose to use Amazon EC2 On-Demand Instances or Spot Instances in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is below a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs are not supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own compute resources. This provides more compute resource configuration options, such as using a custom AMI, but you must ensure that your AMI meets the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">Container Instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you have created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that is associated with it. Then, manually launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS Container Instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>AWS Batch does not upgrade the AMIs in a compute environment after it is created (for example, when a newer version of the Amazon ECS-optimized AMI is available). You are responsible for the management of the guest operating system (including updates and security patches) and any additional application software or utilities that you install on the compute resources. To use a new AMI for your AWS Batch jobs:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the old compute environment from your job queue.</p> </li> <li> <p>Delete the old compute environment.</p> </li> </ol> </note>
		 * Post v1/createcomputeenvironment
		 * @return {CreateComputeEnvironmentResponse} Success
		 */
		CreateComputeEnvironment(requestBody: CreateComputeEnvironmentPostBody): Observable<CreateComputeEnvironmentResponse> {
			return this.http.post<CreateComputeEnvironmentResponse>(this.baseUri + 'v1/createcomputeenvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order in which the AWS Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>
		 * Post v1/createjobqueue
		 * @return {CreateJobQueueResponse} Success
		 */
		CreateJobQueue(requestBody: CreateJobQueuePostBody): Observable<CreateJobQueueResponse> {
			return this.http.post<CreateJobQueueResponse>(this.baseUri + 'v1/createjobqueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an AWS Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation.</p>
		 * Post v1/deletecomputeenvironment
		 * @return {DeleteComputeEnvironmentResponse} Success
		 */
		DeleteComputeEnvironment(requestBody: DeleteComputeEnvironmentPostBody): Observable<DeleteComputeEnvironmentResponse> {
			return this.http.post<DeleteComputeEnvironmentResponse>(this.baseUri + 'v1/deletecomputeenvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are terminated when you delete a job queue.</p> <p>It is not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>
		 * Post v1/deletejobqueue
		 * @return {DeleteJobQueueResponse} Success
		 */
		DeleteJobQueue(requestBody: DeleteJobQueuePostBody): Observable<DeleteJobQueueResponse> {
			return this.http.post<DeleteJobQueueResponse>(this.baseUri + 'v1/deletejobqueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters an AWS Batch job definition. Job definitions will be permanently deleted after 180 days.
		 * Post v1/deregisterjobdefinition
		 * @return {DeregisterJobDefinitionResponse} Success
		 */
		DeregisterJobDefinition(requestBody: DeregisterJobDefinitionPostBody): Observable<DeregisterJobDefinitionResponse> {
			return this.http.post<DeregisterJobDefinitionResponse>(this.baseUri + 'v1/deregisterjobdefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes one or more of your compute environments.</p> <p>If you are using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you should launch your Amazon ECS container instances into.</p>
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
		 * Describes a list of AWS Batch jobs.
		 * Post v1/describejobs
		 * @return {DescribeJobsResponse} Success
		 */
		DescribeJobs(requestBody: DescribeJobsPostBody): Observable<DescribeJobsResponse> {
			return this.http.post<DescribeJobsResponse>(this.baseUri + 'v1/describejobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of AWS Batch jobs.</p> <p>You must specify only one of the following:</p> <ul> <li> <p>a job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>a multi-node parallel job ID to return a list of that job's nodes</p> </li> <li> <p>an array job ID to return a list of that job's children</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you do not specify a status, only <code>RUNNING</code> jobs are returned.</p>
		 * Post v1/listjobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListJobsPostBody): Observable<ListJobsResponse> {
			return this.http.post<ListJobsResponse>(this.baseUri + 'v1/listjobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers an AWS Batch job definition.
		 * Post v1/registerjobdefinition
		 * @return {RegisterJobDefinitionResponse} Success
		 */
		RegisterJobDefinition(requestBody: RegisterJobDefinitionPostBody): Observable<RegisterJobDefinitionResponse> {
			return this.http.post<RegisterJobDefinitionResponse>(this.baseUri + 'v1/registerjobdefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submits an AWS Batch job from a job definition. Parameters specified during <a>SubmitJob</a> override parameters defined in the job definition.
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
		 * Updates an AWS Batch compute environment.
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
	}

	export interface CancelJobPostBody {

		/**
		 * The AWS Batch job ID of the job to cancel.
		 * Required
		 */
		jobId: string;

		/**
		 * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity logs.
		 * Required
		 */
		reason: string;
	}
	export interface CancelJobPostBodyFormProperties {

		/**
		 * The AWS Batch job ID of the job to cancel.
		 * Required
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity logs.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobPostBodyFormGroup() {
		return new FormGroup<CancelJobPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateComputeEnvironmentPostBody {

		/**
		 * The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
		 * Required
		 */
		computeEnvironmentName: string;

		/**
		 * The type of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>AWS Batch User Guide</i>.
		 * Required
		 */
		type: ComputeEnvironmentDetailType;

		/** The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. */
		state?: ComputeEnvironmentDetailState | null;

		/** An object representing an AWS Batch compute resource. */
		computeResources?: CreateComputeEnvironmentPostBodyComputeResources;

		/**
		 * <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>
		 * Required
		 */
		serviceRole: string;
	}
	export interface CreateComputeEnvironmentPostBodyFormProperties {

		/**
		 * The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
		 * Required
		 */
		computeEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * The type of the compute environment. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>AWS Batch User Guide</i>.
		 * Required
		 */
		type: FormControl<ComputeEnvironmentDetailType | null | undefined>,

		/** The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. */
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,

		/**
		 * <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>
		 * Required
		 */
		serviceRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputeEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateComputeEnvironmentPostBodyFormProperties>({
			computeEnvironmentName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ComputeEnvironmentDetailType | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateComputeEnvironmentPostBodyComputeResources {
		type?: CRType | null;
		allocationStrategy?: CRAllocationStrategy | null;
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
		instanceTypes?: Array<string>;
		imageId?: string | null;
		subnets?: Array<string>;
		securityGroupIds?: Array<string>;
		ec2KeyPair?: string | null;
		instanceRole?: string | null;
		tags?: TagsMap;
		placementGroup?: string | null;
		bidPercentage?: number | null;
		spotIamFleetRole?: string | null;

		/** An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both. */
		launchTemplate?: LaunchTemplateSpecification;
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

	export interface CreateJobQueuePostBody {

		/**
		 * The name of the job queue.
		 * Required
		 */
		jobQueueName: string;

		/** The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. */
		state?: ComputeEnvironmentDetailState | null;

		/**
		 * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>.
		 * Required
		 */
		priority: number;

		/**
		 * The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment should execute a given job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute environments with a job queue.
		 * Required
		 */
		computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;
	}
	export interface CreateJobQueuePostBodyFormProperties {

		/**
		 * The name of the job queue.
		 * Required
		 */
		jobQueueName: FormControl<string | null | undefined>,

		/** The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. */
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,

		/**
		 * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>.
		 * Required
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobQueuePostBodyFormGroup() {
		return new FormGroup<CreateJobQueuePostBodyFormProperties>({
			jobQueueName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
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
			computeEnvironment: new FormControl<string | null | undefined>(undefined),
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
			jobQueue: new FormControl<string | null | undefined>(undefined),
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
			jobDefinition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeComputeEnvironmentsPostBody {

		/** A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries. */
		computeEnvironments?: Array<string>;

		/** The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}
	export interface DescribeComputeEnvironmentsPostBodyFormProperties {

		/** The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComputeEnvironmentsPostBodyFormGroup() {
		return new FormGroup<DescribeComputeEnvironmentsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobDefinitionsPostBody {

		/** A list of up to 100 job definition names or full Amazon Resource Name (ARN) entries. */
		jobDefinitions?: Array<string>;

		/** The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/** The name of the job definition to describe. */
		jobDefinitionName?: string | null;

		/** The status with which to filter job definitions. */
		status?: string | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}
	export interface DescribeJobDefinitionsPostBodyFormProperties {

		/** The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,

		/** The name of the job definition to describe. */
		jobDefinitionName: FormControl<string | null | undefined>,

		/** The status with which to filter job definitions. */
		status: FormControl<string | null | undefined>,

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
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

		/** The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}
	export interface DescribeJobQueuesPostBodyFormProperties {

		/** The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
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

	export interface ListJobsPostBody {

		/** The name or full Amazon Resource Name (ARN) of the job queue with which to list jobs. */
		jobQueue?: string | null;

		/** The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array. */
		arrayJobId?: string | null;

		/** The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job. */
		multiNodeJobId?: string | null;

		/** The job status with which to filter jobs in the specified queue. If you do not specify a status, only <code>RUNNING</code> jobs are returned. */
		jobStatus?: JobDetailStatus | null;

		/** The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}
	export interface ListJobsPostBodyFormProperties {

		/** The name or full Amazon Resource Name (ARN) of the job queue with which to list jobs. */
		jobQueue: FormControl<string | null | undefined>,

		/** The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array. */
		arrayJobId: FormControl<string | null | undefined>,

		/** The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job. */
		multiNodeJobId: FormControl<string | null | undefined>,

		/** The job status with which to filter jobs in the specified queue. If you do not specify a status, only <code>RUNNING</code> jobs are returned. */
		jobStatus: FormControl<JobDetailStatus | null | undefined>,

		/** The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsPostBodyFormGroup() {
		return new FormGroup<ListJobsPostBodyFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined),
			arrayJobId: new FormControl<string | null | undefined>(undefined),
			multiNodeJobId: new FormControl<string | null | undefined>(undefined),
			jobStatus: new FormControl<JobDetailStatus | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterJobDefinitionPostBody {

		/**
		 * The name of the job definition to register. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
		 * Required
		 */
		jobDefinitionName: string;

		/**
		 * The type of job definition.
		 * Required
		 */
		type: JobDefinitionType;

		/** Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters?: {[id: string]: string };

		/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
		containerProperties?: RegisterJobDefinitionPostBodyContainerProperties;

		/** An object representing the node properties of a multi-node parallel job. */
		nodeProperties?: RegisterJobDefinitionPostBodyNodeProperties;

		/** The retry strategy associated with a job. */
		retryStrategy?: RegisterJobDefinitionPostBodyRetryStrategy;

		/** An object representing a job timeout configuration. */
		timeout?: RegisterJobDefinitionPostBodyTimeout;
	}
	export interface RegisterJobDefinitionPostBodyFormProperties {

		/**
		 * The name of the job definition to register. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
		 * Required
		 */
		jobDefinitionName: FormControl<string | null | undefined>,

		/**
		 * The type of job definition.
		 * Required
		 */
		type: FormControl<JobDefinitionType | null | undefined>,

		/** Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRegisterJobDefinitionPostBodyFormGroup() {
		return new FormGroup<RegisterJobDefinitionPostBodyFormProperties>({
			jobDefinitionName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<JobDefinitionType | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface RegisterJobDefinitionPostBodyContainerProperties {
		image?: string | null;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string>;
		jobRoleArn?: string | null;
		volumes?: Array<Volume>;
		environment?: Array<KeyValuePair>;
		mountPoints?: Array<MountPoint>;
		readonlyRootFilesystem?: boolean | null;
		privileged?: boolean | null;
		ulimits?: Array<Ulimit>;
		user?: string | null;
		instanceType?: string | null;
		resourceRequirements?: Array<ResourceRequirement>;

		/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
		linuxParameters?: LinuxParameters;
	}
	export interface RegisterJobDefinitionPostBodyContainerPropertiesFormProperties {
		image: FormControl<string | null | undefined>,
		vcpus: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		jobRoleArn: FormControl<string | null | undefined>,
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

	export interface SubmitJobPostBody {

		/**
		 * The name of the job. The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
		 * Required
		 */
		jobName: string;

		/**
		 * The job queue into which the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.
		 * Required
		 */
		jobQueue: string;

		/** An object representing an AWS Batch array job. */
		arrayProperties?: SubmitJobPostBodyArrayProperties;

		/** A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin. */
		dependsOn?: Array<JobDependency>;

		/**
		 * The job definition used by this job. This value can be one of <code>name</code>, <code>name:revision</code>, or the Amazon Resource Name (ARN) for the job definition. If <code>name</code> is specified without a revision then the latest active revision is used.
		 * Required
		 */
		jobDefinition: string;

		/** Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters?: {[id: string]: string };

		/** The overrides that should be sent to a container. */
		containerOverrides?: SubmitJobPostBodyContainerOverrides;

		/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
		nodeOverrides?: SubmitJobPostBodyNodeOverrides;

		/** The retry strategy associated with a job. */
		retryStrategy?: SubmitJobPostBodyRetryStrategy;

		/** An object representing a job timeout configuration. */
		timeout?: SubmitJobPostBodyTimeout;
	}
	export interface SubmitJobPostBodyFormProperties {

		/**
		 * The name of the job. The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
		 * Required
		 */
		jobName: FormControl<string | null | undefined>,

		/**
		 * The job queue into which the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.
		 * Required
		 */
		jobQueue: FormControl<string | null | undefined>,

		/**
		 * The job definition used by this job. This value can be one of <code>name</code>, <code>name:revision</code>, or the Amazon Resource Name (ARN) for the job definition. If <code>name</code> is specified without a revision then the latest active revision is used.
		 * Required
		 */
		jobDefinition: FormControl<string | null | undefined>,

		/** Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSubmitJobPostBodyFormGroup() {
		return new FormGroup<SubmitJobPostBodyFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			jobQueue: new FormControl<string | null | undefined>(undefined),
			jobDefinition: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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
		instanceType?: string | null;
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

	export interface TerminateJobPostBody {

		/**
		 * The AWS Batch job ID of the job to terminate.
		 * Required
		 */
		jobId: string;

		/**
		 * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity logs.
		 * Required
		 */
		reason: string;
	}
	export interface TerminateJobPostBodyFormProperties {

		/**
		 * The AWS Batch job ID of the job to terminate.
		 * Required
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity logs.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateTerminateJobPostBodyFormGroup() {
		return new FormGroup<TerminateJobPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComputeEnvironmentPostBody {

		/**
		 * The name or full Amazon Resource Name (ARN) of the compute environment to update.
		 * Required
		 */
		computeEnvironment: string;

		/** The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues. */
		state?: ComputeEnvironmentDetailState | null;

		/** An object representing the attributes of a compute environment that can be updated. */
		computeResources?: UpdateComputeEnvironmentPostBodyComputeResources;

		/** <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note> */
		serviceRole?: string | null;
	}
	export interface UpdateComputeEnvironmentPostBodyFormProperties {

		/**
		 * The name or full Amazon Resource Name (ARN) of the compute environment to update.
		 * Required
		 */
		computeEnvironment: FormControl<string | null | undefined>,

		/** The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues. */
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,

		/** <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note> */
		serviceRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComputeEnvironmentPostBodyFormGroup() {
		return new FormGroup<UpdateComputeEnvironmentPostBodyFormProperties>({
			computeEnvironment: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComputeEnvironmentPostBodyComputeResources {
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
	}
	export interface UpdateComputeEnvironmentPostBodyComputeResourcesFormProperties {
		minvCpus: FormControl<number | null | undefined>,
		maxvCpus: FormControl<number | null | undefined>,
		desiredvCpus: FormControl<number | null | undefined>,
	}
	export function CreateUpdateComputeEnvironmentPostBodyComputeResourcesFormGroup() {
		return new FormGroup<UpdateComputeEnvironmentPostBodyComputeResourcesFormProperties>({
			minvCpus: new FormControl<number | null | undefined>(undefined),
			maxvCpus: new FormControl<number | null | undefined>(undefined),
			desiredvCpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateJobQueuePostBody {

		/**
		 * The name or the Amazon Resource Name (ARN) of the job queue.
		 * Required
		 */
		jobQueue: string;

		/** Describes the queue's ability to accept new jobs. */
		state?: ComputeEnvironmentDetailState | null;

		/** The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. */
		priority?: number | null;

		/** Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment should execute a given job. */
		computeEnvironmentOrder?: Array<ComputeEnvironmentOrder>;
	}
	export interface UpdateJobQueuePostBodyFormProperties {

		/**
		 * The name or the Amazon Resource Name (ARN) of the job queue.
		 * Required
		 */
		jobQueue: FormControl<string | null | undefined>,

		/** Describes the queue's ability to accept new jobs. */
		state: FormControl<ComputeEnvironmentDetailState | null | undefined>,

		/** The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobQueuePostBodyFormGroup() {
		return new FormGroup<UpdateJobQueuePostBodyFormProperties>({
			jobQueue: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ComputeEnvironmentDetailState | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

}

