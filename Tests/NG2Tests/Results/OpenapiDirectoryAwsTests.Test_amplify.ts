import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateAppResult {

		/**
		 * Amplify App represents different branches of a repository for building, deploying, and hosting.
		 * Required
		 */
		app: App;
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
		iamServiceRoleArn?: string;
		environmentVariables: EnvironmentVariables;
		defaultDomain: string;
		enableBranchAutoBuild: boolean;
		enableBasicAuth: boolean;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;

		/** Structure with Production Branch information. */
		productionBranch?: ProductionBranch;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enableAutoBranchCreation?: boolean;
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
	}

	export interface TagMap {
	}

	export enum AppPlatform { WEB = 0 }

	export interface EnvironmentVariables {
	}


	/**  Custom rewrite / redirect rule.  */
	export interface CustomRule {
		source: string;
		target: string;
		status?: string;
		condition?: string;
	}


	/**  Structure with Production Branch information.  */
	export interface ProductionBranch {
		lastDeployTime?: Date;
		status?: string;
		thumbnailUrl?: string;
		branchName?: string;
	}


	/**  Structure with auto branch creation config.  */
	export interface AutoBranchCreationConfig {
		stage?: AutoBranchCreationConfigStage;
		framework?: string;
		enableAutoBuild?: boolean;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enablePullRequestPreview?: boolean;
		pullRequestEnvironmentName?: string;
	}

	export enum AutoBranchCreationConfigStage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }

	export enum Stage { PRODUCTION = 0, BETA = 1, DEVELOPMENT = 2, EXPERIMENTAL = 3, PULL_REQUEST = 4 }

	export interface BadRequestException {
	}

	export interface UnauthorizedException {
	}

	export interface InternalFailureException {
	}

	export interface LimitExceededException {
	}

	export interface DependentServiceFailureException {
	}


	/**  Result structure for create backend environment.  */
	export interface CreateBackendEnvironmentResult {

		/**
		 * Backend environment for an Amplify App.
		 * Required
		 */
		backendEnvironment: BackendEnvironment;
	}


	/**  Backend environment for an Amplify App.  */
	export interface BackendEnvironment {
		backendEnvironmentArn: string;
		environmentName: string;
		stackName?: string;
		deploymentArtifacts?: string;
		createTime: Date;
		updateTime: Date;
	}

	export interface NotFoundException {
	}


	/**  Result structure for create branch request.  */
	export interface CreateBranchResult {

		/**
		 * Branch for an Amplify App, which maps to a 3rd party repository branch.
		 * Required
		 */
		branch: Branch;
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
		thumbnailUrl?: string;
		basicAuthCredentials?: string;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/**
		 * The content TTL for the website in seconds.
		 * Required
		 */
		ttl: string;
		associatedResources?: Array<string>;
		enablePullRequestPreview: boolean;
		pullRequestEnvironmentName?: string;
		destinationBranch?: string;
		sourceBranch?: string;
		backendEnvironmentArn?: string;
	}


	/**  Result structure for create a new deployment.  */
	export interface CreateDeploymentResult {
		jobId?: string;
		fileUploadUrls: FileUploadUrls;
		zipUploadUrl: string;
	}

	export interface FileUploadUrls {
	}


	/**  Result structure for the create Domain Association request.  */
	export interface CreateDomainAssociationResult {

		/**
		 * Structure for Domain Association, which associates a custom domain with an Amplify App.
		 * Required
		 */
		domainAssociation: DomainAssociation;
	}


	/**  Structure for Domain Association, which associates a custom domain with an Amplify App.  */
	export interface DomainAssociation {
		domainAssociationArn: string;
		domainName: string;
		enableAutoSubDomain: boolean;
		domainStatus: DomainAssociationDomainStatus;
		statusReason: string;
		certificateVerificationDNSRecord?: string;
		subDomains: Array<SubDomain>;
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


	/**  Setting for the Subdomain.  */
	export interface SubDomainSetting {
		prefix: string;
		branchName: string;
	}


	/**  Result structure for the create webhook request.  */
	export interface CreateWebhookResult {

		/**
		 * Structure for webhook, which associates a webhook with an Amplify App.
		 * Required
		 */
		webhook: Webhook;
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


	/**  Result structure for an Amplify App delete request.  */
	export interface DeleteAppResult {

		/**
		 * Amplify App represents different branches of a repository for building, deploying, and hosting.
		 * Required
		 */
		app: App;
	}


	/**  Result structure of a delete backend environment result.  */
	export interface DeleteBackendEnvironmentResult {

		/**
		 * Backend environment for an Amplify App.
		 * Required
		 */
		backendEnvironment: BackendEnvironment;
	}


	/**  Result structure for delete branch request.  */
	export interface DeleteBranchResult {

		/**
		 * Branch for an Amplify App, which maps to a 3rd party repository branch.
		 * Required
		 */
		branch: Branch;
	}

	export interface DeleteDomainAssociationResult {

		/**
		 * Structure for Domain Association, which associates a custom domain with an Amplify App.
		 * Required
		 */
		domainAssociation: DomainAssociation;
	}


	/**  Result structure for the delete job request.  */
	export interface DeleteJobResult {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		jobSummary: JobSummary;
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
		endTime?: Date;
		jobType: JobSummaryJobType;
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


	/**  Result structure for the generate access logs request.  */
	export interface GenerateAccessLogsResult {
		logUrl?: string;
	}

	export interface GetAppResult {

		/**
		 * Amplify App represents different branches of a repository for building, deploying, and hosting.
		 * Required
		 */
		app: App;
	}


	/**  Result structure for the get artifact request.  */
	export interface GetArtifactUrlResult {
		artifactId: string;
		artifactUrl: string;
	}


	/**  Result structure for get backend environment result.  */
	export interface GetBackendEnvironmentResult {

		/**
		 * Backend environment for an Amplify App.
		 * Required
		 */
		backendEnvironment: BackendEnvironment;
	}

	export interface GetBranchResult {

		/**
		 * Branch for an Amplify App, which maps to a 3rd party repository branch.
		 * Required
		 */
		branch: Branch;
	}


	/**  Result structure for the get Domain Association request.  */
	export interface GetDomainAssociationResult {

		/**
		 * Structure for Domain Association, which associates a custom domain with an Amplify App.
		 * Required
		 */
		domainAssociation: DomainAssociation;
	}

	export interface GetJobResult {

		/**
		 * Structure for an execution job for an Amplify App.
		 * Required
		 */
		job: Job;
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


	/**  Structure for an execution step for an execution job, for an Amplify App.  */
	export interface Step {
		stepName: string;
		startTime: Date;
		status: JobSummaryStatus;
		endTime: Date;
		logUrl?: string;
		artifactsUrl?: string;
		testArtifactsUrl?: string;
		testConfigUrl?: string;
		screenshots?: Screenshots;
		statusReason?: string;
		context?: string;
	}

	export interface Screenshots {
	}


	/**  Result structure for the get webhook request.  */
	export interface GetWebhookResult {

		/**
		 * Structure for webhook, which associates a webhook with an Amplify App.
		 * Required
		 */
		webhook: Webhook;
	}


	/**  Result structure for an Amplify App list request.  */
	export interface ListAppsResult {
		apps: Array<App>;
		nextToken?: string;
	}


	/**  Result structure for the list artifacts request.  */
	export interface ListArtifactsResult {
		artifacts: Array<Artifact>;
		nextToken?: string;
	}


	/**  Structure for artifact.  */
	export interface Artifact {
		artifactFileName: string;
		artifactId: string;
	}


	/**  Result structure for list backend environments result.  */
	export interface ListBackendEnvironmentsResult {
		backendEnvironments: Array<BackendEnvironment>;
		nextToken?: string;
	}


	/**  Result structure for list branches request.  */
	export interface ListBranchesResult {
		branches: Array<Branch>;
		nextToken?: string;
	}


	/**  Result structure for the list Domain Association request.  */
	export interface ListDomainAssociationsResult {
		domainAssociations: Array<DomainAssociation>;
		nextToken?: string;
	}


	/**  Maximum number of records to list in a single response.  */
	export interface ListJobsResult {
		jobSummaries: Array<JobSummary>;
		nextToken?: string;
	}


	/**  Response for list tags.  */
	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	export interface ResourceNotFoundException {
	}


	/**  Result structure for the list webhooks request.  */
	export interface ListWebhooksResult {
		webhooks: Array<Webhook>;
		nextToken?: string;
	}


	/**  Result structure for start a deployment.  */
	export interface StartDeploymentResult {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		jobSummary: JobSummary;
	}


	/**  Result structure for run job request.  */
	export interface StartJobResult {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		jobSummary: JobSummary;
	}


	/**  Result structure for the stop job request.  */
	export interface StopJobResult {

		/**
		 * Structure for the summary of a Job.
		 * Required
		 */
		jobSummary: JobSummary;
	}


	/**  Response for tag resource.  */
	export interface TagResourceResponse {
	}


	/**  Response for untag resource.  */
	export interface UntagResourceResponse {
	}


	/**  Result structure for an Amplify App update request.  */
	export interface UpdateAppResult {

		/**
		 * Amplify App represents different branches of a repository for building, deploying, and hosting.
		 * Required
		 */
		app: App;
	}


	/**  Result structure for update branch request.  */
	export interface UpdateBranchResult {

		/**
		 * Branch for an Amplify App, which maps to a 3rd party repository branch.
		 * Required
		 */
		branch: Branch;
	}


	/**  Result structure for the update Domain Association request.  */
	export interface UpdateDomainAssociationResult {

		/**
		 * Structure for Domain Association, which associates a custom domain with an Amplify App.
		 * Required
		 */
		domainAssociation: DomainAssociation;
	}


	/**  Result structure for the update webhook request.  */
	export interface UpdateWebhookResult {

		/**
		 * Structure for webhook, which associates a webhook with an Amplify App.
		 * Required
		 */
		webhook: Webhook;
	}

	export enum Platform { WEB = 0 }


	/**  Request structure used to create Apps in Amplify.  */
	export interface CreateAppRequest {
		name: string;
		description?: string;
		repository?: string;
		platform?: AppPlatform;
		iamServiceRoleArn?: string;
		oauthToken?: string;
		accessToken?: string;
		environmentVariables?: EnvironmentVariables;
		enableBranchAutoBuild?: boolean;
		enableBasicAuth?: boolean;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;
		tags?: TagMap;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enableAutoBranchCreation?: boolean;
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
	}


	/**  Request structure for a backend environment create request.  */
	export interface CreateBackendEnvironmentRequest {
		environmentName: string;
		stackName?: string;
		deploymentArtifacts?: string;
	}


	/**  Request structure for a branch create request.  */
	export interface CreateBranchRequest {
		branchName: string;
		description?: string;
		stage?: AutoBranchCreationConfigStage;
		framework?: string;
		enableNotification?: boolean;
		enableAutoBuild?: boolean;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean;
		tags?: TagMap;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/** The content TTL for the website in seconds. */
		ttl?: string;
		displayName?: string;
		enablePullRequestPreview?: boolean;
		pullRequestEnvironmentName?: string;
		backendEnvironmentArn?: string;
	}

	export interface FileMap {
	}


	/**  Request structure for create a new deployment.  */
	export interface CreateDeploymentRequest {
		fileMap?: FileMap;
	}


	/**  Request structure for create Domain Association request.  */
	export interface CreateDomainAssociationRequest {
		domainName: string;
		enableAutoSubDomain?: boolean;
		subDomainSettings: Array<SubDomainSetting>;
	}


	/**  Request structure for create webhook request.  */
	export interface CreateWebhookRequest {
		branchName: string;
		description?: string;
	}


	/**  Request structure for an Amplify App delete request.  */
	export interface DeleteAppRequest {
	}


	/**  Request structure for delete backend environment request.  */
	export interface DeleteBackendEnvironmentRequest {
	}


	/**  Request structure for delete branch request.  */
	export interface DeleteBranchRequest {
	}


	/**  Request structure for the delete Domain Association request.  */
	export interface DeleteDomainAssociationRequest {
	}


	/**  Request structure for delete job request.  */
	export interface DeleteJobRequest {
	}


	/**  Request structure for the delete webhook request.  */
	export interface DeleteWebhookRequest {
	}

	export enum DomainStatus { PENDING_VERIFICATION = 0, IN_PROGRESS = 1, AVAILABLE = 2, PENDING_DEPLOYMENT = 3, FAILED = 4, CREATING = 5, REQUESTING_CERTIFICATE = 6, UPDATING = 7 }


	/**  Request structure for the generate access logs request.  */
	export interface GenerateAccessLogsRequest {
		startTime?: Date;
		endTime?: Date;
		domainName: string;
	}


	/**  Request structure for get App request.  */
	export interface GetAppRequest {
	}


	/**  Request structure for the get artifact request.  */
	export interface GetArtifactUrlRequest {
	}


	/**  Request structure for get backend environment request.  */
	export interface GetBackendEnvironmentRequest {
	}


	/**  Request structure for get branch request.  */
	export interface GetBranchRequest {
	}


	/**  Request structure for the get Domain Association request.  */
	export interface GetDomainAssociationRequest {
	}


	/**  Request structure for get job request.  */
	export interface GetJobRequest {
	}


	/**  Request structure for the get webhook request.  */
	export interface GetWebhookRequest {
	}

	export enum JobStatus { PENDING = 0, PROVISIONING = 1, RUNNING = 2, FAILED = 3, SUCCEED = 4, CANCELLING = 5, CANCELLED = 6 }

	export enum JobType { RELEASE = 0, RETRY = 1, MANUAL = 2, WEB_HOOK = 3 }


	/**  Request structure for an Amplify App list request.  */
	export interface ListAppsRequest {
	}


	/**  Request structure for the list artifacts request.  */
	export interface ListArtifactsRequest {
	}


	/**  Request structure for list backend environments request.  */
	export interface ListBackendEnvironmentsRequest {
		environmentName?: string;
	}


	/**  Request structure for list branches request.  */
	export interface ListBranchesRequest {
	}


	/**  Request structure for the list Domain Associations request.  */
	export interface ListDomainAssociationsRequest {
	}


	/**  Request structure for list job request.  */
	export interface ListJobsRequest {
	}


	/**  Request structure used to list tags for resource.  */
	export interface ListTagsForResourceRequest {
	}


	/**  Request structure for the list webhooks request.  */
	export interface ListWebhooksRequest {
	}


	/**  Request structure for start a deployment.  */
	export interface StartDeploymentRequest {
		jobId?: string;
		sourceUrl?: string;
	}


	/**  Request structure for Start job request.  */
	export interface StartJobRequest {
		jobId?: string;
		jobType: JobSummaryJobType;
		jobReason?: string;
		commitId?: string;
		commitMessage?: string;
		commitTime?: Date;
	}


	/**  Request structure for stop job request.  */
	export interface StopJobRequest {
	}


	/**  Request structure used to tag resource.  */
	export interface TagResourceRequest {
		tags: TagMap;
	}


	/**  Request structure used to untag resource.  */
	export interface UntagResourceRequest {
	}


	/**  Request structure for update App request.  */
	export interface UpdateAppRequest {
		name?: string;
		description?: string;
		platform?: AppPlatform;
		iamServiceRoleArn?: string;
		environmentVariables?: EnvironmentVariables;
		enableBranchAutoBuild?: boolean;
		enableBasicAuth?: boolean;
		basicAuthCredentials?: string;
		customRules?: Array<CustomRule>;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enableAutoBranchCreation?: boolean;
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: AutoBranchCreationConfig;
		repository?: string;
		oauthToken?: string;
		accessToken?: string;
	}


	/**  Request structure for update branch request.  */
	export interface UpdateBranchRequest {
		description?: string;
		framework?: string;
		stage?: AutoBranchCreationConfigStage;
		enableNotification?: boolean;
		enableAutoBuild?: boolean;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/** The content TTL for the website in seconds. */
		ttl?: string;
		displayName?: string;
		enablePullRequestPreview?: boolean;
		pullRequestEnvironmentName?: string;
		backendEnvironmentArn?: string;
	}


	/**  Request structure for update Domain Association request.  */
	export interface UpdateDomainAssociationRequest {
		enableAutoSubDomain?: boolean;
		subDomainSettings: Array<SubDomainSetting>;
	}


	/**  Request structure for update webhook request.  */
	export interface UpdateWebhookRequest {
		branchName?: string;
		description?: string;
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
		ListApps(nextToken: string, maxResults: number): Observable<ListAppsResult> {
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
		ListBackendEnvironments(appId: string, nextToken: string, maxResults: number): Observable<ListBackendEnvironmentsResult> {
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
		ListBranches(appId: string, nextToken: string, maxResults: number): Observable<ListBranchesResult> {
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
		ListDomainAssociations(appId: string, nextToken: string, maxResults: number): Observable<ListDomainAssociationsResult> {
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
		ListWebhooks(appId: string, nextToken: string, maxResults: number): Observable<ListWebhooksResult> {
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
		ListArtifacts(appId: string, branchName: string, jobId: string, nextToken: string, maxResults: number): Observable<ListArtifactsResult> {
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
		ListJobs(appId: string, branchName: string, nextToken: string, maxResults: number): Observable<ListJobsResult> {
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
		description?: string;

		/**
		 * Repository for an Amplify App
		 * Max length: 1000
		 */
		repository?: string;

		/** Platform / framework for an Amplify App */
		platform?: AppPlatform;

		/**
		 * AWS IAM service role for an Amplify App
		 * Max length: 1000
		 * Min length: 1
		 */
		iamServiceRoleArn?: string;

		/**
		 * OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored.
		 * Max length: 100
		 */
		oauthToken?: string;

		/**
		 * Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored.
		 * Max length: 255
		 * Min length: 1
		 */
		accessToken?: string;

		/** Environment variables map for an Amplify App. */
		environmentVariables?: {[id: string]: string };

		/** Enable the auto building of branches for an Amplify App. */
		enableBranchAutoBuild?: boolean;

		/** Enable Basic Authorization for an Amplify App, this will apply to all branches part of this App. */
		enableBasicAuth?: boolean;

		/**
		 * Credentials for Basic Authorization for an Amplify App.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string;

		/** Custom rewrite / redirect rules for an Amplify App. */
		customRules?: Array<CustomRule>;

		/** Tag for an Amplify App */
		tags?: {[id: string]: string };

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/** Enables automated branch creation for the Amplify App. */
		enableAutoBranchCreation?: boolean;

		/** Automated branch creation glob patterns for the Amplify App. */
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: CreateAppPostBodyAutoBranchCreationConfig;
	}

	export interface CreateAppPostBodyAutoBranchCreationConfig {
		stage?: AutoBranchCreationConfigStage;
		framework?: string;
		enableAutoBuild?: boolean;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enablePullRequestPreview?: boolean;
		pullRequestEnvironmentName?: string;
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
		stackName?: string;

		/**
		 * Name of deployment artifacts.
		 * Max length: 1000
		 * Min length: 1
		 */
		deploymentArtifacts?: string;
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
		description?: string;

		/** Stage for the branch. */
		stage?: AutoBranchCreationConfigStage;

		/**
		 * Framework for the branch.
		 * Max length: 255
		 */
		framework?: string;

		/** Enables notifications for the branch. */
		enableNotification?: boolean;

		/** Enables auto building for the branch. */
		enableAutoBuild?: boolean;

		/** Environment Variables for the branch. */
		environmentVariables?: {[id: string]: string };

		/**
		 * Basic Authorization credentials for the branch.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string;

		/** Enables Basic Auth for the branch. */
		enableBasicAuth?: boolean;

		/** Tag for the branch. */
		tags?: {[id: string]: string };

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/** The content TTL for the website in seconds. */
		ttl?: string;

		/**
		 * Display name for a branch, will use as the default domain prefix.
		 * Max length: 255
		 */
		displayName?: string;

		/** Enables Pull Request Preview for this branch. */
		enablePullRequestPreview?: boolean;

		/**
		 * The Amplify Environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName?: string;

		/**
		 * ARN for a Backend Environment, part of an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		backendEnvironmentArn?: string;
	}

	export interface CreateDeploymentPostBody {

		/** Optional file map that contains file name as the key and file content md5 hash as the value. If this argument is provided, the service will generate different upload url per file. Otherwise, the service will only generate a single upload url for the zipped files. */
		fileMap?: {[id: string]: string };
	}

	export interface CreateDomainAssociationPostBody {

		/**
		 * Domain name for the Domain Association.
		 * Required
		 * Max length: 255
		 */
		domainName: string;

		/** Enables automated creation of Subdomains for branches. (Currently not supported) */
		enableAutoSubDomain?: boolean;

		/**
		 * Setting structure for the Subdomain.
		 * Required
		 * Maximum items: 255
		 */
		subDomainSettings: Array<SubDomainSetting>;
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
		description?: string;
	}

	export interface UpdateAppPostBody {

		/**
		 * Name for an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string;

		/**
		 * Description for an Amplify App.
		 * Max length: 1000
		 */
		description?: string;

		/** Platform for an Amplify App. */
		platform?: AppPlatform;

		/**
		 * IAM service role for an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		iamServiceRoleArn?: string;

		/** Environment Variables for an Amplify App. */
		environmentVariables?: {[id: string]: string };

		/** Enables branch auto-building for an Amplify App. */
		enableBranchAutoBuild?: boolean;

		/** Enables Basic Authorization for an Amplify App. */
		enableBasicAuth?: boolean;

		/**
		 * Basic Authorization credentials for an Amplify App.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string;

		/** Custom redirect / rewrite rules for an Amplify App. */
		customRules?: Array<CustomRule>;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/** Enables automated branch creation for the Amplify App. */
		enableAutoBranchCreation?: boolean;

		/** Automated branch creation glob patterns for the Amplify App. */
		autoBranchCreationPatterns?: Array<string>;

		/** Structure with auto branch creation config. */
		autoBranchCreationConfig?: UpdateAppPostBodyAutoBranchCreationConfig;

		/**
		 * Repository for an Amplify App
		 * Max length: 1000
		 */
		repository?: string;

		/**
		 * OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored.
		 * Max length: 100
		 */
		oauthToken?: string;

		/**
		 * Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored.
		 * Max length: 255
		 * Min length: 1
		 */
		accessToken?: string;
	}

	export interface UpdateAppPostBodyAutoBranchCreationConfig {
		stage?: AutoBranchCreationConfigStage;
		framework?: string;
		enableAutoBuild?: boolean;
		environmentVariables?: EnvironmentVariables;
		basicAuthCredentials?: string;
		enableBasicAuth?: boolean;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;
		enablePullRequestPreview?: boolean;
		pullRequestEnvironmentName?: string;
	}

	export interface UpdateBranchPostBody {

		/**
		 * Description for the branch.
		 * Max length: 1000
		 */
		description?: string;

		/**
		 * Framework for the branch.
		 * Max length: 255
		 */
		framework?: string;

		/** Stage for the branch. */
		stage?: AutoBranchCreationConfigStage;

		/** Enables notifications for the branch. */
		enableNotification?: boolean;

		/** Enables auto building for the branch. */
		enableAutoBuild?: boolean;

		/** Environment Variables for the branch. */
		environmentVariables?: {[id: string]: string };

		/**
		 * Basic Authorization credentials for the branch.
		 * Max length: 2000
		 */
		basicAuthCredentials?: string;

		/** Enables Basic Auth for the branch. */
		enableBasicAuth?: boolean;

		/**
		 * BuildSpec file for Amplify app build.
		 * Max length: 25000
		 * Min length: 1
		 */
		buildSpec?: string;

		/** The content TTL for the website in seconds. */
		ttl?: string;

		/**
		 * Display name for a branch, will use as the default domain prefix.
		 * Max length: 255
		 */
		displayName?: string;

		/** Enables Pull Request Preview for this branch. */
		enablePullRequestPreview?: boolean;

		/**
		 * The Amplify Environment name for the pull request.
		 * Max length: 20
		 */
		pullRequestEnvironmentName?: string;

		/**
		 * ARN for a Backend Environment, part of an Amplify App.
		 * Max length: 1000
		 * Min length: 1
		 */
		backendEnvironmentArn?: string;
	}

	export interface UpdateDomainAssociationPostBody {

		/** Enables automated creation of Subdomains for branches. (Currently not supported) */
		enableAutoSubDomain?: boolean;

		/**
		 * Setting structure for the Subdomain.
		 * Required
		 * Maximum items: 255
		 */
		subDomainSettings: Array<SubDomainSetting>;
	}

	export interface UpdateWebhookPostBody {

		/**
		 * Name for a branch, part of an Amplify App.
		 * Max length: 255
		 * Min length: 1
		 */
		branchName?: string;

		/**
		 * Description for a webhook.
		 * Max length: 1000
		 */
		description?: string;
	}

	export interface GenerateAccessLogsPostBody {

		/** The time at which the logs should start, inclusive. */
		startTime?: Date;

		/** The time at which the logs should end, inclusive. */
		endTime?: Date;

		/**
		 * Name of the domain.
		 * Required
		 * Max length: 255
		 */
		domainName: string;
	}

	export interface StartJobPostBody {

		/**
		 * Unique Id for an existing job. Required for "RETRY" JobType.
		 * Max length: 255
		 */
		jobId?: string;

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
		jobReason?: string;

		/**
		 * Commit Id from 3rd party repository provider for the Job.
		 * Max length: 255
		 */
		commitId?: string;

		/**
		 * Commit message from 3rd party repository provider for the Job.
		 * Max length: 10000
		 */
		commitMessage?: string;

		/** Commit date / time for the Job. */
		commitTime?: Date;
	}

	export interface TagResourcePostBody {

		/**
		 * Tags used to tag resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface StartDeploymentPostBody {

		/**
		 * The job id for this deployment, generated by create deployment request.
		 * Max length: 255
		 */
		jobId?: string;

		/**
		 * The sourceUrl for this deployment, used when calling start deployment without create deployment. SourceUrl can be any HTTP GET url that is public accessible and downloads a single zip.
		 * Max length: 1000
		 */
		sourceUrl?: string;
	}

}

