import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface BatchDescribeSimulationJobResponse {
		jobs?: Array<SimulationJob> | null;
		unprocessedJobs?: Array<string> | null;
	}


	/** Information about a simulation job. */
	export interface SimulationJob {
		arn?: string | null;
		name?: string | null;
		status?: SimulationJobStatus | null;
		lastStartedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		failureBehavior?: SimulationJobFailureBehavior | null;
		failureCode?: SimulationJobFailureCode | null;
		failureReason?: string | null;
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: OutputLocation | null;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig | null;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;
		iamRole?: string | null;
		robotApplications?: Array<RobotApplicationConfig> | null;
		simulationApplications?: Array<SimulationApplicationConfig> | null;
		dataSources?: Array<DataSource> | null;
		tags?: TagMap | null;

		/** VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse | null;

		/** Describes a network interface. */
		networkInterface?: NetworkInterface | null;

		/** Compute information for the simulation job */
		compute?: ComputeResponse | null;
	}

	export enum SimulationJobStatus { Pending = 0, Preparing = 1, Running = 2, Restarting = 3, Completed = 4, Failed = 5, RunningFailed = 6, Terminating = 7, Terminated = 8, Canceled = 9 }

	export enum SimulationJobFailureBehavior { Fail = 0, Continue = 1 }

	export enum SimulationJobFailureCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }


	/** The output location. */
	export interface OutputLocation {
		s3Bucket?: string | null;
		s3Prefix?: string | null;
	}


	/** The logging configuration. */
	export interface LoggingConfig {
		recordAllRosTopics: boolean;
	}


	/** Application configuration information for a robot. */
	export interface RobotApplicationConfig {
		application: string;
		applicationVersion?: string | null;

		/**
		 * Information about a launch configuration.
		 * Required
		 */
		launchConfig: LaunchConfig;
	}


	/** Information about a launch configuration. */
	export interface LaunchConfig {
		packageName: string;
		launchFile: string;
		environmentVariables?: EnvironmentVariableMap | null;

		/** Configuration information for port forwarding. */
		portForwardingConfig?: PortForwardingConfig | null;
		streamUI?: boolean | null;
	}

	export interface EnvironmentVariableMap {
	}


	/** Configuration information for port forwarding. */
	export interface PortForwardingConfig {
		portMappings?: Array<PortMapping> | null;
	}


	/** An object representing a port mapping. */
	export interface PortMapping {
		jobPort: number;
		applicationPort: number;
		enableOnPublicIp?: boolean | null;
	}


	/** Information about a simulation application configuration. */
	export interface SimulationApplicationConfig {
		application: string;
		applicationVersion?: string | null;

		/**
		 * Information about a launch configuration.
		 * Required
		 */
		launchConfig: LaunchConfig;
	}


	/** Information about a data source. */
	export interface DataSource {
		name?: string | null;
		s3Bucket?: string | null;
		s3Keys?: Array<S3KeyOutput> | null;
	}


	/** Information about S3 keys. */
	export interface S3KeyOutput {
		s3Key?: string | null;
		etag?: string | null;
	}

	export interface TagMap {
	}


	/** VPC configuration associated with your simulation job. */
	export interface VPCConfigResponse {
		subnets?: Array<string> | null;
		securityGroups?: Array<string> | null;
		vpcId?: string | null;
		assignPublicIp?: boolean | null;
	}


	/** Describes a network interface. */
	export interface NetworkInterface {
		networkInterfaceId?: string | null;
		privateIpAddress?: string | null;
		publicIpAddress?: string | null;
	}


	/** Compute information for the simulation job */
	export interface ComputeResponse {
		simulationUnitLimit?: number | null;
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidParameterException {
	}

	export interface InternalServerException {
	}

	export interface ThrottlingException {
	}

	export interface CancelDeploymentJobResponse {
	}

	export interface CancelSimulationJobResponse {
	}

	export interface CancelSimulationJobBatchResponse {
	}

	export interface CreateDeploymentJobResponse {
		arn?: string | null;
		fleet?: string | null;
		status?: CreateDeploymentJobResponseStatus | null;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig> | null;
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
		createdAt?: Date | null;

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig | null;
		tags?: TagMap | null;
	}

	export enum CreateDeploymentJobResponseStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }


	/** Information about a deployment application configuration. */
	export interface DeploymentApplicationConfig {
		application: string;
		applicationVersion: string;

		/**
		 * Configuration information for a deployment launch.
		 * Required
		 */
		launchConfig: DeploymentLaunchConfig;
	}


	/** Configuration information for a deployment launch. */
	export interface DeploymentLaunchConfig {
		packageName: string;
		preLaunchFile?: string | null;
		launchFile: string;
		postLaunchFile?: string | null;
		environmentVariables?: EnvironmentVariableMap | null;
	}

	export enum CreateDeploymentJobResponseFailureCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }


	/** Information about a deployment configuration. */
	export interface DeploymentConfig {
		concurrentDeploymentPercentage?: number | null;
		failureThresholdPercentage?: number | null;
		robotDeploymentTimeoutInSeconds?: number | null;

		/** Information about an S3 object. */
		downloadConditionFile?: S3Object | null;
	}


	/** Information about an S3 object. */
	export interface S3Object {
		bucket: string;
		key: string;
		etag?: string | null;
	}

	export interface LimitExceededException {
	}

	export interface ConcurrentDeploymentException {
	}

	export interface IdempotentParameterMismatchException {
	}

	export interface CreateFleetResponse {
		arn?: string | null;
		name?: string | null;
		createdAt?: Date | null;
		tags?: TagMap | null;
	}

	export interface CreateRobotResponse {
		arn?: string | null;
		name?: string | null;
		createdAt?: Date | null;
		greengrassGroupId?: string | null;
		architecture?: CreateRobotResponseArchitecture | null;
		tags?: TagMap | null;
	}

	export enum CreateRobotResponseArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface ResourceAlreadyExistsException {
	}

	export interface CreateRobotApplicationResponse {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		sources?: Array<Source> | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;
		lastUpdatedAt?: Date | null;
		revisionId?: string | null;
		tags?: TagMap | null;
	}


	/** Information about a source. */
	export interface Source {
		s3Bucket?: string | null;
		s3Key?: string | null;
		etag?: string | null;
		architecture?: CreateRobotResponseArchitecture | null;
	}


	/** Information about a robot software suite (ROS distribution). */
	export interface RobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}

	export enum RobotSoftwareSuiteName { ROS = 0, ROS2 = 1 }

	export enum RobotSoftwareSuiteVersion { Kinetic = 0, Melodic = 1, Dashing = 2 }


	/** Information about a source configuration. */
	export interface SourceConfig {
		s3Bucket?: string | null;
		s3Key?: string | null;
		architecture?: CreateRobotResponseArchitecture | null;
	}

	export enum RobotSoftwareSuiteType { ROS = 0, ROS2 = 1 }

	export enum RobotSoftwareSuiteVersionType { Kinetic = 0, Melodic = 1, Dashing = 2 }

	export interface CreateRobotApplicationVersionResponse {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		sources?: Array<Source> | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;
		lastUpdatedAt?: Date | null;
		revisionId?: string | null;
	}

	export interface CreateSimulationApplicationResponse {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		sources?: Array<Source> | null;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine | null;
		lastUpdatedAt?: Date | null;
		revisionId?: string | null;
		tags?: TagMap | null;
	}


	/** Information about a simulation software suite. */
	export interface SimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteName | null;
		version?: string | null;
	}

	export enum SimulationSoftwareSuiteName { Gazebo = 0, RosbagPlay = 1 }


	/** Information about a rendering engine. */
	export interface RenderingEngine {
		name?: RenderingEngineName | null;
		version?: string | null;
	}

	export enum RenderingEngineName { OGRE = 0 }

	export enum SimulationSoftwareSuiteType { Gazebo = 0, RosbagPlay = 1 }

	export enum RenderingEngineType { OGRE = 0 }

	export interface CreateSimulationApplicationVersionResponse {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		sources?: Array<Source> | null;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine | null;
		lastUpdatedAt?: Date | null;
		revisionId?: string | null;
	}

	export interface CreateSimulationJobResponse {
		arn?: string | null;
		status?: SimulationJobStatus | null;
		lastStartedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		failureBehavior?: SimulationJobFailureBehavior | null;
		failureCode?: SimulationJobFailureCode | null;
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: OutputLocation | null;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig | null;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;
		iamRole?: string | null;
		robotApplications?: Array<RobotApplicationConfig> | null;
		simulationApplications?: Array<SimulationApplicationConfig> | null;
		dataSources?: Array<DataSource> | null;
		tags?: TagMap | null;

		/** VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse | null;

		/** Compute information for the simulation job */
		compute?: ComputeResponse | null;
	}


	/** Information about a data source. */
	export interface DataSourceConfig {
		name: string;
		s3Bucket: string;
		s3Keys: Array<string>;
	}

	export interface ServiceUnavailableException {
	}

	export interface DeleteFleetResponse {
	}

	export interface DeleteRobotResponse {
	}

	export interface DeleteRobotApplicationResponse {
	}

	export interface DeleteSimulationApplicationResponse {
	}

	export interface DeregisterRobotResponse {
		fleet?: string | null;
		robot?: string | null;
	}

	export interface DescribeDeploymentJobResponse {
		arn?: string | null;
		fleet?: string | null;
		status?: CreateDeploymentJobResponseStatus | null;

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig | null;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig> | null;
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
		createdAt?: Date | null;
		robotDeploymentSummary?: Array<RobotDeployment> | null;
		tags?: TagMap | null;
	}


	/** Information about a robot deployment. */
	export interface RobotDeployment {
		arn?: string | null;
		deploymentStartTime?: Date | null;
		deploymentFinishTime?: Date | null;
		status?: RobotDeploymentStatus | null;

		/** Information about the progress of a deployment job. */
		progressDetail?: ProgressDetail | null;
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
	}

	export enum RobotDeploymentStatus { Available = 0, Registered = 1, PendingNewDeployment = 2, Deploying = 3, Failed = 4, InSync = 5, NoResponse = 6 }


	/** Information about the progress of a deployment job. */
	export interface ProgressDetail {
		currentProgress?: ProgressDetailCurrentProgress | null;
		percentDone?: number | null;
		estimatedTimeRemainingSeconds?: number | null;
		targetResource?: string | null;
	}

	export enum ProgressDetailCurrentProgress { Validating = 0, DownloadingExtracting = 1, ExecutingDownloadCondition = 2, ExecutingPreLaunch = 3, Launching = 4, ExecutingPostLaunch = 5, Finished = 6 }

	export interface DescribeFleetResponse {
		name?: string | null;
		arn?: string | null;
		robots?: Array<Robot> | null;
		createdAt?: Date | null;
		lastDeploymentStatus?: CreateDeploymentJobResponseStatus | null;
		lastDeploymentJob?: string | null;
		lastDeploymentTime?: Date | null;
		tags?: TagMap | null;
	}


	/** Information about a robot. */
	export interface Robot {
		arn?: string | null;
		name?: string | null;
		fleetArn?: string | null;
		status?: RobotDeploymentStatus | null;
		greenGrassGroupId?: string | null;
		createdAt?: Date | null;
		architecture?: CreateRobotResponseArchitecture | null;
		lastDeploymentJob?: string | null;
		lastDeploymentTime?: Date | null;
	}

	export interface DescribeRobotResponse {
		arn?: string | null;
		name?: string | null;
		fleetArn?: string | null;
		status?: RobotDeploymentStatus | null;
		greengrassGroupId?: string | null;
		createdAt?: Date | null;
		architecture?: CreateRobotResponseArchitecture | null;
		lastDeploymentJob?: string | null;
		lastDeploymentTime?: Date | null;
		tags?: TagMap | null;
	}

	export interface DescribeRobotApplicationResponse {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		sources?: Array<Source> | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;
		revisionId?: string | null;
		lastUpdatedAt?: Date | null;
		tags?: TagMap | null;
	}

	export interface DescribeSimulationApplicationResponse {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		sources?: Array<Source> | null;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine | null;
		revisionId?: string | null;
		lastUpdatedAt?: Date | null;
		tags?: TagMap | null;
	}

	export interface DescribeSimulationJobResponse {
		arn?: string | null;
		name?: string | null;
		status?: SimulationJobStatus | null;
		lastStartedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		failureBehavior?: SimulationJobFailureBehavior | null;
		failureCode?: SimulationJobFailureCode | null;
		failureReason?: string | null;
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: OutputLocation | null;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig | null;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;
		iamRole?: string | null;
		robotApplications?: Array<RobotApplicationConfig> | null;
		simulationApplications?: Array<SimulationApplicationConfig> | null;
		dataSources?: Array<DataSource> | null;
		tags?: TagMap | null;

		/** VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse | null;

		/** Describes a network interface. */
		networkInterface?: NetworkInterface | null;

		/** Compute information for the simulation job */
		compute?: ComputeResponse | null;
	}

	export interface DescribeSimulationJobBatchResponse {
		arn?: string | null;
		status?: DescribeSimulationJobBatchResponseStatus | null;
		lastUpdatedAt?: Date | null;
		createdAt?: Date | null;
		clientRequestToken?: string | null;

		/** Information about the batch policy. */
		batchPolicy?: BatchPolicy | null;
		failureCode?: DescribeSimulationJobBatchResponseFailureCode | null;
		failureReason?: string | null;
		failedRequests?: Array<FailedCreateSimulationJobRequest> | null;
		pendingRequests?: Array<SimulationJobRequest> | null;
		createdRequests?: Array<SimulationJobSummary> | null;
		tags?: TagMap | null;
	}

	export enum DescribeSimulationJobBatchResponseStatus { Pending = 0, InProgress = 1, Failed = 2, Completed = 3, Canceled = 4, Canceling = 5, Completing = 6, TimingOut = 7, TimedOut = 8 }


	/** Information about the batch policy. */
	export interface BatchPolicy {
		timeoutInSeconds?: number | null;
		maxConcurrency?: number | null;
	}

	export enum DescribeSimulationJobBatchResponseFailureCode { InternalServiceError = 0 }


	/** Information about a failed create simulation job request. */
	export interface FailedCreateSimulationJobRequest {

		/** Information about a simulation job request. */
		request?: SimulationJobRequest | null;
		failureReason?: string | null;
		failureCode?: SimulationJobFailureCode | null;
		failedAt?: Date | null;
	}


	/** Information about a simulation job request. */
	export interface SimulationJobRequest {

		/** The output location. */
		outputLocation?: OutputLocation | null;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig | null;
		maxJobDurationInSeconds: number;
		iamRole?: string | null;
		failureBehavior?: SimulationJobFailureBehavior | null;
		useDefaultApplications?: boolean | null;
		robotApplications?: Array<RobotApplicationConfig> | null;
		simulationApplications?: Array<SimulationApplicationConfig> | null;
		dataSources?: Array<DataSourceConfig> | null;

		/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: VPCConfig | null;

		/** Compute information for the simulation job. */
		compute?: Compute | null;
		tags?: TagMap | null;
	}


	/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
	export interface VPCConfig {
		subnets: Array<string>;
		securityGroups?: Array<string> | null;
		assignPublicIp?: boolean | null;
	}


	/** Compute information for the simulation job. */
	export interface Compute {
		simulationUnitLimit?: number | null;
	}


	/** Summary information for a simulation job. */
	export interface SimulationJobSummary {
		arn?: string | null;
		lastUpdatedAt?: Date | null;
		name?: string | null;
		status?: SimulationJobStatus | null;
		simulationApplicationNames?: Array<string> | null;
		robotApplicationNames?: Array<string> | null;
		dataSourceNames?: Array<string> | null;
	}

	export interface ListDeploymentJobsResponse {
		deploymentJobs?: Array<DeploymentJob> | null;
		nextToken?: string | null;
	}


	/** Information about a deployment job. */
	export interface DeploymentJob {
		arn?: string | null;
		fleet?: string | null;
		status?: CreateDeploymentJobResponseStatus | null;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig> | null;

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig | null;
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
		createdAt?: Date | null;
	}


	/** Information about a filter. */
	export interface Filter {
		name?: string | null;
		values?: Array<string> | null;
	}

	export interface ListFleetsResponse {
		fleetDetails?: Array<Fleet> | null;
		nextToken?: string | null;
	}


	/** Information about a fleet. */
	export interface Fleet {
		name?: string | null;
		arn?: string | null;
		createdAt?: Date | null;
		lastDeploymentStatus?: CreateDeploymentJobResponseStatus | null;
		lastDeploymentJob?: string | null;
		lastDeploymentTime?: Date | null;
	}

	export interface ListRobotApplicationsResponse {
		robotApplicationSummaries?: Array<RobotApplicationSummary> | null;
		nextToken?: string | null;
	}


	/** Summary information for a robot application. */
	export interface RobotApplicationSummary {
		name?: string | null;
		arn?: string | null;
		version?: string | null;
		lastUpdatedAt?: Date | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;
	}

	export interface ListRobotsResponse {
		robots?: Array<Robot> | null;
		nextToken?: string | null;
	}

	export interface ListSimulationApplicationsResponse {
		simulationApplicationSummaries?: Array<SimulationApplicationSummary> | null;
		nextToken?: string | null;
	}


	/** Summary information for a simulation application. */
	export interface SimulationApplicationSummary {
		name?: string | null;
		arn?: string | null;
		version?: string | null;
		lastUpdatedAt?: Date | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite | null;
	}

	export interface ListSimulationJobBatchesResponse {
		simulationJobBatchSummaries?: Array<SimulationJobBatchSummary> | null;
		nextToken?: string | null;
	}


	/** Information about a simulation job batch. */
	export interface SimulationJobBatchSummary {
		arn?: string | null;
		lastUpdatedAt?: Date | null;
		createdAt?: Date | null;
		status?: DescribeSimulationJobBatchResponseStatus | null;
		failedRequestCount?: number | null;
		pendingRequestCount?: number | null;
		createdRequestCount?: number | null;
	}

	export interface ListSimulationJobsResponse {
		simulationJobSummaries: Array<SimulationJobSummary>;
		nextToken?: string | null;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap | null;
	}

	export interface RegisterRobotResponse {
		fleet?: string | null;
		robot?: string | null;
	}

	export interface RestartSimulationJobResponse {
	}

	export interface StartSimulationJobBatchResponse {
		arn?: string | null;
		status?: DescribeSimulationJobBatchResponseStatus | null;
		createdAt?: Date | null;
		clientRequestToken?: string | null;

		/** Information about the batch policy. */
		batchPolicy?: BatchPolicy | null;
		failureCode?: DescribeSimulationJobBatchResponseFailureCode | null;
		failureReason?: string | null;
		failedRequests?: Array<FailedCreateSimulationJobRequest> | null;
		pendingRequests?: Array<SimulationJobRequest> | null;
		createdRequests?: Array<SimulationJobSummary> | null;
		tags?: TagMap | null;
	}

	export interface SyncDeploymentJobResponse {
		arn?: string | null;
		fleet?: string | null;
		status?: CreateDeploymentJobResponseStatus | null;

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig | null;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig> | null;
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
		createdAt?: Date | null;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateRobotApplicationResponse {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		sources?: Array<Source> | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;
		lastUpdatedAt?: Date | null;
		revisionId?: string | null;
	}

	export interface UpdateSimulationApplicationResponse {
		arn?: string | null;
		name?: string | null;
		version?: string | null;
		sources?: Array<Source> | null;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite | null;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine | null;
		lastUpdatedAt?: Date | null;
		revisionId?: string | null;
	}

	export enum Architecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface BatchDescribeSimulationJobRequest {
		jobs: Array<string>;
	}

	export interface CancelDeploymentJobRequest {
		job: string;
	}

	export interface CancelSimulationJobBatchRequest {
		batch: string;
	}

	export interface CancelSimulationJobRequest {
		job: string;
	}

	export interface CreateDeploymentJobRequest {

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig | null;
		clientRequestToken: string;
		fleet: string;
		deploymentApplicationConfigs: Array<DeploymentApplicationConfig>;
		tags?: TagMap | null;
	}

	export enum DeploymentStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }

	export enum DeploymentJobErrorCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }

	export interface CreateFleetRequest {
		name: string;
		tags?: TagMap | null;
	}

	export interface CreateRobotApplicationRequest {
		name: string;
		sources: Array<SourceConfig>;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: RobotSoftwareSuite;
		tags?: TagMap | null;
	}

	export interface CreateRobotApplicationVersionRequest {
		application: string;
		currentRevisionId?: string | null;
	}

	export interface CreateRobotRequest {
		name: string;
		architecture: CreateRobotResponseArchitecture;
		greengrassGroupId: string;
		tags?: TagMap | null;
	}

	export interface CreateSimulationApplicationRequest {
		name: string;
		sources: Array<SourceConfig>;

		/**
		 * Information about a simulation software suite.
		 * Required
		 */
		simulationSoftwareSuite: SimulationSoftwareSuite;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: RobotSoftwareSuite;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine | null;
		tags?: TagMap | null;
	}

	export interface CreateSimulationApplicationVersionRequest {
		application: string;
		currentRevisionId?: string | null;
	}

	export enum FailureBehavior { Fail = 0, Continue = 1 }

	export interface CreateSimulationJobRequest {
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: OutputLocation | null;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig | null;
		maxJobDurationInSeconds: number;
		iamRole: string;
		failureBehavior?: SimulationJobFailureBehavior | null;
		robotApplications?: Array<RobotApplicationConfig> | null;
		simulationApplications?: Array<SimulationApplicationConfig> | null;
		dataSources?: Array<DataSourceConfig> | null;
		tags?: TagMap | null;

		/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: VPCConfig | null;

		/** Compute information for the simulation job. */
		compute?: Compute | null;
	}

	export enum SimulationJobErrorCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }

	export interface DeleteFleetRequest {
		fleet: string;
	}

	export interface DeleteRobotApplicationRequest {
		application: string;
		applicationVersion?: string | null;
	}

	export interface DeleteRobotRequest {
		robot: string;
	}

	export interface DeleteSimulationApplicationRequest {
		application: string;
		applicationVersion?: string | null;
	}

	export interface DeregisterRobotRequest {
		fleet: string;
		robot: string;
	}

	export interface DescribeDeploymentJobRequest {
		job: string;
	}

	export interface DescribeFleetRequest {
		fleet: string;
	}

	export interface DescribeRobotApplicationRequest {
		application: string;
		applicationVersion?: string | null;
	}

	export interface DescribeRobotRequest {
		robot: string;
	}

	export enum RobotStatus { Available = 0, Registered = 1, PendingNewDeployment = 2, Deploying = 3, Failed = 4, InSync = 5, NoResponse = 6 }

	export interface DescribeSimulationApplicationRequest {
		application: string;
		applicationVersion?: string | null;
	}

	export interface DescribeSimulationJobBatchRequest {
		batch: string;
	}

	export enum SimulationJobBatchStatus { Pending = 0, InProgress = 1, Failed = 2, Completed = 3, Canceled = 4, Canceling = 5, Completing = 6, TimingOut = 7, TimedOut = 8 }

	export enum SimulationJobBatchErrorCode { InternalServiceError = 0 }

	export interface DescribeSimulationJobRequest {
		job: string;
	}

	export interface ListDeploymentJobsRequest {
		filters?: Array<Filter> | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListFleetsRequest {
		nextToken?: string | null;
		maxResults?: number | null;
		filters?: Array<Filter> | null;
	}

	export interface ListRobotApplicationsRequest {
		versionQualifier?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
		filters?: Array<Filter> | null;
	}

	export interface ListRobotsRequest {
		nextToken?: string | null;
		maxResults?: number | null;
		filters?: Array<Filter> | null;
	}

	export interface ListSimulationApplicationsRequest {
		versionQualifier?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
		filters?: Array<Filter> | null;
	}

	export interface ListSimulationJobBatchesRequest {
		nextToken?: string | null;
		maxResults?: number | null;
		filters?: Array<Filter> | null;
	}

	export interface ListSimulationJobsRequest {
		nextToken?: string | null;
		maxResults?: number | null;
		filters?: Array<Filter> | null;
	}

	export interface ListTagsForResourceRequest {
	}

	export enum RobotDeploymentStep { Validating = 0, DownloadingExtracting = 1, ExecutingDownloadCondition = 2, ExecutingPreLaunch = 3, Launching = 4, ExecutingPostLaunch = 5, Finished = 6 }

	export interface RegisterRobotRequest {
		fleet: string;
		robot: string;
	}

	export interface RestartSimulationJobRequest {
		job: string;
	}

	export interface StartSimulationJobBatchRequest {
		clientRequestToken?: string | null;

		/** Information about the batch policy. */
		batchPolicy?: BatchPolicy | null;
		createSimulationJobRequests: Array<SimulationJobRequest>;
		tags?: TagMap | null;
	}

	export interface SyncDeploymentJobRequest {
		clientRequestToken: string;
		fleet: string;
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateRobotApplicationRequest {
		application: string;
		sources: Array<SourceConfig>;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: RobotSoftwareSuite;
		currentRevisionId?: string | null;
	}

	export interface UpdateSimulationApplicationRequest {
		application: string;
		sources: Array<SourceConfig>;

		/**
		 * Information about a simulation software suite.
		 * Required
		 */
		simulationSoftwareSuite: SimulationSoftwareSuite;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: RobotSoftwareSuite;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine | null;
		currentRevisionId?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Describes one or more simulation jobs.
		 * Post batchDescribeSimulationJob
		 * @return {BatchDescribeSimulationJobResponse} Success
		 */
		BatchDescribeSimulationJob(requestBody: BatchDescribeSimulationJobPostBody): Observable<BatchDescribeSimulationJobResponse> {
			return this.http.post<BatchDescribeSimulationJobResponse>(this.baseUri + 'batchDescribeSimulationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the specified deployment job.
		 * Post cancelDeploymentJob
		 * @return {CancelDeploymentJobResponse} Success
		 */
		CancelDeploymentJob(requestBody: CancelDeploymentJobPostBody): Observable<CancelDeploymentJobResponse> {
			return this.http.post<CancelDeploymentJobResponse>(this.baseUri + 'cancelDeploymentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the specified simulation job.
		 * Post cancelSimulationJob
		 * @return {CancelSimulationJobResponse} Success
		 */
		CancelSimulationJob(requestBody: CancelSimulationJobPostBody): Observable<CancelSimulationJobResponse> {
			return this.http.post<CancelSimulationJobResponse>(this.baseUri + 'cancelSimulationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch.
		 * Post cancelSimulationJobBatch
		 * @return {CancelSimulationJobBatchResponse} Success
		 */
		CancelSimulationJobBatch(requestBody: CancelSimulationJobBatchPostBody): Observable<CancelSimulationJobBatchResponse> {
			return this.http.post<CancelSimulationJobBatchResponse>(this.baseUri + 'cancelSimulationJobBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deploys a specific version of a robot application to robots in a fleet.</p> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
		 * Post createDeploymentJob
		 * @return {CreateDeploymentJobResponse} Success
		 */
		CreateDeploymentJob(requestBody: CreateDeploymentJobPostBody): Observable<CreateDeploymentJobResponse> {
			return this.http.post<CreateDeploymentJobResponse>(this.baseUri + 'createDeploymentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a fleet, a logical group of robots running the same robot application.
		 * Post createFleet
		 * @return {CreateFleetResponse} Success
		 */
		CreateFleet(requestBody: CreateFleetPostBody): Observable<CreateFleetResponse> {
			return this.http.post<CreateFleetResponse>(this.baseUri + 'createFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a robot.
		 * Post createRobot
		 * @return {CreateRobotResponse} Success
		 */
		CreateRobot(requestBody: CreateRobotPostBody): Observable<CreateRobotResponse> {
			return this.http.post<CreateRobotResponse>(this.baseUri + 'createRobot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a robot application.
		 * Post createRobotApplication
		 * @return {CreateRobotApplicationResponse} Success
		 */
		CreateRobotApplication(requestBody: CreateRobotApplicationPostBody): Observable<CreateRobotApplicationResponse> {
			return this.http.post<CreateRobotApplicationResponse>(this.baseUri + 'createRobotApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a version of a robot application.
		 * Post createRobotApplicationVersion
		 * @return {CreateRobotApplicationVersionResponse} Success
		 */
		CreateRobotApplicationVersion(requestBody: CreateRobotApplicationVersionPostBody): Observable<CreateRobotApplicationVersionResponse> {
			return this.http.post<CreateRobotApplicationVersionResponse>(this.baseUri + 'createRobotApplicationVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a simulation application.
		 * Post createSimulationApplication
		 * @return {CreateSimulationApplicationResponse} Success
		 */
		CreateSimulationApplication(requestBody: CreateSimulationApplicationPostBody): Observable<CreateSimulationApplicationResponse> {
			return this.http.post<CreateSimulationApplicationResponse>(this.baseUri + 'createSimulationApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a simulation application with a specific revision id.
		 * Post createSimulationApplicationVersion
		 * @return {CreateSimulationApplicationVersionResponse} Success
		 */
		CreateSimulationApplicationVersion(requestBody: CreateSimulationApplicationVersionPostBody): Observable<CreateSimulationApplicationVersionResponse> {
			return this.http.post<CreateSimulationApplicationVersionResponse>(this.baseUri + 'createSimulationApplicationVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
		 * Post createSimulationJob
		 * @return {CreateSimulationJobResponse} Success
		 */
		CreateSimulationJob(requestBody: CreateSimulationJobPostBody): Observable<CreateSimulationJobResponse> {
			return this.http.post<CreateSimulationJobResponse>(this.baseUri + 'createSimulationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a fleet.
		 * Post deleteFleet
		 * @return {DeleteFleetResponse} Success
		 */
		DeleteFleet(requestBody: DeleteFleetPostBody): Observable<DeleteFleetResponse> {
			return this.http.post<DeleteFleetResponse>(this.baseUri + 'deleteFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a robot.
		 * Post deleteRobot
		 * @return {DeleteRobotResponse} Success
		 */
		DeleteRobot(requestBody: DeleteRobotPostBody): Observable<DeleteRobotResponse> {
			return this.http.post<DeleteRobotResponse>(this.baseUri + 'deleteRobot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a robot application.
		 * Post deleteRobotApplication
		 * @return {DeleteRobotApplicationResponse} Success
		 */
		DeleteRobotApplication(requestBody: DeleteRobotApplicationPostBody): Observable<DeleteRobotApplicationResponse> {
			return this.http.post<DeleteRobotApplicationResponse>(this.baseUri + 'deleteRobotApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a simulation application.
		 * Post deleteSimulationApplication
		 * @return {DeleteSimulationApplicationResponse} Success
		 */
		DeleteSimulationApplication(requestBody: DeleteSimulationApplicationPostBody): Observable<DeleteSimulationApplicationResponse> {
			return this.http.post<DeleteSimulationApplicationResponse>(this.baseUri + 'deleteSimulationApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters a robot.
		 * Post deregisterRobot
		 * @return {DeregisterRobotResponse} Success
		 */
		DeregisterRobot(requestBody: DeregisterRobotPostBody): Observable<DeregisterRobotResponse> {
			return this.http.post<DeregisterRobotResponse>(this.baseUri + 'deregisterRobot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a deployment job.
		 * Post describeDeploymentJob
		 * @return {DescribeDeploymentJobResponse} Success
		 */
		DescribeDeploymentJob(requestBody: DescribeDeploymentJobPostBody): Observable<DescribeDeploymentJobResponse> {
			return this.http.post<DescribeDeploymentJobResponse>(this.baseUri + 'describeDeploymentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a fleet.
		 * Post describeFleet
		 * @return {DescribeFleetResponse} Success
		 */
		DescribeFleet(requestBody: DescribeFleetPostBody): Observable<DescribeFleetResponse> {
			return this.http.post<DescribeFleetResponse>(this.baseUri + 'describeFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a robot.
		 * Post describeRobot
		 * @return {DescribeRobotResponse} Success
		 */
		DescribeRobot(requestBody: DescribeRobotPostBody): Observable<DescribeRobotResponse> {
			return this.http.post<DescribeRobotResponse>(this.baseUri + 'describeRobot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a robot application.
		 * Post describeRobotApplication
		 * @return {DescribeRobotApplicationResponse} Success
		 */
		DescribeRobotApplication(requestBody: DescribeRobotApplicationPostBody): Observable<DescribeRobotApplicationResponse> {
			return this.http.post<DescribeRobotApplicationResponse>(this.baseUri + 'describeRobotApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a simulation application.
		 * Post describeSimulationApplication
		 * @return {DescribeSimulationApplicationResponse} Success
		 */
		DescribeSimulationApplication(requestBody: DescribeSimulationApplicationPostBody): Observable<DescribeSimulationApplicationResponse> {
			return this.http.post<DescribeSimulationApplicationResponse>(this.baseUri + 'describeSimulationApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a simulation job.
		 * Post describeSimulationJob
		 * @return {DescribeSimulationJobResponse} Success
		 */
		DescribeSimulationJob(requestBody: DescribeSimulationJobPostBody): Observable<DescribeSimulationJobResponse> {
			return this.http.post<DescribeSimulationJobResponse>(this.baseUri + 'describeSimulationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a simulation job batch.
		 * Post describeSimulationJobBatch
		 * @return {DescribeSimulationJobBatchResponse} Success
		 */
		DescribeSimulationJobBatch(requestBody: DescribeSimulationJobBatchPostBody): Observable<DescribeSimulationJobBatchResponse> {
			return this.http.post<DescribeSimulationJobBatchResponse>(this.baseUri + 'describeSimulationJobBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.
		 * Post listDeploymentJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentJobsResponse} Success
		 */
		ListDeploymentJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDeploymentJobsPostBody): Observable<ListDeploymentJobsResponse> {
			return this.http.post<ListDeploymentJobsResponse>(this.baseUri + 'listDeploymentJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.
		 * Post listFleets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFleetsResponse} Success
		 */
		ListFleets(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFleetsPostBody): Observable<ListFleetsResponse> {
			return this.http.post<ListFleetsResponse>(this.baseUri + 'listFleets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
		 * Post listRobotApplications
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRobotApplicationsResponse} Success
		 */
		ListRobotApplications(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRobotApplicationsPostBody): Observable<ListRobotApplicationsResponse> {
			return this.http.post<ListRobotApplicationsResponse>(this.baseUri + 'listRobotApplications?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of robots. You can optionally provide filters to retrieve specific robots.
		 * Post listRobots
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRobotsResponse} Success
		 */
		ListRobots(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRobotsPostBody): Observable<ListRobotsResponse> {
			return this.http.post<ListRobotsResponse>(this.baseUri + 'listRobots?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications.
		 * Post listSimulationApplications
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSimulationApplicationsResponse} Success
		 */
		ListSimulationApplications(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSimulationApplicationsPostBody): Observable<ListSimulationApplicationsResponse> {
			return this.http.post<ListSimulationApplicationsResponse>(this.baseUri + 'listSimulationApplications?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs.
		 * Post listSimulationJobBatches
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSimulationJobBatchesResponse} Success
		 */
		ListSimulationJobBatches(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSimulationJobBatchesPostBody): Observable<ListSimulationJobBatchesResponse> {
			return this.http.post<ListSimulationJobBatchesResponse>(this.baseUri + 'listSimulationJobBatches?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs.
		 * Post listSimulationJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSimulationJobsResponse} Success
		 */
		ListSimulationJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSimulationJobsPostBody): Observable<ListSimulationJobsResponse> {
			return this.http.post<ListSimulationJobsResponse>(this.baseUri + 'listSimulationJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags on a AWS RoboMaker resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a robot with a fleet.
		 * Post registerRobot
		 * @return {RegisterRobotResponse} Success
		 */
		RegisterRobot(requestBody: RegisterRobotPostBody): Observable<RegisterRobotResponse> {
			return this.http.post<RegisterRobotResponse>(this.baseUri + 'registerRobot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restarts a running simulation job.
		 * Post restartSimulationJob
		 * @return {RestartSimulationJobResponse} Success
		 */
		RestartSimulationJob(requestBody: RestartSimulationJobPostBody): Observable<RestartSimulationJobResponse> {
			return this.http.post<RestartSimulationJobResponse>(this.baseUri + 'restartSimulationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects.
		 * Post startSimulationJobBatch
		 * @return {StartSimulationJobBatchResponse} Success
		 */
		StartSimulationJobBatch(requestBody: StartSimulationJobBatchPostBody): Observable<StartSimulationJobBatchResponse> {
			return this.http.post<StartSimulationJobBatchResponse>(this.baseUri + 'startSimulationJobBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
		 * Post syncDeploymentJob
		 * @return {SyncDeploymentJobResponse} Success
		 */
		SyncDeploymentJob(requestBody: SyncDeploymentJobPostBody): Observable<SyncDeploymentJobResponse> {
			return this.http.post<SyncDeploymentJobResponse>(this.baseUri + 'syncDeploymentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing tags.
		 * @param {Array<string>} tagKeys A map that contains tag keys and tag values that will be unattached from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a robot application.
		 * Post updateRobotApplication
		 * @return {UpdateRobotApplicationResponse} Success
		 */
		UpdateRobotApplication(requestBody: UpdateRobotApplicationPostBody): Observable<UpdateRobotApplicationResponse> {
			return this.http.post<UpdateRobotApplicationResponse>(this.baseUri + 'updateRobotApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a simulation application.
		 * Post updateSimulationApplication
		 * @return {UpdateSimulationApplicationResponse} Success
		 */
		UpdateSimulationApplication(requestBody: UpdateSimulationApplicationPostBody): Observable<UpdateSimulationApplicationResponse> {
			return this.http.post<UpdateSimulationApplicationResponse>(this.baseUri + 'updateSimulationApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchDescribeSimulationJobPostBody {

		/**
		 * A list of Amazon Resource Names (ARNs) of simulation jobs to describe.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		jobs: Array<string>;
	}

	export interface CancelDeploymentJobPostBody {

		/**
		 * The deployment job ARN to cancel.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface CancelSimulationJobPostBody {

		/**
		 * The simulation job ARN to cancel.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface CancelSimulationJobBatchPostBody {

		/**
		 * The id of the batch to cancel.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: string;
	}

	export interface CreateDeploymentJobPostBody {

		/** Information about a deployment configuration. */
		deploymentConfig?: CreateDeploymentJobPostBodyDeploymentConfig | null;

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: string;

		/**
		 * The Amazon Resource Name (ARN) of the fleet to deploy.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * The deployment application configuration.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		deploymentApplicationConfigs: Array<DeploymentApplicationConfig>;

		/** A map that contains tag keys and tag values that are attached to the deployment job. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateDeploymentJobPostBodyDeploymentConfig {
		concurrentDeploymentPercentage?: number | null;
		failureThresholdPercentage?: number | null;
		robotDeploymentTimeoutInSeconds?: number | null;

		/** Information about an S3 object. */
		downloadConditionFile?: S3Object | null;
	}

	export interface CreateFleetPostBody {

		/**
		 * The name of the fleet.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/** A map that contains tag keys and tag values that are attached to the fleet. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateRobotPostBody {

		/**
		 * The name for the robot.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/**
		 * The target architecture of the robot.
		 * Required
		 */
		architecture: CreateRobotResponseArchitecture;

		/**
		 * The Greengrass group id.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId: string;

		/** A map that contains tag keys and tag values that are attached to the robot. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateRobotApplicationPostBody {

		/**
		 * The name of the robot application.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/**
		 * The sources of the robot application.
		 * Required
		 */
		sources: Array<SourceConfig>;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: CreateRobotApplicationPostBodyRobotSoftwareSuite;

		/** A map that contains tag keys and tag values that are attached to the robot application. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateRobotApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}

	export interface CreateRobotApplicationVersionPostBody {

		/**
		 * The application information for the robot application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}

	export interface CreateSimulationApplicationPostBody {

		/**
		 * The name of the simulation application.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/**
		 * The sources of the simulation application.
		 * Required
		 */
		sources: Array<SourceConfig>;

		/**
		 * Information about a simulation software suite.
		 * Required
		 */
		simulationSoftwareSuite: CreateSimulationApplicationPostBodySimulationSoftwareSuite;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: CreateSimulationApplicationPostBodyRobotSoftwareSuite;

		/** Information about a rendering engine. */
		renderingEngine?: CreateSimulationApplicationPostBodyRenderingEngine | null;

		/** A map that contains tag keys and tag values that are attached to the simulation application. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateSimulationApplicationPostBodySimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteName | null;
		version?: string | null;
	}

	export interface CreateSimulationApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}

	export interface CreateSimulationApplicationPostBodyRenderingEngine {
		name?: RenderingEngineName | null;
		version?: string | null;
	}

	export interface CreateSimulationApplicationVersionPostBody {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}

	export interface CreateSimulationJobPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: CreateSimulationJobPostBodyOutputLocation | null;

		/** The logging configuration. */
		loggingConfig?: CreateSimulationJobPostBodyLoggingConfig | null;

		/**
		 * The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.
		 * Required
		 */
		maxJobDurationInSeconds: number;

		/**
		 * The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: string;

		/** <p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Restart the simulation job in the same host instance.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl> */
		failureBehavior?: SimulationJobFailureBehavior | null;

		/**
		 * The robot application to use in the simulation job.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		robotApplications?: Array<RobotApplicationConfig> | null;

		/**
		 * The simulation application to use in the simulation job.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		simulationApplications?: Array<SimulationApplicationConfig> | null;

		/**
		 * <p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		dataSources?: Array<DataSourceConfig> | null;

		/** A map that contains tag keys and tag values that are attached to the simulation job. */
		tags?: {[id: string]: string } | null;

		/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: CreateSimulationJobPostBodyVpcConfig | null;

		/** Compute information for the simulation job. */
		compute?: CreateSimulationJobPostBodyCompute | null;
	}

	export interface CreateSimulationJobPostBodyOutputLocation {
		s3Bucket?: string | null;
		s3Prefix?: string | null;
	}

	export interface CreateSimulationJobPostBodyLoggingConfig {
		recordAllRosTopics?: boolean | null;
	}

	export interface CreateSimulationJobPostBodyVpcConfig {
		subnets?: Array<string> | null;
		securityGroups?: Array<string> | null;
		assignPublicIp?: boolean | null;
	}

	export interface CreateSimulationJobPostBodyCompute {
		simulationUnitLimit?: number | null;
	}

	export interface DeleteFleetPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}

	export interface DeleteRobotPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}

	export interface DeleteRobotApplicationPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the the robot application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The version of the robot application to delete.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;
	}

	export interface DeleteSimulationApplicationPostBody {

		/**
		 * The application information for the simulation application to delete.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The version of the simulation application to delete.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;
	}

	export interface DeregisterRobotPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}

	export interface DescribeDeploymentJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the deployment job.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface DescribeFleetPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}

	export interface DescribeRobotPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot to be described.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}

	export interface DescribeRobotApplicationPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The version of the robot application to describe.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;
	}

	export interface DescribeSimulationApplicationPostBody {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The version of the simulation application to describe.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;
	}

	export interface DescribeSimulationJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job to be described.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface DescribeSimulationJobBatchPostBody {

		/**
		 * The id of the batch to describe.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: string;
	}

	export interface ListDeploymentJobsPostBody {

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter> | null;

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListDeploymentJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;

		/** When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;
	}

	export interface ListFleetsPostBody {

		/**
		 * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListFleets</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;

		/** When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter> | null;
	}

	export interface ListRobotApplicationsPostBody {

		/**
		 * The version qualifier of the robot application.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier?: string | null;

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListRobotApplications</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;

		/** When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter> | null;
	}

	export interface ListRobotsPostBody {

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListRobots</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;

		/** When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Registered</code> or the status <code>Available</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter> | null;
	}

	export interface ListSimulationApplicationsPostBody {

		/**
		 * The version qualifier of the simulation application.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier?: string | null;

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationApplications</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;

		/** When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/**
		 * <p>Optional list of filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter> | null;
	}

	export interface ListSimulationJobBatchesPostBody {

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationJobBatches</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;

		/** When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value. */
		maxResults?: number | null;

		/**
		 * Optional filters to limit results.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter> | null;
	}

	export interface ListSimulationJobsPostBody {

		/**
		 * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;

		/** When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and <code>robotApplicationName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Preparing</code> or the status <code>Running</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter> | null;
	}

	export interface TagResourcePostBody {

		/**
		 * A map that contains tag keys and tag values that are attached to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface RegisterRobotPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}

	export interface RestartSimulationJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}

	export interface StartSimulationJobBatchPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** Information about the batch policy. */
		batchPolicy?: StartSimulationJobBatchPostBodyBatchPolicy | null;

		/**
		 * A list of simulation job requests to create in the batch.
		 * Required
		 * Minimum items: 1
		 */
		createSimulationJobRequests: Array<SimulationJobRequest>;

		/** A map that contains tag keys and tag values that are attached to the deployment job batch. */
		tags?: {[id: string]: string } | null;
	}

	export interface StartSimulationJobBatchPostBodyBatchPolicy {
		timeoutInSeconds?: number | null;
		maxConcurrency?: number | null;
	}

	export interface SyncDeploymentJobPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: string;

		/**
		 * The target fleet for the synchronization.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}

	export interface UpdateRobotApplicationPostBody {

		/**
		 * The application information for the robot application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The sources of the robot application.
		 * Required
		 */
		sources: Array<SourceConfig>;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: UpdateRobotApplicationPostBodyRobotSoftwareSuite;

		/**
		 * The revision id for the robot application.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}

	export interface UpdateRobotApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}

	export interface UpdateSimulationApplicationPostBody {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * The sources of the simulation application.
		 * Required
		 */
		sources: Array<SourceConfig>;

		/**
		 * Information about a simulation software suite.
		 * Required
		 */
		simulationSoftwareSuite: UpdateSimulationApplicationPostBodySimulationSoftwareSuite;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: UpdateSimulationApplicationPostBodyRobotSoftwareSuite;

		/** Information about a rendering engine. */
		renderingEngine?: UpdateSimulationApplicationPostBodyRenderingEngine | null;

		/**
		 * The revision id for the robot application.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}

	export interface UpdateSimulationApplicationPostBodySimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteName | null;
		version?: string | null;
	}

	export interface UpdateSimulationApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}

	export interface UpdateSimulationApplicationPostBodyRenderingEngine {
		name?: RenderingEngineName | null;
		version?: string | null;
	}

}

