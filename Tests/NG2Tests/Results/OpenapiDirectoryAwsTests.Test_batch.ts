import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CancelJobResponse {
	}

	export interface ClientException {
	}

	export interface ServerException {
	}

	export interface CreateComputeEnvironmentResponse {
		computeEnvironmentName?: string | null;
		computeEnvironmentArn?: string | null;
	}

	export enum CRType { EC2 = 0, SPOT = 1 }

	export enum CRAllocationStrategy { BEST_FIT = 0, BEST_FIT_PROGRESSIVE = 1, SPOT_CAPACITY_OPTIMIZED = 2 }

	export interface TagsMap {
	}


	/** An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both. */
	export interface LaunchTemplateSpecification {
		launchTemplateId?: string | null;
		launchTemplateName?: string | null;
		version?: string | null;
	}

	export interface CreateJobQueueResponse {
		jobQueueName: string;
		jobQueueArn: string;
	}


	/** The order in which compute environments are tried for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. */
	export interface ComputeEnvironmentOrder {
		order: number;
		computeEnvironment: string;
	}

	export interface DeleteComputeEnvironmentResponse {
	}

	export interface DeleteJobQueueResponse {
	}

	export interface DeregisterJobDefinitionResponse {
	}

	export interface DescribeComputeEnvironmentsResponse {
		computeEnvironments?: Array<ComputeEnvironmentDetail> | null;
		nextToken?: string | null;
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
		computeResources?: ComputeResource | null;
		serviceRole?: string | null;
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
		securityGroupIds?: Array<string> | null;
		ec2KeyPair?: string | null;
		instanceRole: string;
		tags?: TagsMap | null;
		placementGroup?: string | null;
		bidPercentage?: number | null;
		spotIamFleetRole?: string | null;

		/** An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both. */
		launchTemplate?: LaunchTemplateSpecification | null;
	}

	export interface DescribeJobDefinitionsResponse {
		jobDefinitions?: Array<JobDefinition> | null;
		nextToken?: string | null;
	}


	/** An object representing an AWS Batch job definition. */
	export interface JobDefinition {
		jobDefinitionName: string;
		jobDefinitionArn: string;
		revision: number;
		status?: string | null;
		type: string;
		parameters?: ParametersMap | null;

		/** The retry strategy associated with a job. */
		retryStrategy?: RetryStrategy | null;

		/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
		containerProperties?: ContainerProperties | null;

		/** An object representing a job timeout configuration. */
		timeout?: JobTimeout | null;

		/** An object representing the node properties of a multi-node parallel job. */
		nodeProperties?: NodeProperties | null;
	}

	export interface ParametersMap {
	}


	/** The retry strategy associated with a job. */
	export interface RetryStrategy {
		attempts?: number | null;
	}


	/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
	export interface ContainerProperties {
		image?: string | null;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string> | null;
		jobRoleArn?: string | null;
		volumes?: Array<Volume> | null;
		environment?: Array<KeyValuePair> | null;
		mountPoints?: Array<MountPoint> | null;
		readonlyRootFilesystem?: boolean | null;
		privileged?: boolean | null;
		ulimits?: Array<Ulimit> | null;
		user?: string | null;
		instanceType?: string | null;
		resourceRequirements?: Array<ResourceRequirement> | null;

		/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
		linuxParameters?: LinuxParameters | null;
	}


	/** A data volume used in a job's container properties. */
	export interface Volume {

		/** Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running. */
		host?: Host | null;
		name?: string | null;
	}


	/** Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running. */
	export interface Host {
		sourcePath?: string | null;
	}


	/** A key-value pair object. */
	export interface KeyValuePair {
		name?: string | null;
		value?: string | null;
	}


	/** Details on a Docker volume mount point that is used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run. */
	export interface MountPoint {
		containerPath?: string | null;
		readOnly?: boolean | null;
		sourceVolume?: string | null;
	}


	/** The <code>ulimit</code> settings to pass to the container. */
	export interface Ulimit {
		hardLimit: number;
		name: string;
		softLimit: number;
	}


	/** The type and amount of a resource to assign to a container. Currently, the only supported resource type is <code>GPU</code>. */
	export interface ResourceRequirement {
		value: string;
		type: ResourceRequirementType;
	}

	export enum ResourceRequirementType { GPU = 0 }


	/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
	export interface LinuxParameters {
		devices?: Array<Device> | null;
	}


	/** An object representing a container instance host device. */
	export interface Device {
		hostPath: string;
		containerPath?: string | null;
		permissions?: Array<DeviceCgroupPermission> | null;
	}

	export enum DeviceCgroupPermission { READ = 0, WRITE = 1, MKNOD = 2 }


	/** An object representing a job timeout configuration. */
	export interface JobTimeout {
		attemptDurationSeconds?: number | null;
	}


	/** An object representing the node properties of a multi-node parallel job. */
	export interface NodeProperties {
		numNodes: number;
		mainNode: number;
		nodeRangeProperties: Array<NodeRangeProperty>;
	}


	/** An object representing the properties of the node range for a multi-node parallel job. */
	export interface NodeRangeProperty {
		targetNodes: string;

		/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
		container?: ContainerProperties | null;
	}

	export interface DescribeJobQueuesResponse {
		jobQueues?: Array<JobQueueDetail> | null;
		nextToken?: string | null;
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

	export interface DescribeJobsResponse {
		jobs?: Array<JobDetail> | null;
	}


	/** An object representing an AWS Batch job. */
	export interface JobDetail {
		jobName: string;
		jobId: string;
		jobQueue: string;
		status: JobDetailStatus;
		attempts?: Array<AttemptDetail> | null;
		statusReason?: string | null;
		createdAt?: number | null;

		/** The retry strategy associated with a job. */
		retryStrategy?: RetryStrategy | null;
		startedAt: number;
		stoppedAt?: number | null;
		dependsOn?: Array<JobDependency> | null;
		jobDefinition: string;
		parameters?: ParametersMap | null;

		/** An object representing the details of a container that is part of a job. */
		container?: ContainerDetail | null;

		/** An object representing the details of a multi-node parallel job node. */
		nodeDetails?: NodeDetails | null;

		/** An object representing the node properties of a multi-node parallel job. */
		nodeProperties?: NodeProperties | null;

		/** An object representing the array properties of a job. */
		arrayProperties?: ArrayPropertiesDetail | null;

		/** An object representing a job timeout configuration. */
		timeout?: JobTimeout | null;
	}

	export enum JobDetailStatus { SUBMITTED = 0, PENDING = 1, RUNNABLE = 2, STARTING = 3, RUNNING = 4, SUCCEEDED = 5, FAILED = 6 }


	/** An object representing a job attempt. */
	export interface AttemptDetail {

		/** An object representing the details of a container that is part of a job attempt. */
		container?: AttemptContainerDetail | null;
		startedAt?: number | null;
		stoppedAt?: number | null;
		statusReason?: string | null;
	}


	/** An object representing the details of a container that is part of a job attempt. */
	export interface AttemptContainerDetail {
		containerInstanceArn?: string | null;
		taskArn?: string | null;
		exitCode?: number | null;
		reason?: string | null;
		logStreamName?: string | null;
		networkInterfaces?: Array<NetworkInterface> | null;
	}


	/** An object representing the elastic network interface for a multi-node parallel job node. */
	export interface NetworkInterface {
		attachmentId?: string | null;
		ipv6Address?: string | null;
		privateIpv4Address?: string | null;
	}


	/** An object representing an AWS Batch job dependency. */
	export interface JobDependency {
		jobId?: string | null;
		type?: JobDependencyType | null;
	}

	export enum JobDependencyType { N_TO_N = 0, SEQUENTIAL = 1 }


	/** An object representing the details of a container that is part of a job. */
	export interface ContainerDetail {
		image?: string | null;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string> | null;
		jobRoleArn?: string | null;
		volumes?: Array<Volume> | null;
		environment?: Array<KeyValuePair> | null;
		mountPoints?: Array<MountPoint> | null;
		readonlyRootFilesystem?: boolean | null;
		ulimits?: Array<Ulimit> | null;
		privileged?: boolean | null;
		user?: string | null;
		exitCode?: number | null;
		reason?: string | null;
		containerInstanceArn?: string | null;
		taskArn?: string | null;
		logStreamName?: string | null;
		instanceType?: string | null;
		networkInterfaces?: Array<NetworkInterface> | null;
		resourceRequirements?: Array<ResourceRequirement> | null;

		/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
		linuxParameters?: LinuxParameters | null;
	}


	/** An object representing the details of a multi-node parallel job node. */
	export interface NodeDetails {
		nodeIndex?: number | null;
		isMainNode?: boolean | null;
	}


	/** An object representing the array properties of a job. */
	export interface ArrayPropertiesDetail {
		statusSummary?: ArrayJobStatusSummary | null;
		size?: number | null;
		index?: number | null;
	}

	export interface ArrayJobStatusSummary {
	}

	export interface ListJobsResponse {
		jobSummaryList: Array<JobSummary>;
		nextToken?: string | null;
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
		container?: ContainerSummary | null;

		/** An object representing the array properties of a job. */
		arrayProperties?: ArrayPropertiesSummary | null;

		/** An object representing the properties of a node that is associated with a multi-node parallel job. */
		nodeProperties?: NodePropertiesSummary | null;
	}


	/** An object representing summary details of a container within a job. */
	export interface ContainerSummary {
		exitCode?: number | null;
		reason?: string | null;
	}


	/** An object representing the array properties of a job. */
	export interface ArrayPropertiesSummary {
		size?: number | null;
		index?: number | null;
	}


	/** An object representing the properties of a node that is associated with a multi-node parallel job. */
	export interface NodePropertiesSummary {
		isMainNode?: boolean | null;
		numNodes?: number | null;
		nodeIndex?: number | null;
	}

	export interface RegisterJobDefinitionResponse {
		jobDefinitionName: string;
		jobDefinitionArn: string;
		revision: number;
	}

	export interface SubmitJobResponse {
		jobName: string;
		jobId: string;
	}


	/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
	export interface NodePropertyOverride {
		targetNodes: string;

		/** The overrides that should be sent to a container. */
		containerOverrides?: ContainerOverrides | null;
	}


	/** The overrides that should be sent to a container. */
	export interface ContainerOverrides {
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string> | null;
		instanceType?: string | null;
		environment?: Array<KeyValuePair> | null;
		resourceRequirements?: Array<ResourceRequirement> | null;
	}

	export interface TerminateJobResponse {
	}

	export interface UpdateComputeEnvironmentResponse {
		computeEnvironmentName?: string | null;
		computeEnvironmentArn?: string | null;
	}

	export interface UpdateJobQueueResponse {
		jobQueueName?: string | null;
		jobQueueArn?: string | null;
	}

	export enum ArrayJobDependency { N_TO_N = 0, SEQUENTIAL = 1 }


	/** An object representing an AWS Batch array job. */
	export interface ArrayProperties {
		size?: number | null;
	}

	export enum CEState { ENABLED = 0, DISABLED = 1 }

	export enum CEStatus { CREATING = 0, UPDATING = 1, DELETING = 2, DELETED = 3, VALID = 4, INVALID = 5 }

	export enum CEType { MANAGED = 0, UNMANAGED = 1 }

	export interface CancelJobRequest {
		jobId: string;
		reason: string;
	}


	/** An object representing the attributes of a compute environment that can be updated. */
	export interface ComputeResourceUpdate {
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
	}

	export interface CreateComputeEnvironmentRequest {
		computeEnvironmentName: string;
		type: ComputeEnvironmentDetailType;
		state?: ComputeEnvironmentDetailState | null;

		/** An object representing an AWS Batch compute resource. */
		computeResources?: ComputeResource | null;
		serviceRole: string;
	}

	export enum JQState { ENABLED = 0, DISABLED = 1 }

	export interface CreateJobQueueRequest {
		jobQueueName: string;
		state?: ComputeEnvironmentDetailState | null;
		priority: number;
		computeEnvironmentOrder: Array<ComputeEnvironmentOrder>;
	}

	export interface DeleteComputeEnvironmentRequest {
		computeEnvironment: string;
	}

	export interface DeleteJobQueueRequest {
		jobQueue: string;
	}

	export interface DeregisterJobDefinitionRequest {
		jobDefinition: string;
	}

	export interface DescribeComputeEnvironmentsRequest {
		computeEnvironments?: Array<string> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface DescribeJobDefinitionsRequest {
		jobDefinitions?: Array<string> | null;
		maxResults?: number | null;
		jobDefinitionName?: string | null;
		status?: string | null;
		nextToken?: string | null;
	}

	export interface DescribeJobQueuesRequest {
		jobQueues?: Array<string> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface DescribeJobsRequest {
		jobs: Array<string>;
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


	/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
	export interface NodeOverrides {
		numNodes?: number | null;
		nodePropertyOverrides?: Array<NodePropertyOverride> | null;
	}

	export interface RegisterJobDefinitionRequest {
		jobDefinitionName: string;
		type: JobDefinitionType;
		parameters?: ParametersMap | null;

		/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
		containerProperties?: ContainerProperties | null;

		/** An object representing the node properties of a multi-node parallel job. */
		nodeProperties?: NodeProperties | null;

		/** The retry strategy associated with a job. */
		retryStrategy?: RetryStrategy | null;

		/** An object representing a job timeout configuration. */
		timeout?: JobTimeout | null;
	}

	export enum ResourceType { GPU = 0 }

	export interface SubmitJobRequest {
		jobName: string;
		jobQueue: string;

		/** An object representing an AWS Batch array job. */
		arrayProperties?: ArrayProperties | null;
		dependsOn?: Array<JobDependency> | null;
		jobDefinition: string;
		parameters?: ParametersMap | null;

		/** The overrides that should be sent to a container. */
		containerOverrides?: ContainerOverrides | null;

		/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
		nodeOverrides?: NodeOverrides | null;

		/** The retry strategy associated with a job. */
		retryStrategy?: RetryStrategy | null;

		/** An object representing a job timeout configuration. */
		timeout?: JobTimeout | null;
	}

	export interface TerminateJobRequest {
		jobId: string;
		reason: string;
	}

	export interface UpdateComputeEnvironmentRequest {
		computeEnvironment: string;
		state?: ComputeEnvironmentDetailState | null;

		/** An object representing the attributes of a compute environment that can be updated. */
		computeResources?: ComputeResourceUpdate | null;
		serviceRole?: string | null;
	}

	export interface UpdateJobQueueRequest {
		jobQueue: string;
		state?: ComputeEnvironmentDetailState | null;
		priority?: number | null;
		computeEnvironmentOrder?: Array<ComputeEnvironmentOrder> | null;
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
		DescribeComputeEnvironments(maxResults: string, nextToken: string, requestBody: DescribeComputeEnvironmentsPostBody): Observable<DescribeComputeEnvironmentsResponse> {
			return this.http.post<DescribeComputeEnvironmentsResponse>(this.baseUri + 'v1/describecomputeenvironments?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.
		 * Post v1/describejobdefinitions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeJobDefinitionsResponse} Success
		 */
		DescribeJobDefinitions(maxResults: string, nextToken: string, requestBody: DescribeJobDefinitionsPostBody): Observable<DescribeJobDefinitionsResponse> {
			return this.http.post<DescribeJobDefinitionsResponse>(this.baseUri + 'v1/describejobdefinitions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more of your job queues.
		 * Post v1/describejobqueues
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeJobQueuesResponse} Success
		 */
		DescribeJobQueues(maxResults: string, nextToken: string, requestBody: DescribeJobQueuesPostBody): Observable<DescribeJobQueuesResponse> {
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
		ListJobs(maxResults: string, nextToken: string, requestBody: ListJobsPostBody): Observable<ListJobsResponse> {
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
		computeResources?: CreateComputeEnvironmentPostBodyComputeResources | null;

		/**
		 * <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>
		 * Required
		 */
		serviceRole: string;
	}

	export interface CreateComputeEnvironmentPostBodyComputeResources {
		type?: CRType | null;
		allocationStrategy?: CRAllocationStrategy | null;
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
		instanceTypes?: Array<string> | null;
		imageId?: string | null;
		subnets?: Array<string> | null;
		securityGroupIds?: Array<string> | null;
		ec2KeyPair?: string | null;
		instanceRole?: string | null;
		tags?: TagsMap | null;
		placementGroup?: string | null;
		bidPercentage?: number | null;
		spotIamFleetRole?: string | null;

		/** An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both. */
		launchTemplate?: LaunchTemplateSpecification | null;
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

	export interface DeleteComputeEnvironmentPostBody {

		/**
		 * The name or Amazon Resource Name (ARN) of the compute environment to delete.
		 * Required
		 */
		computeEnvironment: string;
	}

	export interface DeleteJobQueuePostBody {

		/**
		 * The short name or full Amazon Resource Name (ARN) of the queue to delete.
		 * Required
		 */
		jobQueue: string;
	}

	export interface DeregisterJobDefinitionPostBody {

		/**
		 * The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.
		 * Required
		 */
		jobDefinition: string;
	}

	export interface DescribeComputeEnvironmentsPostBody {

		/** A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries. */
		computeEnvironments?: Array<string> | null;

		/** The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}

	export interface DescribeJobDefinitionsPostBody {

		/** A list of up to 100 job definition names or full Amazon Resource Name (ARN) entries. */
		jobDefinitions?: Array<string> | null;

		/** The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/** The name of the job definition to describe. */
		jobDefinitionName?: string | null;

		/** The status with which to filter job definitions. */
		status?: string | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}

	export interface DescribeJobQueuesPostBody {

		/** A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries. */
		jobQueues?: Array<string> | null;

		/** The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/** <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note> */
		nextToken?: string | null;
	}

	export interface DescribeJobsPostBody {

		/**
		 * A list of up to 100 job IDs.
		 * Required
		 */
		jobs: Array<string>;
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
		parameters?: {[id: string]: string } | null;

		/** Container properties are used in job definitions to describe the container that is launched as part of a job. */
		containerProperties?: RegisterJobDefinitionPostBodyContainerProperties | null;

		/** An object representing the node properties of a multi-node parallel job. */
		nodeProperties?: RegisterJobDefinitionPostBodyNodeProperties | null;

		/** The retry strategy associated with a job. */
		retryStrategy?: RegisterJobDefinitionPostBodyRetryStrategy | null;

		/** An object representing a job timeout configuration. */
		timeout?: RegisterJobDefinitionPostBodyTimeout | null;
	}

	export interface RegisterJobDefinitionPostBodyContainerProperties {
		image?: string | null;
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string> | null;
		jobRoleArn?: string | null;
		volumes?: Array<Volume> | null;
		environment?: Array<KeyValuePair> | null;
		mountPoints?: Array<MountPoint> | null;
		readonlyRootFilesystem?: boolean | null;
		privileged?: boolean | null;
		ulimits?: Array<Ulimit> | null;
		user?: string | null;
		instanceType?: string | null;
		resourceRequirements?: Array<ResourceRequirement> | null;

		/** Linux-specific modifications that are applied to the container, such as details for device mappings. */
		linuxParameters?: LinuxParameters | null;
	}

	export interface RegisterJobDefinitionPostBodyNodeProperties {
		numNodes?: number | null;
		mainNode?: number | null;
		nodeRangeProperties?: Array<NodeRangeProperty> | null;
	}

	export interface RegisterJobDefinitionPostBodyRetryStrategy {
		attempts?: number | null;
	}

	export interface RegisterJobDefinitionPostBodyTimeout {
		attemptDurationSeconds?: number | null;
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
		arrayProperties?: SubmitJobPostBodyArrayProperties | null;

		/** A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin. */
		dependsOn?: Array<JobDependency> | null;

		/**
		 * The job definition used by this job. This value can be one of <code>name</code>, <code>name:revision</code>, or the Amazon Resource Name (ARN) for the job definition. If <code>name</code> is specified without a revision then the latest active revision is used.
		 * Required
		 */
		jobDefinition: string;

		/** Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition. */
		parameters?: {[id: string]: string } | null;

		/** The overrides that should be sent to a container. */
		containerOverrides?: SubmitJobPostBodyContainerOverrides | null;

		/** Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation. */
		nodeOverrides?: SubmitJobPostBodyNodeOverrides | null;

		/** The retry strategy associated with a job. */
		retryStrategy?: SubmitJobPostBodyRetryStrategy | null;

		/** An object representing a job timeout configuration. */
		timeout?: SubmitJobPostBodyTimeout | null;
	}

	export interface SubmitJobPostBodyArrayProperties {
		size?: number | null;
	}

	export interface SubmitJobPostBodyContainerOverrides {
		vcpus?: number | null;
		memory?: number | null;
		command?: Array<string> | null;
		instanceType?: string | null;
		environment?: Array<KeyValuePair> | null;
		resourceRequirements?: Array<ResourceRequirement> | null;
	}

	export interface SubmitJobPostBodyNodeOverrides {
		numNodes?: number | null;
		nodePropertyOverrides?: Array<NodePropertyOverride> | null;
	}

	export interface SubmitJobPostBodyRetryStrategy {
		attempts?: number | null;
	}

	export interface SubmitJobPostBodyTimeout {
		attemptDurationSeconds?: number | null;
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

	export interface UpdateComputeEnvironmentPostBody {

		/**
		 * The name or full Amazon Resource Name (ARN) of the compute environment to update.
		 * Required
		 */
		computeEnvironment: string;

		/** The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues. */
		state?: ComputeEnvironmentDetailState | null;

		/** An object representing the attributes of a compute environment that can be updated. */
		computeResources?: UpdateComputeEnvironmentPostBodyComputeResources | null;

		/** <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note> */
		serviceRole?: string | null;
	}

	export interface UpdateComputeEnvironmentPostBodyComputeResources {
		minvCpus?: number | null;
		maxvCpus?: number | null;
		desiredvCpus?: number | null;
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
		computeEnvironmentOrder?: Array<ComputeEnvironmentOrder> | null;
	}

}

