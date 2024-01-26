import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**  Result structure used in response to a request to create a project.  */
	export interface CreateProjectResult {
		details?: ProjectDetails;
	}

	/**  Result structure used in response to a request to create a project.  */
	export interface CreateProjectResultFormProperties {
	}
	export function CreateCreateProjectResultFormGroup() {
		return new FormGroup<CreateProjectResultFormProperties>({
		});

	}


	/**  Detailed information about an AWS Mobile Hub project.  */
	export interface ProjectDetails {

		/** Name of the project. */
		name?: string | null;

		/** Unique project identifier. */
		projectId?: string | null;

		/** Default region to use for AWS resource creation in the AWS Mobile Hub project. */
		region?: string | null;

		/** Synchronization state for a project. */
		state?: ProjectDetailsState | null;
		createdDate?: Date;
		lastUpdatedDate?: Date;
		consoleUrl?: string;

		/** List of AWS resources associated with a project. */
		resources?: Array<Resource>;
	}

	/**  Detailed information about an AWS Mobile Hub project.  */
	export interface ProjectDetailsFormProperties {

		/** Name of the project. */
		name: FormControl<string | null | undefined>,

		/** Unique project identifier. */
		projectId: FormControl<string | null | undefined>,

		/** Default region to use for AWS resource creation in the AWS Mobile Hub project. */
		region: FormControl<string | null | undefined>,

		/** Synchronization state for a project. */
		state: FormControl<ProjectDetailsState | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		consoleUrl: FormControl<string | null | undefined>,
	}
	export function CreateProjectDetailsFormGroup() {
		return new FormGroup<ProjectDetailsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ProjectDetailsState | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			consoleUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectDetailsState { NORMAL = 0, SYNCING = 1, IMPORTING = 2 }


	/**  Information about an instance of an AWS resource associated with a project.  */
	export interface Resource {

		/** Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket). */
		type?: string | null;

		/** Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket). */
		name?: string | null;

		/** AWS resource name which uniquely identifies the resource in AWS systems. */
		arn?: string | null;

		/** Identifies which feature in AWS Mobile Hub is associated with this AWS resource. */
		feature?: string | null;

		/** Key-value attribute pairs. */
		attributes?: Attributes;
	}

	/**  Information about an instance of an AWS resource associated with a project.  */
	export interface ResourceFormProperties {

		/** Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket). */
		type: FormControl<string | null | undefined>,

		/** Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket). */
		name: FormControl<string | null | undefined>,

		/** AWS resource name which uniquely identifies the resource in AWS systems. */
		arn: FormControl<string | null | undefined>,

		/** Identifies which feature in AWS Mobile Hub is associated with this AWS resource. */
		feature: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			feature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Key-value attribute pairs.  */
	export interface Attributes {
	}

	/**  Key-value attribute pairs.  */
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}


	/**  The service has encountered an unexpected error condition which prevents it from servicing the request.  */
	export interface InternalFailureException {

		/** The Exception Error Message. */
		message?: string | null;
	}

	/**  The service has encountered an unexpected error condition which prevents it from servicing the request.  */
	export interface InternalFailureExceptionFormProperties {

		/** The Exception Error Message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The service is temporarily unavailable. The request should be retried after some time delay.  */
	export interface ServiceUnavailableException {

		/** The Exception Error Message. */
		message?: string | null;
	}

	/**  The service is temporarily unavailable. The request should be retried after some time delay.  */
	export interface ServiceUnavailableExceptionFormProperties {

		/** The Exception Error Message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Credentials of the caller are insufficient to authorize the request.  */
	export interface UnauthorizedException {

		/** The Exception Error Message. */
		message?: string | null;
	}

	/**  Credentials of the caller are insufficient to authorize the request.  */
	export interface UnauthorizedExceptionFormProperties {

		/** The Exception Error Message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay.  */
	export interface TooManyRequestsException {

		/** The Exception Error Message. */
		message?: string | null;
	}

	/**  Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay.  */
	export interface TooManyRequestsExceptionFormProperties {

		/** The Exception Error Message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed.  */
	export interface BadRequestException {

		/** The Exception Error Message. */
		message?: string | null;
	}

	/**  The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed.  */
	export interface BadRequestExceptionFormProperties {

		/** The Exception Error Message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  No entity can be found with the specified identifier.  */
	export interface NotFoundException {

		/** The Exception Error Message. */
		message?: string | null;
	}

	/**  No entity can be found with the specified identifier.  */
	export interface NotFoundExceptionFormProperties {

		/** The Exception Error Message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request.  */
	export interface LimitExceededException {

		/** The Exception Error Message. */
		message?: string | null;
	}

	/**  There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request.  */
	export interface LimitExceededExceptionFormProperties {

		/** The Exception Error Message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure used in response to request to delete a project.  */
	export interface DeleteProjectResult {
		deletedResources?: Array<Resource>;
		orphanedResources?: Array<Resource>;
	}

	/**  Result structure used in response to request to delete a project.  */
	export interface DeleteProjectResultFormProperties {
	}
	export function CreateDeleteProjectResultFormGroup() {
		return new FormGroup<DeleteProjectResultFormProperties>({
		});

	}


	/**  Result structure contains the details of the bundle.  */
	export interface DescribeBundleResult {
		details?: BundleDetails;
	}

	/**  Result structure contains the details of the bundle.  */
	export interface DescribeBundleResultFormProperties {
	}
	export function CreateDescribeBundleResultFormGroup() {
		return new FormGroup<DescribeBundleResultFormProperties>({
		});

	}


	/**  The details of the bundle.  */
	export interface BundleDetails {

		/** Unique bundle identifier. */
		bundleId?: string | null;

		/** Title of the download bundle. */
		title?: string | null;

		/** Version of the download bundle. */
		version?: string | null;

		/** Description of the download bundle. */
		description?: string | null;

		/** Icon for the download bundle. */
		iconUrl?: string | null;

		/** Developer desktop or mobile app or website platforms. */
		availablePlatforms?: Array<Platform>;
	}

	/**  The details of the bundle.  */
	export interface BundleDetailsFormProperties {

		/** Unique bundle identifier. */
		bundleId: FormControl<string | null | undefined>,

		/** Title of the download bundle. */
		title: FormControl<string | null | undefined>,

		/** Version of the download bundle. */
		version: FormControl<string | null | undefined>,

		/** Description of the download bundle. */
		description: FormControl<string | null | undefined>,

		/** Icon for the download bundle. */
		iconUrl: FormControl<string | null | undefined>,
	}
	export function CreateBundleDetailsFormGroup() {
		return new FormGroup<BundleDetailsFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Developer desktop or target mobile app or website platform.  */
	export enum Platform { OSX = 0, WINDOWS = 1, LINUX = 2, OBJC = 3, SWIFT = 4, ANDROID = 5, JAVASCRIPT = 6 }


	/**  Result structure used for requests of project details.  */
	export interface DescribeProjectResult {

		/** Detailed information about an AWS Mobile Hub project. */
		details?: ProjectDetails;
	}

	/**  Result structure used for requests of project details.  */
	export interface DescribeProjectResultFormProperties {
	}
	export function CreateDescribeProjectResultFormGroup() {
		return new FormGroup<DescribeProjectResultFormProperties>({
		});

	}


	/**  Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources.  */
	export interface ExportBundleResult {
		downloadUrl?: string;
	}

	/**  Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources.  */
	export interface ExportBundleResultFormProperties {
		downloadUrl: FormControl<string | null | undefined>,
	}
	export function CreateExportBundleResultFormGroup() {
		return new FormGroup<ExportBundleResultFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure used for requests to export project configuration details.  */
	export interface ExportProjectResult {
		downloadUrl?: string;
		shareUrl?: string;
		snapshotId?: string;
	}

	/**  Result structure used for requests to export project configuration details.  */
	export interface ExportProjectResultFormProperties {
		downloadUrl: FormControl<string | null | undefined>,
		shareUrl: FormControl<string | null | undefined>,
		snapshotId: FormControl<string | null | undefined>,
	}
	export function CreateExportProjectResultFormGroup() {
		return new FormGroup<ExportProjectResultFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			shareUrl: new FormControl<string | null | undefined>(undefined),
			snapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure contains a list of all available bundles with details.  */
	export interface ListBundlesResult {
		bundleList?: Array<BundleDetails>;
		nextToken?: string;
	}

	/**  Result structure contains a list of all available bundles with details.  */
	export interface ListBundlesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBundlesResultFormGroup() {
		return new FormGroup<ListBundlesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure used for requests to list projects in AWS Mobile Hub.  */
	export interface ListProjectsResult {

		/** List of projects. */
		projects?: Array<ProjectSummary>;

		/** Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. */
		nextToken?: string | null;
	}

	/**  Result structure used for requests to list projects in AWS Mobile Hub.  */
	export interface ListProjectsResultFormProperties {

		/** Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResultFormGroup() {
		return new FormGroup<ListProjectsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Summary information about an AWS Mobile Hub project.  */
	export interface ProjectSummary {
		name?: string;
		projectId?: string;
	}

	/**  Summary information about an AWS Mobile Hub project.  */
	export interface ProjectSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateProjectSummaryFormGroup() {
		return new FormGroup<ProjectSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Result structure used for requests to updated project configuration.  */
	export interface UpdateProjectResult {
		details?: ProjectDetails;
	}

	/**  Result structure used for requests to updated project configuration.  */
	export interface UpdateProjectResultFormProperties {
	}
	export function CreateUpdateProjectResultFormGroup() {
		return new FormGroup<UpdateProjectResultFormProperties>({
		});

	}


	/**  Account Action is required in order to continue the request.  */
	export interface AccountActionRequiredException {

		/** The Exception Error Message. */
		message?: string | null;
	}

	/**  Account Action is required in order to continue the request.  */
	export interface AccountActionRequiredExceptionFormProperties {

		/** The Exception Error Message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAccountActionRequiredExceptionFormGroup() {
		return new FormGroup<AccountActionRequiredExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure used to request a project be created.  */
	export interface CreateProjectRequest {
		contents?: string;
	}

	/**  Request structure used to request a project be created.  */
	export interface CreateProjectRequestFormProperties {
		contents: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Request structure used to request a project be deleted.  */
	export interface DeleteProjectRequest {
	}

	/**  Request structure used to request a project be deleted.  */
	export interface DeleteProjectRequestFormProperties {
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
		});

	}


	/**  Request structure to request the details of a specific bundle.  */
	export interface DescribeBundleRequest {
	}

	/**  Request structure to request the details of a specific bundle.  */
	export interface DescribeBundleRequestFormProperties {
	}
	export function CreateDescribeBundleRequestFormGroup() {
		return new FormGroup<DescribeBundleRequestFormProperties>({
		});

	}


	/**  Request structure used to request details about a project.  */
	export interface DescribeProjectRequest {
	}

	/**  Request structure used to request details about a project.  */
	export interface DescribeProjectRequestFormProperties {
	}
	export function CreateDescribeProjectRequestFormGroup() {
		return new FormGroup<DescribeProjectRequestFormProperties>({
		});

	}


	/**  Request structure used to request generation of custom SDK and tool packages required to integrate mobile web or app clients with backed AWS resources.  */
	export interface ExportBundleRequest {
	}

	/**  Request structure used to request generation of custom SDK and tool packages required to integrate mobile web or app clients with backed AWS resources.  */
	export interface ExportBundleRequestFormProperties {
	}
	export function CreateExportBundleRequestFormGroup() {
		return new FormGroup<ExportBundleRequestFormProperties>({
		});

	}


	/**  Request structure used in requests to export project configuration details.  */
	export interface ExportProjectRequest {
	}

	/**  Request structure used in requests to export project configuration details.  */
	export interface ExportProjectRequestFormProperties {
	}
	export function CreateExportProjectRequestFormGroup() {
		return new FormGroup<ExportProjectRequestFormProperties>({
		});

	}


	/**  Request structure to request all available bundles.  */
	export interface ListBundlesRequest {
	}

	/**  Request structure to request all available bundles.  */
	export interface ListBundlesRequestFormProperties {
	}
	export function CreateListBundlesRequestFormGroup() {
		return new FormGroup<ListBundlesRequestFormProperties>({
		});

	}


	/**  Request structure used to request projects list in AWS Mobile Hub.  */
	export interface ListProjectsRequest {
	}

	/**  Request structure used to request projects list in AWS Mobile Hub.  */
	export interface ListProjectsRequestFormProperties {
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
		});

	}


	/**  Synchronization state for a project.  */
	export enum ProjectState { NORMAL = 0, SYNCING = 1, IMPORTING = 2 }


	/**  Request structure used for requests to update project configuration.  */
	export interface UpdateProjectRequest {
		contents?: string;
	}

	/**  Request structure used for requests to update project configuration.  */
	export interface UpdateProjectRequestFormProperties {
		contents: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an AWS Mobile Hub project.
		 * Post projects
		 * @param {string} name  Name of the project. 
		 * @param {string} region  Default region where project resources should be created. 
		 * @param {string} snapshotId  Unique identifier for an exported snapshot of project configuration. This snapshot identifier is included in the share URL when a project is exported. 
		 * @return {CreateProjectResult} Success
		 */
		CreateProject(name: string | null | undefined, region: string | null | undefined, snapshotId: string | null | undefined, requestBody: CreateProjectPostBody): Observable<CreateProjectResult> {
			return this.http.post<CreateProjectResult>(this.baseUri + 'projects?name=' + (name == null ? '' : encodeURIComponent(name)) + '&region=' + (region == null ? '' : encodeURIComponent(region)) + '&snapshotId=' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists projects in AWS Mobile Hub.
		 * Get projects
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing projects from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more projects. 
		 * @return {ListProjectsResult} Success
		 */
		ListProjects(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProjectsResult> {
			return this.http.get<ListProjectsResult>(this.baseUri + 'projects?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Delets a project in AWS Mobile Hub.
		 * Delete projects/{projectId}
		 * @param {string} projectId  Unique project identifier. 
		 * @return {DeleteProjectResult} Success
		 */
		DeleteProject(projectId: string): Observable<DeleteProjectResult> {
			return this.http.delete<DeleteProjectResult>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Get the bundle details for the requested bundle id.
		 * Get bundles/{bundleId}
		 * @param {string} bundleId  Unique bundle identifier. 
		 * @return {DescribeBundleResult} Success
		 */
		DescribeBundle(bundleId: string): Observable<DescribeBundleResult> {
			return this.http.get<DescribeBundleResult>(this.baseUri + 'bundles/' + (bundleId == null ? '' : encodeURIComponent(bundleId)), {});
		}

		/**
		 * Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources.
		 * Post bundles/{bundleId}
		 * @param {string} bundleId  Unique bundle identifier. 
		 * @param {string} projectId  Unique project identifier. 
		 * @param {Platform} platform  Developer desktop or target application platform. 
		 * @return {ExportBundleResult} Success
		 */
		ExportBundle(bundleId: string, projectId: string | null | undefined, platform: Platform | null | undefined): Observable<ExportBundleResult> {
			return this.http.post<ExportBundleResult>(this.baseUri + 'bundles/' + (bundleId == null ? '' : encodeURIComponent(bundleId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&platform=' + platform, null, {});
		}

		/**
		 * Gets details about a project in AWS Mobile Hub.
		 * Get project#projectId
		 * @param {string} projectId  Unique project identifier. 
		 * @param {boolean} syncFromResources  If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project. 
		 * @return {DescribeProjectResult} Success
		 */
		DescribeProject(projectId: string, syncFromResources: boolean | null | undefined): Observable<DescribeProjectResult> {
			return this.http.get<DescribeProjectResult>(this.baseUri + 'project#projectId?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&syncFromResources=' + syncFromResources, {});
		}

		/**
		 * Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account.
		 * Post exports/{projectId}
		 * @param {string} projectId  Unique project identifier. 
		 * @return {ExportProjectResult} Success
		 */
		ExportProject(projectId: string): Observable<ExportProjectResult> {
			return this.http.post<ExportProjectResult>(this.baseUri + 'exports/' + (projectId == null ? '' : encodeURIComponent(projectId)), null, {});
		}

		/**
		 * List all available bundles.
		 * Get bundles
		 * @param {number} maxResults  Maximum number of records to list in a single response. 
		 * @param {string} nextToken  Pagination token. Set to null to start listing bundles from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more bundles. 
		 * @return {ListBundlesResult} Success
		 */
		ListBundles(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListBundlesResult> {
			return this.http.get<ListBundlesResult>(this.baseUri + 'bundles?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Update an existing project.
		 * Post update#projectId
		 * @param {string} projectId  Unique project identifier. 
		 * @return {UpdateProjectResult} Success
		 */
		UpdateProject(projectId: string, requestBody: UpdateProjectPostBody): Observable<UpdateProjectResult> {
			return this.http.post<UpdateProjectResult>(this.baseUri + 'update#projectId?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateProjectPostBody {

		/** Binary file data. */
		contents?: string | null;
	}
	export interface CreateProjectPostBodyFormProperties {

		/** Binary file data. */
		contents: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectPostBodyFormGroup() {
		return new FormGroup<CreateProjectPostBodyFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectPostBody {

		/** Binary file data. */
		contents?: string | null;
	}
	export interface UpdateProjectPostBodyFormProperties {

		/** Binary file data. */
		contents: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectPostBodyFormGroup() {
		return new FormGroup<UpdateProjectPostBodyFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}

}

