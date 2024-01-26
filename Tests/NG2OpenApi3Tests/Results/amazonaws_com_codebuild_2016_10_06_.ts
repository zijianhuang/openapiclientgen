import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchDeleteBuildsOutput {
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
		id?: string;
		statusCode?: string;
	}

	/** Information about a build that could not be successfully deleted. */
	export interface BuildNotDeletedFormProperties {
		id: FormControl<string | null | undefined>,
		statusCode: FormControl<string | null | undefined>,
	}
	export function CreateBuildNotDeletedFormGroup() {
		return new FormGroup<BuildNotDeletedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDeleteBuildsInput {

		/** Required */
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

	export interface BatchGetBuildBatchesOutput {
		buildBatches?: Array<BuildBatch>;
		buildBatchesNotFound?: Array<string>;
	}
	export interface BatchGetBuildBatchesOutputFormProperties {
	}
	export function CreateBatchGetBuildBatchesOutputFormGroup() {
		return new FormGroup<BatchGetBuildBatchesOutputFormProperties>({
		});

	}


	/** Contains information about a batch build. */
	export interface BuildBatch {
		id?: string;
		arn?: string;
		startTime?: Date;
		endTime?: Date;
		currentPhase?: string;
		buildBatchStatus?: StatusType;
		sourceVersion?: string;
		resolvedSourceVersion?: string;
		projectName?: string;
		phases?: Array<BuildBatchPhase>;

		/** Information about the build input source code for the build project. */
		source?: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		secondarySourceVersions?: Array<ProjectSourceVersion>;
		artifacts?: BuildArtifacts;
		secondaryArtifacts?: Array<BuildArtifacts>;

		/** Information about the cache for the build project. */
		cache?: ProjectCache;

		/** Information about the build environment of the build project. */
		environment?: ProjectEnvironment;
		serviceRole?: string;

		/** Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both. */
		logConfig?: LogsConfig;
		buildTimeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		complete?: boolean | null;
		initiator?: string;

		/** Information about the VPC configuration that CodeBuild accesses. */
		vpcConfig?: VpcConfig;
		encryptionKey?: string;
		buildBatchNumber?: number | null;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;

		/** Contains configuration information about a batch build project. */
		buildBatchConfig?: ProjectBuildBatchConfig;
		buildGroups?: Array<BuildGroup>;
		debugSessionEnabled?: boolean | null;
	}

	/** Contains information about a batch build. */
	export interface BuildBatchFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		currentPhase: FormControl<string | null | undefined>,
		buildBatchStatus: FormControl<StatusType | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
		resolvedSourceVersion: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
		buildTimeoutInMinutes: FormControl<number | null | undefined>,
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,
		complete: FormControl<boolean | null | undefined>,
		initiator: FormControl<string | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
		buildBatchNumber: FormControl<number | null | undefined>,
		debugSessionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBuildBatchFormGroup() {
		return new FormGroup<BuildBatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			currentPhase: new FormControl<string | null | undefined>(undefined),
			buildBatchStatus: new FormControl<StatusType | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			resolvedSourceVersion: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
			buildTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			complete: new FormControl<boolean | null | undefined>(undefined),
			initiator: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			buildBatchNumber: new FormControl<number | null | undefined>(undefined),
			debugSessionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum StatusType { SUCCEEDED = 0, FAILED = 1, FAULT = 2, TIMED_OUT = 3, IN_PROGRESS = 4, STOPPED = 5 }


	/** Contains information about a stage for a batch build. */
	export interface BuildBatchPhase {
		phaseType?: BuildBatchPhaseType;
		phaseStatus?: StatusType;
		startTime?: Date;
		endTime?: Date;
		durationInSeconds?: number | null;
		contexts?: Array<PhaseContext>;
	}

	/** Contains information about a stage for a batch build. */
	export interface BuildBatchPhaseFormProperties {
		phaseType: FormControl<BuildBatchPhaseType | null | undefined>,
		phaseStatus: FormControl<StatusType | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		durationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateBuildBatchPhaseFormGroup() {
		return new FormGroup<BuildBatchPhaseFormProperties>({
			phaseType: new FormControl<BuildBatchPhaseType | null | undefined>(undefined),
			phaseStatus: new FormControl<StatusType | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BuildBatchPhaseType { SUBMITTED = 0, DOWNLOAD_BATCHSPEC = 1, IN_PROGRESS = 2, COMBINE_ARTIFACTS = 3, SUCCEEDED = 4, FAILED = 5, STOPPED = 6 }


	/** Additional information about a build phase that has an error. You can use this information for troubleshooting. */
	export interface PhaseContext {
		statusCode?: string;
		message?: string;
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
		type: SourceType;
		location?: string;
		gitCloneDepth?: number | null;
		gitSubmodulesConfig?: GitSubmodulesConfig;
		buildspec?: string;
		auth?: SourceAuth;
		reportBuildStatus?: boolean | null;
		buildStatusConfig?: BuildStatusConfig;
		insecureSsl?: boolean | null;
		sourceIdentifier?: string;
	}

	/** Information about the build input source code for the build project. */
	export interface ProjectSourceFormProperties {

		/** Required */
		type: FormControl<SourceType | null | undefined>,
		location: FormControl<string | null | undefined>,
		gitCloneDepth: FormControl<number | null | undefined>,
		buildspec: FormControl<string | null | undefined>,
		reportBuildStatus: FormControl<boolean | null | undefined>,
		insecureSsl: FormControl<boolean | null | undefined>,
		sourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateProjectSourceFormGroup() {
		return new FormGroup<ProjectSourceFormProperties>({
			type: new FormControl<SourceType | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			gitCloneDepth: new FormControl<number | null | undefined>(undefined),
			buildspec: new FormControl<string | null | undefined>(undefined),
			reportBuildStatus: new FormControl<boolean | null | undefined>(undefined),
			insecureSsl: new FormControl<boolean | null | undefined>(undefined),
			sourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceType { CODECOMMIT = 0, CODEPIPELINE = 1, GITHUB = 2, S3 = 3, BITBUCKET = 4, GITHUB_ENTERPRISE = 5, NO_SOURCE = 6 }


	/**  Information about the Git submodules configuration for an CodeBuild build project.  */
	export interface GitSubmodulesConfig {

		/** Required */
		fetchSubmodules: boolean;
	}

	/**  Information about the Git submodules configuration for an CodeBuild build project.  */
	export interface GitSubmodulesConfigFormProperties {

		/** Required */
		fetchSubmodules: FormControl<boolean | null | undefined>,
	}
	export function CreateGitSubmodulesConfigFormGroup() {
		return new FormGroup<GitSubmodulesConfigFormProperties>({
			fetchSubmodules: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p> */
	export interface SourceAuth {

		/** Required */
		type: SourceAuthType;
		resource?: string;
	}

	/** <p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p> */
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


	/** Contains information that defines how the CodeBuild build project reports the build status to the source provider.  */
	export interface BuildStatusConfig {
		context?: string;
		targetUrl?: string;
	}

	/** Contains information that defines how the CodeBuild build project reports the build status to the source provider.  */
	export interface BuildStatusConfigFormProperties {
		context: FormControl<string | null | undefined>,
		targetUrl: FormControl<string | null | undefined>,
	}
	export function CreateBuildStatusConfigFormGroup() {
		return new FormGroup<BuildStatusConfigFormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			targetUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


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
		location?: string;
		sha256sum?: string;
		md5sum?: string;
		overrideArtifactName?: boolean | null;
		encryptionDisabled?: boolean | null;
		artifactIdentifier?: string;

		/** <p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl> */
		bucketOwnerAccess?: BuildArtifactsBucketOwnerAccess | null;
	}

	/** Information about build output artifacts. */
	export interface BuildArtifactsFormProperties {
		location: FormControl<string | null | undefined>,
		sha256sum: FormControl<string | null | undefined>,
		md5sum: FormControl<string | null | undefined>,
		overrideArtifactName: FormControl<boolean | null | undefined>,
		encryptionDisabled: FormControl<boolean | null | undefined>,
		artifactIdentifier: FormControl<string | null | undefined>,

		/** <p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl> */
		bucketOwnerAccess: FormControl<BuildArtifactsBucketOwnerAccess | null | undefined>,
	}
	export function CreateBuildArtifactsFormGroup() {
		return new FormGroup<BuildArtifactsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			sha256sum: new FormControl<string | null | undefined>(undefined),
			md5sum: new FormControl<string | null | undefined>(undefined),
			overrideArtifactName: new FormControl<boolean | null | undefined>(undefined),
			encryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
			artifactIdentifier: new FormControl<string | null | undefined>(undefined),
			bucketOwnerAccess: new FormControl<BuildArtifactsBucketOwnerAccess | null | undefined>(undefined),
		});

	}

	export enum BuildArtifactsBucketOwnerAccess { NONE = 0, READ_ONLY = 1, FULL = 2 }


	/** Information about the cache for the build project. */
	export interface ProjectCache {

		/** Required */
		type: CacheType;
		location?: string;
		modes?: Array<CacheMode>;
	}

	/** Information about the cache for the build project. */
	export interface ProjectCacheFormProperties {

		/** Required */
		type: FormControl<CacheType | null | undefined>,
		location: FormControl<string | null | undefined>,
	}
	export function CreateProjectCacheFormGroup() {
		return new FormGroup<ProjectCacheFormProperties>({
			type: new FormControl<CacheType | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CacheType { NO_CACHE = 0, S3 = 1, LOCAL = 2 }

	export enum CacheMode { LOCAL_DOCKER_LAYER_CACHE = 0, LOCAL_SOURCE_CACHE = 1, LOCAL_CUSTOM_CACHE = 2 }


	/** Information about the build environment of the build project. */
	export interface ProjectEnvironment {

		/** Required */
		type: EnvironmentType;

		/** Required */
		image: string;

		/** Required */
		computeType: ComputeType;
		environmentVariables?: Array<EnvironmentVariable>;
		privilegedMode?: boolean | null;
		certificate?: string;
		registryCredential?: RegistryCredential;
		imagePullCredentialsType?: ImagePullCredentialsType;
	}

	/** Information about the build environment of the build project. */
	export interface ProjectEnvironmentFormProperties {

		/** Required */
		type: FormControl<EnvironmentType | null | undefined>,

		/** Required */
		image: FormControl<string | null | undefined>,

		/** Required */
		computeType: FormControl<ComputeType | null | undefined>,
		privilegedMode: FormControl<boolean | null | undefined>,
		certificate: FormControl<string | null | undefined>,
		imagePullCredentialsType: FormControl<ImagePullCredentialsType | null | undefined>,
	}
	export function CreateProjectEnvironmentFormGroup() {
		return new FormGroup<ProjectEnvironmentFormProperties>({
			type: new FormControl<EnvironmentType | null | undefined>(undefined, [Validators.required]),
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			computeType: new FormControl<ComputeType | null | undefined>(undefined, [Validators.required]),
			privilegedMode: new FormControl<boolean | null | undefined>(undefined),
			certificate: new FormControl<string | null | undefined>(undefined),
			imagePullCredentialsType: new FormControl<ImagePullCredentialsType | null | undefined>(undefined),
		});

	}

	export enum EnvironmentType { WINDOWS_CONTAINER = 0, LINUX_CONTAINER = 1, LINUX_GPU_CONTAINER = 2, ARM_CONTAINER = 3, WINDOWS_SERVER_2019_CONTAINER = 4 }

	export enum ComputeType { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2, BUILD_GENERAL1_2XLARGE = 3 }


	/** Information about an environment variable for a build project or a build. */
	export interface EnvironmentVariable {

		/** Required */
		name: string;

		/** Required */
		value: string;
		type?: EnvironmentVariableType;
	}

	/** Information about an environment variable for a build project or a build. */
	export interface EnvironmentVariableFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
		type: FormControl<EnvironmentVariableType | null | undefined>,
	}
	export function CreateEnvironmentVariableFormGroup() {
		return new FormGroup<EnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EnvironmentVariableType | null | undefined>(undefined),
		});

	}

	export enum EnvironmentVariableType { PLAINTEXT = 0, PARAMETER_STORE = 1, SECRETS_MANAGER = 2 }


	/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with Secrets Manager Sample for CodeBuild</a>. </p> */
	export interface RegistryCredential {

		/** Required */
		credential: string;

		/** Required */
		credentialProvider: CredentialProviderType;
	}

	/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with Secrets Manager Sample for CodeBuild</a>. </p> */
	export interface RegistryCredentialFormProperties {

		/** Required */
		credential: FormControl<string | null | undefined>,

		/** Required */
		credentialProvider: FormControl<CredentialProviderType | null | undefined>,
	}
	export function CreateRegistryCredentialFormGroup() {
		return new FormGroup<RegistryCredentialFormProperties>({
			credential: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			credentialProvider: new FormControl<CredentialProviderType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CredentialProviderType { SECRETS_MANAGER = 0 }

	export enum ImagePullCredentialsType { CODEBUILD = 0, SERVICE_ROLE = 1 }


	/**  Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.  */
	export interface LogsConfig {
		cloudWatchLogs?: CloudWatchLogsConfig;
		s3Logs?: S3LogsConfig;
	}

	/**  Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.  */
	export interface LogsConfigFormProperties {
	}
	export function CreateLogsConfigFormGroup() {
		return new FormGroup<LogsConfigFormProperties>({
		});

	}


	/**  Information about CloudWatch Logs for a build project.  */
	export interface CloudWatchLogsConfig {

		/** Required */
		status: LogsConfigStatusType;
		groupName?: string;
		streamName?: string;
	}

	/**  Information about CloudWatch Logs for a build project.  */
	export interface CloudWatchLogsConfigFormProperties {

		/** Required */
		status: FormControl<LogsConfigStatusType | null | undefined>,
		groupName: FormControl<string | null | undefined>,
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsConfigFormGroup() {
		return new FormGroup<CloudWatchLogsConfigFormProperties>({
			status: new FormControl<LogsConfigStatusType | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined),
			streamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogsConfigStatusType { ENABLED = 0, DISABLED = 1 }


	/**  Information about S3 logs for a build project.  */
	export interface S3LogsConfig {

		/** Required */
		status: LogsConfigStatusType;
		location?: string;
		encryptionDisabled?: boolean | null;

		/** <p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl> */
		bucketOwnerAccess?: BuildArtifactsBucketOwnerAccess | null;
	}

	/**  Information about S3 logs for a build project.  */
	export interface S3LogsConfigFormProperties {

		/** Required */
		status: FormControl<LogsConfigStatusType | null | undefined>,
		location: FormControl<string | null | undefined>,
		encryptionDisabled: FormControl<boolean | null | undefined>,

		/** <p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl> */
		bucketOwnerAccess: FormControl<BuildArtifactsBucketOwnerAccess | null | undefined>,
	}
	export function CreateS3LogsConfigFormGroup() {
		return new FormGroup<S3LogsConfigFormProperties>({
			status: new FormControl<LogsConfigStatusType | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			encryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
			bucketOwnerAccess: new FormControl<BuildArtifactsBucketOwnerAccess | null | undefined>(undefined),
		});

	}


	/** Information about the VPC configuration that CodeBuild accesses. */
	export interface VpcConfig {
		vpcId?: string;
		subnets?: Array<string>;
		securityGroupIds?: Array<string>;
	}

	/** Information about the VPC configuration that CodeBuild accesses. */
	export interface VpcConfigFormProperties {
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>  */
	export interface ProjectFileSystemLocation {
		type?: FileSystemType;
		location?: string;
		mountPoint?: string;
		identifier?: string;
		mountOptions?: string;
	}

	/**  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>  */
	export interface ProjectFileSystemLocationFormProperties {
		type: FormControl<FileSystemType | null | undefined>,
		location: FormControl<string | null | undefined>,
		mountPoint: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		mountOptions: FormControl<string | null | undefined>,
	}
	export function CreateProjectFileSystemLocationFormGroup() {
		return new FormGroup<ProjectFileSystemLocationFormProperties>({
			type: new FormControl<FileSystemType | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			mountPoint: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			mountOptions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileSystemType { EFS = 0 }


	/** Contains configuration information about a batch build project. */
	export interface ProjectBuildBatchConfig {
		serviceRole?: string;
		combineArtifacts?: boolean | null;
		restrictions?: BatchRestrictions;
		timeoutInMins?: number | null;
		batchReportMode?: BatchReportModeType;
	}

	/** Contains configuration information about a batch build project. */
	export interface ProjectBuildBatchConfigFormProperties {
		serviceRole: FormControl<string | null | undefined>,
		combineArtifacts: FormControl<boolean | null | undefined>,
		timeoutInMins: FormControl<number | null | undefined>,
		batchReportMode: FormControl<BatchReportModeType | null | undefined>,
	}
	export function CreateProjectBuildBatchConfigFormGroup() {
		return new FormGroup<ProjectBuildBatchConfigFormProperties>({
			serviceRole: new FormControl<string | null | undefined>(undefined),
			combineArtifacts: new FormControl<boolean | null | undefined>(undefined),
			timeoutInMins: new FormControl<number | null | undefined>(undefined),
			batchReportMode: new FormControl<BatchReportModeType | null | undefined>(undefined),
		});

	}


	/** Specifies restrictions for the batch build. */
	export interface BatchRestrictions {
		maximumBuildsAllowed?: number | null;
		computeTypesAllowed?: Array<string>;
	}

	/** Specifies restrictions for the batch build. */
	export interface BatchRestrictionsFormProperties {
		maximumBuildsAllowed: FormControl<number | null | undefined>,
	}
	export function CreateBatchRestrictionsFormGroup() {
		return new FormGroup<BatchRestrictionsFormProperties>({
			maximumBuildsAllowed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchReportModeType { REPORT_INDIVIDUAL_BUILDS = 0, REPORT_AGGREGATED_BATCH = 1 }


	/** Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups. */
	export interface BuildGroup {
		identifier?: string;
		dependsOn?: Array<string>;
		ignoreFailure?: boolean | null;
		currentBuildSummary?: BuildSummary;
		priorBuildSummaryList?: Array<BuildSummary>;
	}

	/** Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups. */
	export interface BuildGroupFormProperties {
		identifier: FormControl<string | null | undefined>,
		ignoreFailure: FormControl<boolean | null | undefined>,
	}
	export function CreateBuildGroupFormGroup() {
		return new FormGroup<BuildGroupFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			ignoreFailure: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains summary information about a batch build group. */
	export interface BuildSummary {
		arn?: string;
		requestedOn?: Date;
		buildStatus?: StatusType;
		primaryArtifact?: ResolvedArtifact;
		secondaryArtifacts?: Array<ResolvedArtifact>;
	}

	/** Contains summary information about a batch build group. */
	export interface BuildSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		requestedOn: FormControl<Date | null | undefined>,
		buildStatus: FormControl<StatusType | null | undefined>,
	}
	export function CreateBuildSummaryFormGroup() {
		return new FormGroup<BuildSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			requestedOn: new FormControl<Date | null | undefined>(undefined),
			buildStatus: new FormControl<StatusType | null | undefined>(undefined),
		});

	}


	/** Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3. */
	export interface ResolvedArtifact {
		type?: ArtifactsType;
		location?: string;
		identifier?: string;
	}

	/** Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3. */
	export interface ResolvedArtifactFormProperties {
		type: FormControl<ArtifactsType | null | undefined>,
		location: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
	}
	export function CreateResolvedArtifactFormGroup() {
		return new FormGroup<ResolvedArtifactFormProperties>({
			type: new FormControl<ArtifactsType | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArtifactsType { CODEPIPELINE = 0, S3 = 1, NO_ARTIFACTS = 2 }

	export interface BatchGetBuildBatchesInput {

		/** Required */
		ids: Array<string>;
	}
	export interface BatchGetBuildBatchesInputFormProperties {
	}
	export function CreateBatchGetBuildBatchesInputFormGroup() {
		return new FormGroup<BatchGetBuildBatchesInputFormProperties>({
		});

	}

	export interface BatchGetBuildsOutput {
		builds?: Array<Build>;
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
		id?: string;
		arn?: string;
		buildNumber?: number | null;
		startTime?: Date;
		endTime?: Date;
		currentPhase?: string;
		buildStatus?: StatusType;
		sourceVersion?: string;
		resolvedSourceVersion?: string;
		projectName?: string;
		phases?: Array<BuildPhase>;
		source?: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		secondarySourceVersions?: Array<ProjectSourceVersion>;
		artifacts?: BuildArtifacts;
		secondaryArtifacts?: Array<BuildArtifacts>;
		cache?: ProjectCache;
		environment?: ProjectEnvironment;
		serviceRole?: string;
		logs?: LogsLocation;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		buildComplete?: boolean | null;
		initiator?: string;
		vpcConfig?: VpcConfig;
		networkInterface?: NetworkInterface;
		encryptionKey?: string;
		exportedEnvironmentVariables?: Array<ExportedEnvironmentVariable>;
		reportArns?: Array<string>;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
		debugSession?: DebugSession;
		buildBatchArn?: string;
	}

	/** Information about a build. */
	export interface BuildFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		buildNumber: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		currentPhase: FormControl<string | null | undefined>,
		buildStatus: FormControl<StatusType | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
		resolvedSourceVersion: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
		timeoutInMinutes: FormControl<number | null | undefined>,
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,
		buildComplete: FormControl<boolean | null | undefined>,
		initiator: FormControl<string | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
		buildBatchArn: FormControl<string | null | undefined>,
	}
	export function CreateBuildFormGroup() {
		return new FormGroup<BuildFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			buildNumber: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			currentPhase: new FormControl<string | null | undefined>(undefined),
			buildStatus: new FormControl<StatusType | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			resolvedSourceVersion: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			buildComplete: new FormControl<boolean | null | undefined>(undefined),
			initiator: new FormControl<string | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			buildBatchArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a stage for a build. */
	export interface BuildPhase {
		phaseType?: BuildPhaseType;
		phaseStatus?: StatusType;
		startTime?: Date;
		endTime?: Date;
		durationInSeconds?: number | null;
		contexts?: Array<PhaseContext>;
	}

	/** Information about a stage for a build. */
	export interface BuildPhaseFormProperties {
		phaseType: FormControl<BuildPhaseType | null | undefined>,
		phaseStatus: FormControl<StatusType | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		durationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateBuildPhaseFormGroup() {
		return new FormGroup<BuildPhaseFormProperties>({
			phaseType: new FormControl<BuildPhaseType | null | undefined>(undefined),
			phaseStatus: new FormControl<StatusType | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BuildPhaseType { SUBMITTED = 0, QUEUED = 1, PROVISIONING = 2, DOWNLOAD_SOURCE = 3, INSTALL = 4, PRE_BUILD = 5, BUILD = 6, POST_BUILD = 7, UPLOAD_ARTIFACTS = 8, FINALIZING = 9, COMPLETED = 10 }


	/** Information about build logs in CloudWatch Logs. */
	export interface LogsLocation {
		groupName?: string;
		streamName?: string;
		deepLink?: string;
		s3DeepLink?: string;
		cloudWatchLogsArn?: string;
		s3LogsArn?: string;
		cloudWatchLogs?: CloudWatchLogsConfig;
		s3Logs?: S3LogsConfig;
	}

	/** Information about build logs in CloudWatch Logs. */
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


	/** Describes a network interface. */
	export interface NetworkInterface {
		subnetId?: string;
		networkInterfaceId?: string;
	}

	/** Describes a network interface. */
	export interface NetworkInterfaceFormProperties {
		subnetId: FormControl<string | null | undefined>,
		networkInterfaceId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined),
			networkInterfaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an exported environment variable. </p> <p>Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p> <note> <p> During a build, the value of a variable is available starting with the <code>install</code> phase. It can be updated between the start of the <code>install</code> phase and the end of the <code>post_build</code> phase. After the <code>post_build</code> phase ends, the value of exported variables cannot change.</p> </note> */
	export interface ExportedEnvironmentVariable {
		name?: string;
		value?: string;
	}

	/** <p>Contains information about an exported environment variable. </p> <p>Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p> <note> <p> During a build, the value of a variable is available starting with the <code>install</code> phase. It can be updated between the start of the <code>install</code> phase and the end of the <code>post_build</code> phase. After the <code>post_build</code> phase ends, the value of exported variables cannot change.</p> </note> */
	export interface ExportedEnvironmentVariableFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateExportedEnvironmentVariableFormGroup() {
		return new FormGroup<ExportedEnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>. */
	export interface DebugSession {
		sessionEnabled?: boolean | null;
		sessionTarget?: string;
	}

	/** Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>. */
	export interface DebugSessionFormProperties {
		sessionEnabled: FormControl<boolean | null | undefined>,
		sessionTarget: FormControl<string | null | undefined>,
	}
	export function CreateDebugSessionFormGroup() {
		return new FormGroup<DebugSessionFormProperties>({
			sessionEnabled: new FormControl<boolean | null | undefined>(undefined),
			sessionTarget: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetBuildsInput {

		/** Required */
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
		name?: string;
		arn?: string;
		description?: string;
		source?: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string;
		secondarySourceVersions?: Array<ProjectSourceVersion>;
		artifacts?: ProjectArtifacts;
		secondaryArtifacts?: Array<ProjectArtifacts>;
		cache?: ProjectCache;
		environment?: ProjectEnvironment;
		serviceRole?: string;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		encryptionKey?: string;
		tags?: Array<Tag>;
		created?: Date;
		lastModified?: Date;
		webhook?: Webhook;
		vpcConfig?: VpcConfig;
		badge?: ProjectBadge;
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
		buildBatchConfig?: ProjectBuildBatchConfig;
		concurrentBuildLimit?: number | null;

		/** <p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl> */
		projectVisibility?: ProjectProjectVisibility | null;
		publicProjectAlias?: string;
		resourceAccessRole?: string;
	}

	/** Information about a build project. */
	export interface ProjectFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
		timeoutInMinutes: FormControl<number | null | undefined>,
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		concurrentBuildLimit: FormControl<number | null | undefined>,

		/** <p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl> */
		projectVisibility: FormControl<ProjectProjectVisibility | null | undefined>,
		publicProjectAlias: FormControl<string | null | undefined>,
		resourceAccessRole: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			concurrentBuildLimit: new FormControl<number | null | undefined>(undefined),
			projectVisibility: new FormControl<ProjectProjectVisibility | null | undefined>(undefined),
			publicProjectAlias: new FormControl<string | null | undefined>(undefined),
			resourceAccessRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the build output artifacts for the build project. */
	export interface ProjectArtifacts {

		/** Required */
		type: ArtifactsType;
		location?: string;
		path?: string;
		namespaceType?: ArtifactNamespace;
		name?: string;
		packaging?: ArtifactPackaging;
		overrideArtifactName?: boolean | null;
		encryptionDisabled?: boolean | null;
		artifactIdentifier?: string;

		/** <p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl> */
		bucketOwnerAccess?: BuildArtifactsBucketOwnerAccess | null;
	}

	/** Information about the build output artifacts for the build project. */
	export interface ProjectArtifactsFormProperties {

		/** Required */
		type: FormControl<ArtifactsType | null | undefined>,
		location: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		namespaceType: FormControl<ArtifactNamespace | null | undefined>,
		name: FormControl<string | null | undefined>,
		packaging: FormControl<ArtifactPackaging | null | undefined>,
		overrideArtifactName: FormControl<boolean | null | undefined>,
		encryptionDisabled: FormControl<boolean | null | undefined>,
		artifactIdentifier: FormControl<string | null | undefined>,

		/** <p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl> */
		bucketOwnerAccess: FormControl<BuildArtifactsBucketOwnerAccess | null | undefined>,
	}
	export function CreateProjectArtifactsFormGroup() {
		return new FormGroup<ProjectArtifactsFormProperties>({
			type: new FormControl<ArtifactsType | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			namespaceType: new FormControl<ArtifactNamespace | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packaging: new FormControl<ArtifactPackaging | null | undefined>(undefined),
			overrideArtifactName: new FormControl<boolean | null | undefined>(undefined),
			encryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
			artifactIdentifier: new FormControl<string | null | undefined>(undefined),
			bucketOwnerAccess: new FormControl<BuildArtifactsBucketOwnerAccess | null | undefined>(undefined),
		});

	}

	export enum ArtifactNamespace { NONE = 0, BUILD_ID = 1 }

	export enum ArtifactPackaging { NONE = 0, ZIP = 1 }


	/** <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p> */
	export interface Tag {
		key?: string;
		value?: string;
	}

	/** <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p> */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a webhook that connects repository events to a build project in CodeBuild. */
	export interface Webhook {
		url?: string;
		payloadUrl?: string;
		secret?: string;
		branchFilter?: string;
		filterGroups?: Array<Array<WebhookFilter>>;
		buildType?: WebhookBuildType;
		lastModifiedSecret?: Date;
	}

	/** Information about a webhook that connects repository events to a build project in CodeBuild. */
	export interface WebhookFormProperties {
		url: FormControl<string | null | undefined>,
		payloadUrl: FormControl<string | null | undefined>,
		secret: FormControl<string | null | undefined>,
		branchFilter: FormControl<string | null | undefined>,
		buildType: FormControl<WebhookBuildType | null | undefined>,
		lastModifiedSecret: FormControl<Date | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			payloadUrl: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			branchFilter: new FormControl<string | null | undefined>(undefined),
			buildType: new FormControl<WebhookBuildType | null | undefined>(undefined),
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

	export enum WebhookBuildType { BUILD = 0, BUILD_BATCH = 1 }


	/** Information about the build badge for the build project. */
	export interface ProjectBadge {
		badgeEnabled?: boolean | null;
		badgeRequestUrl?: string;
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

	export enum ProjectProjectVisibility { PUBLIC_READ = 0, PRIVATE = 1 }

	export interface BatchGetProjectsInput {

		/** Required */
		names: Array<string>;
	}
	export interface BatchGetProjectsInputFormProperties {
	}
	export function CreateBatchGetProjectsInputFormGroup() {
		return new FormGroup<BatchGetProjectsInputFormProperties>({
		});

	}

	export interface BatchGetReportGroupsOutput {
		reportGroups?: Array<ReportGroup>;
		reportGroupsNotFound?: Array<string>;
	}
	export interface BatchGetReportGroupsOutputFormProperties {
	}
	export function CreateBatchGetReportGroupsOutputFormGroup() {
		return new FormGroup<BatchGetReportGroupsOutputFormProperties>({
		});

	}


	/** A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.  */
	export interface ReportGroup {
		arn?: string;
		name?: string;
		type?: ReportType;
		exportConfig?: ReportExportConfig;
		created?: Date;
		lastModified?: Date;
		tags?: Array<Tag>;
		status?: ReportGroupStatusType;
	}

	/** A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.  */
	export interface ReportGroupFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<ReportType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		status: FormControl<ReportGroupStatusType | null | undefined>,
	}
	export function CreateReportGroupFormGroup() {
		return new FormGroup<ReportGroupFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReportType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ReportGroupStatusType | null | undefined>(undefined),
		});

	}

	export enum ReportType { TEST = 0, CODE_COVERAGE = 1 }


	/**  Information about the location where the run of a report is exported.  */
	export interface ReportExportConfig {
		exportConfigType?: ReportExportConfigType;
		s3Destination?: S3ReportExportConfig;
	}

	/**  Information about the location where the run of a report is exported.  */
	export interface ReportExportConfigFormProperties {
		exportConfigType: FormControl<ReportExportConfigType | null | undefined>,
	}
	export function CreateReportExportConfigFormGroup() {
		return new FormGroup<ReportExportConfigFormProperties>({
			exportConfigType: new FormControl<ReportExportConfigType | null | undefined>(undefined),
		});

	}

	export enum ReportExportConfigType { S3 = 0, NO_EXPORT = 1 }


	/**  Information about the S3 bucket where the raw data of a report are exported.  */
	export interface S3ReportExportConfig {
		bucket?: string;
		bucketOwner?: string;
		path?: string;
		packaging?: ReportPackagingType;
		encryptionKey?: string;
		encryptionDisabled?: boolean | null;
	}

	/**  Information about the S3 bucket where the raw data of a report are exported.  */
	export interface S3ReportExportConfigFormProperties {
		bucket: FormControl<string | null | undefined>,
		bucketOwner: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		packaging: FormControl<ReportPackagingType | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
		encryptionDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateS3ReportExportConfigFormGroup() {
		return new FormGroup<S3ReportExportConfigFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			bucketOwner: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			packaging: new FormControl<ReportPackagingType | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			encryptionDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ReportPackagingType { ZIP = 0, NONE = 1 }

	export enum ReportGroupStatusType { ACTIVE = 0, DELETING = 1 }

	export interface BatchGetReportGroupsInput {

		/** Required */
		reportGroupArns: Array<string>;
	}
	export interface BatchGetReportGroupsInputFormProperties {
	}
	export function CreateBatchGetReportGroupsInputFormGroup() {
		return new FormGroup<BatchGetReportGroupsInputFormProperties>({
		});

	}

	export interface BatchGetReportsOutput {
		reports?: Array<Report>;
		reportsNotFound?: Array<string>;
	}
	export interface BatchGetReportsOutputFormProperties {
	}
	export function CreateBatchGetReportsOutputFormGroup() {
		return new FormGroup<BatchGetReportsOutputFormProperties>({
		});

	}


	/** Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.  */
	export interface Report {
		arn?: string;
		type?: ReportType;
		name?: string;
		reportGroupArn?: string;
		executionId?: string;
		status?: ReportStatusType;
		created?: Date;
		expired?: Date;
		exportConfig?: ReportExportConfig;
		truncated?: boolean | null;
		testSummary?: TestReportSummary;
		codeCoverageSummary?: CodeCoverageReportSummary;
	}

	/** Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.  */
	export interface ReportFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<ReportType | null | undefined>,
		name: FormControl<string | null | undefined>,
		reportGroupArn: FormControl<string | null | undefined>,
		executionId: FormControl<string | null | undefined>,
		status: FormControl<ReportStatusType | null | undefined>,
		created: FormControl<Date | null | undefined>,
		expired: FormControl<Date | null | undefined>,
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReportType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reportGroupArn: new FormControl<string | null | undefined>(undefined),
			executionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReportStatusType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			expired: new FormControl<Date | null | undefined>(undefined),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ReportStatusType { GENERATING = 0, SUCCEEDED = 1, FAILED = 2, INCOMPLETE = 3, DELETING = 4 }


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


	/** <p>Contains a summary of a code coverage report.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p> */
	export interface CodeCoverageReportSummary {
		lineCoveragePercentage?: number | null;
		linesCovered?: number | null;
		linesMissed?: number | null;
		branchCoveragePercentage?: number | null;
		branchesCovered?: number | null;
		branchesMissed?: number | null;
	}

	/** <p>Contains a summary of a code coverage report.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p> */
	export interface CodeCoverageReportSummaryFormProperties {
		lineCoveragePercentage: FormControl<number | null | undefined>,
		linesCovered: FormControl<number | null | undefined>,
		linesMissed: FormControl<number | null | undefined>,
		branchCoveragePercentage: FormControl<number | null | undefined>,
		branchesCovered: FormControl<number | null | undefined>,
		branchesMissed: FormControl<number | null | undefined>,
	}
	export function CreateCodeCoverageReportSummaryFormGroup() {
		return new FormGroup<CodeCoverageReportSummaryFormProperties>({
			lineCoveragePercentage: new FormControl<number | null | undefined>(undefined),
			linesCovered: new FormControl<number | null | undefined>(undefined),
			linesMissed: new FormControl<number | null | undefined>(undefined),
			branchCoveragePercentage: new FormControl<number | null | undefined>(undefined),
			branchesCovered: new FormControl<number | null | undefined>(undefined),
			branchesMissed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchGetReportsInput {

		/** Required */
		reportArns: Array<string>;
	}
	export interface BatchGetReportsInputFormProperties {
	}
	export function CreateBatchGetReportsInputFormGroup() {
		return new FormGroup<BatchGetReportsInputFormProperties>({
		});

	}

	export interface CreateProjectOutput {
		project?: Project;
	}
	export interface CreateProjectOutputFormProperties {
	}
	export function CreateCreateProjectOutputFormGroup() {
		return new FormGroup<CreateProjectOutputFormProperties>({
		});

	}

	export interface CreateProjectInput {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		source: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string;
		secondarySourceVersions?: Array<ProjectSourceVersion>;

		/** Required */
		artifacts: ProjectArtifacts;
		secondaryArtifacts?: Array<ProjectArtifacts>;
		cache?: ProjectCache;

		/** Required */
		environment: ProjectEnvironment;

		/** Required */
		serviceRole: string;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		encryptionKey?: string;
		tags?: Array<Tag>;
		vpcConfig?: VpcConfig;
		badgeEnabled?: boolean | null;
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;
		buildBatchConfig?: ProjectBuildBatchConfig;
		concurrentBuildLimit?: number | null;
	}
	export interface CreateProjectInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,

		/** Required */
		serviceRole: FormControl<string | null | undefined>,
		timeoutInMinutes: FormControl<number | null | undefined>,
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
		badgeEnabled: FormControl<boolean | null | undefined>,
		concurrentBuildLimit: FormControl<number | null | undefined>,
	}
	export function CreateCreateProjectInputFormGroup() {
		return new FormGroup<CreateProjectInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			badgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			concurrentBuildLimit: new FormControl<number | null | undefined>(undefined),
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
		reportGroup?: ReportGroup;
	}
	export interface CreateReportGroupOutputFormProperties {
	}
	export function CreateCreateReportGroupOutputFormGroup() {
		return new FormGroup<CreateReportGroupOutputFormProperties>({
		});

	}

	export interface CreateReportGroupInput {

		/** Required */
		name: string;

		/** Required */
		type: ReportType;

		/** Required */
		exportConfig: ReportExportConfig;
		tags?: Array<Tag>;
	}
	export interface CreateReportGroupInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ReportType | null | undefined>,
	}
	export function CreateCreateReportGroupInputFormGroup() {
		return new FormGroup<CreateReportGroupInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ReportType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWebhookOutput {
		webhook?: Webhook;
	}
	export interface CreateWebhookOutputFormProperties {
	}
	export function CreateCreateWebhookOutputFormGroup() {
		return new FormGroup<CreateWebhookOutputFormProperties>({
		});

	}

	export interface CreateWebhookInput {

		/** Required */
		projectName: string;
		branchFilter?: string;
		filterGroups?: Array<Array<WebhookFilter>>;
		buildType?: WebhookBuildType;
	}
	export interface CreateWebhookInputFormProperties {

		/** Required */
		projectName: FormControl<string | null | undefined>,
		branchFilter: FormControl<string | null | undefined>,
		buildType: FormControl<WebhookBuildType | null | undefined>,
	}
	export function CreateCreateWebhookInputFormGroup() {
		return new FormGroup<CreateWebhookInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchFilter: new FormControl<string | null | undefined>(undefined),
			buildType: new FormControl<WebhookBuildType | null | undefined>(undefined),
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

	export interface DeleteBuildBatchOutput {
		statusCode?: string;
		buildsDeleted?: Array<string>;
		buildsNotDeleted?: Array<BuildNotDeleted>;
	}
	export interface DeleteBuildBatchOutputFormProperties {
		statusCode: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBuildBatchOutputFormGroup() {
		return new FormGroup<DeleteBuildBatchOutputFormProperties>({
			statusCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBuildBatchInput {

		/** Required */
		id: string;
	}
	export interface DeleteBuildBatchInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBuildBatchInputFormGroup() {
		return new FormGroup<DeleteBuildBatchInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		name: string;
	}
	export interface DeleteProjectInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectInputFormGroup() {
		return new FormGroup<DeleteProjectInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		arn: string;
	}
	export interface DeleteReportInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReportInputFormGroup() {
		return new FormGroup<DeleteReportInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		arn: string;
		deleteReports?: boolean | null;
	}
	export interface DeleteReportGroupInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		deleteReports: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteReportGroupInputFormGroup() {
		return new FormGroup<DeleteReportGroupInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleteReports: new FormControl<boolean | null | undefined>(undefined),
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

		/** Required */
		resourceArn: string;
	}
	export interface DeleteResourcePolicyInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyInputFormGroup() {
		return new FormGroup<DeleteResourcePolicyInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSourceCredentialsOutput {
		arn?: string;
	}
	export interface DeleteSourceCredentialsOutputFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceCredentialsOutputFormGroup() {
		return new FormGroup<DeleteSourceCredentialsOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSourceCredentialsInput {

		/** Required */
		arn: string;
	}
	export interface DeleteSourceCredentialsInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSourceCredentialsInputFormGroup() {
		return new FormGroup<DeleteSourceCredentialsInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		projectName: string;
	}
	export interface DeleteWebhookInputFormProperties {

		/** Required */
		projectName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebhookInputFormGroup() {
		return new FormGroup<DeleteWebhookInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCodeCoveragesOutput {
		nextToken?: string;
		codeCoverages?: Array<CodeCoverage>;
	}
	export interface DescribeCodeCoveragesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCodeCoveragesOutputFormGroup() {
		return new FormGroup<DescribeCodeCoveragesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p> */
	export interface CodeCoverage {
		id?: string;
		reportARN?: string;
		filePath?: string;
		lineCoveragePercentage?: number | null;
		linesCovered?: number | null;
		linesMissed?: number | null;
		branchCoveragePercentage?: number | null;
		branchesCovered?: number | null;
		branchesMissed?: number | null;
		expired?: Date;
	}

	/** <p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p> */
	export interface CodeCoverageFormProperties {
		id: FormControl<string | null | undefined>,
		reportARN: FormControl<string | null | undefined>,
		filePath: FormControl<string | null | undefined>,
		lineCoveragePercentage: FormControl<number | null | undefined>,
		linesCovered: FormControl<number | null | undefined>,
		linesMissed: FormControl<number | null | undefined>,
		branchCoveragePercentage: FormControl<number | null | undefined>,
		branchesCovered: FormControl<number | null | undefined>,
		branchesMissed: FormControl<number | null | undefined>,
		expired: FormControl<Date | null | undefined>,
	}
	export function CreateCodeCoverageFormGroup() {
		return new FormGroup<CodeCoverageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			reportARN: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			lineCoveragePercentage: new FormControl<number | null | undefined>(undefined),
			linesCovered: new FormControl<number | null | undefined>(undefined),
			linesMissed: new FormControl<number | null | undefined>(undefined),
			branchCoveragePercentage: new FormControl<number | null | undefined>(undefined),
			branchesCovered: new FormControl<number | null | undefined>(undefined),
			branchesMissed: new FormControl<number | null | undefined>(undefined),
			expired: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeCodeCoveragesInput {

		/** Required */
		reportArn: string;
		nextToken?: string;
		maxResults?: number | null;
		sortOrder?: SortOrderType;
		sortBy?: ReportCodeCoverageSortByType;
		minLineCoveragePercentage?: number | null;
		maxLineCoveragePercentage?: number | null;
	}
	export interface DescribeCodeCoveragesInputFormProperties {

		/** Required */
		reportArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		sortOrder: FormControl<SortOrderType | null | undefined>,
		sortBy: FormControl<ReportCodeCoverageSortByType | null | undefined>,
		minLineCoveragePercentage: FormControl<number | null | undefined>,
		maxLineCoveragePercentage: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCodeCoveragesInputFormGroup() {
		return new FormGroup<DescribeCodeCoveragesInputFormProperties>({
			reportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			sortBy: new FormControl<ReportCodeCoverageSortByType | null | undefined>(undefined),
			minLineCoveragePercentage: new FormControl<number | null | undefined>(undefined),
			maxLineCoveragePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SortOrderType { ASCENDING = 0, DESCENDING = 1 }

	export enum ReportCodeCoverageSortByType { LINE_COVERAGE_PERCENTAGE = 0, FILE_PATH = 1 }

	export interface DescribeTestCasesOutput {
		nextToken?: string;
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
		reportArn?: string;
		testRawDataPath?: string;
		prefix?: string;
		name?: string;
		status?: string;
		durationInNanoSeconds?: number | null;
		message?: string;
		expired?: Date;
	}

	/**  Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.  */
	export interface TestCaseFormProperties {
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
			reportArn: new FormControl<string | null | undefined>(undefined),
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
		nextToken?: string;
		maxResults?: number | null;
		filter?: TestCaseFilter;
	}
	export interface DescribeTestCasesInputFormProperties {

		/** Required */
		reportArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTestCasesInputFormGroup() {
		return new FormGroup<DescribeTestCasesInputFormProperties>({
			reportArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties. */
	export interface TestCaseFilter {
		status?: string;
		keyword?: string;
	}

	/** A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties. */
	export interface TestCaseFilterFormProperties {
		status: FormControl<string | null | undefined>,
		keyword: FormControl<string | null | undefined>,
	}
	export function CreateTestCaseFilterFormGroup() {
		return new FormGroup<TestCaseFilterFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReportGroupTrendOutput {
		stats?: ReportGroupTrendStats;
		rawData?: Array<ReportWithRawData>;
	}
	export interface GetReportGroupTrendOutputFormProperties {
	}
	export function CreateGetReportGroupTrendOutputFormGroup() {
		return new FormGroup<GetReportGroupTrendOutputFormProperties>({
		});

	}


	/** Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see . */
	export interface ReportGroupTrendStats {
		average?: string;
		max?: string;
		min?: string;
	}

	/** Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see . */
	export interface ReportGroupTrendStatsFormProperties {
		average: FormControl<string | null | undefined>,
		max: FormControl<string | null | undefined>,
		min: FormControl<string | null | undefined>,
	}
	export function CreateReportGroupTrendStatsFormGroup() {
		return new FormGroup<ReportGroupTrendStatsFormProperties>({
			average: new FormControl<string | null | undefined>(undefined),
			max: new FormControl<string | null | undefined>(undefined),
			min: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the unmodified data for the report. For more information, see . */
	export interface ReportWithRawData {
		reportArn?: string;
		data?: string;
	}

	/** Contains the unmodified data for the report. For more information, see . */
	export interface ReportWithRawDataFormProperties {
		reportArn: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
	}
	export function CreateReportWithRawDataFormGroup() {
		return new FormGroup<ReportWithRawDataFormProperties>({
			reportArn: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReportGroupTrendInput {

		/** Required */
		reportGroupArn: string;
		numOfReports?: number | null;

		/** Required */
		trendField: ReportGroupTrendFieldType;
	}
	export interface GetReportGroupTrendInputFormProperties {

		/** Required */
		reportGroupArn: FormControl<string | null | undefined>,
		numOfReports: FormControl<number | null | undefined>,

		/** Required */
		trendField: FormControl<ReportGroupTrendFieldType | null | undefined>,
	}
	export function CreateGetReportGroupTrendInputFormGroup() {
		return new FormGroup<GetReportGroupTrendInputFormProperties>({
			reportGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numOfReports: new FormControl<number | null | undefined>(undefined),
			trendField: new FormControl<ReportGroupTrendFieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReportGroupTrendFieldType { PASS_RATE = 0, DURATION = 1, TOTAL = 2, LINE_COVERAGE = 3, LINES_COVERED = 4, LINES_MISSED = 5, BRANCH_COVERAGE = 6, BRANCHES_COVERED = 7, BRANCHES_MISSED = 8 }

	export interface GetResourcePolicyOutput {
		policy?: string;
	}
	export interface GetResourcePolicyOutputFormProperties {
		policy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyOutputFormGroup() {
		return new FormGroup<GetResourcePolicyOutputFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyInput {

		/** Required */
		resourceArn: string;
	}
	export interface GetResourcePolicyInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyInputFormGroup() {
		return new FormGroup<GetResourcePolicyInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportSourceCredentialsOutput {
		arn?: string;
	}
	export interface ImportSourceCredentialsOutputFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateImportSourceCredentialsOutputFormGroup() {
		return new FormGroup<ImportSourceCredentialsOutputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportSourceCredentialsInput {
		username?: string;

		/** Required */
		token: string;

		/** Required */
		serverType: ServerType;

		/** Required */
		authType: AuthType;
		shouldOverwrite?: boolean | null;
	}
	export interface ImportSourceCredentialsInputFormProperties {
		username: FormControl<string | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		serverType: FormControl<ServerType | null | undefined>,

		/** Required */
		authType: FormControl<AuthType | null | undefined>,
		shouldOverwrite: FormControl<boolean | null | undefined>,
	}
	export function CreateImportSourceCredentialsInputFormGroup() {
		return new FormGroup<ImportSourceCredentialsInputFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverType: new FormControl<ServerType | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<AuthType | null | undefined>(undefined, [Validators.required]),
			shouldOverwrite: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ServerType { GITHUB = 0, BITBUCKET = 1, GITHUB_ENTERPRISE = 2 }

	export enum AuthType { OAUTH = 0, BASIC_AUTH = 1, PERSONAL_ACCESS_TOKEN = 2 }

	export interface InvalidateProjectCacheOutput {
	}
	export interface InvalidateProjectCacheOutputFormProperties {
	}
	export function CreateInvalidateProjectCacheOutputFormGroup() {
		return new FormGroup<InvalidateProjectCacheOutputFormProperties>({
		});

	}

	export interface InvalidateProjectCacheInput {

		/** Required */
		projectName: string;
	}
	export interface InvalidateProjectCacheInputFormProperties {

		/** Required */
		projectName: FormControl<string | null | undefined>,
	}
	export function CreateInvalidateProjectCacheInputFormGroup() {
		return new FormGroup<InvalidateProjectCacheInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBuildBatchesOutput {
		ids?: Array<string>;
		nextToken?: string;
	}
	export interface ListBuildBatchesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildBatchesOutputFormGroup() {
		return new FormGroup<ListBuildBatchesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildBatchesInput {
		filter?: BuildBatchFilter;
		maxResults?: number | null;
		sortOrder?: SortOrderType;
		nextToken?: string;
	}
	export interface ListBuildBatchesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		sortOrder: FormControl<SortOrderType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildBatchesInputFormGroup() {
		return new FormGroup<ListBuildBatchesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies filters when retrieving batch builds. */
	export interface BuildBatchFilter {
		status?: StatusType;
	}

	/** Specifies filters when retrieving batch builds. */
	export interface BuildBatchFilterFormProperties {
		status: FormControl<StatusType | null | undefined>,
	}
	export function CreateBuildBatchFilterFormGroup() {
		return new FormGroup<BuildBatchFilterFormProperties>({
			status: new FormControl<StatusType | null | undefined>(undefined),
		});

	}

	export interface ListBuildBatchesForProjectOutput {
		ids?: Array<string>;
		nextToken?: string;
	}
	export interface ListBuildBatchesForProjectOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildBatchesForProjectOutputFormGroup() {
		return new FormGroup<ListBuildBatchesForProjectOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildBatchesForProjectInput {
		projectName?: string;
		filter?: BuildBatchFilter;
		maxResults?: number | null;
		sortOrder?: SortOrderType;
		nextToken?: string;
	}
	export interface ListBuildBatchesForProjectInputFormProperties {
		projectName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		sortOrder: FormControl<SortOrderType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildBatchesForProjectInputFormGroup() {
		return new FormGroup<ListBuildBatchesForProjectInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildsOutput {
		ids?: Array<string>;
		nextToken?: string;
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
		sortOrder?: SortOrderType;
		nextToken?: string;
	}
	export interface ListBuildsInputFormProperties {
		sortOrder: FormControl<SortOrderType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsInputFormGroup() {
		return new FormGroup<ListBuildsInputFormProperties>({
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildsForProjectOutput {
		ids?: Array<string>;
		nextToken?: string;
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

		/** Required */
		projectName: string;
		sortOrder?: SortOrderType;
		nextToken?: string;
	}
	export interface ListBuildsForProjectInputFormProperties {

		/** Required */
		projectName: FormControl<string | null | undefined>,
		sortOrder: FormControl<SortOrderType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsForProjectInputFormGroup() {
		return new FormGroup<ListBuildsForProjectInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
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


	/** A set of Docker images that are related by platform and are managed by CodeBuild. */
	export interface EnvironmentPlatform {
		platform?: PlatformType;
		languages?: Array<EnvironmentLanguage>;
	}

	/** A set of Docker images that are related by platform and are managed by CodeBuild. */
	export interface EnvironmentPlatformFormProperties {
		platform: FormControl<PlatformType | null | undefined>,
	}
	export function CreateEnvironmentPlatformFormGroup() {
		return new FormGroup<EnvironmentPlatformFormProperties>({
			platform: new FormControl<PlatformType | null | undefined>(undefined),
		});

	}

	export enum PlatformType { DEBIAN = 0, AMAZON_LINUX = 1, UBUNTU = 2, WINDOWS_SERVER = 3 }


	/** A set of Docker images that are related by programming language and are managed by CodeBuild. */
	export interface EnvironmentLanguage {
		language?: LanguageType;
		images?: Array<EnvironmentImage>;
	}

	/** A set of Docker images that are related by programming language and are managed by CodeBuild. */
	export interface EnvironmentLanguageFormProperties {
		language: FormControl<LanguageType | null | undefined>,
	}
	export function CreateEnvironmentLanguageFormGroup() {
		return new FormGroup<EnvironmentLanguageFormProperties>({
			language: new FormControl<LanguageType | null | undefined>(undefined),
		});

	}

	export enum LanguageType { JAVA = 0, PYTHON = 1, NODE_JS = 2, RUBY = 3, GOLANG = 4, DOCKER = 5, ANDROID = 6, DOTNET = 7, BASE = 8, PHP = 9 }


	/** Information about a Docker image that is managed by CodeBuild. */
	export interface EnvironmentImage {
		name?: string;
		description?: string;
		versions?: Array<string>;
	}

	/** Information about a Docker image that is managed by CodeBuild. */
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
		nextToken?: string;
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
		sortBy?: ProjectSortByType;
		sortOrder?: SortOrderType;
		nextToken?: string;
	}
	export interface ListProjectsInputFormProperties {
		sortBy: FormControl<ProjectSortByType | null | undefined>,
		sortOrder: FormControl<SortOrderType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsInputFormGroup() {
		return new FormGroup<ListProjectsInputFormProperties>({
			sortBy: new FormControl<ProjectSortByType | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectSortByType { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }

	export interface ListReportGroupsOutput {
		nextToken?: string;
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
		sortOrder?: SortOrderType;
		sortBy?: ProjectSortByType;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListReportGroupsInputFormProperties {
		sortOrder: FormControl<SortOrderType | null | undefined>,
		sortBy: FormControl<ProjectSortByType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReportGroupsInputFormGroup() {
		return new FormGroup<ListReportGroupsInputFormProperties>({
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			sortBy: new FormControl<ProjectSortByType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReportsOutput {
		nextToken?: string;
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
		sortOrder?: SortOrderType;
		nextToken?: string;
		maxResults?: number | null;
		filter?: ReportFilter;
	}
	export interface ListReportsInputFormProperties {
		sortOrder: FormControl<SortOrderType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReportsInputFormGroup() {
		return new FormGroup<ListReportsInputFormProperties>({
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A filter used to return reports with the status specified by the input <code>status</code> parameter.  */
	export interface ReportFilter {
		status?: ReportStatusType;
	}

	/**  A filter used to return reports with the status specified by the input <code>status</code> parameter.  */
	export interface ReportFilterFormProperties {
		status: FormControl<ReportStatusType | null | undefined>,
	}
	export function CreateReportFilterFormGroup() {
		return new FormGroup<ReportFilterFormProperties>({
			status: new FormControl<ReportStatusType | null | undefined>(undefined),
		});

	}

	export interface ListReportsForReportGroupOutput {
		nextToken?: string;
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
		nextToken?: string;
		sortOrder?: SortOrderType;
		maxResults?: number | null;
		filter?: ReportFilter;
	}
	export interface ListReportsForReportGroupInputFormProperties {

		/** Required */
		reportGroupArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		sortOrder: FormControl<SortOrderType | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReportsForReportGroupInputFormGroup() {
		return new FormGroup<ListReportsForReportGroupInputFormProperties>({
			reportGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSharedProjectsOutput {
		nextToken?: string;
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
		sortBy?: SharedResourceSortByType;
		sortOrder?: SortOrderType;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListSharedProjectsInputFormProperties {
		sortBy: FormControl<SharedResourceSortByType | null | undefined>,
		sortOrder: FormControl<SortOrderType | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSharedProjectsInputFormGroup() {
		return new FormGroup<ListSharedProjectsInputFormProperties>({
			sortBy: new FormControl<SharedResourceSortByType | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SharedResourceSortByType { ARN = 0, MODIFIED_TIME = 1 }

	export interface ListSharedReportGroupsOutput {
		nextToken?: string;
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
		sortOrder?: SortOrderType;
		sortBy?: SharedResourceSortByType;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListSharedReportGroupsInputFormProperties {
		sortOrder: FormControl<SortOrderType | null | undefined>,
		sortBy: FormControl<SharedResourceSortByType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSharedReportGroupsInputFormGroup() {
		return new FormGroup<ListSharedReportGroupsInputFormProperties>({
			sortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
			sortBy: new FormControl<SharedResourceSortByType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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
		arn?: string;
		serverType?: ServerType;
		authType?: AuthType;
	}

	/**  Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository.  */
	export interface SourceCredentialsInfoFormProperties {
		arn: FormControl<string | null | undefined>,
		serverType: FormControl<ServerType | null | undefined>,
		authType: FormControl<AuthType | null | undefined>,
	}
	export function CreateSourceCredentialsInfoFormGroup() {
		return new FormGroup<SourceCredentialsInfoFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			serverType: new FormControl<ServerType | null | undefined>(undefined),
			authType: new FormControl<AuthType | null | undefined>(undefined),
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
		resourceArn?: string;
	}
	export interface PutResourcePolicyOutputFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyOutputFormGroup() {
		return new FormGroup<PutResourcePolicyOutputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyInput {

		/** Required */
		policy: string;

		/** Required */
		resourceArn: string;
	}
	export interface PutResourcePolicyInputFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyInputFormGroup() {
		return new FormGroup<PutResourcePolicyInputFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RetryBuildOutput {

		/** Information about a build. */
		build?: Build;
	}
	export interface RetryBuildOutputFormProperties {
	}
	export function CreateRetryBuildOutputFormGroup() {
		return new FormGroup<RetryBuildOutputFormProperties>({
		});

	}

	export interface RetryBuildInput {
		id?: string;
	}
	export interface RetryBuildInputFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateRetryBuildInputFormGroup() {
		return new FormGroup<RetryBuildInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetryBuildBatchOutput {

		/** Contains information about a batch build. */
		buildBatch?: BuildBatch;
	}
	export interface RetryBuildBatchOutputFormProperties {
	}
	export function CreateRetryBuildBatchOutputFormGroup() {
		return new FormGroup<RetryBuildBatchOutputFormProperties>({
		});

	}

	export interface RetryBuildBatchInput {
		id?: string;
		retryType?: RetryBuildBatchType;
	}
	export interface RetryBuildBatchInputFormProperties {
		id: FormControl<string | null | undefined>,
		retryType: FormControl<RetryBuildBatchType | null | undefined>,
	}
	export function CreateRetryBuildBatchInputFormGroup() {
		return new FormGroup<RetryBuildBatchInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			retryType: new FormControl<RetryBuildBatchType | null | undefined>(undefined),
		});

	}

	export enum RetryBuildBatchType { RETRY_ALL_BUILDS = 0, RETRY_FAILED_BUILDS = 1 }

	export interface StartBuildOutput {
		build?: Build;
	}
	export interface StartBuildOutputFormProperties {
	}
	export function CreateStartBuildOutputFormGroup() {
		return new FormGroup<StartBuildOutputFormProperties>({
		});

	}

	export interface StartBuildInput {

		/** Required */
		projectName: string;
		secondarySourcesOverride?: Array<ProjectSource>;
		secondarySourcesVersionOverride?: Array<ProjectSourceVersion>;
		sourceVersion?: string;
		artifactsOverride?: ProjectArtifacts;
		secondaryArtifactsOverride?: Array<ProjectArtifacts>;
		environmentVariablesOverride?: Array<EnvironmentVariable>;
		sourceTypeOverride?: SourceType;
		sourceLocationOverride?: string;
		sourceAuthOverride?: SourceAuth;
		gitCloneDepthOverride?: number | null;
		gitSubmodulesConfigOverride?: GitSubmodulesConfig;
		buildspecOverride?: string;
		insecureSslOverride?: boolean | null;
		reportBuildStatusOverride?: boolean | null;
		buildStatusConfigOverride?: BuildStatusConfig;
		environmentTypeOverride?: EnvironmentType;
		imageOverride?: string;
		computeTypeOverride?: ComputeType;
		certificateOverride?: string;
		cacheOverride?: ProjectCache;
		serviceRoleOverride?: string;
		privilegedModeOverride?: boolean | null;
		timeoutInMinutesOverride?: number | null;
		queuedTimeoutInMinutesOverride?: number | null;
		encryptionKeyOverride?: string;
		logsConfigOverride?: LogsConfig;
		registryCredentialOverride?: RegistryCredential;
		imagePullCredentialsTypeOverride?: ImagePullCredentialsType;
		debugSessionEnabled?: boolean | null;
	}
	export interface StartBuildInputFormProperties {

		/** Required */
		projectName: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
		sourceTypeOverride: FormControl<SourceType | null | undefined>,
		sourceLocationOverride: FormControl<string | null | undefined>,
		gitCloneDepthOverride: FormControl<number | null | undefined>,
		buildspecOverride: FormControl<string | null | undefined>,
		insecureSslOverride: FormControl<boolean | null | undefined>,
		reportBuildStatusOverride: FormControl<boolean | null | undefined>,
		environmentTypeOverride: FormControl<EnvironmentType | null | undefined>,
		imageOverride: FormControl<string | null | undefined>,
		computeTypeOverride: FormControl<ComputeType | null | undefined>,
		certificateOverride: FormControl<string | null | undefined>,
		serviceRoleOverride: FormControl<string | null | undefined>,
		privilegedModeOverride: FormControl<boolean | null | undefined>,
		timeoutInMinutesOverride: FormControl<number | null | undefined>,
		queuedTimeoutInMinutesOverride: FormControl<number | null | undefined>,
		encryptionKeyOverride: FormControl<string | null | undefined>,
		imagePullCredentialsTypeOverride: FormControl<ImagePullCredentialsType | null | undefined>,
		debugSessionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStartBuildInputFormGroup() {
		return new FormGroup<StartBuildInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			sourceTypeOverride: new FormControl<SourceType | null | undefined>(undefined),
			sourceLocationOverride: new FormControl<string | null | undefined>(undefined),
			gitCloneDepthOverride: new FormControl<number | null | undefined>(undefined),
			buildspecOverride: new FormControl<string | null | undefined>(undefined),
			insecureSslOverride: new FormControl<boolean | null | undefined>(undefined),
			reportBuildStatusOverride: new FormControl<boolean | null | undefined>(undefined),
			environmentTypeOverride: new FormControl<EnvironmentType | null | undefined>(undefined),
			imageOverride: new FormControl<string | null | undefined>(undefined),
			computeTypeOverride: new FormControl<ComputeType | null | undefined>(undefined),
			certificateOverride: new FormControl<string | null | undefined>(undefined),
			serviceRoleOverride: new FormControl<string | null | undefined>(undefined),
			privilegedModeOverride: new FormControl<boolean | null | undefined>(undefined),
			timeoutInMinutesOverride: new FormControl<number | null | undefined>(undefined),
			queuedTimeoutInMinutesOverride: new FormControl<number | null | undefined>(undefined),
			encryptionKeyOverride: new FormControl<string | null | undefined>(undefined),
			imagePullCredentialsTypeOverride: new FormControl<ImagePullCredentialsType | null | undefined>(undefined),
			debugSessionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartBuildBatchOutput {
		buildBatch?: BuildBatch;
	}
	export interface StartBuildBatchOutputFormProperties {
	}
	export function CreateStartBuildBatchOutputFormGroup() {
		return new FormGroup<StartBuildBatchOutputFormProperties>({
		});

	}

	export interface StartBuildBatchInput {

		/** Required */
		projectName: string;
		secondarySourcesOverride?: Array<ProjectSource>;
		secondarySourcesVersionOverride?: Array<ProjectSourceVersion>;
		sourceVersion?: string;
		artifactsOverride?: ProjectArtifacts;
		secondaryArtifactsOverride?: Array<ProjectArtifacts>;
		environmentVariablesOverride?: Array<EnvironmentVariable>;
		sourceTypeOverride?: SourceType;
		sourceLocationOverride?: string;
		sourceAuthOverride?: SourceAuth;
		gitCloneDepthOverride?: number | null;
		gitSubmodulesConfigOverride?: GitSubmodulesConfig;
		buildspecOverride?: string;
		insecureSslOverride?: boolean | null;
		reportBuildBatchStatusOverride?: boolean | null;
		environmentTypeOverride?: EnvironmentType;
		imageOverride?: string;
		computeTypeOverride?: ComputeType;
		certificateOverride?: string;
		cacheOverride?: ProjectCache;
		serviceRoleOverride?: string;
		privilegedModeOverride?: boolean | null;
		buildTimeoutInMinutesOverride?: number | null;
		queuedTimeoutInMinutesOverride?: number | null;
		encryptionKeyOverride?: string;
		logsConfigOverride?: LogsConfig;
		registryCredentialOverride?: RegistryCredential;
		imagePullCredentialsTypeOverride?: ImagePullCredentialsType;
		buildBatchConfigOverride?: ProjectBuildBatchConfig;
		debugSessionEnabled?: boolean | null;
	}
	export interface StartBuildBatchInputFormProperties {

		/** Required */
		projectName: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
		sourceTypeOverride: FormControl<SourceType | null | undefined>,
		sourceLocationOverride: FormControl<string | null | undefined>,
		gitCloneDepthOverride: FormControl<number | null | undefined>,
		buildspecOverride: FormControl<string | null | undefined>,
		insecureSslOverride: FormControl<boolean | null | undefined>,
		reportBuildBatchStatusOverride: FormControl<boolean | null | undefined>,
		environmentTypeOverride: FormControl<EnvironmentType | null | undefined>,
		imageOverride: FormControl<string | null | undefined>,
		computeTypeOverride: FormControl<ComputeType | null | undefined>,
		certificateOverride: FormControl<string | null | undefined>,
		serviceRoleOverride: FormControl<string | null | undefined>,
		privilegedModeOverride: FormControl<boolean | null | undefined>,
		buildTimeoutInMinutesOverride: FormControl<number | null | undefined>,
		queuedTimeoutInMinutesOverride: FormControl<number | null | undefined>,
		encryptionKeyOverride: FormControl<string | null | undefined>,
		imagePullCredentialsTypeOverride: FormControl<ImagePullCredentialsType | null | undefined>,
		debugSessionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStartBuildBatchInputFormGroup() {
		return new FormGroup<StartBuildBatchInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			sourceTypeOverride: new FormControl<SourceType | null | undefined>(undefined),
			sourceLocationOverride: new FormControl<string | null | undefined>(undefined),
			gitCloneDepthOverride: new FormControl<number | null | undefined>(undefined),
			buildspecOverride: new FormControl<string | null | undefined>(undefined),
			insecureSslOverride: new FormControl<boolean | null | undefined>(undefined),
			reportBuildBatchStatusOverride: new FormControl<boolean | null | undefined>(undefined),
			environmentTypeOverride: new FormControl<EnvironmentType | null | undefined>(undefined),
			imageOverride: new FormControl<string | null | undefined>(undefined),
			computeTypeOverride: new FormControl<ComputeType | null | undefined>(undefined),
			certificateOverride: new FormControl<string | null | undefined>(undefined),
			serviceRoleOverride: new FormControl<string | null | undefined>(undefined),
			privilegedModeOverride: new FormControl<boolean | null | undefined>(undefined),
			buildTimeoutInMinutesOverride: new FormControl<number | null | undefined>(undefined),
			queuedTimeoutInMinutesOverride: new FormControl<number | null | undefined>(undefined),
			encryptionKeyOverride: new FormControl<string | null | undefined>(undefined),
			imagePullCredentialsTypeOverride: new FormControl<ImagePullCredentialsType | null | undefined>(undefined),
			debugSessionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StopBuildOutput {
		build?: Build;
	}
	export interface StopBuildOutputFormProperties {
	}
	export function CreateStopBuildOutputFormGroup() {
		return new FormGroup<StopBuildOutputFormProperties>({
		});

	}

	export interface StopBuildInput {

		/** Required */
		id: string;
	}
	export interface StopBuildInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateStopBuildInputFormGroup() {
		return new FormGroup<StopBuildInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopBuildBatchOutput {

		/** Contains information about a batch build. */
		buildBatch?: BuildBatch;
	}
	export interface StopBuildBatchOutputFormProperties {
	}
	export function CreateStopBuildBatchOutputFormGroup() {
		return new FormGroup<StopBuildBatchOutputFormProperties>({
		});

	}

	export interface StopBuildBatchInput {

		/** Required */
		id: string;
	}
	export interface StopBuildBatchInputFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateStopBuildBatchInputFormGroup() {
		return new FormGroup<StopBuildBatchInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProjectOutput {
		project?: Project;
	}
	export interface UpdateProjectOutputFormProperties {
	}
	export function CreateUpdateProjectOutputFormGroup() {
		return new FormGroup<UpdateProjectOutputFormProperties>({
		});

	}

	export interface UpdateProjectInput {

		/** Required */
		name: string;
		description?: string;
		source?: ProjectSource;
		secondarySources?: Array<ProjectSource>;
		sourceVersion?: string;
		secondarySourceVersions?: Array<ProjectSourceVersion>;
		artifacts?: ProjectArtifacts;
		secondaryArtifacts?: Array<ProjectArtifacts>;
		cache?: ProjectCache;
		environment?: ProjectEnvironment;
		serviceRole?: string;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		encryptionKey?: string;
		tags?: Array<Tag>;
		vpcConfig?: VpcConfig;
		badgeEnabled?: boolean | null;
		logsConfig?: LogsConfig;
		fileSystemLocations?: Array<ProjectFileSystemLocation>;

		/** Contains configuration information about a batch build project. */
		buildBatchConfig?: ProjectBuildBatchConfig;
		concurrentBuildLimit?: number | null;
	}
	export interface UpdateProjectInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
		serviceRole: FormControl<string | null | undefined>,
		timeoutInMinutes: FormControl<number | null | undefined>,
		queuedTimeoutInMinutes: FormControl<number | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
		badgeEnabled: FormControl<boolean | null | undefined>,
		concurrentBuildLimit: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProjectInputFormGroup() {
		return new FormGroup<UpdateProjectInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			serviceRole: new FormControl<string | null | undefined>(undefined),
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			queuedTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			badgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			concurrentBuildLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectVisibilityOutput {
		projectArn?: string;
		publicProjectAlias?: string;

		/** <p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl> */
		projectVisibility?: ProjectProjectVisibility | null;
	}
	export interface UpdateProjectVisibilityOutputFormProperties {
		projectArn: FormControl<string | null | undefined>,
		publicProjectAlias: FormControl<string | null | undefined>,

		/** <p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl> */
		projectVisibility: FormControl<ProjectProjectVisibility | null | undefined>,
	}
	export function CreateUpdateProjectVisibilityOutputFormGroup() {
		return new FormGroup<UpdateProjectVisibilityOutputFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined),
			publicProjectAlias: new FormControl<string | null | undefined>(undefined),
			projectVisibility: new FormControl<ProjectProjectVisibility | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectVisibilityInput {

		/** Required */
		projectArn: string;

		/**
		 * <p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>
		 * Required
		 */
		projectVisibility: ProjectProjectVisibility;
		resourceAccessRole?: string;
	}
	export interface UpdateProjectVisibilityInputFormProperties {

		/** Required */
		projectArn: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl>
		 * Required
		 */
		projectVisibility: FormControl<ProjectProjectVisibility | null | undefined>,
		resourceAccessRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectVisibilityInputFormGroup() {
		return new FormGroup<UpdateProjectVisibilityInputFormProperties>({
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectVisibility: new FormControl<ProjectProjectVisibility | null | undefined>(undefined, [Validators.required]),
			resourceAccessRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateReportGroupOutput {
		reportGroup?: ReportGroup;
	}
	export interface UpdateReportGroupOutputFormProperties {
	}
	export function CreateUpdateReportGroupOutputFormGroup() {
		return new FormGroup<UpdateReportGroupOutputFormProperties>({
		});

	}

	export interface UpdateReportGroupInput {

		/** Required */
		arn: string;
		exportConfig?: ReportExportConfig;
		tags?: Array<Tag>;
	}
	export interface UpdateReportGroupInputFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReportGroupInputFormGroup() {
		return new FormGroup<UpdateReportGroupInputFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWebhookOutput {
		webhook?: Webhook;
	}
	export interface UpdateWebhookOutputFormProperties {
	}
	export function CreateUpdateWebhookOutputFormGroup() {
		return new FormGroup<UpdateWebhookOutputFormProperties>({
		});

	}

	export interface UpdateWebhookInput {

		/** Required */
		projectName: string;
		branchFilter?: string;
		rotateSecret?: boolean | null;
		filterGroups?: Array<Array<WebhookFilter>>;
		buildType?: WebhookBuildType;
	}
	export interface UpdateWebhookInputFormProperties {

		/** Required */
		projectName: FormControl<string | null | undefined>,
		branchFilter: FormControl<string | null | undefined>,
		rotateSecret: FormControl<boolean | null | undefined>,
		buildType: FormControl<WebhookBuildType | null | undefined>,
	}
	export function CreateUpdateWebhookInputFormGroup() {
		return new FormGroup<UpdateWebhookInputFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchFilter: new FormControl<string | null | undefined>(undefined),
			rotateSecret: new FormControl<boolean | null | undefined>(undefined),
			buildType: new FormControl<WebhookBuildType | null | undefined>(undefined),
		});

	}


	/** <p>Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.</p> <note> <p>To use this property, your CodeBuild service role must have the <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify the access control list for the bucket.</p> </note> <p>This property can be one of the following values:</p> <dl> <dt>NONE</dt> <dd> <p>The bucket owner does not have access to the objects. This is the default.</p> </dd> <dt>READ_ONLY</dt> <dd> <p>The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.</p> </dd> <dt>FULL</dt> <dd> <p>The bucket owner has full access to the objects. Object ownership is determined by the following criteria:</p> <ul> <li> <p>If the bucket is configured with the <b>Bucket owner preferred</b> setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.</p> </li> <li> <p>Otherwise, the uploading account retains ownership of the objects.</p> </li> </ul> <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3 Object Ownership</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> </dd> </dl> */
	export enum BucketOwnerAccess { NONE = 0, READ_ONLY = 1, FULL = 2 }

	export enum ReportGroupSortByType { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }


	/** <p>Specifies the visibility of the project's builds. Possible values are:</p> <dl> <dt>PUBLIC_READ</dt> <dd> <p>The project builds are visible to the public.</p> </dd> <dt>PRIVATE</dt> <dd> <p>The project builds are not visible to the public.</p> </dd> </dl> */
	export enum ProjectVisibilityType { PUBLIC_READ = 0, PRIVATE = 1 }

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
		 * Retrieves information about one or more batch builds.
		 * Post #X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches
		 * @return {BatchGetBuildBatchesOutput} Success
		 */
		BatchGetBuildBatches(requestBody: BatchGetBuildBatchesInput): Observable<BatchGetBuildBatchesOutput> {
			return this.http.post<BatchGetBuildBatchesOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
		 * Post #X-Amz-Target=CodeBuild_20161006.CreateWebhook
		 * @return {CreateWebhookOutput} Success
		 */
		CreateWebhook(requestBody: CreateWebhookInput): Observable<CreateWebhookOutput> {
			return this.http.post<CreateWebhookOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.CreateWebhook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a batch build.
		 * Post #X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch
		 * @return {DeleteBuildBatchOutput} Success
		 */
		DeleteBuildBatch(requestBody: DeleteBuildBatchInput): Observable<DeleteBuildBatchOutput> {
			return this.http.post<DeleteBuildBatchOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes a report group. Before you delete a report group, you must delete its reports.
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
		 * For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
		 * Post #X-Amz-Target=CodeBuild_20161006.DeleteWebhook
		 * @return {DeleteWebhookOutput} Success
		 */
		DeleteWebhook(requestBody: DeleteWebhookInput): Observable<DeleteWebhookOutput> {
			return this.http.post<DeleteWebhookOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DeleteWebhook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves one or more code coverage reports.
		 * Post #X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeCodeCoveragesOutput} Success
		 */
		DescribeCodeCoverages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeCodeCoveragesInput): Observable<DescribeCodeCoveragesOutput> {
			return this.http.post<DescribeCodeCoveragesOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Analyzes and accumulates test report values for the specified test reports.
		 * Post #X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend
		 * @return {GetReportGroupTrendOutput} Success
		 */
		GetReportGroupTrend(requestBody: GetReportGroupTrendInput): Observable<GetReportGroupTrendOutput> {
			return this.http.post<GetReportGroupTrendOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository.
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
		 * Retrieves the identifiers of your build batches in the current region.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListBuildBatches
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBuildBatchesOutput} Success
		 */
		ListBuildBatches(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBuildBatchesInput): Observable<ListBuildBatchesOutput> {
			return this.http.post<ListBuildBatchesOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListBuildBatches?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the identifiers of the build batches for a specific project.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListBuildBatchesForProjectOutput} Success
		 */
		ListBuildBatchesForProject(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListBuildBatchesForProjectInput): Observable<ListBuildBatchesForProjectOutput> {
			return this.http.post<ListBuildBatchesForProjectOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListBuildsForProject
		 * @param {string} nextToken Pagination token
		 * @return {ListBuildsForProjectOutput} Success
		 */
		ListBuildsForProject(nextToken: string | null | undefined, requestBody: ListBuildsForProjectInput): Observable<ListBuildsForProjectOutput> {
			return this.http.post<ListBuildsForProjectOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about Docker images that are managed by CodeBuild.
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
		 * Gets a list ARNs for the report groups in the current Amazon Web Services account.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListReportGroups
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReportGroupsOutput} Success
		 */
		ListReportGroups(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListReportGroupsInput): Observable<ListReportGroupsOutput> {
			return this.http.post<ListReportGroupsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListReportGroups?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of ARNs for the reports in the current Amazon Web Services account.
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
		 * Gets a list of projects that are shared with other Amazon Web Services accounts or users.
		 * Post #X-Amz-Target=CodeBuild_20161006.ListSharedProjects
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSharedProjectsOutput} Success
		 */
		ListSharedProjects(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSharedProjectsInput): Observable<ListSharedProjectsOutput> {
			return this.http.post<ListSharedProjectsOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.ListSharedProjects?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of report groups that are shared with other Amazon Web Services accounts or users.
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
		 * Restarts a build.
		 * Post #X-Amz-Target=CodeBuild_20161006.RetryBuild
		 * @return {RetryBuildOutput} Success
		 */
		RetryBuild(requestBody: RetryBuildInput): Observable<RetryBuildOutput> {
			return this.http.post<RetryBuildOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.RetryBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restarts a failed batch build. Only batch builds that have failed can be retried.
		 * Post #X-Amz-Target=CodeBuild_20161006.RetryBuildBatch
		 * @return {RetryBuildBatchOutput} Success
		 */
		RetryBuildBatch(requestBody: RetryBuildBatchInput): Observable<RetryBuildBatchOutput> {
			return this.http.post<RetryBuildBatchOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Starts a batch build for a project.
		 * Post #X-Amz-Target=CodeBuild_20161006.StartBuildBatch
		 * @return {StartBuildBatchOutput} Success
		 */
		StartBuildBatch(requestBody: StartBuildBatchInput): Observable<StartBuildBatchOutput> {
			return this.http.post<StartBuildBatchOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.StartBuildBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Stops a running batch build.
		 * Post #X-Amz-Target=CodeBuild_20161006.StopBuildBatch
		 * @return {StopBuildBatchOutput} Success
		 */
		StopBuildBatch(requestBody: StopBuildBatchInput): Observable<StopBuildBatchOutput> {
			return this.http.post<StopBuildBatchOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.StopBuildBatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
		 * Post #X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility
		 * @return {UpdateProjectVisibilityOutput} Success
		 */
		UpdateProjectVisibility(requestBody: UpdateProjectVisibilityInput): Observable<UpdateProjectVisibilityOutput> {
			return this.http.post<UpdateProjectVisibilityOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>
		 * Post #X-Amz-Target=CodeBuild_20161006.UpdateWebhook
		 * @return {UpdateWebhookOutput} Success
		 */
		UpdateWebhook(requestBody: UpdateWebhookInput): Observable<UpdateWebhookOutput> {
			return this.http.post<UpdateWebhookOutput>(this.baseUri + '#X-Amz-Target=CodeBuild_20161006.UpdateWebhook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchDeleteBuildsX_Amz_Target { 'CodeBuild_20161006.BatchDeleteBuilds' = 0 }

	export enum BatchGetBuildBatchesX_Amz_Target { 'CodeBuild_20161006.BatchGetBuildBatches' = 0 }

	export enum BatchGetBuildsX_Amz_Target { 'CodeBuild_20161006.BatchGetBuilds' = 0 }

	export enum BatchGetProjectsX_Amz_Target { 'CodeBuild_20161006.BatchGetProjects' = 0 }

	export enum BatchGetReportGroupsX_Amz_Target { 'CodeBuild_20161006.BatchGetReportGroups' = 0 }

	export enum BatchGetReportsX_Amz_Target { 'CodeBuild_20161006.BatchGetReports' = 0 }

	export enum CreateProjectX_Amz_Target { 'CodeBuild_20161006.CreateProject' = 0 }

	export enum CreateReportGroupX_Amz_Target { 'CodeBuild_20161006.CreateReportGroup' = 0 }

	export enum CreateWebhookX_Amz_Target { 'CodeBuild_20161006.CreateWebhook' = 0 }

	export enum DeleteBuildBatchX_Amz_Target { 'CodeBuild_20161006.DeleteBuildBatch' = 0 }

	export enum DeleteProjectX_Amz_Target { 'CodeBuild_20161006.DeleteProject' = 0 }

	export enum DeleteReportX_Amz_Target { 'CodeBuild_20161006.DeleteReport' = 0 }

	export enum DeleteReportGroupX_Amz_Target { 'CodeBuild_20161006.DeleteReportGroup' = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { 'CodeBuild_20161006.DeleteResourcePolicy' = 0 }

	export enum DeleteSourceCredentialsX_Amz_Target { 'CodeBuild_20161006.DeleteSourceCredentials' = 0 }

	export enum DeleteWebhookX_Amz_Target { 'CodeBuild_20161006.DeleteWebhook' = 0 }

	export enum DescribeCodeCoveragesX_Amz_Target { 'CodeBuild_20161006.DescribeCodeCoverages' = 0 }

	export enum DescribeTestCasesX_Amz_Target { 'CodeBuild_20161006.DescribeTestCases' = 0 }

	export enum GetReportGroupTrendX_Amz_Target { 'CodeBuild_20161006.GetReportGroupTrend' = 0 }

	export enum GetResourcePolicyX_Amz_Target { 'CodeBuild_20161006.GetResourcePolicy' = 0 }

	export enum ImportSourceCredentialsX_Amz_Target { 'CodeBuild_20161006.ImportSourceCredentials' = 0 }

	export enum InvalidateProjectCacheX_Amz_Target { 'CodeBuild_20161006.InvalidateProjectCache' = 0 }

	export enum ListBuildBatchesX_Amz_Target { 'CodeBuild_20161006.ListBuildBatches' = 0 }

	export enum ListBuildBatchesForProjectX_Amz_Target { 'CodeBuild_20161006.ListBuildBatchesForProject' = 0 }

	export enum ListBuildsX_Amz_Target { 'CodeBuild_20161006.ListBuilds' = 0 }

	export enum ListBuildsForProjectX_Amz_Target { 'CodeBuild_20161006.ListBuildsForProject' = 0 }

	export enum ListCuratedEnvironmentImagesX_Amz_Target { 'CodeBuild_20161006.ListCuratedEnvironmentImages' = 0 }

	export enum ListProjectsX_Amz_Target { 'CodeBuild_20161006.ListProjects' = 0 }

	export enum ListReportGroupsX_Amz_Target { 'CodeBuild_20161006.ListReportGroups' = 0 }

	export enum ListReportsX_Amz_Target { 'CodeBuild_20161006.ListReports' = 0 }

	export enum ListReportsForReportGroupX_Amz_Target { 'CodeBuild_20161006.ListReportsForReportGroup' = 0 }

	export enum ListSharedProjectsX_Amz_Target { 'CodeBuild_20161006.ListSharedProjects' = 0 }

	export enum ListSharedReportGroupsX_Amz_Target { 'CodeBuild_20161006.ListSharedReportGroups' = 0 }

	export enum ListSourceCredentialsX_Amz_Target { 'CodeBuild_20161006.ListSourceCredentials' = 0 }

	export enum PutResourcePolicyX_Amz_Target { 'CodeBuild_20161006.PutResourcePolicy' = 0 }

	export enum RetryBuildX_Amz_Target { 'CodeBuild_20161006.RetryBuild' = 0 }

	export enum RetryBuildBatchX_Amz_Target { 'CodeBuild_20161006.RetryBuildBatch' = 0 }

	export enum StartBuildX_Amz_Target { 'CodeBuild_20161006.StartBuild' = 0 }

	export enum StartBuildBatchX_Amz_Target { 'CodeBuild_20161006.StartBuildBatch' = 0 }

	export enum StopBuildX_Amz_Target { 'CodeBuild_20161006.StopBuild' = 0 }

	export enum StopBuildBatchX_Amz_Target { 'CodeBuild_20161006.StopBuildBatch' = 0 }

	export enum UpdateProjectX_Amz_Target { 'CodeBuild_20161006.UpdateProject' = 0 }

	export enum UpdateProjectVisibilityX_Amz_Target { 'CodeBuild_20161006.UpdateProjectVisibility' = 0 }

	export enum UpdateReportGroupX_Amz_Target { 'CodeBuild_20161006.UpdateReportGroup' = 0 }

	export enum UpdateWebhookX_Amz_Target { 'CodeBuild_20161006.UpdateWebhook' = 0 }

}

