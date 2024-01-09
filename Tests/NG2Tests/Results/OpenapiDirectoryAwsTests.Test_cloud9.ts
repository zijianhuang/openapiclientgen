import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateEnvironmentEC2Result {
		environmentId?: string | null;
	}
	export interface CreateEnvironmentEC2ResultFormProperties {
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentEC2ResultFormGroup() {
		return new FormGroup<CreateEnvironmentEC2ResultFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentEC2Request {

		/**
		 * Required
		 * Max length: 60
		 * Min length: 1
		 */
		name: string;

		/** Max length: 200 */
		description?: string | null;
		clientRequestToken?: string | null;

		/**
		 * Required
		 * Max length: 20
		 * Min length: 5
		 */
		instanceType: string;

		/**
		 * Max length: 30
		 * Min length: 5
		 */
		subnetId?: string | null;

		/** Maximum: 20160 */
		automaticStopTimeMinutes?: number | null;
		ownerArn?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateEnvironmentEC2RequestFormProperties {

		/**
		 * Required
		 * Max length: 60
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 200 */
		description: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 20
		 * Min length: 5
		 */
		instanceType: FormControl<string | null | undefined>,

		/**
		 * Max length: 30
		 * Min length: 5
		 */
		subnetId: FormControl<string | null | undefined>,

		/** Maximum: 20160 */
		automaticStopTimeMinutes: FormControl<number | null | undefined>,
		ownerArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentEC2RequestFormGroup() {
		return new FormGroup<CreateEnvironmentEC2RequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(60), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200)]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(20), Validators.minLength(5), Validators.pattern('^[a-z][1-9][.][a-z0-9]+$')]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30), Validators.minLength(5)]),
			automaticStopTimeMinutes: new FormControl<number | null | undefined>(undefined, [Validators.max(20160)]),
			ownerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata that is associated with AWS resources. In particular, a name-value pair that can be associated with an AWS Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by AWS services. A system tag is prefixed with "aws:" and cannot be modified by the user. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** Metadata that is associated with AWS resources. In particular, a name-value pair that can be associated with an AWS Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by AWS services. A system tag is prefixed with "aws:" and cannot be modified by the user. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
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

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface CreateEnvironmentMembershipResult {

		/** Information about an environment member for an AWS Cloud9 development environment. */
		membership?: EnvironmentMember;
	}
	export interface CreateEnvironmentMembershipResultFormProperties {
	}
	export function CreateCreateEnvironmentMembershipResultFormGroup() {
		return new FormGroup<CreateEnvironmentMembershipResultFormProperties>({
		});

	}


	/** Information about an environment member for an AWS Cloud9 development environment. */
	export interface EnvironmentMember {
		permissions?: EnvironmentMemberPermissions | null;
		userId?: string | null;
		userArn?: string | null;
		environmentId?: string | null;
		lastAccess?: Date | null;
	}

	/** Information about an environment member for an AWS Cloud9 development environment. */
	export interface EnvironmentMemberFormProperties {
		permissions: FormControl<EnvironmentMemberPermissions | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userArn: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		lastAccess: FormControl<Date | null | undefined>,
	}
	export function CreateEnvironmentMemberFormGroup() {
		return new FormGroup<EnvironmentMemberFormProperties>({
			permissions: new FormControl<EnvironmentMemberPermissions | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userArn: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			lastAccess: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EnvironmentMemberPermissions { owner = 0, read_write = 1, read_only = 2 }

	export interface CreateEnvironmentMembershipRequest {

		/** Required */
		environmentId: string;

		/** Required */
		userArn: string;

		/** Required */
		permissions: CreateEnvironmentMembershipRequestPermissions;
	}
	export interface CreateEnvironmentMembershipRequestFormProperties {

		/** Required */
		environmentId: FormControl<string | null | undefined>,

		/** Required */
		userArn: FormControl<string | null | undefined>,

		/** Required */
		permissions: FormControl<CreateEnvironmentMembershipRequestPermissions | null | undefined>,
	}
	export function CreateCreateEnvironmentMembershipRequestFormGroup() {
		return new FormGroup<CreateEnvironmentMembershipRequestFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissions: new FormControl<CreateEnvironmentMembershipRequestPermissions | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateEnvironmentMembershipRequestPermissions { read_write = 0, read_only = 1 }

	export interface DeleteEnvironmentResult {
	}
	export interface DeleteEnvironmentResultFormProperties {
	}
	export function CreateDeleteEnvironmentResultFormGroup() {
		return new FormGroup<DeleteEnvironmentResultFormProperties>({
		});

	}

	export interface DeleteEnvironmentRequest {

		/** Required */
		environmentId: string;
	}
	export interface DeleteEnvironmentRequestFormProperties {

		/** Required */
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteEnvironmentRequestFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEnvironmentMembershipResult {
	}
	export interface DeleteEnvironmentMembershipResultFormProperties {
	}
	export function CreateDeleteEnvironmentMembershipResultFormGroup() {
		return new FormGroup<DeleteEnvironmentMembershipResultFormProperties>({
		});

	}

	export interface DeleteEnvironmentMembershipRequest {

		/** Required */
		environmentId: string;

		/** Required */
		userArn: string;
	}
	export interface DeleteEnvironmentMembershipRequestFormProperties {

		/** Required */
		environmentId: FormControl<string | null | undefined>,

		/** Required */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEnvironmentMembershipRequestFormGroup() {
		return new FormGroup<DeleteEnvironmentMembershipRequestFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEnvironmentMembershipsResult {
		memberships?: Array<EnvironmentMember>;
		nextToken?: string | null;
	}
	export interface DescribeEnvironmentMembershipsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEnvironmentMembershipsResultFormGroup() {
		return new FormGroup<DescribeEnvironmentMembershipsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEnvironmentMembershipsRequest {
		userArn?: string | null;
		environmentId?: string | null;
		permissions?: Array<Permissions>;
		nextToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 25
		 */
		maxResults?: number | null;
	}
	export interface DescribeEnvironmentMembershipsRequestFormProperties {
		userArn: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeEnvironmentMembershipsRequestFormGroup() {
		return new FormGroup<DescribeEnvironmentMembershipsRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(25)]),
		});

	}

	export enum Permissions { owner = 0, read_write = 1, read_only = 2 }

	export interface DescribeEnvironmentStatusResult {
		status?: DescribeEnvironmentStatusResultStatus | null;
		message?: string | null;
	}
	export interface DescribeEnvironmentStatusResultFormProperties {
		status: FormControl<DescribeEnvironmentStatusResultStatus | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEnvironmentStatusResultFormGroup() {
		return new FormGroup<DescribeEnvironmentStatusResultFormProperties>({
			status: new FormControl<DescribeEnvironmentStatusResultStatus | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeEnvironmentStatusResultStatus { error = 0, creating = 1, connecting = 2, ready = 3, stopping = 4, stopped = 5, deleting = 6 }

	export interface DescribeEnvironmentStatusRequest {

		/** Required */
		environmentId: string;
	}
	export interface DescribeEnvironmentStatusRequestFormProperties {

		/** Required */
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEnvironmentStatusRequestFormGroup() {
		return new FormGroup<DescribeEnvironmentStatusRequestFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEnvironmentsResult {
		environments?: Array<Environment>;
	}
	export interface DescribeEnvironmentsResultFormProperties {
	}
	export function CreateDescribeEnvironmentsResultFormGroup() {
		return new FormGroup<DescribeEnvironmentsResultFormProperties>({
		});

	}


	/** Information about an AWS Cloud9 development environment. */
	export interface Environment {
		id?: string | null;

		/**
		 * Max length: 60
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 200 */
		description?: string | null;
		type?: EnvironmentType | null;
		arn?: string | null;
		ownerArn?: string | null;

		/** Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment. */
		lifecycle?: EnvironmentLifecycle;
	}

	/** Information about an AWS Cloud9 development environment. */
	export interface EnvironmentFormProperties {
		id: FormControl<string | null | undefined>,

		/**
		 * Max length: 60
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 200 */
		description: FormControl<string | null | undefined>,
		type: FormControl<EnvironmentType | null | undefined>,
		arn: FormControl<string | null | undefined>,
		ownerArn: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(60), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200)]),
			type: new FormControl<EnvironmentType | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			ownerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentType { ssh = 0, ec2 = 1 }


	/** Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment. */
	export interface EnvironmentLifecycle {
		status?: EnvironmentLifecycleStatus | null;
		reason?: string | null;
		failureResource?: string | null;
	}

	/** Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment. */
	export interface EnvironmentLifecycleFormProperties {
		status: FormControl<EnvironmentLifecycleStatus | null | undefined>,
		reason: FormControl<string | null | undefined>,
		failureResource: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentLifecycleFormGroup() {
		return new FormGroup<EnvironmentLifecycleFormProperties>({
			status: new FormControl<EnvironmentLifecycleStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			failureResource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentLifecycleStatus { CREATING = 0, CREATED = 1, CREATE_FAILED = 2, DELETING = 3, DELETE_FAILED = 4 }

	export interface DescribeEnvironmentsRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		environmentIds: Array<string>;
	}
	export interface DescribeEnvironmentsRequestFormProperties {
	}
	export function CreateDescribeEnvironmentsRequestFormGroup() {
		return new FormGroup<DescribeEnvironmentsRequestFormProperties>({
		});

	}

	export interface ListEnvironmentsResult {
		nextToken?: string | null;
		environmentIds?: Array<string>;
	}
	export interface ListEnvironmentsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsResultFormGroup() {
		return new FormGroup<ListEnvironmentsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentsRequest {
		nextToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 25
		 */
		maxResults?: number | null;
	}
	export interface ListEnvironmentsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEnvironmentsRequestFormGroup() {
		return new FormGroup<ListEnvironmentsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(25)]),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEnvironmentResult {
	}
	export interface UpdateEnvironmentResultFormProperties {
	}
	export function CreateUpdateEnvironmentResultFormGroup() {
		return new FormGroup<UpdateEnvironmentResultFormProperties>({
		});

	}

	export interface UpdateEnvironmentRequest {

		/** Required */
		environmentId: string;

		/**
		 * Max length: 60
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 200 */
		description?: string | null;
	}
	export interface UpdateEnvironmentRequestFormProperties {

		/** Required */
		environmentId: FormControl<string | null | undefined>,

		/**
		 * Max length: 60
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 200 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentRequestFormGroup() {
		return new FormGroup<UpdateEnvironmentRequestFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(60), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200)]),
		});

	}

	export interface UpdateEnvironmentMembershipResult {

		/** Information about an environment member for an AWS Cloud9 development environment. */
		membership?: EnvironmentMember;
	}
	export interface UpdateEnvironmentMembershipResultFormProperties {
	}
	export function CreateUpdateEnvironmentMembershipResultFormGroup() {
		return new FormGroup<UpdateEnvironmentMembershipResultFormProperties>({
		});

	}

	export interface UpdateEnvironmentMembershipRequest {

		/** Required */
		environmentId: string;

		/** Required */
		userArn: string;

		/** Required */
		permissions: UpdateEnvironmentMembershipRequestPermissions;
	}
	export interface UpdateEnvironmentMembershipRequestFormProperties {

		/** Required */
		environmentId: FormControl<string | null | undefined>,

		/** Required */
		userArn: FormControl<string | null | undefined>,

		/** Required */
		permissions: FormControl<UpdateEnvironmentMembershipRequestPermissions | null | undefined>,
	}
	export function CreateUpdateEnvironmentMembershipRequestFormGroup() {
		return new FormGroup<UpdateEnvironmentMembershipRequestFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissions: new FormControl<UpdateEnvironmentMembershipRequestPermissions | null | undefined>(undefined, [Validators.required]),
		});

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
		DescribeEnvironmentMemberships(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeEnvironmentMembershipsRequest): Observable<DescribeEnvironmentMembershipsResult> {
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
		ListEnvironments(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEnvironmentsRequest): Observable<ListEnvironmentsResult> {
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

