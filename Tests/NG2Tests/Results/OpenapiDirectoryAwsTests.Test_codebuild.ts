import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface BatchDeleteBuildsOutput {
		buildsDeleted?: Array<string> | null;
		buildsNotDeleted?: Array<BuildNotDeleted> | null;
	}


	/** Information about a build that could not be successfully deleted. */
	export interface BuildNotDeleted {
		id?: string | null;
		statusCode?: string | null;
	}

	export interface BatchDeleteBuildsInput {
		ids: Array<string>;
	}

	export interface InvalidInputException {
	}

	export interface BatchGetBuildsOutput {
		builds?: Array<Build> | null;
		buildsNotFound?: Array<string> | null;
	}


	/** Information about a build. */
	export interface Build {
		id?: string | null;
		arn?: string | null;
		buildNumber?: number | null;
		startTime?: Date | null;
		endTime?: Date | null;
		currentPhase?: string | null;
		buildStatus?: BuildBuildStatus | null;
		sourceVersion?: string | null;
		resolvedSourceVersion?: string | null;
		projectName?: string | null;
		phases?: Array<BuildPhase> | null;

		/** Information about the build input source code for the build project. */
		source?: ProjectSource | null;
		secondarySources?: Array<ProjectSource> | null;
		secondarySourceVersions?: Array<ProjectSourceVersion> | null;

		/** Information about build output artifacts. */
		artifacts?: BuildArtifacts | null;
		secondaryArtifacts?: Array<BuildArtifacts> | null;

		/** Information about the cache for the build project. */
		cache?: ProjectCache | null;

		/** Information about the build environment of the build project. */
		environment?: ProjectEnvironment | null;
		serviceRole?: string | null;

		/** Information about build logs in Amazon CloudWatch Logs. */
		logs?: LogsLocation | null;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		buildComplete?: boolean | null;
		initiator?: string | null;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig | null;

		/** Describes a network interface. */
		networkInterface?: NetworkInterface | null;
		encryptionKey?: string | null;
		exportedEnvironmentVariables?: Array<ExportedEnvironmentVariable> | null;
		reportArns?: Array<string> | null;
		fileSystemLocations?: Array<ProjectFileSystemLocation> | null;
	}

	export enum BuildBuildStatus { SUCCEEDED = 0, FAILED = 1, FAULT = 2, TIMED_OUT = 3, IN_PROGRESS = 4, STOPPED = 5 }


	/** Information about a stage for a build. */
	export interface BuildPhase {
		phaseType?: BuildPhasePhaseType | null;
		phaseStatus?: BuildBuildStatus | null;
		startTime?: Date | null;
		endTime?: Date | null;
		durationInSeconds?: number | null;
		contexts?: Array<PhaseContext> | null;
	}

	export enum BuildPhasePhaseType { SUBMITTED = 0, QUEUED = 1, PROVISIONING = 2, DOWNLOAD_SOURCE = 3, INSTALL = 4, PRE_BUILD = 5, BUILD = 6, POST_BUILD = 7, UPLOAD_ARTIFACTS = 8, FINALIZING = 9, COMPLETED = 10 }


	/** Additional information about a build phase that has an error. You can use this information for troubleshooting. */
	export interface PhaseContext {
		statusCode?: string | null;
		message?: string | null;
	}


	/** Information about the build input source code for the build project. */
	export interface ProjectSource {
		type: ProjectSourceType;
		location?: string | null;
		gitCloneDepth?: number | null;

		/** Information about the Git submodules configuration for an AWS CodeBuild build project. */
		gitSubmodulesConfig?: GitSubmodulesConfig | null;
		buildspec?: string | null;

		/** <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
		auth?: SourceAuth | null;
		reportBuildStatus?: boolean | null;
		insecureSsl?: boolean | null;
		sourceIdentifier?: string | null;
	}

	export enum ProjectSourceType { CODECOMMIT = 0, CODEPIPELINE = 1, GITHUB = 2, S3 = 3, BITBUCKET = 4, GITHUB_ENTERPRISE = 5, NO_SOURCE = 6 }


	/**  Information about the Git submodules configuration for an AWS CodeBuild build project.  */
	export interface GitSubmodulesConfig {
		fetchSubmodules: boolean;
	}


	/** <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
	export interface SourceAuth {
		type: SourceAuthType;
		resource?: string | null;
	}

	export enum SourceAuthType { OAUTH = 0 }


	/**  A source identifier and its corresponding version.  */
	export interface ProjectSourceVersion {
		sourceIdentifier: string;
		sourceVersion: string;
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


	/** Information about the cache for the build project. */
	export interface ProjectCache {
		type: ProjectCacheType;
		location?: string | null;
		modes?: Array<CacheMode> | null;
	}

	export enum ProjectCacheType { NO_CACHE = 0, S3 = 1, LOCAL = 2 }

	export enum CacheMode { LOCAL_DOCKER_LAYER_CACHE = 0, LOCAL_SOURCE_CACHE = 1, LOCAL_CUSTOM_CACHE = 2 }


	/** Information about the build environment of the build project. */
	export interface ProjectEnvironment {
		type: ProjectEnvironmentType;
		image: string;
		computeType: ProjectEnvironmentComputeType;
		environmentVariables?: Array<EnvironmentVariable> | null;
		privilegedMode?: boolean | null;
		certificate?: string | null;

		/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
		registryCredential?: RegistryCredential | null;
		imagePullCredentialsType?: ProjectEnvironmentImagePullCredentialsType | null;
	}

	export enum ProjectEnvironmentType { WINDOWS_CONTAINER = 0, LINUX_CONTAINER = 1, LINUX_GPU_CONTAINER = 2, ARM_CONTAINER = 3 }

	export enum ProjectEnvironmentComputeType { BUILD_GENERAL1_SMALL = 0, BUILD_GENERAL1_MEDIUM = 1, BUILD_GENERAL1_LARGE = 2, BUILD_GENERAL1_2XLARGE = 3 }


	/** Information about an environment variable for a build project or a build. */
	export interface EnvironmentVariable {
		name: string;
		value: string;
		type?: EnvironmentVariableType | null;
	}

	export enum EnvironmentVariableType { PLAINTEXT = 0, PARAMETER_STORE = 1, SECRETS_MANAGER = 2 }


	/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
	export interface RegistryCredential {
		credential: string;
		credentialProvider: RegistryCredentialCredentialProvider;
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
		cloudWatchLogs?: CloudWatchLogsConfig | null;

		/** Information about S3 logs for a build project. */
		s3Logs?: S3LogsConfig | null;
	}


	/**  Information about Amazon CloudWatch Logs for a build project.  */
	export interface CloudWatchLogsConfig {
		status: CloudWatchLogsConfigStatus;
		groupName?: string | null;
		streamName?: string | null;
	}

	export enum CloudWatchLogsConfigStatus { ENABLED = 0, DISABLED = 1 }


	/**  Information about S3 logs for a build project.  */
	export interface S3LogsConfig {
		status: CloudWatchLogsConfigStatus;
		location?: string | null;
		encryptionDisabled?: boolean | null;
	}


	/** Information about the VPC configuration that AWS CodeBuild accesses. */
	export interface VpcConfig {
		vpcId?: string | null;
		subnets?: Array<string> | null;
		securityGroupIds?: Array<string> | null;
	}


	/** Describes a network interface. */
	export interface NetworkInterface {
		subnetId?: string | null;
		networkInterfaceId?: string | null;
	}


	/**  Information about an exported environment variable.  */
	export interface ExportedEnvironmentVariable {
		name?: string | null;
		value?: string | null;
	}


	/**  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>  */
	export interface ProjectFileSystemLocation {
		type?: ProjectFileSystemLocationType | null;
		location?: string | null;
		mountPoint?: string | null;
		identifier?: string | null;
		mountOptions?: string | null;
	}

	export enum ProjectFileSystemLocationType { EFS = 0 }

	export interface BatchGetBuildsInput {
		ids: Array<string>;
	}

	export interface BatchGetProjectsOutput {
		projects?: Array<Project> | null;
		projectsNotFound?: Array<string> | null;
	}


	/** Information about a build project. */
	export interface Project {
		name?: string | null;
		arn?: string | null;
		description?: string | null;

		/** Information about the build input source code for the build project. */
		source?: ProjectSource | null;
		secondarySources?: Array<ProjectSource> | null;
		sourceVersion?: string | null;
		secondarySourceVersions?: Array<ProjectSourceVersion> | null;

		/** Information about the build output artifacts for the build project. */
		artifacts?: ProjectArtifacts | null;
		secondaryArtifacts?: Array<ProjectArtifacts> | null;

		/** Information about the cache for the build project. */
		cache?: ProjectCache | null;

		/** Information about the build environment of the build project. */
		environment?: ProjectEnvironment | null;
		serviceRole?: string | null;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		encryptionKey?: string | null;
		tags?: Array<Tag> | null;
		created?: Date | null;
		lastModified?: Date | null;

		/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook | null;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig | null;

		/** Information about the build badge for the build project. */
		badge?: ProjectBadge | null;

		/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig | null;
		fileSystemLocations?: Array<ProjectFileSystemLocation> | null;
	}


	/** Information about the build output artifacts for the build project. */
	export interface ProjectArtifacts {
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

	export enum ProjectArtifactsType { CODEPIPELINE = 0, S3 = 1, NO_ARTIFACTS = 2 }

	export enum ProjectArtifactsNamespaceType { NONE = 0, BUILD_ID = 1 }

	export enum ProjectArtifactsPackaging { NONE = 0, ZIP = 1 }


	/** <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p> */
	export interface Tag {
		key?: string | null;
		value?: string | null;
	}


	/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
	export interface Webhook {
		url?: string | null;
		payloadUrl?: string | null;
		secret?: string | null;
		branchFilter?: string | null;
		filterGroups?: Array<Array<WebhookFilter>> | null;
		lastModifiedSecret?: Date | null;
	}


	/**  A filter used to determine which webhooks trigger a build.  */
	export interface WebhookFilter {
		type: WebhookFilterType;
		pattern: string;
		excludeMatchedPattern?: boolean | null;
	}

	export enum WebhookFilterType { EVENT = 0, BASE_REF = 1, HEAD_REF = 2, ACTOR_ACCOUNT_ID = 3, FILE_PATH = 4, COMMIT_MESSAGE = 5 }


	/** Information about the build badge for the build project. */
	export interface ProjectBadge {
		badgeEnabled?: boolean | null;
		badgeRequestUrl?: string | null;
	}


	/**  Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both.  */
	export interface LogsConfig {

		/** Information about Amazon CloudWatch Logs for a build project. */
		cloudWatchLogs?: CloudWatchLogsConfig | null;

		/** Information about S3 logs for a build project. */
		s3Logs?: S3LogsConfig | null;
	}

	export interface BatchGetProjectsInput {
		names: Array<string>;
	}

	export interface BatchGetReportGroupsOutput {
		reportGroups?: Array<ReportGroup> | null;
		reportGroupsNotFound?: Array<string> | null;
	}


	/**  A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.  */
	export interface ReportGroup {
		arn?: string | null;
		name?: string | null;
		type?: ReportGroupType | null;

		/** Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig | null;
		created?: Date | null;
		lastModified?: Date | null;
		tags?: Array<Tag> | null;
	}

	export enum ReportGroupType { TEST = 0 }


	/**  Information about the location where the run of a report is exported.  */
	export interface ReportExportConfig {
		exportConfigType?: ReportExportConfigExportConfigType | null;

		/** Information about the S3 bucket where the raw data of a report are exported. */
		s3Destination?: S3ReportExportConfig | null;
	}

	export enum ReportExportConfigExportConfigType { S3 = 0, NO_EXPORT = 1 }


	/**  Information about the S3 bucket where the raw data of a report are exported.  */
	export interface S3ReportExportConfig {
		bucket?: string | null;
		path?: string | null;
		packaging?: S3ReportExportConfigPackaging | null;
		encryptionKey?: string | null;
		encryptionDisabled?: boolean | null;
	}

	export enum S3ReportExportConfigPackaging { ZIP = 0, NONE = 1 }

	export interface BatchGetReportGroupsInput {
		reportGroupArns: Array<string>;
	}

	export interface BatchGetReportsOutput {
		reports?: Array<Report> | null;
		reportsNotFound?: Array<string> | null;
	}


	/**  Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.  */
	export interface Report {
		arn?: string | null;
		type?: ReportGroupType | null;
		name?: string | null;
		reportGroupArn?: string | null;
		executionId?: string | null;
		status?: ReportStatus | null;
		created?: Date | null;
		expired?: Date | null;

		/** Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig | null;
		truncated?: boolean | null;

		/** Information about a test report. */
		testSummary?: TestReportSummary | null;
	}

	export enum ReportStatus { GENERATING = 0, SUCCEEDED = 1, FAILED = 2, INCOMPLETE = 3, DELETING = 4 }


	/**  Information about a test report.  */
	export interface TestReportSummary {
		total: number;
		statusCounts: ReportStatusCounts;
		durationInNanoSeconds: number;
	}

	export interface ReportStatusCounts {
	}

	export interface BatchGetReportsInput {
		reportArns: Array<string>;
	}

	export interface CreateProjectOutput {

		/** Information about a build project. */
		project?: Project | null;
	}

	export interface CreateProjectInput {
		name: string;
		description?: string | null;

		/**
		 * Information about the build input source code for the build project.
		 * Required
		 */
		source: ProjectSource;
		secondarySources?: Array<ProjectSource> | null;
		sourceVersion?: string | null;
		secondarySourceVersions?: Array<ProjectSourceVersion> | null;

		/**
		 * Information about the build output artifacts for the build project.
		 * Required
		 */
		artifacts: ProjectArtifacts;
		secondaryArtifacts?: Array<ProjectArtifacts> | null;

		/** Information about the cache for the build project. */
		cache?: ProjectCache | null;

		/**
		 * Information about the build environment of the build project.
		 * Required
		 */
		environment: ProjectEnvironment;
		serviceRole: string;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		encryptionKey?: string | null;
		tags?: Array<Tag> | null;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig | null;
		badgeEnabled?: boolean | null;

		/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig | null;
		fileSystemLocations?: Array<ProjectFileSystemLocation> | null;
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface AccountLimitExceededException {
	}

	export interface CreateReportGroupOutput {

		/** A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. */
		reportGroup?: ReportGroup | null;
	}

	export interface CreateReportGroupInput {
		name: string;
		type: ReportGroupType;

		/**
		 * Information about the location where the run of a report is exported.
		 * Required
		 */
		exportConfig: ReportExportConfig;
		tags?: Array<Tag> | null;
	}

	export interface CreateWebhookOutput {

		/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook | null;
	}

	export interface CreateWebhookInput {
		projectName: string;
		branchFilter?: string | null;
		filterGroups?: Array<Array<WebhookFilter>> | null;
	}

	export interface OAuthProviderException {
	}

	export interface ResourceNotFoundException {
	}

	export interface DeleteProjectOutput {
	}

	export interface DeleteProjectInput {
		name: string;
	}

	export interface DeleteReportOutput {
	}

	export interface DeleteReportInput {
		arn: string;
	}

	export interface DeleteReportGroupOutput {
	}

	export interface DeleteReportGroupInput {
		arn: string;
	}

	export interface DeleteResourcePolicyOutput {
	}

	export interface DeleteResourcePolicyInput {
		resourceArn: string;
	}

	export interface DeleteSourceCredentialsOutput {
		arn?: string | null;
	}

	export interface DeleteSourceCredentialsInput {
		arn: string;
	}

	export interface DeleteWebhookOutput {
	}

	export interface DeleteWebhookInput {
		projectName: string;
	}

	export interface DescribeTestCasesOutput {
		nextToken?: string | null;
		testCases?: Array<TestCase> | null;
	}


	/**  Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.  */
	export interface TestCase {
		reportArn?: string | null;
		testRawDataPath?: string | null;
		prefix?: string | null;
		name?: string | null;
		status?: string | null;
		durationInNanoSeconds?: number | null;
		message?: string | null;
		expired?: Date | null;
	}

	export interface DescribeTestCasesInput {
		reportArn: string;
		nextToken?: string | null;
		maxResults?: number | null;

		/** A filter used to return specific types of test cases. */
		filter?: TestCaseFilter | null;
	}


	/**  A filter used to return specific types of test cases.  */
	export interface TestCaseFilter {
		status?: string | null;
	}

	export interface GetResourcePolicyOutput {
		policy?: string | null;
	}

	export interface GetResourcePolicyInput {
		resourceArn: string;
	}

	export interface ImportSourceCredentialsOutput {
		arn?: string | null;
	}

	export interface ImportSourceCredentialsInput {
		username?: string | null;
		token: string;
		serverType: ImportSourceCredentialsInputServerType;
		authType: ImportSourceCredentialsInputAuthType;
		shouldOverwrite?: boolean | null;
	}

	export enum ImportSourceCredentialsInputServerType { GITHUB = 0, BITBUCKET = 1, GITHUB_ENTERPRISE = 2 }

	export enum ImportSourceCredentialsInputAuthType { OAUTH = 0, BASIC_AUTH = 1, PERSONAL_ACCESS_TOKEN = 2 }

	export interface InvalidateProjectCacheOutput {
	}

	export interface InvalidateProjectCacheInput {
		projectName: string;
	}

	export interface ListBuildsOutput {
		ids?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListBuildsInput {
		sortOrder?: ListBuildsInputSortOrder | null;
		nextToken?: string | null;
	}

	export enum ListBuildsInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListBuildsForProjectOutput {
		ids?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListBuildsForProjectInput {
		projectName: string;
		sortOrder?: ListBuildsInputSortOrder | null;
		nextToken?: string | null;
	}

	export interface ListCuratedEnvironmentImagesOutput {
		platforms?: Array<EnvironmentPlatform> | null;
	}


	/** A set of Docker images that are related by platform and are managed by AWS CodeBuild. */
	export interface EnvironmentPlatform {
		platform?: EnvironmentPlatformPlatform | null;
		languages?: Array<EnvironmentLanguage> | null;
	}

	export enum EnvironmentPlatformPlatform { DEBIAN = 0, AMAZON_LINUX = 1, UBUNTU = 2, WINDOWS_SERVER = 3 }


	/** A set of Docker images that are related by programming language and are managed by AWS CodeBuild. */
	export interface EnvironmentLanguage {
		language?: EnvironmentLanguageLanguage | null;
		images?: Array<EnvironmentImage> | null;
	}

	export enum EnvironmentLanguageLanguage { JAVA = 0, PYTHON = 1, NODE_JS = 2, RUBY = 3, GOLANG = 4, DOCKER = 5, ANDROID = 6, DOTNET = 7, BASE = 8, PHP = 9 }


	/** Information about a Docker image that is managed by AWS CodeBuild. */
	export interface EnvironmentImage {
		name?: string | null;
		description?: string | null;
		versions?: Array<string> | null;
	}

	export interface ListCuratedEnvironmentImagesInput {
	}

	export interface ListProjectsOutput {
		nextToken?: string | null;
		projects?: Array<string> | null;
	}

	export interface ListProjectsInput {
		sortBy?: ListProjectsInputSortBy | null;
		sortOrder?: ListBuildsInputSortOrder | null;
		nextToken?: string | null;
	}

	export enum ListProjectsInputSortBy { NAME = 0, CREATED_TIME = 1, LAST_MODIFIED_TIME = 2 }

	export interface ListReportGroupsOutput {
		nextToken?: string | null;
		reportGroups?: Array<string> | null;
	}

	export interface ListReportGroupsInput {
		sortOrder?: ListBuildsInputSortOrder | null;
		sortBy?: ListProjectsInputSortBy | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListReportsOutput {
		nextToken?: string | null;
		reports?: Array<string> | null;
	}

	export interface ListReportsInput {
		sortOrder?: ListBuildsInputSortOrder | null;
		nextToken?: string | null;
		maxResults?: number | null;

		/** A filter used to return reports with the status specified by the input <code>status</code> parameter. */
		filter?: ReportFilter | null;
	}


	/**  A filter used to return reports with the status specified by the input <code>status</code> parameter.  */
	export interface ReportFilter {
		status?: ReportStatus | null;
	}

	export interface ListReportsForReportGroupOutput {
		nextToken?: string | null;
		reports?: Array<string> | null;
	}

	export interface ListReportsForReportGroupInput {
		reportGroupArn: string;
		nextToken?: string | null;
		sortOrder?: ListBuildsInputSortOrder | null;
		maxResults?: number | null;

		/** A filter used to return reports with the status specified by the input <code>status</code> parameter. */
		filter?: ReportFilter | null;
	}

	export interface ListSharedProjectsOutput {
		nextToken?: string | null;
		projects?: Array<string> | null;
	}

	export interface ListSharedProjectsInput {
		sortBy?: ListSharedProjectsInputSortBy | null;
		sortOrder?: ListBuildsInputSortOrder | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export enum ListSharedProjectsInputSortBy { ARN = 0, MODIFIED_TIME = 1 }

	export interface ListSharedReportGroupsOutput {
		nextToken?: string | null;
		reportGroups?: Array<string> | null;
	}

	export interface ListSharedReportGroupsInput {
		sortOrder?: ListBuildsInputSortOrder | null;
		sortBy?: ListSharedProjectsInputSortBy | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListSourceCredentialsOutput {
		sourceCredentialsInfos?: Array<SourceCredentialsInfo> | null;
	}


	/**  Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository.  */
	export interface SourceCredentialsInfo {
		arn?: string | null;
		serverType?: ImportSourceCredentialsInputServerType | null;
		authType?: ImportSourceCredentialsInputAuthType | null;
	}

	export interface ListSourceCredentialsInput {
	}

	export interface PutResourcePolicyOutput {
		resourceArn?: string | null;
	}

	export interface PutResourcePolicyInput {
		policy: string;
		resourceArn: string;
	}

	export interface StartBuildOutput {

		/** Information about a build. */
		build?: Build | null;
	}

	export interface StartBuildInput {
		projectName: string;
		secondarySourcesOverride?: Array<ProjectSource> | null;
		secondarySourcesVersionOverride?: Array<ProjectSourceVersion> | null;
		sourceVersion?: string | null;

		/** Information about the build output artifacts for the build project. */
		artifactsOverride?: ProjectArtifacts | null;
		secondaryArtifactsOverride?: Array<ProjectArtifacts> | null;
		environmentVariablesOverride?: Array<EnvironmentVariable> | null;
		sourceTypeOverride?: ProjectSourceType | null;
		sourceLocationOverride?: string | null;

		/** <p>Information about the authorization settings for AWS CodeBuild to access the source code to be built.</p> <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.</p> */
		sourceAuthOverride?: SourceAuth | null;
		gitCloneDepthOverride?: number | null;

		/** Information about the Git submodules configuration for an AWS CodeBuild build project. */
		gitSubmodulesConfigOverride?: GitSubmodulesConfig | null;
		buildspecOverride?: string | null;
		insecureSslOverride?: boolean | null;
		reportBuildStatusOverride?: boolean | null;
		environmentTypeOverride?: ProjectEnvironmentType | null;
		imageOverride?: string | null;
		computeTypeOverride?: ProjectEnvironmentComputeType | null;
		certificateOverride?: string | null;

		/** Information about the cache for the build project. */
		cacheOverride?: ProjectCache | null;
		serviceRoleOverride?: string | null;
		privilegedModeOverride?: boolean | null;
		timeoutInMinutesOverride?: number | null;
		queuedTimeoutInMinutesOverride?: number | null;
		encryptionKeyOverride?: string | null;

		/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfigOverride?: LogsConfig | null;

		/** <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p> */
		registryCredentialOverride?: RegistryCredential | null;
		imagePullCredentialsTypeOverride?: ProjectEnvironmentImagePullCredentialsType | null;
	}

	export interface StopBuildOutput {

		/** Information about a build. */
		build?: Build | null;
	}

	export interface StopBuildInput {
		id: string;
	}

	export interface UpdateProjectOutput {

		/** Information about a build project. */
		project?: Project | null;
	}

	export interface UpdateProjectInput {
		name: string;
		description?: string | null;

		/** Information about the build input source code for the build project. */
		source?: ProjectSource | null;
		secondarySources?: Array<ProjectSource> | null;
		sourceVersion?: string | null;
		secondarySourceVersions?: Array<ProjectSourceVersion> | null;

		/** Information about the build output artifacts for the build project. */
		artifacts?: ProjectArtifacts | null;
		secondaryArtifacts?: Array<ProjectArtifacts> | null;

		/** Information about the cache for the build project. */
		cache?: ProjectCache | null;

		/** Information about the build environment of the build project. */
		environment?: ProjectEnvironment | null;
		serviceRole?: string | null;
		timeoutInMinutes?: number | null;
		queuedTimeoutInMinutes?: number | null;
		encryptionKey?: string | null;
		tags?: Array<Tag> | null;

		/** Information about the VPC configuration that AWS CodeBuild accesses. */
		vpcConfig?: VpcConfig | null;
		badgeEnabled?: boolean | null;

		/** Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a specified S3 bucket, or both. */
		logsConfig?: LogsConfig | null;
		fileSystemLocations?: Array<ProjectFileSystemLocation> | null;
	}

	export interface UpdateReportGroupOutput {

		/** A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. */
		reportGroup?: ReportGroup | null;
	}

	export interface UpdateReportGroupInput {
		arn: string;

		/** Information about the location where the run of a report is exported. */
		exportConfig?: ReportExportConfig | null;
		tags?: Array<Tag> | null;
	}

	export interface UpdateWebhookOutput {

		/** Information about a webhook that connects repository events to a build project in AWS CodeBuild. */
		webhook?: Webhook | null;
	}

	export interface UpdateWebhookInput {
		projectName: string;
		branchFilter?: string | null;
		rotateSecret?: boolean | null;
		filterGroups?: Array<Array<WebhookFilter>> | null;
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

