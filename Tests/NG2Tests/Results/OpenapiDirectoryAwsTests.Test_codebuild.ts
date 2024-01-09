import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchDeleteBuildsOutput {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		buildsDeleted?: Array<string>;
		buildsNotDeleted?: Array<BuildNotDeleted>;
	}
	export interface BatchDeleteBuildsOutputFormProperties {
	}
	export function CreateBatchDeleteBuildsOutputFormGroup() {
		return new FormGroup<BatchDeleteBuildsOutputFormProperties>({
		});

	}


	/** Information about a build that could not be successfully deleted. */
	export interface BuildNotDeleted {

		/** Min length: 1 */
		id?: string | null;
		statusCode?: string | null;
	}

	/** Information about a build that could not be successfully deleted. */
	export interface BuildNotDeletedFormProperties {

		/** Min length: 1 */
		id: FormControl<string | null | undefined>,
		statusCode: FormControl<string | null | undefined>,
	}
	export function CreateBuildNotDeletedFormGroup() {
		return new FormGroup<BuildNotDeletedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			statusCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteBuildsInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ids: Array<string>;
	}
	export interface BatchDeleteBuildsInputFormProperties {
	}
	export function CreateBatchDeleteBuildsInputFormGroup() {
		return new FormGroup<BatchDeleteBuildsInputFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface BatchGetBuildsOutput {
		builds?: Array<Build>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		buildsNotFound?: Array<string>;
	}
	export interface BatchGetBuildsOutputFormProperties {
	}
	export function CreateBatchGetBuildsOutputFormGroup() {
		return new FormGroup<BatchGetBuildsOutputFormProperties>({
		});

	}


	/** Information about a build. */
	export interface Build {

		/** Min length: 1 */
		id?: string | null;

		/** Min length: 1 */
		arn?: string | null;
		buildNumber?: number | null;
		startTime?: Date | null;
		endTime?: Date | null;
		currentPhase?: string | null;
		buildStatus?: BuildBuildStatus | null;

		/** Min length: 1 */
		sourceVersion?: string | null;

		/** Min length: 1 */
		resolvedSourceVersion?: string | null;

		/** Min length: 1 */
		projectName?: string | null;
		phases?: Array<BuildPhase>;

		/** Information about the build input source code for the build project. */
		source?: ProjectSource;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySources?: Array<ProjectSource>;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/** Information about build output artifacts. */
		artifacts?: BuildArtifacts;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondaryArtifacts?: Array<BuildArtifacts>;

		/** Information about the cache for the build project. */
		cache?: ProjectCache;

		/** Information about the build environment of the build project. */
		environment?: ProjectEnvironment;

		/** Min length: 1 */
		serviceRole?: string | null;

		/** Information about build logs in Amazon CloudWatch Logs. */
		logs?: LogsLocation;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		buildComplete?: boolean | null;
		initiator?: string | null;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig;

		/** Describes a network interface. */
		networkInterface?: NetworkInterface;

		/** Min length: 1 */
		encryptionKey?: string | null;
		exportedEnvironmentVariables?: Array<ExportedEnvironmentVariable>;
		reportArns?: Array<string>;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
	}

	/** Information about a build. */
	export interface BuildFormProperties {

		/** Min length: 1 */
		id: FormControl<string | null | undefined>,

		/** Min length: 1 */
		arn: FormControl<string | null | undefined>,
		buildNumber: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		currentPhase: FormControl<string | null | undefined>,
		buildStatus: FormControl<BuildBuildStatus | null | undefined>,

		/** Min length: 1 */
		sourceVersion: FormControl<string | null | undefined>,

		/** Min length: 1 */
		resolvedSourceVersion: FormControl<string | null | undefined>,

		/** Min length: 1 */
		projectName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		serviceRole: FormControl<string | null | undefined>,
		timeoutInMinutes: FormControl<number | null | undefined>,
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,
		buildComplete: FormControl<boolean | null | undefined>,
		initiator: FormControl<string | null | undefined>,

		/** Min length: 1 */
		encryptionKey: FormControl<string | null | undefined>,
	}
	export function CreateBuildFormGroup() {
		return new FormGroup<BuildFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			buildNumber: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			currentPhase: new FormControl<string | null | undefined>(undefined),
			buildStatus: new FormControl<BuildBuildStatus | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			resolvedSourceVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			serviceRole: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			buildComplete: new FormControl<boolean | null | undefined>(undefined),
			initiator: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export enum BuildBuildStatus { SUCCEEDED = 0, FAILED = 1, FAULT = 2, TIMED_OUT = 3, IN_PROGRESS = 4, STOPPED = 5 }


	/** Information about a stage for a build. */
	export interface BuildPhase {
		phaseType?: BuildPhasePhaseType | null;
		phaseStatus?: BuildBuildStatus | null;
		startTime?: Date | null;
		endTime?: Date | null;
		durationInSeconds?: number | null;
		contexts?: Array<PhaseContext>;
	}

	/** Information about a stage for a build. */
	export interface BuildPhaseFormProperties {
		phaseType: FormControl<BuildPhasePhaseType | null | undefined>,
		phaseStatus: FormControl<BuildBuildStatus | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		durationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateBuildPhaseFormGroup() {
		return new FormGroup<BuildPhaseFormProperties>({
			phaseType: new FormControl<BuildPhasePhaseType | null | undefined>(undefined),
			phaseStatus: new FormControl<BuildBuildStatus | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BuildPhasePhaseType { SUBMITTED = 0, QUEUED = 1, PROVISIONING = 2, DOWNLOAD_SOURCE = 3, INSTALL = 4, PRE_BUILD = 5, BUILD = 6, POST_BUILD = 7, UPLOAD_ARTIFACTS = 8, FINALIZING = 9, COMPLETED = 10 }


	/** Additional information about a build phase that has an error. You can use this information for troubleshooting. */
	export interface PhaseContext {
		statusCode?: string | null;
		message?: string | null;
	}

	/** Additional information about a build phase that has an error. You can use this information for troubleshooting. */
	export interface PhaseContextFormProperties {
		statusCode: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreatePhaseContextFormGroup() {
		return new FormGroup<PhaseContextFormProperties>({
			statusCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the build input source code for the build project. */
	export interface ProjectSource {

		/** Required */
		type: ProjectSourceType;
		location?: string | null;

		/** Minimum: 0 */
		gitCloneDepth?: number | null;

		/** Information about the Git submodules configuration for an AWS CodeBuild build project. */
		gitSubmodulesConfig?: GitSubmodulesConfig;
		buildspec?: string | null;

		/** <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
		auth?: SourceAuth;
		reportBuildStatus?: boolean | null;
		insecureSsl?: boolean | null;
		sourceIdentifier?: string | null;
	}

	/** Information about the build input source code for the build project. */
	export interface ProjectSourceFormProperties {

		/** Required */
		type: FormControl<ProjectSourceType | null | undefined>,
		location: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		gitCloneDepth: FormControl<number | null | undefined>,
		buildspec: FormControl<string | null | undefined>,
		reportBuildStatus: FormControl<boolean | null | undefined>,
		insecureSsl: FormControl<boolean | null | undefined>,
		sourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateProjectSourceFormGroup() {
		return new FormGroup<ProjectSourceFormProperties>({
			type: new FormControl<ProjectSourceType | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			gitCloneDepth: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			buildspec: new FormControl<string | null | undefined>(undefined),
			reportBuildStatus: new FormControl<boolean | null | undefined>(undefined),
			insecureSsl: new FormControl<boolean | null | undefined>(undefined),
			sourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectSourceType { CODECOMMIT = 0, CODEPIPELINE = 1, GITHUB = 2, S3 = 3, BITBUCKET = 4, GITHUB_ENTERPRISE = 5, NO_SOURCE = 6 }


	/**  Information about the Git submodules configuration for an AWS CodeBuild build project.  */
	export interface GitSubmodulesConfig {

		/** Required */
		fetchSubmodules: boolean;
	}

	/**  Information about the Git submodules configuration for an AWS CodeBuild build project.  */
	export interface GitSubmodulesConfigFormProperties {

		/** Required */
		fetchSubmodules: FormControl<boolean | null | undefined>,
	}
	export function CreateGitSubmodulesConfigFormGroup() {
		return new FormGroup<GitSubmodulesConfigFormProperties>({
			fetchSubmodules: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
	export interface SourceAuth {

		/** Required */
		type: SourceAuthType;
		resource?: string | null;
	}

	/** <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
	export interface SourceAuthFormProperties {

		/** Required */
		type: FormControl<SourceAuthType | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateSourceAuthFormGroup() {
		return new FormGroup<SourceAuthFormProperties>({
			type: new FormControl<SourceAuthType | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceAuthType { OAUTH = 0 }


	/**  A source identifier and its corresponding version.  */
	export interface ProjectSourceVersion {

		/** Required */
		sourceIdentifier: string;

		/** Required */
		sourceVersion: string;
	}

	/**  A source identifier and its corresponding version.  */
	export interface ProjectSourceVersionFormProperties {

		/** Required */
		sourceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		sourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateProjectSourceVersionFormGroup() {
		return new FormGroup<ProjectSourceVersionFormProperties>({
			sourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about build output artifacts. */
	export interface BuildArtifacts {
		location?: string | null;
		sha256sum?: string | null;
		md5sum?: string | null;
		overrideArtifactName?: boolean | null;
		encryptionDisabled?: boolean | null;
		artifactIdentifier?: string | null;
	}

	/** Information about build output artifacts. */
	export interface BuildArtifactsFormProperties {
		location: FormControl<string | null | undefined>,
		sha256sum: FormControl<string | null | undefined>,
		md5sum: FormControl<string | null | undefined>,
		overrideArtifactName: FormControl<boolean | null | undefined>,
		encryptionDisabled: FormControl<boolean | null | undefined>,
		artifactIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBuildArtifactsFormGroup() {
		return new FormGroup<BuildArtifactsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			sha256sum: new FormControl<string | null | undefined>(undefined),
			md5sum: new FormControl<string | null | undefined>(undefined),
			overrideArtifactName: new FormControl<boolean | null | undefined>(undefined),
			encryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
			artifactIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the cache for the build project. */
	export interface ProjectCache {

		/** Required */
		type: ProjectCacheType;
		location?: string | null;
		modes?: Array<CacheMode>;
	}

	/** Information about the cache for the build project. */
	export interface ProjectCacheFormProperties {

		/** Required */
		type: FormControl<ProjectCacheType | null | undefined>,
		location: FormControl<string | null | undefined>,
	}
	export function CreateProjectCacheFormGroup() {
		return new FormGroup<ProjectCacheFormProperties>({
			type: new FormControl<ProjectCacheType | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectCacheType { NO_CACHE = 0, S3 = 1, LOCAL = 2 }

	export enum CacheMode { LOCAL_DOCKER_LAYER_CACHE = 0, LOCAL_SOURCE_CACHE = 1, LOCAL_CUSTOM_CACHE = 2 }


	/** Information about the build environment of the build project. */
	export interface ProjectEnvironment {

		/** Required */
		type: ProjectEnvironmentType;

		/**
		 * Required
		 * Min length: 1
		 */
		image: string;

		/** Required */
		computeType: ProjectEnvironmentComputeType;
		environmentVariables?: Array<EnvironmentVariable>;
		privilegedMode?: boolean | null;
		certificate?: string | null;

		/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
		registryCredential?: RegistryCredential;
		imagePullCredentialsType?: ProjectEnvironmentImagePullCredentialsType | null;
	}

	/** Information about the build environment of the build project. */
	export interface ProjectEnvironmentFormProperties {

		/** Required */
		type: FormControl<ProjectEnvironmentType | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		image: FormControl<string | null | undefined>,

		/** Required */
		computeType: FormControl<ProjectEnvironmentComputeType | null | undefined>,
		privilegedMode: FormControl<boolean | null | undefined>,
		certificate: FormControl<string | null | undefined>,
		imagePullCredentialsType: FormControl<ProjectEnvironmentImagePullCredentialsType | null | undefined>,
	}
	export function CreateProjectEnvironmentFormGroup() {
		return new FormGroup<ProjectEnvironmentFormProperties>({
			type: new FormControl<ProjectEnvironmentType | null | undefined>(undefined, [Validators.required]),
			image: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			computeType: new FormControl<ProjectEnvironmentComputeType | null | undefined>(undefined, [Validators.required]),
			privilegedMode: new FormControl<boolean | null | undefined>(undefined),
			certificate: new FormControl<string | null | undefined>(undefined),
			imagePullCredentialsType: new FormControl<ProjectEnvironmentImagePullCredentialsType | null | undefined>(undefined),
		});

	}

	export enum ProjectEnvironmentType { WINDOWS_CONTAINER = 0, LINUX_CONTAINER = 1, LINUX_GPU_CONTAINER = 2, ARM_CONTAINER = 3 }

	export enum ProjectEnvironmentComputeType { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2, BUILD_GENERAL1_2XLARGE = 3 }


	/** Information about an environment variable for a build project or a build. */
	export interface EnvironmentVariable {

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Required */
		value: string;
		type?: EnvironmentVariableType | null;
	}

	/** Information about an environment variable for a build project or a build. */
	export interface EnvironmentVariableFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
		type: FormControl<EnvironmentVariableType | null | undefined>,
	}
	export function CreateEnvironmentVariableFormGroup() {
		return new FormGroup<EnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EnvironmentVariableType | null | undefined>(undefined),
		});

	}

	export enum EnvironmentVariableType { PLAINTEXT = 0, PARAMETER_STORE = 1, SECRETS_MANAGER = 2 }


	/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
	export interface RegistryCredential {

		/**
		 * Required
		 * Min length: 1
		 */
		credential: string;

		/** Required */
		credentialProvider: RegistryCredentialCredentialProvider;
	}

	/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
	export interface RegistryCredentialFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		credential: FormControl<string | null | undefined>,

		/** Required */
		credentialProvider: FormControl<RegistryCredentialCredentialProvider | null | undefined>,
	}
	export function CreateRegistryCredentialFormGroup() {
		return new FormGroup<RegistryCredentialFormProperties>({
			credential: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			credentialProvider: new FormControl<RegistryCredentialCredentialProvider | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegistryCredentialCredentialProvider { SECRETS_MANAGER = 0 }

	export enum ProjectEnvironmentImagePullCredentialsType { CODEBUILD = 0, SERVICE_ROLE = 1 }


	/** Information about build logs in Amazon CloudWatch Logs. */
	export interface LogsLocation {
		groupName?: string | null;
		streamName?: string | null;
		deepLink?: string | null;
		s3DeepLink?: string | null;
		cloudWatchLogsArn?: string | null;
		s3LogsArn?: string | null;

		/** Information about Amazon CloudWatch Logs for a build project. */
		cloudWatchLogs?: CloudWatchLogsConfig;

		/** Information about S3 logs for a build project. */
		s3Logs?: S3LogsConfig;
	}

	/** Information about build logs in Amazon CloudWatch Logs. */
	export interface LogsLocationFormProperties {
		groupName: FormControl<string | null | undefined>,
		streamName: FormControl<string | null | undefined>,
		deepLink: FormControl<string | null | undefined>,
		s3DeepLink: FormControl<string | null | undefined>,
		cloudWatchLogsArn: FormControl<string | null | undefined>,
		s3LogsArn: FormControl<string | null | undefined>,
	}
	export function CreateLogsLocationFormGroup() {
		return new FormGroup<LogsLocationFormProperties>({
			groupName: new FormControl<string | null | undefined>(undefined),
			streamName: new FormControl<string | null | undefined>(undefined),
			deepLink: new FormControl<string | null | undefined>(undefined),
			s3DeepLink: new FormControl<string | null | undefined>(undefined),
			cloudWatchLogsArn: new FormControl<string | null | undefined>(undefined),
			s3LogsArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about Amazon CloudWatch Logs for a build project.  */
	export interface CloudWatchLogsConfig {

		/** Required */
		status: CloudWatchLogsConfigStatus;
		groupName?: string | null;
		streamName?: string | null;
	}

	/**  Information about Amazon CloudWatch Logs for a build project.  */
	export interface CloudWatchLogsConfigFormProperties {

		/** Required */
		status: FormControl<CloudWatchLogsConfigStatus | null | undefined>,
		groupName: FormControl<string | null | undefined>,
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsConfigFormGroup() {
		return new FormGroup<CloudWatchLogsConfigFormProperties>({
			status: new FormControl<CloudWatchLogsConfigStatus | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined),
			streamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudWatchLogsConfigStatus { ENABLED = 0, DISABLED = 1 }


	/**  Information about S3 logs for a build project.  */
	export interface S3LogsConfig {

		/** Required */
		status: CloudWatchLogsConfigStatus;
		location?: string | null;
		encryptionDisabled?: boolean | null;
	}

	/**  Information about S3 logs for a build project.  */
	export interface S3LogsConfigFormProperties {

		/** Required */
		status: FormControl<CloudWatchLogsConfigStatus | null | undefined>,
		location: FormControl<string | null | undefined>,
		encryptionDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateS3LogsConfigFormGroup() {
		return new FormGroup<S3LogsConfigFormProperties>({
			status: new FormControl<CloudWatchLogsConfigStatus | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			encryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the VPC configuration that AWS CodeBuild accesses. */
	export interface VpcConfig {

		/** Min length: 1 */
		vpcId?: string | null;

		/** Maximum items: 16 */
		subnets?: Array<string>;

		/** Maximum items: 5 */
		securityGroupIds?: Array<string>;
	}

	/** Information about the VPC configuration that AWS CodeBuild accesses. */
	export interface VpcConfigFormProperties {

		/** Min length: 1 */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Describes a network interface. */
	export interface NetworkInterface {

		/** Min length: 1 */
		subnetId?: string | null;

		/** Min length: 1 */
		networkInterfaceId?: string | null;
	}

	/** Describes a network interface. */
	export interface NetworkInterfaceFormProperties {

		/** Min length: 1 */
		subnetId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		networkInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			networkInterfaceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/**  Information about an exported environment variable.  */
	export interface ExportedEnvironmentVariable {

		/** Min length: 1 */
		name?: string | null;
		value?: string | null;
	}

	/**  Information about an exported environment variable.  */
	export interface ExportedEnvironmentVariableFormProperties {

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateExportedEnvironmentVariableFormGroup() {
		return new FormGroup<ExportedEnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>  */
	export interface ProjectFileSystemLocation {
		type?: ProjectFileSystemLocationType | null;
		location?: string | null;
		mountPoint?: string | null;
		identifier?: string | null;
		mountOptions?: string | null;
	}

	/**  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>  */
	export interface ProjectFileSystemLocationFormProperties {
		type: FormControl<ProjectFileSystemLocationType | null | undefined>,
		location: FormControl<string | null | undefined>,
		mountPoint: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		mountOptions: FormControl<string | null | undefined>,
	}
	export function CreateProjectFileSystemLocationFormGroup() {
		return new FormGroup<ProjectFileSystemLocationFormProperties>({
			type: new FormControl<ProjectFileSystemLocationType | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			mountPoint: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			mountOptions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectFileSystemLocationType { EFS = 0 }

	export interface BatchGetBuildsInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ids: Array<string>;
	}
	export interface BatchGetBuildsInputFormProperties {
	}
	export function CreateBatchGetBuildsInputFormGroup() {
		return new FormGroup<BatchGetBuildsInputFormProperties>({
		});

	}

	export interface BatchGetProjectsOutput {
		projects?: Array<Project>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		projectsNotFound?: Array<string>;
	}
	export interface BatchGetProjectsOutputFormProperties {
	}
	export function CreateBatchGetProjectsOutputFormGroup() {
		return new FormGroup<BatchGetProjectsOutputFormProperties>({
		});

	}


	/** Information about a build project. */
	export interface Project {

		/**
		 * Max length: 255
		 * Min length: 2
		 */
		name?: string | null;
		arn?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		description?: string | null;

		/** Information about the build input source code for the build project. */
		source?: ProjectSource;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/** Information about the build output artifacts for the build project. */
		artifacts?: ProjectArtifacts;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondaryArtifacts?: Array<ProjectArtifacts>;

		/** Information about the cache for the build project. */
		cache?: ProjectCache;

		/** Information about the build environment of the build project. */
		environment?: ProjectEnvironment;

		/** Min length: 1 */
		serviceRole?: string | null;

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		timeoutInMinutes?: number | null;

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		queuedTimeoutInMinutes?: number | null;

		/** Min length: 1 */
		encryptionKey?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
		created?: Date | null;
		lastModified?: Date | null;

		/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig;

		/** Information about the build badge for the build project. */
		badge?: ProjectBadge;

		/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
	}

	/** Information about a build project. */
	export interface ProjectFormProperties {

		/**
		 * Max length: 255
		 * Min length: 2
		 */
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,

		/** Min length: 1 */
		serviceRole: FormControl<string | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		timeoutInMinutes: FormControl<number | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Min length: 1 */
		encryptionKey: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(2), Validators.pattern('[A-Za-z0-9][A-Za-z0-9\-_]{1,254}')]),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(0)]),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(480)]),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(480)]),
			encryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			created: new FormControl<Date | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the build output artifacts for the build project. */
	export interface ProjectArtifacts {

		/** Required */
		type: ProjectArtifactsType;
		location?: string | null;
		path?: string | null;
		namespaceType?: ProjectArtifactsNamespaceType | null;
		name?: string | null;
		packaging?: ProjectArtifactsPackaging | null;
		overrideArtifactName?: boolean | null;
		encryptionDisabled?: boolean | null;
		artifactIdentifier?: string | null;
	}

	/** Information about the build output artifacts for the build project. */
	export interface ProjectArtifactsFormProperties {

		/** Required */
		type: FormControl<ProjectArtifactsType | null | undefined>,
		location: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		namespaceType: FormControl<ProjectArtifactsNamespaceType | null | undefined>,
		name: FormControl<string | null | undefined>,
		packaging: FormControl<ProjectArtifactsPackaging | null | undefined>,
		overrideArtifactName: FormControl<boolean | null | undefined>,
		encryptionDisabled: FormControl<boolean | null | undefined>,
		artifactIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateProjectArtifactsFormGroup() {
		return new FormGroup<ProjectArtifactsFormProperties>({
			type: new FormControl<ProjectArtifactsType | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			namespaceType: new FormControl<ProjectArtifactsNamespaceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packaging: new FormControl<ProjectArtifactsPackaging | null | undefined>(undefined),
			overrideArtifactName: new FormControl<boolean | null | undefined>(undefined),
			encryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
			artifactIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectArtifactsType { CODEPIPELINE = 0, S3 = 1, NO_ARTIFACTS = 2 }

	export enum ProjectArtifactsNamespaceType { NONE = 0, BUILD_ID = 1 }

	export enum ProjectArtifactsPackaging { NONE = 0, ZIP = 1 }


	/** <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p> */
	export interface Tag {

		/**
		 * Max length: 127
		 * Min length: 1
		 */
		key?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		value?: string | null;
	}

	/** <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p> */
	export interface TagFormProperties {

		/**
		 * Max length: 127
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(127), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=@+\-]*)$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(0), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=@+\-]*)$')]),
		});

	}


	/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
	export interface Webhook {

		/** Min length: 1 */
		url?: string | null;

		/** Min length: 1 */
		payloadUrl?: string | null;

		/** Min length: 1 */
		secret?: string | null;
		branchFilter?: string | null;
		filterGroups?: Array<Array<WebhookFilter>>;
		lastModifiedSecret?: Date | null;
	}

	/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
	export interface WebhookFormProperties {

		/** Min length: 1 */
		url: FormControl<string | null | undefined>,

		/** Min length: 1 */
		payloadUrl: FormControl<string | null | undefined>,

		/** Min length: 1 */
		secret: FormControl<string | null | undefined>,
		branchFilter: FormControl<string | null | undefined>,
		lastModifiedSecret: FormControl<Date | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			payloadUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			secret: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			branchFilter: new FormControl<string | null | undefined>(undefined),
			lastModifiedSecret: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  A filter used to determine which webhooks trigger a build.  */
	export interface WebhookFilter {

		/** Required */
		type: WebhookFilterType;

		/** Required */
		pattern: string;
		excludeMatchedPattern?: boolean | null;
	}

	/**  A filter used to determine which webhooks trigger a build.  */
	export interface WebhookFilterFormProperties {

		/** Required */
		type: FormControl<WebhookFilterType | null | undefined>,

		/** Required */
		pattern: FormControl<string | null | undefined>,
		excludeMatchedPattern: FormControl<boolean | null | undefined>,
	}
	export function CreateWebhookFilterFormGroup() {
		return new FormGroup<WebhookFilterFormProperties>({
			type: new FormControl<WebhookFilterType | null | undefined>(undefined, [Validators.required]),
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			excludeMatchedPattern: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum WebhookFilterType { EVENT = 0, BASE_REF = 1, HEAD_REF = 2, ACTOR_ACCOUNT_ID = 3, FILE_PATH = 4, COMMIT_MESSAGE = 5 }


	/** Information about the build badge for the build project. */
	export interface ProjectBadge {
		badgeEnabled?: boolean | null;
		badgeRequestUrl?: string | null;
	}

	/** Information about the build badge for the build project. */
	export interface ProjectBadgeFormProperties {
		badgeEnabled: FormControl<boolean | null | undefined>,
		badgeRequestUrl: FormControl<string | null | undefined>,
	}
	export function CreateProjectBadgeFormGroup() {
		return new FormGroup<ProjectBadgeFormProperties>({
			badgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			badgeRequestUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both.  */
	export interface LogsConfig {

		/** Information about Amazon CloudWatch Logs for a build project. */
		cloudWatchLogs?: CloudWatchLogsConfig;

		/** Information about S3 logs for a build project. */
		s3Logs?: S3LogsConfig;
	}

	/**  Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both.  */
	export interface LogsConfigFormProperties {
	}
	export function CreateLogsConfigFormGroup() {
		return new FormGroup<LogsConfigFormProperties>({
		});

	}

	export interface BatchGetProjectsInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		names: Array<string>;
	}
	export interface BatchGetProjectsInputFormProperties {
	}
	export function CreateBatchGetProjectsInputFormGroup() {
		return new FormGroup<BatchGetProjectsInputFormProperties>({
		});

	}

	export interface BatchGetReportGroupsOutput {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reportGroups?: Array<ReportGroup>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reportGroupsNotFound?: Array<string>;
	}
	export interface BatchGetReportGroupsOutputFormProperties {
	}
	export function CreateBatchGetReportGroupsOutputFormGroup() {
		return new FormGroup<BatchGetReportGroupsOutputFormProperties>({
		});

	}


	/**  A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.  */
	export interface ReportGroup {

		/** Min length: 1 */
		arn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 2
		 */
		name?: string | null;
		type?: ReportGroupType | null;

		/** Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig;
		created?: Date | null;
		lastModified?: Date | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	/**  A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.  */
	export interface ReportGroupFormProperties {

		/** Min length: 1 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 2
		 */
		name: FormControl<string | null | undefined>,
		type: FormControl<ReportGroupType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateReportGroupFormGroup() {
		return new FormGroup<ReportGroupFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(2)]),
			type: new FormControl<ReportGroupType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReportGroupType { TEST = 0 }


	/**  Information about the location where the run of a report is exported.  */
	export interface ReportExportConfig {
		exportConfigType?: ReportExportConfigExportConfigType | null;

		/** Information about the S3 bucket where the raw data of a report are exported. */
		s3Destination?: S3ReportExportConfig;
	}

	/**  Information about the location where the run of a report is exported.  */
	export interface ReportExportConfigFormProperties {
		exportConfigType: FormControl<ReportExportConfigExportConfigType | null | undefined>,
	}
	export function CreateReportExportConfigFormGroup() {
		return new FormGroup<ReportExportConfigFormProperties>({
			exportConfigType: new FormControl<ReportExportConfigExportConfigType | null | undefined>(undefined),
		});

	}

	export enum ReportExportConfigExportConfigType { S3 = 0, NO_EXPORT = 1 }


	/**  Information about the S3 bucket where the raw data of a report are exported.  */
	export interface S3ReportExportConfig {

		/** Min length: 1 */
		bucket?: string | null;
		path?: string | null;
		packaging?: S3ReportExportConfigPackaging | null;

		/** Min length: 1 */
		encryptionKey?: string | null;
		encryptionDisabled?: boolean | null;
	}

	/**  Information about the S3 bucket where the raw data of a report are exported.  */
	export interface S3ReportExportConfigFormProperties {

		/** Min length: 1 */
		bucket: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		packaging: FormControl<S3ReportExportConfigPackaging | null | undefined>,

		/** Min length: 1 */
		encryptionKey: FormControl<string | null | undefined>,
		encryptionDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateS3ReportExportConfigFormGroup() {
		return new FormGroup<S3ReportExportConfigFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			path: new FormControl<string | null | undefined>(undefined),
			packaging: new FormControl<S3ReportExportConfigPackaging | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			encryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum S3ReportExportConfigPackaging { ZIP = 0, NONE = 1 }

	export interface BatchGetReportGroupsInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reportGroupArns: Array<string>;
	}
	export interface BatchGetReportGroupsInputFormProperties {
	}
	export function CreateBatchGetReportGroupsInputFormGroup() {
		return new FormGroup<BatchGetReportGroupsInputFormProperties>({
		});

	}

	export interface BatchGetReportsOutput {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reports?: Array<Report>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reportsNotFound?: Array<string>;
	}
	export interface BatchGetReportsOutputFormProperties {
	}
	export function CreateBatchGetReportsOutputFormGroup() {
		return new FormGroup<BatchGetReportsOutputFormProperties>({
		});

	}


	/**  Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.  */
	export interface Report {

		/** Min length: 1 */
		arn?: string | null;
		type?: ReportGroupType | null;
		name?: string | null;

		/** Min length: 1 */
		reportGroupArn?: string | null;
		executionId?: string | null;
		status?: ReportStatus | null;
		created?: Date | null;
		expired?: Date | null;

		/** Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig;
		truncated?: boolean | null;

		/** Information about a test report. */
		testSummary?: TestReportSummary;
	}

	/**  Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.  */
	export interface ReportFormProperties {

		/** Min length: 1 */
		arn: FormControl<string | null | undefined>,
		type: FormControl<ReportGroupType | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		reportGroupArn: FormControl<string | null | undefined>,
		executionId: FormControl<string | null | undefined>,
		status: FormControl<ReportStatus | null | undefined>,
		created: FormControl<Date | null | undefined>,
		expired: FormControl<Date | null | undefined>,
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			type: new FormControl<ReportGroupType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reportGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			executionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReportStatus | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			expired: new FormControl<Date | null | undefined>(undefined),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ReportStatus { GENERATING = 0, SUCCEEDED = 1, FAILED = 2, INCOMPLETE = 3, DELETING = 4 }


	/**  Information about a test report.  */
	export interface TestReportSummary {

		/** Required */
		total: number;

		/** Required */
		statusCounts: ReportStatusCounts;

		/** Required */
		durationInNanoSeconds: number;
	}

	/**  Information about a test report.  */
	export interface TestReportSummaryFormProperties {

		/** Required */
		total: FormControl<number | null | undefined>,

		/** Required */
		durationInNanoSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTestReportSummaryFormGroup() {
		return new FormGroup<TestReportSummaryFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			durationInNanoSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReportStatusCounts {
	}
	export interface ReportStatusCountsFormProperties {
	}
	export function CreateReportStatusCountsFormGroup() {
		return new FormGroup<ReportStatusCountsFormProperties>({
		});

	}

	export interface BatchGetReportsInput {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reportArns: Array<string>;
	}
	export interface BatchGetReportsInputFormProperties {
	}
	export function CreateBatchGetReportsInputFormGroup() {
		return new FormGroup<BatchGetReportsInputFormProperties>({
		});

	}

	export interface CreateProjectOutput {

		/** Information about a build project. */
		project?: Project;
	}
	export interface CreateProjectOutputFormProperties {
	}
	export function CreateCreateProjectOutputFormGroup() {
		return new FormGroup<CreateProjectOutputFormProperties>({
		});

	}

	export interface CreateProjectInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 2
		 */
		name: string;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Information about the build input source code for the build project.
		 * Required
		 */
		source: ProjectSource;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/**
		 * Information about the build output artifacts for the build project.
		 * Required
		 */
		artifacts: ProjectArtifacts;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondaryArtifacts?: Array<ProjectArtifacts>;

		/** Information about the cache for the build project. */
		cache?: ProjectCache;

		/**
		 * Information about the build environment of the build project.
		 * Required
		 */
		environment: ProjectEnvironment;

		/**
		 * Required
		 * Min length: 1
		 */
		serviceRole: string;

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		timeoutInMinutes?: number | null;

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		queuedTimeoutInMinutes?: number | null;

		/** Min length: 1 */
		encryptionKey?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig;
		badgeEnabled?: boolean | null;

		/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
	}
	export interface CreateProjectInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 2
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		serviceRole: FormControl<string | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		timeoutInMinutes: FormControl<number | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Min length: 1 */
		encryptionKey: FormControl<string | null | undefined>,
		badgeEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProjectInputFormGroup() {
		return new FormGroup<CreateProjectInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(2), Validators.pattern('[A-Za-z0-9][A-Za-z0-9\-_]{1,254}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(0)]),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(480)]),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(480)]),
			encryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			badgeEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface AccountLimitExceededException {
	}
	export interface AccountLimitExceededExceptionFormProperties {
	}
	export function CreateAccountLimitExceededExceptionFormGroup() {
		return new FormGroup<AccountLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateReportGroupOutput {

		/** A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. */
		reportGroup?: ReportGroup;
	}
	export interface CreateReportGroupOutputFormProperties {
	}
	export function CreateCreateReportGroupOutputFormGroup() {
		return new FormGroup<CreateReportGroupOutputFormProperties>({
		});

	}

	export interface CreateReportGroupInput {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 2
		 */
		name: string;

		/** Required */
		type: ReportGroupType;

		/**
		 * Information about the location where the run of a report is exported.
		 * Required
		 */
		exportConfig: ReportExportConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateReportGroupInputFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 2
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ReportGroupType | null | undefined>,
	}
	export function CreateCreateReportGroupInputFormGroup() {
		return new FormGroup<CreateReportGroupInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(2)]),
			type: new FormControl<ReportGroupType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWebhookOutput {

		/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook;
	}
	export interface CreateWebhookOutputFormProperties {
	}
	export function CreateCreateWebhookOutputFormGroup() {
		return new FormGroup<CreateWebhookOutputFormProperties>({
		});

	}

	export interface CreateWebhookInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 2
		 */
		projectName: string;
		branchFilter?: string | null;
		filterGroups?: Array<Array<WebhookFilter>>;
	}
	export interface CreateWebhookInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 2
		 */
		projectName: FormControl<string | null | undefined>,
		branchFilter: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookInputFormGroup() {
		return new FormGroup<CreateWebhookInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(2), Validators.pattern('[A-Za-z0-9][A-Za-z0-9\-_]{1,254}')]),
			branchFilter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OAuthProviderException {
	}
	export interface OAuthProviderExceptionFormProperties {
	}
	export function CreateOAuthProviderExceptionFormGroup() {
		return new FormGroup<OAuthProviderExceptionFormProperties>({
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

	export interface DeleteProjectOutput {
	}
	export interface DeleteProjectOutputFormProperties {
	}
	export function CreateDeleteProjectOutputFormGroup() {
		return new FormGroup<DeleteProjectOutputFormProperties>({
		});

	}

	export interface DeleteProjectInput {

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface DeleteProjectInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectInputFormGroup() {
		return new FormGroup<DeleteProjectInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface DeleteReportOutput {
	}
	export interface DeleteReportOutputFormProperties {
	}
	export function CreateDeleteReportOutputFormGroup() {
		return new FormGroup<DeleteReportOutputFormProperties>({
		});

	}

	export interface DeleteReportInput {

		/**
		 * Required
		 * Min length: 1
		 */
		arn: string;
	}
	export interface DeleteReportInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReportInputFormGroup() {
		return new FormGroup<DeleteReportInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface DeleteReportGroupOutput {
	}
	export interface DeleteReportGroupOutputFormProperties {
	}
	export function CreateDeleteReportGroupOutputFormGroup() {
		return new FormGroup<DeleteReportGroupOutputFormProperties>({
		});

	}

	export interface DeleteReportGroupInput {

		/**
		 * Required
		 * Min length: 1
		 */
		arn: string;
	}
	export interface DeleteReportGroupInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReportGroupInputFormGroup() {
		return new FormGroup<DeleteReportGroupInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface DeleteResourcePolicyOutput {
	}
	export interface DeleteResourcePolicyOutputFormProperties {
	}
	export function CreateDeleteResourcePolicyOutputFormGroup() {
		return new FormGroup<DeleteResourcePolicyOutputFormProperties>({
		});

	}

	export interface DeleteResourcePolicyInput {

		/**
		 * Required
		 * Min length: 1
		 */
		resourceArn: string;
	}
	export interface DeleteResourcePolicyInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyInputFormGroup() {
		return new FormGroup<DeleteResourcePolicyInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface DeleteSourceCredentialsOutput {

		/** Min length: 1 */
		arn?: string | null;
	}
	export interface DeleteSourceCredentialsOutputFormProperties {

		/** Min length: 1 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceCredentialsOutputFormGroup() {
		return new FormGroup<DeleteSourceCredentialsOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface DeleteSourceCredentialsInput {

		/**
		 * Required
		 * Min length: 1
		 */
		arn: string;
	}
	export interface DeleteSourceCredentialsInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceCredentialsInputFormGroup() {
		return new FormGroup<DeleteSourceCredentialsInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface DeleteWebhookOutput {
	}
	export interface DeleteWebhookOutputFormProperties {
	}
	export function CreateDeleteWebhookOutputFormGroup() {
		return new FormGroup<DeleteWebhookOutputFormProperties>({
		});

	}

	export interface DeleteWebhookInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 2
		 */
		projectName: string;
	}
	export interface DeleteWebhookInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 2
		 */
		projectName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebhookInputFormGroup() {
		return new FormGroup<DeleteWebhookInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(2), Validators.pattern('[A-Za-z0-9][A-Za-z0-9\-_]{1,254}')]),
		});

	}

	export interface DescribeTestCasesOutput {
		nextToken?: string | null;
		testCases?: Array<TestCase>;
	}
	export interface DescribeTestCasesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTestCasesOutputFormGroup() {
		return new FormGroup<DescribeTestCasesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.  */
	export interface TestCase {

		/** Min length: 1 */
		reportArn?: string | null;
		testRawDataPath?: string | null;
		prefix?: string | null;
		name?: string | null;
		status?: string | null;
		durationInNanoSeconds?: number | null;
		message?: string | null;
		expired?: Date | null;
	}

	/**  Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.  */
	export interface TestCaseFormProperties {

		/** Min length: 1 */
		reportArn: FormControl<string | null | undefined>,
		testRawDataPath: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		durationInNanoSeconds: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		expired: FormControl<Date | null | undefined>,
	}
	export function CreateTestCaseFormGroup() {
		return new FormGroup<TestCaseFormProperties>({
			reportArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			testRawDataPath: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			durationInNanoSeconds: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			expired: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeTestCasesInput {

		/** Required */
		reportArn: string;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** A filter used to return specific types of test cases. */
		filter?: TestCaseFilter;
	}
	export interface DescribeTestCasesInputFormProperties {

		/** Required */
		reportArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTestCasesInputFormGroup() {
		return new FormGroup<DescribeTestCasesInputFormProperties>({
			reportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/**  A filter used to return specific types of test cases.  */
	export interface TestCaseFilter {
		status?: string | null;
	}

	/**  A filter used to return specific types of test cases.  */
	export interface TestCaseFilterFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateTestCaseFilterFormGroup() {
		return new FormGroup<TestCaseFilterFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyOutput {

		/** Min length: 1 */
		policy?: string | null;
	}
	export interface GetResourcePolicyOutputFormProperties {

		/** Min length: 1 */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyOutputFormGroup() {
		return new FormGroup<GetResourcePolicyOutputFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface GetResourcePolicyInput {

		/**
		 * Required
		 * Min length: 1
		 */
		resourceArn: string;
	}
	export interface GetResourcePolicyInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyInputFormGroup() {
		return new FormGroup<GetResourcePolicyInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ImportSourceCredentialsOutput {

		/** Min length: 1 */
		arn?: string | null;
	}
	export interface ImportSourceCredentialsOutputFormProperties {

		/** Min length: 1 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateImportSourceCredentialsOutputFormGroup() {
		return new FormGroup<ImportSourceCredentialsOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface ImportSourceCredentialsInput {

		/** Min length: 1 */
		username?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		token: string;

		/** Required */
		serverType: ImportSourceCredentialsInputServerType;

		/** Required */
		authType: ImportSourceCredentialsInputAuthType;
		shouldOverwrite?: boolean | null;
	}
	export interface ImportSourceCredentialsInputFormProperties {

		/** Min length: 1 */
		username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		token: FormControl<string | null | undefined>,

		/** Required */
		serverType: FormControl<ImportSourceCredentialsInputServerType | null | undefined>,

		/** Required */
		authType: FormControl<ImportSourceCredentialsInputAuthType | null | undefined>,
		shouldOverwrite: FormControl<boolean | null | undefined>,
	}
	export function CreateImportSourceCredentialsInputFormGroup() {
		return new FormGroup<ImportSourceCredentialsInputFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			serverType: new FormControl<ImportSourceCredentialsInputServerType | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<ImportSourceCredentialsInputAuthType | null | undefined>(undefined, [Validators.required]),
			shouldOverwrite: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ImportSourceCredentialsInputServerType { GITHUB = 0, BITBUCKET = 1, GITHUB_ENTERPRISE = 2 }

	export enum ImportSourceCredentialsInputAuthType { OAUTH = 0, BASIC_AUTH = 1, PERSONAL_ACCESS_TOKEN = 2 }

	export interface InvalidateProjectCacheOutput {
	}
	export interface InvalidateProjectCacheOutputFormProperties {
	}
	export function CreateInvalidateProjectCacheOutputFormGroup() {
		return new FormGroup<InvalidateProjectCacheOutputFormProperties>({
		});

	}

	export interface InvalidateProjectCacheInput {

		/**
		 * Required
		 * Min length: 1
		 */
		projectName: string;
	}
	export interface InvalidateProjectCacheInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		projectName: FormControl<string | null | undefined>,
	}
	export function CreateInvalidateProjectCacheInputFormGroup() {
		return new FormGroup<InvalidateProjectCacheInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ListBuildsOutput {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ids?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListBuildsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsOutputFormGroup() {
		return new FormGroup<ListBuildsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildsInput {
		sortOrder?: ListBuildsInputSortOrder | null;
		nextToken?: string | null;
	}
	export interface ListBuildsInputFormProperties {
		sortOrder: FormControl<ListBuildsInputSortOrder | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsInputFormGroup() {
		return new FormGroup<ListBuildsInputFormProperties>({
			sortOrder: new FormControl<ListBuildsInputSortOrder | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListBuildsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListBuildsForProjectOutput {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		ids?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListBuildsForProjectOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsForProjectOutputFormGroup() {
		return new FormGroup<ListBuildsForProjectOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildsForProjectInput {

		/**
		 * Required
		 * Min length: 1
		 */
		projectName: string;
		sortOrder?: ListBuildsInputSortOrder | null;
		nextToken?: string | null;
	}
	export interface ListBuildsForProjectInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		projectName: FormControl<string | null | undefined>,
		sortOrder: FormControl<ListBuildsInputSortOrder | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsForProjectInputFormGroup() {
		return new FormGroup<ListBuildsForProjectInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<ListBuildsInputSortOrder | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCuratedEnvironmentImagesOutput {
		platforms?: Array<EnvironmentPlatform>;
	}
	export interface ListCuratedEnvironmentImagesOutputFormProperties {
	}
	export function CreateListCuratedEnvironmentImagesOutputFormGroup() {
		return new FormGroup<ListCuratedEnvironmentImagesOutputFormProperties>({
		});

	}


	/** A set of Docker images that are related by platform and are managed by AWS CodeBuild. */
	export interface EnvironmentPlatform {
		platform?: EnvironmentPlatformPlatform | null;
		languages?: Array<EnvironmentLanguage>;
	}

	/** A set of Docker images that are related by platform and are managed by AWS CodeBuild. */
	export interface EnvironmentPlatformFormProperties {
		platform: FormControl<EnvironmentPlatformPlatform | null | undefined>,
	}
	export function CreateEnvironmentPlatformFormGroup() {
		return new FormGroup<EnvironmentPlatformFormProperties>({
			platform: new FormControl<EnvironmentPlatformPlatform | null | undefined>(undefined),
		});

	}

	export enum EnvironmentPlatformPlatform { DEBIAN = 0, AMAZON_LINUX = 1, UBUNTU = 2, WINDOWS_SERVER = 3 }


	/** A set of Docker images that are related by programming language and are managed by AWS CodeBuild. */
	export interface EnvironmentLanguage {
		language?: EnvironmentLanguageLanguage | null;
		images?: Array<EnvironmentImage>;
	}

	/** A set of Docker images that are related by programming language and are managed by AWS CodeBuild. */
	export interface EnvironmentLanguageFormProperties {
		language: FormControl<EnvironmentLanguageLanguage | null | undefined>,
	}
	export function CreateEnvironmentLanguageFormGroup() {
		return new FormGroup<EnvironmentLanguageFormProperties>({
			language: new FormControl<EnvironmentLanguageLanguage | null | undefined>(undefined),
		});

	}

	export enum EnvironmentLanguageLanguage { JAVA = 0, PYTHON = 1, NODE_JS = 2, RUBY = 3, GOLANG = 4, DOCKER = 5, ANDROID = 6, DOTNET = 7, BASE = 8, PHP = 9 }


	/** Information about a Docker image that is managed by AWS CodeBuild. */
	export interface EnvironmentImage {
		name?: string | null;
		description?: string | null;
		versions?: Array<string>;
	}

	/** Information about a Docker image that is managed by AWS CodeBuild. */
	export interface EnvironmentImageFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentImageFormGroup() {
		return new FormGroup<EnvironmentImageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCuratedEnvironmentImagesInput {
	}
	export interface ListCuratedEnvironmentImagesInputFormProperties {
	}
	export function CreateListCuratedEnvironmentImagesInputFormGroup() {
		return new FormGroup<ListCuratedEnvironmentImagesInputFormProperties>({
		});

	}

	export interface ListProjectsOutput {
		nextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		projects?: Array<string>;
	}
	export interface ListProjectsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsOutputFormGroup() {
		return new FormGroup<ListProjectsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectsInput {
		sortBy?: ListProjectsInputSortBy | null;
		sortOrder?: ListBuildsInputSortOrder | null;

		/** Min length: 1 */
		nextToken?: string | null;
	}
	export interface ListProjectsInputFormProperties {
		sortBy: FormControl<ListProjectsInputSortBy | null | undefined>,
		sortOrder: FormControl<ListBuildsInputSortOrder | null | undefined>,

		/** Min length: 1 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsInputFormGroup() {
		return new FormGroup<ListProjectsInputFormProperties>({
			sortBy: new FormControl<ListProjectsInputSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<ListBuildsInputSortOrder | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export enum ListProjectsInputSortBy { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }

	export interface ListReportGroupsOutput {
		nextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reportGroups?: Array<string>;
	}
	export interface ListReportGroupsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportGroupsOutputFormGroup() {
		return new FormGroup<ListReportGroupsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReportGroupsInput {
		sortOrder?: ListBuildsInputSortOrder | null;
		sortBy?: ListProjectsInputSortBy | null;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListReportGroupsInputFormProperties {
		sortOrder: FormControl<ListBuildsInputSortOrder | null | undefined>,
		sortBy: FormControl<ListProjectsInputSortBy | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReportGroupsInputFormGroup() {
		return new FormGroup<ListReportGroupsInputFormProperties>({
			sortOrder: new FormControl<ListBuildsInputSortOrder | null | undefined>(undefined),
			sortBy: new FormControl<ListProjectsInputSortBy | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListReportsOutput {
		nextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reports?: Array<string>;
	}
	export interface ListReportsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportsOutputFormGroup() {
		return new FormGroup<ListReportsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReportsInput {
		sortOrder?: ListBuildsInputSortOrder | null;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** A filter used to return reports with the status specified by the input <code>status</code> parameter. */
		filter?: ReportFilter;
	}
	export interface ListReportsInputFormProperties {
		sortOrder: FormControl<ListBuildsInputSortOrder | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReportsInputFormGroup() {
		return new FormGroup<ListReportsInputFormProperties>({
			sortOrder: new FormControl<ListBuildsInputSortOrder | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/**  A filter used to return reports with the status specified by the input <code>status</code> parameter.  */
	export interface ReportFilter {
		status?: ReportStatus | null;
	}

	/**  A filter used to return reports with the status specified by the input <code>status</code> parameter.  */
	export interface ReportFilterFormProperties {
		status: FormControl<ReportStatus | null | undefined>,
	}
	export function CreateReportFilterFormGroup() {
		return new FormGroup<ReportFilterFormProperties>({
			status: new FormControl<ReportStatus | null | undefined>(undefined),
		});

	}

	export interface ListReportsForReportGroupOutput {
		nextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reports?: Array<string>;
	}
	export interface ListReportsForReportGroupOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportsForReportGroupOutputFormGroup() {
		return new FormGroup<ListReportsForReportGroupOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReportsForReportGroupInput {

		/** Required */
		reportGroupArn: string;
		nextToken?: string | null;
		sortOrder?: ListBuildsInputSortOrder | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** A filter used to return reports with the status specified by the input <code>status</code> parameter. */
		filter?: ReportFilter;
	}
	export interface ListReportsForReportGroupInputFormProperties {

		/** Required */
		reportGroupArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		sortOrder: FormControl<ListBuildsInputSortOrder | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReportsForReportGroupInputFormGroup() {
		return new FormGroup<ListReportsForReportGroupInputFormProperties>({
			reportGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<ListBuildsInputSortOrder | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListSharedProjectsOutput {
		nextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		projects?: Array<string>;
	}
	export interface ListSharedProjectsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSharedProjectsOutputFormGroup() {
		return new FormGroup<ListSharedProjectsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSharedProjectsInput {
		sortBy?: ListSharedProjectsInputSortBy | null;
		sortOrder?: ListBuildsInputSortOrder | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/** Min length: 1 */
		nextToken?: string | null;
	}
	export interface ListSharedProjectsInputFormProperties {
		sortBy: FormControl<ListSharedProjectsInputSortBy | null | undefined>,
		sortOrder: FormControl<ListBuildsInputSortOrder | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Min length: 1 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSharedProjectsInputFormGroup() {
		return new FormGroup<ListSharedProjectsInputFormProperties>({
			sortBy: new FormControl<ListSharedProjectsInputSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<ListBuildsInputSortOrder | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export enum ListSharedProjectsInputSortBy { ARN = 0, MODIFIED_TIME = 1 }

	export interface ListSharedReportGroupsOutput {
		nextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		reportGroups?: Array<string>;
	}
	export interface ListSharedReportGroupsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSharedReportGroupsOutputFormGroup() {
		return new FormGroup<ListSharedReportGroupsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSharedReportGroupsInput {
		sortOrder?: ListBuildsInputSortOrder | null;
		sortBy?: ListSharedProjectsInputSortBy | null;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListSharedReportGroupsInputFormProperties {
		sortOrder: FormControl<ListBuildsInputSortOrder | null | undefined>,
		sortBy: FormControl<ListSharedProjectsInputSortBy | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSharedReportGroupsInputFormGroup() {
		return new FormGroup<ListSharedReportGroupsInputFormProperties>({
			sortOrder: new FormControl<ListBuildsInputSortOrder | null | undefined>(undefined),
			sortBy: new FormControl<ListSharedProjectsInputSortBy | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListSourceCredentialsOutput {
		sourceCredentialsInfos?: Array<SourceCredentialsInfo>;
	}
	export interface ListSourceCredentialsOutputFormProperties {
	}
	export function CreateListSourceCredentialsOutputFormGroup() {
		return new FormGroup<ListSourceCredentialsOutputFormProperties>({
		});

	}


	/**  Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository.  */
	export interface SourceCredentialsInfo {

		/** Min length: 1 */
		arn?: string | null;
		serverType?: ImportSourceCredentialsInputServerType | null;
		authType?: ImportSourceCredentialsInputAuthType | null;
	}

	/**  Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository.  */
	export interface SourceCredentialsInfoFormProperties {

		/** Min length: 1 */
		arn: FormControl<string | null | undefined>,
		serverType: FormControl<ImportSourceCredentialsInputServerType | null | undefined>,
		authType: FormControl<ImportSourceCredentialsInputAuthType | null | undefined>,
	}
	export function CreateSourceCredentialsInfoFormGroup() {
		return new FormGroup<SourceCredentialsInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			serverType: new FormControl<ImportSourceCredentialsInputServerType | null | undefined>(undefined),
			authType: new FormControl<ImportSourceCredentialsInputAuthType | null | undefined>(undefined),
		});

	}

	export interface ListSourceCredentialsInput {
	}
	export interface ListSourceCredentialsInputFormProperties {
	}
	export function CreateListSourceCredentialsInputFormGroup() {
		return new FormGroup<ListSourceCredentialsInputFormProperties>({
		});

	}

	export interface PutResourcePolicyOutput {

		/** Min length: 1 */
		resourceArn?: string | null;
	}
	export interface PutResourcePolicyOutputFormProperties {

		/** Min length: 1 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyOutputFormGroup() {
		return new FormGroup<PutResourcePolicyOutputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface PutResourcePolicyInput {

		/**
		 * Required
		 * Min length: 1
		 */
		policy: string;

		/**
		 * Required
		 * Min length: 1
		 */
		resourceArn: string;
	}
	export interface PutResourcePolicyInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		policy: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyInputFormGroup() {
		return new FormGroup<PutResourcePolicyInputFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface StartBuildOutput {

		/** Information about a build. */
		build?: Build;
	}
	export interface StartBuildOutputFormProperties {
	}
	export function CreateStartBuildOutputFormGroup() {
		return new FormGroup<StartBuildOutputFormProperties>({
		});

	}

	export interface StartBuildInput {

		/**
		 * Required
		 * Min length: 1
		 */
		projectName: string;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySourcesOverride?: Array<ProjectSource>;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySourcesVersionOverride?: Array<ProjectSourceVersion>;
		sourceVersion?: string | null;

		/** Information about the build output artifacts for the build project. */
		artifactsOverride?: ProjectArtifacts;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondaryArtifactsOverride?: Array<ProjectArtifacts>;
		environmentVariablesOverride?: Array<EnvironmentVariable>;
		sourceTypeOverride?: ProjectSourceType | null;
		sourceLocationOverride?: string | null;

		/** <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
		sourceAuthOverride?: SourceAuth;

		/** Minimum: 0 */
		gitCloneDepthOverride?: number | null;

		/** Information about the Git submodules configuration for an AWS CodeBuild build project. */
		gitSubmodulesConfigOverride?: GitSubmodulesConfig;
		buildspecOverride?: string | null;
		insecureSslOverride?: boolean | null;
		reportBuildStatusOverride?: boolean | null;
		environmentTypeOverride?: ProjectEnvironmentType | null;

		/** Min length: 1 */
		imageOverride?: string | null;
		computeTypeOverride?: ProjectEnvironmentComputeType | null;
		certificateOverride?: string | null;

		/** Information about the cache for the build project. */
		cacheOverride?: ProjectCache;

		/** Min length: 1 */
		serviceRoleOverride?: string | null;
		privilegedModeOverride?: boolean | null;

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		timeoutInMinutesOverride?: number | null;

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		queuedTimeoutInMinutesOverride?: number | null;

		/** Min length: 1 */
		encryptionKeyOverride?: string | null;

		/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfigOverride?: LogsConfig;

		/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
		registryCredentialOverride?: RegistryCredential;
		imagePullCredentialsTypeOverride?: ProjectEnvironmentImagePullCredentialsType | null;
	}
	export interface StartBuildInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		projectName: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
		sourceTypeOverride: FormControl<ProjectSourceType | null | undefined>,
		sourceLocationOverride: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		gitCloneDepthOverride: FormControl<number | null | undefined>,
		buildspecOverride: FormControl<string | null | undefined>,
		insecureSslOverride: FormControl<boolean | null | undefined>,
		reportBuildStatusOverride: FormControl<boolean | null | undefined>,
		environmentTypeOverride: FormControl<ProjectEnvironmentType | null | undefined>,

		/** Min length: 1 */
		imageOverride: FormControl<string | null | undefined>,
		computeTypeOverride: FormControl<ProjectEnvironmentComputeType | null | undefined>,
		certificateOverride: FormControl<string | null | undefined>,

		/** Min length: 1 */
		serviceRoleOverride: FormControl<string | null | undefined>,
		privilegedModeOverride: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		timeoutInMinutesOverride: FormControl<number | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		queuedTimeoutInMinutesOverride: FormControl<number | null | undefined>,

		/** Min length: 1 */
		encryptionKeyOverride: FormControl<string | null | undefined>,
		imagePullCredentialsTypeOverride: FormControl<ProjectEnvironmentImagePullCredentialsType | null | undefined>,
	}
	export function CreateStartBuildInputFormGroup() {
		return new FormGroup<StartBuildInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			sourceTypeOverride: new FormControl<ProjectSourceType | null | undefined>(undefined),
			sourceLocationOverride: new FormControl<string | null | undefined>(undefined),
			gitCloneDepthOverride: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			buildspecOverride: new FormControl<string | null | undefined>(undefined),
			insecureSslOverride: new FormControl<boolean | null | undefined>(undefined),
			reportBuildStatusOverride: new FormControl<boolean | null | undefined>(undefined),
			environmentTypeOverride: new FormControl<ProjectEnvironmentType | null | undefined>(undefined),
			imageOverride: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			computeTypeOverride: new FormControl<ProjectEnvironmentComputeType | null | undefined>(undefined),
			certificateOverride: new FormControl<string | null | undefined>(undefined),
			serviceRoleOverride: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			privilegedModeOverride: new FormControl<boolean | null | undefined>(undefined),
			timeoutInMinutesOverride: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(480)]),
			queuedTimeoutInMinutesOverride: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(480)]),
			encryptionKeyOverride: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			imagePullCredentialsTypeOverride: new FormControl<ProjectEnvironmentImagePullCredentialsType | null | undefined>(undefined),
		});

	}

	export interface StopBuildOutput {

		/** Information about a build. */
		build?: Build;
	}
	export interface StopBuildOutputFormProperties {
	}
	export function CreateStopBuildOutputFormGroup() {
		return new FormGroup<StopBuildOutputFormProperties>({
		});

	}

	export interface StopBuildInput {

		/**
		 * Required
		 * Min length: 1
		 */
		id: string;
	}
	export interface StopBuildInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateStopBuildInputFormGroup() {
		return new FormGroup<StopBuildInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface UpdateProjectOutput {

		/** Information about a build project. */
		project?: Project;
	}
	export interface UpdateProjectOutputFormProperties {
	}
	export function CreateUpdateProjectOutputFormGroup() {
		return new FormGroup<UpdateProjectOutputFormProperties>({
		});

	}

	export interface UpdateProjectInput {

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		description?: string | null;

		/** Information about the build input source code for the build project. */
		source?: ProjectSource;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/** Information about the build output artifacts for the build project. */
		artifacts?: ProjectArtifacts;

		/**
		 * Minimum items: 0
		 * Maximum items: 12
		 */
		secondaryArtifacts?: Array<ProjectArtifacts>;

		/** Information about the cache for the build project. */
		cache?: ProjectCache;

		/** Information about the build environment of the build project. */
		environment?: ProjectEnvironment;

		/** Min length: 1 */
		serviceRole?: string | null;

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		timeoutInMinutes?: number | null;

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		queuedTimeoutInMinutes?: number | null;

		/** Min length: 1 */
		encryptionKey?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig;
		badgeEnabled?: boolean | null;

		/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
	}
	export interface UpdateProjectInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,

		/** Min length: 1 */
		serviceRole: FormControl<string | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		timeoutInMinutes: FormControl<number | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 480
		 */
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,

		/** Min length: 1 */
		encryptionKey: FormControl<string | null | undefined>,
		badgeEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProjectInputFormGroup() {
		return new FormGroup<UpdateProjectInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(0)]),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(480)]),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(480)]),
			encryptionKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			badgeEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateReportGroupOutput {

		/** A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. */
		reportGroup?: ReportGroup;
	}
	export interface UpdateReportGroupOutputFormProperties {
	}
	export function CreateUpdateReportGroupOutputFormGroup() {
		return new FormGroup<UpdateReportGroupOutputFormProperties>({
		});

	}

	export interface UpdateReportGroupInput {

		/**
		 * Required
		 * Min length: 1
		 */
		arn: string;

		/** Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface UpdateReportGroupInputFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReportGroupInputFormGroup() {
		return new FormGroup<UpdateReportGroupInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface UpdateWebhookOutput {

		/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook;
	}
	export interface UpdateWebhookOutputFormProperties {
	}
	export function CreateUpdateWebhookOutputFormGroup() {
		return new FormGroup<UpdateWebhookOutputFormProperties>({
		});

	}

	export interface UpdateWebhookInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 2
		 */
		projectName: string;
		branchFilter?: string | null;
		rotateSecret?: boolean | null;
		filterGroups?: Array<Array<WebhookFilter>>;
	}
	export interface UpdateWebhookInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 2
		 */
		projectName: FormControl<string | null | undefined>,
		branchFilter: FormControl<string | null | undefined>,
		rotateSecret: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateWebhookInputFormGroup() {
		return new FormGroup<UpdateWebhookInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(2), Validators.pattern('[A-Za-z0-9][A-Za-z0-9\-_]{1,254}')]),
			branchFilter: new FormControl<string | null | undefined>(undefined),
			rotateSecret: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ArtifactNamespace { NONE = 0, BUILD_ID = 1 }

	export enum ArtifactPackaging { NONE = 0, ZIP = 1 }

	export enum ArtifactsType { CODEPIPELINE = 0, S3 = 1, NO_ARTIFACTS = 2 }

	export enum AuthType { OAUTH = 0, BASIC_AUTH = 1, PERSONAL_ACCESS_TOKEN = 2 }

	export enum StatusType { SUCCEEDED = 0, FAILED = 1, FAULT = 2, TIMED_OUT = 3, IN_PROGRESS = 4, STOPPED = 5 }

	export enum BuildPhaseType { SUBMITTED = 0, QUEUED = 1, PROVISIONING = 2, DOWNLOAD_SOURCE = 3, INSTALL = 4, PRE_BUILD = 5, BUILD = 6, POST_BUILD = 7, UPLOAD_ARTIFACTS = 8, FINALIZING = 9, COMPLETED = 10 }

	export enum CacheType { NO_CACHE = 0, S3 = 1, LOCAL = 2 }

	export enum LogsConfigStatusType { ENABLED = 0, DISABLED = 1 }

	export enum ComputeType { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2, BUILD_GENERAL1_2XLARGE = 3 }

	export enum ReportType { TEST = 0 }

	export enum CredentialProviderType { SECRETS_MANAGER = 0 }

	export enum LanguageType { JAVA = 0, PYTHON = 1, NODE_JS = 2, RUBY = 3, GOLANG = 4, DOCKER = 5, ANDROID = 6, DOTNET = 7, BASE = 8, PHP = 9 }

	export enum PlatformType { DEBIAN = 0, AMAZON_LINUX = 1, UBUNTU = 2, WINDOWS_SERVER = 3 }

	export enum EnvironmentType { WINDOWS_CONTAINER = 0, LINUX_CONTAINER = 1, LINUX_GPU_CONTAINER = 2, ARM_CONTAINER = 3 }

	export enum FileSystemType { EFS = 0 }

	export enum ImagePullCredentialsType { CODEBUILD = 0, SERVICE_ROLE = 1 }

	export enum ServerType { GITHUB = 0, BITBUCKET = 1, GITHUB_ENTERPRISE = 2 }

	export enum SortOrderType { ASCENDING = 0, DESCENDING = 1 }

	export enum ProjectSortByType { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }

	export enum ReportGroupSortByType { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }

	export enum SharedResourceSortByType { ARN = 0, MODIFIED_TIME = 1 }

	export enum SourceType { CODECOMMIT = 0, CODEPIPELINE = 1, GITHUB = 2, S3 = 3, BITBUCKET = 4, GITHUB_ENTERPRISE = 5, NO_SOURCE = 6 }

	export enum ReportStatusType { GENERATING = 0, SUCCEEDED = 1, FAILED = 2, INCOMPLETE = 3, DELETING = 4 }

	export enum ReportExportConfigType { S3 = 0, NO_EXPORT = 1 }

	export enum ReportPackagingType { ZIP = 0, NONE = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes one or more builds.
		 * Post #X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds
		 * @return {BatchDeleteBuildsOutput} Success
		 */
		BatchDeleteBuilds(requestBody: BatchDeleteBuildsInput): Observable<BatchDeleteBuildsOutput> {
			return this.http.post<BatchDeleteBuildsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more builds.
		 * Post #X-Amz-Target=CodeBuild_20161006.BatchGetBuilds
		 * @return {BatchGetBuildsOutput} Success
		 */
		BatchGetBuilds(requestBody: BatchGetBuildsInput): Observable<BatchGetBuildsOutput> {
			return this.http.post<BatchGetBuildsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more build projects.
		 * Post #X-Amz-Target=CodeBuild_20161006.BatchGetProjects
		 * @return {BatchGetProjectsOutput} Success
		 */
		BatchGetProjects(requestBody: BatchGetProjectsInput): Observable<BatchGetProjectsOutput> {
			return this.http.post<BatchGetProjectsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.BatchGetProjects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of report groups.
		 * Post #X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups
		 * @return {BatchGetReportGroupsOutput} Success
		 */
		BatchGetReportGroups(requestBody: BatchGetReportGroupsInput): Observable<BatchGetReportGroupsOutput> {
			return this.http.post<BatchGetReportGroupsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of reports.
		 * Post #X-Amz-Target=CodeBuild_20161006.BatchGetReports
		 * @return {BatchGetReportsOutput} Success
		 */
		BatchGetReports(requestBody: BatchGetReportsInput): Observable<BatchGetReportsOutput> {
			return this.http.post<BatchGetReportsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.BatchGetReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a build project.
		 * Post #X-Amz-Target=CodeBuild_20161006.CreateProject
		 * @return {CreateProjectOutput} Success
		 */
		CreateProject(requestBody: CreateProjectInput): Observable<CreateProjectOutput> {
			return this.http.post<CreateProjectOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.CreateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a report group. A report group contains a collection of reports.
		 * Post #X-Amz-Target=CodeBuild_20161006.CreateReportGroup
		 * @return {CreateReportGroupOutput} Success
		 */
		CreateReportGroup(requestBody: CreateReportGroupInput): Observable<CreateReportGroupOutput> {
			return this.http.post<CreateReportGroupOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.CreateReportGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an AWS CodeBuild project, and the project is used as a build step in AWS CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through AWS CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using AWS CodePipeline, we recommend that you disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
		 * Post #X-Amz-Target=CodeBuild_20161006.CreateWebhook
		 * @return {CreateWebhookOutput} Success
		 */
		CreateWebhook(requestBody: CreateWebhookInput): Observable<CreateWebhookOutput> {
			return this.http.post<CreateWebhookOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.CreateWebhook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a build project. When you delete a project, its builds are not deleted.
		 * Post #X-Amz-Target=CodeBuild_20161006.DeleteProject
		 * @return {DeleteProjectOutput} Success
		 */
		DeleteProject(requestBody: DeleteProjectInput): Observable<DeleteProjectOutput> {
			return this.http.post<DeleteProjectOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DeleteProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a report.
		 * Post #X-Amz-Target=CodeBuild_20161006.DeleteReport
		 * @return {DeleteReportOutput} Success
		 */
		DeleteReport(requestBody: DeleteReportInput): Observable<DeleteReportOutput> {
			return this.http.post<DeleteReportOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DeleteReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <code>DeleteReportGroup</code>: Deletes a report group. Before you delete a report group, you must delete its reports. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html">ListReportsForReportGroup</a> to get the reports in a report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html">DeleteReport</a> to delete the reports. If you call <code>DeleteReportGroup</code> for a report group that contains one or more reports, an exception is thrown.
		 * Post #X-Amz-Target=CodeBuild_20161006.DeleteReportGroup
		 * @return {DeleteReportGroupOutput} Success
		 */
		DeleteReportGroup(requestBody: DeleteReportGroupInput): Observable<DeleteReportGroupOutput> {
			return this.http.post<DeleteReportGroupOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource policy that is identified by its resource ARN.
		 * Post #X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyOutput} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyInput): Observable<DeleteResourcePolicyOutput> {
			return this.http.post<DeleteResourcePolicyOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.
		 * Post #X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials
		 * @return {DeleteSourceCredentialsOutput} Success
		 */
		DeleteSourceCredentials(requestBody: DeleteSourceCredentialsInput): Observable<DeleteSourceCredentialsOutput> {
			return this.http.post<DeleteSourceCredentialsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
		 * Post #X-Amz-Target=CodeBuild_20161006.DeleteWebhook
		 * @return {DeleteWebhookOutput} Success
		 */
		DeleteWebhook(requestBody: DeleteWebhookInput): Observable<DeleteWebhookOutput> {
			return this.http.post<DeleteWebhookOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DeleteWebhook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of details about test cases for a report.
		 * Post #X-Amz-Target=CodeBuild_20161006.DescribeTestCases
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeTestCasesOutput} Success
		 */
		DescribeTestCases(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeTestCasesInput): Observable<DescribeTestCasesOutput> {
			return this.http.post<DescribeTestCasesOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DescribeTestCases?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a resource policy that is identified by its resource ARN.
		 * Post #X-Amz-Target=CodeBuild_20161006.GetResourcePolicy
		 * @return {GetResourcePolicyOutput} Success
		 */
		GetResourcePolicy(requestBody: GetResourcePolicyInput): Observable<GetResourcePolicyOutput> {
			return this.http.post<GetResourcePolicyOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository.
		 * Post #X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials
		 * @return {ImportSourceCredentialsOutput} Success
		 */
		ImportSourceCredentials(requestBody: ImportSourceCredentialsInput): Observable<ImportSourceCredentialsOutput> {
			return this.http.post<ImportSourceCredentialsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets the cache for a project.
		 * Post #X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache
		 * @return {InvalidateProjectCacheOutput} Success
		 */
		InvalidateProjectCache(requestBody: InvalidateProjectCacheInput): Observable<InvalidateProjectCacheOutput> {
			return this.http.post<InvalidateProjectCacheOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of build IDs, with each build ID representing a single build.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListBuilds
		 * @param {string} nextToken Pagination token
		 * @return {ListBuildsOutput} Success
		 */
		ListBuilds(nextToken: string | null | undefined, requestBody: ListBuildsInput): Observable<ListBuildsOutput> {
			return this.http.post<ListBuildsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListBuilds?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of build IDs for the specified build project, with each build ID representing a single build.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListBuildsForProject
		 * @param {string} nextToken Pagination token
		 * @return {ListBuildsForProjectOutput} Success
		 */
		ListBuildsForProject(nextToken: string | null | undefined, requestBody: ListBuildsForProjectInput): Observable<ListBuildsForProjectOutput> {
			return this.http.post<ListBuildsForProjectOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about Docker images that are managed by AWS CodeBuild.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages
		 * @return {ListCuratedEnvironmentImagesOutput} Success
		 */
		ListCuratedEnvironmentImages(requestBody: ListCuratedEnvironmentImagesInput): Observable<ListCuratedEnvironmentImagesOutput> {
			return this.http.post<ListCuratedEnvironmentImagesOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of build project names, with each build project name representing a single build project.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListProjects
		 * @param {string} nextToken Pagination token
		 * @return {ListProjectsOutput} Success
		 */
		ListProjects(nextToken: string | null | undefined, requestBody: ListProjectsInput): Observable<ListProjectsOutput> {
			return this.http.post<ListProjectsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListProjects?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list ARNs for the report groups in the current AWS account.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListReportGroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReportGroupsOutput} Success
		 */
		ListReportGroups(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListReportGroupsInput): Observable<ListReportGroupsOutput> {
			return this.http.post<ListReportGroupsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListReportGroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of ARNs for the reports in the current AWS account.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListReports
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReportsOutput} Success
		 */
		ListReports(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListReportsInput): Observable<ListReportsOutput> {
			return this.http.post<ListReportsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListReports?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReportsForReportGroupOutput} Success
		 */
		ListReportsForReportGroup(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListReportsForReportGroupInput): Observable<ListReportsForReportGroupOutput> {
			return this.http.post<ListReportsForReportGroupOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of projects that are shared with other AWS accounts or users.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListSharedProjects
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSharedProjectsOutput} Success
		 */
		ListSharedProjects(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSharedProjectsInput): Observable<ListSharedProjectsOutput> {
			return this.http.post<ListSharedProjectsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListSharedProjects?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of report groups that are shared with other AWS accounts or users.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSharedReportGroupsOutput} Success
		 */
		ListSharedReportGroups(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSharedReportGroupsInput): Observable<ListSharedReportGroupsOutput> {
			return this.http.post<ListSharedReportGroupsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <code>SourceCredentialsInfo</code> objects.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListSourceCredentials
		 * @return {ListSourceCredentialsOutput} Success
		 */
		ListSourceCredentials(requestBody: ListSourceCredentialsInput): Observable<ListSourceCredentialsOutput> {
			return this.http.post<ListSourceCredentialsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object.
		 * Post #X-Amz-Target=CodeBuild_20161006.PutResourcePolicy
		 * @return {PutResourcePolicyOutput} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyInput): Observable<PutResourcePolicyOutput> {
			return this.http.post<PutResourcePolicyOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts running a build.
		 * Post #X-Amz-Target=CodeBuild_20161006.StartBuild
		 * @return {StartBuildOutput} Success
		 */
		StartBuild(requestBody: StartBuildInput): Observable<StartBuildOutput> {
			return this.http.post<StartBuildOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.StartBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to stop running a build.
		 * Post #X-Amz-Target=CodeBuild_20161006.StopBuild
		 * @return {StopBuildOutput} Success
		 */
		StopBuild(requestBody: StopBuildInput): Observable<StopBuildOutput> {
			return this.http.post<StopBuildOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.StopBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the settings of a build project.
		 * Post #X-Amz-Target=CodeBuild_20161006.UpdateProject
		 * @return {UpdateProjectOutput} Success
		 */
		UpdateProject(requestBody: UpdateProjectInput): Observable<UpdateProjectOutput> {
			return this.http.post<UpdateProjectOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.UpdateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a report group.
		 * Post #X-Amz-Target=CodeBuild_20161006.UpdateReportGroup
		 * @return {UpdateReportGroupOutput} Success
		 */
		UpdateReportGroup(requestBody: UpdateReportGroupInput): Observable<UpdateReportGroupOutput> {
			return this.http.post<UpdateReportGroupOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Updates the webhook associated with an AWS CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>
		 * Post #X-Amz-Target=CodeBuild_20161006.UpdateWebhook
		 * @return {UpdateWebhookOutput} Success
		 */
		UpdateWebhook(requestBody: UpdateWebhookInput): Observable<UpdateWebhookOutput> {
			return this.http.post<UpdateWebhookOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.UpdateWebhook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchDeleteBuildsX_Amz_Target { CodeBuild_20161006_BatchDeleteBuilds = 0 }

	export enum BatchGetBuildsX_Amz_Target { CodeBuild_20161006_BatchGetBuilds = 0 }

	export enum BatchGetProjectsX_Amz_Target { CodeBuild_20161006_BatchGetProjects = 0 }

	export enum BatchGetReportGroupsX_Amz_Target { CodeBuild_20161006_BatchGetReportGroups = 0 }

	export enum BatchGetReportsX_Amz_Target { CodeBuild_20161006_BatchGetReports = 0 }

	export enum CreateProjectX_Amz_Target { CodeBuild_20161006_CreateProject = 0 }

	export enum CreateReportGroupX_Amz_Target { CodeBuild_20161006_CreateReportGroup = 0 }

	export enum CreateWebhookX_Amz_Target { CodeBuild_20161006_CreateWebhook = 0 }

	export enum DeleteProjectX_Amz_Target { CodeBuild_20161006_DeleteProject = 0 }

	export enum DeleteReportX_Amz_Target { CodeBuild_20161006_DeleteReport = 0 }

	export enum DeleteReportGroupX_Amz_Target { CodeBuild_20161006_DeleteReportGroup = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { CodeBuild_20161006_DeleteResourcePolicy = 0 }

	export enum DeleteSourceCredentialsX_Amz_Target { CodeBuild_20161006_DeleteSourceCredentials = 0 }

	export enum DeleteWebhookX_Amz_Target { CodeBuild_20161006_DeleteWebhook = 0 }

	export enum DescribeTestCasesX_Amz_Target { CodeBuild_20161006_DescribeTestCases = 0 }

	export enum GetResourcePolicyX_Amz_Target { CodeBuild_20161006_GetResourcePolicy = 0 }

	export enum ImportSourceCredentialsX_Amz_Target { CodeBuild_20161006_ImportSourceCredentials = 0 }

	export enum InvalidateProjectCacheX_Amz_Target { CodeBuild_20161006_InvalidateProjectCache = 0 }

	export enum ListBuildsX_Amz_Target { CodeBuild_20161006_ListBuilds = 0 }

	export enum ListBuildsForProjectX_Amz_Target { CodeBuild_20161006_ListBuildsForProject = 0 }

	export enum ListCuratedEnvironmentImagesX_Amz_Target { CodeBuild_20161006_ListCuratedEnvironmentImages = 0 }

	export enum ListProjectsX_Amz_Target { CodeBuild_20161006_ListProjects = 0 }

	export enum ListReportGroupsX_Amz_Target { CodeBuild_20161006_ListReportGroups = 0 }

	export enum ListReportsX_Amz_Target { CodeBuild_20161006_ListReports = 0 }

	export enum ListReportsForReportGroupX_Amz_Target { CodeBuild_20161006_ListReportsForReportGroup = 0 }

	export enum ListSharedProjectsX_Amz_Target { CodeBuild_20161006_ListSharedProjects = 0 }

	export enum ListSharedReportGroupsX_Amz_Target { CodeBuild_20161006_ListSharedReportGroups = 0 }

	export enum ListSourceCredentialsX_Amz_Target { CodeBuild_20161006_ListSourceCredentials = 0 }

	export enum PutResourcePolicyX_Amz_Target { CodeBuild_20161006_PutResourcePolicy = 0 }

	export enum StartBuildX_Amz_Target { CodeBuild_20161006_StartBuild = 0 }

	export enum StopBuildX_Amz_Target { CodeBuild_20161006_StopBuild = 0 }

	export enum UpdateProjectX_Amz_Target { CodeBuild_20161006_UpdateProject = 0 }

	export enum UpdateReportGroupX_Amz_Target { CodeBuild_20161006_UpdateReportGroup = 0 }

	export enum UpdateWebhookX_Amz_Target { CodeBuild_20161006_UpdateWebhook = 0 }

}

