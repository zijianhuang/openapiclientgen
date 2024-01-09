import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptHandshakeResponse {

		/** <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}
	export interface AcceptHandshakeResponseFormProperties {
	}
	export function CreateAcceptHandshakeResponseFormGroup() {
		return new FormGroup<AcceptHandshakeResponseFormProperties>({
		});

	}


	/** <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
	export interface Handshake {
		Id?: string | null;
		Arn?: string | null;
		Parties?: Array<HandshakeParty>;
		State?: HandshakeState | null;
		RequestedTimestamp?: Date | null;
		ExpirationTimestamp?: Date | null;
		Action?: HandshakeAction | null;
		Resources?: Array<HandshakeResource>;
	}

	/** <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
	export interface HandshakeFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		State: FormControl<HandshakeState | null | undefined>,
		RequestedTimestamp: FormControl<Date | null | undefined>,
		ExpirationTimestamp: FormControl<Date | null | undefined>,
		Action: FormControl<HandshakeAction | null | undefined>,
	}
	export function CreateHandshakeFormGroup() {
		return new FormGroup<HandshakeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<HandshakeState | null | undefined>(undefined),
			RequestedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ExpirationTimestamp: new FormControl<Date | null | undefined>(undefined),
			Action: new FormControl<HandshakeAction | null | undefined>(undefined),
		});

	}


	/** Identifies a participant in a handshake. */
	export interface HandshakeParty {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Id: string;

		/** Required */
		Type: HandshakePartyType;
	}

	/** Identifies a participant in a handshake. */
	export interface HandshakePartyFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<HandshakePartyType | null | undefined>,
	}
	export function CreateHandshakePartyFormGroup() {
		return new FormGroup<HandshakePartyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Type: new FormControl<HandshakePartyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HandshakePartyType { ACCOUNT = 0, ORGANIZATION = 1, EMAIL = 2 }

	export enum HandshakeState { REQUESTED = 0, OPEN = 1, CANCELED = 2, ACCEPTED = 3, DECLINED = 4, EXPIRED = 5 }

	export enum HandshakeAction { INVITE = 0, ENABLE_ALL_FEATURES = 1, APPROVE_ALL_FEATURES = 2, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE = 3 }


	/** Contains additional data that is needed to process a handshake. */
	export interface HandshakeResource {
		Value?: string | null;
		Type?: HandshakeResourceType | null;
		Resources?: Array<HandshakeResource>;
	}

	/** Contains additional data that is needed to process a handshake. */
	export interface HandshakeResourceFormProperties {
		Value: FormControl<string | null | undefined>,
		Type: FormControl<HandshakeResourceType | null | undefined>,
	}
	export function CreateHandshakeResourceFormGroup() {
		return new FormGroup<HandshakeResourceFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<HandshakeResourceType | null | undefined>(undefined),
		});

	}

	export enum HandshakeResourceType { ACCOUNT = 0, ORGANIZATION = 1, ORGANIZATION_FEATURE_SET = 2, EMAIL = 3, MASTER_EMAIL = 4, MASTER_NAME = 5, NOTES = 6, PARENT_HANDSHAKE = 7 }

	export interface AcceptHandshakeRequest {

		/** Required */
		HandshakeId: string;
	}
	export interface AcceptHandshakeRequestFormProperties {

		/** Required */
		HandshakeId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptHandshakeRequestFormGroup() {
		return new FormGroup<AcceptHandshakeRequestFormProperties>({
			HandshakeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface AWSOrganizationsNotInUseException {
	}
	export interface AWSOrganizationsNotInUseExceptionFormProperties {
	}
	export function CreateAWSOrganizationsNotInUseExceptionFormGroup() {
		return new FormGroup<AWSOrganizationsNotInUseExceptionFormProperties>({
		});

	}

	export interface HandshakeConstraintViolationException {
	}
	export interface HandshakeConstraintViolationExceptionFormProperties {
	}
	export function CreateHandshakeConstraintViolationExceptionFormGroup() {
		return new FormGroup<HandshakeConstraintViolationExceptionFormProperties>({
		});

	}

	export interface HandshakeNotFoundException {
	}
	export interface HandshakeNotFoundExceptionFormProperties {
	}
	export function CreateHandshakeNotFoundExceptionFormGroup() {
		return new FormGroup<HandshakeNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidHandshakeTransitionException {
	}
	export interface InvalidHandshakeTransitionExceptionFormProperties {
	}
	export function CreateInvalidHandshakeTransitionExceptionFormGroup() {
		return new FormGroup<InvalidHandshakeTransitionExceptionFormProperties>({
		});

	}

	export interface HandshakeAlreadyInStateException {
	}
	export interface HandshakeAlreadyInStateExceptionFormProperties {
	}
	export function CreateHandshakeAlreadyInStateExceptionFormGroup() {
		return new FormGroup<HandshakeAlreadyInStateExceptionFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
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

	export interface ServiceException {
	}
	export interface ServiceExceptionFormProperties {
	}
	export function CreateServiceExceptionFormGroup() {
		return new FormGroup<ServiceExceptionFormProperties>({
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

	export interface AccessDeniedForDependencyException {
	}
	export interface AccessDeniedForDependencyExceptionFormProperties {
	}
	export function CreateAccessDeniedForDependencyExceptionFormGroup() {
		return new FormGroup<AccessDeniedForDependencyExceptionFormProperties>({
		});

	}

	export interface AttachPolicyRequest {

		/** Required */
		PolicyId: string;

		/** Required */
		TargetId: string;
	}
	export interface AttachPolicyRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,

		/** Required */
		TargetId: FormControl<string | null | undefined>,
	}
	export function CreateAttachPolicyRequestFormGroup() {
		return new FormGroup<AttachPolicyRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConstraintViolationException {
	}
	export interface ConstraintViolationExceptionFormProperties {
	}
	export function CreateConstraintViolationExceptionFormGroup() {
		return new FormGroup<ConstraintViolationExceptionFormProperties>({
		});

	}

	export interface DuplicatePolicyAttachmentException {
	}
	export interface DuplicatePolicyAttachmentExceptionFormProperties {
	}
	export function CreateDuplicatePolicyAttachmentExceptionFormGroup() {
		return new FormGroup<DuplicatePolicyAttachmentExceptionFormProperties>({
		});

	}

	export interface PolicyNotFoundException {
	}
	export interface PolicyNotFoundExceptionFormProperties {
	}
	export function CreatePolicyNotFoundExceptionFormGroup() {
		return new FormGroup<PolicyNotFoundExceptionFormProperties>({
		});

	}

	export interface PolicyTypeNotEnabledException {
	}
	export interface PolicyTypeNotEnabledExceptionFormProperties {
	}
	export function CreatePolicyTypeNotEnabledExceptionFormGroup() {
		return new FormGroup<PolicyTypeNotEnabledExceptionFormProperties>({
		});

	}

	export interface TargetNotFoundException {
	}
	export interface TargetNotFoundExceptionFormProperties {
	}
	export function CreateTargetNotFoundExceptionFormGroup() {
		return new FormGroup<TargetNotFoundExceptionFormProperties>({
		});

	}

	export interface UnsupportedAPIEndpointException {
	}
	export interface UnsupportedAPIEndpointExceptionFormProperties {
	}
	export function CreateUnsupportedAPIEndpointExceptionFormGroup() {
		return new FormGroup<UnsupportedAPIEndpointExceptionFormProperties>({
		});

	}

	export interface PolicyChangesInProgressException {
	}
	export interface PolicyChangesInProgressExceptionFormProperties {
	}
	export function CreatePolicyChangesInProgressExceptionFormGroup() {
		return new FormGroup<PolicyChangesInProgressExceptionFormProperties>({
		});

	}

	export interface CancelHandshakeResponse {

		/** <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}
	export interface CancelHandshakeResponseFormProperties {
	}
	export function CreateCancelHandshakeResponseFormGroup() {
		return new FormGroup<CancelHandshakeResponseFormProperties>({
		});

	}

	export interface CancelHandshakeRequest {

		/** Required */
		HandshakeId: string;
	}
	export interface CancelHandshakeRequestFormProperties {

		/** Required */
		HandshakeId: FormControl<string | null | undefined>,
	}
	export function CreateCancelHandshakeRequestFormGroup() {
		return new FormGroup<CancelHandshakeRequestFormProperties>({
			HandshakeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAccountResponse {

		/** Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
		CreateAccountStatus?: CreateAccountStatus;
	}
	export interface CreateAccountResponseFormProperties {
	}
	export function CreateCreateAccountResponseFormGroup() {
		return new FormGroup<CreateAccountResponseFormProperties>({
		});

	}


	/** Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
	export interface CreateAccountStatus {
		Id?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AccountName?: string | null;
		State?: CreateAccountStatusState | null;
		RequestedTimestamp?: Date | null;
		CompletedTimestamp?: Date | null;
		AccountId?: string | null;
		GovCloudAccountId?: string | null;
		FailureReason?: CreateAccountStatusFailureReason | null;
	}

	/** Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
	export interface CreateAccountStatusFormProperties {
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		AccountName: FormControl<string | null | undefined>,
		State: FormControl<CreateAccountStatusState | null | undefined>,
		RequestedTimestamp: FormControl<Date | null | undefined>,
		CompletedTimestamp: FormControl<Date | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		GovCloudAccountId: FormControl<string | null | undefined>,
		FailureReason: FormControl<CreateAccountStatusFailureReason | null | undefined>,
	}
	export function CreateCreateAccountStatusFormGroup() {
		return new FormGroup<CreateAccountStatusFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AccountName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[\u0020-\u007E]+')]),
			State: new FormControl<CreateAccountStatusState | null | undefined>(undefined),
			RequestedTimestamp: new FormControl<Date | null | undefined>(undefined),
			CompletedTimestamp: new FormControl<Date | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			GovCloudAccountId: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<CreateAccountStatusFailureReason | null | undefined>(undefined),
		});

	}

	export enum CreateAccountStatusState { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum CreateAccountStatusFailureReason { ACCOUNT_LIMIT_EXCEEDED = 0, EMAIL_ALREADY_EXISTS = 1, INVALID_ADDRESS = 2, INVALID_EMAIL = 3, CONCURRENT_ACCOUNT_MODIFICATION = 4, INTERNAL_FAILURE = 5, GOVCLOUD_ACCOUNT_ALREADY_EXISTS = 6 }

	export interface CreateAccountRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 6
		 */
		Email: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		AccountName: string;
		RoleName?: string | null;
		IamUserAccessToBilling?: CreateAccountRequestIamUserAccessToBilling | null;
	}
	export interface CreateAccountRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 6
		 */
		Email: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		AccountName: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		IamUserAccessToBilling: FormControl<CreateAccountRequestIamUserAccessToBilling | null | undefined>,
	}
	export function CreateCreateAccountRequestFormGroup() {
		return new FormGroup<CreateAccountRequestFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(6), Validators.pattern('[^\s@]+@[^\s@]+\.[^\s@]+')]),
			AccountName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[\u0020-\u007E]+')]),
			RoleName: new FormControl<string | null | undefined>(undefined),
			IamUserAccessToBilling: new FormControl<CreateAccountRequestIamUserAccessToBilling | null | undefined>(undefined),
		});

	}

	export enum CreateAccountRequestIamUserAccessToBilling { ALLOW = 0, DENY = 1 }

	export interface FinalizingOrganizationException {
	}
	export interface FinalizingOrganizationExceptionFormProperties {
	}
	export function CreateFinalizingOrganizationExceptionFormGroup() {
		return new FormGroup<FinalizingOrganizationExceptionFormProperties>({
		});

	}

	export interface CreateGovCloudAccountResponse {

		/** Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
		CreateAccountStatus?: CreateAccountStatus;
	}
	export interface CreateGovCloudAccountResponseFormProperties {
	}
	export function CreateCreateGovCloudAccountResponseFormGroup() {
		return new FormGroup<CreateGovCloudAccountResponseFormProperties>({
		});

	}

	export interface CreateGovCloudAccountRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 6
		 */
		Email: string;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		AccountName: string;
		RoleName?: string | null;
		IamUserAccessToBilling?: CreateAccountRequestIamUserAccessToBilling | null;
	}
	export interface CreateGovCloudAccountRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 6
		 */
		Email: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		AccountName: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		IamUserAccessToBilling: FormControl<CreateAccountRequestIamUserAccessToBilling | null | undefined>,
	}
	export function CreateCreateGovCloudAccountRequestFormGroup() {
		return new FormGroup<CreateGovCloudAccountRequestFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(6), Validators.pattern('[^\s@]+@[^\s@]+\.[^\s@]+')]),
			AccountName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[\u0020-\u007E]+')]),
			RoleName: new FormControl<string | null | undefined>(undefined),
			IamUserAccessToBilling: new FormControl<CreateAccountRequestIamUserAccessToBilling | null | undefined>(undefined),
		});

	}

	export interface CreateOrganizationResponse {

		/** Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies . */
		Organization?: Organization;
	}
	export interface CreateOrganizationResponseFormProperties {
	}
	export function CreateCreateOrganizationResponseFormGroup() {
		return new FormGroup<CreateOrganizationResponseFormProperties>({
		});

	}


	/** Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies . */
	export interface Organization {
		Id?: string | null;
		Arn?: string | null;
		FeatureSet?: OrganizationFeatureSet | null;
		MasterAccountArn?: string | null;
		MasterAccountId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		MasterAccountEmail?: string | null;
		AvailablePolicyTypes?: Array<PolicyTypeSummary>;
	}

	/** Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies . */
	export interface OrganizationFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		FeatureSet: FormControl<OrganizationFeatureSet | null | undefined>,
		MasterAccountArn: FormControl<string | null | undefined>,
		MasterAccountId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		MasterAccountEmail: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			FeatureSet: new FormControl<OrganizationFeatureSet | null | undefined>(undefined),
			MasterAccountArn: new FormControl<string | null | undefined>(undefined),
			MasterAccountId: new FormControl<string | null | undefined>(undefined),
			MasterAccountEmail: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(6), Validators.pattern('[^\s@]+@[^\s@]+\.[^\s@]+')]),
		});

	}

	export enum OrganizationFeatureSet { ALL = 0, CONSOLIDATED_BILLING = 1 }


	/** Contains information about a policy type and its status in the associated root. */
	export interface PolicyTypeSummary {
		Type?: PolicyTypeSummaryType | null;
		Status?: PolicyTypeSummaryStatus | null;
	}

	/** Contains information about a policy type and its status in the associated root. */
	export interface PolicyTypeSummaryFormProperties {
		Type: FormControl<PolicyTypeSummaryType | null | undefined>,
		Status: FormControl<PolicyTypeSummaryStatus | null | undefined>,
	}
	export function CreatePolicyTypeSummaryFormGroup() {
		return new FormGroup<PolicyTypeSummaryFormProperties>({
			Type: new FormControl<PolicyTypeSummaryType | null | undefined>(undefined),
			Status: new FormControl<PolicyTypeSummaryStatus | null | undefined>(undefined),
		});

	}

	export enum PolicyTypeSummaryType { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export enum PolicyTypeSummaryStatus { ENABLED = 0, PENDING_ENABLE = 1, PENDING_DISABLE = 2 }

	export interface CreateOrganizationRequest {
		FeatureSet?: OrganizationFeatureSet | null;
	}
	export interface CreateOrganizationRequestFormProperties {
		FeatureSet: FormControl<OrganizationFeatureSet | null | undefined>,
	}
	export function CreateCreateOrganizationRequestFormGroup() {
		return new FormGroup<CreateOrganizationRequestFormProperties>({
			FeatureSet: new FormControl<OrganizationFeatureSet | null | undefined>(undefined),
		});

	}

	export interface AlreadyInOrganizationException {
	}
	export interface AlreadyInOrganizationExceptionFormProperties {
	}
	export function CreateAlreadyInOrganizationExceptionFormGroup() {
		return new FormGroup<AlreadyInOrganizationExceptionFormProperties>({
		});

	}

	export interface CreateOrganizationalUnitResponse {

		/** Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
		OrganizationalUnit?: OrganizationalUnit;
	}
	export interface CreateOrganizationalUnitResponseFormProperties {
	}
	export function CreateCreateOrganizationalUnitResponseFormGroup() {
		return new FormGroup<CreateOrganizationalUnitResponseFormProperties>({
		});

	}


	/** Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
	export interface OrganizationalUnit {
		Id?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
	}

	/** Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
	export interface OrganizationalUnitFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationalUnitFormGroup() {
		return new FormGroup<OrganizationalUnitFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface CreateOrganizationalUnitRequest {

		/** Required */
		ParentId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;
	}
	export interface CreateOrganizationalUnitRequestFormProperties {

		/** Required */
		ParentId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationalUnitRequestFormGroup() {
		return new FormGroup<CreateOrganizationalUnitRequestFormProperties>({
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface DuplicateOrganizationalUnitException {
	}
	export interface DuplicateOrganizationalUnitExceptionFormProperties {
	}
	export function CreateDuplicateOrganizationalUnitExceptionFormGroup() {
		return new FormGroup<DuplicateOrganizationalUnitExceptionFormProperties>({
		});

	}

	export interface ParentNotFoundException {
	}
	export interface ParentNotFoundExceptionFormProperties {
	}
	export function CreateParentNotFoundExceptionFormGroup() {
		return new FormGroup<ParentNotFoundExceptionFormProperties>({
		});

	}

	export interface CreatePolicyResponse {

		/** Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
		Policy?: Policy;
	}
	export interface CreatePolicyResponseFormProperties {
	}
	export function CreateCreatePolicyResponseFormGroup() {
		return new FormGroup<CreatePolicyResponseFormProperties>({
		});

	}


	/** Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
	export interface Policy {

		/** Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>. */
		PolicySummary?: PolicySummary;

		/**
		 * Max length: 1000000
		 * Min length: 1
		 */
		Content?: string | null;
	}

	/** Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
	export interface PolicyFormProperties {

		/**
		 * Max length: 1000000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000000), Validators.minLength(1)]),
		});

	}


	/** Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>. */
	export interface PolicySummary {
		Id?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Max length: 512 */
		Description?: string | null;
		Type?: PolicyTypeSummaryType | null;
		AwsManaged?: boolean | null;
	}

	/** Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>. */
	export interface PolicySummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 512 */
		Description: FormControl<string | null | undefined>,
		Type: FormControl<PolicyTypeSummaryType | null | undefined>,
		AwsManaged: FormControl<boolean | null | undefined>,
	}
	export function CreatePolicySummaryFormGroup() {
		return new FormGroup<PolicySummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
			Type: new FormControl<PolicyTypeSummaryType | null | undefined>(undefined),
			AwsManaged: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePolicyRequest {

		/**
		 * Required
		 * Max length: 1000000
		 * Min length: 1
		 */
		Content: string;

		/**
		 * Required
		 * Max length: 512
		 */
		Description: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Type: PolicyTypeSummaryType;
	}
	export interface CreatePolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 1000000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<PolicyTypeSummaryType | null | undefined>,
	}
	export function CreateCreatePolicyRequestFormGroup() {
		return new FormGroup<CreatePolicyRequestFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1000000), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Type: new FormControl<PolicyTypeSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DuplicatePolicyException {
	}
	export interface DuplicatePolicyExceptionFormProperties {
	}
	export function CreateDuplicatePolicyExceptionFormGroup() {
		return new FormGroup<DuplicatePolicyExceptionFormProperties>({
		});

	}

	export interface MalformedPolicyDocumentException {
	}
	export interface MalformedPolicyDocumentExceptionFormProperties {
	}
	export function CreateMalformedPolicyDocumentExceptionFormGroup() {
		return new FormGroup<MalformedPolicyDocumentExceptionFormProperties>({
		});

	}

	export interface PolicyTypeNotAvailableForOrganizationException {
	}
	export interface PolicyTypeNotAvailableForOrganizationExceptionFormProperties {
	}
	export function CreatePolicyTypeNotAvailableForOrganizationExceptionFormGroup() {
		return new FormGroup<PolicyTypeNotAvailableForOrganizationExceptionFormProperties>({
		});

	}

	export interface DeclineHandshakeResponse {

		/** <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}
	export interface DeclineHandshakeResponseFormProperties {
	}
	export function CreateDeclineHandshakeResponseFormGroup() {
		return new FormGroup<DeclineHandshakeResponseFormProperties>({
		});

	}

	export interface DeclineHandshakeRequest {

		/** Required */
		HandshakeId: string;
	}
	export interface DeclineHandshakeRequestFormProperties {

		/** Required */
		HandshakeId: FormControl<string | null | undefined>,
	}
	export function CreateDeclineHandshakeRequestFormGroup() {
		return new FormGroup<DeclineHandshakeRequestFormProperties>({
			HandshakeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrganizationNotEmptyException {
	}
	export interface OrganizationNotEmptyExceptionFormProperties {
	}
	export function CreateOrganizationNotEmptyExceptionFormGroup() {
		return new FormGroup<OrganizationNotEmptyExceptionFormProperties>({
		});

	}

	export interface DeleteOrganizationalUnitRequest {

		/** Required */
		OrganizationalUnitId: string;
	}
	export interface DeleteOrganizationalUnitRequestFormProperties {

		/** Required */
		OrganizationalUnitId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOrganizationalUnitRequestFormGroup() {
		return new FormGroup<DeleteOrganizationalUnitRequestFormProperties>({
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrganizationalUnitNotEmptyException {
	}
	export interface OrganizationalUnitNotEmptyExceptionFormProperties {
	}
	export function CreateOrganizationalUnitNotEmptyExceptionFormGroup() {
		return new FormGroup<OrganizationalUnitNotEmptyExceptionFormProperties>({
		});

	}

	export interface OrganizationalUnitNotFoundException {
	}
	export interface OrganizationalUnitNotFoundExceptionFormProperties {
	}
	export function CreateOrganizationalUnitNotFoundExceptionFormGroup() {
		return new FormGroup<OrganizationalUnitNotFoundExceptionFormProperties>({
		});

	}

	export interface DeletePolicyRequest {

		/** Required */
		PolicyId: string;
	}
	export interface DeletePolicyRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePolicyRequestFormGroup() {
		return new FormGroup<DeletePolicyRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PolicyInUseException {
	}
	export interface PolicyInUseExceptionFormProperties {
	}
	export function CreatePolicyInUseExceptionFormGroup() {
		return new FormGroup<PolicyInUseExceptionFormProperties>({
		});

	}

	export interface DeregisterDelegatedAdministratorRequest {

		/** Required */
		AccountId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: string;
	}
	export interface DeregisterDelegatedAdministratorRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterDelegatedAdministratorRequestFormGroup() {
		return new FormGroup<DeregisterDelegatedAdministratorRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServicePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+=,.@-]*')]),
		});

	}

	export interface AccountNotFoundException {
	}
	export interface AccountNotFoundExceptionFormProperties {
	}
	export function CreateAccountNotFoundExceptionFormGroup() {
		return new FormGroup<AccountNotFoundExceptionFormProperties>({
		});

	}

	export interface AccountNotRegisteredException {
	}
	export interface AccountNotRegisteredExceptionFormProperties {
	}
	export function CreateAccountNotRegisteredExceptionFormGroup() {
		return new FormGroup<AccountNotRegisteredExceptionFormProperties>({
		});

	}

	export interface DescribeAccountResponse {

		/** Contains information about an AWS account that is a member of an organization. */
		Account?: Account;
	}
	export interface DescribeAccountResponseFormProperties {
	}
	export function CreateDescribeAccountResponseFormGroup() {
		return new FormGroup<DescribeAccountResponseFormProperties>({
		});

	}


	/** Contains information about an AWS account that is a member of an organization. */
	export interface Account {
		Id?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		Email?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Name?: string | null;
		Status?: AccountStatus | null;
		JoinedMethod?: AccountJoinedMethod | null;
		JoinedTimestamp?: Date | null;
	}

	/** Contains information about an AWS account that is a member of an organization. */
	export interface AccountFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		Email: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<AccountStatus | null | undefined>,
		JoinedMethod: FormControl<AccountJoinedMethod | null | undefined>,
		JoinedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(6), Validators.pattern('[^\s@]+@[^\s@]+\.[^\s@]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[\u0020-\u007E]+')]),
			Status: new FormControl<AccountStatus | null | undefined>(undefined),
			JoinedMethod: new FormControl<AccountJoinedMethod | null | undefined>(undefined),
			JoinedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AccountStatus { ACTIVE = 0, SUSPENDED = 1 }

	export enum AccountJoinedMethod { INVITED = 0, CREATED = 1 }

	export interface DescribeAccountRequest {

		/** Required */
		AccountId: string;
	}
	export interface DescribeAccountRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountRequestFormGroup() {
		return new FormGroup<DescribeAccountRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCreateAccountStatusResponse {

		/** Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization. */
		CreateAccountStatus?: CreateAccountStatus;
	}
	export interface DescribeCreateAccountStatusResponseFormProperties {
	}
	export function CreateDescribeCreateAccountStatusResponseFormGroup() {
		return new FormGroup<DescribeCreateAccountStatusResponseFormProperties>({
		});

	}

	export interface DescribeCreateAccountStatusRequest {

		/** Required */
		CreateAccountRequestId: string;
	}
	export interface DescribeCreateAccountStatusRequestFormProperties {

		/** Required */
		CreateAccountRequestId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCreateAccountStatusRequestFormGroup() {
		return new FormGroup<DescribeCreateAccountStatusRequestFormProperties>({
			CreateAccountRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAccountStatusNotFoundException {
	}
	export interface CreateAccountStatusNotFoundExceptionFormProperties {
	}
	export function CreateCreateAccountStatusNotFoundExceptionFormGroup() {
		return new FormGroup<CreateAccountStatusNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeEffectivePolicyResponse {

		/** Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account. */
		EffectivePolicy?: EffectivePolicy;
	}
	export interface DescribeEffectivePolicyResponseFormProperties {
	}
	export function CreateDescribeEffectivePolicyResponseFormGroup() {
		return new FormGroup<DescribeEffectivePolicyResponseFormProperties>({
		});

	}


	/** Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account. */
	export interface EffectivePolicy {

		/**
		 * Max length: 1000000
		 * Min length: 1
		 */
		PolicyContent?: string | null;
		LastUpdatedTimestamp?: Date | null;
		TargetId?: string | null;
		PolicyType?: EffectivePolicyPolicyType | null;
	}

	/** Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account. */
	export interface EffectivePolicyFormProperties {

		/**
		 * Max length: 1000000
		 * Min length: 1
		 */
		PolicyContent: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		TargetId: FormControl<string | null | undefined>,
		PolicyType: FormControl<EffectivePolicyPolicyType | null | undefined>,
	}
	export function CreateEffectivePolicyFormGroup() {
		return new FormGroup<EffectivePolicyFormProperties>({
			PolicyContent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000000), Validators.minLength(1)]),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			TargetId: new FormControl<string | null | undefined>(undefined),
			PolicyType: new FormControl<EffectivePolicyPolicyType | null | undefined>(undefined),
		});

	}

	export enum EffectivePolicyPolicyType { TAG_POLICY = 0 }

	export interface DescribeEffectivePolicyRequest {

		/** Required */
		PolicyType: EffectivePolicyPolicyType;
		TargetId?: string | null;
	}
	export interface DescribeEffectivePolicyRequestFormProperties {

		/** Required */
		PolicyType: FormControl<EffectivePolicyPolicyType | null | undefined>,
		TargetId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEffectivePolicyRequestFormGroup() {
		return new FormGroup<DescribeEffectivePolicyRequestFormProperties>({
			PolicyType: new FormControl<EffectivePolicyPolicyType | null | undefined>(undefined, [Validators.required]),
			TargetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EffectivePolicyNotFoundException {
	}
	export interface EffectivePolicyNotFoundExceptionFormProperties {
	}
	export function CreateEffectivePolicyNotFoundExceptionFormGroup() {
		return new FormGroup<EffectivePolicyNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeHandshakeResponse {

		/** <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}
	export interface DescribeHandshakeResponseFormProperties {
	}
	export function CreateDescribeHandshakeResponseFormGroup() {
		return new FormGroup<DescribeHandshakeResponseFormProperties>({
		});

	}

	export interface DescribeHandshakeRequest {

		/** Required */
		HandshakeId: string;
	}
	export interface DescribeHandshakeRequestFormProperties {

		/** Required */
		HandshakeId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHandshakeRequestFormGroup() {
		return new FormGroup<DescribeHandshakeRequestFormProperties>({
			HandshakeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOrganizationResponse {

		/** Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies . */
		Organization?: Organization;
	}
	export interface DescribeOrganizationResponseFormProperties {
	}
	export function CreateDescribeOrganizationResponseFormGroup() {
		return new FormGroup<DescribeOrganizationResponseFormProperties>({
		});

	}

	export interface DescribeOrganizationalUnitResponse {

		/** Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
		OrganizationalUnit?: OrganizationalUnit;
	}
	export interface DescribeOrganizationalUnitResponseFormProperties {
	}
	export function CreateDescribeOrganizationalUnitResponseFormGroup() {
		return new FormGroup<DescribeOrganizationalUnitResponseFormProperties>({
		});

	}

	export interface DescribeOrganizationalUnitRequest {

		/** Required */
		OrganizationalUnitId: string;
	}
	export interface DescribeOrganizationalUnitRequestFormProperties {

		/** Required */
		OrganizationalUnitId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationalUnitRequestFormGroup() {
		return new FormGroup<DescribeOrganizationalUnitRequestFormProperties>({
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePolicyResponse {

		/** Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
		Policy?: Policy;
	}
	export interface DescribePolicyResponseFormProperties {
	}
	export function CreateDescribePolicyResponseFormGroup() {
		return new FormGroup<DescribePolicyResponseFormProperties>({
		});

	}

	export interface DescribePolicyRequest {

		/** Required */
		PolicyId: string;
	}
	export interface DescribePolicyRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePolicyRequestFormGroup() {
		return new FormGroup<DescribePolicyRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachPolicyRequest {

		/** Required */
		PolicyId: string;

		/** Required */
		TargetId: string;
	}
	export interface DetachPolicyRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,

		/** Required */
		TargetId: FormControl<string | null | undefined>,
	}
	export function CreateDetachPolicyRequestFormGroup() {
		return new FormGroup<DetachPolicyRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PolicyNotAttachedException {
	}
	export interface PolicyNotAttachedExceptionFormProperties {
	}
	export function CreatePolicyNotAttachedExceptionFormGroup() {
		return new FormGroup<PolicyNotAttachedExceptionFormProperties>({
		});

	}

	export interface DisableAWSServiceAccessRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: string;
	}
	export interface DisableAWSServiceAccessRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: FormControl<string | null | undefined>,
	}
	export function CreateDisableAWSServiceAccessRequestFormGroup() {
		return new FormGroup<DisableAWSServiceAccessRequestFormProperties>({
			ServicePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+=,.@-]*')]),
		});

	}

	export interface DisablePolicyTypeResponse {

		/** Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root. */
		Root?: Root;
	}
	export interface DisablePolicyTypeResponseFormProperties {
	}
	export function CreateDisablePolicyTypeResponseFormGroup() {
		return new FormGroup<DisablePolicyTypeResponseFormProperties>({
		});

	}


	/** Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root. */
	export interface Root {
		Id?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
		PolicyTypes?: Array<PolicyTypeSummary>;
	}

	/** Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root. */
	export interface RootFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRootFormGroup() {
		return new FormGroup<RootFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface DisablePolicyTypeRequest {

		/** Required */
		RootId: string;

		/** Required */
		PolicyType: PolicyTypeSummaryType;
	}
	export interface DisablePolicyTypeRequestFormProperties {

		/** Required */
		RootId: FormControl<string | null | undefined>,

		/** Required */
		PolicyType: FormControl<PolicyTypeSummaryType | null | undefined>,
	}
	export function CreateDisablePolicyTypeRequestFormGroup() {
		return new FormGroup<DisablePolicyTypeRequestFormProperties>({
			RootId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyType: new FormControl<PolicyTypeSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RootNotFoundException {
	}
	export interface RootNotFoundExceptionFormProperties {
	}
	export function CreateRootNotFoundExceptionFormGroup() {
		return new FormGroup<RootNotFoundExceptionFormProperties>({
		});

	}

	export interface EnableAWSServiceAccessRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: string;
	}
	export interface EnableAWSServiceAccessRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: FormControl<string | null | undefined>,
	}
	export function CreateEnableAWSServiceAccessRequestFormGroup() {
		return new FormGroup<EnableAWSServiceAccessRequestFormProperties>({
			ServicePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+=,.@-]*')]),
		});

	}

	export interface EnableAllFeaturesResponse {

		/** <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}
	export interface EnableAllFeaturesResponseFormProperties {
	}
	export function CreateEnableAllFeaturesResponseFormGroup() {
		return new FormGroup<EnableAllFeaturesResponseFormProperties>({
		});

	}

	export interface EnableAllFeaturesRequest {
	}
	export interface EnableAllFeaturesRequestFormProperties {
	}
	export function CreateEnableAllFeaturesRequestFormGroup() {
		return new FormGroup<EnableAllFeaturesRequestFormProperties>({
		});

	}

	export interface EnablePolicyTypeResponse {

		/** Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. Every root contains every AWS account in the organization. Each root enables the accounts to be organized in a different way and to have different policy types enabled for use in that root. */
		Root?: Root;
	}
	export interface EnablePolicyTypeResponseFormProperties {
	}
	export function CreateEnablePolicyTypeResponseFormGroup() {
		return new FormGroup<EnablePolicyTypeResponseFormProperties>({
		});

	}

	export interface EnablePolicyTypeRequest {

		/** Required */
		RootId: string;

		/** Required */
		PolicyType: PolicyTypeSummaryType;
	}
	export interface EnablePolicyTypeRequestFormProperties {

		/** Required */
		RootId: FormControl<string | null | undefined>,

		/** Required */
		PolicyType: FormControl<PolicyTypeSummaryType | null | undefined>,
	}
	export function CreateEnablePolicyTypeRequestFormGroup() {
		return new FormGroup<EnablePolicyTypeRequestFormProperties>({
			RootId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyType: new FormControl<PolicyTypeSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PolicyTypeAlreadyEnabledException {
	}
	export interface PolicyTypeAlreadyEnabledExceptionFormProperties {
	}
	export function CreatePolicyTypeAlreadyEnabledExceptionFormGroup() {
		return new FormGroup<PolicyTypeAlreadyEnabledExceptionFormProperties>({
		});

	}

	export interface InviteAccountToOrganizationResponse {

		/** <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p> */
		Handshake?: Handshake;
	}
	export interface InviteAccountToOrganizationResponseFormProperties {
	}
	export function CreateInviteAccountToOrganizationResponseFormGroup() {
		return new FormGroup<InviteAccountToOrganizationResponseFormProperties>({
		});

	}

	export interface InviteAccountToOrganizationRequest {

		/**
		 * Identifies a participant in a handshake.
		 * Required
		 */
		Target: HandshakeParty;

		/** Max length: 1024 */
		Notes?: string | null;
	}
	export interface InviteAccountToOrganizationRequestFormProperties {

		/** Max length: 1024 */
		Notes: FormControl<string | null | undefined>,
	}
	export function CreateInviteAccountToOrganizationRequestFormGroup() {
		return new FormGroup<InviteAccountToOrganizationRequestFormProperties>({
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface AccountOwnerNotVerifiedException {
	}
	export interface AccountOwnerNotVerifiedExceptionFormProperties {
	}
	export function CreateAccountOwnerNotVerifiedExceptionFormGroup() {
		return new FormGroup<AccountOwnerNotVerifiedExceptionFormProperties>({
		});

	}

	export interface DuplicateHandshakeException {
	}
	export interface DuplicateHandshakeExceptionFormProperties {
	}
	export function CreateDuplicateHandshakeExceptionFormGroup() {
		return new FormGroup<DuplicateHandshakeExceptionFormProperties>({
		});

	}

	export interface MasterCannotLeaveOrganizationException {
	}
	export interface MasterCannotLeaveOrganizationExceptionFormProperties {
	}
	export function CreateMasterCannotLeaveOrganizationExceptionFormGroup() {
		return new FormGroup<MasterCannotLeaveOrganizationExceptionFormProperties>({
		});

	}

	export interface ListAWSServiceAccessForOrganizationResponse {
		EnabledServicePrincipals?: Array<EnabledServicePrincipal>;
		NextToken?: string | null;
	}
	export interface ListAWSServiceAccessForOrganizationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAWSServiceAccessForOrganizationResponseFormGroup() {
		return new FormGroup<ListAWSServiceAccessForOrganizationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations. */
	export interface EnabledServicePrincipal {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal?: string | null;
		DateEnabled?: Date | null;
	}

	/** A structure that contains details of a service principal that represents an AWS service that is enabled to integrate with AWS Organizations. */
	export interface EnabledServicePrincipalFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: FormControl<string | null | undefined>,
		DateEnabled: FormControl<Date | null | undefined>,
	}
	export function CreateEnabledServicePrincipalFormGroup() {
		return new FormGroup<EnabledServicePrincipalFormProperties>({
			ServicePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+=,.@-]*')]),
			DateEnabled: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAWSServiceAccessForOrganizationRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListAWSServiceAccessForOrganizationRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAWSServiceAccessForOrganizationRequestFormGroup() {
		return new FormGroup<ListAWSServiceAccessForOrganizationRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListAccountsResponse {
		Accounts?: Array<Account>;
		NextToken?: string | null;
	}
	export interface ListAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsResponseFormGroup() {
		return new FormGroup<ListAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountsRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListAccountsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAccountsRequestFormGroup() {
		return new FormGroup<ListAccountsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListAccountsForParentResponse {
		Accounts?: Array<Account>;
		NextToken?: string | null;
	}
	export interface ListAccountsForParentResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsForParentResponseFormGroup() {
		return new FormGroup<ListAccountsForParentResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountsForParentRequest {

		/** Required */
		ParentId: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListAccountsForParentRequestFormProperties {

		/** Required */
		ParentId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAccountsForParentRequestFormGroup() {
		return new FormGroup<ListAccountsForParentRequestFormProperties>({
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListChildrenResponse {
		Children?: Array<Child>;
		NextToken?: string | null;
	}
	export interface ListChildrenResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChildrenResponseFormGroup() {
		return new FormGroup<ListChildrenResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a list of child entities, either OUs or accounts. */
	export interface Child {
		Id?: string | null;
		Type?: ChildType | null;
	}

	/** Contains a list of child entities, either OUs or accounts. */
	export interface ChildFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<ChildType | null | undefined>,
	}
	export function CreateChildFormGroup() {
		return new FormGroup<ChildFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ChildType | null | undefined>(undefined),
		});

	}

	export enum ChildType { ACCOUNT = 0, ORGANIZATIONAL_UNIT = 1 }

	export interface ListChildrenRequest {

		/** Required */
		ParentId: string;

		/** Required */
		ChildType: ChildType;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListChildrenRequestFormProperties {

		/** Required */
		ParentId: FormControl<string | null | undefined>,

		/** Required */
		ChildType: FormControl<ChildType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListChildrenRequestFormGroup() {
		return new FormGroup<ListChildrenRequestFormProperties>({
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChildType: new FormControl<ChildType | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListCreateAccountStatusResponse {
		CreateAccountStatuses?: Array<CreateAccountStatus>;
		NextToken?: string | null;
	}
	export interface ListCreateAccountStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCreateAccountStatusResponseFormGroup() {
		return new FormGroup<ListCreateAccountStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCreateAccountStatusRequest {
		States?: Array<CreateAccountState>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListCreateAccountStatusRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCreateAccountStatusRequestFormGroup() {
		return new FormGroup<ListCreateAccountStatusRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export enum CreateAccountState { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface ListDelegatedAdministratorsResponse {
		DelegatedAdministrators?: Array<DelegatedAdministrator>;
		NextToken?: string | null;
	}
	export interface ListDelegatedAdministratorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDelegatedAdministratorsResponseFormGroup() {
		return new FormGroup<ListDelegatedAdministratorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the delegated administrator. */
	export interface DelegatedAdministrator {
		Id?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		Email?: string | null;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Name?: string | null;
		Status?: AccountStatus | null;
		JoinedMethod?: AccountJoinedMethod | null;
		JoinedTimestamp?: Date | null;
		DelegationEnabledDate?: Date | null;
	}

	/** Contains information about the delegated administrator. */
	export interface DelegatedAdministratorFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		Email: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<AccountStatus | null | undefined>,
		JoinedMethod: FormControl<AccountJoinedMethod | null | undefined>,
		JoinedTimestamp: FormControl<Date | null | undefined>,
		DelegationEnabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateDelegatedAdministratorFormGroup() {
		return new FormGroup<DelegatedAdministratorFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(6), Validators.pattern('[^\s@]+@[^\s@]+\.[^\s@]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(1), Validators.pattern('[\u0020-\u007E]+')]),
			Status: new FormControl<AccountStatus | null | undefined>(undefined),
			JoinedMethod: new FormControl<AccountJoinedMethod | null | undefined>(undefined),
			JoinedTimestamp: new FormControl<Date | null | undefined>(undefined),
			DelegationEnabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDelegatedAdministratorsRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal?: string | null;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListDelegatedAdministratorsRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDelegatedAdministratorsRequestFormGroup() {
		return new FormGroup<ListDelegatedAdministratorsRequestFormProperties>({
			ServicePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+=,.@-]*')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListDelegatedServicesForAccountResponse {
		DelegatedServices?: Array<DelegatedService>;
		NextToken?: string | null;
	}
	export interface ListDelegatedServicesForAccountResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDelegatedServicesForAccountResponseFormGroup() {
		return new FormGroup<ListDelegatedServicesForAccountResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the AWS service for which the account is a delegated administrator. */
	export interface DelegatedService {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal?: string | null;
		DelegationEnabledDate?: Date | null;
	}

	/** Contains information about the AWS service for which the account is a delegated administrator. */
	export interface DelegatedServiceFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: FormControl<string | null | undefined>,
		DelegationEnabledDate: FormControl<Date | null | undefined>,
	}
	export function CreateDelegatedServiceFormGroup() {
		return new FormGroup<DelegatedServiceFormProperties>({
			ServicePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+=,.@-]*')]),
			DelegationEnabledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDelegatedServicesForAccountRequest {

		/** Required */
		AccountId: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListDelegatedServicesForAccountRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDelegatedServicesForAccountRequestFormGroup() {
		return new FormGroup<ListDelegatedServicesForAccountRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListHandshakesForAccountResponse {
		Handshakes?: Array<Handshake>;
		NextToken?: string | null;
	}
	export interface ListHandshakesForAccountResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHandshakesForAccountResponseFormGroup() {
		return new FormGroup<ListHandshakesForAccountResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHandshakesForAccountRequest {

		/** Specifies the criteria that are used to select the handshakes for the operation. */
		Filter?: HandshakeFilter;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListHandshakesForAccountRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListHandshakesForAccountRequestFormGroup() {
		return new FormGroup<ListHandshakesForAccountRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}


	/** Specifies the criteria that are used to select the handshakes for the operation. */
	export interface HandshakeFilter {
		ActionType?: HandshakeAction | null;
		ParentHandshakeId?: string | null;
	}

	/** Specifies the criteria that are used to select the handshakes for the operation. */
	export interface HandshakeFilterFormProperties {
		ActionType: FormControl<HandshakeAction | null | undefined>,
		ParentHandshakeId: FormControl<string | null | undefined>,
	}
	export function CreateHandshakeFilterFormGroup() {
		return new FormGroup<HandshakeFilterFormProperties>({
			ActionType: new FormControl<HandshakeAction | null | undefined>(undefined),
			ParentHandshakeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHandshakesForOrganizationResponse {
		Handshakes?: Array<Handshake>;
		NextToken?: string | null;
	}
	export interface ListHandshakesForOrganizationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListHandshakesForOrganizationResponseFormGroup() {
		return new FormGroup<ListHandshakesForOrganizationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHandshakesForOrganizationRequest {

		/** Specifies the criteria that are used to select the handshakes for the operation. */
		Filter?: HandshakeFilter;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListHandshakesForOrganizationRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListHandshakesForOrganizationRequestFormGroup() {
		return new FormGroup<ListHandshakesForOrganizationRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListOrganizationalUnitsForParentResponse {
		OrganizationalUnits?: Array<OrganizationalUnit>;
		NextToken?: string | null;
	}
	export interface ListOrganizationalUnitsForParentResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationalUnitsForParentResponseFormGroup() {
		return new FormGroup<ListOrganizationalUnitsForParentResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationalUnitsForParentRequest {

		/** Required */
		ParentId: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListOrganizationalUnitsForParentRequestFormProperties {

		/** Required */
		ParentId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListOrganizationalUnitsForParentRequestFormGroup() {
		return new FormGroup<ListOrganizationalUnitsForParentRequestFormProperties>({
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListParentsResponse {
		Parents?: Array<Parent>;
		NextToken?: string | null;
	}
	export interface ListParentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListParentsResponseFormGroup() {
		return new FormGroup<ListParentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization. */
	export interface Parent {
		Id?: string | null;
		Type?: ParentType | null;
	}

	/** Contains information about either a root or an organizational unit (OU) that can contain OUs or accounts in an organization. */
	export interface ParentFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<ParentType | null | undefined>,
	}
	export function CreateParentFormGroup() {
		return new FormGroup<ParentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ParentType | null | undefined>(undefined),
		});

	}

	export enum ParentType { ROOT = 0, ORGANIZATIONAL_UNIT = 1 }

	export interface ListParentsRequest {

		/** Required */
		ChildId: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListParentsRequestFormProperties {

		/** Required */
		ChildId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListParentsRequestFormGroup() {
		return new FormGroup<ListParentsRequestFormProperties>({
			ChildId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ChildNotFoundException {
	}
	export interface ChildNotFoundExceptionFormProperties {
	}
	export function CreateChildNotFoundExceptionFormGroup() {
		return new FormGroup<ChildNotFoundExceptionFormProperties>({
		});

	}

	export interface ListPoliciesResponse {
		Policies?: Array<PolicySummary>;
		NextToken?: string | null;
	}
	export interface ListPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesResponseFormGroup() {
		return new FormGroup<ListPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPoliciesRequest {

		/** Required */
		Filter: PolicyTypeSummaryType;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListPoliciesRequestFormProperties {

		/** Required */
		Filter: FormControl<PolicyTypeSummaryType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPoliciesRequestFormGroup() {
		return new FormGroup<ListPoliciesRequestFormProperties>({
			Filter: new FormControl<PolicyTypeSummaryType | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListPoliciesForTargetResponse {
		Policies?: Array<PolicySummary>;
		NextToken?: string | null;
	}
	export interface ListPoliciesForTargetResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesForTargetResponseFormGroup() {
		return new FormGroup<ListPoliciesForTargetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPoliciesForTargetRequest {

		/** Required */
		TargetId: string;

		/** Required */
		Filter: PolicyTypeSummaryType;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListPoliciesForTargetRequestFormProperties {

		/** Required */
		TargetId: FormControl<string | null | undefined>,

		/** Required */
		Filter: FormControl<PolicyTypeSummaryType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPoliciesForTargetRequestFormGroup() {
		return new FormGroup<ListPoliciesForTargetRequestFormProperties>({
			TargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Filter: new FormControl<PolicyTypeSummaryType | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListRootsResponse {
		Roots?: Array<Root>;
		NextToken?: string | null;
	}
	export interface ListRootsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRootsResponseFormGroup() {
		return new FormGroup<ListRootsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRootsRequest {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListRootsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRootsRequestFormGroup() {
		return new FormGroup<ListRootsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string | null;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom key-value pair associated with a resource such as an account within your organization.  */
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

	/** A custom key-value pair associated with a resource such as an account within your organization.  */
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
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceId: string;
		NextToken?: string | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTargetsForPolicyResponse {
		Targets?: Array<PolicyTargetSummary>;
		NextToken?: string | null;
	}
	export interface ListTargetsForPolicyResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsForPolicyResponseFormGroup() {
		return new FormGroup<ListTargetsForPolicyResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a root, OU, or account that a policy is attached to. */
	export interface PolicyTargetSummary {
		TargetId?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
		Type?: PolicyTargetSummaryType | null;
	}

	/** Contains information about a root, OU, or account that a policy is attached to. */
	export interface PolicyTargetSummaryFormProperties {
		TargetId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<PolicyTargetSummaryType | null | undefined>,
	}
	export function CreatePolicyTargetSummaryFormGroup() {
		return new FormGroup<PolicyTargetSummaryFormProperties>({
			TargetId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			Type: new FormControl<PolicyTargetSummaryType | null | undefined>(undefined),
		});

	}

	export enum PolicyTargetSummaryType { ACCOUNT = 0, ORGANIZATIONAL_UNIT = 1, ROOT = 2 }

	export interface ListTargetsForPolicyRequest {

		/** Required */
		PolicyId: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;
	}
	export interface ListTargetsForPolicyRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTargetsForPolicyRequestFormGroup() {
		return new FormGroup<ListTargetsForPolicyRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
		});

	}

	export interface MoveAccountRequest {

		/** Required */
		AccountId: string;

		/** Required */
		SourceParentId: string;

		/** Required */
		DestinationParentId: string;
	}
	export interface MoveAccountRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		SourceParentId: FormControl<string | null | undefined>,

		/** Required */
		DestinationParentId: FormControl<string | null | undefined>,
	}
	export function CreateMoveAccountRequestFormGroup() {
		return new FormGroup<MoveAccountRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceParentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationParentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceParentNotFoundException {
	}
	export interface SourceParentNotFoundExceptionFormProperties {
	}
	export function CreateSourceParentNotFoundExceptionFormGroup() {
		return new FormGroup<SourceParentNotFoundExceptionFormProperties>({
		});

	}

	export interface DestinationParentNotFoundException {
	}
	export interface DestinationParentNotFoundExceptionFormProperties {
	}
	export function CreateDestinationParentNotFoundExceptionFormGroup() {
		return new FormGroup<DestinationParentNotFoundExceptionFormProperties>({
		});

	}

	export interface DuplicateAccountException {
	}
	export interface DuplicateAccountExceptionFormProperties {
	}
	export function CreateDuplicateAccountExceptionFormGroup() {
		return new FormGroup<DuplicateAccountExceptionFormProperties>({
		});

	}

	export interface RegisterDelegatedAdministratorRequest {

		/** Required */
		AccountId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: string;
	}
	export interface RegisterDelegatedAdministratorRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ServicePrincipal: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDelegatedAdministratorRequestFormGroup() {
		return new FormGroup<RegisterDelegatedAdministratorRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServicePrincipal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+=,.@-]*')]),
		});

	}

	export interface AccountAlreadyRegisteredException {
	}
	export interface AccountAlreadyRegisteredExceptionFormProperties {
	}
	export function CreateAccountAlreadyRegisteredExceptionFormGroup() {
		return new FormGroup<AccountAlreadyRegisteredExceptionFormProperties>({
		});

	}

	export interface RemoveAccountFromOrganizationRequest {

		/** Required */
		AccountId: string;
	}
	export interface RemoveAccountFromOrganizationRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAccountFromOrganizationRequestFormGroup() {
		return new FormGroup<RemoveAccountFromOrganizationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationalUnitResponse {

		/** Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs. */
		OrganizationalUnit?: OrganizationalUnit;
	}
	export interface UpdateOrganizationalUnitResponseFormProperties {
	}
	export function CreateUpdateOrganizationalUnitResponseFormGroup() {
		return new FormGroup<UpdateOrganizationalUnitResponseFormProperties>({
		});

	}

	export interface UpdateOrganizationalUnitRequest {

		/** Required */
		OrganizationalUnitId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface UpdateOrganizationalUnitRequestFormProperties {

		/** Required */
		OrganizationalUnitId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrganizationalUnitRequestFormGroup() {
		return new FormGroup<UpdateOrganizationalUnitRequestFormProperties>({
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface UpdatePolicyResponse {

		/** Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies. */
		Policy?: Policy;
	}
	export interface UpdatePolicyResponseFormProperties {
	}
	export function CreateUpdatePolicyResponseFormGroup() {
		return new FormGroup<UpdatePolicyResponseFormProperties>({
		});

	}

	export interface UpdatePolicyRequest {

		/** Required */
		PolicyId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/** Max length: 512 */
		Description?: string | null;

		/**
		 * Max length: 1000000
		 * Min length: 1
		 */
		Content?: string | null;
	}
	export interface UpdatePolicyRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 512 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000000
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePolicyRequestFormGroup() {
		return new FormGroup<UpdatePolicyRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000000), Validators.minLength(1)]),
		});

	}

	export enum ActionType { INVITE = 0, ENABLE_ALL_FEATURES = 1, APPROVE_ALL_FEATURES = 2, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE = 3 }

	export enum CreateAccountFailureReason { ACCOUNT_LIMIT_EXCEEDED = 0, EMAIL_ALREADY_EXISTS = 1, INVALID_ADDRESS = 2, INVALID_EMAIL = 3, CONCURRENT_ACCOUNT_MODIFICATION = 4, INTERNAL_FAILURE = 5, GOVCLOUD_ACCOUNT_ALREADY_EXISTS = 6 }

	export enum IAMUserAccessToBilling { ALLOW = 0, DENY = 1 }

	export enum PolicyType { SERVICE_CONTROL_POLICY = 0, TAG_POLICY = 1 }

	export enum EffectivePolicyType { TAG_POLICY = 0 }

	export enum TargetType { ACCOUNT = 0, ORGANIZATIONAL_UNIT = 1, ROOT = 2 }

	export enum PolicyTypeStatus { ENABLED = 0, PENDING_ENABLE = 1, PENDING_DISABLE = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Sends a response to the originator of a handshake agreeing to the action proposed by the handshake request. </p> <p>This operation can be called only by the following principals when they also have the relevant IAM permissions:</p> <ul> <li> <p> <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from the member account. </p> <p>The user who calls the API for an invitation to join must have the <code>organizations:AcceptHandshake</code> permission. If you enabled all features in the organization, the user must also have the <code>iam:CreateServiceLinkedRole</code> permission so that AWS Organizations can create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">AWS Organizations and Service-Linked Roles</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p> <b>Enable all features final confirmation</b> handshake: only a principal from the master account.</p> <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an AWS Account to Join Your Organization</a> in the <i>AWS Organizations User Guide.</i> For more information about requests to enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p>After you accept a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake
		 * @return {AcceptHandshakeResponse} Success
		 */
		AcceptHandshake(requestBody: AcceptHandshakeRequest): Observable<AcceptHandshakeResponse> {
			return this.http.post<AcceptHandshakeResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a policy to a root, an organizational unit (OU), or an individual account. How the policy affects accounts depends on the type of policy:</p> <ul> <li> <p> <b>Service control policy (SCP)</b> - An SCP specifies what permissions can be delegated to users in affected member accounts. The scope of influence for a policy depends on what you attach the policy to:</p> <ul> <li> <p>If you attach an SCP to a root, it affects all accounts in the organization.</p> </li> <li> <p>If you attach an SCP to an OU, it affects all accounts in that OU and in any child OUs.</p> </li> <li> <p>If you attach the policy directly to an account, it affects only that account.</p> </li> </ul> <p>SCPs are JSON policies that specify the maximum permissions for an organization or organizational unit (OU). You can attach one SCP to a higher level root or OU, and a different SCP to a child OU or to an account. The child policy can further restrict only the permissions that pass through the parent filter and are available to the child. An SCP that is attached to a child can't grant a permission that the parent hasn't already granted. For example, imagine that the parent SCP allows permissions A, B, C, D, and E. The child SCP allows C, D, E, F, and G. The result is that the accounts affected by the child SCP are allowed to use only C, D, and E. They can't use A or B because the child OU filtered them out. They also can't use F and G because the parent OU filtered them out. They can't be granted back by the child SCP; child SCPs can only filter the permissions they receive from the parent SCP.</p> <p>AWS Organizations attaches a default SCP named <code>"FullAWSAccess</code> to every root, OU, and account. This default SCP allows all services and actions, enabling any new child OU or account to inherit the permissions of the parent root or OU. If you detach the default policy, you must replace it with a policy that specifies the permissions that you want to allow in that OU or account.</p> <p>For more information about how AWS Organizations policies permissions work, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html">Using Service Control Policies</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy
		 * @return {void} Success
		 */
		AttachPolicy(requestBody: AttachPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Cancels a handshake. Canceling a handshake sets the handshake state to <code>CANCELED</code>. </p> <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient can no longer respond to that handshake.</p> <p>After you cancel a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake
		 * @return {CancelHandshakeResponse} Success
		 */
		CancelHandshake(requestBody: CancelHandshakeRequest): Observable<CancelHandshakeResponse> {
			return this.http.post<CancelHandshakeResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that AWS performs in the background. Because <code>CreateAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For information on using AWS CloudTrail with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p/> <p>The user who calls the API to create an account must have the <code>organizations:CreateAccount</code> permission. If you enabled all features in the organization, AWS Organizations creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">AWS Organizations and Service-Linked Roles</a> in the <i>AWS Organizations User Guide</i>.</p> <p>AWS Organizations preconfigures the new member account with a role (named <code>OrganizationAccountAccessRole</code> by default) that grants users in the master account administrator permissions in the new member account. Principals in the master account can assume the role. AWS Organizations clones the company name and address information for the new account from the organization's master account.</p> <p>This operation can be called only from the organization's master account.</p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an AWS Account in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>AWS Organizations User Guide</i>.</p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> <li> <p>Using <code>CreateAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the Billing and Cost Management Console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an AWS Account</a> in the <i>AWS Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.CreateAccount
		 * @return {CreateAccountResponse} Success
		 */
		CreateAccount(requestBody: CreateAccountRequest): Observable<CreateAccountResponse> {
			return this.http.post<CreateAccountResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This action is available if all of the following are true:</p> <ul> <li> <p>You're authorized to create accounts in the AWS GovCloud (US) Region. For more information on the AWS GovCloud (US) Region, see the <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html"> <i>AWS GovCloud User Guide</i>.</a> </p> </li> <li> <p>You already have an account in the AWS GovCloud (US) Region that is associated with your master account in the commercial Region. </p> </li> <li> <p>You call this action from the master account of your organization in the commercial Region.</p> </li> <li> <p>You have the <code>organizations:CreateGovCloudAccount</code> permission. AWS Organizations creates the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">AWS Organizations and Service-Linked Roles</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p>AWS automatically enables AWS CloudTrail for AWS GovCloud (US) accounts, but you should also do the following:</p> <ul> <li> <p>Verify that AWS CloudTrail is enabled to store logs.</p> </li> <li> <p>Create an S3 bucket for AWS CloudTrail log storage.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying AWS CloudTrail Is Enabled</a> in the <i>AWS GovCloud User Guide</i>. </p> </li> </ul> <p>You call this action from the master account of your organization in the commercial Region to create a standalone AWS account in the AWS GovCloud (US) Region. After the account is created, the master account of an organization in the AWS GovCloud (US) Region can invite it to that organization. For more information on inviting standalone accounts in the AWS GovCloud (US) to join an organization, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the <i>AWS GovCloud User Guide.</i> </p> <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that AWS performs in the background. Because <code>CreateGovCloudAccount</code> operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:</p> <ul> <li> <p>Use the <code>OperationId</code> response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p> </li> <li> <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For information on using AWS CloudTrail with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <p/> <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts: a standalone account in the AWS GovCloud (US) Region and an associated account in the commercial Region for billing and support purposes. The account in the commercial Region is automatically a member of the organization whose credentials made the request. Both accounts are associated with the same email address.</p> <p>A role is created in the new account in the commercial Region that allows the master account in the organization in the commercial Region to assume it. An AWS GovCloud (US) account is then created and associated with the commercial account that you just created. A role is created in the new AWS GovCloud (US) account that can be assumed by the AWS GovCloud (US) account that is associated with the master account of the commercial organization. For more information and to view a diagram that explains how account access works, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the <i>AWS GovCloud User Guide.</i> </p> <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an AWS Account in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> <important> <ul> <li> <p>When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method and signing the end user license agreement (EULA) is <i>not</i> automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the <i>AWS Organizations User Guide.</i> </p> </li> <li> <p>If you get an exception that indicates that you exceeded your account limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> <li> <p>If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> <li> <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary accounts isn't recommended. You can only close an account from the AWS Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an AWS Account</a> in the <i>AWS Organizations User Guide</i>.</p> </li> </ul> </important> <note> <p>When you create a member account with this operation, you can choose whether to create the account with the <b>IAM User and Role Access to Billing Information</b> switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting Access to Your Billing Information and Tools</a>.</p> </note>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount
		 * @return {CreateGovCloudAccountResponse} Success
		 */
		CreateGovCloudAccount(requestBody: CreateGovCloudAccountRequest): Observable<CreateGovCloudAccountResponse> {
			return this.http.post<CreateGovCloudAccountResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS organization. The account whose user is calling the <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/orgs_getting-started_concepts.html#account">master account</a> of the new organization.</p> <p>This operation must be called using credentials from the account that is to become the new organization's master account. The principal must also have the relevant IAM permissions.</p> <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the <code>FeatureSet</code> parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default, and you can't use organization policies</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization
		 * @return {CreateOrganizationResponse} Success
		 */
		CreateOrganization(requestBody: CreateOrganizationRequest): Observable<CreateOrganizationResponse> {
			return this.http.post<CreateOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five. </p> <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit
		 * @return {CreateOrganizationalUnitResponse} Success
		 */
		CreateOrganizationalUnit(requestBody: CreateOrganizationalUnitRequest): Observable<CreateOrganizationalUnitResponse> {
			return this.http.post<CreateOrganizationalUnitResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual AWS account.</p> <p>For more information about policies and their use, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html">Managing Organization Policies</a>.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy
		 * @return {CreatePolicyResponse} Success
		 */
		CreatePolicy(requestBody: CreatePolicyRequest): Observable<CreatePolicyResponse> {
			return this.http.post<CreatePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code> and effectively deactivates the request.</p> <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a> instead. The originator can't reactivate a declined request, but can reinitiate the process with a new handshake request.</p> <p>After you decline a handshake, it continues to appear in the results of relevant APIs for only 30 days. After that, it's deleted.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake
		 * @return {DeclineHandshakeResponse} Success
		 */
		DeclineHandshake(requestBody: DeclineHandshakeRequest): Observable<DeclineHandshakeResponse> {
			return this.http.post<DeclineHandshakeResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the organization. You can delete an organization only by using credentials from the master account. The organization must be empty of member accounts.
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization
		 * @return {void} Success
		 */
		DeleteOrganization(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit
		 * @return {void} Success
		 */
		DeleteOrganizationalUnit(requestBody: DeleteOrganizationalUnitRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified policy from your organization. Before you perform this operation, you must first detach the policy from all organizational units (OUs), roots, and accounts.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy
		 * @return {void} Success
		 */
		DeletePolicy(requestBody: DeletePolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified member AWS account as a delegated administrator for the specified AWS service.</p> <p>You can run this action only for AWS services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrated-services-list.html">AWS Services that you can use with AWS Organizations</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator
		 * @return {void} Success
		 */
		DeregisterDelegatedAdministrator(requestBody: DeregisterDelegatedAdministratorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves AWS Organizations-related information about the specified account.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount
		 * @return {DescribeAccountResponse} Success
		 */
		DescribeAccount(requestBody: DescribeAccountRequest): Observable<DescribeAccountResponse> {
			return this.http.post<DescribeAccountResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the current status of an asynchronous request to create an account.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus
		 * @return {DescribeCreateAccountStatusResponse} Success
		 */
		DescribeCreateAccountStatus(requestBody: DescribeCreateAccountStatusRequest): Observable<DescribeCreateAccountStatusResponse> {
			return this.http.post<DescribeCreateAccountStatusResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the contents of the effective tag policy for the account. The effective tag policy is the aggregation of any tag policies the account inherits, plus any policy directly that is attached to the account. </p> <p>This action returns information on tag policies only.</p> <p>For more information on policy inheritance, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies-inheritance.html">How Policy Inheritance Works</a> in the <i>AWS Organizations User Guide</i>.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy
		 * @return {DescribeEffectivePolicyResponse} Success
		 */
		DescribeEffectivePolicy(requestBody: DescribeEffectivePolicyRequest): Observable<DescribeEffectivePolicyResponse> {
			return this.http.post<DescribeEffectivePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about a previously requested handshake. The handshake ID comes from the response to the original <a>InviteAccountToOrganization</a> operation that generated the handshake.</p> <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> for only 30 days after they change to that state. They're then deleted and no longer accessible.</p> <p>This operation can be called from any account in the organization.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake
		 * @return {DescribeHandshakeResponse} Success
		 */
		DescribeHandshake(requestBody: DescribeHandshakeRequest): Observable<DescribeHandshakeResponse> {
			return this.http.post<DescribeHandshakeResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about the organization that the user's account belongs to.</p> <p>This operation can be called from any account in the organization.</p> <note> <p>Even if a policy type is shown as available in the organization, you can disable it separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified root.</p> </note>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization
		 * @return {DescribeOrganizationResponse} Success
		 */
		DescribeOrganization(): Observable<DescribeOrganizationResponse> {
			return this.http.post<DescribeOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization', null, {});
		}

		/**
		 * <p>Retrieves information about an organizational unit (OU).</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit
		 * @return {DescribeOrganizationalUnitResponse} Success
		 */
		DescribeOrganizationalUnit(requestBody: DescribeOrganizationalUnitRequest): Observable<DescribeOrganizationalUnitResponse> {
			return this.http.post<DescribeOrganizationalUnitResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about a policy.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy
		 * @return {DescribePolicyResponse} Success
		 */
		DescribePolicy(requestBody: DescribePolicyRequest): Observable<DescribePolicyResponse> {
			return this.http.post<DescribePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches a policy from a target root, organizational unit (OU), or account. If the policy being detached is a service control policy (SCP), the changes to permissions for IAM users and roles in affected accounts are immediate.</p> <p> <b>Note:</b> Every root, OU, and account must have at least one SCP attached. If you want to replace the default <code>FullAWSAccess</code> policy with one that limits the permissions that can be delegated, you must attach the replacement policy before you can remove the default one. This is the authorization strategy of an "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html#orgs_policies_whitelist">allow list</a>". If you instead attach a second SCP and leave the <code>FullAWSAccess</code> SCP still attached, and specify <code>"Effect": "Deny"</code> in the second SCP to override the <code>"Effect": "Allow"</code> in the <code>FullAWSAccess</code> policy (or any other attached SCP), you're using the authorization strategy of a "<a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html#orgs_policies_blacklist">deny list</a>".</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy
		 * @return {void} Success
		 */
		DetachPolicy(requestBody: DetachPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disables the integration of an AWS service (the service that is specified by <code>ServicePrincipal</code>) with AWS Organizations. When you disable integration, the specified service no longer can create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in <i>new</i> accounts in your organization. This means the service can't perform operations on your behalf on any new accounts in your organization. The service can still perform operations in older accounts until the service completes its clean-up from AWS Organizations.</p> <p/> <important> <p>We recommend that you disable integration between AWS Organizations and the specified AWS service by using the console or commands that are provided by the specified service. Doing so ensures that the other service is aware that it can clean up any resources that are required only for the integration. How the service cleans up its resources in the organization's accounts depends on that service. For more information, see the documentation for the other AWS service.</p> </important> <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified service can no longer perform operations in your organization's accounts unless the operations are explicitly permitted by the IAM policies that are attached to your roles.</p> <p>For more information about integrating other services with AWS Organizations, including the list of services that work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess
		 * @return {void} Success
		 */
		DisableAWSServiceAccess(requestBody: DisableAWSServiceAccessRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disables an organizational control policy type in a root. A policy of a certain type can be attached to entities in a root only if that type is enabled in the root. After you perform this operation, you no longer can attach policies of the specified type to that root or to any organizational unit (OU) or account in that root. You can undo this by using the <a>EnablePolicyType</a> operation.</p> <p>This is an asynchronous request that AWS performs in the background. If you disable a policy for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. AWS recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation. </p> <p>This operation can be called only from the organization's master account.</p> <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType
		 * @return {DisablePolicyTypeResponse} Success
		 */
		DisablePolicyType(requestBody: DisablePolicyTypeRequest): Observable<DisablePolicyTypeResponse> {
			return this.http.post<DisablePolicyTypeResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the integration of an AWS service (the service that is specified by <code>ServicePrincipal</code>) with AWS Organizations. When you enable integration, you allow the specified service to create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in all the accounts in your organization. This allows the service to perform operations on your behalf in your organization and its accounts.</p> <important> <p>We recommend that you enable integration between AWS Organizations and the specified AWS service by using the console or commands that are provided by the specified service. Doing so ensures that the service is aware that it can create the resources that are required for the integration. How the service creates those resources in the organization's accounts depends on that service. For more information, see the documentation for the other AWS service.</p> </important> <p>For more information about enabling services to integrate with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account and only if the organization has <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all features</a>.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess
		 * @return {void} Success
		 */
		EnableAWSServiceAccess(requestBody: EnableAWSServiceAccessRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables all features in an organization. This enables the use of organization policies that can restrict the services and actions that can be called in each account. Until you enable all features, you have access only to consolidated billing, and you can't use any of the advanced account administration features that AWS Organizations supports. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the <i>AWS Organizations User Guide.</i> </p> <important> <p>This operation is required only for organizations that were created explicitly with only the consolidated billing features enabled. Calling this operation sends a handshake to every invited account in the organization. The feature set change can be finalized and the additional features enabled only after all administrators in the invited accounts approve the change by accepting the handshake.</p> </important> <p>After you enable all features, you can separately enable or disable individual policy types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use <a>ListRoots</a>.</p> <p>After all invited member accounts accept the handshake, you finalize the feature set change by accepting the handshake that contains <code>"Action": "ENABLE_ALL_FEATURES"</code>. This completes the change.</p> <p>After you enable all features in your organization, the master account in the organization can apply policies on all member accounts. These policies can restrict what users and even administrators in those accounts can do. The master account can apply policies that prevent accounts from leaving the organization. Ensure that your account administrators are aware of this.</p> <p>This operation can be called only from the organization's master account. </p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures
		 * @return {EnableAllFeaturesResponse} Success
		 */
		EnableAllFeatures(requestBody: EnableAllFeaturesRequest): Observable<EnableAllFeaturesResponse> {
			return this.http.post<EnableAllFeaturesResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables a policy type in a root. After you enable a policy type in a root, you can attach policies of that type to the root, any organizational unit (OU), or account in that root. You can undo this by using the <a>DisablePolicyType</a> operation.</p> <p>This is an asynchronous request that AWS performs in the background. AWS recommends that you first use <a>ListRoots</a> to see the status of policy types for a specified root, and then use this operation. </p> <p>This operation can be called only from the organization's master account.</p> <p>You can enable a policy type in a root only if that policy type is available in the organization. To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType
		 * @return {EnablePolicyTypeResponse} Success
		 */
		EnablePolicyType(requestBody: EnablePolicyTypeRequest): Observable<EnablePolicyTypeResponse> {
			return this.http.post<EnablePolicyTypeResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends an invitation to another account to join your organization as a member account. AWS Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a <a>Handshake</a> whose details are in the response.</p> <important> <ul> <li> <p>You can invite AWS accounts only from the same seller as the master account. For example, if your organization's master account was created by Amazon Internet Services Pvt. Ltd (AISPL), an AWS seller in India, you can invite only other AISPL accounts to your organization. You can't combine accounts from AISPL and AWS or from any other AWS seller. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated Billing in India</a>.</p> </li> <li> <p>If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p> </li> </ul> </important> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization
		 * @return {InviteAccountToOrganizationResponse} Success
		 */
		InviteAccountToOrganization(requestBody: InviteAccountToOrganizationRequest): Observable<InviteAccountToOrganizationResponse> {
			return this.http.post<InviteAccountToOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the master account, use <a>RemoveAccountFromOrganization</a> instead.</p> <p>This operation can be called only from a member account in the organization.</p> <important> <ul> <li> <p>The master account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do. This includes preventing them from successfully calling <code>LeaveOrganization</code> and leaving the organization. </p> </li> <li> <p>You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For each account that you want to make standalone, you must do the following steps:</p> <ul> <li> <p>Accept the end user license agreement (EULA)</p> </li> <li> <p>Choose a support plan</p> </li> <li> <p>Provide and verify the required contact information</p> </li> <li> <p>Provide a current payment method</p> </li> </ul> <p>AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account isn't attached to an organization. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide.</i> </p> </li> <li> <p>You can leave an organization only after you enable IAM user access to billing in your account. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in the <i>AWS Billing and Cost Management User Guide.</i> </p> </li> </ul> </important>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization
		 * @return {void} Success
		 */
		LeaveOrganization(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the AWS services that you enabled to integrate with your organization. After a service on this list creates the resources that it requires for the integration, it can perform operations on your organization and its accounts.</p> <p>For more information about integrating other services with AWS Organizations, including the list of services that currently work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other AWS Services</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAWSServiceAccessForOrganizationResponse} Success
		 */
		ListAWSServiceAccessForOrganization(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAWSServiceAccessForOrganizationRequest): Observable<ListAWSServiceAccessForOrganizationResponse> {
			return this.http.post<ListAWSServiceAccessForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the <a>ListAccountsForParent</a> operation instead.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListAccounts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountsResponse} Success
		 */
		ListAccounts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAccountsRequest): Observable<ListAccountsResponse> {
			return this.http.post<ListAccountsResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the <a>ListAccounts</a> operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountsForParentResponse} Success
		 */
		ListAccountsForParent(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAccountsForParentRequest): Observable<ListAccountsForParentResponse> {
			return this.http.post<ListAccountsForParentResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all of the organizational units (OUs) or accounts that are contained in the specified parent OU or root. This operation, along with <a>ListParents</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListChildren
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChildrenResponse} Success
		 */
		ListChildren(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListChildrenRequest): Observable<ListChildrenResponse> {
			return this.http.post<ListChildrenResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListChildren?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the account creation requests that match the specified status that is currently being tracked for the organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCreateAccountStatusResponse} Success
		 */
		ListCreateAccountStatus(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCreateAccountStatusRequest): Observable<ListCreateAccountStatusResponse> {
			return this.http.post<ListCreateAccountStatusResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the AWS accounts that are designated as delegated administrators in this organization.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDelegatedAdministratorsResponse} Success
		 */
		ListDelegatedAdministrators(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDelegatedAdministratorsRequest): Observable<ListDelegatedAdministratorsResponse> {
			return this.http.post<ListDelegatedAdministratorsResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List the AWS services for which the specified account is a delegated administrator. </p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDelegatedServicesForAccountResponse} Success
		 */
		ListDelegatedServicesForAccount(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDelegatedServicesForAccountRequest): Observable<ListDelegatedServicesForAccountResponse> {
			return this.http.post<ListDelegatedServicesForAccountResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the current handshakes that are associated with the account of the requesting user.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHandshakesForAccountResponse} Success
		 */
		ListHandshakesForAccount(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListHandshakesForAccountRequest): Observable<ListHandshakesForAccountResponse> {
			return this.http.post<ListHandshakesForAccountResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the handshakes that are associated with the organization that the requesting user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list of handshake structures. Each structure contains details and status about a handshake.</p> <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or <code>CANCELED</code> appear in the results of this API for only 30 days after changing to that state. After that, they're deleted and no longer accessible.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHandshakesForOrganizationResponse} Success
		 */
		ListHandshakesForOrganization(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListHandshakesForOrganizationRequest): Observable<ListHandshakesForOrganizationResponse> {
			return this.http.post<ListHandshakesForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the organizational units (OUs) in a parent organizational unit or root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationalUnitsForParentResponse} Success
		 */
		ListOrganizationalUnitsForParent(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOrganizationalUnitsForParentRequest): Observable<ListOrganizationalUnitsForParentResponse> {
			return this.http.post<ListOrganizationalUnitsForParentResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the root or organizational units (OUs) that serve as the immediate parent of the specified child OU or account. This operation, along with <a>ListChildren</a> enables you to traverse the tree structure that makes up this root.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p> <note> <p>In the current release, a child can have only a single parent. </p> </note>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListParents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListParentsResponse} Success
		 */
		ListParents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListParentsRequest): Observable<ListParentsResponse> {
			return this.http.post<ListParentsResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListParents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the list of all policies in an organization of a specified type.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPoliciesResponse} Success
		 */
		ListPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPoliciesRequest): Observable<ListPoliciesResponse> {
			return this.http.post<ListPoliciesResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the policies that are directly attached to the specified target root, organizational unit (OU), or account. You must specify the policy type that you want included in the returned list.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPoliciesForTargetResponse} Success
		 */
		ListPoliciesForTarget(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPoliciesForTargetRequest): Observable<ListPoliciesForTargetResponse> {
			return this.http.post<ListPoliciesForTargetResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the roots that are defined in the current organization.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p> <note> <p>Policy types can be enabled and disabled in roots. This is distinct from whether they're available in the organization. When you enable all features, you make policy types available for use in that organization. Individual policy types can then be enabled and disabled in a root. To see the availability of a policy type in an organization, use <a>DescribeOrganization</a>.</p> </note>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListRoots
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRootsResponse} Success
		 */
		ListRoots(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRootsRequest): Observable<ListRootsResponse> {
			return this.http.post<ListRootsResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListRoots?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists tags for the specified resource. </p> <p>Currently, you can list tags on an account in AWS Organizations.</p> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all the roots, organizational units (OUs), and accounts that the specified policy is attached to.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a <code>List*</code> operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note> <p>This operation can be called only from the organization's master account or by a member account that is a delegated administrator for an AWS service.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTargetsForPolicyResponse} Success
		 */
		ListTargetsForPolicy(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTargetsForPolicyRequest): Observable<ListTargetsForPolicyResponse> {
			return this.http.post<ListTargetsForPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.MoveAccount
		 * @return {void} Success
		 */
		MoveAccount(requestBody: MoveAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables the specified member account to administer the Organizations features of the specified AWS service. It grants read-only access to AWS Organizations service data. The account still requires IAM permissions to access and administer the AWS service.</p> <p>You can run this action only for AWS services that support this feature. For a current list of services that support it, see the column <i>Supports Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrated-services-list.html">AWS Services that you can use with AWS Organizations</a> in the <i>AWS Organizations User Guide.</i> </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator
		 * @return {void} Success
		 */
		RegisterDelegatedAdministrator(requestBody: RegisterDelegatedAdministratorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified account from the organization.</p> <p>The removed account becomes a standalone account that isn't a member of any organization. It's no longer subject to any policies and is responsible for its own bill payments. The organization's master account is no longer charged for any expenses accrued by the member account after it's removed from the organization.</p> <p>This operation can be called only from the organization's master account. Member accounts can remove themselves with <a>LeaveOrganization</a> instead.</p> <important> <p>You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the AWS Organizations console, API, or CLI commands, the information required of standalone accounts is <i>not</i> automatically collected. For an account that you want to make standalone, you must accept the end user license agreement (EULA), choose a support plan, provide and verify the required contact information, and provide a current payment method. AWS uses the payment method to charge for any billable (not free tier) AWS activity that occurs while the account isn't attached to an organization. To remove an account that doesn't yet have this information, you must sign in as the member account and follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not yet been provided</a> in the <i>AWS Organizations User Guide.</i> </p> </important>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization
		 * @return {void} Success
		 */
		RemoveAccountFromOrganization(requestBody: RemoveAccountFromOrganizationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds one or more tags to the specified resource.</p> <p>Currently, you can tag and untag accounts in AWS Organizations.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes a tag from the specified resource. </p> <p>Currently, you can tag and untag accounts in AWS Organizations.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached. </p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit
		 * @return {UpdateOrganizationalUnitResponse} Success
		 */
		UpdateOrganizationalUnit(requestBody: UpdateOrganizationalUnitRequest): Observable<UpdateOrganizationalUnitResponse> {
			return this.http.post<UpdateOrganizationalUnitResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing policy with a new name, description, or content. If you don't supply any parameter, that value remains unchanged. You can't change a policy's type.</p> <p>This operation can be called only from the organization's master account.</p>
		 * Post #X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy
		 * @return {UpdatePolicyResponse} Success
		 */
		UpdatePolicy(requestBody: UpdatePolicyRequest): Observable<UpdatePolicyResponse> {
			return this.http.post<UpdatePolicyResponse>(this.baseUri + '#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptHandshakeX_Amz_Target { AWSOrganizationsV20161128_AcceptHandshake = 0 }

	export enum AttachPolicyX_Amz_Target { AWSOrganizationsV20161128_AttachPolicy = 0 }

	export enum CancelHandshakeX_Amz_Target { AWSOrganizationsV20161128_CancelHandshake = 0 }

	export enum CreateAccountX_Amz_Target { AWSOrganizationsV20161128_CreateAccount = 0 }

	export enum CreateGovCloudAccountX_Amz_Target { AWSOrganizationsV20161128_CreateGovCloudAccount = 0 }

	export enum CreateOrganizationX_Amz_Target { AWSOrganizationsV20161128_CreateOrganization = 0 }

	export enum CreateOrganizationalUnitX_Amz_Target { AWSOrganizationsV20161128_CreateOrganizationalUnit = 0 }

	export enum CreatePolicyX_Amz_Target { AWSOrganizationsV20161128_CreatePolicy = 0 }

	export enum DeclineHandshakeX_Amz_Target { AWSOrganizationsV20161128_DeclineHandshake = 0 }

	export enum DeleteOrganizationX_Amz_Target { AWSOrganizationsV20161128_DeleteOrganization = 0 }

	export enum DeleteOrganizationalUnitX_Amz_Target { AWSOrganizationsV20161128_DeleteOrganizationalUnit = 0 }

	export enum DeletePolicyX_Amz_Target { AWSOrganizationsV20161128_DeletePolicy = 0 }

	export enum DeregisterDelegatedAdministratorX_Amz_Target { AWSOrganizationsV20161128_DeregisterDelegatedAdministrator = 0 }

	export enum DescribeAccountX_Amz_Target { AWSOrganizationsV20161128_DescribeAccount = 0 }

	export enum DescribeCreateAccountStatusX_Amz_Target { AWSOrganizationsV20161128_DescribeCreateAccountStatus = 0 }

	export enum DescribeEffectivePolicyX_Amz_Target { AWSOrganizationsV20161128_DescribeEffectivePolicy = 0 }

	export enum DescribeHandshakeX_Amz_Target { AWSOrganizationsV20161128_DescribeHandshake = 0 }

	export enum DescribeOrganizationX_Amz_Target { AWSOrganizationsV20161128_DescribeOrganization = 0 }

	export enum DescribeOrganizationalUnitX_Amz_Target { AWSOrganizationsV20161128_DescribeOrganizationalUnit = 0 }

	export enum DescribePolicyX_Amz_Target { AWSOrganizationsV20161128_DescribePolicy = 0 }

	export enum DetachPolicyX_Amz_Target { AWSOrganizationsV20161128_DetachPolicy = 0 }

	export enum DisableAWSServiceAccessX_Amz_Target { AWSOrganizationsV20161128_DisableAWSServiceAccess = 0 }

	export enum DisablePolicyTypeX_Amz_Target { AWSOrganizationsV20161128_DisablePolicyType = 0 }

	export enum EnableAWSServiceAccessX_Amz_Target { AWSOrganizationsV20161128_EnableAWSServiceAccess = 0 }

	export enum EnableAllFeaturesX_Amz_Target { AWSOrganizationsV20161128_EnableAllFeatures = 0 }

	export enum EnablePolicyTypeX_Amz_Target { AWSOrganizationsV20161128_EnablePolicyType = 0 }

	export enum InviteAccountToOrganizationX_Amz_Target { AWSOrganizationsV20161128_InviteAccountToOrganization = 0 }

	export enum LeaveOrganizationX_Amz_Target { AWSOrganizationsV20161128_LeaveOrganization = 0 }

	export enum ListAWSServiceAccessForOrganizationX_Amz_Target { AWSOrganizationsV20161128_ListAWSServiceAccessForOrganization = 0 }

	export enum ListAccountsX_Amz_Target { AWSOrganizationsV20161128_ListAccounts = 0 }

	export enum ListAccountsForParentX_Amz_Target { AWSOrganizationsV20161128_ListAccountsForParent = 0 }

	export enum ListChildrenX_Amz_Target { AWSOrganizationsV20161128_ListChildren = 0 }

	export enum ListCreateAccountStatusX_Amz_Target { AWSOrganizationsV20161128_ListCreateAccountStatus = 0 }

	export enum ListDelegatedAdministratorsX_Amz_Target { AWSOrganizationsV20161128_ListDelegatedAdministrators = 0 }

	export enum ListDelegatedServicesForAccountX_Amz_Target { AWSOrganizationsV20161128_ListDelegatedServicesForAccount = 0 }

	export enum ListHandshakesForAccountX_Amz_Target { AWSOrganizationsV20161128_ListHandshakesForAccount = 0 }

	export enum ListHandshakesForOrganizationX_Amz_Target { AWSOrganizationsV20161128_ListHandshakesForOrganization = 0 }

	export enum ListOrganizationalUnitsForParentX_Amz_Target { AWSOrganizationsV20161128_ListOrganizationalUnitsForParent = 0 }

	export enum ListParentsX_Amz_Target { AWSOrganizationsV20161128_ListParents = 0 }

	export enum ListPoliciesX_Amz_Target { AWSOrganizationsV20161128_ListPolicies = 0 }

	export enum ListPoliciesForTargetX_Amz_Target { AWSOrganizationsV20161128_ListPoliciesForTarget = 0 }

	export enum ListRootsX_Amz_Target { AWSOrganizationsV20161128_ListRoots = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSOrganizationsV20161128_ListTagsForResource = 0 }

	export enum ListTargetsForPolicyX_Amz_Target { AWSOrganizationsV20161128_ListTargetsForPolicy = 0 }

	export enum MoveAccountX_Amz_Target { AWSOrganizationsV20161128_MoveAccount = 0 }

	export enum RegisterDelegatedAdministratorX_Amz_Target { AWSOrganizationsV20161128_RegisterDelegatedAdministrator = 0 }

	export enum RemoveAccountFromOrganizationX_Amz_Target { AWSOrganizationsV20161128_RemoveAccountFromOrganization = 0 }

	export enum TagResourceX_Amz_Target { AWSOrganizationsV20161128_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSOrganizationsV20161128_UntagResource = 0 }

	export enum UpdateOrganizationalUnitX_Amz_Target { AWSOrganizationsV20161128_UpdateOrganizationalUnit = 0 }

	export enum UpdatePolicyX_Amz_Target { AWSOrganizationsV20161128_UpdatePolicy = 0 }

}

