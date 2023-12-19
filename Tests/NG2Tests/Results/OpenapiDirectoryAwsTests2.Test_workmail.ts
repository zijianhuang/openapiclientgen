import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateDelegateToResourceResponse {
	}
	export interface AssociateDelegateToResourceResponseFormProperties {
	}
	export function CreateAssociateDelegateToResourceResponseFormGroup() {
		return new FormGroup<AssociateDelegateToResourceResponseFormProperties>({
		});

	}

	export interface AssociateDelegateToResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		EntityId: string;
	}
	export interface AssociateDelegateToResourceRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDelegateToResourceRequestFormGroup() {
		return new FormGroup<AssociateDelegateToResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntityNotFoundException {
	}
	export interface EntityNotFoundExceptionFormProperties {
	}
	export function CreateEntityNotFoundExceptionFormGroup() {
		return new FormGroup<EntityNotFoundExceptionFormProperties>({
		});

	}

	export interface EntityStateException {
	}
	export interface EntityStateExceptionFormProperties {
	}
	export function CreateEntityStateExceptionFormGroup() {
		return new FormGroup<EntityStateExceptionFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface OrganizationNotFoundException {
	}
	export interface OrganizationNotFoundExceptionFormProperties {
	}
	export function CreateOrganizationNotFoundExceptionFormGroup() {
		return new FormGroup<OrganizationNotFoundExceptionFormProperties>({
		});

	}

	export interface OrganizationStateException {
	}
	export interface OrganizationStateExceptionFormProperties {
	}
	export function CreateOrganizationStateExceptionFormGroup() {
		return new FormGroup<OrganizationStateExceptionFormProperties>({
		});

	}

	export interface AssociateMemberToGroupResponse {
	}
	export interface AssociateMemberToGroupResponseFormProperties {
	}
	export function CreateAssociateMemberToGroupResponseFormGroup() {
		return new FormGroup<AssociateMemberToGroupResponseFormProperties>({
		});

	}

	export interface AssociateMemberToGroupRequest {
		OrganizationId: string;
		GroupId: string;
		MemberId: string;
	}
	export interface AssociateMemberToGroupRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMemberToGroupRequestFormGroup() {
		return new FormGroup<AssociateMemberToGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DirectoryServiceAuthenticationFailedException {
	}
	export interface DirectoryServiceAuthenticationFailedExceptionFormProperties {
	}
	export function CreateDirectoryServiceAuthenticationFailedExceptionFormGroup() {
		return new FormGroup<DirectoryServiceAuthenticationFailedExceptionFormProperties>({
		});

	}

	export interface DirectoryUnavailableException {
	}
	export interface DirectoryUnavailableExceptionFormProperties {
	}
	export function CreateDirectoryUnavailableExceptionFormGroup() {
		return new FormGroup<DirectoryUnavailableExceptionFormProperties>({
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface CreateAliasResponse {
	}
	export interface CreateAliasResponseFormProperties {
	}
	export function CreateCreateAliasResponseFormGroup() {
		return new FormGroup<CreateAliasResponseFormProperties>({
		});

	}

	export interface CreateAliasRequest {
		OrganizationId: string;
		EntityId: string;
		Alias: string;
	}
	export interface CreateAliasRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailAddressInUseException {
	}
	export interface EmailAddressInUseExceptionFormProperties {
	}
	export function CreateEmailAddressInUseExceptionFormGroup() {
		return new FormGroup<EmailAddressInUseExceptionFormProperties>({
		});

	}

	export interface MailDomainNotFoundException {
	}
	export interface MailDomainNotFoundExceptionFormProperties {
	}
	export function CreateMailDomainNotFoundExceptionFormGroup() {
		return new FormGroup<MailDomainNotFoundExceptionFormProperties>({
		});

	}

	export interface MailDomainStateException {
	}
	export interface MailDomainStateExceptionFormProperties {
	}
	export function CreateMailDomainStateExceptionFormGroup() {
		return new FormGroup<MailDomainStateExceptionFormProperties>({
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

	export interface CreateGroupResponse {
		GroupId?: string | null;
	}
	export interface CreateGroupResponseFormProperties {
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupRequest {
		OrganizationId: string;
		Name: string;
	}
	export interface CreateGroupRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NameAvailabilityException {
	}
	export interface NameAvailabilityExceptionFormProperties {
	}
	export function CreateNameAvailabilityExceptionFormGroup() {
		return new FormGroup<NameAvailabilityExceptionFormProperties>({
		});

	}

	export interface ReservedNameException {
	}
	export interface ReservedNameExceptionFormProperties {
	}
	export function CreateReservedNameExceptionFormGroup() {
		return new FormGroup<ReservedNameExceptionFormProperties>({
		});

	}

	export interface CreateResourceResponse {
		ResourceId?: string | null;
	}
	export interface CreateResourceResponseFormProperties {
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceResponseFormGroup() {
		return new FormGroup<CreateResourceResponseFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceRequest {
		OrganizationId: string;
		Name: string;
		Type: CreateResourceRequestType;
	}
	export interface CreateResourceRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<CreateResourceRequestType | null | undefined>,
	}
	export function CreateCreateResourceRequestFormGroup() {
		return new FormGroup<CreateResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<CreateResourceRequestType | null | undefined>(undefined),
		});

	}

	export enum CreateResourceRequestType { ROOM = 0, EQUIPMENT = 1 }

	export interface CreateUserResponse {
		UserId?: string | null;
	}
	export interface CreateUserResponseFormProperties {
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserRequest {
		OrganizationId: string;
		Name: string;
		DisplayName: string;
		Password: string;
	}
	export interface CreateUserRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidPasswordException {
	}
	export interface InvalidPasswordExceptionFormProperties {
	}
	export function CreateInvalidPasswordExceptionFormGroup() {
		return new FormGroup<InvalidPasswordExceptionFormProperties>({
		});

	}

	export interface DeleteAccessControlRuleResponse {
	}
	export interface DeleteAccessControlRuleResponseFormProperties {
	}
	export function CreateDeleteAccessControlRuleResponseFormGroup() {
		return new FormGroup<DeleteAccessControlRuleResponseFormProperties>({
		});

	}

	export interface DeleteAccessControlRuleRequest {
		OrganizationId: string;
		Name: string;
	}
	export interface DeleteAccessControlRuleRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccessControlRuleRequestFormGroup() {
		return new FormGroup<DeleteAccessControlRuleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAliasResponse {
	}
	export interface DeleteAliasResponseFormProperties {
	}
	export function CreateDeleteAliasResponseFormGroup() {
		return new FormGroup<DeleteAliasResponseFormProperties>({
		});

	}

	export interface DeleteAliasRequest {
		OrganizationId: string;
		EntityId: string;
		Alias: string;
	}
	export interface DeleteAliasRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAliasRequestFormGroup() {
		return new FormGroup<DeleteAliasRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupResponse {
	}
	export interface DeleteGroupResponseFormProperties {
	}
	export function CreateDeleteGroupResponseFormGroup() {
		return new FormGroup<DeleteGroupResponseFormProperties>({
		});

	}

	export interface DeleteGroupRequest {
		OrganizationId: string;
		GroupId: string;
	}
	export interface DeleteGroupRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMailboxPermissionsResponse {
	}
	export interface DeleteMailboxPermissionsResponseFormProperties {
	}
	export function CreateDeleteMailboxPermissionsResponseFormGroup() {
		return new FormGroup<DeleteMailboxPermissionsResponseFormProperties>({
		});

	}

	export interface DeleteMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		GranteeId: string;
	}
	export interface DeleteMailboxPermissionsRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		GranteeId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMailboxPermissionsRequestFormGroup() {
		return new FormGroup<DeleteMailboxPermissionsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			GranteeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteResourceResponse {
	}
	export interface DeleteResourceResponseFormProperties {
	}
	export function CreateDeleteResourceResponseFormGroup() {
		return new FormGroup<DeleteResourceResponseFormProperties>({
		});

	}

	export interface DeleteResourceRequest {
		OrganizationId: string;
		ResourceId: string;
	}
	export interface DeleteResourceRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceRequestFormGroup() {
		return new FormGroup<DeleteResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRetentionPolicyResponse {
	}
	export interface DeleteRetentionPolicyResponseFormProperties {
	}
	export function CreateDeleteRetentionPolicyResponseFormGroup() {
		return new FormGroup<DeleteRetentionPolicyResponseFormProperties>({
		});

	}

	export interface DeleteRetentionPolicyRequest {
		OrganizationId: string;
		Id: string;
	}
	export interface DeleteRetentionPolicyRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRetentionPolicyRequestFormGroup() {
		return new FormGroup<DeleteRetentionPolicyRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteUserResponse {
	}
	export interface DeleteUserResponseFormProperties {
	}
	export function CreateDeleteUserResponseFormGroup() {
		return new FormGroup<DeleteUserResponseFormProperties>({
		});

	}

	export interface DeleteUserRequest {
		OrganizationId: string;
		UserId: string;
	}
	export interface DeleteUserRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeregisterFromWorkMailResponse {
	}
	export interface DeregisterFromWorkMailResponseFormProperties {
	}
	export function CreateDeregisterFromWorkMailResponseFormGroup() {
		return new FormGroup<DeregisterFromWorkMailResponseFormProperties>({
		});

	}

	export interface DeregisterFromWorkMailRequest {
		OrganizationId: string;
		EntityId: string;
	}
	export interface DeregisterFromWorkMailRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterFromWorkMailRequestFormGroup() {
		return new FormGroup<DeregisterFromWorkMailRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGroupResponse {
		GroupId?: string | null;
		Name?: string | null;
		Email?: string | null;
		State?: DescribeGroupResponseState | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}
	export interface DescribeGroupResponseFormProperties {
		GroupId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		State: FormControl<DescribeGroupResponseState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeGroupResponseFormGroup() {
		return new FormGroup<DescribeGroupResponseFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DescribeGroupResponseState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeGroupResponseState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface DescribeGroupRequest {
		OrganizationId: string;
		GroupId: string;
	}
	export interface DescribeGroupRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGroupRequestFormGroup() {
		return new FormGroup<DescribeGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface DescribeOrganizationResponseFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		DirectoryId: FormControl<string | null | undefined>,
		DirectoryType: FormControl<string | null | undefined>,
		DefaultMailDomain: FormControl<string | null | undefined>,
		CompletedDate: FormControl<Date | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationResponseFormGroup() {
		return new FormGroup<DescribeOrganizationResponseFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			DirectoryType: new FormControl<string | null | undefined>(undefined),
			DefaultMailDomain: new FormControl<string | null | undefined>(undefined),
			CompletedDate: new FormControl<Date | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationRequest {
		OrganizationId: string;
	}
	export interface DescribeOrganizationRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationRequestFormGroup() {
		return new FormGroup<DescribeOrganizationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeResourceResponse {
		ResourceId?: string | null;
		Email?: string | null;
		Name?: string | null;
		Type?: CreateResourceRequestType | null;

		/** At least one delegate must be associated to the resource to disable automatic replies from the resource. */
		BookingOptions?: BookingOptions;
		State?: DescribeGroupResponseState | null;
		EnabledDate?: Date | null;
		DisabledDate?: Date | null;
	}
	export interface DescribeResourceResponseFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<CreateResourceRequestType | null | undefined>,
		State: FormControl<DescribeGroupResponseState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeResourceResponseFormGroup() {
		return new FormGroup<DescribeResourceResponseFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<CreateResourceRequestType | null | undefined>(undefined),
			State: new FormControl<DescribeGroupResponseState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** At least one delegate must be associated to the resource to disable automatic replies from the resource. */
	export interface BookingOptions {
		AutoAcceptRequests?: boolean | null;
		AutoDeclineRecurringRequests?: boolean | null;
		AutoDeclineConflictingRequests?: boolean | null;
	}

	/** At least one delegate must be associated to the resource to disable automatic replies from the resource. */
	export interface BookingOptionsFormProperties {
		AutoAcceptRequests: FormControl<boolean | null | undefined>,
		AutoDeclineRecurringRequests: FormControl<boolean | null | undefined>,
		AutoDeclineConflictingRequests: FormControl<boolean | null | undefined>,
	}
	export function CreateBookingOptionsFormGroup() {
		return new FormGroup<BookingOptionsFormProperties>({
			AutoAcceptRequests: new FormControl<boolean | null | undefined>(undefined),
			AutoDeclineRecurringRequests: new FormControl<boolean | null | undefined>(undefined),
			AutoDeclineConflictingRequests: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeResourceRequest {
		OrganizationId: string;
		ResourceId: string;
	}
	export interface DescribeResourceRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourceRequestFormGroup() {
		return new FormGroup<DescribeResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface DescribeUserResponseFormProperties {
		UserId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		State: FormControl<DescribeGroupResponseState | null | undefined>,
		UserRole: FormControl<DescribeUserResponseUserRole | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DescribeGroupResponseState | null | undefined>(undefined),
			UserRole: new FormControl<DescribeUserResponseUserRole | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeUserResponseUserRole { USER = 0, RESOURCE = 1, SYSTEM_USER = 2 }

	export interface DescribeUserRequest {
		OrganizationId: string;
		UserId: string;
	}
	export interface DescribeUserRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserRequestFormGroup() {
		return new FormGroup<DescribeUserRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateDelegateFromResourceResponse {
	}
	export interface DisassociateDelegateFromResourceResponseFormProperties {
	}
	export function CreateDisassociateDelegateFromResourceResponseFormGroup() {
		return new FormGroup<DisassociateDelegateFromResourceResponseFormProperties>({
		});

	}

	export interface DisassociateDelegateFromResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		EntityId: string;
	}
	export interface DisassociateDelegateFromResourceRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDelegateFromResourceRequestFormGroup() {
		return new FormGroup<DisassociateDelegateFromResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateMemberFromGroupResponse {
	}
	export interface DisassociateMemberFromGroupResponseFormProperties {
	}
	export function CreateDisassociateMemberFromGroupResponseFormGroup() {
		return new FormGroup<DisassociateMemberFromGroupResponseFormProperties>({
		});

	}

	export interface DisassociateMemberFromGroupRequest {
		OrganizationId: string;
		GroupId: string;
		MemberId: string;
	}
	export interface DisassociateMemberFromGroupRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMemberFromGroupRequestFormGroup() {
		return new FormGroup<DisassociateMemberFromGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			MemberId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccessControlEffectResponse {
		Effect?: GetAccessControlEffectResponseEffect | null;
		MatchedRules?: Array<string>;
	}
	export interface GetAccessControlEffectResponseFormProperties {
		Effect: FormControl<GetAccessControlEffectResponseEffect | null | undefined>,
	}
	export function CreateGetAccessControlEffectResponseFormGroup() {
		return new FormGroup<GetAccessControlEffectResponseFormProperties>({
			Effect: new FormControl<GetAccessControlEffectResponseEffect | null | undefined>(undefined),
		});

	}

	export enum GetAccessControlEffectResponseEffect { ALLOW = 0, DENY = 1 }

	export interface GetAccessControlEffectRequest {
		OrganizationId: string;
		IpAddress: string;
		Action: string;
		UserId: string;
	}
	export interface GetAccessControlEffectRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		Action: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessControlEffectRequestFormGroup() {
		return new FormGroup<GetAccessControlEffectRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDefaultRetentionPolicyResponse {
		Id?: string | null;
		Name?: string | null;
		Description?: string | null;
		FolderConfigurations?: Array<FolderConfiguration>;
	}
	export interface GetDefaultRetentionPolicyResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGetDefaultRetentionPolicyResponseFormGroup() {
		return new FormGroup<GetDefaultRetentionPolicyResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration applied to an organization's folders by its retention policy. */
	export interface FolderConfiguration {
		Name: FolderConfigurationName;
		Action: FolderConfigurationAction;
		Period?: number | null;
	}

	/** The configuration applied to an organization's folders by its retention policy. */
	export interface FolderConfigurationFormProperties {
		Name: FormControl<FolderConfigurationName | null | undefined>,
		Action: FormControl<FolderConfigurationAction | null | undefined>,
		Period: FormControl<number | null | undefined>,
	}
	export function CreateFolderConfigurationFormGroup() {
		return new FormGroup<FolderConfigurationFormProperties>({
			Name: new FormControl<FolderConfigurationName | null | undefined>(undefined),
			Action: new FormControl<FolderConfigurationAction | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FolderConfigurationName { INBOX = 0, DELETED_ITEMS = 1, SENT_ITEMS = 2, DRAFTS = 3, JUNK_EMAIL = 4 }

	export enum FolderConfigurationAction { NONE = 0, DELETE = 1, PERMANENTLY_DELETE = 2 }

	export interface GetDefaultRetentionPolicyRequest {
		OrganizationId: string;
	}
	export interface GetDefaultRetentionPolicyRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateGetDefaultRetentionPolicyRequestFormGroup() {
		return new FormGroup<GetDefaultRetentionPolicyRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMailboxDetailsResponse {
		MailboxQuota?: number | null;
		MailboxSize?: number | null;
	}
	export interface GetMailboxDetailsResponseFormProperties {
		MailboxQuota: FormControl<number | null | undefined>,
		MailboxSize: FormControl<number | null | undefined>,
	}
	export function CreateGetMailboxDetailsResponseFormGroup() {
		return new FormGroup<GetMailboxDetailsResponseFormProperties>({
			MailboxQuota: new FormControl<number | null | undefined>(undefined),
			MailboxSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMailboxDetailsRequest {
		OrganizationId: string;
		UserId: string;
	}
	export interface GetMailboxDetailsRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateGetMailboxDetailsRequestFormGroup() {
		return new FormGroup<GetMailboxDetailsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccessControlRulesResponse {
		Rules?: Array<AccessControlRule>;
	}
	export interface ListAccessControlRulesResponseFormProperties {
	}
	export function CreateListAccessControlRulesResponseFormGroup() {
		return new FormGroup<ListAccessControlRulesResponseFormProperties>({
		});

	}


	/** A rule that controls access to an Amazon WorkMail organization. */
	export interface AccessControlRule {
		Name?: string | null;
		Effect?: GetAccessControlEffectResponseEffect | null;
		Description?: string | null;
		IpRanges?: Array<string>;
		NotIpRanges?: Array<string>;
		Actions?: Array<string>;
		NotActions?: Array<string>;
		UserIds?: Array<string>;
		NotUserIds?: Array<string>;
		DateCreated?: Date | null;
		DateModified?: Date | null;
	}

	/** A rule that controls access to an Amazon WorkMail organization. */
	export interface AccessControlRuleFormProperties {
		Name: FormControl<string | null | undefined>,
		Effect: FormControl<GetAccessControlEffectResponseEffect | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
	}
	export function CreateAccessControlRuleFormGroup() {
		return new FormGroup<AccessControlRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<GetAccessControlEffectResponseEffect | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAccessControlRulesRequest {
		OrganizationId: string;
	}
	export interface ListAccessControlRulesRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateListAccessControlRulesRequestFormGroup() {
		return new FormGroup<ListAccessControlRulesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAliasesResponse {
		Aliases?: Array<string>;
		NextToken?: string | null;
	}
	export interface ListAliasesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAliasesResponseFormGroup() {
		return new FormGroup<ListAliasesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAliasesRequest {
		OrganizationId: string;
		EntityId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListAliasesRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAliasesRequestFormGroup() {
		return new FormGroup<ListAliasesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupMembersResponse {
		Members?: Array<Member>;
		NextToken?: string | null;
	}
	export interface ListGroupMembersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupMembersResponseFormGroup() {
		return new FormGroup<ListGroupMembersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** The representation of a user or group. */
	export interface MemberFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<MemberType | null | undefined>,
		State: FormControl<DescribeGroupResponseState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<MemberType | null | undefined>(undefined),
			State: new FormControl<DescribeGroupResponseState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MemberType { GROUP = 0, USER = 1 }

	export interface ListGroupMembersRequest {
		OrganizationId: string;
		GroupId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListGroupMembersRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupMembersRequestFormGroup() {
		return new FormGroup<ListGroupMembersRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupsResponse {
		Groups?: Array<Group>;
		NextToken?: string | null;
	}
	export interface ListGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** The representation of an Amazon WorkMail group. */
	export interface GroupFormProperties {
		Id: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<DescribeGroupResponseState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DescribeGroupResponseState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListGroupsRequest {
		OrganizationId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListGroupsRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMailboxPermissionsResponse {
		Permissions?: Array<Permission>;
		NextToken?: string | null;
	}
	export interface ListMailboxPermissionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMailboxPermissionsResponseFormGroup() {
		return new FormGroup<ListMailboxPermissionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox. */
	export interface Permission {
		GranteeId: string;
		GranteeType: MemberType;
		PermissionValues: Array<PermissionType>;
	}

	/** Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox. */
	export interface PermissionFormProperties {
		GranteeId: FormControl<string | null | undefined>,
		GranteeType: FormControl<MemberType | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			GranteeId: new FormControl<string | null | undefined>(undefined),
			GranteeType: new FormControl<MemberType | null | undefined>(undefined),
		});

	}

	export enum PermissionType { FULL_ACCESS = 0, SEND_AS = 1, SEND_ON_BEHALF = 2 }

	export interface ListMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListMailboxPermissionsRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMailboxPermissionsRequestFormGroup() {
		return new FormGroup<ListMailboxPermissionsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationsResponse {
		OrganizationSummaries?: Array<OrganizationSummary>;
		NextToken?: string | null;
	}
	export interface ListOrganizationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationsResponseFormGroup() {
		return new FormGroup<ListOrganizationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The representation of an organization. */
	export interface OrganizationSummary {
		OrganizationId?: string | null;
		Alias?: string | null;
		ErrorMessage?: string | null;
		State?: string | null;
	}

	/** The representation of an organization. */
	export interface OrganizationSummaryFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationSummaryFormGroup() {
		return new FormGroup<OrganizationSummaryFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListOrganizationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListOrganizationsRequestFormGroup() {
		return new FormGroup<ListOrganizationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourceDelegatesResponse {
		Delegates?: Array<Delegate>;
		NextToken?: string | null;
	}
	export interface ListResourceDelegatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceDelegatesResponseFormGroup() {
		return new FormGroup<ListResourceDelegatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name of the attribute, which is one of the values defined in the UserAttribute enumeration. */
	export interface Delegate {
		Id: string;
		Type: MemberType;
	}

	/** The name of the attribute, which is one of the values defined in the UserAttribute enumeration. */
	export interface DelegateFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<MemberType | null | undefined>,
	}
	export function CreateDelegateFormGroup() {
		return new FormGroup<DelegateFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<MemberType | null | undefined>(undefined),
		});

	}

	export interface ListResourceDelegatesRequest {
		OrganizationId: string;
		ResourceId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListResourceDelegatesRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceDelegatesRequestFormGroup() {
		return new FormGroup<ListResourceDelegatesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourcesResponse {
		Resources?: Array<Resource>;
		NextToken?: string | null;
	}
	export interface ListResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesResponseFormGroup() {
		return new FormGroup<ListResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** The representation of a resource. */
	export interface ResourceFormProperties {
		Id: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<CreateResourceRequestType | null | undefined>,
		State: FormControl<DescribeGroupResponseState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<CreateResourceRequestType | null | undefined>(undefined),
			State: new FormControl<DescribeGroupResponseState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListResourcesRequest {
		OrganizationId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListResourcesRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourcesRequestFormGroup() {
		return new FormGroup<ListResourcesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** Describes a tag applied to a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** Describes a tag applied to a resource. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
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

	export interface ListUsersResponse {
		Users?: Array<User>;
		NextToken?: string | null;
	}
	export interface ListUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** The representation of an Amazon WorkMail user. */
	export interface UserFormProperties {
		Id: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		State: FormControl<DescribeGroupResponseState | null | undefined>,
		UserRole: FormControl<DescribeUserResponseUserRole | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DescribeGroupResponseState | null | undefined>(undefined),
			UserRole: new FormControl<DescribeUserResponseUserRole | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListUsersRequest {
		OrganizationId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListUsersRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutAccessControlRuleResponse {
	}
	export interface PutAccessControlRuleResponseFormProperties {
	}
	export function CreatePutAccessControlRuleResponseFormGroup() {
		return new FormGroup<PutAccessControlRuleResponseFormProperties>({
		});

	}

	export interface PutAccessControlRuleRequest {
		Name: string;
		Effect: GetAccessControlEffectResponseEffect;
		Description: string;
		IpRanges?: Array<string>;
		NotIpRanges?: Array<string>;
		Actions?: Array<string>;
		NotActions?: Array<string>;
		UserIds?: Array<string>;
		NotUserIds?: Array<string>;
		OrganizationId: string;
	}
	export interface PutAccessControlRuleRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Effect: FormControl<GetAccessControlEffectResponseEffect | null | undefined>,
		Description: FormControl<string | null | undefined>,
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreatePutAccessControlRuleRequestFormGroup() {
		return new FormGroup<PutAccessControlRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<GetAccessControlEffectResponseEffect | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutMailboxPermissionsResponse {
	}
	export interface PutMailboxPermissionsResponseFormProperties {
	}
	export function CreatePutMailboxPermissionsResponseFormGroup() {
		return new FormGroup<PutMailboxPermissionsResponseFormProperties>({
		});

	}

	export interface PutMailboxPermissionsRequest {
		OrganizationId: string;
		EntityId: string;
		GranteeId: string;
		PermissionValues: Array<PermissionType>;
	}
	export interface PutMailboxPermissionsRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		GranteeId: FormControl<string | null | undefined>,
	}
	export function CreatePutMailboxPermissionsRequestFormGroup() {
		return new FormGroup<PutMailboxPermissionsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			GranteeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRetentionPolicyResponse {
	}
	export interface PutRetentionPolicyResponseFormProperties {
	}
	export function CreatePutRetentionPolicyResponseFormGroup() {
		return new FormGroup<PutRetentionPolicyResponseFormProperties>({
		});

	}

	export interface PutRetentionPolicyRequest {
		OrganizationId: string;
		Id?: string | null;
		Name: string;
		Description?: string | null;
		FolderConfigurations: Array<FolderConfiguration>;
	}
	export interface PutRetentionPolicyRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePutRetentionPolicyRequestFormGroup() {
		return new FormGroup<PutRetentionPolicyRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterToWorkMailResponse {
	}
	export interface RegisterToWorkMailResponseFormProperties {
	}
	export function CreateRegisterToWorkMailResponseFormGroup() {
		return new FormGroup<RegisterToWorkMailResponseFormProperties>({
		});

	}

	export interface RegisterToWorkMailRequest {
		OrganizationId: string;
		EntityId: string;
		Email: string;
	}
	export interface RegisterToWorkMailRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
	}
	export function CreateRegisterToWorkMailRequestFormGroup() {
		return new FormGroup<RegisterToWorkMailRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntityAlreadyRegisteredException {
	}
	export interface EntityAlreadyRegisteredExceptionFormProperties {
	}
	export function CreateEntityAlreadyRegisteredExceptionFormGroup() {
		return new FormGroup<EntityAlreadyRegisteredExceptionFormProperties>({
		});

	}

	export interface ResetPasswordResponse {
	}
	export interface ResetPasswordResponseFormProperties {
	}
	export function CreateResetPasswordResponseFormGroup() {
		return new FormGroup<ResetPasswordResponseFormProperties>({
		});

	}

	export interface ResetPasswordRequest {
		OrganizationId: string;
		UserId: string;
		Password: string;
	}
	export interface ResetPasswordRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordRequestFormGroup() {
		return new FormGroup<ResetPasswordRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
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
		ResourceARN: string;
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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
		ResourceARN: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMailboxQuotaResponse {
	}
	export interface UpdateMailboxQuotaResponseFormProperties {
	}
	export function CreateUpdateMailboxQuotaResponseFormGroup() {
		return new FormGroup<UpdateMailboxQuotaResponseFormProperties>({
		});

	}

	export interface UpdateMailboxQuotaRequest {
		OrganizationId: string;
		UserId: string;
		MailboxQuota: number;
	}
	export interface UpdateMailboxQuotaRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		MailboxQuota: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMailboxQuotaRequestFormGroup() {
		return new FormGroup<UpdateMailboxQuotaRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			MailboxQuota: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdatePrimaryEmailAddressResponse {
	}
	export interface UpdatePrimaryEmailAddressResponseFormProperties {
	}
	export function CreateUpdatePrimaryEmailAddressResponseFormGroup() {
		return new FormGroup<UpdatePrimaryEmailAddressResponseFormProperties>({
		});

	}

	export interface UpdatePrimaryEmailAddressRequest {
		OrganizationId: string;
		EntityId: string;
		Email: string;
	}
	export interface UpdatePrimaryEmailAddressRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePrimaryEmailAddressRequestFormGroup() {
		return new FormGroup<UpdatePrimaryEmailAddressRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceResponse {
	}
	export interface UpdateResourceResponseFormProperties {
	}
	export function CreateUpdateResourceResponseFormGroup() {
		return new FormGroup<UpdateResourceResponseFormProperties>({
		});

	}

	export interface UpdateResourceRequest {
		OrganizationId: string;
		ResourceId: string;
		Name?: string | null;

		/** At least one delegate must be associated to the resource to disable automatic replies from the resource. */
		BookingOptions?: BookingOptions;
	}
	export interface UpdateResourceRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceRequestFormGroup() {
		return new FormGroup<UpdateResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidConfigurationException {
	}
	export interface InvalidConfigurationExceptionFormProperties {
	}
	export function CreateInvalidConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidConfigurationExceptionFormProperties>({
		});

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
		ListAliases(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAliasesRequest): Observable<ListAliasesResponse> {
			return this.http.post<ListAliasesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListAliases?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an overview of the members of a group. Users and groups can be members of a group.
		 * Post #X-Amz-Target=WorkMailService.ListGroupMembers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupMembersResponse} Success
		 */
		ListGroupMembers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupMembersRequest): Observable<ListGroupMembersResponse> {
			return this.http.post<ListGroupMembersResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListGroupMembers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns summaries of the organization's groups.
		 * Post #X-Amz-Target=WorkMailService.ListGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupsRequest): Observable<ListGroupsResponse> {
			return this.http.post<ListGroupsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the mailbox permissions associated with a user, group, or resource mailbox.
		 * Post #X-Amz-Target=WorkMailService.ListMailboxPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMailboxPermissionsResponse} Success
		 */
		ListMailboxPermissions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMailboxPermissionsRequest): Observable<ListMailboxPermissionsResponse> {
			return this.http.post<ListMailboxPermissionsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListMailboxPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns summaries of the customer's organizations.
		 * Post #X-Amz-Target=WorkMailService.ListOrganizations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationsResponse} Success
		 */
		ListOrganizations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOrganizationsRequest): Observable<ListOrganizationsResponse> {
			return this.http.post<ListOrganizationsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListOrganizations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
		 * Post #X-Amz-Target=WorkMailService.ListResourceDelegates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceDelegatesResponse} Success
		 */
		ListResourceDelegates(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourceDelegatesRequest): Observable<ListResourceDelegatesResponse> {
			return this.http.post<ListResourceDelegatesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListResourceDelegates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns summaries of the organization's resources.
		 * Post #X-Amz-Target=WorkMailService.ListResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourcesRequest): Observable<ListResourcesResponse> {
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
		ListUsers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUsersRequest): Observable<ListUsersResponse> {
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

