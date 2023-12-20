import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAppResult {

		/**
		 * Amplify App represents different branches of a repository for building, deploying, and hosting.
		 * Required
		 */
		app: App;
	}
	export interface CreateAppResultFormProperties {
	}
	export function CreateCreateAppResultFormGroup() {
		return new FormGroup<CreateAppResultFormProperties>({
		});

	}


	/**  Amplify App represents different branches of a repository for building, deploying, and hosting.  */
	export interface App {
		appId: string;
		appArn: string;
		name: string;
		tags?: TagMap;
		description: string;
		repository: string;
		platform: AppPlatform;
		createTime: Date;
		updateTime: Date;
		iamServiceRoleArn?: string | null;
		environmentVariables: EnvironmentVariables;
		defaultDomain: string;
		enableBranchAutoBuild: boolean;
		enableBasicAuth: boolean;
		basicAuthCredentials?: string | null;
		customRules?: Array<CustomRule>;

		/** Structure with Production Branch information. */
		productionBranch?: ProductionBranch;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;
		enableAutoBranchCreation?: boolean | null;
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
	}

	/**  Amplify App represents different branches of a repository for building, deploying, and hosting.  */
	export interface AppFormProperties {
		appId: FormControl<string | null | undefined>,
		appArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		repository: FormControl<string | null | undefined>,
		platform: FormControl<AppPlatform | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
		iamServiceRoleArn: FormControl<string | null | undefined>,
		defaultDomain: FormControl<string | null | undefined>,
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			appArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<AppPlatform | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			defaultDomain: new FormControl<string | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
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

	export enum AppPlatform { WEB = 0 }

	export interface EnvironmentVariables {
	}
	export interface EnvironmentVariablesFormProperties {
	}
	export function CreateEnvironmentVariablesFormGroup() {
		return new FormGroup<EnvironmentVariablesFormProperties>({
		});

	}


	/**  Custom rewrite / redirect rule.  */
	export interface CustomRule {
		source: string;
		target: string;
		status?: string | null;
		condition?: string | null;
	}

	/**  Custom rewrite / redirect rule.  */
	export interface CustomRuleFormProperties {
		source: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		condition: FormControl<string | null | undefined>,
	}
	export function CreateCustomRuleFormGroup() {
		return new FormGroup<CustomRuleFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Structure with Production Branch information.  */
	export interface ProductionBranch {
		lastDeployTime?: Date | null;
		status?: string | null;
		thumbnailUrl?: string | null;
		branchName?: string | null;
	}

	/**  Structure with Production Branch information.  */
	export interface ProductionBranchFormProperties {
		lastDeployTime: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
		thumbnailUrl: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
	}
	export function CreateProductionBranchFormGroup() {
		return new FormGroup<ProductionBranchFormProperties>({
			lastDeployTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Structure with auto branch creation config.  */
	export interface AutoBranchCreationConfig {
		stage?: AutoBranchCreationConfigStage | null;
		framework?: string | null;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string | null;
		enableBasicAuth?: boolean | null;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string | null;
	}

	/**  Structure with auto branch creation config.  */
	export interface AutoBranchCreationConfigFormProperties {
		stage: FormControl<AutoBranchCreationConfigStage | null | undefined>,
		framework: FormControl<string | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateAutoBranchCreationConfigFormGroup() {
		return new FormGroup<AutoBranchCreationConfigFormProperties>({
			stage: new FormControl<AutoBranchCreationConfigStage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutoBranchCreationConfigStage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }

	export enum Stage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
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

	export interface DependentServiceFailureException {
	}
	export interface DependentServiceFailureExceptionFormProperties {
	}
	export function CreateDependentServiceFailureExceptionFormGroup() {
		return new FormGroup<DependentServiceFailureExceptionFormProperties>({
		});

	}


	/**  Result structure for create backend environment.  */
	export interface CreateBackendEnvironmentResult {

		/**
		 * Backend environment for an Amplify App.
		 * Required
		 */
		backendEnvironment: BackendEnvironment;
	}

	/**  Result structure for create backend environment.  */
	export interface CreateBackendEnvironmentResultFormProperties {
	}
	export function CreateCreateBackendEnvironmentResultFormGroup() {
		return new FormGroup<CreateBackendEnvironmentResultFormProperties>({
		});

	}


	/**  Backend environment for an Amplify App.  */
	export interface BackendEnvironment {
		backendEnvironmentArn: string;
		environmentName: string;
		stackName?: string | null;
		deploymentArtifacts?: string | null;
		createTime: Date;
		updateTime: Date;
	}

	/**  Backend environment for an Amplify App.  */
	export interface BackendEnvironmentFormProperties {
		backendEnvironmentArn: FormControl<string | null | undefined>,
		environmentName: FormControl<string | null | undefined>,
		stackName: FormControl<string | null | undefined>,
		deploymentArtifacts: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBackendEnvironmentFormGroup() {
		return new FormGroup<BackendEnvironmentFormProperties>({
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined),
			environmentName: new FormControl<string | null | undefined>(undefined),
			stackName: new FormControl<string | null | undefined>(undefined),
			deploymentArtifacts: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}


	/**  Result structure for create branch request.  */
	export interface CreateBranchResult {

		/**
		 * Branch for an Amplify App, which maps to a 3rd party repository branch.
		 * Required
		 */
		branch: Branch;
	}

	/**  Result structure for create branch request.  */
	export interface CreateBranchResultFormProperties {
	}
	export function CreateCreateBranchResultFormGroup() {
		return new FormGroup<CreateBranchResultFormProperties>({
		});

	}


	/**  Branch for an Amplify App, which maps to a 3rd party repository branch.  */
	export interface Branch {
		branchArn: string;
		branchName: string;
		description: string;
		tags?: TagMap;
		stage: AutoBranchCreationConfigStage;
		displayName: string;
		enableNotification: boolean;
		createTime: Date;
		updateTime: Date;
		environmentVariables: EnvironmentVariables;
		enableAutoBuild: boolean;
		customDomains: Array<string>;
		framework: string;
		activeJobId: string;
		totalNumberOfJobs: string;
		enableBasicAuth: boolean;
		thumbnailUrl?: string | null;
		basicAuthCredentials?: string | null;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;

		/**
		 * The content TTL for the website in seconds.
		 * Required
		 */
		ttl: string;
		associatedResources?: Array<string>;
		enablePullRequestPreview: boolean;
		pullRequestEnvironmentName?: string | null;
		destinationBranch?: string | null;
		sourceBranch?: string | null;
		backendEnvironmentArn?: string | null;
	}

	/**  Branch for an Amplify App, which maps to a 3rd party repository branch.  */
	export interface BranchFormProperties {
		branchArn: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		stage: FormControl<AutoBranchCreationConfigStage | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		enableNotification: FormControl<boolean | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		framework: FormControl<string | null | undefined>,
		activeJobId: FormControl<string | null | undefined>,
		totalNumberOfJobs: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		thumbnailUrl: FormControl<string | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,

		/**
		 * The content TTL for the website in seconds.
		 * Required
		 */
		ttl: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
		destinationBranch: FormControl<string | null | undefined>,
		sourceBranch: FormControl<string | null | undefined>,
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateBranchFormGroup() {
		return new FormGroup<BranchFormProperties>({
			branchArn: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<AutoBranchCreationConfigStage | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			activeJobId: new FormControl<string | null | undefined>(undefined),
			totalNumberOfJobs: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
			destinationBranch: new FormControl<string | null | undefined>(undefined),
			sourceBranch: new FormControl<string | null | undefined>(undefined),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure for create a new deployment.  */
	export interface CreateDeploymentResult {
		jobId?: string | null;
		fileUploadUrls: FileUploadUrls;
		zipUploadUrl: string;
	}

	/**  Result structure for create a new deployment.  */
	export interface CreateDeploymentResultFormProperties {
		jobId: FormControl<string | null | undefined>,
		zipUploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResultFormGroup() {
		return new FormGroup<CreateDeploymentResultFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			zipUploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileUploadUrls {
	}
	export interface FileUploadUrlsFormProperties {
	}
	export function CreateFileUploadUrlsFormGroup() {
		return new FormGroup<FileUploadUrlsFormProperties>({
		});

	}


	/**  Result structure for the create Domain Association request.  */
	export interface CreateDomainAssociationResult {

		/**
		 * Structure for Domain Association, which associates a custom domain with an Amplify App.
		 * Required
		 */
		domainAssociation: DomainAssociation;
	}

	/**  Result structure for the create Domain Association request.  */
	export interface CreateDomainAssociationResultFormProperties {
	}
	export function CreateCreateDomainAssociationResultFormGroup() {
		return new FormGroup<CreateDomainAssociationResultFormProperties>({
		});

	}


	/**  Structure for Domain Association, which associates a custom domain with an Amplify App.  */
	export interface DomainAssociation {
		domainAssociationArn: string;
		domainName: string;
		enableAutoSubDomain: boolean;
		domainStatus: DomainAssociationDomainStatus;
		statusReason: string;
		certificateVerificationDNSRecord?: string | null;
		subDomains: Array<SubDomain>;
	}

	/**  Structure for Domain Association, which associates a custom domain with an Amplify App.  */
	export interface DomainAssociationFormProperties {
		domainAssociationArn: FormControl<string | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		enableAutoSubDomain: FormControl<boolean | null | undefined>,
		domainStatus: FormControl<DomainAssociationDomainStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		certificateVerificationDNSRecord: FormControl<string | null | undefined>,
	}
	export function CreateDomainAssociationFormGroup() {
		return new FormGroup<DomainAssociationFormProperties>({
			domainAssociationArn: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
			domainStatus: new FormControl<DomainAssociationDomainStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			certificateVerificationDNSRecord: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainAssociationDomainStatus { PENDING_VERIFICATION = 0, IN_PROGRESS = 1, AVAILABLE = 2, PENDING_DEPLOYMENT = 3, FAILED = 4, CREATING = 5, REQUESTING_CERTIFICATE = 6, UPDATING = 7 }


	/**  Subdomain for the Domain Association.  */
	export interface SubDomain {

		/**
		 * Setting for the Subdomain.
		 * Required
		 */
		subDomainSetting: SubDomainSetting;
		verified: boolean;
		dnsRecord: string;
	}

	/**  Subdomain for the Domain Association.  */
	export interface SubDomainFormProperties {
		verified: FormControl<boolean | null | undefined>,
		dnsRecord: FormControl<string | null | undefined>,
	}
	export function CreateSubDomainFormGroup() {
		return new FormGroup<SubDomainFormProperties>({
			verified: new FormControl<boolean | null | undefined>(undefined),
			dnsRecord: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Setting for the Subdomain.  */
	export interface SubDomainSetting {
		prefix: string;
		branchName: string;
	}

	/**  Setting for the Subdomain.  */
	export interface SubDomainSettingFormProperties {
		prefix: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
	}
	export function CreateSubDomainSettingFormGroup() {
		return new FormGroup<SubDomainSettingFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure for the create webhook request.  */
	export interface CreateWebhookResult {

		/**
		 * Structure for webhook, which associates a webhook with an Amplify App.
		 * Required
		 */
		webhook: Webhook;
	}

	/**  Result structure for the create webhook request.  */
	export interface CreateWebhookResultFormProperties {
	}
	export function CreateCreateWebhookResultFormGroup() {
		return new FormGroup<CreateWebhookResultFormProperties>({
		});

	}


	/**  Structure for webhook, which associates a webhook with an Amplify App.  */
	export interface Webhook {
		webhookArn: string;
		webhookId: string;
		webhookUrl: string;
		branchName: string;
		description: string;
		createTime: Date;
		updateTime: Date;
	}

	/**  Structure for webhook, which associates a webhook with an Amplify App.  */
	export interface WebhookFormProperties {
		webhookArn: FormControl<string | null | undefined>,
		webhookId: FormControl<string | null | undefined>,
		webhookUrl: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			webhookArn: new FormControl<string | null | undefined>(undefined),
			webhookId: new FormControl<string | null | undefined>(undefined),
			webhookUrl: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Result structure for an Amplify App delete request.  */
	export interface DeleteAppResult {

		/**
		 * Amplify App represents different branches of a repository for building, deploying, and hosting.
		 * Required
		 */
		app: App;
	}

	/**  Result structure for an Amplify App delete request.  */
	export interface DeleteAppResultFormProperties {
	}
	export function CreateDeleteAppResultFormGroup() {
		return new FormGroup<DeleteAppResultFormProperties>({
		});

	}


	/**  Result structure of a delete backend environment result.  */
	export interface DeleteBackendEnvironmentResult {

		/**
		 * Backend environment for an Amplify App.
		 * Required
		 */
		backendEnvironment: BackendEnvironment;
	}

	/**  Result structure of a delete backend environment result.  */
	export interface DeleteBackendEnvironmentResultFormProperties {
	}
	export function CreateDeleteBackendEnvironmentResultFormGroup() {
		return new FormGroup<DeleteBackendEnvironmentResultFormProperties>({
		});

	}


	/**  Result structure for delete branch request.  */
	export interface DeleteBranchResult {

		/**
		 * Branch for an Amplify App, which maps to a 3rd party repository branch.
		 * Required
		 */
		branch: Branch;
	}

	/**  Result structure for delete branch request.  */
	export interface DeleteBranchResultFormProperties {
	}
	export function CreateDeleteBranchResultFormGroup() {
		return new FormGroup<DeleteBranchResultFormProperties>({
		});

	}

	export interface DeleteDomainAssociationResult {

		/**
		 * Structure for Domain Association, which associates a custom domain with an Amplify App.
		 * Required
		 */
		domainAssociation: DomainAssociation;
	}
	export interface DeleteDomainAssociationResultFormProperties {
	}
	export function CreateDeleteDomainAssociationResultFormGroup() {
		return new FormGroup<DeleteDomainAssociationResultFormProperties>({
		});

	}


	/**  Result structure for the delete job request.  */
	export interface DeleteJobResult {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		jobSummary: JobSummary;
	}

	/**  Result structure for the delete job request.  */
	export interface DeleteJobResultFormProperties {
	}
	export function CreateDeleteJobResultFormGroup() {
		return new FormGroup<DeleteJobResultFormProperties>({
		});

	}


	/**  Structure for the summary of a Job.  */
	export interface JobSummary {
		jobArn: string;
		jobId: string;
		commitId: string;
		commitMessage: string;
		commitTime: Date;
		startTime: Date;
		status: JobSummaryStatus;
		endTime?: Date | null;
		jobType: JobSummaryJobType;
	}

	/**  Structure for the summary of a Job.  */
	export interface JobSummaryFormProperties {
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		commitTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		status: FormControl<JobSummaryStatus | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		jobType: FormControl<JobSummaryJobType | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			commitTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobSummaryStatus | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			jobType: new FormControl<JobSummaryJobType | null | undefined>(undefined),
		});

	}

	export enum JobSummaryStatus { PENDING = 0, PROVISIONING = 1, RUNNING = 2, FAILED = 3, SUCCEED = 4, CANCELLING = 5, CANCELLED = 6 }

	export enum JobSummaryJobType { RELEASE = 0, RETRY = 1, MANUAL = 2, WEB_HOOK = 3 }


	/**  Result structure for the delete webhook request.  */
	export interface DeleteWebhookResult {

		/**
		 * Structure for webhook, which associates a webhook with an Amplify App.
		 * Required
		 */
		webhook: Webhook;
	}

	/**  Result structure for the delete webhook request.  */
	export interface DeleteWebhookResultFormProperties {
	}
	export function CreateDeleteWebhookResultFormGroup() {
		return new FormGroup<DeleteWebhookResultFormProperties>({
		});

	}


	/**  Result structure for the generate access logs request.  */
	export interface GenerateAccessLogsResult {
		logUrl?: string | null;
	}

	/**  Result structure for the generate access logs request.  */
	export interface GenerateAccessLogsResultFormProperties {
		logUrl: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessLogsResultFormGroup() {
		return new FormGroup<GenerateAccessLogsResultFormProperties>({
			logUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAppResult {

		/**
		 * Amplify App represents different branches of a repository for building, deploying, and hosting.
		 * Required
		 */
		app: App;
	}
	export interface GetAppResultFormProperties {
	}
	export function CreateGetAppResultFormGroup() {
		return new FormGroup<GetAppResultFormProperties>({
		});

	}


	/**  Result structure for the get artifact request.  */
	export interface GetArtifactUrlResult {
		artifactId: string;
		artifactUrl: string;
	}

	/**  Result structure for the get artifact request.  */
	export interface GetArtifactUrlResultFormProperties {
		artifactId: FormControl<string | null | undefined>,
		artifactUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetArtifactUrlResultFormGroup() {
		return new FormGroup<GetArtifactUrlResultFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			artifactUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure for get backend environment result.  */
	export interface GetBackendEnvironmentResult {

		/**
		 * Backend environment for an Amplify App.
		 * Required
		 */
		backendEnvironment: BackendEnvironment;
	}

	/**  Result structure for get backend environment result.  */
	export interface GetBackendEnvironmentResultFormProperties {
	}
	export function CreateGetBackendEnvironmentResultFormGroup() {
		return new FormGroup<GetBackendEnvironmentResultFormProperties>({
		});

	}

	export interface GetBranchResult {

		/**
		 * Branch for an Amplify App, which maps to a 3rd party repository branch.
		 * Required
		 */
		branch: Branch;
	}
	export interface GetBranchResultFormProperties {
	}
	export function CreateGetBranchResultFormGroup() {
		return new FormGroup<GetBranchResultFormProperties>({
		});

	}


	/**  Result structure for the get Domain Association request.  */
	export interface GetDomainAssociationResult {

		/**
		 * Structure for Domain Association, which associates a custom domain with an Amplify App.
		 * Required
		 */
		domainAssociation: DomainAssociation;
	}

	/**  Result structure for the get Domain Association request.  */
	export interface GetDomainAssociationResultFormProperties {
	}
	export function CreateGetDomainAssociationResultFormGroup() {
		return new FormGroup<GetDomainAssociationResultFormProperties>({
		});

	}

	export interface GetJobResult {

		/**
		 * Structure for an execution job for an Amplify App.
		 * Required
		 */
		job: Job;
	}
	export interface GetJobResultFormProperties {
	}
	export function CreateGetJobResultFormGroup() {
		return new FormGroup<GetJobResultFormProperties>({
		});

	}


	/**  Structure for an execution job for an Amplify App.  */
	export interface Job {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		summary: JobSummary;
		steps: Array<Step>;
	}

	/**  Structure for an execution job for an Amplify App.  */
	export interface JobFormProperties {
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
		});

	}


	/**  Structure for an execution step for an execution job, for an Amplify App.  */
	export interface Step {
		stepName: string;
		startTime: Date;
		status: JobSummaryStatus;
		endTime: Date;
		logUrl?: string | null;
		artifactsUrl?: string | null;
		testArtifactsUrl?: string | null;
		testConfigUrl?: string | null;
		screenshots?: Screenshots;
		statusReason?: string | null;
		context?: string | null;
	}

	/**  Structure for an execution step for an execution job, for an Amplify App.  */
	export interface StepFormProperties {
		stepName: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		status: FormControl<JobSummaryStatus | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		logUrl: FormControl<string | null | undefined>,
		artifactsUrl: FormControl<string | null | undefined>,
		testArtifactsUrl: FormControl<string | null | undefined>,
		testConfigUrl: FormControl<string | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		context: FormControl<string | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			stepName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobSummaryStatus | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			logUrl: new FormControl<string | null | undefined>(undefined),
			artifactsUrl: new FormControl<string | null | undefined>(undefined),
			testArtifactsUrl: new FormControl<string | null | undefined>(undefined),
			testConfigUrl: new FormControl<string | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Screenshots {
	}
	export interface ScreenshotsFormProperties {
	}
	export function CreateScreenshotsFormGroup() {
		return new FormGroup<ScreenshotsFormProperties>({
		});

	}


	/**  Result structure for the get webhook request.  */
	export interface GetWebhookResult {

		/**
		 * Structure for webhook, which associates a webhook with an Amplify App.
		 * Required
		 */
		webhook: Webhook;
	}

	/**  Result structure for the get webhook request.  */
	export interface GetWebhookResultFormProperties {
	}
	export function CreateGetWebhookResultFormGroup() {
		return new FormGroup<GetWebhookResultFormProperties>({
		});

	}


	/**  Result structure for an Amplify App list request.  */
	export interface ListAppsResult {
		apps: Array<App>;
		nextToken?: string | null;
	}

	/**  Result structure for an Amplify App list request.  */
	export interface ListAppsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppsResultFormGroup() {
		return new FormGroup<ListAppsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure for the list artifacts request.  */
	export interface ListArtifactsResult {
		artifacts: Array<Artifact>;
		nextToken?: string | null;
	}

	/**  Result structure for the list artifacts request.  */
	export interface ListArtifactsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListArtifactsResultFormGroup() {
		return new FormGroup<ListArtifactsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Structure for artifact.  */
	export interface Artifact {
		artifactFileName: string;
		artifactId: string;
	}

	/**  Structure for artifact.  */
	export interface ArtifactFormProperties {
		artifactFileName: FormControl<string | null | undefined>,
		artifactId: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			artifactFileName: new FormControl<string | null | undefined>(undefined),
			artifactId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure for list backend environments result.  */
	export interface ListBackendEnvironmentsResult {
		backendEnvironments: Array<BackendEnvironment>;
		nextToken?: string | null;
	}

	/**  Result structure for list backend environments result.  */
	export interface ListBackendEnvironmentsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackendEnvironmentsResultFormGroup() {
		return new FormGroup<ListBackendEnvironmentsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure for list branches request.  */
	export interface ListBranchesResult {
		branches: Array<Branch>;
		nextToken?: string | null;
	}

	/**  Result structure for list branches request.  */
	export interface ListBranchesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBranchesResultFormGroup() {
		return new FormGroup<ListBranchesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure for the list Domain Association request.  */
	export interface ListDomainAssociationsResult {
		domainAssociations: Array<DomainAssociation>;
		nextToken?: string | null;
	}

	/**  Result structure for the list Domain Association request.  */
	export interface ListDomainAssociationsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainAssociationsResultFormGroup() {
		return new FormGroup<ListDomainAssociationsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Maximum number of records to list in a single response.  */
	export interface ListJobsResult {
		jobSummaries: Array<JobSummary>;
		nextToken?: string | null;
	}

	/**  Maximum number of records to list in a single response.  */
	export interface ListJobsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResultFormGroup() {
		return new FormGroup<ListJobsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Response for list tags.  */
	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	/**  Response for list tags.  */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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


	/**  Result structure for the list webhooks request.  */
	export interface ListWebhooksResult {
		webhooks: Array<Webhook>;
		nextToken?: string | null;
	}

	/**  Result structure for the list webhooks request.  */
	export interface ListWebhooksResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebhooksResultFormGroup() {
		return new FormGroup<ListWebhooksResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure for start a deployment.  */
	export interface StartDeploymentResult {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		jobSummary: JobSummary;
	}

	/**  Result structure for start a deployment.  */
	export interface StartDeploymentResultFormProperties {
	}
	export function CreateStartDeploymentResultFormGroup() {
		return new FormGroup<StartDeploymentResultFormProperties>({
		});

	}


	/**  Result structure for run job request.  */
	export interface StartJobResult {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		jobSummary: JobSummary;
	}

	/**  Result structure for run job request.  */
	export interface StartJobResultFormProperties {
	}
	export function CreateStartJobResultFormGroup() {
		return new FormGroup<StartJobResultFormProperties>({
		});

	}


	/**  Result structure for the stop job request.  */
	export interface StopJobResult {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		jobSummary: JobSummary;
	}

	/**  Result structure for the stop job request.  */
	export interface StopJobResultFormProperties {
	}
	export function CreateStopJobResultFormGroup() {
		return new FormGroup<StopJobResultFormProperties>({
		});

	}


	/**  Response for tag resource.  */
	export interface TagResourceResponse {
	}

	/**  Response for tag resource.  */
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}


	/**  Response for untag resource.  */
	export interface UntagResourceResponse {
	}

	/**  Response for untag resource.  */
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}


	/**  Result structure for an Amplify App update request.  */
	export interface UpdateAppResult {

		/**
		 * Amplify App represents different branches of a repository for building, deploying, and hosting.
		 * Required
		 */
		app: App;
	}

	/**  Result structure for an Amplify App update request.  */
	export interface UpdateAppResultFormProperties {
	}
	export function CreateUpdateAppResultFormGroup() {
		return new FormGroup<UpdateAppResultFormProperties>({
		});

	}


	/**  Result structure for update branch request.  */
	export interface UpdateBranchResult {

		/**
		 * Branch for an Amplify App, which maps to a 3rd party repository branch.
		 * Required
		 */
		branch: Branch;
	}

	/**  Result structure for update branch request.  */
	export interface UpdateBranchResultFormProperties {
	}
	export function CreateUpdateBranchResultFormGroup() {
		return new FormGroup<UpdateBranchResultFormProperties>({
		});

	}


	/**  Result structure for the update Domain Association request.  */
	export interface UpdateDomainAssociationResult {

		/**
		 * Structure for Domain Association, which associates a custom domain with an Amplify App.
		 * Required
		 */
		domainAssociation: DomainAssociation;
	}

	/**  Result structure for the update Domain Association request.  */
	export interface UpdateDomainAssociationResultFormProperties {
	}
	export function CreateUpdateDomainAssociationResultFormGroup() {
		return new FormGroup<UpdateDomainAssociationResultFormProperties>({
		});

	}


	/**  Result structure for the update webhook request.  */
	export interface UpdateWebhookResult {

		/**
		 * Structure for webhook, which associates a webhook with an Amplify App.
		 * Required
		 */
		webhook: Webhook;
	}

	/**  Result structure for the update webhook request.  */
	export interface UpdateWebhookResultFormProperties {
	}
	export function CreateUpdateWebhookResultFormGroup() {
		return new FormGroup<UpdateWebhookResultFormProperties>({
		});

	}

	export enum Platform { WEB = 0 }


	/**  Request structure used to create Apps in Amplify.  */
	export interface CreateAppRequest {
		name: string;
		description?: string | null;
		repository?: string | null;
		platform?: AppPlatform | null;
		iamServiceRoleArn?: string | null;
		oauthToken?: string | null;
		accessToken?: string | null;
		environmentVariables?: EnvironmentVariables;
		enableBranchAutoBuild?: boolean | null;
		enableBasicAuth?: boolean | null;
		basicAuthCredentials?: string | null;
		customRules?: Array<CustomRule>;
		tags?: TagMap;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;
		enableAutoBranchCreation?: boolean | null;
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
	}

	/**  Request structure used to create Apps in Amplify.  */
	export interface CreateAppRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		repository: FormControl<string | null | undefined>,
		platform: FormControl<AppPlatform | null | undefined>,
		iamServiceRoleArn: FormControl<string | null | undefined>,
		oauthToken: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAppRequestFormGroup() {
		return new FormGroup<CreateAppRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<AppPlatform | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			oauthToken: new FormControl<string | null | undefined>(undefined),
			accessToken: new FormControl<string | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Request structure for a backend environment create request.  */
	export interface CreateBackendEnvironmentRequest {
		environmentName: string;
		stackName?: string | null;
		deploymentArtifacts?: string | null;
	}

	/**  Request structure for a backend environment create request.  */
	export interface CreateBackendEnvironmentRequestFormProperties {
		environmentName: FormControl<string | null | undefined>,
		stackName: FormControl<string | null | undefined>,
		deploymentArtifacts: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendEnvironmentRequestFormGroup() {
		return new FormGroup<CreateBackendEnvironmentRequestFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined),
			stackName: new FormControl<string | null | undefined>(undefined),
			deploymentArtifacts: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure for a branch create request.  */
	export interface CreateBranchRequest {
		branchName: string;
		description?: string | null;
		stage?: AutoBranchCreationConfigStage | null;
		framework?: string | null;
		enableNotification?: boolean | null;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string | null;
		enableBasicAuth?: boolean | null;
		tags?: TagMap;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;

		/** The content TTL for the website in seconds. */
		ttl?: string | null;
		displayName?: string | null;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string | null;
		backendEnvironmentArn?: string | null;
	}

	/**  Request structure for a branch create request.  */
	export interface CreateBranchRequestFormProperties {
		branchName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		stage: FormControl<AutoBranchCreationConfigStage | null | undefined>,
		framework: FormControl<string | null | undefined>,
		enableNotification: FormControl<boolean | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,

		/** The content TTL for the website in seconds. */
		ttl: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBranchRequestFormGroup() {
		return new FormGroup<CreateBranchRequestFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<AutoBranchCreationConfigStage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileMap {
	}
	export interface FileMapFormProperties {
	}
	export function CreateFileMapFormGroup() {
		return new FormGroup<FileMapFormProperties>({
		});

	}


	/**  Request structure for create a new deployment.  */
	export interface CreateDeploymentRequest {
		fileMap?: FileMap;
	}

	/**  Request structure for create a new deployment.  */
	export interface CreateDeploymentRequestFormProperties {
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
		});

	}


	/**  Request structure for create Domain Association request.  */
	export interface CreateDomainAssociationRequest {
		domainName: string;
		enableAutoSubDomain?: boolean | null;
		subDomainSettings: Array<SubDomainSetting>;
	}

	/**  Request structure for create Domain Association request.  */
	export interface CreateDomainAssociationRequestFormProperties {
		domainName: FormControl<string | null | undefined>,
		enableAutoSubDomain: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainAssociationRequestFormGroup() {
		return new FormGroup<CreateDomainAssociationRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Request structure for create webhook request.  */
	export interface CreateWebhookRequest {
		branchName: string;
		description?: string | null;
	}

	/**  Request structure for create webhook request.  */
	export interface CreateWebhookRequestFormProperties {
		branchName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookRequestFormGroup() {
		return new FormGroup<CreateWebhookRequestFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure for an Amplify App delete request.  */
	export interface DeleteAppRequest {
	}

	/**  Request structure for an Amplify App delete request.  */
	export interface DeleteAppRequestFormProperties {
	}
	export function CreateDeleteAppRequestFormGroup() {
		return new FormGroup<DeleteAppRequestFormProperties>({
		});

	}


	/**  Request structure for delete backend environment request.  */
	export interface DeleteBackendEnvironmentRequest {
	}

	/**  Request structure for delete backend environment request.  */
	export interface DeleteBackendEnvironmentRequestFormProperties {
	}
	export function CreateDeleteBackendEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteBackendEnvironmentRequestFormProperties>({
		});

	}


	/**  Request structure for delete branch request.  */
	export interface DeleteBranchRequest {
	}

	/**  Request structure for delete branch request.  */
	export interface DeleteBranchRequestFormProperties {
	}
	export function CreateDeleteBranchRequestFormGroup() {
		return new FormGroup<DeleteBranchRequestFormProperties>({
		});

	}


	/**  Request structure for the delete Domain Association request.  */
	export interface DeleteDomainAssociationRequest {
	}

	/**  Request structure for the delete Domain Association request.  */
	export interface DeleteDomainAssociationRequestFormProperties {
	}
	export function CreateDeleteDomainAssociationRequestFormGroup() {
		return new FormGroup<DeleteDomainAssociationRequestFormProperties>({
		});

	}


	/**  Request structure for delete job request.  */
	export interface DeleteJobRequest {
	}

	/**  Request structure for delete job request.  */
	export interface DeleteJobRequestFormProperties {
	}
	export function CreateDeleteJobRequestFormGroup() {
		return new FormGroup<DeleteJobRequestFormProperties>({
		});

	}


	/**  Request structure for the delete webhook request.  */
	export interface DeleteWebhookRequest {
	}

	/**  Request structure for the delete webhook request.  */
	export interface DeleteWebhookRequestFormProperties {
	}
	export function CreateDeleteWebhookRequestFormGroup() {
		return new FormGroup<DeleteWebhookRequestFormProperties>({
		});

	}

	export enum DomainStatus { PENDING_VERIFICATION = 0, IN_PROGRESS = 1, AVAILABLE = 2, PENDING_DEPLOYMENT = 3, FAILED = 4, CREATING = 5, REQUESTING_CERTIFICATE = 6, UPDATING = 7 }


	/**  Request structure for the generate access logs request.  */
	export interface GenerateAccessLogsRequest {
		startTime?: Date | null;
		endTime?: Date | null;
		domainName: string;
	}

	/**  Request structure for the generate access logs request.  */
	export interface GenerateAccessLogsRequestFormProperties {
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessLogsRequestFormGroup() {
		return new FormGroup<GenerateAccessLogsRequestFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure for get App request.  */
	export interface GetAppRequest {
	}

	/**  Request structure for get App request.  */
	export interface GetAppRequestFormProperties {
	}
	export function CreateGetAppRequestFormGroup() {
		return new FormGroup<GetAppRequestFormProperties>({
		});

	}


	/**  Request structure for the get artifact request.  */
	export interface GetArtifactUrlRequest {
	}

	/**  Request structure for the get artifact request.  */
	export interface GetArtifactUrlRequestFormProperties {
	}
	export function CreateGetArtifactUrlRequestFormGroup() {
		return new FormGroup<GetArtifactUrlRequestFormProperties>({
		});

	}


	/**  Request structure for get backend environment request.  */
	export interface GetBackendEnvironmentRequest {
	}

	/**  Request structure for get backend environment request.  */
	export interface GetBackendEnvironmentRequestFormProperties {
	}
	export function CreateGetBackendEnvironmentRequestFormGroup() {
		return new FormGroup<GetBackendEnvironmentRequestFormProperties>({
		});

	}


	/**  Request structure for get branch request.  */
	export interface GetBranchRequest {
	}

	/**  Request structure for get branch request.  */
	export interface GetBranchRequestFormProperties {
	}
	export function CreateGetBranchRequestFormGroup() {
		return new FormGroup<GetBranchRequestFormProperties>({
		});

	}


	/**  Request structure for the get Domain Association request.  */
	export interface GetDomainAssociationRequest {
	}

	/**  Request structure for the get Domain Association request.  */
	export interface GetDomainAssociationRequestFormProperties {
	}
	export function CreateGetDomainAssociationRequestFormGroup() {
		return new FormGroup<GetDomainAssociationRequestFormProperties>({
		});

	}


	/**  Request structure for get job request.  */
	export interface GetJobRequest {
	}

	/**  Request structure for get job request.  */
	export interface GetJobRequestFormProperties {
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
		});

	}


	/**  Request structure for the get webhook request.  */
	export interface GetWebhookRequest {
	}

	/**  Request structure for the get webhook request.  */
	export interface GetWebhookRequestFormProperties {
	}
	export function CreateGetWebhookRequestFormGroup() {
		return new FormGroup<GetWebhookRequestFormProperties>({
		});

	}

	export enum JobStatus { PENDING = 0, PROVISIONING = 1, RUNNING = 2, FAILED = 3, SUCCEED = 4, CANCELLING = 5, CANCELLED = 6 }

	export enum JobType { RELEASE = 0, RETRY = 1, MANUAL = 2, WEB_HOOK = 3 }


	/**  Request structure for an Amplify App list request.  */
	export interface ListAppsRequest {
	}

	/**  Request structure for an Amplify App list request.  */
	export interface ListAppsRequestFormProperties {
	}
	export function CreateListAppsRequestFormGroup() {
		return new FormGroup<ListAppsRequestFormProperties>({
		});

	}


	/**  Request structure for the list artifacts request.  */
	export interface ListArtifactsRequest {
	}

	/**  Request structure for the list artifacts request.  */
	export interface ListArtifactsRequestFormProperties {
	}
	export function CreateListArtifactsRequestFormGroup() {
		return new FormGroup<ListArtifactsRequestFormProperties>({
		});

	}


	/**  Request structure for list backend environments request.  */
	export interface ListBackendEnvironmentsRequest {
		environmentName?: string | null;
	}

	/**  Request structure for list backend environments request.  */
	export interface ListBackendEnvironmentsRequestFormProperties {
		environmentName: FormControl<string | null | undefined>,
	}
	export function CreateListBackendEnvironmentsRequestFormGroup() {
		return new FormGroup<ListBackendEnvironmentsRequestFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure for list branches request.  */
	export interface ListBranchesRequest {
	}

	/**  Request structure for list branches request.  */
	export interface ListBranchesRequestFormProperties {
	}
	export function CreateListBranchesRequestFormGroup() {
		return new FormGroup<ListBranchesRequestFormProperties>({
		});

	}


	/**  Request structure for the list Domain Associations request.  */
	export interface ListDomainAssociationsRequest {
	}

	/**  Request structure for the list Domain Associations request.  */
	export interface ListDomainAssociationsRequestFormProperties {
	}
	export function CreateListDomainAssociationsRequestFormGroup() {
		return new FormGroup<ListDomainAssociationsRequestFormProperties>({
		});

	}


	/**  Request structure for list job request.  */
	export interface ListJobsRequest {
	}

	/**  Request structure for list job request.  */
	export interface ListJobsRequestFormProperties {
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
		});

	}


	/**  Request structure used to list tags for resource.  */
	export interface ListTagsForResourceRequest {
	}

	/**  Request structure used to list tags for resource.  */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/**  Request structure for the list webhooks request.  */
	export interface ListWebhooksRequest {
	}

	/**  Request structure for the list webhooks request.  */
	export interface ListWebhooksRequestFormProperties {
	}
	export function CreateListWebhooksRequestFormGroup() {
		return new FormGroup<ListWebhooksRequestFormProperties>({
		});

	}


	/**  Request structure for start a deployment.  */
	export interface StartDeploymentRequest {
		jobId?: string | null;
		sourceUrl?: string | null;
	}

	/**  Request structure for start a deployment.  */
	export interface StartDeploymentRequestFormProperties {
		jobId: FormControl<string | null | undefined>,
		sourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartDeploymentRequestFormGroup() {
		return new FormGroup<StartDeploymentRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure for Start job request.  */
	export interface StartJobRequest {
		jobId?: string | null;
		jobType: JobSummaryJobType;
		jobReason?: string | null;
		commitId?: string | null;
		commitMessage?: string | null;
		commitTime?: Date | null;
	}

	/**  Request structure for Start job request.  */
	export interface StartJobRequestFormProperties {
		jobId: FormControl<string | null | undefined>,
		jobType: FormControl<JobSummaryJobType | null | undefined>,
		jobReason: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		commitTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartJobRequestFormGroup() {
		return new FormGroup<StartJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<JobSummaryJobType | null | undefined>(undefined),
			jobReason: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			commitTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Request structure for stop job request.  */
	export interface StopJobRequest {
	}

	/**  Request structure for stop job request.  */
	export interface StopJobRequestFormProperties {
	}
	export function CreateStopJobRequestFormGroup() {
		return new FormGroup<StopJobRequestFormProperties>({
		});

	}


	/**  Request structure used to tag resource.  */
	export interface TagResourceRequest {
		tags: TagMap;
	}

	/**  Request structure used to tag resource.  */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/**  Request structure used to untag resource.  */
	export interface UntagResourceRequest {
	}

	/**  Request structure used to untag resource.  */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/**  Request structure for update App request.  */
	export interface UpdateAppRequest {
		name?: string | null;
		description?: string | null;
		platform?: AppPlatform | null;
		iamServiceRoleArn?: string | null;
		environmentVariables?: EnvironmentVariables;
		enableBranchAutoBuild?: boolean | null;
		enableBasicAuth?: boolean | null;
		basicAuthCredentials?: string | null;
		customRules?: Array<CustomRule>;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;
		enableAutoBranchCreation?: boolean | null;
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
		repository?: string | null;
		oauthToken?: string | null;
		accessToken?: string | null;
	}

	/**  Request structure for update App request.  */
	export interface UpdateAppRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		platform: FormControl<AppPlatform | null | undefined>,
		iamServiceRoleArn: FormControl<string | null | undefined>,
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,
		repository: FormControl<string | null | undefined>,
		oauthToken: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppRequestFormGroup() {
		return new FormGroup<UpdateAppRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<AppPlatform | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			oauthToken: new FormControl<string | null | undefined>(undefined),
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure for update branch request.  */
	export interface UpdateBranchRequest {
		description?: string | null;
		framework?: string | null;
		stage?: AutoBranchCreationConfigStage | null;
		enableNotification?: boolean | null;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string | null;
		enableBasicAuth?: boolean | null;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;

		/** The content TTL for the website in seconds. */
		ttl?: string | null;
		displayName?: string | null;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string | null;
		backendEnvironmentArn?: string | null;
	}

	/**  Request structure for update branch request.  */
	export interface UpdateBranchRequestFormProperties {
		description: FormControl<string | null | undefined>,
		framework: FormControl<string | null | undefined>,
		stage: FormControl<AutoBranchCreationConfigStage | null | undefined>,
		enableNotification: FormControl<boolean | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,

		/** The content TTL for the website in seconds. */
		ttl: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBranchRequestFormGroup() {
		return new FormGroup<UpdateBranchRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<AutoBranchCreationConfigStage | null | undefined>(undefined),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure for update Domain Association request.  */
	export interface UpdateDomainAssociationRequest {
		enableAutoSubDomain?: boolean | null;
		subDomainSettings: Array<SubDomainSetting>;
	}

	/**  Request structure for update Domain Association request.  */
	export interface UpdateDomainAssociationRequestFormProperties {
		enableAutoSubDomain: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainAssociationRequestFormGroup() {
		return new FormGroup<UpdateDomainAssociationRequestFormProperties>({
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Request structure for update webhook request.  */
	export interface UpdateWebhookRequest {
		branchName?: string | null;
		description?: string | null;
	}

	/**  Request structure for update webhook request.  */
	export interface UpdateWebhookRequestFormProperties {
		branchName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebhookRequestFormGroup() {
		return new FormGroup<UpdateWebhookRequestFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new Amplify App.
		 * Post apps
		 * @return {CreateAppResult} Success
		 */
		CreateApp(requestBody: CreateAppPostBody): Observable<CreateAppResult> {
			return this.http.post<CreateAppResult>(this.baseUri + 'apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists existing Amplify Apps.
		 * Get apps
		 * @param {string} nextToken  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListAppsResult} Success
		 */
		ListApps(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAppsResult> {
			return this.http.get<ListAppsResult>(this.baseUri + 'apps?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new backend environment for an Amplify App.
		 * Post apps/{appId}/backendenvironments
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {CreateBackendEnvironmentResult} Success
		 */
		CreateBackendEnvironment(appId: string, requestBody: CreateBackendEnvironmentPostBody): Observable<CreateBackendEnvironmentResult> {
			return this.http.post<CreateBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists backend environments for an Amplify App.
		 * Get apps/{appId}/backendenvironments
		 * @param {string} appId  Unique Id for an amplify App. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing backen environments from start. If a non-null pagination token is returned in a result, then pass its value in here to list more backend environments. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListBackendEnvironmentsResult} Success
		 */
		ListBackendEnvironments(appId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListBackendEnvironmentsResult> {
			return this.http.get<ListBackendEnvironmentsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new Branch for an Amplify App.
		 * Post apps/{appId}/branches
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {CreateBranchResult} Success
		 */
		CreateBranch(appId: string, requestBody: CreateBranchPostBody): Observable<CreateBranchResult> {
			return this.http.post<CreateBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists branches for an Amplify App.
		 * Get apps/{appId}/branches
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing branches from start. If a non-null pagination token is returned in a result, then pass its value in here to list more branches. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListBranchesResult} Success
		 */
		ListBranches(appId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListBranchesResult> {
			return this.http.get<ListBranchesResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Create a deployment for manual deploy apps. (Apps are not connected to repository)
		 * Post apps/{appId}/branches/{branchName}/deployments
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @return {CreateDeploymentResult} Success
		 */
		CreateDeployment(appId: string, branchName: string, requestBody: CreateDeploymentPostBody): Observable<CreateDeploymentResult> {
			return this.http.post<CreateDeploymentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new DomainAssociation on an App
		 * Post apps/{appId}/domains
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {CreateDomainAssociationResult} Success
		 */
		CreateDomainAssociation(appId: string, requestBody: CreateDomainAssociationPostBody): Observable<CreateDomainAssociationResult> {
			return this.http.post<CreateDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List domains with an app
		 * Get apps/{appId}/domains
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing Apps from start. If non-null pagination token is returned in a result, then pass its value in here to list more projects. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListDomainAssociationsResult} Success
		 */
		ListDomainAssociations(appId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDomainAssociationsResult> {
			return this.http.get<ListDomainAssociationsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Create a new webhook on an App.
		 * Post apps/{appId}/webhooks
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {CreateWebhookResult} Success
		 */
		CreateWebhook(appId: string, requestBody: CreateWebhookPostBody): Observable<CreateWebhookResult> {
			return this.http.post<CreateWebhookResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List webhooks with an app.
		 * Get apps/{appId}/webhooks
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing webhooks from start. If non-null pagination token is returned in a result, then pass its value in here to list more webhooks. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListWebhooksResult} Success
		 */
		ListWebhooks(appId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListWebhooksResult> {
			return this.http.get<ListWebhooksResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/webhooks&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Delete an existing Amplify App by appId.
		 * Delete apps/{appId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {DeleteAppResult} Success
		 */
		DeleteApp(appId: string): Observable<DeleteAppResult> {
			return this.http.delete<DeleteAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), {});
		}

		/**
		 * Retrieves an existing Amplify App by appId.
		 * Get apps/{appId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {GetAppResult} Success
		 */
		GetApp(appId: string): Observable<GetAppResult> {
			return this.http.get<GetAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), {});
		}

		/**
		 * Updates an existing Amplify App.
		 * Post apps/{appId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {UpdateAppResult} Success
		 */
		UpdateApp(appId: string, requestBody: UpdateAppPostBody): Observable<UpdateAppResult> {
			return this.http.post<UpdateAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete backend environment for an Amplify App.
		 * Delete apps/{appId}/backendenvironments/{environmentName}
		 * @param {string} appId  Unique Id of an Amplify App. 
		 * @param {string} environmentName  Name of a backend environment of an Amplify App. 
		 * @return {DeleteBackendEnvironmentResult} Success
		 */
		DeleteBackendEnvironment(appId: string, environmentName: string): Observable<DeleteBackendEnvironmentResult> {
			return this.http.delete<DeleteBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments/' + (environmentName == null ? '' : encodeURIComponent(environmentName)), {});
		}

		/**
		 * Retrieves a backend environment for an Amplify App.
		 * Get apps/{appId}/backendenvironments/{environmentName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} environmentName  Name for the backend environment. 
		 * @return {GetBackendEnvironmentResult} Success
		 */
		GetBackendEnvironment(appId: string, environmentName: string): Observable<GetBackendEnvironmentResult> {
			return this.http.get<GetBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments/' + (environmentName == null ? '' : encodeURIComponent(environmentName)), {});
		}

		/**
		 * Deletes a branch for an Amplify App.
		 * Delete apps/{appId}/branches/{branchName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch. 
		 * @return {DeleteBranchResult} Success
		 */
		DeleteBranch(appId: string, branchName: string): Observable<DeleteBranchResult> {
			return this.http.delete<DeleteBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), {});
		}

		/**
		 * Retrieves a branch for an Amplify App.
		 * Get apps/{appId}/branches/{branchName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch. 
		 * @return {GetBranchResult} Success
		 */
		GetBranch(appId: string, branchName: string): Observable<GetBranchResult> {
			return this.http.get<GetBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), {});
		}

		/**
		 * Updates a branch for an Amplify App.
		 * Post apps/{appId}/branches/{branchName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch. 
		 * @return {UpdateBranchResult} Success
		 */
		UpdateBranch(appId: string, branchName: string, requestBody: UpdateBranchPostBody): Observable<UpdateBranchResult> {
			return this.http.post<UpdateBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a DomainAssociation.
		 * Delete apps/{appId}/domains/{domainName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} domainName  Name of the domain. 
		 * @return {DeleteDomainAssociationResult} Success
		 */
		DeleteDomainAssociation(appId: string, domainName: string): Observable<DeleteDomainAssociationResult> {
			return this.http.delete<DeleteDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Retrieves domain info that corresponds to an appId and domainName.
		 * Get apps/{appId}/domains/{domainName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} domainName  Name of the domain. 
		 * @return {GetDomainAssociationResult} Success
		 */
		GetDomainAssociation(appId: string, domainName: string): Observable<GetDomainAssociationResult> {
			return this.http.get<GetDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Create a new DomainAssociation on an App
		 * Post apps/{appId}/domains/{domainName}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} domainName  Name of the domain. 
		 * @return {UpdateDomainAssociationResult} Success
		 */
		UpdateDomainAssociation(appId: string, domainName: string, requestBody: UpdateDomainAssociationPostBody): Observable<UpdateDomainAssociationResult> {
			return this.http.post<UpdateDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a job, for an Amplify branch, part of Amplify App.
		 * Delete apps/{appId}/branches/{branchName}/jobs/{jobId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @param {string} jobId  Unique Id for the Job. 
		 * @return {DeleteJobResult} Success
		 */
		DeleteJob(appId: string, branchName: string, jobId: string): Observable<DeleteJobResult> {
			return this.http.delete<DeleteJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Get a job for a branch, part of an Amplify App.
		 * Get apps/{appId}/branches/{branchName}/jobs/{jobId}
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @param {string} jobId  Unique Id for the Job. 
		 * @return {GetJobResult} Success
		 */
		GetJob(appId: string, branchName: string, jobId: string): Observable<GetJobResult> {
			return this.http.get<GetJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Deletes a webhook.
		 * Delete webhooks/{webhookId}
		 * @param {string} webhookId  Unique Id for a webhook. 
		 * @return {DeleteWebhookResult} Success
		 */
		DeleteWebhook(webhookId: string): Observable<DeleteWebhookResult> {
			return this.http.delete<DeleteWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), {});
		}

		/**
		 * Retrieves webhook info that corresponds to a webhookId.
		 * Get webhooks/{webhookId}
		 * @param {string} webhookId  Unique Id for a webhook. 
		 * @return {GetWebhookResult} Success
		 */
		GetWebhook(webhookId: string): Observable<GetWebhookResult> {
			return this.http.get<GetWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), {});
		}

		/**
		 * Update a webhook.
		 * Post webhooks/{webhookId}
		 * @param {string} webhookId  Unique Id for a webhook. 
		 * @return {UpdateWebhookResult} Success
		 */
		UpdateWebhook(webhookId: string, requestBody: UpdateWebhookPostBody): Observable<UpdateWebhookResult> {
			return this.http.post<UpdateWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve website access logs for a specific time range via a pre-signed URL.
		 * Post apps/{appId}/accesslogs
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @return {GenerateAccessLogsResult} Success
		 */
		GenerateAccessLogs(appId: string, requestBody: GenerateAccessLogsPostBody): Observable<GenerateAccessLogsResult> {
			return this.http.post<GenerateAccessLogsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/accesslogs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves artifact info that corresponds to a artifactId.
		 * Get artifacts/{artifactId}
		 * @param {string} artifactId  Unique Id for a artifact. 
		 * @return {GetArtifactUrlResult} Success
		 */
		GetArtifactUrl(artifactId: string): Observable<GetArtifactUrlResult> {
			return this.http.get<GetArtifactUrlResult>(this.baseUri + 'artifacts/' + (artifactId == null ? '' : encodeURIComponent(artifactId)), {});
		}

		/**
		 * List artifacts with an app, a branch, a job and an artifact type.
		 * Get apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for a branch, part of an Amplify App. 
		 * @param {string} jobId  Unique Id for an Job. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing artifacts from start. If non-null pagination token is returned in a result, then pass its value in here to list more artifacts. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListArtifactsResult} Success
		 */
		ListArtifacts(appId: string, branchName: string, jobId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListArtifactsResult> {
			return this.http.get<ListArtifactsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/artifacts&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * List Jobs for a branch, part of an Amplify App.
		 * Get apps/{appId}/branches/{branchName}/jobs
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for a branch. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing steps from start. If a non-null pagination token is returned in a result, then pass its value in here to list more steps. 
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @return {ListJobsResult} Success
		 */
		ListJobs(appId: string, branchName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListJobsResult> {
			return this.http.get<ListJobsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Starts a new job for a branch, part of an Amplify App.
		 * Post apps/{appId}/branches/{branchName}/jobs
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @return {StartJobResult} Success
		 */
		StartJob(appId: string, branchName: string, requestBody: StartJobPostBody): Observable<StartJobResult> {
			return this.http.post<StartJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List tags for resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn  Resource arn used to list tags. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tag resource with tag key and value.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  Resource arn used to tag resource. 
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start a deployment for manual deploy apps. (Apps are not connected to repository)
		 * Post apps/{appId}/branches/{branchName}/deployments/start
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @return {StartDeploymentResult} Success
		 */
		StartDeployment(appId: string, branchName: string, requestBody: StartDeploymentPostBody): Observable<StartDeploymentResult> {
			return this.http.post<StartDeploymentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/deployments/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop a job that is in progress, for an Amplify branch, part of Amplify App.
		 * Delete apps/{appId}/branches/{branchName}/jobs/{jobId}/stop
		 * @param {string} appId  Unique Id for an Amplify App. 
		 * @param {string} branchName  Name for the branch, for the Job. 
		 * @param {string} jobId  Unique Id for the Job. 
		 * @return {StopJobResult} Success
		 */
		StopJob(appId: string, branchName: string, jobId: string): Observable<StopJobResult> {
			return this.http.delete<StopJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/stop', {});
		}

		/**
		 * Untag resource with resourceArn.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  Resource arn used to untag resource. 
		 * @param {Array<string>} tagKeys  Tag keys used to untag resource. 
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateAppPostBody {

		/**
		 * Name for the Amplify App
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Description for an Amplify App
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * Repository for an Amplify App
		 * Max length: 1000
		 */
		repository?: string | null;

		/** Platform / framework for an Amplify App */
		platform?: AppPlatform | null;

		/**
		 * AWS IAM service role for an Amplify App
		 * Max length: 1000
		 * Min length: 1
		 */
		iamServiceRoleArn?: string | null;

		/**
		 * OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored.
		 * Max length: 100
		 */
		oauthToken?: string | null;

		/**
		 * Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored.
		 * Max length: 255
		 * Min length: 1
		 */
		accessToken?: string | null;

		/** Environment variables map for an Amplify App. */
		environmentVariables?: {[id: string]: string };

		/** Enable the auto building of branches for an Amplify App. */
		enableBranchAutoBuild?: boolean | null;

		/** Enable Basic Authorization for an Amplify App, this will apply to all branches part of this App. */
		enableBasicAuth?: boolean | null;

		/**
		 * Credentials for Basic Authorization for an Amplify App.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string | null;

		/** Custom rewrite / redirect rules for an Amplify App. */
		customRules?: Array<CustomRule>;

		/** Tag for an Amplify App */
		tags?: {[id: string]: string };

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;

		/** Enables automated branch creation for the Amplify App. */
		enableAutoBranchCreation?: boolean | null;

		/** Automated branch creation glob patterns for the Amplify App. */
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: CreateAppPostBodyAutoBranchCreationConfig;
	}
	export interface CreateAppPostBodyFormProperties {

		/**
		 * Name for the Amplify App
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Description for an Amplify App
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Repository for an Amplify App
		 * Max length: 1000
		 */
		repository: FormControl<string | null | undefined>,

		/** Platform / framework for an Amplify App */
		platform: FormControl<AppPlatform | null | undefined>,

		/**
		 * AWS IAM service role for an Amplify App
		 * Max length: 1000
		 * Min length: 1
		 */
		iamServiceRoleArn: FormControl<string | null | undefined>,

		/**
		 * OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored.
		 * Max length: 100
		 */
		oauthToken: FormControl<string | null | undefined>,

		/**
		 * Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored.
		 * Max length: 255
		 * Min length: 1
		 */
		accessToken: FormControl<string | null | undefined>,

		/** Environment variables map for an Amplify App. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** Enable the auto building of branches for an Amplify App. */
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,

		/** Enable Basic Authorization for an Amplify App, this will apply to all branches part of this App. */
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * Credentials for Basic Authorization for an Amplify App.
		 * Max length: 2000
		 */
		basicAuthCredentials: FormControl<string | null | undefined>,

		/** Tag for an Amplify App */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,

		/** Enables automated branch creation for the Amplify App. */
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAppPostBodyFormGroup() {
		return new FormGroup<CreateAppPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<AppPlatform | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			oauthToken: new FormControl<string | null | undefined>(undefined),
			accessToken: new FormControl<string | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateAppPostBodyAutoBranchCreationConfig {
		stage?: AutoBranchCreationConfigStage | null;
		framework?: string | null;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string | null;
		enableBasicAuth?: boolean | null;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string | null;
	}
	export interface CreateAppPostBodyAutoBranchCreationConfigFormProperties {
		stage: FormControl<AutoBranchCreationConfigStage | null | undefined>,
		framework: FormControl<string | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppPostBodyAutoBranchCreationConfigFormGroup() {
		return new FormGroup<CreateAppPostBodyAutoBranchCreationConfigFormProperties>({
			stage: new FormControl<AutoBranchCreationConfigStage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackendEnvironmentPostBody {

		/**
		 * Name for the backend environment.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		environmentName: string;

		/**
		 * CloudFormation stack name of backend environment.
		 * Max length: 255
		 * Min length: 1
		 */
		stackName?: string | null;

		/**
		 * Name of deployment artifacts.
		 * Max length: 1000
		 * Min length: 1
		 */
		deploymentArtifacts?: string | null;
	}
	export interface CreateBackendEnvironmentPostBodyFormProperties {

		/**
		 * Name for the backend environment.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		environmentName: FormControl<string | null | undefined>,

		/**
		 * CloudFormation stack name of backend environment.
		 * Max length: 255
		 * Min length: 1
		 */
		stackName: FormControl<string | null | undefined>,

		/**
		 * Name of deployment artifacts.
		 * Max length: 1000
		 * Min length: 1
		 */
		deploymentArtifacts: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateBackendEnvironmentPostBodyFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined),
			stackName: new FormControl<string | null | undefined>(undefined),
			deploymentArtifacts: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBranchPostBody {

		/**
		 * Name for the branch.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		branchName: string;

		/**
		 * Description for the branch.
		 * Max length: 1000
		 */
		description?: string | null;

		/** Stage for the branch. */
		stage?: AutoBranchCreationConfigStage | null;

		/**
		 * Framework for the branch.
		 * Max length: 255
		 */
		framework?: string | null;

		/** Enables notifications for the branch. */
		enableNotification?: boolean | null;

		/** Enables auto building for the branch. */
		enableAutoBuild?: boolean | null;

		/** Environment Variables for the branch. */
		environmentVariables?: {[id: string]: string };

		/**
		 * Basic Authorization credentials for the branch.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string | null;

		/** Enables Basic Auth for the branch. */
		enableBasicAuth?: boolean | null;

		/** Tag for the branch. */
		tags?: {[id: string]: string };

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;

		/** The content TTL for the website in seconds. */
		ttl?: string | null;

		/**
		 * Display name for a branch, will use as the default domain prefix.
		 * Max length: 255
		 */
		displayName?: string | null;

		/** Enables Pull Request Preview for this branch. */
		enablePullRequestPreview?: boolean | null;

		/**
		 * The Amplify Environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName?: string | null;

		/**
		 * ARN for a Backend Environment, part of an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		backendEnvironmentArn?: string | null;
	}
	export interface CreateBranchPostBodyFormProperties {

		/**
		 * Name for the branch.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		branchName: FormControl<string | null | undefined>,

		/**
		 * Description for the branch.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/** Stage for the branch. */
		stage: FormControl<AutoBranchCreationConfigStage | null | undefined>,

		/**
		 * Framework for the branch.
		 * Max length: 255
		 */
		framework: FormControl<string | null | undefined>,

		/** Enables notifications for the branch. */
		enableNotification: FormControl<boolean | null | undefined>,

		/** Enables auto building for the branch. */
		enableAutoBuild: FormControl<boolean | null | undefined>,

		/** Environment Variables for the branch. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Basic Authorization credentials for the branch.
		 * Max length: 2000
		 */
		basicAuthCredentials: FormControl<string | null | undefined>,

		/** Enables Basic Auth for the branch. */
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/** Tag for the branch. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,

		/** The content TTL for the website in seconds. */
		ttl: FormControl<string | null | undefined>,

		/**
		 * Display name for a branch, will use as the default domain prefix.
		 * Max length: 255
		 */
		displayName: FormControl<string | null | undefined>,

		/** Enables Pull Request Preview for this branch. */
		enablePullRequestPreview: FormControl<boolean | null | undefined>,

		/**
		 * The Amplify Environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * ARN for a Backend Environment, part of an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBranchPostBodyFormGroup() {
		return new FormGroup<CreateBranchPostBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<AutoBranchCreationConfigStage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentPostBody {

		/** Optional file map that contains file name as the key and file content md5 hash as the value. If this argument is provided, the service will generate different upload url per file. Otherwise, the service will only generate a single upload url for the zipped files. */
		fileMap?: {[id: string]: string };
	}
	export interface CreateDeploymentPostBodyFormProperties {

		/** Optional file map that contains file name as the key and file content md5 hash as the value. If this argument is provided, the service will generate different upload url per file. Otherwise, the service will only generate a single upload url for the zipped files. */
		fileMap: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyFormProperties>({
			fileMap: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDomainAssociationPostBody {

		/**
		 * Domain name for the Domain Association.
		 * Required
		 * Max length: 255
		 */
		domainName: string;

		/** Enables automated creation of Subdomains for branches. (Currently not supported) */
		enableAutoSubDomain?: boolean | null;

		/**
		 * Setting structure for the Subdomain.
		 * Required
		 * Maximum items: 255
		 */
		subDomainSettings: Array<SubDomainSetting>;
	}
	export interface CreateDomainAssociationPostBodyFormProperties {

		/**
		 * Domain name for the Domain Association.
		 * Required
		 * Max length: 255
		 */
		domainName: FormControl<string | null | undefined>,

		/** Enables automated creation of Subdomains for branches. (Currently not supported) */
		enableAutoSubDomain: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainAssociationPostBodyFormGroup() {
		return new FormGroup<CreateDomainAssociationPostBodyFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateWebhookPostBody {

		/**
		 * Name for a branch, part of an Amplify App.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		branchName: string;

		/**
		 * Description for a webhook.
		 * Max length: 1000
		 */
		description?: string | null;
	}
	export interface CreateWebhookPostBodyFormProperties {

		/**
		 * Name for a branch, part of an Amplify App.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		branchName: FormControl<string | null | undefined>,

		/**
		 * Description for a webhook.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookPostBodyFormGroup() {
		return new FormGroup<CreateWebhookPostBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppPostBody {

		/**
		 * Name for an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Description for an Amplify App.
		 * Max length: 1000
		 */
		description?: string | null;

		/** Platform for an Amplify App. */
		platform?: AppPlatform | null;

		/**
		 * IAM service role for an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		iamServiceRoleArn?: string | null;

		/** Environment Variables for an Amplify App. */
		environmentVariables?: {[id: string]: string };

		/** Enables branch auto-building for an Amplify App. */
		enableBranchAutoBuild?: boolean | null;

		/** Enables Basic Authorization for an Amplify App. */
		enableBasicAuth?: boolean | null;

		/**
		 * Basic Authorization credentials for an Amplify App.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string | null;

		/** Custom redirect / rewrite rules for an Amplify App. */
		customRules?: Array<CustomRule>;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;

		/** Enables automated branch creation for the Amplify App. */
		enableAutoBranchCreation?: boolean | null;

		/** Automated branch creation glob patterns for the Amplify App. */
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: UpdateAppPostBodyAutoBranchCreationConfig;

		/**
		 * Repository for an Amplify App
		 * Max length: 1000
		 */
		repository?: string | null;

		/**
		 * OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored.
		 * Max length: 100
		 */
		oauthToken?: string | null;

		/**
		 * Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored.
		 * Max length: 255
		 * Min length: 1
		 */
		accessToken?: string | null;
	}
	export interface UpdateAppPostBodyFormProperties {

		/**
		 * Name for an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Description for an Amplify App.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/** Platform for an Amplify App. */
		platform: FormControl<AppPlatform | null | undefined>,

		/**
		 * IAM service role for an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		iamServiceRoleArn: FormControl<string | null | undefined>,

		/** Environment Variables for an Amplify App. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** Enables branch auto-building for an Amplify App. */
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,

		/** Enables Basic Authorization for an Amplify App. */
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * Basic Authorization credentials for an Amplify App.
		 * Max length: 2000
		 */
		basicAuthCredentials: FormControl<string | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,

		/** Enables automated branch creation for the Amplify App. */
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,

		/**
		 * Repository for an Amplify App
		 * Max length: 1000
		 */
		repository: FormControl<string | null | undefined>,

		/**
		 * OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored.
		 * Max length: 100
		 */
		oauthToken: FormControl<string | null | undefined>,

		/**
		 * Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored.
		 * Max length: 255
		 * Min length: 1
		 */
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppPostBodyFormGroup() {
		return new FormGroup<UpdateAppPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<AppPlatform | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			oauthToken: new FormControl<string | null | undefined>(undefined),
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAppPostBodyAutoBranchCreationConfig {
		stage?: AutoBranchCreationConfigStage | null;
		framework?: string | null;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string | null;
		enableBasicAuth?: boolean | null;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string | null;
	}
	export interface UpdateAppPostBodyAutoBranchCreationConfigFormProperties {
		stage: FormControl<AutoBranchCreationConfigStage | null | undefined>,
		framework: FormControl<string | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppPostBodyAutoBranchCreationConfigFormGroup() {
		return new FormGroup<UpdateAppPostBodyAutoBranchCreationConfigFormProperties>({
			stage: new FormControl<AutoBranchCreationConfigStage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBranchPostBody {

		/**
		 * Description for the branch.
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * Framework for the branch.
		 * Max length: 255
		 */
		framework?: string | null;

		/** Stage for the branch. */
		stage?: AutoBranchCreationConfigStage | null;

		/** Enables notifications for the branch. */
		enableNotification?: boolean | null;

		/** Enables auto building for the branch. */
		enableAutoBuild?: boolean | null;

		/** Environment Variables for the branch. */
		environmentVariables?: {[id: string]: string };

		/**
		 * Basic Authorization credentials for the branch.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string | null;

		/** Enables Basic Auth for the branch. */
		enableBasicAuth?: boolean | null;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string | null;

		/** The content TTL for the website in seconds. */
		ttl?: string | null;

		/**
		 * Display name for a branch, will use as the default domain prefix.
		 * Max length: 255
		 */
		displayName?: string | null;

		/** Enables Pull Request Preview for this branch. */
		enablePullRequestPreview?: boolean | null;

		/**
		 * The Amplify Environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName?: string | null;

		/**
		 * ARN for a Backend Environment, part of an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		backendEnvironmentArn?: string | null;
	}
	export interface UpdateBranchPostBodyFormProperties {

		/**
		 * Description for the branch.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Framework for the branch.
		 * Max length: 255
		 */
		framework: FormControl<string | null | undefined>,

		/** Stage for the branch. */
		stage: FormControl<AutoBranchCreationConfigStage | null | undefined>,

		/** Enables notifications for the branch. */
		enableNotification: FormControl<boolean | null | undefined>,

		/** Enables auto building for the branch. */
		enableAutoBuild: FormControl<boolean | null | undefined>,

		/** Environment Variables for the branch. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Basic Authorization credentials for the branch.
		 * Max length: 2000
		 */
		basicAuthCredentials: FormControl<string | null | undefined>,

		/** Enables Basic Auth for the branch. */
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec: FormControl<string | null | undefined>,

		/** The content TTL for the website in seconds. */
		ttl: FormControl<string | null | undefined>,

		/**
		 * Display name for a branch, will use as the default domain prefix.
		 * Max length: 255
		 */
		displayName: FormControl<string | null | undefined>,

		/** Enables Pull Request Preview for this branch. */
		enablePullRequestPreview: FormControl<boolean | null | undefined>,

		/**
		 * The Amplify Environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * ARN for a Backend Environment, part of an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBranchPostBodyFormGroup() {
		return new FormGroup<UpdateBranchPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<AutoBranchCreationConfigStage | null | undefined>(undefined),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainAssociationPostBody {

		/** Enables automated creation of Subdomains for branches. (Currently not supported) */
		enableAutoSubDomain?: boolean | null;

		/**
		 * Setting structure for the Subdomain.
		 * Required
		 * Maximum items: 255
		 */
		subDomainSettings: Array<SubDomainSetting>;
	}
	export interface UpdateDomainAssociationPostBodyFormProperties {

		/** Enables automated creation of Subdomains for branches. (Currently not supported) */
		enableAutoSubDomain: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainAssociationPostBodyFormGroup() {
		return new FormGroup<UpdateDomainAssociationPostBodyFormProperties>({
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateWebhookPostBody {

		/**
		 * Name for a branch, part of an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		branchName?: string | null;

		/**
		 * Description for a webhook.
		 * Max length: 1000
		 */
		description?: string | null;
	}
	export interface UpdateWebhookPostBodyFormProperties {

		/**
		 * Name for a branch, part of an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		branchName: FormControl<string | null | undefined>,

		/**
		 * Description for a webhook.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebhookPostBodyFormGroup() {
		return new FormGroup<UpdateWebhookPostBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateAccessLogsPostBody {

		/** The time at which the logs should start, inclusive. */
		startTime?: Date | null;

		/** The time at which the logs should end, inclusive. */
		endTime?: Date | null;

		/**
		 * Name of the domain.
		 * Required
		 * Max length: 255
		 */
		domainName: string;
	}
	export interface GenerateAccessLogsPostBodyFormProperties {

		/** The time at which the logs should start, inclusive. */
		startTime: FormControl<Date | null | undefined>,

		/** The time at which the logs should end, inclusive. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Name of the domain.
		 * Required
		 * Max length: 255
		 */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessLogsPostBodyFormGroup() {
		return new FormGroup<GenerateAccessLogsPostBodyFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartJobPostBody {

		/**
		 * Unique Id for an existing job. Required for "RETRY" JobType.
		 * Max length: 255
		 */
		jobId?: string | null;

		/**
		 * Type for the Job. Available JobTypes are: \n "RELEASE": Start a new job with the latest change from the specified branch. Only available for apps that have connected to a repository. "RETRY": Retry an existing job. JobId is required for this type of job.
		 * Required
		 * Max length: 10
		 */
		jobType: JobSummaryJobType;

		/**
		 * Descriptive reason for starting this job.
		 * Max length: 255
		 */
		jobReason?: string | null;

		/**
		 * Commit Id from 3rd party repository provider for the Job.
		 * Max length: 255
		 */
		commitId?: string | null;

		/**
		 * Commit message from 3rd party repository provider for the Job.
		 * Max length: 10000
		 */
		commitMessage?: string | null;

		/** Commit date / time for the Job. */
		commitTime?: Date | null;
	}
	export interface StartJobPostBodyFormProperties {

		/**
		 * Unique Id for an existing job. Required for "RETRY" JobType.
		 * Max length: 255
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * Type for the Job. Available JobTypes are: \n "RELEASE": Start a new job with the latest change from the specified branch. Only available for apps that have connected to a repository. "RETRY": Retry an existing job. JobId is required for this type of job.
		 * Required
		 * Max length: 10
		 */
		jobType: FormControl<JobSummaryJobType | null | undefined>,

		/**
		 * Descriptive reason for starting this job.
		 * Max length: 255
		 */
		jobReason: FormControl<string | null | undefined>,

		/**
		 * Commit Id from 3rd party repository provider for the Job.
		 * Max length: 255
		 */
		commitId: FormControl<string | null | undefined>,

		/**
		 * Commit message from 3rd party repository provider for the Job.
		 * Max length: 10000
		 */
		commitMessage: FormControl<string | null | undefined>,

		/** Commit date / time for the Job. */
		commitTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartJobPostBodyFormGroup() {
		return new FormGroup<StartJobPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<JobSummaryJobType | null | undefined>(undefined),
			jobReason: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			commitTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Tags used to tag resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Tags used to tag resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartDeploymentPostBody {

		/**
		 * The job id for this deployment, generated by create deployment request.
		 * Max length: 255
		 */
		jobId?: string | null;

		/**
		 * The sourceUrl for this deployment, used when calling start deployment without create deployment. SourceUrl can be any HTTP GET url that is public accessible and downloads a single zip.
		 * Max length: 1000
		 */
		sourceUrl?: string | null;
	}
	export interface StartDeploymentPostBodyFormProperties {

		/**
		 * The job id for this deployment, generated by create deployment request.
		 * Max length: 255
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * The sourceUrl for this deployment, used when calling start deployment without create deployment. SourceUrl can be any HTTP GET url that is public accessible and downloads a single zip.
		 * Max length: 1000
		 */
		sourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartDeploymentPostBodyFormGroup() {
		return new FormGroup<StartDeploymentPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

}

