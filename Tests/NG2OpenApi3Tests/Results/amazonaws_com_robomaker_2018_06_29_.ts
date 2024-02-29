import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchDeleteWorldsResponse {
		unprocessedWorlds?: Array<string>;
	}
	export interface BatchDeleteWorldsResponseFormProperties {
	}
	export function CreateBatchDeleteWorldsResponseFormGroup() {
		return new FormGroup<BatchDeleteWorldsResponseFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface BatchDescribeSimulationJobResponse {
		jobs?: Array<SimulationJob>;
		unprocessedJobs?: Array<string>;
	}
	export interface BatchDescribeSimulationJobResponseFormProperties {
	}
	export function CreateBatchDescribeSimulationJobResponseFormGroup() {
		return new FormGroup<BatchDescribeSimulationJobResponseFormProperties>({
		});

	}


	/** Information about a simulation job. */
	export interface SimulationJob {
		arn?: string;
		name?: string;
		status?: SimulationJobStatus;
		lastStartedAt?: Date;
		lastUpdatedAt?: Date;
		failureBehavior?: FailureBehavior;
		failureCode?: SimulationJobErrorCode;
		failureReason?: string;
		clientRequestToken?: string;
		outputLocation?: OutputLocation;
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;
		iamRole?: string;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;
		vpcConfig?: VPCConfigResponse;
		networkInterface?: NetworkInterface;
		compute?: ComputeResponse;
	}

	/** Information about a simulation job. */
	export interface SimulationJobFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobStatus | null | undefined>,
		lastStartedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		failureBehavior: FormControl<FailureBehavior | null | undefined>,
		failureCode: FormControl<SimulationJobErrorCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		maxJobDurationInSeconds: FormControl<number | null | undefined>,
		simulationTimeMillis: FormControl<number | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateSimulationJobFormGroup() {
		return new FormGroup<SimulationJobFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SimulationJobStatus | null | undefined>(undefined),
			lastStartedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			failureBehavior: new FormControl<FailureBehavior | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobErrorCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			simulationTimeMillis: new FormControl<number | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SimulationJobStatus { Pending = 'Pending', Preparing = 'Preparing', Running = 'Running', Restarting = 'Restarting', Completed = 'Completed', Failed = 'Failed', RunningFailed = 'RunningFailed', Terminating = 'Terminating', Terminated = 'Terminated', Canceled = 'Canceled' }

	export enum FailureBehavior { Fail = 'Fail', Continue = 'Continue' }

	export enum SimulationJobErrorCode { InternalServiceError = 'InternalServiceError', RobotApplicationCrash = 'RobotApplicationCrash', SimulationApplicationCrash = 'SimulationApplicationCrash', RobotApplicationHealthCheckFailure = 'RobotApplicationHealthCheckFailure', SimulationApplicationHealthCheckFailure = 'SimulationApplicationHealthCheckFailure', BadPermissionsRobotApplication = 'BadPermissionsRobotApplication', BadPermissionsSimulationApplication = 'BadPermissionsSimulationApplication', BadPermissionsS3Object = 'BadPermissionsS3Object', BadPermissionsS3Output = 'BadPermissionsS3Output', BadPermissionsCloudwatchLogs = 'BadPermissionsCloudwatchLogs', SubnetIpLimitExceeded = 'SubnetIpLimitExceeded', ENILimitExceeded = 'ENILimitExceeded', BadPermissionsUserCredentials = 'BadPermissionsUserCredentials', InvalidBundleRobotApplication = 'InvalidBundleRobotApplication', InvalidBundleSimulationApplication = 'InvalidBundleSimulationApplication', InvalidS3Resource = 'InvalidS3Resource', ThrottlingError = 'ThrottlingError', LimitExceeded = 'LimitExceeded', MismatchedEtag = 'MismatchedEtag', RobotApplicationVersionMismatchedEtag = 'RobotApplicationVersionMismatchedEtag', SimulationApplicationVersionMismatchedEtag = 'SimulationApplicationVersionMismatchedEtag', ResourceNotFound = 'ResourceNotFound', RequestThrottled = 'RequestThrottled', BatchTimedOut = 'BatchTimedOut', BatchCanceled = 'BatchCanceled', InvalidInput = 'InvalidInput', WrongRegionS3Bucket = 'WrongRegionS3Bucket', WrongRegionS3Output = 'WrongRegionS3Output', WrongRegionRobotApplication = 'WrongRegionRobotApplication', WrongRegionSimulationApplication = 'WrongRegionSimulationApplication', UploadContentMismatchError = 'UploadContentMismatchError' }


	/** The output location. */
	export interface OutputLocation {
		s3Bucket?: string;
		s3Prefix?: string;
	}

	/** The output location. */
	export interface OutputLocationFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateOutputLocationFormGroup() {
		return new FormGroup<OutputLocationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The logging configuration. */
	export interface LoggingConfig {
		recordAllRosTopics?: boolean | null;
	}

	/** The logging configuration. */
	export interface LoggingConfigFormProperties {
		recordAllRosTopics: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingConfigFormGroup() {
		return new FormGroup<LoggingConfigFormProperties>({
			recordAllRosTopics: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Application configuration information for a robot. */
	export interface RobotApplicationConfig {

		/** Required */
		application: string;
		applicationVersion?: string;

		/** Required */
		launchConfig: LaunchConfig;
		uploadConfigurations?: Array<UploadConfiguration>;
		useDefaultUploadConfigurations?: boolean | null;
		tools?: Array<Tool>;
		useDefaultTools?: boolean | null;
	}

	/** Application configuration information for a robot. */
	export interface RobotApplicationConfigFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		applicationVersion: FormControl<string | null | undefined>,
		useDefaultUploadConfigurations: FormControl<boolean | null | undefined>,
		useDefaultTools: FormControl<boolean | null | undefined>,
	}
	export function CreateRobotApplicationConfigFormGroup() {
		return new FormGroup<RobotApplicationConfigFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<string | null | undefined>(undefined),
			useDefaultUploadConfigurations: new FormControl<boolean | null | undefined>(undefined),
			useDefaultTools: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a launch configuration. */
	export interface LaunchConfig {
		packageName?: string;
		launchFile?: string;
		environmentVariables?: EnvironmentVariableMap;
		portForwardingConfig?: PortForwardingConfig;
		streamUI?: boolean | null;
		command?: Array<string>;
	}

	/** Information about a launch configuration. */
	export interface LaunchConfigFormProperties {
		packageName: FormControl<string | null | undefined>,
		launchFile: FormControl<string | null | undefined>,
		streamUI: FormControl<boolean | null | undefined>,
	}
	export function CreateLaunchConfigFormGroup() {
		return new FormGroup<LaunchConfigFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			launchFile: new FormControl<string | null | undefined>(undefined),
			streamUI: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EnvironmentVariableMap {
	}
	export interface EnvironmentVariableMapFormProperties {
	}
	export function CreateEnvironmentVariableMapFormGroup() {
		return new FormGroup<EnvironmentVariableMapFormProperties>({
		});

	}


	/** Configuration information for port forwarding. */
	export interface PortForwardingConfig {
		portMappings?: Array<PortMapping>;
	}

	/** Configuration information for port forwarding. */
	export interface PortForwardingConfigFormProperties {
	}
	export function CreatePortForwardingConfigFormGroup() {
		return new FormGroup<PortForwardingConfigFormProperties>({
		});

	}


	/** An object representing a port mapping. */
	export interface PortMapping {

		/** Required */
		jobPort: number;

		/** Required */
		applicationPort: number;
		enableOnPublicIp?: boolean | null;
	}

	/** An object representing a port mapping. */
	export interface PortMappingFormProperties {

		/** Required */
		jobPort: FormControl<number | null | undefined>,

		/** Required */
		applicationPort: FormControl<number | null | undefined>,
		enableOnPublicIp: FormControl<boolean | null | undefined>,
	}
	export function CreatePortMappingFormGroup() {
		return new FormGroup<PortMappingFormProperties>({
			jobPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			applicationPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			enableOnPublicIp: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Provides upload configuration information. Files are uploaded from the simulation job to a location you specify.  */
	export interface UploadConfiguration {

		/** Required */
		name: string;

		/** Required */
		path: string;

		/** Required */
		uploadBehavior: UploadBehavior;
	}

	/** Provides upload configuration information. Files are uploaded from the simulation job to a location you specify.  */
	export interface UploadConfigurationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/** Required */
		uploadBehavior: FormControl<UploadBehavior | null | undefined>,
	}
	export function CreateUploadConfigurationFormGroup() {
		return new FormGroup<UploadConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadBehavior: new FormControl<UploadBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UploadBehavior { UPLOAD_ON_TERMINATE = 'UPLOAD_ON_TERMINATE', UPLOAD_ROLLING_AUTO_REMOVE = 'UPLOAD_ROLLING_AUTO_REMOVE' }


	/** Information about a tool. Tools are used in a simulation job. */
	export interface Tool {
		streamUI?: boolean | null;

		/** Required */
		name: string;

		/** Required */
		command: string;
		streamOutputToCloudWatch?: boolean | null;
		exitBehavior?: ExitBehavior;
	}

	/** Information about a tool. Tools are used in a simulation job. */
	export interface ToolFormProperties {
		streamUI: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		command: FormControl<string | null | undefined>,
		streamOutputToCloudWatch: FormControl<boolean | null | undefined>,
		exitBehavior: FormControl<ExitBehavior | null | undefined>,
	}
	export function CreateToolFormGroup() {
		return new FormGroup<ToolFormProperties>({
			streamUI: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamOutputToCloudWatch: new FormControl<boolean | null | undefined>(undefined),
			exitBehavior: new FormControl<ExitBehavior | null | undefined>(undefined),
		});

	}

	export enum ExitBehavior { FAIL = 'FAIL', RESTART = 'RESTART' }


	/** Information about a simulation application configuration. */
	export interface SimulationApplicationConfig {

		/** Required */
		application: string;
		applicationVersion?: string;

		/** Required */
		launchConfig: LaunchConfig;
		uploadConfigurations?: Array<UploadConfiguration>;
		worldConfigs?: Array<WorldConfig>;
		useDefaultUploadConfigurations?: boolean | null;
		tools?: Array<Tool>;
		useDefaultTools?: boolean | null;
	}

	/** Information about a simulation application configuration. */
	export interface SimulationApplicationConfigFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		applicationVersion: FormControl<string | null | undefined>,
		useDefaultUploadConfigurations: FormControl<boolean | null | undefined>,
		useDefaultTools: FormControl<boolean | null | undefined>,
	}
	export function CreateSimulationApplicationConfigFormGroup() {
		return new FormGroup<SimulationApplicationConfigFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<string | null | undefined>(undefined),
			useDefaultUploadConfigurations: new FormControl<boolean | null | undefined>(undefined),
			useDefaultTools: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration information for a world. */
	export interface WorldConfig {
		world?: string;
	}

	/** Configuration information for a world. */
	export interface WorldConfigFormProperties {
		world: FormControl<string | null | undefined>,
	}
	export function CreateWorldConfigFormGroup() {
		return new FormGroup<WorldConfigFormProperties>({
			world: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a data source. */
	export interface DataSource {
		name?: string;
		s3Bucket?: string;
		s3Keys?: Array<S3KeyOutput>;
		type?: DataSourceType;
		destination?: string;
	}

	/** Information about a data source. */
	export interface DataSourceFormProperties {
		name: FormControl<string | null | undefined>,
		s3Bucket: FormControl<string | null | undefined>,
		type: FormControl<DataSourceType | null | undefined>,
		destination: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about S3 keys. */
	export interface S3KeyOutput {
		s3Key?: string;
		etag?: string;
	}

	/** Information about S3 keys. */
	export interface S3KeyOutputFormProperties {
		s3Key: FormControl<string | null | undefined>,
		etag: FormControl<string | null | undefined>,
	}
	export function CreateS3KeyOutputFormGroup() {
		return new FormGroup<S3KeyOutputFormProperties>({
			s3Key: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceType { Prefix = 'Prefix', Archive = 'Archive', File = 'File' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** VPC configuration associated with your simulation job. */
	export interface VPCConfigResponse {
		subnets?: Array<string>;
		securityGroups?: Array<string>;
		vpcId?: string;
		assignPublicIp?: boolean | null;
	}

	/** VPC configuration associated with your simulation job. */
	export interface VPCConfigResponseFormProperties {
		vpcId: FormControl<string | null | undefined>,
		assignPublicIp: FormControl<boolean | null | undefined>,
	}
	export function CreateVPCConfigResponseFormGroup() {
		return new FormGroup<VPCConfigResponseFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined),
			assignPublicIp: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a network interface. */
	export interface NetworkInterface {
		networkInterfaceId?: string;
		privateIpAddress?: string;
		publicIpAddress?: string;
	}

	/** Describes a network interface. */
	export interface NetworkInterfaceFormProperties {
		networkInterfaceId: FormControl<string | null | undefined>,
		privateIpAddress: FormControl<string | null | undefined>,
		publicIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			networkInterfaceId: new FormControl<string | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compute information for the simulation job */
	export interface ComputeResponse {
		simulationUnitLimit?: number | null;
		computeType?: ComputeType;
		gpuUnitLimit?: number | null;
	}

	/** Compute information for the simulation job */
	export interface ComputeResponseFormProperties {
		simulationUnitLimit: FormControl<number | null | undefined>,
		computeType: FormControl<ComputeType | null | undefined>,
		gpuUnitLimit: FormControl<number | null | undefined>,
	}
	export function CreateComputeResponseFormGroup() {
		return new FormGroup<ComputeResponseFormProperties>({
			simulationUnitLimit: new FormControl<number | null | undefined>(undefined),
			computeType: new FormControl<ComputeType | null | undefined>(undefined),
			gpuUnitLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ComputeType { CPU = 'CPU', GPU_AND_CPU = 'GPU_AND_CPU' }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CancelDeploymentJobResponse {
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CancelDeploymentJobResponseFormProperties {
	}
	export function CreateCancelDeploymentJobResponseFormGroup() {
		return new FormGroup<CancelDeploymentJobResponseFormProperties>({
		});

	}

	export interface CancelSimulationJobResponse {
	}
	export interface CancelSimulationJobResponseFormProperties {
	}
	export function CreateCancelSimulationJobResponseFormGroup() {
		return new FormGroup<CancelSimulationJobResponseFormProperties>({
		});

	}

	export interface CancelSimulationJobBatchResponse {
	}
	export interface CancelSimulationJobBatchResponseFormProperties {
	}
	export function CreateCancelSimulationJobBatchResponseFormGroup() {
		return new FormGroup<CancelSimulationJobBatchResponseFormProperties>({
		});

	}

	export interface CancelWorldExportJobResponse {
	}
	export interface CancelWorldExportJobResponseFormProperties {
	}
	export function CreateCancelWorldExportJobResponseFormGroup() {
		return new FormGroup<CancelWorldExportJobResponseFormProperties>({
		});

	}

	export interface CancelWorldGenerationJobResponse {
	}
	export interface CancelWorldGenerationJobResponseFormProperties {
	}
	export function CreateCancelWorldGenerationJobResponseFormGroup() {
		return new FormGroup<CancelWorldGenerationJobResponseFormProperties>({
		});

	}


	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateDeploymentJobResponse {
		arn?: string;
		fleet?: string;
		status?: DeploymentStatus;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
		failureReason?: string;
		failureCode?: DeploymentJobErrorCode;
		createdAt?: Date;
		deploymentConfig?: DeploymentConfig;
		tags?: TagMap;
	}

	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateDeploymentJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		fleet: FormControl<string | null | undefined>,
		status: FormControl<DeploymentStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<DeploymentJobErrorCode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateDeploymentJobResponseFormGroup() {
		return new FormGroup<CreateDeploymentJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			fleet: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeploymentStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<DeploymentJobErrorCode | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeploymentStatus { Pending = 'Pending', Preparing = 'Preparing', InProgress = 'InProgress', Failed = 'Failed', Succeeded = 'Succeeded', Canceled = 'Canceled' }


	/** Information about a deployment application configuration. */
	export interface DeploymentApplicationConfig {

		/** Required */
		application: string;

		/** Required */
		applicationVersion: string;

		/** Required */
		launchConfig: DeploymentLaunchConfig;
	}

	/** Information about a deployment application configuration. */
	export interface DeploymentApplicationConfigFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,

		/** Required */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentApplicationConfigFormGroup() {
		return new FormGroup<DeploymentApplicationConfigFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration information for a deployment launch. */
	export interface DeploymentLaunchConfig {

		/** Required */
		packageName: string;
		preLaunchFile?: string;

		/** Required */
		launchFile: string;
		postLaunchFile?: string;
		environmentVariables?: EnvironmentVariableMap;
	}

	/** Configuration information for a deployment launch. */
	export interface DeploymentLaunchConfigFormProperties {

		/** Required */
		packageName: FormControl<string | null | undefined>,
		preLaunchFile: FormControl<string | null | undefined>,

		/** Required */
		launchFile: FormControl<string | null | undefined>,
		postLaunchFile: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentLaunchConfigFormGroup() {
		return new FormGroup<DeploymentLaunchConfigFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preLaunchFile: new FormControl<string | null | undefined>(undefined),
			launchFile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postLaunchFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentJobErrorCode { ResourceNotFound = 'ResourceNotFound', EnvironmentSetupError = 'EnvironmentSetupError', EtagMismatch = 'EtagMismatch', FailureThresholdBreached = 'FailureThresholdBreached', RobotDeploymentAborted = 'RobotDeploymentAborted', RobotDeploymentNoResponse = 'RobotDeploymentNoResponse', RobotAgentConnectionTimeout = 'RobotAgentConnectionTimeout', GreengrassDeploymentFailed = 'GreengrassDeploymentFailed', InvalidGreengrassGroup = 'InvalidGreengrassGroup', MissingRobotArchitecture = 'MissingRobotArchitecture', MissingRobotApplicationArchitecture = 'MissingRobotApplicationArchitecture', MissingRobotDeploymentResource = 'MissingRobotDeploymentResource', GreengrassGroupVersionDoesNotExist = 'GreengrassGroupVersionDoesNotExist', LambdaDeleted = 'LambdaDeleted', ExtractingBundleFailure = 'ExtractingBundleFailure', PreLaunchFileFailure = 'PreLaunchFileFailure', PostLaunchFileFailure = 'PostLaunchFileFailure', BadPermissionError = 'BadPermissionError', DownloadConditionFailed = 'DownloadConditionFailed', BadLambdaAssociated = 'BadLambdaAssociated', InternalServerError = 'InternalServerError', RobotApplicationDoesNotExist = 'RobotApplicationDoesNotExist', DeploymentFleetDoesNotExist = 'DeploymentFleetDoesNotExist', FleetDeploymentTimeout = 'FleetDeploymentTimeout' }


	/** Information about a deployment configuration. */
	export interface DeploymentConfig {
		concurrentDeploymentPercentage?: number | null;
		failureThresholdPercentage?: number | null;
		robotDeploymentTimeoutInSeconds?: number | null;
		downloadConditionFile?: S3Object;
	}

	/** Information about a deployment configuration. */
	export interface DeploymentConfigFormProperties {
		concurrentDeploymentPercentage: FormControl<number | null | undefined>,
		failureThresholdPercentage: FormControl<number | null | undefined>,
		robotDeploymentTimeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentConfigFormGroup() {
		return new FormGroup<DeploymentConfigFormProperties>({
			concurrentDeploymentPercentage: new FormControl<number | null | undefined>(undefined),
			failureThresholdPercentage: new FormControl<number | null | undefined>(undefined),
			robotDeploymentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about an S3 object. */
	export interface S3Object {

		/** Required */
		bucket: string;

		/** Required */
		key: string;
		etag?: string;
	}

	/** Information about an S3 object. */
	export interface S3ObjectFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		etag: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ConcurrentDeploymentException {
	}
	export interface ConcurrentDeploymentExceptionFormProperties {
	}
	export function CreateConcurrentDeploymentExceptionFormGroup() {
		return new FormGroup<ConcurrentDeploymentExceptionFormProperties>({
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
		});

	}


	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateFleetResponse {
		arn?: string;
		name?: string;
		createdAt?: Date;
		tags?: TagMap;
	}

	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateFleetResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateFleetResponseFormGroup() {
		return new FormGroup<CreateFleetResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateRobotResponse {
		arn?: string;
		name?: string;
		createdAt?: Date;
		greengrassGroupId?: string;
		architecture?: Architecture;
		tags?: TagMap;
	}

	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateRobotResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		greengrassGroupId: FormControl<string | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
	}
	export function CreateCreateRobotResponseFormGroup() {
		return new FormGroup<CreateRobotResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
		});

	}

	export enum Architecture { X86_64 = 'X86_64', ARM64 = 'ARM64', ARMHF = 'ARMHF' }

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateRobotApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date;
		revisionId?: string;
		tags?: TagMap;
		environment?: Environment;
	}
	export interface CreateRobotApplicationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationResponseFormGroup() {
		return new FormGroup<CreateRobotApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a source. */
	export interface Source {
		s3Bucket?: string;
		s3Key?: string;
		etag?: string;
		architecture?: Architecture;
	}

	/** Information about a source. */
	export interface SourceFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Key: FormControl<string | null | undefined>,
		etag: FormControl<string | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
		});

	}


	/** Information about a robot software suite (ROS distribution). */
	export interface RobotSoftwareSuite {
		name?: RobotSoftwareSuiteType;
		version?: RobotSoftwareSuiteVersionType;
	}

	/** Information about a robot software suite (ROS distribution). */
	export interface RobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteType | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersionType | null | undefined>,
	}
	export function CreateRobotSoftwareSuiteFormGroup() {
		return new FormGroup<RobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteType | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersionType | null | undefined>(undefined),
		});

	}

	export enum RobotSoftwareSuiteType { ROS = 'ROS', ROS2 = 'ROS2', General = 'General' }

	export enum RobotSoftwareSuiteVersionType { Kinetic = 'Kinetic', Melodic = 'Melodic', Dashing = 'Dashing', Foxy = 'Foxy' }


	/** The object that contains the Docker image URI for either your robot or simulation applications. */
	export interface Environment {
		uri?: string;
	}

	/** The object that contains the Docker image URI for either your robot or simulation applications. */
	export interface EnvironmentFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a source configuration. */
	export interface SourceConfig {
		s3Bucket?: string;
		s3Key?: string;
		architecture?: Architecture;
	}

	/** Information about a source configuration. */
	export interface SourceConfigFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Key: FormControl<string | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
	}
	export function CreateSourceConfigFormGroup() {
		return new FormGroup<SourceConfigFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
		});

	}

	export interface CreateRobotApplicationVersionResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date;
		revisionId?: string;
		environment?: Environment;
	}
	export interface CreateRobotApplicationVersionResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationVersionResponseFormGroup() {
		return new FormGroup<CreateRobotApplicationVersionResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;
		simulationSoftwareSuite?: SimulationSoftwareSuite;
		robotSoftwareSuite?: RobotSoftwareSuite;
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date;
		revisionId?: string;
		tags?: TagMap;
		environment?: Environment;
	}
	export interface CreateSimulationApplicationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationResponseFormGroup() {
		return new FormGroup<CreateSimulationApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a simulation software suite. */
	export interface SimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteType;
		version?: string;
	}

	/** Information about a simulation software suite. */
	export interface SimulationSoftwareSuiteFormProperties {
		name: FormControl<SimulationSoftwareSuiteType | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateSimulationSoftwareSuiteFormGroup() {
		return new FormGroup<SimulationSoftwareSuiteFormProperties>({
			name: new FormControl<SimulationSoftwareSuiteType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SimulationSoftwareSuiteType { Gazebo = 'Gazebo', RosbagPlay = 'RosbagPlay', SimulationRuntime = 'SimulationRuntime' }


	/** Information about a rendering engine. */
	export interface RenderingEngine {
		name?: RenderingEngineType;
		version?: string;
	}

	/** Information about a rendering engine. */
	export interface RenderingEngineFormProperties {
		name: FormControl<RenderingEngineType | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateRenderingEngineFormGroup() {
		return new FormGroup<RenderingEngineFormProperties>({
			name: new FormControl<RenderingEngineType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RenderingEngineType { OGRE = 'OGRE' }

	export interface CreateSimulationApplicationVersionResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;
		simulationSoftwareSuite?: SimulationSoftwareSuite;
		robotSoftwareSuite?: RobotSoftwareSuite;
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date;
		revisionId?: string;
		environment?: Environment;
	}
	export interface CreateSimulationApplicationVersionResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationVersionResponseFormGroup() {
		return new FormGroup<CreateSimulationApplicationVersionResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationJobResponse {
		arn?: string;
		status?: SimulationJobStatus;
		lastStartedAt?: Date;
		lastUpdatedAt?: Date;
		failureBehavior?: FailureBehavior;
		failureCode?: SimulationJobErrorCode;
		clientRequestToken?: string;
		outputLocation?: OutputLocation;
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;
		iamRole?: string;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;
		vpcConfig?: VPCConfigResponse;
		compute?: ComputeResponse;
	}
	export interface CreateSimulationJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobStatus | null | undefined>,
		lastStartedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		failureBehavior: FormControl<FailureBehavior | null | undefined>,
		failureCode: FormControl<SimulationJobErrorCode | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		maxJobDurationInSeconds: FormControl<number | null | undefined>,
		simulationTimeMillis: FormControl<number | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationJobResponseFormGroup() {
		return new FormGroup<CreateSimulationJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SimulationJobStatus | null | undefined>(undefined),
			lastStartedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			failureBehavior: new FormControl<FailureBehavior | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobErrorCode | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			simulationTimeMillis: new FormControl<number | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a data source. */
	export interface DataSourceConfig {

		/** Required */
		name: string;

		/** Required */
		s3Bucket: string;

		/** Required */
		s3Keys: Array<string>;
		type?: DataSourceType;
		destination?: string;
	}

	/** Information about a data source. */
	export interface DataSourceConfigFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		s3Bucket: FormControl<string | null | undefined>,
		type: FormControl<DataSourceType | null | undefined>,
		destination: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceConfigFormGroup() {
		return new FormGroup<DataSourceConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DataSourceType | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface CreateWorldExportJobResponse {
		arn?: string;
		status?: WorldExportJobStatus;
		createdAt?: Date;
		failureCode?: WorldExportJobErrorCode;
		clientRequestToken?: string;

		/** The output location. */
		outputLocation?: OutputLocation;
		iamRole?: string;
		tags?: TagMap;
	}
	export interface CreateWorldExportJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<WorldExportJobStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		failureCode: FormControl<WorldExportJobErrorCode | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorldExportJobResponseFormGroup() {
		return new FormGroup<CreateWorldExportJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorldExportJobStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			failureCode: new FormControl<WorldExportJobErrorCode | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorldExportJobStatus { Pending = 'Pending', Running = 'Running', Completed = 'Completed', Failed = 'Failed', Canceling = 'Canceling', Canceled = 'Canceled' }

	export enum WorldExportJobErrorCode { InternalServiceError = 'InternalServiceError', LimitExceeded = 'LimitExceeded', ResourceNotFound = 'ResourceNotFound', RequestThrottled = 'RequestThrottled', InvalidInput = 'InvalidInput', AccessDenied = 'AccessDenied' }

	export interface CreateWorldGenerationJobResponse {
		arn?: string;
		status?: WorldGenerationJobStatus;
		createdAt?: Date;
		failureCode?: WorldGenerationJobErrorCode;
		clientRequestToken?: string;
		template?: string;
		worldCount?: WorldCount;
		tags?: TagMap;
		worldTags?: TagMap;
	}
	export interface CreateWorldGenerationJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<WorldGenerationJobStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		failureCode: FormControl<WorldGenerationJobErrorCode | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorldGenerationJobResponseFormGroup() {
		return new FormGroup<CreateWorldGenerationJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorldGenerationJobStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			failureCode: new FormControl<WorldGenerationJobErrorCode | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorldGenerationJobStatus { Pending = 'Pending', Running = 'Running', Completed = 'Completed', Failed = 'Failed', PartialFailed = 'PartialFailed', Canceling = 'Canceling', Canceled = 'Canceled' }

	export enum WorldGenerationJobErrorCode { InternalServiceError = 'InternalServiceError', LimitExceeded = 'LimitExceeded', ResourceNotFound = 'ResourceNotFound', RequestThrottled = 'RequestThrottled', InvalidInput = 'InvalidInput', AllWorldGenerationFailed = 'AllWorldGenerationFailed' }


	/** <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p> */
	export interface WorldCount {
		floorplanCount?: number | null;
		interiorCountPerFloorplan?: number | null;
	}

	/** <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p> */
	export interface WorldCountFormProperties {
		floorplanCount: FormControl<number | null | undefined>,
		interiorCountPerFloorplan: FormControl<number | null | undefined>,
	}
	export function CreateWorldCountFormGroup() {
		return new FormGroup<WorldCountFormProperties>({
			floorplanCount: new FormControl<number | null | undefined>(undefined),
			interiorCountPerFloorplan: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWorldTemplateResponse {
		arn?: string;
		clientRequestToken?: string;
		createdAt?: Date;
		name?: string;
		tags?: TagMap;
	}
	export interface CreateWorldTemplateResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorldTemplateResponseFormGroup() {
		return new FormGroup<CreateWorldTemplateResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeleteFleetResponse {
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeleteFleetResponseFormProperties {
	}
	export function CreateDeleteFleetResponseFormGroup() {
		return new FormGroup<DeleteFleetResponseFormProperties>({
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeleteRobotResponse {
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeleteRobotResponseFormProperties {
	}
	export function CreateDeleteRobotResponseFormGroup() {
		return new FormGroup<DeleteRobotResponseFormProperties>({
		});

	}

	export interface DeleteRobotApplicationResponse {
	}
	export interface DeleteRobotApplicationResponseFormProperties {
	}
	export function CreateDeleteRobotApplicationResponseFormGroup() {
		return new FormGroup<DeleteRobotApplicationResponseFormProperties>({
		});

	}

	export interface DeleteSimulationApplicationResponse {
	}
	export interface DeleteSimulationApplicationResponseFormProperties {
	}
	export function CreateDeleteSimulationApplicationResponseFormGroup() {
		return new FormGroup<DeleteSimulationApplicationResponseFormProperties>({
		});

	}

	export interface DeleteWorldTemplateResponse {
	}
	export interface DeleteWorldTemplateResponseFormProperties {
	}
	export function CreateDeleteWorldTemplateResponseFormGroup() {
		return new FormGroup<DeleteWorldTemplateResponseFormProperties>({
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeregisterRobotResponse {
		fleet?: string;
		robot?: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeregisterRobotResponseFormProperties {
		fleet: FormControl<string | null | undefined>,
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterRobotResponseFormGroup() {
		return new FormGroup<DeregisterRobotResponseFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined),
			robot: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeDeploymentJobResponse {
		arn?: string;
		fleet?: string;
		status?: DeploymentStatus;
		deploymentConfig?: DeploymentConfig;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
		failureReason?: string;
		failureCode?: DeploymentJobErrorCode;
		createdAt?: Date;
		robotDeploymentSummary?: Array<RobotDeployment>;
		tags?: TagMap;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeDeploymentJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		fleet: FormControl<string | null | undefined>,
		status: FormControl<DeploymentStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<DeploymentJobErrorCode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDeploymentJobResponseFormGroup() {
		return new FormGroup<DescribeDeploymentJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			fleet: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeploymentStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<DeploymentJobErrorCode | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a robot deployment. */
	export interface RobotDeployment {
		arn?: string;
		deploymentStartTime?: Date;
		deploymentFinishTime?: Date;
		status?: RobotStatus;
		progressDetail?: ProgressDetail;
		failureReason?: string;
		failureCode?: DeploymentJobErrorCode;
	}

	/** Information about a robot deployment. */
	export interface RobotDeploymentFormProperties {
		arn: FormControl<string | null | undefined>,
		deploymentStartTime: FormControl<Date | null | undefined>,
		deploymentFinishTime: FormControl<Date | null | undefined>,
		status: FormControl<RobotStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<DeploymentJobErrorCode | null | undefined>,
	}
	export function CreateRobotDeploymentFormGroup() {
		return new FormGroup<RobotDeploymentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			deploymentStartTime: new FormControl<Date | null | undefined>(undefined),
			deploymentFinishTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RobotStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<DeploymentJobErrorCode | null | undefined>(undefined),
		});

	}

	export enum RobotStatus { Available = 'Available', Registered = 'Registered', PendingNewDeployment = 'PendingNewDeployment', Deploying = 'Deploying', Failed = 'Failed', InSync = 'InSync', NoResponse = 'NoResponse' }


	/** Information about the progress of a deployment job. */
	export interface ProgressDetail {
		currentProgress?: RobotDeploymentStep;
		percentDone?: number;
		estimatedTimeRemainingSeconds?: number | null;
		targetResource?: string;
	}

	/** Information about the progress of a deployment job. */
	export interface ProgressDetailFormProperties {
		currentProgress: FormControl<RobotDeploymentStep | null | undefined>,
		percentDone: FormControl<number | null | undefined>,
		estimatedTimeRemainingSeconds: FormControl<number | null | undefined>,
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateProgressDetailFormGroup() {
		return new FormGroup<ProgressDetailFormProperties>({
			currentProgress: new FormControl<RobotDeploymentStep | null | undefined>(undefined),
			percentDone: new FormControl<number | null | undefined>(undefined),
			estimatedTimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RobotDeploymentStep { Validating = 'Validating', DownloadingExtracting = 'DownloadingExtracting', ExecutingDownloadCondition = 'ExecutingDownloadCondition', ExecutingPreLaunch = 'ExecutingPreLaunch', Launching = 'Launching', ExecutingPostLaunch = 'ExecutingPostLaunch', Finished = 'Finished' }


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeFleetResponse {
		name?: string;
		arn?: string;
		robots?: Array<Robot>;
		createdAt?: Date;
		lastDeploymentStatus?: DeploymentStatus;
		lastDeploymentJob?: string;
		lastDeploymentTime?: Date;
		tags?: TagMap;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeFleetResponseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastDeploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		lastDeploymentJob: FormControl<string | null | undefined>,
		lastDeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeFleetResponseFormGroup() {
		return new FormGroup<DescribeFleetResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastDeploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			lastDeploymentJob: new FormControl<string | null | undefined>(undefined),
			lastDeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a robot. */
	export interface Robot {
		arn?: string;
		name?: string;
		fleetArn?: string;
		status?: RobotStatus;
		greenGrassGroupId?: string;
		createdAt?: Date;
		architecture?: Architecture;
		lastDeploymentJob?: string;
		lastDeploymentTime?: Date;
	}

	/** Information about a robot. */
	export interface RobotFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		fleetArn: FormControl<string | null | undefined>,
		status: FormControl<RobotStatus | null | undefined>,
		greenGrassGroupId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
		lastDeploymentJob: FormControl<string | null | undefined>,
		lastDeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateRobotFormGroup() {
		return new FormGroup<RobotFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			fleetArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RobotStatus | null | undefined>(undefined),
			greenGrassGroupId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
			lastDeploymentJob: new FormControl<string | null | undefined>(undefined),
			lastDeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeRobotResponse {
		arn?: string;
		name?: string;
		fleetArn?: string;
		status?: RobotStatus;
		greengrassGroupId?: string;
		createdAt?: Date;
		architecture?: Architecture;
		lastDeploymentJob?: string;
		lastDeploymentTime?: Date;
		tags?: TagMap;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeRobotResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		fleetArn: FormControl<string | null | undefined>,
		status: FormControl<RobotStatus | null | undefined>,
		greengrassGroupId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		architecture: FormControl<Architecture | null | undefined>,
		lastDeploymentJob: FormControl<string | null | undefined>,
		lastDeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeRobotResponseFormGroup() {
		return new FormGroup<DescribeRobotResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			fleetArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RobotStatus | null | undefined>(undefined),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			architecture: new FormControl<Architecture | null | undefined>(undefined),
			lastDeploymentJob: new FormControl<string | null | undefined>(undefined),
			lastDeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRobotApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;
		robotSoftwareSuite?: RobotSoftwareSuite;
		revisionId?: string;
		lastUpdatedAt?: Date;
		tags?: TagMap;
		environment?: Environment;
		imageDigest?: string;
	}
	export interface DescribeRobotApplicationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotApplicationResponseFormGroup() {
		return new FormGroup<DescribeRobotApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSimulationApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;
		simulationSoftwareSuite?: SimulationSoftwareSuite;
		robotSoftwareSuite?: RobotSoftwareSuite;
		renderingEngine?: RenderingEngine;
		revisionId?: string;
		lastUpdatedAt?: Date;
		tags?: TagMap;
		environment?: Environment;
		imageDigest?: string;
	}
	export interface DescribeSimulationApplicationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationApplicationResponseFormGroup() {
		return new FormGroup<DescribeSimulationApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSimulationJobResponse {
		arn?: string;
		name?: string;
		status?: SimulationJobStatus;
		lastStartedAt?: Date;
		lastUpdatedAt?: Date;
		failureBehavior?: FailureBehavior;
		failureCode?: SimulationJobErrorCode;
		failureReason?: string;
		clientRequestToken?: string;
		outputLocation?: OutputLocation;
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;
		iamRole?: string;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;
		vpcConfig?: VPCConfigResponse;
		networkInterface?: NetworkInterface;
		compute?: ComputeResponse;
	}
	export interface DescribeSimulationJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobStatus | null | undefined>,
		lastStartedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		failureBehavior: FormControl<FailureBehavior | null | undefined>,
		failureCode: FormControl<SimulationJobErrorCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		maxJobDurationInSeconds: FormControl<number | null | undefined>,
		simulationTimeMillis: FormControl<number | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobResponseFormGroup() {
		return new FormGroup<DescribeSimulationJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SimulationJobStatus | null | undefined>(undefined),
			lastStartedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			failureBehavior: new FormControl<FailureBehavior | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobErrorCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			simulationTimeMillis: new FormControl<number | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSimulationJobBatchResponse {
		arn?: string;
		status?: SimulationJobBatchStatus;
		lastUpdatedAt?: Date;
		createdAt?: Date;
		clientRequestToken?: string;
		batchPolicy?: BatchPolicy;
		failureCode?: SimulationJobBatchErrorCode;
		failureReason?: string;
		failedRequests?: Array<FailedCreateSimulationJobRequest>;
		pendingRequests?: Array<SimulationJobRequest>;
		createdRequests?: Array<SimulationJobSummary>;
		tags?: TagMap;
	}
	export interface DescribeSimulationJobBatchResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobBatchStatus | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		failureCode: FormControl<SimulationJobBatchErrorCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobBatchResponseFormGroup() {
		return new FormGroup<DescribeSimulationJobBatchResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SimulationJobBatchStatus | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobBatchErrorCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SimulationJobBatchStatus { Pending = 'Pending', InProgress = 'InProgress', Failed = 'Failed', Completed = 'Completed', Canceled = 'Canceled', Canceling = 'Canceling', Completing = 'Completing', TimingOut = 'TimingOut', TimedOut = 'TimedOut' }


	/** Information about the batch policy. */
	export interface BatchPolicy {
		timeoutInSeconds?: number | null;
		maxConcurrency?: number | null;
	}

	/** Information about the batch policy. */
	export interface BatchPolicyFormProperties {
		timeoutInSeconds: FormControl<number | null | undefined>,
		maxConcurrency: FormControl<number | null | undefined>,
	}
	export function CreateBatchPolicyFormGroup() {
		return new FormGroup<BatchPolicyFormProperties>({
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			maxConcurrency: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SimulationJobBatchErrorCode { InternalServiceError = 'InternalServiceError' }


	/** Information about a failed create simulation job request. */
	export interface FailedCreateSimulationJobRequest {
		request?: SimulationJobRequest;
		failureReason?: string;
		failureCode?: SimulationJobErrorCode;
		failedAt?: Date;
	}

	/** Information about a failed create simulation job request. */
	export interface FailedCreateSimulationJobRequestFormProperties {
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<SimulationJobErrorCode | null | undefined>,
		failedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFailedCreateSimulationJobRequestFormGroup() {
		return new FormGroup<FailedCreateSimulationJobRequestFormProperties>({
			failureReason: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobErrorCode | null | undefined>(undefined),
			failedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a simulation job request. */
	export interface SimulationJobRequest {

		/** The output location. */
		outputLocation?: OutputLocation;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig;

		/** Required */
		maxJobDurationInSeconds: number;
		iamRole?: string;
		failureBehavior?: FailureBehavior;
		useDefaultApplications?: boolean | null;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSourceConfig>;

		/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: VPCConfig;
		compute?: Compute;
		tags?: TagMap;
	}

	/** Information about a simulation job request. */
	export interface SimulationJobRequestFormProperties {

		/** Required */
		maxJobDurationInSeconds: FormControl<number | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
		failureBehavior: FormControl<FailureBehavior | null | undefined>,
		useDefaultApplications: FormControl<boolean | null | undefined>,
	}
	export function CreateSimulationJobRequestFormGroup() {
		return new FormGroup<SimulationJobRequestFormProperties>({
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			iamRole: new FormControl<string | null | undefined>(undefined),
			failureBehavior: new FormControl<FailureBehavior | null | undefined>(undefined),
			useDefaultApplications: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
	export interface VPCConfig {

		/** Required */
		subnets: Array<string>;
		securityGroups?: Array<string>;
		assignPublicIp?: boolean | null;
	}

	/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
	export interface VPCConfigFormProperties {
		assignPublicIp: FormControl<boolean | null | undefined>,
	}
	export function CreateVPCConfigFormGroup() {
		return new FormGroup<VPCConfigFormProperties>({
			assignPublicIp: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Compute information for the simulation job. */
	export interface Compute {
		simulationUnitLimit?: number | null;
		computeType?: ComputeType;
		gpuUnitLimit?: number | null;
	}

	/** Compute information for the simulation job. */
	export interface ComputeFormProperties {
		simulationUnitLimit: FormControl<number | null | undefined>,
		computeType: FormControl<ComputeType | null | undefined>,
		gpuUnitLimit: FormControl<number | null | undefined>,
	}
	export function CreateComputeFormGroup() {
		return new FormGroup<ComputeFormProperties>({
			simulationUnitLimit: new FormControl<number | null | undefined>(undefined),
			computeType: new FormControl<ComputeType | null | undefined>(undefined),
			gpuUnitLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Summary information for a simulation job. */
	export interface SimulationJobSummary {
		arn?: string;
		lastUpdatedAt?: Date;
		name?: string;
		status?: SimulationJobStatus;
		simulationApplicationNames?: Array<string>;
		robotApplicationNames?: Array<string>;
		dataSourceNames?: Array<string>;
		computeType?: ComputeType;
	}

	/** Summary information for a simulation job. */
	export interface SimulationJobSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobStatus | null | undefined>,
		computeType: FormControl<ComputeType | null | undefined>,
	}
	export function CreateSimulationJobSummaryFormGroup() {
		return new FormGroup<SimulationJobSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SimulationJobStatus | null | undefined>(undefined),
			computeType: new FormControl<ComputeType | null | undefined>(undefined),
		});

	}

	export interface DescribeWorldResponse {
		arn?: string;
		generationJob?: string;
		template?: string;
		createdAt?: Date;
		tags?: TagMap;
		worldDescriptionBody?: string;
	}
	export interface DescribeWorldResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		generationJob: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		worldDescriptionBody: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldResponseFormGroup() {
		return new FormGroup<DescribeWorldResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			generationJob: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			worldDescriptionBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorldExportJobResponse {
		arn?: string;
		status?: WorldExportJobStatus;
		createdAt?: Date;
		failureCode?: WorldExportJobErrorCode;
		failureReason?: string;
		clientRequestToken?: string;
		worlds?: Array<string>;

		/** The output location. */
		outputLocation?: OutputLocation;
		iamRole?: string;
		tags?: TagMap;
	}
	export interface DescribeWorldExportJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<WorldExportJobStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		failureCode: FormControl<WorldExportJobErrorCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldExportJobResponseFormGroup() {
		return new FormGroup<DescribeWorldExportJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorldExportJobStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			failureCode: new FormControl<WorldExportJobErrorCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorldGenerationJobResponse {
		arn?: string;
		status?: WorldGenerationJobStatus;
		createdAt?: Date;
		failureCode?: WorldGenerationJobErrorCode;
		failureReason?: string;
		clientRequestToken?: string;
		template?: string;
		worldCount?: WorldCount;
		finishedWorldsSummary?: FinishedWorldsSummary;
		tags?: TagMap;
		worldTags?: TagMap;
	}
	export interface DescribeWorldGenerationJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<WorldGenerationJobStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		failureCode: FormControl<WorldGenerationJobErrorCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldGenerationJobResponseFormGroup() {
		return new FormGroup<DescribeWorldGenerationJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorldGenerationJobStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			failureCode: new FormControl<WorldGenerationJobErrorCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about worlds that finished. */
	export interface FinishedWorldsSummary {
		finishedCount?: number | null;
		succeededWorlds?: Array<string>;
		failureSummary?: FailureSummary;
	}

	/** Information about worlds that finished. */
	export interface FinishedWorldsSummaryFormProperties {
		finishedCount: FormControl<number | null | undefined>,
	}
	export function CreateFinishedWorldsSummaryFormGroup() {
		return new FormGroup<FinishedWorldsSummaryFormProperties>({
			finishedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about worlds that failed. */
	export interface FailureSummary {
		totalFailureCount?: number | null;
		failures?: Array<WorldFailure>;
	}

	/** Information about worlds that failed. */
	export interface FailureSummaryFormProperties {
		totalFailureCount: FormControl<number | null | undefined>,
	}
	export function CreateFailureSummaryFormGroup() {
		return new FormGroup<FailureSummaryFormProperties>({
			totalFailureCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a failed world. */
	export interface WorldFailure {
		failureCode?: WorldGenerationJobErrorCode;
		sampleFailureReason?: string;
		failureCount?: number | null;
	}

	/** Information about a failed world. */
	export interface WorldFailureFormProperties {
		failureCode: FormControl<WorldGenerationJobErrorCode | null | undefined>,
		sampleFailureReason: FormControl<string | null | undefined>,
		failureCount: FormControl<number | null | undefined>,
	}
	export function CreateWorldFailureFormGroup() {
		return new FormGroup<WorldFailureFormProperties>({
			failureCode: new FormControl<WorldGenerationJobErrorCode | null | undefined>(undefined),
			sampleFailureReason: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeWorldTemplateResponse {
		arn?: string;
		clientRequestToken?: string;
		name?: string;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		tags?: TagMap;
		version?: string;
	}
	export interface DescribeWorldTemplateResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldTemplateResponseFormGroup() {
		return new FormGroup<DescribeWorldTemplateResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWorldTemplateBodyResponse {
		templateBody?: string;
	}
	export interface GetWorldTemplateBodyResponseFormProperties {
		templateBody: FormControl<string | null | undefined>,
	}
	export function CreateGetWorldTemplateBodyResponseFormGroup() {
		return new FormGroup<GetWorldTemplateBodyResponseFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListDeploymentJobsResponse {
		deploymentJobs?: Array<DeploymentJob>;
		nextToken?: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListDeploymentJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentJobsResponseFormGroup() {
		return new FormGroup<ListDeploymentJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a deployment job. */
	export interface DeploymentJob {
		arn?: string;
		fleet?: string;
		status?: DeploymentStatus;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
		deploymentConfig?: DeploymentConfig;
		failureReason?: string;
		failureCode?: DeploymentJobErrorCode;
		createdAt?: Date;
	}

	/** Information about a deployment job. */
	export interface DeploymentJobFormProperties {
		arn: FormControl<string | null | undefined>,
		fleet: FormControl<string | null | undefined>,
		status: FormControl<DeploymentStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<DeploymentJobErrorCode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentJobFormGroup() {
		return new FormGroup<DeploymentJobFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			fleet: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeploymentStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<DeploymentJobErrorCode | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a filter. */
	export interface Filter {
		name?: string;
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface FilterFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListFleetsResponse {
		fleetDetails?: Array<Fleet>;
		nextToken?: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListFleetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetsResponseFormGroup() {
		return new FormGroup<ListFleetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a fleet. */
	export interface Fleet {
		name?: string;
		arn?: string;
		createdAt?: Date;
		lastDeploymentStatus?: DeploymentStatus;
		lastDeploymentJob?: string;
		lastDeploymentTime?: Date;
	}

	/** Information about a fleet. */
	export interface FleetFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastDeploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		lastDeploymentJob: FormControl<string | null | undefined>,
		lastDeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateFleetFormGroup() {
		return new FormGroup<FleetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastDeploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			lastDeploymentJob: new FormControl<string | null | undefined>(undefined),
			lastDeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRobotApplicationsResponse {
		robotApplicationSummaries?: Array<RobotApplicationSummary>;
		nextToken?: string;
	}
	export interface ListRobotApplicationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRobotApplicationsResponseFormGroup() {
		return new FormGroup<ListRobotApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for a robot application. */
	export interface RobotApplicationSummary {
		name?: string;
		arn?: string;
		version?: string;
		lastUpdatedAt?: Date;
		robotSoftwareSuite?: RobotSoftwareSuite;
	}

	/** Summary information for a robot application. */
	export interface RobotApplicationSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRobotApplicationSummaryFormGroup() {
		return new FormGroup<RobotApplicationSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListRobotsResponse {
		robots?: Array<Robot>;
		nextToken?: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListRobotsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRobotsResponseFormGroup() {
		return new FormGroup<ListRobotsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSimulationApplicationsResponse {
		simulationApplicationSummaries?: Array<SimulationApplicationSummary>;
		nextToken?: string;
	}
	export interface ListSimulationApplicationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSimulationApplicationsResponseFormGroup() {
		return new FormGroup<ListSimulationApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for a simulation application. */
	export interface SimulationApplicationSummary {
		name?: string;
		arn?: string;
		version?: string;
		lastUpdatedAt?: Date;
		robotSoftwareSuite?: RobotSoftwareSuite;
		simulationSoftwareSuite?: SimulationSoftwareSuite;
	}

	/** Summary information for a simulation application. */
	export interface SimulationApplicationSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSimulationApplicationSummaryFormGroup() {
		return new FormGroup<SimulationApplicationSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobBatchesResponse {
		simulationJobBatchSummaries?: Array<SimulationJobBatchSummary>;
		nextToken?: string;
	}
	export interface ListSimulationJobBatchesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSimulationJobBatchesResponseFormGroup() {
		return new FormGroup<ListSimulationJobBatchesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a simulation job batch. */
	export interface SimulationJobBatchSummary {
		arn?: string;
		lastUpdatedAt?: Date;
		createdAt?: Date;
		status?: SimulationJobBatchStatus;
		failedRequestCount?: number | null;
		pendingRequestCount?: number | null;
		createdRequestCount?: number | null;
	}

	/** Information about a simulation job batch. */
	export interface SimulationJobBatchSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		status: FormControl<SimulationJobBatchStatus | null | undefined>,
		failedRequestCount: FormControl<number | null | undefined>,
		pendingRequestCount: FormControl<number | null | undefined>,
		createdRequestCount: FormControl<number | null | undefined>,
	}
	export function CreateSimulationJobBatchSummaryFormGroup() {
		return new FormGroup<SimulationJobBatchSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<SimulationJobBatchStatus | null | undefined>(undefined),
			failedRequestCount: new FormControl<number | null | undefined>(undefined),
			pendingRequestCount: new FormControl<number | null | undefined>(undefined),
			createdRequestCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobsResponse {

		/** Required */
		simulationJobSummaries: Array<SimulationJobSummary>;
		nextToken?: string;
	}
	export interface ListSimulationJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSimulationJobsResponseFormGroup() {
		return new FormGroup<ListSimulationJobsResponseFormProperties>({
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

	export interface ListWorldExportJobsResponse {

		/** Required */
		worldExportJobSummaries: Array<WorldExportJobSummary>;
		nextToken?: string;
	}
	export interface ListWorldExportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorldExportJobsResponseFormGroup() {
		return new FormGroup<ListWorldExportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a world export job. */
	export interface WorldExportJobSummary {
		arn?: string;
		status?: WorldExportJobStatus;
		createdAt?: Date;
		worlds?: Array<string>;

		/** The output location. */
		outputLocation?: OutputLocation;
	}

	/** Information about a world export job. */
	export interface WorldExportJobSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<WorldExportJobStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateWorldExportJobSummaryFormGroup() {
		return new FormGroup<WorldExportJobSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorldExportJobStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListWorldGenerationJobsResponse {

		/** Required */
		worldGenerationJobSummaries: Array<WorldGenerationJobSummary>;
		nextToken?: string;
	}
	export interface ListWorldGenerationJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorldGenerationJobsResponseFormGroup() {
		return new FormGroup<ListWorldGenerationJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a world generator job. */
	export interface WorldGenerationJobSummary {
		arn?: string;
		template?: string;
		createdAt?: Date;
		status?: WorldGenerationJobStatus;
		worldCount?: WorldCount;
		succeededWorldCount?: number | null;
		failedWorldCount?: number | null;
	}

	/** Information about a world generator job. */
	export interface WorldGenerationJobSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		status: FormControl<WorldGenerationJobStatus | null | undefined>,
		succeededWorldCount: FormControl<number | null | undefined>,
		failedWorldCount: FormControl<number | null | undefined>,
	}
	export function CreateWorldGenerationJobSummaryFormGroup() {
		return new FormGroup<WorldGenerationJobSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<WorldGenerationJobStatus | null | undefined>(undefined),
			succeededWorldCount: new FormControl<number | null | undefined>(undefined),
			failedWorldCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorldTemplatesResponse {
		templateSummaries?: Array<TemplateSummary>;
		nextToken?: string;
	}
	export interface ListWorldTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorldTemplatesResponseFormGroup() {
		return new FormGroup<ListWorldTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for a template. */
	export interface TemplateSummary {
		arn?: string;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		name?: string;
		version?: string;
	}

	/** Summary information for a template. */
	export interface TemplateSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryFormGroup() {
		return new FormGroup<TemplateSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorldsResponse {
		worldSummaries?: Array<WorldSummary>;
		nextToken?: string;
	}
	export interface ListWorldsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorldsResponseFormGroup() {
		return new FormGroup<ListWorldsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a world. */
	export interface WorldSummary {
		arn?: string;
		createdAt?: Date;
		generationJob?: string;
		template?: string;
	}

	/** Information about a world. */
	export interface WorldSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		generationJob: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
	}
	export function CreateWorldSummaryFormGroup() {
		return new FormGroup<WorldSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			generationJob: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface RegisterRobotResponse {
		fleet?: string;
		robot?: string;
	}

	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface RegisterRobotResponseFormProperties {
		fleet: FormControl<string | null | undefined>,
		robot: FormControl<string | null | undefined>,
	}
	export function CreateRegisterRobotResponseFormGroup() {
		return new FormGroup<RegisterRobotResponseFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined),
			robot: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestartSimulationJobResponse {
	}
	export interface RestartSimulationJobResponseFormProperties {
	}
	export function CreateRestartSimulationJobResponseFormGroup() {
		return new FormGroup<RestartSimulationJobResponseFormProperties>({
		});

	}

	export interface StartSimulationJobBatchResponse {
		arn?: string;
		status?: SimulationJobBatchStatus;
		createdAt?: Date;
		clientRequestToken?: string;
		batchPolicy?: BatchPolicy;
		failureCode?: SimulationJobBatchErrorCode;
		failureReason?: string;
		failedRequests?: Array<FailedCreateSimulationJobRequest>;
		pendingRequests?: Array<SimulationJobRequest>;
		createdRequests?: Array<SimulationJobSummary>;
		tags?: TagMap;
	}
	export interface StartSimulationJobBatchResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobBatchStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		failureCode: FormControl<SimulationJobBatchErrorCode | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateStartSimulationJobBatchResponseFormGroup() {
		return new FormGroup<StartSimulationJobBatchResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SimulationJobBatchStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobBatchErrorCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface SyncDeploymentJobResponse {
		arn?: string;
		fleet?: string;
		status?: DeploymentStatus;
		deploymentConfig?: DeploymentConfig;
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;
		failureReason?: string;
		failureCode?: DeploymentJobErrorCode;
		createdAt?: Date;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface SyncDeploymentJobResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		fleet: FormControl<string | null | undefined>,
		status: FormControl<DeploymentStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<DeploymentJobErrorCode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateSyncDeploymentJobResponseFormGroup() {
		return new FormGroup<SyncDeploymentJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			fleet: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeploymentStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			failureCode: new FormControl<DeploymentJobErrorCode | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
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

	export interface UpdateRobotApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date;
		revisionId?: string;
		environment?: Environment;
	}
	export interface UpdateRobotApplicationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRobotApplicationResponseFormGroup() {
		return new FormGroup<UpdateRobotApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSimulationApplicationResponse {
		arn?: string;
		name?: string;
		version?: string;
		sources?: Array<Source>;
		simulationSoftwareSuite?: SimulationSoftwareSuite;
		robotSoftwareSuite?: RobotSoftwareSuite;
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date;
		revisionId?: string;
		environment?: Environment;
	}
	export interface UpdateSimulationApplicationResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationResponseFormGroup() {
		return new FormGroup<UpdateSimulationApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorldTemplateResponse {
		arn?: string;
		name?: string;
		createdAt?: Date;
		lastUpdatedAt?: Date;
	}
	export interface UpdateWorldTemplateResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateWorldTemplateResponseFormGroup() {
		return new FormGroup<UpdateWorldTemplateResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteWorldsRequest {

		/** Required */
		worlds: Array<string>;
	}
	export interface BatchDeleteWorldsRequestFormProperties {
	}
	export function CreateBatchDeleteWorldsRequestFormGroup() {
		return new FormGroup<BatchDeleteWorldsRequestFormProperties>({
		});

	}

	export interface BatchDescribeSimulationJobRequest {

		/** Required */
		jobs: Array<string>;
	}
	export interface BatchDescribeSimulationJobRequestFormProperties {
	}
	export function CreateBatchDescribeSimulationJobRequestFormGroup() {
		return new FormGroup<BatchDescribeSimulationJobRequestFormProperties>({
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CancelDeploymentJobRequest {

		/** Required */
		job: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CancelDeploymentJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelDeploymentJobRequestFormGroup() {
		return new FormGroup<CancelDeploymentJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelSimulationJobBatchRequest {

		/** Required */
		batch: string;
	}
	export interface CancelSimulationJobBatchRequestFormProperties {

		/** Required */
		batch: FormControl<string | null | undefined>,
	}
	export function CreateCancelSimulationJobBatchRequestFormGroup() {
		return new FormGroup<CancelSimulationJobBatchRequestFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelSimulationJobRequest {

		/** Required */
		job: string;
	}
	export interface CancelSimulationJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelSimulationJobRequestFormGroup() {
		return new FormGroup<CancelSimulationJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelWorldExportJobRequest {

		/** Required */
		job: string;
	}
	export interface CancelWorldExportJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelWorldExportJobRequestFormGroup() {
		return new FormGroup<CancelWorldExportJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelWorldGenerationJobRequest {

		/** Required */
		job: string;
	}
	export interface CancelWorldGenerationJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelWorldGenerationJobRequestFormGroup() {
		return new FormGroup<CancelWorldGenerationJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateDeploymentJobRequest {
		deploymentConfig?: DeploymentConfig;

		/** Required */
		clientRequestToken: string;

		/** Required */
		fleet: string;

		/** Required */
		deploymentApplicationConfigs: Array<DeploymentApplicationConfig>;
		tags?: TagMap;
	}

	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateDeploymentJobRequestFormProperties {

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentJobRequestFormGroup() {
		return new FormGroup<CreateDeploymentJobRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateFleetRequest {

		/** Required */
		name: string;
		tags?: TagMap;
	}

	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateFleetRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetRequestFormGroup() {
		return new FormGroup<CreateFleetRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRobotApplicationRequest {

		/** Required */
		name: string;
		sources?: Array<SourceConfig>;

		/** Required */
		robotSoftwareSuite: RobotSoftwareSuite;
		tags?: TagMap;
		environment?: Environment;
	}
	export interface CreateRobotApplicationRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationRequestFormGroup() {
		return new FormGroup<CreateRobotApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRobotApplicationVersionRequest {

		/** Required */
		application: string;
		currentRevisionId?: string;
		s3Etags?: Array<string>;
		imageDigest?: string;
	}
	export interface CreateRobotApplicationVersionRequestFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		currentRevisionId: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationVersionRequestFormGroup() {
		return new FormGroup<CreateRobotApplicationVersionRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateRobotRequest {

		/** Required */
		name: string;

		/** Required */
		architecture: Architecture;

		/** Required */
		greengrassGroupId: string;
		tags?: TagMap;
	}

	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface CreateRobotRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		architecture: FormControl<Architecture | null | undefined>,

		/** Required */
		greengrassGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotRequestFormGroup() {
		return new FormGroup<CreateRobotRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			architecture: new FormControl<Architecture | null | undefined>(undefined, [Validators.required]),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSimulationApplicationRequest {

		/** Required */
		name: string;
		sources?: Array<SourceConfig>;

		/** Required */
		simulationSoftwareSuite: SimulationSoftwareSuite;

		/** Required */
		robotSoftwareSuite: RobotSoftwareSuite;
		renderingEngine?: RenderingEngine;
		tags?: TagMap;
		environment?: Environment;
	}
	export interface CreateSimulationApplicationRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationRequestFormGroup() {
		return new FormGroup<CreateSimulationApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSimulationApplicationVersionRequest {

		/** Required */
		application: string;
		currentRevisionId?: string;
		s3Etags?: Array<string>;
		imageDigest?: string;
	}
	export interface CreateSimulationApplicationVersionRequestFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		currentRevisionId: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationVersionRequestFormGroup() {
		return new FormGroup<CreateSimulationApplicationVersionRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationJobRequest {
		clientRequestToken?: string;
		outputLocation?: OutputLocation;
		loggingConfig?: LoggingConfig;

		/** Required */
		maxJobDurationInSeconds: number;

		/** Required */
		iamRole: string;
		failureBehavior?: FailureBehavior;
		robotApplications?: Array<RobotApplicationConfig>;
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSourceConfig>;
		tags?: TagMap;
		vpcConfig?: VPCConfig;
		compute?: Compute;
	}
	export interface CreateSimulationJobRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		maxJobDurationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		iamRole: FormControl<string | null | undefined>,
		failureBehavior: FormControl<FailureBehavior | null | undefined>,
	}
	export function CreateCreateSimulationJobRequestFormGroup() {
		return new FormGroup<CreateSimulationJobRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			failureBehavior: new FormControl<FailureBehavior | null | undefined>(undefined),
		});

	}

	export interface CreateWorldExportJobRequest {
		clientRequestToken?: string;

		/** Required */
		worlds: Array<string>;

		/**
		 * The output location.
		 * Required
		 */
		outputLocation: OutputLocation;

		/** Required */
		iamRole: string;
		tags?: TagMap;
	}
	export interface CreateWorldExportJobRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorldExportJobRequestFormGroup() {
		return new FormGroup<CreateWorldExportJobRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorldGenerationJobRequest {
		clientRequestToken?: string;

		/** Required */
		template: string;

		/** Required */
		worldCount: WorldCount;
		tags?: TagMap;
		worldTags?: TagMap;
	}
	export interface CreateWorldGenerationJobRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		template: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorldGenerationJobRequestFormGroup() {
		return new FormGroup<CreateWorldGenerationJobRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a template location. */
	export interface TemplateLocation {

		/** Required */
		s3Bucket: string;

		/** Required */
		s3Key: string;
	}

	/** Information about a template location. */
	export interface TemplateLocationFormProperties {

		/** Required */
		s3Bucket: FormControl<string | null | undefined>,

		/** Required */
		s3Key: FormControl<string | null | undefined>,
	}
	export function CreateTemplateLocationFormGroup() {
		return new FormGroup<TemplateLocationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorldTemplateRequest {
		clientRequestToken?: string;
		name?: string;
		templateBody?: string;
		templateLocation?: TemplateLocation;
		tags?: TagMap;
	}
	export interface CreateWorldTemplateRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		templateBody: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorldTemplateRequestFormGroup() {
		return new FormGroup<CreateWorldTemplateRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeleteFleetRequest {

		/** Required */
		fleet: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeleteFleetRequestFormProperties {

		/** Required */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetRequestFormGroup() {
		return new FormGroup<DeleteFleetRequestFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRobotApplicationRequest {

		/** Required */
		application: string;
		applicationVersion?: string;
	}
	export interface DeleteRobotApplicationRequestFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRobotApplicationRequestFormGroup() {
		return new FormGroup<DeleteRobotApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeleteRobotRequest {

		/** Required */
		robot: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeleteRobotRequestFormProperties {

		/** Required */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRobotRequestFormGroup() {
		return new FormGroup<DeleteRobotRequestFormProperties>({
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSimulationApplicationRequest {

		/** Required */
		application: string;
		applicationVersion?: string;
	}
	export interface DeleteSimulationApplicationRequestFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSimulationApplicationRequestFormGroup() {
		return new FormGroup<DeleteSimulationApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteWorldTemplateRequest {

		/** Required */
		template: string;
	}
	export interface DeleteWorldTemplateRequestFormProperties {

		/** Required */
		template: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorldTemplateRequestFormGroup() {
		return new FormGroup<DeleteWorldTemplateRequestFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeregisterRobotRequest {

		/** Required */
		fleet: string;

		/** Required */
		robot: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DeregisterRobotRequestFormProperties {

		/** Required */
		fleet: FormControl<string | null | undefined>,

		/** Required */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterRobotRequestFormGroup() {
		return new FormGroup<DeregisterRobotRequestFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeDeploymentJobRequest {

		/** Required */
		job: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeDeploymentJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeploymentJobRequestFormGroup() {
		return new FormGroup<DescribeDeploymentJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeFleetRequest {

		/** Required */
		fleet: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeFleetRequestFormProperties {

		/** Required */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetRequestFormGroup() {
		return new FormGroup<DescribeFleetRequestFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRobotApplicationRequest {

		/** Required */
		application: string;
		applicationVersion?: string;
	}
	export interface DescribeRobotApplicationRequestFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotApplicationRequestFormGroup() {
		return new FormGroup<DescribeRobotApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeRobotRequest {

		/** Required */
		robot: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface DescribeRobotRequestFormProperties {

		/** Required */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotRequestFormGroup() {
		return new FormGroup<DescribeRobotRequestFormProperties>({
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSimulationApplicationRequest {

		/** Required */
		application: string;
		applicationVersion?: string;
	}
	export interface DescribeSimulationApplicationRequestFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationApplicationRequestFormGroup() {
		return new FormGroup<DescribeSimulationApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSimulationJobBatchRequest {

		/** Required */
		batch: string;
	}
	export interface DescribeSimulationJobBatchRequestFormProperties {

		/** Required */
		batch: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobBatchRequestFormGroup() {
		return new FormGroup<DescribeSimulationJobBatchRequestFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSimulationJobRequest {

		/** Required */
		job: string;
	}
	export interface DescribeSimulationJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobRequestFormGroup() {
		return new FormGroup<DescribeSimulationJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWorldExportJobRequest {

		/** Required */
		job: string;
	}
	export interface DescribeWorldExportJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldExportJobRequestFormGroup() {
		return new FormGroup<DescribeWorldExportJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWorldGenerationJobRequest {

		/** Required */
		job: string;
	}
	export interface DescribeWorldGenerationJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldGenerationJobRequestFormGroup() {
		return new FormGroup<DescribeWorldGenerationJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWorldRequest {

		/** Required */
		world: string;
	}
	export interface DescribeWorldRequestFormProperties {

		/** Required */
		world: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldRequestFormGroup() {
		return new FormGroup<DescribeWorldRequestFormProperties>({
			world: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWorldTemplateRequest {

		/** Required */
		template: string;
	}
	export interface DescribeWorldTemplateRequestFormProperties {

		/** Required */
		template: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldTemplateRequestFormGroup() {
		return new FormGroup<DescribeWorldTemplateRequestFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorldTemplateBodyRequest {
		template?: string;
		generationJob?: string;
	}
	export interface GetWorldTemplateBodyRequestFormProperties {
		template: FormControl<string | null | undefined>,
		generationJob: FormControl<string | null | undefined>,
	}
	export function CreateGetWorldTemplateBodyRequestFormGroup() {
		return new FormGroup<GetWorldTemplateBodyRequestFormProperties>({
			template: new FormControl<string | null | undefined>(undefined),
			generationJob: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListDeploymentJobsRequest {
		filters?: Array<Filter>;
		nextToken?: string;
		maxResults?: number | null;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListDeploymentJobsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDeploymentJobsRequestFormGroup() {
		return new FormGroup<ListDeploymentJobsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListFleetsRequest {
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListFleetsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFleetsRequestFormGroup() {
		return new FormGroup<ListFleetsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRobotApplicationsRequest {
		versionQualifier?: string;
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}
	export interface ListRobotApplicationsRequestFormProperties {
		versionQualifier: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRobotApplicationsRequestFormGroup() {
		return new FormGroup<ListRobotApplicationsRequestFormProperties>({
			versionQualifier: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListRobotsRequest {
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface ListRobotsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRobotsRequestFormGroup() {
		return new FormGroup<ListRobotsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationApplicationsRequest {
		versionQualifier?: string;
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}
	export interface ListSimulationApplicationsRequestFormProperties {
		versionQualifier: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationApplicationsRequestFormGroup() {
		return new FormGroup<ListSimulationApplicationsRequestFormProperties>({
			versionQualifier: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobBatchesRequest {
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}
	export interface ListSimulationJobBatchesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationJobBatchesRequestFormGroup() {
		return new FormGroup<ListSimulationJobBatchesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobsRequest {
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}
	export interface ListSimulationJobsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationJobsRequestFormGroup() {
		return new FormGroup<ListSimulationJobsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface ListWorldExportJobsRequest {
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}
	export interface ListWorldExportJobsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorldExportJobsRequestFormGroup() {
		return new FormGroup<ListWorldExportJobsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorldGenerationJobsRequest {
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}
	export interface ListWorldGenerationJobsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorldGenerationJobsRequestFormGroup() {
		return new FormGroup<ListWorldGenerationJobsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorldTemplatesRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListWorldTemplatesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorldTemplatesRequestFormGroup() {
		return new FormGroup<ListWorldTemplatesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorldsRequest {
		nextToken?: string;
		maxResults?: number | null;
		filters?: Array<Filter>;
	}
	export interface ListWorldsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorldsRequestFormGroup() {
		return new FormGroup<ListWorldsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface RegisterRobotRequest {

		/** Required */
		fleet: string;

		/** Required */
		robot: string;
	}

	/** AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface RegisterRobotRequestFormProperties {

		/** Required */
		fleet: FormControl<string | null | undefined>,

		/** Required */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateRegisterRobotRequestFormGroup() {
		return new FormGroup<RegisterRobotRequestFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestartSimulationJobRequest {

		/** Required */
		job: string;
	}
	export interface RestartSimulationJobRequestFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,
	}
	export function CreateRestartSimulationJobRequestFormGroup() {
		return new FormGroup<RestartSimulationJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSimulationJobBatchRequest {
		clientRequestToken?: string;
		batchPolicy?: BatchPolicy;

		/** Required */
		createSimulationJobRequests: Array<SimulationJobRequest>;
		tags?: TagMap;
	}
	export interface StartSimulationJobBatchRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartSimulationJobBatchRequestFormGroup() {
		return new FormGroup<StartSimulationJobBatchRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface SyncDeploymentJobRequest {

		/** Required */
		clientRequestToken: string;

		/** Required */
		fleet: string;
	}

	/** Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html. */
	export interface SyncDeploymentJobRequestFormProperties {

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateSyncDeploymentJobRequestFormGroup() {
		return new FormGroup<SyncDeploymentJobRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateRobotApplicationRequest {

		/** Required */
		application: string;
		sources?: Array<SourceConfig>;

		/** Required */
		robotSoftwareSuite: RobotSoftwareSuite;
		currentRevisionId?: string;
		environment?: Environment;
	}
	export interface UpdateRobotApplicationRequestFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRobotApplicationRequestFormGroup() {
		return new FormGroup<UpdateRobotApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSimulationApplicationRequest {

		/** Required */
		application: string;
		sources?: Array<SourceConfig>;

		/** Required */
		simulationSoftwareSuite: SimulationSoftwareSuite;

		/** Required */
		robotSoftwareSuite: RobotSoftwareSuite;
		renderingEngine?: RenderingEngine;
		currentRevisionId?: string;
		environment?: Environment;
	}
	export interface UpdateSimulationApplicationRequestFormProperties {

		/** Required */
		application: FormControl<string | null | undefined>,
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationRequestFormGroup() {
		return new FormGroup<UpdateSimulationApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorldTemplateRequest {

		/** Required */
		template: string;
		name?: string;
		templateBody?: string;
		templateLocation?: TemplateLocation;
	}
	export interface UpdateWorldTemplateRequestFormProperties {

		/** Required */
		template: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		templateBody: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorldTemplateRequestFormGroup() {
		return new FormGroup<UpdateWorldTemplateRequestFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes one or more worlds in a batch operation.
		 * Post batchDeleteWorlds
		 * @return {BatchDeleteWorldsResponse} Success
		 */
		BatchDeleteWorlds(requestBody: BatchDeleteWorldsPostBody): Observable<BatchDeleteWorldsResponse> {
			return this.http.post<BatchDeleteWorldsResponse>(this.baseUri + 'batchDeleteWorlds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Cancels the specified deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
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
		 * Cancels the specified export job.
		 * Post cancelWorldExportJob
		 * @return {CancelWorldExportJobResponse} Success
		 */
		CancelWorldExportJob(requestBody: CancelWorldExportJobPostBody): Observable<CancelWorldExportJobResponse> {
			return this.http.post<CancelWorldExportJobResponse>(this.baseUri + 'cancelWorldExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the specified world generator job.
		 * Post cancelWorldGenerationJob
		 * @return {CancelWorldGenerationJobResponse} Success
		 */
		CancelWorldGenerationJob(requestBody: CancelWorldGenerationJobPostBody): Observable<CancelWorldGenerationJobResponse> {
			return this.http.post<CancelWorldGenerationJobResponse>(this.baseUri + 'cancelWorldGenerationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deploys a specific version of a robot application to robots in a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
		 * Post createDeploymentJob
		 * @return {CreateDeploymentJobResponse} Success
		 */
		CreateDeploymentJob(requestBody: CreateDeploymentJobPostBody): Observable<CreateDeploymentJobResponse> {
			return this.http.post<CreateDeploymentJobResponse>(this.baseUri + 'createDeploymentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a fleet, a logical group of robots running the same robot application.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
		 * Post createFleet
		 * @return {CreateFleetResponse} Success
		 */
		CreateFleet(requestBody: CreateFleetPostBody): Observable<CreateFleetResponse> {
			return this.http.post<CreateFleetResponse>(this.baseUri + 'createFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a robot.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
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
		 * Creates a world export job.
		 * Post createWorldExportJob
		 * @return {CreateWorldExportJobResponse} Success
		 */
		CreateWorldExportJob(requestBody: CreateWorldExportJobPostBody): Observable<CreateWorldExportJobResponse> {
			return this.http.post<CreateWorldExportJobResponse>(this.baseUri + 'createWorldExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates worlds using the specified template.
		 * Post createWorldGenerationJob
		 * @return {CreateWorldGenerationJobResponse} Success
		 */
		CreateWorldGenerationJob(requestBody: CreateWorldGenerationJobPostBody): Observable<CreateWorldGenerationJobResponse> {
			return this.http.post<CreateWorldGenerationJobResponse>(this.baseUri + 'createWorldGenerationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a world template.
		 * Post createWorldTemplate
		 * @return {CreateWorldTemplateResponse} Success
		 */
		CreateWorldTemplate(requestBody: CreateWorldTemplatePostBody): Observable<CreateWorldTemplateResponse> {
			return this.http.post<CreateWorldTemplateResponse>(this.baseUri + 'createWorldTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
		 * Post deleteFleet
		 * @return {DeleteFleetResponse} Success
		 */
		DeleteFleet(requestBody: DeleteFleetPostBody): Observable<DeleteFleetResponse> {
			return this.http.post<DeleteFleetResponse>(this.baseUri + 'deleteFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
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
		 * Deletes a world template.
		 * Post deleteWorldTemplate
		 * @return {DeleteWorldTemplateResponse} Success
		 */
		DeleteWorldTemplate(requestBody: DeleteWorldTemplatePostBody): Observable<DeleteWorldTemplateResponse> {
			return this.http.post<DeleteWorldTemplateResponse>(this.baseUri + 'deleteWorldTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
		 * Post deregisterRobot
		 * @return {DeregisterRobotResponse} Success
		 */
		DeregisterRobot(requestBody: DeregisterRobotPostBody): Observable<DeregisterRobotResponse> {
			return this.http.post<DeregisterRobotResponse>(this.baseUri + 'deregisterRobot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a deployment job.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
		 * Post describeDeploymentJob
		 * @return {DescribeDeploymentJobResponse} Success
		 */
		DescribeDeploymentJob(requestBody: DescribeDeploymentJobPostBody): Observable<DescribeDeploymentJobResponse> {
			return this.http.post<DescribeDeploymentJobResponse>(this.baseUri + 'describeDeploymentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a fleet.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
		 * Post describeFleet
		 * @return {DescribeFleetResponse} Success
		 */
		DescribeFleet(requestBody: DescribeFleetPostBody): Observable<DescribeFleetResponse> {
			return this.http.post<DescribeFleetResponse>(this.baseUri + 'describeFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a robot.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
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
		 * Describes a world.
		 * Post describeWorld
		 * @return {DescribeWorldResponse} Success
		 */
		DescribeWorld(requestBody: DescribeWorldPostBody): Observable<DescribeWorldResponse> {
			return this.http.post<DescribeWorldResponse>(this.baseUri + 'describeWorld', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a world export job.
		 * Post describeWorldExportJob
		 * @return {DescribeWorldExportJobResponse} Success
		 */
		DescribeWorldExportJob(requestBody: DescribeWorldExportJobPostBody): Observable<DescribeWorldExportJobResponse> {
			return this.http.post<DescribeWorldExportJobResponse>(this.baseUri + 'describeWorldExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a world generation job.
		 * Post describeWorldGenerationJob
		 * @return {DescribeWorldGenerationJobResponse} Success
		 */
		DescribeWorldGenerationJob(requestBody: DescribeWorldGenerationJobPostBody): Observable<DescribeWorldGenerationJobResponse> {
			return this.http.post<DescribeWorldGenerationJobResponse>(this.baseUri + 'describeWorldGenerationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a world template.
		 * Post describeWorldTemplate
		 * @return {DescribeWorldTemplateResponse} Success
		 */
		DescribeWorldTemplate(requestBody: DescribeWorldTemplatePostBody): Observable<DescribeWorldTemplateResponse> {
			return this.http.post<DescribeWorldTemplateResponse>(this.baseUri + 'describeWorldTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the world template body.
		 * Post getWorldTemplateBody
		 * @return {GetWorldTemplateBodyResponse} Success
		 */
		GetWorldTemplateBody(requestBody: GetWorldTemplateBodyPostBody): Observable<GetWorldTemplateBodyResponse> {
			return this.http.post<GetWorldTemplateBodyResponse>(this.baseUri + 'getWorldTemplateBody', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
		 * Post listDeploymentJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentJobsResponse} Success
		 */
		ListDeploymentJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDeploymentJobsPostBody): Observable<ListDeploymentJobsResponse> {
			return this.http.post<ListDeploymentJobsResponse>(this.baseUri + 'listDeploymentJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
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
		 * <p>Returns a list of robots. You can optionally provide filters to retrieve specific robots.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
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
		 *     Min length: 1    Max length: 1224
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.
		 *     Min length: 1    Max length: 1224
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists world export jobs.
		 * Post listWorldExportJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWorldExportJobsResponse} Success
		 */
		ListWorldExportJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWorldExportJobsPostBody): Observable<ListWorldExportJobsResponse> {
			return this.http.post<ListWorldExportJobsResponse>(this.baseUri + 'listWorldExportJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists world generator jobs.
		 * Post listWorldGenerationJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWorldGenerationJobsResponse} Success
		 */
		ListWorldGenerationJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWorldGenerationJobsPostBody): Observable<ListWorldGenerationJobsResponse> {
			return this.http.post<ListWorldGenerationJobsResponse>(this.baseUri + 'listWorldGenerationJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists world templates.
		 * Post listWorldTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWorldTemplatesResponse} Success
		 */
		ListWorldTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWorldTemplatesPostBody): Observable<ListWorldTemplatesResponse> {
			return this.http.post<ListWorldTemplatesResponse>(this.baseUri + 'listWorldTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists worlds.
		 * Post listWorlds
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWorldsResponse} Success
		 */
		ListWorlds(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWorldsPostBody): Observable<ListWorldsResponse> {
			return this.http.post<ListWorldsResponse>(this.baseUri + 'listWorlds?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a robot with a fleet.</p> <important> <p>This API is no longer supported and will throw an error if used.</p> </important>
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
		 * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p> <important> <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p> </important>
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
		 *     Min length: 1    Max length: 1224
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

		/**
		 * Updates a world template.
		 * Post updateWorldTemplate
		 * @return {UpdateWorldTemplateResponse} Success
		 */
		UpdateWorldTemplate(requestBody: UpdateWorldTemplatePostBody): Observable<UpdateWorldTemplateResponse> {
			return this.http.post<UpdateWorldTemplateResponse>(this.baseUri + 'updateWorldTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchDeleteWorldsPostBody {

		/**
		 * A list of Amazon Resource Names (arns) that correspond to worlds to delete.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		worlds: Array<string>;
	}
	export interface BatchDeleteWorldsPostBodyFormProperties {
	}
	export function CreateBatchDeleteWorldsPostBodyFormGroup() {
		return new FormGroup<BatchDeleteWorldsPostBodyFormProperties>({
		});

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
	export interface BatchDescribeSimulationJobPostBodyFormProperties {
	}
	export function CreateBatchDescribeSimulationJobPostBodyFormGroup() {
		return new FormGroup<BatchDescribeSimulationJobPostBodyFormProperties>({
		});

	}

	export interface CancelDeploymentJobPostBody {

		/**
		 * The deployment job ARN to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface CancelDeploymentJobPostBodyFormProperties {

		/**
		 * The deployment job ARN to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelDeploymentJobPostBodyFormGroup() {
		return new FormGroup<CancelDeploymentJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface CancelSimulationJobPostBody {

		/**
		 * The simulation job ARN to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface CancelSimulationJobPostBodyFormProperties {

		/**
		 * The simulation job ARN to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelSimulationJobPostBodyFormGroup() {
		return new FormGroup<CancelSimulationJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface CancelSimulationJobBatchPostBody {

		/**
		 * The id of the batch to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		batch: string;
	}
	export interface CancelSimulationJobBatchPostBodyFormProperties {

		/**
		 * The id of the batch to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		batch: FormControl<string | null | undefined>,
	}
	export function CreateCancelSimulationJobBatchPostBodyFormGroup() {
		return new FormGroup<CancelSimulationJobBatchPostBodyFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface CancelWorldExportJobPostBody {

		/**
		 * The Amazon Resource Name (arn) of the world export job to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface CancelWorldExportJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world export job to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelWorldExportJobPostBodyFormGroup() {
		return new FormGroup<CancelWorldExportJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface CancelWorldGenerationJobPostBody {

		/**
		 * The Amazon Resource Name (arn) of the world generator job to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface CancelWorldGenerationJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world generator job to cancel.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelWorldGenerationJobPostBodyFormGroup() {
		return new FormGroup<CancelWorldGenerationJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface CreateDeploymentJobPostBody {

		/** Information about a deployment configuration. */
		deploymentConfig?: CreateDeploymentJobPostBodyDeploymentConfig;

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: string;

		/**
		 * The Amazon Resource Name (ARN) of the fleet to deploy.
		 * Required
		 * Min length: 1
		 * Max length: 1224
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
		tags?: {[id: string]: string };
	}
	export interface CreateDeploymentJobPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the fleet to deploy.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the deployment job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDeploymentJobPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentJobPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_\-=]*')]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentJobPostBodyDeploymentConfig {
		concurrentDeploymentPercentage?: number | null;
		failureThresholdPercentage?: number | null;
		robotDeploymentTimeoutInSeconds?: number | null;
		downloadConditionFile?: S3Object;
	}
	export interface CreateDeploymentJobPostBodyDeploymentConfigFormProperties {
		concurrentDeploymentPercentage: FormControl<number | null | undefined>,
		failureThresholdPercentage: FormControl<number | null | undefined>,
		robotDeploymentTimeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateDeploymentJobPostBodyDeploymentConfigFormGroup() {
		return new FormGroup<CreateDeploymentJobPostBodyDeploymentConfigFormProperties>({
			concurrentDeploymentPercentage: new FormControl<number | null | undefined>(undefined),
			failureThresholdPercentage: new FormControl<number | null | undefined>(undefined),
			robotDeploymentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateFleetPostBody {

		/**
		 * The name of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: string;

		/** A map that contains tag keys and tag values that are attached to the fleet. */
		tags?: {[id: string]: string };
	}
	export interface CreateFleetPostBodyFormProperties {

		/**
		 * The name of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the fleet. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFleetPostBodyFormGroup() {
		return new FormGroup<CreateFleetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9_\-]*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRobotPostBody {

		/**
		 * The name for the robot.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: string;

		/**
		 * The target architecture of the robot.
		 * Required
		 */
		architecture: Architecture;

		/**
		 * The Greengrass group id.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		greengrassGroupId: string;

		/** A map that contains tag keys and tag values that are attached to the robot. */
		tags?: {[id: string]: string };
	}
	export interface CreateRobotPostBodyFormProperties {

		/**
		 * The name for the robot.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The target architecture of the robot.
		 * Required
		 */
		architecture: FormControl<Architecture | null | undefined>,

		/**
		 * The Greengrass group id.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		greengrassGroupId: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the robot. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRobotPostBodyFormGroup() {
		return new FormGroup<CreateRobotPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9_\-]*')]),
			architecture: new FormControl<Architecture | null | undefined>(undefined, [Validators.required]),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRobotApplicationPostBody {

		/**
		 * The name of the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: string;

		/** The sources of the robot application. */
		sources?: Array<SourceConfig>;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: CreateRobotApplicationPostBodyRobotSoftwareSuite;

		/** A map that contains tag keys and tag values that are attached to the robot application. */
		tags?: {[id: string]: string };

		/** The object that contains the Docker image URI for either your robot or simulation applications. */
		environment?: CreateRobotApplicationPostBodyEnvironment;
	}
	export interface CreateRobotApplicationPostBodyFormProperties {

		/**
		 * The name of the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the robot application. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRobotApplicationPostBodyFormGroup() {
		return new FormGroup<CreateRobotApplicationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9_\-]*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRobotApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteType;
		version?: RobotSoftwareSuiteVersionType;
	}
	export interface CreateRobotApplicationPostBodyRobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteType | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersionType | null | undefined>,
	}
	export function CreateCreateRobotApplicationPostBodyRobotSoftwareSuiteFormGroup() {
		return new FormGroup<CreateRobotApplicationPostBodyRobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteType | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersionType | null | undefined>(undefined),
		});

	}

	export interface CreateRobotApplicationPostBodyEnvironment {
		uri?: string;
	}
	export interface CreateRobotApplicationPostBodyEnvironmentFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationPostBodyEnvironmentFormGroup() {
		return new FormGroup<CreateRobotApplicationPostBodyEnvironmentFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRobotApplicationVersionPostBody {

		/**
		 * The application information for the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: string;

		/**
		 * The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Min length: 1
		 * Max length: 40
		 */
		currentRevisionId?: string | null;

		/** The Amazon S3 identifier for the zip file bundle that you use for your robot application. */
		s3Etags?: Array<string>;

		/**
		 * A SHA256 identifier for the Docker image that you use for your robot application.
		 * Min length: 0
		 * Max length: 72
		 */
		imageDigest?: string | null;
	}
	export interface CreateRobotApplicationVersionPostBodyFormProperties {

		/**
		 * The application information for the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Min length: 1
		 * Max length: 40
		 */
		currentRevisionId: FormControl<string | null | undefined>,

		/**
		 * A SHA256 identifier for the Docker image that you use for your robot application.
		 * Min length: 0
		 * Max length: 72
		 */
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationVersionPostBodyFormGroup() {
		return new FormGroup<CreateRobotApplicationVersionPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9_.\-]*')]),
			imageDigest: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(72), Validators.pattern('[Ss][Hh][Aa]256:[0-9a-fA-F]{64}')]),
		});

	}

	export interface CreateSimulationApplicationPostBody {

		/**
		 * The name of the simulation application.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: string;

		/** The sources of the simulation application. */
		sources?: Array<SourceConfig>;

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
		renderingEngine?: CreateSimulationApplicationPostBodyRenderingEngine;

		/** A map that contains tag keys and tag values that are attached to the simulation application. */
		tags?: {[id: string]: string };

		/** The object that contains the Docker image URI for either your robot or simulation applications. */
		environment?: CreateSimulationApplicationPostBodyEnvironment;
	}
	export interface CreateSimulationApplicationPostBodyFormProperties {

		/**
		 * The name of the simulation application.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the simulation application. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodyFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[a-zA-Z0-9_\-]*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationApplicationPostBodySimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteType;
		version?: string;
	}
	export interface CreateSimulationApplicationPostBodySimulationSoftwareSuiteFormProperties {
		name: FormControl<SimulationSoftwareSuiteType | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodySimulationSoftwareSuiteFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodySimulationSoftwareSuiteFormProperties>({
			name: new FormControl<SimulationSoftwareSuiteType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteType;
		version?: RobotSoftwareSuiteVersionType;
	}
	export interface CreateSimulationApplicationPostBodyRobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteType | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersionType | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodyRobotSoftwareSuiteFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodyRobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteType | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersionType | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationApplicationPostBodyRenderingEngine {
		name?: RenderingEngineType;
		version?: string;
	}
	export interface CreateSimulationApplicationPostBodyRenderingEngineFormProperties {
		name: FormControl<RenderingEngineType | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodyRenderingEngineFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodyRenderingEngineFormProperties>({
			name: new FormControl<RenderingEngineType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationApplicationPostBodyEnvironment {
		uri?: string;
	}
	export interface CreateSimulationApplicationPostBodyEnvironmentFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodyEnvironmentFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodyEnvironmentFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationApplicationVersionPostBody {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: string;

		/**
		 * The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Min length: 1
		 * Max length: 40
		 */
		currentRevisionId?: string | null;

		/** The Amazon S3 eTag identifier for the zip file bundle that you use to create the simulation application. */
		s3Etags?: Array<string>;

		/**
		 * The SHA256 digest used to identify the Docker image URI used to created the simulation application.
		 * Min length: 0
		 * Max length: 72
		 */
		imageDigest?: string | null;
	}
	export interface CreateSimulationApplicationVersionPostBodyFormProperties {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Min length: 1
		 * Max length: 40
		 */
		currentRevisionId: FormControl<string | null | undefined>,

		/**
		 * The SHA256 digest used to identify the Docker image URI used to created the simulation application.
		 * Min length: 0
		 * Max length: 72
		 */
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationVersionPostBodyFormGroup() {
		return new FormGroup<CreateSimulationApplicationVersionPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9_.\-]*')]),
			imageDigest: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(72), Validators.pattern('[Ss][Hh][Aa]256:[0-9a-fA-F]{64}')]),
		});

	}

	export interface CreateSimulationJobPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: CreateSimulationJobPostBodyOutputLocation;

		/** The logging configuration. */
		loggingConfig?: CreateSimulationJobPostBodyLoggingConfig;

		/**
		 * The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxJobDurationInSeconds: number;

		/**
		 * The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		iamRole: string;

		/** <p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the instance running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl> */
		failureBehavior?: FailureBehavior | null;

		/**
		 * The robot application to use in the simulation job.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		robotApplications?: Array<RobotApplicationConfig>;

		/**
		 * The simulation application to use in the simulation job.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		simulationApplications?: Array<SimulationApplicationConfig>;

		/**
		 * <p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>
		 * Minimum items: 1
		 * Maximum items: 6
		 */
		dataSources?: Array<DataSourceConfig>;

		/** A map that contains tag keys and tag values that are attached to the simulation job. */
		tags?: {[id: string]: string };

		/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: CreateSimulationJobPostBodyVpcConfig;

		/** Compute information for the simulation job. */
		compute?: CreateSimulationJobPostBodyCompute;
	}
	export interface CreateSimulationJobPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxJobDurationInSeconds: FormControl<number | null | undefined>,

		/**
		 * The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		iamRole: FormControl<string | null | undefined>,

		/** <p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Leaves the instance running for its maximum timeout duration after a <code>4XX</code> error code.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl> */
		failureBehavior: FormControl<FailureBehavior | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the simulation job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSimulationJobPostBodyFormGroup() {
		return new FormGroup<CreateSimulationJobPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_\-=]*')]),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('arn:aws:iam::\w+:role/.*')]),
			failureBehavior: new FormControl<FailureBehavior | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationJobPostBodyOutputLocation {
		s3Bucket?: string;
		s3Prefix?: string;
	}
	export interface CreateSimulationJobPostBodyOutputLocationFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationJobPostBodyOutputLocationFormGroup() {
		return new FormGroup<CreateSimulationJobPostBodyOutputLocationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationJobPostBodyLoggingConfig {
		recordAllRosTopics?: boolean | null;
	}
	export interface CreateSimulationJobPostBodyLoggingConfigFormProperties {
		recordAllRosTopics: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSimulationJobPostBodyLoggingConfigFormGroup() {
		return new FormGroup<CreateSimulationJobPostBodyLoggingConfigFormProperties>({
			recordAllRosTopics: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationJobPostBodyVpcConfig {
		subnets?: Array<string>;
		securityGroups?: Array<string>;
		assignPublicIp?: boolean | null;
	}
	export interface CreateSimulationJobPostBodyVpcConfigFormProperties {
		assignPublicIp: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSimulationJobPostBodyVpcConfigFormGroup() {
		return new FormGroup<CreateSimulationJobPostBodyVpcConfigFormProperties>({
			assignPublicIp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationJobPostBodyCompute {
		simulationUnitLimit?: number | null;
		computeType?: ComputeType;
		gpuUnitLimit?: number | null;
	}
	export interface CreateSimulationJobPostBodyComputeFormProperties {
		simulationUnitLimit: FormControl<number | null | undefined>,
		computeType: FormControl<ComputeType | null | undefined>,
		gpuUnitLimit: FormControl<number | null | undefined>,
	}
	export function CreateCreateSimulationJobPostBodyComputeFormGroup() {
		return new FormGroup<CreateSimulationJobPostBodyComputeFormProperties>({
			simulationUnitLimit: new FormControl<number | null | undefined>(undefined),
			computeType: new FormControl<ComputeType | null | undefined>(undefined),
			gpuUnitLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWorldExportJobPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken?: string | null;

		/**
		 * A list of Amazon Resource Names (arns) that correspond to worlds to export.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		worlds: Array<string>;

		/**
		 * The output location.
		 * Required
		 */
		outputLocation: CreateWorldExportJobPostBodyOutputLocation;

		/**
		 * The IAM role that the world export process uses to access the Amazon S3 bucket and put the export.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		iamRole: string;

		/** A map that contains tag keys and tag values that are attached to the world export job. */
		tags?: {[id: string]: string };
	}
	export interface CreateWorldExportJobPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The IAM role that the world export process uses to access the Amazon S3 bucket and put the export.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		iamRole: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the world export job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateWorldExportJobPostBodyFormGroup() {
		return new FormGroup<CreateWorldExportJobPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_\-=]*')]),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('arn:aws:iam::\w+:role/.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateWorldExportJobPostBodyOutputLocation {
		s3Bucket?: string;
		s3Prefix?: string;
	}
	export interface CreateWorldExportJobPostBodyOutputLocationFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorldExportJobPostBodyOutputLocationFormGroup() {
		return new FormGroup<CreateWorldExportJobPostBodyOutputLocationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorldGenerationJobPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken?: string | null;

		/**
		 * The Amazon Resource Name (arn) of the world template describing the worlds you want to create.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		template: string;

		/**
		 * <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
		 * Required
		 */
		worldCount: CreateWorldGenerationJobPostBodyWorldCount;

		/** A map that contains tag keys and tag values that are attached to the world generator job. */
		tags?: {[id: string]: string };

		/** A map that contains tag keys and tag values that are attached to the generated worlds. */
		worldTags?: {[id: string]: string };
	}
	export interface CreateWorldGenerationJobPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (arn) of the world template describing the worlds you want to create.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		template: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the world generator job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the generated worlds. */
		worldTags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateWorldGenerationJobPostBodyFormGroup() {
		return new FormGroup<CreateWorldGenerationJobPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_\-=]*')]),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			worldTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateWorldGenerationJobPostBodyWorldCount {
		floorplanCount?: number | null;
		interiorCountPerFloorplan?: number | null;
	}
	export interface CreateWorldGenerationJobPostBodyWorldCountFormProperties {
		floorplanCount: FormControl<number | null | undefined>,
		interiorCountPerFloorplan: FormControl<number | null | undefined>,
	}
	export function CreateCreateWorldGenerationJobPostBodyWorldCountFormGroup() {
		return new FormGroup<CreateWorldGenerationJobPostBodyWorldCountFormProperties>({
			floorplanCount: new FormControl<number | null | undefined>(undefined),
			interiorCountPerFloorplan: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWorldTemplatePostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken?: string | null;

		/**
		 * The name of the world template.
		 * Min length: 0
		 * Max length: 255
		 */
		name?: string | null;

		/**
		 * The world template body.
		 * Min length: 1
		 * Max length: 262144
		 */
		templateBody?: string | null;

		/** Information about a template location. */
		templateLocation?: CreateWorldTemplatePostBodyTemplateLocation;

		/** A map that contains tag keys and tag values that are attached to the world template. */
		tags?: {[id: string]: string };
	}
	export interface CreateWorldTemplatePostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The name of the world template.
		 * Min length: 0
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The world template body.
		 * Min length: 1
		 * Max length: 262144
		 */
		templateBody: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the world template. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateWorldTemplatePostBodyFormGroup() {
		return new FormGroup<CreateWorldTemplatePostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_\-=]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('.*')]),
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(262144), Validators.pattern('[\S\s]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateWorldTemplatePostBodyTemplateLocation {
		s3Bucket?: string;
		s3Key?: string;
	}
	export interface CreateWorldTemplatePostBodyTemplateLocationFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Key: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorldTemplatePostBodyTemplateLocationFormGroup() {
		return new FormGroup<CreateWorldTemplatePostBodyTemplateLocationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFleetPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: string;
	}
	export interface DeleteFleetPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetPostBodyFormGroup() {
		return new FormGroup<DeleteFleetPostBodyFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DeleteRobotPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		robot: string;
	}
	export interface DeleteRobotPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRobotPostBodyFormGroup() {
		return new FormGroup<DeleteRobotPostBodyFormProperties>({
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DeleteRobotApplicationPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: string;

		/**
		 * The version of the robot application to delete.
		 * Min length: 1
		 * Max length: 255
		 */
		applicationVersion?: string | null;
	}
	export interface DeleteRobotApplicationPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The version of the robot application to delete.
		 * Min length: 1
		 * Max length: 255
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRobotApplicationPostBodyFormGroup() {
		return new FormGroup<DeleteRobotApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('(\$LATEST)|[0-9]*')]),
		});

	}

	export interface DeleteSimulationApplicationPostBody {

		/**
		 * The application information for the simulation application to delete.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: string;

		/**
		 * The version of the simulation application to delete.
		 * Min length: 1
		 * Max length: 255
		 */
		applicationVersion?: string | null;
	}
	export interface DeleteSimulationApplicationPostBodyFormProperties {

		/**
		 * The application information for the simulation application to delete.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The version of the simulation application to delete.
		 * Min length: 1
		 * Max length: 255
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSimulationApplicationPostBodyFormGroup() {
		return new FormGroup<DeleteSimulationApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('(\$LATEST)|[0-9]*')]),
		});

	}

	export interface DeleteWorldTemplatePostBody {

		/**
		 * The Amazon Resource Name (arn) of the world template you want to delete.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		template: string;
	}
	export interface DeleteWorldTemplatePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world template you want to delete.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		template: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorldTemplatePostBodyFormGroup() {
		return new FormGroup<DeleteWorldTemplatePostBodyFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DeregisterRobotPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: string;

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		robot: string;
	}
	export interface DeregisterRobotPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterRobotPostBodyFormGroup() {
		return new FormGroup<DeregisterRobotPostBodyFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeDeploymentJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the deployment job.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface DescribeDeploymentJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the deployment job.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeploymentJobPostBodyFormGroup() {
		return new FormGroup<DescribeDeploymentJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeFleetPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: string;
	}
	export interface DescribeFleetPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetPostBodyFormGroup() {
		return new FormGroup<DescribeFleetPostBodyFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeRobotPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot to be described.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		robot: string;
	}
	export interface DescribeRobotPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the robot to be described.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotPostBodyFormGroup() {
		return new FormGroup<DescribeRobotPostBodyFormProperties>({
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeRobotApplicationPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: string;

		/**
		 * The version of the robot application to describe.
		 * Min length: 1
		 * Max length: 255
		 */
		applicationVersion?: string | null;
	}
	export interface DescribeRobotApplicationPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The version of the robot application to describe.
		 * Min length: 1
		 * Max length: 255
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotApplicationPostBodyFormGroup() {
		return new FormGroup<DescribeRobotApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('(\$LATEST)|[0-9]*')]),
		});

	}

	export interface DescribeSimulationApplicationPostBody {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: string;

		/**
		 * The version of the simulation application to describe.
		 * Min length: 1
		 * Max length: 255
		 */
		applicationVersion?: string | null;
	}
	export interface DescribeSimulationApplicationPostBodyFormProperties {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The version of the simulation application to describe.
		 * Min length: 1
		 * Max length: 255
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationApplicationPostBodyFormGroup() {
		return new FormGroup<DescribeSimulationApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('(\$LATEST)|[0-9]*')]),
		});

	}

	export interface DescribeSimulationJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job to be described.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface DescribeSimulationJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job to be described.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobPostBodyFormGroup() {
		return new FormGroup<DescribeSimulationJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeSimulationJobBatchPostBody {

		/**
		 * The id of the batch to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		batch: string;
	}
	export interface DescribeSimulationJobBatchPostBodyFormProperties {

		/**
		 * The id of the batch to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		batch: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobBatchPostBodyFormGroup() {
		return new FormGroup<DescribeSimulationJobBatchPostBodyFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeWorldPostBody {

		/**
		 * The Amazon Resource Name (arn) of the world you want to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		world: string;
	}
	export interface DescribeWorldPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world you want to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		world: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldPostBodyFormGroup() {
		return new FormGroup<DescribeWorldPostBodyFormProperties>({
			world: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeWorldExportJobPostBody {

		/**
		 * The Amazon Resource Name (arn) of the world export job to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface DescribeWorldExportJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world export job to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldExportJobPostBodyFormGroup() {
		return new FormGroup<DescribeWorldExportJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeWorldGenerationJobPostBody {

		/**
		 * The Amazon Resource Name (arn) of the world generation job to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface DescribeWorldGenerationJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world generation job to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldGenerationJobPostBodyFormGroup() {
		return new FormGroup<DescribeWorldGenerationJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface DescribeWorldTemplatePostBody {

		/**
		 * The Amazon Resource Name (arn) of the world template you want to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		template: string;
	}
	export interface DescribeWorldTemplatePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world template you want to describe.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		template: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorldTemplatePostBodyFormGroup() {
		return new FormGroup<DescribeWorldTemplatePostBodyFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface GetWorldTemplateBodyPostBody {

		/**
		 * The Amazon Resource Name (arn) of the world template.
		 * Min length: 1
		 * Max length: 1224
		 */
		template?: string | null;

		/**
		 * The Amazon Resource Name (arn) of the world generator job.
		 * Min length: 1
		 * Max length: 1224
		 */
		generationJob?: string | null;
	}
	export interface GetWorldTemplateBodyPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world template.
		 * Min length: 1
		 * Max length: 1224
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (arn) of the world generator job.
		 * Min length: 1
		 * Max length: 1224
		 */
		generationJob: FormControl<string | null | undefined>,
	}
	export function CreateGetWorldTemplateBodyPostBodyFormGroup() {
		return new FormGroup<GetWorldTemplateBodyPostBodyFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			generationJob: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface ListDeploymentJobsPostBody {

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListDeploymentJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;
	}
	export interface ListDeploymentJobsPostBodyFormProperties {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListDeploymentJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDeploymentJobsPostBodyFormGroup() {
		return new FormGroup<ListDeploymentJobsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFleetsPostBody {

		/**
		 * <p>If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListFleets</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListFleetsPostBodyFormProperties {

		/**
		 * <p>If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListFleets</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFleetsPostBodyFormGroup() {
		return new FormGroup<ListFleetsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRobotApplicationsPostBody {

		/**
		 * The version qualifier of the robot application.
		 * Min length: 1
		 * Max length: 255
		 */
		versionQualifier?: string | null;

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobotApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListRobotApplicationsPostBodyFormProperties {

		/**
		 * The version qualifier of the robot application.
		 * Min length: 1
		 * Max length: 255
		 */
		versionQualifier: FormControl<string | null | undefined>,

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobotApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRobotApplicationsPostBodyFormGroup() {
		return new FormGroup<ListRobotApplicationsPostBodyFormProperties>({
			versionQualifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('ALL')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRobotsPostBody {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobots</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Registered</code> or the status <code>Available</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListRobotsPostBodyFormProperties {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobots</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRobotsPostBodyFormGroup() {
		return new FormGroup<ListRobotsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationApplicationsPostBody {

		/**
		 * The version qualifier of the simulation application.
		 * Min length: 1
		 * Max length: 255
		 */
		versionQualifier?: string | null;

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * <p>Optional list of filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListSimulationApplicationsPostBodyFormProperties {

		/**
		 * The version qualifier of the simulation application.
		 * Min length: 1
		 * Max length: 255
		 */
		versionQualifier: FormControl<string | null | undefined>,

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationApplicationsPostBodyFormGroup() {
		return new FormGroup<ListSimulationApplicationsPostBodyFormProperties>({
			versionQualifier: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('ALL')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobBatchesPostBody {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobBatches</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * Optional filters to limit results.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListSimulationJobBatchesPostBodyFormProperties {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobBatches</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationJobBatchesPostBodyFormGroup() {
		return new FormGroup<ListSimulationJobBatchesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobsPostBody {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and <code>robotApplicationName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Preparing</code> or the status <code>Running</code>.</p>
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListSimulationJobsPostBodyFormProperties {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationJobsPostBodyFormGroup() {
		return new FormGroup<ListSimulationJobsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A map that contains tag keys and tag values that are attached to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A map that contains tag keys and tag values that are attached to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorldExportJobsPostBody {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldExportJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListWorldExportJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldExportJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldExportJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * Optional filters to limit results. You can use <code>generationJobId</code> and <code>templateId</code>.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListWorldExportJobsPostBodyFormProperties {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldExportJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListWorldExportJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldExportJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldExportJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorldExportJobsPostBodyFormGroup() {
		return new FormGroup<ListWorldExportJobsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorldGenerationJobsPostBody {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListWorldGeneratorJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldGeneratorJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldGeneratorJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * Optional filters to limit results. You can use <code>status</code> and <code>templateId</code>.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListWorldGenerationJobsPostBodyFormProperties {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListWorldGeneratorJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldGeneratorJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldGeneratorJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorldGenerationJobsPostBodyFormGroup() {
		return new FormGroup<ListWorldGenerationJobsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorldTemplatesPostBody {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldTemplates</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListWorldTemplates</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldTemplates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldTemplates</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;
	}
	export interface ListWorldTemplatesPostBodyFormProperties {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldTemplates</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListWorldTemplates</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldTemplates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldTemplates</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorldTemplatesPostBodyFormGroup() {
		return new FormGroup<ListWorldTemplatesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWorldsPostBody {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorlds</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/**
		 * When this parameter is used, <code>ListWorlds</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorlds</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorlds</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * Optional filters to limit results. You can use <code>status</code>.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListWorldsPostBodyFormProperties {

		/**
		 * If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorlds</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.
		 * Min length: 1
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * When this parameter is used, <code>ListWorlds</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorlds</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorlds</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorldsPostBodyFormGroup() {
		return new FormGroup<ListWorldsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[a-zA-Z0-9_.\-\/+=]*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterRobotPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: string;

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		robot: string;
	}
	export interface RegisterRobotPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateRegisterRobotPostBodyFormGroup() {
		return new FormGroup<RegisterRobotPostBodyFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface RestartSimulationJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: string;
	}
	export interface RestartSimulationJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateRestartSimulationJobPostBodyFormGroup() {
		return new FormGroup<RestartSimulationJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface StartSimulationJobBatchPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken?: string | null;

		/** Information about the batch policy. */
		batchPolicy?: StartSimulationJobBatchPostBodyBatchPolicy;

		/**
		 * A list of simulation job requests to create in the batch.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		createSimulationJobRequests: Array<SimulationJobRequest>;

		/** A map that contains tag keys and tag values that are attached to the deployment job batch. */
		tags?: {[id: string]: string };
	}
	export interface StartSimulationJobBatchPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the deployment job batch. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartSimulationJobBatchPostBodyFormGroup() {
		return new FormGroup<StartSimulationJobBatchPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_\-=]*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartSimulationJobBatchPostBodyBatchPolicy {
		timeoutInSeconds?: number | null;
		maxConcurrency?: number | null;
	}
	export interface StartSimulationJobBatchPostBodyBatchPolicyFormProperties {
		timeoutInSeconds: FormControl<number | null | undefined>,
		maxConcurrency: FormControl<number | null | undefined>,
	}
	export function CreateStartSimulationJobBatchPostBodyBatchPolicyFormGroup() {
		return new FormGroup<StartSimulationJobBatchPostBodyBatchPolicyFormProperties>({
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			maxConcurrency: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SyncDeploymentJobPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: string;

		/**
		 * The target fleet for the synchronization.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: string;
	}
	export interface SyncDeploymentJobPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The target fleet for the synchronization.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateSyncDeploymentJobPostBodyFormGroup() {
		return new FormGroup<SyncDeploymentJobPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_\-=]*')]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
		});

	}

	export interface UpdateRobotApplicationPostBody {

		/**
		 * The application information for the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: string;

		/** The sources of the robot application. */
		sources?: Array<SourceConfig>;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: UpdateRobotApplicationPostBodyRobotSoftwareSuite;

		/**
		 * The revision id for the robot application.
		 * Min length: 1
		 * Max length: 40
		 */
		currentRevisionId?: string | null;

		/** The object that contains the Docker image URI for either your robot or simulation applications. */
		environment?: UpdateRobotApplicationPostBodyEnvironment;
	}
	export interface UpdateRobotApplicationPostBodyFormProperties {

		/**
		 * The application information for the robot application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The revision id for the robot application.
		 * Min length: 1
		 * Max length: 40
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRobotApplicationPostBodyFormGroup() {
		return new FormGroup<UpdateRobotApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9_.\-]*')]),
		});

	}

	export interface UpdateRobotApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteType;
		version?: RobotSoftwareSuiteVersionType;
	}
	export interface UpdateRobotApplicationPostBodyRobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteType | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersionType | null | undefined>,
	}
	export function CreateUpdateRobotApplicationPostBodyRobotSoftwareSuiteFormGroup() {
		return new FormGroup<UpdateRobotApplicationPostBodyRobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteType | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersionType | null | undefined>(undefined),
		});

	}

	export interface UpdateRobotApplicationPostBodyEnvironment {
		uri?: string;
	}
	export interface UpdateRobotApplicationPostBodyEnvironmentFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRobotApplicationPostBodyEnvironmentFormGroup() {
		return new FormGroup<UpdateRobotApplicationPostBodyEnvironmentFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSimulationApplicationPostBody {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: string;

		/** The sources of the simulation application. */
		sources?: Array<SourceConfig>;

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
		renderingEngine?: UpdateSimulationApplicationPostBodyRenderingEngine;

		/**
		 * The revision id for the robot application.
		 * Min length: 1
		 * Max length: 40
		 */
		currentRevisionId?: string | null;

		/** The object that contains the Docker image URI for either your robot or simulation applications. */
		environment?: UpdateSimulationApplicationPostBodyEnvironment;
	}
	export interface UpdateSimulationApplicationPostBodyFormProperties {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The revision id for the robot application.
		 * Min length: 1
		 * Max length: 40
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodyFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9_.\-]*')]),
		});

	}

	export interface UpdateSimulationApplicationPostBodySimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteType;
		version?: string;
	}
	export interface UpdateSimulationApplicationPostBodySimulationSoftwareSuiteFormProperties {
		name: FormControl<SimulationSoftwareSuiteType | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodySimulationSoftwareSuiteFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodySimulationSoftwareSuiteFormProperties>({
			name: new FormControl<SimulationSoftwareSuiteType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSimulationApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteType;
		version?: RobotSoftwareSuiteVersionType;
	}
	export interface UpdateSimulationApplicationPostBodyRobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteType | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersionType | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodyRobotSoftwareSuiteFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodyRobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteType | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersionType | null | undefined>(undefined),
		});

	}

	export interface UpdateSimulationApplicationPostBodyRenderingEngine {
		name?: RenderingEngineType;
		version?: string;
	}
	export interface UpdateSimulationApplicationPostBodyRenderingEngineFormProperties {
		name: FormControl<RenderingEngineType | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodyRenderingEngineFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodyRenderingEngineFormProperties>({
			name: new FormControl<RenderingEngineType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSimulationApplicationPostBodyEnvironment {
		uri?: string;
	}
	export interface UpdateSimulationApplicationPostBodyEnvironmentFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodyEnvironmentFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodyEnvironmentFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorldTemplatePostBody {

		/**
		 * The Amazon Resource Name (arn) of the world template to update.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		template: string;

		/**
		 * The name of the template.
		 * Min length: 0
		 * Max length: 255
		 */
		name?: string | null;

		/**
		 * The world template body.
		 * Min length: 1
		 * Max length: 262144
		 */
		templateBody?: string | null;

		/** Information about a template location. */
		templateLocation?: UpdateWorldTemplatePostBodyTemplateLocation;
	}
	export interface UpdateWorldTemplatePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (arn) of the world template to update.
		 * Required
		 * Min length: 1
		 * Max length: 1224
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * The name of the template.
		 * Min length: 0
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The world template body.
		 * Min length: 1
		 * Max length: 262144
		 */
		templateBody: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorldTemplatePostBodyFormGroup() {
		return new FormGroup<UpdateWorldTemplatePostBodyFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1224), Validators.pattern('arn:.*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('.*')]),
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(262144), Validators.pattern('[\S\s]+')]),
		});

	}

	export interface UpdateWorldTemplatePostBodyTemplateLocation {
		s3Bucket?: string;
		s3Key?: string;
	}
	export interface UpdateWorldTemplatePostBodyTemplateLocationFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3Key: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorldTemplatePostBodyTemplateLocationFormGroup() {
		return new FormGroup<UpdateWorldTemplatePostBodyTemplateLocationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

}

