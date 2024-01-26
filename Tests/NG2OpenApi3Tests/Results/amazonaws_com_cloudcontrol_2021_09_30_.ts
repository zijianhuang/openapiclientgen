import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelResourceRequestOutput {

		/** Represents the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>. */
		ProgressEvent?: ProgressEvent;
	}
	export interface CancelResourceRequestOutputFormProperties {
	}
	export function CreateCancelResourceRequestOutputFormGroup() {
		return new FormGroup<CancelResourceRequestOutputFormProperties>({
		});

	}


	/** Represents the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>. */
	export interface ProgressEvent {
		TypeName?: string;
		Identifier?: string;
		RequestToken?: string;
		Operation?: Operation;
		OperationStatus?: OperationStatus;
		EventTime?: Date;
		ResourceModel?: string;
		StatusMessage?: string;
		ErrorCode?: HandlerErrorCode;
		RetryAfter?: Date;
	}

	/** Represents the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>. */
	export interface ProgressEventFormProperties {
		TypeName: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		RequestToken: FormControl<string | null | undefined>,
		Operation: FormControl<Operation | null | undefined>,
		OperationStatus: FormControl<OperationStatus | null | undefined>,
		EventTime: FormControl<Date | null | undefined>,
		ResourceModel: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<HandlerErrorCode | null | undefined>,
		RetryAfter: FormControl<Date | null | undefined>,
	}
	export function CreateProgressEventFormGroup() {
		return new FormGroup<ProgressEventFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			RequestToken: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<Operation | null | undefined>(undefined),
			OperationStatus: new FormControl<OperationStatus | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
			ResourceModel: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<HandlerErrorCode | null | undefined>(undefined),
			RetryAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum Operation { CREATE = 0, DELETE = 1, UPDATE = 2 }

	export enum OperationStatus { PENDING = 0, IN_PROGRESS = 1, SUCCESS = 2, FAILED = 3, CANCEL_IN_PROGRESS = 4, CANCEL_COMPLETE = 5 }

	export enum HandlerErrorCode { NotUpdatable = 0, InvalidRequest = 1, AccessDenied = 2, InvalidCredentials = 3, AlreadyExists = 4, NotFound = 5, ResourceConflict = 6, Throttling = 7, ServiceLimitExceeded = 8, NotStabilized = 9, GeneralServiceException = 10, ServiceInternalError = 11, ServiceTimeout = 12, NetworkFailure = 13, InternalFailure = 14 }

	export interface CancelResourceRequestInput {

		/** Required */
		RequestToken: string;
	}
	export interface CancelResourceRequestInputFormProperties {

		/** Required */
		RequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCancelResourceRequestInputFormGroup() {
		return new FormGroup<CancelResourceRequestInputFormProperties>({
			RequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface RequestTokenNotFoundException {
	}
	export interface RequestTokenNotFoundExceptionFormProperties {
	}
	export function CreateRequestTokenNotFoundExceptionFormGroup() {
		return new FormGroup<RequestTokenNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateResourceOutput {
		ProgressEvent?: ProgressEvent;
	}
	export interface CreateResourceOutputFormProperties {
	}
	export function CreateCreateResourceOutputFormGroup() {
		return new FormGroup<CreateResourceOutputFormProperties>({
		});

	}

	export interface CreateResourceInput {

		/** Required */
		TypeName: string;
		TypeVersionId?: string;
		RoleArn?: string;
		ClientToken?: string;

		/** Required */
		DesiredState: string;
	}
	export interface CreateResourceInputFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
		TypeVersionId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		DesiredState: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceInputFormGroup() {
		return new FormGroup<CreateResourceInputFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypeVersionId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			DesiredState: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface HandlerInternalFailureException {
	}
	export interface HandlerInternalFailureExceptionFormProperties {
	}
	export function CreateHandlerInternalFailureExceptionFormGroup() {
		return new FormGroup<HandlerInternalFailureExceptionFormProperties>({
		});

	}

	export interface GeneralServiceException {
	}
	export interface GeneralServiceExceptionFormProperties {
	}
	export function CreateGeneralServiceExceptionFormGroup() {
		return new FormGroup<GeneralServiceExceptionFormProperties>({
		});

	}

	export interface NotUpdatableException {
	}
	export interface NotUpdatableExceptionFormProperties {
	}
	export function CreateNotUpdatableExceptionFormGroup() {
		return new FormGroup<NotUpdatableExceptionFormProperties>({
		});

	}

	export interface TypeNotFoundException {
	}
	export interface TypeNotFoundExceptionFormProperties {
	}
	export function CreateTypeNotFoundExceptionFormGroup() {
		return new FormGroup<TypeNotFoundExceptionFormProperties>({
		});

	}

	export interface ConcurrentOperationException {
	}
	export interface ConcurrentOperationExceptionFormProperties {
	}
	export function CreateConcurrentOperationExceptionFormGroup() {
		return new FormGroup<ConcurrentOperationExceptionFormProperties>({
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface PrivateTypeException {
	}
	export interface PrivateTypeExceptionFormProperties {
	}
	export function CreatePrivateTypeExceptionFormGroup() {
		return new FormGroup<PrivateTypeExceptionFormProperties>({
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

	export interface NetworkFailureException {
	}
	export interface NetworkFailureExceptionFormProperties {
	}
	export function CreateNetworkFailureExceptionFormGroup() {
		return new FormGroup<NetworkFailureExceptionFormProperties>({
		});

	}

	export interface UnsupportedActionException {
	}
	export interface UnsupportedActionExceptionFormProperties {
	}
	export function CreateUnsupportedActionExceptionFormGroup() {
		return new FormGroup<UnsupportedActionExceptionFormProperties>({
		});

	}

	export interface NotStabilizedException {
	}
	export interface NotStabilizedExceptionFormProperties {
	}
	export function CreateNotStabilizedExceptionFormGroup() {
		return new FormGroup<NotStabilizedExceptionFormProperties>({
		});

	}

	export interface ServiceInternalErrorException {
	}
	export interface ServiceInternalErrorExceptionFormProperties {
	}
	export function CreateServiceInternalErrorExceptionFormGroup() {
		return new FormGroup<ServiceInternalErrorExceptionFormProperties>({
		});

	}

	export interface HandlerFailureException {
	}
	export interface HandlerFailureExceptionFormProperties {
	}
	export function CreateHandlerFailureExceptionFormGroup() {
		return new FormGroup<HandlerFailureExceptionFormProperties>({
		});

	}

	export interface ServiceLimitExceededException {
	}
	export interface ServiceLimitExceededExceptionFormProperties {
	}
	export function CreateServiceLimitExceededExceptionFormGroup() {
		return new FormGroup<ServiceLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidCredentialsException {
	}
	export interface InvalidCredentialsExceptionFormProperties {
	}
	export function CreateInvalidCredentialsExceptionFormGroup() {
		return new FormGroup<InvalidCredentialsExceptionFormProperties>({
		});

	}

	export interface ResourceConflictException {
	}
	export interface ResourceConflictExceptionFormProperties {
	}
	export function CreateResourceConflictExceptionFormGroup() {
		return new FormGroup<ResourceConflictExceptionFormProperties>({
		});

	}

	export interface ClientTokenConflictException {
	}
	export interface ClientTokenConflictExceptionFormProperties {
	}
	export function CreateClientTokenConflictExceptionFormGroup() {
		return new FormGroup<ClientTokenConflictExceptionFormProperties>({
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

	export interface DeleteResourceOutput {
		ProgressEvent?: ProgressEvent;
	}
	export interface DeleteResourceOutputFormProperties {
	}
	export function CreateDeleteResourceOutputFormGroup() {
		return new FormGroup<DeleteResourceOutputFormProperties>({
		});

	}

	export interface DeleteResourceInput {

		/** Required */
		TypeName: string;
		TypeVersionId?: string;
		RoleArn?: string;
		ClientToken?: string;

		/** Required */
		Identifier: string;
	}
	export interface DeleteResourceInputFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
		TypeVersionId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceInputFormGroup() {
		return new FormGroup<DeleteResourceInputFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypeVersionId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourceOutput {
		TypeName?: string;

		/** Represents information about a provisioned resource. */
		ResourceDescription?: ResourceDescription;
	}
	export interface GetResourceOutputFormProperties {
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceOutputFormGroup() {
		return new FormGroup<GetResourceOutputFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about a provisioned resource. */
	export interface ResourceDescription {
		Identifier?: string;
		Properties?: string;
	}

	/** Represents information about a provisioned resource. */
	export interface ResourceDescriptionFormProperties {
		Identifier: FormControl<string | null | undefined>,
		Properties: FormControl<string | null | undefined>,
	}
	export function CreateResourceDescriptionFormGroup() {
		return new FormGroup<ResourceDescriptionFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
			Properties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourceInput {

		/** Required */
		TypeName: string;
		TypeVersionId?: string;
		RoleArn?: string;

		/** Required */
		Identifier: string;
	}
	export interface GetResourceInputFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
		TypeVersionId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceInputFormGroup() {
		return new FormGroup<GetResourceInputFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypeVersionId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourceRequestStatusOutput {
		ProgressEvent?: ProgressEvent;
	}
	export interface GetResourceRequestStatusOutputFormProperties {
	}
	export function CreateGetResourceRequestStatusOutputFormGroup() {
		return new FormGroup<GetResourceRequestStatusOutputFormProperties>({
		});

	}

	export interface GetResourceRequestStatusInput {

		/** Required */
		RequestToken: string;
	}
	export interface GetResourceRequestStatusInputFormProperties {

		/** Required */
		RequestToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceRequestStatusInputFormGroup() {
		return new FormGroup<GetResourceRequestStatusInputFormProperties>({
			RequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListResourceRequestsOutput {
		ResourceRequestStatusSummaries?: Array<ProgressEvent>;
		NextToken?: string;
	}
	export interface ListResourceRequestsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceRequestsOutputFormGroup() {
		return new FormGroup<ListResourceRequestsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceRequestsInput {
		MaxResults?: number | null;
		NextToken?: string;
		ResourceRequestStatusFilter?: ResourceRequestStatusFilter;
	}
	export interface ListResourceRequestsInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceRequestsInputFormGroup() {
		return new FormGroup<ListResourceRequestsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The filter criteria to use in determining the requests returned. */
	export interface ResourceRequestStatusFilter {
		Operations?: Array<Operation>;
		OperationStatuses?: Array<OperationStatus>;
	}

	/** The filter criteria to use in determining the requests returned. */
	export interface ResourceRequestStatusFilterFormProperties {
	}
	export function CreateResourceRequestStatusFilterFormGroup() {
		return new FormGroup<ResourceRequestStatusFilterFormProperties>({
		});

	}

	export interface ListResourcesOutput {
		TypeName?: string;
		ResourceDescriptions?: Array<ResourceDescription>;
		NextToken?: string;
	}
	export interface ListResourcesOutputFormProperties {
		TypeName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesOutputFormGroup() {
		return new FormGroup<ListResourcesOutputFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesInput {

		/** Required */
		TypeName: string;
		TypeVersionId?: string;
		RoleArn?: string;
		NextToken?: string;
		MaxResults?: number | null;
		ResourceModel?: string;
	}
	export interface ListResourcesInputFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
		TypeVersionId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		ResourceModel: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesInputFormGroup() {
		return new FormGroup<ListResourcesInputFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypeVersionId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ResourceModel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceOutput {
		ProgressEvent?: ProgressEvent;
	}
	export interface UpdateResourceOutputFormProperties {
	}
	export function CreateUpdateResourceOutputFormGroup() {
		return new FormGroup<UpdateResourceOutputFormProperties>({
		});

	}

	export interface UpdateResourceInput {

		/** Required */
		TypeName: string;
		TypeVersionId?: string;
		RoleArn?: string;
		ClientToken?: string;

		/** Required */
		Identifier: string;

		/** Required */
		PatchDocument: string;
	}
	export interface UpdateResourceInputFormProperties {

		/** Required */
		TypeName: FormControl<string | null | undefined>,
		TypeVersionId: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,

		/** Required */
		PatchDocument: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceInputFormGroup() {
		return new FormGroup<UpdateResourceInputFormProperties>({
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TypeVersionId: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Cancels the specified resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-cancel">Canceling resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>Only resource operations requests with a status of <code>PENDING</code> or <code>IN_PROGRESS</code> can be canceled.</p>
		 * Post #X-Amz-Target=CloudApiService.CancelResourceRequest
		 * @return {CancelResourceRequestOutput} Success
		 */
		CancelResourceRequest(requestBody: CancelResourceRequestInput): Observable<CancelResourceRequestOutput> {
			return this.http.post<CancelResourceRequestOutput>(this.baseUri + '#X-Amz-Target=CloudApiService.CancelResourceRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the specified resource. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-create.html">Creating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource creation request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> type returned by <code>CreateResource</code>.</p>
		 * Post #X-Amz-Target=CloudApiService.CreateResource
		 * @return {CreateResourceOutput} Success
		 */
		CreateResource(requestBody: CreateResourceInput): Observable<CreateResourceOutput> {
			return this.http.post<CreateResourceOutput>(this.baseUri + '#X-Amz-Target=CloudApiService.CreateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html">Deleting a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource deletion request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>
		 * Post #X-Amz-Target=CloudApiService.DeleteResource
		 * @return {DeleteResourceOutput} Success
		 */
		DeleteResource(requestBody: DeleteResourceInput): Observable<DeleteResourceOutput> {
			return this.http.post<DeleteResourceOutput>(this.baseUri + '#X-Amz-Target=CloudApiService.DeleteResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the current state of the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html">Reading a resource's current state</a>.</p> <p>You can use this action to return information about an existing resource in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
		 * Post #X-Amz-Target=CloudApiService.GetResource
		 * @return {GetResourceOutput} Success
		 */
		GetResource(requestBody: GetResourceInput): Observable<GetResourceOutput> {
			return this.http.post<GetResourceOutput>(this.baseUri + '#X-Amz-Target=CloudApiService.GetResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-track">Tracking the progress of resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.
		 * Post #X-Amz-Target=CloudApiService.GetResourceRequestStatus
		 * @return {GetResourceRequestStatusOutput} Success
		 */
		GetResourceRequestStatus(requestBody: GetResourceRequestStatusInput): Observable<GetResourceRequestStatusOutput> {
			return this.http.post<GetResourceRequestStatusOutput>(this.baseUri + '#X-Amz-Target=CloudApiService.GetResourceRequestStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns existing resource operation requests. This includes requests of all status types. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-list">Listing active resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <note> <p>Resource operation requests expire after 7 days.</p> </note>
		 * Post #X-Amz-Target=CloudApiService.ListResourceRequests
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceRequestsOutput} Success
		 */
		ListResourceRequests(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourceRequestsInput): Observable<ListResourceRequestsOutput> {
			return this.http.post<ListResourceRequestsOutput>(this.baseUri + '#X-Amz-Target=CloudApiService.ListResourceRequests?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the specified resources. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html">Discovering resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>You can use this action to return information about existing resources in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
		 * Post #X-Amz-Target=CloudApiService.ListResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesOutput} Success
		 */
		ListResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourcesInput): Observable<ListResourcesOutput> {
			return this.http.post<ListResourcesOutput>(this.baseUri + '#X-Amz-Target=CloudApiService.ListResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified property values in the resource.</p> <p>You specify your resource property updates as a list of patch operations contained in a JSON patch document that adheres to the <a href="https://datatracker.ietf.org/doc/html/rfc6902"> <i>RFC 6902 - JavaScript Object Notation (JSON) Patch</i> </a> standard.</p> <p>For details on how Cloud Control API performs resource update operations, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html">Updating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource update request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>UpdateResource</code>.</p> <p>For more information about the properties of a specific resource, refer to the related topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>
		 * Post #X-Amz-Target=CloudApiService.UpdateResource
		 * @return {UpdateResourceOutput} Success
		 */
		UpdateResource(requestBody: UpdateResourceInput): Observable<UpdateResourceOutput> {
			return this.http.post<UpdateResourceOutput>(this.baseUri + '#X-Amz-Target=CloudApiService.UpdateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CancelResourceRequestX_Amz_Target { 'CloudApiService.CancelResourceRequest' = 0 }

	export enum CreateResourceX_Amz_Target { 'CloudApiService.CreateResource' = 0 }

	export enum DeleteResourceX_Amz_Target { 'CloudApiService.DeleteResource' = 0 }

	export enum GetResourceX_Amz_Target { 'CloudApiService.GetResource' = 0 }

	export enum GetResourceRequestStatusX_Amz_Target { 'CloudApiService.GetResourceRequestStatus' = 0 }

	export enum ListResourceRequestsX_Amz_Target { 'CloudApiService.ListResourceRequests' = 0 }

	export enum ListResourcesX_Amz_Target { 'CloudApiService.ListResources' = 0 }

	export enum UpdateResourceX_Amz_Target { 'CloudApiService.UpdateResource' = 0 }

}

