import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateDelegateToResourceResponse {
	}

	export interface AssociateDelegateToResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		EntityId: string;
	}

	export interface EntityNotFoundException {
	}

	export interface EntityStateException {
	}

	export interface InvalidParameterException {
	}

	export interface OrganizationNotFoundException {
	}

	export interface OrganizationStateException {
	}

	export interface AssociateMemberToGroupResponse {
	}

	export interface AssociateMemberToGroupRequest {
		OrganizationId: string;
		GroupId: string;
		MemberId: string;
	}

	export interface DirectoryServiceAuthenticationFailedException {
	}

	export interface DirectoryUnavailableException {
	}

	export interface UnsupportedOperationException {
	}

	export interface CreateAliasResponse {
	}

	export interface CreateAliasRequest {
		OrganizationId: string;
		EntityId: string;
		Alias: string;
	}

	export interface EmailAddressInUseException {
	}

	export interface MailDomainNotFoundException {
	}

	export interface MailDomainStateException {
	}

	export interface LimitExceededException {
	}

	export interface CreateGroupResponse {
		GroupId?: string | null;
	}

	export interface CreateGroupRequest {
		OrganizationId: string;
		Name: string;
	}

	export interface NameAvailabilityException {
	}

	export interface ReservedNameException {
	}

	export interface CreateResourceResponse {
		ResourceId?: string | null;
	}

	export interface CreateResourceRequest {
		OrganizationId: string;
		Name: string;
		Type: CreateResourceRequestType;
	}

	export enum CreateResourceRequestType { ROOM = 0, EQUIPMENT = 1 }

	export interface CreateUserResponse {
		UserId?: string | null;
	}

	export interface CreateUserRequest {
		OrganizationId: string;
		Name: string;
		DisplayName: string;
		Password: string;
	}

	export interface InvalidPasswordException {
	}

	export interface DeleteAccessControlRuleResponse {
	}

	export interface DeleteAccessControlRuleRequest {
		OrganizationId: string;
		Name: string;
	}

	export interface DeleteAliasResponse {
	}

	export interface DeleteAliasRequest {
		OrganizationId: string;
		EntityId: string;
		Alias: string;
	}

	export interface DeleteGroupResponse {
	}

	export interface DeleteGroupRequest {
		OrganizationId: string;
		GroupId: string;
	}

	export interface DeleteMailboxPermissionsResponse {
	}

	export interface DeleteMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		GranteeId: string;
	}

	export interface DeleteResourceResponse {
	}

	export interface DeleteResourceRequest {
		OrganizationId: string;
		ResourceId: string;
	}

	export interface DeleteRetentionPolicyResponse {
	}

	export interface DeleteRetentionPolicyRequest {
		OrganizationId: string;
		Id: string;
	}

	export interface DeleteUserResponse {
	}

	export interface DeleteUserRequest {
		OrganizationId: string;
		UserId: string;
	}

	export interface DeregisterFromWorkMailResponse {
	}

	export interface DeregisterFromWorkMailRequest {
		OrganizationId: string;
		EntityId: string;
	}

	export interface DescribeGroupResponse {
		GroupId?: string | null;
		Name?: string | null;
		Email?: string | null;
		State?: DescribeGroupResponseState | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}

	export enum DescribeGroupResponseState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface DescribeGroupRequest {
		OrganizationId: string;
		GroupId: string;
	}

	export interface DescribeOrganizationResponse {
		OrganizationId?: string | null;
		Alias?: string | null;
		State?: string | null;
		DirectoryId?: string | null;
		DirectoryType?: string | null;
		DefaultMailDomain?: string | null;
		CompletedDate?: Date | null;
		ErrorMessage?: string | null;
		ARN?: string | null;
	}

	export interface DescribeOrganizationRequest {
		OrganizationId: string;
	}

	export interface DescribeResourceResponse {
		ResourceId?: string | null;
		Email?: string | null;
		Name?: string | null;
		Type?: CreateResourceRequestType | null;

		/** At least one delegate must be associated to the resource to disable automatic replies from the resource. */
		BookingOptions?: BookingOptions | null;
		State?: DescribeGroupResponseState | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}


	/** At least one delegate must be associated to the resource to disable automatic replies from the resource. */
	export interface BookingOptions {
		AutoAcceptRequests?: boolean | null;
		AutoDeclineRecurringRequests?: boolean | null;
		AutoDeclineConflictingRequests?: boolean | null;
	}

	export interface DescribeResourceRequest {
		OrganizationId: string;
		ResourceId: string;
	}

	export interface DescribeUserResponse {
		UserId?: string | null;
		Name?: string | null;
		Email?: string | null;
		DisplayName?: string | null;
		State?: DescribeGroupResponseState | null;
		UserRole?: DescribeUserResponseUserRole | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}

	export enum DescribeUserResponseUserRole { USER = 0, RESOURCE = 1, SYSTEM_USER = 2 }

	export interface DescribeUserRequest {
		OrganizationId: string;
		UserId: string;
	}

	export interface DisassociateDelegateFromResourceResponse {
	}

	export interface DisassociateDelegateFromResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		EntityId: string;
	}

	export interface DisassociateMemberFromGroupResponse {
	}

	export interface DisassociateMemberFromGroupRequest {
		OrganizationId: string;
		GroupId: string;
		MemberId: string;
	}

	export interface GetAccessControlEffectResponse {
		Effect?: GetAccessControlEffectResponseEffect | null;
		MatchedRules?: Array<string> | null;
	}

	export enum GetAccessControlEffectResponseEffect { ALLOW = 0, DENY = 1 }

	export interface GetAccessControlEffectRequest {
		OrganizationId: string;
		IpAddress: string;
		Action: string;
		UserId: string;
	}

	export interface GetDefaultRetentionPolicyResponse {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		FolderConfigurations?: Array<FolderConfiguration> | null;
	}


	/** The configuration applied to an organization's folders by its retention policy. */
	export interface FolderConfiguration {
		Name: FolderConfigurationName;
		Action: FolderConfigurationAction;
		Period?: number | null;
	}

	export enum FolderConfigurationName { INBOX = 0, DELETED_ITEMS = 1, SENT_ITEMS = 2, DRAFTS = 3, JUNK_EMAIL = 4 }

	export enum FolderConfigurationAction { NONE = 0, DELETE = 1, PERMANENTLY_DELETE = 2 }

	export interface GetDefaultRetentionPolicyRequest {
		OrganizationId: string;
	}

	export interface GetMailboxDetailsResponse {
		MailboxQuota?: number | null;
		MailboxSize?: number | null;
	}

	export interface GetMailboxDetailsRequest {
		OrganizationId: string;
		UserId: string;
	}

	export interface ListAccessControlRulesResponse {
		Rules?: Array<AccessControlRule> | null;
	}


	/** A rule that controls access to an Amazon WorkMail organization. */
	export interface AccessControlRule {
		Name?: string | null;
		Effect?: GetAccessControlEffectResponseEffect | null;
		Description?: string | null;
		IpRanges?: Array<string> | null;
		NotIpRanges?: Array<string> | null;
		Actions?: Array<string> | null;
		NotActions?: Array<string> | null;
		UserIds?: Array<string> | null;
		NotUserIds?: Array<string> | null;
		DateCreated?: Date | null;
		DateModified?: Date | null;
	}

	export interface ListAccessControlRulesRequest {
		OrganizationId: string;
	}

	export interface ListAliasesResponse {
		Aliases?: Array<string> | null;
		NextToken?: string | null;
	}

	export interface ListAliasesRequest {
		OrganizationId: string;
		EntityId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListGroupMembersResponse {
		Members?: Array<Member> | null;
		NextToken?: string | null;
	}


	/** The representation of a user or group. */
	export interface Member {
		Id?: string | null;
		Name?: string | null;
		Type?: MemberType | null;
		State?: DescribeGroupResponseState | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}

	export enum MemberType { GROUP = 0, USER = 1 }

	export interface ListGroupMembersRequest {
		OrganizationId: string;
		GroupId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListGroupsResponse {
		Groups?: Array<Group> | null;
		NextToken?: string | null;
	}


	/** The representation of an Amazon WorkMail group. */
	export interface Group {
		Id?: string | null;
		Email?: string | null;
		Name?: string | null;
		State?: DescribeGroupResponseState | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}

	export interface ListGroupsRequest {
		OrganizationId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListMailboxPermissionsResponse {
		Permissions?: Array<Permission> | null;
		NextToken?: string | null;
	}


	/** Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox. */
	export interface Permission {
		GranteeId: string;
		GranteeType: MemberType;
		PermissionValues: Array<PermissionType>;
	}

	export enum PermissionType { FULL_ACCESS = 0, SEND_AS = 1, SEND_ON_BEHALF = 2 }

	export interface ListMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListOrganizationsResponse {
		OrganizationSummaries?: Array<OrganizationSummary> | null;
		NextToken?: string | null;
	}


	/** The representation of an organization. */
	export interface OrganizationSummary {
		OrganizationId?: string | null;
		Alias?: string | null;
		ErrorMessage?: string | null;
		State?: string | null;
	}

	export interface ListOrganizationsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListResourceDelegatesResponse {
		Delegates?: Array<Delegate> | null;
		NextToken?: string | null;
	}


	/** The name of the attribute, which is one of the values defined in the UserAttribute enumeration. */
	export interface Delegate {
		Id: string;
		Type: MemberType;
	}

	export interface ListResourceDelegatesRequest {
		OrganizationId: string;
		ResourceId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListResourcesResponse {
		Resources?: Array<Resource> | null;
		NextToken?: string | null;
	}


	/** The representation of a resource. */
	export interface Resource {
		Id?: string | null;
		Email?: string | null;
		Name?: string | null;
		Type?: CreateResourceRequestType | null;
		State?: DescribeGroupResponseState | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}

	export interface ListResourcesRequest {
		OrganizationId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag> | null;
	}


	/** Describes a tag applied to a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface ListUsersResponse {
		Users?: Array<User> | null;
		NextToken?: string | null;
	}


	/** The representation of an Amazon WorkMail user. */
	export interface User {
		Id?: string | null;
		Email?: string | null;
		Name?: string | null;
		DisplayName?: string | null;
		State?: DescribeGroupResponseState | null;
		UserRole?: DescribeUserResponseUserRole | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}

	export interface ListUsersRequest {
		OrganizationId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface PutAccessControlRuleResponse {
	}

	export interface PutAccessControlRuleRequest {
		Name: string;
		Effect: GetAccessControlEffectResponseEffect;
		Description: string;
		IpRanges?: Array<string> | null;
		NotIpRanges?: Array<string> | null;
		Actions?: Array<string> | null;
		NotActions?: Array<string> | null;
		UserIds?: Array<string> | null;
		NotUserIds?: Array<string> | null;
		OrganizationId: string;
	}

	export interface PutMailboxPermissionsResponse {
	}

	export interface PutMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		GranteeId: string;
		PermissionValues: Array<PermissionType>;
	}

	export interface PutRetentionPolicyResponse {
	}

	export interface PutRetentionPolicyRequest {
		OrganizationId: string;
		Id?: string | null;
		Name: string;
		Description?: string | null;
		FolderConfigurations: Array<FolderConfiguration>;
	}

	export interface RegisterToWorkMailResponse {
	}

	export interface RegisterToWorkMailRequest {
		OrganizationId: string;
		EntityId: string;
		Email: string;
	}

	export interface EntityAlreadyRegisteredException {
	}

	export interface ResetPasswordResponse {
	}

	export interface ResetPasswordRequest {
		OrganizationId: string;
		UserId: string;
		Password: string;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface TooManyTagsException {
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<string>;
	}

	export interface UpdateMailboxQuotaResponse {
	}

	export interface UpdateMailboxQuotaRequest {
		OrganizationId: string;
		UserId: string;
		MailboxQuota: number;
	}

	export interface UpdatePrimaryEmailAddressResponse {
	}

	export interface UpdatePrimaryEmailAddressRequest {
		OrganizationId: string;
		EntityId: string;
		Email: string;
	}

	export interface UpdateResourceResponse {
	}

	export interface UpdateResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		Name?: string | null;

		/** At least one delegate must be associated to the resource to disable automatic replies from the resource. */
		BookingOptions?: BookingOptions | null;
	}

	export interface InvalidConfigurationException {
	}

	export enum AccessControlRuleEffect { ALLOW = 0, DENY = 1 }

	export enum ResourceType { ROOM = 0, EQUIPMENT = 1 }

	export enum EntityState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export enum UserRole { USER = 0, RESOURCE = 1, SYSTEM_USER = 2 }

	export enum FolderName { INBOX = 0, DELETED_ITEMS = 1, SENT_ITEMS = 2, DRAFTS = 3, JUNK_EMAIL = 4 }

	export enum RetentionAction { NONE = 0, DELETE = 1, PERMANENTLY_DELETE = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds a member (user or group) to the resource's set of delegates.
		 * Post #X-Amz-Target=WorkMailService.AssociateDelegateToResource
		 * @return {AssociateDelegateToResourceResponse} Success
		 */
		AssociateDelegateToResource(requestBody: AssociateDelegateToResourceRequest): Observable<AssociateDelegateToResourceResponse> {
			return this.http.post<AssociateDelegateToResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.AssociateDelegateToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a member (user or group) to the group's set.
		 * Post #X-Amz-Target=WorkMailService.AssociateMemberToGroup
		 * @return {AssociateMemberToGroupResponse} Success
		 */
		AssociateMemberToGroup(requestBody: AssociateMemberToGroupRequest): Observable<AssociateMemberToGroupResponse> {
			return this.http.post<AssociateMemberToGroupResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.AssociateMemberToGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an alias to the set of a given member (user or group) of Amazon WorkMail.
		 * Post #X-Amz-Target=WorkMailService.CreateAlias
		 * @return {CreateAliasResponse} Success
		 */
		CreateAlias(requestBody: CreateAliasRequest): Observable<CreateAliasResponse> {
			return this.http.post<CreateAliasResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
		 * Post #X-Amz-Target=WorkMailService.CreateGroup
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupRequest): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new Amazon WorkMail resource.
		 * Post #X-Amz-Target=WorkMailService.CreateResource
		 * @return {CreateResourceResponse} Success
		 */
		CreateResource(requestBody: CreateResourceRequest): Observable<CreateResourceResponse> {
			return this.http.post<CreateResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
		 * Post #X-Amz-Target=WorkMailService.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an access control rule for the specified WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.DeleteAccessControlRule
		 * @return {DeleteAccessControlRuleResponse} Success
		 */
		DeleteAccessControlRule(requestBody: DeleteAccessControlRuleRequest): Observable<DeleteAccessControlRuleResponse> {
			return this.http.post<DeleteAccessControlRuleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteAccessControlRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove one or more specified aliases from a set of aliases for a given user.
		 * Post #X-Amz-Target=WorkMailService.DeleteAlias
		 * @return {DeleteAliasResponse} Success
		 */
		DeleteAlias(requestBody: DeleteAliasRequest): Observable<DeleteAliasResponse> {
			return this.http.post<DeleteAliasResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a group from Amazon WorkMail.
		 * Post #X-Amz-Target=WorkMailService.DeleteGroup
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(requestBody: DeleteGroupRequest): Observable<DeleteGroupResponse> {
			return this.http.post<DeleteGroupResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes permissions granted to a member (user or group).
		 * Post #X-Amz-Target=WorkMailService.DeleteMailboxPermissions
		 * @return {DeleteMailboxPermissionsResponse} Success
		 */
		DeleteMailboxPermissions(requestBody: DeleteMailboxPermissionsRequest): Observable<DeleteMailboxPermissionsResponse> {
			return this.http.post<DeleteMailboxPermissionsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteMailboxPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified resource.
		 * Post #X-Amz-Target=WorkMailService.DeleteResource
		 * @return {DeleteResourceResponse} Success
		 */
		DeleteResource(requestBody: DeleteResourceRequest): Observable<DeleteResourceResponse> {
			return this.http.post<DeleteResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified retention policy from the specified organization.
		 * Post #X-Amz-Target=WorkMailService.DeleteRetentionPolicy
		 * @return {DeleteRetentionPolicyResponse} Success
		 */
		DeleteRetentionPolicy(requestBody: DeleteRetentionPolicyRequest): Observable<DeleteRetentionPolicyResponse> {
			return this.http.post<DeleteRetentionPolicyResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteRetentionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
		 * Post #X-Amz-Target=WorkMailService.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<DeleteUserResponse> {
			return this.http.post<DeleteUserResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
		 * Post #X-Amz-Target=WorkMailService.DeregisterFromWorkMail
		 * @return {DeregisterFromWorkMailResponse} Success
		 */
		DeregisterFromWorkMail(requestBody: DeregisterFromWorkMailRequest): Observable<DeregisterFromWorkMailResponse> {
			return this.http.post<DeregisterFromWorkMailResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeregisterFromWorkMail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the data available for the group.
		 * Post #X-Amz-Target=WorkMailService.DescribeGroup
		 * @return {DescribeGroupResponse} Success
		 */
		DescribeGroup(requestBody: DescribeGroupRequest): Observable<DescribeGroupResponse> {
			return this.http.post<DescribeGroupResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DescribeGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides more information regarding a given organization based on its identifier.
		 * Post #X-Amz-Target=WorkMailService.DescribeOrganization
		 * @return {DescribeOrganizationResponse} Success
		 */
		DescribeOrganization(requestBody: DescribeOrganizationRequest): Observable<DescribeOrganizationResponse> {
			return this.http.post<DescribeOrganizationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DescribeOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the data available for the resource.
		 * Post #X-Amz-Target=WorkMailService.DescribeResource
		 * @return {DescribeResourceResponse} Success
		 */
		DescribeResource(requestBody: DescribeResourceRequest): Observable<DescribeResourceResponse> {
			return this.http.post<DescribeResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DescribeResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information regarding the user.
		 * Post #X-Amz-Target=WorkMailService.DescribeUser
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(requestBody: DescribeUserRequest): Observable<DescribeUserResponse> {
			return this.http.post<DescribeUserResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DescribeUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a member from the resource's set of delegates.
		 * Post #X-Amz-Target=WorkMailService.DisassociateDelegateFromResource
		 * @return {DisassociateDelegateFromResourceResponse} Success
		 */
		DisassociateDelegateFromResource(requestBody: DisassociateDelegateFromResourceRequest): Observable<DisassociateDelegateFromResourceResponse> {
			return this.http.post<DisassociateDelegateFromResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a member from a group.
		 * Post #X-Amz-Target=WorkMailService.DisassociateMemberFromGroup
		 * @return {DisassociateMemberFromGroupResponse} Success
		 */
		DisassociateMemberFromGroup(requestBody: DisassociateMemberFromGroupRequest): Observable<DisassociateMemberFromGroupResponse> {
			return this.http.post<DisassociateMemberFromGroupResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.
		 * Post #X-Amz-Target=WorkMailService.GetAccessControlEffect
		 * @return {GetAccessControlEffectResponse} Success
		 */
		GetAccessControlEffect(requestBody: GetAccessControlEffectRequest): Observable<GetAccessControlEffectResponse> {
			return this.http.post<GetAccessControlEffectResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.GetAccessControlEffect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the default retention policy details for the specified organization.
		 * Post #X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy
		 * @return {GetDefaultRetentionPolicyResponse} Success
		 */
		GetDefaultRetentionPolicy(requestBody: GetDefaultRetentionPolicyRequest): Observable<GetDefaultRetentionPolicyResponse> {
			return this.http.post<GetDefaultRetentionPolicyResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests a user's mailbox details for a specified organization and user.
		 * Post #X-Amz-Target=WorkMailService.GetMailboxDetails
		 * @return {GetMailboxDetailsResponse} Success
		 */
		GetMailboxDetails(requestBody: GetMailboxDetailsRequest): Observable<GetMailboxDetailsResponse> {
			return this.http.post<GetMailboxDetailsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.GetMailboxDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the access control rules for the specified organization.
		 * Post #X-Amz-Target=WorkMailService.ListAccessControlRules
		 * @return {ListAccessControlRulesResponse} Success
		 */
		ListAccessControlRules(requestBody: ListAccessControlRulesRequest): Observable<ListAccessControlRulesResponse> {
			return this.http.post<ListAccessControlRulesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListAccessControlRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a paginated call to list the aliases associated with a given entity.
		 * Post #X-Amz-Target=WorkMailService.ListAliases
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAliasesResponse} Success
		 */
		ListAliases(MaxResults: string, NextToken: string, requestBody: ListAliasesRequest): Observable<ListAliasesResponse> {
			return this.http.post<ListAliasesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListAliases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an overview of the members of a group. Users and groups can be members of a group.
		 * Post #X-Amz-Target=WorkMailService.ListGroupMembers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupMembersResponse} Success
		 */
		ListGroupMembers(MaxResults: string, NextToken: string, requestBody: ListGroupMembersRequest): Observable<ListGroupMembersResponse> {
			return this.http.post<ListGroupMembersResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListGroupMembers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns summaries of the organization's groups.
		 * Post #X-Amz-Target=WorkMailService.ListGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(MaxResults: string, NextToken: string, requestBody: ListGroupsRequest): Observable<ListGroupsResponse> {
			return this.http.post<ListGroupsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the mailbox permissions associated with a user, group, or resource mailbox.
		 * Post #X-Amz-Target=WorkMailService.ListMailboxPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMailboxPermissionsResponse} Success
		 */
		ListMailboxPermissions(MaxResults: string, NextToken: string, requestBody: ListMailboxPermissionsRequest): Observable<ListMailboxPermissionsResponse> {
			return this.http.post<ListMailboxPermissionsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListMailboxPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns summaries of the customer's organizations.
		 * Post #X-Amz-Target=WorkMailService.ListOrganizations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationsResponse} Success
		 */
		ListOrganizations(MaxResults: string, NextToken: string, requestBody: ListOrganizationsRequest): Observable<ListOrganizationsResponse> {
			return this.http.post<ListOrganizationsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListOrganizations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
		 * Post #X-Amz-Target=WorkMailService.ListResourceDelegates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceDelegatesResponse} Success
		 */
		ListResourceDelegates(MaxResults: string, NextToken: string, requestBody: ListResourceDelegatesRequest): Observable<ListResourceDelegatesResponse> {
			return this.http.post<ListResourceDelegatesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListResourceDelegates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns summaries of the organization's resources.
		 * Post #X-Amz-Target=WorkMailService.ListResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(MaxResults: string, NextToken: string, requestBody: ListResourcesRequest): Observable<ListResourcesResponse> {
			return this.http.post<ListResourcesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags applied to an Amazon WorkMail organization resource.
		 * Post #X-Amz-Target=WorkMailService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns summaries of the organization's users.
		 * Post #X-Amz-Target=WorkMailService.ListUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(MaxResults: string, NextToken: string, requestBody: ListUsersRequest): Observable<ListUsersResponse> {
			return this.http.post<ListUsersResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
		 * Post #X-Amz-Target=WorkMailService.PutAccessControlRule
		 * @return {PutAccessControlRuleResponse} Success
		 */
		PutAccessControlRule(requestBody: PutAccessControlRuleRequest): Observable<PutAccessControlRuleResponse> {
			return this.http.post<PutAccessControlRuleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.PutAccessControlRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
		 * Post #X-Amz-Target=WorkMailService.PutMailboxPermissions
		 * @return {PutMailboxPermissionsResponse} Success
		 */
		PutMailboxPermissions(requestBody: PutMailboxPermissionsRequest): Observable<PutMailboxPermissionsResponse> {
			return this.http.post<PutMailboxPermissionsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.PutMailboxPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Puts a retention policy to the specified organization.
		 * Post #X-Amz-Target=WorkMailService.PutRetentionPolicy
		 * @return {PutRetentionPolicyResponse} Success
		 */
		PutRetentionPolicy(requestBody: PutRetentionPolicyRequest): Observable<PutRetentionPolicyResponse> {
			return this.http.post<PutRetentionPolicyResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.PutRetentionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. </p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
		 * Post #X-Amz-Target=WorkMailService.RegisterToWorkMail
		 * @return {RegisterToWorkMailResponse} Success
		 */
		RegisterToWorkMail(requestBody: RegisterToWorkMailRequest): Observable<RegisterToWorkMailResponse> {
			return this.http.post<RegisterToWorkMailResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.RegisterToWorkMail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows the administrator to reset the password for a user.
		 * Post #X-Amz-Target=WorkMailService.ResetPassword
		 * @return {ResetPasswordResponse} Success
		 */
		ResetPassword(requestBody: ResetPasswordRequest): Observable<ResetPasswordResponse> {
			return this.http.post<ResetPasswordResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ResetPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies the specified tags to the specified Amazon WorkMail organization resource.
		 * Post #X-Amz-Target=WorkMailService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Untags the specified tags from the specified Amazon WorkMail organization resource.
		 * Post #X-Amz-Target=WorkMailService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a user's current mailbox quota for a specified organization and user.
		 * Post #X-Amz-Target=WorkMailService.UpdateMailboxQuota
		 * @return {UpdateMailboxQuotaResponse} Success
		 */
		UpdateMailboxQuota(requestBody: UpdateMailboxQuotaRequest): Observable<UpdateMailboxQuotaResponse> {
			return this.http.post<UpdateMailboxQuotaResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UpdateMailboxQuota', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
		 * Post #X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress
		 * @return {UpdatePrimaryEmailAddressResponse} Success
		 */
		UpdatePrimaryEmailAddress(requestBody: UpdatePrimaryEmailAddressRequest): Observable<UpdatePrimaryEmailAddressResponse> {
			return this.http.post<UpdatePrimaryEmailAddressResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.
		 * Post #X-Amz-Target=WorkMailService.UpdateResource
		 * @return {UpdateResourceResponse} Success
		 */
		UpdateResource(requestBody: UpdateResourceRequest): Observable<UpdateResourceResponse> {
			return this.http.post<UpdateResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UpdateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateDelegateToResourceX_Amz_Target { WorkMailService_AssociateDelegateToResource = 0 }

	export enum AssociateMemberToGroupX_Amz_Target { WorkMailService_AssociateMemberToGroup = 0 }

	export enum CreateAliasX_Amz_Target { WorkMailService_CreateAlias = 0 }

	export enum CreateGroupX_Amz_Target { WorkMailService_CreateGroup = 0 }

	export enum CreateResourceX_Amz_Target { WorkMailService_CreateResource = 0 }

	export enum CreateUserX_Amz_Target { WorkMailService_CreateUser = 0 }

	export enum DeleteAccessControlRuleX_Amz_Target { WorkMailService_DeleteAccessControlRule = 0 }

	export enum DeleteAliasX_Amz_Target { WorkMailService_DeleteAlias = 0 }

	export enum DeleteGroupX_Amz_Target { WorkMailService_DeleteGroup = 0 }

	export enum DeleteMailboxPermissionsX_Amz_Target { WorkMailService_DeleteMailboxPermissions = 0 }

	export enum DeleteResourceX_Amz_Target { WorkMailService_DeleteResource = 0 }

	export enum DeleteRetentionPolicyX_Amz_Target { WorkMailService_DeleteRetentionPolicy = 0 }

	export enum DeleteUserX_Amz_Target { WorkMailService_DeleteUser = 0 }

	export enum DeregisterFromWorkMailX_Amz_Target { WorkMailService_DeregisterFromWorkMail = 0 }

	export enum DescribeGroupX_Amz_Target { WorkMailService_DescribeGroup = 0 }

	export enum DescribeOrganizationX_Amz_Target { WorkMailService_DescribeOrganization = 0 }

	export enum DescribeResourceX_Amz_Target { WorkMailService_DescribeResource = 0 }

	export enum DescribeUserX_Amz_Target { WorkMailService_DescribeUser = 0 }

	export enum DisassociateDelegateFromResourceX_Amz_Target { WorkMailService_DisassociateDelegateFromResource = 0 }

	export enum DisassociateMemberFromGroupX_Amz_Target { WorkMailService_DisassociateMemberFromGroup = 0 }

	export enum GetAccessControlEffectX_Amz_Target { WorkMailService_GetAccessControlEffect = 0 }

	export enum GetDefaultRetentionPolicyX_Amz_Target { WorkMailService_GetDefaultRetentionPolicy = 0 }

	export enum GetMailboxDetailsX_Amz_Target { WorkMailService_GetMailboxDetails = 0 }

	export enum ListAccessControlRulesX_Amz_Target { WorkMailService_ListAccessControlRules = 0 }

	export enum ListAliasesX_Amz_Target { WorkMailService_ListAliases = 0 }

	export enum ListGroupMembersX_Amz_Target { WorkMailService_ListGroupMembers = 0 }

	export enum ListGroupsX_Amz_Target { WorkMailService_ListGroups = 0 }

	export enum ListMailboxPermissionsX_Amz_Target { WorkMailService_ListMailboxPermissions = 0 }

	export enum ListOrganizationsX_Amz_Target { WorkMailService_ListOrganizations = 0 }

	export enum ListResourceDelegatesX_Amz_Target { WorkMailService_ListResourceDelegates = 0 }

	export enum ListResourcesX_Amz_Target { WorkMailService_ListResources = 0 }

	export enum ListTagsForResourceX_Amz_Target { WorkMailService_ListTagsForResource = 0 }

	export enum ListUsersX_Amz_Target { WorkMailService_ListUsers = 0 }

	export enum PutAccessControlRuleX_Amz_Target { WorkMailService_PutAccessControlRule = 0 }

	export enum PutMailboxPermissionsX_Amz_Target { WorkMailService_PutMailboxPermissions = 0 }

	export enum PutRetentionPolicyX_Amz_Target { WorkMailService_PutRetentionPolicy = 0 }

	export enum RegisterToWorkMailX_Amz_Target { WorkMailService_RegisterToWorkMail = 0 }

	export enum ResetPasswordX_Amz_Target { WorkMailService_ResetPassword = 0 }

	export enum TagResourceX_Amz_Target { WorkMailService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { WorkMailService_UntagResource = 0 }

	export enum UpdateMailboxQuotaX_Amz_Target { WorkMailService_UpdateMailboxQuota = 0 }

	export enum UpdatePrimaryEmailAddressX_Amz_Target { WorkMailService_UpdatePrimaryEmailAddress = 0 }

	export enum UpdateResourceX_Amz_Target { WorkMailService_UpdateResource = 0 }

}

