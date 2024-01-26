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

		/** Required */
		OrganizationId: string;

		/** Required */
		ResourceId: string;

		/** Required */
		EntityId: string;
	}
	export interface AssociateDelegateToResourceRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDelegateToResourceRequestFormGroup() {
		return new FormGroup<AssociateDelegateToResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		GroupId: string;

		/** Required */
		MemberId: string;
	}
	export interface AssociateMemberToGroupRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,

		/** Required */
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMemberToGroupRequestFormGroup() {
		return new FormGroup<AssociateMemberToGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface AssumeImpersonationRoleResponse {
		Token?: string;
		ExpiresIn?: number | null;
	}
	export interface AssumeImpersonationRoleResponseFormProperties {
		Token: FormControl<string | null | undefined>,
		ExpiresIn: FormControl<number | null | undefined>,
	}
	export function CreateAssumeImpersonationRoleResponseFormGroup() {
		return new FormGroup<AssumeImpersonationRoleResponseFormProperties>({
			Token: new FormControl<string | null | undefined>(undefined),
			ExpiresIn: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AssumeImpersonationRoleRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		ImpersonationRoleId: string;
	}
	export interface AssumeImpersonationRoleRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ImpersonationRoleId: FormControl<string | null | undefined>,
	}
	export function CreateAssumeImpersonationRoleRequestFormGroup() {
		return new FormGroup<AssumeImpersonationRoleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CancelMailboxExportJobResponse {
	}
	export interface CancelMailboxExportJobResponseFormProperties {
	}
	export function CreateCancelMailboxExportJobResponseFormGroup() {
		return new FormGroup<CancelMailboxExportJobResponseFormProperties>({
		});

	}

	export interface CancelMailboxExportJobRequest {

		/** Required */
		ClientToken: string;

		/** Required */
		JobId: string;

		/** Required */
		OrganizationId: string;
	}
	export interface CancelMailboxExportJobRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateCancelMailboxExportJobRequestFormGroup() {
		return new FormGroup<CancelMailboxExportJobRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;

		/** Required */
		Alias: string;
	}
	export interface CreateAliasRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,

		/** Required */
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateAvailabilityConfigurationResponse {
	}
	export interface CreateAvailabilityConfigurationResponseFormProperties {
	}
	export function CreateCreateAvailabilityConfigurationResponseFormGroup() {
		return new FormGroup<CreateAvailabilityConfigurationResponseFormProperties>({
		});

	}

	export interface CreateAvailabilityConfigurationRequest {
		ClientToken?: string;

		/** Required */
		OrganizationId: string;

		/** Required */
		DomainName: string;
		EwsProvider?: EwsAvailabilityProvider;
		LambdaProvider?: LambdaAvailabilityProvider;
	}
	export interface CreateAvailabilityConfigurationRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAvailabilityConfigurationRequestFormGroup() {
		return new FormGroup<CreateAvailabilityConfigurationRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an EWS based availability provider. This is only used as input to the service. */
	export interface EwsAvailabilityProvider {

		/** Required */
		EwsEndpoint: string;

		/** Required */
		EwsUsername: string;

		/** Required */
		EwsPassword: string;
	}

	/** Describes an EWS based availability provider. This is only used as input to the service. */
	export interface EwsAvailabilityProviderFormProperties {

		/** Required */
		EwsEndpoint: FormControl<string | null | undefined>,

		/** Required */
		EwsUsername: FormControl<string | null | undefined>,

		/** Required */
		EwsPassword: FormControl<string | null | undefined>,
	}
	export function CreateEwsAvailabilityProviderFormGroup() {
		return new FormGroup<EwsAvailabilityProviderFormProperties>({
			EwsEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EwsUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EwsPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a Lambda based availability provider. */
	export interface LambdaAvailabilityProvider {

		/** Required */
		LambdaArn: string;
	}

	/** Describes a Lambda based availability provider. */
	export interface LambdaAvailabilityProviderFormProperties {

		/** Required */
		LambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaAvailabilityProviderFormGroup() {
		return new FormGroup<LambdaAvailabilityProviderFormProperties>({
			LambdaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateGroupResponse {
		GroupId?: string;
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

		/** Required */
		OrganizationId: string;

		/** Required */
		Name: string;
	}
	export interface CreateGroupRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateImpersonationRoleResponse {
		ImpersonationRoleId?: string;
	}
	export interface CreateImpersonationRoleResponseFormProperties {
		ImpersonationRoleId: FormControl<string | null | undefined>,
	}
	export function CreateCreateImpersonationRoleResponseFormGroup() {
		return new FormGroup<CreateImpersonationRoleResponseFormProperties>({
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateImpersonationRoleRequest {
		ClientToken?: string;

		/** Required */
		OrganizationId: string;

		/** Required */
		Name: string;

		/** Required */
		Type: ImpersonationRoleType;
		Description?: string;

		/** Required */
		Rules: Array<ImpersonationRule>;
	}
	export interface CreateImpersonationRoleRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ImpersonationRoleType | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateImpersonationRoleRequestFormGroup() {
		return new FormGroup<CreateImpersonationRoleRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ImpersonationRoleType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImpersonationRoleType { FULL_ACCESS = 0, READ_ONLY = 1 }


	/** The rules for the given impersonation role. */
	export interface ImpersonationRule {

		/** Required */
		ImpersonationRuleId: string;
		Name?: string;
		Description?: string;

		/** Required */
		Effect: AccessEffect;
		TargetUsers?: Array<string>;
		NotTargetUsers?: Array<string>;
	}

	/** The rules for the given impersonation role. */
	export interface ImpersonationRuleFormProperties {

		/** Required */
		ImpersonationRuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Effect: FormControl<AccessEffect | null | undefined>,
	}
	export function CreateImpersonationRuleFormGroup() {
		return new FormGroup<ImpersonationRuleFormProperties>({
			ImpersonationRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccessEffect { ALLOW = 0, DENY = 1 }

	export interface CreateMobileDeviceAccessRuleResponse {
		MobileDeviceAccessRuleId?: string;
	}
	export interface CreateMobileDeviceAccessRuleResponseFormProperties {
		MobileDeviceAccessRuleId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMobileDeviceAccessRuleResponseFormGroup() {
		return new FormGroup<CreateMobileDeviceAccessRuleResponseFormProperties>({
			MobileDeviceAccessRuleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMobileDeviceAccessRuleRequest {

		/** Required */
		OrganizationId: string;
		ClientToken?: string;

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Effect: AccessEffect;
		DeviceTypes?: Array<string>;
		NotDeviceTypes?: Array<string>;
		DeviceModels?: Array<string>;
		NotDeviceModels?: Array<string>;
		DeviceOperatingSystems?: Array<string>;
		NotDeviceOperatingSystems?: Array<string>;
		DeviceUserAgents?: Array<string>;
		NotDeviceUserAgents?: Array<string>;
	}
	export interface CreateMobileDeviceAccessRuleRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Effect: FormControl<AccessEffect | null | undefined>,
	}
	export function CreateCreateMobileDeviceAccessRuleRequestFormGroup() {
		return new FormGroup<CreateMobileDeviceAccessRuleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOrganizationResponse {
		OrganizationId?: string;
	}
	export interface CreateOrganizationResponseFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationResponseFormGroup() {
		return new FormGroup<CreateOrganizationResponseFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOrganizationRequest {
		DirectoryId?: string;

		/** Required */
		Alias: string;
		ClientToken?: string;
		Domains?: Array<Domain>;
		KmsKeyArn?: string;
		EnableInteroperability?: boolean | null;
	}
	export interface CreateOrganizationRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		Alias: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		EnableInteroperability: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateOrganizationRequestFormGroup() {
		return new FormGroup<CreateOrganizationRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			EnableInteroperability: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The domain to associate with an WorkMail organization.</p> <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>WorkMail Administrator Guide</i>.</p> */
	export interface Domain {
		DomainName?: string;
		HostedZoneId?: string;
	}

	/** <p>The domain to associate with an WorkMail organization.</p> <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>WorkMail Administrator Guide</i>.</p> */
	export interface DomainFormProperties {
		DomainName: FormControl<string | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DirectoryInUseException {
	}
	export interface DirectoryInUseExceptionFormProperties {
	}
	export function CreateDirectoryInUseExceptionFormGroup() {
		return new FormGroup<DirectoryInUseExceptionFormProperties>({
		});

	}

	export interface CreateResourceResponse {
		ResourceId?: string;
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

		/** Required */
		OrganizationId: string;

		/** Required */
		Name: string;

		/** Required */
		Type: ResourceType;
	}
	export interface CreateResourceRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ResourceType | null | undefined>,
	}
	export function CreateCreateResourceRequestFormGroup() {
		return new FormGroup<CreateResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceType { ROOM = 0, EQUIPMENT = 1 }

	export interface CreateUserResponse {
		UserId?: string;
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

		/** Required */
		OrganizationId: string;

		/** Required */
		Name: string;

		/** Required */
		DisplayName: string;

		/** Required */
		Password: string;
	}
	export interface CreateUserRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		DisplayName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		Name: string;
	}
	export interface DeleteAccessControlRuleRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccessControlRuleRequestFormGroup() {
		return new FormGroup<DeleteAccessControlRuleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;

		/** Required */
		Alias: string;
	}
	export interface DeleteAliasRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,

		/** Required */
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAliasRequestFormGroup() {
		return new FormGroup<DeleteAliasRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAvailabilityConfigurationResponse {
	}
	export interface DeleteAvailabilityConfigurationResponseFormProperties {
	}
	export function CreateDeleteAvailabilityConfigurationResponseFormGroup() {
		return new FormGroup<DeleteAvailabilityConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteAvailabilityConfigurationRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		DomainName: string;
	}
	export interface DeleteAvailabilityConfigurationRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAvailabilityConfigurationRequestFormGroup() {
		return new FormGroup<DeleteAvailabilityConfigurationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEmailMonitoringConfigurationResponse {
	}
	export interface DeleteEmailMonitoringConfigurationResponseFormProperties {
	}
	export function CreateDeleteEmailMonitoringConfigurationResponseFormGroup() {
		return new FormGroup<DeleteEmailMonitoringConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteEmailMonitoringConfigurationRequest {

		/** Required */
		OrganizationId: string;
	}
	export interface DeleteEmailMonitoringConfigurationRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEmailMonitoringConfigurationRequestFormGroup() {
		return new FormGroup<DeleteEmailMonitoringConfigurationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		GroupId: string;
	}
	export interface DeleteGroupRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteImpersonationRoleResponse {
	}
	export interface DeleteImpersonationRoleResponseFormProperties {
	}
	export function CreateDeleteImpersonationRoleResponseFormGroup() {
		return new FormGroup<DeleteImpersonationRoleResponseFormProperties>({
		});

	}

	export interface DeleteImpersonationRoleRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		ImpersonationRoleId: string;
	}
	export interface DeleteImpersonationRoleRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ImpersonationRoleId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteImpersonationRoleRequestFormGroup() {
		return new FormGroup<DeleteImpersonationRoleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;

		/** Required */
		GranteeId: string;
	}
	export interface DeleteMailboxPermissionsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,

		/** Required */
		GranteeId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMailboxPermissionsRequestFormGroup() {
		return new FormGroup<DeleteMailboxPermissionsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GranteeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMobileDeviceAccessOverrideResponse {
	}
	export interface DeleteMobileDeviceAccessOverrideResponseFormProperties {
	}
	export function CreateDeleteMobileDeviceAccessOverrideResponseFormGroup() {
		return new FormGroup<DeleteMobileDeviceAccessOverrideResponseFormProperties>({
		});

	}

	export interface DeleteMobileDeviceAccessOverrideRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		UserId: string;

		/** Required */
		DeviceId: string;
	}
	export interface DeleteMobileDeviceAccessOverrideRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMobileDeviceAccessOverrideRequestFormGroup() {
		return new FormGroup<DeleteMobileDeviceAccessOverrideRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMobileDeviceAccessRuleResponse {
	}
	export interface DeleteMobileDeviceAccessRuleResponseFormProperties {
	}
	export function CreateDeleteMobileDeviceAccessRuleResponseFormGroup() {
		return new FormGroup<DeleteMobileDeviceAccessRuleResponseFormProperties>({
		});

	}

	export interface DeleteMobileDeviceAccessRuleRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		MobileDeviceAccessRuleId: string;
	}
	export interface DeleteMobileDeviceAccessRuleRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		MobileDeviceAccessRuleId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMobileDeviceAccessRuleRequestFormGroup() {
		return new FormGroup<DeleteMobileDeviceAccessRuleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MobileDeviceAccessRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOrganizationResponse {
		OrganizationId?: string;
		State?: string;
	}
	export interface DeleteOrganizationResponseFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOrganizationResponseFormGroup() {
		return new FormGroup<DeleteOrganizationResponseFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteOrganizationRequest {
		ClientToken?: string;

		/** Required */
		OrganizationId: string;

		/** Required */
		DeleteDirectory: boolean;
	}
	export interface DeleteOrganizationRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		DeleteDirectory: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteOrganizationRequestFormGroup() {
		return new FormGroup<DeleteOrganizationRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteDirectory: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		ResourceId: string;
	}
	export interface DeleteResourceRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceRequestFormGroup() {
		return new FormGroup<DeleteResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		Id: string;
	}
	export interface DeleteRetentionPolicyRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRetentionPolicyRequestFormGroup() {
		return new FormGroup<DeleteRetentionPolicyRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		UserId: string;
	}
	export interface DeleteUserRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;
	}
	export interface DeregisterFromWorkMailRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterFromWorkMailRequestFormGroup() {
		return new FormGroup<DeregisterFromWorkMailRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterMailDomainResponse {
	}
	export interface DeregisterMailDomainResponseFormProperties {
	}
	export function CreateDeregisterMailDomainResponseFormGroup() {
		return new FormGroup<DeregisterMailDomainResponseFormProperties>({
		});

	}

	export interface DeregisterMailDomainRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		DomainName: string;
	}
	export interface DeregisterMailDomainRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterMailDomainRequestFormGroup() {
		return new FormGroup<DeregisterMailDomainRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MailDomainInUseException {
	}
	export interface MailDomainInUseExceptionFormProperties {
	}
	export function CreateMailDomainInUseExceptionFormGroup() {
		return new FormGroup<MailDomainInUseExceptionFormProperties>({
		});

	}

	export interface InvalidCustomSesConfigurationException {
	}
	export interface InvalidCustomSesConfigurationExceptionFormProperties {
	}
	export function CreateInvalidCustomSesConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidCustomSesConfigurationExceptionFormProperties>({
		});

	}

	export interface DescribeEmailMonitoringConfigurationResponse {
		RoleArn?: string;
		LogGroupArn?: string;
	}
	export interface DescribeEmailMonitoringConfigurationResponseFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		LogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEmailMonitoringConfigurationResponseFormGroup() {
		return new FormGroup<DescribeEmailMonitoringConfigurationResponseFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			LogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEmailMonitoringConfigurationRequest {

		/** Required */
		OrganizationId: string;
	}
	export interface DescribeEmailMonitoringConfigurationRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEmailMonitoringConfigurationRequestFormGroup() {
		return new FormGroup<DescribeEmailMonitoringConfigurationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGroupResponse {
		GroupId?: string;
		Name?: string;
		Email?: string;
		State?: EntityState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}
	export interface DescribeGroupResponseFormProperties {
		GroupId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		State: FormControl<EntityState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeGroupResponseFormGroup() {
		return new FormGroup<DescribeGroupResponseFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EntityState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EntityState { ENABLED = 0, DISABLED = 1, DELETED = 2 }

	export interface DescribeGroupRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		GroupId: string;
	}
	export interface DescribeGroupRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGroupRequestFormGroup() {
		return new FormGroup<DescribeGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeInboundDmarcSettingsResponse {
		Enforced?: boolean | null;
	}
	export interface DescribeInboundDmarcSettingsResponseFormProperties {
		Enforced: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeInboundDmarcSettingsResponseFormGroup() {
		return new FormGroup<DescribeInboundDmarcSettingsResponseFormProperties>({
			Enforced: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeInboundDmarcSettingsRequest {

		/** Required */
		OrganizationId: string;
	}
	export interface DescribeInboundDmarcSettingsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInboundDmarcSettingsRequestFormGroup() {
		return new FormGroup<DescribeInboundDmarcSettingsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeMailboxExportJobResponse {
		EntityId?: string;
		Description?: string;
		RoleArn?: string;
		KmsKeyArn?: string;
		S3BucketName?: string;
		S3Prefix?: string;
		S3Path?: string;
		EstimatedProgress?: number | null;
		State?: MailboxExportJobState;
		ErrorInfo?: string;
		StartTime?: Date;
		EndTime?: Date;
	}
	export interface DescribeMailboxExportJobResponseFormProperties {
		EntityId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3Prefix: FormControl<string | null | undefined>,
		S3Path: FormControl<string | null | undefined>,
		EstimatedProgress: FormControl<number | null | undefined>,
		State: FormControl<MailboxExportJobState | null | undefined>,
		ErrorInfo: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeMailboxExportJobResponseFormGroup() {
		return new FormGroup<DescribeMailboxExportJobResponseFormProperties>({
			EntityId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3Prefix: new FormControl<string | null | undefined>(undefined),
			S3Path: new FormControl<string | null | undefined>(undefined),
			EstimatedProgress: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<MailboxExportJobState | null | undefined>(undefined),
			ErrorInfo: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MailboxExportJobState { RUNNING = 0, COMPLETED = 1, FAILED = 2, CANCELLED = 3 }

	export interface DescribeMailboxExportJobRequest {

		/** Required */
		JobId: string;

		/** Required */
		OrganizationId: string;
	}
	export interface DescribeMailboxExportJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMailboxExportJobRequestFormGroup() {
		return new FormGroup<DescribeMailboxExportJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOrganizationResponse {
		OrganizationId?: string;
		Alias?: string;
		State?: string;
		DirectoryId?: string;
		DirectoryType?: string;
		DefaultMailDomain?: string;
		CompletedDate?: Date;
		ErrorMessage?: string;
		ARN?: string;
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

		/** Required */
		OrganizationId: string;
	}
	export interface DescribeOrganizationRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationRequestFormGroup() {
		return new FormGroup<DescribeOrganizationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResourceResponse {
		ResourceId?: string;
		Email?: string;
		Name?: string;
		Type?: ResourceType;
		BookingOptions?: BookingOptions;
		State?: EntityState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}
	export interface DescribeResourceResponseFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ResourceType | null | undefined>,
		State: FormControl<EntityState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeResourceResponseFormGroup() {
		return new FormGroup<DescribeResourceResponseFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ResourceType | null | undefined>(undefined),
			State: new FormControl<EntityState | null | undefined>(undefined),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		ResourceId: string;
	}
	export interface DescribeResourceRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourceRequestFormGroup() {
		return new FormGroup<DescribeResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserResponse {
		UserId?: string;
		Name?: string;
		Email?: string;
		DisplayName?: string;
		State?: EntityState;
		UserRole?: UserRole;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}
	export interface DescribeUserResponseFormProperties {
		UserId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		State: FormControl<EntityState | null | undefined>,
		UserRole: FormControl<UserRole | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EntityState | null | undefined>(undefined),
			UserRole: new FormControl<UserRole | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum UserRole { USER = 0, RESOURCE = 1, SYSTEM_USER = 2 }

	export interface DescribeUserRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		UserId: string;
	}
	export interface DescribeUserRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserRequestFormGroup() {
		return new FormGroup<DescribeUserRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		ResourceId: string;

		/** Required */
		EntityId: string;
	}
	export interface DisassociateDelegateFromResourceRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDelegateFromResourceRequestFormGroup() {
		return new FormGroup<DisassociateDelegateFromResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		GroupId: string;

		/** Required */
		MemberId: string;
	}
	export interface DisassociateMemberFromGroupRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,

		/** Required */
		MemberId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMemberFromGroupRequestFormGroup() {
		return new FormGroup<DisassociateMemberFromGroupRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccessControlEffectResponse {
		Effect?: AccessEffect;
		MatchedRules?: Array<string>;
	}
	export interface GetAccessControlEffectResponseFormProperties {
		Effect: FormControl<AccessEffect | null | undefined>,
	}
	export function CreateGetAccessControlEffectResponseFormGroup() {
		return new FormGroup<GetAccessControlEffectResponseFormProperties>({
			Effect: new FormControl<AccessEffect | null | undefined>(undefined),
		});

	}

	export interface GetAccessControlEffectRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		IpAddress: string;

		/** Required */
		Action: string;
		UserId?: string;
		ImpersonationRoleId?: string;
	}
	export interface GetAccessControlEffectRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		IpAddress: FormControl<string | null | undefined>,

		/** Required */
		Action: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		ImpersonationRoleId: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessControlEffectRequestFormGroup() {
		return new FormGroup<GetAccessControlEffectRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined),
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDefaultRetentionPolicyResponse {
		Id?: string;
		Name?: string;
		Description?: string;
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

		/** Required */
		Name: FolderName;

		/** Required */
		Action: RetentionAction;
		Period?: number | null;
	}

	/** The configuration applied to an organization's folders by its retention policy. */
	export interface FolderConfigurationFormProperties {

		/** Required */
		Name: FormControl<FolderName | null | undefined>,

		/** Required */
		Action: FormControl<RetentionAction | null | undefined>,
		Period: FormControl<number | null | undefined>,
	}
	export function CreateFolderConfigurationFormGroup() {
		return new FormGroup<FolderConfigurationFormProperties>({
			Name: new FormControl<FolderName | null | undefined>(undefined, [Validators.required]),
			Action: new FormControl<RetentionAction | null | undefined>(undefined, [Validators.required]),
			Period: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FolderName { INBOX = 0, DELETED_ITEMS = 1, SENT_ITEMS = 2, DRAFTS = 3, JUNK_EMAIL = 4 }

	export enum RetentionAction { NONE = 0, DELETE = 1, PERMANENTLY_DELETE = 2 }

	export interface GetDefaultRetentionPolicyRequest {

		/** Required */
		OrganizationId: string;
	}
	export interface GetDefaultRetentionPolicyRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateGetDefaultRetentionPolicyRequestFormGroup() {
		return new FormGroup<GetDefaultRetentionPolicyRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetImpersonationRoleResponse {
		ImpersonationRoleId?: string;
		Name?: string;
		Type?: ImpersonationRoleType;
		Description?: string;
		Rules?: Array<ImpersonationRule>;
		DateCreated?: Date;
		DateModified?: Date;
	}
	export interface GetImpersonationRoleResponseFormProperties {
		ImpersonationRoleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ImpersonationRoleType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
	}
	export function CreateGetImpersonationRoleResponseFormGroup() {
		return new FormGroup<GetImpersonationRoleResponseFormProperties>({
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ImpersonationRoleType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetImpersonationRoleRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		ImpersonationRoleId: string;
	}
	export interface GetImpersonationRoleRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ImpersonationRoleId: FormControl<string | null | undefined>,
	}
	export function CreateGetImpersonationRoleRequestFormGroup() {
		return new FormGroup<GetImpersonationRoleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetImpersonationRoleEffectResponse {
		Type?: ImpersonationRoleType;
		Effect?: AccessEffect;
		MatchedRules?: Array<ImpersonationMatchedRule>;
	}
	export interface GetImpersonationRoleEffectResponseFormProperties {
		Type: FormControl<ImpersonationRoleType | null | undefined>,
		Effect: FormControl<AccessEffect | null | undefined>,
	}
	export function CreateGetImpersonationRoleEffectResponseFormGroup() {
		return new FormGroup<GetImpersonationRoleEffectResponseFormProperties>({
			Type: new FormControl<ImpersonationRoleType | null | undefined>(undefined),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined),
		});

	}


	/** The impersonation rule that matched the input. */
	export interface ImpersonationMatchedRule {
		ImpersonationRuleId?: string;
		Name?: string;
	}

	/** The impersonation rule that matched the input. */
	export interface ImpersonationMatchedRuleFormProperties {
		ImpersonationRuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateImpersonationMatchedRuleFormGroup() {
		return new FormGroup<ImpersonationMatchedRuleFormProperties>({
			ImpersonationRuleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetImpersonationRoleEffectRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		ImpersonationRoleId: string;

		/** Required */
		TargetUser: string;
	}
	export interface GetImpersonationRoleEffectRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ImpersonationRoleId: FormControl<string | null | undefined>,

		/** Required */
		TargetUser: FormControl<string | null | undefined>,
	}
	export function CreateGetImpersonationRoleEffectRequestFormGroup() {
		return new FormGroup<GetImpersonationRoleEffectRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetUser: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMailDomainResponse {
		Records?: Array<DnsRecord>;
		IsTestDomain?: boolean | null;
		IsDefault?: boolean | null;
		OwnershipVerificationStatus?: DnsRecordVerificationStatus;
		DkimVerificationStatus?: DnsRecordVerificationStatus;
	}
	export interface GetMailDomainResponseFormProperties {
		IsTestDomain: FormControl<boolean | null | undefined>,
		IsDefault: FormControl<boolean | null | undefined>,
		OwnershipVerificationStatus: FormControl<DnsRecordVerificationStatus | null | undefined>,
		DkimVerificationStatus: FormControl<DnsRecordVerificationStatus | null | undefined>,
	}
	export function CreateGetMailDomainResponseFormGroup() {
		return new FormGroup<GetMailDomainResponseFormProperties>({
			IsTestDomain: new FormControl<boolean | null | undefined>(undefined),
			IsDefault: new FormControl<boolean | null | undefined>(undefined),
			OwnershipVerificationStatus: new FormControl<DnsRecordVerificationStatus | null | undefined>(undefined),
			DkimVerificationStatus: new FormControl<DnsRecordVerificationStatus | null | undefined>(undefined),
		});

	}


	/** A DNS record uploaded to your DNS provider. */
	export interface DnsRecord {
		Type?: string;
		Hostname?: string;
		Value?: string;
	}

	/** A DNS record uploaded to your DNS provider. */
	export interface DnsRecordFormProperties {
		Type: FormControl<string | null | undefined>,
		Hostname: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDnsRecordFormGroup() {
		return new FormGroup<DnsRecordFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DnsRecordVerificationStatus { PENDING = 0, VERIFIED = 1, FAILED = 2 }

	export interface GetMailDomainRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		DomainName: string;
	}
	export interface GetMailDomainRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateGetMailDomainRequestFormGroup() {
		return new FormGroup<GetMailDomainRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		UserId: string;
	}
	export interface GetMailboxDetailsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateGetMailboxDetailsRequestFormGroup() {
		return new FormGroup<GetMailboxDetailsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMobileDeviceAccessEffectResponse {
		Effect?: AccessEffect;
		MatchedRules?: Array<MobileDeviceAccessMatchedRule>;
	}
	export interface GetMobileDeviceAccessEffectResponseFormProperties {
		Effect: FormControl<AccessEffect | null | undefined>,
	}
	export function CreateGetMobileDeviceAccessEffectResponseFormGroup() {
		return new FormGroup<GetMobileDeviceAccessEffectResponseFormProperties>({
			Effect: new FormControl<AccessEffect | null | undefined>(undefined),
		});

	}


	/** The rule that a simulated user matches. */
	export interface MobileDeviceAccessMatchedRule {
		MobileDeviceAccessRuleId?: string;
		Name?: string;
	}

	/** The rule that a simulated user matches. */
	export interface MobileDeviceAccessMatchedRuleFormProperties {
		MobileDeviceAccessRuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMobileDeviceAccessMatchedRuleFormGroup() {
		return new FormGroup<MobileDeviceAccessMatchedRuleFormProperties>({
			MobileDeviceAccessRuleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMobileDeviceAccessEffectRequest {

		/** Required */
		OrganizationId: string;
		DeviceType?: string;
		DeviceModel?: string;
		DeviceOperatingSystem?: string;
		DeviceUserAgent?: string;
	}
	export interface GetMobileDeviceAccessEffectRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		DeviceType: FormControl<string | null | undefined>,
		DeviceModel: FormControl<string | null | undefined>,
		DeviceOperatingSystem: FormControl<string | null | undefined>,
		DeviceUserAgent: FormControl<string | null | undefined>,
	}
	export function CreateGetMobileDeviceAccessEffectRequestFormGroup() {
		return new FormGroup<GetMobileDeviceAccessEffectRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceType: new FormControl<string | null | undefined>(undefined),
			DeviceModel: new FormControl<string | null | undefined>(undefined),
			DeviceOperatingSystem: new FormControl<string | null | undefined>(undefined),
			DeviceUserAgent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMobileDeviceAccessOverrideResponse {
		UserId?: string;
		DeviceId?: string;
		Effect?: AccessEffect;
		Description?: string;
		DateCreated?: Date;
		DateModified?: Date;
	}
	export interface GetMobileDeviceAccessOverrideResponseFormProperties {
		UserId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		Effect: FormControl<AccessEffect | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
	}
	export function CreateGetMobileDeviceAccessOverrideResponseFormGroup() {
		return new FormGroup<GetMobileDeviceAccessOverrideResponseFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetMobileDeviceAccessOverrideRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		UserId: string;

		/** Required */
		DeviceId: string;
	}
	export interface GetMobileDeviceAccessOverrideRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateGetMobileDeviceAccessOverrideRequestFormGroup() {
		return new FormGroup<GetMobileDeviceAccessOverrideRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** A rule that controls access to an WorkMail organization. */
	export interface AccessControlRule {
		Name?: string;
		Effect?: AccessEffect;
		Description?: string;
		IpRanges?: Array<string>;
		NotIpRanges?: Array<string>;
		Actions?: Array<string>;
		NotActions?: Array<string>;
		UserIds?: Array<string>;
		NotUserIds?: Array<string>;
		DateCreated?: Date;
		DateModified?: Date;
		ImpersonationRoleIds?: Array<string>;
		NotImpersonationRoleIds?: Array<string>;
	}

	/** A rule that controls access to an WorkMail organization. */
	export interface AccessControlRuleFormProperties {
		Name: FormControl<string | null | undefined>,
		Effect: FormControl<AccessEffect | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
	}
	export function CreateAccessControlRuleFormGroup() {
		return new FormGroup<AccessControlRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAccessControlRulesRequest {

		/** Required */
		OrganizationId: string;
	}
	export interface ListAccessControlRulesRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateListAccessControlRulesRequestFormGroup() {
		return new FormGroup<ListAccessControlRulesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAliasesResponse {
		Aliases?: Array<string>;
		NextToken?: string;
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

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListAliasesRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAliasesRequestFormGroup() {
		return new FormGroup<ListAliasesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAvailabilityConfigurationsResponse {
		AvailabilityConfigurations?: Array<AvailabilityConfiguration>;
		NextToken?: string;
	}
	export interface ListAvailabilityConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailabilityConfigurationsResponseFormGroup() {
		return new FormGroup<ListAvailabilityConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization. */
	export interface AvailabilityConfiguration {
		DomainName?: string;
		ProviderType?: AvailabilityProviderType;
		EwsProvider?: RedactedEwsAvailabilityProvider;
		LambdaProvider?: LambdaAvailabilityProvider;
		DateCreated?: Date;
		DateModified?: Date;
	}

	/** List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization. */
	export interface AvailabilityConfigurationFormProperties {
		DomainName: FormControl<string | null | undefined>,
		ProviderType: FormControl<AvailabilityProviderType | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
	}
	export function CreateAvailabilityConfigurationFormGroup() {
		return new FormGroup<AvailabilityConfigurationFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<AvailabilityProviderType | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AvailabilityProviderType { EWS = 0, LAMBDA = 1 }


	/** Describes an EWS based availability provider when returned from the service. It does not contain the password of the endpoint. */
	export interface RedactedEwsAvailabilityProvider {
		EwsEndpoint?: string;
		EwsUsername?: string;
	}

	/** Describes an EWS based availability provider when returned from the service. It does not contain the password of the endpoint. */
	export interface RedactedEwsAvailabilityProviderFormProperties {
		EwsEndpoint: FormControl<string | null | undefined>,
		EwsUsername: FormControl<string | null | undefined>,
	}
	export function CreateRedactedEwsAvailabilityProviderFormGroup() {
		return new FormGroup<RedactedEwsAvailabilityProviderFormProperties>({
			EwsEndpoint: new FormControl<string | null | undefined>(undefined),
			EwsUsername: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAvailabilityConfigurationsRequest {

		/** Required */
		OrganizationId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAvailabilityConfigurationsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailabilityConfigurationsRequestFormGroup() {
		return new FormGroup<ListAvailabilityConfigurationsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupMembersResponse {
		Members?: Array<Member>;
		NextToken?: string;
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
		Id?: string;
		Name?: string;
		Type?: MemberType;
		State?: EntityState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	/** The representation of a user or group. */
	export interface MemberFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<MemberType | null | undefined>,
		State: FormControl<EntityState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<MemberType | null | undefined>(undefined),
			State: new FormControl<EntityState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MemberType { GROUP = 0, USER = 1 }

	export interface ListGroupMembersRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		GroupId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListGroupMembersRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupMembersRequestFormGroup() {
		return new FormGroup<ListGroupMembersRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupsResponse {
		Groups?: Array<Group>;
		NextToken?: string;
	}
	export interface ListGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The representation of an WorkMail group. */
	export interface Group {
		Id?: string;
		Email?: string;
		Name?: string;
		State?: EntityState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	/** The representation of an WorkMail group. */
	export interface GroupFormProperties {
		Id: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<EntityState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EntityState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListGroupsRequest {

		/** Required */
		OrganizationId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListGroupsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListImpersonationRolesResponse {
		Roles?: Array<ImpersonationRole>;
		NextToken?: string;
	}
	export interface ListImpersonationRolesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImpersonationRolesResponseFormGroup() {
		return new FormGroup<ListImpersonationRolesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An impersonation role for the given WorkMail organization. */
	export interface ImpersonationRole {
		ImpersonationRoleId?: string;
		Name?: string;
		Type?: ImpersonationRoleType;
		DateCreated?: Date;
		DateModified?: Date;
	}

	/** An impersonation role for the given WorkMail organization. */
	export interface ImpersonationRoleFormProperties {
		ImpersonationRoleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ImpersonationRoleType | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
	}
	export function CreateImpersonationRoleFormGroup() {
		return new FormGroup<ImpersonationRoleFormProperties>({
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ImpersonationRoleType | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListImpersonationRolesRequest {

		/** Required */
		OrganizationId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListImpersonationRolesRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListImpersonationRolesRequestFormGroup() {
		return new FormGroup<ListImpersonationRolesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMailDomainsResponse {
		MailDomains?: Array<MailDomainSummary>;
		NextToken?: string;
	}
	export interface ListMailDomainsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMailDomainsResponseFormGroup() {
		return new FormGroup<ListMailDomainsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data for a given domain. */
	export interface MailDomainSummary {
		DomainName?: string;
		DefaultDomain?: boolean | null;
	}

	/** The data for a given domain. */
	export interface MailDomainSummaryFormProperties {
		DomainName: FormControl<string | null | undefined>,
		DefaultDomain: FormControl<boolean | null | undefined>,
	}
	export function CreateMailDomainSummaryFormGroup() {
		return new FormGroup<MailDomainSummaryFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			DefaultDomain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListMailDomainsRequest {

		/** Required */
		OrganizationId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListMailDomainsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMailDomainsRequestFormGroup() {
		return new FormGroup<ListMailDomainsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMailboxExportJobsResponse {
		Jobs?: Array<MailboxExportJob>;
		NextToken?: string;
	}
	export interface ListMailboxExportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMailboxExportJobsResponseFormGroup() {
		return new FormGroup<ListMailboxExportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to. */
	export interface MailboxExportJob {
		JobId?: string;
		EntityId?: string;
		Description?: string;
		S3BucketName?: string;
		S3Path?: string;
		EstimatedProgress?: number | null;
		State?: MailboxExportJobState;
		StartTime?: Date;
		EndTime?: Date;
	}

	/** The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to. */
	export interface MailboxExportJobFormProperties {
		JobId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3Path: FormControl<string | null | undefined>,
		EstimatedProgress: FormControl<number | null | undefined>,
		State: FormControl<MailboxExportJobState | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateMailboxExportJobFormGroup() {
		return new FormGroup<MailboxExportJobFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3Path: new FormControl<string | null | undefined>(undefined),
			EstimatedProgress: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<MailboxExportJobState | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMailboxExportJobsRequest {

		/** Required */
		OrganizationId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListMailboxExportJobsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMailboxExportJobsRequestFormGroup() {
		return new FormGroup<ListMailboxExportJobsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMailboxPermissionsResponse {
		Permissions?: Array<Permission>;
		NextToken?: string;
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

		/** Required */
		GranteeId: string;

		/** Required */
		GranteeType: MemberType;

		/** Required */
		PermissionValues: Array<PermissionType>;
	}

	/** Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox. */
	export interface PermissionFormProperties {

		/** Required */
		GranteeId: FormControl<string | null | undefined>,

		/** Required */
		GranteeType: FormControl<MemberType | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			GranteeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GranteeType: new FormControl<MemberType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PermissionType { FULL_ACCESS = 0, SEND_AS = 1, SEND_ON_BEHALF = 2 }

	export interface ListMailboxPermissionsRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListMailboxPermissionsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMailboxPermissionsRequestFormGroup() {
		return new FormGroup<ListMailboxPermissionsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMobileDeviceAccessOverridesResponse {
		Overrides?: Array<MobileDeviceAccessOverride>;
		NextToken?: string;
	}
	export interface ListMobileDeviceAccessOverridesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMobileDeviceAccessOverridesResponseFormGroup() {
		return new FormGroup<ListMobileDeviceAccessOverridesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The override object. */
	export interface MobileDeviceAccessOverride {
		UserId?: string;
		DeviceId?: string;
		Effect?: AccessEffect;
		Description?: string;
		DateCreated?: Date;
		DateModified?: Date;
	}

	/** The override object. */
	export interface MobileDeviceAccessOverrideFormProperties {
		UserId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		Effect: FormControl<AccessEffect | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
	}
	export function CreateMobileDeviceAccessOverrideFormGroup() {
		return new FormGroup<MobileDeviceAccessOverrideFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMobileDeviceAccessOverridesRequest {

		/** Required */
		OrganizationId: string;
		UserId?: string;
		DeviceId?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListMobileDeviceAccessOverridesRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMobileDeviceAccessOverridesRequestFormGroup() {
		return new FormGroup<ListMobileDeviceAccessOverridesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMobileDeviceAccessRulesResponse {
		Rules?: Array<MobileDeviceAccessRule>;
	}
	export interface ListMobileDeviceAccessRulesResponseFormProperties {
	}
	export function CreateListMobileDeviceAccessRulesResponseFormGroup() {
		return new FormGroup<ListMobileDeviceAccessRulesResponseFormProperties>({
		});

	}


	/** A rule that controls access to mobile devices for an WorkMail group. */
	export interface MobileDeviceAccessRule {
		MobileDeviceAccessRuleId?: string;
		Name?: string;
		Description?: string;
		Effect?: AccessEffect;
		DeviceTypes?: Array<string>;
		NotDeviceTypes?: Array<string>;
		DeviceModels?: Array<string>;
		NotDeviceModels?: Array<string>;
		DeviceOperatingSystems?: Array<string>;
		NotDeviceOperatingSystems?: Array<string>;
		DeviceUserAgents?: Array<string>;
		NotDeviceUserAgents?: Array<string>;
		DateCreated?: Date;
		DateModified?: Date;
	}

	/** A rule that controls access to mobile devices for an WorkMail group. */
	export interface MobileDeviceAccessRuleFormProperties {
		MobileDeviceAccessRuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Effect: FormControl<AccessEffect | null | undefined>,
		DateCreated: FormControl<Date | null | undefined>,
		DateModified: FormControl<Date | null | undefined>,
	}
	export function CreateMobileDeviceAccessRuleFormGroup() {
		return new FormGroup<MobileDeviceAccessRuleFormProperties>({
			MobileDeviceAccessRuleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined),
			DateCreated: new FormControl<Date | null | undefined>(undefined),
			DateModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMobileDeviceAccessRulesRequest {

		/** Required */
		OrganizationId: string;
	}
	export interface ListMobileDeviceAccessRulesRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateListMobileDeviceAccessRulesRequestFormGroup() {
		return new FormGroup<ListMobileDeviceAccessRulesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListOrganizationsResponse {
		OrganizationSummaries?: Array<OrganizationSummary>;
		NextToken?: string;
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
		OrganizationId?: string;
		Alias?: string;
		DefaultMailDomain?: string;
		ErrorMessage?: string;
		State?: string;
	}

	/** The representation of an organization. */
	export interface OrganizationSummaryFormProperties {
		OrganizationId: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		DefaultMailDomain: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationSummaryFormGroup() {
		return new FormGroup<OrganizationSummaryFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			DefaultMailDomain: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationsRequest {
		NextToken?: string;
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
		NextToken?: string;
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

		/** Required */
		Id: string;

		/** Required */
		Type: MemberType;
	}

	/** The name of the attribute, which is one of the values defined in the UserAttribute enumeration. */
	export interface DelegateFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<MemberType | null | undefined>,
	}
	export function CreateDelegateFormGroup() {
		return new FormGroup<DelegateFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<MemberType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListResourceDelegatesRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		ResourceId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListResourceDelegatesRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceDelegatesRequestFormGroup() {
		return new FormGroup<ListResourceDelegatesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourcesResponse {
		Resources?: Array<Resource>;
		NextToken?: string;
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
		Id?: string;
		Email?: string;
		Name?: string;
		Type?: ResourceType;
		State?: EntityState;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	/** The representation of a resource. */
	export interface ResourceFormProperties {
		Id: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ResourceType | null | undefined>,
		State: FormControl<EntityState | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ResourceType | null | undefined>(undefined),
			State: new FormControl<EntityState | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListResourcesRequest {

		/** Required */
		OrganizationId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListResourcesRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourcesRequestFormGroup() {
		return new FormGroup<ListResourcesRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Describes a tag applied to a resource. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ListUsersResponse {
		Users?: Array<User>;
		NextToken?: string;
	}
	export interface ListUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The representation of an WorkMail user. */
	export interface User {
		Id?: string;
		Email?: string;
		Name?: string;
		DisplayName?: string;
		State?: EntityState;
		UserRole?: UserRole;
		EnabledDate?: Date;
		DisabledDate?: Date;
	}

	/** The representation of an WorkMail user. */
	export interface UserFormProperties {
		Id: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		State: FormControl<EntityState | null | undefined>,
		UserRole: FormControl<UserRole | null | undefined>,
		EnabledDate: FormControl<Date | null | undefined>,
		DisabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EntityState | null | undefined>(undefined),
			UserRole: new FormControl<UserRole | null | undefined>(undefined),
			EnabledDate: new FormControl<Date | null | undefined>(undefined),
			DisabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListUsersRequest {

		/** Required */
		OrganizationId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListUsersRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		Name: string;

		/** Required */
		Effect: AccessEffect;

		/** Required */
		Description: string;
		IpRanges?: Array<string>;
		NotIpRanges?: Array<string>;
		Actions?: Array<string>;
		NotActions?: Array<string>;
		UserIds?: Array<string>;
		NotUserIds?: Array<string>;

		/** Required */
		OrganizationId: string;
		ImpersonationRoleIds?: Array<string>;
		NotImpersonationRoleIds?: Array<string>;
	}
	export interface PutAccessControlRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Effect: FormControl<AccessEffect | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreatePutAccessControlRuleRequestFormGroup() {
		return new FormGroup<PutAccessControlRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutEmailMonitoringConfigurationResponse {
	}
	export interface PutEmailMonitoringConfigurationResponseFormProperties {
	}
	export function CreatePutEmailMonitoringConfigurationResponseFormGroup() {
		return new FormGroup<PutEmailMonitoringConfigurationResponseFormProperties>({
		});

	}

	export interface PutEmailMonitoringConfigurationRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		RoleArn: string;

		/** Required */
		LogGroupArn: string;
	}
	export interface PutEmailMonitoringConfigurationRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		LogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreatePutEmailMonitoringConfigurationRequestFormGroup() {
		return new FormGroup<PutEmailMonitoringConfigurationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutInboundDmarcSettingsResponse {
	}
	export interface PutInboundDmarcSettingsResponseFormProperties {
	}
	export function CreatePutInboundDmarcSettingsResponseFormGroup() {
		return new FormGroup<PutInboundDmarcSettingsResponseFormProperties>({
		});

	}

	export interface PutInboundDmarcSettingsRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		Enforced: boolean;
	}
	export interface PutInboundDmarcSettingsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		Enforced: FormControl<boolean | null | undefined>,
	}
	export function CreatePutInboundDmarcSettingsRequestFormGroup() {
		return new FormGroup<PutInboundDmarcSettingsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enforced: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;

		/** Required */
		GranteeId: string;

		/** Required */
		PermissionValues: Array<PermissionType>;
	}
	export interface PutMailboxPermissionsRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,

		/** Required */
		GranteeId: FormControl<string | null | undefined>,
	}
	export function CreatePutMailboxPermissionsRequestFormGroup() {
		return new FormGroup<PutMailboxPermissionsRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GranteeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutMobileDeviceAccessOverrideResponse {
	}
	export interface PutMobileDeviceAccessOverrideResponseFormProperties {
	}
	export function CreatePutMobileDeviceAccessOverrideResponseFormGroup() {
		return new FormGroup<PutMobileDeviceAccessOverrideResponseFormProperties>({
		});

	}

	export interface PutMobileDeviceAccessOverrideRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		UserId: string;

		/** Required */
		DeviceId: string;

		/** Required */
		Effect: AccessEffect;
		Description?: string;
	}
	export interface PutMobileDeviceAccessOverrideRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		DeviceId: FormControl<string | null | undefined>,

		/** Required */
		Effect: FormControl<AccessEffect | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePutMobileDeviceAccessOverrideRequestFormGroup() {
		return new FormGroup<PutMobileDeviceAccessOverrideRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		OrganizationId: string;
		Id?: string;

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		FolderConfigurations: Array<FolderConfiguration>;
	}
	export interface PutRetentionPolicyRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePutRetentionPolicyRequestFormGroup() {
		return new FormGroup<PutRetentionPolicyRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterMailDomainResponse {
	}
	export interface RegisterMailDomainResponseFormProperties {
	}
	export function CreateRegisterMailDomainResponseFormGroup() {
		return new FormGroup<RegisterMailDomainResponseFormProperties>({
		});

	}

	export interface RegisterMailDomainRequest {
		ClientToken?: string;

		/** Required */
		OrganizationId: string;

		/** Required */
		DomainName: string;
	}
	export interface RegisterMailDomainRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterMailDomainRequestFormGroup() {
		return new FormGroup<RegisterMailDomainRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;

		/** Required */
		Email: string;
	}
	export interface RegisterToWorkMailRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,

		/** Required */
		Email: FormControl<string | null | undefined>,
	}
	export function CreateRegisterToWorkMailRequestFormGroup() {
		return new FormGroup<RegisterToWorkMailRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		UserId: string;

		/** Required */
		Password: string;
	}
	export interface ResetPasswordRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordRequestFormGroup() {
		return new FormGroup<ResetPasswordRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMailboxExportJobResponse {
		JobId?: string;
	}
	export interface StartMailboxExportJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStartMailboxExportJobResponseFormGroup() {
		return new FormGroup<StartMailboxExportJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMailboxExportJobRequest {

		/** Required */
		ClientToken: string;

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;
		Description?: string;

		/** Required */
		RoleArn: string;

		/** Required */
		KmsKeyArn: string;

		/** Required */
		S3BucketName: string;

		/** Required */
		S3Prefix: string;
	}
	export interface StartMailboxExportJobRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		KmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,

		/** Required */
		S3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateStartMailboxExportJobRequestFormGroup() {
		return new FormGroup<StartMailboxExportJobRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface TestAvailabilityConfigurationResponse {
		TestPassed?: boolean | null;
		FailureReason?: string;
	}
	export interface TestAvailabilityConfigurationResponseFormProperties {
		TestPassed: FormControl<boolean | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateTestAvailabilityConfigurationResponseFormGroup() {
		return new FormGroup<TestAvailabilityConfigurationResponseFormProperties>({
			TestPassed: new FormControl<boolean | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestAvailabilityConfigurationRequest {

		/** Required */
		OrganizationId: string;
		DomainName?: string;

		/** Describes an EWS based availability provider. This is only used as input to the service. */
		EwsProvider?: EwsAvailabilityProvider;

		/** Describes a Lambda based availability provider. */
		LambdaProvider?: LambdaAvailabilityProvider;
	}
	export interface TestAvailabilityConfigurationRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateTestAvailabilityConfigurationRequestFormGroup() {
		return new FormGroup<TestAvailabilityConfigurationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
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

	export interface UpdateAvailabilityConfigurationResponse {
	}
	export interface UpdateAvailabilityConfigurationResponseFormProperties {
	}
	export function CreateUpdateAvailabilityConfigurationResponseFormGroup() {
		return new FormGroup<UpdateAvailabilityConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateAvailabilityConfigurationRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		DomainName: string;
		EwsProvider?: EwsAvailabilityProvider;
		LambdaProvider?: LambdaAvailabilityProvider;
	}
	export interface UpdateAvailabilityConfigurationRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAvailabilityConfigurationRequestFormGroup() {
		return new FormGroup<UpdateAvailabilityConfigurationRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDefaultMailDomainResponse {
	}
	export interface UpdateDefaultMailDomainResponseFormProperties {
	}
	export function CreateUpdateDefaultMailDomainResponseFormGroup() {
		return new FormGroup<UpdateDefaultMailDomainResponseFormProperties>({
		});

	}

	export interface UpdateDefaultMailDomainRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		DomainName: string;
	}
	export interface UpdateDefaultMailDomainRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDefaultMailDomainRequestFormGroup() {
		return new FormGroup<UpdateDefaultMailDomainRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateImpersonationRoleResponse {
	}
	export interface UpdateImpersonationRoleResponseFormProperties {
	}
	export function CreateUpdateImpersonationRoleResponseFormGroup() {
		return new FormGroup<UpdateImpersonationRoleResponseFormProperties>({
		});

	}

	export interface UpdateImpersonationRoleRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		ImpersonationRoleId: string;

		/** Required */
		Name: string;

		/** Required */
		Type: ImpersonationRoleType;
		Description?: string;

		/** Required */
		Rules: Array<ImpersonationRule>;
	}
	export interface UpdateImpersonationRoleRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ImpersonationRoleId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ImpersonationRoleType | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImpersonationRoleRequestFormGroup() {
		return new FormGroup<UpdateImpersonationRoleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImpersonationRoleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ImpersonationRoleType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		UserId: string;

		/** Required */
		MailboxQuota: number;
	}
	export interface UpdateMailboxQuotaRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		MailboxQuota: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMailboxQuotaRequestFormGroup() {
		return new FormGroup<UpdateMailboxQuotaRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MailboxQuota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMobileDeviceAccessRuleResponse {
	}
	export interface UpdateMobileDeviceAccessRuleResponseFormProperties {
	}
	export function CreateUpdateMobileDeviceAccessRuleResponseFormGroup() {
		return new FormGroup<UpdateMobileDeviceAccessRuleResponseFormProperties>({
		});

	}

	export interface UpdateMobileDeviceAccessRuleRequest {

		/** Required */
		OrganizationId: string;

		/** Required */
		MobileDeviceAccessRuleId: string;

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		Effect: AccessEffect;
		DeviceTypes?: Array<string>;
		NotDeviceTypes?: Array<string>;
		DeviceModels?: Array<string>;
		NotDeviceModels?: Array<string>;
		DeviceOperatingSystems?: Array<string>;
		NotDeviceOperatingSystems?: Array<string>;
		DeviceUserAgents?: Array<string>;
		NotDeviceUserAgents?: Array<string>;
	}
	export interface UpdateMobileDeviceAccessRuleRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		MobileDeviceAccessRuleId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Effect: FormControl<AccessEffect | null | undefined>,
	}
	export function CreateUpdateMobileDeviceAccessRuleRequestFormGroup() {
		return new FormGroup<UpdateMobileDeviceAccessRuleRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MobileDeviceAccessRuleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Effect: new FormControl<AccessEffect | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		EntityId: string;

		/** Required */
		Email: string;
	}
	export interface UpdatePrimaryEmailAddressRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		EntityId: FormControl<string | null | undefined>,

		/** Required */
		Email: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePrimaryEmailAddressRequestFormGroup() {
		return new FormGroup<UpdatePrimaryEmailAddressRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		OrganizationId: string;

		/** Required */
		ResourceId: string;
		Name?: string;
		BookingOptions?: BookingOptions;
	}
	export interface UpdateResourceRequestFormProperties {

		/** Required */
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceRequestFormGroup() {
		return new FormGroup<UpdateResourceRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export enum MobileDeviceAccessRuleEffect { ALLOW = 0, DENY = 1 }

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
		 * Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
		 * Post #X-Amz-Target=WorkMailService.AssumeImpersonationRole
		 * @return {AssumeImpersonationRoleResponse} Success
		 */
		AssumeImpersonationRole(requestBody: AssumeImpersonationRoleRequest): Observable<AssumeImpersonationRoleResponse> {
			return this.http.post<AssumeImpersonationRoleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.AssumeImpersonationRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
		 * Post #X-Amz-Target=WorkMailService.CancelMailboxExportJob
		 * @return {CancelMailboxExportJobResponse} Success
		 */
		CancelMailboxExportJob(requestBody: CancelMailboxExportJobRequest): Observable<CancelMailboxExportJobResponse> {
			return this.http.post<CancelMailboxExportJobResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CancelMailboxExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an alias to the set of a given member (user or group) of WorkMail.
		 * Post #X-Amz-Target=WorkMailService.CreateAlias
		 * @return {CreateAliasResponse} Success
		 */
		CreateAlias(requestBody: CreateAliasRequest): Observable<CreateAliasResponse> {
			return this.http.post<CreateAliasResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
		 * Post #X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration
		 * @return {CreateAvailabilityConfigurationResponse} Success
		 */
		CreateAvailabilityConfiguration(requestBody: CreateAvailabilityConfigurationRequest): Observable<CreateAvailabilityConfigurationResponse> {
			return this.http.post<CreateAvailabilityConfigurationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
		 * Post #X-Amz-Target=WorkMailService.CreateGroup
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupRequest): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>
		 * Post #X-Amz-Target=WorkMailService.CreateImpersonationRole
		 * @return {CreateImpersonationRoleResponse} Success
		 */
		CreateImpersonationRole(requestBody: CreateImpersonationRoleRequest): Observable<CreateImpersonationRoleResponse> {
			return this.http.post<CreateImpersonationRoleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateImpersonationRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new mobile device access rule for the specified WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule
		 * @return {CreateMobileDeviceAccessRuleResponse} Success
		 */
		CreateMobileDeviceAccessRule(requestBody: CreateMobileDeviceAccessRuleRequest): Observable<CreateMobileDeviceAccessRuleResponse> {
			return this.http.post<CreateMobileDeviceAccessRuleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>
		 * Post #X-Amz-Target=WorkMailService.CreateOrganization
		 * @return {CreateOrganizationResponse} Success
		 */
		CreateOrganization(requestBody: CreateOrganizationRequest): Observable<CreateOrganizationResponse> {
			return this.http.post<CreateOrganizationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new WorkMail resource.
		 * Post #X-Amz-Target=WorkMailService.CreateResource
		 * @return {CreateResourceResponse} Success
		 */
		CreateResource(requestBody: CreateResourceRequest): Observable<CreateResourceResponse> {
			return this.http.post<CreateResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
		 * Post #X-Amz-Target=WorkMailService.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
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
		 * Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
		 * Post #X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration
		 * @return {DeleteAvailabilityConfigurationResponse} Success
		 */
		DeleteAvailabilityConfiguration(requestBody: DeleteAvailabilityConfigurationRequest): Observable<DeleteAvailabilityConfigurationResponse> {
			return this.http.post<DeleteAvailabilityConfigurationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the email monitoring configuration for a specified organization.
		 * Post #X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration
		 * @return {DeleteEmailMonitoringConfigurationResponse} Success
		 */
		DeleteEmailMonitoringConfiguration(requestBody: DeleteEmailMonitoringConfigurationRequest): Observable<DeleteEmailMonitoringConfigurationResponse> {
			return this.http.post<DeleteEmailMonitoringConfigurationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a group from WorkMail.
		 * Post #X-Amz-Target=WorkMailService.DeleteGroup
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(requestBody: DeleteGroupRequest): Observable<DeleteGroupResponse> {
			return this.http.post<DeleteGroupResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an impersonation role for the given WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.DeleteImpersonationRole
		 * @return {DeleteImpersonationRoleResponse} Success
		 */
		DeleteImpersonationRole(requestBody: DeleteImpersonationRoleRequest): Observable<DeleteImpersonationRoleResponse> {
			return this.http.post<DeleteImpersonationRoleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteImpersonationRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
		 * Post #X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride
		 * @return {DeleteMobileDeviceAccessOverrideResponse} Success
		 */
		DeleteMobileDeviceAccessOverride(requestBody: DeleteMobileDeviceAccessOverrideRequest): Observable<DeleteMobileDeviceAccessOverrideResponse> {
			return this.http.post<DeleteMobileDeviceAccessOverrideResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
		 * Post #X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule
		 * @return {DeleteMobileDeviceAccessRuleResponse} Success
		 */
		DeleteMobileDeviceAccessRule(requestBody: DeleteMobileDeviceAccessRuleRequest): Observable<DeleteMobileDeviceAccessRuleResponse> {
			return this.http.post<DeleteMobileDeviceAccessRuleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.
		 * Post #X-Amz-Target=WorkMailService.DeleteOrganization
		 * @return {DeleteOrganizationResponse} Success
		 */
		DeleteOrganization(requestBody: DeleteOrganizationRequest): Observable<DeleteOrganizationResponse> {
			return this.http.post<DeleteOrganizationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
		 * Post #X-Amz-Target=WorkMailService.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<DeleteUserResponse> {
			return this.http.post<DeleteUserResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
		 * Post #X-Amz-Target=WorkMailService.DeregisterFromWorkMail
		 * @return {DeregisterFromWorkMailResponse} Success
		 */
		DeregisterFromWorkMail(requestBody: DeregisterFromWorkMailRequest): Observable<DeregisterFromWorkMailResponse> {
			return this.http.post<DeregisterFromWorkMailResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeregisterFromWorkMail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
		 * Post #X-Amz-Target=WorkMailService.DeregisterMailDomain
		 * @return {DeregisterMailDomainResponse} Success
		 */
		DeregisterMailDomain(requestBody: DeregisterMailDomainRequest): Observable<DeregisterMailDomainResponse> {
			return this.http.post<DeregisterMailDomainResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DeregisterMailDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the current email monitoring configuration for a specified organization.
		 * Post #X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration
		 * @return {DescribeEmailMonitoringConfigurationResponse} Success
		 */
		DescribeEmailMonitoringConfiguration(requestBody: DescribeEmailMonitoringConfigurationRequest): Observable<DescribeEmailMonitoringConfigurationResponse> {
			return this.http.post<DescribeEmailMonitoringConfigurationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Lists the settings in a DMARC policy for a specified organization.
		 * Post #X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings
		 * @return {DescribeInboundDmarcSettingsResponse} Success
		 */
		DescribeInboundDmarcSettings(requestBody: DescribeInboundDmarcSettingsRequest): Observable<DescribeInboundDmarcSettingsResponse> {
			return this.http.post<DescribeInboundDmarcSettingsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the current status of a mailbox export job.
		 * Post #X-Amz-Target=WorkMailService.DescribeMailboxExportJob
		 * @return {DescribeMailboxExportJobResponse} Success
		 */
		DescribeMailboxExportJob(requestBody: DescribeMailboxExportJobRequest): Observable<DescribeMailboxExportJobResponse> {
			return this.http.post<DescribeMailboxExportJobResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.DescribeMailboxExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
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
		 * Gets the impersonation role details for the given WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.GetImpersonationRole
		 * @return {GetImpersonationRoleResponse} Success
		 */
		GetImpersonationRole(requestBody: GetImpersonationRoleRequest): Observable<GetImpersonationRoleResponse> {
			return this.http.post<GetImpersonationRoleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.GetImpersonationRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests whether the given impersonation role can impersonate a target user.
		 * Post #X-Amz-Target=WorkMailService.GetImpersonationRoleEffect
		 * @return {GetImpersonationRoleEffectResponse} Success
		 */
		GetImpersonationRoleEffect(requestBody: GetImpersonationRoleEffectRequest): Observable<GetImpersonationRoleEffectResponse> {
			return this.http.post<GetImpersonationRoleEffectResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details for a mail domain, including domain records required to configure your domain with recommended security.
		 * Post #X-Amz-Target=WorkMailService.GetMailDomain
		 * @return {GetMailDomainResponse} Success
		 */
		GetMailDomain(requestBody: GetMailDomainRequest): Observable<GetMailDomainResponse> {
			return this.http.post<GetMailDomainResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.GetMailDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
		 * Post #X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect
		 * @return {GetMobileDeviceAccessEffectResponse} Success
		 */
		GetMobileDeviceAccessEffect(requestBody: GetMobileDeviceAccessEffectRequest): Observable<GetMobileDeviceAccessEffectResponse> {
			return this.http.post<GetMobileDeviceAccessEffectResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the mobile device access override for the given WorkMail organization, user, and device.
		 * Post #X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride
		 * @return {GetMobileDeviceAccessOverrideResponse} Success
		 */
		GetMobileDeviceAccessOverride(requestBody: GetMobileDeviceAccessOverrideRequest): Observable<GetMobileDeviceAccessOverrideResponse> {
			return this.http.post<GetMobileDeviceAccessOverrideResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.ListAvailabilityConfigurations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAvailabilityConfigurationsResponse} Success
		 */
		ListAvailabilityConfigurations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAvailabilityConfigurationsRequest): Observable<ListAvailabilityConfigurationsResponse> {
			return this.http.post<ListAvailabilityConfigurationsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Lists all the impersonation roles for the given WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.ListImpersonationRoles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListImpersonationRolesResponse} Success
		 */
		ListImpersonationRoles(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListImpersonationRolesRequest): Observable<ListImpersonationRolesResponse> {
			return this.http.post<ListImpersonationRolesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListImpersonationRoles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the mail domains in a given WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.ListMailDomains
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMailDomainsResponse} Success
		 */
		ListMailDomains(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMailDomainsRequest): Observable<ListMailDomainsResponse> {
			return this.http.post<ListMailDomainsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListMailDomains?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the mailbox export jobs started for the specified organization within the last seven days.
		 * Post #X-Amz-Target=WorkMailService.ListMailboxExportJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMailboxExportJobsResponse} Success
		 */
		ListMailboxExportJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMailboxExportJobsRequest): Observable<ListMailboxExportJobsResponse> {
			return this.http.post<ListMailboxExportJobsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListMailboxExportJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
		 * Post #X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMobileDeviceAccessOverridesResponse} Success
		 */
		ListMobileDeviceAccessOverrides(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMobileDeviceAccessOverridesRequest): Observable<ListMobileDeviceAccessOverridesResponse> {
			return this.http.post<ListMobileDeviceAccessOverridesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the mobile device access rules for the specified WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules
		 * @return {ListMobileDeviceAccessRulesResponse} Success
		 */
		ListMobileDeviceAccessRules(requestBody: ListMobileDeviceAccessRulesRequest): Observable<ListMobileDeviceAccessRulesResponse> {
			return this.http.post<ListMobileDeviceAccessRulesResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Lists the tags applied to an WorkMail organization resource.
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
		 * Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
		 * Post #X-Amz-Target=WorkMailService.PutAccessControlRule
		 * @return {PutAccessControlRuleResponse} Success
		 */
		PutAccessControlRule(requestBody: PutAccessControlRuleRequest): Observable<PutAccessControlRuleResponse> {
			return this.http.post<PutAccessControlRuleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.PutAccessControlRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates the email monitoring configuration for a specified organization.
		 * Post #X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration
		 * @return {PutEmailMonitoringConfigurationResponse} Success
		 */
		PutEmailMonitoringConfiguration(requestBody: PutEmailMonitoringConfigurationRequest): Observable<PutEmailMonitoringConfigurationResponse> {
			return this.http.post<PutEmailMonitoringConfigurationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables or disables a DMARC policy for a given organization.
		 * Post #X-Amz-Target=WorkMailService.PutInboundDmarcSettings
		 * @return {PutInboundDmarcSettingsResponse} Success
		 */
		PutInboundDmarcSettings(requestBody: PutInboundDmarcSettingsRequest): Observable<PutInboundDmarcSettingsResponse> {
			return this.http.post<PutInboundDmarcSettingsResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.PutInboundDmarcSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
		 * Post #X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride
		 * @return {PutMobileDeviceAccessOverrideResponse} Success
		 */
		PutMobileDeviceAccessOverride(requestBody: PutMobileDeviceAccessOverrideRequest): Observable<PutMobileDeviceAccessOverrideResponse> {
			return this.http.post<PutMobileDeviceAccessOverrideResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
		 * Post #X-Amz-Target=WorkMailService.RegisterMailDomain
		 * @return {RegisterMailDomainResponse} Success
		 */
		RegisterMailDomain(requestBody: RegisterMailDomainRequest): Observable<RegisterMailDomainResponse> {
			return this.http.post<RegisterMailDomainResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.RegisterMailDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
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
		 * Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.
		 * Post #X-Amz-Target=WorkMailService.StartMailboxExportJob
		 * @return {StartMailboxExportJobResponse} Success
		 */
		StartMailboxExportJob(requestBody: StartMailboxExportJobRequest): Observable<StartMailboxExportJobResponse> {
			return this.http.post<StartMailboxExportJobResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.StartMailboxExportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies the specified tags to the specified WorkMailorganization resource.
		 * Post #X-Amz-Target=WorkMailService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>
		 * Post #X-Amz-Target=WorkMailService.TestAvailabilityConfiguration
		 * @return {TestAvailabilityConfigurationResponse} Success
		 */
		TestAvailabilityConfiguration(requestBody: TestAvailabilityConfigurationRequest): Observable<TestAvailabilityConfigurationResponse> {
			return this.http.post<TestAvailabilityConfigurationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Untags the specified tags from the specified WorkMail organization resource.
		 * Post #X-Amz-Target=WorkMailService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
		 * Post #X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration
		 * @return {UpdateAvailabilityConfigurationResponse} Success
		 */
		UpdateAvailabilityConfiguration(requestBody: UpdateAvailabilityConfigurationRequest): Observable<UpdateAvailabilityConfigurationResponse> {
			return this.http.post<UpdateAvailabilityConfigurationResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
		 * Post #X-Amz-Target=WorkMailService.UpdateDefaultMailDomain
		 * @return {UpdateDefaultMailDomainResponse} Success
		 */
		UpdateDefaultMailDomain(requestBody: UpdateDefaultMailDomainRequest): Observable<UpdateDefaultMailDomainResponse> {
			return this.http.post<UpdateDefaultMailDomainResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an impersonation role for the given WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.UpdateImpersonationRole
		 * @return {UpdateImpersonationRoleResponse} Success
		 */
		UpdateImpersonationRole(requestBody: UpdateImpersonationRoleRequest): Observable<UpdateImpersonationRoleResponse> {
			return this.http.post<UpdateImpersonationRoleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UpdateImpersonationRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates a mobile device access rule for the specified WorkMail organization.
		 * Post #X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule
		 * @return {UpdateMobileDeviceAccessRuleResponse} Success
		 */
		UpdateMobileDeviceAccessRule(requestBody: UpdateMobileDeviceAccessRuleRequest): Observable<UpdateMobileDeviceAccessRuleResponse> {
			return this.http.post<UpdateMobileDeviceAccessRuleResponse>(this.baseUri + '#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export enum AssociateDelegateToResourceX_Amz_Target { 'WorkMailService.AssociateDelegateToResource' = 0 }

	export enum AssociateMemberToGroupX_Amz_Target { 'WorkMailService.AssociateMemberToGroup' = 0 }

	export enum AssumeImpersonationRoleX_Amz_Target { 'WorkMailService.AssumeImpersonationRole' = 0 }

	export enum CancelMailboxExportJobX_Amz_Target { 'WorkMailService.CancelMailboxExportJob' = 0 }

	export enum CreateAliasX_Amz_Target { 'WorkMailService.CreateAlias' = 0 }

	export enum CreateAvailabilityConfigurationX_Amz_Target { 'WorkMailService.CreateAvailabilityConfiguration' = 0 }

	export enum CreateGroupX_Amz_Target { 'WorkMailService.CreateGroup' = 0 }

	export enum CreateImpersonationRoleX_Amz_Target { 'WorkMailService.CreateImpersonationRole' = 0 }

	export enum CreateMobileDeviceAccessRuleX_Amz_Target { 'WorkMailService.CreateMobileDeviceAccessRule' = 0 }

	export enum CreateOrganizationX_Amz_Target { 'WorkMailService.CreateOrganization' = 0 }

	export enum CreateResourceX_Amz_Target { 'WorkMailService.CreateResource' = 0 }

	export enum CreateUserX_Amz_Target { 'WorkMailService.CreateUser' = 0 }

	export enum DeleteAccessControlRuleX_Amz_Target { 'WorkMailService.DeleteAccessControlRule' = 0 }

	export enum DeleteAliasX_Amz_Target { 'WorkMailService.DeleteAlias' = 0 }

	export enum DeleteAvailabilityConfigurationX_Amz_Target { 'WorkMailService.DeleteAvailabilityConfiguration' = 0 }

	export enum DeleteEmailMonitoringConfigurationX_Amz_Target { 'WorkMailService.DeleteEmailMonitoringConfiguration' = 0 }

	export enum DeleteGroupX_Amz_Target { 'WorkMailService.DeleteGroup' = 0 }

	export enum DeleteImpersonationRoleX_Amz_Target { 'WorkMailService.DeleteImpersonationRole' = 0 }

	export enum DeleteMailboxPermissionsX_Amz_Target { 'WorkMailService.DeleteMailboxPermissions' = 0 }

	export enum DeleteMobileDeviceAccessOverrideX_Amz_Target { 'WorkMailService.DeleteMobileDeviceAccessOverride' = 0 }

	export enum DeleteMobileDeviceAccessRuleX_Amz_Target { 'WorkMailService.DeleteMobileDeviceAccessRule' = 0 }

	export enum DeleteOrganizationX_Amz_Target { 'WorkMailService.DeleteOrganization' = 0 }

	export enum DeleteResourceX_Amz_Target { 'WorkMailService.DeleteResource' = 0 }

	export enum DeleteRetentionPolicyX_Amz_Target { 'WorkMailService.DeleteRetentionPolicy' = 0 }

	export enum DeleteUserX_Amz_Target { 'WorkMailService.DeleteUser' = 0 }

	export enum DeregisterFromWorkMailX_Amz_Target { 'WorkMailService.DeregisterFromWorkMail' = 0 }

	export enum DeregisterMailDomainX_Amz_Target { 'WorkMailService.DeregisterMailDomain' = 0 }

	export enum DescribeEmailMonitoringConfigurationX_Amz_Target { 'WorkMailService.DescribeEmailMonitoringConfiguration' = 0 }

	export enum DescribeGroupX_Amz_Target { 'WorkMailService.DescribeGroup' = 0 }

	export enum DescribeInboundDmarcSettingsX_Amz_Target { 'WorkMailService.DescribeInboundDmarcSettings' = 0 }

	export enum DescribeMailboxExportJobX_Amz_Target { 'WorkMailService.DescribeMailboxExportJob' = 0 }

	export enum DescribeOrganizationX_Amz_Target { 'WorkMailService.DescribeOrganization' = 0 }

	export enum DescribeResourceX_Amz_Target { 'WorkMailService.DescribeResource' = 0 }

	export enum DescribeUserX_Amz_Target { 'WorkMailService.DescribeUser' = 0 }

	export enum DisassociateDelegateFromResourceX_Amz_Target { 'WorkMailService.DisassociateDelegateFromResource' = 0 }

	export enum DisassociateMemberFromGroupX_Amz_Target { 'WorkMailService.DisassociateMemberFromGroup' = 0 }

	export enum GetAccessControlEffectX_Amz_Target { 'WorkMailService.GetAccessControlEffect' = 0 }

	export enum GetDefaultRetentionPolicyX_Amz_Target { 'WorkMailService.GetDefaultRetentionPolicy' = 0 }

	export enum GetImpersonationRoleX_Amz_Target { 'WorkMailService.GetImpersonationRole' = 0 }

	export enum GetImpersonationRoleEffectX_Amz_Target { 'WorkMailService.GetImpersonationRoleEffect' = 0 }

	export enum GetMailDomainX_Amz_Target { 'WorkMailService.GetMailDomain' = 0 }

	export enum GetMailboxDetailsX_Amz_Target { 'WorkMailService.GetMailboxDetails' = 0 }

	export enum GetMobileDeviceAccessEffectX_Amz_Target { 'WorkMailService.GetMobileDeviceAccessEffect' = 0 }

	export enum GetMobileDeviceAccessOverrideX_Amz_Target { 'WorkMailService.GetMobileDeviceAccessOverride' = 0 }

	export enum ListAccessControlRulesX_Amz_Target { 'WorkMailService.ListAccessControlRules' = 0 }

	export enum ListAliasesX_Amz_Target { 'WorkMailService.ListAliases' = 0 }

	export enum ListAvailabilityConfigurationsX_Amz_Target { 'WorkMailService.ListAvailabilityConfigurations' = 0 }

	export enum ListGroupMembersX_Amz_Target { 'WorkMailService.ListGroupMembers' = 0 }

	export enum ListGroupsX_Amz_Target { 'WorkMailService.ListGroups' = 0 }

	export enum ListImpersonationRolesX_Amz_Target { 'WorkMailService.ListImpersonationRoles' = 0 }

	export enum ListMailDomainsX_Amz_Target { 'WorkMailService.ListMailDomains' = 0 }

	export enum ListMailboxExportJobsX_Amz_Target { 'WorkMailService.ListMailboxExportJobs' = 0 }

	export enum ListMailboxPermissionsX_Amz_Target { 'WorkMailService.ListMailboxPermissions' = 0 }

	export enum ListMobileDeviceAccessOverridesX_Amz_Target { 'WorkMailService.ListMobileDeviceAccessOverrides' = 0 }

	export enum ListMobileDeviceAccessRulesX_Amz_Target { 'WorkMailService.ListMobileDeviceAccessRules' = 0 }

	export enum ListOrganizationsX_Amz_Target { 'WorkMailService.ListOrganizations' = 0 }

	export enum ListResourceDelegatesX_Amz_Target { 'WorkMailService.ListResourceDelegates' = 0 }

	export enum ListResourcesX_Amz_Target { 'WorkMailService.ListResources' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'WorkMailService.ListTagsForResource' = 0 }

	export enum ListUsersX_Amz_Target { 'WorkMailService.ListUsers' = 0 }

	export enum PutAccessControlRuleX_Amz_Target { 'WorkMailService.PutAccessControlRule' = 0 }

	export enum PutEmailMonitoringConfigurationX_Amz_Target { 'WorkMailService.PutEmailMonitoringConfiguration' = 0 }

	export enum PutInboundDmarcSettingsX_Amz_Target { 'WorkMailService.PutInboundDmarcSettings' = 0 }

	export enum PutMailboxPermissionsX_Amz_Target { 'WorkMailService.PutMailboxPermissions' = 0 }

	export enum PutMobileDeviceAccessOverrideX_Amz_Target { 'WorkMailService.PutMobileDeviceAccessOverride' = 0 }

	export enum PutRetentionPolicyX_Amz_Target { 'WorkMailService.PutRetentionPolicy' = 0 }

	export enum RegisterMailDomainX_Amz_Target { 'WorkMailService.RegisterMailDomain' = 0 }

	export enum RegisterToWorkMailX_Amz_Target { 'WorkMailService.RegisterToWorkMail' = 0 }

	export enum ResetPasswordX_Amz_Target { 'WorkMailService.ResetPassword' = 0 }

	export enum StartMailboxExportJobX_Amz_Target { 'WorkMailService.StartMailboxExportJob' = 0 }

	export enum TagResourceX_Amz_Target { 'WorkMailService.TagResource' = 0 }

	export enum TestAvailabilityConfigurationX_Amz_Target { 'WorkMailService.TestAvailabilityConfiguration' = 0 }

	export enum UntagResourceX_Amz_Target { 'WorkMailService.UntagResource' = 0 }

	export enum UpdateAvailabilityConfigurationX_Amz_Target { 'WorkMailService.UpdateAvailabilityConfiguration' = 0 }

	export enum UpdateDefaultMailDomainX_Amz_Target { 'WorkMailService.UpdateDefaultMailDomain' = 0 }

	export enum UpdateImpersonationRoleX_Amz_Target { 'WorkMailService.UpdateImpersonationRole' = 0 }

	export enum UpdateMailboxQuotaX_Amz_Target { 'WorkMailService.UpdateMailboxQuota' = 0 }

	export enum UpdateMobileDeviceAccessRuleX_Amz_Target { 'WorkMailService.UpdateMobileDeviceAccessRule' = 0 }

	export enum UpdatePrimaryEmailAddressX_Amz_Target { 'WorkMailService.UpdatePrimaryEmailAddress' = 0 }

	export enum UpdateResourceX_Amz_Target { 'WorkMailService.UpdateResource' = 0 }

}

