import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ConflictException {
	}

	export interface InternalServerException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ValidationException {
	}

	export interface CreateGraphResponse {
		GraphArn?: string | null;
	}

	export interface ServiceQuotaExceededException {
	}

	export interface CreateMembersResponse {
		Members?: Array<MemberDetail> | null;
		UnprocessedAccounts?: Array<UnprocessedAccount> | null;
	}


	/** Details about a member account that was invited to contribute to a behavior graph. */
	export interface MemberDetail {
		AccountId?: string | null;
		EmailAddress?: string | null;
		GraphArn?: string | null;
		MasterId?: string | null;
		Status?: MemberDetailStatus | null;
		DisabledReason?: MemberDetailDisabledReason | null;
		InvitedTime?: Date | null;
		UpdatedTime?: Date | null;
		PercentOfGraphUtilization?: number | null;
		PercentOfGraphUtilizationUpdatedTime?: Date | null;
	}

	export enum MemberDetailStatus { INVITED = 0, VERIFICATION_IN_PROGRESS = 1, VERIFICATION_FAILED = 2, ENABLED = 3, ACCEPTED_BUT_DISABLED = 4 }

	export enum MemberDetailDisabledReason { VOLUME_TOO_HIGH = 0, VOLUME_UNKNOWN = 1 }


	/** A member account that was included in a request but for which the request could not be processed. */
	export interface UnprocessedAccount {
		AccountId?: string | null;
		Reason?: string | null;
	}


	/** An AWS account that is the master of or a member of a behavior graph. */
	export interface Account {
		AccountId: string;
		EmailAddress: string;
	}

	export interface DeleteMembersResponse {
		AccountIds?: Array<string> | null;
		UnprocessedAccounts?: Array<UnprocessedAccount> | null;
	}

	export interface GetMembersResponse {
		MemberDetails?: Array<MemberDetail> | null;
		UnprocessedAccounts?: Array<UnprocessedAccount> | null;
	}

	export interface ListGraphsResponse {
		GraphList?: Array<Graph> | null;
		NextToken?: string | null;
	}


	/** A behavior graph in Detective. */
	export interface Graph {
		Arn?: string | null;
		CreatedTime?: Date | null;
	}

	export interface ListInvitationsResponse {
		Invitations?: Array<MemberDetail> | null;
		NextToken?: string | null;
	}

	export interface ListMembersResponse {
		MemberDetails?: Array<MemberDetail> | null;
		NextToken?: string | null;
	}

	export interface AcceptInvitationRequest {
		GraphArn: string;
	}

	export interface CreateMembersRequest {
		GraphArn: string;
		Message?: string | null;
		Accounts: Array<Account>;
	}

	export interface DeleteGraphRequest {
		GraphArn: string;
	}

	export interface DeleteMembersRequest {
		GraphArn: string;
		AccountIds: Array<string>;
	}

	export interface DisassociateMembershipRequest {
		GraphArn: string;
	}

	export interface GetMembersRequest {
		GraphArn: string;
		AccountIds: Array<string>;
	}

	export interface ListGraphsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListInvitationsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListMembersRequest {
		GraphArn: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export enum MemberStatus { INVITED = 0, VERIFICATION_IN_PROGRESS = 1, VERIFICATION_FAILED = 2, ENABLED = 3, ACCEPTED_BUT_DISABLED = 4 }

	export enum MemberDisabledReason { VOLUME_TOO_HIGH = 0, VOLUME_UNKNOWN = 1 }

	export interface RejectInvitationRequest {
		GraphArn: string;
	}

	export interface StartMonitoringMemberRequest {
		GraphArn: string;
		AccountId: string;
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
		ListGraphs(MaxResults: string, NextToken: string, requestBody: ListGraphsPostBody): Observable<ListGraphsResponse> {
			return this.http.post<ListGraphsResponse>(this.baseUri + 'graphs/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by a member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
		 * Post invitations/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(MaxResults: string, NextToken: string, requestBody: ListInvitationsPostBody): Observable<ListInvitationsResponse> {
			return this.http.post<ListInvitationsResponse>(this.baseUri + 'invitations/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of member accounts for a behavior graph. Does not return member accounts that were removed from the behavior graph.
		 * Post graph/members/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(MaxResults: string, NextToken: string, requestBody: ListMembersPostBody): Observable<ListMembersResponse> {
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

	export interface DeleteGraphPostBody {

		/**
		 * The ARN of the behavior graph to disable.
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
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

	export interface DisassociateMembershipPostBody {

		/**
		 * <p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
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

	export interface RejectInvitationPostBody {

		/**
		 * <p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 * Pattern: ^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$
		 */
		GraphArn: string;
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

}

