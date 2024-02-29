import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAppResult {

		/**
		 * Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
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


	/**  Represents the different branches of a repository for building, deploying, and hosting an Amplify app.  */
	export interface App {

		/** Required */
		appId: string;

		/** Required */
		appArn: string;

		/** Required */
		name: string;
		tags?: TagMap;

		/** Required */
		description: string;

		/** Required */
		repository: string;

		/** Required */
		platform: Platform;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;
		iamServiceRoleArn?: string;

		/** Required */
		environmentVariables: EnvironmentVariables;

		/** Required */
		defaultDomain: string;

		/** Required */
		enableBranchAutoBuild: boolean;
		enableBranchAutoDeletion?: boolean | null;

		/** Required */
		enableBasicAuth: boolean;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;
		productionBranch?: ProductionBranch;
		buildSpec?: string;
		customHeaders?: string;
		enableAutoBranchCreation?: boolean | null;
		autoBranchCreationPatterns?: Array<string>;
		autoBranchCreationConfig?: AutoBranchCreationConfig;
		repositoryCloneMethod?: RepositoryCloneMethod;
	}

	/**  Represents the different branches of a repository for building, deploying, and hosting an Amplify app.  */
	export interface AppFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		appArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		repository: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<Platform | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
		iamServiceRoleArn: FormControl<string | null | undefined>,

		/** Required */
		defaultDomain: FormControl<string | null | undefined>,

		/** Required */
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,
		enableBranchAutoDeletion: FormControl<boolean | null | undefined>,

		/** Required */
		enableBasicAuth: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,
		customHeaders: FormControl<string | null | undefined>,
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,
		repositoryCloneMethod: FormControl<RepositoryCloneMethod | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			defaultDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enableBranchAutoDeletion: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			customHeaders: new FormControl<string | null | undefined>(undefined),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
			repositoryCloneMethod: new FormControl<RepositoryCloneMethod | null | undefined>(undefined),
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

	export enum Platform { WEB = 'WEB', WEB_DYNAMIC = 'WEB_DYNAMIC', WEB_COMPUTE = 'WEB_COMPUTE' }

	export interface EnvironmentVariables {
	}
	export interface EnvironmentVariablesFormProperties {
	}
	export function CreateEnvironmentVariablesFormGroup() {
		return new FormGroup<EnvironmentVariablesFormProperties>({
		});

	}


	/**  Describes a custom rewrite or redirect rule.  */
	export interface CustomRule {

		/** Required */
		source: string;

		/** Required */
		target: string;
		status?: string;
		condition?: string;
	}

	/**  Describes a custom rewrite or redirect rule.  */
	export interface CustomRuleFormProperties {

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		target: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		condition: FormControl<string | null | undefined>,
	}
	export function CreateCustomRuleFormGroup() {
		return new FormGroup<CustomRuleFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the information about a production branch for an Amplify app.  */
	export interface ProductionBranch {
		lastDeployTime?: Date;
		status?: string;
		thumbnailUrl?: string;
		branchName?: string;
	}

	/**  Describes the information about a production branch for an Amplify app.  */
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


	/**  Describes the automated branch creation configuration.  */
	export interface AutoBranchCreationConfig {
		stage?: Stage;
		framework?: string;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean | null;
		enablePerformanceMode?: boolean | null;
		buildSpec?: string;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string;
	}

	/**  Describes the automated branch creation configuration.  */
	export interface AutoBranchCreationConfigFormProperties {
		stage: FormControl<Stage | null | undefined>,
		framework: FormControl<string | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		enablePerformanceMode: FormControl<boolean | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateAutoBranchCreationConfigFormGroup() {
		return new FormGroup<AutoBranchCreationConfigFormProperties>({
			stage: new FormControl<Stage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			enablePerformanceMode: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Stage { PRODUCTION = 'PRODUCTION', BETA = 'BETA', DEVELOPMENT = 'DEVELOPMENT', EXPERIMENTAL = 'EXPERIMENTAL', PULL_REQUEST = 'PULL_REQUEST' }

	export enum RepositoryCloneMethod { SSH = 'SSH', TOKEN = 'TOKEN', SIGV4 = 'SIGV4' }

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


	/**  The result structure for the create backend environment request.  */
	export interface CreateBackendEnvironmentResult {

		/** Required */
		backendEnvironment: BackendEnvironment;
	}

	/**  The result structure for the create backend environment request.  */
	export interface CreateBackendEnvironmentResultFormProperties {
	}
	export function CreateCreateBackendEnvironmentResultFormGroup() {
		return new FormGroup<CreateBackendEnvironmentResultFormProperties>({
		});

	}


	/**  Describes the backend environment for an Amplify app.  */
	export interface BackendEnvironment {

		/** Required */
		backendEnvironmentArn: string;

		/** Required */
		environmentName: string;
		stackName?: string;
		deploymentArtifacts?: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;
	}

	/**  Describes the backend environment for an Amplify app.  */
	export interface BackendEnvironmentFormProperties {

		/** Required */
		backendEnvironmentArn: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		stackName: FormControl<string | null | undefined>,
		deploymentArtifacts: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBackendEnvironmentFormGroup() {
		return new FormGroup<BackendEnvironmentFormProperties>({
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stackName: new FormControl<string | null | undefined>(undefined),
			deploymentArtifacts: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
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


	/**  The result structure for create branch request.  */
	export interface CreateBranchResult {

		/** Required */
		branch: Branch;
	}

	/**  The result structure for create branch request.  */
	export interface CreateBranchResultFormProperties {
	}
	export function CreateCreateBranchResultFormGroup() {
		return new FormGroup<CreateBranchResultFormProperties>({
		});

	}


	/**  The branch for an Amplify app, which maps to a third-party repository branch.  */
	export interface Branch {

		/** Required */
		branchArn: string;

		/** Required */
		branchName: string;

		/** Required */
		description: string;
		tags?: TagMap;

		/** Required */
		stage: Stage;

		/** Required */
		displayName: string;

		/** Required */
		enableNotification: boolean;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		environmentVariables: EnvironmentVariables;

		/** Required */
		enableAutoBuild: boolean;

		/** Required */
		customDomains: Array<string>;

		/** Required */
		framework: string;

		/** Required */
		activeJobId: string;

		/** Required */
		totalNumberOfJobs: string;

		/** Required */
		enableBasicAuth: boolean;
		enablePerformanceMode?: boolean | null;
		thumbnailUrl?: string;
		basicAuthCredentials?: string;
		buildSpec?: string;

		/** Required */
		ttl: string;
		associatedResources?: Array<string>;

		/** Required */
		enablePullRequestPreview: boolean;
		pullRequestEnvironmentName?: string;
		destinationBranch?: string;
		sourceBranch?: string;
		backendEnvironmentArn?: string;
	}

	/**  The branch for an Amplify app, which maps to a third-party repository branch.  */
	export interface BranchFormProperties {

		/** Required */
		branchArn: FormControl<string | null | undefined>,

		/** Required */
		branchName: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		stage: FormControl<Stage | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		enableNotification: FormControl<boolean | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		enableAutoBuild: FormControl<boolean | null | undefined>,

		/** Required */
		framework: FormControl<string | null | undefined>,

		/** Required */
		activeJobId: FormControl<string | null | undefined>,

		/** Required */
		totalNumberOfJobs: FormControl<string | null | undefined>,

		/** Required */
		enableBasicAuth: FormControl<boolean | null | undefined>,
		enablePerformanceMode: FormControl<boolean | null | undefined>,
		thumbnailUrl: FormControl<string | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,

		/** Required */
		ttl: FormControl<string | null | undefined>,

		/** Required */
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
		destinationBranch: FormControl<string | null | undefined>,
		sourceBranch: FormControl<string | null | undefined>,
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateBranchFormGroup() {
		return new FormGroup<BranchFormProperties>({
			branchArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stage: new FormControl<Stage | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableNotification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			framework: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			activeJobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalNumberOfJobs: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enablePerformanceMode: new FormControl<boolean | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
			destinationBranch: new FormControl<string | null | undefined>(undefined),
			sourceBranch: new FormControl<string | null | undefined>(undefined),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The result structure for the create a new deployment request.  */
	export interface CreateDeploymentResult {
		jobId?: string;

		/** Required */
		fileUploadUrls: FileUploadUrls;

		/** Required */
		zipUploadUrl: string;
	}

	/**  The result structure for the create a new deployment request.  */
	export interface CreateDeploymentResultFormProperties {
		jobId: FormControl<string | null | undefined>,

		/** Required */
		zipUploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResultFormGroup() {
		return new FormGroup<CreateDeploymentResultFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			zipUploadUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/**  The result structure for the create domain association request.  */
	export interface CreateDomainAssociationResult {

		/** Required */
		domainAssociation: DomainAssociation;
	}

	/**  The result structure for the create domain association request.  */
	export interface CreateDomainAssociationResultFormProperties {
	}
	export function CreateCreateDomainAssociationResultFormGroup() {
		return new FormGroup<CreateDomainAssociationResultFormProperties>({
		});

	}


	/**  Describes a domain association that associates a custom domain with an Amplify app.  */
	export interface DomainAssociation {

		/** Required */
		domainAssociationArn: string;

		/** Required */
		domainName: string;

		/** Required */
		enableAutoSubDomain: boolean;
		autoSubDomainCreationPatterns?: Array<string>;
		autoSubDomainIAMRole?: string;

		/** Required */
		domainStatus: DomainStatus;

		/** Required */
		statusReason: string;
		certificateVerificationDNSRecord?: string;

		/** Required */
		subDomains: Array<SubDomain>;
	}

	/**  Describes a domain association that associates a custom domain with an Amplify app.  */
	export interface DomainAssociationFormProperties {

		/** Required */
		domainAssociationArn: FormControl<string | null | undefined>,

		/** Required */
		domainName: FormControl<string | null | undefined>,

		/** Required */
		enableAutoSubDomain: FormControl<boolean | null | undefined>,
		autoSubDomainIAMRole: FormControl<string | null | undefined>,

		/** Required */
		domainStatus: FormControl<DomainStatus | null | undefined>,

		/** Required */
		statusReason: FormControl<string | null | undefined>,
		certificateVerificationDNSRecord: FormControl<string | null | undefined>,
	}
	export function CreateDomainAssociationFormGroup() {
		return new FormGroup<DomainAssociationFormProperties>({
			domainAssociationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			autoSubDomainIAMRole: new FormControl<string | null | undefined>(undefined),
			domainStatus: new FormControl<DomainStatus | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateVerificationDNSRecord: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainStatus { PENDING_VERIFICATION = 'PENDING_VERIFICATION', IN_PROGRESS = 'IN_PROGRESS', AVAILABLE = 'AVAILABLE', PENDING_DEPLOYMENT = 'PENDING_DEPLOYMENT', FAILED = 'FAILED', CREATING = 'CREATING', REQUESTING_CERTIFICATE = 'REQUESTING_CERTIFICATE', UPDATING = 'UPDATING' }


	/**  The subdomain for the domain association.  */
	export interface SubDomain {

		/** Required */
		subDomainSetting: SubDomainSetting;

		/** Required */
		verified: boolean;

		/** Required */
		dnsRecord: string;
	}

	/**  The subdomain for the domain association.  */
	export interface SubDomainFormProperties {

		/** Required */
		verified: FormControl<boolean | null | undefined>,

		/** Required */
		dnsRecord: FormControl<string | null | undefined>,
	}
	export function CreateSubDomainFormGroup() {
		return new FormGroup<SubDomainFormProperties>({
			verified: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dnsRecord: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Describes the settings for the subdomain.  */
	export interface SubDomainSetting {

		/** Required */
		prefix: string;

		/** Required */
		branchName: string;
	}

	/**  Describes the settings for the subdomain.  */
	export interface SubDomainSettingFormProperties {

		/** Required */
		prefix: FormControl<string | null | undefined>,

		/** Required */
		branchName: FormControl<string | null | undefined>,
	}
	export function CreateSubDomainSettingFormGroup() {
		return new FormGroup<SubDomainSettingFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The result structure for the create webhook request.  */
	export interface CreateWebhookResult {

		/** Required */
		webhook: Webhook;
	}

	/**  The result structure for the create webhook request.  */
	export interface CreateWebhookResultFormProperties {
	}
	export function CreateCreateWebhookResultFormGroup() {
		return new FormGroup<CreateWebhookResultFormProperties>({
		});

	}


	/**  Describes a webhook that connects repository events to an Amplify app.  */
	export interface Webhook {

		/** Required */
		webhookArn: string;

		/** Required */
		webhookId: string;

		/** Required */
		webhookUrl: string;

		/** Required */
		branchName: string;

		/** Required */
		description: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;
	}

	/**  Describes a webhook that connects repository events to an Amplify app.  */
	export interface WebhookFormProperties {

		/** Required */
		webhookArn: FormControl<string | null | undefined>,

		/** Required */
		webhookId: FormControl<string | null | undefined>,

		/** Required */
		webhookUrl: FormControl<string | null | undefined>,

		/** Required */
		branchName: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			webhookArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhookUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The result structure for the delete app request.  */
	export interface DeleteAppResult {

		/**
		 * Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
		 * Required
		 */
		app: App;
	}

	/**  The result structure for the delete app request.  */
	export interface DeleteAppResultFormProperties {
	}
	export function CreateDeleteAppResultFormGroup() {
		return new FormGroup<DeleteAppResultFormProperties>({
		});

	}


	/**  The result structure of the delete backend environment result.  */
	export interface DeleteBackendEnvironmentResult {

		/** Required */
		backendEnvironment: BackendEnvironment;
	}

	/**  The result structure of the delete backend environment result.  */
	export interface DeleteBackendEnvironmentResultFormProperties {
	}
	export function CreateDeleteBackendEnvironmentResultFormGroup() {
		return new FormGroup<DeleteBackendEnvironmentResultFormProperties>({
		});

	}


	/**  The result structure for the delete branch request.  */
	export interface DeleteBranchResult {

		/** Required */
		branch: Branch;
	}

	/**  The result structure for the delete branch request.  */
	export interface DeleteBranchResultFormProperties {
	}
	export function CreateDeleteBranchResultFormGroup() {
		return new FormGroup<DeleteBranchResultFormProperties>({
		});

	}

	export interface DeleteDomainAssociationResult {

		/**
		 * Describes a domain association that associates a custom domain with an Amplify app.
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


	/**  The result structure for the delete job request.  */
	export interface DeleteJobResult {

		/**
		 * Describes the summary for an execution job for an Amplify app.
		 * Required
		 */
		jobSummary: JobSummary;
	}

	/**  The result structure for the delete job request.  */
	export interface DeleteJobResultFormProperties {
	}
	export function CreateDeleteJobResultFormGroup() {
		return new FormGroup<DeleteJobResultFormProperties>({
		});

	}


	/**  Describes the summary for an execution job for an Amplify app.  */
	export interface JobSummary {

		/** Required */
		jobArn: string;

		/** Required */
		jobId: string;

		/** Required */
		commitId: string;

		/** Required */
		commitMessage: string;

		/** Required */
		commitTime: Date;

		/** Required */
		startTime: Date;

		/** Required */
		status: JobStatus;
		endTime?: Date;

		/** Required */
		jobType: JobType;
	}

	/**  Describes the summary for an execution job for an Amplify app.  */
	export interface JobSummaryFormProperties {

		/** Required */
		jobArn: FormControl<string | null | undefined>,

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		commitId: FormControl<string | null | undefined>,

		/** Required */
		commitMessage: FormControl<string | null | undefined>,

		/** Required */
		commitTime: FormControl<Date | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		jobType: FormControl<JobType | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commitTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined),
			jobType: new FormControl<JobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobStatus { PENDING = 'PENDING', PROVISIONING = 'PROVISIONING', RUNNING = 'RUNNING', FAILED = 'FAILED', SUCCEED = 'SUCCEED', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED' }

	export enum JobType { RELEASE = 'RELEASE', RETRY = 'RETRY', MANUAL = 'MANUAL', WEB_HOOK = 'WEB_HOOK' }


	/**  The result structure for the delete webhook request.  */
	export interface DeleteWebhookResult {

		/** Required */
		webhook: Webhook;
	}

	/**  The result structure for the delete webhook request.  */
	export interface DeleteWebhookResultFormProperties {
	}
	export function CreateDeleteWebhookResultFormGroup() {
		return new FormGroup<DeleteWebhookResultFormProperties>({
		});

	}


	/**  The result structure for the generate access logs request.  */
	export interface GenerateAccessLogsResult {
		logUrl?: string;
	}

	/**  The result structure for the generate access logs request.  */
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
		 * Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
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


	/**  Returns the result structure for the get artifact request.  */
	export interface GetArtifactUrlResult {

		/** Required */
		artifactId: string;

		/** Required */
		artifactUrl: string;
	}

	/**  Returns the result structure for the get artifact request.  */
	export interface GetArtifactUrlResultFormProperties {

		/** Required */
		artifactId: FormControl<string | null | undefined>,

		/** Required */
		artifactUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetArtifactUrlResultFormGroup() {
		return new FormGroup<GetArtifactUrlResultFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			artifactUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The result structure for the get backend environment result.  */
	export interface GetBackendEnvironmentResult {

		/** Required */
		backendEnvironment: BackendEnvironment;
	}

	/**  The result structure for the get backend environment result.  */
	export interface GetBackendEnvironmentResultFormProperties {
	}
	export function CreateGetBackendEnvironmentResultFormGroup() {
		return new FormGroup<GetBackendEnvironmentResultFormProperties>({
		});

	}

	export interface GetBranchResult {

		/**
		 * The branch for an Amplify app, which maps to a third-party repository branch.
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


	/**  The result structure for the get domain association request.  */
	export interface GetDomainAssociationResult {

		/** Required */
		domainAssociation: DomainAssociation;
	}

	/**  The result structure for the get domain association request.  */
	export interface GetDomainAssociationResultFormProperties {
	}
	export function CreateGetDomainAssociationResultFormGroup() {
		return new FormGroup<GetDomainAssociationResultFormProperties>({
		});

	}

	export interface GetJobResult {

		/**
		 * Describes an execution job for an Amplify app.
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


	/**  Describes an execution job for an Amplify app.  */
	export interface Job {

		/** Required */
		summary: JobSummary;

		/** Required */
		steps: Array<Step>;
	}

	/**  Describes an execution job for an Amplify app.  */
	export interface JobFormProperties {
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
		});

	}


	/**  Describes an execution step, for an execution job, for an Amplify app.  */
	export interface Step {

		/** Required */
		stepName: string;

		/** Required */
		startTime: Date;

		/** Required */
		status: JobStatus;

		/** Required */
		endTime: Date;
		logUrl?: string;
		artifactsUrl?: string;
		testArtifactsUrl?: string;
		testConfigUrl?: string;
		screenshots?: Screenshots;
		statusReason?: string;
		context?: string;
	}

	/**  Describes an execution step, for an execution job, for an Amplify app.  */
	export interface StepFormProperties {

		/** Required */
		stepName: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,

		/** Required */
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
			stepName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
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


	/**  The result structure for the get webhook request.  */
	export interface GetWebhookResult {

		/** Required */
		webhook: Webhook;
	}

	/**  The result structure for the get webhook request.  */
	export interface GetWebhookResultFormProperties {
	}
	export function CreateGetWebhookResultFormGroup() {
		return new FormGroup<GetWebhookResultFormProperties>({
		});

	}


	/**  The result structure for an Amplify app list request.  */
	export interface ListAppsResult {

		/** Required */
		apps: Array<App>;
		nextToken?: string;
	}

	/**  The result structure for an Amplify app list request.  */
	export interface ListAppsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppsResultFormGroup() {
		return new FormGroup<ListAppsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The result structure for the list artifacts request.  */
	export interface ListArtifactsResult {

		/** Required */
		artifacts: Array<Artifact>;
		nextToken?: string;
	}

	/**  The result structure for the list artifacts request.  */
	export interface ListArtifactsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListArtifactsResultFormGroup() {
		return new FormGroup<ListArtifactsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes an artifact.  */
	export interface Artifact {

		/** Required */
		artifactFileName: string;

		/** Required */
		artifactId: string;
	}

	/**  Describes an artifact.  */
	export interface ArtifactFormProperties {

		/** Required */
		artifactFileName: FormControl<string | null | undefined>,

		/** Required */
		artifactId: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			artifactFileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			artifactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The result structure for the list backend environments result.  */
	export interface ListBackendEnvironmentsResult {

		/** Required */
		backendEnvironments: Array<BackendEnvironment>;
		nextToken?: string;
	}

	/**  The result structure for the list backend environments result.  */
	export interface ListBackendEnvironmentsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackendEnvironmentsResultFormGroup() {
		return new FormGroup<ListBackendEnvironmentsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The result structure for the list branches request.  */
	export interface ListBranchesResult {

		/** Required */
		branches: Array<Branch>;
		nextToken?: string;
	}

	/**  The result structure for the list branches request.  */
	export interface ListBranchesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBranchesResultFormGroup() {
		return new FormGroup<ListBranchesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The result structure for the list domain association request.  */
	export interface ListDomainAssociationsResult {

		/** Required */
		domainAssociations: Array<DomainAssociation>;
		nextToken?: string;
	}

	/**  The result structure for the list domain association request.  */
	export interface ListDomainAssociationsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainAssociationsResultFormGroup() {
		return new FormGroup<ListDomainAssociationsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The maximum number of records to list in a single response.  */
	export interface ListJobsResult {

		/** Required */
		jobSummaries: Array<JobSummary>;
		nextToken?: string;
	}

	/**  The maximum number of records to list in a single response.  */
	export interface ListJobsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResultFormGroup() {
		return new FormGroup<ListJobsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The response for the list tags for resource request.  */
	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	/**  The response for the list tags for resource request.  */
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


	/**  The result structure for the list webhooks request.  */
	export interface ListWebhooksResult {

		/** Required */
		webhooks: Array<Webhook>;
		nextToken?: string;
	}

	/**  The result structure for the list webhooks request.  */
	export interface ListWebhooksResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebhooksResultFormGroup() {
		return new FormGroup<ListWebhooksResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The result structure for the start a deployment request.  */
	export interface StartDeploymentResult {

		/** Required */
		jobSummary: JobSummary;
	}

	/**  The result structure for the start a deployment request.  */
	export interface StartDeploymentResultFormProperties {
	}
	export function CreateStartDeploymentResultFormGroup() {
		return new FormGroup<StartDeploymentResultFormProperties>({
		});

	}


	/**  The result structure for the run job request.  */
	export interface StartJobResult {

		/** Required */
		jobSummary: JobSummary;
	}

	/**  The result structure for the run job request.  */
	export interface StartJobResultFormProperties {
	}
	export function CreateStartJobResultFormGroup() {
		return new FormGroup<StartJobResultFormProperties>({
		});

	}


	/**  The result structure for the stop job request.  */
	export interface StopJobResult {

		/** Required */
		jobSummary: JobSummary;
	}

	/**  The result structure for the stop job request.  */
	export interface StopJobResultFormProperties {
	}
	export function CreateStopJobResultFormGroup() {
		return new FormGroup<StopJobResultFormProperties>({
		});

	}


	/**  The response for the tag resource request.  */
	export interface TagResourceResponse {
	}

	/**  The response for the tag resource request.  */
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}


	/**  The response for the untag resource request.  */
	export interface UntagResourceResponse {
	}

	/**  The response for the untag resource request.  */
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}


	/**  The result structure for an Amplify app update request.  */
	export interface UpdateAppResult {

		/** Required */
		app: App;
	}

	/**  The result structure for an Amplify app update request.  */
	export interface UpdateAppResultFormProperties {
	}
	export function CreateUpdateAppResultFormGroup() {
		return new FormGroup<UpdateAppResultFormProperties>({
		});

	}


	/**  The result structure for the update branch request.  */
	export interface UpdateBranchResult {

		/** Required */
		branch: Branch;
	}

	/**  The result structure for the update branch request.  */
	export interface UpdateBranchResultFormProperties {
	}
	export function CreateUpdateBranchResultFormGroup() {
		return new FormGroup<UpdateBranchResultFormProperties>({
		});

	}


	/**  The result structure for the update domain association request.  */
	export interface UpdateDomainAssociationResult {

		/** Required */
		domainAssociation: DomainAssociation;
	}

	/**  The result structure for the update domain association request.  */
	export interface UpdateDomainAssociationResultFormProperties {
	}
	export function CreateUpdateDomainAssociationResultFormGroup() {
		return new FormGroup<UpdateDomainAssociationResultFormProperties>({
		});

	}


	/**  The result structure for the update webhook request.  */
	export interface UpdateWebhookResult {

		/** Required */
		webhook: Webhook;
	}

	/**  The result structure for the update webhook request.  */
	export interface UpdateWebhookResultFormProperties {
	}
	export function CreateUpdateWebhookResultFormGroup() {
		return new FormGroup<UpdateWebhookResultFormProperties>({
		});

	}


	/**  The request structure used to create apps in Amplify.  */
	export interface CreateAppRequest {

		/** Required */
		name: string;
		description?: string;
		repository?: string;
		platform?: Platform;
		iamServiceRoleArn?: string;
		oauthToken?: string;
		accessToken?: string;
		environmentVariables?: EnvironmentVariables;
		enableBranchAutoBuild?: boolean | null;
		enableBranchAutoDeletion?: boolean | null;
		enableBasicAuth?: boolean | null;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;
		tags?: TagMap;
		buildSpec?: string;
		customHeaders?: string;
		enableAutoBranchCreation?: boolean | null;
		autoBranchCreationPatterns?: Array<string>;
		autoBranchCreationConfig?: AutoBranchCreationConfig;
	}

	/**  The request structure used to create apps in Amplify.  */
	export interface CreateAppRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		repository: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		iamServiceRoleArn: FormControl<string | null | undefined>,
		oauthToken: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,
		enableBranchAutoDeletion: FormControl<boolean | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,
		customHeaders: FormControl<string | null | undefined>,
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAppRequestFormGroup() {
		return new FormGroup<CreateAppRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			oauthToken: new FormControl<string | null | undefined>(undefined),
			accessToken: new FormControl<string | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBranchAutoDeletion: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			customHeaders: new FormControl<string | null | undefined>(undefined),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The request structure for the backend environment create request.  */
	export interface CreateBackendEnvironmentRequest {

		/** Required */
		environmentName: string;
		stackName?: string;
		deploymentArtifacts?: string;
	}

	/**  The request structure for the backend environment create request.  */
	export interface CreateBackendEnvironmentRequestFormProperties {

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		stackName: FormControl<string | null | undefined>,
		deploymentArtifacts: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendEnvironmentRequestFormGroup() {
		return new FormGroup<CreateBackendEnvironmentRequestFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stackName: new FormControl<string | null | undefined>(undefined),
			deploymentArtifacts: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The request structure for the create branch request.  */
	export interface CreateBranchRequest {

		/** Required */
		branchName: string;
		description?: string;
		stage?: Stage;
		framework?: string;
		enableNotification?: boolean | null;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean | null;
		enablePerformanceMode?: boolean | null;
		tags?: TagMap;
		buildSpec?: string;
		ttl?: string;
		displayName?: string;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string;
		backendEnvironmentArn?: string;
	}

	/**  The request structure for the create branch request.  */
	export interface CreateBranchRequestFormProperties {

		/** Required */
		branchName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		stage: FormControl<Stage | null | undefined>,
		framework: FormControl<string | null | undefined>,
		enableNotification: FormControl<boolean | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		enablePerformanceMode: FormControl<boolean | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,
		ttl: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBranchRequestFormGroup() {
		return new FormGroup<CreateBranchRequestFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<Stage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			enablePerformanceMode: new FormControl<boolean | null | undefined>(undefined),
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


	/**  The request structure for the create a new deployment request.  */
	export interface CreateDeploymentRequest {
		fileMap?: FileMap;
	}

	/**  The request structure for the create a new deployment request.  */
	export interface CreateDeploymentRequestFormProperties {
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
		});

	}


	/**  The request structure for the create domain association request.  */
	export interface CreateDomainAssociationRequest {

		/** Required */
		domainName: string;
		enableAutoSubDomain?: boolean | null;

		/** Required */
		subDomainSettings: Array<SubDomainSetting>;
		autoSubDomainCreationPatterns?: Array<string>;
		autoSubDomainIAMRole?: string;
	}

	/**  The request structure for the create domain association request.  */
	export interface CreateDomainAssociationRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
		enableAutoSubDomain: FormControl<boolean | null | undefined>,
		autoSubDomainIAMRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainAssociationRequestFormGroup() {
		return new FormGroup<CreateDomainAssociationRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
			autoSubDomainIAMRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The request structure for the create webhook request.  */
	export interface CreateWebhookRequest {

		/** Required */
		branchName: string;
		description?: string;
	}

	/**  The request structure for the create webhook request.  */
	export interface CreateWebhookRequestFormProperties {

		/** Required */
		branchName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookRequestFormGroup() {
		return new FormGroup<CreateWebhookRequestFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the request structure for the delete app request.  */
	export interface DeleteAppRequest {
	}

	/**  Describes the request structure for the delete app request.  */
	export interface DeleteAppRequestFormProperties {
	}
	export function CreateDeleteAppRequestFormGroup() {
		return new FormGroup<DeleteAppRequestFormProperties>({
		});

	}


	/**  The request structure for the delete backend environment request.  */
	export interface DeleteBackendEnvironmentRequest {
	}

	/**  The request structure for the delete backend environment request.  */
	export interface DeleteBackendEnvironmentRequestFormProperties {
	}
	export function CreateDeleteBackendEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteBackendEnvironmentRequestFormProperties>({
		});

	}


	/**  The request structure for the delete branch request.  */
	export interface DeleteBranchRequest {
	}

	/**  The request structure for the delete branch request.  */
	export interface DeleteBranchRequestFormProperties {
	}
	export function CreateDeleteBranchRequestFormGroup() {
		return new FormGroup<DeleteBranchRequestFormProperties>({
		});

	}


	/**  The request structure for the delete domain association request.  */
	export interface DeleteDomainAssociationRequest {
	}

	/**  The request structure for the delete domain association request.  */
	export interface DeleteDomainAssociationRequestFormProperties {
	}
	export function CreateDeleteDomainAssociationRequestFormGroup() {
		return new FormGroup<DeleteDomainAssociationRequestFormProperties>({
		});

	}


	/**  The request structure for the delete job request.  */
	export interface DeleteJobRequest {
	}

	/**  The request structure for the delete job request.  */
	export interface DeleteJobRequestFormProperties {
	}
	export function CreateDeleteJobRequestFormGroup() {
		return new FormGroup<DeleteJobRequestFormProperties>({
		});

	}


	/**  The request structure for the delete webhook request.  */
	export interface DeleteWebhookRequest {
	}

	/**  The request structure for the delete webhook request.  */
	export interface DeleteWebhookRequestFormProperties {
	}
	export function CreateDeleteWebhookRequestFormGroup() {
		return new FormGroup<DeleteWebhookRequestFormProperties>({
		});

	}


	/**  The request structure for the generate access logs request.  */
	export interface GenerateAccessLogsRequest {
		startTime?: Date;
		endTime?: Date;

		/** Required */
		domainName: string;
	}

	/**  The request structure for the generate access logs request.  */
	export interface GenerateAccessLogsRequestFormProperties {
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessLogsRequestFormGroup() {
		return new FormGroup<GenerateAccessLogsRequestFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The request structure for the get app request.  */
	export interface GetAppRequest {
	}

	/**  The request structure for the get app request.  */
	export interface GetAppRequestFormProperties {
	}
	export function CreateGetAppRequestFormGroup() {
		return new FormGroup<GetAppRequestFormProperties>({
		});

	}


	/**  Returns the request structure for the get artifact request.  */
	export interface GetArtifactUrlRequest {
	}

	/**  Returns the request structure for the get artifact request.  */
	export interface GetArtifactUrlRequestFormProperties {
	}
	export function CreateGetArtifactUrlRequestFormGroup() {
		return new FormGroup<GetArtifactUrlRequestFormProperties>({
		});

	}


	/**  The request structure for the get backend environment request.  */
	export interface GetBackendEnvironmentRequest {
	}

	/**  The request structure for the get backend environment request.  */
	export interface GetBackendEnvironmentRequestFormProperties {
	}
	export function CreateGetBackendEnvironmentRequestFormGroup() {
		return new FormGroup<GetBackendEnvironmentRequestFormProperties>({
		});

	}


	/**  The request structure for the get branch request.  */
	export interface GetBranchRequest {
	}

	/**  The request structure for the get branch request.  */
	export interface GetBranchRequestFormProperties {
	}
	export function CreateGetBranchRequestFormGroup() {
		return new FormGroup<GetBranchRequestFormProperties>({
		});

	}


	/**  The request structure for the get domain association request.  */
	export interface GetDomainAssociationRequest {
	}

	/**  The request structure for the get domain association request.  */
	export interface GetDomainAssociationRequestFormProperties {
	}
	export function CreateGetDomainAssociationRequestFormGroup() {
		return new FormGroup<GetDomainAssociationRequestFormProperties>({
		});

	}


	/**  The request structure for the get job request.  */
	export interface GetJobRequest {
	}

	/**  The request structure for the get job request.  */
	export interface GetJobRequestFormProperties {
	}
	export function CreateGetJobRequestFormGroup() {
		return new FormGroup<GetJobRequestFormProperties>({
		});

	}


	/**  The request structure for the get webhook request.  */
	export interface GetWebhookRequest {
	}

	/**  The request structure for the get webhook request.  */
	export interface GetWebhookRequestFormProperties {
	}
	export function CreateGetWebhookRequestFormGroup() {
		return new FormGroup<GetWebhookRequestFormProperties>({
		});

	}


	/**  The request structure for the list apps request.  */
	export interface ListAppsRequest {
	}

	/**  The request structure for the list apps request.  */
	export interface ListAppsRequestFormProperties {
	}
	export function CreateListAppsRequestFormGroup() {
		return new FormGroup<ListAppsRequestFormProperties>({
		});

	}


	/**  Describes the request structure for the list artifacts request.  */
	export interface ListArtifactsRequest {
	}

	/**  Describes the request structure for the list artifacts request.  */
	export interface ListArtifactsRequestFormProperties {
	}
	export function CreateListArtifactsRequestFormGroup() {
		return new FormGroup<ListArtifactsRequestFormProperties>({
		});

	}


	/**  The request structure for the list backend environments request.  */
	export interface ListBackendEnvironmentsRequest {
	}

	/**  The request structure for the list backend environments request.  */
	export interface ListBackendEnvironmentsRequestFormProperties {
	}
	export function CreateListBackendEnvironmentsRequestFormGroup() {
		return new FormGroup<ListBackendEnvironmentsRequestFormProperties>({
		});

	}


	/**  The request structure for the list branches request.  */
	export interface ListBranchesRequest {
	}

	/**  The request structure for the list branches request.  */
	export interface ListBranchesRequestFormProperties {
	}
	export function CreateListBranchesRequestFormGroup() {
		return new FormGroup<ListBranchesRequestFormProperties>({
		});

	}


	/**  The request structure for the list domain associations request.  */
	export interface ListDomainAssociationsRequest {
	}

	/**  The request structure for the list domain associations request.  */
	export interface ListDomainAssociationsRequestFormProperties {
	}
	export function CreateListDomainAssociationsRequestFormGroup() {
		return new FormGroup<ListDomainAssociationsRequestFormProperties>({
		});

	}


	/**  The request structure for the list jobs request.  */
	export interface ListJobsRequest {
	}

	/**  The request structure for the list jobs request.  */
	export interface ListJobsRequestFormProperties {
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
		});

	}


	/**  The request structure to use to list tags for a resource.  */
	export interface ListTagsForResourceRequest {
	}

	/**  The request structure to use to list tags for a resource.  */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/**  The request structure for the list webhooks request.  */
	export interface ListWebhooksRequest {
	}

	/**  The request structure for the list webhooks request.  */
	export interface ListWebhooksRequestFormProperties {
	}
	export function CreateListWebhooksRequestFormGroup() {
		return new FormGroup<ListWebhooksRequestFormProperties>({
		});

	}


	/**  The request structure for the start a deployment request.  */
	export interface StartDeploymentRequest {
		jobId?: string;
		sourceUrl?: string;
	}

	/**  The request structure for the start a deployment request.  */
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


	/**  The request structure for the start job request.  */
	export interface StartJobRequest {
		jobId?: string;

		/** Required */
		jobType: JobType;
		jobReason?: string;
		commitId?: string;
		commitMessage?: string;
		commitTime?: Date;
	}

	/**  The request structure for the start job request.  */
	export interface StartJobRequestFormProperties {
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobType: FormControl<JobType | null | undefined>,
		jobReason: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		commitTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartJobRequestFormGroup() {
		return new FormGroup<StartJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<JobType | null | undefined>(undefined, [Validators.required]),
			jobReason: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			commitTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  The request structure for the stop job request.  */
	export interface StopJobRequest {
	}

	/**  The request structure for the stop job request.  */
	export interface StopJobRequestFormProperties {
	}
	export function CreateStopJobRequestFormGroup() {
		return new FormGroup<StopJobRequestFormProperties>({
		});

	}


	/**  The request structure to tag a resource with a tag key and value.  */
	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}

	/**  The request structure to tag a resource with a tag key and value.  */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/**  The request structure for the untag resource request.  */
	export interface UntagResourceRequest {
	}

	/**  The request structure for the untag resource request.  */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/**  The request structure for the update app request.  */
	export interface UpdateAppRequest {
		name?: string;
		description?: string;
		platform?: Platform;
		iamServiceRoleArn?: string;
		environmentVariables?: EnvironmentVariables;
		enableBranchAutoBuild?: boolean | null;
		enableBranchAutoDeletion?: boolean | null;
		enableBasicAuth?: boolean | null;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;
		buildSpec?: string;
		customHeaders?: string;
		enableAutoBranchCreation?: boolean | null;
		autoBranchCreationPatterns?: Array<string>;
		autoBranchCreationConfig?: AutoBranchCreationConfig;
		repository?: string;
		oauthToken?: string;
		accessToken?: string;
	}

	/**  The request structure for the update app request.  */
	export interface UpdateAppRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		platform: FormControl<Platform | null | undefined>,
		iamServiceRoleArn: FormControl<string | null | undefined>,
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,
		enableBranchAutoDeletion: FormControl<boolean | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,
		customHeaders: FormControl<string | null | undefined>,
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,
		repository: FormControl<string | null | undefined>,
		oauthToken: FormControl<string | null | undefined>,
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppRequestFormGroup() {
		return new FormGroup<UpdateAppRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<Platform | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBranchAutoDeletion: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			customHeaders: new FormControl<string | null | undefined>(undefined),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			oauthToken: new FormControl<string | null | undefined>(undefined),
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The request structure for the update branch request.  */
	export interface UpdateBranchRequest {
		description?: string;
		framework?: string;
		stage?: Stage;
		enableNotification?: boolean | null;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean | null;
		enablePerformanceMode?: boolean | null;
		buildSpec?: string;
		ttl?: string;
		displayName?: string;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string;
		backendEnvironmentArn?: string;
	}

	/**  The request structure for the update branch request.  */
	export interface UpdateBranchRequestFormProperties {
		description: FormControl<string | null | undefined>,
		framework: FormControl<string | null | undefined>,
		stage: FormControl<Stage | null | undefined>,
		enableNotification: FormControl<boolean | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		enablePerformanceMode: FormControl<boolean | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,
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
			stage: new FormControl<Stage | null | undefined>(undefined),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			enablePerformanceMode: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The request structure for the update domain association request.  */
	export interface UpdateDomainAssociationRequest {
		enableAutoSubDomain?: boolean | null;
		subDomainSettings?: Array<SubDomainSetting>;
		autoSubDomainCreationPatterns?: Array<string>;
		autoSubDomainIAMRole?: string;
	}

	/**  The request structure for the update domain association request.  */
	export interface UpdateDomainAssociationRequestFormProperties {
		enableAutoSubDomain: FormControl<boolean | null | undefined>,
		autoSubDomainIAMRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainAssociationRequestFormGroup() {
		return new FormGroup<UpdateDomainAssociationRequestFormProperties>({
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
			autoSubDomainIAMRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The request structure for the update webhook request.  */
	export interface UpdateWebhookRequest {
		branchName?: string;
		description?: string;
	}

	/**  The request structure for the update webhook request.  */
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
		 * Creates a new Amplify app.
		 * Post apps
		 * @return {CreateAppResult} Success
		 */
		CreateApp(requestBody: CreateAppPostBody): Observable<CreateAppResult> {
			return this.http.post<CreateAppResult>(this.baseUri + 'apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the existing Amplify apps.
		 * Get apps
		 * @param {string} nextToken  A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries. 
		 *     Max length: 2000
		 * @param {number} maxResults  The maximum number of records to list in a single response. 
		 *     Minimum: 0    Maximum: 100
		 * @return {ListAppsResult} Success
		 */
		ListApps(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAppsResult> {
			return this.http.get<ListAppsResult>(this.baseUri + 'apps?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new backend environment for an Amplify app.
		 * Post apps/{appId}/backendenvironments
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @return {CreateBackendEnvironmentResult} Success
		 */
		CreateBackendEnvironment(appId: string, requestBody: CreateBackendEnvironmentPostBody): Observable<CreateBackendEnvironmentResult> {
			return this.http.post<CreateBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the backend environments for an Amplify app.
		 * Get apps/{appId}/backendenvironments
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} environmentName  The name of the backend environment 
		 *     Min length: 1    Max length: 255
		 * @param {string} nextToken  A pagination token. Set to null to start listing backend environments from the start. If a non-null pagination token is returned in a result, pass its value in here to list more backend environments. 
		 *     Max length: 2000
		 * @param {number} maxResults  The maximum number of records to list in a single response. 
		 *     Minimum: 0    Maximum: 100
		 * @return {ListBackendEnvironmentsResult} Success
		 */
		ListBackendEnvironments(appId: string, environmentName: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListBackendEnvironmentsResult> {
			return this.http.get<ListBackendEnvironmentsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments&environmentName=' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new branch for an Amplify app.
		 * Post apps/{appId}/branches
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @return {CreateBranchResult} Success
		 */
		CreateBranch(appId: string, requestBody: CreateBranchPostBody): Observable<CreateBranchResult> {
			return this.http.post<CreateBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the branches of an Amplify app.
		 * Get apps/{appId}/branches
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} nextToken  A pagination token. Set to null to start listing branches from the start. If a non-null pagination token is returned in a result, pass its value in here to list more branches. 
		 *     Max length: 2000
		 * @param {number} maxResults  The maximum number of records to list in a single response. 
		 *     Minimum: 0    Maximum: 100
		 * @return {ListBranchesResult} Success
		 */
		ListBranches(appId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListBranchesResult> {
			return this.http.get<ListBranchesResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository.
		 * Post apps/{appId}/branches/{branchName}/deployments
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name for the branch, for the job. 
		 *     Min length: 1    Max length: 255
		 * @return {CreateDeploymentResult} Success
		 */
		CreateDeployment(appId: string, branchName: string, requestBody: CreateDeploymentPostBody): Observable<CreateDeploymentResult> {
			return this.http.post<CreateDeploymentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app
		 * Post apps/{appId}/domains
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @return {CreateDomainAssociationResult} Success
		 */
		CreateDomainAssociation(appId: string, requestBody: CreateDomainAssociationPostBody): Observable<CreateDomainAssociationResult> {
			return this.http.post<CreateDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the domain associations for an Amplify app.
		 * Get apps/{appId}/domains
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} nextToken  A pagination token. Set to null to start listing apps from the start. If non-null, a pagination token is returned in a result. Pass its value in here to list more projects. 
		 *     Max length: 2000
		 * @param {number} maxResults  The maximum number of records to list in a single response. 
		 *     Minimum: 0    Maximum: 100
		 * @return {ListDomainAssociationsResult} Success
		 */
		ListDomainAssociations(appId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDomainAssociationsResult> {
			return this.http.get<ListDomainAssociationsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new webhook on an Amplify app.
		 * Post apps/{appId}/webhooks
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @return {CreateWebhookResult} Success
		 */
		CreateWebhook(appId: string, requestBody: CreateWebhookPostBody): Observable<CreateWebhookResult> {
			return this.http.post<CreateWebhookResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of webhooks for an Amplify app.
		 * Get apps/{appId}/webhooks
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} nextToken  A pagination token. Set to null to start listing webhooks from the start. If non-null,the pagination token is returned in a result. Pass its value in here to list more webhooks. 
		 *     Max length: 2000
		 * @param {number} maxResults  The maximum number of records to list in a single response. 
		 *     Minimum: 0    Maximum: 100
		 * @return {ListWebhooksResult} Success
		 */
		ListWebhooks(appId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListWebhooksResult> {
			return this.http.get<ListWebhooksResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/webhooks&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes an existing Amplify app specified by an app ID.
		 * Delete apps/{appId}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @return {DeleteAppResult} Success
		 */
		DeleteApp(appId: string): Observable<DeleteAppResult> {
			return this.http.delete<DeleteAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), {});
		}

		/**
		 * Returns an existing Amplify app by appID.
		 * Get apps/{appId}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @return {GetAppResult} Success
		 */
		GetApp(appId: string): Observable<GetAppResult> {
			return this.http.get<GetAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), {});
		}

		/**
		 * Updates an existing Amplify app.
		 * Post apps/{appId}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @return {UpdateAppResult} Success
		 */
		UpdateApp(appId: string, requestBody: UpdateAppPostBody): Observable<UpdateAppResult> {
			return this.http.post<UpdateAppResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a backend environment for an Amplify app.
		 * Delete apps/{appId}/backendenvironments/{environmentName}
		 * @param {string} appId  The unique ID of an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} environmentName  The name of a backend environment of an Amplify app. 
		 *     Min length: 1    Max length: 255
		 * @return {DeleteBackendEnvironmentResult} Success
		 */
		DeleteBackendEnvironment(appId: string, environmentName: string): Observable<DeleteBackendEnvironmentResult> {
			return this.http.delete<DeleteBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments/' + (environmentName == null ? '' : encodeURIComponent(environmentName)), {});
		}

		/**
		 * Returns a backend environment for an Amplify app.
		 * Get apps/{appId}/backendenvironments/{environmentName}
		 * @param {string} appId  The unique id for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} environmentName  The name for the backend environment. 
		 *     Min length: 1    Max length: 255
		 * @return {GetBackendEnvironmentResult} Success
		 */
		GetBackendEnvironment(appId: string, environmentName: string): Observable<GetBackendEnvironmentResult> {
			return this.http.get<GetBackendEnvironmentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/backendenvironments/' + (environmentName == null ? '' : encodeURIComponent(environmentName)), {});
		}

		/**
		 * Deletes a branch for an Amplify app.
		 * Delete apps/{appId}/branches/{branchName}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name for the branch. 
		 *     Min length: 1    Max length: 255
		 * @return {DeleteBranchResult} Success
		 */
		DeleteBranch(appId: string, branchName: string): Observable<DeleteBranchResult> {
			return this.http.delete<DeleteBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), {});
		}

		/**
		 * Returns a branch for an Amplify app.
		 * Get apps/{appId}/branches/{branchName}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name for the branch. 
		 *     Min length: 1    Max length: 255
		 * @return {GetBranchResult} Success
		 */
		GetBranch(appId: string, branchName: string): Observable<GetBranchResult> {
			return this.http.get<GetBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), {});
		}

		/**
		 * Updates a branch for an Amplify app.
		 * Post apps/{appId}/branches/{branchName}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name for the branch. 
		 *     Min length: 1    Max length: 255
		 * @return {UpdateBranchResult} Success
		 */
		UpdateBranch(appId: string, branchName: string, requestBody: UpdateBranchPostBody): Observable<UpdateBranchResult> {
			return this.http.post<UpdateBranchResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a domain association for an Amplify app.
		 * Delete apps/{appId}/domains/{domainName}
		 * @param {string} appId  The unique id for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} domainName  The name of the domain. 
		 *     Max length: 64
		 * @return {DeleteDomainAssociationResult} Success
		 */
		DeleteDomainAssociation(appId: string, domainName: string): Observable<DeleteDomainAssociationResult> {
			return this.http.delete<DeleteDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Returns the domain information for an Amplify app.
		 * Get apps/{appId}/domains/{domainName}
		 * @param {string} appId  The unique id for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} domainName  The name of the domain. 
		 *     Max length: 64
		 * @return {GetDomainAssociationResult} Success
		 */
		GetDomainAssociation(appId: string, domainName: string): Observable<GetDomainAssociationResult> {
			return this.http.get<GetDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Creates a new domain association for an Amplify app.
		 * Post apps/{appId}/domains/{domainName}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} domainName  The name of the domain. 
		 *     Max length: 64
		 * @return {UpdateDomainAssociationResult} Success
		 */
		UpdateDomainAssociation(appId: string, domainName: string, requestBody: UpdateDomainAssociationPostBody): Observable<UpdateDomainAssociationResult> {
			return this.http.post<UpdateDomainAssociationResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job for a branch of an Amplify app.
		 * Delete apps/{appId}/branches/{branchName}/jobs/{jobId}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name for the branch, for the job. 
		 *     Min length: 1    Max length: 255
		 * @param {string} jobId  The unique ID for the job. 
		 *     Max length: 255
		 * @return {DeleteJobResult} Success
		 */
		DeleteJob(appId: string, branchName: string, jobId: string): Observable<DeleteJobResult> {
			return this.http.delete<DeleteJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Returns a job for a branch of an Amplify app.
		 * Get apps/{appId}/branches/{branchName}/jobs/{jobId}
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The branch name for the job. 
		 *     Min length: 1    Max length: 255
		 * @param {string} jobId  The unique ID for the job. 
		 *     Max length: 255
		 * @return {GetJobResult} Success
		 */
		GetJob(appId: string, branchName: string, jobId: string): Observable<GetJobResult> {
			return this.http.get<GetJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Deletes a webhook.
		 * Delete webhooks/{webhookId}
		 * @param {string} webhookId  The unique ID for a webhook. 
		 *     Max length: 255
		 * @return {DeleteWebhookResult} Success
		 */
		DeleteWebhook(webhookId: string): Observable<DeleteWebhookResult> {
			return this.http.delete<DeleteWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), {});
		}

		/**
		 * Returns the webhook information that corresponds to a specified webhook ID.
		 * Get webhooks/{webhookId}
		 * @param {string} webhookId  The unique ID for a webhook. 
		 *     Max length: 255
		 * @return {GetWebhookResult} Success
		 */
		GetWebhook(webhookId: string): Observable<GetWebhookResult> {
			return this.http.get<GetWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), {});
		}

		/**
		 * Updates a webhook.
		 * Post webhooks/{webhookId}
		 * @param {string} webhookId  The unique ID for a webhook. 
		 *     Max length: 255
		 * @return {UpdateWebhookResult} Success
		 */
		UpdateWebhook(webhookId: string, requestBody: UpdateWebhookPostBody): Observable<UpdateWebhookResult> {
			return this.http.post<UpdateWebhookResult>(this.baseUri + 'webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the website access logs for a specific time range using a presigned URL.
		 * Post apps/{appId}/accesslogs
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @return {GenerateAccessLogsResult} Success
		 */
		GenerateAccessLogs(appId: string, requestBody: GenerateAccessLogsPostBody): Observable<GenerateAccessLogsResult> {
			return this.http.post<GenerateAccessLogsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/accesslogs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the artifact info that corresponds to an artifact id.
		 * Get artifacts/{artifactId}
		 * @param {string} artifactId  The unique ID for an artifact. 
		 *     Max length: 255
		 * @return {GetArtifactUrlResult} Success
		 */
		GetArtifactUrl(artifactId: string): Observable<GetArtifactUrlResult> {
			return this.http.get<GetArtifactUrlResult>(this.baseUri + 'artifacts/' + (artifactId == null ? '' : encodeURIComponent(artifactId)), {});
		}

		/**
		 * Returns a list of artifacts for a specified app, branch, and job.
		 * Get apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name of a branch that is part of an Amplify app. 
		 *     Min length: 1    Max length: 255
		 * @param {string} jobId  The unique ID for a job. 
		 *     Max length: 255
		 * @param {string} nextToken  A pagination token. Set to null to start listing artifacts from start. If a non-null pagination token is returned in a result, pass its value in here to list more artifacts. 
		 *     Max length: 2000
		 * @param {number} maxResults  The maximum number of records to list in a single response. 
		 *     Minimum: 0    Maximum: 100
		 * @return {ListArtifactsResult} Success
		 */
		ListArtifacts(appId: string, branchName: string, jobId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListArtifactsResult> {
			return this.http.get<ListArtifactsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/artifacts&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the jobs for a branch of an Amplify app.
		 * Get apps/{appId}/branches/{branchName}/jobs
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name for a branch. 
		 *     Min length: 1    Max length: 255
		 * @param {string} nextToken  A pagination token. Set to null to start listing steps from the start. If a non-null pagination token is returned in a result, pass its value in here to list more steps. 
		 *     Max length: 2000
		 * @param {number} maxResults  The maximum number of records to list in a single response. 
		 *     Minimum: 0    Maximum: 100
		 * @return {ListJobsResult} Success
		 */
		ListJobs(appId: string, branchName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListJobsResult> {
			return this.http.get<ListJobsResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Starts a new job for a branch of an Amplify app.
		 * Post apps/{appId}/branches/{branchName}/jobs
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The branch name for the job. 
		 *     Min length: 1    Max length: 255
		 * @return {StartJobResult} Success
		 */
		StartJob(appId: string, branchName: string, requestBody: StartJobPostBody): Observable<StartJobResult> {
			return this.http.post<StartJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags for a specified Amazon Resource Name (ARN).
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) to use to list tags. 
		 *     Min length: 0    Max length: 2048
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags the resource with a tag key and value.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) to use to tag a resource. 
		 *     Min length: 0    Max length: 2048
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository.
		 * Post apps/{appId}/branches/{branchName}/deployments/start
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name for the branch, for the job. 
		 *     Min length: 1    Max length: 255
		 * @return {StartDeploymentResult} Success
		 */
		StartDeployment(appId: string, branchName: string, requestBody: StartDeploymentPostBody): Observable<StartDeploymentResult> {
			return this.http.post<StartDeploymentResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/deployments/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a job that is in progress for a branch of an Amplify app.
		 * Delete apps/{appId}/branches/{branchName}/jobs/{jobId}/stop
		 * @param {string} appId  The unique ID for an Amplify app. 
		 *     Min length: 1    Max length: 20
		 * @param {string} branchName  The name for the branch, for the job. 
		 *     Min length: 1    Max length: 255
		 * @param {string} jobId  The unique id for the job. 
		 *     Max length: 255
		 * @return {StopJobResult} Success
		 */
		StopJob(appId: string, branchName: string, jobId: string): Observable<StopJobResult> {
			return this.http.delete<StopJobResult>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)) + '/branches/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/stop', {});
		}

		/**
		 * Untags a resource with a specified Amazon Resource Name (ARN).
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) to use to untag a resource. 
		 *     Min length: 0    Max length: 2048
		 * @param {Array<string>} tagKeys  The tag keys to use to untag a resource. 
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateAppPostBody {

		/**
		 * The name for an Amplify app.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: string;

		/**
		 * The description for an Amplify app.
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * The repository for an Amplify app.
		 * Max length: 1000
		 */
		repository?: string | null;

		/** The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>. */
		platform?: Platform | null;

		/**
		 * The AWS Identity and Access Management (IAM) service role for an Amplify app.
		 * Min length: 0
		 * Max length: 1000
		 */
		iamServiceRoleArn?: string | null;

		/**
		 * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
		 * Max length: 1000
		 */
		oauthToken?: string | null;

		/**
		 * <p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
		 * Min length: 1
		 * Max length: 255
		 */
		accessToken?: string | null;

		/** The environment variables map for an Amplify app. */
		environmentVariables?: {[id: string]: string };

		/** Enables the auto building of branches for an Amplify app. */
		enableBranchAutoBuild?: boolean | null;

		/** Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. */
		enableBranchAutoDeletion?: boolean | null;

		/** Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app. */
		enableBasicAuth?: boolean | null;

		/**
		 * The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string | null;

		/** The custom rewrite and redirect rules for an Amplify app. */
		customRules?: Array<CustomRule>;

		/** The tag for an Amplify app. */
		tags?: {[id: string]: string };

		/**
		 * The build specification (build spec) file for an Amplify app build.
		 * Min length: 1
		 * Max length: 25000
		 */
		buildSpec?: string | null;

		/**
		 * The custom HTTP headers for an Amplify app.
		 * Min length: 0
		 * Max length: 25000
		 */
		customHeaders?: string | null;

		/** Enables automated branch creation for an Amplify app. */
		enableAutoBranchCreation?: boolean | null;

		/** The automated branch creation glob patterns for an Amplify app. */
		autoBranchCreationPatterns?: Array<string>;

		/** Describes the automated branch creation configuration. */
		autoBranchCreationConfig?: CreateAppPostBodyAutoBranchCreationConfig;
	}
	export interface CreateAppPostBodyFormProperties {

		/**
		 * The name for an Amplify app.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description for an Amplify app.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The repository for an Amplify app.
		 * Max length: 1000
		 */
		repository: FormControl<string | null | undefined>,

		/** The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>. */
		platform: FormControl<Platform | null | undefined>,

		/**
		 * The AWS Identity and Access Management (IAM) service role for an Amplify app.
		 * Min length: 0
		 * Max length: 1000
		 */
		iamServiceRoleArn: FormControl<string | null | undefined>,

		/**
		 * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
		 * Max length: 1000
		 */
		oauthToken: FormControl<string | null | undefined>,

		/**
		 * <p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you create a new app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
		 * Min length: 1
		 * Max length: 255
		 */
		accessToken: FormControl<string | null | undefined>,

		/** The environment variables map for an Amplify app. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** Enables the auto building of branches for an Amplify app. */
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,

		/** Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. */
		enableBranchAutoDeletion: FormControl<boolean | null | undefined>,

		/** Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app. */
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
		 * Max length: 2000
		 */
		basicAuthCredentials: FormControl<string | null | undefined>,

		/** The tag for an Amplify app. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The build specification (build spec) file for an Amplify app build.
		 * Min length: 1
		 * Max length: 25000
		 */
		buildSpec: FormControl<string | null | undefined>,

		/**
		 * The custom HTTP headers for an Amplify app.
		 * Min length: 0
		 * Max length: 25000
		 */
		customHeaders: FormControl<string | null | undefined>,

		/** Enables automated branch creation for an Amplify app. */
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAppPostBodyFormGroup() {
		return new FormGroup<CreateAppPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			platform: new FormControl<Platform | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			oauthToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			accessToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBranchAutoDeletion: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000), Validators.pattern('\(\?s\).*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(25000), Validators.pattern('\(\?s\).\+')]),
			customHeaders: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(25000), Validators.pattern('\(\?s\).*')]),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateAppPostBodyAutoBranchCreationConfig {
		stage?: Stage;
		framework?: string;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean | null;
		enablePerformanceMode?: boolean | null;
		buildSpec?: string;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string;
	}
	export interface CreateAppPostBodyAutoBranchCreationConfigFormProperties {
		stage: FormControl<Stage | null | undefined>,
		framework: FormControl<string | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		enablePerformanceMode: FormControl<boolean | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppPostBodyAutoBranchCreationConfigFormGroup() {
		return new FormGroup<CreateAppPostBodyAutoBranchCreationConfigFormProperties>({
			stage: new FormControl<Stage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			enablePerformanceMode: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackendEnvironmentPostBody {

		/**
		 * The name for the backend environment.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		environmentName: string;

		/**
		 * The AWS CloudFormation stack name of a backend environment.
		 * Min length: 1
		 * Max length: 255
		 */
		stackName?: string | null;

		/**
		 * The name of deployment artifacts.
		 * Min length: 1
		 * Max length: 1000
		 */
		deploymentArtifacts?: string | null;
	}
	export interface CreateBackendEnvironmentPostBodyFormProperties {

		/**
		 * The name for the backend environment.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		environmentName: FormControl<string | null | undefined>,

		/**
		 * The AWS CloudFormation stack name of a backend environment.
		 * Min length: 1
		 * Max length: 255
		 */
		stackName: FormControl<string | null | undefined>,

		/**
		 * The name of deployment artifacts.
		 * Min length: 1
		 * Max length: 1000
		 */
		deploymentArtifacts: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateBackendEnvironmentPostBodyFormProperties>({
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
			stackName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
			deploymentArtifacts: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('\(\?s\).\+')]),
		});

	}

	export interface CreateBranchPostBody {

		/**
		 * The name for the branch.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		branchName: string;

		/**
		 * The description for the branch.
		 * Max length: 1000
		 */
		description?: string | null;

		/** Describes the current stage for the branch. */
		stage?: Stage | null;

		/**
		 * The framework for the branch.
		 * Max length: 255
		 */
		framework?: string | null;

		/** Enables notifications for the branch. */
		enableNotification?: boolean | null;

		/** Enables auto building for the branch. */
		enableAutoBuild?: boolean | null;

		/** The environment variables for the branch. */
		environmentVariables?: {[id: string]: string };

		/**
		 * The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string | null;

		/** Enables basic authorization for the branch. */
		enableBasicAuth?: boolean | null;

		/** <p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p> */
		enablePerformanceMode?: boolean | null;

		/** The tag for the branch. */
		tags?: {[id: string]: string };

		/**
		 * The build specification (build spec) file for an Amplify app build.
		 * Min length: 1
		 * Max length: 25000
		 */
		buildSpec?: string | null;

		/**
		 * The content Time to Live (TTL) for the website in seconds.
		 * Min length: 0
		 * Max length: 32
		 */
		ttl?: string | null;

		/**
		 * The display name for a branch. This is used as the default domain prefix.
		 * Max length: 255
		 */
		displayName?: string | null;

		/** Enables pull request previews for this branch. */
		enablePullRequestPreview?: boolean | null;

		/**
		 * The Amplify environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.
		 * Min length: 0
		 * Max length: 1000
		 */
		backendEnvironmentArn?: string | null;
	}
	export interface CreateBranchPostBodyFormProperties {

		/**
		 * The name for the branch.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		branchName: FormControl<string | null | undefined>,

		/**
		 * The description for the branch.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/** Describes the current stage for the branch. */
		stage: FormControl<Stage | null | undefined>,

		/**
		 * The framework for the branch.
		 * Max length: 255
		 */
		framework: FormControl<string | null | undefined>,

		/** Enables notifications for the branch. */
		enableNotification: FormControl<boolean | null | undefined>,

		/** Enables auto building for the branch. */
		enableAutoBuild: FormControl<boolean | null | undefined>,

		/** The environment variables for the branch. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
		 * Max length: 2000
		 */
		basicAuthCredentials: FormControl<string | null | undefined>,

		/** Enables basic authorization for the branch. */
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/** <p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p> */
		enablePerformanceMode: FormControl<boolean | null | undefined>,

		/** The tag for the branch. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The build specification (build spec) file for an Amplify app build.
		 * Min length: 1
		 * Max length: 25000
		 */
		buildSpec: FormControl<string | null | undefined>,

		/**
		 * The content Time to Live (TTL) for the website in seconds.
		 * Min length: 0
		 * Max length: 32
		 */
		ttl: FormControl<string | null | undefined>,

		/**
		 * The display name for a branch. This is used as the default domain prefix.
		 * Max length: 255
		 */
		displayName: FormControl<string | null | undefined>,

		/** Enables pull request previews for this branch. */
		enablePullRequestPreview: FormControl<boolean | null | undefined>,

		/**
		 * The Amplify environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.
		 * Min length: 0
		 * Max length: 1000
		 */
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBranchPostBodyFormGroup() {
		return new FormGroup<CreateBranchPostBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			stage: new FormControl<Stage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('\(\?s\).*')]),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000), Validators.pattern('\(\?s\).*')]),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			enablePerformanceMode: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(25000), Validators.pattern('\(\?s\).\+')]),
			ttl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(32), Validators.pattern('\d*')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('\(\?s\).*')]),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20), Validators.pattern('\(\?s\).*')]),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
		});

	}

	export interface CreateDeploymentPostBody {

		/** An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files. */
		fileMap?: {[id: string]: string };
	}
	export interface CreateDeploymentPostBodyFormProperties {

		/** An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files. */
		fileMap: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyFormProperties>({
			fileMap: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDomainAssociationPostBody {

		/**
		 * The domain name for the domain association.
		 * Required
		 * Max length: 64
		 */
		domainName: string;

		/** Enables the automated creation of subdomains for branches. */
		enableAutoSubDomain?: boolean | null;

		/**
		 * The setting for the subdomain.
		 * Required
		 * Maximum items: 500
		 */
		subDomainSettings: Array<SubDomainSetting>;

		/** Sets the branch patterns for automatic subdomain creation. */
		autoSubDomainCreationPatterns?: Array<string>;

		/**
		 * The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
		 * Max length: 1000
		 */
		autoSubDomainIAMRole?: string | null;
	}
	export interface CreateDomainAssociationPostBodyFormProperties {

		/**
		 * The domain name for the domain association.
		 * Required
		 * Max length: 64
		 */
		domainName: FormControl<string | null | undefined>,

		/** Enables the automated creation of subdomains for branches. */
		enableAutoSubDomain: FormControl<boolean | null | undefined>,

		/**
		 * The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
		 * Max length: 1000
		 */
		autoSubDomainIAMRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainAssociationPostBodyFormGroup() {
		return new FormGroup<CreateDomainAssociationPostBodyFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$')]),
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
			autoSubDomainIAMRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^$|^arn:aws:iam::\d{12}:role.+')]),
		});

	}

	export interface CreateWebhookPostBody {

		/**
		 * The name for a branch that is part of an Amplify app.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		branchName: string;

		/**
		 * The description for a webhook.
		 * Max length: 1000
		 */
		description?: string | null;
	}
	export interface CreateWebhookPostBodyFormProperties {

		/**
		 * The name for a branch that is part of an Amplify app.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		branchName: FormControl<string | null | undefined>,

		/**
		 * The description for a webhook.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookPostBodyFormGroup() {
		return new FormGroup<CreateWebhookPostBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
		});

	}

	export interface UpdateAppPostBody {

		/**
		 * The name for an Amplify app.
		 * Min length: 1
		 * Max length: 255
		 */
		name?: string | null;

		/**
		 * The description for an Amplify app.
		 * Max length: 1000
		 */
		description?: string | null;

		/** The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>. */
		platform?: Platform | null;

		/**
		 * The AWS Identity and Access Management (IAM) service role for an Amplify app.
		 * Min length: 0
		 * Max length: 1000
		 */
		iamServiceRoleArn?: string | null;

		/** The environment variables for an Amplify app. */
		environmentVariables?: {[id: string]: string };

		/** Enables branch auto-building for an Amplify app. */
		enableBranchAutoBuild?: boolean | null;

		/** Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. */
		enableBranchAutoDeletion?: boolean | null;

		/** Enables basic authorization for an Amplify app. */
		enableBasicAuth?: boolean | null;

		/**
		 * The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string | null;

		/** The custom redirect and rewrite rules for an Amplify app. */
		customRules?: Array<CustomRule>;

		/**
		 * The build specification (build spec) file for an Amplify app build.
		 * Min length: 1
		 * Max length: 25000
		 */
		buildSpec?: string | null;

		/**
		 * The custom HTTP headers for an Amplify app.
		 * Min length: 0
		 * Max length: 25000
		 */
		customHeaders?: string | null;

		/** Enables automated branch creation for an Amplify app. */
		enableAutoBranchCreation?: boolean | null;

		/** Describes the automated branch creation glob patterns for an Amplify app. */
		autoBranchCreationPatterns?: Array<string>;

		/** Describes the automated branch creation configuration. */
		autoBranchCreationConfig?: UpdateAppPostBodyAutoBranchCreationConfig;

		/**
		 * The name of the repository for an Amplify app
		 * Max length: 1000
		 */
		repository?: string | null;

		/**
		 * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit.</p> <p>To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
		 * Max length: 1000
		 */
		oauthToken?: string | null;

		/**
		 * <p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
		 * Min length: 1
		 * Max length: 255
		 */
		accessToken?: string | null;
	}
	export interface UpdateAppPostBodyFormProperties {

		/**
		 * The name for an Amplify app.
		 * Min length: 1
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description for an Amplify app.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/** The platform for the Amplify app. For a static app, set the platform type to <code>WEB</code>. For a dynamic server-side rendered (SSR) app, set the platform type to <code>WEB_COMPUTE</code>. For an app requiring Amplify Hosting's original SSR support only, set the platform type to <code>WEB_DYNAMIC</code>. */
		platform: FormControl<Platform | null | undefined>,

		/**
		 * The AWS Identity and Access Management (IAM) service role for an Amplify app.
		 * Min length: 0
		 * Max length: 1000
		 */
		iamServiceRoleArn: FormControl<string | null | undefined>,

		/** The environment variables for an Amplify app. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** Enables branch auto-building for an Amplify app. */
		enableBranchAutoBuild: FormControl<boolean | null | undefined>,

		/** Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository. */
		enableBranchAutoDeletion: FormControl<boolean | null | undefined>,

		/** Enables basic authorization for an Amplify app. */
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/**
		 * The basic authorization credentials for an Amplify app. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
		 * Max length: 2000
		 */
		basicAuthCredentials: FormControl<string | null | undefined>,

		/**
		 * The build specification (build spec) file for an Amplify app build.
		 * Min length: 1
		 * Max length: 25000
		 */
		buildSpec: FormControl<string | null | undefined>,

		/**
		 * The custom HTTP headers for an Amplify app.
		 * Min length: 0
		 * Max length: 25000
		 */
		customHeaders: FormControl<string | null | undefined>,

		/** Enables automated branch creation for an Amplify app. */
		enableAutoBranchCreation: FormControl<boolean | null | undefined>,

		/**
		 * The name of the repository for an Amplify app
		 * Max length: 1000
		 */
		repository: FormControl<string | null | undefined>,

		/**
		 * <p>The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.</p> <p>Use <code>oauthToken</code> for repository providers other than GitHub, such as Bitbucket or CodeCommit.</p> <p>To authorize access to GitHub as your repository provider, use <code>accessToken</code>.</p> <p>You must specify either <code>oauthToken</code> or <code>accessToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
		 * Max length: 1000
		 */
		oauthToken: FormControl<string | null | undefined>,

		/**
		 * <p>The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.</p> <p>Use <code>accessToken</code> for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use <code>oauthToken</code>.</p> <p>You must specify either <code>accessToken</code> or <code>oauthToken</code> when you update an app.</p> <p>Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see <a href="https://docs.aws.amazon.com/amplify/latest/UserGuide/setting-up-GitHub-access.html#migrating-to-github-app-auth">Migrating an existing OAuth app to the Amplify GitHub App</a> in the <i>Amplify User Guide</i> .</p>
		 * Min length: 1
		 * Max length: 255
		 */
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppPostBodyFormGroup() {
		return new FormGroup<UpdateAppPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			platform: new FormControl<Platform | null | undefined>(undefined),
			iamServiceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			enableBranchAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			enableBranchAutoDeletion: new FormControl<boolean | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000), Validators.pattern('\(\?s\).*')]),
			buildSpec: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(25000), Validators.pattern('\(\?s\).\+')]),
			customHeaders: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(25000), Validators.pattern('\(\?s\).*')]),
			enableAutoBranchCreation: new FormControl<boolean | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			oauthToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			accessToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
		});

	}

	export interface UpdateAppPostBodyAutoBranchCreationConfig {
		stage?: Stage;
		framework?: string;
		enableAutoBuild?: boolean | null;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean | null;
		enablePerformanceMode?: boolean | null;
		buildSpec?: string;
		enablePullRequestPreview?: boolean | null;
		pullRequestEnvironmentName?: string;
	}
	export interface UpdateAppPostBodyAutoBranchCreationConfigFormProperties {
		stage: FormControl<Stage | null | undefined>,
		framework: FormControl<string | null | undefined>,
		enableAutoBuild: FormControl<boolean | null | undefined>,
		basicAuthCredentials: FormControl<string | null | undefined>,
		enableBasicAuth: FormControl<boolean | null | undefined>,
		enablePerformanceMode: FormControl<boolean | null | undefined>,
		buildSpec: FormControl<string | null | undefined>,
		enablePullRequestPreview: FormControl<boolean | null | undefined>,
		pullRequestEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAppPostBodyAutoBranchCreationConfigFormGroup() {
		return new FormGroup<UpdateAppPostBodyAutoBranchCreationConfigFormProperties>({
			stage: new FormControl<Stage | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			enablePerformanceMode: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBranchPostBody {

		/**
		 * The description for the branch.
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * The framework for the branch.
		 * Max length: 255
		 */
		framework?: string | null;

		/** Describes the current stage for the branch. */
		stage?: Stage | null;

		/** Enables notifications for the branch. */
		enableNotification?: boolean | null;

		/** Enables auto building for the branch. */
		enableAutoBuild?: boolean | null;

		/** The environment variables for the branch. */
		environmentVariables?: {[id: string]: string };

		/**
		 * The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string | null;

		/** Enables basic authorization for the branch. */
		enableBasicAuth?: boolean | null;

		/** <p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p> */
		enablePerformanceMode?: boolean | null;

		/**
		 * The build specification (build spec) file for an Amplify app build.
		 * Min length: 1
		 * Max length: 25000
		 */
		buildSpec?: string | null;

		/**
		 * The content Time to Live (TTL) for the website in seconds.
		 * Min length: 0
		 * Max length: 32
		 */
		ttl?: string | null;

		/**
		 * The display name for a branch. This is used as the default domain prefix.
		 * Max length: 255
		 */
		displayName?: string | null;

		/** Enables pull request previews for this branch. */
		enablePullRequestPreview?: boolean | null;

		/**
		 * The Amplify environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.
		 * Min length: 0
		 * Max length: 1000
		 */
		backendEnvironmentArn?: string | null;
	}
	export interface UpdateBranchPostBodyFormProperties {

		/**
		 * The description for the branch.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The framework for the branch.
		 * Max length: 255
		 */
		framework: FormControl<string | null | undefined>,

		/** Describes the current stage for the branch. */
		stage: FormControl<Stage | null | undefined>,

		/** Enables notifications for the branch. */
		enableNotification: FormControl<boolean | null | undefined>,

		/** Enables auto building for the branch. */
		enableAutoBuild: FormControl<boolean | null | undefined>,

		/** The environment variables for the branch. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The basic authorization credentials for the branch. You must base64-encode the authorization credentials and provide them in the format <code>user:password</code>.
		 * Max length: 2000
		 */
		basicAuthCredentials: FormControl<string | null | undefined>,

		/** Enables basic authorization for the branch. */
		enableBasicAuth: FormControl<boolean | null | undefined>,

		/** <p>Enables performance mode for the branch.</p> <p>Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out. </p> */
		enablePerformanceMode: FormControl<boolean | null | undefined>,

		/**
		 * The build specification (build spec) file for an Amplify app build.
		 * Min length: 1
		 * Max length: 25000
		 */
		buildSpec: FormControl<string | null | undefined>,

		/**
		 * The content Time to Live (TTL) for the website in seconds.
		 * Min length: 0
		 * Max length: 32
		 */
		ttl: FormControl<string | null | undefined>,

		/**
		 * The display name for a branch. This is used as the default domain prefix.
		 * Max length: 255
		 */
		displayName: FormControl<string | null | undefined>,

		/** Enables pull request previews for this branch. */
		enablePullRequestPreview: FormControl<boolean | null | undefined>,

		/**
		 * The Amplify environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.
		 * Min length: 0
		 * Max length: 1000
		 */
		backendEnvironmentArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBranchPostBodyFormGroup() {
		return new FormGroup<UpdateBranchPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
			framework: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('\(\?s\).*')]),
			stage: new FormControl<Stage | null | undefined>(undefined),
			enableNotification: new FormControl<boolean | null | undefined>(undefined),
			enableAutoBuild: new FormControl<boolean | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			basicAuthCredentials: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000), Validators.pattern('\(\?s\).*')]),
			enableBasicAuth: new FormControl<boolean | null | undefined>(undefined),
			enablePerformanceMode: new FormControl<boolean | null | undefined>(undefined),
			buildSpec: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(25000), Validators.pattern('\(\?s\).\+')]),
			ttl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(32), Validators.pattern('\d*')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('\(\?s\).*')]),
			enablePullRequestPreview: new FormControl<boolean | null | undefined>(undefined),
			pullRequestEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20), Validators.pattern('\(\?s\).*')]),
			backendEnvironmentArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
		});

	}

	export interface UpdateDomainAssociationPostBody {

		/** Enables the automated creation of subdomains for branches. */
		enableAutoSubDomain?: boolean | null;

		/**
		 * Describes the settings for the subdomain.
		 * Maximum items: 500
		 */
		subDomainSettings?: Array<SubDomainSetting>;

		/** Sets the branch patterns for automatic subdomain creation. */
		autoSubDomainCreationPatterns?: Array<string>;

		/**
		 * The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
		 * Max length: 1000
		 */
		autoSubDomainIAMRole?: string | null;
	}
	export interface UpdateDomainAssociationPostBodyFormProperties {

		/** Enables the automated creation of subdomains for branches. */
		enableAutoSubDomain: FormControl<boolean | null | undefined>,

		/**
		 * The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
		 * Max length: 1000
		 */
		autoSubDomainIAMRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainAssociationPostBodyFormGroup() {
		return new FormGroup<UpdateDomainAssociationPostBodyFormProperties>({
			enableAutoSubDomain: new FormControl<boolean | null | undefined>(undefined),
			autoSubDomainIAMRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^$|^arn:aws:iam::\d{12}:role.+')]),
		});

	}

	export interface UpdateWebhookPostBody {

		/**
		 * The name for a branch that is part of an Amplify app.
		 * Min length: 1
		 * Max length: 255
		 */
		branchName?: string | null;

		/**
		 * The description for a webhook.
		 * Max length: 1000
		 */
		description?: string | null;
	}
	export interface UpdateWebhookPostBodyFormProperties {

		/**
		 * The name for a branch that is part of an Amplify app.
		 * Min length: 1
		 * Max length: 255
		 */
		branchName: FormControl<string | null | undefined>,

		/**
		 * The description for a webhook.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebhookPostBodyFormGroup() {
		return new FormGroup<UpdateWebhookPostBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('\(\?s\).\+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('\(\?s\).*')]),
		});

	}

	export interface GenerateAccessLogsPostBody {

		/** The time at which the logs should start. The time range specified is inclusive of the start time. */
		startTime?: Date | null;

		/** The time at which the logs should end. The time range specified is inclusive of the end time. */
		endTime?: Date | null;

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 64
		 */
		domainName: string;
	}
	export interface GenerateAccessLogsPostBodyFormProperties {

		/** The time at which the logs should start. The time range specified is inclusive of the start time. */
		startTime: FormControl<Date | null | undefined>,

		/** The time at which the logs should end. The time range specified is inclusive of the end time. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 64
		 */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessLogsPostBodyFormGroup() {
		return new FormGroup<GenerateAccessLogsPostBodyFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$')]),
		});

	}

	export interface StartJobPostBody {

		/**
		 * The unique ID for an existing job. This is required if the value of <code>jobType</code> is <code>RETRY</code>.
		 * Max length: 255
		 */
		jobId?: string | null;

		/**
		 * Describes the type for the job. The job type <code>RELEASE</code> starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type <code>RETRY</code> retries an existing job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also required.
		 * Required
		 * Max length: 10
		 */
		jobType: JobType;

		/**
		 * A descriptive reason for starting this job.
		 * Max length: 255
		 */
		jobReason?: string | null;

		/**
		 * The commit ID from a third-party repository provider for the job.
		 * Max length: 255
		 */
		commitId?: string | null;

		/**
		 * The commit message from a third-party repository provider for the job.
		 * Max length: 10000
		 */
		commitMessage?: string | null;

		/** The commit date and time for the job. */
		commitTime?: Date | null;
	}
	export interface StartJobPostBodyFormProperties {

		/**
		 * The unique ID for an existing job. This is required if the value of <code>jobType</code> is <code>RETRY</code>.
		 * Max length: 255
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * Describes the type for the job. The job type <code>RELEASE</code> starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type <code>RETRY</code> retries an existing job. If the job type value is <code>RETRY</code>, the <code>jobId</code> is also required.
		 * Required
		 * Max length: 10
		 */
		jobType: FormControl<JobType | null | undefined>,

		/**
		 * A descriptive reason for starting this job.
		 * Max length: 255
		 */
		jobReason: FormControl<string | null | undefined>,

		/**
		 * The commit ID from a third-party repository provider for the job.
		 * Max length: 255
		 */
		commitId: FormControl<string | null | undefined>,

		/**
		 * The commit message from a third-party repository provider for the job.
		 * Max length: 10000
		 */
		commitMessage: FormControl<string | null | undefined>,

		/** The commit date and time for the job. */
		commitTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartJobPostBodyFormGroup() {
		return new FormGroup<StartJobPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('[0-9]+')]),
			jobType: new FormControl<JobType | null | undefined>(undefined, [Validators.required, Validators.maxLength(10)]),
			jobReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('\(\?s\).*')]),
			commitId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('\(\?s\).*')]),
			commitMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.pattern('\(\?s\).*')]),
			commitTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags used to tag the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags used to tag the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDeploymentPostBody {

		/**
		 * The job ID for this deployment, generated by the create deployment request.
		 * Max length: 255
		 */
		jobId?: string | null;

		/**
		 * The source URL for this deployment, used when calling start deployment without create deployment. The source URL can be any HTTP GET URL that is publicly accessible and downloads a single .zip file.
		 * Max length: 3000
		 */
		sourceUrl?: string | null;
	}
	export interface StartDeploymentPostBodyFormProperties {

		/**
		 * The job ID for this deployment, generated by the create deployment request.
		 * Max length: 255
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * The source URL for this deployment, used when calling start deployment without create deployment. The source URL can be any HTTP GET URL that is publicly accessible and downloads a single .zip file.
		 * Max length: 3000
		 */
		sourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartDeploymentPostBodyFormGroup() {
		return new FormGroup<StartDeploymentPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('[0-9]+')]),
			sourceUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3000), Validators.pattern('\(\?s\).*')]),
		});

	}

}

