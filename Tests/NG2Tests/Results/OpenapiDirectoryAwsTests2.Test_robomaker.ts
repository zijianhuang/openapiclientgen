import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchDescribeSimulationJobResponse {
		jobs?: Array<SimulationJob>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
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

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;
		status?: SimulationJobStatus | null;
		lastStartedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		failureBehavior?: SimulationJobFailureBehavior | null;
		failureCode?: SimulationJobFailureCode | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: OutputLocation;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		robotApplications?: Array<RobotApplicationConfig>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;

		/** VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse;

		/** Describes a network interface. */
		networkInterface?: NetworkInterface;

		/** Compute information for the simulation job */
		compute?: ComputeResponse;
	}

	/** Information about a simulation job. */
	export interface SimulationJobFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobStatus | null | undefined>,
		lastStartedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		failureBehavior: FormControl<SimulationJobFailureBehavior | null | undefined>,
		failureCode: FormControl<SimulationJobFailureCode | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,
		maxJobDurationInSeconds: FormControl<number | null | undefined>,
		simulationTimeMillis: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateSimulationJobFormGroup() {
		return new FormGroup<SimulationJobFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			status: new FormControl<SimulationJobStatus | null | undefined>(undefined),
			lastStartedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			failureBehavior: new FormControl<SimulationJobFailureBehavior | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			simulationTimeMillis: new FormControl<number | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export enum SimulationJobStatus { Pending = 0, Preparing = 1, Running = 2, Restarting = 3, Completed = 4, Failed = 5, RunningFailed = 6, Terminating = 7, Terminated = 8, Canceled = 9 }

	export enum SimulationJobFailureBehavior { Fail = 0, Continue = 1 }

	export enum SimulationJobFailureCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }


	/** The output location. */
	export interface OutputLocation {

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Prefix?: string | null;
	}

	/** The output location. */
	export interface OutputLocationFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateOutputLocationFormGroup() {
		return new FormGroup<OutputLocationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3)]),
			s3Prefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** The logging configuration. */
	export interface LoggingConfig {

		/** Required */
		recordAllRosTopics: boolean;
	}

	/** The logging configuration. */
	export interface LoggingConfigFormProperties {

		/** Required */
		recordAllRosTopics: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingConfigFormGroup() {
		return new FormGroup<LoggingConfigFormProperties>({
			recordAllRosTopics: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Application configuration information for a robot. */
	export interface RobotApplicationConfig {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;

		/**
		 * Information about a launch configuration.
		 * Required
		 */
		launchConfig: LaunchConfig;
	}

	/** Application configuration information for a robot. */
	export interface RobotApplicationConfigFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateRobotApplicationConfigFormGroup() {
		return new FormGroup<RobotApplicationConfigFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** Information about a launch configuration. */
	export interface LaunchConfig {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		packageName: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		launchFile: string;
		environmentVariables?: EnvironmentVariableMap;

		/** Configuration information for port forwarding. */
		portForwardingConfig?: PortForwardingConfig;
		streamUI?: boolean | null;
	}

	/** Information about a launch configuration. */
	export interface LaunchConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		packageName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		launchFile: FormControl<string | null | undefined>,
		streamUI: FormControl<boolean | null | undefined>,
	}
	export function CreateLaunchConfigFormGroup() {
		return new FormGroup<LaunchConfigFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			launchFile: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
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

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
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

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		jobPort: number;

		/**
		 * Required
		 * Minimum: 1024
		 * Maximum: 65535
		 */
		applicationPort: number;
		enableOnPublicIp?: boolean | null;
	}

	/** An object representing a port mapping. */
	export interface PortMappingFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		jobPort: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1024
		 * Maximum: 65535
		 */
		applicationPort: FormControl<number | null | undefined>,
		enableOnPublicIp: FormControl<boolean | null | undefined>,
	}
	export function CreatePortMappingFormGroup() {
		return new FormGroup<PortMappingFormProperties>({
			jobPort: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			applicationPort: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1024), Validators.max(65535)]),
			enableOnPublicIp: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a simulation application configuration. */
	export interface SimulationApplicationConfig {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;

		/**
		 * Information about a launch configuration.
		 * Required
		 */
		launchConfig: LaunchConfig;
	}

	/** Information about a simulation application configuration. */
	export interface SimulationApplicationConfigFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateSimulationApplicationConfigFormGroup() {
		return new FormGroup<SimulationApplicationConfigFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** Information about a data source. */
	export interface DataSource {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket?: string | null;
		s3Keys?: Array<S3KeyOutput>;
	}

	/** Information about a data source. */
	export interface DataSourceFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3)]),
		});

	}


	/** Information about S3 keys. */
	export interface S3KeyOutput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Key?: string | null;
		etag?: string | null;
	}

	/** Information about S3 keys. */
	export interface S3KeyOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Key: FormControl<string | null | undefined>,
		etag: FormControl<string | null | undefined>,
	}
	export function CreateS3KeyOutputFormGroup() {
		return new FormGroup<S3KeyOutputFormProperties>({
			s3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			etag: new FormControl<string | null | undefined>(undefined),
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


	/** VPC configuration associated with your simulation job. */
	export interface VPCConfigResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		subnets?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		securityGroups?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		vpcId?: string | null;
		assignPublicIp?: boolean | null;
	}

	/** VPC configuration associated with your simulation job. */
	export interface VPCConfigResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		vpcId: FormControl<string | null | undefined>,
		assignPublicIp: FormControl<boolean | null | undefined>,
	}
	export function CreateVPCConfigResponseFormGroup() {
		return new FormGroup<VPCConfigResponseFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			assignPublicIp: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a network interface. */
	export interface NetworkInterface {

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		networkInterfaceId?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		privateIpAddress?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		publicIpAddress?: string | null;
	}

	/** Describes a network interface. */
	export interface NetworkInterfaceFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		networkInterfaceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		privateIpAddress: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		publicIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			networkInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			privateIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			publicIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}


	/** Compute information for the simulation job */
	export interface ComputeResponse {

		/**
		 * Minimum: 1
		 * Maximum: 15
		 */
		simulationUnitLimit?: number | null;
	}

	/** Compute information for the simulation job */
	export interface ComputeResponseFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 15
		 */
		simulationUnitLimit: FormControl<number | null | undefined>,
	}
	export function CreateComputeResponseFormGroup() {
		return new FormGroup<ComputeResponseFormProperties>({
			simulationUnitLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(15)]),
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

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface CancelDeploymentJobResponse {
	}
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

	export interface CreateDeploymentJobResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet?: string | null;
		status?: CreateDeploymentJobResponseStatus | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
		createdAt?: Date | null;

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;
		tags?: TagMap;
	}
	export interface CreateDeploymentJobResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
		status: FormControl<CreateDeploymentJobResponseStatus | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateDeploymentJobResponseFormGroup() {
		return new FormGroup<CreateDeploymentJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<CreateDeploymentJobResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			failureCode: new FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CreateDeploymentJobResponseStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }


	/** Information about a deployment application configuration. */
	export interface DeploymentApplicationConfig {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [0-9]*
		 */
		applicationVersion: string;

		/**
		 * Configuration information for a deployment launch.
		 * Required
		 */
		launchConfig: DeploymentLaunchConfig;
	}

	/** Information about a deployment application configuration. */
	export interface DeploymentApplicationConfigFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentApplicationConfigFormGroup() {
		return new FormGroup<DeploymentApplicationConfigFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** Configuration information for a deployment launch. */
	export interface DeploymentLaunchConfig {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		packageName: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		preLaunchFile?: string | null;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		launchFile: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		postLaunchFile?: string | null;
		environmentVariables?: EnvironmentVariableMap;
	}

	/** Configuration information for a deployment launch. */
	export interface DeploymentLaunchConfigFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		packageName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		preLaunchFile: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		launchFile: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		postLaunchFile: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentLaunchConfigFormGroup() {
		return new FormGroup<DeploymentLaunchConfigFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			preLaunchFile: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			launchFile: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			postLaunchFile: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export enum CreateDeploymentJobResponseFailureCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }


	/** Information about a deployment configuration. */
	export interface DeploymentConfig {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		concurrentDeploymentPercentage?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		failureThresholdPercentage?: number | null;
		robotDeploymentTimeoutInSeconds?: number | null;

		/** Information about an S3 object. */
		downloadConditionFile?: S3Object;
	}

	/** Information about a deployment configuration. */
	export interface DeploymentConfigFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		concurrentDeploymentPercentage: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		failureThresholdPercentage: FormControl<number | null | undefined>,
		robotDeploymentTimeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentConfigFormGroup() {
		return new FormGroup<DeploymentConfigFormProperties>({
			concurrentDeploymentPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			failureThresholdPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			robotDeploymentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about an S3 object. */
	export interface S3Object {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		bucket: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		key: string;
		etag?: string | null;
	}

	/** Information about an S3 object. */
	export interface S3ObjectFormProperties {

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		bucket: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		key: FormControl<string | null | undefined>,
		etag: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(3)]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
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

	export interface CreateFleetResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;
		createdAt?: Date | null;
		tags?: TagMap;
	}
	export interface CreateFleetResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateFleetResponseFormGroup() {
		return new FormGroup<CreateFleetResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateRobotResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;
		createdAt?: Date | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId?: string | null;
		architecture?: CreateRobotResponseArchitecture | null;
		tags?: TagMap;
	}
	export interface CreateRobotResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId: FormControl<string | null | undefined>,
		architecture: FormControl<CreateRobotResponseArchitecture | null | undefined>,
	}
	export function CreateCreateRobotResponseFormGroup() {
		return new FormGroup<CreateRobotResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			architecture: new FormControl<CreateRobotResponseArchitecture | null | undefined>(undefined),
		});

	}

	export enum CreateRobotResponseArchitecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateRobotApplicationResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		sources?: Array<Source>;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId?: string | null;
		tags?: TagMap;
	}
	export interface CreateRobotApplicationResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationResponseFormGroup() {
		return new FormGroup<CreateRobotApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}


	/** Information about a source. */
	export interface Source {

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Key?: string | null;
		etag?: string | null;
		architecture?: CreateRobotResponseArchitecture | null;
	}

	/** Information about a source. */
	export interface SourceFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Key: FormControl<string | null | undefined>,
		etag: FormControl<string | null | undefined>,
		architecture: FormControl<CreateRobotResponseArchitecture | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3)]),
			s3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			etag: new FormControl<string | null | undefined>(undefined),
			architecture: new FormControl<CreateRobotResponseArchitecture | null | undefined>(undefined),
		});

	}


	/** Information about a robot software suite (ROS distribution). */
	export interface RobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}

	/** Information about a robot software suite (ROS distribution). */
	export interface RobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteName | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersion | null | undefined>,
	}
	export function CreateRobotSoftwareSuiteFormGroup() {
		return new FormGroup<RobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteName | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersion | null | undefined>(undefined),
		});

	}

	export enum RobotSoftwareSuiteName { ROS = 0, ROS2 = 1 }

	export enum RobotSoftwareSuiteVersion { Kinetic = 0, Melodic = 1, Dashing = 2 }


	/** Information about a source configuration. */
	export interface SourceConfig {

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Key?: string | null;
		architecture?: CreateRobotResponseArchitecture | null;
	}

	/** Information about a source configuration. */
	export interface SourceConfigFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Key: FormControl<string | null | undefined>,
		architecture: FormControl<CreateRobotResponseArchitecture | null | undefined>,
	}
	export function CreateSourceConfigFormGroup() {
		return new FormGroup<SourceConfigFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3)]),
			s3Key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			architecture: new FormControl<CreateRobotResponseArchitecture | null | undefined>(undefined),
		});

	}

	export enum RobotSoftwareSuiteType { ROS = 0, ROS2 = 1 }

	export enum RobotSoftwareSuiteVersionType { Kinetic = 0, Melodic = 1, Dashing = 2 }

	export interface CreateRobotApplicationVersionResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		sources?: Array<Source>;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId?: string | null;
	}
	export interface CreateRobotApplicationVersionResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationVersionResponseFormGroup() {
		return new FormGroup<CreateRobotApplicationVersionResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export interface CreateSimulationApplicationResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		sources?: Array<Source>;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId?: string | null;
		tags?: TagMap;
	}
	export interface CreateSimulationApplicationResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationResponseFormGroup() {
		return new FormGroup<CreateSimulationApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}


	/** Information about a simulation software suite. */
	export interface SimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteName | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: 7|9|Kinetic|Melodic|Dashing
		 */
		version?: string | null;
	}

	/** Information about a simulation software suite. */
	export interface SimulationSoftwareSuiteFormProperties {
		name: FormControl<SimulationSoftwareSuiteName | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: 7|9|Kinetic|Melodic|Dashing
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSimulationSoftwareSuiteFormGroup() {
		return new FormGroup<SimulationSoftwareSuiteFormProperties>({
			name: new FormControl<SimulationSoftwareSuiteName | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export enum SimulationSoftwareSuiteName { Gazebo = 0, RosbagPlay = 1 }


	/** Information about a rendering engine. */
	export interface RenderingEngine {
		name?: RenderingEngineName | null;

		/**
		 * Max length: 4
		 * Min length: 1
		 * Pattern: 1.x
		 */
		version?: string | null;
	}

	/** Information about a rendering engine. */
	export interface RenderingEngineFormProperties {
		name: FormControl<RenderingEngineName | null | undefined>,

		/**
		 * Max length: 4
		 * Min length: 1
		 * Pattern: 1.x
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateRenderingEngineFormGroup() {
		return new FormGroup<RenderingEngineFormProperties>({
			name: new FormControl<RenderingEngineName | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4), Validators.minLength(1)]),
		});

	}

	export enum RenderingEngineName { OGRE = 0 }

	export enum SimulationSoftwareSuiteType { Gazebo = 0, RosbagPlay = 1 }

	export enum RenderingEngineType { OGRE = 0 }

	export interface CreateSimulationApplicationVersionResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		sources?: Array<Source>;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId?: string | null;
	}
	export interface CreateSimulationApplicationVersionResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationVersionResponseFormGroup() {
		return new FormGroup<CreateSimulationApplicationVersionResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export interface CreateSimulationJobResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;
		status?: SimulationJobStatus | null;
		lastStartedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		failureBehavior?: SimulationJobFailureBehavior | null;
		failureCode?: SimulationJobFailureCode | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: OutputLocation;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		robotApplications?: Array<RobotApplicationConfig>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;

		/** VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse;

		/** Compute information for the simulation job */
		compute?: ComputeResponse;
	}
	export interface CreateSimulationJobResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobStatus | null | undefined>,
		lastStartedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		failureBehavior: FormControl<SimulationJobFailureBehavior | null | undefined>,
		failureCode: FormControl<SimulationJobFailureCode | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,
		maxJobDurationInSeconds: FormControl<number | null | undefined>,
		simulationTimeMillis: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationJobResponseFormGroup() {
		return new FormGroup<CreateSimulationJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<SimulationJobStatus | null | undefined>(undefined),
			lastStartedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			failureBehavior: new FormControl<SimulationJobFailureBehavior | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobFailureCode | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			simulationTimeMillis: new FormControl<number | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** Information about a data source. */
	export interface DataSourceConfig {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		s3Keys: Array<string>;
	}

	/** Information about a data source. */
	export interface DataSourceConfigFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceConfigFormGroup() {
		return new FormGroup<DataSourceConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(63), Validators.minLength(3)]),
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

	export interface DeleteFleetResponse {
	}
	export interface DeleteFleetResponseFormProperties {
	}
	export function CreateDeleteFleetResponseFormGroup() {
		return new FormGroup<DeleteFleetResponseFormProperties>({
		});

	}

	export interface DeleteRobotResponse {
	}
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

	export interface DeregisterRobotResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot?: string | null;
	}
	export interface DeregisterRobotResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterRobotResponseFormGroup() {
		return new FormGroup<DeregisterRobotResponseFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface DescribeDeploymentJobResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet?: string | null;
		status?: CreateDeploymentJobResponseStatus | null;

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
		createdAt?: Date | null;
		robotDeploymentSummary?: Array<RobotDeployment>;
		tags?: TagMap;
	}
	export interface DescribeDeploymentJobResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
		status: FormControl<CreateDeploymentJobResponseStatus | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDeploymentJobResponseFormGroup() {
		return new FormGroup<DescribeDeploymentJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<CreateDeploymentJobResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			failureCode: new FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a robot deployment. */
	export interface RobotDeployment {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;
		deploymentStartTime?: Date | null;
		deploymentFinishTime?: Date | null;
		status?: RobotDeploymentStatus | null;

		/** Information about the progress of a deployment job. */
		progressDetail?: ProgressDetail;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
	}

	/** Information about a robot deployment. */
	export interface RobotDeploymentFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,
		deploymentStartTime: FormControl<Date | null | undefined>,
		deploymentFinishTime: FormControl<Date | null | undefined>,
		status: FormControl<RobotDeploymentStatus | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>,
	}
	export function CreateRobotDeploymentFormGroup() {
		return new FormGroup<RobotDeploymentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			deploymentStartTime: new FormControl<Date | null | undefined>(undefined),
			deploymentFinishTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RobotDeploymentStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			failureCode: new FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>(undefined),
		});

	}

	export enum RobotDeploymentStatus { Available = 0, Registered = 1, PendingNewDeployment = 2, Deploying = 3, Failed = 4, InSync = 5, NoResponse = 6 }


	/** Information about the progress of a deployment job. */
	export interface ProgressDetail {
		currentProgress?: ProgressDetailCurrentProgress | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percentDone?: number | null;
		estimatedTimeRemainingSeconds?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		targetResource?: string | null;
	}

	/** Information about the progress of a deployment job. */
	export interface ProgressDetailFormProperties {
		currentProgress: FormControl<ProgressDetailCurrentProgress | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percentDone: FormControl<number | null | undefined>,
		estimatedTimeRemainingSeconds: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateProgressDetailFormGroup() {
		return new FormGroup<ProgressDetailFormProperties>({
			currentProgress: new FormControl<ProgressDetailCurrentProgress | null | undefined>(undefined),
			percentDone: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			estimatedTimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export enum ProgressDetailCurrentProgress { Validating = 0, DownloadingExtracting = 1, ExecutingDownloadCondition = 2, ExecutingPreLaunch = 3, Launching = 4, ExecutingPostLaunch = 5, Finished = 6 }

	export interface DescribeFleetResponse {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		robots?: Array<Robot>;
		createdAt?: Date | null;
		lastDeploymentStatus?: CreateDeploymentJobResponseStatus | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		lastDeploymentJob?: string | null;
		lastDeploymentTime?: Date | null;
		tags?: TagMap;
	}
	export interface DescribeFleetResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastDeploymentStatus: FormControl<CreateDeploymentJobResponseStatus | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		lastDeploymentJob: FormControl<string | null | undefined>,
		lastDeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeFleetResponseFormGroup() {
		return new FormGroup<DescribeFleetResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastDeploymentStatus: new FormControl<CreateDeploymentJobResponseStatus | null | undefined>(undefined),
			lastDeploymentJob: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			lastDeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a robot. */
	export interface Robot {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleetArn?: string | null;
		status?: RobotDeploymentStatus | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greenGrassGroupId?: string | null;
		createdAt?: Date | null;
		architecture?: CreateRobotResponseArchitecture | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		lastDeploymentJob?: string | null;
		lastDeploymentTime?: Date | null;
	}

	/** Information about a robot. */
	export interface RobotFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleetArn: FormControl<string | null | undefined>,
		status: FormControl<RobotDeploymentStatus | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greenGrassGroupId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		architecture: FormControl<CreateRobotResponseArchitecture | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		lastDeploymentJob: FormControl<string | null | undefined>,
		lastDeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateRobotFormGroup() {
		return new FormGroup<RobotFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			fleetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<RobotDeploymentStatus | null | undefined>(undefined),
			greenGrassGroupId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			architecture: new FormControl<CreateRobotResponseArchitecture | null | undefined>(undefined),
			lastDeploymentJob: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			lastDeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRobotResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleetArn?: string | null;
		status?: RobotDeploymentStatus | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId?: string | null;
		createdAt?: Date | null;
		architecture?: CreateRobotResponseArchitecture | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		lastDeploymentJob?: string | null;
		lastDeploymentTime?: Date | null;
		tags?: TagMap;
	}
	export interface DescribeRobotResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleetArn: FormControl<string | null | undefined>,
		status: FormControl<RobotDeploymentStatus | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		architecture: FormControl<CreateRobotResponseArchitecture | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		lastDeploymentJob: FormControl<string | null | undefined>,
		lastDeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeRobotResponseFormGroup() {
		return new FormGroup<DescribeRobotResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			fleetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<RobotDeploymentStatus | null | undefined>(undefined),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			architecture: new FormControl<CreateRobotResponseArchitecture | null | undefined>(undefined),
			lastDeploymentJob: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			lastDeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRobotApplicationResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		sources?: Array<Source>;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId?: string | null;
		lastUpdatedAt?: Date | null;
		tags?: TagMap;
	}
	export interface DescribeRobotApplicationResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeRobotApplicationResponseFormGroup() {
		return new FormGroup<DescribeRobotApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeSimulationApplicationResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		sources?: Array<Source>;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId?: string | null;
		lastUpdatedAt?: Date | null;
		tags?: TagMap;
	}
	export interface DescribeSimulationApplicationResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeSimulationApplicationResponseFormGroup() {
		return new FormGroup<DescribeSimulationApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeSimulationJobResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;
		status?: SimulationJobStatus | null;
		lastStartedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		failureBehavior?: SimulationJobFailureBehavior | null;
		failureCode?: SimulationJobFailureCode | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: OutputLocation;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig;
		maxJobDurationInSeconds?: number | null;
		simulationTimeMillis?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		robotApplications?: Array<RobotApplicationConfig>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		simulationApplications?: Array<SimulationApplicationConfig>;
		dataSources?: Array<DataSource>;
		tags?: TagMap;

		/** VPC configuration associated with your simulation job. */
		vpcConfig?: VPCConfigResponse;

		/** Describes a network interface. */
		networkInterface?: NetworkInterface;

		/** Compute information for the simulation job */
		compute?: ComputeResponse;
	}
	export interface DescribeSimulationJobResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobStatus | null | undefined>,
		lastStartedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		failureBehavior: FormControl<SimulationJobFailureBehavior | null | undefined>,
		failureCode: FormControl<SimulationJobFailureCode | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,
		maxJobDurationInSeconds: FormControl<number | null | undefined>,
		simulationTimeMillis: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobResponseFormGroup() {
		return new FormGroup<DescribeSimulationJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			status: new FormControl<SimulationJobStatus | null | undefined>(undefined),
			lastStartedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			failureBehavior: new FormControl<SimulationJobFailureBehavior | null | undefined>(undefined),
			failureCode: new FormControl<SimulationJobFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined),
			simulationTimeMillis: new FormControl<number | null | undefined>(undefined),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DescribeSimulationJobBatchResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;
		status?: DescribeSimulationJobBatchResponseStatus | null;
		lastUpdatedAt?: Date | null;
		createdAt?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** Information about the batch policy. */
		batchPolicy?: BatchPolicy;
		failureCode?: DescribeSimulationJobBatchResponseFailureCode | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;
		failedRequests?: Array<FailedCreateSimulationJobRequest>;

		/** Minimum items: 1 */
		pendingRequests?: Array<SimulationJobRequest>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		createdRequests?: Array<SimulationJobSummary>;
		tags?: TagMap;
	}
	export interface DescribeSimulationJobBatchResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,
		status: FormControl<DescribeSimulationJobBatchResponseStatus | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,
		failureCode: FormControl<DescribeSimulationJobBatchResponseFailureCode | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobBatchResponseFormGroup() {
		return new FormGroup<DescribeSimulationJobBatchResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<DescribeSimulationJobBatchResponseStatus | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			failureCode: new FormControl<DescribeSimulationJobBatchResponseFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export enum DescribeSimulationJobBatchResponseStatus { Pending = 0, InProgress = 1, Failed = 2, Completed = 3, Canceled = 4, Canceling = 5, Completing = 6, TimingOut = 7, TimedOut = 8 }


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

	export enum DescribeSimulationJobBatchResponseFailureCode { InternalServiceError = 0 }


	/** Information about a failed create simulation job request. */
	export interface FailedCreateSimulationJobRequest {

		/** Information about a simulation job request. */
		request?: SimulationJobRequest;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;
		failureCode?: SimulationJobFailureCode | null;
		failedAt?: Date | null;
	}

	/** Information about a failed create simulation job request. */
	export interface FailedCreateSimulationJobRequestFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<SimulationJobFailureCode | null | undefined>,
		failedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFailedCreateSimulationJobRequestFormGroup() {
		return new FormGroup<FailedCreateSimulationJobRequestFormProperties>({
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			failureCode: new FormControl<SimulationJobFailureCode | null | undefined>(undefined),
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

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole?: string | null;
		failureBehavior?: SimulationJobFailureBehavior | null;
		useDefaultApplications?: boolean | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		robotApplications?: Array<RobotApplicationConfig>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		simulationApplications?: Array<SimulationApplicationConfig>;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		dataSources?: Array<DataSourceConfig>;

		/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: VPCConfig;

		/** Compute information for the simulation job. */
		compute?: Compute;
		tags?: TagMap;
	}

	/** Information about a simulation job request. */
	export interface SimulationJobRequestFormProperties {

		/** Required */
		maxJobDurationInSeconds: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: FormControl<string | null | undefined>,
		failureBehavior: FormControl<SimulationJobFailureBehavior | null | undefined>,
		useDefaultApplications: FormControl<boolean | null | undefined>,
	}
	export function CreateSimulationJobRequestFormGroup() {
		return new FormGroup<SimulationJobRequestFormProperties>({
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			failureBehavior: new FormControl<SimulationJobFailureBehavior | null | undefined>(undefined),
			useDefaultApplications: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
	export interface VPCConfig {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		subnets: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
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

		/**
		 * Minimum: 1
		 * Maximum: 15
		 */
		simulationUnitLimit?: number | null;
	}

	/** Compute information for the simulation job. */
	export interface ComputeFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 15
		 */
		simulationUnitLimit: FormControl<number | null | undefined>,
	}
	export function CreateComputeFormGroup() {
		return new FormGroup<ComputeFormProperties>({
			simulationUnitLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(15)]),
		});

	}


	/** Summary information for a simulation job. */
	export interface SimulationJobSummary {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;
		lastUpdatedAt?: Date | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;
		status?: SimulationJobStatus | null;
		simulationApplicationNames?: Array<string>;
		robotApplicationNames?: Array<string>;
		dataSourceNames?: Array<string>;
	}

	/** Summary information for a simulation job. */
	export interface SimulationJobSummaryFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
		status: FormControl<SimulationJobStatus | null | undefined>,
	}
	export function CreateSimulationJobSummaryFormGroup() {
		return new FormGroup<SimulationJobSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			status: new FormControl<SimulationJobStatus | null | undefined>(undefined),
		});

	}

	export interface ListDeploymentJobsResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		deploymentJobs?: Array<DeploymentJob>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
	}
	export interface ListDeploymentJobsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentJobsResponseFormGroup() {
		return new FormGroup<ListDeploymentJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Information about a deployment job. */
	export interface DeploymentJob {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet?: string | null;
		status?: CreateDeploymentJobResponseStatus | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
		createdAt?: Date | null;
	}

	/** Information about a deployment job. */
	export interface DeploymentJobFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
		status: FormControl<CreateDeploymentJobResponseStatus | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentJobFormGroup() {
		return new FormGroup<DeploymentJobFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<CreateDeploymentJobResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			failureCode: new FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a filter. */
	export interface Filter {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		values?: Array<string>;
	}

	/** Information about a filter. */
	export interface FilterFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface ListFleetsResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		fleetDetails?: Array<Fleet>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
	}
	export interface ListFleetsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetsResponseFormGroup() {
		return new FormGroup<ListFleetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Information about a fleet. */
	export interface Fleet {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;
		createdAt?: Date | null;
		lastDeploymentStatus?: CreateDeploymentJobResponseStatus | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		lastDeploymentJob?: string | null;
		lastDeploymentTime?: Date | null;
	}

	/** Information about a fleet. */
	export interface FleetFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastDeploymentStatus: FormControl<CreateDeploymentJobResponseStatus | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		lastDeploymentJob: FormControl<string | null | undefined>,
		lastDeploymentTime: FormControl<Date | null | undefined>,
	}
	export function CreateFleetFormGroup() {
		return new FormGroup<FleetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastDeploymentStatus: new FormControl<CreateDeploymentJobResponseStatus | null | undefined>(undefined),
			lastDeploymentJob: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			lastDeploymentTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRobotApplicationsResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		robotApplicationSummaries?: Array<RobotApplicationSummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
	}
	export interface ListRobotApplicationsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRobotApplicationsResponseFormGroup() {
		return new FormGroup<ListRobotApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Summary information for a robot application. */
	export interface RobotApplicationSummary {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		lastUpdatedAt?: Date | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
	}

	/** Summary information for a robot application. */
	export interface RobotApplicationSummaryFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRobotApplicationSummaryFormGroup() {
		return new FormGroup<RobotApplicationSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRobotsResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 1000
		 */
		robots?: Array<Robot>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
	}
	export interface ListRobotsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRobotsResponseFormGroup() {
		return new FormGroup<ListRobotsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface ListSimulationApplicationsResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		simulationApplicationSummaries?: Array<SimulationApplicationSummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
	}
	export interface ListSimulationApplicationsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSimulationApplicationsResponseFormGroup() {
		return new FormGroup<ListSimulationApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Summary information for a simulation application. */
	export interface SimulationApplicationSummary {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		lastUpdatedAt?: Date | null;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;
	}

	/** Summary information for a simulation application. */
	export interface SimulationApplicationSummaryFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSimulationApplicationSummaryFormGroup() {
		return new FormGroup<SimulationApplicationSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobBatchesResponse {
		simulationJobBatchSummaries?: Array<SimulationJobBatchSummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
	}
	export interface ListSimulationJobBatchesResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSimulationJobBatchesResponseFormGroup() {
		return new FormGroup<ListSimulationJobBatchesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Information about a simulation job batch. */
	export interface SimulationJobBatchSummary {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;
		lastUpdatedAt?: Date | null;
		createdAt?: Date | null;
		status?: DescribeSimulationJobBatchResponseStatus | null;
		failedRequestCount?: number | null;
		pendingRequestCount?: number | null;
		createdRequestCount?: number | null;
	}

	/** Information about a simulation job batch. */
	export interface SimulationJobBatchSummaryFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		status: FormControl<DescribeSimulationJobBatchResponseStatus | null | undefined>,
		failedRequestCount: FormControl<number | null | undefined>,
		pendingRequestCount: FormControl<number | null | undefined>,
		createdRequestCount: FormControl<number | null | undefined>,
	}
	export function CreateSimulationJobBatchSummaryFormGroup() {
		return new FormGroup<SimulationJobBatchSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DescribeSimulationJobBatchResponseStatus | null | undefined>(undefined),
			failedRequestCount: new FormControl<number | null | undefined>(undefined),
			pendingRequestCount: new FormControl<number | null | undefined>(undefined),
			createdRequestCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobsResponse {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		simulationJobSummaries: Array<SimulationJobSummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
	}
	export interface ListSimulationJobsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSimulationJobsResponseFormGroup() {
		return new FormGroup<ListSimulationJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
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

	export interface RegisterRobotResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot?: string | null;
	}
	export interface RegisterRobotResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateRegisterRobotResponseFormGroup() {
		return new FormGroup<RegisterRobotResponseFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
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

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;
		status?: DescribeSimulationJobBatchResponseStatus | null;
		createdAt?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** Information about the batch policy. */
		batchPolicy?: BatchPolicy;
		failureCode?: DescribeSimulationJobBatchResponseFailureCode | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;
		failedRequests?: Array<FailedCreateSimulationJobRequest>;

		/** Minimum items: 1 */
		pendingRequests?: Array<SimulationJobRequest>;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		createdRequests?: Array<SimulationJobSummary>;
		tags?: TagMap;
	}
	export interface StartSimulationJobBatchResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,
		status: FormControl<DescribeSimulationJobBatchResponseStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,
		failureCode: FormControl<DescribeSimulationJobBatchResponseFailureCode | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateStartSimulationJobBatchResponseFormGroup() {
		return new FormGroup<StartSimulationJobBatchResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<DescribeSimulationJobBatchResponseStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			failureCode: new FormControl<DescribeSimulationJobBatchResponseFailureCode | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export interface SyncDeploymentJobResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet?: string | null;
		status?: CreateDeploymentJobResponseStatus | null;

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason?: string | null;
		failureCode?: CreateDeploymentJobResponseFailureCode | null;
		createdAt?: Date | null;
	}
	export interface SyncDeploymentJobResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
		status: FormControl<CreateDeploymentJobResponseStatus | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: .*
		 */
		failureReason: FormControl<string | null | undefined>,
		failureCode: FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateSyncDeploymentJobResponseFormGroup() {
		return new FormGroup<SyncDeploymentJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			status: new FormControl<CreateDeploymentJobResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			failureCode: new FormControl<CreateDeploymentJobResponseFailureCode | null | undefined>(undefined),
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

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		sources?: Array<Source>;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;
		lastUpdatedAt?: Date | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId?: string | null;
	}
	export interface UpdateRobotApplicationResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRobotApplicationResponseFormGroup() {
		return new FormGroup<UpdateRobotApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export interface UpdateSimulationApplicationResponse {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version?: string | null;
		sources?: Array<Source>;

		/** Information about a simulation software suite. */
		simulationSoftwareSuite?: SimulationSoftwareSuite;

		/** Information about a robot software suite (ROS distribution). */
		robotSoftwareSuite?: RobotSoftwareSuite;

		/** Information about a rendering engine. */
		renderingEngine?: RenderingEngine;
		lastUpdatedAt?: Date | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId?: string | null;
	}
	export interface UpdateSimulationApplicationResponseFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		version: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationResponseFormGroup() {
		return new FormGroup<UpdateSimulationApplicationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export enum Architecture { X86_64 = 0, ARM64 = 1, ARMHF = 2 }

	export interface BatchDescribeSimulationJobRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		jobs: Array<string>;
	}
	export interface BatchDescribeSimulationJobRequestFormProperties {
	}
	export function CreateBatchDescribeSimulationJobRequestFormGroup() {
		return new FormGroup<BatchDescribeSimulationJobRequestFormProperties>({
		});

	}

	export interface CancelDeploymentJobRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}
	export interface CancelDeploymentJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelDeploymentJobRequestFormGroup() {
		return new FormGroup<CancelDeploymentJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface CancelSimulationJobBatchRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: string;
	}
	export interface CancelSimulationJobBatchRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: FormControl<string | null | undefined>,
	}
	export function CreateCancelSimulationJobBatchRequestFormGroup() {
		return new FormGroup<CancelSimulationJobBatchRequestFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface CancelSimulationJobRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}
	export interface CancelSimulationJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelSimulationJobRequestFormGroup() {
		return new FormGroup<CancelSimulationJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface CreateDeploymentJobRequest {

		/** Information about a deployment configuration. */
		deploymentConfig?: DeploymentConfig;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: string;

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		deploymentApplicationConfigs: Array<DeploymentApplicationConfig>;
		tags?: TagMap;
	}
	export interface CreateDeploymentJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentJobRequestFormGroup() {
		return new FormGroup<CreateDeploymentJobRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export enum DeploymentStatus { Pending = 0, Preparing = 1, InProgress = 2, Failed = 3, Succeeded = 4, Canceled = 5 }

	export enum DeploymentJobErrorCode { ResourceNotFound = 0, EnvironmentSetupError = 1, EtagMismatch = 2, FailureThresholdBreached = 3, RobotDeploymentAborted = 4, RobotDeploymentNoResponse = 5, RobotAgentConnectionTimeout = 6, GreengrassDeploymentFailed = 7, InvalidGreengrassGroup = 8, MissingRobotArchitecture = 9, MissingRobotApplicationArchitecture = 10, MissingRobotDeploymentResource = 11, GreengrassGroupVersionDoesNotExist = 12, LambdaDeleted = 13, ExtractingBundleFailure = 14, PreLaunchFileFailure = 15, PostLaunchFileFailure = 16, BadPermissionError = 17, DownloadConditionFailed = 18, InternalServerError = 19 }

	export interface CreateFleetRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;
		tags?: TagMap;
	}
	export interface CreateFleetRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetRequestFormGroup() {
		return new FormGroup<CreateFleetRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface CreateRobotApplicationRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/** Required */
		sources: Array<SourceConfig>;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: RobotSoftwareSuite;
		tags?: TagMap;
	}
	export interface CreateRobotApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationRequestFormGroup() {
		return new FormGroup<CreateRobotApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface CreateRobotApplicationVersionRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}
	export interface CreateRobotApplicationVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationVersionRequestFormGroup() {
		return new FormGroup<CreateRobotApplicationVersionRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export interface CreateRobotRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/** Required */
		architecture: CreateRobotResponseArchitecture;

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId: string;
		tags?: TagMap;
	}
	export interface CreateRobotRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		architecture: FormControl<CreateRobotResponseArchitecture | null | undefined>,

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotRequestFormGroup() {
		return new FormGroup<CreateRobotRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			architecture: new FormControl<CreateRobotResponseArchitecture | null | undefined>(undefined, [Validators.required]),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface CreateSimulationApplicationRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: string;

		/** Required */
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
		renderingEngine?: RenderingEngine;
		tags?: TagMap;
	}
	export interface CreateSimulationApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationRequestFormGroup() {
		return new FormGroup<CreateSimulationApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface CreateSimulationApplicationVersionRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}
	export interface CreateSimulationApplicationVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationVersionRequestFormGroup() {
		return new FormGroup<CreateSimulationApplicationVersionRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export enum FailureBehavior { Fail = 0, Continue = 1 }

	export interface CreateSimulationJobRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** The output location. */
		outputLocation?: OutputLocation;

		/** The logging configuration. */
		loggingConfig?: LoggingConfig;

		/** Required */
		maxJobDurationInSeconds: number;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: string;
		failureBehavior?: SimulationJobFailureBehavior | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		robotApplications?: Array<RobotApplicationConfig>;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		simulationApplications?: Array<SimulationApplicationConfig>;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		dataSources?: Array<DataSourceConfig>;
		tags?: TagMap;

		/** If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs. */
		vpcConfig?: VPCConfig;

		/** Compute information for the simulation job. */
		compute?: Compute;
	}
	export interface CreateSimulationJobRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		maxJobDurationInSeconds: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: FormControl<string | null | undefined>,
		failureBehavior: FormControl<SimulationJobFailureBehavior | null | undefined>,
	}
	export function CreateCreateSimulationJobRequestFormGroup() {
		return new FormGroup<CreateSimulationJobRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			failureBehavior: new FormControl<SimulationJobFailureBehavior | null | undefined>(undefined),
		});

	}

	export enum SimulationJobErrorCode { InternalServiceError = 0, RobotApplicationCrash = 1, SimulationApplicationCrash = 2, BadPermissionsRobotApplication = 3, BadPermissionsSimulationApplication = 4, BadPermissionsS3Object = 5, BadPermissionsS3Output = 6, BadPermissionsCloudwatchLogs = 7, SubnetIpLimitExceeded = 8, ENILimitExceeded = 9, BadPermissionsUserCredentials = 10, InvalidBundleRobotApplication = 11, InvalidBundleSimulationApplication = 12, InvalidS3Resource = 13, LimitExceeded = 14, MismatchedEtag = 15, RobotApplicationVersionMismatchedEtag = 16, SimulationApplicationVersionMismatchedEtag = 17, ResourceNotFound = 18, RequestThrottled = 19, BatchTimedOut = 20, BatchCanceled = 21, InvalidInput = 22, WrongRegionS3Bucket = 23, WrongRegionS3Output = 24, WrongRegionRobotApplication = 25, WrongRegionSimulationApplication = 26 }

	export interface DeleteFleetRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}
	export interface DeleteFleetRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetRequestFormGroup() {
		return new FormGroup<DeleteFleetRequestFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface DeleteRobotApplicationRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;
	}
	export interface DeleteRobotApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRobotApplicationRequestFormGroup() {
		return new FormGroup<DeleteRobotApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DeleteRobotRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}
	export interface DeleteRobotRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRobotRequestFormGroup() {
		return new FormGroup<DeleteRobotRequestFormProperties>({
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface DeleteSimulationApplicationRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;
	}
	export interface DeleteSimulationApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSimulationApplicationRequestFormGroup() {
		return new FormGroup<DeleteSimulationApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DeregisterRobotRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}
	export interface DeregisterRobotRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterRobotRequestFormGroup() {
		return new FormGroup<DeregisterRobotRequestFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface DescribeDeploymentJobRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}
	export interface DescribeDeploymentJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeploymentJobRequestFormGroup() {
		return new FormGroup<DescribeDeploymentJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface DescribeFleetRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}
	export interface DescribeFleetRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetRequestFormGroup() {
		return new FormGroup<DescribeFleetRequestFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface DescribeRobotApplicationRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;
	}
	export interface DescribeRobotApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotApplicationRequestFormGroup() {
		return new FormGroup<DescribeRobotApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DescribeRobotRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}
	export interface DescribeRobotRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotRequestFormGroup() {
		return new FormGroup<DescribeRobotRequestFormProperties>({
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export enum RobotStatus { Available = 0, Registered = 1, PendingNewDeployment = 2, Deploying = 3, Failed = 4, InSync = 5, NoResponse = 6 }

	export interface DescribeSimulationApplicationRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion?: string | null;
	}
	export interface DescribeSimulationApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationApplicationRequestFormGroup() {
		return new FormGroup<DescribeSimulationApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DescribeSimulationJobBatchRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: string;
	}
	export interface DescribeSimulationJobBatchRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobBatchRequestFormGroup() {
		return new FormGroup<DescribeSimulationJobBatchRequestFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export enum SimulationJobBatchStatus { Pending = 0, InProgress = 1, Failed = 2, Completed = 3, Canceled = 4, Canceling = 5, Completing = 6, TimingOut = 7, TimedOut = 8 }

	export enum SimulationJobBatchErrorCode { InternalServiceError = 0 }

	export interface DescribeSimulationJobRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}
	export interface DescribeSimulationJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobRequestFormGroup() {
		return new FormGroup<DescribeSimulationJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface ListDeploymentJobsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListDeploymentJobsRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDeploymentJobsRequestFormGroup() {
		return new FormGroup<ListDeploymentJobsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFleetsRequest {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
		maxResults?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListFleetsRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFleetsRequestFormGroup() {
		return new FormGroup<ListFleetsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRobotApplicationsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
		maxResults?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListRobotApplicationsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRobotApplicationsRequestFormGroup() {
		return new FormGroup<ListRobotApplicationsRequestFormProperties>({
			versionQualifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRobotsRequest {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
		maxResults?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListRobotsRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRobotsRequestFormGroup() {
		return new FormGroup<ListRobotsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationApplicationsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
		maxResults?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListSimulationApplicationsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationApplicationsRequestFormGroup() {
		return new FormGroup<ListSimulationApplicationsRequestFormProperties>({
			versionQualifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobBatchesRequest {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
		maxResults?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListSimulationJobBatchesRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationJobBatchesRequestFormGroup() {
		return new FormGroup<ListSimulationJobBatchesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSimulationJobsRequest {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;
		maxResults?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		filters?: Array<Filter>;
	}
	export interface ListSimulationJobsRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationJobsRequestFormGroup() {
		return new FormGroup<ListSimulationJobsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
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

	export enum RobotDeploymentStep { Validating = 0, DownloadingExtracting = 1, ExecutingDownloadCondition = 2, ExecutingPreLaunch = 3, Launching = 4, ExecutingPostLaunch = 5, Finished = 6 }

	export interface RegisterRobotRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: string;
	}
	export interface RegisterRobotRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateRegisterRobotRequestFormGroup() {
		return new FormGroup<RegisterRobotRequestFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface RestartSimulationJobRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}
	export interface RestartSimulationJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateRestartSimulationJobRequestFormGroup() {
		return new FormGroup<RestartSimulationJobRequestFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface StartSimulationJobBatchRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken?: string | null;

		/** Information about the batch policy. */
		batchPolicy?: BatchPolicy;

		/**
		 * Required
		 * Minimum items: 1
		 */
		createSimulationJobRequests: Array<SimulationJobRequest>;
		tags?: TagMap;
	}
	export interface StartSimulationJobBatchRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartSimulationJobBatchRequestFormGroup() {
		return new FormGroup<StartSimulationJobBatchRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface SyncDeploymentJobRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: string;

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: string;
	}
	export interface SyncDeploymentJobRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateSyncDeploymentJobRequestFormGroup() {
		return new FormGroup<SyncDeploymentJobRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/** Required */
		sources: Array<SourceConfig>;

		/**
		 * Information about a robot software suite (ROS distribution).
		 * Required
		 */
		robotSoftwareSuite: RobotSoftwareSuite;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}
	export interface UpdateRobotApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRobotApplicationRequestFormGroup() {
		return new FormGroup<UpdateRobotApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export interface UpdateSimulationApplicationRequest {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: string;

		/** Required */
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
		renderingEngine?: RenderingEngine;

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}
	export interface UpdateSimulationApplicationRequestFormProperties {

		/**
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationRequestFormGroup() {
		return new FormGroup<UpdateSimulationApplicationRequestFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

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
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: string;
	}
	export interface CancelDeploymentJobPostBodyFormProperties {

		/**
		 * The deployment job ARN to cancel.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelDeploymentJobPostBodyFormGroup() {
		return new FormGroup<CancelDeploymentJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface CancelSimulationJobPostBodyFormProperties {

		/**
		 * The simulation job ARN to cancel.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateCancelSimulationJobPostBodyFormGroup() {
		return new FormGroup<CancelSimulationJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface CancelSimulationJobBatchPostBodyFormProperties {

		/**
		 * The id of the batch to cancel.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: FormControl<string | null | undefined>,
	}
	export function CreateCancelSimulationJobBatchPostBodyFormGroup() {
		return new FormGroup<CancelSimulationJobBatchPostBodyFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

	}

	export interface CreateDeploymentJobPostBody {

		/** Information about a deployment configuration. */
		deploymentConfig?: CreateDeploymentJobPostBodyDeploymentConfig;

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
		tags?: {[id: string]: string };
	}
	export interface CreateDeploymentJobPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the fleet to deploy.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the deployment job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDeploymentJobPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentJobPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentJobPostBodyDeploymentConfig {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		concurrentDeploymentPercentage?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		failureThresholdPercentage?: number | null;
		robotDeploymentTimeoutInSeconds?: number | null;

		/** Information about an S3 object. */
		downloadConditionFile?: S3Object;
	}
	export interface CreateDeploymentJobPostBodyDeploymentConfigFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		concurrentDeploymentPercentage: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		failureThresholdPercentage: FormControl<number | null | undefined>,
		robotDeploymentTimeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateDeploymentJobPostBodyDeploymentConfigFormGroup() {
		return new FormGroup<CreateDeploymentJobPostBodyDeploymentConfigFormProperties>({
			concurrentDeploymentPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			failureThresholdPercentage: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			robotDeploymentTimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

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
		tags?: {[id: string]: string };
	}
	export interface CreateFleetPostBodyFormProperties {

		/**
		 * The name of the fleet.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the fleet. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFleetPostBodyFormGroup() {
		return new FormGroup<CreateFleetPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
		tags?: {[id: string]: string };
	}
	export interface CreateRobotPostBodyFormProperties {

		/**
		 * The name for the robot.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The target architecture of the robot.
		 * Required
		 */
		architecture: FormControl<CreateRobotResponseArchitecture | null | undefined>,

		/**
		 * The Greengrass group id.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: .*
		 */
		greengrassGroupId: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the robot. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRobotPostBodyFormGroup() {
		return new FormGroup<CreateRobotPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			architecture: new FormControl<CreateRobotResponseArchitecture | null | undefined>(undefined, [Validators.required]),
			greengrassGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
		tags?: {[id: string]: string };
	}
	export interface CreateRobotApplicationPostBodyFormProperties {

		/**
		 * The name of the robot application.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the robot application. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRobotApplicationPostBodyFormGroup() {
		return new FormGroup<CreateRobotApplicationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRobotApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}
	export interface CreateRobotApplicationPostBodyRobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteName | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersion | null | undefined>,
	}
	export function CreateCreateRobotApplicationPostBodyRobotSoftwareSuiteFormGroup() {
		return new FormGroup<CreateRobotApplicationPostBodyRobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteName | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersion | null | undefined>(undefined),
		});

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
	export interface CreateRobotApplicationVersionPostBodyFormProperties {

		/**
		 * The application information for the robot application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRobotApplicationVersionPostBodyFormGroup() {
		return new FormGroup<CreateRobotApplicationVersionPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

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
		renderingEngine?: CreateSimulationApplicationPostBodyRenderingEngine;

		/** A map that contains tag keys and tag values that are attached to the simulation application. */
		tags?: {[id: string]: string };
	}
	export interface CreateSimulationApplicationPostBodyFormProperties {

		/**
		 * The name of the simulation application.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-]*
		 */
		name: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the simulation application. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodyFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationApplicationPostBodySimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteName | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: 7|9|Kinetic|Melodic|Dashing
		 */
		version?: string | null;
	}
	export interface CreateSimulationApplicationPostBodySimulationSoftwareSuiteFormProperties {
		name: FormControl<SimulationSoftwareSuiteName | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: 7|9|Kinetic|Melodic|Dashing
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodySimulationSoftwareSuiteFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodySimulationSoftwareSuiteFormProperties>({
			name: new FormControl<SimulationSoftwareSuiteName | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export interface CreateSimulationApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}
	export interface CreateSimulationApplicationPostBodyRobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteName | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersion | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodyRobotSoftwareSuiteFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodyRobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteName | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersion | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationApplicationPostBodyRenderingEngine {
		name?: RenderingEngineName | null;

		/**
		 * Max length: 4
		 * Min length: 1
		 * Pattern: 1.x
		 */
		version?: string | null;
	}
	export interface CreateSimulationApplicationPostBodyRenderingEngineFormProperties {
		name: FormControl<RenderingEngineName | null | undefined>,

		/**
		 * Max length: 4
		 * Min length: 1
		 * Pattern: 1.x
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationPostBodyRenderingEngineFormGroup() {
		return new FormGroup<CreateSimulationApplicationPostBodyRenderingEngineFormProperties>({
			name: new FormControl<RenderingEngineName | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4), Validators.minLength(1)]),
		});

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
	export interface CreateSimulationApplicationVersionPostBodyFormProperties {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationApplicationVersionPostBodyFormGroup() {
		return new FormGroup<CreateSimulationApplicationVersionPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

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
		outputLocation?: CreateSimulationJobPostBodyOutputLocation;

		/** The logging configuration. */
		loggingConfig?: CreateSimulationJobPostBodyLoggingConfig;

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
		 * Maximum items: 5
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
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.
		 * Required
		 */
		maxJobDurationInSeconds: FormControl<number | null | undefined>,

		/**
		 * The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: arn:aws:iam::\w+:role/.*
		 */
		iamRole: FormControl<string | null | undefined>,

		/** <p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Restart the simulation job in the same host instance.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl> */
		failureBehavior: FormControl<SimulationJobFailureBehavior | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the simulation job. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSimulationJobPostBodyFormGroup() {
		return new FormGroup<CreateSimulationJobPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			maxJobDurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			iamRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			failureBehavior: new FormControl<SimulationJobFailureBehavior | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSimulationJobPostBodyOutputLocation {

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Prefix?: string | null;
	}
	export interface CreateSimulationJobPostBodyOutputLocationFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 * Pattern: [a-z0-9][a-z0-9.\-]*[a-z0-9]
		 */
		s3Bucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: .*
		 */
		s3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateSimulationJobPostBodyOutputLocationFormGroup() {
		return new FormGroup<CreateSimulationJobPostBodyOutputLocationFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(63), Validators.minLength(3)]),
			s3Prefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
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

		/**
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		subnets?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
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

		/**
		 * Minimum: 1
		 * Maximum: 15
		 */
		simulationUnitLimit?: number | null;
	}
	export interface CreateSimulationJobPostBodyComputeFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 15
		 */
		simulationUnitLimit: FormControl<number | null | undefined>,
	}
	export function CreateCreateSimulationJobPostBodyComputeFormGroup() {
		return new FormGroup<CreateSimulationJobPostBodyComputeFormProperties>({
			simulationUnitLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(15)]),
		});

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
	export interface DeleteFleetPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetPostBodyFormGroup() {
		return new FormGroup<DeleteFleetPostBodyFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface DeleteRobotPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRobotPostBodyFormGroup() {
		return new FormGroup<DeleteRobotPostBodyFormProperties>({
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface DeleteRobotApplicationPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the the robot application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The version of the robot application to delete.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRobotApplicationPostBodyFormGroup() {
		return new FormGroup<DeleteRobotApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

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
	export interface DeleteSimulationApplicationPostBodyFormProperties {

		/**
		 * The application information for the simulation application to delete.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The version of the simulation application to delete.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSimulationApplicationPostBodyFormGroup() {
		return new FormGroup<DeleteSimulationApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

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
	export interface DeregisterRobotPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterRobotPostBodyFormGroup() {
		return new FormGroup<DeregisterRobotPostBodyFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface DescribeDeploymentJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the deployment job.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeploymentJobPostBodyFormGroup() {
		return new FormGroup<DescribeDeploymentJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface DescribeFleetPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetPostBodyFormGroup() {
		return new FormGroup<DescribeFleetPostBodyFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface DescribeRobotPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the robot to be described.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotPostBodyFormGroup() {
		return new FormGroup<DescribeRobotPostBodyFormProperties>({
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface DescribeRobotApplicationPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the robot application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The version of the robot application to describe.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRobotApplicationPostBodyFormGroup() {
		return new FormGroup<DescribeRobotApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

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
	export interface DescribeSimulationApplicationPostBodyFormProperties {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The version of the simulation application to describe.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: (\$LATEST)|[0-9]*
		 */
		applicationVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationApplicationPostBodyFormGroup() {
		return new FormGroup<DescribeSimulationApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			applicationVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

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
	export interface DescribeSimulationJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job to be described.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobPostBodyFormGroup() {
		return new FormGroup<DescribeSimulationJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface DescribeSimulationJobBatchPostBodyFormProperties {

		/**
		 * The id of the batch to describe.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		batch: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSimulationJobBatchPostBodyFormGroup() {
		return new FormGroup<DescribeSimulationJobBatchPostBodyFormProperties>({
			batch: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
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
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListDeploymentJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken?: string | null;

		/** When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults?: number | null;
	}
	export interface ListDeploymentJobsPostBodyFormProperties {

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListDeploymentJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,

		/** When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDeploymentJobsPostBodyFormGroup() {
		return new FormGroup<ListDeploymentJobsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

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
		filters?: Array<Filter>;
	}
	export interface ListFleetsPostBodyFormProperties {

		/**
		 * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListFleets</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,

		/** When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFleetsPostBodyFormGroup() {
		return new FormGroup<ListFleetsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

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
		filters?: Array<Filter>;
	}
	export interface ListRobotApplicationsPostBodyFormProperties {

		/**
		 * The version qualifier of the robot application.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier: FormControl<string | null | undefined>,

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListRobotApplications</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,

		/** When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRobotApplicationsPostBodyFormGroup() {
		return new FormGroup<ListRobotApplicationsPostBodyFormProperties>({
			versionQualifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

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
		filters?: Array<Filter>;
	}
	export interface ListRobotsPostBodyFormProperties {

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListRobots</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,

		/** When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRobotsPostBodyFormGroup() {
		return new FormGroup<ListRobotsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

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
		filters?: Array<Filter>;
	}
	export interface ListSimulationApplicationsPostBodyFormProperties {

		/**
		 * The version qualifier of the simulation application.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ALL
		 */
		versionQualifier: FormControl<string | null | undefined>,

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationApplications</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,

		/** When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationApplicationsPostBodyFormGroup() {
		return new FormGroup<ListSimulationApplicationsPostBodyFormProperties>({
			versionQualifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

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
		filters?: Array<Filter>;
	}
	export interface ListSimulationJobBatchesPostBodyFormProperties {

		/**
		 * The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationJobBatches</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,

		/** When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value. */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationJobBatchesPostBodyFormGroup() {
		return new FormGroup<ListSimulationJobBatchesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

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
		filters?: Array<Filter>;
	}
	export interface ListSimulationJobsPostBodyFormProperties {

		/**
		 * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListSimulationJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-\/+=]*
		 */
		nextToken: FormControl<string | null | undefined>,

		/** When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable. */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSimulationJobsPostBodyFormGroup() {
		return new FormGroup<ListSimulationJobsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
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
	export interface RegisterRobotPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the robot.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		robot: FormControl<string | null | undefined>,
	}
	export function CreateRegisterRobotPostBodyFormGroup() {
		return new FormGroup<RegisterRobotPostBodyFormProperties>({
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			robot: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface RestartSimulationJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the simulation job.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		job: FormControl<string | null | undefined>,
	}
	export function CreateRestartSimulationJobPostBodyFormGroup() {
		return new FormGroup<RestartSimulationJobPostBodyFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
		batchPolicy?: StartSimulationJobBatchPostBodyBatchPolicy;

		/**
		 * A list of simulation job requests to create in the batch.
		 * Required
		 * Minimum items: 1
		 */
		createSimulationJobRequests: Array<SimulationJobRequest>;

		/** A map that contains tag keys and tag values that are attached to the deployment job batch. */
		tags?: {[id: string]: string };
	}
	export interface StartSimulationJobBatchPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/** A map that contains tag keys and tag values that are attached to the deployment job batch. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartSimulationJobBatchPostBodyFormGroup() {
		return new FormGroup<StartSimulationJobBatchPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
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
	export interface SyncDeploymentJobPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\-=]*
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The target fleet for the synchronization.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		fleet: FormControl<string | null | undefined>,
	}
	export function CreateSyncDeploymentJobPostBodyFormGroup() {
		return new FormGroup<SyncDeploymentJobPostBodyFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
		});

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
	export interface UpdateRobotApplicationPostBodyFormProperties {

		/**
		 * The application information for the robot application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The revision id for the robot application.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRobotApplicationPostBodyFormGroup() {
		return new FormGroup<UpdateRobotApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export interface UpdateRobotApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}
	export interface UpdateRobotApplicationPostBodyRobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteName | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersion | null | undefined>,
	}
	export function CreateUpdateRobotApplicationPostBodyRobotSoftwareSuiteFormGroup() {
		return new FormGroup<UpdateRobotApplicationPostBodyRobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteName | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersion | null | undefined>(undefined),
		});

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
		renderingEngine?: UpdateSimulationApplicationPostBodyRenderingEngine;

		/**
		 * The revision id for the robot application.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId?: string | null;
	}
	export interface UpdateSimulationApplicationPostBodyFormProperties {

		/**
		 * The application information for the simulation application.
		 * Required
		 * Max length: 1224
		 * Min length: 1
		 * Pattern: arn:.*
		 */
		application: FormControl<string | null | undefined>,

		/**
		 * The revision id for the robot application.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.\-]*
		 */
		currentRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodyFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodyFormProperties>({
			application: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1224), Validators.minLength(1)]),
			currentRevisionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40), Validators.minLength(1)]),
		});

	}

	export interface UpdateSimulationApplicationPostBodySimulationSoftwareSuite {
		name?: SimulationSoftwareSuiteName | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: 7|9|Kinetic|Melodic|Dashing
		 */
		version?: string | null;
	}
	export interface UpdateSimulationApplicationPostBodySimulationSoftwareSuiteFormProperties {
		name: FormControl<SimulationSoftwareSuiteName | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 * Pattern: 7|9|Kinetic|Melodic|Dashing
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodySimulationSoftwareSuiteFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodySimulationSoftwareSuiteFormProperties>({
			name: new FormControl<SimulationSoftwareSuiteName | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export interface UpdateSimulationApplicationPostBodyRobotSoftwareSuite {
		name?: RobotSoftwareSuiteName | null;
		version?: RobotSoftwareSuiteVersion | null;
	}
	export interface UpdateSimulationApplicationPostBodyRobotSoftwareSuiteFormProperties {
		name: FormControl<RobotSoftwareSuiteName | null | undefined>,
		version: FormControl<RobotSoftwareSuiteVersion | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodyRobotSoftwareSuiteFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodyRobotSoftwareSuiteFormProperties>({
			name: new FormControl<RobotSoftwareSuiteName | null | undefined>(undefined),
			version: new FormControl<RobotSoftwareSuiteVersion | null | undefined>(undefined),
		});

	}

	export interface UpdateSimulationApplicationPostBodyRenderingEngine {
		name?: RenderingEngineName | null;

		/**
		 * Max length: 4
		 * Min length: 1
		 * Pattern: 1.x
		 */
		version?: string | null;
	}
	export interface UpdateSimulationApplicationPostBodyRenderingEngineFormProperties {
		name: FormControl<RenderingEngineName | null | undefined>,

		/**
		 * Max length: 4
		 * Min length: 1
		 * Pattern: 1.x
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSimulationApplicationPostBodyRenderingEngineFormGroup() {
		return new FormGroup<UpdateSimulationApplicationPostBodyRenderingEngineFormProperties>({
			name: new FormControl<RenderingEngineName | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4), Validators.minLength(1)]),
		});

	}

}

