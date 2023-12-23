import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface CreateGraphResponse {

		/** Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$ */
		GraphArn?: string | null;
	}
	export interface CreateGraphResponseFormProperties {

		/** Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$ */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGraphResponseFormGroup() {
		return new FormGroup<CreateGraphResponseFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateMembersResponse {
		Members?: Array<MemberDetail>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface CreateMembersResponseFormProperties {
	}
	export function CreateCreateMembersResponseFormGroup() {
		return new FormGroup<CreateMembersResponseFormProperties>({
		});

	}


	/** Details about a member account that was invited to contribute to a behavior graph. */
	export interface MemberDetail {

		/**
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^.+@.+$
		 */
		EmailAddress?: string | null;

		/** Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$ */
		GraphArn?: string | null;

		/**
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		MasterId?: string | null;
		Status?: MemberDetailStatus | null;
		DisabledReason?: MemberDetailDisabledReason | null;
		InvitedTime?: Date | null;
		UpdatedTime?: Date | null;
		PercentOfGraphUtilization?: number | null;
		PercentOfGraphUtilizationUpdatedTime?: Date | null;
	}

	/** Details about a member account that was invited to contribute to a behavior graph. */
	export interface MemberDetailFormProperties {

		/**
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^.+@.+$
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/** Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$ */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		MasterId: FormControl<string | null | undefined>,
		Status: FormControl<MemberDetailStatus | null | undefined>,
		DisabledReason: FormControl<MemberDetailDisabledReason | null | undefined>,
		InvitedTime: FormControl<Date | null | undefined>,
		UpdatedTime: FormControl<Date | null | undefined>,
		PercentOfGraphUtilization: FormControl<number | null | undefined>,
		PercentOfGraphUtilizationUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateMemberDetailFormGroup() {
		return new FormGroup<MemberDetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(12), Validators.minLength(12)]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			GraphArn: new FormControl<string | null | undefined>(undefined),
			MasterId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(12), Validators.minLength(12)]),
			Status: new FormControl<MemberDetailStatus | null | undefined>(undefined),
			DisabledReason: new FormControl<MemberDetailDisabledReason | null | undefined>(undefined),
			InvitedTime: new FormControl<Date | null | undefined>(undefined),
			UpdatedTime: new FormControl<Date | null | undefined>(undefined),
			PercentOfGraphUtilization: new FormControl<number | null | undefined>(undefined),
			PercentOfGraphUtilizationUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MemberDetailStatus { INVITED = 0, VERIFICATION_IN_PROGRESS = 1, VERIFICATION_FAILED = 2, ENABLED = 3, ACCEPTED_BUT_DISABLED = 4 }

	export enum MemberDetailDisabledReason { VOLUME_TOO_HIGH = 0, VOLUME_UNKNOWN = 1 }


	/** A member account that was included in a request but for which the request could not be processed. */
	export interface UnprocessedAccount {

		/**
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId?: string | null;
		Reason?: string | null;
	}

	/** A member account that was included in a request but for which the request could not be processed. */
	export interface UnprocessedAccountFormProperties {

		/**
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedAccountFormGroup() {
		return new FormGroup<UnprocessedAccountFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(12), Validators.minLength(12)]),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AWS account that is the master of or a member of a behavior graph. */
	export interface Account {

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^.+@.+$
		 */
		EmailAddress: string;
	}

	/** An AWS account that is the master of or a member of a behavior graph. */
	export interface AccountFormProperties {

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^.+@.+$
		 */
		EmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface DeleteMembersResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds?: Array<string>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface DeleteMembersResponseFormProperties {
	}
	export function CreateDeleteMembersResponseFormGroup() {
		return new FormGroup<DeleteMembersResponseFormProperties>({
		});

	}

	export interface GetMembersResponse {
		MemberDetails?: Array<MemberDetail>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface GetMembersResponseFormProperties {
	}
	export function CreateGetMembersResponseFormGroup() {
		return new FormGroup<GetMembersResponseFormProperties>({
		});

	}

	export interface ListGraphsResponse {
		GraphList?: Array<Graph>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListGraphsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGraphsResponseFormGroup() {
		return new FormGroup<ListGraphsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** A behavior graph in Detective. */
	export interface Graph {

		/** Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$ */
		Arn?: string | null;
		CreatedTime?: Date | null;
	}

	/** A behavior graph in Detective. */
	export interface GraphFormProperties {

		/** Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$ */
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateGraphFormGroup() {
		return new FormGroup<GraphFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsResponse {
		Invitations?: Array<MemberDetail>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListInvitationsResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface ListMembersResponse {
		MemberDetails?: Array<MemberDetail>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListMembersResponseFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersResponseFormGroup() {
		return new FormGroup<ListMembersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface AcceptInvitationRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}
	export interface AcceptInvitationRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMembersRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Message?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Accounts: Array<Account>;
	}
	export interface CreateMembersRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateCreateMembersRequestFormGroup() {
		return new FormGroup<CreateMembersRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
		});

	}

	export interface DeleteGraphRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}
	export interface DeleteGraphRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGraphRequestFormGroup() {
		return new FormGroup<DeleteGraphRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMembersRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds: Array<string>;
	}
	export interface DeleteMembersRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMembersRequestFormGroup() {
		return new FormGroup<DeleteMembersRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateMembershipRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}
	export interface DisassociateMembershipRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMembershipRequestFormGroup() {
		return new FormGroup<DisassociateMembershipRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMembersRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds: Array<string>;
	}
	export interface GetMembersRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateGetMembersRequestFormGroup() {
		return new FormGroup<GetMembersRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListGraphsRequest {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListGraphsRequestFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGraphsRequestFormGroup() {
		return new FormGroup<ListGraphsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListInvitationsRequest {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListInvitationsRequestFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListInvitationsRequestFormGroup() {
		return new FormGroup<ListInvitationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListMembersRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListMembersRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMembersRequestFormGroup() {
		return new FormGroup<ListMembersRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export enum MemberStatus { INVITED = 0, VERIFICATION_IN_PROGRESS = 1, VERIFICATION_FAILED = 2, ENABLED = 3, ACCEPTED_BUT_DISABLED = 4 }

	export enum MemberDisabledReason { VOLUME_TOO_HIGH = 0, VOLUME_UNKNOWN = 1 }

	export interface RejectInvitationRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}
	export interface RejectInvitationRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateRejectInvitationRequestFormGroup() {
		return new FormGroup<RejectInvitationRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMonitoringMemberRequest {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: string;
	}
	export interface StartMonitoringMemberRequestFormProperties {

		/**
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateStartMonitoringMemberRequestFormGroup() {
		return new FormGroup<StartMonitoringMemberRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>
		 * Put invitation
		 * @return {void} Success
		 */
		AcceptInvitation(requestBody: AcceptInvitationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'invitation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new behavior graph for the calling account, and sets that account as the master account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the master account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same master account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
		 * Post graph
		 * @return {CreateGraphResponse} Success
		 */
		CreateGraph(): Observable<CreateGraphResponse> {
			return this.http.post<CreateGraphResponse>(this.baseUri + 'graph', null, {});
		}

		/**
		 * <p>Sends a request to invite the specified AWS accounts to be member accounts in the behavior graph. This operation can only be called by the master account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then sends invitations to the verified accounts.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to start the verification for. This list includes member accounts that are being verified, that have passed verification and are being sent an invitation, and that have failed verification.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>
		 * Post graph/members
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(requestBody: CreateMembersPostBody): Observable<CreateMembersResponse> {
			return this.http.post<CreateMembersResponse>(this.baseUri + 'graph/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the specified behavior graph and queues it to be deleted. This operation removes the graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the master account for a behavior graph.</p>
		 * Post graph/removal
		 * @return {void} Success
		 */
		DeleteGraph(requestBody: DeleteGraphPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'graph/removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes one or more member accounts from the master account behavior graph. This operation can only be called by a Detective master account. That account cannot use <code>DeleteMembers</code> to delete their own account from the behavior graph. To disable a behavior graph, the master account uses the <code>DeleteGraph</code> API method.
		 * Post graph/members/removal
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(requestBody: DeleteMembersPostBody): Observable<DeleteMembersResponse> {
			return this.http.post<DeleteMembersResponse>(this.baseUri + 'graph/members/removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the member account from the specified behavior graph. This operation can only be called by a member account that has the <code>ENABLED</code> status.
		 * Post membership/removal
		 * @return {void} Success
		 */
		DisassociateMembership(requestBody: DisassociateMembershipPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'membership/removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the membership details for specified member accounts for a behavior graph.
		 * Post graph/members/get
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(requestBody: GetMembersPostBody): Observable<GetMembersResponse> {
			return this.http.post<GetMembersResponse>(this.baseUri + 'graph/members/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of behavior graphs that the calling account is a master of. This operation can only be called by a master account.</p> <p>Because an account can currently only be the master of one behavior graph within a Region, the results always contain a single graph.</p>
		 * Post graphs/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGraphsResponse} Success
		 */
		ListGraphs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGraphsPostBody): Observable<ListGraphsResponse> {
			return this.http.post<ListGraphsResponse>(this.baseUri + 'graphs/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by a member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
		 * Post invitations/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInvitationsPostBody): Observable<ListInvitationsResponse> {
			return this.http.post<ListInvitationsResponse>(this.baseUri + 'invitations/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of member accounts for a behavior graph. Does not return member accounts that were removed from the behavior graph.
		 * Post graph/members/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMembersPostBody): Observable<ListMembersResponse> {
			return this.http.post<ListMembersResponse>(this.baseUri + 'graph/members/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by a member account that has the <code>INVITED</code> status.
		 * Post invitation/removal
		 * @return {void} Success
		 */
		RejectInvitation(requestBody: RejectInvitationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'invitation/removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>
		 * Post graph/member/monitoringstate
		 * @return {void} Success
		 */
		StartMonitoringMember(requestBody: StartMonitoringMemberPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'graph/member/monitoringstate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface AcceptInvitationPutBody {

		/**
		 * <p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}
	export interface AcceptInvitationPutBodyFormProperties {

		/**
		 * <p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationPutBodyFormGroup() {
		return new FormGroup<AcceptInvitationPutBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMembersPostBody {

		/**
		 * The ARN of the behavior graph to invite the member accounts to contribute their data to.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * Customized message text to include in the invitation email message to the invited member accounts.
		 * Max length: 1000
		 * Min length: 1
		 */
		Message?: string | null;

		/**
		 * The list of AWS accounts to invite to become member accounts in the behavior graph. For each invited account, the account list contains the account identifier and the AWS account root user email address.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Accounts: Array<Account>;
	}
	export interface CreateMembersPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph to invite the member accounts to contribute their data to.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * Customized message text to include in the invitation email message to the invited member accounts.
		 * Max length: 1000
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateCreateMembersPostBodyFormGroup() {
		return new FormGroup<CreateMembersPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
		});

	}

	export interface DeleteGraphPostBody {

		/**
		 * The ARN of the behavior graph to disable.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}
	export interface DeleteGraphPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph to disable.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGraphPostBodyFormGroup() {
		return new FormGroup<DeleteGraphPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMembersPostBody {

		/**
		 * The ARN of the behavior graph to delete members from.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * The list of AWS account identifiers for the member accounts to delete from the behavior graph.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds: Array<string>;
	}
	export interface DeleteMembersPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph to delete members from.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMembersPostBodyFormGroup() {
		return new FormGroup<DeleteMembersPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateMembershipPostBody {

		/**
		 * <p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}
	export interface DisassociateMembershipPostBodyFormProperties {

		/**
		 * <p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMembershipPostBodyFormGroup() {
		return new FormGroup<DisassociateMembershipPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMembersPostBody {

		/**
		 * The ARN of the behavior graph for which to request the member details.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * <p>The list of AWS account identifiers for the member account for which to return member details.</p> <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts that were removed from the behavior graph.</p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds: Array<string>;
	}
	export interface GetMembersPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph for which to request the member details.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateGetMembersPostBodyFormGroup() {
		return new FormGroup<GetMembersPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListGraphsPostBody {

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListGraphsPostBodyFormProperties {

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGraphsPostBodyFormGroup() {
		return new FormGroup<ListGraphsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListInvitationsPostBody {

		/**
		 * For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListInvitationsPostBodyFormProperties {

		/**
		 * For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListInvitationsPostBodyFormGroup() {
		return new FormGroup<ListInvitationsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListMembersPostBody {

		/**
		 * The ARN of the behavior graph for which to retrieve the list of member accounts.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListMembersPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph for which to retrieve the list of member accounts.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMembersPostBodyFormGroup() {
		return new FormGroup<ListMembersPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface RejectInvitationPostBody {

		/**
		 * <p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
	}
	export interface RejectInvitationPostBodyFormProperties {

		/**
		 * <p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateRejectInvitationPostBodyFormGroup() {
		return new FormGroup<RejectInvitationPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMonitoringMemberPostBody {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;

		/**
		 * <p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>
		 * Required
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: string;
	}
	export interface StartMonitoringMemberPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * <p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>
		 * Required
		 * Max length: 12
		 * Min length: 12
		 * Pattern: ^[0-9]+$
		 */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateStartMonitoringMemberPostBodyFormGroup() {
		return new FormGroup<StartMonitoringMemberPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]),
		});

	}

}

