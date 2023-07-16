import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateEnvironmentEC2Result {
		environmentId?: string;
	}

	export interface CreateEnvironmentEC2Request {
		name: string;
		description?: string;
		clientRequestToken?: string;
		instanceType: string;
		subnetId?: string;
		automaticStopTimeMinutes?: number;
		ownerArn?: string;
		tags?: Array<Tag>;
	}


	/** Metadata that is associated with AWS resources. In particular, a name-value pair that can be associated with an AWS Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by AWS services. A system tag is prefixed with "aws:" and cannot be modified by the user. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface BadRequestException {
	}

	export interface ConflictException {
	}

	export interface NotFoundException {
	}

	export interface ForbiddenException {
	}

	export interface TooManyRequestsException {
	}

	export interface LimitExceededException {
	}

	export interface InternalServerErrorException {
	}

	export interface CreateEnvironmentMembershipResult {

		/** Information about an environment member for an AWS Cloud9 development environment. */
		membership?: EnvironmentMember;
	}


	/** Information about an environment member for an AWS Cloud9 development environment. */
	export interface EnvironmentMember {
		permissions?: EnvironmentMemberPermissions;
		userId?: string;
		userArn?: string;
		environmentId?: string;
		lastAccess?: Date;
	}

	export enum EnvironmentMemberPermissions { owner = 0, read_write = 1, read_only = 2 }

	export interface CreateEnvironmentMembershipRequest {
		environmentId: string;
		userArn: string;
		permissions: CreateEnvironmentMembershipRequestPermissions;
	}

	export enum CreateEnvironmentMembershipRequestPermissions { read_write = 0, read_only = 1 }

	export interface DeleteEnvironmentResult {
	}

	export interface DeleteEnvironmentRequest {
		environmentId: string;
	}

	export interface DeleteEnvironmentMembershipResult {
	}

	export interface DeleteEnvironmentMembershipRequest {
		environmentId: string;
		userArn: string;
	}

	export interface DescribeEnvironmentMembershipsResult {
		memberships?: Array<EnvironmentMember>;
		nextToken?: string;
	}

	export interface DescribeEnvironmentMembershipsRequest {
		userArn?: string;
		environmentId?: string;
		permissions?: Array<Permissions>;
		nextToken?: string;
		maxResults?: number;
	}

	export enum Permissions { owner = 0, read_write = 1, read_only = 2 }

	export interface DescribeEnvironmentStatusResult {
		status?: DescribeEnvironmentStatusResultStatus;
		message?: string;
	}

	export enum DescribeEnvironmentStatusResultStatus { error = 0, creating = 1, connecting = 2, ready = 3, stopping = 4, stopped = 5, deleting = 6 }

	export interface DescribeEnvironmentStatusRequest {
		environmentId: string;
	}

	export interface DescribeEnvironmentsResult {
		environments?: Array<Environment>;
	}


	/** Information about an AWS Cloud9 development environment. */
	export interface Environment {
		id?: string;
		name?: string;
		description?: string;
		type?: EnvironmentType;
		arn?: string;
		ownerArn?: string;

		/** Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment. */
		lifecycle?: EnvironmentLifecycle;
	}

	export enum EnvironmentType { ssh = 0, ec2 = 1 }


	/** Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment. */
	export interface EnvironmentLifecycle {
		status?: EnvironmentLifecycleStatus;
		reason?: string;
		failureResource?: string;
	}

	export enum EnvironmentLifecycleStatus { CREATING = 0, CREATED = 1, CREATE_FAILED = 2, DELETING = 3, DELETE_FAILED = 4 }

	export interface DescribeEnvironmentsRequest {
		environmentIds: Array<string>;
	}

	export interface ListEnvironmentsResult {
		nextToken?: string;
		environmentIds?: Array<string>;
	}

	export interface ListEnvironmentsRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<string>;
	}

	export interface UpdateEnvironmentResult {
	}

	export interface UpdateEnvironmentRequest {
		environmentId: string;
		name?: string;
		description?: string;
	}

	export interface UpdateEnvironmentMembershipResult {

		/** Information about an environment member for an AWS Cloud9 development environment. */
		membership?: EnvironmentMember;
	}

	export interface UpdateEnvironmentMembershipRequest {
		environmentId: string;
		userArn: string;
		permissions: UpdateEnvironmentMembershipRequestPermissions;
	}

	export enum UpdateEnvironmentMembershipRequestPermissions { read_write = 0, read_only = 1 }

	export enum MemberPermissions { read_write = 0, read_only = 1 }

	export enum EnvironmentStatus { error = 0, creating = 1, connecting = 2, ready = 3, stopping = 4, stopped = 5, deleting = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2
		 * @return {CreateEnvironmentEC2Result} Success
		 */
		CreateEnvironmentEC2(requestBody: CreateEnvironmentEC2Request): Observable<CreateEnvironmentEC2Result> {
			return this.http.post<CreateEnvironmentEC2Result>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an environment member to an AWS Cloud9 development environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership
		 * @return {CreateEnvironmentMembershipResult} Success
		 */
		CreateEnvironmentMembership(requestBody: CreateEnvironmentMembershipRequest): Observable<CreateEnvironmentMembershipResult> {
			return this.http.post<CreateEnvironmentMembershipResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an AWS Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment
		 * @return {DeleteEnvironmentResult} Success
		 */
		DeleteEnvironment(requestBody: DeleteEnvironmentRequest): Observable<DeleteEnvironmentResult> {
			return this.http.post<DeleteEnvironmentResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an environment member from an AWS Cloud9 development environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership
		 * @return {DeleteEnvironmentMembershipResult} Success
		 */
		DeleteEnvironmentMembership(requestBody: DeleteEnvironmentMembershipRequest): Observable<DeleteEnvironmentMembershipResult> {
			return this.http.post<DeleteEnvironmentMembershipResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about environment members for an AWS Cloud9 development environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeEnvironmentMembershipsResult} Success
		 */
		DescribeEnvironmentMemberships(maxResults: string, nextToken: string, requestBody: DescribeEnvironmentMembershipsRequest): Observable<DescribeEnvironmentMembershipsResult> {
			return this.http.post<DescribeEnvironmentMembershipsResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets status information for an AWS Cloud9 development environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus
		 * @return {DescribeEnvironmentStatusResult} Success
		 */
		DescribeEnvironmentStatus(requestBody: DescribeEnvironmentStatusRequest): Observable<DescribeEnvironmentStatusResult> {
			return this.http.post<DescribeEnvironmentStatusResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about AWS Cloud9 development environments.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments
		 * @return {DescribeEnvironmentsResult} Success
		 */
		DescribeEnvironments(requestBody: DescribeEnvironmentsRequest): Observable<DescribeEnvironmentsResult> {
			return this.http.post<DescribeEnvironmentsResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of AWS Cloud9 development environment identifiers.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEnvironmentsResult} Success
		 */
		ListEnvironments(maxResults: string, nextToken: string, requestBody: ListEnvironmentsRequest): Observable<ListEnvironmentsResult> {
			return this.http.post<ListEnvironmentsResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the tags associated with an AWS Cloud9 development environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds tags to an AWS Cloud9 development environment.</p> <important> <p>Tags that you add to an AWS Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from an AWS Cloud9 development environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the settings of an existing AWS Cloud9 development environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment
		 * @return {UpdateEnvironmentResult} Success
		 */
		UpdateEnvironment(requestBody: UpdateEnvironmentRequest): Observable<UpdateEnvironmentResult> {
			return this.http.post<UpdateEnvironmentResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the settings of an existing environment member for an AWS Cloud9 development environment.
		 * Post #X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership
		 * @return {UpdateEnvironmentMembershipResult} Success
		 */
		UpdateEnvironmentMembership(requestBody: UpdateEnvironmentMembershipRequest): Observable<UpdateEnvironmentMembershipResult> {
			return this.http.post<UpdateEnvironmentMembershipResult>(this.baseUri + '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateEnvironmentEC2X_Amz_Target { AWSCloud9WorkspaceManagementService_CreateEnvironmentEC2 = 0 }

	export enum CreateEnvironmentMembershipX_Amz_Target { AWSCloud9WorkspaceManagementService_CreateEnvironmentMembership = 0 }

	export enum DeleteEnvironmentX_Amz_Target { AWSCloud9WorkspaceManagementService_DeleteEnvironment = 0 }

	export enum DeleteEnvironmentMembershipX_Amz_Target { AWSCloud9WorkspaceManagementService_DeleteEnvironmentMembership = 0 }

	export enum DescribeEnvironmentMembershipsX_Amz_Target { AWSCloud9WorkspaceManagementService_DescribeEnvironmentMemberships = 0 }

	export enum DescribeEnvironmentStatusX_Amz_Target { AWSCloud9WorkspaceManagementService_DescribeEnvironmentStatus = 0 }

	export enum DescribeEnvironmentsX_Amz_Target { AWSCloud9WorkspaceManagementService_DescribeEnvironments = 0 }

	export enum ListEnvironmentsX_Amz_Target { AWSCloud9WorkspaceManagementService_ListEnvironments = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSCloud9WorkspaceManagementService_ListTagsForResource = 0 }

	export enum TagResourceX_Amz_Target { AWSCloud9WorkspaceManagementService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSCloud9WorkspaceManagementService_UntagResource = 0 }

	export enum UpdateEnvironmentX_Amz_Target { AWSCloud9WorkspaceManagementService_UpdateEnvironment = 0 }

	export enum UpdateEnvironmentMembershipX_Amz_Target { AWSCloud9WorkspaceManagementService_UpdateEnvironmentMembership = 0 }

}

